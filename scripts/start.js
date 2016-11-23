const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const chalk = require('chalk');
const paths = require('../config/paths');
const config = require('../config/webpack.config.dev');
const clearConsole = require('./clearConsole');
const env = require('dotenv').config();
const port = env.PORT || 3000;

let compiler;

function setupCompiler() {
  compiler = webpack(config);

  compiler.plugin('invalid', function() {
    clearConsole();
    console.log('Compiling...');
  });

  compiler.plugin('done', function(stats) {
    clearConsole();
    console.log(chalk.green(`Development server listening at http://localhost:${port}.`));
  });
}

function runDevServer() {
  let devServer = new WebpackDevServer(compiler, {
    contentBase: paths.appPublic,
    publicPath: config.output.publicPath,
    quiet: true,
    watchOptions: {
      ignored: /node_modules/
    }
  });

  devServer.listen(port, (err, result) => {
    if (err) {
      return console.log(err);
    }

    clearConsole();
    console.log(chalk.cyan('Starting the development server...'));
    console.log();
  });
}

(function run() {
  setupCompiler();
  runDevServer();
})();