import { DataSetDefinition, GenerateDataSetOptions } from '../types';
import { processValue } from './processValue';

/**
 *
 * @param definition the definition for the data set
 * @param options options for data set generation
 * @returns
 */
export async function generateDataSet<T>(
  { value }: DataSetDefinition<T>,
  { filter = () => true, count = 1 }: GenerateDataSetOptions<T> = {},
): Promise<T[]> {
  const result = [] as T[];

  for (let i = 0; i < count; i++) {
    const generatedValue = await processValue(value, i);

    if (generatedValue.permute) {
      generatedValue.value.forEach((val) => {
        if (filter(val)) {
          result.push(val);
        }
      });
    } else {
      if (filter(generatedValue.value)) {
        result.push(generatedValue.value);
      }
    }
  }

  return result;
}
