webpackJsonp([4],{

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(89);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(40)("f8b3048c", content, true);

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABlklEQVRYR+1XgU0DMQy8mwBGKBPQTgCdADagGwATUCaADegI3QDYoJ0AmKBlAqOTnEr9Omn/9agSxFIVKbHzztlp7oiCmdkUwC2A05LfnrU3APckF5Efc8FmNgdw5evfAMINCh8fAjjx9QXJ0cEJmNklgFcPUPbPzWD3sTRP8j3wuQPw5POjCIUQAYf+AcCSpE6yY57AZp6koI78hNw5gHHksy8BnUp9kNBo2wpjj78A8EhSe21ZmwS0WWRq0CZKAwA3OnVvCZDMNmymP4Ta/01AZVkdDQGVxMx0RY9TgppARaAiUBGoCPxNBHKUKkeRen+MAIhgNpnxF8nPDBfs9zVsSwbdv5fn+DrgfCkfcT9ZiIIjJn3RnZSSlEaI6HZiuGsAA5IqUeQnuv4rCcxITvzKTSPK7WudEtDGLwB0ujOSGrfMzOQjOq5mk4CZBT7ihh+uLUOFldMFClRdpe00Cu5cnXP9qf5QnEZpy2F0Y0riNKHQ8QJswvTxCUk1444VxYbrPzVXUslpg0PUsv4z9JtHJUwb/QD2YHIw5RyX3QAAAABJRU5ErkJggg=="

/***/ }),

/***/ 122:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.login),
      expression: "login"
    }],
    attrs: {
      "id": "regist"
    }
  }, [_c('router-link', {
    attrs: {
      "to": "/menu"
    }
  }, [_c('div', {
    staticClass: "back",
    on: {
      "click": function($event) {
        _vm.back()
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "regist-box"
  }, [_c('div', {
    staticClass: "logo"
  }), _vm._v(" "), _c('form', [_c('div', {
    staticClass: "ipunt-wrap"
  }, [_c('label', {
    staticClass: "icon-user",
    attrs: {
      "for": "username"
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.username),
      expression: "username"
    }],
    attrs: {
      "type": "text",
      "id": "username",
      "placeholder": "姓名"
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
    staticClass: "icon-phone",
    attrs: {
      "for": "phone"
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.userno),
      expression: "userno"
    }],
    attrs: {
      "type": "text",
      "id": "userno",
      "placeholder": "工号"
    },
    domProps: {
      "value": (_vm.userno)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.userno = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "ipunt-wrap"
  }, [_c('label', {
    staticClass: "icon-password",
    attrs: {
      "for": "password"
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.password),
      expression: "password"
    }],
    attrs: {
      "type": "password",
      "id": "password",
      "placeholder": "密码"
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
    staticClass: "icon-password",
    attrs: {
      "for": "confimpassword"
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.confimpassword),
      expression: "confimpassword"
    }],
    attrs: {
      "type": "password",
      "id": "confimpassword",
      "placeholder": "确认密码"
    },
    domProps: {
      "value": (_vm.confimpassword)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.confimpassword = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "button"
  }, [_c('a', {
    staticClass: "gv",
    attrs: {
      "href": "javascript:;"
    },
    on: {
      "click": function($event) {
        _vm.Regist()
      }
    }
  }, [_vm._v("注册")])]), _vm._v(" "), _c('div', {
    staticClass: "toregist"
  }, [_vm._v("\n\t\t\t\t已有账号？"), _c('router-link', {
    attrs: {
      "to": "/customer-login"
    }
  }, [_c('a', {
    attrs: {
      "href": "javascript:;"
    }
  }, [_vm._v("去登录")])])], 1)])]), _vm._v(" "), _c('v-dialog', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.dialog),
      expression: "dialog"
    }],
    attrs: {
      "dialog-msg": _vm.dialogMsg
    },
    on: {
      "confirm": _vm.confirm
    }
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(103)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(80),
  /* template */
  __webpack_require__(122),
  /* scopeId */
  "data-v-2b9b080e",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 58:
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


/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        dialogMsg: String
    },
    data() {
        return {};
    },
    methods: {
        confirm() {
            this.$emit('confirm');
        }
    }
});

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)();
// imports


