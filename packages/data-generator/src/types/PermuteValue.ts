import { Value } from './Value';

export interface PermuteValue<T> {
  type: 'permute-value';
  /**
   * All possible permutations of the value.
   */
  permutations: Value<T>[];
}
