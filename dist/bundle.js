var settings = require('./settings.js'),
    // Module to control application life.
    app = require('app'),
    // Module to create native browser window.
    BrowserWindow = require('browser-window'),
    // Report crashes to our server.
    crashReporter = require('crash-reporter');

crashReporter.start();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    /*
    if (process.platform != 'darwin') {
        app.quit();
    }
    */
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function () {
    // Create the browser window.
    mainWindow = new BrowserWindow(settings.app);

    // and load the index.html of the app.
    mainWindow.loadUrl(settings.loadUrl);

    if (settings.debug) {
        // Open the DevTools.
        mainWindow.openDevTools();
    }

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });
});
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:8080/static/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	/******/"use strict";

	(function (modules) {
		// webpackBootstrap
		/******/ // The module cache
		/******/var installedModules = {};

		/******/ // The require function
		/******/function __webpack_require__(moduleId) {

			/******/ // Check if module is in cache
			/******/if (installedModules[moduleId])
				/******/return installedModules[moduleId].exports;

			/******/ // Create a new module (and put it into the cache)
			/******/var module = installedModules[moduleId] = {
				/******/exports: {},
				/******/id: moduleId,
				/******/loaded: false
				/******/ };

			/******/ // Execute the module function
			/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

			/******/ // Flag the module as loaded
			/******/module.loaded = true;

			/******/ // Return the exports of the module
			/******/return module.exports;
			/******/
		}

		/******/ // expose the modules object (__webpack_modules__)
		/******/__webpack_require__.m = modules;

		/******/ // expose the module cache
		/******/__webpack_require__.c = installedModules;

		/******/ // __webpack_public_path__
		/******/__webpack_require__.p = "http://localhost:8080/static/dist/";

		/******/ // Load entry module and return exports
		/******/return __webpack_require__(0);
		/******/
	})(
	/************************************************************************/
	/******/[
	/* 0 */
	function (module, exports) {

		/******/"use strict";

		(function (modules) {
			// webpackBootstrap
			/******/ // The module cache
			/******/var installedModules = {};

			/******/ // The require function
			/******/function __webpack_require__(moduleId) {

				/******/ // Check if module is in cache
				/******/if (installedModules[moduleId])
					/******/return installedModules[moduleId].exports;

				/******/ // Create a new module (and put it into the cache)
				/******/var module = installedModules[moduleId] = {
					/******/exports: {},
					/******/id: moduleId,
					/******/loaded: false
					/******/ };

				/******/ // Execute the module function
				/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

				/******/ // Flag the module as loaded
				/******/module.loaded = true;

				/******/ // Return the exports of the module
				/******/return module.exports;
				/******/
			}

			/******/ // expose the modules object (__webpack_modules__)
			/******/__webpack_require__.m = modules;

			/******/ // expose the module cache
			/******/__webpack_require__.c = installedModules;

			/******/ // __webpack_public_path__
			/******/__webpack_require__.p = "http://localhost:8080/static/dist/";

			/******/ // Load entry module and return exports
			/******/return __webpack_require__(0);
			/******/
		})(
		/************************************************************************/
		/******/[function (module, exports) {

			/******/"use strict";

			(function (modules) {
				// webpackBootstrap
				/******/ // The module cache
				/******/var installedModules = {};

				/******/ // The require function
				/******/function __webpack_require__(moduleId) {

					/******/ // Check if module is in cache
					/******/if (installedModules[moduleId])
						/******/return installedModules[moduleId].exports;

					/******/ // Create a new module (and put it into the cache)
					/******/var module = installedModules[moduleId] = {
						/******/exports: {},
						/******/id: moduleId,
						/******/loaded: false
						/******/ };

					/******/ // Execute the module function
					/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

					/******/ // Flag the module as loaded
					/******/module.loaded = true;

					/******/ // Return the exports of the module
					/******/return module.exports;
					/******/
				}

				/******/ // expose the modules object (__webpack_modules__)
				/******/__webpack_require__.m = modules;

				/******/ // expose the module cache
				/******/__webpack_require__.c = installedModules;

				/******/ // __webpack_public_path__
				/******/__webpack_require__.p = "http://localhost:8080/static/dist/";

				/******/ // Load entry module and return exports
				/******/return __webpack_require__(0);
				/******/
			})(
			/************************************************************************/
			[function (module, exports, __webpack_require__) {

				/* REACT HOT LOADER */if (false) {
					(function () {
						var ReactHotAPI = require("/Volumes/mac/Users/Maxim/Projects/work/launcherjs/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"),
						    RootInstanceProvider = require("/Volumes/mac/Users/Maxim/Projects/work/launcherjs/node_modules/react-hot-loader/RootInstanceProvider.js"),
						    ReactMount = require("react/lib/ReactMount"),
						    React = require("react");module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () {
							return RootInstanceProvider.getRootInstances(ReactMount);
						}, React);
					})();
				}try {
					(function () {

						'use strict';

						var _createClass = (function () {
							function defineProperties(target, props) {
								for (var i = 0; i < props.length; i++) {
									var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
								}
							}return function (Constructor, protoProps, staticProps) {
								if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
							};
						})();

						var _get = function get(_x, _x2, _x3) {
							var _again = true;_function: while (_again) {
								var object = _x,
								    property = _x2,
								    receiver = _x3;desc = parent = getter = undefined;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
									var parent = Object.getPrototypeOf(object);if (parent === null) {
										return undefined;
									} else {
										_x = parent;_x2 = property;_x3 = receiver;_again = true;continue _function;
									}
								} else if ('value' in desc) {
									return desc.value;
								} else {
									var getter = desc.get;if (getter === undefined) {
										return undefined;
									}return getter.call(receiver);
								}
							}
						};

						function _classCallCheck(instance, Constructor) {
							if (!(instance instanceof Constructor)) {
								throw new TypeError('Cannot call a class as a function');
							}
						}

						function _inherits(subClass, superClass) {
							if (typeof superClass !== 'function' && superClass !== null) {
								throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
							}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
						}

						var LoginForm = (function (_Component) {
							_inherits(LoginForm, _Component);

							function LoginForm() {
								_classCallCheck(this, LoginForm);

								_get(Object.getPrototypeOf(LoginForm.prototype), 'constructor', this).apply(this, arguments);
							}

							_createClass(LoginForm, [{
								key: 'render',
								value: function render() {
									return React.createElement('div', null, '123');
								}
							}]);

							return LoginForm;
						})(Component);

						/* REACT HOT LOADER */
					}).call(this);
				} finally {
					if (false) {
						(function () {
							var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false;if (module.exports && module.makeHot) {
								var makeExportsHot = require("/Volumes/mac/Users/Maxim/Projects/work/launcherjs/node_modules/react-hot-loader/makeExportsHot.js");if (makeExportsHot(module, require("react"))) {
									foundReactClasses = true;
								}var shouldAcceptModule = true && foundReactClasses;if (shouldAcceptModule) {
									module.hot.accept(function (err) {
										if (err) {
											console.error("Cannot not apply hot update to " + "app.jsx" + ": " + err.message);
										}
									});
								}
							}module.hot.dispose(function (data) {
								data.makeHot = module.makeHot;data.foundReactClasses = foundReactClasses;
							});
						})();
					}
				}

				/***/
			}
			/******/]);
			/***/

			/***/
		}
		/******/]);
		/***/
		/* 0 */

		/***/
	}
	/******/]);
	/***/
	/* 0 */
	/******/

/***/ }
/******/ ]);