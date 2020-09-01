import type { StorybookConfig } from "@storybook/react-webpack5"

const config: StorybookConfig = {
  framework: "@storybook/react-webpack5",
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-webpack5-compiler-swc"
  ],
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    config.module ||= {}
    config.module.rules ||= []
		config.module.rules.push({
			test: /\.less$/,
			use: [
				{ loader: 'style-loader' },
				{ loader: 'css-loader', options: { modules: false } },
				{
					loader: 'less-loader',
					options: { lessOptions: { javascriptEnabled: true } },
				},
			],
		});
		return config;
	}
}
export default config
