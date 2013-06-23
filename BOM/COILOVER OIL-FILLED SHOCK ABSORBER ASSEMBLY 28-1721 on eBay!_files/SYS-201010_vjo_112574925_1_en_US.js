
(function(){var _1=1.5,_bOldSupport=typeof(vjo)=="object";if(_bOldSupport&&vjo._v==_1){return;}
var _2={};var _3=(typeof window!="undefined")?window:this,wv=_3.vjo;if(!wv||!wv._v||wv._v<_1){_3.vjo=_2;}
var _4={};var _5=this;var _6=[];_extend(_2,{_v:1.5,loader:{async:true,load:function(){}},isArray:function(_7){if(!_7){return false;}
return(_7.constructor==Array||(typeof _7=="object"&&_7.join&&_7.splice));},getType:function(_8,_9){if(!_8){return;}
_8=_getTypeName(_8);var _a=_8.lastIndexOf("$")+1,dot=_8.lastIndexOf(".")+1,idx=_a||dot,cn=idx?_8.substring(idx):_8,_8=_a?(_8.substring(0,_a-1)+"."+cn):_8,obj=_4[_8];if(!_9&&!obj){_2.loader.load(_8);obj=_4[_8];}
if(obj){return obj.pkg[cn];}
return;},mixin:function(_b,_c){var _d=this.getType(_b);if(_d){if(_d.vj$&&_d.vj$._vjType==="mtype"){if(_d._props){throw"cannot mixin static props to an instance";}
_extend(_c,_d._protos);}}},hitch:function(_e,fn,_10){if(!_isFn(fn)){var _11=fn;fn=_e;_e=_11;}
return function(){return fn.apply((_10&&this!=window)?this:_e,arguments);};},curry:function(fn){var _13=Array.prototype.slice;var _14=_13.call(arguments,1);return function(){return fn.apply(this,_14.concat(_13.apply(arguments)));};},bind:function(ctx,fn){if(typeof fn=="string"){fn=ctx[fn];}
var _17=Array.prototype.slice;var _18=_17.call(arguments,2);return function(){return fn.apply(ctx,_18.concat(_17.apply(arguments)));};},create:function(_19,_1a){var _1b=document.createElement(_19);_1b.tagName=="TEXTAREA"?_1b.value=_1a:_1b.innerHTML=_1a;return _1b;},make:function(_1c,clz){var a=arguments,len=a.length,tp=(_isFn(clz)&&clz.vj$)?clz:this.getType(clz),_vjo={};if(len<2||!tp){throw"context and valid type are required";}
_forEach(_1c.vj$,function(val,key){if(_isFn(val)&&val.vj$&&val.vj$._vjType){this[key]=val;}},_vjo);var _21;var _22=Array.prototype.slice.call(a,2,len);return{protos:function(obj){_21=obj;return this;},endType:function(){var t=_2.ctype(),clztype=tp.vj$._vjType,rv;if(clztype==="itype"){t.satisfies(tp);}else{if(clztype==="ctype"||clztype==="atype"){var _25=_TypeMeta.get(tp);if(_25&&!_25._completed){_25.complete();}
t.inherits(_2.getType(tp.vj$._class));}else{throw"incompatible anonomyous type";}}
t.protos(_21);t.complete();t=t.endType();rv=_Type.createNoConstruct(t);rv.vj$=t.vj$;_extend(rv.vj$,_vjo);(function(){if(this.base){this.base.apply(this,arguments);}}).apply(rv,_22);if(rv.base&&rv._getBase){var fn=function(){};fn.prototype=rv._getBase();rv.base=new fn;rv.base._parent=rv;}
rv.vj$.parent=tp._outer||_1c;rv.vj$.outer=tp._outer;if(_21&&_21.constructs){_21.constructs.apply(rv);}
return rv;}};},needs:function(clz,_28){if(!clz){return;}
var _29=_createPkg(clz),cls=_29.className,tp=_29.pkg[cls];this.getType(clz);},createArray:function(val,_2b){var arr=[];if(arguments.length>1){for(var ii=0;ii<_2b;ii++){if(arguments.length>2){var tmp=[val];for(var k=2;k<arguments.length;k++){tmp[tmp.length]=arguments[k];}
arr[ii]=_2.createArray.apply(this,tmp);}else{arr[ii]=val;}}}
return arr;},isInstanceOf:function(_30,_31){if(_30===null){return false;}
var _32=_isVjoType(_31);if(!_32||(_32&&_31.vj$._vjType!="itype")){return _30 instanceof _31;}
if(!_30.vj$){return false;}
if(_isInstanceForInterface(_30.getClass(),_31)){return true;}
var id=_30.getClass().getName(),meta;for(;;){meta=_TypeMeta.get(id);if(meta){var ihs=meta._inherits;if(ihs.length==1&&_2.getType(ihs[0])){id=ihs[0];if(_isInstanceForInterface(_2.getType(ihs[0]).clazz,_31)){return true;}}else{break;}}else{break;}}
return false;},meta:{_list:{},load:function(_35,_36){this._list[_35+"__rtti"]=_36;},get:function(_37){return this._list[_37+"__rtti"];},has:function(_38){return(this._list[_38+"__rtti"]?true:false);}}});_2.NEEDS_IMPL=function(){throw"needs implementation";};_2.Object=function(){this.vj$={_class:"vjo.Object",_vjType:"ctype",Object:_2.Object,_meta:{}};};_2.Object.prototype={_hashCode:-1,constructs:function(){},getClass:_getClazz,hashCode:function(){if(this._hashCode==-1){this._hashCode=++_2.Object._hashCounter;}
return this._hashCode;},equals:function(o){return(this===o);},toString:function(){return this.getClass().getName()+"@"+this.hashCode().toString(16);}};_extend(_2.Object,{vj$:{_class:"vjo.Object",_vjType:"ctype",Object:_2.Object,_meta:{}},_hashCounter:0,isInstance:function(o){return _2.isInstanceOf(o,this);}});_2.Class=function(clz,typ){this._name=clz,this._type=typ||"ctype",this._satisfied=[];this.vj$={_class:"vjo.Class",_vjType:"ctype",Class:_2.Class,_meta:{}};};_2.Class.prototype=new _2.Object();_extend(_2.Class.prototype,{getName:function(){var n=this._name;if(n){return n;}
return null;},getSimpleName:function(){var n=this.getName();var idx=n.lastIndexOf(".");if(idx!=-1){n=n.substring(idx+1);if(n){idx=n.lastIndexOf("$");if(idx>0){n=n.substring(idx+1);}}}
return n;},getPackageName:function(){var n=this.getName();if(n!=null){var i=n.lastIndexOf(".");if(i>=0){return n.substring(0,i);}}
return"";},isInterface:function(){return(this._type==="itype");},isInstance:function(obj){var tp=_2.getType(this.getName());if(tp){return _2.isInstanceOf(obj,tp);}
return false;},toString:function(){return(this.isInterface()?"interface ":"class ")+this.getName();},getClass:_getClazz,_rtti:null,_metaloaded:false,getMeta:function(){if(this._rtti==null){var err="Metadata Not Available Exception";if(this._metaloaded){throw err;}else{var _45=_2.meta.get(this._name);if(_45){this._rtti=new _2.TypeMetadata(_45());this._metaloaded=true;}else{throw err;}}}
return this._rtti;},getConstructors:function(){return this.getMeta().getConstructors();},getFields:function(){return this.getMeta().getFields();},getDeclaredFields:function(){return this.getMeta().getDeclaredFields();},getMethods:function(){return this.getMeta().getMethods();},getDeclaredMethods:function(){return this.getMeta().getDeclaredMethods();},getModifiers:function(){return this.getMeta().getModifiers();},getAnnotations:function(){return this.getMeta().getAnnotations();},getInterfaces:function(){return this.getMeta().getInterfaces();},getVjoType:function(){return _2.getType(this.getName());}});_extend(_2.Class,{create:function(nm,typ){if(!nm){return new _2.Class(nm,typ?typ:"ctype");}
if(!_6[nm]){_6[nm]=new _2.Class(nm,typ?typ:"ctype");}
return _6[nm];}});_extend(_2.Class,{forName:function(clz){try{var o=eval(clz);if(o&&o.clazz){return o.clazz;}}
catch(e){}
throw"Type not found for '"+clz+"'";},isInstance:function(o){return _2.isInstanceOf(o,_2.Class);},clazz:_2.Class.create("vjo.Class")});_2.Object.clazz=_2.Class.create("vjo.Object");_2.obj=function(_4b,_4c){if(!_4b){throw"Invalid type name";}
if(!_4c){return null;}
var _4d,err="Invalid type '"+_4b+"'.";try{_4d=eval(_4b);}
catch(e){throw err;}
if(!_4d){return err;}
var o=new _4d();for(var i in _4c){o[i]=_4c[i];}
return o;};_2.findType=function(_51,_52){var _53=_51;for(;;){if(_53.clazz.meta!=null&&_53.clazz.meta[_52]!=null){return _53.clazz.meta[_52];}
if(_53==_51.prototype.constructor){return;}else{_53=_51.prototype.constructor;}}};var _54=(function(){var _55={};var _56={};var _57={};var _58=[];var _59={};var _5a={};function _addType(clz){if(!_55[clz]){_55[clz]=[];}}
function _execInners(clz){var ins=_59[clz];if(ins){var len=ins.length;for(var i=0;i<len;i++){var _60=ins[i];if(_60){_60.complete();}}}
_59[clz]=null;}
function _processNeeds(clz){var n=_57[clz];if(n){while(n.length>0){n.pop()();}
_57[clz]=null;}}
function _pushDep(clz,_64,_65){var arr=_55[clz];_64.push(clz);_65[clz]=true;if(!arr||arr.length===0){return;}
var len=arr.length,i=0;for(;i<len;i++){var key=arr[i];if(!_65[key]){_pushDep(key,_64,_65);}}
return;}
function _canCompleteInternal(clz,_6a,_6b){var arr=_55[_6a];if(!arr||arr.length===0){return true;}
var len=arr.length,i=0;for(;i<len;i++){var key=arr[i];if(!_2.loader.async){if(key===clz){return false;}}else{if(!_2.getType(key)){return false;}}
if(!_6b[key]){_6b[key]=true;if(!_canCompleteInternal(clz,key,_6b)){return false;}}}
return true;}
function _canComplete(clz){var aD=_55[clz];if(aD){var len=aD.length;if(_2.loader.async){return _canCompleteInternal(clz,clz,{});}else{var stk=_58,len2=stk.length;for(var i=0;i<len;i++){var dep=aD[i];for(var j=0;j<len2;j++){if(stk[j]===dep){return false;}}}
if(len2>0){return _canCompleteInternal(clz,clz,{});}}}
return true;}
function _complete(_76){_processNeeds(_76);if(_56[_76]){_56[_76].complete();_56[_76]=null;}
_execInners(_76);_5a[_76]=true;}
return{addDep:function(clz,dep){if(!clz){return;}
_addType(clz);var aD=_55[clz];aD[aD.length]=dep;if(!_2.loader.async){var stk=_58;if(stk.length==0){stk.push(clz);}
if(stk[stk.length-1]===clz){stk.push(dep);}}},popDep:function(clz,dep){if(_2.loader.async){return;}
var stk=_58;if(stk[stk.length-1]===dep){stk.pop();}},addInner:function(clz,fn){if(!_59[clz]){_59[clz]=[];}
var ins=_59[clz];ins.push(fn);},deferNeed:function(clz,fn){var n=_57;if(!n[clz]){n[clz]=[];}
n[clz].push(fn);},register:function(clz,fn){_56[clz]=fn;},load:function(clz){if(!clz||_5a[clz]){return false;}
var _87=_55[clz];if(!_2.loader.async){var stk=_58,len=stk.length;if(len>0&&stk[len-1]===clz){stk.pop();}}
if(_87&&_canComplete(clz)){var stk=[];_pushDep(clz,stk,{});while(stk.length>0){_complete(stk.pop());}}
if(!_87||_87.length==0){_complete(clz);}
return true;}};})();var _89={create:function(clz,isI){isI=isI||false;if(!_isValidClz(clz)){throw"Invalid type name '"+clz+"'";}
var _8c=function(){var _8d=_TypeMeta.get(_8c.vj$._meta._metaId),bConstruct=!_8c.__donotconstruct;if(_89.shouldAutoConstruct(this,_8c,_8d)){var b=_89.createNoConstruct(_8c),rv=_89.construct(b,arguments);return rv||b;}
this.constructor=_8c;if(_8d&&!_8d._completed){_8d.complete();_forEach(_8c.prototype,function(val,key,_91){this[key]=val;},this);}
this.vj$=_8c.vj$;var t=this.vj$._vjType;if(bConstruct&&(t=="itype"||t=="atype"||t=="mtype")){throw t+" "+this.vj$._class+" cannot be instantiated";}
_89.processInners(this,_8c.vj$,_8c.clazz);if(bConstruct){var val=_89.construct(this,arguments);if(val){return val;}}
return null;};_8c._name="base";_8c.vj$={_class:clz,_meta:{}};_8c.isInstance=function(o){return _2.isInstanceOf(o,this);};return _8c;},shouldAutoConstruct:function(ctx,_96,_97){return(!(ctx instanceof _96)&&!_96.__donotconstruct&&_97&&_97._options.autoConstruct);},createNoConstruct:function(_98){_98.__donotconstruct=true;var rv=new _98();delete _98.__donotconstruct;return rv;},needs:function(clz,_9b){if(!clz||this.vj$._meta._isInner){return this;}
var _9c=[],useAlias=false;if(typeof clz=="string"){_9c=[clz];useAlias=(_9b)?true:false;}else{if(_2.isArray(clz)){_9c=clz;}else{return this;}}
_forEach(_9c,function(val,key,obj){var cl=val,pObj=_4[val],idx=cl.lastIndexOf("."),cn=(idx>-1)?cl.substring(idx+1):cl,tp=(pObj)?pObj.pkg[cn]:null;_54.addDep(this.vj$._class,cl);if(!tp){tp=_2.getType(cl);}
_54.popDep(this.vj$._class,cl);_89.addToNameSpace(this,tp,cl,cn,_9b,useAlias);},this);return this;},addToNameSpace:function(ctx,_a2,_a3,_a4,_a5,_a6){if(_2.isInstanceOf(_a2,_MType)||_a5===""){return;}
if(_a2){var nm=(_a6)?_a5:_a4,err=false;if(ctx.vj$[nm]&&ctx.vj$[nm]!==_a2){if(_bOldSupport){err=true;}else{throw"Name collision with type '"+nm+"' in need list.";}}
if(!err){ctx.vj$[nm]=_a2;}}else{_54.deferNeed(ctx.vj$._class,_2.curry(function(_a8,_a9,ctx){var tp=_2.getType(_a9);if(!tp||_2.isInstanceOf(tp,_MType)){return;}
if(ctx.vj$[_a8]&&ctx.vj$[_a8]!==tp){throw"Name collision with "+nm+"in need list.";}
ctx.vj$[_a8]=tp;},(_a6)?_a5:_a4,_a3,ctx));}},props:function(obj,_ad){_forEach(obj,function(val,key,obj){if(!_isValidProp(key)){return;}
var o=this[key]=val;if(_89.addInner(this,o,"s_inners",key)){if(this.vj$[key]){throw"'"+key+"' in type '"+this.vj$._class+"' conflicts with needed type name";}
var _v=_createVjNS(this.vj$,key,o);o.vj$=_v;if(!this.vj$._meta._isInner){_54.addInner(this.vj$._class,_TypeMeta.get(o));var rt=this.vj$._class;_89.updateInners(rt,rt+"."+key,o,true);}}else{if(_isFn(o)&&!o._name&&!o.vj$){o._name=key;}}},this);if(obj.toString!=Object.prototype.toString){this.toString=obj.toString;}
return this;},protos:function(obj,_b5){if(!obj){return;}
_forEach(obj,function(val,key,obj){if(key==="base"){return;}
var _b9=this.prototype[key],isType=_isVjoType(val);if(_89.isValidProto(key,val,_b9)&&!isType){this.prototype[key]=_2.curry(function(fn,_bb){var _bc=this.base,error=false,rv,out=this.vj$.outer;_89.setBase(this,_bb);try{rv=_89.execRealFn(fn,Array.prototype.slice.call(arguments,2),this,_bb,out);}
catch(e){error=e;}
this.base=_bc;if(error){throw error;}
return rv;},val,this);}else{if(isType&&!this.vj$._meta._isInner){_54.addInner(this.vj$._class,_TypeMeta.get(val));var rt=this.vj$._class;_89.updateInners(rt,rt+"."+key,val,false);}
this.prototype[key]=val;}
if(!_89.addInner(this,val,"_inners",key)){if(_isFn(val)&&!val._name&&!isType){val._name=key;}}else{if(this.vj$[key]){throw"'"+key+"' in type '"+this.vj$._class+"' conflicts with needed type name";}}},this);if(obj.toString!=Object.prototype.toString){this.prototype.toString=obj.toString;}
return this;},isValidProto:function(key,val,_c0){return(_isFn(_c0)&&key.indexOf("constructs")!=0&&(key.indexOf("_ovld")===-1||key.indexOf("_ovld")!=(key.length-5))&&!_isVjoType(_c0)&&_isFn(val));},satisfies:function(_c1,_c2){var _c3=[];if(_2.isArray(_c1)){_c3=_c1;}else{_c3=[_c1];}
_forEach(_c3,function(val,key,obj){var cl=_getTypeName(val),_c1;if(_isVjoType(cl)){_c1=cl;var clz=_c1.vj$._class||"",idx=clz.lastIndexOf("."),cn=(idx>-1)?clz.substring(idx+1):clz;if(cn){this.vj$[cn]=_c1;}}
var _c9=(_c1)?_c1:_2.getType(cl);if(_c9){if(!_c2){this.clazz._satisfied.push(_c9);}
for(var i in _c9){var val=_c9[i];if(_isValidProp(i)&&!this[i]){this[i]=val;}}}},this);return this;},inherits:function(_cb,isB){_cb=_getTypeName(_cb);if(!isB&&!_isValidInh(_cb)){throw"Cannot inherit from '"+_cb+"'";}
var _cd=("vjo.Object"===_cb);if(!isB&&_cd){return this;}
var _ce;if(_isVjoType(_cb)){_ce=_cb;var clz=_ce.vj$._class||"",idx=clz.lastIndexOf("."),cn=(idx>-1)?clz.substring(idx+1):clz;if(cn){this.vj$[cn]=_ce;}}else{_ce=(_cd)?_2.Object:this.vj$[_cb]||_2.getType(_cb);}
if(_isVjoType(_ce)){var _d0=_TypeMeta.get(_ce);if(_d0){_d0.complete();}
_89.createInherits(this,_ce);}
return this;},setBase:function(ctx,_d2){ctx.base=(_d2.prototype._getBase)?_d2.prototype._getBase():null;if(ctx.base){ctx.base._parent=ctx;}},createInherits:function(_d3,_d4){var _d5=_d4.prototype,cls=_89.createNoConstruct(_d4);cls.constructs=null;cls.constructor=_d3;var _d6={};if(!(_d4.vj$._class=="vjo.Object")){_d6.vj$=_d4.vj$;}
if(_d5._getBase&&_d5._getBase()._constructs){_d6._constructs=true;}
cls.base=function(){var _d7=this.base,_d5=_d4.prototype,gb=_d5._getBase,c=_d5.constructs;if(_d5.base){this.base=_d5.base;}
var _d8=(c)?c.toString():"",b=(_d8.indexOf("this.base(")===-1&&_d8.indexOf("this.constructs")===-1);if(gb&&gb()._constructs&&b){this.base();}
if(_d5.constructs){var _d9=this.vj$._meta._isInner;try{_89.execRealFn(_d5.constructs,arguments,this,_d4,_d9);}
catch(e){throw e;}}
this.base=_d7;};cls._getBase=function(){return _d6;};function createBaseRef(_da,fn,der){return _2.curry(function(_dd,fn,der){var scp=(this._parent)?this._parent:this,rv,error=false,cbase=scp.base;_89.setBase(scp,_dd);try{rv=_89.execRealFn(fn,Array.prototype.slice.call(arguments,3),scp,_dd);}
catch(e){error=e;}
scp.base=cbase;if(error){throw error;}
return rv;},_da,fn,der);}
function hasBaseCall(fn,key){var _e3=fn.toString();return(_e3.indexOf("this.base."+key+"(")!=-1);}
var vO=_2.Object,vOP=vO.prototype,bIsO=(vOP===_d5);for(var i in _d5){var pt=_d5[i],bFn=_isFn(pt);if(i==="toString"){continue;}
if(i==="constructs"&&bFn){if(_d4!==vO&&pt.length===0){_d6._constructs=true;}}else{if(_d5==vOP||_isValidInst(i)){if(bFn&&!(_2.isInstanceOf(pt,RegExp))&&!pt.vj$&&(bIsO||vOP[i]!==pt)){_d6[i]=createBaseRef(_d4,pt,_d3);if(!pt.__isChained){var _e7=pt.toString();cls[i]=hasBaseCall(pt,i)?_2.curry(function(fn){return fn.apply(this,Array.prototype.slice.call(arguments,1));},_d6[i]):_2.curry(function(_e9,fn){try{if(this.vj$._vjType==="etype"){return _89.execRealFn(fn,Array.prototype.slice.call(arguments,2),this,_e9,true);}else{return _89.execRealFn(fn,Array.prototype.slice.call(arguments,2),this,_e9);}}
catch(e){throw e;}},_d4,pt);cls[i].__isChained=true;}}else{if(_isVjoType(pt)&&pt.vj$._meta._isInner){var _eb=_d3.vj$._meta;if(!_eb._inners){_eb._inners={};}
_eb._inners[i]=pt;}
cls[i]=pt;}}}}
if(_d6.toString!=_2.Object.prototype.toString){_d6.toString=createBaseRef(_d4,_d5.toString,_d3);}
_d3.prototype=cls;},updateInners:function(_ec,_ed,_ee,_ef){if(_ee&&_ee.vj$){var vj=_ee.vj$,clz=_ee.clazz;vj._class=_ed;var idx=_ed.lastIndexOf("."),snm=_ed.substring(idx+1);vj[snm]=_ee;if(clz&&_ec){if(_ed.indexOf(_ec)==0){var tmp=_ed.replace(_ec,"");while(tmp.indexOf(".")>-1){tmp=tmp.replace(".","$");}
clz._name=_ec+tmp;}else{clz._name=_ec+"$"+snm;}}
_createPkg(_ed,true).pkg[snm]=_ee;var ins=(_ef)?vj._meta.s_inners:vj._meta._inners;if(ins){_forEach(ins,function(val,key){_forEach(vj,function(val,key){if(!this[key]&&val&&val.vj$){this[key]=val;}},val.vj$);var m=_TypeMeta.get(val.vj$._meta._metaId);if(val.vj$&&m){_54.addInner(_ec,m);}
_89.updateInners(_ec,_ed+"."+key,val,_ef);});}}},addInner:function(clz,_fa,_fb,key){if(!clz||!_fa||!key){return false;}
var vj=_fa.vj$;if(_isVjoType(_fa)&&vj._meta._isInner){var cvj=clz.vj$;if(!vj._class&&cvj._class){var cn=vj._class=cvj._class+"."+key;if(_fa.clazz){_fa.clazz._name=cn;_6[cn]=_fa.clazz;}
_createPkg(cn,true).pkg[key]=_fa;}
if(_fb){if(!cvj._meta[_fb]){cvj._meta[_fb]={};}
cvj._meta[_fb][key]=_fa;}
return true;}
return false;},execRealFn:function(fn,args,ctx,base,_104){var _105=false,rv,t={vj$:ctx.vj$};if(!_104){_fixScope((ctx.base&&ctx.base.vj$&&base.vj$._class==ctx.base.vj$._class)?ctx.base:base,ctx);}
try{rv=fn.apply(ctx,args);}
catch(e){_105=e;}
if(!_104){_fixScope(t,ctx);}
if(_105){throw _105;}
return rv;},createClazz:function(typ){var old=typ.clazz,nm=typ.vj$._class;if(typ.clazz&&typ.clazz._name){nm=typ.clazz._name;}
typ.clazz=_2.Class.create(nm,typ.vj$._vjType);if(old){typ.clazz._satisfied=old._satisfied;}
if(typ.prototype){typ.prototype.getClass=_getClazz;}else{typ.getClass=_getClazz;}
typ.vj$.type=typ;},construct:function(ctx,args){function callBase(ctx){var str=ctx.constructs.toString();return ctx.base&&str.indexOf("this.base(")===-1&&str.indexOf("this.constructs")===-1;}
var bC=true;if(!ctx.constructs){ctx.constructs=function(){};bC=false;}
var fn,rv,c=ctx.constructs,dconstruct=false;if(ctx.base&&ctx._getBase){fn=function(){};fn.prototype=ctx._getBase();dconstruct=fn.prototype._constructs||false;}
if(dconstruct&&callBase(ctx)){ctx.base();}
if(bC){rv=c.apply(ctx,args);}
if(fn){ctx.base=new fn;ctx.base._parent=ctx;}
if(rv){return rv;}},processInners:function(_110,_111,_112){var _113=(_111)?_111._meta._inners:null;if(!_111||!_113||_113.length==0||!_110){return;}
for(var k in _113){_110[k]=_2.curry(function(t,type,nm){var cn=t.vj$._class+"."+nm;var m=_TypeMeta.get(type.vj$._meta._metaId);if(m){m.complete();}
var tp=_89.createNoConstruct(type);var _v=_createVjNS(_111,nm,type);tp.vj$=_v;tp.vj$.outer=t;_89.processInners(tp,_v,type.clazz);type.vj$._class=tp.vj$._class=cn;var s=type.prototype;if(type.clazz&&!type.clazz._name){type.clazz._name=tp.vj$._class;_6[cn]=type.clazz;}else{_89.createClazz(type);}
_89.construct(tp,Array.prototype.slice.call(arguments,3));if(tp.vj$.outer&&tp.base.vj$){var _v=_createVjNS(tp.vj$);_extend(_v,tp.base.vj$);tp.base.vj$=_v;}
return tp;},_110,_113[k],k);_110[k]._outer=_110;_110[k].vj$=_113[k].vj$;}}};var _11d=(typeof console!="undefined");_extend(_2,{sysout:{print:function(){if(_11d){console.info.apply(this,arguments);}},println:function(){if(_11d){console.info.apply(this,arguments);}},printStackTrace:function(){}},syserr:{print:function(){if(_11d){console.warn.apply(this,arguments);}},println:function(){if(_11d){console.warn.apply(this,arguments);}},printStackTrace:function(){}},jsunit:{assertEquals:function(){},assertTrue:function(){},assertFalse:function(){},assertNotNull:function(){}}});function _TypeMeta(name,kind,cfg){this._needs=[];this._props=null;this._protos=null;this._satisfies=[];this._mixins=[];this._inherits=[];this._inits=null;this._expects=[];this._completed=(kind==="type")?true:false;this._isInner=(name)?false:true;this._name=name;this._kind=kind;this._options={autoConstruct:true};this.init(cfg);this.setup();}
_TypeMeta.prototype={init:function(cfg){this._cfg={satisfiesFn:_89.satisfies,inheritsFn:_89.inherits,protosFn:_89.protos,postDefFn:function(){},typeDef:null,baseType:"vjo.Object"};if(cfg){_extend(this._cfg,cfg);}},setup:function(){var t=this._type=this._cfg.typeDef||_89.create(this._name,"itype"===this._kind);t.vj$._vjType=this._kind||"ctype";var id=this._name;if(this._isInner){id=_TypeMeta.id();t.vj$._meta._isInner=true;}else{var pObj=_createPkg(id);if(!pObj.pkg[pObj.className]){pObj.pkg[pObj.className]=this._type;}
t.vj$[pObj.className]=t;_54.register(id,this);}
this._isDup=(!this._isInner&&_TypeMeta.get(id)!=null);if(!this._isDup){_TypeMeta.put(this,id);}
t._inherits=null;_89.createClazz(t);t.vj$._meta._metaId=id;},needs:function(need,_126){_89.needs.apply(this._type,arguments);return this;},singleton:function(){return this;},options:function(opts){if(opts){for(var k in opts){this._options[k]=opts[k];}}
return this;},makeFinal:function(){return this;},satisfies:function(type){var clzs=[];if(_2.isArray(type)){clzs=type;}else{clzs=[type];}
_forEach(clzs,function(val,key,obj){var _12e=_getTypeName(val);this.needs(_12e);_89.needs.call(this._type,_12e);this._satisfies.push(val);},this);return this;},props:function(_12f){if(this._props){throw"multiple props blocks are not allowed";}
this._props=_12f;_89.props.apply(this._type,arguments);return this;},protos:function(_130){if(this._protos){throw"multiple protos blocks are not allowed";}
this._protos=_130;return this;},inherits:function(type){var clzs=[];if(_2.isArray(type)){clzs=type;}else{clzs=[type];}
_forEach(clzs,function(val,key,obj){var _136=_getTypeName(val);this.needs(_136);this._inherits.push(val);},this);return this;},mixin:function(type){var clzs=[];if(_2.isArray(type)){clzs=type;}else{clzs=[type];}
_forEach(clzs,function(val,key,obj){var _13c=_getTypeName(val);this.needs(_13c);this._mixins.push(val);},this);return this;},inits:function(fn){this._inits=fn;return this;},validateAndMerge:function(_13e,_13f){var p=(_13f)?_13e[_13f]:_13e;return function(val,key,obj){if(p[key]){throw"collision when mixing in '"+key+"' into "+this._name;}else{p[key]=val;}};},mergeMixins:function(_144){var mxns=this._mixins;for(var i=0;i<mxns.length;i++){var m=_2.getType(mxns[i]);if(!m||!m.vj$||m.vj$._vjType!="mtype"){throw mxns[i]+"is not a valid mtype.";}
var exp=m._expects;sats=m._satisfiers;if(!this._protos){this._protos={};}
if(!this._props){this._props={};}
_copyNS(m.vj$,this._type.vj$);var nm=m.vj$._class,idx=nm.lastIndexOf(".");var clz=(idx!=-1)?nm.substring(idx+1):nm;if(!this._type.vj$[clz]){this._type.vj$[clz]=this._type;}else{throw clz+" is already defined in the current namespace";}
_forEach(m._protos,this.validateAndMerge(this,"_protos"),this);_forEach(m._props,this.validateAndMerge(_144,"_props"),this);for(var j=0;j<sats.length;j++){this._satisfies.push(sats[i]);}
if(exp){this._expects.push(exp);}}},completeSatisfies:function(){if(this._satisfies.length>0){this._cfg.satisfiesFn.call(this._type,this._satisfies);}
if(this._expects.length>0){this._cfg.satisfiesFn.call(this._type,this._expects,true);}},completeInherits:function(){var ilen=this._inherits.length;if(ilen>0){if(this._kind!="itype"&&ilen>1){throw"type can only inherit from one type";}
for(var i=0;i<ilen;i++){this._cfg.inheritsFn.call(this._type,this._inherits[i]);}}else{if(this._kind!="itype"){this._cfg.inheritsFn.call(this._type,this._cfg.baseType,true);}}
if(ilen==0){var _14e=this._protos||{};_forEach(["hashCode","equals","getClass"],function(val){if(!_14e[val]){this[val]=_2.Object.prototype[val];}},this._type.prototype);}},completeDef:function(){if(this._protos){this._cfg.protosFn.call(this._type,this._protos);}
if(!this._type.prototype.constructs){this._type.prototype.constructs=function(){};}
this._cfg.postDefFn.call(this);if(this._inits&&!this._isDup){this._inits.call(this._type);}},complete:function(){if(this._completed){return this;}
this._completed=true;_updateInnerEtypes(this._type.vj$);var p={_props:{}};this.mergeMixins(p);_89.props.call(this._type,p._props);this.completeSatisfies();this.completeInherits();this.completeDef();return this;},typesAvail:function(list){for(var i=0;i<list.length;i++){if(!_isVjoType(list[i])){return false;}}
return true;},canComplete:function(){var b=(this._inits==null)&&this.typesAvail(this._inherits);if(b){b=this.typesAvail(this._satisfies);}
if(b){b=this.typesAvail(this._mixins);}
return b;},endType:function(){if(!this._isInner){_54.load(this._name);if(_2.validateType){_2.validateType(this._type);}}else{if(this.canComplete()){this.complete();}}
return this._type;}};_extend(_TypeMeta,{_count:0,_pre:"tmp",_reg:{},id:function(){return this._pre+this._count++;},put:function(meta,id){var nm=(id)?id:this._pre+this._count++;this._reg[nm]=meta;},get:function(type){var _158;if(_isVjoType(type)){return this._reg[type.vj$._meta._metaId];}else{if(_158=_2.getType(type)){return this._reg[_158.vj$._meta._metaId];}else{return this._reg[type];}}}});_2.ctype=function(clz){clz=_getTypeName(clz);var t=new _TypeMeta(clz);return t;};_2.type=function(clz){clz=_getTypeName(clz);var t=new _TypeMeta(clz,"type");t.inits=function(fn){if(fn&&!this._isDup){fn.call(this._type);}
return this;};t.props=function(_15e){_89.props.apply(this._type,arguments);return this;};t.protos=function(_15f){_89.protos.apply(this._type,arguments);return this;};t.inherits=function(clz){_89.inherits.apply(this._type,arguments);return this;};t.satisfies=function(clz){_89.satisfies.apply(this._type,arguments);return this;};return t;};_2.itype=function(clz){clz=_getTypeName(clz);var t=new _TypeMeta(clz,"itype",{inheritsFn:function(_164){var type=(this.vj$[_164])?this.vj$[_164]:(this.vj$.b&&this.vj$.b[_164])?this.vj$.b[_164]:_2.getType(_164);if(type){for(var i in type){var val=type[i];if(_isValidProp(i)&&!this[i]){this[i]=val;}}}
return this;}});t._type.isInstance=function(obj){return _2.isInstanceOf(obj,this);};return t;};_2.atype=_2.ctype;function _MType(clz){function _addMixinMethods(to,_16b,ns){if(!_16b||typeof _16b!="object"){return;}
var b=true;for(var i in _16b){b=false;if(!reservedMProp[i]){to[i]=_16b[i];}}
return b;}
var t=this;t.vj$={_vjType:"mtype",_class:clz,_meta:{}};t._props=null;t._protos={};t._expects="";t._satisfiers=[];t.needs=function(){return _89.needs.apply(this,arguments);};t.props=function(_170){var p=this._props||{};if(!_addMixinMethods(p,_170,this.vj$)){if(!this._props){this._props=p;}}
return this;};t.protos=function(_172){if(_172&&_172["constructs"]){throw"mtype cannot have constructs block";}
_addMixinMethods(this._protos,_172,this.vj$);return this;};t.expects=function(clz){this._expects=_2.getType(clz);return this;};t.satisfies=function(clz){var clzs=[];if(_2.isArray(clz)){clzs=clz;}else{clzs=[clz];}
_forEach(clzs,function(val,key,obj){var _179=_getTypeName(val);this.needs(_179);this._satisfiers.push(val);},this);return this;};t.endType=function(){if(this.vj$._class){_54.load(this.vj$._class);}
return this;};return t;}
_2.mtype=function(clz){clz=_getTypeName(clz);var base=new _MType(clz);if(!clz||_isInnerClass(clz)){base.vj$._meta._isInner=true;}
if(!clz){return base;}
var pObj=_createPkg(clz);return(pObj.pkg[pObj.className])?base:(pObj.pkg[pObj.className]=base);};_2.etype=function(clz){clz=_getTypeName(clz);_createEnum();var eDef=function(args){this.vj$=eDef.vj$;if(args!=false){if(!this.constructs){throw"'"+this.vj$._class+"' cannot be instantiated";}
var rv=this.constructs.apply(this,args);}};eDef.vj$={_class:clz,_vjType:"etype",_meta:{}};eDef.isInstance=function(o){return _2.isInstanceOf(o,this);};var t=new _TypeMeta(clz,"etype",{typeDef:eDef,baseType:"vjo.Enum",postDefFn:function(){this._type.prototype.toString=_2.Enum.prototype.name;if(this._eVals){this._type.values.call(this._type,this._eVals);}}});_extend(t,{inherits:function(){throw"Invalid type definition. etype cannot be inheritted from another type";},values:function(vals){this._eVals=vals;return this;}});var en=t._type;en._enums=[];en.from=_2.Enum.from;en._nativeValueOf=en.valueOf;en.valueOf=_2.Enum.from;en.values=function(vals){if(arguments.length==0){if(this._enums.slice){return this._enums.slice();}else{var a=[];for(var i=0;i<this._enums.length;i++){if(this._enums[i]){a[i]=this._enums[i];}}
return a;}}else{var ord=0;if(typeof vals=="string"&&vals.length>0){while(vals.indexOf(" ")>-1){vals=vals.replace(" ","");}
if(vals.indexOf(",")>0){var a=vals.split(","),t;if(a[0]&&a[0].indexOf(":")>0){throw"Invalid labels for etype values: "+a[0];}
for(var i=0,l=a.length;i<l;i++){var eV=a[i];if(i==0&&t&&t.length>0){eV=t[0];}else{if(a[i].indexOf(":")>-1){eV=a[i].split(":")[0];}}
this._enums[this._enums.length]=new en(false);this._enums[this._enums.length-1]._name=eV;}}else{this._enums[0]=new en(false);this._enums[0]._name=vals;}}else{for(var itm in vals){this._enums[this._enums.length]=new en(vals[itm]);this._enums[this._enums.length-1]._name=itm;}}
for(var i=0,l=this._enums.length;i<l;i++){if(this._enums[i]){var nm=this._enums[i]._name;if(this[nm]){throw"Invalid prop member. Cannot use etype value as prop member.";}
this[nm]=this._enums[i];this[nm]._ord=ord++;}}}
en.prototype.constructs=null;return this;};return t;};_2.otype=function(clz){return{defs:function(defs){return this;},endType:function(){}};};var _18e={},reservedProto={},reservedMProp={},reservedClz={},reservedInh={};_forEach("props protos inherits prototype inits satisfies mixin _inherits _satisfiers singleton isInstance vj$".split(" "),function(val,key,obj){this[val]=true;},_18e);_forEach("constructs getClass _getBase base vj$".split(" "),function(val,key,obj){this[val]=true;},reservedProto);_forEach("props protos _props _protos vj$ _expects expects _satisfiers satisfies endType".split(" "),function(val,key,obj){this[val]=true;},reservedMProp);_forEach("vjo.Class vjo.Object".split(" "),function(val,key,obj){this[val]=true;},reservedClz);function _isVjoType(clz,_19c){if(clz&&clz.vj$&&clz.vj$._vjType){if(_isFn(clz)){return true;}else{if(clz.vj$._vjType==="mtype"&&!_19c){return true;}}}
return false;}
function _isInstanceForInterface(_19d,_19e){var clz=_19d,arr=clz._satisfied;for(var i=0;i<arr.length;i++){if(_isInterfaceInstanceOf(_19e,arr[i])){return true;}}
return false;}
function _isInterfaceInstanceOf(src,_1a2){if(src===_1a2){return true;}
var meta=_TypeMeta.get(_1a2.vj$._meta._metaId),inhs;if(meta&&(inhs=meta._inherits)){for(var i=0;i<inhs.length;i++){var _1a5=_getTypeName(inhs[i]);if(src===_2.getType(_1a5)){return true;}}}
return false;}
function _createPkg(_1a6,_1a7){if(!_1a6){return null;}
if(_4[_1a6]){return _4[_1a6];}
var _1a8=_1a6.split("."),len=_1a8.length;if(_1a7){_4[_1a6]={pkg:{className:_1a8[len-1]}};}else{var pkg=(_1a8[0]=="vjo")?_5:this;for(var i=0;i<len-1&&pkg&&_1a8[i];i++){pkg=(pkg[_1a8[i]])?pkg[_1a8[i]]:pkg[_1a8[i]]={};}
_4[_1a6]={pkg:pkg,className:(len>0)?_1a8[len-1]:""};}
return _4[_1a6];}
function _createEnum(){if(_isFn(_2.Enum)){return;}
var nm="vjo.Enum";var _1ac=_2.ctype(nm).props({from:function(){if(arguments.length==0||arguments.length>2){return this._nativeValueOf.apply(this,arguments);}
var s=arguments[0];if(arguments.length==2){s=arguments[1];if(s){var clz=arguments[0];try{var n=clz.getName();while(n.indexOf("$")>0){n=n.replace("$",".");}
var o=eval(n);if(o[s]){return o[s];}}
catch(a){}}
throw"No enum const "+arguments[0].getName()+"."+s;}else{if(this[s]){return this[s];}}
throw"No enum const "+s;}}).protos({_name:null,_ord:-1,constructs:function(){throw"cannot instantiate 'vjo.Enum'";},name:function(){return this._name;},ordinal:function(){return this._ord;},compareTo:function(o){if(o==null){throw"compare to Etype value cannot be null";}
return(this.ordinal()-o.ordinal());},equals:function(o){return(this===o);},getDeclaringClass:function(){var _1b3=this.getClass();return _1b3;}}).endType();_1ac._nativeValueOf=_1ac.valueOf;_1ac.valueOf=_2.Enum.from;reservedClz[nm]=true;reservedInh[nm]=true;}
function _getClazz(){if(this.vj$._vjType==="ctype"&&!this.vj$._meta._isInner&&this.constructor.clazz){var n=clz=this.constructor.clazz._name,idx=n.lastIndexOf(".");if(idx!=-1){clz=n.substring(idx+1);}
if(this.constructor.vj$[clz]){return this.constructor.vj$[clz].clazz;}}else{var n=clz=this.vj$._class,idx=n.lastIndexOf(".");if(idx!=-1){clz=n.substring(idx+1);}
if(this.vj$[clz]){return this.vj$[clz].clazz;}}
return null;}
function _updateInnerEtypes(_1b5){if(!_1b5._class){return;}
var _1b6=_1b5._meta;if(_1b6.s_inners){for(var k in _1b6.s_inners){if(_1b6.s_inners[k].vj$._vjType=="etype"){for(var i=0;i<_1b6.s_inners[k]._enums.length;i++){_1b6.s_inners[k]._enums[i].vj$=_1b6.s_inners[k].vj$;_updateInnerEtypes(_1b6.s_inners[k]._enums[i].vj$);}}
_updateInnerEtypes(_1b6.s_inners[k].vj$);}}
if(_1b6._inners){for(var k in _1b6._inners){if(_1b6._inners[k].vj$._vjType=="etype"){if(!_1b6._inners[k].vj$._class){_1b6._inners[k].clazz._name=_1b6._inners[k].vj$._class=_1b6._class+"."+k;}
for(var i=0;i<_1b6._inners[k]._enums.length;i++){_1b6._inners[k]._enums[i].vj$=_1b6._inners[k].vj$;_updateInnerEtypes(_1b6._inners[k]._enums[i].vj$);}}
_updateInnerEtypes(_1b6._inners[k].vj$);}}}
function _hasCollisionWithMixin(type,name,_1bb){var mxns=type.vj$._meta.mixins;if(!mxns||mxns.length==0){return false;}
for(var i=0;i<mxns.length;i++){var mxn=mxns[i];if(_1bb){if(mxn._props&&mxn._props[name]){return true;}}else{if(mxn._protos[name]){return true;}}}
return false;}
function _isValidInst(_1bf){return!(reservedProto[_1bf]===true);}
function _isValidClz(_1c0){return!(reservedClz[_1c0]===true);}
function _isValidInh(_1c1){return!(reservedInh[_1c1]===true);}
function _extend(_1c2,_1c3){for(var name in _1c3){var copy=_1c3[name];if(copy!==undefined){_1c2[name]=copy;}}
if(_1c3.toString!=Object.prototype.toString){_1c2.toString=_1c3.toString;}}
function _forEach(_1c6,_1c7,_1c8){if(!_1c6){return;}
var name,i=0,len=_1c6.length;if(!_2.isArray(_1c6)){for(name in _1c6){if(_1c7.call(_1c8,_1c6[name],name,_1c6)===false){break;}}}else{for(;i<len;i++){if(_1c7.call(_1c8,_1c6[i],i,_1c6)===false){break;}}}
return _1c6;}
function _createVjNS(ns,name,type){var rv={};_extend(rv,ns);if(name&&type){delete rv._meta;_extend(rv,type.vj$);rv[name]=type;}
return rv;}
function _copyNS(from,to){_forEach(from,function(val,key){if(key!="type"&&_isVjoType(val,true)){if(this[key]&&this[key]!==val){throw key+" is already defined in the current namespace";}
this[key]=val;}},to);}
function _isInnerClass(clz){if(!clz){return true;}else{if(clz.indexOf(".")==-1){return false;}}
var tp=clz;while((i=tp.lastIndexOf("."))>0){tp=tp.substring(0,i);if(_4[tp]){return true;}}
return false;}
function _isFn(fn){return typeof fn=="function";}
function _isValidProp(pVal){return!(_18e[pVal]===true);}
function _fixScope(from,to){to.vj$=from.vj$;}
function _getTypeName(name){if(typeof name!="string"){return name;}
var clz=name;if(name){var idx=name.indexOf(" "),idx2=name.indexOf("<");if(idx>0){if(idx2>0){idx=Math.min(idx,idx2);}}else{idx=idx2;}
if(idx>0){clz=name.substring(0,idx);}}
return clz;}}).apply(this);
vjo.ctype("vjo.dsf.error.Error").protos({constructs:function(_1,_2,_3){this.message=_1;this.url=_2;this.lineNumber=_3;this.userAgent=navigator.userAgent;}}).endType();
vjo.ctype("vjo.dsf.error.ErrorHandlerManager").needs("vjo.dsf.error.Error").props({dsfErrors:[],handlers:[],add:function(_1,_2,_3){this.dsfErrors[this.dsfErrors.length]=new vjo.dsf.error.Error(_1,_2,_3);return true;},convertErrorTo:function(_4){var _5=_4?"<br>":"\n";var _6=_4?"<html><title>":"";var _7=_4?"</title><body>":_5;var _8=_4?"</body></html>":"";var _9=_4?"<h2>":"";var _a=_4?"</h2>"+_5:_5;var _b=_4?"<b>":"";var _c=_4?"</b>":"";var _d=_6+"V4 JS Errors"+_7;_d+=_9+"Total number of errors = "+this.dsfErrors.length+_a;for(var i=0;i<this.dsfErrors.length;i++){_d+=_b+"Message: "+_c+this.dsfErrors[i].message;_d+=_5;_d+=_b+"URL :"+_c+this.dsfErrors[i].url;_d+=_5;_d+=_b+"Line Number :"+_c+this.dsfErrors[i].lineNumber;_d+=_5;_d+=_b+"User Agent :"+_c+this.dsfErrors[i].userAgent;_d+=_5;_d+=_5;}
_d+=_8;return _d;},toHTML:function(){return this.convertErrorTo(true);},toText:function(){return this.convertErrorTo(false);},show:function(){var _f=window.open("","V4JSErrors","height=500,width=500,menubar=no,status=no,scrollbars=yes");if(window.focus){_f.focus();}
_f.document.write(this.toHTML());_f.document.close();},register:function(_10){if(!_10){return this;}
if(typeof _10!="object"){return this;}
this.handlers[this.handlers.length]=_10;return _10;},clear:function(){this.handlers.length=0;},process:function(_11,_12,_13){for(var i=0;i<this.handlers.length;i++){this.handlers[i].handle(_11,_12,_13);}},enableOnError:function(){window.onerror=function(_15,url,_17){vjo.dsf.error.ErrorHandlerManager.process(_15,url,_17);return true;};}}).endType();
vjo.ctype("vjo.dsf.error.DefaultErrorHandler").needs("vjo.dsf.error.ErrorHandlerManager").protos({constructs:function(){},handle:function(_1,_2,_3){vjo.dsf.error.ErrorHandlerManager.add(_1,_2,_3);}}).endType();
vjo.ctype("vjo.dsf.Event").protos({src:null,eventType:null,nativeEvent:null,constructs:function(_1,_2,_3){this.src=_1;this.eventType=_2;this.nativeEvent=_3;}}).endType();
vjo.ctype("vjo.dsf.Element").props({get:function(_1){var d=document,e=null;if(typeof(d.getElementById)!="undefined"){e=d.getElementById(_1);}else{if(!e&&d.all){e=d.all[_1];}}
return e;},toggleHideShow:function(_3,_4){var e=this.get(_3),s,d,u="undefined";if(e){s=e.style;d=s.display;if(typeof(_4)===u){_4=(d===""||d==="block")?false:true;}
e.bIsShown=_4;s.display=(_4)?"block":"none";}},promoteToBody:function(_6){var e=this.get(_6),b=document.body;if(e&&b&&e.parentNode&&(e.parentNode!==b)){e.parentNode.removeChild(e);b.appendChild(e);}},toggleVisibility:function(_8,_9){var e=this.get(_8),v,s,u="undefined";if(e){s=e.style;v=s.visibility;if(typeof(_9)===u){_9=(v==="")?false:true;}
e.bIsVisible=_9;s.visibility=(_9)?"":"hidden";}},enable:function(_b,_c){var e=this.get(_b);if(e){e.disabled=!_c;}},left:function(_e,_f){return this.setLTWH(_e,_f,"Left");},top:function(_10,_11){return this.setLTWH(_10,_11,"Top");},width:function(_12,_13){return this.setLTWH(_12,_13,"Width");},height:function(_14,_15){return this.setLTWH(_14,_15,"Height");},setLTWH:function(_16,_17,_18){var e=this.get(_16);if(e){if((_17!=null)&&!isNaN(parseInt(_17))){e.style[_18.toLowerCase()]=_17;}
return e["offset"+_18];}},createElement:function(_1a){return document.standardCreateElement?document.standardCreateElement(_1a):document.createElement(_1a);},containsElement:function(_1b,_1c){while((_1c!=null)&&(_1c!=_1b)&&(_1c.parentNode!=null)){_1c=_1c.parentNode;}
return(_1c==_1b);},getElementByTagClass:function(_1d,tag,_1f){var _20=_1d.getElementsByTagName(tag);for(var ndx=0;((ndx<_20.length)&&(_20[ndx].className.match(_1f)==null));ndx++){}
return(ndx<_20.length)?_20[ndx]:null;},getElementsByTagClass:function(_22,tag,_24){var _25=new Array();var _26=_22.getElementsByTagName(tag);for(var ndx=0;(ndx<_26.length);ndx++){if(_26[ndx].className.match(_24)){_25.push(_26[ndx]);}}
return _25;},toggleHideShowRow:function(_28,_29){var e=this.get(_28),ua=navigator.userAgent.toLowerCase(),s,d,u="undefined",p=(ua.indexOf("firefox")!=-1)?"table-row":"block";if(e){s=e.style;d=s.display;if(typeof(_29)===u){_29=(d===""||d===p)?false:true;}
e.bIsShown=_29;s.display=(_29)?p:"none";}}}).endType();
vjo.ctype("vjo.dsf.EventDispatcher").needs(["vjo.dsf.Event","vjo.dsf.Element"]).props({eventHandlers:{},nativeEventHandlers:{},unboundElems:[],fCustomLoad:{},process:function(_1,_2){var _3=this.eventHandlers[_1];if(!_3){return true;}
var _4=_3[_2.eventType];if(!_4){return true;}
var _5,_6=_4.length;for(var i=0;i<_6;i++){var _8=_4[i].handle(_2);if(_8&&_8.objType=="dsf_Message"){if(vjo.dsf.ServiceEngine){vjo.dsf.ServiceEngine.handleRequest(_8);}
if(_8.returnData===false){_5=false;}}else{if(_5!=false&&typeof _8!="undefined"){_5=_8;}}}
return _5;},register:function(id,_a,_b,_c){if(!id||!_a||!_b){return this;}else{if(typeof _b.handle!="function"){if(typeof _b=="function"){var _d=_b,scp=_c||this;var _e={handle:function(){return _d.apply(scp,arguments);}};_b=_e;}else{return this;}}}
var _f=this.eventHandlers[id];if(!_f){_f=this.eventHandlers[id]={};}
if(!_f[_a]){_f[_a]=[];}
var len=_f[_a].length;_f[_a][len]=_b;return _b;},unregister:function(id,_12){if(!this.eventHandlers[id]){return;}
this.eventHandlers[id][_12]=[];},registerNative:function(_13,_14,_15){var id=(_13==window)?"body":_13.id;var _17=this.nativeEventHandlers[id];if(!_17){_17=this.nativeEventHandlers[id]={};}
if(!_17[_14]){_17[_14]=[];}
var len=_17[_14].length;_17[_14][len]=_15;},add:function(id,_1a,_1b,_1c){if(!id||!_1a||!_1b){return this;}
var b=this.isBound(id,_1a),rv=this.register(id,_1a,_1b,_1c);if(!b){b=this.bind(id,_1a);if(b===null){this.unboundElems[this.unboundElems.length]=id;}}
return rv;},addEventListener:function(_1e,_1f,_20,_21,_22){var scp=_21||vjo.global;if(typeof _1e=="string"){_1e=this.vj$.Element.get(_1e);}
if(!_1e){return false;}
var _24=function(_25){var ev=_25||window.event;var rv=_20.call(scp,ev);if(rv===false){vjo.dsf.EventDispatcher.stopEvent(ev);}
if(typeof rv!="undefined"){return rv;}};if(window.addEventListener){_1e.addEventListener(_1f,_24,_22||false);this.registerNative(_1e,_1f,_24);return _24;}else{if(window.attachEvent){_1e.attachEvent("on"+_1f,_24);this.registerNative(_1e,_1f,_24);return _24;}}
_1e["on"+_1f]=_24;return false;},bind:function(id,_29){var _2a=this.vj$.Element.get(id);if(id=="body"||_2a==document.body){_2a=document.body;if(_29=="load"||_29=="unload"){var rv=this.addEventListener(window,_29,function(_2c){var oED=vjo.dsf.EventDispatcher;if(typeof oED.fCustomLoad[_29]=="function"){oED.fCustomLoad[_29]();}
oED.run(document.body,_2c||window.event,_29);oED.unregister("body",_29);oED.fCustomLoad={};});if(rv===false){if(_2a.vjLoadSet){return this;}else{_2a.vjLoadSet=true;var _2e=window["on"+_29]||"";if(_2e){this.fCustomLoad[_29]=_2e;}}}
return this;}}
if(_2a){this.addEventListener(_2a,_29,this.notifier,_2a);return this;}
return null;},notifier:function(_2f,_30){return vjo.dsf.EventDispatcher.run(this,_2f||window.event,_30);},reBind:function(){var eH=this.eventHandlers,uE=this.unboundElems,len=uE.length,tmp=[];for(var i=0;i<len;i++){var id=uE[i],hdls=eH[id];if(hdls){for(var _34 in hdls){if(!this.hasBinding(id,_34)){var rv=this.bind(id,_34);if(rv===null){tmp[tmp.length]=id;}}}}}
this.unboundElems=tmp;},isBound:function(id,_37){var _38=this.eventHandlers[id];return(_38&&_38[_37]&&_38[_37].length>0);},hasBinding:function(id,_3a){var nEH=this.nativeEventHandlers;if(nEH[id]&&nEH[id][_3a]){var aH=nEH[id][_3a],len=aH.length,rv=false;for(var i=0;i<len;i++){var str=aH[i].toString();if(str&&str.indexOf("vjo.dsf.EventDispatcher")!=-1){return true;}}}
return false;},removeEventListener:function(_3f,_40,_41){if(!_3f||!_40){return;}else{if(typeof _3f=="string"){_3f=this.vj$.Element.get(_3f);}}
if(window.addEventListener&&_41){_3f.removeEventListener(_40,_41,false);}else{if(window.attachEvent&&_41){_3f.detachEvent("on"+_40,_41);}else{_3f["on"+_40]=null;}}},detachNativeHandlers:function(_42,_43){var id=(_42==window)?"body":_42.id;var _45=this.nativeEventHandlers[id];if(_45&&_45[_43]){var h=_45[_43],len=h.length;for(var i=0;i<len;i++){this.removeEventListener(_42,_43,_45[_43][i]);}
_45[_43]=[];}},detachHandler:function(id,_49,_4a){var _4b=this.eventHandlers[id];if(!_4b||!_4b[_49]){return;}
var h=[],len=_4b[_49].length;for(var i=0;i<len;i++){if(_4a!=_4b[_49][i]){h[h.length]=_4b[_49][i];}}
this.eventHandlers[id][_49]=h;},detachHandlers:function(id,_4f){this.unregister(id,_4f);var _50=this.vj$.Element.get(id);if(id=="body"){_50=window;}
if(_50){this.detachNativeHandlers(_50,_4f);}},stopEvent:function(e){this.stopPropagation(e);this.preventDefault(e);},stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();}else{e.cancelBubble=true;}},preventDefault:function(e){if(e.preventDefault){e.preventDefault();}else{e.returnValue=false;}},target:function(_54){return this.resolveTextNode((_54.target)?_54.target:_54.srcElement);},currentTarget:function(_55){return this.resolveTextNode((_55.currentTarget)?_55.currentTarget:_55.srcElement);},relatedTarget:function(_56){if(_56.relatedTarget){return this.resolveTextNode(_56.relatedTarget);}else{if((_56.type==="mouseover")&&_56.fromElement){return this.resolveTextNode(_56.fromElement);}else{if((_56.type==="mouseout")&&_56.toElement){return this.resolveTextNode(_56.toElement);}else{return null;}}}},resolveTextNode:function(_57){return(_57&&(_57.nodeType==3))?_57.parentNode:_57;},cleanUp:function(){var _58=this.nativeEventHandlers;for(var id in _58){for(var ev in _58[id]){if(ev!="unload"){this.detachHandlers(id,ev,true);}}}},getId:function(src,id){var _5d=id;if(_5d===null||!_5d){_5d=src.id;}
return _5d;},getBodyId:function(src,id){var _60=this.getId(src,id);if(!_60||src==document.body){_60="body";}
return _60;},unload:function(src,_62){return this.process(this.getBodyId(src),new vjo.dsf.Event(src,"unload",_62));},change:function(src,_64){return this.process(this.getId(src),new vjo.dsf.Event(src,"change",_64));},submit:function(src,_66){return this.process(this.getId(src),new vjo.dsf.Event(src,"submit",_66));},reset:function(src,_68){return this.process(this.getId(src),new vjo.dsf.Event(src,"reset",_68));},select:function(src,_6a){return this.process(this.getId(src),new vjo.dsf.Event(src,"select",_6a));},blur:function(src,_6c){return this.process(this.getId(src),new vjo.dsf.Event(src,"blur",_6c));},focus:function(src,_6e){return this.process(this.getId(src),new vjo.dsf.Event(src,"focus",_6e));},keydown:function(src,_70){return this.process(this.getBodyId(src),new vjo.dsf.Event(src,"keydown",_70));},keypress:function(src,_72){return this.process(this.getBodyId(src),new vjo.dsf.Event(src,"keypress",_72));},keyup:function(src,_74){return this.process(this.getBodyId(src),new vjo.dsf.Event(src,"keyup",_74));},click:function(src,_76){return this.process(this.getBodyId(src),new vjo.dsf.Event(src,"click",_76));},dblclick:function(src,_78){return this.process(this.getBodyId(src),new vjo.dsf.Event(src,"dblclick",_78));},mousedown:function(src,_7a){return this.process(this.getBodyId(src),new vjo.dsf.Event(src,"mousedown",_7a));},mousemove:function(src,_7c){return this.process(this.getBodyId(src),new vjo.dsf.Event(src,"mousemove",_7c));},mouseout:function(src,_7e){return this.process(this.getBodyId(src),new vjo.dsf.Event(src,"mouseout",_7e));},mouseover:function(src,_80){return this.process(this.getBodyId(src),new vjo.dsf.Event(src,"mouseover",_80));},mouseup:function(src,_82){return this.process(this.getBodyId(src),new vjo.dsf.Event(src,"mouseup",_82));},contextmenu:function(src,_84){return this.process(this.getBodyId(src),new vjo.dsf.Event(src,"contextmenu",_84));},load:function(src,_86){return this.run(src,_86,"load");},run:function(src,_88,_89){var et=_89||_88.type;var id=this.getBodyId(src);var _8c=new vjo.dsf.Event(src,et,_88);var rv=this.process(id,_8c);if(et==="load"&&id==="body"){this.unregister("body","load");}
return rv;}}).inits(function(){vjo.dsf.EventDispatcher.addEventListener(window,"load",function(){vjo.dsf.EventDispatcher.addEventListener(window,"unload",function(){vjo.dsf.EventDispatcher.cleanUp();});});}).endType();
vjo.itype("vjo.dsf.ITransport").protos({handleRequest:function(_1,_2){}}).endType();
vjo.ctype("vjo.dsf.ServiceResponse").protos({objType:undefined,errors:undefined,data:undefined,constructs:function(){this.errors=[];},addError:function(_1){if(this.errors){this.errors[this.errors.length]=_1;}}}).endType();
vjo.ctype("vjo.dsf.Message").protos({objType:"dsf_Message",trspType:"",svcId:"",request:null,response:null,status:null,svcConfig:null,stok:"",pId:"",constructs:function(){if(arguments.length===1){this.svcId=arguments[0];}else{if(arguments.length===2){this.svcId=arguments[0]+"."+arguments[1];this.svcName=arguments[0];this.opName=arguments[1];}}
this.rawRequest="";this.clientContext={};this.trspType="InProc";this.returnData=true;this.trace="";this.v="0";this.headers=null;}}).endType();
vjo.ctype("vjo.dsf.InProcReqtHdl").satisfies("vjo.dsf.ITransport").needs("vjo.dsf.ServiceResponse").needs("vjo.dsf.Message").protos({constructs:function(){this.svcHdls={};},registerSvcHdl:function(_1,_2){this.svcHdls[_1]=_2;},getSvcHdl:function(_3){return this.svcHdls[_3];},handleRequest:function(_4,_5){if(!_4.response){_4.response=new vjo.dsf.ServiceResponse();}
var _6=this.svcHdls[_4.svcId];if(_6){_4.response.data=_6.invoke(_4);}
if(typeof _4.status=="undefined"||_4.status==null){_4.status=1;}}}).endType();
vjo.ctype("vjo.dsf.Error").protos({id:undefined,message:undefined,constructs:function(_1,_2){this.id=_1;this.message=_2;}}).endType();
vjo.ctype("vjo.dsf.SvcErr").needs("vjo.dsf.Error").needs("vjo.dsf.Message").props({InvRsp:"InvalidRsp",InvRqBnd:"RqInvalidBnd",InvRspBnd:"RspInvalidBnd",InvRq:"InvalidRequest",TO:"TimedOut",RqUnk:"Client.Request.UnknownError",SvcRq:"SYS.SVC_REQUEST_ERROR",SvcRsp:"SYS.SVC_RESPONSE_ERROR",GlbRq:"SYS.GLOBAL_REQUEST_ERROR",GlbRsp:"SYS.GLOB_RESPONSE_ERROR",TrnRq:"SYS.TRANS_REQUEST_ERROR",TrnRsp:"SYS.TRANS_RESPONSE_ERROR",Prs:"SYS.JSON_PARSE_ERROR",SvcPrc:"SYS.DARWIN_SERVICE_PROTOCOL_ERROR",err:function(_1,_2,_3){_1.response.addError(new vjo.dsf.Error(_2,_3));}}).endType();
vjo.ctype("vjo.dsf.ServiceRegistry").needs("vjo.dsf.ITransport").props({t:[],b:[],getBinding:function(_1){return this.b[_1];},getTransport:function(_2){return this.t[_2];},registerBinding:function(_3,_4){var _5=false;if(_3&&_4){this.b[_3]=_4;_5=true;}
return _5;},registerTransport:function(_6,_7){var _8=false;if(_6&&_7){if(vjo.isInstanceOf(_7,vjo.dsf.ITransport)){this.t[_6]=_7;_8=true;}}
return _8;}}).endType();
vjo.ctype("vjo.dsf.RemoteReqtHdl").satisfies("vjo.dsf.ITransport").needs("vjo.dsf.SvcErr").needs("vjo.dsf.ServiceRegistry").needs("vjo.dsf.ServiceResponse").needs("vjo.dsf.Message").protos({handleRequest:function(_1,_2){_1.response=new vjo.dsf.ServiceResponse();if(!_1.svcConfig){vjo.dsf.SvcErr.err(_1,vjo.dsf.SvcErr.InvRq,"message.svcConfig is undefined");return;}
var _3=vjo.dsf.ServiceRegistry.getBinding(_1.svcConfig.reqtMarshalling);if(_3){_3.serialize(_1);}else{vjo.dsf.SvcErr.err(_1,vjo.dsf.SvcErr.InvRqBnd,"reqtMarshalling="+_1.svcConfig.reqtMarshalling);}
this.invoke(_1);},invoke:function(_4){var _5="XHR";if(_4.svcConfig.respMarshalling=="JSCALLBACK"){_5="JSONP";}
var _6=vjo.dsf.ServiceRegistry.getTransport(_5);if(_6){_6.handleRequest(_4,this.callback);}},callback:function(_7){try{var _8=vjo.dsf.ServiceRegistry.getBinding(_7.svcConfig.respMarshalling);if(_8){_8.deserialize(_7);}else{vjo.dsf.SvcErr.err(_7,vjo.dsf.SvcErr.InvRspBnd,"marshalling="+_7.svcConfig.respMarshalling+":responseText="+_7.response);}}
catch(e){vjo.dsf.SvcErr.err(_7,vjo.dsf.SvcErr.InvRsp,"marshalling="+_7.svcConfig.respMarshalling+":responseText="+_7.response);}
vjo.dsf.ServiceEngine.handleResponse(_7);}}).endType();
vjo.ctype("vjo.dsf.SvcConfig").protos({objType:null,url:null,method:null,reqtMarshalling:null,respMarshalling:null,async:true,timeout:0,constructs:function(_1,_2){this.objType="dsf_SvcConfig";this.svcType=null;this.url=_2;this.method=_1;this.reqtMarshalling="raw";this.respMarshalling="raw";this.async=true;this.timeout=0;}}).endType();
vjo.ctype("vjo.dsf.XDomainRequest").satisfies("vjo.dsf.ITransport").needs("vjo.dsf.EventDispatcher").props({callbacks:[],sCallbackName:"callback",sPreId:"xdr_",sPreExtId:"xdr_ext_",iCount:0,bUseIframe:(navigator.userAgent.indexOf("Firefox")>0),onLoad:function(){this.bodyLoaded=true;},getReqDiv:function(){return document.getElementsByTagName(this.bodyLoaded?"body":"head")[0];},send:function(_1){if(!document.createElement||!_1){return;}
var _2="",eid="",rdm="_vrdm="+(new Date()).getTime();if(typeof _1=="string"){_2=_1;eid=this.sPreExtId+this.iCount++;}else{if(_1.objType=="dsf_Message"&&_1.svcConfig){var cb=this.createCallback(_1);eid=this.sPreId+this.callbacks[this.callbacks.length-1];_2=_1.svcConfig.url+"&callback="+cb;}}
var _4=null,doc;doc=document;var _5=this.createElement("script");_5.id=eid;_5.type="text/javascript";var _6=true;if(arguments.length>1){_6=arguments[1];}
if(_6){_2=_2+((_2.indexOf("?")==-1)?"?":"&")+rdm;}
_5.src=_2;this.getReqDiv().appendChild(_5);return eid;},createCallback:function(_7){var _8=this.callbacks.length,name=this.sCallbackName+_8,eid=this.sPreId+name;this.callbacks[_8]=name;this[name]=function(_9){vjo.dsf.XDomainRequest.loaded(eid);_7.response=_9;vjo.dsf.ServiceEngine.handleResponse(_7);};var _a="",rv=((_a)?_a+".":"")+"vjo.dsf.XDomainRequest."+name;return rv;},loaded:function(_b){var e=document.getElementById(_b);if(e!==null){e.parentNode.removeChild(e);}},createElement:function(_d){return(typeof(createElementV4)!="undefined")?createElementV4(_d):document.createElement(_d);}}).protos({handleRequest:function(_e,_f){vjo.dsf.XDomainRequest.send(_e);}}).inits(function(){vjo.dsf.EventDispatcher.addEventListener(window,"load",this.onLoad,this);}).endType();
vjo.ctype("vjo.dsf.ServiceEngine").needs(["vjo.dsf.InProcReqtHdl","vjo.dsf.RemoteReqtHdl","vjo.dsf.ServiceResponse","vjo.dsf.SvcConfig","vjo.dsf.Message","vjo.dsf.XDomainRequest","vjo.dsf.ServiceRegistry","vjo.dsf.SvcErr"]).props({STATUS:{ABORT:-1,JUMP:1},init:function(){this.svcReqtHdls=[];this.svcRespHdls=[];this.glbReqtHdls=[];this.glbRespHdls=[];this.trspReqtHdls=[];this.trspRespHdls=[];this.svcHdls=[];this.inProcHdl=new this.vj$.InProcReqtHdl();this.remoteHdl=new this.vj$.RemoteReqtHdl();this.E=this.vj$.SvcErr;vjo.dsf.ServiceRegistry.registerTransport("JSONP",new vjo.dsf.XDomainRequest());},handleRequest:function(_1){var rt,ab=this.STATUS.ABORT,m=_1;if((m.status!=ab)&&typeof rt=="undefined"){rt=this.processServiceRequestHandlers(_1);}
if((m.status!=ab)&&typeof rt=="undefined"){rt=this.processGlobalRequestHandlers(_1);}
if((m.status!=ab)&&typeof rt=="undefined"){this.processTransportHandlers(_1);}
if((m.status!=ab)&&("Remote"!=_1.trspType||typeof rt!="undefined")){this.handleResponse(_1,rt);}
return _1.returnData;},processServiceRequestHandlers:function(_4){var rt;var _6=this.svcReqtHdls[_4.svcId];if(_6){try{var _7=_6.length;for(var i=0;i<_7;i++){_4.trace=_4.trace+"-->svcReqtHdl_"+i;_6[i].handleRequest(_4);if(_4.status==this.STATUS.JUMP){rt="SVC";this.err(_4,this.E.SvcRq,this.E.SvcRq);break;}}}
catch(e){rt="SVC";this.err(_4,this.E.SvcRq,this.E.SvcRq);}}
return rt;},processGlobalRequestHandlers:function(_9){var rt;if(_9.status!=this.STATUS.JUMP){try{var _b=this.glbReqtHdls.length;for(var i=0;i<_b;i++){_9.trace=_9.trace+"-->glbReqtHdl_"+i;this.glbReqtHdls[i].handleRequest(_9);if(_9.status==this.STATUS.JUMP){rt="GLB";this.err(_9,this.E.GlbRq,this.E.GlbRq);break;}}}
catch(e){rt="GLB";this.err(_9,this.E.GlbRq,this.E.GlbRq);}}
return rt;},processTransportHandlers:function(_d){if(_d.status!=this.STATUS.JUMP&&_d.trspType){var _e=vjo.dsf.ServiceRegistry.getTransport(_d.trspType);if(_e){_e.handleRequest(_d,this.handleResponse);}else{var _f=this.trspReqtHdls[_d.trspType];if(_f){try{var len=_f.length;for(var i=0;i<len;i++){_d.trace=_d.trace+"-->trspReqtHdl_"+i;_f[i].handleRequest(_d);if(_d.status==this.STATUS.JUMP){this.err(_d,this.E.TrnRq,this.E.TrnRq);break;}}}
catch(e){this.err(_d,this.E.TrnRq,this.E.TrnRq);}}
if(_d.status!=this.STATUS.JUMP&&_d.status!=vjo.dsf.ServiceEngine.STATUS.ABORT){if(_d.trspType=="undefined"){this.err(_d,this.E.TrnRq,this.E.TrnRq);}else{if("InProc"===_d.trspType){this.inProcHdl.handleRequest(_d);}else{if("Remote"===_d.trspType){this.remoteHdl.handleRequest(_d);}}}}}}},handleResponse:function(msg,_13){if(msg.trspType!="undefined"&&msg.trspType&&typeof _13=="undefined"){this.processTransResponseHandlers(msg);}
if(_13!="SVC"){this.processGlobalResponseHandlers(msg);}
this.processServiceResponseHandlers(msg);},processTransResponseHandlers:function(msg){var _15=this.trspRespHdls[msg.trspType];try{if(_15){for(var i=_15.length-1;i>=0;i--){msg.trace=msg.trace+"-->trspRespHdl_"+i;_15[i].handleResponse(msg);}}}
catch(e){this.err(msg,this.E.TrnRsp,this.E.TrnRsp);}},processGlobalResponseHandlers:function(msg){try{for(var i=this.glbRespHdls.length-1;i>=0;i--){msg.trace=msg.trace+"-->glbRespHdl_"+i;this.glbRespHdls[i].handleResponse(msg);}}
catch(e){this.err(msg,this.E.GlbRsp,this.E.GlbRsp);}},processServiceResponseHandlers:function(msg){var _1a;if(msg.clientContext){_1a=msg.clientContext.svcApplier;}
try{if(_1a){if(typeof _1a.onResponse=="function"){_1a.onResponse(msg);}else{if(typeof _1a=="function"){_1a(msg);}}}}
catch(e){this.err(msg,this.E.SvcRsp,this.E.SvcRsp);}
var _1b=this.svcRespHdls[msg.svcId];if(_1b){try{for(var i=_1b.length-1;i>=0;i--){msg.trace=msg.trace+"-->svcRespHdl_"+i;_1b[i].handleResponse(msg);}}
catch(e){this.err(msg,this.E.SvcRsp,this.E.SvcRsp);}}},createHandler:function(_1d,_1e){if(typeof _1d[_1e]!="function"){if(typeof _1d=="function"){var _1f=_1d,obj={},self=this;obj[_1e]=function(){return _1f.apply(self,arguments);};_1d=obj;}}
return _1d;},registerSvcHdl:function(_20,_21){if(!_20||!_21){return;}
_21=this.createHandler(_21,"invoke");this.inProcHdl.registerSvcHdl(_20,_21);},getSvcHdl:function(_22){return this.inProcHdl.getSvcHdl(_22);},registerSvcReqtHdl:function(_23,_24){if(!_23||!_24){return;}
if(!this.svcReqtHdls){this.init();}
if(typeof this.svcReqtHdls[_23]=="undefined"){this.svcReqtHdls[_23]=[];}
var _25=this.svcReqtHdls[_23];_25[_25.length]=this.createHandler(_24,"handleRequest");},registerSvcRespHdl:function(_26,_27){if(!_26||!_27){return;}
if(typeof this.svcRespHdls[_26]=="undefined"){this.svcRespHdls[_26]=[];}
var _28=this.svcRespHdls[_26];_28[_28.length]=this.createHandler(_27,"handleResponse");},registerGlbReqtHdl:function(_29){if(!_29){return;}
this.glbReqtHdls[this.glbReqtHdls.length]=this.createHandler(_29,"handleRequest");},registerGlbRespHdl:function(_2a){if(!_2a){return;}
this.glbRespHdls[this.glbRespHdls.length]=this.createHandler(_2a,"handleResponse");},registerTrspReqtHdl:function(_2b,_2c){if(!_2b||!_2c){return;}
if(typeof this.trspReqtHdls[_2b]=="undefined"){this.trspReqtHdls[_2b]=[];}
if(!vjo.dsf.ServiceRegistry.registerTransport(_2b,_2c)){var _2d=this.trspReqtHdls[_2b];_2d[_2d.length]=this.createHandler(_2c,"handleRequest");}},registerTrspRespHdl:function(_2e,_2f){if(!_2e||!_2f){return;}
if(typeof this.trspRespHdls[_2e]=="undefined"){this.trspRespHdls[_2e]=[];}
var _30=this.trspRespHdls[_2e];_30[_30.length]=this.createHandler(_2f,"handleResponse");},err:function(msg,_32,_33){if(!msg.response){msg.response=new vjo.dsf.ServiceResponse();}
if(msg.response.addError){msg.response.addError(new vjo.dsf.Error(_32,_33));}else{msg.response.addError=vjo.dsf.ServiceResponse.prototype["addError"];if(msg.response.addError){msg.response.addError(new vjo.dsf.Error(_32,_33));}}},register:function(_34,_35,_36){var _s=vjo.dsf.ServiceEngine;switch(_34){case 0:_s.registerSvcHdl(_35,_36);break;case 1:_s.registerSvcReqtHdl(_35,_36);break;case 2:_s.registerGlbReqtHdl(_35,_36);break;case 3:_s.registerTrspReqtHdl(_35,_36);break;case 4:_s.registerSvcRespHdl(_35,_36);break;case 5:_s.registerGlbRespHdl(_35,_36);break;case 6:_s.registerTrspRespHdl(_35,_36);break;}}}).inits(function(){this.init();}).endType();
vjo.ctype("vjo.dsf.assembly.VjClientAssemblerRequest").protos({constructs:function(_1,_2,_3,_4,_5){this.sUrl=_1;this.fCallback=_2;this.oScope=_3||window;this.sCallbackParam=_4;var b=_5;if(typeof(b)=="undefined"){b=true;}
this.bSendResponseOnLoad=b;}}).endType();
vjo.ctype("vjo.dsf.assembly.VjClientAssembler").needs(["vjo.dsf.EventDispatcher","vjo.dsf.ServiceEngine","vjo.dsf.assembly.VjClientAssemblerRequest"]).props({load:function(_1){var m=_1,url=m.sUrl||"",name=this.generateCallback(m),ver="",cb=((ver)?ver+".":"")+"vjo.dsf.assembly.VjClientAssembler."+name;if(m&&m.objType=="dsf_Message"){url=m.svcConfig.url+"?";url+=vjo.dsf.Service.generateReqParams(m)+"&callback="+cb;}else{if(m.sCallbackParam){url=url+"&"+m.sCallbackParam+"="+cb;}}
return vjo.dsf.XDomainRequest.send(url);},generateCallback:function(_3){var m=_3;var _5=this.aCallbacks.length;var _6=this.sPreCallback+_5;this.aCallbacks[_5]=_6;this.aModels[_6]=m;this[_6]=function(){if(this.loaded[_6]===true){return;}
this.loaded[_6]=true;if(this.bBodyLoaded||!m.bSendResponseOnLoad){if(m.objType=="dsf_Message"){m.response=arguments[0];vjo.dsf.ServiceEngine.handleResponse(m);}else{m.fCallback.apply(m.oScope,arguments);}}else{if(m.objType=="dsf_Message"){this.aResponses[_6]=arguments[0];m.response=this.aResponses[_6];}else{this.aResponses[_6]=arguments;}
if(this.bBodyLoaded){this.assemble();}}};return _6;},assemble:function(){this.bBodyLoaded=true;if(this.bLock){setTimeout("vjo.dsf.assembly.VjClientAssembler.assemble()",1000);return;}
this.bLock=true;try{for(var _7 in this.aResponses){this.loaded[_7]=true;var m=this.aModels[_7];if(this.aResponses[_7]!=null){if(m.objType=="dsf_Message"){vjo.dsf.ServiceEngine.handleResponse(m);}else{m.fCallback.apply(m.oScope,this.aResponses[_7]);}}
this.aResponses[_7]=null;}}
finally{this.bLock=false;}}}).inits(function(){this.aCallbacks=[];this.aResponses={};this.aModels={};this.sPreCallback="_callback";this.bBodyLoaded=false;this.bLock=false;this.loaded={};this.vj$.EventDispatcher.addEventListener(window,"load",function(){vjo.dsf.assembly.VjClientAssembler.assemble();});}).endType();
vjo.ctype("vjo.dsf.document.Element").needs("vjo.dsf.Element","E").props({toggleHideShowRow:function(_1,_2){},toggleHideShow:function(_3,_4){},toggleVisibility:function(_5,_6){}}).inits(function(){vjo.dsf.document.Element=this.vj$.E;}).endType();
vjo.ctype("vjo.Registry").props({controls:[],put:function(_1,_2){this.controls[_1]=_2;if(this.isKeyValid(_1)){this["_"+_1]=this.controls[_1];}
return this.controls[_1];},get:function(_3){return this.controls[_3];},dump:function(){var _4=this.controls;var _5="controls on page:\n";for(var i in _4){_5+="key = "+i;_5+="controlName = "+_4[i].objtype;_5+="\n";}
return _5;},isKeyValid:function(_7){if(typeof _7!="string"){return false;}
return/^([a-zA-Z0-9_$]+)$/.test(_7);}}).endType();
vjo.ctype("vjo.dsf.typeextensions.string.Comparison").endType();String.prototype.has=function(_1){return(this.indexOf(_1)!=-1);};String.prototype.hasArg=function(_2){var a=_2,rv=false;if(typeof(a)=="string"){rv=this.has(a);}else{var aL=a.length;for(var j=0;j<aL&&!rv;j++){rv=this.has(a[j]);}}
return rv;};String.prototype.hasAny=function(){var a=arguments,l=a.length,rv=false;for(var i=0;i<l&&!rv;i++){rv=this.hasArg(a[i]);}
return rv;};String.prototype.hasAll=function(){var a=arguments,l=a.length;for(var i=0;i<l;i++){if(!this.hasArg(a[i])){return false;}}
return true;};String.prototype.is=function(s){return(this==s);};String.prototype.isAny=function(){var a=arguments,l=a.length,rv=false,aL;for(var i=0;i<l&&!rv;i++){if(typeof(a[i])=="string"){rv=(this==a[i]);}else{aL=a[i].length;for(var j=0;j<aL&&!rv;j++){rv=(this==a[i][j]);}}}
return rv;};
vjo.ctype("vjo.dsf.client.Browser").needs("vjo.dsf.typeextensions.string.Comparison").props({init:function(){this.bFirefox=this.bWebTV=this.bOpera=this.bNav=this.bIE=this.bSafari=this.bWin=this.bMac=this.bMacppc=this.bMactel=this.bActiveXSupported=this.bWinXp=this.bXpSp2=this.bAOL=this.bVista=false;this.iVer=this.fVer=-1;this.fMinorVer=0;this.aMimeTypes=null;var nv=navigator,agt=nv.userAgent.toLowerCase(),i=0,ver;with(this){if(agt.has("webtv")){bWebTV=true;i=agt.indexOf("webtv/")+6;}else{if(agt.has("firefox")){bFirefox=true;i=agt.lastIndexOf("firefox")+8;}else{if(agt.has("safari")){bSafari=true;i=agt.lastIndexOf("safari")+7;}else{if(typeof(window.opera)!="undefined"){bOpera=true;i=agt.lastIndexOf("opera")+6;}else{if(nv.appName.is("Netscape")){bNav=true;i=agt.lastIndexOf("/")+1;}else{if(agt.has("msie")){bIE=true;i=agt.indexOf("msie")+4;if(agt.has("aol")||agt.has("america online")){bAOL=true;}}}}}}}
ver=bOpera?window.opera.version():agt.substring(i);iVer=parseInt(ver);fVer=parseFloat(ver);fMinorVer=fVer-iVer;bWin=agt.has("win");bWinXp=(bWin&&agt.has("windows nt 5.1"));bVista=(bWin&&agt.has("windows nt 6.0"));bXpSp2=(bWinXp&&agt.has("sv1"));bMac=agt.has("mac");bMacppc=(bMac&&agt.hasAny("ppc","powerpc"));bMactel=(bMac&&agt.has("intel"));aMimeTypes=nv.mimeTypes;bActiveXSupported=(!(bMac||bMacppc)&&(typeof(ActiveXObject)=="function"));}}}).inits(function(){vjo.dsf.client.Browser.init();}).endType();
vjo.ctype("vjo.dsf.utils.Object").props({hitch:function(_1,_2){var _3;if(typeof _2=="string"){_3=_1[_2];}else{_3=_2;}
return function(){return _3.apply(_1,arguments);};},extend:function(_4,_5){function inheritance(){}
inheritance.prototype=_5.prototype;_4.prototype=new inheritance();_4.prototype.constructor=_4;_4.baseConstructor=_5;_4.superClass=_5.prototype;}}).endType();
vjo.ctype("vjo.dsf.utils.JsLoader").props({queue:[],pending:null,load:function(_1,_2,_3){var _4={url:_1,callback:_2,scope:_3},head,stag;var t=this;if(t.pending){t.queue.push(_4);return;}
this.pending=_4;head=document.getElementsByTagName("head")[0];stag=document.createElement("script");stag.onload=stag.onreadystatechange=function(){if(!this.readyState||this.readyState=="loaded"||this.readyState=="complete"){t.oncomplete();stag.onload=stag.onreadystatechange=null;head.removeChild(stag);}};stag.type="text/javascript";stag.src=_1;head.appendChild(stag);},oncomplete:function(){var t=this,o=t.pending;if(o.callback){o.callback.call(o.scope||window);}
t.pending=null;if(t.queue.length>0){var _7=this.queue.shift();t.load(_7.url,_7.callback,_7.scope);}}}).endType();
vjo.ctype("vjo.dsf.utils.CssLoader").props({load:function(_1){if(document.createStyleSheet){document.createStyleSheet(_1);}else{var _2=document.getElementsByTagName("head")[0],style=document.createElement("link");style.rel="stylesheet";style.type="text/css";style.href=_1;_2.appendChild(style);}}}).endType();
vjo.ctype("vjo.dsf.utils.Handlers").needs(["vjo.dsf.EventDispatcher","vjo.dsf.Message","vjo.dsf.ServiceEngine"]).props({ED:vjo.dsf.EventDispatcher,SE:vjo.dsf.ServiceEngine,attachEvt:function(_1,_2,_3,_4){return this.ED.addEventListener(_1,_2,_3,_4);},detachEvt:function(_5,_6,_7){this.ED.removeEventListener(_5,_6,_7);return true;},newMsg:function(_8){return new vjo.dsf.Message(_8);},handle:function(_9){this.SE.handleRequest(_9);},createHdl:function(_a,_b,_c){var _d=_a,hdl={};hdl[_c]=function(){_b.apply(_d,arguments);};return hdl;},attachSvc:function(_e,_f,_10){var t=this,hdl=t.createHdl(_10,_f,"invoke");if(t.SE&&hdl){t.SE.registerSvcHdl(_e,hdl);}},attachSvcReqt:function(_12,_13,_14){var t=this,hdl=t.createHdl(_14,_13,"handleRequest");if(t.SE&&hdl){t.SE.registerSvcReqtHdl(_12,hdl);}},attachSvcResp:function(_16,_17,_18){var t=this,hdl=t.createHdl(_18,_17,"handleResponse");if(t.SE&&hdl){t.SE.registerSvcRespHdl(_16,hdl);}},resetSvc:function(_1a){this.SE.inProcHdl.svcHdls[_1a]=[];},resetSvcReqt:function(_1b){this.SE.svcReqtHdls[_1b]=[];},resetSvcResp:function(_1c){this.SE.svcRespHdls[_1c]=[];}}).endType();
// en_US/1/SYS-201010_vjo_112574925_1_en_US
// b=12574925