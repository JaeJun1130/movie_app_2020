(this.webpackJsonpmovie_app_2020=this.webpackJsonpmovie_app_2020||[]).push([[0],{37:function(e,n,t){e.exports=t.p+"static/media/idu.6609cc90.png"},43:function(e,n,t){e.exports=t(86)},48:function(e,n,t){},66:function(e,n,t){},67:function(e,n,t){},73:function(e,n,t){},74:function(e,n,t){},86:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(34),i=t.n(o),c=t(10),u=t(1),l=(t(48),t(21)),s=t.n(l),m=t(35),p=t(11),d=t(12),f=t(14),g=t(13),v=t(36),b=t.n(v);t(66),t(67);var h=function(e){var n=e.id,t=e.year,a=e.title,o=e.summary,i=e.poster,u=e.genres,l=e.background_image,s=e.slug,m=e.rating,p=e.trailer,d=e.runtime;return r.a.createElement("div",{className:"movie"},r.a.createElement(c.b,{to:{pathname:"/movie/".concat(n),state:{year:t,title:a,summary:o,poster:i,genres:u,background_image:l,slug:s,rating:m,trailer:p,runtime:d}}},r.a.createElement("img",{src:i,alt:a,title:a}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},a),r.a.createElement("h5",{className:"movie__year"},t),r.a.createElement("ul",{className:"movie__genres"},u.map((function(e,n){return r.a.createElement("li",{key:n,className:"genres__genre"},e)}))),r.a.createElement("p",{className:"movie__summary"},o.slice(0,180),"..."))))},E=function(e){Object(f.a)(t,e);var n=Object(g.a)(t);function t(){var e;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={isLoding:!0,movies:[]},e.getmovies=Object(m.a)(s.a.mark((function n(){var t,a;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:t=n.sent,a=t.data.data.movies,e.setState({movies:a,isLoding:!1});case 5:case"end":return n.stop()}}),n)}))),e}return Object(d.a)(t,[{key:"componentDidMount",value:function(){this.getmovies()}},{key:"render",value:function(){var e=this.state,n=e.isLoding,t=e.movies;return r.a.createElement("section",{className:"container"},n?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loding...")):r.a.createElement("div",{className:"movies"},t.map((function(e){return r.a.createElement(h,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres,background_image:e.background_image,slug:e.slug,rating:e.rating,trailer:e.yt_trailer_code,runtime:e.runtime})}))))}}]),t}(r.a.Component),y=t(4),_=(t(73),t(5)),j=t(37),k=t.n(j);function x(){var e=Object(y.a)(["\n    width: 100%;\n    border: none;\n"]);return x=function(){return e},e}function O(){var e=Object(y.a)(["\n    padding-top: 15rem;\n    width: 100%;\n    max-width: 15rem;\n    height: 15rem;\n    margin: 0px auto;\n    opacity: 0.2;\n"]);return O=function(){return e},e}var w=_.a.div(O()),N=_.a.img(x());var z=function(e){return console.log(e),r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"about__container"},r.a.createElement("span",null,'"3B 1\uc870 \ucea1\uc2a4\ud1a4"',r.a.createElement("br",null),'"\uc804\uc7ac\uc900,\ubc15\ucc2c\uc601,\uae40\uc9c4\uc138"',r.a.createElement("br",null),'"\uc815\uc131\uc9c4,\ucd5c\uc815\uaddc,\uc774\ubbfc\ud638"'),r.a.createElement("span",null,"\u2212 \uc778\ub355\ub300\ud559\uad50 \ucef4\ud4e8\ud130 \uc18c\ud504\ud2b8\uc6e8\uc5b4\ud559\uacfc")),r.a.createElement(w,null,r.a.createElement(N,{src:k.a})))};t(74);var P=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(c.b,{to:"/"},"Home"),r.a.createElement(c.b,{to:"/about"},"About"))},C=t(18);r.a.Component;function I(){var e=Object(y.a)(["\n    background-color: #7f8c8d;\n    border: none;\n    color: #fff;\n    font-size: 18px;\n    border-radius: 10px;\n    cursor: pointer;\n"]);return I=function(){return e},e}function L(){var e=Object(y.a)(["\n    width: 640px;\n    height: 390px;\n\n    position: absolute;\n    left: 25%;\n    right: 25%;\n    top: 25%;\n    bottom: 25%;\n    margin: auto;\n    border-radius: 20px;\n"]);return L=function(){return e},e}function S(){var e=Object(y.a)(["\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    justify-content: center;\n    align-items: center;\n    margin: auto;\n    background-color: rgba(0, 0, 0, 0.5);\n    z-index: 99;\n"]);return S=function(){return e},e}var M=_.a.div(S()),R=_.a.div(L()),A=_.a.button(I()),B=function(e){Object(f.a)(t,e);var n=Object(g.a)(t);function t(){return Object(p.a)(this,t),n.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){var e=this.props,n=e.text,t=e.closePopup,a=e.videoId;return r.a.createElement(M,null,r.a.createElement(R,null,r.a.createElement(C.a,{videoId:a,opts:{height:"390",width:"640",playerVars:{autoplay:1}},onReady:this._onReady}),r.a.createElement("h1",null,n),r.a.createElement(A,{onClick:t},"Close")))}},{key:"_onReady",value:function(e){e.target.pauseVideo()}}]),t}(r.a.Component);function D(){var e=Object(y.a)(["\n    font-size: 15px;\n    color: white;\n    opacity: 0.7;\n"]);return D=function(){return e},e}function F(){var e=Object(y.a)(["\n    color: white;\n"]);return F=function(){return e},e}function J(){var e=Object(y.a)(["\n    width: 30vw;\n    height: 30vh;\n    position: absolute;\n    top: 55%;\n    left: 35%;\n"]);return J=function(){return e},e}function V(){var e=Object(y.a)(["\n    position: absolute;\n    margin-top: 20rem;\n    margin-left: 26rem;\n\n    background-color: #f8585b;\n    border: none;\n    color: #fff;\n    padding: 15px 30px;\n    font-size: 18px;\n    border-radius: 10px;\n    cursor: pointer;\n"]);return V=function(){return e},e}function H(){var e=Object(y.a)(["\n    position: absolute;\n    margin-top: 18rem;\n    margin-left: 26rem;\n    color: #f8f8ff;\n    font-size: 17px;\n"]);return H=function(){return e},e}function q(){var e=Object(y.a)(["\n    position: absolute;\n    margin-top: 10rem;\n    margin-left: 25rem;\n    font-weight: 600;\n    font-size: 45px;\n    color: #f8f8ff;\n"]);return q=function(){return e},e}function G(){var e=Object(y.a)(["\n    background-image: url(",");\n    background-size: cover;\n    background-position: center center;\n    position: absolute;\n    width: 30%;\n    height: 100%;\n"]);return G=function(){return e},e}function K(){var e=Object(y.a)(["\n    z-index: 100;\n    width: 80rem;\n    height: 45rem;\n    position: relative;\n"]);return K=function(){return e},e}function Q(){var e=Object(y.a)(["\n    width: 100vw;\n    height: 100vh;\n    background-image: url(",");\n    background-size: cover;\n    background-position: center center;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]);return Q=function(){return e},e}var T=_.a.div(Q(),(function(e){return e.src})),U=_.a.div(K()),W=_.a.div(G(),(function(e){return e.src})),X=_.a.span(q()),Y=_.a.span(H()),Z=_.a.button(V()),$=_.a.div(J()),ee=_.a.h1(F()),ne=_.a.p(D()),te=function(e){Object(f.a)(t,e);var n=Object(g.a)(t);function t(e){var a;return Object(p.a)(this,t),(a=n.call(this,e)).state={showPopup:!1},a}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,n=e.location,t=e.history;void 0===n.state&&t.push("/")}},{key:"togglePopup",value:function(){this.setState({showPopup:!this.state.showPopup})}},{key:"render",value:function(){var e=this.props.location;return e.state?r.a.createElement(T,{src:"".concat(e.state.background_image)},r.a.createElement(U,null,r.a.createElement(W,{src:"".concat(e.state.poster)}),r.a.createElement(X,null,e.state.title," (",e.state.year,")"),r.a.createElement(Y,null,"\ud83d\udcc5",e.state.slug,"\xa0\xa0\u2b50",e.state.rating,"/10\xa0\xa0\u23f0",e.state.runtime,"\xa0minute"),r.a.createElement(a.Fragment,null,r.a.createElement(Z,{onClick:this.togglePopup.bind(this)},"trailer"),this.state.showPopup?r.a.createElement(B,{videoId:e.state.trailer,closePopup:this.togglePopup.bind(this)}):null),"+",r.a.createElement($,null,r.a.createElement(ee,null,"Synopsis"),r.a.createElement(ne,null,e.state.summary)))):null}}]),t}(r.a.Component);var ae=function(){return r.a.createElement(c.a,null,r.a.createElement(P,null),r.a.createElement(u.a,{path:"/",exact:!0,component:E}),r.a.createElement(u.a,{path:"/about",exact:!0,component:z}),r.a.createElement(u.a,{path:"/movie/:id",exact:!0,component:te}))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ae,null)),document.getElementById("potato"))}},[[43,1,2]]]);
//# sourceMappingURL=main.28fd59ac.chunk.js.map