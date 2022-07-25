import { DynamicValue } from '../types';
import { GeneratedValue } from './GeneratedValue';

export async function processDynamicValue<T>(
  value: DynamicValue<T>,
  iteration: number,
): Promise<GeneratedValue<T>> {
  return { permute: false, value: await value.generate(iteration) };
}
