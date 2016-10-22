'use strict';
var collapsible = require("./modules/collapsible.js");
var chips = require("./modules/chips.js");

// あとでLocalStorageから読み込むのでlet（テストデータ）
let trips = [
    {
        state: true,
        place: "ベトナム（テストデータ）",
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
        place: "竹富島（テストデータ）",
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
    }
    //{
    //    state: true,
    //    place: "アラスカ",
    //    days: "２週間",
    //    tags: ["一人旅","北米", "冬"],
    //    items: [
    //        "モッズコート",
    //        "ニット帽",
    //        "マネークリップ（お金、カード）",
    //        "手袋",
    //        "ムートンブーツ",
    //        "ヴァセリン",
    //        "ストール"
    //    ]
    //}
];

// コンポーネントの作成
var Index = Vue.extend({
    template: "#l-index",
    created: function(){
        parent.trips = trips
    }
    //data: ()=>{
    //    return {
    //        trips: trips
    //    };
    //}
});
var Detail = Vue.extend({
    template: '#l-detail',
    data: function(){
        return {
            trip: null
        }
    },
    created: function(){
        this.trip = this.$parent.trips[this.$parent.index];
    },
    mounted: function() {
        //console.log(this.$parent.trips);
    }
});

var New = Vue.extend({
    template: '#l-new',

    mounted:()=>{
        collapsible();
        chips();
    },
    //props: ['item'],
    data: function(){
        return {
            item: "",
            form: {
                state: true,
                place: null,
                days: null,
                items: [null]
                //place: "アメリカ",
                //days: "２週間",
                //tags: ["留学","南半球"],
                //items: [
                //    "マウパ",
                //    "パスポート",
                //    "マネークリップ（お金、カード）",
                //    "スニーカー",
                //    "サングラス"
                //]
            }
        }
    },
    methods: {
        register: function(state){
            if(state === "save") {
                this.form.state = false;
                console.log("false");
            }
            if(state === "done") {
                this.form.state = true;
                console.log("true");
            }
            this.$parent.trips.push(this.form);
            localStorage.setItem("trips",JSON.stringify(this.$parent.trips));
            //console.log(route,this.item);
            ////console.log('item');
            //localStorage.setItem("trips", JSON.stringify(this.form));
            //console.log(JSON.parse(localStorage.getItem("trips")));
        }
    }
});
var Edit = Vue.extend({
    template: '#l-edit',
    data: function(){
        return {
            trip: null
        }
    },
    created: function(){
        this.trip = this.$parent.trips[this.$parent.index];
    },
    mounted:()=>{
        collapsible();
        chips();
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
    // ローカルストレージのデータを取得
    const storedData = localStorage.getItem("trips");

    // ローカルストレージのデータが
    if(storedData){ //ある時
        trips = JSON.parse(storedData);
    }
    var app = new Vue({
        el: "#app",
        data: {
            trips: trips, //ない時はテストデータが入る
            index: 2
        },
        created: function(){
            //localStorage.clear();

        },
        router: router
    });
});