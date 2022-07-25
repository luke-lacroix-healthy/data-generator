export interface GenerateDataSetOptions<T> {
  /**
   * The number of data sets to generate.
   */
  count?: number;
  /**
   * Called for each entry to determine if it should be included.
   *
   * @returns `true` if the entry should be included
   */
  filter?: (entry: T) => boolean;
}
