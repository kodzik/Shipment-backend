const path = require('path');

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  // Should be STATIC_URL + path/to/build      src/vue/dist/
  publicPath: '/static/',

  // Output to a directory in STATICFILES_DIRS      src/vue/dist/
  outputDir: path.resolve(__dirname, '../static/'),

  // Django will hash file names, not webpack
  filenameHashing: false,

  // See: https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  runtimeCompiler: true,

  devServer: {
    devMiddleware: {
      writeToDisk: true,
    }
  },

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})
