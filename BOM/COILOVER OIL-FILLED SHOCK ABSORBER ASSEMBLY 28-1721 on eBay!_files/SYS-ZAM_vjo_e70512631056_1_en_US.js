
(function(){var _1=1.5,_bOldSupport=typeof(vjo)=="object";if(_bOldSupport&&vjo._v==_1){return;}
var _2={};var _3=(typeof window!="undefined")?window:this,wv=_3.vjo;if(!wv||!wv._v||wv._v<_1){_3.vjo=_2;}
var _4={};var _5=this;var _6=[];var _7=true;_extend(_2,{_v:1.5,loader:{async:true,load:function(){}},isArray:function(_8){if(!_8){return false;}
return(_8.constructor==Array||(typeof _8=="object"&&_8.join&&_8.splice));},getType:function(_9,_a){if(!_9){return;}
_9=_getTypeName(_9);var _b=_9.lastIndexOf("$")+1,dot=_9.lastIndexOf(".")+1,idx=_b||dot,cn=idx?_9.substring(idx):_9,_9=_b?(_9.substring(0,_b-1)+"."+cn):_9,obj=_4[_9];if(!_a&&!obj){_2.loader.load(_9);obj=_4[_9];}
if(obj){return obj.pkg[cn];}
return;},mixin:function(_c,_d){var _e=this.getType(_c);if(_e){if(_e.vj$&&_e.vj$._vjType==="mtype"){if(_e._props){throw"cannot mixin static props to an instance";}
_extend(_d,_e._protos);}}},hitch:function(_f,fn,_11){if(!_isFn(fn)){var _12=fn;fn=_f;_f=_12;}
return function(){return fn.apply((_11&&this!=window)?this:_f,arguments);};},curry:function(fn){var _14=Array.prototype.slice;var _15=_14.call(arguments,1);return function(){return fn.apply(this,_15.concat(_14.apply(arguments)));};},bind:function(ctx,fn){if(typeof fn=="string"){fn=ctx[fn];}
var _18=Array.prototype.slice;var _19=_18.call(arguments,2);return function(){return fn.apply(ctx,_19.concat(_18.apply(arguments)));};},create:function(_1a,_1b){var _1c=document.createElement(_1a);_1c.tagName=="TEXTAREA"?_1c.value=_1b:_1c.innerHTML=_1b;return _1c;},make:function(_1d,clz){var a=arguments,len=a.length,tp=(_isFn(clz)&&clz.vj$)?clz:this.getType(clz),_vjo={};if(len<2||!tp){throw"context and valid type are required";}
_forEach(_1d.vj$,function(val,key){if(_isFn(val)&&val.vj$&&val.vj$._vjType){this[key]=val;}},_vjo);var _22;var _23=Array.prototype.slice.call(a,2,len);return{protos:function(obj){_22=obj;return this;},endType:function(){var t=_2.ctype(),clztype=tp.vj$._vjType,rv;if(clztype==="itype"){t.satisfies(tp);}else{if(clztype==="ctype"||clztype==="atype"){var _26=_TypeMeta.get(tp);if(_26&&!_26._completed){_26.complete();}
t.inherits(_2.getType(tp.vj$._class));}else{throw"incompatible anonomyous type";}}
t.protos(_22);t.complete();t=t.endType();rv=_Type.createNoConstruct(t);rv.vj$=t.vj$;_extend(rv.vj$,_vjo);(function(){if(this.base){this.base.apply(this,arguments);}}).apply(rv,_23);if(rv.base&&rv._getBase){var fn=_Type.tmpFunc;fn.prototype=rv._getBase();rv.base=new fn;rv.base._parent=rv;}
rv.vj$.parent=tp._outer||_1d;rv.vj$.outer=tp._outer;if(_22&&_22.constructs){_22.constructs.apply(rv);}
return rv;}};},needs:function(clz,_29){if(!clz){return;}
if(!_4[clz]){_createPkg(clz);_2.loader.load(clz);}},createArray:function(val,_2b){var arr=[];if(arguments.length>1){for(var ii=0;ii<_2b;ii++){if(arguments.length>2){var tmp=[val];for(var k=2;k<arguments.length;k++){tmp[tmp.length]=arguments[k];}
arr[ii]=_2.createArray.apply(this,tmp);}else{arr[ii]=val;}}}
return arr;},isInstanceOf:function(_30,_31){if(_30===null){return false;}
var _32=_isVjoType(_31);if(!_32||(_32&&_31.vj$._vjType!="itype")){return _30 instanceof _31;}
if(!_30.vj$){return false;}
var clz=_30.getClass();if(_isInstanceForInterface(clz,_31)){return true;}
var id=clz.getName(),meta,tp;for(;;){meta=_TypeMeta.getById(id);if(meta){var ihs=meta._inherits;if(ihs.length==1){id=ihs[0];tp=_2.getType(id);if(!tp){break;}
if(_isInstanceForInterface(tp.clazz,_31)){return true;}}else{break;}}else{break;}}
return false;},meta:{_list:{},load:function(_36,_37){this._list[_36+"__rtti"]=_37;},get:function(_38){return this._list[_38+"__rtti"];},has:function(_39){return(this._list[_39+"__rtti"]?true:false);}}});_2.NEEDS_IMPL=function(){throw"needs implementation";};_2.METHODDEF={NAME:"METHODDEF"};_2.PROPDEF={NAME:"PROPDEF"};_2.Object=function(){this.vj$={_class:"vjo.Object",_vjType:"ctype",Object:_2.Object,_meta:{}};};_2.Object.prototype={_hashCode:-1,getClass:_getClazz,hashCode:function(){if(this._hashCode==-1){this._hashCode=++_2.Object._hashCounter;}
return this._hashCode;},equals:function(o){return(this===o);},toString:function(){return this.getClass().getName()+"@"+this.hashCode().toString(16);}};_extend(_2.Object,{vj$:{_class:"vjo.Object",_vjType:"ctype",Object:_2.Object,_meta:{}},_hashCounter:0,isInstance:function(o){return _2.isInstanceOf(o,this);}});_2.Class=function(clz,typ){this._name=clz,this._type=typ||"ctype",this._satisfied=[];this.vj$={_class:"vjo.Class",_vjType:"ctype",Class:_2.Class,_meta:{}};};_2.Class.prototype=new _2.Object();_extend(_2.Class.prototype,{getName:function(){var n=this._name;return(n?n:null);},getSimpleName:function(){var n=this.getName();var idx=n.lastIndexOf(".");if(idx!=-1){n=n.substring(idx+1);if(n){idx=n.lastIndexOf("$");if(idx>0){n=n.substring(idx+1);}}}
return n;},getPackageName:function(){var n=this.getName();if(n!=null){var i=n.lastIndexOf(".");if(i>=0){return n.substring(0,i);}}
return"";},isInterface:function(){return(this._type==="itype");},isInstance:function(obj){var tp=_2.getType(this.getName());if(tp){return _2.isInstanceOf(obj,tp);}
return false;},toString:function(){return(this.isInterface()?"interface ":"class ")+this.getName();},getClass:_getClazz,_rtti:null,_metaloaded:false,getMeta:function(){if(this._rtti==null){var err="Metadata Not Available Exception";if(this._metaloaded){throw err;}else{var _46=_2.meta.get(this._name);if(_46){this._rtti=new _2.TypeMetadata(_46());this._metaloaded=true;}else{throw err;}}}
return this._rtti;},getConstructors:function(){return this.getMeta().getConstructors();},getFields:function(){return this.getMeta().getFields();},getDeclaredFields:function(){return this.getMeta().getDeclaredFields();},getMethods:function(){return this.getMeta().getMethods();},getDeclaredMethods:function(){return this.getMeta().getDeclaredMethods();},getModifiers:function(){return this.getMeta().getModifiers();},getAnnotations:function(){return this.getMeta().getAnnotations();},getInterfaces:function(){return this.getMeta().getInterfaces();},getVjoType:function(){return _2.getType(this.getName());}});_extend(_2.Class,{create:function(nm,typ){if(!nm){return new _2.Class(nm,typ?typ:"ctype");}
var clz=_6[nm];if(!clz){_6[nm]=clz=new _2.Class(nm,typ?typ:"ctype");}
return clz;}});_extend(_2.Class,{forName:function(clz){try{var o=eval(clz);if(o&&o.clazz){return o.clazz;}}
catch(e){}
throw"Type not found for '"+clz+"'";},isInstance:function(o){return _2.isInstanceOf(o,_2.Class);},clazz:_2.Class.create("vjo.Class")});_2.Object.clazz=_2.Class.create("vjo.Object");_2.obj=function(_4d,_4e){if(!_4d){throw"Invalid type name";}
if(!_4e){return null;}
var _4f,err="Invalid type '"+_4d+"'.";try{_4f=eval(_4d);}
catch(e){throw err;}
if(!_4f){return err;}
var o=new _4f();for(var i in _4e){o[i]=_4e[i];}
return o;};_2.findType=function(_53,_54){var _55=_53;for(;;){if(_55.clazz.meta!=null&&_55.clazz.meta[_54]!=null){return _55.clazz.meta[_54];}
if(_55==_53.prototype.constructor){return;}else{_55=_53.prototype.constructor;}}};var _56=(function(){var _57={};var _58={};var _59={};var _5a=[];var _5b={};var _5c={};var _5d=[];function _addType(clz){var _5f=_57[clz];if(!_5f){_5f=[];_57[clz]=_5f;}
return _5f;}
function _execInners(clz){var ins=_5b[clz];if(ins){var len=ins.length;for(var i=0;i<len;i++){var _64=ins[i];if(_64){_64.complete();}}}
_5b[clz]=null;}
function _processNeeds(clz){var n=_59[clz];if(n){while(n.length>0){n.pop()();}
_59[clz]=null;}}
function _pushDep(clz,_68,_69){var arr=_57[clz];_68.push(clz);_69[clz]=true;if(!arr||arr.length===0){return;}
var len=arr.length,i=0;for(;i<len;i++){var key=arr[i];if(!_69[key]){_pushDep(key,_68,_69);}}
return;}
function _isCompleted(clz){return _TypeMeta._completed[clz];}
function _canCompleteInternal(clz,_6f,_70){if(_isCompleted(_6f)){return true;}
var arr=_57[_6f];if(!arr||arr.length===0){return true;}
var len=arr.length,i=0;for(;i<len;i++){var key=arr[i];if(!_2.loader.async){if(key===clz){return false;}}else{if(!_2.getType(key)){_addIncomplete(clz,key);return false;}}
if(!_70[key]){_70[key]=true;if(!_canCompleteInternal(clz,key,_70)){return false;}}}
return true;}
function _addIncomplete(clz,dep){if(!_5d[dep]){_5d[dep]=[];}
_5d[dep][_5d[dep].length]=clz;}
function _canComplete(clz){var aD=_57[clz];if(aD){var len=aD.length;if(_2.loader.async){return _canCompleteInternal(clz,clz,{});}else{var stk=_5a,len2=stk.length;for(var i=0;i<len;i++){var dep=aD[i];for(var j=0;j<len2;j++){if(stk[j]===dep){return false;}}}
if(len2>0){return _canCompleteInternal(clz,clz,{});}}}
return true;}
function _complete(_7d){_processNeeds(_7d);if(_58[_7d]){_58[_7d].complete();_58[_7d]=null;}
_execInners(_7d);_5c[_7d]=true;}
return{addDep:function(clz,dep){if(!clz){return;}
if(!_TypeMeta._completed[dep]){var aD=_addType(clz);aD[aD.length]=dep;}
if(!_2.loader.async){var stk=_5a;if(stk.length==0){stk.push(clz);}
if(stk[stk.length-1]===clz){stk.push(dep);}}},popDep:function(clz,dep){if(_2.loader.async){return;}
var stk=_5a;if(stk[stk.length-1]===dep){stk.pop();}},addInner:function(clz,fn){if(!_5b[clz]){_5b[clz]=[];}
var ins=_5b[clz];ins.push(fn);},deferNeed:function(clz,fn){var n=_59;if(!n[clz]){n[clz]=[];}
n[clz].push(fn);},processNeeds:function(clz){_processNeeds(clz);},register:function(clz,fn){_58[clz]=fn;},load:function(clz){if(!clz||_5c[clz]){return false;}
var _8f=_57[clz];if(!_2.loader.async){var stk=_5a,len=stk.length;if(len>0&&stk[len-1]===clz){stk.pop();}}
var isC=false;if(_8f&&_canComplete(clz)){var stk=[];_pushDep(clz,stk,{});while(stk.length>0){var _92=stk.pop();if(_isCompleted(_92)){continue;}
_complete(_92);}
isC=true;}
if(!_8f||_8f.length==0){_complete(clz);}
var _93=_5d[clz];if(!isC&&_93){for(var i=0,len=_93.length;i<len;i++){var itm=_93[i];if(itm==null){continue;}
if(_canComplete(itm)){_complete(itm);_93[i]=null;}}}
return true;}};})();var _96={create:function(clz,isI){isI=isI||false;if(!_isValidClz(clz)){throw"Invalid type name '"+clz+"'";}
var _99=function(){var _9a=_TypeMeta.getById(_99.vj$._meta._metaId),bConstruct=!_99.__donotconstruct;if(_7&&_9a._canDelayInit){_9a._canDelayInit=false;_9a.endType();}
if(_96.shouldAutoConstruct(this,_99,_9a)){var b=_96.createNoConstruct(_99),rv=_96.construct(b,arguments);return rv||b;}
this.constructor=_99;if(_9a&&!_9a._completed){_9a.complete();_forEach(_99.prototype,function(val,key,_9e){this[key]=val;},this);}
this.vj$=_99.vj$;var t=this.vj$._vjType;if(bConstruct&&(t=="itype"||t=="atype"||t=="mtype")){throw t+" "+this.vj$._class+" cannot be instantiated";}
_96.processInners(this,_99.vj$,_99.clazz);if(bConstruct){var val=_96.construct(this,arguments);if(val){return val;}}
return null;};_99._name="base";_99.vj$={_class:clz,_meta:{}};_99.isInstance=this.isInstanceFunc;return _99;},isInstanceFunc:function(o){return _2.isInstanceOf(o,this);},shouldAutoConstruct:function(ctx,_a3,_a4){return(!(ctx instanceof _a3)&&!_a3.__donotconstruct&&_a4&&_a4._options.autoConstruct);},createNoConstruct:function(_a5){_a5.__donotconstruct=true;var rv=new _a5();delete _a5.__donotconstruct;return rv;},needs:function(clz,_a8){if(!clz||this.vj$._meta._isInner){return this;}
var _a9=null,useAlias=false;var len=1;if(typeof clz=="string"){_a9=[clz];useAlias=(_a8)?true:false;}else{if(clz instanceof Array){_a9=clz;len=_a9.length;}else{return this;}}
for(var i=0;i<len;i++){var cl=_a9[i];var _ad=_4[cl],idx=cl.lastIndexOf("."),cn=(idx>-1)?cl.substring(idx+1):cl,tp=(_ad)?_ad.pkg[cn]:null;_56.addDep(this.vj$._class,cl);if(!tp){tp=_2.getType(cl);}
_56.popDep(this.vj$._class,cl);_96.addToNameSpace(this,tp,cl,cn,_a8,useAlias);}
return this;},needslib:function(){},addToNameSpace:function(ctx,_af,_b0,_b1,_b2,_b3){if(_b2===""){return;}
if(_af){if(this._vjType=="mtype"){return;}
if(_af.vj$&&_af.vj$._vjType=="mtype"){return;}
var nm=(_b3)?_b2:_b1,err=false;if(ctx.vj$[nm]&&ctx.vj$[nm]!==_af){if(_bOldSupport){err=true;}else{throw"Name collision with type '"+nm+"' in need list.";}}
if(!err){ctx.vj$[nm]=_af;}}else{_56.deferNeed(ctx.vj$._class,_2.curry(function(_b5,_b6,ctx){var tp=_2.getType(_b6);if(!tp||tp.vj$._vjType=="mtype"){return;}
if(ctx.vj$[_b5]&&ctx.vj$[_b5]!==tp){throw"Name collision with "+nm+"in need list.";}
ctx.vj$[_b5]=tp;},(_b3)?_b2:_b1,_b0,ctx));}},props:function(obj,_ba){for(var key in obj){if(!_isValidProp(key)){continue;}
var o=obj[key];this[key]=o;if(!o){continue;}
if(o.vj$){if(o.vj$._meta._isInner&&_96.addInner(this,o,"s_inners",key)){if(this.vj$[key]){throw"'"+key+"' in type '"+this.vj$._class+"' conflicts with needed type name";}
var _v=_createVjNS(this.vj$,key,o);o.vj$=_v;if(!this.vj$._meta._isInner){var _be=_TypeMeta.get(o);if(_be&&!_be._name){_56.addInner(this.vj$._class,_be);var rt=this.vj$._class;_96.updateInners(rt,rt+"."+key,o,true);}}}}else{if(_isFn(o)&&!o._name){o._name=key;}}}
if(obj.toString!=Object.prototype.toString){this.toString=obj.toString;}
return this;},protosHandler:function(fn,_c1){return function(){var _c2=this.base,error=false,rv,out=this.vj$.outer;_96.setBase(this,_c1);try{rv=_96.execRealFn(fn,arguments,this,_c1,out);}
catch(e){error=e;}
this.base=_c2;if(error){throw error;}
return rv;};},protos:function(obj,_c4){if(!obj){return;}
for(var key in obj){if(key==="base"){continue;}
var val=obj[key];if(!val){this.prototype[key]=val;continue;}
var _c7=this.prototype[key],isType=_isVjoType(val);if(_c7&&_96.isValidProto(key,val,_c7)&&!isType){this.prototype[key]=_96.protosHandler(val,this);}else{if(isType&&val.vj$._meta._isInner&&!this.vj$._meta._isInner){var _c8=_TypeMeta.getById(val.vj$._meta._metaId);if(_c8&&!_c8._name){_56.addInner(this.vj$._class,_c8);var rt=this.vj$._class;_96.updateInners(rt,rt+"."+key,val,false);}}
this.prototype[key]=val;}
if(isType){if(val.vj$._meta._isInner&&_96.addInner(this,val,"_inners",key)){if(this.vj$[key]){throw"'"+key+"' in type '"+this.vj$._class+"' conflicts with needed type name";}}}else{if(_isFn(val)&&!val._name){val._name=key;}}}
if(obj.toString!=Object.prototype.toString){this.prototype.toString=obj.toString;}
return this;},isValidProto:function(key,val,_cc){return(_isFn(_cc)&&key.indexOf("constructs")!=0&&(key.indexOf("_ovld")===-1||key.indexOf("_ovld")!=(key.length-5))&&!_isVjoType(_cc)&&_isFn(val));},satisfies:function(_cd,_ce){var _cf=[];if(_cd instanceof Array){_cf=_cd;}else{_cf=[_cd];}
_forEach(_cf,function(val,key,obj){var cl=_getTypeName(val),_cd;if(_isVjoType(cl)){_cd=cl;var clz=_cd.vj$._class||"",idx=clz.lastIndexOf("."),cn=(idx>-1)?clz.substring(idx+1):clz;if(cn){this.vj$[cn]=_cd;}}
var _d5=(_cd)?_cd:_2.getType(cl);if(_d5){if(!_ce){this.clazz._satisfied.push(_d5);}
for(var i in _d5){var val=_d5[i];if(_isValidProp(i)&&!this[i]){this[i]=val;}}}},this);return this;},inherits:function(_d7,isB){if(_d7==="vjo.Object"||_d7===_2.Object){if(isB){_96.createInherits(this,_2.Object);}
return this;}
_d7=_getTypeName(_d7);if(!isB&&!_isValidInh(_d7)){throw"Cannot inherit from '"+_d7+"'";}
var _d9;if(_isVjoType(_d7)){_d9=_d7;var clz=_d9.vj$._class||"",idx=clz.lastIndexOf("."),cn=(idx>-1)?clz.substring(idx+1):clz;if(cn){this.vj$[cn]=_d9;}}else{_d9=this.vj$[_d7]||_2.getType(_d7);}
if(_isVjoType(_d9)){var _db=_TypeMeta.getById(_d9.vj$._meta._metaId);if(_db&&!_db._completed){_db.complete();}
_96.createInherits(this,_d9);}
return this;},setBase:function(ctx,_dd){ctx.base=(_dd.prototype._getBase)?_dd.prototype._getBase():null;if(ctx.base){ctx.base._parent=ctx;}},createInherits:function(_de,_df){var cls=this.createNoConstruct(_df);cls.constructs=null;cls.constructor=_de;if(_df===_2.Object){cls.base=this.emptyFunc;_de.prototype=cls;cls._getBase=this.selfFunc;return;}
var _e1=_df.prototype;var _e2={};_e2.vj$=_df.vj$;if(_e1._getBase&&_e1._getBase()._constructs){_e2._constructs=true;}
cls.base=function(){var _e3=this.base,_e1=_df.prototype,gb=_e1._getBase,c=_e1.constructs;if(_e1.base){this.base=_e1.base;}
var _e4=(c)?c.toString():"",b=(_e4.indexOf("this.base(")===-1&&_e4.indexOf("this.constructs")===-1);if(gb&&gb()._constructs&&b){this.base();}
if(_e1.constructs){var _e5=this.vj$._meta._isInner;try{_96.execRealFn(_e1.constructs,arguments,this,_df,_e5);}
catch(e){throw e;}}
this.base=_e3;};cls._getBase=function(){return _e2;};var vOP=_2.Object.prototype;for(var i in _e1){if(i==="toString"){continue;}
var pt=_e1[i],bFn=_isFn(pt);if(i==="constructs"&&bFn){if(pt.length===0){_e2._constructs=true;}}else{if(_isValidInst(i)){if(bFn&&!pt.vj$&&vOP[i]!==pt&&!(pt instanceof RegExp)){var ref=this.createBaseRef(_df,pt,_de);_e2[i]=ref;if(!pt.__isChained){cls[i]=this.hasBaseCall(pt,i)?ref:this.createChainedMethod(_df,pt);cls[i].__isChained=true;}}else{if(_isVjoType(pt)&&pt.vj$._meta._isInner){var _ea=_de.vj$._meta;if(!_ea._inners){_ea._inners={};}
_ea._inners[i]=pt;}
cls[i]=pt;}}}}
if(_e2.toString!=_2.Object.prototype.toString){_e2.toString=this.createBaseRef(_df,_e1.toString,_de);}
_de.prototype=cls;},createChainedMethod:function(_eb,fn){return function(){try{if(this.vj$._vjType==="etype"){return _96.execRealFn(fn,arguments,this,_eb,true);}else{return _96.execRealFn(fn,arguments,this,_eb);}}
catch(e){throw e;}};},emptyFunc:function(){},selfFunc:function(){return this;},hasBaseCall:function(fn,key){var _ef=fn.toString();return(_ef.indexOf("this.base."+key+"(")!=-1);},createBaseRef:function(_f0,fn,der){return function(){var scp=(this._parent)?this._parent:this,rv,error=false,cbase=scp.base;_96.setBase(scp,_f0);try{rv=_96.execRealFn(fn,arguments,scp,_f0);}
catch(e){error=e;}
scp.base=cbase;if(error){throw error;}
return rv;};},updateInners:function(_f4,_f5,_f6,_f7){if(_f6&&_f6.vj$){var vj=_f6.vj$,clz=_f6.clazz;vj._class=_f5;var idx=_f5.lastIndexOf("."),snm=_f5.substring(idx+1);vj[snm]=_f6;if(clz&&_f4){if(_f5.indexOf(_f4)==0){var tmp=_f5.replace(_f4,"");while(tmp.indexOf(".")>-1){tmp=tmp.replace(".","$");}
clz._name=_f4+tmp;}else{clz._name=_f4+"$"+snm;}}
_createPkg(_f5,true).pkg[snm]=_f6;var ins=(_f7)?vj._meta.s_inners:vj._meta._inners;if(ins){_forEach(ins,function(val,key){_forEach(vj,function(val,key){if(!this[key]&&val&&val.vj$){this[key]=val;}},val.vj$);var m=_TypeMeta.getById(val.vj$._meta._metaId);if(val.vj$&&m){_56.addInner(_f4,m);}
_96.updateInners(_f4,_f5+"."+key,val,_f7);});}}},addInner:function(clz,_102,_103,key){if(!clz||!_102||!key){return false;}
var vj=_102.vj$;if(!vj){return false;}
if(_isVjoType(_102)&&vj._meta._isInner){var cvj=clz.vj$;if(!vj._class&&cvj._class){var cn=vj._class=cvj._class+"."+key;if(_102.clazz){_102.clazz._name=cn;_6[cn]=_102.clazz;}
_createPkg(cn,true).pkg[key]=_102;}
if(_103){if(!cvj._meta[_103]){cvj._meta[_103]={};}
cvj._meta[_103][key]=_102;}
return true;}
return false;},execRealFn:function(fn,args,ctx,base,_10c){var _10d=false,rv,t={vj$:ctx.vj$};if(!_10c){_fixScope((ctx.base&&ctx.base.vj$&&base.vj$._class==ctx.base.vj$._class)?ctx.base:base,ctx);}
try{rv=fn.apply(ctx,args);}
catch(e){_10d=e;}
if(!_10c){_fixScope(t,ctx);}
if(_10d){throw _10d;}
return rv;},createClazz:function(typ){var old=typ.clazz,nm=typ.vj$._class;if(old&&old._name){nm=old._name;}
typ.clazz=_2.Class.create(nm,typ.vj$._vjType);if(old){typ.clazz._satisfied=old._satisfied;}
if(typ.prototype){typ.prototype.getClass=_getClazz;}else{typ.getClass=_getClazz;}
typ.vj$.type=typ;},canCallBase:function(obj){var str=obj.constructs.toString();return obj.base&&str.indexOf("this.base(")===-1&&str.indexOf("this.constructs")===-1;},tmpFunc:function(){},construct:function(ctx,args){var c=ctx.constructs;var fn,rv,_117=false;if(ctx.base&&ctx._getBase){fn=this.tmpFunc;fn.prototype=ctx._getBase();_117=fn.prototype._constructs||false;}
if(_117&&(!c||this.canCallBase(ctx))){ctx.base();}
if(c){rv=c.apply(ctx,args);}
if(fn){ctx.base=new fn;ctx.base._parent=ctx;}
if(rv){return rv;}},processInners:function(_118,_119,_11a){var _11b=(_119)?_119._meta._inners:null;if(!_119||!_11b||_11b.length==0||!_118){return;}
for(var k in _11b){_118[k]=_2.curry(function(t,type,nm){var cn=t.vj$._class+"."+nm;var m=_TypeMeta.getById(type.vj$._meta._metaId);if(m){m.complete();}
var tp=_96.createNoConstruct(type);var _v=_createVjNS(_119,nm,type);tp.vj$=_v;tp.vj$.outer=t;_96.processInners(tp,_v,type.clazz);type.vj$._class=tp.vj$._class=cn;var s=type.prototype;if(type.clazz&&!type.clazz._name){type.clazz._name=tp.vj$._class;_6[cn]=type.clazz;}else{_96.createClazz(type);}
_96.construct(tp,Array.prototype.slice.call(arguments,3));if(tp.vj$.outer&&tp.base.vj$){var _v=_createVjNS(tp.vj$);_extend(_v,tp.base.vj$);tp.base.vj$=_v;}
return tp;},_118,_11b[k],k);_118[k]._outer=_118;_118[k].vj$=_11b[k].vj$;}}};var _125=(typeof console!="undefined");_extend(_2,{sysout:{print:function(){if(_125){console.info.apply(this,arguments);}},println:function(){if(_125){console.info.apply(this,arguments);}},printStackTrace:function(){}},syserr:{print:function(){if(_125){console.warn.apply(this,arguments);}},println:function(){if(_125){console.warn.apply(this,arguments);}},printStackTrace:function(){}},jsunit:{assertEquals:function(){},assertTrue:function(){},assertFalse:function(){},assertNotNull:function(){}}});function _TypeMeta(name,kind,cfg){this._needs=[];this._props=null;this._protos=null;this._satisfies=[];this._mixins=[];this._inherits=[];this._globals=null;this._inits=null;this._expects=[];this._completed=(kind==="type")?true:false;this._isInner=(name)?false:true;this._name=name;this._kind=kind;this._options={autoConstruct:true};this.init(cfg);this.setup();}
_TypeMeta.prototype={init:function(cfg){this._cfg={satisfiesFn:_96.satisfies,inheritsFn:_96.inherits,protosFn:_96.protos,postDefFn:_96.tmpFunc,typeDef:null,baseType:"vjo.Object"};if(cfg){_extend(this._cfg,cfg);}},setup:function(){var id=this._name;var t=this._type=this._cfg.typeDef||_96.create(id,"itype"===this._kind);t.vj$._vjType=this._kind||"ctype";this._canDelayInit=true;if(this._isInner){id=_TypeMeta.id();t.vj$._meta._isInner=true;}else{var pObj=_createPkg(id);if(!pObj.pkg[pObj.className]){pObj.pkg[pObj.className]=this._type;}
t.vj$[pObj.className]=t;_56.register(id,this);this._isDup=(_TypeMeta.getById(id)!=null);}
if(!this._isDup){_TypeMeta.put(this,id);}
t._inherits=null;_96.createClazz(t);t.vj$._meta._metaId=id;},needs:function(need,_12e){_96.needs.apply(this._type,arguments);return this;},singleton:function(){return this;},options:function(opts){if(opts){for(var k in opts){this._options[k]=opts[k];}}
return this;},makeFinal:function(){return this;},satisfies:function(type){var clzs=[];if(type instanceof Array){clzs=type;}else{clzs=[type];}
_forEach(clzs,function(val,key,obj){var _136=_getTypeName(val);this.needs(_136);_96.needs.call(this._type,_136);this._satisfies.push(val);},this);return this;},props:function(_137){this._canDelayInit=false;if(this._props){throw"multiple props blocks are not allowed";}
this._props=_137;_96.props.apply(this._type,arguments);return this;},protos:function(_138){if(this._protos){throw"multiple protos blocks are not allowed";}
this._protos=_138;return this;},inherits:function(type){var clzs=[];if(type instanceof Array){clzs=type;}else{clzs=[type];}
_forEach(clzs,function(val,key,obj){var _13e=_getTypeName(val);this.needs(_13e);this._inherits.push(val);},this);return this;},mixin:function(type){var clzs=[];if(type instanceof Array){clzs=type;}else{clzs=[type];}
_forEach(clzs,function(val,key,obj){var _144=_getTypeName(val);this.needs(_144);this._mixins.push(val);},this);return this;},inits:function(fn){this._canDelayInit=false;this._inits=fn;return this;},globals:function(obj){this._canDelayInit=false;this._globals=obj;return this;},validateAndMerge:function(_147,_148){var p=(_148)?_147[_148]:_147;return function(val,key,obj){if(p[key]){throw"collision when mixing in '"+key+"' into "+this._name;}else{p[key]=val;}};},mergeMixins:function(_14d){var mxns=this._mixins;for(var i=0;i<mxns.length;i++){var m=_2.getType(mxns[i]);if(!m||!m.vj$||m.vj$._vjType!="mtype"){throw mxns[i]+"is not a valid mtype.";}
var exp=m._expects;sats=m._satisfiers;if(!this._protos){this._protos={};}
if(!this._props){this._props={};}
_copyNS(m.vj$,this._type.vj$);var nm=m.vj$._class,idx=nm.lastIndexOf(".");var clz=(idx!=-1)?nm.substring(idx+1):nm;if(!this._type.vj$[clz]){this._type.vj$[clz]=this._type;}else{throw clz+" is already defined in the current namespace";}
_forEach(m._protos,this.validateAndMerge(this,"_protos"),this);_forEach(m._props,this.validateAndMerge(_14d,"_props"),this);for(var j=0;j<sats.length;j++){this._satisfies.push(sats[i]);}
if(exp){this._expects.push(exp);}}},completeSatisfies:function(){if(this._satisfies.length>0){this._cfg.satisfiesFn.call(this._type,this._satisfies);}
if(this._expects.length>0){this._cfg.satisfiesFn.call(this._type,this._expects,true);}},completeInherits:function(){var ilen=this._inherits.length;if(ilen>0){if(this._kind!="itype"&&ilen>1){throw"type can only inherit from one type";}
for(var i=0;i<ilen;i++){this._cfg.inheritsFn.call(this._type,this._inherits[i]);}}else{if(this._kind!="itype"){this._cfg.inheritsFn.call(this._type,this._cfg.baseType,true);}}},completeDef:function(){if(this._protos){this._cfg.protosFn.call(this._type,this._protos);}
this._cfg.postDefFn.call(this);if(this._globals&&!this._isDup){this.__initGbs(this._globals);}
if(this._inits&&!this._isDup){this._inits.call(this._type);}},__initGbs:function(obj){_forEach(obj,function(val,key){if(this[key]&&this[key]!==val){throw key+" is already defined in the current namespace";}
if(val!=_2.METHODDEF||val!=_2.PROPDEF){this[key]=val;}},_3);},complete:function(){if(this._completed){return this;}
this._completed=true;_TypeMeta._completed[this._name]=true;_updateInnerEtypes(this._type.vj$);if(this._mixins.length>0){var p={_props:{}};this.mergeMixins(p);_96.props.call(this._type,p._props);}
this.completeSatisfies();this.completeInherits();this.completeDef();return this;},typesAvail:function(list){for(var i=0;i<list.length;i++){if(!_isVjoType(list[i])){return false;}}
return true;},canComplete:function(){var b=(this._inits==null)&&this.typesAvail(this._inherits);if(b){b=this.typesAvail(this._satisfies);}
if(b){b=this.typesAvail(this._mixins);}
return b;},endType:function(){if(!this._isInner){if(_7&&this._canDelayInit){return this._type;}
_56.load(this._name);if(_2.validateType){_2.validateType(this._type);}}else{if(this.canComplete()){this.complete();}}
return this._type;}};_extend(_TypeMeta,{_count:0,_pre:"tmp",_reg:{},_completed:{},id:function(){return this._pre+this._count++;},put:function(meta,id){var nm=(id)?id:this._pre+this._count++;this._reg[nm]=meta;},get:function(type){var _162;if(_isVjoType(type)){return this._reg[type.vj$._meta._metaId];}else{if(_162=_2.getType(type)){return this._reg[_162.vj$._meta._metaId];}else{return this._reg[type];}}},getById:function(id){return this._reg[id];}});_2.ctype=function(clz){clz=_getTypeName(clz);var t=new _TypeMeta(clz);return t;};_2.type=function(clz){clz=_getTypeName(clz);var t=new _TypeMeta(clz,"type");t.inits=function(fn){if(fn&&!this._isDup){fn.call(this._type);}
return this;};t.props=function(_169){_96.props.apply(this._type,arguments);return this;};t.protos=function(_16a){_96.protos.apply(this._type,arguments);return this;};t.inherits=function(clz){_96.inherits.apply(this._type,arguments);return this;};t.satisfies=function(clz){_96.satisfies.apply(this._type,arguments);return this;};return t;};_2.itype=function(clz){clz=_getTypeName(clz);var t=new _TypeMeta(clz,"itype",{inheritsFn:function(_16f){var type=(this.vj$[_16f])?this.vj$[_16f]:(this.vj$.b&&this.vj$.b[_16f])?this.vj$.b[_16f]:_2.getType(_16f);if(type){for(var i in type){var val=type[i];if(_isValidProp(i)&&!this[i]){this[i]=val;}}}
return this;}});t._type.isInstance=function(obj){return _2.isInstanceOf(obj,this);};return t;};_2.atype=_2.ctype;function _MType(clz){function _addMixinMethods(to,_176,ns){if(!_176||typeof _176!="object"){return;}
var b=true;for(var i in _176){b=false;if(!reservedMProp[i]){to[i]=_176[i];}}
return b;}
var t=this;t.vj$={_vjType:"mtype",_class:clz,_meta:{}};t._props=null;t._protos={};t._expects="";t._satisfiers=[];t.needs=function(){return _96.needs.apply(this,arguments);};t.props=function(_17b){var p=this._props||{};if(!_addMixinMethods(p,_17b,this.vj$)){if(!this._props){this._props=p;}}
return this;};t.protos=function(_17d){if(_17d&&_17d["constructs"]){throw"mtype cannot have constructs block";}
_addMixinMethods(this._protos,_17d,this.vj$);return this;};t.expects=function(clz){this._expects=_2.getType(clz);return this;};t.satisfies=function(clz){var clzs=[];if(clz instanceof Array){clzs=clz;}else{clzs=[clz];}
_forEach(clzs,function(val,key,obj){var _184=_getTypeName(val);this.needs(_184);this._satisfiers.push(val);},this);return this;};t.endType=function(){if(this.vj$._class){_56.load(this.vj$._class);}
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
en.prototype.constructs=null;return this;};return t;};_2.otype=function(clz){return{defs:function(defs){return this;},endType:function(){}};};var _199={},reservedProto={},reservedMProp={},reservedClz={},reservedInh={};_forEach("props protos inherits prototype inits satisfies mixin _inherits _satisfiers singleton isInstance vj$".split(" "),function(val,key,obj){this[val]=true;},_199);_forEach("constructs getClass _getBase base vj$".split(" "),function(val,key,obj){this[val]=true;},reservedProto);_forEach("props protos _props _protos vj$ _expects expects _satisfiers satisfies endType".split(" "),function(val,key,obj){this[val]=true;},reservedMProp);_forEach("vjo.Class vjo.Object".split(" "),function(val,key,obj){this[val]=true;},reservedClz);function _isVjoType(clz,_1a7){if(clz&&clz.vj$&&clz.vj$._vjType){if(_isFn(clz)){return true;}else{if(clz.vj$._vjType==="mtype"&&!_1a7){return true;}}}
return false;}
function _isInstanceForInterface(_1a8,_1a9){var clz=_1a8,arr=clz._satisfied;for(var i=0;i<arr.length;i++){if(_isInterfaceInstanceOf(_1a9,arr[i])){return true;}}
return false;}
function _isInterfaceInstanceOf(src,_1ad){if(src===_1ad){return true;}
var meta=_TypeMeta.getById(_1ad.vj$._meta._metaId),inhs;if(meta&&(inhs=meta._inherits)){for(var i=0;i<inhs.length;i++){var _1b0=_getTypeName(inhs[i]);if(src===_2.getType(_1b0)){return true;}}}
return false;}
function _createPkg(_1b1,_1b2){if(!_1b1){return null;}
var _1b3=_4[_1b1];if(_1b3){return _1b3;}
var _1b4=_1b1.split("."),len=_1b4.length;if(_1b2){_1b3={pkg:{className:_1b4[len-1]}};}else{var pkg=(_1b4[0]=="vjo")?_5:this;for(var i=0;i<len-1;i++){var name=_1b4[i];var sub=pkg[name];if(!sub){pkg[name]=sub={};}
pkg=sub;}
_1b3={pkg:pkg,className:(len>0)?_1b4[len-1]:""};}
_4[_1b1]=_1b3;return _1b3;}
function _createEnum(){if(_isFn(_2.Enum)){return;}
var nm="vjo.Enum";var _1ba=_2.ctype(nm).props({from:function(){if(arguments.length==0||arguments.length>2){return this._nativeValueOf.apply(this,arguments);}
var s=arguments[0];if(arguments.length==2){s=arguments[1];if(s){var clz=arguments[0];try{var n=clz.getName();while(n.indexOf("$")>0){n=n.replace("$",".");}
var o=eval(n);if(o[s]){return o[s];}}
catch(a){}}
throw"No enum const "+arguments[0].getName()+"."+s;}else{if(this[s]){return this[s];}}
throw"No enum const "+s;}}).protos({_name:null,_ord:-1,constructs:function(){throw"cannot instantiate 'vjo.Enum'";},name:function(){return this._name;},ordinal:function(){return this._ord;},compareTo:function(o){if(o==null){throw"compare to Etype value cannot be null";}
return(this.ordinal()-o.ordinal());},equals:function(o){return(this===o);},getDeclaringClass:function(){var _1c1=this.getClass();return _1c1;}}).endType();_1ba._nativeValueOf=_1ba.valueOf;_1ba.valueOf=_2.Enum.from;reservedClz[nm]=true;reservedInh[nm]=true;}
function _getClazz(){var n=clz=this.vj$._class,idx=n.lastIndexOf(".");if(idx!=-1){clz=n.substring(idx+1);}
if(this.vj$[clz]){return this.vj$[clz].clazz;}
return null;}
function _updateInnerEtypes(_1c3){if(!_1c3._class){return;}
var _1c4=_1c3._meta;if(_1c4.s_inners){for(var k in _1c4.s_inners){if(_1c4.s_inners[k].vj$._vjType=="etype"){for(var i=0;i<_1c4.s_inners[k]._enums.length;i++){_1c4.s_inners[k]._enums[i].vj$=_1c4.s_inners[k].vj$;_updateInnerEtypes(_1c4.s_inners[k]._enums[i].vj$);}}
_updateInnerEtypes(_1c4.s_inners[k].vj$);}}
if(_1c4._inners){for(var k in _1c4._inners){if(_1c4._inners[k].vj$._vjType=="etype"){if(!_1c4._inners[k].vj$._class){_1c4._inners[k].clazz._name=_1c4._inners[k].vj$._class=_1c4._class+"."+k;}
for(var i=0;i<_1c4._inners[k]._enums.length;i++){_1c4._inners[k]._enums[i].vj$=_1c4._inners[k].vj$;_updateInnerEtypes(_1c4._inners[k]._enums[i].vj$);}}
_updateInnerEtypes(_1c4._inners[k].vj$);}}}
function _hasCollisionWithMixin(type,name,_1c9){var mxns=type.vj$._meta.mixins;if(!mxns||mxns.length==0){return false;}
for(var i=0;i<mxns.length;i++){var mxn=mxns[i];if(_1c9){if(mxn._props&&mxn._props[name]){return true;}}else{if(mxn._protos[name]){return true;}}}
return false;}
function _isValidInst(_1cd){return!(reservedProto[_1cd]===true);}
function _isValidClz(_1ce){return!(reservedClz[_1ce]===true);}
function _isValidInh(_1cf){return!(reservedInh[_1cf]===true);}
function _extend(_1d0,_1d1){for(var name in _1d1){var copy=_1d1[name];if(copy!==undefined){_1d0[name]=copy;}}
if(_1d1.toString!=Object.prototype.toString){_1d0.toString=_1d1.toString;}}
function _forEach(_1d4,_1d5,_1d6){if(!_1d4){return;}
if(!_2.isArray(_1d4)){for(var name in _1d4){if(_1d5.call(_1d6,_1d4[name],name,_1d4)===false){break;}}}else{for(var i=0,len=_1d4.length;i<len;i++){if(_1d5.call(_1d6,_1d4[i],i,_1d4)===false){break;}}}
return _1d4;}
function _createVjNS(ns,name,type){var rv={};_extend(rv,ns);if(name&&type){delete rv._meta;_extend(rv,type.vj$);rv[name]=type;}
return rv;}
function _copyNS(from,to){_forEach(from,function(val,key){if(key!="type"&&_isVjoType(val,true)){if(this[key]&&this[key]!==val){throw key+" is already defined in the current namespace";}
this[key]=val;}},to);}
function _isInnerClass(clz){if(!clz){return true;}else{if(clz.indexOf(".")==-1){return false;}}
var tp=clz;while((i=tp.lastIndexOf("."))>0){tp=tp.substring(0,i);if(_4[tp]){return true;}}
return false;}
function _isFn(fn){return typeof fn=="function";}
function _isValidProp(pVal){return!(_199[pVal]===true);}
function _fixScope(from,to){to.vj$=from.vj$;}
function _getTypeName(name){if(typeof name!="string"){return name;}
var idx=name.indexOf("<");if(idx>0){var idx2=name.indexOf(" ");if(idx2>0&&idx2<idx){idx=idx2;}
name=name.substring(0,idx);}
return name;}}).apply(this);

