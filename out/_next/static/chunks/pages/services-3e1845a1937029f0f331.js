_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[23],{Am4Y:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/services",function(){return n("eefG")}])},"Gjj/":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("q1tI"),o=n.n(a).a.createElement;function r(e){return o("svg",{className:e.class,xmlns:"http://www.w3.org/2000/svg",width:e.width,height:e.height,fill:e.fill,viewBox:"0 0 18 18"},o("path",{d:"M9 3L7.94 4.06l4.19 4.19H3v1.5h9.13l-4.19 4.19L9 15l6-6z"}))}},OrM8:function(e,t,n){"use strict";var a=n("rePB"),o=n("wx14"),r=n("Ff2n"),i=n("q1tI"),s=n.n(i),c=n("iuhU"),l=n("nOHt"),u=n("YFqc"),f=n.n(u),m=n("NqtD"),p=n("H2TA"),d=n("G7As"),v=n("bfFb"),b=n("ofer"),h=i.forwardRef((function(e,t){var n=e.classes,a=e.className,s=e.color,l=void 0===s?"primary":s,u=e.component,f=void 0===u?"a":u,p=e.onBlur,h=e.onFocus,g=e.TypographyClasses,w=e.underline,y=void 0===w?"hover":w,O=e.variant,j=void 0===O?"inherit":O,N=Object(r.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),k=Object(d.a)(),x=k.isFocusVisible,C=k.onBlurVisible,E=k.ref,S=i.useState(!1),R=S[0],L=S[1],M=Object(v.a)(t,E);return i.createElement(b.a,Object(o.a)({className:Object(c.a)(n.root,n["underline".concat(Object(m.a)(y))],a,R&&n.focusVisible,"button"===f&&n.button),classes:g,color:l,component:f,onBlur:function(e){R&&(C(),L(!1)),p&&p(e)},onFocus:function(e){x(e)&&L(!0),h&&h(e)},ref:M,variant:j},N))})),g=Object(p.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(h),w=["as","href"],y=["href","activeClassName","className","innerRef","naked"],O=s.a.createElement,j=s.a.forwardRef((function(e,t){var n=e.as,a=e.href,i=Object(r.a)(e,w);return O(f.a,{href:a,as:n},O("a",Object(o.a)({ref:t},i)))}));function N(e){var t=e.href,n=e.activeClassName,i=void 0===n?"active":n,s=e.className,u=e.innerRef,f=e.naked,m=Object(r.a)(e,y),p=Object(l.useRouter)(),d="string"===typeof t?t:t.pathname,v=Object(c.a)(s,Object(a.a)({},i,p.pathname===d&&i));return f?O(j,Object(o.a)({className:v,ref:u,href:t},m)):O(g,Object(o.a)({underline:"none",component:j,className:v,ref:u,href:t},m))}t.a=s.a.forwardRef((function(e,t){return O(N,Object(o.a)({},e,{innerRef:t}))}))},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var a=n("zoAU"),o=n("7KCV");t.__esModule=!0,t.default=void 0;var r,i=o(n("q1tI")),s=n("elyg"),c=n("nOHt"),l=new Map,u=window.IntersectionObserver,f={};var m=function(e,t){var n=r||(u?r=new u((function(e){e.forEach((function(e){if(l.has(e.target)){var t=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),l.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),l.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}l.delete(e)}):function(){}};function p(e,t,n,a){(0,s.isLocalURL)(t)&&(e.prefetch(t,n,a).catch((function(e){0})),f[t+"%"+n]=!0)}var d=function(e){var t=!1!==e.prefetch,n=i.default.useState(),o=a(n,2),r=o[0],l=o[1],d=(0,c.useRouter)(),v=d&&d.pathname||"/",b=i.default.useMemo((function(){var t=(0,s.resolveHref)(v,e.href,!0),n=a(t,2),o=n[0],r=n[1];return{href:o,as:e.as?(0,s.resolveHref)(v,e.as):r||o}}),[v,e.href,e.as]),h=b.href,g=b.as;i.default.useEffect((function(){if(t&&u&&r&&r.tagName&&(0,s.isLocalURL)(h)&&!f[h+"%"+g])return m(r,(function(){p(d,h,g)}))}),[t,r,h,g,d]);var w=e.children,y=e.replace,O=e.shallow,j=e.scroll;"string"===typeof w&&(w=i.default.createElement("a",null,w));var N=i.Children.only(w),k={ref:function(e){e&&l(e),N&&"object"===typeof N&&N.ref&&("function"===typeof N.ref?N.ref(e):"object"===typeof N.ref&&(N.ref.current=e))},onClick:function(e){N.props&&"function"===typeof N.props.onClick&&N.props.onClick(e),e.defaultPrevented||function(e,t,n,a,o,r,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=a.indexOf("#")<0),t[o?"replace":"push"](n,a,{shallow:r}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,d,h,g,y,O,j)}};return t&&(k.onMouseEnter=function(e){(0,s.isLocalURL)(h)&&(N.props&&"function"===typeof N.props.onMouseEnter&&N.props.onMouseEnter(e),p(d,h,g,{priority:!0}))}),(e.passHref||"a"===N.type&&!("href"in N.props))&&(k.href=(0,s.addBasePath)((0,s.addLocale)(g,d&&d.locale,d&&d.defaultLocale))),i.default.cloneElement(N,k)};t.default=d},eefG:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var a=n("rePB"),o=n("q1tI"),r=n.n(o),i=n("8Kt/"),s=n.n(i),c=n("OrM8"),l=n("R/WZ"),u=n("tr08"),f=n("lopY"),m=n("tRbT"),p=n("ofer"),d=n("Z3vd"),v=n("Gjj/"),b=r.a.createElement;function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=Object(l.a)((function(e){var t;return{specialText:{fontFamily:"Pacifico",color:e.palette.common.orange},subtitle:{marginBottom:"1em"},icon:Object(a.a)({marginLeft:"2em"},e.breakpoints.down("xs"),{marginLeft:0}),serviceContainer:(t={marginTop:"10em"},Object(a.a)(t,e.breakpoints.down("sm"),{padding:25}),Object(a.a)(t,e.breakpoints.down("xs"),{padding:5}),t),learnButton:g(g({},e.typography.learnButton),{},Object(a.a)({fontSize:"0.7rem",height:35,padding:5},e.breakpoints.down("sm"),{marginBottom:"2em"}))}}));function y(e){var t=w(),n=Object(u.a)(),a=Object(f.a)(n.breakpoints.down("sm"));return b(m.a,{container:!0,direction:"column"},b(s.a,null,b("title",{key:"title"},"Top Custom Software Development Services | Shahrooz Development"),b("meta",{name:"description",key:"description",content:"Cutting-edge software, mobile app, and website development services with sleek custom designs - get a free online estimate instantly."}),b("meta",{property:"og:title",content:"Bringing Sm\xe5land Technology to the World | Services",key:"og:title"}),b("meta",{property:"og:url",key:"og:url",content:"https://shahroozsabet.github.io/services"}),b("link",{rel:"canonical",key:"canonical",href:"https://shahroozsabet.github.io/services"})),b(m.a,{item:!0,style:{marginLeft:a?0:"5em",marginTop:a?"1em":"2em"}},b(p.a,{align:a?"center":void 0,variant:"h1",gutterBottom:!0},"Services")),b(m.a,{item:!0}," ",b(m.a,{container:!0,direction:"row",justifyContent:a?"center":"flex-end",className:t.serviceContainer,style:{marginTop:a?"1em":"5em"}},b(m.a,{item:!0,style:{textAlign:a?"center":void 0,width:a?void 0:"35em"}},b(p.a,{variant:"h4"},"Mobile App Development"),b(p.a,{variant:"subtitle1",className:t.subtitle},"Extend Functionality. Extend Access. Increase Engagement."),b(p.a,{variant:"subtitle1"},"Integrate your web experience or create a standalone",a?null:b("br",null)," cross platform app."),b(d.a,{component:c.a,href:"/mobileapps",variant:"outlined",className:t.learnButton,onClick:function(){e.setValue(1),e.setSelectedIndex(2)}},b("span",{style:{marginRight:10}},"Learn More"),b(v.a,{width:10,height:10,fill:n.palette.common.blue}))),b(m.a,{item:!0,style:{marginRight:a?0:"5em"}},b("img",{className:t.icon,alt:"Mobile phone icon",src:"/assets/mobileIcon.svg",width:"250em"})))),b(m.a,{item:!0}," ",b(m.a,{container:!0,direction:"row",justifyContent:a?"center":void 0,className:t.serviceContainer},b(m.a,{item:!0,style:{marginLeft:a?0:"5em",textAlign:a?"center":void 0}},b(p.a,{variant:"h4"},"Custom Software Development"),b(p.a,{variant:"subtitle1",className:t.subtitle},"Save Energy. Save Time. Save Money."),b(p.a,{variant:"subtitle1"},"Complete digital solutions, from investigation to"," ",b("span",{className:t.specialText},"celebration.")),b(d.a,{component:c.a,href:"/customsoftware",variant:"outlined",className:t.learnButton,onClick:function(){e.setValue(1),e.setSelectedIndex(1)}},b("span",{style:{marginRight:10}},"Learn More"),b(v.a,{width:10,height:10,fill:n.palette.common.blue}))),b(m.a,{item:!0},b("img",{className:t.icon,alt:"custom software icon",src:"/assets/customSoftware.svg"})))),b(m.a,{item:!0}," ",b(m.a,{container:!0,direction:"row",justifyContent:a?"center":"flex-end",className:t.serviceContainer,style:{marginBottom:"10em"}},b(m.a,{item:!0,style:{textAlign:a?"center":void 0,width:a?void 0:"35em"}},b(p.a,{variant:"h4"},"Website Development"),b(p.a,{variant:"subtitle1",className:t.subtitle},"Reach More. Discover More. Sell More."),b(p.a,{variant:"subtitle1"},"Optimized for Search engines, built for speed."),b(d.a,{component:c.a,href:"/websites",variant:"outlined",className:t.learnButton,onClick:function(){e.setValue(1),e.setSelectedIndex(3)}},b("span",{style:{marginRight:10}},"Learn More"),b(v.a,{width:10,height:10,fill:n.palette.common.blue}))),b(m.a,{item:!0,style:{marginRight:a?0:"5em"}},b("img",{className:t.icon,alt:"website icon",src:"/assets/websiteIcon.svg",width:"250em"})))))}}},[["Am4Y",0,1,2,3]]]);