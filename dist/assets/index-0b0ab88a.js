(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ys="161",Gl=1,Vc=2,Dn=3,Kn=0,Ze=1,di=100,Ms=204,Es=205,Xl=0,kc=1,Hc=2,Zn=0,Wc=1,Gc=2,Xc=3,qc=4,jc=5,Yc=6,ql=300,Ji=301,$i=302,bs=303,Ss=304,fa=306,ws=1e3,Un=1001,Ts=1002,He=1003,Ks=1004,cr=1005,en=1006,Aa=1007,ji=1008,pi=1009,Fs=1012,jl=1013,Yn=1014,On=1015,br=1016,Yl=1017,Zl=1018,fi=1020,Mn=1023,mi=1026,tr=1027,Kl=1029,Ql=1031,Jl=1033,Ca=33776,Ra=33777,Pa=33778,La=33779,Qs=35840,Js=35841,$s=35842,to=35843,$l=36196,eo=37492,no=37496,io=37808,ro=37809,ao=37810,so=37811,oo=37812,lo=37813,co=37814,ho=37815,uo=37816,po=37817,fo=37818,mo=37819,vo=37820,go=37821,Na=36492,_o=36494,xo=36495,yo=36284,Mo=36285,Eo=36286,tc=3e3,vi=3001,En="",we="srgb",zn="srgb-linear",zs="display-p3",ma="display-p3-linear",la="linear",me="srgb",ca="rec709",ha="p3",Si=7680,bo=35044,So="300 es",As=1035,er=2e3,ua=2001;class rr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const n=this._listeners[t];if(n!==void 0){const i=n.indexOf(e);i!==-1&&n.splice(i,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const e=this._listeners[t.type];if(e!==void 0){t.target=this;const n=e.slice(0);for(let i=0,r=n.length;i<r;i++)n[i].call(this,t);t.target=null}}}const Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ia=Math.PI/180,Cs=180/Math.PI;function Ar(){const a=4294967295*Math.random()|0,t=4294967295*Math.random()|0,e=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(Ie[255&a]+Ie[a>>8&255]+Ie[a>>16&255]+Ie[a>>24&255]+"-"+Ie[255&t]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[63&e|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[255&n]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]).toLowerCase()}function Ye(a,t,e){return Math.max(t,Math.min(e,a))}function Zc(a,t){return(a%t+t)%t}function Da(a,t,e){return(1-e)*a+e*t}function wo(a){return(a&a-1)==0&&a!==0}function Rs(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function hr(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function je(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return Math.round(4294967295*a);case Uint16Array:return Math.round(65535*a);case Uint8Array:return Math.round(255*a);case Int32Array:return Math.round(2147483647*a);case Int16Array:return Math.round(32767*a);case Int8Array:return Math.round(127*a);default:throw new Error("Invalid component type.")}}class $t{constructor(t=0,e=0){$t.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,s=this.y-t.y;return this.x=r*n-s*i+t.x,this.y=r*i+s*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jt{constructor(t,e,n,i,r,s,l,o,h){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,s,l,o,h)}set(t,e,n,i,r,s,l,o,h){const c=this.elements;return c[0]=t,c[1]=i,c[2]=l,c[3]=e,c[4]=r,c[5]=o,c[6]=n,c[7]=s,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,s=n[0],l=n[3],o=n[6],h=n[1],c=n[4],u=n[7],d=n[2],p=n[5],f=n[8],m=i[0],g=i[3],v=i[6],x=i[1],_=i[4],M=i[7],S=i[2],P=i[5],T=i[8];return r[0]=s*m+l*x+o*S,r[3]=s*g+l*_+o*P,r[6]=s*v+l*M+o*T,r[1]=h*m+c*x+u*S,r[4]=h*g+c*_+u*P,r[7]=h*v+c*M+u*T,r[2]=d*m+p*x+f*S,r[5]=d*g+p*_+f*P,r[8]=d*v+p*M+f*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],l=t[5],o=t[6],h=t[7],c=t[8];return e*s*c-e*l*h-n*r*c+n*l*o+i*r*h-i*s*o}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],l=t[5],o=t[6],h=t[7],c=t[8],u=c*s-l*h,d=l*o-c*r,p=h*r-s*o,f=e*u+n*d+i*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/f;return t[0]=u*m,t[1]=(i*h-c*n)*m,t[2]=(l*n-i*s)*m,t[3]=d*m,t[4]=(c*e-i*o)*m,t[5]=(i*r-l*e)*m,t[6]=p*m,t[7]=(n*o-h*e)*m,t[8]=(s*e-n*r)*m,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,s,l){const o=Math.cos(r),h=Math.sin(r);return this.set(n*o,n*h,-n*(o*s+h*l)+s+t,-i*h,i*o,-i*(-h*s+o*l)+l+e,0,0,1),this}scale(t,e){return this.premultiply(Ua.makeScale(t,e)),this}rotate(t){return this.premultiply(Ua.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ua.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ua=new Jt;function ec(a){for(let t=a.length-1;t>=0;--t)if(a[t]>=65535)return!0;return!1}function Sr(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Kc(){const a=Sr("canvas");return a.style.display="block",a}const To={};function Ki(a){a in To||(To[a]=!0,console.warn(a))}const Ao=new Jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Co=new Jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Pr={[zn]:{transfer:la,primaries:ca,toReference:a=>a,fromReference:a=>a},[we]:{transfer:me,primaries:ca,toReference:a=>a.convertSRGBToLinear(),fromReference:a=>a.convertLinearToSRGB()},[ma]:{transfer:la,primaries:ha,toReference:a=>a.applyMatrix3(Co),fromReference:a=>a.applyMatrix3(Ao)},[zs]:{transfer:me,primaries:ha,toReference:a=>a.convertSRGBToLinear().applyMatrix3(Co),fromReference:a=>a.applyMatrix3(Ao).convertLinearToSRGB()}},Qc=new Set([zn,ma]),oe={enabled:!0,_workingColorSpace:zn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(a){if(!Qc.has(a))throw new Error(`Unsupported working color space, "${a}".`);this._workingColorSpace=a},convert:function(a,t,e){if(this.enabled===!1||t===e||!t||!e)return a;const n=Pr[t].toReference;return(0,Pr[e].fromReference)(n(a))},fromWorkingColorSpace:function(a,t){return this.convert(a,this._workingColorSpace,t)},toWorkingColorSpace:function(a,t){return this.convert(a,t,this._workingColorSpace)},getPrimaries:function(a){return Pr[a].primaries},getTransfer:function(a){return a===En?la:Pr[a].transfer}};function Qi(a){return a<.04045?.0773993808*a:Math.pow(.9478672986*a+.0521327014,2.4)}function Oa(a){return a<.0031308?12.92*a:1.055*Math.pow(a,.41666)-.055}let wi;class nc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{wi===void 0&&(wi=Sr("canvas")),wi.width=t.width,wi.height=t.height;const n=wi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=wi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Sr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=255*Qi(r[s]/255);return n.putImageData(i,0,0),e}if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(255*Qi(e[n]/255)):e[n]=Qi(e[n]);return{data:e,width:t.width,height:t.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Jc=0;class ic{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jc++}),this.uuid=Ar(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,l=i.length;s<l;s++)i[s].isDataTexture?r.push(Fa(i[s].image)):r.push(Fa(i[s]))}else r=Fa(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Fa(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?nc.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $c=0;class We extends rr{constructor(t=We.DEFAULT_IMAGE,e=We.DEFAULT_MAPPING,n=1001,i=1001,r=1006,s=1008,l=1023,o=1009,h=We.DEFAULT_ANISOTROPY,c=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$c++}),this.uuid=Ar(),this.name="",this.source=new ic(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=o,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===vi?we:En),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ql)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ws:t.x=t.x-Math.floor(t.x);break;case Un:t.x=t.x<0?0:1;break;case Ts:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x)}if(t.y<0||t.y>1)switch(this.wrapT){case ws:t.y=t.y-Math.floor(t.y);break;case Un:t.y=t.y<0?0:1;break;case Ts:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y)}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===we?vi:tc}set encoding(t){Ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===vi?we:En}}We.DEFAULT_IMAGE=null,We.DEFAULT_MAPPING=ql,We.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,n=0,i=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*e+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*e+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*e+s[7]*n+s[11]*i+s[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const o=t.elements,h=o[0],c=o[4],u=o[8],d=o[1],p=o[5],f=o[9],m=o[2],g=o[6],v=o[10];if(Math.abs(c-d)<.01&&Math.abs(u-m)<.01&&Math.abs(f-g)<.01){if(Math.abs(c+d)<.1&&Math.abs(u+m)<.1&&Math.abs(f+g)<.1&&Math.abs(h+p+v-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(h+1)/2,M=(p+1)/2,S=(v+1)/2,P=(c+d)/4,T=(u+m)/4,z=(f+g)/4;return _>M&&_>S?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=P/n,r=T/n):M>S?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=P/i,r=z/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=T/r,i=z/r),this.set(n,i,r,e),this}let x=Math.sqrt((g-f)*(g-f)+(u-m)*(u-m)+(d-c)*(d-c));return Math.abs(x)<.001&&(x=1),this.x=(g-f)/x,this.y=(u-m)/x,this.z=(d-c)/x,this.w=Math.acos((h+p+v-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class th extends rr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(Ki("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===vi?we:En),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new We(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){this.width===t&&this.height===e&&this.depth===n||(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ic(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yi extends th{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class rc extends We{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=He,this.minFilter=He,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class eh extends We{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=He,this.minFilter=He,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cr{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,s,l){let o=n[i+0],h=n[i+1],c=n[i+2],u=n[i+3];const d=r[s+0],p=r[s+1],f=r[s+2],m=r[s+3];if(l===0)return t[e+0]=o,t[e+1]=h,t[e+2]=c,void(t[e+3]=u);if(l===1)return t[e+0]=d,t[e+1]=p,t[e+2]=f,void(t[e+3]=m);if(u!==m||o!==d||h!==p||c!==f){let g=1-l;const v=o*d+h*p+c*f+u*m,x=v>=0?1:-1,_=1-v*v;if(_>Number.EPSILON){const S=Math.sqrt(_),P=Math.atan2(S,v*x);g=Math.sin(g*P)/S,l=Math.sin(l*P)/S}const M=l*x;if(o=o*g+d*M,h=h*g+p*M,c=c*g+f*M,u=u*g+m*M,g===1-l){const S=1/Math.sqrt(o*o+h*h+c*c+u*u);o*=S,h*=S,c*=S,u*=S}}t[e]=o,t[e+1]=h,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,s){const l=n[i],o=n[i+1],h=n[i+2],c=n[i+3],u=r[s],d=r[s+1],p=r[s+2],f=r[s+3];return t[e]=l*f+c*u+o*p-h*d,t[e+1]=o*f+c*d+h*u-l*p,t[e+2]=h*f+c*p+l*d-o*u,t[e+3]=c*f-l*u-o*d-h*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,s=t._order,l=Math.cos,o=Math.sin,h=l(n/2),c=l(i/2),u=l(r/2),d=o(n/2),p=o(i/2),f=o(r/2);switch(s){case"XYZ":this._x=d*c*u+h*p*f,this._y=h*p*u-d*c*f,this._z=h*c*f+d*p*u,this._w=h*c*u-d*p*f;break;case"YXZ":this._x=d*c*u+h*p*f,this._y=h*p*u-d*c*f,this._z=h*c*f-d*p*u,this._w=h*c*u+d*p*f;break;case"ZXY":this._x=d*c*u-h*p*f,this._y=h*p*u+d*c*f,this._z=h*c*f+d*p*u,this._w=h*c*u-d*p*f;break;case"ZYX":this._x=d*c*u-h*p*f,this._y=h*p*u+d*c*f,this._z=h*c*f-d*p*u,this._w=h*c*u+d*p*f;break;case"YZX":this._x=d*c*u+h*p*f,this._y=h*p*u+d*c*f,this._z=h*c*f-d*p*u,this._w=h*c*u-d*p*f;break;case"XZY":this._x=d*c*u-h*p*f,this._y=h*p*u-d*c*f,this._z=h*c*f+d*p*u,this._w=h*c*u+d*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],s=e[1],l=e[5],o=e[9],h=e[2],c=e[6],u=e[10],d=n+l+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-o)*p,this._y=(r-h)*p,this._z=(s-i)*p}else if(n>l&&n>u){const p=2*Math.sqrt(1+n-l-u);this._w=(c-o)/p,this._x=.25*p,this._y=(i+s)/p,this._z=(r+h)/p}else if(l>u){const p=2*Math.sqrt(1+l-n-u);this._w=(r-h)/p,this._x=(i+s)/p,this._y=.25*p,this._z=(o+c)/p}else{const p=2*Math.sqrt(1+u-n-l);this._w=(s-i)/p,this._x=(r+h)/p,this._y=(o+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ye(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,s=t._w,l=e._x,o=e._y,h=e._z,c=e._w;return this._x=n*c+s*l+i*h-r*o,this._y=i*c+s*o+r*l-n*h,this._z=r*c+s*h+n*o-i*l,this._w=s*c-n*l-i*o-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,s=this._w;let l=s*t._w+n*t._x+i*t._y+r*t._z;if(l<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,l=-l):this.copy(t),l>=1)return this._w=s,this._x=n,this._y=i,this._z=r,this;const o=1-l*l;if(o<=Number.EPSILON){const p=1-e;return this._w=p*s+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const h=Math.sqrt(o),c=Math.atan2(h,l),u=Math.sin((1-e)*c)/h,d=Math.sin(e*c)/h;return this._w=s*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class et{constructor(t=0,e=0,n=0){et.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ro.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ro.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,s=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,s=t.y,l=t.z,o=t.w,h=2*(s*i-l*n),c=2*(l*e-r*i),u=2*(r*n-s*e);return this.x=e+o*h+s*u-l*c,this.y=n+o*c+l*h-r*u,this.z=i+o*u+r*c-s*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,s=e.x,l=e.y,o=e.z;return this.x=i*o-r*l,this.y=r*s-n*o,this.z=n*l-i*s,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return za.copy(this).projectOnVector(t),this.sub(za)}reflect(t){return this.sub(za.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,4*e)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,3*e)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=2*(Math.random()-.5),e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const za=new et,Ro=new Cr;class $n{constructor(t=new et(1/0,1/0,1/0),e=new et(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let s=0,l=r.count;s<l;s++)t.isMesh===!0?t.getVertexPosition(s,hn):hn.fromBufferAttribute(r,s),hn.applyMatrix4(t.matrixWorld),this.expandByPoint(hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Lr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Lr.copy(n.boundingBox)),Lr.applyMatrix4(t.matrixWorld),this.union(Lr)}const i=t.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ur),Nr.subVectors(this.max,ur),Ti.subVectors(t.a,ur),Ai.subVectors(t.b,ur),Ci.subVectors(t.c,ur),Vn.subVectors(Ai,Ti),kn.subVectors(Ci,Ai),si.subVectors(Ti,Ci);let e=[0,-Vn.z,Vn.y,0,-kn.z,kn.y,0,-si.z,si.y,Vn.z,0,-Vn.x,kn.z,0,-kn.x,si.z,0,-si.x,-Vn.y,Vn.x,0,-kn.y,kn.x,0,-si.y,si.x,0];return!!Ba(e,Ti,Ai,Ci,Nr)&&(e=[1,0,0,0,1,0,0,0,1],!!Ba(e,Ti,Ai,Ci,Nr)&&(Ir.crossVectors(Vn,kn),e=[Ir.x,Ir.y,Ir.z],Ba(e,Ti,Ai,Ci,Nr)))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=.5*this.getSize(hn).length()),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()||(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(An)),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const An=[new et,new et,new et,new et,new et,new et,new et,new et],hn=new et,Lr=new $n,Ti=new et,Ai=new et,Ci=new et,Vn=new et,kn=new et,si=new et,ur=new et,Nr=new et,Ir=new et,oi=new et;function Ba(a,t,e,n,i){for(let r=0,s=a.length-3;r<=s;r+=3){oi.fromArray(a,r);const l=i.x*Math.abs(oi.x)+i.y*Math.abs(oi.y)+i.z*Math.abs(oi.z),o=t.dot(oi),h=e.dot(oi),c=n.dot(oi);if(Math.max(-Math.max(o,h,c),Math.min(o,h,c))>l)return!1}return!0}const nh=new $n,dr=new et,Va=new et;class ti{constructor(t=new et,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):nh.setFromPoints(t).getCenter(n);let i=0;for(let r=0,s=t.length;r<s;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;dr.subVectors(t,this.center);const e=dr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=.5*(n-this.radius);this.center.addScaledVector(dr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Va.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(dr.copy(t.center).add(Va)),this.expandByPoint(dr.copy(t.center).sub(Va))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Cn=new et,ka=new et,Dr=new et,Hn=new et,Ha=new et,Ur=new et,Wa=new et;class va{constructor(t=new et,e=new et(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Cn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Cn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Cn.copy(this.origin).addScaledVector(this.direction,e),Cn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ka.copy(t).add(e).multiplyScalar(.5),Dr.copy(e).sub(t).normalize(),Hn.copy(this.origin).sub(ka);const r=.5*t.distanceTo(e),s=-this.direction.dot(Dr),l=Hn.dot(this.direction),o=-Hn.dot(Dr),h=Hn.lengthSq(),c=Math.abs(1-s*s);let u,d,p,f;if(c>0)if(u=s*o-l,d=s*l-o,f=r*c,u>=0)if(d>=-f)if(d<=f){const m=1/c;u*=m,d*=m,p=u*(u+s*d+2*l)+d*(s*u+d+2*o)+h}else d=r,u=Math.max(0,-(s*d+l)),p=-u*u+d*(d+2*o)+h;else d=-r,u=Math.max(0,-(s*d+l)),p=-u*u+d*(d+2*o)+h;else d<=-f?(u=Math.max(0,-(-s*r+l)),d=u>0?-r:Math.min(Math.max(-r,-o),r),p=-u*u+d*(d+2*o)+h):d<=f?(u=0,d=Math.min(Math.max(-r,-o),r),p=d*(d+2*o)+h):(u=Math.max(0,-(s*r+l)),d=u>0?r:Math.min(Math.max(-r,-o),r),p=-u*u+d*(d+2*o)+h);else d=s>0?-r:r,u=Math.max(0,-(s*d+l)),p=-u*u+d*(d+2*o)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ka).addScaledVector(Dr,d),p}intersectSphere(t,e){Cn.subVectors(t.center,this.origin);const n=Cn.dot(this.direction),i=Cn.dot(Cn)-n*n,r=t.radius*t.radius;if(i>r)return null;const s=Math.sqrt(r-i),l=n-s,o=n+s;return o<0?null:l<0?this.at(o,e):this.at(l,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0?!0:t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,s,l,o;const h=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;return h>=0?(n=(t.min.x-d.x)*h,i=(t.max.x-d.x)*h):(n=(t.max.x-d.x)*h,i=(t.min.x-d.x)*h),c>=0?(r=(t.min.y-d.y)*c,s=(t.max.y-d.y)*c):(r=(t.max.y-d.y)*c,s=(t.min.y-d.y)*c),n>s||r>i?null:((r>n||isNaN(n))&&(n=r),(s<i||isNaN(i))&&(i=s),u>=0?(l=(t.min.z-d.z)*u,o=(t.max.z-d.z)*u):(l=(t.max.z-d.z)*u,o=(t.min.z-d.z)*u),n>o||l>i?null:((l>n||n!=n)&&(n=l),(o<i||i!=i)&&(i=o),i<0?null:this.at(n>=0?n:i,e)))}intersectsBox(t){return this.intersectBox(t,Cn)!==null}intersectTriangle(t,e,n,i,r){Ha.subVectors(e,t),Ur.subVectors(n,t),Wa.crossVectors(Ha,Ur);let s,l=this.direction.dot(Wa);if(l>0){if(i)return null;s=1}else{if(!(l<0))return null;s=-1,l=-l}Hn.subVectors(this.origin,t);const o=s*this.direction.dot(Ur.crossVectors(Hn,Ur));if(o<0)return null;const h=s*this.direction.dot(Ha.cross(Hn));if(h<0||o+h>l)return null;const c=-s*Hn.dot(Wa);return c<0?null:this.at(c/l,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qt{constructor(t,e,n,i,r,s,l,o,h,c,u,d,p,f,m,g){Qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,s,l,o,h,c,u,d,p,f,m,g)}set(t,e,n,i,r,s,l,o,h,c,u,d,p,f,m,g){const v=this.elements;return v[0]=t,v[4]=e,v[8]=n,v[12]=i,v[1]=r,v[5]=s,v[9]=l,v[13]=o,v[2]=h,v[6]=c,v[10]=u,v[14]=d,v[3]=p,v[7]=f,v[11]=m,v[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ri.setFromMatrixColumn(t,0).length(),r=1/Ri.setFromMatrixColumn(t,1).length(),s=1/Ri.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*s,e[9]=n[9]*s,e[10]=n[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,s=Math.cos(n),l=Math.sin(n),o=Math.cos(i),h=Math.sin(i),c=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=s*c,p=s*u,f=l*c,m=l*u;e[0]=o*c,e[4]=-o*u,e[8]=h,e[1]=p+f*h,e[5]=d-m*h,e[9]=-l*o,e[2]=m-d*h,e[6]=f+p*h,e[10]=s*o}else if(t.order==="YXZ"){const d=o*c,p=o*u,f=h*c,m=h*u;e[0]=d+m*l,e[4]=f*l-p,e[8]=s*h,e[1]=s*u,e[5]=s*c,e[9]=-l,e[2]=p*l-f,e[6]=m+d*l,e[10]=s*o}else if(t.order==="ZXY"){const d=o*c,p=o*u,f=h*c,m=h*u;e[0]=d-m*l,e[4]=-s*u,e[8]=f+p*l,e[1]=p+f*l,e[5]=s*c,e[9]=m-d*l,e[2]=-s*h,e[6]=l,e[10]=s*o}else if(t.order==="ZYX"){const d=s*c,p=s*u,f=l*c,m=l*u;e[0]=o*c,e[4]=f*h-p,e[8]=d*h+m,e[1]=o*u,e[5]=m*h+d,e[9]=p*h-f,e[2]=-h,e[6]=l*o,e[10]=s*o}else if(t.order==="YZX"){const d=s*o,p=s*h,f=l*o,m=l*h;e[0]=o*c,e[4]=m-d*u,e[8]=f*u+p,e[1]=u,e[5]=s*c,e[9]=-l*c,e[2]=-h*c,e[6]=p*u+f,e[10]=d-m*u}else if(t.order==="XZY"){const d=s*o,p=s*h,f=l*o,m=l*h;e[0]=o*c,e[4]=-u,e[8]=h*c,e[1]=d*u+m,e[5]=s*c,e[9]=p*u-f,e[2]=f*u-p,e[6]=l*c,e[10]=m*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ih,t,rh)}lookAt(t,e,n){const i=this.elements;return Je.subVectors(t,e),Je.lengthSq()===0&&(Je.z=1),Je.normalize(),Wn.crossVectors(n,Je),Wn.lengthSq()===0&&(Math.abs(n.z)===1?Je.x+=1e-4:Je.z+=1e-4,Je.normalize(),Wn.crossVectors(n,Je)),Wn.normalize(),Or.crossVectors(Je,Wn),i[0]=Wn.x,i[4]=Or.x,i[8]=Je.x,i[1]=Wn.y,i[5]=Or.y,i[9]=Je.y,i[2]=Wn.z,i[6]=Or.z,i[10]=Je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,s=n[0],l=n[4],o=n[8],h=n[12],c=n[1],u=n[5],d=n[9],p=n[13],f=n[2],m=n[6],g=n[10],v=n[14],x=n[3],_=n[7],M=n[11],S=n[15],P=i[0],T=i[4],z=i[8],k=i[12],L=i[1],D=i[5],A=i[9],V=i[13],j=i[2],Q=i[6],pt=i[10],H=i[14],O=i[3],X=i[7],Z=i[11],R=i[15];return r[0]=s*P+l*L+o*j+h*O,r[4]=s*T+l*D+o*Q+h*X,r[8]=s*z+l*A+o*pt+h*Z,r[12]=s*k+l*V+o*H+h*R,r[1]=c*P+u*L+d*j+p*O,r[5]=c*T+u*D+d*Q+p*X,r[9]=c*z+u*A+d*pt+p*Z,r[13]=c*k+u*V+d*H+p*R,r[2]=f*P+m*L+g*j+v*O,r[6]=f*T+m*D+g*Q+v*X,r[10]=f*z+m*A+g*pt+v*Z,r[14]=f*k+m*V+g*H+v*R,r[3]=x*P+_*L+M*j+S*O,r[7]=x*T+_*D+M*Q+S*X,r[11]=x*z+_*A+M*pt+S*Z,r[15]=x*k+_*V+M*H+S*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],s=t[1],l=t[5],o=t[9],h=t[13],c=t[2],u=t[6],d=t[10],p=t[14];return t[3]*(+r*o*u-i*h*u-r*l*d+n*h*d+i*l*p-n*o*p)+t[7]*(+e*o*p-e*h*d+r*s*d-i*s*p+i*h*c-r*o*c)+t[11]*(+e*h*u-e*l*p-r*s*u+n*s*p+r*l*c-n*h*c)+t[15]*(-i*l*c-e*o*u+e*l*d+i*s*u-n*s*d+n*o*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],l=t[5],o=t[6],h=t[7],c=t[8],u=t[9],d=t[10],p=t[11],f=t[12],m=t[13],g=t[14],v=t[15],x=u*g*h-m*d*h+m*o*p-l*g*p-u*o*v+l*d*v,_=f*d*h-c*g*h-f*o*p+s*g*p+c*o*v-s*d*v,M=c*m*h-f*u*h+f*l*p-s*m*p-c*l*v+s*u*v,S=f*u*o-c*m*o-f*l*d+s*m*d+c*l*g-s*u*g,P=e*x+n*_+i*M+r*S;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/P;return t[0]=x*T,t[1]=(m*d*r-u*g*r-m*i*p+n*g*p+u*i*v-n*d*v)*T,t[2]=(l*g*r-m*o*r+m*i*h-n*g*h-l*i*v+n*o*v)*T,t[3]=(u*o*r-l*d*r-u*i*h+n*d*h+l*i*p-n*o*p)*T,t[4]=_*T,t[5]=(c*g*r-f*d*r+f*i*p-e*g*p-c*i*v+e*d*v)*T,t[6]=(f*o*r-s*g*r-f*i*h+e*g*h+s*i*v-e*o*v)*T,t[7]=(s*d*r-c*o*r+c*i*h-e*d*h-s*i*p+e*o*p)*T,t[8]=M*T,t[9]=(f*u*r-c*m*r-f*n*p+e*m*p+c*n*v-e*u*v)*T,t[10]=(s*m*r-f*l*r+f*n*h-e*m*h-s*n*v+e*l*v)*T,t[11]=(c*l*r-s*u*r-c*n*h+e*u*h+s*n*p-e*l*p)*T,t[12]=S*T,t[13]=(c*m*i-f*u*i+f*n*d-e*m*d-c*n*g+e*u*g)*T,t[14]=(f*l*i-s*m*i-f*n*o+e*m*o+s*n*g-e*l*g)*T,t[15]=(s*u*i-c*l*i+c*n*o-e*u*o-s*n*d+e*l*d)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,s=t.x,l=t.y,o=t.z,h=r*s,c=r*l;return this.set(h*s+n,h*l-i*o,h*o+i*l,0,h*l+i*o,c*l+n,c*o-i*s,0,h*o-i*l,c*o+i*s,r*o*o+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,s){return this.set(1,n,r,0,t,1,s,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,s=e._y,l=e._z,o=e._w,h=r+r,c=s+s,u=l+l,d=r*h,p=r*c,f=r*u,m=s*c,g=s*u,v=l*u,x=o*h,_=o*c,M=o*u,S=n.x,P=n.y,T=n.z;return i[0]=(1-(m+v))*S,i[1]=(p+M)*S,i[2]=(f-_)*S,i[3]=0,i[4]=(p-M)*P,i[5]=(1-(d+v))*P,i[6]=(g+x)*P,i[7]=0,i[8]=(f+_)*T,i[9]=(g-x)*T,i[10]=(1-(d+m))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Ri.set(i[0],i[1],i[2]).length();const s=Ri.set(i[4],i[5],i[6]).length(),l=Ri.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],un.copy(this);const o=1/r,h=1/s,c=1/l;return un.elements[0]*=o,un.elements[1]*=o,un.elements[2]*=o,un.elements[4]*=h,un.elements[5]*=h,un.elements[6]*=h,un.elements[8]*=c,un.elements[9]*=c,un.elements[10]*=c,e.setFromRotationMatrix(un),n.x=r,n.y=s,n.z=l,this}makePerspective(t,e,n,i,r,s,l=2e3){const o=this.elements,h=2*r/(e-t),c=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let p,f;if(l===er)p=-(s+r)/(s-r),f=-2*s*r/(s-r);else{if(l!==ua)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);p=-s/(s-r),f=-s*r/(s-r)}return o[0]=h,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=p,o[14]=f,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,n,i,r,s,l=2e3){const o=this.elements,h=1/(e-t),c=1/(n-i),u=1/(s-r),d=(e+t)*h,p=(n+i)*c;let f,m;if(l===er)f=(s+r)*u,m=-2*u;else{if(l!==ua)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);f=r*u,m=-1*u}return o[0]=2*h,o[4]=0,o[8]=0,o[12]=-d,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-p,o[2]=0,o[6]=0,o[10]=m,o[14]=-f,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ri=new et,un=new Qt,ih=new et(0,0,0),rh=new et(1,1,1),Wn=new et,Or=new et,Je=new et,Po=new Qt,Lo=new Cr;class ga{constructor(t=0,e=0,n=0,i=ga.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],s=i[4],l=i[8],o=i[1],h=i[5],c=i[9],u=i[2],d=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(l,p),this._z=Math.atan2(o,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-s,h)):(this._y=0,this._z=Math.atan2(o,r));break;case"ZYX":this._y=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(o,r)):(this._x=0,this._z=Math.atan2(-s,h));break;case"YZX":this._z=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(l,p));break;case"XZY":this._z=Math.asin(-Ye(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Po.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Po,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Lo.setFromEuler(this),this.setFromQuaternion(Lo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ga.DEFAULT_ORDER="XYZ";class ac{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!=0}isEnabled(t){return(this.mask&(1<<t|0))!=0}}let ah=0;const No=new et,Pi=new Cr,Rn=new Qt,Fr=new et,pr=new et,sh=new et,oh=new Cr,Io=new et(1,0,0),Do=new et(0,1,0),Uo=new et(0,0,1),lh={type:"added"},ch={type:"removed"};class Fe extends rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ah++}),this.uuid=Ar(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fe.DEFAULT_UP.clone();const t=new et,e=new ga,n=new Cr,i=new et(1,1,1);e._onChange(function(){n.setFromEuler(e,!1)}),n._onChange(function(){e.setFromQuaternion(n,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Qt},normalMatrix:{value:new Jt}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=Fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ac,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.premultiply(Pi),this}rotateX(t){return this.rotateOnAxis(Io,t)}rotateY(t){return this.rotateOnAxis(Do,t)}rotateZ(t){return this.rotateOnAxis(Uo,t)}translateOnAxis(t,e){return No.copy(t).applyQuaternion(this.quaternion),this.position.add(No.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Io,t)}translateY(t){return this.translateOnAxis(Do,t)}translateZ(t){return this.translateOnAxis(Uo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fr.copy(t):Fr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(pr,Fr,this.up):Rn.lookAt(Fr,pr,this.up),this.quaternion.setFromRotationMatrix(Rn),i&&(Rn.extractRotation(i.matrixWorld),Pi.setFromRotationMatrix(Rn),this.quaternion.premultiply(Pi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(lh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ch)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Rn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Rn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,t,sh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,oh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];r.matrixWorldAutoUpdate!==!0&&t!==!0||r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++){const l=i[r];l.matrixWorldAutoUpdate===!0&&l.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};function r(l,o){return l[o.uuid]===void 0&&(l[o.uuid]=o.toJSON(t)),o.uuid}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const o=l.shapes;if(Array.isArray(o))for(let h=0,c=o.length;h<c;h++){const u=o[h];r(t.shapes,u)}else r(t.shapes,o)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let o=0,h=this.material.length;o<h;o++)l.push(r(t.materials,this.material[o]));i.material=l}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let l=0;l<this.children.length;l++)i.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let l=0;l<this.animations.length;l++){const o=this.animations[l];i.animations.push(r(t.animations,o))}}if(e){const l=s(t.geometries),o=s(t.materials),h=s(t.textures),c=s(t.images),u=s(t.shapes),d=s(t.skeletons),p=s(t.animations),f=s(t.nodes);l.length>0&&(n.geometries=l),o.length>0&&(n.materials=o),h.length>0&&(n.textures=h),c.length>0&&(n.images=c),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),f.length>0&&(n.nodes=f)}return n.object=i,n;function s(l){const o=[];for(const h in l){const c=l[h];delete c.metadata,o.push(c)}return o}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Fe.DEFAULT_UP=new et(0,1,0),Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0,Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new et,Pn=new et,Ga=new et,Ln=new et,Li=new et,Ni=new et,Oo=new et,Xa=new et,qa=new et,ja=new et;class mn{constructor(t=new et,e=new et,n=new et){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),dn.subVectors(t,e),i.cross(dn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){dn.subVectors(i,e),Pn.subVectors(n,e),Ga.subVectors(t,e);const s=dn.dot(dn),l=dn.dot(Pn),o=dn.dot(Ga),h=Pn.dot(Pn),c=Pn.dot(Ga),u=s*h-l*l;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(h*o-l*c)*d,f=(s*c-l*o)*d;return r.set(1-p-f,f,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ln)!==null&&Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(t,e,n,i,r,s,l,o){return this.getBarycoord(t,e,n,i,Ln)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(r,Ln.x),o.addScaledVector(s,Ln.y),o.addScaledVector(l,Ln.z),o)}static isFrontFacing(t,e,n,i){return dn.subVectors(n,e),Pn.subVectors(t,e),dn.cross(Pn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return dn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),.5*dn.cross(Pn).length()}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return mn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return mn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let s,l;Li.subVectors(i,n),Ni.subVectors(r,n),Xa.subVectors(t,n);const o=Li.dot(Xa),h=Ni.dot(Xa);if(o<=0&&h<=0)return e.copy(n);qa.subVectors(t,i);const c=Li.dot(qa),u=Ni.dot(qa);if(c>=0&&u<=c)return e.copy(i);const d=o*u-c*h;if(d<=0&&o>=0&&c<=0)return s=o/(o-c),e.copy(n).addScaledVector(Li,s);ja.subVectors(t,r);const p=Li.dot(ja),f=Ni.dot(ja);if(f>=0&&p<=f)return e.copy(r);const m=p*h-o*f;if(m<=0&&h>=0&&f<=0)return l=h/(h-f),e.copy(n).addScaledVector(Ni,l);const g=c*f-p*u;if(g<=0&&u-c>=0&&p-f>=0)return Oo.subVectors(r,i),l=(u-c)/(u-c+(p-f)),e.copy(i).addScaledVector(Oo,l);const v=1/(g+m+d);return s=m*v,l=d*v,e.copy(n).addScaledVector(Li,s).addScaledVector(Ni,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const sc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},zr={h:0,s:0,l:0};function Ya(a,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?a+6*(t-a)*e:e<.5?t:e<2/3?a+6*(t-a)*(2/3-e):a}class ne{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=we){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(255&t)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=oe.workingColorSpace){if(t=Zc(t,1),e=Ye(e,0,1),n=Ye(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,s=2*n-r;this.r=Ya(s,r,t+1/3),this.g=Ya(s,r,t),this.b=Ya(s,r,t-1/3)}return oe.toWorkingColorSpace(this,i),this}setStyle(t,e=we){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const s=i[1],l=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(s===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=we){const n=sc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qi(t.r),this.g=Qi(t.g),this.b=Qi(t.b),this}copyLinearToSRGB(t){return this.r=Oa(t.r),this.g=Oa(t.g),this.b=Oa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=we){return oe.fromWorkingColorSpace(De.copy(this),t),65536*Math.round(Ye(255*De.r,0,255))+256*Math.round(Ye(255*De.g,0,255))+Math.round(Ye(255*De.b,0,255))}getHexString(t=we){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(De.copy(this),e);const n=De.r,i=De.g,r=De.b,s=Math.max(n,i,r),l=Math.min(n,i,r);let o,h;const c=(l+s)/2;if(l===s)o=0,h=0;else{const u=s-l;switch(h=c<=.5?u/(s+l):u/(2-s-l),s){case n:o=(i-r)/u+(i<r?6:0);break;case i:o=(r-n)/u+2;break;case r:o=(n-i)/u+4}o/=6}return t.h=o,t.s=h,t.l=c,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(De.copy(this),e),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=we){oe.fromWorkingColorSpace(De.copy(this),t);const e=De.r,n=De.g,i=De.b;return t!==we?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(255*e)},${Math.round(255*n)},${Math.round(255*i)})`}offsetHSL(t,e,n){return this.getHSL(Gn),this.setHSL(Gn.h+t,Gn.s+e,Gn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Gn),t.getHSL(zr);const n=Da(Gn.h,zr.h,e),i=Da(Gn.s,zr.s,e),r=Da(Gn.l,zr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const De=new ne;ne.NAMES=sc;let hh=0;class _a extends rr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=Ar(),this.name="",this.type="Material",this.blending=1,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ms,this.blendDst=Es,this.blendEquation=di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ne(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Si,this.stencilZFail=Si,this.stencilZPass=Si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];i!==void 0?i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n:console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`)}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function i(r){const s=[];for(const l in r){const o=r[l];delete o.metadata,s.push(o)}return s}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==Kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ms&&(n.blendSrc=this.blendSrc),this.blendDst!==Es&&(n.blendDst=this.blendDst),this.blendEquation!==di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),e){const r=i(t.textures),s=i(t.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Bs extends _a{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}uh();function uh(){const a=new ArrayBuffer(4),t=new Float32Array(a),e=new Uint32Array(a),n=new Uint32Array(512),i=new Uint32Array(512);for(let o=0;o<256;++o){const h=o-127;h<-27?(n[o]=0,n[256|o]=32768,i[o]=24,i[256|o]=24):h<-14?(n[o]=1024>>-h-14,n[256|o]=1024>>-h-14|32768,i[o]=-h-1,i[256|o]=-h-1):h<=15?(n[o]=h+15<<10,n[256|o]=h+15<<10|32768,i[o]=13,i[256|o]=13):h<128?(n[o]=31744,n[256|o]=64512,i[o]=24,i[256|o]=24):(n[o]=31744,n[256|o]=64512,i[o]=13,i[256|o]=13)}const r=new Uint32Array(2048),s=new Uint32Array(64),l=new Uint32Array(64);for(let o=1;o<1024;++o){let h=o<<13,c=0;for(;!(8388608&h);)h<<=1,c-=8388608;h&=-8388609,c+=947912704,r[o]=h|c}for(let o=1024;o<2048;++o)r[o]=939524096+(o-1024<<13);for(let o=1;o<31;++o)s[o]=o<<23;s[31]=1199570944,s[32]=2147483648;for(let o=33;o<63;++o)s[o]=2147483648+(o-32<<23);s[63]=3347054592;for(let o=1;o<64;++o)o!==32&&(l[o]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:s,offsetTable:l}}const xe=new et,Br=new $t;class bn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=bo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Ki("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Br.fromBufferAttribute(this,e),Br.applyMatrix3(t),this.setXY(e,Br.x,Br.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=hr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=je(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hr(e,this.array)),e}setX(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hr(e,this.array)),e}setY(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hr(e,this.array)),e}setW(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),n=je(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),n=je(n,this.array),i=je(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),n=je(n,this.array),i=je(i,this.array),r=je(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==bo&&(t.usage=this.usage),t}}class oc extends bn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class lc extends bn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class gi extends bn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let dh=0;const an=new Qt,Za=new Fe,Ii=new et,$e=new $n,fr=new $n,Se=new et;class Ei extends rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dh++}),this.uuid=Ar(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ec(t)?lc:oc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return an.makeRotationFromQuaternion(t),this.applyMatrix4(an),this}rotateX(t){return an.makeRotationX(t),this.applyMatrix4(an),this}rotateY(t){return an.makeRotationY(t),this.applyMatrix4(an),this}rotateZ(t){return an.makeRotationZ(t),this.applyMatrix4(an),this}translate(t,e,n){return an.makeTranslation(t,e,n),this.applyMatrix4(an),this}scale(t,e,n){return an.makeScale(t,e,n),this.applyMatrix4(an),this}lookAt(t){return Za.lookAt(t),Za.updateMatrix(),this.applyMatrix4(Za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ii).negate(),this.translate(Ii.x,Ii.y,Ii.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new gi(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $n);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new et(-1/0,-1/0,-1/0),new et(1/0,1/0,1/0));if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];$e.setFromBufferAttribute(r),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ti);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new et,1/0);if(t){const n=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let r=0,s=e.length;r<s;r++){const l=e[r];fr.setFromBufferAttribute(l),this.morphTargetsRelative?(Se.addVectors($e.min,fr.min),$e.expandByPoint(Se),Se.addVectors($e.max,fr.max),$e.expandByPoint(Se)):($e.expandByPoint(fr.min),$e.expandByPoint(fr.max))}$e.getCenter(n);let i=0;for(let r=0,s=t.count;r<s;r++)Se.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Se));if(e)for(let r=0,s=e.length;r<s;r++){const l=e[r],o=this.morphTargetsRelative;for(let h=0,c=l.count;h<c;h++)Se.fromBufferAttribute(l,h),o&&(Ii.fromBufferAttribute(t,h),Se.add(Ii)),i=Math.max(i,n.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");const n=t.array,i=e.position.array,r=e.normal.array,s=e.uv.array,l=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bn(new Float32Array(4*l),4));const o=this.getAttribute("tangent").array,h=[],c=[];for(let L=0;L<l;L++)h[L]=new et,c[L]=new et;const u=new et,d=new et,p=new et,f=new $t,m=new $t,g=new $t,v=new et,x=new et;function _(L,D,A){u.fromArray(i,3*L),d.fromArray(i,3*D),p.fromArray(i,3*A),f.fromArray(s,2*L),m.fromArray(s,2*D),g.fromArray(s,2*A),d.sub(u),p.sub(u),m.sub(f),g.sub(f);const V=1/(m.x*g.y-g.x*m.y);isFinite(V)&&(v.copy(d).multiplyScalar(g.y).addScaledVector(p,-m.y).multiplyScalar(V),x.copy(p).multiplyScalar(m.x).addScaledVector(d,-g.x).multiplyScalar(V),h[L].add(v),h[D].add(v),h[A].add(v),c[L].add(x),c[D].add(x),c[A].add(x))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let L=0,D=M.length;L<D;++L){const A=M[L],V=A.start;for(let j=V,Q=V+A.count;j<Q;j+=3)_(n[j+0],n[j+1],n[j+2])}const S=new et,P=new et,T=new et,z=new et;function k(L){T.fromArray(r,3*L),z.copy(T);const D=h[L];S.copy(D),S.sub(T.multiplyScalar(T.dot(D))).normalize(),P.crossVectors(z,D);const A=P.dot(c[L])<0?-1:1;o[4*L]=S.x,o[4*L+1]=S.y,o[4*L+2]=S.z,o[4*L+3]=A}for(let L=0,D=M.length;L<D;++L){const A=M[L],V=A.start;for(let j=V,Q=V+A.count;j<Q;j+=3)k(n[j+0]),k(n[j+1]),k(n[j+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new bn(new Float32Array(3*e.count),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new et,r=new et,s=new et,l=new et,o=new et,h=new et,c=new et,u=new et;if(t)for(let d=0,p=t.count;d<p;d+=3){const f=t.getX(d+0),m=t.getX(d+1),g=t.getX(d+2);i.fromBufferAttribute(e,f),r.fromBufferAttribute(e,m),s.fromBufferAttribute(e,g),c.subVectors(s,r),u.subVectors(i,r),c.cross(u),l.fromBufferAttribute(n,f),o.fromBufferAttribute(n,m),h.fromBufferAttribute(n,g),l.add(c),o.add(c),h.add(c),n.setXYZ(f,l.x,l.y,l.z),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(g,h.x,h.y,h.z)}else for(let d=0,p=e.count;d<p;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),s.fromBufferAttribute(e,d+2),c.subVectors(s,r),u.subVectors(i,r),c.cross(u),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(l,o){const h=l.array,c=l.itemSize,u=l.normalized,d=new h.constructor(o.length*c);let p=0,f=0;for(let m=0,g=o.length;m<g;m++){p=l.isInterleavedBufferAttribute?o[m]*l.data.stride+l.offset:o[m]*c;for(let v=0;v<c;v++)d[f++]=h[p++]}return new bn(d,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ei,n=this.index.array,i=this.attributes;for(const l in i){const o=t(i[l],n);e.setAttribute(l,o)}const r=this.morphAttributes;for(const l in r){const o=[],h=r[l];for(let c=0,u=h.length;c<u;c++){const d=t(h[c],n);o.push(d)}e.morphAttributes[l]=o}e.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let l=0,o=s.length;l<o;l++){const h=s[l];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const h in o)o[h]!==void 0&&(t[h]=o[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const o in n){const h=n[o];t.data.attributes[o]=h.toJSON(t.data)}const i={};let r=!1;for(const o in this.morphAttributes){const h=this.morphAttributes[o],c=[];for(let u=0,d=h.length;u<d;u++){const p=h[u];c.push(p.toJSON(t.data))}c.length>0&&(i[o]=c,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const l=this.boundingSphere;return l!==null&&(t.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const h in i){const c=i[h];this.setAttribute(h,c.clone(e))}const r=t.morphAttributes;for(const h in r){const c=[],u=r[h];for(let d=0,p=u.length;d<p;d++)c.push(u[d].clone(e));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let h=0,c=s.length;h<c;h++){const u=s[h];this.addGroup(u.start,u.count,u.materialIndex)}const l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());const o=t.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fo=new Qt,li=new va,Vr=new ti,zo=new et,Di=new et,Ui=new et,Oi=new et,Ka=new et,kr=new et,Hr=new $t,Wr=new $t,Gr=new $t,Bo=new et,Vo=new et,ko=new et,Xr=new et,qr=new et;class nn extends Fe{constructor(t=new Ei,e=new Bs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){const n=t[e[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++){const s=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const l=this.morphTargetInfluences;if(r&&l){kr.set(0,0,0);for(let o=0,h=r.length;o<h;o++){const c=l[o],u=r[o];c!==0&&(Ka.fromBufferAttribute(u,t),s?kr.addScaledVector(Ka,c):kr.addScaledVector(Ka.sub(e),c))}e.add(kr)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(r),li.copy(t.ray).recast(t.near),Vr.containsPoint(li.origin)===!1&&(li.intersectSphere(Vr,zo)===null||li.origin.distanceToSquared(zo)>(t.far-t.near)**2))return;Fo.copy(r).invert(),li.copy(t.ray).applyMatrix4(Fo),n.boundingBox!==null&&li.intersectsBox(n.boundingBox)===!1||this._computeIntersections(t,e,li)}}_computeIntersections(t,e,n){let i;const r=this.geometry,s=this.material,l=r.index,o=r.attributes.position,h=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(l!==null)if(Array.isArray(s))for(let f=0,m=d.length;f<m;f++){const g=d[f],v=s[g.materialIndex];for(let x=Math.max(g.start,p.start),_=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));x<_;x+=3)i=jr(this,v,t,n,h,c,u,l.getX(x),l.getX(x+1),l.getX(x+2)),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,e.push(i))}else for(let f=Math.max(0,p.start),m=Math.min(l.count,p.start+p.count);f<m;f+=3)i=jr(this,s,t,n,h,c,u,l.getX(f),l.getX(f+1),l.getX(f+2)),i&&(i.faceIndex=Math.floor(f/3),e.push(i));else if(o!==void 0)if(Array.isArray(s))for(let f=0,m=d.length;f<m;f++){const g=d[f],v=s[g.materialIndex];for(let x=Math.max(g.start,p.start),_=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));x<_;x+=3)i=jr(this,v,t,n,h,c,u,x,x+1,x+2),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,e.push(i))}else for(let f=Math.max(0,p.start),m=Math.min(o.count,p.start+p.count);f<m;f+=3)i=jr(this,s,t,n,h,c,u,f,f+1,f+2),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}function jr(a,t,e,n,i,r,s,l,o,h){a.getVertexPosition(l,Di),a.getVertexPosition(o,Ui),a.getVertexPosition(h,Oi);const c=function(u,d,p,f,m,g,v,x){let _;if(_=d.side===Ze?f.intersectTriangle(v,g,m,!0,x):f.intersectTriangle(m,g,v,d.side===Kn,x),_===null)return null;qr.copy(x),qr.applyMatrix4(u.matrixWorld);const M=p.ray.origin.distanceTo(qr);return M<p.near||M>p.far?null:{distance:M,point:qr.clone(),object:u}}(a,t,e,n,Di,Ui,Oi,Xr);if(c){i&&(Hr.fromBufferAttribute(i,l),Wr.fromBufferAttribute(i,o),Gr.fromBufferAttribute(i,h),c.uv=mn.getInterpolation(Xr,Di,Ui,Oi,Hr,Wr,Gr,new $t)),r&&(Hr.fromBufferAttribute(r,l),Wr.fromBufferAttribute(r,o),Gr.fromBufferAttribute(r,h),c.uv1=mn.getInterpolation(Xr,Di,Ui,Oi,Hr,Wr,Gr,new $t),c.uv2=c.uv1),s&&(Bo.fromBufferAttribute(s,l),Vo.fromBufferAttribute(s,o),ko.fromBufferAttribute(s,h),c.normal=mn.getInterpolation(Xr,Di,Ui,Oi,Bo,Vo,ko,new et),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const u={a:l,b:o,c:h,normal:new et,materialIndex:0};mn.getNormal(Di,Ui,Oi,u.normal),c.face=u}return c}class ar extends Ei{constructor(t=1,e=1,n=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:s};const l=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);const o=[],h=[],c=[],u=[];let d=0,p=0;function f(m,g,v,x,_,M,S,P,T,z,k){const L=M/T,D=S/z,A=M/2,V=S/2,j=P/2,Q=T+1,pt=z+1;let H=0,O=0;const X=new et;for(let Z=0;Z<pt;Z++){const R=Z*D-V;for(let W=0;W<Q;W++){const E=W*L-A;X[m]=E*x,X[g]=R*_,X[v]=j,h.push(X.x,X.y,X.z),X[m]=0,X[g]=0,X[v]=P>0?1:-1,c.push(X.x,X.y,X.z),u.push(W/T),u.push(1-Z/z),H+=1}}for(let Z=0;Z<z;Z++)for(let R=0;R<T;R++){const W=d+R+Q*Z,E=d+R+Q*(Z+1),y=d+(R+1)+Q*(Z+1),b=d+(R+1)+Q*Z;o.push(W,E,b),o.push(E,y,b),O+=6}l.addGroup(p,O,k),p+=O,d+=H}f("z","y","x",-1,-1,n,e,t,s,r,0),f("z","y","x",1,-1,n,e,-t,s,r,1),f("x","z","y",1,1,t,n,e,i,s,2),f("x","z","y",1,-1,t,n,-e,i,s,3),f("x","y","z",1,-1,t,e,n,i,r,4),f("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(o),this.setAttribute("position",new gi(h,3)),this.setAttribute("normal",new gi(c,3)),this.setAttribute("uv",new gi(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ar(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function nr(a){const t={};for(const e in a){t[e]={};for(const n in a[e]){const i=a[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function ke(a){const t={};for(let e=0;e<a.length;e++){const n=nr(a[e]);for(const i in n)t[i]=n[i]}return t}function cc(a){return a.getRenderTarget()===null?a.outputColorSpace:oe.workingColorSpace}const ph={clone:nr,merge:ke};class Bn extends _a{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=nr(t.uniforms),this.uniformsGroups=function(e){const n=[];for(let i=0;i<e.length;i++)n.push(e[i].clone());return n}(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Vs extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=er}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xn=new et,Ho=new $t,Wo=new $t;class sn extends Vs{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=2*Cs*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(.5*Ia*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return 2*Cs*Math.atan(Math.tan(.5*Ia*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z)}getViewSize(t,e){return this.getViewBounds(t,Ho,Wo),e.subVectors(Wo,Ho)}setViewOffset(t,e,n,i,r,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(.5*Ia*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const o=s.fullWidth,h=s.fullHeight;r+=s.offsetX*i/o,e-=s.offsetY*n/h,i*=s.width/o,n*=s.height/h}const l=this.filmOffset;l!==0&&(r+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Fi=-90;class fh extends Fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new sn(Fi,1,t,e);i.layers=this.layers,this.add(i);const r=new sn(Fi,1,t,e);r.layers=this.layers,this.add(r);const s=new sn(Fi,1,t,e);s.layers=this.layers,this.add(s);const l=new sn(Fi,1,t,e);l.layers=this.layers,this.add(l);const o=new sn(Fi,1,t,e);o.layers=this.layers,this.add(o);const h=new sn(Fi,1,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,s,l,o]=e;for(const h of e)this.remove(h);if(t===er)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else{if(t!==ua)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1)}for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,s,l,o,h,c]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),f=t.xr.enabled;t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,s),t.setRenderTarget(n,2,i),t.render(e,l),t.setRenderTarget(n,3,i),t.render(e,o),t.setRenderTarget(n,4,i),t.render(e,h),n.texture.generateMipmaps=m,t.setRenderTarget(n,5,i),t.render(e,c),t.setRenderTarget(u,d,p),t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class ks extends We{constructor(t,e,n,i,r,s,l,o,h,c){super(t=t!==void 0?t:[],e=e!==void 0?e:Ji,n,i,r,s,l,o,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class mh extends yi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Ki("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===vi?we:En),this.texture=new ks(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0&&e.generateMipmaps,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:en}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ar(5,5,5),r=new Bn({name:"CubemapFromEquirect",uniforms:nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ze,blending:0});r.uniforms.tEquirect.value=e;const s=new nn(i,r),l=e.minFilter;return e.minFilter===ji&&(e.minFilter=en),new fh(1,10,this).update(t,s),e.minFilter=l,s.geometry.dispose(),s.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,n,i);t.setRenderTarget(r)}}const Qa=new et,vh=new et,gh=new Jt;class hi{constructor(t=new et(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Qa.subVectors(n,e).cross(vh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Qa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||gh.getNormalMatrix(t),i=this.coplanarPoint(Qa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ci=new ti,Yr=new et;class xa{constructor(t=new hi,e=new hi,n=new hi,i=new hi,r=new hi,s=new hi){this.planes=[t,e,n,i,r,s]}set(t,e,n,i,r,s){const l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(i),l[4].copy(r),l[5].copy(s),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2e3){const n=this.planes,i=t.elements,r=i[0],s=i[1],l=i[2],o=i[3],h=i[4],c=i[5],u=i[6],d=i[7],p=i[8],f=i[9],m=i[10],g=i[11],v=i[12],x=i[13],_=i[14],M=i[15];if(n[0].setComponents(o-r,d-h,g-p,M-v).normalize(),n[1].setComponents(o+r,d+h,g+p,M+v).normalize(),n[2].setComponents(o+s,d+c,g+f,M+x).normalize(),n[3].setComponents(o-s,d-c,g-f,M-x).normalize(),n[4].setComponents(o-l,d-u,g-m,M-_).normalize(),e===er)n[5].setComponents(o+l,d+u,g+m,M+_).normalize();else{if(e!==ua)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);n[5].setComponents(l,u,m,_).normalize()}return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ci)}intersectsSprite(t){return ci.center.set(0,0,0),ci.radius=.7071067811865476,ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Yr.x=i.normal.x>0?t.max.x:t.min.x,Yr.y=i.normal.y>0?t.max.y:t.min.y,Yr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Yr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function hc(){let a=null,t=!1,e=null,n=null;function i(r,s){e(r,s),n=a.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=a.requestAnimationFrame(i),t=!0)},stop:function(){a.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){a=r}}}function _h(a,t){const e=t.isWebGL2,n=new WeakMap;return{get:function(i){return i.isInterleavedBufferAttribute&&(i=i.data),n.get(i)},remove:function(i){i.isInterleavedBufferAttribute&&(i=i.data);const r=n.get(i);r&&(a.deleteBuffer(r.buffer),n.delete(i))},update:function(i,r){if(i.isGLBufferAttribute){const l=n.get(i);return void((!l||l.version<i.version)&&n.set(i,{buffer:i.buffer,type:i.type,bytesPerElement:i.elementSize,version:i.version}))}i.isInterleavedBufferAttribute&&(i=i.data);const s=n.get(i);if(s===void 0)n.set(i,function(l,o){const h=l.array,c=l.usage,u=h.byteLength,d=a.createBuffer();let p;if(a.bindBuffer(o,d),a.bufferData(o,h,c),l.onUploadCallback(),h instanceof Float32Array)p=a.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute){if(!e)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");p=a.HALF_FLOAT}else p=a.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=a.SHORT;else if(h instanceof Uint32Array)p=a.UNSIGNED_INT;else if(h instanceof Int32Array)p=a.INT;else if(h instanceof Int8Array)p=a.BYTE;else if(h instanceof Uint8Array)p=a.UNSIGNED_BYTE;else{if(!(h instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);p=a.UNSIGNED_BYTE}return{buffer:d,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:u}}(i,r));else if(s.version<i.version){if(s.size!==i.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(l,o,h){const c=o.array,u=o._updateRange,d=o.updateRanges;if(a.bindBuffer(h,l),u.count===-1&&d.length===0&&a.bufferSubData(h,0,c),d.length!==0){for(let p=0,f=d.length;p<f;p++){const m=d[p];e?a.bufferSubData(h,m.start*c.BYTES_PER_ELEMENT,c,m.start,m.count):a.bufferSubData(h,m.start*c.BYTES_PER_ELEMENT,c.subarray(m.start,m.start+m.count))}o.clearUpdateRanges()}u.count!==-1&&(e?a.bufferSubData(h,u.offset*c.BYTES_PER_ELEMENT,c,u.offset,u.count):a.bufferSubData(h,u.offset*c.BYTES_PER_ELEMENT,c.subarray(u.offset,u.offset+u.count)),u.count=-1),o.onUploadCallback()})(s.buffer,i,r),s.version=i.version}}}}class Rr extends Ei{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,s=e/2,l=Math.floor(n),o=Math.floor(i),h=l+1,c=o+1,u=t/l,d=e/o,p=[],f=[],m=[],g=[];for(let v=0;v<c;v++){const x=v*d-s;for(let _=0;_<h;_++){const M=_*u-r;f.push(M,-x,0),m.push(0,0,1),g.push(_/l),g.push(1-v/o)}}for(let v=0;v<o;v++)for(let x=0;x<l;x++){const _=x+h*v,M=x+h*(v+1),S=x+1+h*(v+1),P=x+1+h*v;p.push(_,M,P),p.push(M,S,P)}this.setIndex(p),this.setAttribute("position",new gi(f,3)),this.setAttribute("normal",new gi(m,3)),this.setAttribute("uv",new gi(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rr(t.width,t.height,t.widthSegments,t.heightSegments)}}const Zt={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_fragment:`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Ct={common:{diffuse:{value:new ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new ne(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},yn={basic:{uniforms:ke([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:ke([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new ne(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:ke([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new ne(0)},specular:{value:new ne(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:ke([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:ke([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new ne(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:ke([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:ke([Ct.points,Ct.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:ke([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:ke([Ct.common,Ct.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:ke([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:ke([Ct.sprite,Ct.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:ke([Ct.common,Ct.displacementmap,{referencePosition:{value:new et},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:ke([Ct.lights,Ct.fog,{color:{value:new ne(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};yn.physical={uniforms:ke([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new ne(0)},specularColor:{value:new ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const Zr={r:0,b:0,g:0};function xh(a,t,e,n,i,r,s){const l=new ne(0);let o,h,c=r===!0?0:1,u=null,d=0,p=null;function f(m,g){m.getRGB(Zr,cc(a)),n.buffers.color.setClear(Zr.r,Zr.g,Zr.b,g,s)}return{getClearColor:function(){return l},setClearColor:function(m,g=1){l.set(m),c=g,f(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,f(l,c)},render:function(m,g){let v=!1,x=g.isScene===!0?g.background:null;x&&x.isTexture&&(x=(g.backgroundBlurriness>0?e:t).get(x)),x===null?f(l,c):x&&x.isColor&&(f(x,1),v=!0);const _=a.xr.getEnvironmentBlendMode();_==="additive"?n.buffers.color.setClear(0,0,0,1,s):_==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(a.autoClear||v)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),x&&(x.isCubeTexture||x.mapping===fa)?(h===void 0&&(h=new nn(new ar(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:nr(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,S,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,h.material.toneMapped=oe.getTransfer(x.colorSpace)!==me,u===x&&d===x.version&&p===a.toneMapping||(h.material.needsUpdate=!0,u=x,d=x.version,p=a.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(o===void 0&&(o=new nn(new Rr(2,2),new Bn({name:"BackgroundMaterial",uniforms:nr(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(o)),o.material.uniforms.t2D.value=x,o.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,o.material.toneMapped=oe.getTransfer(x.colorSpace)!==me,x.matrixAutoUpdate===!0&&x.updateMatrix(),o.material.uniforms.uvTransform.value.copy(x.matrix),u===x&&d===x.version&&p===a.toneMapping||(o.material.needsUpdate=!0,u=x,d=x.version,p=a.toneMapping),o.layers.enableAll(),m.unshift(o,o.geometry,o.material,0,0,null))}}}function yh(a,t,e,n){const i=a.getParameter(a.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),s=n.isWebGL2||r!==null,l={},o=p(null);let h=o,c=!1;function u(S){return n.isWebGL2?a.bindVertexArray(S):r.bindVertexArrayOES(S)}function d(S){return n.isWebGL2?a.deleteVertexArray(S):r.deleteVertexArrayOES(S)}function p(S){const P=[],T=[],z=[];for(let k=0;k<i;k++)P[k]=0,T[k]=0,z[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:T,attributeDivisors:z,object:S,attributes:{},index:null}}function f(){const S=h.newAttributes;for(let P=0,T=S.length;P<T;P++)S[P]=0}function m(S){g(S,0)}function g(S,P){const T=h.newAttributes,z=h.enabledAttributes,k=h.attributeDivisors;T[S]=1,z[S]===0&&(a.enableVertexAttribArray(S),z[S]=1),k[S]!==P&&((n.isWebGL2?a:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](S,P),k[S]=P)}function v(){const S=h.newAttributes,P=h.enabledAttributes;for(let T=0,z=P.length;T<z;T++)P[T]!==S[T]&&(a.disableVertexAttribArray(T),P[T]=0)}function x(S,P,T,z,k,L,D){D===!0?a.vertexAttribIPointer(S,P,T,k,L):a.vertexAttribPointer(S,P,T,z,k,L)}function _(){M(),c=!0,h!==o&&(h=o,u(h.object))}function M(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:function(S,P,T,z,k){let L=!1;if(s){const D=function(A,V,j){const Q=j.wireframe===!0;let pt=l[A.id];pt===void 0&&(pt={},l[A.id]=pt);let H=pt[V.id];H===void 0&&(H={},pt[V.id]=H);let O=H[Q];return O===void 0&&(O=p(n.isWebGL2?a.createVertexArray():r.createVertexArrayOES()),H[Q]=O),O}(z,T,P);h!==D&&(h=D,u(h.object)),L=function(A,V,j,Q){const pt=h.attributes,H=V.attributes;let O=0;const X=j.getAttributes();for(const Z in X)if(X[Z].location>=0){const R=pt[Z];let W=H[Z];if(W===void 0&&(Z==="instanceMatrix"&&A.instanceMatrix&&(W=A.instanceMatrix),Z==="instanceColor"&&A.instanceColor&&(W=A.instanceColor)),R===void 0||R.attribute!==W||W&&R.data!==W.data)return!0;O++}return h.attributesNum!==O||h.index!==Q}(S,z,T,k),L&&function(A,V,j,Q){const pt={},H=V.attributes;let O=0;const X=j.getAttributes();for(const Z in X)if(X[Z].location>=0){let R=H[Z];R===void 0&&(Z==="instanceMatrix"&&A.instanceMatrix&&(R=A.instanceMatrix),Z==="instanceColor"&&A.instanceColor&&(R=A.instanceColor));const W={};W.attribute=R,R&&R.data&&(W.data=R.data),pt[Z]=W,O++}h.attributes=pt,h.attributesNum=O,h.index=Q}(S,z,T,k)}else{const D=P.wireframe===!0;h.geometry===z.id&&h.program===T.id&&h.wireframe===D||(h.geometry=z.id,h.program=T.id,h.wireframe=D,L=!0)}k!==null&&e.update(k,a.ELEMENT_ARRAY_BUFFER),(L||c)&&(c=!1,function(D,A,V,j){if(n.isWebGL2===!1&&(D.isInstancedMesh||j.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;f();const Q=j.attributes,pt=V.getAttributes(),H=A.defaultAttributeValues;for(const O in pt){const X=pt[O];if(X.location>=0){let Z=Q[O];if(Z===void 0&&(O==="instanceMatrix"&&D.instanceMatrix&&(Z=D.instanceMatrix),O==="instanceColor"&&D.instanceColor&&(Z=D.instanceColor)),Z!==void 0){const R=Z.normalized,W=Z.itemSize,E=e.get(Z);if(E===void 0)continue;const y=E.buffer,b=E.type,N=E.bytesPerElement,F=n.isWebGL2===!0&&(b===a.INT||b===a.UNSIGNED_INT||Z.gpuType===jl);if(Z.isInterleavedBufferAttribute){const B=Z.data,U=B.stride,G=Z.offset;if(B.isInstancedInterleavedBuffer){for(let J=0;J<X.locationSize;J++)g(X.location+J,B.meshPerAttribute);D.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let J=0;J<X.locationSize;J++)m(X.location+J);a.bindBuffer(a.ARRAY_BUFFER,y);for(let J=0;J<X.locationSize;J++)x(X.location+J,W/X.locationSize,b,R,U*N,(G+W/X.locationSize*J)*N,F)}else{if(Z.isInstancedBufferAttribute){for(let B=0;B<X.locationSize;B++)g(X.location+B,Z.meshPerAttribute);D.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let B=0;B<X.locationSize;B++)m(X.location+B);a.bindBuffer(a.ARRAY_BUFFER,y);for(let B=0;B<X.locationSize;B++)x(X.location+B,W/X.locationSize,b,R,W*N,W/X.locationSize*B*N,F)}}else if(H!==void 0){const R=H[O];if(R!==void 0)switch(R.length){case 2:a.vertexAttrib2fv(X.location,R);break;case 3:a.vertexAttrib3fv(X.location,R);break;case 4:a.vertexAttrib4fv(X.location,R);break;default:a.vertexAttrib1fv(X.location,R)}}}}v()}(S,P,T,z),k!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))},reset:_,resetDefaultState:M,dispose:function(){_();for(const S in l){const P=l[S];for(const T in P){const z=P[T];for(const k in z)d(z[k].object),delete z[k];delete P[T]}delete l[S]}},releaseStatesOfGeometry:function(S){if(l[S.id]===void 0)return;const P=l[S.id];for(const T in P){const z=P[T];for(const k in z)d(z[k].object),delete z[k];delete P[T]}delete l[S.id]},releaseStatesOfProgram:function(S){for(const P in l){const T=l[P];if(T[S.id]===void 0)continue;const z=T[S.id];for(const k in z)d(z[k].object),delete z[k];delete T[S.id]}},initAttributes:f,enableAttribute:m,disableUnusedAttributes:v}}function Mh(a,t,e,n){const i=n.isWebGL2;let r;this.setMode=function(s){r=s},this.render=function(s,l){a.drawArrays(r,s,l),e.update(l,r,1)},this.renderInstances=function(s,l,o){if(o===0)return;let h,c;if(i)h=a,c="drawArraysInstanced";else if(h=t.get("ANGLE_instanced_arrays"),c="drawArraysInstancedANGLE",h===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");h[c](r,s,l,o),e.update(l,r,o)},this.renderMultiDraw=function(s,l,o){if(o===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let c=0;c<o;c++)this.render(s[c],l[c]);else{h.multiDrawArraysWEBGL(r,s,0,l,0,o);let c=0;for(let u=0;u<o;u++)c+=l[u];e.update(c,r,1)}}}function Eh(a,t,e){let n;function i(M){if(M==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&a.constructor.name==="WebGL2RenderingContext";let s=e.precision!==void 0?e.precision:"highp";const l=i(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const o=r||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,c=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),u=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=a.getParameter(a.MAX_TEXTURE_SIZE),p=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),f=a.getParameter(a.MAX_VERTEX_ATTRIBS),m=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),g=a.getParameter(a.MAX_VARYING_VECTORS),v=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),x=u>0,_=r||t.has("OES_texture_float");return{isWebGL2:r,drawBuffers:o,getMaxAnisotropy:function(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const M=t.get("EXT_texture_filter_anisotropic");n=a.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n},getMaxPrecision:i,precision:s,logarithmicDepthBuffer:h,maxTextures:c,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:m,maxVaryings:g,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:_,floatVertexTextures:x&&_,maxSamples:r?a.getParameter(a.MAX_SAMPLES):0}}function bh(a){const t=this;let e=null,n=0,i=!1,r=!1;const s=new hi,l=new Jt,o={value:null,needsUpdate:!1};function h(c,u,d,p){const f=c!==null?c.length:0;let m=null;if(f!==0){if(m=o.value,p!==!0||m===null){const g=d+4*f,v=u.matrixWorldInverse;l.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let x=0,_=d;x!==f;++x,_+=4)s.copy(c[x]).applyMatrix4(v,l),s.normal.toArray(m,_),m[_+3]=s.constant}o.value=m,o.needsUpdate=!0}return t.numPlanes=f,t.numIntersection=0,m}this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(c,u){const d=c.length!==0||u||n!==0||i;return i=u,n=c.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(c,u){e=h(c,u,0)},this.setState=function(c,u,d){const p=c.clippingPlanes,f=c.clipIntersection,m=c.clipShadows,g=a.get(c);if(!i||p===null||p.length===0||r&&!m)r?h(null):function(){o.value!==e&&(o.value=e,o.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}();else{const v=r?0:n,x=4*v;let _=g.clippingState||null;o.value=_,_=h(p,u,x,d);for(let M=0;M!==x;++M)_[M]=e[M];g.clippingState=_,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=v}}}function Sh(a){let t=new WeakMap;function e(i,r){return r===bs?i.mapping=Ji:r===Ss&&(i.mapping=$i),i}function n(i){const r=i.target;r.removeEventListener("dispose",n);const s=t.get(r);s!==void 0&&(t.delete(r),s.dispose())}return{get:function(i){if(i&&i.isTexture){const r=i.mapping;if(r===bs||r===Ss){if(t.has(i))return e(t.get(i).texture,i.mapping);{const s=i.image;if(s&&s.height>0){const l=new mh(s.height);return l.fromEquirectangularTexture(a,i),t.set(i,l),i.addEventListener("dispose",n),e(l.texture,i.mapping)}return null}}}return i},dispose:function(){t=new WeakMap}}}class uc extends Vs{constructor(t=-1,e=1,n=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,s=n+t,l=i+e,o=i-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,s=r+h*this.view.width,l-=c*this.view.offsetY,o=l-c*this.view.height}this.projectionMatrix.makeOrthographic(r,s,l,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Go=[.125,.215,.35,.446,.526,.582],mr=20,Ja=new uc,Xo=new ne;let $a=null,ts=0,es=0;const ui=(1+Math.sqrt(5))/2,zi=1/ui,qo=[new et(1,1,1),new et(-1,1,1),new et(1,1,-1),new et(-1,1,-1),new et(0,ui,zi),new et(0,ui,-zi),new et(zi,0,ui),new et(-zi,0,ui),new et(ui,zi,0),new et(-ui,zi,0)];class jo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){$a=this._renderer.getRenderTarget(),ts=this._renderer.getActiveCubeFace(),es=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ko(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget($a,ts,es),t.scissorTest=!1,Kr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ji||t.mapping===$i?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$a=this._renderer.getRenderTarget(),ts=this._renderer.getActiveCubeFace(),es=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:br,format:Mn,colorSpace:zn,depthBuffer:!1},i=Yo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yo(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(s){const l=[],o=[],h=[];let c=s;const u=s-4+1+Go.length;for(let d=0;d<u;d++){const p=Math.pow(2,c);o.push(p);let f=1/p;d>s-4?f=Go[d-s+4-1]:d===0&&(f=0),h.push(f);const m=1/(p-2),g=-m,v=1+m,x=[g,g,v,g,v,v,g,g,v,v,g,v],_=6,M=6,S=3,P=2,T=1,z=new Float32Array(S*M*_),k=new Float32Array(P*M*_),L=new Float32Array(T*M*_);for(let A=0;A<_;A++){const V=A%3*2/3-1,j=A>2?0:-1,Q=[V,j,0,V+2/3,j,0,V+2/3,j+1,0,V,j,0,V+2/3,j+1,0,V,j+1,0];z.set(Q,S*M*A),k.set(x,P*M*A);const pt=[A,A,A,A,A,A];L.set(pt,T*M*A)}const D=new Ei;D.setAttribute("position",new bn(z,S)),D.setAttribute("uv",new bn(k,P)),D.setAttribute("faceIndex",new bn(L,T)),l.push(D),c>4&&c--}return{lodPlanes:l,sizeLods:o,sigmas:h}}(r)),this._blurMaterial=function(s,l,o){const h=new Float32Array(mr),c=new et(0,1,0);return new Bn({name:"SphericalGaussianBlur",defines:{n:mr,CUBEUV_TEXEL_WIDTH:1/l,CUBEUV_TEXEL_HEIGHT:1/o,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:h},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:c}},vertexShader:Hs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}(r,t,e)}return i}_compileMaterial(t){const e=new nn(this._lodPlanes[0],t);this._renderer.compile(e,Ja)}_sceneToCubeUV(t,e,n,i){const r=new sn(90,1,e,n),s=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],o=this._renderer,h=o.autoClear,c=o.toneMapping;o.getClearColor(Xo),o.toneMapping=Zn,o.autoClear=!1;const u=new Bs({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1}),d=new nn(new ar,u);let p=!1;const f=t.background;f?f.isColor&&(u.color.copy(f),t.background=null,p=!0):(u.color.copy(Xo),p=!0);for(let m=0;m<6;m++){const g=m%3;g===0?(r.up.set(0,s[m],0),r.lookAt(l[m],0,0)):g===1?(r.up.set(0,0,s[m]),r.lookAt(0,l[m],0)):(r.up.set(0,s[m],0),r.lookAt(0,0,l[m]));const v=this._cubeSize;Kr(i,g*v,m>2?v:0,v,v),o.setRenderTarget(i),p&&o.render(d,r),o.render(t,r)}d.geometry.dispose(),d.material.dispose(),o.toneMapping=c,o.autoClear=h,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ji||t.mapping===$i;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ko()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zo());const r=i?this._cubemapMaterial:this._equirectMaterial,s=new nn(this._lodPlanes[0],r);r.uniforms.envMap.value=t;const l=this._cubeSize;Kr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(s,Ja)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),s=qo[(i-1)%qo.length];this._blur(t,i-1,i,r,s)}e.autoClear=n}_blur(t,e,n,i,r){const s=this._pingPongRenderTarget;this._halfBlur(t,s,e,n,i,"latitudinal",r),this._halfBlur(s,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,s,l){const o=this._renderer,h=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=new nn(this._lodPlanes[i],h),u=h.uniforms,d=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/39,f=r/p,m=isFinite(r)?1+Math.floor(3*f):mr;m>mr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`);const g=[];let v=0;for(let M=0;M<mr;++M){const S=M/f,P=Math.exp(-S*S/2);g.push(P),M===0?v+=P:M<m&&(v+=2*P)}for(let M=0;M<g.length;M++)g[M]=g[M]/v;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=g,u.latitudinal.value=s==="latitudinal",l&&(u.poleAxis.value=l);const{_lodMax:x}=this;u.dTheta.value=p,u.mipInt.value=x-n;const _=this._sizeLods[i];Kr(e,3*_*(i>x-4?i-x+4:0),4*(this._cubeSize-_),3*_,2*_),o.setRenderTarget(e),o.render(c,Ja)}}function Yo(a,t,e){const n=new yi(a,t,e);return n.texture.mapping=fa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Kr(a,t,e,n,i){a.viewport.set(t,e,n,i),a.scissor.set(t,e,n,i)}function Zo(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ko(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Hs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wh(a){let t=new WeakMap,e=null;function n(i){const r=i.target;r.removeEventListener("dispose",n);const s=t.get(r);s!==void 0&&(t.delete(r),s.dispose())}return{get:function(i){if(i&&i.isTexture){const r=i.mapping,s=r===bs||r===Ss,l=r===Ji||r===$i;if(s||l){if(i.isRenderTargetTexture&&i.needsPMREMUpdate===!0){i.needsPMREMUpdate=!1;let o=t.get(i);return e===null&&(e=new jo(a)),o=s?e.fromEquirectangular(i,o):e.fromCubemap(i,o),t.set(i,o),o.texture}if(t.has(i))return t.get(i).texture;{const o=i.image;if(s&&o&&o.height>0||l&&o&&function(h){let c=0;const u=6;for(let d=0;d<u;d++)h[d]!==void 0&&c++;return c===u}(o)){e===null&&(e=new jo(a));const h=s?e.fromEquirectangular(i):e.fromCubemap(i);return t.set(i,h),i.addEventListener("dispose",n),h.texture}return null}}}return i},dispose:function(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}}}function Th(a){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ah(a,t,e,n){const i={},r=new WeakMap;function s(o){const h=o.target;h.index!==null&&t.remove(h.index);for(const u in h.attributes)t.remove(h.attributes[u]);for(const u in h.morphAttributes){const d=h.morphAttributes[u];for(let p=0,f=d.length;p<f;p++)t.remove(d[p])}h.removeEventListener("dispose",s),delete i[h.id];const c=r.get(h);c&&(t.remove(c),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function l(o){const h=[],c=o.index,u=o.attributes.position;let d=0;if(c!==null){const m=c.array;d=c.version;for(let g=0,v=m.length;g<v;g+=3){const x=m[g+0],_=m[g+1],M=m[g+2];h.push(x,_,_,M,M,x)}}else{if(u===void 0)return;{const m=u.array;d=u.version;for(let g=0,v=m.length/3-1;g<v;g+=3){const x=g+0,_=g+1,M=g+2;h.push(x,_,_,M,M,x)}}}const p=new(ec(h)?lc:oc)(h,1);p.version=d;const f=r.get(o);f&&t.remove(f),r.set(o,p)}return{get:function(o,h){return i[h.id]===!0||(h.addEventListener("dispose",s),i[h.id]=!0,e.memory.geometries++),h},update:function(o){const h=o.attributes;for(const u in h)t.update(h[u],a.ARRAY_BUFFER);const c=o.morphAttributes;for(const u in c){const d=c[u];for(let p=0,f=d.length;p<f;p++)t.update(d[p],a.ARRAY_BUFFER)}},getWireframeAttribute:function(o){const h=r.get(o);if(h){const c=o.index;c!==null&&h.version<c.version&&l(o)}else l(o);return r.get(o)}}}function Ch(a,t,e,n){const i=n.isWebGL2;let r,s,l;this.setMode=function(o){r=o},this.setIndex=function(o){s=o.type,l=o.bytesPerElement},this.render=function(o,h){a.drawElements(r,h,s,o*l),e.update(h,r,1)},this.renderInstances=function(o,h,c){if(c===0)return;let u,d;if(i)u=a,d="drawElementsInstanced";else if(u=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",u===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");u[d](r,h,s,o*l,c),e.update(h,r,c)},this.renderMultiDraw=function(o,h,c){if(c===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<c;d++)this.render(o[d]/l,h[d]);else{u.multiDrawElementsWEBGL(r,h,0,s,o,0,c);let d=0;for(let p=0;p<c;p++)d+=h[p];e.update(d,r,1)}}}function Rh(a){const t={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:t,programs:null,autoReset:!0,reset:function(){t.calls=0,t.triangles=0,t.points=0,t.lines=0},update:function(e,n,i){switch(t.calls++,n){case a.TRIANGLES:t.triangles+=i*(e/3);break;case a.LINES:t.lines+=i*(e/2);break;case a.LINE_STRIP:t.lines+=i*(e-1);break;case a.LINE_LOOP:t.lines+=i*e;break;case a.POINTS:t.points+=i*e;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function Ph(a,t){return a[0]-t[0]}function Lh(a,t){return Math.abs(t[1])-Math.abs(a[1])}function Nh(a,t,e){const n={},i=new Float32Array(8),r=new WeakMap,s=new ve,l=[];for(let o=0;o<8;o++)l[o]=[o,0];return{update:function(o,h,c){const u=o.morphTargetInfluences;if(t.isWebGL2===!0){const p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,f=p!==void 0?p.length:0;let m=r.get(h);if(m===void 0||m.count!==f){let j=function(){A.dispose(),r.delete(h),h.removeEventListener("dispose",j)};var d=j;m!==void 0&&m.texture.dispose();const x=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],T=h.morphAttributes.color||[];let z=0;x===!0&&(z=1),_===!0&&(z=2),M===!0&&(z=3);let k=h.attributes.position.count*z,L=1;k>t.maxTextureSize&&(L=Math.ceil(k/t.maxTextureSize),k=t.maxTextureSize);const D=new Float32Array(k*L*4*f),A=new rc(D,k,L,f);A.type=On,A.needsUpdate=!0;const V=4*z;for(let Q=0;Q<f;Q++){const pt=S[Q],H=P[Q],O=T[Q],X=k*L*4*Q;for(let Z=0;Z<pt.count;Z++){const R=Z*V;x===!0&&(s.fromBufferAttribute(pt,Z),D[X+R+0]=s.x,D[X+R+1]=s.y,D[X+R+2]=s.z,D[X+R+3]=0),_===!0&&(s.fromBufferAttribute(H,Z),D[X+R+4]=s.x,D[X+R+5]=s.y,D[X+R+6]=s.z,D[X+R+7]=0),M===!0&&(s.fromBufferAttribute(O,Z),D[X+R+8]=s.x,D[X+R+9]=s.y,D[X+R+10]=s.z,D[X+R+11]=O.itemSize===4?s.w:1)}}m={count:f,texture:A,size:new $t(k,L)},r.set(h,m),h.addEventListener("dispose",j)}let g=0;for(let x=0;x<u.length;x++)g+=u[x];const v=h.morphTargetsRelative?1:1-g;c.getUniforms().setValue(a,"morphTargetBaseInfluence",v),c.getUniforms().setValue(a,"morphTargetInfluences",u),c.getUniforms().setValue(a,"morphTargetsTexture",m.texture,e),c.getUniforms().setValue(a,"morphTargetsTextureSize",m.size)}else{const p=u===void 0?0:u.length;let f=n[h.id];if(f===void 0||f.length!==p){f=[];for(let _=0;_<p;_++)f[_]=[_,0];n[h.id]=f}for(let _=0;_<p;_++){const M=f[_];M[0]=_,M[1]=u[_]}f.sort(Lh);for(let _=0;_<8;_++)_<p&&f[_][1]?(l[_][0]=f[_][0],l[_][1]=f[_][1]):(l[_][0]=Number.MAX_SAFE_INTEGER,l[_][1]=0);l.sort(Ph);const m=h.morphAttributes.position,g=h.morphAttributes.normal;let v=0;for(let _=0;_<8;_++){const M=l[_],S=M[0],P=M[1];S!==Number.MAX_SAFE_INTEGER&&P?(m&&h.getAttribute("morphTarget"+_)!==m[S]&&h.setAttribute("morphTarget"+_,m[S]),g&&h.getAttribute("morphNormal"+_)!==g[S]&&h.setAttribute("morphNormal"+_,g[S]),i[_]=P,v+=P):(m&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),g&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),i[_]=0)}const x=h.morphTargetsRelative?1:1-v;c.getUniforms().setValue(a,"morphTargetBaseInfluence",x),c.getUniforms().setValue(a,"morphTargetInfluences",i)}}}}function Ih(a,t,e,n){let i=new WeakMap;function r(s){const l=s.target;l.removeEventListener("dispose",r),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:function(s){const l=n.render.frame,o=s.geometry,h=t.get(s,o);if(i.get(h)!==l&&(t.update(h),i.set(h,l)),s.isInstancedMesh&&(s.hasEventListener("dispose",r)===!1&&s.addEventListener("dispose",r),i.get(s)!==l&&(e.update(s.instanceMatrix,a.ARRAY_BUFFER),s.instanceColor!==null&&e.update(s.instanceColor,a.ARRAY_BUFFER),i.set(s,l))),s.isSkinnedMesh){const c=s.skeleton;i.get(c)!==l&&(c.update(),i.set(c,l))}return h},dispose:function(){i=new WeakMap}}}class dc extends We{constructor(t,e,n,i,r,s,l,o,h,c){if((c=c!==void 0?c:mi)!==mi&&c!==tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===mi&&(n=Yn),n===void 0&&c===tr&&(n=fi),super(null,i,r,s,l,o,c,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=l!==void 0?l:He,this.minFilter=o!==void 0?o:He,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const pc=new We,fc=new dc(1,1);fc.compareFunction=515;const mc=new rc,vc=new eh,gc=new ks,Qo=[],Jo=[],$o=new Float32Array(16),tl=new Float32Array(9),el=new Float32Array(4);function sr(a,t,e){const n=a[0];if(n<=0||n>0)return a;const i=t*e;let r=Qo[i];if(r===void 0&&(r=new Float32Array(i),Qo[i]=r),t!==0){n.toArray(r,0);for(let s=1,l=0;s!==t;++s)l+=e,a[s].toArray(r,l)}return r}function Me(a,t){if(a.length!==t.length)return!1;for(let e=0,n=a.length;e<n;e++)if(a[e]!==t[e])return!1;return!0}function Ee(a,t){for(let e=0,n=t.length;e<n;e++)a[e]=t[e]}function ya(a,t){let e=Jo[t];e===void 0&&(e=new Int32Array(t),Jo[t]=e);for(let n=0;n!==t;++n)e[n]=a.allocateTextureUnit();return e}function Dh(a,t){const e=this.cache;e[0]!==t&&(a.uniform1f(this.addr,t),e[0]=t)}function Uh(a,t){const e=this.cache;if(t.x!==void 0)e[0]===t.x&&e[1]===t.y||(a.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;a.uniform2fv(this.addr,t),Ee(e,t)}}function Oh(a,t){const e=this.cache;if(t.x!==void 0)e[0]===t.x&&e[1]===t.y&&e[2]===t.z||(a.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)e[0]===t.r&&e[1]===t.g&&e[2]===t.b||(a.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;a.uniform3fv(this.addr,t),Ee(e,t)}}function Fh(a,t){const e=this.cache;if(t.x!==void 0)e[0]===t.x&&e[1]===t.y&&e[2]===t.z&&e[3]===t.w||(a.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;a.uniform4fv(this.addr,t),Ee(e,t)}}function zh(a,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;a.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(Me(e,n))return;el.set(n),a.uniformMatrix2fv(this.addr,!1,el),Ee(e,n)}}function Bh(a,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;a.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(Me(e,n))return;tl.set(n),a.uniformMatrix3fv(this.addr,!1,tl),Ee(e,n)}}function Vh(a,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;a.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(Me(e,n))return;$o.set(n),a.uniformMatrix4fv(this.addr,!1,$o),Ee(e,n)}}function kh(a,t){const e=this.cache;e[0]!==t&&(a.uniform1i(this.addr,t),e[0]=t)}function Hh(a,t){const e=this.cache;if(t.x!==void 0)e[0]===t.x&&e[1]===t.y||(a.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;a.uniform2iv(this.addr,t),Ee(e,t)}}function Wh(a,t){const e=this.cache;if(t.x!==void 0)e[0]===t.x&&e[1]===t.y&&e[2]===t.z||(a.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;a.uniform3iv(this.addr,t),Ee(e,t)}}function Gh(a,t){const e=this.cache;if(t.x!==void 0)e[0]===t.x&&e[1]===t.y&&e[2]===t.z&&e[3]===t.w||(a.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;a.uniform4iv(this.addr,t),Ee(e,t)}}function Xh(a,t){const e=this.cache;e[0]!==t&&(a.uniform1ui(this.addr,t),e[0]=t)}function qh(a,t){const e=this.cache;if(t.x!==void 0)e[0]===t.x&&e[1]===t.y||(a.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;a.uniform2uiv(this.addr,t),Ee(e,t)}}function jh(a,t){const e=this.cache;if(t.x!==void 0)e[0]===t.x&&e[1]===t.y&&e[2]===t.z||(a.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;a.uniform3uiv(this.addr,t),Ee(e,t)}}function Yh(a,t){const e=this.cache;if(t.x!==void 0)e[0]===t.x&&e[1]===t.y&&e[2]===t.z&&e[3]===t.w||(a.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;a.uniform4uiv(this.addr,t),Ee(e,t)}}function Zh(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i);const r=this.type===a.SAMPLER_2D_SHADOW?fc:pc;e.setTexture2D(t||r,i)}function Kh(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||vc,i)}function Qh(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||gc,i)}function Jh(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||mc,i)}function $h(a,t){a.uniform1fv(this.addr,t)}function tu(a,t){const e=sr(t,this.size,2);a.uniform2fv(this.addr,e)}function eu(a,t){const e=sr(t,this.size,3);a.uniform3fv(this.addr,e)}function nu(a,t){const e=sr(t,this.size,4);a.uniform4fv(this.addr,e)}function iu(a,t){const e=sr(t,this.size,4);a.uniformMatrix2fv(this.addr,!1,e)}function ru(a,t){const e=sr(t,this.size,9);a.uniformMatrix3fv(this.addr,!1,e)}function au(a,t){const e=sr(t,this.size,16);a.uniformMatrix4fv(this.addr,!1,e)}function su(a,t){a.uniform1iv(this.addr,t)}function ou(a,t){a.uniform2iv(this.addr,t)}function lu(a,t){a.uniform3iv(this.addr,t)}function cu(a,t){a.uniform4iv(this.addr,t)}function hu(a,t){a.uniform1uiv(this.addr,t)}function uu(a,t){a.uniform2uiv(this.addr,t)}function du(a,t){a.uniform3uiv(this.addr,t)}function pu(a,t){a.uniform4uiv(this.addr,t)}function fu(a,t,e){const n=this.cache,i=t.length,r=ya(e,i);Me(n,r)||(a.uniform1iv(this.addr,r),Ee(n,r));for(let s=0;s!==i;++s)e.setTexture2D(t[s]||pc,r[s])}function mu(a,t,e){const n=this.cache,i=t.length,r=ya(e,i);Me(n,r)||(a.uniform1iv(this.addr,r),Ee(n,r));for(let s=0;s!==i;++s)e.setTexture3D(t[s]||vc,r[s])}function vu(a,t,e){const n=this.cache,i=t.length,r=ya(e,i);Me(n,r)||(a.uniform1iv(this.addr,r),Ee(n,r));for(let s=0;s!==i;++s)e.setTextureCube(t[s]||gc,r[s])}function gu(a,t,e){const n=this.cache,i=t.length,r=ya(e,i);Me(n,r)||(a.uniform1iv(this.addr,r),Ee(n,r));for(let s=0;s!==i;++s)e.setTexture2DArray(t[s]||mc,r[s])}class _u{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=function(i){switch(i){case 5126:return Dh;case 35664:return Uh;case 35665:return Oh;case 35666:return Fh;case 35674:return zh;case 35675:return Bh;case 35676:return Vh;case 5124:case 35670:return kh;case 35667:case 35671:return Hh;case 35668:case 35672:return Wh;case 35669:case 35673:return Gh;case 5125:return Xh;case 36294:return qh;case 36295:return jh;case 36296:return Yh;case 35678:case 36198:case 36298:case 36306:case 35682:return Zh;case 35679:case 36299:case 36307:return Kh;case 35680:case 36300:case 36308:case 36293:return Qh;case 36289:case 36303:case 36311:case 36292:return Jh}}(e.type)}}class xu{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=function(i){switch(i){case 5126:return $h;case 35664:return tu;case 35665:return eu;case 35666:return nu;case 35674:return iu;case 35675:return ru;case 35676:return au;case 5124:case 35670:return su;case 35667:case 35671:return ou;case 35668:case 35672:return lu;case 35669:case 35673:return cu;case 5125:return hu;case 36294:return uu;case 36295:return du;case 36296:return pu;case 35678:case 36198:case 36298:case 36306:case 35682:return fu;case 35679:case 36299:case 36307:return mu;case 35680:case 36300:case 36308:case 36293:return vu;case 36289:case 36303:case 36311:case 36292:return gu}}(e.type)}}class yu{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const l=i[r];l.setValue(t,e[l.id],n)}}}const ns=/(\w+)(\])?(\[|\.)?/g;function nl(a,t){a.seq.push(t),a.map[t.id]=t}function Mu(a,t,e){const n=a.name,i=n.length;for(ns.lastIndex=0;;){const r=ns.exec(n),s=ns.lastIndex;let l=r[1];const o=r[2]==="]",h=r[3];if(o&&(l|=0),h===void 0||h==="["&&s+2===i){nl(e,h===void 0?new _u(l,a,t):new xu(l,a,t));break}{let c=e.map[l];c===void 0&&(c=new yu(l),nl(e,c)),e=c}}}class oa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i);Mu(r,t.getUniformLocation(e,r.name),this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,s=e.length;r!==s;++r){const l=e[r],o=n[l.id];o.needsUpdate!==!1&&l.setValue(t,o.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const s=t[i];s.id in e&&n.push(s)}return n}}function il(a,t,e){const n=a.createShader(t);return a.shaderSource(n,e),a.compileShader(n),n}const Eu=37297;let bu=0;function rl(a,t,e){const n=a.getShaderParameter(t,a.COMPILE_STATUS),i=a.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const s=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+function(l,o){const h=l.split(`
`),c=[],u=Math.max(o-6,0),d=Math.min(o+6,h.length);for(let p=u;p<d;p++){const f=p+1;c.push(`${f===o?">":" "} ${f}: ${h[p]}`)}return c.join(`
`)}(a.getShaderSource(t),s)}return i}function Su(a,t){const e=function(n){const i=oe.getPrimaries(oe.workingColorSpace),r=oe.getPrimaries(n);let s;switch(i===r?s="":i===ha&&r===ca?s="LinearDisplayP3ToLinearSRGB":i===ca&&r===ha&&(s="LinearSRGBToLinearDisplayP3"),n){case zn:case ma:return[s,"LinearTransferOETF"];case we:case zs:return[s,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[s,"LinearTransferOETF"]}}(t);return`vec4 ${a}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function wu(a,t){let e;switch(t){case Wc:e="Linear";break;case Gc:e="Reinhard";break;case Xc:e="OptimizedCineon";break;case qc:e="ACESFilmic";break;case Yc:e="AgX";break;case jc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+a+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Bi(a){return a!==""}function al(a,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function sl(a,t){return a.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Tu=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ps(a){return a.replace(Tu,Cu)}const Au=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Cu(a,t){let e=Zt[t];if(e===void 0){const n=Au.get(t);if(n===void 0)throw new Error("Can not resolve #include <"+t+">");e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n)}return Ps(e)}const Ru=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ol(a){return a.replace(Ru,Pu)}function Pu(a,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ll(a){let t=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	`;return a.isWebGL2&&(t+=`precision ${a.precision} sampler3D;
		precision ${a.precision} sampler2DArray;
		precision ${a.precision} sampler2DShadow;
		precision ${a.precision} samplerCubeShadow;
		precision ${a.precision} sampler2DArrayShadow;
		precision ${a.precision} isampler2D;
		precision ${a.precision} isampler3D;
		precision ${a.precision} isamplerCube;
		precision ${a.precision} isampler2DArray;
		precision ${a.precision} usampler2D;
		precision ${a.precision} usampler3D;
		precision ${a.precision} usamplerCube;
		precision ${a.precision} usampler2DArray;
		`),a.precision==="highp"?t+=`
#define HIGH_PRECISION`:a.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Lu(a,t,e,n){const i=a.getContext(),r=e.defines;let s=e.vertexShader,l=e.fragmentShader;const o=function(A){let V="SHADOWMAP_TYPE_BASIC";return A.shadowMapType===Gl?V="SHADOWMAP_TYPE_PCF":A.shadowMapType===Vc?V="SHADOWMAP_TYPE_PCF_SOFT":A.shadowMapType===Dn&&(V="SHADOWMAP_TYPE_VSM"),V}(e),h=function(A){let V="ENVMAP_TYPE_CUBE";if(A.envMap)switch(A.envMapMode){case Ji:case $i:V="ENVMAP_TYPE_CUBE";break;case fa:V="ENVMAP_TYPE_CUBE_UV"}return V}(e),c=function(A){let V="ENVMAP_MODE_REFLECTION";return A.envMap&&A.envMapMode===$i&&(V="ENVMAP_MODE_REFRACTION"),V}(e),u=function(A){let V="ENVMAP_BLENDING_NONE";if(A.envMap)switch(A.combine){case Xl:V="ENVMAP_BLENDING_MULTIPLY";break;case kc:V="ENVMAP_BLENDING_MIX";break;case Hc:V="ENVMAP_BLENDING_ADD"}return V}(e),d=function(A){const V=A.envMapCubeUVHeight;if(V===null)return null;const j=Math.log2(V)-2,Q=1/V;return{texelWidth:1/(3*Math.max(Math.pow(2,j),112)),texelHeight:Q,maxMip:j}}(e),p=e.isWebGL2?"":function(A){return[A.extensionDerivatives||A.envMapCubeUVHeight||A.bumpMap||A.normalMapTangentSpace||A.clearcoatNormalMap||A.flatShading||A.alphaToCoverage||A.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(A.extensionFragDepth||A.logarithmicDepthBuffer)&&A.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",A.extensionDrawBuffers&&A.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(A.extensionShaderTextureLOD||A.envMap||A.transmission)&&A.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Bi).join(`
`)}(e),f=function(A){return[A.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",A.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bi).join(`
`)}(e),m=function(A){const V=[];for(const j in A){const Q=A[j];Q!==!1&&V.push("#define "+j+" "+Q)}return V.join(`
`)}(r),g=i.createProgram();let v,x,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Bi).join(`
`),v.length>0&&(v+=`
`),x=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Bi).join(`
`),x.length>0&&(x+=`
`)):(v=[ll(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bi).join(`
`),x=[p,ll(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zn?"#define TONE_MAPPING":"",e.toneMapping!==Zn?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Zn?wu("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,Su("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Bi).join(`
`)),s=Ps(s),s=al(s,e),s=sl(s,e),l=Ps(l),l=al(l,e),l=sl(l,e),s=ol(s),l=ol(l),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,v=[f,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,x=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===So?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===So?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const M=_+v+s,S=_+x+l,P=il(i,i.VERTEX_SHADER,M),T=il(i,i.FRAGMENT_SHADER,S);function z(A){if(a.debug.checkShaderErrors){const V=i.getProgramInfoLog(g).trim(),j=i.getShaderInfoLog(P).trim(),Q=i.getShaderInfoLog(T).trim();let pt=!0,H=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(pt=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(i,g,P,T);else{const O=rl(i,P,"vertex"),X=rl(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+V+`
`+O+`
`+X)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):j!==""&&Q!==""||(H=!1);H&&(A.diagnostics={runnable:pt,programLog:V,vertexShader:{log:j,prefix:v},fragmentShader:{log:Q,prefix:x}})}i.deleteShader(P),i.deleteShader(T),k=new oa(i,g),L=function(V,j){const Q={},pt=V.getProgramParameter(j,V.ACTIVE_ATTRIBUTES);for(let H=0;H<pt;H++){const O=V.getActiveAttrib(j,H),X=O.name;let Z=1;O.type===V.FLOAT_MAT2&&(Z=2),O.type===V.FLOAT_MAT3&&(Z=3),O.type===V.FLOAT_MAT4&&(Z=4),Q[X]={type:O.type,location:V.getAttribLocation(j,X),locationSize:Z}}return Q}(i,g)}let k,L;i.attachShader(g,P),i.attachShader(g,T),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),this.getUniforms=function(){return k===void 0&&z(this),k},this.getAttributes=function(){return L===void 0&&z(this),L};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(g,Eu)),D},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=bu++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=P,this.fragmentShader=T,this}let Nu=0;class Iu{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(t);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Du(t),e.set(t,n)),n}}class Du{constructor(t){this.id=Nu++,this.code=t,this.usedTimes=0}}function Uu(a,t,e,n,i,r,s){const l=new ac,o=new Iu,h=new Set,c=[],u=i.isWebGL2,d=i.logarithmicDepthBuffer,p=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return h.add(v),v===0?"uv":`uv${v}`}return{getParameters:function(v,x,_,M,S){const P=M.fog,T=S.geometry,z=v.isMeshStandardMaterial?M.environment:null,k=(v.isMeshStandardMaterial?e:t).get(v.envMap||z),L=k&&k.mapping===fa?k.image.height:null,D=m[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const A=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,V=A!==void 0?A.length:0;let j,Q,pt,H,O=0;if(T.morphAttributes.position!==void 0&&(O=1),T.morphAttributes.normal!==void 0&&(O=2),T.morphAttributes.color!==void 0&&(O=3),D){const ce=yn[D];j=ce.vertexShader,Q=ce.fragmentShader}else j=v.vertexShader,Q=v.fragmentShader,o.update(v),pt=o.getVertexShaderID(v),H=o.getFragmentShaderID(v);const X=a.getRenderTarget(),Z=S.isInstancedMesh===!0,R=S.isBatchedMesh===!0,W=!!v.map,E=!!v.matcap,y=!!k,b=!!v.aoMap,N=!!v.lightMap,F=!!v.bumpMap,B=!!v.normalMap,U=!!v.displacementMap,G=!!v.emissiveMap,J=!!v.metalnessMap,ft=!!v.roughnessMap,dt=v.anisotropy>0,w=v.clearcoat>0,K=v.iridescence>0,q=v.sheen>0,it=v.transmission>0,ot=dt&&!!v.anisotropyMap,yt=w&&!!v.clearcoatMap,lt=w&&!!v.clearcoatNormalMap,St=w&&!!v.clearcoatRoughnessMap,It=K&&!!v.iridescenceMap,bt=K&&!!v.iridescenceThicknessMap,Ut=q&&!!v.sheenColorMap,Mt=q&&!!v.sheenRoughnessMap,Ft=!!v.specularMap,Ot=!!v.specularColorMap,Lt=!!v.specularIntensityMap,Bt=it&&!!v.transmissionMap,jt=it&&!!v.thicknessMap,Ae=!!v.gradientMap,tt=!!v.alphaMap,At=v.alphaTest>0,Xt=!!v.alphaHash,Kt=!!v.extensions;let rt=Zn;v.toneMapped&&(X!==null&&X.isXRRenderTarget!==!0||(rt=a.toneMapping));const pe={isWebGL2:u,shaderID:D,shaderType:v.type,shaderName:v.name,vertexShader:j,fragmentShader:Q,defines:v.defines,customVertexShaderID:pt,customFragmentShaderID:H,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:R,instancing:Z,instancingColor:Z&&S.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:X===null?a.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:zn,alphaToCoverage:!!v.alphaToCoverage,map:W,matcap:E,envMap:y,envMapMode:y&&k.mapping,envMapCubeUVHeight:L,aoMap:b,lightMap:N,bumpMap:F,normalMap:B,displacementMap:p&&U,emissiveMap:G,normalMapObjectSpace:B&&v.normalMapType===1,normalMapTangentSpace:B&&v.normalMapType===0,metalnessMap:J,roughnessMap:ft,anisotropy:dt,anisotropyMap:ot,clearcoat:w,clearcoatMap:yt,clearcoatNormalMap:lt,clearcoatRoughnessMap:St,iridescence:K,iridescenceMap:It,iridescenceThicknessMap:bt,sheen:q,sheenColorMap:Ut,sheenRoughnessMap:Mt,specularMap:Ft,specularColorMap:Ot,specularIntensityMap:Lt,transmission:it,transmissionMap:Bt,thicknessMap:jt,gradientMap:Ae,opaque:v.transparent===!1&&v.blending===1&&v.alphaToCoverage===!1,alphaMap:tt,alphaTest:At,alphaHash:Xt,combine:v.combine,mapUv:W&&g(v.map.channel),aoMapUv:b&&g(v.aoMap.channel),lightMapUv:N&&g(v.lightMap.channel),bumpMapUv:F&&g(v.bumpMap.channel),normalMapUv:B&&g(v.normalMap.channel),displacementMapUv:U&&g(v.displacementMap.channel),emissiveMapUv:G&&g(v.emissiveMap.channel),metalnessMapUv:J&&g(v.metalnessMap.channel),roughnessMapUv:ft&&g(v.roughnessMap.channel),anisotropyMapUv:ot&&g(v.anisotropyMap.channel),clearcoatMapUv:yt&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:lt&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&g(v.sheenRoughnessMap.channel),specularMapUv:Ft&&g(v.specularMap.channel),specularColorMapUv:Ot&&g(v.specularColorMap.channel),specularIntensityMapUv:Lt&&g(v.specularIntensityMap.channel),transmissionMapUv:Bt&&g(v.transmissionMap.channel),thicknessMapUv:jt&&g(v.thicknessMap.channel),alphaMapUv:tt&&g(v.alphaMap.channel),vertexTangents:!!T.attributes.tangent&&(B||dt),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,pointsUvs:S.isPoints===!0&&!!T.attributes.uv&&(W||tt),fog:!!P,useFog:v.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:S.isSkinnedMesh===!0,morphTargets:T.morphAttributes.position!==void 0,morphNormals:T.morphAttributes.normal!==void 0,morphColors:T.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:O,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:a.shadowMap.enabled&&_.length>0,shadowMapType:a.shadowMap.type,toneMapping:rt,useLegacyLights:a._useLegacyLights,decodeVideoTexture:W&&v.map.isVideoTexture===!0&&oe.getTransfer(v.map.colorSpace)===me,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===2,flipSided:v.side===Ze,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:Kt&&v.extensions.derivatives===!0,extensionFragDepth:Kt&&v.extensions.fragDepth===!0,extensionDrawBuffers:Kt&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:Kt&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Kt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Kt&&v.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return pe.vertexUv1s=h.has(1),pe.vertexUv2s=h.has(2),pe.vertexUv3s=h.has(3),h.clear(),pe},getProgramCacheKey:function(v){const x=[];if(v.shaderID?x.push(v.shaderID):(x.push(v.customVertexShaderID),x.push(v.customFragmentShaderID)),v.defines!==void 0)for(const _ in v.defines)x.push(_),x.push(v.defines[_]);return v.isRawShaderMaterial===!1&&(function(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapCubeUVHeight),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.morphAttributeCount),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}(x,v),function(_,M){l.disableAll(),M.isWebGL2&&l.enable(0),M.supportsVertexTextures&&l.enable(1),M.instancing&&l.enable(2),M.instancingColor&&l.enable(3),M.matcap&&l.enable(4),M.envMap&&l.enable(5),M.normalMapObjectSpace&&l.enable(6),M.normalMapTangentSpace&&l.enable(7),M.clearcoat&&l.enable(8),M.iridescence&&l.enable(9),M.alphaTest&&l.enable(10),M.vertexColors&&l.enable(11),M.vertexAlphas&&l.enable(12),M.vertexUv1s&&l.enable(13),M.vertexUv2s&&l.enable(14),M.vertexUv3s&&l.enable(15),M.vertexTangents&&l.enable(16),M.anisotropy&&l.enable(17),M.alphaHash&&l.enable(18),M.batching&&l.enable(19),_.push(l.mask),l.disableAll(),M.fog&&l.enable(0),M.useFog&&l.enable(1),M.flatShading&&l.enable(2),M.logarithmicDepthBuffer&&l.enable(3),M.skinning&&l.enable(4),M.morphTargets&&l.enable(5),M.morphNormals&&l.enable(6),M.morphColors&&l.enable(7),M.premultipliedAlpha&&l.enable(8),M.shadowMapEnabled&&l.enable(9),M.useLegacyLights&&l.enable(10),M.doubleSided&&l.enable(11),M.flipSided&&l.enable(12),M.useDepthPacking&&l.enable(13),M.dithering&&l.enable(14),M.transmission&&l.enable(15),M.sheen&&l.enable(16),M.opaque&&l.enable(17),M.pointsUvs&&l.enable(18),M.decodeVideoTexture&&l.enable(19),M.alphaToCoverage&&l.enable(20),_.push(l.mask)}(x,v),x.push(a.outputColorSpace)),x.push(v.customProgramCacheKey),x.join()},getUniforms:function(v){const x=m[v.type];let _;if(x){const M=yn[x];_=ph.clone(M.uniforms)}else _=v.uniforms;return _},acquireProgram:function(v,x){let _;for(let M=0,S=c.length;M<S;M++){const P=c[M];if(P.cacheKey===x){_=P,++_.usedTimes;break}}return _===void 0&&(_=new Lu(a,x,v,r),c.push(_)),_},releaseProgram:function(v){if(--v.usedTimes==0){const x=c.indexOf(v);c[x]=c[c.length-1],c.pop(),v.destroy()}},releaseShaderCache:function(v){o.remove(v)},programs:c,dispose:function(){o.dispose()}}}function Ou(){let a=new WeakMap;return{get:function(t){let e=a.get(t);return e===void 0&&(e={},a.set(t,e)),e},remove:function(t){a.delete(t)},update:function(t,e,n){a.get(t)[e]=n},dispose:function(){a=new WeakMap}}}function Fu(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.material.id!==t.material.id?a.material.id-t.material.id:a.z!==t.z?a.z-t.z:a.id-t.id}function cl(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.z!==t.z?t.z-a.z:a.id-t.id}function hl(){const a=[];let t=0;const e=[],n=[],i=[];function r(s,l,o,h,c,u){let d=a[t];return d===void 0?(d={id:s.id,object:s,geometry:l,material:o,groupOrder:h,renderOrder:s.renderOrder,z:c,group:u},a[t]=d):(d.id=s.id,d.object=s,d.geometry=l,d.material=o,d.groupOrder=h,d.renderOrder=s.renderOrder,d.z=c,d.group=u),t++,d}return{opaque:e,transmissive:n,transparent:i,init:function(){t=0,e.length=0,n.length=0,i.length=0},push:function(s,l,o,h,c,u){const d=r(s,l,o,h,c,u);o.transmission>0?n.push(d):o.transparent===!0?i.push(d):e.push(d)},unshift:function(s,l,o,h,c,u){const d=r(s,l,o,h,c,u);o.transmission>0?n.unshift(d):o.transparent===!0?i.unshift(d):e.unshift(d)},finish:function(){for(let s=t,l=a.length;s<l;s++){const o=a[s];if(o.id===null)break;o.id=null,o.object=null,o.geometry=null,o.material=null,o.group=null}},sort:function(s,l){e.length>1&&e.sort(s||Fu),n.length>1&&n.sort(l||cl),i.length>1&&i.sort(l||cl)}}}function zu(){let a=new WeakMap;return{get:function(t,e){const n=a.get(t);let i;return n===void 0?(i=new hl,a.set(t,[i])):e>=n.length?(i=new hl,n.push(i)):i=n[e],i},dispose:function(){a=new WeakMap}}}function Bu(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new et,color:new ne};break;case"SpotLight":e={position:new et,direction:new et,color:new ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new et,color:new ne,distance:0,decay:0};break;case"HemisphereLight":e={direction:new et,skyColor:new ne,groundColor:new ne};break;case"RectAreaLight":e={color:new ne,position:new et,halfWidth:new et,halfHeight:new et}}return a[t.id]=e,e}}}let Vu=0;function ku(a,t){return(t.castShadow?2:0)-(a.castShadow?2:0)+(t.map?1:0)-(a.map?1:0)}function Hu(a,t){const e=new Bu,n=function(){const o={};return{get:function(h){if(o[h.id]!==void 0)return o[h.id];let c;switch(h.type){case"DirectionalLight":case"SpotLight":c={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":c={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3}}return o[h.id]=c,c}}}(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new et);const r=new et,s=new Qt,l=new Qt;return{setup:function(o,h){let c=0,u=0,d=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let p=0,f=0,m=0,g=0,v=0,x=0,_=0,M=0,S=0,P=0,T=0;o.sort(ku);const z=h===!0?Math.PI:1;for(let L=0,D=o.length;L<D;L++){const A=o[L],V=A.color,j=A.intensity,Q=A.distance,pt=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)c+=V.r*j*z,u+=V.g*j*z,d+=V.b*j*z;else if(A.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(A.sh.coefficients[H],j);T++}else if(A.isDirectionalLight){const H=e.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity*z),A.castShadow){const O=A.shadow,X=n.get(A);X.shadowBias=O.bias,X.shadowNormalBias=O.normalBias,X.shadowRadius=O.radius,X.shadowMapSize=O.mapSize,i.directionalShadow[p]=X,i.directionalShadowMap[p]=pt,i.directionalShadowMatrix[p]=A.shadow.matrix,x++}i.directional[p]=H,p++}else if(A.isSpotLight){const H=e.get(A);H.position.setFromMatrixPosition(A.matrixWorld),H.color.copy(V).multiplyScalar(j*z),H.distance=Q,H.coneCos=Math.cos(A.angle),H.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),H.decay=A.decay,i.spot[m]=H;const O=A.shadow;if(A.map&&(i.spotLightMap[S]=A.map,S++,O.updateMatrices(A),A.castShadow&&P++),i.spotLightMatrix[m]=O.matrix,A.castShadow){const X=n.get(A);X.shadowBias=O.bias,X.shadowNormalBias=O.normalBias,X.shadowRadius=O.radius,X.shadowMapSize=O.mapSize,i.spotShadow[m]=X,i.spotShadowMap[m]=pt,M++}m++}else if(A.isRectAreaLight){const H=e.get(A);H.color.copy(V).multiplyScalar(j),H.halfWidth.set(.5*A.width,0,0),H.halfHeight.set(0,.5*A.height,0),i.rectArea[g]=H,g++}else if(A.isPointLight){const H=e.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity*z),H.distance=A.distance,H.decay=A.decay,A.castShadow){const O=A.shadow,X=n.get(A);X.shadowBias=O.bias,X.shadowNormalBias=O.normalBias,X.shadowRadius=O.radius,X.shadowMapSize=O.mapSize,X.shadowCameraNear=O.camera.near,X.shadowCameraFar=O.camera.far,i.pointShadow[f]=X,i.pointShadowMap[f]=pt,i.pointShadowMatrix[f]=A.shadow.matrix,_++}i.point[f]=H,f++}else if(A.isHemisphereLight){const H=e.get(A);H.skyColor.copy(A.color).multiplyScalar(j*z),H.groundColor.copy(A.groundColor).multiplyScalar(j*z),i.hemi[v]=H,v++}}g>0&&(t.isWebGL2?a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ct.LTC_FLOAT_1,i.rectAreaLTC2=Ct.LTC_FLOAT_2):(i.rectAreaLTC1=Ct.LTC_HALF_1,i.rectAreaLTC2=Ct.LTC_HALF_2):a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ct.LTC_FLOAT_1,i.rectAreaLTC2=Ct.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Ct.LTC_HALF_1,i.rectAreaLTC2=Ct.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=c,i.ambient[1]=u,i.ambient[2]=d;const k=i.hash;k.directionalLength===p&&k.pointLength===f&&k.spotLength===m&&k.rectAreaLength===g&&k.hemiLength===v&&k.numDirectionalShadows===x&&k.numPointShadows===_&&k.numSpotShadows===M&&k.numSpotMaps===S&&k.numLightProbes===T||(i.directional.length=p,i.spot.length=m,i.rectArea.length=g,i.point.length=f,i.hemi.length=v,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=M+S-P,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=T,k.directionalLength=p,k.pointLength=f,k.spotLength=m,k.rectAreaLength=g,k.hemiLength=v,k.numDirectionalShadows=x,k.numPointShadows=_,k.numSpotShadows=M,k.numSpotMaps=S,k.numLightProbes=T,i.version=Vu++)},setupView:function(o,h){let c=0,u=0,d=0,p=0,f=0;const m=h.matrixWorldInverse;for(let g=0,v=o.length;g<v;g++){const x=o[g];if(x.isDirectionalLight){const _=i.directional[c];_.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),c++}else if(x.isSpotLight){const _=i.spot[d];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const _=i.rectArea[p];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),l.identity(),s.copy(x.matrixWorld),s.premultiply(m),l.extractRotation(s),_.halfWidth.set(.5*x.width,0,0),_.halfHeight.set(0,.5*x.height,0),_.halfWidth.applyMatrix4(l),_.halfHeight.applyMatrix4(l),p++}else if(x.isPointLight){const _=i.point[u];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),u++}else if(x.isHemisphereLight){const _=i.hemi[f];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(m),f++}}},state:i}}function ul(a,t){const e=new Hu(a,t),n=[],i=[];return{init:function(){n.length=0,i.length=0},state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:function(r){e.setup(n,r)},setupLightsView:function(r){e.setupView(n,r)},pushLight:function(r){n.push(r)},pushShadow:function(r){i.push(r)}}}function Wu(a,t){let e=new WeakMap;return{get:function(n,i=0){const r=e.get(n);let s;return r===void 0?(s=new ul(a,t),e.set(n,[s])):i>=r.length?(s=new ul(a,t),r.push(s)):s=r[i],s},dispose:function(){e=new WeakMap}}}class Gu extends _a{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Xu extends _a{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function qu(a,t,e){let n=new xa;const i=new $t,r=new $t,s=new ve,l=new Gu({depthPacking:3201}),o=new Xu,h={},c=e.maxTextureSize,u={[Kn]:Ze,[Ze]:Kn,2:2},d=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const f=new Ei;f.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new nn(f,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gl;let v=this.type;function x(P,T){const z=t.update(m);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new yi(i.x,i.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,a.setRenderTarget(P.mapPass),a.clear(),a.renderBufferDirect(T,null,z,d,m,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,a.setRenderTarget(P.map),a.clear(),a.renderBufferDirect(T,null,z,p,m,null)}function _(P,T,z,k){let L=null;const D=z.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(D!==void 0)L=D;else if(L=z.isPointLight===!0?o:l,a.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const A=L.uuid,V=T.uuid;let j=h[A];j===void 0&&(j={},h[A]=j);let Q=j[V];Q===void 0&&(Q=L.clone(),j[V]=Q,T.addEventListener("dispose",S)),L=Q}return L.visible=T.visible,L.wireframe=T.wireframe,L.side=k===Dn?T.shadowSide!==null?T.shadowSide:T.side:T.shadowSide!==null?T.shadowSide:u[T.side],L.alphaMap=T.alphaMap,L.alphaTest=T.alphaTest,L.map=T.map,L.clipShadows=T.clipShadows,L.clippingPlanes=T.clippingPlanes,L.clipIntersection=T.clipIntersection,L.displacementMap=T.displacementMap,L.displacementScale=T.displacementScale,L.displacementBias=T.displacementBias,L.wireframeLinewidth=T.wireframeLinewidth,L.linewidth=T.linewidth,z.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(a.properties.get(L).light=z),L}function M(P,T,z,k,L){if(P.visible===!1)return;if(P.layers.test(T.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&L===Dn)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,P.matrixWorld);const A=t.update(P),V=P.material;if(Array.isArray(V)){const j=A.groups;for(let Q=0,pt=j.length;Q<pt;Q++){const H=j[Q],O=V[H.materialIndex];if(O&&O.visible){const X=_(P,O,k,L);P.onBeforeShadow(a,P,T,z,A,X,H),a.renderBufferDirect(z,null,A,X,P,H),P.onAfterShadow(a,P,T,z,A,X,H)}}}else if(V.visible){const j=_(P,V,k,L);P.onBeforeShadow(a,P,T,z,A,j,null),a.renderBufferDirect(z,null,A,j,P,null),P.onAfterShadow(a,P,T,z,A,j,null)}}const D=P.children;for(let A=0,V=D.length;A<V;A++)M(D[A],T,z,k,L)}function S(P){P.target.removeEventListener("dispose",S);for(const T in h){const z=h[T],k=P.target.uuid;k in z&&(z[k].dispose(),delete z[k])}}this.render=function(P,T,z){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||P.length===0)return;const k=a.getRenderTarget(),L=a.getActiveCubeFace(),D=a.getActiveMipmapLevel(),A=a.state;A.setBlending(0),A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);const V=v!==Dn&&this.type===Dn,j=v===Dn&&this.type!==Dn;for(let Q=0,pt=P.length;Q<pt;Q++){const H=P[Q],O=H.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const X=O.getFrameExtents();if(i.multiply(X),r.copy(O.mapSize),(i.x>c||i.y>c)&&(i.x>c&&(r.x=Math.floor(c/X.x),i.x=r.x*X.x,O.mapSize.x=r.x),i.y>c&&(r.y=Math.floor(c/X.y),i.y=r.y*X.y,O.mapSize.y=r.y)),O.map===null||V===!0||j===!0){const R=this.type!==Dn?{minFilter:He,magFilter:He}:{};O.map!==null&&O.map.dispose(),O.map=new yi(i.x,i.y,R),O.map.texture.name=H.name+".shadowMap",O.camera.updateProjectionMatrix()}a.setRenderTarget(O.map),a.clear();const Z=O.getViewportCount();for(let R=0;R<Z;R++){const W=O.getViewport(R);s.set(r.x*W.x,r.y*W.y,r.x*W.z,r.y*W.w),A.viewport(s),O.updateMatrices(H,R),n=O.getFrustum(),M(T,z,O.camera,H,this.type)}O.isPointLightShadow!==!0&&this.type===Dn&&x(O,z),O.needsUpdate=!1}v=this.type,g.needsUpdate=!1,a.setRenderTarget(k,L,D)}}function ju(a,t,e){const n=e.isWebGL2,i=new function(){let w=!1;const K=new ve;let q=null;const it=new ve(0,0,0,0);return{setMask:function(ot){q===ot||w||(a.colorMask(ot,ot,ot,ot),q=ot)},setLocked:function(ot){w=ot},setClear:function(ot,yt,lt,St,It){It===!0&&(ot*=St,yt*=St,lt*=St),K.set(ot,yt,lt,St),it.equals(K)===!1&&(a.clearColor(ot,yt,lt,St),it.copy(K))},reset:function(){w=!1,q=null,it.set(-1,0,0,0)}}},r=new function(){let w=!1,K=null,q=null,it=null;return{setTest:function(ot){ot?N(a.DEPTH_TEST):F(a.DEPTH_TEST)},setMask:function(ot){K===ot||w||(a.depthMask(ot),K=ot)},setFunc:function(ot){if(q!==ot){switch(ot){case 0:a.depthFunc(a.NEVER);break;case 1:a.depthFunc(a.ALWAYS);break;case 2:a.depthFunc(a.LESS);break;case 3:default:a.depthFunc(a.LEQUAL);break;case 4:a.depthFunc(a.EQUAL);break;case 5:a.depthFunc(a.GEQUAL);break;case 6:a.depthFunc(a.GREATER);break;case 7:a.depthFunc(a.NOTEQUAL)}q=ot}},setLocked:function(ot){w=ot},setClear:function(ot){it!==ot&&(a.clearDepth(ot),it=ot)},reset:function(){w=!1,K=null,q=null,it=null}}},s=new function(){let w=!1,K=null,q=null,it=null,ot=null,yt=null,lt=null,St=null,It=null;return{setTest:function(bt){w||(bt?N(a.STENCIL_TEST):F(a.STENCIL_TEST))},setMask:function(bt){K===bt||w||(a.stencilMask(bt),K=bt)},setFunc:function(bt,Ut,Mt){q===bt&&it===Ut&&ot===Mt||(a.stencilFunc(bt,Ut,Mt),q=bt,it=Ut,ot=Mt)},setOp:function(bt,Ut,Mt){yt===bt&&lt===Ut&&St===Mt||(a.stencilOp(bt,Ut,Mt),yt=bt,lt=Ut,St=Mt)},setLocked:function(bt){w=bt},setClear:function(bt){It!==bt&&(a.clearStencil(bt),It=bt)},reset:function(){w=!1,K=null,q=null,it=null,ot=null,yt=null,lt=null,St=null,It=null}}},l=new WeakMap,o=new WeakMap;let h={},c={},u=new WeakMap,d=[],p=null,f=!1,m=null,g=null,v=null,x=null,_=null,M=null,S=null,P=new ne(0,0,0),T=0,z=!1,k=null,L=null,D=null,A=null,V=null;const j=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,pt=0;const H=a.getParameter(a.VERSION);H.indexOf("WebGL")!==-1?(pt=parseFloat(/^WebGL (\d)/.exec(H)[1]),Q=pt>=1):H.indexOf("OpenGL ES")!==-1&&(pt=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),Q=pt>=2);let O=null,X={};const Z=a.getParameter(a.SCISSOR_BOX),R=a.getParameter(a.VIEWPORT),W=new ve().fromArray(Z),E=new ve().fromArray(R);function y(w,K,q,it){const ot=new Uint8Array(4),yt=a.createTexture();a.bindTexture(w,yt),a.texParameteri(w,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(w,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let lt=0;lt<q;lt++)!n||w!==a.TEXTURE_3D&&w!==a.TEXTURE_2D_ARRAY?a.texImage2D(K+lt,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,ot):a.texImage3D(K,0,a.RGBA,1,1,it,0,a.RGBA,a.UNSIGNED_BYTE,ot);return yt}const b={};function N(w){h[w]!==!0&&(a.enable(w),h[w]=!0)}function F(w){h[w]!==!1&&(a.disable(w),h[w]=!1)}b[a.TEXTURE_2D]=y(a.TEXTURE_2D,a.TEXTURE_2D,1),b[a.TEXTURE_CUBE_MAP]=y(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(b[a.TEXTURE_2D_ARRAY]=y(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),b[a.TEXTURE_3D]=y(a.TEXTURE_3D,a.TEXTURE_3D,1,1)),i.setClear(0,0,0,1),r.setClear(1),s.setClear(0),N(a.DEPTH_TEST),r.setFunc(3),J(!1),ft(1),N(a.CULL_FACE),G(0);const B={[di]:a.FUNC_ADD,101:a.FUNC_SUBTRACT,102:a.FUNC_REVERSE_SUBTRACT};if(n)B[103]=a.MIN,B[104]=a.MAX;else{const w=t.get("EXT_blend_minmax");w!==null&&(B[103]=w.MIN_EXT,B[104]=w.MAX_EXT)}const U={200:a.ZERO,201:a.ONE,202:a.SRC_COLOR,[Ms]:a.SRC_ALPHA,210:a.SRC_ALPHA_SATURATE,208:a.DST_COLOR,206:a.DST_ALPHA,203:a.ONE_MINUS_SRC_COLOR,[Es]:a.ONE_MINUS_SRC_ALPHA,209:a.ONE_MINUS_DST_COLOR,207:a.ONE_MINUS_DST_ALPHA,211:a.CONSTANT_COLOR,212:a.ONE_MINUS_CONSTANT_COLOR,213:a.CONSTANT_ALPHA,214:a.ONE_MINUS_CONSTANT_ALPHA};function G(w,K,q,it,ot,yt,lt,St,It,bt){if(w!==0){if(f===!1&&(N(a.BLEND),f=!0),w===5)ot=ot||K,yt=yt||q,lt=lt||it,K===g&&ot===_||(a.blendEquationSeparate(B[K],B[ot]),g=K,_=ot),q===v&&it===x&&yt===M&&lt===S||(a.blendFuncSeparate(U[q],U[it],U[yt],U[lt]),v=q,x=it,M=yt,S=lt),St.equals(P)!==!1&&It===T||(a.blendColor(St.r,St.g,St.b,It),P.copy(St),T=It),m=w,z=!1;else if(w!==m||bt!==z){if(g===di&&_===di||(a.blendEquation(a.FUNC_ADD),g=di,_=di),bt)switch(w){case 1:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case 2:a.blendFunc(a.ONE,a.ONE);break;case 3:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case 4:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",w)}else switch(w){case 1:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case 2:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case 3:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case 4:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",w)}v=null,x=null,M=null,S=null,P.set(0,0,0),T=0,m=w,z=bt}}else f===!0&&(F(a.BLEND),f=!1)}function J(w){k!==w&&(w?a.frontFace(a.CW):a.frontFace(a.CCW),k=w)}function ft(w){w!==0?(N(a.CULL_FACE),w!==L&&(w===1?a.cullFace(a.BACK):w===2?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):F(a.CULL_FACE),L=w}function dt(w,K,q){w?(N(a.POLYGON_OFFSET_FILL),A===K&&V===q||(a.polygonOffset(K,q),A=K,V=q)):F(a.POLYGON_OFFSET_FILL)}return{buffers:{color:i,depth:r,stencil:s},enable:N,disable:F,bindFramebuffer:function(w,K){return c[w]!==K&&(a.bindFramebuffer(w,K),c[w]=K,n&&(w===a.DRAW_FRAMEBUFFER&&(c[a.FRAMEBUFFER]=K),w===a.FRAMEBUFFER&&(c[a.DRAW_FRAMEBUFFER]=K)),!0)},drawBuffers:function(w,K){let q=d,it=!1;if(w)if(q=u.get(K),q===void 0&&(q=[],u.set(K,q)),w.isWebGLMultipleRenderTargets){const ot=w.texture;if(q.length!==ot.length||q[0]!==a.COLOR_ATTACHMENT0){for(let yt=0,lt=ot.length;yt<lt;yt++)q[yt]=a.COLOR_ATTACHMENT0+yt;q.length=ot.length,it=!0}}else q[0]!==a.COLOR_ATTACHMENT0&&(q[0]=a.COLOR_ATTACHMENT0,it=!0);else q[0]!==a.BACK&&(q[0]=a.BACK,it=!0);it&&(e.isWebGL2?a.drawBuffers(q):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(q))},useProgram:function(w){return p!==w&&(a.useProgram(w),p=w,!0)},setBlending:G,setMaterial:function(w,K){w.side===2?F(a.CULL_FACE):N(a.CULL_FACE);let q=w.side===Ze;K&&(q=!q),J(q),w.blending===1&&w.transparent===!1?G(0):G(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),r.setFunc(w.depthFunc),r.setTest(w.depthTest),r.setMask(w.depthWrite),i.setMask(w.colorWrite);const it=w.stencilWrite;s.setTest(it),it&&(s.setMask(w.stencilWriteMask),s.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),s.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),dt(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?N(a.SAMPLE_ALPHA_TO_COVERAGE):F(a.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:J,setCullFace:ft,setLineWidth:function(w){w!==D&&(Q&&a.lineWidth(w),D=w)},setPolygonOffset:dt,setScissorTest:function(w){w?N(a.SCISSOR_TEST):F(a.SCISSOR_TEST)},activeTexture:function(w){w===void 0&&(w=a.TEXTURE0+j-1),O!==w&&(a.activeTexture(w),O=w)},bindTexture:function(w,K,q){q===void 0&&(q=O===null?a.TEXTURE0+j-1:O);let it=X[q];it===void 0&&(it={type:void 0,texture:void 0},X[q]=it),it.type===w&&it.texture===K||(O!==q&&(a.activeTexture(q),O=q),a.bindTexture(w,K||b[w]),it.type=w,it.texture=K)},unbindTexture:function(){const w=X[O];w!==void 0&&w.type!==void 0&&(a.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)},compressedTexImage2D:function(){try{a.compressedTexImage2D.apply(a,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},compressedTexImage3D:function(){try{a.compressedTexImage3D.apply(a,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texImage2D:function(){try{a.texImage2D.apply(a,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texImage3D:function(){try{a.texImage3D.apply(a,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},updateUBOMapping:function(w,K){let q=o.get(K);q===void 0&&(q=new WeakMap,o.set(K,q));let it=q.get(w);it===void 0&&(it=a.getUniformBlockIndex(K,w.name),q.set(w,it))},uniformBlockBinding:function(w,K){const q=o.get(K).get(w);l.get(K)!==q&&(a.uniformBlockBinding(K,q,w.__bindingPointIndex),l.set(K,q))},texStorage2D:function(){try{a.texStorage2D.apply(a,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texStorage3D:function(){try{a.texStorage3D.apply(a,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texSubImage2D:function(){try{a.texSubImage2D.apply(a,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texSubImage3D:function(){try{a.texSubImage3D.apply(a,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},compressedTexSubImage2D:function(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},compressedTexSubImage3D:function(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},scissor:function(w){W.equals(w)===!1&&(a.scissor(w.x,w.y,w.z,w.w),W.copy(w))},viewport:function(w){E.equals(w)===!1&&(a.viewport(w.x,w.y,w.z,w.w),E.copy(w))},reset:function(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),n===!0&&(a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),h={},O=null,X={},c={},u=new WeakMap,d=[],p=null,f=!1,m=null,g=null,v=null,x=null,_=null,M=null,S=null,P=new ne(0,0,0),T=0,z=!1,k=null,L=null,D=null,A=null,V=null,W.set(0,0,a.canvas.width,a.canvas.height),E.set(0,0,a.canvas.width,a.canvas.height),i.reset(),r.reset(),s.reset()}}}function Yu(a,t,e,n,i,r,s){const l=i.isWebGL2,o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(E,y){return p?new OffscreenCanvas(E,y):Sr("canvas")}function m(E,y,b,N){let F=1;if((E.width>N||E.height>N)&&(F=N/Math.max(E.width,E.height)),F<1||y===!0){if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const B=y?Rs:Math.floor,U=B(F*E.width),G=B(F*E.height);u===void 0&&(u=f(U,G));const J=b?f(U,G):u;return J.width=U,J.height=G,J.getContext("2d").drawImage(E,0,0,U,G),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+U+"x"+G+")."),J}return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E}return E}function g(E){return wo(E.width)&&wo(E.height)}function v(E,y){return E.generateMipmaps&&y&&E.minFilter!==He&&E.minFilter!==en}function x(E){a.generateMipmap(E)}function _(E,y,b,N,F=!1){if(l===!1)return y;if(E!==null){if(a[E]!==void 0)return a[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let B=y;if(y===a.RED&&(b===a.FLOAT&&(B=a.R32F),b===a.HALF_FLOAT&&(B=a.R16F),b===a.UNSIGNED_BYTE&&(B=a.R8)),y===a.RED_INTEGER&&(b===a.UNSIGNED_BYTE&&(B=a.R8UI),b===a.UNSIGNED_SHORT&&(B=a.R16UI),b===a.UNSIGNED_INT&&(B=a.R32UI),b===a.BYTE&&(B=a.R8I),b===a.SHORT&&(B=a.R16I),b===a.INT&&(B=a.R32I)),y===a.RG&&(b===a.FLOAT&&(B=a.RG32F),b===a.HALF_FLOAT&&(B=a.RG16F),b===a.UNSIGNED_BYTE&&(B=a.RG8)),y===a.RGBA){const U=F?la:oe.getTransfer(N);b===a.FLOAT&&(B=a.RGBA32F),b===a.HALF_FLOAT&&(B=a.RGBA16F),b===a.UNSIGNED_BYTE&&(B=U===me?a.SRGB8_ALPHA8:a.RGBA8),b===a.UNSIGNED_SHORT_4_4_4_4&&(B=a.RGBA4),b===a.UNSIGNED_SHORT_5_5_5_1&&(B=a.RGB5_A1)}return B!==a.R16F&&B!==a.R32F&&B!==a.RG16F&&B!==a.RG32F&&B!==a.RGBA16F&&B!==a.RGBA32F||t.get("EXT_color_buffer_float"),B}function M(E,y,b){return v(E,b)===!0||E.isFramebufferTexture&&E.minFilter!==He&&E.minFilter!==en?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function S(E){return E===He||E===Ks||E===cr?a.NEAREST:a.LINEAR}function P(E){const y=E.target;y.removeEventListener("dispose",P),function(b){const N=n.get(b);if(N.__webglInit===void 0)return;const F=b.source,B=d.get(F);if(B){const U=B[N.__cacheKey];U.usedTimes--,U.usedTimes===0&&z(b),Object.keys(B).length===0&&d.delete(F)}n.remove(b)}(y),y.isVideoTexture&&c.delete(y)}function T(E){const y=E.target;y.removeEventListener("dispose",T),function(b){const N=b.texture,F=n.get(b),B=n.get(N);if(B.__webglTexture!==void 0&&(a.deleteTexture(B.__webglTexture),s.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let U=0;U<6;U++){if(Array.isArray(F.__webglFramebuffer[U]))for(let G=0;G<F.__webglFramebuffer[U].length;G++)a.deleteFramebuffer(F.__webglFramebuffer[U][G]);else a.deleteFramebuffer(F.__webglFramebuffer[U]);F.__webglDepthbuffer&&a.deleteRenderbuffer(F.__webglDepthbuffer[U])}else{if(Array.isArray(F.__webglFramebuffer))for(let U=0;U<F.__webglFramebuffer.length;U++)a.deleteFramebuffer(F.__webglFramebuffer[U]);else a.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&a.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&a.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let U=0;U<F.__webglColorRenderbuffer.length;U++)F.__webglColorRenderbuffer[U]&&a.deleteRenderbuffer(F.__webglColorRenderbuffer[U]);F.__webglDepthRenderbuffer&&a.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let U=0,G=N.length;U<G;U++){const J=n.get(N[U]);J.__webglTexture&&(a.deleteTexture(J.__webglTexture),s.memory.textures--),n.remove(N[U])}n.remove(N),n.remove(b)}(y)}function z(E){const y=n.get(E);a.deleteTexture(y.__webglTexture);const b=E.source;delete d.get(b)[y.__cacheKey],s.memory.textures--}let k=0;function L(E,y){const b=n.get(E);if(E.isVideoTexture&&function(N){const F=s.render.frame;c.get(N)!==F&&(c.set(N,F),N.update())}(E),E.isRenderTargetTexture===!1&&E.version>0&&b.__version!==E.version){const N=E.image;if(N===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(N.complete!==!1)return void pt(b,E,y);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}e.bindTexture(a.TEXTURE_2D,b.__webglTexture,a.TEXTURE0+y)}const D={[ws]:a.REPEAT,[Un]:a.CLAMP_TO_EDGE,[Ts]:a.MIRRORED_REPEAT},A={[He]:a.NEAREST,[Ks]:a.NEAREST_MIPMAP_NEAREST,[cr]:a.NEAREST_MIPMAP_LINEAR,[en]:a.LINEAR,[Aa]:a.LINEAR_MIPMAP_NEAREST,[ji]:a.LINEAR_MIPMAP_LINEAR},V={512:a.NEVER,519:a.ALWAYS,513:a.LESS,515:a.LEQUAL,514:a.EQUAL,518:a.GEQUAL,516:a.GREATER,517:a.NOTEQUAL};function j(E,y,b){if(y.type!==On||t.has("OES_texture_float_linear")!==!1||y.magFilter!==en&&y.magFilter!==Aa&&y.magFilter!==cr&&y.magFilter!==ji&&y.minFilter!==en&&y.minFilter!==Aa&&y.minFilter!==cr&&y.minFilter!==ji||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),b?(a.texParameteri(E,a.TEXTURE_WRAP_S,D[y.wrapS]),a.texParameteri(E,a.TEXTURE_WRAP_T,D[y.wrapT]),E!==a.TEXTURE_3D&&E!==a.TEXTURE_2D_ARRAY||a.texParameteri(E,a.TEXTURE_WRAP_R,D[y.wrapR]),a.texParameteri(E,a.TEXTURE_MAG_FILTER,A[y.magFilter]),a.texParameteri(E,a.TEXTURE_MIN_FILTER,A[y.minFilter])):(a.texParameteri(E,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(E,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),E!==a.TEXTURE_3D&&E!==a.TEXTURE_2D_ARRAY||a.texParameteri(E,a.TEXTURE_WRAP_R,a.CLAMP_TO_EDGE),y.wrapS===Un&&y.wrapT===Un||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(E,a.TEXTURE_MAG_FILTER,S(y.magFilter)),a.texParameteri(E,a.TEXTURE_MIN_FILTER,S(y.minFilter)),y.minFilter!==He&&y.minFilter!==en&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(a.texParameteri(E,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(E,a.TEXTURE_COMPARE_FUNC,V[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const N=t.get("EXT_texture_filter_anisotropic");if(y.magFilter===He||y.minFilter!==cr&&y.minFilter!==ji||y.type===On&&t.has("OES_texture_float_linear")===!1||l===!1&&y.type===br&&t.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(a.texParameterf(E,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function Q(E,y){let b=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",P));const N=y.source;let F=d.get(N);F===void 0&&(F={},d.set(N,F));const B=function(U){const G=[];return G.push(U.wrapS),G.push(U.wrapT),G.push(U.wrapR||0),G.push(U.magFilter),G.push(U.minFilter),G.push(U.anisotropy),G.push(U.internalFormat),G.push(U.format),G.push(U.type),G.push(U.generateMipmaps),G.push(U.premultiplyAlpha),G.push(U.flipY),G.push(U.unpackAlignment),G.push(U.colorSpace),G.join()}(y);if(B!==E.__cacheKey){F[B]===void 0&&(F[B]={texture:a.createTexture(),usedTimes:0},s.memory.textures++,b=!0),F[B].usedTimes++;const U=F[E.__cacheKey];U!==void 0&&(F[E.__cacheKey].usedTimes--,U.usedTimes===0&&z(y)),E.__cacheKey=B,E.__webglTexture=F[B].texture}return b}function pt(E,y,b){let N=a.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(N=a.TEXTURE_2D_ARRAY),y.isData3DTexture&&(N=a.TEXTURE_3D);const F=Q(E,y),B=y.source;e.bindTexture(N,E.__webglTexture,a.TEXTURE0+b);const U=n.get(B);if(B.version!==U.__version||F===!0){e.activeTexture(a.TEXTURE0+b);const G=oe.getPrimaries(oe.workingColorSpace),J=y.colorSpace===En?null:oe.getPrimaries(y.colorSpace),ft=y.colorSpace===En||G===J?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,y.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,y.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const dt=function(Mt){return!l&&(Mt.wrapS!==Un||Mt.wrapT!==Un||Mt.minFilter!==He&&Mt.minFilter!==en)}(y)&&g(y.image)===!1;let w=m(y.image,dt,!1,i.maxTextureSize);w=W(y,w);const K=g(w)||l,q=r.convert(y.format,y.colorSpace);let it,ot=r.convert(y.type),yt=_(y.internalFormat,q,ot,y.colorSpace,y.isVideoTexture);j(N,y,K);const lt=y.mipmaps,St=l&&y.isVideoTexture!==!0&&yt!==$l,It=U.__version===void 0||F===!0,bt=B.dataReady,Ut=M(y,w,K);if(y.isDepthTexture)yt=a.DEPTH_COMPONENT,l?yt=y.type===On?a.DEPTH_COMPONENT32F:y.type===Yn?a.DEPTH_COMPONENT24:y.type===fi?a.DEPTH24_STENCIL8:a.DEPTH_COMPONENT16:y.type===On&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===mi&&yt===a.DEPTH_COMPONENT&&y.type!==Fs&&y.type!==Yn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Yn,ot=r.convert(y.type)),y.format===tr&&yt===a.DEPTH_COMPONENT&&(yt=a.DEPTH_STENCIL,y.type!==fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=fi,ot=r.convert(y.type))),It&&(St?e.texStorage2D(a.TEXTURE_2D,1,yt,w.width,w.height):e.texImage2D(a.TEXTURE_2D,0,yt,w.width,w.height,0,q,ot,null));else if(y.isDataTexture)if(lt.length>0&&K){St&&It&&e.texStorage2D(a.TEXTURE_2D,Ut,yt,lt[0].width,lt[0].height);for(let Mt=0,Ft=lt.length;Mt<Ft;Mt++)it=lt[Mt],St?bt&&e.texSubImage2D(a.TEXTURE_2D,Mt,0,0,it.width,it.height,q,ot,it.data):e.texImage2D(a.TEXTURE_2D,Mt,yt,it.width,it.height,0,q,ot,it.data);y.generateMipmaps=!1}else St?(It&&e.texStorage2D(a.TEXTURE_2D,Ut,yt,w.width,w.height),bt&&e.texSubImage2D(a.TEXTURE_2D,0,0,0,w.width,w.height,q,ot,w.data)):e.texImage2D(a.TEXTURE_2D,0,yt,w.width,w.height,0,q,ot,w.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){St&&It&&e.texStorage3D(a.TEXTURE_2D_ARRAY,Ut,yt,lt[0].width,lt[0].height,w.depth);for(let Mt=0,Ft=lt.length;Mt<Ft;Mt++)it=lt[Mt],y.format!==Mn?q!==null?St?bt&&e.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Mt,0,0,0,it.width,it.height,w.depth,q,it.data,0,0):e.compressedTexImage3D(a.TEXTURE_2D_ARRAY,Mt,yt,it.width,it.height,w.depth,0,it.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):St?bt&&e.texSubImage3D(a.TEXTURE_2D_ARRAY,Mt,0,0,0,it.width,it.height,w.depth,q,ot,it.data):e.texImage3D(a.TEXTURE_2D_ARRAY,Mt,yt,it.width,it.height,w.depth,0,q,ot,it.data)}else{St&&It&&e.texStorage2D(a.TEXTURE_2D,Ut,yt,lt[0].width,lt[0].height);for(let Mt=0,Ft=lt.length;Mt<Ft;Mt++)it=lt[Mt],y.format!==Mn?q!==null?St?bt&&e.compressedTexSubImage2D(a.TEXTURE_2D,Mt,0,0,it.width,it.height,q,it.data):e.compressedTexImage2D(a.TEXTURE_2D,Mt,yt,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):St?bt&&e.texSubImage2D(a.TEXTURE_2D,Mt,0,0,it.width,it.height,q,ot,it.data):e.texImage2D(a.TEXTURE_2D,Mt,yt,it.width,it.height,0,q,ot,it.data)}else if(y.isDataArrayTexture)St?(It&&e.texStorage3D(a.TEXTURE_2D_ARRAY,Ut,yt,w.width,w.height,w.depth),bt&&e.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,w.width,w.height,w.depth,q,ot,w.data)):e.texImage3D(a.TEXTURE_2D_ARRAY,0,yt,w.width,w.height,w.depth,0,q,ot,w.data);else if(y.isData3DTexture)St?(It&&e.texStorage3D(a.TEXTURE_3D,Ut,yt,w.width,w.height,w.depth),bt&&e.texSubImage3D(a.TEXTURE_3D,0,0,0,0,w.width,w.height,w.depth,q,ot,w.data)):e.texImage3D(a.TEXTURE_3D,0,yt,w.width,w.height,w.depth,0,q,ot,w.data);else if(y.isFramebufferTexture){if(It)if(St)e.texStorage2D(a.TEXTURE_2D,Ut,yt,w.width,w.height);else{let Mt=w.width,Ft=w.height;for(let Ot=0;Ot<Ut;Ot++)e.texImage2D(a.TEXTURE_2D,Ot,yt,Mt,Ft,0,q,ot,null),Mt>>=1,Ft>>=1}}else if(lt.length>0&&K){St&&It&&e.texStorage2D(a.TEXTURE_2D,Ut,yt,lt[0].width,lt[0].height);for(let Mt=0,Ft=lt.length;Mt<Ft;Mt++)it=lt[Mt],St?bt&&e.texSubImage2D(a.TEXTURE_2D,Mt,0,0,q,ot,it):e.texImage2D(a.TEXTURE_2D,Mt,yt,q,ot,it);y.generateMipmaps=!1}else St?(It&&e.texStorage2D(a.TEXTURE_2D,Ut,yt,w.width,w.height),bt&&e.texSubImage2D(a.TEXTURE_2D,0,0,0,q,ot,w)):e.texImage2D(a.TEXTURE_2D,0,yt,q,ot,w);v(y,K)&&x(N),U.__version=B.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function H(E,y,b,N,F,B){const U=r.convert(b.format,b.colorSpace),G=r.convert(b.type),J=_(b.internalFormat,U,G,b.colorSpace);if(!n.get(y).__hasExternalTextures){const ft=Math.max(1,y.width>>B),dt=Math.max(1,y.height>>B);F===a.TEXTURE_3D||F===a.TEXTURE_2D_ARRAY?e.texImage3D(F,B,J,ft,dt,y.depth,0,U,G,null):e.texImage2D(F,B,J,ft,dt,0,U,G,null)}e.bindFramebuffer(a.FRAMEBUFFER,E),R(y)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,N,F,n.get(b).__webglTexture,0,Z(y)):(F===a.TEXTURE_2D||F>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&F<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,N,F,n.get(b).__webglTexture,B),e.bindFramebuffer(a.FRAMEBUFFER,null)}function O(E,y,b){if(a.bindRenderbuffer(a.RENDERBUFFER,E),y.depthBuffer&&!y.stencilBuffer){let N=l===!0?a.DEPTH_COMPONENT24:a.DEPTH_COMPONENT16;if(b||R(y)){const F=y.depthTexture;F&&F.isDepthTexture&&(F.type===On?N=a.DEPTH_COMPONENT32F:F.type===Yn&&(N=a.DEPTH_COMPONENT24));const B=Z(y);R(y)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,B,N,y.width,y.height):a.renderbufferStorageMultisample(a.RENDERBUFFER,B,N,y.width,y.height)}else a.renderbufferStorage(a.RENDERBUFFER,N,y.width,y.height);a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.RENDERBUFFER,E)}else if(y.depthBuffer&&y.stencilBuffer){const N=Z(y);b&&R(y)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,N,a.DEPTH24_STENCIL8,y.width,y.height):R(y)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,N,a.DEPTH24_STENCIL8,y.width,y.height):a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_STENCIL,y.width,y.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.RENDERBUFFER,E)}else{const N=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let F=0;F<N.length;F++){const B=N[F],U=r.convert(B.format,B.colorSpace),G=r.convert(B.type),J=_(B.internalFormat,U,G,B.colorSpace),ft=Z(y);b&&R(y)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,ft,J,y.width,y.height):R(y)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,ft,J,y.width,y.height):a.renderbufferStorage(a.RENDERBUFFER,J,y.width,y.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function X(E){const y=n.get(E),b=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!y.__autoAllocateDepthBuffer){if(b)throw new Error("target.depthTexture not supported in Cube render targets");(function(N,F){if(F&&F.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(a.FRAMEBUFFER,N),!F.depthTexture||!F.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");n.get(F.depthTexture).__webglTexture&&F.depthTexture.image.width===F.width&&F.depthTexture.image.height===F.height||(F.depthTexture.image.width=F.width,F.depthTexture.image.height=F.height,F.depthTexture.needsUpdate=!0),L(F.depthTexture,0);const B=n.get(F.depthTexture).__webglTexture,U=Z(F);if(F.depthTexture.format===mi)R(F)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,B,0,U):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,B,0);else{if(F.depthTexture.format!==tr)throw new Error("Unknown depthTexture format");R(F)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,B,0,U):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,B,0)}})(y.__webglFramebuffer,E)}else if(b){y.__webglDepthbuffer=[];for(let N=0;N<6;N++)e.bindFramebuffer(a.FRAMEBUFFER,y.__webglFramebuffer[N]),y.__webglDepthbuffer[N]=a.createRenderbuffer(),O(y.__webglDepthbuffer[N],E,!1)}else e.bindFramebuffer(a.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=a.createRenderbuffer(),O(y.__webglDepthbuffer,E,!1);e.bindFramebuffer(a.FRAMEBUFFER,null)}function Z(E){return Math.min(i.maxSamples,E.samples)}function R(E){const y=n.get(E);return l&&E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function W(E,y){const b=E.colorSpace,N=E.format,F=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===As||b!==zn&&b!==En&&(oe.getTransfer(b)===me?l===!1?t.has("EXT_sRGB")===!0&&N===Mn?(E.format=As,E.minFilter=en,E.generateMipmaps=!1):y=nc.sRGBToLinear(y):N===Mn&&F===pi||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",b)),y}this.allocateTextureUnit=function(){const E=k;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),k+=1,E},this.resetTextureUnits=function(){k=0},this.setTexture2D=L,this.setTexture2DArray=function(E,y){const b=n.get(E);E.version>0&&b.__version!==E.version?pt(b,E,y):e.bindTexture(a.TEXTURE_2D_ARRAY,b.__webglTexture,a.TEXTURE0+y)},this.setTexture3D=function(E,y){const b=n.get(E);E.version>0&&b.__version!==E.version?pt(b,E,y):e.bindTexture(a.TEXTURE_3D,b.__webglTexture,a.TEXTURE0+y)},this.setTextureCube=function(E,y){const b=n.get(E);E.version>0&&b.__version!==E.version?function(N,F,B){if(F.image.length!==6)return;const U=Q(N,F),G=F.source;e.bindTexture(a.TEXTURE_CUBE_MAP,N.__webglTexture,a.TEXTURE0+B);const J=n.get(G);if(G.version!==J.__version||U===!0){e.activeTexture(a.TEXTURE0+B);const ft=oe.getPrimaries(oe.workingColorSpace),dt=F.colorSpace===En?null:oe.getPrimaries(F.colorSpace),w=F.colorSpace===En||ft===dt?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,F.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,F.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,w);const K=F.isCompressedTexture||F.image[0].isCompressedTexture,q=F.image[0]&&F.image[0].isDataTexture,it=[];for(let Lt=0;Lt<6;Lt++)it[Lt]=K||q?q?F.image[Lt].image:F.image[Lt]:m(F.image[Lt],!1,!0,i.maxCubemapSize),it[Lt]=W(F,it[Lt]);const ot=it[0],yt=g(ot)||l,lt=r.convert(F.format,F.colorSpace),St=r.convert(F.type),It=_(F.internalFormat,lt,St,F.colorSpace),bt=l&&F.isVideoTexture!==!0,Ut=J.__version===void 0||U===!0,Mt=G.dataReady;let Ft,Ot=M(F,ot,yt);if(j(a.TEXTURE_CUBE_MAP,F,yt),K){bt&&Ut&&e.texStorage2D(a.TEXTURE_CUBE_MAP,Ot,It,ot.width,ot.height);for(let Lt=0;Lt<6;Lt++){Ft=it[Lt].mipmaps;for(let Bt=0;Bt<Ft.length;Bt++){const jt=Ft[Bt];F.format!==Mn?lt!==null?bt?Mt&&e.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Bt,0,0,jt.width,jt.height,lt,jt.data):e.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Bt,It,jt.width,jt.height,0,jt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):bt?Mt&&e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Bt,0,0,jt.width,jt.height,lt,St,jt.data):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Bt,It,jt.width,jt.height,0,lt,St,jt.data)}}}else{Ft=F.mipmaps,bt&&Ut&&(Ft.length>0&&Ot++,e.texStorage2D(a.TEXTURE_CUBE_MAP,Ot,It,it[0].width,it[0].height));for(let Lt=0;Lt<6;Lt++)if(q){bt?Mt&&e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,0,0,it[Lt].width,it[Lt].height,lt,St,it[Lt].data):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,It,it[Lt].width,it[Lt].height,0,lt,St,it[Lt].data);for(let Bt=0;Bt<Ft.length;Bt++){const jt=Ft[Bt].image[Lt].image;bt?Mt&&e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Bt+1,0,0,jt.width,jt.height,lt,St,jt.data):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Bt+1,It,jt.width,jt.height,0,lt,St,jt.data)}}else{bt?Mt&&e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,0,0,lt,St,it[Lt]):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,It,lt,St,it[Lt]);for(let Bt=0;Bt<Ft.length;Bt++){const jt=Ft[Bt];bt?Mt&&e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Bt+1,0,0,lt,St,jt.image[Lt]):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Bt+1,It,lt,St,jt.image[Lt])}}}v(F,yt)&&x(a.TEXTURE_CUBE_MAP),J.__version=G.version,F.onUpdate&&F.onUpdate(F)}N.__version=F.version}(b,E,y):e.bindTexture(a.TEXTURE_CUBE_MAP,b.__webglTexture,a.TEXTURE0+y)},this.rebindTextures=function(E,y,b){const N=n.get(E);y!==void 0&&H(N.__webglFramebuffer,E,E.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),b!==void 0&&X(E)},this.setupRenderTarget=function(E){const y=E.texture,b=n.get(E),N=n.get(y);E.addEventListener("dispose",T),E.isWebGLMultipleRenderTargets!==!0&&(N.__webglTexture===void 0&&(N.__webglTexture=a.createTexture()),N.__version=y.version,s.memory.textures++);const F=E.isWebGLCubeRenderTarget===!0,B=E.isWebGLMultipleRenderTargets===!0,U=g(E)||l;if(F){b.__webglFramebuffer=[];for(let G=0;G<6;G++)if(l&&y.mipmaps&&y.mipmaps.length>0){b.__webglFramebuffer[G]=[];for(let J=0;J<y.mipmaps.length;J++)b.__webglFramebuffer[G][J]=a.createFramebuffer()}else b.__webglFramebuffer[G]=a.createFramebuffer()}else{if(l&&y.mipmaps&&y.mipmaps.length>0){b.__webglFramebuffer=[];for(let G=0;G<y.mipmaps.length;G++)b.__webglFramebuffer[G]=a.createFramebuffer()}else b.__webglFramebuffer=a.createFramebuffer();if(B)if(i.drawBuffers){const G=E.texture;for(let J=0,ft=G.length;J<ft;J++){const dt=n.get(G[J]);dt.__webglTexture===void 0&&(dt.__webglTexture=a.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(l&&E.samples>0&&R(E)===!1){const G=B?y:[y];b.__webglMultisampledFramebuffer=a.createFramebuffer(),b.__webglColorRenderbuffer=[],e.bindFramebuffer(a.FRAMEBUFFER,b.__webglMultisampledFramebuffer);for(let J=0;J<G.length;J++){const ft=G[J];b.__webglColorRenderbuffer[J]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,b.__webglColorRenderbuffer[J]);const dt=r.convert(ft.format,ft.colorSpace),w=r.convert(ft.type),K=_(ft.internalFormat,dt,w,ft.colorSpace,E.isXRRenderTarget===!0),q=Z(E);a.renderbufferStorageMultisample(a.RENDERBUFFER,q,K,E.width,E.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+J,a.RENDERBUFFER,b.__webglColorRenderbuffer[J])}a.bindRenderbuffer(a.RENDERBUFFER,null),E.depthBuffer&&(b.__webglDepthRenderbuffer=a.createRenderbuffer(),O(b.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(a.FRAMEBUFFER,null)}}if(F){e.bindTexture(a.TEXTURE_CUBE_MAP,N.__webglTexture),j(a.TEXTURE_CUBE_MAP,y,U);for(let G=0;G<6;G++)if(l&&y.mipmaps&&y.mipmaps.length>0)for(let J=0;J<y.mipmaps.length;J++)H(b.__webglFramebuffer[G][J],E,y,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+G,J);else H(b.__webglFramebuffer[G],E,y,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+G,0);v(y,U)&&x(a.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(B){const G=E.texture;for(let J=0,ft=G.length;J<ft;J++){const dt=G[J],w=n.get(dt);e.bindTexture(a.TEXTURE_2D,w.__webglTexture),j(a.TEXTURE_2D,dt,U),H(b.__webglFramebuffer,E,dt,a.COLOR_ATTACHMENT0+J,a.TEXTURE_2D,0),v(dt,U)&&x(a.TEXTURE_2D)}e.unbindTexture()}else{let G=a.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(l?G=E.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(G,N.__webglTexture),j(G,y,U),l&&y.mipmaps&&y.mipmaps.length>0)for(let J=0;J<y.mipmaps.length;J++)H(b.__webglFramebuffer[J],E,y,a.COLOR_ATTACHMENT0,G,J);else H(b.__webglFramebuffer,E,y,a.COLOR_ATTACHMENT0,G,0);v(y,U)&&x(G),e.unbindTexture()}E.depthBuffer&&X(E)},this.updateRenderTargetMipmap=function(E){const y=g(E)||l,b=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let N=0,F=b.length;N<F;N++){const B=b[N];if(v(B,y)){const U=E.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:a.TEXTURE_2D,G=n.get(B).__webglTexture;e.bindTexture(U,G),x(U),e.unbindTexture()}}},this.updateMultisampleRenderTarget=function(E){if(l&&E.samples>0&&R(E)===!1){const y=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],b=E.width,N=E.height;let F=a.COLOR_BUFFER_BIT;const B=[],U=E.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,G=n.get(E),J=E.isWebGLMultipleRenderTargets===!0;if(J)for(let ft=0;ft<y.length;ft++)e.bindFramebuffer(a.FRAMEBUFFER,G.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ft,a.RENDERBUFFER,null),e.bindFramebuffer(a.FRAMEBUFFER,G.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+ft,a.TEXTURE_2D,null,0);e.bindFramebuffer(a.READ_FRAMEBUFFER,G.__webglMultisampledFramebuffer),e.bindFramebuffer(a.DRAW_FRAMEBUFFER,G.__webglFramebuffer);for(let ft=0;ft<y.length;ft++){B.push(a.COLOR_ATTACHMENT0+ft),E.depthBuffer&&B.push(U);const dt=G.__ignoreDepthValues!==void 0&&G.__ignoreDepthValues;if(dt===!1&&(E.depthBuffer&&(F|=a.DEPTH_BUFFER_BIT),E.stencilBuffer&&(F|=a.STENCIL_BUFFER_BIT)),J&&a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,G.__webglColorRenderbuffer[ft]),dt===!0&&(a.invalidateFramebuffer(a.READ_FRAMEBUFFER,[U]),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[U])),J){const w=n.get(y[ft]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,w,0)}a.blitFramebuffer(0,0,b,N,0,0,b,N,F,a.NEAREST),h&&a.invalidateFramebuffer(a.READ_FRAMEBUFFER,B)}if(e.bindFramebuffer(a.READ_FRAMEBUFFER,null),e.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),J)for(let ft=0;ft<y.length;ft++){e.bindFramebuffer(a.FRAMEBUFFER,G.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ft,a.RENDERBUFFER,G.__webglColorRenderbuffer[ft]);const dt=n.get(y[ft]).__webglTexture;e.bindFramebuffer(a.FRAMEBUFFER,G.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+ft,a.TEXTURE_2D,dt,0)}e.bindFramebuffer(a.DRAW_FRAMEBUFFER,G.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=X,this.setupFrameBufferTexture=H,this.useMultisampledRTT=R}function Zu(a,t,e){const n=e.isWebGL2;return{convert:function(i,r=""){let s;const l=oe.getTransfer(r);if(i===pi)return a.UNSIGNED_BYTE;if(i===Yl)return a.UNSIGNED_SHORT_4_4_4_4;if(i===Zl)return a.UNSIGNED_SHORT_5_5_5_1;if(i===1010)return a.BYTE;if(i===1011)return a.SHORT;if(i===Fs)return a.UNSIGNED_SHORT;if(i===jl)return a.INT;if(i===Yn)return a.UNSIGNED_INT;if(i===On)return a.FLOAT;if(i===br)return n?a.HALF_FLOAT:(s=t.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(i===1021)return a.ALPHA;if(i===Mn)return a.RGBA;if(i===1024)return a.LUMINANCE;if(i===1025)return a.LUMINANCE_ALPHA;if(i===mi)return a.DEPTH_COMPONENT;if(i===tr)return a.DEPTH_STENCIL;if(i===As)return s=t.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(i===1028)return a.RED;if(i===Kl)return a.RED_INTEGER;if(i===1030)return a.RG;if(i===Ql)return a.RG_INTEGER;if(i===Jl)return a.RGBA_INTEGER;if(i===Ca||i===Ra||i===Pa||i===La)if(l===me){if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s===null)return null;if(i===Ca)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ra)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===La)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(s=t.get("WEBGL_compressed_texture_s3tc"),s===null)return null;if(i===Ca)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ra)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Pa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===La)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(i===Qs||i===Js||i===$s||i===to){if(s=t.get("WEBGL_compressed_texture_pvrtc"),s===null)return null;if(i===Qs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Js)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===$s)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===to)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(i===$l)return s=t.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===eo||i===no){if(s=t.get("WEBGL_compressed_texture_etc"),s===null)return null;if(i===eo)return l===me?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===no)return l===me?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}if(i===io||i===ro||i===ao||i===so||i===oo||i===lo||i===co||i===ho||i===uo||i===po||i===fo||i===mo||i===vo||i===go){if(s=t.get("WEBGL_compressed_texture_astc"),s===null)return null;if(i===io)return l===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ro)return l===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ao)return l===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===so)return l===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===oo)return l===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===lo)return l===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===co)return l===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ho)return l===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===uo)return l===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===po)return l===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===fo)return l===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===mo)return l===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===vo)return l===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===go)return l===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}if(i===Na||i===_o||i===xo){if(s=t.get("EXT_texture_compression_bptc"),s===null)return null;if(i===Na)return l===me?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===_o)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===xo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(i===36283||i===yo||i===Mo||i===Eo){if(s=t.get("EXT_texture_compression_rgtc"),s===null)return null;if(i===Na)return s.COMPRESSED_RED_RGTC1_EXT;if(i===yo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Mo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Eo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return i===fi?n?a.UNSIGNED_INT_24_8:(s=t.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):a[i]!==void 0?a[i]:null}}}class Ku extends sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class xr extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qu={type:"move"};class is{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new et,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new et),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new et,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new et),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,s=null;const l=this._targetRay,o=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){s=!0;for(const m of t.hand.values()){const g=e.getJointPose(m,n),v=this._getHandJoint(h,m);g!==null&&(v.matrix.fromArray(g.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=g.radius),v.visible=g!==null}const c=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],d=c.position.distanceTo(u.position),p=.02,f=.005;h.inputState.pinching&&d>p+f?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=p-f&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else o!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1));l!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Qu)))}return l!==null&&(l.visible=i!==null),o!==null&&(o.visible=r!==null),h!==null&&(h.visible=s!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new xr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Ju{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new We;t.properties.get(i).__webglTexture=e.texture,e.depthNear==n.depthNear&&e.depthFar==n.depthFar||(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,i=new Bn({extensions:{fragDepth:!0},vertexShader:`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fragmentShader:`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new nn(new Rr(20,20),i)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class $u extends rr{constructor(t,e){super();const n=this;let i=null,r=1,s=null,l="local-floor",o=1,h=null,c=null,u=null,d=null,p=null,f=null;const m=new Ju,g=e.getContextAttributes();let v=null,x=null;const _=[],M=[],S=new $t;let P=null;const T=new sn;T.layers.enable(1),T.viewport=new ve;const z=new sn;z.layers.enable(2),z.viewport=new ve;const k=[T,z],L=new Ku;L.layers.enable(1),L.layers.enable(2);let D=null,A=null;function V(R){const W=M.indexOf(R.inputSource);if(W===-1)return;const E=_[W];E!==void 0&&(E.update(R.inputSource,R.frame,h||s),E.dispatchEvent({type:R.type,data:R.inputSource}))}function j(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",j),i.removeEventListener("inputsourceschange",Q);for(let R=0;R<_.length;R++){const W=M[R];W!==null&&(M[R]=null,_[R].disconnect(W))}D=null,A=null,m.reset(),t.setRenderTarget(v),p=null,d=null,u=null,i=null,x=null,Z.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}function Q(R){for(let W=0;W<R.removed.length;W++){const E=R.removed[W],y=M.indexOf(E);y>=0&&(M[y]=null,_[y].disconnect(E))}for(let W=0;W<R.added.length;W++){const E=R.added[W];let y=M.indexOf(E);if(y===-1){for(let N=0;N<_.length;N++){if(N>=M.length){M.push(E),y=N;break}if(M[N]===null){M[N]=E,y=N;break}}if(y===-1)break}const b=_[y];b&&b.connect(E)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(R){let W=_[R];return W===void 0&&(W=new is,_[R]=W),W.getTargetRaySpace()},this.getControllerGrip=function(R){let W=_[R];return W===void 0&&(W=new is,_[R]=W),W.getGripSpace()},this.getHand=function(R){let W=_[R];return W===void 0&&(W=new is,_[R]=W),W.getHandSpace()},this.setFramebufferScaleFactor=function(R){r=R,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(R){l=R,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||s},this.setReferenceSpace=function(R){h=R},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(R){if(i=R,i!==null){if(v=t.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",j),i.addEventListener("inputsourceschange",Q),g.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(S),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const W={antialias:i.renderState.layers!==void 0||g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,W),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new yi(p.framebufferWidth,p.framebufferHeight,{format:Mn,type:pi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let W=null,E=null,y=null;g.depth&&(y=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,W=g.stencil?tr:mi,E=g.stencil?fi:Yn);const b={colorFormat:e.RGBA8,depthFormat:y,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(b),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new yi(d.textureWidth,d.textureHeight,{format:Mn,type:pi,depthTexture:new dc(d.textureWidth,d.textureHeight,E,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0}),t.properties.get(x).__ignoreDepthValues=d.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(o),h=null,s=await i.requestReferenceSpace(l),Z.setContext(i),Z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};const pt=new et,H=new et;function O(R,W){W===null?R.matrixWorld.copy(R.matrix):R.matrixWorld.multiplyMatrices(W.matrixWorld,R.matrix),R.matrixWorldInverse.copy(R.matrixWorld).invert()}this.updateCamera=function(R){if(i===null)return;m.texture!==null&&(R.near=m.depthNear,R.far=m.depthFar),L.near=z.near=T.near=R.near,L.far=z.far=T.far=R.far,D===L.near&&A===L.far||(i.updateRenderState({depthNear:L.near,depthFar:L.far}),D=L.near,A=L.far,T.near=D,T.far=A,z.near=D,z.far=A,T.updateProjectionMatrix(),z.updateProjectionMatrix(),R.updateProjectionMatrix());const W=R.parent,E=L.cameras;O(L,W);for(let y=0;y<E.length;y++)O(E[y],W);E.length===2?function(y,b,N){pt.setFromMatrixPosition(b.matrixWorld),H.setFromMatrixPosition(N.matrixWorld);const F=pt.distanceTo(H),B=b.projectionMatrix.elements,U=N.projectionMatrix.elements,G=B[14]/(B[10]-1),J=B[14]/(B[10]+1),ft=(B[9]+1)/B[5],dt=(B[9]-1)/B[5],w=(B[8]-1)/B[0],K=(U[8]+1)/U[0],q=G*w,it=G*K,ot=F/(-w+K),yt=ot*-w;b.matrixWorld.decompose(y.position,y.quaternion,y.scale),y.translateX(yt),y.translateZ(ot),y.matrixWorld.compose(y.position,y.quaternion,y.scale),y.matrixWorldInverse.copy(y.matrixWorld).invert();const lt=G+ot,St=J+ot,It=q-yt,bt=it+(F-yt),Ut=ft*J/St*lt,Mt=dt*J/St*lt;y.projectionMatrix.makePerspective(It,bt,Ut,Mt,lt,St),y.projectionMatrixInverse.copy(y.projectionMatrix).invert()}(L,T,z):L.projectionMatrix.copy(T.projectionMatrix),function(y,b,N){N===null?y.matrix.copy(b.matrixWorld):(y.matrix.copy(N.matrixWorld),y.matrix.invert(),y.matrix.multiply(b.matrixWorld)),y.matrix.decompose(y.position,y.quaternion,y.scale),y.updateMatrixWorld(!0),y.projectionMatrix.copy(b.projectionMatrix),y.projectionMatrixInverse.copy(b.projectionMatrixInverse),y.isPerspectiveCamera&&(y.fov=2*Cs*Math.atan(1/y.projectionMatrix.elements[5]),y.zoom=1)}(R,L,W)},this.getCamera=function(){return L},this.getFoveation=function(){if(d!==null||p!==null)return o},this.setFoveation=function(R){o=R,d!==null&&(d.fixedFoveation=R),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=R)},this.hasDepthSensing=function(){return m.texture!==null};let X=null;const Z=new hc;Z.setAnimationLoop(function(R,W){if(c=W.getViewerPose(h||s),f=W,c!==null){const E=c.views;p!==null&&(t.setRenderTargetFramebuffer(x,p.framebuffer),t.setRenderTarget(x));let y=!1;E.length!==L.cameras.length&&(L.cameras.length=0,y=!0);for(let N=0;N<E.length;N++){const F=E[N];let B=null;if(p!==null)B=p.getViewport(F);else{const G=u.getViewSubImage(d,F);B=G.viewport,N===0&&(t.setRenderTargetTextures(x,G.colorTexture,d.ignoreDepthValues?void 0:G.depthStencilTexture),t.setRenderTarget(x))}let U=k[N];U===void 0&&(U=new sn,U.layers.enable(N),U.viewport=new ve,k[N]=U),U.matrix.fromArray(F.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(F.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(B.x,B.y,B.width,B.height),N===0&&(L.matrix.copy(U.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),y===!0&&L.cameras.push(U)}const b=i.enabledFeatures;if(b&&b.includes("depth-sensing")){const N=u.getDepthInformation(E[0]);N&&N.isValid&&N.texture&&m.init(t,N,i.renderState)}}for(let E=0;E<_.length;E++){const y=M[E],b=_[E];y!==null&&b!==void 0&&b.update(y,W,h||s)}m.render(t,L),X&&X(R,W),W.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:W}),f=null}),this.setAnimationLoop=function(R){X=R},this.dispose=function(){}}}function td(a,t){function e(i,r){i.matrixAutoUpdate===!0&&i.updateMatrix(),r.value.copy(i.matrix)}function n(i,r){i.opacity.value=r.opacity,r.color&&i.diffuse.value.copy(r.color),r.emissive&&i.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(i.map.value=r.map,e(r.map,i.mapTransform)),r.alphaMap&&(i.alphaMap.value=r.alphaMap,e(r.alphaMap,i.alphaMapTransform)),r.bumpMap&&(i.bumpMap.value=r.bumpMap,e(r.bumpMap,i.bumpMapTransform),i.bumpScale.value=r.bumpScale,r.side===Ze&&(i.bumpScale.value*=-1)),r.normalMap&&(i.normalMap.value=r.normalMap,e(r.normalMap,i.normalMapTransform),i.normalScale.value.copy(r.normalScale),r.side===Ze&&i.normalScale.value.negate()),r.displacementMap&&(i.displacementMap.value=r.displacementMap,e(r.displacementMap,i.displacementMapTransform),i.displacementScale.value=r.displacementScale,i.displacementBias.value=r.displacementBias),r.emissiveMap&&(i.emissiveMap.value=r.emissiveMap,e(r.emissiveMap,i.emissiveMapTransform)),r.specularMap&&(i.specularMap.value=r.specularMap,e(r.specularMap,i.specularMapTransform)),r.alphaTest>0&&(i.alphaTest.value=r.alphaTest);const s=t.get(r).envMap;if(s&&(i.envMap.value=s,i.flipEnvMap.value=s.isCubeTexture&&s.isRenderTargetTexture===!1?-1:1,i.reflectivity.value=r.reflectivity,i.ior.value=r.ior,i.refractionRatio.value=r.refractionRatio),r.lightMap){i.lightMap.value=r.lightMap;const l=a._useLegacyLights===!0?Math.PI:1;i.lightMapIntensity.value=r.lightMapIntensity*l,e(r.lightMap,i.lightMapTransform)}r.aoMap&&(i.aoMap.value=r.aoMap,i.aoMapIntensity.value=r.aoMapIntensity,e(r.aoMap,i.aoMapTransform))}return{refreshFogUniforms:function(i,r){r.color.getRGB(i.fogColor.value,cc(a)),r.isFog?(i.fogNear.value=r.near,i.fogFar.value=r.far):r.isFogExp2&&(i.fogDensity.value=r.density)},refreshMaterialUniforms:function(i,r,s,l,o){r.isMeshBasicMaterial||r.isMeshLambertMaterial?n(i,r):r.isMeshToonMaterial?(n(i,r),function(h,c){c.gradientMap&&(h.gradientMap.value=c.gradientMap)}(i,r)):r.isMeshPhongMaterial?(n(i,r),function(h,c){h.specular.value.copy(c.specular),h.shininess.value=Math.max(c.shininess,1e-4)}(i,r)):r.isMeshStandardMaterial?(n(i,r),function(h,c){h.metalness.value=c.metalness,c.metalnessMap&&(h.metalnessMap.value=c.metalnessMap,e(c.metalnessMap,h.metalnessMapTransform)),h.roughness.value=c.roughness,c.roughnessMap&&(h.roughnessMap.value=c.roughnessMap,e(c.roughnessMap,h.roughnessMapTransform)),t.get(c).envMap&&(h.envMapIntensity.value=c.envMapIntensity)}(i,r),r.isMeshPhysicalMaterial&&function(h,c,u){h.ior.value=c.ior,c.sheen>0&&(h.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),h.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(h.sheenColorMap.value=c.sheenColorMap,e(c.sheenColorMap,h.sheenColorMapTransform)),c.sheenRoughnessMap&&(h.sheenRoughnessMap.value=c.sheenRoughnessMap,e(c.sheenRoughnessMap,h.sheenRoughnessMapTransform))),c.clearcoat>0&&(h.clearcoat.value=c.clearcoat,h.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(h.clearcoatMap.value=c.clearcoatMap,e(c.clearcoatMap,h.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,e(c.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(h.clearcoatNormalMap.value=c.clearcoatNormalMap,e(c.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===Ze&&h.clearcoatNormalScale.value.negate())),c.iridescence>0&&(h.iridescence.value=c.iridescence,h.iridescenceIOR.value=c.iridescenceIOR,h.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(h.iridescenceMap.value=c.iridescenceMap,e(c.iridescenceMap,h.iridescenceMapTransform)),c.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=c.iridescenceThicknessMap,e(c.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),c.transmission>0&&(h.transmission.value=c.transmission,h.transmissionSamplerMap.value=u.texture,h.transmissionSamplerSize.value.set(u.width,u.height),c.transmissionMap&&(h.transmissionMap.value=c.transmissionMap,e(c.transmissionMap,h.transmissionMapTransform)),h.thickness.value=c.thickness,c.thicknessMap&&(h.thicknessMap.value=c.thicknessMap,e(c.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=c.attenuationDistance,h.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(h.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(h.anisotropyMap.value=c.anisotropyMap,e(c.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=c.specularIntensity,h.specularColor.value.copy(c.specularColor),c.specularColorMap&&(h.specularColorMap.value=c.specularColorMap,e(c.specularColorMap,h.specularColorMapTransform)),c.specularIntensityMap&&(h.specularIntensityMap.value=c.specularIntensityMap,e(c.specularIntensityMap,h.specularIntensityMapTransform))}(i,r,o)):r.isMeshMatcapMaterial?(n(i,r),function(h,c){c.matcap&&(h.matcap.value=c.matcap)}(i,r)):r.isMeshDepthMaterial?n(i,r):r.isMeshDistanceMaterial?(n(i,r),function(h,c){const u=t.get(c).light;h.referencePosition.value.setFromMatrixPosition(u.matrixWorld),h.nearDistance.value=u.shadow.camera.near,h.farDistance.value=u.shadow.camera.far}(i,r)):r.isMeshNormalMaterial?n(i,r):r.isLineBasicMaterial?(function(h,c){h.diffuse.value.copy(c.color),h.opacity.value=c.opacity,c.map&&(h.map.value=c.map,e(c.map,h.mapTransform))}(i,r),r.isLineDashedMaterial&&function(h,c){h.dashSize.value=c.dashSize,h.totalSize.value=c.dashSize+c.gapSize,h.scale.value=c.scale}(i,r)):r.isPointsMaterial?function(h,c,u,d){h.diffuse.value.copy(c.color),h.opacity.value=c.opacity,h.size.value=c.size*u,h.scale.value=.5*d,c.map&&(h.map.value=c.map,e(c.map,h.uvTransform)),c.alphaMap&&(h.alphaMap.value=c.alphaMap,e(c.alphaMap,h.alphaMapTransform)),c.alphaTest>0&&(h.alphaTest.value=c.alphaTest)}(i,r,s,l):r.isSpriteMaterial?function(h,c){h.diffuse.value.copy(c.color),h.opacity.value=c.opacity,h.rotation.value=c.rotation,c.map&&(h.map.value=c.map,e(c.map,h.mapTransform)),c.alphaMap&&(h.alphaMap.value=c.alphaMap,e(c.alphaMap,h.alphaMapTransform)),c.alphaTest>0&&(h.alphaTest.value=c.alphaTest)}(i,r):r.isShadowMaterial?(i.color.value.copy(r.color),i.opacity.value=r.opacity):r.isShaderMaterial&&(r.uniformsNeedUpdate=!1)}}}function ed(a,t,e,n){let i={},r={},s=[];const l=e.isWebGL2?a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS):0;function o(u,d,p,f){const m=u.value,g=d+"_"+p;if(f[g]===void 0)return f[g]=typeof m=="number"||typeof m=="boolean"?m:m.clone(),!0;{const v=f[g];if(typeof m=="number"||typeof m=="boolean"){if(v!==m)return f[g]=m,!0}else if(v.equals(m)===!1)return v.copy(m),!0}return!1}function h(u){const d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function c(u){const d=u.target;d.removeEventListener("dispose",c);const p=s.indexOf(d.__bindingPointIndex);s.splice(p,1),a.deleteBuffer(i[d.id]),delete i[d.id],delete r[d.id]}return{bind:function(u,d){const p=d.program;n.uniformBlockBinding(u,p)},update:function(u,d){let p=i[u.id];p===void 0&&(function(g){const v=g.uniforms;let x=0;const _=16;for(let S=0,P=v.length;S<P;S++){const T=Array.isArray(v[S])?v[S]:[v[S]];for(let z=0,k=T.length;z<k;z++){const L=T[z],D=Array.isArray(L.value)?L.value:[L.value];for(let A=0,V=D.length;A<V;A++){const j=h(D[A]),Q=x%_;Q!==0&&_-Q<j.boundary&&(x+=_-Q),L.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=x,x+=j.storage}}}const M=x%_;M>0&&(x+=_-M),g.__size=x,g.__cache={}}(u),p=function(g){const v=function(){for(let S=0;S<l;S++)if(s.indexOf(S)===-1)return s.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}();g.__bindingPointIndex=v;const x=a.createBuffer(),_=g.__size,M=g.usage;return a.bindBuffer(a.UNIFORM_BUFFER,x),a.bufferData(a.UNIFORM_BUFFER,_,M),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,v,x),x}(u),i[u.id]=p,u.addEventListener("dispose",c));const f=d.program;n.updateUBOMapping(u,f);const m=t.render.frame;r[u.id]!==m&&(function(g){const v=i[g.id],x=g.uniforms,_=g.__cache;a.bindBuffer(a.UNIFORM_BUFFER,v);for(let M=0,S=x.length;M<S;M++){const P=Array.isArray(x[M])?x[M]:[x[M]];for(let T=0,z=P.length;T<z;T++){const k=P[T];if(o(k,M,T,_)===!0){const L=k.__offset,D=Array.isArray(k.value)?k.value:[k.value];let A=0;for(let V=0;V<D.length;V++){const j=D[V],Q=h(j);typeof j=="number"||typeof j=="boolean"?(k.__data[0]=j,a.bufferSubData(a.UNIFORM_BUFFER,L+A,k.__data)):j.isMatrix3?(k.__data[0]=j.elements[0],k.__data[1]=j.elements[1],k.__data[2]=j.elements[2],k.__data[3]=0,k.__data[4]=j.elements[3],k.__data[5]=j.elements[4],k.__data[6]=j.elements[5],k.__data[7]=0,k.__data[8]=j.elements[6],k.__data[9]=j.elements[7],k.__data[10]=j.elements[8],k.__data[11]=0):(j.toArray(k.__data,A),A+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,L,k.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}(u),r[u.id]=m)},dispose:function(){for(const u in i)a.deleteBuffer(i[u]);s=[],i={},r={}}}}class _c{constructor(t={}){const{canvas:e=Kc(),context:n=null,depth:i=!0,stencil:r=!0,alpha:s=!1,antialias:l=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1}=t;let d;this.isWebGLRenderer=!0,d=n!==null?n.getContextAttributes().alpha:s;const p=new Uint32Array(4),f=new Int32Array(4);let m=null,g=null;const v=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=we,this._useLegacyLights=!1,this.toneMapping=Zn,this.toneMappingExposure=1;const _=this;let M=!1,S=0,P=0,T=null,z=-1,k=null;const L=new ve,D=new ve;let A=null;const V=new ne(0);let j=0,Q=e.width,pt=e.height,H=1,O=null,X=null;const Z=new ve(0,0,Q,pt),R=new ve(0,0,Q,pt);let W=!1;const E=new xa;let y=!1,b=!1,N=null;const F=new Qt,B=new $t,U=new et,G={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function J(){return T===null?H:1}let ft,dt,w,K,q,it,ot,yt,lt,St,It,bt,Ut,Mt,Ft,Ot,Lt,Bt,jt,Ae,tt,At,Xt,Kt,rt=n;function pe(C,I){for(let Y=0;Y<C.length;Y++){const nt=C[Y],$=e.getContext(nt,I);if($!==null)return $}return null}try{const C={alpha:!0,depth:i,stencil:r,antialias:l,premultipliedAlpha:o,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ys}`),e.addEventListener("webglcontextlost",ze,!1),e.addEventListener("webglcontextrestored",Ce,!1),e.addEventListener("webglcontextcreationerror",se,!1),rt===null){const I=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&I.shift(),rt=pe(I,C),rt===null)throw pe(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&rt instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),rt.getShaderPrecisionFormat===void 0&&(rt.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}function ce(){ft=new Th(rt),dt=new Eh(rt,ft,t),ft.init(dt),At=new Zu(rt,ft,dt),w=new ju(rt,ft,dt),K=new Rh(rt),q=new Ou,it=new Yu(rt,ft,w,q,dt,At,K),ot=new Sh(_),yt=new wh(_),lt=new _h(rt,dt),Xt=new yh(rt,ft,lt,dt),St=new Ah(rt,lt,K,Xt),It=new Ih(rt,St,lt,K),jt=new Nh(rt,dt,it),Ot=new bh(q),bt=new Uu(_,ot,yt,ft,dt,Xt,Ot),Ut=new td(_,q),Mt=new zu,Ft=new Wu(ft,dt),Bt=new xh(_,ot,yt,w,It,d,o),Lt=new qu(_,It,dt),Kt=new ed(rt,K,dt,w),Ae=new Mh(rt,ft,K,dt),tt=new Ch(rt,ft,K,dt),K.programs=bt.programs,_.capabilities=dt,_.extensions=ft,_.properties=q,_.renderLists=Mt,_.shadowMap=Lt,_.state=w,_.info=K}ce();const re=new $u(_,rt);function ze(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Ce(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const C=K.autoReset,I=Lt.enabled,Y=Lt.autoUpdate,nt=Lt.needsUpdate,$=Lt.type;ce(),K.autoReset=C,Lt.enabled=I,Lt.autoUpdate=Y,Lt.needsUpdate=nt,Lt.type=$}function se(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ge(C){const I=C.target;I.removeEventListener("dispose",ge),function(Y){(function(nt){const $=q.get(nt).programs;$!==void 0&&($.forEach(function(at){bt.releaseProgram(at)}),nt.isShaderMaterial&&bt.releaseShaderCache(nt))})(Y),q.remove(Y)}(I)}function Be(C,I,Y){C.transparent===!0&&C.side===2&&C.forceSinglePass===!1?(C.side=Ze,C.needsUpdate=!0,zt(C,I,Y),C.side=Kn,C.needsUpdate=!0,zt(C,I,Y),C.side=2):zt(C,I,Y)}this.xr=re,this.getContext=function(){return rt},this.getContextAttributes=function(){return rt.getContextAttributes()},this.forceContextLoss=function(){const C=ft.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ft.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(C){C!==void 0&&(H=C,this.setSize(Q,pt,!1))},this.getSize=function(C){return C.set(Q,pt)},this.setSize=function(C,I,Y=!0){re.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(Q=C,pt=I,e.width=Math.floor(C*H),e.height=Math.floor(I*H),Y===!0&&(e.style.width=C+"px",e.style.height=I+"px"),this.setViewport(0,0,C,I))},this.getDrawingBufferSize=function(C){return C.set(Q*H,pt*H).floor()},this.setDrawingBufferSize=function(C,I,Y){Q=C,pt=I,H=Y,e.width=Math.floor(C*Y),e.height=Math.floor(I*Y),this.setViewport(0,0,C,I)},this.getCurrentViewport=function(C){return C.copy(L)},this.getViewport=function(C){return C.copy(Z)},this.setViewport=function(C,I,Y,nt){C.isVector4?Z.set(C.x,C.y,C.z,C.w):Z.set(C,I,Y,nt),w.viewport(L.copy(Z).multiplyScalar(H).floor())},this.getScissor=function(C){return C.copy(R)},this.setScissor=function(C,I,Y,nt){C.isVector4?R.set(C.x,C.y,C.z,C.w):R.set(C,I,Y,nt),w.scissor(D.copy(R).multiplyScalar(H).floor())},this.getScissorTest=function(){return W},this.setScissorTest=function(C){w.setScissorTest(W=C)},this.setOpaqueSort=function(C){O=C},this.setTransparentSort=function(C){X=C},this.getClearColor=function(C){return C.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor.apply(Bt,arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha.apply(Bt,arguments)},this.clear=function(C=!0,I=!0,Y=!0){let nt=0;if(C){let $=!1;if(T!==null){const at=T.texture.format;$=at===Jl||at===Ql||at===Kl}if($){const at=T.texture.type,ct=at===pi||at===Yn||at===Fs||at===fi||at===Yl||at===Zl,mt=Bt.getClearColor(),Et=Bt.getClearAlpha(),Tt=mt.r,ht=mt.g,Pt=mt.b;ct?(p[0]=Tt,p[1]=ht,p[2]=Pt,p[3]=Et,rt.clearBufferuiv(rt.COLOR,0,p)):(f[0]=Tt,f[1]=ht,f[2]=Pt,f[3]=Et,rt.clearBufferiv(rt.COLOR,0,f))}else nt|=rt.COLOR_BUFFER_BIT}I&&(nt|=rt.DEPTH_BUFFER_BIT),Y&&(nt|=rt.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),rt.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ze,!1),e.removeEventListener("webglcontextrestored",Ce,!1),e.removeEventListener("webglcontextcreationerror",se,!1),Mt.dispose(),Ft.dispose(),q.dispose(),ot.dispose(),yt.dispose(),It.dispose(),Xt.dispose(),Kt.dispose(),bt.dispose(),re.dispose(),re.removeEventListener("sessionstart",Ve),re.removeEventListener("sessionend",Ge),N&&(N.dispose(),N=null),he.stop()},this.renderBufferDirect=function(C,I,Y,nt,$,at){I===null&&(I=G);const ct=$.isMesh&&$.matrixWorld.determinant()<0,mt=function(ie,fe,ae,Wt,Vt){fe.isScene!==!0&&(fe=G),it.resetTextureUnits();const ee=fe.fog,Ke=Wt.isMeshStandardMaterial?fe.environment:null,ue=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:zn,Xe=(Wt.isMeshStandardMaterial?yt:ot).get(Wt.envMap||Ke),Pe=Wt.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,be=!!ae.attributes.tangent&&(!!Wt.normalMap||Wt.anisotropy>0),ye=!!ae.morphAttributes.position,qe=!!ae.morphAttributes.normal,ln=!!ae.morphAttributes.color;let Ht=Zn;Wt.toneMapped&&(T!==null&&T.isXRRenderTarget!==!0||(Ht=_.toneMapping));const Le=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,_e=Le!==void 0?Le.length:0,Yt=q.get(Wt),wn=g.state.lights;if(y===!0&&(b===!0||ie!==k)){const rn=ie===k&&Wt.id===z;Ot.setState(Wt,ie,rn)}let Qe=!1;Wt.version===Yt.__version?Yt.needsLights&&Yt.lightsStateVersion!==wn.state.version||Yt.outputColorSpace!==ue||Vt.isBatchedMesh&&Yt.batching===!1?Qe=!0:Vt.isBatchedMesh||Yt.batching!==!0?Vt.isInstancedMesh&&Yt.instancing===!1?Qe=!0:Vt.isInstancedMesh||Yt.instancing!==!0?Vt.isSkinnedMesh&&Yt.skinning===!1?Qe=!0:Vt.isSkinnedMesh||Yt.skinning!==!0?Vt.isInstancedMesh&&Yt.instancingColor===!0&&Vt.instanceColor===null||Vt.isInstancedMesh&&Yt.instancingColor===!1&&Vt.instanceColor!==null||Yt.envMap!==Xe||Wt.fog===!0&&Yt.fog!==ee?Qe=!0:Yt.numClippingPlanes===void 0||Yt.numClippingPlanes===Ot.numPlanes&&Yt.numIntersection===Ot.numIntersection?(Yt.vertexAlphas!==Pe||Yt.vertexTangents!==be||Yt.morphTargets!==ye||Yt.morphNormals!==qe||Yt.morphColors!==ln||Yt.toneMapping!==Ht||dt.isWebGL2===!0&&Yt.morphTargetsCount!==_e)&&(Qe=!0):Qe=!0:Qe=!0:Qe=!0:Qe=!0:(Qe=!0,Yt.__version=Wt.version);let Tn=Yt.currentProgram;Qe===!0&&(Tn=zt(Wt,fe,Vt));let le=!1,lr=!1,Sa=!1;const Ne=Tn.getUniforms(),ai=Yt.uniforms;if(w.useProgram(Tn.program)&&(le=!0,lr=!0,Sa=!0),Wt.id!==z&&(z=Wt.id,lr=!0),le||k!==ie){Ne.setValue(rt,"projectionMatrix",ie.projectionMatrix),Ne.setValue(rt,"viewMatrix",ie.matrixWorldInverse);const rn=Ne.map.cameraPosition;rn!==void 0&&rn.setValue(rt,U.setFromMatrixPosition(ie.matrixWorld)),dt.logarithmicDepthBuffer&&Ne.setValue(rt,"logDepthBufFC",2/(Math.log(ie.far+1)/Math.LN2)),(Wt.isMeshPhongMaterial||Wt.isMeshToonMaterial||Wt.isMeshLambertMaterial||Wt.isMeshBasicMaterial||Wt.isMeshStandardMaterial||Wt.isShaderMaterial)&&Ne.setValue(rt,"isOrthographic",ie.isOrthographicCamera===!0),k!==ie&&(k=ie,lr=!0,Sa=!0)}if(Vt.isSkinnedMesh){Ne.setOptional(rt,Vt,"bindMatrix"),Ne.setOptional(rt,Vt,"bindMatrixInverse");const rn=Vt.skeleton;rn&&(dt.floatVertexTextures?(rn.boneTexture===null&&rn.computeBoneTexture(),Ne.setValue(rt,"boneTexture",rn.boneTexture,it)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Vt.isBatchedMesh&&(Ne.setOptional(rt,Vt,"batchingTexture"),Ne.setValue(rt,"batchingTexture",Vt._matricesTexture,it));const wa=ae.morphAttributes;(wa.position!==void 0||wa.normal!==void 0||wa.color!==void 0&&dt.isWebGL2===!0)&&jt.update(Vt,ae,Tn),(lr||Yt.receiveShadow!==Vt.receiveShadow)&&(Yt.receiveShadow=Vt.receiveShadow,Ne.setValue(rt,"receiveShadow",Vt.receiveShadow)),Wt.isMeshGouraudMaterial&&Wt.envMap!==null&&(ai.envMap.value=Xe,ai.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),lr&&(Ne.setValue(rt,"toneMappingExposure",_.toneMappingExposure),Yt.needsLights&&(cn=Sa,(_n=ai).ambientLightColor.needsUpdate=cn,_n.lightProbe.needsUpdate=cn,_n.directionalLights.needsUpdate=cn,_n.directionalLightShadows.needsUpdate=cn,_n.pointLights.needsUpdate=cn,_n.pointLightShadows.needsUpdate=cn,_n.spotLights.needsUpdate=cn,_n.spotLightShadows.needsUpdate=cn,_n.rectAreaLights.needsUpdate=cn,_n.hemisphereLights.needsUpdate=cn),ee&&Wt.fog===!0&&Ut.refreshFogUniforms(ai,ee),Ut.refreshMaterialUniforms(ai,Wt,H,pt,N),oa.upload(rt,Rt(Yt),ai,it));var _n,cn;if(Wt.isShaderMaterial&&Wt.uniformsNeedUpdate===!0&&(oa.upload(rt,Rt(Yt),ai,it),Wt.uniformsNeedUpdate=!1),Wt.isSpriteMaterial&&Ne.setValue(rt,"center",Vt.center),Ne.setValue(rt,"modelViewMatrix",Vt.modelViewMatrix),Ne.setValue(rt,"normalMatrix",Vt.normalMatrix),Ne.setValue(rt,"modelMatrix",Vt.matrixWorld),Wt.isShaderMaterial||Wt.isRawShaderMaterial){const rn=Wt.uniformsGroups;for(let Ta=0,Bc=rn.length;Ta<Bc;Ta++)if(dt.isWebGL2){const Zs=rn[Ta];Kt.update(Zs,Tn),Kt.bind(Zs,Tn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Tn}(C,I,Y,nt,$);w.setMaterial(nt,ct);let Et=Y.index,Tt=1;if(nt.wireframe===!0){if(Et=St.getWireframeAttribute(Y),Et===void 0)return;Tt=2}const ht=Y.drawRange,Pt=Y.attributes.position;let Dt=ht.start*Tt,te=(ht.start+ht.count)*Tt;at!==null&&(Dt=Math.max(Dt,at.start*Tt),te=Math.min(te,(at.start+at.count)*Tt)),Et!==null?(Dt=Math.max(Dt,0),te=Math.min(te,Et.count)):Pt!=null&&(Dt=Math.max(Dt,0),te=Math.min(te,Pt.count));const kt=te-Dt;if(kt<0||kt===1/0)return;let qt;Xt.setup($,nt,mt,Y,Et);let Nt=Ae;if(Et!==null&&(qt=lt.get(Et),Nt=tt,Nt.setIndex(qt)),$.isMesh)nt.wireframe===!0?(w.setLineWidth(nt.wireframeLinewidth*J()),Nt.setMode(rt.LINES)):Nt.setMode(rt.TRIANGLES);else if($.isLine){let ie=nt.linewidth;ie===void 0&&(ie=1),w.setLineWidth(ie*J()),$.isLineSegments?Nt.setMode(rt.LINES):$.isLineLoop?Nt.setMode(rt.LINE_LOOP):Nt.setMode(rt.LINE_STRIP)}else $.isPoints?Nt.setMode(rt.POINTS):$.isSprite&&Nt.setMode(rt.TRIANGLES);if($.isBatchedMesh)Nt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else if($.isInstancedMesh)Nt.renderInstances(Dt,kt,$.count);else if(Y.isInstancedBufferGeometry){const ie=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,fe=Math.min(Y.instanceCount,ie);Nt.renderInstances(Dt,kt,fe)}else Nt.render(Dt,kt)},this.compile=function(C,I,Y=null){Y===null&&(Y=C),g=Ft.get(Y),g.init(),x.push(g),Y.traverseVisible(function($){$.isLight&&$.layers.test(I.layers)&&(g.pushLight($),$.castShadow&&g.pushShadow($))}),C!==Y&&C.traverseVisible(function($){$.isLight&&$.layers.test(I.layers)&&(g.pushLight($),$.castShadow&&g.pushShadow($))}),g.setupLights(_._useLegacyLights);const nt=new Set;return C.traverse(function($){const at=$.material;if(at)if(Array.isArray(at))for(let ct=0;ct<at.length;ct++){const mt=at[ct];Be(mt,Y,$),nt.add(mt)}else Be(at,Y,$),nt.add(at)}),x.pop(),g=null,nt},this.compileAsync=function(C,I,Y=null){const nt=this.compile(C,I,Y);return new Promise($=>{function at(){nt.forEach(function(ct){q.get(ct).currentProgram.isReady()&&nt.delete(ct)}),nt.size!==0?setTimeout(at,10):$(C)}ft.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let Re=null;function Ve(){he.stop()}function Ge(){he.start()}const he=new hc;function ut(C,I,Y,nt){if(C.visible===!1)return;if(C.layers.test(I.layers)){if(C.isGroup)Y=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(I);else if(C.isLight)g.pushLight(C),C.castShadow&&g.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||E.intersectsSprite(C)){nt&&U.setFromMatrixPosition(C.matrixWorld).applyMatrix4(F);const at=It.update(C),ct=C.material;ct.visible&&m.push(C,at,ct,Y,U.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||E.intersectsObject(C))){const at=It.update(C),ct=C.material;if(nt&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),U.copy(C.boundingSphere.center)):(at.boundingSphere===null&&at.computeBoundingSphere(),U.copy(at.boundingSphere.center)),U.applyMatrix4(C.matrixWorld).applyMatrix4(F)),Array.isArray(ct)){const mt=at.groups;for(let Et=0,Tt=mt.length;Et<Tt;Et++){const ht=mt[Et],Pt=ct[ht.materialIndex];Pt&&Pt.visible&&m.push(C,at,Pt,Y,U.z,ht)}}else ct.visible&&m.push(C,at,ct,Y,U.z,null)}}const $=C.children;for(let at=0,ct=$.length;at<ct;at++)ut($[at],I,Y,nt)}function vt(C,I,Y,nt){const $=C.opaque,at=C.transmissive,ct=C.transparent;g.setupLightsView(Y),y===!0&&Ot.setGlobalState(_.clippingPlanes,Y),at.length>0&&function(mt,Et,Tt,ht){if((Tt.isScene===!0?Tt.overrideMaterial:null)!==null)return;const Dt=dt.isWebGL2;N===null&&(N=new yi(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")?br:pi,minFilter:ji,samples:Dt?4:0})),_.getDrawingBufferSize(B),Dt?N.setSize(B.x,B.y):N.setSize(Rs(B.x),Rs(B.y));const te=_.getRenderTarget();_.setRenderTarget(N),_.getClearColor(V),j=_.getClearAlpha(),j<1&&_.setClearColor(16777215,.5),_.clear();const kt=_.toneMapping;_.toneMapping=Zn,_t(mt,Tt,ht),it.updateMultisampleRenderTarget(N),it.updateRenderTargetMipmap(N);let qt=!1;for(let Nt=0,ie=Et.length;Nt<ie;Nt++){const fe=Et[Nt],ae=fe.object,Wt=fe.geometry,Vt=fe.material,ee=fe.group;if(Vt.side===2&&ae.layers.test(ht.layers)){const Ke=Vt.side;Vt.side=Ze,Vt.needsUpdate=!0,xt(ae,Tt,ht,Wt,Vt,ee),Vt.side=Ke,Vt.needsUpdate=!0,qt=!0}}qt===!0&&(it.updateMultisampleRenderTarget(N),it.updateRenderTargetMipmap(N)),_.setRenderTarget(te),_.setClearColor(V,j),_.toneMapping=kt}($,at,I,Y),nt&&w.viewport(L.copy(nt)),$.length>0&&_t($,I,Y),at.length>0&&_t(at,I,Y),ct.length>0&&_t(ct,I,Y),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function _t(C,I,Y){const nt=I.isScene===!0?I.overrideMaterial:null;for(let $=0,at=C.length;$<at;$++){const ct=C[$],mt=ct.object,Et=ct.geometry,Tt=nt===null?ct.material:nt,ht=ct.group;mt.layers.test(Y.layers)&&xt(mt,I,Y,Et,Tt,ht)}}function xt(C,I,Y,nt,$,at){C.onBeforeRender(_,I,Y,nt,$,at),C.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(_,I,Y,nt,C,at),$.transparent===!0&&$.side===2&&$.forceSinglePass===!1?($.side=Ze,$.needsUpdate=!0,_.renderBufferDirect(Y,I,nt,$,C,at),$.side=Kn,$.needsUpdate=!0,_.renderBufferDirect(Y,I,nt,$,C,at),$.side=2):_.renderBufferDirect(Y,I,nt,$,C,at),C.onAfterRender(_,I,Y,nt,$,at)}function zt(C,I,Y){I.isScene!==!0&&(I=G);const nt=q.get(C),$=g.state.lights,at=g.state.shadowsArray,ct=$.state.version,mt=bt.getParameters(C,$.state,at,I,Y),Et=bt.getProgramCacheKey(mt);let Tt=nt.programs;nt.environment=C.isMeshStandardMaterial?I.environment:null,nt.fog=I.fog,nt.envMap=(C.isMeshStandardMaterial?yt:ot).get(C.envMap||nt.environment),Tt===void 0&&(C.addEventListener("dispose",ge),Tt=new Map,nt.programs=Tt);let ht=Tt.get(Et);if(ht!==void 0){if(nt.currentProgram===ht&&nt.lightsStateVersion===ct)return wt(C,mt),ht}else mt.uniforms=bt.getUniforms(C),C.onBuild(Y,mt,_),C.onBeforeCompile(mt,_),ht=bt.acquireProgram(mt,Et),Tt.set(Et,ht),nt.uniforms=mt.uniforms;const Pt=nt.uniforms;return(C.isShaderMaterial||C.isRawShaderMaterial)&&C.clipping!==!0||(Pt.clippingPlanes=Ot.uniform),wt(C,mt),nt.needsLights=function(Dt){return Dt.isMeshLambertMaterial||Dt.isMeshToonMaterial||Dt.isMeshPhongMaterial||Dt.isMeshStandardMaterial||Dt.isShadowMaterial||Dt.isShaderMaterial&&Dt.lights===!0}(C),nt.lightsStateVersion=ct,nt.needsLights&&(Pt.ambientLightColor.value=$.state.ambient,Pt.lightProbe.value=$.state.probe,Pt.directionalLights.value=$.state.directional,Pt.directionalLightShadows.value=$.state.directionalShadow,Pt.spotLights.value=$.state.spot,Pt.spotLightShadows.value=$.state.spotShadow,Pt.rectAreaLights.value=$.state.rectArea,Pt.ltc_1.value=$.state.rectAreaLTC1,Pt.ltc_2.value=$.state.rectAreaLTC2,Pt.pointLights.value=$.state.point,Pt.pointLightShadows.value=$.state.pointShadow,Pt.hemisphereLights.value=$.state.hemi,Pt.directionalShadowMap.value=$.state.directionalShadowMap,Pt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Pt.spotShadowMap.value=$.state.spotShadowMap,Pt.spotLightMatrix.value=$.state.spotLightMatrix,Pt.spotLightMap.value=$.state.spotLightMap,Pt.pointShadowMap.value=$.state.pointShadowMap,Pt.pointShadowMatrix.value=$.state.pointShadowMatrix),nt.currentProgram=ht,nt.uniformsList=null,ht}function Rt(C){if(C.uniformsList===null){const I=C.currentProgram.getUniforms();C.uniformsList=oa.seqWithValue(I.seq,C.uniforms)}return C.uniformsList}function wt(C,I){const Y=q.get(C);Y.outputColorSpace=I.outputColorSpace,Y.batching=I.batching,Y.instancing=I.instancing,Y.instancingColor=I.instancingColor,Y.skinning=I.skinning,Y.morphTargets=I.morphTargets,Y.morphNormals=I.morphNormals,Y.morphColors=I.morphColors,Y.morphTargetsCount=I.morphTargetsCount,Y.numClippingPlanes=I.numClippingPlanes,Y.numIntersection=I.numClipIntersection,Y.vertexAlphas=I.vertexAlphas,Y.vertexTangents=I.vertexTangents,Y.toneMapping=I.toneMapping}he.setAnimationLoop(function(C){Re&&Re(C)}),typeof self<"u"&&he.setContext(self),this.setAnimationLoop=function(C){Re=C,re.setAnimationLoop(C),C===null?he.stop():he.start()},re.addEventListener("sessionstart",Ve),re.addEventListener("sessionend",Ge),this.render=function(C,I){if(I!==void 0&&I.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(M===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(I),I=re.getCamera()),C.isScene===!0&&C.onBeforeRender(_,C,I,T),g=Ft.get(C,x.length),g.init(),x.push(g),F.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),E.setFromProjectionMatrix(F),b=this.localClippingEnabled,y=Ot.init(this.clippingPlanes,b),m=Mt.get(C,v.length),m.init(),v.push(m),ut(C,I,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(O,X),this.info.render.frame++,y===!0&&Ot.beginShadows();const Y=g.state.shadowsArray;if(Lt.render(Y,C,I),y===!0&&Ot.endShadows(),this.info.autoReset===!0&&this.info.reset(),re.enabled!==!1&&re.isPresenting!==!1&&re.hasDepthSensing()!==!1||Bt.render(m,C),g.setupLights(_._useLegacyLights),I.isArrayCamera){const nt=I.cameras;for(let $=0,at=nt.length;$<at;$++){const ct=nt[$];vt(m,C,ct,ct.viewport)}}else vt(m,C,I);T!==null&&(it.updateMultisampleRenderTarget(T),it.updateRenderTargetMipmap(T)),C.isScene===!0&&C.onAfterRender(_,C,I),Xt.resetDefaultState(),z=-1,k=null,x.pop(),g=x.length>0?x[x.length-1]:null,v.pop(),m=v.length>0?v[v.length-1]:null},this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(C,I,Y){q.get(C.texture).__webglTexture=I,q.get(C.depthTexture).__webglTexture=Y;const nt=q.get(C);nt.__hasExternalTextures=!0,nt.__hasExternalTextures&&(nt.__autoAllocateDepthBuffer=Y===void 0,nt.__autoAllocateDepthBuffer||ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),nt.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,I){const Y=q.get(C);Y.__webglFramebuffer=I,Y.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(C,I=0,Y=0){T=C,S=I,P=Y;let nt=!0,$=null,at=!1,ct=!1;if(C){const mt=q.get(C);mt.__useDefaultFramebuffer!==void 0?(w.bindFramebuffer(rt.FRAMEBUFFER,null),nt=!1):mt.__webglFramebuffer===void 0?it.setupRenderTarget(C):mt.__hasExternalTextures&&it.rebindTextures(C,q.get(C.texture).__webglTexture,q.get(C.depthTexture).__webglTexture);const Et=C.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(ct=!0);const Tt=q.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?($=Array.isArray(Tt[I])?Tt[I][Y]:Tt[I],at=!0):$=dt.isWebGL2&&C.samples>0&&it.useMultisampledRTT(C)===!1?q.get(C).__webglMultisampledFramebuffer:Array.isArray(Tt)?Tt[Y]:Tt,L.copy(C.viewport),D.copy(C.scissor),A=C.scissorTest}else L.copy(Z).multiplyScalar(H).floor(),D.copy(R).multiplyScalar(H).floor(),A=W;if(w.bindFramebuffer(rt.FRAMEBUFFER,$)&&dt.drawBuffers&&nt&&w.drawBuffers(C,$),w.viewport(L),w.scissor(D),w.setScissorTest(A),at){const mt=q.get(C.texture);rt.framebufferTexture2D(rt.FRAMEBUFFER,rt.COLOR_ATTACHMENT0,rt.TEXTURE_CUBE_MAP_POSITIVE_X+I,mt.__webglTexture,Y)}else if(ct){const mt=q.get(C.texture),Et=I||0;rt.framebufferTextureLayer(rt.FRAMEBUFFER,rt.COLOR_ATTACHMENT0,mt.__webglTexture,Y||0,Et)}z=-1},this.readRenderTargetPixels=function(C,I,Y,nt,$,at,ct){if(!C||!C.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=q.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ct!==void 0&&(mt=mt[ct]),mt){w.bindFramebuffer(rt.FRAMEBUFFER,mt);try{const Et=C.texture,Tt=Et.format,ht=Et.type;if(Tt!==Mn&&At.convert(Tt)!==rt.getParameter(rt.IMPLEMENTATION_COLOR_READ_FORMAT))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");const Pt=ht===br&&(ft.has("EXT_color_buffer_half_float")||dt.isWebGL2&&ft.has("EXT_color_buffer_float"));if(!(ht===pi||At.convert(ht)===rt.getParameter(rt.IMPLEMENTATION_COLOR_READ_TYPE)||ht===On&&(dt.isWebGL2||ft.has("OES_texture_float")||ft.has("WEBGL_color_buffer_float"))||Pt))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");I>=0&&I<=C.width-nt&&Y>=0&&Y<=C.height-$&&rt.readPixels(I,Y,nt,$,At.convert(Tt),At.convert(ht),at)}finally{const Et=T!==null?q.get(T).__webglFramebuffer:null;w.bindFramebuffer(rt.FRAMEBUFFER,Et)}}},this.copyFramebufferToTexture=function(C,I,Y=0){const nt=Math.pow(2,-Y),$=Math.floor(I.image.width*nt),at=Math.floor(I.image.height*nt);it.setTexture2D(I,0),rt.copyTexSubImage2D(rt.TEXTURE_2D,Y,0,0,C.x,C.y,$,at),w.unbindTexture()},this.copyTextureToTexture=function(C,I,Y,nt=0){const $=I.image.width,at=I.image.height,ct=At.convert(Y.format),mt=At.convert(Y.type);it.setTexture2D(Y,0),rt.pixelStorei(rt.UNPACK_FLIP_Y_WEBGL,Y.flipY),rt.pixelStorei(rt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),rt.pixelStorei(rt.UNPACK_ALIGNMENT,Y.unpackAlignment),I.isDataTexture?rt.texSubImage2D(rt.TEXTURE_2D,nt,C.x,C.y,$,at,ct,mt,I.image.data):I.isCompressedTexture?rt.compressedTexSubImage2D(rt.TEXTURE_2D,nt,C.x,C.y,I.mipmaps[0].width,I.mipmaps[0].height,ct,I.mipmaps[0].data):rt.texSubImage2D(rt.TEXTURE_2D,nt,C.x,C.y,ct,mt,I.image),nt===0&&Y.generateMipmaps&&rt.generateMipmap(rt.TEXTURE_2D),w.unbindTexture()},this.copyTextureToTexture3D=function(C,I,Y,nt,$=0){if(_.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");const at=C.max.x-C.min.x+1,ct=C.max.y-C.min.y+1,mt=C.max.z-C.min.z+1,Et=At.convert(nt.format),Tt=At.convert(nt.type);let ht;if(nt.isData3DTexture)it.setTexture3D(nt,0),ht=rt.TEXTURE_3D;else{if(!nt.isDataArrayTexture&&!nt.isCompressedArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");it.setTexture2DArray(nt,0),ht=rt.TEXTURE_2D_ARRAY}rt.pixelStorei(rt.UNPACK_FLIP_Y_WEBGL,nt.flipY),rt.pixelStorei(rt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,nt.premultiplyAlpha),rt.pixelStorei(rt.UNPACK_ALIGNMENT,nt.unpackAlignment);const Pt=rt.getParameter(rt.UNPACK_ROW_LENGTH),Dt=rt.getParameter(rt.UNPACK_IMAGE_HEIGHT),te=rt.getParameter(rt.UNPACK_SKIP_PIXELS),kt=rt.getParameter(rt.UNPACK_SKIP_ROWS),qt=rt.getParameter(rt.UNPACK_SKIP_IMAGES),Nt=Y.isCompressedTexture?Y.mipmaps[$]:Y.image;rt.pixelStorei(rt.UNPACK_ROW_LENGTH,Nt.width),rt.pixelStorei(rt.UNPACK_IMAGE_HEIGHT,Nt.height),rt.pixelStorei(rt.UNPACK_SKIP_PIXELS,C.min.x),rt.pixelStorei(rt.UNPACK_SKIP_ROWS,C.min.y),rt.pixelStorei(rt.UNPACK_SKIP_IMAGES,C.min.z),Y.isDataTexture||Y.isData3DTexture?rt.texSubImage3D(ht,$,I.x,I.y,I.z,at,ct,mt,Et,Tt,Nt.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),rt.compressedTexSubImage3D(ht,$,I.x,I.y,I.z,at,ct,mt,Et,Nt.data)):rt.texSubImage3D(ht,$,I.x,I.y,I.z,at,ct,mt,Et,Tt,Nt),rt.pixelStorei(rt.UNPACK_ROW_LENGTH,Pt),rt.pixelStorei(rt.UNPACK_IMAGE_HEIGHT,Dt),rt.pixelStorei(rt.UNPACK_SKIP_PIXELS,te),rt.pixelStorei(rt.UNPACK_SKIP_ROWS,kt),rt.pixelStorei(rt.UNPACK_SKIP_IMAGES,qt),$===0&&nt.generateMipmaps&&rt.generateMipmap(ht),w.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?it.setTextureCube(C,0):C.isData3DTexture?it.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?it.setTexture2DArray(C,0):it.setTexture2D(C,0),w.unbindTexture()},this.resetState=function(){S=0,P=0,T=null,w.reset(),Xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return er}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===zs?"display-p3":"srgb",e.unpackColorSpace=oe.workingColorSpace===ma?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===we?vi:tc}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===vi?we:zn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class nd extends _c{}nd.prototype.isWebGL1Renderer=!0;class id extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}new et;new et;new et;new et;new $t;new $t;new Qt;new et;new et;new et;new $t;new $t;new $t;new et;new et;new et;new ve;new ve;new et;new Qt;new et;new ti;new Qt;new va;new Qt;new Qt;new Qt;new Qt;new $n;new Qt;new nn;new ti;new Qt;new Qt;new Qt;new Qt;new xa;new $n;new ti;new et;new nn;new et;new et;new Qt;new va;new ti;new et;new et;new Qt;new va;new ti;new et;new et;new et;new et;new et;new mn;const dl={enabled:!1,files:{},add:function(a,t){this.enabled!==!1&&(this.files[a]=t)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class rd{constructor(t,e,n){const i=this;let r,s=!1,l=0,o=0;const h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(c){o++,s===!1&&i.onStart!==void 0&&i.onStart(c,l,o),s=!0},this.itemEnd=function(c){l++,i.onProgress!==void 0&&i.onProgress(c,l,o),l===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(c){i.onError!==void 0&&i.onError(c)},this.resolveURL=function(c){return r?r(c):c},this.setURLModifier=function(c){return r=c,this},this.addHandler=function(c,u){return h.push(c,u),this},this.removeHandler=function(c){const u=h.indexOf(c);return u!==-1&&h.splice(u,2),this},this.getHandler=function(c){for(let u=0,d=h.length;u<d;u+=2){const p=h[u],f=h[u+1];if(p.global&&(p.lastIndex=0),p.test(c))return f}return null}}}const ad=new rd;class Ma{constructor(t){this.manager=t!==void 0?t:ad,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ma.DEFAULT_MATERIAL_NAME="__DEFAULT";class xc extends Ma{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=dl.get(t);if(s!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0),s;const l=Sr("img");function o(){c(),dl.add(t,this),e&&e(this),r.manager.itemEnd(t)}function h(u){c(),i&&i(u),r.manager.itemError(t),r.manager.itemEnd(t)}function c(){l.removeEventListener("load",o,!1),l.removeEventListener("error",h,!1)}return l.addEventListener("load",o,!1),l.addEventListener("error",h,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),r.manager.itemStart(t),l.src=t,l}}class sd extends Ma{constructor(t){super(t)}load(t,e,n,i){const r=new ks;r.colorSpace=we;const s=new xc(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let l=0;function o(h){s.load(t[h],function(c){r.images[h]=c,l++,l===6&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}for(let h=0;h<t.length;++h)o(h);return r}}class od extends Ma{constructor(t){super(t)}load(t,e,n,i){const r=new We,s=new xc(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,function(l){r.image=l,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class yc extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ne(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const rs=new Qt,pl=new et,fl=new et;class ld{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $t(512,512),this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xa,this._frameExtents=new $t(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;pl.setFromMatrixPosition(t.matrixWorld),e.position.copy(pl),fl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(fl),e.updateMatrixWorld(),rs.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rs),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(rs)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}new Qt;new et;new et;class cd extends ld{constructor(){super(new uc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hd extends yc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new cd}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ud extends yc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}new Qt;new Qt;new Qt;class dd{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ml(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=ml();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ml(){return(typeof performance>"u"?Date:performance).now()}new et;new et;new et;new et;new et;new et;const Mc="\\[\\]\\.:\\/",as="[^"+Mc+"]",pd="[^"+Mc.replace("\\.","")+"]";new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",as)+/(WCOD+)?/.source.replace("WCOD",pd)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",as)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",as)+"$");new $t;new et;new et;new et;new et;new Qt;new Qt;new et;new ne;new ne;new et;new et;new et;new et;new Vs;new $n;new et;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ys}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ys);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ec="158",Vi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ki={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bc=300,vl=1e3,Qr=1001,gl=1002,fd=1006,md=1008,vd=1009,gd=1023,_d=3e3,ss=3001,os="",ls="srgb",Jr=2e3,_l=2001;class Ws{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,t);t.target=null}}}const Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xl=1234567;const Sc=Math.PI/180,wc=180/Math.PI;function Ea(){const a=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ue[a&255]+Ue[a>>8&255]+Ue[a>>16&255]+Ue[a>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]).toLowerCase()}function fn(a,t,e){return Math.max(t,Math.min(e,a))}function Tc(a,t){return(a%t+t)%t}function xd(a,t,e,n,i){return n+(a-t)*(i-n)/(e-t)}function yd(a,t,e){return a!==t?(e-a)/(t-a):0}function Ac(a,t,e){return(1-e)*a+e*t}function Md(a,t,e,n){return Ac(a,t,1-Math.exp(-e*n))}function Ed(a,t=1){return t-Math.abs(Tc(a,t*2)-t)}function bd(a,t,e){return a<=t?0:a>=e?1:(a=(a-t)/(e-t),a*a*(3-2*a))}function Sd(a,t,e){return a<=t?0:a>=e?1:(a=(a-t)/(e-t),a*a*a*(a*(a*6-15)+10))}function wd(a,t){return a+Math.floor(Math.random()*(t-a+1))}function Td(a,t){return a+Math.random()*(t-a)}function Ad(a){return a*(.5-Math.random())}function Cd(a){a!==void 0&&(xl=a);let t=xl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Rd(a){return a*Sc}function Pd(a){return a*wc}function Ld(a){return(a&a-1)===0&&a!==0}function Nd(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function Id(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Dd(a,t,e,n,i){const r=Math.cos,s=Math.sin,l=r(e/2),o=s(e/2),h=r((t+n)/2),c=s((t+n)/2),u=r((t-n)/2),d=s((t-n)/2),p=r((n-t)/2),f=s((n-t)/2);switch(i){case"XYX":a.set(l*c,o*u,o*d,l*h);break;case"YZY":a.set(o*d,l*c,o*u,l*h);break;case"ZXZ":a.set(o*u,o*d,l*c,l*h);break;case"XZX":a.set(l*c,o*f,o*p,l*h);break;case"YXY":a.set(o*p,l*c,o*f,l*h);break;case"ZYZ":a.set(o*f,o*p,l*c,l*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ud(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Od(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const Fd={DEG2RAD:Sc,RAD2DEG:wc,generateUUID:Ea,clamp:fn,euclideanModulo:Tc,mapLinear:xd,inverseLerp:yd,lerp:Ac,damp:Md,pingpong:Ed,smoothstep:bd,smootherstep:Sd,randInt:wd,randFloat:Td,randFloatSpread:Ad,seededRandom:Cd,degToRad:Rd,radToDeg:Pd,isPowerOfTwo:Ld,ceilPowerOfTwo:Nd,floorPowerOfTwo:Id,setQuaternionFromProperEuler:Dd,normalize:Od,denormalize:Ud};class Oe{constructor(t=0,e=0){Oe.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(fn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,s=this.y-t.y;return this.x=r*n-s*i+t.x,this.y=r*i+s*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class or{constructor(t,e,n,i,r,s,l,o,h){or.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,s,l,o,h)}set(t,e,n,i,r,s,l,o,h){const c=this.elements;return c[0]=t,c[1]=i,c[2]=l,c[3]=e,c[4]=r,c[5]=o,c[6]=n,c[7]=s,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,s=n[0],l=n[3],o=n[6],h=n[1],c=n[4],u=n[7],d=n[2],p=n[5],f=n[8],m=i[0],g=i[3],v=i[6],x=i[1],_=i[4],M=i[7],S=i[2],P=i[5],T=i[8];return r[0]=s*m+l*x+o*S,r[3]=s*g+l*_+o*P,r[6]=s*v+l*M+o*T,r[1]=h*m+c*x+u*S,r[4]=h*g+c*_+u*P,r[7]=h*v+c*M+u*T,r[2]=d*m+p*x+f*S,r[5]=d*g+p*_+f*P,r[8]=d*v+p*M+f*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],l=t[5],o=t[6],h=t[7],c=t[8];return e*s*c-e*l*h-n*r*c+n*l*o+i*r*h-i*s*o}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],l=t[5],o=t[6],h=t[7],c=t[8],u=c*s-l*h,d=l*o-c*r,p=h*r-s*o,f=e*u+n*d+i*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/f;return t[0]=u*m,t[1]=(i*h-c*n)*m,t[2]=(l*n-i*s)*m,t[3]=d*m,t[4]=(c*e-i*o)*m,t[5]=(i*r-l*e)*m,t[6]=p*m,t[7]=(n*o-h*e)*m,t[8]=(s*e-n*r)*m,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,s,l){const o=Math.cos(r),h=Math.sin(r);return this.set(n*o,n*h,-n*(o*s+h*l)+s+t,-i*h,i*o,-i*(-h*s+o*l)+l+e,0,0,1),this}scale(t,e){return this.premultiply(cs.makeScale(t,e)),this}rotate(t){return this.premultiply(cs.makeRotation(-t)),this}translate(t,e){return this.premultiply(cs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const cs=new or;function yl(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}const Ml={};function hs(a){a in Ml||(Ml[a]=!0,console.warn(a))}function us(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}let Hi;class zd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Hi===void 0&&(Hi=yl("canvas")),Hi.width=t.width,Hi.height=t.height;const n=Hi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Hi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=yl("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=us(r[s]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(us(e[n]/255)*255):e[n]=us(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Bd=0;class Vd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=Ea(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,l=i.length;s<l;s++)i[s].isDataTexture?r.push(ds(i[s].image)):r.push(ds(i[s]))}else r=ds(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function ds(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?zd.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kd=0;class _i extends Ws{constructor(t=_i.DEFAULT_IMAGE,e=_i.DEFAULT_MAPPING,n=Qr,i=Qr,r=fd,s=md,l=gd,o=vd,h=_i.DEFAULT_ANISOTROPY,c=os){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=Ea(),this.name="",this.source=new Vd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=o,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new or,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(hs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===ss?ls:os),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==bc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vl:t.x=t.x-Math.floor(t.x);break;case Qr:t.x=t.x<0?0:1;break;case gl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vl:t.y=t.y-Math.floor(t.y);break;case Qr:t.y=t.y<0?0:1;break;case gl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return hs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ls?ss:_d}set encoding(t){hs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===ss?ls:os}}_i.DEFAULT_IMAGE=null;_i.DEFAULT_MAPPING=bc;_i.DEFAULT_ANISOTROPY=1;class Mi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,s,l){let o=n[i+0],h=n[i+1],c=n[i+2],u=n[i+3];const d=r[s+0],p=r[s+1],f=r[s+2],m=r[s+3];if(l===0){t[e+0]=o,t[e+1]=h,t[e+2]=c,t[e+3]=u;return}if(l===1){t[e+0]=d,t[e+1]=p,t[e+2]=f,t[e+3]=m;return}if(u!==m||o!==d||h!==p||c!==f){let g=1-l;const v=o*d+h*p+c*f+u*m,x=v>=0?1:-1,_=1-v*v;if(_>Number.EPSILON){const S=Math.sqrt(_),P=Math.atan2(S,v*x);g=Math.sin(g*P)/S,l=Math.sin(l*P)/S}const M=l*x;if(o=o*g+d*M,h=h*g+p*M,c=c*g+f*M,u=u*g+m*M,g===1-l){const S=1/Math.sqrt(o*o+h*h+c*c+u*u);o*=S,h*=S,c*=S,u*=S}}t[e]=o,t[e+1]=h,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,s){const l=n[i],o=n[i+1],h=n[i+2],c=n[i+3],u=r[s],d=r[s+1],p=r[s+2],f=r[s+3];return t[e]=l*f+c*u+o*p-h*d,t[e+1]=o*f+c*d+h*u-l*p,t[e+2]=h*f+c*p+l*d-o*u,t[e+3]=c*f-l*u-o*d-h*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,r=t._z,s=t._order,l=Math.cos,o=Math.sin,h=l(n/2),c=l(i/2),u=l(r/2),d=o(n/2),p=o(i/2),f=o(r/2);switch(s){case"XYZ":this._x=d*c*u+h*p*f,this._y=h*p*u-d*c*f,this._z=h*c*f+d*p*u,this._w=h*c*u-d*p*f;break;case"YXZ":this._x=d*c*u+h*p*f,this._y=h*p*u-d*c*f,this._z=h*c*f-d*p*u,this._w=h*c*u+d*p*f;break;case"ZXY":this._x=d*c*u-h*p*f,this._y=h*p*u+d*c*f,this._z=h*c*f+d*p*u,this._w=h*c*u-d*p*f;break;case"ZYX":this._x=d*c*u-h*p*f,this._y=h*p*u+d*c*f,this._z=h*c*f-d*p*u,this._w=h*c*u+d*p*f;break;case"YZX":this._x=d*c*u+h*p*f,this._y=h*p*u+d*c*f,this._z=h*c*f-d*p*u,this._w=h*c*u-d*p*f;break;case"XZY":this._x=d*c*u-h*p*f,this._y=h*p*u-d*c*f,this._z=h*c*f+d*p*u,this._w=h*c*u+d*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],s=e[1],l=e[5],o=e[9],h=e[2],c=e[6],u=e[10],d=n+l+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-o)*p,this._y=(r-h)*p,this._z=(s-i)*p}else if(n>l&&n>u){const p=2*Math.sqrt(1+n-l-u);this._w=(c-o)/p,this._x=.25*p,this._y=(i+s)/p,this._z=(r+h)/p}else if(l>u){const p=2*Math.sqrt(1+l-n-u);this._w=(r-h)/p,this._x=(i+s)/p,this._y=.25*p,this._z=(o+c)/p}else{const p=2*Math.sqrt(1+u-n-l);this._w=(s-i)/p,this._x=(r+h)/p,this._y=(o+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,s=t._w,l=e._x,o=e._y,h=e._z,c=e._w;return this._x=n*c+s*l+i*h-r*o,this._y=i*c+s*o+r*l-n*h,this._z=r*c+s*h+n*o-i*l,this._w=s*c-n*l-i*o-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,s=this._w;let l=s*t._w+n*t._x+i*t._y+r*t._z;if(l<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,l=-l):this.copy(t),l>=1)return this._w=s,this._x=n,this._y=i,this._z=r,this;const o=1-l*l;if(o<=Number.EPSILON){const p=1-e;return this._w=p*s+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(o),c=Math.atan2(h,l),u=Math.sin((1-e)*c)/h,d=Math.sin(e*c)/h;return this._w=s*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Gt{constructor(t=0,e=0,n=0){Gt.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(El.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(El.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,s=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,s=t.y,l=t.z,o=t.w,h=2*(s*i-l*n),c=2*(l*e-r*i),u=2*(r*n-s*e);return this.x=e+o*h+s*u-l*c,this.y=n+o*c+l*h-r*u,this.z=i+o*u+r*c-s*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,s=e.x,l=e.y,o=e.z;return this.x=i*o-r*l,this.y=r*s-n*o,this.z=n*l-i*s,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ps.copy(this).projectOnVector(t),this.sub(ps)}reflect(t){return this.sub(ps.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(fn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ps=new Gt,El=new Mi,Nn=new Gt,fs=new Gt,$r=new Gt,qn=new Gt,ms=new Gt,ta=new Gt,vs=new Gt;class Hd{constructor(t=new Gt,e=new Gt(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Nn.copy(this.origin).addScaledVector(this.direction,e),Nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){fs.copy(t).add(e).multiplyScalar(.5),$r.copy(e).sub(t).normalize(),qn.copy(this.origin).sub(fs);const r=t.distanceTo(e)*.5,s=-this.direction.dot($r),l=qn.dot(this.direction),o=-qn.dot($r),h=qn.lengthSq(),c=Math.abs(1-s*s);let u,d,p,f;if(c>0)if(u=s*o-l,d=s*l-o,f=r*c,u>=0)if(d>=-f)if(d<=f){const m=1/c;u*=m,d*=m,p=u*(u+s*d+2*l)+d*(s*u+d+2*o)+h}else d=r,u=Math.max(0,-(s*d+l)),p=-u*u+d*(d+2*o)+h;else d=-r,u=Math.max(0,-(s*d+l)),p=-u*u+d*(d+2*o)+h;else d<=-f?(u=Math.max(0,-(-s*r+l)),d=u>0?-r:Math.min(Math.max(-r,-o),r),p=-u*u+d*(d+2*o)+h):d<=f?(u=0,d=Math.min(Math.max(-r,-o),r),p=d*(d+2*o)+h):(u=Math.max(0,-(s*r+l)),d=u>0?r:Math.min(Math.max(-r,-o),r),p=-u*u+d*(d+2*o)+h);else d=s>0?-r:r,u=Math.max(0,-(s*d+l)),p=-u*u+d*(d+2*o)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(fs).addScaledVector($r,d),p}intersectSphere(t,e){Nn.subVectors(t.center,this.origin);const n=Nn.dot(this.direction),i=Nn.dot(Nn)-n*n,r=t.radius*t.radius;if(i>r)return null;const s=Math.sqrt(r-i),l=n-s,o=n+s;return o<0?null:l<0?this.at(o,e):this.at(l,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,s,l,o;const h=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;return h>=0?(n=(t.min.x-d.x)*h,i=(t.max.x-d.x)*h):(n=(t.max.x-d.x)*h,i=(t.min.x-d.x)*h),c>=0?(r=(t.min.y-d.y)*c,s=(t.max.y-d.y)*c):(r=(t.max.y-d.y)*c,s=(t.min.y-d.y)*c),n>s||r>i||((r>n||isNaN(n))&&(n=r),(s<i||isNaN(i))&&(i=s),u>=0?(l=(t.min.z-d.z)*u,o=(t.max.z-d.z)*u):(l=(t.max.z-d.z)*u,o=(t.min.z-d.z)*u),n>o||l>i)||((l>n||n!==n)&&(n=l),(o<i||i!==i)&&(i=o),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Nn)!==null}intersectTriangle(t,e,n,i,r){ms.subVectors(e,t),ta.subVectors(n,t),vs.crossVectors(ms,ta);let s=this.direction.dot(vs),l;if(s>0){if(i)return null;l=1}else if(s<0)l=-1,s=-s;else return null;qn.subVectors(this.origin,t);const o=l*this.direction.dot(ta.crossVectors(qn,ta));if(o<0)return null;const h=l*this.direction.dot(ms.cross(qn));if(h<0||o+h>s)return null;const c=-l*qn.dot(vs);return c<0?null:this.at(c/s,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fn{constructor(t,e,n,i,r,s,l,o,h,c,u,d,p,f,m,g){Fn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,s,l,o,h,c,u,d,p,f,m,g)}set(t,e,n,i,r,s,l,o,h,c,u,d,p,f,m,g){const v=this.elements;return v[0]=t,v[4]=e,v[8]=n,v[12]=i,v[1]=r,v[5]=s,v[9]=l,v[13]=o,v[2]=h,v[6]=c,v[10]=u,v[14]=d,v[3]=p,v[7]=f,v[11]=m,v[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fn().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Wi.setFromMatrixColumn(t,0).length(),r=1/Wi.setFromMatrixColumn(t,1).length(),s=1/Wi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*s,e[9]=n[9]*s,e[10]=n[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,s=Math.cos(n),l=Math.sin(n),o=Math.cos(i),h=Math.sin(i),c=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=s*c,p=s*u,f=l*c,m=l*u;e[0]=o*c,e[4]=-o*u,e[8]=h,e[1]=p+f*h,e[5]=d-m*h,e[9]=-l*o,e[2]=m-d*h,e[6]=f+p*h,e[10]=s*o}else if(t.order==="YXZ"){const d=o*c,p=o*u,f=h*c,m=h*u;e[0]=d+m*l,e[4]=f*l-p,e[8]=s*h,e[1]=s*u,e[5]=s*c,e[9]=-l,e[2]=p*l-f,e[6]=m+d*l,e[10]=s*o}else if(t.order==="ZXY"){const d=o*c,p=o*u,f=h*c,m=h*u;e[0]=d-m*l,e[4]=-s*u,e[8]=f+p*l,e[1]=p+f*l,e[5]=s*c,e[9]=m-d*l,e[2]=-s*h,e[6]=l,e[10]=s*o}else if(t.order==="ZYX"){const d=s*c,p=s*u,f=l*c,m=l*u;e[0]=o*c,e[4]=f*h-p,e[8]=d*h+m,e[1]=o*u,e[5]=m*h+d,e[9]=p*h-f,e[2]=-h,e[6]=l*o,e[10]=s*o}else if(t.order==="YZX"){const d=s*o,p=s*h,f=l*o,m=l*h;e[0]=o*c,e[4]=m-d*u,e[8]=f*u+p,e[1]=u,e[5]=s*c,e[9]=-l*c,e[2]=-h*c,e[6]=p*u+f,e[10]=d-m*u}else if(t.order==="XZY"){const d=s*o,p=s*h,f=l*o,m=l*h;e[0]=o*c,e[4]=-u,e[8]=h*c,e[1]=d*u+m,e[5]=s*c,e[9]=p*u-f,e[2]=f*u-p,e[6]=l*c,e[10]=m*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Wd,t,Gd)}lookAt(t,e,n){const i=this.elements;return tn.subVectors(t,e),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),jn.crossVectors(n,tn),jn.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),jn.crossVectors(n,tn)),jn.normalize(),ea.crossVectors(tn,jn),i[0]=jn.x,i[4]=ea.x,i[8]=tn.x,i[1]=jn.y,i[5]=ea.y,i[9]=tn.y,i[2]=jn.z,i[6]=ea.z,i[10]=tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,s=n[0],l=n[4],o=n[8],h=n[12],c=n[1],u=n[5],d=n[9],p=n[13],f=n[2],m=n[6],g=n[10],v=n[14],x=n[3],_=n[7],M=n[11],S=n[15],P=i[0],T=i[4],z=i[8],k=i[12],L=i[1],D=i[5],A=i[9],V=i[13],j=i[2],Q=i[6],pt=i[10],H=i[14],O=i[3],X=i[7],Z=i[11],R=i[15];return r[0]=s*P+l*L+o*j+h*O,r[4]=s*T+l*D+o*Q+h*X,r[8]=s*z+l*A+o*pt+h*Z,r[12]=s*k+l*V+o*H+h*R,r[1]=c*P+u*L+d*j+p*O,r[5]=c*T+u*D+d*Q+p*X,r[9]=c*z+u*A+d*pt+p*Z,r[13]=c*k+u*V+d*H+p*R,r[2]=f*P+m*L+g*j+v*O,r[6]=f*T+m*D+g*Q+v*X,r[10]=f*z+m*A+g*pt+v*Z,r[14]=f*k+m*V+g*H+v*R,r[3]=x*P+_*L+M*j+S*O,r[7]=x*T+_*D+M*Q+S*X,r[11]=x*z+_*A+M*pt+S*Z,r[15]=x*k+_*V+M*H+S*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],s=t[1],l=t[5],o=t[9],h=t[13],c=t[2],u=t[6],d=t[10],p=t[14],f=t[3],m=t[7],g=t[11],v=t[15];return f*(+r*o*u-i*h*u-r*l*d+n*h*d+i*l*p-n*o*p)+m*(+e*o*p-e*h*d+r*s*d-i*s*p+i*h*c-r*o*c)+g*(+e*h*u-e*l*p-r*s*u+n*s*p+r*l*c-n*h*c)+v*(-i*l*c-e*o*u+e*l*d+i*s*u-n*s*d+n*o*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],l=t[5],o=t[6],h=t[7],c=t[8],u=t[9],d=t[10],p=t[11],f=t[12],m=t[13],g=t[14],v=t[15],x=u*g*h-m*d*h+m*o*p-l*g*p-u*o*v+l*d*v,_=f*d*h-c*g*h-f*o*p+s*g*p+c*o*v-s*d*v,M=c*m*h-f*u*h+f*l*p-s*m*p-c*l*v+s*u*v,S=f*u*o-c*m*o-f*l*d+s*m*d+c*l*g-s*u*g,P=e*x+n*_+i*M+r*S;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/P;return t[0]=x*T,t[1]=(m*d*r-u*g*r-m*i*p+n*g*p+u*i*v-n*d*v)*T,t[2]=(l*g*r-m*o*r+m*i*h-n*g*h-l*i*v+n*o*v)*T,t[3]=(u*o*r-l*d*r-u*i*h+n*d*h+l*i*p-n*o*p)*T,t[4]=_*T,t[5]=(c*g*r-f*d*r+f*i*p-e*g*p-c*i*v+e*d*v)*T,t[6]=(f*o*r-s*g*r-f*i*h+e*g*h+s*i*v-e*o*v)*T,t[7]=(s*d*r-c*o*r+c*i*h-e*d*h-s*i*p+e*o*p)*T,t[8]=M*T,t[9]=(f*u*r-c*m*r-f*n*p+e*m*p+c*n*v-e*u*v)*T,t[10]=(s*m*r-f*l*r+f*n*h-e*m*h-s*n*v+e*l*v)*T,t[11]=(c*l*r-s*u*r-c*n*h+e*u*h+s*n*p-e*l*p)*T,t[12]=S*T,t[13]=(c*m*i-f*u*i+f*n*d-e*m*d-c*n*g+e*u*g)*T,t[14]=(f*l*i-s*m*i-f*n*o+e*m*o+s*n*g-e*l*g)*T,t[15]=(s*u*i-c*l*i+c*n*o-e*u*o-s*n*d+e*l*d)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,s=t.x,l=t.y,o=t.z,h=r*s,c=r*l;return this.set(h*s+n,h*l-i*o,h*o+i*l,0,h*l+i*o,c*l+n,c*o-i*s,0,h*o-i*l,c*o+i*s,r*o*o+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,s){return this.set(1,n,r,0,t,1,s,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,s=e._y,l=e._z,o=e._w,h=r+r,c=s+s,u=l+l,d=r*h,p=r*c,f=r*u,m=s*c,g=s*u,v=l*u,x=o*h,_=o*c,M=o*u,S=n.x,P=n.y,T=n.z;return i[0]=(1-(m+v))*S,i[1]=(p+M)*S,i[2]=(f-_)*S,i[3]=0,i[4]=(p-M)*P,i[5]=(1-(d+v))*P,i[6]=(g+x)*P,i[7]=0,i[8]=(f+_)*T,i[9]=(g-x)*T,i[10]=(1-(d+m))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Wi.set(i[0],i[1],i[2]).length();const s=Wi.set(i[4],i[5],i[6]).length(),l=Wi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],pn.copy(this);const h=1/r,c=1/s,u=1/l;return pn.elements[0]*=h,pn.elements[1]*=h,pn.elements[2]*=h,pn.elements[4]*=c,pn.elements[5]*=c,pn.elements[6]*=c,pn.elements[8]*=u,pn.elements[9]*=u,pn.elements[10]*=u,e.setFromRotationMatrix(pn),n.x=r,n.y=s,n.z=l,this}makePerspective(t,e,n,i,r,s,l=Jr){const o=this.elements,h=2*r/(e-t),c=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let p,f;if(l===Jr)p=-(s+r)/(s-r),f=-2*s*r/(s-r);else if(l===_l)p=-s/(s-r),f=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return o[0]=h,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=p,o[14]=f,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,n,i,r,s,l=Jr){const o=this.elements,h=1/(e-t),c=1/(n-i),u=1/(s-r),d=(e+t)*h,p=(n+i)*c;let f,m;if(l===Jr)f=(s+r)*u,m=-2*u;else if(l===_l)f=r*u,m=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return o[0]=2*h,o[4]=0,o[8]=0,o[12]=-d,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-p,o[2]=0,o[6]=0,o[10]=m,o[14]=-f,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Wi=new Gt,pn=new Fn,Wd=new Gt(0,0,0),Gd=new Gt(1,1,1),jn=new Gt,ea=new Gt,tn=new Gt,bl=new Fn,Sl=new Mi;class ba{constructor(t=0,e=0,n=0,i=ba.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],s=i[4],l=i[8],o=i[1],h=i[5],c=i[9],u=i[2],d=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(fn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-fn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(l,p),this._z=Math.atan2(o,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(fn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-s,h)):(this._y=0,this._z=Math.atan2(o,r));break;case"ZYX":this._y=Math.asin(-fn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(o,r)):(this._x=0,this._z=Math.atan2(-s,h));break;case"YZX":this._z=Math.asin(fn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(l,p));break;case"XZY":this._z=Math.asin(-fn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return bl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Sl.setFromEuler(this),this.setFromQuaternion(Sl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ba.DEFAULT_ORDER="XYZ";class Xd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let qd=0;const wl=new Gt,Gi=new Mi,In=new Fn,na=new Gt,vr=new Gt,jd=new Gt,Yd=new Mi,Tl=new Gt(1,0,0),Al=new Gt(0,1,0),Cl=new Gt(0,0,1),Zd={type:"added"},Kd={type:"removed"};class xi extends Ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=Ea(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xi.DEFAULT_UP.clone();const t=new Gt,e=new ba,n=new Mi,i=new Gt(1,1,1);function r(){n.setFromEuler(e,!1)}function s(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Fn},normalMatrix:{value:new or}}),this.matrix=new Fn,this.matrixWorld=new Fn,this.matrixAutoUpdate=xi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=xi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Xd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.premultiply(Gi),this}rotateX(t){return this.rotateOnAxis(Tl,t)}rotateY(t){return this.rotateOnAxis(Al,t)}rotateZ(t){return this.rotateOnAxis(Cl,t)}translateOnAxis(t,e){return wl.copy(t).applyQuaternion(this.quaternion),this.position.add(wl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Tl,t)}translateY(t){return this.translateOnAxis(Al,t)}translateZ(t){return this.translateOnAxis(Cl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?na.copy(t):na.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(vr,na,this.up):In.lookAt(na,vr,this.up),this.quaternion.setFromRotationMatrix(In),i&&(In.extractRotation(i.matrixWorld),Gi.setFromRotationMatrix(In),this.quaternion.premultiply(Gi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Zd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Kd)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),In.multiply(t.parent.matrixWorld)),t.applyMatrix4(In),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const s=this.children[n].getObjectByProperty(t,e);if(s!==void 0)return s}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectsByProperty(t,e);s.length>0&&(n=n.concat(s))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,t,jd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,Yd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++){const l=i[r];l.matrixWorldAutoUpdate===!0&&l.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(l,o){return l[o.uuid]===void 0&&(l[o.uuid]=o.toJSON(t)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const o=l.shapes;if(Array.isArray(o))for(let h=0,c=o.length;h<c;h++){const u=o[h];r(t.shapes,u)}else r(t.shapes,o)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let o=0,h=this.material.length;o<h;o++)l.push(r(t.materials,this.material[o]));i.material=l}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let l=0;l<this.children.length;l++)i.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let l=0;l<this.animations.length;l++){const o=this.animations[l];i.animations.push(r(t.animations,o))}}if(e){const l=s(t.geometries),o=s(t.materials),h=s(t.textures),c=s(t.images),u=s(t.shapes),d=s(t.skeletons),p=s(t.animations),f=s(t.nodes);l.length>0&&(n.geometries=l),o.length>0&&(n.materials=o),h.length>0&&(n.textures=h),c.length>0&&(n.images=c),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),f.length>0&&(n.nodes=f)}return n.object=i,n;function s(l){const o=[];for(const h in l){const c=l[h];delete c.metadata,o.push(c)}return o}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}xi.DEFAULT_UP=new Gt(0,1,0);xi.DEFAULT_MATRIX_AUTO_UPDATE=!0;xi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gs=new Gt,Qd=new Gt,Jd=new or;class $d{constructor(t=new Gt(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=gs.subVectors(n,e).cross(Qd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(gs),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Jd.getNormalMatrix(t),i=this.coplanarPoint(gs).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}class Rl{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(fn(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ec}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ec);const Pl={type:"change"},_s={type:"start"},Ll={type:"end"},ia=new Hd,Nl=new $d,tp=Math.cos(70*Fd.DEG2RAD);class ep extends Ws{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Gt,this.cursor=new Gt,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vi.ROTATE,MIDDLE:Vi.DOLLY,RIGHT:Vi.PAN},this.touches={ONE:ki.ROTATE,TWO:ki.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return l.phi},this.getAzimuthalAngle=function(){return l.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(tt){tt.addEventListener("keydown",Ut),this._domElementKeyEvents=tt},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ut),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Pl),n.update(),r=i.NONE},this.update=function(){const tt=new Gt,At=new Mi().setFromUnitVectors(t.up,new Gt(0,1,0)),Xt=At.clone().invert(),Kt=new Gt,rt=new Mi,pe=new Gt,ce=2*Math.PI;return function(ze=null){const Ce=n.object.position;tt.copy(Ce).sub(n.target),tt.applyQuaternion(At),l.setFromVector3(tt),n.autoRotate&&r===i.NONE&&D(k(ze)),n.enableDamping?(l.theta+=o.theta*n.dampingFactor,l.phi+=o.phi*n.dampingFactor):(l.theta+=o.theta,l.phi+=o.phi);let se=n.minAzimuthAngle,ge=n.maxAzimuthAngle;isFinite(se)&&isFinite(ge)&&(se<-Math.PI?se+=ce:se>Math.PI&&(se-=ce),ge<-Math.PI?ge+=ce:ge>Math.PI&&(ge-=ce),se<=ge?l.theta=Math.max(se,Math.min(ge,l.theta)):l.theta=l.theta>(se+ge)/2?Math.max(se,l.theta):Math.min(ge,l.theta)),l.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,l.phi)),l.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(c,n.dampingFactor):n.target.add(c),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&P||n.object.isOrthographicCamera?l.radius=X(l.radius):l.radius=X(l.radius*h),tt.setFromSpherical(l),tt.applyQuaternion(Xt),Ce.copy(n.target).add(tt),n.object.lookAt(n.target),n.enableDamping===!0?(o.theta*=1-n.dampingFactor,o.phi*=1-n.dampingFactor,c.multiplyScalar(1-n.dampingFactor)):(o.set(0,0,0),c.set(0,0,0));let Be=!1;if(n.zoomToCursor&&P){let Re=null;if(n.object.isPerspectiveCamera){const Ve=tt.length();Re=X(Ve*h);const Ge=Ve-Re;n.object.position.addScaledVector(M,Ge),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Ve=new Gt(S.x,S.y,0);Ve.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/h)),n.object.updateProjectionMatrix(),Be=!0;const Ge=new Gt(S.x,S.y,0);Ge.unproject(n.object),n.object.position.sub(Ge).add(Ve),n.object.updateMatrixWorld(),Re=tt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Re!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Re).add(n.object.position):(ia.origin.copy(n.object.position),ia.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(ia.direction))<tp?t.lookAt(n.target):(Nl.setFromNormalAndCoplanarPoint(n.object.up,n.target),ia.intersectPlane(Nl,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/h)),n.object.updateProjectionMatrix(),Be=!0);return h=1,P=!1,Be||Kt.distanceToSquared(n.object.position)>s||8*(1-rt.dot(n.object.quaternion))>s||pe.distanceToSquared(n.target)>0?(n.dispatchEvent(Pl),Kt.copy(n.object.position),rt.copy(n.object.quaternion),pe.copy(n.target),Be=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Ot),n.domElement.removeEventListener("pointerdown",ot),n.domElement.removeEventListener("pointercancel",lt),n.domElement.removeEventListener("wheel",bt),n.domElement.removeEventListener("pointermove",yt),n.domElement.removeEventListener("pointerup",lt),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ut),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const s=1e-6,l=new Rl,o=new Rl;let h=1;const c=new Gt,u=new Oe,d=new Oe,p=new Oe,f=new Oe,m=new Oe,g=new Oe,v=new Oe,x=new Oe,_=new Oe,M=new Gt,S=new Oe;let P=!1;const T=[],z={};function k(tt){return tt!==null?2*Math.PI/60*n.autoRotateSpeed*tt:2*Math.PI/60/60*n.autoRotateSpeed}function L(){return Math.pow(.95,n.zoomSpeed)}function D(tt){o.theta-=tt}function A(tt){o.phi-=tt}const V=function(){const tt=new Gt;return function(Xt,Kt){tt.setFromMatrixColumn(Kt,0),tt.multiplyScalar(-Xt),c.add(tt)}}(),j=function(){const tt=new Gt;return function(Xt,Kt){n.screenSpacePanning===!0?tt.setFromMatrixColumn(Kt,1):(tt.setFromMatrixColumn(Kt,0),tt.crossVectors(n.object.up,tt)),tt.multiplyScalar(Xt),c.add(tt)}}(),Q=function(){const tt=new Gt;return function(Xt,Kt){const rt=n.domElement;if(n.object.isPerspectiveCamera){const pe=n.object.position;tt.copy(pe).sub(n.target);let ce=tt.length();ce*=Math.tan(n.object.fov/2*Math.PI/180),V(2*Xt*ce/rt.clientHeight,n.object.matrix),j(2*Kt*ce/rt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(V(Xt*(n.object.right-n.object.left)/n.object.zoom/rt.clientWidth,n.object.matrix),j(Kt*(n.object.top-n.object.bottom)/n.object.zoom/rt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function pt(tt){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?h/=tt:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(tt){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?h*=tt:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function O(tt){if(!n.zoomToCursor)return;P=!0;const At=n.domElement.getBoundingClientRect(),Xt=tt.clientX-At.left,Kt=tt.clientY-At.top,rt=At.width,pe=At.height;S.x=Xt/rt*2-1,S.y=-(Kt/pe)*2+1,M.set(S.x,S.y,1).unproject(n.object).sub(n.object.position).normalize()}function X(tt){return Math.max(n.minDistance,Math.min(n.maxDistance,tt))}function Z(tt){u.set(tt.clientX,tt.clientY)}function R(tt){O(tt),v.set(tt.clientX,tt.clientY)}function W(tt){f.set(tt.clientX,tt.clientY)}function E(tt){d.set(tt.clientX,tt.clientY),p.subVectors(d,u).multiplyScalar(n.rotateSpeed);const At=n.domElement;D(2*Math.PI*p.x/At.clientHeight),A(2*Math.PI*p.y/At.clientHeight),u.copy(d),n.update()}function y(tt){x.set(tt.clientX,tt.clientY),_.subVectors(x,v),_.y>0?pt(L()):_.y<0&&H(L()),v.copy(x),n.update()}function b(tt){m.set(tt.clientX,tt.clientY),g.subVectors(m,f).multiplyScalar(n.panSpeed),Q(g.x,g.y),f.copy(m),n.update()}function N(tt){O(tt),tt.deltaY<0?H(L()):tt.deltaY>0&&pt(L()),n.update()}function F(tt){let At=!1;switch(tt.code){case n.keys.UP:tt.ctrlKey||tt.metaKey||tt.shiftKey?A(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Q(0,n.keyPanSpeed),At=!0;break;case n.keys.BOTTOM:tt.ctrlKey||tt.metaKey||tt.shiftKey?A(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Q(0,-n.keyPanSpeed),At=!0;break;case n.keys.LEFT:tt.ctrlKey||tt.metaKey||tt.shiftKey?D(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Q(n.keyPanSpeed,0),At=!0;break;case n.keys.RIGHT:tt.ctrlKey||tt.metaKey||tt.shiftKey?D(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Q(-n.keyPanSpeed,0),At=!0;break}At&&(tt.preventDefault(),n.update())}function B(){if(T.length===1)u.set(T[0].pageX,T[0].pageY);else{const tt=.5*(T[0].pageX+T[1].pageX),At=.5*(T[0].pageY+T[1].pageY);u.set(tt,At)}}function U(){if(T.length===1)f.set(T[0].pageX,T[0].pageY);else{const tt=.5*(T[0].pageX+T[1].pageX),At=.5*(T[0].pageY+T[1].pageY);f.set(tt,At)}}function G(){const tt=T[0].pageX-T[1].pageX,At=T[0].pageY-T[1].pageY,Xt=Math.sqrt(tt*tt+At*At);v.set(0,Xt)}function J(){n.enableZoom&&G(),n.enablePan&&U()}function ft(){n.enableZoom&&G(),n.enableRotate&&B()}function dt(tt){if(T.length==1)d.set(tt.pageX,tt.pageY);else{const Xt=Ae(tt),Kt=.5*(tt.pageX+Xt.x),rt=.5*(tt.pageY+Xt.y);d.set(Kt,rt)}p.subVectors(d,u).multiplyScalar(n.rotateSpeed);const At=n.domElement;D(2*Math.PI*p.x/At.clientHeight),A(2*Math.PI*p.y/At.clientHeight),u.copy(d)}function w(tt){if(T.length===1)m.set(tt.pageX,tt.pageY);else{const At=Ae(tt),Xt=.5*(tt.pageX+At.x),Kt=.5*(tt.pageY+At.y);m.set(Xt,Kt)}g.subVectors(m,f).multiplyScalar(n.panSpeed),Q(g.x,g.y),f.copy(m)}function K(tt){const At=Ae(tt),Xt=tt.pageX-At.x,Kt=tt.pageY-At.y,rt=Math.sqrt(Xt*Xt+Kt*Kt);x.set(0,rt),_.set(0,Math.pow(x.y/v.y,n.zoomSpeed)),pt(_.y),v.copy(x)}function q(tt){n.enableZoom&&K(tt),n.enablePan&&w(tt)}function it(tt){n.enableZoom&&K(tt),n.enableRotate&&dt(tt)}function ot(tt){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(tt.pointerId),n.domElement.addEventListener("pointermove",yt),n.domElement.addEventListener("pointerup",lt)),Lt(tt),tt.pointerType==="touch"?Mt(tt):St(tt))}function yt(tt){n.enabled!==!1&&(tt.pointerType==="touch"?Ft(tt):It(tt))}function lt(tt){Bt(tt),T.length===0&&(n.domElement.releasePointerCapture(tt.pointerId),n.domElement.removeEventListener("pointermove",yt),n.domElement.removeEventListener("pointerup",lt)),n.dispatchEvent(Ll),r=i.NONE}function St(tt){let At;switch(tt.button){case 0:At=n.mouseButtons.LEFT;break;case 1:At=n.mouseButtons.MIDDLE;break;case 2:At=n.mouseButtons.RIGHT;break;default:At=-1}switch(At){case Vi.DOLLY:if(n.enableZoom===!1)return;R(tt),r=i.DOLLY;break;case Vi.ROTATE:if(tt.ctrlKey||tt.metaKey||tt.shiftKey){if(n.enablePan===!1)return;W(tt),r=i.PAN}else{if(n.enableRotate===!1)return;Z(tt),r=i.ROTATE}break;case Vi.PAN:if(tt.ctrlKey||tt.metaKey||tt.shiftKey){if(n.enableRotate===!1)return;Z(tt),r=i.ROTATE}else{if(n.enablePan===!1)return;W(tt),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(_s)}function It(tt){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;E(tt);break;case i.DOLLY:if(n.enableZoom===!1)return;y(tt);break;case i.PAN:if(n.enablePan===!1)return;b(tt);break}}function bt(tt){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(tt.preventDefault(),n.dispatchEvent(_s),N(tt),n.dispatchEvent(Ll))}function Ut(tt){n.enabled===!1||n.enablePan===!1||F(tt)}function Mt(tt){switch(jt(tt),T.length){case 1:switch(n.touches.ONE){case ki.ROTATE:if(n.enableRotate===!1)return;B(),r=i.TOUCH_ROTATE;break;case ki.PAN:if(n.enablePan===!1)return;U(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case ki.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;J(),r=i.TOUCH_DOLLY_PAN;break;case ki.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ft(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(_s)}function Ft(tt){switch(jt(tt),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;dt(tt),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;w(tt),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;q(tt),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;it(tt),n.update();break;default:r=i.NONE}}function Ot(tt){n.enabled!==!1&&tt.preventDefault()}function Lt(tt){T.push(tt)}function Bt(tt){delete z[tt.pointerId];for(let At=0;At<T.length;At++)if(T[At].pointerId==tt.pointerId){T.splice(At,1);return}}function jt(tt){let At=z[tt.pointerId];At===void 0&&(At=new Oe,z[tt.pointerId]=At),At.set(tt.pageX,tt.pageY)}function Ae(tt){const At=tt.pointerId===T[0].pointerId?T[1]:T[0];return z[At.pointerId]}n.domElement.addEventListener("contextmenu",Ot),n.domElement.addEventListener("pointerdown",ot),n.domElement.addEventListener("pointercancel",lt),n.domElement.addEventListener("wheel",bt,{passive:!1}),this.update()}}function np(a){if(a&&!(typeof window>"u")){var t=document.createElement("style");return t.setAttribute("type","text/css"),t.innerHTML=a,document.head.appendChild(t),a}}function Yi(a,t){var e=a.__state.conversionName.toString(),n=Math.round(a.r),i=Math.round(a.g),r=Math.round(a.b),s=a.a,l=Math.round(a.h),o=a.s.toFixed(1),h=a.v.toFixed(1);if(t||e==="THREE_CHAR_HEX"||e==="SIX_CHAR_HEX"){for(var c=a.hex.toString(16);c.length<6;)c="0"+c;return"#"+c}else{if(e==="CSS_RGB")return"rgb("+n+","+i+","+r+")";if(e==="CSS_RGBA")return"rgba("+n+","+i+","+r+","+s+")";if(e==="HEX")return"0x"+a.hex.toString(16);if(e==="RGB_ARRAY")return"["+n+","+i+","+r+"]";if(e==="RGBA_ARRAY")return"["+n+","+i+","+r+","+s+"]";if(e==="RGB_OBJ")return"{r:"+n+",g:"+i+",b:"+r+"}";if(e==="RGBA_OBJ")return"{r:"+n+",g:"+i+",b:"+r+",a:"+s+"}";if(e==="HSV_OBJ")return"{h:"+l+",s:"+o+",v:"+h+"}";if(e==="HSVA_OBJ")return"{h:"+l+",s:"+o+",v:"+h+",a:"+s+"}"}return"unknown format"}var Il=Array.prototype.forEach,gr=Array.prototype.slice,gt={BREAK:{},extend:function(t){return this.each(gr.call(arguments,1),function(e){var n=this.isObject(e)?Object.keys(e):[];n.forEach((function(i){this.isUndefined(e[i])||(t[i]=e[i])}).bind(this))},this),t},defaults:function(t){return this.each(gr.call(arguments,1),function(e){var n=this.isObject(e)?Object.keys(e):[];n.forEach((function(i){this.isUndefined(t[i])&&(t[i]=e[i])}).bind(this))},this),t},compose:function(){var t=gr.call(arguments);return function(){for(var e=gr.call(arguments),n=t.length-1;n>=0;n--)e=[t[n].apply(this,e)];return e[0]}},each:function(t,e,n){if(t){if(Il&&t.forEach&&t.forEach===Il)t.forEach(e,n);else if(t.length===t.length+0){var i=void 0,r=void 0;for(i=0,r=t.length;i<r;i++)if(i in t&&e.call(n,t[i],i)===this.BREAK)return}else for(var s in t)if(e.call(n,t[s],s)===this.BREAK)return}},defer:function(t){setTimeout(t,0)},debounce:function(t,e,n){var i=void 0;return function(){var r=this,s=arguments;function l(){i=null,n||t.apply(r,s)}var o=n||!i;clearTimeout(i),i=setTimeout(l,e),o&&t.apply(r,s)}},toArray:function(t){return t.toArray?t.toArray():gr.call(t)},isUndefined:function(t){return t===void 0},isNull:function(t){return t===null},isNaN:function(a){function t(e){return a.apply(this,arguments)}return t.toString=function(){return a.toString()},t}(function(a){return isNaN(a)}),isArray:Array.isArray||function(a){return a.constructor===Array},isObject:function(t){return t===Object(t)},isNumber:function(t){return t===t+0},isString:function(t){return t===t+""},isBoolean:function(t){return t===!1||t===!0},isFunction:function(t){return t instanceof Function}},ip=[{litmus:gt.isString,conversions:{THREE_CHAR_HEX:{read:function(t){var e=t.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return e===null?!1:{space:"HEX",hex:parseInt("0x"+e[1].toString()+e[1].toString()+e[2].toString()+e[2].toString()+e[3].toString()+e[3].toString(),0)}},write:Yi},SIX_CHAR_HEX:{read:function(t){var e=t.match(/^#([A-F0-9]{6})$/i);return e===null?!1:{space:"HEX",hex:parseInt("0x"+e[1].toString(),0)}},write:Yi},CSS_RGB:{read:function(t){var e=t.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return e===null?!1:{space:"RGB",r:parseFloat(e[1]),g:parseFloat(e[2]),b:parseFloat(e[3])}},write:Yi},CSS_RGBA:{read:function(t){var e=t.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return e===null?!1:{space:"RGB",r:parseFloat(e[1]),g:parseFloat(e[2]),b:parseFloat(e[3]),a:parseFloat(e[4])}},write:Yi}}},{litmus:gt.isNumber,conversions:{HEX:{read:function(t){return{space:"HEX",hex:t,conversionName:"HEX"}},write:function(t){return t.hex}}}},{litmus:gt.isArray,conversions:{RGB_ARRAY:{read:function(t){return t.length!==3?!1:{space:"RGB",r:t[0],g:t[1],b:t[2]}},write:function(t){return[t.r,t.g,t.b]}},RGBA_ARRAY:{read:function(t){return t.length!==4?!1:{space:"RGB",r:t[0],g:t[1],b:t[2],a:t[3]}},write:function(t){return[t.r,t.g,t.b,t.a]}}}},{litmus:gt.isObject,conversions:{RGBA_OBJ:{read:function(t){return gt.isNumber(t.r)&&gt.isNumber(t.g)&&gt.isNumber(t.b)&&gt.isNumber(t.a)?{space:"RGB",r:t.r,g:t.g,b:t.b,a:t.a}:!1},write:function(t){return{r:t.r,g:t.g,b:t.b,a:t.a}}},RGB_OBJ:{read:function(t){return gt.isNumber(t.r)&&gt.isNumber(t.g)&&gt.isNumber(t.b)?{space:"RGB",r:t.r,g:t.g,b:t.b}:!1},write:function(t){return{r:t.r,g:t.g,b:t.b}}},HSVA_OBJ:{read:function(t){return gt.isNumber(t.h)&&gt.isNumber(t.s)&&gt.isNumber(t.v)&&gt.isNumber(t.a)?{space:"HSV",h:t.h,s:t.s,v:t.v,a:t.a}:!1},write:function(t){return{h:t.h,s:t.s,v:t.v,a:t.a}}},HSV_OBJ:{read:function(t){return gt.isNumber(t.h)&&gt.isNumber(t.s)&&gt.isNumber(t.v)?{space:"HSV",h:t.h,s:t.s,v:t.v}:!1},write:function(t){return{h:t.h,s:t.s,v:t.v}}}}}],_r=void 0,ra=void 0,Ls=function(){ra=!1;var t=arguments.length>1?gt.toArray(arguments):arguments[0];return gt.each(ip,function(e){if(e.litmus(t))return gt.each(e.conversions,function(n,i){if(_r=n.read(t),ra===!1&&_r!==!1)return ra=_r,_r.conversionName=i,_r.conversion=n,gt.BREAK}),gt.BREAK}),ra},Dl=void 0,da={hsv_to_rgb:function(t,e,n){var i=Math.floor(t/60)%6,r=t/60-Math.floor(t/60),s=n*(1-e),l=n*(1-r*e),o=n*(1-(1-r)*e),h=[[n,o,s],[l,n,s],[s,n,o],[s,l,n],[o,s,n],[n,s,l]][i];return{r:h[0]*255,g:h[1]*255,b:h[2]*255}},rgb_to_hsv:function(t,e,n){var i=Math.min(t,e,n),r=Math.max(t,e,n),s=r-i,l=void 0,o=void 0;if(r!==0)o=s/r;else return{h:NaN,s:0,v:0};return t===r?l=(e-n)/s:e===r?l=2+(n-t)/s:l=4+(t-e)/s,l/=6,l<0&&(l+=1),{h:l*360,s:o,v:r/255}},rgb_to_hex:function(t,e,n){var i=this.hex_with_component(0,2,t);return i=this.hex_with_component(i,1,e),i=this.hex_with_component(i,0,n),i},component_from_hex:function(t,e){return t>>e*8&255},hex_with_component:function(t,e,n){return n<<(Dl=e*8)|t&~(255<<Dl)}},rp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},vn=function(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")},gn=function(){function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}}(),Qn=function a(t,e,n){t===null&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,e);if(i===void 0){var r=Object.getPrototypeOf(t);return r===null?void 0:a(r,e,n)}else{if("value"in i)return i.value;var s=i.get;return s===void 0?void 0:s.call(n)}},ei=function(a,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);a.prototype=Object.create(t&&t.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(a,t):a.__proto__=t)},ni=function(a,t){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:a},Te=function(){function a(){if(vn(this,a),this.__state=Ls.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return gn(a,[{key:"toString",value:function(){return Yi(this)}},{key:"toHexString",value:function(){return Yi(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),a}();function Gs(a,t,e){Object.defineProperty(a,t,{get:function(){return this.__state.space==="RGB"?this.__state[t]:(Te.recalculateRGB(this,t,e),this.__state[t])},set:function(i){this.__state.space!=="RGB"&&(Te.recalculateRGB(this,t,e),this.__state.space="RGB"),this.__state[t]=i}})}function Xs(a,t){Object.defineProperty(a,t,{get:function(){return this.__state.space==="HSV"?this.__state[t]:(Te.recalculateHSV(this),this.__state[t])},set:function(n){this.__state.space!=="HSV"&&(Te.recalculateHSV(this),this.__state.space="HSV"),this.__state[t]=n}})}Te.recalculateRGB=function(a,t,e){if(a.__state.space==="HEX")a.__state[t]=da.component_from_hex(a.__state.hex,e);else if(a.__state.space==="HSV")gt.extend(a.__state,da.hsv_to_rgb(a.__state.h,a.__state.s,a.__state.v));else throw new Error("Corrupted color state")};Te.recalculateHSV=function(a){var t=da.rgb_to_hsv(a.r,a.g,a.b);gt.extend(a.__state,{s:t.s,v:t.v}),gt.isNaN(t.h)?gt.isUndefined(a.__state.h)&&(a.__state.h=0):a.__state.h=t.h};Te.COMPONENTS=["r","g","b","h","s","v","hex","a"];Gs(Te.prototype,"r",2);Gs(Te.prototype,"g",1);Gs(Te.prototype,"b",0);Xs(Te.prototype,"h");Xs(Te.prototype,"s");Xs(Te.prototype,"v");Object.defineProperty(Te.prototype,"a",{get:function(){return this.__state.a},set:function(t){this.__state.a=t}});Object.defineProperty(Te.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=da.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(t){this.__state.space="HEX",this.__state.hex=t}});var bi=function(){function a(t,e){vn(this,a),this.initialValue=t[e],this.domElement=document.createElement("div"),this.object=t,this.property=e,this.__onChange=void 0,this.__onFinishChange=void 0}return gn(a,[{key:"onChange",value:function(e){return this.__onChange=e,this}},{key:"onFinishChange",value:function(e){return this.__onFinishChange=e,this}},{key:"setValue",value:function(e){return this.object[this.property]=e,this.__onChange&&this.__onChange.call(this,e),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),a}(),ap={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},Cc={};gt.each(ap,function(a,t){gt.each(a,function(e){Cc[e]=t})});var sp=/(\d+(\.\d+)?)px/;function xn(a){if(a==="0"||gt.isUndefined(a))return 0;var t=a.match(sp);return gt.isNull(t)?0:parseFloat(t[1])}var st={makeSelectable:function(t,e){t===void 0||t.style===void 0||(t.onselectstart=e?function(){return!1}:function(){},t.style.MozUserSelect=e?"auto":"none",t.style.KhtmlUserSelect=e?"auto":"none",t.unselectable=e?"on":"off")},makeFullscreen:function(t,e,n){var i=n,r=e;gt.isUndefined(r)&&(r=!0),gt.isUndefined(i)&&(i=!0),t.style.position="absolute",r&&(t.style.left=0,t.style.right=0),i&&(t.style.top=0,t.style.bottom=0)},fakeEvent:function(t,e,n,i){var r=n||{},s=Cc[e];if(!s)throw new Error("Event type "+e+" not supported.");var l=document.createEvent(s);switch(s){case"MouseEvents":{var o=r.x||r.clientX||0,h=r.y||r.clientY||0;l.initMouseEvent(e,r.bubbles||!1,r.cancelable||!0,window,r.clickCount||1,0,0,o,h,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var c=l.initKeyboardEvent||l.initKeyEvent;gt.defaults(r,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),c(e,r.bubbles||!1,r.cancelable,window,r.ctrlKey,r.altKey,r.shiftKey,r.metaKey,r.keyCode,r.charCode);break}default:{l.initEvent(e,r.bubbles||!1,r.cancelable||!0);break}}gt.defaults(l,i),t.dispatchEvent(l)},bind:function(t,e,n,i){var r=i||!1;return t.addEventListener?t.addEventListener(e,n,r):t.attachEvent&&t.attachEvent("on"+e,n),st},unbind:function(t,e,n,i){var r=i||!1;return t.removeEventListener?t.removeEventListener(e,n,r):t.detachEvent&&t.detachEvent("on"+e,n),st},addClass:function(t,e){if(t.className===void 0)t.className=e;else if(t.className!==e){var n=t.className.split(/ +/);n.indexOf(e)===-1&&(n.push(e),t.className=n.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return st},removeClass:function(t,e){if(e)if(t.className===e)t.removeAttribute("class");else{var n=t.className.split(/ +/),i=n.indexOf(e);i!==-1&&(n.splice(i,1),t.className=n.join(" "))}else t.className=void 0;return st},hasClass:function(t,e){return new RegExp("(?:^|\\s+)"+e+"(?:\\s+|$)").test(t.className)||!1},getWidth:function(t){var e=getComputedStyle(t);return xn(e["border-left-width"])+xn(e["border-right-width"])+xn(e["padding-left"])+xn(e["padding-right"])+xn(e.width)},getHeight:function(t){var e=getComputedStyle(t);return xn(e["border-top-width"])+xn(e["border-bottom-width"])+xn(e["padding-top"])+xn(e["padding-bottom"])+xn(e.height)},getOffset:function(t){var e=t,n={left:0,top:0};if(e.offsetParent)do n.left+=e.offsetLeft,n.top+=e.offsetTop,e=e.offsetParent;while(e);return n},isActive:function(t){return t===document.activeElement&&(t.type||t.href)}},Rc=function(a){ei(t,a);function t(e,n){vn(this,t);var i=ni(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n)),r=i;i.__prev=i.getValue(),i.__checkbox=document.createElement("input"),i.__checkbox.setAttribute("type","checkbox");function s(){r.setValue(!r.__prev)}return st.bind(i.__checkbox,"change",s,!1),i.domElement.appendChild(i.__checkbox),i.updateDisplay(),i}return gn(t,[{key:"setValue",value:function(n){var i=Qn(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),i}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),Qn(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(bi),op=function(a){ei(t,a);function t(e,n,i){vn(this,t);var r=ni(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n)),s=i,l=r;if(r.__select=document.createElement("select"),gt.isArray(s)){var o={};gt.each(s,function(h){o[h]=h}),s=o}return gt.each(s,function(h,c){var u=document.createElement("option");u.innerHTML=c,u.setAttribute("value",h),l.__select.appendChild(u)}),r.updateDisplay(),st.bind(r.__select,"change",function(){var h=this.options[this.selectedIndex].value;l.setValue(h)}),r.domElement.appendChild(r.__select),r}return gn(t,[{key:"setValue",value:function(n){var i=Qn(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),i}},{key:"updateDisplay",value:function(){return st.isActive(this.__select)?this:(this.__select.value=this.getValue(),Qn(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this))}}]),t}(bi),lp=function(a){ei(t,a);function t(e,n){vn(this,t);var i=ni(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n)),r=i;function s(){r.setValue(r.__input.value)}function l(){r.__onFinishChange&&r.__onFinishChange.call(r,r.getValue())}return i.__input=document.createElement("input"),i.__input.setAttribute("type","text"),st.bind(i.__input,"keyup",s),st.bind(i.__input,"change",s),st.bind(i.__input,"blur",l),st.bind(i.__input,"keydown",function(o){o.keyCode===13&&this.blur()}),i.updateDisplay(),i.domElement.appendChild(i.__input),i}return gn(t,[{key:"updateDisplay",value:function(){return st.isActive(this.__input)||(this.__input.value=this.getValue()),Qn(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(bi);function Ul(a){var t=a.toString();return t.indexOf(".")>-1?t.length-t.indexOf(".")-1:0}var Pc=function(a){ei(t,a);function t(e,n,i){vn(this,t);var r=ni(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n)),s=i||{};return r.__min=s.min,r.__max=s.max,r.__step=s.step,gt.isUndefined(r.__step)?r.initialValue===0?r.__impliedStep=1:r.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(r.initialValue))/Math.LN10))/10:r.__impliedStep=r.__step,r.__precision=Ul(r.__impliedStep),r}return gn(t,[{key:"setValue",value:function(n){var i=n;return this.__min!==void 0&&i<this.__min?i=this.__min:this.__max!==void 0&&i>this.__max&&(i=this.__max),this.__step!==void 0&&i%this.__step!==0&&(i=Math.round(i/this.__step)*this.__step),Qn(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setValue",this).call(this,i)}},{key:"min",value:function(n){return this.__min=n,this}},{key:"max",value:function(n){return this.__max=n,this}},{key:"step",value:function(n){return this.__step=n,this.__impliedStep=n,this.__precision=Ul(n),this}}]),t}(bi);function cp(a,t){var e=Math.pow(10,t);return Math.round(a*e)/e}var pa=function(a){ei(t,a);function t(e,n,i){vn(this,t);var r=ni(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n,i));r.__truncationSuspended=!1;var s=r,l=void 0;function o(){var f=parseFloat(s.__input.value);gt.isNaN(f)||s.setValue(f)}function h(){s.__onFinishChange&&s.__onFinishChange.call(s,s.getValue())}function c(){h()}function u(f){var m=l-f.clientY;s.setValue(s.getValue()+m*s.__impliedStep),l=f.clientY}function d(){st.unbind(window,"mousemove",u),st.unbind(window,"mouseup",d),h()}function p(f){st.bind(window,"mousemove",u),st.bind(window,"mouseup",d),l=f.clientY}return r.__input=document.createElement("input"),r.__input.setAttribute("type","text"),st.bind(r.__input,"change",o),st.bind(r.__input,"blur",c),st.bind(r.__input,"mousedown",p),st.bind(r.__input,"keydown",function(f){f.keyCode===13&&(s.__truncationSuspended=!0,this.blur(),s.__truncationSuspended=!1,h())}),r.updateDisplay(),r.domElement.appendChild(r.__input),r}return gn(t,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():cp(this.getValue(),this.__precision),Qn(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(Pc);function Ol(a,t,e,n,i){return n+(i-n)*((a-t)/(e-t))}var Ns=function(a){ei(t,a);function t(e,n,i,r,s){vn(this,t);var l=ni(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n,{min:i,max:r,step:s})),o=l;l.__background=document.createElement("div"),l.__foreground=document.createElement("div"),st.bind(l.__background,"mousedown",h),st.bind(l.__background,"touchstart",d),st.addClass(l.__background,"slider"),st.addClass(l.__foreground,"slider-fg");function h(m){document.activeElement.blur(),st.bind(window,"mousemove",c),st.bind(window,"mouseup",u),c(m)}function c(m){m.preventDefault();var g=o.__background.getBoundingClientRect();return o.setValue(Ol(m.clientX,g.left,g.right,o.__min,o.__max)),!1}function u(){st.unbind(window,"mousemove",c),st.unbind(window,"mouseup",u),o.__onFinishChange&&o.__onFinishChange.call(o,o.getValue())}function d(m){m.touches.length===1&&(st.bind(window,"touchmove",p),st.bind(window,"touchend",f),p(m))}function p(m){var g=m.touches[0].clientX,v=o.__background.getBoundingClientRect();o.setValue(Ol(g,v.left,v.right,o.__min,o.__max))}function f(){st.unbind(window,"touchmove",p),st.unbind(window,"touchend",f),o.__onFinishChange&&o.__onFinishChange.call(o,o.getValue())}return l.updateDisplay(),l.__background.appendChild(l.__foreground),l.domElement.appendChild(l.__background),l}return gn(t,[{key:"updateDisplay",value:function(){var n=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=n*100+"%",Qn(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(Pc),Lc=function(a){ei(t,a);function t(e,n,i){vn(this,t);var r=ni(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n)),s=r;return r.__button=document.createElement("div"),r.__button.innerHTML=i===void 0?"Fire":i,st.bind(r.__button,"click",function(l){return l.preventDefault(),s.fire(),!1}),st.addClass(r.__button,"button"),r.domElement.appendChild(r.__button),r}return gn(t,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),t}(bi),Is=function(a){ei(t,a);function t(e,n){vn(this,t);var i=ni(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));i.__color=new Te(i.getValue()),i.__temp=new Te(0);var r=i;i.domElement=document.createElement("div"),st.makeSelectable(i.domElement,!1),i.__selector=document.createElement("div"),i.__selector.className="selector",i.__saturation_field=document.createElement("div"),i.__saturation_field.className="saturation-field",i.__field_knob=document.createElement("div"),i.__field_knob.className="field-knob",i.__field_knob_border="2px solid ",i.__hue_knob=document.createElement("div"),i.__hue_knob.className="hue-knob",i.__hue_field=document.createElement("div"),i.__hue_field.className="hue-field",i.__input=document.createElement("input"),i.__input.type="text",i.__input_textShadow="0 1px 1px ",st.bind(i.__input,"keydown",function(m){m.keyCode===13&&u.call(this)}),st.bind(i.__input,"blur",u),st.bind(i.__selector,"mousedown",function(){st.addClass(this,"drag").bind(window,"mouseup",function(){st.removeClass(r.__selector,"drag")})}),st.bind(i.__selector,"touchstart",function(){st.addClass(this,"drag").bind(window,"touchend",function(){st.removeClass(r.__selector,"drag")})});var s=document.createElement("div");gt.extend(i.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),gt.extend(i.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:i.__field_knob_border+(i.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),gt.extend(i.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),gt.extend(i.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),gt.extend(s.style,{width:"100%",height:"100%",background:"none"}),Fl(s,"top","rgba(0,0,0,0)","#000"),gt.extend(i.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),up(i.__hue_field),gt.extend(i.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:i.__input_textShadow+"rgba(0,0,0,0.7)"}),st.bind(i.__saturation_field,"mousedown",l),st.bind(i.__saturation_field,"touchstart",l),st.bind(i.__field_knob,"mousedown",l),st.bind(i.__field_knob,"touchstart",l),st.bind(i.__hue_field,"mousedown",o),st.bind(i.__hue_field,"touchstart",o);function l(m){p(m),st.bind(window,"mousemove",p),st.bind(window,"touchmove",p),st.bind(window,"mouseup",h),st.bind(window,"touchend",h)}function o(m){f(m),st.bind(window,"mousemove",f),st.bind(window,"touchmove",f),st.bind(window,"mouseup",c),st.bind(window,"touchend",c)}function h(){st.unbind(window,"mousemove",p),st.unbind(window,"touchmove",p),st.unbind(window,"mouseup",h),st.unbind(window,"touchend",h),d()}function c(){st.unbind(window,"mousemove",f),st.unbind(window,"touchmove",f),st.unbind(window,"mouseup",c),st.unbind(window,"touchend",c),d()}function u(){var m=Ls(this.value);m!==!1?(r.__color.__state=m,r.setValue(r.__color.toOriginal())):this.value=r.__color.toString()}function d(){r.__onFinishChange&&r.__onFinishChange.call(r,r.__color.toOriginal())}i.__saturation_field.appendChild(s),i.__selector.appendChild(i.__field_knob),i.__selector.appendChild(i.__saturation_field),i.__selector.appendChild(i.__hue_field),i.__hue_field.appendChild(i.__hue_knob),i.domElement.appendChild(i.__input),i.domElement.appendChild(i.__selector),i.updateDisplay();function p(m){m.type.indexOf("touch")===-1&&m.preventDefault();var g=r.__saturation_field.getBoundingClientRect(),v=m.touches&&m.touches[0]||m,x=v.clientX,_=v.clientY,M=(x-g.left)/(g.right-g.left),S=1-(_-g.top)/(g.bottom-g.top);return S>1?S=1:S<0&&(S=0),M>1?M=1:M<0&&(M=0),r.__color.v=S,r.__color.s=M,r.setValue(r.__color.toOriginal()),!1}function f(m){m.type.indexOf("touch")===-1&&m.preventDefault();var g=r.__hue_field.getBoundingClientRect(),v=m.touches&&m.touches[0]||m,x=v.clientY,_=1-(x-g.top)/(g.bottom-g.top);return _>1?_=1:_<0&&(_=0),r.__color.h=_*360,r.setValue(r.__color.toOriginal()),!1}return i}return gn(t,[{key:"updateDisplay",value:function(){var n=Ls(this.getValue());if(n!==!1){var i=!1;gt.each(Te.COMPONENTS,function(l){if(!gt.isUndefined(n[l])&&!gt.isUndefined(this.__color.__state[l])&&n[l]!==this.__color.__state[l])return i=!0,{}},this),i&&gt.extend(this.__color.__state,n)}gt.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var r=this.__color.v<.5||this.__color.s>.5?255:0,s=255-r;gt.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+r+","+r+","+r+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,Fl(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),gt.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+r+","+r+","+r+")",textShadow:this.__input_textShadow+"rgba("+s+","+s+","+s+",.7)"})}}]),t}(bi),hp=["-moz-","-o-","-webkit-","-ms-",""];function Fl(a,t,e,n){a.style.background="",gt.each(hp,function(i){a.style.cssText+="background: "+i+"linear-gradient("+t+", "+e+" 0%, "+n+" 100%); "})}function up(a){a.style.background="",a.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",a.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",a.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",a.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",a.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var dp={load:function(t,e){var n=e||document,i=n.createElement("link");i.type="text/css",i.rel="stylesheet",i.href=t,n.getElementsByTagName("head")[0].appendChild(i)},inject:function(t,e){var n=e||document,i=document.createElement("style");i.type="text/css",i.innerHTML=t;var r=n.getElementsByTagName("head")[0];try{r.appendChild(i)}catch{}}},pp=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,fp=function(t,e){var n=t[e];return gt.isArray(arguments[2])||gt.isObject(arguments[2])?new op(t,e,arguments[2]):gt.isNumber(n)?gt.isNumber(arguments[2])&&gt.isNumber(arguments[3])?gt.isNumber(arguments[4])?new Ns(t,e,arguments[2],arguments[3],arguments[4]):new Ns(t,e,arguments[2],arguments[3]):gt.isNumber(arguments[4])?new pa(t,e,{min:arguments[2],max:arguments[3],step:arguments[4]}):new pa(t,e,{min:arguments[2],max:arguments[3]}):gt.isString(n)?new lp(t,e):gt.isFunction(n)?new Lc(t,e,""):gt.isBoolean(n)?new Rc(t,e):null};function mp(a){setTimeout(a,1e3/60)}var vp=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||mp,gp=function(){function a(){vn(this,a),this.backgroundElement=document.createElement("div"),gt.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),st.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),gt.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var t=this;st.bind(this.backgroundElement,"click",function(){t.hide()})}return gn(a,[{key:"show",value:function(){var e=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),gt.defer(function(){e.backgroundElement.style.opacity=1,e.domElement.style.opacity=1,e.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var e=this,n=function i(){e.domElement.style.display="none",e.backgroundElement.style.display="none",st.unbind(e.domElement,"webkitTransitionEnd",i),st.unbind(e.domElement,"transitionend",i),st.unbind(e.domElement,"oTransitionEnd",i)};st.bind(this.domElement,"webkitTransitionEnd",n),st.bind(this.domElement,"transitionend",n),st.bind(this.domElement,"oTransitionEnd",n),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-st.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-st.getHeight(this.domElement)/2+"px"}}]),a}(),_p=np(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);dp.inject(_p);var zl="dg",Bl=72,Vl=20,wr="Default",yr=function(){try{return!!window.localStorage}catch{return!1}}(),Mr=void 0,kl=!0,Xi=void 0,xs=!1,Nc=[],de=function a(t){var e=this,n=t||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),st.addClass(this.domElement,zl),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],n=gt.defaults(n,{closeOnTop:!1,autoPlace:!0,width:a.DEFAULT_WIDTH}),n=gt.defaults(n,{resizable:n.autoPlace,hideable:n.autoPlace}),gt.isUndefined(n.load)?n.load={preset:wr}:n.preset&&(n.load.preset=n.preset),gt.isUndefined(n.parent)&&n.hideable&&Nc.push(this),n.resizable=gt.isUndefined(n.parent)&&n.resizable,n.autoPlace&&gt.isUndefined(n.scrollable)&&(n.scrollable=!0);var i=yr&&localStorage.getItem(qi(this,"isLocal"))==="true",r=void 0,s=void 0;if(Object.defineProperties(this,{parent:{get:function(){return n.parent}},scrollable:{get:function(){return n.scrollable}},autoPlace:{get:function(){return n.autoPlace}},closeOnTop:{get:function(){return n.closeOnTop}},preset:{get:function(){return e.parent?e.getRoot().preset:n.load.preset},set:function(d){e.parent?e.getRoot().preset=d:n.load.preset=d,Ep(this),e.revert()}},width:{get:function(){return n.width},set:function(d){n.width=d,Os(e,d)}},name:{get:function(){return n.name},set:function(d){n.name=d,s&&(s.innerHTML=n.name)}},closed:{get:function(){return n.closed},set:function(d){n.closed=d,n.closed?st.addClass(e.__ul,a.CLASS_CLOSED):st.removeClass(e.__ul,a.CLASS_CLOSED),this.onResize(),e.__closeButton&&(e.__closeButton.innerHTML=d?a.TEXT_OPEN:a.TEXT_CLOSED)}},load:{get:function(){return n.load}},useLocalStorage:{get:function(){return i},set:function(d){yr&&(i=d,d?st.bind(window,"unload",r):st.unbind(window,"unload",r),localStorage.setItem(qi(e,"isLocal"),d))}}}),gt.isUndefined(n.parent)){if(this.closed=n.closed||!1,st.addClass(this.domElement,a.CLASS_MAIN),st.makeSelectable(this.domElement,!1),yr&&i){e.useLocalStorage=!0;var l=localStorage.getItem(qi(this,"gui"));l&&(n.load=JSON.parse(l))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=a.TEXT_CLOSED,st.addClass(this.__closeButton,a.CLASS_CLOSE_BUTTON),n.closeOnTop?(st.addClass(this.__closeButton,a.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(st.addClass(this.__closeButton,a.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),st.bind(this.__closeButton,"click",function(){e.closed=!e.closed})}else{n.closed===void 0&&(n.closed=!0);var o=document.createTextNode(n.name);st.addClass(o,"controller-name"),s=qs(e,o);var h=function(d){return d.preventDefault(),e.closed=!e.closed,!1};st.addClass(this.__ul,a.CLASS_CLOSED),st.addClass(s,"title"),st.bind(s,"click",h),n.closed||(this.closed=!1)}n.autoPlace&&(gt.isUndefined(n.parent)&&(kl&&(Xi=document.createElement("div"),st.addClass(Xi,zl),st.addClass(Xi,a.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(Xi),kl=!1),Xi.appendChild(this.domElement),st.addClass(this.domElement,a.CLASS_AUTO_PLACE)),this.parent||Os(e,n.width)),this.__resizeHandler=function(){e.onResizeDebounced()},st.bind(window,"resize",this.__resizeHandler),st.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),st.bind(this.__ul,"transitionend",this.__resizeHandler),st.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),n.resizable&&Mp(this),r=function(){yr&&localStorage.getItem(qi(e,"isLocal"))==="true"&&localStorage.setItem(qi(e,"gui"),JSON.stringify(e.getSaveObject()))},this.saveToLocalStorageIfPossible=r;function c(){var u=e.getRoot();u.width+=1,gt.defer(function(){u.width-=1})}n.parent||c()};de.toggleHide=function(){xs=!xs,gt.each(Nc,function(a){a.domElement.style.display=xs?"none":""})};de.CLASS_AUTO_PLACE="a";de.CLASS_AUTO_PLACE_CONTAINER="ac";de.CLASS_MAIN="main";de.CLASS_CONTROLLER_ROW="cr";de.CLASS_TOO_TALL="taller-than-window";de.CLASS_CLOSED="closed";de.CLASS_CLOSE_BUTTON="close-button";de.CLASS_CLOSE_TOP="close-top";de.CLASS_CLOSE_BOTTOM="close-bottom";de.CLASS_DRAG="drag";de.DEFAULT_WIDTH=245;de.TEXT_CLOSED="Close Controls";de.TEXT_OPEN="Open Controls";de._keydownHandler=function(a){document.activeElement.type!=="text"&&(a.which===Bl||a.keyCode===Bl)&&de.toggleHide()};st.bind(window,"keydown",de._keydownHandler,!1);gt.extend(de.prototype,{add:function(t,e){return Er(this,t,e,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(t,e){return Er(this,t,e,{color:!0})},remove:function(t){this.__ul.removeChild(t.__li),this.__controllers.splice(this.__controllers.indexOf(t),1);var e=this;gt.defer(function(){e.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&Xi.removeChild(this.domElement);var t=this;gt.each(this.__folders,function(e){t.removeFolder(e)}),st.unbind(window,"keydown",de._keydownHandler,!1),Hl(this)},addFolder:function(t){if(this.__folders[t]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+t+'"');var e={name:t,parent:this};e.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[t]&&(e.closed=this.load.folders[t].closed,e.load=this.load.folders[t]);var n=new de(e);this.__folders[t]=n;var i=qs(this,n.domElement);return st.addClass(i,"folder"),n},removeFolder:function(t){this.__ul.removeChild(t.domElement.parentElement),delete this.__folders[t.name],this.load&&this.load.folders&&this.load.folders[t.name]&&delete this.load.folders[t.name],Hl(t);var e=this;gt.each(t.__folders,function(n){t.removeFolder(n)}),gt.defer(function(){e.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var t=this.getRoot();if(t.scrollable){var e=st.getOffset(t.__ul).top,n=0;gt.each(t.__ul.childNodes,function(i){t.autoPlace&&i===t.__save_row||(n+=st.getHeight(i))}),window.innerHeight-e-Vl<n?(st.addClass(t.domElement,de.CLASS_TOO_TALL),t.__ul.style.height=window.innerHeight-e-Vl+"px"):(st.removeClass(t.domElement,de.CLASS_TOO_TALL),t.__ul.style.height="auto")}t.__resize_handle&&gt.defer(function(){t.__resize_handle.style.height=t.__ul.offsetHeight+"px"}),t.__closeButton&&(t.__closeButton.style.width=t.width+"px")},onResizeDebounced:gt.debounce(function(){this.onResize()},50),remember:function(){if(gt.isUndefined(Mr)&&(Mr=new gp,Mr.domElement.innerHTML=pp),this.parent)throw new Error("You can only call remember on a top level GUI.");var t=this;gt.each(Array.prototype.slice.call(arguments),function(e){t.__rememberedObjects.length===0&&yp(t),t.__rememberedObjects.indexOf(e)===-1&&t.__rememberedObjects.push(e)}),this.autoPlace&&Os(this,this.width)},getRoot:function(){for(var t=this;t.parent;)t=t.parent;return t},getSaveObject:function(){var t=this.load;return t.closed=this.closed,this.__rememberedObjects.length>0&&(t.preset=this.preset,t.remembered||(t.remembered={}),t.remembered[this.preset]=aa(this)),t.folders={},gt.each(this.__folders,function(e,n){t.folders[n]=e.getSaveObject()}),t},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=aa(this),Ds(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(t){this.load.remembered||(this.load.remembered={},this.load.remembered[wr]=aa(this,!0)),this.load.remembered[t]=aa(this),this.preset=t,Us(this,t,!0),this.saveToLocalStorageIfPossible()},revert:function(t){gt.each(this.__controllers,function(e){this.getRoot().load.remembered?Ic(t||this.getRoot(),e):e.setValue(e.initialValue),e.__onFinishChange&&e.__onFinishChange.call(e,e.getValue())},this),gt.each(this.__folders,function(e){e.revert(e)}),t||Ds(this.getRoot(),!1)},listen:function(t){var e=this.__listening.length===0;this.__listening.push(t),e&&Dc(this.__listening)},updateDisplay:function(){gt.each(this.__controllers,function(t){t.updateDisplay()}),gt.each(this.__folders,function(t){t.updateDisplay()})}});function qs(a,t,e){var n=document.createElement("li");return t&&n.appendChild(t),e?a.__ul.insertBefore(n,e):a.__ul.appendChild(n),a.onResize(),n}function Hl(a){st.unbind(window,"resize",a.__resizeHandler),a.saveToLocalStorageIfPossible&&st.unbind(window,"unload",a.saveToLocalStorageIfPossible)}function Ds(a,t){var e=a.__preset_select[a.__preset_select.selectedIndex];t?e.innerHTML=e.value+"*":e.innerHTML=e.value}function xp(a,t,e){if(e.__li=t,e.__gui=a,gt.extend(e,{options:function(s){if(arguments.length>1){var l=e.__li.nextElementSibling;return e.remove(),Er(a,e.object,e.property,{before:l,factoryArgs:[gt.toArray(arguments)]})}if(gt.isArray(s)||gt.isObject(s)){var o=e.__li.nextElementSibling;return e.remove(),Er(a,e.object,e.property,{before:o,factoryArgs:[s]})}},name:function(s){return e.__li.firstElementChild.firstElementChild.innerHTML=s,e},listen:function(){return e.__gui.listen(e),e},remove:function(){return e.__gui.remove(e),e}}),e instanceof Ns){var n=new pa(e.object,e.property,{min:e.__min,max:e.__max,step:e.__step});gt.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(r){var s=e[r],l=n[r];e[r]=n[r]=function(){var o=Array.prototype.slice.call(arguments);return l.apply(n,o),s.apply(e,o)}}),st.addClass(t,"has-slider"),e.domElement.insertBefore(n.domElement,e.domElement.firstElementChild)}else if(e instanceof pa){var i=function(s){if(gt.isNumber(e.__min)&&gt.isNumber(e.__max)){var l=e.__li.firstElementChild.firstElementChild.innerHTML,o=e.__gui.__listening.indexOf(e)>-1;e.remove();var h=Er(a,e.object,e.property,{before:e.__li.nextElementSibling,factoryArgs:[e.__min,e.__max,e.__step]});return h.name(l),o&&h.listen(),h}return s};e.min=gt.compose(i,e.min),e.max=gt.compose(i,e.max)}else e instanceof Rc?(st.bind(t,"click",function(){st.fakeEvent(e.__checkbox,"click")}),st.bind(e.__checkbox,"click",function(r){r.stopPropagation()})):e instanceof Lc?(st.bind(t,"click",function(){st.fakeEvent(e.__button,"click")}),st.bind(t,"mouseover",function(){st.addClass(e.__button,"hover")}),st.bind(t,"mouseout",function(){st.removeClass(e.__button,"hover")})):e instanceof Is&&(st.addClass(t,"color"),e.updateDisplay=gt.compose(function(r){return t.style.borderLeftColor=e.__color.toString(),r},e.updateDisplay),e.updateDisplay());e.setValue=gt.compose(function(r){return a.getRoot().__preset_select&&e.isModified()&&Ds(a.getRoot(),!0),r},e.setValue)}function Ic(a,t){var e=a.getRoot(),n=e.__rememberedObjects.indexOf(t.object);if(n!==-1){var i=e.__rememberedObjectIndecesToControllers[n];if(i===void 0&&(i={},e.__rememberedObjectIndecesToControllers[n]=i),i[t.property]=t,e.load&&e.load.remembered){var r=e.load.remembered,s=void 0;if(r[a.preset])s=r[a.preset];else if(r[wr])s=r[wr];else return;if(s[n]&&s[n][t.property]!==void 0){var l=s[n][t.property];t.initialValue=l,t.setValue(l)}}}}function Er(a,t,e,n){if(t[e]===void 0)throw new Error('Object "'+t+'" has no property "'+e+'"');var i=void 0;if(n.color)i=new Is(t,e);else{var r=[t,e].concat(n.factoryArgs);i=fp.apply(a,r)}n.before instanceof bi&&(n.before=n.before.__li),Ic(a,i),st.addClass(i.domElement,"c");var s=document.createElement("span");st.addClass(s,"property-name"),s.innerHTML=i.property;var l=document.createElement("div");l.appendChild(s),l.appendChild(i.domElement);var o=qs(a,l,n.before);return st.addClass(o,de.CLASS_CONTROLLER_ROW),i instanceof Is?st.addClass(o,"color"):st.addClass(o,rp(i.getValue())),xp(a,o,i),a.__controllers.push(i),i}function qi(a,t){return document.location.href+"."+t}function Us(a,t,e){var n=document.createElement("option");n.innerHTML=t,n.value=t,a.__preset_select.appendChild(n),e&&(a.__preset_select.selectedIndex=a.__preset_select.length-1)}function Wl(a,t){t.style.display=a.useLocalStorage?"block":"none"}function yp(a){var t=a.__save_row=document.createElement("li");st.addClass(a.domElement,"has-save"),a.__ul.insertBefore(t,a.__ul.firstChild),st.addClass(t,"save-row");var e=document.createElement("span");e.innerHTML="&nbsp;",st.addClass(e,"button gears");var n=document.createElement("span");n.innerHTML="Save",st.addClass(n,"button"),st.addClass(n,"save");var i=document.createElement("span");i.innerHTML="New",st.addClass(i,"button"),st.addClass(i,"save-as");var r=document.createElement("span");r.innerHTML="Revert",st.addClass(r,"button"),st.addClass(r,"revert");var s=a.__preset_select=document.createElement("select");if(a.load&&a.load.remembered?gt.each(a.load.remembered,function(u,d){Us(a,d,d===a.preset)}):Us(a,wr,!1),st.bind(s,"change",function(){for(var u=0;u<a.__preset_select.length;u++)a.__preset_select[u].innerHTML=a.__preset_select[u].value;a.preset=this.value}),t.appendChild(s),t.appendChild(e),t.appendChild(n),t.appendChild(i),t.appendChild(r),yr){var l=document.getElementById("dg-local-explain"),o=document.getElementById("dg-local-storage"),h=document.getElementById("dg-save-locally");h.style.display="block",localStorage.getItem(qi(a,"isLocal"))==="true"&&o.setAttribute("checked","checked"),Wl(a,l),st.bind(o,"change",function(){a.useLocalStorage=!a.useLocalStorage,Wl(a,l)})}var c=document.getElementById("dg-new-constructor");st.bind(c,"keydown",function(u){u.metaKey&&(u.which===67||u.keyCode===67)&&Mr.hide()}),st.bind(e,"click",function(){c.innerHTML=JSON.stringify(a.getSaveObject(),void 0,2),Mr.show(),c.focus(),c.select()}),st.bind(n,"click",function(){a.save()}),st.bind(i,"click",function(){var u=prompt("Enter a new preset name.");u&&a.saveAs(u)}),st.bind(r,"click",function(){a.revert()})}function Mp(a){var t=void 0;a.__resize_handle=document.createElement("div"),gt.extend(a.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function e(r){return r.preventDefault(),a.width+=t-r.clientX,a.onResize(),t=r.clientX,!1}function n(){st.removeClass(a.__closeButton,de.CLASS_DRAG),st.unbind(window,"mousemove",e),st.unbind(window,"mouseup",n)}function i(r){return r.preventDefault(),t=r.clientX,st.addClass(a.__closeButton,de.CLASS_DRAG),st.bind(window,"mousemove",e),st.bind(window,"mouseup",n),!1}st.bind(a.__resize_handle,"mousedown",i),st.bind(a.__closeButton,"mousedown",i),a.domElement.insertBefore(a.__resize_handle,a.domElement.firstElementChild)}function Os(a,t){a.domElement.style.width=t+"px",a.__save_row&&a.autoPlace&&(a.__save_row.style.width=t+"px"),a.__closeButton&&(a.__closeButton.style.width=t+"px")}function aa(a,t){var e={};return gt.each(a.__rememberedObjects,function(n,i){var r={},s=a.__rememberedObjectIndecesToControllers[i];gt.each(s,function(l,o){r[o]=t?l.initialValue:l.getValue()}),e[i]=r}),e}function Ep(a){for(var t=0;t<a.__preset_select.length;t++)a.__preset_select[t].value===a.preset&&(a.__preset_select.selectedIndex=t)}function Dc(a){a.length!==0&&vp.call(window,function(){Dc(a)}),gt.each(a,function(t){t.updateDisplay()})}var bp=de,Sp=`uniform float  uBigWavesElevation;\r
uniform float  uTime;\r
uniform float uBigWavesSpeed;\r
uniform vec2   uBigWavesFrequency;\r
varying float vElevation;

uniform float  uSmallWavesElevation;\r
uniform float  uSmallWavesFrequency;\r
uniform float uSmallWavesSpeed;\r
 uniform float uSmallWavesIterations;

vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}\r
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}\r
vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

float cnoise(vec3 P){\r
  vec3 Pi0 = floor(P); 
  vec3 Pi1 = Pi0 + vec3(1.0); 
  Pi0 = mod(Pi0, 289.0);\r
  Pi1 = mod(Pi1, 289.0);\r
  vec3 Pf0 = fract(P); 
  vec3 Pf1 = Pf0 - vec3(1.0); 
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\r
  vec4 iy = vec4(Pi0.yy, Pi1.yy);\r
  vec4 iz0 = Pi0.zzzz;\r
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);\r
  vec4 ixy0 = permute(ixy + iz0);\r
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 / 7.0;\r
  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;\r
  gx0 = fract(gx0);\r
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\r
  vec4 sz0 = step(gz0, vec4(0.0));\r
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\r
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 / 7.0;\r
  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;\r
  gx1 = fract(gx1);\r
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\r
  vec4 sz1 = step(gz1, vec4(0.0));\r
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\r
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\r
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\r
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\r
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\r
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\r
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\r
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\r
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\r
  g000 *= norm0.x;\r
  g010 *= norm0.y;\r
  g100 *= norm0.z;\r
  g110 *= norm0.w;\r
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\r
  g001 *= norm1.x;\r
  g011 *= norm1.y;\r
  g101 *= norm1.z;\r
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);\r
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\r
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\r
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\r
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\r
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\r
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\r
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);\r
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\r
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\r
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \r
  return 2.2 * n_xyz;\r
}\r
void main(){\r
    vec4 modelPosition=modelMatrix *vec4(position,1.0);\r
    float elevation=\r
    sin(modelPosition.x * uBigWavesFrequency.x+uTime*uBigWavesSpeed)\r
    *sin(modelPosition.z * uBigWavesFrequency.y+uTime*uBigWavesSpeed)\r
    *uBigWavesElevation;\r
    for(float i=1.0;i<=uSmallWavesIterations;i++){\r
    elevation-=abs(cnoise(vec3(modelPosition.xz*uSmallWavesFrequency*i,uTime*0.2))*uSmallWavesElevation/i);

    }\r
 modelPosition.y += elevation;\r
    vec4 viewPosition=viewMatrix*modelPosition;\r
    vec4 projectedPosition=projectionMatrix*viewPosition;\r
    gl_Position=projectedPosition;\r
    vElevation=elevation;\r
}`,wp=`uniform vec3 uDepthColor;\r
uniform vec3 uSurfaceColor;\r
varying float vElevation;\r
uniform float uColorOffset;\r
uniform float uColorMultiplier;

void main()\r
{\r
    float mixStrength=(vElevation+uColorOffset)*uColorMultiplier;\r
    vec3 color=mix(uDepthColor,uSurfaceColor,mixStrength);\r
    gl_FragColor=vec4(color,1.0);\r
}`;function sa(a){throw new Error('Could not dynamically require "'+a+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Tp={exports:{}};(function(a,t){(function(e){a.exports=e()})(function(){return function e(n,i,r){function s(h,c){if(!i[h]){if(!n[h]){var u=typeof sa=="function"&&sa;if(!c&&u)return u(h,!0);if(l)return l(h,!0);throw new Error("Cannot find module '"+h+"'")}var d=i[h]={exports:{}};n[h][0].call(d.exports,function(p){var f=n[h][1][p];return s(f||p)},d,d.exports,e,n,i,r)}return i[h].exports}for(var l=typeof sa=="function"&&sa,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(e,n,i){n.exports={name:"cannon",version:"0.6.2",description:"A lightweight 3D physics engine written in JavaScript.",homepage:"https://github.com/schteppe/cannon.js",author:"Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",keywords:["cannon.js","cannon","physics","engine","3d"],main:"./build/cannon.js",engines:{node:"*"},repository:{type:"git",url:"https://github.com/schteppe/cannon.js.git"},bugs:{url:"https://github.com/schteppe/cannon.js/issues"},licenses:[{type:"MIT"}],devDependencies:{jshint:"latest","uglify-js":"latest",nodeunit:"^0.9.0",grunt:"~0.4.0","grunt-contrib-jshint":"~0.1.1","grunt-contrib-nodeunit":"^0.4.1","grunt-contrib-concat":"~0.1.3","grunt-contrib-uglify":"^0.5.1","grunt-browserify":"^2.1.4","grunt-contrib-yuidoc":"^0.5.2",browserify:"*"},dependencies:{}}},{}],2:[function(e,n,i){n.exports={version:e("../package.json").version,AABB:e("./collision/AABB"),ArrayCollisionMatrix:e("./collision/ArrayCollisionMatrix"),Body:e("./objects/Body"),Box:e("./shapes/Box"),Broadphase:e("./collision/Broadphase"),Constraint:e("./constraints/Constraint"),ContactEquation:e("./equations/ContactEquation"),Narrowphase:e("./world/Narrowphase"),ConeTwistConstraint:e("./constraints/ConeTwistConstraint"),ContactMaterial:e("./material/ContactMaterial"),ConvexPolyhedron:e("./shapes/ConvexPolyhedron"),Cylinder:e("./shapes/Cylinder"),DistanceConstraint:e("./constraints/DistanceConstraint"),Equation:e("./equations/Equation"),EventTarget:e("./utils/EventTarget"),FrictionEquation:e("./equations/FrictionEquation"),GSSolver:e("./solver/GSSolver"),GridBroadphase:e("./collision/GridBroadphase"),Heightfield:e("./shapes/Heightfield"),HingeConstraint:e("./constraints/HingeConstraint"),LockConstraint:e("./constraints/LockConstraint"),Mat3:e("./math/Mat3"),Material:e("./material/Material"),NaiveBroadphase:e("./collision/NaiveBroadphase"),ObjectCollisionMatrix:e("./collision/ObjectCollisionMatrix"),Pool:e("./utils/Pool"),Particle:e("./shapes/Particle"),Plane:e("./shapes/Plane"),PointToPointConstraint:e("./constraints/PointToPointConstraint"),Quaternion:e("./math/Quaternion"),Ray:e("./collision/Ray"),RaycastVehicle:e("./objects/RaycastVehicle"),RaycastResult:e("./collision/RaycastResult"),RigidVehicle:e("./objects/RigidVehicle"),RotationalEquation:e("./equations/RotationalEquation"),RotationalMotorEquation:e("./equations/RotationalMotorEquation"),SAPBroadphase:e("./collision/SAPBroadphase"),SPHSystem:e("./objects/SPHSystem"),Shape:e("./shapes/Shape"),Solver:e("./solver/Solver"),Sphere:e("./shapes/Sphere"),SplitSolver:e("./solver/SplitSolver"),Spring:e("./objects/Spring"),Trimesh:e("./shapes/Trimesh"),Vec3:e("./math/Vec3"),Vec3Pool:e("./utils/Vec3Pool"),World:e("./world/World")}},{"../package.json":1,"./collision/AABB":3,"./collision/ArrayCollisionMatrix":4,"./collision/Broadphase":5,"./collision/GridBroadphase":6,"./collision/NaiveBroadphase":7,"./collision/ObjectCollisionMatrix":8,"./collision/Ray":9,"./collision/RaycastResult":10,"./collision/SAPBroadphase":11,"./constraints/ConeTwistConstraint":12,"./constraints/Constraint":13,"./constraints/DistanceConstraint":14,"./constraints/HingeConstraint":15,"./constraints/LockConstraint":16,"./constraints/PointToPointConstraint":17,"./equations/ContactEquation":19,"./equations/Equation":20,"./equations/FrictionEquation":21,"./equations/RotationalEquation":22,"./equations/RotationalMotorEquation":23,"./material/ContactMaterial":24,"./material/Material":25,"./math/Mat3":27,"./math/Quaternion":28,"./math/Vec3":30,"./objects/Body":31,"./objects/RaycastVehicle":32,"./objects/RigidVehicle":33,"./objects/SPHSystem":34,"./objects/Spring":35,"./shapes/Box":37,"./shapes/ConvexPolyhedron":38,"./shapes/Cylinder":39,"./shapes/Heightfield":40,"./shapes/Particle":41,"./shapes/Plane":42,"./shapes/Shape":43,"./shapes/Sphere":44,"./shapes/Trimesh":45,"./solver/GSSolver":46,"./solver/Solver":47,"./solver/SplitSolver":48,"./utils/EventTarget":49,"./utils/Pool":51,"./utils/Vec3Pool":54,"./world/Narrowphase":55,"./world/World":56}],3:[function(e,n,i){var r=e("../math/Vec3");e("../utils/Utils"),n.exports=s;function s(h){h=h||{},this.lowerBound=new r,h.lowerBound&&this.lowerBound.copy(h.lowerBound),this.upperBound=new r,h.upperBound&&this.upperBound.copy(h.upperBound)}var l=new r;s.prototype.setFromPoints=function(h,c,u,d){var p=this.lowerBound,f=this.upperBound,m=u;p.copy(h[0]),m&&m.vmult(p,p),f.copy(p);for(var g=1;g<h.length;g++){var v=h[g];m&&(m.vmult(v,l),v=l),v.x>f.x&&(f.x=v.x),v.x<p.x&&(p.x=v.x),v.y>f.y&&(f.y=v.y),v.y<p.y&&(p.y=v.y),v.z>f.z&&(f.z=v.z),v.z<p.z&&(p.z=v.z)}return c&&(c.vadd(p,p),c.vadd(f,f)),d&&(p.x-=d,p.y-=d,p.z-=d,f.x+=d,f.y+=d,f.z+=d),this},s.prototype.copy=function(h){return this.lowerBound.copy(h.lowerBound),this.upperBound.copy(h.upperBound),this},s.prototype.clone=function(){return new s().copy(this)},s.prototype.extend=function(h){var c=h.lowerBound.x;this.lowerBound.x>c&&(this.lowerBound.x=c);var u=h.upperBound.x;this.upperBound.x<u&&(this.upperBound.x=u);var c=h.lowerBound.y;this.lowerBound.y>c&&(this.lowerBound.y=c);var u=h.upperBound.y;this.upperBound.y<u&&(this.upperBound.y=u);var c=h.lowerBound.z;this.lowerBound.z>c&&(this.lowerBound.z=c);var u=h.upperBound.z;this.upperBound.z<u&&(this.upperBound.z=u)},s.prototype.overlaps=function(h){var c=this.lowerBound,u=this.upperBound,d=h.lowerBound,p=h.upperBound;return(d.x<=u.x&&u.x<=p.x||c.x<=p.x&&p.x<=u.x)&&(d.y<=u.y&&u.y<=p.y||c.y<=p.y&&p.y<=u.y)&&(d.z<=u.z&&u.z<=p.z||c.z<=p.z&&p.z<=u.z)},s.prototype.contains=function(h){var c=this.lowerBound,u=this.upperBound,d=h.lowerBound,p=h.upperBound;return c.x<=d.x&&u.x>=p.x&&c.y<=d.y&&u.y>=p.y&&c.z<=d.z&&u.z>=p.z},s.prototype.getCorners=function(h,c,u,d,p,f,m,g){var v=this.lowerBound,x=this.upperBound;h.copy(v),c.set(x.x,v.y,v.z),u.set(x.x,x.y,v.z),d.set(v.x,x.y,x.z),p.set(x.x,v.y,v.z),f.set(v.x,x.y,v.z),m.set(v.x,v.y,x.z),g.copy(x)};var o=[new r,new r,new r,new r,new r,new r,new r,new r];s.prototype.toLocalFrame=function(h,c){var u=o,d=u[0],p=u[1],f=u[2],m=u[3],g=u[4],v=u[5],x=u[6],_=u[7];this.getCorners(d,p,f,m,g,v,x,_);for(var M=0;M!==8;M++){var S=u[M];h.pointToLocal(S,S)}return c.setFromPoints(u)},s.prototype.toWorldFrame=function(h,c){var u=o,d=u[0],p=u[1],f=u[2],m=u[3],g=u[4],v=u[5],x=u[6],_=u[7];this.getCorners(d,p,f,m,g,v,x,_);for(var M=0;M!==8;M++){var S=u[M];h.pointToWorld(S,S)}return c.setFromPoints(u)}},{"../math/Vec3":30,"../utils/Utils":53}],4:[function(e,n,i){n.exports=r;function r(){this.matrix=[]}r.prototype.get=function(s,l){if(s=s.index,l=l.index,l>s){var o=l;l=s,s=o}return this.matrix[(s*(s+1)>>1)+l-1]},r.prototype.set=function(s,l,o){if(s=s.index,l=l.index,l>s){var h=l;l=s,s=h}this.matrix[(s*(s+1)>>1)+l-1]=o?1:0},r.prototype.reset=function(){for(var s=0,l=this.matrix.length;s!==l;s++)this.matrix[s]=0},r.prototype.setNumObjects=function(s){this.matrix.length=s*(s-1)>>1}},{}],5:[function(e,n,i){var r=e("../objects/Body"),s=e("../math/Vec3"),l=e("../math/Quaternion");e("../shapes/Shape"),e("../shapes/Plane"),n.exports=o;function o(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}o.prototype.collisionPairs=function(m,g,v){throw new Error("collisionPairs not implemented for this BroadPhase class!")};var h=r.STATIC|r.KINEMATIC;o.prototype.needBroadphaseCollision=function(m,g){return!(!(m.collisionFilterGroup&g.collisionFilterMask)||!(g.collisionFilterGroup&m.collisionFilterMask)||(m.type&h||m.sleepState===r.SLEEPING)&&(g.type&h||g.sleepState===r.SLEEPING))},o.prototype.intersectionTest=function(m,g,v,x){this.useBoundingBoxes?this.doBoundingBoxBroadphase(m,g,v,x):this.doBoundingSphereBroadphase(m,g,v,x)};var c=new s;new s,new l,new s,o.prototype.doBoundingSphereBroadphase=function(m,g,v,x){var _=c;g.position.vsub(m.position,_);var M=Math.pow(m.boundingRadius+g.boundingRadius,2),S=_.norm2();S<M&&(v.push(m),x.push(g))},o.prototype.doBoundingBoxBroadphase=function(m,g,v,x){m.aabbNeedsUpdate&&m.computeAABB(),g.aabbNeedsUpdate&&g.computeAABB(),m.aabb.overlaps(g.aabb)&&(v.push(m),x.push(g))};var u={keys:[]},d=[],p=[];o.prototype.makePairsUnique=function(m,g){for(var v=u,x=d,_=p,M=m.length,S=0;S!==M;S++)x[S]=m[S],_[S]=g[S];m.length=0,g.length=0;for(var S=0;S!==M;S++){var P=x[S].id,T=_[S].id,z=P<T?P+","+T:T+","+P;v[z]=S,v.keys.push(z)}for(var S=0;S!==v.keys.length;S++){var z=v.keys.pop(),k=v[z];m.push(x[k]),g.push(_[k]),delete v[z]}},o.prototype.setWorld=function(m){};var f=new s;o.boundingSphereCheck=function(m,g){var v=f;return m.position.vsub(g.position,v),Math.pow(m.shape.boundingSphereRadius+g.shape.boundingSphereRadius,2)>v.norm2()},o.prototype.aabbQuery=function(m,g,v){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Plane":42,"../shapes/Shape":43}],6:[function(e,n,i){n.exports=o;var r=e("./Broadphase"),s=e("../math/Vec3"),l=e("../shapes/Shape");function o(c,u,d,p,f){r.apply(this),this.nx=d||10,this.ny=p||10,this.nz=f||10,this.aabbMin=c||new s(100,100,100),this.aabbMax=u||new s(-100,-100,-100);var m=this.nx*this.ny*this.nz;if(m<=0)throw"GridBroadphase: Each dimension's n must be >0";this.bins=[],this.binLengths=[],this.bins.length=m,this.binLengths.length=m;for(var g=0;g<m;g++)this.bins[g]=[],this.binLengths[g]=0}o.prototype=new r,o.prototype.constructor=o;var h=new s;new s,o.prototype.collisionPairs=function(c,u,d){var p=c.numObjects(),f=c.bodies,F=this.aabbMax,N=this.aabbMin,m=this.nx,g=this.ny,v=this.nz,x=g*v,_=v,M=1,S=F.x,P=F.y,T=F.z,z=N.x,k=N.y,L=N.z,D=m/(S-z),A=g/(P-k),V=v/(T-L),j=(S-z)/m,Q=(P-k)/g,pt=(T-L)/v,H=Math.sqrt(j*j+Q*Q+pt*pt)*.5,O=l.types,X=O.SPHERE,Z=O.PLANE;O.BOX,O.COMPOUND,O.CONVEXPOLYHEDRON;for(var R=this.bins,W=this.binLengths,E=this.bins.length,y=0;y!==E;y++)W[y]=0;var b=Math.ceil,N=Math.min,F=Math.max;function B(jt,Ae,tt,At,Xt,Kt,rt){var pe=(jt-z)*D|0,ce=(Ae-k)*A|0,re=(tt-L)*V|0,ze=b((At-z)*D),Ce=b((Xt-k)*A),se=b((Kt-L)*V);pe<0?pe=0:pe>=m&&(pe=m-1),ce<0?ce=0:ce>=g&&(ce=g-1),re<0?re=0:re>=v&&(re=v-1),ze<0?ze=0:ze>=m&&(ze=m-1),Ce<0?Ce=0:Ce>=g&&(Ce=g-1),se<0?se=0:se>=v&&(se=v-1),pe*=x,ce*=_,re*=M,ze*=x,Ce*=_,se*=M;for(var ge=pe;ge<=ze;ge+=x)for(var Be=ce;Be<=Ce;Be+=_)for(var Re=re;Re<=se;Re+=M){var Ve=ge+Be+Re;R[Ve][W[Ve]++]=rt}}for(var y=0;y!==p;y++){var U=f[y],G=U.shape;switch(G.type){case X:var J=U.position.x,ft=U.position.y,dt=U.position.z,w=G.radius;B(J-w,ft-w,dt-w,J+w,ft+w,dt+w,U);break;case Z:G.worldNormalNeedsUpdate&&G.computeWorldNormal(U.quaternion);var K=G.worldNormal,q=z+j*.5-U.position.x,it=k+Q*.5-U.position.y,ot=L+pt*.5-U.position.z,yt=h;yt.set(q,it,ot);for(var lt=0,St=0;lt!==m;lt++,St+=x,yt.y=it,yt.x+=j)for(var It=0,bt=0;It!==g;It++,bt+=_,yt.z=ot,yt.y+=Q)for(var Ut=0,Mt=0;Ut!==v;Ut++,Mt+=M,yt.z+=pt)if(yt.dot(K)<H){var Ft=St+bt+Mt;R[Ft][W[Ft]++]=U}break;default:U.aabbNeedsUpdate&&U.computeAABB(),B(U.aabb.lowerBound.x,U.aabb.lowerBound.y,U.aabb.lowerBound.z,U.aabb.upperBound.x,U.aabb.upperBound.y,U.aabb.upperBound.z,U);break}}for(var y=0;y!==E;y++){var Ot=W[y];if(Ot>1)for(var Lt=R[y],lt=0;lt!==Ot;lt++)for(var U=Lt[lt],It=0;It!==lt;It++){var Bt=Lt[It];this.needBroadphaseCollision(U,Bt)&&this.intersectionTest(U,Bt,u,d)}}this.makePairsUnique(u,d)}},{"../math/Vec3":30,"../shapes/Shape":43,"./Broadphase":5}],7:[function(e,n,i){n.exports=l;var r=e("./Broadphase"),s=e("./AABB");function l(){r.apply(this)}l.prototype=new r,l.prototype.constructor=l,l.prototype.collisionPairs=function(o,h,c){var u=o.bodies,d=u.length,p,f,m,g;for(p=0;p!==d;p++)for(f=0;f!==p;f++)m=u[p],g=u[f],this.needBroadphaseCollision(m,g)&&this.intersectionTest(m,g,h,c)},new s,l.prototype.aabbQuery=function(o,h,c){c=c||[];for(var u=0;u<o.bodies.length;u++){var d=o.bodies[u];d.aabbNeedsUpdate&&d.computeAABB(),d.aabb.overlaps(h)&&c.push(d)}return c}},{"./AABB":3,"./Broadphase":5}],8:[function(e,n,i){n.exports=r;function r(){this.matrix={}}r.prototype.get=function(s,l){if(s=s.id,l=l.id,l>s){var o=l;l=s,s=o}return s+"-"+l in this.matrix},r.prototype.set=function(s,l,o){if(s=s.id,l=l.id,l>s){var h=l;l=s,s=h}o?this.matrix[s+"-"+l]=!0:delete this.matrix[s+"-"+l]},r.prototype.reset=function(){this.matrix={}},r.prototype.setNumObjects=function(s){}},{}],9:[function(e,n,i){n.exports=u;var r=e("../math/Vec3"),s=e("../math/Quaternion"),l=e("../math/Transform");e("../shapes/ConvexPolyhedron"),e("../shapes/Box");var o=e("../collision/RaycastResult"),h=e("../shapes/Shape"),c=e("../collision/AABB");function u(E,y){this.from=E?E.clone():new r,this.to=y?y.clone():new r,this._direction=new r,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=u.ANY,this.result=new o,this.hasHit=!1,this.callback=function(b){}}u.prototype.constructor=u,u.CLOSEST=1,u.ANY=2,u.ALL=4;var d=new c,p=[];u.prototype.intersectWorld=function(E,y){return this.mode=y.mode||u.ANY,this.result=y.result||new o,this.skipBackfaces=!!y.skipBackfaces,this.collisionFilterMask=typeof y.collisionFilterMask<"u"?y.collisionFilterMask:-1,this.collisionFilterGroup=typeof y.collisionFilterGroup<"u"?y.collisionFilterGroup:-1,y.from&&this.from.copy(y.from),y.to&&this.to.copy(y.to),this.callback=y.callback||function(){},this.hasHit=!1,this.result.reset(),this._updateDirection(),this.getAABB(d),p.length=0,E.broadphase.aabbQuery(E,d,p),this.intersectBodies(p),this.hasHit};var f=new r,m=new r;u.pointInTriangle=g;function g(E,y,b,N){N.vsub(y,Z),b.vsub(y,f),E.vsub(y,m);var F=Z.dot(Z),B=Z.dot(f),U=Z.dot(m),G=f.dot(f),J=f.dot(m),ft,dt;return(ft=G*U-B*J)>=0&&(dt=F*J-B*U)>=0&&ft+dt<F*G-B*B}var v=new r,x=new s;u.prototype.intersectBody=function(E,y){y&&(this.result=y,this._updateDirection());var b=this.checkCollisionResponse;if(!(b&&!E.collisionResponse)&&!(!(this.collisionFilterGroup&E.collisionFilterMask)||!(E.collisionFilterGroup&this.collisionFilterMask)))for(var N=v,F=x,B=0,U=E.shapes.length;B<U;B++){var G=E.shapes[B];if(!(b&&!G.collisionResponse)&&(E.quaternion.mult(E.shapeOrientations[B],F),E.quaternion.vmult(E.shapeOffsets[B],N),N.vadd(E.position,N),this.intersectShape(G,F,N,E),this.result._shouldStop))break}},u.prototype.intersectBodies=function(E,y){y&&(this.result=y,this._updateDirection());for(var b=0,N=E.length;!this.result._shouldStop&&b<N;b++)this.intersectBody(E[b])},u.prototype._updateDirection=function(){this.to.vsub(this.from,this._direction),this._direction.normalize()},u.prototype.intersectShape=function(E,y,b,N){var F=this.from,B=W(F,this._direction,b);if(!(B>E.boundingSphereRadius)){var U=this[E.type];U&&U.call(this,E,y,b,N)}},new r,new r;var _=new r,M=new r,S=new r,P=new r;new r,new o,u.prototype.intersectBox=function(E,y,b,N){return this.intersectConvex(E.convexPolyhedronRepresentation,y,b,N)},u.prototype[h.types.BOX]=u.prototype.intersectBox,u.prototype.intersectPlane=function(E,y,b,N){var F=this.from,B=this.to,U=this._direction,G=new r(0,0,1);y.vmult(G,G);var J=new r;F.vsub(b,J);var ft=J.dot(G);B.vsub(b,J);var dt=J.dot(G);if(!(ft*dt>0)&&!(F.distanceTo(B)<ft)){var w=G.dot(U);if(!(Math.abs(w)<this.precision)){var K=new r,q=new r,it=new r;F.vsub(b,K);var ot=-G.dot(K)/w;U.scale(ot,q),F.vadd(q,it),this.reportIntersection(G,it,E,N,-1)}}},u.prototype[h.types.PLANE]=u.prototype.intersectPlane,u.prototype.getAABB=function(E){var y=this.to,b=this.from;E.lowerBound.x=Math.min(y.x,b.x),E.lowerBound.y=Math.min(y.y,b.y),E.lowerBound.z=Math.min(y.z,b.z),E.upperBound.x=Math.max(y.x,b.x),E.upperBound.y=Math.max(y.y,b.y),E.upperBound.z=Math.max(y.z,b.z)};var T={faceList:[0]};u.prototype.intersectHeightfield=function(E,y,b,N){E.data,E.elementSize;var F=new r,B=new u(this.from,this.to);l.pointToLocalFrame(b,y,B.from,B.from),l.pointToLocalFrame(b,y,B.to,B.to);var U=[],G=null,J=null,ft=null,dt=null,w=E.getIndexOfPosition(B.from.x,B.from.y,U,!1);if(w&&(G=U[0],J=U[1],ft=U[0],dt=U[1]),w=E.getIndexOfPosition(B.to.x,B.to.y,U,!1),w&&((G===null||U[0]<G)&&(G=U[0]),(ft===null||U[0]>ft)&&(ft=U[0]),(J===null||U[1]<J)&&(J=U[1]),(dt===null||U[1]>dt)&&(dt=U[1])),G!==null){var K=[];E.getRectMinMax(G,J,ft,dt,K),K[0],K[1];for(var q=G;q<=ft;q++)for(var it=J;it<=dt;it++){if(this.result._shouldStop||(E.getConvexTrianglePillar(q,it,!1),l.pointToWorldFrame(b,y,E.pillarOffset,F),this.intersectConvex(E.pillarConvex,y,F,N,T),this.result._shouldStop))return;E.getConvexTrianglePillar(q,it,!0),l.pointToWorldFrame(b,y,E.pillarOffset,F),this.intersectConvex(E.pillarConvex,y,F,N,T)}}},u.prototype[h.types.HEIGHTFIELD]=u.prototype.intersectHeightfield;var z=new r,k=new r;u.prototype.intersectSphere=function(E,y,b,N){var F=this.from,B=this.to,U=E.radius,G=Math.pow(B.x-F.x,2)+Math.pow(B.y-F.y,2)+Math.pow(B.z-F.z,2),J=2*((B.x-F.x)*(F.x-b.x)+(B.y-F.y)*(F.y-b.y)+(B.z-F.z)*(F.z-b.z)),ft=Math.pow(F.x-b.x,2)+Math.pow(F.y-b.y,2)+Math.pow(F.z-b.z,2)-Math.pow(U,2),dt=Math.pow(J,2)-4*G*ft,w=z,K=k;if(!(dt<0))if(dt===0)F.lerp(B,dt,w),w.vsub(b,K),K.normalize(),this.reportIntersection(K,w,E,N,-1);else{var q=(-J-Math.sqrt(dt))/(2*G),it=(-J+Math.sqrt(dt))/(2*G);if(q>=0&&q<=1&&(F.lerp(B,q,w),w.vsub(b,K),K.normalize(),this.reportIntersection(K,w,E,N,-1)),this.result._shouldStop)return;it>=0&&it<=1&&(F.lerp(B,it,w),w.vsub(b,K),K.normalize(),this.reportIntersection(K,w,E,N,-1))}},u.prototype[h.types.SPHERE]=u.prototype.intersectSphere;var L=new r;new r,new r;var D=new r;u.prototype.intersectConvex=function(y,b,N,F,B){for(var U=L,G=D,J=B&&B.faceList||null,ft=y.faces,dt=y.vertices,w=y.faceNormals,K=this._direction,q=this.from,it=this.to,ot=q.distanceTo(it),yt=J?J.length:ft.length,lt=this.result,St=0;!lt._shouldStop&&St<yt;St++){var It=J?J[St]:St,bt=ft[It],Ut=w[It],Mt=b,Ft=N;G.copy(dt[bt[0]]),Mt.vmult(G,G),G.vadd(Ft,G),G.vsub(q,G),Mt.vmult(Ut,U);var Ot=K.dot(U);if(!(Math.abs(Ot)<this.precision)){var Lt=U.dot(G)/Ot;if(!(Lt<0)){K.mult(Lt,_),_.vadd(q,_),M.copy(dt[bt[0]]),Mt.vmult(M,M),Ft.vadd(M,M);for(var Bt=1;!lt._shouldStop&&Bt<bt.length-1;Bt++){S.copy(dt[bt[Bt]]),P.copy(dt[bt[Bt+1]]),Mt.vmult(S,S),Mt.vmult(P,P),Ft.vadd(S,S),Ft.vadd(P,P);var jt=_.distanceTo(q);!(g(_,M,S,P)||g(_,S,M,P))||jt>ot||this.reportIntersection(U,_,y,F,It)}}}}},u.prototype[h.types.CONVEXPOLYHEDRON]=u.prototype.intersectConvex;var A=new r,V=new r,j=new r,Q=new r,pt=new r,H=new r;new c;var O=[],X=new l;u.prototype.intersectTrimesh=function(y,b,N,F,B){var U=A,G=O,J=X,ft=D,dt=V,w=j,K=Q,q=H,it=pt;B&&B.faceList;var ot=y.indices;y.vertices,y.faceNormals;var yt=this.from,lt=this.to,St=this._direction;J.position.copy(N),J.quaternion.copy(b),l.vectorToLocalFrame(N,b,St,dt),l.pointToLocalFrame(N,b,yt,w),l.pointToLocalFrame(N,b,lt,K);var It=w.distanceSquared(K);y.tree.rayQuery(this,J,G);for(var bt=0,Ut=G.length;!this.result._shouldStop&&bt!==Ut;bt++){var Mt=G[bt];y.getNormal(Mt,U),y.getVertex(ot[Mt*3],M),M.vsub(w,ft);var Ft=dt.dot(U),Ot=U.dot(ft)/Ft;if(!(Ot<0)){dt.scale(Ot,_),_.vadd(w,_),y.getVertex(ot[Mt*3+1],S),y.getVertex(ot[Mt*3+2],P);var Lt=_.distanceSquared(w);!(g(_,S,M,P)||g(_,M,S,P))||Lt>It||(l.vectorToWorldFrame(b,U,it),l.pointToWorldFrame(N,b,_,q),this.reportIntersection(it,q,y,F,Mt))}}G.length=0},u.prototype[h.types.TRIMESH]=u.prototype.intersectTrimesh,u.prototype.reportIntersection=function(E,y,b,N,F){var B=this.from,U=this.to,G=B.distanceTo(y),J=this.result;if(!(this.skipBackfaces&&E.dot(this._direction)>0))switch(J.hitFaceIndex=typeof F<"u"?F:-1,this.mode){case u.ALL:this.hasHit=!0,J.set(B,U,E,y,b,N,G),J.hasHit=!0,this.callback(J);break;case u.CLOSEST:(G<J.distance||!J.hasHit)&&(this.hasHit=!0,J.hasHit=!0,J.set(B,U,E,y,b,N,G));break;case u.ANY:this.hasHit=!0,J.hasHit=!0,J.set(B,U,E,y,b,N,G),J._shouldStop=!0;break}};var Z=new r,R=new r;function W(E,y,b){b.vsub(E,Z);var N=Z.dot(y);y.mult(N,R),R.vadd(E,R);var F=b.distanceTo(R);return F}},{"../collision/AABB":3,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/Box":37,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43}],10:[function(e,n,i){var r=e("../math/Vec3");n.exports=s;function s(){this.rayFromWorld=new r,this.rayToWorld=new r,this.hitNormalWorld=new r,this.hitPointWorld=new r,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1}s.prototype.reset=function(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1},s.prototype.abort=function(){this._shouldStop=!0},s.prototype.set=function(l,o,h,c,u,d,p){this.rayFromWorld.copy(l),this.rayToWorld.copy(o),this.hitNormalWorld.copy(h),this.hitPointWorld.copy(c),this.shape=u,this.body=d,this.distance=p}},{"../math/Vec3":30}],11:[function(e,n,i){e("../shapes/Shape");var r=e("../collision/Broadphase");n.exports=s;function s(l){r.apply(this),this.axisList=[],this.world=null,this.axisIndex=0;var o=this.axisList;this._addBodyHandler=function(h){o.push(h.body)},this._removeBodyHandler=function(h){var c=o.indexOf(h.body);c!==-1&&o.splice(c,1)},l&&this.setWorld(l)}s.prototype=new r,s.prototype.setWorld=function(l){this.axisList.length=0;for(var o=0;o<l.bodies.length;o++)this.axisList.push(l.bodies[o]);l.removeEventListener("addBody",this._addBodyHandler),l.removeEventListener("removeBody",this._removeBodyHandler),l.addEventListener("addBody",this._addBodyHandler),l.addEventListener("removeBody",this._removeBodyHandler),this.world=l,this.dirty=!0},s.insertionSortX=function(l){for(var o=1,h=l.length;o<h;o++){for(var c=l[o],u=o-1;u>=0&&!(l[u].aabb.lowerBound.x<=c.aabb.lowerBound.x);u--)l[u+1]=l[u];l[u+1]=c}return l},s.insertionSortY=function(l){for(var o=1,h=l.length;o<h;o++){for(var c=l[o],u=o-1;u>=0&&!(l[u].aabb.lowerBound.y<=c.aabb.lowerBound.y);u--)l[u+1]=l[u];l[u+1]=c}return l},s.insertionSortZ=function(l){for(var o=1,h=l.length;o<h;o++){for(var c=l[o],u=o-1;u>=0&&!(l[u].aabb.lowerBound.z<=c.aabb.lowerBound.z);u--)l[u+1]=l[u];l[u+1]=c}return l},s.prototype.collisionPairs=function(l,o,h){var c=this.axisList,u=c.length,d=this.axisIndex,p,f;for(this.dirty&&(this.sortList(),this.dirty=!1),p=0;p!==u;p++){var m=c[p];for(f=p+1;f<u;f++){var g=c[f];if(this.needBroadphaseCollision(m,g)){if(!s.checkBounds(m,g,d))break;this.intersectionTest(m,g,o,h)}}}},s.prototype.sortList=function(){for(var l=this.axisList,o=this.axisIndex,h=l.length,c=0;c!==h;c++){var u=l[c];u.aabbNeedsUpdate&&u.computeAABB()}o===0?s.insertionSortX(l):o===1?s.insertionSortY(l):o===2&&s.insertionSortZ(l)},s.checkBounds=function(l,o,h){var c,u;h===0?(c=l.position.x,u=o.position.x):h===1?(c=l.position.y,u=o.position.y):h===2&&(c=l.position.z,u=o.position.z);var d=l.boundingRadius,p=o.boundingRadius,f=c+d,m=u-p;return m<f},s.prototype.autoDetectAxis=function(){for(var l=0,o=0,h=0,c=0,u=0,d=0,p=this.axisList,f=p.length,m=1/f,g=0;g!==f;g++){var v=p[g],x=v.position.x;l+=x,o+=x*x;var _=v.position.y;h+=_,c+=_*_;var M=v.position.z;u+=M,d+=M*M}var S=o-l*l*m,P=c-h*h*m,T=d-u*u*m;S>P?S>T?this.axisIndex=0:this.axisIndex=2:P>T?this.axisIndex=1:this.axisIndex=2},s.prototype.aabbQuery=function(l,o,h){h=h||[],this.dirty&&(this.sortList(),this.dirty=!1);var c=this.axisIndex,u="x";c===1&&(u="y"),c===2&&(u="z");var d=this.axisList;o.lowerBound[u],o.upperBound[u];for(var p=0;p<d.length;p++){var f=d[p];f.aabbNeedsUpdate&&f.computeAABB(),f.aabb.overlaps(o)&&h.push(f)}return h}},{"../collision/Broadphase":5,"../shapes/Shape":43}],12:[function(e,n,i){n.exports=h,e("./Constraint");var r=e("./PointToPointConstraint"),s=e("../equations/ConeEquation"),l=e("../equations/RotationalEquation");e("../equations/ContactEquation");var o=e("../math/Vec3");function h(c,u,d){d=d||{};var p=typeof d.maxForce<"u"?d.maxForce:1e6,f=d.pivotA?d.pivotA.clone():new o,m=d.pivotB?d.pivotB.clone():new o;this.axisA=d.axisA?d.axisA.clone():new o,this.axisB=d.axisB?d.axisB.clone():new o,r.call(this,c,f,u,m,p),this.collideConnected=!!d.collideConnected,this.angle=typeof d.angle<"u"?d.angle:0;var g=this.coneEquation=new s(c,u,d),v=this.twistEquation=new l(c,u,d);this.twistAngle=typeof d.twistAngle<"u"?d.twistAngle:0,g.maxForce=0,g.minForce=-p,v.maxForce=0,v.minForce=-p,this.equations.push(g,v)}h.prototype=new r,h.constructor=h,new o,new o,h.prototype.update=function(){var c=this.bodyA,u=this.bodyB,d=this.coneEquation,p=this.twistEquation;r.prototype.update.call(this),c.vectorToWorldFrame(this.axisA,d.axisA),u.vectorToWorldFrame(this.axisB,d.axisB),this.axisA.tangents(p.axisA,p.axisA),c.vectorToWorldFrame(p.axisA,p.axisA),this.axisB.tangents(p.axisB,p.axisB),u.vectorToWorldFrame(p.axisB,p.axisB),d.angle=this.angle,p.maxAngle=this.twistAngle}},{"../equations/ConeEquation":18,"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],13:[function(e,n,i){n.exports=s;var r=e("../utils/Utils");function s(l,o,h){h=r.defaults(h,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=l,this.bodyB=o,this.id=s.idCounter++,this.collideConnected=h.collideConnected,h.wakeUpBodies&&(l&&l.wakeUp(),o&&o.wakeUp())}s.prototype.update=function(){throw new Error("method update() not implmemented in this Constraint subclass!")},s.prototype.enable=function(){for(var l=this.equations,o=0;o<l.length;o++)l[o].enabled=!0},s.prototype.disable=function(){for(var l=this.equations,o=0;o<l.length;o++)l[o].enabled=!1},s.idCounter=0},{"../utils/Utils":53}],14:[function(e,n,i){n.exports=l;var r=e("./Constraint"),s=e("../equations/ContactEquation");function l(o,h,c,u){r.call(this,o,h),typeof c>"u"&&(c=o.position.distanceTo(h.position)),typeof u>"u"&&(u=1e6),this.distance=c;var d=this.distanceEquation=new s(o,h);this.equations.push(d),d.minForce=-u,d.maxForce=u}l.prototype=new r,l.prototype.update=function(){var o=this.bodyA,h=this.bodyB,c=this.distanceEquation,u=this.distance*.5,d=c.ni;h.position.vsub(o.position,d),d.normalize(),d.mult(u,c.ri),d.mult(-u,c.rj)}},{"../equations/ContactEquation":19,"./Constraint":13}],15:[function(e,n,i){n.exports=h,e("./Constraint");var r=e("./PointToPointConstraint"),s=e("../equations/RotationalEquation"),l=e("../equations/RotationalMotorEquation");e("../equations/ContactEquation");var o=e("../math/Vec3");function h(d,p,f){f=f||{};var m=typeof f.maxForce<"u"?f.maxForce:1e6,g=f.pivotA?f.pivotA.clone():new o,v=f.pivotB?f.pivotB.clone():new o;r.call(this,d,g,p,v,m);var x=this.axisA=f.axisA?f.axisA.clone():new o(1,0,0);x.normalize();var _=this.axisB=f.axisB?f.axisB.clone():new o(1,0,0);_.normalize();var M=this.rotationalEquation1=new s(d,p,f),S=this.rotationalEquation2=new s(d,p,f),P=this.motorEquation=new l(d,p,m);P.enabled=!1,this.equations.push(M,S,P)}h.prototype=new r,h.constructor=h,h.prototype.enableMotor=function(){this.motorEquation.enabled=!0},h.prototype.disableMotor=function(){this.motorEquation.enabled=!1},h.prototype.setMotorSpeed=function(d){this.motorEquation.targetVelocity=d},h.prototype.setMotorMaxForce=function(d){this.motorEquation.maxForce=d,this.motorEquation.minForce=-d};var c=new o,u=new o;h.prototype.update=function(){var d=this.bodyA,p=this.bodyB,f=this.motorEquation,m=this.rotationalEquation1,g=this.rotationalEquation2,v=c,x=u,_=this.axisA,M=this.axisB;r.prototype.update.call(this),d.quaternion.vmult(_,v),p.quaternion.vmult(M,x),v.tangents(m.axisA,g.axisA),m.axisB.copy(x),g.axisB.copy(x),this.motorEquation.enabled&&(d.quaternion.vmult(this.axisA,f.axisA),p.quaternion.vmult(this.axisB,f.axisB))}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],16:[function(e,n,i){n.exports=o,e("./Constraint");var r=e("./PointToPointConstraint"),s=e("../equations/RotationalEquation");e("../equations/RotationalMotorEquation"),e("../equations/ContactEquation");var l=e("../math/Vec3");function o(h,c,u){u=u||{};var d=typeof u.maxForce<"u"?u.maxForce:1e6,p=new l,f=new l,m=new l;h.position.vadd(c.position,m),m.scale(.5,m),c.pointToLocalFrame(m,f),h.pointToLocalFrame(m,p),r.call(this,h,p,c,f,d);var g=this.rotationalEquation1=new s(h,c,u),v=this.rotationalEquation2=new s(h,c,u),x=this.rotationalEquation3=new s(h,c,u);this.equations.push(g,v,x)}o.prototype=new r,o.constructor=o,new l,new l,o.prototype.update=function(){var h=this.bodyA,c=this.bodyB;this.motorEquation;var u=this.rotationalEquation1,d=this.rotationalEquation2,p=this.rotationalEquation3;r.prototype.update.call(this),h.vectorToWorldFrame(l.UNIT_X,u.axisA),c.vectorToWorldFrame(l.UNIT_Y,u.axisB),h.vectorToWorldFrame(l.UNIT_Y,d.axisA),c.vectorToWorldFrame(l.UNIT_Z,d.axisB),h.vectorToWorldFrame(l.UNIT_Z,p.axisA),c.vectorToWorldFrame(l.UNIT_X,p.axisB)}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],17:[function(e,n,i){n.exports=o;var r=e("./Constraint"),s=e("../equations/ContactEquation"),l=e("../math/Vec3");function o(h,c,u,d,p){r.call(this,h,u),p=typeof p<"u"?p:1e6,this.pivotA=c?c.clone():new l,this.pivotB=d?d.clone():new l;var f=this.equationX=new s(h,u),m=this.equationY=new s(h,u),g=this.equationZ=new s(h,u);this.equations.push(f,m,g),f.minForce=m.minForce=g.minForce=-p,f.maxForce=m.maxForce=g.maxForce=p,f.ni.set(1,0,0),m.ni.set(0,1,0),g.ni.set(0,0,1)}o.prototype=new r,o.prototype.update=function(){var h=this.bodyA,c=this.bodyB,u=this.equationX,d=this.equationY,p=this.equationZ;h.quaternion.vmult(this.pivotA,u.ri),c.quaternion.vmult(this.pivotB,u.rj),d.ri.copy(u.ri),d.rj.copy(u.rj),p.ri.copy(u.ri),p.rj.copy(u.rj)}},{"../equations/ContactEquation":19,"../math/Vec3":30,"./Constraint":13}],18:[function(e,n,i){n.exports=l;var r=e("../math/Vec3");e("../math/Mat3");var s=e("./Equation");function l(c,u,d){d=d||{};var p=typeof d.maxForce<"u"?d.maxForce:1e6;s.call(this,c,u,-p,p),this.axisA=d.axisA?d.axisA.clone():new r(1,0,0),this.axisB=d.axisB?d.axisB.clone():new r(0,1,0),this.angle=typeof d.angle<"u"?d.angle:0}l.prototype=new s,l.prototype.constructor=l;var o=new r,h=new r;l.prototype.computeB=function(c){var u=this.a,d=this.b,p=this.axisA,f=this.axisB,m=o,g=h,v=this.jacobianElementA,x=this.jacobianElementB;p.cross(f,m),f.cross(p,g),v.rotational.copy(g),x.rotational.copy(m);var _=Math.cos(this.angle)-p.dot(f),M=this.computeGW(),S=this.computeGiMf(),P=-_*u-M*d-c*S;return P}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],19:[function(e,n,i){n.exports=l;var r=e("./Equation"),s=e("../math/Vec3");e("../math/Mat3");function l(g,v,x){x=typeof x<"u"?x:1e6,r.call(this,g,v,0,x),this.restitution=0,this.ri=new s,this.rj=new s,this.ni=new s}l.prototype=new r,l.prototype.constructor=l;var o=new s,h=new s,c=new s;l.prototype.computeB=function(g){var v=this.a,x=this.b,_=this.bi,M=this.bj,S=this.ri,P=this.rj,T=o,z=h,k=_.velocity,L=_.angularVelocity;_.force,_.torque;var D=M.velocity,A=M.angularVelocity;M.force,M.torque;var V=c,j=this.jacobianElementA,Q=this.jacobianElementB,pt=this.ni;S.cross(pt,T),P.cross(pt,z),pt.negate(j.spatial),T.negate(j.rotational),Q.spatial.copy(pt),Q.rotational.copy(z),V.copy(M.position),V.vadd(P,V),V.vsub(_.position,V),V.vsub(S,V);var H=pt.dot(V),O=this.restitution+1,X=O*D.dot(pt)-O*k.dot(pt)+A.dot(z)-L.dot(T),Z=this.computeGiMf(),R=-H*v-X*x-g*Z;return R};var u=new s,d=new s,p=new s,f=new s,m=new s;l.prototype.getImpactVelocityAlongNormal=function(){var g=u,v=d,x=p,_=f,M=m;return this.bi.position.vadd(this.ri,x),this.bj.position.vadd(this.rj,_),this.bi.getVelocityAtWorldPoint(x,g),this.bj.getVelocityAtWorldPoint(_,v),g.vsub(v,M),this.ni.dot(M)}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],20:[function(e,n,i){n.exports=l;var r=e("../math/JacobianElement"),s=e("../math/Vec3");function l(m,g,v,x){this.id=l.id++,this.minForce=typeof v>"u"?-1e6:v,this.maxForce=typeof x>"u"?1e6:x,this.bi=m,this.bj=g,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new r,this.jacobianElementB=new r,this.enabled=!0,this.setSpookParams(1e7,4,1/60)}l.prototype.constructor=l,l.id=0,l.prototype.setSpookParams=function(m,g,v){var x=g,_=m,M=v;this.a=4/(M*(1+4*x)),this.b=4*x/(1+4*x),this.eps=4/(M*M*_*(1+4*x))},l.prototype.computeB=function(m,g,v){var x=this.computeGW(),_=this.computeGq(),M=this.computeGiMf();return-_*m-x*g-M*v},l.prototype.computeGq=function(){var m=this.jacobianElementA,g=this.jacobianElementB,v=this.bi,x=this.bj,_=v.position,M=x.position;return m.spatial.dot(_)+g.spatial.dot(M)};var o=new s;l.prototype.computeGW=function(){var m=this.jacobianElementA,g=this.jacobianElementB,v=this.bi,x=this.bj,_=v.velocity,M=x.velocity,S=v.angularVelocity||o,P=x.angularVelocity||o;return m.multiplyVectors(_,S)+g.multiplyVectors(M,P)},l.prototype.computeGWlambda=function(){var m=this.jacobianElementA,g=this.jacobianElementB,v=this.bi,x=this.bj,_=v.vlambda,M=x.vlambda,S=v.wlambda||o,P=x.wlambda||o;return m.multiplyVectors(_,S)+g.multiplyVectors(M,P)};var h=new s,c=new s,u=new s,d=new s;l.prototype.computeGiMf=function(){var m=this.jacobianElementA,g=this.jacobianElementB,v=this.bi,x=this.bj,_=v.force,M=v.torque,S=x.force,P=x.torque,T=v.invMassSolve,z=x.invMassSolve;return v.invInertiaWorldSolve?v.invInertiaWorldSolve.vmult(M,u):u.set(0,0,0),x.invInertiaWorldSolve?x.invInertiaWorldSolve.vmult(P,d):d.set(0,0,0),_.mult(T,h),S.mult(z,c),m.multiplyVectors(h,u)+g.multiplyVectors(c,d)};var p=new s;l.prototype.computeGiMGt=function(){var m=this.jacobianElementA,g=this.jacobianElementB,v=this.bi,x=this.bj,_=v.invMassSolve,M=x.invMassSolve,S=v.invInertiaWorldSolve,P=x.invInertiaWorldSolve,T=_+M;return S&&(S.vmult(m.rotational,p),T+=p.dot(m.rotational)),P&&(P.vmult(g.rotational,p),T+=p.dot(g.rotational)),T};var f=new s;new s,new s,new s,new s,new s,l.prototype.addToWlambda=function(m){var g=this.jacobianElementA,v=this.jacobianElementB,x=this.bi,_=this.bj,M=f;g.spatial.mult(x.invMassSolve*m,M),x.vlambda.vadd(M,x.vlambda),v.spatial.mult(_.invMassSolve*m,M),_.vlambda.vadd(M,_.vlambda),x.invInertiaWorldSolve&&(x.invInertiaWorldSolve.vmult(g.rotational,M),M.mult(m,M),x.wlambda.vadd(M,x.wlambda)),_.invInertiaWorldSolve&&(_.invInertiaWorldSolve.vmult(v.rotational,M),M.mult(m,M),_.wlambda.vadd(M,_.wlambda))},l.prototype.computeC=function(){return this.computeGiMGt()+this.eps}},{"../math/JacobianElement":26,"../math/Vec3":30}],21:[function(e,n,i){n.exports=l;var r=e("./Equation"),s=e("../math/Vec3");e("../math/Mat3");function l(c,u,d){r.call(this,c,u,-d,d),this.ri=new s,this.rj=new s,this.t=new s}l.prototype=new r,l.prototype.constructor=l;var o=new s,h=new s;l.prototype.computeB=function(c){this.a;var u=this.b;this.bi,this.bj;var d=this.ri,p=this.rj,f=o,m=h,g=this.t;d.cross(g,f),p.cross(g,m);var v=this.jacobianElementA,x=this.jacobianElementB;g.negate(v.spatial),f.negate(v.rotational),x.spatial.copy(g),x.rotational.copy(m);var _=this.computeGW(),M=this.computeGiMf(),S=-_*u-c*M;return S}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],22:[function(e,n,i){n.exports=l;var r=e("../math/Vec3");e("../math/Mat3");var s=e("./Equation");function l(c,u,d){d=d||{};var p=typeof d.maxForce<"u"?d.maxForce:1e6;s.call(this,c,u,-p,p),this.axisA=d.axisA?d.axisA.clone():new r(1,0,0),this.axisB=d.axisB?d.axisB.clone():new r(0,1,0),this.maxAngle=Math.PI/2}l.prototype=new s,l.prototype.constructor=l;var o=new r,h=new r;l.prototype.computeB=function(c){var u=this.a,d=this.b,p=this.axisA,f=this.axisB,m=o,g=h,v=this.jacobianElementA,x=this.jacobianElementB;p.cross(f,m),f.cross(p,g),v.rotational.copy(g),x.rotational.copy(m);var _=Math.cos(this.maxAngle)-p.dot(f),M=this.computeGW(),S=this.computeGiMf(),P=-_*u-M*d-c*S;return P}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],23:[function(e,n,i){n.exports=l;var r=e("../math/Vec3");e("../math/Mat3");var s=e("./Equation");function l(o,h,c){c=typeof c<"u"?c:1e6,s.call(this,o,h,-c,c),this.axisA=new r,this.axisB=new r,this.targetVelocity=0}l.prototype=new s,l.prototype.constructor=l,l.prototype.computeB=function(o){this.a;var h=this.b;this.bi,this.bj;var c=this.axisA,u=this.axisB,d=this.jacobianElementA,p=this.jacobianElementB;d.rotational.copy(c),u.negate(p.rotational);var f=this.computeGW()-this.targetVelocity,m=this.computeGiMf(),g=-f*h-o*m;return g}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],24:[function(e,n,i){var r=e("../utils/Utils");n.exports=s;function s(l,o,h){h=r.defaults(h,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=s.idCounter++,this.materials=[l,o],this.friction=h.friction,this.restitution=h.restitution,this.contactEquationStiffness=h.contactEquationStiffness,this.contactEquationRelaxation=h.contactEquationRelaxation,this.frictionEquationStiffness=h.frictionEquationStiffness,this.frictionEquationRelaxation=h.frictionEquationRelaxation}s.idCounter=0},{"../utils/Utils":53}],25:[function(e,n,i){n.exports=r;function r(s){var l="";s=s||{},typeof s=="string"?(l=s,s={}):typeof s=="object"&&(l=""),this.name=l,this.id=r.idCounter++,this.friction=typeof s.friction<"u"?s.friction:-1,this.restitution=typeof s.restitution<"u"?s.restitution:-1}r.idCounter=0},{}],26:[function(e,n,i){n.exports=s;var r=e("./Vec3");function s(){this.spatial=new r,this.rotational=new r}s.prototype.multiplyElement=function(l){return l.spatial.dot(this.spatial)+l.rotational.dot(this.rotational)},s.prototype.multiplyVectors=function(l,o){return l.dot(this.spatial)+o.dot(this.rotational)}},{"./Vec3":30}],27:[function(e,n,i){n.exports=s;var r=e("./Vec3");function s(l){l?this.elements=l:this.elements=[0,0,0,0,0,0,0,0,0]}s.prototype.identity=function(){var l=this.elements;l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=1,l[5]=0,l[6]=0,l[7]=0,l[8]=1},s.prototype.setZero=function(){var l=this.elements;l[0]=0,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=0,l[6]=0,l[7]=0,l[8]=0},s.prototype.setTrace=function(l){var o=this.elements;o[0]=l.x,o[4]=l.y,o[8]=l.z},s.prototype.getTrace=function(o){var o=o||new r,h=this.elements;o.x=h[0],o.y=h[4],o.z=h[8]},s.prototype.vmult=function(l,o){o=o||new r;var h=this.elements,c=l.x,u=l.y,d=l.z;return o.x=h[0]*c+h[1]*u+h[2]*d,o.y=h[3]*c+h[4]*u+h[5]*d,o.z=h[6]*c+h[7]*u+h[8]*d,o},s.prototype.smult=function(l){for(var o=0;o<this.elements.length;o++)this.elements[o]*=l},s.prototype.mmult=function(l,o){for(var h=o||new s,c=0;c<3;c++)for(var u=0;u<3;u++){for(var d=0,p=0;p<3;p++)d+=l.elements[c+p*3]*this.elements[p+u*3];h.elements[c+u*3]=d}return h},s.prototype.scale=function(l,o){o=o||new s;for(var h=this.elements,c=o.elements,u=0;u!==3;u++)c[3*u+0]=l.x*h[3*u+0],c[3*u+1]=l.y*h[3*u+1],c[3*u+2]=l.z*h[3*u+2];return o},s.prototype.solve=function(l,o){o=o||new r;for(var h=3,c=4,u=[],d=0;d<h*c;d++)u.push(0);var d,p;for(d=0;d<3;d++)for(p=0;p<3;p++)u[d+c*p]=this.elements[d+3*p];u[3+4*0]=l.x,u[3+4*1]=l.y,u[3+4*2]=l.z;var f=3,m=f,g,v=4,x;do{if(d=m-f,u[d+c*d]===0){for(p=d+1;p<m;p++)if(u[d+c*p]!==0){g=v;do x=v-g,u[x+c*d]+=u[x+c*p];while(--g);break}}if(u[d+c*d]!==0)for(p=d+1;p<m;p++){var _=u[d+c*p]/u[d+c*d];g=v;do x=v-g,u[x+c*p]=x<=d?0:u[x+c*p]-u[x+c*d]*_;while(--g)}}while(--f);if(o.z=u[2*c+3]/u[2*c+2],o.y=(u[1*c+3]-u[1*c+2]*o.z)/u[1*c+1],o.x=(u[0*c+3]-u[0*c+2]*o.z-u[0*c+1]*o.y)/u[0*c+0],isNaN(o.x)||isNaN(o.y)||isNaN(o.z)||o.x===1/0||o.y===1/0||o.z===1/0)throw"Could not solve equation! Got x=["+o.toString()+"], b=["+l.toString()+"], A=["+this.toString()+"]";return o},s.prototype.e=function(l,o,h){if(h===void 0)return this.elements[o+3*l];this.elements[o+3*l]=h},s.prototype.copy=function(l){for(var o=0;o<l.elements.length;o++)this.elements[o]=l.elements[o];return this},s.prototype.toString=function(){for(var l="",o=",",h=0;h<9;h++)l+=this.elements[h]+o;return l},s.prototype.reverse=function(l){l=l||new s;for(var o=3,h=6,c=[],u=0;u<o*h;u++)c.push(0);var u,d;for(u=0;u<3;u++)for(d=0;d<3;d++)c[u+h*d]=this.elements[u+3*d];c[3+6*0]=1,c[3+6*1]=0,c[3+6*2]=0,c[4+6*0]=0,c[4+6*1]=1,c[4+6*2]=0,c[5+6*0]=0,c[5+6*1]=0,c[5+6*2]=1;var p=3,f=p,m,g=h,v;do{if(u=f-p,c[u+h*u]===0){for(d=u+1;d<f;d++)if(c[u+h*d]!==0){m=g;do v=g-m,c[v+h*u]+=c[v+h*d];while(--m);break}}if(c[u+h*u]!==0)for(d=u+1;d<f;d++){var x=c[u+h*d]/c[u+h*u];m=g;do v=g-m,c[v+h*d]=v<=u?0:c[v+h*d]-c[v+h*u]*x;while(--m)}}while(--p);u=2;do{d=u-1;do{var x=c[u+h*d]/c[u+h*u];m=h;do v=h-m,c[v+h*d]=c[v+h*d]-c[v+h*u]*x;while(--m)}while(d--)}while(--u);u=2;do{var x=1/c[u+h*u];m=h;do v=h-m,c[v+h*u]=c[v+h*u]*x;while(--m)}while(u--);u=2;do{d=2;do{if(v=c[o+d+h*u],isNaN(v)||v===1/0)throw"Could not reverse! A=["+this.toString()+"]";l.e(u,d,v)}while(d--)}while(u--);return l},s.prototype.setRotationFromQuaternion=function(l){var o=l.x,h=l.y,c=l.z,u=l.w,d=o+o,p=h+h,f=c+c,m=o*d,g=o*p,v=o*f,x=h*p,_=h*f,M=c*f,S=u*d,P=u*p,T=u*f,z=this.elements;return z[3*0+0]=1-(x+M),z[3*0+1]=g-T,z[3*0+2]=v+P,z[3*1+0]=g+T,z[3*1+1]=1-(m+M),z[3*1+2]=_-S,z[3*2+0]=v-P,z[3*2+1]=_+S,z[3*2+2]=1-(m+x),this},s.prototype.transpose=function(l){l=l||new s;for(var o=l.elements,h=this.elements,c=0;c!==3;c++)for(var u=0;u!==3;u++)o[3*c+u]=h[3*u+c];return l}},{"./Vec3":30}],28:[function(e,n,i){n.exports=s;var r=e("./Vec3");function s(d,p,f,m){this.x=d!==void 0?d:0,this.y=p!==void 0?p:0,this.z=f!==void 0?f:0,this.w=m!==void 0?m:1}s.prototype.set=function(d,p,f,m){this.x=d,this.y=p,this.z=f,this.w=m},s.prototype.toString=function(){return this.x+","+this.y+","+this.z+","+this.w},s.prototype.toArray=function(){return[this.x,this.y,this.z,this.w]},s.prototype.setFromAxisAngle=function(d,p){var f=Math.sin(p*.5);this.x=d.x*f,this.y=d.y*f,this.z=d.z*f,this.w=Math.cos(p*.5)},s.prototype.toAxisAngle=function(d){d=d||new r,this.normalize();var p=2*Math.acos(this.w),f=Math.sqrt(1-this.w*this.w);return f<.001?(d.x=this.x,d.y=this.y,d.z=this.z):(d.x=this.x/f,d.y=this.y/f,d.z=this.z/f),[d,p]};var l=new r,o=new r;s.prototype.setFromVectors=function(d,p){if(d.isAntiparallelTo(p)){var f=l,m=o;d.tangents(f,m),this.setFromAxisAngle(f,Math.PI)}else{var g=d.cross(p);this.x=g.x,this.y=g.y,this.z=g.z,this.w=Math.sqrt(Math.pow(d.norm(),2)*Math.pow(p.norm(),2))+d.dot(p),this.normalize()}};var h=new r,c=new r,u=new r;s.prototype.mult=function(d,p){p=p||new s;var f=this.w,m=h,g=c,v=u;return m.set(this.x,this.y,this.z),g.set(d.x,d.y,d.z),p.w=f*d.w-m.dot(g),m.cross(g,v),p.x=f*g.x+d.w*m.x+v.x,p.y=f*g.y+d.w*m.y+v.y,p.z=f*g.z+d.w*m.z+v.z,p},s.prototype.inverse=function(d){var p=this.x,f=this.y,m=this.z,g=this.w;d=d||new s,this.conjugate(d);var v=1/(p*p+f*f+m*m+g*g);return d.x*=v,d.y*=v,d.z*=v,d.w*=v,d},s.prototype.conjugate=function(d){return d=d||new s,d.x=-this.x,d.y=-this.y,d.z=-this.z,d.w=this.w,d},s.prototype.normalize=function(){var d=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);d===0?(this.x=0,this.y=0,this.z=0,this.w=0):(d=1/d,this.x*=d,this.y*=d,this.z*=d,this.w*=d)},s.prototype.normalizeFast=function(){var d=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;d===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=d,this.y*=d,this.z*=d,this.w*=d)},s.prototype.vmult=function(d,p){p=p||new r;var f=d.x,m=d.y,g=d.z,v=this.x,x=this.y,_=this.z,M=this.w,S=M*f+x*g-_*m,P=M*m+_*f-v*g,T=M*g+v*m-x*f,z=-v*f-x*m-_*g;return p.x=S*M+z*-v+P*-_-T*-x,p.y=P*M+z*-x+T*-v-S*-_,p.z=T*M+z*-_+S*-x-P*-v,p},s.prototype.copy=function(d){return this.x=d.x,this.y=d.y,this.z=d.z,this.w=d.w,this},s.prototype.toEuler=function(d,p){p=p||"YZX";var f,m,g,v=this.x,x=this.y,_=this.z,M=this.w;switch(p){case"YZX":var S=v*x+_*M;if(S>.499&&(f=2*Math.atan2(v,M),m=Math.PI/2,g=0),S<-.499&&(f=-2*Math.atan2(v,M),m=-Math.PI/2,g=0),isNaN(f)){var P=v*v,T=x*x,z=_*_;f=Math.atan2(2*x*M-2*v*_,1-2*T-2*z),m=Math.asin(2*S),g=Math.atan2(2*v*M-2*x*_,1-2*P-2*z)}break;default:throw new Error("Euler order "+p+" not supported yet.")}d.y=f,d.z=m,d.x=g},s.prototype.setFromEuler=function(d,p,f,m){m=m||"XYZ";var g=Math.cos(d/2),v=Math.cos(p/2),x=Math.cos(f/2),_=Math.sin(d/2),M=Math.sin(p/2),S=Math.sin(f/2);return m==="XYZ"?(this.x=_*v*x+g*M*S,this.y=g*M*x-_*v*S,this.z=g*v*S+_*M*x,this.w=g*v*x-_*M*S):m==="YXZ"?(this.x=_*v*x+g*M*S,this.y=g*M*x-_*v*S,this.z=g*v*S-_*M*x,this.w=g*v*x+_*M*S):m==="ZXY"?(this.x=_*v*x-g*M*S,this.y=g*M*x+_*v*S,this.z=g*v*S+_*M*x,this.w=g*v*x-_*M*S):m==="ZYX"?(this.x=_*v*x-g*M*S,this.y=g*M*x+_*v*S,this.z=g*v*S-_*M*x,this.w=g*v*x+_*M*S):m==="YZX"?(this.x=_*v*x+g*M*S,this.y=g*M*x+_*v*S,this.z=g*v*S-_*M*x,this.w=g*v*x-_*M*S):m==="XZY"&&(this.x=_*v*x-g*M*S,this.y=g*M*x-_*v*S,this.z=g*v*S+_*M*x,this.w=g*v*x+_*M*S),this},s.prototype.clone=function(){return new s(this.x,this.y,this.z,this.w)}},{"./Vec3":30}],29:[function(e,n,i){var r=e("./Vec3"),s=e("./Quaternion");n.exports=l;function l(h){h=h||{},this.position=new r,h.position&&this.position.copy(h.position),this.quaternion=new s,h.quaternion&&this.quaternion.copy(h.quaternion)}var o=new s;l.pointToLocalFrame=function(h,c,u,p){var p=p||new r;return u.vsub(h,p),c.conjugate(o),o.vmult(p,p),p},l.prototype.pointToLocal=function(h,c){return l.pointToLocalFrame(this.position,this.quaternion,h,c)},l.pointToWorldFrame=function(h,c,u,p){var p=p||new r;return c.vmult(u,p),p.vadd(h,p),p},l.prototype.pointToWorld=function(h,c){return l.pointToWorldFrame(this.position,this.quaternion,h,c)},l.prototype.vectorToWorldFrame=function(h,u){var u=u||new r;return this.quaternion.vmult(h,u),u},l.vectorToWorldFrame=function(h,c,u){return h.vmult(c,u),u},l.vectorToLocalFrame=function(h,c,u,p){var p=p||new r;return c.w*=-1,c.vmult(u,p),c.w*=-1,p}},{"./Quaternion":28,"./Vec3":30}],30:[function(e,n,i){n.exports=s;var r=e("./Mat3");function s(c,u,d){this.x=c||0,this.y=u||0,this.z=d||0}s.ZERO=new s(0,0,0),s.UNIT_X=new s(1,0,0),s.UNIT_Y=new s(0,1,0),s.UNIT_Z=new s(0,0,1),s.prototype.cross=function(c,u){var d=c.x,p=c.y,f=c.z,m=this.x,g=this.y,v=this.z;return u=u||new s,u.x=g*f-v*p,u.y=v*d-m*f,u.z=m*p-g*d,u},s.prototype.set=function(c,u,d){return this.x=c,this.y=u,this.z=d,this},s.prototype.setZero=function(){this.x=this.y=this.z=0},s.prototype.vadd=function(c,u){if(u)u.x=c.x+this.x,u.y=c.y+this.y,u.z=c.z+this.z;else return new s(this.x+c.x,this.y+c.y,this.z+c.z)},s.prototype.vsub=function(c,u){if(u)u.x=this.x-c.x,u.y=this.y-c.y,u.z=this.z-c.z;else return new s(this.x-c.x,this.y-c.y,this.z-c.z)},s.prototype.crossmat=function(){return new r([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])},s.prototype.normalize=function(){var c=this.x,u=this.y,d=this.z,p=Math.sqrt(c*c+u*u+d*d);if(p>0){var f=1/p;this.x*=f,this.y*=f,this.z*=f}else this.x=0,this.y=0,this.z=0;return p},s.prototype.unit=function(c){c=c||new s;var u=this.x,d=this.y,p=this.z,f=Math.sqrt(u*u+d*d+p*p);return f>0?(f=1/f,c.x=u*f,c.y=d*f,c.z=p*f):(c.x=1,c.y=0,c.z=0),c},s.prototype.norm=function(){var c=this.x,u=this.y,d=this.z;return Math.sqrt(c*c+u*u+d*d)},s.prototype.length=s.prototype.norm,s.prototype.norm2=function(){return this.dot(this)},s.prototype.lengthSquared=s.prototype.norm2,s.prototype.distanceTo=function(c){var u=this.x,d=this.y,p=this.z,f=c.x,m=c.y,g=c.z;return Math.sqrt((f-u)*(f-u)+(m-d)*(m-d)+(g-p)*(g-p))},s.prototype.distanceSquared=function(c){var u=this.x,d=this.y,p=this.z,f=c.x,m=c.y,g=c.z;return(f-u)*(f-u)+(m-d)*(m-d)+(g-p)*(g-p)},s.prototype.mult=function(c,u){u=u||new s;var d=this.x,p=this.y,f=this.z;return u.x=c*d,u.y=c*p,u.z=c*f,u},s.prototype.scale=s.prototype.mult,s.prototype.dot=function(c){return this.x*c.x+this.y*c.y+this.z*c.z},s.prototype.isZero=function(){return this.x===0&&this.y===0&&this.z===0},s.prototype.negate=function(c){return c=c||new s,c.x=-this.x,c.y=-this.y,c.z=-this.z,c};var l=new s,o=new s;s.prototype.tangents=function(c,u){var d=this.norm();if(d>0){var p=l,f=1/d;p.set(this.x*f,this.y*f,this.z*f);var m=o;Math.abs(p.x)<.9?(m.set(1,0,0),p.cross(m,c)):(m.set(0,1,0),p.cross(m,c)),p.cross(c,u)}else c.set(1,0,0),u.set(0,1,0)},s.prototype.toString=function(){return this.x+","+this.y+","+this.z},s.prototype.toArray=function(){return[this.x,this.y,this.z]},s.prototype.copy=function(c){return this.x=c.x,this.y=c.y,this.z=c.z,this},s.prototype.lerp=function(c,u,d){var p=this.x,f=this.y,m=this.z;d.x=p+(c.x-p)*u,d.y=f+(c.y-f)*u,d.z=m+(c.z-m)*u},s.prototype.almostEquals=function(c,u){return u===void 0&&(u=1e-6),!(Math.abs(this.x-c.x)>u||Math.abs(this.y-c.y)>u||Math.abs(this.z-c.z)>u)},s.prototype.almostZero=function(c){return c===void 0&&(c=1e-6),!(Math.abs(this.x)>c||Math.abs(this.y)>c||Math.abs(this.z)>c)};var h=new s;s.prototype.isAntiparallelTo=function(c,u){return this.negate(h),h.almostEquals(c,u)},s.prototype.clone=function(){return new s(this.x,this.y,this.z)}},{"./Mat3":27}],31:[function(e,n,i){n.exports=u;var r=e("../utils/EventTarget");e("../shapes/Shape");var s=e("../math/Vec3"),l=e("../math/Mat3"),o=e("../math/Quaternion");e("../material/Material");var h=e("../collision/AABB"),c=e("../shapes/Box");function u(D){D=D||{},r.apply(this),this.id=u.idCounter++,this.world=null,this.preStep=null,this.postStep=null,this.vlambda=new s,this.collisionFilterGroup=typeof D.collisionFilterGroup=="number"?D.collisionFilterGroup:1,this.collisionFilterMask=typeof D.collisionFilterMask=="number"?D.collisionFilterMask:1,this.collisionResponse=!0,this.position=new s,D.position&&this.position.copy(D.position),this.previousPosition=new s,this.initPosition=new s,this.velocity=new s,D.velocity&&this.velocity.copy(D.velocity),this.initVelocity=new s,this.force=new s;var A=typeof D.mass=="number"?D.mass:0;this.mass=A,this.invMass=A>0?1/A:0,this.material=D.material||null,this.linearDamping=typeof D.linearDamping=="number"?D.linearDamping:.01,this.type=A<=0?u.STATIC:u.DYNAMIC,typeof D.type==typeof u.STATIC&&(this.type=D.type),this.allowSleep=typeof D.allowSleep<"u"?D.allowSleep:!0,this.sleepState=0,this.sleepSpeedLimit=typeof D.sleepSpeedLimit<"u"?D.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof D.sleepTimeLimit<"u"?D.sleepTimeLimit:1,this.timeLastSleepy=0,this._wakeUpAfterNarrowphase=!1,this.torque=new s,this.quaternion=new o,D.quaternion&&this.quaternion.copy(D.quaternion),this.initQuaternion=new o,this.angularVelocity=new s,D.angularVelocity&&this.angularVelocity.copy(D.angularVelocity),this.initAngularVelocity=new s,this.interpolatedPosition=new s,this.interpolatedQuaternion=new o,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new s,this.invInertia=new s,this.invInertiaWorld=new l,this.invMassSolve=0,this.invInertiaSolve=new s,this.invInertiaWorldSolve=new l,this.fixedRotation=typeof D.fixedRotation<"u"?D.fixedRotation:!1,this.angularDamping=typeof D.angularDamping<"u"?D.angularDamping:.01,this.aabb=new h,this.aabbNeedsUpdate=!0,this.wlambda=new s,D.shape&&this.addShape(D.shape),this.updateMassProperties()}u.prototype=new r,u.prototype.constructor=u,u.DYNAMIC=1,u.STATIC=2,u.KINEMATIC=4,u.AWAKE=0,u.SLEEPY=1,u.SLEEPING=2,u.idCounter=0,u.prototype.wakeUp=function(){var D=this.sleepState;this.sleepState=0,D===u.SLEEPING&&this.dispatchEvent({type:"wakeup"})},u.prototype.sleep=function(){this.sleepState=u.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0)},u.sleepyEvent={type:"sleepy"},u.sleepEvent={type:"sleep"},u.prototype.sleepTick=function(D){if(this.allowSleep){var A=this.sleepState,V=this.velocity.norm2()+this.angularVelocity.norm2(),j=Math.pow(this.sleepSpeedLimit,2);A===u.AWAKE&&V<j?(this.sleepState=u.SLEEPY,this.timeLastSleepy=D,this.dispatchEvent(u.sleepyEvent)):A===u.SLEEPY&&V>j?this.wakeUp():A===u.SLEEPY&&D-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(u.sleepEvent))}},u.prototype.updateSolveMassProperties=function(){this.sleepState===u.SLEEPING||this.type===u.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))},u.prototype.pointToLocalFrame=function(D,V){var V=V||new s;return D.vsub(this.position,V),this.quaternion.conjugate().vmult(V,V),V},u.prototype.vectorToLocalFrame=function(D,V){var V=V||new s;return this.quaternion.conjugate().vmult(D,V),V},u.prototype.pointToWorldFrame=function(D,V){var V=V||new s;return this.quaternion.vmult(D,V),V.vadd(this.position,V),V},u.prototype.vectorToWorldFrame=function(D,V){var V=V||new s;return this.quaternion.vmult(D,V),V};var d=new s,p=new o;u.prototype.addShape=function(D,A,V){var j=new s,Q=new o;return A&&j.copy(A),V&&Q.copy(V),this.shapes.push(D),this.shapeOffsets.push(j),this.shapeOrientations.push(Q),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,this},u.prototype.updateBoundingRadius=function(){for(var D=this.shapes,A=this.shapeOffsets,V=D.length,j=0,Q=0;Q!==V;Q++){var pt=D[Q];pt.updateBoundingSphereRadius();var H=A[Q].norm(),O=pt.boundingSphereRadius;H+O>j&&(j=H+O)}this.boundingRadius=j};var f=new h;u.prototype.computeAABB=function(){for(var D=this.shapes,A=this.shapeOffsets,V=this.shapeOrientations,j=D.length,Q=d,pt=p,H=this.quaternion,O=this.aabb,X=f,Z=0;Z!==j;Z++){var R=D[Z];V[Z].mult(H,pt),pt.vmult(A[Z],Q),Q.vadd(this.position,Q),R.calculateWorldAABB(Q,pt,X.lowerBound,X.upperBound),Z===0?O.copy(X):O.extend(X)}this.aabbNeedsUpdate=!1};var m=new l,g=new l;new l,u.prototype.updateInertiaWorld=function(D){var A=this.invInertia;if(!(A.x===A.y&&A.y===A.z&&!D)){var V=m,j=g;V.setRotationFromQuaternion(this.quaternion),V.transpose(j),V.scale(A,V),V.mmult(j,this.invInertiaWorld)}};var v=new s,x=new s;u.prototype.applyForce=function(D,A){if(this.type===u.DYNAMIC){var V=v;A.vsub(this.position,V);var j=x;V.cross(D,j),this.force.vadd(D,this.force),this.torque.vadd(j,this.torque)}};var _=new s,M=new s;u.prototype.applyLocalForce=function(D,A){if(this.type===u.DYNAMIC){var V=_,j=M;this.vectorToWorldFrame(D,V),this.pointToWorldFrame(A,j),this.applyForce(V,j)}};var S=new s,P=new s,T=new s;u.prototype.applyImpulse=function(D,A){if(this.type===u.DYNAMIC){var V=S;A.vsub(this.position,V);var j=P;j.copy(D),j.mult(this.invMass,j),this.velocity.vadd(j,this.velocity);var Q=T;V.cross(D,Q),this.invInertiaWorld.vmult(Q,Q),this.angularVelocity.vadd(Q,this.angularVelocity)}};var z=new s,k=new s;u.prototype.applyLocalImpulse=function(D,A){if(this.type===u.DYNAMIC){var V=z,j=k;this.vectorToWorldFrame(D,V),this.pointToWorldFrame(A,j),this.applyImpulse(V,j)}};var L=new s;u.prototype.updateMassProperties=function(){var D=L;this.invMass=this.mass>0?1/this.mass:0;var A=this.inertia,V=this.fixedRotation;this.computeAABB(),D.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),c.calculateInertia(D,this.mass,A),this.invInertia.set(A.x>0&&!V?1/A.x:0,A.y>0&&!V?1/A.y:0,A.z>0&&!V?1/A.z:0),this.updateInertiaWorld(!0)},u.prototype.getVelocityAtWorldPoint=function(D,A){var V=new s;return D.vsub(this.position,V),this.angularVelocity.cross(V,A),this.velocity.vadd(A,A),A}},{"../collision/AABB":3,"../material/Material":25,"../math/Mat3":27,"../math/Quaternion":28,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Shape":43,"../utils/EventTarget":49}],32:[function(e,n,i){e("./Body");var r=e("../math/Vec3"),s=e("../math/Quaternion");e("../collision/RaycastResult");var l=e("../collision/Ray"),o=e("../objects/WheelInfo");n.exports=h;function h(H){this.chassisBody=H.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis=typeof H.indexRightAxis<"u"?H.indexRightAxis:1,this.indexForwardAxis=typeof H.indexForwardAxis<"u"?H.indexForwardAxis:0,this.indexUpAxis=typeof H.indexUpAxis<"u"?H.indexUpAxis:2}new r,new r,new r;var c=new r,u=new r,d=new r;new l,h.prototype.addWheel=function(H){H=H||{};var O=new o(H),X=this.wheelInfos.length;return this.wheelInfos.push(O),X},h.prototype.setSteeringValue=function(H,O){var X=this.wheelInfos[O];X.steering=H},new r,h.prototype.applyEngineForce=function(H,O){this.wheelInfos[O].engineForce=H},h.prototype.setBrake=function(H,O){this.wheelInfos[O].brake=H},h.prototype.addToWorld=function(H){this.constraints,H.add(this.chassisBody);var O=this;this.preStepCallback=function(){O.updateVehicle(H.dt)},H.addEventListener("preStep",this.preStepCallback),this.world=H},h.prototype.getVehicleAxisWorld=function(H,O){O.set(H===0?1:0,H===1?1:0,H===2?1:0),this.chassisBody.vectorToWorldFrame(O,O)},h.prototype.updateVehicle=function(H){for(var O=this.wheelInfos,X=O.length,Z=this.chassisBody,R=0;R<X;R++)this.updateWheelTransform(R);this.currentVehicleSpeedKmHour=3.6*Z.velocity.norm();var W=new r;this.getVehicleAxisWorld(this.indexForwardAxis,W),W.dot(Z.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(var R=0;R<X;R++)this.castRay(O[R]);this.updateSuspension(H);for(var E=new r,y=new r,R=0;R<X;R++){var b=O[R],N=b.suspensionForce;N>b.maxSuspensionForce&&(N=b.maxSuspensionForce),b.raycastResult.hitNormalWorld.scale(N*H,E),b.raycastResult.hitPointWorld.vsub(Z.position,y),Z.applyImpulse(E,b.raycastResult.hitPointWorld)}this.updateFriction(H);var F=new r,B=new r,U=new r;for(R=0;R<X;R++){var b=O[R];Z.getVelocityAtWorldPoint(b.chassisConnectionPointWorld,U);var G=1;switch(this.indexUpAxis){case 1:G=-1;break}if(b.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,B);var J=B.dot(b.raycastResult.hitNormalWorld);b.raycastResult.hitNormalWorld.scale(J,F),B.vsub(F,B);var ft=B.dot(U);b.deltaRotation=G*ft*H/b.radius}(b.sliding||!b.isInContact)&&b.engineForce!==0&&b.useCustomSlidingRotationalSpeed&&(b.deltaRotation=(b.engineForce>0?1:-1)*b.customSlidingRotationalSpeed*H),Math.abs(b.brake)>Math.abs(b.engineForce)&&(b.deltaRotation=0),b.rotation+=b.deltaRotation,b.deltaRotation*=.99}},h.prototype.updateSuspension=function(H){for(var O=this.chassisBody,X=O.mass,Z=this.wheelInfos,R=Z.length,W=0;W<R;W++){var E=Z[W];if(E.isInContact){var y,b=E.suspensionRestLength,N=E.suspensionLength,F=b-N;y=E.suspensionStiffness*F*E.clippedInvContactDotSuspension;var B=E.suspensionRelativeVelocity,U;B<0?U=E.dampingCompression:U=E.dampingRelaxation,y-=U*B,E.suspensionForce=y*X,E.suspensionForce<0&&(E.suspensionForce=0)}else E.suspensionForce=0}},h.prototype.removeFromWorld=function(H){this.constraints,H.remove(this.chassisBody),H.removeEventListener("preStep",this.preStepCallback),this.world=null};var p=new r,f=new r;h.prototype.castRay=function(H){var O=p,X=f;this.updateWheelTransformWorld(H);var Z=this.chassisBody,R=-1,W=H.suspensionRestLength+H.radius;H.directionWorld.scale(W,O);var E=H.chassisConnectionPointWorld;E.vadd(O,X);var y=H.raycastResult;y.reset();var b=Z.collisionResponse;Z.collisionResponse=!1,this.world.rayTest(E,X,y),Z.collisionResponse=b;var N=y.body;if(H.raycastResult.groundObject=0,N){R=y.distance,H.raycastResult.hitNormalWorld=y.hitNormalWorld,H.isInContact=!0;var F=y.distance;H.suspensionLength=F-H.radius;var B=H.suspensionRestLength-H.maxSuspensionTravel,U=H.suspensionRestLength+H.maxSuspensionTravel;H.suspensionLength<B&&(H.suspensionLength=B),H.suspensionLength>U&&(H.suspensionLength=U,H.raycastResult.reset());var G=H.raycastResult.hitNormalWorld.dot(H.directionWorld),J=new r;Z.getVelocityAtWorldPoint(H.raycastResult.hitPointWorld,J);var ft=H.raycastResult.hitNormalWorld.dot(J);if(G>=-.1)H.suspensionRelativeVelocity=0,H.clippedInvContactDotSuspension=1/.1;else{var dt=-1/G;H.suspensionRelativeVelocity=ft*dt,H.clippedInvContactDotSuspension=dt}}else H.suspensionLength=H.suspensionRestLength+0*H.maxSuspensionTravel,H.suspensionRelativeVelocity=0,H.directionWorld.scale(-1,H.raycastResult.hitNormalWorld),H.clippedInvContactDotSuspension=1;return R},h.prototype.updateWheelTransformWorld=function(H){H.isInContact=!1;var O=this.chassisBody;O.pointToWorldFrame(H.chassisConnectionPointLocal,H.chassisConnectionPointWorld),O.vectorToWorldFrame(H.directionLocal,H.directionWorld),O.vectorToWorldFrame(H.axleLocal,H.axleWorld)},h.prototype.updateWheelTransform=function(H){var O=c,X=u,Z=d,R=this.wheelInfos[H];this.updateWheelTransformWorld(R),R.directionLocal.scale(-1,O),X.copy(R.axleLocal),O.cross(X,Z),Z.normalize(),X.normalize();var W=R.steering,E=new s;E.setFromAxisAngle(O,W);var y=new s;y.setFromAxisAngle(X,R.rotation);var b=R.worldTransform.quaternion;this.chassisBody.quaternion.mult(E,b),b.mult(y,b),b.normalize();var N=R.worldTransform.position;N.copy(R.directionWorld),N.scale(R.suspensionLength,N),N.vadd(R.chassisConnectionPointWorld,N)};var m=[new r(1,0,0),new r(0,1,0),new r(0,0,1)];h.prototype.getWheelTransformWorld=function(H){return this.wheelInfos[H].worldTransform};var g=new r,v=[],x=[],_=1;h.prototype.updateFriction=function(H){for(var O=g,X=this.wheelInfos,Z=X.length,R=this.chassisBody,W=x,E=v,y=0;y<Z;y++){var b=X[y],N=b.raycastResult.body;b.sideImpulse=0,b.forwardImpulse=0,W[y]||(W[y]=new r),E[y]||(E[y]=new r)}for(var y=0;y<Z;y++){var b=X[y],N=b.raycastResult.body;if(N){var F=E[y],B=this.getWheelTransformWorld(y);B.vectorToWorldFrame(m[this.indexRightAxis],F);var U=b.raycastResult.hitNormalWorld,G=F.dot(U);U.scale(G,O),F.vsub(O,F),F.normalize(),U.cross(F,W[y]),W[y].normalize(),b.sideImpulse=pt(R,b.raycastResult.hitPointWorld,N,b.raycastResult.hitPointWorld,F),b.sideImpulse*=_}}var J=1,ft=.5;this.sliding=!1;for(var y=0;y<Z;y++){var b=X[y],N=b.raycastResult.body,dt=0;if(b.slipInfo=1,N){var w=0,K=b.brake?b.brake:w;dt=T(R,N,b.raycastResult.hitPointWorld,W[y],K),dt+=b.engineForce*H;var q=K/dt;b.slipInfo*=q}if(b.forwardImpulse=0,b.skidInfo=1,N){b.skidInfo=1;var it=b.suspensionForce*H*b.frictionSlip,ot=it,yt=it*ot;b.forwardImpulse=dt;var lt=b.forwardImpulse*ft,St=b.sideImpulse*J,It=lt*lt+St*St;if(b.sliding=!1,It>yt){this.sliding=!0,b.sliding=!0;var q=it/Math.sqrt(It);b.skidInfo*=q}}}if(this.sliding)for(var y=0;y<Z;y++){var b=X[y];b.sideImpulse!==0&&b.skidInfo<1&&(b.forwardImpulse*=b.skidInfo,b.sideImpulse*=b.skidInfo)}for(var y=0;y<Z;y++){var b=X[y],bt=new r;if(bt.copy(b.raycastResult.hitPointWorld),b.forwardImpulse!==0){var Ut=new r;W[y].scale(b.forwardImpulse,Ut),R.applyImpulse(Ut,bt)}if(b.sideImpulse!==0){var N=b.raycastResult.body,Mt=new r;Mt.copy(b.raycastResult.hitPointWorld);var Ft=new r;E[y].scale(b.sideImpulse,Ft),R.pointToLocalFrame(bt,bt),bt["xyz"[this.indexUpAxis]]*=b.rollInfluence,R.pointToWorldFrame(bt,bt),R.applyImpulse(Ft,bt),Ft.scale(-1,Ft),N.applyImpulse(Ft,Mt)}}};var M=new r,S=new r,P=new r;function T(H,O,X,Z,R){var W=0,E=X,y=M,b=S,N=P;H.getVelocityAtWorldPoint(E,y),O.getVelocityAtWorldPoint(E,b),y.vsub(b,N);var F=Z.dot(N),B=A(H,X,Z),U=A(O,X,Z),G=1,J=G/(B+U);return W=-F*J,R<W&&(W=R),W<-R&&(W=-R),W}var z=new r,k=new r,L=new r,D=new r;function A(H,O,X){var Z=z,R=k,W=L,E=D;return O.vsub(H.position,Z),Z.cross(X,R),H.invInertiaWorld.vmult(R,E),E.cross(Z,W),H.invMass+X.dot(W)}var V=new r,j=new r,Q=new r;function pt(H,O,X,Z,R,G){var E=R.norm2();if(E>1.1)return 0;var y=V,b=j,N=Q;H.getVelocityAtWorldPoint(O,y),X.getVelocityAtWorldPoint(Z,b),y.vsub(b,N);var F=R.dot(N),B=.2,U=1/(H.invMass+X.invMass),G=-B*F*U;return G}},{"../collision/Ray":9,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Vec3":30,"../objects/WheelInfo":36,"./Body":31}],33:[function(e,n,i){var r=e("./Body"),s=e("../shapes/Sphere"),l=e("../shapes/Box"),o=e("../math/Vec3"),h=e("../constraints/HingeConstraint");n.exports=c;function c(p){if(this.wheelBodies=[],this.coordinateSystem=typeof p.coordinateSystem>"u"?new o(1,2,3):p.coordinateSystem.clone(),this.chassisBody=p.chassisBody,!this.chassisBody){var f=new l(new o(5,2,.5));this.chassisBody=new r(1,f)}this.constraints=[],this.wheelAxes=[],this.wheelForces=[]}c.prototype.addWheel=function(p){p=p||{};var f=p.body;f||(f=new r(1,new s(1.2))),this.wheelBodies.push(f),this.wheelForces.push(0),new o;var m=typeof p.position<"u"?p.position.clone():new o,g=new o;this.chassisBody.pointToWorldFrame(m,g),f.position.set(g.x,g.y,g.z);var v=typeof p.axis<"u"?p.axis.clone():new o(0,1,0);this.wheelAxes.push(v);var x=new h(this.chassisBody,f,{pivotA:m,axisA:v,pivotB:o.ZERO,axisB:v,collideConnected:!1});return this.constraints.push(x),this.wheelBodies.length-1},c.prototype.setSteeringValue=function(p,f){var m=this.wheelAxes[f],g=Math.cos(p),v=Math.sin(p),x=m.x,_=m.y;this.constraints[f].axisA.set(g*x-v*_,v*x+g*_,0)},c.prototype.setMotorSpeed=function(p,f){var m=this.constraints[f];m.enableMotor(),m.motorTargetVelocity=p},c.prototype.disableMotor=function(p){var f=this.constraints[p];f.disableMotor()};var u=new o;c.prototype.setWheelForce=function(p,f){this.wheelForces[f]=p},c.prototype.applyWheelForce=function(p,f){var m=this.wheelAxes[f],g=this.wheelBodies[f],v=g.torque;m.scale(p,u),g.vectorToWorldFrame(u,u),v.vadd(u,v)},c.prototype.addToWorld=function(p){for(var f=this.constraints,m=this.wheelBodies.concat([this.chassisBody]),g=0;g<m.length;g++)p.add(m[g]);for(var g=0;g<f.length;g++)p.addConstraint(f[g]);p.addEventListener("preStep",this._update.bind(this))},c.prototype._update=function(){for(var p=this.wheelForces,f=0;f<p.length;f++)this.applyWheelForce(p[f],f)},c.prototype.removeFromWorld=function(p){for(var f=this.constraints,m=this.wheelBodies.concat([this.chassisBody]),g=0;g<m.length;g++)p.remove(m[g]);for(var g=0;g<f.length;g++)p.removeConstraint(f[g])};var d=new o;c.prototype.getWheelSpeed=function(p){var f=this.wheelAxes[p],m=this.wheelBodies[p],g=m.angularVelocity;return this.chassisBody.vectorToWorldFrame(f,d),g.dot(d)}},{"../constraints/HingeConstraint":15,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Sphere":44,"./Body":31}],34:[function(e,n,i){n.exports=s,e("../shapes/Shape");var r=e("../math/Vec3");e("../math/Quaternion"),e("../shapes/Particle"),e("../objects/Body"),e("../material/Material");function s(){this.particles=[],this.density=1,this.smoothingRadius=1,this.speedOfSound=1,this.viscosity=.01,this.eps=1e-6,this.pressures=[],this.densities=[],this.neighbors=[]}s.prototype.add=function(f){this.particles.push(f),this.neighbors.length<this.particles.length&&this.neighbors.push([])},s.prototype.remove=function(f){var m=this.particles.indexOf(f);m!==-1&&(this.particles.splice(m,1),this.neighbors.length>this.particles.length&&this.neighbors.pop())};var l=new r;s.prototype.getNeighbors=function(f,m){for(var g=this.particles.length,v=f.id,x=this.smoothingRadius*this.smoothingRadius,_=l,M=0;M!==g;M++){var S=this.particles[M];S.position.vsub(f.position,_),v!==S.id&&_.norm2()<x&&m.push(S)}};var o=new r,h=new r,c=new r,u=new r,d=new r,p=new r;s.prototype.update=function(){for(var f=this.particles.length,m=o,g=this.speedOfSound,v=this.eps,x=0;x!==f;x++){var _=this.particles[x],M=this.neighbors[x];M.length=0,this.getNeighbors(_,M),M.push(this.particles[x]);for(var S=M.length,P=0,T=0;T!==S;T++){_.position.vsub(M[T].position,m);var z=m.norm(),k=this.w(z);P+=M[T].mass*k}this.densities[x]=P,this.pressures[x]=g*g*(this.densities[x]-this.density)}for(var L=h,D=c,A=u,V=d,j=p,x=0;x!==f;x++){var Q=this.particles[x];L.set(0,0,0),D.set(0,0,0);for(var pt,H,M=this.neighbors[x],S=M.length,T=0;T!==S;T++){var O=M[T];Q.position.vsub(O.position,V);var X=V.norm();pt=-O.mass*(this.pressures[x]/(this.densities[x]*this.densities[x]+v)+this.pressures[T]/(this.densities[T]*this.densities[T]+v)),this.gradw(V,A),A.mult(pt,A),L.vadd(A,L),O.velocity.vsub(Q.velocity,j),j.mult(1/(1e-4+this.densities[x]*this.densities[T])*this.viscosity*O.mass,j),H=this.nablaw(X),j.mult(H,j),D.vadd(j,D)}D.mult(Q.mass,D),L.mult(Q.mass,L),Q.force.vadd(D,Q.force),Q.force.vadd(L,Q.force)}},s.prototype.w=function(f){var m=this.smoothingRadius;return 315/(64*Math.PI*Math.pow(m,9))*Math.pow(m*m-f*f,3)},s.prototype.gradw=function(f,m){var g=f.norm(),v=this.smoothingRadius;f.mult(945/(32*Math.PI*Math.pow(v,9))*Math.pow(v*v-g*g,2),m)},s.prototype.nablaw=function(f){var m=this.smoothingRadius,g=945/(32*Math.PI*Math.pow(m,9))*(m*m-f*f)*(7*f*f-3*m*m);return g}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Particle":41,"../shapes/Shape":43}],35:[function(e,n,i){var r=e("../math/Vec3");n.exports=s;function s(x,_,M){M=M||{},this.restLength=typeof M.restLength=="number"?M.restLength:1,this.stiffness=M.stiffness||100,this.damping=M.damping||1,this.bodyA=x,this.bodyB=_,this.localAnchorA=new r,this.localAnchorB=new r,M.localAnchorA&&this.localAnchorA.copy(M.localAnchorA),M.localAnchorB&&this.localAnchorB.copy(M.localAnchorB),M.worldAnchorA&&this.setWorldAnchorA(M.worldAnchorA),M.worldAnchorB&&this.setWorldAnchorB(M.worldAnchorB)}s.prototype.setWorldAnchorA=function(x){this.bodyA.pointToLocalFrame(x,this.localAnchorA)},s.prototype.setWorldAnchorB=function(x){this.bodyB.pointToLocalFrame(x,this.localAnchorB)},s.prototype.getWorldAnchorA=function(x){this.bodyA.pointToWorldFrame(this.localAnchorA,x)},s.prototype.getWorldAnchorB=function(x){this.bodyB.pointToWorldFrame(this.localAnchorB,x)};var l=new r,o=new r,h=new r,c=new r,u=new r,d=new r,p=new r,f=new r,m=new r,g=new r,v=new r;s.prototype.applyForce=function(){var x=this.stiffness,_=this.damping,M=this.restLength,S=this.bodyA,P=this.bodyB,T=l,z=o,k=h,L=c,D=v,A=u,V=d,j=p,Q=f,pt=m,H=g;this.getWorldAnchorA(A),this.getWorldAnchorB(V),A.vsub(S.position,j),V.vsub(P.position,Q),V.vsub(A,T);var O=T.norm();z.copy(T),z.normalize(),P.velocity.vsub(S.velocity,k),P.angularVelocity.cross(Q,D),k.vadd(D,k),S.angularVelocity.cross(j,D),k.vsub(D,k),z.mult(-x*(O-M)-_*k.dot(z),L),S.force.vsub(L,S.force),P.force.vadd(L,P.force),j.cross(L,pt),Q.cross(L,H),S.torque.vsub(pt,S.torque),P.torque.vadd(H,P.torque)}},{"../math/Vec3":30}],36:[function(e,n,i){var r=e("../math/Vec3"),s=e("../math/Transform"),l=e("../collision/RaycastResult"),o=e("../utils/Utils");n.exports=h;function h(d){d=o.defaults(d,{chassisConnectionPointLocal:new r,chassisConnectionPointWorld:new r,directionLocal:new r,directionWorld:new r,axleLocal:new r,axleWorld:new r,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:1e4,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=d.maxSuspensionTravel,this.customSlidingRotationalSpeed=d.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=d.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=d.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=d.chassisConnectionPointWorld.clone(),this.directionLocal=d.directionLocal.clone(),this.directionWorld=d.directionWorld.clone(),this.axleLocal=d.axleLocal.clone(),this.axleWorld=d.axleWorld.clone(),this.suspensionRestLength=d.suspensionRestLength,this.suspensionMaxLength=d.suspensionMaxLength,this.radius=d.radius,this.suspensionStiffness=d.suspensionStiffness,this.dampingCompression=d.dampingCompression,this.dampingRelaxation=d.dampingRelaxation,this.frictionSlip=d.frictionSlip,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=d.rollInfluence,this.maxSuspensionForce=d.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=d.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new l,this.worldTransform=new s,this.isInContact=!1}var u=new r,c=new r,u=new r;h.prototype.updateWheel=function(d){var p=this.raycastResult;if(this.isInContact){var f=p.hitNormalWorld.dot(p.directionWorld);p.hitPointWorld.vsub(d.position,c),d.getVelocityAtWorldPoint(c,u);var m=p.hitNormalWorld.dot(u);if(f>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=1/.1;else{var g=-1/f;this.suspensionRelativeVelocity=m*g,this.clippedInvContactDotSuspension=g}}else p.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,p.directionWorld.scale(-1,p.hitNormalWorld),this.clippedInvContactDotSuspension=1}},{"../collision/RaycastResult":10,"../math/Transform":29,"../math/Vec3":30,"../utils/Utils":53}],37:[function(e,n,i){n.exports=o;var r=e("./Shape"),s=e("../math/Vec3"),l=e("./ConvexPolyhedron");function o(u){r.call(this),this.type=r.types.BOX,this.halfExtents=u,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}o.prototype=new r,o.prototype.constructor=o,o.prototype.updateConvexPolyhedronRepresentation=function(){var u=this.halfExtents.x,d=this.halfExtents.y,p=this.halfExtents.z,f=s,m=[new f(-u,-d,-p),new f(u,-d,-p),new f(u,d,-p),new f(-u,d,-p),new f(-u,-d,p),new f(u,-d,p),new f(u,d,p),new f(-u,d,p)],g=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]];new f(0,0,1),new f(0,1,0),new f(1,0,0);var v=new l(m,g);this.convexPolyhedronRepresentation=v,v.material=this.material},o.prototype.calculateLocalInertia=function(u,d){return d=d||new s,o.calculateInertia(this.halfExtents,u,d),d},o.calculateInertia=function(u,d,p){var f=u;p.x=1/12*d*(2*f.y*2*f.y+2*f.z*2*f.z),p.y=1/12*d*(2*f.x*2*f.x+2*f.z*2*f.z),p.z=1/12*d*(2*f.y*2*f.y+2*f.x*2*f.x)},o.prototype.getSideNormals=function(u,d){var p=u,f=this.halfExtents;if(p[0].set(f.x,0,0),p[1].set(0,f.y,0),p[2].set(0,0,f.z),p[3].set(-f.x,0,0),p[4].set(0,-f.y,0),p[5].set(0,0,-f.z),d!==void 0)for(var m=0;m!==p.length;m++)d.vmult(p[m],p[m]);return p},o.prototype.volume=function(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.halfExtents.norm()};var h=new s;new s,o.prototype.forEachWorldCorner=function(u,d,p){for(var f=this.halfExtents,m=[[f.x,f.y,f.z],[-f.x,f.y,f.z],[-f.x,-f.y,f.z],[-f.x,-f.y,-f.z],[f.x,-f.y,-f.z],[f.x,f.y,-f.z],[-f.x,f.y,-f.z],[f.x,-f.y,f.z]],g=0;g<m.length;g++)h.set(m[g][0],m[g][1],m[g][2]),d.vmult(h,h),u.vadd(h,h),p(h.x,h.y,h.z)};var c=[new s,new s,new s,new s,new s,new s,new s,new s];o.prototype.calculateWorldAABB=function(u,d,p,f){var m=this.halfExtents;c[0].set(m.x,m.y,m.z),c[1].set(-m.x,m.y,m.z),c[2].set(-m.x,-m.y,m.z),c[3].set(-m.x,-m.y,-m.z),c[4].set(m.x,-m.y,-m.z),c[5].set(m.x,m.y,-m.z),c[6].set(-m.x,m.y,-m.z),c[7].set(m.x,-m.y,m.z);var g=c[0];d.vmult(g,g),u.vadd(g,g),f.copy(g),p.copy(g);for(var v=1;v<8;v++){var g=c[v];d.vmult(g,g),u.vadd(g,g);var x=g.x,_=g.y,M=g.z;x>f.x&&(f.x=x),_>f.y&&(f.y=_),M>f.z&&(f.z=M),x<p.x&&(p.x=x),_<p.y&&(p.y=_),M<p.z&&(p.z=M)}}},{"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],38:[function(e,n,i){n.exports=o;var r=e("./Shape"),s=e("../math/Vec3");e("../math/Quaternion");var l=e("../math/Transform");function o(R,W,E){r.call(this),this.type=r.types.CONVEXPOLYHEDRON,this.vertices=R||[],this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.faces=W||[],this.faceNormals=[],this.computeNormals(),this.worldFaceNormalsNeedsUpdate=!0,this.worldFaceNormals=[],this.uniqueEdges=[],this.uniqueAxes=E?E.slice():null,this.computeEdges(),this.updateBoundingSphereRadius()}o.prototype=new r,o.prototype.constructor=o;var h=new s;o.prototype.computeEdges=function(){var R=this.faces,W=this.vertices;W.length;var E=this.uniqueEdges;E.length=0;for(var y=h,b=0;b!==R.length;b++)for(var N=R[b],F=N.length,B=0;B!==F;B++){var U=(B+1)%F;W[N[B]].vsub(W[N[U]],y),y.normalize();for(var G=!1,J=0;J!==E.length;J++)if(E[J].almostEquals(y)||E[J].almostEquals(y)){G=!0;break}G||E.push(y.clone())}},o.prototype.computeNormals=function(){this.faceNormals.length=this.faces.length;for(var R=0;R<this.faces.length;R++){for(var W=0;W<this.faces[R].length;W++)if(!this.vertices[this.faces[R][W]])throw new Error("Vertex "+this.faces[R][W]+" not found!");var E=this.faceNormals[R]||new s;this.getFaceNormal(R,E),E.negate(E),this.faceNormals[R]=E;var y=this.vertices[this.faces[R][0]];if(E.dot(y)<0){console.error(".faceNormals["+R+"] = Vec3("+E.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");for(var W=0;W<this.faces[R].length;W++)console.warn(".vertices["+this.faces[R][W]+"] = Vec3("+this.vertices[this.faces[R][W]].toString()+")")}}};var c=new s,u=new s;o.computeNormal=function(R,W,E,y){W.vsub(R,u),E.vsub(W,c),c.cross(u,y),y.isZero()||y.normalize()},o.prototype.getFaceNormal=function(R,W){var E=this.faces[R],y=this.vertices[E[0]],b=this.vertices[E[1]],N=this.vertices[E[2]];return o.computeNormal(y,b,N,W)};var d=new s;o.prototype.clipAgainstHull=function(R,W,E,y,b,N,F,B,U){for(var G=d,J=-1,ft=-Number.MAX_VALUE,dt=0;dt<E.faces.length;dt++){G.copy(E.faceNormals[dt]),b.vmult(G,G);var w=G.dot(N);w>ft&&(ft=w,J=dt)}for(var K=[],q=E.faces[J],it=q.length,ot=0;ot<it;ot++){var yt=E.vertices[q[ot]],lt=new s;lt.copy(yt),b.vmult(lt,lt),y.vadd(lt,lt),K.push(lt)}J>=0&&this.clipFaceAgainstHull(N,R,W,K,F,B,U)};var p=new s,f=new s,m=new s,g=new s,v=new s,x=new s;o.prototype.findSeparatingAxis=function(R,W,E,y,b,N,F,B){var U=p,G=f,J=m,ft=g,dt=v,w=x,K=Number.MAX_VALUE,q=this;if(q.uniqueAxes)for(var ot=0;ot!==q.uniqueAxes.length;ot++){E.vmult(q.uniqueAxes[ot],U);var lt=q.testSepAxis(U,R,W,E,y,b);if(lt===!1)return!1;lt<K&&(K=lt,N.copy(U))}else for(var it=F?F.length:q.faces.length,ot=0;ot<it;ot++){var yt=F?F[ot]:ot;U.copy(q.faceNormals[yt]),E.vmult(U,U);var lt=q.testSepAxis(U,R,W,E,y,b);if(lt===!1)return!1;lt<K&&(K=lt,N.copy(U))}if(R.uniqueAxes)for(var ot=0;ot!==R.uniqueAxes.length;ot++){b.vmult(R.uniqueAxes[ot],G);var lt=q.testSepAxis(G,R,W,E,y,b);if(lt===!1)return!1;lt<K&&(K=lt,N.copy(G))}else for(var St=B?B.length:R.faces.length,ot=0;ot<St;ot++){var yt=B?B[ot]:ot;G.copy(R.faceNormals[yt]),b.vmult(G,G);var lt=q.testSepAxis(G,R,W,E,y,b);if(lt===!1)return!1;lt<K&&(K=lt,N.copy(G))}for(var It=0;It!==q.uniqueEdges.length;It++){E.vmult(q.uniqueEdges[It],ft);for(var bt=0;bt!==R.uniqueEdges.length;bt++)if(b.vmult(R.uniqueEdges[bt],dt),ft.cross(dt,w),!w.almostZero()){w.normalize();var Ut=q.testSepAxis(w,R,W,E,y,b);if(Ut===!1)return!1;Ut<K&&(K=Ut,N.copy(w))}}return y.vsub(W,J),J.dot(N)>0&&N.negate(N),!0};var _=[],M=[];o.prototype.testSepAxis=function(R,W,E,y,b,N){var F=this;o.project(F,R,E,y,_),o.project(W,R,b,N,M);var B=_[0],U=_[1],G=M[0],J=M[1],ft=B-J,dt=G-U,w=ft<dt?ft:dt;return w};var S=new s,P=new s;o.prototype.calculateLocalInertia=function(R,W){this.computeLocalAABB(S,P);var E=P.x-S.x,y=P.y-S.y,b=P.z-S.z;W.x=1/12*R*(2*y*2*y+2*b*2*b),W.y=1/12*R*(2*E*2*E+2*b*2*b),W.z=1/12*R*(2*y*2*y+2*E*2*E)},o.prototype.getPlaneConstantOfFace=function(R){var W=this.faces[R],E=this.faceNormals[R],y=this.vertices[W[0]],b=-E.dot(y);return b};var T=new s,z=new s,k=new s,L=new s,D=new s,A=new s,V=new s,j=new s;o.prototype.clipFaceAgainstHull=function(R,W,E,y,b,N,F){for(var B=T,U=z,G=k,J=L,ft=D,dt=A,w=V,K=j,q=this,it=[],ot=y,yt=it,lt=-1,St=Number.MAX_VALUE,It=0;It<q.faces.length;It++){B.copy(q.faceNormals[It]),E.vmult(B,B);var bt=B.dot(R);bt<St&&(St=bt,lt=It)}if(!(lt<0)){var Ut=q.faces[lt];Ut.connectedFaces=[];for(var Mt=0;Mt<q.faces.length;Mt++)for(var Ft=0;Ft<q.faces[Mt].length;Ft++)Ut.indexOf(q.faces[Mt][Ft])!==-1&&Mt!==lt&&Ut.connectedFaces.indexOf(Mt)===-1&&Ut.connectedFaces.push(Mt);ot.length;for(var Ot=Ut.length,Lt=0;Lt<Ot;Lt++){var Bt=q.vertices[Ut[Lt]],jt=q.vertices[Ut[(Lt+1)%Ot]];Bt.vsub(jt,U),G.copy(U),E.vmult(G,G),W.vadd(G,G),J.copy(this.faceNormals[lt]),E.vmult(J,J),W.vadd(J,J),G.cross(J,ft),ft.negate(ft),dt.copy(Bt),E.vmult(dt,dt),W.vadd(dt,dt),-dt.dot(ft);var At;{var Ae=Ut.connectedFaces[Lt];w.copy(this.faceNormals[Ae]);var tt=this.getPlaneConstantOfFace(Ae);K.copy(w),E.vmult(K,K);var At=tt-K.dot(W)}for(this.clipFaceAgainstPlane(ot,yt,K,At);ot.length;)ot.shift();for(;yt.length;)ot.push(yt.shift())}w.copy(this.faceNormals[lt]);var tt=this.getPlaneConstantOfFace(lt);K.copy(w),E.vmult(K,K);for(var At=tt-K.dot(W),Mt=0;Mt<ot.length;Mt++){var Xt=K.dot(ot[Mt])+At;if(Xt<=b&&(console.log("clamped: depth="+Xt+" to minDist="+(b+"")),Xt=b),Xt<=N){var Kt=ot[Mt];if(Xt<=0){var rt={point:Kt,normal:K,depth:Xt};F.push(rt)}}}}},o.prototype.clipFaceAgainstPlane=function(R,W,E,y){var b,N,F=R.length;if(F<2)return W;var B=R[R.length-1],U=R[0];b=E.dot(B)+y;for(var G=0;G<F;G++){if(U=R[G],N=E.dot(U)+y,b<0)if(N<0){var J=new s;J.copy(U),W.push(J)}else{var J=new s;B.lerp(U,b/(b-N),J),W.push(J)}else if(N<0){var J=new s;B.lerp(U,b/(b-N),J),W.push(J),W.push(U)}B=U,b=N}return W},o.prototype.computeWorldVertices=function(R,W){for(var E=this.vertices.length;this.worldVertices.length<E;)this.worldVertices.push(new s);for(var y=this.vertices,b=this.worldVertices,N=0;N!==E;N++)W.vmult(y[N],b[N]),R.vadd(b[N],b[N]);this.worldVerticesNeedsUpdate=!1},new s,o.prototype.computeLocalAABB=function(R,W){var E=this.vertices.length,y=this.vertices;R.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),W.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(var b=0;b<E;b++){var N=y[b];N.x<R.x?R.x=N.x:N.x>W.x&&(W.x=N.x),N.y<R.y?R.y=N.y:N.y>W.y&&(W.y=N.y),N.z<R.z?R.z=N.z:N.z>W.z&&(W.z=N.z)}},o.prototype.computeWorldFaceNormals=function(R){for(var W=this.faceNormals.length;this.worldFaceNormals.length<W;)this.worldFaceNormals.push(new s);for(var E=this.faceNormals,y=this.worldFaceNormals,b=0;b!==W;b++)R.vmult(E[b],y[b]);this.worldFaceNormalsNeedsUpdate=!1},o.prototype.updateBoundingSphereRadius=function(){for(var R=0,W=this.vertices,E=0,y=W.length;E!==y;E++){var b=W[E].norm2();b>R&&(R=b)}this.boundingSphereRadius=Math.sqrt(R)};var Q=new s;o.prototype.calculateWorldAABB=function(R,W,E,y){for(var b=this.vertices.length,N=this.vertices,F,B,U,G,J,ft,dt=0;dt<b;dt++){Q.copy(N[dt]),W.vmult(Q,Q),R.vadd(Q,Q);var w=Q;w.x<F||F===void 0?F=w.x:(w.x>G||G===void 0)&&(G=w.x),w.y<B||B===void 0?B=w.y:(w.y>J||J===void 0)&&(J=w.y),w.z<U||U===void 0?U=w.z:(w.z>ft||ft===void 0)&&(ft=w.z)}E.set(F,B,U),y.set(G,J,ft)},o.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},o.prototype.getAveragePointLocal=function(R){R=R||new s;for(var W=this.vertices.length,E=this.vertices,y=0;y<W;y++)R.vadd(E[y],R);return R.mult(1/W,R),R},o.prototype.transformAllPoints=function(R,W){var E=this.vertices.length,y=this.vertices;if(W){for(var b=0;b<E;b++){var N=y[b];W.vmult(N,N)}for(var b=0;b<this.faceNormals.length;b++){var N=this.faceNormals[b];W.vmult(N,N)}}if(R)for(var b=0;b<E;b++){var N=y[b];N.vadd(R,N)}};var pt=new s,H=new s,O=new s;o.prototype.pointIsInside=function(R){var W=this.vertices.length,E=this.vertices,y=this.faces,b=this.faceNormals,N=null,F=this.faces.length,B=pt;this.getAveragePointLocal(B);for(var U=0;U<F;U++){this.faces[U].length;var W=b[U],G=E[y[U][0]],J=H;R.vsub(G,J);var ft=W.dot(J),dt=O;B.vsub(G,dt);var w=W.dot(dt);if(ft<0&&w>0||ft>0&&w<0)return!1}return N?1:-1},new s;var X=new s,Z=new s;o.project=function(R,W,E,y,b){var N=R.vertices.length,F=X,B=0,U=0,G=Z,J=R.vertices;G.setZero(),l.vectorToLocalFrame(E,y,W,F),l.pointToLocalFrame(E,y,G,G);var ft=G.dot(F);U=B=J[0].dot(F);for(var dt=1;dt<N;dt++){var w=J[dt].dot(F);w>B&&(B=w),w<U&&(U=w)}if(U-=ft,B-=ft,U>B){var K=U;U=B,B=K}b[0]=B,b[1]=U}},{"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"./Shape":43}],39:[function(e,n,i){n.exports=o;var r=e("./Shape"),s=e("../math/Vec3");e("../math/Quaternion");var l=e("./ConvexPolyhedron");function o(h,c,u,d){var p=d,f=[],m=[],g=[],v=[],x=[],_=Math.cos,M=Math.sin;f.push(new s(c*_(0),c*M(0),-u*.5)),v.push(0),f.push(new s(h*_(0),h*M(0),u*.5)),x.push(1);for(var S=0;S<p;S++){var P=2*Math.PI/p*(S+1),T=2*Math.PI/p*(S+.5);S<p-1?(f.push(new s(c*_(P),c*M(P),-u*.5)),v.push(2*S+2),f.push(new s(h*_(P),h*M(P),u*.5)),x.push(2*S+3),g.push([2*S+2,2*S+3,2*S+1,2*S])):g.push([0,1,2*S+1,2*S]),(p%2===1||S<p/2)&&m.push(new s(_(T),M(T),0))}g.push(x),m.push(new s(0,0,1));for(var z=[],S=0;S<v.length;S++)z.push(v[v.length-S-1]);g.push(z),this.type=r.types.CONVEXPOLYHEDRON,l.call(this,f,g,m)}o.prototype=new l},{"../math/Quaternion":28,"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],40:[function(e,n,i){var r=e("./Shape"),s=e("./ConvexPolyhedron"),l=e("../math/Vec3"),o=e("../utils/Utils");n.exports=h;function h(c,u){u=o.defaults(u,{maxValue:null,minValue:null,elementSize:1}),this.data=c,this.maxValue=u.maxValue,this.minValue=u.minValue,this.elementSize=u.elementSize,u.minValue===null&&this.updateMinValue(),u.maxValue===null&&this.updateMaxValue(),this.cacheEnabled=!0,r.call(this),this.pillarConvex=new s,this.pillarOffset=new l,this.type=r.types.HEIGHTFIELD,this.updateBoundingSphereRadius(),this._cachedPillars={}}h.prototype=new r,h.prototype.update=function(){this._cachedPillars={}},h.prototype.updateMinValue=function(){for(var c=this.data,u=c[0][0],d=0;d!==c.length;d++)for(var p=0;p!==c[d].length;p++){var f=c[d][p];f<u&&(u=f)}this.minValue=u},h.prototype.updateMaxValue=function(){for(var c=this.data,u=c[0][0],d=0;d!==c.length;d++)for(var p=0;p!==c[d].length;p++){var f=c[d][p];f>u&&(u=f)}this.maxValue=u},h.prototype.setHeightValueAtIndex=function(c,u,d){var p=this.data;p[c][u]=d,this.clearCachedConvexTrianglePillar(c,u,!1),c>0&&(this.clearCachedConvexTrianglePillar(c-1,u,!0),this.clearCachedConvexTrianglePillar(c-1,u,!1)),u>0&&(this.clearCachedConvexTrianglePillar(c,u-1,!0),this.clearCachedConvexTrianglePillar(c,u-1,!1)),u>0&&c>0&&this.clearCachedConvexTrianglePillar(c-1,u-1,!0)},h.prototype.getRectMinMax=function(c,u,d,p,f){f=f||[];for(var m=this.data,g=this.minValue,v=c;v<=d;v++)for(var x=u;x<=p;x++){var _=m[v][x];_>g&&(g=_)}f[0]=this.minValue,f[1]=g},h.prototype.getIndexOfPosition=function(c,u,d,p){var f=this.elementSize,m=this.data,g=Math.floor(c/f),v=Math.floor(u/f);return d[0]=g,d[1]=v,p&&(g<0&&(g=0),v<0&&(v=0),g>=m.length-1&&(g=m.length-1),v>=m[0].length-1&&(v=m[0].length-1)),!(g<0||v<0||g>=m.length-1||v>=m[0].length-1)},h.prototype.getHeightAt=function(c,u,d){var p=[];this.getIndexOfPosition(c,u,p,d);var f=[];return this.getRectMinMax(p[0],p[1]+1,p[0],p[1]+1,f),(f[0]+f[1])/2},h.prototype.getCacheConvexTrianglePillarKey=function(c,u,d){return c+"_"+u+"_"+(d?1:0)},h.prototype.getCachedConvexTrianglePillar=function(c,u,d){return this._cachedPillars[this.getCacheConvexTrianglePillarKey(c,u,d)]},h.prototype.setCachedConvexTrianglePillar=function(c,u,d,p,f){this._cachedPillars[this.getCacheConvexTrianglePillarKey(c,u,d)]={convex:p,offset:f}},h.prototype.clearCachedConvexTrianglePillar=function(c,u,d){delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(c,u,d)]},h.prototype.getConvexTrianglePillar=function(c,u,d){var p=this.pillarConvex,f=this.pillarOffset;if(this.cacheEnabled){var m=this.getCachedConvexTrianglePillar(c,u,d);if(m){this.pillarConvex=m.convex,this.pillarOffset=m.offset;return}p=new s,f=new l,this.pillarConvex=p,this.pillarOffset=f}var m=this.data,g=this.elementSize,v=p.faces;p.vertices.length=6;for(var x=0;x<6;x++)p.vertices[x]||(p.vertices[x]=new l);v.length=5;for(var x=0;x<5;x++)v[x]||(v[x]=[]);var _=p.vertices,M=(Math.min(m[c][u],m[c+1][u],m[c][u+1],m[c+1][u+1])-this.minValue)/2+this.minValue;d?(f.set((c+.75)*g,(u+.75)*g,M),_[0].set(.25*g,.25*g,m[c+1][u+1]-M),_[1].set(-.75*g,.25*g,m[c][u+1]-M),_[2].set(.25*g,-.75*g,m[c+1][u]-M),_[3].set(.25*g,.25*g,-M-1),_[4].set(-.75*g,.25*g,-M-1),_[5].set(.25*g,-.75*g,-M-1),v[0][0]=0,v[0][1]=1,v[0][2]=2,v[1][0]=5,v[1][1]=4,v[1][2]=3,v[2][0]=2,v[2][1]=5,v[2][2]=3,v[2][3]=0,v[3][0]=3,v[3][1]=4,v[3][2]=1,v[3][3]=0,v[4][0]=1,v[4][1]=4,v[4][2]=5,v[4][3]=2):(f.set((c+.25)*g,(u+.25)*g,M),_[0].set(-.25*g,-.25*g,m[c][u]-M),_[1].set(.75*g,-.25*g,m[c+1][u]-M),_[2].set(-.25*g,.75*g,m[c][u+1]-M),_[3].set(-.25*g,-.25*g,-M-1),_[4].set(.75*g,-.25*g,-M-1),_[5].set(-.25*g,.75*g,-M-1),v[0][0]=0,v[0][1]=1,v[0][2]=2,v[1][0]=5,v[1][1]=4,v[1][2]=3,v[2][0]=0,v[2][1]=2,v[2][2]=5,v[2][3]=3,v[3][0]=1,v[3][1]=0,v[3][2]=3,v[3][3]=4,v[4][0]=4,v[4][1]=5,v[4][2]=2,v[4][3]=1),p.computeNormals(),p.computeEdges(),p.updateBoundingSphereRadius(),this.setCachedConvexTrianglePillar(c,u,d,p,f)},h.prototype.calculateLocalInertia=function(c,u){return u=u||new l,u.set(0,0,0),u},h.prototype.volume=function(){return Number.MAX_VALUE},h.prototype.calculateWorldAABB=function(c,u,d,p){d.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),p.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)},h.prototype.updateBoundingSphereRadius=function(){var c=this.data,u=this.elementSize;this.boundingSphereRadius=new l(c.length*u,c[0].length*u,Math.max(Math.abs(this.maxValue),Math.abs(this.minValue))).norm()}},{"../math/Vec3":30,"../utils/Utils":53,"./ConvexPolyhedron":38,"./Shape":43}],41:[function(e,n,i){n.exports=l;var r=e("./Shape"),s=e("../math/Vec3");function l(){r.call(this),this.type=r.types.PARTICLE}l.prototype=new r,l.prototype.constructor=l,l.prototype.calculateLocalInertia=function(o,h){return h=h||new s,h.set(0,0,0),h},l.prototype.volume=function(){return 0},l.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=0},l.prototype.calculateWorldAABB=function(o,h,c,u){c.copy(o),u.copy(o)}},{"../math/Vec3":30,"./Shape":43}],42:[function(e,n,i){n.exports=l;var r=e("./Shape"),s=e("../math/Vec3");function l(){r.call(this),this.type=r.types.PLANE,this.worldNormal=new s,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}l.prototype=new r,l.prototype.constructor=l,l.prototype.computeWorldNormal=function(h){var c=this.worldNormal;c.set(0,0,1),h.vmult(c,c),this.worldNormalNeedsUpdate=!1},l.prototype.calculateLocalInertia=function(h,c){return c=c||new s,c},l.prototype.volume=function(){return Number.MAX_VALUE};var o=new s;l.prototype.calculateWorldAABB=function(h,c,u,d){o.set(0,0,1),c.vmult(o,o);var p=Number.MAX_VALUE;u.set(-p,-p,-p),d.set(p,p,p),o.x===1&&(d.x=h.x),o.y===1&&(d.y=h.y),o.z===1&&(d.z=h.z),o.x===-1&&(u.x=h.x),o.y===-1&&(u.y=h.y),o.z===-1&&(u.z=h.z)},l.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=Number.MAX_VALUE}},{"../math/Vec3":30,"./Shape":43}],43:[function(e,n,i){n.exports=r;var r=e("./Shape");e("../math/Vec3"),e("../math/Quaternion"),e("../material/Material");function r(){this.id=r.idCounter++,this.type=0,this.boundingSphereRadius=0,this.collisionResponse=!0,this.material=null}r.prototype.constructor=r,r.prototype.updateBoundingSphereRadius=function(){throw"computeBoundingSphereRadius() not implemented for shape type "+this.type},r.prototype.volume=function(){throw"volume() not implemented for shape type "+this.type},r.prototype.calculateLocalInertia=function(s,l){throw"calculateLocalInertia() not implemented for shape type "+this.type},r.idCounter=0,r.types={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"./Shape":43}],44:[function(e,n,i){n.exports=l;var r=e("./Shape"),s=e("../math/Vec3");function l(o){if(r.call(this),this.radius=o!==void 0?Number(o):1,this.type=r.types.SPHERE,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}l.prototype=new r,l.prototype.constructor=l,l.prototype.calculateLocalInertia=function(o,h){h=h||new s;var c=2*o*this.radius*this.radius/5;return h.x=c,h.y=c,h.z=c,h},l.prototype.volume=function(){return 4*Math.PI*this.radius/3},l.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.radius},l.prototype.calculateWorldAABB=function(o,h,c,u){for(var d=this.radius,p=["x","y","z"],f=0;f<p.length;f++){var m=p[f];c[m]=o[m]-d,u[m]=o[m]+d}}},{"../math/Vec3":30,"./Shape":43}],45:[function(e,n,i){n.exports=c;var r=e("./Shape"),s=e("../math/Vec3");e("../math/Quaternion");var l=e("../math/Transform"),o=e("../collision/AABB"),h=e("../utils/Octree");function c(z,k){r.call(this),this.type=r.types.TRIMESH,this.vertices=new Float32Array(z),this.indices=new Int16Array(k),this.normals=new Float32Array(k.length),this.aabb=new o,this.edges=null,this.scale=new s(1,1,1),this.tree=new h,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}c.prototype=new r,c.prototype.constructor=c;var u=new s;c.prototype.updateTree=function(){var z=this.tree;z.reset(),z.aabb.copy(this.aabb);var k=this.scale;z.aabb.lowerBound.x*=1/k.x,z.aabb.lowerBound.y*=1/k.y,z.aabb.lowerBound.z*=1/k.z,z.aabb.upperBound.x*=1/k.x,z.aabb.upperBound.y*=1/k.y,z.aabb.upperBound.z*=1/k.z;for(var L=new o,D=new s,A=new s,V=new s,j=[D,A,V],Q=0;Q<this.indices.length/3;Q++){var pt=Q*3;this._getUnscaledVertex(this.indices[pt],D),this._getUnscaledVertex(this.indices[pt+1],A),this._getUnscaledVertex(this.indices[pt+2],V),L.setFromPoints(j),z.insert(L,Q)}z.removeEmptyNodes()};var d=new o;c.prototype.getTrianglesInAABB=function(z,k){d.copy(z);var L=this.scale,D=L.x,A=L.y,V=L.z,j=d.lowerBound,Q=d.upperBound;return j.x/=D,j.y/=A,j.z/=V,Q.x/=D,Q.y/=A,Q.z/=V,this.tree.aabbQuery(d,k)},c.prototype.setScale=function(z){var k=this.scale.x===this.scale.y===this.scale.z,L=z.x===z.y===z.z;k&&L||this.updateNormals(),this.scale.copy(z),this.updateAABB(),this.updateBoundingSphereRadius()},c.prototype.updateNormals=function(){for(var z=u,k=this.normals,L=0;L<this.indices.length/3;L++){var D=L*3,A=this.indices[D],V=this.indices[D+1],j=this.indices[D+2];this.getVertex(A,v),this.getVertex(V,x),this.getVertex(j,_),c.computeNormal(x,v,_,z),k[D]=z.x,k[D+1]=z.y,k[D+2]=z.z}},c.prototype.updateEdges=function(){for(var z={},k=function(pt,H){var O=A<V?A+"_"+V:V+"_"+A;z[O]=!0},L=0;L<this.indices.length/3;L++){var D=L*3,A=this.indices[D],V=this.indices[D+1];this.indices[D+2],k(),k(),k()}var j=Object.keys(z);this.edges=new Int16Array(j.length*2);for(var L=0;L<j.length;L++){var Q=j[L].split("_");this.edges[2*L]=parseInt(Q[0],10),this.edges[2*L+1]=parseInt(Q[1],10)}},c.prototype.getEdgeVertex=function(z,k,L){var D=this.edges[z*2+(k?1:0)];this.getVertex(D,L)};var p=new s,f=new s;c.prototype.getEdgeVector=function(z,k){var L=p,D=f;this.getEdgeVertex(z,0,L),this.getEdgeVertex(z,1,D),D.vsub(L,k)};var m=new s,g=new s;c.computeNormal=function(z,k,L,D){k.vsub(z,g),L.vsub(k,m),m.cross(g,D),D.isZero()||D.normalize()};var v=new s,x=new s,_=new s;c.prototype.getVertex=function(z,k){var L=this.scale;return this._getUnscaledVertex(z,k),k.x*=L.x,k.y*=L.y,k.z*=L.z,k},c.prototype._getUnscaledVertex=function(z,k){var L=z*3,D=this.vertices;return k.set(D[L],D[L+1],D[L+2])},c.prototype.getWorldVertex=function(z,k,L,D){return this.getVertex(z,D),l.pointToWorldFrame(k,L,D,D),D},c.prototype.getTriangleVertices=function(z,k,L,D){var A=z*3;this.getVertex(this.indices[A],k),this.getVertex(this.indices[A+1],L),this.getVertex(this.indices[A+2],D)},c.prototype.getNormal=function(z,k){var L=z*3;return k.set(this.normals[L],this.normals[L+1],this.normals[L+2])};var M=new o;c.prototype.calculateLocalInertia=function(z,k){this.computeLocalAABB(M);var L=M.upperBound.x-M.lowerBound.x,D=M.upperBound.y-M.lowerBound.y,A=M.upperBound.z-M.lowerBound.z;return k.set(1/12*z*(2*D*2*D+2*A*2*A),1/12*z*(2*L*2*L+2*A*2*A),1/12*z*(2*D*2*D+2*L*2*L))};var S=new s;c.prototype.computeLocalAABB=function(z){var k=z.lowerBound,L=z.upperBound,D=this.vertices.length;this.vertices;var A=S;this.getVertex(0,A),k.copy(A),L.copy(A);for(var V=0;V!==D;V++)this.getVertex(V,A),A.x<k.x?k.x=A.x:A.x>L.x&&(L.x=A.x),A.y<k.y?k.y=A.y:A.y>L.y&&(L.y=A.y),A.z<k.z?k.z=A.z:A.z>L.z&&(L.z=A.z)},c.prototype.updateAABB=function(){this.computeLocalAABB(this.aabb)},c.prototype.updateBoundingSphereRadius=function(){for(var z=0,k=this.vertices,L=new s,D=0,A=k.length/3;D!==A;D++){this.getVertex(D,L);var V=L.norm2();V>z&&(z=V)}this.boundingSphereRadius=Math.sqrt(z)},new s;var P=new l,T=new o;c.prototype.calculateWorldAABB=function(z,k,L,D){var A=P,V=T;A.position=z,A.quaternion=k,this.aabb.toWorldFrame(A,V),L.copy(V.lowerBound),D.copy(V.upperBound)},c.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},c.createTorus=function(z,k,L,D,A){z=z||1,k=k||.5,L=L||8,D=D||6,A=A||Math.PI*2;for(var V=[],j=[],Q=0;Q<=L;Q++)for(var pt=0;pt<=D;pt++){var H=pt/D*A,O=Q/L*Math.PI*2,X=(z+k*Math.cos(O))*Math.cos(H),Z=(z+k*Math.cos(O))*Math.sin(H),R=k*Math.sin(O);V.push(X,Z,R)}for(var Q=1;Q<=L;Q++)for(var pt=1;pt<=D;pt++){var W=(D+1)*Q+pt-1,E=(D+1)*(Q-1)+pt-1,y=(D+1)*(Q-1)+pt,b=(D+1)*Q+pt;j.push(W,E,b),j.push(E,y,b)}return new c(V,j)}},{"../collision/AABB":3,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../utils/Octree":50,"./Shape":43}],46:[function(e,n,i){n.exports=s,e("../math/Vec3"),e("../math/Quaternion");var r=e("./Solver");function s(){r.call(this),this.iterations=10,this.tolerance=1e-7}s.prototype=new r;var l=[],o=[],h=[];s.prototype.solve=function(c,u){var d=0,p=this.iterations,f=this.tolerance*this.tolerance,m=this.equations,g=m.length,v=u.bodies,x=v.length,_=c,M,S,P,T,z,k;if(g!==0)for(var L=0;L!==x;L++)v[L].updateSolveMassProperties();var D=o,A=h,V=l;D.length=g,A.length=g,V.length=g;for(var L=0;L!==g;L++){var j=m[L];V[L]=0,A[L]=j.computeB(_),D[L]=1/j.computeC()}if(g!==0){for(var L=0;L!==x;L++){var Q=v[L],pt=Q.vlambda,H=Q.wlambda;pt.set(0,0,0),H&&H.set(0,0,0)}for(d=0;d!==p;d++){T=0;for(var O=0;O!==g;O++){var j=m[O];M=A[O],S=D[O],k=V[O],z=j.computeGWlambda(),P=S*(M-z-j.eps*k),k+P<j.minForce?P=j.minForce-k:k+P>j.maxForce&&(P=j.maxForce-k),V[O]+=P,T+=P>0?P:-P,j.addToWlambda(P)}if(T*T<f)break}for(var L=0;L!==x;L++){var Q=v[L],X=Q.velocity,Z=Q.angularVelocity;X.vadd(Q.vlambda,X),Z&&Z.vadd(Q.wlambda,Z)}}return d}},{"../math/Quaternion":28,"../math/Vec3":30,"./Solver":47}],47:[function(e,n,i){n.exports=r;function r(){this.equations=[]}r.prototype.solve=function(s,l){return 0},r.prototype.addEquation=function(s){s.enabled&&this.equations.push(s)},r.prototype.removeEquation=function(s){var l=this.equations,o=l.indexOf(s);o!==-1&&l.splice(o,1)},r.prototype.removeAllEquations=function(){this.equations.length=0}},{}],48:[function(e,n,i){n.exports=l,e("../math/Vec3"),e("../math/Quaternion");var r=e("./Solver"),s=e("../objects/Body");function l(v){for(r.call(this),this.iterations=10,this.tolerance=1e-7,this.subsolver=v,this.nodes=[],this.nodePool=[];this.nodePool.length<128;)this.nodePool.push(this.createNode())}l.prototype=new r;var o=[],h=[],c={bodies:[]},u=s.STATIC;function d(v){for(var x=v.length,_=0;_!==x;_++){var M=v[_];if(!M.visited&&!(M.body.type&u))return M}return!1}var p=[];function f(v,x,_,M){for(p.push(v),v.visited=!0,x(v,_,M);p.length;)for(var S=p.pop(),P;P=d(S.children);)P.visited=!0,x(P,_,M),p.push(P)}function m(v,x,_){x.push(v.body);for(var M=v.eqs.length,S=0;S!==M;S++){var P=v.eqs[S];_.indexOf(P)===-1&&_.push(P)}}l.prototype.createNode=function(){return{body:null,children:[],eqs:[],visited:!1}},l.prototype.solve=function(v,x){for(var _=o,M=this.nodePool,S=x.bodies,P=this.equations,T=P.length,z=S.length,k=this.subsolver;M.length<z;)M.push(this.createNode());_.length=z;for(var L=0;L<z;L++)_[L]=M[L];for(var L=0;L!==z;L++){var D=_[L];D.body=S[L],D.children.length=0,D.eqs.length=0,D.visited=!1}for(var A=0;A!==T;A++){var V=P[A],L=S.indexOf(V.bi),j=S.indexOf(V.bj),Q=_[L],pt=_[j];Q.children.push(pt),Q.eqs.push(V),pt.children.push(Q),pt.eqs.push(V)}var H,O=0,X=h;k.tolerance=this.tolerance,k.iterations=this.iterations;for(var Z=c;H=d(_);){X.length=0,Z.bodies.length=0,f(H,m,Z.bodies,X);var R=X.length;X=X.sort(g);for(var L=0;L!==R;L++)k.addEquation(X[L]);k.solve(v,Z),k.removeAllEquations(),O++}return O};function g(v,x){return x.id-v.id}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"./Solver":47}],49:[function(e,n,i){var r=function(){};n.exports=r,r.prototype={constructor:r,addEventListener:function(s,l){this._listeners===void 0&&(this._listeners={});var o=this._listeners;return o[s]===void 0&&(o[s]=[]),o[s].indexOf(l)===-1&&o[s].push(l),this},hasEventListener:function(s,l){if(this._listeners===void 0)return!1;var o=this._listeners;return o[s]!==void 0&&o[s].indexOf(l)!==-1},removeEventListener:function(s,l){if(this._listeners===void 0)return this;var o=this._listeners;if(o[s]===void 0)return this;var h=o[s].indexOf(l);return h!==-1&&o[s].splice(h,1),this},dispatchEvent:function(s){if(this._listeners===void 0)return this;var l=this._listeners,o=l[s.type];if(o!==void 0){s.target=this;for(var h=0,c=o.length;h<c;h++)o[h].call(this,s)}return this}}},{}],50:[function(e,n,i){var r=e("../collision/AABB"),s=e("../math/Vec3");n.exports=o;function l(u){u=u||{},this.root=u.root||null,this.aabb=u.aabb?u.aabb.clone():new r,this.data=[],this.children=[]}function o(u,d){d=d||{},d.root=null,d.aabb=u,l.call(this,d),this.maxDepth=typeof d.maxDepth<"u"?d.maxDepth:8}o.prototype=new l,l.prototype.reset=function(u,d){this.children.length=this.data.length=0},l.prototype.insert=function(u,d,p){var f=this.data;if(p=p||0,!this.aabb.contains(u))return!1;var m=this.children;if(p<(this.maxDepth||this.root.maxDepth)){var g=!1;m.length||(this.subdivide(),g=!0);for(var v=0;v!==8;v++)if(m[v].insert(u,d,p+1))return!0;g&&(m.length=0)}return f.push(d),!0};var h=new s;l.prototype.subdivide=function(){var u=this.aabb,d=u.lowerBound,p=u.upperBound,f=this.children;f.push(new l({aabb:new r({lowerBound:new s(0,0,0)})}),new l({aabb:new r({lowerBound:new s(1,0,0)})}),new l({aabb:new r({lowerBound:new s(1,1,0)})}),new l({aabb:new r({lowerBound:new s(1,1,1)})}),new l({aabb:new r({lowerBound:new s(0,1,1)})}),new l({aabb:new r({lowerBound:new s(0,0,1)})}),new l({aabb:new r({lowerBound:new s(1,0,1)})}),new l({aabb:new r({lowerBound:new s(0,1,0)})})),p.vsub(d,h),h.scale(.5,h);for(var m=this.root||this,g=0;g!==8;g++){var v=f[g];v.root=m;var x=v.aabb.lowerBound;x.x*=h.x,x.y*=h.y,x.z*=h.z,x.vadd(d,x),x.vadd(h,v.aabb.upperBound)}},l.prototype.aabbQuery=function(u,d){this.data,this.children;for(var p=[this];p.length;){var f=p.pop();f.aabb.overlaps(u)&&Array.prototype.push.apply(d,f.data),Array.prototype.push.apply(p,f.children)}return d};var c=new r;l.prototype.rayQuery=function(u,d,p){return u.getAABB(c),c.toLocalFrame(d,c),this.aabbQuery(c,p),p},l.prototype.removeEmptyNodes=function(){for(var u=[this];u.length;){for(var d=u.pop(),p=d.children.length-1;p>=0;p--)d.children[p].data.length||d.children.splice(p,1);Array.prototype.push.apply(u,d.children)}}},{"../collision/AABB":3,"../math/Vec3":30}],51:[function(e,n,i){n.exports=r;function r(){this.objects=[],this.type=Object}r.prototype.release=function(){for(var s=arguments.length,l=0;l!==s;l++)this.objects.push(arguments[l])},r.prototype.get=function(){return this.objects.length===0?this.constructObject():this.objects.pop()},r.prototype.constructObject=function(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}},{}],52:[function(e,n,i){n.exports=r;function r(){this.data={keys:[]}}r.prototype.get=function(s,l){if(s>l){var o=l;l=s,s=o}return this.data[s+"-"+l]},r.prototype.set=function(s,l,o){if(s>l){var h=l;l=s,s=h}var c=s+"-"+l;this.get(s,l)||this.data.keys.push(c),this.data[c]=o},r.prototype.reset=function(){for(var s=this.data,l=s.keys;l.length>0;){var o=l.pop();delete s[o]}}},{}],53:[function(e,n,i){function r(){}n.exports=r,r.defaults=function(s,l){s=s||{};for(var o in l)o in s||(s[o]=l[o]);return s}},{}],54:[function(e,n,i){n.exports=l;var r=e("../math/Vec3"),s=e("./Pool");function l(){s.call(this),this.type=r}l.prototype=new s,l.prototype.constructObject=function(){return new r}},{"../math/Vec3":30,"./Pool":51}],55:[function(e,n,i){n.exports=f;var r=e("../collision/AABB"),s=e("../shapes/Shape"),l=e("../collision/Ray"),o=e("../math/Vec3"),h=e("../math/Transform");e("../shapes/ConvexPolyhedron");var c=e("../math/Quaternion");e("../solver/Solver");var u=e("../utils/Vec3Pool"),d=e("../equations/ContactEquation"),p=e("../equations/FrictionEquation");function f(ut){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new u,this.world=ut,this.currentContactMaterial=null,this.enableFrictionReduction=!1}f.prototype.createContactEquation=function(ut,vt,_t,xt,zt,Rt){var wt;this.contactPointPool.length?(wt=this.contactPointPool.pop(),wt.bi=ut,wt.bj=vt):wt=new d(ut,vt),wt.enabled=ut.collisionResponse&&vt.collisionResponse&&_t.collisionResponse&&xt.collisionResponse;var C=this.currentContactMaterial;wt.restitution=C.restitution,wt.setSpookParams(C.contactEquationStiffness,C.contactEquationRelaxation,this.world.dt);var I=_t.material||ut.material,Y=xt.material||vt.material;return I&&Y&&I.restitution>=0&&Y.restitution>=0&&(wt.restitution=I.restitution*Y.restitution),wt.si=zt||_t,wt.sj=Rt||xt,wt},f.prototype.createFrictionEquationsFromContact=function(ut,vt){var _t=ut.bi,xt=ut.bj,zt=ut.si,Rt=ut.sj,wt=this.world,C=this.currentContactMaterial,I=C.friction,Y=zt.material||_t.material,nt=Rt.material||xt.material;if(Y&&nt&&Y.friction>=0&&nt.friction>=0&&(I=Y.friction*nt.friction),I>0){var $=I*wt.gravity.length(),at=_t.invMass+xt.invMass;at>0&&(at=1/at);var ct=this.frictionEquationPool,mt=ct.length?ct.pop():new p(_t,xt,$*at),Et=ct.length?ct.pop():new p(_t,xt,$*at);return mt.bi=Et.bi=_t,mt.bj=Et.bj=xt,mt.minForce=Et.minForce=-$*at,mt.maxForce=Et.maxForce=$*at,mt.ri.copy(ut.ri),mt.rj.copy(ut.rj),Et.ri.copy(ut.ri),Et.rj.copy(ut.rj),ut.ni.tangents(mt.t,Et.t),mt.setSpookParams(C.frictionEquationStiffness,C.frictionEquationRelaxation,wt.dt),Et.setSpookParams(C.frictionEquationStiffness,C.frictionEquationRelaxation,wt.dt),mt.enabled=Et.enabled=ut.enabled,vt.push(mt,Et),!0}return!1};var m=new o,g=new o,v=new o;f.prototype.createFrictionFromAverage=function(ut){var vt=this.result[this.result.length-1];if(!(!this.createFrictionEquationsFromContact(vt,this.frictionResult)||ut===1)){var _t=this.frictionResult[this.frictionResult.length-2],xt=this.frictionResult[this.frictionResult.length-1];m.setZero(),g.setZero(),v.setZero();var zt=vt.bi;vt.bj;for(var Rt=0;Rt!==ut;Rt++)vt=this.result[this.result.length-1-Rt],vt.bodyA!==zt?(m.vadd(vt.ni,m),g.vadd(vt.ri,g),v.vadd(vt.rj,v)):(m.vsub(vt.ni,m),g.vadd(vt.rj,g),v.vadd(vt.ri,v));var wt=1/ut;g.scale(wt,_t.ri),v.scale(wt,_t.rj),xt.ri.copy(_t.ri),xt.rj.copy(_t.rj),m.normalize(),m.tangents(_t.t,xt.t)}};var x=new o,_=new o,M=new c,S=new c;f.prototype.getContacts=function(ut,vt,_t,xt,zt,Rt,wt){this.contactPointPool=zt,this.frictionEquationPool=wt,this.result=xt,this.frictionResult=Rt;for(var C=M,I=S,Y=x,nt=_,$=0,at=ut.length;$!==at;$++){var ct=ut[$],mt=vt[$],Et=null;ct.material&&mt.material&&(Et=_t.getContactMaterial(ct.material,mt.material)||null);for(var Tt=0;Tt<ct.shapes.length;Tt++){ct.quaternion.mult(ct.shapeOrientations[Tt],C),ct.quaternion.vmult(ct.shapeOffsets[Tt],Y),Y.vadd(ct.position,Y);for(var ht=ct.shapes[Tt],Pt=0;Pt<mt.shapes.length;Pt++){mt.quaternion.mult(mt.shapeOrientations[Pt],I),mt.quaternion.vmult(mt.shapeOffsets[Pt],nt),nt.vadd(mt.position,nt);var Dt=mt.shapes[Pt];if(!(Y.distanceTo(nt)>ht.boundingSphereRadius+Dt.boundingSphereRadius)){var te=null;ht.material&&Dt.material&&(te=_t.getContactMaterial(ht.material,Dt.material)||null),this.currentContactMaterial=te||Et||_t.defaultContactMaterial;var kt=this[ht.type|Dt.type];kt&&(ht.type<Dt.type?kt.call(this,ht,Dt,Y,nt,C,I,ct,mt,ht,Dt):kt.call(this,Dt,ht,nt,Y,I,C,mt,ct,ht,Dt))}}}}},f.prototype[s.types.BOX|s.types.BOX]=f.prototype.boxBox=function(ut,vt,_t,xt,zt,Rt,wt,C){ut.convexPolyhedronRepresentation.material=ut.material,vt.convexPolyhedronRepresentation.material=vt.material,ut.convexPolyhedronRepresentation.collisionResponse=ut.collisionResponse,vt.convexPolyhedronRepresentation.collisionResponse=vt.collisionResponse,this.convexConvex(ut.convexPolyhedronRepresentation,vt.convexPolyhedronRepresentation,_t,xt,zt,Rt,wt,C,ut,vt)},f.prototype[s.types.BOX|s.types.CONVEXPOLYHEDRON]=f.prototype.boxConvex=function(ut,vt,_t,xt,zt,Rt,wt,C){ut.convexPolyhedronRepresentation.material=ut.material,ut.convexPolyhedronRepresentation.collisionResponse=ut.collisionResponse,this.convexConvex(ut.convexPolyhedronRepresentation,vt,_t,xt,zt,Rt,wt,C,ut,vt)},f.prototype[s.types.BOX|s.types.PARTICLE]=f.prototype.boxParticle=function(ut,vt,_t,xt,zt,Rt,wt,C){ut.convexPolyhedronRepresentation.material=ut.material,ut.convexPolyhedronRepresentation.collisionResponse=ut.collisionResponse,this.convexParticle(ut.convexPolyhedronRepresentation,vt,_t,xt,zt,Rt,wt,C,ut,vt)},f.prototype[s.types.SPHERE]=f.prototype.sphereSphere=function(ut,vt,_t,xt,zt,Rt,wt,C){var I=this.createContactEquation(wt,C,ut,vt);xt.vsub(_t,I.ni),I.ni.normalize(),I.ri.copy(I.ni),I.rj.copy(I.ni),I.ri.mult(ut.radius,I.ri),I.rj.mult(-vt.radius,I.rj),I.ri.vadd(_t,I.ri),I.ri.vsub(wt.position,I.ri),I.rj.vadd(xt,I.rj),I.rj.vsub(C.position,I.rj),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult)};var P=new o,T=new o,z=new o;f.prototype[s.types.PLANE|s.types.TRIMESH]=f.prototype.planeTrimesh=function(ut,vt,_t,xt,zt,Rt,wt,C){var I=new o,Y=P;Y.set(0,0,1),zt.vmult(Y,Y);for(var nt=0;nt<vt.vertices.length/3;nt++){vt.getVertex(nt,I);var $=new o;$.copy(I),h.pointToWorldFrame(xt,Rt,$,I);var at=T;I.vsub(_t,at);var ct=Y.dot(at);if(ct<=0){var mt=this.createContactEquation(wt,C,ut,vt);mt.ni.copy(Y);var Et=z;Y.scale(at.dot(Y),Et),I.vsub(Et,Et),mt.ri.copy(Et),mt.ri.vsub(wt.position,mt.ri),mt.rj.copy(I),mt.rj.vsub(C.position,mt.rj),this.result.push(mt),this.createFrictionEquationsFromContact(mt,this.frictionResult)}}};var k=new o,L=new o;new o;var D=new o,A=new o,V=new o,j=new o,Q=new o,pt=new o,H=new o,O=new o,X=new o,Z=new o,R=new o,W=new r,E=[];f.prototype[s.types.SPHERE|s.types.TRIMESH]=f.prototype.sphereTrimesh=function(ut,vt,_t,xt,zt,Rt,wt,C){var I=V,Y=j,nt=Q,$=pt,at=H,ct=O,mt=W,Et=A,Tt=L,ht=E;h.pointToLocalFrame(xt,Rt,_t,at);var Pt=ut.radius;mt.lowerBound.set(at.x-Pt,at.y-Pt,at.z-Pt),mt.upperBound.set(at.x+Pt,at.y+Pt,at.z+Pt),vt.getTrianglesInAABB(mt,ht);for(var Dt=D,te=ut.radius*ut.radius,kt=0;kt<ht.length;kt++)for(var qt=0;qt<3;qt++)if(vt.getVertex(vt.indices[ht[kt]*3+qt],Dt),Dt.vsub(at,Tt),Tt.norm2()<=te){Et.copy(Dt),h.pointToWorldFrame(xt,Rt,Et,Dt),Dt.vsub(_t,Tt);var Nt=this.createContactEquation(wt,C,ut,vt);Nt.ni.copy(Tt),Nt.ni.normalize(),Nt.ri.copy(Nt.ni),Nt.ri.scale(ut.radius,Nt.ri),Nt.ri.vadd(_t,Nt.ri),Nt.ri.vsub(wt.position,Nt.ri),Nt.rj.copy(Dt),Nt.rj.vsub(C.position,Nt.rj),this.result.push(Nt),this.createFrictionEquationsFromContact(Nt,this.frictionResult)}for(var kt=0;kt<ht.length;kt++)for(var qt=0;qt<3;qt++){vt.getVertex(vt.indices[ht[kt]*3+qt],I),vt.getVertex(vt.indices[ht[kt]*3+(qt+1)%3],Y),Y.vsub(I,nt),at.vsub(Y,ct);var ie=ct.dot(nt);at.vsub(I,ct);var fe=ct.dot(nt);if(fe>0&&ie<0){at.vsub(I,ct),$.copy(nt),$.normalize(),fe=ct.dot($),$.scale(fe,ct),ct.vadd(I,ct);var ae=ct.distanceTo(at);if(ae<ut.radius){var Nt=this.createContactEquation(wt,C,ut,vt);ct.vsub(at,Nt.ni),Nt.ni.normalize(),Nt.ni.scale(ut.radius,Nt.ri),h.pointToWorldFrame(xt,Rt,ct,ct),ct.vsub(C.position,Nt.rj),h.vectorToWorldFrame(Rt,Nt.ni,Nt.ni),h.vectorToWorldFrame(Rt,Nt.ri,Nt.ri),this.result.push(Nt),this.createFrictionEquationsFromContact(Nt,this.frictionResult)}}}for(var Wt=X,Vt=Z,ee=R,Ke=k,kt=0,ue=ht.length;kt!==ue;kt++){vt.getTriangleVertices(ht[kt],Wt,Vt,ee),vt.getNormal(ht[kt],Ke),at.vsub(Wt,ct);var ae=ct.dot(Ke);if(Ke.scale(ae,ct),at.vsub(ct,ct),ae=ct.distanceTo(at),l.pointInTriangle(ct,Wt,Vt,ee)&&ae<ut.radius){var Nt=this.createContactEquation(wt,C,ut,vt);ct.vsub(at,Nt.ni),Nt.ni.normalize(),Nt.ni.scale(ut.radius,Nt.ri),h.pointToWorldFrame(xt,Rt,ct,ct),ct.vsub(C.position,Nt.rj),h.vectorToWorldFrame(Rt,Nt.ni,Nt.ni),h.vectorToWorldFrame(Rt,Nt.ri,Nt.ri),this.result.push(Nt),this.createFrictionEquationsFromContact(Nt,this.frictionResult)}}ht.length=0};var y=new o,b=new o;f.prototype[s.types.SPHERE|s.types.PLANE]=f.prototype.spherePlane=function(ut,vt,_t,xt,zt,Rt,wt,C){var I=this.createContactEquation(wt,C,ut,vt);if(I.ni.set(0,0,1),Rt.vmult(I.ni,I.ni),I.ni.negate(I.ni),I.ni.normalize(),I.ni.mult(ut.radius,I.ri),_t.vsub(xt,y),I.ni.mult(I.ni.dot(y),b),y.vsub(b,I.rj),-y.dot(I.ni)<=ut.radius){var Y=I.ri,nt=I.rj;Y.vadd(_t,Y),Y.vsub(wt.position,Y),nt.vadd(xt,nt),nt.vsub(C.position,nt),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult)}};var N=new o,F=new o,B=new o;function U(ut,vt,_t){for(var xt=null,zt=ut.length,Rt=0;Rt!==zt;Rt++){var wt=ut[Rt],C=N;ut[(Rt+1)%zt].vsub(wt,C);var I=F;C.cross(vt,I);var Y=B;_t.vsub(wt,Y);var nt=I.dot(Y);if(xt===null||nt>0&&xt===!0||nt<=0&&xt===!1){xt===null&&(xt=nt>0);continue}else return!1}return!0}var G=new o,J=new o,ft=new o,dt=new o,w=[new o,new o,new o,new o,new o,new o],K=new o,q=new o,it=new o,ot=new o;f.prototype[s.types.SPHERE|s.types.BOX]=f.prototype.sphereBox=function(ut,vt,_t,xt,zt,Rt,wt,C){var I=this.v3pool,Y=w;_t.vsub(xt,G),vt.getSideNormals(Y,Rt);for(var nt=ut.radius,$=!1,at=q,ct=it,mt=ot,Et=null,Tt=0,ht=0,Pt=0,Dt=null,te=0,kt=Y.length;te!==kt&&$===!1;te++){var qt=J;qt.copy(Y[te]);var Nt=qt.norm();qt.normalize();var ie=G.dot(qt);if(ie<Nt+nt&&ie>0){var fe=ft,ae=dt;fe.copy(Y[(te+1)%3]),ae.copy(Y[(te+2)%3]);var Wt=fe.norm(),Vt=ae.norm();fe.normalize(),ae.normalize();var ee=G.dot(fe),Ke=G.dot(ae);if(ee<Wt&&ee>-Wt&&Ke<Vt&&Ke>-Vt){var _e=Math.abs(ie-Nt-nt);(Dt===null||_e<Dt)&&(Dt=_e,ht=ee,Pt=Ke,Et=Nt,at.copy(qt),ct.copy(fe),mt.copy(ae),Tt++)}}}if(Tt){$=!0;var Ht=this.createContactEquation(wt,C,ut,vt);at.mult(-nt,Ht.ri),Ht.ni.copy(at),Ht.ni.negate(Ht.ni),at.mult(Et,at),ct.mult(ht,ct),at.vadd(ct,at),mt.mult(Pt,mt),at.vadd(mt,Ht.rj),Ht.ri.vadd(_t,Ht.ri),Ht.ri.vsub(wt.position,Ht.ri),Ht.rj.vadd(xt,Ht.rj),Ht.rj.vsub(C.position,Ht.rj),this.result.push(Ht),this.createFrictionEquationsFromContact(Ht,this.frictionResult)}for(var ue=I.get(),Xe=K,Pe=0;Pe!==2&&!$;Pe++)for(var be=0;be!==2&&!$;be++)for(var ye=0;ye!==2&&!$;ye++)if(ue.set(0,0,0),Pe?ue.vadd(Y[0],ue):ue.vsub(Y[0],ue),be?ue.vadd(Y[1],ue):ue.vsub(Y[1],ue),ye?ue.vadd(Y[2],ue):ue.vsub(Y[2],ue),xt.vadd(ue,Xe),Xe.vsub(_t,Xe),Xe.norm2()<nt*nt){$=!0;var Ht=this.createContactEquation(wt,C,ut,vt);Ht.ri.copy(Xe),Ht.ri.normalize(),Ht.ni.copy(Ht.ri),Ht.ri.mult(nt,Ht.ri),Ht.rj.copy(ue),Ht.ri.vadd(_t,Ht.ri),Ht.ri.vsub(wt.position,Ht.ri),Ht.rj.vadd(xt,Ht.rj),Ht.rj.vsub(C.position,Ht.rj),this.result.push(Ht),this.createFrictionEquationsFromContact(Ht,this.frictionResult)}I.release(ue),ue=null;for(var qe=I.get(),ln=I.get(),Ht=I.get(),Le=I.get(),_e=I.get(),Yt=Y.length,Pe=0;Pe!==Yt&&!$;Pe++)for(var be=0;be!==Yt&&!$;be++)if(Pe%3!==be%3){Y[be].cross(Y[Pe],qe),qe.normalize(),Y[Pe].vadd(Y[be],ln),Ht.copy(_t),Ht.vsub(ln,Ht),Ht.vsub(xt,Ht);var wn=Ht.dot(qe);qe.mult(wn,Le);for(var ye=0;ye===Pe%3||ye===be%3;)ye++;_e.copy(_t),_e.vsub(Le,_e),_e.vsub(ln,_e),_e.vsub(xt,_e);var Qe=Math.abs(wn),Tn=_e.norm();if(Qe<Y[ye].norm()&&Tn<nt){$=!0;var le=this.createContactEquation(wt,C,ut,vt);ln.vadd(Le,le.rj),le.rj.copy(le.rj),_e.negate(le.ni),le.ni.normalize(),le.ri.copy(le.rj),le.ri.vadd(xt,le.ri),le.ri.vsub(_t,le.ri),le.ri.normalize(),le.ri.mult(nt,le.ri),le.ri.vadd(_t,le.ri),le.ri.vsub(wt.position,le.ri),le.rj.vadd(xt,le.rj),le.rj.vsub(C.position,le.rj),this.result.push(le),this.createFrictionEquationsFromContact(le,this.frictionResult)}}I.release(qe,ln,Ht,Le,_e)};var yt=new o,lt=new o,St=new o,It=new o,bt=new o,Ut=new o,Mt=new o,Ft=new o,Ot=new o,Lt=new o;f.prototype[s.types.SPHERE|s.types.CONVEXPOLYHEDRON]=f.prototype.sphereConvex=function(ut,vt,_t,xt,zt,Rt,wt,C){var I=this.v3pool;_t.vsub(xt,yt);for(var Y=vt.faceNormals,nt=vt.faces,$=vt.vertices,at=ut.radius,ct=0;ct!==$.length;ct++){var mt=$[ct],Et=bt;Rt.vmult(mt,Et),xt.vadd(Et,Et);var Tt=It;if(Et.vsub(_t,Tt),Tt.norm2()<at*at){Pt=!0;var ht=this.createContactEquation(wt,C,ut,vt);ht.ri.copy(Tt),ht.ri.normalize(),ht.ni.copy(ht.ri),ht.ri.mult(at,ht.ri),Et.vsub(xt,ht.rj),ht.ri.vadd(_t,ht.ri),ht.ri.vsub(wt.position,ht.ri),ht.rj.vadd(xt,ht.rj),ht.rj.vsub(C.position,ht.rj),this.result.push(ht),this.createFrictionEquationsFromContact(ht,this.frictionResult);return}}for(var Pt=!1,ct=0,Dt=nt.length;ct!==Dt&&Pt===!1;ct++){var te=Y[ct],kt=nt[ct],qt=Ut;Rt.vmult(te,qt);var Nt=Mt;Rt.vmult($[kt[0]],Nt),Nt.vadd(xt,Nt);var ie=Ft;qt.mult(-at,ie),_t.vadd(ie,ie);var fe=Ot;ie.vsub(Nt,fe);var ae=fe.dot(qt),Wt=Lt;if(_t.vsub(Nt,Wt),ae<0&&Wt.dot(qt)>0){for(var Vt=[],ee=0,Ke=kt.length;ee!==Ke;ee++){var ue=I.get();Rt.vmult($[kt[ee]],ue),xt.vadd(ue,ue),Vt.push(ue)}if(U(Vt,qt,_t)){Pt=!0;var ht=this.createContactEquation(wt,C,ut,vt);qt.mult(-at,ht.ri),qt.negate(ht.ni);var Xe=I.get();qt.mult(-ae,Xe);var Pe=I.get();qt.mult(-at,Pe),_t.vsub(xt,ht.rj),ht.rj.vadd(Pe,ht.rj),ht.rj.vadd(Xe,ht.rj),ht.rj.vadd(xt,ht.rj),ht.rj.vsub(C.position,ht.rj),ht.ri.vadd(_t,ht.ri),ht.ri.vsub(wt.position,ht.ri),I.release(Xe),I.release(Pe),this.result.push(ht),this.createFrictionEquationsFromContact(ht,this.frictionResult);for(var ee=0,be=Vt.length;ee!==be;ee++)I.release(Vt[ee]);return}else for(var ee=0;ee!==kt.length;ee++){var ye=I.get(),qe=I.get();Rt.vmult($[kt[(ee+1)%kt.length]],ye),Rt.vmult($[kt[(ee+2)%kt.length]],qe),xt.vadd(ye,ye),xt.vadd(qe,qe);var ln=lt;qe.vsub(ye,ln);var Ht=St;ln.unit(Ht);var Le=I.get(),_e=I.get();_t.vsub(ye,_e);var Yt=_e.dot(Ht);Ht.mult(Yt,Le),Le.vadd(ye,Le);var wn=I.get();if(Le.vsub(_t,wn),Yt>0&&Yt*Yt<ln.norm2()&&wn.norm2()<at*at){var ht=this.createContactEquation(wt,C,ut,vt);Le.vsub(xt,ht.rj),Le.vsub(_t,ht.ni),ht.ni.normalize(),ht.ni.mult(at,ht.ri),ht.rj.vadd(xt,ht.rj),ht.rj.vsub(C.position,ht.rj),ht.ri.vadd(_t,ht.ri),ht.ri.vsub(wt.position,ht.ri),this.result.push(ht),this.createFrictionEquationsFromContact(ht,this.frictionResult);for(var ee=0,be=Vt.length;ee!==be;ee++)I.release(Vt[ee]);I.release(ye),I.release(qe),I.release(Le),I.release(wn),I.release(_e);return}I.release(ye),I.release(qe),I.release(Le),I.release(wn),I.release(_e)}for(var ee=0,be=Vt.length;ee!==be;ee++)I.release(Vt[ee])}}},new o,new o,f.prototype[s.types.PLANE|s.types.BOX]=f.prototype.planeBox=function(ut,vt,_t,xt,zt,Rt,wt,C){vt.convexPolyhedronRepresentation.material=vt.material,vt.convexPolyhedronRepresentation.collisionResponse=vt.collisionResponse,this.planeConvex(ut,vt.convexPolyhedronRepresentation,_t,xt,zt,Rt,wt,C)};var Bt=new o,jt=new o,Ae=new o,tt=new o;f.prototype[s.types.PLANE|s.types.CONVEXPOLYHEDRON]=f.prototype.planeConvex=function(ut,vt,_t,xt,zt,Rt,wt,C){var I=Bt,Y=jt;Y.set(0,0,1),zt.vmult(Y,Y);for(var nt=0,$=Ae,at=0;at!==vt.vertices.length;at++){I.copy(vt.vertices[at]),Rt.vmult(I,I),xt.vadd(I,I),I.vsub(_t,$);var ct=Y.dot($);if(ct<=0){var mt=this.createContactEquation(wt,C,ut,vt),Et=tt;Y.mult(Y.dot($),Et),I.vsub(Et,Et),Et.vsub(_t,mt.ri),mt.ni.copy(Y),I.vsub(xt,mt.rj),mt.ri.vadd(_t,mt.ri),mt.ri.vsub(wt.position,mt.ri),mt.rj.vadd(xt,mt.rj),mt.rj.vsub(C.position,mt.rj),this.result.push(mt),nt++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(mt,this.frictionResult)}}this.enableFrictionReduction&&nt&&this.createFrictionFromAverage(nt)};var At=new o,Xt=new o;f.prototype[s.types.CONVEXPOLYHEDRON]=f.prototype.convexConvex=function(ut,vt,_t,xt,zt,Rt,wt,C,I,Y,nt,$){var at=At;if(!(_t.distanceTo(xt)>ut.boundingSphereRadius+vt.boundingSphereRadius)&&ut.findSeparatingAxis(vt,_t,zt,xt,Rt,at,nt,$)){var ct=[],mt=Xt;ut.clipAgainstHull(_t,zt,vt,xt,Rt,at,-100,100,ct);for(var Et=0,Tt=0;Tt!==ct.length;Tt++){var ht=this.createContactEquation(wt,C,ut,vt,I,Y),Pt=ht.ri,Dt=ht.rj;at.negate(ht.ni),ct[Tt].normal.negate(mt),mt.mult(ct[Tt].depth,mt),ct[Tt].point.vadd(mt,Pt),Dt.copy(ct[Tt].point),Pt.vsub(_t,Pt),Dt.vsub(xt,Dt),Pt.vadd(_t,Pt),Pt.vsub(wt.position,Pt),Dt.vadd(xt,Dt),Dt.vsub(C.position,Dt),this.result.push(ht),Et++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(ht,this.frictionResult)}this.enableFrictionReduction&&Et&&this.createFrictionFromAverage(Et)}};var Kt=new o,rt=new o,pe=new o;f.prototype[s.types.PLANE|s.types.PARTICLE]=f.prototype.planeParticle=function(ut,vt,_t,xt,zt,Rt,wt,C){var I=Kt;I.set(0,0,1),wt.quaternion.vmult(I,I);var Y=rt;xt.vsub(wt.position,Y);var nt=I.dot(Y);if(nt<=0){var $=this.createContactEquation(C,wt,vt,ut);$.ni.copy(I),$.ni.negate($.ni),$.ri.set(0,0,0);var at=pe;I.mult(I.dot(xt),at),xt.vsub(at,at),$.rj.copy(at),this.result.push($),this.createFrictionEquationsFromContact($,this.frictionResult)}};var ce=new o;f.prototype[s.types.PARTICLE|s.types.SPHERE]=f.prototype.sphereParticle=function(ut,vt,_t,xt,zt,Rt,wt,C){var I=ce;I.set(0,0,1),xt.vsub(_t,I);var Y=I.norm2();if(Y<=ut.radius*ut.radius){var nt=this.createContactEquation(C,wt,vt,ut);I.normalize(),nt.rj.copy(I),nt.rj.mult(ut.radius,nt.rj),nt.ni.copy(I),nt.ni.negate(nt.ni),nt.ri.set(0,0,0),this.result.push(nt),this.createFrictionEquationsFromContact(nt,this.frictionResult)}};var re=new c,ze=new o;new o;var Ce=new o,se=new o,ge=new o;f.prototype[s.types.PARTICLE|s.types.CONVEXPOLYHEDRON]=f.prototype.convexParticle=function(ut,vt,_t,xt,zt,Rt,wt,C){var I=-1,Y=Ce,nt=ge,$=null,at=ze;if(at.copy(xt),at.vsub(_t,at),zt.conjugate(re),re.vmult(at,at),ut.pointIsInside(at)){ut.worldVerticesNeedsUpdate&&ut.computeWorldVertices(_t,zt),ut.worldFaceNormalsNeedsUpdate&&ut.computeWorldFaceNormals(zt);for(var ct=0,mt=ut.faces.length;ct!==mt;ct++){var Et=[ut.worldVertices[ut.faces[ct][0]]],Tt=ut.worldFaceNormals[ct];xt.vsub(Et[0],se);var ht=-Tt.dot(se);($===null||Math.abs(ht)<Math.abs($))&&($=ht,I=ct,Y.copy(Tt))}if(I!==-1){var Pt=this.createContactEquation(C,wt,vt,ut);Y.mult($,nt),nt.vadd(xt,nt),nt.vsub(_t,nt),Pt.rj.copy(nt),Y.negate(Pt.ni),Pt.ri.set(0,0,0);var Dt=Pt.ri,te=Pt.rj;Dt.vadd(xt,Dt),Dt.vsub(C.position,Dt),te.vadd(_t,te),te.vsub(wt.position,te),this.result.push(Pt),this.createFrictionEquationsFromContact(Pt,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}},f.prototype[s.types.BOX|s.types.HEIGHTFIELD]=f.prototype.boxHeightfield=function(ut,vt,_t,xt,zt,Rt,wt,C){ut.convexPolyhedronRepresentation.material=ut.material,ut.convexPolyhedronRepresentation.collisionResponse=ut.collisionResponse,this.convexHeightfield(ut.convexPolyhedronRepresentation,vt,_t,xt,zt,Rt,wt,C)};var Be=new o,Re=new o,Ve=[0];f.prototype[s.types.CONVEXPOLYHEDRON|s.types.HEIGHTFIELD]=f.prototype.convexHeightfield=function(ut,vt,_t,xt,zt,Rt,wt,C){var I=vt.data,Y=vt.elementSize,nt=ut.boundingSphereRadius,$=Re,at=Ve,ct=Be;h.pointToLocalFrame(xt,Rt,_t,ct);var mt=Math.floor((ct.x-nt)/Y)-1,Et=Math.ceil((ct.x+nt)/Y)+1,Tt=Math.floor((ct.y-nt)/Y)-1,ht=Math.ceil((ct.y+nt)/Y)+1;if(!(Et<0||ht<0||mt>I.length||Tt>I[0].length)){mt<0&&(mt=0),Et<0&&(Et=0),Tt<0&&(Tt=0),ht<0&&(ht=0),mt>=I.length&&(mt=I.length-1),Et>=I.length&&(Et=I.length-1),ht>=I[0].length&&(ht=I[0].length-1),Tt>=I[0].length&&(Tt=I[0].length-1);var Pt=[];vt.getRectMinMax(mt,Tt,Et,ht,Pt);var Dt=Pt[0],te=Pt[1];if(!(ct.z-nt>te||ct.z+nt<Dt))for(var kt=mt;kt<Et;kt++)for(var qt=Tt;qt<ht;qt++)vt.getConvexTrianglePillar(kt,qt,!1),h.pointToWorldFrame(xt,Rt,vt.pillarOffset,$),_t.distanceTo($)<vt.pillarConvex.boundingSphereRadius+ut.boundingSphereRadius&&this.convexConvex(ut,vt.pillarConvex,_t,$,zt,Rt,wt,C,null,null,at,null),vt.getConvexTrianglePillar(kt,qt,!0),h.pointToWorldFrame(xt,Rt,vt.pillarOffset,$),_t.distanceTo($)<vt.pillarConvex.boundingSphereRadius+ut.boundingSphereRadius&&this.convexConvex(ut,vt.pillarConvex,_t,$,zt,Rt,wt,C,null,null,at,null)}};var Ge=new o,he=new o;f.prototype[s.types.SPHERE|s.types.HEIGHTFIELD]=f.prototype.sphereHeightfield=function(ut,vt,_t,xt,zt,Rt,wt,C){var I=vt.data,Y=ut.radius,nt=vt.elementSize,$=he,at=Ge;h.pointToLocalFrame(xt,Rt,_t,at);var ct=Math.floor((at.x-Y)/nt)-1,mt=Math.ceil((at.x+Y)/nt)+1,Et=Math.floor((at.y-Y)/nt)-1,Tt=Math.ceil((at.y+Y)/nt)+1;if(!(mt<0||Tt<0||ct>I.length||Tt>I[0].length)){ct<0&&(ct=0),mt<0&&(mt=0),Et<0&&(Et=0),Tt<0&&(Tt=0),ct>=I.length&&(ct=I.length-1),mt>=I.length&&(mt=I.length-1),Tt>=I[0].length&&(Tt=I[0].length-1),Et>=I[0].length&&(Et=I[0].length-1);var ht=[];vt.getRectMinMax(ct,Et,mt,Tt,ht);var Pt=ht[0],Dt=ht[1];if(!(at.z-Y>Dt||at.z+Y<Pt))for(var te=this.result,kt=ct;kt<mt;kt++)for(var qt=Et;qt<Tt;qt++){var Nt=te.length;vt.getConvexTrianglePillar(kt,qt,!1),h.pointToWorldFrame(xt,Rt,vt.pillarOffset,$),_t.distanceTo($)<vt.pillarConvex.boundingSphereRadius+ut.boundingSphereRadius&&this.sphereConvex(ut,vt.pillarConvex,_t,$,zt,Rt,wt,C),vt.getConvexTrianglePillar(kt,qt,!0),h.pointToWorldFrame(xt,Rt,vt.pillarOffset,$),_t.distanceTo($)<vt.pillarConvex.boundingSphereRadius+ut.boundingSphereRadius&&this.sphereConvex(ut,vt.pillarConvex,_t,$,zt,Rt,wt,C);var ie=te.length-Nt;if(ie>2)return}}}},{"../collision/AABB":3,"../collision/Ray":9,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43,"../solver/Solver":47,"../utils/Vec3Pool":54}],56:[function(e,n,i){n.exports=M;var r=e("../shapes/Shape"),s=e("../math/Vec3"),l=e("../math/Quaternion"),o=e("../solver/GSSolver");e("../utils/Vec3Pool"),e("../equations/ContactEquation"),e("../equations/FrictionEquation");var h=e("./Narrowphase"),c=e("../utils/EventTarget"),u=e("../collision/ArrayCollisionMatrix"),d=e("../material/Material"),p=e("../material/ContactMaterial"),f=e("../objects/Body"),m=e("../utils/TupleDictionary"),g=e("../collision/RaycastResult"),v=e("../collision/AABB"),x=e("../collision/Ray"),_=e("../collision/NaiveBroadphase");function M(){c.apply(this),this.dt=-1,this.allowSleep=!1,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=0,this.quatNormalizeFast=!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new s,this.broadphase=new _,this.bodies=[],this.solver=new o,this.constraints=[],this.narrowphase=new h(this),this.collisionMatrix=new u,this.collisionMatrixPrevious=new u,this.materials=[],this.contactmaterials=[],this.contactMaterialTable=new m,this.defaultMaterial=new d("default"),this.defaultContactMaterial=new p(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null}}M.prototype=new c,new v;var S=new x;if(M.prototype.getContactMaterial=function(O,X){return this.contactMaterialTable.get(O.id,X.id)},M.prototype.numObjects=function(){return this.bodies.length},M.prototype.collisionMatrixTick=function(){var O=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=O,this.collisionMatrix.reset()},M.prototype.add=M.prototype.addBody=function(O){this.bodies.indexOf(O)===-1&&(O.index=this.bodies.length,this.bodies.push(O),O.world=this,O.initPosition.copy(O.position),O.initVelocity.copy(O.velocity),O.timeLastSleepy=this.time,O instanceof f&&(O.initAngularVelocity.copy(O.angularVelocity),O.initQuaternion.copy(O.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=O,this.dispatchEvent(this.addBodyEvent))},M.prototype.addConstraint=function(O){this.constraints.push(O)},M.prototype.removeConstraint=function(O){var X=this.constraints.indexOf(O);X!==-1&&this.constraints.splice(X,1)},M.prototype.rayTest=function(O,X,Z){Z instanceof g?this.raycastClosest(O,X,{skipBackfaces:!0},Z):this.raycastAll(O,X,{skipBackfaces:!0},Z)},M.prototype.raycastAll=function(O,X,Z,R){return Z.mode=x.ALL,Z.from=O,Z.to=X,Z.callback=R,S.intersectWorld(this,Z)},M.prototype.raycastAny=function(O,X,Z,R){return Z.mode=x.ANY,Z.from=O,Z.to=X,Z.result=R,S.intersectWorld(this,Z)},M.prototype.raycastClosest=function(O,X,Z,R){return Z.mode=x.CLOSEST,Z.from=O,Z.to=X,Z.result=R,S.intersectWorld(this,Z)},M.prototype.remove=function(O){O.world=null;var X=this.bodies.length-1,Z=this.bodies,R=Z.indexOf(O);if(R!==-1){Z.splice(R,1);for(var W=0;W!==Z.length;W++)Z[W].index=W;this.collisionMatrix.setNumObjects(X),this.removeBodyEvent.body=O,this.dispatchEvent(this.removeBodyEvent)}},M.prototype.removeBody=M.prototype.remove,M.prototype.addMaterial=function(O){this.materials.push(O)},M.prototype.addContactMaterial=function(O){this.contactmaterials.push(O),this.contactMaterialTable.set(O.materials[0].id,O.materials[1].id,O)},typeof performance>"u"&&(performance={}),!performance.now){var P=Date.now();performance.timing&&performance.timing.navigationStart&&(P=performance.timing.navigationStart),performance.now=function(){return Date.now()-P}}var T=new s;M.prototype.step=function(O,X,Z){if(Z=Z||10,X=X||0,X===0)this.internalStep(O),this.time+=O;else{var R=Math.floor((this.time+X)/O)-Math.floor(this.time/O);R=Math.min(R,Z);for(var W=performance.now(),E=0;E!==R&&(this.internalStep(O),!(performance.now()-W>O*1e3));E++);this.time+=X;for(var y=this.time%O,b=y/O,N=T,F=this.bodies,B=0;B!==F.length;B++){var U=F[B];U.type!==f.STATIC&&U.sleepState!==f.SLEEPING?(U.position.vsub(U.previousPosition,N),N.scale(b,N),U.position.vadd(N,U.interpolatedPosition)):(U.interpolatedPosition.copy(U.position),U.interpolatedQuaternion.copy(U.quaternion))}}};var z={type:"postStep"},k={type:"preStep"},L={type:"collide",body:null,contact:null},D=[],A=[],V=[],j=[];new s,new s,new s,new s,new s,new s,new s,new s,new s,new l;var Q=new l,pt=new l,H=new s;M.prototype.internalStep=function(O){this.dt=O;var X=this.contacts,Z=V,R=j,W=this.numObjects(),E=this.bodies,y=this.solver,b=this.gravity,N=this.doProfiling,F=this.profile,B=f.DYNAMIC,U,G=this.constraints,J=A;b.norm();var ft=b.x,dt=b.y,w=b.z,K=0;for(N&&(U=performance.now()),K=0;K!==W;K++){var q=E[K];if(q.type&B){var it=q.force,ot=q.mass;it.x+=ot*ft,it.y+=ot*dt,it.z+=ot*w}}for(var K=0,yt=this.subsystems.length;K!==yt;K++)this.subsystems[K].update();N&&(U=performance.now()),Z.length=0,R.length=0,this.broadphase.collisionPairs(this,Z,R),N&&(F.broadphase=performance.now()-U);var At=G.length;for(K=0;K!==At;K++){var lt=G[K];if(!lt.collideConnected)for(var St=Z.length-1;St>=0;St-=1)(lt.bodyA===Z[St]&&lt.bodyB===R[St]||lt.bodyB===Z[St]&&lt.bodyA===R[St])&&(Z.splice(St,1),R.splice(St,1))}this.collisionMatrixTick(),N&&(U=performance.now());var It=D,bt=X.length;for(K=0;K!==bt;K++)It.push(X[K]);X.length=0;var Ut=this.frictionEquations.length;for(K=0;K!==Ut;K++)J.push(this.frictionEquations[K]);this.frictionEquations.length=0,this.narrowphase.getContacts(Z,R,this,X,It,this.frictionEquations,J),N&&(F.narrowphase=performance.now()-U),N&&(U=performance.now());for(var K=0;K<this.frictionEquations.length;K++)y.addEquation(this.frictionEquations[K]);for(var Mt=X.length,Ft=0;Ft!==Mt;Ft++){var lt=X[Ft],q=lt.bi,Ot=lt.bj;lt.si,lt.sj;var Lt;if(q.material&&Ot.material?Lt=this.getContactMaterial(q.material,Ot.material)||this.defaultContactMaterial:Lt=this.defaultContactMaterial,Lt.friction,q.material&&Ot.material&&(q.material.friction>=0&&Ot.material.friction>=0&&q.material.friction*Ot.material.friction,q.material.restitution>=0&&Ot.material.restitution>=0&&(lt.restitution=q.material.restitution*Ot.material.restitution)),y.addEquation(lt),q.allowSleep&&q.type===f.DYNAMIC&&q.sleepState===f.SLEEPING&&Ot.sleepState===f.AWAKE&&Ot.type!==f.STATIC){var Bt=Ot.velocity.norm2()+Ot.angularVelocity.norm2(),jt=Math.pow(Ot.sleepSpeedLimit,2);Bt>=jt*2&&(q._wakeUpAfterNarrowphase=!0)}if(Ot.allowSleep&&Ot.type===f.DYNAMIC&&Ot.sleepState===f.SLEEPING&&q.sleepState===f.AWAKE&&q.type!==f.STATIC){var Ae=q.velocity.norm2()+q.angularVelocity.norm2(),tt=Math.pow(q.sleepSpeedLimit,2);Ae>=tt*2&&(Ot._wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(q,Ot,!0),this.collisionMatrixPrevious.get(q,Ot)||(L.body=Ot,L.contact=lt,q.dispatchEvent(L),L.body=q,Ot.dispatchEvent(L))}for(N&&(F.makeContactConstraints=performance.now()-U,U=performance.now()),K=0;K!==W;K++){var q=E[K];q._wakeUpAfterNarrowphase&&(q.wakeUp(),q._wakeUpAfterNarrowphase=!1)}var At=G.length;for(K=0;K!==At;K++){var lt=G[K];lt.update();for(var St=0,Xt=lt.equations.length;St!==Xt;St++){var Kt=lt.equations[St];y.addEquation(Kt)}}y.solve(O,this),N&&(F.solve=performance.now()-U),y.removeAllEquations();var rt=Math.pow;for(K=0;K!==W;K++){var q=E[K];if(q.type&B){var pe=rt(1-q.linearDamping,O),ce=q.velocity;ce.mult(pe,ce);var re=q.angularVelocity;if(re){var ze=rt(1-q.angularDamping,O);re.mult(ze,re)}}}for(this.dispatchEvent(k),K=0;K!==W;K++){var q=E[K];q.preStep&&q.preStep.call(q)}N&&(U=performance.now());var Ce=Q,se=pt,ge=this.stepnumber,Be=f.DYNAMIC|f.KINEMATIC,Re=ge%(this.quatNormalizeSkip+1)===0,Ve=this.quatNormalizeFast,Ge=O*.5;for(r.types.PLANE,r.types.CONVEXPOLYHEDRON,K=0;K!==W;K++){var he=E[K],ut=he.force,vt=he.torque;if(he.type&Be&&he.sleepState!==f.SLEEPING){var _t=he.velocity,xt=he.angularVelocity,zt=he.position,Rt=he.quaternion,wt=he.invMass,C=he.invInertiaWorld;_t.x+=ut.x*wt*O,_t.y+=ut.y*wt*O,_t.z+=ut.z*wt*O,he.angularVelocity&&(C.vmult(vt,H),H.mult(O,H),H.vadd(xt,xt)),zt.x+=_t.x*O,zt.y+=_t.y*O,zt.z+=_t.z*O,he.angularVelocity&&(Ce.set(xt.x,xt.y,xt.z,0),Ce.mult(Rt,se),Rt.x+=Ge*se.x,Rt.y+=Ge*se.y,Rt.z+=Ge*se.z,Rt.w+=Ge*se.w,Re&&(Ve?Rt.normalizeFast():Rt.normalize())),he.aabb&&(he.aabbNeedsUpdate=!0),he.updateInertiaWorld&&he.updateInertiaWorld()}}for(this.clearForces(),this.broadphase.dirty=!0,N&&(F.integrate=performance.now()-U),this.time+=O,this.stepnumber+=1,this.dispatchEvent(z),K=0;K!==W;K++){var q=E[K],I=q.postStep;I&&I.call(q)}if(this.allowSleep)for(K=0;K!==W;K++)E[K].sleepTick(this.time)},M.prototype.clearForces=function(){for(var O=this.bodies,X=O.length,Z=0;Z!==X;Z++){var R=O[Z];R.force,R.torque,R.force.set(0,0,0),R.torque.set(0,0,0)}}},{"../collision/AABB":3,"../collision/ArrayCollisionMatrix":4,"../collision/NaiveBroadphase":7,"../collision/Ray":9,"../collision/RaycastResult":10,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../material/ContactMaterial":24,"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Shape":43,"../solver/GSSolver":46,"../utils/EventTarget":49,"../utils/TupleDictionary":52,"../utils/Vec3Pool":54,"./Narrowphase":55}]},{},[2])(2)})})(Tp);const ii=new id;new xr;const ri=new bp({width:340}),Jn={},on={height:window.innerHeight,width:window.innerWidth};window.addEventListener("mousemove",a=>{a.clientX/on.width-.5,-(a.clientY/on.height-.5)});const Uc=new od,Ap=new hd(16777215,1,1/0);ii.add(Ap);const Cp=new ud(16777215,1/0);ii.add(Cp);const Rp=Uc.load("./textures/door/frontend-large.jpg");Uc.load("./textures/door/images");const Pp=new ar(50,50,1,1024,1024),Lp=new Rr(50,50,512,512),Np=new Bs({map:Rp}),js=new nn(Lp,Np);js.position.z=50;js.rotation.x=Math.PI*-.5;ii.add(js);Jn.depthColor="#186691";Jn.surfaceColor="#9bd8ff";const Sn=new Bn({vertexShader:Sp,fragmentShader:wp,depthWrite:!0,uniforms:{uTime:{value:0},uBigWavesElevation:{value:.2},uBigWavesSpeed:{value:.75},iMouse:{value:new ve(0,0,0,0)},uSmallWavesElevation:{value:.15},uSmallWavesFrequency:{value:3},uSmallWavesSpeed:{value:.2},uSmallWavesIterations:{value:4},uBigWavesFrequency:{value:new $t(4,1.5)},uDepthColor:{value:new ne(Jn.depthColor)},uSurfaceColor:{value:new ne(Jn.surfaceColor)},uColorOffset:{value:.6},uColorMultiplier:{value:1.9}}});ri.add(Sn.uniforms.uBigWavesElevation,"value").min(.2).max(1).step(.001).name("uBigWavesElevation");ri.add(Sn.uniforms.uBigWavesFrequency.value,"x").min(0).max(10).step(.001).name("uBigWavesFreqencyX");ri.add(Sn.uniforms.uBigWavesFrequency.value,"y").min(0).max(10).step(.001).name("uBigWavesFreqencyY");ri.add(Sn.uniforms.uBigWavesSpeed,"value").min(0).max(4).step(.001).name("uBigWavesSpeed");ri.addColor(Jn,"depthColor").name("depthColor").onChange(()=>{Sn.uniforms.uDepthColor.value.set(Jn.depthColor)});ri.addColor(Jn,"surfaceColor").name("surfaceColor").onChange(()=>{Sn.uniforms.uSurfaceColor.value.set(Jn.surfaceColor)});ri.add(Sn.uniforms.uColorOffset,"value").min(0).max(1).step(.001).name("uColorOffset");ri.add(Sn.uniforms.uColorMultiplier,"value").min(0).max(10).step(.001).name("uColorMultiplier");const Ys=new nn(Pp,Sn);Ys.rotation.x=-Math.PI*.5;Ys.position.set(0,-.5,0);ii.add(Ys);function Oc(a){return[a+"Daylight Box_Right.jpg",a+"Daylight Box_Left.jpg",a+"Daylight Box_Top.jpg",a+"Daylight Box_Bottom.jpg",a+"Daylight Box_Front.jpg",a+"Daylight Box_Back.jpg"]}const Fc=new sd;ii.background=Fc.load(Oc);const Ip=Oc("./textures/door/images/");Fc.load(Ip,function(a){ii.background=a});const Zi=document.querySelector(".webgl"),ir=new sn(75,on.width/on.height,.1,500);ir.position.set(0,.1,5.5);ii.add(ir);new ep(ir,Zi);const Tr=new _c({canvas:Zi,antialias:!0});Tr.setSize(on.width,on.height);Tr.setPixelRatio(Math.min(window.devicePixelRatio,2));const Dp=new dd;window.addEventListener("dblclick",()=>{document.fullscreenElement||document.webkiteFullscreenElement?document.exitFullscreen?document.exitFullscreen():document.webkiteExitFullscreen&&document.webkiteExitFullscreen():Zi.requestFullscreen?Zi.requestFullscreen():Zi.webkiteRequestFullscreen&&Zi.webkiteRequestFullscreen});window.addEventListener("resize",()=>{on.height=window.innerHeight,on.width=window.innerWidth,ir.aspect=on.width/on.height,ir.updateProjectionMatrix(),Tr.setSize(on.width,on.height),Tr.setPixelRatio(Math.min(window.devicePixelRatio,1e4))});const zc=()=>{const a=Dp.getElapsedTime();Sn.uniforms.uTime.value=a,Tr.render(ii,ir),window.requestAnimationFrame(zc)};zc();
//# sourceMappingURL=index-0b0ab88a.js.map
