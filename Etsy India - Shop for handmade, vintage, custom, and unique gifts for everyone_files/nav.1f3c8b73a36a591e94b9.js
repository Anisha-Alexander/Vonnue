(window["jsonp-common-entrypoints"]=window["jsonp-common-entrypoints"]||[]).push([["auto/bootstrap/category-nav/v2/mobile/nav"],{"0IbO":function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var n=a("3a3M");var i=a.n(n);const o="animationend webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend transitionend webkitTransitionEnd MSTransitionEnd otransitionend",s="animation webkitAnimation mozAnimation MSAnimation oanimation transition webkitTransition MSTransition otransition",r=function(){false;return s.split(" ").some((t=>Object.prototype.hasOwnProperty.call(document.body.style,t)))};const l=function(t){t.stopPropagation();return true};function c(t,e,{onBeforeTransitionEnd:a=l,keepClass:n=false,baseAnimationClass:s="animated"}={}){const c=i.a.Deferred();if(!r())return c.resolve();const d=function(i){if(a(i)){t.removeClass(s).off(o,d);n||t.removeClass(e);c.resolve()}};t.addClass(s).addClass(e).on(o,d);return c.promise()}},AXLb:function(t,e,a){"use strict";a.r(e);var n=a("3a3M");var i=a.n(n);var o=a("Sc5Q");var s=a("V9r9");var r=a("PggL");var l=a("XkxG");var c=a("0IbO");var d=a("w1yB");var h=a("H3fw");var _=a("zxUc");function v(t,e,a){e in t?Object.defineProperty(t,e,{value:a,enumerable:true,configurable:true,writable:true}):t[e]=a;return t}const u={MOBILE_CATNAV_WRAPPER:"#mobile-catnav-overlay",TOP_NAV_CATEGORY_CONTAINER:'[data-ui="mobile-top-catnav-container"]',TOP_NAV_CATEGORY_LINK:'[data-ui="mobile-top-nav-category-link"]',SUB_NAV_CATEGORY_CONTAINER:'[data-ui="mobile-sub-catnav-container"]',SUB_NAV_CATEGORY_LINK:'[data-ui="mobile-sub-category-link"]',TER_NAV_CATEGORY_CONTAINER:'[data-ui="mobile-tertiary-catnav-container"]',TER_NAV_CATEGORY_LINK:'[data-ui="mobile-tertiary-category-link"]',ONSALE_LINK:'[data-ui="mobile-catnav-onsale-link"]',MOBILE_CATNAV_BACK_BUTTON:'[data-ui="mobile-catnav-back-btn"]',MOBILE_CATNAV_MENU:"#mobile-catnav-menu",TOP_NAV_TITLE:"#mobile-catnav-header-title",SUB_NAV_TITLE:"#mobile-sub-catnav-header-title",TER_NAV_TITLE:"#mobile-tertiary-catnav-header-title",MODAL_CONTAINER:"#etsy-modal-container",OVERLAY_MASK:"[data-overlay-mask]",OVERLAY_CONTENT_WRAPPER:"[data-overlay-content-wrapper]",GNAV:"#gnav-header-inner",OVERLAY_INNER:'[data-ui="mobile-cat-nav"]',HEADER:'[data-ui="mobile-catnav-header"]',SCROLL_WRAPPER:'[data-ui="mobile-catnav-scroll-wrapper"]',LAZY_IMAGES:"[data-mobile-cat-nav-lazy-image] noscript",MOBILE_TOP_NAV_PROMO:'[data-ui="mobile-top-nav-promo-link"]',MOBILE_SUB_NAV_PROMO:'[data-ui="mobile-sub-nav-promo-link"]',GIFT_GUIDE:"[data-mobile-gift-guide]",CYBER_SALE:"[data-mobile-cyber-sale]",COLLAGE_BUTTONS:".wt-btn",MOBILE_CATNAV_CLOSE_BUTTON:"#category-nav-close-button"};const N="gifting_catnav_flyout_js";const E={DISPLAY_NONE:"wt-display-none",OVERLAY_MASK:"mobile-catnav-overlay-mask",ANIMATIONS:{SLIDE_FROM_LEFT:"wt-animated--slide-from-left",BACK_BUTTON_ENTER:"catnav-animated-drift-left-in",BACK_BUTTON_LEAVE:"catnav-animated-drift-right-out",TITLE_ENTER:"catnav-animated-drift-right-in",TITLE_LEAVE:"catnav-animated-drift-left-out",SUB_NAV_IN:"wt-animated--slide-from-right"}};const T={TRANSITION_END:"transitionend"};const A=640;class O{constructor(t){v(this,"$context",void 0);v(this,"$mobileCatnavMenu",void 0);v(this,"$topNavTitle",void 0);v(this,"$subNavTitle",void 0);v(this,"$terNavTitle",void 0);v(this,"$topNavCategoryLinks",void 0);v(this,"$subNavLinks",void 0);v(this,"$backButton",void 0);v(this,"$searchResults",void 0);v(this,"$overlay",void 0);v(this,"$overlayInner",void 0);v(this,"$gnav",void 0);v(this,"$header",void 0);v(this,"browseTitle",void 0);v(this,"$scrollWrapper",void 0);v(this,"didLoadLazyImages",void 0);v(this,"$lazyImages",void 0);v(this,"$overlayContainer",void 0);v(this,"$overlayMask",void 0);v(this,"$overlayContentWrapper",void 0);v(this,"collageOverlay",void 0);v(this,"$showing",void 0);this.$context=t;this.$mobileCatnavMenu=i()(u.MOBILE_CATNAV_MENU);this.$topNavTitle=i()(u.TOP_NAV_TITLE);this.$subNavTitle=i()(u.SUB_NAV_TITLE);this.$terNavTitle=i()(u.TER_NAV_TITLE);this.$topNavCategoryLinks=this.$context.find(u.TOP_NAV_CATEGORY_LINK);this.$subNavLinks=this.$context.find(u.SUB_NAV_CATEGORY_LINK);this.$backButton=this.$context.find(u.MOBILE_CATNAV_BACK_BUTTON);this.$searchResults=i()(".gnav-search-inner").find("[data-id='search-suggestions']");this.$overlay=i()(u.MOBILE_CATNAV_WRAPPER);this.$overlayInner=this.$overlay.find(u.OVERLAY_INNER);this.$gnav=i()(u.GNAV);this.$header=this.$context.find(u.HEADER);this.browseTitle=this.$header.find("[data-categories-translation]").data("categories-translation");this.$scrollWrapper=this.$context.find(u.SCROLL_WRAPPER);this.$topNavTitle.html(this.browseTitle);this.didLoadLazyImages=false;this.$lazyImages=this.$overlayInner.find(u.LAZY_IMAGES);const e=this.$overlay[0];if(e instanceof HTMLElement&&e.querySelector("[data-overlay-modal]")){const t=d["a"].getBoolean("relocate_cat_nav",false)?{customTrigger:true}:{};this.collageOverlay=new l["a"](e,t)}this.$overlayContainer=i()(u.MODAL_CONTAINER);this.$overlayMask=this.$overlayContainer.find(u.OVERLAY_MASK);this.$overlayContentWrapper=this.$overlayContainer.find(u.OVERLAY_CONTENT_WRAPPER);this.$showing=this.$topNavTitle;this.bindEvents()}bindEvents(){this.listenForCategoryNavOpenFromSearchDropdown();this.captureTransitionEnd();this.$context.on("click",u.TOP_NAV_CATEGORY_LINK,i.a.proxy(this.onMouseClickInNavItem,this)).on("keydown",u.TOP_NAV_CATEGORY_LINK,i.a.proxy(this.onKeyDownInNavItem,this)).on("click",u.SUB_NAV_CATEGORY_LINK,i.a.proxy(this.onMouseClickInNavItem,this)).on("keydown",u.SUB_NAV_CATEGORY_LINK,i.a.proxy(this.onKeyDownInNavItem,this)).on("click",u.MOBILE_CATNAV_BACK_BUTTON,i.a.proxy(this.onMouseClickBack,this)).on("click",u.ONSALE_LINK,(()=>{h["default"].logEvent({event_name:"mobile_nav_onsale_click"})})).on("touchstart",u.MOBILE_TOP_NAV_PROMO,(t=>{const e=i()(t.currentTarget).data("eventName");h["default"].logEvent({event_name:"mobile_top_nav_promo_click",promo_name:e})})).on("touchstart",u.MOBILE_SUB_NAV_PROMO,(t=>{const e=i()(t.currentTarget).data("nodeId");h["default"].logEvent({event_name:"mobile_sub_nav_promo_click",node_id:e})})).on("touchstart",u.CYBER_SALE,(()=>{h["default"].logEvent({event_name:"catnav_mobile_sale_clicked"})})).on("touchstart",u.GIFT_GUIDE,(()=>{h["default"].logEvent({event_name:"catnav_mobile_gifts_clicked"})}));d["a"].getBoolean("relocate_cat_nav",false)&&this.$context.on("click",u.MOBILE_CATNAV_CLOSE_BUTTON,(()=>{const t=i()("#global-enhancements-search-query");i()("html, body").animate({scrollTop:t});t.focus()}));this.$overlay.on(r["a"].EVENTS.BEFORE_OPEN,i.a.proxy(this.onBeforeOpen,this));this.$overlay.on(r["a"].EVENTS.CLOSE,i.a.proxy(this.onClose,this));this.$overlay.on(r["a"].EVENTS.BEFORE_OPEN,i.a.proxy(this.onOpen,this))}listenForCategoryNavOpenFromSearchDropdown(){document.addEventListener("categoryNavOpenFromSearchDropdown",(()=>{this.openCatNavOverlay()}))}openCatNavOverlay(){var t;null===(t=this.collageOverlay)||void 0===t?void 0:t.open()}captureTransitionEnd(){this.$context.find(u.COLLAGE_BUTTONS).each(((t,e)=>{e.addEventListener(T.TRANSITION_END,(t=>{t.stopPropagation()}),true)}))}onMouseClickInNavItem(t){h["default"].logEvent({event_name:"mobile_category_nav_click"});const e=i()(t.currentTarget);const a=e.attr("aria-controls");const n=e.data("name");this.show(`#${a} ul`);if(this.$backButton.hasClass(E.DISPLAY_NONE)){this.show(u.MOBILE_CATNAV_BACK_BUTTON);Object(c["a"])(this.$backButton,E.ANIMATIONS.BACK_BUTTON_ENTER)}if(e.hasClass("top-nav-item")){this.$backButton.data("subnav-id",a);this.$backButton.data("subnav-name",n);this.show(`#${a}-ep`);this.hide(u.TOP_NAV_CATEGORY_CONTAINER);this.hide(u.MOBILE_CATNAV_MENU);this.$subNavTitle.html(n);this.showTitle(this.$subNavTitle,this.$topNavTitle,false,true)}else if(e.hasClass("subnav-item")&&!e.data().isViewAllCategoryLink){this.$backButton.data("ternav-id",a);this.hide(u.SUB_NAV_CATEGORY_CONTAINER);this.$terNavTitle.html(n);this.showTitle(this.$terNavTitle,this.$subNavTitle,false,true)}e.attr("aria-expanded","true");Object(c["a"])(i()(`#${a}`),E.ANIMATIONS.SUB_NAV_IN).then(i.a.proxy((()=>{o["a"].setFocusToFirstFocusableElement(i()(`#${a} ul`),i()(u.MOBILE_CATNAV_CLOSE_BUTTON))}),this))}onKeyDownInNavItem(t){t.which!==s["a"].ENTER&&t.which!==s["a"].SPACE||this.onMouseClickInNavItem(t)}onMouseClickBack(){const t=this.$backButton.data("ternav-id");const e=this.$backButton.data("subnav-id");if("0"!==t){i()(`[aria-controls="${t}"]`).attr("aria-expanded","false");this.hide(`#${t} ul`);this.show(`#${e} ul`);this.showTitle(this.$subNavTitle,this.$terNavTitle,true,true);this.$backButton.data("subnav_name","");this.$backButton.data("ternav-id","0");Object(c["a"])(i()(`#${e}`),E.ANIMATIONS.SLIDE_FROM_LEFT).then(i.a.proxy((()=>{o["a"].setFocusToFirstFocusableElement(i()(`#${e}`),i()(u.MOBILE_CATNAV_CLOSE_BUTTON))}),this))}else{i()(`[aria-controls="${e}"]`).attr("aria-expanded","false");this.hide(`#${e} ul`);this.showTopLevel(true);Object(c["a"])(i()(".mobile-topnav"),E.ANIMATIONS.SLIDE_FROM_LEFT).then(i.a.proxy((()=>{o["a"].setFocusToFirstFocusableElement(i()(".mobile-topnav"),i()(u.MOBILE_CATNAV_CLOSE_BUTTON))}),this))}}onBeforeOpen(){this.$overlayMask.addClass(E.OVERLAY_MASK);this.$overlayContentWrapper.addClass(E.OVERLAY_MASK);this.setOverlayHeight();if(!this.didLoadLazyImages){this.loadLazyImages();this.didLoadLazyImages=true}}onOpen(){o["a"].setFocusToFirstFocusableElement(i()(".mobile-topnav"),i()(u.MOBILE_CATNAV_CLOSE_BUTTON));h["default"].logEvent({event_name:"mobile_category_nav_open",gift_guide_flyout_enabled:d["a"].getBoolean(N,false)})}setOverlayHeight(){const t=this.$gnav.outerHeight();i()(window).width()<A?this.$overlayInner.css({top:`${t}px`,height:`calc(100vh - ${t}px)`}):this.$overlayInner.css({top:"0",height:"100vh"})}loadLazyImages(){this.$lazyImages.each((function(){const t=i()(this);t.replaceWith(t.text())}))}onClose(){const t=this.$backButton.data("ternav-id");const e=this.$backButton.data("subnav-id");this.hide(`#${t} ul`);this.hide(this.$terNavTitle.selector);this.hide(`#${e} ul`);this.showTopLevel(false);this.$overlayMask.removeClass(E.OVERLAY_MASK);this.$overlayContentWrapper.removeClass(E.OVERLAY_MASK);h["default"].logEvent({event_name:"mobile_category_nav_close"})}showTopLevel(t){this.show(u.MOBILE_CATNAV_MENU);this.show("[data-ui=mobile-top-catnav-container]");this.showTitle(this.$topNavTitle,this.$subNavTitle,true,t);this.$backButton.data("subnav-id","0");this.$backButton.hasClass(E.DISPLAY_NONE)||Object(c["a"])(this.$backButton,E.ANIMATIONS.BACK_BUTTON_LEAVE).then((()=>{this.hide(u.MOBILE_CATNAV_BACK_BUTTON)}))}showTitle(t,e,a,n){const i=a?"BACK_BUTTON":"TITLE";t.removeClass(E.DISPLAY_NONE);if(n){t.stop();e.stop();Object(c["a"])(t,E.ANIMATIONS[`${i}_ENTER`]);this.$showing=t;Object(c["a"])(e,E.ANIMATIONS[`${i}_LEAVE`]).then((()=>{this.$showing.is(e)||e.addClass(E.DISPLAY_NONE)}))}else e.addClass(E.DISPLAY_NONE)}show(t){this.$context.find(t).removeClass(E.DISPLAY_NONE).attr("aria-hidden","false");return this}hide(t){this.$context.find(t).addClass(E.DISPLAY_NONE).attr("aria-hidden","true");return this}}var m=a("/wG7");var f=a("ilZA");var b=a("oVvz");const I=function(t){let e=false,a;return function(){if(e)return a;e=true;a=t.apply(this,arguments);return a}};var p=I;var L=a("KWsK");const g=639;const C=900;const y="gifting_catnav_flyout_js";function $(){const t={KEY:"catnav-mobile",NAME:"CategoryNav_V2_Mobile_ApiSpec_CategoryNav"};const e={MOBILE_CAT_NAV:"#mobile-catnav-overlay"};const a=i()(e.MOBILE_CAT_NAV);const n=d["a"].getString("mott_version");const o=d["a"].getBoolean("catnav_show_sales",false);const s=d["a"].getString("catnav_gift_guide","control");const r=d["a"].getBoolean(y,false);let l=0;if(1===a.length){l=a.children().length;if(0===l){const e={mott_version:n,show_sales:o,catnav_gift_guide:s,gifting_catnav_flyout_js:r,locale:Object(b["a"])()};m["a"].fetchOne(t.KEY,t.NAME,e,"GET").done((e=>{if(e.output&&e.output[t.KEY]){a.html(e.output[t.KEY]);new O(a)}else L["a"].captureMessage("Mobile CatNav NeuSpec data.output not defined",{level:"info",extra:{specKey:t.KEY,specName:t.NAME,data:e}})}))}else 1===l&&new O(a)}}const B=p($);function w(){if(i()(window).width()<=C){i()(window).off("resize.catnav-mobile");B();i()(window).width()>g&&h["default"].logEvent({event_name:"md-breakpoint-catnav"})}}if(i()(window).width()>C)i()(window).on("resize.catnav-mobile",Object(f["a"])(w,1e3));else{i()($);i()(window).width()>g&&h["default"].logEvent({event_name:"md-breakpoint-catnav"})}},Sc5Q:function(t,e,a){"use strict";var n=a("3a3M");var i=a.n(n);var o=a("V9r9");const s="data-aria-hidden-by-contain-focus";const r=()=>{i()(document).off(".a11yContainFocus")};const l=()=>{i()(`[${s}]`).removeAttr(`${"aria-hidden"+" "}${s}`)};const c=t=>{let e=[];if(t){e=t.siblings().toArray();const a=t.parent();const n=a.prop("tagName");n&&"body"!==n.toLowerCase()&&(e=e.concat(c(a)))}return e};const d="a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex]:not([disabled]), *[contenteditable]";const h=t=>{const e=c(t);for(let a=0;a<e.length;a++){const t=e[a];if(t&&!t.getAttribute("aria-hidden")){t.setAttribute("aria-hidden","true");t.setAttribute(s,"true")}}};const _=t=>t instanceof i.a;const v=t=>{const e=_(t)?t:i()(t);h(e);r();if(!e.length)return;i()(document).on("keydown.a11yContainFocus",(t=>{if(t.keyCode===o["a"].TAB){const a=document.activeElement?i()(document.activeElement):null;const n=e.find(d).filter(":not(:hidden)");const o=a?n.index(a):-1;if(t.shiftKey&&o<=0){const e=n.get(n.length-1);e.focus();t.preventDefault()}if(!t.shiftKey&&(o===n.length-1||o<0)){n.first().trigger("focus");t.preventDefault()}}}))};const u=(t,e)=>{if(t&&e){const a=t instanceof i.a?t:i()(t);const n=document.activeElement?i()(document.activeElement):null;const o=a.find(d).filter(":not(:hidden)");const s=n?o.index(n):-1;if(e.shiftKey&&0===s)return true;if(!e.shiftKey&&s===o.length-1)return true}return false};const N=(t,e)=>{const a=t instanceof i.a?t:i()(t);const n=a.find(d).filter(":not(:hidden)");const o=n.not(e);const s=o.filter('[role="tab"]');0===n.length?a.trigger("focus"):1===n.length||0===o.length?n.first().trigger("focus"):o.first().is(s)?s.filter('[aria-selected="true"]').trigger("focus"):o.first().trigger("focus")};const E=t=>{const e=t instanceof i.a?t:i()(t);return e.find(d).filter(":not(:hidden)")};const T=()=>{r();l()};e["a"]={FOCUSABLE_ELEMENTS:d,containFocusInElement:v,isLastFocusableItem:u,getFocusableElementsInContainer:E,setFocusToFirstFocusableElement:N,removeContainFocus:T}},ilZA:function(t,e,a){"use strict";const n=function(t,e){let a;let n;let i;let o;let s=0;const r=function(){s=new Date(Date.now());i=null;o=t.apply(a,n)};return function(...l){const c=new Date(Date.now());const d=e-(c.valueOf()-s.valueOf());a=this;n=l;if(d<=0){null!==i&&clearTimeout(i);i=null;s=c;o=t.apply(a,n)}else i||(i=setTimeout(r,d));return o}};e["a"]=n}}]);
//# sourceMappingURL=https://www.etsy.com/sourcemaps/evergreenVendor/en-GB/async/common-entrypoints/auto/bootstrap/category-nav/v2/mobile/nav.1f3c8b73a36a591e94b9.js.map