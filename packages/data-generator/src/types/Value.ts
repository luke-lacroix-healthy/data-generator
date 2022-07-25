import { DynamicValue } from './DynamicValue';
import { PermuteObjectValue } from './PermuteObjectValue';
import { PermuteValue } from './PermuteValue';
import { StaticValue } from './StaticValue';

export type Value<T> =
  | DynamicValue<T>
  | (T extends object ? PermuteObjectValue<T> : never)
  | PermuteValue<T>
  | StaticValue<T>;
