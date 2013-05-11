module.exports = {
    // `name` and `out` is set by grunt-usemin
    //uglify2: {} // https://github.com/mishoo/UglifyJS2
    appDir: 'app',
    baseUrl: 'scripts/',
    mainConfigFile: 'app/scripts/main.js',
    preserveLicenseComments: true,
    useStrict: true,
    wrap: true,
    modules: [
        {
            // module names are relative to baseUrl
            name: 'modules/demo'
        }
    ]
};