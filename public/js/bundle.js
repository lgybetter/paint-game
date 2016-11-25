/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _vue = __webpack_require__(5);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _vuex = __webpack_require__(6);
	
	var _vuex2 = _interopRequireDefault(_vuex);
	
	var _vueRouter = __webpack_require__(7);
	
	var _vueRouter2 = _interopRequireDefault(_vueRouter);
	
	var _Main = __webpack_require__(8);
	
	var _Main2 = _interopRequireDefault(_Main);
	
	var _app = __webpack_require__(64);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _router = __webpack_require__(72);
	
	var _router2 = _interopRequireDefault(_router);
	
	var _index = __webpack_require__(252);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _socketEvent = __webpack_require__(260);
	
	var _socketEvent2 = _interopRequireDefault(_socketEvent);
	
	var _mutationTypes = __webpack_require__(210);
	
	var types = _interopRequireWildcard(_mutationTypes);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_vue2.default.use(_vuex2.default);
	_vue2.default.use(_Main2.default, 'http://localhost:3000');
	_vue2.default.use(_vueRouter2.default);
	
	new _vue2.default({
	  sockets: (0, _socketEvent2.default)(_index2.default, _router2.default),
	  router: _router2.default,
	  store: _index2.default,
	  render: function render(h) {
	    return h(_app2.default);
	  }
	}).$mount('#app');

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};/*!
	 * Vue.js v2.0.7
	 * (c) 2014-2016 Evan You
	 * Released under the MIT License.
	 */(function(global,factory){( false?'undefined':_typeof(exports))==='object'&&typeof module!=='undefined'?module.exports=factory(): true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):global.Vue=factory();})(undefined,function(){'use strict';/*  *//**
	 * Convert a value to a string that is actually rendered.
	 */function _toString(val){return val==null?'':(typeof val==='undefined'?'undefined':_typeof(val))==='object'?JSON.stringify(val,null,2):String(val);}/**
	 * Convert a input value to a number for persistence.
	 * If the conversion fails, return original string.
	 */function toNumber(val){var n=parseFloat(val,10);return n||n===0?n:val;}/**
	 * Make a map and return a function for checking if a key
	 * is in that map.
	 */function makeMap(str,expectsLowerCase){var map=Object.create(null);var list=str.split(',');for(var i=0;i<list.length;i++){map[list[i]]=true;}return expectsLowerCase?function(val){return map[val.toLowerCase()];}:function(val){return map[val];};}/**
	 * Check if a tag is a built-in tag.
	 */var isBuiltInTag=makeMap('slot,component',true);/**
	 * Remove an item from an array
	 */function remove$1(arr,item){if(arr.length){var index=arr.indexOf(item);if(index>-1){return arr.splice(index,1);}}}/**
	 * Check whether the object has the property.
	 */var hasOwnProperty=Object.prototype.hasOwnProperty;function hasOwn(obj,key){return hasOwnProperty.call(obj,key);}/**
	 * Check if value is primitive
	 */function isPrimitive(value){return typeof value==='string'||typeof value==='number';}/**
	 * Create a cached version of a pure function.
	 */function cached(fn){var cache=Object.create(null);return function cachedFn(str){var hit=cache[str];return hit||(cache[str]=fn(str));};}/**
	 * Camelize a hyphen-delmited string.
	 */var camelizeRE=/-(\w)/g;var camelize=cached(function(str){return str.replace(camelizeRE,function(_,c){return c?c.toUpperCase():'';});});/**
	 * Capitalize a string.
	 */var capitalize=cached(function(str){return str.charAt(0).toUpperCase()+str.slice(1);});/**
	 * Hyphenate a camelCase string.
	 */var hyphenateRE=/([^-])([A-Z])/g;var hyphenate=cached(function(str){return str.replace(hyphenateRE,'$1-$2').replace(hyphenateRE,'$1-$2').toLowerCase();});/**
	 * Simple bind, faster than native
	 */function bind$1(fn,ctx){function boundFn(a){var l=arguments.length;return l?l>1?fn.apply(ctx,arguments):fn.call(ctx,a):fn.call(ctx);}// record original fn length
	boundFn._length=fn.length;return boundFn;}/**
	 * Convert an Array-like object to a real Array.
	 */function toArray(list,start){start=start||0;var i=list.length-start;var ret=new Array(i);while(i--){ret[i]=list[i+start];}return ret;}/**
	 * Mix properties into target object.
	 */function extend(to,_from){for(var key in _from){to[key]=_from[key];}return to;}/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 */function isObject(obj){return obj!==null&&(typeof obj==='undefined'?'undefined':_typeof(obj))==='object';}/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 */var toString=Object.prototype.toString;var OBJECT_STRING='[object Object]';function isPlainObject(obj){return toString.call(obj)===OBJECT_STRING;}/**
	 * Merge an Array of Objects into a single Object.
	 */function toObject(arr){var res={};for(var i=0;i<arr.length;i++){if(arr[i]){extend(res,arr[i]);}}return res;}/**
	 * Perform no operation.
	 */function noop(){}/**
	 * Always return false.
	 */var no=function no(){return false;};/**
	 * Generate a static keys string from compiler modules.
	 */function genStaticKeys(modules){return modules.reduce(function(keys,m){return keys.concat(m.staticKeys||[]);},[]).join(',');}/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 */function looseEqual(a,b){/* eslint-disable eqeqeq */return a==b||(isObject(a)&&isObject(b)?JSON.stringify(a)===JSON.stringify(b):false);/* eslint-enable eqeqeq */}function looseIndexOf(arr,val){for(var i=0;i<arr.length;i++){if(looseEqual(arr[i],val)){return i;}}return-1;}/*  */var config={/**
	   * Option merge strategies (used in core/util/options)
	   */optionMergeStrategies:Object.create(null),/**
	   * Whether to suppress warnings.
	   */silent:false,/**
	   * Whether to enable devtools
	   */devtools:"development"!=='production',/**
	   * Error handler for watcher errors
	   */errorHandler:null,/**
	   * Ignore certain custom elements
	   */ignoredElements:null,/**
	   * Custom user key aliases for v-on
	   */keyCodes:Object.create(null),/**
	   * Check if a tag is reserved so that it cannot be registered as a
	   * component. This is platform-dependent and may be overwritten.
	   */isReservedTag:no,/**
	   * Check if a tag is an unknown element.
	   * Platform-dependent.
	   */isUnknownElement:no,/**
	   * Get the namespace of an element
	   */getTagNamespace:noop,/**
	   * Check if an attribute must be bound using property, e.g. value
	   * Platform-dependent.
	   */mustUseProp:no,/**
	   * List of asset types that a component can own.
	   */_assetTypes:['component','directive','filter'],/**
	   * List of lifecycle hooks.
	   */_lifecycleHooks:['beforeCreate','created','beforeMount','mounted','beforeUpdate','updated','beforeDestroy','destroyed','activated','deactivated'],/**
	   * Max circular updates allowed in a scheduler flush cycle.
	   */_maxUpdateCount:100,/**
	   * Server rendering?
	   */_isServer:"client"==='server'};/*  *//**
	 * Check if a string starts with $ or _
	 */function isReserved(str){var c=(str+'').charCodeAt(0);return c===0x24||c===0x5F;}/**
	 * Define a property.
	 */function def(obj,key,val,enumerable){Object.defineProperty(obj,key,{value:val,enumerable:!!enumerable,writable:true,configurable:true});}/**
	 * Parse simple path.
	 */var bailRE=/[^\w.$]/;function parsePath(path){if(bailRE.test(path)){return;}else{var segments=path.split('.');return function(obj){for(var i=0;i<segments.length;i++){if(!obj){return;}obj=obj[segments[i]];}return obj;};}}/*  *//* globals MutationObserver */// can we use __proto__?
	var hasProto='__proto__'in{};// Browser environment sniffing
	var inBrowser=typeof window!=='undefined'&&Object.prototype.toString.call(window)!=='[object Object]';var UA=inBrowser&&window.navigator.userAgent.toLowerCase();var isIE=UA&&/msie|trident/.test(UA);var isIE9=UA&&UA.indexOf('msie 9.0')>0;var isEdge=UA&&UA.indexOf('edge/')>0;var isAndroid=UA&&UA.indexOf('android')>0;var isIOS=UA&&/iphone|ipad|ipod|ios/.test(UA);// detect devtools
	var devtools=inBrowser&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;/* istanbul ignore next */function isNative(Ctor){return /native code/.test(Ctor.toString());}/**
	 * Defer a task to execute it asynchronously.
	 */var nextTick=function(){var callbacks=[];var pending=false;var timerFunc;function nextTickHandler(){pending=false;var copies=callbacks.slice(0);callbacks.length=0;for(var i=0;i<copies.length;i++){copies[i]();}}// the nextTick behavior leverages the microtask queue, which can be accessed
	// via either native Promise.then or MutationObserver.
	// MutationObserver has wider support, however it is seriously bugged in
	// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
	// completely stops working after triggering a few times... so, if native
	// Promise is available, we will use it:
	/* istanbul ignore if */if(typeof Promise!=='undefined'&&isNative(Promise)){var p=Promise.resolve();timerFunc=function timerFunc(){p.then(nextTickHandler);// in problematic UIWebViews, Promise.then doesn't completely break, but
	// it can get stuck in a weird state where callbacks are pushed into the
	// microtask queue but the queue isn't being flushed, until the browser
	// needs to do some other work, e.g. handle a timer. Therefore we can
	// "force" the microtask queue to be flushed by adding an empty timer.
	if(isIOS){setTimeout(noop);}};}else if(typeof MutationObserver!=='undefined'&&(isNative(MutationObserver)||// PhantomJS and iOS 7.x
	MutationObserver.toString()==='[object MutationObserverConstructor]')){// use MutationObserver where native Promise is not available,
	// e.g. PhantomJS IE11, iOS7, Android 4.4
	var counter=1;var observer=new MutationObserver(nextTickHandler);var textNode=document.createTextNode(String(counter));observer.observe(textNode,{characterData:true});timerFunc=function timerFunc(){counter=(counter+1)%2;textNode.data=String(counter);};}else{// fallback to setTimeout
	/* istanbul ignore next */timerFunc=function timerFunc(){setTimeout(nextTickHandler,0);};}return function queueNextTick(cb,ctx){var func=ctx?function(){cb.call(ctx);}:cb;callbacks.push(func);if(!pending){pending=true;timerFunc();}};}();var _Set;/* istanbul ignore if */if(typeof Set!=='undefined'&&isNative(Set)){// use native Set when available.
	_Set=Set;}else{// a non-standard Set polyfill that only works with primitive keys.
	_Set=function(){function Set(){this.set=Object.create(null);}Set.prototype.has=function has(key){return this.set[key]!==undefined;};Set.prototype.add=function add(key){this.set[key]=1;};Set.prototype.clear=function clear(){this.set=Object.create(null);};return Set;}();}/* not type checking this file because flow doesn't play well with Proxy */var hasProxy;var proxyHandlers;var initProxy;{var allowedGlobals=makeMap('Infinity,undefined,NaN,isFinite,isNaN,'+'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,'+'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,'+'require'// for Webpack/Browserify
	);hasProxy=typeof Proxy!=='undefined'&&Proxy.toString().match(/native code/);proxyHandlers={has:function has(target,key){var has=key in target;var isAllowed=allowedGlobals(key)||key.charAt(0)==='_';if(!has&&!isAllowed){warn("Property or method \""+key+"\" is not defined on the instance but "+"referenced during render. Make sure to declare reactive data "+"properties in the data option.",target);}return has||!isAllowed;}};initProxy=function initProxy(vm){if(hasProxy){vm._renderProxy=new Proxy(vm,proxyHandlers);}else{vm._renderProxy=vm;}};}/*  */var uid$2=0;/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 */var Dep=function Dep(){this.id=uid$2++;this.subs=[];};Dep.prototype.addSub=function addSub(sub){this.subs.push(sub);};Dep.prototype.removeSub=function removeSub(sub){remove$1(this.subs,sub);};Dep.prototype.depend=function depend(){if(Dep.target){Dep.target.addDep(this);}};Dep.prototype.notify=function notify(){// stablize the subscriber list first
	var subs=this.subs.slice();for(var i=0,l=subs.length;i<l;i++){subs[i].update();}};// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target=null;var targetStack=[];function pushTarget(_target){if(Dep.target){targetStack.push(Dep.target);}Dep.target=_target;}function popTarget(){Dep.target=targetStack.pop();}/*  */var queue=[];var has$1={};var circular={};var waiting=false;var flushing=false;var index=0;/**
	 * Reset the scheduler's state.
	 */function resetSchedulerState(){queue.length=0;has$1={};{circular={};}waiting=flushing=false;}/**
	 * Flush both queues and run the watchers.
	 */function flushSchedulerQueue(){flushing=true;// Sort queue before flush.
	// This ensures that:
	// 1. Components are updated from parent to child. (because parent is always
	//    created before the child)
	// 2. A component's user watchers are run before its render watcher (because
	//    user watchers are created before the render watcher)
	// 3. If a component is destroyed during a parent component's watcher run,
	//    its watchers can be skipped.
	queue.sort(function(a,b){return a.id-b.id;});// do not cache length because more watchers might be pushed
	// as we run existing watchers
	for(index=0;index<queue.length;index++){var watcher=queue[index];var id=watcher.id;has$1[id]=null;watcher.run();// in dev build, check and stop circular updates.
	if("development"!=='production'&&has$1[id]!=null){circular[id]=(circular[id]||0)+1;if(circular[id]>config._maxUpdateCount){warn('You may have an infinite update loop '+(watcher.user?"in watcher with expression \""+watcher.expression+"\"":"in a component render function."),watcher.vm);break;}}}// devtool hook
	/* istanbul ignore if */if(devtools&&config.devtools){devtools.emit('flush');}resetSchedulerState();}/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 */function queueWatcher(watcher){var id=watcher.id;if(has$1[id]==null){has$1[id]=true;if(!flushing){queue.push(watcher);}else{// if already flushing, splice the watcher based on its id
	// if already past its id, it will be run next immediately.
	var i=queue.length-1;while(i>=0&&queue[i].id>watcher.id){i--;}queue.splice(Math.max(i,index)+1,0,watcher);}// queue the flush
	if(!waiting){waiting=true;nextTick(flushSchedulerQueue);}}}/*  */var uid$1=0;/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 */var Watcher=function Watcher(vm,expOrFn,cb,options){if(options===void 0)options={};this.vm=vm;vm._watchers.push(this);// options
	this.deep=!!options.deep;this.user=!!options.user;this.lazy=!!options.lazy;this.sync=!!options.sync;this.expression=expOrFn.toString();this.cb=cb;this.id=++uid$1;// uid for batching
	this.active=true;this.dirty=this.lazy;// for lazy watchers
	this.deps=[];this.newDeps=[];this.depIds=new _Set();this.newDepIds=new _Set();// parse expression for getter
	if(typeof expOrFn==='function'){this.getter=expOrFn;}else{this.getter=parsePath(expOrFn);if(!this.getter){this.getter=function(){};"development"!=='production'&&warn("Failed watching path: \""+expOrFn+"\" "+'Watcher only accepts simple dot-delimited paths. '+'For full control, use a function instead.',vm);}}this.value=this.lazy?undefined:this.get();};/**
	 * Evaluate the getter, and re-collect dependencies.
	 */Watcher.prototype.get=function get(){pushTarget(this);var value=this.getter.call(this.vm,this.vm);// "touch" every property so they are all tracked as
	// dependencies for deep watching
	if(this.deep){traverse(value);}popTarget();this.cleanupDeps();return value;};/**
	 * Add a dependency to this directive.
	 */Watcher.prototype.addDep=function addDep(dep){var id=dep.id;if(!this.newDepIds.has(id)){this.newDepIds.add(id);this.newDeps.push(dep);if(!this.depIds.has(id)){dep.addSub(this);}}};/**
	 * Clean up for dependency collection.
	 */Watcher.prototype.cleanupDeps=function cleanupDeps(){var this$1=this;var i=this.deps.length;while(i--){var dep=this$1.deps[i];if(!this$1.newDepIds.has(dep.id)){dep.removeSub(this$1);}}var tmp=this.depIds;this.depIds=this.newDepIds;this.newDepIds=tmp;this.newDepIds.clear();tmp=this.deps;this.deps=this.newDeps;this.newDeps=tmp;this.newDeps.length=0;};/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 */Watcher.prototype.update=function update(){/* istanbul ignore else */if(this.lazy){this.dirty=true;}else if(this.sync){this.run();}else{queueWatcher(this);}};/**
	 * Scheduler job interface.
	 * Will be called by the scheduler.
	 */Watcher.prototype.run=function run(){if(this.active){var value=this.get();if(value!==this.value||// Deep watchers and watchers on Object/Arrays should fire even
	// when the value is the same, because the value may
	// have mutated.
	isObject(value)||this.deep){// set new value
	var oldValue=this.value;this.value=value;if(this.user){try{this.cb.call(this.vm,value,oldValue);}catch(e){"development"!=='production'&&warn("Error in watcher \""+this.expression+"\"",this.vm);/* istanbul ignore else */if(config.errorHandler){config.errorHandler.call(null,e,this.vm);}else{throw e;}}}else{this.cb.call(this.vm,value,oldValue);}}}};/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */Watcher.prototype.evaluate=function evaluate(){this.value=this.get();this.dirty=false;};/**
	 * Depend on all deps collected by this watcher.
	 */Watcher.prototype.depend=function depend(){var this$1=this;var i=this.deps.length;while(i--){this$1.deps[i].depend();}};/**
	 * Remove self from all dependencies' subscriber list.
	 */Watcher.prototype.teardown=function teardown(){var this$1=this;if(this.active){// remove self from vm's watcher list
	// this is a somewhat expensive operation so we skip it
	// if the vm is being destroyed or is performing a v-for
	// re-render (the watcher list is then filtered by v-for).
	if(!this.vm._isBeingDestroyed&&!this.vm._vForRemoving){remove$1(this.vm._watchers,this);}var i=this.deps.length;while(i--){this$1.deps[i].removeSub(this$1);}this.active=false;}};/**
	 * Recursively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 */var seenObjects=new _Set();function traverse(val){seenObjects.clear();_traverse(val,seenObjects);}function _traverse(val,seen){var i,keys;var isA=Array.isArray(val);if(!isA&&!isObject(val)||!Object.isExtensible(val)){return;}if(val.__ob__){var depId=val.__ob__.dep.id;if(seen.has(depId)){return;}seen.add(depId);}if(isA){i=val.length;while(i--){_traverse(val[i],seen);}}else{keys=Object.keys(val);i=keys.length;while(i--){_traverse(val[keys[i]],seen);}}}/*
	 * not type checking this file because flow doesn't play well with
	 * dynamically accessing methods on Array prototype
	 */var arrayProto=Array.prototype;var arrayMethods=Object.create(arrayProto);['push','pop','shift','unshift','splice','sort','reverse'].forEach(function(method){// cache original method
	var original=arrayProto[method];def(arrayMethods,method,function mutator(){var arguments$1=arguments;// avoid leaking arguments:
	// http://jsperf.com/closure-with-arguments
	var i=arguments.length;var args=new Array(i);while(i--){args[i]=arguments$1[i];}var result=original.apply(this,args);var ob=this.__ob__;var inserted;switch(method){case'push':inserted=args;break;case'unshift':inserted=args;break;case'splice':inserted=args.slice(2);break;}if(inserted){ob.observeArray(inserted);}// notify change
	ob.dep.notify();return result;});});/*  */var arrayKeys=Object.getOwnPropertyNames(arrayMethods);/**
	 * By default, when a reactive property is set, the new value is
	 * also converted to become reactive. However when passing down props,
	 * we don't want to force conversion because the value may be a nested value
	 * under a frozen data structure. Converting it would defeat the optimization.
	 */var observerState={shouldConvert:true,isSettingProps:false};/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 */var Observer=function Observer(value){this.value=value;this.dep=new Dep();this.vmCount=0;def(value,'__ob__',this);if(Array.isArray(value)){var augment=hasProto?protoAugment:copyAugment;augment(value,arrayMethods,arrayKeys);this.observeArray(value);}else{this.walk(value);}};/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 */Observer.prototype.walk=function walk(obj){var keys=Object.keys(obj);for(var i=0;i<keys.length;i++){defineReactive$$1(obj,keys[i],obj[keys[i]]);}};/**
	 * Observe a list of Array items.
	 */Observer.prototype.observeArray=function observeArray(items){for(var i=0,l=items.length;i<l;i++){observe(items[i]);}};// helpers
	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 */function protoAugment(target,src){/* eslint-disable no-proto */target.__proto__=src;/* eslint-enable no-proto */}/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * istanbul ignore next
	 */function copyAugment(target,src,keys){for(var i=0,l=keys.length;i<l;i++){var key=keys[i];def(target,key,src[key]);}}/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 */function observe(value){if(!isObject(value)){return;}var ob;if(hasOwn(value,'__ob__')&&value.__ob__ instanceof Observer){ob=value.__ob__;}else if(observerState.shouldConvert&&!config._isServer&&(Array.isArray(value)||isPlainObject(value))&&Object.isExtensible(value)&&!value._isVue){ob=new Observer(value);}return ob;}/**
	 * Define a reactive property on an Object.
	 */function defineReactive$$1(obj,key,val,customSetter){var dep=new Dep();var property=Object.getOwnPropertyDescriptor(obj,key);if(property&&property.configurable===false){return;}// cater for pre-defined getter/setters
	var getter=property&&property.get;var setter=property&&property.set;var childOb=observe(val);Object.defineProperty(obj,key,{enumerable:true,configurable:true,get:function reactiveGetter(){var value=getter?getter.call(obj):val;if(Dep.target){dep.depend();if(childOb){childOb.dep.depend();}if(Array.isArray(value)){dependArray(value);}}return value;},set:function reactiveSetter(newVal){var value=getter?getter.call(obj):val;if(newVal===value){return;}if("development"!=='production'&&customSetter){customSetter();}if(setter){setter.call(obj,newVal);}else{val=newVal;}childOb=observe(newVal);dep.notify();}});}/**
	 * Set a property on an object. Adds the new property and
	 * triggers change notification if the property doesn't
	 * already exist.
	 */function set(obj,key,val){if(Array.isArray(obj)){obj.length=Math.max(obj.length,key);obj.splice(key,1,val);return val;}if(hasOwn(obj,key)){obj[key]=val;return;}var ob=obj.__ob__;if(obj._isVue||ob&&ob.vmCount){"development"!=='production'&&warn('Avoid adding reactive properties to a Vue instance or its root $data '+'at runtime - declare it upfront in the data option.');return;}if(!ob){obj[key]=val;return;}defineReactive$$1(ob.value,key,val);ob.dep.notify();return val;}/**
	 * Delete a property and trigger change if necessary.
	 */function del(obj,key){var ob=obj.__ob__;if(obj._isVue||ob&&ob.vmCount){"development"!=='production'&&warn('Avoid deleting properties on a Vue instance or its root $data '+'- just set it to null.');return;}if(!hasOwn(obj,key)){return;}delete obj[key];if(!ob){return;}ob.dep.notify();}/**
	 * Collect dependencies on array elements when the array is touched, since
	 * we cannot intercept array element access like property getters.
	 */function dependArray(value){for(var e=void 0,i=0,l=value.length;i<l;i++){e=value[i];e&&e.__ob__&&e.__ob__.dep.depend();if(Array.isArray(e)){dependArray(e);}}}/*  */function initState(vm){vm._watchers=[];initProps(vm);initData(vm);initComputed(vm);initMethods(vm);initWatch(vm);}function initProps(vm){var props=vm.$options.props;if(props){var propsData=vm.$options.propsData||{};var keys=vm.$options._propKeys=Object.keys(props);var isRoot=!vm.$parent;// root instance props should be converted
	observerState.shouldConvert=isRoot;var loop=function loop(i){var key=keys[i];/* istanbul ignore else */{defineReactive$$1(vm,key,validateProp(key,props,propsData,vm),function(){if(vm.$parent&&!observerState.isSettingProps){warn("Avoid mutating a prop directly since the value will be "+"overwritten whenever the parent component re-renders. "+"Instead, use a data or computed property based on the prop's "+"value. Prop being mutated: \""+key+"\"",vm);}});}};for(var i=0;i<keys.length;i++){loop(i);}observerState.shouldConvert=true;}}function initData(vm){var data=vm.$options.data;data=vm._data=typeof data==='function'?data.call(vm):data||{};if(!isPlainObject(data)){data={};"development"!=='production'&&warn('data functions should return an object.',vm);}// proxy data on instance
	var keys=Object.keys(data);var props=vm.$options.props;var i=keys.length;while(i--){if(props&&hasOwn(props,keys[i])){"development"!=='production'&&warn("The data property \""+keys[i]+"\" is already declared as a prop. "+"Use prop default value instead.",vm);}else{proxy(vm,keys[i]);}}// observe data
	observe(data);data.__ob__&&data.__ob__.vmCount++;}var computedSharedDefinition={enumerable:true,configurable:true,get:noop,set:noop};function initComputed(vm){var computed=vm.$options.computed;if(computed){for(var key in computed){var userDef=computed[key];if(typeof userDef==='function'){computedSharedDefinition.get=makeComputedGetter(userDef,vm);computedSharedDefinition.set=noop;}else{computedSharedDefinition.get=userDef.get?userDef.cache!==false?makeComputedGetter(userDef.get,vm):bind$1(userDef.get,vm):noop;computedSharedDefinition.set=userDef.set?bind$1(userDef.set,vm):noop;}Object.defineProperty(vm,key,computedSharedDefinition);}}}function makeComputedGetter(getter,owner){var watcher=new Watcher(owner,getter,noop,{lazy:true});return function computedGetter(){if(watcher.dirty){watcher.evaluate();}if(Dep.target){watcher.depend();}return watcher.value;};}function initMethods(vm){var methods=vm.$options.methods;if(methods){for(var key in methods){vm[key]=methods[key]==null?noop:bind$1(methods[key],vm);if("development"!=='production'&&methods[key]==null){warn("method \""+key+"\" has an undefined value in the component definition. "+"Did you reference the function correctly?",vm);}}}}function initWatch(vm){var watch=vm.$options.watch;if(watch){for(var key in watch){var handler=watch[key];if(Array.isArray(handler)){for(var i=0;i<handler.length;i++){createWatcher(vm,key,handler[i]);}}else{createWatcher(vm,key,handler);}}}}function createWatcher(vm,key,handler){var options;if(isPlainObject(handler)){options=handler;handler=handler.handler;}if(typeof handler==='string'){handler=vm[handler];}vm.$watch(key,handler,options);}function stateMixin(Vue){// flow somehow has problems with directly declared definition object
	// when using Object.defineProperty, so we have to procedurally build up
	// the object here.
	var dataDef={};dataDef.get=function(){return this._data;};{dataDef.set=function(newData){warn('Avoid replacing instance root $data. '+'Use nested data properties instead.',this);};}Object.defineProperty(Vue.prototype,'$data',dataDef);Vue.prototype.$set=set;Vue.prototype.$delete=del;Vue.prototype.$watch=function(expOrFn,cb,options){var vm=this;options=options||{};options.user=true;var watcher=new Watcher(vm,expOrFn,cb,options);if(options.immediate){cb.call(vm,watcher.value);}return function unwatchFn(){watcher.teardown();};};}function proxy(vm,key){if(!isReserved(key)){Object.defineProperty(vm,key,{configurable:true,enumerable:true,get:function proxyGetter(){return vm._data[key];},set:function proxySetter(val){vm._data[key]=val;}});}}/*  */var VNode=function VNode(tag,data,children,text,elm,ns,context,componentOptions){this.tag=tag;this.data=data;this.children=children;this.text=text;this.elm=elm;this.ns=ns;this.context=context;this.functionalContext=undefined;this.key=data&&data.key;this.componentOptions=componentOptions;this.child=undefined;this.parent=undefined;this.raw=false;this.isStatic=false;this.isRootInsert=true;this.isComment=false;this.isCloned=false;this.isOnce=false;};var emptyVNode=function emptyVNode(){var node=new VNode();node.text='';node.isComment=true;return node;};// optimized shallow clone
	// used for static nodes and slot nodes because they may be reused across
	// multiple renders, cloning them avoids errors when DOM manipulations rely
	// on their elm reference.
	function cloneVNode(vnode){var cloned=new VNode(vnode.tag,vnode.data,vnode.children,vnode.text,vnode.elm,vnode.ns,vnode.context,vnode.componentOptions);cloned.isStatic=vnode.isStatic;cloned.key=vnode.key;cloned.isCloned=true;return cloned;}function cloneVNodes(vnodes){var res=new Array(vnodes.length);for(var i=0;i<vnodes.length;i++){res[i]=cloneVNode(vnodes[i]);}return res;}/*  */function mergeVNodeHook(def,hookKey,hook,key){key=key+hookKey;var injectedHash=def.__injected||(def.__injected={});if(!injectedHash[key]){injectedHash[key]=true;var oldHook=def[hookKey];if(oldHook){def[hookKey]=function(){oldHook.apply(this,arguments);hook.apply(this,arguments);};}else{def[hookKey]=hook;}}}/*  */function updateListeners(on,oldOn,add,remove$$1,vm){var name,cur,old,fn,event,capture;for(name in on){cur=on[name];old=oldOn[name];if(!cur){"development"!=='production'&&warn("Invalid handler for event \""+name+"\": got "+String(cur),vm);}else if(!old){capture=name.charAt(0)==='!';event=capture?name.slice(1):name;if(Array.isArray(cur)){add(event,cur.invoker=arrInvoker(cur),capture);}else{if(!cur.invoker){fn=cur;cur=on[name]={};cur.fn=fn;cur.invoker=fnInvoker(cur);}add(event,cur.invoker,capture);}}else if(cur!==old){if(Array.isArray(old)){old.length=cur.length;for(var i=0;i<old.length;i++){old[i]=cur[i];}on[name]=old;}else{old.fn=cur;on[name]=old;}}}for(name in oldOn){if(!on[name]){event=name.charAt(0)==='!'?name.slice(1):name;remove$$1(event,oldOn[name].invoker);}}}function arrInvoker(arr){return function(ev){var arguments$1=arguments;var single=arguments.length===1;for(var i=0;i<arr.length;i++){single?arr[i](ev):arr[i].apply(null,arguments$1);}};}function fnInvoker(o){return function(ev){var single=arguments.length===1;single?o.fn(ev):o.fn.apply(null,arguments);};}/*  */function normalizeChildren(children,ns,nestedIndex){if(isPrimitive(children)){return[createTextVNode(children)];}if(Array.isArray(children)){var res=[];for(var i=0,l=children.length;i<l;i++){var c=children[i];var last=res[res.length-1];//  nested
	if(Array.isArray(c)){res.push.apply(res,normalizeChildren(c,ns,(nestedIndex||'')+"_"+i));}else if(isPrimitive(c)){if(last&&last.text){last.text+=String(c);}else if(c!==''){// convert primitive to vnode
	res.push(createTextVNode(c));}}else if(c instanceof VNode){if(c.text&&last&&last.text){if(!last.isCloned){last.text+=c.text;}}else{// inherit parent namespace
	if(ns){applyNS(c,ns);}// default key for nested array children (likely generated by v-for)
	if(c.tag&&c.key==null&&nestedIndex!=null){c.key="__vlist"+nestedIndex+"_"+i+"__";}res.push(c);}}}return res;}}function createTextVNode(val){return new VNode(undefined,undefined,undefined,String(val));}function applyNS(vnode,ns){if(vnode.tag&&!vnode.ns){vnode.ns=ns;if(vnode.children){for(var i=0,l=vnode.children.length;i<l;i++){applyNS(vnode.children[i],ns);}}}}/*  */function getFirstComponentChild(children){return children&&children.filter(function(c){return c&&c.componentOptions;})[0];}/*  */var activeInstance=null;function initLifecycle(vm){var options=vm.$options;// locate first non-abstract parent
	var parent=options.parent;if(parent&&!options.abstract){while(parent.$options.abstract&&parent.$parent){parent=parent.$parent;}parent.$children.push(vm);}vm.$parent=parent;vm.$root=parent?parent.$root:vm;vm.$children=[];vm.$refs={};vm._watcher=null;vm._inactive=false;vm._isMounted=false;vm._isDestroyed=false;vm._isBeingDestroyed=false;}function lifecycleMixin(Vue){Vue.prototype._mount=function(el,hydrating){var vm=this;vm.$el=el;if(!vm.$options.render){vm.$options.render=emptyVNode;{/* istanbul ignore if */if(vm.$options.template&&vm.$options.template.charAt(0)!=='#'){warn('You are using the runtime-only build of Vue where the template '+'option is not available. Either pre-compile the templates into '+'render functions, or use the compiler-included build.',vm);}else{warn('Failed to mount component: template or render function not defined.',vm);}}}callHook(vm,'beforeMount');vm._watcher=new Watcher(vm,function(){vm._update(vm._render(),hydrating);},noop);hydrating=false;// manually mounted instance, call mounted on self
	// mounted is called for render-created child components in its inserted hook
	if(vm.$vnode==null){vm._isMounted=true;callHook(vm,'mounted');}return vm;};Vue.prototype._update=function(vnode,hydrating){var vm=this;if(vm._isMounted){callHook(vm,'beforeUpdate');}var prevEl=vm.$el;var prevActiveInstance=activeInstance;activeInstance=vm;var prevVnode=vm._vnode;vm._vnode=vnode;if(!prevVnode){// Vue.prototype.__patch__ is injected in entry points
	// based on the rendering backend used.
	vm.$el=vm.__patch__(vm.$el,vnode,hydrating);}else{vm.$el=vm.__patch__(prevVnode,vnode);}activeInstance=prevActiveInstance;// update __vue__ reference
	if(prevEl){prevEl.__vue__=null;}if(vm.$el){vm.$el.__vue__=vm;}// if parent is an HOC, update its $el as well
	if(vm.$vnode&&vm.$parent&&vm.$vnode===vm.$parent._vnode){vm.$parent.$el=vm.$el;}if(vm._isMounted){callHook(vm,'updated');}};Vue.prototype._updateFromParent=function(propsData,listeners,parentVnode,renderChildren){var vm=this;var hasChildren=!!(vm.$options._renderChildren||renderChildren);vm.$options._parentVnode=parentVnode;vm.$options._renderChildren=renderChildren;// update props
	if(propsData&&vm.$options.props){observerState.shouldConvert=false;{observerState.isSettingProps=true;}var propKeys=vm.$options._propKeys||[];for(var i=0;i<propKeys.length;i++){var key=propKeys[i];vm[key]=validateProp(key,vm.$options.props,propsData,vm);}observerState.shouldConvert=true;{observerState.isSettingProps=false;}vm.$options.propsData=propsData;}// update listeners
	if(listeners){var oldListeners=vm.$options._parentListeners;vm.$options._parentListeners=listeners;vm._updateListeners(listeners,oldListeners);}// resolve slots + force update if has children
	if(hasChildren){vm.$slots=resolveSlots(renderChildren,vm._renderContext);vm.$forceUpdate();}};Vue.prototype.$forceUpdate=function(){var vm=this;if(vm._watcher){vm._watcher.update();}};Vue.prototype.$destroy=function(){var vm=this;if(vm._isBeingDestroyed){return;}callHook(vm,'beforeDestroy');vm._isBeingDestroyed=true;// remove self from parent
	var parent=vm.$parent;if(parent&&!parent._isBeingDestroyed&&!vm.$options.abstract){remove$1(parent.$children,vm);}// teardown watchers
	if(vm._watcher){vm._watcher.teardown();}var i=vm._watchers.length;while(i--){vm._watchers[i].teardown();}// remove reference from data ob
	// frozen object may not have observer.
	if(vm._data.__ob__){vm._data.__ob__.vmCount--;}// call the last hook...
	vm._isDestroyed=true;callHook(vm,'destroyed');// turn off all instance listeners.
	vm.$off();// remove __vue__ reference
	if(vm.$el){vm.$el.__vue__=null;}// invoke destroy hooks on current rendered tree
	vm.__patch__(vm._vnode,null);};}function callHook(vm,hook){var handlers=vm.$options[hook];if(handlers){for(var i=0,j=handlers.length;i<j;i++){handlers[i].call(vm);}}vm.$emit('hook:'+hook);}/*  */var hooks={init:init,prepatch:prepatch,insert:insert,destroy:destroy$1};var hooksToMerge=Object.keys(hooks);function createComponent(Ctor,data,context,children,tag){if(!Ctor){return;}var baseCtor=context.$options._base;if(isObject(Ctor)){Ctor=baseCtor.extend(Ctor);}if(typeof Ctor!=='function'){{warn("Invalid Component definition: "+String(Ctor),context);}return;}// async component
	if(!Ctor.cid){if(Ctor.resolved){Ctor=Ctor.resolved;}else{Ctor=resolveAsyncComponent(Ctor,baseCtor,function(){// it's ok to queue this on every render because
	// $forceUpdate is buffered by the scheduler.
	context.$forceUpdate();});if(!Ctor){// return nothing if this is indeed an async component
	// wait for the callback to trigger parent update.
	return;}}}// resolve constructor options in case global mixins are applied after
	// component constructor creation
	resolveConstructorOptions(Ctor);data=data||{};// extract props
	var propsData=extractProps(data,Ctor);// functional component
	if(Ctor.options.functional){return createFunctionalComponent(Ctor,propsData,data,context,children);}// extract listeners, since these needs to be treated as
	// child component listeners instead of DOM listeners
	var listeners=data.on;// replace with listeners with .native modifier
	data.on=data.nativeOn;if(Ctor.options.abstract){// abstract components do not keep anything
	// other than props & listeners
	data={};}// merge component management hooks onto the placeholder node
	mergeHooks(data);// return a placeholder vnode
	var name=Ctor.options.name||tag;var vnode=new VNode("vue-component-"+Ctor.cid+(name?"-"+name:''),data,undefined,undefined,undefined,undefined,context,{Ctor:Ctor,propsData:propsData,listeners:listeners,tag:tag,children:children});return vnode;}function createFunctionalComponent(Ctor,propsData,data,context,children){var props={};var propOptions=Ctor.options.props;if(propOptions){for(var key in propOptions){props[key]=validateProp(key,propOptions,propsData);}}var vnode=Ctor.options.render.call(null,// ensure the createElement function in functional components
	// gets a unique context - this is necessary for correct named slot check
	bind$1(createElement,{_self:Object.create(context)}),{props:props,data:data,parent:context,children:normalizeChildren(children),slots:function slots(){return resolveSlots(children,context);}});if(vnode instanceof VNode){vnode.functionalContext=context;if(data.slot){(vnode.data||(vnode.data={})).slot=data.slot;}}return vnode;}function createComponentInstanceForVnode(vnode,// we know it's MountedComponentVNode but flow doesn't
	parent// activeInstance in lifecycle state
	){var vnodeComponentOptions=vnode.componentOptions;var options={_isComponent:true,parent:parent,propsData:vnodeComponentOptions.propsData,_componentTag:vnodeComponentOptions.tag,_parentVnode:vnode,_parentListeners:vnodeComponentOptions.listeners,_renderChildren:vnodeComponentOptions.children};// check inline-template render functions
	var inlineTemplate=vnode.data.inlineTemplate;if(inlineTemplate){options.render=inlineTemplate.render;options.staticRenderFns=inlineTemplate.staticRenderFns;}return new vnodeComponentOptions.Ctor(options);}function init(vnode,hydrating){if(!vnode.child||vnode.child._isDestroyed){var child=vnode.child=createComponentInstanceForVnode(vnode,activeInstance);child.$mount(hydrating?vnode.elm:undefined,hydrating);}}function prepatch(oldVnode,vnode){var options=vnode.componentOptions;var child=vnode.child=oldVnode.child;child._updateFromParent(options.propsData,// updated props
	options.listeners,// updated listeners
	vnode,// new parent vnode
	options.children// new children
	);}function insert(vnode){if(!vnode.child._isMounted){vnode.child._isMounted=true;callHook(vnode.child,'mounted');}if(vnode.data.keepAlive){vnode.child._inactive=false;callHook(vnode.child,'activated');}}function destroy$1(vnode){if(!vnode.child._isDestroyed){if(!vnode.data.keepAlive){vnode.child.$destroy();}else{vnode.child._inactive=true;callHook(vnode.child,'deactivated');}}}function resolveAsyncComponent(factory,baseCtor,cb){if(factory.requested){// pool callbacks
	factory.pendingCallbacks.push(cb);}else{factory.requested=true;var cbs=factory.pendingCallbacks=[cb];var sync=true;var resolve=function resolve(res){if(isObject(res)){res=baseCtor.extend(res);}// cache resolved
	factory.resolved=res;// invoke callbacks only if this is not a synchronous resolve
	// (async resolves are shimmed as synchronous during SSR)
	if(!sync){for(var i=0,l=cbs.length;i<l;i++){cbs[i](res);}}};var reject=function reject(reason){"development"!=='production'&&warn("Failed to resolve async component: "+String(factory)+(reason?"\nReason: "+reason:''));};var res=factory(resolve,reject);// handle promise
	if(res&&typeof res.then==='function'&&!factory.resolved){res.then(resolve,reject);}sync=false;// return in case resolved synchronously
	return factory.resolved;}}function extractProps(data,Ctor){// we are only extracting raw values here.
	// validation and default values are handled in the child
	// component itself.
	var propOptions=Ctor.options.props;if(!propOptions){return;}var res={};var attrs=data.attrs;var props=data.props;var domProps=data.domProps;if(attrs||props||domProps){for(var key in propOptions){var altKey=hyphenate(key);checkProp(res,props,key,altKey,true)||checkProp(res,attrs,key,altKey)||checkProp(res,domProps,key,altKey);}}return res;}function checkProp(res,hash,key,altKey,preserve){if(hash){if(hasOwn(hash,key)){res[key]=hash[key];if(!preserve){delete hash[key];}return true;}else if(hasOwn(hash,altKey)){res[key]=hash[altKey];if(!preserve){delete hash[altKey];}return true;}}return false;}function mergeHooks(data){if(!data.hook){data.hook={};}for(var i=0;i<hooksToMerge.length;i++){var key=hooksToMerge[i];var fromParent=data.hook[key];var ours=hooks[key];data.hook[key]=fromParent?mergeHook$1(ours,fromParent):ours;}}function mergeHook$1(a,b){// since all hooks have at most two args, use fixed args
	// to avoid having to use fn.apply().
	return function(_,__){a(_,__);b(_,__);};}/*  */// wrapper function for providing a more flexible interface
	// without getting yelled at by flow
	function createElement(tag,data,children){if(data&&(Array.isArray(data)||(typeof data==='undefined'?'undefined':_typeof(data))!=='object')){children=data;data=undefined;}// make sure to use real instance instead of proxy as context
	return _createElement(this._self,tag,data,children);}function _createElement(context,tag,data,children){if(data&&data.__ob__){"development"!=='production'&&warn("Avoid using observed data object as vnode data: "+JSON.stringify(data)+"\n"+'Always create fresh vnode data objects in each render!',context);return;}if(!tag){// in case of component :is set to falsy value
	return emptyVNode();}if(typeof tag==='string'){var Ctor;var ns=config.getTagNamespace(tag);if(config.isReservedTag(tag)){// platform built-in elements
	return new VNode(tag,data,normalizeChildren(children,ns),undefined,undefined,ns,context);}else if(Ctor=resolveAsset(context.$options,'components',tag)){// component
	return createComponent(Ctor,data,context,children,tag);}else{// unknown or unlisted namespaced elements
	// check at runtime because it may get assigned a namespace when its
	// parent normalizes children
	var childNs=tag==='foreignObject'?'xhtml':ns;return new VNode(tag,data,normalizeChildren(children,childNs),undefined,undefined,ns,context);}}else{// direct component options / constructor
	return createComponent(tag,data,context,children);}}/*  */function initRender(vm){vm.$vnode=null;// the placeholder node in parent tree
	vm._vnode=null;// the root of the child tree
	vm._staticTrees=null;vm._renderContext=vm.$options._parentVnode&&vm.$options._parentVnode.context;vm.$slots=resolveSlots(vm.$options._renderChildren,vm._renderContext);// bind the public createElement fn to this instance
	// so that we get proper render context inside it.
	vm.$createElement=bind$1(createElement,vm);if(vm.$options.el){vm.$mount(vm.$options.el);}}function renderMixin(Vue){Vue.prototype.$nextTick=function(fn){nextTick(fn,this);};Vue.prototype._render=function(){var vm=this;var ref=vm.$options;var render=ref.render;var staticRenderFns=ref.staticRenderFns;var _parentVnode=ref._parentVnode;if(vm._isMounted){// clone slot nodes on re-renders
	for(var key in vm.$slots){vm.$slots[key]=cloneVNodes(vm.$slots[key]);}}if(staticRenderFns&&!vm._staticTrees){vm._staticTrees=[];}// set parent vnode. this allows render functions to have access
	// to the data on the placeholder node.
	vm.$vnode=_parentVnode;// render self
	var vnode;try{vnode=render.call(vm._renderProxy,vm.$createElement);}catch(e){{warn("Error when rendering "+formatComponentName(vm)+":");}/* istanbul ignore else */if(config.errorHandler){config.errorHandler.call(null,e,vm);}else{if(config._isServer){throw e;}else{console.error(e);}}// return previous vnode to prevent render error causing blank component
	vnode=vm._vnode;}// return empty vnode in case the render function errored out
	if(!(vnode instanceof VNode)){if("development"!=='production'&&Array.isArray(vnode)){warn('Multiple root nodes returned from render function. Render function '+'should return a single root node.',vm);}vnode=emptyVNode();}// set parent
	vnode.parent=_parentVnode;return vnode;};// shorthands used in render functions
	Vue.prototype._h=createElement;// toString for mustaches
	Vue.prototype._s=_toString;// number conversion
	Vue.prototype._n=toNumber;// empty vnode
	Vue.prototype._e=emptyVNode;// loose equal
	Vue.prototype._q=looseEqual;// loose indexOf
	Vue.prototype._i=looseIndexOf;// render static tree by index
	Vue.prototype._m=function renderStatic(index,isInFor){var tree=this._staticTrees[index];// if has already-rendered static tree and not inside v-for,
	// we can reuse the same tree by doing a shallow clone.
	if(tree&&!isInFor){return Array.isArray(tree)?cloneVNodes(tree):cloneVNode(tree);}// otherwise, render a fresh tree.
	tree=this._staticTrees[index]=this.$options.staticRenderFns[index].call(this._renderProxy);markStatic(tree,"__static__"+index,false);return tree;};// mark node as static (v-once)
	Vue.prototype._o=function markOnce(tree,index,key){markStatic(tree,"__once__"+index+(key?"_"+key:""),true);return tree;};function markStatic(tree,key,isOnce){if(Array.isArray(tree)){for(var i=0;i<tree.length;i++){if(tree[i]&&typeof tree[i]!=='string'){markStaticNode(tree[i],key+"_"+i,isOnce);}}}else{markStaticNode(tree,key,isOnce);}}function markStaticNode(node,key,isOnce){node.isStatic=true;node.key=key;node.isOnce=isOnce;}// filter resolution helper
	var identity=function identity(_){return _;};Vue.prototype._f=function resolveFilter(id){return resolveAsset(this.$options,'filters',id,true)||identity;};// render v-for
	Vue.prototype._l=function renderList(val,render){var ret,i,l,keys,key;if(Array.isArray(val)){ret=new Array(val.length);for(i=0,l=val.length;i<l;i++){ret[i]=render(val[i],i);}}else if(typeof val==='number'){ret=new Array(val);for(i=0;i<val;i++){ret[i]=render(i+1,i);}}else if(isObject(val)){keys=Object.keys(val);ret=new Array(keys.length);for(i=0,l=keys.length;i<l;i++){key=keys[i];ret[i]=render(val[key],key,i);}}return ret;};// renderSlot
	Vue.prototype._t=function(name,fallback){var slotNodes=this.$slots[name];// warn duplicate slot usage
	if(slotNodes&&"development"!=='production'){slotNodes._rendered&&warn("Duplicate presence of slot \""+name+"\" found in the same render tree "+"- this will likely cause render errors.",this);slotNodes._rendered=true;}return slotNodes||fallback;};// apply v-bind object
	Vue.prototype._b=function bindProps(data,value,asProp){if(value){if(!isObject(value)){"development"!=='production'&&warn('v-bind without argument expects an Object or Array value',this);}else{if(Array.isArray(value)){value=toObject(value);}for(var key in value){if(key==='class'||key==='style'){data[key]=value[key];}else{var hash=asProp||config.mustUseProp(key)?data.domProps||(data.domProps={}):data.attrs||(data.attrs={});hash[key]=value[key];}}}}return data;};// expose v-on keyCodes
	Vue.prototype._k=function getKeyCodes(key){return config.keyCodes[key];};}function resolveSlots(renderChildren,context){var slots={};if(!renderChildren){return slots;}var children=normalizeChildren(renderChildren)||[];var defaultSlot=[];var name,child;for(var i=0,l=children.length;i<l;i++){child=children[i];// named slots should only be respected if the vnode was rendered in the
	// same context.
	if((child.context===context||child.functionalContext===context)&&child.data&&(name=child.data.slot)){var slot=slots[name]||(slots[name]=[]);if(child.tag==='template'){slot.push.apply(slot,child.children);}else{slot.push(child);}}else{defaultSlot.push(child);}}// ignore single whitespace
	if(defaultSlot.length&&!(defaultSlot.length===1&&(defaultSlot[0].text===' '||defaultSlot[0].isComment))){slots.default=defaultSlot;}return slots;}/*  */function initEvents(vm){vm._events=Object.create(null);// init parent attached events
	var listeners=vm.$options._parentListeners;var on=bind$1(vm.$on,vm);var off=bind$1(vm.$off,vm);vm._updateListeners=function(listeners,oldListeners){updateListeners(listeners,oldListeners||{},on,off,vm);};if(listeners){vm._updateListeners(listeners);}}function eventsMixin(Vue){Vue.prototype.$on=function(event,fn){var vm=this;(vm._events[event]||(vm._events[event]=[])).push(fn);return vm;};Vue.prototype.$once=function(event,fn){var vm=this;function on(){vm.$off(event,on);fn.apply(vm,arguments);}on.fn=fn;vm.$on(event,on);return vm;};Vue.prototype.$off=function(event,fn){var vm=this;// all
	if(!arguments.length){vm._events=Object.create(null);return vm;}// specific event
	var cbs=vm._events[event];if(!cbs){return vm;}if(arguments.length===1){vm._events[event]=null;return vm;}// specific handler
	var cb;var i=cbs.length;while(i--){cb=cbs[i];if(cb===fn||cb.fn===fn){cbs.splice(i,1);break;}}return vm;};Vue.prototype.$emit=function(event){var vm=this;var cbs=vm._events[event];if(cbs){cbs=cbs.length>1?toArray(cbs):cbs;var args=toArray(arguments,1);for(var i=0,l=cbs.length;i<l;i++){cbs[i].apply(vm,args);}}return vm;};}/*  */var uid=0;function initMixin(Vue){Vue.prototype._init=function(options){var vm=this;// a uid
	vm._uid=uid++;// a flag to avoid this being observed
	vm._isVue=true;// merge options
	if(options&&options._isComponent){// optimize internal component instantiation
	// since dynamic options merging is pretty slow, and none of the
	// internal component options needs special treatment.
	initInternalComponent(vm,options);}else{vm.$options=mergeOptions(resolveConstructorOptions(vm.constructor),options||{},vm);}/* istanbul ignore else */{initProxy(vm);}// expose real self
	vm._self=vm;initLifecycle(vm);initEvents(vm);callHook(vm,'beforeCreate');initState(vm);callHook(vm,'created');initRender(vm);};}function initInternalComponent(vm,options){var opts=vm.$options=Object.create(vm.constructor.options);// doing this because it's faster than dynamic enumeration.
	opts.parent=options.parent;opts.propsData=options.propsData;opts._parentVnode=options._parentVnode;opts._parentListeners=options._parentListeners;opts._renderChildren=options._renderChildren;opts._componentTag=options._componentTag;if(options.render){opts.render=options.render;opts.staticRenderFns=options.staticRenderFns;}}function resolveConstructorOptions(Ctor){var options=Ctor.options;if(Ctor.super){var superOptions=Ctor.super.options;var cachedSuperOptions=Ctor.superOptions;var extendOptions=Ctor.extendOptions;if(superOptions!==cachedSuperOptions){// super option changed
	Ctor.superOptions=superOptions;extendOptions.render=options.render;extendOptions.staticRenderFns=options.staticRenderFns;options=Ctor.options=mergeOptions(superOptions,extendOptions);if(options.name){options.components[options.name]=Ctor;}}}return options;}function Vue$3(options){if("development"!=='production'&&!(this instanceof Vue$3)){warn('Vue is a constructor and should be called with the `new` keyword');}this._init(options);}initMixin(Vue$3);stateMixin(Vue$3);eventsMixin(Vue$3);lifecycleMixin(Vue$3);renderMixin(Vue$3);var warn=noop;var formatComponentName;{var hasConsole=typeof console!=='undefined';warn=function warn(msg,vm){if(hasConsole&&!config.silent){console.error("[Vue warn]: "+msg+" "+(vm?formatLocation(formatComponentName(vm)):''));}};formatComponentName=function formatComponentName(vm){if(vm.$root===vm){return'root instance';}var name=vm._isVue?vm.$options.name||vm.$options._componentTag:vm.name;return(name?"component <"+name+">":"anonymous component")+(vm._isVue&&vm.$options.__file?" at "+vm.$options.__file:'');};var formatLocation=function formatLocation(str){if(str==='anonymous component'){str+=" - use the \"name\" option for better debugging messages.";}return"\n(found in "+str+")";};}/*  *//**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 */var strats=config.optionMergeStrategies;/**
	 * Options with restrictions
	 */{strats.el=strats.propsData=function(parent,child,vm,key){if(!vm){warn("option \""+key+"\" can only be used during instance "+'creation with the `new` keyword.');}return defaultStrat(parent,child);};}/**
	 * Helper that recursively merges two data objects together.
	 */function mergeData(to,from){if(!from){return to;}var key,toVal,fromVal;var keys=Object.keys(from);for(var i=0;i<keys.length;i++){key=keys[i];toVal=to[key];fromVal=from[key];if(!hasOwn(to,key)){set(to,key,fromVal);}else if(isPlainObject(toVal)&&isPlainObject(fromVal)){mergeData(toVal,fromVal);}}return to;}/**
	 * Data
	 */strats.data=function(parentVal,childVal,vm){if(!vm){// in a Vue.extend merge, both should be functions
	if(!childVal){return parentVal;}if(typeof childVal!=='function'){"development"!=='production'&&warn('The "data" option should be a function '+'that returns a per-instance value in component '+'definitions.',vm);return parentVal;}if(!parentVal){return childVal;}// when parentVal & childVal are both present,
	// we need to return a function that returns the
	// merged result of both functions... no need to
	// check if parentVal is a function here because
	// it has to be a function to pass previous merges.
	return function mergedDataFn(){return mergeData(childVal.call(this),parentVal.call(this));};}else if(parentVal||childVal){return function mergedInstanceDataFn(){// instance merge
	var instanceData=typeof childVal==='function'?childVal.call(vm):childVal;var defaultData=typeof parentVal==='function'?parentVal.call(vm):undefined;if(instanceData){return mergeData(instanceData,defaultData);}else{return defaultData;}};}};/**
	 * Hooks and param attributes are merged as arrays.
	 */function mergeHook(parentVal,childVal){return childVal?parentVal?parentVal.concat(childVal):Array.isArray(childVal)?childVal:[childVal]:parentVal;}config._lifecycleHooks.forEach(function(hook){strats[hook]=mergeHook;});/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */function mergeAssets(parentVal,childVal){var res=Object.create(parentVal||null);return childVal?extend(res,childVal):res;}config._assetTypes.forEach(function(type){strats[type+'s']=mergeAssets;});/**
	 * Watchers.
	 *
	 * Watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */strats.watch=function(parentVal,childVal){/* istanbul ignore if */if(!childVal){return parentVal;}if(!parentVal){return childVal;}var ret={};extend(ret,parentVal);for(var key in childVal){var parent=ret[key];var child=childVal[key];if(parent&&!Array.isArray(parent)){parent=[parent];}ret[key]=parent?parent.concat(child):[child];}return ret;};/**
	 * Other object hashes.
	 */strats.props=strats.methods=strats.computed=function(parentVal,childVal){if(!childVal){return parentVal;}if(!parentVal){return childVal;}var ret=Object.create(null);extend(ret,parentVal);extend(ret,childVal);return ret;};/**
	 * Default strategy.
	 */var defaultStrat=function defaultStrat(parentVal,childVal){return childVal===undefined?parentVal:childVal;};/**
	 * Validate component names
	 */function checkComponents(options){for(var key in options.components){var lower=key.toLowerCase();if(isBuiltInTag(lower)||config.isReservedTag(lower)){warn('Do not use built-in or reserved HTML elements as component '+'id: '+key);}}}/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 */function normalizeProps(options){var props=options.props;if(!props){return;}var res={};var i,val,name;if(Array.isArray(props)){i=props.length;while(i--){val=props[i];if(typeof val==='string'){name=camelize(val);res[name]={type:null};}else{warn('props must be strings when using array syntax.');}}}else if(isPlainObject(props)){for(var key in props){val=props[key];name=camelize(key);res[name]=isPlainObject(val)?val:{type:val};}}options.props=res;}/**
	 * Normalize raw function directives into object format.
	 */function normalizeDirectives(options){var dirs=options.directives;if(dirs){for(var key in dirs){var def=dirs[key];if(typeof def==='function'){dirs[key]={bind:def,update:def};}}}}/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 */function mergeOptions(parent,child,vm){{checkComponents(child);}normalizeProps(child);normalizeDirectives(child);var extendsFrom=child.extends;if(extendsFrom){parent=typeof extendsFrom==='function'?mergeOptions(parent,extendsFrom.options,vm):mergeOptions(parent,extendsFrom,vm);}if(child.mixins){for(var i=0,l=child.mixins.length;i<l;i++){var mixin=child.mixins[i];if(mixin.prototype instanceof Vue$3){mixin=mixin.options;}parent=mergeOptions(parent,mixin,vm);}}var options={};var key;for(key in parent){mergeField(key);}for(key in child){if(!hasOwn(parent,key)){mergeField(key);}}function mergeField(key){var strat=strats[key]||defaultStrat;options[key]=strat(parent[key],child[key],vm,key);}return options;}/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 */function resolveAsset(options,type,id,warnMissing){/* istanbul ignore if */if(typeof id!=='string'){return;}var assets=options[type];var res=assets[id]||// camelCase ID
	assets[camelize(id)]||// Pascal Case ID
	assets[capitalize(camelize(id))];if("development"!=='production'&&warnMissing&&!res){warn('Failed to resolve '+type.slice(0,-1)+': '+id,options);}return res;}/*  */function validateProp(key,propOptions,propsData,vm){var prop=propOptions[key];var absent=!hasOwn(propsData,key);var value=propsData[key];// handle boolean props
	if(isBooleanType(prop.type)){if(absent&&!hasOwn(prop,'default')){value=false;}else if(value===''||value===hyphenate(key)){value=true;}}// check default value
	if(value===undefined){value=getPropDefaultValue(vm,prop,key);// since the default value is a fresh copy,
	// make sure to observe it.
	var prevShouldConvert=observerState.shouldConvert;observerState.shouldConvert=true;observe(value);observerState.shouldConvert=prevShouldConvert;}{assertProp(prop,key,value,vm,absent);}return value;}/**
	 * Get the default value of a prop.
	 */function getPropDefaultValue(vm,prop,key){// no default, return undefined
	if(!hasOwn(prop,'default')){return undefined;}var def=prop.default;// warn against non-factory defaults for Object & Array
	if(isObject(def)){"development"!=='production'&&warn('Invalid default value for prop "'+key+'": '+'Props with type Object/Array must use a factory function '+'to return the default value.',vm);}// the raw prop value was also undefined from previous render,
	// return previous default value to avoid unnecessary watcher trigger
	if(vm&&vm.$options.propsData&&vm.$options.propsData[key]===undefined&&vm[key]!==undefined){return vm[key];}// call factory function for non-Function types
	return typeof def==='function'&&prop.type!==Function?def.call(vm):def;}/**
	 * Assert whether a prop is valid.
	 */function assertProp(prop,name,value,vm,absent){if(prop.required&&absent){warn('Missing required prop: "'+name+'"',vm);return;}if(value==null&&!prop.required){return;}var type=prop.type;var valid=!type||type===true;var expectedTypes=[];if(type){if(!Array.isArray(type)){type=[type];}for(var i=0;i<type.length&&!valid;i++){var assertedType=assertType(value,type[i]);expectedTypes.push(assertedType.expectedType);valid=assertedType.valid;}}if(!valid){warn('Invalid prop: type check failed for prop "'+name+'".'+' Expected '+expectedTypes.map(capitalize).join(', ')+', got '+Object.prototype.toString.call(value).slice(8,-1)+'.',vm);return;}var validator=prop.validator;if(validator){if(!validator(value)){warn('Invalid prop: custom validator check failed for prop "'+name+'".',vm);}}}/**
	 * Assert the type of a value
	 */function assertType(value,type){var valid;var expectedType=getType(type);if(expectedType==='String'){valid=(typeof value==='undefined'?'undefined':_typeof(value))===(expectedType='string');}else if(expectedType==='Number'){valid=(typeof value==='undefined'?'undefined':_typeof(value))===(expectedType='number');}else if(expectedType==='Boolean'){valid=(typeof value==='undefined'?'undefined':_typeof(value))===(expectedType='boolean');}else if(expectedType==='Function'){valid=(typeof value==='undefined'?'undefined':_typeof(value))===(expectedType='function');}else if(expectedType==='Object'){valid=isPlainObject(value);}else if(expectedType==='Array'){valid=Array.isArray(value);}else{valid=value instanceof type;}return{valid:valid,expectedType:expectedType};}/**
	 * Use function string name to check built-in types,
	 * because a simple equality check will fail when running
	 * across different vms / iframes.
	 */function getType(fn){var match=fn&&fn.toString().match(/^\s*function (\w+)/);return match&&match[1];}function isBooleanType(fn){if(!Array.isArray(fn)){return getType(fn)==='Boolean';}for(var i=0,len=fn.length;i<len;i++){if(getType(fn[i])==='Boolean'){return true;}}/* istanbul ignore next */return false;}var util=Object.freeze({defineReactive:defineReactive$$1,_toString:_toString,toNumber:toNumber,makeMap:makeMap,isBuiltInTag:isBuiltInTag,remove:remove$1,hasOwn:hasOwn,isPrimitive:isPrimitive,cached:cached,camelize:camelize,capitalize:capitalize,hyphenate:hyphenate,bind:bind$1,toArray:toArray,extend:extend,isObject:isObject,isPlainObject:isPlainObject,toObject:toObject,noop:noop,no:no,genStaticKeys:genStaticKeys,looseEqual:looseEqual,looseIndexOf:looseIndexOf,isReserved:isReserved,def:def,parsePath:parsePath,hasProto:hasProto,inBrowser:inBrowser,UA:UA,isIE:isIE,isIE9:isIE9,isEdge:isEdge,isAndroid:isAndroid,isIOS:isIOS,devtools:devtools,nextTick:nextTick,get _Set(){return _Set;},mergeOptions:mergeOptions,resolveAsset:resolveAsset,get warn(){return warn;},get formatComponentName(){return formatComponentName;},validateProp:validateProp});/*  */function initUse(Vue){Vue.use=function(plugin){/* istanbul ignore if */if(plugin.installed){return;}// additional parameters
	var args=toArray(arguments,1);args.unshift(this);if(typeof plugin.install==='function'){plugin.install.apply(plugin,args);}else{plugin.apply(null,args);}plugin.installed=true;return this;};}/*  */function initMixin$1(Vue){Vue.mixin=function(mixin){this.options=mergeOptions(this.options,mixin);};}/*  */function initExtend(Vue){/**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */Vue.cid=0;var cid=1;/**
	   * Class inheritance
	   */Vue.extend=function(extendOptions){extendOptions=extendOptions||{};var Super=this;var SuperId=Super.cid;var cachedCtors=extendOptions._Ctor||(extendOptions._Ctor={});if(cachedCtors[SuperId]){return cachedCtors[SuperId];}var name=extendOptions.name||Super.options.name;{if(!/^[a-zA-Z][\w-]*$/.test(name)){warn('Invalid component name: "'+name+'". Component names '+'can only contain alphanumeric characaters and the hyphen.');}}var Sub=function VueComponent(options){this._init(options);};Sub.prototype=Object.create(Super.prototype);Sub.prototype.constructor=Sub;Sub.cid=cid++;Sub.options=mergeOptions(Super.options,extendOptions);Sub['super']=Super;// allow further extension/mixin/plugin usage
	Sub.extend=Super.extend;Sub.mixin=Super.mixin;Sub.use=Super.use;// create asset registers, so extended classes
	// can have their private assets too.
	config._assetTypes.forEach(function(type){Sub[type]=Super[type];});// enable recursive self-lookup
	if(name){Sub.options.components[name]=Sub;}// keep a reference to the super options at extension time.
	// later at instantiation we can check if Super's options have
	// been updated.
	Sub.superOptions=Super.options;Sub.extendOptions=extendOptions;// cache constructor
	cachedCtors[SuperId]=Sub;return Sub;};}/*  */function initAssetRegisters(Vue){/**
	   * Create asset registration methods.
	   */config._assetTypes.forEach(function(type){Vue[type]=function(id,definition){if(!definition){return this.options[type+'s'][id];}else{/* istanbul ignore if */{if(type==='component'&&config.isReservedTag(id)){warn('Do not use built-in or reserved HTML elements as component '+'id: '+id);}}if(type==='component'&&isPlainObject(definition)){definition.name=definition.name||id;definition=this.options._base.extend(definition);}if(type==='directive'&&typeof definition==='function'){definition={bind:definition,update:definition};}this.options[type+'s'][id]=definition;return definition;}};});}var KeepAlive={name:'keep-alive',abstract:true,created:function created(){this.cache=Object.create(null);},render:function render(){var vnode=getFirstComponentChild(this.$slots.default);if(vnode&&vnode.componentOptions){var opts=vnode.componentOptions;var key=vnode.key==null// same constructor may get registered as different local components
	// so cid alone is not enough (#3269)
	?opts.Ctor.cid+'::'+opts.tag:vnode.key;if(this.cache[key]){vnode.child=this.cache[key].child;}else{this.cache[key]=vnode;}vnode.data.keepAlive=true;}return vnode;},destroyed:function destroyed(){var this$1=this;for(var key in this.cache){var vnode=this$1.cache[key];callHook(vnode.child,'deactivated');vnode.child.$destroy();}}};var builtInComponents={KeepAlive:KeepAlive};/*  */function initGlobalAPI(Vue){// config
	var configDef={};configDef.get=function(){return config;};{configDef.set=function(){warn('Do not replace the Vue.config object, set individual fields instead.');};}Object.defineProperty(Vue,'config',configDef);Vue.util=util;Vue.set=set;Vue.delete=del;Vue.nextTick=nextTick;Vue.options=Object.create(null);config._assetTypes.forEach(function(type){Vue.options[type+'s']=Object.create(null);});// this is used to identify the "base" constructor to extend all plain-object
	// components with in Weex's multi-instance scenarios.
	Vue.options._base=Vue;extend(Vue.options.components,builtInComponents);initUse(Vue);initMixin$1(Vue);initExtend(Vue);initAssetRegisters(Vue);}initGlobalAPI(Vue$3);Object.defineProperty(Vue$3.prototype,'$isServer',{get:function get(){return config._isServer;}});Vue$3.version='2.0.7';/*  */// attributes that should be using props for binding
	var mustUseProp=makeMap('value,selected,checked,muted');var isEnumeratedAttr=makeMap('contenteditable,draggable,spellcheck');var isBooleanAttr=makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,'+'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,'+'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,'+'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,'+'required,reversed,scoped,seamless,selected,sortable,translate,'+'truespeed,typemustmatch,visible');var isAttr=makeMap('accept,accept-charset,accesskey,action,align,alt,async,autocomplete,'+'autofocus,autoplay,autosave,bgcolor,border,buffered,challenge,charset,'+'checked,cite,class,code,codebase,color,cols,colspan,content,http-equiv,'+'name,contenteditable,contextmenu,controls,coords,data,datetime,default,'+'defer,dir,dirname,disabled,download,draggable,dropzone,enctype,method,for,'+'form,formaction,headers,<th>,height,hidden,high,href,hreflang,http-equiv,'+'icon,id,ismap,itemprop,keytype,kind,label,lang,language,list,loop,low,'+'manifest,max,maxlength,media,method,GET,POST,min,multiple,email,file,'+'muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,'+'preload,radiogroup,readonly,rel,required,reversed,rows,rowspan,sandbox,'+'scope,scoped,seamless,selected,shape,size,type,text,password,sizes,span,'+'spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,'+'target,title,type,usemap,value,width,wrap');var xlinkNS='http://www.w3.org/1999/xlink';var isXlink=function isXlink(name){return name.charAt(5)===':'&&name.slice(0,5)==='xlink';};var getXlinkProp=function getXlinkProp(name){return isXlink(name)?name.slice(6,name.length):'';};var isFalsyAttrValue=function isFalsyAttrValue(val){return val==null||val===false;};/*  */function genClassForVnode(vnode){var data=vnode.data;var parentNode=vnode;var childNode=vnode;while(childNode.child){childNode=childNode.child._vnode;if(childNode.data){data=mergeClassData(childNode.data,data);}}while(parentNode=parentNode.parent){if(parentNode.data){data=mergeClassData(data,parentNode.data);}}return genClassFromData(data);}function mergeClassData(child,parent){return{staticClass:concat(child.staticClass,parent.staticClass),class:child.class?[child.class,parent.class]:parent.class};}function genClassFromData(data){var dynamicClass=data.class;var staticClass=data.staticClass;if(staticClass||dynamicClass){return concat(staticClass,stringifyClass(dynamicClass));}/* istanbul ignore next */return'';}function concat(a,b){return a?b?a+' '+b:a:b||'';}function stringifyClass(value){var res='';if(!value){return res;}if(typeof value==='string'){return value;}if(Array.isArray(value)){var stringified;for(var i=0,l=value.length;i<l;i++){if(value[i]){if(stringified=stringifyClass(value[i])){res+=stringified+' ';}}}return res.slice(0,-1);}if(isObject(value)){for(var key in value){if(value[key]){res+=key+' ';}}return res.slice(0,-1);}/* istanbul ignore next */return res;}/*  */var namespaceMap={svg:'http://www.w3.org/2000/svg',math:'http://www.w3.org/1998/Math/MathML',xhtml:'http://www.w3.org/1999/xhtml'};var isHTMLTag=makeMap('html,body,base,head,link,meta,style,title,'+'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,'+'div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,'+'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,'+'s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,'+'embed,object,param,source,canvas,script,noscript,del,ins,'+'caption,col,colgroup,table,thead,tbody,td,th,tr,'+'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,'+'output,progress,select,textarea,'+'details,dialog,menu,menuitem,summary,'+'content,element,shadow,template');var isUnaryTag=makeMap('area,base,br,col,embed,frame,hr,img,input,isindex,keygen,'+'link,meta,param,source,track,wbr',true);// Elements that you can, intentionally, leave open
	// (and which close themselves)
	var canBeLeftOpenTag=makeMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source',true);// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
	// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
	var isNonPhrasingTag=makeMap('address,article,aside,base,blockquote,body,caption,col,colgroup,dd,'+'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,'+'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,'+'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,'+'title,tr,track',true);// this map is intentionally selective, only covering SVG elements that may
	// contain child elements.
	var isSVG=makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font,'+'font-face,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,'+'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',true);var isPreTag=function isPreTag(tag){return tag==='pre';};var isReservedTag=function isReservedTag(tag){return isHTMLTag(tag)||isSVG(tag);};function getTagNamespace(tag){if(isSVG(tag)){return'svg';}// basic support for MathML
	// note it doesn't support other MathML elements being component roots
	if(tag==='math'){return'math';}}var unknownElementCache=Object.create(null);function isUnknownElement(tag){/* istanbul ignore if */if(!inBrowser){return true;}if(isReservedTag(tag)){return false;}tag=tag.toLowerCase();/* istanbul ignore if */if(unknownElementCache[tag]!=null){return unknownElementCache[tag];}var el=document.createElement(tag);if(tag.indexOf('-')>-1){// http://stackoverflow.com/a/28210364/1070244
	return unknownElementCache[tag]=el.constructor===window.HTMLUnknownElement||el.constructor===window.HTMLElement;}else{return unknownElementCache[tag]=/HTMLUnknownElement/.test(el.toString());}}/*  *//**
	 * Query an element selector if it's not an element already.
	 */function query(el){if(typeof el==='string'){var selector=el;el=document.querySelector(el);if(!el){"development"!=='production'&&warn('Cannot find element: '+selector);return document.createElement('div');}}return el;}/*  */function createElement$1(tagName,vnode){var elm=document.createElement(tagName);if(tagName!=='select'){return elm;}if(vnode.data&&vnode.data.attrs&&'multiple'in vnode.data.attrs){elm.setAttribute('multiple','multiple');}return elm;}function createElementNS(namespace,tagName){return document.createElementNS(namespaceMap[namespace],tagName);}function createTextNode(text){return document.createTextNode(text);}function createComment(text){return document.createComment(text);}function insertBefore(parentNode,newNode,referenceNode){parentNode.insertBefore(newNode,referenceNode);}function removeChild(node,child){node.removeChild(child);}function appendChild(node,child){node.appendChild(child);}function parentNode(node){return node.parentNode;}function nextSibling(node){return node.nextSibling;}function tagName(node){return node.tagName;}function setTextContent(node,text){node.textContent=text;}function childNodes(node){return node.childNodes;}function setAttribute(node,key,val){node.setAttribute(key,val);}var nodeOps=Object.freeze({createElement:createElement$1,createElementNS:createElementNS,createTextNode:createTextNode,createComment:createComment,insertBefore:insertBefore,removeChild:removeChild,appendChild:appendChild,parentNode:parentNode,nextSibling:nextSibling,tagName:tagName,setTextContent:setTextContent,childNodes:childNodes,setAttribute:setAttribute});/*  */var ref={create:function create(_,vnode){registerRef(vnode);},update:function update(oldVnode,vnode){if(oldVnode.data.ref!==vnode.data.ref){registerRef(oldVnode,true);registerRef(vnode);}},destroy:function destroy(vnode){registerRef(vnode,true);}};function registerRef(vnode,isRemoval){var key=vnode.data.ref;if(!key){return;}var vm=vnode.context;var ref=vnode.child||vnode.elm;var refs=vm.$refs;if(isRemoval){if(Array.isArray(refs[key])){remove$1(refs[key],ref);}else if(refs[key]===ref){refs[key]=undefined;}}else{if(vnode.data.refInFor){if(Array.isArray(refs[key])){refs[key].push(ref);}else{refs[key]=[ref];}}else{refs[key]=ref;}}}/**
	 * Virtual DOM patching algorithm based on Snabbdom by
	 * Simon Friis Vindum (@paldepind)
	 * Licensed under the MIT License
	 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
	 *
	 * modified by Evan You (@yyx990803)
	 *
	
	/*
	 * Not type-checking this because this file is perf-critical and the cost
	 * of making flow understand it is not worth it.
	 */var emptyNode=new VNode('',{},[]);var hooks$1=['create','update','remove','destroy'];function isUndef(s){return s==null;}function isDef(s){return s!=null;}function sameVnode(vnode1,vnode2){return vnode1.key===vnode2.key&&vnode1.tag===vnode2.tag&&vnode1.isComment===vnode2.isComment&&!vnode1.data===!vnode2.data;}function createKeyToOldIdx(children,beginIdx,endIdx){var i,key;var map={};for(i=beginIdx;i<=endIdx;++i){key=children[i].key;if(isDef(key)){map[key]=i;}}return map;}function createPatchFunction(backend){var i,j;var cbs={};var modules=backend.modules;var nodeOps=backend.nodeOps;for(i=0;i<hooks$1.length;++i){cbs[hooks$1[i]]=[];for(j=0;j<modules.length;++j){if(modules[j][hooks$1[i]]!==undefined){cbs[hooks$1[i]].push(modules[j][hooks$1[i]]);}}}function emptyNodeAt(elm){return new VNode(nodeOps.tagName(elm).toLowerCase(),{},[],undefined,elm);}function createRmCb(childElm,listeners){function remove$$1(){if(--remove$$1.listeners===0){removeElement(childElm);}}remove$$1.listeners=listeners;return remove$$1;}function removeElement(el){var parent=nodeOps.parentNode(el);// element may have already been removed due to v-html
	if(parent){nodeOps.removeChild(parent,el);}}function createElm(vnode,insertedVnodeQueue,nested){var i;var data=vnode.data;vnode.isRootInsert=!nested;if(isDef(data)){if(isDef(i=data.hook)&&isDef(i=i.init)){i(vnode);}// after calling the init hook, if the vnode is a child component
	// it should've created a child instance and mounted it. the child
	// component also has set the placeholder vnode's elm.
	// in that case we can just return the element and be done.
	if(isDef(i=vnode.child)){initComponent(vnode,insertedVnodeQueue);return vnode.elm;}}var children=vnode.children;var tag=vnode.tag;if(isDef(tag)){{if(!vnode.ns&&!(config.ignoredElements&&config.ignoredElements.indexOf(tag)>-1)&&config.isUnknownElement(tag)){warn('Unknown custom element: <'+tag+'> - did you '+'register the component correctly? For recursive components, '+'make sure to provide the "name" option.',vnode.context);}}vnode.elm=vnode.ns?nodeOps.createElementNS(vnode.ns,tag):nodeOps.createElement(tag,vnode);setScope(vnode);createChildren(vnode,children,insertedVnodeQueue);if(isDef(data)){invokeCreateHooks(vnode,insertedVnodeQueue);}}else if(vnode.isComment){vnode.elm=nodeOps.createComment(vnode.text);}else{vnode.elm=nodeOps.createTextNode(vnode.text);}return vnode.elm;}function createChildren(vnode,children,insertedVnodeQueue){if(Array.isArray(children)){for(var i=0;i<children.length;++i){nodeOps.appendChild(vnode.elm,createElm(children[i],insertedVnodeQueue,true));}}else if(isPrimitive(vnode.text)){nodeOps.appendChild(vnode.elm,nodeOps.createTextNode(vnode.text));}}function isPatchable(vnode){while(vnode.child){vnode=vnode.child._vnode;}return isDef(vnode.tag);}function invokeCreateHooks(vnode,insertedVnodeQueue){for(var i$1=0;i$1<cbs.create.length;++i$1){cbs.create[i$1](emptyNode,vnode);}i=vnode.data.hook;// Reuse variable
	if(isDef(i)){if(i.create){i.create(emptyNode,vnode);}if(i.insert){insertedVnodeQueue.push(vnode);}}}function initComponent(vnode,insertedVnodeQueue){if(vnode.data.pendingInsert){insertedVnodeQueue.push.apply(insertedVnodeQueue,vnode.data.pendingInsert);}vnode.elm=vnode.child.$el;if(isPatchable(vnode)){invokeCreateHooks(vnode,insertedVnodeQueue);setScope(vnode);}else{// empty component root.
	// skip all element-related modules except for ref (#3455)
	registerRef(vnode);// make sure to invoke the insert hook
	insertedVnodeQueue.push(vnode);}}// set scope id attribute for scoped CSS.
	// this is implemented as a special case to avoid the overhead
	// of going through the normal attribute patching process.
	function setScope(vnode){var i;if(isDef(i=vnode.context)&&isDef(i=i.$options._scopeId)){nodeOps.setAttribute(vnode.elm,i,'');}if(isDef(i=activeInstance)&&i!==vnode.context&&isDef(i=i.$options._scopeId)){nodeOps.setAttribute(vnode.elm,i,'');}}function addVnodes(parentElm,before,vnodes,startIdx,endIdx,insertedVnodeQueue){for(;startIdx<=endIdx;++startIdx){nodeOps.insertBefore(parentElm,createElm(vnodes[startIdx],insertedVnodeQueue),before);}}function invokeDestroyHook(vnode){var i,j;var data=vnode.data;if(isDef(data)){if(isDef(i=data.hook)&&isDef(i=i.destroy)){i(vnode);}for(i=0;i<cbs.destroy.length;++i){cbs.destroy[i](vnode);}}if(isDef(i=vnode.children)){for(j=0;j<vnode.children.length;++j){invokeDestroyHook(vnode.children[j]);}}}function removeVnodes(parentElm,vnodes,startIdx,endIdx){for(;startIdx<=endIdx;++startIdx){var ch=vnodes[startIdx];if(isDef(ch)){if(isDef(ch.tag)){removeAndInvokeRemoveHook(ch);invokeDestroyHook(ch);}else{// Text node
	nodeOps.removeChild(parentElm,ch.elm);}}}}function removeAndInvokeRemoveHook(vnode,rm){if(rm||isDef(vnode.data)){var listeners=cbs.remove.length+1;if(!rm){// directly removing
	rm=createRmCb(vnode.elm,listeners);}else{// we have a recursively passed down rm callback
	// increase the listeners count
	rm.listeners+=listeners;}// recursively invoke hooks on child component root node
	if(isDef(i=vnode.child)&&isDef(i=i._vnode)&&isDef(i.data)){removeAndInvokeRemoveHook(i,rm);}for(i=0;i<cbs.remove.length;++i){cbs.remove[i](vnode,rm);}if(isDef(i=vnode.data.hook)&&isDef(i=i.remove)){i(vnode,rm);}else{rm();}}else{removeElement(vnode.elm);}}function updateChildren(parentElm,oldCh,newCh,insertedVnodeQueue,removeOnly){var oldStartIdx=0;var newStartIdx=0;var oldEndIdx=oldCh.length-1;var oldStartVnode=oldCh[0];var oldEndVnode=oldCh[oldEndIdx];var newEndIdx=newCh.length-1;var newStartVnode=newCh[0];var newEndVnode=newCh[newEndIdx];var oldKeyToIdx,idxInOld,elmToMove,before;// removeOnly is a special flag used only by <transition-group>
	// to ensure removed elements stay in correct relative positions
	// during leaving transitions
	var canMove=!removeOnly;while(oldStartIdx<=oldEndIdx&&newStartIdx<=newEndIdx){if(isUndef(oldStartVnode)){oldStartVnode=oldCh[++oldStartIdx];// Vnode has been moved left
	}else if(isUndef(oldEndVnode)){oldEndVnode=oldCh[--oldEndIdx];}else if(sameVnode(oldStartVnode,newStartVnode)){patchVnode(oldStartVnode,newStartVnode,insertedVnodeQueue);oldStartVnode=oldCh[++oldStartIdx];newStartVnode=newCh[++newStartIdx];}else if(sameVnode(oldEndVnode,newEndVnode)){patchVnode(oldEndVnode,newEndVnode,insertedVnodeQueue);oldEndVnode=oldCh[--oldEndIdx];newEndVnode=newCh[--newEndIdx];}else if(sameVnode(oldStartVnode,newEndVnode)){// Vnode moved right
	patchVnode(oldStartVnode,newEndVnode,insertedVnodeQueue);canMove&&nodeOps.insertBefore(parentElm,oldStartVnode.elm,nodeOps.nextSibling(oldEndVnode.elm));oldStartVnode=oldCh[++oldStartIdx];newEndVnode=newCh[--newEndIdx];}else if(sameVnode(oldEndVnode,newStartVnode)){// Vnode moved left
	patchVnode(oldEndVnode,newStartVnode,insertedVnodeQueue);canMove&&nodeOps.insertBefore(parentElm,oldEndVnode.elm,oldStartVnode.elm);oldEndVnode=oldCh[--oldEndIdx];newStartVnode=newCh[++newStartIdx];}else{if(isUndef(oldKeyToIdx)){oldKeyToIdx=createKeyToOldIdx(oldCh,oldStartIdx,oldEndIdx);}idxInOld=isDef(newStartVnode.key)?oldKeyToIdx[newStartVnode.key]:null;if(isUndef(idxInOld)){// New element
	nodeOps.insertBefore(parentElm,createElm(newStartVnode,insertedVnodeQueue),oldStartVnode.elm);newStartVnode=newCh[++newStartIdx];}else{elmToMove=oldCh[idxInOld];/* istanbul ignore if */if("development"!=='production'&&!elmToMove){warn('It seems there are duplicate keys that is causing an update error. '+'Make sure each v-for item has a unique key.');}if(elmToMove.tag!==newStartVnode.tag){// same key but different element. treat as new element
	nodeOps.insertBefore(parentElm,createElm(newStartVnode,insertedVnodeQueue),oldStartVnode.elm);newStartVnode=newCh[++newStartIdx];}else{patchVnode(elmToMove,newStartVnode,insertedVnodeQueue);oldCh[idxInOld]=undefined;canMove&&nodeOps.insertBefore(parentElm,newStartVnode.elm,oldStartVnode.elm);newStartVnode=newCh[++newStartIdx];}}}}if(oldStartIdx>oldEndIdx){before=isUndef(newCh[newEndIdx+1])?null:newCh[newEndIdx+1].elm;addVnodes(parentElm,before,newCh,newStartIdx,newEndIdx,insertedVnodeQueue);}else if(newStartIdx>newEndIdx){removeVnodes(parentElm,oldCh,oldStartIdx,oldEndIdx);}}function patchVnode(oldVnode,vnode,insertedVnodeQueue,removeOnly){if(oldVnode===vnode){return;}// reuse element for static trees.
	// note we only do this if the vnode is cloned -
	// if the new node is not cloned it means the render functions have been
	// reset by the hot-reload-api and we need to do a proper re-render.
	if(vnode.isStatic&&oldVnode.isStatic&&vnode.key===oldVnode.key&&(vnode.isCloned||vnode.isOnce)){vnode.elm=oldVnode.elm;return;}var i;var data=vnode.data;var hasData=isDef(data);if(hasData&&isDef(i=data.hook)&&isDef(i=i.prepatch)){i(oldVnode,vnode);}var elm=vnode.elm=oldVnode.elm;var oldCh=oldVnode.children;var ch=vnode.children;if(hasData&&isPatchable(vnode)){for(i=0;i<cbs.update.length;++i){cbs.update[i](oldVnode,vnode);}if(isDef(i=data.hook)&&isDef(i=i.update)){i(oldVnode,vnode);}}if(isUndef(vnode.text)){if(isDef(oldCh)&&isDef(ch)){if(oldCh!==ch){updateChildren(elm,oldCh,ch,insertedVnodeQueue,removeOnly);}}else if(isDef(ch)){if(isDef(oldVnode.text)){nodeOps.setTextContent(elm,'');}addVnodes(elm,null,ch,0,ch.length-1,insertedVnodeQueue);}else if(isDef(oldCh)){removeVnodes(elm,oldCh,0,oldCh.length-1);}else if(isDef(oldVnode.text)){nodeOps.setTextContent(elm,'');}}else if(oldVnode.text!==vnode.text){nodeOps.setTextContent(elm,vnode.text);}if(hasData){if(isDef(i=data.hook)&&isDef(i=i.postpatch)){i(oldVnode,vnode);}}}function invokeInsertHook(vnode,queue,initial){// delay insert hooks for component root nodes, invoke them after the
	// element is really inserted
	if(initial&&vnode.parent){vnode.parent.data.pendingInsert=queue;}else{for(var i=0;i<queue.length;++i){queue[i].data.hook.insert(queue[i]);}}}var bailed=false;function hydrate(elm,vnode,insertedVnodeQueue){{if(!assertNodeMatch(elm,vnode)){return false;}}vnode.elm=elm;var tag=vnode.tag;var data=vnode.data;var children=vnode.children;if(isDef(data)){if(isDef(i=data.hook)&&isDef(i=i.init)){i(vnode,true/* hydrating */);}if(isDef(i=vnode.child)){// child component. it should have hydrated its own tree.
	initComponent(vnode,insertedVnodeQueue);return true;}}if(isDef(tag)){if(isDef(children)){var childNodes=nodeOps.childNodes(elm);// empty element, allow client to pick up and populate children
	if(!childNodes.length){createChildren(vnode,children,insertedVnodeQueue);}else{var childrenMatch=true;if(childNodes.length!==children.length){childrenMatch=false;}else{for(var i$1=0;i$1<children.length;i$1++){if(!hydrate(childNodes[i$1],children[i$1],insertedVnodeQueue)){childrenMatch=false;break;}}}if(!childrenMatch){if("development"!=='production'&&typeof console!=='undefined'&&!bailed){bailed=true;console.warn('Parent: ',elm);console.warn('Mismatching childNodes vs. VNodes: ',childNodes,children);}return false;}}}if(isDef(data)){invokeCreateHooks(vnode,insertedVnodeQueue);}}return true;}function assertNodeMatch(node,vnode){if(vnode.tag){return vnode.tag.indexOf('vue-component')===0||vnode.tag.toLowerCase()===nodeOps.tagName(node).toLowerCase();}else{return _toString(vnode.text)===node.data;}}return function patch(oldVnode,vnode,hydrating,removeOnly){if(!vnode){if(oldVnode){invokeDestroyHook(oldVnode);}return;}var elm,parent;var isInitialPatch=false;var insertedVnodeQueue=[];if(!oldVnode){// empty mount, create new root element
	isInitialPatch=true;createElm(vnode,insertedVnodeQueue);}else{var isRealElement=isDef(oldVnode.nodeType);if(!isRealElement&&sameVnode(oldVnode,vnode)){patchVnode(oldVnode,vnode,insertedVnodeQueue,removeOnly);}else{if(isRealElement){// mounting to a real element
	// check if this is server-rendered content and if we can perform
	// a successful hydration.
	if(oldVnode.nodeType===1&&oldVnode.hasAttribute('server-rendered')){oldVnode.removeAttribute('server-rendered');hydrating=true;}if(hydrating){if(hydrate(oldVnode,vnode,insertedVnodeQueue)){invokeInsertHook(vnode,insertedVnodeQueue,true);return oldVnode;}else{warn('The client-side rendered virtual DOM tree is not matching '+'server-rendered content. This is likely caused by incorrect '+'HTML markup, for example nesting block-level elements inside '+'<p>, or missing <tbody>. Bailing hydration and performing '+'full client-side render.');}}// either not server-rendered, or hydration failed.
	// create an empty node and replace it
	oldVnode=emptyNodeAt(oldVnode);}elm=oldVnode.elm;parent=nodeOps.parentNode(elm);createElm(vnode,insertedVnodeQueue);// component root element replaced.
	// update parent placeholder node element.
	if(vnode.parent){vnode.parent.elm=vnode.elm;if(isPatchable(vnode)){for(var i=0;i<cbs.create.length;++i){cbs.create[i](emptyNode,vnode.parent);}}}if(parent!==null){nodeOps.insertBefore(parent,vnode.elm,nodeOps.nextSibling(elm));removeVnodes(parent,[oldVnode],0,0);}else if(isDef(oldVnode.tag)){invokeDestroyHook(oldVnode);}}}invokeInsertHook(vnode,insertedVnodeQueue,isInitialPatch);return vnode.elm;};}/*  */var directives={create:updateDirectives,update:updateDirectives,destroy:function unbindDirectives(vnode){updateDirectives(vnode,emptyNode);}};function updateDirectives(oldVnode,vnode){if(!oldVnode.data.directives&&!vnode.data.directives){return;}var isCreate=oldVnode===emptyNode;var oldDirs=normalizeDirectives$1(oldVnode.data.directives,oldVnode.context);var newDirs=normalizeDirectives$1(vnode.data.directives,vnode.context);var dirsWithInsert=[];var dirsWithPostpatch=[];var key,oldDir,dir;for(key in newDirs){oldDir=oldDirs[key];dir=newDirs[key];if(!oldDir){// new directive, bind
	callHook$1(dir,'bind',vnode,oldVnode);if(dir.def&&dir.def.inserted){dirsWithInsert.push(dir);}}else{// existing directive, update
	dir.oldValue=oldDir.value;callHook$1(dir,'update',vnode,oldVnode);if(dir.def&&dir.def.componentUpdated){dirsWithPostpatch.push(dir);}}}if(dirsWithInsert.length){var callInsert=function callInsert(){dirsWithInsert.forEach(function(dir){callHook$1(dir,'inserted',vnode,oldVnode);});};if(isCreate){mergeVNodeHook(vnode.data.hook||(vnode.data.hook={}),'insert',callInsert,'dir-insert');}else{callInsert();}}if(dirsWithPostpatch.length){mergeVNodeHook(vnode.data.hook||(vnode.data.hook={}),'postpatch',function(){dirsWithPostpatch.forEach(function(dir){callHook$1(dir,'componentUpdated',vnode,oldVnode);});},'dir-postpatch');}if(!isCreate){for(key in oldDirs){if(!newDirs[key]){// no longer present, unbind
	callHook$1(oldDirs[key],'unbind',oldVnode);}}}}var emptyModifiers=Object.create(null);function normalizeDirectives$1(dirs,vm){var res=Object.create(null);if(!dirs){return res;}var i,dir;for(i=0;i<dirs.length;i++){dir=dirs[i];if(!dir.modifiers){dir.modifiers=emptyModifiers;}res[getRawDirName(dir)]=dir;dir.def=resolveAsset(vm.$options,'directives',dir.name,true);}return res;}function getRawDirName(dir){return dir.rawName||dir.name+"."+Object.keys(dir.modifiers||{}).join('.');}function callHook$1(dir,hook,vnode,oldVnode){var fn=dir.def&&dir.def[hook];if(fn){fn(vnode.elm,dir,vnode,oldVnode);}}var baseModules=[ref,directives];/*  */function updateAttrs(oldVnode,vnode){if(!oldVnode.data.attrs&&!vnode.data.attrs){return;}var key,cur,old;var elm=vnode.elm;var oldAttrs=oldVnode.data.attrs||{};var attrs=vnode.data.attrs||{};// clone observed objects, as the user probably wants to mutate it
	if(attrs.__ob__){attrs=vnode.data.attrs=extend({},attrs);}for(key in attrs){cur=attrs[key];old=oldAttrs[key];if(old!==cur){setAttr(elm,key,cur);}}for(key in oldAttrs){if(attrs[key]==null){if(isXlink(key)){elm.removeAttributeNS(xlinkNS,getXlinkProp(key));}else if(!isEnumeratedAttr(key)){elm.removeAttribute(key);}}}}function setAttr(el,key,value){if(isBooleanAttr(key)){// set attribute for blank value
	// e.g. <option disabled>Select one</option>
	if(isFalsyAttrValue(value)){el.removeAttribute(key);}else{el.setAttribute(key,key);}}else if(isEnumeratedAttr(key)){el.setAttribute(key,isFalsyAttrValue(value)||value==='false'?'false':'true');}else if(isXlink(key)){if(isFalsyAttrValue(value)){el.removeAttributeNS(xlinkNS,getXlinkProp(key));}else{el.setAttributeNS(xlinkNS,key,value);}}else{if(isFalsyAttrValue(value)){el.removeAttribute(key);}else{el.setAttribute(key,value);}}}var attrs={create:updateAttrs,update:updateAttrs};/*  */function updateClass(oldVnode,vnode){var el=vnode.elm;var data=vnode.data;var oldData=oldVnode.data;if(!data.staticClass&&!data.class&&(!oldData||!oldData.staticClass&&!oldData.class)){return;}var cls=genClassForVnode(vnode);// handle transition classes
	var transitionClass=el._transitionClasses;if(transitionClass){cls=concat(cls,stringifyClass(transitionClass));}// set the class
	if(cls!==el._prevClass){el.setAttribute('class',cls);el._prevClass=cls;}}var klass={create:updateClass,update:updateClass};// skip type checking this file because we need to attach private properties
	// to elements
	function updateDOMListeners(oldVnode,vnode){if(!oldVnode.data.on&&!vnode.data.on){return;}var on=vnode.data.on||{};var oldOn=oldVnode.data.on||{};var add=vnode.elm._v_add||(vnode.elm._v_add=function(event,handler,capture){vnode.elm.addEventListener(event,handler,capture);});var remove=vnode.elm._v_remove||(vnode.elm._v_remove=function(event,handler){vnode.elm.removeEventListener(event,handler);});updateListeners(on,oldOn,add,remove,vnode.context);}var events={create:updateDOMListeners,update:updateDOMListeners};/*  */function updateDOMProps(oldVnode,vnode){if(!oldVnode.data.domProps&&!vnode.data.domProps){return;}var key,cur;var elm=vnode.elm;var oldProps=oldVnode.data.domProps||{};var props=vnode.data.domProps||{};// clone observed objects, as the user probably wants to mutate it
	if(props.__ob__){props=vnode.data.domProps=extend({},props);}for(key in oldProps){if(props[key]==null){elm[key]='';}}for(key in props){// ignore children if the node has textContent or innerHTML,
	// as these will throw away existing DOM nodes and cause removal errors
	// on subsequent patches (#3360)
	if((key==='textContent'||key==='innerHTML')&&vnode.children){vnode.children.length=0;}cur=props[key];if(key==='value'){// store value as _value as well since
	// non-string values will be stringified
	elm._value=cur;// avoid resetting cursor position when value is the same
	var strCur=cur==null?'':String(cur);if(elm.value!==strCur&&!elm.composing){elm.value=strCur;}}else{elm[key]=cur;}}}var domProps={create:updateDOMProps,update:updateDOMProps};/*  */var parseStyleText=cached(function(cssText){var res={};var hasBackground=cssText.indexOf('background')>=0;// maybe with background-image: url(http://xxx) or base64 img
	var listDelimiter=hasBackground?/;(?![^(]*\))/g:';';var propertyDelimiter=hasBackground?/:(.+)/:':';cssText.split(listDelimiter).forEach(function(item){if(item){var tmp=item.split(propertyDelimiter);tmp.length>1&&(res[tmp[0].trim()]=tmp[1].trim());}});return res;});// merge static and dynamic style data on the same vnode
	function normalizeStyleData(data){var style=normalizeStyleBinding(data.style);// static style is pre-processed into an object during compilation
	// and is always a fresh object, so it's safe to merge into it
	return data.staticStyle?extend(data.staticStyle,style):style;}// normalize possible array / string values into Object
	function normalizeStyleBinding(bindingStyle){if(Array.isArray(bindingStyle)){return toObject(bindingStyle);}if(typeof bindingStyle==='string'){return parseStyleText(bindingStyle);}return bindingStyle;}/**
	 * parent component style should be after child's
	 * so that parent component's style could override it
	 */function getStyle(vnode,checkChild){var res={};var styleData;if(checkChild){var childNode=vnode;while(childNode.child){childNode=childNode.child._vnode;if(childNode.data&&(styleData=normalizeStyleData(childNode.data))){extend(res,styleData);}}}if(styleData=normalizeStyleData(vnode.data)){extend(res,styleData);}var parentNode=vnode;while(parentNode=parentNode.parent){if(parentNode.data&&(styleData=normalizeStyleData(parentNode.data))){extend(res,styleData);}}return res;}/*  */var cssVarRE=/^--/;var setProp=function setProp(el,name,val){/* istanbul ignore if */if(cssVarRE.test(name)){el.style.setProperty(name,val);}else{el.style[normalize(name)]=val;}};var prefixes=['Webkit','Moz','ms'];var testEl;var normalize=cached(function(prop){testEl=testEl||document.createElement('div');prop=camelize(prop);if(prop!=='filter'&&prop in testEl.style){return prop;}var upper=prop.charAt(0).toUpperCase()+prop.slice(1);for(var i=0;i<prefixes.length;i++){var prefixed=prefixes[i]+upper;if(prefixed in testEl.style){return prefixed;}}});function updateStyle(oldVnode,vnode){var data=vnode.data;var oldData=oldVnode.data;if(!data.staticStyle&&!data.style&&!oldData.staticStyle&&!oldData.style){return;}var cur,name;var el=vnode.elm;var oldStyle=oldVnode.data.style||{};var style=normalizeStyleBinding(vnode.data.style)||{};vnode.data.style=style.__ob__?extend({},style):style;var newStyle=getStyle(vnode,true);for(name in oldStyle){if(newStyle[name]==null){setProp(el,name,'');}}for(name in newStyle){cur=newStyle[name];if(cur!==oldStyle[name]){// ie9 setting to null has no effect, must use empty string
	setProp(el,name,cur==null?'':cur);}}}var style={create:updateStyle,update:updateStyle};/*  *//**
	 * Add class with compatibility for SVG since classList is not supported on
	 * SVG elements in IE
	 */function addClass(el,cls){/* istanbul ignore if */if(!cls||!cls.trim()){return;}/* istanbul ignore else */if(el.classList){if(cls.indexOf(' ')>-1){cls.split(/\s+/).forEach(function(c){return el.classList.add(c);});}else{el.classList.add(cls);}}else{var cur=' '+el.getAttribute('class')+' ';if(cur.indexOf(' '+cls+' ')<0){el.setAttribute('class',(cur+cls).trim());}}}/**
	 * Remove class with compatibility for SVG since classList is not supported on
	 * SVG elements in IE
	 */function removeClass(el,cls){/* istanbul ignore if */if(!cls||!cls.trim()){return;}/* istanbul ignore else */if(el.classList){if(cls.indexOf(' ')>-1){cls.split(/\s+/).forEach(function(c){return el.classList.remove(c);});}else{el.classList.remove(cls);}}else{var cur=' '+el.getAttribute('class')+' ';var tar=' '+cls+' ';while(cur.indexOf(tar)>=0){cur=cur.replace(tar,' ');}el.setAttribute('class',cur.trim());}}/*  */var hasTransition=inBrowser&&!isIE9;var TRANSITION='transition';var ANIMATION='animation';// Transition property/event sniffing
	var transitionProp='transition';var transitionEndEvent='transitionend';var animationProp='animation';var animationEndEvent='animationend';if(hasTransition){/* istanbul ignore if */if(window.ontransitionend===undefined&&window.onwebkittransitionend!==undefined){transitionProp='WebkitTransition';transitionEndEvent='webkitTransitionEnd';}if(window.onanimationend===undefined&&window.onwebkitanimationend!==undefined){animationProp='WebkitAnimation';animationEndEvent='webkitAnimationEnd';}}var raf=inBrowser&&window.requestAnimationFrame||setTimeout;function nextFrame(fn){raf(function(){raf(fn);});}function addTransitionClass(el,cls){(el._transitionClasses||(el._transitionClasses=[])).push(cls);addClass(el,cls);}function removeTransitionClass(el,cls){if(el._transitionClasses){remove$1(el._transitionClasses,cls);}removeClass(el,cls);}function whenTransitionEnds(el,expectedType,cb){var ref=getTransitionInfo(el,expectedType);var type=ref.type;var timeout=ref.timeout;var propCount=ref.propCount;if(!type){return cb();}var event=type===TRANSITION?transitionEndEvent:animationEndEvent;var ended=0;var end=function end(){el.removeEventListener(event,onEnd);cb();};var onEnd=function onEnd(e){if(e.target===el){if(++ended>=propCount){end();}}};setTimeout(function(){if(ended<propCount){end();}},timeout+1);el.addEventListener(event,onEnd);}var transformRE=/\b(transform|all)(,|$)/;function getTransitionInfo(el,expectedType){var styles=window.getComputedStyle(el);var transitioneDelays=styles[transitionProp+'Delay'].split(', ');var transitionDurations=styles[transitionProp+'Duration'].split(', ');var transitionTimeout=getTimeout(transitioneDelays,transitionDurations);var animationDelays=styles[animationProp+'Delay'].split(', ');var animationDurations=styles[animationProp+'Duration'].split(', ');var animationTimeout=getTimeout(animationDelays,animationDurations);var type;var timeout=0;var propCount=0;/* istanbul ignore if */if(expectedType===TRANSITION){if(transitionTimeout>0){type=TRANSITION;timeout=transitionTimeout;propCount=transitionDurations.length;}}else if(expectedType===ANIMATION){if(animationTimeout>0){type=ANIMATION;timeout=animationTimeout;propCount=animationDurations.length;}}else{timeout=Math.max(transitionTimeout,animationTimeout);type=timeout>0?transitionTimeout>animationTimeout?TRANSITION:ANIMATION:null;propCount=type?type===TRANSITION?transitionDurations.length:animationDurations.length:0;}var hasTransform=type===TRANSITION&&transformRE.test(styles[transitionProp+'Property']);return{type:type,timeout:timeout,propCount:propCount,hasTransform:hasTransform};}function getTimeout(delays,durations){/* istanbul ignore next */while(delays.length<durations.length){delays=delays.concat(delays);}return Math.max.apply(null,durations.map(function(d,i){return toMs(d)+toMs(delays[i]);}));}function toMs(s){return Number(s.slice(0,-1))*1000;}/*  */function enter(vnode){var el=vnode.elm;// call leave callback now
	if(el._leaveCb){el._leaveCb.cancelled=true;el._leaveCb();}var data=resolveTransition(vnode.data.transition);if(!data){return;}/* istanbul ignore if */if(el._enterCb||el.nodeType!==1){return;}var css=data.css;var type=data.type;var enterClass=data.enterClass;var enterActiveClass=data.enterActiveClass;var appearClass=data.appearClass;var appearActiveClass=data.appearActiveClass;var beforeEnter=data.beforeEnter;var enter=data.enter;var afterEnter=data.afterEnter;var enterCancelled=data.enterCancelled;var beforeAppear=data.beforeAppear;var appear=data.appear;var afterAppear=data.afterAppear;var appearCancelled=data.appearCancelled;// activeInstance will always be the <transition> component managing this
	// transition. One edge case to check is when the <transition> is placed
	// as the root node of a child component. In that case we need to check
	// <transition>'s parent for appear check.
	var transitionNode=activeInstance.$vnode;var context=transitionNode&&transitionNode.parent?transitionNode.parent.context:activeInstance;var isAppear=!context._isMounted||!vnode.isRootInsert;if(isAppear&&!appear&&appear!==''){return;}var startClass=isAppear?appearClass:enterClass;var activeClass=isAppear?appearActiveClass:enterActiveClass;var beforeEnterHook=isAppear?beforeAppear||beforeEnter:beforeEnter;var enterHook=isAppear?typeof appear==='function'?appear:enter:enter;var afterEnterHook=isAppear?afterAppear||afterEnter:afterEnter;var enterCancelledHook=isAppear?appearCancelled||enterCancelled:enterCancelled;var expectsCSS=css!==false&&!isIE9;var userWantsControl=enterHook&&// enterHook may be a bound method which exposes
	// the length of original fn as _length
	(enterHook._length||enterHook.length)>1;var cb=el._enterCb=once(function(){if(expectsCSS){removeTransitionClass(el,activeClass);}if(cb.cancelled){if(expectsCSS){removeTransitionClass(el,startClass);}enterCancelledHook&&enterCancelledHook(el);}else{afterEnterHook&&afterEnterHook(el);}el._enterCb=null;});if(!vnode.data.show){// remove pending leave element on enter by injecting an insert hook
	mergeVNodeHook(vnode.data.hook||(vnode.data.hook={}),'insert',function(){var parent=el.parentNode;var pendingNode=parent&&parent._pending&&parent._pending[vnode.key];if(pendingNode&&pendingNode.tag===vnode.tag&&pendingNode.elm._leaveCb){pendingNode.elm._leaveCb();}enterHook&&enterHook(el,cb);},'transition-insert');}// start enter transition
	beforeEnterHook&&beforeEnterHook(el);if(expectsCSS){addTransitionClass(el,startClass);addTransitionClass(el,activeClass);nextFrame(function(){removeTransitionClass(el,startClass);if(!cb.cancelled&&!userWantsControl){whenTransitionEnds(el,type,cb);}});}if(vnode.data.show){enterHook&&enterHook(el,cb);}if(!expectsCSS&&!userWantsControl){cb();}}function leave(vnode,rm){var el=vnode.elm;// call enter callback now
	if(el._enterCb){el._enterCb.cancelled=true;el._enterCb();}var data=resolveTransition(vnode.data.transition);if(!data){return rm();}/* istanbul ignore if */if(el._leaveCb||el.nodeType!==1){return;}var css=data.css;var type=data.type;var leaveClass=data.leaveClass;var leaveActiveClass=data.leaveActiveClass;var beforeLeave=data.beforeLeave;var leave=data.leave;var afterLeave=data.afterLeave;var leaveCancelled=data.leaveCancelled;var delayLeave=data.delayLeave;var expectsCSS=css!==false&&!isIE9;var userWantsControl=leave&&// leave hook may be a bound method which exposes
	// the length of original fn as _length
	(leave._length||leave.length)>1;var cb=el._leaveCb=once(function(){if(el.parentNode&&el.parentNode._pending){el.parentNode._pending[vnode.key]=null;}if(expectsCSS){removeTransitionClass(el,leaveActiveClass);}if(cb.cancelled){if(expectsCSS){removeTransitionClass(el,leaveClass);}leaveCancelled&&leaveCancelled(el);}else{rm();afterLeave&&afterLeave(el);}el._leaveCb=null;});if(delayLeave){delayLeave(performLeave);}else{performLeave();}function performLeave(){// the delayed leave may have already been cancelled
	if(cb.cancelled){return;}// record leaving element
	if(!vnode.data.show){(el.parentNode._pending||(el.parentNode._pending={}))[vnode.key]=vnode;}beforeLeave&&beforeLeave(el);if(expectsCSS){addTransitionClass(el,leaveClass);addTransitionClass(el,leaveActiveClass);nextFrame(function(){removeTransitionClass(el,leaveClass);if(!cb.cancelled&&!userWantsControl){whenTransitionEnds(el,type,cb);}});}leave&&leave(el,cb);if(!expectsCSS&&!userWantsControl){cb();}}}function resolveTransition(def$$1){if(!def$$1){return;}/* istanbul ignore else */if((typeof def$$1==='undefined'?'undefined':_typeof(def$$1))==='object'){var res={};if(def$$1.css!==false){extend(res,autoCssTransition(def$$1.name||'v'));}extend(res,def$$1);return res;}else if(typeof def$$1==='string'){return autoCssTransition(def$$1);}}var autoCssTransition=cached(function(name){return{enterClass:name+"-enter",leaveClass:name+"-leave",appearClass:name+"-enter",enterActiveClass:name+"-enter-active",leaveActiveClass:name+"-leave-active",appearActiveClass:name+"-enter-active"};});function once(fn){var called=false;return function(){if(!called){called=true;fn();}};}var transition=inBrowser?{create:function create(_,vnode){if(!vnode.data.show){enter(vnode);}},remove:function remove(vnode,rm){/* istanbul ignore else */if(!vnode.data.show){leave(vnode,rm);}else{rm();}}}:{};var platformModules=[attrs,klass,events,domProps,style,transition];/*  */// the directive module should be applied last, after all
	// built-in modules have been applied.
	var modules=platformModules.concat(baseModules);var patch$1=createPatchFunction({nodeOps:nodeOps,modules:modules});/**
	 * Not type checking this file because flow doesn't like attaching
	 * properties to Elements.
	 */var modelableTagRE=/^input|select|textarea|vue-component-[0-9]+(-[0-9a-zA-Z_-]*)?$/;/* istanbul ignore if */if(isIE9){// http://www.matts411.com/post/internet-explorer-9-oninput/
	document.addEventListener('selectionchange',function(){var el=document.activeElement;if(el&&el.vmodel){trigger(el,'input');}});}var model={inserted:function inserted(el,binding,vnode){{if(!modelableTagRE.test(vnode.tag)){warn("v-model is not supported on element type: <"+vnode.tag+">. "+'If you are working with contenteditable, it\'s recommended to '+'wrap a library dedicated for that purpose inside a custom component.',vnode.context);}}if(vnode.tag==='select'){var cb=function cb(){setSelected(el,binding,vnode.context);};cb();/* istanbul ignore if */if(isIE||isEdge){setTimeout(cb,0);}}else if((vnode.tag==='textarea'||el.type==='text')&&!binding.modifiers.lazy){if(!isAndroid){el.addEventListener('compositionstart',onCompositionStart);el.addEventListener('compositionend',onCompositionEnd);}/* istanbul ignore if */if(isIE9){el.vmodel=true;}}},componentUpdated:function componentUpdated(el,binding,vnode){if(vnode.tag==='select'){setSelected(el,binding,vnode.context);// in case the options rendered by v-for have changed,
	// it's possible that the value is out-of-sync with the rendered options.
	// detect such cases and filter out values that no longer has a matching
	// option in the DOM.
	var needReset=el.multiple?binding.value.some(function(v){return hasNoMatchingOption(v,el.options);}):binding.value!==binding.oldValue&&hasNoMatchingOption(binding.value,el.options);if(needReset){trigger(el,'change');}}}};function setSelected(el,binding,vm){var value=binding.value;var isMultiple=el.multiple;if(isMultiple&&!Array.isArray(value)){"development"!=='production'&&warn("<select multiple v-model=\""+binding.expression+"\"> "+"expects an Array value for its binding, but got "+Object.prototype.toString.call(value).slice(8,-1),vm);return;}var selected,option;for(var i=0,l=el.options.length;i<l;i++){option=el.options[i];if(isMultiple){selected=looseIndexOf(value,getValue(option))>-1;if(option.selected!==selected){option.selected=selected;}}else{if(looseEqual(getValue(option),value)){if(el.selectedIndex!==i){el.selectedIndex=i;}return;}}}if(!isMultiple){el.selectedIndex=-1;}}function hasNoMatchingOption(value,options){for(var i=0,l=options.length;i<l;i++){if(looseEqual(getValue(options[i]),value)){return false;}}return true;}function getValue(option){return'_value'in option?option._value:option.value;}function onCompositionStart(e){e.target.composing=true;}function onCompositionEnd(e){e.target.composing=false;trigger(e.target,'input');}function trigger(el,type){var e=document.createEvent('HTMLEvents');e.initEvent(type,true,true);el.dispatchEvent(e);}/*  */// recursively search for possible transition defined inside the component root
	function locateNode(vnode){return vnode.child&&(!vnode.data||!vnode.data.transition)?locateNode(vnode.child._vnode):vnode;}var show={bind:function bind(el,ref,vnode){var value=ref.value;vnode=locateNode(vnode);var transition=vnode.data&&vnode.data.transition;if(value&&transition&&!isIE9){enter(vnode);}var originalDisplay=el.style.display==='none'?'':el.style.display;el.style.display=value?originalDisplay:'none';el.__vOriginalDisplay=originalDisplay;},update:function update(el,ref,vnode){var value=ref.value;var oldValue=ref.oldValue;/* istanbul ignore if */if(value===oldValue){return;}vnode=locateNode(vnode);var transition=vnode.data&&vnode.data.transition;if(transition&&!isIE9){if(value){enter(vnode);el.style.display=el.__vOriginalDisplay;}else{leave(vnode,function(){el.style.display='none';});}}else{el.style.display=value?el.__vOriginalDisplay:'none';}}};var platformDirectives={model:model,show:show};/*  */// Provides transition support for a single element/component.
	// supports transition mode (out-in / in-out)
	var transitionProps={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String};// in case the child is also an abstract component, e.g. <keep-alive>
	// we want to recursively retrieve the real component to be rendered
	function getRealChild(vnode){var compOptions=vnode&&vnode.componentOptions;if(compOptions&&compOptions.Ctor.options.abstract){return getRealChild(getFirstComponentChild(compOptions.children));}else{return vnode;}}function extractTransitionData(comp){var data={};var options=comp.$options;// props
	for(var key in options.propsData){data[key]=comp[key];}// events.
	// extract listeners and pass them directly to the transition methods
	var listeners=options._parentListeners;for(var key$1 in listeners){data[camelize(key$1)]=listeners[key$1].fn;}return data;}function placeholder(h,rawChild){return /\d-keep-alive$/.test(rawChild.tag)?h('keep-alive'):null;}function hasParentTransition(vnode){while(vnode=vnode.parent){if(vnode.data.transition){return true;}}}var Transition={name:'transition',props:transitionProps,abstract:true,render:function render(h){var this$1=this;var children=this.$slots.default;if(!children){return;}// filter out text nodes (possible whitespaces)
	children=children.filter(function(c){return c.tag;});/* istanbul ignore if */if(!children.length){return;}// warn multiple elements
	if("development"!=='production'&&children.length>1){warn('<transition> can only be used on a single element. Use '+'<transition-group> for lists.',this.$parent);}var mode=this.mode;// warn invalid mode
	if("development"!=='production'&&mode&&mode!=='in-out'&&mode!=='out-in'){warn('invalid <transition> mode: '+mode,this.$parent);}var rawChild=children[0];// if this is a component root node and the component's
	// parent container node also has transition, skip.
	if(hasParentTransition(this.$vnode)){return rawChild;}// apply transition data to child
	// use getRealChild() to ignore abstract components e.g. keep-alive
	var child=getRealChild(rawChild);/* istanbul ignore if */if(!child){return rawChild;}if(this._leaving){return placeholder(h,rawChild);}var key=child.key=child.key==null||child.isStatic?"__v"+(child.tag+this._uid)+"__":child.key;var data=(child.data||(child.data={})).transition=extractTransitionData(this);var oldRawChild=this._vnode;var oldChild=getRealChild(oldRawChild);// mark v-show
	// so that the transition module can hand over the control to the directive
	if(child.data.directives&&child.data.directives.some(function(d){return d.name==='show';})){child.data.show=true;}if(oldChild&&oldChild.data&&oldChild.key!==key){// replace old child transition data with fresh one
	// important for dynamic transitions!
	var oldData=oldChild.data.transition=extend({},data);// handle transition mode
	if(mode==='out-in'){// return placeholder node and queue update when leave finishes
	this._leaving=true;mergeVNodeHook(oldData,'afterLeave',function(){this$1._leaving=false;this$1.$forceUpdate();},key);return placeholder(h,rawChild);}else if(mode==='in-out'){var delayedLeave;var performLeave=function performLeave(){delayedLeave();};mergeVNodeHook(data,'afterEnter',performLeave,key);mergeVNodeHook(data,'enterCancelled',performLeave,key);mergeVNodeHook(oldData,'delayLeave',function(leave){delayedLeave=leave;},key);}}return rawChild;}};/*  */// Provides transition support for list items.
	// supports move transitions using the FLIP technique.
	// Because the vdom's children update algorithm is "unstable" - i.e.
	// it doesn't guarantee the relative positioning of removed elements,
	// we force transition-group to update its children into two passes:
	// in the first pass, we remove all nodes that need to be removed,
	// triggering their leaving transition; in the second pass, we insert/move
	// into the final disired state. This way in the second pass removed
	// nodes will remain where they should be.
	var props=extend({tag:String,moveClass:String},transitionProps);delete props.mode;var TransitionGroup={props:props,render:function render(h){var tag=this.tag||this.$vnode.data.tag||'span';var map=Object.create(null);var prevChildren=this.prevChildren=this.children;var rawChildren=this.$slots.default||[];var children=this.children=[];var transitionData=extractTransitionData(this);for(var i=0;i<rawChildren.length;i++){var c=rawChildren[i];if(c.tag){if(c.key!=null&&String(c.key).indexOf('__vlist')!==0){children.push(c);map[c.key]=c;(c.data||(c.data={})).transition=transitionData;}else{var opts=c.componentOptions;var name=opts?opts.Ctor.options.name||opts.tag:c.tag;warn("<transition-group> children must be keyed: <"+name+">");}}}if(prevChildren){var kept=[];var removed=[];for(var i$1=0;i$1<prevChildren.length;i$1++){var c$1=prevChildren[i$1];c$1.data.transition=transitionData;c$1.data.pos=c$1.elm.getBoundingClientRect();if(map[c$1.key]){kept.push(c$1);}else{removed.push(c$1);}}this.kept=h(tag,null,kept);this.removed=removed;}return h(tag,null,children);},beforeUpdate:function beforeUpdate(){// force removing pass
	this.__patch__(this._vnode,this.kept,false,// hydrating
	true// removeOnly (!important, avoids unnecessary moves)
	);this._vnode=this.kept;},updated:function updated(){var children=this.prevChildren;var moveClass=this.moveClass||this.name+'-move';if(!children.length||!this.hasMove(children[0].elm,moveClass)){return;}// we divide the work into three loops to avoid mixing DOM reads and writes
	// in each iteration - which helps prevent layout thrashing.
	children.forEach(callPendingCbs);children.forEach(recordPosition);children.forEach(applyTranslation);// force reflow to put everything in position
	var f=document.body.offsetHeight;// eslint-disable-line
	children.forEach(function(c){if(c.data.moved){var el=c.elm;var s=el.style;addTransitionClass(el,moveClass);s.transform=s.WebkitTransform=s.transitionDuration='';el.addEventListener(transitionEndEvent,el._moveCb=function cb(e){if(!e||/transform$/.test(e.propertyName)){el.removeEventListener(transitionEndEvent,cb);el._moveCb=null;removeTransitionClass(el,moveClass);}});}});},methods:{hasMove:function hasMove(el,moveClass){/* istanbul ignore if */if(!hasTransition){return false;}if(this._hasMove!=null){return this._hasMove;}addTransitionClass(el,moveClass);var info=getTransitionInfo(el);removeTransitionClass(el,moveClass);return this._hasMove=info.hasTransform;}}};function callPendingCbs(c){/* istanbul ignore if */if(c.elm._moveCb){c.elm._moveCb();}/* istanbul ignore if */if(c.elm._enterCb){c.elm._enterCb();}}function recordPosition(c){c.data.newPos=c.elm.getBoundingClientRect();}function applyTranslation(c){var oldPos=c.data.pos;var newPos=c.data.newPos;var dx=oldPos.left-newPos.left;var dy=oldPos.top-newPos.top;if(dx||dy){c.data.moved=true;var s=c.elm.style;s.transform=s.WebkitTransform="translate("+dx+"px,"+dy+"px)";s.transitionDuration='0s';}}var platformComponents={Transition:Transition,TransitionGroup:TransitionGroup};/*  */// install platform specific utils
	Vue$3.config.isUnknownElement=isUnknownElement;Vue$3.config.isReservedTag=isReservedTag;Vue$3.config.getTagNamespace=getTagNamespace;Vue$3.config.mustUseProp=mustUseProp;// install platform runtime directives & components
	extend(Vue$3.options.directives,platformDirectives);extend(Vue$3.options.components,platformComponents);// install platform patch function
	Vue$3.prototype.__patch__=config._isServer?noop:patch$1;// wrap mount
	Vue$3.prototype.$mount=function(el,hydrating){el=el&&!config._isServer?query(el):undefined;return this._mount(el,hydrating);};// devtools global hook
	/* istanbul ignore next */setTimeout(function(){if(config.devtools){if(devtools){devtools.emit('init',Vue$3);}else if("development"!=='production'&&inBrowser&&/Chrome\/\d+/.test(window.navigator.userAgent)){console.log('Download the Vue Devtools for a better development experience:\n'+'https://github.com/vuejs/vue-devtools');}}},0);/*  */// check whether current browser encodes a char inside attribute values
	function shouldDecode(content,encoded){var div=document.createElement('div');div.innerHTML="<div a=\""+content+"\">";return div.innerHTML.indexOf(encoded)>0;}// #3663
	// IE encodes newlines inside attribute values while other browsers don't
	var shouldDecodeNewlines=inBrowser?shouldDecode('\n','&#10;'):false;/*  */var decoder;function decode(html){decoder=decoder||document.createElement('div');decoder.innerHTML=html;return decoder.textContent;}/**
	 * Not type-checking this file because it's mostly vendor code.
	 *//*!
	 * HTML Parser By John Resig (ejohn.org)
	 * Modified by Juriy "kangax" Zaytsev
	 * Original code by Erik Arvidsson, Mozilla Public License
	 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
	 */// Regular Expressions for parsing tags and attributes
	var singleAttrIdentifier=/([^\s"'<>/=]+)/;var singleAttrAssign=/(?:=)/;var singleAttrValues=[// attr value double quotes
	/"([^"]*)"+/.source,// attr value, single quotes
	/'([^']*)'+/.source,// attr value, no quotes
	/([^\s"'=<>`]+)/.source];var attribute=new RegExp('^\\s*'+singleAttrIdentifier.source+'(?:\\s*('+singleAttrAssign.source+')'+'\\s*(?:'+singleAttrValues.join('|')+'))?');// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
	// but for Vue templates we can enforce a simple charset
	var ncname='[a-zA-Z_][\\w\\-\\.]*';var qnameCapture='((?:'+ncname+'\\:)?'+ncname+')';var startTagOpen=new RegExp('^<'+qnameCapture);var startTagClose=/^\s*(\/?)>/;var endTag=new RegExp('^<\\/'+qnameCapture+'[^>]*>');var doctype=/^<!DOCTYPE [^>]+>/i;var comment=/^<!--/;var conditionalComment=/^<!\[/;var IS_REGEX_CAPTURING_BROKEN=false;'x'.replace(/x(.)?/g,function(m,g){IS_REGEX_CAPTURING_BROKEN=g==='';});// Special Elements (can contain anything)
	var isScriptOrStyle=makeMap('script,style',true);var hasLang=function hasLang(attr){return attr.name==='lang'&&attr.value!=='html';};var isSpecialTag=function isSpecialTag(tag,isSFC,stack){if(isScriptOrStyle(tag)){return true;}// top-level template that has a pre-processor
	if(isSFC&&tag==='template'&&stack.length===1&&stack[0].attrs.some(hasLang)){return true;}return false;};var reCache={};var ltRE=/&lt;/g;var gtRE=/&gt;/g;var nlRE=/&#10;/g;var ampRE=/&amp;/g;var quoteRE=/&quot;/g;function decodeAttr(value,shouldDecodeNewlines){if(shouldDecodeNewlines){value=value.replace(nlRE,'\n');}return value.replace(ltRE,'<').replace(gtRE,'>').replace(ampRE,'&').replace(quoteRE,'"');}function parseHTML(html,options){var stack=[];var expectHTML=options.expectHTML;var isUnaryTag$$1=options.isUnaryTag||no;var index=0;var last,lastTag;while(html){last=html;// Make sure we're not in a script or style element
	if(!lastTag||!isSpecialTag(lastTag,options.sfc,stack)){var textEnd=html.indexOf('<');if(textEnd===0){// Comment:
	if(comment.test(html)){var commentEnd=html.indexOf('-->');if(commentEnd>=0){advance(commentEnd+3);continue;}}// http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
	if(conditionalComment.test(html)){var conditionalEnd=html.indexOf(']>');if(conditionalEnd>=0){advance(conditionalEnd+2);continue;}}// Doctype:
	var doctypeMatch=html.match(doctype);if(doctypeMatch){advance(doctypeMatch[0].length);continue;}// End tag:
	var endTagMatch=html.match(endTag);if(endTagMatch){var curIndex=index;advance(endTagMatch[0].length);parseEndTag(endTagMatch[0],endTagMatch[1],curIndex,index);continue;}// Start tag:
	var startTagMatch=parseStartTag();if(startTagMatch){handleStartTag(startTagMatch);continue;}}var text=void 0,rest$1=void 0,next=void 0;if(textEnd>0){rest$1=html.slice(textEnd);while(!endTag.test(rest$1)&&!startTagOpen.test(rest$1)&&!comment.test(rest$1)&&!conditionalComment.test(rest$1)){// < in plain text, be forgiving and treat it as text
	next=rest$1.indexOf('<',1);if(next<0){break;}textEnd+=next;rest$1=html.slice(textEnd);}text=html.substring(0,textEnd);advance(textEnd);}if(textEnd<0){text=html;html='';}if(options.chars&&text){options.chars(text);}}else{var stackedTag=lastTag.toLowerCase();var reStackedTag=reCache[stackedTag]||(reCache[stackedTag]=new RegExp('([\\s\\S]*?)(</'+stackedTag+'[^>]*>)','i'));var endTagLength=0;var rest=html.replace(reStackedTag,function(all,text,endTag){endTagLength=endTag.length;if(stackedTag!=='script'&&stackedTag!=='style'&&stackedTag!=='noscript'){text=text.replace(/<!--([\s\S]*?)-->/g,'$1').replace(/<!\[CDATA\[([\s\S]*?)]]>/g,'$1');}if(options.chars){options.chars(text);}return'';});index+=html.length-rest.length;html=rest;parseEndTag('</'+stackedTag+'>',stackedTag,index-endTagLength,index);}if(html===last&&options.chars){options.chars(html);break;}}// Clean up any remaining tags
	parseEndTag();function advance(n){index+=n;html=html.substring(n);}function parseStartTag(){var start=html.match(startTagOpen);if(start){var match={tagName:start[1],attrs:[],start:index};advance(start[0].length);var end,attr;while(!(end=html.match(startTagClose))&&(attr=html.match(attribute))){advance(attr[0].length);match.attrs.push(attr);}if(end){match.unarySlash=end[1];advance(end[0].length);match.end=index;return match;}}}function handleStartTag(match){var tagName=match.tagName;var unarySlash=match.unarySlash;if(expectHTML){if(lastTag==='p'&&isNonPhrasingTag(tagName)){parseEndTag('',lastTag);}if(canBeLeftOpenTag(tagName)&&lastTag===tagName){parseEndTag('',tagName);}}var unary=isUnaryTag$$1(tagName)||tagName==='html'&&lastTag==='head'||!!unarySlash;var l=match.attrs.length;var attrs=new Array(l);for(var i=0;i<l;i++){var args=match.attrs[i];// hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
	if(IS_REGEX_CAPTURING_BROKEN&&args[0].indexOf('""')===-1){if(args[3]===''){delete args[3];}if(args[4]===''){delete args[4];}if(args[5]===''){delete args[5];}}var value=args[3]||args[4]||args[5]||'';attrs[i]={name:args[1],value:decodeAttr(value,options.shouldDecodeNewlines)};}if(!unary){stack.push({tag:tagName,attrs:attrs});lastTag=tagName;unarySlash='';}if(options.start){options.start(tagName,attrs,unary,match.start,match.end);}}function parseEndTag(tag,tagName,start,end){var pos;if(start==null){start=index;}if(end==null){end=index;}// Find the closest opened tag of the same type
	if(tagName){var needle=tagName.toLowerCase();for(pos=stack.length-1;pos>=0;pos--){if(stack[pos].tag.toLowerCase()===needle){break;}}}else{// If no tag name is provided, clean shop
	pos=0;}if(pos>=0){// Close all the open elements, up the stack
	for(var i=stack.length-1;i>=pos;i--){if(options.end){options.end(stack[i].tag,start,end);}}// Remove the open elements from the stack
	stack.length=pos;lastTag=pos&&stack[pos-1].tag;}else if(tagName.toLowerCase()==='br'){if(options.start){options.start(tagName,[],true,start,end);}}else if(tagName.toLowerCase()==='p'){if(options.start){options.start(tagName,[],false,start,end);}if(options.end){options.end(tagName,start,end);}}}}/*  */function parseFilters(exp){var inSingle=false;var inDouble=false;var curly=0;var square=0;var paren=0;var lastFilterIndex=0;var c,prev,i,expression,filters;for(i=0;i<exp.length;i++){prev=c;c=exp.charCodeAt(i);if(inSingle){// check single quote
	if(c===0x27&&prev!==0x5C){inSingle=!inSingle;}}else if(inDouble){// check double quote
	if(c===0x22&&prev!==0x5C){inDouble=!inDouble;}}else if(c===0x7C&&// pipe
	exp.charCodeAt(i+1)!==0x7C&&exp.charCodeAt(i-1)!==0x7C&&!curly&&!square&&!paren){if(expression===undefined){// first filter, end of expression
	lastFilterIndex=i+1;expression=exp.slice(0,i).trim();}else{pushFilter();}}else{switch(c){case 0x22:inDouble=true;break;// "
	case 0x27:inSingle=true;break;// '
	case 0x28:paren++;break;// (
	case 0x29:paren--;break;// )
	case 0x5B:square++;break;// [
	case 0x5D:square--;break;// ]
	case 0x7B:curly++;break;// {
	case 0x7D:curly--;break;// }
	}}}if(expression===undefined){expression=exp.slice(0,i).trim();}else if(lastFilterIndex!==0){pushFilter();}function pushFilter(){(filters||(filters=[])).push(exp.slice(lastFilterIndex,i).trim());lastFilterIndex=i+1;}if(filters){for(i=0;i<filters.length;i++){expression=wrapFilter(expression,filters[i]);}}return expression;}function wrapFilter(exp,filter){var i=filter.indexOf('(');if(i<0){// _f: resolveFilter
	return"_f(\""+filter+"\")("+exp+")";}else{var name=filter.slice(0,i);var args=filter.slice(i+1);return"_f(\""+name+"\")("+exp+","+args;}}/*  */var defaultTagRE=/\{\{((?:.|\n)+?)\}\}/g;var regexEscapeRE=/[-.*+?^${}()|[\]/\\]/g;var buildRegex=cached(function(delimiters){var open=delimiters[0].replace(regexEscapeRE,'\\$&');var close=delimiters[1].replace(regexEscapeRE,'\\$&');return new RegExp(open+'((?:.|\\n)+?)'+close,'g');});function parseText(text,delimiters){var tagRE=delimiters?buildRegex(delimiters):defaultTagRE;if(!tagRE.test(text)){return;}var tokens=[];var lastIndex=tagRE.lastIndex=0;var match,index;while(match=tagRE.exec(text)){index=match.index;// push text token
	if(index>lastIndex){tokens.push(JSON.stringify(text.slice(lastIndex,index)));}// tag token
	var exp=parseFilters(match[1].trim());tokens.push("_s("+exp+")");lastIndex=index+match[0].length;}if(lastIndex<text.length){tokens.push(JSON.stringify(text.slice(lastIndex)));}return tokens.join('+');}/*  */function baseWarn(msg){console.error("[Vue parser]: "+msg);}function pluckModuleFunction(modules,key){return modules?modules.map(function(m){return m[key];}).filter(function(_){return _;}):[];}function addProp(el,name,value){(el.props||(el.props=[])).push({name:name,value:value});}function addAttr(el,name,value){(el.attrs||(el.attrs=[])).push({name:name,value:value});}function addDirective(el,name,rawName,value,arg,modifiers){(el.directives||(el.directives=[])).push({name:name,rawName:rawName,value:value,arg:arg,modifiers:modifiers});}function addHandler(el,name,value,modifiers,important){// check capture modifier
	if(modifiers&&modifiers.capture){delete modifiers.capture;name='!'+name;// mark the event as captured
	}var events;if(modifiers&&modifiers.native){delete modifiers.native;events=el.nativeEvents||(el.nativeEvents={});}else{events=el.events||(el.events={});}var newHandler={value:value,modifiers:modifiers};var handlers=events[name];/* istanbul ignore if */if(Array.isArray(handlers)){important?handlers.unshift(newHandler):handlers.push(newHandler);}else if(handlers){events[name]=important?[newHandler,handlers]:[handlers,newHandler];}else{events[name]=newHandler;}}function getBindingAttr(el,name,getStatic){var dynamicValue=getAndRemoveAttr(el,':'+name)||getAndRemoveAttr(el,'v-bind:'+name);if(dynamicValue!=null){return dynamicValue;}else if(getStatic!==false){var staticValue=getAndRemoveAttr(el,name);if(staticValue!=null){return JSON.stringify(staticValue);}}}function getAndRemoveAttr(el,name){var val;if((val=el.attrsMap[name])!=null){var list=el.attrsList;for(var i=0,l=list.length;i<l;i++){if(list[i].name===name){list.splice(i,1);break;}}}return val;}var len;var str;var chr;var index$1;var expressionPos;var expressionEndPos;/**
	 * parse directive model to do the array update transform. a[idx] = val => $$a.splice($$idx, 1, val)
	 *
	 * for loop possible cases:
	 *
	 * - test
	 * - test[idx]
	 * - test[test1[idx]]
	 * - test["a"][idx]
	 * - xxx.test[a[a].test1[idx]]
	 * - test.xxx.a["asa"][test1[idx]]
	 *
	 */function parseModel(val){str=val;len=str.length;index$1=expressionPos=expressionEndPos=0;if(val.indexOf('[')<0||val.lastIndexOf(']')<len-1){return{exp:val,idx:null};}while(!eof()){chr=next();/* istanbul ignore if */if(isStringStart(chr)){parseString(chr);}else if(chr===0x5B){parseBracket(chr);}}return{exp:val.substring(0,expressionPos),idx:val.substring(expressionPos+1,expressionEndPos)};}function next(){return str.charCodeAt(++index$1);}function eof(){return index$1>=len;}function isStringStart(chr){return chr===0x22||chr===0x27;}function parseBracket(chr){var inBracket=1;expressionPos=index$1;while(!eof()){chr=next();if(isStringStart(chr)){parseString(chr);continue;}if(chr===0x5B){inBracket++;}if(chr===0x5D){inBracket--;}if(inBracket===0){expressionEndPos=index$1;break;}}}function parseString(chr){var stringQuote=chr;while(!eof()){chr=next();if(chr===stringQuote){break;}}}/*  */var dirRE=/^v-|^@|^:/;var forAliasRE=/(.*?)\s+(?:in|of)\s+(.*)/;var forIteratorRE=/\(([^,]*),([^,]*)(?:,([^,]*))?\)/;var bindRE=/^:|^v-bind:/;var onRE=/^@|^v-on:/;var argRE=/:(.*)$/;var modifierRE=/\.[^.]+/g;var specialNewlineRE=/\u2028|\u2029/g;var decodeHTMLCached=cached(decode);// configurable state
	var warn$1;var platformGetTagNamespace;var platformMustUseProp;var platformIsPreTag;var preTransforms;var transforms;var postTransforms;var delimiters;/**
	 * Convert HTML string to AST.
	 */function parse(template,options){warn$1=options.warn||baseWarn;platformGetTagNamespace=options.getTagNamespace||no;platformMustUseProp=options.mustUseProp||no;platformIsPreTag=options.isPreTag||no;preTransforms=pluckModuleFunction(options.modules,'preTransformNode');transforms=pluckModuleFunction(options.modules,'transformNode');postTransforms=pluckModuleFunction(options.modules,'postTransformNode');delimiters=options.delimiters;var stack=[];var preserveWhitespace=options.preserveWhitespace!==false;var root;var currentParent;var inVPre=false;var inPre=false;var warned=false;parseHTML(template,{expectHTML:options.expectHTML,isUnaryTag:options.isUnaryTag,shouldDecodeNewlines:options.shouldDecodeNewlines,start:function start(tag,attrs,unary){// check namespace.
	// inherit parent ns if there is one
	var ns=currentParent&&currentParent.ns||platformGetTagNamespace(tag);// handle IE svg bug
	/* istanbul ignore if */if(options.isIE&&ns==='svg'){attrs=guardIESVGBug(attrs);}var element={type:1,tag:tag,attrsList:attrs,attrsMap:makeAttrsMap(attrs,options.isIE),parent:currentParent,children:[]};if(ns){element.ns=ns;}if("client"!=='server'&&isForbiddenTag(element)){element.forbidden=true;"development"!=='production'&&warn$1('Templates should only be responsible for mapping the state to the '+'UI. Avoid placing tags with side-effects in your templates, such as '+"<"+tag+">.");}// apply pre-transforms
	for(var i=0;i<preTransforms.length;i++){preTransforms[i](element,options);}if(!inVPre){processPre(element);if(element.pre){inVPre=true;}}if(platformIsPreTag(element.tag)){inPre=true;}if(inVPre){processRawAttrs(element);}else{processFor(element);processIf(element);processOnce(element);processKey(element);// determine whether this is a plain element after
	// removing structural attributes
	element.plain=!element.key&&!attrs.length;processRef(element);processSlot(element);processComponent(element);for(var i$1=0;i$1<transforms.length;i$1++){transforms[i$1](element,options);}processAttrs(element);}function checkRootConstraints(el){if("development"!=='production'&&!warned){if(el.tag==='slot'||el.tag==='template'){warned=true;warn$1("Cannot use <"+el.tag+"> as component root element because it may "+'contain multiple nodes:\n'+template);}if(el.attrsMap.hasOwnProperty('v-for')){warned=true;warn$1('Cannot use v-for on stateful component root element because '+'it renders multiple elements:\n'+template);}}}// tree management
	if(!root){root=element;checkRootConstraints(root);}else if(!stack.length){// allow 2 root elements with v-if and v-else
	if(root.if&&element.else){checkRootConstraints(element);root.elseBlock=element;}else if("development"!=='production'&&!warned){warned=true;warn$1("Component template should contain exactly one root element:\n\n"+template);}}if(currentParent&&!element.forbidden){if(element.else){processElse(element,currentParent);}else{currentParent.children.push(element);element.parent=currentParent;}}if(!unary){currentParent=element;stack.push(element);}// apply post-transforms
	for(var i$2=0;i$2<postTransforms.length;i$2++){postTransforms[i$2](element,options);}},end:function end(){// remove trailing whitespace
	var element=stack[stack.length-1];var lastNode=element.children[element.children.length-1];if(lastNode&&lastNode.type===3&&lastNode.text===' '){element.children.pop();}// pop stack
	stack.length-=1;currentParent=stack[stack.length-1];// check pre state
	if(element.pre){inVPre=false;}if(platformIsPreTag(element.tag)){inPre=false;}},chars:function chars(text){if(!currentParent){if("development"!=='production'&&!warned&&text===template){warned=true;warn$1('Component template requires a root element, rather than just text:\n\n'+template);}return;}// IE textarea placeholder bug
	/* istanbul ignore if */if(options.isIE&&currentParent.tag==='textarea'&&currentParent.attrsMap.placeholder===text){return;}text=inPre||text.trim()?decodeHTMLCached(text)// only preserve whitespace if its not right after a starting tag
	:preserveWhitespace&&currentParent.children.length?' ':'';if(text){var expression;if(!inVPre&&text!==' '&&(expression=parseText(text,delimiters))){currentParent.children.push({type:2,expression:expression,text:text});}else{// #3895 special character
	text=text.replace(specialNewlineRE,'');currentParent.children.push({type:3,text:text});}}}});return root;}function processPre(el){if(getAndRemoveAttr(el,'v-pre')!=null){el.pre=true;}}function processRawAttrs(el){var l=el.attrsList.length;if(l){var attrs=el.attrs=new Array(l);for(var i=0;i<l;i++){attrs[i]={name:el.attrsList[i].name,value:JSON.stringify(el.attrsList[i].value)};}}else if(!el.pre){// non root node in pre blocks with no attributes
	el.plain=true;}}function processKey(el){var exp=getBindingAttr(el,'key');if(exp){if("development"!=='production'&&el.tag==='template'){warn$1("<template> cannot be keyed. Place the key on real elements instead.");}el.key=exp;}}function processRef(el){var ref=getBindingAttr(el,'ref');if(ref){el.ref=ref;el.refInFor=checkInFor(el);}}function processFor(el){var exp;if(exp=getAndRemoveAttr(el,'v-for')){var inMatch=exp.match(forAliasRE);if(!inMatch){"development"!=='production'&&warn$1("Invalid v-for expression: "+exp);return;}el.for=inMatch[2].trim();var alias=inMatch[1].trim();var iteratorMatch=alias.match(forIteratorRE);if(iteratorMatch){el.alias=iteratorMatch[1].trim();el.iterator1=iteratorMatch[2].trim();if(iteratorMatch[3]){el.iterator2=iteratorMatch[3].trim();}}else{el.alias=alias;}}}function processIf(el){var exp=getAndRemoveAttr(el,'v-if');if(exp){el.if=exp;}if(getAndRemoveAttr(el,'v-else')!=null){el.else=true;}}function processElse(el,parent){var prev=findPrevElement(parent.children);if(prev&&prev.if){prev.elseBlock=el;}else{warn$1("v-else used on element <"+el.tag+"> without corresponding v-if.");}}function processOnce(el){var once=getAndRemoveAttr(el,'v-once');if(once!=null){el.once=true;}}function processSlot(el){if(el.tag==='slot'){el.slotName=getBindingAttr(el,'name');}else{var slotTarget=getBindingAttr(el,'slot');if(slotTarget){el.slotTarget=slotTarget;}}}function processComponent(el){var binding;if(binding=getBindingAttr(el,'is')){el.component=binding;}if(getAndRemoveAttr(el,'inline-template')!=null){el.inlineTemplate=true;}}function processAttrs(el){var list=el.attrsList;var i,l,name,rawName,value,arg,modifiers,isProp;for(i=0,l=list.length;i<l;i++){name=rawName=list[i].name;value=list[i].value;if(dirRE.test(name)){// mark element as dynamic
	el.hasBindings=true;// modifiers
	modifiers=parseModifiers(name);if(modifiers){name=name.replace(modifierRE,'');}if(bindRE.test(name)){// v-bind
	name=name.replace(bindRE,'');if(modifiers&&modifiers.prop){isProp=true;name=camelize(name);if(name==='innerHtml'){name='innerHTML';}}if(isProp||platformMustUseProp(name)){addProp(el,name,value);}else{addAttr(el,name,value);}}else if(onRE.test(name)){// v-on
	name=name.replace(onRE,'');addHandler(el,name,value,modifiers);}else{// normal directives
	name=name.replace(dirRE,'');// parse arg
	var argMatch=name.match(argRE);if(argMatch&&(arg=argMatch[1])){name=name.slice(0,-(arg.length+1));}addDirective(el,name,rawName,value,arg,modifiers);if("development"!=='production'&&name==='model'){checkForAliasModel(el,value);}}}else{// literal attribute
	{var expression=parseText(value,delimiters);if(expression){warn$1(name+"=\""+value+"\": "+'Interpolation inside attributes has been removed. '+'Use v-bind or the colon shorthand instead. For example, '+'instead of <div id="{{ val }}">, use <div :id="val">.');}}addAttr(el,name,JSON.stringify(value));}}}function checkInFor(el){var parent=el;while(parent){if(parent.for!==undefined){return true;}parent=parent.parent;}return false;}function parseModifiers(name){var match=name.match(modifierRE);if(match){var ret={};match.forEach(function(m){ret[m.slice(1)]=true;});return ret;}}function makeAttrsMap(attrs,isIE){var map={};for(var i=0,l=attrs.length;i<l;i++){if("development"!=='production'&&map[attrs[i].name]&&!isIE){warn$1('duplicate attribute: '+attrs[i].name);}map[attrs[i].name]=attrs[i].value;}return map;}function findPrevElement(children){var i=children.length;while(i--){if(children[i].tag){return children[i];}}}function isForbiddenTag(el){return el.tag==='style'||el.tag==='script'&&(!el.attrsMap.type||el.attrsMap.type==='text/javascript');}var ieNSBug=/^xmlns:NS\d+/;var ieNSPrefix=/^NS\d+:/;/* istanbul ignore next */function guardIESVGBug(attrs){var res=[];for(var i=0;i<attrs.length;i++){var attr=attrs[i];if(!ieNSBug.test(attr.name)){attr.name=attr.name.replace(ieNSPrefix,'');res.push(attr);}}return res;}function checkForAliasModel(el,value){var _el=el;while(_el){if(_el.for&&_el.alias===value){warn$1("<"+el.tag+" v-model=\""+value+"\">: "+"You are binding v-model directly to a v-for iteration alias. "+"This will not be able to modify the v-for source array because "+"writing to the alias is like modifying a function local variable. "+"Consider using an array of objects and use v-model on an object property instead.");}_el=_el.parent;}}/*  */var isStaticKey;var isPlatformReservedTag;var genStaticKeysCached=cached(genStaticKeys$1);/**
	 * Goal of the optimizer: walk the generated template AST tree
	 * and detect sub-trees that are purely static, i.e. parts of
	 * the DOM that never needs to change.
	 *
	 * Once we detect these sub-trees, we can:
	 *
	 * 1. Hoist them into constants, so that we no longer need to
	 *    create fresh nodes for them on each re-render;
	 * 2. Completely skip them in the patching process.
	 */function optimize(root,options){if(!root){return;}isStaticKey=genStaticKeysCached(options.staticKeys||'');isPlatformReservedTag=options.isReservedTag||function(){return false;};// first pass: mark all non-static nodes.
	markStatic(root);// second pass: mark static roots.
	markStaticRoots(root,false);}function genStaticKeys$1(keys){return makeMap('type,tag,attrsList,attrsMap,plain,parent,children,attrs'+(keys?','+keys:''));}function markStatic(node){node.static=isStatic(node);if(node.type===1){// do not make component slot content static. this avoids
	// 1. components not able to mutate slot nodes
	// 2. static slot content fails for hot-reloading
	if(!isPlatformReservedTag(node.tag)&&node.tag!=='slot'&&node.attrsMap['inline-template']==null){return;}for(var i=0,l=node.children.length;i<l;i++){var child=node.children[i];markStatic(child);if(!child.static){node.static=false;}}}}function markStaticRoots(node,isInFor){if(node.type===1){if(node.static||node.once){node.staticInFor=isInFor;}if(node.static){node.staticRoot=true;return;}if(node.children){for(var i=0,l=node.children.length;i<l;i++){var child=node.children[i];isInFor=isInFor||!!node.for;markStaticRoots(child,isInFor);if(child.type===1&&child.elseBlock){markStaticRoots(child.elseBlock,isInFor);}}}}}function isStatic(node){if(node.type===2){// expression
	return false;}if(node.type===3){// text
	return true;}return!!(node.pre||!node.hasBindings&&// no dynamic bindings
	!node.if&&!node.for&&// not v-if or v-for or v-else
	!isBuiltInTag(node.tag)&&// not a built-in
	isPlatformReservedTag(node.tag)&&// not a component
	!isDirectChildOfTemplateFor(node)&&Object.keys(node).every(isStaticKey));}function isDirectChildOfTemplateFor(node){while(node.parent){node=node.parent;if(node.tag!=='template'){return false;}if(node.for){return true;}}return false;}/*  */var simplePathRE=/^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;// keyCode aliases
	var keyCodes={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,'delete':[8,46]};var modifierCode={stop:'$event.stopPropagation();',prevent:'$event.preventDefault();',self:'if($event.target !== $event.currentTarget)return;'};function genHandlers(events,native){var res=native?'nativeOn:{':'on:{';for(var name in events){res+="\""+name+"\":"+genHandler(events[name])+",";}return res.slice(0,-1)+'}';}function genHandler(handler){if(!handler){return'function(){}';}else if(Array.isArray(handler)){return"["+handler.map(genHandler).join(',')+"]";}else if(!handler.modifiers){return simplePathRE.test(handler.value)?handler.value:"function($event){"+handler.value+"}";}else{var code='';var keys=[];for(var key in handler.modifiers){if(modifierCode[key]){code+=modifierCode[key];}else{keys.push(key);}}if(keys.length){code=genKeyFilter(keys)+code;}var handlerCode=simplePathRE.test(handler.value)?handler.value+'($event)':handler.value;return'function($event){'+code+handlerCode+'}';}}function genKeyFilter(keys){var code=keys.length===1?normalizeKeyCode(keys[0]):Array.prototype.concat.apply([],keys.map(normalizeKeyCode));if(Array.isArray(code)){return"if("+code.map(function(c){return"$event.keyCode!=="+c;}).join('&&')+")return;";}else{return"if($event.keyCode!=="+code+")return;";}}function normalizeKeyCode(key){return parseInt(key,10)||// number keyCode
	keyCodes[key]||// built-in alias
	"_k("+JSON.stringify(key)+")"// custom alias
	;}/*  */function bind$2(el,dir){el.wrapData=function(code){return"_b("+code+","+dir.value+(dir.modifiers&&dir.modifiers.prop?',true':'')+")";};}var baseDirectives={bind:bind$2,cloak:noop};/*  */// configurable state
	var warn$2;var transforms$1;var dataGenFns;var platformDirectives$1;var staticRenderFns;var onceCount;var currentOptions;function generate(ast,options){// save previous staticRenderFns so generate calls can be nested
	var prevStaticRenderFns=staticRenderFns;var currentStaticRenderFns=staticRenderFns=[];var prevOnceCount=onceCount;onceCount=0;currentOptions=options;warn$2=options.warn||baseWarn;transforms$1=pluckModuleFunction(options.modules,'transformCode');dataGenFns=pluckModuleFunction(options.modules,'genData');platformDirectives$1=options.directives||{};var code=ast?genElement(ast):'_h("div")';staticRenderFns=prevStaticRenderFns;onceCount=prevOnceCount;return{render:"with(this){return "+code+"}",staticRenderFns:currentStaticRenderFns};}function genElement(el){if(el.staticRoot&&!el.staticProcessed){return genStatic(el);}else if(el.once&&!el.onceProcessed){return genOnce(el);}else if(el.for&&!el.forProcessed){return genFor(el);}else if(el.if&&!el.ifProcessed){return genIf(el);}else if(el.tag==='template'&&!el.slotTarget){return genChildren(el)||'void 0';}else if(el.tag==='slot'){return genSlot(el);}else{// component or element
	var code;if(el.component){code=genComponent(el.component,el);}else{var data=el.plain?undefined:genData(el);var children=el.inlineTemplate?null:genChildren(el);code="_h('"+el.tag+"'"+(data?","+data:'')+(children?","+children:'')+")";}// module transforms
	for(var i=0;i<transforms$1.length;i++){code=transforms$1[i](el,code);}return code;}}// hoist static sub-trees out
	function genStatic(el){el.staticProcessed=true;staticRenderFns.push("with(this){return "+genElement(el)+"}");return"_m("+(staticRenderFns.length-1)+(el.staticInFor?',true':'')+")";}// v-once
	function genOnce(el){el.onceProcessed=true;if(el.if&&!el.ifProcessed){return genIf(el);}else if(el.staticInFor){var key='';var parent=el.parent;while(parent){if(parent.for){key=parent.key;break;}parent=parent.parent;}if(!key){"development"!=='production'&&warn$2("v-once can only be used inside v-for that is keyed. ");return genElement(el);}return"_o("+genElement(el)+","+onceCount++ +(key?","+key:"")+")";}else{return genStatic(el);}}// v-if with v-once shuold generate code like (a)?_m(0):_m(1)
	function genIf(el){var exp=el.if;el.ifProcessed=true;// avoid recursion
	return"("+exp+")?"+(el.once?genOnce(el):genElement(el))+":"+genElse(el);}function genElse(el){return el.elseBlock?genElement(el.elseBlock):'_e()';}function genFor(el){var exp=el.for;var alias=el.alias;var iterator1=el.iterator1?","+el.iterator1:'';var iterator2=el.iterator2?","+el.iterator2:'';el.forProcessed=true;// avoid recursion
	return"_l(("+exp+"),"+"function("+alias+iterator1+iterator2+"){"+"return "+genElement(el)+'})';}function genData(el){var data='{';// directives first.
	// directives may mutate the el's other properties before they are generated.
	var dirs=genDirectives(el);if(dirs){data+=dirs+',';}// key
	if(el.key){data+="key:"+el.key+",";}// ref
	if(el.ref){data+="ref:"+el.ref+",";}if(el.refInFor){data+="refInFor:true,";}// record original tag name for components using "is" attribute
	if(el.component){data+="tag:\""+el.tag+"\",";}// slot target
	if(el.slotTarget){data+="slot:"+el.slotTarget+",";}// module data generation functions
	for(var i=0;i<dataGenFns.length;i++){data+=dataGenFns[i](el);}// attributes
	if(el.attrs){data+="attrs:{"+genProps(el.attrs)+"},";}// DOM props
	if(el.props){data+="domProps:{"+genProps(el.props)+"},";}// event handlers
	if(el.events){data+=genHandlers(el.events)+",";}if(el.nativeEvents){data+=genHandlers(el.nativeEvents,true)+",";}// inline-template
	if(el.inlineTemplate){var ast=el.children[0];if("development"!=='production'&&(el.children.length>1||ast.type!==1)){warn$2('Inline-template components must have exactly one child element.');}if(ast.type===1){var inlineRenderFns=generate(ast,currentOptions);data+="inlineTemplate:{render:function(){"+inlineRenderFns.render+"},staticRenderFns:["+inlineRenderFns.staticRenderFns.map(function(code){return"function(){"+code+"}";}).join(',')+"]}";}}data=data.replace(/,$/,'')+'}';// v-bind data wrap
	if(el.wrapData){data=el.wrapData(data);}return data;}function genDirectives(el){var dirs=el.directives;if(!dirs){return;}var res='directives:[';var hasRuntime=false;var i,l,dir,needRuntime;for(i=0,l=dirs.length;i<l;i++){dir=dirs[i];needRuntime=true;var gen=platformDirectives$1[dir.name]||baseDirectives[dir.name];if(gen){// compile-time directive that manipulates AST.
	// returns true if it also needs a runtime counterpart.
	needRuntime=!!gen(el,dir,warn$2);}if(needRuntime){hasRuntime=true;res+="{name:\""+dir.name+"\",rawName:\""+dir.rawName+"\""+(dir.value?",value:("+dir.value+"),expression:"+JSON.stringify(dir.value):'')+(dir.arg?",arg:\""+dir.arg+"\"":'')+(dir.modifiers?",modifiers:"+JSON.stringify(dir.modifiers):'')+"},";}}if(hasRuntime){return res.slice(0,-1)+']';}}function genChildren(el){if(el.children.length){return'['+el.children.map(genNode).join(',')+']';}}function genNode(node){if(node.type===1){return genElement(node);}else{return genText(node);}}function genText(text){return text.type===2?text.expression// no need for () because already wrapped in _s()
	:JSON.stringify(text.text);}function genSlot(el){var slotName=el.slotName||'"default"';var children=genChildren(el);return"_t("+slotName+(children?","+children:'')+")";}// componentName is el.component, take it as argument to shun flow's pessimistic refinement
	function genComponent(componentName,el){var children=el.inlineTemplate?null:genChildren(el);return"_h("+componentName+","+genData(el)+(children?","+children:'')+")";}function genProps(props){var res='';for(var i=0;i<props.length;i++){var prop=props[i];res+="\""+prop.name+"\":"+prop.value+",";}return res.slice(0,-1);}/*  *//**
	 * Compile a template.
	 */function compile$1(template,options){var ast=parse(template.trim(),options);optimize(ast,options);var code=generate(ast,options);return{ast:ast,render:code.render,staticRenderFns:code.staticRenderFns};}/*  */// operators like typeof, instanceof and in are allowed
	var prohibitedKeywordRE=new RegExp('\\b'+('do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,'+'super,throw,while,yield,delete,export,import,return,switch,default,'+'extends,finally,continue,debugger,function,arguments').split(',').join('\\b|\\b')+'\\b');// check valid identifier for v-for
	var identRE=/[A-Za-z_$][\w$]*/;// strip strings in expressions
	var stripStringRE=/'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;// detect problematic expressions in a template
	function detectErrors(ast){var errors=[];if(ast){checkNode(ast,errors);}return errors;}function checkNode(node,errors){if(node.type===1){for(var name in node.attrsMap){if(dirRE.test(name)){var value=node.attrsMap[name];if(value){if(name==='v-for'){checkFor(node,"v-for=\""+value+"\"",errors);}else{checkExpression(value,name+"=\""+value+"\"",errors);}}}}if(node.children){for(var i=0;i<node.children.length;i++){checkNode(node.children[i],errors);}}}else if(node.type===2){checkExpression(node.expression,node.text,errors);}}function checkFor(node,text,errors){checkExpression(node.for||'',text,errors);checkIdentifier(node.alias,'v-for alias',text,errors);checkIdentifier(node.iterator1,'v-for iterator',text,errors);checkIdentifier(node.iterator2,'v-for iterator',text,errors);}function checkIdentifier(ident,type,text,errors){if(typeof ident==='string'&&!identRE.test(ident)){errors.push("- invalid "+type+" \""+ident+"\" in expression: "+text);}}function checkExpression(exp,text,errors){try{new Function("return "+exp);}catch(e){var keywordMatch=exp.replace(stripStringRE,'').match(prohibitedKeywordRE);if(keywordMatch){errors.push("- avoid using JavaScript keyword as property name: "+"\""+keywordMatch[0]+"\" in expression "+text);}else{errors.push("- invalid expression: "+text);}}}/*  */function transformNode(el,options){var warn=options.warn||baseWarn;var staticClass=getAndRemoveAttr(el,'class');if("development"!=='production'&&staticClass){var expression=parseText(staticClass,options.delimiters);if(expression){warn("class=\""+staticClass+"\": "+'Interpolation inside attributes has been removed. '+'Use v-bind or the colon shorthand instead. For example, '+'instead of <div class="{{ val }}">, use <div :class="val">.');}}if(staticClass){el.staticClass=JSON.stringify(staticClass);}var classBinding=getBindingAttr(el,'class',false/* getStatic */);if(classBinding){el.classBinding=classBinding;}}function genData$1(el){var data='';if(el.staticClass){data+="staticClass:"+el.staticClass+",";}if(el.classBinding){data+="class:"+el.classBinding+",";}return data;}var klass$1={staticKeys:['staticClass'],transformNode:transformNode,genData:genData$1};/*  */function transformNode$1(el,options){var warn=options.warn||baseWarn;var staticStyle=getAndRemoveAttr(el,'style');if(staticStyle){/* istanbul ignore if */{var expression=parseText(staticStyle,options.delimiters);if(expression){warn("style=\""+staticStyle+"\": "+'Interpolation inside attributes has been removed. '+'Use v-bind or the colon shorthand instead. For example, '+'instead of <div style="{{ val }}">, use <div :style="val">.');}}el.staticStyle=JSON.stringify(parseStyleText(staticStyle));}var styleBinding=getBindingAttr(el,'style',false/* getStatic */);if(styleBinding){el.styleBinding=styleBinding;}}function genData$2(el){var data='';if(el.staticStyle){data+="staticStyle:"+el.staticStyle+",";}if(el.styleBinding){data+="style:("+el.styleBinding+"),";}return data;}var style$1={staticKeys:['staticStyle'],transformNode:transformNode$1,genData:genData$2};var modules$1=[klass$1,style$1];/*  */var warn$3;function model$1(el,dir,_warn){warn$3=_warn;var value=dir.value;var modifiers=dir.modifiers;var tag=el.tag;var type=el.attrsMap.type;{var dynamicType=el.attrsMap['v-bind:type']||el.attrsMap[':type'];if(tag==='input'&&dynamicType){warn$3("<input :type=\""+dynamicType+"\" v-model=\""+value+"\">:\n"+"v-model does not support dynamic input types. Use v-if branches instead.");}}if(tag==='select'){genSelect(el,value,modifiers);}else if(tag==='input'&&type==='checkbox'){genCheckboxModel(el,value,modifiers);}else if(tag==='input'&&type==='radio'){genRadioModel(el,value,modifiers);}else{genDefaultModel(el,value,modifiers);}// ensure runtime directive metadata
	return true;}function genCheckboxModel(el,value,modifiers){if("development"!=='production'&&el.attrsMap.checked!=null){warn$3("<"+el.tag+" v-model=\""+value+"\" checked>:\n"+"inline checked attributes will be ignored when using v-model. "+'Declare initial values in the component\'s data option instead.');}var number=modifiers&&modifiers.number;var valueBinding=getBindingAttr(el,'value')||'null';var trueValueBinding=getBindingAttr(el,'true-value')||'true';var falseValueBinding=getBindingAttr(el,'false-value')||'false';addProp(el,'checked',"Array.isArray("+value+")"+"?_i("+value+","+valueBinding+")>-1"+":_q("+value+","+trueValueBinding+")");addHandler(el,'change',"var $$a="+value+","+'$$el=$event.target,'+"$$c=$$el.checked?("+trueValueBinding+"):("+falseValueBinding+");"+'if(Array.isArray($$a)){'+"var $$v="+(number?'_n('+valueBinding+')':valueBinding)+","+'$$i=_i($$a,$$v);'+"if($$c){$$i<0&&("+value+"=$$a.concat($$v))}"+"else{$$i>-1&&("+value+"=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}"+"}else{"+value+"=$$c}",null,true);}function genRadioModel(el,value,modifiers){if("development"!=='production'&&el.attrsMap.checked!=null){warn$3("<"+el.tag+" v-model=\""+value+"\" checked>:\n"+"inline checked attributes will be ignored when using v-model. "+'Declare initial values in the component\'s data option instead.');}var number=modifiers&&modifiers.number;var valueBinding=getBindingAttr(el,'value')||'null';valueBinding=number?"_n("+valueBinding+")":valueBinding;addProp(el,'checked',"_q("+value+","+valueBinding+")");addHandler(el,'change',genAssignmentCode(value,valueBinding),null,true);}function genDefaultModel(el,value,modifiers){{if(el.tag==='input'&&el.attrsMap.value){warn$3("<"+el.tag+" v-model=\""+value+"\" value=\""+el.attrsMap.value+"\">:\n"+'inline value attributes will be ignored when using v-model. '+'Declare initial values in the component\'s data option instead.');}if(el.tag==='textarea'&&el.children.length){warn$3("<textarea v-model=\""+value+"\">:\n"+'inline content inside <textarea> will be ignored when using v-model. '+'Declare initial values in the component\'s data option instead.');}}var type=el.attrsMap.type;var ref=modifiers||{};var lazy=ref.lazy;var number=ref.number;var trim=ref.trim;var event=lazy||isIE&&type==='range'?'change':'input';var needCompositionGuard=!lazy&&type!=='range';var isNative=el.tag==='input'||el.tag==='textarea';var valueExpression=isNative?"$event.target.value"+(trim?'.trim()':''):trim?"(typeof $event === 'string' ? $event.trim() : $event)":"$event";valueExpression=number||type==='number'?"_n("+valueExpression+")":valueExpression;var code=genAssignmentCode(value,valueExpression);if(isNative&&needCompositionGuard){code="if($event.target.composing)return;"+code;}// inputs with type="file" are read only and setting the input's
	// value will throw an error.
	if("development"!=='production'&&type==='file'){warn$3("<"+el.tag+" v-model=\""+value+"\" type=\"file\">:\n"+"File inputs are read only. Use a v-on:change listener instead.");}addProp(el,'value',isNative?"_s("+value+")":"("+value+")");addHandler(el,event,code,null,true);}function genSelect(el,value,modifiers){{el.children.some(checkOptionWarning);}var number=modifiers&&modifiers.number;var assignment="Array.prototype.filter"+".call($event.target.options,function(o){return o.selected})"+".map(function(o){var val = \"_value\" in o ? o._value : o.value;"+"return "+(number?'_n(val)':'val')+"})"+(el.attrsMap.multiple==null?'[0]':'');var code=genAssignmentCode(value,assignment);addHandler(el,'change',code,null,true);}function checkOptionWarning(option){if(option.type===1&&option.tag==='option'&&option.attrsMap.selected!=null){warn$3("<select v-model=\""+option.parent.attrsMap['v-model']+"\">:\n"+'inline selected attributes on <option> will be ignored when using v-model. '+'Declare initial values in the component\'s data option instead.');return true;}return false;}function genAssignmentCode(value,assignment){var modelRs=parseModel(value);if(modelRs.idx===null){return value+"="+assignment;}else{return"var $$exp = "+modelRs.exp+", $$idx = "+modelRs.idx+";"+"if (!Array.isArray($$exp)){"+value+"="+assignment+"}"+"else{$$exp.splice($$idx, 1, "+assignment+")}";}}/*  */function text(el,dir){if(dir.value){addProp(el,'textContent',"_s("+dir.value+")");}}/*  */function html(el,dir){if(dir.value){addProp(el,'innerHTML',"_s("+dir.value+")");}}var directives$1={model:model$1,text:text,html:html};/*  */var cache=Object.create(null);var baseOptions={isIE:isIE,expectHTML:true,modules:modules$1,staticKeys:genStaticKeys(modules$1),directives:directives$1,isReservedTag:isReservedTag,isUnaryTag:isUnaryTag,mustUseProp:mustUseProp,getTagNamespace:getTagNamespace,isPreTag:isPreTag};function compile$$1(template,options){options=options?extend(extend({},baseOptions),options):baseOptions;return compile$1(template,options);}function compileToFunctions(template,options,vm){var _warn=options&&options.warn||warn;// detect possible CSP restriction
	/* istanbul ignore if */{try{new Function('return 1');}catch(e){if(e.toString().match(/unsafe-eval|CSP/)){_warn('It seems you are using the standalone build of Vue.js in an '+'environment with Content Security Policy that prohibits unsafe-eval. '+'The template compiler cannot work in this environment. Consider '+'relaxing the policy to allow unsafe-eval or pre-compiling your '+'templates into render functions.');}}}var key=options&&options.delimiters?String(options.delimiters)+template:template;if(cache[key]){return cache[key];}var res={};var compiled=compile$$1(template,options);res.render=makeFunction(compiled.render);var l=compiled.staticRenderFns.length;res.staticRenderFns=new Array(l);for(var i=0;i<l;i++){res.staticRenderFns[i]=makeFunction(compiled.staticRenderFns[i]);}{if(res.render===noop||res.staticRenderFns.some(function(fn){return fn===noop;})){_warn("failed to compile template:\n\n"+template+"\n\n"+detectErrors(compiled.ast).join('\n')+'\n\n',vm);}}return cache[key]=res;}function makeFunction(code){try{return new Function(code);}catch(e){return noop;}}/*  */var idToTemplate=cached(function(id){var el=query(id);return el&&el.innerHTML;});var mount=Vue$3.prototype.$mount;Vue$3.prototype.$mount=function(el,hydrating){el=el&&query(el);/* istanbul ignore if */if(el===document.body||el===document.documentElement){"development"!=='production'&&warn("Do not mount Vue to <html> or <body> - mount to normal elements instead.");return this;}var options=this.$options;// resolve template/el and convert to render function
	if(!options.render){var template=options.template;if(template){if(typeof template==='string'){if(template.charAt(0)==='#'){template=idToTemplate(template);/* istanbul ignore if */if("development"!=='production'&&!template){warn("Template element not found or is empty: "+options.template,this);}}}else if(template.nodeType){template=template.innerHTML;}else{{warn('invalid template option:'+template,this);}return this;}}else if(el){template=getOuterHTML(el);}if(template){var ref=compileToFunctions(template,{warn:warn,shouldDecodeNewlines:shouldDecodeNewlines,delimiters:options.delimiters},this);var render=ref.render;var staticRenderFns=ref.staticRenderFns;options.render=render;options.staticRenderFns=staticRenderFns;}}return mount.call(this,el,hydrating);};/**
	 * Get outerHTML of elements, taking care
	 * of SVG elements in IE as well.
	 */function getOuterHTML(el){if(el.outerHTML){return el.outerHTML;}else{var container=document.createElement('div');container.appendChild(el.cloneNode(true));return container.innerHTML;}}Vue$3.compile=compileToFunctions;return Vue$3;});

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/**
	 * vuex v2.0.0
	 * (c) 2016 Evan You
	 * @license MIT
	 */
	(function (global, factory) {
	  ( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : global.Vuex = factory();
	})(undefined, function () {
	  'use strict';
	
	  var devtoolHook = typeof window !== 'undefined' && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
	
	  function devtoolPlugin(store) {
	    if (!devtoolHook) {
	      return;
	    }
	
	    store._devtoolHook = devtoolHook;
	
	    devtoolHook.emit('vuex:init', store);
	
	    devtoolHook.on('vuex:travel-to-state', function (targetState) {
	      store.replaceState(targetState);
	    });
	
	    store.subscribe(function (mutation, state) {
	      devtoolHook.emit('vuex:mutation', mutation, state);
	    });
	  }
	
	  function applyMixin(Vue) {
	    var version = Number(Vue.version.split('.')[0]);
	
	    if (version >= 2) {
	      var usesInit = Vue.config._lifecycleHooks.indexOf('init') > -1;
	      Vue.mixin(usesInit ? { init: vuexInit } : { beforeCreate: vuexInit });
	    } else {
	      // override init and inject vuex init procedure
	      // for 1.x backwards compatibility.
	      var _init = Vue.prototype._init;
	      Vue.prototype._init = function (options) {
	        if (options === void 0) options = {};
	
	        options.init = options.init ? [vuexInit].concat(options.init) : vuexInit;
	        _init.call(this, options);
	      };
	    }
	
	    /**
	     * Vuex init hook, injected into each instances init hooks list.
	     */
	
	    function vuexInit() {
	      var options = this.$options;
	      // store injection
	      if (options.store) {
	        this.$store = options.store;
	      } else if (options.parent && options.parent.$store) {
	        this.$store = options.parent.$store;
	      }
	    }
	  }
	
	  function mapState(states) {
	    var res = {};
	    normalizeMap(states).forEach(function (ref) {
	      var key = ref.key;
	      var val = ref.val;
	
	      res[key] = function mappedState() {
	        return typeof val === 'function' ? val.call(this, this.$store.state, this.$store.getters) : this.$store.state[val];
	      };
	    });
	    return res;
	  }
	
	  function mapMutations(mutations) {
	    var res = {};
	    normalizeMap(mutations).forEach(function (ref) {
	      var key = ref.key;
	      var val = ref.val;
	
	      res[key] = function mappedMutation() {
	        var args = [],
	            len = arguments.length;
	        while (len--) {
	          args[len] = arguments[len];
	        }return this.$store.commit.apply(this.$store, [val].concat(args));
	      };
	    });
	    return res;
	  }
	
	  function mapGetters(getters) {
	    var res = {};
	    normalizeMap(getters).forEach(function (ref) {
	      var key = ref.key;
	      var val = ref.val;
	
	      res[key] = function mappedGetter() {
	        if (!(val in this.$store.getters)) {
	          console.error("[vuex] unknown getter: " + val);
	        }
	        return this.$store.getters[val];
	      };
	    });
	    return res;
	  }
	
	  function mapActions(actions) {
	    var res = {};
	    normalizeMap(actions).forEach(function (ref) {
	      var key = ref.key;
	      var val = ref.val;
	
	      res[key] = function mappedAction() {
	        var args = [],
	            len = arguments.length;
	        while (len--) {
	          args[len] = arguments[len];
	        }return this.$store.dispatch.apply(this.$store, [val].concat(args));
	      };
	    });
	    return res;
	  }
	
	  function normalizeMap(map) {
	    return Array.isArray(map) ? map.map(function (key) {
	      return { key: key, val: key };
	    }) : Object.keys(map).map(function (key) {
	      return { key: key, val: map[key] };
	    });
	  }
	
	  function isObject(obj) {
	    return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
	  }
	
	  function isPromise(val) {
	    return val && typeof val.then === 'function';
	  }
	
	  function assert(condition, msg) {
	    if (!condition) {
	      throw new Error("[vuex] " + msg);
	    }
	  }
	
	  var Vue; // bind on install
	
	  var Store = function Store(options) {
	    var this$1 = this;
	    if (options === void 0) options = {};
	
	    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
	    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
	
	    var state = options.state;if (state === void 0) state = {};
	    var plugins = options.plugins;if (plugins === void 0) plugins = [];
	    var strict = options.strict;if (strict === void 0) strict = false;
	
	    // store internal state
	    this._options = options;
	    this._committing = false;
	    this._actions = Object.create(null);
	    this._mutations = Object.create(null);
	    this._wrappedGetters = Object.create(null);
	    this._runtimeModules = Object.create(null);
	    this._subscribers = [];
	    this._watcherVM = new Vue();
	
	    // bind commit and dispatch to self
	    var store = this;
	    var ref = this;
	    var dispatch = ref.dispatch;
	    var commit = ref.commit;
	    this.dispatch = function boundDispatch(type, payload) {
	      return dispatch.call(store, type, payload);
	    };
	    this.commit = function boundCommit(type, payload, options) {
	      return commit.call(store, type, payload, options);
	    };
	
	    // strict mode
	    this.strict = strict;
	
	    // init root module.
	    // this also recursively registers all sub-modules
	    // and collects all module getters inside this._wrappedGetters
	    installModule(this, state, [], options);
	
	    // initialize the store vm, which is responsible for the reactivity
	    // (also registers _wrappedGetters as computed properties)
	    resetStoreVM(this, state);
	
	    // apply plugins
	    plugins.concat(devtoolPlugin).forEach(function (plugin) {
	      return plugin(this$1);
	    });
	  };
	
	  var prototypeAccessors = { state: {} };
	
	  prototypeAccessors.state.get = function () {
	    return this._vm.state;
	  };
	
	  prototypeAccessors.state.set = function (v) {
	    assert(false, "Use store.replaceState() to explicit replace store state.");
	  };
	
	  Store.prototype.commit = function commit(type, payload, options) {
	    var this$1 = this;
	
	    // check object-style commit
	    if (isObject(type) && type.type) {
	      options = payload;
	      payload = type;
	      type = type.type;
	    }
	    var mutation = { type: type, payload: payload };
	    var entry = this._mutations[type];
	    if (!entry) {
	      console.error("[vuex] unknown mutation type: " + type);
	      return;
	    }
	    this._withCommit(function () {
	      entry.forEach(function commitIterator(handler) {
	        handler(payload);
	      });
	    });
	    if (!options || !options.silent) {
	      this._subscribers.forEach(function (sub) {
	        return sub(mutation, this$1.state);
	      });
	    }
	  };
	
	  Store.prototype.dispatch = function dispatch(type, payload) {
	    // check object-style dispatch
	    if (isObject(type) && type.type) {
	      payload = type;
	      type = type.type;
	    }
	    var entry = this._actions[type];
	    if (!entry) {
	      console.error("[vuex] unknown action type: " + type);
	      return;
	    }
	    return entry.length > 1 ? Promise.all(entry.map(function (handler) {
	      return handler(payload);
	    })) : entry[0](payload);
	  };
	
	  Store.prototype.subscribe = function subscribe(fn) {
	    var subs = this._subscribers;
	    if (subs.indexOf(fn) < 0) {
	      subs.push(fn);
	    }
	    return function () {
	      var i = subs.indexOf(fn);
	      if (i > -1) {
	        subs.splice(i, 1);
	      }
	    };
	  };
	
	  Store.prototype.watch = function watch(getter, cb, options) {
	    var this$1 = this;
	
	    assert(typeof getter === 'function', "store.watch only accepts a function.");
	    return this._watcherVM.$watch(function () {
	      return getter(this$1.state);
	    }, cb, options);
	  };
	
	  Store.prototype.replaceState = function replaceState(state) {
	    var this$1 = this;
	
	    this._withCommit(function () {
	      this$1._vm.state = state;
	    });
	  };
	
	  Store.prototype.registerModule = function registerModule(path, module) {
	    if (typeof path === 'string') {
	      path = [path];
	    }
	    assert(Array.isArray(path), "module path must be a string or an Array.");
	    this._runtimeModules[path.join('.')] = module;
	    installModule(this, this.state, path, module);
	    // reset store to update getters...
	    resetStoreVM(this, this.state);
	  };
	
	  Store.prototype.unregisterModule = function unregisterModule(path) {
	    var this$1 = this;
	
	    if (typeof path === 'string') {
	      path = [path];
	    }
	    assert(Array.isArray(path), "module path must be a string or an Array.");
	    delete this._runtimeModules[path.join('.')];
	    this._withCommit(function () {
	      var parentState = getNestedState(this$1.state, path.slice(0, -1));
	      Vue.delete(parentState, path[path.length - 1]);
	    });
	    resetStore(this);
	  };
	
	  Store.prototype.hotUpdate = function hotUpdate(newOptions) {
	    updateModule(this._options, newOptions);
	    resetStore(this);
	  };
	
	  Store.prototype._withCommit = function _withCommit(fn) {
	    var committing = this._committing;
	    this._committing = true;
	    fn();
	    this._committing = committing;
	  };
	
	  Object.defineProperties(Store.prototype, prototypeAccessors);
	
	  function updateModule(targetModule, newModule) {
	    if (newModule.actions) {
	      targetModule.actions = newModule.actions;
	    }
	    if (newModule.mutations) {
	      targetModule.mutations = newModule.mutations;
	    }
	    if (newModule.getters) {
	      targetModule.getters = newModule.getters;
	    }
	    if (newModule.modules) {
	      for (var key in newModule.modules) {
	        if (!(targetModule.modules && targetModule.modules[key])) {
	          console.warn("[vuex] trying to add a new module '" + key + "' on hot reloading, " + 'manual reload is needed');
	          return;
	        }
	        updateModule(targetModule.modules[key], newModule.modules[key]);
	      }
	    }
	  }
	
	  function resetStore(store) {
	    store._actions = Object.create(null);
	    store._mutations = Object.create(null);
	    store._wrappedGetters = Object.create(null);
	    var state = store.state;
	    // init root module
	    installModule(store, state, [], store._options, true);
	    // init all runtime modules
	    Object.keys(store._runtimeModules).forEach(function (key) {
	      installModule(store, state, key.split('.'), store._runtimeModules[key], true);
	    });
	    // reset vm
	    resetStoreVM(store, state);
	  }
	
	  function resetStoreVM(store, state) {
	    var oldVm = store._vm;
	
	    // bind store public getters
	    store.getters = {};
	    var wrappedGetters = store._wrappedGetters;
	    var computed = {};
	    Object.keys(wrappedGetters).forEach(function (key) {
	      var fn = wrappedGetters[key];
	      // use computed to leverage its lazy-caching mechanism
	      computed[key] = function () {
	        return fn(store);
	      };
	      Object.defineProperty(store.getters, key, {
	        get: function get() {
	          return store._vm[key];
	        }
	      });
	    });
	
	    // use a Vue instance to store the state tree
	    // suppress warnings just in case the user has added
	    // some funky global mixins
	    var silent = Vue.config.silent;
	    Vue.config.silent = true;
	    store._vm = new Vue({
	      data: { state: state },
	      computed: computed
	    });
	    Vue.config.silent = silent;
	
	    // enable strict mode for new vm
	    if (store.strict) {
	      enableStrictMode(store);
	    }
	
	    if (oldVm) {
	      // dispatch changes in all subscribed watchers
	      // to force getter re-evaluation.
	      store._withCommit(function () {
	        oldVm.state = null;
	      });
	      Vue.nextTick(function () {
	        return oldVm.$destroy();
	      });
	    }
	  }
	
	  function installModule(store, rootState, path, module, hot) {
	    var isRoot = !path.length;
	    var state = module.state;
	    var actions = module.actions;
	    var mutations = module.mutations;
	    var getters = module.getters;
	    var modules = module.modules;
	
	    // set state
	    if (!isRoot && !hot) {
	      var parentState = getNestedState(rootState, path.slice(0, -1));
	      var moduleName = path[path.length - 1];
	      store._withCommit(function () {
	        Vue.set(parentState, moduleName, state || {});
	      });
	    }
	
	    if (mutations) {
	      Object.keys(mutations).forEach(function (key) {
	        registerMutation(store, key, mutations[key], path);
	      });
	    }
	
	    if (actions) {
	      Object.keys(actions).forEach(function (key) {
	        registerAction(store, key, actions[key], path);
	      });
	    }
	
	    if (getters) {
	      wrapGetters(store, getters, path);
	    }
	
	    if (modules) {
	      Object.keys(modules).forEach(function (key) {
	        installModule(store, rootState, path.concat(key), modules[key], hot);
	      });
	    }
	  }
	
	  function registerMutation(store, type, handler, path) {
	    if (path === void 0) path = [];
	
	    var entry = store._mutations[type] || (store._mutations[type] = []);
	    entry.push(function wrappedMutationHandler(payload) {
	      handler(getNestedState(store.state, path), payload);
	    });
	  }
	
	  function registerAction(store, type, handler, path) {
	    if (path === void 0) path = [];
	
	    var entry = store._actions[type] || (store._actions[type] = []);
	    var dispatch = store.dispatch;
	    var commit = store.commit;
	    entry.push(function wrappedActionHandler(payload, cb) {
	      var res = handler({
	        dispatch: dispatch,
	        commit: commit,
	        getters: store.getters,
	        state: getNestedState(store.state, path),
	        rootState: store.state
	      }, payload, cb);
	      if (!isPromise(res)) {
	        res = Promise.resolve(res);
	      }
	      if (store._devtoolHook) {
	        return res.catch(function (err) {
	          store._devtoolHook.emit('vuex:error', err);
	          throw err;
	        });
	      } else {
	        return res;
	      }
	    });
	  }
	
	  function wrapGetters(store, moduleGetters, modulePath) {
	    Object.keys(moduleGetters).forEach(function (getterKey) {
	      var rawGetter = moduleGetters[getterKey];
	      if (store._wrappedGetters[getterKey]) {
	        console.error("[vuex] duplicate getter key: " + getterKey);
	        return;
	      }
	      store._wrappedGetters[getterKey] = function wrappedGetter(store) {
	        return rawGetter(getNestedState(store.state, modulePath), // local state
	        store.getters, // getters
	        store.state // root state
	        );
	      };
	    });
	  }
	
	  function enableStrictMode(store) {
	    store._vm.$watch('state', function () {
	      assert(store._committing, "Do not mutate vuex store state outside mutation handlers.");
	    }, { deep: true, sync: true });
	  }
	
	  function getNestedState(state, path) {
	    return path.length ? path.reduce(function (state, key) {
	      return state[key];
	    }, state) : state;
	  }
	
	  function install(_Vue) {
	    if (Vue) {
	      console.error('[vuex] already installed. Vue.use(Vuex) should be called only once.');
	      return;
	    }
	    Vue = _Vue;
	    applyMixin(Vue);
	  }
	
	  // auto install in dist mode
	  if (typeof window !== 'undefined' && window.Vue) {
	    install(window.Vue);
	  }
	
	  var index = {
	    Store: Store,
	    install: install,
	    mapState: mapState,
	    mapMutations: mapMutations,
	    mapGetters: mapGetters,
	    mapActions: mapActions
	  };
	
	  return index;
	});

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/**
	 * vue-router v2.0.2
	 * (c) 2016 Evan You
	 * @license MIT
	 */
	(function (global, factory) {
	  ( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : global.VueRouter = factory();
	})(undefined, function () {
	  'use strict';
	
	  var View = {
	    name: 'router-view',
	    functional: true,
	    props: {
	      name: {
	        type: String,
	        default: 'default'
	      }
	    },
	    render: function render(h, ref) {
	      var props = ref.props;
	      var children = ref.children;
	      var parent = ref.parent;
	      var data = ref.data;
	
	      data.routerView = true;
	
	      var route = parent.$route;
	      var cache = parent._routerViewCache || (parent._routerViewCache = {});
	      var depth = 0;
	      var inactive = false;
	
	      while (parent) {
	        if (parent.$vnode && parent.$vnode.data.routerView) {
	          depth++;
	        }
	        if (parent._inactive) {
	          inactive = true;
	        }
	        parent = parent.$parent;
	      }
	
	      data.routerViewDepth = depth;
	      var matched = route.matched[depth];
	      if (!matched) {
	        return h();
	      }
	
	      var name = props.name;
	      var component = inactive ? cache[name] : cache[name] = matched.components[name];
	
	      if (!inactive) {
	        var hooks = data.hook || (data.hook = {});
	        hooks.init = function (vnode) {
	          matched.instances[name] = vnode.child;
	        };
	        hooks.prepatch = function (oldVnode, vnode) {
	          matched.instances[name] = vnode.child;
	        };
	        hooks.destroy = function (vnode) {
	          if (matched.instances[name] === vnode.child) {
	            matched.instances[name] = undefined;
	          }
	        };
	      }
	
	      return h(component, data, children);
	    }
	  };
	
	  /*  */
	
	  function resolvePath(relative, base, append) {
	    if (relative.charAt(0) === '/') {
	      return relative;
	    }
	
	    if (relative.charAt(0) === '?' || relative.charAt(0) === '#') {
	      return base + relative;
	    }
	
	    var stack = base.split('/');
	
	    // remove trailing segment if:
	    // - not appending
	    // - appending to trailing slash (last segment is empty)
	    if (!append || !stack[stack.length - 1]) {
	      stack.pop();
	    }
	
	    // resolve relative path
	    var segments = relative.replace(/^\//, '').split('/');
	    for (var i = 0; i < segments.length; i++) {
	      var segment = segments[i];
	      if (segment === '.') {
	        continue;
	      } else if (segment === '..') {
	        stack.pop();
	      } else {
	        stack.push(segment);
	      }
	    }
	
	    // ensure leading slash
	    if (stack[0] !== '') {
	      stack.unshift('');
	    }
	
	    return stack.join('/');
	  }
	
	  function parsePath(path) {
	    var hash = '';
	    var query = '';
	
	    var hashIndex = path.indexOf('#');
	    if (hashIndex >= 0) {
	      hash = path.slice(hashIndex);
	      path = path.slice(0, hashIndex);
	    }
	
	    var queryIndex = path.indexOf('?');
	    if (queryIndex >= 0) {
	      query = path.slice(queryIndex + 1);
	      path = path.slice(0, queryIndex);
	    }
	
	    return {
	      path: path,
	      query: query,
	      hash: hash
	    };
	  }
	
	  function cleanPath(path) {
	    return path.replace(/\/\//g, '/');
	  }
	
	  /*  */
	
	  function assert(condition, message) {
	    if (!condition) {
	      throw new Error("[vue-router] " + message);
	    }
	  }
	
	  function warn(condition, message) {
	    if (!condition) {
	      typeof console !== 'undefined' && console.warn("[vue-router] " + message);
	    }
	  }
	
	  /*  */
	
	  var encode = encodeURIComponent;
	  var decode = decodeURIComponent;
	
	  function resolveQuery(query, extraQuery) {
	    if (extraQuery === void 0) extraQuery = {};
	
	    if (query) {
	      var parsedQuery;
	      try {
	        parsedQuery = parseQuery(query);
	      } catch (e) {
	        warn(false, e.message);
	        parsedQuery = {};
	      }
	      for (var key in extraQuery) {
	        parsedQuery[key] = extraQuery[key];
	      }
	      return parsedQuery;
	    } else {
	      return extraQuery;
	    }
	  }
	
	  function parseQuery(query) {
	    var res = {};
	
	    query = query.trim().replace(/^(\?|#|&)/, '');
	
	    if (!query) {
	      return res;
	    }
	
	    query.split('&').forEach(function (param) {
	      var parts = param.replace(/\+/g, ' ').split('=');
	      var key = decode(parts.shift());
	      var val = parts.length > 0 ? decode(parts.join('=')) : null;
	
	      if (res[key] === undefined) {
	        res[key] = val;
	      } else if (Array.isArray(res[key])) {
	        res[key].push(val);
	      } else {
	        res[key] = [res[key], val];
	      }
	    });
	
	    return res;
	  }
	
	  function stringifyQuery(obj) {
	    var res = obj ? Object.keys(obj).sort().map(function (key) {
	      var val = obj[key];
	
	      if (val === undefined) {
	        return '';
	      }
	
	      if (val === null) {
	        return encode(key);
	      }
	
	      if (Array.isArray(val)) {
	        var result = [];
	        val.slice().forEach(function (val2) {
	          if (val2 === undefined) {
	            return;
	          }
	          if (val2 === null) {
	            result.push(encode(key));
	          } else {
	            result.push(encode(key) + '=' + encode(val2));
	          }
	        });
	        return result.join('&');
	      }
	
	      return encode(key) + '=' + encode(val);
	    }).filter(function (x) {
	      return x.length > 0;
	    }).join('&') : null;
	    return res ? "?" + res : '';
	  }
	
	  /*  */
	
	  function createRoute(record, location, redirectedFrom) {
	    var route = {
	      name: location.name || record && record.name,
	      meta: record && record.meta || {},
	      path: location.path || '/',
	      hash: location.hash || '',
	      query: location.query || {},
	      params: location.params || {},
	      fullPath: getFullPath(location),
	      matched: record ? formatMatch(record) : []
	    };
	    if (redirectedFrom) {
	      route.redirectedFrom = getFullPath(redirectedFrom);
	    }
	    return Object.freeze(route);
	  }
	
	  // the starting route that represents the initial state
	  var START = createRoute(null, {
	    path: '/'
	  });
	
	  function formatMatch(record) {
	    var res = [];
	    while (record) {
	      res.unshift(record);
	      record = record.parent;
	    }
	    return res;
	  }
	
	  function getFullPath(ref) {
	    var path = ref.path;
	    var query = ref.query;if (query === void 0) query = {};
	    var hash = ref.hash;if (hash === void 0) hash = '';
	
	    return (path || '/') + stringifyQuery(query) + hash;
	  }
	
	  var trailingSlashRE = /\/$/;
	  function isSameRoute(a, b) {
	    if (b === START) {
	      return a === b;
	    } else if (!b) {
	      return false;
	    } else if (a.path && b.path) {
	      return a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') && a.hash === b.hash && isObjectEqual(a.query, b.query);
	    } else if (a.name && b.name) {
	      return a.name === b.name && a.hash === b.hash && isObjectEqual(a.query, b.query) && isObjectEqual(a.params, b.params);
	    } else {
	      return false;
	    }
	  }
	
	  function isObjectEqual(a, b) {
	    if (a === void 0) a = {};
	    if (b === void 0) b = {};
	
	    var aKeys = Object.keys(a);
	    var bKeys = Object.keys(b);
	    if (aKeys.length !== bKeys.length) {
	      return false;
	    }
	    return aKeys.every(function (key) {
	      return String(a[key]) === String(b[key]);
	    });
	  }
	
	  function isIncludedRoute(current, target) {
	    return current.path.indexOf(target.path.replace(/\/$/, '')) === 0 && (!target.hash || current.hash === target.hash) && queryIncludes(current.query, target.query);
	  }
	
	  function queryIncludes(current, target) {
	    for (var key in target) {
	      if (!(key in current)) {
	        return false;
	      }
	    }
	    return true;
	  }
	
	  /*  */
	
	  function normalizeLocation(raw, current, append) {
	    var next = typeof raw === 'string' ? { path: raw } : raw;
	    if (next.name || next._normalized) {
	      return next;
	    }
	
	    var parsedPath = parsePath(next.path || '');
	    var basePath = current && current.path || '/';
	    var path = parsedPath.path ? resolvePath(parsedPath.path, basePath, append) : current && current.path || '/';
	    var query = resolveQuery(parsedPath.query, next.query);
	    var hash = next.hash || parsedPath.hash;
	    if (hash && hash.charAt(0) !== '#') {
	      hash = "#" + hash;
	    }
	
	    return {
	      _normalized: true,
	      path: path,
	      query: query,
	      hash: hash
	    };
	  }
	
	  /*  */
	
	  // work around weird flow bug
	  var toTypes = [String, Object];
	
	  var Link = {
	    name: 'router-link',
	    props: {
	      to: {
	        type: toTypes,
	        required: true
	      },
	      tag: {
	        type: String,
	        default: 'a'
	      },
	      exact: Boolean,
	      append: Boolean,
	      replace: Boolean,
	      activeClass: String
	    },
	    render: function render(h) {
	      var this$1 = this;
	
	      var router = this.$router;
	      var current = this.$route;
	      var to = normalizeLocation(this.to, current, this.append);
	      var resolved = router.match(to, current);
	      var fullPath = resolved.redirectedFrom || resolved.fullPath;
	      var base = router.history.base;
	      var href = createHref(base, fullPath, router.mode);
	      var classes = {};
	      var activeClass = this.activeClass || router.options.linkActiveClass || 'router-link-active';
	      var compareTarget = to.path ? createRoute(null, to) : resolved;
	      classes[activeClass] = this.exact ? isSameRoute(current, compareTarget) : isIncludedRoute(current, compareTarget);
	
	      var on = {
	        click: function click(e) {
	          // don't redirect with control keys
	          /* istanbul ignore if */
	          if (e.metaKey || e.ctrlKey || e.shiftKey) {
	            return;
	          }
	          // don't redirect when preventDefault called
	          /* istanbul ignore if */
	          if (e.defaultPrevented) {
	            return;
	          }
	          // don't redirect on right click
	          /* istanbul ignore if */
	          if (e.button !== 0) {
	            return;
	          }
	          // don't redirect if `target="_blank"`
	          /* istanbul ignore if */
	          var target = e.target.getAttribute('target');
	          if (/\b_blank\b/i.test(target)) {
	            return;
	          }
	
	          e.preventDefault();
	          if (this$1.replace) {
	            router.replace(to);
	          } else {
	            router.push(to);
	          }
	        }
	      };
	
	      var data = {
	        class: classes
	      };
	
	      if (this.tag === 'a') {
	        data.on = on;
	        data.attrs = { href: href };
	      } else {
	        // find the first <a> child and apply listener and href
	        var a = findAnchor(this.$slots.default);
	        if (a) {
	          // in case the <a> is a static node
	          a.isStatic = false;
	          var extend = _Vue.util.extend;
	          var aData = a.data = extend({}, a.data);
	          aData.on = on;
	          var aAttrs = a.data.attrs = extend({}, a.data.attrs);
	          aAttrs.href = href;
	        } else {
	          // doesn't have <a> child, apply listener to self
	          data.on = on;
	        }
	      }
	
	      return h(this.tag, data, this.$slots.default);
	    }
	  };
	
	  function findAnchor(children) {
	    if (children) {
	      var child;
	      for (var i = 0; i < children.length; i++) {
	        child = children[i];
	        if (child.tag === 'a') {
	          return child;
	        }
	        if (child.children && (child = findAnchor(child.children))) {
	          return child;
	        }
	      }
	    }
	  }
	
	  function createHref(base, fullPath, mode) {
	    var path = mode === 'hash' ? '/#' + fullPath : fullPath;
	    return base ? cleanPath(base + path) : path;
	  }
	
	  var _Vue;
	
	  function install(Vue) {
	    if (install.installed) {
	      return;
	    }
	    install.installed = true;
	
	    _Vue = Vue;
	
	    Object.defineProperty(Vue.prototype, '$router', {
	      get: function get() {
	        return this.$root._router;
	      }
	    });
	
	    Object.defineProperty(Vue.prototype, '$route', {
	      get: function get$1() {
	        return this.$root._route;
	      }
	    });
	
	    Vue.mixin({
	      beforeCreate: function beforeCreate() {
	        if (this.$options.router) {
	          this._router = this.$options.router;
	          this._router.init(this);
	          Vue.util.defineReactive(this, '_route', this._router.history.current);
	        }
	      }
	    });
	
	    Vue.component('router-view', View);
	    Vue.component('router-link', Link);
	
	    var strats = Vue.config.optionMergeStrategies;
	    // use the same hook merging strategy for route hooks
	    strats.beforeRouteEnter = strats.beforeRouteLeave = strats.created;
	  }
	
	  var __moduleExports = Array.isArray || function (arr) {
	    return Object.prototype.toString.call(arr) == '[object Array]';
	  };
	
	  var isarray = __moduleExports;
	
	  /**
	   * Expose `pathToRegexp`.
	   */
	  var index = pathToRegexp;
	  var parse_1 = parse;
	  var compile_1 = compile;
	  var tokensToFunction_1 = tokensToFunction;
	  var tokensToRegExp_1 = tokensToRegExp;
	
	  /**
	   * The main path matching regexp utility.
	   *
	   * @type {RegExp}
	   */
	  var PATH_REGEXP = new RegExp([
	  // Match escaped characters that would otherwise appear in future matches.
	  // This allows the user to escape special characters that won't transform.
	  '(\\\\.)',
	  // Match Express-style parameters and un-named parameters with a prefix
	  // and optional suffixes. Matches appear as:
	  //
	  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
	  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
	  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
	  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
	
	  /**
	   * Parse a string for the raw tokens.
	   *
	   * @param  {string}  str
	   * @param  {Object=} options
	   * @return {!Array}
	   */
	  function parse(str, options) {
	    var tokens = [];
	    var key = 0;
	    var index = 0;
	    var path = '';
	    var defaultDelimiter = options && options.delimiter || '/';
	    var res;
	
	    while ((res = PATH_REGEXP.exec(str)) != null) {
	      var m = res[0];
	      var escaped = res[1];
	      var offset = res.index;
	      path += str.slice(index, offset);
	      index = offset + m.length;
	
	      // Ignore already escaped sequences.
	      if (escaped) {
	        path += escaped[1];
	        continue;
	      }
	
	      var next = str[index];
	      var prefix = res[2];
	      var name = res[3];
	      var capture = res[4];
	      var group = res[5];
	      var modifier = res[6];
	      var asterisk = res[7];
	
	      // Push the current path onto the tokens.
	      if (path) {
	        tokens.push(path);
	        path = '';
	      }
	
	      var partial = prefix != null && next != null && next !== prefix;
	      var repeat = modifier === '+' || modifier === '*';
	      var optional = modifier === '?' || modifier === '*';
	      var delimiter = res[2] || defaultDelimiter;
	      var pattern = capture || group;
	
	      tokens.push({
	        name: name || key++,
	        prefix: prefix || '',
	        delimiter: delimiter,
	        optional: optional,
	        repeat: repeat,
	        partial: partial,
	        asterisk: !!asterisk,
	        pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
	      });
	    }
	
	    // Match any characters still remaining.
	    if (index < str.length) {
	      path += str.substr(index);
	    }
	
	    // If the path exists, push it onto the end.
	    if (path) {
	      tokens.push(path);
	    }
	
	    return tokens;
	  }
	
	  /**
	   * Compile a string to a template function for the path.
	   *
	   * @param  {string}             str
	   * @param  {Object=}            options
	   * @return {!function(Object=, Object=)}
	   */
	  function compile(str, options) {
	    return tokensToFunction(parse(str, options));
	  }
	
	  /**
	   * Prettier encoding of URI path segments.
	   *
	   * @param  {string}
	   * @return {string}
	   */
	  function encodeURIComponentPretty(str) {
	    return encodeURI(str).replace(/[\/?#]/g, function (c) {
	      return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	    });
	  }
	
	  /**
	   * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
	   *
	   * @param  {string}
	   * @return {string}
	   */
	  function encodeAsterisk(str) {
	    return encodeURI(str).replace(/[?#]/g, function (c) {
	      return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	    });
	  }
	
	  /**
	   * Expose a method for transforming tokens into the path function.
	   */
	  function tokensToFunction(tokens) {
	    // Compile all the tokens into regexps.
	    var matches = new Array(tokens.length);
	
	    // Compile all the patterns before compilation.
	    for (var i = 0; i < tokens.length; i++) {
	      if (_typeof(tokens[i]) === 'object') {
	        matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
	      }
	    }
	
	    return function (obj, opts) {
	      var path = '';
	      var data = obj || {};
	      var options = opts || {};
	      var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;
	
	      for (var i = 0; i < tokens.length; i++) {
	        var token = tokens[i];
	
	        if (typeof token === 'string') {
	          path += token;
	
	          continue;
	        }
	
	        var value = data[token.name];
	        var segment;
	
	        if (value == null) {
	          if (token.optional) {
	            // Prepend partial segment prefixes.
	            if (token.partial) {
	              path += token.prefix;
	            }
	
	            continue;
	          } else {
	            throw new TypeError('Expected "' + token.name + '" to be defined');
	          }
	        }
	
	        if (isarray(value)) {
	          if (!token.repeat) {
	            throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
	          }
	
	          if (value.length === 0) {
	            if (token.optional) {
	              continue;
	            } else {
	              throw new TypeError('Expected "' + token.name + '" to not be empty');
	            }
	          }
	
	          for (var j = 0; j < value.length; j++) {
	            segment = encode(value[j]);
	
	            if (!matches[i].test(segment)) {
	              throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
	            }
	
	            path += (j === 0 ? token.prefix : token.delimiter) + segment;
	          }
	
	          continue;
	        }
	
	        segment = token.asterisk ? encodeAsterisk(value) : encode(value);
	
	        if (!matches[i].test(segment)) {
	          throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
	        }
	
	        path += token.prefix + segment;
	      }
	
	      return path;
	    };
	  }
	
	  /**
	   * Escape a regular expression string.
	   *
	   * @param  {string} str
	   * @return {string}
	   */
	  function escapeString(str) {
	    return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
	  }
	
	  /**
	   * Escape the capturing group by escaping special characters and meaning.
	   *
	   * @param  {string} group
	   * @return {string}
	   */
	  function escapeGroup(group) {
	    return group.replace(/([=!:$\/()])/g, '\\$1');
	  }
	
	  /**
	   * Attach the keys as a property of the regexp.
	   *
	   * @param  {!RegExp} re
	   * @param  {Array}   keys
	   * @return {!RegExp}
	   */
	  function attachKeys(re, keys) {
	    re.keys = keys;
	    return re;
	  }
	
	  /**
	   * Get the flags for a regexp from the options.
	   *
	   * @param  {Object} options
	   * @return {string}
	   */
	  function flags(options) {
	    return options.sensitive ? '' : 'i';
	  }
	
	  /**
	   * Pull out keys from a regexp.
	   *
	   * @param  {!RegExp} path
	   * @param  {!Array}  keys
	   * @return {!RegExp}
	   */
	  function regexpToRegexp(path, keys) {
	    // Use a negative lookahead to match only capturing groups.
	    var groups = path.source.match(/\((?!\?)/g);
	
	    if (groups) {
	      for (var i = 0; i < groups.length; i++) {
	        keys.push({
	          name: i,
	          prefix: null,
	          delimiter: null,
	          optional: false,
	          repeat: false,
	          partial: false,
	          asterisk: false,
	          pattern: null
	        });
	      }
	    }
	
	    return attachKeys(path, keys);
	  }
	
	  /**
	   * Transform an array into a regexp.
	   *
	   * @param  {!Array}  path
	   * @param  {Array}   keys
	   * @param  {!Object} options
	   * @return {!RegExp}
	   */
	  function arrayToRegexp(path, keys, options) {
	    var parts = [];
	
	    for (var i = 0; i < path.length; i++) {
	      parts.push(pathToRegexp(path[i], keys, options).source);
	    }
	
	    var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));
	
	    return attachKeys(regexp, keys);
	  }
	
	  /**
	   * Create a path regexp from string input.
	   *
	   * @param  {string}  path
	   * @param  {!Array}  keys
	   * @param  {!Object} options
	   * @return {!RegExp}
	   */
	  function stringToRegexp(path, keys, options) {
	    return tokensToRegExp(parse(path, options), keys, options);
	  }
	
	  /**
	   * Expose a function for taking tokens and returning a RegExp.
	   *
	   * @param  {!Array}          tokens
	   * @param  {(Array|Object)=} keys
	   * @param  {Object=}         options
	   * @return {!RegExp}
	   */
	  function tokensToRegExp(tokens, keys, options) {
	    if (!isarray(keys)) {
	      options = /** @type {!Object} */keys || options;
	      keys = [];
	    }
	
	    options = options || {};
	
	    var strict = options.strict;
	    var end = options.end !== false;
	    var route = '';
	
	    // Iterate over the tokens and create our regexp string.
	    for (var i = 0; i < tokens.length; i++) {
	      var token = tokens[i];
	
	      if (typeof token === 'string') {
	        route += escapeString(token);
	      } else {
	        var prefix = escapeString(token.prefix);
	        var capture = '(?:' + token.pattern + ')';
	
	        keys.push(token);
	
	        if (token.repeat) {
	          capture += '(?:' + prefix + capture + ')*';
	        }
	
	        if (token.optional) {
	          if (!token.partial) {
	            capture = '(?:' + prefix + '(' + capture + '))?';
	          } else {
	            capture = prefix + '(' + capture + ')?';
	          }
	        } else {
	          capture = prefix + '(' + capture + ')';
	        }
	
	        route += capture;
	      }
	    }
	
	    var delimiter = escapeString(options.delimiter || '/');
	    var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;
	
	    // In non-strict mode we allow a slash at the end of match. If the path to
	    // match already ends with a slash, we remove it for consistency. The slash
	    // is valid at the end of a path match, not in the middle. This is important
	    // in non-ending mode, where "/test/" shouldn't match "/test//route".
	    if (!strict) {
	      route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
	    }
	
	    if (end) {
	      route += '$';
	    } else {
	      // In non-ending mode, we need the capturing groups to match as much as
	      // possible by using a positive lookahead to the end or next path segment.
	      route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
	    }
	
	    return attachKeys(new RegExp('^' + route, flags(options)), keys);
	  }
	
	  /**
	   * Normalize the given path string, returning a regular expression.
	   *
	   * An empty array can be passed in for the keys, which will hold the
	   * placeholder key descriptions. For example, using `/user/:id`, `keys` will
	   * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
	   *
	   * @param  {(string|RegExp|Array)} path
	   * @param  {(Array|Object)=}       keys
	   * @param  {Object=}               options
	   * @return {!RegExp}
	   */
	  function pathToRegexp(path, keys, options) {
	    if (!isarray(keys)) {
	      options = /** @type {!Object} */keys || options;
	      keys = [];
	    }
	
	    options = options || {};
	
	    if (path instanceof RegExp) {
	      return regexpToRegexp(path, /** @type {!Array} */keys);
	    }
	
	    if (isarray(path)) {
	      return arrayToRegexp( /** @type {!Array} */path, /** @type {!Array} */keys, options);
	    }
	
	    return stringToRegexp( /** @type {string} */path, /** @type {!Array} */keys, options);
	  }
	
	  index.parse = parse_1;
	  index.compile = compile_1;
	  index.tokensToFunction = tokensToFunction_1;
	  index.tokensToRegExp = tokensToRegExp_1;
	
	  /*  */
	
	  function createRouteMap(routes) {
	    var pathMap = Object.create(null);
	    var nameMap = Object.create(null);
	
	    routes.forEach(function (route) {
	      addRouteRecord(pathMap, nameMap, route);
	    });
	
	    return {
	      pathMap: pathMap,
	      nameMap: nameMap
	    };
	  }
	
	  function addRouteRecord(pathMap, nameMap, route, parent, matchAs) {
	    var path = route.path;
	    var name = route.name;
	    assert(path != null, "\"path\" is required in a route configuration.");
	
	    var record = {
	      path: normalizePath(path, parent),
	      components: route.components || { default: route.component },
	      instances: {},
	      name: name,
	      parent: parent,
	      matchAs: matchAs,
	      redirect: route.redirect,
	      beforeEnter: route.beforeEnter,
	      meta: route.meta || {}
	    };
	
	    if (route.children) {
	      // Warn if route is named and has a default child route.
	      // If users navigate to this route by name, the default child will
	      // not be rendered (GH Issue #629)
	      if (false) {}
	      route.children.forEach(function (child) {
	        addRouteRecord(pathMap, nameMap, child, record);
	      });
	    }
	
	    if (route.alias !== undefined) {
	      if (Array.isArray(route.alias)) {
	        route.alias.forEach(function (alias) {
	          addRouteRecord(pathMap, nameMap, { path: alias }, parent, record.path);
	        });
	      } else {
	        addRouteRecord(pathMap, nameMap, { path: route.alias }, parent, record.path);
	      }
	    }
	
	    pathMap[record.path] = record;
	    if (name) {
	      if (!nameMap[name]) {
	        nameMap[name] = record;
	      } else {
	        warn(false, "Duplicate named routes definition: { name: \"" + name + "\", path: \"" + record.path + "\" }");
	      }
	    }
	  }
	
	  function normalizePath(path, parent) {
	    path = path.replace(/\/$/, '');
	    if (path[0] === '/') {
	      return path;
	    }
	    if (parent == null) {
	      return path;
	    }
	    return cleanPath(parent.path + "/" + path);
	  }
	
	  /*  */
	
	  var regexpCache = Object.create(null);
	
	  var regexpCompileCache = Object.create(null);
	
	  function createMatcher(routes) {
	    var ref = createRouteMap(routes);
	    var pathMap = ref.pathMap;
	    var nameMap = ref.nameMap;
	
	    function match(raw, currentRoute, redirectedFrom) {
	      var location = normalizeLocation(raw, currentRoute);
	      var name = location.name;
	
	      if (name) {
	        var record = nameMap[name];
	
	        if (_typeof(location.params) !== 'object') {
	          location.params = {};
	        }
	
	        if (currentRoute && _typeof(currentRoute.params) === 'object') {
	          for (var key in currentRoute.params) {
	            if (!(key in location.params)) {
	              location.params[key] = currentRoute.params[key];
	            }
	          }
	        }
	
	        if (record) {
	          location.path = fillParams(record.path, location.params, "named route \"" + name + "\"");
	          return _createRoute(record, location, redirectedFrom);
	        }
	      } else if (location.path) {
	        location.params = {};
	        for (var path in pathMap) {
	          if (matchRoute(path, location.params, location.path)) {
	            return _createRoute(pathMap[path], location, redirectedFrom);
	          }
	        }
	      }
	      // no match
	      return _createRoute(null, location);
	    }
	
	    function redirect(record, location) {
	      var originalRedirect = record.redirect;
	      var redirect = typeof originalRedirect === 'function' ? originalRedirect(createRoute(record, location)) : originalRedirect;
	
	      if (typeof redirect === 'string') {
	        redirect = { path: redirect };
	      }
	
	      if (!redirect || (typeof redirect === 'undefined' ? 'undefined' : _typeof(redirect)) !== 'object') {
	        warn(false, "invalid redirect option: " + JSON.stringify(redirect));
	        return _createRoute(null, location);
	      }
	
	      var re = redirect;
	      var name = re.name;
	      var path = re.path;
	      var query = location.query;
	      var hash = location.hash;
	      var params = location.params;
	      query = re.hasOwnProperty('query') ? re.query : query;
	      hash = re.hasOwnProperty('hash') ? re.hash : hash;
	      params = re.hasOwnProperty('params') ? re.params : params;
	
	      if (name) {
	        // resolved named direct
	        var targetRecord = nameMap[name];
	        assert(targetRecord, "redirect failed: named route \"" + name + "\" not found.");
	        return match({
	          _normalized: true,
	          name: name,
	          query: query,
	          hash: hash,
	          params: params
	        }, undefined, location);
	      } else if (path) {
	        // 1. resolve relative redirect
	        var rawPath = resolveRecordPath(path, record);
	        // 2. resolve params
	        var resolvedPath = fillParams(rawPath, params, "redirect route with path \"" + rawPath + "\"");
	        // 3. rematch with existing query and hash
	        return match({
	          _normalized: true,
	          path: resolvedPath,
	          query: query,
	          hash: hash
	        }, undefined, location);
	      } else {
	        warn(false, "invalid redirect option: " + JSON.stringify(redirect));
	        return _createRoute(null, location);
	      }
	    }
	
	    function alias(record, location, matchAs) {
	      var aliasedPath = fillParams(matchAs, location.params, "aliased route with path \"" + matchAs + "\"");
	      var aliasedMatch = match({
	        _normalized: true,
	        path: aliasedPath
	      });
	      if (aliasedMatch) {
	        var matched = aliasedMatch.matched;
	        var aliasedRecord = matched[matched.length - 1];
	        location.params = aliasedMatch.params;
	        return _createRoute(aliasedRecord, location);
	      }
	      return _createRoute(null, location);
	    }
	
	    function _createRoute(record, location, redirectedFrom) {
	      if (record && record.redirect) {
	        return redirect(record, redirectedFrom || location);
	      }
	      if (record && record.matchAs) {
	        return alias(record, location, record.matchAs);
	      }
	      return createRoute(record, location, redirectedFrom);
	    }
	
	    return match;
	  }
	
	  function matchRoute(path, params, pathname) {
	    var keys, regexp;
	    var hit = regexpCache[path];
	    if (hit) {
	      keys = hit.keys;
	      regexp = hit.regexp;
	    } else {
	      keys = [];
	      regexp = index(path, keys);
	      regexpCache[path] = { keys: keys, regexp: regexp };
	    }
	    var m = pathname.match(regexp);
	
	    if (!m) {
	      return false;
	    } else if (!params) {
	      return true;
	    }
	
	    for (var i = 1, len = m.length; i < len; ++i) {
	      var key = keys[i - 1];
	      var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
	      if (key) {
	        params[key.name] = val;
	      }
	    }
	
	    return true;
	  }
	
	  function fillParams(path, params, routeMsg) {
	    try {
	      var filler = regexpCompileCache[path] || (regexpCompileCache[path] = index.compile(path));
	      return filler(params || {}, { pretty: true });
	    } catch (e) {
	      assert(false, "missing param for " + routeMsg + ": " + e.message);
	      return '';
	    }
	  }
	
	  function resolveRecordPath(path, record) {
	    return resolvePath(path, record.parent ? record.parent.path : '/', true);
	  }
	
	  /*  */
	
	  var inBrowser = typeof window !== 'undefined';
	
	  var supportsHistory = inBrowser && function () {
	    var ua = window.navigator.userAgent;
	
	    if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
	      return false;
	    }
	
	    return window.history && 'pushState' in window.history;
	  }();
	
	  /*  */
	
	  function runQueue(queue, fn, cb) {
	    var step = function step(index) {
	      if (index >= queue.length) {
	        cb();
	      } else {
	        if (queue[index]) {
	          fn(queue[index], function () {
	            step(index + 1);
	          });
	        } else {
	          step(index + 1);
	        }
	      }
	    };
	    step(0);
	  }
	
	  /*  */
	
	  var History = function History(router, base) {
	    this.router = router;
	    this.base = normalizeBase(base);
	    // start with a route object that stands for "nowhere"
	    this.current = START;
	    this.pending = null;
	  };
	
	  History.prototype.listen = function listen(cb) {
	    this.cb = cb;
	  };
	
	  History.prototype.transitionTo = function transitionTo(location, cb) {
	    var this$1 = this;
	
	    var route = this.router.match(location, this.current);
	    this.confirmTransition(route, function () {
	      this$1.updateRoute(route);
	      cb && cb(route);
	      this$1.ensureURL();
	    });
	  };
	
	  History.prototype.confirmTransition = function confirmTransition(route, cb) {
	    var this$1 = this;
	
	    var current = this.current;
	    if (isSameRoute(route, current)) {
	      this.ensureURL();
	      return;
	    }
	
	    var ref = resolveQueue(this.current.matched, route.matched);
	    var deactivated = ref.deactivated;
	    var activated = ref.activated;
	
	    var queue = [].concat(
	    // in-component leave guards
	    extractLeaveGuards(deactivated),
	    // global before hooks
	    this.router.beforeHooks,
	    // enter guards
	    activated.map(function (m) {
	      return m.beforeEnter;
	    }),
	    // async components
	    resolveAsyncComponents(activated));
	
	    this.pending = route;
	    var iterator = function iterator(hook, next) {
	      if (this$1.pending !== route) {
	        return;
	      }
	      hook(route, current, function (to) {
	        if (to === false) {
	          // next(false) -> abort navigation, ensure current URL
	          this$1.ensureURL(true);
	        } else if (typeof to === 'string' || (typeof to === 'undefined' ? 'undefined' : _typeof(to)) === 'object') {
	          // next('/') or next({ path: '/' }) -> redirect
	          this$1.push(to);
	        } else {
	          // confirm transition and pass on the value
	          next(to);
	        }
	      });
	    };
	
	    runQueue(queue, iterator, function () {
	      var postEnterCbs = [];
	      var enterGuards = extractEnterGuards(activated, postEnterCbs, function () {
	        return this$1.current === route;
	      });
	      // wait until async components are resolved before
	      // extracting in-component enter guards
	      runQueue(enterGuards, iterator, function () {
	        if (this$1.pending === route) {
	          this$1.pending = null;
	          cb(route);
	          this$1.router.app.$nextTick(function () {
	            postEnterCbs.forEach(function (cb) {
	              return cb();
	            });
	          });
	        }
	      });
	    });
	  };
	
	  History.prototype.updateRoute = function updateRoute(route) {
	    var prev = this.current;
	    this.current = route;
	    this.cb && this.cb(route);
	    this.router.afterHooks.forEach(function (hook) {
	      hook && hook(route, prev);
	    });
	  };
	
	  function normalizeBase(base) {
	    if (!base) {
	      if (inBrowser) {
	        // respect <base> tag
	        var baseEl = document.querySelector('base');
	        base = baseEl ? baseEl.getAttribute('href') : '/';
	      } else {
	        base = '/';
	      }
	    }
	    // make sure there's the starting slash
	    if (base.charAt(0) !== '/') {
	      base = '/' + base;
	    }
	    // remove trailing slash
	    return base.replace(/\/$/, '');
	  }
	
	  function resolveQueue(current, next) {
	    var i;
	    var max = Math.max(current.length, next.length);
	    for (i = 0; i < max; i++) {
	      if (current[i] !== next[i]) {
	        break;
	      }
	    }
	    return {
	      activated: next.slice(i),
	      deactivated: current.slice(i)
	    };
	  }
	
	  function extractGuard(def, key) {
	    if (typeof def !== 'function') {
	      // extend now so that global mixins are applied.
	      def = _Vue.extend(def);
	    }
	    return def.options[key];
	  }
	
	  function extractLeaveGuards(matched) {
	    return flatten(flatMapComponents(matched, function (def, instance) {
	      var guard = extractGuard(def, 'beforeRouteLeave');
	      if (guard) {
	        return Array.isArray(guard) ? guard.map(function (guard) {
	          return wrapLeaveGuard(guard, instance);
	        }) : wrapLeaveGuard(guard, instance);
	      }
	    }).reverse());
	  }
	
	  function wrapLeaveGuard(guard, instance) {
	    return function routeLeaveGuard() {
	      return guard.apply(instance, arguments);
	    };
	  }
	
	  function extractEnterGuards(matched, cbs, isValid) {
	    return flatten(flatMapComponents(matched, function (def, _, match, key) {
	      var guard = extractGuard(def, 'beforeRouteEnter');
	      if (guard) {
	        return Array.isArray(guard) ? guard.map(function (guard) {
	          return wrapEnterGuard(guard, cbs, match, key, isValid);
	        }) : wrapEnterGuard(guard, cbs, match, key, isValid);
	      }
	    }));
	  }
	
	  function wrapEnterGuard(guard, cbs, match, key, isValid) {
	    return function routeEnterGuard(to, from, next) {
	      return guard(to, from, function (cb) {
	        next(cb);
	        if (typeof cb === 'function') {
	          cbs.push(function () {
	            // #750
	            // if a router-view is wrapped with an out-in transition,
	            // the instance may not have been registered at this time.
	            // we will need to poll for registration until current route
	            // is no longer valid.
	            poll(cb, match.instances, key, isValid);
	          });
	        }
	      });
	    };
	  }
	
	  function poll(cb, // somehow flow cannot infer this is a function
	  instances, key, isValid) {
	    if (instances[key]) {
	      cb(instances[key]);
	    } else if (isValid()) {
	      setTimeout(function () {
	        poll(cb, instances, key, isValid);
	      }, 16);
	    }
	  }
	
	  function resolveAsyncComponents(matched) {
	    return flatMapComponents(matched, function (def, _, match, key) {
	      // if it's a function and doesn't have Vue options attached,
	      // assume it's an async component resolve function.
	      // we are not using Vue's default async resolving mechanism because
	      // we want to halt the navigation until the incoming component has been
	      // resolved.
	      if (typeof def === 'function' && !def.options) {
	        return function (to, from, next) {
	          var resolve = function resolve(resolvedDef) {
	            match.components[key] = resolvedDef;
	            next();
	          };
	
	          var reject = function reject(reason) {
	            warn(false, "Failed to resolve async component " + key + ": " + reason);
	            next(false);
	          };
	
	          var res = def(resolve, reject);
	          if (res && typeof res.then === 'function') {
	            res.then(resolve, reject);
	          }
	        };
	      }
	    });
	  }
	
	  function flatMapComponents(matched, fn) {
	    return flatten(matched.map(function (m) {
	      return Object.keys(m.components).map(function (key) {
	        return fn(m.components[key], m.instances[key], m, key);
	      });
	    }));
	  }
	
	  function flatten(arr) {
	    return Array.prototype.concat.apply([], arr);
	  }
	
	  /*  */
	
	  var positionStore = Object.create(null);
	
	  function saveScrollPosition(key) {
	    if (!key) {
	      return;
	    }
	    positionStore[key] = {
	      x: window.pageXOffset,
	      y: window.pageYOffset
	    };
	  }
	
	  function getScrollPosition(key) {
	    if (!key) {
	      return;
	    }
	    return positionStore[key];
	  }
	
	  function getElementPosition(el) {
	    var docRect = document.documentElement.getBoundingClientRect();
	    var elRect = el.getBoundingClientRect();
	    return {
	      x: elRect.left - docRect.left,
	      y: elRect.top - docRect.top
	    };
	  }
	
	  function isValidPosition(obj) {
	    return isNumber(obj.x) || isNumber(obj.y);
	  }
	
	  function normalizePosition(obj) {
	    return {
	      x: isNumber(obj.x) ? obj.x : window.pageXOffset,
	      y: isNumber(obj.y) ? obj.y : window.pageYOffset
	    };
	  }
	
	  function isNumber(v) {
	    return typeof v === 'number';
	  }
	
	  /*  */
	
	  var genKey = function genKey() {
	    return String(Date.now());
	  };
	  var _key = genKey();
	
	  var HTML5History = function (History) {
	    function HTML5History(router, base) {
	      var this$1 = this;
	
	      History.call(this, router, base);
	
	      var expectScroll = router.options.scrollBehavior;
	      window.addEventListener('popstate', function (e) {
	        _key = e.state && e.state.key;
	        var current = this$1.current;
	        this$1.transitionTo(getLocation(this$1.base), function (next) {
	          if (expectScroll) {
	            this$1.handleScroll(next, current, true);
	          }
	        });
	      });
	
	      if (expectScroll) {
	        window.addEventListener('scroll', function () {
	          saveScrollPosition(_key);
	        });
	      }
	    }
	
	    if (History) HTML5History.__proto__ = History;
	    HTML5History.prototype = Object.create(History && History.prototype);
	    HTML5History.prototype.constructor = HTML5History;
	
	    HTML5History.prototype.go = function go(n) {
	      window.history.go(n);
	    };
	
	    HTML5History.prototype.push = function push(location) {
	      var this$1 = this;
	
	      var current = this.current;
	      this.transitionTo(location, function (route) {
	        pushState(cleanPath(this$1.base + route.fullPath));
	        this$1.handleScroll(route, current, false);
	      });
	    };
	
	    HTML5History.prototype.replace = function replace(location) {
	      var this$1 = this;
	
	      var current = this.current;
	      this.transitionTo(location, function (route) {
	        replaceState(cleanPath(this$1.base + route.fullPath));
	        this$1.handleScroll(route, current, false);
	      });
	    };
	
	    HTML5History.prototype.ensureURL = function ensureURL(push) {
	      if (getLocation(this.base) !== this.current.fullPath) {
	        var current = cleanPath(this.base + this.current.fullPath);
	        push ? pushState(current) : replaceState(current);
	      }
	    };
	
	    HTML5History.prototype.handleScroll = function handleScroll(to, from, isPop) {
	      var router = this.router;
	      if (!router.app) {
	        return;
	      }
	
	      var behavior = router.options.scrollBehavior;
	      if (!behavior) {
	        return;
	      }
	      assert(typeof behavior === 'function', "scrollBehavior must be a function");
	
	      // wait until re-render finishes before scrolling
	      router.app.$nextTick(function () {
	        var position = getScrollPosition(_key);
	        var shouldScroll = behavior(to, from, isPop ? position : null);
	        if (!shouldScroll) {
	          return;
	        }
	        var isObject = (typeof shouldScroll === 'undefined' ? 'undefined' : _typeof(shouldScroll)) === 'object';
	        if (isObject && typeof shouldScroll.selector === 'string') {
	          var el = document.querySelector(shouldScroll.selector);
	          if (el) {
	            position = getElementPosition(el);
	          } else if (isValidPosition(shouldScroll)) {
	            position = normalizePosition(shouldScroll);
	          }
	        } else if (isObject && isValidPosition(shouldScroll)) {
	          position = normalizePosition(shouldScroll);
	        }
	
	        if (position) {
	          window.scrollTo(position.x, position.y);
	        }
	      });
	    };
	
	    return HTML5History;
	  }(History);
	
	  function getLocation(base) {
	    var path = window.location.pathname;
	    if (base && path.indexOf(base) === 0) {
	      path = path.slice(base.length);
	    }
	    return (path || '/') + window.location.search + window.location.hash;
	  }
	
	  function pushState(url, replace) {
	    // try...catch the pushState call to get around Safari
	    // DOM Exception 18 where it limits to 100 pushState calls
	    var history = window.history;
	    try {
	      if (replace) {
	        history.replaceState({ key: _key }, '', url);
	      } else {
	        _key = genKey();
	        history.pushState({ key: _key }, '', url);
	      }
	      saveScrollPosition(_key);
	    } catch (e) {
	      window.location[replace ? 'assign' : 'replace'](url);
	    }
	  }
	
	  function replaceState(url) {
	    pushState(url, true);
	  }
	
	  /*  */
	
	  var HashHistory = function (History) {
	    function HashHistory(router, base, fallback) {
	      History.call(this, router, base);
	
	      // check history fallback deeplinking
	      if (fallback && this.checkFallback()) {
	        return;
	      }
	
	      ensureSlash();
	    }
	
	    if (History) HashHistory.__proto__ = History;
	    HashHistory.prototype = Object.create(History && History.prototype);
	    HashHistory.prototype.constructor = HashHistory;
	
	    HashHistory.prototype.checkFallback = function checkFallback() {
	      var location = getLocation(this.base);
	      if (!/^\/#/.test(location)) {
	        window.location.replace(cleanPath(this.base + '/#' + location));
	        return true;
	      }
	    };
	
	    HashHistory.prototype.onHashChange = function onHashChange() {
	      if (!ensureSlash()) {
	        return;
	      }
	      this.transitionTo(getHash(), function (route) {
	        replaceHash(route.fullPath);
	      });
	    };
	
	    HashHistory.prototype.push = function push(location) {
	      this.transitionTo(location, function (route) {
	        pushHash(route.fullPath);
	      });
	    };
	
	    HashHistory.prototype.replace = function replace(location) {
	      this.transitionTo(location, function (route) {
	        replaceHash(route.fullPath);
	      });
	    };
	
	    HashHistory.prototype.go = function go(n) {
	      window.history.go(n);
	    };
	
	    HashHistory.prototype.ensureURL = function ensureURL(push) {
	      var current = this.current.fullPath;
	      if (getHash() !== current) {
	        push ? pushHash(current) : replaceHash(current);
	      }
	    };
	
	    return HashHistory;
	  }(History);
	
	  function ensureSlash() {
	    var path = getHash();
	    if (path.charAt(0) === '/') {
	      return true;
	    }
	    replaceHash('/' + path);
	    return false;
	  }
	
	  function getHash() {
	    // We can't use window.location.hash here because it's not
	    // consistent across browsers - Firefox will pre-decode it!
	    var href = window.location.href;
	    var index = href.indexOf('#');
	    return index === -1 ? '' : href.slice(index + 1);
	  }
	
	  function pushHash(path) {
	    window.location.hash = path;
	  }
	
	  function replaceHash(path) {
	    var i = window.location.href.indexOf('#');
	    window.location.replace(window.location.href.slice(0, i >= 0 ? i : 0) + '#' + path);
	  }
	
	  /*  */
	
	  var AbstractHistory = function (History) {
	    function AbstractHistory(router) {
	      History.call(this, router);
	      this.stack = [];
	      this.index = -1;
	    }
	
	    if (History) AbstractHistory.__proto__ = History;
	    AbstractHistory.prototype = Object.create(History && History.prototype);
	    AbstractHistory.prototype.constructor = AbstractHistory;
	
	    AbstractHistory.prototype.push = function push(location) {
	      var this$1 = this;
	
	      this.transitionTo(location, function (route) {
	        this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
	        this$1.index++;
	      });
	    };
	
	    AbstractHistory.prototype.replace = function replace(location) {
	      var this$1 = this;
	
	      this.transitionTo(location, function (route) {
	        this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
	      });
	    };
	
	    AbstractHistory.prototype.go = function go(n) {
	      var this$1 = this;
	
	      var targetIndex = this.index + n;
	      if (targetIndex < 0 || targetIndex >= this.stack.length) {
	        return;
	      }
	      var route = this.stack[targetIndex];
	      this.confirmTransition(route, function () {
	        this$1.index = targetIndex;
	        this$1.updateRoute(route);
	      });
	    };
	
	    AbstractHistory.prototype.ensureURL = function ensureURL() {
	      // noop
	    };
	
	    return AbstractHistory;
	  }(History);
	
	  /*  */
	
	  var VueRouter = function VueRouter(options) {
	    if (options === void 0) options = {};
	
	    this.app = null;
	    this.options = options;
	    this.beforeHooks = [];
	    this.afterHooks = [];
	    this.match = createMatcher(options.routes || []);
	
	    var mode = options.mode || 'hash';
	    this.fallback = mode === 'history' && !supportsHistory;
	    if (this.fallback) {
	      mode = 'hash';
	    }
	    if (!inBrowser) {
	      mode = 'abstract';
	    }
	    this.mode = mode;
	
	    switch (mode) {
	      case 'history':
	        this.history = new HTML5History(this, options.base);
	        break;
	      case 'hash':
	        this.history = new HashHistory(this, options.base, this.fallback);
	        break;
	      case 'abstract':
	        this.history = new AbstractHistory(this);
	        break;
	      default:
	        assert(false, "invalid mode: " + mode);
	    }
	  };
	
	  var prototypeAccessors = { currentRoute: {} };
	
	  prototypeAccessors.currentRoute.get = function () {
	    return this.history && this.history.current;
	  };
	
	  VueRouter.prototype.init = function init(app /* Vue component instance */) {
	    var this$1 = this;
	
	    assert(install.installed, "not installed. Make sure to call `Vue.use(VueRouter)` " + "before creating root instance.");
	
	    this.app = app;
	
	    var history = this.history;
	
	    if (history instanceof HTML5History) {
	      history.transitionTo(getLocation(history.base));
	    } else if (history instanceof HashHistory) {
	      history.transitionTo(getHash(), function () {
	        window.addEventListener('hashchange', function () {
	          history.onHashChange();
	        });
	      });
	    }
	
	    history.listen(function (route) {
	      this$1.app._route = route;
	    });
	  };
	
	  VueRouter.prototype.beforeEach = function beforeEach(fn) {
	    this.beforeHooks.push(fn);
	  };
	
	  VueRouter.prototype.afterEach = function afterEach(fn) {
	    this.afterHooks.push(fn);
	  };
	
	  VueRouter.prototype.push = function push(location) {
	    this.history.push(location);
	  };
	
	  VueRouter.prototype.replace = function replace(location) {
	    this.history.replace(location);
	  };
	
	  VueRouter.prototype.go = function go(n) {
	    this.history.go(n);
	  };
	
	  VueRouter.prototype.back = function back() {
	    this.go(-1);
	  };
	
	  VueRouter.prototype.forward = function forward() {
	    this.go(1);
	  };
	
	  VueRouter.prototype.getMatchedComponents = function getMatchedComponents() {
	    if (!this.currentRoute) {
	      return [];
	    }
	    return [].concat.apply([], this.currentRoute.matched.map(function (m) {
	      return Object.keys(m.components).map(function (key) {
	        return m.components[key];
	      });
	    }));
	  };
	
	  Object.defineProperties(VueRouter.prototype, prototypeAccessors);
	
	  VueRouter.install = install;
	
	  if (inBrowser && window.Vue) {
	    window.Vue.use(VueRouter);
	  }
	
	  return VueRouter;
	});

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Observer = __webpack_require__(9);
	
	var _Observer2 = _interopRequireDefault(_Observer);
	
	var _Emitter = __webpack_require__(10);
	
	var _Emitter2 = _interopRequireDefault(_Emitter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    install: function install(Vue, connection) {
	
	        if (!connection) throw new Error("[Vue-Socket.io] cannot locate connection");
	
	        var observer = new _Observer2.default(connection);
	
	        Vue.prototype.$socket = observer.Socket;
	
	        Vue.mixin({
	            beforeCreate: function beforeCreate() {
	                var _this = this;
	                var sockets = this.$options['sockets'];
	
	                if (sockets) {
	                    Object.keys(sockets).forEach(function (key) {
	                        _Emitter2.default.addListener(key, sockets[key], _this);
	                    });
	                }
	            },
	            beforeDestroy: function beforeDestroy() {
	                var _this = this;
	                var sockets = this.$options['sockets'];
	
	                if (sockets) {
	                    Object.keys(sockets).forEach(function (key) {
	                        _Emitter2.default.removeListener(key, sockets[key], _this);
	                    });
	                }
	            }
	        });
	    }
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Emitter = __webpack_require__(10);
	
	var _Emitter2 = _interopRequireDefault(_Emitter);
	
	var _socket = __webpack_require__(11);
	
	var _socket2 = _interopRequireDefault(_socket);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _class = function () {
	    function _class(connection) {
	        _classCallCheck(this, _class);
	
	        if (typeof connection == 'string') {
	            this.Socket = (0, _socket2.default)(connection);
	        } else {
	            this.Socket = connection;
	        }
	
	        this.onEvent();
	    }
	
	    _createClass(_class, [{
	        key: 'onEvent',
	        value: function onEvent() {
	            this.Socket.onevent = function (packet) {
	                _Emitter2.default.emit(packet.data[0], packet.data[1]);
	            };
	
	            var _this = this;
	
	            ["connect", "error", "disconnect", "reconnect", "reconnect_attempt", "reconnecting", "reconnect_error", "reconnect_failed"].forEach(function (value) {
	                _this.Socket.on(value, function (data) {
	                    _Emitter2.default.emit(value, data);
	                });
	            });
	        }
	    }]);

	    return _class;
	}();

	exports.default = _class;

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	exports.default = new (function () {
	    function _class() {
	        _classCallCheck(this, _class);
	
	        this.listeners = new Map();
	    }
	
	    _createClass(_class, [{
	        key: 'addListener',
	        value: function addListener(label, callback, vm) {
	            if (typeof callback == 'function') {
	                this.listeners.has(label) || this.listeners.set(label, []);
	                this.listeners.get(label).push({ callback: callback, vm: vm });
	
	                return true;
	            }
	
	            return false;
	        }
	    }, {
	        key: 'removeListener',
	        value: function removeListener(label, callback, vm) {
	            var listeners = this.listeners.get(label),
	                index = void 0;
	
	            if (listeners && listeners.length) {
	                index = listeners.reduce(function (i, listener, index) {
	                    return typeof listener.callback == 'function' && listener.callback === callback && listener.vm == vm ? i = index : i;
	                }, -1);
	
	                if (index > -1) {
	                    listeners.splice(index, 1);
	                    this.listeners.set(label, listeners);
	                    return true;
	                }
	            }
	            return false;
	        }
	    }, {
	        key: 'emit',
	        value: function emit(label) {
	            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                args[_key - 1] = arguments[_key];
	            }
	
	            var listeners = this.listeners.get(label);
	
	            if (listeners && listeners.length) {
	                listeners.forEach(function (listener) {
	                    var _listener$callback;
	
	                    (_listener$callback = listener.callback).call.apply(_listener$callback, [listener.vm].concat(args));
	                });
	                return true;
	            }
	            return false;
	        }
	    }]);
	
	    return _class;
	}())();

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/**
	 * Module dependencies.
	 */
	
	var url = __webpack_require__(12);
	var parser = __webpack_require__(17);
	var Manager = __webpack_require__(28);
	var debug = __webpack_require__(14)('socket.io-client');
	
	/**
	 * Module exports.
	 */
	
	module.exports = exports = lookup;
	
	/**
	 * Managers cache.
	 */
	
	var cache = exports.managers = {};
	
	/**
	 * Looks up an existing `Manager` for multiplexing.
	 * If the user summons:
	 *
	 *   `io('http://localhost/a');`
	 *   `io('http://localhost/b');`
	 *
	 * We reuse the existing instance based on same scheme/port/host,
	 * and we initialize sockets for each namespace.
	 *
	 * @api public
	 */
	
	function lookup(uri, opts) {
	  if ((typeof uri === 'undefined' ? 'undefined' : _typeof(uri)) === 'object') {
	    opts = uri;
	    uri = undefined;
	  }
	
	  opts = opts || {};
	
	  var parsed = url(uri);
	  var source = parsed.source;
	  var id = parsed.id;
	  var path = parsed.path;
	  var sameNamespace = cache[id] && path in cache[id].nsps;
	  var newConnection = opts.forceNew || opts['force new connection'] || false === opts.multiplex || sameNamespace;
	
	  var io;
	
	  if (newConnection) {
	    debug('ignoring socket cache for %s', source);
	    io = Manager(source, opts);
	  } else {
	    if (!cache[id]) {
	      debug('new io instance for %s', source);
	      cache[id] = Manager(source, opts);
	    }
	    io = cache[id];
	  }
	  if (parsed.query && !opts.query) {
	    opts.query = parsed.query;
	  } else if (opts && 'object' === _typeof(opts.query)) {
	    opts.query = encodeQueryString(opts.query);
	  }
	  return io.socket(parsed.path, opts);
	}
	/**
	 *  Helper method to parse query objects to string.
	 * @param {object} query
	 * @returns {string}
	 */
	function encodeQueryString(obj) {
	  var str = [];
	  for (var p in obj) {
	    if (obj.hasOwnProperty(p)) {
	      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
	    }
	  }
	  return str.join('&');
	}
	/**
	 * Protocol version.
	 *
	 * @api public
	 */
	
	exports.protocol = parser.protocol;
	
	/**
	 * `connect`.
	 *
	 * @param {String} uri
	 * @api public
	 */
	
	exports.connect = lookup;
	
	/**
	 * Expose constructors for standalone build.
	 *
	 * @api public
	 */
	
	exports.Manager = __webpack_require__(28);
	exports.Socket = __webpack_require__(57);

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	/**
	 * Module dependencies.
	 */
	
	var parseuri = __webpack_require__(13);
	var debug = __webpack_require__(14)('socket.io-client:url');
	
	/**
	 * Module exports.
	 */
	
	module.exports = url;
	
	/**
	 * URL parser.
	 *
	 * @param {String} url
	 * @param {Object} An object meant to mimic window.location.
	 *                 Defaults to window.location.
	 * @api public
	 */
	
	function url(uri, loc) {
	  var obj = uri;
	
	  // default to window.location
	  loc = loc || global.location;
	  if (null == uri) uri = loc.protocol + '//' + loc.host;
	
	  // relative path support
	  if ('string' === typeof uri) {
	    if ('/' === uri.charAt(0)) {
	      if ('/' === uri.charAt(1)) {
	        uri = loc.protocol + uri;
	      } else {
	        uri = loc.host + uri;
	      }
	    }
	
	    if (!/^(https?|wss?):\/\//.test(uri)) {
	      debug('protocol-less url %s', uri);
	      if ('undefined' !== typeof loc) {
	        uri = loc.protocol + '//' + uri;
	      } else {
	        uri = 'https://' + uri;
	      }
	    }
	
	    // parse
	    debug('parse %s', uri);
	    obj = parseuri(uri);
	  }
	
	  // make sure we treat `localhost:80` and `localhost` equally
	  if (!obj.port) {
	    if (/^(http|ws)$/.test(obj.protocol)) {
	      obj.port = '80';
	    } else if (/^(http|ws)s$/.test(obj.protocol)) {
	      obj.port = '443';
	    }
	  }
	
	  obj.path = obj.path || '/';
	
	  var ipv6 = obj.host.indexOf(':') !== -1;
	  var host = ipv6 ? '[' + obj.host + ']' : obj.host;
	
	  // define unique id
	  obj.id = obj.protocol + '://' + host + ':' + obj.port;
	  // define href
	  obj.href = obj.protocol + '://' + host + (loc && loc.port === obj.port ? '' : ':' + obj.port);
	
	  return obj;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Parses an URI
	 *
	 * @author Steven Levithan <stevenlevithan.com> (MIT license)
	 * @api private
	 */
	
	var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
	
	var parts = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'];
	
	module.exports = function parseuri(str) {
	    var src = str,
	        b = str.indexOf('['),
	        e = str.indexOf(']');
	
	    if (b != -1 && e != -1) {
	        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
	    }
	
	    var m = re.exec(str || ''),
	        uri = {},
	        i = 14;
	
	    while (i--) {
	        uri[parts[i]] = m[i] || '';
	    }
	
	    if (b != -1 && e != -1) {
	        uri.source = src;
	        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
	        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
	        uri.ipv6uri = true;
	    }
	
	    return uri;
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/**
	 * This is the web browser implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */
	
	exports = module.exports = __webpack_require__(15);
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();
	
	/**
	 * Colors.
	 */
	
	exports.colors = ['lightseagreen', 'forestgreen', 'goldenrod', 'dodgerblue', 'darkorchid', 'crimson'];
	
	/**
	 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
	 * and the Firebug extension (any Firefox version) are known
	 * to support "%c" CSS customizations.
	 *
	 * TODO: add a `localStorage` variable to explicitly enable/disable colors
	 */
	
	function useColors() {
	  // is webkit? http://stackoverflow.com/a/16459606/376773
	  return 'WebkitAppearance' in document.documentElement.style ||
	  // is firebug? http://stackoverflow.com/a/398120/376773
	  window.console && (console.firebug || console.exception && console.table) ||
	  // is firefox >= v31?
	  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
	  navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31;
	}
	
	/**
	 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	 */
	
	exports.formatters.j = function (v) {
	  return JSON.stringify(v);
	};
	
	/**
	 * Colorize log arguments if enabled.
	 *
	 * @api public
	 */
	
	function formatArgs() {
	  var args = arguments;
	  var useColors = this.useColors;
	
	  args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);
	
	  if (!useColors) return args;
	
	  var c = 'color: ' + this.color;
	  args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));
	
	  // the final "%c" is somewhat tricky, because there could be other
	  // arguments passed either before or after the %c, so we need to
	  // figure out the correct index to insert the CSS into
	  var index = 0;
	  var lastC = 0;
	  args[0].replace(/%[a-z%]/g, function (match) {
	    if ('%%' === match) return;
	    index++;
	    if ('%c' === match) {
	      // we only are interested in the *last* %c
	      // (the user may have provided their own)
	      lastC = index;
	    }
	  });
	
	  args.splice(lastC, 0, c);
	  return args;
	}
	
	/**
	 * Invokes `console.log()` when available.
	 * No-op when `console.log` is not a "function".
	 *
	 * @api public
	 */
	
	function log() {
	  // this hackery is required for IE8/9, where
	  // the `console.log` function doesn't have 'apply'
	  return 'object' === (typeof console === 'undefined' ? 'undefined' : _typeof(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments);
	}
	
	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */
	
	function save(namespaces) {
	  try {
	    if (null == namespaces) {
	      exports.storage.removeItem('debug');
	    } else {
	      exports.storage.debug = namespaces;
	    }
	  } catch (e) {}
	}
	
	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */
	
	function load() {
	  var r;
	  try {
	    r = exports.storage.debug;
	  } catch (e) {}
	  return r;
	}
	
	/**
	 * Enable namespaces listed in `localStorage.debug` initially.
	 */
	
	exports.enable(load());
	
	/**
	 * Localstorage attempts to return the localstorage.
	 *
	 * This is necessary because safari throws
	 * when a user disables cookies/localstorage
	 * and you attempt to access it.
	 *
	 * @return {LocalStorage}
	 * @api private
	 */
	
	function localstorage() {
	  try {
	    return window.localStorage;
	  } catch (e) {}
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */
	
	exports = module.exports = debug;
	exports.coerce = coerce;
	exports.disable = disable;
	exports.enable = enable;
	exports.enabled = enabled;
	exports.humanize = __webpack_require__(16);
	
	/**
	 * The currently active debug mode names, and names to skip.
	 */
	
	exports.names = [];
	exports.skips = [];
	
	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lowercased letter, i.e. "n".
	 */
	
	exports.formatters = {};
	
	/**
	 * Previously assigned color.
	 */
	
	var prevColor = 0;
	
	/**
	 * Previous log timestamp.
	 */
	
	var prevTime;
	
	/**
	 * Select a color.
	 *
	 * @return {Number}
	 * @api private
	 */
	
	function selectColor() {
	  return exports.colors[prevColor++ % exports.colors.length];
	}
	
	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */
	
	function debug(namespace) {
	
	  // define the `disabled` version
	  function disabled() {}
	  disabled.enabled = false;
	
	  // define the `enabled` version
	  function enabled() {
	
	    var self = enabled;
	
	    // set `diff` timestamp
	    var curr = +new Date();
	    var ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;
	
	    // add the `color` if not set
	    if (null == self.useColors) self.useColors = exports.useColors();
	    if (null == self.color && self.useColors) self.color = selectColor();
	
	    var args = Array.prototype.slice.call(arguments);
	
	    args[0] = exports.coerce(args[0]);
	
	    if ('string' !== typeof args[0]) {
	      // anything else let's inspect with %o
	      args = ['%o'].concat(args);
	    }
	
	    // apply any `formatters` transformations
	    var index = 0;
	    args[0] = args[0].replace(/%([a-z%])/g, function (match, format) {
	      // if we encounter an escaped % then don't increase the array index
	      if (match === '%%') return match;
	      index++;
	      var formatter = exports.formatters[format];
	      if ('function' === typeof formatter) {
	        var val = args[index];
	        match = formatter.call(self, val);
	
	        // now we need to remove `args[index]` since it's inlined in the `format`
	        args.splice(index, 1);
	        index--;
	      }
	      return match;
	    });
	
	    if ('function' === typeof exports.formatArgs) {
	      args = exports.formatArgs.apply(self, args);
	    }
	    var logFn = enabled.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }
	  enabled.enabled = true;
	
	  var fn = exports.enabled(namespace) ? enabled : disabled;
	
	  fn.namespace = namespace;
	
	  return fn;
	}
	
	/**
	 * Enables a debug mode by namespaces. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} namespaces
	 * @api public
	 */
	
	function enable(namespaces) {
	  exports.save(namespaces);
	
	  var split = (namespaces || '').split(/[\s,]+/);
	  var len = split.length;
	
	  for (var i = 0; i < len; i++) {
	    if (!split[i]) continue; // ignore empty strings
	    namespaces = split[i].replace(/\*/g, '.*?');
	    if (namespaces[0] === '-') {
	      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	    } else {
	      exports.names.push(new RegExp('^' + namespaces + '$'));
	    }
	  }
	}
	
	/**
	 * Disable debug output.
	 *
	 * @api public
	 */
	
	function disable() {
	  exports.enable('');
	}
	
	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */
	
	function enabled(name) {
	  var i, len;
	  for (i = 0, len = exports.skips.length; i < len; i++) {
	    if (exports.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (i = 0, len = exports.names.length; i < len; i++) {
	    if (exports.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	/**
	 * Coerce `val`.
	 *
	 * @param {Mixed} val
	 * @return {Mixed}
	 * @api private
	 */
	
	function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
	}

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Helpers.
	 */
	
	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var y = d * 365.25;
	
	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} options
	 * @return {String|Number}
	 * @api public
	 */
	
	module.exports = function (val, options) {
	  options = options || {};
	  if ('string' == typeof val) return parse(val);
	  return options.long ? long(val) : short(val);
	};
	
	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */
	
	function parse(str) {
	  str = '' + str;
	  if (str.length > 10000) return;
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
	  if (!match) return;
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	  }
	}
	
	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */
	
	function short(ms) {
	  if (ms >= d) return Math.round(ms / d) + 'd';
	  if (ms >= h) return Math.round(ms / h) + 'h';
	  if (ms >= m) return Math.round(ms / m) + 'm';
	  if (ms >= s) return Math.round(ms / s) + 's';
	  return ms + 'ms';
	}
	
	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */
	
	function long(ms) {
	  return plural(ms, d, 'day') || plural(ms, h, 'hour') || plural(ms, m, 'minute') || plural(ms, s, 'second') || ms + ' ms';
	}
	
	/**
	 * Pluralization helper.
	 */
	
	function plural(ms, n, name) {
	  if (ms < n) return;
	  if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
	  return Math.ceil(ms / n) + ' ' + name + 's';
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Module dependencies.
	 */
	
	var debug = __webpack_require__(18)('socket.io-parser');
	var json = __webpack_require__(21);
	var Emitter = __webpack_require__(24);
	var binary = __webpack_require__(25);
	var isBuf = __webpack_require__(27);
	
	/**
	 * Protocol version.
	 *
	 * @api public
	 */
	
	exports.protocol = 4;
	
	/**
	 * Packet types.
	 *
	 * @api public
	 */
	
	exports.types = ['CONNECT', 'DISCONNECT', 'EVENT', 'ACK', 'ERROR', 'BINARY_EVENT', 'BINARY_ACK'];
	
	/**
	 * Packet type `connect`.
	 *
	 * @api public
	 */
	
	exports.CONNECT = 0;
	
	/**
	 * Packet type `disconnect`.
	 *
	 * @api public
	 */
	
	exports.DISCONNECT = 1;
	
	/**
	 * Packet type `event`.
	 *
	 * @api public
	 */
	
	exports.EVENT = 2;
	
	/**
	 * Packet type `ack`.
	 *
	 * @api public
	 */
	
	exports.ACK = 3;
	
	/**
	 * Packet type `error`.
	 *
	 * @api public
	 */
	
	exports.ERROR = 4;
	
	/**
	 * Packet type 'binary event'
	 *
	 * @api public
	 */
	
	exports.BINARY_EVENT = 5;
	
	/**
	 * Packet type `binary ack`. For acks with binary arguments.
	 *
	 * @api public
	 */
	
	exports.BINARY_ACK = 6;
	
	/**
	 * Encoder constructor.
	 *
	 * @api public
	 */
	
	exports.Encoder = Encoder;
	
	/**
	 * Decoder constructor.
	 *
	 * @api public
	 */
	
	exports.Decoder = Decoder;
	
	/**
	 * A socket.io Encoder instance
	 *
	 * @api public
	 */
	
	function Encoder() {}
	
	/**
	 * Encode a packet as a single string if non-binary, or as a
	 * buffer sequence, depending on packet type.
	 *
	 * @param {Object} obj - packet object
	 * @param {Function} callback - function to handle encodings (likely engine.write)
	 * @return Calls callback with Array of encodings
	 * @api public
	 */
	
	Encoder.prototype.encode = function (obj, callback) {
	  debug('encoding packet %j', obj);
	
	  if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
	    encodeAsBinary(obj, callback);
	  } else {
	    var encoding = encodeAsString(obj);
	    callback([encoding]);
	  }
	};
	
	/**
	 * Encode packet as string.
	 *
	 * @param {Object} packet
	 * @return {String} encoded
	 * @api private
	 */
	
	function encodeAsString(obj) {
	  var str = '';
	  var nsp = false;
	
	  // first is type
	  str += obj.type;
	
	  // attachments if we have them
	  if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
	    str += obj.attachments;
	    str += '-';
	  }
	
	  // if we have a namespace other than `/`
	  // we append it followed by a comma `,`
	  if (obj.nsp && '/' != obj.nsp) {
	    nsp = true;
	    str += obj.nsp;
	  }
	
	  // immediately followed by the id
	  if (null != obj.id) {
	    if (nsp) {
	      str += ',';
	      nsp = false;
	    }
	    str += obj.id;
	  }
	
	  // json data
	  if (null != obj.data) {
	    if (nsp) str += ',';
	    str += json.stringify(obj.data);
	  }
	
	  debug('encoded %j as %s', obj, str);
	  return str;
	}
	
	/**
	 * Encode packet as 'buffer sequence' by removing blobs, and
	 * deconstructing packet into object with placeholders and
	 * a list of buffers.
	 *
	 * @param {Object} packet
	 * @return {Buffer} encoded
	 * @api private
	 */
	
	function encodeAsBinary(obj, callback) {
	
	  function writeEncoding(bloblessData) {
	    var deconstruction = binary.deconstructPacket(bloblessData);
	    var pack = encodeAsString(deconstruction.packet);
	    var buffers = deconstruction.buffers;
	
	    buffers.unshift(pack); // add packet info to beginning of data list
	    callback(buffers); // write all the buffers
	  }
	
	  binary.removeBlobs(obj, writeEncoding);
	}
	
	/**
	 * A socket.io Decoder instance
	 *
	 * @return {Object} decoder
	 * @api public
	 */
	
	function Decoder() {
	  this.reconstructor = null;
	}
	
	/**
	 * Mix in `Emitter` with Decoder.
	 */
	
	Emitter(Decoder.prototype);
	
	/**
	 * Decodes an ecoded packet string into packet JSON.
	 *
	 * @param {String} obj - encoded packet
	 * @return {Object} packet
	 * @api public
	 */
	
	Decoder.prototype.add = function (obj) {
	  var packet;
	  if ('string' == typeof obj) {
	    packet = decodeString(obj);
	    if (exports.BINARY_EVENT == packet.type || exports.BINARY_ACK == packet.type) {
	      // binary packet's json
	      this.reconstructor = new BinaryReconstructor(packet);
	
	      // no attachments, labeled binary but no binary data to follow
	      if (this.reconstructor.reconPack.attachments === 0) {
	        this.emit('decoded', packet);
	      }
	    } else {
	      // non-binary full packet
	      this.emit('decoded', packet);
	    }
	  } else if (isBuf(obj) || obj.base64) {
	    // raw binary data
	    if (!this.reconstructor) {
	      throw new Error('got binary data when not reconstructing a packet');
	    } else {
	      packet = this.reconstructor.takeBinaryData(obj);
	      if (packet) {
	        // received final buffer
	        this.reconstructor = null;
	        this.emit('decoded', packet);
	      }
	    }
	  } else {
	    throw new Error('Unknown type: ' + obj);
	  }
	};
	
	/**
	 * Decode a packet String (JSON data)
	 *
	 * @param {String} str
	 * @return {Object} packet
	 * @api private
	 */
	
	function decodeString(str) {
	  var p = {};
	  var i = 0;
	
	  // look up type
	  p.type = Number(str.charAt(0));
	  if (null == exports.types[p.type]) return error();
	
	  // look up attachments if type binary
	  if (exports.BINARY_EVENT == p.type || exports.BINARY_ACK == p.type) {
	    var buf = '';
	    while (str.charAt(++i) != '-') {
	      buf += str.charAt(i);
	      if (i == str.length) break;
	    }
	    if (buf != Number(buf) || str.charAt(i) != '-') {
	      throw new Error('Illegal attachments');
	    }
	    p.attachments = Number(buf);
	  }
	
	  // look up namespace (if any)
	  if ('/' == str.charAt(i + 1)) {
	    p.nsp = '';
	    while (++i) {
	      var c = str.charAt(i);
	      if (',' == c) break;
	      p.nsp += c;
	      if (i == str.length) break;
	    }
	  } else {
	    p.nsp = '/';
	  }
	
	  // look up id
	  var next = str.charAt(i + 1);
	  if ('' !== next && Number(next) == next) {
	    p.id = '';
	    while (++i) {
	      var c = str.charAt(i);
	      if (null == c || Number(c) != c) {
	        --i;
	        break;
	      }
	      p.id += str.charAt(i);
	      if (i == str.length) break;
	    }
	    p.id = Number(p.id);
	  }
	
	  // look up json data
	  if (str.charAt(++i)) {
	    p = tryParse(p, str.substr(i));
	  }
	
	  debug('decoded %s as %j', str, p);
	  return p;
	}
	
	function tryParse(p, str) {
	  try {
	    p.data = json.parse(str);
	  } catch (e) {
	    return error();
	  }
	  return p;
	};
	
	/**
	 * Deallocates a parser's resources
	 *
	 * @api public
	 */
	
	Decoder.prototype.destroy = function () {
	  if (this.reconstructor) {
	    this.reconstructor.finishedReconstruction();
	  }
	};
	
	/**
	 * A manager of a binary event's 'buffer sequence'. Should
	 * be constructed whenever a packet of type BINARY_EVENT is
	 * decoded.
	 *
	 * @param {Object} packet
	 * @return {BinaryReconstructor} initialized reconstructor
	 * @api private
	 */
	
	function BinaryReconstructor(packet) {
	  this.reconPack = packet;
	  this.buffers = [];
	}
	
	/**
	 * Method to be called when binary data received from connection
	 * after a BINARY_EVENT packet.
	 *
	 * @param {Buffer | ArrayBuffer} binData - the raw binary data received
	 * @return {null | Object} returns null if more binary data is expected or
	 *   a reconstructed packet object if all buffers have been received.
	 * @api private
	 */
	
	BinaryReconstructor.prototype.takeBinaryData = function (binData) {
	  this.buffers.push(binData);
	  if (this.buffers.length == this.reconPack.attachments) {
	    // done with buffer list
	    var packet = binary.reconstructPacket(this.reconPack, this.buffers);
	    this.finishedReconstruction();
	    return packet;
	  }
	  return null;
	};
	
	/**
	 * Cleans up binary packet reconstruction variables.
	 *
	 * @api private
	 */
	
	BinaryReconstructor.prototype.finishedReconstruction = function () {
	  this.reconPack = null;
	  this.buffers = [];
	};
	
	function error(data) {
	  return {
	    type: exports.ERROR,
	    data: 'parser error'
	  };
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/**
	 * This is the web browser implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */
	
	exports = module.exports = __webpack_require__(19);
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();
	
	/**
	 * Colors.
	 */
	
	exports.colors = ['lightseagreen', 'forestgreen', 'goldenrod', 'dodgerblue', 'darkorchid', 'crimson'];
	
	/**
	 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
	 * and the Firebug extension (any Firefox version) are known
	 * to support "%c" CSS customizations.
	 *
	 * TODO: add a `localStorage` variable to explicitly enable/disable colors
	 */
	
	function useColors() {
	  // is webkit? http://stackoverflow.com/a/16459606/376773
	  return 'WebkitAppearance' in document.documentElement.style ||
	  // is firebug? http://stackoverflow.com/a/398120/376773
	  window.console && (console.firebug || console.exception && console.table) ||
	  // is firefox >= v31?
	  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
	  navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31;
	}
	
	/**
	 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	 */
	
	exports.formatters.j = function (v) {
	  return JSON.stringify(v);
	};
	
	/**
	 * Colorize log arguments if enabled.
	 *
	 * @api public
	 */
	
	function formatArgs() {
	  var args = arguments;
	  var useColors = this.useColors;
	
	  args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);
	
	  if (!useColors) return args;
	
	  var c = 'color: ' + this.color;
	  args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));
	
	  // the final "%c" is somewhat tricky, because there could be other
	  // arguments passed either before or after the %c, so we need to
	  // figure out the correct index to insert the CSS into
	  var index = 0;
	  var lastC = 0;
	  args[0].replace(/%[a-z%]/g, function (match) {
	    if ('%%' === match) return;
	    index++;
	    if ('%c' === match) {
	      // we only are interested in the *last* %c
	      // (the user may have provided their own)
	      lastC = index;
	    }
	  });
	
	  args.splice(lastC, 0, c);
	  return args;
	}
	
	/**
	 * Invokes `console.log()` when available.
	 * No-op when `console.log` is not a "function".
	 *
	 * @api public
	 */
	
	function log() {
	  // this hackery is required for IE8/9, where
	  // the `console.log` function doesn't have 'apply'
	  return 'object' === (typeof console === 'undefined' ? 'undefined' : _typeof(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments);
	}
	
	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */
	
	function save(namespaces) {
	  try {
	    if (null == namespaces) {
	      exports.storage.removeItem('debug');
	    } else {
	      exports.storage.debug = namespaces;
	    }
	  } catch (e) {}
	}
	
	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */
	
	function load() {
	  var r;
	  try {
	    r = exports.storage.debug;
	  } catch (e) {}
	  return r;
	}
	
	/**
	 * Enable namespaces listed in `localStorage.debug` initially.
	 */
	
	exports.enable(load());
	
	/**
	 * Localstorage attempts to return the localstorage.
	 *
	 * This is necessary because safari throws
	 * when a user disables cookies/localstorage
	 * and you attempt to access it.
	 *
	 * @return {LocalStorage}
	 * @api private
	 */
	
	function localstorage() {
	  try {
	    return window.localStorage;
	  } catch (e) {}
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */
	
	exports = module.exports = debug;
	exports.coerce = coerce;
	exports.disable = disable;
	exports.enable = enable;
	exports.enabled = enabled;
	exports.humanize = __webpack_require__(20);
	
	/**
	 * The currently active debug mode names, and names to skip.
	 */
	
	exports.names = [];
	exports.skips = [];
	
	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lowercased letter, i.e. "n".
	 */
	
	exports.formatters = {};
	
	/**
	 * Previously assigned color.
	 */
	
	var prevColor = 0;
	
	/**
	 * Previous log timestamp.
	 */
	
	var prevTime;
	
	/**
	 * Select a color.
	 *
	 * @return {Number}
	 * @api private
	 */
	
	function selectColor() {
	  return exports.colors[prevColor++ % exports.colors.length];
	}
	
	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */
	
	function debug(namespace) {
	
	  // define the `disabled` version
	  function disabled() {}
	  disabled.enabled = false;
	
	  // define the `enabled` version
	  function enabled() {
	
	    var self = enabled;
	
	    // set `diff` timestamp
	    var curr = +new Date();
	    var ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;
	
	    // add the `color` if not set
	    if (null == self.useColors) self.useColors = exports.useColors();
	    if (null == self.color && self.useColors) self.color = selectColor();
	
	    var args = Array.prototype.slice.call(arguments);
	
	    args[0] = exports.coerce(args[0]);
	
	    if ('string' !== typeof args[0]) {
	      // anything else let's inspect with %o
	      args = ['%o'].concat(args);
	    }
	
	    // apply any `formatters` transformations
	    var index = 0;
	    args[0] = args[0].replace(/%([a-z%])/g, function (match, format) {
	      // if we encounter an escaped % then don't increase the array index
	      if (match === '%%') return match;
	      index++;
	      var formatter = exports.formatters[format];
	      if ('function' === typeof formatter) {
	        var val = args[index];
	        match = formatter.call(self, val);
	
	        // now we need to remove `args[index]` since it's inlined in the `format`
	        args.splice(index, 1);
	        index--;
	      }
	      return match;
	    });
	
	    if ('function' === typeof exports.formatArgs) {
	      args = exports.formatArgs.apply(self, args);
	    }
	    var logFn = enabled.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }
	  enabled.enabled = true;
	
	  var fn = exports.enabled(namespace) ? enabled : disabled;
	
	  fn.namespace = namespace;
	
	  return fn;
	}
	
	/**
	 * Enables a debug mode by namespaces. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} namespaces
	 * @api public
	 */
	
	function enable(namespaces) {
	  exports.save(namespaces);
	
	  var split = (namespaces || '').split(/[\s,]+/);
	  var len = split.length;
	
	  for (var i = 0; i < len; i++) {
	    if (!split[i]) continue; // ignore empty strings
	    namespaces = split[i].replace(/\*/g, '.*?');
	    if (namespaces[0] === '-') {
	      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	    } else {
	      exports.names.push(new RegExp('^' + namespaces + '$'));
	    }
	  }
	}
	
	/**
	 * Disable debug output.
	 *
	 * @api public
	 */
	
	function disable() {
	  exports.enable('');
	}
	
	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */
	
	function enabled(name) {
	  var i, len;
	  for (i = 0, len = exports.skips.length; i < len; i++) {
	    if (exports.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (i = 0, len = exports.names.length; i < len; i++) {
	    if (exports.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	/**
	 * Coerce `val`.
	 *
	 * @param {Mixed} val
	 * @return {Mixed}
	 * @api private
	 */
	
	function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
	}

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Helpers.
	 */
	
	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var y = d * 365.25;
	
	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} options
	 * @return {String|Number}
	 * @api public
	 */
	
	module.exports = function (val, options) {
	  options = options || {};
	  if ('string' == typeof val) return parse(val);
	  return options.long ? long(val) : short(val);
	};
	
	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */
	
	function parse(str) {
	  str = '' + str;
	  if (str.length > 10000) return;
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
	  if (!match) return;
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	  }
	}
	
	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */
	
	function short(ms) {
	  if (ms >= d) return Math.round(ms / d) + 'd';
	  if (ms >= h) return Math.round(ms / h) + 'h';
	  if (ms >= m) return Math.round(ms / m) + 'm';
	  if (ms >= s) return Math.round(ms / s) + 's';
	  return ms + 'ms';
	}
	
	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */
	
	function long(ms) {
	  return plural(ms, d, 'day') || plural(ms, h, 'hour') || plural(ms, m, 'minute') || plural(ms, s, 'second') || ms + ' ms';
	}
	
	/**
	 * Pluralization helper.
	 */
	
	function plural(ms, n, name) {
	  if (ms < n) return;
	  if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
	  return Math.ceil(ms / n) + ' ' + name + 's';
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/*! JSON v3.3.2 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */
	;(function () {
	  // Detect the `define` function exposed by asynchronous module loaders. The
	  // strict `define` check is necessary for compatibility with `r.js`.
	  var isLoader = "function" === "function" && __webpack_require__(23);
	
	  // A set of types used to distinguish objects from primitives.
	  var objectTypes = {
	    "function": true,
	    "object": true
	  };
	
	  // Detect the `exports` object exposed by CommonJS implementations.
	  var freeExports = objectTypes[ false ? "undefined" : _typeof(exports)] && exports && !exports.nodeType && exports;
	
	  // Use the `global` object exposed by Node (including Browserify via
	  // `insert-module-globals`), Narwhal, and Ringo as the default context,
	  // and the `window` object in browsers. Rhino exports a `global` function
	  // instead.
	  var root = objectTypes[typeof window === "undefined" ? "undefined" : _typeof(window)] && window || this,
	      freeGlobal = freeExports && objectTypes[ false ? "undefined" : _typeof(module)] && module && !module.nodeType && (typeof global === "undefined" ? "undefined" : _typeof(global)) == "object" && global;
	
	  if (freeGlobal && (freeGlobal["global"] === freeGlobal || freeGlobal["window"] === freeGlobal || freeGlobal["self"] === freeGlobal)) {
	    root = freeGlobal;
	  }
	
	  // Public: Initializes JSON 3 using the given `context` object, attaching the
	  // `stringify` and `parse` functions to the specified `exports` object.
	  function runInContext(context, exports) {
	    context || (context = root["Object"]());
	    exports || (exports = root["Object"]());
	
	    // Native constructor aliases.
	    var Number = context["Number"] || root["Number"],
	        String = context["String"] || root["String"],
	        Object = context["Object"] || root["Object"],
	        Date = context["Date"] || root["Date"],
	        SyntaxError = context["SyntaxError"] || root["SyntaxError"],
	        TypeError = context["TypeError"] || root["TypeError"],
	        Math = context["Math"] || root["Math"],
	        nativeJSON = context["JSON"] || root["JSON"];
	
	    // Delegate to the native `stringify` and `parse` implementations.
	    if ((typeof nativeJSON === "undefined" ? "undefined" : _typeof(nativeJSON)) == "object" && nativeJSON) {
	      exports.stringify = nativeJSON.stringify;
	      exports.parse = nativeJSON.parse;
	    }
	
	    // Convenience aliases.
	    var objectProto = Object.prototype,
	        getClass = objectProto.toString,
	        _isProperty,
	        _forEach,
	        undef;
	
	    // Test the `Date#getUTC*` methods. Based on work by @Yaffle.
	    var isExtended = new Date(-3509827334573292);
	    try {
	      // The `getUTCFullYear`, `Month`, and `Date` methods return nonsensical
	      // results for certain dates in Opera >= 10.53.
	      isExtended = isExtended.getUTCFullYear() == -109252 && isExtended.getUTCMonth() === 0 && isExtended.getUTCDate() === 1 &&
	      // Safari < 2.0.2 stores the internal millisecond time value correctly,
	      // but clips the values returned by the date methods to the range of
	      // signed 32-bit integers ([-2 ** 31, 2 ** 31 - 1]).
	      isExtended.getUTCHours() == 10 && isExtended.getUTCMinutes() == 37 && isExtended.getUTCSeconds() == 6 && isExtended.getUTCMilliseconds() == 708;
	    } catch (exception) {}
	
	    // Internal: Determines whether the native `JSON.stringify` and `parse`
	    // implementations are spec-compliant. Based on work by Ken Snyder.
	    function has(name) {
	      if (has[name] !== undef) {
	        // Return cached feature test result.
	        return has[name];
	      }
	      var isSupported;
	      if (name == "bug-string-char-index") {
	        // IE <= 7 doesn't support accessing string characters using square
	        // bracket notation. IE 8 only supports this for primitives.
	        isSupported = "a"[0] != "a";
	      } else if (name == "json") {
	        // Indicates whether both `JSON.stringify` and `JSON.parse` are
	        // supported.
	        isSupported = has("json-stringify") && has("json-parse");
	      } else {
	        var value,
	            serialized = "{\"a\":[1,true,false,null,\"\\u0000\\b\\n\\f\\r\\t\"]}";
	        // Test `JSON.stringify`.
	        if (name == "json-stringify") {
	          var stringify = exports.stringify,
	              stringifySupported = typeof stringify == "function" && isExtended;
	          if (stringifySupported) {
	            // A test function object with a custom `toJSON` method.
	            (value = function value() {
	              return 1;
	            }).toJSON = value;
	            try {
	              stringifySupported =
	              // Firefox 3.1b1 and b2 serialize string, number, and boolean
	              // primitives as object literals.
	              stringify(0) === "0" &&
	              // FF 3.1b1, b2, and JSON 2 serialize wrapped primitives as object
	              // literals.
	              stringify(new Number()) === "0" && stringify(new String()) == '""' &&
	              // FF 3.1b1, 2 throw an error if the value is `null`, `undefined`, or
	              // does not define a canonical JSON representation (this applies to
	              // objects with `toJSON` properties as well, *unless* they are nested
	              // within an object or array).
	              stringify(getClass) === undef &&
	              // IE 8 serializes `undefined` as `"undefined"`. Safari <= 5.1.7 and
	              // FF 3.1b3 pass this test.
	              stringify(undef) === undef &&
	              // Safari <= 5.1.7 and FF 3.1b3 throw `Error`s and `TypeError`s,
	              // respectively, if the value is omitted entirely.
	              stringify() === undef &&
	              // FF 3.1b1, 2 throw an error if the given value is not a number,
	              // string, array, object, Boolean, or `null` literal. This applies to
	              // objects with custom `toJSON` methods as well, unless they are nested
	              // inside object or array literals. YUI 3.0.0b1 ignores custom `toJSON`
	              // methods entirely.
	              stringify(value) === "1" && stringify([value]) == "[1]" &&
	              // Prototype <= 1.6.1 serializes `[undefined]` as `"[]"` instead of
	              // `"[null]"`.
	              stringify([undef]) == "[null]" &&
	              // YUI 3.0.0b1 fails to serialize `null` literals.
	              stringify(null) == "null" &&
	              // FF 3.1b1, 2 halts serialization if an array contains a function:
	              // `[1, true, getClass, 1]` serializes as "[1,true,],". FF 3.1b3
	              // elides non-JSON values from objects and arrays, unless they
	              // define custom `toJSON` methods.
	              stringify([undef, getClass, null]) == "[null,null,null]" &&
	              // Simple serialization test. FF 3.1b1 uses Unicode escape sequences
	              // where character escape codes are expected (e.g., `\b` => `\u0008`).
	              stringify({ "a": [value, true, false, null, "\x00\b\n\f\r\t"] }) == serialized &&
	              // FF 3.1b1 and b2 ignore the `filter` and `width` arguments.
	              stringify(null, value) === "1" && stringify([1, 2], null, 1) == "[\n 1,\n 2\n]" &&
	              // JSON 2, Prototype <= 1.7, and older WebKit builds incorrectly
	              // serialize extended years.
	              stringify(new Date(-8.64e15)) == '"-271821-04-20T00:00:00.000Z"' &&
	              // The milliseconds are optional in ES 5, but required in 5.1.
	              stringify(new Date(8.64e15)) == '"+275760-09-13T00:00:00.000Z"' &&
	              // Firefox <= 11.0 incorrectly serializes years prior to 0 as negative
	              // four-digit years instead of six-digit years. Credits: @Yaffle.
	              stringify(new Date(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' &&
	              // Safari <= 5.1.5 and Opera >= 10.53 incorrectly serialize millisecond
	              // values less than 1000. Credits: @Yaffle.
	              stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"';
	            } catch (exception) {
	              stringifySupported = false;
	            }
	          }
	          isSupported = stringifySupported;
	        }
	        // Test `JSON.parse`.
	        if (name == "json-parse") {
	          var parse = exports.parse;
	          if (typeof parse == "function") {
	            try {
	              // FF 3.1b1, b2 will throw an exception if a bare literal is provided.
	              // Conforming implementations should also coerce the initial argument to
	              // a string prior to parsing.
	              if (parse("0") === 0 && !parse(false)) {
	                // Simple parsing test.
	                value = parse(serialized);
	                var parseSupported = value["a"].length == 5 && value["a"][0] === 1;
	                if (parseSupported) {
	                  try {
	                    // Safari <= 5.1.2 and FF 3.1b1 allow unescaped tabs in strings.
	                    parseSupported = !parse('"\t"');
	                  } catch (exception) {}
	                  if (parseSupported) {
	                    try {
	                      // FF 4.0 and 4.0.1 allow leading `+` signs and leading
	                      // decimal points. FF 4.0, 4.0.1, and IE 9-10 also allow
	                      // certain octal literals.
	                      parseSupported = parse("01") !== 1;
	                    } catch (exception) {}
	                  }
	                  if (parseSupported) {
	                    try {
	                      // FF 4.0, 4.0.1, and Rhino 1.7R3-R4 allow trailing decimal
	                      // points. These environments, along with FF 3.1b1 and 2,
	                      // also allow trailing commas in JSON objects and arrays.
	                      parseSupported = parse("1.") !== 1;
	                    } catch (exception) {}
	                  }
	                }
	              }
	            } catch (exception) {
	              parseSupported = false;
	            }
	          }
	          isSupported = parseSupported;
	        }
	      }
	      return has[name] = !!isSupported;
	    }
	
	    if (!has("json")) {
	      // Common `[[Class]]` name aliases.
	      var functionClass = "[object Function]",
	          dateClass = "[object Date]",
	          numberClass = "[object Number]",
	          stringClass = "[object String]",
	          arrayClass = "[object Array]",
	          booleanClass = "[object Boolean]";
	
	      // Detect incomplete support for accessing string characters by index.
	      var charIndexBuggy = has("bug-string-char-index");
	
	      // Define additional utility methods if the `Date` methods are buggy.
	      if (!isExtended) {
	        var floor = Math.floor;
	        // A mapping between the months of the year and the number of days between
	        // January 1st and the first of the respective month.
	        var Months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
	        // Internal: Calculates the number of days between the Unix epoch and the
	        // first day of the given month.
	        var getDay = function getDay(year, month) {
	          return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400);
	        };
	      }
	
	      // Internal: Determines if a property is a direct property of the given
	      // object. Delegates to the native `Object#hasOwnProperty` method.
	      if (!(_isProperty = objectProto.hasOwnProperty)) {
	        _isProperty = function isProperty(property) {
	          var members = {},
	              constructor;
	          if ((members.__proto__ = null, members.__proto__ = {
	            // The *proto* property cannot be set multiple times in recent
	            // versions of Firefox and SeaMonkey.
	            "toString": 1
	          }, members).toString != getClass) {
	            // Safari <= 2.0.3 doesn't implement `Object#hasOwnProperty`, but
	            // supports the mutable *proto* property.
	            _isProperty = function isProperty(property) {
	              // Capture and break the object's prototype chain (see section 8.6.2
	              // of the ES 5.1 spec). The parenthesized expression prevents an
	              // unsafe transformation by the Closure Compiler.
	              var original = this.__proto__,
	                  result = property in (this.__proto__ = null, this);
	              // Restore the original prototype chain.
	              this.__proto__ = original;
	              return result;
	            };
	          } else {
	            // Capture a reference to the top-level `Object` constructor.
	            constructor = members.constructor;
	            // Use the `constructor` property to simulate `Object#hasOwnProperty` in
	            // other environments.
	            _isProperty = function isProperty(property) {
	              var parent = (this.constructor || constructor).prototype;
	              return property in this && !(property in parent && this[property] === parent[property]);
	            };
	          }
	          members = null;
	          return _isProperty.call(this, property);
	        };
	      }
	
	      // Internal: Normalizes the `for...in` iteration algorithm across
	      // environments. Each enumerated key is yielded to a `callback` function.
	      _forEach = function forEach(object, callback) {
	        var size = 0,
	            Properties,
	            members,
	            property;
	
	        // Tests for bugs in the current environment's `for...in` algorithm. The
	        // `valueOf` property inherits the non-enumerable flag from
	        // `Object.prototype` in older versions of IE, Netscape, and Mozilla.
	        (Properties = function Properties() {
	          this.valueOf = 0;
	        }).prototype.valueOf = 0;
	
	        // Iterate over a new instance of the `Properties` class.
	        members = new Properties();
	        for (property in members) {
	          // Ignore all properties inherited from `Object.prototype`.
	          if (_isProperty.call(members, property)) {
	            size++;
	          }
	        }
	        Properties = members = null;
	
	        // Normalize the iteration algorithm.
	        if (!size) {
	          // A list of non-enumerable properties inherited from `Object.prototype`.
	          members = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
	          // IE <= 8, Mozilla 1.0, and Netscape 6.2 ignore shadowed non-enumerable
	          // properties.
	          _forEach = function forEach(object, callback) {
	            var isFunction = getClass.call(object) == functionClass,
	                property,
	                length;
	            var hasProperty = !isFunction && typeof object.constructor != "function" && objectTypes[_typeof(object.hasOwnProperty)] && object.hasOwnProperty || _isProperty;
	            for (property in object) {
	              // Gecko <= 1.0 enumerates the `prototype` property of functions under
	              // certain conditions; IE does not.
	              if (!(isFunction && property == "prototype") && hasProperty.call(object, property)) {
	                callback(property);
	              }
	            }
	            // Manually invoke the callback for each non-enumerable property.
	            for (length = members.length; property = members[--length]; hasProperty.call(object, property) && callback(property)) {}
	          };
	        } else if (size == 2) {
	          // Safari <= 2.0.4 enumerates shadowed properties twice.
	          _forEach = function forEach(object, callback) {
	            // Create a set of iterated properties.
	            var members = {},
	                isFunction = getClass.call(object) == functionClass,
	                property;
	            for (property in object) {
	              // Store each property name to prevent double enumeration. The
	              // `prototype` property of functions is not enumerated due to cross-
	              // environment inconsistencies.
	              if (!(isFunction && property == "prototype") && !_isProperty.call(members, property) && (members[property] = 1) && _isProperty.call(object, property)) {
	                callback(property);
	              }
	            }
	          };
	        } else {
	          // No bugs detected; use the standard `for...in` algorithm.
	          _forEach = function forEach(object, callback) {
	            var isFunction = getClass.call(object) == functionClass,
	                property,
	                isConstructor;
	            for (property in object) {
	              if (!(isFunction && property == "prototype") && _isProperty.call(object, property) && !(isConstructor = property === "constructor")) {
	                callback(property);
	              }
	            }
	            // Manually invoke the callback for the `constructor` property due to
	            // cross-environment inconsistencies.
	            if (isConstructor || _isProperty.call(object, property = "constructor")) {
	              callback(property);
	            }
	          };
	        }
	        return _forEach(object, callback);
	      };
	
	      // Public: Serializes a JavaScript `value` as a JSON string. The optional
	      // `filter` argument may specify either a function that alters how object and
	      // array members are serialized, or an array of strings and numbers that
	      // indicates which properties should be serialized. The optional `width`
	      // argument may be either a string or number that specifies the indentation
	      // level of the output.
	      if (!has("json-stringify")) {
	        // Internal: A map of control characters and their escaped equivalents.
	        var Escapes = {
	          92: "\\\\",
	          34: '\\"',
	          8: "\\b",
	          12: "\\f",
	          10: "\\n",
	          13: "\\r",
	          9: "\\t"
	        };
	
	        // Internal: Converts `value` into a zero-padded string such that its
	        // length is at least equal to `width`. The `width` must be <= 6.
	        var leadingZeroes = "000000";
	        var toPaddedString = function toPaddedString(width, value) {
	          // The `|| 0` expression is necessary to work around a bug in
	          // Opera <= 7.54u2 where `0 == -0`, but `String(-0) !== "0"`.
	          return (leadingZeroes + (value || 0)).slice(-width);
	        };
	
	        // Internal: Double-quotes a string `value`, replacing all ASCII control
	        // characters (characters with code unit values between 0 and 31) with
	        // their escaped equivalents. This is an implementation of the
	        // `Quote(value)` operation defined in ES 5.1 section 15.12.3.
	        var unicodePrefix = "\\u00";
	        var quote = function quote(value) {
	          var result = '"',
	              index = 0,
	              length = value.length,
	              useCharIndex = !charIndexBuggy || length > 10;
	          var symbols = useCharIndex && (charIndexBuggy ? value.split("") : value);
	          for (; index < length; index++) {
	            var charCode = value.charCodeAt(index);
	            // If the character is a control character, append its Unicode or
	            // shorthand escape sequence; otherwise, append the character as-is.
	            switch (charCode) {
	              case 8:case 9:case 10:case 12:case 13:case 34:case 92:
	                result += Escapes[charCode];
	                break;
	              default:
	                if (charCode < 32) {
	                  result += unicodePrefix + toPaddedString(2, charCode.toString(16));
	                  break;
	                }
	                result += useCharIndex ? symbols[index] : value.charAt(index);
	            }
	          }
	          return result + '"';
	        };
	
	        // Internal: Recursively serializes an object. Implements the
	        // `Str(key, holder)`, `JO(value)`, and `JA(value)` operations.
	        var serialize = function serialize(property, object, callback, properties, whitespace, indentation, stack) {
	          var value, className, year, month, date, time, hours, minutes, seconds, milliseconds, results, element, index, length, prefix, result;
	          try {
	            // Necessary for host object support.
	            value = object[property];
	          } catch (exception) {}
	          if ((typeof value === "undefined" ? "undefined" : _typeof(value)) == "object" && value) {
	            className = getClass.call(value);
	            if (className == dateClass && !_isProperty.call(value, "toJSON")) {
	              if (value > -1 / 0 && value < 1 / 0) {
	                // Dates are serialized according to the `Date#toJSON` method
	                // specified in ES 5.1 section 15.9.5.44. See section 15.9.1.15
	                // for the ISO 8601 date time string format.
	                if (getDay) {
	                  // Manually compute the year, month, date, hours, minutes,
	                  // seconds, and milliseconds if the `getUTC*` methods are
	                  // buggy. Adapted from @Yaffle's `date-shim` project.
	                  date = floor(value / 864e5);
	                  for (year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++) {}
	                  for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++) {}
	                  date = 1 + date - getDay(year, month);
	                  // The `time` value specifies the time within the day (see ES
	                  // 5.1 section 15.9.1.2). The formula `(A % B + B) % B` is used
	                  // to compute `A modulo B`, as the `%` operator does not
	                  // correspond to the `modulo` operation for negative numbers.
	                  time = (value % 864e5 + 864e5) % 864e5;
	                  // The hours, minutes, seconds, and milliseconds are obtained by
	                  // decomposing the time within the day. See section 15.9.1.10.
	                  hours = floor(time / 36e5) % 24;
	                  minutes = floor(time / 6e4) % 60;
	                  seconds = floor(time / 1e3) % 60;
	                  milliseconds = time % 1e3;
	                } else {
	                  year = value.getUTCFullYear();
	                  month = value.getUTCMonth();
	                  date = value.getUTCDate();
	                  hours = value.getUTCHours();
	                  minutes = value.getUTCMinutes();
	                  seconds = value.getUTCSeconds();
	                  milliseconds = value.getUTCMilliseconds();
	                }
	                // Serialize extended years correctly.
	                value = (year <= 0 || year >= 1e4 ? (year < 0 ? "-" : "+") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) + "-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) +
	                // Months, dates, hours, minutes, and seconds should have two
	                // digits; milliseconds should have three.
	                "T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) +
	                // Milliseconds are optional in ES 5.0, but required in 5.1.
	                "." + toPaddedString(3, milliseconds) + "Z";
	              } else {
	                value = null;
	              }
	            } else if (typeof value.toJSON == "function" && (className != numberClass && className != stringClass && className != arrayClass || _isProperty.call(value, "toJSON"))) {
	              // Prototype <= 1.6.1 adds non-standard `toJSON` methods to the
	              // `Number`, `String`, `Date`, and `Array` prototypes. JSON 3
	              // ignores all `toJSON` methods on these objects unless they are
	              // defined directly on an instance.
	              value = value.toJSON(property);
	            }
	          }
	          if (callback) {
	            // If a replacement function was provided, call it to obtain the value
	            // for serialization.
	            value = callback.call(object, property, value);
	          }
	          if (value === null) {
	            return "null";
	          }
	          className = getClass.call(value);
	          if (className == booleanClass) {
	            // Booleans are represented literally.
	            return "" + value;
	          } else if (className == numberClass) {
	            // JSON numbers must be finite. `Infinity` and `NaN` are serialized as
	            // `"null"`.
	            return value > -1 / 0 && value < 1 / 0 ? "" + value : "null";
	          } else if (className == stringClass) {
	            // Strings are double-quoted and escaped.
	            return quote("" + value);
	          }
	          // Recursively serialize objects and arrays.
	          if ((typeof value === "undefined" ? "undefined" : _typeof(value)) == "object") {
	            // Check for cyclic structures. This is a linear search; performance
	            // is inversely proportional to the number of unique nested objects.
	            for (length = stack.length; length--;) {
	              if (stack[length] === value) {
	                // Cyclic structures cannot be serialized by `JSON.stringify`.
	                throw TypeError();
	              }
	            }
	            // Add the object to the stack of traversed objects.
	            stack.push(value);
	            results = [];
	            // Save the current indentation level and indent one additional level.
	            prefix = indentation;
	            indentation += whitespace;
	            if (className == arrayClass) {
	              // Recursively serialize array elements.
	              for (index = 0, length = value.length; index < length; index++) {
	                element = serialize(index, value, callback, properties, whitespace, indentation, stack);
	                results.push(element === undef ? "null" : element);
	              }
	              result = results.length ? whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "]" : "[" + results.join(",") + "]" : "[]";
	            } else {
	              // Recursively serialize object members. Members are selected from
	              // either a user-specified list of property names, or the object
	              // itself.
	              _forEach(properties || value, function (property) {
	                var element = serialize(property, value, callback, properties, whitespace, indentation, stack);
	                if (element !== undef) {
	                  // According to ES 5.1 section 15.12.3: "If `gap` {whitespace}
	                  // is not the empty string, let `member` {quote(property) + ":"}
	                  // be the concatenation of `member` and the `space` character."
	                  // The "`space` character" refers to the literal space
	                  // character, not the `space` {width} argument provided to
	                  // `JSON.stringify`.
	                  results.push(quote(property) + ":" + (whitespace ? " " : "") + element);
	                }
	              });
	              result = results.length ? whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "}" : "{" + results.join(",") + "}" : "{}";
	            }
	            // Remove the object from the traversed object stack.
	            stack.pop();
	            return result;
	          }
	        };
	
	        // Public: `JSON.stringify`. See ES 5.1 section 15.12.3.
	        exports.stringify = function (source, filter, width) {
	          var whitespace, callback, properties, className;
	          if (objectTypes[typeof filter === "undefined" ? "undefined" : _typeof(filter)] && filter) {
	            if ((className = getClass.call(filter)) == functionClass) {
	              callback = filter;
	            } else if (className == arrayClass) {
	              // Convert the property names array into a makeshift set.
	              properties = {};
	              for (var index = 0, length = filter.length, value; index < length; value = filter[index++], (className = getClass.call(value), className == stringClass || className == numberClass) && (properties[value] = 1)) {}
	            }
	          }
	          if (width) {
	            if ((className = getClass.call(width)) == numberClass) {
	              // Convert the `width` to an integer and create a string containing
	              // `width` number of space characters.
	              if ((width -= width % 1) > 0) {
	                for (whitespace = "", width > 10 && (width = 10); whitespace.length < width; whitespace += " ") {}
	              }
	            } else if (className == stringClass) {
	              whitespace = width.length <= 10 ? width : width.slice(0, 10);
	            }
	          }
	          // Opera <= 7.54u2 discards the values associated with empty string keys
	          // (`""`) only if they are used directly within an object member list
	          // (e.g., `!("" in { "": 1})`).
	          return serialize("", (value = {}, value[""] = source, value), callback, properties, whitespace, "", []);
	        };
	      }
	
	      // Public: Parses a JSON source string.
	      if (!has("json-parse")) {
	        var fromCharCode = String.fromCharCode;
	
	        // Internal: A map of escaped control characters and their unescaped
	        // equivalents.
	        var Unescapes = {
	          92: "\\",
	          34: '"',
	          47: "/",
	          98: "\b",
	          116: "\t",
	          110: "\n",
	          102: "\f",
	          114: "\r"
	        };
	
	        // Internal: Stores the parser state.
	        var Index, Source;
	
	        // Internal: Resets the parser state and throws a `SyntaxError`.
	        var abort = function abort() {
	          Index = Source = null;
	          throw SyntaxError();
	        };
	
	        // Internal: Returns the next token, or `"$"` if the parser has reached
	        // the end of the source string. A token may be a string, number, `null`
	        // literal, or Boolean literal.
	        var lex = function lex() {
	          var source = Source,
	              length = source.length,
	              value,
	              begin,
	              position,
	              isSigned,
	              charCode;
	          while (Index < length) {
	            charCode = source.charCodeAt(Index);
	            switch (charCode) {
	              case 9:case 10:case 13:case 32:
	                // Skip whitespace tokens, including tabs, carriage returns, line
	                // feeds, and space characters.
	                Index++;
	                break;
	              case 123:case 125:case 91:case 93:case 58:case 44:
	                // Parse a punctuator token (`{`, `}`, `[`, `]`, `:`, or `,`) at
	                // the current position.
	                value = charIndexBuggy ? source.charAt(Index) : source[Index];
	                Index++;
	                return value;
	              case 34:
	                // `"` delimits a JSON string; advance to the next character and
	                // begin parsing the string. String tokens are prefixed with the
	                // sentinel `@` character to distinguish them from punctuators and
	                // end-of-string tokens.
	                for (value = "@", Index++; Index < length;) {
	                  charCode = source.charCodeAt(Index);
	                  if (charCode < 32) {
	                    // Unescaped ASCII control characters (those with a code unit
	                    // less than the space character) are not permitted.
	                    abort();
	                  } else if (charCode == 92) {
	                    // A reverse solidus (`\`) marks the beginning of an escaped
	                    // control character (including `"`, `\`, and `/`) or Unicode
	                    // escape sequence.
	                    charCode = source.charCodeAt(++Index);
	                    switch (charCode) {
	                      case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:
	                        // Revive escaped control characters.
	                        value += Unescapes[charCode];
	                        Index++;
	                        break;
	                      case 117:
	                        // `\u` marks the beginning of a Unicode escape sequence.
	                        // Advance to the first character and validate the
	                        // four-digit code point.
	                        begin = ++Index;
	                        for (position = Index + 4; Index < position; Index++) {
	                          charCode = source.charCodeAt(Index);
	                          // A valid sequence comprises four hexdigits (case-
	                          // insensitive) that form a single hexadecimal value.
	                          if (!(charCode >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 102 || charCode >= 65 && charCode <= 70)) {
	                            // Invalid Unicode escape sequence.
	                            abort();
	                          }
	                        }
	                        // Revive the escaped character.
	                        value += fromCharCode("0x" + source.slice(begin, Index));
	                        break;
	                      default:
	                        // Invalid escape sequence.
	                        abort();
	                    }
	                  } else {
	                    if (charCode == 34) {
	                      // An unescaped double-quote character marks the end of the
	                      // string.
	                      break;
	                    }
	                    charCode = source.charCodeAt(Index);
	                    begin = Index;
	                    // Optimize for the common case where a string is valid.
	                    while (charCode >= 32 && charCode != 92 && charCode != 34) {
	                      charCode = source.charCodeAt(++Index);
	                    }
	                    // Append the string as-is.
	                    value += source.slice(begin, Index);
	                  }
	                }
	                if (source.charCodeAt(Index) == 34) {
	                  // Advance to the next character and return the revived string.
	                  Index++;
	                  return value;
	                }
	                // Unterminated string.
	                abort();
	              default:
	                // Parse numbers and literals.
	                begin = Index;
	                // Advance past the negative sign, if one is specified.
	                if (charCode == 45) {
	                  isSigned = true;
	                  charCode = source.charCodeAt(++Index);
	                }
	                // Parse an integer or floating-point value.
	                if (charCode >= 48 && charCode <= 57) {
	                  // Leading zeroes are interpreted as octal literals.
	                  if (charCode == 48 && (charCode = source.charCodeAt(Index + 1), charCode >= 48 && charCode <= 57)) {
	                    // Illegal octal literal.
	                    abort();
	                  }
	                  isSigned = false;
	                  // Parse the integer component.
	                  for (; Index < length && (charCode = source.charCodeAt(Index), charCode >= 48 && charCode <= 57); Index++) {}
	                  // Floats cannot contain a leading decimal point; however, this
	                  // case is already accounted for by the parser.
	                  if (source.charCodeAt(Index) == 46) {
	                    position = ++Index;
	                    // Parse the decimal component.
	                    for (; position < length && (charCode = source.charCodeAt(position), charCode >= 48 && charCode <= 57); position++) {}
	                    if (position == Index) {
	                      // Illegal trailing decimal.
	                      abort();
	                    }
	                    Index = position;
	                  }
	                  // Parse exponents. The `e` denoting the exponent is
	                  // case-insensitive.
	                  charCode = source.charCodeAt(Index);
	                  if (charCode == 101 || charCode == 69) {
	                    charCode = source.charCodeAt(++Index);
	                    // Skip past the sign following the exponent, if one is
	                    // specified.
	                    if (charCode == 43 || charCode == 45) {
	                      Index++;
	                    }
	                    // Parse the exponential component.
	                    for (position = Index; position < length && (charCode = source.charCodeAt(position), charCode >= 48 && charCode <= 57); position++) {}
	                    if (position == Index) {
	                      // Illegal empty exponent.
	                      abort();
	                    }
	                    Index = position;
	                  }
	                  // Coerce the parsed value to a JavaScript number.
	                  return +source.slice(begin, Index);
	                }
	                // A negative sign may only precede numbers.
	                if (isSigned) {
	                  abort();
	                }
	                // `true`, `false`, and `null` literals.
	                if (source.slice(Index, Index + 4) == "true") {
	                  Index += 4;
	                  return true;
	                } else if (source.slice(Index, Index + 5) == "false") {
	                  Index += 5;
	                  return false;
	                } else if (source.slice(Index, Index + 4) == "null") {
	                  Index += 4;
	                  return null;
	                }
	                // Unrecognized token.
	                abort();
	            }
	          }
	          // Return the sentinel `$` character if the parser has reached the end
	          // of the source string.
	          return "$";
	        };
	
	        // Internal: Parses a JSON `value` token.
	        var get = function get(value) {
	          var results, hasMembers;
	          if (value == "$") {
	            // Unexpected end of input.
	            abort();
	          }
	          if (typeof value == "string") {
	            if ((charIndexBuggy ? value.charAt(0) : value[0]) == "@") {
	              // Remove the sentinel `@` character.
	              return value.slice(1);
	            }
	            // Parse object and array literals.
	            if (value == "[") {
	              // Parses a JSON array, returning a new JavaScript array.
	              results = [];
	              for (;; hasMembers || (hasMembers = true)) {
	                value = lex();
	                // A closing square bracket marks the end of the array literal.
	                if (value == "]") {
	                  break;
	                }
	                // If the array literal contains elements, the current token
	                // should be a comma separating the previous element from the
	                // next.
	                if (hasMembers) {
	                  if (value == ",") {
	                    value = lex();
	                    if (value == "]") {
	                      // Unexpected trailing `,` in array literal.
	                      abort();
	                    }
	                  } else {
	                    // A `,` must separate each array element.
	                    abort();
	                  }
	                }
	                // Elisions and leading commas are not permitted.
	                if (value == ",") {
	                  abort();
	                }
	                results.push(get(value));
	              }
	              return results;
	            } else if (value == "{") {
	              // Parses a JSON object, returning a new JavaScript object.
	              results = {};
	              for (;; hasMembers || (hasMembers = true)) {
	                value = lex();
	                // A closing curly brace marks the end of the object literal.
	                if (value == "}") {
	                  break;
	                }
	                // If the object literal contains members, the current token
	                // should be a comma separator.
	                if (hasMembers) {
	                  if (value == ",") {
	                    value = lex();
	                    if (value == "}") {
	                      // Unexpected trailing `,` in object literal.
	                      abort();
	                    }
	                  } else {
	                    // A `,` must separate each object member.
	                    abort();
	                  }
	                }
	                // Leading commas are not permitted, object property names must be
	                // double-quoted strings, and a `:` must separate each property
	                // name and value.
	                if (value == "," || typeof value != "string" || (charIndexBuggy ? value.charAt(0) : value[0]) != "@" || lex() != ":") {
	                  abort();
	                }
	                results[value.slice(1)] = get(lex());
	              }
	              return results;
	            }
	            // Unexpected token encountered.
	            abort();
	          }
	          return value;
	        };
	
	        // Internal: Updates a traversed object member.
	        var update = function update(source, property, callback) {
	          var element = walk(source, property, callback);
	          if (element === undef) {
	            delete source[property];
	          } else {
	            source[property] = element;
	          }
	        };
	
	        // Internal: Recursively traverses a parsed JSON object, invoking the
	        // `callback` function for each value. This is an implementation of the
	        // `Walk(holder, name)` operation defined in ES 5.1 section 15.12.2.
	        var walk = function walk(source, property, callback) {
	          var value = source[property],
	              length;
	          if ((typeof value === "undefined" ? "undefined" : _typeof(value)) == "object" && value) {
	            // `forEach` can't be used to traverse an array in Opera <= 8.54
	            // because its `Object#hasOwnProperty` implementation returns `false`
	            // for array indices (e.g., `![1, 2, 3].hasOwnProperty("0")`).
	            if (getClass.call(value) == arrayClass) {
	              for (length = value.length; length--;) {
	                update(value, length, callback);
	              }
	            } else {
	              _forEach(value, function (property) {
	                update(value, property, callback);
	              });
	            }
	          }
	          return callback.call(source, property, value);
	        };
	
	        // Public: `JSON.parse`. See ES 5.1 section 15.12.2.
	        exports.parse = function (source, callback) {
	          var result, value;
	          Index = 0;
	          Source = "" + source;
	          result = get(lex());
	          // If a JSON string contains multiple tokens, it is invalid.
	          if (lex() != "$") {
	            abort();
	          }
	          // Reset the parser state.
	          Index = Source = null;
	          return callback && getClass.call(callback) == functionClass ? walk((value = {}, value[""] = result, value), "", callback) : result;
	        };
	      }
	    }
	
	    exports["runInContext"] = runInContext;
	    return exports;
	  }
	
	  if (freeExports && !isLoader) {
	    // Export for CommonJS environments.
	    runInContext(root, freeExports);
	  } else {
	    // Export for web browsers and JavaScript engines.
	    var nativeJSON = root.JSON,
	        previousJSON = root["JSON3"],
	        isRestored = false;
	
	    var JSON3 = runInContext(root, root["JSON3"] = {
	      // Public: Restores the original value of the global `JSON` object and
	      // returns a reference to the `JSON3` object.
	      "noConflict": function noConflict() {
	        if (!isRestored) {
	          isRestored = true;
	          root.JSON = nativeJSON;
	          root["JSON3"] = previousJSON;
	          nativeJSON = previousJSON = null;
	        }
	        return JSON3;
	      }
	    });
	
	    root.JSON = {
	      "parse": JSON3.parse,
	      "stringify": JSON3.stringify
	    };
	  }
	
	  // Export for asynchronous module loaders.
	  if (isLoader) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return JSON3;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	}).call(undefined);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)(module), (function() { return this; }())))

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;
	
	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * Expose `Emitter`.
	 */
	
	module.exports = Emitter;
	
	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */
	
	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};
	
	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */
	
	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}
	
	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
	  this._callbacks = this._callbacks || {};
	  (this._callbacks[event] = this._callbacks[event] || []).push(fn);
	  return this;
	};
	
	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.once = function (event, fn) {
	  var self = this;
	  this._callbacks = this._callbacks || {};
	
	  function on() {
	    self.off(event, on);
	    fn.apply(this, arguments);
	  }
	
	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};
	
	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
	  this._callbacks = this._callbacks || {};
	
	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }
	
	  // specific event
	  var callbacks = this._callbacks[event];
	  if (!callbacks) return this;
	
	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks[event];
	    return this;
	  }
	
	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};
	
	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */
	
	Emitter.prototype.emit = function (event) {
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1),
	      callbacks = this._callbacks[event];
	
	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }
	
	  return this;
	};
	
	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */
	
	Emitter.prototype.listeners = function (event) {
	  this._callbacks = this._callbacks || {};
	  return this._callbacks[event] || [];
	};
	
	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */
	
	Emitter.prototype.hasListeners = function (event) {
	  return !!this.listeners(event).length;
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/*global Blob,File*/
	
	/**
	 * Module requirements
	 */
	
	var isArray = __webpack_require__(26);
	var isBuf = __webpack_require__(27);
	
	/**
	 * Replaces every Buffer | ArrayBuffer in packet with a numbered placeholder.
	 * Anything with blobs or files should be fed through removeBlobs before coming
	 * here.
	 *
	 * @param {Object} packet - socket.io event packet
	 * @return {Object} with deconstructed packet and list of buffers
	 * @api public
	 */
	
	exports.deconstructPacket = function (packet) {
	  var buffers = [];
	  var packetData = packet.data;
	
	  function _deconstructPacket(data) {
	    if (!data) return data;
	
	    if (isBuf(data)) {
	      var placeholder = { _placeholder: true, num: buffers.length };
	      buffers.push(data);
	      return placeholder;
	    } else if (isArray(data)) {
	      var newData = new Array(data.length);
	      for (var i = 0; i < data.length; i++) {
	        newData[i] = _deconstructPacket(data[i]);
	      }
	      return newData;
	    } else if ('object' == (typeof data === 'undefined' ? 'undefined' : _typeof(data)) && !(data instanceof Date)) {
	      var newData = {};
	      for (var key in data) {
	        newData[key] = _deconstructPacket(data[key]);
	      }
	      return newData;
	    }
	    return data;
	  }
	
	  var pack = packet;
	  pack.data = _deconstructPacket(packetData);
	  pack.attachments = buffers.length; // number of binary 'attachments'
	  return { packet: pack, buffers: buffers };
	};
	
	/**
	 * Reconstructs a binary packet from its placeholder packet and buffers
	 *
	 * @param {Object} packet - event packet with placeholders
	 * @param {Array} buffers - binary buffers to put in placeholder positions
	 * @return {Object} reconstructed packet
	 * @api public
	 */
	
	exports.reconstructPacket = function (packet, buffers) {
	  var curPlaceHolder = 0;
	
	  function _reconstructPacket(data) {
	    if (data && data._placeholder) {
	      var buf = buffers[data.num]; // appropriate buffer (should be natural order anyway)
	      return buf;
	    } else if (isArray(data)) {
	      for (var i = 0; i < data.length; i++) {
	        data[i] = _reconstructPacket(data[i]);
	      }
	      return data;
	    } else if (data && 'object' == (typeof data === 'undefined' ? 'undefined' : _typeof(data))) {
	      for (var key in data) {
	        data[key] = _reconstructPacket(data[key]);
	      }
	      return data;
	    }
	    return data;
	  }
	
	  packet.data = _reconstructPacket(packet.data);
	  packet.attachments = undefined; // no longer useful
	  return packet;
	};
	
	/**
	 * Asynchronously removes Blobs or Files from data via
	 * FileReader's readAsArrayBuffer method. Used before encoding
	 * data as msgpack. Calls callback with the blobless data.
	 *
	 * @param {Object} data
	 * @param {Function} callback
	 * @api private
	 */
	
	exports.removeBlobs = function (data, callback) {
	  function _removeBlobs(obj, curKey, containingObject) {
	    if (!obj) return obj;
	
	    // convert any blob
	    if (global.Blob && obj instanceof Blob || global.File && obj instanceof File) {
	      pendingBlobs++;
	
	      // async filereader
	      var fileReader = new FileReader();
	      fileReader.onload = function () {
	        // this.result == arraybuffer
	        if (containingObject) {
	          containingObject[curKey] = this.result;
	        } else {
	          bloblessData = this.result;
	        }
	
	        // if nothing pending its callback time
	        if (! --pendingBlobs) {
	          callback(bloblessData);
	        }
	      };
	
	      fileReader.readAsArrayBuffer(obj); // blob -> arraybuffer
	    } else if (isArray(obj)) {
	      // handle array
	      for (var i = 0; i < obj.length; i++) {
	        _removeBlobs(obj[i], i, obj);
	      }
	    } else if (obj && 'object' == (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) && !isBuf(obj)) {
	      // and object
	      for (var key in obj) {
	        _removeBlobs(obj[key], key, obj);
	      }
	    }
	  }
	
	  var pendingBlobs = 0;
	  var bloblessData = data;
	  _removeBlobs(bloblessData);
	  if (!pendingBlobs) {
	    callback(bloblessData);
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	module.exports = isBuf;
	
	/**
	 * Returns true if obj is a buffer or an arraybuffer.
	 *
	 * @api private
	 */
	
	function isBuf(obj) {
	  return global.Buffer && global.Buffer.isBuffer(obj) || global.ArrayBuffer && obj instanceof ArrayBuffer;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/**
	 * Module dependencies.
	 */
	
	var eio = __webpack_require__(29);
	var Socket = __webpack_require__(57);
	var Emitter = __webpack_require__(58);
	var parser = __webpack_require__(17);
	var on = __webpack_require__(60);
	var bind = __webpack_require__(61);
	var debug = __webpack_require__(14)('socket.io-client:manager');
	var indexOf = __webpack_require__(55);
	var Backoff = __webpack_require__(63);
	
	/**
	 * IE6+ hasOwnProperty
	 */
	
	var has = Object.prototype.hasOwnProperty;
	
	/**
	 * Module exports
	 */
	
	module.exports = Manager;
	
	/**
	 * `Manager` constructor.
	 *
	 * @param {String} engine instance or engine uri/opts
	 * @param {Object} options
	 * @api public
	 */
	
	function Manager(uri, opts) {
	  if (!(this instanceof Manager)) return new Manager(uri, opts);
	  if (uri && 'object' === (typeof uri === 'undefined' ? 'undefined' : _typeof(uri))) {
	    opts = uri;
	    uri = undefined;
	  }
	  opts = opts || {};
	
	  opts.path = opts.path || '/socket.io';
	  this.nsps = {};
	  this.subs = [];
	  this.opts = opts;
	  this.reconnection(opts.reconnection !== false);
	  this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
	  this.reconnectionDelay(opts.reconnectionDelay || 1000);
	  this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
	  this.randomizationFactor(opts.randomizationFactor || 0.5);
	  this.backoff = new Backoff({
	    min: this.reconnectionDelay(),
	    max: this.reconnectionDelayMax(),
	    jitter: this.randomizationFactor()
	  });
	  this.timeout(null == opts.timeout ? 20000 : opts.timeout);
	  this.readyState = 'closed';
	  this.uri = uri;
	  this.connecting = [];
	  this.lastPing = null;
	  this.encoding = false;
	  this.packetBuffer = [];
	  this.encoder = new parser.Encoder();
	  this.decoder = new parser.Decoder();
	  this.autoConnect = opts.autoConnect !== false;
	  if (this.autoConnect) this.open();
	}
	
	/**
	 * Propagate given event to sockets and emit on `this`
	 *
	 * @api private
	 */
	
	Manager.prototype.emitAll = function () {
	  this.emit.apply(this, arguments);
	  for (var nsp in this.nsps) {
	    if (has.call(this.nsps, nsp)) {
	      this.nsps[nsp].emit.apply(this.nsps[nsp], arguments);
	    }
	  }
	};
	
	/**
	 * Update `socket.id` of all sockets
	 *
	 * @api private
	 */
	
	Manager.prototype.updateSocketIds = function () {
	  for (var nsp in this.nsps) {
	    if (has.call(this.nsps, nsp)) {
	      this.nsps[nsp].id = this.engine.id;
	    }
	  }
	};
	
	/**
	 * Mix in `Emitter`.
	 */
	
	Emitter(Manager.prototype);
	
	/**
	 * Sets the `reconnection` config.
	 *
	 * @param {Boolean} true/false if it should automatically reconnect
	 * @return {Manager} self or value
	 * @api public
	 */
	
	Manager.prototype.reconnection = function (v) {
	  if (!arguments.length) return this._reconnection;
	  this._reconnection = !!v;
	  return this;
	};
	
	/**
	 * Sets the reconnection attempts config.
	 *
	 * @param {Number} max reconnection attempts before giving up
	 * @return {Manager} self or value
	 * @api public
	 */
	
	Manager.prototype.reconnectionAttempts = function (v) {
	  if (!arguments.length) return this._reconnectionAttempts;
	  this._reconnectionAttempts = v;
	  return this;
	};
	
	/**
	 * Sets the delay between reconnections.
	 *
	 * @param {Number} delay
	 * @return {Manager} self or value
	 * @api public
	 */
	
	Manager.prototype.reconnectionDelay = function (v) {
	  if (!arguments.length) return this._reconnectionDelay;
	  this._reconnectionDelay = v;
	  this.backoff && this.backoff.setMin(v);
	  return this;
	};
	
	Manager.prototype.randomizationFactor = function (v) {
	  if (!arguments.length) return this._randomizationFactor;
	  this._randomizationFactor = v;
	  this.backoff && this.backoff.setJitter(v);
	  return this;
	};
	
	/**
	 * Sets the maximum delay between reconnections.
	 *
	 * @param {Number} delay
	 * @return {Manager} self or value
	 * @api public
	 */
	
	Manager.prototype.reconnectionDelayMax = function (v) {
	  if (!arguments.length) return this._reconnectionDelayMax;
	  this._reconnectionDelayMax = v;
	  this.backoff && this.backoff.setMax(v);
	  return this;
	};
	
	/**
	 * Sets the connection timeout. `false` to disable
	 *
	 * @return {Manager} self or value
	 * @api public
	 */
	
	Manager.prototype.timeout = function (v) {
	  if (!arguments.length) return this._timeout;
	  this._timeout = v;
	  return this;
	};
	
	/**
	 * Starts trying to reconnect if reconnection is enabled and we have not
	 * started reconnecting yet
	 *
	 * @api private
	 */
	
	Manager.prototype.maybeReconnectOnOpen = function () {
	  // Only try to reconnect if it's the first time we're connecting
	  if (!this.reconnecting && this._reconnection && this.backoff.attempts === 0) {
	    // keeps reconnection from firing twice for the same reconnection loop
	    this.reconnect();
	  }
	};
	
	/**
	 * Sets the current transport `socket`.
	 *
	 * @param {Function} optional, callback
	 * @return {Manager} self
	 * @api public
	 */
	
	Manager.prototype.open = Manager.prototype.connect = function (fn, opts) {
	  debug('readyState %s', this.readyState);
	  if (~this.readyState.indexOf('open')) return this;
	
	  debug('opening %s', this.uri);
	  this.engine = eio(this.uri, this.opts);
	  var socket = this.engine;
	  var self = this;
	  this.readyState = 'opening';
	  this.skipReconnect = false;
	
	  // emit `open`
	  var openSub = on(socket, 'open', function () {
	    self.onopen();
	    fn && fn();
	  });
	
	  // emit `connect_error`
	  var errorSub = on(socket, 'error', function (data) {
	    debug('connect_error');
	    self.cleanup();
	    self.readyState = 'closed';
	    self.emitAll('connect_error', data);
	    if (fn) {
	      var err = new Error('Connection error');
	      err.data = data;
	      fn(err);
	    } else {
	      // Only do this if there is no fn to handle the error
	      self.maybeReconnectOnOpen();
	    }
	  });
	
	  // emit `connect_timeout`
	  if (false !== this._timeout) {
	    var timeout = this._timeout;
	    debug('connect attempt will timeout after %d', timeout);
	
	    // set timer
	    var timer = setTimeout(function () {
	      debug('connect attempt timed out after %d', timeout);
	      openSub.destroy();
	      socket.close();
	      socket.emit('error', 'timeout');
	      self.emitAll('connect_timeout', timeout);
	    }, timeout);
	
	    this.subs.push({
	      destroy: function destroy() {
	        clearTimeout(timer);
	      }
	    });
	  }
	
	  this.subs.push(openSub);
	  this.subs.push(errorSub);
	
	  return this;
	};
	
	/**
	 * Called upon transport open.
	 *
	 * @api private
	 */
	
	Manager.prototype.onopen = function () {
	  debug('open');
	
	  // clear old subs
	  this.cleanup();
	
	  // mark as open
	  this.readyState = 'open';
	  this.emit('open');
	
	  // add new subs
	  var socket = this.engine;
	  this.subs.push(on(socket, 'data', bind(this, 'ondata')));
	  this.subs.push(on(socket, 'ping', bind(this, 'onping')));
	  this.subs.push(on(socket, 'pong', bind(this, 'onpong')));
	  this.subs.push(on(socket, 'error', bind(this, 'onerror')));
	  this.subs.push(on(socket, 'close', bind(this, 'onclose')));
	  this.subs.push(on(this.decoder, 'decoded', bind(this, 'ondecoded')));
	};
	
	/**
	 * Called upon a ping.
	 *
	 * @api private
	 */
	
	Manager.prototype.onping = function () {
	  this.lastPing = new Date();
	  this.emitAll('ping');
	};
	
	/**
	 * Called upon a packet.
	 *
	 * @api private
	 */
	
	Manager.prototype.onpong = function () {
	  this.emitAll('pong', new Date() - this.lastPing);
	};
	
	/**
	 * Called with data.
	 *
	 * @api private
	 */
	
	Manager.prototype.ondata = function (data) {
	  this.decoder.add(data);
	};
	
	/**
	 * Called when parser fully decodes a packet.
	 *
	 * @api private
	 */
	
	Manager.prototype.ondecoded = function (packet) {
	  this.emit('packet', packet);
	};
	
	/**
	 * Called upon socket error.
	 *
	 * @api private
	 */
	
	Manager.prototype.onerror = function (err) {
	  debug('error', err);
	  this.emitAll('error', err);
	};
	
	/**
	 * Creates a new socket for the given `nsp`.
	 *
	 * @return {Socket}
	 * @api public
	 */
	
	Manager.prototype.socket = function (nsp, opts) {
	  var socket = this.nsps[nsp];
	  if (!socket) {
	    socket = new Socket(this, nsp, opts);
	    this.nsps[nsp] = socket;
	    var self = this;
	    socket.on('connecting', onConnecting);
	    socket.on('connect', function () {
	      socket.id = self.engine.id;
	    });
	
	    if (this.autoConnect) {
	      // manually call here since connecting evnet is fired before listening
	      onConnecting();
	    }
	  }
	
	  function onConnecting() {
	    if (!~indexOf(self.connecting, socket)) {
	      self.connecting.push(socket);
	    }
	  }
	
	  return socket;
	};
	
	/**
	 * Called upon a socket close.
	 *
	 * @param {Socket} socket
	 */
	
	Manager.prototype.destroy = function (socket) {
	  var index = indexOf(this.connecting, socket);
	  if (~index) this.connecting.splice(index, 1);
	  if (this.connecting.length) return;
	
	  this.close();
	};
	
	/**
	 * Writes a packet.
	 *
	 * @param {Object} packet
	 * @api private
	 */
	
	Manager.prototype.packet = function (packet) {
	  debug('writing packet %j', packet);
	  var self = this;
	  if (packet.query && packet.type === 0) packet.nsp += '?' + packet.query;
	
	  if (!self.encoding) {
	    // encode, then write to engine with result
	    self.encoding = true;
	    this.encoder.encode(packet, function (encodedPackets) {
	      for (var i = 0; i < encodedPackets.length; i++) {
	        self.engine.write(encodedPackets[i], packet.options);
	      }
	      self.encoding = false;
	      self.processPacketQueue();
	    });
	  } else {
	    // add packet to the queue
	    self.packetBuffer.push(packet);
	  }
	};
	
	/**
	 * If packet buffer is non-empty, begins encoding the
	 * next packet in line.
	 *
	 * @api private
	 */
	
	Manager.prototype.processPacketQueue = function () {
	  if (this.packetBuffer.length > 0 && !this.encoding) {
	    var pack = this.packetBuffer.shift();
	    this.packet(pack);
	  }
	};
	
	/**
	 * Clean up transport subscriptions and packet buffer.
	 *
	 * @api private
	 */
	
	Manager.prototype.cleanup = function () {
	  debug('cleanup');
	
	  var subsLength = this.subs.length;
	  for (var i = 0; i < subsLength; i++) {
	    var sub = this.subs.shift();
	    sub.destroy();
	  }
	
	  this.packetBuffer = [];
	  this.encoding = false;
	  this.lastPing = null;
	
	  this.decoder.destroy();
	};
	
	/**
	 * Close the current socket.
	 *
	 * @api private
	 */
	
	Manager.prototype.close = Manager.prototype.disconnect = function () {
	  debug('disconnect');
	  this.skipReconnect = true;
	  this.reconnecting = false;
	  if ('opening' === this.readyState) {
	    // `onclose` will not fire because
	    // an open event never happened
	    this.cleanup();
	  }
	  this.backoff.reset();
	  this.readyState = 'closed';
	  if (this.engine) this.engine.close();
	};
	
	/**
	 * Called upon engine close.
	 *
	 * @api private
	 */
	
	Manager.prototype.onclose = function (reason) {
	  debug('onclose');
	
	  this.cleanup();
	  this.backoff.reset();
	  this.readyState = 'closed';
	  this.emit('close', reason);
	
	  if (this._reconnection && !this.skipReconnect) {
	    this.reconnect();
	  }
	};
	
	/**
	 * Attempt a reconnection.
	 *
	 * @api private
	 */
	
	Manager.prototype.reconnect = function () {
	  if (this.reconnecting || this.skipReconnect) return this;
	
	  var self = this;
	
	  if (this.backoff.attempts >= this._reconnectionAttempts) {
	    debug('reconnect failed');
	    this.backoff.reset();
	    this.emitAll('reconnect_failed');
	    this.reconnecting = false;
	  } else {
	    var delay = this.backoff.duration();
	    debug('will wait %dms before reconnect attempt', delay);
	
	    this.reconnecting = true;
	    var timer = setTimeout(function () {
	      if (self.skipReconnect) return;
	
	      debug('attempting reconnect');
	      self.emitAll('reconnect_attempt', self.backoff.attempts);
	      self.emitAll('reconnecting', self.backoff.attempts);
	
	      // check again for the case socket closed in above events
	      if (self.skipReconnect) return;
	
	      self.open(function (err) {
	        if (err) {
	          debug('reconnect attempt error');
	          self.reconnecting = false;
	          self.reconnect();
	          self.emitAll('reconnect_error', err.data);
	        } else {
	          debug('reconnect success');
	          self.onreconnect();
	        }
	      });
	    }, delay);
	
	    this.subs.push({
	      destroy: function destroy() {
	        clearTimeout(timer);
	      }
	    });
	  }
	};
	
	/**
	 * Called upon successful reconnect.
	 *
	 * @api private
	 */
	
	Manager.prototype.onreconnect = function () {
	  var attempt = this.backoff.attempts;
	  this.reconnecting = false;
	  this.backoff.reset();
	  this.updateSocketIds();
	  this.emitAll('reconnect', attempt);
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(30);

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(31);
	
	/**
	 * Exports parser
	 *
	 * @api public
	 *
	 */
	module.exports.parser = __webpack_require__(38);

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/**
	 * Module dependencies.
	 */
	
	var transports = __webpack_require__(32);
	var Emitter = __webpack_require__(24);
	var debug = __webpack_require__(49)('engine.io-client:socket');
	var index = __webpack_require__(55);
	var parser = __webpack_require__(38);
	var parseuri = __webpack_require__(13);
	var parsejson = __webpack_require__(56);
	var parseqs = __webpack_require__(46);
	
	/**
	 * Module exports.
	 */
	
	module.exports = Socket;
	
	/**
	 * Socket constructor.
	 *
	 * @param {String|Object} uri or options
	 * @param {Object} options
	 * @api public
	 */
	
	function Socket(uri, opts) {
	  if (!(this instanceof Socket)) return new Socket(uri, opts);
	
	  opts = opts || {};
	
	  if (uri && 'object' === (typeof uri === 'undefined' ? 'undefined' : _typeof(uri))) {
	    opts = uri;
	    uri = null;
	  }
	
	  if (uri) {
	    uri = parseuri(uri);
	    opts.hostname = uri.host;
	    opts.secure = uri.protocol === 'https' || uri.protocol === 'wss';
	    opts.port = uri.port;
	    if (uri.query) opts.query = uri.query;
	  } else if (opts.host) {
	    opts.hostname = parseuri(opts.host).host;
	  }
	
	  this.secure = null != opts.secure ? opts.secure : global.location && 'https:' === location.protocol;
	
	  if (opts.hostname && !opts.port) {
	    // if no port is specified manually, use the protocol default
	    opts.port = this.secure ? '443' : '80';
	  }
	
	  this.agent = opts.agent || false;
	  this.hostname = opts.hostname || (global.location ? location.hostname : 'localhost');
	  this.port = opts.port || (global.location && location.port ? location.port : this.secure ? 443 : 80);
	  this.query = opts.query || {};
	  if ('string' === typeof this.query) this.query = parseqs.decode(this.query);
	  this.upgrade = false !== opts.upgrade;
	  this.path = (opts.path || '/engine.io').replace(/\/$/, '') + '/';
	  this.forceJSONP = !!opts.forceJSONP;
	  this.jsonp = false !== opts.jsonp;
	  this.forceBase64 = !!opts.forceBase64;
	  this.enablesXDR = !!opts.enablesXDR;
	  this.timestampParam = opts.timestampParam || 't';
	  this.timestampRequests = opts.timestampRequests;
	  this.transports = opts.transports || ['polling', 'websocket'];
	  this.readyState = '';
	  this.writeBuffer = [];
	  this.prevBufferLen = 0;
	  this.policyPort = opts.policyPort || 843;
	  this.rememberUpgrade = opts.rememberUpgrade || false;
	  this.binaryType = null;
	  this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;
	  this.perMessageDeflate = false !== opts.perMessageDeflate ? opts.perMessageDeflate || {} : false;
	
	  if (true === this.perMessageDeflate) this.perMessageDeflate = {};
	  if (this.perMessageDeflate && null == this.perMessageDeflate.threshold) {
	    this.perMessageDeflate.threshold = 1024;
	  }
	
	  // SSL options for Node.js client
	  this.pfx = opts.pfx || null;
	  this.key = opts.key || null;
	  this.passphrase = opts.passphrase || null;
	  this.cert = opts.cert || null;
	  this.ca = opts.ca || null;
	  this.ciphers = opts.ciphers || null;
	  this.rejectUnauthorized = opts.rejectUnauthorized === undefined ? null : opts.rejectUnauthorized;
	
	  // other options for Node.js client
	  var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) === 'object' && global;
	  if (freeGlobal.global === freeGlobal) {
	    if (opts.extraHeaders && Object.keys(opts.extraHeaders).length > 0) {
	      this.extraHeaders = opts.extraHeaders;
	    }
	  }
	
	  // set on handshake
	  this.id = null;
	  this.upgrades = null;
	  this.pingInterval = null;
	  this.pingTimeout = null;
	
	  // set on heartbeat
	  this.pingIntervalTimer = null;
	  this.pingTimeoutTimer = null;
	
	  this.open();
	}
	
	Socket.priorWebsocketSuccess = false;
	
	/**
	 * Mix in `Emitter`.
	 */
	
	Emitter(Socket.prototype);
	
	/**
	 * Protocol version.
	 *
	 * @api public
	 */
	
	Socket.protocol = parser.protocol; // this is an int
	
	/**
	 * Expose deps for legacy compatibility
	 * and standalone browser access.
	 */
	
	Socket.Socket = Socket;
	Socket.Transport = __webpack_require__(37);
	Socket.transports = __webpack_require__(32);
	Socket.parser = __webpack_require__(38);
	
	/**
	 * Creates transport of the given type.
	 *
	 * @param {String} transport name
	 * @return {Transport}
	 * @api private
	 */
	
	Socket.prototype.createTransport = function (name) {
	  debug('creating transport "%s"', name);
	  var query = clone(this.query);
	
	  // append engine.io protocol identifier
	  query.EIO = parser.protocol;
	
	  // transport name
	  query.transport = name;
	
	  // session id if we already have one
	  if (this.id) query.sid = this.id;
	
	  var transport = new transports[name]({
	    agent: this.agent,
	    hostname: this.hostname,
	    port: this.port,
	    secure: this.secure,
	    path: this.path,
	    query: query,
	    forceJSONP: this.forceJSONP,
	    jsonp: this.jsonp,
	    forceBase64: this.forceBase64,
	    enablesXDR: this.enablesXDR,
	    timestampRequests: this.timestampRequests,
	    timestampParam: this.timestampParam,
	    policyPort: this.policyPort,
	    socket: this,
	    pfx: this.pfx,
	    key: this.key,
	    passphrase: this.passphrase,
	    cert: this.cert,
	    ca: this.ca,
	    ciphers: this.ciphers,
	    rejectUnauthorized: this.rejectUnauthorized,
	    perMessageDeflate: this.perMessageDeflate,
	    extraHeaders: this.extraHeaders
	  });
	
	  return transport;
	};
	
	function clone(obj) {
	  var o = {};
	  for (var i in obj) {
	    if (obj.hasOwnProperty(i)) {
	      o[i] = obj[i];
	    }
	  }
	  return o;
	}
	
	/**
	 * Initializes transport to use and starts probe.
	 *
	 * @api private
	 */
	Socket.prototype.open = function () {
	  var transport;
	  if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') !== -1) {
	    transport = 'websocket';
	  } else if (0 === this.transports.length) {
	    // Emit error on next tick so it can be listened to
	    var self = this;
	    setTimeout(function () {
	      self.emit('error', 'No transports available');
	    }, 0);
	    return;
	  } else {
	    transport = this.transports[0];
	  }
	  this.readyState = 'opening';
	
	  // Retry with the next transport if the transport is disabled (jsonp: false)
	  try {
	    transport = this.createTransport(transport);
	  } catch (e) {
	    this.transports.shift();
	    this.open();
	    return;
	  }
	
	  transport.open();
	  this.setTransport(transport);
	};
	
	/**
	 * Sets the current transport. Disables the existing one (if any).
	 *
	 * @api private
	 */
	
	Socket.prototype.setTransport = function (transport) {
	  debug('setting transport %s', transport.name);
	  var self = this;
	
	  if (this.transport) {
	    debug('clearing existing transport %s', this.transport.name);
	    this.transport.removeAllListeners();
	  }
	
	  // set up transport
	  this.transport = transport;
	
	  // set up transport listeners
	  transport.on('drain', function () {
	    self.onDrain();
	  }).on('packet', function (packet) {
	    self.onPacket(packet);
	  }).on('error', function (e) {
	    self.onError(e);
	  }).on('close', function () {
	    self.onClose('transport close');
	  });
	};
	
	/**
	 * Probes a transport.
	 *
	 * @param {String} transport name
	 * @api private
	 */
	
	Socket.prototype.probe = function (name) {
	  debug('probing transport "%s"', name);
	  var transport = this.createTransport(name, { probe: 1 });
	  var failed = false;
	  var self = this;
	
	  Socket.priorWebsocketSuccess = false;
	
	  function onTransportOpen() {
	    if (self.onlyBinaryUpgrades) {
	      var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
	      failed = failed || upgradeLosesBinary;
	    }
	    if (failed) return;
	
	    debug('probe transport "%s" opened', name);
	    transport.send([{ type: 'ping', data: 'probe' }]);
	    transport.once('packet', function (msg) {
	      if (failed) return;
	      if ('pong' === msg.type && 'probe' === msg.data) {
	        debug('probe transport "%s" pong', name);
	        self.upgrading = true;
	        self.emit('upgrading', transport);
	        if (!transport) return;
	        Socket.priorWebsocketSuccess = 'websocket' === transport.name;
	
	        debug('pausing current transport "%s"', self.transport.name);
	        self.transport.pause(function () {
	          if (failed) return;
	          if ('closed' === self.readyState) return;
	          debug('changing transport and sending upgrade packet');
	
	          cleanup();
	
	          self.setTransport(transport);
	          transport.send([{ type: 'upgrade' }]);
	          self.emit('upgrade', transport);
	          transport = null;
	          self.upgrading = false;
	          self.flush();
	        });
	      } else {
	        debug('probe transport "%s" failed', name);
	        var err = new Error('probe error');
	        err.transport = transport.name;
	        self.emit('upgradeError', err);
	      }
	    });
	  }
	
	  function freezeTransport() {
	    if (failed) return;
	
	    // Any callback called by transport should be ignored since now
	    failed = true;
	
	    cleanup();
	
	    transport.close();
	    transport = null;
	  }
	
	  // Handle any error that happens while probing
	  function onerror(err) {
	    var error = new Error('probe error: ' + err);
	    error.transport = transport.name;
	
	    freezeTransport();
	
	    debug('probe transport "%s" failed because of error: %s', name, err);
	
	    self.emit('upgradeError', error);
	  }
	
	  function onTransportClose() {
	    onerror('transport closed');
	  }
	
	  // When the socket is closed while we're probing
	  function onclose() {
	    onerror('socket closed');
	  }
	
	  // When the socket is upgraded while we're probing
	  function onupgrade(to) {
	    if (transport && to.name !== transport.name) {
	      debug('"%s" works - aborting "%s"', to.name, transport.name);
	      freezeTransport();
	    }
	  }
	
	  // Remove all listeners on the transport and on self
	  function cleanup() {
	    transport.removeListener('open', onTransportOpen);
	    transport.removeListener('error', onerror);
	    transport.removeListener('close', onTransportClose);
	    self.removeListener('close', onclose);
	    self.removeListener('upgrading', onupgrade);
	  }
	
	  transport.once('open', onTransportOpen);
	  transport.once('error', onerror);
	  transport.once('close', onTransportClose);
	
	  this.once('close', onclose);
	  this.once('upgrading', onupgrade);
	
	  transport.open();
	};
	
	/**
	 * Called when connection is deemed open.
	 *
	 * @api public
	 */
	
	Socket.prototype.onOpen = function () {
	  debug('socket open');
	  this.readyState = 'open';
	  Socket.priorWebsocketSuccess = 'websocket' === this.transport.name;
	  this.emit('open');
	  this.flush();
	
	  // we check for `readyState` in case an `open`
	  // listener already closed the socket
	  if ('open' === this.readyState && this.upgrade && this.transport.pause) {
	    debug('starting upgrade probes');
	    for (var i = 0, l = this.upgrades.length; i < l; i++) {
	      this.probe(this.upgrades[i]);
	    }
	  }
	};
	
	/**
	 * Handles a packet.
	 *
	 * @api private
	 */
	
	Socket.prototype.onPacket = function (packet) {
	  if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState) {
	    debug('socket receive: type "%s", data "%s"', packet.type, packet.data);
	
	    this.emit('packet', packet);
	
	    // Socket is live - any packet counts
	    this.emit('heartbeat');
	
	    switch (packet.type) {
	      case 'open':
	        this.onHandshake(parsejson(packet.data));
	        break;
	
	      case 'pong':
	        this.setPing();
	        this.emit('pong');
	        break;
	
	      case 'error':
	        var err = new Error('server error');
	        err.code = packet.data;
	        this.onError(err);
	        break;
	
	      case 'message':
	        this.emit('data', packet.data);
	        this.emit('message', packet.data);
	        break;
	    }
	  } else {
	    debug('packet received with socket readyState "%s"', this.readyState);
	  }
	};
	
	/**
	 * Called upon handshake completion.
	 *
	 * @param {Object} handshake obj
	 * @api private
	 */
	
	Socket.prototype.onHandshake = function (data) {
	  this.emit('handshake', data);
	  this.id = data.sid;
	  this.transport.query.sid = data.sid;
	  this.upgrades = this.filterUpgrades(data.upgrades);
	  this.pingInterval = data.pingInterval;
	  this.pingTimeout = data.pingTimeout;
	  this.onOpen();
	  // In case open handler closes socket
	  if ('closed' === this.readyState) return;
	  this.setPing();
	
	  // Prolong liveness of socket on heartbeat
	  this.removeListener('heartbeat', this.onHeartbeat);
	  this.on('heartbeat', this.onHeartbeat);
	};
	
	/**
	 * Resets ping timeout.
	 *
	 * @api private
	 */
	
	Socket.prototype.onHeartbeat = function (timeout) {
	  clearTimeout(this.pingTimeoutTimer);
	  var self = this;
	  self.pingTimeoutTimer = setTimeout(function () {
	    if ('closed' === self.readyState) return;
	    self.onClose('ping timeout');
	  }, timeout || self.pingInterval + self.pingTimeout);
	};
	
	/**
	 * Pings server every `this.pingInterval` and expects response
	 * within `this.pingTimeout` or closes connection.
	 *
	 * @api private
	 */
	
	Socket.prototype.setPing = function () {
	  var self = this;
	  clearTimeout(self.pingIntervalTimer);
	  self.pingIntervalTimer = setTimeout(function () {
	    debug('writing ping packet - expecting pong within %sms', self.pingTimeout);
	    self.ping();
	    self.onHeartbeat(self.pingTimeout);
	  }, self.pingInterval);
	};
	
	/**
	* Sends a ping packet.
	*
	* @api private
	*/
	
	Socket.prototype.ping = function () {
	  var self = this;
	  this.sendPacket('ping', function () {
	    self.emit('ping');
	  });
	};
	
	/**
	 * Called on `drain` event
	 *
	 * @api private
	 */
	
	Socket.prototype.onDrain = function () {
	  this.writeBuffer.splice(0, this.prevBufferLen);
	
	  // setting prevBufferLen = 0 is very important
	  // for example, when upgrading, upgrade packet is sent over,
	  // and a nonzero prevBufferLen could cause problems on `drain`
	  this.prevBufferLen = 0;
	
	  if (0 === this.writeBuffer.length) {
	    this.emit('drain');
	  } else {
	    this.flush();
	  }
	};
	
	/**
	 * Flush write buffers.
	 *
	 * @api private
	 */
	
	Socket.prototype.flush = function () {
	  if ('closed' !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
	    debug('flushing %d packets in socket', this.writeBuffer.length);
	    this.transport.send(this.writeBuffer);
	    // keep track of current length of writeBuffer
	    // splice writeBuffer and callbackBuffer on `drain`
	    this.prevBufferLen = this.writeBuffer.length;
	    this.emit('flush');
	  }
	};
	
	/**
	 * Sends a message.
	 *
	 * @param {String} message.
	 * @param {Function} callback function.
	 * @param {Object} options.
	 * @return {Socket} for chaining.
	 * @api public
	 */
	
	Socket.prototype.write = Socket.prototype.send = function (msg, options, fn) {
	  this.sendPacket('message', msg, options, fn);
	  return this;
	};
	
	/**
	 * Sends a packet.
	 *
	 * @param {String} packet type.
	 * @param {String} data.
	 * @param {Object} options.
	 * @param {Function} callback function.
	 * @api private
	 */
	
	Socket.prototype.sendPacket = function (type, data, options, fn) {
	  if ('function' === typeof data) {
	    fn = data;
	    data = undefined;
	  }
	
	  if ('function' === typeof options) {
	    fn = options;
	    options = null;
	  }
	
	  if ('closing' === this.readyState || 'closed' === this.readyState) {
	    return;
	  }
	
	  options = options || {};
	  options.compress = false !== options.compress;
	
	  var packet = {
	    type: type,
	    data: data,
	    options: options
	  };
	  this.emit('packetCreate', packet);
	  this.writeBuffer.push(packet);
	  if (fn) this.once('flush', fn);
	  this.flush();
	};
	
	/**
	 * Closes the connection.
	 *
	 * @api private
	 */
	
	Socket.prototype.close = function () {
	  if ('opening' === this.readyState || 'open' === this.readyState) {
	    this.readyState = 'closing';
	
	    var self = this;
	
	    if (this.writeBuffer.length) {
	      this.once('drain', function () {
	        if (this.upgrading) {
	          waitForUpgrade();
	        } else {
	          close();
	        }
	      });
	    } else if (this.upgrading) {
	      waitForUpgrade();
	    } else {
	      close();
	    }
	  }
	
	  function close() {
	    self.onClose('forced close');
	    debug('socket closing - telling transport to close');
	    self.transport.close();
	  }
	
	  function cleanupAndClose() {
	    self.removeListener('upgrade', cleanupAndClose);
	    self.removeListener('upgradeError', cleanupAndClose);
	    close();
	  }
	
	  function waitForUpgrade() {
	    // wait for upgrade to finish since we can't send packets while pausing a transport
	    self.once('upgrade', cleanupAndClose);
	    self.once('upgradeError', cleanupAndClose);
	  }
	
	  return this;
	};
	
	/**
	 * Called upon transport error
	 *
	 * @api private
	 */
	
	Socket.prototype.onError = function (err) {
	  debug('socket error %j', err);
	  Socket.priorWebsocketSuccess = false;
	  this.emit('error', err);
	  this.onClose('transport error', err);
	};
	
	/**
	 * Called upon transport close.
	 *
	 * @api private
	 */
	
	Socket.prototype.onClose = function (reason, desc) {
	  if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState) {
	    debug('socket close with reason: "%s"', reason);
	    var self = this;
	
	    // clear timers
	    clearTimeout(this.pingIntervalTimer);
	    clearTimeout(this.pingTimeoutTimer);
	
	    // stop event from firing again for transport
	    this.transport.removeAllListeners('close');
	
	    // ensure transport won't stay open
	    this.transport.close();
	
	    // ignore further transport communication
	    this.transport.removeAllListeners();
	
	    // set ready state
	    this.readyState = 'closed';
	
	    // clear session id
	    this.id = null;
	
	    // emit close event
	    this.emit('close', reason, desc);
	
	    // clean buffers after, so users can still
	    // grab the buffers on `close` event
	    self.writeBuffer = [];
	    self.prevBufferLen = 0;
	  }
	};
	
	/**
	 * Filters upgrades, returning only those matching client transports.
	 *
	 * @param {Array} server upgrades
	 * @api private
	 *
	 */
	
	Socket.prototype.filterUpgrades = function (upgrades) {
	  var filteredUpgrades = [];
	  for (var i = 0, j = upgrades.length; i < j; i++) {
	    if (~index(this.transports, upgrades[i])) filteredUpgrades.push(upgrades[i]);
	  }
	  return filteredUpgrades;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	/**
	 * Module dependencies
	 */
	
	var XMLHttpRequest = __webpack_require__(33);
	var XHR = __webpack_require__(35);
	var JSONP = __webpack_require__(52);
	var websocket = __webpack_require__(53);
	
	/**
	 * Export transports.
	 */
	
	exports.polling = polling;
	exports.websocket = websocket;
	
	/**
	 * Polling transport polymorphic constructor.
	 * Decides on xhr vs jsonp based on feature detection.
	 *
	 * @api private
	 */
	
	function polling(opts) {
	  var xhr;
	  var xd = false;
	  var xs = false;
	  var jsonp = false !== opts.jsonp;
	
	  if (global.location) {
	    var isSSL = 'https:' === location.protocol;
	    var port = location.port;
	
	    // some user agents have empty `location.port`
	    if (!port) {
	      port = isSSL ? 443 : 80;
	    }
	
	    xd = opts.hostname !== location.hostname || port !== opts.port;
	    xs = opts.secure !== isSSL;
	  }
	
	  opts.xdomain = xd;
	  opts.xscheme = xs;
	  xhr = new XMLHttpRequest(opts);
	
	  if ('open' in xhr && !opts.forceJSONP) {
	    return new XHR(opts);
	  } else {
	    if (!jsonp) throw new Error('JSONP disabled');
	    return new JSONP(opts);
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	// browser shim for xmlhttprequest module
	
	var hasCORS = __webpack_require__(34);
	
	module.exports = function (opts) {
	  var xdomain = opts.xdomain;
	
	  // scheme must be same when usign XDomainRequest
	  // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx
	  var xscheme = opts.xscheme;
	
	  // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
	  // https://github.com/Automattic/engine.io-client/pull/217
	  var enablesXDR = opts.enablesXDR;
	
	  // XMLHttpRequest can be disabled on IE
	  try {
	    if ('undefined' !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
	      return new XMLHttpRequest();
	    }
	  } catch (e) {}
	
	  // Use XDomainRequest for IE8 if enablesXDR is true
	  // because loading bar keeps flashing when using jsonp-polling
	  // https://github.com/yujiosaka/socke.io-ie8-loading-example
	  try {
	    if ('undefined' !== typeof XDomainRequest && !xscheme && enablesXDR) {
	      return new XDomainRequest();
	    }
	  } catch (e) {}
	
	  if (!xdomain) {
	    try {
	      return new global[['Active'].concat('Object').join('X')]('Microsoft.XMLHTTP');
	    } catch (e) {}
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 34 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Module exports.
	 *
	 * Logic borrowed from Modernizr:
	 *
	 *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
	 */
	
	try {
	  module.exports = typeof XMLHttpRequest !== 'undefined' && 'withCredentials' in new XMLHttpRequest();
	} catch (err) {
	  // if XMLHttp support is disabled in IE then it will throw
	  // when trying to create
	  module.exports = false;
	}

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	/**
	 * Module requirements.
	 */
	
	var XMLHttpRequest = __webpack_require__(33);
	var Polling = __webpack_require__(36);
	var Emitter = __webpack_require__(24);
	var inherit = __webpack_require__(47);
	var debug = __webpack_require__(49)('engine.io-client:polling-xhr');
	
	/**
	 * Module exports.
	 */
	
	module.exports = XHR;
	module.exports.Request = Request;
	
	/**
	 * Empty function
	 */
	
	function empty() {}
	
	/**
	 * XHR Polling constructor.
	 *
	 * @param {Object} opts
	 * @api public
	 */
	
	function XHR(opts) {
	  Polling.call(this, opts);
	
	  if (global.location) {
	    var isSSL = 'https:' === location.protocol;
	    var port = location.port;
	
	    // some user agents have empty `location.port`
	    if (!port) {
	      port = isSSL ? 443 : 80;
	    }
	
	    this.xd = opts.hostname !== global.location.hostname || port !== opts.port;
	    this.xs = opts.secure !== isSSL;
	  } else {
	    this.extraHeaders = opts.extraHeaders;
	  }
	}
	
	/**
	 * Inherits from Polling.
	 */
	
	inherit(XHR, Polling);
	
	/**
	 * XHR supports binary
	 */
	
	XHR.prototype.supportsBinary = true;
	
	/**
	 * Creates a request.
	 *
	 * @param {String} method
	 * @api private
	 */
	
	XHR.prototype.request = function (opts) {
	  opts = opts || {};
	  opts.uri = this.uri();
	  opts.xd = this.xd;
	  opts.xs = this.xs;
	  opts.agent = this.agent || false;
	  opts.supportsBinary = this.supportsBinary;
	  opts.enablesXDR = this.enablesXDR;
	
	  // SSL options for Node.js client
	  opts.pfx = this.pfx;
	  opts.key = this.key;
	  opts.passphrase = this.passphrase;
	  opts.cert = this.cert;
	  opts.ca = this.ca;
	  opts.ciphers = this.ciphers;
	  opts.rejectUnauthorized = this.rejectUnauthorized;
	
	  // other options for Node.js client
	  opts.extraHeaders = this.extraHeaders;
	
	  return new Request(opts);
	};
	
	/**
	 * Sends data.
	 *
	 * @param {String} data to send.
	 * @param {Function} called upon flush.
	 * @api private
	 */
	
	XHR.prototype.doWrite = function (data, fn) {
	  var isBinary = typeof data !== 'string' && data !== undefined;
	  var req = this.request({ method: 'POST', data: data, isBinary: isBinary });
	  var self = this;
	  req.on('success', fn);
	  req.on('error', function (err) {
	    self.onError('xhr post error', err);
	  });
	  this.sendXhr = req;
	};
	
	/**
	 * Starts a poll cycle.
	 *
	 * @api private
	 */
	
	XHR.prototype.doPoll = function () {
	  debug('xhr poll');
	  var req = this.request();
	  var self = this;
	  req.on('data', function (data) {
	    self.onData(data);
	  });
	  req.on('error', function (err) {
	    self.onError('xhr poll error', err);
	  });
	  this.pollXhr = req;
	};
	
	/**
	 * Request constructor
	 *
	 * @param {Object} options
	 * @api public
	 */
	
	function Request(opts) {
	  this.method = opts.method || 'GET';
	  this.uri = opts.uri;
	  this.xd = !!opts.xd;
	  this.xs = !!opts.xs;
	  this.async = false !== opts.async;
	  this.data = undefined !== opts.data ? opts.data : null;
	  this.agent = opts.agent;
	  this.isBinary = opts.isBinary;
	  this.supportsBinary = opts.supportsBinary;
	  this.enablesXDR = opts.enablesXDR;
	
	  // SSL options for Node.js client
	  this.pfx = opts.pfx;
	  this.key = opts.key;
	  this.passphrase = opts.passphrase;
	  this.cert = opts.cert;
	  this.ca = opts.ca;
	  this.ciphers = opts.ciphers;
	  this.rejectUnauthorized = opts.rejectUnauthorized;
	
	  // other options for Node.js client
	  this.extraHeaders = opts.extraHeaders;
	
	  this.create();
	}
	
	/**
	 * Mix in `Emitter`.
	 */
	
	Emitter(Request.prototype);
	
	/**
	 * Creates the XHR object and sends the request.
	 *
	 * @api private
	 */
	
	Request.prototype.create = function () {
	  var opts = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR };
	
	  // SSL options for Node.js client
	  opts.pfx = this.pfx;
	  opts.key = this.key;
	  opts.passphrase = this.passphrase;
	  opts.cert = this.cert;
	  opts.ca = this.ca;
	  opts.ciphers = this.ciphers;
	  opts.rejectUnauthorized = this.rejectUnauthorized;
	
	  var xhr = this.xhr = new XMLHttpRequest(opts);
	  var self = this;
	
	  try {
	    debug('xhr open %s: %s', this.method, this.uri);
	    xhr.open(this.method, this.uri, this.async);
	    try {
	      if (this.extraHeaders) {
	        xhr.setDisableHeaderCheck(true);
	        for (var i in this.extraHeaders) {
	          if (this.extraHeaders.hasOwnProperty(i)) {
	            xhr.setRequestHeader(i, this.extraHeaders[i]);
	          }
	        }
	      }
	    } catch (e) {}
	    if (this.supportsBinary) {
	      // This has to be done after open because Firefox is stupid
	      // http://stackoverflow.com/questions/13216903/get-binary-data-with-xmlhttprequest-in-a-firefox-extension
	      xhr.responseType = 'arraybuffer';
	    }
	
	    if ('POST' === this.method) {
	      try {
	        if (this.isBinary) {
	          xhr.setRequestHeader('Content-type', 'application/octet-stream');
	        } else {
	          xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
	        }
	      } catch (e) {}
	    }
	
	    try {
	      xhr.setRequestHeader('Accept', '*/*');
	    } catch (e) {}
	
	    // ie6 check
	    if ('withCredentials' in xhr) {
	      xhr.withCredentials = true;
	    }
	
	    if (this.hasXDR()) {
	      xhr.onload = function () {
	        self.onLoad();
	      };
	      xhr.onerror = function () {
	        self.onError(xhr.responseText);
	      };
	    } else {
	      xhr.onreadystatechange = function () {
	        if (4 !== xhr.readyState) return;
	        if (200 === xhr.status || 1223 === xhr.status) {
	          self.onLoad();
	        } else {
	          // make sure the `error` event handler that's user-set
	          // does not throw in the same tick and gets caught here
	          setTimeout(function () {
	            self.onError(xhr.status);
	          }, 0);
	        }
	      };
	    }
	
	    debug('xhr data %s', this.data);
	    xhr.send(this.data);
	  } catch (e) {
	    // Need to defer since .create() is called directly fhrom the constructor
	    // and thus the 'error' event can only be only bound *after* this exception
	    // occurs.  Therefore, also, we cannot throw here at all.
	    setTimeout(function () {
	      self.onError(e);
	    }, 0);
	    return;
	  }
	
	  if (global.document) {
	    this.index = Request.requestsCount++;
	    Request.requests[this.index] = this;
	  }
	};
	
	/**
	 * Called upon successful response.
	 *
	 * @api private
	 */
	
	Request.prototype.onSuccess = function () {
	  this.emit('success');
	  this.cleanup();
	};
	
	/**
	 * Called if we have data.
	 *
	 * @api private
	 */
	
	Request.prototype.onData = function (data) {
	  this.emit('data', data);
	  this.onSuccess();
	};
	
	/**
	 * Called upon error.
	 *
	 * @api private
	 */
	
	Request.prototype.onError = function (err) {
	  this.emit('error', err);
	  this.cleanup(true);
	};
	
	/**
	 * Cleans up house.
	 *
	 * @api private
	 */
	
	Request.prototype.cleanup = function (fromError) {
	  if ('undefined' === typeof this.xhr || null === this.xhr) {
	    return;
	  }
	  // xmlhttprequest
	  if (this.hasXDR()) {
	    this.xhr.onload = this.xhr.onerror = empty;
	  } else {
	    this.xhr.onreadystatechange = empty;
	  }
	
	  if (fromError) {
	    try {
	      this.xhr.abort();
	    } catch (e) {}
	  }
	
	  if (global.document) {
	    delete Request.requests[this.index];
	  }
	
	  this.xhr = null;
	};
	
	/**
	 * Called upon load.
	 *
	 * @api private
	 */
	
	Request.prototype.onLoad = function () {
	  var data;
	  try {
	    var contentType;
	    try {
	      contentType = this.xhr.getResponseHeader('Content-Type').split(';')[0];
	    } catch (e) {}
	    if (contentType === 'application/octet-stream') {
	      data = this.xhr.response || this.xhr.responseText;
	    } else {
	      if (!this.supportsBinary) {
	        data = this.xhr.responseText;
	      } else {
	        try {
	          data = String.fromCharCode.apply(null, new Uint8Array(this.xhr.response));
	        } catch (e) {
	          var ui8Arr = new Uint8Array(this.xhr.response);
	          var dataArray = [];
	          for (var idx = 0, length = ui8Arr.length; idx < length; idx++) {
	            dataArray.push(ui8Arr[idx]);
	          }
	
	          data = String.fromCharCode.apply(null, dataArray);
	        }
	      }
	    }
	  } catch (e) {
	    this.onError(e);
	  }
	  if (null != data) {
	    this.onData(data);
	  }
	};
	
	/**
	 * Check if it has XDomainRequest.
	 *
	 * @api private
	 */
	
	Request.prototype.hasXDR = function () {
	  return 'undefined' !== typeof global.XDomainRequest && !this.xs && this.enablesXDR;
	};
	
	/**
	 * Aborts the request.
	 *
	 * @api public
	 */
	
	Request.prototype.abort = function () {
	  this.cleanup();
	};
	
	/**
	 * Aborts pending requests when unloading the window. This is needed to prevent
	 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
	 * emitted.
	 */
	
	Request.requestsCount = 0;
	Request.requests = {};
	
	if (global.document) {
	  if (global.attachEvent) {
	    global.attachEvent('onunload', unloadHandler);
	  } else if (global.addEventListener) {
	    global.addEventListener('beforeunload', unloadHandler, false);
	  }
	}
	
	function unloadHandler() {
	  for (var i in Request.requests) {
	    if (Request.requests.hasOwnProperty(i)) {
	      Request.requests[i].abort();
	    }
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Module dependencies.
	 */
	
	var Transport = __webpack_require__(37);
	var parseqs = __webpack_require__(46);
	var parser = __webpack_require__(38);
	var inherit = __webpack_require__(47);
	var yeast = __webpack_require__(48);
	var debug = __webpack_require__(49)('engine.io-client:polling');
	
	/**
	 * Module exports.
	 */
	
	module.exports = Polling;
	
	/**
	 * Is XHR2 supported?
	 */
	
	var hasXHR2 = function () {
	  var XMLHttpRequest = __webpack_require__(33);
	  var xhr = new XMLHttpRequest({ xdomain: false });
	  return null != xhr.responseType;
	}();
	
	/**
	 * Polling interface.
	 *
	 * @param {Object} opts
	 * @api private
	 */
	
	function Polling(opts) {
	  var forceBase64 = opts && opts.forceBase64;
	  if (!hasXHR2 || forceBase64) {
	    this.supportsBinary = false;
	  }
	  Transport.call(this, opts);
	}
	
	/**
	 * Inherits from Transport.
	 */
	
	inherit(Polling, Transport);
	
	/**
	 * Transport name.
	 */
	
	Polling.prototype.name = 'polling';
	
	/**
	 * Opens the socket (triggers polling). We write a PING message to determine
	 * when the transport is open.
	 *
	 * @api private
	 */
	
	Polling.prototype.doOpen = function () {
	  this.poll();
	};
	
	/**
	 * Pauses polling.
	 *
	 * @param {Function} callback upon buffers are flushed and transport is paused
	 * @api private
	 */
	
	Polling.prototype.pause = function (onPause) {
	  var self = this;
	
	  this.readyState = 'pausing';
	
	  function pause() {
	    debug('paused');
	    self.readyState = 'paused';
	    onPause();
	  }
	
	  if (this.polling || !this.writable) {
	    var total = 0;
	
	    if (this.polling) {
	      debug('we are currently polling - waiting to pause');
	      total++;
	      this.once('pollComplete', function () {
	        debug('pre-pause polling complete');
	        --total || pause();
	      });
	    }
	
	    if (!this.writable) {
	      debug('we are currently writing - waiting to pause');
	      total++;
	      this.once('drain', function () {
	        debug('pre-pause writing complete');
	        --total || pause();
	      });
	    }
	  } else {
	    pause();
	  }
	};
	
	/**
	 * Starts polling cycle.
	 *
	 * @api public
	 */
	
	Polling.prototype.poll = function () {
	  debug('polling');
	  this.polling = true;
	  this.doPoll();
	  this.emit('poll');
	};
	
	/**
	 * Overloads onData to detect payloads.
	 *
	 * @api private
	 */
	
	Polling.prototype.onData = function (data) {
	  var self = this;
	  debug('polling got data %s', data);
	  var callback = function callback(packet, index, total) {
	    // if its the first message we consider the transport open
	    if ('opening' === self.readyState) {
	      self.onOpen();
	    }
	
	    // if its a close packet, we close the ongoing requests
	    if ('close' === packet.type) {
	      self.onClose();
	      return false;
	    }
	
	    // otherwise bypass onData and handle the message
	    self.onPacket(packet);
	  };
	
	  // decode payload
	  parser.decodePayload(data, this.socket.binaryType, callback);
	
	  // if an event did not trigger closing
	  if ('closed' !== this.readyState) {
	    // if we got data we're not polling
	    this.polling = false;
	    this.emit('pollComplete');
	
	    if ('open' === this.readyState) {
	      this.poll();
	    } else {
	      debug('ignoring poll - transport state "%s"', this.readyState);
	    }
	  }
	};
	
	/**
	 * For polling, send a close packet.
	 *
	 * @api private
	 */
	
	Polling.prototype.doClose = function () {
	  var self = this;
	
	  function close() {
	    debug('writing close packet');
	    self.write([{ type: 'close' }]);
	  }
	
	  if ('open' === this.readyState) {
	    debug('transport open - closing');
	    close();
	  } else {
	    // in case we're trying to close while
	    // handshaking is in progress (GH-164)
	    debug('transport not open - deferring close');
	    this.once('open', close);
	  }
	};
	
	/**
	 * Writes a packets payload.
	 *
	 * @param {Array} data packets
	 * @param {Function} drain callback
	 * @api private
	 */
	
	Polling.prototype.write = function (packets) {
	  var self = this;
	  this.writable = false;
	  var callbackfn = function callbackfn() {
	    self.writable = true;
	    self.emit('drain');
	  };
	
	  parser.encodePayload(packets, this.supportsBinary, function (data) {
	    self.doWrite(data, callbackfn);
	  });
	};
	
	/**
	 * Generates uri for connection.
	 *
	 * @api private
	 */
	
	Polling.prototype.uri = function () {
	  var query = this.query || {};
	  var schema = this.secure ? 'https' : 'http';
	  var port = '';
	
	  // cache busting is forced
	  if (false !== this.timestampRequests) {
	    query[this.timestampParam] = yeast();
	  }
	
	  if (!this.supportsBinary && !query.sid) {
	    query.b64 = 1;
	  }
	
	  query = parseqs.encode(query);
	
	  // avoid port if default for schema
	  if (this.port && ('https' === schema && this.port !== 443 || 'http' === schema && this.port !== 80)) {
	    port = ':' + this.port;
	  }
	
	  // prepend ? to query
	  if (query.length) {
	    query = '?' + query;
	  }
	
	  var ipv6 = this.hostname.indexOf(':') !== -1;
	  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Module dependencies.
	 */
	
	var parser = __webpack_require__(38);
	var Emitter = __webpack_require__(24);
	
	/**
	 * Module exports.
	 */
	
	module.exports = Transport;
	
	/**
	 * Transport abstract constructor.
	 *
	 * @param {Object} options.
	 * @api private
	 */
	
	function Transport(opts) {
	  this.path = opts.path;
	  this.hostname = opts.hostname;
	  this.port = opts.port;
	  this.secure = opts.secure;
	  this.query = opts.query;
	  this.timestampParam = opts.timestampParam;
	  this.timestampRequests = opts.timestampRequests;
	  this.readyState = '';
	  this.agent = opts.agent || false;
	  this.socket = opts.socket;
	  this.enablesXDR = opts.enablesXDR;
	
	  // SSL options for Node.js client
	  this.pfx = opts.pfx;
	  this.key = opts.key;
	  this.passphrase = opts.passphrase;
	  this.cert = opts.cert;
	  this.ca = opts.ca;
	  this.ciphers = opts.ciphers;
	  this.rejectUnauthorized = opts.rejectUnauthorized;
	
	  // other options for Node.js client
	  this.extraHeaders = opts.extraHeaders;
	}
	
	/**
	 * Mix in `Emitter`.
	 */
	
	Emitter(Transport.prototype);
	
	/**
	 * Emits an error.
	 *
	 * @param {String} str
	 * @return {Transport} for chaining
	 * @api public
	 */
	
	Transport.prototype.onError = function (msg, desc) {
	  var err = new Error(msg);
	  err.type = 'TransportError';
	  err.description = desc;
	  this.emit('error', err);
	  return this;
	};
	
	/**
	 * Opens the transport.
	 *
	 * @api public
	 */
	
	Transport.prototype.open = function () {
	  if ('closed' === this.readyState || '' === this.readyState) {
	    this.readyState = 'opening';
	    this.doOpen();
	  }
	
	  return this;
	};
	
	/**
	 * Closes the transport.
	 *
	 * @api private
	 */
	
	Transport.prototype.close = function () {
	  if ('opening' === this.readyState || 'open' === this.readyState) {
	    this.doClose();
	    this.onClose();
	  }
	
	  return this;
	};
	
	/**
	 * Sends multiple packets.
	 *
	 * @param {Array} packets
	 * @api private
	 */
	
	Transport.prototype.send = function (packets) {
	  if ('open' === this.readyState) {
	    this.write(packets);
	  } else {
	    throw new Error('Transport not open');
	  }
	};
	
	/**
	 * Called upon open
	 *
	 * @api private
	 */
	
	Transport.prototype.onOpen = function () {
	  this.readyState = 'open';
	  this.writable = true;
	  this.emit('open');
	};
	
	/**
	 * Called with data.
	 *
	 * @param {String} data
	 * @api private
	 */
	
	Transport.prototype.onData = function (data) {
	  var packet = parser.decodePacket(data, this.socket.binaryType);
	  this.onPacket(packet);
	};
	
	/**
	 * Called with a decoded packet.
	 */
	
	Transport.prototype.onPacket = function (packet) {
	  this.emit('packet', packet);
	};
	
	/**
	 * Called upon close.
	 *
	 * @api private
	 */
	
	Transport.prototype.onClose = function () {
	  this.readyState = 'closed';
	  this.emit('close');
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	/**
	 * Module dependencies.
	 */
	
	var keys = __webpack_require__(39);
	var hasBinary = __webpack_require__(40);
	var sliceBuffer = __webpack_require__(41);
	var after = __webpack_require__(42);
	var utf8 = __webpack_require__(43);
	
	var base64encoder;
	if (global && global.ArrayBuffer) {
	  base64encoder = __webpack_require__(44);
	}
	
	/**
	 * Check if we are running an android browser. That requires us to use
	 * ArrayBuffer with polling transports...
	 *
	 * http://ghinda.net/jpeg-blob-ajax-android/
	 */
	
	var isAndroid = typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent);
	
	/**
	 * Check if we are running in PhantomJS.
	 * Uploading a Blob with PhantomJS does not work correctly, as reported here:
	 * https://github.com/ariya/phantomjs/issues/11395
	 * @type boolean
	 */
	var isPhantomJS = typeof navigator !== 'undefined' && /PhantomJS/i.test(navigator.userAgent);
	
	/**
	 * When true, avoids using Blobs to encode payloads.
	 * @type boolean
	 */
	var dontSendBlobs = isAndroid || isPhantomJS;
	
	/**
	 * Current protocol version.
	 */
	
	exports.protocol = 3;
	
	/**
	 * Packet types.
	 */
	
	var packets = exports.packets = {
	  open: 0 // non-ws
	  , close: 1 // non-ws
	  , ping: 2,
	  pong: 3,
	  message: 4,
	  upgrade: 5,
	  noop: 6
	};
	
	var packetslist = keys(packets);
	
	/**
	 * Premade error packet.
	 */
	
	var err = { type: 'error', data: 'parser error' };
	
	/**
	 * Create a blob api even for blob builder when vendor prefixes exist
	 */
	
	var Blob = __webpack_require__(45);
	
	/**
	 * Encodes a packet.
	 *
	 *     <packet type id> [ <data> ]
	 *
	 * Example:
	 *
	 *     5hello world
	 *     3
	 *     4
	 *
	 * Binary is encoded in an identical principle
	 *
	 * @api private
	 */
	
	exports.encodePacket = function (packet, supportsBinary, utf8encode, callback) {
	  if ('function' == typeof supportsBinary) {
	    callback = supportsBinary;
	    supportsBinary = false;
	  }
	
	  if ('function' == typeof utf8encode) {
	    callback = utf8encode;
	    utf8encode = null;
	  }
	
	  var data = packet.data === undefined ? undefined : packet.data.buffer || packet.data;
	
	  if (global.ArrayBuffer && data instanceof ArrayBuffer) {
	    return encodeArrayBuffer(packet, supportsBinary, callback);
	  } else if (Blob && data instanceof global.Blob) {
	    return encodeBlob(packet, supportsBinary, callback);
	  }
	
	  // might be an object with { base64: true, data: dataAsBase64String }
	  if (data && data.base64) {
	    return encodeBase64Object(packet, callback);
	  }
	
	  // Sending data as a utf-8 string
	  var encoded = packets[packet.type];
	
	  // data fragment is optional
	  if (undefined !== packet.data) {
	    encoded += utf8encode ? utf8.encode(String(packet.data)) : String(packet.data);
	  }
	
	  return callback('' + encoded);
	};
	
	function encodeBase64Object(packet, callback) {
	  // packet data is an object { base64: true, data: dataAsBase64String }
	  var message = 'b' + exports.packets[packet.type] + packet.data.data;
	  return callback(message);
	}
	
	/**
	 * Encode packet helpers for binary types
	 */
	
	function encodeArrayBuffer(packet, supportsBinary, callback) {
	  if (!supportsBinary) {
	    return exports.encodeBase64Packet(packet, callback);
	  }
	
	  var data = packet.data;
	  var contentArray = new Uint8Array(data);
	  var resultBuffer = new Uint8Array(1 + data.byteLength);
	
	  resultBuffer[0] = packets[packet.type];
	  for (var i = 0; i < contentArray.length; i++) {
	    resultBuffer[i + 1] = contentArray[i];
	  }
	
	  return callback(resultBuffer.buffer);
	}
	
	function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
	  if (!supportsBinary) {
	    return exports.encodeBase64Packet(packet, callback);
	  }
	
	  var fr = new FileReader();
	  fr.onload = function () {
	    packet.data = fr.result;
	    exports.encodePacket(packet, supportsBinary, true, callback);
	  };
	  return fr.readAsArrayBuffer(packet.data);
	}
	
	function encodeBlob(packet, supportsBinary, callback) {
	  if (!supportsBinary) {
	    return exports.encodeBase64Packet(packet, callback);
	  }
	
	  if (dontSendBlobs) {
	    return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
	  }
	
	  var length = new Uint8Array(1);
	  length[0] = packets[packet.type];
	  var blob = new Blob([length.buffer, packet.data]);
	
	  return callback(blob);
	}
	
	/**
	 * Encodes a packet with binary data in a base64 string
	 *
	 * @param {Object} packet, has `type` and `data`
	 * @return {String} base64 encoded message
	 */
	
	exports.encodeBase64Packet = function (packet, callback) {
	  var message = 'b' + exports.packets[packet.type];
	  if (Blob && packet.data instanceof global.Blob) {
	    var fr = new FileReader();
	    fr.onload = function () {
	      var b64 = fr.result.split(',')[1];
	      callback(message + b64);
	    };
	    return fr.readAsDataURL(packet.data);
	  }
	
	  var b64data;
	  try {
	    b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
	  } catch (e) {
	    // iPhone Safari doesn't let you apply with typed arrays
	    var typed = new Uint8Array(packet.data);
	    var basic = new Array(typed.length);
	    for (var i = 0; i < typed.length; i++) {
	      basic[i] = typed[i];
	    }
	    b64data = String.fromCharCode.apply(null, basic);
	  }
	  message += global.btoa(b64data);
	  return callback(message);
	};
	
	/**
	 * Decodes a packet. Changes format to Blob if requested.
	 *
	 * @return {Object} with `type` and `data` (if any)
	 * @api private
	 */
	
	exports.decodePacket = function (data, binaryType, utf8decode) {
	  if (data === undefined) {
	    return err;
	  }
	  // String data
	  if (typeof data == 'string') {
	    if (data.charAt(0) == 'b') {
	      return exports.decodeBase64Packet(data.substr(1), binaryType);
	    }
	
	    if (utf8decode) {
	      data = tryDecode(data);
	      if (data === false) {
	        return err;
	      }
	    }
	    var type = data.charAt(0);
	
	    if (Number(type) != type || !packetslist[type]) {
	      return err;
	    }
	
	    if (data.length > 1) {
	      return { type: packetslist[type], data: data.substring(1) };
	    } else {
	      return { type: packetslist[type] };
	    }
	  }
	
	  var asArray = new Uint8Array(data);
	  var type = asArray[0];
	  var rest = sliceBuffer(data, 1);
	  if (Blob && binaryType === 'blob') {
	    rest = new Blob([rest]);
	  }
	  return { type: packetslist[type], data: rest };
	};
	
	function tryDecode(data) {
	  try {
	    data = utf8.decode(data);
	  } catch (e) {
	    return false;
	  }
	  return data;
	}
	
	/**
	 * Decodes a packet encoded in a base64 string
	 *
	 * @param {String} base64 encoded message
	 * @return {Object} with `type` and `data` (if any)
	 */
	
	exports.decodeBase64Packet = function (msg, binaryType) {
	  var type = packetslist[msg.charAt(0)];
	  if (!base64encoder) {
	    return { type: type, data: { base64: true, data: msg.substr(1) } };
	  }
	
	  var data = base64encoder.decode(msg.substr(1));
	
	  if (binaryType === 'blob' && Blob) {
	    data = new Blob([data]);
	  }
	
	  return { type: type, data: data };
	};
	
	/**
	 * Encodes multiple messages (payload).
	 *
	 *     <length>:data
	 *
	 * Example:
	 *
	 *     11:hello world2:hi
	 *
	 * If any contents are binary, they will be encoded as base64 strings. Base64
	 * encoded strings are marked with a b before the length specifier
	 *
	 * @param {Array} packets
	 * @api private
	 */
	
	exports.encodePayload = function (packets, supportsBinary, callback) {
	  if (typeof supportsBinary == 'function') {
	    callback = supportsBinary;
	    supportsBinary = null;
	  }
	
	  var isBinary = hasBinary(packets);
	
	  if (supportsBinary && isBinary) {
	    if (Blob && !dontSendBlobs) {
	      return exports.encodePayloadAsBlob(packets, callback);
	    }
	
	    return exports.encodePayloadAsArrayBuffer(packets, callback);
	  }
	
	  if (!packets.length) {
	    return callback('0:');
	  }
	
	  function setLengthHeader(message) {
	    return message.length + ':' + message;
	  }
	
	  function encodeOne(packet, doneCallback) {
	    exports.encodePacket(packet, !isBinary ? false : supportsBinary, true, function (message) {
	      doneCallback(null, setLengthHeader(message));
	    });
	  }
	
	  map(packets, encodeOne, function (err, results) {
	    return callback(results.join(''));
	  });
	};
	
	/**
	 * Async array map using after
	 */
	
	function map(ary, each, done) {
	  var result = new Array(ary.length);
	  var next = after(ary.length, done);
	
	  var eachWithIndex = function eachWithIndex(i, el, cb) {
	    each(el, function (error, msg) {
	      result[i] = msg;
	      cb(error, result);
	    });
	  };
	
	  for (var i = 0; i < ary.length; i++) {
	    eachWithIndex(i, ary[i], next);
	  }
	}
	
	/*
	 * Decodes data when a payload is maybe expected. Possible binary contents are
	 * decoded from their base64 representation
	 *
	 * @param {String} data, callback method
	 * @api public
	 */
	
	exports.decodePayload = function (data, binaryType, callback) {
	  if (typeof data != 'string') {
	    return exports.decodePayloadAsBinary(data, binaryType, callback);
	  }
	
	  if (typeof binaryType === 'function') {
	    callback = binaryType;
	    binaryType = null;
	  }
	
	  var packet;
	  if (data == '') {
	    // parser error - ignoring payload
	    return callback(err, 0, 1);
	  }
	
	  var length = '',
	      n,
	      msg;
	
	  for (var i = 0, l = data.length; i < l; i++) {
	    var chr = data.charAt(i);
	
	    if (':' != chr) {
	      length += chr;
	    } else {
	      if ('' == length || length != (n = Number(length))) {
	        // parser error - ignoring payload
	        return callback(err, 0, 1);
	      }
	
	      msg = data.substr(i + 1, n);
	
	      if (length != msg.length) {
	        // parser error - ignoring payload
	        return callback(err, 0, 1);
	      }
	
	      if (msg.length) {
	        packet = exports.decodePacket(msg, binaryType, true);
	
	        if (err.type == packet.type && err.data == packet.data) {
	          // parser error in individual packet - ignoring payload
	          return callback(err, 0, 1);
	        }
	
	        var ret = callback(packet, i + n, l);
	        if (false === ret) return;
	      }
	
	      // advance cursor
	      i += n;
	      length = '';
	    }
	  }
	
	  if (length != '') {
	    // parser error - ignoring payload
	    return callback(err, 0, 1);
	  }
	};
	
	/**
	 * Encodes multiple messages (payload) as binary.
	 *
	 * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
	 * 255><data>
	 *
	 * Example:
	 * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
	 *
	 * @param {Array} packets
	 * @return {ArrayBuffer} encoded payload
	 * @api private
	 */
	
	exports.encodePayloadAsArrayBuffer = function (packets, callback) {
	  if (!packets.length) {
	    return callback(new ArrayBuffer(0));
	  }
	
	  function encodeOne(packet, doneCallback) {
	    exports.encodePacket(packet, true, true, function (data) {
	      return doneCallback(null, data);
	    });
	  }
	
	  map(packets, encodeOne, function (err, encodedPackets) {
	    var totalLength = encodedPackets.reduce(function (acc, p) {
	      var len;
	      if (typeof p === 'string') {
	        len = p.length;
	      } else {
	        len = p.byteLength;
	      }
	      return acc + len.toString().length + len + 2; // string/binary identifier + separator = 2
	    }, 0);
	
	    var resultArray = new Uint8Array(totalLength);
	
	    var bufferIndex = 0;
	    encodedPackets.forEach(function (p) {
	      var isString = typeof p === 'string';
	      var ab = p;
	      if (isString) {
	        var view = new Uint8Array(p.length);
	        for (var i = 0; i < p.length; i++) {
	          view[i] = p.charCodeAt(i);
	        }
	        ab = view.buffer;
	      }
	
	      if (isString) {
	        // not true binary
	        resultArray[bufferIndex++] = 0;
	      } else {
	        // true binary
	        resultArray[bufferIndex++] = 1;
	      }
	
	      var lenStr = ab.byteLength.toString();
	      for (var i = 0; i < lenStr.length; i++) {
	        resultArray[bufferIndex++] = parseInt(lenStr[i]);
	      }
	      resultArray[bufferIndex++] = 255;
	
	      var view = new Uint8Array(ab);
	      for (var i = 0; i < view.length; i++) {
	        resultArray[bufferIndex++] = view[i];
	      }
	    });
	
	    return callback(resultArray.buffer);
	  });
	};
	
	/**
	 * Encode as Blob
	 */
	
	exports.encodePayloadAsBlob = function (packets, callback) {
	  function encodeOne(packet, doneCallback) {
	    exports.encodePacket(packet, true, true, function (encoded) {
	      var binaryIdentifier = new Uint8Array(1);
	      binaryIdentifier[0] = 1;
	      if (typeof encoded === 'string') {
	        var view = new Uint8Array(encoded.length);
	        for (var i = 0; i < encoded.length; i++) {
	          view[i] = encoded.charCodeAt(i);
	        }
	        encoded = view.buffer;
	        binaryIdentifier[0] = 0;
	      }
	
	      var len = encoded instanceof ArrayBuffer ? encoded.byteLength : encoded.size;
	
	      var lenStr = len.toString();
	      var lengthAry = new Uint8Array(lenStr.length + 1);
	      for (var i = 0; i < lenStr.length; i++) {
	        lengthAry[i] = parseInt(lenStr[i]);
	      }
	      lengthAry[lenStr.length] = 255;
	
	      if (Blob) {
	        var blob = new Blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);
	        doneCallback(null, blob);
	      }
	    });
	  }
	
	  map(packets, encodeOne, function (err, results) {
	    return callback(new Blob(results));
	  });
	};
	
	/*
	 * Decodes data when a payload is maybe expected. Strings are decoded by
	 * interpreting each byte as a key code for entries marked to start with 0. See
	 * description of encodePayloadAsBinary
	 *
	 * @param {ArrayBuffer} data, callback method
	 * @api public
	 */
	
	exports.decodePayloadAsBinary = function (data, binaryType, callback) {
	  if (typeof binaryType === 'function') {
	    callback = binaryType;
	    binaryType = null;
	  }
	
	  var bufferTail = data;
	  var buffers = [];
	
	  var numberTooLong = false;
	  while (bufferTail.byteLength > 0) {
	    var tailArray = new Uint8Array(bufferTail);
	    var isString = tailArray[0] === 0;
	    var msgLength = '';
	
	    for (var i = 1;; i++) {
	      if (tailArray[i] == 255) break;
	
	      if (msgLength.length > 310) {
	        numberTooLong = true;
	        break;
	      }
	
	      msgLength += tailArray[i];
	    }
	
	    if (numberTooLong) return callback(err, 0, 1);
	
	    bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
	    msgLength = parseInt(msgLength);
	
	    var msg = sliceBuffer(bufferTail, 0, msgLength);
	    if (isString) {
	      try {
	        msg = String.fromCharCode.apply(null, new Uint8Array(msg));
	      } catch (e) {
	        // iPhone Safari doesn't let you apply to typed arrays
	        var typed = new Uint8Array(msg);
	        msg = '';
	        for (var i = 0; i < typed.length; i++) {
	          msg += String.fromCharCode(typed[i]);
	        }
	      }
	    }
	
	    buffers.push(msg);
	    bufferTail = sliceBuffer(bufferTail, msgLength);
	  }
	
	  var total = buffers.length;
	  buffers.forEach(function (buffer, i) {
	    callback(exports.decodePacket(buffer, binaryType, true), i, total);
	  });
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 39 */
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * Gets the keys for an object.
	 *
	 * @return {Array} keys
	 * @api private
	 */
	
	module.exports = Object.keys || function keys(obj) {
	  var arr = [];
	  var has = Object.prototype.hasOwnProperty;
	
	  for (var i in obj) {
	    if (has.call(obj, i)) {
	      arr.push(i);
	    }
	  }
	  return arr;
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/*
	 * Module requirements.
	 */
	
	var isArray = __webpack_require__(26);
	
	/**
	 * Module exports.
	 */
	
	module.exports = hasBinary;
	
	/**
	 * Checks for binary data.
	 *
	 * Right now only Buffer and ArrayBuffer are supported..
	 *
	 * @param {Object} anything
	 * @api public
	 */
	
	function hasBinary(data) {
	
	  function _hasBinary(obj) {
	    if (!obj) return false;
	
	    if (global.Buffer && global.Buffer.isBuffer(obj) || global.ArrayBuffer && obj instanceof ArrayBuffer || global.Blob && obj instanceof Blob || global.File && obj instanceof File) {
	      return true;
	    }
	
	    if (isArray(obj)) {
	      for (var i = 0; i < obj.length; i++) {
	        if (_hasBinary(obj[i])) {
	          return true;
	        }
	      }
	    } else if (obj && 'object' == (typeof obj === 'undefined' ? 'undefined' : _typeof(obj))) {
	      if (obj.toJSON) {
	        obj = obj.toJSON();
	      }
	
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key) && _hasBinary(obj[key])) {
	          return true;
	        }
	      }
	    }
	
	    return false;
	  }
	
	  return _hasBinary(data);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 41 */
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * An abstraction for slicing an arraybuffer even when
	 * ArrayBuffer.prototype.slice is not supported
	 *
	 * @api public
	 */
	
	module.exports = function (arraybuffer, start, end) {
	  var bytes = arraybuffer.byteLength;
	  start = start || 0;
	  end = end || bytes;
	
	  if (arraybuffer.slice) {
	    return arraybuffer.slice(start, end);
	  }
	
	  if (start < 0) {
	    start += bytes;
	  }
	  if (end < 0) {
	    end += bytes;
	  }
	  if (end > bytes) {
	    end = bytes;
	  }
	
	  if (start >= bytes || start >= end || bytes === 0) {
	    return new ArrayBuffer(0);
	  }
	
	  var abv = new Uint8Array(arraybuffer);
	  var result = new Uint8Array(end - start);
	  for (var i = start, ii = 0; i < end; i++, ii++) {
	    result[ii] = abv[i];
	  }
	  return result.buffer;
	};

/***/ },
/* 42 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = after;
	
	function after(count, callback, err_cb) {
	    var bail = false;
	    err_cb = err_cb || noop;
	    proxy.count = count;
	
	    return count === 0 ? callback() : proxy;
	
	    function proxy(err, result) {
	        if (proxy.count <= 0) {
	            throw new Error('after called too many times');
	        }
	        --proxy.count;
	
	        // after first error, rest are passed to err_cb
	        if (err) {
	            bail = true;
	            callback(err);
	            // future error callbacks will go to error handler
	            callback = err_cb;
	        } else if (proxy.count === 0 && !bail) {
	            callback(null, result);
	        }
	    }
	}
	
	function noop() {}

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/*! https://mths.be/wtf8 v1.0.0 by @mathias */
	;(function (root) {
	
		// Detect free variables `exports`
		var freeExports = ( false ? 'undefined' : _typeof(exports)) == 'object' && exports;
	
		// Detect free variable `module`
		var freeModule = ( false ? 'undefined' : _typeof(module)) == 'object' && module && module.exports == freeExports && module;
	
		// Detect free variable `global`, from Node.js or Browserified code,
		// and use it as `root`
		var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global;
		if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
			root = freeGlobal;
		}
	
		/*--------------------------------------------------------------------------*/
	
		var stringFromCharCode = String.fromCharCode;
	
		// Taken from https://mths.be/punycode
		function ucs2decode(string) {
			var output = [];
			var counter = 0;
			var length = string.length;
			var value;
			var extra;
			while (counter < length) {
				value = string.charCodeAt(counter++);
				if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
					// high surrogate, and there is a next character
					extra = string.charCodeAt(counter++);
					if ((extra & 0xFC00) == 0xDC00) {
						// low surrogate
						output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
					} else {
						// unmatched surrogate; only append this code unit, in case the next
						// code unit is the high surrogate of a surrogate pair
						output.push(value);
						counter--;
					}
				} else {
					output.push(value);
				}
			}
			return output;
		}
	
		// Taken from https://mths.be/punycode
		function ucs2encode(array) {
			var length = array.length;
			var index = -1;
			var value;
			var output = '';
			while (++index < length) {
				value = array[index];
				if (value > 0xFFFF) {
					value -= 0x10000;
					output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
					value = 0xDC00 | value & 0x3FF;
				}
				output += stringFromCharCode(value);
			}
			return output;
		}
	
		/*--------------------------------------------------------------------------*/
	
		function createByte(codePoint, shift) {
			return stringFromCharCode(codePoint >> shift & 0x3F | 0x80);
		}
	
		function encodeCodePoint(codePoint) {
			if ((codePoint & 0xFFFFFF80) == 0) {
				// 1-byte sequence
				return stringFromCharCode(codePoint);
			}
			var symbol = '';
			if ((codePoint & 0xFFFFF800) == 0) {
				// 2-byte sequence
				symbol = stringFromCharCode(codePoint >> 6 & 0x1F | 0xC0);
			} else if ((codePoint & 0xFFFF0000) == 0) {
				// 3-byte sequence
				symbol = stringFromCharCode(codePoint >> 12 & 0x0F | 0xE0);
				symbol += createByte(codePoint, 6);
			} else if ((codePoint & 0xFFE00000) == 0) {
				// 4-byte sequence
				symbol = stringFromCharCode(codePoint >> 18 & 0x07 | 0xF0);
				symbol += createByte(codePoint, 12);
				symbol += createByte(codePoint, 6);
			}
			symbol += stringFromCharCode(codePoint & 0x3F | 0x80);
			return symbol;
		}
	
		function wtf8encode(string) {
			var codePoints = ucs2decode(string);
			var length = codePoints.length;
			var index = -1;
			var codePoint;
			var byteString = '';
			while (++index < length) {
				codePoint = codePoints[index];
				byteString += encodeCodePoint(codePoint);
			}
			return byteString;
		}
	
		/*--------------------------------------------------------------------------*/
	
		function readContinuationByte() {
			if (byteIndex >= byteCount) {
				throw Error('Invalid byte index');
			}
	
			var continuationByte = byteArray[byteIndex] & 0xFF;
			byteIndex++;
	
			if ((continuationByte & 0xC0) == 0x80) {
				return continuationByte & 0x3F;
			}
	
			// If we end up here, it’s not a continuation byte.
			throw Error('Invalid continuation byte');
		}
	
		function decodeSymbol() {
			var byte1;
			var byte2;
			var byte3;
			var byte4;
			var codePoint;
	
			if (byteIndex > byteCount) {
				throw Error('Invalid byte index');
			}
	
			if (byteIndex == byteCount) {
				return false;
			}
	
			// Read the first byte.
			byte1 = byteArray[byteIndex] & 0xFF;
			byteIndex++;
	
			// 1-byte sequence (no continuation bytes)
			if ((byte1 & 0x80) == 0) {
				return byte1;
			}
	
			// 2-byte sequence
			if ((byte1 & 0xE0) == 0xC0) {
				var byte2 = readContinuationByte();
				codePoint = (byte1 & 0x1F) << 6 | byte2;
				if (codePoint >= 0x80) {
					return codePoint;
				} else {
					throw Error('Invalid continuation byte');
				}
			}
	
			// 3-byte sequence (may include unpaired surrogates)
			if ((byte1 & 0xF0) == 0xE0) {
				byte2 = readContinuationByte();
				byte3 = readContinuationByte();
				codePoint = (byte1 & 0x0F) << 12 | byte2 << 6 | byte3;
				if (codePoint >= 0x0800) {
					return codePoint;
				} else {
					throw Error('Invalid continuation byte');
				}
			}
	
			// 4-byte sequence
			if ((byte1 & 0xF8) == 0xF0) {
				byte2 = readContinuationByte();
				byte3 = readContinuationByte();
				byte4 = readContinuationByte();
				codePoint = (byte1 & 0x0F) << 0x12 | byte2 << 0x0C | byte3 << 0x06 | byte4;
				if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
					return codePoint;
				}
			}
	
			throw Error('Invalid WTF-8 detected');
		}
	
		var byteArray;
		var byteCount;
		var byteIndex;
		function wtf8decode(byteString) {
			byteArray = ucs2decode(byteString);
			byteCount = byteArray.length;
			byteIndex = 0;
			var codePoints = [];
			var tmp;
			while ((tmp = decodeSymbol()) !== false) {
				codePoints.push(tmp);
			}
			return ucs2encode(codePoints);
		}
	
		/*--------------------------------------------------------------------------*/
	
		var wtf8 = {
			'version': '1.0.0',
			'encode': wtf8encode,
			'decode': wtf8decode
		};
	
		// Some AMD build optimizers, like r.js, check for specific condition patterns
		// like the following:
		if ("function" == 'function' && _typeof(__webpack_require__(23)) == 'object' && __webpack_require__(23)) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return wtf8;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (freeExports && !freeExports.nodeType) {
			if (freeModule) {
				// in Node.js or RingoJS v0.8.0+
				freeModule.exports = wtf8;
			} else {
				// in Narwhal or RingoJS v0.7.0-
				var object = {};
				var hasOwnProperty = object.hasOwnProperty;
				for (var key in wtf8) {
					hasOwnProperty.call(wtf8, key) && (freeExports[key] = wtf8[key]);
				}
			}
		} else {
			// in Rhino or a web browser
			root.wtf8 = wtf8;
		}
	})(undefined);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)(module), (function() { return this; }())))

/***/ },
/* 44 */
/***/ function(module, exports) {

	"use strict";
	
	/*
	 * base64-arraybuffer
	 * https://github.com/niklasvh/base64-arraybuffer
	 *
	 * Copyright (c) 2012 Niklas von Hertzen
	 * Licensed under the MIT license.
	 */
	(function () {
	  "use strict";
	
	  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	
	  // Use a lookup table to find the index.
	  var lookup = new Uint8Array(256);
	  for (var i = 0; i < chars.length; i++) {
	    lookup[chars.charCodeAt(i)] = i;
	  }
	
	  exports.encode = function (arraybuffer) {
	    var bytes = new Uint8Array(arraybuffer),
	        i,
	        len = bytes.length,
	        base64 = "";
	
	    for (i = 0; i < len; i += 3) {
	      base64 += chars[bytes[i] >> 2];
	      base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
	      base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
	      base64 += chars[bytes[i + 2] & 63];
	    }
	
	    if (len % 3 === 2) {
	      base64 = base64.substring(0, base64.length - 1) + "=";
	    } else if (len % 3 === 1) {
	      base64 = base64.substring(0, base64.length - 2) + "==";
	    }
	
	    return base64;
	  };
	
	  exports.decode = function (base64) {
	    var bufferLength = base64.length * 0.75,
	        len = base64.length,
	        i,
	        p = 0,
	        encoded1,
	        encoded2,
	        encoded3,
	        encoded4;
	
	    if (base64[base64.length - 1] === "=") {
	      bufferLength--;
	      if (base64[base64.length - 2] === "=") {
	        bufferLength--;
	      }
	    }
	
	    var arraybuffer = new ArrayBuffer(bufferLength),
	        bytes = new Uint8Array(arraybuffer);
	
	    for (i = 0; i < len; i += 4) {
	      encoded1 = lookup[base64.charCodeAt(i)];
	      encoded2 = lookup[base64.charCodeAt(i + 1)];
	      encoded3 = lookup[base64.charCodeAt(i + 2)];
	      encoded4 = lookup[base64.charCodeAt(i + 3)];
	
	      bytes[p++] = encoded1 << 2 | encoded2 >> 4;
	      bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
	      bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
	    }
	
	    return arraybuffer;
	  };
	})();

/***/ },
/* 45 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	/**
	 * Create a blob builder even when vendor prefixes exist
	 */
	
	var BlobBuilder = global.BlobBuilder || global.WebKitBlobBuilder || global.MSBlobBuilder || global.MozBlobBuilder;
	
	/**
	 * Check if Blob constructor is supported
	 */
	
	var blobSupported = function () {
	  try {
	    var a = new Blob(['hi']);
	    return a.size === 2;
	  } catch (e) {
	    return false;
	  }
	}();
	
	/**
	 * Check if Blob constructor supports ArrayBufferViews
	 * Fails in Safari 6, so we need to map to ArrayBuffers there.
	 */
	
	var blobSupportsArrayBufferView = blobSupported && function () {
	  try {
	    var b = new Blob([new Uint8Array([1, 2])]);
	    return b.size === 2;
	  } catch (e) {
	    return false;
	  }
	}();
	
	/**
	 * Check if BlobBuilder is supported
	 */
	
	var blobBuilderSupported = BlobBuilder && BlobBuilder.prototype.append && BlobBuilder.prototype.getBlob;
	
	/**
	 * Helper function that maps ArrayBufferViews to ArrayBuffers
	 * Used by BlobBuilder constructor and old browsers that didn't
	 * support it in the Blob constructor.
	 */
	
	function mapArrayBufferViews(ary) {
	  for (var i = 0; i < ary.length; i++) {
	    var chunk = ary[i];
	    if (chunk.buffer instanceof ArrayBuffer) {
	      var buf = chunk.buffer;
	
	      // if this is a subarray, make a copy so we only
	      // include the subarray region from the underlying buffer
	      if (chunk.byteLength !== buf.byteLength) {
	        var copy = new Uint8Array(chunk.byteLength);
	        copy.set(new Uint8Array(buf, chunk.byteOffset, chunk.byteLength));
	        buf = copy.buffer;
	      }
	
	      ary[i] = buf;
	    }
	  }
	}
	
	function BlobBuilderConstructor(ary, options) {
	  options = options || {};
	
	  var bb = new BlobBuilder();
	  mapArrayBufferViews(ary);
	
	  for (var i = 0; i < ary.length; i++) {
	    bb.append(ary[i]);
	  }
	
	  return options.type ? bb.getBlob(options.type) : bb.getBlob();
	};
	
	function BlobConstructor(ary, options) {
	  mapArrayBufferViews(ary);
	  return new Blob(ary, options || {});
	};
	
	module.exports = function () {
	  if (blobSupported) {
	    return blobSupportsArrayBufferView ? global.Blob : BlobConstructor;
	  } else if (blobBuilderSupported) {
	    return BlobBuilderConstructor;
	  } else {
	    return undefined;
	  }
	}();
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 46 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Compiles a querystring
	 * Returns string representation of the object
	 *
	 * @param {Object}
	 * @api private
	 */
	
	exports.encode = function (obj) {
	  var str = '';
	
	  for (var i in obj) {
	    if (obj.hasOwnProperty(i)) {
	      if (str.length) str += '&';
	      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
	    }
	  }
	
	  return str;
	};
	
	/**
	 * Parses a simple querystring into an object
	 *
	 * @param {String} qs
	 * @api private
	 */
	
	exports.decode = function (qs) {
	  var qry = {};
	  var pairs = qs.split('&');
	  for (var i = 0, l = pairs.length; i < l; i++) {
	    var pair = pairs[i].split('=');
	    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
	  }
	  return qry;
	};

/***/ },
/* 47 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (a, b) {
	  var fn = function fn() {};
	  fn.prototype = b.prototype;
	  a.prototype = new fn();
	  a.prototype.constructor = a;
	};

/***/ },
/* 48 */
/***/ function(module, exports) {

	'use strict';
	
	var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''),
	    length = 64,
	    map = {},
	    seed = 0,
	    i = 0,
	    prev;
	
	/**
	 * Return a string representing the specified number.
	 *
	 * @param {Number} num The number to convert.
	 * @returns {String} The string representation of the number.
	 * @api public
	 */
	function encode(num) {
	  var encoded = '';
	
	  do {
	    encoded = alphabet[num % length] + encoded;
	    num = Math.floor(num / length);
	  } while (num > 0);
	
	  return encoded;
	}
	
	/**
	 * Return the integer value specified by the given string.
	 *
	 * @param {String} str The string to convert.
	 * @returns {Number} The integer value represented by the string.
	 * @api public
	 */
	function decode(str) {
	  var decoded = 0;
	
	  for (i = 0; i < str.length; i++) {
	    decoded = decoded * length + map[str.charAt(i)];
	  }
	
	  return decoded;
	}
	
	/**
	 * Yeast: A tiny growing id generator.
	 *
	 * @returns {String} A unique id.
	 * @api public
	 */
	function yeast() {
	  var now = encode(+new Date());
	
	  if (now !== prev) return seed = 0, prev = now;
	  return now + '.' + encode(seed++);
	}
	
	//
	// Map each character to its index.
	//
	for (; i < length; i++) {
	  map[alphabet[i]] = i;
	} //
	// Expose the `yeast`, `encode` and `decode` functions.
	//
	yeast.encode = encode;
	yeast.decode = decode;
	module.exports = yeast;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/**
	 * This is the web browser implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */
	
	exports = module.exports = __webpack_require__(50);
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();
	
	/**
	 * Colors.
	 */
	
	exports.colors = ['lightseagreen', 'forestgreen', 'goldenrod', 'dodgerblue', 'darkorchid', 'crimson'];
	
	/**
	 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
	 * and the Firebug extension (any Firefox version) are known
	 * to support "%c" CSS customizations.
	 *
	 * TODO: add a `localStorage` variable to explicitly enable/disable colors
	 */
	
	function useColors() {
	  // is webkit? http://stackoverflow.com/a/16459606/376773
	  return 'WebkitAppearance' in document.documentElement.style ||
	  // is firebug? http://stackoverflow.com/a/398120/376773
	  window.console && (console.firebug || console.exception && console.table) ||
	  // is firefox >= v31?
	  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
	  navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31;
	}
	
	/**
	 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	 */
	
	exports.formatters.j = function (v) {
	  return JSON.stringify(v);
	};
	
	/**
	 * Colorize log arguments if enabled.
	 *
	 * @api public
	 */
	
	function formatArgs() {
	  var args = arguments;
	  var useColors = this.useColors;
	
	  args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);
	
	  if (!useColors) return args;
	
	  var c = 'color: ' + this.color;
	  args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));
	
	  // the final "%c" is somewhat tricky, because there could be other
	  // arguments passed either before or after the %c, so we need to
	  // figure out the correct index to insert the CSS into
	  var index = 0;
	  var lastC = 0;
	  args[0].replace(/%[a-z%]/g, function (match) {
	    if ('%%' === match) return;
	    index++;
	    if ('%c' === match) {
	      // we only are interested in the *last* %c
	      // (the user may have provided their own)
	      lastC = index;
	    }
	  });
	
	  args.splice(lastC, 0, c);
	  return args;
	}
	
	/**
	 * Invokes `console.log()` when available.
	 * No-op when `console.log` is not a "function".
	 *
	 * @api public
	 */
	
	function log() {
	  // this hackery is required for IE8/9, where
	  // the `console.log` function doesn't have 'apply'
	  return 'object' === (typeof console === 'undefined' ? 'undefined' : _typeof(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments);
	}
	
	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */
	
	function save(namespaces) {
	  try {
	    if (null == namespaces) {
	      exports.storage.removeItem('debug');
	    } else {
	      exports.storage.debug = namespaces;
	    }
	  } catch (e) {}
	}
	
	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */
	
	function load() {
	  var r;
	  try {
	    r = exports.storage.debug;
	  } catch (e) {}
	  return r;
	}
	
	/**
	 * Enable namespaces listed in `localStorage.debug` initially.
	 */
	
	exports.enable(load());
	
	/**
	 * Localstorage attempts to return the localstorage.
	 *
	 * This is necessary because safari throws
	 * when a user disables cookies/localstorage
	 * and you attempt to access it.
	 *
	 * @return {LocalStorage}
	 * @api private
	 */
	
	function localstorage() {
	  try {
	    return window.localStorage;
	  } catch (e) {}
	}

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */
	
	exports = module.exports = debug;
	exports.coerce = coerce;
	exports.disable = disable;
	exports.enable = enable;
	exports.enabled = enabled;
	exports.humanize = __webpack_require__(51);
	
	/**
	 * The currently active debug mode names, and names to skip.
	 */
	
	exports.names = [];
	exports.skips = [];
	
	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lowercased letter, i.e. "n".
	 */
	
	exports.formatters = {};
	
	/**
	 * Previously assigned color.
	 */
	
	var prevColor = 0;
	
	/**
	 * Previous log timestamp.
	 */
	
	var prevTime;
	
	/**
	 * Select a color.
	 *
	 * @return {Number}
	 * @api private
	 */
	
	function selectColor() {
	  return exports.colors[prevColor++ % exports.colors.length];
	}
	
	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */
	
	function debug(namespace) {
	
	  // define the `disabled` version
	  function disabled() {}
	  disabled.enabled = false;
	
	  // define the `enabled` version
	  function enabled() {
	
	    var self = enabled;
	
	    // set `diff` timestamp
	    var curr = +new Date();
	    var ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;
	
	    // add the `color` if not set
	    if (null == self.useColors) self.useColors = exports.useColors();
	    if (null == self.color && self.useColors) self.color = selectColor();
	
	    var args = Array.prototype.slice.call(arguments);
	
	    args[0] = exports.coerce(args[0]);
	
	    if ('string' !== typeof args[0]) {
	      // anything else let's inspect with %o
	      args = ['%o'].concat(args);
	    }
	
	    // apply any `formatters` transformations
	    var index = 0;
	    args[0] = args[0].replace(/%([a-z%])/g, function (match, format) {
	      // if we encounter an escaped % then don't increase the array index
	      if (match === '%%') return match;
	      index++;
	      var formatter = exports.formatters[format];
	      if ('function' === typeof formatter) {
	        var val = args[index];
	        match = formatter.call(self, val);
	
	        // now we need to remove `args[index]` since it's inlined in the `format`
	        args.splice(index, 1);
	        index--;
	      }
	      return match;
	    });
	
	    if ('function' === typeof exports.formatArgs) {
	      args = exports.formatArgs.apply(self, args);
	    }
	    var logFn = enabled.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }
	  enabled.enabled = true;
	
	  var fn = exports.enabled(namespace) ? enabled : disabled;
	
	  fn.namespace = namespace;
	
	  return fn;
	}
	
	/**
	 * Enables a debug mode by namespaces. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} namespaces
	 * @api public
	 */
	
	function enable(namespaces) {
	  exports.save(namespaces);
	
	  var split = (namespaces || '').split(/[\s,]+/);
	  var len = split.length;
	
	  for (var i = 0; i < len; i++) {
	    if (!split[i]) continue; // ignore empty strings
	    namespaces = split[i].replace(/\*/g, '.*?');
	    if (namespaces[0] === '-') {
	      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	    } else {
	      exports.names.push(new RegExp('^' + namespaces + '$'));
	    }
	  }
	}
	
	/**
	 * Disable debug output.
	 *
	 * @api public
	 */
	
	function disable() {
	  exports.enable('');
	}
	
	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */
	
	function enabled(name) {
	  var i, len;
	  for (i = 0, len = exports.skips.length; i < len; i++) {
	    if (exports.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (i = 0, len = exports.names.length; i < len; i++) {
	    if (exports.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	/**
	 * Coerce `val`.
	 *
	 * @param {Mixed} val
	 * @return {Mixed}
	 * @api private
	 */
	
	function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
	}

/***/ },
/* 51 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Helpers.
	 */
	
	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var y = d * 365.25;
	
	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} options
	 * @return {String|Number}
	 * @api public
	 */
	
	module.exports = function (val, options) {
	  options = options || {};
	  if ('string' == typeof val) return parse(val);
	  return options.long ? long(val) : short(val);
	};
	
	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */
	
	function parse(str) {
	  str = '' + str;
	  if (str.length > 10000) return;
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
	  if (!match) return;
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	  }
	}
	
	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */
	
	function short(ms) {
	  if (ms >= d) return Math.round(ms / d) + 'd';
	  if (ms >= h) return Math.round(ms / h) + 'h';
	  if (ms >= m) return Math.round(ms / m) + 'm';
	  if (ms >= s) return Math.round(ms / s) + 's';
	  return ms + 'ms';
	}
	
	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */
	
	function long(ms) {
	  return plural(ms, d, 'day') || plural(ms, h, 'hour') || plural(ms, m, 'minute') || plural(ms, s, 'second') || ms + ' ms';
	}
	
	/**
	 * Pluralization helper.
	 */
	
	function plural(ms, n, name) {
	  if (ms < n) return;
	  if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
	  return Math.ceil(ms / n) + ' ' + name + 's';
	}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	/**
	 * Module requirements.
	 */
	
	var Polling = __webpack_require__(36);
	var inherit = __webpack_require__(47);
	
	/**
	 * Module exports.
	 */
	
	module.exports = JSONPPolling;
	
	/**
	 * Cached regular expressions.
	 */
	
	var rNewline = /\n/g;
	var rEscapedNewline = /\\n/g;
	
	/**
	 * Global JSONP callbacks.
	 */
	
	var callbacks;
	
	/**
	 * Noop.
	 */
	
	function empty() {}
	
	/**
	 * JSONP Polling constructor.
	 *
	 * @param {Object} opts.
	 * @api public
	 */
	
	function JSONPPolling(opts) {
	  Polling.call(this, opts);
	
	  this.query = this.query || {};
	
	  // define global callbacks array if not present
	  // we do this here (lazily) to avoid unneeded global pollution
	  if (!callbacks) {
	    // we need to consider multiple engines in the same page
	    if (!global.___eio) global.___eio = [];
	    callbacks = global.___eio;
	  }
	
	  // callback identifier
	  this.index = callbacks.length;
	
	  // add callback to jsonp global
	  var self = this;
	  callbacks.push(function (msg) {
	    self.onData(msg);
	  });
	
	  // append to query string
	  this.query.j = this.index;
	
	  // prevent spurious errors from being emitted when the window is unloaded
	  if (global.document && global.addEventListener) {
	    global.addEventListener('beforeunload', function () {
	      if (self.script) self.script.onerror = empty;
	    }, false);
	  }
	}
	
	/**
	 * Inherits from Polling.
	 */
	
	inherit(JSONPPolling, Polling);
	
	/*
	 * JSONP only supports binary as base64 encoded strings
	 */
	
	JSONPPolling.prototype.supportsBinary = false;
	
	/**
	 * Closes the socket.
	 *
	 * @api private
	 */
	
	JSONPPolling.prototype.doClose = function () {
	  if (this.script) {
	    this.script.parentNode.removeChild(this.script);
	    this.script = null;
	  }
	
	  if (this.form) {
	    this.form.parentNode.removeChild(this.form);
	    this.form = null;
	    this.iframe = null;
	  }
	
	  Polling.prototype.doClose.call(this);
	};
	
	/**
	 * Starts a poll cycle.
	 *
	 * @api private
	 */
	
	JSONPPolling.prototype.doPoll = function () {
	  var self = this;
	  var script = document.createElement('script');
	
	  if (this.script) {
	    this.script.parentNode.removeChild(this.script);
	    this.script = null;
	  }
	
	  script.async = true;
	  script.src = this.uri();
	  script.onerror = function (e) {
	    self.onError('jsonp poll error', e);
	  };
	
	  var insertAt = document.getElementsByTagName('script')[0];
	  if (insertAt) {
	    insertAt.parentNode.insertBefore(script, insertAt);
	  } else {
	    (document.head || document.body).appendChild(script);
	  }
	  this.script = script;
	
	  var isUAgecko = 'undefined' !== typeof navigator && /gecko/i.test(navigator.userAgent);
	
	  if (isUAgecko) {
	    setTimeout(function () {
	      var iframe = document.createElement('iframe');
	      document.body.appendChild(iframe);
	      document.body.removeChild(iframe);
	    }, 100);
	  }
	};
	
	/**
	 * Writes with a hidden iframe.
	 *
	 * @param {String} data to send
	 * @param {Function} called upon flush.
	 * @api private
	 */
	
	JSONPPolling.prototype.doWrite = function (data, fn) {
	  var self = this;
	
	  if (!this.form) {
	    var form = document.createElement('form');
	    var area = document.createElement('textarea');
	    var id = this.iframeId = 'eio_iframe_' + this.index;
	    var iframe;
	
	    form.className = 'socketio';
	    form.style.position = 'absolute';
	    form.style.top = '-1000px';
	    form.style.left = '-1000px';
	    form.target = id;
	    form.method = 'POST';
	    form.setAttribute('accept-charset', 'utf-8');
	    area.name = 'd';
	    form.appendChild(area);
	    document.body.appendChild(form);
	
	    this.form = form;
	    this.area = area;
	  }
	
	  this.form.action = this.uri();
	
	  function complete() {
	    initIframe();
	    fn();
	  }
	
	  function initIframe() {
	    if (self.iframe) {
	      try {
	        self.form.removeChild(self.iframe);
	      } catch (e) {
	        self.onError('jsonp polling iframe removal error', e);
	      }
	    }
	
	    try {
	      // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
	      var html = '<iframe src="javascript:0" name="' + self.iframeId + '">';
	      iframe = document.createElement(html);
	    } catch (e) {
	      iframe = document.createElement('iframe');
	      iframe.name = self.iframeId;
	      iframe.src = 'javascript:0';
	    }
	
	    iframe.id = self.iframeId;
	
	    self.form.appendChild(iframe);
	    self.iframe = iframe;
	  }
	
	  initIframe();
	
	  // escape \n to prevent it from being converted into \r\n by some UAs
	  // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side
	  data = data.replace(rEscapedNewline, '\\\n');
	  this.area.value = data.replace(rNewline, '\\n');
	
	  try {
	    this.form.submit();
	  } catch (e) {}
	
	  if (this.iframe.attachEvent) {
	    this.iframe.onreadystatechange = function () {
	      if (self.iframe.readyState === 'complete') {
	        complete();
	      }
	    };
	  } else {
	    this.iframe.onload = complete;
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	/**
	 * Module dependencies.
	 */
	
	var Transport = __webpack_require__(37);
	var parser = __webpack_require__(38);
	var parseqs = __webpack_require__(46);
	var inherit = __webpack_require__(47);
	var yeast = __webpack_require__(48);
	var debug = __webpack_require__(49)('engine.io-client:websocket');
	var BrowserWebSocket = global.WebSocket || global.MozWebSocket;
	
	/**
	 * Get either the `WebSocket` or `MozWebSocket` globals
	 * in the browser or try to resolve WebSocket-compatible
	 * interface exposed by `ws` for Node-like environment.
	 */
	
	var WebSocket = BrowserWebSocket;
	if (!WebSocket && typeof window === 'undefined') {
	  try {
	    WebSocket = __webpack_require__(54);
	  } catch (e) {}
	}
	
	/**
	 * Module exports.
	 */
	
	module.exports = WS;
	
	/**
	 * WebSocket transport constructor.
	 *
	 * @api {Object} connection options
	 * @api public
	 */
	
	function WS(opts) {
	  var forceBase64 = opts && opts.forceBase64;
	  if (forceBase64) {
	    this.supportsBinary = false;
	  }
	  this.perMessageDeflate = opts.perMessageDeflate;
	  Transport.call(this, opts);
	}
	
	/**
	 * Inherits from Transport.
	 */
	
	inherit(WS, Transport);
	
	/**
	 * Transport name.
	 *
	 * @api public
	 */
	
	WS.prototype.name = 'websocket';
	
	/*
	 * WebSockets support binary
	 */
	
	WS.prototype.supportsBinary = true;
	
	/**
	 * Opens socket.
	 *
	 * @api private
	 */
	
	WS.prototype.doOpen = function () {
	  if (!this.check()) {
	    // let probe timeout
	    return;
	  }
	
	  var uri = this.uri();
	  var protocols = void 0;
	  var opts = {
	    agent: this.agent,
	    perMessageDeflate: this.perMessageDeflate
	  };
	
	  // SSL options for Node.js client
	  opts.pfx = this.pfx;
	  opts.key = this.key;
	  opts.passphrase = this.passphrase;
	  opts.cert = this.cert;
	  opts.ca = this.ca;
	  opts.ciphers = this.ciphers;
	  opts.rejectUnauthorized = this.rejectUnauthorized;
	  if (this.extraHeaders) {
	    opts.headers = this.extraHeaders;
	  }
	
	  try {
	    this.ws = BrowserWebSocket ? new WebSocket(uri) : new WebSocket(uri, protocols, opts);
	  } catch (err) {
	    return this.emit('error', err);
	  }
	
	  if (this.ws.binaryType === undefined) {
	    this.supportsBinary = false;
	  }
	
	  if (this.ws.supports && this.ws.supports.binary) {
	    this.supportsBinary = true;
	    this.ws.binaryType = 'nodebuffer';
	  } else {
	    this.ws.binaryType = 'arraybuffer';
	  }
	
	  this.addEventListeners();
	};
	
	/**
	 * Adds event listeners to the socket
	 *
	 * @api private
	 */
	
	WS.prototype.addEventListeners = function () {
	  var self = this;
	
	  this.ws.onopen = function () {
	    self.onOpen();
	  };
	  this.ws.onclose = function () {
	    self.onClose();
	  };
	  this.ws.onmessage = function (ev) {
	    self.onData(ev.data);
	  };
	  this.ws.onerror = function (e) {
	    self.onError('websocket error', e);
	  };
	};
	
	/**
	 * Writes data to socket.
	 *
	 * @param {Array} array of packets.
	 * @api private
	 */
	
	WS.prototype.write = function (packets) {
	  var self = this;
	  this.writable = false;
	
	  // encodePacket efficient as it uses WS framing
	  // no need for encodePayload
	  var total = packets.length;
	  for (var i = 0, l = total; i < l; i++) {
	    (function (packet) {
	      parser.encodePacket(packet, self.supportsBinary, function (data) {
	        if (!BrowserWebSocket) {
	          // always create a new object (GH-437)
	          var opts = {};
	          if (packet.options) {
	            opts.compress = packet.options.compress;
	          }
	
	          if (self.perMessageDeflate) {
	            var len = 'string' === typeof data ? global.Buffer.byteLength(data) : data.length;
	            if (len < self.perMessageDeflate.threshold) {
	              opts.compress = false;
	            }
	          }
	        }
	
	        // Sometimes the websocket has already been closed but the browser didn't
	        // have a chance of informing us about it yet, in that case send will
	        // throw an error
	        try {
	          if (BrowserWebSocket) {
	            // TypeError is thrown when passing the second argument on Safari
	            self.ws.send(data);
	          } else {
	            self.ws.send(data, opts);
	          }
	        } catch (e) {
	          debug('websocket closed before onclose event');
	        }
	
	        --total || done();
	      });
	    })(packets[i]);
	  }
	
	  function done() {
	    self.emit('flush');
	
	    // fake drain
	    // defer to next tick to allow Socket to clear writeBuffer
	    setTimeout(function () {
	      self.writable = true;
	      self.emit('drain');
	    }, 0);
	  }
	};
	
	/**
	 * Called upon close
	 *
	 * @api private
	 */
	
	WS.prototype.onClose = function () {
	  Transport.prototype.onClose.call(this);
	};
	
	/**
	 * Closes socket.
	 *
	 * @api private
	 */
	
	WS.prototype.doClose = function () {
	  if (typeof this.ws !== 'undefined') {
	    this.ws.close();
	  }
	};
	
	/**
	 * Generates uri for connection.
	 *
	 * @api private
	 */
	
	WS.prototype.uri = function () {
	  var query = this.query || {};
	  var schema = this.secure ? 'wss' : 'ws';
	  var port = '';
	
	  // avoid port if default for schema
	  if (this.port && ('wss' === schema && this.port !== 443 || 'ws' === schema && this.port !== 80)) {
	    port = ':' + this.port;
	  }
	
	  // append timestamp to URI
	  if (this.timestampRequests) {
	    query[this.timestampParam] = yeast();
	  }
	
	  // communicate binary support capabilities
	  if (!this.supportsBinary) {
	    query.b64 = 1;
	  }
	
	  query = parseqs.encode(query);
	
	  // prepend ? to query
	  if (query.length) {
	    query = '?' + query;
	  }
	
	  var ipv6 = this.hostname.indexOf(':') !== -1;
	  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
	};
	
	/**
	 * Feature detection for WebSocket.
	 *
	 * @return {Boolean} whether this transport is available.
	 * @api public
	 */
	
	WS.prototype.check = function () {
	  return !!WebSocket && !('__initialize' in WebSocket && this.name === WS.prototype.name);
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 54 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 55 */
/***/ function(module, exports) {

	"use strict";
	
	var indexOf = [].indexOf;
	
	module.exports = function (arr, obj) {
	  if (indexOf) return arr.indexOf(obj);
	  for (var i = 0; i < arr.length; ++i) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	};

/***/ },
/* 56 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	/**
	 * JSON parse.
	 *
	 * @see Based on jQuery#parseJSON (MIT) and JSON2
	 * @api private
	 */
	
	var rvalidchars = /^[\],:{}\s]*$/;
	var rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
	var rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
	var rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g;
	var rtrimLeft = /^\s+/;
	var rtrimRight = /\s+$/;
	
	module.exports = function parsejson(data) {
	  if ('string' != typeof data || !data) {
	    return null;
	  }
	
	  data = data.replace(rtrimLeft, '').replace(rtrimRight, '');
	
	  // Attempt to parse using the native JSON parser first
	  if (global.JSON && JSON.parse) {
	    return JSON.parse(data);
	  }
	
	  if (rvalidchars.test(data.replace(rvalidescape, '@').replace(rvalidtokens, ']').replace(rvalidbraces, ''))) {
	    return new Function('return ' + data)();
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Module dependencies.
	 */
	
	var parser = __webpack_require__(17);
	var Emitter = __webpack_require__(58);
	var toArray = __webpack_require__(59);
	var on = __webpack_require__(60);
	var bind = __webpack_require__(61);
	var debug = __webpack_require__(14)('socket.io-client:socket');
	var hasBin = __webpack_require__(62);
	
	/**
	 * Module exports.
	 */
	
	module.exports = exports = Socket;
	
	/**
	 * Internal events (blacklisted).
	 * These events can't be emitted by the user.
	 *
	 * @api private
	 */
	
	var events = {
	  connect: 1,
	  connect_error: 1,
	  connect_timeout: 1,
	  connecting: 1,
	  disconnect: 1,
	  error: 1,
	  reconnect: 1,
	  reconnect_attempt: 1,
	  reconnect_failed: 1,
	  reconnect_error: 1,
	  reconnecting: 1,
	  ping: 1,
	  pong: 1
	};
	
	/**
	 * Shortcut to `Emitter#emit`.
	 */
	
	var emit = Emitter.prototype.emit;
	
	/**
	 * `Socket` constructor.
	 *
	 * @api public
	 */
	
	function Socket(io, nsp, opts) {
	  this.io = io;
	  this.nsp = nsp;
	  this.json = this; // compat
	  this.ids = 0;
	  this.acks = {};
	  this.receiveBuffer = [];
	  this.sendBuffer = [];
	  this.connected = false;
	  this.disconnected = true;
	  if (opts && opts.query) {
	    this.query = opts.query;
	  }
	  if (this.io.autoConnect) this.open();
	}
	
	/**
	 * Mix in `Emitter`.
	 */
	
	Emitter(Socket.prototype);
	
	/**
	 * Subscribe to open, close and packet events
	 *
	 * @api private
	 */
	
	Socket.prototype.subEvents = function () {
	  if (this.subs) return;
	
	  var io = this.io;
	  this.subs = [on(io, 'open', bind(this, 'onopen')), on(io, 'packet', bind(this, 'onpacket')), on(io, 'close', bind(this, 'onclose'))];
	};
	
	/**
	 * "Opens" the socket.
	 *
	 * @api public
	 */
	
	Socket.prototype.open = Socket.prototype.connect = function () {
	  if (this.connected) return this;
	
	  this.subEvents();
	  this.io.open(); // ensure open
	  if ('open' === this.io.readyState) this.onopen();
	  this.emit('connecting');
	  return this;
	};
	
	/**
	 * Sends a `message` event.
	 *
	 * @return {Socket} self
	 * @api public
	 */
	
	Socket.prototype.send = function () {
	  var args = toArray(arguments);
	  args.unshift('message');
	  this.emit.apply(this, args);
	  return this;
	};
	
	/**
	 * Override `emit`.
	 * If the event is in `events`, it's emitted normally.
	 *
	 * @param {String} event name
	 * @return {Socket} self
	 * @api public
	 */
	
	Socket.prototype.emit = function (ev) {
	  if (events.hasOwnProperty(ev)) {
	    emit.apply(this, arguments);
	    return this;
	  }
	
	  var args = toArray(arguments);
	  var parserType = parser.EVENT; // default
	  if (hasBin(args)) {
	    parserType = parser.BINARY_EVENT;
	  } // binary
	  var packet = { type: parserType, data: args };
	
	  packet.options = {};
	  packet.options.compress = !this.flags || false !== this.flags.compress;
	
	  // event ack callback
	  if ('function' === typeof args[args.length - 1]) {
	    debug('emitting packet with ack id %d', this.ids);
	    this.acks[this.ids] = args.pop();
	    packet.id = this.ids++;
	  }
	
	  if (this.connected) {
	    this.packet(packet);
	  } else {
	    this.sendBuffer.push(packet);
	  }
	
	  delete this.flags;
	
	  return this;
	};
	
	/**
	 * Sends a packet.
	 *
	 * @param {Object} packet
	 * @api private
	 */
	
	Socket.prototype.packet = function (packet) {
	  packet.nsp = this.nsp;
	  this.io.packet(packet);
	};
	
	/**
	 * Called upon engine `open`.
	 *
	 * @api private
	 */
	
	Socket.prototype.onopen = function () {
	  debug('transport is open - connecting');
	
	  // write connect packet if necessary
	  if ('/' !== this.nsp) {
	    if (this.query) {
	      this.packet({ type: parser.CONNECT, query: this.query });
	    } else {
	      this.packet({ type: parser.CONNECT });
	    }
	  }
	};
	
	/**
	 * Called upon engine `close`.
	 *
	 * @param {String} reason
	 * @api private
	 */
	
	Socket.prototype.onclose = function (reason) {
	  debug('close (%s)', reason);
	  this.connected = false;
	  this.disconnected = true;
	  delete this.id;
	  this.emit('disconnect', reason);
	};
	
	/**
	 * Called with socket packet.
	 *
	 * @param {Object} packet
	 * @api private
	 */
	
	Socket.prototype.onpacket = function (packet) {
	  if (packet.nsp !== this.nsp) return;
	
	  switch (packet.type) {
	    case parser.CONNECT:
	      this.onconnect();
	      break;
	
	    case parser.EVENT:
	      this.onevent(packet);
	      break;
	
	    case parser.BINARY_EVENT:
	      this.onevent(packet);
	      break;
	
	    case parser.ACK:
	      this.onack(packet);
	      break;
	
	    case parser.BINARY_ACK:
	      this.onack(packet);
	      break;
	
	    case parser.DISCONNECT:
	      this.ondisconnect();
	      break;
	
	    case parser.ERROR:
	      this.emit('error', packet.data);
	      break;
	  }
	};
	
	/**
	 * Called upon a server event.
	 *
	 * @param {Object} packet
	 * @api private
	 */
	
	Socket.prototype.onevent = function (packet) {
	  var args = packet.data || [];
	  debug('emitting event %j', args);
	
	  if (null != packet.id) {
	    debug('attaching ack callback to event');
	    args.push(this.ack(packet.id));
	  }
	
	  if (this.connected) {
	    emit.apply(this, args);
	  } else {
	    this.receiveBuffer.push(args);
	  }
	};
	
	/**
	 * Produces an ack callback to emit with an event.
	 *
	 * @api private
	 */
	
	Socket.prototype.ack = function (id) {
	  var self = this;
	  var sent = false;
	  return function () {
	    // prevent double callbacks
	    if (sent) return;
	    sent = true;
	    var args = toArray(arguments);
	    debug('sending ack %j', args);
	
	    var type = hasBin(args) ? parser.BINARY_ACK : parser.ACK;
	    self.packet({
	      type: type,
	      id: id,
	      data: args
	    });
	  };
	};
	
	/**
	 * Called upon a server acknowlegement.
	 *
	 * @param {Object} packet
	 * @api private
	 */
	
	Socket.prototype.onack = function (packet) {
	  var ack = this.acks[packet.id];
	  if ('function' === typeof ack) {
	    debug('calling ack %s with %j', packet.id, packet.data);
	    ack.apply(this, packet.data);
	    delete this.acks[packet.id];
	  } else {
	    debug('bad ack %s', packet.id);
	  }
	};
	
	/**
	 * Called upon server connect.
	 *
	 * @api private
	 */
	
	Socket.prototype.onconnect = function () {
	  this.connected = true;
	  this.disconnected = false;
	  this.emit('connect');
	  this.emitBuffered();
	};
	
	/**
	 * Emit buffered events (received and emitted).
	 *
	 * @api private
	 */
	
	Socket.prototype.emitBuffered = function () {
	  var i;
	  for (i = 0; i < this.receiveBuffer.length; i++) {
	    emit.apply(this, this.receiveBuffer[i]);
	  }
	  this.receiveBuffer = [];
	
	  for (i = 0; i < this.sendBuffer.length; i++) {
	    this.packet(this.sendBuffer[i]);
	  }
	  this.sendBuffer = [];
	};
	
	/**
	 * Called upon server disconnect.
	 *
	 * @api private
	 */
	
	Socket.prototype.ondisconnect = function () {
	  debug('server disconnect (%s)', this.nsp);
	  this.destroy();
	  this.onclose('io server disconnect');
	};
	
	/**
	 * Called upon forced client/server side disconnections,
	 * this method ensures the manager stops tracking us and
	 * that reconnections don't get triggered for this.
	 *
	 * @api private.
	 */
	
	Socket.prototype.destroy = function () {
	  if (this.subs) {
	    // clean subscriptions to avoid reconnections
	    for (var i = 0; i < this.subs.length; i++) {
	      this.subs[i].destroy();
	    }
	    this.subs = null;
	  }
	
	  this.io.destroy(this);
	};
	
	/**
	 * Disconnects the socket manually.
	 *
	 * @return {Socket} self
	 * @api public
	 */
	
	Socket.prototype.close = Socket.prototype.disconnect = function () {
	  if (this.connected) {
	    debug('performing disconnect (%s)', this.nsp);
	    this.packet({ type: parser.DISCONNECT });
	  }
	
	  // remove socket from pool
	  this.destroy();
	
	  if (this.connected) {
	    // fire events
	    this.onclose('io client disconnect');
	  }
	  return this;
	};
	
	/**
	 * Sets the compress flag.
	 *
	 * @param {Boolean} if `true`, compresses the sending data
	 * @return {Socket} self
	 * @api public
	 */
	
	Socket.prototype.compress = function (compress) {
	  this.flags = this.flags || {};
	  this.flags.compress = compress;
	  return this;
	};

/***/ },
/* 58 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Expose `Emitter`.
	 */
	
	module.exports = Emitter;
	
	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */
	
	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};
	
	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */
	
	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}
	
	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
	  this._callbacks = this._callbacks || {};
	  (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
	  return this;
	};
	
	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.once = function (event, fn) {
	  function on() {
	    this.off(event, on);
	    fn.apply(this, arguments);
	  }
	
	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};
	
	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
	  this._callbacks = this._callbacks || {};
	
	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }
	
	  // specific event
	  var callbacks = this._callbacks['$' + event];
	  if (!callbacks) return this;
	
	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks['$' + event];
	    return this;
	  }
	
	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};
	
	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */
	
	Emitter.prototype.emit = function (event) {
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1),
	      callbacks = this._callbacks['$' + event];
	
	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }
	
	  return this;
	};
	
	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */
	
	Emitter.prototype.listeners = function (event) {
	  this._callbacks = this._callbacks || {};
	  return this._callbacks['$' + event] || [];
	};
	
	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */
	
	Emitter.prototype.hasListeners = function (event) {
	  return !!this.listeners(event).length;
	};

/***/ },
/* 59 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = toArray;
	
	function toArray(list, index) {
	    var array = [];
	
	    index = index || 0;
	
	    for (var i = index || 0; i < list.length; i++) {
	        array[i - index] = list[i];
	    }
	
	    return array;
	}

/***/ },
/* 60 */
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * Module exports.
	 */
	
	module.exports = on;
	
	/**
	 * Helper for subscriptions.
	 *
	 * @param {Object|EventEmitter} obj with `Emitter` mixin or `EventEmitter`
	 * @param {String} event name
	 * @param {Function} callback
	 * @api public
	 */
	
	function on(obj, ev, fn) {
	  obj.on(ev, fn);
	  return {
	    destroy: function destroy() {
	      obj.removeListener(ev, fn);
	    }
	  };
	}

/***/ },
/* 61 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Slice reference.
	 */
	
	var slice = [].slice;
	
	/**
	 * Bind `obj` to `fn`.
	 *
	 * @param {Object} obj
	 * @param {Function|String} fn or string
	 * @return {Function}
	 * @api public
	 */
	
	module.exports = function (obj, fn) {
	  if ('string' == typeof fn) fn = obj[fn];
	  if ('function' != typeof fn) throw new Error('bind() requires a function');
	  var args = slice.call(arguments, 2);
	  return function () {
	    return fn.apply(obj, args.concat(slice.call(arguments)));
	  };
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/*
	 * Module requirements.
	 */
	
	var isArray = __webpack_require__(26);
	
	/**
	 * Module exports.
	 */
	
	module.exports = hasBinary;
	
	/**
	 * Checks for binary data.
	 *
	 * Right now only Buffer and ArrayBuffer are supported..
	 *
	 * @param {Object} anything
	 * @api public
	 */
	
	function hasBinary(data) {
	
	  function _hasBinary(obj) {
	    if (!obj) return false;
	
	    if (global.Buffer && global.Buffer.isBuffer && global.Buffer.isBuffer(obj) || global.ArrayBuffer && obj instanceof ArrayBuffer || global.Blob && obj instanceof Blob || global.File && obj instanceof File) {
	      return true;
	    }
	
	    if (isArray(obj)) {
	      for (var i = 0; i < obj.length; i++) {
	        if (_hasBinary(obj[i])) {
	          return true;
	        }
	      }
	    } else if (obj && 'object' == (typeof obj === 'undefined' ? 'undefined' : _typeof(obj))) {
	      // see: https://github.com/Automattic/has-binary/pull/4
	      if (obj.toJSON && 'function' == typeof obj.toJSON) {
	        obj = obj.toJSON();
	      }
	
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key) && _hasBinary(obj[key])) {
	          return true;
	        }
	      }
	    }
	
	    return false;
	  }
	
	  return _hasBinary(data);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 63 */
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * Expose `Backoff`.
	 */
	
	module.exports = Backoff;
	
	/**
	 * Initialize backoff timer with `opts`.
	 *
	 * - `min` initial timeout in milliseconds [100]
	 * - `max` max timeout [10000]
	 * - `jitter` [0]
	 * - `factor` [2]
	 *
	 * @param {Object} opts
	 * @api public
	 */
	
	function Backoff(opts) {
	  opts = opts || {};
	  this.ms = opts.min || 100;
	  this.max = opts.max || 10000;
	  this.factor = opts.factor || 2;
	  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
	  this.attempts = 0;
	}
	
	/**
	 * Return the backoff duration.
	 *
	 * @return {Number}
	 * @api public
	 */
	
	Backoff.prototype.duration = function () {
	  var ms = this.ms * Math.pow(this.factor, this.attempts++);
	  if (this.jitter) {
	    var rand = Math.random();
	    var deviation = Math.floor(rand * this.jitter * ms);
	    ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
	  }
	  return Math.min(ms, this.max) | 0;
	};
	
	/**
	 * Reset the number of attempts.
	 *
	 * @api public
	 */
	
	Backoff.prototype.reset = function () {
	  this.attempts = 0;
	};
	
	/**
	 * Set the minimum duration
	 *
	 * @api public
	 */
	
	Backoff.prototype.setMin = function (min) {
	  this.ms = min;
	};
	
	/**
	 * Set the maximum duration
	 *
	 * @api public
	 */
	
	Backoff.prototype.setMax = function (max) {
	  this.max = max;
	};
	
	/**
	 * Set the jitter
	 *
	 * @api public
	 */
	
	Backoff.prototype.setJitter = function (jitter) {
	  this.jitter = jitter;
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(65)
	
	/* template */
	var __vue_template__ = __webpack_require__(71)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\PaintGame\\app\\app.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-070fd402", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-070fd402", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] app.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(66);

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(67);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(70)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../css-loader/index.js!./../../../less-loader/index.js!./base.less", function() {
				var newContent = require("!!./../../../css-loader/index.js!./../../../less-loader/index.js!./base.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(68)();
	// imports
	exports.i(__webpack_require__(69), "");
	
	// module
	exports.push([module.id, "*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\nhtml {\n  font-size: 62.5%;\n}\nbody {\n  font-family: Roboto, Lato, sans-serif;\n  line-height: 1.5;\n  font-size: 14px;\n  font-weight: 400;\n  width: 100%;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  background-color: #ffffff;\n  color: rgba(0, 0, 0, 0.87);\n}\nbody,\nhtml {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\npre {\n  white-space: pre-wrap;\n  word-break: break-all;\n  margin: 0;\n}\na {\n  text-decoration: none;\n  color: #ff4081;\n  user-select: none;\n  -webkit-user-select: none;\n}\n", ""]);
	
	// exports


/***/ },
/* 68 */
/***/ function(module, exports) {

	"use strict";
	
	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(68)();
	// imports
	
	
	// module
	exports.push([module.id, "/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Prevent adjustments of font size after orientation changes in IE and iOS.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n * 2. Add the correct display in IE.\n */\n\narticle,\naside,\ndetails, /* 1 */\nfigcaption,\nfigure,\nfooter,\nheader,\nmain, /* 2 */\nmenu,\nnav,\nsection,\nsummary { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Add the correct display in IE 10-.\n * 1. Add the correct display in IE.\n */\n\ntemplate, /* 1 */\n[hidden] {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change font properties to `inherit` in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\nselect,\ntextarea {\n  font: inherit; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Restore the font weight unset by the previous rule.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on OS X.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Correct the text style of placeholders in Chrome, Edge, and Safari.\n */\n\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n", ""]);
	
	// exports


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('router-view')
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-070fd402", module.exports)
	  }
	}

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vueRouter = __webpack_require__(7);
	
	var _vueRouter2 = _interopRequireDefault(_vueRouter);
	
	var _home = __webpack_require__(73);
	
	var _home2 = _interopRequireDefault(_home);
	
	var _userEnter = __webpack_require__(212);
	
	var _userEnter2 = _interopRequireDefault(_userEnter);
	
	var _room = __webpack_require__(241);
	
	var _room2 = _interopRequireDefault(_room);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var router = new _vueRouter2.default({
	  base: 'paintGame/',
	  routes: [{
	    name: 'home',
	    path: '/home',
	    component: _home2.default
	  }, {
	    name: 'userEnter',
	    path: '/',
	    component: _userEnter2.default
	  }, {
	    name: 'room',
	    path: '/room',
	    component: _room2.default
	  }]
	});
	
	exports.default = router;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(74)
	
	/* script */
	__vue_exports__ = __webpack_require__(77)
	
	/* template */
	var __vue_template__ = __webpack_require__(211)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\PaintGame\\app\\pages\\home.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-e67965b4", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-e67965b4", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] home.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(75);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(76)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-e67965b4!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./home.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-e67965b4!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./home.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(68)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.page-content {\n  padding-top: 56px;\n}\n.page-content .page-content-wrapper {\n  padding-top: 48px;\n  padding-right: 72px;\n  padding-bottom: 48px;\n  padding-left: 72px;\n}\n@media (max-width: 993px) {\n.page-content .page-content-wrapper {\n    padding-top: 24px;\n    padding-right: 36px;\n    padding-bottom: 24px;\n    padding-left: 36px;\n}\n}\n@media (min-width: 480px) {\n.page-content {\n    padding-top: 64px;\n}\n}\n", "", {"version":3,"sources":["/./app/pages/home.vue"],"names":[],"mappings":";AAAA;EACE,kBAAkB;CACnB;AACD;EACE,kBAAkB;EAClB,oBAAoB;EACpB,qBAAqB;EACrB,mBAAmB;CACpB;AACD;AACE;IACE,kBAAkB;IAClB,oBAAoB;IACpB,qBAAqB;IACrB,mBAAmB;CACpB;CACF;AACD;AACE;IACE,kBAAkB;CACnB;CACF","file":"home.vue","sourcesContent":[".page-content {\n  padding-top: 56px;\n}\n.page-content .page-content-wrapper {\n  padding-top: 48px;\n  padding-right: 72px;\n  padding-bottom: 48px;\n  padding-left: 72px;\n}\n@media (max-width: 993px) {\n  .page-content .page-content-wrapper {\n    padding-top: 24px;\n    padding-right: 36px;\n    padding-bottom: 24px;\n    padding-left: 36px;\n  }\n}\n@media (min-width: 480px) {\n  .page-content {\n    padding-top: 64px;\n  }\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _navgation = __webpack_require__(78);
	
	var _navgation2 = _interopRequireDefault(_navgation);
	
	var _avatar_ = __webpack_require__(178);
	
	var _avatar_2 = _interopRequireDefault(_avatar_);
	
	var _avatar = __webpack_require__(88);
	
	var _avatar2 = _interopRequireDefault(_avatar);
	
	var _icon = __webpack_require__(93);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	var _raisedButton = __webpack_require__(179);
	
	var _raisedButton2 = _interopRequireDefault(_raisedButton);
	
	var _snackbar = __webpack_require__(185);
	
	var _snackbar2 = _interopRequireDefault(_snackbar);
	
	var _subHeader = __webpack_require__(198);
	
	var _subHeader2 = _interopRequireDefault(_subHeader);
	
	var _divider = __webpack_require__(204);
	
	var _divider2 = _interopRequireDefault(_divider);
	
	var _list = __webpack_require__(161);
	
	var _mutationTypes = __webpack_require__(210);
	
	var types = _interopRequireWildcard(_mutationTypes);
	
	var _vuex = __webpack_require__(6);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  computed: (0, _vuex.mapGetters)({
	    userName: 'userName',
	    usersNumber: 'usersNumber',
	    newUserName: 'newUserName',
	    seat: 'seat',
	    seatLastId: 'seatLastId',
	    curSeatId: 'curSeatId'
	  }),
	  created: function created() {
	    this.$store.commit(types.SEAT_INIT);
	  },
	  data: function data() {
	    return {
	      snackbar: false,
	      message: '',
	      avatar_1: _avatar_2.default
	    };
	  },
	
	  components: {
	    avatar: _avatar2.default,
	    icon: _icon2.default,
	    navgation: _navgation2.default,
	    raisedButton: _raisedButton2.default,
	    snackbar: _snackbar2.default,
	    subHeader: _subHeader2.default,
	    divider: _divider2.default,
	    list: _list.list,
	    listItem: _list.listItem
	  },
	  methods: {
	    sit: function sit(index, user) {
	      var _this = this;
	
	      user.userName = this.userName;
	      user.seatState = false;
	      setTimeout(function () {
	        var seatLastId = _this.seatLastId;
	        _this.$socket.emit('user_sit', { index: index, user: user, seatLastId: seatLastId });
	        _this.$store.commit(types.USER_SIT, { index: index, user: user });
	      }, 100);
	    },
	    showSnackbar: function showSnackbar(message) {
	      var _this2 = this;
	
	      this.message = message;
	      this.snackbar = true;
	      if (this.snackTimer) clearTimeout(this.snackTimer);
	      this.snackTimer = setTimeout(function () {
	        _this2.snackbar = false;
	      }, 5000);
	    },
	    hideSnackbar: function hideSnackbar() {
	      this.snackbar = false;
	      if (this.snackTimer) clearTimeout(this.snackTimer);
	    },
	    startGame: function startGame() {
	      this.$socket.emit('start_game');
	    }
	  },
	  watch: {
	    usersNumber: function usersNumber() {
	      this.showSnackbar(this.newUserName + "玩家加入游戏");
	    }
	  }
	}; //
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

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(79)
	
	/* script */
	__vue_exports__ = __webpack_require__(81)
	
	/* template */
	var __vue_template__ = __webpack_require__(177)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\PaintGame\\app\\components\\navgation.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-45b26cfa", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-45b26cfa", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] navgation.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(80);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(76)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-45b26cfa!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./navgation.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-45b26cfa!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./navgation.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(68)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.footer {\n  overflow: hidden;\n  position: fixed;\n  bottom: 0px;\n  width: 100%;\n}\n.header {\n  overflow: hidden;\n  position: fixed;\n  top: 0px;\n  width: 100%;\n}\n", "", {"version":3,"sources":["/./app/components/navgation.vue"],"names":[],"mappings":";AAAA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,YAAY;EACZ,YAAY;CACb;AACD;EACE,iBAAiB;EACjB,gBAAgB;EAChB,SAAS;EACT,YAAY;CACb","file":"navgation.vue","sourcesContent":[".footer {\n  overflow: hidden;\n  position: fixed;\n  bottom: 0px;\n  width: 100%;\n}\n.header {\n  overflow: hidden;\n  position: fixed;\n  top: 0px;\n  width: 100%;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _appbar = __webpack_require__(82);
	
	var _appbar2 = _interopRequireDefault(_appbar);
	
	var _avatar = __webpack_require__(88);
	
	var _avatar2 = _interopRequireDefault(_avatar);
	
	var _iconButton = __webpack_require__(102);
	
	var _iconButton2 = _interopRequireDefault(_iconButton);
	
	var _bottomNav = __webpack_require__(132);
	
	var _drawer = __webpack_require__(142);
	
	var _drawer2 = _interopRequireDefault(_drawer);
	
	var _list = __webpack_require__(161);
	
	var _utils = __webpack_require__(98);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {
	      bottomNav: 'movies',
	      open: false,
	      docked: true
	    };
	  },
	
	  methods: {
	    handleChange: function handleChange(val) {
	      this.bottomNav = val;
	    },
	    toggle: function toggle(flag) {
	      this.open = !this.open, this.docked = !flag;
	    }
	  },
	  components: {
	    appbar: _appbar2.default,
	    avatar: _avatar2.default,
	    bottomNav: _bottomNav.bottomNav,
	    bottomNavItem: _bottomNav.bottomNavItem,
	    drawer: _drawer2.default,
	    iconButton: _iconButton2.default,
	    list: _list.list,
	    listItem: _list.listItem
	  },
	  created: function created() {
	    (0, _utils.retina)();
	  }
	}; //
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

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _appbar = __webpack_require__(83);
	
	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_appbar).default;
	  }
	});

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(84)
	
	/* script */
	__vue_exports__ = __webpack_require__(86)
	
	/* template */
	var __vue_template__ = __webpack_require__(87)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\PaintGame\\node_modules\\muse-ui\\src\\appbar\\appbar.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-52fd9fd1", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-52fd9fd1", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] appbar.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(85);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(76)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-52fd9fd1!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./appbar.vue", function() {
				var newContent = require("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-52fd9fd1!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./appbar.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(68)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.mu-appbar {\n  display: flex;\n  align-self: flex-start;\n  justify-content: flex-start;\n  align-items: center;\n  color: #ffffff;\n  background-color: #03a9f4;\n  height: 56px;\n  padding: 0 8px;\n  width: 100%;\n  -webkit-box-flex: 0;\n  -webkit-flex-shrink: 0;\n  -ms-flex: 0 0 auto;\n  flex-shrink: 0;\n  z-index: 100;\n}\n.mu-appbar > .left,\n.mu-appbar > .right {\n  -webkit-box-flex: 0;\n  -webkit-flex-shrink: 0;\n  -ms-flex: 0 0 auto;\n  flex-shrink: 0;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  height: 100%;\n}\n.mu-appbar .mu-icon-button {\n  color: inherit;\n}\n.mu-appbar .mu-flat-button {\n  color: inherit;\n  height: 100%;\n  line-height: 100%;\n  min-width: auto;\n}\n.mu-appbar-title {\n  flex: 1;\n  padding-left: 8px;\n  padding-right: 8px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 56px;\n}\n@media (min-width: 480px) {\n.mu-appbar-title {\n    line-height: 64px;\n}\n.mu-appbar {\n    height: 64px;\n}\n.mu-appbar-title {\n    font-size: 24px;\n}\n}\n", "", {"version":3,"sources":["/./node_modules/muse-ui/src/appbar/appbar.vue"],"names":[],"mappings":";AAAA;EACE,cAAc;EACd,uBAAuB;EACvB,4BAA4B;EAC5B,oBAAoB;EACpB,eAAe;EACf,0BAA0B;EAC1B,aAAa;EACb,eAAe;EACf,YAAY;EACZ,oBAAoB;EACpB,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,aAAa;CACd;AACD;;EAEE,oBAAoB;EACpB,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,cAAc;EACd,4BAA4B;EAC5B,oBAAoB;EACpB,aAAa;CACd;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;EACf,aAAa;EACb,kBAAkB;EAClB,gBAAgB;CACjB;AACD;EACE,QAAQ;EACR,kBAAkB;EAClB,mBAAmB;EACnB,oBAAoB;EACpB,wBAAwB;EACxB,iBAAiB;EACjB,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;CACnB;AACD;AACE;IACE,kBAAkB;CACnB;AACD;IACE,aAAa;CACd;AACD;IACE,gBAAgB;CACjB;CACF","file":"appbar.vue","sourcesContent":[".mu-appbar {\n  display: flex;\n  align-self: flex-start;\n  justify-content: flex-start;\n  align-items: center;\n  color: #ffffff;\n  background-color: #03a9f4;\n  height: 56px;\n  padding: 0 8px;\n  width: 100%;\n  -webkit-box-flex: 0;\n  -webkit-flex-shrink: 0;\n  -ms-flex: 0 0 auto;\n  flex-shrink: 0;\n  z-index: 100;\n}\n.mu-appbar > .left,\n.mu-appbar > .right {\n  -webkit-box-flex: 0;\n  -webkit-flex-shrink: 0;\n  -ms-flex: 0 0 auto;\n  flex-shrink: 0;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  height: 100%;\n}\n.mu-appbar .mu-icon-button {\n  color: inherit;\n}\n.mu-appbar .mu-flat-button {\n  color: inherit;\n  height: 100%;\n  line-height: 100%;\n  min-width: auto;\n}\n.mu-appbar-title {\n  flex: 1;\n  padding-left: 8px;\n  padding-right: 8px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 56px;\n}\n@media (min-width: 480px) {\n  .mu-appbar-title {\n    line-height: 64px;\n  }\n  .mu-appbar {\n    height: 64px;\n  }\n  .mu-appbar-title {\n    font-size: 24px;\n  }\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 86 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
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
	
	exports.default = {
	  name: 'mu-appbar',
	  props: {
	    title: {
	      type: String,
	      default: ''
	    },
	    zDepth: {
	      type: Number,
	      default: 1
	    }
	  }
	};

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    staticClass: "mu-appbar",
	    class: {
	      'mu-paper-1': _vm.zDepth
	    }
	  }, [_vm._h('div', {
	    staticClass: "left"
	  }, [_vm._t("left")]), " ", _vm._h('div', {
	    staticClass: "mu-appbar-title"
	  }, [_vm._t("default", [_vm._h('span', [_vm._s(_vm.title)])])]), " ", _vm._h('div', {
	    staticClass: "right"
	  }, [_vm._t("right")])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-52fd9fd1", module.exports)
	  }
	}

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _avatar = __webpack_require__(89);
	
	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_avatar).default;
	  }
	});

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(90)
	
	/* script */
	__vue_exports__ = __webpack_require__(92)
	
	/* template */
	var __vue_template__ = __webpack_require__(101)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\PaintGame\\node_modules\\muse-ui\\src\\avatar\\avatar.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-55bee9f1", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-55bee9f1", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] avatar.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(91);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(76)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-55bee9f1!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./avatar.vue", function() {
				var newContent = require("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-55bee9f1!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./avatar.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(68)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.mu-avatar {\n  display: inline-block;\n  height: 40px;\n  width: 40px;\n  font-size: 20px;\n  color: #ffffff;\n  background-color: #bdbdbd;\n  text-align: center;\n  border-radius: 50%;\n}\n.mu-avatar img {\n  border-radius: 50%;\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n.mu-avatar-inner {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n}\n", "", {"version":3,"sources":["/./node_modules/muse-ui/src/avatar/avatar.vue"],"names":[],"mappings":";AAAA;EACE,sBAAsB;EACtB,aAAa;EACb,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,0BAA0B;EAC1B,mBAAmB;EACnB,mBAAmB;CACpB;AACD;EACE,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,eAAe;CAChB;AACD;EACE,cAAc;EACd,YAAY;EACZ,aAAa;EACb,oBAAoB;EACpB,wBAAwB;CACzB","file":"avatar.vue","sourcesContent":[".mu-avatar {\n  display: inline-block;\n  height: 40px;\n  width: 40px;\n  font-size: 20px;\n  color: #ffffff;\n  background-color: #bdbdbd;\n  text-align: center;\n  border-radius: 50%;\n}\n.mu-avatar img {\n  border-radius: 50%;\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n.mu-avatar-inner {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _icon = __webpack_require__(93);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	var _utils = __webpack_require__(98);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	
	exports.default = {
	  name: 'mu-avatar',
	  props: {
	    backgroundColor: {
	      type: String,
	      default: ''
	    },
	    color: {
	      type: String,
	      default: ''
	    },
	    icon: {
	      type: String,
	      default: ''
	    },
	    src: {
	      type: String,
	      default: ''
	    },
	    size: {
	      type: Number
	    },
	    iconSize: {
	      type: Number
	    }
	  },
	  computed: {
	    style: function style() {
	      return {
	        width: this.size ? this.size + 'px' : '',
	        height: this.size ? this.size + 'px' : '',
	        color: (0, _utils.getColor)(this.color),
	        'background-color': (0, _utils.getColor)(this.backgroundColor)
	      };
	    }
	  },
	  methods: {
	    handleClick: function handleClick() {
	      this.$emit('click');
	    }
	  },
	  created: function created() {
	    this._isAvatar = true;
	  },
	
	  components: {
	    icon: _icon2.default
	  }
	};

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _icon = __webpack_require__(94);
	
	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_icon).default;
	  }
	});

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(95)
	
	/* script */
	__vue_exports__ = __webpack_require__(97)
	
	/* template */
	var __vue_template__ = __webpack_require__(100)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\PaintGame\\node_modules\\muse-ui\\src\\icon\\icon.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-2ea69d9e", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-2ea69d9e", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] icon.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(96);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(76)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-2ea69d9e!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./icon.vue", function() {
				var newContent = require("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-2ea69d9e!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./icon.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(68)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.mu-icon {\n  font-size: 24px;\n  cursor: inherit;\n}\n", "", {"version":3,"sources":["/./node_modules/muse-ui/src/icon/icon.vue"],"names":[],"mappings":";AAAA;EACE,gBAAgB;EAChB,gBAAgB;CACjB","file":"icon.vue","sourcesContent":[".mu-icon {\n  font-size: 24px;\n  cursor: inherit;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(98);
	
	exports.default = {
	  name: 'mu-icon',
	  props: {
	    value: {
	      type: String
	    },
	    size: {
	      type: Number,
	      default: 24
	    },
	    color: {
	      type: String,
	      default: ''
	    }
	  },
	  computed: {
	    style: function style() {
	      return {
	        'font-size': this.size + 'px',
	        'width': this.size + 'px',
	        'height': this.size + 'px',
	        'color': (0, _utils.getColor)(this.color)
	      };
	    }
	  },
	  methods: {
	    handleClick: function handleClick(e) {
	      this.$emit('click', e);
	    }
	  }
	}; //
	//
	//
	//

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getColor = undefined;
	exports.isNotNull = isNotNull;
	exports.isNull = isNull;
	exports.merge = merge;
	exports.getWidth = getWidth;
	exports.isPc = isPc;
	exports.retina = retina;
	
	var _colors = __webpack_require__(99);
	
	var colorsObj = _interopRequireWildcard(_colors);
	
	function _interopRequireWildcard(obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }newObj.default = obj;return newObj;
	  }
	}
	
	var colors = Object.keys(colorsObj);
	var getColor = exports.getColor = function getColor(color) {
	  if (!color) return '';
	  return colors.indexOf(color) !== -1 ? colorsObj[color] : color;
	};
	
	function isNotNull(val) {
	  return val !== undefined && val !== null;
	}
	
	function isNull(val) {
	  return val === undefined || val === null;
	}
	
	function merge(target) {
	  for (var i = 1, j = arguments.length; i < j; i++) {
	    var source = arguments[i];
	    for (var prop in source) {
	      if (source.hasOwnProperty(prop)) {
	        var value = source[prop];
	        if (value !== undefined) {
	          target[prop] = value;
	        }
	      }
	    }
	  }
	  return target;
	}
	
	function getWidth(w) {
	  var width = String(w);
	  if (width && width.indexOf('%') === -1 && width.indexOf('px') === -1) width += 'px';
	  return width;
	}
	
	function isPc() {
	  var uaInfo = navigator.userAgent;
	  var agents = ['Android', 'iPhone', 'Windows Phone', 'iPad', 'iPod'];
	  var flag = true;
	  for (var i = 0; i < agents.length; i++) {
	    if (uaInfo.indexOf(agents[i]) > 0) {
	      flag = false;
	      break;
	    }
	  }
	  return flag;
	}
	
	function retina() {
	  // 处理retina屏幕显示效果
	  if (isPc()) return;
	  var classNames = [];
	  var pixelRatio = window.devicePixelRatio || 1;
	  classNames.push('pixel-ratio-' + Math.floor(pixelRatio));
	  if (pixelRatio >= 2) {
	    classNames.push('retina');
	  }
	
	  var html = document.getElementsByTagName('html')[0];
	
	  classNames.forEach(function (className) {
	    return html.classList.add(className);
	  });
	}

/***/ },
/* 99 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var red50 = exports.red50 = '#ffebee';
	var red100 = exports.red100 = '#ffcdd2';
	var red200 = exports.red200 = '#ef9a9a';
	var red300 = exports.red300 = '#e57373';
	var red400 = exports.red400 = '#ef5350';
	var red500 = exports.red500 = '#f44336';
	var red600 = exports.red600 = '#e53935';
	var red700 = exports.red700 = '#d32f2f';
	var red800 = exports.red800 = '#c62828';
	var red900 = exports.red900 = '#b71c1c';
	var redA100 = exports.redA100 = '#ff8a80';
	var redA200 = exports.redA200 = '#ff5252';
	var redA400 = exports.redA400 = '#ff1744';
	var redA700 = exports.redA700 = '#d50000';
	var red = exports.red = red500;
	
	var pink50 = exports.pink50 = '#fce4ec';
	var pink100 = exports.pink100 = '#f8bbd0';
	var pink200 = exports.pink200 = '#f48fb1';
	var pink300 = exports.pink300 = '#f06292';
	var pink400 = exports.pink400 = '#ec407a';
	var pink500 = exports.pink500 = '#e91e63';
	var pink600 = exports.pink600 = '#d81b60';
	var pink700 = exports.pink700 = '#c2185b';
	var pink800 = exports.pink800 = '#ad1457';
	var pink900 = exports.pink900 = '#880e4f';
	var pinkA100 = exports.pinkA100 = '#ff80ab';
	var pinkA200 = exports.pinkA200 = '#ff4081';
	var pinkA400 = exports.pinkA400 = '#f50057';
	var pinkA700 = exports.pinkA700 = '#c51162';
	var pink = exports.pink = pink500;
	
	var purple50 = exports.purple50 = '#f3e5f5';
	var purple100 = exports.purple100 = '#e1bee7';
	var purple200 = exports.purple200 = '#ce93d8';
	var purple300 = exports.purple300 = '#ba68c8';
	var purple400 = exports.purple400 = '#ab47bc';
	var purple500 = exports.purple500 = '#9c27b0';
	var purple600 = exports.purple600 = '#8e24aa';
	var purple700 = exports.purple700 = '#7b1fa2';
	var purple800 = exports.purple800 = '#6a1b9a';
	var purple900 = exports.purple900 = '#4a148c';
	var purpleA100 = exports.purpleA100 = '#ea80fc';
	var purpleA200 = exports.purpleA200 = '#e040fb';
	var purpleA400 = exports.purpleA400 = '#d500f9';
	var purpleA700 = exports.purpleA700 = '#aa00ff';
	var purple = exports.purple = purple500;
	
	var deepPurple50 = exports.deepPurple50 = '#ede7f6';
	var deepPurple100 = exports.deepPurple100 = '#d1c4e9';
	var deepPurple200 = exports.deepPurple200 = '#b39ddb';
	var deepPurple300 = exports.deepPurple300 = '#9575cd';
	var deepPurple400 = exports.deepPurple400 = '#7e57c2';
	var deepPurple500 = exports.deepPurple500 = '#673ab7';
	var deepPurple600 = exports.deepPurple600 = '#5e35b1';
	var deepPurple700 = exports.deepPurple700 = '#512da8';
	var deepPurple800 = exports.deepPurple800 = '#4527a0';
	var deepPurple900 = exports.deepPurple900 = '#311b92';
	var deepPurpleA100 = exports.deepPurpleA100 = '#b388ff';
	var deepPurpleA200 = exports.deepPurpleA200 = '#7c4dff';
	var deepPurpleA400 = exports.deepPurpleA400 = '#651fff';
	var deepPurpleA700 = exports.deepPurpleA700 = '#6200ea';
	var deepPurple = exports.deepPurple = deepPurple500;
	
	var indigo50 = exports.indigo50 = '#e8eaf6';
	var indigo100 = exports.indigo100 = '#c5cae9';
	var indigo200 = exports.indigo200 = '#9fa8da';
	var indigo300 = exports.indigo300 = '#7986cb';
	var indigo400 = exports.indigo400 = '#5c6bc0';
	var indigo500 = exports.indigo500 = '#3f51b5';
	var indigo600 = exports.indigo600 = '#3949ab';
	var indigo700 = exports.indigo700 = '#303f9f';
	var indigo800 = exports.indigo800 = '#283593';
	var indigo900 = exports.indigo900 = '#1a237e';
	var indigoA100 = exports.indigoA100 = '#8c9eff';
	var indigoA200 = exports.indigoA200 = '#536dfe';
	var indigoA400 = exports.indigoA400 = '#3d5afe';
	var indigoA700 = exports.indigoA700 = '#304ffe';
	var indigo = exports.indigo = indigo500;
	
	var blue50 = exports.blue50 = '#e3f2fd';
	var blue100 = exports.blue100 = '#bbdefb';
	var blue200 = exports.blue200 = '#90caf9';
	var blue300 = exports.blue300 = '#64b5f6';
	var blue400 = exports.blue400 = '#42a5f5';
	var blue500 = exports.blue500 = '#2196f3';
	var blue600 = exports.blue600 = '#1e88e5';
	var blue700 = exports.blue700 = '#1976d2';
	var blue800 = exports.blue800 = '#1565c0';
	var blue900 = exports.blue900 = '#0d47a1';
	var blueA100 = exports.blueA100 = '#82b1ff';
	var blueA200 = exports.blueA200 = '#448aff';
	var blueA400 = exports.blueA400 = '#2979ff';
	var blueA700 = exports.blueA700 = '#2962ff';
	var blue = exports.blue = blue500;
	
	var lightBlue50 = exports.lightBlue50 = '#e1f5fe';
	var lightBlue100 = exports.lightBlue100 = '#b3e5fc';
	var lightBlue200 = exports.lightBlue200 = '#81d4fa';
	var lightBlue300 = exports.lightBlue300 = '#4fc3f7';
	var lightBlue400 = exports.lightBlue400 = '#29b6f6';
	var lightBlue500 = exports.lightBlue500 = '#03a9f4';
	var lightBlue600 = exports.lightBlue600 = '#039be5';
	var lightBlue700 = exports.lightBlue700 = '#0288d1';
	var lightBlue800 = exports.lightBlue800 = '#0277bd';
	var lightBlue900 = exports.lightBlue900 = '#01579b';
	var lightBlueA100 = exports.lightBlueA100 = '#80d8ff';
	var lightBlueA200 = exports.lightBlueA200 = '#40c4ff';
	var lightBlueA400 = exports.lightBlueA400 = '#00b0ff';
	var lightBlueA700 = exports.lightBlueA700 = '#0091ea';
	var lightBlue = exports.lightBlue = lightBlue500;
	
	var cyan50 = exports.cyan50 = '#e0f7fa';
	var cyan100 = exports.cyan100 = '#b2ebf2';
	var cyan200 = exports.cyan200 = '#80deea';
	var cyan300 = exports.cyan300 = '#4dd0e1';
	var cyan400 = exports.cyan400 = '#26c6da';
	var cyan500 = exports.cyan500 = '#00bcd4';
	var cyan600 = exports.cyan600 = '#00acc1';
	var cyan700 = exports.cyan700 = '#0097a7';
	var cyan800 = exports.cyan800 = '#00838f';
	var cyan900 = exports.cyan900 = '#006064';
	var cyanA100 = exports.cyanA100 = '#84ffff';
	var cyanA200 = exports.cyanA200 = '#18ffff';
	var cyanA400 = exports.cyanA400 = '#00e5ff';
	var cyanA700 = exports.cyanA700 = '#00b8d4';
	var cyan = exports.cyan = cyan500;
	
	var teal50 = exports.teal50 = '#e0f2f1';
	var teal100 = exports.teal100 = '#b2dfdb';
	var teal200 = exports.teal200 = '#80cbc4';
	var teal300 = exports.teal300 = '#4db6ac';
	var teal400 = exports.teal400 = '#26a69a';
	var teal500 = exports.teal500 = '#009688';
	var teal600 = exports.teal600 = '#00897b';
	var teal700 = exports.teal700 = '#00796b';
	var teal800 = exports.teal800 = '#00695c';
	var teal900 = exports.teal900 = '#004d40';
	var tealA100 = exports.tealA100 = '#a7ffeb';
	var tealA200 = exports.tealA200 = '#64ffda';
	var tealA400 = exports.tealA400 = '#1de9b6';
	var tealA700 = exports.tealA700 = '#00bfa5';
	var teal = exports.teal = teal500;
	
	var green50 = exports.green50 = '#e8f5e9';
	var green100 = exports.green100 = '#c8e6c9';
	var green200 = exports.green200 = '#a5d6a7';
	var green300 = exports.green300 = '#81c784';
	var green400 = exports.green400 = '#66bb6a';
	var green500 = exports.green500 = '#4caf50';
	var green600 = exports.green600 = '#43a047';
	var green700 = exports.green700 = '#388e3c';
	var green800 = exports.green800 = '#2e7d32';
	var green900 = exports.green900 = '#1b5e20';
	var greenA100 = exports.greenA100 = '#b9f6ca';
	var greenA200 = exports.greenA200 = '#69f0ae';
	var greenA400 = exports.greenA400 = '#00e676';
	var greenA700 = exports.greenA700 = '#00c853';
	var green = exports.green = green500;
	
	var lightGreen50 = exports.lightGreen50 = '#f1f8e9';
	var lightGreen100 = exports.lightGreen100 = '#dcedc8';
	var lightGreen200 = exports.lightGreen200 = '#c5e1a5';
	var lightGreen300 = exports.lightGreen300 = '#aed581';
	var lightGreen400 = exports.lightGreen400 = '#9ccc65';
	var lightGreen500 = exports.lightGreen500 = '#8bc34a';
	var lightGreen600 = exports.lightGreen600 = '#7cb342';
	var lightGreen700 = exports.lightGreen700 = '#689f38';
	var lightGreen800 = exports.lightGreen800 = '#558b2f';
	var lightGreen900 = exports.lightGreen900 = '#33691e';
	var lightGreenA100 = exports.lightGreenA100 = '#ccff90';
	var lightGreenA200 = exports.lightGreenA200 = '#b2ff59';
	var lightGreenA400 = exports.lightGreenA400 = '#76ff03';
	var lightGreenA700 = exports.lightGreenA700 = '#64dd17';
	var lightGreen = exports.lightGreen = lightGreen500;
	
	var lime50 = exports.lime50 = '#f9fbe7';
	var lime100 = exports.lime100 = '#f0f4c3';
	var lime200 = exports.lime200 = '#e6ee9c';
	var lime300 = exports.lime300 = '#dce775';
	var lime400 = exports.lime400 = '#d4e157';
	var lime500 = exports.lime500 = '#cddc39';
	var lime600 = exports.lime600 = '#c0ca33';
	var lime700 = exports.lime700 = '#afb42b';
	var lime800 = exports.lime800 = '#9e9d24';
	var lime900 = exports.lime900 = '#827717';
	var limeA100 = exports.limeA100 = '#f4ff81';
	var limeA200 = exports.limeA200 = '#eeff41';
	var limeA400 = exports.limeA400 = '#c6ff00';
	var limeA700 = exports.limeA700 = '#aeea00';
	var lime = exports.lime = lime500;
	
	var yellow50 = exports.yellow50 = '#fffde7';
	var yellow100 = exports.yellow100 = '#fff9c4';
	var yellow200 = exports.yellow200 = '#fff59d';
	var yellow300 = exports.yellow300 = '#fff176';
	var yellow400 = exports.yellow400 = '#ffee58';
	var yellow500 = exports.yellow500 = '#ffeb3b';
	var yellow600 = exports.yellow600 = '#fdd835';
	var yellow700 = exports.yellow700 = '#fbc02d';
	var yellow800 = exports.yellow800 = '#f9a825';
	var yellow900 = exports.yellow900 = '#f57f17';
	var yellowA100 = exports.yellowA100 = '#ffff8d';
	var yellowA200 = exports.yellowA200 = '#ffff00';
	var yellowA400 = exports.yellowA400 = '#ffea00';
	var yellowA700 = exports.yellowA700 = '#ffd600';
	var yellow = exports.yellow = yellow500;
	
	var amber50 = exports.amber50 = '#fff8e1';
	var amber100 = exports.amber100 = '#ffecb3';
	var amber200 = exports.amber200 = '#ffe082';
	var amber300 = exports.amber300 = '#ffd54f';
	var amber400 = exports.amber400 = '#ffca28';
	var amber500 = exports.amber500 = '#ffc107';
	var amber600 = exports.amber600 = '#ffb300';
	var amber700 = exports.amber700 = '#ffa000';
	var amber800 = exports.amber800 = '#ff8f00';
	var amber900 = exports.amber900 = '#ff6f00';
	var amberA100 = exports.amberA100 = '#ffe57f';
	var amberA200 = exports.amberA200 = '#ffd740';
	var amberA400 = exports.amberA400 = '#ffc400';
	var amberA700 = exports.amberA700 = '#ffab00';
	var amber = exports.amber = amber500;
	
	var orange50 = exports.orange50 = '#fff3e0';
	var orange100 = exports.orange100 = '#ffe0b2';
	var orange200 = exports.orange200 = '#ffcc80';
	var orange300 = exports.orange300 = '#ffb74d';
	var orange400 = exports.orange400 = '#ffa726';
	var orange500 = exports.orange500 = '#ff9800';
	var orange600 = exports.orange600 = '#fb8c00';
	var orange700 = exports.orange700 = '#f57c00';
	var orange800 = exports.orange800 = '#ef6c00';
	var orange900 = exports.orange900 = '#e65100';
	var orangeA100 = exports.orangeA100 = '#ffd180';
	var orangeA200 = exports.orangeA200 = '#ffab40';
	var orangeA400 = exports.orangeA400 = '#ff9100';
	var orangeA700 = exports.orangeA700 = '#ff6d00';
	var orange = exports.orange = orange500;
	
	var deepOrange50 = exports.deepOrange50 = '#fbe9e7';
	var deepOrange100 = exports.deepOrange100 = '#ffccbc';
	var deepOrange200 = exports.deepOrange200 = '#ffab91';
	var deepOrange300 = exports.deepOrange300 = '#ff8a65';
	var deepOrange400 = exports.deepOrange400 = '#ff7043';
	var deepOrange500 = exports.deepOrange500 = '#ff5722';
	var deepOrange600 = exports.deepOrange600 = '#f4511e';
	var deepOrange700 = exports.deepOrange700 = '#e64a19';
	var deepOrange800 = exports.deepOrange800 = '#d84315';
	var deepOrange900 = exports.deepOrange900 = '#bf360c';
	var deepOrangeA100 = exports.deepOrangeA100 = '#ff9e80';
	var deepOrangeA200 = exports.deepOrangeA200 = '#ff6e40';
	var deepOrangeA400 = exports.deepOrangeA400 = '#ff3d00';
	var deepOrangeA700 = exports.deepOrangeA700 = '#dd2c00';
	var deepOrange = exports.deepOrange = deepOrange500;
	
	var brown50 = exports.brown50 = '#efebe9';
	var brown100 = exports.brown100 = '#d7ccc8';
	var brown200 = exports.brown200 = '#bcaaa4';
	var brown300 = exports.brown300 = '#a1887f';
	var brown400 = exports.brown400 = '#8d6e63';
	var brown500 = exports.brown500 = '#795548';
	var brown600 = exports.brown600 = '#6d4c41';
	var brown700 = exports.brown700 = '#5d4037';
	var brown800 = exports.brown800 = '#4e342e';
	var brown900 = exports.brown900 = '#3e2723';
	var brown = exports.brown = brown500;
	
	var blueGrey50 = exports.blueGrey50 = '#eceff1';
	var blueGrey100 = exports.blueGrey100 = '#cfd8dc';
	var blueGrey200 = exports.blueGrey200 = '#b0bec5';
	var blueGrey300 = exports.blueGrey300 = '#90a4ae';
	var blueGrey400 = exports.blueGrey400 = '#78909c';
	var blueGrey500 = exports.blueGrey500 = '#607d8b';
	var blueGrey600 = exports.blueGrey600 = '#546e7a';
	var blueGrey700 = exports.blueGrey700 = '#455a64';
	var blueGrey800 = exports.blueGrey800 = '#37474f';
	var blueGrey900 = exports.blueGrey900 = '#263238';
	var blueGrey = exports.blueGrey = blueGrey500;
	
	var grey50 = exports.grey50 = '#fafafa';
	var grey100 = exports.grey100 = '#f5f5f5';
	var grey200 = exports.grey200 = '#eeeeee';
	var grey300 = exports.grey300 = '#e0e0e0';
	var grey400 = exports.grey400 = '#bdbdbd';
	var grey500 = exports.grey500 = '#9e9e9e';
	var grey600 = exports.grey600 = '#757575';
	var grey700 = exports.grey700 = '#616161';
	var grey800 = exports.grey800 = '#424242';
	var grey900 = exports.grey900 = '#212121';
	var grey = exports.grey = grey500;
	
	var black = exports.black = '#000000';
	var white = exports.white = '#ffffff';
	
	var transparent = exports.transparent = 'rgba(0, 0, 0, 0)';
	var fullBlack = exports.fullBlack = 'rgba(0, 0, 0, 1)';
	var darkBlack = exports.darkBlack = 'rgba(0, 0, 0, 0.87)';
	var lightBlack = exports.lightBlack = 'rgba(0, 0, 0, 0.54)';
	var minBlack = exports.minBlack = 'rgba(0, 0, 0, 0.26)';
	var faintBlack = exports.faintBlack = 'rgba(0, 0, 0, 0.12)';
	var fullWhite = exports.fullWhite = 'rgba(255, 255, 255, 1)';
	var darkWhite = exports.darkWhite = 'rgba(255, 255, 255, 0.87)';
	var lightWhite = exports.lightWhite = 'rgba(255, 255, 255, 0.54)';

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return (_vm.value) ? _vm._h('i', {
	    staticClass: "mu-icon material-icons",
	    class: [_vm.value],
	    style: (_vm.style),
	    attrs: {
	      "aria-hidden": "true"
	    },
	    domProps: {
	      "textContent": _vm._s(_vm.value)
	    },
	    on: {
	      "click": _vm.handleClick
	    }
	  }) : _vm._e()
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-2ea69d9e", module.exports)
	  }
	}

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    staticClass: "mu-avatar",
	    style: (_vm.style),
	    on: {
	      "click": _vm.handleClick
	    }
	  }, [_vm._h('div', {
	    staticClass: "mu-avatar-inner"
	  }, [(_vm.icon) ? _vm._h('icon', {
	    attrs: {
	      "size": _vm.iconSize
	    },
	    domProps: {
	      "value": _vm.icon
	    }
	  }) : _vm._e(), " ", (_vm.src) ? _vm._h('img', {
	    attrs: {
	      "src": _vm.src
	    }
	  }) : _vm._e(), " ", _vm._t("default")])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-55bee9f1", module.exports)
	  }
	}

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _iconButton = __webpack_require__(103);
	
	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_iconButton).default;
	  }
	});

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(104)
	
	/* script */
	__vue_exports__ = __webpack_require__(106)
	
	/* template */
	var __vue_template__ = __webpack_require__(131)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\PaintGame\\node_modules\\muse-ui\\src\\iconButton\\iconButton.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-d3625f9e", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-d3625f9e", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] iconButton.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(105);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(76)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-d3625f9e!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./iconButton.vue", function() {
				var newContent = require("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-d3625f9e!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./iconButton.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(68)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.mu-icon-button {\n  position: relative;\n  display: inline-block;\n  overflow: visible;\n  line-height: 1;\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  font-size: 24px;\n  padding: 12px;\n  border: none;\n  appearance: none;\n  background: none;\n  color: inherit;\n  text-decoration: none;\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  transform: translate3d(0, 0, 0);\n  -webkit-box-flex: 0;\n  -webkit-flex-shrink: 0;\n  -ms-flex: 0 0 auto;\n  flex-shrink: 0;\n  margin: 0;\n  outline: 0;\n  cursor: pointer;\n}\n.mu-icon-button .mu-circle-ripple {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mu-icon-button.disabled {\n  color: rgba(0, 0, 0, 0.38);\n  cursor: not-allowed;\n}\n", "", {"version":3,"sources":["/./node_modules/muse-ui/src/iconButton/iconButton.vue"],"names":[],"mappings":";AAAA;EACE,mBAAmB;EACnB,sBAAsB;EACtB,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,cAAc;EACd,aAAa;EACb,iBAAiB;EACjB,iBAAiB;EACjB,eAAe;EACf,sBAAsB;EACtB,2BAA2B;EAC3B,2DAA2D;EAC3D,gCAAgC;EAChC,oBAAoB;EACpB,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,UAAU;EACV,WAAW;EACX,gBAAgB;CACjB;AACD;EACE,2BAA2B;CAC5B;AACD;EACE,2BAA2B;EAC3B,oBAAoB;CACrB","file":"iconButton.vue","sourcesContent":[".mu-icon-button {\n  position: relative;\n  display: inline-block;\n  overflow: visible;\n  line-height: 1;\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  font-size: 24px;\n  padding: 12px;\n  border: none;\n  appearance: none;\n  background: none;\n  color: inherit;\n  text-decoration: none;\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  transform: translate3d(0, 0, 0);\n  -webkit-box-flex: 0;\n  -webkit-flex-shrink: 0;\n  -ms-flex: 0 0 auto;\n  flex-shrink: 0;\n  margin: 0;\n  outline: 0;\n  cursor: pointer;\n}\n.mu-icon-button .mu-circle-ripple {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mu-icon-button.disabled {\n  color: rgba(0, 0, 0, 0.38);\n  cursor: not-allowed;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _abstractButton = __webpack_require__(107);
	
	var _abstractButton2 = _interopRequireDefault(_abstractButton);
	
	var _icon = __webpack_require__(93);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	var _tooltip = __webpack_require__(125);
	
	var _tooltip2 = _interopRequireDefault(_tooltip);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'mu-icon-button',
	  props: {
	    icon: {
	      type: String
	    },
	    iconClass: {
	      type: String,
	      default: ''
	    },
	    href: {
	      type: String,
	      default: ''
	    },
	    target: {
	      type: String
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    keyboardFocused: {
	      type: Boolean,
	      default: false
	    },
	    tooltip: {
	      type: String
	    },
	    tooltipPosition: {
	      type: String,
	      default: 'bottom-center'
	    },
	    touch: {
	      type: Boolean,
	      default: false
	    }
	  },
	  computed: {
	    verticalPosition: function verticalPosition() {
	      var tooltipPosition = this.tooltipPosition.split('-');
	      return tooltipPosition[0];
	    },
	    horizontalPosition: function horizontalPosition() {
	      var tooltipPosition = this.tooltipPosition.split('-');
	      return tooltipPosition[1];
	    }
	  },
	  data: function data() {
	    return {
	      tooltipShown: false,
	      tooltipTrigger: null
	    };
	  },
	
	  methods: {
	    handleClick: function handleClick(e) {
	      this.$emit('click', e);
	    },
	    handleHover: function handleHover(event) {
	      this.tooltipShown = true;
	      this.$emit('hover', event);
	    },
	    handleHoverExit: function handleHoverExit(event) {
	      this.tooltipShown = false;
	      this.$emit('hoverExit', event);
	    },
	    handleKeyboardFocus: function handleKeyboardFocus(isFocus) {
	      this.$emit('keyboardFocus', isFocus);
	    },
	    handleStop: function handleStop(event) {
	      event.stopPropagation(); // 防止list中使用导致波纹点击重复
	    }
	  },
	  mounted: function mounted() {
	    this.tooltipTrigger = this.$el;
	  },
	
	  components: {
	    'abstract-button': _abstractButton2.default,
	    icon: _icon2.default,
	    tooltip: _tooltip2.default
	  }
	}; //
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

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _touchRipple = __webpack_require__(108);
	
	var _touchRipple2 = _interopRequireDefault(_touchRipple);
	
	var _focusRipple = __webpack_require__(119);
	
	var _focusRipple2 = _interopRequireDefault(_focusRipple);
	
	var _keycode = __webpack_require__(124);
	
	var _keycode2 = _interopRequireDefault(_keycode);
	
	var _utils = __webpack_require__(98);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var tabPressed = false;
	var listening = false;
	
	function listenForTabPresses() {
	  if (!listening) {
	    window.addEventListener('keydown', function (event) {
	      tabPressed = (0, _keycode2.default)(event) === 'tab';
	    });
	    listening = true;
	  }
	}
	
	exports.default = {
	  props: {
	    href: {
	      type: String,
	      default: ''
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    disableFocusRipple: {
	      type: Boolean,
	      default: false
	    },
	    disableKeyboardFocus: {
	      type: Boolean,
	      default: false
	    },
	    disableTouchRipple: {
	      type: Boolean,
	      default: false
	    },
	    rippleColor: {
	      type: String,
	      default: ''
	    },
	    rippleOpacity: {
	      type: Number
	    },
	    centerRipple: {
	      type: Boolean,
	      default: true
	    },
	    wrapperClass: {
	      type: String,
	      default: ''
	    },
	    wrapperStyle: {
	      type: [String, Object]
	    },
	    containerElement: {
	      type: String
	    },
	    tabIndex: {
	      type: Number,
	      default: 0
	    },
	    type: {
	      type: String,
	      default: 'button'
	    },
	    keyboardFocused: {
	      type: Boolean,
	      default: false
	    }
	  },
	  data: function data() {
	    return {
	      hover: false,
	      isKeyboardFocused: false
	    };
	  },
	
	  computed: {
	    buttonClass: function buttonClass() {
	      var classNames = [];
	      if (this.disabled) classNames.push('disabled');
	      if (this.hover || this.isKeyboardFocused) classNames.push('hover');
	      return classNames.join(' ');
	    }
	  },
	  beforeMount: function beforeMount() {
	    var disabled = this.disabled,
	        disableKeyboardFocus = this.disableKeyboardFocus,
	        keyboardFocused = this.keyboardFocused;
	
	    if (!disabled && keyboardFocused && !disableKeyboardFocus) {
	      this.isKeyboardFocused = true;
	    }
	  },
	  mounted: function mounted() {
	    listenForTabPresses();
	    if (this.isKeyboardFocused) {
	      this.$el.focus();
	      this.$emit('keyboardFocus', true);
	    }
	  },
	  beforeUpdate: function beforeUpdate() {
	    if ((this.disabled || this.disableKeyboardFocus) && this.isKeyboardFocused) {
	      this.isKeyboardFocused = false;
	      this.$emit('keyboardFocus', false);
	    }
	  },
	  beforeDestory: function beforeDestory() {
	    this.cancelFocusTimeout();
	  },
	
	  methods: {
	    handleHover: function handleHover(event) {
	      if (!this.disabled && (0, _utils.isPc)()) {
	        this.hover = true;
	        this.$emit('hover', event);
	      }
	    },
	    handleOut: function handleOut(event) {
	      if (!this.disabled && (0, _utils.isPc)()) {
	        this.hover = false;
	        this.$emit('hoverExit', event);
	      }
	    },
	    removeKeyboardFocus: function removeKeyboardFocus(event) {
	      if (this.isKeyboardFocused) {
	        this.isKeyboardFocused = false;
	        this.$emit('KeyboardFocus', false);
	      }
	    },
	    setKeyboardFocus: function setKeyboardFocus(event) {
	      if (!this.isKeyboardFocused) {
	        this.isKeyboardFocused = true;
	        this.$emit('KeyboardFocus', true);
	      }
	    },
	    cancelFocusTimeout: function cancelFocusTimeout() {
	      if (this.focusTimeout) {
	        clearTimeout(this.focusTimeout);
	        this.focusTimeout = null;
	      }
	    },
	    handleKeydown: function handleKeydown(event) {
	      if (!this.disabled && !this.disableKeyboardFocus) {
	        if ((0, _keycode2.default)(event) === 'enter' && this.isKeyboardFocused) {
	          this.$el.click();
	        }
	        if ((0, _keycode2.default)(event) === 'esc' && this.isKeyboardFocused) {
	          this.removeKeyboardFocus(event);
	        }
	      }
	    },
	    handleKeyup: function handleKeyup(event) {
	      if (!this.disabled && !this.disableKeyboardFocus) {
	        if ((0, _keycode2.default)(event) === 'space' && this.isKeyboardFocused) {}
	      }
	    },
	    handleFocus: function handleFocus(event) {
	      var _this = this;
	
	      if (!this.disabled && !this.disableKeyboardFocus) {
	        this.focusTimeout = setTimeout(function () {
	          if (tabPressed) {
	            _this.setKeyboardFocus(event);
	            tabPressed = false;
	          }
	        }, 150);
	      }
	    },
	    handleBlur: function handleBlur(event) {
	      this.cancelFocusTimeout();
	      this.removeKeyboardFocus(event);
	    },
	    handleClick: function handleClick(event) {
	      if (!this.disabled) {
	        tabPressed = false;
	        this.removeKeyboardFocus(event);
	        this.$emit('click', event);
	      }
	    },
	    createButtonChildren: function createButtonChildren(h) {
	      var isKeyboardFocused = this.isKeyboardFocused,
	          disabled = this.disabled,
	          disableFocusRipple = this.disableFocusRipple,
	          disableKeyboardFocus = this.disableKeyboardFocus,
	          rippleColor = this.rippleColor,
	          rippleOpacity = this.rippleOpacity,
	          disableTouchRipple = this.disableTouchRipple;
	
	      var children = [];
	      children = children.concat(this.$slots.default);
	      var FocusRipple = isKeyboardFocused && !disabled && !disableFocusRipple && !disableKeyboardFocus ? h(_focusRipple2.default, {
	        color: rippleColor,
	        opacity: rippleOpacity
	      }) : undefined;
	
	      if (!disabled && !disableTouchRipple) {
	        children = [h(_touchRipple2.default, {
	          class: this.wrapperClass,
	          style: this.wrapperStyle,
	          props: {
	            color: this.rippleColor,
	            centerRipple: this.centerRipple,
	            opacity: this.rippleOpacity
	          }
	        }, this.$slots.default)];
	      }
	      children.unshift(FocusRipple);
	      return children;
	    }
	  },
	  render: function render(h) {
	    var domProps = {
	      disabled: this.disabled,
	      href: this.disabled ? 'javascript:;' : this.href,
	      type: this.type
	    };
	    if (!this.disabled) domProps.tabIndex = this.tabIndex;
	    return h(this.href ? 'a' : this.containerElement ? this.containerElement : 'button', {
	      class: this.buttonClass,
	      domProps: domProps,
	      style: {
	        'user-select': this.disabled ? '' : 'none',
	        'outline': 'none',
	        'cursor': this.disabled ? '' : 'pointer',
	        'appearance': 'none'
	      },
	      on: {
	        mouseenter: this.handleHover,
	        mouseleave: this.handleOut,
	        touchend: this.handleOut,
	        touchcancel: this.handleOut,
	        click: this.handleClick,
	        focus: this.handleFocus,
	        blur: this.handleBlur,
	        keydown: this.handleKeydown,
	        keyup: this.handleKeyup
	      }
	    }, this.createButtonChildren(h));
	  }
	};

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(109)
	
	/* script */
	__vue_exports__ = __webpack_require__(111)
	
	/* template */
	var __vue_template__ = __webpack_require__(118)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\PaintGame\\node_modules\\muse-ui\\src\\internal\\touchRipple.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-a8c650ea", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-a8c650ea", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] touchRipple.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(110);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(76)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-a8c650ea!./../../../vue-loader/lib/selector.js?type=styles&index=0!./touchRipple.vue", function() {
				var newContent = require("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-a8c650ea!./../../../vue-loader/lib/selector.js?type=styles&index=0!./touchRipple.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(68)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.mu-ripple-wrapper {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n}\n", "", {"version":3,"sources":["/./node_modules/muse-ui/src/internal/touchRipple.vue?d2a8752a"],"names":[],"mappings":";AA+HA;EACA,aAAA;EACA,YAAA;EACA,mBAAA;EACA,OAAA;EACA,QAAA;EACA,iBAAA;CACA","file":"touchRipple.vue","sourcesContent":["<template>\n  <div @mousedown=\"handleMouseDown\" @mouseup=\"end()\" @mouseleave=\"end()\" @touchstart=\"handleTouchStart\"  @touchend=\"end()\" @touchcancel=\"end()\">\n    <div class=\"mu-ripple-wrapper\" :class=\"rippleWrapperClass\" ref=\"holder\">\n      <circle-ripple :key=\"ripple.key\" :color=\"ripple.color\" :opacity=\"ripple.opacity\" :merge-style=\"ripple.style\" v-for=\"ripple in ripples\"></circle-ripple>\n    </div>\n    <slot></slot>\n  </div>\n</template>\n\n<script>\nimport circleRipple from './circleRipple'\nimport * as domUtil from '../utils/domUtil'\nexport default {\n  props: {\n    centerRipple: {\n      type: Boolean,\n      default: true\n    },\n    rippleWrapperClass: {\n    },\n    color: {\n      type: String,\n      default: ''\n    },\n    opacity: {\n      type: Number\n    }\n  },\n  data () {\n    return {\n      nextKey: 0,\n      ripples: []\n    }\n  },\n  mounted () {\n    this.ignoreNextMouseDown = false\n  },\n  methods: {\n    start (event, isRippleTouchGenerated) {\n      if (this.ignoreNextMouseDown && !isRippleTouchGenerated) {\n        this.ignoreNextMouseDown = false\n        return\n      }\n      this.ripples.push({\n        key: this.nextKey++,\n        color: this.color,\n        opacity: this.opacity,\n        style: this.centerRipple ? {} : this.getRippleStyle(event)\n      })\n      this.ignoreNextMouseDown = isRippleTouchGenerated\n    },\n    end () {\n      if (this.ripples.length === 0) return\n      this.ripples.splice(0, 1)\n      this.stopListeningForScrollAbort()\n    },\n    stopListeningForScrollAbort () {\n      if (!this.handleMove) this.handleMove = this.handleTouchMove.bind(this)\n      document.body.removeEventListener('touchmove', this.handleMove, false)\n    },\n    startListeningForScrollAbort (event) {\n      this.firstTouchY = event.touches[0].clientY\n      this.firstTouchX = event.touches[0].clientX\n      document.body.addEventListener('touchmove', this.handleMove, false)\n    },\n    handleMouseDown (event) {\n      if (event.button === 0) {\n        this.start(event, false)\n      }\n    },\n    handleTouchStart (event) {\n      if (event.touches) {\n        this.startListeningForScrollAbort(event)\n        this.startTime = Date.now()\n      }\n      this.start(event.touches[0], true)\n    },\n    handleTouchMove (event) {\n      const deltaY = Math.abs(event.touches[0].clientY - this.firstTouchY)\n      const deltaX = Math.abs(event.touches[0].clientX - this.firstTouchX)\n      // 判断滚动 6px\n      if (deltaY > 6 || deltaX > 6) this.end()\n      // const timeSinceStart = Math.abs(Date.now() - this.startTime)\n      // if (timeSinceStart > 300) {\n      //   this.stopListeningForScrollAbort()\n      //   return\n      // }\n    },\n    getRippleStyle (event) {\n      const el = this.$refs.holder\n      const elHeight = el.offsetHeight\n      const elWidth = el.offsetWidth\n      const offset = domUtil.getOffset(el)\n      const isTouchEvent = event.touches && event.touches.length\n      const pageX = isTouchEvent ? event.touches[0].pageX : event.pageX\n      const pageY = isTouchEvent ? event.touches[0].pageY : event.pageY\n      const pointerX = pageX - offset.left\n      const pointerY = pageY - offset.top\n      const topLeftDiag = this.calcDiag(pointerX, pointerY)\n      const topRightDiag = this.calcDiag(elWidth - pointerX, pointerY)\n      const botRightDiag = this.calcDiag(elWidth - pointerX, elHeight - pointerY)\n      const botLeftDiag = this.calcDiag(pointerX, elHeight - pointerY)\n      const rippleRadius = Math.max(\n        topLeftDiag, topRightDiag, botRightDiag, botLeftDiag\n      )\n      const rippleSize = rippleRadius * 2\n      const left = pointerX - rippleRadius\n      const top = pointerY - rippleRadius\n      return {\n        directionInvariant: true,\n        height: rippleSize + 'px',\n        width: rippleSize + 'px',\n        top: top + 'px',\n        left: left + 'px'\n      }\n    },\n    calcDiag (a, b) {\n      return Math.sqrt((a * a) + (b * b))\n    }\n  },\n  components: {\n    'circle-ripple': circleRipple\n  }\n}\n</script>\n\n<style lang=\"css\">\n.mu-ripple-wrapper {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n}\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _circleRipple = __webpack_require__(112);
	
	var _circleRipple2 = _interopRequireDefault(_circleRipple);
	
	var _domUtil = __webpack_require__(117);
	
	var domUtil = _interopRequireWildcard(_domUtil);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  props: {
	    centerRipple: {
	      type: Boolean,
	      default: true
	    },
	    rippleWrapperClass: {},
	    color: {
	      type: String,
	      default: ''
	    },
	    opacity: {
	      type: Number
	    }
	  },
	  data: function data() {
	    return {
	      nextKey: 0,
	      ripples: []
	    };
	  },
	  mounted: function mounted() {
	    this.ignoreNextMouseDown = false;
	  },
	
	  methods: {
	    start: function start(event, isRippleTouchGenerated) {
	      if (this.ignoreNextMouseDown && !isRippleTouchGenerated) {
	        this.ignoreNextMouseDown = false;
	        return;
	      }
	      this.ripples.push({
	        key: this.nextKey++,
	        color: this.color,
	        opacity: this.opacity,
	        style: this.centerRipple ? {} : this.getRippleStyle(event)
	      });
	      this.ignoreNextMouseDown = isRippleTouchGenerated;
	    },
	    end: function end() {
	      if (this.ripples.length === 0) return;
	      this.ripples.splice(0, 1);
	      this.stopListeningForScrollAbort();
	    },
	    stopListeningForScrollAbort: function stopListeningForScrollAbort() {
	      if (!this.handleMove) this.handleMove = this.handleTouchMove.bind(this);
	      document.body.removeEventListener('touchmove', this.handleMove, false);
	    },
	    startListeningForScrollAbort: function startListeningForScrollAbort(event) {
	      this.firstTouchY = event.touches[0].clientY;
	      this.firstTouchX = event.touches[0].clientX;
	      document.body.addEventListener('touchmove', this.handleMove, false);
	    },
	    handleMouseDown: function handleMouseDown(event) {
	      if (event.button === 0) {
	        this.start(event, false);
	      }
	    },
	    handleTouchStart: function handleTouchStart(event) {
	      if (event.touches) {
	        this.startListeningForScrollAbort(event);
	        this.startTime = Date.now();
	      }
	      this.start(event.touches[0], true);
	    },
	    handleTouchMove: function handleTouchMove(event) {
	      var deltaY = Math.abs(event.touches[0].clientY - this.firstTouchY);
	      var deltaX = Math.abs(event.touches[0].clientX - this.firstTouchX);
	      // 判断滚动 6px
	      if (deltaY > 6 || deltaX > 6) this.end();
	      // const timeSinceStart = Math.abs(Date.now() - this.startTime)
	      // if (timeSinceStart > 300) {
	      //   this.stopListeningForScrollAbort()
	      //   return
	      // }
	    },
	    getRippleStyle: function getRippleStyle(event) {
	      var el = this.$refs.holder;
	      var elHeight = el.offsetHeight;
	      var elWidth = el.offsetWidth;
	      var offset = domUtil.getOffset(el);
	      var isTouchEvent = event.touches && event.touches.length;
	      var pageX = isTouchEvent ? event.touches[0].pageX : event.pageX;
	      var pageY = isTouchEvent ? event.touches[0].pageY : event.pageY;
	      var pointerX = pageX - offset.left;
	      var pointerY = pageY - offset.top;
	      var topLeftDiag = this.calcDiag(pointerX, pointerY);
	      var topRightDiag = this.calcDiag(elWidth - pointerX, pointerY);
	      var botRightDiag = this.calcDiag(elWidth - pointerX, elHeight - pointerY);
	      var botLeftDiag = this.calcDiag(pointerX, elHeight - pointerY);
	      var rippleRadius = Math.max(topLeftDiag, topRightDiag, botRightDiag, botLeftDiag);
	      var rippleSize = rippleRadius * 2;
	      var left = pointerX - rippleRadius;
	      var top = pointerY - rippleRadius;
	      return {
	        directionInvariant: true,
	        height: rippleSize + 'px',
	        width: rippleSize + 'px',
	        top: top + 'px',
	        left: left + 'px'
	      };
	    },
	    calcDiag: function calcDiag(a, b) {
	      return Math.sqrt(a * a + b * b);
	    }
	  },
	  components: {
	    'circle-ripple': _circleRipple2.default
	  }
	};

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(113)
	
	/* script */
	__vue_exports__ = __webpack_require__(115)
	
	/* template */
	var __vue_template__ = __webpack_require__(116)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\PaintGame\\node_modules\\muse-ui\\src\\internal\\circleRipple.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1a495c14", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-1a495c14", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] circleRipple.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(114);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(76)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-1a495c14!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./circleRipple.vue", function() {
				var newContent = require("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-1a495c14!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./circleRipple.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(68)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.mu-circle-ripple {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n  user-select: none;\n  border-radius: 50%;\n  background-color: currentColor;\n  background-clip: padding-box;\n  opacity: 0.1;\n}\n.mu-ripple-enter-active,\n.mu-ripple-leave-active {\n  transition: opacity 2s cubic-bezier(0.23, 1, 0.32, 1), transform 1s cubic-bezier(0.23, 1, 0.32, 1);\n}\n.mu-ripple-enter {\n  transform: scale(0);\n}\n.mu-ripple-leave-active {\n  opacity: 0 !important;\n}\n", "", {"version":3,"sources":["/./node_modules/muse-ui/src/internal/circleRipple.vue"],"names":[],"mappings":";AAAA;EACE,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,QAAQ;EACR,OAAO;EACP,qBAAqB;EACrB,kBAAkB;EAClB,mBAAmB;EACnB,+BAA+B;EAC/B,6BAA6B;EAC7B,aAAa;CACd;AACD;;EAEE,mGAAmG;CACpG;AACD;EACE,oBAAoB;CACrB;AACD;EACE,sBAAsB;CACvB","file":"circleRipple.vue","sourcesContent":[".mu-circle-ripple {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n  user-select: none;\n  border-radius: 50%;\n  background-color: currentColor;\n  background-clip: padding-box;\n  opacity: 0.1;\n}\n.mu-ripple-enter-active,\n.mu-ripple-leave-active {\n  transition: opacity 2s cubic-bezier(0.23, 1, 0.32, 1), transform 1s cubic-bezier(0.23, 1, 0.32, 1);\n}\n.mu-ripple-enter {\n  transform: scale(0);\n}\n.mu-ripple-leave-active {\n  opacity: 0 !important;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(98);
	
	exports.default = {
	  props: {
	    mergeStyle: {
	      type: Object,
	      default: function _default() {
	        return {};
	      }
	    },
	    color: {
	      type: String,
	      default: ''
	    },
	    opacity: {
	      type: Number
	    }
	  },
	  computed: {
	    styles: function styles() {
	      return (0, _utils.merge)({}, { color: this.color, opacity: this.opacity }, this.mergeStyle);
	    }
	  }
	}; //
	//
	//
	//
	//
	//

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('transition', {
	    attrs: {
	      "name": "mu-ripple"
	    }
	  }, [_vm._h('div', {
	    staticClass: "mu-circle-ripple",
	    style: (_vm.styles)
	  })])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-1a495c14", module.exports)
	  }
	}

/***/ },
/* 117 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var getOffset = exports.getOffset = function getOffset(el) {
	  var box = el.getBoundingClientRect();
	  var body = document.body;
	  var clientTop = el.clientTop || body.clientTop || 0;
	  var clientLeft = el.clientLeft || body.clientLeft || 0;
	  var scrollTop = window.pageYOffset || el.scrollTop;
	  var scrollLeft = window.pageXOffset || el.scrollLeft;
	  return {
	    top: box.top + scrollTop - clientTop,
	    left: box.left + scrollLeft - clientLeft
	  };
	};
	
	var transitionEnd = exports.transitionEnd = function transitionEnd(el, fun) {
	  var arr = ['webkitTransitionEnd', 'transitionend'];
	  var handler = {
	    handleEvent: function handleEvent(event) {
	      arr.map(function (eventName) {
	        el.removeEventListener(eventName, handler, false);
	      });
	      fun.apply(el, arguments);
	    }
	  };
	  arr.map(function (eventName) {
	    el.addEventListener(eventName, handler, false);
	  });
	};

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    on: {
	      "mousedown": _vm.handleMouseDown,
	      "mouseup": function($event) {
	        _vm.end()
	      },
	      "mouseleave": function($event) {
	        _vm.end()
	      },
	      "touchstart": _vm.handleTouchStart,
	      "touchend": function($event) {
	        _vm.end()
	      },
	      "touchcancel": function($event) {
	        _vm.end()
	      }
	    }
	  }, [_vm._h('div', {
	    ref: "holder",
	    staticClass: "mu-ripple-wrapper",
	    class: _vm.rippleWrapperClass
	  }, [_vm._l((_vm.ripples), function(ripple) {
	    return _vm._h('circle-ripple', {
	      key: ripple.key,
	      attrs: {
	        "color": ripple.color,
	        "opacity": ripple.opacity,
	        "merge-style": ripple.style
	      }
	    })
	  })]), " ", _vm._t("default")])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-a8c650ea", module.exports)
	  }
	}

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(120)
	
	/* script */
	__vue_exports__ = __webpack_require__(122)
	
	/* template */
	var __vue_template__ = __webpack_require__(123)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\PaintGame\\node_modules\\muse-ui\\src\\internal\\focusRipple.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-26903c38", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-26903c38", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] focusRipple.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(121);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(76)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-26903c38!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./focusRipple.vue", function() {
				var newContent = require("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-26903c38!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./focusRipple.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(68)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.mu-focus-ripple-wrapper {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n}\n.mu-focus-ripple {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  border-radius: 50%;\n  opacity: 0.16;\n  background-color: currentColor;\n  animation: mu-pulsate 750ms cubic-bezier(0.445, 0.05, 0.55, 0.95);\n  animation-iteration-count: infinite;\n  animation-direction: alternate;\n}\n@keyframes mu-pulsate {\n0% {\n    transform: scale(0.72);\n}\n100% {\n    transform: scale(0.85);\n}\n}\n", "", {"version":3,"sources":["/./node_modules/muse-ui/src/internal/focusRipple.vue"],"names":[],"mappings":";AAAA;EACE,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,OAAO;EACP,QAAQ;EACR,iBAAiB;CAClB;AACD;EACE,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,cAAc;EACd,+BAA+B;EAC/B,kEAAkE;EAClE,oCAAoC;EACpC,+BAA+B;CAChC;AACD;AACE;IACE,uBAAuB;CACxB;AACD;IACE,uBAAuB;CACxB;CACF","file":"focusRipple.vue","sourcesContent":[".mu-focus-ripple-wrapper {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n}\n.mu-focus-ripple {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  border-radius: 50%;\n  opacity: 0.16;\n  background-color: currentColor;\n  animation: mu-pulsate 750ms cubic-bezier(0.445, 0.05, 0.55, 0.95);\n  animation-iteration-count: infinite;\n  animation-direction: alternate;\n}\n@keyframes mu-pulsate {\n  0% {\n    transform: scale(0.72);\n  }\n  100% {\n    transform: scale(0.85);\n  }\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 122 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  props: {
	    color: {
	      type: String,
	      default: ''
	    },
	    opacity: {
	      type: Number
	    }
	  },
	  computed: {
	    style: function style() {
	      return {
	        color: this.color,
	        opacity: this.opacity
	      };
	    }
	  },
	  methods: {
	    setRippleSize: function setRippleSize() {
	      var el = this.$refs.innerCircle;
	      var height = el.offsetHeight;
	      var width = el.offsetWidth;
	      var size = Math.max(height, width);
	
	      var oldTop = 0;
	
	      if (el.style.top.indexOf('px', el.style.top.length - 2) !== -1) {
	        oldTop = parseInt(el.style.top);
	      }
	
	      el.style.height = size + 'px';
	      el.style.top = height / 2 - size / 2 + oldTop + 'px';
	    }
	  },
	  mounted: function mounted() {
	    this.setRippleSize();
	  },
	  updated: function updated() {
	    this.setRippleSize();
	  }
	};

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    staticClass: "mu-focus-ripple-wrapper"
	  }, [_vm._h('div', {
	    ref: "innerCircle",
	    staticClass: "mu-focus-ripple",
	    style: (_vm.style)
	  })])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-26903c38", module.exports)
	  }
	}

/***/ },
/* 124 */
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	// Source: http://jsfiddle.net/vWx8V/
	// http://stackoverflow.com/questions/5603195/full-list-of-javascript-keycodes
	
	/**
	 * Conenience method returns corresponding value for given keyName or keyCode.
	 *
	 * @param {Mixed} keyCode {Number} or keyName {String}
	 * @return {Mixed}
	 * @api public
	 */
	
	exports = module.exports = function (searchInput) {
	  // Keyboard Events
	  if (searchInput && 'object' === (typeof searchInput === 'undefined' ? 'undefined' : _typeof(searchInput))) {
	    var hasKeyCode = searchInput.which || searchInput.keyCode || searchInput.charCode;
	    if (hasKeyCode) searchInput = hasKeyCode;
	  }
	
	  // Numbers
	  if ('number' === typeof searchInput) return names[searchInput];
	
	  // Everything else (cast to string)
	  var search = String(searchInput);
	
	  // check codes
	  var foundNamedKey = codes[search.toLowerCase()];
	  if (foundNamedKey) return foundNamedKey;
	
	  // check aliases
	  var foundNamedKey = aliases[search.toLowerCase()];
	  if (foundNamedKey) return foundNamedKey;
	
	  // weird character?
	  if (search.length === 1) return search.charCodeAt(0);
	
	  return undefined;
	};
	
	/**
	 * Get by name
	 *
	 *   exports.code['enter'] // => 13
	 */
	
	var codes = exports.code = exports.codes = {
	  'backspace': 8,
	  'tab': 9,
	  'enter': 13,
	  'shift': 16,
	  'ctrl': 17,
	  'alt': 18,
	  'pause/break': 19,
	  'caps lock': 20,
	  'esc': 27,
	  'space': 32,
	  'page up': 33,
	  'page down': 34,
	  'end': 35,
	  'home': 36,
	  'left': 37,
	  'up': 38,
	  'right': 39,
	  'down': 40,
	  'insert': 45,
	  'delete': 46,
	  'command': 91,
	  'left command': 91,
	  'right command': 93,
	  'numpad *': 106,
	  'numpad +': 107,
	  'numpad -': 109,
	  'numpad .': 110,
	  'numpad /': 111,
	  'num lock': 144,
	  'scroll lock': 145,
	  'my computer': 182,
	  'my calculator': 183,
	  ';': 186,
	  '=': 187,
	  ',': 188,
	  '-': 189,
	  '.': 190,
	  '/': 191,
	  '`': 192,
	  '[': 219,
	  '\\': 220,
	  ']': 221,
	  "'": 222
	};
	
	// Helper aliases
	
	var aliases = exports.aliases = {
	  'windows': 91,
	  '⇧': 16,
	  '⌥': 18,
	  '⌃': 17,
	  '⌘': 91,
	  'ctl': 17,
	  'control': 17,
	  'option': 18,
	  'pause': 19,
	  'break': 19,
	  'caps': 20,
	  'return': 13,
	  'escape': 27,
	  'spc': 32,
	  'pgup': 33,
	  'pgdn': 34,
	  'ins': 45,
	  'del': 46,
	  'cmd': 91
	};
	
	/*!
	 * Programatically add the following
	 */
	
	// lower case chars
	for (i = 97; i < 123; i++) {
	  codes[String.fromCharCode(i)] = i - 32;
	} // numbers
	for (var i = 48; i < 58; i++) {
	  codes[i - 48] = i;
	} // function keys
	for (i = 1; i < 13; i++) {
	  codes['f' + i] = i + 111;
	} // numpad keys
	for (i = 0; i < 10; i++) {
	  codes['numpad ' + i] = i + 96;
	} /**
	   * Get by code
	   *
	   *   exports.name[13] // => 'Enter'
	   */
	
	var names = exports.names = exports.title = {}; // title for backward compat
	
	// Create reverse mapping
	for (i in codes) {
	  names[codes[i]] = i;
	} // Add aliases
	for (var alias in aliases) {
	  codes[alias] = aliases[alias];
	}

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _tooltip = __webpack_require__(126);
	
	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_tooltip).default;
	  }
	});

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(127)
	
	/* script */
	__vue_exports__ = __webpack_require__(129)
	
	/* template */
	var __vue_template__ = __webpack_require__(130)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\PaintGame\\node_modules\\muse-ui\\src\\tooltip\\tooltip.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-2c3010c2", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-2c3010c2", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] tooltip.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(128);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(76)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-2c3010c2!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./tooltip.vue", function() {
				var newContent = require("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-2c3010c2!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./tooltip.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(68)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.mu-tooltip {\n  position: absolute;\n  font-size: 10px;\n  line-height: 22px;\n  padding: 0 8px;\n  z-index: 300;\n  color: #ffffff;\n  overflow: hidden;\n  top: -1000px;\n  border-radius: 2px;\n  user-select: none;\n  opacity: 0;\n  transition: top 0ms cubic-bezier(0.23, 1, 0.32, 1) 450ms, transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, opacity 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n}\n.mu-tooltip.when-shown {\n  opacity: 0.9;\n  transition: top 0ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, opacity 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n}\n.mu-tooltip.touched {\n  font-size: 14px;\n  line-height: 32px;\n  padding: 0 16px;\n}\n.mu-tooltip-ripple {\n  position: absolute;\n  transform: translate(-50%, -50%);\n  border-radius: 50%;\n  background-color: transparent;\n  transition: width 0ms cubic-bezier(0.23, 1, 0.32, 1) 450ms, height 0ms cubic-bezier(0.23, 1, 0.32, 1) 450ms, background-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n}\n.mu-tooltip-ripple.when-shown {\n  background-color: #616161;\n  transition: width 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, height 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, background-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n}\n.mu-tooltip-label {\n  white-space: nowrap;\n  position: relative;\n}\n", "", {"version":3,"sources":["/./node_modules/muse-ui/src/tooltip/tooltip.vue"],"names":[],"mappings":";AAAA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,eAAe;EACf,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,WAAW;EACX,+JAA+J;CAChK;AACD;EACE,aAAa;EACb,6JAA6J;CAC9J;AACD;EACE,gBAAgB;EAChB,kBAAkB;EAClB,gBAAgB;CACjB;AACD;EACE,mBAAmB;EACnB,iCAAiC;EACjC,mBAAmB;EACnB,8BAA8B;EAC9B,uKAAuK;CACxK;AACD;EACE,0BAA0B;EAC1B,uKAAuK;CACxK;AACD;EACE,oBAAoB;EACpB,mBAAmB;CACpB","file":"tooltip.vue","sourcesContent":[".mu-tooltip {\n  position: absolute;\n  font-size: 10px;\n  line-height: 22px;\n  padding: 0 8px;\n  z-index: 300;\n  color: #ffffff;\n  overflow: hidden;\n  top: -1000px;\n  border-radius: 2px;\n  user-select: none;\n  opacity: 0;\n  transition: top 0ms cubic-bezier(0.23, 1, 0.32, 1) 450ms, transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, opacity 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n}\n.mu-tooltip.when-shown {\n  opacity: 0.9;\n  transition: top 0ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, opacity 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n}\n.mu-tooltip.touched {\n  font-size: 14px;\n  line-height: 32px;\n  padding: 0 16px;\n}\n.mu-tooltip-ripple {\n  position: absolute;\n  transform: translate(-50%, -50%);\n  border-radius: 50%;\n  background-color: transparent;\n  transition: width 0ms cubic-bezier(0.23, 1, 0.32, 1) 450ms, height 0ms cubic-bezier(0.23, 1, 0.32, 1) 450ms, background-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n}\n.mu-tooltip-ripple.when-shown {\n  background-color: #616161;\n  transition: width 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, height 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, background-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n}\n.mu-tooltip-label {\n  white-space: nowrap;\n  position: relative;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 129 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  name: 'mu-tooltip',
	  props: {
	    label: {
	      type: String
	    },
	    trigger: {
	      type: window.Element
	    },
	    verticalPosition: {
	      type: String, // top bottom
	      default: 'bottom'
	    },
	    horizontalPosition: {
	      type: String, // left right center
	      default: 'center'
	    },
	    show: {
	      type: Boolean,
	      default: false
	    },
	    touch: {
	      type: Boolean,
	      default: false
	    }
	  },
	  data: function data() {
	    return {
	      offsetWidth: 0,
	      triggerWidth: 0,
	      triggerHeight: 0
	    };
	  },
	
	  computed: {
	    tooltipStyle: function tooltipStyle() {
	      var horizontalPosition = this.horizontalPosition,
	          verticalPosition = this.verticalPosition,
	          offsetWidth = this.offsetWidth,
	          touch = this.touch,
	          triggerWidth = this.triggerWidth,
	          triggerHeight = this.triggerHeight;
	
	      var touchMarginOffset = touch ? 10 : 0;
	      var touchOffsetTop = touch ? -20 : -10;
	      var offset = verticalPosition === 'bottom' ? 14 + touchMarginOffset : -14 - touchMarginOffset;
	      return {
	        right: horizontalPosition === 'left' ? '0' : null,
	        left: horizontalPosition === 'center' ? (offsetWidth - triggerWidth) / 2 * -1 + 'px' : horizontalPosition === 'right' ? '0' : '',
	        top: verticalPosition === 'top' ? touchOffsetTop + 'px' : triggerHeight - offset + touchMarginOffset + 2 + 'px',
	        transform: 'translate(0px, ' + offset + 'px)'
	      };
	    },
	    rippleStyle: function rippleStyle() {
	      var horizontalPosition = this.horizontalPosition,
	          verticalPosition = this.verticalPosition;
	
	      return {
	        left: horizontalPosition === 'center' ? '50%' : horizontalPosition === 'left' ? '100%' : '0%',
	        top: verticalPosition === 'bottom' ? '0' : '100%'
	      };
	    }
	  },
	  methods: {
	    setRippleSize: function setRippleSize() {
	      var ripple = this.$refs.ripple;
	      var tooltip = this.$el;
	      var tooltipWidth = parseInt(tooltip.offsetWidth, 10) / (this.horizontalPosition === 'center' ? 2 : 1);
	      var tooltipHeight = parseInt(tooltip.offsetHeight, 10);
	      var rippleDiameter = Math.ceil(Math.sqrt(Math.pow(tooltipHeight, 2) + Math.pow(tooltipWidth, 2)) * 2);
	      if (this.show) {
	        ripple.style.height = rippleDiameter + 'px';
	        ripple.style.width = rippleDiameter + 'px';
	      } else {
	        ripple.style.width = '0px';
	        ripple.style.height = '0px';
	      }
	    },
	    setTooltipSize: function setTooltipSize() {
	      this.offsetWidth = this.$el.offsetWidth;
	      if (!this.trigger) return;
	      this.triggerWidth = this.trigger.offsetWidth;
	      this.triggerHeight = this.trigger.offsetHeight;
	    }
	  },
	  mounted: function mounted() {
	    this.setRippleSize();
	    this.setTooltipSize();
	  },
	  beforeUpdate: function beforeUpdate() {
	    this.setTooltipSize();
	  },
	  updated: function updated() {
	    this.setRippleSize();
	  }
	};

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    staticClass: "mu-tooltip",
	    class: {
	      'touched': _vm.touch, 'when-shown': _vm.show
	    },
	    style: (_vm.tooltipStyle)
	  }, [_vm._h('div', {
	    ref: "ripple",
	    staticClass: "mu-tooltip-ripple",
	    class: {
	      'when-shown': _vm.show
	    },
	    style: (_vm.rippleStyle)
	  }), " ", _vm._h('span', {
	    staticClass: "mu-tooltip-label"
	  }, [_vm._s(_vm.label)])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-2c3010c2", module.exports)
	  }
	}

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('abstract-button', {
	    staticClass: "mu-icon-button",
	    attrs: {
	      "target": _vm.target,
	      "href": _vm.href,
	      "disabled": _vm.disabled,
	      "keyboardFocused": _vm.keyboardFocused
	    },
	    on: {
	      "click": _vm.handleClick,
	      "hover": _vm.handleHover,
	      "hoverExit": _vm.handleHoverExit,
	      "keyboardFocus": _vm.handleKeyboardFocus
	    },
	    nativeOn: {
	      "touchstart": function($event) {
	        _vm.handleStop($event)
	      },
	      "mousedown": function($event) {
	        _vm.handleStop($event)
	      }
	    }
	  }, [_vm._t("default", [_vm._h('icon', {
	    class: [_vm.iconClass],
	    domProps: {
	      "value": _vm.icon
	    }
	  })]), " ", (_vm.tooltip) ? _vm._h('tooltip', {
	    attrs: {
	      "trigger": _vm.tooltipTrigger,
	      "verticalPosition": _vm.verticalPosition,
	      "horizontalPosition": _vm.horizontalPosition,
	      "show": _vm.tooltipShown,
	      "label": _vm.tooltip,
	      "touch": _vm.touch
	    }
	  }) : _vm._e()])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-d3625f9e", module.exports)
	  }
	}

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _bottomNav = __webpack_require__(133);
	
	Object.defineProperty(exports, 'bottomNav', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_bottomNav).default;
	  }
	});
	
	var _bottomNavItem = __webpack_require__(137);
	
	Object.defineProperty(exports, 'bottomNavItem', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_bottomNavItem).default;
	  }
	});

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(134)
	
	/* script */
	__vue_exports__ = __webpack_require__(136)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\PaintGame\\node_modules\\muse-ui\\src\\bottomNav\\bottomNav.vue"
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-44894609", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-44894609", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] bottomNav.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(135);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(76)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-44894609!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./bottomNav.vue", function() {
				var newContent = require("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-44894609!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./bottomNav.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(68)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.mu-bottom-nav {\n  height: 56px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #ffffff;\n  text-align: center;\n  position: relative;\n  width: 100%;\n  color: #ffffff;\n}\n.mu-bottom-nav-shift {\n  background-color: #03a9f4;\n}\n.mu-bottom-nav-shift-wrapper {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n", "", {"version":3,"sources":["/./node_modules/muse-ui/src/bottomNav/bottomNav.vue"],"names":[],"mappings":";AAAA;EACE,aAAa;EACb,cAAc;EACd,wBAAwB;EACxB,oBAAoB;EACpB,0BAA0B;EAC1B,mBAAmB;EACnB,mBAAmB;EACnB,YAAY;EACZ,eAAe;CAChB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,aAAa;EACb,YAAY;EACZ,cAAc;EACd,wBAAwB;EACxB,oBAAoB;EACpB,mBAAmB;CACpB","file":"bottomNav.vue","sourcesContent":[".mu-bottom-nav {\n  height: 56px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #ffffff;\n  text-align: center;\n  position: relative;\n  width: 100%;\n  color: #ffffff;\n}\n.mu-bottom-nav-shift {\n  background-color: #03a9f4;\n}\n.mu-bottom-nav-shift-wrapper {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _abstractButton = __webpack_require__(107);
	
	var _abstractButton2 = _interopRequireDefault(_abstractButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'mu-bottom-nav',
	  props: {
	    shift: {
	      type: Boolean,
	      default: false
	    },
	    value: {}
	  },
	  methods: {
	    handleItemClick: function handleItemClick(value, item) {
	      if (value !== this.value) {
	        this.$emit('change', value);
	      }
	      this.$emit('itemClick', item);
	    },
	    setChildrenInstance: function setChildrenInstance() {
	      var _this = this;
	
	      var children = this.$slots.default;
	      children.forEach(function (vNode) {
	        if (vNode && vNode.child && vNode.child.isBottomNavItem) {
	          vNode.child.bottomNav = _this;
	        }
	      });
	    }
	  },
	  mounted: function mounted() {
	    this.setChildrenInstance();
	  },
	  updated: function updated() {
	    var _this2 = this;
	
	    var children = this.$slots.default;
	    children.forEach(function (vNode) {
	      if (vNode && vNode.child && vNode.child.isBottomNavItem) {
	        vNode.child.bottomNav = _this2;
	      }
	    });
	  },
	  render: function render(h) {
	    return h(_abstractButton2.default, {
	      class: ['mu-bottom-nav', this.shift ? 'mu-bottom-nav-shift' : undefined],
	      props: {
	        disableTouchRipple: !this.shift,
	        centerRipple: false,
	        wrapperClass: 'mu-bottom-nav-shift-wrapper',
	        containerElement: 'div',
	        rippleOpacity: 0.3
	      }
	    }, this.$slots.default);
	  }
	};

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(138)
	
	/* script */
	__vue_exports__ = __webpack_require__(140)
	
	/* template */
	var __vue_template__ = __webpack_require__(141)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\PaintGame\\node_modules\\muse-ui\\src\\bottomNav\\bottomNavItem.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-2322433c", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-2322433c", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] bottomNavItem.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(139);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(76)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-2322433c!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./bottomNavItem.vue", function() {
				var newContent = require("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-2322433c!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./bottomNavItem.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(68)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.mu-buttom-item {\n  flex: 1;\n  min-width: 80px;\n  max-width: 168px;\n  position: relative;\n  height: 100%;\n  color: rgba(0, 0, 0, 0.54);\n  padding: 0;\n  background: none;\n  appearance: none;\n  text-decoration: none;\n  border: none;\n  outline: none;\n  transition: all 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95);\n}\n.mu-bottom-nav-shift .mu-buttom-item {\n  color: rgba(255, 255, 255, 0.7);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 8px 12px 10px;\n  min-width: 56px;\n  max-width: 168px;\n}\n.mu-buttom-item-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n.mu-bottom-item-active {\n  color: #03a9f4;\n}\n.mu-bottom-item-active .mu-bottom-item-text {\n  font-size: 14px;\n}\n.mu-bottom-nav-shift .mu-bottom-item-active {\n  color: #ffffff;\n  flex: 1.7;\n  min-width: 96px;\n  max-width: 168px;\n}\n.mu-bottom-item-text {\n  font-size: 12px;\n  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1), color 0.3s, font-size 0.3s;\n  backface-visibility: hidden;\n}\n.mu-bottom-nav-shift .mu-bottom-item-text {\n  opacity: 0;\n  transform: scale(1) translate3d(0, 6px, 0);\n}\n.mu-bottom-nav-shift .mu-bottom-item-active .mu-bottom-item-text {\n  transform: scale(1) translate3d(0, 2px, 0);\n  opacity: 1;\n}\n.mu-bottom-item-icon {\n  transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);\n  backface-visibility: hidden;\n}\n.mu-bottom-nav-shift .mu-bottom-item-icon {\n  margin: auto;\n  transform: translate3d(0, 8px, 0);\n}\n.mu-bottom-nav-shift .mu-bottom-item-active .mu-bottom-item-icon {\n  transform: scale(1) translateZ(0);\n}\n", "", {"version":3,"sources":["/./node_modules/muse-ui/src/bottomNav/bottomNavItem.vue"],"names":[],"mappings":";AAAA;EACE,QAAQ;EACR,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;EACnB,aAAa;EACb,2BAA2B;EAC3B,WAAW;EACX,iBAAiB;EACjB,iBAAiB;EACjB,sBAAsB;EACtB,aAAa;EACb,cAAc;EACd,2DAA2D;CAC5D;AACD;EACE,gCAAgC;EAChC,cAAc;EACd,uBAAuB;EACvB,oBAAoB;EACpB,wBAAwB;EACxB,uBAAuB;EACvB,gBAAgB;EAChB,iBAAiB;CAClB;AACD;EACE,cAAc;EACd,uBAAuB;EACvB,oBAAoB;EACpB,wBAAwB;EACxB,aAAa;CACd;AACD;EACE,eAAe;CAChB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,eAAe;EACf,UAAU;EACV,gBAAgB;EAChB,iBAAiB;CAClB;AACD;EACE,gBAAgB;EAChB,gFAAgF;EAChF,4BAA4B;CAC7B;AACD;EACE,WAAW;EACX,2CAA2C;CAC5C;AACD;EACE,2CAA2C;EAC3C,WAAW;CACZ;AACD;EACE,qDAAqD;EACrD,4BAA4B;CAC7B;AACD;EACE,aAAa;EACb,kCAAkC;CACnC;AACD;EACE,kCAAkC;CACnC","file":"bottomNavItem.vue","sourcesContent":[".mu-buttom-item {\n  flex: 1;\n  min-width: 80px;\n  max-width: 168px;\n  position: relative;\n  height: 100%;\n  color: rgba(0, 0, 0, 0.54);\n  padding: 0;\n  background: none;\n  appearance: none;\n  text-decoration: none;\n  border: none;\n  outline: none;\n  transition: all 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95);\n}\n.mu-bottom-nav-shift .mu-buttom-item {\n  color: rgba(255, 255, 255, 0.7);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 8px 12px 10px;\n  min-width: 56px;\n  max-width: 168px;\n}\n.mu-buttom-item-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n.mu-bottom-item-active {\n  color: #03a9f4;\n}\n.mu-bottom-item-active .mu-bottom-item-text {\n  font-size: 14px;\n}\n.mu-bottom-nav-shift .mu-bottom-item-active {\n  color: #ffffff;\n  flex: 1.7;\n  min-width: 96px;\n  max-width: 168px;\n}\n.mu-bottom-item-text {\n  font-size: 12px;\n  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1), color 0.3s, font-size 0.3s;\n  backface-visibility: hidden;\n}\n.mu-bottom-nav-shift .mu-bottom-item-text {\n  opacity: 0;\n  transform: scale(1) translate3d(0, 6px, 0);\n}\n.mu-bottom-nav-shift .mu-bottom-item-active .mu-bottom-item-text {\n  transform: scale(1) translate3d(0, 2px, 0);\n  opacity: 1;\n}\n.mu-bottom-item-icon {\n  transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);\n  backface-visibility: hidden;\n}\n.mu-bottom-nav-shift .mu-bottom-item-icon {\n  margin: auto;\n  transform: translate3d(0, 8px, 0);\n}\n.mu-bottom-nav-shift .mu-bottom-item-active .mu-bottom-item-icon {\n  transform: scale(1) translateZ(0);\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _abstractButton = __webpack_require__(107);
	
	var _abstractButton2 = _interopRequireDefault(_abstractButton);
	
	var _icon = __webpack_require__(93);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	var _utils = __webpack_require__(98);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'mu-bottom-nav-item',
	  props: {
	    icon: {
	      type: String,
	      default: ''
	    },
	    title: {
	      type: String,
	      default: ''
	    },
	    href: {
	      type: String
	    },
	    value: {}
	  },
	  data: function data() {
	    return {
	      bottomNav: null
	    };
	  },
	  created: function created() {
	    this.isBottomNavItem = true;
	  },
	
	  computed: {
	    active: function active() {
	      return this.bottomNav && (0, _utils.isNotNull)(this.value) && this.bottomNav.value === this.value;
	    },
	    shift: function shift() {
	      return this.bottomNav && this.bottomNav.shift;
	    }
	  },
	  methods: {
	    handleClick: function handleClick() {
	      if (this.bottomNav && this.bottomNav.handleItemClick) this.bottomNav.handleItemClick(this.value);
	    }
	  },
	  mounted: function mounted() {
	    var children = this.$parent.$children;
	    for (var i = 0; i < children.length; i++) {
	      if (children[i].$el === this.$el) {
	        this.index = i;
	        break;
	      }
	    }
	  },
	
	  components: {
	    'abstract-button': _abstractButton2.default,
	    icon: _icon2.default
	  }
	}; //
	//
	//
	//
	//
	//
	//

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('abstract-button', {
	    staticClass: "mu-buttom-item",
	    class: {
	      'mu-bottom-item-active': _vm.active
	    },
	    attrs: {
	      "href": _vm.href,
	      "disableTouchRipple": _vm.shift,
	      "center-ripple": false,
	      "wrapperClass": "mu-buttom-item-wrapper"
	    },
	    nativeOn: {
	      "click": function($event) {
	        _vm.handleClick($event)
	      }
	    }
	  }, [_vm._h('icon', {
	    staticClass: "mu-bottom-item-icon",
	    domProps: {
	      "value": _vm.icon
	    }
	  }), " ", _vm._h('span', {
	    staticClass: "mu-bottom-item-text"
	  }, [_vm._s(_vm.title)])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-2322433c", module.exports)
	  }
	}

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _drawer = __webpack_require__(143);
	
	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_drawer).default;
	  }
	});

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(144)
	
	/* script */
	__vue_exports__ = __webpack_require__(146)
	
	/* template */
	var __vue_template__ = __webpack_require__(160)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\PaintGame\\node_modules\\muse-ui\\src\\drawer\\drawer.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-526b2ef1", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-526b2ef1", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] drawer.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(145);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(76)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-526b2ef1!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./drawer.vue", function() {
				var newContent = require("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-526b2ef1!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./drawer.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(68)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.mu-drawer {\n  width: 256px;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  transition-property: transform, visibility;\n  transform: translate3d(-100%, 0, 0);\n  border-radius: 0;\n  left: 0;\n  visibility: hidden;\n  z-index: 200;\n}\n.mu-drawer::-webkit-scrollbar {\n  display: none !important;\n  width: 0 !important;\n  height: 0 !important;\n  -webkit-appearance: none;\n  opacity: 0 !important;\n}\n.mu-drawer.right {\n  right: 0;\n  left: auto;\n  transform: translate3d(100%, 0, 0);\n}\n.mu-drawer.open {\n  transform: translate3d(0, 0, 0);\n  visibility: visible;\n}\n", "", {"version":3,"sources":["/./node_modules/muse-ui/src/drawer/drawer.vue"],"names":[],"mappings":";AAAA;EACE,aAAa;EACb,gBAAgB;EAChB,OAAO;EACP,UAAU;EACV,eAAe;EACf,kCAAkC;EAClC,2CAA2C;EAC3C,oCAAoC;EACpC,iBAAiB;EACjB,QAAQ;EACR,mBAAmB;EACnB,aAAa;CACd;AACD;EACE,yBAAyB;EACzB,oBAAoB;EACpB,qBAAqB;EACrB,yBAAyB;EACzB,sBAAsB;CACvB;AACD;EACE,SAAS;EACT,WAAW;EACX,mCAAmC;CACpC;AACD;EACE,gCAAgC;EAChC,oBAAoB;CACrB","file":"drawer.vue","sourcesContent":[".mu-drawer {\n  width: 256px;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  transition-property: transform, visibility;\n  transform: translate3d(-100%, 0, 0);\n  border-radius: 0;\n  left: 0;\n  visibility: hidden;\n  z-index: 200;\n}\n.mu-drawer::-webkit-scrollbar {\n  display: none !important;\n  width: 0 !important;\n  height: 0 !important;\n  -webkit-appearance: none;\n  opacity: 0 !important;\n}\n.mu-drawer.right {\n  right: 0;\n  left: auto;\n  transform: translate3d(100%, 0, 0);\n}\n.mu-drawer.open {\n  transform: translate3d(0, 0, 0);\n  visibility: visible;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _paper = __webpack_require__(147);
	
	var _paper2 = _interopRequireDefault(_paper);
	
	var _manager = __webpack_require__(153);
	
	var _manager2 = _interopRequireDefault(_manager);
	
	var _utils = __webpack_require__(98);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'mu-drawer',
	  props: {
	    right: {
	      type: Boolean,
	      default: false
	    },
	    open: {
	      type: Boolean,
	      default: false
	    },
	    docked: {
	      type: Boolean,
	      default: true
	    },
	    width: {
	      type: [Number, String]
	    },
	    zDepth: {
	      type: Number,
	      default: 2
	    }
	  },
	  computed: {
	    style: function style() {
	      return {
	        width: (0, _utils.getWidth)(this.width)
	      };
	    }
	  },
	  methods: {
	    overlayClick: function overlayClick() {
	      this.$emit('close', 'overlay');
	    },
	    escPress: function escPress() {
	      this.$emit('close', 'keyboard');
	    }
	  },
	  watch: {
	    open: function open(val) {
	      if (val && !this.docked) {
	        _manager2.default.open(this);
	      } else {
	        _manager2.default.close(this);
	      }
	    },
	    docked: function docked(val, oldVal) {
	      if (val && !oldVal) {
	        _manager2.default.close(this);
	        if (this.$el) this.$el.style.zIndex = '';
	      }
	    }
	  },
	  beforeDestroy: function beforeDestroy() {
	    _manager2.default.close(this);
	  },
	
	  components: {
	    paper: _paper2.default
	  }
	}; //
	//
	//
	//
	//
	//

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _paper = __webpack_require__(148);
	
	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_paper).default;
	  }
	});

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(149)
	
	/* script */
	__vue_exports__ = __webpack_require__(151)
	
	/* template */
	var __vue_template__ = __webpack_require__(152)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\PaintGame\\node_modules\\muse-ui\\src\\paper\\paper.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-619ba99e", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-619ba99e", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] paper.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(150);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(76)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-619ba99e!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./paper.vue", function() {
				var newContent = require("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-619ba99e!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./paper.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(68)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.mu-paper {\n  transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);\n  color: rgba(0, 0, 0, 0.87);\n  background-color: #ffffff;\n  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;\n}\n.mu-paper-round {\n  border-radius: 2px;\n}\n.mu-paper-circle {\n  border-radius: 50%;\n}\n.mu-paper-1 {\n  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;\n}\n.mu-paper-2 {\n  box-shadow: rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px;\n}\n.mu-paper-3 {\n  box-shadow: rgba(0, 0, 0, 0.247059) 0px 14px 45px, rgba(0, 0, 0, 0.219608) 0px 10px 18px;\n}\n.mu-paper-4 {\n  box-shadow: rgba(0, 0, 0, 0.247059) 0px 14px 45px, rgba(0, 0, 0, 0.219608) 0px 10px 18px;\n}\n.mu-paper-5 {\n  box-shadow: rgba(0, 0, 0, 0.298039) 0px 19px 60px, rgba(0, 0, 0, 0.219608) 0px 15px 20px;\n}\n", "", {"version":3,"sources":["/./node_modules/muse-ui/src/paper/paper.vue"],"names":[],"mappings":";AAAA;EACE,qDAAqD;EACrD,2BAA2B;EAC3B,0BAA0B;EAC1B,qFAAqF;CACtF;AACD;EACE,mBAAmB;CACpB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,qFAAqF;CACtF;AACD;EACE,uFAAuF;CACxF;AACD;EACE,yFAAyF;CAC1F;AACD;EACE,yFAAyF;CAC1F;AACD;EACE,yFAAyF;CAC1F","file":"paper.vue","sourcesContent":[".mu-paper {\n  transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);\n  color: rgba(0, 0, 0, 0.87);\n  background-color: #ffffff;\n  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;\n}\n.mu-paper-round {\n  border-radius: 2px;\n}\n.mu-paper-circle {\n  border-radius: 50%;\n}\n.mu-paper-1 {\n  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;\n}\n.mu-paper-2 {\n  box-shadow: rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px;\n}\n.mu-paper-3 {\n  box-shadow: rgba(0, 0, 0, 0.247059) 0px 14px 45px, rgba(0, 0, 0, 0.219608) 0px 10px 18px;\n}\n.mu-paper-4 {\n  box-shadow: rgba(0, 0, 0, 0.247059) 0px 14px 45px, rgba(0, 0, 0, 0.219608) 0px 10px 18px;\n}\n.mu-paper-5 {\n  box-shadow: rgba(0, 0, 0, 0.298039) 0px 19px 60px, rgba(0, 0, 0, 0.219608) 0px 15px 20px;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 151 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  name: 'mu-paper',
	  props: {
	    circle: {
	      type: Boolean,
	      default: false
	    },
	    rounded: {
	      type: Boolean,
	      default: true
	    },
	    zDepth: {
	      type: Number,
	      default: 1
	    }
	  },
	  computed: {
	    paperClass: function paperClass() {
	      var arr = [];
	      if (this.circle) arr.push('mu-paper-circle');
	      if (this.rounded) arr.push('mu-paper-round');
	      arr.push('mu-paper-' + this.zDepth);
	      return arr;
	    }
	  }
	};

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    staticClass: "mu-paper",
	    class: _vm.paperClass
	  }, [_vm._t("default")])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-619ba99e", module.exports)
	  }
	}

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vue = __webpack_require__(5);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _overlay = __webpack_require__(154);
	
	var _overlay2 = _interopRequireDefault(_overlay);
	
	var _utils = __webpack_require__(159);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var Overlay = _vue2.default.extend(_overlay2.default);
	
	var PopupManager = {
	  instances: [],
	  overlay: false,
	
	  open: function open(instance) {
	    var _this = this;
	
	    if (!instance || this.instances.indexOf(instance) !== -1) return;
	    if (this.instances.length === 0) {
	      this.showOverlay(instance.overlayColor, instance.overlayOpacity);
	    }
	    this.instances.push(instance);
	    this.changeOverlayStyle();
	    if (instance.$el) {
	      this.setZIndex(instance);
	    } else {
	      _vue2.default.nextTick(function () {
	        _this.setZIndex(instance);
	      });
	    }
	  },
	  setZIndex: function setZIndex(instance) {
	    var dom = instance.$el;
	    dom.style.zIndex = (0, _utils.getZIndex)();
	  },
	  close: function close(instance) {
	    var _this2 = this;
	
	    var index = this.instances.indexOf(instance);
	    if (index === -1) return;
	    _vue2.default.nextTick(function () {
	      _this2.instances.splice(index, 1);
	      if (_this2.instances.length === 0) {
	        _this2.closeOverlay();
	      }
	      _this2.changeOverlayStyle();
	    });
	  },
	  showOverlay: function showOverlay(color, opacity) {
	    var overlay = this.overlay = new Overlay({
	      el: document.createElement('div')
	    });
	    overlay.fixed = true;
	    overlay.color = color;
	    overlay.opacity = opacity;
	    overlay.zIndex = 2000;
	    overlay.onClick = this.handleOverlayClick.bind(this);
	    document.body.appendChild(overlay.$el);
	    this.preventScrolling();
	    _vue2.default.nextTick(function () {
	      overlay.show = true;
	    });
	  },
	  preventScrolling: function preventScrolling() {
	    if (this.locked) return;
	    // body 操作
	    var body = document.getElementsByTagName('body')[0];
	    var html = document.getElementsByTagName('html')[0];
	    this.bodyOverflow = body.style.overflow;
	    this.htmlOverflow = html.style.overflow;
	    body.style.overflow = 'hidden';
	    html.style.overflow = 'hidden';
	    this.locked = true;
	  },
	  allowScrolling: function allowScrolling() {
	    var body = document.getElementsByTagName('body')[0];
	    var html = document.getElementsByTagName('html')[0];
	    body.style.overflow = this.bodyOverflow || '';
	    html.style.overflow = this.htmlOverflow || '';
	    this.bodyOverflow = null;
	    this.htmlOverflow = null;
	    this.locked = false;
	  },
	  closeOverlay: function closeOverlay() {
	    if (!this.overlay) return;
	    this.allowScrolling();
	    var overlay = this.overlay;
	    overlay.show = false;
	    this.overlay = null;
	    setTimeout(function () {
	      overlay.$el.remove();
	      overlay.$destroy();
	    }, 450);
	  },
	  changeOverlayStyle: function changeOverlayStyle() {
	    if (!this.overlay || this.instances.length === 0) return;
	    var instance = this.instances[this.instances.length - 1];
	    this.overlay.color = instance.overlayColor;
	    this.overlay.opacity = instance.overlayOpacity;
	  },
	  handleOverlayClick: function handleOverlayClick() {
	    if (this.instances.length === 0) return;
	    var instance = this.instances[this.instances.length - 1];
	    if (instance.overlayClick) {
	      instance.overlayClick();
	    }
	  }
	};
	
	// window.addEventListener('keydown', function (event) {
	//   if (event.keyCode === 27) { // ESC
	//     if (PopupManager.instances.length > 0) {
	//       const topInstance = PopupManager.instances[PopupManager.instances.length - 1]
	//       if (!topInstance) return
	//       if (topInstance.escPress) {
	//         topInstance.escPress()
	//       }
	//     }
	//   }
	// })
	
	exports.default = PopupManager;

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(155)
	
	/* script */
	__vue_exports__ = __webpack_require__(157)
	
	/* template */
	var __vue_template__ = __webpack_require__(158)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\PaintGame\\node_modules\\muse-ui\\src\\internal\\popup\\overlay.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-3184be48", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-3184be48", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] overlay.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(156);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(76)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../css-loader/index.js?sourceMap!./../../../../vue-loader/lib/style-rewriter.js?id=data-v-3184be48!./../../../../vue-loader/lib/selector.js?type=styles&index=0!./overlay.vue", function() {
				var newContent = require("!!./../../../../css-loader/index.js?sourceMap!./../../../../vue-loader/lib/style-rewriter.js?id=data-v-3184be48!./../../../../vue-loader/lib/selector.js?type=styles&index=0!./overlay.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(68)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.mu-overlay {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: #000;\n  opacity: .4;\n  z-index: 1000;\n}\n.mu-overlay-fade-enter-active, .mu-overlay-fade-leave-active {\n  transition: all .45s cubic-bezier(0.23, 1, 0.32, 1);\n}\n.mu-overlay-fade-enter,\n.mu-overlay-fade-leave-active {\n  opacity: 0 !important;\n}\n", "", {"version":3,"sources":["/./node_modules/muse-ui/src/internal/popup/overlay.vue?f0d77ed0"],"names":[],"mappings":";AAwDA;EACA,mBAAA;EACA,QAAA;EACA,SAAA;EACA,OAAA;EACA,UAAA;EACA,uBAAA;EACA,YAAA;EACA,cAAA;CACA;AAEA;EACA,oDAAA;CACA;AAEA;;EAEA,sBAAA;CACA","file":"overlay.vue","sourcesContent":["<template>\n  <transition name=\"mu-overlay-fade\">\n    <div class=\"mu-overlay\" v-if=\"show\" @click=\"handleClick\" @touchmove=\"prevent\" :style=\"style\" ></div>\n  </transition>\n</template>\n<script>\nexport default {\n  name: 'mu-overlay',\n  props: {\n    show: {\n      type: Boolean,\n      default: false\n    },\n    fixed: {\n      type: Boolean,\n      default: false\n    },\n    onClick: {\n      type: Function\n    },\n    opacity: {\n      type: Number,\n      default: 0.4\n    },\n    color: {\n      type: String,\n      default: '#000'\n    },\n    zIndex: {\n      type: Number\n    }\n  },\n  computed: {\n    style () {\n      return {\n        'opacity': this.opacity,\n        'background-color': this.color,\n        'position': this.fixed ? 'fixed' : '',\n        'z-index': this.zIndex\n      }\n    }\n  },\n  methods: {\n    prevent (event) {\n      event.preventDefault()\n      event.stopPropagation()\n    },\n    handleClick () {\n      if (this.onClick) {\n        this.onClick()\n      }\n    }\n  }\n}\n</script>\n<style lang=\"css\">\n.mu-overlay {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: #000;\n  opacity: .4;\n  z-index: 1000;\n}\n\n.mu-overlay-fade-enter-active, .mu-overlay-fade-leave-active {\n  transition: all .45s cubic-bezier(0.23, 1, 0.32, 1);\n}\n\n.mu-overlay-fade-enter,\n.mu-overlay-fade-leave-active {\n  opacity: 0 !important;\n}\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 157 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	
	exports.default = {
	  name: 'mu-overlay',
	  props: {
	    show: {
	      type: Boolean,
	      default: false
	    },
	    fixed: {
	      type: Boolean,
	      default: false
	    },
	    onClick: {
	      type: Function
	    },
	    opacity: {
	      type: Number,
	      default: 0.4
	    },
	    color: {
	      type: String,
	      default: '#000'
	    },
	    zIndex: {
	      type: Number
	    }
	  },
	  computed: {
	    style: function style() {
	      return {
	        'opacity': this.opacity,
	        'background-color': this.color,
	        'position': this.fixed ? 'fixed' : '',
	        'z-index': this.zIndex
	      };
	    }
	  },
	  methods: {
	    prevent: function prevent(event) {
	      event.preventDefault();
	      event.stopPropagation();
	    },
	    handleClick: function handleClick() {
	      if (this.onClick) {
	        this.onClick();
	      }
	    }
	  }
	};

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('transition', {
	    attrs: {
	      "name": "mu-overlay-fade"
	    }
	  }, [(_vm.show) ? _vm._h('div', {
	    staticClass: "mu-overlay",
	    style: (_vm.style),
	    on: {
	      "click": _vm.handleClick,
	      "touchmove": _vm.prevent
	    }
	  }) : _vm._e()])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-3184be48", module.exports)
	  }
	}

/***/ },
/* 159 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var zIndex = 20141223;
	
	var getZIndex = exports.getZIndex = function getZIndex() {
	  return zIndex++;
	};
	
	var getDOM = exports.getDOM = function getDOM(dom) {
	  if (dom.nodeType === 3) {
	    dom = dom.nextElementSibling || dom.nextSibling;
	    getDOM(dom);
	  }
	  return dom;
	};

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('paper', {
	    staticClass: "mu-drawer",
	    class: {
	      'open': _vm.open, 'right': _vm.right
	    },
	    style: (_vm.style),
	    attrs: {
	      "zDepth": _vm.zDepth
	    }
	  }, [_vm._t("default")])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-526b2ef1", module.exports)
	  }
	}

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _list = __webpack_require__(162);
	
	Object.defineProperty(exports, 'list', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_list).default;
	  }
	});
	
	var _listItem = __webpack_require__(167);
	
	Object.defineProperty(exports, 'listItem', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_listItem).default;
	  }
	});

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(163)
	
	/* script */
	__vue_exports__ = __webpack_require__(165)
	
	/* template */
	var __vue_template__ = __webpack_require__(166)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\PaintGame\\node_modules\\muse-ui\\src\\list\\list.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-6bdbf051", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-6bdbf051", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] list.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(164);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(76)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-6bdbf051!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./list.vue", function() {
				var newContent = require("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-6bdbf051!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./list.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(68)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.mu-list {\n  padding: 8px 0;\n  width: 100%;\n  position: relative;\n  overflow-x: hidden;\n  overflow-y: visible;\n}\n.mu-list .mu-sub-header:first-child {\n  margin-top: -8px;\n}\n", "", {"version":3,"sources":["/./node_modules/muse-ui/src/list/list.vue"],"names":[],"mappings":";AAAA;EACE,eAAe;EACf,YAAY;EACZ,mBAAmB;EACnB,mBAAmB;EACnB,oBAAoB;CACrB;AACD;EACE,iBAAiB;CAClB","file":"list.vue","sourcesContent":[".mu-list {\n  padding: 8px 0;\n  width: 100%;\n  position: relative;\n  overflow-x: hidden;\n  overflow-y: visible;\n}\n.mu-list .mu-sub-header:first-child {\n  margin-top: -8px;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 165 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	
	exports.default = {
	  name: 'mu-list',
	  props: {
	    nestedLevel: {
	      type: Number,
	      default: 0
	    },
	    value: {}
	  },
	  methods: {
	    handleChange: function handleChange(value) {
	      this.$emit('change', value);
	    },
	    handleItemClick: function handleItemClick(e) {
	      this.$emit('itemClick');
	    }
	  }
	};

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    staticClass: "mu-list"
	  }, [_vm._t("default")])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-6bdbf051", module.exports)
	  }
	}

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(168)
	
	/* script */
	__vue_exports__ = __webpack_require__(170)
	
	/* template */
	var __vue_template__ = __webpack_require__(176)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\PaintGame\\node_modules\\muse-ui\\src\\list\\listItem.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-9df2ecf8", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-9df2ecf8", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] listItem.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(169);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(76)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-9df2ecf8!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./listItem.vue", function() {
				var newContent = require("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-9df2ecf8!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./listItem.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(68)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.mu-item-wrapper {\n  display: block;\n  color: inherit;\n  position: relative;\n  outline: none;\n  cursor: pointer;\n}\n.mu-item-wrapper.hover {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.mu-item-wrapper.disabled {\n  cursor: default;\n}\n.mu-item {\n  min-height: 48px;\n  display: flex;\n  padding: 16px 16px;\n  color: rgba(0, 0, 0, 0.87);\n  position: relative;\n}\n.mu-item.show-left {\n  padding-left: 72px;\n}\n.mu-item.show-right {\n  padding-right: 56px;\n}\n.mu-item.has-avatar {\n  min-height: 56px;\n}\n.mu-item.selected {\n  color: #03a9f4;\n}\n.mu-item-toggle-button {\n  color: rgba(0, 0, 0, 0.87);\n  position: absolute;\n  right: 4px;\n  top: 0;\n}\n.mu-item-right,\n.mu-item-left {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  width: 40px;\n  height: 100%;\n  position: absolute;\n  color: #757575;\n  top: 0;\n  max-height: 72px;\n}\n.mu-item-left {\n  left: 16px;\n}\n.mu-item.selected .mu-item-left {\n  color: #03a9f4;\n}\n.mu-item-right {\n  right: 12px;\n  justify-content: center;\n}\n.mu-item-right > .mu-icon-button {\n  align-self: flex-start;\n}\n.mu-item-right > .mu-icon-menu {\n  align-self: flex-start;\n}\n.mu-item-content {\n  width: 100%;\n  align-self: center;\n}\n.mu-item-title-row {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  position: relative;\n  width: 100%;\n  line-height: 1;\n}\n.mu-item-title {\n  flex: 1;\n  display: block;\n  font-size: 16px;\n  max-width: 100%;\n}\n.mu-item-sub-title {\n  line-height: 1;\n  margin-top: 4px;\n}\n.mu-item-after {\n  margin-left: auto;\n  color: rgba(0, 0, 0, 0.54);\n  display: flex;\n  align-items: center;\n}\n.mu-item-text {\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  position: relative;\n  overflow: hidden;\n  font-size: 14px;\n  line-height: 18px;\n  margin-top: 4px;\n  max-height: 40px;\n  max-width: 100%;\n  text-overflow: ellipsis;\n  word-break: break-all;\n  color: rgba(0, 0, 0, 0.54);\n}\n", "", {"version":3,"sources":["/./node_modules/muse-ui/src/list/listItem.vue"],"names":[],"mappings":";AAAA;EACE,eAAe;EACf,eAAe;EACf,mBAAmB;EACnB,cAAc;EACd,gBAAgB;CACjB;AACD;EACE,qCAAqC;CACtC;AACD;EACE,gBAAgB;CACjB;AACD;EACE,iBAAiB;EACjB,cAAc;EACd,mBAAmB;EACnB,2BAA2B;EAC3B,mBAAmB;CACpB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,eAAe;CAChB;AACD;EACE,2BAA2B;EAC3B,mBAAmB;EACnB,WAAW;EACX,OAAO;CACR;AACD;;EAEE,cAAc;EACd,oBAAoB;EACpB,4BAA4B;EAC5B,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,OAAO;EACP,iBAAiB;CAClB;AACD;EACE,WAAW;CACZ;AACD;EACE,eAAe;CAChB;AACD;EACE,YAAY;EACZ,wBAAwB;CACzB;AACD;EACE,uBAAuB;CACxB;AACD;EACE,uBAAuB;CACxB;AACD;EACE,YAAY;EACZ,mBAAmB;CACpB;AACD;EACE,cAAc;EACd,4BAA4B;EAC5B,oBAAoB;EACpB,mBAAmB;EACnB,YAAY;EACZ,eAAe;CAChB;AACD;EACE,QAAQ;EACR,eAAe;EACf,gBAAgB;EAChB,gBAAgB;CACjB;AACD;EACE,eAAe;EACf,gBAAgB;CACjB;AACD;EACE,kBAAkB;EAClB,2BAA2B;EAC3B,cAAc;EACd,oBAAoB;CACrB;AACD;EACE,qBAAqB;EACrB,sBAAsB;EACtB,6BAA6B;EAC7B,mBAAmB;EACnB,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;EACjB,gBAAgB;EAChB,wBAAwB;EACxB,sBAAsB;EACtB,2BAA2B;CAC5B","file":"listItem.vue","sourcesContent":[".mu-item-wrapper {\n  display: block;\n  color: inherit;\n  position: relative;\n  outline: none;\n  cursor: pointer;\n}\n.mu-item-wrapper.hover {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.mu-item-wrapper.disabled {\n  cursor: default;\n}\n.mu-item {\n  min-height: 48px;\n  display: flex;\n  padding: 16px 16px;\n  color: rgba(0, 0, 0, 0.87);\n  position: relative;\n}\n.mu-item.show-left {\n  padding-left: 72px;\n}\n.mu-item.show-right {\n  padding-right: 56px;\n}\n.mu-item.has-avatar {\n  min-height: 56px;\n}\n.mu-item.selected {\n  color: #03a9f4;\n}\n.mu-item-toggle-button {\n  color: rgba(0, 0, 0, 0.87);\n  position: absolute;\n  right: 4px;\n  top: 0;\n}\n.mu-item-right,\n.mu-item-left {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  width: 40px;\n  height: 100%;\n  position: absolute;\n  color: #757575;\n  top: 0;\n  max-height: 72px;\n}\n.mu-item-left {\n  left: 16px;\n}\n.mu-item.selected .mu-item-left {\n  color: #03a9f4;\n}\n.mu-item-right {\n  right: 12px;\n  justify-content: center;\n}\n.mu-item-right > .mu-icon-button {\n  align-self: flex-start;\n}\n.mu-item-right > .mu-icon-menu {\n  align-self: flex-start;\n}\n.mu-item-content {\n  width: 100%;\n  align-self: center;\n}\n.mu-item-title-row {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  position: relative;\n  width: 100%;\n  line-height: 1;\n}\n.mu-item-title {\n  flex: 1;\n  display: block;\n  font-size: 16px;\n  max-width: 100%;\n}\n.mu-item-sub-title {\n  line-height: 1;\n  margin-top: 4px;\n}\n.mu-item-after {\n  margin-left: auto;\n  color: rgba(0, 0, 0, 0.54);\n  display: flex;\n  align-items: center;\n}\n.mu-item-text {\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  position: relative;\n  overflow: hidden;\n  font-size: 14px;\n  line-height: 18px;\n  margin-top: 4px;\n  max-height: 40px;\n  max-width: 100%;\n  text-overflow: ellipsis;\n  word-break: break-all;\n  color: rgba(0, 0, 0, 0.54);\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _icon = __webpack_require__(93);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	var _abstractButton = __webpack_require__(107);
	
	var _abstractButton2 = _interopRequireDefault(_abstractButton);
	
	var _iconButton = __webpack_require__(102);
	
	var _iconButton2 = _interopRequireDefault(_iconButton);
	
	var _list = __webpack_require__(162);
	
	var _list2 = _interopRequireDefault(_list);
	
	var _expandTransition = __webpack_require__(171);
	
	var _expandTransition2 = _interopRequireDefault(_expandTransition);
	
	var _utils = __webpack_require__(98);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	//
	
	exports.default = {
	  name: 'mu-list-item',
	  props: {
	    href: {
	      type: String
	    },
	    target: {
	      type: String
	    },
	    title: {
	      type: String,
	      default: ''
	    },
	    afterText: {
	      type: String,
	      default: ''
	    },
	    describeText: {
	      type: String,
	      default: ''
	    },
	    describeLine: {
	      type: Number,
	      default: 2
	    },
	    inset: {
	      type: Boolean,
	      default: false
	    },
	    open: {
	      type: Boolean,
	      default: true
	    },
	    toggleNested: {
	      type: Boolean,
	      default: false
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    disableRipple: {
	      type: Boolean,
	      default: false
	    },
	    value: {}
	  },
	  data: function data() {
	    return {
	      nestedOpen: this.open
	    };
	  },
	
	  computed: {
	    hasAvatar: function hasAvatar() {
	      return this.$slots && (this.$slots.leftAvatar && this.$slots.leftAvatar.length > 0 || this.$slots.rightAvatar && this.$slots.rightAvatar.length > 0);
	    },
	    nestedLevel: function nestedLevel() {
	      return this.$parent.nestedLevel + 1;
	    },
	    showLeft: function showLeft() {
	      return this.$slots && (this.$slots.left && this.$slots.left.length > 0 || this.$slots.leftAvatar && this.$slots.leftAvatar.length > 0);
	    },
	    showRight: function showRight() {
	      return this.toggleNested || this.$slots && (this.$slots.right && this.$slots.right.length > 0 || this.$slots.rightAvatar && this.$slots.rightAvatar.length > 0);
	    },
	    showTitleRow: function showTitleRow() {
	      return this.title || this.$slots && this.$slots.title && this.$slots.title.length > 0 || this.afterText || this.$slots && this.$slots.after && this.$slots.after.length > 0;
	    },
	    showDescribe: function showDescribe() {
	      return this.describeText || this.$slots && this.$slots.describe && this.$slots.describe.length > 0;
	    },
	    itemClass: function itemClass() {
	      var arr = ['mu-item'];
	      if (this.showLeft || this.inset) arr.push('show-left');
	      if (this.showRight) arr.push('show-right');
	      if (this.hasAvatar) arr.push('has-avatar');
	      if (this.selected) arr.push('selected');
	      return arr.join(' ');
	    },
	    itemStyle: function itemStyle() {
	      return {
	        'margin-left': 18 * (this.nestedLevel - 1) + 'px'
	      };
	    },
	    textStyle: function textStyle() {
	      return {
	        'max-height': 18 * this.describeLine + 'px',
	        '-webkit-line-clamp': this.describeLine
	      };
	    },
	    showNested: function showNested() {
	      return this.nestedOpen && this.$slots && this.$slots.nested && this.$slots.nested.length > 0;
	    },
	    selected: function selected() {
	      return (0, _utils.isNotNull)(this.$parent.value) && (0, _utils.isNotNull)(this.value) && this.$parent.value === this.value;
	    },
	    nestedSelectValue: function nestedSelectValue() {
	      return this.$parent.value;
	    }
	  },
	  methods: {
	    handleToggleNested: function handleToggleNested() {
	      this.nestedOpen = !this.nestedOpen;
	      this.$emit('toggleNested', this.nestedOpen);
	    },
	    handleClick: function handleClick(e) {
	      this.$emit('click', e);
	      if (this.$parent.handleItemClick) this.$parent.handleItemClick(e);
	      if ((0, _utils.isNotNull)(this.value)) this.$parent.handleChange(this.value);
	      if (this.toggleNested) this.handleToggleNested();
	    },
	    handleKeyboardFocus: function handleKeyboardFocus(isFocus) {
	      this.$emit('keyboardFocus', isFocus);
	    },
	    handleHover: function handleHover(event) {
	      this.$emit('hover', event);
	    },
	    handleHoverExit: function handleHoverExit(event) {
	      this.$emit('hoverExit', event);
	    },
	    handleNestedChange: function handleNestedChange(value) {
	      this.$parent.handleChange(value);
	    }
	  },
	  watch: {
	    open: function open(val, oldVal) {
	      if (val === oldVal) return;
	      this.nestedOpen = val;
	    }
	  },
	  components: {
	    icon: _icon2.default,
	    'abstract-button': _abstractButton2.default,
	    'mu-list': _list2.default,
	    'icon-button': _iconButton2.default,
	    'expand-transition': _expandTransition2.default
	  }
	};

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(172)
	
	/* script */
	__vue_exports__ = __webpack_require__(174)
	
	/* template */
	var __vue_template__ = __webpack_require__(175)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\PaintGame\\node_modules\\muse-ui\\src\\internal\\expandTransition.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-30d7ab03", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-30d7ab03", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] expandTransition.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(173);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(76)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-30d7ab03!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./expandTransition.vue", function() {
				var newContent = require("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-30d7ab03!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./expandTransition.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(68)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.mu-expand-enter-active,\n.mu-expand-leave-active {\n  transition: height 0.45s cubic-bezier(0.23, 1, 0.32, 1), padding 0.45s cubic-bezier(0.23, 1, 0.32, 1);\n  backface-visibility: hidden;\n  transform: translate3d(0, 0, 0);\n}\n", "", {"version":3,"sources":["/./node_modules/muse-ui/src/internal/expandTransition.vue"],"names":[],"mappings":";AAAA;;EAEE,sGAAsG;EACtG,4BAA4B;EAC5B,gCAAgC;CACjC","file":"expandTransition.vue","sourcesContent":[".mu-expand-enter-active,\n.mu-expand-leave-active {\n  transition: height 0.45s cubic-bezier(0.23, 1, 0.32, 1), padding 0.45s cubic-bezier(0.23, 1, 0.32, 1);\n  backface-visibility: hidden;\n  transform: translate3d(0, 0, 0);\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 174 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
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
	
	exports.default = {
	  methods: {
	    beforeEnter: function beforeEnter(el) {
	      el.dataset.oldPaddingTop = el.style.paddingTop;
	      el.dataset.oldPaddingBottom = el.style.paddingBottom;
	      el.style.height = '0';
	      el.style.paddingTop = 0;
	      el.style.paddingBottom = 0;
	    },
	    enter: function enter(el) {
	      el.dataset.oldOverflow = el.style.overflow;
	
	      el.style.display = 'block';
	      if (el.scrollHeight !== 0) {
	        el.style.height = el.scrollHeight + 'px';
	        // el.style.paddingTop = el.dataset.oldPaddingTop
	        // el.style.paddingBottom = el.dataset.oldPaddingBottom
	      } else {
	        el.style.height = '';
	        el.style.paddingTop = el.dataset.oldPaddingTop;
	        el.style.paddingBottom = el.dataset.oldPaddingBottom;
	      }
	      el.style.overflow = 'hidden';
	    },
	    afterEnter: function afterEnter(el) {
	      el.style.display = '';
	      // uc浏览器上设置height会闪屏
	      // el.style.height = 'auto'
	      el.style.overflow = el.dataset.oldOverflow;
	    },
	    beforeLeave: function beforeLeave(el) {
	      el.dataset.oldPaddingTop = el.style.paddingTop;
	      el.dataset.oldPaddingBottom = el.style.paddingBottom;
	      el.dataset.oldOverflow = el.style.overflow;
	
	      el.style.display = 'block';
	      if (el.scrollHeight !== 0) {
	        el.style.height = el.scrollHeight + 'px';
	      }
	      el.style.overflow = 'hidden';
	    },
	    leave: function leave(el) {
	      if (el.scrollHeight !== 0) {
	        setTimeout(function () {
	          el.style.height = 0;
	          el.style.paddingTop = 0;
	          el.style.paddingBottom = 0;
	        });
	      }
	    },
	    afterLeave: function afterLeave(el) {
	      el.style.display = 'none';
	      el.style.height = '';
	      el.style.overflow = el.dataset.oldOverflow;
	      el.style.paddingTop = el.dataset.oldPaddingTop;
	      el.style.paddingBottom = el.dataset.oldPaddingBottom;
	    }
	  }
	};

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('transition', {
	    attrs: {
	      "name": "mu-expand"
	    },
	    on: {
	      "before-enter": _vm.beforeEnter,
	      "enter": _vm.enter,
	      "after-enter": _vm.afterEnter,
	      "before-leave": _vm.beforeLeave,
	      "leave": _vm.leave,
	      "after-leave": _vm.afterLeave
	    }
	  }, [_vm._t("default")])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-30d7ab03", module.exports)
	  }
	}

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', [_vm._h('abstract-button', {
	    staticClass: "mu-item-wrapper",
	    style: (_vm.disabled ? _vm.itemStyle : {}),
	    attrs: {
	      "containerElement": "div",
	      "href": _vm.href,
	      "disabled": _vm.disabled,
	      "disableFocusRipple": _vm.disableRipple,
	      "disableTouchRipple": _vm.disableRipple,
	      "target": _vm.target,
	      "wrapperStyle": _vm.itemStyle,
	      "centerRipple": false
	    },
	    on: {
	      "click": _vm.handleClick,
	      "keyboardFocus": _vm.handleKeyboardFocus,
	      "hover": _vm.handleHover,
	      "hoverExit": _vm.handleHoverExit
	    }
	  }, [_vm._h('div', {
	    class: _vm.itemClass
	  }, [(_vm.showLeft) ? _vm._h('div', {
	    staticClass: "mu-item-left"
	  }, [_vm._t("left"), " ", _vm._t("leftAvatar")]) : _vm._e(), " ", _vm._h('div', {
	    staticClass: "mu-item-content"
	  }, [(_vm.showTitleRow) ? _vm._h('div', {
	    staticClass: "mu-item-title-row"
	  }, [_vm._h('div', {
	    staticClass: "mu-item-title"
	  }, [_vm._t("title", ["\n               " + _vm._s(_vm.title) + "\n             "])]), " ", _vm._h('div', {
	    staticClass: "mu-item-after"
	  }, [_vm._t("after", ["\n                  " + _vm._s(_vm.afterText) + "\n              "])])]) : _vm._e(), " ", (_vm.showDescribe) ? _vm._h('div', {
	    staticClass: "mu-item-text",
	    style: (_vm.textStyle)
	  }, [_vm._t("describe", ["\n            " + _vm._s(_vm.describeText) + "\n          "])]) : _vm._e(), " ", _vm._t("default")]), " ", (_vm.showRight) ? _vm._h('div', {
	    staticClass: "mu-item-right"
	  }, [(_vm.toggleNested) ? _vm._h('icon-button', {
	    attrs: {
	      "icon": _vm.nestedOpen ? 'expand_less' : 'expand_more'
	    },
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	        _vm.handleToggleNested($event)
	      }
	    }
	  }) : _vm._e(), " ", _vm._t("right"), " ", _vm._t("rightAvatar")]) : _vm._e()])]), " ", _vm._h('expand-transition', [(_vm.showNested) ? _vm._h('mu-list', {
	    attrs: {
	      "nestedLevel": _vm.nestedLevel
	    },
	    domProps: {
	      "value": _vm.nestedSelectValue
	    },
	    on: {
	      "change": _vm.handleNestedChange
	    }
	  }, [_vm._t("nested")]) : _vm._e()])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-9df2ecf8", module.exports)
	  }
	}

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', [_vm._h('div', {
	    staticClass: "header"
	  }, [_vm._h('appbar', {
	    attrs: {
	      "title": "你画，我就猜"
	    }
	  }, [_vm._h('iconButton', {
	    slot: "left",
	    attrs: {
	      "icon": "menu"
	    },
	    on: {
	      "click": function($event) {
	        _vm.toggle(true)
	      }
	    }
	  }), " ", _vm._h('iconButton', {
	    slot: "right",
	    attrs: {
	      "icon": "expand_more"
	    }
	  })])]), " ", _vm._h('div', {
	    staticClass: "footer"
	  }, [_vm._h('bottomNav', {
	    attrs: {
	      "shift": ""
	    },
	    domProps: {
	      "value": _vm.bottomNav
	    },
	    on: {
	      "change": _vm.handleChange
	    }
	  }, [_vm._h('bottomNavItem', {
	    attrs: {
	      "value": "movies",
	      "title": "Movies",
	      "icon": "ondemand_video"
	    }
	  }), " ", _vm._h('bottomNavItem', {
	    attrs: {
	      "value": "music",
	      "title": "Music",
	      "icon": "music_note"
	    }
	  }), " ", _vm._h('bottomNavItem', {
	    attrs: {
	      "value": "books",
	      "title": "Books",
	      "icon": "books"
	    }
	  }), " ", _vm._h('bottomNavItem', {
	    attrs: {
	      "value": "pictures",
	      "title": "Pictures",
	      "icon": "photo"
	    }
	  })])]), " ", _vm._h('drawer', {
	    attrs: {
	      "open": _vm.open,
	      "docked": _vm.docked
	    },
	    on: {
	      "close": function($event) {
	        _vm.toggle()
	      }
	    }
	  }, [_vm._h('list', {
	    on: {
	      "itemClick": function($event) {
	        _vm.docked ? '' : _vm.toggle()
	      }
	    }
	  }, [_vm._h('listItem', {
	    attrs: {
	      "title": "Menu Item 1"
	    }
	  }), " ", _vm._h('listItem', {
	    attrs: {
	      "title": "Menu Item 2"
	    }
	  }), " ", _vm._h('listItem', {
	    attrs: {
	      "title": "Menu Item 3"
	    }
	  })])])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-45b26cfa", module.exports)
	  }
	}

/***/ },
/* 178 */
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,bW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArICIyMGNmZWM3MjU5MTQzMDM3YjA5NjQxYTgxNGUzZjBjMy5qcGciOw=="

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _raisedButton = __webpack_require__(180);
	
	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_raisedButton).default;
	  }
	});

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(181)
	
	/* script */
	__vue_exports__ = __webpack_require__(183)
	
	/* template */
	var __vue_template__ = __webpack_require__(184)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\PaintGame\\node_modules\\muse-ui\\src\\raisedButton\\raisedButton.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-5a4b2fd1", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-5a4b2fd1", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] raisedButton.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(182);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(76)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-5a4b2fd1!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./raisedButton.vue", function() {
				var newContent = require("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-5a4b2fd1!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./raisedButton.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(68)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.mu-raised-button {\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  border-radius: 2px;\n  height: 36px;\n  line-height: 36px;\n  min-width: 88px;\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  transform: translate3d(0, 0, 0);\n  text-decoration: none;\n  text-transform: uppercase;\n  border: none;\n  appearance: none;\n  background-color: #ffffff;\n  color: rgba(0, 0, 0, 0.87);\n  -webkit-box-flex: 0;\n  -webkit-flex-shrink: 0;\n  -ms-flex: 0 0 auto;\n  flex-shrink: 0;\n  margin: 0;\n  outline: 0;\n  padding: 0;\n  cursor: pointer;\n  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;\n}\n.mu-raised-button.focus {\n  box-shadow: rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px;\n}\n.mu-raised-button.hover .mu-raised-button-wrapper {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.mu-raised-button.disabled {\n  color: rgba(0, 0, 0, 0.3);\n  cursor: not-allowed;\n  background-color: #e6e6e6;\n  box-shadow: none;\n}\n.mu-raised-button.disabled.hover,\n.mu-raised-button.disabled:active,\n.mu-raised-button.disabled:hover {\n  box-shadow: none;\n}\n.mu-raised-button.disabled.hover .mu-raised-button-wrapper,\n.mu-raised-button.disabled:active .mu-raised-button-wrapper,\n.mu-raised-button.disabled:hover .mu-raised-button-wrapper {\n  background-color: transparent;\n}\n.mu-raised-button .mu-icon {\n  vertical-align: middle;\n  margin-left: 12px;\n  margin-right: 0;\n}\n.mu-raised-button .mu-icon + .mu-raised-button-label {\n  padding-left: 8px;\n}\n.mu-raised-button.no-label .mu-icon {\n  margin: 0;\n}\n.mu-raised-button.label-before .mu-raised-button-wrapper {\n  padding-right: 8px;\n}\n.mu-raised-button.label-before .mu-icon {\n  margin-right: 4px;\n  margin-left: 0;\n}\n.mu-raised-button.label-before .mu-raised-button-label {\n  padding-right: 8px;\n}\n.mu-raised-button:active {\n  box-shadow: rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px;\n}\n.mu-raised-button-wrapper {\n  border-radius: 2px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n.mu-raised-button-primary {\n  background-color: #03a9f4;\n}\n.mu-raised-button-secondary {\n  background-color: #ff4081;\n}\n.mu-raised-button-full {\n  width: 100%;\n}\n.mu-raised-button.mu-raised-button-inverse {\n  color: #ffffff;\n}\n.mu-raised-button.mu-raised-button-inverse .mu-circle-ripple {\n  opacity: 0.3;\n}\n.mu-raised-button.mu-raised-button-inverse.hover .mu-raised-button-wrapper {\n  background-color: rgba(255, 255, 255, 0.3);\n}\n.mu-raised-button-label {\n  vertical-align: middle;\n  padding-right: 16px;\n  padding-left: 16px;\n}\n", "", {"version":3,"sources":["/./node_modules/muse-ui/src/raisedButton/raisedButton.vue"],"names":[],"mappings":";AAAA;EACE,sBAAsB;EACtB,iBAAiB;EACjB,mBAAmB;EACnB,mBAAmB;EACnB,aAAa;EACb,kBAAkB;EAClB,gBAAgB;EAChB,2BAA2B;EAC3B,2DAA2D;EAC3D,gCAAgC;EAChC,sBAAsB;EACtB,0BAA0B;EAC1B,aAAa;EACb,iBAAiB;EACjB,0BAA0B;EAC1B,2BAA2B;EAC3B,oBAAoB;EACpB,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,UAAU;EACV,WAAW;EACX,WAAW;EACX,gBAAgB;EAChB,qFAAqF;CACtF;AACD;EACE,uFAAuF;CACxF;AACD;EACE,qCAAqC;CACtC;AACD;EACE,0BAA0B;EAC1B,oBAAoB;EACpB,0BAA0B;EAC1B,iBAAiB;CAClB;AACD;;;EAGE,iBAAiB;CAClB;AACD;;;EAGE,8BAA8B;CAC/B;AACD;EACE,uBAAuB;EACvB,kBAAkB;EAClB,gBAAgB;CACjB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,UAAU;CACX;AACD;EACE,mBAAmB;CACpB;AACD;EACE,kBAAkB;EAClB,eAAe;CAChB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,uFAAuF;CACxF;AACD;EACE,mBAAmB;EACnB,cAAc;EACd,wBAAwB;EACxB,oBAAoB;EACpB,YAAY;EACZ,aAAa;CACd;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,YAAY;CACb;AACD;EACE,eAAe;CAChB;AACD;EACE,aAAa;CACd;AACD;EACE,2CAA2C;CAC5C;AACD;EACE,uBAAuB;EACvB,oBAAoB;EACpB,mBAAmB;CACpB","file":"raisedButton.vue","sourcesContent":[".mu-raised-button {\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  border-radius: 2px;\n  height: 36px;\n  line-height: 36px;\n  min-width: 88px;\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  transform: translate3d(0, 0, 0);\n  text-decoration: none;\n  text-transform: uppercase;\n  border: none;\n  appearance: none;\n  background-color: #ffffff;\n  color: rgba(0, 0, 0, 0.87);\n  -webkit-box-flex: 0;\n  -webkit-flex-shrink: 0;\n  -ms-flex: 0 0 auto;\n  flex-shrink: 0;\n  margin: 0;\n  outline: 0;\n  padding: 0;\n  cursor: pointer;\n  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;\n}\n.mu-raised-button.focus {\n  box-shadow: rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px;\n}\n.mu-raised-button.hover .mu-raised-button-wrapper {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.mu-raised-button.disabled {\n  color: rgba(0, 0, 0, 0.3);\n  cursor: not-allowed;\n  background-color: #e6e6e6;\n  box-shadow: none;\n}\n.mu-raised-button.disabled.hover,\n.mu-raised-button.disabled:active,\n.mu-raised-button.disabled:hover {\n  box-shadow: none;\n}\n.mu-raised-button.disabled.hover .mu-raised-button-wrapper,\n.mu-raised-button.disabled:active .mu-raised-button-wrapper,\n.mu-raised-button.disabled:hover .mu-raised-button-wrapper {\n  background-color: transparent;\n}\n.mu-raised-button .mu-icon {\n  vertical-align: middle;\n  margin-left: 12px;\n  margin-right: 0;\n}\n.mu-raised-button .mu-icon + .mu-raised-button-label {\n  padding-left: 8px;\n}\n.mu-raised-button.no-label .mu-icon {\n  margin: 0;\n}\n.mu-raised-button.label-before .mu-raised-button-wrapper {\n  padding-right: 8px;\n}\n.mu-raised-button.label-before .mu-icon {\n  margin-right: 4px;\n  margin-left: 0;\n}\n.mu-raised-button.label-before .mu-raised-button-label {\n  padding-right: 8px;\n}\n.mu-raised-button:active {\n  box-shadow: rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px;\n}\n.mu-raised-button-wrapper {\n  border-radius: 2px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n.mu-raised-button-primary {\n  background-color: #03a9f4;\n}\n.mu-raised-button-secondary {\n  background-color: #ff4081;\n}\n.mu-raised-button-full {\n  width: 100%;\n}\n.mu-raised-button.mu-raised-button-inverse {\n  color: #ffffff;\n}\n.mu-raised-button.mu-raised-button-inverse .mu-circle-ripple {\n  opacity: 0.3;\n}\n.mu-raised-button.mu-raised-button-inverse.hover .mu-raised-button-wrapper {\n  background-color: rgba(255, 255, 255, 0.3);\n}\n.mu-raised-button-label {\n  vertical-align: middle;\n  padding-right: 16px;\n  padding-left: 16px;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _abstractButton = __webpack_require__(107);
	
	var _abstractButton2 = _interopRequireDefault(_abstractButton);
	
	var _utils = __webpack_require__(98);
	
	var _icon = __webpack_require__(93);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'mu-raised-button',
	  props: {
	    label: {
	      type: String
	    },
	    icon: {
	      type: String
	    },
	    labelPosition: {
	      type: String,
	      default: 'after'
	    },
	    labelClass: {
	      type: String,
	      default: ''
	    },
	    primary: {
	      type: Boolean,
	      default: false
	    },
	    secondary: {
	      type: Boolean,
	      default: false
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    keyboardFocused: {
	      type: Boolean,
	      default: false
	    },
	    fullWidth: {
	      type: Boolean,
	      default: false
	    },
	    href: {
	      type: String,
	      default: ''
	    },
	    target: {
	      type: String
	    },
	    backgroundColor: {
	      type: String,
	      default: ''
	    },
	    color: {
	      type: String,
	      default: ''
	    },
	    rippleColor: {
	      type: String
	    },
	    rippleOpacity: {
	      type: Number
	    }
	  },
	  data: function data() {
	    return {
	      focus: false
	    };
	  },
	
	  computed: {
	    buttonStyle: function buttonStyle() {
	      return {
	        'background-color': (0, _utils.getColor)(this.backgroundColor),
	        'color': (0, _utils.getColor)(this.color)
	      };
	    },
	    inverse: function inverse() {
	      return this.primary || this.secondary || this.backgroundColor;
	    },
	    buttonClass: function buttonClass() {
	      return {
	        'mu-raised-button-primary': this.primary,
	        'mu-raised-button-secondary': this.secondary,
	        'label-before': this.labelPosition === 'before',
	        'mu-raised-button-inverse': this.inverse,
	        'mu-raised-button-full': this.fullWidth,
	        'focus': this.focus,
	        'no-label': !this.label
	      };
	    }
	  },
	  methods: {
	    handleClick: function handleClick(e) {
	      this.$emit('click', e);
	    },
	    handleKeyboardFocus: function handleKeyboardFocus(isFocus) {
	      this.focus = isFocus;
	      this.$emit('keyboardFocus', isFocus);
	    },
	    handleHover: function handleHover(e) {
	      this.$emit('hover', e);
	    },
	    handleHoverExit: function handleHoverExit(e) {
	      this.$emit('hoverExit', e);
	    }
	  },
	  components: {
	    'abstract-button': _abstractButton2.default,
	    icon: _icon2.default
	  }
	}; //
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

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('abstract-button', {
	    staticClass: "mu-raised-button",
	    class: _vm.buttonClass,
	    style: (_vm.buttonStyle),
	    attrs: {
	      "href": _vm.href,
	      "target": _vm.target,
	      "rippleColor": _vm.rippleColor,
	      "rippleOpacity": _vm.rippleOpacity,
	      "disabled": _vm.disabled,
	      "keyboardFocused": _vm.keyboardFocused,
	      "wrapperClass": "mu-raised-button-wrapper",
	      "centerRipple": false
	    },
	    on: {
	      "KeyboardFocus": _vm.handleKeyboardFocus,
	      "hover": _vm.handleHover,
	      "hoverExit": _vm.handleHoverExit,
	      "click": _vm.handleClick
	    }
	  }, [(_vm.label && _vm.labelPosition === 'before') ? _vm._h('span', {
	    staticClass: "mu-raised-button-label",
	    class: [_vm.labelClass]
	  }, [_vm._s(_vm.label)]) : _vm._e(), " ", _vm._h('icon', {
	    domProps: {
	      "value": _vm.icon
	    }
	  }), " ", _vm._t("default"), " ", (_vm.label && _vm.labelPosition === 'after') ? _vm._h('span', {
	    staticClass: "mu-raised-button-label",
	    class: [_vm.labelClass]
	  }, [_vm._s(_vm.label)]) : _vm._e()])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-5a4b2fd1", module.exports)
	  }
	}

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _snackbar = __webpack_require__(186);
	
	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_snackbar).default;
	  }
	});

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(187)
	
	/* script */
	__vue_exports__ = __webpack_require__(189)
	
	/* template */
	var __vue_template__ = __webpack_require__(197)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\PaintGame\\node_modules\\muse-ui\\src\\snackbar\\snackbar.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-2f19a831", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-2f19a831", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] snackbar.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(188);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(76)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-2f19a831!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./snackbar.vue", function() {
				var newContent = require("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-2f19a831!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./snackbar.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(68)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.mu-snackbar {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: #ffffff;\n  background-color: rgba(0, 0, 0, 0.87);\n  padding: 0px 24px;\n  min-height: 48px;\n  width: 100%;\n  max-width: 568px;\n}\n.mu-snackbar-action {\n  margin: 0 -16px 0 24px;\n}\n.mu-snackbar-message {\n  display: flex;\n  flex: 1;\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n@media only screen and (max-width: 992px) and (min-width: 601px) {\n.mu-snackbar {\n    width: auto;\n    min-width: 288px;\n    left: 5%;\n    bottom: 7%;\n}\n}\n@media only screen and (min-width: 993px) {\n.mu-snackbar {\n    width: auto;\n    min-width: 8%;\n    top: 10%;\n    right: 7%;\n    left: auto;\n    bottom: auto;\n    min-width: 288px;\n}\n}\n.mu-snackbar-enter-active,\n.mu-snackbar-leave-active {\n  transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.4s cubic-bezier(0.23, 1, 0.32, 1);\n  backface-visibility: hidden;\n}\n.mu-snackbar-enter,\n.mu-snackbar-leave-active {\n  transform: translate3d(0, 100%, 0);\n  opacity: 0;\n}\n", "", {"version":3,"sources":["/./node_modules/muse-ui/src/snackbar/snackbar.vue"],"names":[],"mappings":";AAAA;EACE,gBAAgB;EAChB,UAAU;EACV,QAAQ;EACR,cAAc;EACd,+BAA+B;EAC/B,oBAAoB;EACpB,eAAe;EACf,sCAAsC;EACtC,kBAAkB;EAClB,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;CAClB;AACD;EACE,uBAAuB;CACxB;AACD;EACE,cAAc;EACd,QAAQ;EACR,iBAAiB;EACjB,oBAAoB;CACrB;AACD;AACE;IACE,YAAY;IACZ,iBAAiB;IACjB,SAAS;IACT,WAAW;CACZ;CACF;AACD;AACE;IACE,YAAY;IACZ,cAAc;IACd,SAAS;IACT,UAAU;IACV,WAAW;IACX,aAAa;IACb,iBAAiB;CAClB;CACF;AACD;;EAEE,uGAAuG;EACvG,4BAA4B;CAC7B;AACD;;EAEE,mCAAmC;EACnC,WAAW;CACZ","file":"snackbar.vue","sourcesContent":[".mu-snackbar {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: #ffffff;\n  background-color: rgba(0, 0, 0, 0.87);\n  padding: 0px 24px;\n  min-height: 48px;\n  width: 100%;\n  max-width: 568px;\n}\n.mu-snackbar-action {\n  margin: 0 -16px 0 24px;\n}\n.mu-snackbar-message {\n  display: flex;\n  flex: 1;\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n@media only screen and (max-width: 992px) and (min-width: 601px) {\n  .mu-snackbar {\n    width: auto;\n    min-width: 288px;\n    left: 5%;\n    bottom: 7%;\n  }\n}\n@media only screen and (min-width: 993px) {\n  .mu-snackbar {\n    width: auto;\n    min-width: 8%;\n    top: 10%;\n    right: 7%;\n    left: auto;\n    bottom: auto;\n    min-width: 288px;\n  }\n}\n.mu-snackbar-enter-active,\n.mu-snackbar-leave-active {\n  transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.4s cubic-bezier(0.23, 1, 0.32, 1);\n  backface-visibility: hidden;\n}\n.mu-snackbar-enter,\n.mu-snackbar-leave-active {\n  transform: translate3d(0, 100%, 0);\n  opacity: 0;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _flatButton = __webpack_require__(190);
	
	var _flatButton2 = _interopRequireDefault(_flatButton);
	
	var _utils = __webpack_require__(159);
	
	var _clickoutside = __webpack_require__(196);
	
	var _clickoutside2 = _interopRequireDefault(_clickoutside);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'mu-snackbar',
	  props: {
	    action: {
	      type: String
	    },
	    actionColor: {
	      type: String
	    },
	    message: {
	      type: String
	    }
	  },
	  data: function data() {
	    return {
	      zIndex: (0, _utils.getZIndex)()
	    };
	  },
	
	  methods: {
	    clickOutSide: function clickOutSide() {
	      this.$emit('close', 'clickOutSide');
	    },
	    handleActionClick: function handleActionClick() {
	      this.$emit('actionClick');
	    }
	  },
	  components: {
	    'flat-button': _flatButton2.default
	  },
	  directives: {
	    clickoutside: _clickoutside2.default
	  }
	}; //
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

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _flatButton = __webpack_require__(191);
	
	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_flatButton).default;
	  }
	});

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(192)
	
	/* script */
	__vue_exports__ = __webpack_require__(194)
	
	/* template */
	var __vue_template__ = __webpack_require__(195)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\PaintGame\\node_modules\\muse-ui\\src\\flatButton\\flatButton.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-66421f9e", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-66421f9e", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] flatButton.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(193);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(76)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-66421f9e!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./flatButton.vue", function() {
				var newContent = require("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-66421f9e!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./flatButton.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(68)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.mu-flat-button {\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  border-radius: 2px;\n  height: 36px;\n  line-height: 36px;\n  min-width: 88px;\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  transform: translate3d(0, 0, 0);\n  text-decoration: none;\n  text-transform: uppercase;\n  border: none;\n  appearance: none;\n  background: none;\n  color: rgba(0, 0, 0, 0.87);\n  -webkit-box-flex: 0;\n  -webkit-flex-shrink: 0;\n  -ms-flex: 0 0 auto;\n  flex-shrink: 0;\n  margin: 0;\n  outline: 0;\n  padding: 0;\n  cursor: pointer;\n}\n.mu-flat-button.hover {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.mu-flat-button.disabled {\n  color: rgba(0, 0, 0, 0.38);\n  cursor: not-allowed;\n  background: none;\n}\n.mu-flat-button .mu-icon {\n  vertical-align: middle;\n  margin-left: 12px;\n  margin-right: 0;\n}\n.mu-flat-button .mu-icon + .mu-flat-button-label {\n  padding-left: 8px;\n}\n.mu-flat-button.no-label .mu-icon {\n  margin-left: 0;\n}\n.mu-flat-button .mu-circle-ripple {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mu-flat-button.label-before {\n  padding-right: 8px;\n}\n.mu-flat-button.label-before .mu-icon {\n  margin-right: 4px;\n  margin-left: 0;\n}\n.mu-flat-button.label-before .mu-flat-button-label {\n  padding-right: 8px;\n}\n.mu-flat-button-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n.mu-flat-button-primary {\n  color: #03a9f4;\n}\n.mu-flat-button-secondary {\n  color: #ff4081;\n}\n.mu-flat-button-label {\n  vertical-align: middle;\n  padding-right: 16px;\n  padding-left: 16px;\n  font-size: 14px;\n}\n", "", {"version":3,"sources":["/./node_modules/muse-ui/src/flatButton/flatButton.vue"],"names":[],"mappings":";AAAA;EACE,sBAAsB;EACtB,iBAAiB;EACjB,mBAAmB;EACnB,mBAAmB;EACnB,aAAa;EACb,kBAAkB;EAClB,gBAAgB;EAChB,2BAA2B;EAC3B,2DAA2D;EAC3D,gCAAgC;EAChC,sBAAsB;EACtB,0BAA0B;EAC1B,aAAa;EACb,iBAAiB;EACjB,iBAAiB;EACjB,2BAA2B;EAC3B,oBAAoB;EACpB,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,UAAU;EACV,WAAW;EACX,WAAW;EACX,gBAAgB;CACjB;AACD;EACE,qCAAqC;CACtC;AACD;EACE,2BAA2B;EAC3B,oBAAoB;EACpB,iBAAiB;CAClB;AACD;EACE,uBAAuB;EACvB,kBAAkB;EAClB,gBAAgB;CACjB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,eAAe;CAChB;AACD;EACE,2BAA2B;CAC5B;AACD;EACE,mBAAmB;CACpB;AACD;EACE,kBAAkB;EAClB,eAAe;CAChB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,cAAc;EACd,wBAAwB;EACxB,oBAAoB;EACpB,YAAY;CACb;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,uBAAuB;EACvB,oBAAoB;EACpB,mBAAmB;EACnB,gBAAgB;CACjB","file":"flatButton.vue","sourcesContent":[".mu-flat-button {\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  border-radius: 2px;\n  height: 36px;\n  line-height: 36px;\n  min-width: 88px;\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  transform: translate3d(0, 0, 0);\n  text-decoration: none;\n  text-transform: uppercase;\n  border: none;\n  appearance: none;\n  background: none;\n  color: rgba(0, 0, 0, 0.87);\n  -webkit-box-flex: 0;\n  -webkit-flex-shrink: 0;\n  -ms-flex: 0 0 auto;\n  flex-shrink: 0;\n  margin: 0;\n  outline: 0;\n  padding: 0;\n  cursor: pointer;\n}\n.mu-flat-button.hover {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.mu-flat-button.disabled {\n  color: rgba(0, 0, 0, 0.38);\n  cursor: not-allowed;\n  background: none;\n}\n.mu-flat-button .mu-icon {\n  vertical-align: middle;\n  margin-left: 12px;\n  margin-right: 0;\n}\n.mu-flat-button .mu-icon + .mu-flat-button-label {\n  padding-left: 8px;\n}\n.mu-flat-button.no-label .mu-icon {\n  margin-left: 0;\n}\n.mu-flat-button .mu-circle-ripple {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mu-flat-button.label-before {\n  padding-right: 8px;\n}\n.mu-flat-button.label-before .mu-icon {\n  margin-right: 4px;\n  margin-left: 0;\n}\n.mu-flat-button.label-before .mu-flat-button-label {\n  padding-right: 8px;\n}\n.mu-flat-button-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n.mu-flat-button-primary {\n  color: #03a9f4;\n}\n.mu-flat-button-secondary {\n  color: #ff4081;\n}\n.mu-flat-button-label {\n  vertical-align: middle;\n  padding-right: 16px;\n  padding-left: 16px;\n  font-size: 14px;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _abstractButton = __webpack_require__(107);
	
	var _abstractButton2 = _interopRequireDefault(_abstractButton);
	
	var _icon = __webpack_require__(93);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	var _utils = __webpack_require__(98);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'mu-flat-button',
	  props: {
	    label: {
	      type: String
	    },
	    icon: {
	      type: String
	    },
	    labelPosition: {
	      type: String,
	      default: 'after'
	    },
	    labelClass: {
	      type: String,
	      default: ''
	    },
	    primary: {
	      type: Boolean,
	      default: false
	    },
	    secondary: {
	      type: Boolean,
	      default: false
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    keyboardFocused: {
	      type: Boolean,
	      default: false
	    },
	    href: {
	      type: String,
	      default: ''
	    },
	    target: {
	      type: String
	    },
	    backgroundColor: {
	      type: String,
	      default: ''
	    },
	    color: {
	      type: String,
	      default: ''
	    },
	    hoverColor: {
	      type: String,
	      default: ''
	    },
	    rippleColor: {
	      type: String
	    },
	    rippleOpacity: {
	      type: Number
	    }
	  },
	  methods: {
	    handleClick: function handleClick(e) {
	      this.$emit('click', e);
	    },
	    handleKeyboardFocus: function handleKeyboardFocus(isFocus) {
	      this.$emit('keyboardFocus', isFocus);
	    },
	    handleHover: function handleHover(event) {
	      this.$emit('hover', event);
	    },
	    handleHoverExit: function handleHoverExit(event) {
	      this.$emit('hoverExit', event);
	    }
	  },
	  computed: {
	    buttonStyle: function buttonStyle() {
	      return {
	        'background-color': this.hover ? (0, _utils.getColor)(this.hoverColor) : (0, _utils.getColor)(this.backgroundColor),
	        'color': (0, _utils.getColor)(this.color)
	      };
	    },
	    buttonClass: function buttonClass() {
	      return {
	        'mu-flat-button-primary': this.primary,
	        'mu-flat-button-secondary': this.secondary,
	        'label-before': this.labelPosition === 'before',
	        'no-label': !this.label
	      };
	    }
	  },
	  components: {
	    'abstract-button': _abstractButton2.default,
	    icon: _icon2.default
	  }
	}; //
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

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('abstract-button', {
	    staticClass: "mu-flat-button",
	    class: _vm.buttonClass,
	    style: (_vm.buttonStyle),
	    attrs: {
	      "disabled": _vm.disabled,
	      "keyboardFocused": _vm.keyboardFocused,
	      "wrapperClass": "mu-flat-button-wrapper",
	      "href": _vm.href,
	      "target": _vm.target,
	      "rippleColor": _vm.rippleColor,
	      "rippleOpacity": _vm.rippleOpacity,
	      "centerRipple": false
	    },
	    on: {
	      "click": _vm.handleClick,
	      "keyboardFocus": _vm.handleKeyboardFocus,
	      "hover": _vm.handleHover,
	      "hoverExit": _vm.handleHoverExit
	    }
	  }, [(_vm.label && _vm.labelPosition === 'before') ? _vm._h('span', {
	    staticClass: "mu-flat-button-label",
	    class: [_vm.labelClass]
	  }, [_vm._s(_vm.label)]) : _vm._e(), " ", _vm._h('icon', {
	    domProps: {
	      "value": _vm.icon
	    }
	  }), " ", _vm._t("default"), " ", (_vm.label && _vm.labelPosition === 'after') ? _vm._h('span', {
	    staticClass: "mu-flat-button-label",
	    class: [_vm.labelClass]
	  }, [_vm._s(_vm.label)]) : _vm._e()])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-66421f9e", module.exports)
	  }
	}

/***/ },
/* 196 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * element https://github.com/ElemeFE/element
	 * clickoutside.js
	 */
	var clickoutsideContext = '@@clickoutsideContext';
	
	exports.default = {
	  bind: function bind(el, binding, vnode) {
	    var documentHandler = function documentHandler(e) {
	      if (!vnode.context || el.contains(e.target)) return;
	      if (binding.expression) {
	        vnode.context[el[clickoutsideContext].methodName]();
	      } else {
	        el[clickoutsideContext].bindingFn();
	      }
	    };
	    el[clickoutsideContext] = {
	      documentHandler: documentHandler,
	      methodName: binding.expression,
	      bindingFn: binding.value
	    };
	    setTimeout(function () {
	      document.addEventListener('click', documentHandler);
	    }, 0);
	  },
	  update: function update(el, binding) {
	    el[clickoutsideContext].methodName = binding.expression;
	    el[clickoutsideContext].bindingFn = binding.value;
	  },
	  unbind: function unbind(el) {
	    document.removeEventListener('click', el[clickoutsideContext].documentHandler);
	  }
	};

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('transition', {
	    attrs: {
	      "name": "mu-snackbar"
	    }
	  }, [_vm._h('div', {
	    directives: [{
	      name: "clickoutside",
	      rawName: "v-clickoutside",
	      value: (_vm.clickOutSide),
	      expression: "clickOutSide"
	    }],
	    staticClass: "mu-snackbar",
	    style: ({
	      'z-index': _vm.zIndex
	    })
	  }, [_vm._h('div', {
	    staticClass: "mu-snackbar-message"
	  }, ["\n      " + _vm._s(_vm.message) + "\n    "]), " ", (_vm.action) ? _vm._h('flat-button', {
	    staticClass: "mu-snackbar-action",
	    attrs: {
	      "color": _vm.actionColor,
	      "rippleColor": "#FFF",
	      "rippleOpacity": 0.3,
	      "secondary": "",
	      "label": _vm.action
	    },
	    on: {
	      "click": _vm.handleActionClick
	    }
	  }) : _vm._e()])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-2f19a831", module.exports)
	  }
	}

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _subHeader = __webpack_require__(199);
	
	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_subHeader).default;
	  }
	});

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(200)
	
	/* script */
	__vue_exports__ = __webpack_require__(202)
	
	/* template */
	var __vue_template__ = __webpack_require__(203)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\PaintGame\\node_modules\\muse-ui\\src\\subHeader\\subHeader.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-24a7b29a", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-24a7b29a", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] subHeader.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(201);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(76)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-24a7b29a!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./subHeader.vue", function() {
				var newContent = require("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-24a7b29a!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./subHeader.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(68)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.mu-sub-header {\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 14px;\n  line-height: 48px;\n  padding-left: 16px;\n  width: 100%;\n}\n.mu-sub-header.inset {\n  padding-left: 72px;\n}\n", "", {"version":3,"sources":["/./node_modules/muse-ui/src/subHeader/subHeader.vue"],"names":[],"mappings":";AAAA;EACE,2BAA2B;EAC3B,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;EACnB,YAAY;CACb;AACD;EACE,mBAAmB;CACpB","file":"subHeader.vue","sourcesContent":[".mu-sub-header {\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 14px;\n  line-height: 48px;\n  padding-left: 16px;\n  width: 100%;\n}\n.mu-sub-header.inset {\n  padding-left: 72px;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 202 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  name: 'mu-sub-header',
	  props: {
	    inset: {
	      type: Boolean,
	      default: false
	    }
	  }
	};

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    staticClass: "mu-sub-header",
	    class: {
	      'inset': _vm.inset
	    }
	  }, [_vm._t("default")])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-24a7b29a", module.exports)
	  }
	}

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _divider = __webpack_require__(205);
	
	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_divider).default;
	  }
	});

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(206)
	
	/* script */
	__vue_exports__ = __webpack_require__(208)
	
	/* template */
	var __vue_template__ = __webpack_require__(209)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\PaintGame\\node_modules\\muse-ui\\src\\divider\\divider.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-34bb11cb", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-34bb11cb", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] divider.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(207);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(76)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-34bb11cb!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./divider.vue", function() {
				var newContent = require("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-34bb11cb!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./divider.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(68)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.mu-divider {\n  margin: 0;\n  height: 1px;\n  border: none;\n  background-color: rgba(0, 0, 0, 0.12);\n  width: 100%;\n}\n.mu-divider.inset {\n  margin-left: 72px;\n}\n.mu-divider.shallow-inset {\n  margin-left: 16px;\n}\nhtml.pixel-ratio-2 .mu-divider {\n  -webkit-transform: scaleY(0.5);\n  transform: scaleY(0.5);\n}\nhtml.pixel-ratio-3 .mu-divider {\n  -webkit-transform: scaleY(0.33);\n  transform: scaleY(0.33);\n}\n", "", {"version":3,"sources":["/./node_modules/muse-ui/src/divider/divider.vue"],"names":[],"mappings":";AAAA;EACE,UAAU;EACV,YAAY;EACZ,aAAa;EACb,sCAAsC;EACtC,YAAY;CACb;AACD;EACE,kBAAkB;CACnB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,+BAA+B;EAC/B,uBAAuB;CACxB;AACD;EACE,gCAAgC;EAChC,wBAAwB;CACzB","file":"divider.vue","sourcesContent":[".mu-divider {\n  margin: 0;\n  height: 1px;\n  border: none;\n  background-color: rgba(0, 0, 0, 0.12);\n  width: 100%;\n}\n.mu-divider.inset {\n  margin-left: 72px;\n}\n.mu-divider.shallow-inset {\n  margin-left: 16px;\n}\nhtml.pixel-ratio-2 .mu-divider {\n  -webkit-transform: scaleY(0.5);\n  transform: scaleY(0.5);\n}\nhtml.pixel-ratio-3 .mu-divider {\n  -webkit-transform: scaleY(0.33);\n  transform: scaleY(0.33);\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 208 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	
	exports.default = {
	  name: 'mu-divider',
	  props: {
	    inset: {
	      type: Boolean,
	      default: false
	    },
	    shallowInset: {
	      type: Boolean,
	      default: false
	    }
	  }
	};

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('hr', {
	    staticClass: "mu-divider",
	    class: {
	      'inset': _vm.inset, 'shallowInset': _vm.shallowInset
	    }
	  })
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-34bb11cb", module.exports)
	  }
	}

/***/ },
/* 210 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var USER_ENTER = exports.USER_ENTER = 'USER_ENTER';
	var USER_EXIT = exports.USER_EXIT = 'USER_EXIT';
	var DRAW_CANVAS_INIT = exports.DRAW_CANVAS_INIT = 'DRAW_CANVAS_INIT';
	var SHOW_CANVAS_INIT = exports.SHOW_CANVAS_INIT = 'SHOW_CANVAS_INIT';
	var SHOW_MOUSE_MOVE = exports.SHOW_MOUSE_MOVE = 'SHOW_MOUSE_MOVE';
	var SHOW_MOUSE_DOWN = exports.SHOW_MOUSE_DOWN = 'SHOW_MOUSE_DOWN';
	var NEW_USER_ENTER = exports.NEW_USER_ENTER = 'NEW_USER_ENTER';
	var SET_DRAWER = exports.SET_DRAWER = 'SET_DRAWER';
	var SET_SHOWER = exports.SET_SHOWER = 'SET_SHOWER';
	var CLEAR_DRAW_CANVAS = exports.CLEAR_DRAW_CANVAS = 'CLEAR_DRAW_CANVAS';
	var CLEAR_SHOW_CANVAS = exports.CLEAR_SHOW_CANVAS = 'CLEAR_SHOW_CANVAS';
	var SEAT_INIT = exports.SEAT_INIT = 'SEAT_INIT';
	var USER_SIT = exports.USER_SIT = 'USER_SIT';
	var NEW_USER_SIT = exports.NEW_USER_SIT = 'NEW_USER_SIT';

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', [_vm._h('navgation'), " ", _vm._h('div', {
	    staticClass: "page-content"
	  }, [_vm._h('div', {
	    staticClass: "page-content-wrapper"
	  }, [_vm._h('list', [_vm._h('subHeader', ["玩家座位"]), " ", _vm._h('divider'), " ", _vm._l((_vm.seat), function(user, index) {
	    return [_vm._h('listItem', {
	      attrs: {
	        "title": user.userName,
	        "disabled": !user.seatState
	      },
	      on: {
	        "click": function($event) {
	          _vm.sit(index, user)
	        }
	      }
	    }, [_vm._h('avatar', {
	      slot: "leftAvatar",
	      attrs: {
	        "src": "./js/20cfec7259143037b09641a814e3f0c3.jpg"
	      }
	    }), " ", (user.seatState) ? [_vm._h('icon', {
	      slot: "right",
	      attrs: {
	        "value": "star_border"
	      }
	    })] : [_vm._h('icon', {
	      slot: "right",
	      attrs: {
	        "value": "star"
	      }
	    })], " "]), " ", _vm._h('divider')]
	  }), " ", _vm._h('divider')]), " ", (_vm.snackbar) ? _vm._h('snackbar', {
	    attrs: {
	      "message": _vm.message,
	      "action": "关闭"
	    },
	    on: {
	      "actionClick": _vm.hideSnackbar,
	      "close": _vm.hideSnackbar
	    }
	  }) : _vm._e(), " ", _vm._h('raisedButton', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.curSeatId == 0),
	      expression: "curSeatId==0"
	    }],
	    attrs: {
	      "label": "开始游戏",
	      "primary": "",
	      "fullWidth": ""
	    },
	    on: {
	      "click": _vm.startGame
	    }
	  })])])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-e67965b4", module.exports)
	  }
	}

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(213)
	
	/* template */
	var __vue_template__ = __webpack_require__(240)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\PaintGame\\app\\pages\\userEnter.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-7bb38e16", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-7bb38e16", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] userEnter.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _textField = __webpack_require__(214);
	
	var _textField2 = _interopRequireDefault(_textField);
	
	var _raisedButton = __webpack_require__(179);
	
	var _raisedButton2 = _interopRequireDefault(_raisedButton);
	
	var _vuex = __webpack_require__(6);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	
	  components: {
	    textFieldLabel: _textField2.default,
	    raisedButton: _raisedButton2.default
	  },
	  data: function data() {
	    return {
	      userName: ''
	    };
	  },
	
	  methods: {
	    test: function test() {
	      this.$socket.emit('user_enter', this.userName);
	      this.$router.replace({ path: '/home' });
	    }
	  }
	}; //
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

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _textField = __webpack_require__(215);
	
	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_textField).default;
	  }
	});

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(216)
	
	/* script */
	__vue_exports__ = __webpack_require__(218)
	
	/* template */
	var __vue_template__ = __webpack_require__(239)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\PaintGame\\node_modules\\muse-ui\\src\\textField\\textField.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-498eb473", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-498eb473", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] textField.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(217);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(76)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-498eb473!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./textField.vue", function() {
				var newContent = require("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-498eb473!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./textField.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(68)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.mu-text-field {\n  font-size: 16px;\n  width: 256px;\n  min-height: 48px;\n  display: inline-block;\n  position: relative;\n  color: rgba(0, 0, 0, 0.54);\n  margin-bottom: 8px;\n}\n.mu-text-field.full-width {\n  width: 100%;\n}\n.mu-text-field.has-icon {\n  padding-left: 56px;\n}\n.mu-text-field.focus-state {\n  color: #03a9f4;\n}\n.mu-text-field.focus-state.error {\n  color: #f44336;\n}\n.mu-text-field.has-label {\n  height: 72px;\n}\n.mu-text-field-icon {\n  position: absolute;\n  left: 16px;\n  top: 12px;\n}\n.mu-text-field.has-label .mu-text-field-icon {\n  top: 36px;\n}\n.mu-text-field-content {\n  display: block;\n  cursor: pointer;\n  height: 100%;\n  padding-bottom: 8px;\n  padding-top: 8px;\n}\n.mu-text-field.disabled .mu-text-field-content {\n  color: rgba(0, 0, 0, 0.38);\n  cursor: not-allowed;\n}\n.mu-text-field.has-label .mu-text-field-content {\n  padding-top: 28px;\n  padding-bottom: 12px;\n}\n.mu-text-field-input {\n  appearance: none;\n  outline: none;\n  border: none;\n  background: none;\n  border-radius: 0 0 0 0;\n  box-shadow: none;\n  display: block;\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  height: 32px;\n  font-style: inherit;\n  font-variant: inherit;\n  font-weight: inherit;\n  font-stretch: inherit;\n  font-size: inherit;\n  color: rgba(0, 0, 0, 0.87);\n  font-family: inherit;\n}\n.mu-text-field-help {\n  position: absolute;\n  margin-top: 6px;\n  font-size: 12px;\n  line-height: 12px;\n  display: flex;\n  justify-content: space-between;\n  left: 0;\n  right: 0;\n}\n.mu-text-field.has-icon .mu-text-field-help {\n  left: 56px;\n}\n.mu-text-field.error .mu-text-field-help {\n  color: #f44336;\n}\n.mu-text-field.disabled .mu-text-field-help {\n  color: inherit;\n}\n", "", {"version":3,"sources":["/./node_modules/muse-ui/src/textField/textField.vue"],"names":[],"mappings":";AAAA;EACE,gBAAgB;EAChB,aAAa;EACb,iBAAiB;EACjB,sBAAsB;EACtB,mBAAmB;EACnB,2BAA2B;EAC3B,mBAAmB;CACpB;AACD;EACE,YAAY;CACb;AACD;EACE,mBAAmB;CACpB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,aAAa;CACd;AACD;EACE,mBAAmB;EACnB,WAAW;EACX,UAAU;CACX;AACD;EACE,UAAU;CACX;AACD;EACE,eAAe;EACf,gBAAgB;EAChB,aAAa;EACb,oBAAoB;EACpB,iBAAiB;CAClB;AACD;EACE,2BAA2B;EAC3B,oBAAoB;CACrB;AACD;EACE,kBAAkB;EAClB,qBAAqB;CACtB;AACD;EACE,iBAAiB;EACjB,cAAc;EACd,aAAa;EACb,iBAAiB;EACjB,uBAAuB;EACvB,iBAAiB;EACjB,eAAe;EACf,WAAW;EACX,UAAU;EACV,YAAY;EACZ,aAAa;EACb,oBAAoB;EACpB,sBAAsB;EACtB,qBAAqB;EACrB,sBAAsB;EACtB,mBAAmB;EACnB,2BAA2B;EAC3B,qBAAqB;CACtB;AACD;EACE,mBAAmB;EACnB,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;EAClB,cAAc;EACd,+BAA+B;EAC/B,QAAQ;EACR,SAAS;CACV;AACD;EACE,WAAW;CACZ;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB","file":"textField.vue","sourcesContent":[".mu-text-field {\n  font-size: 16px;\n  width: 256px;\n  min-height: 48px;\n  display: inline-block;\n  position: relative;\n  color: rgba(0, 0, 0, 0.54);\n  margin-bottom: 8px;\n}\n.mu-text-field.full-width {\n  width: 100%;\n}\n.mu-text-field.has-icon {\n  padding-left: 56px;\n}\n.mu-text-field.focus-state {\n  color: #03a9f4;\n}\n.mu-text-field.focus-state.error {\n  color: #f44336;\n}\n.mu-text-field.has-label {\n  height: 72px;\n}\n.mu-text-field-icon {\n  position: absolute;\n  left: 16px;\n  top: 12px;\n}\n.mu-text-field.has-label .mu-text-field-icon {\n  top: 36px;\n}\n.mu-text-field-content {\n  display: block;\n  cursor: pointer;\n  height: 100%;\n  padding-bottom: 8px;\n  padding-top: 8px;\n}\n.mu-text-field.disabled .mu-text-field-content {\n  color: rgba(0, 0, 0, 0.38);\n  cursor: not-allowed;\n}\n.mu-text-field.has-label .mu-text-field-content {\n  padding-top: 28px;\n  padding-bottom: 12px;\n}\n.mu-text-field-input {\n  appearance: none;\n  outline: none;\n  border: none;\n  background: none;\n  border-radius: 0 0 0 0;\n  box-shadow: none;\n  display: block;\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  height: 32px;\n  font-style: inherit;\n  font-variant: inherit;\n  font-weight: inherit;\n  font-stretch: inherit;\n  font-size: inherit;\n  color: rgba(0, 0, 0, 0.87);\n  font-family: inherit;\n}\n.mu-text-field-help {\n  position: absolute;\n  margin-top: 6px;\n  font-size: 12px;\n  line-height: 12px;\n  display: flex;\n  justify-content: space-between;\n  left: 0;\n  right: 0;\n}\n.mu-text-field.has-icon .mu-text-field-help {\n  left: 56px;\n}\n.mu-text-field.error .mu-text-field-help {\n  color: #f44336;\n}\n.mu-text-field.disabled .mu-text-field-help {\n  color: inherit;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _icon = __webpack_require__(93);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	var _textFieldUnderline = __webpack_require__(219);
	
	var _textFieldUnderline2 = _interopRequireDefault(_textFieldUnderline);
	
	var _enhancedTextarea = __webpack_require__(224);
	
	var _enhancedTextarea2 = _interopRequireDefault(_enhancedTextarea);
	
	var _textFieldLabel = __webpack_require__(229);
	
	var _textFieldLabel2 = _interopRequireDefault(_textFieldLabel);
	
	var _utils = __webpack_require__(98);
	
	var _textFieldHint = __webpack_require__(234);
	
	var _textFieldHint2 = _interopRequireDefault(_textFieldHint);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	
	exports.default = {
	  name: 'mu-text-field',
	  props: {
	    name: {
	      type: String
	    },
	    type: {
	      type: String
	    },
	    icon: {
	      type: String
	    },
	    label: {
	      type: String
	    },
	    labelFloat: {
	      type: Boolean,
	      default: false
	    },
	    hintText: {
	      type: String
	    },
	    value: {},
	    multiLine: {
	      type: Boolean,
	      default: false
	    },
	    rows: {
	      type: Number,
	      default: 1
	    },
	    rowsMax: {
	      type: Number
	    },
	    errorText: {
	      type: String
	    },
	    errorColor: {
	      type: String
	    },
	    helpText: {
	      type: String
	    },
	    maxLength: {
	      type: Number,
	      default: 0
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    fullWidth: {
	      type: Boolean,
	      default: false
	    },
	    underlineShow: {
	      type: Boolean,
	      default: true
	    }
	  },
	  data: function data() {
	    return {
	      focus: false,
	      inputValue: this.value,
	      charLength: 0
	    };
	  },
	
	  computed: {
	    textFieldClass: function textFieldClass() {
	      return {
	        'focus-state': this.focus,
	        'has-label': this.label,
	        'no-empty-state': this.inputValue,
	        'has-icon': this.icon,
	        'error': this.errorText,
	        'multi-line': this.multiLine,
	        'disabled': this.disabled,
	        'full-width': this.fullWidth
	      };
	    },
	    float: function float() {
	      return this.labelFloat && !this.focus && !this.inputValue;
	    },
	    errorStyle: function errorStyle() {
	      return {
	        color: !this.disabled && this.errorText ? (0, _utils.getColor)(this.errorColor) : ''
	      };
	    },
	    showHint: function showHint() {
	      return !this.float && !this.inputValue && this.inputValue !== 0;
	    }
	  },
	  methods: {
	    handleFocus: function handleFocus(event) {
	      this.focus = true;
	      this.$emit('focus', event);
	    },
	    handleBlur: function handleBlur(event) {
	      this.focus = false;
	      this.$emit('blur', event);
	    },
	    handleChange: function handleChange(val) {
	      this.inputValue = val;
	    },
	    handleLabelClick: function handleLabelClick() {
	      this.$emit('labelClick');
	    }
	  },
	  watch: {
	    value: function value(val) {
	      this.inputValue = val;
	    },
	    inputValue: function inputValue(val) {
	      this.charLength = this.maxLength && String(this.inputValue) ? String(this.inputValue).length : 0;
	      this.$emit('input', val);
	      this.$emit('change', val);
	    },
	    charLength: function charLength(val) {
	      if (val > this.maxLength && !this.isTextOverflow) {
	        this.isTextOverflow = true;
	        this.$emit('textOverflow', true);
	      }
	      if (this.isTextOverflow && val <= this.maxLength) {
	        this.isTextOverflow = false;
	        this.$emit('textOverflow', false);
	      }
	    }
	  },
	  components: {
	    icon: _icon2.default,
	    underline: _textFieldUnderline2.default,
	    'enhanced-textarea': _enhancedTextarea2.default,
	    'text-field-label': _textFieldLabel2.default,
	    'text-field-hint': _textFieldHint2.default
	  }
	};

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(220)
	
	/* script */
	__vue_exports__ = __webpack_require__(222)
	
	/* template */
	var __vue_template__ = __webpack_require__(223)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\PaintGame\\node_modules\\muse-ui\\src\\textField\\textFieldUnderline.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-793447c9", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-793447c9", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] textFieldUnderline.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(221);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(76)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-793447c9!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./textFieldUnderline.vue", function() {
				var newContent = require("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-793447c9!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./textFieldUnderline.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(68)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.mu-text-field-line {\n  margin: 0;\n  height: 1px;\n  border: none;\n  background-color: rgba(0, 0, 0, 0.12);\n  left: 0;\n  right: 0;\n  position: absolute;\n}\n.mu-text-field.has-icon .mu-text-field-line {\n  left: 56px;\n}\n.mu-text-field-line.disabled {\n  height: auto;\n  background-color: transparent;\n  border-bottom: 2px dotted rgba(0, 0, 0, 0.38);\n}\nhtml.pixel-ratio-2 .mu-text-field-line {\n  -webkit-transform: scaleY(0.5);\n  transform: scaleY(0.5);\n}\nhtml.pixel-ratio-3 .mu-text-field-line {\n  -webkit-transform: scaleY(0.33);\n  transform: scaleY(0.33);\n}\n.mu-text-field-focus-line {\n  margin: 0;\n  height: 2px;\n  border: none;\n  background-color: #03a9f4;\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin-top: -1px;\n  transform: scaleX(0);\n  transition: transform 0.45s cubic-bezier(0.23, 1, 0.32, 1);\n}\n.mu-text-field.has-icon .mu-text-field-focus-line {\n  left: 56px;\n}\n.mu-text-field-focus-line.focus {\n  transform: scaleX(1);\n}\nhtml.pixel-ratio-2 .mu-text-field-focus-line.focus {\n  -webkit-transform: scaleX(1) scaleY(0.5);\n  transform: scaleX(1) scaleY(0.5);\n}\nhtml.pixel-ratio-3 .mu-text-field-focus-line.focus {\n  -webkit-transform: scaleX(1) scaleY(0.33);\n  transform: scaleX(1) scaleY(0.33);\n}\n.mu-text-field-focus-line.error {\n  transform: scaleX(1);\n  background-color: #f44336;\n}\nhtml.pixel-ratio-2 .mu-text-field-focus-line.error {\n  -webkit-transform: scaleX(1) scaleY(0.5);\n  transform: scaleX(1) scaleY(0.5);\n}\nhtml.pixel-ratio-3 .mu-text-field-focus-line.error {\n  -webkit-transform: scaleX(1) scaleY(0.33);\n  transform: scaleX(1) scaleY(0.33);\n}\nhtml.pixel-ratio-2 .mu-text-field-focus-line {\n  -webkit-transform: scaleX(0) scaleY(0.5);\n  transform: scaleX(0) scaleY(0.5);\n}\nhtml.pixel-ratio-3 .mu-text-field-focus-line {\n  -webkit-transform: scaleX(0) scaleY(0.33);\n  transform: scaleX(0) scaleY(0.33);\n}\n", "", {"version":3,"sources":["/./node_modules/muse-ui/src/textField/textFieldUnderline.vue"],"names":[],"mappings":";AAAA;EACE,UAAU;EACV,YAAY;EACZ,aAAa;EACb,sCAAsC;EACtC,QAAQ;EACR,SAAS;EACT,mBAAmB;CACpB;AACD;EACE,WAAW;CACZ;AACD;EACE,aAAa;EACb,8BAA8B;EAC9B,8CAA8C;CAC/C;AACD;EACE,+BAA+B;EAC/B,uBAAuB;CACxB;AACD;EACE,gCAAgC;EAChC,wBAAwB;CACzB;AACD;EACE,UAAU;EACV,YAAY;EACZ,aAAa;EACb,0BAA0B;EAC1B,mBAAmB;EACnB,QAAQ;EACR,SAAS;EACT,iBAAiB;EACjB,qBAAqB;EACrB,2DAA2D;CAC5D;AACD;EACE,WAAW;CACZ;AACD;EACE,qBAAqB;CACtB;AACD;EACE,yCAAyC;EACzC,iCAAiC;CAClC;AACD;EACE,0CAA0C;EAC1C,kCAAkC;CACnC;AACD;EACE,qBAAqB;EACrB,0BAA0B;CAC3B;AACD;EACE,yCAAyC;EACzC,iCAAiC;CAClC;AACD;EACE,0CAA0C;EAC1C,kCAAkC;CACnC;AACD;EACE,yCAAyC;EACzC,iCAAiC;CAClC;AACD;EACE,0CAA0C;EAC1C,kCAAkC;CACnC","file":"textFieldUnderline.vue","sourcesContent":[".mu-text-field-line {\n  margin: 0;\n  height: 1px;\n  border: none;\n  background-color: rgba(0, 0, 0, 0.12);\n  left: 0;\n  right: 0;\n  position: absolute;\n}\n.mu-text-field.has-icon .mu-text-field-line {\n  left: 56px;\n}\n.mu-text-field-line.disabled {\n  height: auto;\n  background-color: transparent;\n  border-bottom: 2px dotted rgba(0, 0, 0, 0.38);\n}\nhtml.pixel-ratio-2 .mu-text-field-line {\n  -webkit-transform: scaleY(0.5);\n  transform: scaleY(0.5);\n}\nhtml.pixel-ratio-3 .mu-text-field-line {\n  -webkit-transform: scaleY(0.33);\n  transform: scaleY(0.33);\n}\n.mu-text-field-focus-line {\n  margin: 0;\n  height: 2px;\n  border: none;\n  background-color: #03a9f4;\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin-top: -1px;\n  transform: scaleX(0);\n  transition: transform 0.45s cubic-bezier(0.23, 1, 0.32, 1);\n}\n.mu-text-field.has-icon .mu-text-field-focus-line {\n  left: 56px;\n}\n.mu-text-field-focus-line.focus {\n  transform: scaleX(1);\n}\nhtml.pixel-ratio-2 .mu-text-field-focus-line.focus {\n  -webkit-transform: scaleX(1) scaleY(0.5);\n  transform: scaleX(1) scaleY(0.5);\n}\nhtml.pixel-ratio-3 .mu-text-field-focus-line.focus {\n  -webkit-transform: scaleX(1) scaleY(0.33);\n  transform: scaleX(1) scaleY(0.33);\n}\n.mu-text-field-focus-line.error {\n  transform: scaleX(1);\n  background-color: #f44336;\n}\nhtml.pixel-ratio-2 .mu-text-field-focus-line.error {\n  -webkit-transform: scaleX(1) scaleY(0.5);\n  transform: scaleX(1) scaleY(0.5);\n}\nhtml.pixel-ratio-3 .mu-text-field-focus-line.error {\n  -webkit-transform: scaleX(1) scaleY(0.33);\n  transform: scaleX(1) scaleY(0.33);\n}\nhtml.pixel-ratio-2 .mu-text-field-focus-line {\n  -webkit-transform: scaleX(0) scaleY(0.5);\n  transform: scaleX(0) scaleY(0.5);\n}\nhtml.pixel-ratio-3 .mu-text-field-focus-line {\n  -webkit-transform: scaleX(0) scaleY(0.33);\n  transform: scaleX(0) scaleY(0.33);\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(98);
	
	exports.default = {
	  props: {
	    focus: {
	      type: Boolean,
	      default: false
	    },
	    error: {
	      type: Boolean
	    },
	    errorColor: {
	      type: String
	    },
	    disabled: {
	      type: Boolean
	    }
	  },
	  computed: {
	    lineClass: function lineClass() {
	      return {
	        focus: this.focus,
	        error: this.error
	      };
	    },
	    errorStyle: function errorStyle() {
	      return {
	        'background-color': this.error ? (0, _utils.getColor)(this.errorColor) : ''
	      };
	    }
	  }
	}; //
	//
	//
	//
	//
	//
	//

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', [_vm._h('hr', {
	    staticClass: "mu-text-field-line",
	    class: {
	      'disabled': _vm.disabled
	    }
	  }), " ", (!_vm.disabled) ? _vm._h('hr', {
	    staticClass: "mu-text-field-focus-line",
	    class: _vm.lineClass,
	    style: (_vm.errorStyle)
	  }) : _vm._e()])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-793447c9", module.exports)
	  }
	}

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(225)
	
	/* script */
	__vue_exports__ = __webpack_require__(227)
	
	/* template */
	var __vue_template__ = __webpack_require__(228)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\PaintGame\\node_modules\\muse-ui\\src\\textField\\enhancedTextarea.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-01db771a", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-01db771a", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] enhancedTextarea.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(226);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(76)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-01db771a!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./enhancedTextarea.vue", function() {
				var newContent = require("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-01db771a!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./enhancedTextarea.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(68)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.mu-text-field-textarea {\n  resize: vertical;\n  line-height: 1.5;\n}\n", "", {"version":3,"sources":["/./node_modules/muse-ui/src/textField/enhancedTextarea.vue"],"names":[],"mappings":";AAAA;EACE,iBAAiB;EACjB,iBAAiB;CAClB","file":"enhancedTextarea.vue","sourcesContent":[".mu-text-field-textarea {\n  resize: vertical;\n  line-height: 1.5;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 227 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	
	exports.default = {
	  props: {
	    placeholder: {
	      type: String
	    },
	    value: {
	      type: String
	    },
	    rows: {
	      type: Number,
	      default: 1
	    },
	    rowsMax: {
	      type: Number
	    }
	  },
	  methods: {
	    resizeTextarea: function resizeTextarea() {
	      var element = this.$el;
	      if (!element) return;
	      var lineHeight = window.getComputedStyle(element, null).getPropertyValue('line-height');
	      lineHeight = Number(lineHeight.substring(0, lineHeight.indexOf('px')));
	      var pt = window.getComputedStyle(element, null).getPropertyValue('padding-top');
	      pt = Number(pt.substring(0, pt.indexOf('px')));
	      var pd = window.getComputedStyle(element, null).getPropertyValue('padding-bottom');
	      pd = Number(pd.substring(0, pd.indexOf('px')));
	      var line = this.getLineNum(this.value);
	      line = line > this.rows ? line : this.rows;
	      line = this.rowsMax && line > this.rowsMax ? this.rowsMax : line;
	      var height = pd + pt + lineHeight * line;
	      element.style.height = height + 'px';
	    },
	    getLineNum: function getLineNum(value, line) {
	      line = line || 0;
	      line++;
	      if (!value || value.indexOf('\n') === -1) return line;
	      var num = value.indexOf('\n');
	      return this.getLineNum(value.substring(num + 1), line);
	    },
	    handleInput: function handleInput(e) {
	      this.$emit('change', e.target.value);
	    }
	  },
	  mounted: function mounted() {
	    this.resizeTextarea();
	  },
	
	  watch: {
	    value: function value(val, oldVal) {
	      if (val === oldVal) return;
	      this.resizeTextarea();
	    }
	  }
	};

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('textarea', {
	    staticClass: "mu-text-field-input mu-text-field-textarea",
	    attrs: {
	      "placeholder": _vm.placeholder
	    },
	    domProps: {
	      "value": _vm.value
	    },
	    on: {
	      "input": _vm.handleInput
	    }
	  })
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-01db771a", module.exports)
	  }
	}

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(230)
	
	/* script */
	__vue_exports__ = __webpack_require__(232)
	
	/* template */
	var __vue_template__ = __webpack_require__(233)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\PaintGame\\node_modules\\muse-ui\\src\\textField\\textFieldLabel.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-5f3da671", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-5f3da671", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] textFieldLabel.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(231);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(76)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-5f3da671!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./textFieldLabel.vue", function() {
				var newContent = require("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-5f3da671!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./textFieldLabel.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(68)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.mu-text-field-label {\n  line-height: 20px;\n  transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);\n  z-index: 1;\n  cursor: text;\n  transform: scale(0.75);\n  transform-origin: left top;\n  user-select: none;\n  pointer-events: none;\n}\n.mu-text-field.has-label .mu-text-field-label {\n  top: 8px;\n  position: absolute;\n}\n.mu-text-field.has-label .mu-text-field-label.float {\n  transform: scale(1);\n  top: 38px;\n  color: rgba(0, 0, 0, 0.38);\n}\n", "", {"version":3,"sources":["/./node_modules/muse-ui/src/textField/textFieldLabel.vue"],"names":[],"mappings":";AAAA;EACE,kBAAkB;EAClB,qDAAqD;EACrD,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,2BAA2B;EAC3B,kBAAkB;EAClB,qBAAqB;CACtB;AACD;EACE,SAAS;EACT,mBAAmB;CACpB;AACD;EACE,oBAAoB;EACpB,UAAU;EACV,2BAA2B;CAC5B","file":"textFieldLabel.vue","sourcesContent":[".mu-text-field-label {\n  line-height: 20px;\n  transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);\n  z-index: 1;\n  cursor: text;\n  transform: scale(0.75);\n  transform-origin: left top;\n  user-select: none;\n  pointer-events: none;\n}\n.mu-text-field.has-label .mu-text-field-label {\n  top: 8px;\n  position: absolute;\n}\n.mu-text-field.has-label .mu-text-field-label.float {\n  transform: scale(1);\n  top: 38px;\n  color: rgba(0, 0, 0, 0.38);\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 232 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  props: {
	    htmlFor: {
	      type: String
	    },
	    focus: {
	      type: Boolean,
	      default: false
	    },
	    float: {
	      type: Boolean,
	      default: false
	    }
	  }
	};

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    staticClass: "mu-text-field-label",
	    class: {
	      'float': _vm.float
	    },
	    attrs: {
	      "for": _vm.htmlFor
	    }
	  }, [_vm._t("default")])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-5f3da671", module.exports)
	  }
	}

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(235)
	
	/* script */
	__vue_exports__ = __webpack_require__(237)
	
	/* template */
	var __vue_template__ = __webpack_require__(238)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\PaintGame\\node_modules\\muse-ui\\src\\textField\\textFieldHint.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-d8e213cc", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-d8e213cc", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] textFieldHint.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(236);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(76)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-d8e213cc!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./textFieldHint.vue", function() {
				var newContent = require("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-d8e213cc!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./textFieldHint.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(68)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.mu-text-field-hint {\n  position: absolute;\n  opacity: 0;\n  transition: opacity 0.45s cubic-bezier(0.23, 1, 0.32, 1);\n  color: rgba(0, 0, 0, 0.38);\n  line-height: 34px;\n  user-select: none;\n  cursor: text;\n}\n.mu-text-field-hint.show {\n  opacity: 1;\n}\n.mu-text-field.multi-line .mu-text-field-hint {\n  line-height: 1.5;\n}\n", "", {"version":3,"sources":["/./node_modules/muse-ui/src/textField/textFieldHint.vue"],"names":[],"mappings":";AAAA;EACE,mBAAmB;EACnB,WAAW;EACX,yDAAyD;EACzD,2BAA2B;EAC3B,kBAAkB;EAClB,kBAAkB;EAClB,aAAa;CACd;AACD;EACE,WAAW;CACZ;AACD;EACE,iBAAiB;CAClB","file":"textFieldHint.vue","sourcesContent":[".mu-text-field-hint {\n  position: absolute;\n  opacity: 0;\n  transition: opacity 0.45s cubic-bezier(0.23, 1, 0.32, 1);\n  color: rgba(0, 0, 0, 0.38);\n  line-height: 34px;\n  user-select: none;\n  cursor: text;\n}\n.mu-text-field-hint.show {\n  opacity: 1;\n}\n.mu-text-field.multi-line .mu-text-field-hint {\n  line-height: 1.5;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 237 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  props: {
	    text: {
	      type: String
	    },
	    show: {
	      type: Boolean,
	      default: true
	    }
	  }
	};

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    staticClass: "mu-text-field-hint",
	    class: {
	      'show': _vm.show
	    }
	  }, ["\n  " + _vm._s(_vm.text) + "\n"])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-d8e213cc", module.exports)
	  }
	}

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    staticClass: "mu-text-field",
	    class: _vm.textFieldClass,
	    style: (_vm.focus ? _vm.errorStyle : {})
	  }, [(_vm.icon) ? _vm._h('icon', {
	    staticClass: "mu-text-field-icon",
	    domProps: {
	      "value": _vm.icon
	    }
	  }) : _vm._e(), " ", _vm._h('label', {
	    ref: "content",
	    staticClass: "mu-text-field-content",
	    on: {
	      "click": _vm.handleLabelClick
	    }
	  }, [(_vm.label) ? _vm._h('text-field-label', {
	    attrs: {
	      "float": _vm.float
	    }
	  }, [_vm._s(_vm.label)]) : _vm._e(), " ", (_vm.hintText) ? _vm._h('text-field-hint', {
	    attrs: {
	      "text": _vm.hintText,
	      "show": _vm.showHint
	    }
	  }) : _vm._e(), " ", _vm._t("default", [(!_vm.multiLine && !_vm.type || _vm.type === 'text') ? _vm._h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.inputValue),
	      expression: "inputValue"
	    }],
	    ref: "input",
	    staticClass: "mu-text-field-input",
	    attrs: {
	      "name": _vm.name,
	      "type": "text",
	      "disabled": _vm.disabled
	    },
	    domProps: {
	      "value": _vm._s(_vm.inputValue)
	    },
	    on: {
	      "focus": _vm.handleFocus,
	      "blur": _vm.handleBlur,
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.inputValue = $event.target.value
	      }
	    }
	  }) : _vm._e(), " ", (!_vm.multiLine && _vm.type === 'password') ? _vm._h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.inputValue),
	      expression: "inputValue"
	    }],
	    ref: "input",
	    staticClass: "mu-text-field-input",
	    attrs: {
	      "name": _vm.name,
	      "type": "password",
	      "disabled": _vm.disabled
	    },
	    domProps: {
	      "value": _vm._s(_vm.inputValue)
	    },
	    on: {
	      "focus": _vm.handleFocus,
	      "blur": _vm.handleBlur,
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.inputValue = $event.target.value
	      }
	    }
	  }) : _vm._e(), " ", (!_vm.multiLine && _vm.type === 'email') ? _vm._h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.inputValue),
	      expression: "inputValue"
	    }],
	    ref: "input",
	    staticClass: "mu-text-field-input",
	    attrs: {
	      "name": _vm.name,
	      "type": "email",
	      "disabled": _vm.disabled
	    },
	    domProps: {
	      "value": _vm._s(_vm.inputValue)
	    },
	    on: {
	      "focus": _vm.handleFocus,
	      "blur": _vm.handleBlur,
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.inputValue = $event.target.value
	      }
	    }
	  }) : _vm._e(), " ", (!_vm.multiLine && _vm.type === 'url') ? _vm._h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.inputValue),
	      expression: "inputValue"
	    }],
	    ref: "input",
	    staticClass: "mu-text-field-input",
	    attrs: {
	      "name": _vm.name,
	      "type": "url",
	      "disabled": _vm.disabled
	    },
	    domProps: {
	      "value": _vm._s(_vm.inputValue)
	    },
	    on: {
	      "focus": _vm.handleFocus,
	      "blur": _vm.handleBlur,
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.inputValue = $event.target.value
	      }
	    }
	  }) : _vm._e(), " ", (!_vm.multiLine && _vm.type === 'number') ? _vm._h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model.number",
	      value: (_vm.inputValue),
	      expression: "inputValue",
	      modifiers: {
	        "number": true
	      }
	    }],
	    ref: "input",
	    staticClass: "mu-text-field-input",
	    attrs: {
	      "name": _vm.name,
	      "type": "number",
	      "disabled": _vm.disabled
	    },
	    domProps: {
	      "value": _vm._s(_vm.inputValue)
	    },
	    on: {
	      "focus": _vm.handleFocus,
	      "blur": _vm.handleBlur,
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.inputValue = _vm._n($event.target.value)
	      }
	    }
	  }) : _vm._e(), " ", (_vm.multiLine) ? _vm._h('enhanced-textarea', {
	    ref: "textarea",
	    attrs: {
	      "disabled": _vm.disabled,
	      "rows": _vm.rows,
	      "rowsMax": _vm.rowsMax
	    },
	    domProps: {
	      "value": _vm.inputValue
	    },
	    on: {
	      "change": _vm.handleChange
	    },
	    nativeOn: {
	      "focus": function($event) {
	        _vm.handleFocus($event)
	      },
	      "blur": function($event) {
	        _vm.handleBlur($event)
	      }
	    }
	  }) : _vm._e()]), " ", (_vm.underlineShow) ? _vm._h('underline', {
	    attrs: {
	      "error": !!_vm.errorText,
	      "disabled": _vm.disabled,
	      "errorColor": _vm.errorColor,
	      "focus": _vm.focus
	    }
	  }) : _vm._e(), " ", (_vm.errorText || _vm.helpText || _vm.maxLength > 0) ? _vm._h('div', {
	    staticClass: "mu-text-field-help",
	    style: (_vm.errorStyle)
	  }, [_vm._h('div', ["\n            " + _vm._s(_vm.errorText || _vm.helpText) + "\n        "]), " ", (_vm.maxLength > 0) ? _vm._h('div', ["\n            " + _vm._s(_vm.charLength) + "/" + _vm._s(_vm.maxLength) + "\n        "]) : _vm._e()]) : _vm._e()])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-498eb473", module.exports)
	  }
	}

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', [_vm._h('div', {
	    staticClass: "page-content"
	  }, [_vm._h('div', {
	    staticClass: "page-content-wrapper"
	  }, [_vm._h('textFieldLabel', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.userName),
	      expression: "userName"
	    }],
	    attrs: {
	      "labelFloat": "",
	      "label": "请输入你的昵称",
	      "type": "text",
	      "fullWidth": ""
	    },
	    domProps: {
	      "value": (_vm.userName)
	    },
	    on: {
	      "input": function($event) {
	        _vm.userName = $event
	      }
	    }
	  }), " ", _vm._h('raisedButton', {
	    attrs: {
	      "label": "进入游戏",
	      "primary": "",
	      "fullWidth": ""
	    },
	    on: {
	      "click": _vm.test
	    }
	  })])])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-7bb38e16", module.exports)
	  }
	}

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(242)
	
	/* script */
	__vue_exports__ = __webpack_require__(244)
	
	/* template */
	var __vue_template__ = __webpack_require__(251)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\PaintGame\\app\\pages\\room.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-c12d09bc", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-c12d09bc", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] room.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(243);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(76)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-c12d09bc!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./room.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-c12d09bc!./../../node_modules/less-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./room.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(68)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.page-content {\n  padding-top: 56px;\n}\n.page-content .page-content-wrapper {\n  padding-top: 48px;\n  padding-right: 72px;\n  padding-bottom: 48px;\n  padding-left: 72px;\n}\n.page-content .page-content-wrapper .center-box {\n  margin: 0 auto;\n  text-align: center;\n}\n.page-content .page-content-wrapper .center-box .canvas {\n  border-radius: 4px;\n  box-shadow: rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px;\n  background: #fff9c4;\n}\n.page-content .page-content-wrapper .canvas-slider {\n  margin-top: 16px;\n}\n.page-content .page-content-wrapper .float-button {\n  position: fixed;\n  bottom: 65px;\n  right: 16px;\n}\n@media (max-width: 993px) {\n.page-content .page-content-wrapper {\n    padding-top: 24px;\n    padding-right: 36px;\n    padding-bottom: 24px;\n    padding-left: 36px;\n}\n}\n@media (min-width: 480px) {\n.page-content {\n    padding-top: 64px;\n}\n}\n", "", {"version":3,"sources":["/./app/pages/room.vue"],"names":[],"mappings":";AAAA;EACE,kBAAkB;CACnB;AACD;EACE,kBAAkB;EAClB,oBAAoB;EACpB,qBAAqB;EACrB,mBAAmB;CACpB;AACD;EACE,eAAe;EACf,mBAAmB;CACpB;AACD;EACE,mBAAmB;EACnB,uFAAuF;EACvF,oBAAoB;CACrB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,gBAAgB;EAChB,aAAa;EACb,YAAY;CACb;AACD;AACE;IACE,kBAAkB;IAClB,oBAAoB;IACpB,qBAAqB;IACrB,mBAAmB;CACpB;CACF;AACD;AACE;IACE,kBAAkB;CACnB;CACF","file":"room.vue","sourcesContent":[".page-content {\n  padding-top: 56px;\n}\n.page-content .page-content-wrapper {\n  padding-top: 48px;\n  padding-right: 72px;\n  padding-bottom: 48px;\n  padding-left: 72px;\n}\n.page-content .page-content-wrapper .center-box {\n  margin: 0 auto;\n  text-align: center;\n}\n.page-content .page-content-wrapper .center-box .canvas {\n  border-radius: 4px;\n  box-shadow: rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px;\n  background: #fff9c4;\n}\n.page-content .page-content-wrapper .canvas-slider {\n  margin-top: 16px;\n}\n.page-content .page-content-wrapper .float-button {\n  position: fixed;\n  bottom: 65px;\n  right: 16px;\n}\n@media (max-width: 993px) {\n  .page-content .page-content-wrapper {\n    padding-top: 24px;\n    padding-right: 36px;\n    padding-bottom: 24px;\n    padding-left: 36px;\n  }\n}\n@media (min-width: 480px) {\n  .page-content {\n    padding-top: 64px;\n  }\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _navgation = __webpack_require__(78);
	
	var _navgation2 = _interopRequireDefault(_navgation);
	
	var _floatButton = __webpack_require__(245);
	
	var _floatButton2 = _interopRequireDefault(_floatButton);
	
	var _snackbar = __webpack_require__(185);
	
	var _snackbar2 = _interopRequireDefault(_snackbar);
	
	var _slider = __webpack_require__(261);
	
	var _slider2 = _interopRequireDefault(_slider);
	
	var _selectField = __webpack_require__(267);
	
	var _selectField2 = _interopRequireDefault(_selectField);
	
	var _textField = __webpack_require__(214);
	
	var _textField2 = _interopRequireDefault(_textField);
	
	var _raisedButton = __webpack_require__(179);
	
	var _raisedButton2 = _interopRequireDefault(_raisedButton);
	
	var _menuItem = __webpack_require__(291);
	
	var _menuItem2 = _interopRequireDefault(_menuItem);
	
	var _mutationTypes = __webpack_require__(210);
	
	var types = _interopRequireWildcard(_mutationTypes);
	
	var _vuex = __webpack_require__(6);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	
	exports.default = {
	  computed: (0, _vuex.mapGetters)({
	    mousePos: 'mousePos',
	    lastPos: 'lastPos',
	    drawerState: 'drawerState',
	    drawing: 'drawFlag',
	    userName: 'userName',
	    curSeatId: 'curSeatId'
	  }),
	  data: function data() {
	    return {
	      snackbar: false,
	      message: '',
	      answer: '',
	      tip: '提示: 3个字',
	      paintThick: 0,
	      paintColor: 'red'
	    };
	  },
	
	  components: {
	    navgation: _navgation2.default,
	    snackbar: _snackbar2.default,
	    floatButton: _floatButton2.default,
	    raisedButton: _raisedButton2.default,
	    textFieldLabel: _textField2.default,
	    slider: _slider2.default,
	    selectField: _selectField2.default,
	    selectItem: _menuItem2.default
	  },
	  methods: {
	    showSnackbar: function showSnackbar(message) {
	      var _this = this;
	
	      this.message = message;
	      this.snackbar = true;
	      if (this.snackTimer) clearTimeout(this.snackTimer);
	      this.snackTimer = setTimeout(function () {
	        _this.snackbar = false;
	      }, 5000);
	    },
	    hideSnackbar: function hideSnackbar() {
	      this.snackbar = false;
	      if (this.snackTimer) clearTimeout(this.snackTimer);
	    },
	    clearCanvas: function clearCanvas() {
	      this.$store.commit(types.CLEAR_DRAW_CANVAS);
	      this.$socket.emit('clear_canvas');
	    },
	    changeDrawer: function changeDrawer() {
	      console.log(1);
	      this.$socket.emit('change_drawer', this.curSeatId);
	    }
	  },
	  created: function created() {
	    console.log(this.drawerState);
	  },
	  mounted: function mounted() {
	    this.$store.commit(types.DRAW_CANVAS_INIT, 'canvas');
	    this.$store.commit(types.SHOW_CANVAS_INIT, 'show-canvas');
	  },
	
	  watch: {
	    mousePos: function mousePos() {
	      this.$socket.emit('drawer_mouse_move', {
	        lastPos: this.lastPos,
	        mousePos: this.mousePos
	      });
	    },
	    drawerState: function drawerState() {
	      this.showSnackbar("玩家开始绘画");
	      console.log(this.drawerState);
	    }
	  }
	};

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _floatButton = __webpack_require__(246);
	
	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_floatButton).default;
	  }
	});

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(247)
	
	/* script */
	__vue_exports__ = __webpack_require__(249)
	
	/* template */
	var __vue_template__ = __webpack_require__(250)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\PaintGame\\node_modules\\muse-ui\\src\\floatButton\\floatButton.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-54900616", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-54900616", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] floatButton.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(248);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(76)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-54900616!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./floatButton.vue", function() {
				var newContent = require("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-54900616!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./floatButton.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(68)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.mu-float-button {\n  position: relative;\n  display: inline-block;\n  overflow: visible;\n  line-height: 1;\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  border: none;\n  appearance: none;\n  background-color: #03a9f4;\n  color: #ffffff;\n  text-decoration: none;\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  transform: translate3d(0, 0, 0);\n  -webkit-box-flex: 0;\n  -webkit-flex-shrink: 0;\n  -ms-flex: 0 0 auto;\n  flex-shrink: 0;\n  margin: 0;\n  outline: 0;\n  padding: 0;\n  cursor: pointer;\n  box-shadow: rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px;\n}\n.mu-float-button .mu-circle-ripple {\n  opacity: .3;\n}\n.mu-float-button.disabled {\n  color: rgba(0, 0, 0, 0.3);\n  cursor: not-allowed;\n  background-color: #e6e6e6;\n  box-shadow: none;\n}\n.mu-float-button.disabled.hover,\n.mu-float-button.disabled:active,\n.mu-float-button.disabled:hover {\n  box-shadow: none;\n}\n.mu-float-button.disabled.hover .mu-float-button-wrapper,\n.mu-float-button.disabled:active .mu-float-button-wrapper,\n.mu-float-button.disabled:hover .mu-float-button-wrapper {\n  background-color: transparent;\n}\n.mu-float-button.hover,\n.mu-float-button:active {\n  box-shadow: rgba(0, 0, 0, 0.188235) 0px 10px 30px, rgba(0, 0, 0, 0.227451) 0px 6px 10px;\n}\n.mu-float-button.hover .mu-float-button-wrapper,\n.mu-float-button:active .mu-float-button-wrapper {\n  background-color: rgba(255, 255, 255, 0.3);\n}\n.mu-float-button-wrapper {\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n}\n.mu-float-button-mini {\n  width: 40px;\n  height: 40px;\n}\n.mu-float-button-secondary {\n  background-color: #ff4081;\n}\n", "", {"version":3,"sources":["/./node_modules/muse-ui/src/floatButton/floatButton.vue"],"names":[],"mappings":";AAAA;EACE,mBAAmB;EACnB,sBAAsB;EACtB,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,iBAAiB;EACjB,0BAA0B;EAC1B,eAAe;EACf,sBAAsB;EACtB,2BAA2B;EAC3B,2DAA2D;EAC3D,gCAAgC;EAChC,oBAAoB;EACpB,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,UAAU;EACV,WAAW;EACX,WAAW;EACX,gBAAgB;EAChB,uFAAuF;CACxF;AACD;EACE,YAAY;CACb;AACD;EACE,0BAA0B;EAC1B,oBAAoB;EACpB,0BAA0B;EAC1B,iBAAiB;CAClB;AACD;;;EAGE,iBAAiB;CAClB;AACD;;;EAGE,8BAA8B;CAC/B;AACD;;EAEE,wFAAwF;CACzF;AACD;;EAEE,2CAA2C;CAC5C;AACD;EACE,mBAAmB;EACnB,cAAc;EACd,wBAAwB;EACxB,oBAAoB;EACpB,mBAAmB;EACnB,QAAQ;EACR,OAAO;EACP,SAAS;EACT,UAAU;CACX;AACD;EACE,YAAY;EACZ,aAAa;CACd;AACD;EACE,0BAA0B;CAC3B","file":"floatButton.vue","sourcesContent":[".mu-float-button {\n  position: relative;\n  display: inline-block;\n  overflow: visible;\n  line-height: 1;\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  border: none;\n  appearance: none;\n  background-color: #03a9f4;\n  color: #ffffff;\n  text-decoration: none;\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  transform: translate3d(0, 0, 0);\n  -webkit-box-flex: 0;\n  -webkit-flex-shrink: 0;\n  -ms-flex: 0 0 auto;\n  flex-shrink: 0;\n  margin: 0;\n  outline: 0;\n  padding: 0;\n  cursor: pointer;\n  box-shadow: rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px;\n}\n.mu-float-button .mu-circle-ripple {\n  opacity: .3;\n}\n.mu-float-button.disabled {\n  color: rgba(0, 0, 0, 0.3);\n  cursor: not-allowed;\n  background-color: #e6e6e6;\n  box-shadow: none;\n}\n.mu-float-button.disabled.hover,\n.mu-float-button.disabled:active,\n.mu-float-button.disabled:hover {\n  box-shadow: none;\n}\n.mu-float-button.disabled.hover .mu-float-button-wrapper,\n.mu-float-button.disabled:active .mu-float-button-wrapper,\n.mu-float-button.disabled:hover .mu-float-button-wrapper {\n  background-color: transparent;\n}\n.mu-float-button.hover,\n.mu-float-button:active {\n  box-shadow: rgba(0, 0, 0, 0.188235) 0px 10px 30px, rgba(0, 0, 0, 0.227451) 0px 6px 10px;\n}\n.mu-float-button.hover .mu-float-button-wrapper,\n.mu-float-button:active .mu-float-button-wrapper {\n  background-color: rgba(255, 255, 255, 0.3);\n}\n.mu-float-button-wrapper {\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n}\n.mu-float-button-mini {\n  width: 40px;\n  height: 40px;\n}\n.mu-float-button-secondary {\n  background-color: #ff4081;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _abstractButton = __webpack_require__(107);
	
	var _abstractButton2 = _interopRequireDefault(_abstractButton);
	
	var _icon = __webpack_require__(93);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	var _utils = __webpack_require__(98);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'mu-float-button',
	  props: {
	    icon: {
	      type: String
	    },
	    iconClass: {
	      type: String,
	      default: ''
	    },
	    href: {
	      type: String,
	      default: ''
	    },
	    target: {
	      type: String
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    secondary: {
	      type: Boolean,
	      default: false
	    },
	    mini: {
	      type: Boolean,
	      default: false
	    },
	    backgroundColor: {
	      type: String,
	      default: ''
	    }
	  },
	  computed: {
	    buttonClass: function buttonClass() {
	      var classNames = [];
	      if (this.secondary) classNames.push('mu-float-button-secondary');
	      if (this.mini) classNames.push('mu-float-button-mini');
	      return classNames.join(' ');
	    },
	    buttonStyle: function buttonStyle() {
	      return {
	        'background-color': (0, _utils.getColor)(this.backgroundColor)
	      };
	    }
	  },
	  methods: {
	    handleClick: function handleClick(e) {
	      this.$emit('click', e);
	    },
	    handleKeyboardFocus: function handleKeyboardFocus(isFocus) {
	      this.$emit('keyboardFocus', isFocus);
	    },
	    handleHover: function handleHover(event) {
	      this.$emit('hover', event);
	    },
	    handleHoverExit: function handleHoverExit(event) {
	      this.$emit('hoverExit', event);
	    }
	  },
	  components: {
	    'abstract-button': _abstractButton2.default,
	    icon: _icon2.default
	  }
	}; //
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

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('abstract-button', {
	    staticClass: "mu-float-button",
	    class: [_vm.buttonClass],
	    style: (_vm.buttonStyle),
	    attrs: {
	      "href": _vm.href,
	      "target": _vm.target,
	      "disabled": _vm.disabled
	    },
	    on: {
	      "click": _vm.handleClick,
	      "keyboardFocus": _vm.handleKeyboardFocus,
	      "hover": _vm.handleHover,
	      "hoverExit": _vm.handleHoverExit
	    }
	  }, [_vm._h('div', {
	    staticClass: "mu-float-button-wrapper"
	  }, [_vm._t("default", [_vm._h('icon', {
	    class: [_vm.iconClass],
	    domProps: {
	      "value": this.icon
	    }
	  })])])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-54900616", module.exports)
	  }
	}

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', [_vm._h('navgation'), " ", _vm._h('div', {
	    staticClass: "page-content"
	  }, [_vm._h('div', {
	    staticClass: "page-content-wrapper"
	  }, [_vm._h('div', {
	    staticClass: "center-box"
	  }, [_vm._h('canvas', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.drawerState),
	      expression: "drawerState"
	    }],
	    staticClass: "canvas",
	    attrs: {
	      "id": "canvas"
	    }
	  }), " ", _vm._h('canvas', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (!_vm.drawerState),
	      expression: "!drawerState"
	    }],
	    staticClass: "canvas",
	    attrs: {
	      "id": "show-canvas"
	    }
	  })]), " ", _vm._h('slider', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.drawerState),
	      expression: "drawerState"
	    }, {
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.paintThick),
	      expression: "paintThick"
	    }],
	    staticClass: "canvas-slider",
	    attrs: {
	      "step": 1,
	      "max": 10,
	      "min": 0
	    },
	    domProps: {
	      "value": (_vm.paintThick)
	    },
	    on: {
	      "input": function($event) {
	        _vm.paintThick = $event
	      }
	    }
	  }), " ", _vm._h('selectField', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.drawerState),
	      expression: "drawerState"
	    }, {
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.paintColor),
	      expression: "paintColor"
	    }],
	    attrs: {
	      "label": "选择画笔的颜色"
	    },
	    domProps: {
	      "value": (_vm.paintColor)
	    },
	    on: {
	      "input": function($event) {
	        _vm.paintColor = $event
	      }
	    }
	  }, [_vm._h('selectItem', {
	    attrs: {
	      "value": "black",
	      "title": "黑色"
	    }
	  }), " ", _vm._h('selectItem', {
	    attrs: {
	      "value": "red",
	      "title": "红色"
	    }
	  }), " ", _vm._h('selectItem', {
	    attrs: {
	      "value": "blue",
	      "title": "蓝色"
	    }
	  }), " ", _vm._h('selectItem', {
	    attrs: {
	      "value": "green",
	      "title": "绿色"
	    }
	  })]), " ", _vm._h('textFieldLabel', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (!_vm.drawerState),
	      expression: "!drawerState"
	    }, {
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.answer),
	      expression: "answer"
	    }],
	    attrs: {
	      "labelFloat": "",
	      "label": _vm.tip,
	      "type": "text",
	      "fullWidth": ""
	    },
	    domProps: {
	      "value": (_vm.answer)
	    },
	    on: {
	      "input": function($event) {
	        _vm.answer = $event
	      }
	    }
	  }), " ", _vm._h('raisedButton', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (!_vm.drawerState),
	      expression: "!drawerState"
	    }],
	    attrs: {
	      "label": "发送",
	      "primary": "",
	      "fullWidth": ""
	    },
	    on: {
	      "click": _vm.changeDrawer
	    }
	  }), " ", (_vm.snackbar) ? _vm._h('snackbar', {
	    attrs: {
	      "message": _vm.message,
	      "action": "关闭"
	    },
	    on: {
	      "actionClick": _vm.hideSnackbar,
	      "close": _vm.hideSnackbar
	    }
	  }) : _vm._e(), " ", _vm._h('floatButton', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.drawerState),
	      expression: "drawerState"
	    }],
	    staticClass: "float-button",
	    attrs: {
	      "mini": "",
	      "secondary": "",
	      "icon": "clear"
	    },
	    on: {
	      "click": _vm.clearCanvas
	    }
	  })])])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-c12d09bc", module.exports)
	  }
	}

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vue = __webpack_require__(5);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _vuex = __webpack_require__(6);
	
	var _vuex2 = _interopRequireDefault(_vuex);
	
	var _actions = __webpack_require__(253);
	
	var actions = _interopRequireWildcard(_actions);
	
	var _getters = __webpack_require__(255);
	
	var getters = _interopRequireWildcard(_getters);
	
	var _user = __webpack_require__(256);
	
	var _user2 = _interopRequireDefault(_user);
	
	var _seat = __webpack_require__(257);
	
	var _seat2 = _interopRequireDefault(_seat);
	
	var _drawCanvas = __webpack_require__(258);
	
	var _drawCanvas2 = _interopRequireDefault(_drawCanvas);
	
	var _showCanvas = __webpack_require__(259);
	
	var _showCanvas2 = _interopRequireDefault(_showCanvas);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_vue2.default.use(_vuex2.default);
	
	exports.default = new _vuex2.default.Store({
	  actions: actions,
	  getters: getters,
	  modules: {
	    user: _user2.default,
	    seat: _seat2.default,
	    drawCanvas: _drawCanvas2.default,
	    showCanvas: _showCanvas2.default
	  }
	});

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.user_exit = exports.user_enter = undefined;
	
	var _auth = __webpack_require__(254);
	
	var _auth2 = _interopRequireDefault(_auth);
	
	var _mutationTypes = __webpack_require__(210);
	
	var types = _interopRequireWildcard(_mutationTypes);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var user_enter = exports.user_enter = function user_enter(_ref, userName) {
	  var commit = _ref.commit;
	
	  _auth2.default.userEnter(userName, function () {
	    commit(types.USER_ENTER);
	  });
	};
	
	var user_exit = exports.user_exit = function user_exit(_ref2) {
	  var commit = _ref2.commit;
	
	  _auth2.default.userExit(function () {
	    commit(types.USER_EXIT);
	  });
	};

/***/ },
/* 254 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  userEnter: function userEnter(userName, callback) {
	    this.$socket.emit('user enter', userName);
	    callback();
	  },
	  userExit: function userExit(callback) {
	    this.$socket.emit('disconnect');
	    callback();
	  }
	};

/***/ },
/* 255 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var userName = exports.userName = function userName(state) {
	  return state.user.userName;
	};
	var mousePos = exports.mousePos = function mousePos(state) {
	  return state.drawCanvas.mousePos;
	};
	var lastPos = exports.lastPos = function lastPos(state) {
	  return state.drawCanvas.lastPos;
	};
	var drawFlag = exports.drawFlag = function drawFlag(state) {
	  return state.drawCanvas.drawing;
	};
	var newUserName = exports.newUserName = function newUserName(state) {
	  return state.user.newUserName;
	};
	var usersNumber = exports.usersNumber = function usersNumber(state) {
	  return state.user.usersNumber;
	};
	var drawerState = exports.drawerState = function drawerState(state) {
	  return state.user.drawerState;
	};
	var seat = exports.seat = function seat(state) {
	  return state.seat.seat;
	};
	var seatLastId = exports.seatLastId = function seatLastId(state) {
	  return state.seat.seatLastId;
	};
	var curSeatId = exports.curSeatId = function curSeatId(state) {
	  return state.seat.curSeatId;
	};

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mutations;
	
	var _mutationTypes = __webpack_require__(210);
	
	var types = _interopRequireWildcard(_mutationTypes);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var state = {
	  userName: JSON.parse(sessionStorage.getItem('user')) || {},
	  newUserName: '',
	  usersNumber: 0,
	  drawerState: true
	};
	
	var mutations = (_mutations = {}, _defineProperty(_mutations, types.USER_ENTER, function (state, _ref) {
	  var user = _ref.user;
	
	  sessionStorage.setItem('user', JSON.stringify(user.userName));
	  state.usersNumber = user.usersNumber, state.userName = user.userName;
	}), _defineProperty(_mutations, types.NEW_USER_ENTER, function (state, _ref2) {
	  var user = _ref2.user;
	
	  state.usersNumber = user.usersNumber, state.newUserName = user.userName;
	}), _defineProperty(_mutations, types.USER_EXIT, function (state) {
	  sessionStorage.removeItem('user');
	  state.userName = {};
	}), _defineProperty(_mutations, types.SET_DRAWER, function (state) {
	  state.drawerState = true;
	}), _defineProperty(_mutations, types.SET_SHOWER, function (state) {
	  state.drawerState = false;
	}), _mutations);
	
	exports.default = {
	  state: state,
	  mutations: mutations
	};

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mutations;
	
	var _mutationTypes = __webpack_require__(210);
	
	var types = _interopRequireWildcard(_mutationTypes);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var state = {
	  seat: new Array(),
	  seatLastId: -1,
	  curSeatId: -1
	};
	
	var mutations = (_mutations = {}, _defineProperty(_mutations, types.SEAT_INIT, function (state) {
	  for (var i = 0; i < 6; i++) {
	    state.seat[i] = {
	      userName: '',
	      seatState: true
	    };
	  }
	}), _defineProperty(_mutations, types.USER_SIT, function (state, _ref) {
	  var index = _ref.index,
	      user = _ref.user;
	
	  var seat2 = new Array();
	  state.curSeatId = index;
	  console.log(state.curSeatId);
	  for (var i = 0; i < 6; i++) {
	    seat2[i] = state.seat[i];
	  }
	  seat2[index] = {
	    userName: user.userName,
	    seatState: user.seatState
	  };
	  if (state.seatLastId !== -1 && state.seatLastId !== index) {
	    seat2[state.seatLastId] = {
	      userName: '',
	      seatState: true
	    };
	  }
	  state.seatLastId = index;
	  state.seat = seat2;
	}), _defineProperty(_mutations, types.NEW_USER_SIT, function (state, _ref2) {
	  var index = _ref2.index,
	      user = _ref2.user,
	      seatLastId = _ref2.seatLastId;
	
	  var seat2 = new Array();
	  for (var i = 0; i < 6; i++) {
	    seat2[i] = state.seat[i];
	  }
	  seat2[index] = {
	    userName: user.userName,
	    seatState: user.seatState
	  };
	  if (seatLastId !== -1 && seatLastId !== index) {
	    seat2[seatLastId] = {
	      userName: '',
	      seatState: true
	    };
	  }
	  state.seat = seat2;
	}), _mutations);
	
	exports.default = {
	  state: state,
	  mutations: mutations
	};

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mutations;
	
	var _mutationTypes = __webpack_require__(210);
	
	var types = _interopRequireWildcard(_mutationTypes);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var state = {
	  canvas: null,
	  ctx: null,
	  drawing: false,
	  mousePos: {
	    x: 0,
	    y: 0
	  },
	  lastPos: {
	    x: 0,
	    y: 0
	  }
	};
	
	var mutations = (_mutations = {}, _defineProperty(_mutations, types.DRAW_CANVAS_INIT, function (state, el) {
	  state.canvas = document.getElementById(el);
	  state.canvas.width = window.screen.availWidth / window.screen.availHeight < 1 ? window.screen.availWidth * 0.8 : window.screen.availWidth * 0.6;
	  state.canvas.height = window.screen.availWidth / window.screen.availHeight < 1 ? window.screen.availHeight * 0.35 : window.screen.availHeight * 0.4;
	  state.ctx = state.canvas.getContext('2d');
	  var rect = state.canvas.getBoundingClientRect();
	  // Prevent scrolling when touching the canvas
	  document.body.addEventListener("touchstart", function (e) {
	    if (e.target == state.canvas) {
	      e.preventDefault();
	    }
	  }, false);
	  document.body.addEventListener("touchend", function (e) {
	    if (e.target == state.canvas) {
	      e.preventDefault();
	    }
	  }, false);
	  document.body.addEventListener("touchmove", function (e) {
	    if (e.target == state.canvas) {
	      e.preventDefault();
	    }
	  }, false);
	  state.canvas.addEventListener('mousedown', function (e) {
	    state.drawing = true;
	    state.lastPos = {
	      x: e.clientX - rect.left,
	      y: e.clientY - rect.top
	    };
	    state.mousePos = {
	      x: state.lastPos + 1,
	      y: state.mousePos + 1
	    };
	    state.ctx.beginPath();
	    state.ctx.moveTo(state.lastPos.x, state.lastPos.y);
	    state.ctx.lineTo(state.mousePos.x, state.mousePos.y);
	    state.ctx.lineWidth = 1.0;
	    state.ctx.strokeStyle = '#CC0000';
	    state.ctx.stroke();
	    // this.$socket.emit('drawer_mouse_down', {
	    //   lastPos: state.lastPos,
	    //   mousePos: state.mousePos
	    // })
	    state.lastPos = state.mousePos;
	  }, false);
	  state.canvas.addEventListener('mouseup', function (e) {
	    state.drawing = false;
	  }, false);
	  state.canvas.addEventListener('mousemove', function (e) {
	    state.mousePos = {
	      x: e.clientX - rect.left,
	      y: e.clientY - rect.top
	    };
	    if (state.drawing) {
	      state.ctx.beginPath();
	      state.ctx.moveTo(state.lastPos.x, state.lastPos.y);
	      state.ctx.lineTo(state.mousePos.x, state.mousePos.y);
	      state.ctx.lineWidth = 1.0;
	      state.ctx.strokeStyle = '#CC0000';
	      state.ctx.stroke();
	      // this.$socket.emit('drawer_mouse_move', {
	      //   lastPos: state.lastPos,
	      //   mousePos: state.mousePos
	      // })
	      state.lastPos = state.mousePos;
	    }
	  }, false);
	
	  state.canvas.addEventListener("touchstart", function (e) {
	    state.mousePos = {
	      x: e.touches[0].clientX - rect.left,
	      y: e.touches[0].clientY - rect.top
	    };
	    var touch = e.touches[0];
	    var mouseEvent = new MouseEvent("mousedown", {
	      clientX: touch.clientX,
	      clientY: touch.clientY
	    });
	    state.canvas.dispatchEvent(mouseEvent);
	  }, false);
	  state.canvas.addEventListener("touchend", function (e) {
	    var mouseEvent = new MouseEvent("mouseup", {});
	    state.canvas.dispatchEvent(mouseEvent);
	  }, false);
	  state.canvas.addEventListener("touchmove", function (e) {
	    var touch = e.touches[0];
	    var mouseEvent = new MouseEvent("mousemove", {
	      clientX: touch.clientX,
	      clientY: touch.clientY
	    });
	    state.canvas.dispatchEvent(mouseEvent);
	  }, false);
	}), _defineProperty(_mutations, types.CLEAR_DRAW_CANVAS, function (state) {
	  state.ctx.clearRect(0, 0, state.canvas.width, state.canvas.height);
	}), _mutations);
	
	exports.default = {
	  state: state,
	  mutations: mutations
	};

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mutations;
	
	var _mutationTypes = __webpack_require__(210);
	
	var types = _interopRequireWildcard(_mutationTypes);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var state = {
	  canvas: null,
	  ctx: null,
	  mousePos: {
	    x: 0,
	    y: 0
	  },
	  lastPos: {
	    x: 0,
	    y: 0
	  }
	};
	
	var mutations = (_mutations = {}, _defineProperty(_mutations, types.SHOW_CANVAS_INIT, function (state, el) {
	  state.canvas = document.getElementById(el);
	  state.canvas.width = window.screen.availWidth / window.screen.availHeight < 1 ? window.screen.availWidth * 0.8 : window.screen.availWidth * 0.6;
	  state.canvas.height = window.screen.availWidth / window.screen.availHeight < 1 ? window.screen.availHeight * 0.35 : window.screen.availHeight * 0.4;
	  state.ctx = state.canvas.getContext('2d');
	}), _defineProperty(_mutations, types.SHOW_MOUSE_MOVE, function (state, _ref) {
	  var mousePos = _ref.mousePos;
	
	  state.mousePos = mousePos;
	  state.ctx.beginPath();
	  state.ctx.moveTo(state.lastPos.x, state.lastPos.y);
	  state.ctx.lineTo(state.mousePos.x, state.mousePos.y);
	  state.ctx.lineWidth = 1.0;
	  state.ctx.strokeStyle = '#CC0000';
	  state.ctx.stroke();
	  state.lastPos = state.mousePos;
	}), _defineProperty(_mutations, types.SHOW_MOUSE_DOWN, function (state, _ref2) {
	  var lastPos = _ref2.lastPos;
	
	  state.lastPos = lastPos;
	  state.mousePos = {
	    x: state.lastPos + 1,
	    y: state.mousePos + 1
	  };
	  state.ctx.beginPath();
	  state.ctx.moveTo(state.lastPos.x, state.lastPos.y);
	  state.ctx.lineTo(state.mousePos.x, state.mousePos.y);
	  state.ctx.lineWidth = 1.0;
	  state.ctx.strokeStyle = '#CC0000';
	  state.ctx.stroke();
	  state.lastPos = state.mousePos;
	}), _defineProperty(_mutations, types.CLEAR_SHOW_CANVAS, function (state) {
	  state.ctx.clearRect(0, 0, state.canvas.width, state.canvas.height);
	}), _mutations);
	
	exports.default = {
	  state: state,
	  mutations: mutations
	};

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (store, router) {
	  return {
	    connect: function connect() {
	      console.log('socket connected');
	    },
	    user_enter_success: function user_enter_success(user) {
	      store.commit(types.USER_ENTER, { user: user });
	    },
	    user_exit: function user_exit(user) {
	      console.log("有玩家退出");
	    },
	    new_user_join: function new_user_join(user) {
	      store.commit(types.NEW_USER_ENTER, { user: user });
	    },
	    show_mouse_down: function show_mouse_down(data) {},
	    show_mouse_move: function show_mouse_move(data) {
	      store.commit(types.SHOW_MOUSE_MOVE, { mousePos: data.mousePos });
	    },
	    set_drawer: function set_drawer(data) {
	      router.replace({ path: '/room' });
	      store.commit(types.SET_DRAWER);
	    },
	    set_shower: function set_shower(data) {
	      router.replace({ path: '/room' });
	      store.commit(types.SET_SHOWER);
	    },
	    shower_clear_canvas: function shower_clear_canvas(data) {
	      store.commit(types.CLEAR_SHOW_CANVAS);
	    },
	    new_user_sit: function new_user_sit(_ref) {
	      var index = _ref.index,
	          user = _ref.user,
	          seatLastId = _ref.seatLastId;
	
	      store.commit(types.NEW_USER_SIT, { index: index, user: user, seatLastId: seatLastId });
	    }
	  };
	};
	
	var _mutationTypes = __webpack_require__(210);
	
	var types = _interopRequireWildcard(_mutationTypes);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slider = __webpack_require__(262);
	
	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_slider).default;
	  }
	});

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(263)
	
	/* script */
	__vue_exports__ = __webpack_require__(265)
	
	/* template */
	var __vue_template__ = __webpack_require__(266)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\PaintGame\\node_modules\\muse-ui\\src\\slider\\slider.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-12013e1e", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-12013e1e", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] slider.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(264);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(76)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-12013e1e!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./slider.vue", function() {
				var newContent = require("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-12013e1e!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./slider.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(68)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.mu-slider {\n  width: 100%;\n  position: relative;\n  height: 24px;\n  margin-bottom: 16px;\n  display: flex;\n  align-items: center;\n  cursor: default;\n}\n.mu-slider input[type=\"range\"] {\n  position: absolute;\n  display: block;\n  height: 20px;\n  width: 100%;\n  left: 0;\n  right: 0;\n  top: 50%;\n  margin: 0;\n  margin-top: -10px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -ms-appearance: none;\n  appearance: none;\n  background-position: center;\n  background-size: 100% 2px;\n  background-repeat: no-repeat;\n  outline: 0;\n  -ms-background-position-y: 500px;\n  z-index: 2;\n  opacity: 0;\n}\n.mu-slider input[type=\"range\"]:active,\n.mu-slider input[type=\"range\"]:focus {\n  border: 0;\n  outline: 0 none;\n}\n.mu-slider input[type=\"range\"]::-webkit-range-thumb {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -ms-appearance: none;\n  appearance: none;\n  border: none;\n  outline: 0;\n  height: 20px;\n  width: 20px;\n  position: relative;\n  opacity: 0;\n  border-radius: 20px;\n  z-index: 2;\n  cursor: pointer;\n}\n.mu-slider input[type=\"range\"]::-moz-range-track {\n  width: 100%;\n  height: 2px;\n  border: none;\n  outline: 0;\n}\n.mu-slider input[type=\"range\"]::-moz-range-thumb {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -ms-appearance: none;\n  appearance: none;\n  border: none;\n  outline: 0;\n  height: 20px;\n  width: 20px;\n  position: relative;\n  opacity: 0;\n  border-radius: 20px;\n  z-index: 2;\n  cursor: pointer;\n}\n.mu-slider input[type=\"range\"]::-ms-track {\n  width: 100%;\n  height: 2px;\n  cursor: pointer;\n  background: transparent;\n  border-color: transparent;\n  color: transparent;\n}\n.mu-slider input[type=\"range\"]::-ms-thumb {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -ms-appearance: none;\n  appearance: none;\n  border: none;\n  outline: 0;\n  height: 20px;\n  width: 20px;\n  position: relative;\n  opacity: 0;\n  border-radius: 20px;\n  z-index: 2;\n  cursor: pointer;\n}\n.mu-slider-track {\n  position: absolute;\n  height: 2px;\n  left: 0;\n  right: 0;\n  top: 50%;\n  margin-top: -1px;\n  background-color: #bdbdbd;\n}\n.mu-slider-fill {\n  position: absolute;\n  height: 2px;\n  width: 100%;\n  background-color: #03a9f4;\n  left: 0;\n  top: 50%;\n  margin-top: -1px;\n}\n.mu-slider.disabled .mu-slider-fill {\n  background-color: #bdbdbd;\n}\n.mu-slider-thumb {\n  position: absolute;\n  top: 50%;\n  margin-top: -6px;\n  width: 12px;\n  height: 12px;\n  background-color: #03a9f4;\n  color: #03a9f4;\n  border-radius: 50%;\n  transform: translate(-50%, 0);\n  transition: background 450ms cubic-bezier(0.23, 1, 0.32, 1), border-color 450ms cubic-bezier(0.23, 1, 0.32, 1), width 450ms cubic-bezier(0.23, 1, 0.32, 1), height 450ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.mu-slider.active .mu-slider-thumb {\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n}\n.mu-slider.zero .mu-slider-thumb,\n.mu-slider.disabled .mu-slider-thumb {\n  border: 2px solid #bdbdbd;\n  color: #bdbdbd;\n  background-color: #ffffff;\n}\n.mu-slider.zero .mu-slider-thumb .mu-focus-ripple-wrapper,\n.mu-slider.disabled .mu-slider-thumb .mu-focus-ripple-wrapper {\n  top: -14px;\n  left: -14px;\n}\n.mu-slider-thumb .mu-focus-ripple-wrapper {\n  width: 36px;\n  height: 36px;\n  top: -12px;\n  left: -12px;\n}\n", "", {"version":3,"sources":["/./node_modules/muse-ui/src/slider/slider.vue"],"names":[],"mappings":";AAAA;EACE,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,oBAAoB;EACpB,cAAc;EACd,oBAAoB;EACpB,gBAAgB;CACjB;AACD;EACE,mBAAmB;EACnB,eAAe;EACf,aAAa;EACb,YAAY;EACZ,QAAQ;EACR,SAAS;EACT,SAAS;EACT,UAAU;EACV,kBAAkB;EAClB,yBAAyB;EACzB,sBAAsB;EACtB,qBAAqB;EACrB,iBAAiB;EACjB,4BAA4B;EAC5B,0BAA0B;EAC1B,6BAA6B;EAC7B,WAAW;EACX,iCAAiC;EACjC,WAAW;EACX,WAAW;CACZ;AACD;;EAEE,UAAU;EACV,gBAAgB;CACjB;AACD;EACE,yBAAyB;EACzB,sBAAsB;EACtB,qBAAqB;EACrB,iBAAiB;EACjB,aAAa;EACb,WAAW;EACX,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,WAAW;EACX,oBAAoB;EACpB,WAAW;EACX,gBAAgB;CACjB;AACD;EACE,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,WAAW;CACZ;AACD;EACE,yBAAyB;EACzB,sBAAsB;EACtB,qBAAqB;EACrB,iBAAiB;EACjB,aAAa;EACb,WAAW;EACX,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,WAAW;EACX,oBAAoB;EACpB,WAAW;EACX,gBAAgB;CACjB;AACD;EACE,YAAY;EACZ,YAAY;EACZ,gBAAgB;EAChB,wBAAwB;EACxB,0BAA0B;EAC1B,mBAAmB;CACpB;AACD;EACE,yBAAyB;EACzB,sBAAsB;EACtB,qBAAqB;EACrB,iBAAiB;EACjB,aAAa;EACb,WAAW;EACX,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,WAAW;EACX,oBAAoB;EACpB,WAAW;EACX,gBAAgB;CACjB;AACD;EACE,mBAAmB;EACnB,YAAY;EACZ,QAAQ;EACR,SAAS;EACT,SAAS;EACT,iBAAiB;EACjB,0BAA0B;CAC3B;AACD;EACE,mBAAmB;EACnB,YAAY;EACZ,YAAY;EACZ,0BAA0B;EAC1B,QAAQ;EACR,SAAS;EACT,iBAAiB;CAClB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,mBAAmB;EACnB,SAAS;EACT,iBAAiB;EACjB,YAAY;EACZ,aAAa;EACb,0BAA0B;EAC1B,eAAe;EACf,mBAAmB;EACnB,8BAA8B;EAC9B,wMAAwM;CACzM;AACD;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;CACnB;AACD;;EAEE,0BAA0B;EAC1B,eAAe;EACf,0BAA0B;CAC3B;AACD;;EAEE,WAAW;EACX,YAAY;CACb;AACD;EACE,YAAY;EACZ,aAAa;EACb,WAAW;EACX,YAAY;CACb","file":"slider.vue","sourcesContent":[".mu-slider {\n  width: 100%;\n  position: relative;\n  height: 24px;\n  margin-bottom: 16px;\n  display: flex;\n  align-items: center;\n  cursor: default;\n}\n.mu-slider input[type=\"range\"] {\n  position: absolute;\n  display: block;\n  height: 20px;\n  width: 100%;\n  left: 0;\n  right: 0;\n  top: 50%;\n  margin: 0;\n  margin-top: -10px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -ms-appearance: none;\n  appearance: none;\n  background-position: center;\n  background-size: 100% 2px;\n  background-repeat: no-repeat;\n  outline: 0;\n  -ms-background-position-y: 500px;\n  z-index: 2;\n  opacity: 0;\n}\n.mu-slider input[type=\"range\"]:active,\n.mu-slider input[type=\"range\"]:focus {\n  border: 0;\n  outline: 0 none;\n}\n.mu-slider input[type=\"range\"]::-webkit-range-thumb {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -ms-appearance: none;\n  appearance: none;\n  border: none;\n  outline: 0;\n  height: 20px;\n  width: 20px;\n  position: relative;\n  opacity: 0;\n  border-radius: 20px;\n  z-index: 2;\n  cursor: pointer;\n}\n.mu-slider input[type=\"range\"]::-moz-range-track {\n  width: 100%;\n  height: 2px;\n  border: none;\n  outline: 0;\n}\n.mu-slider input[type=\"range\"]::-moz-range-thumb {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -ms-appearance: none;\n  appearance: none;\n  border: none;\n  outline: 0;\n  height: 20px;\n  width: 20px;\n  position: relative;\n  opacity: 0;\n  border-radius: 20px;\n  z-index: 2;\n  cursor: pointer;\n}\n.mu-slider input[type=\"range\"]::-ms-track {\n  width: 100%;\n  height: 2px;\n  cursor: pointer;\n  background: transparent;\n  border-color: transparent;\n  color: transparent;\n}\n.mu-slider input[type=\"range\"]::-ms-thumb {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -ms-appearance: none;\n  appearance: none;\n  border: none;\n  outline: 0;\n  height: 20px;\n  width: 20px;\n  position: relative;\n  opacity: 0;\n  border-radius: 20px;\n  z-index: 2;\n  cursor: pointer;\n}\n.mu-slider-track {\n  position: absolute;\n  height: 2px;\n  left: 0;\n  right: 0;\n  top: 50%;\n  margin-top: -1px;\n  background-color: #bdbdbd;\n}\n.mu-slider-fill {\n  position: absolute;\n  height: 2px;\n  width: 100%;\n  background-color: #03a9f4;\n  left: 0;\n  top: 50%;\n  margin-top: -1px;\n}\n.mu-slider.disabled .mu-slider-fill {\n  background-color: #bdbdbd;\n}\n.mu-slider-thumb {\n  position: absolute;\n  top: 50%;\n  margin-top: -6px;\n  width: 12px;\n  height: 12px;\n  background-color: #03a9f4;\n  color: #03a9f4;\n  border-radius: 50%;\n  transform: translate(-50%, 0);\n  transition: background 450ms cubic-bezier(0.23, 1, 0.32, 1), border-color 450ms cubic-bezier(0.23, 1, 0.32, 1), width 450ms cubic-bezier(0.23, 1, 0.32, 1), height 450ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.mu-slider.active .mu-slider-thumb {\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n}\n.mu-slider.zero .mu-slider-thumb,\n.mu-slider.disabled .mu-slider-thumb {\n  border: 2px solid #bdbdbd;\n  color: #bdbdbd;\n  background-color: #ffffff;\n}\n.mu-slider.zero .mu-slider-thumb .mu-focus-ripple-wrapper,\n.mu-slider.disabled .mu-slider-thumb .mu-focus-ripple-wrapper {\n  top: -14px;\n  left: -14px;\n}\n.mu-slider-thumb .mu-focus-ripple-wrapper {\n  width: 36px;\n  height: 36px;\n  top: -12px;\n  left: -12px;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _focusRipple = __webpack_require__(119);
	
	var _focusRipple2 = _interopRequireDefault(_focusRipple);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'mu-slider',
	  props: {
	    name: {
	      type: String
	    },
	    value: {
	      type: [Number, String],
	      default: 0
	    },
	    max: {
	      type: Number,
	      default: 100
	    },
	    min: {
	      type: Number,
	      default: 0
	    },
	    step: {
	      type: Number,
	      default: 0.1
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    }
	  },
	  data: function data() {
	    return {
	      inputValue: this.value,
	      active: false,
	      hover: false,
	      focus: false
	    };
	  },
	
	  computed: {
	    percent: function percent() {
	      var percentNum = this.inputValue / (this.max - this.min) * 100;
	      return percentNum > 100 ? 100 : percentNum < 0 ? 0 : percentNum;
	    },
	    fillStyle: function fillStyle() {
	      return {
	        width: this.percent + '%'
	      };
	    },
	    thumbStyle: function thumbStyle() {
	      return {
	        left: this.percent + '%'
	      };
	    },
	    sliderClass: function sliderClass() {
	      return {
	        zero: this.inputValue <= 0,
	        active: this.active,
	        disabled: this.disabled
	      };
	    }
	  },
	  methods: {
	    handleMouseDown: function handleMouseDown() {
	      this.active = true;
	    },
	    handleMouseUp: function handleMouseUp() {
	      this.active = false;
	    },
	    handleTouchStart: function handleTouchStart() {
	      this.active = !this.disabled;
	    },
	    handleTouchEnd: function handleTouchEnd() {
	      this.active = false;
	    },
	    handleFocus: function handleFocus() {
	      this.focus = !this.disabled;
	    },
	    handleBlur: function handleBlur() {
	      this.focus = false;
	    },
	    handleMouseEnter: function handleMouseEnter() {
	      this.hover = !this.disabled;
	    },
	    handleMouseLeave: function handleMouseLeave() {
	      this.hover = false;
	    }
	  },
	  watch: {
	    value: function value(val) {
	      this.inputValue = val;
	    },
	    inputValue: function inputValue(val) {
	      this.$emit('input', val);
	      this.$emit('change', val);
	    }
	  },
	  components: {
	    'focus-ripple': _focusRipple2.default
	  }
	}; //
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

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    staticClass: "mu-slider",
	    class: _vm.sliderClass,
	    on: {
	      "mouseenter": _vm.handleMouseEnter,
	      "mouseleave": _vm.handleMouseLeave
	    }
	  }, [_vm._h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.inputValue),
	      expression: "inputValue"
	    }],
	    attrs: {
	      "type": "range",
	      "disabled": _vm.disabled,
	      "name": _vm.name,
	      "step": _vm.step,
	      "min": _vm.min,
	      "max": _vm.max
	    },
	    domProps: {
	      "value": _vm._s(_vm.inputValue)
	    },
	    on: {
	      "mousedown": _vm.handleMouseDown,
	      "mouseup": _vm.handleMouseUp,
	      "touchstart": _vm.handleTouchStart,
	      "touchend": _vm.handleTouchEnd,
	      "focus": _vm.handleFocus,
	      "blur": _vm.handleBlur,
	      "input": function($event) {
	        _vm.inputValue = $event.target.value
	      }
	    }
	  }), " ", _vm._m(0), " ", _vm._h('div', {
	    staticClass: "mu-slider-fill",
	    style: (_vm.fillStyle)
	  }), " ", _vm._h('div', {
	    staticClass: "mu-slider-thumb",
	    style: (_vm.thumbStyle)
	  }, [((_vm.focus || _vm.hover) && !_vm.active) ? _vm._h('focus-ripple') : _vm._e()])])
	},staticRenderFns: [function (){var _vm=this;
	  return _vm._h('div', {
	    staticClass: "mu-slider-track"
	  })
	}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-12013e1e", module.exports)
	  }
	}

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _selectField = __webpack_require__(268);
	
	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_selectField).default;
	  }
	});

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(269)
	
	/* script */
	__vue_exports__ = __webpack_require__(271)
	
	/* template */
	var __vue_template__ = __webpack_require__(297)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\PaintGame\\node_modules\\muse-ui\\src\\selectField\\selectField.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-63e33655", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-63e33655", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] selectField.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(270);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(76)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-63e33655!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./selectField.vue", function() {
				var newContent = require("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-63e33655!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./selectField.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(68)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.mu-select-field .mu-dropDown-menu {\n  display: block;\n  width: 100%;\n  height: 32px;\n}\n.mu-select-field .mu-dropDown-menu-text {\n  line-height: 32px;\n  height: 32px;\n  padding-left: 0px;\n  padding-right: 24px;\n  word-wrap: break-word;\n  overflow: hidden;\n}\n.mu-select-field .mu-dropDown-menu-line {\n  display: none;\n}\n.mu-select-field .mu-dropDown-menu-icon {\n  right: 0;\n  top: 6px;\n}\n", "", {"version":3,"sources":["/./node_modules/muse-ui/src/selectField/selectField.vue"],"names":[],"mappings":";AAAA;EACE,eAAe;EACf,YAAY;EACZ,aAAa;CACd;AACD;EACE,kBAAkB;EAClB,aAAa;EACb,kBAAkB;EAClB,oBAAoB;EACpB,sBAAsB;EACtB,iBAAiB;CAClB;AACD;EACE,cAAc;CACf;AACD;EACE,SAAS;EACT,SAAS;CACV","file":"selectField.vue","sourcesContent":[".mu-select-field .mu-dropDown-menu {\n  display: block;\n  width: 100%;\n  height: 32px;\n}\n.mu-select-field .mu-dropDown-menu-text {\n  line-height: 32px;\n  height: 32px;\n  padding-left: 0px;\n  padding-right: 24px;\n  word-wrap: break-word;\n  overflow: hidden;\n}\n.mu-select-field .mu-dropDown-menu-line {\n  display: none;\n}\n.mu-select-field .mu-dropDown-menu-icon {\n  right: 0;\n  top: 6px;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _textField = __webpack_require__(214);
	
	var _textField2 = _interopRequireDefault(_textField);
	
	var _dropDownMenu = __webpack_require__(272);
	
	var _dropDownMenu2 = _interopRequireDefault(_dropDownMenu);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	
	exports.default = {
	  name: 'mu-select-field',
	  props: {
	    label: {
	      type: String
	    },
	    labelFloat: {
	      type: Boolean,
	      default: false
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    hintText: {
	      type: String
	    },
	    helpText: {
	      type: String
	    },
	    errorText: {
	      type: String
	    },
	    errorColor: {
	      type: String
	    },
	    icon: {
	      type: String
	    },
	    maxHeight: {
	      type: Number
	    },
	    autoWidth: {
	      type: Boolean,
	      default: false
	    },
	    fullWidth: {
	      type: Boolean,
	      default: false
	    },
	    underlineShow: {
	      type: Boolean,
	      default: true
	    },
	    value: {},
	    multiple: {
	      type: Boolean,
	      default: false
	    }
	  },
	  data: function data() {
	    var defaultVal = this.value;
	    if (!defaultVal) defaultVal = '';
	    if (this.multiple && !(defaultVal instanceof Array)) {
	      defaultVal = [];
	    }
	    return {
	      anchorEl: null,
	      inputValue: defaultVal
	    };
	  },
	  mounted: function mounted() {
	    this.anchorEl = this.$children[0].$refs.input;
	  },
	
	  methods: {
	    handlehange: function handlehange(val) {
	      if (this.multiple) {
	        var index = this.inputValue.indexOf(val);
	        if (index === -1) {
	          this.inputValue.push(val);
	        } else {
	          this.inputValue.splice(index, 1);
	        }
	      } else {
	        this.inputValue = val;
	      }
	    },
	    handleOpen: function handleOpen() {
	      this.$refs.textField.handleFocus();
	    },
	    handleClose: function handleClose() {
	      this.$refs.textField.handleBlur();
	    }
	  },
	  watch: {
	    value: function value(val) {
	      this.inputValue = val;
	    },
	    inputValue: function inputValue(val, oldVal) {
	      if (val === oldVal) return;
	      this.$emit('input', val);
	      this.$emit('change', val);
	    }
	  },
	  components: {
	    'text-field': _textField2.default,
	    'dropDown-menu': _dropDownMenu2.default
	  }
	};

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _dropDownMenu = __webpack_require__(273);
	
	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_dropDownMenu).default;
	  }
	});

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(274)
	
	/* script */
	__vue_exports__ = __webpack_require__(276)
	
	/* template */
	var __vue_template__ = __webpack_require__(296)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\PaintGame\\node_modules\\muse-ui\\src\\dropDownMenu\\dropDownMenu.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-158d1591", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-158d1591", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] dropDownMenu.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(275);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(76)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-158d1591!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./dropDownMenu.vue", function() {
				var newContent = require("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-158d1591!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./dropDownMenu.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(68)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.mu-dropDown-menu {\n  display: inline-block;\n  font-size: 15px;\n  height: 48px;\n  position: relative;\n  transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);\n  cursor: pointer;\n  overflow: hidden;\n}\n.mu-dropDown-menu.disabled {\n  color: rgba(0, 0, 0, 0.38);\n  cursor: not-allowed;\n}\n.mu-dropDown-menu-icon {\n  position: absolute;\n  right: 16px;\n  top: 16px;\n  color: rgba(0, 0, 0, 0.12);\n}\n.mu-dropDown-menu-text {\n  padding-left: 24px;\n  padding-right: 48px;\n  line-height: 56px;\n  opacity: 1;\n  position: relative;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mu-dropDown-menu.disabled .mu-dropDown-menu-text {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mu-dropDown-menu-line {\n  bottom: 1px;\n  left: 0px;\n  margin: -1px 24px;\n  right: 0px;\n  position: absolute;\n  height: 1px;\n  background-color: rgba(0, 0, 0, 0.12);\n  transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);\n}\nhtml.pixel-ratio-2 .mu-dropDown-menu-line {\n  -webkit-transform: scaleY(0.5);\n  transform: scaleY(0.5);\n}\nhtml.pixel-ratio-3 .mu-dropDown-menu-line {\n  -webkit-transform: scaleY(0.33);\n  transform: scaleY(0.33);\n}\n", "", {"version":3,"sources":["/./node_modules/muse-ui/src/dropDownMenu/dropDownMenu.vue"],"names":[],"mappings":";AAAA;EACE,sBAAsB;EACtB,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,qDAAqD;EACrD,gBAAgB;EAChB,iBAAiB;CAClB;AACD;EACE,2BAA2B;EAC3B,oBAAoB;CACrB;AACD;EACE,mBAAmB;EACnB,YAAY;EACZ,UAAU;EACV,2BAA2B;CAC5B;AACD;EACE,mBAAmB;EACnB,oBAAoB;EACpB,kBAAkB;EAClB,WAAW;EACX,mBAAmB;EACnB,2BAA2B;CAC5B;AACD;EACE,2BAA2B;CAC5B;AACD;EACE,YAAY;EACZ,UAAU;EACV,kBAAkB;EAClB,WAAW;EACX,mBAAmB;EACnB,YAAY;EACZ,sCAAsC;EACtC,qDAAqD;CACtD;AACD;EACE,+BAA+B;EAC/B,uBAAuB;CACxB;AACD;EACE,gCAAgC;EAChC,wBAAwB;CACzB","file":"dropDownMenu.vue","sourcesContent":[".mu-dropDown-menu {\n  display: inline-block;\n  font-size: 15px;\n  height: 48px;\n  position: relative;\n  transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);\n  cursor: pointer;\n  overflow: hidden;\n}\n.mu-dropDown-menu.disabled {\n  color: rgba(0, 0, 0, 0.38);\n  cursor: not-allowed;\n}\n.mu-dropDown-menu-icon {\n  position: absolute;\n  right: 16px;\n  top: 16px;\n  color: rgba(0, 0, 0, 0.12);\n}\n.mu-dropDown-menu-text {\n  padding-left: 24px;\n  padding-right: 48px;\n  line-height: 56px;\n  opacity: 1;\n  position: relative;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mu-dropDown-menu.disabled .mu-dropDown-menu-text {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mu-dropDown-menu-line {\n  bottom: 1px;\n  left: 0px;\n  margin: -1px 24px;\n  right: 0px;\n  position: absolute;\n  height: 1px;\n  background-color: rgba(0, 0, 0, 0.12);\n  transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);\n}\nhtml.pixel-ratio-2 .mu-dropDown-menu-line {\n  -webkit-transform: scaleY(0.5);\n  transform: scaleY(0.5);\n}\nhtml.pixel-ratio-3 .mu-dropDown-menu-line {\n  -webkit-transform: scaleY(0.33);\n  transform: scaleY(0.33);\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _icon = __webpack_require__(93);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	var _popover = __webpack_require__(277);
	
	var _popover2 = _interopRequireDefault(_popover);
	
	var _menu = __webpack_require__(285);
	
	var _utils = __webpack_require__(98);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	
	exports.default = {
	  name: 'mu-dropDown-menu',
	  props: {
	    value: {},
	    maxHeight: {
	      type: Number
	    },
	    autoWidth: {
	      type: Boolean,
	      default: false
	    },
	    multiple: {
	      type: Boolean,
	      default: false
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    labelClass: {
	      type: [String, Array, Object]
	    },
	    menuClass: {
	      type: [String, Array, Object]
	    },
	    underlineClass: {
	      type: [String, Array, Object]
	    },
	    iconClass: {
	      type: [String, Array, Object]
	    },
	    openImmediately: {
	      type: Boolean,
	      default: false
	    },
	    anchorOrigin: {
	      type: Object,
	      default: function _default() {
	        return {
	          vertical: 'top',
	          horizontal: 'left'
	        };
	      }
	    },
	    anchorEl: {
	      type: window.Element
	    }
	  },
	  data: function data() {
	    return {
	      openMenu: false,
	      trigger: null,
	      menuWidth: null
	    };
	  },
	
	  computed: {
	    label: function label() {
	      return this.getText();
	    }
	  },
	  mounted: function mounted() {
	    this.trigger = this.anchorEl || this.$el;
	    this.openMenu = this.openImmediately;
	    this.menuWidth = this.$el.offsetWidth;
	  },
	
	  methods: {
	    handleClose: function handleClose() {
	      this.$emit('close');
	      this.openMenu = false;
	    },
	    handleOpen: function handleOpen() {
	      this.$emit('open');
	      this.openMenu = true;
	    },
	    itemClick: function itemClick() {
	      if (!this.multiple) this.handleClose();
	    },
	    change: function change(value) {
	      this.$emit('change', value);
	    },
	    getText: function getText() {
	      var _this = this;
	
	      if (!this.$slots || !this.$slots.default || this.$slots.length === 0 || (0, _utils.isNull)(this.value)) return '';
	      var text = [];
	      this.$slots.default.forEach(function (vNode) {
	        if (!vNode.componentOptions || !vNode.componentOptions.propsData || (0, _utils.isNull)(vNode.componentOptions.propsData.value)) return;
	        var _vNode$componentOptio = vNode.componentOptions.propsData,
	            value = _vNode$componentOptio.value,
	            title = _vNode$componentOptio.title;
	
	        if (value === _this.value || _this.multiple && _this.value.length && _this.value.indexOf(value) !== -1) {
	          text.push(title);
	          return false;
	        }
	      });
	      return text.join(',');
	    }
	  },
	  watch: {
	    anchorEl: function anchorEl(val) {
	      if (val) this.trigger = val;
	    }
	  },
	  components: {
	    icon: _icon2.default,
	    popover: _popover2.default,
	    'mu-menu': _menu.menu
	  }
	};

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _popover = __webpack_require__(278);
	
	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_popover).default;
	  }
	});

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(279)
	
	/* script */
	__vue_exports__ = __webpack_require__(281)
	
	/* template */
	var __vue_template__ = __webpack_require__(284)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\PaintGame\\node_modules\\muse-ui\\src\\popover\\popover.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-e563de3a", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-e563de3a", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] popover.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(280);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(76)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-e563de3a!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./popover.vue", function() {
				var newContent = require("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-e563de3a!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./popover.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(68)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.mu-popover {\n  position: fixed;\n  background: #ffffff;\n  border-radius: 2px;\n  max-height: 100%;\n  overflow: visible;\n  -webkit-overflow-scrolling: touch;\n  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;\n  transform-origin: center top;\n}\n.mu-popover-enter-active,\n.mu-popover-leave-active {\n  transition-duration: 300ms;\n  transition-property: opacity, transform;\n}\n.mu-popover-enter,\n.mu-popover-leave-active {\n  transform: scaleY(0);\n  opacity: 0;\n}\n", "", {"version":3,"sources":["/./node_modules/muse-ui/src/popover/popover.vue"],"names":[],"mappings":";AAAA;EACE,gBAAgB;EAChB,oBAAoB;EACpB,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;EAClB,kCAAkC;EAClC,qFAAqF;EACrF,6BAA6B;CAC9B;AACD;;EAEE,2BAA2B;EAC3B,wCAAwC;CACzC;AACD;;EAEE,qBAAqB;EACrB,WAAW;CACZ","file":"popover.vue","sourcesContent":[".mu-popover {\n  position: fixed;\n  background: #ffffff;\n  border-radius: 2px;\n  max-height: 100%;\n  overflow: visible;\n  -webkit-overflow-scrolling: touch;\n  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;\n  transform-origin: center top;\n}\n.mu-popover-enter-active,\n.mu-popover-leave-active {\n  transition-duration: 300ms;\n  transition-property: opacity, transform;\n}\n.mu-popover-enter,\n.mu-popover-leave-active {\n  transform: scaleY(0);\n  opacity: 0;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
	//
	//
	//
	//
	//
	//
	//
	
	var _popup = __webpack_require__(282);
	
	var _popup2 = _interopRequireDefault(_popup);
	
	var _clickoutside = __webpack_require__(196);
	
	var _clickoutside2 = _interopRequireDefault(_clickoutside);
	
	var _scroll = __webpack_require__(283);
	
	var _scroll2 = _interopRequireDefault(_scroll);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'mu-popover',
	  mixins: [_popup2.default, _scroll2.default],
	  props: {
	    overlay: {
	      default: false
	    },
	    overlayOpacity: {
	      default: 0.01
	    },
	    trigger: {
	      type: window.Element
	    },
	    autoPosition: {
	      type: Boolean,
	      default: true
	    },
	    anchorOrigin: {
	      type: Object,
	      default: function _default() {
	        return {
	          vertical: 'bottom',
	          horizontal: 'left'
	        };
	      }
	    },
	    targetOrigin: {
	      type: Object,
	      default: function _default() {
	        return {
	          vertical: 'top',
	          horizontal: 'left'
	        };
	      }
	    }
	  },
	  methods: {
	    getAnchorPosition: function getAnchorPosition(el) {
	      var rect = el.getBoundingClientRect();
	      var a = {
	        top: rect.top,
	        left: rect.left,
	        width: el.offsetWidth,
	        height: el.offsetHeight
	      };
	
	      a.right = rect.right || a.left + a.width;
	      a.bottom = rect.bottom || a.top + a.height;
	      a.middle = a.left + (a.right - a.left) / 2;
	      a.center = a.top + (a.bottom - a.top) / 2;
	
	      return a;
	    },
	    getTargetPosition: function getTargetPosition(targetEl) {
	      return {
	        top: 0,
	        center: targetEl.offsetHeight / 2,
	        bottom: targetEl.offsetHeight,
	        left: 0,
	        middle: targetEl.offsetWidth / 2,
	        right: targetEl.offsetWidth
	      };
	    },
	    getElInfo: function getElInfo(el) {
	      var box = el.getBoundingClientRect();
	      return {
	        left: box.left,
	        top: box.top,
	        width: el.offsetWidth,
	        height: el.offsetHeight
	      };
	    },
	    setStyle: function setStyle() {
	      var targetOrigin = this.targetOrigin,
	          anchorOrigin = this.anchorOrigin;
	
	
	      var anchor = this.getAnchorPosition(this.trigger);
	      var target = this.getTargetPosition(this.$el);
	
	      var targetPosition = {
	        top: anchor[anchorOrigin.vertical] - target[targetOrigin.vertical],
	        left: anchor[anchorOrigin.horizontal] - target[targetOrigin.horizontal]
	      };
	      if (anchor.top < 0 || anchor.top > window.innerHeight || anchor.left < 0 || anchor.left > window.innerWidth) {
	        this.close('overflow');
	        return;
	      }
	      if (this.autoPosition) {
	        target = this.getTargetPosition(this.$el); // update as height may have changed
	        targetPosition = this.applyAutoPositionIfNeeded(anchor, target, targetOrigin, anchorOrigin, targetPosition);
	      }
	      this.$el.style.left = Math.max(0, targetPosition.left) + 'px';
	      this.$el.style.top = Math.max(0, targetPosition.top) + 'px';
	    },
	    getOverlapMode: function getOverlapMode(anchor, target, median) {
	      if ([anchor, target].indexOf(median) >= 0) return 'auto';
	      if (anchor === target) return 'inclusive';
	      return 'exclusive';
	    },
	    getPositions: function getPositions(anchor, target) {
	      var a = _extends({}, anchor);
	      var t = _extends({}, target);
	
	      var positions = {
	        x: ['left', 'right'].filter(function (p) {
	          return p !== t.horizontal;
	        }),
	        y: ['top', 'bottom'].filter(function (p) {
	          return p !== t.vertical;
	        })
	      };
	
	      var overlap = {
	        x: this.getOverlapMode(a.horizontal, t.horizontal, 'middle'),
	        y: this.getOverlapMode(a.vertical, t.vertical, 'center')
	      };
	
	      positions.x.splice(overlap.x === 'auto' ? 0 : 1, 0, 'middle');
	      positions.y.splice(overlap.y === 'auto' ? 0 : 1, 0, 'center');
	
	      if (overlap.y !== 'auto') {
	        a.vertical = a.vertical === 'top' ? 'bottom' : 'top';
	        if (overlap.y === 'inclusive') {
	          t.vertical = t.vertical;
	        }
	      }
	
	      if (overlap.x !== 'auto') {
	        a.horizontal = a.horizontal === 'left' ? 'right' : 'left';
	        if (overlap.y === 'inclusive') {
	          t.horizontal = t.horizontal;
	        }
	      }
	
	      return {
	        positions: positions,
	        anchorPos: a
	      };
	    },
	    applyAutoPositionIfNeeded: function applyAutoPositionIfNeeded(anchor, target, targetOrigin, anchorOrigin, targetPosition) {
	      var _getPositions = this.getPositions(anchorOrigin, targetOrigin),
	          positions = _getPositions.positions,
	          anchorPos = _getPositions.anchorPos;
	
	      if (targetPosition.top < 0 || targetPosition.top + target.bottom > window.innerHeight) {
	        var newTop = anchor[anchorPos.vertical] - target[positions.y[0]];
	        if (newTop + target.bottom <= window.innerHeight) {
	          targetPosition.top = Math.max(0, newTop);
	        } else {
	          newTop = anchor[anchorPos.vertical] - target[positions.y[1]];
	          if (newTop + target.bottom <= window.innerHeight) targetPosition.top = Math.max(0, newTop);
	        }
	      }
	      if (targetPosition.left < 0 || targetPosition.left + target.right > window.innerWidth) {
	        var newLeft = anchor[anchorPos.horizontal] - target[positions.x[0]];
	        if (newLeft + target.right <= window.innerWidth) {
	          targetPosition.left = Math.max(0, newLeft);
	        } else {
	          newLeft = anchor[anchorPos.horizontal] - target[positions.x[1]];
	          if (newLeft + target.right <= window.innerWidth) targetPosition.left = Math.max(0, newLeft);
	        }
	      }
	      return targetPosition;
	    },
	    close: function close(reason) {
	      this.$emit('close', reason);
	    },
	    overlayClick: function overlayClick() {
	      this.close('overlay');
	    },
	    clickOutSide: function clickOutSide() {
	      this.close('clickOutSide');
	    },
	    onScroll: function onScroll() {
	      this.setStyle();
	    },
	    escPress: function escPress() {
	      this.close('esc');
	    }
	  },
	  mounted: function mounted() {
	    this.setStyle();
	  },
	  updated: function updated() {
	    this.setStyle();
	  },
	
	  directives: {
	    clickoutside: _clickoutside2.default
	  }
	};

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _manager = __webpack_require__(153);
	
	var _manager2 = _interopRequireDefault(_manager);
	
	var _utils = __webpack_require__(159);
	
	var _keycode = __webpack_require__(124);
	
	var _keycode2 = _interopRequireDefault(_keycode);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	exports.default = {
	  props: {
	    overlay: {
	      type: Boolean,
	      default: true
	    },
	    overlayOpacity: {
	      type: Number,
	      default: 0.4
	    },
	    overlayColor: {
	      type: String,
	      default: '#000'
	    }
	  },
	  methods: {
	    overlayClick: function overlayClick() {
	      this.$emit('overlayClick');
	    },
	    setZIndex: function setZIndex() {
	      var dom = this.$el;
	      if (!this.zIndex) this.zIndex = (0, _utils.getZIndex)();
	      if (dom) dom.style.zIndex = this.zIndex;
	    }
	  },
	  mounted: function mounted() {
	    var _this = this;
	
	    if (this.overlay) {
	      _manager2.default.open(this);
	    } else {
	      this.setZIndex();
	    }
	    window.addEventListener('keydown', function (event) {
	      if ((0, _keycode2.default)(event) === 'esc' && _this && _this.escPress) _this.escPress();
	    });
	  },
	  updated: function updated() {
	    if (!this.overlay) {
	      this.setZIndex();
	    }
	  },
	  beforeDestroy: function beforeDestroy() {
	    _manager2.default.close(this);
	  }
	};

/***/ },
/* 283 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    scroller: {
	      type: [window.HTMLDocument, window.Element, window.Window],
	      default: function _default() {
	        return window;
	      }
	    }
	  },
	  mounted: function mounted() {
	    this.$bindScroll();
	  },
	
	  methods: {
	    $bindScroll: function $bindScroll() {
	      var _this = this;
	
	      if (!this.scroller) return;
	      this._handleScroll = function (e) {
	        if (_this.onScroll) _this.onScroll();
	      };
	      this.scroller.addEventListener('scroll', this._handleScroll);
	    },
	    $unbindScroll: function $unbindScroll(scroller) {
	      scroller = scroller || this.scroller;
	      if (this._handleScroll) scroller.removeEventListener('scroll', this._handleScroll);
	    }
	  },
	  beforeDestroy: function beforeDestroy() {
	    this.$unbindScroll();
	  },
	
	  watch: {
	    scroller: function scroller(_scroller, oldScroller) {
	      if (_scroller === oldScroller) return;
	      this.$unbindScroll(oldScroller);
	      this.$bindScroll(_scroller);
	    }
	  }
	};

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('transition', {
	    attrs: {
	      "name": "mu-popover"
	    }
	  }, [_vm._h('div', {
	    directives: [{
	      name: "clickoutside",
	      rawName: "v-clickoutside",
	      value: (_vm.clickOutSide),
	      expression: "clickOutSide"
	    }],
	    staticClass: "mu-popover"
	  }, [_vm._t("default")])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-e563de3a", module.exports)
	  }
	}

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _menu = __webpack_require__(286);
	
	Object.defineProperty(exports, 'menu', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_menu).default;
	  }
	});
	
	var _menuItem = __webpack_require__(291);
	
	Object.defineProperty(exports, 'menuItem', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_menuItem).default;
	  }
	});

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(287)
	
	/* script */
	__vue_exports__ = __webpack_require__(289)
	
	/* template */
	var __vue_template__ = __webpack_require__(290)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\PaintGame\\node_modules\\muse-ui\\src\\menu\\menu.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-598f1e1e", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-598f1e1e", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] menu.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(288);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(76)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-598f1e1e!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./menu.vue", function() {
				var newContent = require("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-598f1e1e!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./menu.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(68)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.mu-menu {\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n  z-index: 90;\n  outline: none;\n}\n.mu-menu-list {\n  padding: 8px 0;\n  -webkit-user-select: none;\n}\n.mu-menu-list > .mu-divider {\n  margin: 7px 0px 8px;\n}\n.mu-menu-list > .mu-sub-header {\n  padding-left: 24px;\n  margin-top: -8px;\n}\n.mu-menu-destop {\n  padding: 16px 0;\n}\n.mu-menu-destop > .mu-sub-header {\n  margin-top: -16px;\n}\n", "", {"version":3,"sources":["/./node_modules/muse-ui/src/menu/menu.vue"],"names":[],"mappings":";AAAA;EACE,mBAAmB;EACnB,iBAAiB;EACjB,kCAAkC;EAClC,YAAY;EACZ,cAAc;CACf;AACD;EACE,eAAe;EACf,0BAA0B;CAC3B;AACD;EACE,oBAAoB;CACrB;AACD;EACE,mBAAmB;EACnB,iBAAiB;CAClB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,kBAAkB;CACnB","file":"menu.vue","sourcesContent":[".mu-menu {\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n  z-index: 90;\n  outline: none;\n}\n.mu-menu-list {\n  padding: 8px 0;\n  -webkit-user-select: none;\n}\n.mu-menu-list > .mu-divider {\n  margin: 7px 0px 8px;\n}\n.mu-menu-list > .mu-sub-header {\n  padding-left: 24px;\n  margin-top: -8px;\n}\n.mu-menu-destop {\n  padding: 16px 0;\n}\n.mu-menu-destop > .mu-sub-header {\n  margin-top: -16px;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(98);
	
	var _keycode = __webpack_require__(124);
	
	var _keycode2 = _interopRequireDefault(_keycode);
	
	var _clickoutside = __webpack_require__(196);
	
	var _clickoutside2 = _interopRequireDefault(_clickoutside);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'mu-menu',
	  props: {
	    desktop: {
	      type: Boolean,
	      default: false
	    },
	    multiple: {
	      type: Boolean,
	      default: false
	    },
	    autoWidth: {
	      type: Boolean,
	      default: true
	    },
	    width: {
	      type: [String, Number]
	    },
	    maxHeight: {
	      type: Number
	    },
	    disableAutoFocus: {
	      type: Boolean,
	      default: false
	    },
	    initiallyKeyboardFocused: {
	      type: Boolean,
	      default: false
	    },
	    // 内部使用，是否是嵌套菜单
	    nested: {
	      type: Boolean,
	      default: false
	    },
	    value: {}
	  },
	  data: function data() {
	    return {
	      focusIndex: -1,
	      isKeyboardFocused: false
	    };
	  },
	
	  computed: {
	    keyWidth: function keyWidth() {
	      return this.desktop ? 64 : 56;
	    },
	    contentWidth: function contentWidth() {
	      return this.autoWidth ? '' : (0, _utils.getWidth)(this.width);
	    }
	  },
	  mounted: function mounted() {
	    if (this.autoWidth) this.setWidth();
	    this.setScollPosition();
	    var selectedIndex = this.getSelectedIndex();
	    this.focusIndex = this.disableAutoFocus ? -1 : selectedIndex >= 0 ? selectedIndex : this.initiallyKeyboardFocused ? 0 : -1;
	    this.isKeyboardFocused = this.initiallyKeyboardFocused;
	    if (this.nested) this.$el.focus();
	  },
	  beforeUpdate: function beforeUpdate() {
	    var selectedIndex = this.getSelectedIndex();
	    this.focusIndex = this.disableAutoFocus ? -1 : selectedIndex >= 0 ? selectedIndex : 0;
	  },
	  updated: function updated() {
	    if (this.autoWidth) this.setWidth();
	  },
	
	  methods: {
	    clickoutside: function clickoutside() {
	      this.setFocusIndex(-1, false);
	    },
	    setWidth: function setWidth() {
	      var el = this.$el;
	      var listEl = this.$refs.list;
	      var elWidth = el.offsetWidth;
	      var keyWidth = this.keyWidth;
	      var minWidth = keyWidth * 1.5;
	      var keyIncrements = elWidth / keyWidth;
	      var newWidth = void 0;
	
	      keyIncrements = keyIncrements <= 1.5 ? 1.5 : Math.ceil(keyIncrements);
	      newWidth = keyIncrements * keyWidth;
	
	      if (newWidth < minWidth) newWidth = minWidth;
	
	      el.style.width = newWidth + 'px';
	      listEl.style.width = newWidth + 'px';
	    },
	    handleChange: function handleChange(value) {
	      this.$emit('change', value);
	    },
	    handleClick: function handleClick(item) {
	      this.$emit('itemClick', item);
	    },
	    handleKeydown: function handleKeydown(event) {
	      var key = (0, _keycode2.default)(event);
	      switch (key) {
	        case 'down':
	          event.stopPropagation(); // 防止菜单嵌套
	          event.preventDefault();
	          this.incrementKeyboardFocusIndex();
	          break;
	        case 'tab':
	          event.stopPropagation();
	          event.preventDefault();
	          if (event.shiftKey) {
	            this.decrementKeyboardFocusIndex();
	          } else {
	            this.incrementKeyboardFocusIndex();
	          }
	          break;
	        case 'up':
	          event.stopPropagation();
	          event.preventDefault();
	          this.decrementKeyboardFocusIndex();
	          break;
	      }
	    },
	    decrementKeyboardFocusIndex: function decrementKeyboardFocusIndex() {
	      var index = this.focusIndex;
	      var maxIndex = this.getMenuItemCount() - 1;
	      index--;
	      if (index < 0) index = maxIndex;
	      this.setFocusIndex(index, true);
	    },
	    incrementKeyboardFocusIndex: function incrementKeyboardFocusIndex() {
	      var index = this.focusIndex;
	      var maxIndex = this.getMenuItemCount() - 1;
	      index++;
	      if (index > maxIndex) index = 0;
	      this.setFocusIndex(index, true);
	    },
	    getMenuItemCount: function getMenuItemCount() {
	      var menuItemCount = 0;
	      this.$children.forEach(function (child) {
	        if (child._isMenuItem && !child.disabled) menuItemCount++;
	      });
	      return menuItemCount;
	    },
	    getSelectedIndex: function getSelectedIndex() {
	      var selectedIndex = -1;
	      var menuItemIndex = 0;
	
	      this.$children.forEach(function (child) {
	        if (child.active) selectedIndex = menuItemIndex;
	        if (child._isMenuItem && !child.disabled) menuItemIndex++;
	      });
	
	      return selectedIndex;
	    },
	    setFocusIndex: function setFocusIndex(newIndex, isKeyboardFocused) {
	      this.focusIndex = newIndex;
	      this.isKeyboardFocused = isKeyboardFocused;
	    },
	    setScollPosition: function setScollPosition() {
	      var desktop = this.desktop;
	      var focusedMenuItem = this.focusedMenuItem;
	      var menuItemHeight = desktop ? 32 : 48;
	
	      if (focusedMenuItem) {
	        var selectedOffSet = focusedMenuItem.$el.offsetTop;
	        // Make the focused item be the 2nd item in the list the user sees
	        var scrollTop = selectedOffSet - menuItemHeight;
	        if (scrollTop < menuItemHeight) scrollTop = 0;
	
	        this.$el.scrollTop = scrollTop;
	      }
	    }
	  },
	  watch: {
	    focusIndex: function focusIndex(newVal, oldVal) {
	      var _this = this;
	
	      if (newVal === oldVal) return;
	      var menuItemIndex = 0;
	      this.$children.forEach(function (child) {
	        if (!child._isMenuItem || child.disabled) return;
	        var isFocused = menuItemIndex === newVal;
	        var focusState = 'none';
	        if (isFocused) {
	          focusState = _this.isKeyboardFocused ? 'keyboard-focused' : 'focused';
	        }
	        child.focusState = focusState;
	        menuItemIndex++;
	      });
	    }
	  },
	  directives: {
	    clickoutside: _clickoutside2.default
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    directives: [{
	      name: "clickoutside",
	      rawName: "v-clickoutside",
	      value: (_vm.clickoutside),
	      expression: "clickoutside"
	    }],
	    staticClass: "mu-menu",
	    style: ({
	      'width': _vm.contentWidth,
	      'maxHeight': _vm.maxHeight + 'px'
	    }),
	    attrs: {
	      "tabindex": "0"
	    },
	    on: {
	      "keydown": _vm.handleKeydown
	    }
	  }, [_vm._h('div', {
	    ref: "list",
	    staticClass: "mu-menu-list",
	    class: {
	      'mu-menu-destop': _vm.desktop
	    },
	    style: ({
	      'width': _vm.contentWidth
	    })
	  }, [_vm._t("default")])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-598f1e1e", module.exports)
	  }
	}

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(292)
	
	/* script */
	__vue_exports__ = __webpack_require__(294)
	
	/* template */
	var __vue_template__ = __webpack_require__(295)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\PaintGame\\node_modules\\muse-ui\\src\\menu\\menuItem.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1ef1ba24", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-1ef1ba24", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] menuItem.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(293);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(76)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-1ef1ba24!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./menuItem.vue", function() {
				var newContent = require("!!./../../../css-loader/index.js?sourceMap!./../../../vue-loader/lib/style-rewriter.js?id=data-v-1ef1ba24!./../../../less-loader/index.js!./../../../vue-loader/lib/selector.js?type=styles&index=0!./menuItem.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(68)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.mu-menu-item-wrapper {\n  font-size: 16px;\n  height: 48px;\n  line-height: 48px;\n  transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);\n  color: rgba(0, 0, 0, 0.87);\n  position: relative;\n  cursor: pointer;\n}\n.mu-menu-destop .mu-menu-item-wrapper {\n  height: 32px;\n  line-height: 32px;\n  font-size: 15px;\n}\n.mu-menu-item-wrapper.hover {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.mu-menu-item-wrapper.active {\n  color: #ff4081;\n}\n.mu-menu-item-wrapper.disabled {\n  color: rgba(0, 0, 0, 0.38);\n  cursor: not-allowed;\n}\n.mu-menu-item {\n  padding: 0px 16px;\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.mu-menu-destop .mu-menu-item {\n  padding: 0 24px;\n}\n.mu-menu-item.have-left-icon {\n  padding-left: 72px;\n}\n.mu-menu-item-left-icon {\n  position: absolute;\n  top: 0;\n  left: 4px;\n  margin: 12px;\n  color: #757575;\n}\n.mu-menu-destop .mu-menu-item-left-icon {\n  top: 4px;\n  left: 24px;\n  margin: 0;\n}\n.mu-menu-item-right-icon {\n  position: absolute;\n  top: 0;\n  right: 4px;\n  margin: 12px;\n  color: #757575;\n}\n.mu-menu-destop .mu-menu-item-right-icon {\n  top: 4px;\n  right: 24px;\n  margin: 0;\n}\n", "", {"version":3,"sources":["/./node_modules/muse-ui/src/menu/menuItem.vue"],"names":[],"mappings":";AAAA;EACE,gBAAgB;EAChB,aAAa;EACb,kBAAkB;EAClB,qDAAqD;EACrD,2BAA2B;EAC3B,mBAAmB;EACnB,gBAAgB;CACjB;AACD;EACE,aAAa;EACb,kBAAkB;EAClB,gBAAgB;CACjB;AACD;EACE,qCAAqC;CACtC;AACD;EACE,eAAe;CAChB;AACD;EACE,2BAA2B;EAC3B,oBAAoB;CACrB;AACD;EACE,kBAAkB;EAClB,mBAAmB;EACnB,cAAc;EACd,+BAA+B;EAC/B,oBAAoB;CACrB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,mBAAmB;EACnB,OAAO;EACP,UAAU;EACV,aAAa;EACb,eAAe;CAChB;AACD;EACE,SAAS;EACT,WAAW;EACX,UAAU;CACX;AACD;EACE,mBAAmB;EACnB,OAAO;EACP,WAAW;EACX,aAAa;EACb,eAAe;CAChB;AACD;EACE,SAAS;EACT,YAAY;EACZ,UAAU;CACX","file":"menuItem.vue","sourcesContent":[".mu-menu-item-wrapper {\n  font-size: 16px;\n  height: 48px;\n  line-height: 48px;\n  transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);\n  color: rgba(0, 0, 0, 0.87);\n  position: relative;\n  cursor: pointer;\n}\n.mu-menu-destop .mu-menu-item-wrapper {\n  height: 32px;\n  line-height: 32px;\n  font-size: 15px;\n}\n.mu-menu-item-wrapper.hover {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.mu-menu-item-wrapper.active {\n  color: #ff4081;\n}\n.mu-menu-item-wrapper.disabled {\n  color: rgba(0, 0, 0, 0.38);\n  cursor: not-allowed;\n}\n.mu-menu-item {\n  padding: 0px 16px;\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.mu-menu-destop .mu-menu-item {\n  padding: 0 24px;\n}\n.mu-menu-item.have-left-icon {\n  padding-left: 72px;\n}\n.mu-menu-item-left-icon {\n  position: absolute;\n  top: 0;\n  left: 4px;\n  margin: 12px;\n  color: #757575;\n}\n.mu-menu-destop .mu-menu-item-left-icon {\n  top: 4px;\n  left: 24px;\n  margin: 0;\n}\n.mu-menu-item-right-icon {\n  position: absolute;\n  top: 0;\n  right: 4px;\n  margin: 12px;\n  color: #757575;\n}\n.mu-menu-destop .mu-menu-item-right-icon {\n  top: 4px;\n  right: 24px;\n  margin: 0;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _abstractButton = __webpack_require__(107);
	
	var _abstractButton2 = _interopRequireDefault(_abstractButton);
	
	var _icon = __webpack_require__(93);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	var _utils = __webpack_require__(98);
	
	var _popover = __webpack_require__(277);
	
	var _popover2 = _interopRequireDefault(_popover);
	
	var _menu = __webpack_require__(286);
	
	var _menu2 = _interopRequireDefault(_menu);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'mu-menu-item',
	  props: {
	    href: {
	      type: String
	    },
	    target: {
	      type: String
	    },
	    title: {
	      type: String
	    },
	    afterText: {
	      type: String
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    disableFocusRipple: {
	      type: Boolean,
	      default: false
	    },
	    inset: {
	      type: Boolean,
	      default: false
	    },
	    leftIcon: {
	      type: String
	    },
	    leftIconColor: {
	      type: String
	    },
	    rightIconColor: {
	      type: String
	    },
	    rightIcon: {
	      type: String
	    },
	    value: {},
	    nestedMenuValue: {}
	  },
	  computed: {
	    showAfterText: function showAfterText() {
	      return !this.rightIcon && this.afterText && (!this.$slot || !this.$slot.after || this.$slot.after.length === 0);
	    },
	    active: function active() {
	      return (0, _utils.isNotNull)(this.$parent.value) && (0, _utils.isNotNull)(this.value) && (this.$parent.value === this.value || this.$parent.multiple && this.$parent.value.indexOf(this.value) !== -1);
	    }
	  },
	  data: function data() {
	    this._isMenuItem = true;
	    return {
	      openMenu: false,
	      trigger: null,
	      focusState: 'none' // 'none', 'focused', 'keyboard-focused'
	    };
	  },
	  mounted: function mounted() {
	    this.trigger = this.$el;
	    this.applyFocusState();
	  },
	
	  methods: {
	    handleClick: function handleClick(e) {
	      this.$emit('click', e);
	      this.$parent.handleClick(this);
	      this.open();
	      if ((0, _utils.isNotNull)(this.value)) this.$parent.handleChange(this.value);
	    },
	    filterColor: function filterColor(color) {
	      return (0, _utils.getColor)(color);
	    },
	    open: function open() {
	      this.openMenu = this.$slots && this.$slots.default && this.$slots.default.length > 0;
	    },
	    close: function close() {
	      this.openMenu = false;
	    },
	    handleKeyboardFocus: function handleKeyboardFocus(isFocus) {
	      this.$emit('keyboardFocus', isFocus);
	    },
	    handleHover: function handleHover(event) {
	      this.$emit('hover', event);
	    },
	    handleHoverExit: function handleHoverExit(event) {
	      this.$emit('hoverExit', event);
	    },
	    applyFocusState: function applyFocusState() {
	      var button = this.$refs.button;
	      if (button) {
	        var buttonEl = button.$el;
	
	        switch (this.focusState) {
	          case 'none':
	            buttonEl.blur();
	            break;
	          case 'focused':
	            buttonEl.focus();
	            break;
	          case 'keyboard-focused':
	            button.setKeyboardFocus();
	            buttonEl.focus();
	            break;
	        }
	      }
	    }
	  },
	  watch: {
	    focusState: function focusState() {
	      this.applyFocusState();
	    }
	  },
	  components: {
	    'abstract-button': _abstractButton2.default,
	    icon: _icon2.default,
	    popover: _popover2.default,
	    'mu-menu': _menu2.default
	  }
	}; //
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

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', [_vm._h('abstract-button', {
	    ref: "button",
	    staticClass: "mu-menu-item-wrapper",
	    class: {
	      'active': _vm.active
	    },
	    attrs: {
	      "href": _vm.href,
	      "target": _vm.target,
	      "centerRipple": false,
	      "disableFocusRipple": _vm.disableFocusRipple,
	      "disabled": _vm.disabled,
	      "containerElement": "div"
	    },
	    on: {
	      "click": _vm.handleClick,
	      "keyboardFocus": _vm.handleKeyboardFocus,
	      "hover": _vm.handleHover,
	      "hoverExit": _vm.handleHoverExit
	    }
	  }, [_vm._h('div', {
	    staticClass: "mu-menu-item",
	    class: {
	      'have-left-icon': _vm.leftIcon || _vm.inset
	    }
	  }, [_vm._h('icon', {
	    staticClass: "mu-menu-item-left-icon",
	    style: ({
	      'color': _vm.filterColor(_vm.leftIconColor)
	    }),
	    domProps: {
	      "value": _vm.leftIcon
	    }
	  }), " ", _vm._h('div', [_vm._t("title", ["\n           " + _vm._s(_vm.title) + "\n         "])]), " ", (!_vm.rightIcon) ? _vm._h('div', [(_vm.showAfterText) ? _vm._h('span', [_vm._s(_vm.afterText)]) : _vm._e(), " ", _vm._t("after")]) : _vm._e(), " ", _vm._h('icon', {
	    staticClass: "mu-menu-item-right-icon",
	    style: ({
	      'color': _vm.filterColor(_vm.rightIconColor)
	    }),
	    domProps: {
	      "value": _vm.rightIcon
	    }
	  })])]), " ", (_vm.openMenu) ? _vm._h('popover', {
	    attrs: {
	      "anchorOrigin": {
	        vertical: 'top',
	        horizontal: 'right'
	      },
	      "trigger": _vm.trigger
	    },
	    on: {
	      "close": _vm.close
	    }
	  }, [_vm._h('mu-menu', {
	    attrs: {
	      "desktop": _vm.$parent.desktop,
	      "nested": "",
	      "maxHeight": _vm.$parent.maxHeight
	    },
	    domProps: {
	      "value": _vm.nestedMenuValue
	    }
	  }, [_vm._t("default")])]) : _vm._e()])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-1ef1ba24", module.exports)
	  }
	}

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    staticClass: "mu-dropDown-menu",
	    class: {
	      'disabled': _vm.disabled
	    }
	  }, [_vm._h('icon', {
	    staticClass: "mu-dropDown-menu-icon",
	    class: _vm.iconClass,
	    attrs: {
	      "value": "arrow_drop_down"
	    }
	  }), " ", _vm._h('div', {
	    staticClass: "mu-dropDown-menu-text",
	    class: _vm.labelClass,
	    on: {
	      "click": _vm.handleOpen
	    }
	  }, ["\n    " + _vm._s(_vm.label) + "\n  "]), " ", _vm._h('div', {
	    staticClass: "mu-dropDown-menu-line",
	    class: _vm.underlineClass
	  }), " ", (!_vm.disabled && _vm.openMenu && _vm.$slots && _vm.$slots.default && _vm.$slots.default.length > 0) ? _vm._h('popover', {
	    attrs: {
	      "trigger": _vm.trigger,
	      "anchorOrigin": _vm.anchorOrigin
	    },
	    on: {
	      "close": _vm.handleClose
	    }
	  }, [_vm._h('mu-menu', {
	    class: _vm.menuClass,
	    style: ({
	      width: _vm.menuWidth + 'px'
	    }),
	    attrs: {
	      "multiple": _vm.multiple,
	      "autoWidth": _vm.autoWidth,
	      "desktop": "",
	      "maxHeight": _vm.maxHeight
	    },
	    domProps: {
	      "value": _vm.value
	    },
	    on: {
	      "change": _vm.change,
	      "itemClick": _vm.itemClick
	    }
	  }, [_vm._t("default")])]) : _vm._e()])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-158d1591", module.exports)
	  }
	}

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('text-field', {
	    ref: "textField",
	    staticClass: "mu-select-field",
	    attrs: {
	      "underlineShow": _vm.underlineShow,
	      "labelFloat": _vm.labelFloat,
	      "hintText": _vm.hintText,
	      "fullWidth": _vm.fullWidth,
	      "helpText": _vm.helpText,
	      "icon": _vm.icon,
	      "disabled": _vm.disabled,
	      "errorText": _vm.errorText,
	      "errorColor": _vm.errorColor,
	      "label": _vm.label
	    },
	    domProps: {
	      "value": _vm.inputValue instanceof Array ? _vm.inputValue.join('') : _vm.inputValue
	    }
	  }, [_vm._h('dropDown-menu', {
	    attrs: {
	      "anchorEl": _vm.anchorEl,
	      "disabled": _vm.disabled,
	      "maxHeight": _vm.maxHeight,
	      "autoWidth": _vm.autoWidth,
	      "multiple": _vm.multiple,
	      "anchorOrigin": {
	        vertical: 'bottom',
	        horizontal: 'left'
	      }
	    },
	    domProps: {
	      "value": _vm.inputValue
	    },
	    on: {
	      "open": _vm.handleOpen,
	      "close": _vm.handleClose,
	      "change": _vm.handlehange
	    }
	  }, [_vm._t("default")])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-63e33655", module.exports)
	  }
	}

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map