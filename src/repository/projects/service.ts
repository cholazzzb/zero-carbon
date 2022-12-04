import { z } from 'zod';

import {
  Category,
  categorySchema,
  projectSchema,
} from 'src/domain/projects/entity';

const ProjectsDataSchema = z.array(
  z.object({
    category: categorySchema,
    numOfData: z.number(),
    data: z.array(projectSchema),
  }),
);
export type ProjectsData = z.TypeOf<typeof ProjectsDataSchema>;

type GetProjectsData = (params: {
  page: number;
  pageSize: number;
  categories: Array<Category>;
}) => Promise<ProjectsData>;
export const getProjectsData: GetProjectsData = async (params) => {
  return new Promise(async (resolve, rejects) => {
    const responseSchema = ProjectsDataSchema;
    const categoryparams = params.categories
      .map((cat) => `&categories=${cat}`)
      .join('');

    return fetch(
      `http://localhost:3000/api/projects?page=${params.page}&pageSize=${params.pageSize}${categoryparams}`,
      {
        method: 'GET',
      },
    )
      .then(async (response) => {
        const responseText = await response.text();
        try {
          const json = JSON.parse(responseText);
          const schema = responseSchema.parse(json);
          resolve(schema);
        } catch (error) {
          const errorData = {
            message: responseText,
            code: response.status,
            errorCode: response.status,
          };
          rejects(errorData);
        }
      })
      .catch((err) => {
        rejects({ message: err });
      });
  });
};
