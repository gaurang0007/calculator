(this.webpackJsonpcal=this.webpackJsonpcal||[]).push([[0],{24:function(e,c,l){},25:function(e,c,l){},26:function(e,c,l){},27:function(e,c,l){},36:function(e,c){},37:function(e,c,l){"use strict";l.r(c);var a=l(4),s=l(17),t=l.n(s),o=(l(24),l(25),l(10)),r=l(11),i=l(13),n=l(12),d=(l(26),l(27),l(0)),j=function(e){Object(i.a)(l,e);var c=Object(n.a)(l);function l(){var e;Object(o.a)(this,l);for(var a=arguments.length,s=new Array(a),t=0;t<a;t++)s[t]=arguments[t];return(e=c.call.apply(c,[this].concat(s))).state={},e}return Object(r.a)(l,[{key:"render",value:function(){var e=this;return Object(d.jsx)("button",{className:"button",onClick:function(){return e.props.onclick1(e.props.value)},style:{backgroundColor:this.props.bgcolor,color:this.props.color},children:this.props.name})}}]),l}(a.Component),u=l(39),h=["0","1","2","3","4","5","6","7","8","9"],p=["/","*","-","+","="],m=function(e){Object(i.a)(l,e);var c=Object(n.a)(l);function l(e){var a;return Object(o.a)(this,l),(a=c.call(this,e)).processDigit=function(e){var c=a.state,l=c.displayValue;if(c.waitingForOperand)a.setState({displayValue:e,waitingForOperand:!1});else{var s="0"===l?e:"".concat(l).concat(e);a.setState({displayValue:s,waitingForOperand:!1})}},a.processOperator=function(e){var c=a.state,l=c.displayValue,s=c.operator,t=c.waitingForOperand,o=c.firstOperand,r=null,i=null,n=null;if("0"===o||null==s||t)a.setState({waitingForOperand:!0,firstOperand:l,operator:e});else if("+"===s){n=o+l;try{r=Object(u.a)(n)}catch(d){r="0"}r===1/0&&(r="0"),i="="===e?null:e,a.setState({displayValue:r,waitingForOperand:!0,firstOperand:r,operator:i})}else if("-"===s){n=o-l;try{r=Object(u.a)(n)}catch(d){r="0"}r===1/0&&(r="0"),i="="===e?null:e,a.setState({displayValue:r,waitingForOperand:!0,firstOperand:r,operator:i})}else if("*"===s){n=o*l;try{r=Object(u.a)(n)}catch(d){r="0"}r===1/0&&(r="0"),i="="===e?null:e,a.setState({displayValue:r,waitingForOperand:!0,firstOperand:r,operator:i})}else if("/"===s){n=o/l;try{r=Object(u.a)(n)}catch(d){r="0"}r===1/0&&(r="0"),i="="===e?null:e,a.setState({displayValue:r,waitingForOperand:!0,firstOperand:r,operator:i})}},a.processPoint=function(e){var c=a.state,l=c.displayValue,s=c.waitingForOperand,t=-1==="".concat(l).indexOf("."),o=null;s?a.setState({displayValue:"0.",waitingForOperand:!1}):t&&(o="".concat(l).concat(e),a.setState({displayValue:"".concat(o),waitingForOperand:!1}))},a.processPercentage=function(e){var c=a.state.displayValue,l=parseFloat(c)/100;a.setState({displayValue:l,waitingForOperand:!1})},a.processPlusMinusToggle=function(e){var c=a.state.displayValue;a.setState({displayValue:-1*parseFloat(c),waitingForOperand:!1})},a.processClear=function(){a.setState({displayValue:"0",firstOperand:"0",operator:null,waitingForOperand:!1})},a.processFunctionKey=function(e){switch(e){case"AC":a.processClear(e);break;case"+/-":a.processPlusMinusToggle(e);break;case".":a.processPoint(e);break;case"%":a.processPercentage(e);break;default:a.processUnknownKey(e)}},a.handleClick=function(e){a.processNewKey(e)},a.processNewKey=function(e){var c=h.includes(e),l=p.includes(e);c?a.processDigit(e):l?a.processOperator(e):a.processFunctionKey(e)},a.state={displayValue:"0",operator:null,waitingForOperand:!1,firstOperand:"0"},a}return Object(r.a)(l,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)("div",{className:"display",children:Object(d.jsx)("div",{className:"result",children:this.state.displayValue})}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-sm-3 col-md-3 col-lr-3 row1",children:Object(d.jsx)(j,{name:"AC",value:"AC",onclick1:this.handleClick})}),Object(d.jsx)("div",{className:"col-sm- row1 col-md-3 col-lr-3 row1",children:Object(d.jsx)(j,{name:"+/-",value:"+/-",onclick1:this.handleClick})}),Object(d.jsx)("div",{className:"col-sm-3 col-md-3 col-lr-3 row1",children:Object(d.jsx)(j,{name:"%",value:"%",onclick1:this.handleClick})}),Object(d.jsx)("div",{className:"col-sm-3 col-md-3 col-lr-3 row1",children:Object(d.jsx)(j,{name:"\xf7",value:"/",color:"white",onclick1:this.handleClick,bgcolor:"#F5923E"})})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-sm-3 col-md-3 col-lr-3 row1",children:Object(d.jsx)(j,{name:"7",value:"7",onclick1:this.handleClick})}),Object(d.jsx)("div",{className:"col-sm- row1 col-md-3 col-lr-3 row1",children:Object(d.jsx)(j,{name:"8",value:"8",onclick1:this.handleClick})}),Object(d.jsx)("div",{className:"col-sm-3 col-md-3 col-lr-3 row1",children:Object(d.jsx)(j,{name:"9",value:"9",onclick1:this.handleClick})}),Object(d.jsx)("div",{className:"col-sm-3 col-md-3 col-lr-3 row1",children:Object(d.jsx)(j,{name:"x",value:"*",color:"white",onclick1:this.handleClick,bgcolor:"#F5923E"})})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-sm-3 col-md-3 col-lr-3 row1",children:Object(d.jsx)(j,{name:"4",value:"4",onclick1:this.handleClick})}),Object(d.jsx)("div",{className:"col-sm- row1 col-md-3 col-lr-3 row1",children:Object(d.jsx)(j,{name:"5",value:"5",onclick1:this.handleClick})}),Object(d.jsx)("div",{className:"col-sm-3 col-md-3 col-lr-3 row1",children:Object(d.jsx)(j,{name:"6",value:"6",onclick1:this.handleClick})}),Object(d.jsx)("div",{className:"col-sm-3 col-md-3 col-lr-3 row1",children:Object(d.jsx)(j,{name:"-",color:"white",value:"-",onclick1:this.handleClick,bgcolor:"#F5923E"})})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-sm-3 col-md-3 col-lr-3 row1",children:Object(d.jsx)(j,{name:"1",value:"1",onclick1:this.handleClick})}),Object(d.jsx)("div",{className:"col-sm- row1 col-md-3 col-lr-3 row1",children:Object(d.jsx)(j,{name:"2",value:"2",onclick1:this.handleClick})}),Object(d.jsx)("div",{className:"col-sm-3 col-md-3 col-lr-3 row1",children:Object(d.jsx)(j,{name:"3",value:"3",onclick1:this.handleClick})}),Object(d.jsx)("div",{className:"col-sm-3 col-md-3 col-lr-3 row1",children:Object(d.jsx)(j,{name:"+",value:"+",color:"white",onclick1:this.handleClick,bgcolor:"#F5923E"})})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-sm-6 col-md-6 col-lr-6 row2",children:Object(d.jsx)(j,{name:"0",value:"0",onclick1:this.handleClick})}),Object(d.jsx)("div",{className:"col-sm-3 col-md-3 col-lr-3 row1",children:Object(d.jsx)(j,{name:".",value:".",onclick1:this.handleClick})}),Object(d.jsx)("div",{className:"col-sm-3 col-md-3 col-lr-3 row1",children:Object(d.jsx)(j,{name:"=",color:"white",value:"=",onclick1:this.handleClick,bgcolor:"#F5923E"})})]})]})}}]),l}(a.Component);var O=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(m,{})})};t.a.render(Object(d.jsx)(O,{}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.8619ed96.chunk.js.map