// module
exports.push([module.i, ".dialog[data-v-072118cb]{z-index:100}.mask[data-v-072118cb]{position:fixed;z-index:1000;top:0;right:0;left:0;bottom:0;background:rgba(0,0,0,.6)}.dialog-wrap[data-v-072118cb]{position:fixed;z-index:5000;width:80%;max-width:300px;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background-color:#fff;text-align:center;border-radius:3px;overflow:hidden}.text[data-v-072118cb]{min-height:40px;font-size:15px;line-height:1.3;word-wrap:break-word;word-break:break-all;padding:2.7em 20px 1.7em;color:#353535}.btn-wrap[data-v-072118cb]{position:relative;line-height:48px;font-size:18px;color:#0457b7}.btn-wrap[data-v-072118cb]:after{content:\" \";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #d5d5d6;color:#d5d5d6;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}", "", {"version":3,"sources":["E:/xuwuzheng-tfs/5173-knowledgeBase-front/src/components/Dialog.vue"],"names":[],"mappings":"AACA,yBACI,WAAa,CAChB,AACD,uBACI,eAAgB,AAChB,aAAc,AACd,MAAO,AACP,QAAS,AACT,OAAQ,AACR,SAAU,AACV,yBAA+B,CAClC,AACD,8BACI,eAAgB,AAChB,aAAc,AACd,UAAW,AACX,gBAAiB,AACjB,QAAS,AACT,SAAU,AACV,uCAAyC,AACzC,+BAAiC,AACjC,sBAA0B,AAC1B,kBAAmB,AACnB,kBAAmB,AACnB,eAAiB,CACpB,AACD,uBACI,gBAAiB,AACjB,eAAgB,AAChB,gBAAiB,AACjB,qBAAsB,AACtB,qBAAsB,AACtB,yBAA0B,AAC1B,aAAe,CAClB,AACD,2BACI,kBAAmB,AACnB,iBAAkB,AAClB,eAAgB,AAChB,aAAe,CAClB,AACD,iCACI,YAAa,AACb,kBAAmB,AACnB,OAAQ,AACR,MAAO,AACP,QAAS,AACT,WAAY,AACZ,6BAA8B,AAC9B,cAAe,AACf,6BAA8B,AAC9B,qBAAsB,AACtB,6BAA+B,AAC/B,oBAAuB,CAC1B","file":"Dialog.vue","sourcesContent":["\n.dialog[data-v-072118cb] {\n    z-index: 100;\n}\n.mask[data-v-072118cb] {\n    position: fixed;\n    z-index: 1000;\n    top: 0;\n    right: 0;\n    left: 0;\n    bottom: 0;\n    background: rgba(0, 0, 0, 0.6);\n}\n.dialog-wrap[data-v-072118cb] {\n    position: fixed;\n    z-index: 5000;\n    width: 80%;\n    max-width: 300px;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n    background-color: #FFFFFF;\n    text-align: center;\n    border-radius: 3px;\n    overflow: hidden;\n}\n.text[data-v-072118cb] {\n    min-height: 40px;\n    font-size: 15px;\n    line-height: 1.3;\n    word-wrap: break-word;\n    word-break: break-all;\n    padding: 2.7em 20px 1.7em;\n    color: #353535;\n}\n.btn-wrap[data-v-072118cb] {\n    position: relative;\n    line-height: 48px;\n    font-size: 18px;\n    color: #0457b7;\n}\n.btn-wrap[data-v-072118cb]::after{\n    content: \" \";\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    height: 1px;\n    border-top: 1px solid #D5D5D6;\n    color: #D5D5D6;\n    -webkit-transform-origin: 0 0;\n    transform-origin: 0 0;\n    -webkit-transform: scaleY(0.5);\n    transform: scaleY(0.5);\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(61);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(40)("eb8a8bdc", content, true);

/***/ }),

/***/ 65:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACcElEQVRYR8WXzXETQRCFv67iDkSAMjBEgInAEAF2BNgRYCLARIB8g5MhApsIbJ+5mAjgyK2pt9WztVrNzsxKKtQXValmp9+8fv1n7Nms1b+7PwGOgNfAc2Ax+vYBuAO+Ad/N7E/L3VUA7i5H74E3wE04uDEzOewtzh0GQP1eAWc1IEUA7n4OHANL4KJ2WUITbJ3Gt5/N7MMUG1kAccFH4IVeNH5tC7U6E6woJLdTbKwBCOfXwL2Z6fVbm7uLwQPg1ZjFHAAdZlfOB2HRvW5mJ8MXrQCImItyqbxqwZZiLIFWzd27LDEzaauzHkDESyo/bIm5uwuklK6Uk+CqFj4EYpFCMQQgih6G6KZudHdpQ684N7MuZK0WLAtAp68OQFCpvO6RFZxfRK4rVHrNLAtfv4GnYiEBEBpdqCqXtfhQlOsbnW2qdLnL3F2pKS0sE4D+j4kPZse7REuEsHtwAiD6s+LbJt4FNlXeVc4XCYDyM1cTUineKN4VFjqfkwDc/SfwCPgC/J2ltMzhcT9w92YAX3cEoC8+kXllAHHov4WgJEKlpnJ/dtGZI8KWNFTFuzazs231kEvD1kIkEI81He26EGne218pDsHtrxkFgK46zWzH0s5Vqy6K7XiQdkdmplmwatGglqUmNrykOJCkgzG/rY1OVTSVA3Hv2qg3NZQqFLfj+W1TEOFcHVUNb6WNl8ZyFR9Nskq5lSWkFUjEXDPEPXCaS92WxUTznnaET625H9p4p10gFpqVPjB8QMtqphohNt7GWibl/5hYzV6mcQ24nHr1LAADcQqI+kJaTp+NQvFrsJxq3Goa2aoMtMZ703P/AIiYeDAbqclmAAAAAElFTkSuQmCC"

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/logo.8878e7d.png";

/***/ }),

