import { DataSetDefinition } from '../types';
import { processValue } from './processValue';

export async function generateDataSet<T>({ value }: DataSetDefinition<T>, count = 1): Promise<T[]> {
  const result = [] as T[];

  for (let i = 0; i < count; i++) {
    const generatedValue = await processValue(value, i);

    if (generatedValue.permute) {
      result.push(...generatedValue.value);
    } else {
      result.push(generatedValue.value);
    }
  }

  return result;
}
