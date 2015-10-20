var fis = module.exports = require('fis');
fis.require.prefixes = [ 'rsd', 'scrat', 'fis' ];
fis.cli.name = 'rsd';
fis.cli.info = fis.util.readJSON(__dirname + '/package.json');

fis.cli.help.commands = [ 'release', 'server' ];

// extension map
fis.config.set('roadmap.ext', {
    less: 'css',
    sass: 'css',
    scss: 'css',
    styl: 'css',
    stylus: 'css',
    coffee: 'js',
    md: 'html',
    jade: 'html',
    ejs: 'js',
    handlebars: 'js'
});

// plugins
fis.config.set('modules.parser', {
    less: 'less',
    sass: 'node-sass',
    scss: 'node-sass',
    styl: 'stylus',
    stylus: 'stylus',
    coffee: 'coffee-script',
    md: 'marked',
    jade: 'jade',
    ejs: 'ejs',
    handlebars: 'handlebars'
});

// plugin settings
fis.config.set('modules.optimizer.html', 'html-minifier');
fis.config.set('settings.optimizer.png-compressor.type', 'pngquant');
fis.config.set('settings.optimizer.html-minifier', {
    // fis直接将此配置传递给html-minfier模块
    // 因此相关配置项请直接参阅html-minifier文档
    removeComments: true,
    collapseWhitespace: true,
    conservativeCollapse: true,
    removeAttributeQuotes: true
});

fis.config.set('roadmap.path', [
    {
        reg: '**.ejs',
        release: false
    },
    {
        reg: '**.handlebars',
        release: false
    },
    {
        reg: /\/_[^\/]+$/,
        release: false
    }
]);