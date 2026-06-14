"use strict";

var toast = {
  style: {
    position: 'fixed',
    left: '20px',
    top: '20px',
    color: '#fff',
    'border-radius': '5px',
    padding: '10px',
    'max-width': '300px',
    'z-index': 1000
  },
  colors: {
    success: 'green',
    error: 'tomato',
    warning: 'orange'
  },
  show: function show(text, type) {
    var styles = '';

    for (var prop in this.style) {
      styles += "".concat(prop, ":").concat(this.style[prop], ";");
    }

    styles += "background-color: ".concat(this.colors[type], ";");
    var html = "<div id = 'my-toast' class=\"my-toast ".concat(type, "\" style=\"").concat(styles, "\">\n            ").concat(text, "\n        </div>");

    if (document.getElementById('my-toast')) {
      document.getElementById('my-toast').remove();
    }

    document.body.insertAdjacentHTML('afterbegin', html);
    setTimeout(function () {
      document.getElementById('my-toast').remove();
    }, 3000);
  },
  init: function init() {
    var _this = this;

    var _loop = function _loop(type) {
      _this[type] = function (text) {
        this.show(text, type);
      };
    };

    for (var type in this.colors) {
      _loop(type);
    }
  }
};
toast.init();