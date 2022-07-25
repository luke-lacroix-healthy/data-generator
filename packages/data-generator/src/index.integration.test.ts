import { generatePermuteValueFromArray } from './helpers';
import { generateDataSet } from './impl';

interface Test {
  a: string;
  b: number;
  c: {
    cA: string;
    cB: number;
  };
}

describe('generateDataSet', () => {
  test('When blah blah blah all blah blah blah', async () => {
    // Arrange
    const dataSet = await generateDataSet<Test>({
      value: {
        type: 'permute-object',
        object: {
          a: generatePermuteValueFromArray(['a', 'b', 'c']),
          b: generatePermuteValueFromArray([1, 2, 3]),
          c: {
            type: 'permute-object',
            object: {
              cA: { type: 'static', value: 'cA' },
              cB: { type: 'static', value: 4 },
            },
          },
        },
      },
    });

    // Assert
    expect(dataSet).toEqual([
      {
        a: 'a',
        b: 1,
        c: { cA: 'cA', cB: 4 },
      },
      {
        a: 'a',
        b: 2,
        c: { cA: 'cA', cB: 4 },
      },
      {
        a: 'a',
        b: 3,
        c: { cA: 'cA', cB: 4 },
      },
      {
        a: 'b',
        b: 1,
        c: { cA: 'cA', cB: 4 },
      },
      {
        a: 'b',
        b: 2,
        c: { cA: 'cA', cB: 4 },
      },
      {
        a: 'b',
        b: 3,
        c: { cA: 'cA', cB: 4 },
      },
      {
        a: 'c',
        b: 1,
        c: { cA: 'cA', cB: 4 },
      },
      {
        a: 'c',
        b: 2,
        c: { cA: 'cA', cB: 4 },
      },
      {
        a: 'c',
        b: 3,
        c: { cA: 'cA', cB: 4 },
      },
    ]);
  });
});
