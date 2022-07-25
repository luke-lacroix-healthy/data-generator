import { StaticValue } from '../types';
import { GeneratedValue } from './GeneratedValue';

export async function processStaticValue<T>(
  value: StaticValue<T>,
  iteration: number,
): Promise<GeneratedValue<T>> {
  switch (value.clone) {
    case 'auto':
      switch (typeof value.value) {
        case 'object':
          return { permute: false, value: JSON.parse(JSON.stringify(value.value)) };
        default:
          return { permute: false, value: value.value };
      }
    case true:
      return { permute: false, value: JSON.parse(JSON.stringify(value.value)) };
    case false:
    case undefined:
      return { permute: false, value: value.value };
    default:
      return { permute: false, value: await value.clone(value.value, iteration) };
  }
}
