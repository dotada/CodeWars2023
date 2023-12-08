const path = require('path')

export default{
  build: {
    rollupOptions: {
      input: {
        app: 'public/index.html'
      }
    }
  },
  root: path.resolve(__dirname, 'src'),
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  server: {
    port: 8080,
    hot: true
  }
}