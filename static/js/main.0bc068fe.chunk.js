(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){},21:function(e,t,a){e.exports=a(49)},27:function(e,t,a){},31:function(e,t,a){},37:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){},43:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(18),i=a.n(s),c=(a(27),a(2)),o=a.n(c),l=a(3),u=a(15),m=a(20),p=a(6),h=a(10),f=a(13),g=a(11),v=a(14),d=a(50),b=function(){var e=Object(l.a)(o.a.mark(function e(t){var a,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}},e,this,[[0,10]])}));return function(t){return e.apply(this,arguments)}}(),w=a(5),E=function e(){var t=this;Object(p.a)(this,e),this.fetchPeople=Object(l.a)(o.a.mark(function e(){var a,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(localStorage.people){e.next=9;break}return"https://swapi.co/api/people/",e.next=4,t.fetchData("https://swapi.co/api/people/");case 4:return a=e.sent,e.next=7,t.cleanPeople(a);case 7:n=e.sent,Object(w.setLocalStorage)(n,"people");case 9:return e.abrupt("return",Object(w.getLocalStorage)("people"));case 10:case"end":return e.stop()}},e,this)})),this.cleanPeople=function(){var e=Object(l.a)(o.a.mark(function e(a){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.results.map(function(){var e=Object(l.a)(o.a.mark(function e(a){var n,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchHomeworld(a.homeworld);case 2:return n=e.sent,e.next=5,t.fetchSpecies(a.species);case 5:return r=e.sent,e.abrupt("return",{name:a.name,homeworld:n.homeworld,species:r.species,population:n.population,favorite:!1});case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()),e.abrupt("return",Promise.all(n));case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),this.fetchHomeworld=function(){var e=Object(l.a)(o.a.mark(function e(a){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchData(a);case 2:return n=e.sent,e.abrupt("return",{homeworld:n.name,population:n.population});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),this.fetchSpecies=function(){var e=Object(l.a)(o.a.mark(function e(a){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchData(a);case 2:return n=e.sent,e.abrupt("return",{species:n.name});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),this.fetchData=b},k=function e(){var t=this;Object(p.a)(this,e),this.fetchVehicles=Object(l.a)(o.a.mark(function e(){var a,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(localStorage.vehicles){e.next=9;break}return"https://swapi.co/api/vehicles/",e.next=4,t.fetchData("https://swapi.co/api/vehicles/");case 4:return a=e.sent,e.next=7,t.cleanVehicles(a);case 7:n=e.sent,Object(w.setLocalStorage)(n,"vehicles");case 9:return e.abrupt("return",Object(w.getLocalStorage)("vehicles"));case 10:case"end":return e.stop()}},e,this)})),this.cleanVehicles=function(e){var t=e.results.map(function(e){return{name:e.name,model:e.model,class:e.vehicle_class,passengers:e.passengers,favorite:!1}});return Promise.all(t)},this.fetchData=b},O=function e(){var t=this;Object(p.a)(this,e),this.fetchPlanets=Object(l.a)(o.a.mark(function e(){var a,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(localStorage.planets){e.next=9;break}return"https://swapi.co/api/planets/",e.next=4,t.fetchData("https://swapi.co/api/planets/");case 4:return a=e.sent,e.next=7,t.cleanPlanets(a);case 7:n=e.sent,Object(w.setLocalStorage)(n,"planets");case 9:return e.abrupt("return",Object(w.getLocalStorage)("planets"));case 10:case"end":return e.stop()}},e,this)})),this.cleanPlanets=function(){var e=Object(l.a)(o.a.mark(function e(a){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.results.map(function(){var e=Object(l.a)(o.a.mark(function e(a){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchResidents(a.residents);case 2:return n=e.sent,e.abrupt("return",{name:a.name,terrain:a.terrain,population:a.population,climate:a.climate,residents:n,favorite:!1});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()),e.abrupt("return",Promise.all(n));case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),this.fetchResidents=function(){var e=Object(l.a)(o.a.mark(function e(a){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.map(function(){var e=Object(l.a)(o.a.mark(function e(a){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchData(a);case 2:return n=e.sent,e.abrupt("return",n.name);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}());case 2:return n=e.sent,e.abrupt("return",Promise.all(n));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),this.fetchData=b},j=a(34),x=function e(){var t=this;Object(p.a)(this,e),this.fetchFilms=Object(l.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://swapi.co/api/films/",e.abrupt("return",t.fetchData("https://swapi.co/api/films/"));case 2:case"end":return e.stop()}},e,this)})),this.fetchData=b},N=(a(31),function(e){function t(){var e;return Object(p.a)(this,t),(e=Object(f.a)(this,Object(g.a)(t).call(this))).state={film:null},e}return Object(v.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark(function e(){var t,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.films=new x,e.next=3,this.films.fetchFilms();case 3:t=e.sent,a=Math.floor(7*Math.random()),this.setState({film:t.results[a]});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.film;return e?r.a.createElement("div",{className:"splash"},r.a.createElement("div",{className:"fade"},r.a.createElement("h1",{className:"logo"},"SWAPi Box"),r.a.createElement(j.a,{to:"/main/"},r.a.createElement("button",{type:"button",className:"enter-btn"},"$")),r.a.createElement("p",{className:"enter-site"},"Click to Enter")),r.a.createElement("section",{className:"star-wars"},r.a.createElement("div",{className:"crawl"},r.a.createElement("h2",{className:"film-title"},e.title),r.a.createElement("p",{className:"film-body"},e.opening_crawl)))):r.a.createElement("div",{className:"splash"},"Loading...")}}]),t}(n.Component)),y=(a(37),{"Luke Skywalker":"../images/Luke.png","C-3PO":"../images/C3PO.png","R2-D2":"../images/R2D2.png",Bespin:"../images/bespin.png",Alderaan:"../images/alderaan.jpg",Coruscant:"../images/coruscant.png",Dagobah:"../images/dagobah.jpg",Endor:"../images/endor.jpg",Geonosis:"../images/geonosis.jpg",Hoth:"../images/hoth.png",Kamino:"../images/kamino.jpg",Naboo:"../images/naboo.png","Yavin IV":"../images/bespin.png","Darth Vader":"../images/vader.png","Leia Organa":"../images/leia.png","Owen Lars":"../images/owen.png","Beru Whitesun lars":"../images/beru.png","R5-D4":"../images/r5d4.png","Biggs Darklighter":"../images/biggs.png","Obi-Wan Kenobi":"../images/obiwan.png","Sand Crawler":"../images/sandcrawler.png","T-16 skyhopper":"../images/skyhopper.png","X-34 landspeeder":"../images/landspeeder.png","TIE/LN starfighter":"../images/starfighter.png",Snowspeeder:"../images/snowspeeder.png","TIE bomber":"../images/bomber.png","AT-AT":"../images/atat.png","AT-ST":"../images/atst.png","Storm IV Twin-Pod cloud car":"../images/storm.png","Sail barge":"../images/sail.png","white-saber":"../images/white-lightsaber.svg","green-saber":"../images/green-lightsaber.svg","red-saber":"../images/red-lightsaber.svg"}),S={"Luke Skywalker":"light","C-3PO":"light","R2-D2":"light",Bespin:"light",Alderaan:"light",Coruscant:"dark",Dagobah:"light",Endor:"light",Geonosis:"dark",Hoth:"dark",Kamino:"dark",Naboo:"light","Yavin IV":"dark","Darth Vader":"dark","Leia Organa":"light","Owen Lars":"light","Beru Whitesun lars":"light","R5-D4":"light","Biggs Darklighter":"light","Obi-Wan Kenobi":"light","Sand Crawler":"dark","T-16 skyhopper":"dark","X-34 landspeeder":"light","TIE/LN starfighter":"dark",Snowspeeder:"light","TIE bomber":"dark","AT-AT":"dark","AT-ST":"dark","Storm IV Twin-Pod cloud car":"light","Sail barge":"dark"},D=function(e){var t,a=Object.keys(e.item).filter(function(e){return"favorite"!==e}).map(function(t){return"name"===t?r.a.createElement("h1",{key:t},e.item[t]):r.a.createElement("p",{key:t},t,": ",e.item[t])});return t=e.item.favorite?"light"===S[e.item.name]?"green-saber":"red-saber":"white-saber",r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"black-bg"}),r.a.createElement("div",{className:"card-info"},a),r.a.createElement("img",{className:"card-image",src:y[e.item.name],alt:y[e.item.name]}),r.a.createElement("div",{className:"gradient"}),r.a.createElement("button",{type:"button",className:"favorite",onClick:function(){return e.handleFavorite(e.item,e.itemType)}},r.a.createElement("img",{src:y[t],className:"white-saber",alt:"lightsaber"})),r.a.createElement("div",{className:"card-text-background"}))},T=(a(39),function(e){var t=e.data.map(function(t){return r.a.createElement(D,{item:t,handleFavorite:e.handleFavorite,itemType:e.itemType,key:t.name})});return r.a.createElement("div",{className:"card-container"},r.a.createElement("h3",{className:"tap-to-favorite"},"Tap the lightsaber to favorite"),r.a.createElement("div",{className:"cards"},t.length?t:r.a.createElement("h1",{className:"no-favorites"},"No favorites you have")))}),P=(a(41),function(){return r.a.createElement("div",{className:"yoda-container"},r.a.createElement("p",{className:"choose-path"},"Choose a path you must..."),r.a.createElement("img",{src:"../images/yoda.png",alt:"Yoda"}),r.a.createElement("div",{className:"lightsaber"},r.a.createElement("div",{className:"saber"}),r.a.createElement("div",{className:"handle"})))}),L=a(51),F=(a(43),a(17),function(e){var t=e.favorites.length?e.favorites.length:"";return r.a.createElement("li",{className:"menu-item"},r.a.createElement(L.a,{to:"/main/".concat(e.name),className:"nav-btn"},"".concat(e.name," ").concat(t)))}),I=function(e){return r.a.createElement("div",{className:"nav"},r.a.createElement("label",{htmlFor:"menu-toggler"},r.a.createElement("h3",null,"$"),r.a.createElement("input",{className:"menu-toggler",id:"menu-toggler",type:"checkbox"}),r.a.createElement("ul",null,r.a.createElement(F,{name:"vehicles",favorites:[]}),r.a.createElement(F,{name:"People",favorites:[]}),r.a.createElement(F,{name:"Planets",favorites:[]}),r.a.createElement(F,{name:"Favorites",favorites:e.favorites}))),r.a.createElement("div",{className:"orbit orbit1"}),r.a.createElement("div",{className:"orbit orbit2"}),r.a.createElement("div",{className:"orbit orbit3"}),r.a.createElement("div",{className:"orbit orbit4"}))},C=function(e){var t=e.vehicles,a=e.planets,n=e.people,s=e.favorites,i=e.handleFavorite;return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"stars"}),r.a.createElement("div",{className:"twinkling"}),r.a.createElement(I,{favorites:s}),r.a.createElement(d.a,{exact:!0,path:"/main",component:P}),r.a.createElement(d.a,{exact:!0,path:"/main/People",render:function(){return r.a.createElement(T,{itemType:"people",data:n,handleFavorite:i})}}),r.a.createElement(d.a,{exact:!0,path:"/main/vehicles",render:function(){return r.a.createElement(T,{itemType:"vehicles",data:t,handleFavorite:i})}}),r.a.createElement(d.a,{exact:!0,path:"/main/Planets",render:function(){return r.a.createElement(T,{itemType:"planets",data:a,handleFavorite:i})}}),r.a.createElement(d.a,{exact:!0,path:"/main/Favorites",render:function(){return r.a.createElement(T,{itemType:"favorites",data:s,handleFavorite:i})}}))},V=(a(47),function(e){function t(){var e;return Object(p.a)(this,t),(e=Object(f.a)(this,Object(g.a)(t).call(this))).handleFavorite=function(t,a){var n,r,s,i=e.state.favorites;i.find(function(e){return e.name===t.name})?(r=e.toggleItemState(t,a),t.favorite=!1,s=i.filter(function(e){return e.name!==t.name})):(r=e.toggleItemState(t,a),t.favorite=!0,s=Object(m.a)(i).concat([t])),Object(w.setLocalStorage)(r,a),Object(w.setLocalStorage)(s,"favorites"),e.setState((n={},Object(u.a)(n,a,r),Object(u.a)(n,"favorites",s),n))},e.toggleItemState=function(t,a){return e.state[a].map(function(e){return e===t&&(e.favorite=!e.favorite),e})},e.state={people:[],vehicles:[],planets:[],favorites:[]},e}return Object(v.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.people=new E,this.vehicles=new k,this.planets=new O,e.t0=this,e.next=6,this.people.fetchPeople();case 6:return e.t1=e.sent,e.next=9,this.vehicles.fetchVehicles();case 9:return e.t2=e.sent,e.next=12,this.planets.fetchPlanets();case 12:e.t3=e.sent,e.t4=Object(w.getLocalStorage)("favorites")||[],e.t5={people:e.t1,vehicles:e.t2,planets:e.t3,favorites:e.t4},e.t0.setState.call(e.t0,e.t5);case 16:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(d.a,{exact:!0,path:"/",component:N}),r.a.createElement(d.a,{path:"/main",render:function(){return r.a.createElement(C,Object.assign({},e.state,{handleFavorite:e.handleFavorite}))}}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=a(52),B=r.a.createElement(A.a,null,r.a.createElement(V,null));i.a.render(B,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},5:function(e,t){e.exports={setLocalStorage:function(e,t){localStorage.setItem(t,JSON.stringify(e))},getLocalStorage:function(e){return JSON.parse(localStorage.getItem(e))}}}},[[21,2,1]]]);
//# sourceMappingURL=main.0bc068fe.chunk.js.map