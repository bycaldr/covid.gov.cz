import ExtractCss from 'extract-css-chunks-webpack-plugin';
export const onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [ExtractCss.loader, 'css-loader'],
        },
      ],
    },

    plugins: [new ExtractCss()],
  });
};
