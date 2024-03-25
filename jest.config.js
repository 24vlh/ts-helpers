'use strict';

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        '^.+\\.ts?$': [
            'ts-jest',
            {
                isolatedModules: true
            }
        ]
    },
    maxWorkers: 2,
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageProvider: "v8",
    coverageReporters: [
        "json",
        "text",
        "lcov",
        "clover"
    ],
    coverageThreshold: {
        global: {
            branches: 90,
            functions: 30,
            lines: 70,
            statements: 70
        }
    }
};
