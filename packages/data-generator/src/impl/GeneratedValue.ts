export type GeneratedValue<T> = { permute: true; value: T[] } | { permute: false; value: T };
