import { mkdirSync, writeFileSync } from 'node:fs';

import { Category } from '../src/domain/projects/entity';
import { generateImageURLs, generateProjectsData } from './generator';

const numOfData = 25;
const maxImageInProject = 4;

const projectCategories: Array<Category> = [
  'AFOLU',
  'ARR',
  'Afforestation',
  'Agriculture',
];

const main = async () => {
  const images = await generateImageURLs(
    projectCategories.length * numOfData * maxImageInProject,
  );
  const projectsData = await generateProjectsData(
    projectCategories,
    numOfData,
    images,
    maxImageInProject,
  );
  mkdirSync('public/generated', { recursive: true });
  writeFileSync('public/generated/projects.json', JSON.stringify(projectsData));
};

main();
