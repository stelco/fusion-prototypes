// See http://brunch.io for documentation.

exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': /^(?!app)/, // Files that are not in `app` dir.
      'app.js': /^app/
    }
  },
  stylesheets: { 
    joinTo: {
      'app.css': /^app/
    }
  }
};

exports.plugins = {
  babel: {
    presets: ['latest']
  },
  sass: {
    options: {
      includePaths: ['./node_modules/bootstrap/scss/'],
      precision: 8
    }
  },
  postcss: {
    processors: ([
      require('autoprefixer')(['last 8 versions']),
      // minify CSS plugin (needs configuring with PostCSS)
      require('csswring')()
    ])
  }

};

exports.npm = {
  globals: {
    $: 'jquery',
    jQuery: 'jquery'
  }
}