vjo.ctype("vjo.dsf.error.Error").protos({constructs:function(_1,_2,_3){this.message=_1;this.url=_2;this.lineNumber=_3;this.userAgent=navigator.userAgent;}}).endType();

vjo.ctype("vjo.dsf.error.ErrorHandlerManager").needs("vjo.dsf.error.Error").props({dsfErrors:[],handlers:[],add:function(_1,_2,_3){this.dsfErrors[this.dsfErrors.length]=new vjo.dsf.error.Error(_1,_2,_3);return true;},convertErrorTo:function(_4){var _5=_4?"<br>":"\n";var _6=_4?"<html><title>":"";var _7=_4?"</title><body>":_5;var _8=_4?"</body></html>":"";var _9=_4?"<h2>":"";var _a=_4?"</h2>"+_5:_5;var _b=_4?"<b>":"";var _c=_4?"</b>":"";var _d=_6+"V4 JS Errors"+_7;_d+=_9+"Total number of errors = "+this.dsfErrors.length+_a;for(var i=0;i<this.dsfErrors.length;i++){_d+=_b+"Message: "+_c+this.dsfErrors[i].message;_d+=_5;_d+=_b+"URL :"+_c+this.dsfErrors[i].url;_d+=_5;_d+=_b+"Line Number :"+_c+this.dsfErrors[i].lineNumber;_d+=_5;_d+=_b+"User Agent :"+_c+this.dsfErrors[i].userAgent;_d+=_5;_d+=_5;}
_d+=_8;return _d;},toHTML:function(){return this.convertErrorTo(true);},toText:function(){return this.convertErrorTo(false);},show:function(){var _f=window.open("","V4JSErrors","height=500,width=500,menubar=no,status=no,scrollbars=yes");if(window.focus){_f.focus();}
_f.document.write(this.toHTML());_f.document.close();},register:function(_10){if(!_10){return this;}
if(typeof _10!="object"){return this;}
this.handlers[this.handlers.length]=_10;return _10;},clear:function(){this.handlers.length=0;},process:function(_11,_12,_13){for(var i=0;i<this.handlers.length;i++){this.handlers[i].handle(_11,_12,_13);}},enableOnError:function(_15){if(typeof(_15)=="undefined"){_15=true;}
window.onerror=function(_16,url,_18){vjo.dsf.error.ErrorHandlerManager.process(_16,url,_18);return _15;};}}).endType();

