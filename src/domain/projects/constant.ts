import { Category } from './entity';

export const projectMap: Record<Category, string> = {
  AFOLU: 'Agriculture, forestry and other land use',
  ARR: 'Afforestation, Reforestation and Revegetation (ARR)',
  Afforestation: 'Afforestation',
  Agriculture: 'Agriculture',
};

export const categories: Array<Category> = [
  'AFOLU',
  'ARR',
  'Afforestation',
  'Agriculture',
];
