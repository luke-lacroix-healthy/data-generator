export interface StaticValue<T> {
  type: 'static';
  /**
   * The static value.
   */
  value: T;
  /**
   * If `true`, then the value is cloned by `JSON.parse(JSON.stringify(value))`.
   * If `'auto'`, then the value is only cloned if it is an object and not null.
   * If it is a function, then the value is passed to the function and the result is used.
   * In other cases, the value is just used.
   */
  clone?: 'auto' | boolean | ((input: T, iteration: number) => Promise<T> | T);
}
