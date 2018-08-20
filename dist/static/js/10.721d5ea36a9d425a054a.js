webpackJsonp([10],{

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(87);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(40)("781646e3", content, true);

/***/ }),

/***/ 120:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "content-wrap"
  }, [_c('div', {
    staticClass: "from-wrap"
  }, [_c('div', {
    staticClass: "ipunt-wrap"
  }, [_c('label', {
    attrs: {
      "for": ""
    }
  }, [_vm._v("姓       名:")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.username),
      expression: "username"
    }],
    attrs: {
      "type": "text",
      "disabled": "true"
    },
    domProps: {
      "value": (_vm.username)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.username = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "ipunt-wrap"
  }, [_c('label', {
    attrs: {
      "for": ""
    }
  }, [_vm._v("新  密  码:")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.password),
      expression: "password"
    }],
    attrs: {
      "type": "password"
    },
    domProps: {
      "value": (_vm.password)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.password = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "ipunt-wrap"
  }, [_c('label', {
    attrs: {
      "for": ""
    }
  }, [_vm._v("重复密码:")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.cfmpaaaword),
      expression: "cfmpaaaword"
    }],
    attrs: {
      "type": "password"
    },
    domProps: {
      "value": (_vm.cfmpaaaword)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.cfmpaaaword = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "ipunt-button"
  }, [_c('a', {
    staticClass: "gv",
    attrs: {
      "href": "javascript:;"
    },
    on: {
      "click": function($event) {
        _vm.updatapassword()
      }
    }
  }, [_vm._v("修改")])])])])
},staticRenderFns: []}

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(101)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(79),
  /* template */
  __webpack_require__(120),
  /* scopeId */
  "data-v-111ea44e",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 79:
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


/* harmony default export */ __webpack_exports__["default"] = ({

	data() {
		return {
			username: '',
			password: '',
			cfmpaaaword: ''
		};
	},
	created() {
		var user = {
			uid: sessionStorage.id
		};
		console.log(user);
		$.ajax({
			url: 'http://hjingren.cn/thinkphp/index.php/home/index',
			type: 'post',
			dataType: 'json',
			data: user,
			success: res => {
				console.log(res);
				this.username = res.username;
			}
		});
	},
	methods: {
		updatapassword() {
			if (this.password == '') {
				alert('密码不能为空');
				return;
			}
			if (this.password != this.cfmpaaaword) {
				alert('两次密码不一致');
				return;
			}
			var user = {
				id: sessionStorage.id,
				password: this.password
			};
			console.log(user);
			$.ajax({
				url: 'http://hjingren.cn/thinkphp/index.php/home/User/updatapassword',
				type: 'post',
				dataType: 'json',
				data: user,
				success: res => {
					console.log(res);
					if (res.success) {
						alert('修改成功,请前往登录。');
						if (sessionStorage.userid) {
							sessionStorage.id = '';
							sessionStorage.userid = '';
							sessionStorage.name = '';
						} else {
							sessionStorage.id = '';
							sessionStorage.name = '';
						}
						this.$router.push('/menu');
					} else {
						alert('修改失败');
					}
				}
			});
		}
	}
});

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)();
// imports


// module
exports.push([module.i, "section.content-wrap[data-v-111ea44e]{position:relative}.gv[data-v-111ea44e]{text-decoration:none;background:url(" + __webpack_require__(41) + ") repeat 0 0;width:130px;height:43px;display:block;text-align:center;line-height:43px;cursor:pointer;float:left;margin:10px 2px;font:18px/43px microsoft yahei;color:#066197}a.gv[data-v-111ea44e]:hover{background:url(" + __webpack_require__(41) + ") repeat 0 -43px;color:#1d7eb8;-webkit-box-shadow:0 0 6px #1d7eb8;transition-duration:.5s}.from-wrap[data-v-111ea44e]{padding-left:300px;margin-top:100px}.ipunt-wrap label[data-v-111ea44e]{width:100px;text-align:center;display:inline-block}.ipunt-wrap input[data-v-111ea44e]{border:none;outline:none;background:none;border-bottom:1px solid #fff;margin-bottom:30px;width:300px;height:30px;line-height:30px;color:#fff;font-size:18px;padding:0 5px}.ipunt-button[data-v-111ea44e]{margin-left:150px}", "", {"version":3,"sources":["E:/xuwuzheng-tfs/5173-knowledgeBase-front/src/components/Modifypass.vue"],"names":[],"mappings":"AACA,sCACC,iBAAmB,CACnB,AACD,qBACC,qBAAsB,AACnB,oDAA8D,AAC9D,YAAa,AACb,YAAa,AACb,cAAe,AACf,kBAAmB,AACnB,iBAAkB,AAClB,eAAgB,AAChB,WAAY,AACZ,gBAA0B,AAC1B,+BAAkC,AAClC,aAAe,CAClB,AACD,4BACC,wDAAgE,AAChE,cAAc,AACd,mCAAoC,AACpC,uBAA0B,CAC1B,AACD,4BACC,mBAAoB,AACpB,gBAAkB,CAClB,AACD,mCACC,YAAa,AACb,kBAAmB,AACnB,oBAAsB,CACtB,AACD,mCACC,YAAa,AACb,aAAc,AACd,gBAAiB,AACjB,6BAA8B,AAC9B,mBAAoB,AACpB,YAAa,AACb,YAAa,AACb,iBAAkB,AAClB,WAAY,AACZ,eAAgB,AAChB,aAAe,CACf,AACD,+BACI,iBAAkB,CACrB","file":"Modifypass.vue","sourcesContent":["\nsection.content-wrap[data-v-111ea44e]{\r\n\tposition: relative;\n}\n.gv[data-v-111ea44e] {\r\n\ttext-decoration: none;\r\n    background: url('../assets/images/nav_gv.png') repeat 0px 0px;\r\n    width: 130px;\r\n    height: 43px;\r\n    display: block;\r\n    text-align: center;\r\n    line-height: 43px;\r\n    cursor: pointer;\r\n    float: left;\r\n    margin: 10px 2px 10px 2px;\r\n    font: 18px/43px 'microsoft yahei';\r\n    color: #066197;\n}\na.gv[data-v-111ea44e]:hover { \r\n\tbackground: url('../assets/images/nav_gv.png') repeat 0px -43px; \r\n\tcolor:#1d7eb8;\r\n\t-webkit-box-shadow: 0 0 6px #1d7eb8;\r\n\ttransition-duration: 0.5s;\n}\n.from-wrap[data-v-111ea44e]{\r\n\tpadding-left: 300px;\r\n\tmargin-top: 100px;\n}\n.ipunt-wrap label[data-v-111ea44e]{\r\n\twidth: 100px;\r\n\ttext-align: center;\r\n\tdisplay: inline-block;\n}\n.ipunt-wrap input[data-v-111ea44e]{\r\n\tborder: none;\r\n\toutline: none;\r\n\tbackground: none;\r\n\tborder-bottom: 1px solid #fff;\r\n\tmargin-bottom: 30px;\r\n\twidth: 300px;\r\n\theight: 30px;\r\n\tline-height: 30px;\r\n\tcolor: #fff;\r\n\tfont-size: 18px;\r\n\tpadding: 0 5px;\n}\n.ipunt-button[data-v-111ea44e] {\r\n    margin-left: 150px\n}\r\n\r\n"],"sourceRoot":""}]);

// exports


/***/ })

});
//# sourceMappingURL=10.721d5ea36a9d425a054a.js.map