/***/ 67:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACKUlEQVRYR7WX7VEeMQyEdytIqIBQAaSCQAUJFQAVABUkVABUEFJB0gGUABUQOoAKNrOZuxufX3/ief33TtJjWVrLxMCSdGBzko/vdcMeQ0kfAZwD+Abgf/BgGeIPgFuSr61+mwEknQK4BmCI0nLwS5J3LRBNAJLs7KTFYfDPHcmzmk0VQNLFtPPY1xOA+ex9HPuJYM7ETQmiCCDpE4DnyIEDn8aFNxWkMxWD7JH8m4OoAcSpd/DDUpFJegDwJQj4i6TrJ7lqAIqsirvxv1OneMcfAtudHHQWQNIhgPvWnYSgiaI9IunMbKwSgNP2M7CoFtT879SyTbYlgB8AvgcAxyQtNNWVyN4VSfvrykAMkHUSe5XUbLuRgamdLLeuAbfhvKxwrZpvXQgV00XpGrBMr3ysACRZ439Xczz2w+ooYwDvMmyfsVBp61eSO/OnBSCjetsAsM/P81GEAHHfl4K/ALiYu2I6Omv+biPxogvvAXhzccbKllHAHM8QQLYdCzdnDDIEkJXVhABtJQNZRexo46EMPJA8Sm1NkqX6a0MhDgHY/w3JyzBQQn5LHMMAdr6qBUnx7NANkBq/mpz4p06ATSGanPRI8ZKBThV9I7lcVPFd0DN+L3XQef6rGTEG8DH4umy9kMKxvKH4YRU9CKfk1DywzSv5LH4xJUeySVB8HK2ZqO3eO/dbYmOkK82ELhS/ipyR1KunFtTf/Y5wUNdL8sFafZq1RBn55x9WkQYwt0DQIgAAAABJRU5ErkJggg=="

