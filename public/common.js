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
var Edit = Vue.extend({
    template: '#l-edit',
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
    { path: '/new', component: New },
    { path: '/edit', component: Edit }
];
// ルーターの登録
const router = new VueRouter({
    routes:routes // routes: routes の短縮表記
});


var object = {
    data1: "apple",
    data2: "lemon",
    data3: "melon"
};
// データの保存
localStorage.setItem('test', JSON.stringify(object));
// データの取得
console.log(JSON.parse(localStorage.getItem('test')));


$(function(){
    var app = new Vue({
        el: "#app",
        router: router
    });


});