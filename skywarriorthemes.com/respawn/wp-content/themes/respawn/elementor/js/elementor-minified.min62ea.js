!function(t,e){"function"==typeof define&&define.amd?define([],e):"object"==typeof module&&module.exports?module.exports=e():t.anime=e()}(this,function(){var c,i,t,e,n,s={duration:1e3,delay:0,loop:!1,autoplay:!0,direction:"normal",easing:"easeOutElastic",elasticity:400,round:!1,begin:void 0,update:void 0,complete:void 0},o="translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY".split(" "),l={arr:function(t){return Array.isArray(t)},obj:function(t){return-1<Object.prototype.toString.call(t).indexOf("Object")},svg:function(t){return t instanceof SVGElement},dom:function(t){return t.nodeType||l.svg(t)},num:function(t){return!isNaN(parseInt(t))},str:function(t){return"string"==typeof t},fnc:function(t){return"function"==typeof t},und:function(t){return void 0===t},nul:function(t){return"null"==typeof t},hex:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)},rgb:function(t){return/^rgb/.test(t)},hsl:function(t){return/^hsl/.test(t)},col:function(t){return l.hex(t)||l.rgb(t)||l.hsl(t)}},p=(e={},n={Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t,e){if(0===t||1===t)return t;var i=1-Math.min(e,998)/1e3,n=t/1-1;return-Math.pow(2,10*n)*Math.sin(2*(n-i/(2*Math.PI)*Math.asin(1))*Math.PI/i)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,i=4;t<((e=Math.pow(2,--i))-1)/11;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)}},["Quad","Cubic","Quart","Quint","Expo"].forEach(function(t,e){n[t]=function(t){return Math.pow(t,e+2)}}),Object.keys(n).forEach(function(t){var i=n[t];e["easeIn"+t]=i,e["easeOut"+t]=function(t,e){return 1-i(1-t,e)},e["easeInOut"+t]=function(t,e){return t<.5?i(2*t,e)/2:1-i(-2*t+2,e)/2},e["easeOutIn"+t]=function(t,e){return t<.5?(1-i(1-2*t,e))/2:(i(2*t-1,e)+1)/2}}),e.linear=function(t){return t},e),a=function(t){return l.str(t)?t:t+""},r=function(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()},d=function(t){if(l.col(t))return!1;try{return document.querySelectorAll(t)}catch(t){return!1}},h=function(t){return t.reduce(function(t,e){return t.concat(l.arr(e)?h(e):e)},[])},u=function(t){return l.arr(t)?t:(l.str(t)&&(t=d(t)||t),t instanceof NodeList||t instanceof HTMLCollection?[].slice.call(t):[t])},m=function(t,e){return t.some(function(t){return t===e})},_=function(t){return t.filter(function(t,e,i){return i.indexOf(t)===e})},g=function(t){var e,i={};for(e in t)i[e]=t[e];return i},f=function(t,e){for(var i in e)t[i]=l.und(t[i])?e[i]:t[i];return t},v=function(t){return/([\+\-]?[0-9|auto\.]+)(%|px|pt|em|rem|in|cm|mm|ex|pc|vw|vh|deg)?/.exec(t)[2]},y=function(t,e,i){return v(e)?e:-1<t.indexOf("translate")?v(i)?e+v(i):e+"px":-1<t.indexOf("rotate")||-1<t.indexOf("skew")?e+"deg":e},w=function(t,e){if(e in t.style)return getComputedStyle(t).getPropertyValue(r(e))||"0"},b=function(t,e){return l.dom(t)&&m(o,e)?"transform":l.dom(t)&&(t.getAttribute(e)||l.svg(t)&&t[e])?"attribute":l.dom(t)&&"transform"!==e&&w(t,e)?"css":l.nul(t[e])||l.und(t[e])?void 0:"object"},x=function(t,e){switch(b(t,e)){case"transform":return function(t,i){var e=-1<i.indexOf("scale")?1:0,n=t.style.transform;if(!n)return e;for(var o=/(\w+)\((.+?)\)/g,a=[],r=[],s=[];a=o.exec(n);)r.push(a[1]),s.push(a[2]);return(n=s.filter(function(t,e){return r[e]===i})).length?n[0]:e}(t,e);case"css":return w(t,e);case"attribute":return t.getAttribute(e)}return t[e]||0},k=function(t,e,i){return l.col(e)?e=l.rgb(e)?e:l.hex(e)?function(t){t=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(t,e,i,n){return e+e+i+i+n+n});var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return"rgb("+(t=parseInt(e[1],16))+","+parseInt(e[2],16)+","+(e=parseInt(e[3],16))+")"}(e):l.hsl(e)?function(t){t=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t);var e=parseInt(t[1])/360,i=parseInt(t[2])/100,n=parseInt(t[3])/100;if(t=function(t,e,i){return i<0&&(i+=1),1<i&&--i,i<1/6?t+6*(e-t)*i:i<.5?e:i<2/3?t+(e-t)*(2/3-i)*6:t},0==i)i=n=e=n;else{var o=n<.5?n*(1+i):n+i-n*i,a=2*n-o;i=t(a,o,e+1/3),n=t(a,o,e),e=t(a,o,e-1/3)}return"rgb("+255*i+","+255*n+","+255*e+")"}(e):void 0:v(e)?e:(!(t=v(t.to)?v(t.to):v(t.from))&&i&&(t=v(i)),t?e+t:e)},P=function(t){var e=/-?\d*\.?\d+/g;return{original:t,numbers:a(t).match(e)?a(t).match(e).map(Number):[0],strings:a(t).split(e)}},$=function(t,e,i,n){return e="transform"===i?(i=t+"("+y(t,e.from,e.to)+")",t+"("+y(t,e.to)+")"):(t="css"===i?w(n,t):void 0,i=k(e,e.from,t),k(e,e.to,t)),{from:P(i),to:P(e)}},O=function(t,e){var s,i,p,n,o,a,r=(i=e,p=[],(s=t).forEach(function(o,a){var r=o.target;return i.forEach(function(t){var e=b(r,t.name);if(e){var i;i=t.name;var n=t.value;i={from:1<(n=u(l.fnc(n)?n(r,a):n)).length?n[0]:x(r,i),to:1<n.length?n[1]:n[0]},(n=g(t)).animatables=o,n.type=e,n.from=$(t.name,i,n.type,r).from,n.to=$(t.name,i,n.type,r).to,n.round=l.col(i.from)||n.round?1:0,n.delay=(l.fnc(n.delay)?n.delay(r,a,s.length):n.delay)/D.speed,n.duration=(l.fnc(n.duration)?n.duration(r,a,s.length):n.duration)/D.speed,p.push(n)}})}),p);return(n=r,o=["name","from","to","delay","duration"],a={},n.forEach(function(e){var t=JSON.stringify(o.map(function(t){return e[t]}));a[t]=a[t]||[],a[t].push(e)}),Object.keys(a).map(function(t){return a[t]})).map(function(t){var e=g(t[0]);return e.animatables=t.map(function(t){return t.animatables}),e.totalDuration=e.delay+e.duration,e})},I=function(n,o){n.tweens.forEach(function(t){var e=t.from,i=n.duration-(t.delay+t.duration);t.from=t.to,t.to=e,o&&(t.delay=i)}),n.reversed=!n.reversed},M=function(t){var e=[],i=[];return t.tweens.forEach(function(t){"css"!==t.type&&"transform"!==t.type||(e.push("css"===t.type?r(t.name):"transform"),t.animatables.forEach(function(t){i.push(t.target)}))}),{properties:_(e).join(", "),elements:_(i)}},j=function(o,t){var n,e,a,r=Math.min(Math.max(t-o.delay,0),o.duration)/o.duration,i=o.to.numbers.map(function(t,e){var i=o.from.numbers[e],n=p[o.easing](r,o.elasticity);i=o.path?function(e,i){var n=e.path,o=e.value*i,t=(r=function(t){return t=t||0,n.getPointAtLength(1<i?e.value+t:o+t)})(),a=r(-1),r=r(1);switch(e.name){case"translateX":return t.x;case"translateY":return t.y;case"rotate":return 180*Math.atan2(r.y-a.y,r.x-a.x)/Math.PI}}(o,n):i+n*(t-i);return o.round?Math.round(i*o.round)/o.round:i});return n=i,e=o.to.strings,a=o.from.strings,e.reduce(function(t,e,i){return e=e||a[i-1],t+n[i-1]+e})},z=function(t,e){var i;t.currentTime=e,t.progress=e/t.duration*100;for(var n=0;n<t.tweens.length;n++){var o=t.tweens[n];o.currentValue=j(o,e);for(var a=o.currentValue,r=0;r<o.animatables.length;r++){var s=(p=o.animatables[r]).id,p=p.target,l=o.name;switch(o.type){case"css":p.style[l]=a;break;case"attribute":p.setAttribute(l,a);break;case"object":p[l]=a;break;case"transform":i||(i={}),i[s]||(i[s]=[]),i[s].push(a)}}}if(i)for(n in c||(c=(w(document.body,"transform")?"":"-webkit-")+"transform"),i)t.animatables[n].target.style[c]=i[n].join(" ");t.settings.update&&t.settings.update(t)},T=function(t){var e,i={};i.animatables=(e=(e=t.targets)?h(l.arr(e)?e.map(u):u(e)):[]).map(function(t,e){return{target:t,id:e}}),i.settings=f(t,s);var n,o=i.settings,a=[];for(n in t)if(!s.hasOwnProperty(n)&&"targets"!==n){var r=l.obj(t[n])?g(t[n]):{value:t[n]};r.name=n,a.push(f(r,o))}return i.properties=a,i.tweens=O(i.animatables,i.properties),i.duration=function(t){if(t.length)return Math.max.apply(Math,t.map(function(t){return t.totalDuration}))}(i.tweens)||t.duration,i.currentTime=0,i.progress=0,i.ended=!1,i},E=[],S=0,C=(i=function(){S=requestAnimationFrame(t)},t=function(t){if(E.length){for(var e=0;e<E.length;e++)E[e].tick(t);i()}else cancelAnimationFrame(S),S=0},i),D=function(t){var i=T(t),n={};return i.tick=function(t){i.ended=!1,n.start||(n.start=t),n.current=Math.min(Math.max(n.last+t-n.start,0),i.duration),z(i,n.current);var e=i.settings;e.begin&&n.current>=e.delay&&(e.begin(i),e.begin=void 0),n.current>=i.duration&&(e.loop?(n.start=t,"alternate"===e.direction&&I(i,!0),l.num(e.loop)&&e.loop--):(i.ended=!0,i.pause(),e.complete&&e.complete(i)),n.last=0)},i.seek=function(t){z(i,t/100*i.duration)},i.pause=function(){M(i).elements.forEach(function(t){t.style.removeProperty("will-change")});var t=E.indexOf(i);-1<t&&E.splice(t,1)},i.play=function(t){var e;i.pause(),t&&(i=f(T(f(t,i.settings)),i)),n.start=0,n.last=i.ended?0:i.currentTime,"reverse"===(t=i.settings).direction&&I(i),"alternate"!==t.direction||t.loop||(t.loop=1),(e=M(i)).elements.forEach(function(t){t.style.willChange=e.properties}),E.push(i),S||C()},i.restart=function(){i.reversed&&I(i),i.pause(),i.seek(0),i.play()},i.settings.autoplay&&i.play(),i};return D.version="1.1.1",D.speed=1,D.list=E,D.remove=function(t){t=h(l.arr(t)?t.map(u):u(t));for(var e=E.length-1;0<=e;e--)for(var i=E[e],n=i.tweens,o=n.length-1;0<=o;o--)for(var a=n[o].animatables,r=a.length-1;0<=r;r--)m(t,a[r].target)&&(a.splice(r,1),a.length||n.splice(o,1),n.length||i.pause())},D.easings=p,D.getValue=x,D.path=function(t){return{path:t=l.str(t)?d(t)[0]:t,value:t.getTotalLength()}},D.random=function(t,e){return Math.floor(Math.random()*(e-t+1))+t},D}),function(w){function b(){var t=location.href;return hashtag=-1!==t.indexOf("#prettyPhoto")&&decodeURI(t.substring(t.indexOf("#prettyPhoto")+1,t.length)),hashtag&&(hashtag=hashtag.replace(/<|>/g,"")),hashtag}function x(t,e){t=t.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var i=new RegExp("[\\?&]"+t+"=([^&#]*)").exec(e);return null==i?"":i[1]}w.prettyPhoto={version:"3.1.6"},w.fn.prettyPhoto=function(e){function i(){w(".pp_loaderIcon").hide(),projectedTop=scroll_pos.scrollTop+(v/2-l.containerHeight/2),projectedTop<0&&(projectedTop=0),$ppt.fadeTo(settings.animation_speed,1),$pp_pic_holder.find(".pp_content").animate({height:l.contentHeight,width:l.contentWidth},settings.animation_speed),$pp_pic_holder.animate({top:projectedTop,left:y/2-l.containerWidth/2<0?0:y/2-l.containerWidth/2,width:l.containerWidth},settings.animation_speed,function(){$pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(l.height).width(l.width),$pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed),isSet&&"image"==r(pp_images[set_position])?$pp_pic_holder.find(".pp_hoverContainer").show():$pp_pic_holder.find(".pp_hoverContainer").hide(),settings.allow_expand&&(l.resized?w("a.pp_expand,a.pp_contract").show():w("a.pp_expand").hide()),!settings.autoplay_slideshow||_||c||w.prettyPhoto.startSlideshow(),settings.changepicturecallback(),c=!0}),isSet&&settings.overlay_gallery&&"image"==r(pp_images[set_position])?(itemWidth=57,navWidth="facebook"==settings.theme||"pp_default"==settings.theme?50:30,itemsPerPage=Math.floor((l.containerWidth-100-navWidth)/itemWidth),itemsPerPage=itemsPerPage<pp_images.length?itemsPerPage:pp_images.length,totalPage=Math.ceil(pp_images.length/itemsPerPage)-1,0==totalPage?(navWidth=0,$pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()):$pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show(),galleryWidth=itemsPerPage*itemWidth,fullGalleryWidth=pp_images.length*itemWidth,$pp_gallery.css("margin-left",-(galleryWidth/2+navWidth/2)).find("div:first").width(galleryWidth+5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected"),goToPage=Math.floor(set_position/itemsPerPage)<totalPage?Math.floor(set_position/itemsPerPage):totalPage,w.prettyPhoto.changeGalleryPage(goToPage),$pp_gallery_li.filter(":eq("+set_position+")").addClass("selected")):$pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave"),e.ajaxcallback()}function n(t){$pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility","hidden"),$pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed,function(){w(".pp_loaderIcon").show(),t()})}function o(t,e){if(resized=!1,a(t,e),imageWidth=t,imageHeight=e,(y<m||v<u)&&doresize&&settings.allow_resize&&!f){for(resized=!0,fitting=!1;!fitting;)y<m?(imageWidth=y-200,imageHeight=e/t*imageWidth):v<u?(imageHeight=v-200,imageWidth=t/e*imageHeight):fitting=!0,u=imageHeight,m=imageWidth;(y<m||v<u)&&o(m,u),a(imageWidth,imageHeight)}return{width:Math.floor(imageWidth),height:Math.floor(imageHeight),containerHeight:Math.floor(u),containerWidth:Math.floor(m)+2*settings.horizontal_padding,contentHeight:Math.floor(d),contentWidth:Math.floor(h),resized:resized}}function a(t,e){t=parseFloat(t),e=parseFloat(e),$pp_details=$pp_pic_holder.find(".pp_details"),$pp_details.width(t),detailsHeight=parseFloat($pp_details.css("marginTop"))+parseFloat($pp_details.css("marginBottom")),$pp_details=$pp_details.clone().addClass(settings.theme).width(t).appendTo(w("body")).css({position:"absolute",top:-1e4}),detailsHeight+=$pp_details.height(),detailsHeight=detailsHeight<=34?36:detailsHeight,$pp_details.remove(),$pp_title=$pp_pic_holder.find(".ppt"),$pp_title.width(t),titleHeight=parseFloat($pp_title.css("marginTop"))+parseFloat($pp_title.css("marginBottom")),$pp_title=$pp_title.clone().appendTo(w("body")).css({position:"absolute",top:-1e4}),titleHeight+=$pp_title.height(),$pp_title.remove(),d=e+detailsHeight,h=t,u=d+titleHeight+$pp_pic_holder.find(".pp_top").height()+$pp_pic_holder.find(".pp_bottom").height(),m=t}function r(t){return t.match(/youtube\.com\/watch/i)||t.match(/youtu\.be/i)?"youtube":t.match(/vimeo\.com/i)?"vimeo":t.match(/\b.mov\b/i)?"quicktime":t.match(/\b.swf\b/i)?"flash":t.match(/\biframe=true\b/i)?"iframe":t.match(/\bajax=true\b/i)?"ajax":t.match(/\bcustom=true\b/i)?"custom":"#"==t.substr(0,1)?"inline":"image"}function s(){if(doresize&&"undefined"!=typeof $pp_pic_holder){if(scroll_pos=t(),contentHeight=$pp_pic_holder.height(),contentwidth=$pp_pic_holder.width(),projectedTop=v/2+scroll_pos.scrollTop-contentHeight/2,projectedTop<0&&(projectedTop=0),contentHeight>v)return;$pp_pic_holder.css({top:projectedTop,left:y/2+scroll_pos.scrollLeft-contentwidth/2})}}function t(){return self.pageYOffset?{scrollTop:self.pageYOffset,scrollLeft:self.pageXOffset}:document.documentElement&&document.documentElement.scrollTop?{scrollTop:document.documentElement.scrollTop,scrollLeft:document.documentElement.scrollLeft}:document.body?{scrollTop:document.body.scrollTop,scrollLeft:document.body.scrollLeft}:void 0}function p(){if(settings.social_tools&&(facebook_like_link=settings.social_tools.replace("{location_href}",encodeURIComponent(location.href))),settings.markup=settings.markup.replace("{pp_social}",""),w("body").append(settings.markup),$pp_pic_holder=w(".pp_pic_holder"),$ppt=w(".ppt"),$pp_overlay=w("div.pp_overlay"),isSet&&settings.overlay_gallery){currentGalleryPage=0,toInject="";for(var t=0;t<pp_images.length;t++)pp_images[t].match(/\b(jpg|jpeg|png|gif)\b/gi)?(classname="",img_src=pp_images[t]):(classname="default",img_src=""),toInject+="<li class='"+classname+"'><a href='#'><img src='"+img_src+"' width='50' alt='' /></a></li>";toInject=settings.gallery_markup.replace(/{gallery}/g,toInject),$pp_pic_holder.find("#pp_full_res").after(toInject),$pp_gallery=w(".pp_pic_holder .pp_gallery"),$pp_gallery_li=$pp_gallery.find("li"),$pp_gallery.find(".pp_arrow_next").on( "click", function() {return w.prettyPhoto.changeGalleryPage("next"),w.prettyPhoto.stopSlideshow(),!1}),$pp_gallery.find(".pp_arrow_previous").click(function(){return w.prettyPhoto.changeGalleryPage("previous"),w.prettyPhoto.stopSlideshow(),!1}),$pp_pic_holder.find(".pp_content").hover(function(){$pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn()},function(){$pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut()}),itemWidth=57,$pp_gallery_li.each(function(t){w(this).find("a").click(function(){return w.prettyPhoto.changePage(t),w.prettyPhoto.stopSlideshow(),!1})})}settings.slideshow&&($pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>'),$pp_pic_holder.find(".pp_nav .pp_play").click(function(){return w.prettyPhoto.startSlideshow(),!1})),$pp_pic_holder.attr("class","pp_pic_holder "+settings.theme),$pp_overlay.css({opacity:0,height:w(document).height(),width:w(window).width()}).bind("click",function(){settings.modal||w.prettyPhoto.close()}),w("a.pp_close").bind("click",function(){return w.prettyPhoto.close(),!1}),settings.allow_expand&&w("a.pp_expand").bind("click",function(){return w(this).hasClass("pp_expand")?(w(this).removeClass("pp_expand").addClass("pp_contract"),doresize=!1):(w(this).removeClass("pp_contract").addClass("pp_expand"),doresize=!0),n(function(){w.prettyPhoto.open()}),!1}),$pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click",function(){return w.prettyPhoto.changePage("previous"),w.prettyPhoto.stopSlideshow(),!1}),$pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click",function(){return w.prettyPhoto.changePage("next"),w.prettyPhoto.stopSlideshow(),!1}),s()}e=jQuery.extend({hook:"data-gal",animation_speed:"fast",ajaxcallback:function(){},slideshow:5e3,autoplay_slideshow:!1,opacity:.8,show_title:!0,allow_resize:!0,allow_expand:!0,default_width:500,default_height:344,counter_separator_label:"/",theme:"pp_default",horizontal_padding:20,hideflash:!1,wmode:"opaque",autoplay:!0,modal:!1,deeplinking:!0,overlay_gallery:!0,overlay_gallery_max:30,keyboard_shortcuts:!0,changepicturecallback:function(){},callback:function(){},ie6_fallback:!0,markup:'<div class="pp_pic_holder"> \t\t\t\t\t\t<div class="ppt">&nbsp;</div> \t\t\t\t\t\t<div class="pp_top"> \t\t\t\t\t\t\t<div class="pp_left"></div> \t\t\t\t\t\t\t<div class="pp_middle"></div> \t\t\t\t\t\t\t<div class="pp_right"></div> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div class="pp_content_container"> \t\t\t\t\t\t\t<div class="pp_left"> \t\t\t\t\t\t\t<div class="pp_right"> \t\t\t\t\t\t\t\t<div class="pp_content"> \t\t\t\t\t\t\t\t\t<div class="pp_loaderIcon"></div> \t\t\t\t\t\t\t\t\t<div class="pp_fade"> \t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_expand" title="Expand the image">Expand</a> \t\t\t\t\t\t\t\t\t\t<div class="pp_hoverContainer"> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_next" href="#">next</a> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_previous" href="#">previous</a> \t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t\t<div id="pp_full_res"></div> \t\t\t\t\t\t\t\t\t\t<div class="pp_details"> \t\t\t\t\t\t\t\t\t\t\t<div class="pp_nav"> \t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_previous">Previous</a> \t\t\t\t\t\t\t\t\t\t\t\t<p class="currentTextHolder">0/0</p> \t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_next">Next</a> \t\t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t\t\t<p class="pp_description"></p> \t\t\t\t\t\t\t\t\t\t\t<div class="pp_social">{pp_social}</div> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_close" href="#">Close</a> \t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t</div> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div class="pp_bottom"> \t\t\t\t\t\t\t<div class="pp_left"></div> \t\t\t\t\t\t\t<div class="pp_middle"></div> \t\t\t\t\t\t\t<div class="pp_right"></div> \t\t\t\t\t\t</div> \t\t\t\t\t</div> \t\t\t\t\t<div class="pp_overlay"></div>',gallery_markup:'<div class="pp_gallery"> \t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_previous">Previous</a> \t\t\t\t\t\t\t\t<div> \t\t\t\t\t\t\t\t\t<ul> \t\t\t\t\t\t\t\t\t\t{gallery} \t\t\t\t\t\t\t\t\t</ul> \t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_next">Next</a> \t\t\t\t\t\t\t</div>',image_markup:'<img id="fullResImage" src="{path}" />',flash_markup:'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',quicktime_markup:'<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="https://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="https://www.apple.com/quicktime/download/"></embed></object>',iframe_markup:'<iframe src ="{path}" width="{width}" height="{height}" ></iframe>',inline_markup:'<div class="pp_inline">{content}</div>',custom_markup:"",social_tools:'<div class="twitter"><a href="https://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="https://platform.twitter.com/widgets.js"><\/script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&layout=button_count&show_faces=true&width=500&action=like&font&colorscheme=light&height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'},e);var l,c,d,h,u,m,_,g=this,f=!1,v=w(window).height(),y=w(window).width();return doresize=!0,scroll_pos=t(),w(window).unbind("resize.prettyphoto").bind("resize.prettyphoto",function(){s(),v=w(window).height(),y=w(window).width(),"undefined"!=typeof $pp_overlay&&$pp_overlay.height(w(document).height()).width(y)}),e.keyboard_shortcuts&&w(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto",function(t){if("undefined"!=typeof $pp_pic_holder&&$pp_pic_holder.is(":visible"))switch(t.keyCode){case 37:w.prettyPhoto.changePage("previous"),t.preventDefault();break;case 39:w.prettyPhoto.changePage("next"),t.preventDefault();break;case 27:settings.modal||w.prettyPhoto.close(),t.preventDefault()}}),w.prettyPhoto.initialize=function(){return settings=e,"pp_default"==settings.theme&&(settings.horizontal_padding=16),theRel=w(this).attr(settings.hook),galleryRegExp=/\[(?:.*)\]/,isSet=!!galleryRegExp.exec(theRel),pp_images=isSet?jQuery.map(g,function(t){return-1!=w(t).attr(settings.hook).indexOf(theRel)?w(t).attr("href"):void 0}):w.makeArray(w(this).attr("href")),pp_titles=isSet?jQuery.map(g,function(t){return-1!=w(t).attr(settings.hook).indexOf(theRel)?w(t).find("img").attr("alt")?w(t).find("img").attr("alt"):"":void 0}):w.makeArray(w(this).find("img").attr("alt")),pp_descriptions=isSet?jQuery.map(g,function(t){return-1!=w(t).attr(settings.hook).indexOf(theRel)?w(t).attr("title")?w(t).attr("title"):"":void 0}):w.makeArray(w(this).attr("title")),pp_images.length>settings.overlay_gallery_max&&(settings.overlay_gallery=!1),set_position=jQuery.inArray(w(this).attr("href"),pp_images),rel_index=isSet?set_position:w("a["+settings.hook+"^='"+theRel+"']").index(w(this)),p(),settings.allow_resize&&w(window).bind("scroll.prettyphoto",function(){s()}),w.prettyPhoto.open(),!1},w.prettyPhoto.open=function(t){return"undefined"==typeof settings&&(settings=e,pp_images=w.makeArray(t),pp_titles=w.makeArray(arguments[1]?arguments[1]:""),pp_descriptions=w.makeArray(arguments[2]?arguments[2]:""),isSet=1<pp_images.length,set_position=arguments[3]?arguments[3]:0,p(t.target)),settings.hideflash&&w("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility","hidden"),1<w(pp_images).size()?w(".pp_nav").show():w(".pp_nav").hide(),w(".pp_loaderIcon").show(),settings.deeplinking&&("undefined"!=typeof theRel&&(location.hash=theRel+"/"+rel_index+"/")),settings.social_tools&&(facebook_like_link=settings.social_tools.replace("{location_href}",encodeURIComponent(location.href)),$pp_pic_holder.find(".pp_social").html(facebook_like_link)),$ppt.is(":hidden")&&$ppt.css("opacity",0).show(),$pp_overlay.show().fadeTo(settings.animation_speed,settings.opacity),$pp_pic_holder.find(".currentTextHolder").text(set_position+1+settings.counter_separator_label+w(pp_images).size()),void 0!==pp_descriptions[set_position]&&""!=pp_descriptions[set_position]?$pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position])):$pp_pic_holder.find(".pp_description").hide(),movie_width=parseFloat(x("width",pp_images[set_position]))?x("width",pp_images[set_position]):settings.default_width.toString(),movie_height=parseFloat(x("height",pp_images[set_position]))?x("height",pp_images[set_position]):settings.default_height.toString(),f=!1,-1!=movie_height.indexOf("%")&&(movie_height=parseFloat(w(window).height()*parseFloat(movie_height)/100-150),f=!0),-1!=movie_width.indexOf("%")&&(movie_width=parseFloat(w(window).width()*parseFloat(movie_width)/100-150),f=!0),$pp_pic_holder.fadeIn(function(){switch($ppt.html(settings.show_title&&""!=pp_titles[set_position]&&void 0!==pp_titles[set_position]?unescape(pp_titles[set_position]):"&nbsp;"),imgPreloader="",skipInjection=!1,r(pp_images[set_position])){case"image":imgPreloader=new Image,nextImage=new Image,isSet&&set_position<w(pp_images).size()-1&&(nextImage.src=pp_images[set_position+1]),prevImage=new Image,isSet&&pp_images[set_position-1]&&(prevImage.src=pp_images[set_position-1]),$pp_pic_holder.find("#pp_full_res")[0].innerHTML=settings.image_markup.replace(/{path}/g,pp_images[set_position]),imgPreloader.onload=function(){l=o(imgPreloader.width,imgPreloader.height),i()},imgPreloader.onerror=function(){alert("Image cannot be loaded. Make sure the path is correct and image exist."),w.prettyPhoto.close()},imgPreloader.src=pp_images[set_position];break;case"youtube":l=o(movie_width,movie_height),movie_id=x("v",pp_images[set_position]),""==movie_id&&(movie_id=pp_images[set_position].split("youtu.be/"),movie_id=movie_id[1],0<movie_id.indexOf("?")&&(movie_id=movie_id.substr(0,movie_id.indexOf("?"))),0<movie_id.indexOf("&")&&(movie_id=movie_id.substr(0,movie_id.indexOf("&")))),movie="https://www.youtube.com/embed/"+movie_id,movie+=x("rel",pp_images[set_position])?"?rel="+x("rel",pp_images[set_position]):"?rel=1",settings.autoplay&&(movie+="&autoplay=1"),toInject=settings.iframe_markup.replace(/{width}/g,l.width).replace(/{height}/g,l.height).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,movie);break;case"vimeo":l=o(movie_width,movie_height),movie_id=pp_images[set_position];var t=movie_id.match(/https(s?):\/\/(www\.)?vimeo.com\/(\d+)/);movie="https://player.vimeo.com/video/"+t[3]+"?title=0&byline=0&portrait=0",settings.autoplay&&(movie+="&autoplay=1;"),vimeo_width=l.width+"/embed/?moog_width="+l.width,toInject=settings.iframe_markup.replace(/{width}/g,vimeo_width).replace(/{height}/g,l.height).replace(/{path}/g,movie);break;case"quicktime":(l=o(movie_width,movie_height)).height+=15,l.contentHeight+=15,l.containerHeight+=15,toInject=settings.quicktime_markup.replace(/{width}/g,l.width).replace(/{height}/g,l.height).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,pp_images[set_position]).replace(/{autoplay}/g,settings.autoplay);break;case"flash":l=o(movie_width,movie_height),flash_vars=pp_images[set_position],flash_vars=flash_vars.substring(pp_images[set_position].indexOf("flashvars")+10,pp_images[set_position].length),filename=pp_images[set_position],filename=filename.substring(0,filename.indexOf("?")),toInject=settings.flash_markup.replace(/{width}/g,l.width).replace(/{height}/g,l.height).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,filename+"?"+flash_vars);break;case"iframe":l=o(movie_width,movie_height),frame_url=pp_images[set_position],frame_url=frame_url.substr(0,frame_url.indexOf("iframe")-1),toInject=settings.iframe_markup.replace(/{width}/g,l.width).replace(/{height}/g,l.height).replace(/{path}/g,frame_url);break;case"ajax":doresize=!1,l=o(movie_width,movie_height),doresize=!0,skipInjection=!0,w.get(pp_images[set_position],function(t){toInject=settings.inline_markup.replace(/{content}/g,t),$pp_pic_holder.find("#pp_full_res")[0].innerHTML=toInject,i()});break;case"custom":l=o(movie_width,movie_height),toInject=settings.custom_markup;break;case"inline":myClone=w(pp_images[set_position]).clone().append('<br clear="all" />').css({width:settings.default_width}).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo(w("body")).show(),doresize=!1,l=o(w(myClone).width(),w(myClone).height()),doresize=!0,w(myClone).remove(),toInject=settings.inline_markup.replace(/{content}/g,w(pp_images[set_position]).html())}imgPreloader||skipInjection||($pp_pic_holder.find("#pp_full_res")[0].innerHTML=toInject,i())}),!1},w.prettyPhoto.changePage=function(t){currentGalleryPage=0,"previous"==t?(set_position--,set_position<0&&(set_position=w(pp_images).size()-1)):"next"==t?(set_position++,set_position>w(pp_images).size()-1&&(set_position=0)):set_position=t,rel_index=set_position,doresize||(doresize=!0),settings.allow_expand&&w(".pp_contract").removeClass("pp_contract").addClass("pp_expand"),n(function(){w.prettyPhoto.open()})},w.prettyPhoto.changeGalleryPage=function(t){"next"==t?(currentGalleryPage++,currentGalleryPage>totalPage&&(currentGalleryPage=0)):"previous"==t?(currentGalleryPage--,currentGalleryPage<0&&(currentGalleryPage=totalPage)):currentGalleryPage=t,slide_speed="next"==t||"previous"==t?settings.animation_speed:0,slide_to=currentGalleryPage*itemsPerPage*itemWidth,$pp_gallery.find("ul").animate({left:-slide_to},slide_speed)},w.prettyPhoto.startSlideshow=function(){void 0===_?($pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function(){return w.prettyPhoto.stopSlideshow(),!1}),_=setInterval(w.prettyPhoto.startSlideshow,settings.slideshow)):w.prettyPhoto.changePage("next")},w.prettyPhoto.stopSlideshow=function(){$pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function(){return w.prettyPhoto.startSlideshow(),!1}),clearInterval(_),_=void 0},w.prettyPhoto.close=function(){$pp_overlay.is(":animated")||(w.prettyPhoto.stopSlideshow(),$pp_pic_holder.stop().find("object,embed").css("visibility","hidden"),w("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed,function(){w(this).remove()}),$pp_overlay.fadeOut(settings.animation_speed,function(){settings.hideflash&&w("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility","visible"),w(this).remove(),w(window).unbind("scroll.prettyphoto"),-1!==location.href.indexOf("#prettyPhoto")&&(location.hash="prettyPhoto"),settings.callback(),doresize=!0,c=!1,delete settings}))},!pp_alreadyInitialized&&b()&&(pp_alreadyInitialized=!0,hashIndex=b(),hashRel=hashIndex,hashIndex=hashIndex.substring(hashIndex.indexOf("/")+1,hashIndex.length-1),hashRel=hashRel.substring(0,hashRel.indexOf("/")),setTimeout(function(){w("a["+e.hook+"^='"+hashRel+"']:eq("+hashIndex+")").trigger("click")},50)),this.unbind("click.prettyphoto").bind("click.prettyphoto",w.prettyPhoto.initialize)}}(jQuery);var pp_alreadyInitialized=!1;!function(u){"use strict";function i(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t}function t(t,e){this.DOM={},this.DOM.el=t,this.options=i({},this.options),i(this.options,e),this._init()}t.prototype.options={movement:{imgWrapper:{translation:{x:0,y:0,z:0},rotation:{x:-5,y:5,z:0},reverseAnimation:{duration:1200,easing:"easeOutElastic",elasticity:600}},lines:{translation:{x:10,y:10,z:[0,10]},reverseAnimation:{duration:1e3,easing:"easeOutExpo",elasticity:600}},caption:{translation:{x:20,y:20,z:0},rotation:{x:0,y:0,z:0},reverseAnimation:{duration:1500,easing:"easeOutElastic",elasticity:600}},shine:{translation:{x:50,y:50,z:0},reverseAnimation:{duration:1200,easing:"easeOutElastic",elasticity:600}}}},t.prototype._init=function(){this.DOM.animatable={},this.DOM.animatable.imgWrapper=this.DOM.el.querySelector(".tilter__figure"),this.DOM.animatable.lines=this.DOM.el.querySelector(".tilter__deco--lines"),this.DOM.animatable.caption=this.DOM.el.querySelector(".tilter__caption"),this.DOM.animatable.overlay=this.DOM.el.querySelector(".tilter__deco--overlay"),this.DOM.animatable.shine=this.DOM.el.querySelector(".tilter__deco--shine > div"),this._initEvents()},t.prototype._initEvents=function(){var e=this;this.mouseenterFn=function(){for(var t in e.DOM.animatable)anime.remove(e.DOM.animatable[t])},this.mousemoveFn=function(t){requestAnimationFrame(function(){e._layout(t)})},this.mouseleaveFn=function(t){requestAnimationFrame(function(){for(var t in e.DOM.animatable)null!=e.options.movement[t]&&anime({targets:e.DOM.animatable[t],duration:null!=e.options.movement[t].reverseAnimation?e.options.movement[t].reverseAnimation.duration||0:1,easing:null!=e.options.movement[t].reverseAnimation&&e.options.movement[t].reverseAnimation.easing||"linear",elasticity:null!=e.options.movement[t].reverseAnimation&&e.options.movement[t].reverseAnimation.elasticity||null,scaleX:1,scaleY:1,scaleZ:1,translateX:0,translateY:0,translateZ:0,rotateX:0,rotateY:0,rotateZ:0})})},this.DOM.el.addEventListener("mousemove",this.mousemoveFn),this.DOM.el.addEventListener("mouseleave",this.mouseleaveFn),this.DOM.el.addEventListener("mouseenter",this.mouseenterFn)},t.prototype._layout=function(t){var e=function(t){var e=0,i=0;t||(t=u.event);return t.pageX||t.pageY?(e=t.pageX,i=t.pageY):(t.clientX||t.clientY)&&(e=t.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,i=t.clientY+document.body.scrollTop+document.documentElement.scrollTop),{x:e,y:i}}(t),i=document.body.scrollLeft+document.documentElement.scrollLeft,n=document.body.scrollTop+document.documentElement.scrollTop,o=this.DOM.el.getBoundingClientRect(),a=e.x-o.left-i,r=e.y-o.top-n;for(var s in this.DOM.animatable)if(null!=this.DOM.animatable[s]&&null!=this.options.movement[s]){var p=null!=this.options.movement[s]&&this.options.movement[s].translation||{x:0,y:0,z:0},l=null!=this.options.movement[s]&&this.options.movement[s].rotation||{x:0,y:0,z:0},c=function(t){for(var e in t)null==t[e]?t[e]=[0,0]:"number"==typeof t[e]&&(t[e]=[-1*t[e],t[e]])};c(p),c(l);var d={x:(p.x[1]-p.x[0])/o.width*a+p.x[0],y:(p.y[1]-p.y[0])/o.height*r+p.y[0],z:(p.z[1]-p.z[0])/o.height*r+p.z[0]},h={x:(l.x[1]-l.x[0])/o.height*r+l.x[0],y:(l.y[1]-l.y[0])/o.width*a+l.y[0],z:(l.z[1]-l.z[0])/o.width*a+l.z[0]};this.DOM.animatable[s].style.WebkitTransform=this.DOM.animatable[s].style.transform="translateX("+d.x+"px) translateY("+d.y+"px) translateZ("+d.z+"px) rotateX("+h.x+"deg) rotateY("+h.y+"deg) rotateZ("+h.z+"deg)"}},u.TiltFx=t}(window);