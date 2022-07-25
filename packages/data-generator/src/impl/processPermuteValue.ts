import { Promise } from 'bluebird';
import { PermuteValue } from '../types';
import { GeneratedValue } from './GeneratedValue';
import { processValue } from './processValue';

export async function processPermuteValue<T>(
  { permutations }: PermuteValue<T>,
  iteration: number,
): Promise<GeneratedValue<T>> {
  const values = [] as T[];
  await Promise.each(permutations, async (p) => {
    const value = await processValue(p, iteration);
    if (value.permute) {
      values.push(...value.value);
    } else {
      values.push(value.value);
    }
  });

  return {
    permute: true,
    value: values,
  };
}