vjo.ctype("vjo.dsf.error.DefaultErrorHandler").needs("vjo.dsf.error.ErrorHandlerManager","M").protos({constructs:function(){},handle:function(_1,_2,_3){this.vj$.M.add(_1,_2,_3);}}).endType();

vjo.ctype("vjo.dsf.Event").protos({src:null,eventType:null,nativeEvent:null,constructs:function(_1,_2,_3){this.src=_1;this.eventType=_2;this.nativeEvent=_3;}}).endType();

vjo.ctype("vjo.dsf.Message").protos({objType:"dsf_Message",trspType:"",svcId:"",request:null,response:null,status:null,svcConfig:null,stok:"",pId:"",constructs:function(){var a=arguments,l=a.length;if(l==1){this.svcId=a[0];}else{if(l==2){this.svcId=a[0]+"."+a[1];this.svcName=a[0];this.opName=a[1];}}
this.rawRequest=this.trace="";this.clientContext={};this.trspType="InProc";this.returnData=true;this.v="0";this.headers=null;}}).endType();

vjo.itype("vjo.dsf.ITransport").protos({handleRequest:function(_1,_2){}}).endType();

vjo.ctype("vjo.dsf.ServiceResponse").protos({objType:undefined,errors:undefined,data:undefined,constructs:function(){this.errors=[];},addError:function(_1){if(this.errors){this.errors[this.errors.length]=_1;}}}).endType();

