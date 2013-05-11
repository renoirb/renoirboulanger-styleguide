require.config({
    paths: {
        jquery: '/components/jquery/jquery',
        roughdraft: '/components/roughdraft.js/jquery.roughdraft.0.1.3'
    },
    shim: {
        roughdraft: {
            deps: ['jquery','roughdraft']
        }
    }
});

define(['libs/domReady','jquery'], function(domReady,$){
    domReady(function(){
        if($('body').hasClass('app-demo')){
            require(['modules/demo']);
        }
    });
});