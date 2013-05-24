require.config({
    "paths": {
        "jquery": "../components/jquery/jquery",
        "roughdraft.js": "../components/roughdraft.js/jquery.roughdraft.0.1.3.min"
    }
});

define(function(require){
    var domReady = require('libs/domReady');
    var $ = require('jquery');

    domReady(function(){
        if($('body').hasClass('app-demo')){
            require(['modules/demo']);
        }
    });
});