(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"image":"./images/yoda.jpg","clicked":false},{"id":2,"image":"./images/anakin.jpg","clicked":false},{"id":3,"image":"./images/bb8.jpg","clicked":false},{"id":4,"image":"./images/c3po.jpg","clicked":false},{"id":5,"image":"./images/chewbacca.jpg","clicked":false},{"id":6,"image":"./images/darthvader.jpg","clicked":false},{"id":7,"image":"./images/kylo.jpg","clicked":false},{"id":8,"image":"./images/obiwan.jpg","clicked":false},{"id":9,"image":"./images/ren.jpg","clicked":false},{"id":10,"image":"./images/porg.png","clicked":false},{"id":11,"image":"./images/stormtrooper.jpg","clicked":false},{"id":12,"image":"./images/r2d2.jpg","clicked":false}]')},,,,,,,,function(e,a,t){e.exports=t(18)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(0),i=t.n(c),r=t(3),s=t.n(r),n=(t(14),t(4)),l=t(5),o=t(7),d=t(6),m=t(8);t(15),t(16);var g=function(e){return i.a.createElement("div",{className:"card col-md-3",onClick:function(){return e.setClicked(e.id)}},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image})))};var u=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)};t(17);var f=function(e){return i.a.createElement("h1",{className:"title"},e.children)},k=t(1),h=0,p=0,v="Click on the character to earn a point. Lose when you click on the same character twice!";function S(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1));e[a]=e[t]}return e}var j=function(e){function a(){var e,t;Object(n.a)(this,a);for(var c=arguments.length,i=new Array(c),r=0;r<c;r++)i[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(i)))).state={cards:k,correctGuesses:h,maxScore:p,clickMessage:v},t.setClicked=function(e){var a=t.state.cards,c=a.filter((function(a){return a.id===e}));if(c[0].clicked){console.log("Correct Guesses:"+h),console.log("Maximum Score:"+p),h=0,v="Hmm.. You've already clicked this character!";for(var i=0;i<a.length;i++)a[i].clicked=!1;t.setState({clickMessage:v}),t.setState({correctGuesses:h}),t.setState({cards:a})}else if(h<11){c[0].clicked=!0,t.cardShuffle(),v="Sweet! This one hasn't been clicked yet!",++h>p?(p=h,t.setState({maxScore:p})):(c[0].clicked=!0,h=0,v="Congrats! You're through to the next round!",p=12,t.setState({maxScore:p}));for(var r=0;r<a.length;r++)a[r].clicked=!1;t.setState({cards:a}),t.setState({correctGuesses:h}),t.setState({clickMessage:v})}},t.cardShuffle=function(){t.setState({cards:S(k)})},t}return Object(m.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(u,null,i.a.createElement(f,null,"Star Wars Clicker Game "),i.a.createElement("h3",{className:"scores"},this.state.clickMessage),i.a.createElement("h3",{className:"scores card-header"},"Personal best: ",this.state.maxScore),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},this.state.cards.map((function(a){return i.a.createElement(g,{setClicked:e.setClicked,id:a.id,key:a.id,image:a.image})})))))}}]),a}(i.a.Component);s.a.render(i.a.createElement(j,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.0f56189f.chunk.js.map