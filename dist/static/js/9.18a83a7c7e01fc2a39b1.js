webpackJsonp([9],{

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(94);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(40)("60081630", content, true);

/***/ }),

/***/ 127:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "content-wrap"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isReadOnly),
      expression: "isReadOnly"
    }],
    staticClass: "button",
    on: {
      "click": function($event) {
        _vm.toupdata()
      }
    }
  }, [_vm._v("修改资料")]), _vm._v(" "), _c('div', {
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
      "placeholder": "如：张三",
      "readonly": _vm.isReadOnly,
      "autofocus": ""
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
  }, [_vm._v("身份证号:")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.idcard),
      expression: "idcard"
    }],
    attrs: {
      "type": "text",
      "placeholder": "请填17位有效身份证号",
      "readonly": _vm.isReadOnly
    },
    domProps: {
      "value": (_vm.idcard)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.idcard = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "ipunt-wrap"
  }, [_c('label', {
    attrs: {
      "for": ""
    }
  }, [_vm._v("出生日期:")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.bdate),
      expression: "bdate"
    }],
    attrs: {
      "type": "text",
      "placeholder": "如：1995-09-26",
      "readonly": _vm.isReadOnly
    },
    domProps: {
      "value": (_vm.bdate)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.bdate = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "ipunt-wrap"
  }, [_c('label', {
    attrs: {
      "for": ""
    }
  }, [_vm._v("性       别:")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.sex),
      expression: "sex"
    }],
    attrs: {
      "type": "text",
      "placeholder": "男 或 女",
      "readonly": _vm.isReadOnly
    },
    domProps: {
      "value": (_vm.sex)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.sex = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "ipunt-wrap"
  }, [_c('label', {
    attrs: {
      "for": ""
    }
  }, [_vm._v("电子邮件:")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.email),
      expression: "email"
    }],
    attrs: {
      "type": "text",
      "placeholder": "请填有效的电子邮箱",
      "readonly": _vm.isReadOnly
    },
    domProps: {
      "value": (_vm.email)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.email = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "ipunt-wrap"
  }, [_c('label', {
    attrs: {
      "for": ""
    }
  }, [_vm._v("通信地址:")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.address),
      expression: "address"
    }],
    attrs: {
      "type": "text",
      "placeholder": "请填正确的地址",
      "readonly": _vm.isReadOnly
    },
    domProps: {
      "value": (_vm.address)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.address = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "ipunt-wrap"
  }, [_c('label', {
    attrs: {
      "for": ""
    }
  }, [_vm._v("电       话:")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.phone),
      expression: "phone"
    }],
    attrs: {
      "type": "text",
      "placeholder": "请填有效的手机号",
      "readonly": _vm.isReadOnly
    },
    domProps: {
      "value": (_vm.phone)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.phone = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "pull-up"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.isReadOnly),
      expression: "!isReadOnly"
    }],
    staticClass: "ipunt-button"
  }, [_c('a', {
    staticClass: "gv",
    attrs: {
      "href": "javascript:;"
    },
    on: {
      "click": function($event) {
        _vm.updataInfo()
      }
    }
  }, [_vm._v("修改")])])])], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(108)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(83),
  /* template */
  __webpack_require__(127),
  /* scopeId */
  "data-v-786a8188",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 83:
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


/* harmony default export */ __webpack_exports__["default"] = ({

	data() {
		return {
			username: '',
			idcard: '',
			bdate: '',
			sex: '',
			email: '',
			address: '',
			phone: '',
			isReadOnly: true
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
				this.username = res.username;
				this.idcard = res.idcard;
				this.bdate = res.bdate;
				this.sex = res.sex;
				this.email = res.email;
				this.address = res.address;
				this.phone = res.phone;
			}
		});
		// this.$http.get('http://hjingren.cn/thinkphp/index.php/home/index').then((res) => {
		// 	this.username = res.data.username;
		// 	this.idcard = res.data.idcard;
		// 	this.bdate = res.data.bdate;
		// 	this.sex = res.data.sex;
		// 	this.email = res.data.email;
		// 	this.address = res.data.address;
		// 	this.phone = res.data.phone;
		// })
	},
	methods: {
		toupdata() {
			this.isReadOnly = false;
		},
		updataInfo() {
			var user = {
				id: sessionStorage.id,
				username: this.username,
				idcard: this.idcard,
				bdate: this.bdate,
				sex: this.sex,
				email: this.email,
				address: this.address,
				phone: this.phone
			};
			console.log(user);
			$.ajax({
				url: 'http://hjingren.cn/thinkphp/index.php/home/User/updatauser',
				type: 'post',
				dataType: 'json',
				data: user,
				success: res => {
					console.log(res);
					if (res.success) {
						alert('修改成功');
						this.isReadOnly = true;
					} else {
						alert('修改失败');
					}
				}
			});
		}
	}
});

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)();
// imports


