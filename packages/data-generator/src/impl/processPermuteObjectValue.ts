import { PermuteObjectValue } from '../types';
import { incrementArray } from '../util';
import { GeneratedValue } from './GeneratedValue';
import { processValue } from './processValue';

export async function processPermuteObjectValue<T extends object>(
  { object }: PermuteObjectValue<T>,
  iteration: number,
): Promise<GeneratedValue<T>> {
  const permutations = [] as T[];
  const keys = Object.keys(object) as (keyof T)[];
  const data = {} as { [K in keyof T]: GeneratedValue<T[K]> };

  for (const key of keys) {
    data[key] = await processValue(object[key], iteration);
  }

  let runPermutations = false;

  const bounds = keys.map((key) => {
    const val = data[key];
    const count = val.permute ? val.value.length : 1;
    runPermutations ||= count > 0;
    return count;
  });

  // detect edge cases where there are no permutations
  if (runPermutations) {
    const positions = keys.map(() => 0);
    do {
      permutations.push(
        Object.fromEntries(
          [...keys.entries()].map(([index, key]) => {
            const entry = data[key];
            if (entry.permute) {
              return [key, entry.value[positions[index]]];
            } else {
              return [key, entry.value];
            }
          }),
        ) as T,
      );
    } while (incrementArray(bounds, positions));
  }

  return { permute: true, value: permutations };
}