vjo.ctype("vjo.dsf.InProcReqtHdl").satisfies("vjo.dsf.ITransport").needs("vjo.dsf.ServiceResponse").needs("vjo.dsf.Message").protos({constructs:function(){this.svcHdls={};},registerSvcHdl:function(_1,_2){this.svcHdls[_1]=_2;},getSvcHdl:function(_3){return this.svcHdls[_3];},handleRequest:function(_4,_5){if(!_4.response){_4.response=new vjo.dsf.ServiceResponse();}
var _6=this.svcHdls[_4.svcId];if(_6){_4.response.data=_6.invoke(_4);}
if(typeof _4.status=="undefined"||_4.status==null){_4.status=1;}}}).endType();

vjo.ctype("vjo.dsf.Error").protos({id:undefined,message:undefined,constructs:function(_1,_2){this.id=_1;this.message=_2;}}).endType();

vjo.ctype("vjo.dsf.SvcErr").needs("vjo.dsf.Error").needs("vjo.dsf.Message").props({InvRsp:"InvalidRsp",InvRqBnd:"RqInvalidBnd",InvRspBnd:"RspInvalidBnd",InvRq:"InvalidRequest",TO:"TimedOut",RqUnk:"Client.Request.UnknownError",SvcRq:"SYS.SVC_REQUEST_ERROR",SvcRsp:"SYS.SVC_RESPONSE_ERROR",GlbRq:"SYS.GLOBAL_REQUEST_ERROR",GlbRsp:"SYS.GLOB_RESPONSE_ERROR",TrnRq:"SYS.TRANS_REQUEST_ERROR",TrnRsp:"SYS.TRANS_RESPONSE_ERROR",Prs:"SYS.JSON_PARSE_ERROR",SvcPrc:"SYS.DARWIN_SERVICE_PROTOCOL_ERROR",err:function(_1,_2,_3){_1.response.addError(new vjo.dsf.Error(_2,_3));}}).endType();

vjo.ctype("vjo.dsf.ServiceRegistry").needs("vjo.dsf.ITransport").props({t:[],b:[],getBinding:function(_1){return this.b[_1];},getTransport:function(_2){return this.t[_2];},registerBinding:function(_3,_4){if(_3&&_4){this.b[_3]=_4;return true;}
return false;},registerTransport:function(_5,_6){if(_5&&_6){if(vjo.isInstanceOf(_6,vjo.dsf.ITransport)){if(null==this.t[_5]){this.t[_5]=_6;return true;}}}
return false;}}).endType();

vjo.ctype("vjo.dsf.RemoteReqtHdl").satisfies("vjo.dsf.ITransport").needs(["vjo.dsf.SvcErr","vjo.dsf.ServiceRegistry","vjo.dsf.ServiceResponse","vjo.dsf.ServiceEngine"]).protos({handleRequest:function(_1,_2){_1.response=new vjo.dsf.ServiceResponse();if(!_1.svcConfig){vjo.dsf.SvcErr.err(_1,vjo.dsf.SvcErr.InvRq,"message.svcConfig is undefined");return;}
var _3=vjo.dsf.ServiceRegistry.getBinding(_1.svcConfig.reqtMarshalling);if(_3){_3.serialize(_1);}else{vjo.dsf.SvcErr.err(_1,vjo.dsf.SvcErr.InvRqBnd,"reqtMarshalling="+_1.svcConfig.reqtMarshalling);}
this.invoke(_1);},invoke:function(_4){var tT=((_4.svcConfig.respMarshalling=="JSCALLBACK")?"JSONP":"XHR");var t=vjo.dsf.ServiceRegistry.getTransport(tT);if(t){t.handleRequest(_4,this.callback);}},callback:function(_7){try{var _8=vjo.dsf.ServiceRegistry.getBinding(_7.svcConfig.respMarshalling);if(_8){_8.deserialize(_7);}else{vjo.dsf.SvcErr.err(_7,vjo.dsf.SvcErr.InvRspBnd,"marshalling="+_7.svcConfig.respMarshalling+":responseText="+_7.response);}}
catch(e){vjo.dsf.SvcErr.err(_7,vjo.dsf.SvcErr.InvRsp,"marshalling="+_7.svcConfig.respMarshalling+":responseText="+_7.response);}
vjo.dsf.ServiceEngine.handleResponse(_7);}}).endType();

vjo.ctype("vjo.dsf.SvcConfig").protos({objType:null,url:null,method:null,reqtMarshalling:null,respMarshalling:null,async:true,timeout:0,operationName:null,typeMappingClassName:null,constructs:function(_1,_2){this.objType="dsf_SvcConfig";this.svcType=null;this.url=_2;this.method=_1;this.reqtMarshalling="raw";this.respMarshalling="raw";this.async=true;this.timeout=0;}}).endType();

vjo.ctype("vjo.dsf.XDomainRequest").satisfies("vjo.dsf.ITransport").needs(["vjo.dsf.EventDispatcher","vjo.dsf.ServiceEngine"]).props({callbacks:[],sCallbackName:"callback",sPreId:"xdr_",sPreExtId:"xdr_ext_",iCount:0,bUseIframe:(navigator.userAgent.indexOf("Firefox")>0),bodyLoaded:false,onLoad:function(){this.bodyLoaded=true;},getReqDiv:function(){return document.getElementsByTagName(this.bodyLoaded?"body":"head")[0];},send:function(_1){if(!document.createElement||!_1){return;}
var _2="",eid="",rdm="_vrdm="+(new Date()).getTime();if(typeof _1=="string"){_2=_1;eid=this.sPreExtId+this.iCount++;}else{if(_1.objType=="dsf_Message"&&_1.svcConfig){var cb=this.createCallback(_1);eid=this.sPreId+this.callbacks[this.callbacks.length-1];_2=_1.svcConfig.url+"&callback="+cb;}}
var _4=null,doc;doc=document;var _5=this.createElement("script");_5.async=true;_5.defer=true;_5.id=eid;_5.type="text/javascript";var _6=true;if(arguments.length>1){_6=arguments[1];}
if(_6){_2=_2+((_2.indexOf("?")==-1)?"?":"&")+rdm;}
_5.src=_2;this.getReqDiv().appendChild(_5);return eid;},createCallback:function(_7){var _8=this.callbacks.length,name=this.sCallbackName+_8,eid=this.sPreId+name;this.callbacks[_8]=name;this[name]=function(_9){vjo.dsf.XDomainRequest.loaded(eid);_7.response=_9;vjo.dsf.ServiceEngine.handleResponse(_7);};var _a="",rv=((_a)?_a+".":"")+"vjo.dsf.XDomainRequest."+name;return rv;},loaded:function(_b){var e=document.getElementById(_b);if(e!==null){e.parentNode.removeChild(e);}},createElement:function(_d){return(typeof(createElementV4)!="undefined")?createElementV4(_d):document.createElement(_d);}}).protos({handleRequest:function(_e,_f){vjo.dsf.XDomainRequest.send(_e);}}).inits(function(){vjo.dsf.EventDispatcher.addEventListener(window,"load",this.onLoad,this);}).endType();

vjo.ctype("vjo.dsf.ServiceEngine").needs(["vjo.dsf.InProcReqtHdl","vjo.dsf.RemoteReqtHdl","vjo.dsf.ServiceResponse","vjo.dsf.SvcConfig","vjo.dsf.XDomainRequest","vjo.dsf.Error","vjo.dsf.ServiceRegistry","vjo.dsf.SvcErr"]).props({STATUS:{ABORT:-1,JUMP:1},E:null,svcReqtHdls:null,svcRespHdls:null,glbReqtHdls:null,glbRespHdls:null,trspReqtHdls:null,trspRespHdls:null,svcHdls:null,inProcHdl:null,remoteHdl:null,init:function(){this.svcReqtHdls=[];this.svcRespHdls=[];this.glbReqtHdls=[];this.glbRespHdls=[];this.trspReqtHdls=[];this.trspRespHdls=[];this.inProcHdl=new this.vj$.InProcReqtHdl();this.remoteHdl=new this.vj$.RemoteReqtHdl();this.E=this.vj$.SvcErr;vjo.dsf.ServiceRegistry.registerTransport("JSONP",new vjo.dsf.XDomainRequest());},handleRequest:function(m){var rt,ab=this.STATUS.ABORT;if((m.status!=ab)&&typeof rt=="undefined"){rt=this.processServiceRequestHandlers(m);}
if((m.status!=ab)&&typeof rt=="undefined"){rt=this.processGlobalRequestHandlers(m);}
if((m.status!=ab)&&typeof rt=="undefined"){this.processTransportHandlers(m);}
if((m.status!=ab)&&("Remote"!=m.trspType||typeof rt!="undefined")){this.handleResponse(m,rt);}
return m.returnData;},processServiceRequestHandlers:function(_4){var rt,_6=this.svcReqtHdls[_4.svcId];if(_6){try{for(var i=0,len=_6.length;i<len;i++){_4.trace=_4.trace+"-->svcReqtHdl_"+i;_6[i].handleRequest(_4);if(_4.status==this.STATUS.JUMP){rt="SVC";this.err(_4,this.E.SvcRq,this.E.SvcRq);break;}}}
catch(e){rt="SVC";this.err(_4,this.E.SvcRq,this.E.SvcRq);}}
return rt;},processGlobalRequestHandlers:function(_8){var rt;if(_8.status!=this.STATUS.JUMP){try{for(var i=0,len=this.glbReqtHdls.length;i<len;i++){_8.trace=_8.trace+"-->glbReqtHdl_"+i;this.glbReqtHdls[i].handleRequest(_8);if(_8.status==this.STATUS.JUMP){rt="GLB";this.err(_8,this.E.GlbRq,this.E.GlbRq);break;}}}
catch(e){rt="GLB";this.err(_8,this.E.GlbRq,this.E.GlbRq);}}
return rt;},processTransportHandlers:function(_b){if(_b.status!=this.STATUS.JUMP&&_b.trspType){var _c=vjo.dsf.ServiceRegistry.getTransport(_b.trspType);if(_c){_c.handleRequest(_b,this.handleResponse);}else{var _d=this.trspReqtHdls[_b.trspType];if(_d){try{for(var i=0,len=_d.length;i<len;i++){_b.trace=_b.trace+"-->trspReqtHdl_"+i;_d[i].handleRequest(_b);if(_b.status==this.STATUS.JUMP){this.err(_b,this.E.TrnRq,this.E.TrnRq);break;}}}
catch(e){this.err(_b,this.E.TrnRq,this.E.TrnRq);}}
if(_b.status!=this.STATUS.JUMP&&_b.status!=vjo.dsf.ServiceEngine.STATUS.ABORT){if(_b.trspType=="undefined"){this.err(_b,this.E.TrnRq,this.E.TrnRq);}else{if("InProc"===_b.trspType){this.inProcHdl.handleRequest(_b);}else{if("Remote"===_b.trspType){this.remoteHdl.handleRequest(_b);}}}}}}},handleResponse:function(_f,_10){if(_f.trspType!="undefined"&&_f.trspType&&typeof _10=="undefined"){this.processTransResponseHandlers(_f);}
if(_10!="SVC"){this.processGlobalResponseHandlers(_f);}
this.processServiceResponseHandlers(_f);},processTransResponseHandlers:function(msg){var _12=this.trspRespHdls[msg.trspType];try{if(_12){for(var i=_12.length-1;i>=0;i--){msg.trace=msg.trace+"-->trspRespHdl_"+i;_12[i].handleResponse(msg);}}}
catch(e){this.err(msg,this.E.TrnRsp,this.E.TrnRsp);}},processGlobalResponseHandlers:function(msg){try{for(var i=this.glbRespHdls.length-1;i>=0;i--){msg.trace=msg.trace+"-->glbRespHdl_"+i;this.glbRespHdls[i].handleResponse(msg);}}
catch(e){this.err(msg,this.E.GlbRsp,this.E.GlbRsp);}},processServiceResponseHandlers:function(msg){var _17;if(msg.clientContext){_17=msg.clientContext.svcApplier;}
try{if(_17){if(typeof _17.onResponse=="function"){_17.onResponse(msg);}else{if(typeof _17=="function"){_17(msg);}}}}
catch(e){this.err(msg,this.E.SvcRsp,this.E.SvcRsp);}
var _18=this.svcRespHdls[msg.svcId];if(_18){try{for(var i=_18.length-1;i>=0;i--){msg.trace=msg.trace+"-->svcRespHdl_"+i;_18[i].handleResponse(msg);}}
catch(e){this.err(msg,this.E.SvcRsp,this.E.SvcRsp);}}},createHandler:function(_1a,_1b){if(typeof _1a[_1b]!="function"){if(typeof _1a=="function"){var _1c=_1a,obj={},self=this;obj[_1b]=function(){return _1c.apply(self,arguments);};_1a=obj;}}
return _1a;},registerSvcHdl:function(_1d,_1e){if(!_1d||!_1e){return;}
_1e=this.createHandler(_1e,"invoke");this.inProcHdl.registerSvcHdl(_1d,_1e);},getSvcHdl:function(_1f){return this.inProcHdl.getSvcHdl(_1f);},registerSvcReqtHdl:function(_20,_21){if(!_20||!_21){return;}
if(!this.svcReqtHdls){this.init();}
if(typeof this.svcReqtHdls[_20]=="undefined"){this.svcReqtHdls[_20]=[];}
var _22=this.svcReqtHdls[_20];_22[_22.length]=this.createHandler(_21,"handleRequest");},registerSvcRespHdl:function(_23,_24){if(!_23||!_24){return;}
if(typeof this.svcRespHdls[_23]=="undefined"){this.svcRespHdls[_23]=[];}
var _25=this.svcRespHdls[_23];_25[_25.length]=this.createHandler(_24,"handleResponse");},registerGlbReqtHdl:function(_26){if(!_26){return;}
this.glbReqtHdls[this.glbReqtHdls.length]=this.createHandler(_26,"handleRequest");},registerGlbRespHdl:function(_27){if(!_27){return;}
this.glbRespHdls[this.glbRespHdls.length]=this.createHandler(_27,"handleResponse");},registerTrspReqtHdl:function(_28,_29){if(!_28||!_29){return;}
if(typeof this.trspReqtHdls[_28]=="undefined"){this.trspReqtHdls[_28]=[];}
if(!vjo.dsf.ServiceRegistry.registerTransport(_28,_29)){var _2a=this.trspReqtHdls[_28];_2a[_2a.length]=this.createHandler(_29,"handleRequest");}},registerTrspRespHdl:function(_2b,_2c){if(!_2b||!_2c){return;}
if(typeof this.trspRespHdls[_2b]=="undefined"){this.trspRespHdls[_2b]=[];}
var _2d=this.trspRespHdls[_2b];_2d[_2d.length]=this.createHandler(_2c,"handleResponse");},err:function(msg,_2f,_30){if(!msg.response){msg.response=new vjo.dsf.ServiceResponse();}
if(msg.response.addError){msg.response.addError(new vjo.dsf.Error(_2f,_30));}else{msg.response.addError=vjo.dsf.ServiceResponse.prototype["addError"];if(msg.response.addError){msg.response.addError(new vjo.dsf.Error(_2f,_30));}}},register:function(_31,_32,_33){var _s=vjo.dsf.ServiceEngine;switch(_31){case 0:_s.registerSvcHdl(_32,_33);break;case 1:_s.registerSvcReqtHdl(_32,_33);break;case 2:_s.registerGlbReqtHdl(_32,_33);break;case 3:_s.registerTrspReqtHdl(_32,_33);break;case 4:_s.registerSvcRespHdl(_32,_33);break;case 5:_s.registerGlbRespHdl(_32,_33);break;case 6:_s.registerTrspRespHdl(_32,_33);break;}}}).inits(function(){this.init();}).endType();

