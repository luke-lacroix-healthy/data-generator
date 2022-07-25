import { PermuteValue, StaticValue } from '../types';

export function generatePermuteValueFromArray<T>(
  input: T[],
  clone: StaticValue<T>['clone'] = false,
): PermuteValue<T> {
  return {
    type: 'permute-value',
    permutations: input.map((v) => ({ type: 'static', value: v, clone })),
  };
}
