var fis = module.exports = require('fis');
fis.require.prefixes = [ 'rsd', 'scrat', 'fis' ];
fis.cli.name = 'rsd';
fis.cli.info = fis.util.readJSON(__dirname + '/package.json');

fis.cli.help.commands = [ 'release', 'server' ];

fis.config.set('roadmap.ext', {
    less: 'css',
    sass: 'css',
    scss: 'css',
    styl: 'css',
    stylus: 'css',
    coffee: 'js',
    ts: 'js',
    md: 'html',
    jade: 'html',
    ejs: 'html',
    handlebars: 'html'
});

fis.config.set('project.fileType.text', 'ts');

fis.config.set('modules.parse', {
    less: 'less',
    sass: 'sass',
    scss: 'sass',
    styl: 'stylus',
    stylus: 'stylus',
    coffee: 'coffee-script',
    ts: 'ts',
    md: 'marked',
    jade: 'jade',
    ejs: 'ejs'
});