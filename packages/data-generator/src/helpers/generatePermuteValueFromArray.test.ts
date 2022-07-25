import { PermuteValue } from '../types';
import { generatePermuteValueFromArray } from './generatePermuteValueFromArray';

describe('helpers/generatePermutePropertyFromArray', () => {
  test('When provided an array then a PermutePropertyValue is returned', async () => {
    // Arrange
    const input = [1, 2, 3];
    const clone = (n: number) => n;

    // Act
    expect(generatePermuteValueFromArray(input, clone)).toMatchObject<
      PermuteValue<typeof input[0]>
    >({
      type: 'permute-value',
      permutations: input.map((v) => ({
        type: 'static',
        value: v,
        clone,
      })),
    });
  });
});
