(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&a(e,t)}function a(e,t){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},a(e,t)}function u(t){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var u,r=n(t);if(a){var c=n(this).constructor;u=Reflect.construct(r,arguments,c)}else u=r.apply(this,arguments);return function(t,a){if(a&&("object"===e(a)||"function"==typeof a))return a;if(void 0!==a)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)}(this,u)}}function n(e){return n=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},n(e)}function r(t,a){for(var u=0;u<a.length;u++){var n=a[u];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,r=function(t,a){if("object"!==e(t)||null===t)return t;var u=t[Symbol.toPrimitive];if(void 0!==u){var n=u.call(t,"string");if("object"!==e(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===e(r)?r:String(r)),n)}var r}function c(e,t,a){return t&&r(e.prototype,t),a&&r(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var l=c((function e(){o(this,e),this.execute=function(){},this.unexecute=function(){},this.setParams=function(){}})),i=function(e){t(n,e);var a=u(n);function n(e,t){var u;return o(this,n),(u=a.call(this)).calculator=e,u.operand=t,u.setParams=function(e,t){this.calculator=e,this.operand=t},u.execute=function(){this.calculator.add(this.operand)},u.unexecute=function(){this.calculator.substract(this.operand)},u}return c(n)}(l),s=function(e){t(n,e);var a=u(n);function n(e,t){var u;return o(this,n),(u=a.call(this)).calculator=e,u.operand=t,u.setParams=function(e,t){this.calculator=e,this.operand=t},u.execute=function(){this.calculator.subtract(this.operand)},u.unexecute=function(){this.calculator.add(this.operand)},u}return c(n)}(l),m=function(e){t(n,e);var a=u(n);function n(e,t){var u;return o(this,n),(u=a.call(this)).calculator=e,u.operand=t,u.setParams=function(e,t){this.calculator=e,this.operand=t},u.execute=function(){this.calculator.multiply(this.operand)},u.unexecute=function(){this.calculator.divide(this.operand)},u}return c(n)}(l),v=function(e){t(n,e);var a=u(n);function n(e,t){var u;return o(this,n),(u=a.call(this)).calculator=e,u.operand=t,u.setParams=function(e,t){this.calculator=e,this.operand=t},u.execute=function(){this.calculator.divide(this.operand)},u.unexecute=function(){this.calculator.multiply(this.operand)},u}return c(n)}(l),f=function(e){t(n,e);var a=u(n);function n(e,t){var u;return o(this,n),(u=a.call(this)).calculator=e,u.operand=t,u.setParams=function(e,t){this.calculator=e,this.operand=t},u.execute=function(){this.calculator.exp(this.operand)},u.unexecute=function(){this.calculator.cbrt(this.operand)},u}return c(n)}(l),h=function(e){t(n,e);var a=u(n);function n(e,t){var u;return o(this,n),(u=a.call(this)).calculator=e,u.operand=t,u.setParams=function(e,t){this.calculator=e,this.operand=t},u.execute=function(){this.calculator.cbrt(this.operand)},u.unexecute=function(){this.calculator.exp(this.operand)},u}return c(n)}(l),b=function(e){t(n,e);var a=u(n);function n(e){var t;return o(this,n),(t=a.call(this)).execute=function(){e.inv()},t.unexecute=function(){e.inv()},t}return c(n)}(l),d=function(e){t(n,e);var a=u(n);function n(e){var t;return o(this,n),(t=a.call(this)).execute=function(){e.signChange()},t.unexecute=function(){e.signChange()},t}return c(n)}(l),p=function(e){t(n,e);var a=u(n);function n(e){var t;return o(this,n),(t=a.call(this)).execute=function(){e.clear()},t}return c(n)}(l),y=function(e){t(n,e);var a=u(n);function n(e){var t;return o(this,n),(t=a.call(this)).execute=function(){e.factorial()},t}return c(n)}(l),g=function(e){t(n,e);var a=u(n);function n(e){var t;return o(this,n),(t=a.call(this)).calculator=e,t.execute=function(){e.memoryClear()},t}return c(n)}(l),k=function(e){t(n,e);var a=u(n);function n(e,t){var u;return o(this,n),(u=a.call(this)).calculator=e,u.execute=function(){e.memoryPlus(t)},u.unexecute=function(){e.memoryMinus(t)},u}return c(n)}(l),x=function(e){t(n,e);var a=u(n);function n(e,t){var u;return o(this,n),(u=a.call(this)).calculator=e,u.execute=function(){e.memoryMinus(t)},u.unexecute=function(){e.memoryPlus(t)},u}return c(n)}(l),w=function(e){t(n,e);var a=u(n);function n(e){var t;return o(this,n),(t=a.call(this)).calculator=e,t.execute=function(){e.memoryRead()},t}return c(n)}(l);function V(e){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V(e)}function P(e,t){for(var a=0;a<t.length;a++){var u=t[a];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(e,(void 0,n=function(e,t){if("object"!==V(e)||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var u=a.call(e,"string");if("object"!==V(u))return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(u.key),"symbol"===V(n)?n:String(n)),u)}var n}var C=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.currentValue=0,this.memory=0,this.commands=[],this.command=null,this.flag=!1}var t,a;return t=e,(a=[{key:"add",value:function(e){this.currentValue+=e}},{key:"subtract",value:function(e){this.currentValue-=e}},{key:"multiply",value:function(e){this.currentValue*=e}},{key:"divide",value:function(e){if(0===e)throw Error("division by zero");this.currentValue/=e}},{key:"exp",value:function(e){this.currentValue=Math.pow(this.currentValue,e)}},{key:"cbrt",value:function(e){if(this.currentValue<0)throw Error("square root of negative number");this.currentValue=Math.pow(this.currentValue,1/e)}},{key:"inv",value:function(){if(0===this.currentValue)throw Error("division by zero");this.currentValue=1/this.currentValue}},{key:"percent",value:function(e){return 0===this.currentValue&&(this.currentValue=e/100*1),this.currentValue*(e/100)}},{key:"unpercent",value:function(e){this.currentValue/=1+e/100}},{key:"signChange",value:function(){this.currentValue=-this.currentValue}},{key:"clear",value:function(){this.currentValue=0}},{key:"factorial",value:function(){if(!Number.isInteger(this.currentValue))throw Error("factorial is available only for integers");for(var e=this.currentValue,t=1,a=1;a<=e;a+=1)t*=a;this.currentValue=t}},{key:"memoryClear",value:function(){this.memory=0}},{key:"memoryRead",value:function(){0!==this.memory?this.currentValue=this.memory:console.warn("Memory is empty")}},{key:"memorySave",value:function(e){this.memory=e}},{key:"memoryPlus",value:function(e){this.memory+=e}},{key:"memoryMinus",value:function(e){this.memory-=e}},{key:"getResult",value:function(){return this.currentValue}},{key:"setValue",value:function(e){this.currentValue=e}},{key:"changeFlag",value:function(e){this.flag=e}},{key:"pushCommand",value:function(e){this.commands.push(e),this.command=e}}])&&P(t.prototype,a),Object.defineProperty(t,"prototype",{writable:!1}),e}()),N=document.getElementsByClassName("calculator__input")[0];document.getElementsByClassName("calculator__body")[0].addEventListener("click",(function(e){var t=e.target.className.split(" ")[1];switch(console.log(C.flag),console.log(C.command),console.log(C.currentValue),t){case"item1":C.setValue(Number(N.value)),C.pushCommand(new f(C,2)),C.command.execute(),N.value=C.getResult();break;case"item2":C.setValue(Number(N.value)),C.pushCommand(new b(C)),C.command.execute(),N.value=C.getResult();break;case"item3":C.pushCommand(new w(C)),C.command.execute(),N.value=C.getResult();break;case"item4":C.pushCommand(new p(C)),C.command.execute(),N.value="0",C.changeFlag(!1);break;case"item5":C.setValue(Number(N.value)),C.pushCommand(new d(C)),C.command.execute(),N.value=C.getResult();break;case"item6":0===C.getResult()?(C.percent(Number(N.value)),N.value=C.getResult()):N.value=C.percent(Number(N.value));break;case"item7":C.flag?(C.command.setParams(C,Number(N.value)),C.command.execute()):(C.setValue(Number(N.value)),C.changeFlag(!0)),C.pushCommand(new v),N.value="0";break;case"item8":C.setValue(Number(N.value)),C.pushCommand(new f(C,3)),C.command.execute(),N.value=C.getResult();break;case"item9":C.setValue(Number(N.value)),C.pushCommand(new h(C,2)),C.command.execute(),N.value=C.getResult();break;case"item10":C.pushCommand(new k(C,Number(N.value))),C.command.execute(),N.value="0";break;case"item11":"0"===N.value?N.value="7":N.value+="7";break;case"item12":"0"===N.value?N.value="8":N.value+="8";break;case"item13":"0"===N.value?N.value="9":N.value+="9";break;case"item14":C.flag?(C.command.setParams(C,Number(N.value)),C.command.execute()):(C.setValue(Number(N.value)),C.changeFlag(!0)),C.pushCommand(new m),N.value="0";break;case"item15":C.flag?(C.command.setParams(C,Number(N.value)),C.command.execute()):(C.setValue(Number(N.value)),C.changeFlag(!0)),C.pushCommand(new f),N.value="0";break;case"item16":C.setValue(Number(N.value)),C.pushCommand(new h(C,3)),C.command.execute(),N.value=C.getResult();break;case"item17":C.pushCommand(new x(C,Number(N.value))),C.command.execute(),N.value="0";break;case"item18":"0"===N.value?N.value="4":N.value+="4";break;case"item19":"0"===N.value?N.value="5":N.value+="5";break;case"item20":"0"===N.value?N.value="6":N.value+="6";break;case"item21":C.flag?(C.command.setParams(C,Number(N.value)),C.command.execute(),N.value="0"):"0"===N.value?N.value="-":(C.setValue(Number(N.value)),C.changeFlag(!0),N.value="0"),C.pushCommand(new s);break;case"item22":C.setValue(Number(N.value)),C.pushCommand(new y(C)),C.command.execute(),N.value=C.getResult();break;case"item23":C.flag?(C.command.setParams(C,Number(N.value)),C.command.execute()):(C.setValue(Number(N.value)),C.changeFlag(!0)),C.pushCommand(new h),N.value="0";break;case"item24":C.pushCommand(new g(C)),C.command.execute();break;case"item25":"0"===N.value?N.value="1":N.value+="1";break;case"item26":"0"===N.value?N.value="2":N.value+="2";break;case"item27":"0"===N.value?N.value="3":N.value+="3";break;case"item28":C.flag?(C.command.setParams(C,Number(N.value)),C.command.execute()):(C.setValue(Number(N.value)),C.changeFlag(!0)),C.pushCommand(new i),N.value="0";break;case"item29":default:break;case"item30":"0"!==N.value&&(N.value+="0");break;case"item31":N.value+=".";break;case"item32":C.flag&&(C.command.setParams(C,Number(N.value)),C.command.execute(),N.value=C.getResult(),C.changeFlag(!1))}})),document.addEventListener("keydown",(function(e){switch(e.key){case"1":"0"===N.value?N.value="1":N.value+="1";break;case"2":"0"===N.value?N.value="2":N.value+="2";break;case"3":"0"===N.value?N.value="3":N.value+="3";break;case"4":"0"===N.value?N.value="4":N.value+="4";break;case"5":"0"===N.value?N.value="5":N.value+="5";break;case"6":"0"===N.value?N.value="6":N.value+="6";break;case"7":"0"===N.value?N.value="7":N.value+="7";break;case"8":"0"===N.value?N.value="8":N.value+="8";break;case"9":"0"===N.value?N.value="9":N.value+="9";break;case"0":"0"!==N.value&&(N.value+="0");break;case".":N.value+="."}}))})();