/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  roots: [
    '<rootDir>/app/frontend/'
  ],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: [
    '**/__tests__/**/*.test.ts?(x)',
  ],
  transform: {
    '^.+\\.tsx?$': '@swc/jest',
  },
  setupFilesAfterEnv: [
    '<rootDir>/app/frontend/test/setup.ts',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/app/frontend/$1',
  },
};
