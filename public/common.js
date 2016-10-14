var Index = Vue.extend({
    template: "#l-index"
});
var Detail = Vue.extend({
    template: '#l-detail'
});
var New = Vue.extend({
    template: '#l-new'
});


$(function(){
    Vue.component("index",Index);
    Vue.component("detail",Detail);
    Vue.component("new",New);
    var app = new Vue({
        el: "#app",
        data: {
            current: "index"
        },
        created: function () {
            console.log("hello");

        },
        methods: {
            route: function(route){
                //app.current = route
            }
        }
    });



});