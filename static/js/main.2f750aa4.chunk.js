(this["webpackJsonpcompound-interest"]=this["webpackJsonpcompound-interest"]||[]).push([[0],{254:function(e,t,a){e.exports=a(536)},259:function(e,t,a){},536:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(13),l=a.n(r),i=(a(259),a(215)),m=a(571),c=a(570),u=a(572),s=a(214),h=a(573),d=a(567),v=a(574),p=Object(d.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}}}}));function b(e){var t=e.onSubmit,a=p(),r=Object(n.useCallback)((function(e){for(var a=e.initialInvestment,n=e.monthlyContribution,o=e.interestRate,r=e.tax,l=e.compoundFreq,i=e.timeLength,m=[],c=parseInt(l),u=parseInt(i),s=parseFloat(a),h=Math.ceil(c*(u/12)),d=parseFloat(o)/100/c,v=parseFloat(r)/100,p=parseFloat(n)/(c/12),b=s,g=s,E=0,f=0,C=0;C<h;C++){var y=b*d,x=y*v,T=y-x;E+=T,b+=T,f+=x,b+=p,g+=p,m.push({sum:b,incomeNet:T})}var F={periods:m,compoundFreq:c,timeLength:u,investmentsTotal:Math.round(100*g)/100,incomeNetTotal:Math.round(100*E)/100,sum:Math.round(100*b)/100,taxTotal:Math.round(100*f)/100};t&&t(F)}),[t]);return o.a.createElement(s.a,{initialValues:{initialInvestment:0,monthlyContribution:0,interestRate:6.5,tax:13,compoundFreq:12,timeLength:60},onSubmit:r},(function(e){return o.a.createElement("form",{onSubmit:e.handleSubmit,className:a.root},o.a.createElement(h.a,null,o.a.createElement(u.a,{label:"Initial investment",name:"initialInvestment",onChange:e.handleChange,value:e.values.initialInvestment}),o.a.createElement(u.a,{label:"Monthly contribution",name:"monthlyContribution",onChange:e.handleChange,value:e.values.monthlyContribution})),o.a.createElement(h.a,null,o.a.createElement(u.a,{label:"Interest rate (%)",name:"interestRate",onChange:e.handleChange,value:e.values.interestRate}),o.a.createElement(u.a,{label:"Tax (%)",name:"tax",onChange:e.handleChange,value:e.values.tax})),o.a.createElement(h.a,null,o.a.createElement(u.a,{label:"Compound frequency",name:"compoundFreq",onChange:e.handleChange,value:e.values.compoundFreq}),o.a.createElement(u.a,{label:"Time (months)",name:"timeLength",onChange:e.handleChange,value:e.values.timeLength})),o.a.createElement(v.a,{variant:"outlined",color:"primary",type:"submit"},"Calculate"))}))}b.defaultProps={};var g=b,E=a(56);function f(e){var t=e.data,a=Object(n.useCallback)((function(e,t,a){var n=Math.round(100*e)/100,o=Math.round(100*a.payload.income)/100;return["".concat(n," (income: ").concat(o,")"),"Sum"]}),[]),r=Object(n.useCallback)((function(e,t,a){return"Period ".concat(e)}),[]);if(!t)return null;var l=t.periods.map((function(e,t){return{name:t+1,val:e.sum,income:e.incomeNet}})),i=t.investmentsTotal,m=t.incomeNetTotal,u=t.sum,s=t.taxTotal;return o.a.createElement(h.a,{style:{marginTop:"30px"}},o.a.createElement(E.b,{width:1e3,height:400,margin:{top:20,right:0,left:0,bottom:5},data:l},o.a.createElement(E.d,{dataKey:"name"}),o.a.createElement(E.e,null),o.a.createElement(E.c,{labelFormatter:r,formatter:a}),o.a.createElement(E.a,{dataKey:"val",fill:"#8884d8"})),o.a.createElement(c.a,{variant:"h5",style:{marginBottom:"30px"}},"Investments: ",i," \u2003\u2003 Net income: ",m," \u2003\u2003 Tax: ",-1*s," \u2003\u2003 Total: ",u))}f.defaultProps={};var C=f;var y=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],r=t[1],l=Object(n.useCallback)((function(e){r(e)}),[]);return o.a.createElement(m.a,{fixed:!0},o.a.createElement(c.a,{variant:"h4",style:{marginBottom:"30px"}},"Compound interest calculator"),o.a.createElement(g,{onSubmit:l}),o.a.createElement(C,{data:a}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[254,1,2]]]);
//# sourceMappingURL=main.2f750aa4.chunk.js.map