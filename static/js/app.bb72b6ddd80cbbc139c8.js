webpackJsonp([0],{"1qPv":function(t,e){},"7Otq":function(t,e,i){t.exports=i.p+"static/img/logo.0b63e0b.png"},A0IK:function(t,e){},Kei9:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a=i("VU/8")({name:"App"},n,!1,function(t){i("1qPv")},null,null).exports,r=i("/ocq"),_={name:"HeaderMenu",data:()=>({menuItems:[{name:"О компании",items:["string1","string2","string3"],show:!1},{name:"Продукция",items:["string11","string2","string3"],show:!1},{name:"Культуры",items:["string12","string2","string3"],show:!1},{name:"Статьи",items:["string13","string2","string3"],show:!1},{name:"Документация",items:["string14","string2","string3"],show:!1},{name:"Контакты",items:["string15","string2","string3"],show:!1}],index:0}),methods:{showEl(t){this.index=t,this.menuItems[t].show=!0},hideEl(t){this.index=t,this.menuItems[t].show=!1}}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header-menu"},[t._m(0),t._v(" "),i("div",{staticClass:"header-menu__items"},t._l(t.menuItems,function(e,s){return i("div",{key:e,staticClass:"header-menu__items-item",on:{mouseenter:function(e){return t.showEl(s)},mouseout:function(e){return t.hideEl(s)}}},[t._v(t._s(e.name))])}),0),t._v(" "),i("div",{staticClass:"header-menu__phone"},[t._v("+7 (831) 592 73 52")]),t._v(" "),i("div",{staticClass:"header-menu__items"},t._l(t.menuItems,function(e){return i("div",{key:e,staticClass:"header-menu__items-item"},t._l(e.items,function(s){return i("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"elements.show"}],key:s,staticClass:"element",on:{mouseenter:function(e){return t.showEl(t.index)},mouseout:function(e){return t.hideEl(t.index)}}},[t._v(t._s(s))])}),0)}),0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-menu__logo"},[e("img",{staticClass:"header-menu__logo-img",attrs:{src:i("7Otq"),alt:""}})])}]};var m=i("VU/8")(_,l,!1,function(t){i("gsVf")},null,null).exports,o={name:"HeaderMenu2",data:()=>({menuItems:[{name:"О компании",items:["string1","string2","string3"],show:!1},{name:"Продукция",items:["string11","string2","string3"],show:!1},{name:"Культуры",items:["string12","string2","string3"],show:!1},{name:"Статьи",items:["string13","string2","string3"],show:!1},{name:"Документация",items:["string14","string2","string3"],show:!1},{name:"Контакты",items:["string15","string2","string3"],show:!1}],index:0}),methods:{showEl(t){this.index=t,this.menuItems[t].show=!0},hideEl(t){this.index=t,this.menuItems[t].show=!1}}},c={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header-menu2"},[s("div",{staticClass:"header-menu2__collum"},[s("img",{staticClass:"header-menu__logo-img",attrs:{src:i("7Otq"),alt:""}})]),t._v(" "),s("div",{staticClass:"header-menu2__collum"},[s("div",{staticClass:"header-menu"},[s("div",{staticClass:"header-menu__item"},[t._v("О компании")]),t._v(" "),s("div",{staticClass:"header-menu__item"},[t._v("Продукция")]),t._v(" "),s("div",{staticClass:"header-menu__item"},[t._v("Культуры")]),t._v(" "),s("div",{staticClass:"header-menu__item"},[t._v("Статьи")]),t._v(" "),s("div",{staticClass:"header-menu__item"},[t._v("Документация")]),t._v(" "),s("div",{staticClass:"header-menu__item"},[t._v("Контакты")])])]),t._v(" "),s("div",{staticClass:"header-menu2__collum"},[s("div",{staticClass:"header-menu2__phone"},[t._v("+7 (831) 592 73 52")])])])}]};var v=i("VU/8")(o,c,!1,function(t){i("rQry")},null,null).exports,d={name:"Spinner",components:{},data:()=>({data:[{title:"Удобрения",name:"МЕГАМИКС",discription:["Повышение полевой всхожести на 10-15%","Активизация иммунитета и стрессоустойчивости расстений"]},{title:"Удобрения",name:"МЕГАМИКС",discription:["Повышение полевой всхожести на 10-15%","another one"]},{title:"Удобрения",name:"МЕГАМИКС",discription:["Повышение полевой всхожести на 10-15%","anoter two"]}],num:0}),mounted(){setInterval(this.rotateSlide,5e3)},methods:{changeSlide(t){this.num=t},rotateSlide(){this.num+=1,3===this.num&&(this.num=0)}}},u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"spinner"},[i("div",{staticClass:"spinner__img"}),t._v(" "),i("div",{staticClass:"spinner__discription"}),t._v(" "),i("div",{staticClass:"spinner__discription-info"},[i("div",{staticClass:"spinner__discription-info-firstline"},[t._v(t._s(t.data[t.num].title))]),t._v(" "),i("div",{staticClass:"spinner__discription-info-secondline"},[t._v(t._s(t.data[t.num].name))]),t._v(" "),t._l(t.data[t.num].discription,function(e){return i("div",{key:e,staticClass:"spinner__discription-info-thirdline"},[i("div",{staticClass:"square"}),t._v(t._s(e))])})],2),t._v(" "),i("div",{staticClass:"spinner__marker"},t._l(3,function(e,s){return i("div",{key:e,staticClass:"spinner__marker-item",on:{click:function(e){return t.changeSlide(s)}}})}),0)])},staticRenderFns:[]};var h={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bottom-menu"},[i("div",{staticClass:"bottom-menu__items"},[i("div",{staticClass:"bottom-menu__item"},[t._v("Информация\n      "),i("ul",[i("li",[t._v("Главная")]),t._v(" "),i("li",[t._v("О компании")]),t._v(" "),i("li",[t._v("Статьи")]),t._v(" "),i("li",[t._v("Вопросы и ответы")]),t._v(" "),i("li",[t._v("Контакты")])])]),t._v(" "),i("div",{staticClass:"bottom-menu__item"},[t._v("Продукты\n      "),i("ul",[i("li",[t._v("МЕГАМИКС-СЕМЕНА")]),t._v(" "),i("li",[t._v("МЕГАМИКС-ПРОФИ")]),t._v(" "),i("li",[t._v("МЕГАМИКС-АЗОТ")]),t._v(" "),i("li",[t._v("МЕГАМИКС-КАЛИЙ")]),t._v(" "),i("li",[t._v("МЕГАМИКС-БОР")]),t._v(" "),i("li",[t._v("МЕГАМИКС-ЦИНК")]),t._v(" "),i("li",[t._v("Инструкция по применению")])])]),t._v(" "),i("div",{staticClass:"bottom-menu__item"},[t._v("Культуры\n      "),i("ul",[i("li",[t._v("Зерновые")]),t._v(" "),i("li",[t._v("Подсолнечник")]),t._v(" "),i("li",[t._v("Кукуруза")]),t._v(" "),i("li",[t._v("Сахарная свекла")]),t._v(" "),i("li",[t._v("Картофель")]),t._v(" "),i("li",[t._v("Регламент применения")])])]),t._v(" "),i("div",{staticClass:"bottom-menu__item"},[t._v("Документация\n      "),i("ul",[i("li",{staticStyle:{"list-style-type":"none"}},[t._v("Свидетельствоо госрегистрации")]),t._v(" "),i("li",{staticStyle:{"list-style-type":"none"}},[t._v("Сертификат соответствия")]),t._v(" "),i("li",{staticStyle:{"list-style-type":"none"}},[t._v("Декларация о соответствии")])])])])])}]};var g={name:"Main",components:{HeaderMenu:m,Spinner:i("VU/8")(d,u,!1,function(t){i("tDv7")},null,null).exports,BottomMenu:i("VU/8")({name:"BottomMenu"},h,!1,function(t){i("Kei9")},null,null).exports,HeaderMenu2:v},data:()=>({veget:[{id:0,name:"Зерновые"},{id:1,name:"Подсолнечник"},{id:2,name:"Кукуруза"},{id:3,name:"Сахарная свекла"},{id:4,name:"Картофель"},{id:5,name:"Зернобобовые"},{id:6,name:"Рапс"},{id:7,name:"Лён"}],goods:[{id:0,name:"СЕМЕНА"},{id:1,name:"ПРОФИ"},{id:2,name:"БОР"},{id:3,name:"МАГНИЙ_ЦИНК"},{id:4,name:"СЕРА"},{id:5,name:"АЗОТ"},{id:6,name:"ФОСФОР"},{id:7,name:"КАЛИЙ"}]})},p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main"},[i("HeaderMenu2"),t._v(" "),i("Spinner"),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:"main__block"},[i("div",{staticClass:"main__block-title"},[t._v("КУЛЬТУРЫ")]),t._v(" "),i("div",{staticClass:"main__line"}),t._v(" "),i("div",{staticClass:"main__item-block"},t._l(t.veget,function(e){return i("div",{key:e.id,staticClass:"veget"},[t._m(1,!0),t._v(" "),i("div",{staticClass:"veget-name"},[t._v(t._s(e.name))])])}),0)]),t._v(" "),i("div",{staticClass:"main__block"},[i("div",{staticClass:"main__block-title"},[t._v("ПРОДУКТЫ")]),t._v(" "),i("div",{staticClass:"main__line"}),t._v(" "),i("div",{staticClass:"main__item-block"},t._l(t.goods,function(e){return i("div",{key:e.id,staticClass:"goods"},[t._m(2,!0),t._v(" "),i("div",{staticClass:"goods-name"},[t._v("МЕГАМИКС-"+t._s(e.name))])])}),0)]),t._v(" "),i("BottomMenu")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main__block"},[i("div",{staticClass:"main__block-title"},[t._v("ВИДЕО")]),t._v(" "),i("div",{staticClass:"main__line"}),t._v(" "),i("div",{staticClass:"main__item-block"},[i("div",{staticClass:"main__video-block-item"},[i("iframe",{attrs:{width:"100%",height:"315",src:"https://www.youtube.com/embed/LAENAVwtgB8",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),t._v(" "),i("div",{staticClass:"main__video-block-item-title"},[t._v("Фильм о компании МЕГАМИКС")])]),t._v(" "),i("div",{staticClass:"main__video-space"}),t._v(" "),i("div",{staticClass:"main__video-block-item"},[i("iframe",{attrs:{width:"100%",height:"315",src:"https://www.youtube.com/embed/LAENAVwtgB8",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),t._v(" "),i("div",{staticClass:"main__video-block-item-title"},[t._v("Фильм о выращивании растений при помощи удобрений")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"veget-img"},[e("img",{attrs:{src:i("y93H"),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"goods-img"},[e("img",{attrs:{src:i("UNre"),alt:""}})])}]};var f=i("VU/8")(g,p,!1,function(t){i("A0IK")},null,null).exports;s.a.use(r.a);var C=new r.a({routes:[{path:"/",name:"Main",component:f}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:C,components:{App:a},template:"<App/>"})},UNre:function(t,e,i){t.exports=i.p+"static/img/tara.45c69d4.png"},gsVf:function(t,e){},rQry:function(t,e){},tDv7:function(t,e){},y93H:function(t,e,i){t.exports=i.p+"static/img/veg.8019b06.png"}},["NHnr"]);
//# sourceMappingURL=app.bb72b6ddd80cbbc139c8.js.map