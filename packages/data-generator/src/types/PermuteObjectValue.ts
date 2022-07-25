import { Value } from './Value';

export interface PermuteObjectValue<T extends object> {
  type: 'permute-object';
  object: { [P in keyof T]: Value<T[P]> };
}
