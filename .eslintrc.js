module.exports = {
	root: true,
	parser: '@babel/eslint-parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
		},
		requireConfigFile: false,
	},
	extends: [
		'plugin:import/recommended',
		'eslint:recommended',
	],
	env: {
		browser: true,
		es2020: true,
		commonjs: true
	},
	rules: {
		semi: ['warn', 'always'],
		'no-console': 'off',
		'no-unused-vars': 'warn',
		'no-empty': 'off',
		'no-extra-boolean-cast': 'off',
		'no-unreachable': 'warn',
		'no-async-promise-executor': 'off',
		'no-fallthrough': 'off',
		'require-atomic-updates': 'off',
		'no-case-declarations': 'off',
	},
	overrides: [
		{
			files: [
				'**/*.test.js'
			],
			env: {
				jest: true // now **/*.test.js files' env has both es6 *and* jest
			},
			// 'extends': ['plugin:jest/recommended'] // Can't extend in overrides: https://github.com/eslint/eslint/issues/8813
			plugins: ['jest'],
			rules: {
				// Recommended
				'jest/no-commented-out-tests': 'warn',
				'jest/no-conditional-expect': 'error',
				'jest/no-deprecated-functions': 'warn',
				'jest/no-disabled-tests': 'warn',
				'jest/no-done-callback': 'error',
				'jest/expect-expect': 'off', // annoying
				'jest/no-export': 'error',
				'jest/no-focused-tests': 'warn',
				'jest/no-identical-title': 'error',
				'jest/no-interpolation-in-snapshots': 'error',
				'jest/no-jasmine-globals': 'error',
				'jest/no-jest-import': 'error',
				'jest/no-mocks-import': 'error',
				'jest/no-standalone-expect': 'warn',
				'jest/no-test-prefixes': 'error',
				'jest/valid-describe-callback': 'error',
				'jest/valid-expect': 'error',
				'jest/valid-expect-in-promise': 'error',
				'jest/valid-title': 'warn',
				// Style
				'jest/prefer-to-be': 'warn',
				'jest/prefer-to-contain': 'warn',
				'jest/prefer-to-have-length': 'warn',
			}
		}
	],
	globals: {
	}
};