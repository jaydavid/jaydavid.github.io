(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{14:function(t,e,n){t.exports={hover:"BarGraph_hover__1qRKN",primary:"BarGraph_primary__3ngI0",secondary:"BarGraph_secondary__3FPSO","series-filled":"BarGraph_series-filled__2kOrf",animated:"BarGraph_animated__cZEaA",entering:"BarGraph_entering__35wIn","drop-in":"BarGraph_drop-in__23NnK","fade-out":"BarGraph_fade-out__3h_Ww"}},18:function(t,e,n){t.exports={hover:"ArcDiagram_hover__109Vy",primary:"ArcDiagram_primary__163Yg",secondary:"ArcDiagram_secondary__2ll6v",animated:"ArcDiagram_animated__DxH_3",drop:"ArcDiagram_drop__12STw","drop-in":"ArcDiagram_drop-in__3hrXj"}},220:function(t,e,n){"use strict";n.r(e);var i=n(1),a=n(0),r=n.n(a),o=n(20),c=n.n(o),s=n(8),d=n(241),u=n(242),l=n(221),h=n(31),f=n(5),m=n(83),g=n(84),j=function(){function t(e){var n=this;Object(m.a)(this,t),this.spec=e,this.classificationSet=void 0,this.enemyDistributions=void 0,this.contentOverTime=void 0,this.createContentOverTime=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,e={},i=t||n.classificationSet;if(!i.children||0===i.children.length)return e;e[i.id]={categories:i.children.map((function(t){return{name:t.name,id:t.id}})),dateRange:n.generateDateRange(n.spec.contentOverTimeDaysAgo),entries:{}};for(var a=e[i.id].categories.map((function(){return b(n.spec.contentOverTimeDaysAgo)})),r=function(t){var n=e[i.id].dateRange[t],r={};e[i.id].categories.map((function(e,n){return r[e.id]=a[n][t]})),e[i.id].entries[+n]=r},o=0;o<e[i.id].dateRange.length;o++)r(o);var c,s=Object(f.a)(i.children);try{for(s.s();!(c=s.n()).done;){var d=c.value;e=Object(h.a)(Object(h.a)({},e),n.createContentOverTime(d))}}catch(u){s.e(u)}finally{s.f()}return e},this.randomInRange=function(t){return Math.max(t[0],t[0]+Math.floor(Math.random()*t[1]-t[0]))},this.randomFrom=function(t){return t[Math.floor(Math.min(Math.random()*t.length,t.length-1))]},this.generateId=function(t){for(var e="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=n.length,a=0;a<t;a++)e+=n.charAt(Math.floor(Math.random()*i));return e},this.generateDateRange=function(t){var e=[],n=new Date;for(n.setDate((new Date).getDate()-t+1);n<=new Date;)e.push(new Date(n)),n.setDate(n.getDate()+1);return e},this.classificationSet=this.createClassification(),this.enemyDistributions=this.createEnemyDistributions(),this.contentOverTime=this.createContentOverTime()}return Object(g.a)(t,[{key:"createClassification",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e={id:this.generateId(12),name:this.generateId(this.spec.classificationNameLength),isRoot:0===t};if(t>=this.spec.classificationSetStructure.length)e.value=this.randomInRange(this.spec.classificationLeafValueRange);else for(var n=this.spec.classificationSetStructure[t],i=0;i<n;i++)(e.children||(e.children=[])).push(this.createClassification(t+1));return e}},{key:"createEnemyDistributions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n={},i=t||this.classificationSet,a=this.createEnemyDistribution(i,e);if(a&&(n[i.id]=a),i.children){var r,o=Object(f.a)(i.children);try{for(o.s();!(r=o.n()).done;){var c=r.value;n=Object(h.a)(Object(h.a)({},n),this.createEnemyDistributions(c,e+1))}}catch(s){o.e(s)}finally{o.f()}}return n}},{key:"createEnemyDistribution",value:function(t,e){if(t.children&&0!==t.children.length){for(var n={nodes:[],links:[]},i=t.children.map((function(t){return t.id})),a=this.randomInRange(this.spec.enemyNodeRange),r=0;r<a;r++)n.nodes.push({id:this.generateId(this.spec.itemIdLength),group:this.randomFrom(i)});for(var o=0;o<a;o++)for(var c=n.nodes[o],s=o;s<a;s++){var d=n.nodes[s];Math.random()<=(c.group===d.group?this.spec.enemyLinkProbabilityInternal:this.spec.enemyLinkProbabilityExternal/Math.max(1,10*e))&&n.links.push({source:c.id,target:d.id,weight:1})}return n}}}]),t}();function b(t){for(var e=[],n=0;n<t;++n)e[n]=.1+.1*Math.random();for(var i=0;i<5;++i)for(var a=1/(.1+Math.random()),r=2*Math.random()-.5,o=10/(.1+Math.random()),c=0;c<t;c++){var s=(c/t-r)*o;e[c]+=a*Math.exp(-s*s)}for(var d=0;d<t;++d)e[d]=Math.max(0,e[d]);return e}var p=n(44),O=n.n(p),v=n(6),x=function(t){var e=t.width,n=t.height,i=t.paddingOuter,a=t.paddingTop,r=t.paddingInner,o=t.round,c=t.tile,s=t.margin,d=void 0===s?{left:0,top:0,right:0,bottom:0}:s,u=Object(v.m)().size([e-(d.left+d.right),n-(d.top+d.bottom)]);return i&&u.paddingOuter(i),a&&u.paddingTop(a),r&&u.paddingInner(r),o&&u.round(o),u.tile(function(t){switch(t){case"slice":return v.p;case"dice":return v.o;case"slicedice":return v.q;case"binary":return v.n;default:return v.r}}(c)),u},y=Object(v.g)(v.j),_=function(t,e){if(0===t.depth)return"white";for(var n=t;n.depth>1;)n=n.parent;return y(e(n.data))},M=function(t){return"O-leaf-".concat(t)},w=function(t){return"#".concat(M(t))},k=function(t){return"O-clip-".concat(t)},S=function(t){return"#".concat(k(t))},D=function(t){return t.x1-t.x0},T=function(t){return t.y1-t.y0},L=function(t){var e;return((null===(e=t.children)||void 0===e?void 0:e.length)||0)>0},C=function(t){var e;return 0===((null===(e=t.children)||void 0===e?void 0:e.length)||0)},I=n(36),N=n.n(I),A=function(t){var e=t.height,n=t.width,r=t.data,o=t.toNumeric,c=void 0===o?function(t){return+(t.value||0)}:o,d=t.animated,u=void 0===d||d,l=t.canDrill,h=void 0===l||l,f=t.drillMethod,m=void 0===f?"incremental":f,g=t.onDrill,j=void 0===g?function(t){}:g,b=t.parentLabels,p=void 0===b||b,O=t.leafLabels,y=void 0===O||O,I=t.margin,A=void 0===I?{left:0,bottom:0,right:0,top:0}:I,B=Object(a.useMemo)((function(){return function(t,e){return Object(v.a)(t).sum(e).sort((function(t,e){return e.value-t.value}))}(r,c)}),[r,c]),P=Object(a.useMemo)((function(){return x(t)}),[t]),R=Object(a.useMemo)((function(){return P(B)}),[P,B]),E=Object(a.useState)(null),z=Object(s.a)(E,2),G=z[0],F=z[1],q=Object(a.useState)(),W=Object(s.a)(q,2),K=W[0],V=W[1],H=function(t){V(t),j((t||R).data.id)},J=function(){return K||R},X=function(t){var e=J();return e.data.id!==R.data.id&&e.data.id===t.data.id},Z=function(t){for(var e=J(),n=t;(null===(i=n.parent)||void 0===i?void 0:i.data.id)!==e.data.id;){var i;if(!n.parent)return e;n=n.parent}return n},U=function(t){return C(t)?t.parent:t},Y=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(h)if(null!==e){var n=U(e);n&&"incremental"===m&&(n=Z(n)),(null===(t=n)||void 0===t?void 0:t.data.id)!==J().data.id&&F(n)}else F(null)};return Object(i.jsxs)("svg",{viewBox:"0 0 ".concat(n," ").concat(e),width:n,height:e,className:"".concat(u&&N.a.animated),children:[Object(i.jsxs)("filter",{id:"dropshadow",height:"130%",children:[Object(i.jsx)("feGaussianBlur",{in:"SourceAlpha",stdDeviation:"3"}),Object(i.jsx)("feOffset",{dx:"2",dy:"2",result:"offsetblur"}),Object(i.jsx)("feComponentTransfer",{children:Object(i.jsx)("feFuncA",{type:"linear",slope:"0.5"})}),Object(i.jsxs)("feMerge",{children:[Object(i.jsx)("feMergeNode",{}),Object(i.jsx)("feMergeNode",{in:"SourceGraphic"})]})]}),J().descendants().map((function(e,n){return Object(i.jsx)("g",{transform:"translate(".concat(e.x0+A.right,",").concat(e.y0+A.bottom,")"),className:"".concat(h&&N.a.link),onClick:function(){return h&&function(t){var e=U(t);e&&J().data.id!==e.data.id?("incremental"===m&&(e=Z(e)),H(P(e.copy()))):H(void 0)}(e)},onMouseEnter:function(){return Y(e)},onMouseLeave:function(){return Y()},children:Object(i.jsxs)("g",{className:"".concat((null===G||void 0===G?void 0:G.data.id)===e.data.id?N.a.highlighted:""),children:[Object(i.jsx)("rect",{id:M(n),fill:_(e,(function(t){return t.id})),fillOpacity:.25,width:D(e),height:T(e)}),Object(i.jsx)("clipPath",{id:k(n),children:Object(i.jsx)("use",{href:w(n)})}),Object(i.jsxs)("text",{clipPath:"url(".concat(S(n),")"),x:t.paddingInner,y:t.paddingInner,dominantBaseline:"text-before-edge",children:[L(e)&&p&&("function"===typeof p&&p(e.data)||Object(i.jsx)("tspan",{children:e.data.name})),C(e)&&y&&("function"===typeof y&&y(e.data)||Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("tspan",{children:e.data.name}),Object(i.jsx)("tspan",{x:0,y:"1.5em",style:{opacity:.5},children:"".concat(e.data.value)})]})),X(e)&&Object(i.jsx)("tspan",{children:"(Click me to go back!)"})]})]})},"".concat(e.data.id))}))]})},B=function(t){var e=t.width,n=t.height,a=t.data,r=t.onFocusChanged,o=Math.max(0,n-0);return Object(i.jsxs)("div",{style:{height:n,width:e},className:O.a["classification-distribution-container"],children:[Object(i.jsx)("div",{style:{height:0}}),Object(i.jsx)("div",{className:O.a["treemap-container"],children:Object(i.jsx)(A,{height:o,width:e,data:a,paddingOuter:3,paddingInner:3,paddingTop:20,animated:!0,canDrill:!0,onDrill:r,tile:"squarify"})})]})},P=n(24),R=n(14),E=n.n(R),z=function(t){return Object(v.d)(t.flatMap((function(t){return t.flatMap((function(t){return t[1]}))})))},G=function(t){return Object(v.d)(t.flatMap((function(t){return t.flatMap((function(t){return t[1]-t[0]}))})))},F=function(t){return Object(a.isValidElement)(t)?t:Object(i.jsx)("text",{fill:"currentColor",y:9,dy:"0.71em",children:t})},q=function(t){return new Array(function(t){return Math.max.apply(Math,[0].concat(Object(P.a)(t.series.map((function(t){return t.entries.length})))))}(t)).fill(0).map((function(t,e){return e}))},W=function(t){var e=t.height,n=t.width,r=t.data,o=t.animated,c=void 0===o||o,d=t.layout,u=void 0===d?"stacked":d,l=t.includeLegend,h=void 0===l||l,f=t.legendPadding,m=void 0===f?15:f,g=t.legendEntryHeight,j=void 0===g?40:g,b=t.margin,p=void 0===b?{top:0,left:0,bottom:0,right:0}:b,O=r.series,x=void 0===O?[]:O,_=Object(a.useMemo)((function(){return x.map((function(t,e){return e.toString()}))}),[x]),M=Object(a.useMemo)((function(){return x.map((function(t){return t.id}))}),[x]),w=Object(a.useMemo)((function(){return x.map((function(t,e){return t.name||"series ".concat(e+1)}))}),[x]),k=Object(a.useMemo)((function(){return function(t){var e=q(t),n={domainLabels:[],domainPlainNames:[]};return t.domainLabels&&Array.isArray(t.domainLabels)?n.domainLabels=t.domainLabels.map(F):t.domainLabels&&"function"===typeof t.domainLabels?n.domainLabels=e.map(t.domainLabels).map(F):n.domainLabels=e.map((function(t){return F(t.toString())})),t.domainPlainText&&Array.isArray(t.domainPlainText)?n.domainPlainNames=t.domainPlainText:t.domainPlainText&&"function"===typeof t.domainPlainText?n.domainPlainNames=e.map(t.domainPlainText):n.domainPlainNames=e.map((function(t){return t.toString()})),n}(r)}),[r]),S=k.domainPlainNames,D=k.domainLabels,T=Object(a.useMemo)((function(){return Object(v.l)(x.map((function(t){return t.entries})))}),[x]),L=Object(a.useMemo)((function(){return Object(v.k)().keys(_)(T)}),[_,T]),C=Object(a.useMemo)((function(){return function(t,e,n){return Object(v.e)().domain(q(t).map((function(t){return t.toString()}))).rangeRound([e.left,n-e.right])}(r,p,n)}),[r,p,n]),I=Object(a.useMemo)((function(){return function(t,e,n){return Object(v.f)().domain([0,z(t)]).range([n-e.bottom,e.top])}(L,p,e)}),[L,e,p]),N=Object(a.useMemo)((function(){return function(t,e,n){return Object(v.f)().domain([0,G(t)]).range([n-e.bottom,e.top])}(L,p,e)}),[L,e,p]),A=function(t){return C(t.toString())},B=function(t){return"stacked"===u?I(t):N(t)},P=Object(a.useState)(void 0),R=Object(s.a)(P,2),W=R[0],K=R[1],V=Object(a.useState)(void 0),H=Object(s.a)(V,2),J=H[0],X=H[1],Z=2*m+j*w.length,U=p.top+(e-Z)/2,Y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;K(t),X(e)},Q=function(){return void 0!==W},$=function(t){return W===t},tt=function(t,e){return $(t)&&J===e},et=function(t){return Object(v.i)(v.b).domain([-.5*x.length,1.5*x.length])(t)},nt=function(t,e){return A(e)+("stacked"===u?0:C.bandwidth()/x.length*t)},it=function(t,e){var n=L[t][e];return Math.max(0,B("stacked"===u?n[1]:n[1]-n[0]))},at=function(t,e){var n=L[t][e];return Math.max(0,"stacked"===u?B(n[0])-B(n[1]):B(0)-B(n[1]-n[0]))};return Object(i.jsxs)("svg",{viewBox:"0 0 ".concat(n," ").concat(e),width:n,height:e,children:[h&&Object(i.jsx)("g",{children:w.map((function(t,e){return Object(i.jsxs)("g",{onMouseEnter:function(){return Y(e)},onMouseLeave:function(){return Y()},style:{cursor:"default"},children:[Object(i.jsx)("rect",{x:25,y:U+30+40*(w.length-e-1),width:125,height:40,fill:"transparent"}),Object(i.jsx)("rect",{className:"".concat(E.a["series-filled"]," ").concat(c&&E.a.animated," ").concat(Q()&&E.a.hover),x:25,y:U+50+40*(w.length-e-1),width:15,height:15,style:{fill:Q()?$(e)?et(x.length+1):et(0):y(M[e])}}),Object(i.jsx)("text",{x:50,y:U+62+40*(w.length-e-1),children:t})]},"legend-series-".concat(t))}))}),Object(i.jsxs)("g",{className:"".concat(Q()&&E.a.hover),children:[x.map((function(t,e){return Object(i.jsx)("g",{style:{stroke:et(x.length),fill:Q()?et(x.length+1):y(M[e])},children:t.entries.map((function(n,a){return Object(i.jsx)("rect",{x:nt(e,a),y:it(e,a),width:C.bandwidth()/("stacked"===u?1:x.length),height:at(e,a),onMouseOver:function(){return Y(e,a)},onMouseOut:function(){return Y()},className:"".concat(E.a["series-filled"]," ").concat(c&&E.a.animated," ").concat(E.a.entering," ").concat(tt(e,a)?E.a.primary:$(e)?E.a.secondary:""),children:Object(i.jsx)("title",{children:"".concat(w[e],"\n").concat(S[a],"\n").concat(n)})},"".concat(t.name,"-").concat(a))}))},w[e])})),Object(i.jsxs)("g",{transform:"translate(0,".concat(e-p.bottom,")"),fill:"none",textAnchor:"middle",children:[Object(i.jsx)("path",{stroke:"currentColor",d:"m ".concat(p.left," 0 H").concat(n-p.right)}),D.map((function(t,e){return Object(i.jsxs)("g",{transform:"translate(".concat(A(e)+C.bandwidth()/2,",0)"),children:[Object(i.jsx)("line",{stroke:"currentColor",y2:"6"}),t]},"tick-".concat(e))}))]})]})]})},K=n(85),V=n.n(K),H=n(239),J=n(240),X=n(243),Z=function(t){var e=t.width,n=t.height,r=t.data,o=Math.max(0,n-35),c=Object(a.useState)(r.categories),d=Object(s.a)(c,2),u=d[0],l=d[1],h=Object(a.useMemo)((function(){return l(r.categories),r.categories}),[r]),f=Object(a.useState)(!0),m=Object(s.a)(f,2),g=m[0],j=m[1],b=function(t){return r.dateRange[t].toISOString().split("T")[0]},p={series:u.map((function(t){return{entries:Object.keys(r.entries).map((function(e){return r.entries[e][t.id]})),name:t.name,id:t.id}})),domainLabels:function(t){return Object(i.jsx)(i.Fragment,{children:(t%4===0||t===r.dateRange.length-1)&&Object(i.jsx)("text",{fill:"currentColor",y:9,dy:"0.71em",style:{transform:"translate(.75em,0) rotate(45deg",textAnchor:"start"},children:b(t)})})},domainPlainText:b};return Object(i.jsxs)("div",{style:{width:e,height:n},className:V.a.widget,children:[Object(i.jsxs)("div",{style:{height:35},children:[Object(i.jsx)(H.a,{variant:"contained",color:"primary",onClick:function(){return j(!g)},style:{marginRight:15},children:g?"split":"stack"}),h.map((function(t){return Object(i.jsx)(J.a,{control:Object(i.jsx)(X.a,{color:"primary",checked:-1!==u.indexOf(t),onChange:function(){return function(t){var e=r.categories.find((function(e){return e.id===t})),n=u.indexOf(e);l(-1===n?[].concat(Object(P.a)(u),[e]):[].concat(Object(P.a)(u.slice(0,n)),Object(P.a)(u.slice(n+1))))}(t.id)}}),label:t.name},"include-".concat(t.id))}))]}),Object(i.jsx)(W,{width:e,height:o,data:p,margin:{top:0,right:30,bottom:60,left:150},layout:g?"stacked":"grouped"})]})},U=n(18),Y=n.n(U),Q=function(t){var e=t.height,n=t.width,r=t.data,o=t.getCategory,c=t.orientation,d=void 0===c?"horizontal":c,u=t.margin,l=void 0===u?{left:0,top:0,right:0,bottom:0}:u,h=t.step,m=void 0===h?14:h,g=t.sortBy,j=void 0===g?function(t,e){return t.id<e.id?-1:1}:g,b=t.animated,p=void 0===b||b,O=Object(a.useState)(void 0),x=Object(s.a)(O,2),_=x[0],M=x[1],w=function(t){return t.id===_},k=function(t){return t.sourceLinks.some((function(t){return t.target.id===_}))||t.targetLinks.some((function(t){return t.source.id===_}))},S=function(t){return t.source.id===_||t.target.id===_},D=Object(a.useMemo)((function(){return function(t,e){var n,i=function(t,e){return t.nodes.map((function(t){return{id:t.id,sourceLinks:[],targetLinks:[],node:t,category:e(t)}}))}(t,e),a=function(t,e){return t.links.map((function(t){var n=t.source,i=t.target;return{source:e.get(n),target:e.get(i)}}))}(t,new Map(i.map((function(t){return[t.id,t]})))),r=Object(f.a)(a);try{for(r.s();!(n=r.n()).done;){var o=n.value,c=o.source,s=o.target;c.sourceLinks.push(o),s.targetLinks.push(o)}}catch(d){r.e(d)}finally{r.f()}return{nodes:i,links:a}}(r,o)}),[r,o]),T=Object(a.useMemo)((function(){return"horizontal"===d?function(){return e-l.bottom}:Object(v.h)(D.nodes.map((function(t){return t.node})).sort(j).map((function(t){return t.id})),[l.top,e-l.bottom])}),[d,D,l,j,e]),L=Object(a.useMemo)((function(){return"vertical"===d?function(){return l.left}:Object(v.h)(D.nodes.map((function(t){return t.node})).sort(j).map((function(t){return t.id})),[l.left,n-l.right])}),[d,D,l,j,n]),C=function(t){return"horizontal"===d?function(t){var n=L(t.source.id),i=L(t.target.id),a=Math.abs(i-n)/2,r=Math.min(e-(l.bottom+l.top),a);return"M".concat(n,",").concat(e-l.bottom,"A").concat(a,",").concat(r," 0,0,").concat(n<i?1:0," ").concat(i,",").concat(e-l.bottom)}(t):function(t){var e=T(t.source.id),i=T(t.target.id),a=Math.abs(i-e)/2,r=Math.min(n-(l.left+l.right),a);return"M".concat(l.left,",").concat(e,"A").concat(r,",").concat(a," 0,0,").concat(e<i?1:0," ").concat(l.left,",").concat(i)}(t)};return Object(i.jsxs)("svg",{viewBox:"0 0 ".concat(n," ").concat(e),height:e,width:n,className:"".concat(p&&Y.a.animated," ").concat(_&&Y.a.hover),children:[D.links.map((function(t){return Object(i.jsx)("g",{fill:"none",strokeOpacity:.6,strokeWidth:1.5,className:Y.a.drop,children:Object(i.jsx)("path",{stroke:t.source.category===t.target.category?y(t.source.category):"#aaa",d:C(t)})},"".concat(t.source.id,"-").concat(t.target.id))})),D.links.filter(S).map((function(t){return Object(i.jsx)("g",{fill:"none",strokeOpacity:.6,strokeWidth:1.5,children:Object(i.jsx)("path",{stroke:t.source.category===t.target.category?y(t.source.category):"#aaa",d:C(t),className:"".concat(S(t)&&Y.a.primary)})},"hover-".concat(t.source.id,"-").concat(t.target.id))})),D.nodes.map((function(t){return Object(i.jsxs)("g",{transform:"translate(".concat(L(t.id),",").concat(T(t.id),")"),textAnchor:"end",className:"".concat(w(t)?Y.a.primary:k(t)?Y.a.secondary:""),children:[Object(i.jsx)("text",{x:-6,dy:"0.35em",fill:Object(v.c)(y(t.category)).darker(2).rgb().toString(),style:{transform:"horizontal"===d?"rotate(270deg)":""},children:t.id}),Object(i.jsx)("circle",{r:3,fill:y(t.category)})]},t.id)})),Object(i.jsx)("g",{fill:"none",pointerEvents:"all",children:D.nodes.map((function(t){return Object(i.jsx)("rect",{width:"horizontal"===d?m:l.left+40,height:"horizontal"===d?l.bottom+40:m,y:T(t.id)-("horizontal"===d?40:m/2),x:L(t.id)-("horizontal"===d?m/2:40),onMouseOver:function(){return M(t.id)},onMouseOut:function(){return M(void 0)}},"overlay-".concat(t.id))}))})]})},$=n(45),tt=n.n($),et=function(t){var e=t.width,n=t.height,r=t.data,o=Math.max(0,n-35),c=Object(a.useState)("ById"),d=Object(s.a)(c,2),u=d[0],l=d[1];return Object(i.jsxs)("div",{style:{height:n,width:e},className:tt.a.widget,children:[Object(i.jsxs)("div",{style:{height:35},children:[Object(i.jsx)(H.a,{variant:"contained",color:"primary",onClick:function(){return l("ById")},style:{marginRight:15},children:"By ID"}),Object(i.jsx)(H.a,{variant:"contained",color:"primary",onClick:function(){return l("ByGroup")},className:tt.a["control-button"],children:"By Group"})]}),Object(i.jsx)(Q,{width:e,height:o,orientation:o>e?"vertical":"horizontal",margin:{top:20,right:20,bottom:o>e?20:100,left:o>e?100:20},step:14,data:{nodes:r.nodes,links:r.links},getCategory:function(t){return"".concat(t.group)},sortBy:"ById"===u?function(t,e){return t.id<e.id?-1:1}:function(t,e){return t.group<e.group?-1:1}})]})};var nt=function(){var t=Object(a.useState)(new j({itemIdLength:5,classificationNameLength:3,classificationSetStructure:[5,3,2],classificationLeafValueRange:[100,250],enemyNodeRange:[50,70],enemyLinkProbabilityInternal:.125,enemyLinkProbabilityExternal:.0125,contentOverTimeDaysAgo:45})),e=Object(s.a)(t,1)[0],n=Object(a.useState)(e.classificationSet.id),r=Object(s.a)(n,2),o=r[0],c=r[1];return Object(i.jsxs)(d.a,{elevation:3,style:{margin:"auto",padding:30,borderRadius:15,width:1500,minWidth:1500},children:[Object(i.jsxs)(u.a,{container:!0,spacing:3,alignItems:"center",justify:"center",children:[Object(i.jsxs)(u.a,{item:!0,xs:4,children:[Object(i.jsx)(l.a,{variant:"h3",align:"center",children:"Classifications"}),Object(i.jsx)(l.a,{align:"center",children:"It can be useful to explore the distribution of a hierarchical classification across an item bank. Drill down into any level of the set to see how data in the other widgets might change."})]}),Object(i.jsx)(u.a,{item:!0,xs:8,children:Object(i.jsx)(B,{width:1e3,height:400,data:e.classificationSet,onFocusChanged:c})})]}),Object(i.jsxs)(u.a,{container:!0,spacing:3,alignItems:"center",justify:"center",children:[Object(i.jsx)(u.a,{item:!0,xs:8,children:Object(i.jsx)(et,{width:1e3,height:400,data:e.enemyDistributions[o]})}),Object(i.jsxs)(u.a,{item:!0,xs:4,children:[Object(i.jsx)(l.a,{variant:"h3",align:"center",children:"Enemies"}),Object(i.jsx)(l.a,{align:"center",children:"It is crucial to get a sense of the distribution of enemies across an item bank. Sort a sampling of items from the selected classification hierarchy level to see how organizing data yields more insight."})]})]}),Object(i.jsxs)(u.a,{container:!0,spacing:3,alignItems:"center",justify:"center",children:[Object(i.jsxs)(u.a,{item:!0,xs:4,children:[Object(i.jsx)(l.a,{variant:"h3",align:"center",children:"Content Over Time"}),Object(i.jsx)(l.a,{align:"center",children:"Understanding the flow of new items into your item bank, and their distribution across content areas, is important in gaining an understanding of which areas to focus campaigns on. Stack and split the data to gain a greater sense of understanding of the flow of items into your bank."})]}),Object(i.jsx)(u.a,{item:!0,xs:8,children:Object(i.jsx)(Z,{width:1e3,height:400,data:e.contentOverTime[o]})})]})]})};c.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(nt,{})}),document.getElementById("root"))},36:function(t,e,n){t.exports={animated:"Treemap_animated__3jOuI","fade-in":"Treemap_fade-in__PwLvb",link:"Treemap_link__uFXSA",highlighted:"Treemap_highlighted__7uMZc"}},44:function(t,e,n){t.exports={"treemap-container":"ClassificationDistribution_treemap-container__1ni3s","classification-distribution-container":"ClassificationDistribution_classification-distribution-container__19EKA"}},45:function(t,e,n){t.exports={widget:"EnemyDistribution_widget__FfwEL"}},85:function(t,e,n){t.exports={widget:"ContentOverTime_widget__q8hxn",hover:"ContentOverTime_hover__2NKDe",primary:"ContentOverTime_primary__33nZN",secondary:"ContentOverTime_secondary__2SSlX",animated:"ContentOverTime_animated__19SJ5",entering:"ContentOverTime_entering__zBnv_","drop-in":"ContentOverTime_drop-in__2qyW0",leaving:"ContentOverTime_leaving__3jIAS","fade-out":"ContentOverTime_fade-out__1Fxlz"}}},[[220,1,2]]]);
//# sourceMappingURL=main.1ac667d3.chunk.js.map