vjo.ctype("vjo.dsf.Element").props({get:function(_1){return document.getElementById(_1);},toggleHideShow:function(_2,_3){var e=this.get(_2),s,d,u="undefined";if(e){s=e.style;d=s.display;if(typeof(_3)===u){_3=(d===""||d==="block")?false:true;}
e.bIsShown=_3;s.display=(_3)?"block":"none";}},promoteToBody:function(_5){var e=this.get(_5),b=document.body;if(e&&b&&e.parentNode&&(e.parentNode!==b)){e.parentNode.removeChild(e);b.appendChild(e);}},toggleVisibility:function(_7,_8){var e=this.get(_7),v,s,u="undefined";if(e){s=e.style;v=s.visibility;if(typeof(_8)===u){_8=(v==="")?false:true;}
e.bIsVisible=_8;s.visibility=(_8)?"":"hidden";}},enable:function(_a,_b){var e=this.get(_a);if(e){e.disabled=!_b;}},left:function(_d,_e){return this.setLTWH(_d,_e,"Left");},top:function(_f,_10){return this.setLTWH(_f,_10,"Top");},width:function(_11,_12){return this.setLTWH(_11,_12,"Width");},height:function(_13,_14){return this.setLTWH(_13,_14,"Height");},setLTWH:function(_15,_16,_17){var e=this.get(_15);if(e){if((_16!=null)&&!isNaN(parseInt(_16))){e.style[_17.toLowerCase()]=_16;}
return e["offset"+_17];}},createElement:function(_19){return document.standardCreateElement?document.standardCreateElement(_19):document.createElement(_19);},containsElement:function(_1a,_1b){while((_1b!=null)&&(_1b!=_1a)&&(_1b.parentNode!=null)){_1b=_1b.parentNode;}
return(_1b==_1a);},getElementByTagClass:function(_1c,tag,_1e){var _1f=_1c.getElementsByTagName(tag);for(var ndx=0;((ndx<_1f.length)&&(_1f[ndx].className.match(_1e)==null));ndx++){}
return(ndx<_1f.length)?_1f[ndx]:null;},getElementsByTagClass:function(_21,tag,_23){var _24=new Array();var _25=_21.getElementsByTagName(tag);for(var ndx=0;(ndx<_25.length);ndx++){if(_25[ndx].className.match(_23)){_24.push(_25[ndx]);}}
return _24;},toggleHideShowRow:function(_27,_28){var e=this.get(_27),ua=navigator.userAgent.toLowerCase(),s,d,u="undefined",p=(ua.indexOf("firefox")!=-1)?"table-row":"block";if(e){s=e.style;d=s.display;if(typeof(_28)===u){_28=(d===""||d===p)?false:true;}
e.bIsShown=_28;s.display=(_28)?p:"none";}}}).endType();

vjo.ctype("vjo.dsf.EventDispatcher").needs(["vjo.dsf.Event","vjo.dsf.ServiceEngine","vjo.dsf.Element"]).props({eventHandlers:{},nativeEventHandlers:{},unboundElems:[],fCustomLoad:{},process:function(_1,_2){var _3=this.eventHandlers[_1];if(!_3){return true;}
var _4=_3[_2.eventType];if(!_4){return true;}
var _5,_6=_4.length;for(var i=0;i<_6;i++){var _8=_4[i].handle(_2);if(_8&&_8.objType=="dsf_Message"){if(this.vj$.ServiceEngine){this.vj$.ServiceEngine.handleRequest(_8);}
if(_8.returnData===false){_5=false;}}else{if(_5!=false&&typeof _8!="undefined"){_5=_8;}}}
return _5;},register:function(id,_a,_b,_c){if(!id||!_a||!_b){return this;}else{if(typeof _b.handle!="function"){if(typeof _b=="function"){var _d=_b,scp=_c||this;var _e={handle:function(){return _d.apply(scp,arguments);}};_b=_e;}else{return this;}}}
var _f=this.eventHandlers[id];if(!_f){_f=this.eventHandlers[id]={};}
if(!_f[_a]){_f[_a]=[];}
var len=_f[_a].length;_f[_a][len]=_b;return _b;},unregister:function(id,_12){if(!this.eventHandlers[id]){return;}
delete this.eventHandlers[id][_12];},registerNative:function(_13,_14,_15){var id=(_13==window)?"body":_13.id;var _17=this.nativeEventHandlers[id];if(!_17){_17=this.nativeEventHandlers[id]={};}
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
delete _45[_43];}},detachHandler:function(id,_49,_4a){var _4b=this.eventHandlers[id];if(!_4b||!_4b[_49]){return;}
var h=[],len=_4b[_49].length;for(var i=0;i<len;i++){if(_4a!=_4b[_49][i]){h[h.length]=_4b[_49][i];}}
this.eventHandlers[id][_49]=h;},detachHandlers:function(id,_4f){this.unregister(id,_4f);var _50=this.vj$.Element.get(id);if(id=="body"){_50=window;}
if(_50){this.detachNativeHandlers(_50,_4f);}},stopEvent:function(e){this.stopPropagation(e);this.preventDefault(e);},stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();}else{e.cancelBubble=true;}},preventDefault:function(e){if(e.preventDefault){e.preventDefault();}else{e.returnValue=false;}},target:function(_54){return this.resolveTextNode((_54.target)?_54.target:_54.srcElement);},currentTarget:function(_55){return this.resolveTextNode((_55.currentTarget)?_55.currentTarget:_55.srcElement);},relatedTarget:function(_56){if(_56.relatedTarget){return this.resolveTextNode(_56.relatedTarget);}else{if((_56.type==="mouseover")&&_56.fromElement){return this.resolveTextNode(_56.fromElement);}else{if((_56.type==="mouseout")&&_56.toElement){return this.resolveTextNode(_56.toElement);}}}
return null;},resolveTextNode:function(_57){return(_57&&(_57.nodeType==3))?_57.parentNode:_57;},cleanUp:function(){var _58=this.nativeEventHandlers;for(var id in _58){for(var ev in _58[id]){if(ev!="unload"){this.detachHandlers(id,ev);}}}},detachAllElemHandlers:function(_5b,_5c){if(!_5b){return;}
if(_5b.id){this.unregister(_5b.id,_5c);if(_5b.id=="body"){_5b=window;}}
this.detachNativeHandlers(_5b,_5c);},getId:function(src,id){return(id===null||!id)?src.id:id;},getBodyId:function(src,id){var _61=this.getId(src,id);if(!_61||src==document.body){_61="body";}
return _61;},unload:function(src,_63){return this.process(this.getBodyId(src),new vjo.dsf.Event(src,"unload",_63));},change:function(src,_65){return this.process(this.getId(src),new vjo.dsf.Event(src,"change",_65));},submit:function(src,_67){return this.process(this.getId(src),new vjo.dsf.Event(src,"submit",_67));},reset:function(src,_69){return this.process(this.getId(src),new vjo.dsf.Event(src,"reset",_69));},select:function(src,_6b){return this.process(this.getId(src),new vjo.dsf.Event(src,"select",_6b));},blur:function(src,_6d){return this.process(this.getId(src),new vjo.dsf.Event(src,"blur",_6d));},focus:function(src,_6f){return this.process(this.getId(src),new vjo.dsf.Event(src,"focus",_6f));},keydown:function(src,_71){return this.process(this.getBodyId(src),new vjo.dsf.Event(src,"keydown",_71));},keypress:function(src,_73){return this.process(this.getBodyId(src),new vjo.dsf.Event(src,"keypress",_73));},keyup:function(src,_75){return this.process(this.getBodyId(src),new vjo.dsf.Event(src,"keyup",_75));},click:function(src,_77){return this.process(this.getBodyId(src),new vjo.dsf.Event(src,"click",_77));},dblclick:function(src,_79){return this.process(this.getBodyId(src),new vjo.dsf.Event(src,"dblclick",_79));},mousedown:function(src,_7b){return this.process(this.getBodyId(src),new vjo.dsf.Event(src,"mousedown",_7b));},mousemove:function(src,_7d){return this.process(this.getBodyId(src),new vjo.dsf.Event(src,"mousemove",_7d));},mouseout:function(src,_7f){return this.process(this.getBodyId(src),new vjo.dsf.Event(src,"mouseout",_7f));},mouseover:function(src,_81){return this.process(this.getBodyId(src),new vjo.dsf.Event(src,"mouseover",_81));},mouseup:function(src,_83){return this.process(this.getBodyId(src),new vjo.dsf.Event(src,"mouseup",_83));},contextmenu:function(src,_85){return this.process(this.getBodyId(src),new vjo.dsf.Event(src,"contextmenu",_85));},load:function(src,_87){return this.run(src,_87,"load");},run:function(src,_89,_8a){var et=_8a||_89.type;var id=this.getBodyId(src);var _8d=new vjo.dsf.Event(src,et,_89);var rv=this.process(id,_8d);if(et==="load"&&id==="body"){this.unregister("body","load");}
return rv;}}).inits(function(){vjo.dsf.EventDispatcher.addEventListener(window,"load",function(){vjo.dsf.EventDispatcher.addEventListener(window,"unload",function(){vjo.dsf.EventDispatcher.cleanUp();});});}).endType();

vjo.ctype("vjo.dsf.assembly.VjClientAssemblerRequest").protos({constructs:function(_1,_2,_3,_4,_5){this.sUrl=_1;this.fCallback=_2;this.oScope=_3||window;this.sCallbackParam=_4;var b=_5;if(typeof(b)=="undefined"){b=true;}
this.bSendResponseOnLoad=b;}}).endType();

vjo.ctype("vjo.dsf.assembly.VjClientAssembler").needs(["vjo.dsf.EventDispatcher","vjo.dsf.ServiceEngine","vjo.dsf.assembly.VjClientAssemblerRequest"]).props({load:function(_1){var m=_1,url=m.sUrl||"",name=this.generateCallback(m),ver="",cb=((ver)?ver+".":"")+"vjo.dsf.assembly.VjClientAssembler."+name;if(m&&m.objType=="dsf_Message"){url=m.svcConfig.url+"?";url+=vjo.dsf.Service.generateReqParams(m)+"&callback="+cb;}else{if(m.sCallbackParam){url=url+"&"+m.sCallbackParam+"="+cb;}}
return vjo.dsf.XDomainRequest.send(url);},generateCallback:function(_3){var m=_3;var _5=this.aCallbacks.length;var _6=this.sPreCallback+_5;this.aCallbacks[_5]=_6;this.aModels[_6]=m;this[_6]=function(){if(this.loaded[_6]===true){return;}
this.loaded[_6]=true;if(this.bBodyLoaded||!m.bSendResponseOnLoad){if(m.objType=="dsf_Message"){m.response=arguments[0];vjo.dsf.ServiceEngine.handleResponse(m);}else{m.fCallback.apply(m.oScope,arguments);}}else{if(m.objType=="dsf_Message"){this.aResponses[_6]=arguments[0];m.response=this.aResponses[_6];}else{this.aResponses[_6]=arguments;}
if(this.bBodyLoaded){this.assemble();}}};return _6;},assemble:function(){this.bBodyLoaded=true;if(this.bLock){setTimeout("vjo.dsf.assembly.VjClientAssembler.assemble()",1000);return;}
this.bLock=true;try{for(var _7 in this.aResponses){this.loaded[_7]=true;var m=this.aModels[_7];if(this.aResponses[_7]!=null){if(m.objType=="dsf_Message"){vjo.dsf.ServiceEngine.handleResponse(m);}else{m.fCallback.apply(m.oScope,this.aResponses[_7]);}}
this.aResponses[_7]=null;}}
finally{this.bLock=false;}}}).inits(function(){this.aCallbacks=[];this.aResponses={};this.aModels={};this.sPreCallback="_callback";this.bBodyLoaded=false;this.bLock=false;this.loaded={};this.vj$.EventDispatcher.addEventListener(window,"load",function(){vjo.dsf.assembly.VjClientAssembler.assemble();});}).endType();

vjo.ctype("vjo.dsf.utils.HexToDecimal").props({hex2Dec:function(_1){return parseInt(_1,16);}}).endType();

vjo.ctype("vjo.dsf.utils.DecimalToHex").props({dec2Hex:function(_1){return parseInt(_1,10).toString(16);}}).endType();

