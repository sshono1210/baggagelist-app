// コンポーネントの作成
var Index = Vue.extend({
    template: "#l-index"
});
var Detail = Vue.extend({
    template: '#l-detail'
});
var New = Vue.extend({
    template: '#l-new',
    mounted:function(){ //コンポーネント読み込むときにアコーディオンが動くようにする
        console.log($('.collapsible'))
        $('.collapsible').collapsible({
            accordion : false
        });
    }
});

// ルーターの定義
const routes = [
    { path: '/', component: Index },
    { path: '/detail', component: Detail },
    { path: '/new', component: New }
];

// ルーターの登録
const router = new VueRouter({
    routes:routes // routes: routes の短縮表記
});

$(function(){
    var app = new Vue({
        el: "#app",
        router: router
    });
});