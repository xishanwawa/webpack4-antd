(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{905:function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=l(n(1)),a=n(114);n(923);var i=n(894),u=l(n(904)),f=l(n(921)),c=l(n(920));function l(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.addResultList=function(e){var t=n.state.resultList;t.push(e),n.setState({resultList:t})},n.state={drogList:[{name:"单行文本",id:"1"},{name:"多行文本",id:"2"}],resultList:[]},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.state.drogList.map(function(e,t){return o.default.createElement(c.default,{data:e,index:t,key:e.id})});return o.default.createElement("div",null,o.default.createElement(i.DragDropContextProvider,{backend:u.default},o.default.createElement("div",{className:"drag-list"},o.default.createElement("div",{style:{marginBottom:20}},"血汗工厂："),t),o.default.createElement(f.default,{data:this.state.resultList,onAddChange:function(t){e.addResultList(t)}}),o.default.createElement("div",{className:"drag-setting"})))}}]),t}();e.exports=(0,a.connect)(function(e){return{$$state:e.home}},{})(d)},920:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o,a,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),f=l(u),c=l(n(0));function l(e){return e&&e.__esModule?e:{default:e}}var d=(0,n(894).DragSource)("BOX",{beginDrag:function(e){return e.data},endDrag:function(e,t){t.getItem(),t.getDropResult()}},function(e,t){return{connectDragSource:e.dragSource(),isDragging:t.isDragging()}})((a=o=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.Component),i(t,[{key:"render",value:function(){var e=this.props,t=e.isDragging,n=e.connectDragSource,r=this.props.data.name,o=t?.4:1;return n(f.default.createElement("div",{className:"drag-list-item",style:{opacity:o}},r))}}]),t}(),o.propTypes={connectDragSource:c.default.func.isRequired,isDragging:c.default.bool.isRequired,data:c.default.object.isRequired},r=a))||r;t.default=d},921:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o,a,i=b(n(903)),u=b(n(902)),f=b(n(88)),c=b(n(901)),l=b(n(900)),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(899),n(898),n(430),n(897),n(896);var s=n(1),p=b(s),g=b(n(0));function b(e){return e&&e.__esModule?e:{default:e}}var h=(0,n(894).DropTarget)("BOX",{drop:function(e,t){e.onAddChange(t.getItem())}},function(e,t){return{connectDropTarget:e.dropTarget(),isOver:t.isOver(),canDrop:t.canDrop()}})((a=o=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.Component),d(t,[{key:"confirm",value:function(e){console.log(e),l.default.success("不解风情，男人没有好东西。")}},{key:"cancel",value:function(e){console.log(e),l.default.error("不杀之恩，当以身相许。")}},{key:"render",value:function(){var e=this,t=this.props,n=t.canDrop,r=t.isOver,o=t.connectDropTarget,a="#ffffff";n&&r?a="#dddddd":n&&(a="darkkhaki");var l=this.props.data.map(function(t,n){return p.default.createElement("div",{className:"drag-content-item"},p.default.createElement(i.default,null,p.default.createElement(c.default,{span:20},t.name),p.default.createElement(c.default,{span:4},p.default.createElement(u.default,{title:"陛下，高抬贵手吧?",onConfirm:function(){e.confirm(t)},onCancel:function(){e.cancel()},okText:"爱过",cancelText:"爱妃"},p.default.createElement("a",{href:"#"},p.default.createElement(f.default,{type:"delete"}))))))});return o(p.default.createElement("div",{className:"drag-content",style:{backgroundColor:a}},l))}}]),t}(),o.propTypes={connectDropTarget:g.default.func.isRequired,isOver:g.default.bool.isRequired,canDrop:g.default.bool.isRequired,data:g.default.array.isRequired},r=a))||r;t.default=h},922:function(e,t,n){(e.exports=n(38)(!1)).push([e.i,".drag-list {\n  width: 100px;\n  min-height: 100px;\n  float: left;\n}\n.drag-list .drag-list-item {\n  width: 100px;\n  padding: 10px;\n  margin-bottom: 10px;\n  background-color: #ffffff;\n  border: 1px dashed #ddd;\n}\n.drag-content {\n  width: 500px;\n  height: 500px;\n  padding: 20px;\n  float: left;\n  margin-left: 40px;\n  background-color: #ffffff;\n  border: 1px dashed #ddd;\n  overflow: auto;\n}\n.drag-content .drag-content-item {\n  margin-bottom: 10px;\n  padding: 10px;\n  border: 1px dashed #ddd;\n}\n.drag-setting {\n  width: 300px;\n  height: 400px;\n  padding: 20px;\n  float: right;\n  margin-left: 40px;\n  background-color: #ffffff;\n  border: 1px solid #f5f5f5;\n}\n",""])},923:function(e,t,n){var r=n(922);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(37)(r,o);r.locals&&(e.exports=r.locals)}}]);
//# sourceMappingURL=1.ede05324.chunk.js.map