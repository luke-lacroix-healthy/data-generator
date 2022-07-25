export interface DynamicValue<T> {
  type: 'dynamic';
  /**
   * Generates the value.
   */
  generate: (iteration: number) => Promise<T> | T;
}
