(this.webpackJsonpghibliapireact=this.webpackJsonpghibliapireact||[]).push([[0],{31:function(e,t,i){},40:function(e,t,i){"use strict";i.r(t);var n=i(1),o=i(0),r=i.n(o),a=i(3),s=i.n(a),c=i(2),d=i(7),h=i(18),l=i(19),u="CHANGE_SEARCHFIELD",p="MODAL_OPEN",j="MODAL_CLOSE",b="MODAL_SET_VIDEO",v="REQUEST_MOVIES_PENDING",f="REQUEST_MOVIES_SUCCESS",O="REQUEST_MOVIES_FAILED",m={searchField:""},g={movies:[],isPending:!0},y={isOpen:!1,videoID:""},x=(i(31),i(5)),I=i(6),D=i(9),w=i(8),C=i(14),S=i.n(C),k=i(20),M=function(e){return new Promise((function(t,i){var n=new Image;n.addEventListener("load",(function(){return t(n)})),n.addEventListener("error",(function(e){return i(e)})),n.src="http://img.youtube.com/vi/"+e+"/mqdefault.jpg"}))};function _(e){return 120!==e}function E(){return(E=Object(k.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",M(t).then((function(e){return _(e.width)})).then((function(e){return e})).catch((function(e){return console.log(e)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var P=i.p+"static/media/logo.a4d05b32.png",T=function(e){Object(D.a)(i,e);var t=Object(w.a)(i);function i(e){var n;return Object(x.a)(this,i),(n=t.call(this,e)).state={hasVideo:!1},n}return Object(I.a)(i,[{key:"componentDidMount",value:function(){var e=this;(function(e){return E.apply(this,arguments)})(this.props.video_id).then((function(t){e.setState({hasVideo:t})}))}},{key:"render",value:function(){return 0!==this.props.video_id.length&&this.state.hasVideo?Object(n.jsx)(r.a.Fragment,{children:Object(n.jsx)("a",{href:"https://youtu.be/".concat(this.props.video_id),onClick:this.props.onShowVideo,children:Object(n.jsx)("img",{alt:"".concat(this.props.title," Trailer Preview"),id:this.props.video_id,src:"https://img.youtube.com/vi/".concat(this.props.video_id,"/hqdefault.jpg")})})}):Object(n.jsx)("img",{src:P,alt:"Studio Ghibli Logo"})}}]),i}(o.Component),R=function(e){e.id;var t=e.release_date,i=e.title,o=e.description,r=e.producer,a=e.director,s=e.video_id,c=e.onShowVideo;return Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)(T,{video_id:s,title:i,onShowVideo:c}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:i}),Object(n.jsx)("p",{children:o}),Object(n.jsxs)("dl",{children:[Object(n.jsx)("dt",{children:"Release Date"}),Object(n.jsx)("dd",{children:t}),Object(n.jsx)("dt",{children:"Producer"}),Object(n.jsx)("dd",{children:r}),Object(n.jsx)("dt",{children:"Director"}),Object(n.jsx)("dd",{children:a})]})]})]})},L=[{id:1,name:"Castle in the Sky",videoID:"8ykEy-yPBFc"},{id:2,name:"Grave of the Fireflies",videoID:"4vPeTSRd580"},{id:3,name:"My Neighbor Totoro",videoID:"92a7Hj0ijLs"},{id:4,name:"Kiki's Delivery Service",videoID:"4bG17OYs-GA"},{id:5,name:"Only Yesterday",videoID:"OfkQlZArxw0"},{id:6,name:"Porco Rosso",videoID:"awEC-aLDzjs"},{id:7,name:"Pom Poko",videoID:"_7cowIHjCD4"},{id:8,name:"Whisper of the Heart",videoID:"0pVkiod6V0U"},{id:9,name:"Princess Mononoke",videoID:"4OiMOHRDs14"},{id:10,name:"My Neighbors the Yamadas",videoID:"1C9ujuCPlnY"},{id:11,name:"Spirited Away",videoID:"ByXuk9QqQkk"},{id:12,name:"The Cat Returns",videoID:"Gp-H_YOcYTM"},{id:13,name:"Howl's Moving Castle",videoID:"iwROgK94zcM"},{id:14,name:"Tales from Earthsea",videoID:"8hxYx3Jq3kI"},{id:15,name:"Ponyo",videoID:"bskgNOXbdiE"},{id:16,name:"Arrietty",videoID:"9CtIXPhPo0g"},{id:17,name:"From Up on Poppy Hill",videoID:"9nzpk_Br6yo"},{id:18,name:"The Wind Rises",videoID:"YrueAaw0RYg"},{id:19,name:"The Tale of the Princess Kaguya",videoID:"W71mtorCZDw"},{id:20,name:"When Marnie Was There",videoID:"jjmrxqcQdYg"}];function V(e,t){return e.filter((function(e){return-1!==e.name.toLowerCase().indexOf(t.toLowerCase())}))}var A=function(e){var t=e.films,i=e.onShowVideo;return Object(n.jsx)("div",{className:"container",children:t.map((function(e,t){var o="";return V(L,e.title).length&&(o=V(L,e.title)[0].videoID),Object(n.jsx)(R,{id:e.id,title:e.title,description:e.description,release_date:e.release_date,director:e.director,producer:e.producer,video_id:o,onShowVideo:i},t)}))})},F=function(e){var t=e.searchChange;return Object(n.jsx)("div",{className:"search",children:Object(n.jsx)("div",{children:Object(n.jsx)("input",{type:"search",placeholder:"Search Films by Title ... ",required:!0,onChange:t})})})},N=function(){return Object(n.jsxs)("footer",{children:[Object(n.jsxs)("p",{children:["This project lives at the GitHub repository ",Object(n.jsx)("a",{href:"https://github.com/elisavetTriant/ghibliapireact",children:"https://github.com/elisavetTriant/ghibliapireact"})," and is licenced under the ",Object(n.jsx)("a",{href:"https://github.com/elisavetTriant/ghibliapireact/blob/main/LICENSE",children:"MIT licence"}),"."]}),Object(n.jsxs)("p",{children:["It was bootstrapped with ",Object(n.jsx)("a",{href:"https://github.com/facebook/create-react-app",children:"Create React App"})," as a playground to create something fun with React while pulling data from different sources like the ",Object(n.jsx)("a",{href:"https://github.com/janaipakos/ghibliapi",children:"Unofficial Ghibli API"}),", Youtube and static json files. "]}),Object(n.jsxs)("p",{children:["It's heavily inspired from the ",Object(n.jsx)("a",{href:"https://github.com/aneagoie/robofriends",children:"Robofriends App"}),' which is part of the Udemy Course "The Complete Web Developer in 2021: Zero to Mastery" by ',Object(n.jsx)("a",{href:"https://github.com/aneagoie/",children:"@aneagoie"}),". Thanks Andrei! "]}),Object(n.jsxs)("p",{children:["It also takes some hints from the ",Object(n.jsx)("a",{href:"https://github.com/taniarascia/sandbox/tree/master/ghibli",children:"tutorial and code"})," of Tania Rascia's implementation in vanilla Javascript."]}),Object(n.jsxs)("p",{children:["If you spot any bugs, would like to show me how to make better, or just say hi, contact me at ",Object(n.jsx)("a",{href:"https://elissavet.me",children:"elissavet.me"}),". Thank you!"]})]})},q=i(21),G=i.n(q),Y=function(e){var t=e.video_id,i=e.is_open,o=e.onClose;return Object(n.jsx)(G.a,{channel:"youtube",isOpen:i,videoId:t,onClose:o})},H=function(e){Object(D.a)(i,e);var t=Object(w.a)(i);function i(){var e;Object(x.a)(this,i);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).onShowVideo=function(t){t.preventDefault(),e.props.setVideoID(t),e.props.openModal()},e}return Object(I.a)(i,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.movies,i=e.isPending,o=e.searchField,r=e.onSearchChange,a=e.videoID,s=t.filter((function(e){return e.title.toLowerCase().includes(o.toLowerCase())}));return i?Object(n.jsx)("h1",{children:"Loading"}):Object(n.jsxs)("div",{children:[Object(n.jsx)("img",{src:P,className:"app-logo",alt:"Studio Ghibli Logo"}),Object(n.jsx)("h1",{children:"Studio Ghibli Api - React App"}),Object(n.jsx)(F,{searchChange:r}),Object(n.jsx)(A,{films:s,onShowVideo:this.onShowVideo}),Object(n.jsx)(N,{}),Object(n.jsx)(Y,{video_id:a,is_open:this.props.isOpen,onClose:this.props.closeModal})]})}}]),i}(o.Component),U=Object(d.b)((function(e){return{searchField:e.searchMovies.searchField,movies:e.requestMovies.movies,isPending:e.requestMovies.isPending,videoID:e.assignModal.videoID,isOpen:e.assignModal.isOpen}}),(function(e){return{onSearchChange:function(t){return e((i=t.target.value,{type:u,payload:i}));var i},onRequestRobots:function(){return e((function(e){e({type:v}),fetch("https://ghibliapi.herokuapp.com/films").then((function(e){return e.json()})).then((function(t){return e({type:f,payload:t})})).catch((function(t){return e({type:O,payload:t})}))}))},closeModal:function(){return e({type:j})},openModal:function(){return e({type:p})},setVideoID:function(t){return e((i=t.target.id,{type:b,payload:i}));var i}}}))(H),Q=Object(l.createLogger)(),W=Object(c.c)({requestMovies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case v:return Object.assign({},e,{isPending:!0});case f:return Object.assign({},e,{movies:t.payload,isPending:!1});case O:return Object.assign({},e,{error:t.payload});default:return e}},searchMovies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case u:return Object.assign({},e,{searchField:t.payload});default:return e}},assignModal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case p:return Object.assign({},e,{isOpen:!0});case j:return Object.assign({},e,{isOpen:!1});case b:return Object.assign({},e,{videoID:t.payload});default:return e}}}),B=Object(c.d)(W,Object(c.a)(h.a,Q));s.a.render(Object(n.jsx)(d.a,{store:B,children:Object(n.jsx)(U,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.8879d3f2.chunk.js.map