vjo.ctype("vjo.dsf.cookie.VjCookieJar").needs(["vjo.dsf.utils.HexToDecimal","vjo.dsf.utils.DecimalToHex"]).props({Default_Cookie_Format:{"COOKIELET_DELIMITER":"^","NAME_VALUE_DELIMITER":"/","escapedValue":true},DP_Cookie_Format:{"COOKIELET_DELIMITER":"^","NAME_VALUE_DELIMITER":"/","bUseExp":true,"startDelim":"b"},Session_Cookie_Format:{"COOKIELET_DELIMITER":"^","NAME_VALUE_DELIMITER":"=","escapedValue":true,"startDelim":"^"},DS_Cookie_Format:{"COOKIELET_DELIMITER":"^","NAME_VALUE_DELIMITER":"/"},sPath:"/",aConversionMap:{"reg":["dp1","reg"],"recent_vi":["ebay","lvmn"],"ebaysignin":["ebay","sin"],"p":["dp1","p"],"etfc":["dp1","etfc"],"keepmesignin":["dp1","kms"],"ItemList":["ebay","wl"],"BackToList":["s","BIBO_BACK_TO_LIST"]},aFormatMap:{},sCOMPAT:"10",sCONVER:"01",sSTRICT:"00",sModesCookie:"ebay",sModesCookielet:"cv",readCookie:function(_1,_2){var rv=this.readCookieObj(_1,_2).value;return(rv)?decodeURIComponent(rv):"";},createDefaultCookieBean:function(_4,_5){var _6={};_6.name=_4;_6.cookieletname=_5;_6.value="";_6.maxage=0;_6.rawcookievalue="";_6.mode="";return _6;},readCookieObj:function(_7,_8){var _9=this.createDefaultCookieBean(_7,_8);this.update();this.checkConversionMap(_9);_9.rawcookievalue=this.aCookies[_9.name];if(!_9.name||!_9.rawcookievalue){_9.value="";}else{if(!_9.cookieletname){this.readCookieInternal(_9);}else{this.readCookieletInternal(_9);}}
return(typeof(_9)!="undefined")?_9:"";},checkConversionMap:function(_a){var _b=this.aConversionMap[_a.name];if(_b){_a.mode=this.getMode(_a.name);_a.name=_b[0];_a.cookieletname=_b[1];}},readCookieInternal:function(_c){_c.value=_c.rawcookievalue;return _c;},readCookieletInternal:function(_d){var _e=this.getCookielet(_d.name,_d.cookieletname,_d.rawcookievalue);var _f=this.getFormat(_d.name);if(_e&&_f.bUseExp){var _10=_e;_e=_e.substring(0,_e.length-8);if(_10.length>8){_d.maxage=_10.substring(_10.length-8);}}
_d.value=_e;if(_d.mode==this.sCOMPAT){_d.value=_d.rawcookievalue;}
return _d;},readMultiLineCookie:function(_11,_12){if(!_11||!_12){return"";}
var val,r="";var _15=this.aConversionMap[_11];if(_15){val=this.readCookieObj(_15[0],_15[1]).value||"";}
if(val){r=this.getCookielet(_11,_12,val)||"";}
return(typeof(r)!="undefined")?r:"";},writeCookie:function(_16,_17,_18){var _19=this.aConversionMap[_16];if(_19){this.writeCookielet(_19[0],_19[1],_17,_18);return;}
var _1a=this.getFormat(_16);if(_17&&_1a.escapedValue){_17=encodeURIComponent(_17);}
this.writeRawCookie(_16,_17,_18);},writeRawCookie:function(_1b,_1c,_1d){if(_1b&&(_1c!==undefined)){if((isNaN(_1c)&&_1c.length<4000)||(_1c+"").length<4000){if(typeof _1d=="number"){_1d=this.getExpDate(_1d);}
var _1e=_1d?new Date(_1d):new Date(this.getExpDate(730));var _1f=this.getFormat(_1b);var _20=this.sCookieDomain;var dd=document.domain;if(dd.indexOf(_20)==-1){var _22=dd.indexOf(".ebay.");if(_22>0){this.sCookieDomain=dd.substring(_22);}}
if(document.cookie){document.cookie=_1b+"="+(_1c||"")+((_1d||_1f.bUseExp)?"; expires="+_1e.toGMTString():"")+"; domain="+this.sCookieDomain+"; path="+this.sPath;}}}},writeCookieEx:function(_23,_24,_25){this.writeCookie(_23,_24,this.getExpDate(_25));},writeCookielet:function(_26,_27,_28,_29,_2a){if(_26&&_27){this.update();var _2b=this.getFormat(_26);if(_2b.bUseExp&&_28){if(typeof _29=="number"){_29=this.getExpDate(_29);}
var _2c=_29?new Date(_29):new Date(this.getExpDate(730));var _2d=Date.UTC(_2c.getUTCFullYear(),_2c.getUTCMonth(),_2c.getUTCDate(),_2c.getUTCHours(),_2c.getUTCMinutes(),_2c.getUTCSeconds());_2d=Math.floor(_2d/1000);_28+=this.vj$.DecimalToHex.dec2Hex(_2d);}
var val=this.createCookieValue(_26,_27,_28);this.writeRawCookie(_26,val,_2a);}},writeMultiLineCookie:function(_2f,_30,_31,_32,_33){this.update();var val=this.createCookieValue(_2f,_30,_31);if(val){var _35=this.aConversionMap[_2f];if(_35){this.writeCookielet(_35[0],_35[1],val,_32,_33);}}},getBitFlagOldVersion:function(_36,_37){var dec=parseInt(_36,10);var b=dec.toString(2),r=dec?b.charAt(b.length-_37-1):"";return(r=="1")?1:0;},setBitFlagOldVersion:function(_3a,_3b,_3c){var b="",p,i,e,l;_3a=parseInt(_3a+"",10);if(_3a){b=_3a.toString(2);}
l=b.length;if(l<_3b){e=_3b-l;for(i=0;i<=e;i++){b="0"+b;}}
p=b.length-_3b-1;return parseInt(b.substring(0,p)+_3c+b.substring(p+1),2);},getBitFlag:function(_3e,_3f){if(_3e!=null&&_3e.length>0&&_3e.charAt(0)=="#"){var _40=_3e.length;var q=_3f%4;var _42=Math.floor(_3f/4)+1;var _43=_40-_42;var _44=parseInt(_3e.substring(_43,_43+1),16);var _45=1<<q;return((_44&_45)==_45)?1:0;}else{return this.getBitFlagOldVersion(_3e,_3f);}},setBitFlag:function(_46,_47,_48){if(_46!=null&&_46.length>0&&_46.charAt(0)=="#"){var _49=_46.length;var q=_47%4;var _4b=Math.floor(_47/4)+1;if(_49<=_4b){if(_48!=1){return _46;}
var _4c=_4b-_49+1;var _4d=_46.substring(1,_49);while(_4c>0){_4d="0"+_4d;_4c--;}
_46="#"+_4d;_49=_46.length;}
var _4e=_49-_4b;var _4f=parseInt(_46.substring(_4e,_4e+1),16);var _50=1<<q;if(_48==1){_4f|=_50;}else{_4f&=~_50;}
_46=_46.substring(0,_4e)+_4f.toString(16)+_46.substring(_4e+1,_49);return _46;}else{if(_47>31){return _46;}
return this.setBitFlagOldVersion(_46,_47,_48);}},createCookieValue:function(_51,_52,_53){var _54=this.aConversionMap[_51],format=this.getFormat(_51),mode=this.getMode(_51),val;if(_54&&(mode==this.sSTRICT||mode==this.sCONVER)){val=this.readCookieObj(_54[0],_54[1]).value||"";}else{val=this.aCookies[_51]||"";}
if(format){var _55=this.getCookieletArray(val,format);_55[_52]=_53;var str="";for(var i in _55){if(_55[i]){str+=i+format.NAME_VALUE_DELIMITER+_55[i]+format.COOKIELET_DELIMITER;}}
if(str&&format.startDelim){str=format.startDelim+str;}
val=str;if(format.escapedValue){val=encodeURIComponent(val);}}
return val;},update:function(){var aC=document.cookie.split("; ");this.aCookies={};for(var i=0;i<aC.length;i++){var sC=aC[i].split("=");var _5b=this.getFormat(sC[0]),cv=sC[1],sd=_5b.startDelim;if(sd&&cv&&cv.indexOf(sd)===0){sC[1]=cv.substring(sd.length,cv.length);}
this.aCookies[sC[0]]=sC[1];}},getCookielet:function(_5c,_5d,_5e){var _5f=this.getFormat(_5c);var _60=this.getCookieletArray(_5e,_5f);return _60[_5d]||"";},getFormat:function(_61){return this.aFormatMap[_61]||vjo.dsf.cookie.VjCookieJar.Default_Cookie_Format;},getCookieletArray:function(_62,_63){var rv=[],val=_62||"";if(_63.escapedValue){val=decodeURIComponent(val);}
var a=val.split(_63.COOKIELET_DELIMITER);for(var i=0;i<a.length;i++){var idx=a[i].indexOf(_63.NAME_VALUE_DELIMITER);if(idx>0){rv[a[i].substring(0,idx)]=a[i].substring(idx+1);}}
return rv;},getExpDate:function(_68){var _69;if(typeof _68=="number"&&_68>=0){var d=new Date();d.setTime(d.getTime()+(_68*24*60*60*1000));_69=d.toGMTString();}
return _69;},getMode:function(_6b){var h=this.readCookieObj(this.sModesCookie,this.sModesCookielet).value,b;if(!(_6b in this.aConversionMap)){return null;}
if(!h){return"";}
if(h===0){return this.sSTRICT;}
if(h&&h!="0"){if(h.indexOf(".")!=-1){var a=h.split(".");for(var i=0;i<a.length;i++){b=this.vj$.HexToDecimal.hex2Dec(a[i]).toString(2)+b;}}else{b=this.vj$.HexToDecimal.hex2Dec(h).toString(2);}
i=0;var l=b.length,j;for(var o in this.aConversionMap){j=l-(2*(i+1));var f=b.substring(j,j+2).toString(10);f=(!f)?this.sSTRICT:f;if(_6b==o){return(f.length==1)?"0"+f:f;}
i++;}
return null;}}}).inits(function(){var vCJ=vjo.dsf.cookie.VjCookieJar;vCJ.aFormatMap={"r":vCJ.Default_Cookie_Format,"dp1":vCJ.DP_Cookie_Format,"npii":vCJ.DP_Cookie_Format,"ebay":vCJ.Session_Cookie_Format,"reg":vCJ.Session_Cookie_Format,"apcCookies":this.Session_Cookie_Format,"ds2":vCJ.DS_Cookie_Format};}).endType();

vjo.ctype("vjo.dsf.utils.URL").props({addArg:function(_1,_2,_3){if(_1==null||_1==undefined){return null;}
if(_1.indexOf("?")<0){_1+="?"+_2+"="+_3;return _1;}
var _4=this.getArgPairIfExists(_1,_2);if(_4!==null){_1=_1.replace(_4,_2+"="+_3);}else{_1+="&"+_2+"="+_3;}
return _1;},getArg:function(_5,_6){if(_5==null||_5==undefined){return null;}
if(_5.indexOf("?")<0){return null;}
var _7=this.getArgPairIfExists(_5,_6);if(_7!==null){return _7.substring(_7.indexOf("=")+1);}
return null;},getArgPairIfExists:function(_8,_9){var _a=_8.indexOf("?");if(_a<0){return null;}
var _b=_8;var _c,_d;while(_a>=0){_b=_b.substring(_a+1);_c=_b;_a=_b.indexOf("&");if(_a>=0){_c=_b.substring(0,_a);}
_d=_c.substring(0,_c.indexOf("="));if(_d==_9){return _c;}}
return null;}}).endType();

vjo.ctype("vjo.dsf.document.Positioning").props({getScrollLeftTop:function(){var d=document,rv=[0,0],db=d.body,de=d.documentElement;if(db){rv[0]+=db.scrollLeft;rv[1]+=db.scrollTop;}
if(de){rv[0]+=de.scrollLeft;rv[1]+=de.scrollTop;}
return rv;},getOffsetLeft:function(_2){var e=_2,l=0;while(e){l+=e.offsetLeft;e=e.offsetParent;}
return l;},getOffsetTop:function(_4){var e=_4,t=0;while(e){t+=e.offsetTop;e=e.offsetParent;}
return t;},getClientWidth:function(){var s=self,d=document,de=d.documentElement,w;if(s.innerWidth){w=s.innerWidth;}else{if(de&&de.clientWidth){w=de.clientWidth;}else{w=d.body.clientWidth;}}
return w;},getClientHeight:function(){var s=self,d=document,de=d.documentElement,h;if(s.innerHeight){h=s.innerHeight;}else{if(de&&de.clientHeight){h=de.clientHeight;}else{h=d.body.clientHeight;}}
return h;},getEventLeftTop:function(_8){var u="undefined",evt=window.event||_8,xOff=(typeof(screenLeft)!=u)?screenLeft:screenX,yOff=(typeof(screenTop)!=u)?screenTop:(screenY+(outerHeight-innerHeight)-25);return[evt.screenX-xOff,evt.screenY-yOff];}}).endType();

vjo.ctype("vjo.dsf.utils.SiteSpeed").needs(["vjo.dsf.EventDispatcher","vjo.dsf.utils.URL","vjo.dsf.document.Positioning","vjo.dsf.error.ErrorHandlerManager","vjo.dsf.cookie.VjCookieJar"]).props({params:{},pload:function(){var _1=this.vj$.VjCookieJar,sbf=_1.readCookie("ebay","sbf");_1.writeCookielet("ebay","sbf",_1.setBitFlag(sbf,20,1));},punload:function(){this.vj$.VjCookieJar.writeCookielet("ds2","ssts",(new Date()).getTime());},addParam:function(_2,_3){if(_2&&_3){this.params[_2]=_3;}},getParams:function(){var rv="";for(var k in this.params){rv+="&"+k+"="+this.params[k];}
return rv;},getParam:function(_6){return this.params[_6];},updateLoad:function(){if(typeof(oGaugeInfo)!="undefined"&&oGaugeInfo.ld===true){var g=oGaugeInfo;var ct=(new Date()).getTime();g.wt=ct;g.ex3=ct;g.ct21=ct-g.iST;}}}).inits(function(){ed=vjo.dsf.EventDispatcher;ed.addEventListener(window,"load",this.pload,this);ed.addEventListener(window,"beforeunload",this.punload,this);}).endType();

vjo.ctype("vjo.Registry").props({controls:[],put:function(_1,_2){this.controls[_1]=_2;if(this.isKeyValid(_1)){this["_"+_1]=this.controls[_1];}
return this.controls[_1];},get:function(_3){return this.controls[_3];},dump:function(){var _4=this.controls;var _5="controls on page:\n";for(var i in _4){_5+="key = "+i;_5+="controlName = "+_4[i].objtype;_5+="\n";}
return _5;},isKeyValid:function(_7){if(typeof _7!="string"){return false;}
return/^([a-zA-Z0-9_$]+)$/.test(_7);}}).endType();

vjo.ctype("vjo.dsf.client.Browser").props({init:function(){this.bFirefox=this.bWebTV=this.bOpera=this.bNav=this.bIE=this.bSafari=this.bWin=this.bMac=this.bMacppc=this.bMactel=this.bActiveXSupported=this.bWinXp=this.bXpSp2=this.bAOL=this.bVista=false;this.iVer=this.fVer=-1;this.fMinorVer=0;this.aMimeTypes=null;var nv=navigator,agt=nv.userAgent.toLowerCase(),i=0,ver;function has(_2,_3){return _2.indexOf(_3)!=-1;}
with(this){if(has(agt,"webtv")){bWebTV=true;i=agt.indexOf("webtv/")+6;}else{if(has(agt,"firefox")){bFirefox=true;i=agt.lastIndexOf("firefox")+8;}else{if(has(agt,"safari")){bSafari=true;i=agt.lastIndexOf("safari")+7;}else{if(typeof(window.opera)!="undefined"){bOpera=true;i=agt.lastIndexOf("opera")+6;}else{if(nv.appName=="Netscape"){bNav=true;i=agt.lastIndexOf("/")+1;}else{if(has(agt,"msie")){bIE=true;i=agt.indexOf("msie")+4;if(has(agt,"aol")||has(agt,"america online")){bAOL=true;}}}}}}}
ver=bOpera?window.opera.version():agt.substring(i);iVer=parseInt(ver);fVer=parseFloat(ver);fMinorVer=fVer-iVer;bWin=has(agt,"win");bWinXp=(bWin&&has(agt,"windows nt 5.1"));bVista=(bWin&&has(agt,"windows nt 6.0"));bXpSp2=(bWinXp&&has(agt,"sv1"));bMac=has(agt,"mac");bMacppc=(bMac&&(has(agt,"ppc")||has(agt,"powerpc")));bMactel=(bMac&&has(agt,"intel"));aMimeTypes=nv.mimeTypes;bActiveXSupported=(!(bMac||bMacppc)&&(typeof(ActiveXObject)=="function"));}}}).inits(function(){this.init();}).endType();

vjo.ctype("vjo.dsf.utils.Handlers").needs(["vjo.dsf.EventDispatcher","vjo.dsf.Message","vjo.dsf.ServiceEngine"]).props({ED:vjo.dsf.EventDispatcher,SE:vjo.dsf.ServiceEngine,attachEvt:function(_1,_2,_3,_4){return this.ED.addEventListener(_1,_2,_3,_4);},detachEvt:function(_5,_6,_7){this.ED.removeEventListener(_5,_6,_7);return true;},newMsg:function(_8){return new vjo.dsf.Message(_8);},handle:function(_9){this.SE.handleRequest(_9);},createHdl:function(_a,_b,_c){var _d=_a,hdl={};hdl[_c]=function(){_b.apply(_d,arguments);};return hdl;},attachSvc:function(_e,_f,_10){var t=this,hdl=t.createHdl(_10,_f,"invoke");if(t.SE&&hdl){t.SE.registerSvcHdl(_e,hdl);}},attachSvcReqt:function(_12,_13,_14){var t=this,hdl=t.createHdl(_14,_13,"handleRequest");if(t.SE&&hdl){t.SE.registerSvcReqtHdl(_12,hdl);}},attachSvcResp:function(_16,_17,_18){var t=this,hdl=t.createHdl(_18,_17,"handleResponse");if(t.SE&&hdl){t.SE.registerSvcRespHdl(_16,hdl);}},resetSvc:function(_1a){this.SE.inProcHdl.svcHdls[_1a]=[];},resetSvcReqt:function(_1b){this.SE.svcReqtHdls[_1b]=[];},resetSvcResp:function(_1c){this.SE.svcRespHdls[_1c]=[];}}).endType();

