/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
	preset: 'ts-jest',
	automock: true,
	bail: 3,
	coverageDirectory: "coverage",
	coveragePathIgnorePatterns: ["/lib","/test","/node_modules/"],
	coverageReporters: ["lcov"],
	coverageThreshold: {
		global: {
			branches: 70,
			function: 70,
			lines: 70,
			statements: 70
		}
	},
	collectCoverageFrom: ["/src/**/*.ts"],
	moduleNameMapper: {
		"\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|wp3|m4a|aac|oga)$": "<rootDir>/test/__mocks__/fileMock.js",
		"\\.(css|s[ac]ss)$": "identity-obj-proxy"
	},
	// setupFilesAfterEnv: [
	// 	"<rootDir>/test/setupTests.js"
	// ],
	testEnvironment: "node",
	testMatch: [
		"<rootDir>/test/**/*.test.[jt]s",
		"<rootDir>/test/*.test.[jt]s"
	],
	// transformIgnorePatterns: [
	// 	"/node_modules/"
	// ],
	verbose: true
}