(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9931],{1153:function(e,t,n){"use strict";n.d(t,{Y:function(){return m},q:function(){return o}});var o,r=n(92809),i=n(91164),a=n(94184),c=n.n(a),s=n(87899),l=n(85893),u=["children","onClick","primary","size","disabled","className","linkButton"];function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}!function(e){e[e.Large=0]="Large",e[e.Medium=1]="Medium"}(o||(o={}));var m=function(e){var t=e.children,n=e.onClick,r=e.primary,a=e.size,d=e.disabled,m=e.className,p=e.linkButton,x=(0,i.Z)(e,u),b=(0,s.w)()?c()("px-5 font-noto transition transition-colors-opacity text-black border border-black",d&&"pointer-events-none opacity-50",r?"bg-guppie hover:bg-guppie-hover focus:bg-guppie-hover":"bg-grey hover:bg-gray-100",a===o.Large&&"py-2.75 text-lg font-bold rounded-full",a===o.Medium&&"py-2.5 text-sm rounded",m):c()("px-5 py-3 text-lg transition transition-colors-opacity",d&&"pointer-events-none opacity-25",r?"text-white rounded bg-cyan hover:bg-blue-deep focus:bg-blue-deep":"text-cyan rounded border border-cyan bg-opacity-0 bg-cyan hover:bg-opacity-20",m);return null!==p&&void 0!==p&&p.href?(0,l.jsx)("a",{className:b,href:p.href,onClick:function(){return(null===p||void 0===p?void 0:p.onClick)&&p.onClick()},children:t}):(0,l.jsx)("button",f(f({className:b,onClick:n,disabled:d},x),{},{children:t}))}},21610:function(e,t,n){"use strict";n.d(t,{o:function(){return p}});var o=n(92809),r=n(91164),i=n(2825),a=n(67814),c=n(94184),s=n.n(c),l=n(1153),u=n(85893),d=["icon","children","className","loading","iconPosition"];function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=function(e){var t=e.icon,n=e.children,o=e.className,c=e.loading,f=e.iconPosition,p=void 0===f?"before":f,x=(0,r.Z)(e,d);return(0,u.jsxs)(l.Y,m(m({},x),{},{className:s()("block w-full",o),disabled:x.disabled||c,children:[t&&"before"===p&&(0,u.jsx)("span",{className:s()("transition transition-opacity",c&&"opacity-0","mr-1"),children:t}),(0,u.jsxs)("span",{className:"relative",children:[(0,u.jsx)(a.G,{icon:i.LM3,spin:!0,className:s()("absolute mr-2 right-full top-1/2 -mt-2 transition transition-opacity",!c&&"opacity-0")}),n]}),t&&"after"===p&&t]}))}},7396:function(e,t,n){"use strict";n.d(t,{J:function(){return s}});var o=n(11163),r=n(2031),i=n(23828),a=n(98180),c=n(85893),s=function(e){var t=e.className,n=(0,o.useRouter)().locale,s=(0,r.$)().t,l=(0,a.Q)().imageCount,u=(0,i.D)();return(0,c.jsx)("div",{className:t,children:l&&!u?s("products-counter.headline",{counter:Intl.NumberFormat(n).format(l)}):s("404Page.headline")})}},22154:function(e,t,n){"use strict";n.d(t,{Y:function(){return a}});var o=n(83109),r=n(67294),i={layoutData:{currency:o.CurrencyCode.GBP,countryCode:null,contactNumber:"",imageCount:0}},a=(0,r.createContext)(i)},57725:function(e,t,n){"use strict";n.d(t,{x:function(){return r}});var o=n(67294),r=function(){var e=(0,o.useState)(!1),t=e[0],n=e[1],r={type:"button","aria-haspopup":"listbox","aria-expanded":t,onClick:function(e){e.stopPropagation(),n(!t)}},i={ref:(0,o.useRef)(null),role:"listbox",tabIndex:-1};(0,o.useEffect)((function(){t&&i.ref.current&&i.ref.current.focus()}),[t]);var a=function(){return n(!1)},c=function(){return a()};return(0,o.useEffect)((function(){return window.addEventListener("click",c),function(){window.removeEventListener("click",c)}}),[]),{isOpen:t,setIsOpen:n,close:a,dropdownButtonProps:r,dropdownItemProps:{tabIndex:0},dropdownMenuProps:i}}},30368:function(e,t,n){"use strict";n.d(t,{u:function(){return r}});var o=n(11163),r=function(){return(0,o.useRouter)().asPath.includes("/enterprise")}},98180:function(e,t,n){"use strict";n.d(t,{Q:function(){return i}});var o=n(67294),r=n(22154),i=function(){return(0,o.useContext)(r.Y).layoutData}},12208:function(e,t,n){"use strict";n.d(t,{t:function(){return h},l:function(){return y}});var o,r=n(52209),i=n(61565),a=n(26839),c=n(67814),s=n(67294),l=n(12102),u=n(2031),d=n(99955),f=n(23828),m=n(99606),p=n(63142),x="yCookie",b=n(85893),y={container:"cookies-banner",close:"cookies-button-close"},h=function(){var e=(0,f.D)(),t=(0,l.Z)(),n=(0,i.Z)(t,2),h=n[0],g=n[1],v=(0,s.useState)(!0),j=v[0],w=v[1],k=(0,s.useState)("1"===h.yCookie),N=k[0],C=k[1],O=(0,s.useRef)(N).current,P=(0,s.useState)(!1),Z=P[0],A=P[1],S=function(e,t){(0,p.L9)({action:t,event:p.ju.Click,category:p.WD.CookieBannerInteractions,label:e})},W=(0,u.$)().t;return(0,s.useEffect)((function(){N||(g(x,"1",{path:"/",secure:!0}),C(!0)),w(!1)})),j||Z||O||e?null:(0,b.jsxs)("div",{id:y.container,className:"flex items-center justify-between w-full px-3 text-xs bg-white md:justify-center md:text-sm md:text-center py-2.5 text-grey-black",children:[(0,b.jsx)("div",{children:(0,b.jsx)(d.c,{i18nKey:"cookie-banner.disclaimer",components:[(0,b.jsx)("a",{href:(0,m.W)(m.A.CookiePolicy),className:"highlighted-link",onClick:function(){return S("use of cookies",p.aU.CookieBannerLinkClick)}})]})}),(0,b.jsx)("button",{id:y.close,className:"ml-3",onClick:function(){S(y.close,p.aU.CookieBannerClose),A(!0)},"aria-label":W(o||(o=(0,r.Z)(["language.close"]))),children:(0,b.jsx)(c.G,{icon:a.NB,size:"lg"})})]})}},65544:function(e,t,n){"use strict";n.d(t,{$:function(){return Fe}});var o,r,i,a,c,s,l,u,d,f,m,p,x,b,y,h,g,v,j,w,k,N,C,O=n(94184),P=n.n(O),Z=n(7396),A=n(23353),S=n(30368),W=n(87899),L=n(21241),_=n(61565),I=n(2031),D=n(84541),E=n(63142),B=n(59184),F=n(58268),U=n(99606),Y=n(85893),G=function(){var e=(0,I.$)().t,t=(0,D.b)();return(0,Y.jsx)("nav",{className:"-my-1 text-sm",children:(0,Y.jsx)("ul",{className:"flex flex-wrap",children:[["footer.terms-conditions",(0,U.W)(U.A.Terms)],["footer.copyright-complaints",(0,U.W)(U.A.CopyrightComplaints)],["footer.sitemap",(0,U.W)(U.A.Sitemap)]].map((function(n,o){var r=(0,_.Z)(n,2),i=r[0],a=r[1];return(0,Y.jsxs)("li",{className:"flex items-center mb-1",children:[0===o?null:(0,Y.jsx)("span",{className:"px-2",children:"~"}),(0,Y.jsx)("a",{className:"flex py-1 hover:underline",href:a,onClick:function(){return function(e,t){(0,E.L9)({event:E.ju.Click,action:E.aU.InternalClick,category:E.WD.FooterInteractions,label:(0,F.ZY)(e,t)})}(a,t)},children:e(i)})]},i)}))})})},M=function(){var e=(0,I.$)().t,t=(0,D.b)();return(0,Y.jsx)("p",{className:"pt-4 text-xs text-grey-deep",children:e("footer.copyright-text",{date:(0,B.Ux)(t)})})},z=function(){return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(G,{}),(0,Y.jsx)(M,{})]})},$=n(92565),T=n(67814),H=n(67294),Q=n(92809),R=n(52209),V=n(17124),q=n(98180);!function(e){e.Buying="buying",e.Selling="selling",e.Company="company",e.Contact="contact"}(o||(o={}));var J=function(){var e,t=(0,I.$)().t,n=(0,q.Q)().contactNumber,O=(0,W.w)(),P=(0,L.m)().distributorTerritory,Z=(0,A.u)().collectionName,S=P||Z?[]:[[[t(r||(r=(0,R.Z)(["footer.premium-stock-video"]))),(0,U.W)(U.A.PremiumStockVideo)],["en","de"],void 0]];return e={},(0,Q.Z)(e,o.Buying,{title:t(i||(i=(0,R.Z)(["footer.buying"]))),links:[[[t(a||(a=(0,R.Z)(["footer.license-pricing"]))),(0,U.W)(U.A.LicensesAndPricing)]],[[t(c||(c=(0,R.Z)(["footer.browse"]))),(0,U.W)(U.A.Browse)]],[[t(s||(s=(0,R.Z)(["footer.enterprise"]))),(0,U.W)(U.A.Enterprise)]],[[t(l||(l=(0,R.Z)(["footer.picks"]))),(0,U.W)(U.A.FreshPicks)]]].concat(S,[[[t(u||(u=(0,R.Z)(["footer.feed"]))),(0,U.W)(U.A.NewsFeed)],["en","de"]],[[t(d||(d=(0,R.Z)(["footer.customer-help"]))),(0,U.W)(U.A.CustomerHelp)],["en","de"]],[[t(f||(f=(0,R.Z)(["footer.credit-account"]))),(0,U.W)(U.A.CreditAccountSignup)],void 0,"nofollow"]])}),(0,Q.Z)(e,o.Selling,{title:t(m||(m=(0,R.Z)(["footer.selling"]))),links:[[[t(p||(p=(0,R.Z)(["footer.become-contributor"]))),(0,U.W)(U.A.BecomeAContributor)]],[[t(x||(x=(0,R.Z)(["footer.contributor-home"]))),(0,U.W)(U.A.ContributorHome)],["en","de"]],[[t(b||(b=(0,R.Z)(["footer.stockimo"]))),(0,U.W)(U.A.Stockimo)],["en"]],[[t(y||(y=(0,R.Z)(["footer.contributor-contract"]))),(0,U.W)(U.A.ContributorContract)],["en","de"]]]}),(0,Q.Z)(e,o.Company,{title:t(h||(h=(0,R.Z)(["footer.company"]))),links:[[[t(g||(g=(0,R.Z)(["footer.blog"]))),(0,U.W)(U.A.Blog)],["en"]],[[t(v||(v=(0,R.Z)(["footer.about"]))),(0,U.W)(U.A.AboutUs)]],[[t(j||(j=(0,R.Z)(["footer.careers"]))),(0,U.W)(U.A.Careers)],["en"]],[[t(w||(w=(0,R.Z)(["footer.become-affiliate"]))),(0,U.W)(U.A.BecomeAffiliate)],["en","de"]]]}),(0,Q.Z)(e,o.Contact,{title:t(k||(k=(0,R.Z)(["footer.get-in-touch"]))),links:[[[t(N||(N=(0,R.Z)(["footer.contact-us"]))),(0,U.W)(U.A.ContactUs)]]],subsection:{title:t(C||(C=(0,R.Z)(["footer.customers"]))),links:O?[[[V.hk,"mailto:".concat(V.hk)]]]:[[[n,"tel:".concat(n)]],[[V.hk,"mailto:".concat(V.hk)]]]}}),e},X=function(e){var t=(0,_.Z)(e.link,2),n=t[0],o=t[1],r=e.rel,i=e.locale;return(0,Y.jsx)("li",{className:P()("mb-2 text-sm",{"h-5":""===n&&""===o}),children:(0,Y.jsx)("a",{className:"hover:underline",href:o,rel:r,onClick:function(){return function(e,t){(0,E.L9)({event:E.ju.Click,action:e.includes("tel")?E.aU.PhoneNumberClick:E.aU.InternalClick,category:E.WD.FooterInteractions,label:e.includes("tel")?e:(0,F.ZY)(e,t)})}(o,i)},children:n})})},K=function e(t){var n=t.section,o=n.title,r=n.links,i=n.subsection,a=t.isSubsection,c=void 0!==a&&a,s=(0,H.useState)(!1),l=s[0],u=s[1],d=(0,D.b)(),f=(0,W.w)();return(0,Y.jsxs)("div",{className:P()(c||l?"overflow-auto":"overflow-hidden max-h-6","xs:overflow-auto xs:max-h-full"),children:[(0,Y.jsxs)("div",{className:"flex flex-row items-center cursor-pointer select-none xs:cursor-auto",onClick:function(){return u(!l)},children:[(0,Y.jsx)("h2",{className:P()("xs:font-normal flex-auto",f?"text-white":"xs:text-grey-deep",c?"my-2 text-sm ".concat(f?"text-white":"text-grey-deep"," font-normal"):"font-bold text-white text-base xs:text-lg"),children:o}),!c&&(0,Y.jsx)(T.G,{icon:$.ptq,className:P()("transition transform xs:hidden",l&&"rotate-180")})]}),(0,Y.jsx)("ul",{className:"mt-4",children:Boolean(r)&&"boolean"!==typeof r&&r.map((function(e){var t=(0,_.Z)(e,3),n=t[0],o=t[1],r=t[2];return(!o||o.includes(d))&&(0,Y.jsx)(X,{link:n,rel:r,locale:d},n[1])}))}),(0,Y.jsx)("div",{className:"mt-4",children:i&&(0,Y.jsx)(e,{section:i,isSubsection:!0})})]})},ee=function(e){var t=e.category,n=e.className;return(0,Y.jsx)("div",{className:P()("py-3.5 border-b border-navy-tint xs:border-none",n),children:(0,Y.jsx)(K,{section:J()[t]})})},te=function(){return(0,Y.jsxs)("nav",{className:"flex flex-col w-full py-8 md:flex-row",children:[(0,Y.jsxs)("div",{className:"flex flex-col w-full xs:flex-row md:w-2/3 lg:w-1/2",children:[(0,Y.jsx)(ee,{category:o.Buying,className:"w-full pb-2 xs:w-1/2 xs:py-0"}),(0,Y.jsx)(ee,{category:o.Selling,className:"w-full py-2 xs:w-1/2 xs:py-0"})]}),(0,Y.jsxs)("div",{className:"flex flex-col w-full xs:flex-row md:flex-col lg:flex-row md:w-1/3 lg:w-1/2 xs:pt-6 md:pt-0",children:[(0,Y.jsx)(ee,{category:o.Company,className:"w-full py-2 xs:w-1/2 md:w-full xs:py-0"}),(0,Y.jsx)(ee,{category:o.Contact,className:"w-full pt-2 xs:w-1/2 md:w-full xs:py-0 md:pt-4 lg:pt-0"})]})]})},ne=n(26203),oe=n(41664),re=n(11163),ie=n(22154),ae=n(57725),ce=n(86799),se=["en","de"],le={en:"English",de:"Deutsch",es:"Espa\xf1ol",fr:"Fran\xe7ais",it:"Italiano"},ue={"/stock-videos":["es","fr","it"],"/video-packs":["es","fr","it"]};function de(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function fe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?de(Object(n),!0).forEach((function(t){(0,Q.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):de(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var me,pe,xe=function(){var e,t=(0,re.useRouter)(),n=(0,D.b)(),o=(0,W.w)(),r=(0,H.useContext)(ie.Y).localisedPaths,i=(0,ae.x)(),a=i.isOpen,c=i.dropdownButtonProps,s=(null===(e=(0,ce.a)())||void 0===e?void 0:e.isContributor)||!1,l=r?r[n]:t.asPath,u=(0,F.Qj)(l),d=Boolean(t.pathname.match(/\/video\//));return(0,Y.jsxs)("div",{className:"relative",children:[(0,Y.jsxs)("button",fe(fe({},c),{},{className:"flex flex-row items-center w-full px-4 py-2 text-left border rounded appearance-none border-grey-deep focus:outline-none active:shadow-inner-md",children:[(0,Y.jsxs)("div",{className:"flex-1 label",children:[(0,Y.jsx)(T.G,{icon:ne.g4A,color:"white",className:"mr-2 text-base"}),(0,Y.jsx)("span",{className:"text-sm",children:le[n]})]}),(0,Y.jsx)(T.G,{icon:ne.onQ,className:"text-lg"})]})),(0,Y.jsx)("ul",{"aria-hidden":!a,className:P()("absolute w-full mb-1 border rounded shadow-md border-grey-deep bottom-full",o?"bg-black":"bg-navy",!a&&"hidden"),children:Object.keys(le).filter((function(e){var t;return e!==n&&!(null!==(t=ue[u])&&void 0!==t&&t.includes(e))&&(!s||se.includes(e))})).map((function(e){return(0,Y.jsx)("li",{children:(0,Y.jsx)(oe.default,{href:r?r[e]:t.asPath,locale:e,children:(0,Y.jsx)("a",{rel:d?"nofollow":void 0,hrefLang:e,className:P()("block px-4 py-2",o&&"hover:bg-grey-dark"),onClick:function(){return n=e,void(0,E.L9)({event:E.ju.Click,action:E.aU.LanguageSelectorDropdownClick,category:E.WD.FooterInteractions,label:(0,F.ZY)(r?r[n]:t.asPath,n)});var n},children:le[e]})})},e)}))})]})};!function(e){e.Mastercard="mastercard",e.Visa="visa",e.Amex="amex",e.Paypal="paypal",e.ApplePay="apple-pay",e.GooglePay="google-pay"}(me||(me={}));var be,ye,he=(0,F.I1)("footer/amex.svg"),ge=(0,F.I1)("footer/apple-pay.svg"),ve=(0,F.I1)("footer/google-pay.svg"),je=(0,F.I1)("footer/mastercard.svg"),we=(0,F.I1)("footer/paypal.svg"),ke=(0,F.I1)("footer/visa.svg"),Ne=(pe={},(0,Q.Z)(pe,me.Mastercard,{icon:je,alt:"Mastercard"}),(0,Q.Z)(pe,me.Visa,{icon:ke,alt:"Visa"}),(0,Q.Z)(pe,me.Paypal,{icon:we,alt:"Paypal"}),(0,Q.Z)(pe,me.Amex,{icon:he,alt:"American Express"}),(0,Q.Z)(pe,me.ApplePay,{icon:ge,alt:"Apple Pay"}),(0,Q.Z)(pe,me.GooglePay,{icon:ve,alt:"Google Pay"}),pe),Ce=function(e){var t=e.type,n=e.className;return(0,Y.jsx)("img",{className:P()("h-8 bg-white rounded mr-2 mt-2 last:mr-0",n),src:Ne[t].icon,alt:Ne[t].alt,width:48,height:32,loading:"lazy"})},Oe=n(54470),Pe=n(78279),Ze=n(50263),Ae=n(56602),Se=n(51719),We=n(28138),Le=n(81264),_e=n.n(Le);!function(e){e.Facebook="facebook",e.Youtube="youtube",e.Instagram="instagram",e.LinkedIn="linkedin",e.Pinterest="pinterest",e.Twitter="twitter"}(be||(be={}));var Ie=(ye={},(0,Q.Z)(ye,be.Facebook,{icon:Oe.AY,className:_e()["social-facebook"],url:"https://www.facebook.com/Alamy/"}),(0,Q.Z)(ye,be.Youtube,{icon:We.op,className:_e()["social-youtube"],url:"https://www.youtube.com/user/Alamylimited"}),(0,Q.Z)(ye,be.Instagram,{icon:Pe.Zz,className:_e()["social-instagram"],url:"https://www.instagram.com/alamyltd/"}),(0,Q.Z)(ye,be.LinkedIn,{icon:Ze.hw,className:_e()["social-linkedin"],url:"https://www.linkedin.com/company/alamy"}),(0,Q.Z)(ye,be.Pinterest,{icon:Ae.Xs,className:_e()["social-pinterest"],url:"https://www.pinterest.com/alamy/"}),(0,Q.Z)(ye,be.Twitter,{icon:Se.md,className:_e()["social-twitter"],url:"https://twitter.com/alamy"}),ye),De=function(e){var t=e.type,n=e.className,o=Ie[t],r=o.url,i=o.className,a=o.icon,c=(0,I.$)().t,s=(0,W.w)();return(0,Y.jsx)("a",{href:r,title:c("footer.social-".concat(t)),target:"_blank",rel:"noreferrer noopener",className:P()("flex items-center justify-center w-11 h-11 rounded bg-opacity-70 transition-colors duration-300 mr-2 mt-2",s?"bg-black border border-gray-100 border-opacity-30":"bg-navy-tint",i,n),onClick:function(){return e=r,void(0,E.L9)({event:E.ju.Click,action:E.aU.ExternalClick,category:E.WD.FooterInteractions,label:e});var e},children:(0,Y.jsx)(T.G,{icon:a,color:"white",className:"text-2xl"})})},Ee=function(){return(0,Y.jsx)("div",{className:"flex flex-row flex-wrap mb-9 md:mb-0",children:Object.values(be).map((function(e){return(0,Y.jsx)(De,{type:e},e)}))})},Be=function(){return(0,Y.jsx)("div",{className:"flex flex-row flex-wrap md:justify-end",children:Object.values(me).map((function(e){return(0,Y.jsx)(Ce,{type:e},e)}))})},Fe=function(){var e=(0,W.w)(),t=(0,L.m)().distributorTerritory,n=(0,A.u)().collectionName,o=(0,S.u)();return(0,Y.jsxs)("footer",{className:P()("text-white divide-y divide-navy-tint",o&&"mb-14 md:mb-0"),"data-testid":"footer",children:[(0,Y.jsx)("div",{className:e?"bg-guppie":"bg-navy-deep",children:(0,Y.jsx)("div",{className:"container m-auto max-w-screen-lg",children:(0,Y.jsx)("div",{className:"p-6",children:(0,Y.jsx)(Z.J,{className:P()("text-lg font-bold text-center md:text-2xl",{"text-black font-noto":e})})})})}),(0,Y.jsx)("div",{className:P()("text-sm",e?"bg-black font-noto":"bg-navy"),children:(0,Y.jsxs)("div",{className:"container mx-0 max-w-screen-lg xs:m-auto sm:px-5",children:[(0,Y.jsx)(te,{}),!(t||n)&&(0,Y.jsx)("div",{className:"mb-8 grid md:grid-cols-3 lg:grid-cols-4",children:(0,Y.jsx)("div",{className:"md:col-start-3 lg:col-start-4",children:(0,Y.jsx)(xe,{})})}),(0,Y.jsxs)("div",{className:"pt-8 pb-8 border-t border-navy-tint",children:[(0,Y.jsxs)("div",{className:"grid md:grid-cols-2 mb-9",children:[(0,Y.jsx)(Ee,{}),(0,Y.jsx)(Be,{})]}),(0,Y.jsx)(z,{})]})]})})]})}},98416:function(e,t,n){"use strict";var o;n.d(t,{m:function(){return o}}),function(e){e.Account="account",e.Lightboxes="lightboxes",e.Enterprise="enterprise"}(o||(o={}))},63523:function(e,t,n){"use strict";n.d(t,{v:function(){return l}});var o=n(9008),r=n(87899),i=n(59184),a=n(58268),c=n(48022),s=n(85893),l=function(){var e=(0,r.w)();return(0,s.jsxs)(o.default,{children:[(0,s.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1,maximum-scale=5"}),c.lm.map((function(t){var n,o=t.rel,r=t.path,i=t.size,c=t.type;return(0,s.jsx)("link",{rel:o,type:c,sizes:i,href:(n=r,e?(0,a.NA)(n):"https://static.alamy.com/images/icons/".concat(n))},"".concat(o).concat(i||""))})),(0,s.jsx)("link",{rel:"manifest",href:(0,a.vA)("/site.webmanifest")}),(0,s.jsx)("meta",{name:"apple-mobile-web-app-title",content:"Alamy images"}),(0,s.jsx)("meta",{name:"application-name",content:"Alamy images"}),(0,s.jsx)("meta",{name:"msapplication-TileColor",content:"#d6d6da"}),(0,s.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,s.jsx)("meta",{property:"fb:admins",content:"150454471633963"}),(0,s.jsx)("meta",{name:"author",content:c.pB}),(0,s.jsx)("meta",{name:"copyright",content:"\xa9 ".concat((0,i.H8)()," ").concat(c.pB)})]})}},81264:function(e){e.exports={"social-facebook":"SocialLink_social-facebook__3E_Fu","social-twitter":"SocialLink_social-twitter__30HmL","social-linkedin":"SocialLink_social-linkedin__h-dd-","social-instagram":"SocialLink_social-instagram__UZ4p4","social-youtube":"SocialLink_social-youtube__75WH_","social-pinterest":"SocialLink_social-pinterest__1C8gA"}}}]);