_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{ALdH:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return N}));var a=n("rePB"),o=n("q1tI"),r=n.n(o),i=n("0b+E"),l=n("8Kt/"),s=n.n(l),c=n("vDqi"),u=n.n(c),m=n("OrM8"),d=n("R/WZ"),g=n("tr08"),f=n("lopY"),h=n("tRbT"),p=n("ofer"),b=n("r9w1"),v=n("Z3vd"),y=n("kfFl"),w=n("EQI2"),O=n("iae6"),j=n("79Xs"),k=n("Gjj/"),C=r.a.createElement;function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S=Object(d.a)((function(e){return{background:Object(a.a)({backgroundImage:'url("/assets/longJon.jpg")',backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",height:"60em",paddingBottom:"10em"},e.breakpoints.down("md"),{backgroundImage:'url("/assets/longJonMobile.jpg")'}),estimateButton:B(B({},e.typography.estimate),{},Object(a.a)({borderRadius:50,height:80,width:205,backgroundColor:e.palette.common.orange,fontSize:"1.5rem",marginRight:"5em",marginLeft:"2em","&:hover":{backgroundColor:e.palette.secondary.light}},e.breakpoints.down("md"),{marginLeft:0,marginRight:0})),learnButton:B(B({},e.typography.learnButton),{},Object(a.a)({fontSize:"0.7rem",height:35,padding:5},e.breakpoints.down("md"),{marginBottom:"2em"})),message:{border:"2px solid ".concat(e.palette.common.blue),marginTop:"5em",borderRadius:5},sendButton:B(B({},e.typography.estimate),{},Object(a.a)({borderRadius:50,height:45,width:245,fontSize:"1rem",backgroundColor:e.palette.common.orange,"&:hover":{backgroundColor:e.palette.secondary.light}},e.breakpoints.down("sm"),{height:40,width:225}))}}));function N(e){var t=S(),n=Object(g.a)(),a=Object(f.a)(n.breakpoints.down("md")),l=Object(f.a)(n.breakpoints.down("sm")),c=Object(f.a)(n.breakpoints.down("xs")),d=Object(o.useState)(""),R=d[0],N=d[1],E=Object(o.useState)(""),P=E[0],T=E[1],L=Object(o.useState)(""),x=L[0],z=L[1],M=Object(o.useState)(""),I=M[0],_=M[1],D=Object(o.useState)(""),F=D[0],H=D[1],W=Object(o.useState)(!1),A=W[0],q=W[1],U=Object(o.useState)(!1),V=U[0],J=U[1],K=Object(o.useState)({open:!1,message:"",backgroundColor:""}),G=K[0],X=K[1],Y=function(e){var t;switch(e.target.id){case"email":T(e.target.value),t=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value),z(t?"":"Invalid email")}},Z=C(r.a.Fragment,null,"Send Message",C("img",{src:"/assets/send.svg",alt:"paper airplane",style:{marginLeft:"1em"}}));return C(h.a,{container:!0,direction:"row"},C(s.a,null,C("title",{key:"title"},"Contact Us | Shahrooz Development"),C("meta",{name:"description",key:"description",content:"Let us guide you through the custom software design and development process. Send us a message with any of your ideas or questions to get started."}),C("meta",{property:"og:title",content:"Bringing Sm\xe5land Technology to the World | Contact Us",key:"og:title"}),C("meta",{property:"og:url",key:"og:url",content:"shahroozsabet.github.io/contact"}),C("link",{rel:"canonical",key:"canonical",href:"https://shahroozsabet.github.io/contact"})),C(h.a,{item:!0,container:!0,direction:"column",justifyContent:"center",alignItems:"center",style:{marginBottom:a?"5em":0,marginTop:l?"1em":a?"5em":0},lg:4,xl:3},C(h.a,{item:!0},C(h.a,{container:!0,direction:"column"},C(h.a,{item:!0},C(p.a,{align:a?"center":void 0,variant:"h1",style:{lineHeight:1}},"Contact Us"),C(p.a,{align:a?"center":void 0,variant:"body1",style:{color:n.palette.common.blue}},"We're waiting.")),C(h.a,{item:!0,container:!0,style:{marginTop:"2em"}},C(h.a,{item:!0},C("img",{src:"/assets/phone.svg",alt:"phone",style:{marginRight:"0.5em"}})),C(h.a,{item:!0},C(p.a,{variant:"body1",style:{color:n.palette.common.blue,fontSize:"1rem"}},"+46777777777"))),C(h.a,{item:!0,container:!0,style:{marginBottom:"2em"}},C(h.a,{item:!0},C("img",{src:"/assets/email.svg",alt:"envelop",style:{marginRight:"0.5em",verticalAlign:"bottom"}})),C(h.a,{item:!0},C(p.a,{variant:"body1",style:{color:n.palette.common.blue,fontSize:"1rem"}},C("a",{href:"mailto:shahrooz.sabet@gmail.com",style:{textDecoration:"none",color:"inherit"}},"shahrooz.sabet@gmail.com")))),C(h.a,{item:!0,container:!0,direction:"column",style:{width:"20em"}},C(h.a,{item:!0,style:{marginBottom:"0.5em"}},C(b.a,{label:"Name",id:"name",fullWidth:!0,value:R,onChange:function(e){return N(e.target.value)}})),C(h.a,{item:!0,style:{marginBottom:"0.5em"}},C(b.a,{label:"Email",error:0!==x.length,helperText:x,id:"email",fullWidth:!0,value:P,onChange:Y})),C(h.a,{item:!0,style:{marginBottom:"0.5em"}},C(b.a,{label:"Phone",id:"phone",fullWidth:!0,value:I,onChange:function(e){return _(e.target.value)}}))),C(h.a,{item:!0,style:{width:"20em"}},C(b.a,{InputProps:{disableUnderline:!0},value:F,className:t.message,multiline:!0,placeholder:"Tell us more about your project.",fullWidth:!0,minRows:10,maxRows:10,id:"message",onChange:function(e){return H(e.target.value)}})),C(h.a,{item:!0,container:!0,justifyContent:"center",style:{marginTop:"2em"}},C(v.a,{disabled:0===R.length||0===F.length||0===I.length||0===P.length||0!==x.length,variant:"contained",className:t.sendButton,onClick:function(){return q(!0)}},Z))))),C(y.a,{style:{zIndex:1302},open:A,fullScreen:l,onClose:function(){return q(!1)},PaperProps:{style:{paddingTop:c?"1em":"5em",paddingBottom:c?"1em":"5em",paddingLeft:c?0:l?"5em":a?"15em":"25em",paddingRight:c?0:l?"5em":a?"15em":"25em"}}},C(w.a,null,C(h.a,{container:!0,direction:"column"},C(h.a,{item:!0},C(p.a,{align:"center",variant:"h4",gutterBottom:!0},"Confirm Message")),C(h.a,{item:!0,style:{marginBottom:"0.5em"}},C(b.a,{label:"Name",id:"name",fullWidth:!0,value:R,onChange:function(e){return N(e.target.value)}})),C(h.a,{item:!0,style:{marginBottom:"0.5em"}},C(b.a,{label:"Email",error:0!==x.length,helperText:x,id:"email",fullWidth:!0,value:P,onChange:Y})),C(h.a,{item:!0,style:{marginBottom:"0.5em"}},C(b.a,{label:"Phone",id:"phone",fullWidth:!0,value:I,onChange:function(e){return _(e.target.value)}})),C(h.a,{item:!0,style:{width:l?"100%":"20em"}},C(b.a,{InputProps:{disableUnderline:!0},value:F,className:t.message,multiline:!0,fullWidth:!0,minRows:10,maxRows:10,id:"message",onChange:function(e){return H(e.target.value)}}))),C(h.a,{item:!0,container:!0,direction:l?"column":"row",style:{marginTop:"2em"},alignItems:"center"},C(h.a,{item:!0},C(v.a,{style:{fontWeight:300},color:"primary",onClick:function(){return q(!1)}},"Cancel")),C(h.a,{item:!0},C(v.a,{disabled:0===R.length||0===F.length||0===I.length||0===P.length||0!==x.length,variant:"contained",className:t.sendButton,onClick:function(){J(!0),i.a.event({category:"Message",action:"Sent Message"}),u.a.get("https://us-central1-shahroozdevelopment.cloudfunctions.net/sendMail",{params:{name:R,email:P,phone:I,message:F}}).then((function(e){q(!1),N(""),T(""),_(""),H(""),X({open:!0,message:"Message sent successfully.",backgroundColor:"#4BB543"})})).catch((function(e){X({open:!0,message:"Something went wrong, please try again.",backgroundColor:"#FF3232"})})).finally(J(!1))}},V?C(O.a,{size:30}):Z))))),C(j.a,{open:G.open,message:G.message,ContentProps:{style:{backgroundColor:G.backgroundColor}},anchorOrigin:{vertical:"top",horizontal:"center"},onClose:function(){return X(B(B({},G),{},{open:!1}))},autoHideDuration:4e3}),C(h.a,{item:!0,container:!0,direction:a?"column":"row",className:t.background,alignItems:"center",justifyContent:a?"center":void 0,lg:8,xl:9},C(h.a,{item:!0,style:{marginLeft:a?0:"3em",textAlign:a?"center":"inherit"}},C(h.a,{container:!0,direction:"column"},C(h.a,{item:!0},C(p.a,{align:a?"center":void 0,variant:"h1"},"Simple Software.",C("br",null),"Revolutionary Results."),C(p.a,{align:a?"center":void 0,variant:"subtitle2",style:{fontSize:"1.5rem"}},"Take advantage of the 21st Century."),C(h.a,{container:!0,justifyContent:a?"center":void 0,item:!0},C(v.a,{component:m.a,href:"/revolution",variant:"outlined",className:t.learnButton,onClick:function(){return e.setValue(2)}},C("span",{style:{marginRight:5}},"Learn More"),C(k.a,{width:10,height:10,fill:n.palette.common.blue})))))),C(h.a,{item:!0},C(v.a,{component:m.a,href:"/estimate",variant:"contained",className:t.estimateButton,onClick:function(){e.setValue(!1),i.a.event({category:"Estimate",action:"Contact Page Pressed"})}},"Free Estimate"))))}},"Gjj/":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("q1tI"),o=n.n(a).a.createElement;function r(e){return o("svg",{className:e.class,xmlns:"http://www.w3.org/2000/svg",width:e.width,height:e.height,fill:e.fill,viewBox:"0 0 18 18"},o("path",{d:"M9 3L7.94 4.06l4.19 4.19H3v1.5h9.13l-4.19 4.19L9 15l6-6z"}))}},OrM8:function(e,t,n){"use strict";var a=n("rePB"),o=n("wx14"),r=n("Ff2n"),i=n("q1tI"),l=n.n(i),s=n("iuhU"),c=n("nOHt"),u=n("YFqc"),m=n.n(u),d=n("NqtD"),g=n("H2TA"),f=n("G7As"),h=n("bfFb"),p=n("ofer"),b=i.forwardRef((function(e,t){var n=e.classes,a=e.className,l=e.color,c=void 0===l?"primary":l,u=e.component,m=void 0===u?"a":u,g=e.onBlur,b=e.onFocus,v=e.TypographyClasses,y=e.underline,w=void 0===y?"hover":y,O=e.variant,j=void 0===O?"inherit":O,k=Object(r.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),C=Object(f.a)(),R=C.isFocusVisible,B=C.onBlurVisible,S=C.ref,N=i.useState(!1),E=N[0],P=N[1],T=Object(h.a)(t,S);return i.createElement(p.a,Object(o.a)({className:Object(s.a)(n.root,n["underline".concat(Object(d.a)(w))],a,E&&n.focusVisible,"button"===m&&n.button),classes:v,color:c,component:m,onBlur:function(e){E&&(B(),P(!1)),g&&g(e)},onFocus:function(e){R(e)&&P(!0),b&&b(e)},ref:T,variant:j},k))})),v=Object(g.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(b),y=["as","href"],w=["href","activeClassName","className","innerRef","naked"],O=l.a.createElement,j=l.a.forwardRef((function(e,t){var n=e.as,a=e.href,i=Object(r.a)(e,y);return O(m.a,{href:a,as:n},O("a",Object(o.a)({ref:t},i)))}));function k(e){var t=e.href,n=e.activeClassName,i=void 0===n?"active":n,l=e.className,u=e.innerRef,m=e.naked,d=Object(r.a)(e,w),g=Object(c.useRouter)(),f="string"===typeof t?t:t.pathname,h=Object(s.a)(l,Object(a.a)({},i,g.pathname===f&&i));return m?O(j,Object(o.a)({className:h,ref:u,href:t},d)):O(v,Object(o.a)({underline:"none",component:j,className:h,ref:u,href:t},d))}t.a=l.a.forwardRef((function(e,t){return O(k,Object(o.a)({},e,{innerRef:t}))}))},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var a=n("zoAU"),o=n("7KCV");t.__esModule=!0,t.default=void 0;var r,i=o(n("q1tI")),l=n("elyg"),s=n("nOHt"),c=new Map,u=window.IntersectionObserver,m={};var d=function(e,t){var n=r||(u?r=new u((function(e){e.forEach((function(e){if(c.has(e.target)){var t=c.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),c.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),c.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}c.delete(e)}):function(){}};function g(e,t,n,a){(0,l.isLocalURL)(t)&&(e.prefetch(t,n,a).catch((function(e){0})),m[t+"%"+n]=!0)}var f=function(e){var t=!1!==e.prefetch,n=i.default.useState(),o=a(n,2),r=o[0],c=o[1],f=(0,s.useRouter)(),h=f&&f.pathname||"/",p=i.default.useMemo((function(){var t=(0,l.resolveHref)(h,e.href,!0),n=a(t,2),o=n[0],r=n[1];return{href:o,as:e.as?(0,l.resolveHref)(h,e.as):r||o}}),[h,e.href,e.as]),b=p.href,v=p.as;i.default.useEffect((function(){if(t&&u&&r&&r.tagName&&(0,l.isLocalURL)(b)&&!m[b+"%"+v])return d(r,(function(){g(f,b,v)}))}),[t,r,b,v,f]);var y=e.children,w=e.replace,O=e.shallow,j=e.scroll;"string"===typeof y&&(y=i.default.createElement("a",null,y));var k=i.Children.only(y),C={ref:function(e){e&&c(e),k&&"object"===typeof k&&k.ref&&("function"===typeof k.ref?k.ref(e):"object"===typeof k.ref&&(k.ref.current=e))},onClick:function(e){k.props&&"function"===typeof k.props.onClick&&k.props.onClick(e),e.defaultPrevented||function(e,t,n,a,o,r,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,l.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=a.indexOf("#")<0),t[o?"replace":"push"](n,a,{shallow:r}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,f,b,v,w,O,j)}};return t&&(C.onMouseEnter=function(e){(0,l.isLocalURL)(b)&&(k.props&&"function"===typeof k.props.onMouseEnter&&k.props.onMouseEnter(e),g(f,b,v,{priority:!0}))}),(e.passHref||"a"===k.type&&!("href"in k.props))&&(C.href=(0,l.addBasePath)((0,l.addLocale)(v,f&&f.locale,f&&f.defaultLocale))),i.default.cloneElement(k,C)};t.default=f},lqnA:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return n("ALdH")}])}},[["lqnA",0,1,2,3,8,9,11]]]);