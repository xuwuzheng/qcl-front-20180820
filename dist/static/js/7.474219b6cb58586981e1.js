webpackJsonp([7],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(86);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(40)("14c9eb60", content, true);

/***/ }),

/***/ 119:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "content-wrap"
  }, [_c('table', {
    staticStyle: {
      "top": "50px"
    }
  }, [_c('thead', [_c('tr', _vm._l((_vm.thead), function(item) {
    return _c('th', [_vm._v("\n\t\t\t\t\t" + _vm._s(item) + "\n\t\t\t\t")])
  }))]), _vm._v(" "), _c('tbody', _vm._l((_vm.userList), function(item, index) {
    return _c('tr', [_c('td', [_vm._v("\n\t\t\t\t\t" + _vm._s(++index) + "\n\t\t\t\t")]), _vm._v(" "), _c('td', [_vm._v("\n\t\t\t\t\t" + _vm._s(item.username) + "\n\t\t\t\t")]), _vm._v(" "), _c('td', [_vm._v("\n\t\t\t\t\t" + _vm._s(item.sex) + "\n\t\t\t\t")]), _vm._v(" "), _c('td', [_vm._v("\n\t\t\t\t\t" + _vm._s(item.password) + "\n\t\t\t\t")]), _vm._v(" "), _c('td', [_vm._v("\n\t\t\t\t\t" + _vm._s(item.idcard) + "\n\t\t\t\t")]), _vm._v(" "), _c('td', [_vm._v("\n\t\t\t\t\t" + _vm._s(item.bdate) + "\n\t\t\t\t")]), _vm._v(" "), _c('td', [_vm._v("\n\t\t\t\t\t" + _vm._s(item.email) + "\n\t\t\t\t")]), _vm._v(" "), _c('td', [_vm._v("\n\t\t\t\t\t" + _vm._s(item.address) + "\n\t\t\t\t")]), _vm._v(" "), _c('td', [_vm._v("\n\t\t\t\t\t" + _vm._s(item.phone) + "\n\t\t\t\t")])])
  }))])])
},staticRenderFns: []}

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(100)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(85),
  /* template */
  __webpack_require__(119),
  /* scopeId */
  "data-v-00cd81e8",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({

	data() {
		return {
			userList: '',
			thead: ['编号', '姓名', '性别', '密码', '身份证号', '出生日期', '邮箱', '通信地址', '电话号码']
		};
	},
	created() {
		this.UserList();
	},
	methods: {
		UserList() {
			$.ajax({
				url: 'http://hjingren.cn/thinkphp/index.php/home/User/showlist',
				type: 'get',
				dataType: 'json',
				success: res => {
					console.log(res);
					if (res.success) {
						this.userList = res.data;
					} else {
						alert('查询失败');
					}
				}
			});
		}
	}
});

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)();
// imports


// module
exports.push([module.i, "section.content-wrap[data-v-00cd81e8]{position:relative}", "", {"version":3,"sources":["E:/xuwuzheng-tfs/5173-knowledgeBase-front/src/components/userlist.vue"],"names":[],"mappings":"AACA,sCACC,iBAAmB,CACnB","file":"userlist.vue","sourcesContent":["\nsection.content-wrap[data-v-00cd81e8]{\r\n\tposition: relative;\n}\r\n"],"sourceRoot":""}]);

// exports


/***/ })

});
//# sourceMappingURL=7.474219b6cb58586981e1.js.map