var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('app',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    var App = (function () {
        function App(tq) {
            this.message = 'Hello World!';
            this.taskQueue = tq;
        }
        App.prototype.attached = function () {
            var _this = this;
            this.taskQueue.queueMicroTask(function () {
                $(_this.activeHeader).trigger('click');
            });
        };
        return App;
    }());
    App = __decorate([
        aurelia_framework_1.inject(aurelia_framework_1.TaskQueue),
        __metadata("design:paramtypes", [Object])
    ], App);
    exports.App = App;
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Promise.config({
        warnings: {
            wForgottenReturn: false
        }
    });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources')
            .plugin('aurelia-materialize-bridge', function (b) { return b.useAll(); });
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    function configure(config) {
    }
    exports.configure = configure;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"materialize-css/css/materialize.css\"></require>\n  <h1>${message}</h1>\n  <div class=\"collapsible-popout\">\n    <ul md-collapsible=\"accordion.bind: accordion; popout: true;\">\n      <li>\n        <div class=\"collapsible-header\"><i class=\"mdi-image-filter-drama\"></i>First</div>\n        <div class=\"collapsible-body\"><p>Lorem ipsum dolor sit amet.</p></div>\n      </li>\n      <li>\n        <div class=\"collapsible-header\" ref=\"activeHeader\"><i class=\"mdi-maps-place\"></i>Second</div>\n        <div class=\"collapsible-body\"><p>Lorem ipsum dolor sit amet.</p></div>\n      </li>\n      <li>\n        <div class=\"collapsible-header\"><i class=\"mdi-maps-place\"></i>Third</div>\n        <div class=\"collapsible-body\"><p>Lorem ipsum dolor sit amet.</p></div>\n      </li>\n    </ul>\n    <p>\n      <md-checkbox md-checked.bind=\"accordion\">use accordion</md-checkbox>\n    </p>\n  </div>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map