(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{253:function(e,t,o){var content=o(258);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(132).default)("31246949",content,!0,{sourceMap:!1})},255:function(e,t,o){e.exports=o.p+"img/small.fd91d5f.png"},256:function(e,t,o){e.exports=o.p+"img/big.4b2e71d.png"},257:function(e,t,o){"use strict";o(253)},258:function(e,t,o){var n=o(131)(!1);n.push([e.i,".container{background-color:#fff}.container,.small-img-holder{width:100%;height:100%;overflow:hidden}.small-img-holder{background-color:grey;position:relative}.small-img{width:100%;height:100%;position:absolute;left:0;top:0;z-index:10}.round{border-radius:10rem;background-color:red;overflow:hidden;position:absolute;width:10rem;height:10rem;z-index:15}.big-img-holder{position:absolute;left:0;top:0;visibility:hidden}.big-img-holder,.full{width:100%;height:100%}",""]),e.exports=n},259:function(e,t,o){"use strict";o.r(t);var n={props:["index","mouseY","mouseX","CellWidth","CellHeight"],methods:{magnify:function(e,t){var img,o,n,l;img=document.getElementById(e),(o=document.getElementById("circle-"+this.index)).style.backgroundImage="url('"+img.src+"')",o.style.backgroundRepeat="no-repeat",o.style.backgroundSize=img.width*t+"px "+img.height*t+"px",n=o.offsetWidth/2,l=o.offsetHeight/2,document.getElementById("Container").addEventListener("mousemove",(function(e){var d,r,c;e.preventDefault(),d=function(e){var a,t=0,o=0;return e=e||window.event,a=img.getBoundingClientRect(),t=e.pageX-a.left,o=e.pageY-a.top,t-=window.pageXOffset,o-=window.pageYOffset,{x:t,y:o}}(e),r=d.x,c=d.y,r>img.width-n/t&&(r=img.width-n/t);r<n/t&&(r=n/t);c>img.height-l/t&&(c=img.height-l/t);c<l/t&&(c=l/t);o.style.backgroundPosition="-"+(r*t-n+3)+"px -"+(c*t-l+3)+"px"}))}},mounted:function(){this.magnify("bigImage-"+this.index,1.7)}},l=(o(257),o(44)),component=Object(l.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"object-fit-maybe container",style:{height:e.CellHeight+"px",width:e.CellWidth+"px"}},[t("div",{staticClass:"small-img-holder"},[t("img",{staticClass:"small-img",attrs:{src:o(255),alt:""}}),e._v(" "),t("div",{staticClass:"round",style:{left:e.mouseX+"px",top:e.mouseY+"px"},attrs:{id:"circle-"+e.index}})]),e._v(" "),t("div",{staticClass:"big-img-holder"},[t("img",{staticClass:"full",attrs:{id:"bigImage-"+e.index,src:o(256),alt:""}})])])}),[],!1,null,null,null);t.default=component.exports}}]);