const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());

function resolveApp(relativePath) {
  return path.resolve(appDirectory, relativePath);
}

module.exports = {
  appSrc: resolveApp('src'),
  appIndexJs: resolveApp('src/client.js'),
  appPublic: resolveApp('public'),
  appDist: resolveApp('build'),
  appHtml: resolveApp('public/index.html'),
  appStyles: resolveApp('src/styles')
};