// module
exports.push([module.i, "section.content-wrap[data-v-786a8188]{position:relative}section.content-wrap .button[data-v-786a8188]{position:absolute;top:20px;left:60%;width:120px;height:30px;line-height:30px;text-align:center;padding:8px 20px;font-size:20px;border-top:1px solid #fff;border-bottom:1px solid #fff;cursor:pointer}.gv[data-v-786a8188]{text-decoration:none;background:url(" + __webpack_require__(41) + ") repeat 0 0;width:130px;height:43px;display:block;text-align:center;line-height:43px;cursor:pointer;float:left;margin:10px 2px;font:18px/43px microsoft yahei;color:#066197}a.gv[data-v-786a8188]:hover{background:url(" + __webpack_require__(41) + ") repeat 0 -43px;color:#1d7eb8;-webkit-box-shadow:0 0 6px #1d7eb8;transition-duration:.5s}.from-wrap[data-v-786a8188]{padding-left:100px;margin-top:20px}.ipunt-wrap label[data-v-786a8188]{width:100px;text-align:center;display:inline-block}.ipunt-wrap input[data-v-786a8188]{border:none;outline:none;background:none;border-bottom:1px solid #fff;margin-bottom:30px;width:300px;height:30px;line-height:30px;color:#fff;font-size:18px;padding:0 5px}.ipunt-button[data-v-786a8188]{margin-left:150px}.pull-up-enter-active[data-v-786a8188],.pull-up-leave-active[data-v-786a8188]{transition:all .5s}.pull-up-enter[data-v-786a8188],.pull-up-leave-active[data-v-786a8188]{opacity:0;transform:translateY(-100px)}", "", {"version":3,"sources":["E:/xuwuzheng-tfs/5173-knowledgeBase-front/src/components/Userinfo.vue"],"names":[],"mappings":"AACA,sCACC,iBAAmB,CACnB,AACD,8CACC,kBAAmB,AACnB,SAAU,AACV,SAAU,AACV,YAAa,AACb,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,iBAAkB,AAElB,eAAgB,AAChB,0BAA2B,AAC3B,6BAA8B,AAC9B,cAAgB,CAChB,AACD,qBACC,qBAAsB,AACnB,oDAA8D,AAC9D,YAAa,AACb,YAAa,AACb,cAAe,AACf,kBAAmB,AACnB,iBAAkB,AAClB,eAAgB,AAChB,WAAY,AACZ,gBAA0B,AAC1B,+BAAkC,AAClC,aAAe,CAClB,AACD,4BACC,wDAAgE,AAChE,cAAc,AACd,mCAAoC,AACpC,uBAA0B,CAC1B,AACD,4BACC,mBAAoB,AACpB,eAAiB,CACjB,AACD,mCACC,YAAa,AACb,kBAAmB,AACnB,oBAAsB,CACtB,AACD,mCACC,YAAa,AACb,aAAc,AACd,gBAAiB,AACjB,6BAA8B,AAC9B,mBAAoB,AACpB,YAAa,AACb,YAAa,AACb,iBAAkB,AAClB,WAAY,AACZ,eAAgB,AAChB,aAAe,CACf,AACD,+BACI,iBAAkB,CACrB,AACD,8EACG,kBAAmB,CACrB,AACD,uEACG,UAAW,AACX,4BAA8B,CAChC","file":"Userinfo.vue","sourcesContent":["\nsection.content-wrap[data-v-786a8188]{\r\n\tposition: relative;\n}\nsection.content-wrap .button[data-v-786a8188]{\r\n\tposition: absolute;\r\n\ttop: 20px;\r\n\tleft: 60%;\r\n\twidth: 120px;\r\n\theight: 30px;\r\n\tline-height: 30px;\r\n\ttext-align: center;\r\n\tpadding: 8px 20px;\r\n\t/* margin: 30px 0; */\r\n\tfont-size: 20px;\r\n\tborder-top: 1px solid #fff;\r\n\tborder-bottom: 1px solid #fff;\r\n\tcursor: pointer;\n}\n.gv[data-v-786a8188] {\r\n\ttext-decoration: none;\r\n    background: url('../assets/images/nav_gv.png') repeat 0px 0px;\r\n    width: 130px;\r\n    height: 43px;\r\n    display: block;\r\n    text-align: center;\r\n    line-height: 43px;\r\n    cursor: pointer;\r\n    float: left;\r\n    margin: 10px 2px 10px 2px;\r\n    font: 18px/43px 'microsoft yahei';\r\n    color: #066197;\n}\na.gv[data-v-786a8188]:hover { \r\n\tbackground: url('../assets/images/nav_gv.png') repeat 0px -43px; \r\n\tcolor:#1d7eb8;\r\n\t-webkit-box-shadow: 0 0 6px #1d7eb8;\r\n\ttransition-duration: 0.5s;\n}\n.from-wrap[data-v-786a8188]{\r\n\tpadding-left: 100px;\r\n\tmargin-top: 20px;\n}\n.ipunt-wrap label[data-v-786a8188]{\r\n\twidth: 100px;\r\n\ttext-align: center;\r\n\tdisplay: inline-block;\n}\n.ipunt-wrap input[data-v-786a8188]{\r\n\tborder: none;\r\n\toutline: none;\r\n\tbackground: none;\r\n\tborder-bottom: 1px solid #fff;\r\n\tmargin-bottom: 30px;\r\n\twidth: 300px;\r\n\theight: 30px;\r\n\tline-height: 30px;\r\n\tcolor: #fff;\r\n\tfont-size: 18px;\r\n\tpadding: 0 5px;\n}\n.ipunt-button[data-v-786a8188] {\r\n    margin-left: 150px\n}\n.pull-up-enter-active[data-v-786a8188], .pull-up-leave-active[data-v-786a8188] {\r\n  \ttransition: all .5s\n}\n.pull-up-enter[data-v-786a8188], .pull-up-leave-active[data-v-786a8188] {\r\n  \topacity: 0;\r\n  \ttransform: translateY(-100px);\n}\r\n\r\n"],"sourceRoot":""}]);

// exports


/***/ })

});
//# sourceMappingURL=9.18a83a7c7e01fc2a39b1.js.map