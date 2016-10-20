'use strict';
var collapsible = require("./modules/collapsible.js");

const trips = [
    {
        state: true,
        place: "ベトナム",
        days: "一ヶ月",
        tags: ["一人旅","アジア"],
        items: [
            "パスポート",
            "ESTA控え",
            "マネークリップ（お金、カード）",
            "マウパ",
            "ストール",
            "コンタクト",
            "飛行機用枕"
        ]
    },
    {
        state: false,
        place: "竹富島",
        days: "１週間",
        tags: ["友達","国内"],
        items: [
            "ラッシュガード",
            "帽子",
            "マネークリップ（お金、カード）",
            "水着",
            "ビーサン",
            "海パン",
            "バスタオル"
        ]
    },
    {
        state: true,
        place: "アラスカ",
        days: "２週間",
        tags: ["一人旅","北米", "冬"]
    },
    {state: false,
        place: "北海道",
        days: "４泊５日",
        tags: ["社員旅行","国内"]
    },
    {
        state: false,
        place: "渡嘉敷島",
        days: "３泊４日",
        tags: ["一人旅","国内"]
    },
    {
        state: false,
        place: "ニュージーランド",
        days: "２週間",
        tags: ["留学","南半球"]
    }
];

// データの保存
//localStorage.setItem("test", JSON.stringify(object));
//var datas = JSON.parse(localStorage.getItem("test"));
// データの取得
//for(var data in datas){
//    console.log(datas[data]);
//}

// コンポーネントの作成
var Index = Vue.extend({
    template: "#l-index",
    created: ()=>{
        this.$parent.trips = trips
    }
    //data: ()=>{
    //    return {
    //        trips: trips
    //    };
    //}
});
var Detail = Vue.extend({
    template: '#l-detail',
    data: ()=>{
        return {
            trip: null
        }
    },
    created: ()=>{
        this.trip = this.$parent.trips[this.$parent.index];
    },
    mounted: ()=>{
        console.log(this.$parent.trips);
        //Detail.list = list;
    }
});
var New = Vue.extend({
    template: '#l-new',
    mounted:()=>{
        collapsible();
    }
});
var Edit = Vue.extend({
    template: '#l-edit',
    mounted:()=>{
        collapsible();
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

$(()=>{
    var app = new Vue({
        el: "#app",
        data: {
            trips: trips,
            index: 1
        },
        router: router
    });
});