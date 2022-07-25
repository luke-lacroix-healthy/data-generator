# @ownhealthil/data-generator

Used to generate data for test cases.

## Usage

Install the module:

```shell
npm i -D @ownhealthil/data-generator
```

```shell
yarn add -D @ownhealthil/data-generator
```

In your test:

```typescript
import { generateDataSet, generatePermuteValuesFromArray } from '@ownhealthil/data-generator';

let dataSet: DataType[];

beforeAll(async () => {
  dataSet = await generateDataSet<DataType>({
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
});
```

The `dataSet` variable will now contain all permutations of the data defined by your dataset definition.

## TODO

- add more tests
