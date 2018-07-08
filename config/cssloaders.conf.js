const isProduction = function () {
  return process.env.NODE_ENV === JSON.stringify('production');
}

const browsers = [
  //
  // Official browser support policy:
  // https://v4-alpha.getbootstrap.com/getting-started/browsers-devices/#supported-browsers
  //
  '> 1%',
  'last 2 versions',
  'Chrome >= 40', // Exact version number here is kinda arbitrary
  'Firefox 15',
  // Note: Edge versions in Autoprefixer & Can I Use refer to the EdgeHTML rendering engine version,
  // NOT the Edge app version shown in Edge's "About" screen.
  // For example, at the time of writing, Edge 20 on an up-to-date system uses EdgeHTML 12.
  // See also https://github.com/Fyrd/caniuse/issues/1928
  // 'Edge >= 12',
  'Explorer >= 8',
  // Out of leniency, we prefix these 1 version further back than the official policy.
  // 'iOS >= 9',
  // 'Safari >= 9',
  // The following remain NOT officially supported, but we're lenient and include their prefixes to avoid severely breaking in them.
  // 'Android >= 4.4',
  // 'Opera >= 30'
];

exports.postCss = {
  loader: 'postcss-loader',
  options: {
    parser: 'postcss-scss',
    ident: 'postcss',
    sourceMap: !isProduction(),
    plugins: (loader) => [
      require('postcss-import')({addDependencyTo: loader}),
      require('postcss-cssnext')({warnForDuplicates: false, browsers}),
      require('postcss-nested'),
      require('postcss-atroot'),
      require('postcss-reporter'),
      isProduction() ? require('cssnano')() : null,
    ].filter(item => item),
  },
}

exports.css = {
  loader: 'css-loader',
  options: {
    sourceMap: !isProduction(),
    importLoaders: 2, // css-loader options
  },
}

exports.less = {
  loader: 'less-loader',
  options: {
    sourceMap: !isProduction(),
  },
}

exports.sass = {
  loader: 'sass-loader',
  options: {
    sourceMap: !isProduction(),
  },
}