/***/ }),

/***/ 68:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABwklEQVRYR9WX4VHDMAyF35sAmICOABMAE9BOAExAN4ANYAPaDboB7QbtBnSDMoG4xyWc29ixnJTLVX+anhXpsyxLCjGwcGD/KAYws1sADwD0OwKwA7AEsCA5L91QEYCZvQN4bnHyBWBCcu0FcQOY2QLAvcOwInLnhXABmNkUwJvDea2yJnnt0fcCaFdnHoOBjo5CUWuVLECVdJ85Q5H1OcnH3HseABn5yBmKrK9I6qb0jsDgANrFcEeg+JlZlyR8IjnrfQQVwCuAl5yxYH1LUlUyK9kkrC2YmcrtTdYi8K0yfdRCVEXhHIBKsfpASrYAxl7nMuKOQBAJJaVuxjgoThsAM5ICLJJigCLrDuXTAahKspJQuXCV2JwSVbIkuXIEIJ8DVSfUFZTjElHtmOaGlOQRmJkcqgKmduuF0XCi+UBADYkCHNF57TAJkQLwTj/eKEhPM+Pk8IUGQI/+74HRUdSJ+qsfA1ADaat2HkcpncaQEgPo0vm8UDuSF6FyDMC81rrokdzzuffnn8+/5t3Lg0MA3X19XJROwN5gqFWPwpoQOwINEvoOUAHS86XXekJPLVqbUvarY+r5T06nGfWMQvL1H8UDkCHD3aX0AAAAAElFTkSuQmCC"

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(63)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(58),
  /* template */
  __webpack_require__(71),
  /* scopeId */
  "data-v-072118cb",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 71:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "dialog"
  }, [_c('div', {
    staticClass: "mask"
  }), _vm._v(" "), _c('div', {
    staticClass: "dialog-wrap"
  }, [_c('div', {
    staticClass: "text"
  }, [_vm._v("\n            " + _vm._s(_vm.dialogMsg) + "\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "btn-wrap",
    on: {
      "click": _vm.confirm
    }
  }, [_vm._v("\n            知道了\n        ")])])])
},staticRenderFns: []}

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Dialog__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Dialog__);
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
	props: {
		login: {
			type: Boolean
		},
		admin: {
			type: Boolean
		},
		customer: {
			type: Boolean
		}
	},
	data() {
		return {
			username: '',
			userno: '',
			password: '',
			confimpassword: '',
			dialog: false,
			dialogMsg: ''
		};
	},
	mounted() {},

	methods: {
		confirm() {
			this.dialog = false;
		},
		back() {
			this.$emit('back');
		},
		Regist() {
			if (!this.username || !this.userno || !this.password || !this.confimpassword) {
				this.dialog = true;
				this.dialogMsg = '请填写完整';
				return;
			}
			if (this.password !== this.confimpassword) {
				this.dialog = true;
				this.dialogMsg = '两次密码不相等';
				return;
			}
			// if (!(/^1[34578]\d{9}$/).test(this.phone)) {
			// 	this.dialog = true
			// 	this.dialogMsg = '您的手机号码输入有误，请重新输入'
			// 	return
			// }
			this.$http.post(this.$CONSTANTS.APIUser + 'addUser', {
				userName: this.username,
				userNo: this.userno,
				userPassword: this.password
			}).then(res => {
				if (res.body.code == 200) {
					this.dialog = true;
					this.dialogMsg = '注册成功，正在前往登录';
					this.$router.push('/customer-login');
				} else {
					this.dialog = true;
					this.dialogMsg = '注册失败';
				}
			});
		}
	},
	components: {
		'v-dialog': __WEBPACK_IMPORTED_MODULE_0__components_Dialog___default.a
	}
});

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)();
// imports


