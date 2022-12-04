import { NextApiRequest, NextApiResponse } from 'next';

import projects from 'public/generated/projects_flatten.json';
import { Project } from 'src/domain/projects/entity';
import { getQueryParams } from 'src/shared/queryParams';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { query } = req;
  try {
    const projectID = getQueryParams('projectID', query) ?? '';

    const projectsData = projects as Record<string, Project>;
    const data = projectsData[projectID];

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
}
