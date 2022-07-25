import { incrementArray } from './incrementArray';

describe('util/incrementArray', () => {
  test.each([
    [[0, 0, 0], [0, 0, 1], true],
    [[0, 0, 1], [0, 1, 0], true],
    [[0, 1, 1], [1, 0, 0], true],
    [[1, 0, 0], [1, 0, 1], true],
    [[1, 0, 1], [1, 1, 0], true],
    [[1, 1, 0], [1, 1, 1], true],
    [[1, 1, 1], [0, 0, 0], false],
  ])('When passed `%s` then the result is `%s`', async (positions, expected, result) => {
    // Arrange
    const bounds = [2, 2, 2];

    // Act
    expect(incrementArray(bounds, positions)).toEqual(result);

    // Assert
    expect(positions).toEqual(expected);
    expect(bounds).toEqual([2, 2, 2]);
  });
});
