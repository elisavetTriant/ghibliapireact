(this.webpackJsonpghibliapireact=this.webpackJsonpghibliapireact||[]).push([[0],{41:function(e,t,i){},51:function(e,t,i){"use strict";i.r(t);var n=i(1),o=i(0),r=i.n(o),c=i(16),s=i.n(c),a=i(9),d=i(3),l=i(15),h=i(12),u=i(28),j=i(29),p="CHANGE_SEARCHFIELD",b="MODAL_OPEN",v="MODAL_CLOSE",O="MODAL_SET_VIDEO",f="REQUEST_MOVIES_PENDING",m="REQUEST_MOVIES_SUCCESS",g="REQUEST_MOVIES_FAILED",x="REQUEST_MOVIE_PENDING",y="REQUEST_MOVIE_SUCCESS",D="REQUEST_MOVIE_FAILED",I={searchField:""},w={movies:[],isPending:!0},_={movie:{},isPending:!0},E={isOpen:!1,videoID:""},M=(i(41),i(10)),S=i(11),C=i(14),k=i(13),P=i(23),T=i.n(P),N=i(30),R=function(e){return new Promise((function(t,i){var n=new Image;n.addEventListener("load",(function(){return t(n)})),n.addEventListener("error",(function(e){return i(e)})),n.src="https://img.youtube.com/vi/"+e+"/mqdefault.jpg"}))};function L(e){return 120!==e}function V(){return(V=Object(N.a)(T.a.mark((function e(t){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",R(t).then((function(e){return L(e.width)})).then((function(e){return e})).catch((function(e){return console.log(e)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var A=i.p+"static/media/logo.a4d05b32.png",q=function(e){Object(C.a)(i,e);var t=Object(k.a)(i);function i(e){var n;return Object(M.a)(this,i),(n=t.call(this,e)).state={hasVideo:!1},n}return Object(S.a)(i,[{key:"componentDidMount",value:function(){var e=this;(function(e){return V.apply(this,arguments)})(this.props.video_id).then((function(t){e.setState({hasVideo:t})}))}},{key:"render",value:function(){return 0!==this.props.video_id.length&&this.state.hasVideo?Object(n.jsx)(r.a.Fragment,{children:Object(n.jsx)("a",{href:"https://youtu.be/".concat(this.props.video_id),onClick:this.props.onShowVideo,children:Object(n.jsx)("img",{alt:"".concat(this.props.title," Trailer Preview"),id:this.props.video_id,src:"https://img.youtube.com/vi/".concat(this.props.video_id,"/hqdefault.jpg")})})}):Object(n.jsx)("img",{src:A,alt:"Studio Ghibli Logo"})}}]),i}(o.Component),F=function(e){var t=e.id,i=e.release_date,o=e.title,r=e.description,c=e.producer,s=e.director,d=e.video_id,l=e.onShowVideo;return Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)(q,{video_id:d,title:o,onShowVideo:l}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:o}),Object(n.jsx)("p",{children:r}),Object(n.jsxs)("dl",{className:"mtb-20 pd-40",children:[Object(n.jsx)("dt",{children:"Release Date"}),Object(n.jsx)("dd",{children:i}),Object(n.jsx)("dt",{children:"Producer"}),Object(n.jsx)("dd",{children:c}),Object(n.jsx)("dt",{children:"Director"}),Object(n.jsx)("dd",{children:s})]}),Object(n.jsx)(a.b,{className:"myButton",to:"movie/".concat(t),children:"See more"})]})]})},G=[{id:1,name:"Castle in the Sky",videoID:"8ykEy-yPBFc"},{id:2,name:"Grave of the Fireflies",videoID:"4vPeTSRd580"},{id:3,name:"My Neighbor Totoro",videoID:"92a7Hj0ijLs"},{id:4,name:"Kiki's Delivery Service",videoID:"4bG17OYs-GA"},{id:5,name:"Only Yesterday",videoID:"OfkQlZArxw0"},{id:6,name:"Porco Rosso",videoID:"awEC-aLDzjs"},{id:7,name:"Pom Poko",videoID:"_7cowIHjCD4"},{id:8,name:"Whisper of the Heart",videoID:"0pVkiod6V0U"},{id:9,name:"Princess Mononoke",videoID:"4OiMOHRDs14"},{id:10,name:"My Neighbors the Yamadas",videoID:"1C9ujuCPlnY"},{id:11,name:"Spirited Away",videoID:"ByXuk9QqQkk"},{id:12,name:"The Cat Returns",videoID:"Gp-H_YOcYTM"},{id:13,name:"Howl's Moving Castle",videoID:"iwROgK94zcM"},{id:14,name:"Tales from Earthsea",videoID:"8hxYx3Jq3kI"},{id:15,name:"Ponyo",videoID:"bskgNOXbdiE"},{id:16,name:"Arrietty",videoID:"9CtIXPhPo0g"},{id:17,name:"From Up on Poppy Hill",videoID:"9nzpk_Br6yo"},{id:18,name:"The Wind Rises",videoID:"YrueAaw0RYg"},{id:19,name:"The Tale of the Princess Kaguya",videoID:"W71mtorCZDw"},{id:20,name:"When Marnie Was There",videoID:"jjmrxqcQdYg"},{id:21,name:"The Red Turtle",videoID:"9Wf57f5F09c"}];function U(e,t){return e.filter((function(e){return-1!==e.name.toLowerCase().indexOf(t.toLowerCase())}))}var H=function(e){var t=e.films,i=e.onShowVideo;return Object(n.jsx)("div",{className:"container",children:t.map((function(e,t){var o="";return U(G,e.title).length&&(o=U(G,e.title)[0].videoID),Object(n.jsx)(F,{id:e.id,title:e.title,description:e.description,release_date:e.release_date,director:e.director,producer:e.producer,video_id:o,onShowVideo:i},t)}))})},Y=function(e){var t=e.searchChange;return Object(n.jsx)("div",{className:"search",children:Object(n.jsx)("div",{children:Object(n.jsx)("input",{type:"search",placeholder:"Search Films by Title ... ",required:!0,onChange:t})})})},Q=function(){return Object(n.jsxs)("footer",{children:[Object(n.jsxs)("p",{children:["This project lives at the GitHub repository ",Object(n.jsx)("a",{href:"https://github.com/elisavetTriant/ghibliapireact",children:"https://github.com/elisavetTriant/ghibliapireact"})," and is licenced under the ",Object(n.jsx)("a",{href:"https://github.com/elisavetTriant/ghibliapireact/blob/main/LICENSE",children:"MIT licence"}),"."]}),Object(n.jsxs)("p",{children:["It was bootstrapped with ",Object(n.jsx)("a",{href:"https://github.com/facebook/create-react-app",children:"Create React App"})," as a playground to create something fun with React while pulling data from different sources like the ",Object(n.jsx)("a",{href:"https://github.com/janaipakos/ghibliapi",children:"Unofficial Ghibli API"}),", Youtube and static json files. "]}),Object(n.jsxs)("p",{children:["It's heavily inspired from the ",Object(n.jsx)("a",{href:"https://github.com/aneagoie/robofriends",children:"Robofriends App"}),' which is part of the Udemy Course "The Complete Web Developer in 2021: Zero to Mastery" by ',Object(n.jsx)("a",{href:"https://github.com/aneagoie/",children:"@aneagoie"}),". Thanks Andrei! "]}),Object(n.jsxs)("p",{children:["It also takes some hints from the ",Object(n.jsx)("a",{href:"https://github.com/taniarascia/sandbox/tree/master/ghibli",children:"tutorial and code"})," of Tania Rascia's implementation in vanilla Javascript."]}),Object(n.jsxs)("p",{children:["If you spot any bugs, would like to show me how to make better, or just say hi, contact me at ",Object(n.jsx)("a",{href:"https://elissavet.me",children:"elissavet.me"}),". Thank you!"]})]})},B=i(31),W=i.n(B),J=function(e){var t=e.video_id,i=e.is_open,o=e.onClose;return Object(n.jsx)(W.a,{channel:"youtube",isOpen:i,videoId:t,onClose:o})},z=function(e){return function(t){t({type:x}),fetch("https://ghibliapi.herokuapp.com/films/"+e).then((function(e){return e.json()})).then((function(e){var i={},n=e.locations[0],o=e.people[0];(function(e,t,i,n){var o=[];return o[0]=fetch(e).then((function(e){return e.json()})).catch((function(e){return console.log(e)})),o[1]=fetch(t).then((function(e){return e.json()})).catch((function(e){return console.log(e)})),o[2]=fetch(i).then((function(e){return e.json()})).catch((function(e){return console.log(e)})),o[3]=fetch(n).then((function(e){return e.json()})).catch((function(e){return console.log(e)})),Promise.all(o)})(n,e.species[0],e.vehicles[0],o).then((function(n){Object.assign(i,{locations:n[0]}),Object.assign(i,{species:n[1]}),Object.assign(i,{vehicles:n[2]}),Object.assign(i,{people:n[3]}),t({type:y,payload:Object.assign({},e,{relatedData:i})})})).catch((function(e){return t({type:D,payload:e})}))})).catch((function(e){return t({type:D,payload:e})}))}},K=function(e){Object(C.a)(i,e);var t=Object(k.a)(i);function i(){var e;Object(M.a)(this,i);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).onShowVideo=function(t){t.preventDefault(),e.props.setVideoID(t),e.props.openModal()},e}return Object(S.a)(i,[{key:"componentDidMount",value:function(){this.props.onRequestMovies()}},{key:"render",value:function(){var e=this.props,t=e.movies,i=e.isPending,o=e.searchField,r=e.onSearchChange,c=e.videoID,s=t.filter((function(e){return e.title.toLowerCase().includes(o.toLowerCase())}));return i?Object(n.jsx)("h1",{children:"Loading"}):Object(n.jsxs)("div",{children:[Object(n.jsx)("img",{src:A,className:"app-logo",alt:"Studio Ghibli Logo"}),Object(n.jsx)("h1",{children:"Studio Ghibli Films"}),Object(n.jsx)(Y,{searchChange:r}),Object(n.jsx)(H,{films:s,onShowVideo:this.onShowVideo}),Object(n.jsx)(Q,{}),Object(n.jsx)(J,{video_id:c,is_open:this.props.isOpen,onClose:this.props.closeModal})]})}}]),i}(o.Component),X=Object(h.b)((function(e){return{searchField:e.searchMovies.searchField,movies:e.requestMovies.movies,isPending:e.requestMovies.isPending,videoID:e.assignModal.videoID,isOpen:e.assignModal.isOpen}}),(function(e){return{onSearchChange:function(t){return e((i=t.target.value,{type:p,payload:i}));var i},onRequestMovies:function(){return e((function(e){e({type:f}),fetch("https://ghibliapi.herokuapp.com/films").then((function(e){return e.json()})).then((function(t){return e({type:m,payload:t})})).catch((function(t){return e({type:g,payload:t})}))}))},closeModal:function(){return e({type:v})},openModal:function(){return e({type:b})},setVideoID:function(t){return e((i=t.target.id,{type:O,payload:i}));var i}}}))(K),Z=function(e){var t=e.video_id;return Object(n.jsx)("div",{className:"video",style:{position:"relative",paddingBottom:"56.25%",paddingTop:25,height:0},children:Object(n.jsx)("iframe",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},src:"https://www.youtube.com/embed/".concat(t),frameBorder:"0",allowFullScreen:!0,title:t})})},$=function(e){var t=e.name,i=e.gender,o=e.eye_color,r=e.hair_color;return Object(n.jsx)("div",{className:"card pd-20",children:Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:t}),Object(n.jsxs)("dl",{children:[Object(n.jsx)("dt",{children:"Gender"}),Object(n.jsx)("dd",{children:i}),Object(n.jsx)("dt",{children:"Eye Color"}),Object(n.jsx)("dd",{children:o}),Object(n.jsx)("dt",{children:"Hair Color"}),Object(n.jsx)("dd",{children:r})]})]})})},ee=function(e,t){var i=[];return e.forEach((function(e){e.films.forEach((function(n){n===t&&i.push(e)}))})),console.log(i),i},te=function(e){Object(C.a)(i,e);var t=Object(k.a)(i);function i(){return Object(M.a)(this,i),t.apply(this,arguments)}return Object(S.a)(i,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.onRequestMovie(e)}},{key:"componentDidUpdate",value:function(e){e.isPending!==this.props.isPending&&(this.props.isPending||this.props.movie.relatedData.people.length>0&&console.log("We have people"))}},{key:"render",value:function(){var e=this.props,t=e.movie,i=e.isPending,o=t.release_date,r=t.title,c=t.description,s=t.producer,d=t.director,l=t.rt_score,h=t.url,u=G.filter((function(e){return r===e.name}));return i?Object(n.jsx)("h1",{children:"Loading"}):Object(n.jsxs)("div",{children:[Object(n.jsx)(a.b,{to:"/",children:Object(n.jsx)("img",{src:A,className:"app-logo",alt:"Studio Ghibli Logo"})}),Object(n.jsx)("h1",{children:r}),u.length>0?Object(n.jsx)(Z,{video_id:u[0].videoID}):"",Object(n.jsxs)("div",{className:"container mtb-20",children:[Object(n.jsxs)("div",{className:"card pd-20",children:[Object(n.jsx)("h2",{children:"Description"}),c]}),Object(n.jsxs)("div",{className:"card pd-20",children:[Object(n.jsx)("h2",{children:"General Information"}),Object(n.jsxs)("dl",{children:[Object(n.jsx)("dt",{children:"Release Date"}),Object(n.jsx)("dd",{children:o}),Object(n.jsx)("dt",{children:"Producer"}),Object(n.jsx)("dd",{children:s}),Object(n.jsx)("dt",{children:"Director"}),Object(n.jsx)("dd",{children:d}),Object(n.jsx)("dt",{children:"Rotten Tomato score"}),Object(n.jsx)("dd",{children:l})]})]})]}),this.props.movie.relatedData.people.length>0?Object(n.jsx)("div",{className:"container mtb-20",children:Object(n.jsxs)("div",{className:"card pd-20",children:[Object(n.jsx)("h2",{children:"Listed Characters"}),ee(this.props.movie.relatedData.people,h).map((function(e,t){return Object(n.jsx)($,{id:e.id,name:e.name,gender:e.gender,eye_color:e.eye_color,hair_color:e.hair_color,species:e.species},t)}))]})}):null,Object(n.jsx)("div",{className:"containerCenter mtb-20",children:Object(n.jsx)(a.b,{className:"button_link",to:"/",children:"Back"})}),Object(n.jsx)(Q,{})]})}}]),i}(o.Component),ie=Object(h.b)((function(e){return{movie:e.requestMovie.movie,isPending:e.requestMovie.isPending}}),(function(e){return{onRequestMovie:function(t){return e(z(t))}}}))(te),ne=Object(j.createLogger)(),oe=Object(l.c)({requestMovies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case f:return Object.assign({},e,{isPending:!0});case m:return Object.assign({},e,{movies:t.payload,isPending:!1});case g:return Object.assign({},e,{error:t.payload});default:return e}},requestMovie:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case x:return Object.assign({},e,{isPending:!0});case y:return Object.assign({},e,{movie:t.payload,isPending:!1});case D:return Object.assign({},e,{error:t.payload});default:return e}},searchMovies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case p:return Object.assign({},e,{searchField:t.payload});default:return e}},assignModal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case b:return Object.assign({},e,{isOpen:!0});case v:return Object.assign({},e,{isOpen:!1});case O:return Object.assign({},e,{videoID:t.payload});default:return e}}}),re=Object(l.d)(oe,Object(l.a)(u.a,ne));s.a.render(Object(n.jsx)(h.a,{store:re,children:Object(n.jsx)(a.a,{children:Object(n.jsxs)(d.c,{children:[Object(n.jsx)(d.a,{exact:!0,path:"/",component:X}),Object(n.jsx)(d.a,{path:"/movie/:id",component:ie})]})})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.f0ccd72c.chunk.js.map