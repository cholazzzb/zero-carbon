import { faker } from '@faker-js/faker';
import { loadEnvConfig } from '@next/env';
import { createClient } from 'pexels';

import { Category, Project } from '../src/domain/projects/entity';

const projectDir = process.cwd()
const env = loadEnvConfig(projectDir)
const pexelsClient = createClient(env.combinedEnv.PEXEL_API_KEY ?? '');
const query = 'Nature';
const pexelsLimit = 50; // limit 50 images/page

export const generateImageURLs = async (
  numOfImages: number,
): Promise<Array<string>> => {
  const result: Array<string> = [];

  const numOfPages = numOfImages > pexelsLimit ? pexelsLimit : numOfImages;

  const promises = Array(Math.ceil(numOfImages / pexelsLimit))
    .fill(null)
    .map((_, idx) =>
      pexelsClient.photos
        .search({ query, size: 'small', page: idx + 1, per_page: numOfPages })
        .then((photos) => {
          if ('error' in photos) {
            throw Error('error when fetching pexels image');
          }

          photos.photos.forEach((element) => {
            result.push(element.src.original);
          });
        })
        .catch((err) => console.error(err)),
    );

  await Promise.all(promises);

  return result;
};

export type GeneratedProjectsData = Record<
  Category,
  {
    id: string;
    data: Array<Project>;
  }
>;

export const generateProjectsData = async (
  projectCategories: Array<Category>,
  numOfData: number,
  images: Array<string>,
  maxImageInProject: number,
): Promise<GeneratedProjectsData> => {
  return projectCategories.reduce((result, category, idx) => {
    const initialImageIdx = idx * numOfData * maxImageInProject - 1;

    result[category] = {
      id: faker.datatype.uuid(),
      data: Array(numOfData)
        .fill(null)
        .map((_, dataIdx) => ({
          id: faker.datatype.uuid(),
          category: projectCategories[idx],
          name: `${faker.address.cityName()} ${faker.commerce.productAdjective()} Forest Restoration`,
          location: faker.address.cityName(),
          startYear: faker.date.future().getFullYear().toString(),
          overview: faker.lorem.lines(2),
          impact: faker.lorem.lines(2),
          images: Array(1 + Math.round(Math.random() * (maxImageInProject - 1)))
            .fill(null)
            .map((_, imageIdx) => {
              const idx = initialImageIdx + (imageIdx + 1) * (dataIdx + 1);
              return images[idx];
            }),
        })),
    };
    return result;
  }, {} as GeneratedProjectsData);
};
