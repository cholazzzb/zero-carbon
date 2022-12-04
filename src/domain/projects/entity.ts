import { z } from 'zod';

export const categorySchema = z.union([
  z.literal('AFOLU'),
  z.literal('ARR'),
  z.literal('Afforestation'),
  z.literal('Agriculture'),
]);
export type Category = z.TypeOf<typeof categorySchema>;

export const projectSchema = z.object({
  id: z.string(),
  category: categorySchema,
  name: z.string(),
  location: z.string(),
  startYear: z.string(),
  overview: z.string(),
  impact: z.string(),
  images: z.array(z.string()),
});

export type Project = z.TypeOf<typeof projectSchema>;
