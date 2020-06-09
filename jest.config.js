// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.ts'],
  coverageDirectory: "coverage",
  coverageReporters: ['lcov', 'html', 'text-summary'],
  moduleNameMapper: { '^@/(.*)$': '<rootDir>/src/$1', '^tests/(.*)': '<rootDir>/tests/$1' },
  preset: 'ts-jest',
  resetModules: true,
  testEnvironment: "node",
  testPathIgnorePatterns: ['/node_modules/'],
  testRegex: '.spec.ts$',
  transformIgnorePatterns: ['/node_modules/']
};
