/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  displayName: 'data-generator',
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['./jest.env.setup.js'],
};