vjo.ctype("vjo.dsf.utils.Object").props({hitch:function(_1,_2){var _3;if(typeof _2=="string"){_3=_1[_2];}else{_3=_2;}
return function(){return _3.apply(_1,arguments);};},extend:function(_4,_5){function inheritance(){}
inheritance.prototype=_5.prototype;_4.prototype=new inheritance();_4.prototype.constructor=_4;_4.baseConstructor=_5;_4.superClass=_5.prototype;}}).endType();

vjo.ctype("vjo.dsf.utils.JsLoader").props({queue:[],pending:null,DEFAULT_TYPE:"text/javascript",load:function(_1,_2,_3,_4){this.fetch(_1,_2,_3,_4?_4:this.DEFAULT_TYPE);},loadText:function(_5){if(_5){var t=this;var _7=t.getHead(),stag=t.createScript();stag.type=t.DEFAULT_TYPE;stag.text=_5;_7.appendChild(stag);}},getHead:function(){return document.getElementsByTagName("head")[0];},createScript:function(){return document.createElement("script");},fetch:function(_8,_9,_a,_b){var _c={url:_8,callback:_9,scope:_a},head,stag;var t=this;if(t.pending){t.queue.push(_c);return;}
this.pending=_c;head=t.getHead();stag=t.createScript();stag.onload=stag.onreadystatechange=function(){if(!this.readyState||this.readyState=="loaded"||this.readyState=="complete"){t.oncomplete();stag.onload=stag.onreadystatechange=null;head.removeChild(stag);}};stag.type=_b;stag.async=true;stag.defer=true;stag.src=_8;head.appendChild(stag);},oncomplete:function(){var t=this,o=t.pending;if(o.callback){o.callback.call(o.scope||window);}
t.pending=null;if(t.queue.length>0){var _f=this.queue.shift();t.load(_f.url,_f.callback,_f.scope);}}}).endType();

vjo.ctype("vjo.dsf.utils.CssLoader").props({load:function(_1){var d=document;if(d.createStyleSheet){d.createStyleSheet(_1);}else{var _3=this.getHead(),style=d.createElement("link");style.rel="stylesheet";style.type="text/css";style.href=_1;_3.appendChild(style);}},getHead:function(){return document.getElementsByTagName("head")[0];},loadText:function(_4){var d=document,style=d.createElement("style");style.type="text/css";if(style.styleSheet){style.styleSheet.cssText=_4;}else{style.appendChild(d.createTextNode(_4));}
this.getHead().appendChild(style);}}).endType();

vjo.ctype("vjo.darwin.core.rtm.RTMHelper").props({R:null,setRtm:function(r){if(r){this.R=r;}},render:function(_2){var t=this;if(t.R){t.R.renderPromos(_2);}},onMessage:function(_4,_5,_6){return this.R.ExpAd.onMessage(_4,_5,_6);}}).endType();

vjo.ctype("vjo.dsf.client.ActiveX").needs("vjo.dsf.client.Browser","B").props({isLibLoaded:function(_1){return this.vj$.B.bActiveXSupported&&this.isLoaded(_1);},isLoaded:function(_2){try{new ActiveXObject(_2);return true;}
catch(err){}
return false;}}).endType();

vjo.ctype("vjo.dsf.utils.Bit").needs("vjo.dsf.cookie.VjCookieJar").props({CJ:vjo.dsf.cookie.VjCookieJar,getMulti:function(_1,_2,_3){var r="",i,CJ=this.CJ;for(i=0;i<_3;i++){r=CJ.getBitFlag(_1,_2+i)+r;}
return parseInt(r,2);},setMulti:function(_5,_6,_7,_8){var i=0,CJ=this.CJ,v,l,e;v=_8.toString(2).substring(0,_7);l=v.length;if(l<_7){e=_7-l;for(var j=0;j<e;j++){v="0"+v;}
l=l+e;}
for(i=0;i<l;i++){_5=CJ.setBitFlag(_5,_6+i,v.substring(l-i-1,l-i));}
return _5;}}).endType();

vjo.ctype("vjo.dsf.flash.Version").needs(["vjo.dsf.client.Browser","vjo.dsf.client.ActiveX","vjo.dsf.utils.Bit","vjo.dsf.cookie.VjCookieJar"]).props({versions:[10,9],get:function(){var t=this,B=t.vj$.Browser,v=0,vs=t.versions,i,A=t.vj$.ActiveX,cv;cv=t.rw(false);if(cv){return(cv==1)?0:cv;}
if(B.bIE&&B.bWin&&!B.bOpera){for(i=0;i<vs.length;i++){if(A.isLibLoaded("ShockwaveFlash.ShockwaveFlash."+vs[i])){v=vs[i];break;}}}else{var n=navigator,pd,id,swf="Shockwave Flash";if(n.plugins[swf]){pd=n.plugins[swf].description;id=pd.indexOf("Flash")+5;v=parseInt(pd.substr(id,pd.length));}
if(B.bWebTV){v=3;}}
t.rw(true,v);return v;},rw:function(_3,_4){var t=this,n=t.vj$,C=n.VjCookieJar,B=n.Bit;var cl=C.readCookie("ebay","sbf");if(!_3){return B.getMulti(cl,40,5);}else{if(_3){_4=(_4==0)?1:_4;C.writeCookielet("ebay","sbf",B.setMulti(cl,40,5,_4));}}}}).endType();

vjo.ctype("vjo.darwin.core.rtm.RTM").needs(["vjo.dsf.utils.SiteSpeed","vjo.dsf.cookie.VjCookieJar","vjo.dsf.client.Browser","vjo.dsf.EventDispatcher","vjo.dsf.flash.Version","vjo.dsf.utils.JsLoader","vjo.dsf.utils.CssLoader","vjo.Registry","vjo.dsf.Message","vjo.dsf.Element"]).protos({json:null,ads:{},aEvCon:{},bTimedOut:false,oTimeoutId:null,iTIMEOUT:3000,bRespRet:false,bb:false,promos:new Object(),response:null,bodyLoadedTime:0,bPromoScript:false,bPromoStyle:false,hasPromo:false,ssGaugeVectors:{},hasReportAd:false,ReportAd:null,hasExpAds:false,ExpAd:null,hasAdSurvey:false,AdSurvey:null,E:vjo.dsf.Element,S:vjo.dsf.ServiceEngine,constructs:function(_1){var t=this;vjo.Registry.put("GlobalRtmInstance",t);vjo.dsf.EventDispatcher.add("body","load",t.render,t);t.S.registerSvcReqtHdl("RTM_LOAD_PIDS",t);t.json=_1;t.ids=t.json.htmlIds;t.loadAds();},loadAds:function(){var t=this,b=t.json,i,id,ad,n=b.pids.length,as=b.hasSurvey;var ct=b.contentTypes,dc=b.delayedContent,ed=b.expandDirections,te=b.triggerEvent;for(i=0;i<n;i++){id=b.pids[i];ad={};t.ads[id]=ad;ad.id=id;ad.type=ct?ct[i]:null;ad.content="";if(dc&&dc[i]){ad.content=dc[i];}
if(!ad.content){ad.type="";}
ad.width=b.widths[i];ad.height=b.heights[i];ad.triggerEvent=te?te[i]:null;ad.defaultURL=b.defaultUrls[i];ad.htmlID=b.htmlIds[i];if(ed&&ed[i]){ad.expand=ed[i];ad.maxExpandWidth=b.maxExpandWidths[i];ad.maxExpandHeight=b.maxExpandHeights[i];ad.st=b.expandSecurityTokens[i];ad.allowExpandOnPageLoad=b.allowExpandOnPageLoad[i];t.hasExpAds=true;}
if(as&&as[i]){t.hasAdSurvey=true;}
ad.showPH=b.showPH?b.showPH[i]:null;ad.dblclkURL=b.dblclkUrls[i];}},mergeAds:function(_5){var t=this,i,a,ad,id,n=_5.length,j,m,s,l;for(i=0;i<n;i++){a=_5[i];id=a.id?a.id:a.pid;if(id){ad=t.ads[id];if(!ad){ad={};ad.id=id;t.ads[id]=ad;}
ad.type=a.type;ad.content=a.content?a.content:"";if(!ad.content){ad.type="";}
ad.width=a.width;ad.height=a.height;if(a.pid){ad.htmlID=a.htmlId;}
if(ad.content.indexOf("openReportAd")>0){t.hasReportAd=true;}
if(a.expand){ad.expand=a.expand;ad.maxWidth=a.maxWidth;ad.maxHeight=a.maxHeight;ad.st=a.st;ad.allowExpandOnLoad=a.allowExpandOnLoad;t.hasExpAds=true;}
if(a.adSurvey){t.hasAdSurvey=true;}}else{if(a.JSMetaData){l=t.vj$.JsLoader;m=a.JSMetaData;s=m.JSURLs;for(j in s){l.load(s[j]);}
s=m.EventHandlers;for(j in s){l.loadText(s[j]);}}else{if(a.CSSMetaData){s=a.CSSMetaData.CSSURLs;for(j in s){t.vj$.CssLoader.load(s[j]);}}}}}},handleRequest:function(_7){var t=this,m=_7,x,n=m.pids.length,id;if(t.bb){return;}
for(x=0;x<n;x++){id=m.pids[x];ad=t.ads[id];ad.triggerEvent=0;t.loadAd(ad);}},loadExtJS:function(){var t=this,b=t.json,l=t.vj$.JsLoader;if(t.hasReportAd&&!t.ReportAd){l.load(b.reportAdJsUrl);}
if(t.hasExpAds&&!t.ExpAd){l.load(b.expJsUrl);}
if(t.hasAdSurvey&&!t.AdSurvey){l.load(b.adSurveyJsUrl);}},getFlashVersion:function(){return this.vj$.Version.get();},getEncodingType:function(){return"UTF-8";},setInlineContent:function(_a){var t=this,id,ad,c,m;if(t.TimedOut()){return;}
t.hidePromos(t.promos);t.mergeAds(_a);t.loadExtJS();for(id in t.ads){ad=t.ads[id];if(!t.bb&&ad.triggerEvent==1){t.aEvCon[id]=ad.content;}else{t.loadAd(ad);}}
if(typeof(oGaugeInfo)!="undefined"){c=(new Date()).getTime()-oGaugeInfo.iST;vjo.dsf.utils.SiteSpeed.addParam("ctrc",c);}
t.sendComplete(1);if(t.hasPromo){m=new vjo.dsf.Message("PROMO_COMPLETE");m.vjPromoClientObject=t;t.S.handleRequest(m);}},sendComplete:function(s){var m=new vjo.dsf.Message("RTM_COMPLETE");m.status=s;m.vjRTMObject=this;this.S.handleRequest(m);},TimedOut:function(){var t=this;t.bRespRet=true;if(t.bTimedOut){return true;}
if(t.oTimeoutId){window.clearTimeout(t.oTimeoutId);}
return false;},promoAd:function(_f){var t=this,map=_f.content.data.map,parts=0,id="-1";var _11=false,p,m,v,s,c;for(p in map){m=p.match(/ME([0-9]+)(.*)/);if(m){parts++;id=_f.id;}}
v=map.VisualPreview;if(v){t.loadVisualPreview(v);}
s=map.Style;if(s&&!t.bPromoStyle){t.loadStyle(s);t.bPromoStyle=true;}
for(p in map){m=p.match(/ME([0-9]+)(.*)/);if(m){c=t.loadPromo(_f.id,m[2],map[p],parts>1);if(c){_11=true;}}}
s=map.Script;if(s&&!t.bPromoScript){t.bPromoScript=t.loadScript(s);}
if(_11){c=t.E.get(t.ads[id].htmlID);if(c&&!c.length){c.style.display="block";}}else{t.noAd(_f);}},loadVisualPreview:function(_12){var d=this.E.get("VisualPreviewContent");if(d==null){d=document.createElement("div");d.name="VisualPreviewContent";document.body.appendChild(d);}
d.innerHTML=_12;},loadStyle:function(_14){this.vj$.CssLoader.loadText(_14);},loadPromo:function(id,_16,_17,_18){var t=this,id,ad=t.ads[id];if(_18){id=t.json.merchPrefix+id+_16;}else{id=ad.htmlID;}
var e=t.E.get(id);if(ad.loaded){return true;}
if(e&&!e.length){ad.loaded=true;var d=document.createElement("div");d.innerHTML=_17;e.appendChild(d);return true;}
return false;},hidePromos:function(_1c){var p,c;for(p in _1c){c=this.E.get(p);if(c!=null){c.style.display="none";}}},loadScript:function(_1f){with(window){try{eval(_1f);return true;}
catch(e){}}
return false;},popUnderAd:function(ad){var s="height="+ad.height;s+=",width="+ad.width;s+=",menubars=no,scrollbars=no'";var id="p_u_"+ad.id;var a=window.open("",id,s);if(a){a.blur();a.document.open();a.document.write(ad.content);a.document.close();}},dcAd:function(ad){var t=this;if(!ad){return;}
var id=ad.htmlID,e=t.E.get(id),u=ad.dblclkURL;if(!u||ad.loaded){return;}
if(e&&!e.length){ad.loaded=true;if(ad.content){u+=ad.content+";";}
u+="ord="+(new Date()).getTime();e.innerHTML=t.createIFrame(id,u,ad.width,ad.height);e.style.display="block";}},noAd:function(ad){var t=this,id=ad.htmlID,e=t.E.get(id),u=ad.defaultURL;if(ad.loaded){return;}
if(e&&!e.length){ad.loaded=true;if(!u||u=="collapse"||u==""){e.style.height="0px";e.style.display="none";}else{e.innerHTML=t.createIFrame(id,u,ad.width,ad.height);}}},htmlAd:function(ad){var t=this,w=ad.width,h=ad.height,ex=ad.expand,ifr;w=t.adjustDim(w);h=t.adjustDim(h);var i=t.ads[ad.id],id=ad.htmlID,e=t.E.get(id),s=e.style;if(ad.loaded){return;}
if(e&&!e.length){ad.loaded=true;t.processDim(s,ex,w,h);e.innerHTML=ad.content;if(ex){id=t.json.pids[i];ifr=t.E.get("rtm_iframe_"+id);if(ifr){if(w=="auto"){w=ifr.width;s.width=w+"px";}
if(h=="auto"){h=ifr.height;s.height=h+"px";}}}
ad.width=w;ad.height=h;s.display="block";t.executeScripts(ad.content);}},adjustDim:function(v){if(v=="-1"||v=="9999"){v="auto";}
return v;},processDim:function(s,ex,w,h){if(w){s.width=w.match(/auto|\%/)?w:w+"px";}
if(h){s.height=h.match(/auto|\%/)?h:h+"px";}
if(w!="auto"&&h!="auto"){if(ex){s.textAlign="left";}else{s.overflow="hidden";}}},executeScripts:function(_31){var m,re=/<script\b[\s\S]*?>([\s\S]*?)<\/script>/ig;while(m=re.exec(_31)){this.vj$.JsLoader.loadText(m[1]);}},formAd:function(ad){var t=this,w=ad.width,h=ad.height,f;w=t.adjustDim(w);h=t.adjustDim(h);var id=ad.htmlID,e=t.E.get(id),s=e.style;if(ad.loaded){return;}
if(e&&!e.length){ad.loaded=true;t.processDim(s,false,w,h);e.innerHTML=t.createIFrame(ad.id,"","100%","");f=t.E.get("ifrm_"+ad.id);s.display="block";f.doc=null;if(f.contentDocument){f.doc=f.contentDocument;}else{if(f.contentWindow){f.doc=f.contentWindow.document;}else{if(f.document){f.doc=f.document;}}}
if(f.doc==null){throw"RTM002";}
f.doc.open();try{f.doc.write(ad.content);}
finally{f.doc.close();}}},createIFrame:function(id,u,w,h){return"<iframe frameborder=\"no\" border=\"0\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"no\""+" id=\"ifrm_"+id+"\" name=\"ifrm_"+id+"\" src=\""+u+"\""+" width=\""+w+"\" height=\""+h+"\"></iframe>";},processGlobalNavPids:function(_3b){var s="",i,a;if(typeof(_oGlobalNavRTMInfo)!="undefined"){a=_oGlobalNavRTMInfo.aRTMPlacementData;for(i in a){if(s){s+=":";}
if(_3b){s+=a[i].pid;}else{s+="0";}}
if(_3b){this.mergeAds(a);}}
return s;},setTimeOut:function(){var t=this;if(!t.bRespRet){var _3e=function(){t.processTimeOut();};t.oTimeoutId=window.setTimeout(_3e,t.iTIMEOUT);}},processTimeOut:function(){var t=this,id,ad,b=t.json;t.bTimedOut=true;for(id in t.ads){ad=t.ads[id];var hid=ad.htmlID,e=t.E.get(hid),du=ad.defaultURL;if(ad.loaded||(e&&e.innerHTML.length)){continue;}
if(e&&!e.length){ad.loaded=true;if(!du||du=="collapse"||du==""){e.style.height="0px";e.style.display="none";}else{e.innerHTML=t.createIFrame(hid,du,ad.width,ad.height);}}}
if(Math.random()<0.05){var u=b.url,i=u.indexOf("&");u=u.substring(0,i);u=u+"&p="+b.pids.join(":")+"&ite=2&to="+t.iTIMEOUT;u=u.replace("RtmCmd","RtmIt");t.vj$.JsLoader.load(u);}
window.clearTimeout(t.oTimeoutId);t.sendComplete(0);},getBrowserWidth:function(){var w=document.body.clientWidth;if(!this.vj$.Browser.bIE){w=window.innerWidth;}
return w;},popUp:function(tl,u,w,h,st,tb,sb,l,t,lo,r,m){var s="";s+=(w!=null)?",width="+w:"";s+=(h!=null)?",height="+h:"";s+=(l!=null)?",screenX="+l+",left="+l:"";s+=(t!=null)?",screenY="+t+",top="+t:"";s+=",toolbar="+(tb?"1":"0");s+=",location="+(lo?"1":"0");s+=",status="+(st?"1":"0");s+=",scrollbars="+(sb?"1":"0");s+=",resizable="+(r?"1":"0");s+=",menubar="+(m?"1":"0");if(s.length>0){s=s.substring(1);}
window.open(u,tl,s);return false;},getSegment:function(_50){var j=this.vj$.VjCookieJar,e=j.readCookie("etfc"),r=j.readCookie("reg"),s=j.readCookie("ebay","sin"),c,n;if(e=="0"){n="3";c="E";}else{if(e=="1"){n="4";c="C";}else{if(e=="2"){n="5";c="D";}else{if((e==""&&(r!=""&&r!=";"))||s=="in"||e=="5"){n="2";c="B";}else{n="1";c="A";}}}}
return _50?c:n;},getCIDCookie:function(){var j=this.vj$.VjCookieJar,c=j.readCookie("npii","cguid");if(c!="undefined"&&c!=""){return c;}},openReportAd:function(e,u,dt,sc,cc,clc,ah,at,rc,rcd,ip,sl,el,lid){var t=this,r=t.ReportAd,s;if(r==null){r=new vjo.darwin.core.rtm.ReportAd(dt,sc,cc,clc,rc,rcd,u,ip,sl,el,lid);t.ReportAd=r;}
if(r){r.init(ah,at);r.open(e);r.setReportAdLinkId(lid);}},yahooAdBckGrnd:function(_62){var f=this.E.get(_62);f.style.visibility="visible";f.parentNode.style.backgroundColor="transparent";},storeResponse:function(_64){var t=this,c=_64,qp,i;t.response=c;t.mergeAds(c);if(t.bodyLoadedTime>0||t.vj$.Browser.bIE){t.setInlineContent(c);}},render:function(){var t=this,r=t.response;if(r){t.setInlineContent(r);}
t.bodyLoadedTime=(new Date()).getTime();},loadAd:function(ad){var t=this;if(ad.type=="doubleclick"){t.dcAd(ad);}else{if(ad.type=="html"){t.htmlAd(ad);}else{if(ad.type=="popUnder"){t.popUnderAd(ad);}else{if(ad.type=="promo"){t.hasPromo=true;t.promoAd(ad);}else{if(ad.type=="htmlform"){t.formAd(ad);}else{t.noAd(ad);}}}}}},renderPromos:function(_69){var r=this.response,i,j;if(r){for(j=0;j<r.length;j++){for(i=0;i<_69.length;i++){if(r[j].id==_69[i]+""){this.loadAd(r[j]);}}}}},getPids:function(_6b){var p="",l=_6b.length;for(i=0;i<l;i++){p+=_6b[i];if(i!=(l-1)){p+=":";}}
return p;},timer:function(_6d,_6e,_6f){var t=this,c=(new Date()).getTime()-oGaugeInfo.iST,m=_6f,v=t.ssGaugeVectors,i,a=[];v[m]=v[m]||{};v[m].t=_6e;if(_6d){v[m].e=c;}else{v[m].s=c;}
for(i in v){if(v[i].t==_6e){a.push(i+"|"+v[i].s+"|"+(v[i].e||""));}}
vjo.dsf.utils.SiteSpeed.addParam("ctr"+_6e+"v",a.join(","));}}).props({siteCatalyst:function(_71,_72,p,_74){var esc=vjo.darwin.tracking.sitecatalyst;if(esc){var _76="Search",loc="North";if(p==188||p==570){_76="Browse";}
if(p==569||p==570){loc="Sky";}
var s=esc.EbaySiteCatalyst.s;s.linkTrackVars="prop27";s.linkTrackEvents="None";s.prop27=_72+":"+_76+":"+p+":"+_74;if(_71){s.linkTrackVars="prop28";s.prop28=s.prop27;s.prop27=null;}
s.tl(true,"o","RTM "+loc+" Ad");}}}).endType();

