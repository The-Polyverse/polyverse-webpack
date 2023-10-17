import type { Config } from '@jest/types';

function createProject(name: string, target: string) {
  return {
    displayName: name,
    testEnvironment: target,
    testMatch: [`<rootDir>/${name === 'web' ? '' : 'server/'}?(*.)+(spec|test).[tj]s?(x)`],
    rootDir: './src',
    testPathIgnorePatterns: [name === 'web' ? '/server/' : '/web/'],
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
  };
}

export default {
  projects: [
    createProject('web', 'jest-environment-jsdom'),
    createProject('server', 'jest-environment-node'),
  ],
} as Config.InitialOptions ;

