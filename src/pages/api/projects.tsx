import { NextApiRequest, NextApiResponse } from 'next';

import projects from 'public/generated/projects.json';
import { GeneratedProjectsData } from 'scripts/generator';
import { Category, categorySchema } from 'src/domain/projects/entity';
import { ProjectsData } from 'src/repository/projects/service';
import { getQueryParams, getQueryParamsArray } from 'src/shared/queryParams';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { query } = req;
  try {
    const page = Number(getQueryParams('page', query) || '1');
    const pageSize = Number(getQueryParams('pageSize', query) || '10');
    const categoriesParam = getQueryParamsArray('categories', query);

    const categories = categoriesParam.map((cat) => categorySchema.parse(cat));

    const projectsData = projects as GeneratedProjectsData;
    const data: ProjectsData = categories.map((cat) => ({
      category: cat as Category,
      numOfData: projects[cat].data.length,
      data: projectsData[cat].data.slice(
        (page - 1) * pageSize,
        page * pageSize,
      ),
    }));
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
}