vjo.itype("vjo.dsf.common.IJsServiceHandler").protos({invoke:function(_1){}}).endType();

vjo.ctype("vjo.darwin.core.rtm.RTMInit").needs("vjo.dsf.utils.URL","U").needs("vjo.dsf.EventDispatcher","ED").needs("vjo.darwin.core.rtm.RTM","R").needs("vjo.darwin.core.rtm.RTMHelper","H").needs("vjo.dsf.assembly.VjClientAssembler","V").needs("vjo.dsf.cookie.VjCookieJar").satisfies("vjo.dsf.common.IJsServiceHandler").protos({R:null,constructs:function(_1){var t=this,o=t.vj$;t.R=new o.R(_1);o.H.setRtm(t.R);var b=t.R.json,s=b.onScrollPids;if(s&&s.length>0){o.ED.addEventListener(window,"scroll",function(){vjo.darwin.core.rtm.RTMOnDemand.onScroll(t.R);},t);}
o.ED.addEventListener(window,"beforeunload",t.setBBCookielet,t);vjo.dsf.ServiceEngine.registerSvcReqtHdl("RTM_REQUEST_ADS",t);},setBBCookielet:function(_4,_5){var t=this,o=t.vj$,j=o.VjCookieJar,c=j.readCookie("ebay","sbf");var bb=c?j.getBitFlag(c,20):0;j.writeCookielet("ebay","sbf",j.setBitFlag(c,20,1));if(_5){return bb;}},invoke:function(_8){var t=this,o=t.vj$,r=t.R,b=r.json,u=b.url,s="",U=o.U,c;var gp=r.processGlobalNavPids(true),ge=r.processGlobalNavPids(false);s+="&e=USC:"+r.getSegment(false);var p=U.getArg(u,"p"),ph=U.getArg(u,"ph"),ev=U.getArg(u,"ev");if(gp){if(p!=null&&p.indexOf(gp)==-1){u=u.replace("p="+p,"p="+p+":"+gp);if(ph){u=u.replace("ph="+ph,"ph="+ph+":"+ge);}
if(ev){u=u.replace("ev="+ev,"ev="+ev+":"+ge);}}
if(typeof(_oGlobalNavRTMInfo)!="undefined"){_oGlobalNavRTMInfo.aRTMPlacementData=[];}}
s+="&z="+r.getFlashVersion();s+="&bw="+r.getBrowserWidth();c=r.getCIDCookie();s+="&cg="+(c?c:new Date().getTime());s+="&enc="+r.getEncodingType();s+="&v=4";s+="&rnc=1";u+=s;b.url=u;if(b.fetchUrl){b.fetchUrl+=s;}
if(_8.pIds){u=u.replace("p="+p,"p="+r.getPids(_8.pIds));b.url=u;if(_8.callback){t.onSend(_8.callback);}else{t.onSend();}}else{if(b.suppressRtmCmd){return;}
if(!b.onload){t.onSend();}else{o.ED.addEventListener(window,"load",t.onLoad,t);}
o.ED.addEventListener(window,"load",r.setTimeOut,r);_8.returnData=false;}},onLoad:function(){var t=this;window.setTimeout(function(){t.onSend();},0);},handleRequest:function(_d){this.R.setTimeOut();this.onSend();},onSend:function(h){var t=this,r=t.R,b=r.json,u=b.url,s="",bb;var f=r.storeResponse,dd=document.domain||"";f=h?h:f;if(typeof(oGaugeInfo)!="undefined"){s+="&ss=1";bb=oGaugeInfo.bf;}else{bb=t.setBBCookielet(true);}
if(dd.indexOf("pages.")==0){bb=0;}
r.bb=bb;if(bb){s+="&bb=1";}
u+=s;b.url=u;if(b.mode=="1"&&!bb){if(b.fetchUrl){b.fetchUrl+=s;}
u=b.fetchUrl;}
if(u){var req=new vjo.dsf.assembly.VjClientAssemblerRequest(u,f,r,"cb",false);t.vj$.V.load(req);}else{r.sendComplete(1);r.TimedOut();}}}).endType();

vjo.ctype("vjo.dsf.Json").endType();if(!this.JSON){JSON=function(){function f(n){return n<10?'0'+n:n;}
Date.prototype.toJSON=function(key){return this.getUTCFullYear()+'-'+
f(this.getUTCMonth()+1)+'-'+
f(this.getUTCDate())+'T'+
f(this.getUTCHours())+':'+
f(this.getUTCMinutes())+':'+
f(this.getUTCSeconds())+'Z';};var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapeable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},rep;function quote(string){escapeable.lastIndex=0;return escapeable.test(string)?'"'+string.replace(escapeable,function(a){var c=meta[a];if(typeof c==='string'){return c;}
return'\\u'+('0000'+
(+(a.charCodeAt(0))).toString(16)).slice(-4);})+'"':'"'+string+'"';}
function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key);}
if(typeof rep==='function'){value=rep.call(holder,key,value);}
switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';}
gap+=indent;partial=[];if(typeof value.length==='number'&&!(value.propertyIsEnumerable('length'))){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null';}
v=partial.length===0?'[]':gap?'[\n'+gap+
partial.join(',\n'+gap)+'\n'+
mind+']':'['+partial.join(',')+']';gap=mind;return v;}
if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==='string'){v=str(k,value,rep);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value,rep);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}
v=partial.length===0?'{}':gap?'{\n'+gap+
partial.join(',\n'+gap)+'\n'+
mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;}}
return{stringify:function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' ';}}else if(typeof space==='string'){indent=space;}
rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify');}
return str('',{'':value});},parse:function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v;}else{delete value[k];}}}}
return reviver.call(holder,key,value);}
cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+('0000'+
(+(a.charCodeAt(0))).toString(16)).slice(-4);});}
if(/^[\],:{}\s]*$/.test(text.replace(/\\["\\\/bfnrtu]/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j;}
throw new SyntaxError('JSON.parse');}};}();}

vjo.ctype("vjo.dsf.Enc").props({unescape:vjo.NEEDS_IMPL,decodeURI:vjo.NEEDS_IMPL,decodeURIComponent:vjo.NEEDS_IMPL,encodeURIComponent:vjo.NEEDS_IMPL,encodeURI:vjo.NEEDS_IMPL}).inits(function(){vjo.dsf.Enc.unescape=window.unescape;vjo.dsf.Enc.decodeURI=window.decodeURI;vjo.dsf.Enc.decodeURIComponent=window.decodeURIComponent;vjo.dsf.Enc.encodeURIComponent=window.encodeURIComponent;vjo.dsf.Enc.encodeURI=window.encodeURI;}).endType();

vjo.ctype("vjo.dsf.Service").needs(["vjo.dsf.ServiceResponse","vjo.dsf.Enc","vjo.dsf.SvcErr","vjo.dsf.ServiceEngine","vjo.dsf.ServiceRegistry"]).props({clientInfo:null,E:null,callback:function(_1,_2){if(_1.readyState!=4){return;}
_2.response=new vjo.dsf.ServiceResponse();try{if(_1.status>=200&&_1.status<300){_2.response.data=_1.responseText;var _3=vjo.dsf.ServiceRegistry.getBinding(_2.svcConfig.respMarshalling);if(_3){_3.deserialize(_2);_2.status=1;}else{this.E.err(_2,this.E.InvRspBnd,"respMarshalling="+_2.svcConfig.respMarshalling);}}else{var _4=this.E.RqUnk;if(404===_1.status){_4=this.E.SvcPrc;}
this.E.err(_2,_4,"status="+_1.status+":readyState="+_1.readyState);}}
catch(e){this.E.err(_2,this.E.RqUnk,"status="+_1.status+":readyState="+_1.readyState);}
vjo.dsf.ServiceEngine.handleResponse(_2);delete _1.onreadystatechange;_1=null;},getXmlHttpReq:function(){var o=null;if(typeof XMLHttpRequest!="undefined"){o=new XMLHttpRequest();}else{if(window.ActiveXObject){try{o=new ActiveXObject("Microsoft.XMLHTTP");}
catch(e){o=new ActiveXObject("Msxml2.XMLHTTP");}}}
return o;},getClientInfo:function(){if(this.clientInfo){return this.clientInfo;}
var nv=navigator,agt=nv.userAgent.toLowerCase(),i=0,ver=0,b="";if(agt.indexOf("firefox")!=-1){b="Firefox";i=agt.lastIndexOf("firefox")+8;}else{if((/webkit|khtml/).test(agt)){b="Safari";i=agt.lastIndexOf("safari")+7;}else{if(typeof(window.opera)!="undefined"){b="Opera";i=agt.lastIndexOf("opera")+6;}else{if(nv.appName=="Netscape"){b="Netscape";i=agt.lastIndexOf("/")+1;}else{if(agt.indexOf("msie")!=-1){b="IE";i=agt.indexOf("msie")+4;}}}}}
if(b){ver=parseInt((b=="Opera")?window.opera.version():agt.substring(i));}
this.clientInfo=b+":"+ver+":";return this.clientInfo;},generateReqParams:function(_7){var _8="svcid="+vjo.dsf.Enc.encodeURIComponent(_7.svcId);if(_7.stok){_8+="&stok="+_7.stok;}
if(_7.pId){_8+="&pId="+_7.pId;}
if(_7.v){_8+="&v="+_7.v;}
var ma=_7.svcConfig.reqtMarshalling;_8+="&reqttype="+ma+"&resptype="+_7.svcConfig.respMarshalling;_8+="&clientType="+this.getClientInfo();_8+="&request=";if("JSCALLBACK"==ma){_8+=vjo.dsf.Enc.encodeURIComponent(JSON.stringify(_7.request));}
return _8;}}).inits(function(){this.E=this.vj$.SvcErr;}).endType();

// en_US/e705/SYS-ZAM_vjo_e70512631056_1_en_US
// b=12631056