// module
exports.push([module.i, "#regist[data-v-2b9b080e]{height:100%;overflow:hidden;position:relative}.back[data-v-2b9b080e]{position:fixed;left:20px;top:20px;width:30px;height:30px;background:url(" + __webpack_require__(65) + ") no-repeat;background-size:cover;cursor:pointer}.gv[data-v-2b9b080e]{text-decoration:none;background:url(" + __webpack_require__(41) + ") repeat 0 0;width:130px;height:43px;display:block;text-align:center;line-height:43px;cursor:pointer;float:left;margin:10px 2px;font:18px/43px microsoft yahei;color:#066197}a.gv[data-v-2b9b080e]:hover{background:url(" + __webpack_require__(41) + ") repeat 0 -43px;color:#1d7eb8;-webkit-box-shadow:0 0 6px #1d7eb8;transition-duration:.5s}.regist-box[data-v-2b9b080e]{width:700px;padding:50px;margin:40px auto;display:flex;z-index:10001}.regist-box .logo[data-v-2b9b080e]{width:300px;height:120px;margin:40px;background:url(" + __webpack_require__(66) + ") no-repeat;background-size:cover}.ipunt-wrap label[data-v-2b9b080e]{display:inline-block;width:25px;height:25px;vertical-align:middle;margin-right:10px;background-size:cover}.icon-user[data-v-2b9b080e]{background:url(" + __webpack_require__(68) + ") no-repeat}.icon-phone[data-v-2b9b080e]{background:url(" + __webpack_require__(116) + ") no-repeat}.icon-password[data-v-2b9b080e]{background:url(" + __webpack_require__(67) + ") no-repeat}.ipunt-wrap input[data-v-2b9b080e]{border:none;outline:none;background:none;border-bottom:1px solid #fff;margin-top:30px;width:200px;height:30px;line-height:30px;color:#fff;font-size:14px;padding:0 5px}.button[data-v-2b9b080e]{margin-top:30px;margin-left:60px}.toregist[data-v-2b9b080e]{font-size:12px;float:right;padding-top:20px;color:#fff;z-index:10001}.toregist a[data-v-2b9b080e]{color:#066197;text-decoration:none}", "", {"version":3,"sources":["E:/xuwuzheng-tfs/5173-knowledgeBase-front/src/components/Regist.vue"],"names":[],"mappings":"AACA,yBACC,YAAa,AACb,gBAAiB,AACjB,iBAAmB,CACnB,AACD,uBACC,eAAgB,AAChB,UAAW,AACX,SAAU,AACV,WAAY,AACZ,YAAa,AACb,mDAAuD,AACvD,sBAAuB,AACvB,cAAgB,CAChB,AACD,qBACC,qBAAsB,AACnB,oDAA8D,AAC9D,YAAa,AACb,YAAa,AACb,cAAe,AACf,kBAAmB,AACnB,iBAAkB,AAClB,eAAgB,AAChB,WAAY,AACZ,gBAA0B,AAC1B,+BAAkC,AAClC,aAAe,CAClB,AACD,4BACC,wDAAgE,AAChE,cAAc,AACd,mCAAoC,AACpC,uBAA0B,CAC1B,AACD,6BACC,YAAa,AACb,aAAc,AACd,iBAAkB,AAClB,aAAc,AACd,aAAe,CACf,AACD,mCACC,YAAa,AACb,aAAc,AACd,YAAa,AACb,mDAAuD,AAEvD,qBAAuB,CACvB,AACD,mCACC,qBAAsB,AACtB,WAAY,AACZ,YAAa,AACb,sBAAuB,AACvB,kBAAmB,AACnB,qBAAuB,CACvB,AACD,4BACC,kDAAuD,CACvD,AACD,6BACC,kDAAwD,CACxD,AACD,gCACC,kDAA2D,CAC3D,AACD,mCACC,YAAa,AACb,aAAc,AACd,gBAAiB,AACjB,6BAA8B,AAC9B,gBAAiB,AACjB,YAAa,AACb,YAAa,AACb,iBAAkB,AAElB,WAAY,AACZ,eAAgB,AAChB,aAAe,CACf,AACD,yBACC,gBAAiB,AACd,gBAAiB,CACpB,AACD,2BACC,eAAgB,AAChB,YAAa,AACb,iBAAkB,AAClB,WAAY,AACZ,aAAe,CACf,AACD,6BACC,cAAe,AACf,oBAAsB,CACtB","file":"Regist.vue","sourcesContent":["\n#regist[data-v-2b9b080e] {\r\n\theight: 100%;\r\n\toverflow: hidden;\r\n\tposition: relative;\n}\n.back[data-v-2b9b080e]{\r\n\tposition: fixed;\r\n\tleft: 20px;\r\n\ttop: 20px;\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tbackground: url('../assets/images/back.png') no-repeat;\r\n\tbackground-size: cover;\r\n\tcursor: pointer;\n}\n.gv[data-v-2b9b080e] {\r\n\ttext-decoration: none;\r\n    background: url('../assets/images/nav_gv.png') repeat 0px 0px;\r\n    width: 130px;\r\n    height: 43px;\r\n    display: block;\r\n    text-align: center;\r\n    line-height: 43px;\r\n    cursor: pointer;\r\n    float: left;\r\n    margin: 10px 2px 10px 2px;\r\n    font: 18px/43px 'microsoft yahei';\r\n    color: #066197;\n}\na.gv[data-v-2b9b080e]:hover { \r\n\tbackground: url('../assets/images/nav_gv.png') repeat 0px -43px; \r\n\tcolor:#1d7eb8;\r\n\t-webkit-box-shadow: 0 0 6px #1d7eb8;\r\n\ttransition-duration: 0.5s;\n}\n.regist-box[data-v-2b9b080e] {\r\n\twidth: 700px;\r\n\tpadding: 50px;\r\n\tmargin: 40px auto;\r\n\tdisplay: flex;\r\n\tz-index: 10001;\n}\n.regist-box .logo[data-v-2b9b080e]{\r\n\twidth: 300px;\r\n\theight: 120px;\r\n\tmargin: 40px;\r\n\tbackground: url('../assets/images/logo.png') no-repeat;\r\n\t/* background: red; */\r\n\tbackground-size: cover;\n}\n.ipunt-wrap label[data-v-2b9b080e]{\r\n\tdisplay: inline-block;\r\n\twidth: 25px;\r\n\theight: 25px;\r\n\tvertical-align: middle;\r\n\tmargin-right: 10px;\r\n\tbackground-size: cover;\n}\n.icon-user[data-v-2b9b080e]{\r\n\tbackground: url('../assets/images/user.png') no-repeat;\n}\n.icon-phone[data-v-2b9b080e]{\r\n\tbackground: url('../assets/images/phone.png') no-repeat;\n}\n.icon-password[data-v-2b9b080e]{\r\n\tbackground: url('../assets/images/password.png') no-repeat;\n}\n.ipunt-wrap input[data-v-2b9b080e]{\r\n\tborder: none;\r\n\toutline: none;\r\n\tbackground: none;\r\n\tborder-bottom: 1px solid #fff;\r\n\tmargin-top: 30px;\r\n\twidth: 200px;\r\n\theight: 30px;\r\n\tline-height: 30px;\r\n\t/* text-align: center; */\r\n\tcolor: #fff;\r\n\tfont-size: 14px;\r\n\tpadding: 0 5px;\n}\n.button[data-v-2b9b080e] {\r\n\tmargin-top: 30px;\r\n    margin-left: 60px\n}\n.toregist[data-v-2b9b080e]{\r\n\tfont-size: 12px;\r\n\tfloat: right;\r\n\tpadding-top: 20px;\r\n\tcolor: #fff;\r\n\tz-index: 10001;\n}\n.toregist a[data-v-2b9b080e]{\r\n\tcolor: #066197;\r\n\ttext-decoration: none;\n}\r\n\r\n"],"sourceRoot":""}]);

// exports


/***/ })

});
//# sourceMappingURL=4.d31df87ec32ae5c5b378.js.map