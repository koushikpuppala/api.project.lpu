/** @type {import('prettier').Config} */

module.exports = {
	tabWidth: 4,
	printWidth: 100,
	semi: false,
	useTabs: true,
	singleQuote: true,
	jsxSingleQuote: true,
	bracketSameLine: true,
	jsxBracketSameLine: true,
	singleAttributePerLine: true,
	arrowParens: 'avoid',
	overrides: [
		{
			files: '*.yml',
			options: {
				tabWidth: 2,
			},
		},
	],
}
