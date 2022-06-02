const path = require('path');

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  publicPath: '', // Should be STATIC_URL + path/to/build      src/vue/dist/
  outputDir: path.resolve(__dirname, '../static/'), // Output to a directory in STATICFILES_DIRS      src/vue/dist/
  filenameHashing: false, // Django will hash file names, not webpack
  runtimeCompiler: true, // See: https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  devServer: {
    devMiddleware: {
      writeToDisk: true, 
    }
  },
})
