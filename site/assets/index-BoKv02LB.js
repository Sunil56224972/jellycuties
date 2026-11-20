(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nl="170",mi={ROTATE:0,DOLLY:1,PAN:2},As={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ad=0,Bl=1,cd=2,il=1,ld=2,Yn=3,vi=0,Ye=1,Zn=2,gi=0,Is=1,$a=2,kl=3,Hl=4,Uu=5,Fi=100,hd=101,ud=102,fd=103,dd=104,pd=200,Qa=201,md=202,gd=203,tc=204,wr=205,_d=206,vd=207,xd=208,Md=209,yd=210,Sd=211,Ed=212,bd=213,Td=214,ec=0,nc=1,ic=2,zs=3,sc=4,rc=5,oc=6,ac=7,sl=0,wd=1,Ad=2,_i=0,Rd=1,Cd=2,Pd=3,Ld=4,Dd=5,Id=6,Nu=7,Fu=300,Bs=301,ks=302,cc=303,lc=304,ko=306,Hs=1e3,Bi=1001,hc=1002,on=1003,Ud=1004,Hr=1005,sn=1006,sa=1007,Nn=1008,Tn=1009,Ou=1010,zu=1011,Ar=1012,rl=1013,Vi=1014,Fn=1015,Nr=1016,ol=1017,al=1018,Gs=1020,Bu=35902,ku=1021,Hu=1022,rn=1023,Gu=1024,Vu=1025,Us=1026,Vs=1027,cl=1028,ll=1029,Wu=1030,hl=1031,ul=1033,yo=33776,So=33777,Eo=33778,bo=33779,uc=35840,fc=35841,dc=35842,pc=35843,mc=36196,gc=37492,_c=37496,vc=37808,xc=37809,Mc=37810,yc=37811,Sc=37812,Ec=37813,bc=37814,Tc=37815,wc=37816,Ac=37817,Rc=37818,Cc=37819,Pc=37820,Lc=37821,To=36492,Dc=36494,Ic=36495,Xu=36283,Uc=36284,Nc=36285,Fc=36286,Nd=3200,Fd=3201,fl=0,Od=1,pi="",Pe="srgb",js="srgb-linear",Ho="linear",he="srgb",rs=7680,Gl=519,zd=512,Bd=513,kd=514,qu=515,Hd=516,Gd=517,Vd=518,Wd=519,Oc=35044,zc=35048,Vl="300 es",Kn=2e3,Ro=2001;class ji{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Wl=1234567;const yr=Math.PI/180,Ws=180/Math.PI;function zn(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]).toLowerCase()}function Le(n,t,e){return Math.max(t,Math.min(e,n))}function dl(n,t){return(n%t+t)%t}function Xd(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function qd(n,t,e){return n!==t?(e-n)/(t-n):0}function Sr(n,t,e){return(1-e)*n+e*t}function Yd(n,t,e,i){return Sr(n,t,1-Math.exp(-e*i))}function Zd(n,t=1){return t-Math.abs(dl(n,t*2)-t)}function jd(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Kd(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Jd(n,t){return n+Math.floor(Math.random()*(t-n+1))}function $d(n,t){return n+Math.random()*(t-n)}function Qd(n){return n*(.5-Math.random())}function tp(n){n!==void 0&&(Wl=n);let t=Wl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ep(n){return n*yr}function np(n){return n*Ws}function ip(n){return(n&n-1)===0&&n!==0}function sp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function rp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function op(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+i)/2),h=o((t+i)/2),u=r((t-i)/2),d=o((t-i)/2),f=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*h,c*u,c*d,a*l);break;case"YZY":n.set(c*d,a*h,c*u,a*l);break;case"ZXZ":n.set(c*u,c*d,a*h,a*l);break;case"XZX":n.set(a*h,c*g,c*f,a*l);break;case"YXY":n.set(c*f,a*h,c*g,a*l);break;case"ZYZ":n.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function En(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function le(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ee={DEG2RAD:yr,RAD2DEG:Ws,generateUUID:zn,clamp:Le,euclideanModulo:dl,mapLinear:Xd,inverseLerp:qd,lerp:Sr,damp:Yd,pingpong:Zd,smoothstep:jd,smootherstep:Kd,randInt:Jd,randFloat:$d,randFloatSpread:Qd,seededRandom:tp,degToRad:ep,radToDeg:np,isPowerOfTwo:ip,ceilPowerOfTwo:sp,floorPowerOfTwo:rp,setQuaternionFromProperEuler:op,normalize:le,denormalize:En};class it{constructor(t=0,e=0){it.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Le(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(t,e,i,s,r,o,a,c,l){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],v=s[0],m=s[3],p=s[6],S=s[1],x=s[4],_=s[7],L=s[2],w=s[5],R=s[8];return r[0]=o*v+a*S+c*L,r[3]=o*m+a*x+c*w,r[6]=o*p+a*_+c*R,r[1]=l*v+h*S+u*L,r[4]=l*m+h*x+u*w,r[7]=l*p+h*_+u*R,r[2]=d*v+f*S+g*L,r[5]=d*m+f*x+g*w,r[8]=d*p+f*_+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=e*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*l-h*i)*v,t[2]=(a*i-s*o)*v,t[3]=d*v,t[4]=(h*e-s*c)*v,t[5]=(s*r-a*e)*v,t[6]=f*v,t[7]=(i*c-l*e)*v,t[8]=(o*e-i*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ra.makeScale(t,e)),this}rotate(t){return this.premultiply(ra.makeRotation(-t)),this}translate(t,e){return this.premultiply(ra.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ra=new Vt;function Yu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Rr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ap(){const n=Rr("canvas");return n.style.display="block",n}const Xl={};function xr(n){n in Xl||(Xl[n]=!0,console.warn(n))}function cp(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function lp(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function hp(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const te={enabled:!0,workingColorSpace:js,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===he&&(n.r=$n(n.r),n.g=$n(n.g),n.b=$n(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===he&&(n.r=Ns(n.r),n.g=Ns(n.g),n.b=Ns(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===pi?Ho:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function $n(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ns(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const ql=[.64,.33,.3,.6,.15,.06],Yl=[.2126,.7152,.0722],Zl=[.3127,.329],jl=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kl=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);te.define({[js]:{primaries:ql,whitePoint:Zl,transfer:Ho,toXYZ:jl,fromXYZ:Kl,luminanceCoefficients:Yl,workingColorSpaceConfig:{unpackColorSpace:Pe},outputColorSpaceConfig:{drawingBufferColorSpace:Pe}},[Pe]:{primaries:ql,whitePoint:Zl,transfer:he,toXYZ:jl,fromXYZ:Kl,luminanceCoefficients:Yl,outputColorSpaceConfig:{drawingBufferColorSpace:Pe}}});let os;class up{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{os===void 0&&(os=Rr("canvas")),os.width=t.width,os.height=t.height;const i=os.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=os}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Rr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=$n(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor($n(e[i]/255)*255):e[i]=$n(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let fp=0;class Zu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=zn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(oa(s[o].image)):r.push(oa(s[o]))}else r=oa(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function oa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?up.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dp=0;class ke extends ji{constructor(t=ke.DEFAULT_IMAGE,e=ke.DEFAULT_MAPPING,i=Bi,s=Bi,r=sn,o=Nn,a=rn,c=Tn,l=ke.DEFAULT_ANISOTROPY,h=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=zn(),this.name="",this.source=new Zu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Hs:t.x=t.x-Math.floor(t.x);break;case Bi:t.x=t.x<0?0:1;break;case hc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Hs:t.y=t.y-Math.floor(t.y);break;case Bi:t.y=t.y<0?0:1;break;case hc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=Fu;ke.DEFAULT_ANISOTROPY=1;class de{constructor(t=0,e=0,i=0,s=1){de.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,_=(f+1)/2,L=(p+1)/2,w=(h+d)/4,R=(u+v)/4,T=(g+m)/4;return x>_&&x>L?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=w/i,r=R/i):_>L?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=w/s,r=T/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=R/r,s=T/r),this.set(i,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-v)/S,this.z=(d-h)/S,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pp extends ji{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new ke(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Zu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends pp{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class ju extends ke{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class mp extends ke{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wn{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(u!==v||c!==d||l!==f||h!==g){let m=1-a;const p=c*d+l*f+h*g+u*v,S=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const L=Math.sqrt(x),w=Math.atan2(L,p*S);m=Math.sin(m*w)/L,a=Math.sin(a*w)/L}const _=a*S;if(c=c*m+d*_,l=l*m+f*_,h=h*m+g*_,u=u*m+v*_,m===1-a){const L=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=L,l*=L,h*=L,u*=L}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-a*f,t[e+2]=l*g+h*f+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(r/2),d=c(i/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Le(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,i=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Jl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Jl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+c*l+o*u-a*h,this.y=i+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return aa.copy(this).projectOnVector(t),this.sub(aa)}reflect(t){return this.sub(aa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Le(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const aa=new P,Jl=new wn;class Ki{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,vn):vn.fromBufferAttribute(r,o),vn.applyMatrix4(t.matrixWorld),this.expandByPoint(vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Gr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Gr.copy(i.boundingBox)),Gr.applyMatrix4(t.matrixWorld),this.union(Gr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ir),Vr.subVectors(this.max,ir),as.subVectors(t.a,ir),cs.subVectors(t.b,ir),ls.subVectors(t.c,ir),ci.subVectors(cs,as),li.subVectors(ls,cs),Ai.subVectors(as,ls);let e=[0,-ci.z,ci.y,0,-li.z,li.y,0,-Ai.z,Ai.y,ci.z,0,-ci.x,li.z,0,-li.x,Ai.z,0,-Ai.x,-ci.y,ci.x,0,-li.y,li.x,0,-Ai.y,Ai.x,0];return!ca(e,as,cs,ls,Vr)||(e=[1,0,0,0,1,0,0,0,1],!ca(e,as,cs,ls,Vr))?!1:(Wr.crossVectors(ci,li),e=[Wr.x,Wr.y,Wr.z],ca(e,as,cs,ls,Vr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Gn=[new P,new P,new P,new P,new P,new P,new P,new P],vn=new P,Gr=new Ki,as=new P,cs=new P,ls=new P,ci=new P,li=new P,Ai=new P,ir=new P,Vr=new P,Wr=new P,Ri=new P;function ca(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ri.fromArray(n,r);const a=s.x*Math.abs(Ri.x)+s.y*Math.abs(Ri.y)+s.z*Math.abs(Ri.z),c=t.dot(Ri),l=e.dot(Ri),h=i.dot(Ri);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const gp=new Ki,sr=new P,la=new P;class Ks{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):gp.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;sr.subVectors(t,this.center);const e=sr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(sr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(la.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(sr.copy(t.center).add(la)),this.expandByPoint(sr.copy(t.center).sub(la))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vn=new P,ha=new P,Xr=new P,hi=new P,ua=new P,qr=new P,fa=new P;class Go{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Vn.copy(this.origin).addScaledVector(this.direction,e),Vn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){ha.copy(t).add(e).multiplyScalar(.5),Xr.copy(e).sub(t).normalize(),hi.copy(this.origin).sub(ha);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Xr),a=hi.dot(this.direction),c=-hi.dot(Xr),l=hi.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ha).addScaledVector(Xr,d),f}intersectSphere(t,e){Vn.subVectors(t.center,this.origin);const i=Vn.dot(this.direction),s=Vn.dot(Vn)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Vn)!==null}intersectTriangle(t,e,i,s,r){ua.subVectors(e,t),qr.subVectors(i,t),fa.crossVectors(ua,qr);let o=this.direction.dot(fa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hi.subVectors(this.origin,t);const c=a*this.direction.dot(qr.crossVectors(hi,qr));if(c<0)return null;const l=a*this.direction.dot(ua.cross(hi));if(l<0||c+l>o)return null;const h=-a*hi.dot(fa);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ee{constructor(t,e,i,s,r,o,a,c,l,h,u,d,f,g,v,m){ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,h,u,d,f,g,v,m)}set(t,e,i,s,r,o,a,c,l,h,u,d,f,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ee().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/hs.setFromMatrixColumn(t,0).length(),r=1/hs.setFromMatrixColumn(t,1).length(),o=1/hs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,v=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-v*l,e[9]=-a*c,e[2]=v-d*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,g=l*h,v=l*u;e[0]=d+v*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=v+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,g=l*h,v=l*u;e[0]=d-v*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=v-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,v=a*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+v,e[1]=c*u,e[5]=v*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,g=a*c,v=a*l;e[0]=c*h,e[4]=v-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-v*u}else if(t.order==="XZY"){const d=o*c,f=o*l,g=a*c,v=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+v,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_p,t,vp)}lookAt(t,e,i){const s=this.elements;return tn.subVectors(t,e),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),ui.crossVectors(i,tn),ui.lengthSq()===0&&(Math.abs(i.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),ui.crossVectors(i,tn)),ui.normalize(),Yr.crossVectors(tn,ui),s[0]=ui.x,s[4]=Yr.x,s[8]=tn.x,s[1]=ui.y,s[5]=Yr.y,s[9]=tn.y,s[2]=ui.z,s[6]=Yr.z,s[10]=tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],S=i[3],x=i[7],_=i[11],L=i[15],w=s[0],R=s[4],T=s[8],y=s[12],M=s[1],A=s[5],D=s[9],U=s[13],H=s[2],G=s[6],F=s[10],X=s[14],k=s[3],J=s[7],st=s[11],dt=s[15];return r[0]=o*w+a*M+c*H+l*k,r[4]=o*R+a*A+c*G+l*J,r[8]=o*T+a*D+c*F+l*st,r[12]=o*y+a*U+c*X+l*dt,r[1]=h*w+u*M+d*H+f*k,r[5]=h*R+u*A+d*G+f*J,r[9]=h*T+u*D+d*F+f*st,r[13]=h*y+u*U+d*X+f*dt,r[2]=g*w+v*M+m*H+p*k,r[6]=g*R+v*A+m*G+p*J,r[10]=g*T+v*D+m*F+p*st,r[14]=g*y+v*U+m*X+p*dt,r[3]=S*w+x*M+_*H+L*k,r[7]=S*R+x*A+_*G+L*J,r[11]=S*T+x*D+_*F+L*st,r[15]=S*y+x*U+_*X+L*dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*a*d+i*l*d+s*a*f-i*c*f)+v*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+m*(+e*l*u-e*a*f-r*o*u+i*o*f+r*a*h-i*l*h)+p*(-s*a*h-e*c*u+e*a*d+s*o*u-i*o*d+i*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],S=u*m*l-v*d*l+v*c*f-a*m*f-u*c*p+a*d*p,x=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,_=h*v*l-g*u*l+g*a*f-o*v*f-h*a*p+o*u*p,L=g*u*c-h*v*c-g*a*d+o*v*d+h*a*m-o*u*m,w=e*S+i*x+s*_+r*L;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return t[0]=S*R,t[1]=(v*d*r-u*m*r-v*s*f+i*m*f+u*s*p-i*d*p)*R,t[2]=(a*m*r-v*c*r+v*s*l-i*m*l-a*s*p+i*c*p)*R,t[3]=(u*c*r-a*d*r-u*s*l+i*d*l+a*s*f-i*c*f)*R,t[4]=x*R,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*R,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*R,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*f+e*c*f)*R,t[8]=_*R,t[9]=(g*u*r-h*v*r-g*i*f+e*v*f+h*i*p-e*u*p)*R,t[10]=(o*v*r-g*a*r+g*i*l-e*v*l-o*i*p+e*a*p)*R,t[11]=(h*a*r-o*u*r-h*i*l+e*u*l+o*i*f-e*a*f)*R,t[12]=L*R,t[13]=(h*v*s-g*u*s+g*i*d-e*v*d-h*i*m+e*u*m)*R,t[14]=(g*a*s-o*v*s-g*i*c+e*v*c+o*i*m-e*a*m)*R,t[15]=(o*u*s-h*a*s+h*i*c-e*u*c-o*i*d+e*a*d)*R,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,v=o*h,m=o*u,p=a*u,S=c*l,x=c*h,_=c*u,L=i.x,w=i.y,R=i.z;return s[0]=(1-(v+p))*L,s[1]=(f+_)*L,s[2]=(g-x)*L,s[3]=0,s[4]=(f-_)*w,s[5]=(1-(d+p))*w,s[6]=(m+S)*w,s[7]=0,s[8]=(g+x)*R,s[9]=(m-S)*R,s[10]=(1-(d+v))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=hs.set(s[0],s[1],s[2]).length();const o=hs.set(s[4],s[5],s[6]).length(),a=hs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],xn.copy(this);const l=1/r,h=1/o,u=1/a;return xn.elements[0]*=l,xn.elements[1]*=l,xn.elements[2]*=l,xn.elements[4]*=h,xn.elements[5]*=h,xn.elements[6]*=h,xn.elements[8]*=u,xn.elements[9]*=u,xn.elements[10]*=u,e.setFromRotationMatrix(xn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Kn){const c=this.elements,l=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s);let f,g;if(a===Kn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ro)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Kn){const c=this.elements,l=1/(e-t),h=1/(i-s),u=1/(o-r),d=(e+t)*l,f=(i+s)*h;let g,v;if(a===Kn)g=(o+r)*u,v=-2*u;else if(a===Ro)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const hs=new P,xn=new ee,_p=new P(0,0,0),vp=new P(1,1,1),ui=new P,Yr=new P,tn=new P,$l=new ee,Ql=new wn;class mn{constructor(t=0,e=0,i=0,s=mn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Le(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Le(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Le(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return $l.makeRotationFromQuaternion(t),this.setFromRotationMatrix($l,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ql.setFromEuler(this),this.setFromQuaternion(Ql,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mn.DEFAULT_ORDER="XYZ";class pl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let xp=0;const th=new P,us=new wn,Wn=new ee,Zr=new P,rr=new P,Mp=new P,yp=new wn,eh=new P(1,0,0),nh=new P(0,1,0),ih=new P(0,0,1),sh={type:"added"},Sp={type:"removed"},fs={type:"childadded",child:null},da={type:"childremoved",child:null};class Ie extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ie.DEFAULT_UP.clone();const t=new P,e=new mn,i=new wn,s=new P(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ee},normalMatrix:{value:new Vt}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=Ie.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.multiply(us),this}rotateOnWorldAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.premultiply(us),this}rotateX(t){return this.rotateOnAxis(eh,t)}rotateY(t){return this.rotateOnAxis(nh,t)}rotateZ(t){return this.rotateOnAxis(ih,t)}translateOnAxis(t,e){return th.copy(t).applyQuaternion(this.quaternion),this.position.add(th.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(eh,t)}translateY(t){return this.translateOnAxis(nh,t)}translateZ(t){return this.translateOnAxis(ih,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Zr.copy(t):Zr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(rr,Zr,this.up):Wn.lookAt(Zr,rr,this.up),this.quaternion.setFromRotationMatrix(Wn),s&&(Wn.extractRotation(s.matrixWorld),us.setFromRotationMatrix(Wn),this.quaternion.premultiply(us.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(sh),fs.child=t,this.dispatchEvent(fs),fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sp),da.child=t,this.dispatchEvent(da),da.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(sh),fs.child=t,this.dispatchEvent(fs),fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,t,Mp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,yp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ie.DEFAULT_UP=new P(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mn=new P,Xn=new P,pa=new P,qn=new P,ds=new P,ps=new P,rh=new P,ma=new P,ga=new P,_a=new P,va=new de,xa=new de,Ma=new de;class dn{constructor(t=new P,e=new P,i=new P){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Mn.subVectors(t,e),s.cross(Mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Mn.subVectors(s,e),Xn.subVectors(i,e),pa.subVectors(t,e);const o=Mn.dot(Mn),a=Mn.dot(Xn),c=Mn.dot(pa),l=Xn.dot(Xn),h=Xn.dot(pa),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,qn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,qn.x),c.addScaledVector(o,qn.y),c.addScaledVector(a,qn.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return va.setScalar(0),xa.setScalar(0),Ma.setScalar(0),va.fromBufferAttribute(t,e),xa.fromBufferAttribute(t,i),Ma.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(va,r.x),o.addScaledVector(xa,r.y),o.addScaledVector(Ma,r.z),o}static isFrontFacing(t,e,i,s){return Mn.subVectors(i,e),Xn.subVectors(t,e),Mn.cross(Xn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),Mn.cross(Xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return dn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return dn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return dn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return dn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return dn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;ds.subVectors(s,i),ps.subVectors(r,i),ma.subVectors(t,i);const c=ds.dot(ma),l=ps.dot(ma);if(c<=0&&l<=0)return e.copy(i);ga.subVectors(t,s);const h=ds.dot(ga),u=ps.dot(ga);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(i).addScaledVector(ds,o);_a.subVectors(t,r);const f=ds.dot(_a),g=ps.dot(_a);if(g>=0&&f<=g)return e.copy(r);const v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(ps,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return rh.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(rh,a);const p=1/(m+v+d);return o=v*p,a=d*p,e.copy(i).addScaledVector(ds,o).addScaledVector(ps,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ku={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},jr={h:0,s:0,l:0};function ya(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Lt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=i,te.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=te.workingColorSpace){if(t=dl(t,1),e=Le(e,0,1),i=Le(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=ya(o,r,t+1/3),this.g=ya(o,r,t),this.b=ya(o,r,t-1/3)}return te.toWorkingColorSpace(this,s),this}setStyle(t,e=Pe){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pe){const i=Ku[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$n(t.r),this.g=$n(t.g),this.b=$n(t.b),this}copyLinearToSRGB(t){return this.r=Ns(t.r),this.g=Ns(t.g),this.b=Ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pe){return te.fromWorkingColorSpace(Ge.copy(this),t),Math.round(Le(Ge.r*255,0,255))*65536+Math.round(Le(Ge.g*255,0,255))*256+Math.round(Le(Ge.b*255,0,255))}getHexString(t=Pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Ge.copy(this),e);const i=Ge.r,s=Ge.g,r=Ge.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=Pe){te.fromWorkingColorSpace(Ge.copy(this),t);const e=Ge.r,i=Ge.g,s=Ge.b;return t!==Pe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(fi),this.setHSL(fi.h+t,fi.s+e,fi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(fi),t.getHSL(jr);const i=Sr(fi.h,jr.h,e),s=Sr(fi.s,jr.s,e),r=Sr(fi.l,jr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ge=new Lt;Lt.NAMES=Ku;let Ep=0;class Ji extends ji{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=zn(),this.name="",this.blending=Is,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tc,this.blendDst=wr,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Is&&(i.blending=this.blending),this.side!==vi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==tc&&(i.blendSrc=this.blendSrc),this.blendDst!==wr&&(i.blendDst=this.blendDst),this.blendEquation!==Fi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==zs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class xi extends Ji{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Re=new P,Kr=new it;class De{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Oc,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Kr.fromBufferAttribute(this,e),Kr.applyMatrix3(t),this.setXY(e,Kr.x,Kr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=En(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=le(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=En(e,this.array)),e}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=En(e,this.array)),e}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=En(e,this.array)),e}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=En(e,this.array)),e}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),i=le(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),i=le(i,this.array),s=le(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),i=le(i,this.array),s=le(s,this.array),r=le(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Oc&&(t.usage=this.usage),t}}class Ju extends De{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class $u extends De{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class oe extends De{constructor(t,e,i){super(new Float32Array(t),e,i)}}let bp=0;const hn=new ee,Sa=new Ie,ms=new P,en=new Ki,or=new Ki,ze=new P;class Be extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yu(t)?$u:Ju)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Vt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hn.makeRotationFromQuaternion(t),this.applyMatrix4(hn),this}rotateX(t){return hn.makeRotationX(t),this.applyMatrix4(hn),this}rotateY(t){return hn.makeRotationY(t),this.applyMatrix4(hn),this}rotateZ(t){return hn.makeRotationZ(t),this.applyMatrix4(hn),this}translate(t,e,i){return hn.makeTranslation(t,e,i),this.applyMatrix4(hn),this}scale(t,e,i){return hn.makeScale(t,e,i),this.applyMatrix4(hn),this}lookAt(t){return Sa.lookAt(t),Sa.updateMatrix(),this.applyMatrix4(Sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new oe(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ki);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];en.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ks);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const i=this.boundingSphere.center;if(en.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];or.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(en.min,or.min),en.expandByPoint(ze),ze.addVectors(en.max,or.max),en.expandByPoint(ze)):(en.expandByPoint(or.min),en.expandByPoint(or.max))}en.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)ze.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(ze));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)ze.fromBufferAttribute(a,l),c&&(ms.fromBufferAttribute(t,l),ze.add(ms)),s=Math.max(s,i.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new De(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let T=0;T<i.count;T++)a[T]=new P,c[T]=new P;const l=new P,h=new P,u=new P,d=new it,f=new it,g=new it,v=new P,m=new P;function p(T,y,M){l.fromBufferAttribute(i,T),h.fromBufferAttribute(i,y),u.fromBufferAttribute(i,M),d.fromBufferAttribute(r,T),f.fromBufferAttribute(r,y),g.fromBufferAttribute(r,M),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const A=1/(f.x*g.y-g.x*f.y);isFinite(A)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(A),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(A),a[T].add(v),a[y].add(v),a[M].add(v),c[T].add(m),c[y].add(m),c[M].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let T=0,y=S.length;T<y;++T){const M=S[T],A=M.start,D=M.count;for(let U=A,H=A+D;U<H;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const x=new P,_=new P,L=new P,w=new P;function R(T){L.fromBufferAttribute(s,T),w.copy(L);const y=a[T];x.copy(y),x.sub(L.multiplyScalar(L.dot(y))).normalize(),_.crossVectors(w,y);const A=_.dot(c[T])<0?-1:1;o.setXYZW(T,x.x,x.y,x.z,A)}for(let T=0,y=S.length;T<y;++T){const M=S[T],A=M.start,D=M.count;for(let U=A,H=A+D;U<H;U+=3)R(t.getX(U+0)),R(t.getX(U+1)),R(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new De(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new P,r=new P,o=new P,a=new P,c=new P,l=new P,h=new P,u=new P;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new De(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Be,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,i);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,i);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const oh=new ee,Ci=new Go,Jr=new Ks,ah=new P,$r=new P,Qr=new P,to=new P,Ea=new P,eo=new P,ch=new P,no=new P;class Kt extends Ie{constructor(t=new Be,e=new xi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){eo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Ea.fromBufferAttribute(u,t),o?eo.addScaledVector(Ea,h):eo.addScaledVector(Ea.sub(e),h))}e.add(eo)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Jr.copy(i.boundingSphere),Jr.applyMatrix4(r),Ci.copy(t.ray).recast(t.near),!(Jr.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(Jr,ah)===null||Ci.origin.distanceToSquared(ah)>(t.far-t.near)**2))&&(oh.copy(r).invert(),Ci.copy(t.ray).applyMatrix4(oh),!(i.boundingBox!==null&&Ci.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ci)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=S,L=x;_<L;_+=3){const w=a.getX(_),R=a.getX(_+1),T=a.getX(_+2);s=io(this,p,t,i,l,h,u,w,R,T),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const S=a.getX(m),x=a.getX(m+1),_=a.getX(m+2);s=io(this,o,t,i,l,h,u,S,x,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),x=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=S,L=x;_<L;_+=3){const w=_,R=_+1,T=_+2;s=io(this,p,t,i,l,h,u,w,R,T),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const S=m,x=m+1,_=m+2;s=io(this,o,t,i,l,h,u,S,x,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Tp(n,t,e,i,s,r,o,a){let c;if(t.side===Ye?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===vi,a),c===null)return null;no.copy(a),no.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(no);return l<e.near||l>e.far?null:{distance:l,point:no.clone(),object:n}}function io(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,$r),n.getVertexPosition(c,Qr),n.getVertexPosition(l,to);const h=Tp(n,t,e,i,$r,Qr,to,ch);if(h){const u=new P;dn.getBarycoord(ch,$r,Qr,to,u),s&&(h.uv=dn.getInterpolatedAttribute(s,a,c,l,u,new it)),r&&(h.uv1=dn.getInterpolatedAttribute(r,a,c,l,u,new it)),o&&(h.normal=dn.getInterpolatedAttribute(o,a,c,l,u,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new P,materialIndex:0};dn.getNormal($r,Qr,to,d.normal),h.face=d,h.barycoord=u}return h}class Si extends Be{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new oe(l,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(u,2));function g(v,m,p,S,x,_,L,w,R,T,y){const M=_/R,A=L/T,D=_/2,U=L/2,H=w/2,G=R+1,F=T+1;let X=0,k=0;const J=new P;for(let st=0;st<F;st++){const dt=st*A-U;for(let wt=0;wt<G;wt++){const Ht=wt*M-D;J[v]=Ht*S,J[m]=dt*x,J[p]=H,l.push(J.x,J.y,J.z),J[v]=0,J[m]=0,J[p]=w>0?1:-1,h.push(J.x,J.y,J.z),u.push(wt/R),u.push(1-st/T),X+=1}}for(let st=0;st<T;st++)for(let dt=0;dt<R;dt++){const wt=d+dt+G*st,Ht=d+dt+G*(st+1),q=d+(dt+1)+G*(st+1),Q=d+(dt+1)+G*st;c.push(wt,Ht,Q),c.push(Ht,q,Q),k+=6}a.addGroup(f,k,y),f+=k,d+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Si(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Xs(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function qe(n){const t={};for(let e=0;e<n.length;e++){const i=Xs(n[e]);for(const s in i)t[s]=i[s]}return t}function wp(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Qu(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const Ap={clone:Xs,merge:qe};var Rp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mi extends Ji{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rp,this.fragmentShader=Cp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xs(t.uniforms),this.uniformsGroups=wp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class tf extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=Kn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const di=new P,lh=new it,hh=new it;class Je extends tf{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ws*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(yr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ws*2*Math.atan(Math.tan(yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(di.x,di.y).multiplyScalar(-t/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(di.x,di.y).multiplyScalar(-t/di.z)}getViewSize(t,e){return this.getViewBounds(t,lh,hh),e.subVectors(hh,lh)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(yr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const gs=-90,_s=1;class Pp extends Ie{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Je(gs,_s,t,e);s.layers=this.layers,this.add(s);const r=new Je(gs,_s,t,e);r.layers=this.layers,this.add(r);const o=new Je(gs,_s,t,e);o.layers=this.layers,this.add(o);const a=new Je(gs,_s,t,e);a.layers=this.layers,this.add(a);const c=new Je(gs,_s,t,e);c.layers=this.layers,this.add(c);const l=new Je(gs,_s,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Kn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ro)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class ef extends ke{constructor(t,e,i,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Bs,super(t,e,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Lp extends Wi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new ef(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:sn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Si(5,5,5),r=new Mi({name:"CubemapFromEquirect",uniforms:Xs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ye,blending:gi});r.uniforms.tEquirect.value=e;const o=new Kt(s,r),a=e.minFilter;return e.minFilter===Nn&&(e.minFilter=sn),new Pp(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const ba=new P,Dp=new P,Ip=new Vt;class In{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=ba.subVectors(i,e).cross(Dp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(ba),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Ip.getNormalMatrix(t),s=this.coplanarPoint(ba).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pi=new Ks,so=new P;class ml{constructor(t=new In,e=new In,i=new In,s=new In,r=new In,o=new In){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Kn){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],S=s[13],x=s[14],_=s[15];if(i[0].setComponents(c-r,d-l,m-f,_-p).normalize(),i[1].setComponents(c+r,d+l,m+f,_+p).normalize(),i[2].setComponents(c+o,d+h,m+g,_+S).normalize(),i[3].setComponents(c-o,d-h,m-g,_-S).normalize(),i[4].setComponents(c-a,d-u,m-v,_-x).normalize(),e===Kn)i[5].setComponents(c+a,d+u,m+v,_+x).normalize();else if(e===Ro)i[5].setComponents(a,u,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(t){return Pi.center.set(0,0,0),Pi.radius=.7071067811865476,Pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(so.x=s.normal.x>0?t.max.x:t.min.x,so.y=s.normal.y>0?t.max.y:t.min.y,so.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(so)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function nf(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Up(n){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){const h=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const v=u[f];n.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class yi extends Be{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const S=p*d-o;for(let x=0;x<l;x++){const _=x*u-r;g.push(_,-S,0),v.push(0,0,1),m.push(x/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<a;S++){const x=S+l*p,_=S+l*(p+1),L=S+1+l*(p+1),w=S+1+l*p;f.push(x,_,w),f.push(_,L,w)}this.setIndex(f),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(v,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yi(t.width,t.height,t.widthSegments,t.heightSegments)}}var Np=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fp=`#ifdef USE_ALPHAHASH
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
#endif`,Op=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hp=`#ifdef USE_AOMAP
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
#endif`,Gp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Wp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zp=`#ifdef USE_IRIDESCENCE
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
#endif`,jp=`#ifdef USE_BUMPMAP
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
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,em=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,im=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,sm=`#define PI 3.141592653589793
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
} // validated`,rm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,om=`vec3 transformedNormal = objectNormal;
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
#endif`,am=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,um="gl_FragColor = linearToOutputTexel( gl_FragColor );",fm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dm=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,pm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mm=`#ifdef USE_ENVMAP
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
#endif`,gm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_m=`#ifdef USE_ENVMAP
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
#endif`,vm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ym=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sm=`#ifdef USE_GRADIENTMAP
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
}`,Em=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wm=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,Am=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,Rm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dm=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,Im=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,Um=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Nm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Om=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,km=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wm=`#if defined( USE_POINTS_UV )
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
#endif`,Xm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ym=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Km=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Jm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$m=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,t0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,i0=`#ifdef USE_NORMALMAP
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
#endif`,s0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,r0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,o0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,a0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,c0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,l0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,h0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,u0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,f0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,d0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,p0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,m0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,g0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,_0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,v0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,x0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,M0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,y0=`#ifdef USE_SKINNING
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
#endif`,S0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,E0=`#ifdef USE_SKINNING
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
#endif`,b0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,T0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,w0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,A0=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,R0=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,C0=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,P0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const U0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,N0=`uniform sampler2D t2D;
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
}`,F0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k0=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,H0=`#if DEPTH_PACKING == 3200
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,G0=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,V0=`#define DISTANCE
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
}`,W0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,X0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q0=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Y0=`uniform vec3 diffuse;
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
}`,Z0=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,j0=`uniform vec3 diffuse;
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
}`,K0=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,J0=`#define LAMBERT
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
}`,$0=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,Q0=`#define MATCAP
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
}`,tg=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,eg=`#define NORMAL
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
}`,ng=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,ig=`#define PHONG
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
}`,sg=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,rg=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
}`,og=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,ag=`#define TOON
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
}`,cg=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,lg=`uniform vec3 diffuse;
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
}`,hg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,ug=`uniform vec3 color;
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
}`,fg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,dg=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:Np,alphahash_pars_fragment:Fp,alphamap_fragment:Op,alphamap_pars_fragment:zp,alphatest_fragment:Bp,alphatest_pars_fragment:kp,aomap_fragment:Hp,aomap_pars_fragment:Gp,batching_pars_vertex:Vp,batching_vertex:Wp,begin_vertex:Xp,beginnormal_vertex:qp,bsdfs:Yp,iridescence_fragment:Zp,bumpmap_pars_fragment:jp,clipping_planes_fragment:Kp,clipping_planes_pars_fragment:Jp,clipping_planes_pars_vertex:$p,clipping_planes_vertex:Qp,color_fragment:tm,color_pars_fragment:em,color_pars_vertex:nm,color_vertex:im,common:sm,cube_uv_reflection_fragment:rm,defaultnormal_vertex:om,displacementmap_pars_vertex:am,displacementmap_vertex:cm,emissivemap_fragment:lm,emissivemap_pars_fragment:hm,colorspace_fragment:um,colorspace_pars_fragment:fm,envmap_fragment:dm,envmap_common_pars_fragment:pm,envmap_pars_fragment:mm,envmap_pars_vertex:gm,envmap_physical_pars_fragment:Am,envmap_vertex:_m,fog_vertex:vm,fog_pars_vertex:xm,fog_fragment:Mm,fog_pars_fragment:ym,gradientmap_pars_fragment:Sm,lightmap_pars_fragment:Em,lights_lambert_fragment:bm,lights_lambert_pars_fragment:Tm,lights_pars_begin:wm,lights_toon_fragment:Rm,lights_toon_pars_fragment:Cm,lights_phong_fragment:Pm,lights_phong_pars_fragment:Lm,lights_physical_fragment:Dm,lights_physical_pars_fragment:Im,lights_fragment_begin:Um,lights_fragment_maps:Nm,lights_fragment_end:Fm,logdepthbuf_fragment:Om,logdepthbuf_pars_fragment:zm,logdepthbuf_pars_vertex:Bm,logdepthbuf_vertex:km,map_fragment:Hm,map_pars_fragment:Gm,map_particle_fragment:Vm,map_particle_pars_fragment:Wm,metalnessmap_fragment:Xm,metalnessmap_pars_fragment:qm,morphinstance_vertex:Ym,morphcolor_vertex:Zm,morphnormal_vertex:jm,morphtarget_pars_vertex:Km,morphtarget_vertex:Jm,normal_fragment_begin:$m,normal_fragment_maps:Qm,normal_pars_fragment:t0,normal_pars_vertex:e0,normal_vertex:n0,normalmap_pars_fragment:i0,clearcoat_normal_fragment_begin:s0,clearcoat_normal_fragment_maps:r0,clearcoat_pars_fragment:o0,iridescence_pars_fragment:a0,opaque_fragment:c0,packing:l0,premultiplied_alpha_fragment:h0,project_vertex:u0,dithering_fragment:f0,dithering_pars_fragment:d0,roughnessmap_fragment:p0,roughnessmap_pars_fragment:m0,shadowmap_pars_fragment:g0,shadowmap_pars_vertex:_0,shadowmap_vertex:v0,shadowmask_pars_fragment:x0,skinbase_vertex:M0,skinning_pars_vertex:y0,skinning_vertex:S0,skinnormal_vertex:E0,specularmap_fragment:b0,specularmap_pars_fragment:T0,tonemapping_fragment:w0,tonemapping_pars_fragment:A0,transmission_fragment:R0,transmission_pars_fragment:C0,uv_pars_fragment:P0,uv_pars_vertex:L0,uv_vertex:D0,worldpos_vertex:I0,background_vert:U0,background_frag:N0,backgroundCube_vert:F0,backgroundCube_frag:O0,cube_vert:z0,cube_frag:B0,depth_vert:k0,depth_frag:H0,distanceRGBA_vert:G0,distanceRGBA_frag:V0,equirect_vert:W0,equirect_frag:X0,linedashed_vert:q0,linedashed_frag:Y0,meshbasic_vert:Z0,meshbasic_frag:j0,meshlambert_vert:K0,meshlambert_frag:J0,meshmatcap_vert:$0,meshmatcap_frag:Q0,meshnormal_vert:tg,meshnormal_frag:eg,meshphong_vert:ng,meshphong_frag:ig,meshphysical_vert:sg,meshphysical_frag:rg,meshtoon_vert:og,meshtoon_frag:ag,points_vert:cg,points_frag:lg,shadow_vert:hg,shadow_frag:ug,sprite_vert:fg,sprite_frag:dg},gt={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},Un={basic:{uniforms:qe([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:qe([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:qe([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:qe([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:qe([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:qe([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:qe([gt.points,gt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:qe([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:qe([gt.common,gt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:qe([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:qe([gt.sprite,gt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:qe([gt.common,gt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:qe([gt.lights,gt.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};Un.physical={uniforms:qe([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const ro={r:0,b:0,g:0},Li=new mn,pg=new ee;function mg(n,t,e,i,s,r,o){const a=new Lt(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?e:t).get(x)),x}function v(S){let x=!1;const _=g(S);_===null?p(a,c):_&&_.isColor&&(p(_,1),x=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,x){const _=g(x);_&&(_.isCubeTexture||_.mapping===ko)?(h===void 0&&(h=new Kt(new Si(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:Xs(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Li.copy(x.backgroundRotation),Li.x*=-1,Li.y*=-1,Li.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(pg.makeRotationFromEuler(Li)),h.material.toneMapped=te.getTransfer(_.colorSpace)!==he,(u!==_||d!==_.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=n.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Kt(new yi(2,2),new Mi({name:"BackgroundMaterial",uniforms:Xs(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=te.getTransfer(_.colorSpace)!==he,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,f=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,x){S.getRGB(ro,Qu(n)),i.buffers.color.setClear(ro.r,ro.g,ro.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(S,x=1){a.set(S),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,p(a,c)},render:v,addToRenderList:m}}function gg(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(M,A,D,U,H){let G=!1;const F=u(U,D,A);r!==F&&(r=F,l(r.object)),G=f(M,U,D,H),G&&g(M,U,D,H),H!==null&&t.update(H,n.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,_(M,A,D,U),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return n.createVertexArray()}function l(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function u(M,A,D){const U=D.wireframe===!0;let H=i[M.id];H===void 0&&(H={},i[M.id]=H);let G=H[A.id];G===void 0&&(G={},H[A.id]=G);let F=G[U];return F===void 0&&(F=d(c()),G[U]=F),F}function d(M){const A=[],D=[],U=[];for(let H=0;H<e;H++)A[H]=0,D[H]=0,U[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:D,attributeDivisors:U,object:M,attributes:{},index:null}}function f(M,A,D,U){const H=r.attributes,G=A.attributes;let F=0;const X=D.getAttributes();for(const k in X)if(X[k].location>=0){const st=H[k];let dt=G[k];if(dt===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(dt=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(dt=M.instanceColor)),st===void 0||st.attribute!==dt||dt&&st.data!==dt.data)return!0;F++}return r.attributesNum!==F||r.index!==U}function g(M,A,D,U){const H={},G=A.attributes;let F=0;const X=D.getAttributes();for(const k in X)if(X[k].location>=0){let st=G[k];st===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(st=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(st=M.instanceColor));const dt={};dt.attribute=st,st&&st.data&&(dt.data=st.data),H[k]=dt,F++}r.attributes=H,r.attributesNum=F,r.index=U}function v(){const M=r.newAttributes;for(let A=0,D=M.length;A<D;A++)M[A]=0}function m(M){p(M,0)}function p(M,A){const D=r.newAttributes,U=r.enabledAttributes,H=r.attributeDivisors;D[M]=1,U[M]===0&&(n.enableVertexAttribArray(M),U[M]=1),H[M]!==A&&(n.vertexAttribDivisor(M,A),H[M]=A)}function S(){const M=r.newAttributes,A=r.enabledAttributes;for(let D=0,U=A.length;D<U;D++)A[D]!==M[D]&&(n.disableVertexAttribArray(D),A[D]=0)}function x(M,A,D,U,H,G,F){F===!0?n.vertexAttribIPointer(M,A,D,H,G):n.vertexAttribPointer(M,A,D,U,H,G)}function _(M,A,D,U){v();const H=U.attributes,G=D.getAttributes(),F=A.defaultAttributeValues;for(const X in G){const k=G[X];if(k.location>=0){let J=H[X];if(J===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(J=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(J=M.instanceColor)),J!==void 0){const st=J.normalized,dt=J.itemSize,wt=t.get(J);if(wt===void 0)continue;const Ht=wt.buffer,q=wt.type,Q=wt.bytesPerElement,tt=q===n.INT||q===n.UNSIGNED_INT||J.gpuType===rl;if(J.isInterleavedBufferAttribute){const et=J.data,ht=et.stride,vt=J.offset;if(et.isInstancedInterleavedBuffer){for(let It=0;It<k.locationSize;It++)p(k.location+It,et.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let It=0;It<k.locationSize;It++)m(k.location+It);n.bindBuffer(n.ARRAY_BUFFER,Ht);for(let It=0;It<k.locationSize;It++)x(k.location+It,dt/k.locationSize,q,st,ht*Q,(vt+dt/k.locationSize*It)*Q,tt)}else{if(J.isInstancedBufferAttribute){for(let et=0;et<k.locationSize;et++)p(k.location+et,J.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let et=0;et<k.locationSize;et++)m(k.location+et);n.bindBuffer(n.ARRAY_BUFFER,Ht);for(let et=0;et<k.locationSize;et++)x(k.location+et,dt/k.locationSize,q,st,dt*Q,dt/k.locationSize*et*Q,tt)}}else if(F!==void 0){const st=F[X];if(st!==void 0)switch(st.length){case 2:n.vertexAttrib2fv(k.location,st);break;case 3:n.vertexAttrib3fv(k.location,st);break;case 4:n.vertexAttrib4fv(k.location,st);break;default:n.vertexAttrib1fv(k.location,st)}}}}S()}function L(){T();for(const M in i){const A=i[M];for(const D in A){const U=A[D];for(const H in U)h(U[H].object),delete U[H];delete A[D]}delete i[M]}}function w(M){if(i[M.id]===void 0)return;const A=i[M.id];for(const D in A){const U=A[D];for(const H in U)h(U[H].object),delete U[H];delete A[D]}delete i[M.id]}function R(M){for(const A in i){const D=i[A];if(D[M.id]===void 0)continue;const U=D[M.id];for(const H in U)h(U[H].object),delete U[H];delete D[M.id]}}function T(){y(),o=!0,r!==s&&(r=s,l(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:y,dispose:L,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function _g(n,t,e){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function o(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),e.update(h,i,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,i,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*d[v];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function vg(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==rn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const T=R===Nr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Tn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Fn&&!T)}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:L,maxSamples:w}}function xg(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new In,a=new Vt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const S=r?0:i,x=S*4;let _=p.clippingState||null;c.value=_,_=h(g,d,x,f);for(let L=0;L!==x;++L)_[L]=e[L];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=f+v*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,_=f;x!==v;++x,_+=4)o.copy(u[x]).applyMatrix4(S,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Mg(n){let t=new WeakMap;function e(o,a){return a===cc?o.mapping=Bs:a===lc&&(o.mapping=ks),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===cc||a===lc)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Lp(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class sf extends tf{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Rs=4,uh=[.125,.215,.35,.446,.526,.582],Oi=20,Ta=new sf,fh=new Lt;let wa=null,Aa=0,Ra=0,Ca=!1;const Ui=(1+Math.sqrt(5))/2,vs=1/Ui,dh=[new P(-Ui,vs,0),new P(Ui,vs,0),new P(-vs,0,Ui),new P(vs,0,Ui),new P(0,Ui,-vs),new P(0,Ui,vs),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class Bc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){wa=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),Ra=this._renderer.getActiveMipmapLevel(),Ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(wa,Aa,Ra),this._renderer.xr.enabled=Ca,t.scissorTest=!1,oo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Bs||t.mapping===ks?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wa=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),Ra=this._renderer.getActiveMipmapLevel(),Ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:Nr,format:rn,colorSpace:js,depthBuffer:!1},s=ph(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ph(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yg(r)),this._blurMaterial=Sg(r,t,e)}return s}_compileMaterial(t){const e=new Kt(this._lodPlanes[0],t);this._renderer.compile(e,Ta)}_sceneToCubeUV(t,e,i,s){const a=new Je(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(fh),h.toneMapping=_i,h.autoClear=!1;const f=new xi({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1}),g=new Kt(new Si,f);let v=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,v=!0):(f.color.copy(fh),v=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):S===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const x=this._cubeSize;oo(s,S*x,p>2?x:0,x,x),h.setRenderTarget(s),v&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Bs||t.mapping===ks;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=gh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Kt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;oo(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,Ta)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=dh[(s-r-1)%dh.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Kt(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Oi-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Oi;m>Oi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Oi}`);const p=[];let S=0;for(let R=0;R<Oi;++R){const T=R/v,y=Math.exp(-T*T/2);p.push(y),R===0?S+=y:R<m&&(S+=2*y)}for(let R=0;R<p.length;R++)p[R]=p[R]/S;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-i;const _=this._sizeLods[s],L=3*_*(s>x-Rs?s-x+Rs:0),w=4*(this._cubeSize-_);oo(e,L,w,3*_,2*_),c.setRenderTarget(e),c.render(u,Ta)}}function yg(n){const t=[],e=[],i=[];let s=n;const r=n-Rs+1+uh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>n-Rs?c=uh[o-n+Rs-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,m=2,p=1,S=new Float32Array(v*g*f),x=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let w=0;w<f;w++){const R=w%3*2/3-1,T=w>2?0:-1,y=[R,T,0,R+2/3,T,0,R+2/3,T+1,0,R,T,0,R+2/3,T+1,0,R,T+1,0];S.set(y,v*g*w),x.set(d,m*g*w);const M=[w,w,w,w,w,w];_.set(M,p*g*w)}const L=new Be;L.setAttribute("position",new De(S,v)),L.setAttribute("uv",new De(x,m)),L.setAttribute("faceIndex",new De(_,p)),t.push(L),s>Rs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function ph(n,t,e){const i=new Wi(n,t,e);return i.texture.mapping=ko,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function oo(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Sg(n,t,e){const i=new Float32Array(Oi),s=new P(0,1,0);return new Mi({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:gl(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function mh(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gl(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function gh(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function gl(){return`

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
	`}function Eg(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===cc||c===lc,h=c===Bs||c===ks;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Bc(n)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Bc(n)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function bg(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&xr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Tg(n,t,e,i){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)t.update(d[g],n.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],n.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let v=0;if(f!==null){const S=f.array;v=f.version;for(let x=0,_=S.length;x<_;x+=3){const L=S[x+0],w=S[x+1],R=S[x+2];d.push(L,w,w,R,R,L)}}else if(g!==void 0){const S=g.array;v=g.version;for(let x=0,_=S.length/3-1;x<_;x+=3){const L=x+0,w=x+1,R=x+2;d.push(L,w,w,R,R,L)}}else return;const m=new(Yu(d)?$u:Ju)(d,1);m.version=v;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function wg(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){n.drawElements(i,f,r,d*o),e.update(f,i,1)}function l(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,d*o,g),e.update(f,i,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,i,1)}function u(d,f,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,v,0,g);let p=0;for(let S=0;S<g;S++)p+=f[S]*v[S];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Ag(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Rg(n,t,e){const i=new WeakMap,s=new de;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==u){let M=function(){T.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let L=a.attributes.position.count*_,w=1;L>t.maxTextureSize&&(w=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const R=new Float32Array(L*w*4*u),T=new ju(R,L,w,u);T.type=Fn,T.needsUpdate=!0;const y=_*4;for(let A=0;A<u;A++){const D=p[A],U=S[A],H=x[A],G=L*w*4*A;for(let F=0;F<D.count;F++){const X=F*y;g===!0&&(s.fromBufferAttribute(D,F),R[G+X+0]=s.x,R[G+X+1]=s.y,R[G+X+2]=s.z,R[G+X+3]=0),v===!0&&(s.fromBufferAttribute(U,F),R[G+X+4]=s.x,R[G+X+5]=s.y,R[G+X+6]=s.z,R[G+X+7]=0),m===!0&&(s.fromBufferAttribute(H,F),R[G+X+8]=s.x,R[G+X+9]=s.y,R[G+X+10]=s.z,R[G+X+11]=H.itemSize===4?s.w:1)}}d={count:u,texture:T,size:new it(L,w)},i.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Cg(n,t,e,i){let s=new WeakMap;function r(c){const l=i.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class rf extends ke{constructor(t,e,i,s,r,o,a,c,l,h=Us){if(h!==Us&&h!==Vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Us&&(i=Vi),i===void 0&&h===Vs&&(i=Gs),super(null,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:on,this.minFilter=c!==void 0?c:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const of=new ke,_h=new rf(1,1),af=new ju,cf=new mp,lf=new ef,vh=[],xh=[],Mh=new Float32Array(16),yh=new Float32Array(9),Sh=new Float32Array(4);function Js(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=vh[s];if(r===void 0&&(r=new Float32Array(s),vh[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Ne(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Fe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Vo(n,t){let e=xh[t];e===void 0&&(e=new Int32Array(t),xh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Pg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Lg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;n.uniform2fv(this.addr,t),Fe(e,t)}}function Dg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;n.uniform3fv(this.addr,t),Fe(e,t)}}function Ig(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;n.uniform4fv(this.addr,t),Fe(e,t)}}function Ug(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ne(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,i))return;Sh.set(i),n.uniformMatrix2fv(this.addr,!1,Sh),Fe(e,i)}}function Ng(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ne(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,i))return;yh.set(i),n.uniformMatrix3fv(this.addr,!1,yh),Fe(e,i)}}function Fg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ne(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,i))return;Mh.set(i),n.uniformMatrix4fv(this.addr,!1,Mh),Fe(e,i)}}function Og(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function zg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;n.uniform2iv(this.addr,t),Fe(e,t)}}function Bg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;n.uniform3iv(this.addr,t),Fe(e,t)}}function kg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;n.uniform4iv(this.addr,t),Fe(e,t)}}function Hg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Gg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;n.uniform2uiv(this.addr,t),Fe(e,t)}}function Vg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;n.uniform3uiv(this.addr,t),Fe(e,t)}}function Wg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;n.uniform4uiv(this.addr,t),Fe(e,t)}}function Xg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(_h.compareFunction=qu,r=_h):r=of,e.setTexture2D(t||r,s)}function qg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||cf,s)}function Yg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||lf,s)}function Zg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||af,s)}function jg(n){switch(n){case 5126:return Pg;case 35664:return Lg;case 35665:return Dg;case 35666:return Ig;case 35674:return Ug;case 35675:return Ng;case 35676:return Fg;case 5124:case 35670:return Og;case 35667:case 35671:return zg;case 35668:case 35672:return Bg;case 35669:case 35673:return kg;case 5125:return Hg;case 36294:return Gg;case 36295:return Vg;case 36296:return Wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Xg;case 35679:case 36299:case 36307:return qg;case 35680:case 36300:case 36308:case 36293:return Yg;case 36289:case 36303:case 36311:case 36292:return Zg}}function Kg(n,t){n.uniform1fv(this.addr,t)}function Jg(n,t){const e=Js(t,this.size,2);n.uniform2fv(this.addr,e)}function $g(n,t){const e=Js(t,this.size,3);n.uniform3fv(this.addr,e)}function Qg(n,t){const e=Js(t,this.size,4);n.uniform4fv(this.addr,e)}function t_(n,t){const e=Js(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function e_(n,t){const e=Js(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function n_(n,t){const e=Js(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function i_(n,t){n.uniform1iv(this.addr,t)}function s_(n,t){n.uniform2iv(this.addr,t)}function r_(n,t){n.uniform3iv(this.addr,t)}function o_(n,t){n.uniform4iv(this.addr,t)}function a_(n,t){n.uniform1uiv(this.addr,t)}function c_(n,t){n.uniform2uiv(this.addr,t)}function l_(n,t){n.uniform3uiv(this.addr,t)}function h_(n,t){n.uniform4uiv(this.addr,t)}function u_(n,t,e){const i=this.cache,s=t.length,r=Vo(e,s);Ne(i,r)||(n.uniform1iv(this.addr,r),Fe(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||of,r[o])}function f_(n,t,e){const i=this.cache,s=t.length,r=Vo(e,s);Ne(i,r)||(n.uniform1iv(this.addr,r),Fe(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||cf,r[o])}function d_(n,t,e){const i=this.cache,s=t.length,r=Vo(e,s);Ne(i,r)||(n.uniform1iv(this.addr,r),Fe(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||lf,r[o])}function p_(n,t,e){const i=this.cache,s=t.length,r=Vo(e,s);Ne(i,r)||(n.uniform1iv(this.addr,r),Fe(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||af,r[o])}function m_(n){switch(n){case 5126:return Kg;case 35664:return Jg;case 35665:return $g;case 35666:return Qg;case 35674:return t_;case 35675:return e_;case 35676:return n_;case 5124:case 35670:return i_;case 35667:case 35671:return s_;case 35668:case 35672:return r_;case 35669:case 35673:return o_;case 5125:return a_;case 36294:return c_;case 36295:return l_;case 36296:return h_;case 35678:case 36198:case 36298:case 36306:case 35682:return u_;case 35679:case 36299:case 36307:return f_;case 35680:case 36300:case 36308:case 36293:return d_;case 36289:case 36303:case 36311:case 36292:return p_}}class g_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=jg(e.type)}}class __{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=m_(e.type)}}class v_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Pa=/(\w+)(\])?(\[|\.)?/g;function Eh(n,t){n.seq.push(t),n.map[t.id]=t}function x_(n,t,e){const i=n.name,s=i.length;for(Pa.lastIndex=0;;){const r=Pa.exec(i),o=Pa.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Eh(e,l===void 0?new g_(a,n,t):new __(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new v_(a),Eh(e,u)),e=u}}}class wo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);x_(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function bh(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const M_=37297;let y_=0;function S_(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const Th=new Vt;function E_(n){te._getMatrix(Th,te.workingColorSpace,n);const t=`mat3( ${Th.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(n)){case Ho:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function wh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+S_(n.getShaderSource(t),o)}else return s}function b_(n,t){const e=E_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function T_(n,t){let e;switch(t){case Rd:e="Linear";break;case Cd:e="Reinhard";break;case Pd:e="Cineon";break;case Ld:e="ACESFilmic";break;case Id:e="AgX";break;case Nu:e="Neutral";break;case Dd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ao=new P;function w_(){te.getLuminanceCoefficients(ao);const n=ao.x.toFixed(4),t=ao.y.toFixed(4),e=ao.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function A_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mr).join(`
`)}function R_(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function C_(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Mr(n){return n!==""}function Ah(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Rh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const P_=/^[ \t]*#include +<([\w\d./]+)>/gm;function kc(n){return n.replace(P_,D_)}const L_=new Map;function D_(n,t){let e=Zt[t];if(e===void 0){const i=L_.get(t);if(i!==void 0)e=Zt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return kc(e)}const I_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ch(n){return n.replace(I_,U_)}function U_(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ph(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function N_(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===il?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===ld?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Yn&&(t="SHADOWMAP_TYPE_VSM"),t}function F_(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Bs:case ks:t="ENVMAP_TYPE_CUBE";break;case ko:t="ENVMAP_TYPE_CUBE_UV";break}return t}function O_(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ks:t="ENVMAP_MODE_REFRACTION";break}return t}function z_(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case sl:t="ENVMAP_BLENDING_MULTIPLY";break;case wd:t="ENVMAP_BLENDING_MIX";break;case Ad:t="ENVMAP_BLENDING_ADD";break}return t}function B_(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function k_(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=N_(e),l=F_(e),h=O_(e),u=z_(e),d=B_(e),f=A_(e),g=R_(r),v=s.createProgram();let m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Mr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Mr).join(`
`),p.length>0&&(p+=`
`)):(m=[Ph(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mr).join(`
`),p=[Ph(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==_i?"#define TONE_MAPPING":"",e.toneMapping!==_i?Zt.tonemapping_pars_fragment:"",e.toneMapping!==_i?T_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,b_("linearToOutputTexel",e.outputColorSpace),w_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Mr).join(`
`)),o=kc(o),o=Ah(o,e),o=Rh(o,e),a=kc(a),a=Ah(a,e),a=Rh(a,e),o=Ch(o),a=Ch(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Vl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Vl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=S+m+o,_=S+p+a,L=bh(s,s.VERTEX_SHADER,x),w=bh(s,s.FRAGMENT_SHADER,_);s.attachShader(v,L),s.attachShader(v,w),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(A){if(n.debug.checkShaderErrors){const D=s.getProgramInfoLog(v).trim(),U=s.getShaderInfoLog(L).trim(),H=s.getShaderInfoLog(w).trim();let G=!0,F=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,L,w);else{const X=wh(s,L,"vertex"),k=wh(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+D+`
`+X+`
`+k)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(U===""||H==="")&&(F=!1);F&&(A.diagnostics={runnable:G,programLog:D,vertexShader:{log:U,prefix:m},fragmentShader:{log:H,prefix:p}})}s.deleteShader(L),s.deleteShader(w),T=new wo(s,v),y=C_(s,v)}let T;this.getUniforms=function(){return T===void 0&&R(this),T};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,M_)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=y_++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=w,this}let H_=0;class G_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new V_(t),e.set(t,i)),i}}class V_{constructor(t){this.id=H_++,this.code=t,this.usedTimes=0}}function W_(n,t,e,i,s,r,o){const a=new pl,c=new G_,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,M,A,D,U){const H=D.fog,G=U.geometry,F=y.isMeshStandardMaterial?D.environment:null,X=(y.isMeshStandardMaterial?e:t).get(y.envMap||F),k=X&&X.mapping===ko?X.image.height:null,J=g[y.type];y.precision!==null&&(f=s.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const st=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,dt=st!==void 0?st.length:0;let wt=0;G.morphAttributes.position!==void 0&&(wt=1),G.morphAttributes.normal!==void 0&&(wt=2),G.morphAttributes.color!==void 0&&(wt=3);let Ht,q,Q,tt;if(J){const Yt=Un[J];Ht=Yt.vertexShader,q=Yt.fragmentShader}else Ht=y.vertexShader,q=y.fragmentShader,c.update(y),Q=c.getVertexShaderID(y),tt=c.getFragmentShaderID(y);const et=n.getRenderTarget(),ht=n.state.buffers.depth.getReversed(),vt=U.isInstancedMesh===!0,It=U.isBatchedMesh===!0,pt=!!y.map,ft=!!y.matcap,Ut=!!X,I=!!y.aoMap,qt=!!y.lightMap,bt=!!y.bumpMap,Tt=!!y.normalMap,_t=!!y.displacementMap,Wt=!!y.emissiveMap,yt=!!y.metalnessMap,C=!!y.roughnessMap,E=y.anisotropy>0,B=y.clearcoat>0,K=y.dispersion>0,j=y.iridescence>0,Z=y.sheen>0,xt=y.transmission>0,rt=E&&!!y.anisotropyMap,ot=B&&!!y.clearcoatMap,Nt=B&&!!y.clearcoatNormalMap,nt=B&&!!y.clearcoatRoughnessMap,St=j&&!!y.iridescenceMap,Ft=j&&!!y.iridescenceThicknessMap,zt=Z&&!!y.sheenColorMap,Et=Z&&!!y.sheenRoughnessMap,jt=!!y.specularMap,Gt=!!y.specularColorMap,ae=!!y.specularIntensityMap,N=xt&&!!y.transmissionMap,mt=xt&&!!y.thicknessMap,Y=!!y.gradientMap,$=!!y.alphaMap,ut=y.alphaTest>0,lt=!!y.alphaHash,ct=!!y.extensions;let $t=_i;y.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&($t=n.toneMapping);const ie={shaderID:J,shaderType:y.type,shaderName:y.name,vertexShader:Ht,fragmentShader:q,defines:y.defines,customVertexShaderID:Q,customFragmentShaderID:tt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:It,batchingColor:It&&U._colorsTexture!==null,instancing:vt,instancingColor:vt&&U.instanceColor!==null,instancingMorph:vt&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:et===null?n.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:js,alphaToCoverage:!!y.alphaToCoverage,map:pt,matcap:ft,envMap:Ut,envMapMode:Ut&&X.mapping,envMapCubeUVHeight:k,aoMap:I,lightMap:qt,bumpMap:bt,normalMap:Tt,displacementMap:d&&_t,emissiveMap:Wt,normalMapObjectSpace:Tt&&y.normalMapType===Od,normalMapTangentSpace:Tt&&y.normalMapType===fl,metalnessMap:yt,roughnessMap:C,anisotropy:E,anisotropyMap:rt,clearcoat:B,clearcoatMap:ot,clearcoatNormalMap:Nt,clearcoatRoughnessMap:nt,dispersion:K,iridescence:j,iridescenceMap:St,iridescenceThicknessMap:Ft,sheen:Z,sheenColorMap:zt,sheenRoughnessMap:Et,specularMap:jt,specularColorMap:Gt,specularIntensityMap:ae,transmission:xt,transmissionMap:N,thicknessMap:mt,gradientMap:Y,opaque:y.transparent===!1&&y.blending===Is&&y.alphaToCoverage===!1,alphaMap:$,alphaTest:ut,alphaHash:lt,combine:y.combine,mapUv:pt&&v(y.map.channel),aoMapUv:I&&v(y.aoMap.channel),lightMapUv:qt&&v(y.lightMap.channel),bumpMapUv:bt&&v(y.bumpMap.channel),normalMapUv:Tt&&v(y.normalMap.channel),displacementMapUv:_t&&v(y.displacementMap.channel),emissiveMapUv:Wt&&v(y.emissiveMap.channel),metalnessMapUv:yt&&v(y.metalnessMap.channel),roughnessMapUv:C&&v(y.roughnessMap.channel),anisotropyMapUv:rt&&v(y.anisotropyMap.channel),clearcoatMapUv:ot&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:Et&&v(y.sheenRoughnessMap.channel),specularMapUv:jt&&v(y.specularMap.channel),specularColorMapUv:Gt&&v(y.specularColorMap.channel),specularIntensityMapUv:ae&&v(y.specularIntensityMap.channel),transmissionMapUv:N&&v(y.transmissionMap.channel),thicknessMapUv:mt&&v(y.thicknessMap.channel),alphaMapUv:$&&v(y.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Tt||E),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!G.attributes.uv&&(pt||$),fog:!!H,useFog:y.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ht,skinning:U.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:wt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:$t,decodeVideoTexture:pt&&y.map.isVideoTexture===!0&&te.getTransfer(y.map.colorSpace)===he,decodeVideoTextureEmissive:Wt&&y.emissiveMap.isVideoTexture===!0&&te.getTransfer(y.emissiveMap.colorSpace)===he,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Zn,flipSided:y.side===Ye,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ct&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&y.extensions.multiDraw===!0||It)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ie.vertexUv1s=l.has(1),ie.vertexUv2s=l.has(2),ie.vertexUv3s=l.has(3),l.clear(),ie}function p(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const A in y.defines)M.push(A),M.push(y.defines[A]);return y.isRawShaderMaterial===!1&&(S(M,y),x(M,y),M.push(n.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function S(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function x(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),y.push(a.mask)}function _(y){const M=g[y.type];let A;if(M){const D=Un[M];A=Ap.clone(D.uniforms)}else A=y.uniforms;return A}function L(y,M){let A;for(let D=0,U=h.length;D<U;D++){const H=h[D];if(H.cacheKey===M){A=H,++A.usedTimes;break}}return A===void 0&&(A=new k_(n,M,y,r),h.push(A)),A}function w(y){if(--y.usedTimes===0){const M=h.indexOf(y);h[M]=h[h.length-1],h.pop(),y.destroy()}}function R(y){c.remove(y)}function T(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:L,releaseProgram:w,releaseShaderCache:R,programs:h,dispose:T}}function X_(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function q_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Lh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Dh(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,d,f,g,v,m){let p=n[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},n[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),t++,p}function a(u,d,f,g,v,m){const p=o(u,d,f,g,v,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,g,v,m){const p=o(u,d,f,g,v,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||q_),i.length>1&&i.sort(d||Lh),s.length>1&&s.sort(d||Lh)}function h(){for(let u=t,d=n.length;u<d;u++){const f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Y_(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new Dh,n.set(i,[o])):s>=r.length?(o=new Dh,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Z_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Lt};break;case"SpotLight":e={position:new P,direction:new P,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new P,halfWidth:new P,halfHeight:new P};break}return n[t.id]=e,e}}}function j_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let K_=0;function J_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function $_(n){const t=new Z_,e=j_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new P);const s=new P,r=new ee,o=new ee;function a(l){let h=0,u=0,d=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,S=0,x=0,_=0,L=0,w=0,R=0;l.sort(J_);for(let y=0,M=l.length;y<M;y++){const A=l[y],D=A.color,U=A.intensity,H=A.distance,G=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=D.r*U,u+=D.g*U,d+=D.b*U;else if(A.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(A.sh.coefficients[F],U);R++}else if(A.isDirectionalLight){const F=t.get(A);if(F.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const X=A.shadow,k=e.get(A);k.shadowIntensity=X.intensity,k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,i.directionalShadow[f]=k,i.directionalShadowMap[f]=G,i.directionalShadowMatrix[f]=A.shadow.matrix,S++}i.directional[f]=F,f++}else if(A.isSpotLight){const F=t.get(A);F.position.setFromMatrixPosition(A.matrixWorld),F.color.copy(D).multiplyScalar(U),F.distance=H,F.coneCos=Math.cos(A.angle),F.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),F.decay=A.decay,i.spot[v]=F;const X=A.shadow;if(A.map&&(i.spotLightMap[L]=A.map,L++,X.updateMatrices(A),A.castShadow&&w++),i.spotLightMatrix[v]=X.matrix,A.castShadow){const k=e.get(A);k.shadowIntensity=X.intensity,k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,i.spotShadow[v]=k,i.spotShadowMap[v]=G,_++}v++}else if(A.isRectAreaLight){const F=t.get(A);F.color.copy(D).multiplyScalar(U),F.halfWidth.set(A.width*.5,0,0),F.halfHeight.set(0,A.height*.5,0),i.rectArea[m]=F,m++}else if(A.isPointLight){const F=t.get(A);if(F.color.copy(A.color).multiplyScalar(A.intensity),F.distance=A.distance,F.decay=A.decay,A.castShadow){const X=A.shadow,k=e.get(A);k.shadowIntensity=X.intensity,k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,k.shadowCameraNear=X.camera.near,k.shadowCameraFar=X.camera.far,i.pointShadow[g]=k,i.pointShadowMap[g]=G,i.pointShadowMatrix[g]=A.shadow.matrix,x++}i.point[g]=F,g++}else if(A.isHemisphereLight){const F=t.get(A);F.skyColor.copy(A.color).multiplyScalar(U),F.groundColor.copy(A.groundColor).multiplyScalar(U),i.hemi[p]=F,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=gt.LTC_FLOAT_1,i.rectAreaLTC2=gt.LTC_FLOAT_2):(i.rectAreaLTC1=gt.LTC_HALF_1,i.rectAreaLTC2=gt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const T=i.hash;(T.directionalLength!==f||T.pointLength!==g||T.spotLength!==v||T.rectAreaLength!==m||T.hemiLength!==p||T.numDirectionalShadows!==S||T.numPointShadows!==x||T.numSpotShadows!==_||T.numSpotMaps!==L||T.numLightProbes!==R)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=_+L-w,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=R,T.directionalLength=f,T.pointLength=g,T.spotLength=v,T.rectAreaLength=m,T.hemiLength=p,T.numDirectionalShadows=S,T.numPointShadows=x,T.numSpotShadows=_,T.numSpotMaps=L,T.numLightProbes=R,i.version=K_++)}function c(l,h){let u=0,d=0,f=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,S=l.length;p<S;p++){const x=l[p];if(x.isDirectionalLight){const _=i.directional[u];_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(x.isSpotLight){const _=i.spot[f];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const _=i.rectArea[g];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const _=i.point[d];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const _=i.hemi[v];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:i}}function Ih(n){const t=new $_(n),e=[],i=[];function s(h){l.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Q_(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Ih(n),t.set(s,[a])):r>=o.length?(a=new Ih(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class tv extends Ji{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Nd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ev extends Ji{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const nv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iv=`uniform sampler2D shadow_pass;
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
}`;function sv(n,t,e){let i=new ml;const s=new it,r=new it,o=new de,a=new tv({depthPacking:Fd}),c=new ev,l={},h=e.maxTextureSize,u={[vi]:Ye,[Ye]:vi,[Zn]:Zn},d=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:nv,fragmentShader:iv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Be;g.setAttribute("position",new De(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Kt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=il;let p=this.type;this.render=function(w,R,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const y=n.getRenderTarget(),M=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),D=n.state;D.setBlending(gi),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const U=p!==Yn&&this.type===Yn,H=p===Yn&&this.type!==Yn;for(let G=0,F=w.length;G<F;G++){const X=w[G],k=X.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const J=k.getFrameExtents();if(s.multiply(J),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/J.x),s.x=r.x*J.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/J.y),s.y=r.y*J.y,k.mapSize.y=r.y)),k.map===null||U===!0||H===!0){const dt=this.type!==Yn?{minFilter:on,magFilter:on}:{};k.map!==null&&k.map.dispose(),k.map=new Wi(s.x,s.y,dt),k.map.texture.name=X.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const st=k.getViewportCount();for(let dt=0;dt<st;dt++){const wt=k.getViewport(dt);o.set(r.x*wt.x,r.y*wt.y,r.x*wt.z,r.y*wt.w),D.viewport(o),k.updateMatrices(X,dt),i=k.getFrustum(),_(R,T,k.camera,X,this.type)}k.isPointLightShadow!==!0&&this.type===Yn&&S(k,T),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(y,M,A)};function S(w,R){const T=t.update(v);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Wi(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(R,null,T,d,v,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(R,null,T,f,v,null)}function x(w,R,T,y){let M=null;const A=T.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(A!==void 0)M=A;else if(M=T.isPointLight===!0?c:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const D=M.uuid,U=R.uuid;let H=l[D];H===void 0&&(H={},l[D]=H);let G=H[U];G===void 0&&(G=M.clone(),H[U]=G,R.addEventListener("dispose",L)),M=G}if(M.visible=R.visible,M.wireframe=R.wireframe,y===Yn?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,T.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const D=n.properties.get(M);D.light=T}return M}function _(w,R,T,y,M){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Yn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,w.matrixWorld);const U=t.update(w),H=w.material;if(Array.isArray(H)){const G=U.groups;for(let F=0,X=G.length;F<X;F++){const k=G[F],J=H[k.materialIndex];if(J&&J.visible){const st=x(w,J,y,M);w.onBeforeShadow(n,w,R,T,U,st,k),n.renderBufferDirect(T,null,U,st,w,k),w.onAfterShadow(n,w,R,T,U,st,k)}}}else if(H.visible){const G=x(w,H,y,M);w.onBeforeShadow(n,w,R,T,U,G,null),n.renderBufferDirect(T,null,U,G,w,null),w.onAfterShadow(n,w,R,T,U,G,null)}}const D=w.children;for(let U=0,H=D.length;U<H;U++)_(D[U],R,T,y,M)}function L(w){w.target.removeEventListener("dispose",L);for(const T in l){const y=l[T],M=w.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const rv={[ec]:nc,[ic]:oc,[sc]:ac,[zs]:rc,[nc]:ec,[oc]:ic,[ac]:sc,[rc]:zs};function ov(n,t){function e(){let N=!1;const mt=new de;let Y=null;const $=new de(0,0,0,0);return{setMask:function(ut){Y!==ut&&!N&&(n.colorMask(ut,ut,ut,ut),Y=ut)},setLocked:function(ut){N=ut},setClear:function(ut,lt,ct,$t,ie){ie===!0&&(ut*=$t,lt*=$t,ct*=$t),mt.set(ut,lt,ct,$t),$.equals(mt)===!1&&(n.clearColor(ut,lt,ct,$t),$.copy(mt))},reset:function(){N=!1,Y=null,$.set(-1,0,0,0)}}}function i(){let N=!1,mt=!1,Y=null,$=null,ut=null;return{setReversed:function(lt){if(mt!==lt){const ct=t.get("EXT_clip_control");mt?ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.ZERO_TO_ONE_EXT):ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.NEGATIVE_ONE_TO_ONE_EXT);const $t=ut;ut=null,this.setClear($t)}mt=lt},getReversed:function(){return mt},setTest:function(lt){lt?et(n.DEPTH_TEST):ht(n.DEPTH_TEST)},setMask:function(lt){Y!==lt&&!N&&(n.depthMask(lt),Y=lt)},setFunc:function(lt){if(mt&&(lt=rv[lt]),$!==lt){switch(lt){case ec:n.depthFunc(n.NEVER);break;case nc:n.depthFunc(n.ALWAYS);break;case ic:n.depthFunc(n.LESS);break;case zs:n.depthFunc(n.LEQUAL);break;case sc:n.depthFunc(n.EQUAL);break;case rc:n.depthFunc(n.GEQUAL);break;case oc:n.depthFunc(n.GREATER);break;case ac:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}$=lt}},setLocked:function(lt){N=lt},setClear:function(lt){ut!==lt&&(mt&&(lt=1-lt),n.clearDepth(lt),ut=lt)},reset:function(){N=!1,Y=null,$=null,ut=null,mt=!1}}}function s(){let N=!1,mt=null,Y=null,$=null,ut=null,lt=null,ct=null,$t=null,ie=null;return{setTest:function(Yt){N||(Yt?et(n.STENCIL_TEST):ht(n.STENCIL_TEST))},setMask:function(Yt){mt!==Yt&&!N&&(n.stencilMask(Yt),mt=Yt)},setFunc:function(Yt,Ae,Oe){(Y!==Yt||$!==Ae||ut!==Oe)&&(n.stencilFunc(Yt,Ae,Oe),Y=Yt,$=Ae,ut=Oe)},setOp:function(Yt,Ae,Oe){(lt!==Yt||ct!==Ae||$t!==Oe)&&(n.stencilOp(Yt,Ae,Oe),lt=Yt,ct=Ae,$t=Oe)},setLocked:function(Yt){N=Yt},setClear:function(Yt){ie!==Yt&&(n.clearStencil(Yt),ie=Yt)},reset:function(){N=!1,mt=null,Y=null,$=null,ut=null,lt=null,ct=null,$t=null,ie=null}}}const r=new e,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,S=null,x=null,_=null,L=null,w=null,R=new Lt(0,0,0),T=0,y=!1,M=null,A=null,D=null,U=null,H=null;const G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,X=0;const k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(k)[1]),F=X>=1):k.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),F=X>=2);let J=null,st={};const dt=n.getParameter(n.SCISSOR_BOX),wt=n.getParameter(n.VIEWPORT),Ht=new de().fromArray(dt),q=new de().fromArray(wt);function Q(N,mt,Y,$){const ut=new Uint8Array(4),lt=n.createTexture();n.bindTexture(N,lt),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ct=0;ct<Y;ct++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(mt,0,n.RGBA,1,1,$,0,n.RGBA,n.UNSIGNED_BYTE,ut):n.texImage2D(mt+ct,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ut);return lt}const tt={};tt[n.TEXTURE_2D]=Q(n.TEXTURE_2D,n.TEXTURE_2D,1),tt[n.TEXTURE_CUBE_MAP]=Q(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[n.TEXTURE_2D_ARRAY]=Q(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),tt[n.TEXTURE_3D]=Q(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),et(n.DEPTH_TEST),o.setFunc(zs),bt(!1),Tt(Bl),et(n.CULL_FACE),I(gi);function et(N){h[N]!==!0&&(n.enable(N),h[N]=!0)}function ht(N){h[N]!==!1&&(n.disable(N),h[N]=!1)}function vt(N,mt){return u[N]!==mt?(n.bindFramebuffer(N,mt),u[N]=mt,N===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=mt),N===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=mt),!0):!1}function It(N,mt){let Y=f,$=!1;if(N){Y=d.get(mt),Y===void 0&&(Y=[],d.set(mt,Y));const ut=N.textures;if(Y.length!==ut.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let lt=0,ct=ut.length;lt<ct;lt++)Y[lt]=n.COLOR_ATTACHMENT0+lt;Y.length=ut.length,$=!0}}else Y[0]!==n.BACK&&(Y[0]=n.BACK,$=!0);$&&n.drawBuffers(Y)}function pt(N){return g!==N?(n.useProgram(N),g=N,!0):!1}const ft={[Fi]:n.FUNC_ADD,[hd]:n.FUNC_SUBTRACT,[ud]:n.FUNC_REVERSE_SUBTRACT};ft[fd]=n.MIN,ft[dd]=n.MAX;const Ut={[pd]:n.ZERO,[Qa]:n.ONE,[md]:n.SRC_COLOR,[tc]:n.SRC_ALPHA,[yd]:n.SRC_ALPHA_SATURATE,[xd]:n.DST_COLOR,[_d]:n.DST_ALPHA,[gd]:n.ONE_MINUS_SRC_COLOR,[wr]:n.ONE_MINUS_SRC_ALPHA,[Md]:n.ONE_MINUS_DST_COLOR,[vd]:n.ONE_MINUS_DST_ALPHA,[Sd]:n.CONSTANT_COLOR,[Ed]:n.ONE_MINUS_CONSTANT_COLOR,[bd]:n.CONSTANT_ALPHA,[Td]:n.ONE_MINUS_CONSTANT_ALPHA};function I(N,mt,Y,$,ut,lt,ct,$t,ie,Yt){if(N===gi){v===!0&&(ht(n.BLEND),v=!1);return}if(v===!1&&(et(n.BLEND),v=!0),N!==Uu){if(N!==m||Yt!==y){if((p!==Fi||_!==Fi)&&(n.blendEquation(n.FUNC_ADD),p=Fi,_=Fi),Yt)switch(N){case Is:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $a:n.blendFunc(n.ONE,n.ONE);break;case kl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Hl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Is:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $a:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case kl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Hl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}S=null,x=null,L=null,w=null,R.set(0,0,0),T=0,m=N,y=Yt}return}ut=ut||mt,lt=lt||Y,ct=ct||$,(mt!==p||ut!==_)&&(n.blendEquationSeparate(ft[mt],ft[ut]),p=mt,_=ut),(Y!==S||$!==x||lt!==L||ct!==w)&&(n.blendFuncSeparate(Ut[Y],Ut[$],Ut[lt],Ut[ct]),S=Y,x=$,L=lt,w=ct),($t.equals(R)===!1||ie!==T)&&(n.blendColor($t.r,$t.g,$t.b,ie),R.copy($t),T=ie),m=N,y=!1}function qt(N,mt){N.side===Zn?ht(n.CULL_FACE):et(n.CULL_FACE);let Y=N.side===Ye;mt&&(Y=!Y),bt(Y),N.blending===Is&&N.transparent===!1?I(gi):I(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const $=N.stencilWrite;a.setTest($),$&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Wt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?et(n.SAMPLE_ALPHA_TO_COVERAGE):ht(n.SAMPLE_ALPHA_TO_COVERAGE)}function bt(N){M!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),M=N)}function Tt(N){N!==ad?(et(n.CULL_FACE),N!==A&&(N===Bl?n.cullFace(n.BACK):N===cd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ht(n.CULL_FACE),A=N}function _t(N){N!==D&&(F&&n.lineWidth(N),D=N)}function Wt(N,mt,Y){N?(et(n.POLYGON_OFFSET_FILL),(U!==mt||H!==Y)&&(n.polygonOffset(mt,Y),U=mt,H=Y)):ht(n.POLYGON_OFFSET_FILL)}function yt(N){N?et(n.SCISSOR_TEST):ht(n.SCISSOR_TEST)}function C(N){N===void 0&&(N=n.TEXTURE0+G-1),J!==N&&(n.activeTexture(N),J=N)}function E(N,mt,Y){Y===void 0&&(J===null?Y=n.TEXTURE0+G-1:Y=J);let $=st[Y];$===void 0&&($={type:void 0,texture:void 0},st[Y]=$),($.type!==N||$.texture!==mt)&&(J!==Y&&(n.activeTexture(Y),J=Y),n.bindTexture(N,mt||tt[N]),$.type=N,$.texture=mt)}function B(){const N=st[J];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function K(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function j(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xt(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function rt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ot(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Nt(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function nt(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function St(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ft(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function zt(N){Ht.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),Ht.copy(N))}function Et(N){q.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),q.copy(N))}function jt(N,mt){let Y=l.get(mt);Y===void 0&&(Y=new WeakMap,l.set(mt,Y));let $=Y.get(N);$===void 0&&($=n.getUniformBlockIndex(mt,N.name),Y.set(N,$))}function Gt(N,mt){const $=l.get(mt).get(N);c.get(mt)!==$&&(n.uniformBlockBinding(mt,$,N.__bindingPointIndex),c.set(mt,$))}function ae(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},J=null,st={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,S=null,x=null,_=null,L=null,w=null,R=new Lt(0,0,0),T=0,y=!1,M=null,A=null,D=null,U=null,H=null,Ht.set(0,0,n.canvas.width,n.canvas.height),q.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:et,disable:ht,bindFramebuffer:vt,drawBuffers:It,useProgram:pt,setBlending:I,setMaterial:qt,setFlipSided:bt,setCullFace:Tt,setLineWidth:_t,setPolygonOffset:Wt,setScissorTest:yt,activeTexture:C,bindTexture:E,unbindTexture:B,compressedTexImage2D:K,compressedTexImage3D:j,texImage2D:St,texImage3D:Ft,updateUBOMapping:jt,uniformBlockBinding:Gt,texStorage2D:Nt,texStorage3D:nt,texSubImage2D:Z,texSubImage3D:xt,compressedTexSubImage2D:rt,compressedTexSubImage3D:ot,scissor:zt,viewport:Et,reset:ae}}function Uh(n,t,e,i){const s=av(i);switch(e){case ku:return n*t;case Gu:return n*t;case Vu:return n*t*2;case cl:return n*t/s.components*s.byteLength;case ll:return n*t/s.components*s.byteLength;case Wu:return n*t*2/s.components*s.byteLength;case hl:return n*t*2/s.components*s.byteLength;case Hu:return n*t*3/s.components*s.byteLength;case rn:return n*t*4/s.components*s.byteLength;case ul:return n*t*4/s.components*s.byteLength;case yo:case So:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Eo:case bo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case fc:case pc:return Math.max(n,16)*Math.max(t,8)/4;case uc:case dc:return Math.max(n,8)*Math.max(t,8)/2;case mc:case gc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case _c:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case vc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case xc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Mc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case yc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Sc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Ec:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case bc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Tc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case wc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ac:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Rc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Cc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Pc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Lc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case To:case Dc:case Ic:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Xu:case Uc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Nc:case Fc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function av(n){switch(n){case Tn:case Ou:return{byteLength:1,components:1};case Ar:case zu:case Nr:return{byteLength:2,components:1};case ol:case al:return{byteLength:2,components:4};case Vi:case rl:case Fn:return{byteLength:4,components:1};case Bu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function cv(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new it,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,E){return f?new OffscreenCanvas(C,E):Rr("canvas")}function v(C,E,B){let K=1;const j=yt(C);if((j.width>B||j.height>B)&&(K=B/Math.max(j.width,j.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Z=Math.floor(K*j.width),xt=Math.floor(K*j.height);u===void 0&&(u=g(Z,xt));const rt=E?g(Z,xt):u;return rt.width=Z,rt.height=xt,rt.getContext("2d").drawImage(C,0,0,Z,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+Z+"x"+xt+")."),rt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){n.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(C,E,B,K,j=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Z=E;if(E===n.RED&&(B===n.FLOAT&&(Z=n.R32F),B===n.HALF_FLOAT&&(Z=n.R16F),B===n.UNSIGNED_BYTE&&(Z=n.R8)),E===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.R8UI),B===n.UNSIGNED_SHORT&&(Z=n.R16UI),B===n.UNSIGNED_INT&&(Z=n.R32UI),B===n.BYTE&&(Z=n.R8I),B===n.SHORT&&(Z=n.R16I),B===n.INT&&(Z=n.R32I)),E===n.RG&&(B===n.FLOAT&&(Z=n.RG32F),B===n.HALF_FLOAT&&(Z=n.RG16F),B===n.UNSIGNED_BYTE&&(Z=n.RG8)),E===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.RG8UI),B===n.UNSIGNED_SHORT&&(Z=n.RG16UI),B===n.UNSIGNED_INT&&(Z=n.RG32UI),B===n.BYTE&&(Z=n.RG8I),B===n.SHORT&&(Z=n.RG16I),B===n.INT&&(Z=n.RG32I)),E===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),B===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),B===n.UNSIGNED_INT&&(Z=n.RGB32UI),B===n.BYTE&&(Z=n.RGB8I),B===n.SHORT&&(Z=n.RGB16I),B===n.INT&&(Z=n.RGB32I)),E===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),B===n.UNSIGNED_INT&&(Z=n.RGBA32UI),B===n.BYTE&&(Z=n.RGBA8I),B===n.SHORT&&(Z=n.RGBA16I),B===n.INT&&(Z=n.RGBA32I)),E===n.RGB&&B===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),E===n.RGBA){const xt=j?Ho:te.getTransfer(K);B===n.FLOAT&&(Z=n.RGBA32F),B===n.HALF_FLOAT&&(Z=n.RGBA16F),B===n.UNSIGNED_BYTE&&(Z=xt===he?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function _(C,E){let B;return C?E===null||E===Vi||E===Gs?B=n.DEPTH24_STENCIL8:E===Fn?B=n.DEPTH32F_STENCIL8:E===Ar&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Vi||E===Gs?B=n.DEPTH_COMPONENT24:E===Fn?B=n.DEPTH_COMPONENT32F:E===Ar&&(B=n.DEPTH_COMPONENT16),B}function L(C,E){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==on&&C.minFilter!==sn?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function w(C){const E=C.target;E.removeEventListener("dispose",w),T(E),E.isVideoTexture&&h.delete(E)}function R(C){const E=C.target;E.removeEventListener("dispose",R),M(E)}function T(C){const E=i.get(C);if(E.__webglInit===void 0)return;const B=C.source,K=d.get(B);if(K){const j=K[E.__cacheKey];j.usedTimes--,j.usedTimes===0&&y(C),Object.keys(K).length===0&&d.delete(B)}i.remove(C)}function y(C){const E=i.get(C);n.deleteTexture(E.__webglTexture);const B=C.source,K=d.get(B);delete K[E.__cacheKey],o.memory.textures--}function M(C){const E=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(E.__webglFramebuffer[K]))for(let j=0;j<E.__webglFramebuffer[K].length;j++)n.deleteFramebuffer(E.__webglFramebuffer[K][j]);else n.deleteFramebuffer(E.__webglFramebuffer[K]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[K])}else{if(Array.isArray(E.__webglFramebuffer))for(let K=0;K<E.__webglFramebuffer.length;K++)n.deleteFramebuffer(E.__webglFramebuffer[K]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let K=0;K<E.__webglColorRenderbuffer.length;K++)E.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[K]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const B=C.textures;for(let K=0,j=B.length;K<j;K++){const Z=i.get(B[K]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(B[K])}i.remove(C)}let A=0;function D(){A=0}function U(){const C=A;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),A+=1,C}function H(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function G(C,E){const B=i.get(C);if(C.isVideoTexture&&_t(C),C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){const K=C.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(B,C,E);return}}e.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+E)}function F(C,E){const B=i.get(C);if(C.version>0&&B.__version!==C.version){q(B,C,E);return}e.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+E)}function X(C,E){const B=i.get(C);if(C.version>0&&B.__version!==C.version){q(B,C,E);return}e.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+E)}function k(C,E){const B=i.get(C);if(C.version>0&&B.__version!==C.version){Q(B,C,E);return}e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+E)}const J={[Hs]:n.REPEAT,[Bi]:n.CLAMP_TO_EDGE,[hc]:n.MIRRORED_REPEAT},st={[on]:n.NEAREST,[Ud]:n.NEAREST_MIPMAP_NEAREST,[Hr]:n.NEAREST_MIPMAP_LINEAR,[sn]:n.LINEAR,[sa]:n.LINEAR_MIPMAP_NEAREST,[Nn]:n.LINEAR_MIPMAP_LINEAR},dt={[zd]:n.NEVER,[Wd]:n.ALWAYS,[Bd]:n.LESS,[qu]:n.LEQUAL,[kd]:n.EQUAL,[Vd]:n.GEQUAL,[Hd]:n.GREATER,[Gd]:n.NOTEQUAL};function wt(C,E){if(E.type===Fn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===sn||E.magFilter===sa||E.magFilter===Hr||E.magFilter===Nn||E.minFilter===sn||E.minFilter===sa||E.minFilter===Hr||E.minFilter===Nn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,J[E.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,J[E.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,J[E.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,st[E.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,st[E.minFilter]),E.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,dt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===on||E.minFilter!==Hr&&E.minFilter!==Nn||E.type===Fn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Ht(C,E){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",w));const K=E.source;let j=d.get(K);j===void 0&&(j={},d.set(K,j));const Z=H(E);if(Z!==C.__cacheKey){j[Z]===void 0&&(j[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),j[Z].usedTimes++;const xt=j[C.__cacheKey];xt!==void 0&&(j[C.__cacheKey].usedTimes--,xt.usedTimes===0&&y(E)),C.__cacheKey=Z,C.__webglTexture=j[Z].texture}return B}function q(C,E,B){let K=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(K=n.TEXTURE_3D);const j=Ht(C,E),Z=E.source;e.bindTexture(K,C.__webglTexture,n.TEXTURE0+B);const xt=i.get(Z);if(Z.version!==xt.__version||j===!0){e.activeTexture(n.TEXTURE0+B);const rt=te.getPrimaries(te.workingColorSpace),ot=E.colorSpace===pi?null:te.getPrimaries(E.colorSpace),Nt=E.colorSpace===pi||rt===ot?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);let nt=v(E.image,!1,s.maxTextureSize);nt=Wt(E,nt);const St=r.convert(E.format,E.colorSpace),Ft=r.convert(E.type);let zt=x(E.internalFormat,St,Ft,E.colorSpace,E.isVideoTexture);wt(K,E);let Et;const jt=E.mipmaps,Gt=E.isVideoTexture!==!0,ae=xt.__version===void 0||j===!0,N=Z.dataReady,mt=L(E,nt);if(E.isDepthTexture)zt=_(E.format===Vs,E.type),ae&&(Gt?e.texStorage2D(n.TEXTURE_2D,1,zt,nt.width,nt.height):e.texImage2D(n.TEXTURE_2D,0,zt,nt.width,nt.height,0,St,Ft,null));else if(E.isDataTexture)if(jt.length>0){Gt&&ae&&e.texStorage2D(n.TEXTURE_2D,mt,zt,jt[0].width,jt[0].height);for(let Y=0,$=jt.length;Y<$;Y++)Et=jt[Y],Gt?N&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,Et.width,Et.height,St,Ft,Et.data):e.texImage2D(n.TEXTURE_2D,Y,zt,Et.width,Et.height,0,St,Ft,Et.data);E.generateMipmaps=!1}else Gt?(ae&&e.texStorage2D(n.TEXTURE_2D,mt,zt,nt.width,nt.height),N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,nt.width,nt.height,St,Ft,nt.data)):e.texImage2D(n.TEXTURE_2D,0,zt,nt.width,nt.height,0,St,Ft,nt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Gt&&ae&&e.texStorage3D(n.TEXTURE_2D_ARRAY,mt,zt,jt[0].width,jt[0].height,nt.depth);for(let Y=0,$=jt.length;Y<$;Y++)if(Et=jt[Y],E.format!==rn)if(St!==null)if(Gt){if(N)if(E.layerUpdates.size>0){const ut=Uh(Et.width,Et.height,E.format,E.type);for(const lt of E.layerUpdates){const ct=Et.data.subarray(lt*ut/Et.data.BYTES_PER_ELEMENT,(lt+1)*ut/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,lt,Et.width,Et.height,1,St,ct)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,Et.width,Et.height,nt.depth,St,Et.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Y,zt,Et.width,Et.height,nt.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?N&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,Et.width,Et.height,nt.depth,St,Ft,Et.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Y,zt,Et.width,Et.height,nt.depth,0,St,Ft,Et.data)}else{Gt&&ae&&e.texStorage2D(n.TEXTURE_2D,mt,zt,jt[0].width,jt[0].height);for(let Y=0,$=jt.length;Y<$;Y++)Et=jt[Y],E.format!==rn?St!==null?Gt?N&&e.compressedTexSubImage2D(n.TEXTURE_2D,Y,0,0,Et.width,Et.height,St,Et.data):e.compressedTexImage2D(n.TEXTURE_2D,Y,zt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?N&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,Et.width,Et.height,St,Ft,Et.data):e.texImage2D(n.TEXTURE_2D,Y,zt,Et.width,Et.height,0,St,Ft,Et.data)}else if(E.isDataArrayTexture)if(Gt){if(ae&&e.texStorage3D(n.TEXTURE_2D_ARRAY,mt,zt,nt.width,nt.height,nt.depth),N)if(E.layerUpdates.size>0){const Y=Uh(nt.width,nt.height,E.format,E.type);for(const $ of E.layerUpdates){const ut=nt.data.subarray($*Y/nt.data.BYTES_PER_ELEMENT,($+1)*Y/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,$,nt.width,nt.height,1,St,Ft,ut)}E.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,St,Ft,nt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,zt,nt.width,nt.height,nt.depth,0,St,Ft,nt.data);else if(E.isData3DTexture)Gt?(ae&&e.texStorage3D(n.TEXTURE_3D,mt,zt,nt.width,nt.height,nt.depth),N&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,St,Ft,nt.data)):e.texImage3D(n.TEXTURE_3D,0,zt,nt.width,nt.height,nt.depth,0,St,Ft,nt.data);else if(E.isFramebufferTexture){if(ae)if(Gt)e.texStorage2D(n.TEXTURE_2D,mt,zt,nt.width,nt.height);else{let Y=nt.width,$=nt.height;for(let ut=0;ut<mt;ut++)e.texImage2D(n.TEXTURE_2D,ut,zt,Y,$,0,St,Ft,null),Y>>=1,$>>=1}}else if(jt.length>0){if(Gt&&ae){const Y=yt(jt[0]);e.texStorage2D(n.TEXTURE_2D,mt,zt,Y.width,Y.height)}for(let Y=0,$=jt.length;Y<$;Y++)Et=jt[Y],Gt?N&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,St,Ft,Et):e.texImage2D(n.TEXTURE_2D,Y,zt,St,Ft,Et);E.generateMipmaps=!1}else if(Gt){if(ae){const Y=yt(nt);e.texStorage2D(n.TEXTURE_2D,mt,zt,Y.width,Y.height)}N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,St,Ft,nt)}else e.texImage2D(n.TEXTURE_2D,0,zt,St,Ft,nt);m(E)&&p(K),xt.__version=Z.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Q(C,E,B){if(E.image.length!==6)return;const K=Ht(C,E),j=E.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+B);const Z=i.get(j);if(j.version!==Z.__version||K===!0){e.activeTexture(n.TEXTURE0+B);const xt=te.getPrimaries(te.workingColorSpace),rt=E.colorSpace===pi?null:te.getPrimaries(E.colorSpace),ot=E.colorSpace===pi||xt===rt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);const Nt=E.isCompressedTexture||E.image[0].isCompressedTexture,nt=E.image[0]&&E.image[0].isDataTexture,St=[];for(let $=0;$<6;$++)!Nt&&!nt?St[$]=v(E.image[$],!0,s.maxCubemapSize):St[$]=nt?E.image[$].image:E.image[$],St[$]=Wt(E,St[$]);const Ft=St[0],zt=r.convert(E.format,E.colorSpace),Et=r.convert(E.type),jt=x(E.internalFormat,zt,Et,E.colorSpace),Gt=E.isVideoTexture!==!0,ae=Z.__version===void 0||K===!0,N=j.dataReady;let mt=L(E,Ft);wt(n.TEXTURE_CUBE_MAP,E);let Y;if(Nt){Gt&&ae&&e.texStorage2D(n.TEXTURE_CUBE_MAP,mt,jt,Ft.width,Ft.height);for(let $=0;$<6;$++){Y=St[$].mipmaps;for(let ut=0;ut<Y.length;ut++){const lt=Y[ut];E.format!==rn?zt!==null?Gt?N&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ut,0,0,lt.width,lt.height,zt,lt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ut,jt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ut,0,0,lt.width,lt.height,zt,Et,lt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ut,jt,lt.width,lt.height,0,zt,Et,lt.data)}}}else{if(Y=E.mipmaps,Gt&&ae){Y.length>0&&mt++;const $=yt(St[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,mt,jt,$.width,$.height)}for(let $=0;$<6;$++)if(nt){Gt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,St[$].width,St[$].height,zt,Et,St[$].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,jt,St[$].width,St[$].height,0,zt,Et,St[$].data);for(let ut=0;ut<Y.length;ut++){const ct=Y[ut].image[$].image;Gt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ut+1,0,0,ct.width,ct.height,zt,Et,ct.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ut+1,jt,ct.width,ct.height,0,zt,Et,ct.data)}}else{Gt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,zt,Et,St[$]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,jt,zt,Et,St[$]);for(let ut=0;ut<Y.length;ut++){const lt=Y[ut];Gt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ut+1,0,0,zt,Et,lt.image[$]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ut+1,jt,zt,Et,lt.image[$])}}}m(E)&&p(n.TEXTURE_CUBE_MAP),Z.__version=j.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function tt(C,E,B,K,j,Z){const xt=r.convert(B.format,B.colorSpace),rt=r.convert(B.type),ot=x(B.internalFormat,xt,rt,B.colorSpace),Nt=i.get(E),nt=i.get(B);if(nt.__renderTarget=E,!Nt.__hasExternalTextures){const St=Math.max(1,E.width>>Z),Ft=Math.max(1,E.height>>Z);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?e.texImage3D(j,Z,ot,St,Ft,E.depth,0,xt,rt,null):e.texImage2D(j,Z,ot,St,Ft,0,xt,rt,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),Tt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,j,nt.__webglTexture,0,bt(E)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,j,nt.__webglTexture,Z),e.bindFramebuffer(n.FRAMEBUFFER,null)}function et(C,E,B){if(n.bindRenderbuffer(n.RENDERBUFFER,C),E.depthBuffer){const K=E.depthTexture,j=K&&K.isDepthTexture?K.type:null,Z=_(E.stencilBuffer,j),xt=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=bt(E);Tt(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,rt,Z,E.width,E.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,rt,Z,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Z,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xt,n.RENDERBUFFER,C)}else{const K=E.textures;for(let j=0;j<K.length;j++){const Z=K[j],xt=r.convert(Z.format,Z.colorSpace),rt=r.convert(Z.type),ot=x(Z.internalFormat,xt,rt,Z.colorSpace),Nt=bt(E);B&&Tt(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Nt,ot,E.width,E.height):Tt(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Nt,ot,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,ot,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ht(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(E.depthTexture);K.__renderTarget=E,(!K.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),G(E.depthTexture,0);const j=K.__webglTexture,Z=bt(E);if(E.depthTexture.format===Us)Tt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(E.depthTexture.format===Vs)Tt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function vt(C){const E=i.get(C),B=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){const K=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),K){const j=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,K.removeEventListener("dispose",j)};K.addEventListener("dispose",j),E.__depthDisposeCallback=j}E.__boundDepthTexture=K}if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");ht(E.__webglFramebuffer,C)}else if(B){E.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[K]),E.__webglDepthbuffer[K]===void 0)E.__webglDepthbuffer[K]=n.createRenderbuffer(),et(E.__webglDepthbuffer[K],C,!1);else{const j=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=E.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),et(E.__webglDepthbuffer,C,!1);else{const K=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,j)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function It(C,E,B){const K=i.get(C);E!==void 0&&tt(K.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&vt(C)}function pt(C){const E=C.texture,B=i.get(C),K=i.get(E);C.addEventListener("dispose",R);const j=C.textures,Z=C.isWebGLCubeRenderTarget===!0,xt=j.length>1;if(xt||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=E.version,o.memory.textures++),Z){B.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer[rt]=[];for(let ot=0;ot<E.mipmaps.length;ot++)B.__webglFramebuffer[rt][ot]=n.createFramebuffer()}else B.__webglFramebuffer[rt]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer=[];for(let rt=0;rt<E.mipmaps.length;rt++)B.__webglFramebuffer[rt]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(xt)for(let rt=0,ot=j.length;rt<ot;rt++){const Nt=i.get(j[rt]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&Tt(C)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let rt=0;rt<j.length;rt++){const ot=j[rt];B.__webglColorRenderbuffer[rt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[rt]);const Nt=r.convert(ot.format,ot.colorSpace),nt=r.convert(ot.type),St=x(ot.internalFormat,Nt,nt,ot.colorSpace,C.isXRRenderTarget===!0),Ft=bt(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ft,St,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.RENDERBUFFER,B.__webglColorRenderbuffer[rt])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),et(B.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),wt(n.TEXTURE_CUBE_MAP,E);for(let rt=0;rt<6;rt++)if(E.mipmaps&&E.mipmaps.length>0)for(let ot=0;ot<E.mipmaps.length;ot++)tt(B.__webglFramebuffer[rt][ot],C,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ot);else tt(B.__webglFramebuffer[rt],C,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);m(E)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let rt=0,ot=j.length;rt<ot;rt++){const Nt=j[rt],nt=i.get(Nt);e.bindTexture(n.TEXTURE_2D,nt.__webglTexture),wt(n.TEXTURE_2D,Nt),tt(B.__webglFramebuffer,C,Nt,n.COLOR_ATTACHMENT0+rt,n.TEXTURE_2D,0),m(Nt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let rt=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(rt=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(rt,K.__webglTexture),wt(rt,E),E.mipmaps&&E.mipmaps.length>0)for(let ot=0;ot<E.mipmaps.length;ot++)tt(B.__webglFramebuffer[ot],C,E,n.COLOR_ATTACHMENT0,rt,ot);else tt(B.__webglFramebuffer,C,E,n.COLOR_ATTACHMENT0,rt,0);m(E)&&p(rt),e.unbindTexture()}C.depthBuffer&&vt(C)}function ft(C){const E=C.textures;for(let B=0,K=E.length;B<K;B++){const j=E[B];if(m(j)){const Z=S(C),xt=i.get(j).__webglTexture;e.bindTexture(Z,xt),p(Z),e.unbindTexture()}}}const Ut=[],I=[];function qt(C){if(C.samples>0){if(Tt(C)===!1){const E=C.textures,B=C.width,K=C.height;let j=n.COLOR_BUFFER_BIT;const Z=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xt=i.get(C),rt=E.length>1;if(rt)for(let ot=0;ot<E.length;ot++)e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let ot=0;ot<E.length;ot++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),rt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xt.__webglColorRenderbuffer[ot]);const Nt=i.get(E[ot]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Nt,0)}n.blitFramebuffer(0,0,B,K,0,0,B,K,j,n.NEAREST),c===!0&&(Ut.length=0,I.length=0,Ut.push(n.COLOR_ATTACHMENT0+ot),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ut.push(Z),I.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,I)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ut))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),rt)for(let ot=0;ot<E.length;ot++){e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,xt.__webglColorRenderbuffer[ot]);const Nt=i.get(E[ot]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.TEXTURE_2D,Nt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const E=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function bt(C){return Math.min(s.maxSamples,C.samples)}function Tt(C){const E=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function _t(C){const E=o.render.frame;h.get(C)!==E&&(h.set(C,E),C.update())}function Wt(C,E){const B=C.colorSpace,K=C.format,j=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==js&&B!==pi&&(te.getTransfer(B)===he?(K!==rn||j!==Tn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),E}function yt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=D,this.setTexture2D=G,this.setTexture2DArray=F,this.setTexture3D=X,this.setTextureCube=k,this.rebindTextures=It,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=qt,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=Tt}function lv(n,t){function e(i,s=pi){let r;const o=te.getTransfer(s);if(i===Tn)return n.UNSIGNED_BYTE;if(i===ol)return n.UNSIGNED_SHORT_4_4_4_4;if(i===al)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Bu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ou)return n.BYTE;if(i===zu)return n.SHORT;if(i===Ar)return n.UNSIGNED_SHORT;if(i===rl)return n.INT;if(i===Vi)return n.UNSIGNED_INT;if(i===Fn)return n.FLOAT;if(i===Nr)return n.HALF_FLOAT;if(i===ku)return n.ALPHA;if(i===Hu)return n.RGB;if(i===rn)return n.RGBA;if(i===Gu)return n.LUMINANCE;if(i===Vu)return n.LUMINANCE_ALPHA;if(i===Us)return n.DEPTH_COMPONENT;if(i===Vs)return n.DEPTH_STENCIL;if(i===cl)return n.RED;if(i===ll)return n.RED_INTEGER;if(i===Wu)return n.RG;if(i===hl)return n.RG_INTEGER;if(i===ul)return n.RGBA_INTEGER;if(i===yo||i===So||i===Eo||i===bo)if(o===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===yo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===So)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===yo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===So)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Eo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===bo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===uc||i===fc||i===dc||i===pc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===uc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===fc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===dc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===pc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===mc||i===gc||i===_c)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===mc||i===gc)return o===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===_c)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===vc||i===xc||i===Mc||i===yc||i===Sc||i===Ec||i===bc||i===Tc||i===wc||i===Ac||i===Rc||i===Cc||i===Pc||i===Lc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===vc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===xc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Mc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===yc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Sc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ec)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===bc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Tc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ac)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Rc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Cc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Pc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Lc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===To||i===Dc||i===Ic)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===To)return o===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Dc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ic)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Xu||i===Uc||i===Nc||i===Fc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===To)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Uc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Nc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Fc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Gs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class hv extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class pe extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uv={type:"move"};class La{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,i),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(uv)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new pe;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const fv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class pv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new ke,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Mi({vertexShader:fv,fragmentShader:dv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Kt(new yi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mv extends ji{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const v=new pv,m=e.getContextAttributes();let p=null,S=null;const x=[],_=[],L=new it;let w=null;const R=new Je;R.viewport=new de;const T=new Je;T.viewport=new de;const y=[R,T],M=new hv;let A=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=x[q];return Q===void 0&&(Q=new La,x[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=x[q];return Q===void 0&&(Q=new La,x[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=x[q];return Q===void 0&&(Q=new La,x[q]=Q),Q.getHandSpace()};function U(q){const Q=_.indexOf(q.inputSource);if(Q===-1)return;const tt=x[Q];tt!==void 0&&(tt.update(q.inputSource,q.frame,l||o),tt.dispatchEvent({type:q.type,data:q.inputSource}))}function H(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",G);for(let q=0;q<x.length;q++){const Q=_[q];Q!==null&&(_[q]=null,x[q].disconnect(Q))}A=null,D=null,v.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,S=null,Ht.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",H),s.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){const Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Wi(f.framebufferWidth,f.framebufferHeight,{format:rn,type:Tn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,tt=null,et=null;m.depth&&(et=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=m.stencil?Vs:Us,tt=m.stencil?Gs:Vi);const ht={colorFormat:e.RGBA8,depthFormat:et,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(ht),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new Wi(d.textureWidth,d.textureHeight,{format:rn,type:Tn,depthTexture:new rf(d.textureWidth,d.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Ht.setContext(s),Ht.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function G(q){for(let Q=0;Q<q.removed.length;Q++){const tt=q.removed[Q],et=_.indexOf(tt);et>=0&&(_[et]=null,x[et].disconnect(tt))}for(let Q=0;Q<q.added.length;Q++){const tt=q.added[Q];let et=_.indexOf(tt);if(et===-1){for(let vt=0;vt<x.length;vt++)if(vt>=_.length){_.push(tt),et=vt;break}else if(_[vt]===null){_[vt]=tt,et=vt;break}if(et===-1)break}const ht=x[et];ht&&ht.connect(tt)}}const F=new P,X=new P;function k(q,Q,tt){F.setFromMatrixPosition(Q.matrixWorld),X.setFromMatrixPosition(tt.matrixWorld);const et=F.distanceTo(X),ht=Q.projectionMatrix.elements,vt=tt.projectionMatrix.elements,It=ht[14]/(ht[10]-1),pt=ht[14]/(ht[10]+1),ft=(ht[9]+1)/ht[5],Ut=(ht[9]-1)/ht[5],I=(ht[8]-1)/ht[0],qt=(vt[8]+1)/vt[0],bt=It*I,Tt=It*qt,_t=et/(-I+qt),Wt=_t*-I;if(Q.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Wt),q.translateZ(_t),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),ht[10]===-1)q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const yt=It+_t,C=pt+_t,E=bt-Wt,B=Tt+(et-Wt),K=ft*pt/C*yt,j=Ut*pt/C*yt;q.projectionMatrix.makePerspective(E,B,K,j,yt,C),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function J(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let Q=q.near,tt=q.far;v.texture!==null&&(v.depthNear>0&&(Q=v.depthNear),v.depthFar>0&&(tt=v.depthFar)),M.near=T.near=R.near=Q,M.far=T.far=R.far=tt,(A!==M.near||D!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),A=M.near,D=M.far),R.layers.mask=q.layers.mask|2,T.layers.mask=q.layers.mask|4,M.layers.mask=R.layers.mask|T.layers.mask;const et=q.parent,ht=M.cameras;J(M,et);for(let vt=0;vt<ht.length;vt++)J(ht[vt],et);ht.length===2?k(M,R,T):M.projectionMatrix.copy(R.projectionMatrix),st(q,M,et)};function st(q,Q,tt){tt===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(tt.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ws*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let dt=null;function wt(q,Q){if(h=Q.getViewerPose(l||o),g=Q,h!==null){const tt=h.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let et=!1;tt.length!==M.cameras.length&&(M.cameras.length=0,et=!0);for(let vt=0;vt<tt.length;vt++){const It=tt[vt];let pt=null;if(f!==null)pt=f.getViewport(It);else{const Ut=u.getViewSubImage(d,It);pt=Ut.viewport,vt===0&&(t.setRenderTargetTextures(S,Ut.colorTexture,d.ignoreDepthValues?void 0:Ut.depthStencilTexture),t.setRenderTarget(S))}let ft=y[vt];ft===void 0&&(ft=new Je,ft.layers.enable(vt),ft.viewport=new de,y[vt]=ft),ft.matrix.fromArray(It.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(It.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(pt.x,pt.y,pt.width,pt.height),vt===0&&(M.matrix.copy(ft.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),et===!0&&M.cameras.push(ft)}const ht=s.enabledFeatures;if(ht&&ht.includes("depth-sensing")){const vt=u.getDepthInformation(tt[0]);vt&&vt.isValid&&vt.texture&&v.init(t,vt,s.renderState)}}for(let tt=0;tt<x.length;tt++){const et=_[tt],ht=x[tt];et!==null&&ht!==void 0&&ht.update(et,Q,l||o)}dt&&dt(q,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Ht=new nf;Ht.setAnimationLoop(wt),this.setAnimationLoop=function(q){dt=q},this.dispose=function(){}}}const Di=new mn,gv=new ee;function _v(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Qu(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,x,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,S,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ye&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ye&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=t.get(p),x=S.envMap,_=S.envMapRotation;x&&(m.envMap.value=x,Di.copy(_),Di.x*=-1,Di.y*=-1,Di.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),m.envMapRotation.value.setFromMatrix4(gv.makeRotationFromEuler(Di)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ye&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function vv(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,x){const _=x.program;i.uniformBlockBinding(S,_)}function l(S,x){let _=s[S.id];_===void 0&&(g(S),_=h(S),s[S.id]=_,S.addEventListener("dispose",m));const L=x.program;i.updateUBOMapping(S,L);const w=t.render.frame;r[S.id]!==w&&(d(S),r[S.id]=w)}function h(S){const x=u();S.__bindingPointIndex=x;const _=n.createBuffer(),L=S.__size,w=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,L,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,_),_}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const x=s[S.id],_=S.uniforms,L=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let w=0,R=_.length;w<R;w++){const T=Array.isArray(_[w])?_[w]:[_[w]];for(let y=0,M=T.length;y<M;y++){const A=T[y];if(f(A,w,y,L)===!0){const D=A.__offset,U=Array.isArray(A.value)?A.value:[A.value];let H=0;for(let G=0;G<U.length;G++){const F=U[G],X=v(F);typeof F=="number"||typeof F=="boolean"?(A.__data[0]=F,n.bufferSubData(n.UNIFORM_BUFFER,D+H,A.__data)):F.isMatrix3?(A.__data[0]=F.elements[0],A.__data[1]=F.elements[1],A.__data[2]=F.elements[2],A.__data[3]=0,A.__data[4]=F.elements[3],A.__data[5]=F.elements[4],A.__data[6]=F.elements[5],A.__data[7]=0,A.__data[8]=F.elements[6],A.__data[9]=F.elements[7],A.__data[10]=F.elements[8],A.__data[11]=0):(F.toArray(A.__data,H),H+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(S,x,_,L){const w=S.value,R=x+"_"+_;if(L[R]===void 0)return typeof w=="number"||typeof w=="boolean"?L[R]=w:L[R]=w.clone(),!0;{const T=L[R];if(typeof w=="number"||typeof w=="boolean"){if(T!==w)return L[R]=w,!0}else if(T.equals(w)===!1)return T.copy(w),!0}return!1}function g(S){const x=S.uniforms;let _=0;const L=16;for(let R=0,T=x.length;R<T;R++){const y=Array.isArray(x[R])?x[R]:[x[R]];for(let M=0,A=y.length;M<A;M++){const D=y[M],U=Array.isArray(D.value)?D.value:[D.value];for(let H=0,G=U.length;H<G;H++){const F=U[H],X=v(F),k=_%L,J=k%X.boundary,st=k+J;_+=J,st!==0&&L-st<X.storage&&(_+=L-st),D.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=_,_+=X.storage}}}const w=_%L;return w>0&&(_+=L-w),S.__size=_,S.__cache={},this}function v(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function m(S){const x=S.target;x.removeEventListener("dispose",m);const _=o.indexOf(x.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const S in s)n.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class xv{constructor(t={}){const{canvas:e=ap(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const S=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pe,this.toneMapping=_i,this.toneMappingExposure=1;const _=this;let L=!1,w=0,R=0,T=null,y=-1,M=null;const A=new de,D=new de;let U=null;const H=new Lt(0);let G=0,F=e.width,X=e.height,k=1,J=null,st=null;const dt=new de(0,0,F,X),wt=new de(0,0,F,X);let Ht=!1;const q=new ml;let Q=!1,tt=!1;const et=new ee,ht=new ee,vt=new P,It=new de,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function Ut(){return T===null?k:1}let I=i;function qt(b,O){return e.getContext(b,O)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${nl}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",lt,!1),I===null){const O="webgl2";if(I=qt(O,b),I===null)throw qt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let bt,Tt,_t,Wt,yt,C,E,B,K,j,Z,xt,rt,ot,Nt,nt,St,Ft,zt,Et,jt,Gt,ae,N;function mt(){bt=new bg(I),bt.init(),Gt=new lv(I,bt),Tt=new vg(I,bt,t,Gt),_t=new ov(I,bt),Tt.reverseDepthBuffer&&d&&_t.buffers.depth.setReversed(!0),Wt=new Ag(I),yt=new X_,C=new cv(I,bt,_t,yt,Tt,Gt,Wt),E=new Mg(_),B=new Eg(_),K=new Up(I),ae=new gg(I,K),j=new Tg(I,K,Wt,ae),Z=new Cg(I,j,K,Wt),zt=new Rg(I,Tt,C),nt=new xg(yt),xt=new W_(_,E,B,bt,Tt,ae,nt),rt=new _v(_,yt),ot=new Y_,Nt=new Q_(bt),Ft=new mg(_,E,B,_t,Z,f,c),St=new sv(_,Z,Tt),N=new vv(I,Wt,Tt,_t),Et=new _g(I,bt,Wt),jt=new wg(I,bt,Wt),Wt.programs=xt.programs,_.capabilities=Tt,_.extensions=bt,_.properties=yt,_.renderLists=ot,_.shadowMap=St,_.state=_t,_.info=Wt}mt();const Y=new mv(_,I);this.xr=Y,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const b=bt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=bt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(b){b!==void 0&&(k=b,this.setSize(F,X,!1))},this.getSize=function(b){return b.set(F,X)},this.setSize=function(b,O,V=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=b,X=O,e.width=Math.floor(b*k),e.height=Math.floor(O*k),V===!0&&(e.style.width=b+"px",e.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(F*k,X*k).floor()},this.setDrawingBufferSize=function(b,O,V){F=b,X=O,k=V,e.width=Math.floor(b*V),e.height=Math.floor(O*V),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(A)},this.getViewport=function(b){return b.copy(dt)},this.setViewport=function(b,O,V,W){b.isVector4?dt.set(b.x,b.y,b.z,b.w):dt.set(b,O,V,W),_t.viewport(A.copy(dt).multiplyScalar(k).round())},this.getScissor=function(b){return b.copy(wt)},this.setScissor=function(b,O,V,W){b.isVector4?wt.set(b.x,b.y,b.z,b.w):wt.set(b,O,V,W),_t.scissor(D.copy(wt).multiplyScalar(k).round())},this.getScissorTest=function(){return Ht},this.setScissorTest=function(b){_t.setScissorTest(Ht=b)},this.setOpaqueSort=function(b){J=b},this.setTransparentSort=function(b){st=b},this.getClearColor=function(b){return b.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor.apply(Ft,arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha.apply(Ft,arguments)},this.clear=function(b=!0,O=!0,V=!0){let W=0;if(b){let z=!1;if(T!==null){const at=T.texture.format;z=at===ul||at===hl||at===ll}if(z){const at=T.texture.type,Mt=at===Tn||at===Vi||at===Ar||at===Gs||at===ol||at===al,At=Ft.getClearColor(),Rt=Ft.getClearAlpha(),kt=At.r,Xt=At.g,Ct=At.b;Mt?(g[0]=kt,g[1]=Xt,g[2]=Ct,g[3]=Rt,I.clearBufferuiv(I.COLOR,0,g)):(v[0]=kt,v[1]=Xt,v[2]=Ct,v[3]=Rt,I.clearBufferiv(I.COLOR,0,v))}else W|=I.COLOR_BUFFER_BIT}O&&(W|=I.DEPTH_BUFFER_BIT),V&&(W|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),ot.dispose(),Nt.dispose(),yt.dispose(),E.dispose(),B.dispose(),Z.dispose(),ae.dispose(),N.dispose(),xt.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",gn),Y.removeEventListener("sessionend",ts),cn.stop()};function $(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const b=Wt.autoReset,O=St.enabled,V=St.autoUpdate,W=St.needsUpdate,z=St.type;mt(),Wt.autoReset=b,St.enabled=O,St.autoUpdate=V,St.needsUpdate=W,St.type=z}function lt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ct(b){const O=b.target;O.removeEventListener("dispose",ct),$t(O)}function $t(b){ie(b),yt.remove(b)}function ie(b){const O=yt.get(b).programs;O!==void 0&&(O.forEach(function(V){xt.releaseProgram(V)}),b.isShaderMaterial&&xt.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,V,W,z,at){O===null&&(O=pt);const Mt=z.isMesh&&z.matrixWorld.determinant()<0,At=tr(b,O,V,W,z);_t.setMaterial(W,Mt);let Rt=V.index,kt=1;if(W.wireframe===!0){if(Rt=j.getWireframeAttribute(V),Rt===void 0)return;kt=2}const Xt=V.drawRange,Ct=V.attributes.position;let ne=Xt.start*kt,me=(Xt.start+Xt.count)*kt;at!==null&&(ne=Math.max(ne,at.start*kt),me=Math.min(me,(at.start+at.count)*kt)),Rt!==null?(ne=Math.max(ne,0),me=Math.min(me,Rt.count)):Ct!=null&&(ne=Math.max(ne,0),me=Math.min(me,Ct.count));const _e=me-ne;if(_e<0||_e===1/0)return;ae.setup(z,W,At,V,Rt);let Ze,se=Et;if(Rt!==null&&(Ze=K.get(Rt),se=jt,se.setIndex(Ze)),z.isMesh)W.wireframe===!0?(_t.setLineWidth(W.wireframeLinewidth*Ut()),se.setMode(I.LINES)):se.setMode(I.TRIANGLES);else if(z.isLine){let Dt=W.linewidth;Dt===void 0&&(Dt=1),_t.setLineWidth(Dt*Ut()),z.isLineSegments?se.setMode(I.LINES):z.isLineLoop?se.setMode(I.LINE_LOOP):se.setMode(I.LINE_STRIP)}else z.isPoints?se.setMode(I.POINTS):z.isSprite&&se.setMode(I.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)se.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(bt.get("WEBGL_multi_draw"))se.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Dt=z._multiDrawStarts,Hn=z._multiDrawCounts,re=z._multiDrawCount,_n=Rt?K.get(Rt).bytesPerElement:1,ss=yt.get(W).currentProgram.getUniforms();for(let Qe=0;Qe<re;Qe++)ss.setValue(I,"_gl_DrawID",Qe),se.render(Dt[Qe]/_n,Hn[Qe])}else if(z.isInstancedMesh)se.renderInstances(ne,_e,z.count);else if(V.isInstancedBufferGeometry){const Dt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Hn=Math.min(V.instanceCount,Dt);se.renderInstances(ne,_e,Hn)}else se.render(ne,_e)};function Yt(b,O,V){b.transparent===!0&&b.side===Zn&&b.forceSinglePass===!1?(b.side=Ye,b.needsUpdate=!0,ri(b,O,V),b.side=vi,b.needsUpdate=!0,ri(b,O,V),b.side=Zn):ri(b,O,V)}this.compile=function(b,O,V=null){V===null&&(V=b),p=Nt.get(V),p.init(O),x.push(p),V.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),b!==V&&b.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const W=new Set;return b.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const at=z.material;if(at)if(Array.isArray(at))for(let Mt=0;Mt<at.length;Mt++){const At=at[Mt];Yt(At,V,z),W.add(At)}else Yt(at,V,z),W.add(at)}),x.pop(),p=null,W},this.compileAsync=function(b,O,V=null){const W=this.compile(b,O,V);return new Promise(z=>{function at(){if(W.forEach(function(Mt){yt.get(Mt).currentProgram.isReady()&&W.delete(Mt)}),W.size===0){z(b);return}setTimeout(at,10)}bt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let Ae=null;function Oe(b){Ae&&Ae(b)}function gn(){cn.stop()}function ts(){cn.start()}const cn=new nf;cn.setAnimationLoop(Oe),typeof self<"u"&&cn.setContext(self),this.setAnimationLoop=function(b){Ae=b,Y.setAnimationLoop(b),b===null?cn.stop():cn.start()},Y.addEventListener("sessionstart",gn),Y.addEventListener("sessionend",ts),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(O),O=Y.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,O,T),p=Nt.get(b,x.length),p.init(O),x.push(p),ht.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),q.setFromProjectionMatrix(ht),tt=this.localClippingEnabled,Q=nt.init(this.clippingPlanes,tt),m=ot.get(b,S.length),m.init(),S.push(m),Y.enabled===!0&&Y.isPresenting===!0){const at=_.xr.getDepthSensingMesh();at!==null&&Ei(at,O,-1/0,_.sortObjects)}Ei(b,O,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(J,st),ft=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,ft&&Ft.addToRenderList(m,b),this.info.render.frame++,Q===!0&&nt.beginShadows();const V=p.state.shadowsArray;St.render(V,b,O),Q===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,z=m.transmissive;if(p.setupLights(),O.isArrayCamera){const at=O.cameras;if(z.length>0)for(let Mt=0,At=at.length;Mt<At;Mt++){const Rt=at[Mt];Ti(W,z,b,Rt)}ft&&Ft.render(b);for(let Mt=0,At=at.length;Mt<At;Mt++){const Rt=at[Mt];bi(m,b,Rt,Rt.viewport)}}else z.length>0&&Ti(W,z,b,O),ft&&Ft.render(b),bi(m,b,O);T!==null&&(C.updateMultisampleRenderTarget(T),C.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(_,b,O),ae.resetDefaultState(),y=-1,M=null,x.pop(),x.length>0?(p=x[x.length-1],Q===!0&&nt.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Ei(b,O,V,W){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)V=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||q.intersectsSprite(b)){W&&It.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ht);const Mt=Z.update(b),At=b.material;At.visible&&m.push(b,Mt,At,V,It.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||q.intersectsObject(b))){const Mt=Z.update(b),At=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),It.copy(b.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),It.copy(Mt.boundingSphere.center)),It.applyMatrix4(b.matrixWorld).applyMatrix4(ht)),Array.isArray(At)){const Rt=Mt.groups;for(let kt=0,Xt=Rt.length;kt<Xt;kt++){const Ct=Rt[kt],ne=At[Ct.materialIndex];ne&&ne.visible&&m.push(b,Mt,ne,V,It.z,Ct)}}else At.visible&&m.push(b,Mt,At,V,It.z,null)}}const at=b.children;for(let Mt=0,At=at.length;Mt<At;Mt++)Ei(at[Mt],O,V,W)}function bi(b,O,V,W){const z=b.opaque,at=b.transmissive,Mt=b.transparent;p.setupLightsView(V),Q===!0&&nt.setGlobalState(_.clippingPlanes,V),W&&_t.viewport(A.copy(W)),z.length>0&&kn(z,O,V),at.length>0&&kn(at,O,V),Mt.length>0&&kn(Mt,O,V),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function Ti(b,O,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new Wi(1,1,{generateMipmaps:!0,type:bt.has("EXT_color_buffer_half_float")||bt.has("EXT_color_buffer_float")?Nr:Tn,minFilter:Nn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const at=p.state.transmissionRenderTarget[W.id],Mt=W.viewport||A;at.setSize(Mt.z,Mt.w);const At=_.getRenderTarget();_.setRenderTarget(at),_.getClearColor(H),G=_.getClearAlpha(),G<1&&_.setClearColor(16777215,.5),_.clear(),ft&&Ft.render(V);const Rt=_.toneMapping;_.toneMapping=_i;const kt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),Q===!0&&nt.setGlobalState(_.clippingPlanes,W),kn(b,V,W),C.updateMultisampleRenderTarget(at),C.updateRenderTargetMipmap(at),bt.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let Ct=0,ne=O.length;Ct<ne;Ct++){const me=O[Ct],_e=me.object,Ze=me.geometry,se=me.material,Dt=me.group;if(se.side===Zn&&_e.layers.test(W.layers)){const Hn=se.side;se.side=Ye,se.needsUpdate=!0,wi(_e,V,W,Ze,se,Dt),se.side=Hn,se.needsUpdate=!0,Xt=!0}}Xt===!0&&(C.updateMultisampleRenderTarget(at),C.updateRenderTargetMipmap(at))}_.setRenderTarget(At),_.setClearColor(H,G),kt!==void 0&&(W.viewport=kt),_.toneMapping=Rt}function kn(b,O,V){const W=O.isScene===!0?O.overrideMaterial:null;for(let z=0,at=b.length;z<at;z++){const Mt=b[z],At=Mt.object,Rt=Mt.geometry,kt=W===null?Mt.material:W,Xt=Mt.group;At.layers.test(V.layers)&&wi(At,O,V,Rt,kt,Xt)}}function wi(b,O,V,W,z,at){b.onBeforeRender(_,O,V,W,z,at),b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),z.onBeforeRender(_,O,V,W,b,at),z.transparent===!0&&z.side===Zn&&z.forceSinglePass===!1?(z.side=Ye,z.needsUpdate=!0,_.renderBufferDirect(V,O,W,z,b,at),z.side=vi,z.needsUpdate=!0,_.renderBufferDirect(V,O,W,z,b,at),z.side=Zn):_.renderBufferDirect(V,O,W,z,b,at),b.onAfterRender(_,O,V,W,z,at)}function ri(b,O,V){O.isScene!==!0&&(O=pt);const W=yt.get(b),z=p.state.lights,at=p.state.shadowsArray,Mt=z.state.version,At=xt.getParameters(b,z.state,at,O,V),Rt=xt.getProgramCacheKey(At);let kt=W.programs;W.environment=b.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(b.isMeshStandardMaterial?B:E).get(b.envMap||W.environment),W.envMapRotation=W.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,kt===void 0&&(b.addEventListener("dispose",ct),kt=new Map,W.programs=kt);let Xt=kt.get(Rt);if(Xt!==void 0){if(W.currentProgram===Xt&&W.lightsStateVersion===Mt)return ns(b,At),Xt}else At.uniforms=xt.getUniforms(b),b.onBeforeCompile(At,_),Xt=xt.acquireProgram(At,Rt),kt.set(Rt,Xt),W.uniforms=At.uniforms;const Ct=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ct.clippingPlanes=nt.uniform),ns(b,At),W.needsLights=od(b),W.lightsStateVersion=Mt,W.needsLights&&(Ct.ambientLightColor.value=z.state.ambient,Ct.lightProbe.value=z.state.probe,Ct.directionalLights.value=z.state.directional,Ct.directionalLightShadows.value=z.state.directionalShadow,Ct.spotLights.value=z.state.spot,Ct.spotLightShadows.value=z.state.spotShadow,Ct.rectAreaLights.value=z.state.rectArea,Ct.ltc_1.value=z.state.rectAreaLTC1,Ct.ltc_2.value=z.state.rectAreaLTC2,Ct.pointLights.value=z.state.point,Ct.pointLightShadows.value=z.state.pointShadow,Ct.hemisphereLights.value=z.state.hemi,Ct.directionalShadowMap.value=z.state.directionalShadowMap,Ct.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ct.spotShadowMap.value=z.state.spotShadowMap,Ct.spotLightMatrix.value=z.state.spotLightMatrix,Ct.spotLightMap.value=z.state.spotLightMap,Ct.pointShadowMap.value=z.state.pointShadowMap,Ct.pointShadowMatrix.value=z.state.pointShadowMatrix),W.currentProgram=Xt,W.uniformsList=null,Xt}function es(b){if(b.uniformsList===null){const O=b.currentProgram.getUniforms();b.uniformsList=wo.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function ns(b,O){const V=yt.get(b);V.outputColorSpace=O.outputColorSpace,V.batching=O.batching,V.batchingColor=O.batchingColor,V.instancing=O.instancing,V.instancingColor=O.instancingColor,V.instancingMorph=O.instancingMorph,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function tr(b,O,V,W,z){O.isScene!==!0&&(O=pt),C.resetTextureUnits();const at=O.fog,Mt=W.isMeshStandardMaterial?O.environment:null,At=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:js,Rt=(W.isMeshStandardMaterial?B:E).get(W.envMap||Mt),kt=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Xt=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ct=!!V.morphAttributes.position,ne=!!V.morphAttributes.normal,me=!!V.morphAttributes.color;let _e=_i;W.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(_e=_.toneMapping);const Ze=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,se=Ze!==void 0?Ze.length:0,Dt=yt.get(W),Hn=p.state.lights;if(Q===!0&&(tt===!0||b!==M)){const ln=b===M&&W.id===y;nt.setState(W,b,ln)}let re=!1;W.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==Hn.state.version||Dt.outputColorSpace!==At||z.isBatchedMesh&&Dt.batching===!1||!z.isBatchedMesh&&Dt.batching===!0||z.isBatchedMesh&&Dt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Dt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Dt.instancing===!1||!z.isInstancedMesh&&Dt.instancing===!0||z.isSkinnedMesh&&Dt.skinning===!1||!z.isSkinnedMesh&&Dt.skinning===!0||z.isInstancedMesh&&Dt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Dt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Dt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Dt.instancingMorph===!1&&z.morphTexture!==null||Dt.envMap!==Rt||W.fog===!0&&Dt.fog!==at||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==nt.numPlanes||Dt.numIntersection!==nt.numIntersection)||Dt.vertexAlphas!==kt||Dt.vertexTangents!==Xt||Dt.morphTargets!==Ct||Dt.morphNormals!==ne||Dt.morphColors!==me||Dt.toneMapping!==_e||Dt.morphTargetsCount!==se)&&(re=!0):(re=!0,Dt.__version=W.version);let _n=Dt.currentProgram;re===!0&&(_n=ri(W,O,z));let ss=!1,Qe=!1,er=!1;const ve=_n.getUniforms(),An=Dt.uniforms;if(_t.useProgram(_n.program)&&(ss=!0,Qe=!0,er=!0),W.id!==y&&(y=W.id,Qe=!0),ss||M!==b){_t.buffers.depth.getReversed()?(et.copy(b.projectionMatrix),lp(et),hp(et),ve.setValue(I,"projectionMatrix",et)):ve.setValue(I,"projectionMatrix",b.projectionMatrix),ve.setValue(I,"viewMatrix",b.matrixWorldInverse);const oi=ve.map.cameraPosition;oi!==void 0&&oi.setValue(I,vt.setFromMatrixPosition(b.matrixWorld)),Tt.logarithmicDepthBuffer&&ve.setValue(I,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ve.setValue(I,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,Qe=!0,er=!0)}if(z.isSkinnedMesh){ve.setOptional(I,z,"bindMatrix"),ve.setOptional(I,z,"bindMatrixInverse");const ln=z.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),ve.setValue(I,"boneTexture",ln.boneTexture,C))}z.isBatchedMesh&&(ve.setOptional(I,z,"batchingTexture"),ve.setValue(I,"batchingTexture",z._matricesTexture,C),ve.setOptional(I,z,"batchingIdTexture"),ve.setValue(I,"batchingIdTexture",z._indirectTexture,C),ve.setOptional(I,z,"batchingColorTexture"),z._colorsTexture!==null&&ve.setValue(I,"batchingColorTexture",z._colorsTexture,C));const nr=V.morphAttributes;if((nr.position!==void 0||nr.normal!==void 0||nr.color!==void 0)&&zt.update(z,V,_n),(Qe||Dt.receiveShadow!==z.receiveShadow)&&(Dt.receiveShadow=z.receiveShadow,ve.setValue(I,"receiveShadow",z.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(An.envMap.value=Rt,An.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&O.environment!==null&&(An.envMapIntensity.value=O.environmentIntensity),Qe&&(ve.setValue(I,"toneMappingExposure",_.toneMappingExposure),Dt.needsLights&&is(An,er),at&&W.fog===!0&&rt.refreshFogUniforms(An,at),rt.refreshMaterialUniforms(An,W,k,X,p.state.transmissionRenderTarget[b.id]),wo.upload(I,es(Dt),An,C)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(wo.upload(I,es(Dt),An,C),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ve.setValue(I,"center",z.center),ve.setValue(I,"modelViewMatrix",z.modelViewMatrix),ve.setValue(I,"normalMatrix",z.normalMatrix),ve.setValue(I,"modelMatrix",z.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const ln=W.uniformsGroups;for(let oi=0,ai=ln.length;oi<ai;oi++){const zl=ln[oi];N.update(zl,_n),N.bind(zl,_n)}}return _n}function is(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function od(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,O,V){yt.get(b.texture).__webglTexture=O,yt.get(b.depthTexture).__webglTexture=V;const W=yt.get(b);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,O){const V=yt.get(b);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,V=0){T=b,w=O,R=V;let W=!0,z=null,at=!1,Mt=!1;if(b){const Rt=yt.get(b);if(Rt.__useDefaultFramebuffer!==void 0)_t.bindFramebuffer(I.FRAMEBUFFER,null),W=!1;else if(Rt.__webglFramebuffer===void 0)C.setupRenderTarget(b);else if(Rt.__hasExternalTextures)C.rebindTextures(b,yt.get(b.texture).__webglTexture,yt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ct=b.depthTexture;if(Rt.__boundDepthTexture!==Ct){if(Ct!==null&&yt.has(Ct)&&(b.width!==Ct.image.width||b.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(b)}}const kt=b.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Mt=!0);const Xt=yt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Xt[O])?z=Xt[O][V]:z=Xt[O],at=!0):b.samples>0&&C.useMultisampledRTT(b)===!1?z=yt.get(b).__webglMultisampledFramebuffer:Array.isArray(Xt)?z=Xt[V]:z=Xt,A.copy(b.viewport),D.copy(b.scissor),U=b.scissorTest}else A.copy(dt).multiplyScalar(k).floor(),D.copy(wt).multiplyScalar(k).floor(),U=Ht;if(_t.bindFramebuffer(I.FRAMEBUFFER,z)&&W&&_t.drawBuffers(b,z),_t.viewport(A),_t.scissor(D),_t.setScissorTest(U),at){const Rt=yt.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,Rt.__webglTexture,V)}else if(Mt){const Rt=yt.get(b.texture),kt=O||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Rt.__webglTexture,V||0,kt)}y=-1},this.readRenderTargetPixels=function(b,O,V,W,z,at,Mt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=yt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Mt!==void 0&&(At=At[Mt]),At){_t.bindFramebuffer(I.FRAMEBUFFER,At);try{const Rt=b.texture,kt=Rt.format,Xt=Rt.type;if(!Tt.textureFormatReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Tt.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-W&&V>=0&&V<=b.height-z&&I.readPixels(O,V,W,z,Gt.convert(kt),Gt.convert(Xt),at)}finally{const Rt=T!==null?yt.get(T).__webglFramebuffer:null;_t.bindFramebuffer(I.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(b,O,V,W,z,at,Mt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=yt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Mt!==void 0&&(At=At[Mt]),At){const Rt=b.texture,kt=Rt.format,Xt=Rt.type;if(!Tt.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Tt.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=b.width-W&&V>=0&&V<=b.height-z){_t.bindFramebuffer(I.FRAMEBUFFER,At);const Ct=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ct),I.bufferData(I.PIXEL_PACK_BUFFER,at.byteLength,I.STREAM_READ),I.readPixels(O,V,W,z,Gt.convert(kt),Gt.convert(Xt),0);const ne=T!==null?yt.get(T).__webglFramebuffer:null;_t.bindFramebuffer(I.FRAMEBUFFER,ne);const me=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await cp(I,me,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ct),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,at),I.deleteBuffer(Ct),I.deleteSync(me),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,O=null,V=0){b.isTexture!==!0&&(xr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,b=arguments[1]);const W=Math.pow(2,-V),z=Math.floor(b.image.width*W),at=Math.floor(b.image.height*W),Mt=O!==null?O.x:0,At=O!==null?O.y:0;C.setTexture2D(b,0),I.copyTexSubImage2D(I.TEXTURE_2D,V,0,0,Mt,At,z,at),_t.unbindTexture()},this.copyTextureToTexture=function(b,O,V=null,W=null,z=0){b.isTexture!==!0&&(xr("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,b=arguments[1],O=arguments[2],z=arguments[3]||0,V=null);let at,Mt,At,Rt,kt,Xt,Ct,ne,me;const _e=b.isCompressedTexture?b.mipmaps[z]:b.image;V!==null?(at=V.max.x-V.min.x,Mt=V.max.y-V.min.y,At=V.isBox3?V.max.z-V.min.z:1,Rt=V.min.x,kt=V.min.y,Xt=V.isBox3?V.min.z:0):(at=_e.width,Mt=_e.height,At=_e.depth||1,Rt=0,kt=0,Xt=0),W!==null?(Ct=W.x,ne=W.y,me=W.z):(Ct=0,ne=0,me=0);const Ze=Gt.convert(O.format),se=Gt.convert(O.type);let Dt;O.isData3DTexture?(C.setTexture3D(O,0),Dt=I.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(C.setTexture2DArray(O,0),Dt=I.TEXTURE_2D_ARRAY):(C.setTexture2D(O,0),Dt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);const Hn=I.getParameter(I.UNPACK_ROW_LENGTH),re=I.getParameter(I.UNPACK_IMAGE_HEIGHT),_n=I.getParameter(I.UNPACK_SKIP_PIXELS),ss=I.getParameter(I.UNPACK_SKIP_ROWS),Qe=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,_e.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,_e.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Rt),I.pixelStorei(I.UNPACK_SKIP_ROWS,kt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Xt);const er=b.isDataArrayTexture||b.isData3DTexture,ve=O.isDataArrayTexture||O.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const An=yt.get(b),nr=yt.get(O),ln=yt.get(An.__renderTarget),oi=yt.get(nr.__renderTarget);_t.bindFramebuffer(I.READ_FRAMEBUFFER,ln.__webglFramebuffer),_t.bindFramebuffer(I.DRAW_FRAMEBUFFER,oi.__webglFramebuffer);for(let ai=0;ai<At;ai++)er&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,yt.get(b).__webglTexture,z,Xt+ai),b.isDepthTexture?(ve&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,yt.get(O).__webglTexture,z,me+ai),I.blitFramebuffer(Rt,kt,at,Mt,Ct,ne,at,Mt,I.DEPTH_BUFFER_BIT,I.NEAREST)):ve?I.copyTexSubImage3D(Dt,z,Ct,ne,me+ai,Rt,kt,at,Mt):I.copyTexSubImage2D(Dt,z,Ct,ne,me+ai,Rt,kt,at,Mt);_t.bindFramebuffer(I.READ_FRAMEBUFFER,null),_t.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else ve?b.isDataTexture||b.isData3DTexture?I.texSubImage3D(Dt,z,Ct,ne,me,at,Mt,At,Ze,se,_e.data):O.isCompressedArrayTexture?I.compressedTexSubImage3D(Dt,z,Ct,ne,me,at,Mt,At,Ze,_e.data):I.texSubImage3D(Dt,z,Ct,ne,me,at,Mt,At,Ze,se,_e):b.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,z,Ct,ne,at,Mt,Ze,se,_e.data):b.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,z,Ct,ne,_e.width,_e.height,Ze,_e.data):I.texSubImage2D(I.TEXTURE_2D,z,Ct,ne,at,Mt,Ze,se,_e);I.pixelStorei(I.UNPACK_ROW_LENGTH,Hn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,re),I.pixelStorei(I.UNPACK_SKIP_PIXELS,_n),I.pixelStorei(I.UNPACK_SKIP_ROWS,ss),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Qe),z===0&&O.generateMipmaps&&I.generateMipmap(Dt),_t.unbindTexture()},this.copyTextureToTexture3D=function(b,O,V=null,W=null,z=0){return b.isTexture!==!0&&(xr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,b=arguments[2],O=arguments[3],z=arguments[4]||0),xr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,O,V,W,z)},this.initRenderTarget=function(b){yt.get(b).__webglFramebuffer===void 0&&C.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?C.setTextureCube(b,0):b.isData3DTexture?C.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?C.setTexture2DArray(b,0):C.setTexture2D(b,0),_t.unbindTexture()},this.resetState=function(){w=0,R=0,T=null,_t.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}class hf extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Mv{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Oc,this.updateRanges=[],this.version=0,this.uuid=zn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const We=new P;class Co{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=En(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=le(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=En(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=En(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=En(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=En(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),i=le(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),i=le(i,this.array),s=le(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),i=le(i,this.array),s=le(s,this.array),r=le(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new De(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Co(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Fr extends Ji{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let xs;const ar=new P,Ms=new P,ys=new P,Ss=new it,cr=new it,uf=new ee,co=new P,lr=new P,lo=new P,Nh=new it,Da=new it,Fh=new it;class Wo extends Ie{constructor(t=new Fr){if(super(),this.isSprite=!0,this.type="Sprite",xs===void 0){xs=new Be;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Mv(e,5);xs.setIndex([0,1,2,0,2,3]),xs.setAttribute("position",new Co(i,3,0,!1)),xs.setAttribute("uv",new Co(i,2,3,!1))}this.geometry=xs,this.material=t,this.center=new it(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ms.setFromMatrixScale(this.matrixWorld),uf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ys.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ms.multiplyScalar(-ys.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;ho(co.set(-.5,-.5,0),ys,o,Ms,s,r),ho(lr.set(.5,-.5,0),ys,o,Ms,s,r),ho(lo.set(.5,.5,0),ys,o,Ms,s,r),Nh.set(0,0),Da.set(1,0),Fh.set(1,1);let a=t.ray.intersectTriangle(co,lr,lo,!1,ar);if(a===null&&(ho(lr.set(-.5,.5,0),ys,o,Ms,s,r),Da.set(0,1),a=t.ray.intersectTriangle(co,lo,lr,!1,ar),a===null))return;const c=t.ray.origin.distanceTo(ar);c<t.near||c>t.far||e.push({distance:c,point:ar.clone(),uv:dn.getInterpolation(ar,co,lr,lo,Nh,Da,Fh,new it),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ho(n,t,e,i,s,r){Ss.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(cr.x=r*Ss.x-s*Ss.y,cr.y=s*Ss.x+r*Ss.y):cr.copy(Ss),n.copy(t),n.x+=cr.x,n.y+=cr.y,n.applyMatrix4(uf)}class _l extends ke{constructor(t=null,e=1,i=1,s,r,o,a,c,l=on,h=on,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oh extends De{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Es=new ee,zh=new ee,uo=[],Bh=new Ki,yv=new ee,hr=new Kt,ur=new Ks;class Sv extends Kt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Oh(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,yv)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ki),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Es),Bh.copy(t.boundingBox).applyMatrix4(Es),this.boundingBox.union(Bh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ks),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Es),ur.copy(t.boundingSphere).applyMatrix4(Es),this.boundingSphere.union(ur)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(hr.geometry=this.geometry,hr.material=this.material,hr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ur.copy(this.boundingSphere),ur.applyMatrix4(i),t.ray.intersectsSphere(ur)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Es),zh.multiplyMatrices(i,Es),hr.matrixWorld=zh,hr.raycast(t,uo);for(let o=0,a=uo.length;o<a;o++){const c=uo[o];c.instanceId=r,c.object=this,e.push(c)}uo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Oh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new _l(new Float32Array(s*this.count),s,this.count,cl,Fn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Or extends ke{constructor(t,e,i,s,r,o,a,c,l){super(t,e,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Bn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);const h=i[s],d=i[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new it:new P);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new P,s=[],r=[],o=[],a=new P,c=new ee;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Le(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Le(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class vl extends Bn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new it){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Ev extends vl{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function xl(){let n=0,t=0,e=0,i=0;function s(r,o,a,c){n=r,t=a,e=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const fo=new P,Ia=new xl,Ua=new xl,Na=new xl;class ni extends Bn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new P){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(fo.subVectors(s[0],s[1]).add(s[0]),l=fo);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(fo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=fo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Ia.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,v,m),Ua.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,v,m),Na.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Ia.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Ua.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Na.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return i.set(Ia.calc(c),Ua.calc(c),Na.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function kh(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,c=n*a;return(2*e-2*i+r+o)*c+(-3*e+3*i-2*r-o)*a+r*n+e}function bv(n,t){const e=1-n;return e*e*t}function Tv(n,t){return 2*(1-n)*n*t}function wv(n,t){return n*n*t}function Er(n,t,e,i){return bv(n,t)+Tv(n,e)+wv(n,i)}function Av(n,t){const e=1-n;return e*e*e*t}function Rv(n,t){const e=1-n;return 3*e*e*n*t}function Cv(n,t){return 3*(1-n)*n*n*t}function Pv(n,t){return n*n*n*t}function br(n,t,e,i,s){return Av(n,t)+Rv(n,e)+Cv(n,i)+Pv(n,s)}class ff extends Bn{constructor(t=new it,e=new it,i=new it,s=new it){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new it){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(br(t,s.x,r.x,o.x,a.x),br(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Lv extends Bn{constructor(t=new P,e=new P,i=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new P){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(br(t,s.x,r.x,o.x,a.x),br(t,s.y,r.y,o.y,a.y),br(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class df extends Bn{constructor(t=new it,e=new it){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new it){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new it){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Xo extends Bn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class pf extends Bn{constructor(t=new it,e=new it,i=new it){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new it){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Er(t,s.x,r.x,o.x),Er(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class mf extends Bn{constructor(t=new P,e=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new P){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Er(t,s.x,r.x,o.x),Er(t,s.y,r.y,o.y),Er(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ml extends Bn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new it){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(kh(a,c.x,l.x,h.x,u.x),kh(a,c.y,l.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new it().fromArray(s))}return this}}var Hc=Object.freeze({__proto__:null,ArcCurve:Ev,CatmullRomCurve3:ni,CubicBezierCurve:ff,CubicBezierCurve3:Lv,EllipseCurve:vl,LineCurve:df,LineCurve3:Xo,QuadraticBezierCurve:pf,QuadraticBezierCurve3:mf,SplineCurve:Ml});class Dv extends Bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Hc[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Hc[s.type]().fromJSON(s))}return this}}class Gc extends Dv{constructor(t){super(),this.type="Path",this.currentPoint=new it,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new df(this.currentPoint.clone(),new it(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new pf(this.currentPoint.clone(),new it(t,e),new it(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new ff(this.currentPoint.clone(),new it(t,e),new it(i,s),new it(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Ml(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,i,s,r,o,a,c),this}absellipse(t,e,i,s,r,o,a,c){const l=new vl(t,e,i,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class yl extends Be{constructor(t=[new it(0,-.5),new it(.5,0),new it(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=Le(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/e,u=new P,d=new it,f=new P,g=new P,v=new P;let m=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),c.push(f.x,f.y,f.z),v.copy(g)}for(let S=0;S<=e;S++){const x=i+S*h*s,_=Math.sin(x),L=Math.cos(x);for(let w=0;w<=t.length-1;w++){u.x=t[w].x*_,u.y=t[w].y,u.z=t[w].x*L,o.push(u.x,u.y,u.z),d.x=S/e,d.y=w/(t.length-1),a.push(d.x,d.y);const R=c[3*w+0]*_,T=c[3*w+1],y=c[3*w+0]*L;l.push(R,T,y)}}for(let S=0;S<e;S++)for(let x=0;x<t.length-1;x++){const _=x+S*t.length,L=_,w=_+t.length,R=_+t.length+1,T=_+1;r.push(L,w,T),r.push(R,T,w)}this.setIndex(r),this.setAttribute("position",new oe(o,3)),this.setAttribute("uv",new oe(a,2)),this.setAttribute("normal",new oe(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yl(t.points,t.segments,t.phiStart,t.phiLength)}}class qo extends Be{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new P,h=new it;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=i+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new oe(o,3)),this.setAttribute("normal",new oe(a,3)),this.setAttribute("uv",new oe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class qs extends Be{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const v=[],m=i/2;let p=0;S(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new oe(u,3)),this.setAttribute("normal",new oe(d,3)),this.setAttribute("uv",new oe(f,2));function S(){const _=new P,L=new P;let w=0;const R=(e-t)/i;for(let T=0;T<=r;T++){const y=[],M=T/r,A=M*(e-t)+t;for(let D=0;D<=s;D++){const U=D/s,H=U*c+a,G=Math.sin(H),F=Math.cos(H);L.x=A*G,L.y=-M*i+m,L.z=A*F,u.push(L.x,L.y,L.z),_.set(G,R,F).normalize(),d.push(_.x,_.y,_.z),f.push(U,1-M),y.push(g++)}v.push(y)}for(let T=0;T<s;T++)for(let y=0;y<r;y++){const M=v[y][T],A=v[y+1][T],D=v[y+1][T+1],U=v[y][T+1];(t>0||y!==0)&&(h.push(M,A,U),w+=3),(e>0||y!==r-1)&&(h.push(A,D,U),w+=3)}l.addGroup(p,w,0),p+=w}function x(_){const L=g,w=new it,R=new P;let T=0;const y=_===!0?t:e,M=_===!0?1:-1;for(let D=1;D<=s;D++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;const A=g;for(let D=0;D<=s;D++){const H=D/s*c+a,G=Math.cos(H),F=Math.sin(H);R.x=y*F,R.y=m*M,R.z=y*G,u.push(R.x,R.y,R.z),d.push(0,M,0),w.x=G*.5+.5,w.y=F*.5*M+.5,f.push(w.x,w.y),g++}for(let D=0;D<s;D++){const U=L+D,H=A+D;_===!0?h.push(H,H+1,U):h.push(H+1,H,U),T+=3}l.addGroup(p,T,_===!0?1:2),p+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qs(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class gf extends Gc{constructor(t){super(t),this.uuid=zn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new Gc().fromJSON(s))}return this}}const Iv={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=_f(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(i&&(r=zv(n,t,r,e)),n.length>80*e){a=l=n[0],c=h=n[1];for(let g=e;g<s;g+=e)u=n[g],d=n[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return Cr(r,o,e,a,c,f,0),o}};function _f(n,t,e,i,s){let r,o;if(s===jv(n,t,e,i)>0)for(r=t;r<e;r+=i)o=Hh(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=Hh(r,n[r],n[r+1],o);return o&&Yo(o,o.next)&&(Lr(o),o=o.next),o}function Xi(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Yo(e,e.next)||Se(e.prev,e,e.next)===0)){if(Lr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Cr(n,t,e,i,s,r,o){if(!n)return;!o&&r&&Vv(n,i,s,r);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,r?Nv(n,i,s,r):Uv(n)){t.push(c.i/e|0),t.push(n.i/e|0),t.push(l.i/e|0),Lr(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=Fv(Xi(n),t,e),Cr(n,t,e,i,s,r,2)):o===2&&Ov(n,t,e,i,s,r):Cr(Xi(n),t,e,i,s,r,1);break}}}function Uv(n){const t=n.prev,e=n,i=n.next;if(Se(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,c=e.y,l=i.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Cs(s,a,r,c,o,l,g.x,g.y)&&Se(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Nv(n,t,e,i){const s=n.prev,r=n,o=n.next;if(Se(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,v=a>c?a>l?a:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,p=Vc(f,g,t,e,i),S=Vc(v,m,t,e,i);let x=n.prevZ,_=n.nextZ;for(;x&&x.z>=p&&_&&_.z<=S;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Cs(a,h,c,u,l,d,x.x,x.y)&&Se(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Cs(a,h,c,u,l,d,_.x,_.y)&&Se(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Cs(a,h,c,u,l,d,x.x,x.y)&&Se(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=S;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Cs(a,h,c,u,l,d,_.x,_.y)&&Se(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Fv(n,t,e){let i=n;do{const s=i.prev,r=i.next.next;!Yo(s,r)&&vf(s,i,i.next,r)&&Pr(s,r)&&Pr(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),Lr(i),Lr(i.next),i=n=r),i=i.next}while(i!==n);return Xi(i)}function Ov(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&qv(o,a)){let c=xf(o,a);o=Xi(o,o.next),c=Xi(c,c.next),Cr(o,t,e,i,s,r,0),Cr(c,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function zv(n,t,e,i){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*i,c=r<o-1?t[r+1]*i:n.length,l=_f(n,a,c,i,!1),l===l.next&&(l.steiner=!0),s.push(Xv(l));for(s.sort(Bv),r=0;r<s.length;r++)e=kv(s[r],e);return e}function Bv(n,t){return n.x-t.x}function kv(n,t){const e=Hv(n,t);if(!e)return t;const i=xf(e,n);return Xi(i,i.next),Xi(e,e.next)}function Hv(n,t){let e=t,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>i&&(i=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Cs(o<l?r:i,o,c,l,o<l?i:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Pr(e,n)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Gv(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function Gv(n,t){return Se(n.prev,n,t.prev)<0&&Se(t.next,n,n.next)<0}function Vv(n,t,e,i){let s=n;do s.z===0&&(s.z=Vc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Wv(s)}function Wv(n){let t,e,i,s,r,o,a,c,l=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<l&&(a++,i=i.nextZ,!!i);t++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,l*=2}while(o>1);return n}function Vc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Xv(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Cs(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function qv(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Yv(n,t)&&(Pr(n,t)&&Pr(t,n)&&Zv(n,t)&&(Se(n.prev,n,t.prev)||Se(n,t.prev,t))||Yo(n,t)&&Se(n.prev,n,n.next)>0&&Se(t.prev,t,t.next)>0)}function Se(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Yo(n,t){return n.x===t.x&&n.y===t.y}function vf(n,t,e,i){const s=mo(Se(n,t,e)),r=mo(Se(n,t,i)),o=mo(Se(e,i,n)),a=mo(Se(e,i,t));return!!(s!==r&&o!==a||s===0&&po(n,e,t)||r===0&&po(n,i,t)||o===0&&po(e,n,i)||a===0&&po(e,t,i))}function po(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function mo(n){return n>0?1:n<0?-1:0}function Yv(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&vf(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Pr(n,t){return Se(n.prev,n,n.next)<0?Se(n,t,n.next)>=0&&Se(n,n.prev,t)>=0:Se(n,t,n.prev)<0||Se(n,n.next,t)<0}function Zv(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function xf(n,t){const e=new Wc(n.i,n.x,n.y),i=new Wc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Hh(n,t,e,i){const s=new Wc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Lr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Wc(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function jv(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class Tr{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return Tr.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];Gh(t),Vh(i,t);let o=t.length;e.forEach(Gh);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Vh(i,e[c]);const a=Iv.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Gh(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Vh(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Sl extends Be{constructor(t=new gf([new it(0,.5),new it(-.5,-.5),new it(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new oe(s,3)),this.setAttribute("normal",new oe(r,3)),this.setAttribute("uv",new oe(o,2));function l(h){const u=s.length/3,d=h.extractPoints(e);let f=d.shape;const g=d.holes;Tr.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const S=g[m];Tr.isClockWise(S)===!0&&(g[m]=S.reverse())}const v=Tr.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const S=g[m];f=f.concat(S)}for(let m=0,p=f.length;m<p;m++){const S=f[m];s.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let m=0,p=v.length;m<p;m++){const S=v[m],x=S[0]+u,_=S[1]+u,L=S[2]+u;i.push(x,_,L),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Kv(e,t)}static fromJSON(t,e){const i=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];i.push(o)}return new Sl(i,t.curveSegments)}}function Kv(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}class qi extends Be{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new P,d=new P,f=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){const S=[],x=p/i;let _=0;p===0&&o===0?_=.5/e:p===i&&c===Math.PI&&(_=-.5/e);for(let L=0;L<=e;L++){const w=L/e;u.x=-t*Math.cos(s+w*r)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(s+w*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(w+_,1-x),S.push(l++)}h.push(S)}for(let p=0;p<i;p++)for(let S=0;S<e;S++){const x=h[p][S+1],_=h[p][S],L=h[p+1][S],w=h[p+1][S+1];(p!==0||o>0)&&f.push(x,_,w),(p!==i-1||c<Math.PI)&&f.push(_,L,w)}this.setIndex(f),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(v,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class zr extends Be{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new P,u=new P,d=new P;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){const v=g/s*r,m=f/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){const v=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,S=(s+1)*f+g;o.push(v,m,S),o.push(m,p,S)}this.setIndex(o),this.setAttribute("position",new oe(a,3)),this.setAttribute("normal",new oe(c,3)),this.setAttribute("uv",new oe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class $s extends Be{constructor(t=new mf(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new P,c=new P,l=new it;let h=new P;const u=[],d=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new oe(u,3)),this.setAttribute("normal",new oe(d,3)),this.setAttribute("uv",new oe(f,2));function v(){for(let x=0;x<e;x++)m(x);m(r===!1?e:0),S(),p()}function m(x){h=t.getPointAt(x/e,h);const _=o.normals[x],L=o.binormals[x];for(let w=0;w<=s;w++){const R=w/s*Math.PI*2,T=Math.sin(R),y=-Math.cos(R);c.x=y*_.x+T*L.x,c.y=y*_.y+T*L.y,c.z=y*_.z+T*L.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+i*c.x,a.y=h.y+i*c.y,a.z=h.z+i*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let x=1;x<=e;x++)for(let _=1;_<=s;_++){const L=(s+1)*(x-1)+(_-1),w=(s+1)*x+(_-1),R=(s+1)*x+_,T=(s+1)*(x-1)+_;g.push(L,w,T),g.push(w,R,T)}}function S(){for(let x=0;x<=e;x++)for(let _=0;_<=s;_++)l.x=x/e,l.y=_/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new $s(new Hc[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class On extends Ji{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fl,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Mf extends On{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new it(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Le(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Lt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Lt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Lt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Jv extends Ji{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fl,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Wh={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class $v{constructor(t,e,i){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const Qv=new $v;class El{constructor(t){this.manager=t!==void 0?t:Qv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}El.DEFAULT_MATERIAL_NAME="__DEFAULT";class tx extends El{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Wh.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Rr("img");function c(){h(),Wh.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class ex extends El{constructor(t){super(t)}load(t,e,i,s){const r=new ke,o=new tx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}}class Zo extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class nx extends Zo{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Fa=new ee,Xh=new P,qh=new P;class bl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ml,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Xh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Xh),qh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(qh),e.updateMatrixWorld(),Fa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Fa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class ix extends bl{constructor(){super(new Je(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,i=Ws*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(i!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class yf extends Zo{constructor(t,e,i=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new ix}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Yh=new ee,fr=new P,Oa=new P;class sx extends bl{constructor(){super(new Je(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new it(4,2),this._viewportCount=6,this._viewports=[new de(2,1,1,1),new de(0,1,1,1),new de(3,1,1,1),new de(1,1,1,1),new de(3,0,1,1),new de(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),fr.setFromMatrixPosition(t.matrixWorld),i.position.copy(fr),Oa.copy(i.position),Oa.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Oa),i.updateMatrixWorld(),s.makeTranslation(-fr.x,-fr.y,-fr.z),Yh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yh)}}class Tl extends Zo{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new sx}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class rx extends bl{constructor(){super(new sf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zh extends Zo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new rx}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const jh=new ee;class ox{constructor(t,e,i=0,s=1/0){this.ray=new Go(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new pl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return jh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(jh),this}intersectObject(t,e=!0,i=[]){return Xc(t,this,i,e),i.sort(Kh),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Xc(t[s],this,i,e);return i.sort(Kh),i}}function Kh(n,t){return n.distance-t.distance}function Xc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Xc(r[o],t,e,!0)}}class Jh{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Le(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class ax extends ji{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nl);const $h={type:"change"},wl={type:"start"},Sf={type:"end"},go=new Go,Qh=new In,cx=Math.cos(70*Ee.DEG2RAD),Ue=new P,je=2*Math.PI,ue={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},za=1e-6;class lx extends ax{constructor(t,e=null){super(t,e),this.state=ue.NONE,this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:mi.ROTATE,MIDDLE:mi.DOLLY,RIGHT:mi.PAN},this.touches={ONE:As.ROTATE,TWO:As.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new wn,this._lastTargetPosition=new P,this._quat=new wn().setFromUnitVectors(t.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Jh,this._sphericalDelta=new Jh,this._scale=1,this._panOffset=new P,this._rotateStart=new it,this._rotateEnd=new it,this._rotateDelta=new it,this._panStart=new it,this._panEnd=new it,this._panDelta=new it,this._dollyStart=new it,this._dollyEnd=new it,this._dollyDelta=new it,this._dollyDirection=new P,this._mouse=new it,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ux.bind(this),this._onPointerDown=hx.bind(this),this._onPointerUp=fx.bind(this),this._onContextMenu=xx.bind(this),this._onMouseWheel=mx.bind(this),this._onKeyDown=gx.bind(this),this._onTouchStart=_x.bind(this),this._onTouchMove=vx.bind(this),this._onMouseDown=dx.bind(this),this._onMouseMove=px.bind(this),this._interceptControlDown=Mx.bind(this),this._interceptControlUp=yx.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent($h),this.update(),this.state=ue.NONE}update(t=null){const e=this.object.position;Ue.copy(e).sub(this.target),Ue.applyQuaternion(this._quat),this._spherical.setFromVector3(Ue),this.autoRotate&&this.state===ue.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=je:i>Math.PI&&(i-=je),s<-Math.PI?s+=je:s>Math.PI&&(s-=je),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ue.setFromSpherical(this._spherical),Ue.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ue),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ue.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new P(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new P(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Ue.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(go.origin.copy(this.object.position),go.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(go.direction))<cx?this.object.lookAt(this.target):(Qh.setFromNormalAndCoplanarPoint(this.object.up,this.target),go.intersectPlane(Qh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>za||8*(1-this._lastQuaternion.dot(this.object.quaternion))>za||this._lastTargetPosition.distanceToSquared(this.target)>za?(this.dispatchEvent($h),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?je/60*this.autoRotateSpeed*t:je/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ue.setFromMatrixColumn(e,0),Ue.multiplyScalar(-t),this._panOffset.add(Ue)}_panUp(t,e){this.screenSpacePanning===!0?Ue.setFromMatrixColumn(e,1):(Ue.setFromMatrixColumn(e,0),Ue.crossVectors(this.object.up,Ue)),Ue.multiplyScalar(t),this._panOffset.add(Ue)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ue.copy(s).sub(this.target);let r=Ue.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(je*this._rotateDelta.x/e.clientHeight),this._rotateUp(je*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(je*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-je*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(je*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-je*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(je*this._rotateDelta.x/e.clientHeight),this._rotateUp(je*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new it,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function hx(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function ux(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function fx(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Sf),this.state=ue.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function dx(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case mi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ue.DOLLY;break;case mi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ue.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ue.ROTATE}break;case mi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ue.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ue.PAN}break;default:this.state=ue.NONE}this.state!==ue.NONE&&this.dispatchEvent(wl)}function px(n){switch(this.state){case ue.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ue.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ue.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function mx(n){this.enabled===!1||this.enableZoom===!1||this.state!==ue.NONE||(n.preventDefault(),this.dispatchEvent(wl),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Sf))}function gx(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function _x(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case As.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ue.TOUCH_ROTATE;break;case As.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ue.TOUCH_PAN;break;default:this.state=ue.NONE}break;case 2:switch(this.touches.TWO){case As.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ue.TOUCH_DOLLY_PAN;break;case As.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ue.TOUCH_DOLLY_ROTATE;break;default:this.state=ue.NONE}break;default:this.state=ue.NONE}this.state!==ue.NONE&&this.dispatchEvent(wl)}function vx(n){switch(this._trackPointer(n),this.state){case ue.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ue.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ue.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ue.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ue.NONE}}function xx(n){this.enabled!==!1&&n.preventDefault()}function Mx(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function yx(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Sx extends hf{constructor(){super();const t=new Si;t.deleteAttribute("uv");const e=new On({side:Ye}),i=new On,s=new Tl(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new Kt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new Kt(t,i);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new Kt(t,i);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const c=new Kt(t,i);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new Kt(t,i);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const h=new Kt(t,i);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new Kt(t,i);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const d=new Kt(t,bs(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const f=new Kt(t,bs(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const g=new Kt(t,bs(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const v=new Kt(t,bs(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);const m=new Kt(t,bs(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const p=new Kt(t,bs(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function bs(n){const t=new xi;return t.color.setScalar(n),t}/**
 * Shape-Matching Soft-Body Physics Engine
 *
 * Uses Position-Based Shape Matching with polar decomposition (quaternion extraction),
 * spatial hash grid broadphase collision, raycast picking, and container bounds.
 *
 * @author Sunil
 * @license MIT
 */const Ex=25,bx=14,Tx=2.2,wx=.7,Ba=.06,Ax=1.2,Rx=.1,Cx=2,dr=1,tu=.001,Px=new Float64Array(9);function eu(n){let t=1;for(;t<n;)t<<=1;return t}class Lx{constructor({halfX:t=3,halfZ:e=2,floorY:i=0,wallHeight:s=.5,wallThickness:r=.26,gravity:o=-12,substeps:a=6,friction:c=.5}={}){this.halfX=t,this.halfZ=e,this.floorY=i,this.wallHeight=s,this.wallThickness=r,this.gravity=new P(0,o,0),this.substeps=a,this.friction=c,this.bodies=[],this.onImpact=null,this._nextId=1,this._grab=null,this._sCap=0,this._impSum=null,this._impCnt=null,this._impMax=null,this._floorCnt=null,this._posArrs=[],this._oldArrs=[],this._innerArrs=[],this._cenArrs=[],this._rad=null,this._ks=null,this._fireB=[],this._fireS=[],this._rCap=0,this._tSize=0,this._refBody=null,this._refIdx=null,this._refKey=null,this._sorted=null,this._cellStart=null,this._fillPos=null,this._cellInv=1}addBody({rest:t,radius:e,stiffness:i=.25,beta:s=.35,damping:r=.995,position:o={x:0,y:1,z:0},yaw:a=0,velocity:c={x:0,y:0,z:0}}){const l=t.length/3|0,h={id:this._nextId++,n:l,radius:e,pos:new Float32Array(l*3),vel:new Float32Array(l*3),rest:Float32Array.from(t),center:new P,velocity:new P,M:new Vt,R:new Vt,restScale:new P(1,1,1),stiffness:i,beta:s,damping:r,impact:0,grounded:!1,_old:new Float32Array(l*3),_inv:new Float64Array(6),_q:new Float64Array([0,0,0,1]),_cool:0,_i:0},u=h.rest;let d=0,f=0,g=0,v=0,m=0,p=0;for(let T=0;T<l*3;T+=3){const y=u[T],M=u[T+1],A=u[T+2];d+=y*y,f+=y*M,g+=y*A,v+=M*M,m+=M*A,p+=A*A}const S=1e-6*(d+v+p)/3+1e-12;d+=S,v+=S,p+=S;const x=v*p-m*m,_=g*m-f*p,L=f*m-g*v,w=1/(d*x+f*_+g*L);h._inv.set([x*w,_*w,L*w,(d*p-g*g)*w,(f*g-d*m)*w,(d*v-f*f)*w]);const R=(2*e*1.2)**2;h._inner=new Uint8Array(l);for(let T=0;T<l;T++){let y=0;for(let M=0;M<l;M++){if(M===T)continue;const A=u[M*3]-u[T*3],D=u[M*3+1]-u[T*3+1],U=u[M*3+2]-u[T*3+2];A*A+D*D+U*U<R&&y++}h._inner[T]=+(y>=6)}return this._place(h,o,a,c),this.bodies.push(h),h}removeBody(t){const e=this.bodies.indexOf(t);e<0||(this._grab&&this._grab.body===t&&(this._grab=null),this.bodies.splice(e,1))}_place(t,e,i,s){const{n:r,rest:o,pos:a,vel:c}=t,l=Math.cos(i),h=Math.sin(i),u=s.x,d=s.y,f=s.z;for(let p=0;p<r*3;p+=3){const S=o[p],x=o[p+1],_=o[p+2];a[p]=e.x+l*S+h*_,a[p+1]=e.y+x,a[p+2]=e.z-h*S+l*_,c[p]=u,c[p+1]=d,c[p+2]=f}t._old.set(a),t._q[0]=0,t._q[1]=Math.sin(i*.5),t._q[2]=0,t._q[3]=Math.cos(i*.5);const g=t.R.elements,v=t.M.elements,m=t.restScale;g[0]=l,g[1]=0,g[2]=-h,g[3]=0,g[4]=1,g[5]=0,g[6]=h,g[7]=0,g[8]=l;for(let p=0;p<3;p++){const S=p===0?m.x:p===1?m.y:m.z;for(let x=0;x<3;x++)v[p*3+x]=g[p*3+x]*S}t.center.set(e.x,e.y,e.z),t.velocity.set(u,d,f),t.impact=0,t.grounded=!1}place(t,e,i=0,s={x:0,y:0,z:0}){this._grab&&this._grab.body===t&&(this._grab=null),t.restScale.set(1,1,1),this._place(t,e,i,s)}_resetBody(t){this.place(t,{x:0,y:2.5,z:0})}step(t){t=Math.min(t,1/30);const e=this.bodies,i=e.length;if(!(t>0)||i===0)return;const s=this.substeps,r=t/s;this._ensureStats(i);let o=0;for(let d=0;d<i;d++){const f=e[d];f._i=d,f._cool-=t,this._posArrs[d]=f.pos,this._oldArrs[d]=f._old,this._innerArrs[d]=f._inner,this._cenArrs[d]=f.center,this._rad[d]=f.radius,f.radius>o&&(o=f.radius),this._ks[d]=1-(1-f.stiffness)**(1/s),this._impMax[d]=0}this._cellInv=1/(2*o),this._ff=Math.min(.9,this.friction*.25);const a=this.gravity,c=a.x*r,l=a.y*r,h=a.z*r;for(let d=0;d<s;d++){for(let f=0;f<i;f++){const g=e[f],v=g.pos,m=g.vel,p=g._old,S=g.n*3;for(let x=0;x<S;x+=3){m[x]+=c,m[x+1]+=l,m[x+2]+=h;const _=v[x],L=v[x+1],w=v[x+2];p[x]=_,p[x+1]=L,p[x+2]=w,v[x]=_+m[x]*r,v[x+1]=L+m[x+1]*r,v[x+2]=w+m[x+2]*r}}this._applyGrab();for(let f=0;f<i;f++)this._shapeMatch(e[f],this._ks[f]);this._impSum.fill(0),this._impCnt.fill(0),this._floorCnt.fill(0);for(let f=0;f<Cx;f++){const g=f===0;i>1&&(g&&this._buildHash(),this._collide(r,g));for(let v=0;v<i;v++)this._bounds(e[v],v,r,g)}for(let f=0;f<i;f++){const g=e[f];if(this._updateVel(g,r)||this._resetBody(g),this._impCnt[f]>=3){const v=this._impSum[f]/this._impCnt[f];v>this._impMax[f]&&(this._impMax[f]=v)}g.grounded=this._floorCnt[f]>0}}const u=Math.exp(-t*3);this._fireB.length=0,this._fireS.length=0;for(let d=0;d<i;d++){const f=e[d],g=f.pos,v=f.vel,m=f.n*3;let p=0,S=0,x=0,_=0,L=0,w=0;for(let y=0;y<m;y+=3)p+=g[y],S+=g[y+1],x+=g[y+2],_+=v[y],L+=v[y+1],w+=v[y+2];const R=1/f.n;f.center.set(p*R,S*R,x*R),f.velocity.set(_*R,L*R,w*R);const T=this._impMax[d];f.impact*=u,T>f.impact&&(f.impact=T),T>Ax&&f._cool<=0&&(f._cool=Rx,this._fireB.push(f),this._fireS.push(T))}if(this.onImpact)for(let d=0;d<this._fireB.length;d++)this.onImpact(this._fireB[d],this._fireS[d])}_ensureStats(t){if(this._sCap>=t)return;const e=Math.max(t,32);this._sCap=e,this._impSum=new Float32Array(e),this._impCnt=new Int32Array(e),this._impMax=new Float32Array(e),this._floorCnt=new Int32Array(e),this._rad=new Float32Array(e),this._ks=new Float64Array(e)}_applyGrab(){const t=this._grab;if(!t)return;const e=t.body,i=e.pos,s=e.R.elements,r=t.target,o=s[0],a=s[1],c=s[2],l=s[3],h=s[4],u=s[5],d=s[6],f=s[7],g=s[8],v=t.off,m=t.ids,p=t.w,S=Ba*Ba;for(let x=0;x<t.count;x++){const _=m[x]*3,L=v[x*3],w=v[x*3+1],R=v[x*3+2],T=wx*p[x];let y=(r.x+o*L+l*w+d*R-i[_])*T,M=(r.y+a*L+h*w+f*R-i[_+1])*T,A=(r.z+c*L+u*w+g*R-i[_+2])*T;const D=y*y+M*M+A*A;if(D>S){const U=Ba/Math.sqrt(D);y*=U,M*=U,A*=U}i[_]+=y,i[_+1]+=M,i[_+2]+=A}}_shapeMatch(t,e){const i=t.n,s=i*3,r=t.pos,o=t.rest,a=t._inv,c=t.restScale,l=t._q;let h=0,u=0,d=0;for(let ct=0;ct<s;ct+=3)h+=r[ct],u+=r[ct+1],d+=r[ct+2];const f=1/i;h*=f,u*=f,d*=f;let g=0,v=0,m=0,p=0,S=0,x=0,_=0,L=0,w=0;for(let ct=0;ct<s;ct+=3){const $t=r[ct]-h,ie=r[ct+1]-u,Yt=r[ct+2]-d,Ae=o[ct],Oe=o[ct+1],gn=o[ct+2];g+=$t*Ae,v+=$t*Oe,m+=$t*gn,p+=ie*Ae,S+=ie*Oe,x+=ie*gn,_+=Yt*Ae,L+=Yt*Oe,w+=Yt*gn}const R=a[0],T=a[1],y=a[2],M=a[3],A=a[4],D=a[5],U=1/Math.max(c.x,.2),H=1/Math.max(c.y,.2),G=1/Math.max(c.z,.2),F=Px;F[0]=(g*R+v*T+m*y)*U,F[1]=(g*T+v*M+m*A)*H,F[2]=(g*y+v*A+m*D)*G,F[3]=(p*R+S*T+x*y)*U,F[4]=(p*T+S*M+x*A)*H,F[5]=(p*y+S*A+x*D)*G,F[6]=(_*R+L*T+w*y)*U,F[7]=(_*T+L*M+w*A)*H,F[8]=(_*y+L*A+w*D)*G;const X=F[0],k=F[1],J=F[2],st=F[3],dt=F[4],wt=F[5],Ht=F[6],q=F[7],Q=F[8];let tt=l[0],et=l[1],ht=l[2],vt=l[3],It,pt,ft,Ut,I,qt,bt,Tt,_t;for(let ct=0;ct<4;ct++){const $t=tt*tt,ie=et*et,Yt=ht*ht;It=1-2*(ie+Yt),pt=2*(tt*et-ht*vt),ft=2*(tt*ht+et*vt),Ut=2*(tt*et+ht*vt),I=1-2*($t+Yt),qt=2*(et*ht-tt*vt),bt=2*(tt*ht-et*vt),Tt=2*(et*ht+tt*vt),_t=1-2*($t+ie);let Ae=Ut*Ht-bt*st+(I*q-Tt*dt)+(qt*Q-_t*wt),Oe=bt*X-It*Ht+(Tt*k-pt*q)+(_t*J-ft*Q),gn=It*st-Ut*X+(pt*dt-I*k)+(ft*wt-qt*J);const ts=Math.abs(It*X+Ut*st+bt*Ht+pt*k+I*dt+Tt*q+ft*J+qt*wt+_t*Q)+1e-9;Ae/=ts,Oe/=ts,gn/=ts;const cn=Math.sqrt(Ae*Ae+Oe*Oe+gn*gn);if(cn<1e-9)break;const Ei=Math.sin(cn*.5)/cn,bi=Ae*Ei,Ti=Oe*Ei,kn=gn*Ei,wi=Math.cos(cn*.5),ri=wi*vt-bi*tt-Ti*et-kn*ht,es=wi*tt+bi*vt+Ti*ht-kn*et,ns=wi*et-bi*ht+Ti*vt+kn*tt,tr=wi*ht+bi*et-Ti*tt+kn*vt,is=1/Math.sqrt(es*es+ns*ns+tr*tr+ri*ri);tt=es*is,et=ns*is,ht=tr*is,vt=ri*is}l[0]=tt,l[1]=et,l[2]=ht,l[3]=vt;{const ct=tt*tt,$t=et*et,ie=ht*ht;It=1-2*($t+ie),pt=2*(tt*et-ht*vt),ft=2*(tt*ht+et*vt),Ut=2*(tt*et+ht*vt),I=1-2*(ct+ie),qt=2*(et*ht-tt*vt),bt=2*(tt*ht-et*vt),Tt=2*(et*ht+tt*vt),_t=1-2*(ct+$t)}const Wt=X*(dt*Q-wt*q)-k*(st*Q-wt*Ht)+J*(st*q-dt*Ht);let yt,C,E,B,K,j,Z,xt,rt;if(Wt>1e-6){const ct=1/Math.cbrt(Wt);yt=X*ct,C=k*ct,E=J*ct,B=st*ct,K=dt*ct,j=wt*ct,Z=Ht*ct,xt=q*ct,rt=Q*ct}else yt=It,C=pt,E=ft,B=Ut,K=I,j=qt,Z=bt,xt=Tt,rt=_t;const ot=t.beta,Nt=1-ot,nt=Math.max(c.x,.2),St=Math.max(c.y,.2),Ft=Math.max(c.z,.2),zt=(ot*yt+Nt*It)*nt,Et=(ot*C+Nt*pt)*St,jt=(ot*E+Nt*ft)*Ft,Gt=(ot*B+Nt*Ut)*nt,ae=(ot*K+Nt*I)*St,N=(ot*j+Nt*qt)*Ft,mt=(ot*Z+Nt*bt)*nt,Y=(ot*xt+Nt*Tt)*St,$=(ot*rt+Nt*_t)*Ft,ut=t.M.elements,lt=t.R.elements;ut[0]=zt,ut[1]=Gt,ut[2]=mt,ut[3]=Et,ut[4]=ae,ut[5]=Y,ut[6]=jt,ut[7]=N,ut[8]=$,lt[0]=It,lt[1]=Ut,lt[2]=bt,lt[3]=pt,lt[4]=I,lt[5]=Tt,lt[6]=ft,lt[7]=qt,lt[8]=_t,t.center.set(h,u,d);for(let ct=0;ct<s;ct+=3){const $t=o[ct],ie=o[ct+1],Yt=o[ct+2];r[ct]+=e*(h+zt*$t+Et*ie+jt*Yt-r[ct]),r[ct+1]+=e*(u+Gt*$t+ae*ie+N*Yt-r[ct+1]),r[ct+2]+=e*(d+mt*$t+Y*ie+$*Yt-r[ct+2])}}_updateVel(t,e){const i=t.pos,s=t._old,r=t.vel,o=t.n*3,a=1/e,c=t.damping;for(let l=0;l<o;l+=3){const h=i[l],u=i[l+1],d=i[l+2];if(!(h>-20&&h<20&&d>-20&&d<20&&u>-30&&u<60))return!1;let f=(h-s[l])*a*c,g=(u-s[l+1])*a*c,v=(d-s[l+2])*a*c;const m=f*f+g*g+v*v;if(m>625){const p=Ex/Math.sqrt(m);f*=p,g*=p,v*=p}r[l]=f,r[l+1]=g,r[l+2]=v}return!0}_bounds(t,e,i,s){const r=t.pos,o=t._old,a=t.n*3,c=t.radius,l=this._ff,h=1/i,u=this.halfX,d=this.halfZ,f=u-c,g=d-c,v=this.floorY+c,m=this.wallThickness,p=u+m+c,S=d+m+c,x=u+m/2,_=d+m/2,L=this.floorY+this.wallHeight+c;let w=0,R=0,T=0;for(let y=0;y<a;y+=3){let M=r[y],A=r[y+1],D=r[y+2];const U=o[y],H=o[y+2];if(A<v&&M>=-u&&M<=u&&D>=-d&&D<=d){const G=(A-o[y+1])*h;s&&(T++,G<-.5&&(w-=G,R++)),A=v,M-=(M-U)*l,D-=(D-H)*l}if(A<L+dr*(m+2*c)){const G=Math.abs(M);if(G>f&&G<p&&Math.abs(D)<S){const X=M<0?-1:1,k=o[y+1];if(k>=L+dr*Math.max(0,Math.abs(U)-f)-tu)A=Math.max(A,L+dr*(G-f)),M-=(M-U)*l,D-=(D-H)*l;else{const J=(M-U)*h*-X;s&&J<-.5&&(w-=J,R++),M=Math.abs(U)<x?X*f:X*p,A-=(A-k)*l,D-=(D-H)*l}}const F=Math.abs(D);if(F>g&&F<S&&Math.abs(M)<p){const X=D<0?-1:1,k=o[y+1];if(k>=L+dr*Math.max(0,Math.abs(H)-g)-tu)A=Math.max(A,L+dr*(F-g)),M-=(M-U)*l,D-=(D-H)*l;else{const J=(D-H)*h*-X;s&&J<-.5&&(w-=J,R++),D=Math.abs(H)<_?X*g:X*S,A-=(A-k)*l,M-=(M-U)*l}}}A<v&&M>=-u&&M<=u&&D>=-d&&D<=d&&(A=v),r[y]=M,r[y+1]=A,r[y+2]=D}s&&(this._impSum[e]+=w,this._impCnt[e]+=R,this._floorCnt[e]+=T)}_buildHash(){const t=this.bodies,e=t.length;let i=0;for(let m=0;m<e;m++)i+=t[m].n;if(i>this._rCap){const m=eu(i),p=Math.max(16384,eu(m*16));this._rCap=m,this._tSize=p,this._refBody=new Int32Array(m),this._refIdx=new Int32Array(m),this._refKey=new Int32Array(m),this._sorted=new Int32Array(m),this._cellStart=new Int32Array(p+1),this._fillPos=new Int32Array(p)}const s=this._tSize,r=s-1,o=this._cellInv,a=this._refBody,c=this._refIdx,l=this._refKey,h=this._sorted,u=this._cellStart,d=this._fillPos;u.fill(0),(!this._box||this._box.length<e*6)&&(this._box=new Float32Array(e*6));const f=this._box,g=2/o;for(let m=0;m<e;m++){const p=t[m].pos,S=t[m].n*3;let x=1/0,_=1/0,L=1/0,w=-1/0,R=-1/0,T=-1/0;for(let y=0;y<S;y+=3){const M=p[y],A=p[y+1],D=p[y+2];M<x&&(x=M),M>w&&(w=M),A<_&&(_=A),A>R&&(R=A),D<L&&(L=D),D>T&&(T=D)}f.set([x-g,_-g,L-g,w+g,R+g,T+g],m*6)}let v=0;for(let m=0;m<e;m++){const p=t[m],S=p.pos,x=this._near??(this._near=[]);x.length=0;for(let _=0;_<e;_++)_!==m&&(f[_*6]>f[m*6+3]||f[_*6+3]<f[m*6]||f[_*6+1]>f[m*6+4]||f[_*6+4]<f[m*6+1]||f[_*6+2]>f[m*6+5]||f[_*6+5]<f[m*6+2]||x.push(_*6));if(x.length)for(let _=0;_<p.n;_++){const L=S[_*3],w=S[_*3+1],R=S[_*3+2];let T=!1;for(let M=0;M<x.length;M++){const A=x[M];if(L>=f[A]&&L<=f[A+3]&&w>=f[A+1]&&w<=f[A+4]&&R>=f[A+2]&&R<=f[A+5]){T=!0;break}}if(!T)continue;const y=(Math.imul(Math.floor(L*o),73856093)^Math.imul(Math.floor(w*o),19349663)^Math.imul(Math.floor(R*o),83492791))&r;a[v]=m,c[v]=_,l[v]=y,u[y+1]++,v++}}for(let m=0;m<s;m++)u[m+1]+=u[m];d.set(u.subarray(0,s));for(let m=0;m<v;m++)h[d[l[m]]++]=m;this._refCount=v}_collide(t,e){const i=this._refCount,s=this._tSize-1,r=this._cellInv,o=1/t,a=this._refBody,c=this._refIdx,l=this._sorted,h=this._cellStart,u=this._posArrs,d=this._oldArrs,f=this._rad,g=this._innerArrs,v=this._cenArrs,m=this._impSum,p=this._impCnt,S=this._ff*.5;for(let x=0;x<i;x++){const _=a[x],L=u[_],w=d[_],R=c[x]*3,T=f[_];let y=L[R],M=L[R+1],A=L[R+2];const D=Math.floor(y*r),U=Math.floor(M*r),H=Math.floor(A*r);for(let G=-1;G<=1;G++){const F=Math.imul(H+G,83492791);for(let X=-1;X<=1;X++){const k=Math.imul(U+X,19349663)^F;for(let J=-1;J<=1;J++){const st=(Math.imul(D+J,73856093)^k)&s,dt=h[st+1];for(let wt=h[st];wt<dt;wt++){const Ht=l[wt];if(Ht<=x)continue;const q=a[Ht];if(q===_)continue;const Q=u[q],tt=c[Ht]*3,et=y-Q[tt],ht=M-Q[tt+1],vt=A-Q[tt+2],It=T+f[q],pt=et*et+ht*ht+vt*vt;if(pt>=It*It)continue;const ft=Math.sqrt(pt);let Ut=0,I=1,qt=0;if(g[_][c[x]]||g[q][c[Ht]]){const j=v[_],Z=v[q],xt=j.x-Z.x,rt=j.y-Z.y,ot=j.z-Z.z,Nt=Math.sqrt(xt*xt+rt*rt+ot*ot);Nt>1e-6&&(Ut=xt/Nt,I=rt/Nt,qt=ot/Nt)}else if(ft>1e-6){const j=1/ft;Ut=et*j,I=ht*j,qt=vt*j}const bt=d[q];if(e){const j=((y-w[R]-Q[tt]+bt[tt])*Ut+(M-w[R+1]-Q[tt+1]+bt[tt+1])*I+(A-w[R+2]-Q[tt+2]+bt[tt+2])*qt)*o;j<-.5&&(m[_]-=j,p[_]++,m[q]-=j,p[q]++)}const Tt=.5*(It-ft);y+=Ut*Tt,M+=I*Tt,A+=qt*Tt,Q[tt]-=Ut*Tt,Q[tt+1]-=I*Tt,Q[tt+2]-=qt*Tt;const _t=y-w[R]-Q[tt]+bt[tt],Wt=M-w[R+1]-Q[tt+1]+bt[tt+1],yt=A-w[R+2]-Q[tt+2]+bt[tt+2],C=_t*Ut+Wt*I+yt*qt,E=(_t-C*Ut)*S,B=(Wt-C*I)*S,K=(yt-C*qt)*S;y-=E,M-=B,A-=K,Q[tt]+=E,Q[tt+1]+=B,Q[tt+2]+=K}}}}L[R]=y,L[R+1]=M,L[R+2]=A}}pick(t,e){let i=e.x,s=e.y,r=e.z;const o=Math.sqrt(i*i+s*s+r*r)||1;i/=o,s/=o,r/=o;let a=1/0,c=null,l=-1;for(const h of this.bodies){const u=h.pos,d=h.radius*1.5,f=d*d;for(let g=0;g<h.n;g++){const v=u[g*3]-t.x,m=u[g*3+1]-t.y,p=u[g*3+2]-t.z,S=v*i+m*s+p*r;if(S<-d)continue;const x=v*v+m*m+p*p-S*S;if(x>f)continue;const _=Math.max(0,S-Math.sqrt(f-x));_<a&&(a=_,c=h,l=g)}}return c?{body:c,index:l,distance:a,point:new P(t.x+i*a,t.y+s*a,t.z+r*a)}:null}grab(t,e,i){this.release();const s=t.pos,r=t.R.elements,o=e*3,a=s[o],c=s[o+1],l=s[o+2],h=Tx*2*t.radius,u=h*h,d=[],f=[],g=[];for(let v=0;v<t.n;v++){const m=s[v*3]-a,p=s[v*3+1]-c,S=s[v*3+2]-l,x=m*m+p*p+S*S;if(x>=u)continue;const _=1-Math.sqrt(x)/h;d.push(v),f.push(_*_*(3-2*_)),g.push(r[0]*m+r[1]*p+r[2]*S,r[3]*m+r[4]*p+r[5]*S,r[6]*m+r[7]*p+r[8]*S)}this._grab={body:t,target:i.clone(),count:d.length,ids:Int32Array.from(d),w:Float32Array.from(f),off:Float32Array.from(g)}}moveGrab(t){this._grab&&this._grab.target.copy(t)}release(){const t=this._grab;if(!t)return;this._grab=null;const e=t.body.vel,i=t.body.n*3;for(let s=0;s<i;s+=3){const r=e[s]*e[s]+e[s+1]*e[s+1]+e[s+2]*e[s+2];if(r>196){const o=bx/Math.sqrt(r);e[s]*=o,e[s+1]*=o,e[s+2]*=o}}}poke(t,e,i,s){const r=t.pos,o=t.vel,a=.45;for(let c=0;c<t.n*3;c+=3){const l=r[c]-e.x,h=r[c+1]-e.y,u=r[c+2]-e.z,d=Math.sqrt(l*l+h*h+u*u);if(d>=a)continue;const f=1-d/a,g=f*f*(3-2*f)*s;o[c]+=i.x*g,o[c+1]+=i.y*g,o[c+2]+=i.z*g}}shake(t){const e=.3*Math.sqrt(t.x*t.x+t.y*t.y+t.z*t.z);for(const i of this.bodies){const s=(Math.random()-.5)*e,r=Math.random()*e*.5,o=(Math.random()-.5)*e,a=i.vel;for(let c=0;c<i.n*3;c+=3)a[c]+=t.x+s,a[c+1]+=t.y+r,a[c+2]+=t.z+o}}}/**
 * Soft-Body Mesh Skinning & Anchor Binding
 *
 * Binds high-resolution surface mesh vertices and facial feature anchors
 * to the 4 nearest interior physics particles using inverse-distance weights.
 *
 * @author Sunil
 * @license MIT
 */const Dn=4;function nu(n,t,e,i){const s=new Uint16Array(i*Dn),r=new Float32Array(i*Dn),o=new Float32Array(i*3),a=new Int32Array(Dn),c=new Float64Array(Dn);for(let l=0;l<i;l++){const h=e[l*3],u=e[l*3+1],d=e[l*3+2];c.fill(1/0),a.fill(0);for(let S=0;S<t;S++){const x=h-n[S*3],_=u-n[S*3+1],L=d-n[S*3+2],w=x*x+_*_+L*L;if(w>=c[3])continue;let R=3;for(;R>0&&c[R-1]>w;)c[R]=c[R-1],a[R]=a[R-1],R--;c[R]=w,a[R]=S}let f=0,g=0,v=0,m=0;const p=[0,0,0,0];for(let S=0;S<Dn;S++){c[S]===1/0&&(a[S]=a[0],c[S]=c[0]);const x=Math.sqrt(c[S])+.02;p[S]=1/(x*x),f+=p[S]}for(let S=0;S<Dn;S++){const x=a[S],_=p[S]/f;s[l*Dn+S]=x,r[l*Dn+S]=_,g+=_*(h-n[x*3]),v+=_*(u-n[x*3+1]),m+=_*(d-n[x*3+2])}o[l*3]=g,o[l*3+1]=v,o[l*3+2]=m}return{idx:s,w:r,off:o}}function Dx(n,t,e){const i=t.attributes.position;i.setUsage(zc);const s=i.array,r=i.count,o=n.rest,a=n.n,c=nu(o,a,Float32Array.from(s),r),l=t.index.array;t.attributes.normal||t.setAttribute("normal",new De(new Float32Array(r*3),3));const h=t.attributes.normal;h.setUsage(zc);const u=h.array;let d=0;for(let _=0;_<r*3;_+=3)d=Math.max(d,s[_]**2+s[_+1]**2+s[_+2]**2);t.boundingSphere=new Ks(new P,Math.sqrt(d)*2);const f=e.length,g=new Float32Array(f*3),v=new Float32Array(f*3);for(let _=0;_<f;_++)g.set(e[_].pos,_*3),v.set(e[_].normal,_*3);const m=nu(o,a,g,f),p=new Float32Array(f*3),S=new Float32Array(f*3);function x(){const _=n.pos,L=n.M.elements,w=L[0],R=L[1],T=L[2],y=L[3],M=L[4],A=L[5],D=L[6],U=L[7],H=L[8],{idx:G,w:F,off:X}=c;for(let pt=0;pt<r;pt++){const ft=pt*Dn,Ut=G[ft]*3,I=G[ft+1]*3,qt=G[ft+2]*3,bt=G[ft+3]*3,Tt=F[ft],_t=F[ft+1],Wt=F[ft+2],yt=F[ft+3],C=X[pt*3],E=X[pt*3+1],B=X[pt*3+2];s[pt*3]=Tt*_[Ut]+_t*_[I]+Wt*_[qt]+yt*_[bt]+w*C+y*E+D*B,s[pt*3+1]=Tt*_[Ut+1]+_t*_[I+1]+Wt*_[qt+1]+yt*_[bt+1]+R*C+M*E+U*B,s[pt*3+2]=Tt*_[Ut+2]+_t*_[I+2]+Wt*_[qt+2]+yt*_[bt+2]+T*C+A*E+H*B}i.needsUpdate=!0,u.fill(0);for(let pt=0;pt<l.length;pt+=3){const ft=l[pt]*3,Ut=l[pt+1]*3,I=l[pt+2]*3,qt=s[Ut]-s[ft],bt=s[Ut+1]-s[ft+1],Tt=s[Ut+2]-s[ft+2],_t=s[I]-s[ft],Wt=s[I+1]-s[ft+1],yt=s[I+2]-s[ft+2],C=bt*yt-Tt*Wt,E=Tt*_t-qt*yt,B=qt*Wt-bt*_t;u[ft]+=C,u[ft+1]+=E,u[ft+2]+=B,u[Ut]+=C,u[Ut+1]+=E,u[Ut+2]+=B,u[I]+=C,u[I+1]+=E,u[I+2]+=B}for(let pt=0;pt<r*3;pt+=3){const ft=1/(Math.hypot(u[pt],u[pt+1],u[pt+2])||1);u[pt]*=ft,u[pt+1]*=ft,u[pt+2]*=ft}h.needsUpdate=!0,t.boundingSphere.center.copy(n.center);const k=M*H-U*A,J=U*T-R*H,st=R*A-M*T,dt=D*A-y*H,wt=w*H-D*T,Ht=y*T-w*A,q=y*U-D*M,Q=D*R-w*U,tt=w*M-y*R,et=w*k+y*J+D*st<0?-1:1,{idx:ht,w:vt,off:It}=m;for(let pt=0;pt<f;pt++){const ft=pt*Dn,Ut=ht[ft]*3,I=ht[ft+1]*3,qt=ht[ft+2]*3,bt=ht[ft+3]*3,Tt=vt[ft],_t=vt[ft+1],Wt=vt[ft+2],yt=vt[ft+3],C=It[pt*3],E=It[pt*3+1],B=It[pt*3+2];p[pt*3]=Tt*_[Ut]+_t*_[I]+Wt*_[qt]+yt*_[bt]+w*C+y*E+D*B,p[pt*3+1]=Tt*_[Ut+1]+_t*_[I+1]+Wt*_[qt+1]+yt*_[bt+1]+R*C+M*E+U*B,p[pt*3+2]=Tt*_[Ut+2]+_t*_[I+2]+Wt*_[qt+2]+yt*_[bt+2]+T*C+A*E+H*B;const K=v[pt*3],j=v[pt*3+1],Z=v[pt*3+2];let xt=et*(k*K+J*j+st*Z),rt=et*(dt*K+wt*j+Ht*Z),ot=et*(q*K+Q*j+tt*Z);const Nt=Math.sqrt(xt*xt+rt*rt+ot*ot);Nt>1e-8?(xt/=Nt,rt/=Nt,ot/=Nt):(xt=K,rt=j,ot=Z),S[pt*3]=xt,S[pt*3+1]=rt,S[pt*3+2]=ot}}return x(),{update:x,anchorPos:p,anchorNormal:S}}/**
 * Needle-Felted Wool Material, Shell Fur Shader & Interactive Combing
 *
 * Uses multi-layer instanced shell rendering with 3D procedural hash noise
 * to render individual wool fibers that flatten and shine when brushed.
 *
 * @author Sunil
 * @license MIT
 */const Ix=`
float fzHash3( vec3 p ) {
  p = fract( p * 0.1031 );
  p += dot( p, p.zyx + 31.32 );
  return fract( ( p.x + p.y ) * p.z );
}
vec3 fzHash33( vec3 p ) {
  p = fract( p * vec3( 0.1031, 0.1030, 0.0973 ) );
  p += dot( p, p.yxz + 33.33 );
  return fract( ( p.xxy + p.yxx ) * p.zyx );
}
float fzNoise( vec3 p ) {
  vec3 i = floor( p ), f = fract( p );
  f = f * f * ( 3.0 - 2.0 * f );
  return mix(
    mix( mix( fzHash3( i ), fzHash3( i + vec3( 1, 0, 0 ) ), f.x ), mix( fzHash3( i + vec3( 0, 1, 0 ) ), fzHash3( i + vec3( 1, 1, 0 ) ), f.x ), f.y ),
    mix( mix( fzHash3( i + vec3( 0, 0, 1 ) ), fzHash3( i + vec3( 1, 0, 1 ) ), f.x ), mix( fzHash3( i + vec3( 0, 1, 1 ) ), fzHash3( i + vec3( 1, 1, 1 ) ), f.x ), f.y ),
    f.z );
}
// Wool depth tone: macro mottling combined with fine fiber grain
float feltTone( vec3 p ) {
  return 0.9 + 0.12 * fzNoise( p * 9.0 ) + 0.06 * fzNoise( p * 60.0 );
}
`;function Ef(n="",t=""){return e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 fiber;
attribute vec3 fiberN;
varying vec3 vFiber;
varying vec3 vFiberN;
${n?n.split("@@")[0]:""}`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFiber = fiber;
vFiberN = fiberN;
${n?n.split("@@")[1]:""}`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vFiber;
varying vec3 vFiberN;
${Ix}
${t?t.split("@@")[0]:""}`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= feltTone( vFiber );
${t?t.split("@@")[1]:""}`)}}function Ux(){const n=new Mf({color:"#ffffff",vertexColors:!0,roughness:1,metalness:0,sheen:.6,sheenColor:"#fff4e6",sheenRoughness:.8});return n.onBeforeCompile=Ef(),n.customProgramCacheKey=()=>"felt",n}const Nx=`
uniform float uFuzzLength;
uniform float uFuzzLayers;
attribute vec3 comb; // Brushed lay-down vector in world space
varying float vFuzzShell;
varying float vComb;
@@
float fzShell = float( gl_InstanceID + 1 ) / uFuzzLayers;
float fzComb = length( comb );
vFuzzShell = fzShell;
vComb = min( 1.0, fzComb );
transformed += normalize( normal ) * ( uFuzzLength * fzShell * ( 1.0 - 0.7 * vComb ) ); // Flatten brushed fibers
transformed += comb * uFuzzLength * 3.0 * pow( fzShell, 1.5 ); // Bend along stroke direction
transformed.y -= 0.35 * uFuzzLength * fzShell * fzShell; // Slight gravity droop at tips
`,Fx=`
uniform float uFuzzDensity;
uniform float uFuzzCover;
varying float vFuzzShell;
varying float vComb;
@@
{
  float s = vFuzzShell;
  vec3 g = vFiber * uFuzzDensity;
  vec3 cell = floor( g );
  vec3 local = fract( g ) - 0.5;

  // At most one fiber per cell; uFuzzCover controls density coverage
  if ( fzHash3( cell + 3.7 ) > uFuzzCover ) discard;
  float hgt = 0.25 + 0.8 * pow( fzHash3( cell + 11.3 ), 1.4 );
  if ( s > hgt ) discard;

  // Fibers taper toward the tip and tilt randomly; circular cross-section in tangent plane
  float rad = 0.3 * ( 1.0 - 0.8 * ( s / hgt ) );
  vec3 c = ( fzHash33( cell + 5.1 ) - 0.5 ) * 0.3 + ( fzHash33( cell + 9.9 ) - 0.5 ) * 0.5 * s;
  vec3 n = normalize( vFiberN );
  vec3 d = local - c;
  d -= dot( d, n ) * n;
  if ( length( d ) > rad ) discard;

  // Darker at roots, brighter at tips for self-shadowing
  diffuseColor.rgb *= mix( 0.84, 1.06, pow( s, 0.7 ) ) * mix( 0.94, 1.06, fzHash3( cell + 1.9 ) );
  diffuseColor.rgb *= 1.0 + 0.25 * vComb; // Brushed wool sheen highlight
}
`,bf={value:.35};function Ox(n,{length:t=.02,density:e=110,layers:i=5,cover:s=.7}={}){const r={uFuzzLength:{value:t},uFuzzLayers:{value:i},uFuzzDensity:{value:e},uFuzzCover:{value:s}},o=new Jv({color:"#ffffff",vertexColors:!0}),a=Ef(Nx,Fx);o.onBeforeCompile=h=>{Object.assign(h.uniforms,r,{uFuzzGlow:bf}),a(h),h.fragmentShader=h.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFuzzGlow;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += diffuseColor.rgb * uFuzzGlow;`)},o.customProgramCacheKey=()=>"feltFuzz";const c=new Sv(n.geometry,o,i),l=new ee;for(let h=0;h<i;h++)c.setMatrixAt(h,l);return c.instanceMatrix.needsUpdate=!0,c.receiveShadow=!0,c.frustumCulled=!1,n.add(c),c}const zx=1/.08,Bx=1.3,iu=.01;function kx(n){const t=n.attributes.position,e=n.attributes.normal,i=new De(new Float32Array(t.count*3),3);i.setUsage(zc),n.setAttribute("comb",i);const s=i.array;let r=!1;function o(c,l,h=.22){const u=t.array,d=e.array,f=h*h;for(let g=0,v=t.count;g<v;g++){const m=g*3,p=u[m]-c.x,S=u[m+1]-c.y,x=u[m+2]-c.z,_=p*p+S*S+x*x;if(_>=f)continue;const L=d[m],w=d[m+1],R=d[m+2],T=l.x*L+l.y*w+l.z*R,y=Math.sqrt(_)/h,M=(1-y*y*(3-2*y))*zx;let A=s[m]+(l.x-T*L)*M,D=s[m+1]+(l.y-T*w)*M,U=s[m+2]+(l.z-T*R)*M;const H=A*A+D*D+U*U;if(H>1){const G=1/Math.sqrt(H);A*=G,D*=G,U*=G}s[m]=A,s[m+1]=D,s[m+2]=U}i.needsUpdate=!0,r=!0}function a(c){if(!r)return;const l=Math.exp(-c*Bx);let h=0;for(let u=0,d=s.length;u<d;u+=3){const f=s[u]*l,g=s[u+1]*l,v=s[u+2]*l;s[u]=f,s[u+1]=g,s[u+2]=v;const m=f*f+g*g+v*v;m>h&&(h=m)}h<iu*iu&&(s.fill(0),r=!1),i.needsUpdate=!0}return{brush:o,update:a}}/**
 * Procedural SDF Animal Species Models & Surface Net Mesher
 *
 * Generates smooth needle-felted animal meshes and interior physics particle
 * clouds from smooth-blended Signed Distance Field primitives.
 *
 * @author Sunil
 * @license MIT
 */const Po=["bear","bunny","cat","frog","chick","pig","penguin","seal"],Rn=(n,t,e=.1)=>({t:0,c:n,r:t,k:e}),Ot=(n,t,e=.1)=>({t:1,c:n,r:t,k:e}),ka=(n,t,e,i=.1)=>({t:2,a:n,b:t,r:e,k:i}),Ts=(n,t,e,i,s=.1)=>({t:3,a:n,b:t,r1:e,r2:i,k:s}),Ha=n=>[-n[0],n[1],n[2]],Hx=n=>({...n,c:n.c&&Ha(n.c),a:n.a&&Ha(n.a),b:n.b&&Ha(n.b)}),xe=(...n)=>n.flatMap(t=>[t,Hx(t)]);function Lo(n,t,e,i){switch(n.t){case 0:return Math.hypot(t-n.c[0],e-n.c[1],i-n.c[2])-n.r;case 1:{const s=t-n.c[0],r=e-n.c[1],o=i-n.c[2],a=n.r,c=Math.hypot(s/a[0],r/a[1],o/a[2]),l=Math.hypot(s/(a[0]*a[0]),r/(a[1]*a[1]),o/(a[2]*a[2]));return l<1e-9?-Math.min(a[0],a[1],a[2]):c*(c-1)/l}case 2:{const s=t-n.a[0],r=e-n.a[1],o=i-n.a[2],a=n.b[0]-n.a[0],c=n.b[1]-n.a[1],l=n.b[2]-n.a[2],h=Math.min(1,Math.max(0,(s*a+r*c+o*l)/(a*a+c*c+l*l)));return Math.hypot(s-a*h,r-c*h,o-l*h)-n.r}default:{const s=t-n.a[0],r=e-n.a[1],o=i-n.a[2],a=n.b[0]-n.a[0],c=n.b[1]-n.a[1],l=n.b[2]-n.a[2],h=a*a+c*c+l*l,u=n.r1-n.r2,d=h-u*u,f=1/h,g=s*a+r*c+o*l,v=g-h,m=s*h-a*g,p=r*h-c*g,S=o*h-l*g,x=m*m+p*p+S*S,_=g*g*h,L=v*v*h,w=Math.sign(u)*u*u*x;return Math.sign(v)*d*L>w?Math.sqrt(x+L)*f-n.r2:Math.sign(g)*d*_<w?Math.sqrt(x+_)*f-n.r1:(Math.sqrt(x*d*f)+g*u)*f-n.r1}}}function Gx(n,t,e,i){let s=Lo(n[0],t,e,i);for(let r=1;r<n.length;r++){const o=n[r],a=Lo(o,t,e,i),c=Math.max(o.k-Math.abs(s-a),0)/o.k;s=Math.min(s,a)-c*c*o.k*.25}return s}const Ii=(n,t)=>n.map(e=>[e,t]),Tf={bear:{pitch:220,color:"#dcc4a3",prims:[Ot([0,.34,0],[.31,.34,.27],.12),Rn([0,.71,.03],.26,.12),...xe(Rn([.19,.93,-.01],.11,.08)),Ot([0,.65,.24],[.11,.075,.09],.06),...xe(Ts([.26,.52,.03],[.42,.38,.1],.11,.1,.1)),...xe(ka([.17,.12,0],[.19,.12,.2],.12,.1))],patches:[...Ii(xe(Rn([.2,.95,.07],.065)),"#e6ab9b"),[Ot([0,.65,.3],[.12,.085,.07]),"#f3e9d8"]],face:{head:[0,.71,.03],eye:[26,10],cheek:[50,-14],mouth:[[0,.65,.24],0,"bear"],size:.1}},bunny:{pitch:330,color:"#9c8b7d",prims:[Ot([0,.38,0],[.38,.38,.33],.12),Ot([0,.58,.05],[.36,.28,.3],.14),Ot([0,.13,-.03],[.28,.13,.25],.1),...xe(Ts([.31,.76,.07],[.4,.36,.11],.09,.11,.03)),Rn([0,.24,-.33],.09,.06),...xe(Ot([.2,.1,.21],[.12,.1,.13],.08))],patches:[[Ot([0,.56,.3],[.15,.1,.08]),"#efe4d2"],[Ot([0,.3,.29],[.24,.22,.1]),"#efe4d2"],[Rn([0,.24,-.4],.09),"#efe4d2"]],face:{head:[0,.58,.05],eye:[30,8],cheek:[52,-12],mouth:[[0,.56,.3],0,"bear"],size:.135}},cat:{pitch:294,color:"#dc975a",prims:[Ot([0,.38,0],[.37,.38,.32],.12),Ot([0,.6,.04],[.37,.27,.29],.14),Ot([0,.13,-.03],[.28,.13,.25],.1),...xe(Ts([.23,.8,0],[.28,.97,-.01],.11,.035,.06)),ka([.1,.12,-.3],[.3,.12,-.2],.07,.06),...xe(Ot([.2,.1,.22],[.11,.1,.12],.08))],patches:[[Ot([0,.57,.3],[.15,.1,.08]),"#f3e6cf"],[Ot([0,.32,.28],[.23,.24,.1]),"#f3e6cf"],[Ot([0,.83,.17],[.035,.09,.1]),"#b8682f"],...Ii(xe(Ot([.1,.81,.18],[.03,.08,.1])),"#b8682f"),...Ii(xe(Ot([.37,.5,0],[.08,.035,.18]),Ot([.38,.37,0],[.08,.035,.2])),"#b8682f"),...Ii(xe(Rn([.26,.88,.05],.045)),"#e8a99a")],face:{head:[0,.6,.04],eye:[30,8],cheek:[54,-12],mouth:[null,-14,"cat"],size:.135}},frog:{pitch:185,color:"#97ab7c",prims:[Ot([0,.3,0],[.36,.3,.32],.12),Ot([0,.5,.08],[.38,.26,.3],.12),...xe(Rn([.2,.74,.12],.15,.08)),...xe(Ot([.3,.15,-.08],[.14,.15,.2],.1)),...xe(Ot([.26,.11,.25],[.11,.11,.14],.08))],patches:[[Ot([0,.22,.3],[.22,.16,.1]),"#ebe5cc"]],face:{head:[0,.5,.08],eye:[16,12,[.2,.74,.12]],cheek:[55,-10],mouth:[null,-14,"frog"],size:.11}},chick:{pitch:440,color:"#efd27a",prims:[Ot([0,.43,0],[.36,.43,.32],.12),Ot([0,.68,.04],[.33,.26,.28],.14),Ot([0,.23,0],[.42,.23,.38],.05),Ot([0,.4,0],[.42,.05,.38],.04),Ot([0,.65,.3],[.08,.045,.07],.04),...xe(Ot([.35,.5,.03],[.08,.11,.1],.06))],patches:[[Ot([0,0,0],[2,.44,2]),"#f7f2e8"],...Array.from({length:10},(n,t)=>{const e=t/10*Math.PI*2;return[Rn([.42*Math.sin(e),.47,.38*Math.cos(e)],.08),"#f7f2e8"]}),[Ot([0,.65,.33],[.1,.06,.08]),"#e69a4a"]],face:{head:[0,.68,.04],eye:[30,10],cheek:[54,-12],mouth:[[0,.65,.3],0,"none"],size:.13}},pig:{pitch:165,color:"#eeb2a2",prims:[Ot([0,.36,0],[.38,.36,.33],.12),Ot([0,.56,.05],[.38,.26,.3],.14),Ot([0,.54,.33],[.12,.08,.05],.03),Ot([0,.13,-.03],[.28,.13,.25],.1),...xe(Ot([.27,.79,.12],[.13,.05,.13],.04)),Rn([0,.3,-.33],.07,.05),...xe(Ot([.2,.1,.22],[.12,.1,.12],.08))],patches:[[Ot([0,.54,.38],[.13,.09,.05]),"#e5978a"],[Ot([0,.3,.28],[.24,.2,.1]),"#f6e8d6"]],face:{head:[0,.56,.05],eye:[30,12],cheek:[55,-12],mouth:[[0,.54,.33],0,"pig"],size:.135}},penguin:{pitch:247,color:"#7d8bad",prims:[Ot([0,.45,0],[.36,.45,.32],.12),Ot([0,.76,.03],[.28,.22,.26],.15),Ot([0,.7,.26],[.09,.055,.09],.04),...xe(Ts([.33,.6,0],[.5,.4,.04],.1,.08,.08)),...xe(Ot([.14,.06,.15],[.12,.06,.17],.06))],patches:[...Ii(xe(Ot([.1,.74,.22],[.16,.17,.15])),"#f3ecdf"),[Ot([0,.36,.26],[.26,.28,.12]),"#f3ecdf"],[Ot([0,.7,.3],[.1,.07,.09]),"#e2a43c"],...Ii(xe(Ot([.14,.05,.16],[.14,.07,.19])),"#e2a43c")],face:{head:[0,.76,.03],eye:[28,10],cheek:[55,-14],mouth:[[0,.7,.26],0,"none"],size:.1}},seal:{pitch:196,color:"#cdc8d4",prims:[ka([0,.28,-.38],[0,.34,.1],.28,.1),Rn([0,.62,.3],.26,.12),Ot([0,.55,.5],[.12,.08,.1],.05),...xe(Ts([.06,.2,-.55],[.2,.2,-.8],.11,.09,.06)),...xe(Ts([.25,.28,.1],[.42,.14,.2],.1,.08,.08))],patches:[[Ot([0,.55,.56],[.13,.09,.08]),"#f3ecdf"],...Ii(xe(Ot([.14,.2,-.75],[.15,.1,.14])),"#bdb6c6")],face:{head:[0,.62,.3],eye:[26,18],cheek:[50,-12],mouth:[[0,.55,.5],0,"cat"],size:.1,whiskers:!0}}},Vx=[[0,1],[2,3],[4,5],[6,7],[0,2],[1,3],[4,6],[5,7],[0,4],[1,5],[2,6],[3,7]];function wf(n,t,e,i,s=.004){return[(n(t+s,e,i)-n(t-s,e,i))/(2*s),(n(t,e+s,i)-n(t,e-s,i))/(2*s),(n(t,e,i+s)-n(t,e,i-s))/(2*s)]}function Wx(n,t,e,i){const s=[0,1,2].map(g=>Math.ceil((e[g]-t[g])/i)+1),[r,o,a]=s,c=[1,r,r*o],l=new Float32Array(r*o*a);for(let g=0;g<a;g++)for(let v=0;v<o;v++)for(let m=0;m<r;m++)l[m+r*(v+o*g)]=n(t[0]+m*i,t[1]+v*i,t[2]+g*i);const h=new Int32Array(l.length).fill(-1),u=[],d=new Float32Array(8);for(let g=0;g<a-1;g++)for(let v=0;v<o-1;v++)for(let m=0;m<r-1;m++){let p=0;for(let y=0;y<8;y++){const M=l[m+(y&1)+r*(v+(y>>1&1)+o*(g+(y>>2)))];d[y]=M,M<0&&p++}if(p===0||p===8)continue;let S=0,x=0,_=0,L=0;for(const[y,M]of Vx){const A=d[y],D=d[M];if(A<0==D<0)continue;const U=A/(A-D);S+=(y&1)+U*((M&1)-(y&1)),x+=(y>>1&1)+U*((M>>1&1)-(y>>1&1)),_+=(y>>2)+U*((M>>2)-(y>>2)),L++}let w=t[0]+(m+S/L)*i,R=t[1]+(v+x/L)*i,T=t[2]+(g+_/L)*i;for(let y=0;y<3;y++){const M=n(w,R,T),A=wf(n,w,R,T),D=A[0]*A[0]+A[1]*A[1]+A[2]*A[2];if(D<1e-9)break;w-=A[0]*M/D,R-=A[1]*M/D,T-=A[2]*M/D}h[m+r*(v+o*g)]=u.length/3,u.push(w,R,T)}const f=[];for(let g=0;g<a;g++)for(let v=0;v<o;v++)for(let m=0;m<r;m++){const p=[m,v,g],S=m+r*(v+o*g);for(let x=0;x<3;x++){const _=(x+1)%3,L=(x+2)%3;if(p[x]>=s[x]-1||p[_]<1||p[L]<1||p[_]>s[_]-2||p[L]>s[L]-2)continue;const w=l[S],R=l[S+c[x]];if(w<0==R<0)continue;const T=h[S-c[_]-c[L]],y=h[S-c[L]],M=h[S],A=h[S-c[_]];w<0?f.push(T,y,M,T,M,A):f.push(T,M,y,T,A,M)}}return{pos:new Float32Array(u),index:new Uint32Array(f)}}const Ni=.11;function Xx(n,t,e,i){let s=null,r=-1;for(let o=0;o<3;o++)for(let a=0;a<3;a++)for(let c=0;c<3;c++){const l=[];for(let u=e[0]+o/3*Ni;u<=i[0];u+=Ni)for(let d=e[1]+a/3*Ni;d<=i[1];d+=Ni)for(let f=e[2]+c/3*Ni;f<=i[2];f+=Ni)t(u,d,f)<-.0275&&l.push(u,d,f);let h=0;for(const u of n){let d=0;for(let f=0;f<l.length&&d<3;f+=3)Lo(u,l[f],l[f+1],l[f+2])<-.0275&&d++;h+=d}h>r&&(r=h,s=l)}return new Float32Array(s)}function pr(n,t,e,i){const s=e*Math.PI/180,r=i*Math.PI/180,o=[Math.sin(s)*Math.cos(r),Math.sin(r),Math.cos(s)*Math.cos(r)],a=f=>[t[0]+o[0]*f,t[1]+o[1]*f,t[2]+o[2]*f];let c=0,l=.02;for(;n(...a(l))<0&&l<2;)c=l,l+=.02;for(let f=0;f<24;f++){const g=(c+l)/2;n(...a(g))<0?c=g:l=g}const h=a((c+l)/2),u=wf(n,...h),d=Math.hypot(...u);return{pos:h,normal:u.map(f=>f/d)}}const su=new Map;function qx(n){const t=Tf[n],e=t.prims,i=t.face,s=(_,L,w)=>Gx(e,_,L,w),r=[1e9,1e9,1e9],o=[-1e9,-1e9,-1e9];for(const _ of e){const L=_.t<2?[_.c]:[_.a,_.b],w=_.t===0?_.r:_.t===1?Math.max(..._.r):_.t===2?_.r:Math.max(_.r1,_.r2);for(const R of L)for(let T=0;T<3;T++)r[T]=Math.min(r[T],R[T]-w),o[T]=Math.max(o[T],R[T]+w)}for(let _=0;_<3;_++)r[_]-=.1,o[_]+=.1;const{pos:a,index:c}=Wx(s,r,o,.045),l=Xx(e,s,r,o),[h,u,d]=i.eye,f=_=>d?[_*d[0],d[1],d[2]]:i.head,g=[pr(s,f(-1),-h,u),pr(s,f(1),h,u),pr(s,i.head,-i.cheek[0],i.cheek[1]),pr(s,i.head,i.cheek[0],i.cheek[1]),pr(s,i.mouth[0]??i.head,0,i.mouth[1])],v=new Lt(t.color),m=new Lt,p=new Float32Array(a.length);for(let _=0;_<a.length;_+=3){m.copy(v);for(const[L,w]of t.patches){const R=Lo(L,a[_],a[_+1],a[_+2]),T=Math.min(1,Math.max(0,.5-R/.03));T>0&&m.lerp(new Lt(w),T)}p[_]=m.r,p[_+1]=m.g,p[_+2]=m.b}const S=[0,0,0],x=l.length/3;for(let _=0;_<l.length;_++)S[_%3]+=l[_]/x;for(let _=0;_<l.length;_++)l[_]-=S[_%3];for(let _=0;_<a.length;_++)a[_]-=S[_%3];for(const _ of g)_.pos=_.pos.map((L,w)=>L-S[w]);return{pos:a,index:c,rest:l,anchors:g,col:p,face:i,pitch:t.pitch,color:t.color}}let Yx=null;function Zx(n,{scale:t=1}={}){if(!Tf[n])throw new Error(`unknown species: ${n}`);let e=su.get(n);e||(e=qx(n),su.set(n,e));const i=e.pos.map(o=>o*t),s=new Be;s.setAttribute("position",new De(i,3)),s.setAttribute("color",new De(e.col.slice(),3)),s.setIndex(new De(e.index.slice(),1)),s.computeVertexNormals(),s.setAttribute("fiber",new De(i.slice(),3)),s.setAttribute("fiberN",new De(s.attributes.normal.array.slice(),3));const r=o=>({pos:o.pos.map(a=>a*t),normal:[...o.normal]});return{species:n,geometry:s,rest:e.rest.map(o=>o*t),radius:Ni*t*.5,color:new Lt(e.color),material:Yx??(Yx=Ux()),face:{eyes:[r(e.anchors[0]),r(e.anchors[1])],cheeks:[r(e.anchors[2]),r(e.anchors[3])],mouth:r(e.anchors[4]),size:e.face.size*t,mouthStyle:e.face.mouth[2],whiskers:!!e.face.whiskers},pitch:e.pitch}}/**
 * Procedural 2D Canvas Facial Expression System
 *
 * Renders a 6x4 sprite atlas of eyes, highlights, blush cheeks, whiskers,
 * and mouths onto 3D surface-anchored quads with pupil tracking and blinking.
 *
 * @author Sunil
 * @license MIT
 */const Cn=256,qc=6,Yc=4,jx="#1f1517",Ln="#3b2326",ru="#ff8fab",Af={eyeOpen:[0,0],eyeSurprised:[1,0],eyeSquintL:[2,0],eyeSquintR:[3,0],eyeHappy:[4,0],eyeSleepy:[5,0],eyeDizzy:[0,1],hlIdle:[1,1],hlSurprised:[2,1],cheek:[3,1],mouthHappy:[1,2],mouthSquint:[2,2],mouthSurprised:[3,2],mouthDizzy:[4,2],mouthSleepy:[5,2],mouthBear:[0,3],mouthCat:[1,3],mouthFrog:[2,3],mouthPig:[3,3],cheekWL:[4,3],cheekWR:[5,3]};function nn(n,t,e=jx){n.lineWidth=t,n.strokeStyle=e,n.lineCap="round",n.lineJoin="round",n.stroke()}function ou(n,t){const e=n.createRadialGradient(-t*.3,-t*.3,0,0,0,t);e.addColorStop(0,"#3a2a2c"),e.addColorStop(1,"#120b0c"),n.fillStyle=e,n.beginPath(),n.arc(0,0,t,0,Math.PI*2),n.fill()}function Ga(n){n.save(),n.scale(1,.62);const t=n.createRadialGradient(0,0,0,0,0,70);t.addColorStop(0,"rgba(255,130,150,0.9)"),t.addColorStop(.5,"rgba(255,140,160,0.5)"),t.addColorStop(1,"rgba(255,150,170,0)"),n.fillStyle=t,n.beginPath(),n.arc(0,0,70,0,Math.PI*2),n.fill(),n.restore()}function au(n,t){n.beginPath();for(const e of[-.22,.08])n.moveTo(t*66,-6+e*40),n.lineTo(t*118,-6+e*120);nn(n,6,"#6e5a55")}function _o(n,t,e,i){n.fillStyle="#fff",n.beginPath(),n.arc(t,e,i,0,Math.PI*2),n.fill()}function cu(n,t,e,i){n.beginPath();for(let s=-70;s<=70;s+=3){const r=-t*Math.sin(s/70*Math.PI*e);s===-70?n.moveTo(s,r):n.lineTo(s,r)}nn(n,i,Ln)}function lu(n){n.beginPath(),n.moveTo(-64,-34),n.lineTo(64,-34),n.bezierCurveTo(60,30,30,70,0,70),n.bezierCurveTo(-30,70,-60,30,-64,-34),n.closePath()}const Kx={eyeOpen:n=>ou(n,60),eyeSurprised:n=>ou(n,74),eyeSquintL:n=>{n.beginPath(),n.moveTo(-48,-54),n.lineTo(42,0),n.lineTo(-48,54),nn(n,20)},eyeSquintR:n=>{n.beginPath(),n.moveTo(48,-54),n.lineTo(-42,0),n.lineTo(48,54),nn(n,20)},eyeHappy:n=>{n.beginPath(),n.arc(0,30,50,Math.PI,Math.PI*2),nn(n,18)},eyeSleepy:n=>{n.beginPath(),n.moveTo(-56,-6),n.quadraticCurveTo(0,34,56,-6),nn(n,16)},eyeDizzy:n=>{n.beginPath();for(let t=0;t<=120;t++){const e=t/120,i=e*Math.PI*6.4,s=6+e*84;t?n.lineTo(Math.cos(i)*s,Math.sin(i)*s):n.moveTo(s,0)}nn(n,14)},hlIdle:n=>{_o(n,-20,-22,15),_o(n,18,20,6)},hlSurprised:n=>{_o(n,-26,-28,16),_o(n,22,26,7)},cheek:Ga,cheekWL:n=>{Ga(n),au(n,-1)},cheekWR:n=>{Ga(n),au(n,1)},mouthBear:n=>{n.fillStyle=Ln,n.beginPath(),n.ellipse(0,-22,15,11,0,0,Math.PI*2),n.fill(),n.beginPath(),n.moveTo(0,-14),n.lineTo(0,4),n.moveTo(-30,16),n.quadraticCurveTo(-6,20,0,4),n.quadraticCurveTo(6,20,30,16),nn(n,10,Ln)},mouthCat:n=>{n.beginPath(),n.arc(-18,-4,18,0,Math.PI),n.moveTo(36,-4),n.arc(18,-4,18,0,Math.PI),nn(n,10,Ln)},mouthFrog:n=>{n.beginPath(),n.moveTo(-58,-12),n.quadraticCurveTo(0,34,58,-12),nn(n,9,Ln)},mouthPig:n=>{n.fillStyle="#e4838f";for(const t of[-26,26])n.beginPath(),n.ellipse(t,0,13,20,0,0,Math.PI*2),n.fill()},mouthHappy:n=>{n.save(),lu(n),n.clip(),n.fillStyle=Ln,n.fillRect(-100,-100,200,200),n.fillStyle=ru,n.beginPath(),n.ellipse(0,64,38,28,0,0,Math.PI*2),n.fill(),n.restore(),lu(n),nn(n,16,Ln)},mouthSquint:n=>cu(n,13,2,20),mouthDizzy:n=>cu(n,22,1,20),mouthSurprised:n=>{n.save(),n.beginPath(),n.ellipse(0,0,24,30,0,0,Math.PI*2),n.clip(),n.fillStyle=Ln,n.fillRect(-40,-40,80,80),n.fillStyle=ru,n.beginPath(),n.ellipse(0,28,16,12,0,0,Math.PI*2),n.fill(),n.restore(),n.beginPath(),n.ellipse(0,0,24,30,0,0,Math.PI*2),nn(n,12,Ln)},mouthSleepy:n=>{n.beginPath(),n.moveTo(-24,-4),n.quadraticCurveTo(0,26,24,-4),nn(n,20,Ln)}},Jx=(()=>{const n=document.createElement("canvas");n.width=Cn*qc,n.height=Cn*Yc;const t=n.getContext("2d");for(const[i,[s,r]]of Object.entries(Af))t.save(),t.beginPath(),t.rect(s*Cn,r*Cn,Cn,Cn),t.clip(),t.translate(s*Cn+Cn/2,r*Cn+Cn/2),Kx[i](t),t.restore();const e=new Or(n);return e.colorSpace=Pe,e.premultiplyAlpha=!0,e.anisotropy=8,e.generateMipmaps=!0,e.minFilter=Nn,e.magFilter=sn,e})();function vo(n,t){const[e,i]=Af[t],s=e/qc,r=(e+1)/qc,o=1-i/Yc,a=1-(i+1)/Yc,c=n.geometry.attributes.uv;c.array.set([s,o,r,o,s,a,r,a]),c.needsUpdate=!0}const Va={idle:{eye:()=>"eyeOpen",hl:"hlIdle",mouth:null},surprised:{eye:()=>"eyeSurprised",hl:"hlSurprised",mouth:"mouthSurprised"},squint:{eye:n=>n==="L"?"eyeSquintL":"eyeSquintR",mouth:"mouthSquint"},happy:{eye:()=>"eyeHappy",mouth:"mouthHappy"},dizzy:{eye:()=>"eyeDizzy",mouth:"mouthDizzy"},sleepy:{eye:()=>"eyeSleepy",mouth:null}},Wa=.15,$x=.08,Qx=.6,tM=1.5,hu=1.6,eM=1.5,nM=2.2,iM=new P(0,0,1),Ke=new P,Xe=new P,mr=new P,xo=new P,uu=new ee,Xa=new wn,sM=new wn;function rM(n){const t=n.size??.14,e=new pe;e.visible=!1;const i=n.eyes[0].pos[0]<=n.eyes[1].pos[0]?0:1,s=T=>T===i?"L":"R",r=(T,y,M,A,D)=>{const U=new xi({map:Jx,transparent:!0,depthTest:!0,depthWrite:!1,toneMapped:!1,blending:Uu,blendSrc:Qa,blendDst:wr,blendSrcAlpha:Qa,blendDstAlpha:wr}),H=new Kt(new yi(1,1),U);return H.renderOrder=D,vo(H,y),e.add(H),{mesh:H,anchor:T,base:t*M,offset:A,roll:0}},o=[0,1].map(T=>r(T,"eyeOpen",hu,.03,1001)),a=[0,1].map(T=>r(T,"hlIdle",hu,.0302,1002)),c=[0,1].map(T=>r(2+T,n.whiskers?s(T)==="L"?"cheekWL":"cheekWR":"cheek",nM,.028,1e3)),l=n.mouthStyle??"cat",h={bear:"mouthBear",cat:"mouthCat",frog:"mouthFrog",pig:"mouthPig"}[l],u=r(4,h??"mouthCat",eM,.03,1001);u.mesh.visible=l!=="none";const d=[...o,...a,...c,u],f=[{x:0,y:0},{x:0,y:0}];let g="idle",v=0,m=Wa,p=Math.random()*10,S=-1,x=1+Math.random()*4,_=0,L=null;function w(T){const y=Va[T]??Va.idle;g=Va[T]?T:"idle",o.forEach((M,A)=>vo(M.mesh,y.eye(s(A)))),a.forEach(M=>{M.mesh.visible=!!y.hl,y.hl&&vo(M.mesh,y.hl)}),l!=="none"&&l!=="pig"&&vo(u.mesh,y.mouth??h),m=0}function R(T,y,M,A,D,U,H){const G=T.anchor;Ke.set(M[G*3],M[G*3+1],M[G*3+2]).normalize(),Xe.set(0,1,0).addScaledVector(Ke,-Ke.y),Xe.lengthSq()<.04&&(Xe.set(0,0,1).addScaledVector(Ke,-Ke.z),Xe.lengthSq()<1e-4&&Xe.set(0,1,0)),Xe.normalize(),mr.crossVectors(Xe,Ke),T.mesh.position.set(y[G*3],y[G*3+1],y[G*3+2]).addScaledVector(Ke,T.offset).addScaledVector(mr,A).addScaledVector(Xe,D),uu.makeBasis(mr,Xe,Ke),Xa.setFromRotationMatrix(uu),T.roll&&Xa.multiply(sM.setFromAxisAngle(iM,T.roll)),T.mesh.quaternion.copy(Xa),T.mesh.scale.set(T.base*U,T.base*H,1)}return{object:e,setExpression(T,y=0){T!==g&&w(T),v=T==="idle"?0:y},lookAt(T){L=T?(L??new P).copy(T):null},setBlush(T){_=T<=0?0:Math.max(_,Math.min(1,T))},update(T,y,M){e.visible=!0,p+=M,v>0&&(v-=M)<=0&&(v=0,w("idle")),m=Math.min(Wa,m+M);const A=1+.25*Math.sin(m/Wa*Math.PI);let D=1;if(g==="idle"?S<0&&(x-=M)<=0&&(S=0,x=2+Math.random()*3):S=-1,S>=0){S+=M;const F=S/$x;F>=1?S=-1:D=1-.92*Math.sin(Math.PI*F)}_=Math.max(0,_-M/tM);const U=Math.min(1,Qx+.9*_);for(const F of c)F.mesh.material.opacity=U,F.mesh.material.color.setScalar(U);const H=L&&(g==="idle"||g==="surprised"),G=1-Math.exp(-10*M);for(let F=0;F<2;F++){Ke.set(y[F*3],y[F*3+1],y[F*3+2]).normalize(),Xe.set(0,1,0).addScaledVector(Ke,-Ke.y),Xe.lengthSq()<.04&&Xe.set(0,0,1).addScaledVector(Ke,-Ke.z),Xe.normalize(),mr.crossVectors(Xe,Ke);let X=0,k=0;if(H){xo.set(L.x-T[F*3],L.y-T[F*3+1],L.z-T[F*3+2]);const dt=Math.max(xo.length(),.01);X=xo.dot(mr)/dt*1.6,k=xo.dot(Xe)/dt*1.6;const wt=Math.hypot(X,k);wt>1&&(X/=wt,k/=wt)}f[F].x+=(X-f[F].x)*G,f[F].y+=(k-f[F].y)*G;const J=.15*t,st=g==="dizzy"?(F===i?1:-1)*p*9:0;o[F].roll=st,R(o[F],T,y,f[F].x*J,f[F].y*J,A,A*D),R(a[F],T,y,0,0,A,A*D),R(c[F],T,y,0,0,1,1)}u.roll=g==="squint"||g==="dizzy"?.1*Math.sin(p*22):0,R(u,T,y,0,0,A,A)},dispose(){for(const T of d)T.mesh.geometry.dispose(),T.mesh.material.dispose();e.removeFromParent()}}}/**
 * Procedural WebAudio Sound Synthesizer
 *
 * Generates soft thuds, pentatonic chimes, chirps, stretch creaks, cat purrs,
 * and basket shake sounds in real time with convolution reverb.
 *
 * @author Sunil
 * @license MIT
 */let Pt=null,Hi=null,Zc=null,Qn=0;const Al=12,jc=[0,2,4,7,9],ti=(n,t)=>n+Math.random()*(t-n),Fs=(n,t,e)=>Math.min(e,Math.max(t,n));function Rf(){if(!Pt){const n=window.AudioContext||window.webkitAudioContext;if(!n)return;Pt=new n;const t=Pt.createGain();t.gain.value=.85;const e=Pt.createDynamicsCompressor();e.threshold.value=-20,e.knee.value=24,e.ratio.value=4,e.attack.value=.005,e.release.value=.2,t.connect(e),e.connect(Pt.destination);const i=Math.floor(Pt.sampleRate*.8),s=Pt.createBuffer(2,i,Pt.sampleRate);for(let c=0;c<2;c++){const l=s.getChannelData(c);let h=0;for(let u=0;u<i;u++)h+=(Math.random()*2-1-h)*.35,l[u]=h*(1-u/i)**2.5}const r=Pt.createConvolver();r.buffer=s;const o=Pt.createGain();o.gain.value=.18,Hi=Pt.createGain(),Hi.connect(t),Hi.connect(r),r.connect(o),o.connect(t),Zc=Pt.createBuffer(1,Math.floor(Pt.sampleRate*.5),Pt.sampleRate);const a=Zc.getChannelData(0);for(let c=0;c<a.length;c++)a[c]=Math.random()*2-1}Pt.state!=="running"&&Pt.resume()}function Dr(n){return!Pt||Qn>=Al?!1:(Qn++,setTimeout(()=>{Qn--},n*1e3+80),!0)}function Br(n,t,e,i,s,r=.5){const o=Pt.createBiquadFilter();o.type="lowpass",o.frequency.value=s,o.Q.value=r;const a=Pt.createGain();return a.gain.setValueAtTime(1e-4,n),a.gain.linearRampToValueAtTime(t,n+e),a.gain.exponentialRampToValueAtTime(1e-4,n+i),a.connect(o),o.connect(Hi),a.lp=o,a}function Rl(n,t,e,i){const s=Pt.createOscillator();return s.type=n,s.connect(i),s.start(t),s.stop(e),s}function jo(n,t){const e=Pt.createBufferSource();return e.buffer=Zc,e.loop=!0,e.start(n,ti(0,.3)),t!==void 0&&e.stop(n+t),e}function Ko(n,t,e,i,s,r){const o=Br(n,t,e,i,s);o.lp.frequency.setValueAtTime(s,n),o.lp.frequency.exponentialRampToValueAtTime(r,n+i),jo(n,i+.05).connect(o)}function Cl(n,t,e,i){const s=Br(n,e,.005,i,420),r=Rl("sine",n,n+i+.05,s);r.frequency.setValueAtTime(t*1.5,n),r.frequency.exponentialRampToValueAtTime(t,n+.06)}function Cf(n,t,e,i,s,r,o,a){const c=Br(t,s,r,o,a),l=Rl(n,t,t+o+.05,c);l.frequency.setValueAtTime(e,t),l.frequency.exponentialRampToValueAtTime(i,t+o*.8)}function Pf(n){const t=69+12*Math.log2(Math.max(60,n)/440),e=Math.round(t),i=[],s=[];let r=0;for(let c=e-12;c<=e+12;c++){if(!jc.includes((c%12+12)%12))continue;const l=1/(1+Math.abs(c-t)/5);i.push(c),s.push(l),r+=l}let o=Math.random()*r,a=i[0];for(let c=0;c<i.length;c++)if((o-=s[c])<=0){a=i[c];break}return 440*2**((a-69)/12)}function Pl(n=300,t=.6){if(!Pt)return;const e=Fs(t,0,1);if(!Dr(.35))return;const i=Pt.currentTime;Ko(i,.12+.2*e,.008,.12+.08*e,600+900*e,300+250*e),Cl(i,70+90*Fs((n-165)/275,0,1),.22+.3*e,.14+.1*e);const s=Fs(Pf(n)*2,260,1400),r=Math.random()<.5?1.09:.92;Cf(Math.random()<.5?"sine":"triangle",i+.012,s/r,s*r,.035+.05*e,.01,ti(.06,.12),2200+1800*e)}function Ll(){if(!Dr(.4))return;const n=Pt.currentTime;Cl(n,ti(80,110),.2,.13),Ko(n,.12,.015,.16,1800,800);const t=523.25*2**((jc[Math.floor(Math.random()*jc.length)]+12)/12);Cf("sine",n+.025,t,t,.03,.004,.2,4500)}function Lf(n=300){if(!Dr(.3))return;const t=Pt.currentTime,e=Fs(Pf(n)*2,300,1200),i=ti(.16,.24),s=Br(t,.028,.03,i,3e3),r=Rl("sine",t,t+i+.05,s);r.frequency.setValueAtTime(e*.93,t),r.frequency.exponentialRampToValueAtTime(e*1.07,t+i*.4),r.frequency.exponentialRampToValueAtTime(e*.96,t+i*.95),Ko(t,.012,.02,.1,2200,900)}const Df={set(){},stop(){}};function oM(){if(!Pt||Qn>=Al)return Df;Qn++;const n=Pt.currentTime,t=Pt.createBiquadFilter();t.type="bandpass",t.Q.value=1.2,t.frequency.value=450;const e=Pt.createGain();e.gain.value=.75;const i=Pt.createGain();i.gain.setValueAtTime(1e-4,n),i.gain.linearRampToValueAtTime(.012,n+.08);const s=jo(n);s.connect(t),t.connect(e),e.connect(i),i.connect(Hi);const r=Pt.createOscillator();r.frequency.value=ti(6,9);const o=Pt.createGain();o.gain.value=.25,r.connect(o),o.connect(e.gain),r.start(n);const a=Pt.createBiquadFilter();a.type="lowpass",a.Q.value=2,a.frequency.value=280;const c=Pt.createGain();c.gain.setValueAtTime(1e-4,n),c.gain.linearRampToValueAtTime(.003,n+.1);const l=Pt.createOscillator();l.type="sawtooth",l.frequency.value=55,l.connect(a),a.connect(c),c.connect(Hi),l.start(n);let h=0,u=!1;const d=setInterval(()=>{u||l.frequency.setTargetAtTime((55+40*h)*(1+ti(-.08,.08)),Pt.currentTime,.05)},80);return{set(f){if(u)return;h=Fs(f,0,1);const g=Pt.currentTime;t.frequency.setTargetAtTime(450*4**h,g,.06),i.gain.setTargetAtTime(.012+.07*h,g,.06),c.gain.setTargetAtTime(.003+.012*h,g,.06)},stop(){if(u)return;u=!0,clearInterval(d);const f=Pt.currentTime;for(const g of[i,c])g.gain.cancelScheduledValues(f),g.gain.setTargetAtTime(1e-4,f,.05);s.stop(f+.35),r.stop(f+.35),l.stop(f+.35),setTimeout(()=>{for(const g of[s,t,e,i,r,o,l,a,c])g.disconnect();Qn--},450)}}}function aM(){if(!Pt||Qn>=Al)return Df;Qn++;const n=Pt.currentTime,t=Pt.createGain();t.gain.value=1e-4;const e=Pt.createGain();e.gain.value=.65;const i=Pt.createOscillator();i.frequency.value=1/1.6;const s=Pt.createGain();s.gain.value=.35,i.connect(s),s.connect(e.gain);const r=Pt.createBiquadFilter();r.type="lowpass",r.frequency.value=150,r.Q.value=.7;const o=Pt.createGain();o.gain.value=5;const a=Pt.createGain();a.gain.value=.55;const c=Pt.createOscillator();c.frequency.value=25;const l=Pt.createGain();l.gain.value=.45;const h=Pt.createOscillator();h.frequency.value=.9;const u=Pt.createGain();u.gain.value=1.5,c.connect(l),l.connect(a.gain),h.connect(u),u.connect(c.frequency);const d=jo(n);d.connect(r),r.connect(o),o.connect(a),a.connect(e);const f=Pt.createOscillator();f.frequency.value=50;const g=Pt.createGain();g.gain.value=.35,f.connect(g),g.connect(e),e.connect(t),t.connect(Hi);for(const p of[i,c,h,f])p.start(n);let v=0,m=!1;return{set(p){m||(p=Fs(p,0,1),!(Math.abs(p-v)<.002)&&(v=p,t.gain.setTargetAtTime(1e-4+.2*p,Pt.currentTime,.08)))},stop(){if(m)return;m=!0;const p=Pt.currentTime;t.gain.cancelScheduledValues(p),t.gain.setTargetAtTime(1e-4,p,.1);for(const S of[d,i,c,h,f])S.stop(p+.45);setTimeout(()=>{for(const S of[d,r,o,a,c,l,h,u,i,s,e,f,g,t])S.disconnect();Qn--},550)}}}function Kc(){if(!Pt)return;const n=Pt.currentTime;if(Dr(.9)){const s=Br(n,.16,.25,.75,2200),r=Pt.createBiquadFilter();r.type="bandpass",r.Q.value=.9,r.frequency.setValueAtTime(700,n),r.frequency.exponentialRampToValueAtTime(1800,n+.3),r.frequency.exponentialRampToValueAtTime(900,n+.75),jo(n,.8).connect(r),r.connect(s)}const t=3+Math.floor(Math.random()*3);let e=n+.03;for(let i=0;i<t&&Dr(.3);i++,e+=ti(.07,.16))Cl(e,ti(80,130),ti(.12,.2),.15),Ko(e,.05,.01,.09,700,400)}/**
 * Particle Effects & Dizzy Star Ring
 *
 * Manages pooled 2D canvas sprite particles (hearts, stars, sparkles, wool puffs,
 * and floating sleepy Z's) plus orbiting dizzy stars above stunned animals.
 *
 * @author Sunil
 * @license MIT
 */function gr(n){const t=document.createElement("canvas");t.width=t.height=128;const e=t.getContext("2d");e.translate(64,64),e.lineJoin=e.lineCap="round",n(e);const i=new Or(t);return i.colorSpace=Pe,i}function fu(n,t){n.fillStyle=t,n.fill(),n.lineWidth=7,n.strokeStyle="rgba(255,255,255,0.95)",n.stroke()}const cM=new Lt("#ffffff"),If={heart:gr(n=>{n.beginPath(),n.moveTo(0,40),n.bezierCurveTo(-70,-5,-35,-60,0,-25),n.bezierCurveTo(35,-60,70,-5,0,40),fu(n,"#ff5c8a")}),star:gr(n=>{n.beginPath();for(let t=0;t<10;t++){const e=t%2?22:50,i=-Math.PI/2+t*Math.PI/5;n.lineTo(Math.cos(i)*e,Math.sin(i)*e)}n.closePath(),fu(n,"#ffd23f")}),sparkle:gr(n=>{n.beginPath();for(let t=0;t<8;t++){const e=t%2?9:52,i=t*Math.PI/4;n.lineTo(Math.cos(i)*e,Math.sin(i)*e)}n.closePath(),n.fillStyle="#ffffff",n.fill()}),puff:gr(n=>{const t=n.createRadialGradient(0,0,0,0,0,58);t.addColorStop(0,"rgba(255,250,240,1)"),t.addColorStop(.55,"rgba(250,240,224,0.9)"),t.addColorStop(1,"rgba(250,240,224,0)"),n.fillStyle=t,n.beginPath(),n.arc(0,0,58,0,Math.PI*2),n.fill()}),z:gr(n=>{n.font='bold 96px ui-rounded, "Arial Rounded MT Bold", sans-serif',n.textAlign="center",n.textBaseline="middle",n.lineWidth=10,n.strokeStyle="#ffffff",n.strokeText("z",0,4),n.fillStyle="#7d8cff",n.fillText("z",0,4)})};function lM(n){const t=[],e=[],i=new P;function s(r,o,a,{size:c=.16,life:l=.8,gravity:h=-3,spin:u=0,color:d}={}){const f=e.pop()??new Wo(new Fr({transparent:!0,depthWrite:!1,toneMapped:!1}));return f.material.map=If[r],f.material.color.set(d??"#ffffff"),f.material.rotation=Math.random()*.6-.3,f.material.opacity=1,f.position.copy(o),f.renderOrder=20,f.userData={vel:a.clone(),size:c,life:l,age:0,gravity:h,spin:u},f.scale.setScalar(.001),n.add(f),t.push(f),f}return{burst(r,{count:o=6,kinds:a=["heart","sparkle"],speed:c=2.4,size:l=.26}={}){for(let h=0;h<o;h++){const u=Math.random()*Math.PI*2;i.set(Math.cos(u),1.2+Math.random(),Math.sin(u)).normalize().multiplyScalar(c*(.6+Math.random()*.6));const d=a[h%a.length];s(d,r,i,{size:l*(d==="sparkle"?.8:1)*(.7+Math.random()*.5),life:.6+Math.random()*.4,spin:(Math.random()-.5)*6})}},poof(r,o){const a=new Lt(o).lerp(cM,.6);for(let c=0;c<14;c++){const l=c/14*Math.PI*2+Math.random()*.4;i.set(Math.cos(l),.4+Math.random()*.8,Math.sin(l)).multiplyScalar(1.8+Math.random()*1.4),s("puff",r,i,{size:.42+Math.random()*.24,life:.6+Math.random()*.3,gravity:.6,color:a})}for(let c=0;c<6;c++)i.set(Math.random()-.5,1.2,Math.random()-.5).normalize().multiplyScalar(2.6),s(c%2?"star":"sparkle",r,i,{size:.22,life:.7,spin:(Math.random()-.5)*6})},zzz(r){i.set(.15+Math.random()*.1,.35,0),s("z",r.clone().setY(r.y+.15),i,{size:.2+Math.random()*.08,life:2.2,gravity:0})},update(r){for(let o=t.length-1;o>=0;o--){const a=t[o],c=a.userData;c.age+=r;const l=c.age/c.life;if(l>=1){n.remove(a),t.splice(o,1),e.push(a);continue}c.vel.y+=c.gravity*r,c.vel.multiplyScalar(Math.exp(-r*2.5)),a.position.addScaledVector(c.vel,r),a.material.rotation+=c.spin*r;const h=l<.15?Ee.smootherstep(l/.15,0,1)*1.25:1.25-.25*Math.min(1,(l-.15)/.2);a.scale.setScalar(c.size*h*(1-.3*l)),a.material.opacity=l>.6?1-(l-.6)/.4:1}}}}function hM(n){const t=new pe;for(let e=0;e<3;e++){const i=new Wo(new Fr({map:If.star,transparent:!0,depthWrite:!1,toneMapped:!1}));i.scale.setScalar(.19),i.renderOrder=20,t.add(i)}return t.visible=!1,n.add(t),{update(e,i,s){t.visible=s,s&&(t.position.copy(e),t.children.forEach((r,o)=>{const a=i*5+o*Math.PI*2/3;r.position.set(Math.cos(a)*.4,Math.sin(a*2)*.04,Math.sin(a)*.4)}))},dispose(){t.removeFromParent();for(const e of t.children)e.material.dispose()}}}const _r=new P;function un(n,t,e,i,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;_r.copy(t),_r[i]=0,_r.normalize();const l=.5*o/(o+a),h=1-_r.angleTo(n)/c;return Math.sign(_r[e])===1?h*l:a/(o+a)+l+l*(1-h)}class ei extends Si{constructor(t=1,e=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,i/2,r),super(1,1,1,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new P,c=new P,l=new P(t,e,i).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,g=new P,v=.5/s;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(a.fromArray(h,m),c.copy(a),c.x-=Math.sign(c.x)*v,c.y-=Math.sign(c.y)*v,c.z-=Math.sign(c.z)*v,c.normalize(),h[m+0]=l.x*Math.sign(a.x)+c.x*r,h[m+1]=l.y*Math.sign(a.y)+c.y*r,h[m+2]=l.z*Math.sign(a.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/f)){case 0:g.set(1,0,0),d[p+0]=un(g,c,"z","y",r,i),d[p+1]=1-un(g,c,"y","z",r,e);break;case 1:g.set(-1,0,0),d[p+0]=1-un(g,c,"z","y",r,i),d[p+1]=1-un(g,c,"y","z",r,e);break;case 2:g.set(0,1,0),d[p+0]=1-un(g,c,"x","z",r,t),d[p+1]=un(g,c,"z","x",r,i);break;case 3:g.set(0,-1,0),d[p+0]=1-un(g,c,"x","z",r,t),d[p+1]=1-un(g,c,"z","x",r,i);break;case 4:g.set(0,0,1),d[p+0]=1-un(g,c,"x","y",r,t),d[p+1]=1-un(g,c,"y","x",r,e);break;case 5:g.set(0,0,-1),d[p+0]=un(g,c,"x","y",r,t),d[p+1]=1-un(g,c,"y","x",r,e);break}}}function Uf(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new Be;let l=0;for(let h=0;h<n.length;++h){const u=n[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0;const u=[];for(let d=0;d<n.length;++d){const f=n[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=n[d].attributes.position.count}c.setIndex(u)}for(const h in r){const u=du(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let v=0;v<o[h].length;++v)f.push(o[h][v][d]);const g=du(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function du(n){let t,e,i,s=-1,r=0;for(let l=0;l<n.length;++l){const h=n[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new De(o,e,i);let c=0;for(let l=0;l<n.length;++l){const h=n[l];if(h.isInterleavedBufferAttribute){const u=c/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){const v=h.getComponent(d,g);a.setComponent(d+u,g,v)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}/**
 * Procedural Knitted Yarn Material Generator
 *
 * Synthesizes 512x512 seamless height, ambient occlusion, normal, and roughness
 * maps for stockinette, rib, garter, seed, cable, boucle, and braided strand
 * stitches, with optional stripe, check, and Fair Isle colorwork patterns.
 *
 * @author Sunil
 * @license MIT
 */const Jt=512,yn=Jt*Jt,$e=n=>n&511,Ps=Math.PI*2;function Jo(n,t,e=0){let i=Math.imul(n|0,374761393)+Math.imul(t|0,668265263)+Math.imul(e|0,1440670441)|0;return i=Math.imul(i^i>>>13,1274126177),i^=i>>>16,(i>>>0)/4294967296}function uM(n){let t=n>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const Dl=n=>n<0?0:n>1?1:n,Jc=(n,t,e)=>{const i=Dl((e-n)/(t-n));return i*i*(3-2*i)},Ao=n=>(n=Dl(n),255*(n<=.0031308?n*12.92:1.055*n**(1/2.4)-.055)),fM=n=>n<=.04045?n/12.92:((n+.055)/1.055)**2.4;function qa(n,t,e=1){let i=n;const s=1/(2*t+1);for(let r=0;r<e;r++){const o=new Float32Array(yn),a=new Float32Array(yn);for(let c=0;c<Jt;c++)for(let l=0;l<Jt;l++){let h=0;for(let u=-t;u<=t;u++)h+=i[c*Jt+$e(l+u)];o[c*Jt+l]=h*s}for(let c=0;c<Jt;c++)for(let l=0;l<Jt;l++){let h=0;for(let u=-t;u<=t;u++)h+=o[$e(c+u)*Jt+l];a[c*Jt+l]=h*s}i=a}return i}const $o=()=>({top:new Float32Array(yn),base:new Float32Array(yn),bright:new Float32Array(yn)});function Ys(n,t,e,i,s,r,o={}){const{amp:a=1,plies:c=0,lambda:l=40,phase:h=0,plyDepth:u=.3,taper:d=!0,base:f=!1,bright:g=0,exponent:v=.5}=o,m=i-t,p=s-e,S=m*m+p*p,x=Math.sqrt(S),_=Math.floor(Math.min(t,i)-r)-1,L=Math.ceil(Math.max(t,i)+r)+1,w=Math.floor(Math.min(e,s)-r)-1,R=Math.ceil(Math.max(e,s)+r)+1,T=f?n.base:n.top;for(let y=w;y<=R;y++)for(let M=_;M<=L;M++){const A=M+.5-t,D=y+.5-e,U=S>0?Math.min(1,Math.max(0,(A*m+D*p)/S)):0,H=A-U*m,G=D-U*p,F=Math.sqrt(H*H+G*G)/r;if(F>=1)continue;let X=(1-F*F)**v;if(d&&(X*=.4+.6*Math.sin(Math.PI*U)**.6),c>0){const J=m*D-p*A>=0?1:-1,st=c*Math.asin(F)*J/Ps+U*x/l+h,dt=st-Math.floor(st)-.5,wt=Math.sqrt(Math.max(0,1-4*dt*dt*.96));X*=1-u+u*wt}X*=a;const k=$e(y)*Jt+$e(M);X>T[k]&&(T[k]=X,f||(n.bright[k]=g))}}function Do(n,t,e,i,s,r=1){const o=t*i,a=e*s,c=.21*i;for(const l of[-1,1]){const h=l<0?1:2,u=d=>Jo(t,e,h*10+d)-.5;Ys(n,o+(.5+.07*l+.02*u(0))*i,a-.06*s,o+(.5+.27*l+.02*u(1))*i,a+1.08*s,c,{amp:r*(1+.1*u(2)),plies:3,lambda:.5*s,phase:u(3),bright:u(4)*.08})}}function Il(n,t,e,i,s,r=1){const o=t*i,a=e*s,c=l=>Jo(t,e,50+l)-.5;Ys(n,o+.14*i,a+(.31+.03*c(1))*s,o+.86*i,a+(.34+.03*c(2))*s,.26*s,{amp:r*(1+.1*c(3)),plies:3,lambda:.45*i,phase:c(4),bright:c(5)*.08,taper:!1}),Ys(n,o+.24*i,a+(.8+.02*c(6))*s,o+.76*i,a+(.78+.02*c(7))*s,.15*s,{amp:r*.6,plies:2,lambda:.35*i,phase:c(8),bright:c(5)*.08,taper:!1})}function Qo(n,t,e){const i=$o(),s=Jt/n,r=Jt/t;for(let o=0;o<t;o++)for(let a=0;a<n;a++)e(i,a,o,s,r);return i}const dM=()=>Qo(4,5,(n,t,e,i,s)=>Do(n,t,e,i,s,1)),pM=()=>Qo(4,6,(n,t,e,i,s)=>Il(n,t,e,i,s,1)),mM=()=>Qo(8,8,(n,t,e,i,s)=>{const r=(t+e%2*.5)*i,o=e*s,a=c=>Jo(t,e,70+c)-.5;Ys(n,r+(.24+.04*a(0))*i,o+(.5+.06*a(1))*s,r+(.76+.04*a(2))*i,o+(.5+.06*a(3))*s,.36*s,{amp:1+.12*a(4),plies:3,lambda:.4*i,phase:a(5),bright:a(6)*.08,taper:!1})}),gM=()=>Qo(4,5,(n,t,e,i,s)=>{if(t<2){const r=t*i,o=e*s;Ys(n,r+.5*i,o-.5*s,r+.5*i,o+1.5*s,.78*i,{amp:.5,base:!0,taper:!1,exponent:.35}),Do(n,t,e,i,s,.7)}else Il(n,t,e,i,s,.4)}),Os=8,_M=n=>{const t=(n%Os+Os)%Os;return t<2?0:t<4?Jc(0,1,(t-2)/2):t<6?1:1-Jc(0,1,(t-6)/2)};function vM(){const n=$o(),t=Jt/8,e=Jt/8;for(let i=0;i<2;i++){const s=i*4;Ys(n,(s+1.5)*t,-64,(s+1.5)*t,576,1.4*t,{amp:.5,base:!0,taper:!1,exponent:.35});for(let r=0;r<8;r++){const o=r+.5+i*4,a=_M(o),c=(o%Os+Os)%Os,l=c>=2&&c<4?1:c>=6?-1:0,h=l>0?1.12:l<0?.88:1,u=l<0?1.12:l>0?.88:1,d=.75+1.5*a,f=2.25-1.5*a;for(const g of[-.3,.3])Do(n,s+d+g-.5,r,t,e,h),Do(n,s+f+g-.5,r,t,e,u);Il(n,s+3,r,t,e,.4)}}return n}function xM(){const n=$o();n.base.fill(.1);const t=uM(1337);for(const e of[{count:520,R:[9,18],w:[4,6.5]},{count:1400,R:[4,9],w:[2.2,3.6]}])for(let i=0;i<e.count;i++){const s=t()*Jt,r=t()*Jt,o=e.R[0]+t()*(e.R[1]-e.R[0]),a=e.w[0]+t()*(e.w[1]-e.w[0]),c=(1.1+.9*t())*Math.PI,l=t()*Ps,h=.45+.55*t(),u=(t()-.5)*.08,d=Math.ceil(o+a)+1;for(let f=Math.floor(r)-d;f<=Math.floor(r)+d;f++)for(let g=Math.floor(s)-d;g<=Math.floor(s)+d;g++){const v=g+.5-s,m=f+.5-r,p=Math.abs(Math.hypot(v,m)-o)/a;if(p>=1)continue;const S=((Math.atan2(m,v)-l)%Ps+Ps)%Ps/c;if(S>1)continue;const x=Math.sqrt(1-p*p)*(.35+.65*Math.sin(Math.PI*S))*h,_=$e(f)*Jt+$e(g);x>n.top[_]&&(n.top[_]=x,n.bright[_]=u)}}return n}function MM(){const n=$o();n.base.fill(.08);for(let t=0;t<Jt;t++){const e=t/Jt;for(let i=0;i<Jt;i++){const s=i/Jt;let r=0,o=0;for(let c=0;c<3;c++){let l=e-c/3-2*s;l-=Math.floor(l+.5);const h=l/(.52/3);if(Math.abs(h)>=1)continue;const u=Math.sqrt(1-h*h)*(.96+.04*Math.sin(Ps*3.5*h));u>r&&(r=u,o=(Jo(c,0,5)-.5)*.08)}const a=t*Jt+i;n.top[a]=r,n.bright[a]=o}}return n}function Ya(n,t){const e=new _l(n,Jt,Jt,rn,Tn);return e.colorSpace=t,e.wrapS=e.wrapT=Hs,e.minFilter=Nn,e.magFilter=sn,e.generateMipmaps=!0,e.anisotropy=8,e.flipY=!1,e.needsUpdate=!0,e}function yM(n,t){const e=new Float32Array(yn);let i=1e-6;for(let h=0;h<yn;h++)e[h]=n.top[h]+n.base[h],e[h]>i&&(i=e[h]);for(let h=0;h<yn;h++)e[h]/=i;const s=qa(e,1,1),r=qa(s,t.aoRadius,2),o=qa(n.bright,2,1),a=new Uint8Array(yn*4),c=new Uint8Array(yn*4),l=new Uint8Array(yn*4);for(let h=0;h<Jt;h++)for(let u=0;u<Jt;u++){const d=h*Jt+u,f=(s[h*Jt+$e(u+1)]-s[h*Jt+$e(u-1)])*.5,g=(s[$e(h+1)*Jt+u]-s[$e(h-1)*Jt+u])*.5;let v=-f*t.slope,m=-g*t.slope;const p=1/Math.sqrt(v*v+m*m+1);v*=p,m*=p;const S=p,x=d*4;a[x]=(v*.5+.5)*255,a[x+1]=(m*.5+.5)*255,a[x+2]=(S*.5+.5)*255,a[x+3]=255;const _=Dl((r[d]-s[d])*t.aoGain),L=.38+.62*Jc(0,.45,s[d]),w=Ao(Math.max(.35,L*(1-.4*_))*(1+o[d]));c[x]=c[x+1]=c[x+2]=w,c[x+3]=255;const R=255*(1-.12*s[d]);l[x]=l[x+1]=l[x+2]=R,l[x+3]=255}return{map:Ya(c,Pe),normalMap:Ya(a,""),roughnessMap:Ya(l,"")}}const SM={stockinette:{build:dM,slope:14,aoRadius:9,aoGain:3,normalScale:1.5},rib:{build:gM,slope:14,aoRadius:12,aoGain:3,normalScale:1.5},garter:{build:pM,slope:14,aoRadius:9,aoGain:3,normalScale:1.5},seed:{build:mM,slope:16,aoRadius:6,aoGain:3,normalScale:1.4},cable:{build:vM,slope:14,aoRadius:10,aoGain:3,normalScale:1.5},boucle:{build:xM,slope:20,aoRadius:8,aoGain:3.5,normalScale:1.8},strand:{build:MM,slope:34,aoRadius:10,aoGain:3,normalScale:1.6}},pu=new Map;function Nf(n){const t=SM[n];if(!t)throw new Error(`yarnMaterial: unknown stitch "${n}"`);return t}function Ff(n){let t=pu.get(n);if(!t){const e=Nf(n);t=yM(e.build(),e),pu.set(n,t)}return t}function EM(n){const t={};return n.getHSL(t),new Lt().setHSL(t.h,t.s*.7,t.l+(1-t.l)*.4)}const Of={stockinette:[4,5],rib:[4,5],garter:[4,6],seed:[8,8],cable:[8,8]},Pn=1024,Io=4,mu=[["...#....","..###...",".#####..","#######.",".#####..","..###...","...#...."],["........",".##.##..","#######.","#######.",".#####..","..###...","...#...."],["...#....","..###...",".#####..","..###...",".#####..","#######.","...#...."]];function gu(n,t,e=1){let i=n;for(let s=e;s<=n;s++){if(n%s)continue;const r=Math.abs(s-t),o=Math.abs(i-t);(r<o||r===o&&s>i)&&(i=s)}return i}function bM(n,t){const[e,i]=Of[n],s=e*Io,r=i*Io,o=new Uint8Array(s*r);if(t==="stripe"){const a=gu(r,6),c=Math.max(1,Math.round(a*.4));for(let l=0;l<r;l++)l%a<c&&o.fill(1,l*s,(l+1)*s)}else if(t==="check"){let a=1;for(const l of[5,4,6,3,2])if(r%l===0&&r/l%2===0){a=l;break}const c=[1,2,0];for(let l=0;l<r;l++)for(let h=0;h<s;h++){const u=(h/4|0)&1,d=(l/a|0)&1;o[l*s+h]=c[u+d]}}else if(t==="fairisle"){const a=gu(r,10,8);for(let c=0;c<r;c++){const l=c%a;if(l>=7)continue;const h=c/a|0;for(let u=0;u<s;u++)mu[(h+(u/8|0))%mu.length][l][u%8]==="#"&&(o[c*s+u]=1)}}else throw new Error(`yarnMaterial: unknown pattern "${t}"`);return{tones:o,gw:s,gh:r}}const _u=new Map;function TM(n,t,e,i){const s=`${n}|${t}|${e.getHexString()}|${i.getHexString()}`;let r=_u.get(s);if(r)return r;const{tones:o,gw:a,gh:c}=bM(n,t),l=[e,i,e.clone().lerp(i,.5)],h=new Uint8Array(2304);for(let p=0;p<3;p++)for(let S=0;S<256;S++){const x=fM(S/255),_=(p*256+S)*3;h[_]=Ao(l[p].r*x)+.5,h[_+1]=Ao(l[p].g*x)+.5,h[_+2]=Ao(l[p].b*x)+.5}const u=Ff(n).map.image.data,d=new Uint8Array(Pn*Pn*4),f=Pn/a,g=Pn/c,v=n==="seed",m=Io*Jt/Pn;for(let p=0;p<Pn;p++){const S=Math.min(c-1,Math.floor(p/g)),x=v&&S&1?.5:0,_=$e(p*m),L=$e(p*m+1);for(let w=0;w<Pn;w++){const R=(Math.floor(w/f-x)%a+a)%a,T=$e(w*m),y=$e(w*m+1),M=u[(_*Jt+T)*4]+u[(_*Jt+y)*4]+u[(L*Jt+T)*4]+u[(L*Jt+y)*4]>>2,A=(o[S*a+R]*256+M)*3,D=(p*Pn+w)*4;d[D]=h[A],d[D+1]=h[A+1],d[D+2]=h[A+2],d[D+3]=255}}return r=new _l(d,Pn,Pn,rn,Tn),r.colorSpace=Pe,r.wrapS=r.wrapT=Hs,r.minFilter=Nn,r.magFilter=sn,r.generateMipmaps=!0,r.anisotropy=8,r.flipY=!1,r.needsUpdate=!0,_u.set(s,r),r}function Ir({color:n,color2:t,pattern:e,stitch:i="stockinette",repeat:s=[8,8],sheen:r=1,roughness:o=.9}={}){const a=Nf(i),c=Ff(i),l=new Lt(n??16777215);let h=c.map,u=1,d=l,f=l;if(e){if(!Of[i])throw new Error(`yarnMaterial: stitch "${i}" has no colorwork grid`);const v=new Lt(t??16777215);h=TM(i,e,l,v),u=Io,d=new Lt(16777215),f=l.clone().lerp(v,.5)}const g=(v,m=1)=>{const p=v.clone();return p.repeat.set(s[0]/m,s[1]/m),p};return new Mf({color:d,map:g(h,u),normalMap:g(c.normalMap),normalScale:new it(a.normalScale,a.normalScale),roughnessMap:g(c.roughnessMap),roughness:o,metalness:0,sheen:r,sheenRoughness:.5,sheenColor:EM(f)})}/**
 * Cozy Room Environment, Day/Night Tabletop Props & Knitted Basket
 *
 * Builds the wooden table, plastered window wall with day/night sky backdrop,
 * sunlit window gobo projection, and handcrafted knitted props (potted plant,
 * yarn balls & needles, checkered cloth, coaster, daytime flower mug with steam,
 * nighttime bear mug with marshmallows, floor lamp, books, flickering candle,
 * and the central knitted basket).
 *
 * @author Sunil
 * @license MIT
 */const Ul=-.16,Mo=-5.2,vu=5,ce={x0:-2.5,x1:4.5,y0:.35,y1:6.5},zf=n=>{const t=document.createElement("canvas");return t.width=t.height=n,t};function wM(n){const t=zf(512),e=t.getContext("2d");e.fillStyle="#efe2cf",e.fillRect(0,0,512,512);for(let o=0;o<40;o++){const a=50+Math.random()*412,c=50+Math.random()*412,l=30+Math.random()*20,h=e.createRadialGradient(a,c,0,a,c,l);h.addColorStop(0,o%2?"rgba(255,255,255,0.05)":"rgba(150,110,70,0.04)"),h.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=h,e.fillRect(a-l,c-l,l*2,l*2)}const i=e.getImageData(0,0,512,512),s=i.data;for(let o=0;o<s.length;o+=4){const a=(Math.random()-.5)*14;s[o]+=a,s[o+1]+=a,s[o+2]+=a}e.putImageData(i,0,0);const r=new Or(t);return r.colorSpace=Pe,r.wrapS=r.wrapT=Hs,r.repeat.set(1/6,1/6),r.anisotropy=n.capabilities.getMaxAnisotropy(),r}function AM(){const n=zf(512),t=n.getContext("2d");t.fillStyle="#000",t.fillRect(0,0,512,512);const e=61.44,i=(512-e*2-25.6)/2;for(const r of[0,1])for(const o of[0,1]){const a=e+r*207.36,c=e+o*207.36;for(let l=10;l>=0;l--){const h=(l-5)*1.6;t.fillStyle="rgba(255,246,232,0.22)",t.fillRect(a-h,c-h,i+h*2,i+h*2)}}for(let r=0;r<18;r++){const o=e+Math.random()*(512-e*2),a=e+Math.random()*(512-e*2),c=18+Math.random()*24,l=t.createRadialGradient(o,a,0,o,a,c);l.addColorStop(0,"rgba(0,0,0,0.14)"),l.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=l,t.fillRect(o-c,a-c,c*2,c*2)}const s=new Or(n);return s.colorSpace=Pe,s}function RM({scene:n,renderer:t}){const e=new pe;n.add(e);const i=new ex,s=k=>{const J=i.load(`./tex/${k}.jpg`);return J.colorSpace=Pe,J.anisotropy=t.capabilities.getMaxAnisotropy(),J},r=10.5,o=.3,a=new ei(20,o,r,4,.06),c=a.attributes.position,l=a.attributes.uv;for(let k=0;k<c.count;k++)l.setXY(k,(c.getX(k)+10)/20,1-(c.getZ(k)+r/2)/r);const h=new Kt(a,new On({map:s("wood"),roughness:.55}));h.position.set(0,Ul-o/2,.25),h.receiveShadow=!0,e.add(h);const u=new Kt(new yi(60,60),new On({color:"#7d6650",roughness:1}));u.rotation.x=-Math.PI/2,u.position.y=-3.5,e.add(u);const d=new gf;d.moveTo(-16,-3.5),d.lineTo(16,-3.5),d.lineTo(16,9),d.lineTo(-16,9),d.closePath();const f=new Gc;f.moveTo(ce.x0,ce.y0),f.lineTo(ce.x0,ce.y1),f.lineTo(ce.x1,ce.y1),f.lineTo(ce.x1,ce.y0),f.closePath(),d.holes.push(f);const g=new Kt(new Sl(d),new On({map:wM(t),roughness:.95}));g.position.z=Mo,g.receiveShadow=!0,e.add(g);const v=new On({color:"#f3eee4",roughness:.55}),m=(k,J,st,dt,wt,Ht)=>{const q=new Kt(new ei(k,J,st,2,.025),v);q.position.set(dt,wt,Ht),e.add(q)},p=(ce.x0+ce.x1)/2,S=.4,x=.4,_=ce.y1+x/2-ce.y0,L=(ce.y0+ce.y1+x/2)/2;m(ce.x1-ce.x0+.6,.12,.75,p,ce.y0-.06,-5.325),m(S,_,.4,ce.x0,L,Mo),m(S,_,.4,ce.x1,L,Mo),m(ce.x1-ce.x0+.4,x,.4,p,ce.y1,Mo);const w=ce.y1-x/2-ce.y0,R=ce.y0+w/2;m(.14,w,.12,p,R,-5.25),m(ce.x1-ce.x0-S,.14,.12,p,R,-5.25);const T=(k,J,st)=>{const dt=new Kt(new yi(16,11),new xi({map:s(k),toneMapped:!1,transparent:st}));return dt.position.set(p,(ce.y0+ce.y1)/2,J),e.add(dt),dt};T("outside-night",-6.6,!1);const y=T("outside-day",-6.5,!0),M=new yf("#ffe2b8",vu,0,.27,.05,0);M.position.set(-3,11,-15),M.target.position.set(.5,0,.5),M.map=AM(),M.castShadow=!0,M.shadow.mapSize.set(2048,2048),M.shadow.bias=-8e-4,M.shadow.normalBias=.06,M.shadow.radius=3,M.shadow.camera.near=12,M.shadow.camera.far=32,e.add(M,M.target);const A=new nx,D=new Zh("#9db4e8",0);D.position.set(1,6,-10);const U=new Zh("#ffb27a",0);U.position.set(-2,4,9),e.add(A,D,U);const H=new Lt;n.background=H;const G={sky:new Lt("#fde8d2"),ground:new Lt("#8a6a52"),bg:new Lt("#f1dcc4"),hemi:.6,env:.25},F={sky:new Lt("#3a4a7a"),ground:new Lt("#1d1712"),bg:new Lt("#141a2e"),hemi:.25,env:.08};function X(k){const J=Ee.clamp(k,0,1);M.intensity=vu*(1-J),M.castShadow=M.intensity>.001,A.color.lerpColors(G.sky,F.sky,J),A.groundColor.lerpColors(G.ground,F.ground,J),A.intensity=Ee.lerp(G.hemi,F.hemi,J),D.intensity=.25*J,U.intensity=.45*J,H.lerpColors(G.bg,F.bg,J),n.environmentIntensity=Ee.lerp(G.env,F.env,J),y.material.opacity=1-J,y.visible=J<1}return X(0),{group:e,sun:M,setTime:X}}const an=Math.PI*2,CM=40,PM=3,LM=2.2,DM=Ee.smoothstep;let Bf=4;function Uo(n){let t=n>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function kf(n,t,e){const i=document.createElement("canvas");return i.width=n,i.height=t,e==null||e(i.getContext("2d"),n,t),i}function Hf(n){const t=new Or(n);return t.colorSpace=Pe,t.anisotropy=Bf,t}function fe(n,t,e,i=0,s=0,r=0){const o=new Kt(t,e);return o.position.set(i,s,r),o.castShadow=o.receiveShadow=!0,n.add(o),o}function kr(n,t,e,i=0){return n.position.set(t,Ul,e),n.rotation.y=i,n}function ta(n,t=120){const e=new Ml(n.map(([o,a])=>new it(o,a))),i=e.getSpacedPoints(t),s=i.reduce((o,a,c)=>a.y>i[o].y?c:o,0),r=i.slice(0,s+1);return{geo:new yl(i,64),len:e.getLength(),radiusAt:o=>{const a=r.findIndex(h=>h.y>=o);if(a<=0)return r[0].x;const c=r[a-1],l=r[a];return c.x+(l.x-c.x)*(o-c.y)/(l.y-c.y||1)}}}const xu=new Map;function we(n,t,e,i,s){const r=`${n}|${t}|${e}|${i??""}|${s??""}`;let o=xu.get(r);return o||(o=Ir({color:n,color2:i,pattern:s,stitch:t,repeat:e}),xu.set(r,o)),o}const Ur=(n,t)=>Math.max(t,Math.round(n/t)*t),IM=n=>[Ur(an*n/.4,4),Ur(Math.PI*n/.5,2)],Qs=(n,t=8)=>[Ur(n/.4,t),1],Gf={stockinette:[4,5],rib:[4,5],garter:[4,6],seed:[8,8],cable:[8,8],boucle:[7,7]},$i=(n,t,e)=>{const[i,s]=Gf[n];return[Math.max(1,Math.round(t/(i*.075))),Math.max(1,Math.round(e/(s*.065)))]};function Yi(n,t,e,i,s=!1){const r=t.getLength();return fe(n,new $s(t,Math.max(24,Math.round(r/.035)),e,8,s),we(i,"strand",Qs(r*.035/e,2)))}function Zi(n,t,e,i,s){const r=fe(n,new zr(t,i,10,64),we(s,"strand",Qs(an*t*.035/i,2)));return r.rotation.x=Math.PI/2,r.position.y=e,r}function ea(n,t,e,i,s){const o=t-e,a=(o-.02)/(e*1.8),c=Math.ceil(a*36),l=[];for(let u=0;u<=c;u++){const d=u/c*a*an,f=.02+(o-.02)*u/c;l.push(new P(Math.cos(d)*f,0,Math.sin(d)*f))}Yi(n,new ni(l),e,i).position.y=s;const h=fe(n,new qo(t-.01,40),we(i,"stockinette",$i("stockinette",2*t,2*t)),0,s-e*.4,0);h.rotation.x=-Math.PI/2}const UM=new qi(1,16,12);function zi(n,t,e,i,s,r,o=r,a=r){const c=fe(n,UM,t,e,i,s);return c.scale.set(r,o,a),c}const Mu=new On({color:"#1c1210",roughness:.25});function NM(){return Hf(kf(128,128,n=>{const t=n.createRadialGradient(64,64,0,64,64,64);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.35,"rgba(255,255,255,0.45)"),t.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=t,n.fillRect(0,0,128,128)}))}const Ls=64,Za=8,$c=.12,jn=.2,Vf=Array.from({length:Ls},(n,t)=>{const e=t/Ls*an,i=13*Math.cos(e)-5*Math.cos(2*e)-2*Math.cos(3*e)-Math.cos(4*e);return[.5*Math.sin(e)**3,(12-i)*1.1/32-.2406]}),No=(n,t)=>-.6*n*n-.3*t*t;function yu(n,t){const e=[0,jn,No(0,jn)+t*$c],i=[0,jn*n];for(let c=1;c<=Za;c++){const l=c/Za,h=$c*Math.sqrt(1-l*l);for(const[u,d]of Vf){const f=u*l,g=jn+(d-jn)*l;e.push(f,g,No(f,g)+t*h),i.push(f*n,g*n)}}const s=[],r=(c,l)=>1+(c-1)*Ls+l%Ls,o=(c,l,h)=>t>0?s.push(c,l,h):s.push(c,h,l);for(let c=0;c<Ls;c++)o(0,r(1,c),r(1,c+1));for(let c=2;c<=Za;c++)for(let l=0;l<Ls;l++)o(r(c-1,l),r(c,l),r(c,l+1)),o(r(c-1,l),r(c,l+1),r(c-1,l+1));const a=new Be;return a.setAttribute("position",new oe(e,3)),a.setAttribute("uv",new oe(i,2)),a.setIndex(s),a.computeVertexNormals(),a}const FM=[{color:"#6aad4f",stitch:"seed"},{color:"#4a9446",stitch:"seed"},{color:"#3a7f44",stitch:"garter"},{color:"#4f9a46",stitch:"seed",color2:"#d8e48e",pattern:"stripe"}],Su=[0,1,0,2,1,3,0,2,1,0,3,2],Eu="#2e6a3a";function OM(n,t,e,i){const[s,r]=Gf[i.stitch],o=we(i.color,i.stitch,[1/(s*.075),1/(r*.065)],i.color2,i.pattern);fe(n,Uf([yu(e,1),yu(e,-1)]).applyMatrix4(t),o);const a=(l,h,u)=>new P(l,h,u).applyMatrix4(t);Yi(n,new ni(Vf.map(([l,h])=>a(l,h,No(l,h))),!0),.03,Eu,!0);const c=[];for(let l=0;l<=8;l++){const h=.02+.62*l/8,u=h<jn?(jn-h)/jn:(h-jn)/.556;c.push(a(0,h,No(0,h)+$c*Math.sqrt(1-u*u)))}Yi(n,new ni(c),.022,Eu)}function zM(){const n=Uo(11),t=kr(new pe,-2.9,-3.9),e="#d8c7a0",i=ta([[.001,0],[.36,0],[.4,.03],[.5,.3],[.58,.62],[.62,.8],[.665,.84],[.67,.88],[.645,.9],[.615,.88],[.585,.82],[.52,.6],[.001,.55]],100);fe(t,i.geo,we(e,"stockinette",$i("stockinette",an*.55,i.len))),Zi(t,.64,.86,.06,e),Zi(t,.395,.05,.05,e);const s=fe(t,new qo(.58,40),we("#4a3224","boucle",[3,3]),0,.74,0);s.rotation.x=-Math.PI/2;const r=(h,u,d)=>new P(h,u,d),o=[],a=[[.72,1],[.68,1],[.7,1],[1],[1],[1]];for(let h=0;h<6;h++){const u=h/6*an+n()*.5,d=Math.cos(u),f=Math.sin(u),g=1.35+n()*.45;o.push(new ni([r(d*.15,.72,f*.15),r(d*.2,1.2,f*.2),r(d*(.45+n()*.15),g*.85+.1,f*(.45+n()*.15)),r(d*(.8+n()*.25),g,f*(.8+n()*.25)),r(d*(1.1+n()*.2),g-.2,f*(1.1+n()*.2))]))}for(const[h,u]of[[Math.PI*.9,[.55,.98]],[Math.PI*.6,[.98]]]){const d=Math.cos(h),f=Math.sin(h),g=-f*.25,v=d*.25;o.push(new ni([r(d*.15,.72,f*.15),r(d*.45,1.05,f*.45),r(d*.8,1,f*.8),r(d*.9,.55,f*.9),r(d*.9+g*.4,.15,f*.9+v*.4),r(d*1+g,.03,f*1+v)])),a.push(u)}const c=r(0,1,0);let l=0;return o.forEach((h,u)=>{Yi(t,h,.035,"#5b9442");for(const d of a[u]){const f=h.getPoint(d),g=h.getTangent(d),v=r(f.x,0,f.z).normalize(),m=r().addScaledVector(g,.45).addScaledVector(v,.85).addScaledVector(c,.15).add(r(n()-.5,n()-.5,n()-.5).multiplyScalar(.5)).normalize(),p=r().crossVectors(m,c);p.lengthSq()<1e-4&&p.set(1,0,0),p.normalize();const S=r().crossVectors(p,m),x=(n()-.5)*.9,_=Math.cos(x),L=Math.sin(x),w=p.clone().multiplyScalar(_).addScaledVector(S,L),R=S.clone().multiplyScalar(_).addScaledVector(p,-L),T=.62+n()*.22,y=new ee().makeBasis(w.multiplyScalar(T),m.clone().multiplyScalar(T),R.multiplyScalar(T));y.setPosition(f),OM(t,y,T,FM[Su[l++%Su.length]])}}),t}function bu(n,t,e,i){const s=new pe;fe(s,new qi(n-.03,32,22),we(t,"stockinette",IM(n-.03)));const r=e.map(()=>[]),o=n/.55*.032;for(let a=0;a<50;a++){const c=new P(i()*2-1,i()*2-1,i()*2-1).normalize(),l=Math.abs(c.y)<.9?new P(0,1,0):new P(1,0,0),h=new P().crossVectors(c,l).normalize(),u=new P().crossVectors(c,h),d=n-.02+(i()-.5)*.04,f=Math.PI*(1.5+i()*.4),g=i()*an,v=(i()-.5)*.6*d,m=(i()-.5)*.7*d,p=[];for(let S=0;S<=40;S++){const x=S/40,_=g+x*f,L=Ee.clamp(v+m*x,-.85*d,.85*d),w=Math.sqrt(d*d-L*L);p.push(new P().addScaledVector(h,Math.cos(_)*w).addScaledVector(u,Math.sin(_)*w).addScaledVector(c,L))}r[a%e.length].push(new $s(new ni(p),64,o,6,!1))}return r.forEach((a,c)=>{fe(s,Uf(a),we(e[c],"strand",Qs(n*5.3))),a.forEach(l=>l.dispose())}),s}const Tu=new On({color:"#dfb883",roughness:.5});function BM(n,t){const e=new qs(.034,.016,2.2,10),i=new qi(.085,16,12),s=new P(0,1,0);for(const[r,o]of[[[.2,.9,.1],[-.5,.85,.15]],[[.5,.8,.3],[.1,.9,.35]]]){const a=new P(...o).normalize(),c=new pe;c.position.set(...r).normalize().multiplyScalar(t).addScaledVector(a,.75),c.quaternion.setFromUnitVectors(s,a),fe(c,e,Tu),fe(c,i,Tu,0,1.12,0),n.add(c)}}function kM(){const n=new pe,t=bu(.55,"#c97b84",["#e9a0a0","#dd8f94","#f0b4ae"],Uo(21));t.position.set(4.3,.3625,-.4),BM(t,.55),n.add(t);const e=bu(.5,"#cdbb9d",["#efe4d0","#f6ecdb","#e3d4ba"],Uo(22));e.position.set(4.6,.315,.95),n.add(e);const i=-.125,s=new ni([new P(4.38,.04,1.36),new P(4.22,-.085,1.62),new P(4.42,i,1.92),new P(4.12,i,2.2),new P(4.3,i,2.42)]);return fe(n,new $s(s,80,.035,6),we("#efe4d0","strand",Qs(s.getLength(),4))),n}function HM(){const n=kr(new pe,4,3,Ee.degToRad(-20)),t=we("#efe4d0","garter",[8,1]),e=(i,s,r,o,a,c)=>{const l=we("#efe4d0","stockinette",[Ur(i/.3,4),Ur(s/.3,4)],"#d98f86","check"),h=fe(n,new ei(i,.09,s,4,.04),[t,t,l,t,t,t],r,o,a);h.rotation.y=c};return e(1.6,1.1,0,.045,0,0),e(1.5,.95,.05,.135,-.07,.05),Yi(n,new Xo(new P(-.68,.1,.42),new P(.78,.1,.42)),.075,"#d98f86"),n}function GM(){const n=kr(new pe,-4.3,.9);return ea(n,.63,.06,"#efe4d0",.06),Zi(n,.66,.07,.07,"#efe4d0"),n}function Wf(n,{color:t,rim:e,base:i,handle:s}){const{geo:r,len:o,radiusAt:a}=ta(n),c=new pe;fe(c,r,we(t,"stockinette",$i("stockinette",an*.5,o))),Zi(c,e[0],e[1],.06,t),Zi(c,i[0],i[1],.05,t);const l=Math.PI*1.1,h=.065,u=fe(c,new zr(s.r,h,12,36,l),we(t,"strand",Qs(l*s.r*.035/h,2)),s.x,s.y,0);return u.rotation.z=Math.PI-l/2,{group:c,radiusAt:a}}function Xf(n,t,e,i){const s=(n.radiusAt(i+.03)-n.radiusAt(i-.03))/.06,r=n.radiusAt(i)+.015,o=t.clone();o.position.set(Math.cos(e)*r,i,Math.sin(e)*r),o.rotation.order="YXZ",o.rotation.set(Math.atan(s),Math.PI/2-e,0),n.group.add(o)}function VM(){const n=new pe,t=we("#c4683c","stockinette",[2,1]),e=we("#e2a53c","stockinette",[1,1]);for(let i=0;i<5;i++){const s=i/5*an;zi(n,t,Math.cos(s)*.085,Math.sin(s)*.085,.02,.07,.07,.04)}return zi(n,e,0,0,.04,.045,.045,.04),n}function WM(){const n=new pe,t=we("#8a5638","stockinette",[3,2]),e=we("#8a5638","stockinette",[1,1]),i=we("#e8cfa8","stockinette",[1,1]);for(const s of[-1,1])zi(n,e,s*.075,.075,.01,.045,.045,.03),zi(n,Mu,s*.035,.015,.078,.015);return zi(n,t,0,0,.03,.1,.092,.055),zi(n,i,0,-.03,.065,.045,.036,.03),zi(n,Mu,0,-.018,.093,.016,.012,.012),n}function XM(n){const t=Hf(kf(128,128,i=>{const s=(r,o,a,c)=>{const l=i.createRadialGradient(r,o,0,r,o,a);l.addColorStop(0,`rgba(255,255,255,${c})`),l.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=l,i.fillRect(0,0,128,128)};s(64,64,50,.7),s(46,52,28,.5),s(82,74,30,.5)})),e=[];for(let i=0;i<5;i++){const s=new Wo(new Fr({map:t,transparent:!0,depthWrite:!1,opacity:0,rotation:i*1.3}));s.renderOrder=5,n.add(s),e.push(s)}return e}const qf=Ee.degToRad(40);function qM(){const n=new pe;n.position.set(-4.3,-.06,.9);const t=Wf([[.001,0],[.26,0],[.33,.04],[.44,.18],[.5,.38],[.515,.6],[.505,.8],[.495,.88],[.47,.92],[.44,.88],[.45,.7],[.44,.4],[.36,.18],[.001,.14]],{color:"#efe4d0",rim:[.495,.88],base:[.33,.04],handle:{r:.2,x:-.5,y:.48}});t.group.rotation.y=qf,n.add(t.group);const e=VM();for(const[i,s]of[[25,.45],[70,.62],[115,.45],[300,.6]])Xf(t,e,Ee.degToRad(i),s);return ea(t.group,.435,.045,"#9a5424",.76),{group:n,steam:XM(n)}}function YM(){const n=new pe;n.position.set(-4.3,-.06,.9);const t=Wf([[.001,0],[.4,0],[.47,.05],[.5,.3],[.51,.75],[.52,1],[.525,1.04],[.5,1.08],[.46,1.04],[.45,.8],[.44,.3],[.4,.15],[.001,.13]],{color:"#efe4d0",rim:[.49,1.04],base:[.455,.055],handle:{r:.25,x:-.47,y:.55}});t.group.rotation.y=qf,n.add(t.group);const e=WM();for(const o of[30,95,300])Xf(t,e,Ee.degToRad(o),.55);ea(t.group,.44,.05,"#6a3a22",.88);const i=new ei(.21,.15,.21,3,.06),s=we("#fff6ea","stockinette",$i("stockinette",.21,.15)),r=Uo(41);for(const[o,a]of[[-.17,.1],[.15,.15],[-.02,-.15],[.22,-.1]])fe(t.group,i,s,o,.98,a).rotation.set((r()-.5)*.4,r()*an,(r()-.5)*.4);return n}function ZM(){const n=new pe,t=new On({color:"#a8703f",roughness:.55}),e=-2.2,i=2.75,s=fe(n,ta([[.001,0],[.5,0],[.55,.03],[.55,.09],[.48,.13],[.3,.15],[.001,.15]],40).geo,t,-6,Ul,e),r=fe(n,new qs(.045,.05,2.76,14),t,-6,1.37,e);fe(n,new qi(.07,14,10),t,-6,i,e);const o=fe(n,new $s(new ni([new P(-6,i,e),new P(-5.8,3.1,-1.9),new P(-5.35,3.3,-1.55),new P(-4.9,3.25,-1.3),new P(-4.9,2.95,-1.3)]),40,.035,8),t);[s,r,o].forEach(m=>m.castShadow=!1);const a=new P(-4.9,2.6,-1.3),c=fe(n,new qi(.2,20,14),new xi({color:"#ffe2b0",toneMapped:!1}),a.x,a.y-.05,a.z);c.castShadow=c.receiveShadow=!1;const l=(m,p)=>(m.side=p,m.emissive=new Lt("#ffb35e"),m.emissiveMap=m.map,m.emissiveIntensity=0,m),h=$i("rib",an*.775,.95),u=new qs(.7,.85,.9,56,1,!0),d=[0,1].map(m=>l(Ir({color:"#f3e0b8",stitch:"rib",repeat:h}),m));for(const m of d){const p=fe(n,u,m,a.x,a.y,a.z);p.castShadow=p.receiveShadow=!1}const f=l(Ir({color:"#f3e0b8",stitch:"strand",repeat:Qs(an*.78*.7,2)}),0);d.push(f);for(const[m,p]of[[.7,.45],[.85,-.45]]){const S=fe(n,new zr(m,.05,10,64),f,a.x,a.y+p,a.z);S.rotation.x=Math.PI/2,S.castShadow=S.receiveShadow=!1}const g=new yf("#ffc27a",0,0,.85,.8,1);g.position.set(a.x,a.y-.1,a.z),g.target.position.set(.2,0,.2),g.shadow.mapSize.set(2048,2048),g.shadow.bias=-8e-4,g.shadow.normalBias=.06,g.shadow.camera.near=.5,g.shadow.camera.far=20,n.add(g);const v=new Tl("#ffb766",0,4,2);return v.position.copy(a),n.add(v),{group:n,spot:g,glow:v,shadeMats:d}}function jM(){const n=kr(new pe,4.7,-2.6,.12),t=we("#f0e4cc","garter",[4,1]);let e=0;const i=[[1.9,.32,1.4,"#7a5238","stockinette","#e6d9b8",.08,0,0],[1.75,.28,1.28,"#e6d9b8","seed","#8a6a4a",-.1,.06,-.04],[1.65,.26,1.2,"#6f8c64","rib","#efe4d0",.38,-.04,.03]];for(const[s,r,o,a,c,l,h,u,d]of i){const f=new pe,g=we(a,c,$i(c,s,o)),v=.06;fe(f,new ei(s,v,o,3,.025),g,0,r/2-v/2,0),fe(f,new ei(s,v,o,3,.025),g,0,-r/2+v/2,0),fe(f,new ei(s,r,.08,3,.03),g,0,0,o/2-.04),fe(f,new Si(s-.12,r-2*v+.02,o-.1),t,0,0,-.01);for(const m of[-.55,-.45,.45,.55])Yi(f,new Xo(new P(s/1.9*m,-r/2+.03,o/2+.005),new P(s/1.9*m,r/2-.03,o/2+.005)),.025,l);f.position.set(u,e+r/2,d),f.rotation.y=h,n.add(f),e+=r}return n}function KM(){const n=kr(new pe,5,-1.1),t=Ir({color:"#f4e6c8",stitch:"rib",repeat:$i("rib",an*.4,.6)});t.emissive=new Lt("#ffb060"),t.emissiveIntensity=0,fe(n,new qs(.4,.4,.6,40),t,0,.34,0),Zi(n,.4,.61,.055,"#f4e6c8"),Zi(n,.4,.07,.055,"#f4e6c8"),ea(n,.38,.045,"#f4e6c8",.6),Yi(n,new Xo(new P(0,.6,0),new P(0,.7,0)),.02,"#3a2a22");const e=new pe;e.position.y=.66;const i=ta([[.001,0],[.03,.015],[.048,.07],[.042,.14],[.022,.22],[.001,.3]],24).geo,s=new Kt(i,new xi({color:"#ffc864",toneMapped:!1})),r=new Kt(i,new xi({color:"#fff3cf",toneMapped:!1}));r.scale.set(.55,.6,.55),e.add(s,r),e.scale.setScalar(.75),n.add(e);const o=new Wo(new Fr({map:NM(),color:"#ff9a40",blending:$a,transparent:!0,depthWrite:!1,toneMapped:!1,opacity:.5}));o.scale.setScalar(1.1),o.position.y=.78,o.renderOrder=6,n.add(o);const a=new Tl("#ffa04a",0,5,2);return a.position.set(0,.85,0),n.add(a),{group:n,flame:e,halo:o,light:a,wax:t}}function JM({scene:n,renderer:t}){Bf=t.capabilities.getMaxAnisotropy();const e=new pe;n.add(e),e.add(zM(),kM(),HM(),GM());const i=new pe,s=qM();i.add(s.group);const r=new pe,o=ZM(),a=KM();r.add(YM(),o.group,jM(),a.group),e.add(i,r,o.spot.target),r.visible=!1;const c=o.spot;let l=0;function h(m){const p=m>=.5;l=DM(m,.5,1),i.visible=!p,r.visible=p,c.castShadow=p,c.intensity=CM*l,o.glow.intensity=LM*l,o.shadeMats[0].emissiveIntensity=.45*l,o.shadeMats[1].emissiveIntensity=.9*l,o.shadeMats[2].emissiveIntensity=.6*l,a.wax.emissiveIntensity=.15*l}h(0);let u=0,d=0,f=0,g=0;function v(m){if(m=Math.min(m,.1),u+=m,i.visible&&s.steam.forEach((p,S)=>{const x=(u/4+S/s.steam.length)%1;p.position.set(Math.sin(x*5+S*2)*.09+x*.1,.95+x*1.6,Math.cos(x*4+S)*.05),p.scale.setScalar(.3+x*.7),p.material.opacity=Math.sin(x*Math.PI)**1.3*.4}),r.visible){g-=m,g<=0&&(f=Math.random()*2-1,g=.05+Math.random()*.12),d+=(f-d)*Math.min(1,m*14);const p=1+.07*Math.sin(u*9.3)+.05*Math.sin(u*15.7+1.3)+.04*Math.sin(u*4.1+.6)+.07*d;a.light.intensity=PM*l*p,a.halo.material.opacity=.5*(.4+.6*l)*p,a.flame.scale.set(.75*(1+.06*Math.sin(u*13)+.04*d),.75*(1+.5*(p-1)),.75),a.flame.rotation.z=.06*Math.sin(u*5.3)+.05*d}}return{group:e,lampLight:c,setTime:h,update:v}}function $M(n=.26){const t=new pe,e=(a,c,l="stockinette")=>Ir({color:"#f3e7d3",stitch:l,repeat:[Math.max(1,Math.round(a/.88)),Math.max(1,Math.round(c/1.1))]}),i=new Kt(new yi(6,4),e(6,4));i.rotation.x=-Math.PI/2,i.position.y=.001,i.receiveShadow=!0,t.add(i);const s=.5,r=[[6.52,s,n,0,-2-n/2],[6.52,s,n,0,2.13],[n,s,4.52,-3-n/2,0],[n,s,4.52,3.13,0]];for(const[a,c,l,h,u]of r){const d=new Kt(new ei(a,c,l,4,.12),e(Math.max(a,l),c));d.position.set(h,c/2-.02,u),d.castShadow=d.receiveShadow=!0,d.userData.rim=!0,t.add(d)}const o=new Kt(new ei(6.52,.16,4.52,4,.07),e(6,.3));return o.position.y=-.08,o.receiveShadow=!0,t.add(o),{group:t,rims:t.children.filter(a=>a.userData.rim)}}/**
 * Jelly Zoo — Main Application Entry Point
 *
 * Interactive 3D needle-felted soft-body animal playground in a knitted basket.
 * Supports poking, squashing, dragging, petting (fur combing & purring),
 * rim tilting, keyboard/spacebar shaking, spawning, and day/night lighting.
 *
 * @author Sunil
 * @license MIT
 */const Fo=new URLSearchParams(location.search),QM=n=>n&&new P(...n.split(",").map(Number)),Qt=(n,t)=>n+Math.random()*(t-n),Yf=3,Zf=2,jf=.26,Kf=30,ty=8,ge=new xv({antialias:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"});ge.setPixelRatio(Math.min(devicePixelRatio,1.5));ge.setSize(innerWidth,innerHeight);ge.shadowMap.enabled=!0;ge.shadowMap.type=il;ge.toneMapping=Nu;ge.toneMappingExposure=1;document.body.appendChild(ge.domElement);const Qi=new hf;Qi.environment=new Bc(ge).fromScene(new Sx,.04).texture;Qi.environmentIntensity=.25;const ey=RM({scene:Qi,renderer:ge}),wu=JM({scene:Qi,renderer:ge});function Jf(){if(Fo.get("time")==="day")return 0;if(Fo.get("time")==="night")return 1;const n=new Date().getHours();return n>=7&&n<18?0:1}let vr=Jf();const pn=new Je(32,innerWidth/innerHeight,.1,100),ny=QM(Fo.get("cam"))??new P(0,5.4,7.6);pn.position.copy(ny);const si=new lx(pn,ge.domElement);si.target.set(0,.2,0);si.mouseButtons={LEFT:null,MIDDLE:mi.DOLLY,RIGHT:mi.ROTATE};si.enablePan=!1;si.enableDamping=!0;si.minDistance=5;si.maxDistance=20;si.maxPolarAngle=Math.PI*.42;const Ce=new pe;Qi.add(Ce);const Nl=$M(jf);Ce.add(Nl.group);const na=new ee,Ve=new Lx({halfX:Yf,halfZ:Zf,wallThickness:jf}),ii=lM(Ce),be=[];function $f(n,t){n.face.setExpression("dizzy",t),n.dizzyUntil=performance.now()+t*1e3}function Fl(n,t,e,i=Qt(2.5,3.5)){if(be.length>=Kf)return null;const s=Zx(n,{scale:Qt(.9,1.12)}),r=Ve.addBody({rest:s.rest,radius:s.radius,stiffness:Qt(.18,.28),position:{x:t,y:i,z:e},yaw:Qt(-.25,.25),velocity:{x:0,y:-1,z:0}}),o=new Kt(s.geometry,s.material);Ox(o),o.castShadow=!0,o.frustumCulled=!1,Ce.add(o);const a=s.face,c=Dx(r,s.geometry,[a.eyes[0],a.eyes[1],a.cheeks[0],a.cheeks[1],a.mouth]),l=rM(a);Ce.add(l.object);const h={data:s,body:r,mesh:o,skin:c,face:l,comb:kx(s.geometry),stars:hM(Ce),dizzyUntil:0,zTimer:Qt(0,1.5),head:new P,phase:Qt(0,6.28),pokes:[],squash:0,squashing:!1,nextHop:Qt(3,9),pet:0,petted:!1,chirpAt:0,heartAt:0,puff:0,purr:null,look:null,lookUntil:0,squished:!1,squishAt:0,calm:0,cuddleCd:Qt(4,10),lean:null,leanUntil:0,returnedAt:0};return r.animal=h,be.push(h),l.setExpression("surprised",.6),h}function iy(n){var t;if(ii.poof(n.body.center,n.data.color),Ll(),be.length<=ty)Ve.place(n.body,{x:Qt(-2,2),y:Qt(3.5,4.5),z:Qt(-1.2,1.2)},Qt(-.3,.3),{x:0,y:-1,z:0}),n.face.setExpression("surprised",1);else{(Bt==null?void 0:Bt.a)===n&&(Ve.release(),Bt=null),Zs===n&&(Zs=null),Ve.removeBody(n.body),n.mesh.removeFromParent(),n.mesh.geometry.dispose();for(const e of n.mesh.children)e.material.dispose();n.face.dispose(),n.stars.dispose(),(t=n.purr)==null||t.stop(),be.splice(be.indexOf(n),1)}}const Qf=Number(Fo.get("n")??10),td=[];for(let n=0;n<Qf;n++)td.push(Po[n%Po.length]);for(let n=0;n<Qf;n++){const t=n%5,e=Math.floor(n/5)%2,i=Math.floor(n/10);setTimeout(()=>{Fl(td[n],-2.2+t*1.1+Qt(-.15,.15),-.9+e*1.6+Qt(-.15,.15),Qt(2.5,3.5)+i*1.2),Ll()},250+n*160)}let Oo=0;Ve.onImpact=(n,t)=>{const e=n.animal;if(e){if(t>7&&$f(e,1.2),e.returnedAt&&performance.now()-e.returnedAt<3e3&&n.grounded){e.returnedAt=0;for(const i of be)i===e||i.body.center.distanceTo(e.body.center)>1.9||!i.body.grounded||(Ol(i,e.head,1.5),setTimeout(()=>{ia(i.body,0,Qt(2.2,3),0),i.face.setExpression("happy",1.2)},Qt(60,260)));setTimeout(()=>ii.burst(e.head,{count:4,kinds:["heart"],speed:1.6,size:.2}),250)}t>2.5&&Oo>0&&(Oo--,Pl(e.data.pitch*.85,Math.min(1,t/9)))}};const Au=new it,zo=new ox,Qc=new In(new P(0,1,0),0),Ru=new In,Te=new P,sy=new Go;let Bt=null,Jn=null,ki=null,Gi=performance.now(),Zs=null,bn=null,Sn=null;function ed(n){return Au.set(n.clientX/innerWidth*2-1,-(n.clientY/innerHeight)*2+1),zo.setFromCamera(Au,pn),sy.copy(zo.ray).applyMatrix4(na)}function nd(){const n=performance.now();if(n-Gi>2e4)for(const t of be)t.face.setExpression("surprised",.8);Gi=n}function ia(n,t,e,i){for(let s=0;s<n.n;s++)n.vel[s*3]+=t,n.vel[s*3+1]+=e,n.vel[s*3+2]+=i}function Ol(n,t,e){n.look=t,n.lookUntil=performance.now()+e*1e3}function id(n,t,e,i){const s=n.body,r=s.center;let o=t.x-r.x,a=t.z-r.z;const c=Math.hypot(o,a);if(!(c<.001)){o/=c,a/=c;for(let l=0;l<s.n;l++){const h=s.pos[l*3+1]-r.y;if(h<=0)continue;const u=e*i*Math.min(1,h/.4);s.vel[l*3]+=o*u,s.vel[l*3+2]+=a*u}}}function sd(n,t,e){Ve.poke(n.body,t.point,e,4.5),ii.burst(t.point.clone().addScaledVector(e,-.1)),n.face.setExpression("squint",.45),n.face.setBlush(1),Pl(n.data.pitch,.75);const i=performance.now();n.pokes=n.pokes.filter(s=>i-s<2e3),n.pokes.push(i),n.pokes.length>=5&&($f(n,1.6),ii.burst(n.head,{count:8,kinds:["star"],speed:2.6}),n.pokes.length=0);for(const s of be)s!==n&&s.body.center.distanceTo(n.body.center)<1.6&&(s.face.setExpression("surprised",.5),Ol(s,n.head,1.2))}function ry(n){n!==Zs&&(Zs=n,n&&(n.face.setExpression("happy",.7),n.face.setBlush(.6)))}ge.domElement.addEventListener("contextmenu",n=>n.preventDefault());ge.domElement.addEventListener("pointerdown",n=>{if(n.button!==0)return;Rf(),nd();const t=ed(n),e=Ve.pick(t.origin,t.direction);if(e){ge.domElement.setPointerCapture(n.pointerId),Bt={a:e.body.animal,hit:e,t0:performance.now(),x0:n.clientX,y0:n.clientY,mode:"press",dir:t.direction.clone()};return}fy();const i=zo.intersectObjects(Nl.rims,!1)[0];if(i){const s=Ce.worldToLocal(i.point.clone());bn={dir:Math.abs(s.x)/Yf>Math.abs(s.z)/Zf?new it(Math.sign(s.x),0):new it(0,Math.sign(s.z)),y0:n.clientY,amount:0},ge.domElement.setPointerCapture(n.pointerId),ge.domElement.style.cursor="grabbing"}else t.intersectPlane(Qc,Te)&&(Sn={x:Te.x,z:Te.z,next:0},ge.domElement.setPointerCapture(n.pointerId))});ge.domElement.addEventListener("pointermove",n=>{var i;const t=ed(n);if(bn){bn.amount=Ee.clamp((bn.y0-n.clientY)*.005,-el,el),Gi=performance.now();return}if(Sn){t.intersectPlane(Qc,Te)&&(Sn.x=Te.x,Sn.z=Te.z);return}if(!Bt){const s=Ve.pick(t.origin,t.direction),r=(s==null?void 0:s.body.animal)??null;if(r&&r===Zs&&ki){const o=s.point.clone().sub(ki),a=o.length();a>1e-4&&a<.5&&(r.comb.brush(s.point,o),r.pet=Math.min(1.5,r.pet+a*1.3),Gi=performance.now())}ki=s?s.point.clone():((i=t.intersectPlane(Qc,Te))==null?void 0:i.clone())??null,ry(r),ge.domElement.style.cursor=r?"pointer":zo.intersectObjects(Nl.rims,!1).length?"grab":"default";return}Gi=performance.now();const e=Math.hypot(n.clientX-Bt.x0,n.clientY-Bt.y0);if(Bt.mode==="press"&&e>6){Bt.mode="drag",pn.getWorldDirection(Te).transformDirection(na),Ru.setFromNormalAndCoplanarPoint(Te.negate(),Bt.hit.point),Ve.grab(Bt.a.body,Bt.hit.index,Bt.hit.point),Bt.a.face.setExpression("happy"),Jn=oM();for(const s of be)s!==Bt.a&&s.body.center.distanceTo(Bt.a.body.center)<1.8&&s.face.setExpression("surprised",.6)}if(Bt.mode==="drag"&&t.intersectPlane(Ru,Te)){Te.x=Ee.clamp(Te.x,-2.8,2.8),Te.z=Ee.clamp(Te.z,-1.8,1.8),Te.y=Ee.clamp(Te.y,.15,2.4),Ve.moveGrab(Te);const s=Bt.a.body,r=Bt.hit.index*3,o=Math.hypot(s.pos[r]-Te.x,s.pos[r+1]-Te.y,s.pos[r+2]-Te.z);Jn==null||Jn.set(Math.min(1,o/1.2)),ki=Te.clone()}});function rd(){if(bn&&(bn=null,ge.domElement.style.cursor="grab"),Sn=null,!Bt)return;const{a:n,mode:t,hit:e,dir:i}=Bt;t==="press"&&sd(n,e,i),t==="drag"&&(Ve.release(),Jn==null||Jn.stop(),Jn=null,n.face.setExpression("surprised",.4),n.returnedAt=performance.now()),t==="squash"&&(n.squashing=!1,ia(n.body,0,4+6*n.squash,0),n.face.setExpression("happy",1),Pl(n.data.pitch*1.5,1),ii.burst(n.body.center.clone().setY(.1),{count:10,kinds:["star","sparkle"],speed:3.4,size:.3})),Bt=null}ge.domElement.addEventListener("pointerup",rd);ge.domElement.addEventListener("pointercancel",rd);const tl={ArrowLeft:[1,0],ArrowRight:[-1,0],ArrowUp:[0,1],ArrowDown:[0,-1]},Bo=new Set;addEventListener("keyup",n=>Bo.delete(n.code));addEventListener("keydown",n=>{if(tl[n.code])n.preventDefault(),Bo.add(n.code),Gi=performance.now();else if(n.code==="Space"){n.preventDefault(),Rf(),nd(),Ve.shake(new P(Qt(-1.5,1.5),6,Qt(-1,1))),ye.vy=2.2,ye.vrx+=Qt(-.8,.8),ye.vrz+=Qt(-1.2,1.2),Kc();for(const t of be)t.face.setExpression("surprised",.6)}});addEventListener("resize",()=>{pn.aspect=innerWidth/innerHeight,pn.updateProjectionMatrix(),ge.setSize(innerWidth,innerHeight)});const el=1,Ds=.5,Cu=70,Pu=6,Me={x:0,z:0,vx:0,vz:0,wasTilted:!1},ye={y:0,vy:0,rx:0,vrx:0,rz:0,vrz:0},oy=new wn,ay=new mn,cy=new P(0,-12,0),ly=new P,ja=new P,hy=new wn,Ka=new P,ws=new P,uy=new P;let fn=null;function fy(){if(fn||typeof DeviceOrientationEvent>"u")return;fn={beta0:null,gamma0:null,x:0,z:0};const n=()=>addEventListener("deviceorientation",t=>{if(t.beta==null)return;fn.beta0==null&&(fn.beta0=t.beta,fn.gamma0=t.gamma);const e=Math.PI/180;fn.x=Ee.clamp(-(t.gamma-fn.gamma0)*e,-Ds,Ds),fn.z=Ee.clamp(-(t.beta-fn.beta0)*e,-Ds,Ds)});DeviceOrientationEvent.requestPermission?DeviceOrientationEvent.requestPermission().then(t=>t==="granted"&&n()).catch(()=>{}):n()}function dy(n){let t=0,e=0;if(bn)t=bn.dir.x*bn.amount,e=bn.dir.y*bn.amount;else if(Bo.size)for(const o of Bo)t+=tl[o][0]*Ds,e+=tl[o][1]*Ds;else fn&&(t=fn.x,e=fn.z);const i=n/2;for(let o=0;o<2;o++)Me.vx+=(Cu*(t-Me.x)-Pu*Me.vx)*i,Me.vz+=(Cu*(e-Me.z)-Pu*Me.vz)*i,Me.x+=Me.vx*i,Me.z+=Me.vz*i,ye.vy-=12*i,ye.y+=ye.vy*i,ye.y<0&&(ye.y=0,ye.vy=ye.vy<-.3?-ye.vy*.3:0),ye.vrx+=(-260*ye.rx-10*ye.vrx)*i,ye.vrz+=(-260*ye.rz-10*ye.vrz)*i,ye.rx+=ye.vrx*i,ye.rz+=ye.vrz*i;const s=Math.min(el*1.15,Math.hypot(Me.x,Me.z));if(s<1e-4)Ce.position.set(0,0,0),Ce.quaternion.identity();else{const o=Math.hypot(Me.x,Me.z),a=Me.x/o,c=Me.z/o,l=Math.min(3.26/Math.max(Math.abs(a),1e-6),2.26/Math.max(Math.abs(c),1e-6));ja.set(-a*l,-.16,-c*l),Ce.quaternion.setFromAxisAngle(ly.set(-c,0,a),s),Ce.position.copy(ja).sub(ja.clone().applyQuaternion(Ce.quaternion))}if(Ce.updateMatrixWorld(),ws.set(0,.2,0).applyMatrix4(Ce.matrixWorld),Ce.position.y+=ye.y,Ce.quaternion.multiply(oy.setFromEuler(ay.set(ye.rx,0,ye.rz))),Ce.updateMatrixWorld(),na.copy(Ce.matrixWorld).invert(),Ve.gravity.copy(cy).applyQuaternion(hy.copy(Ce.quaternion).invert()),ws.y-=.2,ws.multiplyScalar(.85),pn.position.add(ws).sub(Ka),si.target.add(ws).sub(Ka),Ka.copy(ws),pn.zoom=1/(1+.6*s),pn.updateProjectionMatrix(),!Me.wasTilted&&s>.28){Me.wasTilted=!0;for(const o of be)o.face.setExpression("surprised",1);Kc()}if(s>.65)for(const o of be)!o.body.grounded||(Bt==null?void 0:Bt.a)===o||Math.random()>n*2||(ia(o.body,Qt(-.5,.5),Qt(2.5,4),Qt(-.5,.5)),o.face.setExpression("surprised",.8));const r=Math.hypot(Me.vx,Me.vz);if(Me.wasTilted&&s<.05&&r>1.2){Me.wasTilted=!1,Ve.shake(new P(0,Math.min(5,r*1.6),0)),Kc();for(const o of be)o.face.setExpression("happy",.8)}Me.wasTilted&&s<.05&&r<.3&&(Me.wasTilted=!1)}function py(n){if(!Sn||(Sn.next-=n,Sn.next>0||be.length>=Kf))return;Sn.next=.09;const t=Ee.clamp(Sn.x+Qt(-.45,.45),-2.5,2.5),e=Ee.clamp(Sn.z+Qt(-.45,.45),-1.5,1.5),i=Fl(Po[Math.floor(Math.random()*Po.length)],t,e,Qt(3.2,4.2));i&&(i.face.setExpression("happy",1),Ll())}function my(n,t,e){var s;n.pet=Math.max(0,n.pet-t*.35),n.puff=Math.max(0,n.puff-t*.5);const i=n===Zs&&!Bt;!n.petted&&n.pet>.35?(n.petted=!0,n.face.setExpression("happy",1)):n.petted&&n.pet<.12&&(n.petted=!1),n.petted&&(n.face.setExpression("happy",.6),n.face.setBlush(.5+.5*Math.min(1,n.pet)),i&&ki&&id(n,ki,2.2*Math.min(1,n.pet),t),n.pet>.7&&e-n.heartAt>2200&&(n.heartAt=e,ii.burst(n.head,{count:3,kinds:["heart"],speed:1.4,size:.18}),n.data.species==="chick"&&(n.puff=1)),n.data.species!=="cat"&&i&&e-n.chirpAt>Qt(700,1400)&&(n.chirpAt=e,Lf(n.data.pitch))),n.data.species==="cat"&&(n.petted&&!n.purr&&(n.purr=aM()),(s=n.purr)==null||s.set(n.petted?Math.min(1,n.pet):0),!n.petted&&n.purr&&n.pet<.05&&(n.purr.stop(),n.purr=null))}const Lu=(n,t)=>Math.hypot(n.x-t.x,n.z-t.z);function gy(n,t){for(const e of be){const i=e.body.center;let s=!1;for(const r of be)r!==e&&r.body.center.y-i.y>.3&&Lu(r.body.center,i)<.55&&(s=!0);if(s&&(!e.squished||t-e.squishAt>500)?(e.squishAt=t,e.face.setExpression("squint",.7),e.face.setBlush(.9)):!s&&e.squished&&e.face.setExpression("surprised",.4),e.squished=s,e.calm=e.body.grounded&&e.body.velocity.length()<.35&&(Bt==null?void 0:Bt.a)!==e&&!s?e.calm+n:0,e.cuddleCd-=n,e.calm>2.5&&e.cuddleCd<=0){let r=null,o=1.05;for(const a of be){if(a===e||a.calm<1||a.cuddleCd>0)continue;const c=Lu(a.body.center,i);c<o&&(o=c,r=a)}if(r){for(const[a,c]of[[e,r],[r,e]])a.lean=c,a.leanUntil=t+900,a.cuddleCd=Qt(12,24),a.face.setExpression("happy",1.8),a.face.setBlush(.9),Ol(a,c.head,1.8);setTimeout(()=>{ii.burst(e.head.clone().lerp(r.head,.5),{count:2,kinds:["heart"],speed:1,size:.2})},350),Lf(e.data.pitch)}}e.lean&&t<e.leanUntil?id(e,e.lean.body.center,3,n):e.lean=null}}const Du=new P;let Iu=performance.now(),Ja=0;ge.setAnimationLoop(()=>{const n=performance.now(),t=Math.min((n-Iu)/1e3,1/30);Iu=n,Ja+=t,Oo=Math.min(4,Oo+t*14),vr+=Ee.clamp(Jf()-vr,-t/4,t/4),ey.setTime(vr),wu.setTime(vr),wu.update(t),bf.value=Ee.lerp(.35,.14,vr),dy(t),py(t);for(const s of[...be]){const r=s.body.center;((Math.abs(r.x)>3.3||Math.abs(r.z)>2.3)&&uy.copy(r).applyMatrix4(Ce.matrixWorld).y<.2||r.y<-2.5)&&iy(s)}(Bt==null?void 0:Bt.mode)==="press"&&n-Bt.t0>300&&(Bt.mode="squash",Bt.a.squashing=!0,Bt.a.face.setExpression("squint"),Jn=null);const e=n-Gi>25e3;for(const s of be){const r=s.body;s.squash=Ee.damp(s.squash,+!!s.squashing,s.squashing?3:14,t),s.squashing&&s.face.setBlush(.4+.6*s.squash);const o=(1+.03*Math.sin(Ja*(e?1.2:2.2)+s.phase))*(1-.5*s.squash),a=1/Math.sqrt(o),c=1+.1*s.puff;r.restScale.set(a*c,o*c,a*c),s.nextHop-=t,s.nextHop<0&&(s.nextHop=Qt(4,12),!e&&r.grounded&&(Bt==null?void 0:Bt.a)!==s&&(ia(r,Qt(-.6,.6),Qt(2.5,3.8),Qt(-.6,.6)),s.face.setExpression("happy",.6))),e&&Math.random()<t*.3&&s.face.setExpression("sleepy",4),my(s,t,n)}gy(t,n),Ve.step(t);const i=performance.now();Du.copy(pn.position).applyMatrix4(na);for(const s of be){s.skin.update(),s.comb.update(t);const r=(Bt==null?void 0:Bt.mode)==="drag"&&Bt.a!==s?Bt.a.head:null;s.face.lookAt(r??(i<s.lookUntil?s.look:null)??ki??Du),s.face.update(s.skin.anchorPos,s.skin.anchorNormal,t);const o=s.skin.anchorPos;s.head.set((o[0]+o[3])/2,(o[1]+o[4])/2+.32,(o[2]+o[5])/2),s.stars.update(s.head,Ja,i<s.dizzyUntil),e&&(s.zTimer-=t)<0&&(s.zTimer=Qt(1.2,2.2),ii.zzz(s.head))}ii.update(t),si.update(t),ge.render(Qi,pn)});window.__jelly={world:Ve,animals:be,camera:pn,renderer:ge,scene:Qi,spawn:Fl,poke:n=>{const t=be[n],e=t.body.center;sd(t,{point:e.clone().add(new P(0,.3,.3))},new P(0,-.5,-1).normalize())}};
