(function(f,i,h){var j=function(a){return a.each(function(){var b=i(this),c,p,d,t=15,s;function q(k){k.preventDefault();i(k.target).trigger("tap",[k])}function r(){d=f.document.body.scrollTop;if(b.is("a")){s=b[0].href;b[0].href="#"}}function e(k){k.preventDefault();if(c&&c!==k.type){return false}c=k.type;clearTimeout(p);p=setTimeout(function(){c=null},1000);if(k.type==="touchend"&&Math.abs(f.document.body.scrollTop-d)>t){return false}if(s){b[0].href=s}s=null;q(k)}b.bind("touchstart",r).bind("touchend",e).bind("click",e)})};var g=i.fn.bind;i.fn.bind=function(b,a){if(/(^| )tap( |$)/.test(b)){j(this)}return g.apply(this,[b,a])}}(this,jQuery));(function(){$("html").removeClass("no-js");if(window.getComputedStyle){var d=window.getComputedStyle(document.body,":after").getPropertyValue("content")}function e(){var g=$("#m-global-nav");if(g.length>0){g.insertAfter("#global-header").addClass("s-is-moved s-is-hidden")}}function c(){var g=$("#menu-button");g.removeClass("jumper");g.bind("tap",function(k){var i=$("<div />",{id:"overlay","class":"s-is-active"});var h=$("#overlay");if(h.length){h.toggleClass("s-is-active")}else{i.insertBefore("#global-header")}var j=$(this);j.toggleClass("s-is-flipped");$("#m-global-nav").toggleClass("s-is-hidden");k.preventDefault()})}function b(){function j(){$('<p class="back"><span class="visuallyhidden">St&auml;ng</span></p>').appendTo("#menu-button");$("#menu-global-nav .parent > a").bind("tap",function(l){var k=$(this);k.parent(".parent").toggleClass("s-is-active").toggleClass("s-is-passive");k.next(".sub-menu").toggle();l.preventDefault()})}function h(){var k=$(".parent");if($("#set-current-menuItem").length||k.is(".current-menu-ancestor")){$("#menu-global-nav a").each(function(){var m=$(".m-article-meta a").first().text();var l=$(this);if(m==l.text()){l.parent().addClass("current-menu-item")}});k.children(".sub-menu").show();k.removeClass("s-is-passive").addClass("s-is-active")}}function g(){$(".jumper").bind("tap",function(l){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var k=$(this.hash);k=k.length&&k||jQuery("[name="+this.hash.slice(1)+"]");if(k.length){var m=k.offset().top-24;$("html,body").animate({scrollTop:m},400);l.preventDefault()}}})}function i(){$("#searchsubmit").bind("tap",function(k){$("#searchform").submit()});$("a.tappilyTap, a.nextpostslink, a.prevoiuspostslink").bind("tap",function(){window.location=$(this).attr("href")})}j();h();g();i()}function f(){$('<li class="menu-item menu-item-toggle-aside"><a class="toggle-editable-aside" href="#">Bokm&auml;rken</a></li>').insertBefore("#menu-global-nav .is-last");function j(){$(".toggle-editable-aside").on("click",function(k){$("#editableAside").toggleClass("s-is-hidden");k.preventDefault()})}function h(k,n,m,l){$(k).on("click",function(){if(localStorage.getItem(n)){localStorage.removeItem(n);$(m).children().remove();$(l).appendTo($(m))}})}function g(){var n=document.getElementById("editable-bookmarks");var l=$(n).attr("id");var m=document.getElementById("addBookmark");var k=$(m).attr("class");var o=$("#editableAside");if(localStorage.getItem("storedBookmarks")){n.innerHTML=localStorage.getItem("storedBookmarks");$("#"+l+" a").each(function(){if($(this).hasClass(k)){$(m).addClass("s-is-passive")}})}$(m).on("click",function(p){if($(window).scrollTop()>60){$("html, body").animate({scrollTop:0},250)}if(!$(m).is(".s-is-passive")){$("#placeholderBookmarks").remove();$(m).clone().appendTo($(n)).wrap("<li></li>");$(m).addClass("s-is-passive");localStorage.setItem("storedBookmarks",n.innerHTML);o.removeClass("s-is-hidden")}else{o.toggleClass("s-is-hidden")}$("#"+l+" ."+k).fadeOut().fadeIn();p.preventDefault()});$("#erase-editable-bookmarks").on("click",function(){$(m).removeClass("s-is-passive")});h("#erase-editable-bookmarks","storedBookmarks",n,'<li id="placeholderBookmarks">Du har inga sparade bokm&auml;rken.</li>')}function i(){var k=document.getElementById("editable-notes");if(localStorage.getItem("storedNotes")){k.innerHTML=localStorage.getItem("storedNotes")}$(k).blur(function(){localStorage.setItem("storedNotes",this.innerHTML)});h("#erase-editable-notes","storedNotes",k,"<li>B&ouml;rja anteckna.</li>")}j();g();i()}function a(){var g=$(window);var n=$("#global-footer");var m=$("#footerWrapper");var l=$(document).innerHeight();var i=g.innerHeight();var h=m.innerHeight();var k=document.body.scrollHeight>document.body.clientHeight;var j=function(){m.show();if(g.scrollTop()+144>l-g.height()){m.removeClass("s-is-hidden");g.off("scroll",j)}};if(h>i||k){m.show();n.addClass("s-overflow-auto")}else{m.addClass("s-is-hidden s-is-fixed");g.on("scroll",j)}}if(window.getComputedStyle){if(d.indexOf("alphascreen")!=-1||d.indexOf("betascreen")!=-1||d.indexOf("charliescreen")!=-1){e();c()}if(d.indexOf("charliescreen")!=-1){a()}if(d.indexOf("deltascreen")!=-1&&window.localStorage){f()}}b()})();