webpackJsonp([8],{

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(91);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(40)("4772f300", content, true);

/***/ }),

/***/ 124:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "content-wrap"
  }, [_c('table', {
    staticStyle: {
      "top": "50px"
    }
  }, [_vm._m(0), _vm._v(" "), _c('tbody', _vm._l((_vm.magborLists), function(item, index) {
    return _c('tr', [_c('td', [_vm._v("\n\t\t\t\t\t" + _vm._s(++index) + "\n\t\t\t\t")]), _vm._v(" "), _c('td', [_vm._v("\n\t\t\t\t\t" + _vm._s(item.username) + "\n\t\t\t\t")]), _vm._v(" "), _c('td', [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm._f("time")(item.time)) + "\n\t\t\t\t")]), _vm._v(" "), _c('td', [_vm._v("\n\t\t\t\t\t" + _vm._s(item.content) + "\n\t\t\t\t")]), _vm._v(" "), _c('td', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.isAdmin),
        expression: "isAdmin"
      }]
    }, [_c('a', {
      staticStyle: {
        "color": "#FF3030",
        "text-decoration": "underline"
      },
      on: {
        "click": function($event) {
          _vm.deleted(item.id)
        }
      }
    }, [_vm._v("删除")])])])
  }))])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('th', [_vm._v("编号")]), _vm._v(" "), _c('th', [_vm._v("姓名")]), _vm._v(" "), _c('th', [_vm._v("时间")]), _vm._v(" "), _c('th', [_vm._v("内容")]), _vm._v(" "), _c('th', [_vm._v("操作")])])])
}]}

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(105)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(84),
  /* template */
  __webpack_require__(124),
  /* scopeId */
  "data-v-521a8dda",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 84:
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


/* harmony default export */ __webpack_exports__["default"] = ({

	data() {
		return {
			magborLists: '',
			isAdmin: false
		};
	},
	filters: {
		time(value) {
			return new Date(parseInt(value) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
		}
	},
	created() {
		this.magborList();
		if (sessionStorage.userid != '') {
			console.log(sessionStorage.userid);
			this.isAdmin = true;
		}
	},
	methods: {
		deleted(id) {
			var r = confirm("确认删除");
			if (r == true) {
				$.ajax({
					url: 'http://hjingren.cn/thinkphp/index.php/home/Msgboard/delete?id=' + id,
					type: 'get',
					dataType: 'json',
					success: res => {
						console.log(res);
						if (res.success) {
							alert(res.data);
							this.magborList();
						} else {
							alert('删除失败');
						}
					}
				});
			} else {
				return;
			}
		},
		magborList() {
			$.ajax({
				url: 'http://hjingren.cn/thinkphp/index.php/home/Msgboard/showlist',
				type: 'get',
				dataType: 'json',
				success: res => {
					console.log(res);
					if (res.success) {
						this.magborLists = res.data;
					} else {
						alert('查询失败');
					}
				}
			});
		}
	}
});

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)();
// imports


// module
exports.push([module.i, "section.content-wrap[data-v-521a8dda]{position:relative}", "", {"version":3,"sources":["E:/xuwuzheng-tfs/5173-knowledgeBase-front/src/components/magborlist.vue"],"names":[],"mappings":"AACA,sCACC,iBAAmB,CACnB","file":"magborlist.vue","sourcesContent":["\nsection.content-wrap[data-v-521a8dda]{\r\n\tposition: relative;\n}\r\n"],"sourceRoot":""}]);

// exports


/***/ })

});
//# sourceMappingURL=8.d308620cb2abe5846bd4.js.map