import { Value } from '../types';
import { GeneratedValue } from './GeneratedValue';
import { processDynamicValue } from './processDynamicValue';
import { processPermuteObjectValue } from './processPermuteObjectValue';
import { processPermuteValue } from './processPermuteValue';
import { processStaticValue } from './processStaticValue';

export async function processValue<T>(
  value: Value<T>,
  iteration: number,
): Promise<GeneratedValue<T>> {
  switch (value.type) {
    case 'dynamic':
      return await processDynamicValue(value, iteration);
    case 'permute-object':
      return await processPermuteObjectValue(value, iteration);
    case 'permute-value':
      return await processPermuteValue(value, iteration);
    case 'static':
      return await processStaticValue(value, iteration);
    default:
      throw new Error(`unknown value.type: ${value['type']}`);
  }
}
