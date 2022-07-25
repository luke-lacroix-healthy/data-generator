export function incrementArray(bounds: number[], positions: number[]): boolean {
  for (let i = bounds.length - 1; i >= 0; i--) {
    if (positions[i] + 1 < bounds[i]) {
      positions[i]++;
      return true;
    }
    positions[i] = 0;
  }

  return false;
}
