require.config({
    "paths": {
        "jquery": "../components/jquery/jquery",
        "roughDraft": "libs/roughdraft.min",
        "domReady": "libs/domReady"
    }
});

define(function(require){
    var domReady = require('domReady');
    var $ = require('jquery');

    domReady(function(){
        if($('body').hasClass('app-demo')){
            require(['modules/demo']);
        }
    });
});
