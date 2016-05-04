module.exports = function(config) {
  config.set({
    singleRun: true,
    reporters: ['spec'],
    browsers: ['PhantomJS'],
    basePath: '',
    frameworks: ['browserify', 'jasmine'],
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'src/**/*.spec.js'
    ],
    exclude: [],
    preprocessors: {
      'src/**/*.js': ['browserify']
    },
    browserify: {
      debug: true,
      transform: ['babelify']
    }
  });
};
