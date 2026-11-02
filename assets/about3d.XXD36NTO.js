var t0=Object.defineProperty;var n0=(s,e,t)=>e in s?t0(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Ci=(s,e,t)=>n0(s,typeof e!="symbol"?e+"":e,t);var uu="160";var i0=0,Pd=1,r0=2;var mp=1,s0=2,Ri=3,Ai=0,Bn=1,bn=2;var di=0,Ls=1,Ur=2,Nd=3,Od=4,o0=5,wr=100,a0=101,l0=102,kd=103,Qd=104,c0=200,h0=201,u0=202,f0=203,Dh=204,Lh=205,d0=206,A0=207,p0=208,m0=209,g0=210,_0=211,v0=212,y0=213,x0=214,E0=0,S0=1,C0=2,al=3,M0=4,T0=5,I0=6,b0=7,gp=0,w0=1,B0=2,tr=0,fu=1,du=2,Au=3,Jo=4,R0=5,pu=6,Gd="attached",D0="detached",_p=300,Fr=301,Ps=302,Uh=303,Fh=304,Zl=306,Pr=1e3,wn=1001,Lo=1002,zt=1003,ll=1004;var Mo=1005;var Et=1006,mu=1007;var pi=1008;var Ot=1009,L0=1010,U0=1011,gu=1012,vp=1013,$i=1014,mn=1015,on=1016,yp=1017,xp=1018,Rr=1020,F0=1021,Nt=1023,P0=1024,N0=1025,Dr=1026,Ns=1027,Gr=1028,Ep=1029,zr=1030,Sp=1031,Cp=1033,To=33776,$c=33777,eh=33778,Io=33779,cl=35840,zd=35841,hl=35842,Hd=35843,jl=36196,ul=37492,fl=37496,dl=37808,Vd=37809,Wd=37810,Kd=37811,Uo=37812,Xd=37813,qd=37814,Yd=37815,Jd=37816,Zd=37817,jd=37818,$d=37819,eA=37820,tA=37821,bo=36492,nA=36494,iA=36495,O0=36283,rA=36284,sA=36285,oA=36286;var Os=2300,Nr=2301,th=2302,aA=2400,lA=2401,cA=2402,k0=2500;var Mp=0,$l=1,Zo=2,Tp=3e3,Lr=3001,Q0=3200,_u=3201,Ip=0,G0=1,pn="",at="srgb",Ct="srgb-linear",jo="display-p3",Ws="display-p3-linear",Al="linear",At="srgb",pl="rec709",ml="p3";var ds=7680;var hA=519,z0=512,H0=513,V0=514,bp=515,W0=516,K0=517,X0=518,q0=519,Ph=35044;var uA="300 es",Nh=1035,Li=2e3,gl=2001,nr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let r=0,o=n.length;r<o;r++)n[r].call(this,e);e.target=null}}},rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fA=1234567,wo=Math.PI/180,ks=180/Math.PI;function hi(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(rn[s&255]+rn[s>>8&255]+rn[s>>16&255]+rn[s>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[t&63|128]+rn[t>>8&255]+"-"+rn[t>>16&255]+rn[t>>24&255]+rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]).toLowerCase()}function qt(s,e,t){return Math.max(e,Math.min(t,s))}function vu(s,e){return(s%e+e)%e}function Y0(s,e,t,i,n){return i+(s-e)*(n-i)/(t-e)}function J0(s,e,t){return s!==e?(t-s)/(e-s):0}function Bo(s,e,t){return(1-t)*s+t*e}function Z0(s,e,t,i){return Bo(s,e,1-Math.exp(-t*i))}function j0(s,e=1){return e-Math.abs(vu(s,e*2)-e)}function $0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function e_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function t_(s,e){return s+Math.floor(Math.random()*(e-s+1))}function n_(s,e){return s+Math.random()*(e-s)}function i_(s){return s*(.5-Math.random())}function r_(s){s!==void 0&&(fA=s);let e=fA+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function s_(s){return s*wo}function o_(s){return s*ks}function Oh(s){return(s&s-1)===0&&s!==0}function a_(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function _l(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function l_(s,e,t,i,n){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),f=o((e-i)/2),d=r((i-e)/2),m=o((i-e)/2);switch(n){case"XYX":s.set(a*h,l*u,l*f,a*c);break;case"YZY":s.set(l*f,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*f,a*h,a*c);break;case"XZX":s.set(a*h,l*m,l*d,a*c);break;case"YXY":s.set(l*d,a*h,l*m,a*c);break;case"ZYZ":s.set(l*m,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function fi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ft(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var ec={DEG2RAD:wo,RAD2DEG:ks,generateUUID:hi,clamp:qt,euclideanModulo:vu,mapLinear:Y0,inverseLerp:J0,lerp:Bo,damp:Z0,pingpong:j0,smoothstep:$0,smootherstep:e_,randInt:t_,randFloat:n_,randFloatSpread:i_,seededRandom:r_,degToRad:s_,radToDeg:o_,isPowerOfTwo:Oh,ceilPowerOfTwo:a_,floorPowerOfTwo:_l,setQuaternionFromProperEuler:l_,normalize:ft,denormalize:fi},Qe=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*n+e.x,this.y=r*n+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$e=class s{constructor(e,t,i,n,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,o,a,l,c)}set(e,t,i,n,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=n,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],m=i[8],p=n[0],A=n[3],g=n[6],v=n[1],_=n[4],y=n[7],S=n[2],C=n[5],E=n[8];return r[0]=o*p+a*v+l*S,r[3]=o*A+a*_+l*C,r[6]=o*g+a*y+l*E,r[1]=c*p+h*v+u*S,r[4]=c*A+h*_+u*C,r[7]=c*g+h*y+u*E,r[2]=f*p+d*v+m*S,r[5]=f*A+d*_+m*C,r[8]=f*g+d*y+m*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+n*r*c-n*o*l}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,m=t*u+i*f+n*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let p=1/m;return e[0]=u*p,e[1]=(n*c-h*i)*p,e[2]=(a*i-n*o)*p,e[3]=f*p,e[4]=(h*t-n*l)*p,e[5]=(n*r-a*t)*p,e[6]=d*p,e[7]=(i*l-c*t)*p,e[8]=(o*t-i*r)*p,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-n*c,n*l,-n*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(nh.makeScale(e,t)),this}rotate(e){return this.premultiply(nh.makeRotation(-e)),this}translate(e,t){return this.premultiply(nh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},nh=new $e;function wp(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Fo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function c_(){let s=Fo("canvas");return s.style.display="block",s}var dA={};function Ro(s){s in dA||(dA[s]=!0,console.warn(s))}var AA=new $e().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),pA=new $e().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Da={[Ct]:{transfer:Al,primaries:pl,toReference:s=>s,fromReference:s=>s},[at]:{transfer:At,primaries:pl,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ws]:{transfer:Al,primaries:ml,toReference:s=>s.applyMatrix3(pA),fromReference:s=>s.applyMatrix3(AA)},[jo]:{transfer:At,primaries:ml,toReference:s=>s.convertSRGBToLinear().applyMatrix3(pA),fromReference:s=>s.applyMatrix3(AA).convertLinearToSRGB()}},h_=new Set([Ct,Ws]),st={enabled:!0,_workingColorSpace:Ct,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!h_.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let i=Da[e].toReference,n=Da[t].fromReference;return n(i(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Da[s].primaries},getTransfer:function(s){return s===pn?Al:Da[s].transfer}};function Us(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ih(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var As,vl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{As===void 0&&(As=Fo("canvas")),As.width=e.width,As.height=e.height;let i=As.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=As}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Fo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let o=0;o<r.length;o++)r[o]=Us(r[o]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Us(t[i]/255)*255):t[i]=Us(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},u_=0,yl=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:u_++}),this.uuid=hi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?r.push(rh(n[o].image)):r.push(rh(n[o]))}else r=rh(n);i.url=r}return t||(e.images[this.uuid]=i),i}};function rh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?vl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var f_=0,kt=class s extends nr{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,i=wn,n=wn,r=Et,o=pi,a=Nt,l=Ot,c=s.DEFAULT_ANISOTROPY,h=pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:f_++}),this.uuid=hi(),this.name="",this.source=new yl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ro("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Lr?at:pn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_p)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pr:e.x=e.x-Math.floor(e.x);break;case wn:e.x=e.x<0?0:1;break;case Lo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pr:e.y=e.y-Math.floor(e.y);break;case wn:e.y=e.y<0?0:1;break;case Lo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ro("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===at?Lr:Tp}set encoding(e){Ro("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Lr?at:pn}};kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=_p;kt.DEFAULT_ANISOTROPY=1;var ot=class s{constructor(e=0,t=0,i=0,n=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*n+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*n+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*n+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*n+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],m=l[9],p=l[2],A=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-p)<.01&&Math.abs(m-A)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+p)<.1&&Math.abs(m+A)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,y=(d+1)/2,S=(g+1)/2,C=(h+f)/4,E=(u+p)/4,b=(m+A)/4;return _>y&&_>S?_<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(_),n=C/i,r=E/i):y>S?y<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(y),i=C/n,r=b/n):S<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(S),i=E/r,n=b/r),this.set(i,n,r,t),this}let v=Math.sqrt((A-m)*(A-m)+(u-p)*(u-p)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(A-m)/v,this.y=(u-p)/v,this.z=(f-h)/v,this.w=Math.acos((c+d+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},kh=class extends nr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);let n={width:e,height:t,depth:1};i.encoding!==void 0&&(Ro("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Lr?at:pn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Et,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new kt(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new yl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},gn=class extends kh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},xl=class extends kt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=zt,this.minFilter=zt,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Po=class extends kt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=zt,this.minFilter=zt,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ui=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],f=r[o+0],d=r[o+1],m=r[o+2],p=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=m,e[t+3]=p;return}if(u!==p||l!==f||c!==d||h!==m){let A=1-a,g=l*f+c*d+h*m+u*p,v=g>=0?1:-1,_=1-g*g;if(_>Number.EPSILON){let S=Math.sqrt(_),C=Math.atan2(S,g*v);A=Math.sin(A*C)/S,a=Math.sin(a*C)/S}let y=a*v;if(l=l*A+f*y,c=c*A+d*y,h=h*A+m*y,u=u*A+p*y,A===1-a){let S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,r,o){let a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return e[t]=a*m+h*u+l*d-c*f,e[t+1]=l*m+h*f+c*u-a*d,e[t+2]=c*m+h*d+a*f-l*u,e[t+3]=h*m-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),u=a(r/2),f=l(i/2),d=l(n/2),m=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"YZX":this._x=f*h*u+c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u-f*d*m;break;case"XZY":this._x=f*h*u-c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-n)*d}else if(i>a&&i>u){let d=2*Math.sqrt(1+i-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(n+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-i-u);this._w=(r-c)/d,this._x=(n+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-i-a);this._w=(o-n)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+n*c-r*l,this._y=n*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,n=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+n*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=n,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*n+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=n*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),n=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(n),i*Math.sin(r),i*Math.cos(r),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},K=class s{constructor(e=0,t=0,i=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mA.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mA.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*n-a*i),h=2*(a*t-r*n),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=n+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=n*l-r*a,this.y=r*o-i*l,this.z=i*a-n*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return sh.copy(this).projectOnVector(e),this.sub(sh)}reflect(e){return this.sub(sh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},sh=new K,mA=new ui,_n=class{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,oi):oi.fromBufferAttribute(r,o),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),La.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),La.copy(i.boundingBox)),La.applyMatrix4(e.matrixWorld),this.union(La)}let n=e.children;for(let r=0,o=n.length;r<o;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_o),Ua.subVectors(this.max,_o),ps.subVectors(e.a,_o),ms.subVectors(e.b,_o),gs.subVectors(e.c,_o),qi.subVectors(ms,ps),Yi.subVectors(gs,ms),Cr.subVectors(ps,gs);let t=[0,-qi.z,qi.y,0,-Yi.z,Yi.y,0,-Cr.z,Cr.y,qi.z,0,-qi.x,Yi.z,0,-Yi.x,Cr.z,0,-Cr.x,-qi.y,qi.x,0,-Yi.y,Yi.x,0,-Cr.y,Cr.x,0];return!oh(t,ps,ms,gs,Ua)||(t=[1,0,0,0,1,0,0,0,1],!oh(t,ps,ms,gs,Ua))?!1:(Fa.crossVectors(qi,Yi),t=[Fa.x,Fa.y,Fa.z],oh(t,ps,ms,gs,Ua))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Mi=[new K,new K,new K,new K,new K,new K,new K,new K],oi=new K,La=new _n,ps=new K,ms=new K,gs=new K,qi=new K,Yi=new K,Cr=new K,_o=new K,Ua=new K,Fa=new K,Mr=new K;function oh(s,e,t,i,n){for(let r=0,o=s.length-3;r<=o;r+=3){Mr.fromArray(s,r);let a=n.x*Math.abs(Mr.x)+n.y*Math.abs(Mr.y)+n.z*Math.abs(Mr.z),l=e.dot(Mr),c=t.dot(Mr),h=i.dot(Mr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var d_=new _n,vo=new K,ah=new K,vn=class{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):d_.setFromPoints(e).getCenter(i);let n=0;for(let r=0,o=e.length;r<o;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vo.subVectors(e,this.center);let t=vo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(vo,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ah.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vo.copy(e.center).add(ah)),this.expandByPoint(vo.copy(e.center).sub(ah))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ti=new K,lh=new K,Pa=new K,Ji=new K,ch=new K,Na=new K,hh=new K,Qs=class{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,t),Ti.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){lh.copy(e).add(t).multiplyScalar(.5),Pa.copy(t).sub(e).normalize(),Ji.copy(this.origin).sub(lh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Pa),a=Ji.dot(this.direction),l=-Ji.dot(Pa),c=Ji.lengthSq(),h=Math.abs(1-o*o),u,f,d,m;if(h>0)if(u=o*l-a,f=o*a-l,m=r*h,u>=0)if(f>=-m)if(f<=m){let p=1/h;u*=p,f*=p,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(lh).addScaledVector(Pa,f),d}intersectSphere(e,t){Ti.subVectors(e.center,this.origin);let i=Ti.dot(this.direction),n=Ti.dot(Ti)-i*i,r=e.radius*e.radius;if(n>r)return null;let o=Math.sqrt(r-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,n=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,n=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||r>n||((r>i||isNaN(i))&&(i=r),(o<n||isNaN(n))&&(n=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,t,i,n,r){ch.subVectors(t,e),Na.subVectors(i,e),hh.crossVectors(ch,Na);let o=this.direction.dot(hh),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ji.subVectors(this.origin,e);let l=a*this.direction.dot(Na.crossVectors(Ji,Na));if(l<0)return null;let c=a*this.direction.dot(ch.cross(Ji));if(c<0||l+c>o)return null;let h=-a*Ji.dot(hh);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ze=class s{constructor(e,t,i,n,r,o,a,l,c,h,u,f,d,m,p,A){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,o,a,l,c,h,u,f,d,m,p,A)}set(e,t,i,n,r,o,a,l,c,h,u,f,d,m,p,A){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=n,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=m,g[11]=p,g[15]=A,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,n=1/_s.setFromMatrixColumn(e,0).length(),r=1/_s.setFromMatrixColumn(e,1).length(),o=1/_s.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,m=a*h,p=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+m*c,t[5]=f-p*c,t[9]=-a*l,t[2]=p-f*c,t[6]=m+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,m=c*h,p=c*u;t[0]=f+p*a,t[4]=m*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-m,t[6]=p+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,m=c*h,p=c*u;t[0]=f-p*a,t[4]=-o*u,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*h,t[9]=p-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,d=o*u,m=a*h,p=a*u;t[0]=l*h,t[4]=m*c-d,t[8]=f*c+p,t[1]=l*u,t[5]=p*c+f,t[9]=d*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,m=a*l,p=a*c;t[0]=l*h,t[4]=p-f*u,t[8]=m*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+m,t[10]=f-p*u}else if(e.order==="XZY"){let f=o*l,d=o*c,m=a*l,p=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+p,t[5]=o*h,t[9]=d*u-m,t[2]=m*u-d,t[6]=a*h,t[10]=p*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(A_,e,p_)}lookAt(e,t,i){let n=this.elements;return kn.subVectors(e,t),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),Zi.crossVectors(i,kn),Zi.lengthSq()===0&&(Math.abs(i.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),Zi.crossVectors(i,kn)),Zi.normalize(),Oa.crossVectors(kn,Zi),n[0]=Zi.x,n[4]=Oa.x,n[8]=kn.x,n[1]=Zi.y,n[5]=Oa.y,n[9]=kn.y,n[2]=Zi.z,n[6]=Oa.z,n[10]=kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],m=i[2],p=i[6],A=i[10],g=i[14],v=i[3],_=i[7],y=i[11],S=i[15],C=n[0],E=n[4],b=n[8],x=n[12],M=n[1],N=n[5],R=n[9],z=n[13],I=n[2],U=n[6],P=n[10],X=n[14],q=n[3],Q=n[7],V=n[11],D=n[15];return r[0]=o*C+a*M+l*I+c*q,r[4]=o*E+a*N+l*U+c*Q,r[8]=o*b+a*R+l*P+c*V,r[12]=o*x+a*z+l*X+c*D,r[1]=h*C+u*M+f*I+d*q,r[5]=h*E+u*N+f*U+d*Q,r[9]=h*b+u*R+f*P+d*V,r[13]=h*x+u*z+f*X+d*D,r[2]=m*C+p*M+A*I+g*q,r[6]=m*E+p*N+A*U+g*Q,r[10]=m*b+p*R+A*P+g*V,r[14]=m*x+p*z+A*X+g*D,r[3]=v*C+_*M+y*I+S*q,r[7]=v*E+_*N+y*U+S*Q,r[11]=v*b+_*R+y*P+S*V,r[15]=v*x+_*z+y*X+S*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],m=e[3],p=e[7],A=e[11],g=e[15];return m*(+r*l*u-n*c*u-r*a*f+i*c*f+n*a*d-i*l*d)+p*(+t*l*d-t*c*f+r*o*f-n*o*d+n*c*h-r*l*h)+A*(+t*c*u-t*a*d-r*o*u+i*o*d+r*a*h-i*c*h)+g*(-n*a*h-t*l*u+t*a*f+n*o*u-i*o*f+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],m=e[12],p=e[13],A=e[14],g=e[15],v=u*A*c-p*f*c+p*l*d-a*A*d-u*l*g+a*f*g,_=m*f*c-h*A*c-m*l*d+o*A*d+h*l*g-o*f*g,y=h*p*c-m*u*c+m*a*d-o*p*d-h*a*g+o*u*g,S=m*u*l-h*p*l-m*a*f+o*p*f+h*a*A-o*u*A,C=t*v+i*_+n*y+r*S;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/C;return e[0]=v*E,e[1]=(p*f*r-u*A*r-p*n*d+i*A*d+u*n*g-i*f*g)*E,e[2]=(a*A*r-p*l*r+p*n*c-i*A*c-a*n*g+i*l*g)*E,e[3]=(u*l*r-a*f*r-u*n*c+i*f*c+a*n*d-i*l*d)*E,e[4]=_*E,e[5]=(h*A*r-m*f*r+m*n*d-t*A*d-h*n*g+t*f*g)*E,e[6]=(m*l*r-o*A*r-m*n*c+t*A*c+o*n*g-t*l*g)*E,e[7]=(o*f*r-h*l*r+h*n*c-t*f*c-o*n*d+t*l*d)*E,e[8]=y*E,e[9]=(m*u*r-h*p*r-m*i*d+t*p*d+h*i*g-t*u*g)*E,e[10]=(o*p*r-m*a*r+m*i*c-t*p*c-o*i*g+t*a*g)*E,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*d-t*a*d)*E,e[12]=S*E,e[13]=(h*p*n-m*u*n+m*i*f-t*p*f-h*i*A+t*u*A)*E,e[14]=(m*a*n-o*p*n-m*i*l+t*p*l+o*i*A-t*a*A)*E,e[15]=(o*u*n-h*a*n+h*i*l-t*u*l-o*i*f+t*a*f)*E,this}scale(e){let t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,o){return this.set(1,i,r,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,m=r*u,p=o*h,A=o*u,g=a*u,v=l*c,_=l*h,y=l*u,S=i.x,C=i.y,E=i.z;return n[0]=(1-(p+g))*S,n[1]=(d+y)*S,n[2]=(m-_)*S,n[3]=0,n[4]=(d-y)*C,n[5]=(1-(f+g))*C,n[6]=(A+v)*C,n[7]=0,n[8]=(m+_)*E,n[9]=(A-v)*E,n[10]=(1-(f+p))*E,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements,r=_s.set(n[0],n[1],n[2]).length(),o=_s.set(n[4],n[5],n[6]).length(),a=_s.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),e.x=n[12],e.y=n[13],e.z=n[14],ai.copy(this);let c=1/r,h=1/o,u=1/a;return ai.elements[0]*=c,ai.elements[1]*=c,ai.elements[2]*=c,ai.elements[4]*=h,ai.elements[5]*=h,ai.elements[6]*=h,ai.elements[8]*=u,ai.elements[9]*=u,ai.elements[10]*=u,t.setFromRotationMatrix(ai),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,n,r,o,a=Li){let l=this.elements,c=2*r/(t-e),h=2*r/(i-n),u=(t+e)/(t-e),f=(i+n)/(i-n),d,m;if(a===Li)d=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===gl)d=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,r,o,a=Li){let l=this.elements,c=1/(t-e),h=1/(i-n),u=1/(o-r),f=(t+e)*c,d=(i+n)*h,m,p;if(a===Li)m=(o+r)*u,p=-2*u;else if(a===gl)m=r*u,p=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=p,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},_s=new K,ai=new Ze,A_=new K(0,0,0),p_=new K(1,1,1),Zi=new K,Oa=new K,kn=new K,gA=new Ze,_A=new ui,El=class s{constructor(e=0,t=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,r=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],u=n[2],f=n[6],d=n[10];switch(t){case"XYZ":this._y=Math.asin(qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return gA.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gA,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _A.setFromEuler(this),this.setFromQuaternion(_A,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};El.DEFAULT_ORDER="XYZ";var Sl=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},m_=0,vA=new K,vs=new ui,Ii=new Ze,ka=new K,yo=new K,g_=new K,__=new ui,yA=new K(1,0,0),xA=new K(0,1,0),EA=new K(0,0,1),v_={type:"added"},y_={type:"removed"},It=class s extends nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:m_++}),this.uuid=hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new K,t=new El,i=new ui,n=new K(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ze},normalMatrix:{value:new $e}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.multiply(vs),this}rotateOnWorldAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.premultiply(vs),this}rotateX(e){return this.rotateOnAxis(yA,e)}rotateY(e){return this.rotateOnAxis(xA,e)}rotateZ(e){return this.rotateOnAxis(EA,e)}translateOnAxis(e,t){return vA.copy(e).applyQuaternion(this.quaternion),this.position.add(vA.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yA,e)}translateY(e){return this.translateOnAxis(xA,e)}translateZ(e){return this.translateOnAxis(EA,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ka.copy(e):ka.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(yo,ka,this.up):Ii.lookAt(ka,yo,this.up),this.quaternion.setFromRotationMatrix(Ii),n&&(Ii.extractRotation(n.matrixWorld),vs.setFromRotationMatrix(Ii),this.quaternion.premultiply(vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(v_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(y_)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yo,e,g_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yo,__,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let n=this.children;for(let r=0,o=n.length;r<o;r++){let a=n[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));n.material=a}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];n.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=n,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}};It.DEFAULT_UP=new K(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var li=new K,bi=new K,uh=new K,wi=new K,ys=new K,xs=new K,SA=new K,fh=new K,dh=new K,Ah=new K,Qa=!1,Bs=class s{constructor(e=new K,t=new K,i=new K){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),li.subVectors(e,t),n.cross(li);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){li.subVectors(n,t),bi.subVectors(i,t),uh.subVectors(e,t);let o=li.dot(li),a=li.dot(bi),l=li.dot(uh),c=bi.dot(bi),h=bi.dot(uh),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,m=(o*h-a*l)*f;return r.set(1-d-m,m,d)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getUV(e,t,i,n,r,o,a,l){return Qa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qa=!0),this.getInterpolation(e,t,i,n,r,o,a,l)}static getInterpolation(e,t,i,n,r,o,a,l){return this.getBarycoord(e,t,i,n,wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wi.x),l.addScaledVector(o,wi.y),l.addScaledVector(a,wi.z),l)}static isFrontFacing(e,t,i,n){return li.subVectors(i,t),bi.subVectors(e,t),li.cross(bi).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),li.cross(bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,n,r){return Qa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qa=!0),s.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}getInterpolation(e,t,i,n,r){return s.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,r=this.c,o,a;ys.subVectors(n,i),xs.subVectors(r,i),fh.subVectors(e,i);let l=ys.dot(fh),c=xs.dot(fh);if(l<=0&&c<=0)return t.copy(i);dh.subVectors(e,n);let h=ys.dot(dh),u=xs.dot(dh);if(h>=0&&u<=h)return t.copy(n);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(ys,o);Ah.subVectors(e,r);let d=ys.dot(Ah),m=xs.dot(Ah);if(m>=0&&d<=m)return t.copy(r);let p=d*c-l*m;if(p<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(i).addScaledVector(xs,a);let A=h*m-d*u;if(A<=0&&u-h>=0&&d-m>=0)return SA.subVectors(r,n),a=(u-h)/(u-h+(d-m)),t.copy(n).addScaledVector(SA,a);let g=1/(A+p+f);return o=p*g,a=f*g,t.copy(i).addScaledVector(ys,o).addScaledVector(xs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Bp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},Ga={h:0,s:0,l:0};function ph(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Le=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=at){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=st.workingColorSpace){if(e=vu(e,1),t=qt(t,0,1),i=qt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=ph(o,r,e+1/3),this.g=ph(o,r,e),this.b=ph(o,r,e-1/3)}return st.toWorkingColorSpace(this,n),this}setStyle(e,t=at){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=n[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=at){let i=Bp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}copyLinearToSRGB(e){return this.r=ih(e.r),this.g=ih(e.g),this.b=ih(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=at){return st.fromWorkingColorSpace(sn.copy(this),e),Math.round(qt(sn.r*255,0,255))*65536+Math.round(qt(sn.g*255,0,255))*256+Math.round(qt(sn.b*255,0,255))}getHexString(e=at){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(sn.copy(this),t);let i=sn.r,n=sn.g,r=sn.b,o=Math.max(i,n,r),a=Math.min(i,n,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=at){st.fromWorkingColorSpace(sn.copy(this),e);let t=sn.r,i=sn.g,n=sn.b;return e!==at?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+t,ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ji),e.getHSL(Ga);let i=Bo(ji.h,Ga.h,t),n=Bo(ji.s,Ga.s,t),r=Bo(ji.l,Ga.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},sn=new Le;Le.NAMES=Bp;var x_=0,Gn=class extends nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:x_++}),this.uuid=hi(),this.name="",this.type="Material",this.blending=Ls,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dh,this.blendDst=Lh,this.blendEquation=wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=al,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hA,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(i.blending=this.blending),this.side!==Ai&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Dh&&(i.blendSrc=this.blendSrc),this.blendDst!==Lh&&(i.blendDst=this.blendDst),this.blendEquation!==wr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==al&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hA&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=n(e.textures),o=n(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Rn=class extends Gn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Pt=new K,za=new Qe,ct=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ph,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)za.fromBufferAttribute(this,t),za.applyMatrix3(e),this.setXY(t,za.x,za.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=fi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ft(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fi(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fi(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fi(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),n=ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),n=ft(n,this.array),r=ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ph&&(e.usage=this.usage),e}};var Cl=class extends ct{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ml=class extends ct{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Dt=class extends ct{constructor(e,t,i){super(new Float32Array(e),t,i)}};var E_=0,Xn=new Ze,mh=new It,Es=new K,Qn=new _n,xo=new _n,Xt=new K,bt=class s extends nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:E_++}),this.uuid=hi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wp(e)?Ml:Cl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new $e().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xn.makeRotationFromQuaternion(e),this.applyMatrix4(Xn),this}rotateX(e){return Xn.makeRotationX(e),this.applyMatrix4(Xn),this}rotateY(e){return Xn.makeRotationY(e),this.applyMatrix4(Xn),this}rotateZ(e){return Xn.makeRotationZ(e),this.applyMatrix4(Xn),this}translate(e,t,i){return Xn.makeTranslation(e,t,i),this.applyMatrix4(Xn),this}scale(e,t,i){return Xn.makeScale(e,t,i),this.applyMatrix4(Xn),this}lookAt(e){return mh.lookAt(e),mh.updateMatrix(),this.applyMatrix4(mh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(e){let t=[];for(let i=0,n=e.length;i<n;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Dt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _n);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let r=t[i];Qn.setFromBufferAttribute(r),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new K,1/0);return}if(e){let i=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];xo.setFromBufferAttribute(a),this.morphTargetsRelative?(Xt.addVectors(Qn.min,xo.min),Qn.expandByPoint(Xt),Xt.addVectors(Qn.max,xo.max),Qn.expandByPoint(Xt)):(Qn.expandByPoint(xo.min),Qn.expandByPoint(xo.max))}Qn.getCenter(i);let n=0;for(let r=0,o=e.count;r<o;r++)Xt.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(Xt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Xt.fromBufferAttribute(a,c),l&&(Es.fromBufferAttribute(e,c),Xt.add(Es)),n=Math.max(n,i.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,n=t.position.array,r=t.normal.array,o=t.uv.array,a=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ct(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let M=0;M<a;M++)c[M]=new K,h[M]=new K;let u=new K,f=new K,d=new K,m=new Qe,p=new Qe,A=new Qe,g=new K,v=new K;function _(M,N,R){u.fromArray(n,M*3),f.fromArray(n,N*3),d.fromArray(n,R*3),m.fromArray(o,M*2),p.fromArray(o,N*2),A.fromArray(o,R*2),f.sub(u),d.sub(u),p.sub(m),A.sub(m);let z=1/(p.x*A.y-A.x*p.y);isFinite(z)&&(g.copy(f).multiplyScalar(A.y).addScaledVector(d,-p.y).multiplyScalar(z),v.copy(d).multiplyScalar(p.x).addScaledVector(f,-A.x).multiplyScalar(z),c[M].add(g),c[N].add(g),c[R].add(g),h[M].add(v),h[N].add(v),h[R].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let M=0,N=y.length;M<N;++M){let R=y[M],z=R.start,I=R.count;for(let U=z,P=z+I;U<P;U+=3)_(i[U+0],i[U+1],i[U+2])}let S=new K,C=new K,E=new K,b=new K;function x(M){E.fromArray(r,M*3),b.copy(E);let N=c[M];S.copy(N),S.sub(E.multiplyScalar(E.dot(N))).normalize(),C.crossVectors(b,N);let z=C.dot(h[M])<0?-1:1;l[M*4]=S.x,l[M*4+1]=S.y,l[M*4+2]=S.z,l[M*4+3]=z}for(let M=0,N=y.length;M<N;++M){let R=y[M],z=R.start,I=R.count;for(let U=z,P=z+I;U<P;U+=3)x(i[U+0]),x(i[U+1]),x(i[U+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ct(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let n=new K,r=new K,o=new K,a=new K,l=new K,c=new K,h=new K,u=new K;if(e)for(let f=0,d=e.count;f<d;f+=3){let m=e.getX(f+0),p=e.getX(f+1),A=e.getX(f+2);n.fromBufferAttribute(t,m),r.fromBufferAttribute(t,p),o.fromBufferAttribute(t,A),h.subVectors(o,r),u.subVectors(n,r),h.cross(u),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,p),c.fromBufferAttribute(i,A),a.add(h),l.add(h),c.add(h),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(A,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)n.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(n,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,m=0;for(let p=0,A=l.length;p<A;p++){a.isInterleavedBufferAttribute?d=l[p]*a.data.stride+a.offset:d=l[p]*h;for(let g=0;g<h;g++)f[m++]=c[d++]}return new ct(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,i=this.index.array,n=this.attributes;for(let a in n){let l=n[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(n[l]=h,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let n=e.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},CA=new Ze,Tr=new Qs,Ha=new vn,MA=new K,Ss=new K,Cs=new K,Ms=new K,gh=new K,Va=new K,Wa=new Qe,Ka=new Qe,Xa=new Qe,TA=new K,IA=new K,bA=new K,qa=new K,Ya=new K,_t=class extends It{constructor(e=new bt,t=new Rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let a=this.morphTargetInfluences;if(r&&a){Va.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(gh.fromBufferAttribute(u,e),o?Va.addScaledVector(gh,h):Va.addScaledVector(gh.sub(t),h))}t.add(Va)}return t}raycast(e,t){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ha.copy(i.boundingSphere),Ha.applyMatrix4(r),Tr.copy(e.ray).recast(e.near),!(Ha.containsPoint(Tr.origin)===!1&&(Tr.intersectSphere(Ha,MA)===null||Tr.origin.distanceToSquared(MA)>(e.far-e.near)**2))&&(CA.copy(r).invert(),Tr.copy(e.ray).applyMatrix4(CA),!(i.boundingBox!==null&&Tr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Tr)))}_computeIntersections(e,t,i){let n,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,p=f.length;m<p;m++){let A=f[m],g=o[A.materialIndex],v=Math.max(A.start,d.start),_=Math.min(a.count,Math.min(A.start+A.count,d.start+d.count));for(let y=v,S=_;y<S;y+=3){let C=a.getX(y),E=a.getX(y+1),b=a.getX(y+2);n=Ja(this,g,e,i,c,h,u,C,E,b),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=A.materialIndex,t.push(n))}}else{let m=Math.max(0,d.start),p=Math.min(a.count,d.start+d.count);for(let A=m,g=p;A<g;A+=3){let v=a.getX(A),_=a.getX(A+1),y=a.getX(A+2);n=Ja(this,o,e,i,c,h,u,v,_,y),n&&(n.faceIndex=Math.floor(A/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,p=f.length;m<p;m++){let A=f[m],g=o[A.materialIndex],v=Math.max(A.start,d.start),_=Math.min(l.count,Math.min(A.start+A.count,d.start+d.count));for(let y=v,S=_;y<S;y+=3){let C=y,E=y+1,b=y+2;n=Ja(this,g,e,i,c,h,u,C,E,b),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=A.materialIndex,t.push(n))}}else{let m=Math.max(0,d.start),p=Math.min(l.count,d.start+d.count);for(let A=m,g=p;A<g;A+=3){let v=A,_=A+1,y=A+2;n=Ja(this,o,e,i,c,h,u,v,_,y),n&&(n.faceIndex=Math.floor(A/3),t.push(n))}}}};function S_(s,e,t,i,n,r,o,a){let l;if(e.side===Bn?l=i.intersectTriangle(o,r,n,!0,a):l=i.intersectTriangle(n,r,o,e.side===Ai,a),l===null)return null;Ya.copy(a),Ya.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Ya);return c<t.near||c>t.far?null:{distance:c,point:Ya.clone(),object:s}}function Ja(s,e,t,i,n,r,o,a,l,c){s.getVertexPosition(a,Ss),s.getVertexPosition(l,Cs),s.getVertexPosition(c,Ms);let h=S_(s,e,t,i,Ss,Cs,Ms,qa);if(h){n&&(Wa.fromBufferAttribute(n,a),Ka.fromBufferAttribute(n,l),Xa.fromBufferAttribute(n,c),h.uv=Bs.getInterpolation(qa,Ss,Cs,Ms,Wa,Ka,Xa,new Qe)),r&&(Wa.fromBufferAttribute(r,a),Ka.fromBufferAttribute(r,l),Xa.fromBufferAttribute(r,c),h.uv1=Bs.getInterpolation(qa,Ss,Cs,Ms,Wa,Ka,Xa,new Qe),h.uv2=h.uv1),o&&(TA.fromBufferAttribute(o,a),IA.fromBufferAttribute(o,l),bA.fromBufferAttribute(o,c),h.normal=Bs.getInterpolation(qa,Ss,Cs,Ms,TA,IA,bA,new K),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new K,materialIndex:0};Bs.getNormal(Ss,Cs,Ms,u.normal),h.face=u}return h}var No=class s extends bt{constructor(e=1,t=1,i=1,n=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:o};let a=this;n=Math.floor(n),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;m("z","y","x",-1,-1,i,t,e,o,r,0),m("z","y","x",1,-1,i,t,-e,o,r,1),m("x","z","y",1,1,e,i,t,n,o,2),m("x","z","y",1,-1,e,i,-t,n,o,3),m("x","y","z",1,-1,e,t,i,n,r,4),m("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new Dt(c,3)),this.setAttribute("normal",new Dt(h,3)),this.setAttribute("uv",new Dt(u,2));function m(p,A,g,v,_,y,S,C,E,b,x){let M=y/E,N=S/b,R=y/2,z=S/2,I=C/2,U=E+1,P=b+1,X=0,q=0,Q=new K;for(let V=0;V<P;V++){let D=V*N-z;for(let H=0;H<U;H++){let L=H*M-R;Q[p]=L*v,Q[A]=D*_,Q[g]=I,c.push(Q.x,Q.y,Q.z),Q[p]=0,Q[A]=0,Q[g]=C>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(H/E),u.push(1-V/b),X+=1}}for(let V=0;V<b;V++)for(let D=0;D<E;D++){let H=f+D+U*V,L=f+D+U*(V+1),k=f+(D+1)+U*(V+1),W=f+(D+1)+U*V;l.push(H,L,W),l.push(L,k,W),q+=6}a.addGroup(d,q,x),d+=q,f+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Gs(s){let e={};for(let t in s){e[t]={};for(let i in s[t]){let n=s[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function An(s){let e={};for(let t=0;t<s.length;t++){let i=Gs(s[t]);for(let n in i)e[n]=i[n]}return e}function C_(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Rp(s){return s.getRenderTarget()===null?s.outputColorSpace:st.workingColorSpace}var gi={clone:Gs,merge:An},M_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,T_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,vt=class extends Gn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=M_,this.fragmentShader=T_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gs(e.uniforms),this.uniformsGroups=C_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let o=this.uniforms[n].value;o&&o.isTexture?t.uniforms[n]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[n]={type:"m4",value:o.toArray()}:t.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Tl=class extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=Li}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ht=class extends Tl{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ks*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(wo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ks*2*Math.atan(Math.tan(wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,n,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(wo*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*n/l,t-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ts=-90,Is=1,Qh=class extends It{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Ht(Ts,Is,e,t);n.layers=this.layers,this.add(n);let r=new Ht(Ts,Is,e,t);r.layers=this.layers,this.add(r);let o=new Ht(Ts,Is,e,t);o.layers=this.layers,this.add(o);let a=new Ht(Ts,Is,e,t);a.layers=this.layers,this.add(a);let l=new Ht(Ts,Is,e,t);l.layers=this.layers,this.add(l);let c=new Ht(Ts,Is,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Li)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===gl)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,r),e.setRenderTarget(i,1,n),e.render(t,o),e.setRenderTarget(i,2,n),e.render(t,a),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=p,e.setRenderTarget(i,5,n),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},Il=class extends kt{constructor(e,t,i,n,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Fr,super(e,t,i,n,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Gh=class extends gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];t.encoding!==void 0&&(Ro("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Lr?at:pn),this.texture=new Il(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Et}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new No(5,5,5),r=new vt({name:"CubemapFromEquirect",uniforms:Gs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bn,blending:di});r.uniforms.tEquirect.value=t;let o=new _t(n,r),a=t.minFilter;return t.minFilter===pi&&(t.minFilter=Et),new Qh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,n){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,n);e.setRenderTarget(r)}},_h=new K,I_=new K,b_=new $e,Di=class{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=_h.subVectors(i,t).cross(I_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(_h),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||b_.getNormalMatrix(e),n=this.coplanarPoint(_h).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ir=new vn,Za=new K,Oo=class{constructor(e=new Di,t=new Di,i=new Di,n=new Di,r=new Di,o=new Di){this.planes=[e,t,i,n,r,o]}set(e,t,i,n,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Li){let i=this.planes,n=e.elements,r=n[0],o=n[1],a=n[2],l=n[3],c=n[4],h=n[5],u=n[6],f=n[7],d=n[8],m=n[9],p=n[10],A=n[11],g=n[12],v=n[13],_=n[14],y=n[15];if(i[0].setComponents(l-r,f-c,A-d,y-g).normalize(),i[1].setComponents(l+r,f+c,A+d,y+g).normalize(),i[2].setComponents(l+o,f+h,A+m,y+v).normalize(),i[3].setComponents(l-o,f-h,A-m,y-v).normalize(),i[4].setComponents(l-a,f-u,A-p,y-_).normalize(),t===Li)i[5].setComponents(l+a,f+u,A+p,y+_).normalize();else if(t===gl)i[5].setComponents(a,u,p,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ir.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ir)}intersectsSprite(e){return Ir.center.set(0,0,0),Ir.radius=.7071067811865476,Ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ir)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(Za.x=n.normal.x>0?e.max.x:e.min.x,Za.y=n.normal.y>0?e.max.y:e.min.y,Za.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Za)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Dp(){let s=null,e=!1,t=null,i=null;function n(r,o){t(r,o),i=s.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(n),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function w_(s,e){let t=e.isWebGL2,i=new WeakMap;function n(c,h){let u=c.array,f=c.usage,d=u.byteLength,m=s.createBuffer();s.bindBuffer(h,m),s.bufferData(h,u,f),c.onUploadCallback();let p;if(u instanceof Float32Array)p=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)p=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else p=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=s.SHORT;else if(u instanceof Uint32Array)p=s.UNSIGNED_INT;else if(u instanceof Int32Array)p=s.INT;else if(u instanceof Int8Array)p=s.BYTE;else if(u instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:d}}function r(c,h,u){let f=h.array,d=h._updateRange,m=h.updateRanges;if(s.bindBuffer(u,c),d.count===-1&&m.length===0&&s.bufferSubData(u,0,f),m.length!==0){for(let p=0,A=m.length;p<A;p++){let g=m[p];t?s.bufferSubData(u,g.start*f.BYTES_PER_ELEMENT,f,g.start,g.count):s.bufferSubData(u,g.start*f.BYTES_PER_ELEMENT,f.subarray(g.start,g.start+g.count))}h.clearUpdateRanges()}d.count!==-1&&(t?s.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):s.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(s.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);if(u===void 0)i.set(c,n(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}var Ui=class s extends bt{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,u=e/a,f=t/l,d=[],m=[],p=[],A=[];for(let g=0;g<h;g++){let v=g*f-o;for(let _=0;_<c;_++){let y=_*u-r;m.push(y,-v,0),p.push(0,0,1),A.push(_/a),A.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){let _=v+c*g,y=v+c*(g+1),S=v+1+c*(g+1),C=v+1+c*g;d.push(_,y,C),d.push(y,S,C)}this.setIndex(d),this.setAttribute("position",new Dt(m,3)),this.setAttribute("normal",new Dt(p,3)),this.setAttribute("uv",new Dt(A,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},B_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,R_=`#ifdef USE_ALPHAHASH
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
#endif`,D_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,L_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,U_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,F_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,P_=`#ifdef USE_AOMAP
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
#endif`,N_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,O_=`#ifdef USE_BATCHING
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
#endif`,k_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Q_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,G_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,z_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,H_=`#ifdef USE_IRIDESCENCE
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
#endif`,V_=`#ifdef USE_BUMPMAP
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
#endif`,W_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,K_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,X_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,q_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Y_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,J_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Z_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,j_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,$_=`#define PI 3.141592653589793
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
} // validated`,ev=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tv=`vec3 transformedNormal = objectNormal;
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
#endif`,nv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ov="gl_FragColor = linearToOutputTexel( gl_FragColor );",av=`
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
}`,lv=`#ifdef USE_ENVMAP
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
#endif`,cv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hv=`#ifdef USE_ENVMAP
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
#endif`,uv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fv=`#ifdef USE_ENVMAP
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
#endif`,dv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Av=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gv=`#ifdef USE_GRADIENTMAP
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
}`,_v=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,vv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ev=`uniform bool receiveShadow;
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
#endif`,Sv=`#ifdef USE_ENVMAP
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
#endif`,Cv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Iv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bv=`PhysicalMaterial material;
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
#endif`,wv=`struct PhysicalMaterial {
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
}`,Bv=`
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
#endif`,Rv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Dv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Uv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Pv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Nv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ov=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qv=`#if defined( USE_POINTS_UV )
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
#endif`,Gv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vv=`#ifdef USE_MORPHNORMALS
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
#endif`,Wv=`#ifdef USE_MORPHTARGETS
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
#endif`,Kv=`#ifdef USE_MORPHTARGETS
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
#endif`,Xv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Yv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jv=`#ifdef USE_NORMALMAP
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
#endif`,$v=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ey=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ty=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ny=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ry=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ay=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ly=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ay=`float getShadowMask() {
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
}`,py=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,my=`#ifdef USE_SKINNING
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
#endif`,gy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_y=`#ifdef USE_SKINNING
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
#endif`,vy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ey=`#ifndef saturate
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sy=`#ifdef USE_TRANSMISSION
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
#endif`,Cy=`#ifdef USE_TRANSMISSION
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
#endif`,My=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ty=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Iy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,by=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,wy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,By=`uniform sampler2D t2D;
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
}`,Ry=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fy=`#include <common>
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
}`,Py=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
}`,Ny=`#define DISTANCE
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
}`,Oy=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ky=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gy=`uniform float scale;
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
}`,zy=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hy=`#include <common>
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
}`,Vy=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Wy=`#define LAMBERT
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
}`,Ky=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Xy=`#define MATCAP
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
}`,qy=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Yy=`#define NORMAL
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
}`,Jy=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Zy=`#define PHONG
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
}`,jy=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,$y=`#define STANDARD
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
}`,ex=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,tx=`#define TOON
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
}`,nx=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ix=`uniform float size;
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
}`,rx=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,sx=`#include <common>
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
}`,ox=`uniform vec3 color;
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
}`,ax=`uniform float rotation;
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
}`,lx=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Je={alphahash_fragment:B_,alphahash_pars_fragment:R_,alphamap_fragment:D_,alphamap_pars_fragment:L_,alphatest_fragment:U_,alphatest_pars_fragment:F_,aomap_fragment:P_,aomap_pars_fragment:N_,batching_pars_vertex:O_,batching_vertex:k_,begin_vertex:Q_,beginnormal_vertex:G_,bsdfs:z_,iridescence_fragment:H_,bumpmap_pars_fragment:V_,clipping_planes_fragment:W_,clipping_planes_pars_fragment:K_,clipping_planes_pars_vertex:X_,clipping_planes_vertex:q_,color_fragment:Y_,color_pars_fragment:J_,color_pars_vertex:Z_,color_vertex:j_,common:$_,cube_uv_reflection_fragment:ev,defaultnormal_vertex:tv,displacementmap_pars_vertex:nv,displacementmap_vertex:iv,emissivemap_fragment:rv,emissivemap_pars_fragment:sv,colorspace_fragment:ov,colorspace_pars_fragment:av,envmap_fragment:lv,envmap_common_pars_fragment:cv,envmap_pars_fragment:hv,envmap_pars_vertex:uv,envmap_physical_pars_fragment:Sv,envmap_vertex:fv,fog_vertex:dv,fog_pars_vertex:Av,fog_fragment:pv,fog_pars_fragment:mv,gradientmap_pars_fragment:gv,lightmap_fragment:_v,lightmap_pars_fragment:vv,lights_lambert_fragment:yv,lights_lambert_pars_fragment:xv,lights_pars_begin:Ev,lights_toon_fragment:Cv,lights_toon_pars_fragment:Mv,lights_phong_fragment:Tv,lights_phong_pars_fragment:Iv,lights_physical_fragment:bv,lights_physical_pars_fragment:wv,lights_fragment_begin:Bv,lights_fragment_maps:Rv,lights_fragment_end:Dv,logdepthbuf_fragment:Lv,logdepthbuf_pars_fragment:Uv,logdepthbuf_pars_vertex:Fv,logdepthbuf_vertex:Pv,map_fragment:Nv,map_pars_fragment:Ov,map_particle_fragment:kv,map_particle_pars_fragment:Qv,metalnessmap_fragment:Gv,metalnessmap_pars_fragment:zv,morphcolor_vertex:Hv,morphnormal_vertex:Vv,morphtarget_pars_vertex:Wv,morphtarget_vertex:Kv,normal_fragment_begin:Xv,normal_fragment_maps:qv,normal_pars_fragment:Yv,normal_pars_vertex:Jv,normal_vertex:Zv,normalmap_pars_fragment:jv,clearcoat_normal_fragment_begin:$v,clearcoat_normal_fragment_maps:ey,clearcoat_pars_fragment:ty,iridescence_pars_fragment:ny,opaque_fragment:iy,packing:ry,premultiplied_alpha_fragment:sy,project_vertex:oy,dithering_fragment:ay,dithering_pars_fragment:ly,roughnessmap_fragment:cy,roughnessmap_pars_fragment:hy,shadowmap_pars_fragment:uy,shadowmap_pars_vertex:fy,shadowmap_vertex:dy,shadowmask_pars_fragment:Ay,skinbase_vertex:py,skinning_pars_vertex:my,skinning_vertex:gy,skinnormal_vertex:_y,specularmap_fragment:vy,specularmap_pars_fragment:yy,tonemapping_fragment:xy,tonemapping_pars_fragment:Ey,transmission_fragment:Sy,transmission_pars_fragment:Cy,uv_pars_fragment:My,uv_pars_vertex:Ty,uv_vertex:Iy,worldpos_vertex:by,background_vert:wy,background_frag:By,backgroundCube_vert:Ry,backgroundCube_frag:Dy,cube_vert:Ly,cube_frag:Uy,depth_vert:Fy,depth_frag:Py,distanceRGBA_vert:Ny,distanceRGBA_frag:Oy,equirect_vert:ky,equirect_frag:Qy,linedashed_vert:Gy,linedashed_frag:zy,meshbasic_vert:Hy,meshbasic_frag:Vy,meshlambert_vert:Wy,meshlambert_frag:Ky,meshmatcap_vert:Xy,meshmatcap_frag:qy,meshnormal_vert:Yy,meshnormal_frag:Jy,meshphong_vert:Zy,meshphong_frag:jy,meshphysical_vert:$y,meshphysical_frag:ex,meshtoon_vert:tx,meshtoon_frag:nx,points_vert:ix,points_frag:rx,shadow_vert:sx,shadow_frag:ox,sprite_vert:ax,sprite_frag:lx},Be={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},ci={basic:{uniforms:An([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:An([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Le(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:An([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:An([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:An([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new Le(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:An([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:An([Be.points,Be.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:An([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:An([Be.common,Be.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:An([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:An([Be.sprite,Be.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:An([Be.common,Be.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:An([Be.lights,Be.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};ci.physical={uniforms:An([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};var ja={r:0,b:0,g:0};function cx(s,e,t,i,n,r,o){let a=new Le(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function m(A,g){let v=!1,_=g.isScene===!0?g.background:null;_&&_.isTexture&&(_=(g.backgroundBlurriness>0?t:e).get(_)),_===null?p(a,l):_&&_.isColor&&(p(_,1),v=!0);let y=s.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Zl)?(h===void 0&&(h=new _t(new No(1,1,1),new vt({name:"BackgroundCubeMaterial",uniforms:Gs(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,C,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,h.material.toneMapped=st.getTransfer(_.colorSpace)!==At,(u!==_||f!==_.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=_,f=_.version,d=s.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new _t(new Ui(2,2),new vt({name:"BackgroundMaterial",uniforms:Gs(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=st.getTransfer(_.colorSpace)!==At,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=_,f=_.version,d=s.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function p(A,g){A.getRGB(ja,Rp(s)),i.buffers.color.setClear(ja.r,ja.g,ja.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(A,g=1){a.set(A),l=g,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,p(a,l)},render:m}}function hx(s,e,t,i){let n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=A(null),c=l,h=!1;function u(I,U,P,X,q){let Q=!1;if(o){let V=p(X,P,U);c!==V&&(c=V,d(c.object)),Q=g(I,X,P,q),Q&&v(I,X,P,q)}else{let V=U.wireframe===!0;(c.geometry!==X.id||c.program!==P.id||c.wireframe!==V)&&(c.geometry=X.id,c.program=P.id,c.wireframe=V,Q=!0)}q!==null&&t.update(q,s.ELEMENT_ARRAY_BUFFER),(Q||h)&&(h=!1,b(I,U,P,X),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function f(){return i.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(I){return i.isWebGL2?s.bindVertexArray(I):r.bindVertexArrayOES(I)}function m(I){return i.isWebGL2?s.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function p(I,U,P){let X=P.wireframe===!0,q=a[I.id];q===void 0&&(q={},a[I.id]=q);let Q=q[U.id];Q===void 0&&(Q={},q[U.id]=Q);let V=Q[X];return V===void 0&&(V=A(f()),Q[X]=V),V}function A(I){let U=[],P=[],X=[];for(let q=0;q<n;q++)U[q]=0,P[q]=0,X[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:P,attributeDivisors:X,object:I,attributes:{},index:null}}function g(I,U,P,X){let q=c.attributes,Q=U.attributes,V=0,D=P.getAttributes();for(let H in D)if(D[H].location>=0){let k=q[H],W=Q[H];if(W===void 0&&(H==="instanceMatrix"&&I.instanceMatrix&&(W=I.instanceMatrix),H==="instanceColor"&&I.instanceColor&&(W=I.instanceColor)),k===void 0||k.attribute!==W||W&&k.data!==W.data)return!0;V++}return c.attributesNum!==V||c.index!==X}function v(I,U,P,X){let q={},Q=U.attributes,V=0,D=P.getAttributes();for(let H in D)if(D[H].location>=0){let k=Q[H];k===void 0&&(H==="instanceMatrix"&&I.instanceMatrix&&(k=I.instanceMatrix),H==="instanceColor"&&I.instanceColor&&(k=I.instanceColor));let W={};W.attribute=k,k&&k.data&&(W.data=k.data),q[H]=W,V++}c.attributes=q,c.attributesNum=V,c.index=X}function _(){let I=c.newAttributes;for(let U=0,P=I.length;U<P;U++)I[U]=0}function y(I){S(I,0)}function S(I,U){let P=c.newAttributes,X=c.enabledAttributes,q=c.attributeDivisors;P[I]=1,X[I]===0&&(s.enableVertexAttribArray(I),X[I]=1),q[I]!==U&&((i.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,U),q[I]=U)}function C(){let I=c.newAttributes,U=c.enabledAttributes;for(let P=0,X=U.length;P<X;P++)U[P]!==I[P]&&(s.disableVertexAttribArray(P),U[P]=0)}function E(I,U,P,X,q,Q,V){V===!0?s.vertexAttribIPointer(I,U,P,q,Q):s.vertexAttribPointer(I,U,P,X,q,Q)}function b(I,U,P,X){if(i.isWebGL2===!1&&(I.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();let q=X.attributes,Q=P.getAttributes(),V=U.defaultAttributeValues;for(let D in Q){let H=Q[D];if(H.location>=0){let L=q[D];if(L===void 0&&(D==="instanceMatrix"&&I.instanceMatrix&&(L=I.instanceMatrix),D==="instanceColor"&&I.instanceColor&&(L=I.instanceColor)),L!==void 0){let k=L.normalized,W=L.itemSize,ee=t.get(L);if(ee===void 0)continue;let J=ee.buffer,re=ee.type,pe=ee.bytesPerElement,ge=i.isWebGL2===!0&&(re===s.INT||re===s.UNSIGNED_INT||L.gpuType===vp);if(L.isInterleavedBufferAttribute){let fe=L.data,O=fe.stride,Oe=L.offset;if(fe.isInstancedInterleavedBuffer){for(let xe=0;xe<H.locationSize;xe++)S(H.location+xe,fe.meshPerAttribute);I.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let xe=0;xe<H.locationSize;xe++)y(H.location+xe);s.bindBuffer(s.ARRAY_BUFFER,J);for(let xe=0;xe<H.locationSize;xe++)E(H.location+xe,W/H.locationSize,re,k,O*pe,(Oe+W/H.locationSize*xe)*pe,ge)}else{if(L.isInstancedBufferAttribute){for(let fe=0;fe<H.locationSize;fe++)S(H.location+fe,L.meshPerAttribute);I.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let fe=0;fe<H.locationSize;fe++)y(H.location+fe);s.bindBuffer(s.ARRAY_BUFFER,J);for(let fe=0;fe<H.locationSize;fe++)E(H.location+fe,W/H.locationSize,re,k,W*pe,W/H.locationSize*fe*pe,ge)}}else if(V!==void 0){let k=V[D];if(k!==void 0)switch(k.length){case 2:s.vertexAttrib2fv(H.location,k);break;case 3:s.vertexAttrib3fv(H.location,k);break;case 4:s.vertexAttrib4fv(H.location,k);break;default:s.vertexAttrib1fv(H.location,k)}}}}C()}function x(){R();for(let I in a){let U=a[I];for(let P in U){let X=U[P];for(let q in X)m(X[q].object),delete X[q];delete U[P]}delete a[I]}}function M(I){if(a[I.id]===void 0)return;let U=a[I.id];for(let P in U){let X=U[P];for(let q in X)m(X[q].object),delete X[q];delete U[P]}delete a[I.id]}function N(I){for(let U in a){let P=a[U];if(P[I.id]===void 0)continue;let X=P[I.id];for(let q in X)m(X[q].object),delete X[q];delete P[I.id]}}function R(){z(),h=!0,c!==l&&(c=l,d(c.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:R,resetDefaultState:z,dispose:x,releaseStatesOfGeometry:M,releaseStatesOfProgram:N,initAttributes:_,enableAttribute:y,disableUnusedAttributes:C}}function ux(s,e,t,i){let n=i.isWebGL2,r;function o(h){r=h}function a(h,u){s.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,f){if(f===0)return;let d,m;if(n)d=s,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](r,h,u,f),t.update(u,r,f)}function c(h,u,f){if(f===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<f;m++)this.render(h[m],u[m]);else{d.multiDrawArraysWEBGL(r,h,0,u,0,f);let m=0;for(let p=0;p<f;p++)m+=u[p];t.update(m,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function fx(s,e,t){let i;function n(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),A=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),g=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),_=f>0,y=o||e.has("OES_texture_float"),S=_&&y,C=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:A,maxVaryings:g,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:S,maxSamples:C}}function dx(s){let e=this,t=null,i=0,n=!1,r=!1,o=new Di,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||n;return n=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let m=u.clippingPlanes,p=u.clipIntersection,A=u.clipShadows,g=s.get(u);if(!n||m===null||m.length===0||r&&!A)r?h(null):c();else{let v=r?0:i,_=v*4,y=g.clippingState||null;l.value=y,y=h(m,f,_,d);for(let S=0;S!==_;++S)y[S]=t[S];g.clippingState=y,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,d,m){let p=u!==null?u.length:0,A=null;if(p!==0){if(A=l.value,m!==!0||A===null){let g=d+p*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(A===null||A.length<g)&&(A=new Float32Array(g));for(let _=0,y=d;_!==p;++_,y+=4)o.copy(u[_]).applyMatrix4(v,a),o.normal.toArray(A,y),A[y+3]=o.constant}l.value=A,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,A}}function Ax(s){let e=new WeakMap;function t(o,a){return a===Uh?o.mapping=Fr:a===Fh&&(o.mapping=Ps),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Uh||a===Fh)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Gh(l.height/2);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",n),t(c.texture,o.mapping)}else return null}}return o}function n(o){let a=o.target;a.removeEventListener("dispose",n);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var ir=class extends Tl{constructor(e=-1,t=1,i=1,n=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-e,o=i+e,a=n+t,l=n-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Rs=4,wA=[.125,.215,.35,.446,.526,.582],Br=20,vh=new ir,BA=new Le,yh=null,xh=0,Eh=0,br=(1+Math.sqrt(5))/2,bs=1/br,RA=[new K(1,1,1),new K(-1,1,1),new K(1,1,-1),new K(-1,1,-1),new K(0,br,bs),new K(0,br,-bs),new K(bs,0,br),new K(-bs,0,br),new K(br,bs,0),new K(-br,bs,0)],bl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){yh=this._renderer.getRenderTarget(),xh=this._renderer.getActiveCubeFace(),Eh=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,n,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=UA(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=LA(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yh,xh,Eh),e.scissorTest=!1,$a(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fr||e.mapping===Ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yh=this._renderer.getRenderTarget(),xh=this._renderer.getActiveCubeFace(),Eh=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Et,minFilter:Et,generateMipmaps:!1,type:on,format:Nt,colorSpace:Ct,depthBuffer:!1},n=DA(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=DA(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=px(r)),this._blurMaterial=mx(r,e,t)}return n}_compileMaterial(e){let t=new _t(this._lodPlanes[0],e);this._renderer.compile(t,vh)}_sceneToCubeUV(e,t,i,n){let a=new Ht(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(BA),h.toneMapping=tr,h.autoClear=!1;let d=new Rn({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),m=new _t(new No,d),p=!1,A=e.background;A?A.isColor&&(d.color.copy(A),e.background=null,p=!0):(d.color.copy(BA),p=!0);for(let g=0;g<6;g++){let v=g%3;v===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):v===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));let _=this._cubeSize;$a(n,v*_,g>2?_:0,_,_),h.setRenderTarget(n),p&&h.render(m,a),h.render(e,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=A}_textureToCubeUV(e,t){let i=this._renderer,n=e.mapping===Fr||e.mapping===Ps;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=UA()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=LA());let r=n?this._cubemapMaterial:this._equirectMaterial,o=new _t(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;$a(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,vh)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){let r=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),o=RA[(n-1)%RA.length];this._blur(e,n-1,n,r,o)}t.autoClear=i}_blur(e,t,i,n,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,n,"latitudinal",r),this._halfBlur(o,e,i,i,n,"longitudinal",r)}_halfBlur(e,t,i,n,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new _t(this._lodPlanes[n],c),f=c.uniforms,d=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Br-1),p=r/m,A=isFinite(r)?1+Math.floor(h*p):Br;A>Br&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${A} samples when the maximum is set to ${Br}`);let g=[],v=0;for(let E=0;E<Br;++E){let b=E/p,x=Math.exp(-b*b/2);g.push(x),E===0?v+=x:E<A&&(v+=2*x)}for(let E=0;E<g.length;E++)g[E]=g[E]/v;f.envMap.value=e.texture,f.samples.value=A,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:_}=this;f.dTheta.value=m,f.mipInt.value=_-i;let y=this._sizeLods[n],S=3*y*(n>_-Rs?n-_+Rs:0),C=4*(this._cubeSize-y);$a(t,S,C,3*y,2*y),l.setRenderTarget(t),l.render(u,vh)}};function px(s){let e=[],t=[],i=[],n=s,r=s-Rs+1+wA.length;for(let o=0;o<r;o++){let a=Math.pow(2,n);t.push(a);let l=1/a;o>s-Rs?l=wA[o-s+Rs-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,m=6,p=3,A=2,g=1,v=new Float32Array(p*m*d),_=new Float32Array(A*m*d),y=new Float32Array(g*m*d);for(let C=0;C<d;C++){let E=C%3*2/3-1,b=C>2?0:-1,x=[E,b,0,E+2/3,b,0,E+2/3,b+1,0,E,b,0,E+2/3,b+1,0,E,b+1,0];v.set(x,p*m*C),_.set(f,A*m*C);let M=[C,C,C,C,C,C];y.set(M,g*m*C)}let S=new bt;S.setAttribute("position",new ct(v,p)),S.setAttribute("uv",new ct(_,A)),S.setAttribute("faceIndex",new ct(y,g)),e.push(S),n>Rs&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function DA(s,e,t){let i=new gn(s,e,t);return i.texture.mapping=Zl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $a(s,e,t,i,n){s.viewport.set(e,t,i,n),s.scissor.set(e,t,i,n)}function mx(s,e,t){let i=new Float32Array(Br),n=new K(0,1,0);return new vt({name:"SphericalGaussianBlur",defines:{n:Br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:yu(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function LA(){return new vt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yu(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function UA(){return new vt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function yu(){return`

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
	`}function gx(s){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Uh||l===Fh,h=l===Fr||l===Ps;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new bl(s)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&n(u)){t===null&&(t=new bl(s));let f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function n(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function _x(s){let e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let n=t(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function vx(s,e,t,i){let n={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let m in f.attributes)e.remove(f.attributes[m]);for(let m in f.morphAttributes){let p=f.morphAttributes[m];for(let A=0,g=p.length;A<g;A++)e.remove(p[A])}f.removeEventListener("dispose",o),delete n[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return n[f.id]===!0||(f.addEventListener("dispose",o),n[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let m in f)e.update(f[m],s.ARRAY_BUFFER);let d=u.morphAttributes;for(let m in d){let p=d[m];for(let A=0,g=p.length;A<g;A++)e.update(p[A],s.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,m=u.attributes.position,p=0;if(d!==null){let v=d.array;p=d.version;for(let _=0,y=v.length;_<y;_+=3){let S=v[_+0],C=v[_+1],E=v[_+2];f.push(S,C,C,E,E,S)}}else if(m!==void 0){let v=m.array;p=m.version;for(let _=0,y=v.length/3-1;_<y;_+=3){let S=_+0,C=_+1,E=_+2;f.push(S,C,C,E,E,S)}}else return;let A=new(wp(f)?Ml:Cl)(f,1);A.version=p;let g=r.get(u);g&&e.remove(g),r.set(u,A)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function yx(s,e,t,i){let n=i.isWebGL2,r;function o(d){r=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function h(d,m){s.drawElements(r,m,a,d*l),t.update(m,r,1)}function u(d,m,p){if(p===0)return;let A,g;if(n)A=s,g="drawElementsInstanced";else if(A=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",A===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}A[g](r,m,a,d*l,p),t.update(m,r,p)}function f(d,m,p){if(p===0)return;let A=e.get("WEBGL_multi_draw");if(A===null)for(let g=0;g<p;g++)this.render(d[g]/l,m[g]);else{A.multiDrawElementsWEBGL(r,m,0,a,d,0,p);let g=0;for(let v=0;v<p;v++)g+=m[v];t.update(g,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function xx(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function Ex(s,e){return s[0]-e[0]}function Sx(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Cx(s,e,t){let i={},n=new Float32Array(8),r=new WeakMap,o=new ot,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let f=c.morphTargetInfluences;if(e.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=d!==void 0?d.length:0,p=r.get(h);if(p===void 0||p.count!==m){let I=function(){R.dispose(),r.delete(h),h.removeEventListener("dispose",I)};p!==void 0&&p.texture.dispose();let v=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],E=h.morphAttributes.color||[],b=0;v===!0&&(b=1),_===!0&&(b=2),y===!0&&(b=3);let x=h.attributes.position.count*b,M=1;x>e.maxTextureSize&&(M=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let N=new Float32Array(x*M*4*m),R=new xl(N,x,M,m);R.type=mn,R.needsUpdate=!0;let z=b*4;for(let U=0;U<m;U++){let P=S[U],X=C[U],q=E[U],Q=x*M*4*U;for(let V=0;V<P.count;V++){let D=V*z;v===!0&&(o.fromBufferAttribute(P,V),N[Q+D+0]=o.x,N[Q+D+1]=o.y,N[Q+D+2]=o.z,N[Q+D+3]=0),_===!0&&(o.fromBufferAttribute(X,V),N[Q+D+4]=o.x,N[Q+D+5]=o.y,N[Q+D+6]=o.z,N[Q+D+7]=0),y===!0&&(o.fromBufferAttribute(q,V),N[Q+D+8]=o.x,N[Q+D+9]=o.y,N[Q+D+10]=o.z,N[Q+D+11]=q.itemSize===4?o.w:1)}}p={count:m,texture:R,size:new Qe(x,M)},r.set(h,p),h.addEventListener("dispose",I)}let A=0;for(let v=0;v<f.length;v++)A+=f[v];let g=h.morphTargetsRelative?1:1-A;u.getUniforms().setValue(s,"morphTargetBaseInfluence",g),u.getUniforms().setValue(s,"morphTargetInfluences",f),u.getUniforms().setValue(s,"morphTargetsTexture",p.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}else{let d=f===void 0?0:f.length,m=i[h.id];if(m===void 0||m.length!==d){m=[];for(let _=0;_<d;_++)m[_]=[_,0];i[h.id]=m}for(let _=0;_<d;_++){let y=m[_];y[0]=_,y[1]=f[_]}m.sort(Sx);for(let _=0;_<8;_++)_<d&&m[_][1]?(a[_][0]=m[_][0],a[_][1]=m[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(Ex);let p=h.morphAttributes.position,A=h.morphAttributes.normal,g=0;for(let _=0;_<8;_++){let y=a[_],S=y[0],C=y[1];S!==Number.MAX_SAFE_INTEGER&&C?(p&&h.getAttribute("morphTarget"+_)!==p[S]&&h.setAttribute("morphTarget"+_,p[S]),A&&h.getAttribute("morphNormal"+_)!==A[S]&&h.setAttribute("morphNormal"+_,A[S]),n[_]=C,g+=C):(p&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),A&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),n[_]=0)}let v=h.morphTargetsRelative?1:1-g;u.getUniforms().setValue(s,"morphTargetBaseInfluence",v),u.getUniforms().setValue(s,"morphTargetInfluences",n)}}return{update:l}}function Mx(s,e,t,i){let n=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(n.get(u)!==c&&(e.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;n.get(f)!==c&&(f.update(),n.set(f,c))}return u}function o(){n=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var wl=class extends kt{constructor(e,t,i,n,r,o,a,l,c,h){if(h=h!==void 0?h:Dr,h!==Dr&&h!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Dr&&(i=$i),i===void 0&&h===Ns&&(i=Rr),super(null,n,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:zt,this.minFilter=l!==void 0?l:zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Lp=new kt,Up=new wl(1,1);Up.compareFunction=bp;var Fp=new xl,Pp=new Po,Np=new Il,FA=[],PA=[],NA=new Float32Array(16),OA=new Float32Array(9),kA=new Float32Array(4);function Ks(s,e,t){let i=s[0];if(i<=0||i>0)return s;let n=e*t,r=FA[n];if(r===void 0&&(r=new Float32Array(n),FA[n]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Vt(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function Wt(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function tc(s,e){let t=PA[e];t===void 0&&(t=new Int32Array(e),PA[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function Tx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Ix(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;s.uniform2fv(this.addr,e),Wt(t,e)}}function bx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;s.uniform3fv(this.addr,e),Wt(t,e)}}function wx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;s.uniform4fv(this.addr,e),Wt(t,e)}}function Bx(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,i))return;kA.set(i),s.uniformMatrix2fv(this.addr,!1,kA),Wt(t,i)}}function Rx(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,i))return;OA.set(i),s.uniformMatrix3fv(this.addr,!1,OA),Wt(t,i)}}function Dx(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,i))return;NA.set(i),s.uniformMatrix4fv(this.addr,!1,NA),Wt(t,i)}}function Lx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Ux(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;s.uniform2iv(this.addr,e),Wt(t,e)}}function Fx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;s.uniform3iv(this.addr,e),Wt(t,e)}}function Px(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;s.uniform4iv(this.addr,e),Wt(t,e)}}function Nx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Ox(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;s.uniform2uiv(this.addr,e),Wt(t,e)}}function kx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;s.uniform3uiv(this.addr,e),Wt(t,e)}}function Qx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;s.uniform4uiv(this.addr,e),Wt(t,e)}}function Gx(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r=this.type===s.SAMPLER_2D_SHADOW?Up:Lp;t.setTexture2D(e||r,n)}function zx(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Pp,n)}function Hx(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Np,n)}function Vx(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Fp,n)}function Wx(s){switch(s){case 5126:return Tx;case 35664:return Ix;case 35665:return bx;case 35666:return wx;case 35674:return Bx;case 35675:return Rx;case 35676:return Dx;case 5124:case 35670:return Lx;case 35667:case 35671:return Ux;case 35668:case 35672:return Fx;case 35669:case 35673:return Px;case 5125:return Nx;case 36294:return Ox;case 36295:return kx;case 36296:return Qx;case 35678:case 36198:case 36298:case 36306:case 35682:return Gx;case 35679:case 36299:case 36307:return zx;case 35680:case 36300:case 36308:case 36293:return Hx;case 36289:case 36303:case 36311:case 36292:return Vx}}function Kx(s,e){s.uniform1fv(this.addr,e)}function Xx(s,e){let t=Ks(e,this.size,2);s.uniform2fv(this.addr,t)}function qx(s,e){let t=Ks(e,this.size,3);s.uniform3fv(this.addr,t)}function Yx(s,e){let t=Ks(e,this.size,4);s.uniform4fv(this.addr,t)}function Jx(s,e){let t=Ks(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Zx(s,e){let t=Ks(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function jx(s,e){let t=Ks(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function $x(s,e){s.uniform1iv(this.addr,e)}function eE(s,e){s.uniform2iv(this.addr,e)}function tE(s,e){s.uniform3iv(this.addr,e)}function nE(s,e){s.uniform4iv(this.addr,e)}function iE(s,e){s.uniform1uiv(this.addr,e)}function rE(s,e){s.uniform2uiv(this.addr,e)}function sE(s,e){s.uniform3uiv(this.addr,e)}function oE(s,e){s.uniform4uiv(this.addr,e)}function aE(s,e,t){let i=this.cache,n=e.length,r=tc(t,n);Vt(i,r)||(s.uniform1iv(this.addr,r),Wt(i,r));for(let o=0;o!==n;++o)t.setTexture2D(e[o]||Lp,r[o])}function lE(s,e,t){let i=this.cache,n=e.length,r=tc(t,n);Vt(i,r)||(s.uniform1iv(this.addr,r),Wt(i,r));for(let o=0;o!==n;++o)t.setTexture3D(e[o]||Pp,r[o])}function cE(s,e,t){let i=this.cache,n=e.length,r=tc(t,n);Vt(i,r)||(s.uniform1iv(this.addr,r),Wt(i,r));for(let o=0;o!==n;++o)t.setTextureCube(e[o]||Np,r[o])}function hE(s,e,t){let i=this.cache,n=e.length,r=tc(t,n);Vt(i,r)||(s.uniform1iv(this.addr,r),Wt(i,r));for(let o=0;o!==n;++o)t.setTexture2DArray(e[o]||Fp,r[o])}function uE(s){switch(s){case 5126:return Kx;case 35664:return Xx;case 35665:return qx;case 35666:return Yx;case 35674:return Jx;case 35675:return Zx;case 35676:return jx;case 5124:case 35670:return $x;case 35667:case 35671:return eE;case 35668:case 35672:return tE;case 35669:case 35673:return nE;case 5125:return iE;case 36294:return rE;case 36295:return sE;case 36296:return oE;case 35678:case 36198:case 36298:case 36306:case 35682:return aE;case 35679:case 36299:case 36307:return lE;case 35680:case 36300:case 36308:case 36293:return cE;case 36289:case 36303:case 36311:case 36292:return hE}}var zh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Wx(t.type)}},Hh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=uE(t.type)}},Vh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let r=0,o=n.length;r!==o;++r){let a=n[r];a.setValue(e,t[a.id],i)}}},Sh=/(\w+)(\])?(\[|\.)?/g;function QA(s,e){s.seq.push(e),s.map[e.id]=e}function fE(s,e,t){let i=s.name,n=i.length;for(Sh.lastIndex=0;;){let r=Sh.exec(i),o=Sh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){QA(t,c===void 0?new zh(a,s,e):new Hh(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new Vh(a),QA(t,u)),t=u}}}var Fs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let r=e.getActiveUniform(t,n),o=e.getUniformLocation(t,r.name);fE(r,o,this)}}setValue(e,t,i,n){let r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,r=e.length;n!==r;++n){let o=e[n];o.id in t&&i.push(o)}return i}};function GA(s,e,t){let i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}var dE=37297,AE=0;function pE(s,e){let t=s.split(`
`),i=[],n=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=n;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function mE(s){let e=st.getPrimaries(st.workingColorSpace),t=st.getPrimaries(s),i;switch(e===t?i="":e===ml&&t===pl?i="LinearDisplayP3ToLinearSRGB":e===pl&&t===ml&&(i="LinearSRGBToLinearDisplayP3"),s){case Ct:case Ws:return[i,"LinearTransferOETF"];case at:case jo:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[i,"LinearTransferOETF"]}}function zA(s,e,t){let i=s.getShaderParameter(e,s.COMPILE_STATUS),n=s.getShaderInfoLog(e).trim();if(i&&n==="")return"";let r=/ERROR: 0:(\d+)/.exec(n);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+n+`

`+pE(s.getShaderSource(e),o)}else return n}function gE(s,e){let t=mE(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function _E(s,e){let t;switch(e){case fu:t="Linear";break;case du:t="Reinhard";break;case Au:t="OptimizedCineon";break;case Jo:t="ACESFilmic";break;case pu:t="AgX";break;case R0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function vE(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ds).join(`
`)}function yE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ds).join(`
`)}function xE(s){let e=[];for(let t in s){let i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function EE(s,e){let t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(e,n),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Ds(s){return s!==""}function HA(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function VA(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var SE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wh(s){return s.replace(SE,ME)}var CE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ME(s,e){let t=Je[e];if(t===void 0){let i=CE.get(e);if(i!==void 0)t=Je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Wh(t)}var TE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function WA(s){return s.replace(TE,IE)}function IE(s,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function KA(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function bE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===mp?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===s0?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ri&&(e="SHADOWMAP_TYPE_VSM"),e}function wE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Fr:case Ps:e="ENVMAP_TYPE_CUBE";break;case Zl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function BE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ps:e="ENVMAP_MODE_REFRACTION";break}return e}function RE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case gp:e="ENVMAP_BLENDING_MULTIPLY";break;case w0:e="ENVMAP_BLENDING_MIX";break;case B0:e="ENVMAP_BLENDING_ADD";break}return e}function DE(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function LE(s,e,t,i){let n=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=bE(t),c=wE(t),h=BE(t),u=RE(t),f=DE(t),d=t.isWebGL2?"":vE(t),m=yE(t),p=xE(r),A=n.createProgram(),g,v,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ds).join(`
`),g.length>0&&(g+=`
`),v=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ds).join(`
`),v.length>0&&(v+=`
`)):(g=[KA(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ds).join(`
`),v=[d,KA(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==tr?"#define TONE_MAPPING":"",t.toneMapping!==tr?Je.tonemapping_pars_fragment:"",t.toneMapping!==tr?_E("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,gE("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ds).join(`
`)),o=Wh(o),o=HA(o,t),o=VA(o,t),a=Wh(a),a=HA(a,t),a=VA(a,t),o=WA(o),a=WA(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===uA?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===uA?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let y=_+g+o,S=_+v+a,C=GA(n,n.VERTEX_SHADER,y),E=GA(n,n.FRAGMENT_SHADER,S);n.attachShader(A,C),n.attachShader(A,E),t.index0AttributeName!==void 0?n.bindAttribLocation(A,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(A,0,"position"),n.linkProgram(A);function b(R){if(s.debug.checkShaderErrors){let z=n.getProgramInfoLog(A).trim(),I=n.getShaderInfoLog(C).trim(),U=n.getShaderInfoLog(E).trim(),P=!0,X=!0;if(n.getProgramParameter(A,n.LINK_STATUS)===!1)if(P=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,A,C,E);else{let q=zA(n,C,"vertex"),Q=zA(n,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(A,n.VALIDATE_STATUS)+`

Program Info Log: `+z+`
`+q+`
`+Q)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(I===""||U==="")&&(X=!1);X&&(R.diagnostics={runnable:P,programLog:z,vertexShader:{log:I,prefix:g},fragmentShader:{log:U,prefix:v}})}n.deleteShader(C),n.deleteShader(E),x=new Fs(n,A),M=EE(n,A)}let x;this.getUniforms=function(){return x===void 0&&b(this),x};let M;this.getAttributes=function(){return M===void 0&&b(this),M};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=n.getProgramParameter(A,dE)),N},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=AE++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=C,this.fragmentShader=E,this}var UE=0,Kh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Xh(e),t.set(e,i)),i}},Xh=class{constructor(e){this.id=UE++,this.code=e,this.usedTimes=0}};function FE(s,e,t,i,n,r,o){let a=new Sl,l=new Kh,c=[],h=n.isWebGL2,u=n.logarithmicDepthBuffer,f=n.vertexTextures,d=n.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return x===0?"uv":`uv${x}`}function A(x,M,N,R,z){let I=R.fog,U=z.geometry,P=x.isMeshStandardMaterial?R.environment:null,X=(x.isMeshStandardMaterial?t:e).get(x.envMap||P),q=X&&X.mapping===Zl?X.image.height:null,Q=m[x.type];x.precision!==null&&(d=n.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));let V=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,D=V!==void 0?V.length:0,H=0;U.morphAttributes.position!==void 0&&(H=1),U.morphAttributes.normal!==void 0&&(H=2),U.morphAttributes.color!==void 0&&(H=3);let L,k,W,ee;if(Q){let tt=ci[Q];L=tt.vertexShader,k=tt.fragmentShader}else L=x.vertexShader,k=x.fragmentShader,l.update(x),W=l.getVertexShaderID(x),ee=l.getFragmentShaderID(x);let J=s.getRenderTarget(),re=z.isInstancedMesh===!0,pe=z.isBatchedMesh===!0,ge=!!x.map,fe=!!x.matcap,O=!!X,Oe=!!x.aoMap,xe=!!x.lightMap,de=!!x.bumpMap,ue=!!x.normalMap,be=!!x.displacementMap,ae=!!x.emissiveMap,w=!!x.metalnessMap,T=!!x.roughnessMap,F=x.anisotropy>0,se=x.clearcoat>0,$=x.iridescence>0,ie=x.sheen>0,ce=x.transmission>0,_e=F&&!!x.anisotropyMap,he=se&&!!x.clearcoatMap,me=se&&!!x.clearcoatNormalMap,Ee=se&&!!x.clearcoatRoughnessMap,oe=$&&!!x.iridescenceMap,He=$&&!!x.iridescenceThicknessMap,ke=ie&&!!x.sheenColorMap,we=ie&&!!x.sheenRoughnessMap,Se=!!x.specularMap,Ae=!!x.specularColorMap,Ne=!!x.specularIntensityMap,Ge=ce&&!!x.transmissionMap,je=ce&&!!x.thicknessMap,Fe=!!x.gradientMap,le=!!x.alphaMap,G=x.alphaTest>0,Te=!!x.alphaHash,ve=!!x.extensions,Ie=!!U.attributes.uv1,Re=!!U.attributes.uv2,Ve=!!U.attributes.uv3,De=tr;return x.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(De=s.toneMapping),{isWebGL2:h,shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:L,fragmentShader:k,defines:x.defines,customVertexShaderID:W,customFragmentShaderID:ee,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:pe,instancing:re,instancingColor:re&&z.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:J===null?s.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Ct,map:ge,matcap:fe,envMap:O,envMapMode:O&&X.mapping,envMapCubeUVHeight:q,aoMap:Oe,lightMap:xe,bumpMap:de,normalMap:ue,displacementMap:f&&be,emissiveMap:ae,normalMapObjectSpace:ue&&x.normalMapType===G0,normalMapTangentSpace:ue&&x.normalMapType===Ip,metalnessMap:w,roughnessMap:T,anisotropy:F,anisotropyMap:_e,clearcoat:se,clearcoatMap:he,clearcoatNormalMap:me,clearcoatRoughnessMap:Ee,iridescence:$,iridescenceMap:oe,iridescenceThicknessMap:He,sheen:ie,sheenColorMap:ke,sheenRoughnessMap:we,specularMap:Se,specularColorMap:Ae,specularIntensityMap:Ne,transmission:ce,transmissionMap:Ge,thicknessMap:je,gradientMap:Fe,opaque:x.transparent===!1&&x.blending===Ls,alphaMap:le,alphaTest:G,alphaHash:Te,combine:x.combine,mapUv:ge&&p(x.map.channel),aoMapUv:Oe&&p(x.aoMap.channel),lightMapUv:xe&&p(x.lightMap.channel),bumpMapUv:de&&p(x.bumpMap.channel),normalMapUv:ue&&p(x.normalMap.channel),displacementMapUv:be&&p(x.displacementMap.channel),emissiveMapUv:ae&&p(x.emissiveMap.channel),metalnessMapUv:w&&p(x.metalnessMap.channel),roughnessMapUv:T&&p(x.roughnessMap.channel),anisotropyMapUv:_e&&p(x.anisotropyMap.channel),clearcoatMapUv:he&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:me&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:He&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:we&&p(x.sheenRoughnessMap.channel),specularMapUv:Se&&p(x.specularMap.channel),specularColorMapUv:Ae&&p(x.specularColorMap.channel),specularIntensityMapUv:Ne&&p(x.specularIntensityMap.channel),transmissionMapUv:Ge&&p(x.transmissionMap.channel),thicknessMapUv:je&&p(x.thicknessMap.channel),alphaMapUv:le&&p(x.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ue||F),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Ie,vertexUv2s:Re,vertexUv3s:Ve,pointsUvs:z.isPoints===!0&&!!U.attributes.uv&&(ge||le),fog:!!I,useFog:x.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:z.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:H,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:De,useLegacyLights:s._useLegacyLights,decodeVideoTexture:ge&&x.map.isVideoTexture===!0&&st.getTransfer(x.map.colorSpace)===At,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===bn,flipSided:x.side===Bn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:ve&&x.extensions.derivatives===!0,extensionFragDepth:ve&&x.extensions.fragDepth===!0,extensionDrawBuffers:ve&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:ve&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ve&&x.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function g(x){let M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(let N in x.defines)M.push(N),M.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(v(M,x),_(M,x),M.push(s.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function v(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function _(x,M){a.disableAll(),M.isWebGL2&&a.enable(0),M.supportsVertexTextures&&a.enable(1),M.instancing&&a.enable(2),M.instancingColor&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),x.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),x.push(a.mask)}function y(x){let M=m[x.type],N;if(M){let R=ci[M];N=gi.clone(R.uniforms)}else N=x.uniforms;return N}function S(x,M){let N;for(let R=0,z=c.length;R<z;R++){let I=c[R];if(I.cacheKey===M){N=I,++N.usedTimes;break}}return N===void 0&&(N=new LE(s,M,x,r),c.push(N)),N}function C(x){if(--x.usedTimes===0){let M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),x.destroy()}}function E(x){l.remove(x)}function b(){l.dispose()}return{getParameters:A,getProgramCacheKey:g,getUniforms:y,acquireProgram:S,releaseProgram:C,releaseShaderCache:E,programs:c,dispose:b}}function PE(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function i(r,o,a){s.get(r)[o]=a}function n(){s=new WeakMap}return{get:e,remove:t,update:i,dispose:n}}function NE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function XA(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function qA(){let s=[],e=0,t=[],i=[],n=[];function r(){e=0,t.length=0,i.length=0,n.length=0}function o(u,f,d,m,p,A){let g=s[e];return g===void 0?(g={id:u.id,object:u,geometry:f,material:d,groupOrder:m,renderOrder:u.renderOrder,z:p,group:A},s[e]=g):(g.id=u.id,g.object=u,g.geometry=f,g.material=d,g.groupOrder=m,g.renderOrder=u.renderOrder,g.z=p,g.group=A),e++,g}function a(u,f,d,m,p,A){let g=o(u,f,d,m,p,A);d.transmission>0?i.push(g):d.transparent===!0?n.push(g):t.push(g)}function l(u,f,d,m,p,A){let g=o(u,f,d,m,p,A);d.transmission>0?i.unshift(g):d.transparent===!0?n.unshift(g):t.unshift(g)}function c(u,f){t.length>1&&t.sort(u||NE),i.length>1&&i.sort(f||XA),n.length>1&&n.sort(f||XA)}function h(){for(let u=e,f=s.length;u<f;u++){let d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:n,init:r,push:a,unshift:l,finish:h,sort:c}}function OE(){let s=new WeakMap;function e(i,n){let r=s.get(i),o;return r===void 0?(o=new qA,s.set(i,[o])):n>=r.length?(o=new qA,r.push(o)):o=r[n],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function kE(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new Le};break;case"SpotLight":t={position:new K,direction:new K,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new K,halfWidth:new K,halfHeight:new K};break}return s[e.id]=t,t}}}function QE(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var GE=0;function zE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function HE(s,e){let t=new kE,i=QE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new K);let r=new K,o=new Ze,a=new Ze;function l(h,u){let f=0,d=0,m=0;for(let R=0;R<9;R++)n.probe[R].set(0,0,0);let p=0,A=0,g=0,v=0,_=0,y=0,S=0,C=0,E=0,b=0,x=0;h.sort(zE);let M=u===!0?Math.PI:1;for(let R=0,z=h.length;R<z;R++){let I=h[R],U=I.color,P=I.intensity,X=I.distance,q=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=U.r*P*M,d+=U.g*P*M,m+=U.b*P*M;else if(I.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(I.sh.coefficients[Q],P);x++}else if(I.isDirectionalLight){let Q=t.get(I);if(Q.color.copy(I.color).multiplyScalar(I.intensity*M),I.castShadow){let V=I.shadow,D=i.get(I);D.shadowBias=V.bias,D.shadowNormalBias=V.normalBias,D.shadowRadius=V.radius,D.shadowMapSize=V.mapSize,n.directionalShadow[p]=D,n.directionalShadowMap[p]=q,n.directionalShadowMatrix[p]=I.shadow.matrix,y++}n.directional[p]=Q,p++}else if(I.isSpotLight){let Q=t.get(I);Q.position.setFromMatrixPosition(I.matrixWorld),Q.color.copy(U).multiplyScalar(P*M),Q.distance=X,Q.coneCos=Math.cos(I.angle),Q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Q.decay=I.decay,n.spot[g]=Q;let V=I.shadow;if(I.map&&(n.spotLightMap[E]=I.map,E++,V.updateMatrices(I),I.castShadow&&b++),n.spotLightMatrix[g]=V.matrix,I.castShadow){let D=i.get(I);D.shadowBias=V.bias,D.shadowNormalBias=V.normalBias,D.shadowRadius=V.radius,D.shadowMapSize=V.mapSize,n.spotShadow[g]=D,n.spotShadowMap[g]=q,C++}g++}else if(I.isRectAreaLight){let Q=t.get(I);Q.color.copy(U).multiplyScalar(P),Q.halfWidth.set(I.width*.5,0,0),Q.halfHeight.set(0,I.height*.5,0),n.rectArea[v]=Q,v++}else if(I.isPointLight){let Q=t.get(I);if(Q.color.copy(I.color).multiplyScalar(I.intensity*M),Q.distance=I.distance,Q.decay=I.decay,I.castShadow){let V=I.shadow,D=i.get(I);D.shadowBias=V.bias,D.shadowNormalBias=V.normalBias,D.shadowRadius=V.radius,D.shadowMapSize=V.mapSize,D.shadowCameraNear=V.camera.near,D.shadowCameraFar=V.camera.far,n.pointShadow[A]=D,n.pointShadowMap[A]=q,n.pointShadowMatrix[A]=I.shadow.matrix,S++}n.point[A]=Q,A++}else if(I.isHemisphereLight){let Q=t.get(I);Q.skyColor.copy(I.color).multiplyScalar(P*M),Q.groundColor.copy(I.groundColor).multiplyScalar(P*M),n.hemi[_]=Q,_++}}v>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Be.LTC_FLOAT_1,n.rectAreaLTC2=Be.LTC_FLOAT_2):(n.rectAreaLTC1=Be.LTC_HALF_1,n.rectAreaLTC2=Be.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Be.LTC_FLOAT_1,n.rectAreaLTC2=Be.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=Be.LTC_HALF_1,n.rectAreaLTC2=Be.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=f,n.ambient[1]=d,n.ambient[2]=m;let N=n.hash;(N.directionalLength!==p||N.pointLength!==A||N.spotLength!==g||N.rectAreaLength!==v||N.hemiLength!==_||N.numDirectionalShadows!==y||N.numPointShadows!==S||N.numSpotShadows!==C||N.numSpotMaps!==E||N.numLightProbes!==x)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=v,n.point.length=A,n.hemi.length=_,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=C,n.spotShadowMap.length=C,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=C+E-b,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=x,N.directionalLength=p,N.pointLength=A,N.spotLength=g,N.rectAreaLength=v,N.hemiLength=_,N.numDirectionalShadows=y,N.numPointShadows=S,N.numSpotShadows=C,N.numSpotMaps=E,N.numLightProbes=x,n.version=GE++)}function c(h,u){let f=0,d=0,m=0,p=0,A=0,g=u.matrixWorldInverse;for(let v=0,_=h.length;v<_;v++){let y=h[v];if(y.isDirectionalLight){let S=n.directional[f];S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),f++}else if(y.isSpotLight){let S=n.spot[m];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),m++}else if(y.isRectAreaLight){let S=n.rectArea[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),a.identity(),o.copy(y.matrixWorld),o.premultiply(g),a.extractRotation(o),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),p++}else if(y.isPointLight){let S=n.point[d];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){let S=n.hemi[A];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(g),A++}}}return{setup:l,setupView:c,state:n}}function YA(s,e){let t=new HE(s,e),i=[],n=[];function r(){i.length=0,n.length=0}function o(u){i.push(u)}function a(u){n.push(u)}function l(u){t.setup(i,u)}function c(u){t.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:n,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function VE(s,e){let t=new WeakMap;function i(r,o=0){let a=t.get(r),l;return a===void 0?(l=new YA(s,e),t.set(r,[l])):o>=a.length?(l=new YA(s,e),a.push(l)):l=a[o],l}function n(){t=new WeakMap}return{get:i,dispose:n}}var ko=class extends Gn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Q0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Qo=class extends Gn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},WE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,KE=`uniform sampler2D shadow_pass;
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
}`;function XE(s,e,t){let i=new Oo,n=new Qe,r=new Qe,o=new ot,a=new ko({depthPacking:_u}),l=new Qo,c={},h=t.maxTextureSize,u={[Ai]:Bn,[Bn]:Ai,[bn]:bn},f=new vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:WE,fragmentShader:KE}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new bt;m.setAttribute("position",new ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let p=new _t(m,f),A=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mp;let g=this.type;this.render=function(C,E,b){if(A.enabled===!1||A.autoUpdate===!1&&A.needsUpdate===!1||C.length===0)return;let x=s.getRenderTarget(),M=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),R=s.state;R.setBlending(di),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);let z=g!==Ri&&this.type===Ri,I=g===Ri&&this.type!==Ri;for(let U=0,P=C.length;U<P;U++){let X=C[U],q=X.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;n.copy(q.mapSize);let Q=q.getFrameExtents();if(n.multiply(Q),r.copy(q.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/Q.x),n.x=r.x*Q.x,q.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/Q.y),n.y=r.y*Q.y,q.mapSize.y=r.y)),q.map===null||z===!0||I===!0){let D=this.type!==Ri?{minFilter:zt,magFilter:zt}:{};q.map!==null&&q.map.dispose(),q.map=new gn(n.x,n.y,D),q.map.texture.name=X.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();let V=q.getViewportCount();for(let D=0;D<V;D++){let H=q.getViewport(D);o.set(r.x*H.x,r.y*H.y,r.x*H.z,r.y*H.w),R.viewport(o),q.updateMatrices(X,D),i=q.getFrustum(),y(E,b,q.camera,X,this.type)}q.isPointLightShadow!==!0&&this.type===Ri&&v(q,b),q.needsUpdate=!1}g=this.type,A.needsUpdate=!1,s.setRenderTarget(x,M,N)};function v(C,E){let b=e.update(p);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new gn(n.x,n.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(E,null,b,f,p,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(E,null,b,d,p,null)}function _(C,E,b,x){let M=null,N=b.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(N!==void 0)M=N;else if(M=b.isPointLight===!0?l:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let R=M.uuid,z=E.uuid,I=c[R];I===void 0&&(I={},c[R]=I);let U=I[z];U===void 0&&(U=M.clone(),I[z]=U,E.addEventListener("dispose",S)),M=U}if(M.visible=E.visible,M.wireframe=E.wireframe,x===Ri?M.side=E.shadowSide!==null?E.shadowSide:E.side:M.side=E.shadowSide!==null?E.shadowSide:u[E.side],M.alphaMap=E.alphaMap,M.alphaTest=E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,b.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let R=s.properties.get(M);R.light=b}return M}function y(C,E,b,x,M){if(C.visible===!1)return;if(C.layers.test(E.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===Ri)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,C.matrixWorld);let z=e.update(C),I=C.material;if(Array.isArray(I)){let U=z.groups;for(let P=0,X=U.length;P<X;P++){let q=U[P],Q=I[q.materialIndex];if(Q&&Q.visible){let V=_(C,Q,x,M);C.onBeforeShadow(s,C,E,b,z,V,q),s.renderBufferDirect(b,null,z,V,C,q),C.onAfterShadow(s,C,E,b,z,V,q)}}}else if(I.visible){let U=_(C,I,x,M);C.onBeforeShadow(s,C,E,b,z,U,null),s.renderBufferDirect(b,null,z,U,C,null),C.onAfterShadow(s,C,E,b,z,U,null)}}let R=C.children;for(let z=0,I=R.length;z<I;z++)y(R[z],E,b,x,M)}function S(C){C.target.removeEventListener("dispose",S);for(let b in c){let x=c[b],M=C.target.uuid;M in x&&(x[M].dispose(),delete x[M])}}}function qE(s,e,t){let i=t.isWebGL2;function n(){let G=!1,Te=new ot,ve=null,Ie=new ot(0,0,0,0);return{setMask:function(Re){ve!==Re&&!G&&(s.colorMask(Re,Re,Re,Re),ve=Re)},setLocked:function(Re){G=Re},setClear:function(Re,Ve,De,Ye,tt){tt===!0&&(Re*=Ye,Ve*=Ye,De*=Ye),Te.set(Re,Ve,De,Ye),Ie.equals(Te)===!1&&(s.clearColor(Re,Ve,De,Ye),Ie.copy(Te))},reset:function(){G=!1,ve=null,Ie.set(-1,0,0,0)}}}function r(){let G=!1,Te=null,ve=null,Ie=null;return{setTest:function(Re){Re?pe(s.DEPTH_TEST):ge(s.DEPTH_TEST)},setMask:function(Re){Te!==Re&&!G&&(s.depthMask(Re),Te=Re)},setFunc:function(Re){if(ve!==Re){switch(Re){case E0:s.depthFunc(s.NEVER);break;case S0:s.depthFunc(s.ALWAYS);break;case C0:s.depthFunc(s.LESS);break;case al:s.depthFunc(s.LEQUAL);break;case M0:s.depthFunc(s.EQUAL);break;case T0:s.depthFunc(s.GEQUAL);break;case I0:s.depthFunc(s.GREATER);break;case b0:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ve=Re}},setLocked:function(Re){G=Re},setClear:function(Re){Ie!==Re&&(s.clearDepth(Re),Ie=Re)},reset:function(){G=!1,Te=null,ve=null,Ie=null}}}function o(){let G=!1,Te=null,ve=null,Ie=null,Re=null,Ve=null,De=null,Ye=null,tt=null;return{setTest:function(Ke){G||(Ke?pe(s.STENCIL_TEST):ge(s.STENCIL_TEST))},setMask:function(Ke){Te!==Ke&&!G&&(s.stencilMask(Ke),Te=Ke)},setFunc:function(Ke,et,xt){(ve!==Ke||Ie!==et||Re!==xt)&&(s.stencilFunc(Ke,et,xt),ve=Ke,Ie=et,Re=xt)},setOp:function(Ke,et,xt){(Ve!==Ke||De!==et||Ye!==xt)&&(s.stencilOp(Ke,et,xt),Ve=Ke,De=et,Ye=xt)},setLocked:function(Ke){G=Ke},setClear:function(Ke){tt!==Ke&&(s.clearStencil(Ke),tt=Ke)},reset:function(){G=!1,Te=null,ve=null,Ie=null,Re=null,Ve=null,De=null,Ye=null,tt=null}}}let a=new n,l=new r,c=new o,h=new WeakMap,u=new WeakMap,f={},d={},m=new WeakMap,p=[],A=null,g=!1,v=null,_=null,y=null,S=null,C=null,E=null,b=null,x=new Le(0,0,0),M=0,N=!1,R=null,z=null,I=null,U=null,P=null,X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,Q=0,V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(V)[1]),q=Q>=1):V.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),q=Q>=2);let D=null,H={},L=s.getParameter(s.SCISSOR_BOX),k=s.getParameter(s.VIEWPORT),W=new ot().fromArray(L),ee=new ot().fromArray(k);function J(G,Te,ve,Ie){let Re=new Uint8Array(4),Ve=s.createTexture();s.bindTexture(G,Ve),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let De=0;De<ve;De++)i&&(G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY)?s.texImage3D(Te,0,s.RGBA,1,1,Ie,0,s.RGBA,s.UNSIGNED_BYTE,Re):s.texImage2D(Te+De,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Re);return Ve}let re={};re[s.TEXTURE_2D]=J(s.TEXTURE_2D,s.TEXTURE_2D,1),re[s.TEXTURE_CUBE_MAP]=J(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(re[s.TEXTURE_2D_ARRAY]=J(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),re[s.TEXTURE_3D]=J(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),pe(s.DEPTH_TEST),l.setFunc(al),ae(!1),w(Pd),pe(s.CULL_FACE),ue(di);function pe(G){f[G]!==!0&&(s.enable(G),f[G]=!0)}function ge(G){f[G]!==!1&&(s.disable(G),f[G]=!1)}function fe(G,Te){return d[G]!==Te?(s.bindFramebuffer(G,Te),d[G]=Te,i&&(G===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=Te),G===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=Te)),!0):!1}function O(G,Te){let ve=p,Ie=!1;if(G)if(ve=m.get(Te),ve===void 0&&(ve=[],m.set(Te,ve)),G.isWebGLMultipleRenderTargets){let Re=G.texture;if(ve.length!==Re.length||ve[0]!==s.COLOR_ATTACHMENT0){for(let Ve=0,De=Re.length;Ve<De;Ve++)ve[Ve]=s.COLOR_ATTACHMENT0+Ve;ve.length=Re.length,Ie=!0}}else ve[0]!==s.COLOR_ATTACHMENT0&&(ve[0]=s.COLOR_ATTACHMENT0,Ie=!0);else ve[0]!==s.BACK&&(ve[0]=s.BACK,Ie=!0);Ie&&(t.isWebGL2?s.drawBuffers(ve):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ve))}function Oe(G){return A!==G?(s.useProgram(G),A=G,!0):!1}let xe={[wr]:s.FUNC_ADD,[a0]:s.FUNC_SUBTRACT,[l0]:s.FUNC_REVERSE_SUBTRACT};if(i)xe[kd]=s.MIN,xe[Qd]=s.MAX;else{let G=e.get("EXT_blend_minmax");G!==null&&(xe[kd]=G.MIN_EXT,xe[Qd]=G.MAX_EXT)}let de={[c0]:s.ZERO,[h0]:s.ONE,[u0]:s.SRC_COLOR,[Dh]:s.SRC_ALPHA,[g0]:s.SRC_ALPHA_SATURATE,[p0]:s.DST_COLOR,[d0]:s.DST_ALPHA,[f0]:s.ONE_MINUS_SRC_COLOR,[Lh]:s.ONE_MINUS_SRC_ALPHA,[m0]:s.ONE_MINUS_DST_COLOR,[A0]:s.ONE_MINUS_DST_ALPHA,[_0]:s.CONSTANT_COLOR,[v0]:s.ONE_MINUS_CONSTANT_COLOR,[y0]:s.CONSTANT_ALPHA,[x0]:s.ONE_MINUS_CONSTANT_ALPHA};function ue(G,Te,ve,Ie,Re,Ve,De,Ye,tt,Ke){if(G===di){g===!0&&(ge(s.BLEND),g=!1);return}if(g===!1&&(pe(s.BLEND),g=!0),G!==o0){if(G!==v||Ke!==N){if((_!==wr||C!==wr)&&(s.blendEquation(s.FUNC_ADD),_=wr,C=wr),Ke)switch(G){case Ls:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ur:s.blendFunc(s.ONE,s.ONE);break;case Nd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Od:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Ls:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ur:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Nd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Od:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}y=null,S=null,E=null,b=null,x.set(0,0,0),M=0,v=G,N=Ke}return}Re=Re||Te,Ve=Ve||ve,De=De||Ie,(Te!==_||Re!==C)&&(s.blendEquationSeparate(xe[Te],xe[Re]),_=Te,C=Re),(ve!==y||Ie!==S||Ve!==E||De!==b)&&(s.blendFuncSeparate(de[ve],de[Ie],de[Ve],de[De]),y=ve,S=Ie,E=Ve,b=De),(Ye.equals(x)===!1||tt!==M)&&(s.blendColor(Ye.r,Ye.g,Ye.b,tt),x.copy(Ye),M=tt),v=G,N=!1}function be(G,Te){G.side===bn?ge(s.CULL_FACE):pe(s.CULL_FACE);let ve=G.side===Bn;Te&&(ve=!ve),ae(ve),G.blending===Ls&&G.transparent===!1?ue(di):ue(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),l.setFunc(G.depthFunc),l.setTest(G.depthTest),l.setMask(G.depthWrite),a.setMask(G.colorWrite);let Ie=G.stencilWrite;c.setTest(Ie),Ie&&(c.setMask(G.stencilWriteMask),c.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),c.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),F(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?pe(s.SAMPLE_ALPHA_TO_COVERAGE):ge(s.SAMPLE_ALPHA_TO_COVERAGE)}function ae(G){R!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),R=G)}function w(G){G!==i0?(pe(s.CULL_FACE),G!==z&&(G===Pd?s.cullFace(s.BACK):G===r0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ge(s.CULL_FACE),z=G}function T(G){G!==I&&(q&&s.lineWidth(G),I=G)}function F(G,Te,ve){G?(pe(s.POLYGON_OFFSET_FILL),(U!==Te||P!==ve)&&(s.polygonOffset(Te,ve),U=Te,P=ve)):ge(s.POLYGON_OFFSET_FILL)}function se(G){G?pe(s.SCISSOR_TEST):ge(s.SCISSOR_TEST)}function $(G){G===void 0&&(G=s.TEXTURE0+X-1),D!==G&&(s.activeTexture(G),D=G)}function ie(G,Te,ve){ve===void 0&&(D===null?ve=s.TEXTURE0+X-1:ve=D);let Ie=H[ve];Ie===void 0&&(Ie={type:void 0,texture:void 0},H[ve]=Ie),(Ie.type!==G||Ie.texture!==Te)&&(D!==ve&&(s.activeTexture(ve),D=ve),s.bindTexture(G,Te||re[G]),Ie.type=G,Ie.texture=Te)}function ce(){let G=H[D];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function _e(){try{s.compressedTexImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function he(){try{s.compressedTexImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function me(){try{s.texSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ee(){try{s.texSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function oe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function He(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ke(){try{s.texStorage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function we(){try{s.texStorage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Se(){try{s.texImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ae(){try{s.texImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ne(G){W.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),W.copy(G))}function Ge(G){ee.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),ee.copy(G))}function je(G,Te){let ve=u.get(Te);ve===void 0&&(ve=new WeakMap,u.set(Te,ve));let Ie=ve.get(G);Ie===void 0&&(Ie=s.getUniformBlockIndex(Te,G.name),ve.set(G,Ie))}function Fe(G,Te){let Ie=u.get(Te).get(G);h.get(Te)!==Ie&&(s.uniformBlockBinding(Te,Ie,G.__bindingPointIndex),h.set(Te,Ie))}function le(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),i===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},D=null,H={},d={},m=new WeakMap,p=[],A=null,g=!1,v=null,_=null,y=null,S=null,C=null,E=null,b=null,x=new Le(0,0,0),M=0,N=!1,R=null,z=null,I=null,U=null,P=null,W.set(0,0,s.canvas.width,s.canvas.height),ee.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:pe,disable:ge,bindFramebuffer:fe,drawBuffers:O,useProgram:Oe,setBlending:ue,setMaterial:be,setFlipSided:ae,setCullFace:w,setLineWidth:T,setPolygonOffset:F,setScissorTest:se,activeTexture:$,bindTexture:ie,unbindTexture:ce,compressedTexImage2D:_e,compressedTexImage3D:he,texImage2D:Se,texImage3D:Ae,updateUBOMapping:je,uniformBlockBinding:Fe,texStorage2D:ke,texStorage3D:we,texSubImage2D:me,texSubImage3D:Ee,compressedTexSubImage2D:oe,compressedTexSubImage3D:He,scissor:Ne,viewport:Ge,reset:le}}function YE(s,e,t,i,n,r,o){let a=n.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(w,T){return d?new OffscreenCanvas(w,T):Fo("canvas")}function p(w,T,F,se){let $=1;if((w.width>se||w.height>se)&&($=se/Math.max(w.width,w.height)),$<1||T===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){let ie=T?_l:Math.floor,ce=ie($*w.width),_e=ie($*w.height);u===void 0&&(u=m(ce,_e));let he=F?m(ce,_e):u;return he.width=ce,he.height=_e,he.getContext("2d").drawImage(w,0,0,ce,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+ce+"x"+_e+")."),he}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function A(w){return Oh(w.width)&&Oh(w.height)}function g(w){return a?!1:w.wrapS!==wn||w.wrapT!==wn||w.minFilter!==zt&&w.minFilter!==Et}function v(w,T){return w.generateMipmaps&&T&&w.minFilter!==zt&&w.minFilter!==Et}function _(w){s.generateMipmap(w)}function y(w,T,F,se,$=!1){if(a===!1)return T;if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ie=T;if(T===s.RED&&(F===s.FLOAT&&(ie=s.R32F),F===s.HALF_FLOAT&&(ie=s.R16F),F===s.UNSIGNED_BYTE&&(ie=s.R8)),T===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(ie=s.R8UI),F===s.UNSIGNED_SHORT&&(ie=s.R16UI),F===s.UNSIGNED_INT&&(ie=s.R32UI),F===s.BYTE&&(ie=s.R8I),F===s.SHORT&&(ie=s.R16I),F===s.INT&&(ie=s.R32I)),T===s.RG&&(F===s.FLOAT&&(ie=s.RG32F),F===s.HALF_FLOAT&&(ie=s.RG16F),F===s.UNSIGNED_BYTE&&(ie=s.RG8)),T===s.RGBA){let ce=$?Al:st.getTransfer(se);F===s.FLOAT&&(ie=s.RGBA32F),F===s.HALF_FLOAT&&(ie=s.RGBA16F),F===s.UNSIGNED_BYTE&&(ie=ce===At?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(ie=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(ie=s.RGB5_A1)}return(ie===s.R16F||ie===s.R32F||ie===s.RG16F||ie===s.RG32F||ie===s.RGBA16F||ie===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function S(w,T,F){return v(w,F)===!0||w.isFramebufferTexture&&w.minFilter!==zt&&w.minFilter!==Et?Math.log2(Math.max(T.width,T.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?T.mipmaps.length:1}function C(w){return w===zt||w===ll||w===Mo?s.NEAREST:s.LINEAR}function E(w){let T=w.target;T.removeEventListener("dispose",E),x(T),T.isVideoTexture&&h.delete(T)}function b(w){let T=w.target;T.removeEventListener("dispose",b),N(T)}function x(w){let T=i.get(w);if(T.__webglInit===void 0)return;let F=w.source,se=f.get(F);if(se){let $=se[T.__cacheKey];$.usedTimes--,$.usedTimes===0&&M(w),Object.keys(se).length===0&&f.delete(F)}i.remove(w)}function M(w){let T=i.get(w);s.deleteTexture(T.__webglTexture);let F=w.source,se=f.get(F);delete se[T.__cacheKey],o.memory.textures--}function N(w){let T=w.texture,F=i.get(w),se=i.get(T);if(se.__webglTexture!==void 0&&(s.deleteTexture(se.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(F.__webglFramebuffer[$]))for(let ie=0;ie<F.__webglFramebuffer[$].length;ie++)s.deleteFramebuffer(F.__webglFramebuffer[$][ie]);else s.deleteFramebuffer(F.__webglFramebuffer[$]);F.__webglDepthbuffer&&s.deleteRenderbuffer(F.__webglDepthbuffer[$])}else{if(Array.isArray(F.__webglFramebuffer))for(let $=0;$<F.__webglFramebuffer.length;$++)s.deleteFramebuffer(F.__webglFramebuffer[$]);else s.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&s.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&s.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let $=0;$<F.__webglColorRenderbuffer.length;$++)F.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(F.__webglColorRenderbuffer[$]);F.__webglDepthRenderbuffer&&s.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let $=0,ie=T.length;$<ie;$++){let ce=i.get(T[$]);ce.__webglTexture&&(s.deleteTexture(ce.__webglTexture),o.memory.textures--),i.remove(T[$])}i.remove(T),i.remove(w)}let R=0;function z(){R=0}function I(){let w=R;return w>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+n.maxTextures),R+=1,w}function U(w){let T=[];return T.push(w.wrapS),T.push(w.wrapT),T.push(w.wrapR||0),T.push(w.magFilter),T.push(w.minFilter),T.push(w.anisotropy),T.push(w.internalFormat),T.push(w.format),T.push(w.type),T.push(w.generateMipmaps),T.push(w.premultiplyAlpha),T.push(w.flipY),T.push(w.unpackAlignment),T.push(w.colorSpace),T.join()}function P(w,T){let F=i.get(w);if(w.isVideoTexture&&be(w),w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){let se=w.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(F,w,T);return}}t.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+T)}function X(w,T){let F=i.get(w);if(w.version>0&&F.__version!==w.version){W(F,w,T);return}t.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+T)}function q(w,T){let F=i.get(w);if(w.version>0&&F.__version!==w.version){W(F,w,T);return}t.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+T)}function Q(w,T){let F=i.get(w);if(w.version>0&&F.__version!==w.version){ee(F,w,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+T)}let V={[Pr]:s.REPEAT,[wn]:s.CLAMP_TO_EDGE,[Lo]:s.MIRRORED_REPEAT},D={[zt]:s.NEAREST,[ll]:s.NEAREST_MIPMAP_NEAREST,[Mo]:s.NEAREST_MIPMAP_LINEAR,[Et]:s.LINEAR,[mu]:s.LINEAR_MIPMAP_NEAREST,[pi]:s.LINEAR_MIPMAP_LINEAR},H={[z0]:s.NEVER,[q0]:s.ALWAYS,[H0]:s.LESS,[bp]:s.LEQUAL,[V0]:s.EQUAL,[X0]:s.GEQUAL,[W0]:s.GREATER,[K0]:s.NOTEQUAL};function L(w,T,F){if(F?(s.texParameteri(w,s.TEXTURE_WRAP_S,V[T.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,V[T.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,V[T.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,D[T.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,D[T.minFilter])):(s.texParameteri(w,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(w,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(T.wrapS!==wn||T.wrapT!==wn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(w,s.TEXTURE_MAG_FILTER,C(T.magFilter)),s.texParameteri(w,s.TEXTURE_MIN_FILTER,C(T.minFilter)),T.minFilter!==zt&&T.minFilter!==Et&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,H[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let se=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===zt||T.minFilter!==Mo&&T.minFilter!==pi||T.type===mn&&e.has("OES_texture_float_linear")===!1||a===!1&&T.type===on&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||i.get(T).__currentAnisotropy)&&(s.texParameterf(w,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,n.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy)}}function k(w,T){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,T.addEventListener("dispose",E));let se=T.source,$=f.get(se);$===void 0&&($={},f.set(se,$));let ie=U(T);if(ie!==w.__cacheKey){$[ie]===void 0&&($[ie]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,F=!0),$[ie].usedTimes++;let ce=$[w.__cacheKey];ce!==void 0&&($[w.__cacheKey].usedTimes--,ce.usedTimes===0&&M(T)),w.__cacheKey=ie,w.__webglTexture=$[ie].texture}return F}function W(w,T,F){let se=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(se=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(se=s.TEXTURE_3D);let $=k(w,T),ie=T.source;t.bindTexture(se,w.__webglTexture,s.TEXTURE0+F);let ce=i.get(ie);if(ie.version!==ce.__version||$===!0){t.activeTexture(s.TEXTURE0+F);let _e=st.getPrimaries(st.workingColorSpace),he=T.colorSpace===pn?null:st.getPrimaries(T.colorSpace),me=T.colorSpace===pn||_e===he?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let Ee=g(T)&&A(T.image)===!1,oe=p(T.image,Ee,!1,n.maxTextureSize);oe=ae(T,oe);let He=A(oe)||a,ke=r.convert(T.format,T.colorSpace),we=r.convert(T.type),Se=y(T.internalFormat,ke,we,T.colorSpace,T.isVideoTexture);L(se,T,He);let Ae,Ne=T.mipmaps,Ge=a&&T.isVideoTexture!==!0&&Se!==jl,je=ce.__version===void 0||$===!0,Fe=S(T,oe,He);if(T.isDepthTexture)Se=s.DEPTH_COMPONENT,a?T.type===mn?Se=s.DEPTH_COMPONENT32F:T.type===$i?Se=s.DEPTH_COMPONENT24:T.type===Rr?Se=s.DEPTH24_STENCIL8:Se=s.DEPTH_COMPONENT16:T.type===mn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Dr&&Se===s.DEPTH_COMPONENT&&T.type!==gu&&T.type!==$i&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=$i,we=r.convert(T.type)),T.format===Ns&&Se===s.DEPTH_COMPONENT&&(Se=s.DEPTH_STENCIL,T.type!==Rr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Rr,we=r.convert(T.type))),je&&(Ge?t.texStorage2D(s.TEXTURE_2D,1,Se,oe.width,oe.height):t.texImage2D(s.TEXTURE_2D,0,Se,oe.width,oe.height,0,ke,we,null));else if(T.isDataTexture)if(Ne.length>0&&He){Ge&&je&&t.texStorage2D(s.TEXTURE_2D,Fe,Se,Ne[0].width,Ne[0].height);for(let le=0,G=Ne.length;le<G;le++)Ae=Ne[le],Ge?t.texSubImage2D(s.TEXTURE_2D,le,0,0,Ae.width,Ae.height,ke,we,Ae.data):t.texImage2D(s.TEXTURE_2D,le,Se,Ae.width,Ae.height,0,ke,we,Ae.data);T.generateMipmaps=!1}else Ge?(je&&t.texStorage2D(s.TEXTURE_2D,Fe,Se,oe.width,oe.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,oe.width,oe.height,ke,we,oe.data)):t.texImage2D(s.TEXTURE_2D,0,Se,oe.width,oe.height,0,ke,we,oe.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ge&&je&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Fe,Se,Ne[0].width,Ne[0].height,oe.depth);for(let le=0,G=Ne.length;le<G;le++)Ae=Ne[le],T.format!==Nt?ke!==null?Ge?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,le,0,0,0,Ae.width,Ae.height,oe.depth,ke,Ae.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,le,Se,Ae.width,Ae.height,oe.depth,0,Ae.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?t.texSubImage3D(s.TEXTURE_2D_ARRAY,le,0,0,0,Ae.width,Ae.height,oe.depth,ke,we,Ae.data):t.texImage3D(s.TEXTURE_2D_ARRAY,le,Se,Ae.width,Ae.height,oe.depth,0,ke,we,Ae.data)}else{Ge&&je&&t.texStorage2D(s.TEXTURE_2D,Fe,Se,Ne[0].width,Ne[0].height);for(let le=0,G=Ne.length;le<G;le++)Ae=Ne[le],T.format!==Nt?ke!==null?Ge?t.compressedTexSubImage2D(s.TEXTURE_2D,le,0,0,Ae.width,Ae.height,ke,Ae.data):t.compressedTexImage2D(s.TEXTURE_2D,le,Se,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?t.texSubImage2D(s.TEXTURE_2D,le,0,0,Ae.width,Ae.height,ke,we,Ae.data):t.texImage2D(s.TEXTURE_2D,le,Se,Ae.width,Ae.height,0,ke,we,Ae.data)}else if(T.isDataArrayTexture)Ge?(je&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Fe,Se,oe.width,oe.height,oe.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ke,we,oe.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Se,oe.width,oe.height,oe.depth,0,ke,we,oe.data);else if(T.isData3DTexture)Ge?(je&&t.texStorage3D(s.TEXTURE_3D,Fe,Se,oe.width,oe.height,oe.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ke,we,oe.data)):t.texImage3D(s.TEXTURE_3D,0,Se,oe.width,oe.height,oe.depth,0,ke,we,oe.data);else if(T.isFramebufferTexture){if(je)if(Ge)t.texStorage2D(s.TEXTURE_2D,Fe,Se,oe.width,oe.height);else{let le=oe.width,G=oe.height;for(let Te=0;Te<Fe;Te++)t.texImage2D(s.TEXTURE_2D,Te,Se,le,G,0,ke,we,null),le>>=1,G>>=1}}else if(Ne.length>0&&He){Ge&&je&&t.texStorage2D(s.TEXTURE_2D,Fe,Se,Ne[0].width,Ne[0].height);for(let le=0,G=Ne.length;le<G;le++)Ae=Ne[le],Ge?t.texSubImage2D(s.TEXTURE_2D,le,0,0,ke,we,Ae):t.texImage2D(s.TEXTURE_2D,le,Se,ke,we,Ae);T.generateMipmaps=!1}else Ge?(je&&t.texStorage2D(s.TEXTURE_2D,Fe,Se,oe.width,oe.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,ke,we,oe)):t.texImage2D(s.TEXTURE_2D,0,Se,ke,we,oe);v(T,He)&&_(se),ce.__version=ie.version,T.onUpdate&&T.onUpdate(T)}w.__version=T.version}function ee(w,T,F){if(T.image.length!==6)return;let se=k(w,T),$=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+F);let ie=i.get($);if($.version!==ie.__version||se===!0){t.activeTexture(s.TEXTURE0+F);let ce=st.getPrimaries(st.workingColorSpace),_e=T.colorSpace===pn?null:st.getPrimaries(T.colorSpace),he=T.colorSpace===pn||ce===_e?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let me=T.isCompressedTexture||T.image[0].isCompressedTexture,Ee=T.image[0]&&T.image[0].isDataTexture,oe=[];for(let le=0;le<6;le++)!me&&!Ee?oe[le]=p(T.image[le],!1,!0,n.maxCubemapSize):oe[le]=Ee?T.image[le].image:T.image[le],oe[le]=ae(T,oe[le]);let He=oe[0],ke=A(He)||a,we=r.convert(T.format,T.colorSpace),Se=r.convert(T.type),Ae=y(T.internalFormat,we,Se,T.colorSpace),Ne=a&&T.isVideoTexture!==!0,Ge=ie.__version===void 0||se===!0,je=S(T,He,ke);L(s.TEXTURE_CUBE_MAP,T,ke);let Fe;if(me){Ne&&Ge&&t.texStorage2D(s.TEXTURE_CUBE_MAP,je,Ae,He.width,He.height);for(let le=0;le<6;le++){Fe=oe[le].mipmaps;for(let G=0;G<Fe.length;G++){let Te=Fe[G];T.format!==Nt?we!==null?Ne?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,G,0,0,Te.width,Te.height,we,Te.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,G,Ae,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,G,0,0,Te.width,Te.height,we,Se,Te.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,G,Ae,Te.width,Te.height,0,we,Se,Te.data)}}}else{Fe=T.mipmaps,Ne&&Ge&&(Fe.length>0&&je++,t.texStorage2D(s.TEXTURE_CUBE_MAP,je,Ae,oe[0].width,oe[0].height));for(let le=0;le<6;le++)if(Ee){Ne?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,oe[le].width,oe[le].height,we,Se,oe[le].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ae,oe[le].width,oe[le].height,0,we,Se,oe[le].data);for(let G=0;G<Fe.length;G++){let ve=Fe[G].image[le].image;Ne?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,G+1,0,0,ve.width,ve.height,we,Se,ve.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,G+1,Ae,ve.width,ve.height,0,we,Se,ve.data)}}else{Ne?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,we,Se,oe[le]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ae,we,Se,oe[le]);for(let G=0;G<Fe.length;G++){let Te=Fe[G];Ne?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,G+1,0,0,we,Se,Te.image[le]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,G+1,Ae,we,Se,Te.image[le])}}}v(T,ke)&&_(s.TEXTURE_CUBE_MAP),ie.__version=$.version,T.onUpdate&&T.onUpdate(T)}w.__version=T.version}function J(w,T,F,se,$,ie){let ce=r.convert(F.format,F.colorSpace),_e=r.convert(F.type),he=y(F.internalFormat,ce,_e,F.colorSpace);if(!i.get(T).__hasExternalTextures){let Ee=Math.max(1,T.width>>ie),oe=Math.max(1,T.height>>ie);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?t.texImage3D($,ie,he,Ee,oe,T.depth,0,ce,_e,null):t.texImage2D($,ie,he,Ee,oe,0,ce,_e,null)}t.bindFramebuffer(s.FRAMEBUFFER,w),ue(T)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,se,$,i.get(F).__webglTexture,0,de(T)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,se,$,i.get(F).__webglTexture,ie),t.bindFramebuffer(s.FRAMEBUFFER,null)}function re(w,T,F){if(s.bindRenderbuffer(s.RENDERBUFFER,w),T.depthBuffer&&!T.stencilBuffer){let se=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(F||ue(T)){let $=T.depthTexture;$&&$.isDepthTexture&&($.type===mn?se=s.DEPTH_COMPONENT32F:$.type===$i&&(se=s.DEPTH_COMPONENT24));let ie=de(T);ue(T)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ie,se,T.width,T.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ie,se,T.width,T.height)}else s.renderbufferStorage(s.RENDERBUFFER,se,T.width,T.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,w)}else if(T.depthBuffer&&T.stencilBuffer){let se=de(T);F&&ue(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,se,s.DEPTH24_STENCIL8,T.width,T.height):ue(T)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,se,s.DEPTH24_STENCIL8,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,w)}else{let se=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let $=0;$<se.length;$++){let ie=se[$],ce=r.convert(ie.format,ie.colorSpace),_e=r.convert(ie.type),he=y(ie.internalFormat,ce,_e,ie.colorSpace),me=de(T);F&&ue(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,me,he,T.width,T.height):ue(T)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,me,he,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,he,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function pe(w,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,w),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),P(T.depthTexture,0);let se=i.get(T.depthTexture).__webglTexture,$=de(T);if(T.depthTexture.format===Dr)ue(T)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,se,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,se,0);else if(T.depthTexture.format===Ns)ue(T)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,se,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function ge(w){let T=i.get(w),F=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!T.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");pe(T.__webglFramebuffer,w)}else if(F){T.__webglDepthbuffer=[];for(let se=0;se<6;se++)t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[se]),T.__webglDepthbuffer[se]=s.createRenderbuffer(),re(T.__webglDepthbuffer[se],w,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=s.createRenderbuffer(),re(T.__webglDepthbuffer,w,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function fe(w,T,F){let se=i.get(w);T!==void 0&&J(se.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&ge(w)}function O(w){let T=w.texture,F=i.get(w),se=i.get(T);w.addEventListener("dispose",b),w.isWebGLMultipleRenderTargets!==!0&&(se.__webglTexture===void 0&&(se.__webglTexture=s.createTexture()),se.__version=T.version,o.memory.textures++);let $=w.isWebGLCubeRenderTarget===!0,ie=w.isWebGLMultipleRenderTargets===!0,ce=A(w)||a;if($){F.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(a&&T.mipmaps&&T.mipmaps.length>0){F.__webglFramebuffer[_e]=[];for(let he=0;he<T.mipmaps.length;he++)F.__webglFramebuffer[_e][he]=s.createFramebuffer()}else F.__webglFramebuffer[_e]=s.createFramebuffer()}else{if(a&&T.mipmaps&&T.mipmaps.length>0){F.__webglFramebuffer=[];for(let _e=0;_e<T.mipmaps.length;_e++)F.__webglFramebuffer[_e]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(ie)if(n.drawBuffers){let _e=w.texture;for(let he=0,me=_e.length;he<me;he++){let Ee=i.get(_e[he]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&ue(w)===!1){let _e=ie?T:[T];F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let he=0;he<_e.length;he++){let me=_e[he];F.__webglColorRenderbuffer[he]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[he]);let Ee=r.convert(me.format,me.colorSpace),oe=r.convert(me.type),He=y(me.internalFormat,Ee,oe,me.colorSpace,w.isXRRenderTarget===!0),ke=de(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,ke,He,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,F.__webglColorRenderbuffer[he])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),re(F.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if($){t.bindTexture(s.TEXTURE_CUBE_MAP,se.__webglTexture),L(s.TEXTURE_CUBE_MAP,T,ce);for(let _e=0;_e<6;_e++)if(a&&T.mipmaps&&T.mipmaps.length>0)for(let he=0;he<T.mipmaps.length;he++)J(F.__webglFramebuffer[_e][he],w,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,he);else J(F.__webglFramebuffer[_e],w,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);v(T,ce)&&_(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){let _e=w.texture;for(let he=0,me=_e.length;he<me;he++){let Ee=_e[he],oe=i.get(Ee);t.bindTexture(s.TEXTURE_2D,oe.__webglTexture),L(s.TEXTURE_2D,Ee,ce),J(F.__webglFramebuffer,w,Ee,s.COLOR_ATTACHMENT0+he,s.TEXTURE_2D,0),v(Ee,ce)&&_(s.TEXTURE_2D)}t.unbindTexture()}else{let _e=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?_e=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(_e,se.__webglTexture),L(_e,T,ce),a&&T.mipmaps&&T.mipmaps.length>0)for(let he=0;he<T.mipmaps.length;he++)J(F.__webglFramebuffer[he],w,T,s.COLOR_ATTACHMENT0,_e,he);else J(F.__webglFramebuffer,w,T,s.COLOR_ATTACHMENT0,_e,0);v(T,ce)&&_(_e),t.unbindTexture()}w.depthBuffer&&ge(w)}function Oe(w){let T=A(w)||a,F=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let se=0,$=F.length;se<$;se++){let ie=F[se];if(v(ie,T)){let ce=w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,_e=i.get(ie).__webglTexture;t.bindTexture(ce,_e),_(ce),t.unbindTexture()}}}function xe(w){if(a&&w.samples>0&&ue(w)===!1){let T=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],F=w.width,se=w.height,$=s.COLOR_BUFFER_BIT,ie=[],ce=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=i.get(w),he=w.isWebGLMultipleRenderTargets===!0;if(he)for(let me=0;me<T.length;me++)t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let me=0;me<T.length;me++){ie.push(s.COLOR_ATTACHMENT0+me),w.depthBuffer&&ie.push(ce);let Ee=_e.__ignoreDepthValues!==void 0?_e.__ignoreDepthValues:!1;if(Ee===!1&&(w.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),he&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,_e.__webglColorRenderbuffer[me]),Ee===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[ce]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[ce])),he){let oe=i.get(T[me]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,oe,0)}s.blitFramebuffer(0,0,F,se,0,0,F,se,$,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),he)for(let me=0;me<T.length;me++){t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,_e.__webglColorRenderbuffer[me]);let Ee=i.get(T[me]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,Ee,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}}function de(w){return Math.min(n.maxSamples,w.samples)}function ue(w){let T=i.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function be(w){let T=o.render.frame;h.get(w)!==T&&(h.set(w,T),w.update())}function ae(w,T){let F=w.colorSpace,se=w.format,$=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Nh||F!==Ct&&F!==pn&&(st.getTransfer(F)===At?a===!1?e.has("EXT_sRGB")===!0&&se===Nt?(w.format=Nh,w.minFilter=Et,w.generateMipmaps=!1):T=vl.sRGBToLinear(T):(se!==Nt||$!==Ot)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),T}this.allocateTextureUnit=I,this.resetTextureUnits=z,this.setTexture2D=P,this.setTexture2DArray=X,this.setTexture3D=q,this.setTextureCube=Q,this.rebindTextures=fe,this.setupRenderTarget=O,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=J,this.useMultisampledRTT=ue}function JE(s,e,t){let i=t.isWebGL2;function n(r,o=pn){let a,l=st.getTransfer(o);if(r===Ot)return s.UNSIGNED_BYTE;if(r===yp)return s.UNSIGNED_SHORT_4_4_4_4;if(r===xp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===L0)return s.BYTE;if(r===U0)return s.SHORT;if(r===gu)return s.UNSIGNED_SHORT;if(r===vp)return s.INT;if(r===$i)return s.UNSIGNED_INT;if(r===mn)return s.FLOAT;if(r===on)return i?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===F0)return s.ALPHA;if(r===Nt)return s.RGBA;if(r===P0)return s.LUMINANCE;if(r===N0)return s.LUMINANCE_ALPHA;if(r===Dr)return s.DEPTH_COMPONENT;if(r===Ns)return s.DEPTH_STENCIL;if(r===Nh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Gr)return s.RED;if(r===Ep)return s.RED_INTEGER;if(r===zr)return s.RG;if(r===Sp)return s.RG_INTEGER;if(r===Cp)return s.RGBA_INTEGER;if(r===To||r===$c||r===eh||r===Io)if(l===At)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===To)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===$c)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===eh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Io)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===To)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===$c)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===eh)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Io)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===cl||r===zd||r===hl||r===Hd)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===cl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===zd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===hl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Hd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===jl)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ul||r===fl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===ul)return l===At?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===fl)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===dl||r===Vd||r===Wd||r===Kd||r===Uo||r===Xd||r===qd||r===Yd||r===Jd||r===Zd||r===jd||r===$d||r===eA||r===tA)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===dl)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Vd)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Wd)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Kd)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Uo)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Xd)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===qd)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Yd)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Jd)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Zd)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===jd)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===$d)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===eA)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===tA)return l===At?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===bo||r===nA||r===iA)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===bo)return l===At?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===nA)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===iA)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===O0||r===rA||r===sA||r===oA)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===bo)return a.COMPRESSED_RED_RGTC1_EXT;if(r===rA)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===sA)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===oA)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Rr?i?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:n}}var qh=class extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},qn=class extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}},ZE={type:"move"},Do=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let p of e.hand.values()){let A=t.getJointPose(p,i),g=this._getHandJoint(c,p);A!==null&&(g.matrix.fromArray(A.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=A.radius),g.visible=A!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ZE)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new qn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Yh=class extends nr{constructor(e,t){super();let i=this,n=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,m=null,p=t.getContextAttributes(),A=null,g=null,v=[],_=[],y=new Qe,S=null,C=new Ht;C.layers.enable(1),C.viewport=new ot;let E=new Ht;E.layers.enable(2),E.viewport=new ot;let b=[C,E],x=new qh;x.layers.enable(1),x.layers.enable(2);let M=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let k=v[L];return k===void 0&&(k=new Do,v[L]=k),k.getTargetRaySpace()},this.getControllerGrip=function(L){let k=v[L];return k===void 0&&(k=new Do,v[L]=k),k.getGripSpace()},this.getHand=function(L){let k=v[L];return k===void 0&&(k=new Do,v[L]=k),k.getHandSpace()};function R(L){let k=_.indexOf(L.inputSource);if(k===-1)return;let W=v[k];W!==void 0&&(W.update(L.inputSource,L.frame,c||o),W.dispatchEvent({type:L.type,data:L.inputSource}))}function z(){n.removeEventListener("select",R),n.removeEventListener("selectstart",R),n.removeEventListener("selectend",R),n.removeEventListener("squeeze",R),n.removeEventListener("squeezestart",R),n.removeEventListener("squeezeend",R),n.removeEventListener("end",z),n.removeEventListener("inputsourceschange",I);for(let L=0;L<v.length;L++){let k=_[L];k!==null&&(_[L]=null,v[L].disconnect(k))}M=null,N=null,e.setRenderTarget(A),d=null,f=null,u=null,n=null,g=null,H.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){r=L,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){a=L,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(L){c=L},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(L){if(n=L,n!==null){if(A=e.getRenderTarget(),n.addEventListener("select",R),n.addEventListener("selectstart",R),n.addEventListener("selectend",R),n.addEventListener("squeeze",R),n.addEventListener("squeezestart",R),n.addEventListener("squeezeend",R),n.addEventListener("end",z),n.addEventListener("inputsourceschange",I),p.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(y),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let k={antialias:n.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(n,t,k),n.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),g=new gn(d.framebufferWidth,d.framebufferHeight,{format:Nt,type:Ot,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let k=null,W=null,ee=null;p.depth&&(ee=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,k=p.stencil?Ns:Dr,W=p.stencil?Rr:$i);let J={colorFormat:t.RGBA8,depthFormat:ee,scaleFactor:r};u=new XRWebGLBinding(n,t),f=u.createProjectionLayer(J),n.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),g=new gn(f.textureWidth,f.textureHeight,{format:Nt,type:Ot,depthTexture:new wl(f.textureWidth,f.textureHeight,W,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});let re=e.properties.get(g);re.__ignoreDepthValues=f.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),H.setContext(n),H.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function I(L){for(let k=0;k<L.removed.length;k++){let W=L.removed[k],ee=_.indexOf(W);ee>=0&&(_[ee]=null,v[ee].disconnect(W))}for(let k=0;k<L.added.length;k++){let W=L.added[k],ee=_.indexOf(W);if(ee===-1){for(let re=0;re<v.length;re++)if(re>=_.length){_.push(W),ee=re;break}else if(_[re]===null){_[re]=W,ee=re;break}if(ee===-1)break}let J=v[ee];J&&J.connect(W)}}let U=new K,P=new K;function X(L,k,W){U.setFromMatrixPosition(k.matrixWorld),P.setFromMatrixPosition(W.matrixWorld);let ee=U.distanceTo(P),J=k.projectionMatrix.elements,re=W.projectionMatrix.elements,pe=J[14]/(J[10]-1),ge=J[14]/(J[10]+1),fe=(J[9]+1)/J[5],O=(J[9]-1)/J[5],Oe=(J[8]-1)/J[0],xe=(re[8]+1)/re[0],de=pe*Oe,ue=pe*xe,be=ee/(-Oe+xe),ae=be*-Oe;k.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(ae),L.translateZ(be),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert();let w=pe+be,T=ge+be,F=de-ae,se=ue+(ee-ae),$=fe*ge/T*w,ie=O*ge/T*w;L.projectionMatrix.makePerspective(F,se,$,ie,w,T),L.projectionMatrixInverse.copy(L.projectionMatrix).invert()}function q(L,k){k===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(k.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(n===null)return;x.near=E.near=C.near=L.near,x.far=E.far=C.far=L.far,(M!==x.near||N!==x.far)&&(n.updateRenderState({depthNear:x.near,depthFar:x.far}),M=x.near,N=x.far);let k=L.parent,W=x.cameras;q(x,k);for(let ee=0;ee<W.length;ee++)q(W[ee],k);W.length===2?X(x,C,E):x.projectionMatrix.copy(C.projectionMatrix),Q(L,x,k)};function Q(L,k,W){W===null?L.matrix.copy(k.matrixWorld):(L.matrix.copy(W.matrixWorld),L.matrix.invert(),L.matrix.multiply(k.matrixWorld)),L.matrix.decompose(L.position,L.quaternion,L.scale),L.updateMatrixWorld(!0),L.projectionMatrix.copy(k.projectionMatrix),L.projectionMatrixInverse.copy(k.projectionMatrixInverse),L.isPerspectiveCamera&&(L.fov=ks*2*Math.atan(1/L.projectionMatrix.elements[5]),L.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(L){l=L,f!==null&&(f.fixedFoveation=L),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=L)};let V=null;function D(L,k){if(h=k.getViewerPose(c||o),m=k,h!==null){let W=h.views;d!==null&&(e.setRenderTargetFramebuffer(g,d.framebuffer),e.setRenderTarget(g));let ee=!1;W.length!==x.cameras.length&&(x.cameras.length=0,ee=!0);for(let J=0;J<W.length;J++){let re=W[J],pe=null;if(d!==null)pe=d.getViewport(re);else{let fe=u.getViewSubImage(f,re);pe=fe.viewport,J===0&&(e.setRenderTargetTextures(g,fe.colorTexture,f.ignoreDepthValues?void 0:fe.depthStencilTexture),e.setRenderTarget(g))}let ge=b[J];ge===void 0&&(ge=new Ht,ge.layers.enable(J),ge.viewport=new ot,b[J]=ge),ge.matrix.fromArray(re.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(re.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(pe.x,pe.y,pe.width,pe.height),J===0&&(x.matrix.copy(ge.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ee===!0&&x.cameras.push(ge)}}for(let W=0;W<v.length;W++){let ee=_[W],J=v[W];ee!==null&&J!==void 0&&J.update(ee,k,c||o)}V&&V(L,k),k.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:k}),m=null}let H=new Dp;H.setAnimationLoop(D),this.setAnimationLoop=function(L){V=L},this.dispose=function(){}}};function jE(s,e){function t(A,g){A.matrixAutoUpdate===!0&&A.updateMatrix(),g.value.copy(A.matrix)}function i(A,g){g.color.getRGB(A.fogColor.value,Rp(s)),g.isFog?(A.fogNear.value=g.near,A.fogFar.value=g.far):g.isFogExp2&&(A.fogDensity.value=g.density)}function n(A,g,v,_,y){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(A,g):g.isMeshToonMaterial?(r(A,g),u(A,g)):g.isMeshPhongMaterial?(r(A,g),h(A,g)):g.isMeshStandardMaterial?(r(A,g),f(A,g),g.isMeshPhysicalMaterial&&d(A,g,y)):g.isMeshMatcapMaterial?(r(A,g),m(A,g)):g.isMeshDepthMaterial?r(A,g):g.isMeshDistanceMaterial?(r(A,g),p(A,g)):g.isMeshNormalMaterial?r(A,g):g.isLineBasicMaterial?(o(A,g),g.isLineDashedMaterial&&a(A,g)):g.isPointsMaterial?l(A,g,v,_):g.isSpriteMaterial?c(A,g):g.isShadowMaterial?(A.color.value.copy(g.color),A.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(A,g){A.opacity.value=g.opacity,g.color&&A.diffuse.value.copy(g.color),g.emissive&&A.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(A.map.value=g.map,t(g.map,A.mapTransform)),g.alphaMap&&(A.alphaMap.value=g.alphaMap,t(g.alphaMap,A.alphaMapTransform)),g.bumpMap&&(A.bumpMap.value=g.bumpMap,t(g.bumpMap,A.bumpMapTransform),A.bumpScale.value=g.bumpScale,g.side===Bn&&(A.bumpScale.value*=-1)),g.normalMap&&(A.normalMap.value=g.normalMap,t(g.normalMap,A.normalMapTransform),A.normalScale.value.copy(g.normalScale),g.side===Bn&&A.normalScale.value.negate()),g.displacementMap&&(A.displacementMap.value=g.displacementMap,t(g.displacementMap,A.displacementMapTransform),A.displacementScale.value=g.displacementScale,A.displacementBias.value=g.displacementBias),g.emissiveMap&&(A.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,A.emissiveMapTransform)),g.specularMap&&(A.specularMap.value=g.specularMap,t(g.specularMap,A.specularMapTransform)),g.alphaTest>0&&(A.alphaTest.value=g.alphaTest);let v=e.get(g).envMap;if(v&&(A.envMap.value=v,A.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,A.reflectivity.value=g.reflectivity,A.ior.value=g.ior,A.refractionRatio.value=g.refractionRatio),g.lightMap){A.lightMap.value=g.lightMap;let _=s._useLegacyLights===!0?Math.PI:1;A.lightMapIntensity.value=g.lightMapIntensity*_,t(g.lightMap,A.lightMapTransform)}g.aoMap&&(A.aoMap.value=g.aoMap,A.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,A.aoMapTransform))}function o(A,g){A.diffuse.value.copy(g.color),A.opacity.value=g.opacity,g.map&&(A.map.value=g.map,t(g.map,A.mapTransform))}function a(A,g){A.dashSize.value=g.dashSize,A.totalSize.value=g.dashSize+g.gapSize,A.scale.value=g.scale}function l(A,g,v,_){A.diffuse.value.copy(g.color),A.opacity.value=g.opacity,A.size.value=g.size*v,A.scale.value=_*.5,g.map&&(A.map.value=g.map,t(g.map,A.uvTransform)),g.alphaMap&&(A.alphaMap.value=g.alphaMap,t(g.alphaMap,A.alphaMapTransform)),g.alphaTest>0&&(A.alphaTest.value=g.alphaTest)}function c(A,g){A.diffuse.value.copy(g.color),A.opacity.value=g.opacity,A.rotation.value=g.rotation,g.map&&(A.map.value=g.map,t(g.map,A.mapTransform)),g.alphaMap&&(A.alphaMap.value=g.alphaMap,t(g.alphaMap,A.alphaMapTransform)),g.alphaTest>0&&(A.alphaTest.value=g.alphaTest)}function h(A,g){A.specular.value.copy(g.specular),A.shininess.value=Math.max(g.shininess,1e-4)}function u(A,g){g.gradientMap&&(A.gradientMap.value=g.gradientMap)}function f(A,g){A.metalness.value=g.metalness,g.metalnessMap&&(A.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,A.metalnessMapTransform)),A.roughness.value=g.roughness,g.roughnessMap&&(A.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,A.roughnessMapTransform)),e.get(g).envMap&&(A.envMapIntensity.value=g.envMapIntensity)}function d(A,g,v){A.ior.value=g.ior,g.sheen>0&&(A.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),A.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(A.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,A.sheenColorMapTransform)),g.sheenRoughnessMap&&(A.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,A.sheenRoughnessMapTransform))),g.clearcoat>0&&(A.clearcoat.value=g.clearcoat,A.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(A.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,A.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(A.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,A.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(A.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,A.clearcoatNormalMapTransform),A.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Bn&&A.clearcoatNormalScale.value.negate())),g.iridescence>0&&(A.iridescence.value=g.iridescence,A.iridescenceIOR.value=g.iridescenceIOR,A.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],A.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(A.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,A.iridescenceMapTransform)),g.iridescenceThicknessMap&&(A.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,A.iridescenceThicknessMapTransform))),g.transmission>0&&(A.transmission.value=g.transmission,A.transmissionSamplerMap.value=v.texture,A.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(A.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,A.transmissionMapTransform)),A.thickness.value=g.thickness,g.thicknessMap&&(A.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,A.thicknessMapTransform)),A.attenuationDistance.value=g.attenuationDistance,A.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(A.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(A.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,A.anisotropyMapTransform))),A.specularIntensity.value=g.specularIntensity,A.specularColor.value.copy(g.specularColor),g.specularColorMap&&(A.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,A.specularColorMapTransform)),g.specularIntensityMap&&(A.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,A.specularIntensityMapTransform))}function m(A,g){g.matcap&&(A.matcap.value=g.matcap)}function p(A,g){let v=e.get(g).light;A.referencePosition.value.setFromMatrixPosition(v.matrixWorld),A.nearDistance.value=v.shadow.camera.near,A.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function $E(s,e,t,i){let n={},r={},o=[],a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,_){let y=_.program;i.uniformBlockBinding(v,y)}function c(v,_){let y=n[v.id];y===void 0&&(m(v),y=h(v),n[v.id]=y,v.addEventListener("dispose",A));let S=_.program;i.updateUBOMapping(v,S);let C=e.render.frame;r[v.id]!==C&&(f(v),r[v.id]=C)}function h(v){let _=u();v.__bindingPointIndex=_;let y=s.createBuffer(),S=v.__size,C=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,S,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,y),y}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let _=n[v.id],y=v.uniforms,S=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let C=0,E=y.length;C<E;C++){let b=Array.isArray(y[C])?y[C]:[y[C]];for(let x=0,M=b.length;x<M;x++){let N=b[x];if(d(N,C,x,S)===!0){let R=N.__offset,z=Array.isArray(N.value)?N.value:[N.value],I=0;for(let U=0;U<z.length;U++){let P=z[U],X=p(P);typeof P=="number"||typeof P=="boolean"?(N.__data[0]=P,s.bufferSubData(s.UNIFORM_BUFFER,R+I,N.__data)):P.isMatrix3?(N.__data[0]=P.elements[0],N.__data[1]=P.elements[1],N.__data[2]=P.elements[2],N.__data[3]=0,N.__data[4]=P.elements[3],N.__data[5]=P.elements[4],N.__data[6]=P.elements[5],N.__data[7]=0,N.__data[8]=P.elements[6],N.__data[9]=P.elements[7],N.__data[10]=P.elements[8],N.__data[11]=0):(P.toArray(N.__data,I),I+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,R,N.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(v,_,y,S){let C=v.value,E=_+"_"+y;if(S[E]===void 0)return typeof C=="number"||typeof C=="boolean"?S[E]=C:S[E]=C.clone(),!0;{let b=S[E];if(typeof C=="number"||typeof C=="boolean"){if(b!==C)return S[E]=C,!0}else if(b.equals(C)===!1)return b.copy(C),!0}return!1}function m(v){let _=v.uniforms,y=0,S=16;for(let E=0,b=_.length;E<b;E++){let x=Array.isArray(_[E])?_[E]:[_[E]];for(let M=0,N=x.length;M<N;M++){let R=x[M],z=Array.isArray(R.value)?R.value:[R.value];for(let I=0,U=z.length;I<U;I++){let P=z[I],X=p(P),q=y%S;q!==0&&S-q<X.boundary&&(y+=S-q),R.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=y,y+=X.storage}}}let C=y%S;return C>0&&(y+=S-C),v.__size=y,v.__cache={},this}function p(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function A(v){let _=v.target;_.removeEventListener("dispose",A);let y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(n[_.id]),delete n[_.id],delete r[_.id]}function g(){for(let v in n)s.deleteBuffer(n[v]);o=[],n={},r={}}return{bind:l,update:c,dispose:g}}var Go=class{constructor(e={}){let{canvas:t=c_(),context:i=null,depth:n=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;let d=new Uint32Array(4),m=new Int32Array(4),p=null,A=null,g=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=at,this._useLegacyLights=!1,this.toneMapping=tr,this.toneMappingExposure=1;let _=this,y=!1,S=0,C=0,E=null,b=-1,x=null,M=new ot,N=new ot,R=null,z=new Le(0),I=0,U=t.width,P=t.height,X=1,q=null,Q=null,V=new ot(0,0,U,P),D=new ot(0,0,U,P),H=!1,L=new Oo,k=!1,W=!1,ee=null,J=new Ze,re=new Qe,pe=new K,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function fe(){return E===null?X:1}let O=i;function Oe(B,Y){for(let Z=0;Z<B.length;Z++){let te=B[Z],j=t.getContext(te,Y);if(j!==null)return j}return null}try{let B={alpha:!0,depth:n,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${uu}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",G,!1),t.addEventListener("webglcontextcreationerror",Te,!1),O===null){let Y=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&Y.shift(),O=Oe(Y,B),O===null)throw Oe(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(B){throw console.error("THREE.WebGLRenderer: "+B.message),B}let xe,de,ue,be,ae,w,T,F,se,$,ie,ce,_e,he,me,Ee,oe,He,ke,we,Se,Ae,Ne,Ge;function je(){xe=new _x(O),de=new fx(O,xe,e),xe.init(de),Ae=new JE(O,xe,de),ue=new qE(O,xe,de),be=new xx(O),ae=new PE,w=new YE(O,xe,ue,ae,de,Ae,be),T=new Ax(_),F=new gx(_),se=new w_(O,de),Ne=new hx(O,xe,se,de),$=new vx(O,se,be,Ne),ie=new Mx(O,$,se,be),ke=new Cx(O,de,w),Ee=new dx(ae),ce=new FE(_,T,F,xe,de,Ne,Ee),_e=new jE(_,ae),he=new OE,me=new VE(xe,de),He=new cx(_,T,F,ue,ie,f,l),oe=new XE(_,ie,de),Ge=new $E(O,be,de,ue),we=new ux(O,xe,be,de),Se=new yx(O,xe,be,de),be.programs=ce.programs,_.capabilities=de,_.extensions=xe,_.properties=ae,_.renderLists=he,_.shadowMap=oe,_.state=ue,_.info=be}je();let Fe=new Yh(_,O);this.xr=Fe,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let B=xe.get("WEBGL_lose_context");B&&B.loseContext()},this.forceContextRestore=function(){let B=xe.get("WEBGL_lose_context");B&&B.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(B){B!==void 0&&(X=B,this.setSize(U,P,!1))},this.getSize=function(B){return B.set(U,P)},this.setSize=function(B,Y,Z=!0){if(Fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=B,P=Y,t.width=Math.floor(B*X),t.height=Math.floor(Y*X),Z===!0&&(t.style.width=B+"px",t.style.height=Y+"px"),this.setViewport(0,0,B,Y)},this.getDrawingBufferSize=function(B){return B.set(U*X,P*X).floor()},this.setDrawingBufferSize=function(B,Y,Z){U=B,P=Y,X=Z,t.width=Math.floor(B*Z),t.height=Math.floor(Y*Z),this.setViewport(0,0,B,Y)},this.getCurrentViewport=function(B){return B.copy(M)},this.getViewport=function(B){return B.copy(V)},this.setViewport=function(B,Y,Z,te){B.isVector4?V.set(B.x,B.y,B.z,B.w):V.set(B,Y,Z,te),ue.viewport(M.copy(V).multiplyScalar(X).floor())},this.getScissor=function(B){return B.copy(D)},this.setScissor=function(B,Y,Z,te){B.isVector4?D.set(B.x,B.y,B.z,B.w):D.set(B,Y,Z,te),ue.scissor(N.copy(D).multiplyScalar(X).floor())},this.getScissorTest=function(){return H},this.setScissorTest=function(B){ue.setScissorTest(H=B)},this.setOpaqueSort=function(B){q=B},this.setTransparentSort=function(B){Q=B},this.getClearColor=function(B){return B.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor.apply(He,arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha.apply(He,arguments)},this.clear=function(B=!0,Y=!0,Z=!0){let te=0;if(B){let j=!1;if(E!==null){let Me=E.texture.format;j=Me===Cp||Me===Sp||Me===Ep}if(j){let Me=E.texture.type,Ue=Me===Ot||Me===$i||Me===gu||Me===Rr||Me===yp||Me===xp,ze=He.getClearColor(),ye=He.getClearAlpha(),Xe=ze.r,qe=ze.g,We=ze.b;Ue?(d[0]=Xe,d[1]=qe,d[2]=We,d[3]=ye,O.clearBufferuiv(O.COLOR,0,d)):(m[0]=Xe,m[1]=qe,m[2]=We,m[3]=ye,O.clearBufferiv(O.COLOR,0,m))}else te|=O.COLOR_BUFFER_BIT}Y&&(te|=O.DEPTH_BUFFER_BIT),Z&&(te|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",G,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),he.dispose(),me.dispose(),ae.dispose(),T.dispose(),F.dispose(),ie.dispose(),Ne.dispose(),Ge.dispose(),ce.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",tt),Fe.removeEventListener("sessionend",Ke),ee&&(ee.dispose(),ee=null),et.stop()};function le(B){B.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function G(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;let B=be.autoReset,Y=oe.enabled,Z=oe.autoUpdate,te=oe.needsUpdate,j=oe.type;je(),be.autoReset=B,oe.enabled=Y,oe.autoUpdate=Z,oe.needsUpdate=te,oe.type=j}function Te(B){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",B.statusMessage)}function ve(B){let Y=B.target;Y.removeEventListener("dispose",ve),Ie(Y)}function Ie(B){Re(B),ae.remove(B)}function Re(B){let Y=ae.get(B).programs;Y!==void 0&&(Y.forEach(function(Z){ce.releaseProgram(Z)}),B.isShaderMaterial&&ce.releaseShaderCache(B))}this.renderBufferDirect=function(B,Y,Z,te,j,Me){Y===null&&(Y=ge);let Ue=j.isMesh&&j.matrixWorld.determinant()<0,ze=hs(B,Y,Z,te,j);ue.setMaterial(te,Ue);let ye=Z.index,Xe=1;if(te.wireframe===!0){if(ye=$.getWireframeAttribute(Z),ye===void 0)return;Xe=2}let qe=Z.drawRange,We=Z.attributes.position,rt=qe.start*Xe,Qt=(qe.start+qe.count)*Xe;Me!==null&&(rt=Math.max(rt,Me.start*Xe),Qt=Math.min(Qt,(Me.start+Me.count)*Xe)),ye!==null?(rt=Math.max(rt,0),Qt=Math.min(Qt,ye.count)):We!=null&&(rt=Math.max(rt,0),Qt=Math.min(Qt,We.count));let mt=Qt-rt;if(mt<0||mt===1/0)return;Ne.setup(j,te,ze,Z,ye);let tn,lt=we;if(ye!==null&&(tn=se.get(ye),lt=Se,lt.setIndex(tn)),j.isMesh)te.wireframe===!0?(ue.setLineWidth(te.wireframeLinewidth*fe()),lt.setMode(O.LINES)):lt.setMode(O.TRIANGLES);else if(j.isLine){let Pe=te.linewidth;Pe===void 0&&(Pe=1),ue.setLineWidth(Pe*fe()),j.isLineSegments?lt.setMode(O.LINES):j.isLineLoop?lt.setMode(O.LINE_LOOP):lt.setMode(O.LINE_STRIP)}else j.isPoints?lt.setMode(O.POINTS):j.isSprite&&lt.setMode(O.TRIANGLES);if(j.isBatchedMesh)lt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else if(j.isInstancedMesh)lt.renderInstances(rt,mt,j.count);else if(Z.isInstancedBufferGeometry){let Pe=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Gt=Math.min(Z.instanceCount,Pe);lt.renderInstances(rt,mt,Gt)}else lt.render(rt,mt)};function Ve(B,Y,Z){B.transparent===!0&&B.side===bn&&B.forceSinglePass===!1?(B.side=Bn,B.needsUpdate=!0,Ft(B,Y,Z),B.side=Ai,B.needsUpdate=!0,Ft(B,Y,Z),B.side=bn):Ft(B,Y,Z)}this.compile=function(B,Y,Z=null){Z===null&&(Z=B),A=me.get(Z),A.init(),v.push(A),Z.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(A.pushLight(j),j.castShadow&&A.pushShadow(j))}),B!==Z&&B.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(A.pushLight(j),j.castShadow&&A.pushShadow(j))}),A.setupLights(_._useLegacyLights);let te=new Set;return B.traverse(function(j){let Me=j.material;if(Me)if(Array.isArray(Me))for(let Ue=0;Ue<Me.length;Ue++){let ze=Me[Ue];Ve(ze,Z,j),te.add(ze)}else Ve(Me,Z,j),te.add(Me)}),v.pop(),A=null,te},this.compileAsync=function(B,Y,Z=null){let te=this.compile(B,Y,Z);return new Promise(j=>{function Me(){if(te.forEach(function(Ue){ae.get(Ue).currentProgram.isReady()&&te.delete(Ue)}),te.size===0){j(B);return}setTimeout(Me,10)}xe.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let De=null;function Ye(B){De&&De(B)}function tt(){et.stop()}function Ke(){et.start()}let et=new Dp;et.setAnimationLoop(Ye),typeof self<"u"&&et.setContext(self),this.setAnimationLoop=function(B){De=B,Fe.setAnimationLoop(B),B===null?et.stop():et.start()},Fe.addEventListener("sessionstart",tt),Fe.addEventListener("sessionend",Ke),this.render=function(B,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(Y),Y=Fe.getCamera()),B.isScene===!0&&B.onBeforeRender(_,B,Y,E),A=me.get(B,v.length),A.init(),v.push(A),J.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),L.setFromProjectionMatrix(J),W=this.localClippingEnabled,k=Ee.init(this.clippingPlanes,W),p=he.get(B,g.length),p.init(),g.push(p),xt(B,Y,0,_.sortObjects),p.finish(),_.sortObjects===!0&&p.sort(q,Q),this.info.render.frame++,k===!0&&Ee.beginShadows();let Z=A.state.shadowsArray;if(oe.render(Z,B,Y),k===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),He.render(p,B),A.setupLights(_._useLegacyLights),Y.isArrayCamera){let te=Y.cameras;for(let j=0,Me=te.length;j<Me;j++){let Ue=te[j];Rt(p,B,Ue,Ue.viewport)}}else Rt(p,B,Y);E!==null&&(w.updateMultisampleRenderTarget(E),w.updateRenderTargetMipmap(E)),B.isScene===!0&&B.onAfterRender(_,B,Y),Ne.resetDefaultState(),b=-1,x=null,v.pop(),v.length>0?A=v[v.length-1]:A=null,g.pop(),g.length>0?p=g[g.length-1]:p=null};function xt(B,Y,Z,te){if(B.visible===!1)return;if(B.layers.test(Y.layers)){if(B.isGroup)Z=B.renderOrder;else if(B.isLOD)B.autoUpdate===!0&&B.update(Y);else if(B.isLight)A.pushLight(B),B.castShadow&&A.pushShadow(B);else if(B.isSprite){if(!B.frustumCulled||L.intersectsSprite(B)){te&&pe.setFromMatrixPosition(B.matrixWorld).applyMatrix4(J);let Ue=ie.update(B),ze=B.material;ze.visible&&p.push(B,Ue,ze,Z,pe.z,null)}}else if((B.isMesh||B.isLine||B.isPoints)&&(!B.frustumCulled||L.intersectsObject(B))){let Ue=ie.update(B),ze=B.material;if(te&&(B.boundingSphere!==void 0?(B.boundingSphere===null&&B.computeBoundingSphere(),pe.copy(B.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),pe.copy(Ue.boundingSphere.center)),pe.applyMatrix4(B.matrixWorld).applyMatrix4(J)),Array.isArray(ze)){let ye=Ue.groups;for(let Xe=0,qe=ye.length;Xe<qe;Xe++){let We=ye[Xe],rt=ze[We.materialIndex];rt&&rt.visible&&p.push(B,Ue,rt,Z,pe.z,We)}}else ze.visible&&p.push(B,Ue,ze,Z,pe.z,null)}}let Me=B.children;for(let Ue=0,ze=Me.length;Ue<ze;Ue++)xt(Me[Ue],Y,Z,te)}function Rt(B,Y,Z,te){let j=B.opaque,Me=B.transmissive,Ue=B.transparent;A.setupLightsView(Z),k===!0&&Ee.setGlobalState(_.clippingPlanes,Z),Me.length>0&&Sn(j,Me,Y,Z),te&&ue.viewport(M.copy(te)),j.length>0&&hn(j,Y,Z),Me.length>0&&hn(Me,Y,Z),Ue.length>0&&hn(Ue,Y,Z),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Sn(B,Y,Z,te){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;let Me=de.isWebGL2;ee===null&&(ee=new gn(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?on:Ot,minFilter:pi,samples:Me?4:0})),_.getDrawingBufferSize(re),Me?ee.setSize(re.x,re.y):ee.setSize(_l(re.x),_l(re.y));let Ue=_.getRenderTarget();_.setRenderTarget(ee),_.getClearColor(z),I=_.getClearAlpha(),I<1&&_.setClearColor(16777215,.5),_.clear();let ze=_.toneMapping;_.toneMapping=tr,hn(B,Z,te),w.updateMultisampleRenderTarget(ee),w.updateRenderTargetMipmap(ee);let ye=!1;for(let Xe=0,qe=Y.length;Xe<qe;Xe++){let We=Y[Xe],rt=We.object,Qt=We.geometry,mt=We.material,tn=We.group;if(mt.side===bn&&rt.layers.test(te.layers)){let lt=mt.side;mt.side=Bn,mt.needsUpdate=!0,Jt(rt,Z,te,Qt,mt,tn),mt.side=lt,mt.needsUpdate=!0,ye=!0}}ye===!0&&(w.updateMultisampleRenderTarget(ee),w.updateRenderTargetMipmap(ee)),_.setRenderTarget(Ue),_.setClearColor(z,I),_.toneMapping=ze}function hn(B,Y,Z){let te=Y.isScene===!0?Y.overrideMaterial:null;for(let j=0,Me=B.length;j<Me;j++){let Ue=B[j],ze=Ue.object,ye=Ue.geometry,Xe=te===null?Ue.material:te,qe=Ue.group;ze.layers.test(Z.layers)&&Jt(ze,Y,Z,ye,Xe,qe)}}function Jt(B,Y,Z,te,j,Me){B.onBeforeRender(_,Y,Z,te,j,Me),B.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,B.matrixWorld),B.normalMatrix.getNormalMatrix(B.modelViewMatrix),j.onBeforeRender(_,Y,Z,te,B,Me),j.transparent===!0&&j.side===bn&&j.forceSinglePass===!1?(j.side=Bn,j.needsUpdate=!0,_.renderBufferDirect(Z,Y,te,j,B,Me),j.side=Ai,j.needsUpdate=!0,_.renderBufferDirect(Z,Y,te,j,B,Me),j.side=bn):_.renderBufferDirect(Z,Y,te,j,B,Me),B.onAfterRender(_,Y,Z,te,j,Me)}function Ft(B,Y,Z){Y.isScene!==!0&&(Y=ge);let te=ae.get(B),j=A.state.lights,Me=A.state.shadowsArray,Ue=j.state.version,ze=ce.getParameters(B,j.state,Me,Y,Z),ye=ce.getProgramCacheKey(ze),Xe=te.programs;te.environment=B.isMeshStandardMaterial?Y.environment:null,te.fog=Y.fog,te.envMap=(B.isMeshStandardMaterial?F:T).get(B.envMap||te.environment),Xe===void 0&&(B.addEventListener("dispose",ve),Xe=new Map,te.programs=Xe);let qe=Xe.get(ye);if(qe!==void 0){if(te.currentProgram===qe&&te.lightsStateVersion===Ue)return Nn(B,ze),qe}else ze.uniforms=ce.getUniforms(B),B.onBuild(Z,ze,_),B.onBeforeCompile(ze,_),qe=ce.acquireProgram(ze,ye),Xe.set(ye,qe),te.uniforms=ze.uniforms;let We=te.uniforms;return(!B.isShaderMaterial&&!B.isRawShaderMaterial||B.clipping===!0)&&(We.clippingPlanes=Ee.uniform),Nn(B,ze),te.needsLights=Ce(B),te.lightsStateVersion=Ue,te.needsLights&&(We.ambientLightColor.value=j.state.ambient,We.lightProbe.value=j.state.probe,We.directionalLights.value=j.state.directional,We.directionalLightShadows.value=j.state.directionalShadow,We.spotLights.value=j.state.spot,We.spotLightShadows.value=j.state.spotShadow,We.rectAreaLights.value=j.state.rectArea,We.ltc_1.value=j.state.rectAreaLTC1,We.ltc_2.value=j.state.rectAreaLTC2,We.pointLights.value=j.state.point,We.pointLightShadows.value=j.state.pointShadow,We.hemisphereLights.value=j.state.hemi,We.directionalShadowMap.value=j.state.directionalShadowMap,We.directionalShadowMatrix.value=j.state.directionalShadowMatrix,We.spotShadowMap.value=j.state.spotShadowMap,We.spotLightMatrix.value=j.state.spotLightMatrix,We.spotLightMap.value=j.state.spotLightMap,We.pointShadowMap.value=j.state.pointShadowMap,We.pointShadowMatrix.value=j.state.pointShadowMatrix),te.currentProgram=qe,te.uniformsList=null,qe}function ht(B){if(B.uniformsList===null){let Y=B.currentProgram.getUniforms();B.uniformsList=Fs.seqWithValue(Y.seq,B.uniforms)}return B.uniformsList}function Nn(B,Y){let Z=ae.get(B);Z.outputColorSpace=Y.outputColorSpace,Z.batching=Y.batching,Z.instancing=Y.instancing,Z.instancingColor=Y.instancingColor,Z.skinning=Y.skinning,Z.morphTargets=Y.morphTargets,Z.morphNormals=Y.morphNormals,Z.morphColors=Y.morphColors,Z.morphTargetsCount=Y.morphTargetsCount,Z.numClippingPlanes=Y.numClippingPlanes,Z.numIntersection=Y.numClipIntersection,Z.vertexAlphas=Y.vertexAlphas,Z.vertexTangents=Y.vertexTangents,Z.toneMapping=Y.toneMapping}function hs(B,Y,Z,te,j){Y.isScene!==!0&&(Y=ge),w.resetTextureUnits();let Me=Y.fog,Ue=te.isMeshStandardMaterial?Y.environment:null,ze=E===null?_.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Ct,ye=(te.isMeshStandardMaterial?F:T).get(te.envMap||Ue),Xe=te.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,qe=!!Z.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),We=!!Z.morphAttributes.position,rt=!!Z.morphAttributes.normal,Qt=!!Z.morphAttributes.color,mt=tr;te.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(mt=_.toneMapping);let tn=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,lt=tn!==void 0?tn.length:0,Pe=ae.get(te),Gt=A.state.lights;if(k===!0&&(W===!0||B!==x)){let nn=B===x&&te.id===b;Ee.setState(te,B,nn)}let ut=!1;te.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Gt.state.version||Pe.outputColorSpace!==ze||j.isBatchedMesh&&Pe.batching===!1||!j.isBatchedMesh&&Pe.batching===!0||j.isInstancedMesh&&Pe.instancing===!1||!j.isInstancedMesh&&Pe.instancing===!0||j.isSkinnedMesh&&Pe.skinning===!1||!j.isSkinnedMesh&&Pe.skinning===!0||j.isInstancedMesh&&Pe.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Pe.instancingColor===!1&&j.instanceColor!==null||Pe.envMap!==ye||te.fog===!0&&Pe.fog!==Me||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==Ee.numPlanes||Pe.numIntersection!==Ee.numIntersection)||Pe.vertexAlphas!==Xe||Pe.vertexTangents!==qe||Pe.morphTargets!==We||Pe.morphNormals!==rt||Pe.morphColors!==Qt||Pe.toneMapping!==mt||de.isWebGL2===!0&&Pe.morphTargetsCount!==lt)&&(ut=!0):(ut=!0,Pe.__version=te.version);let un=Pe.currentProgram;ut===!0&&(un=Ft(te,Y,j));let Er=!1,Cn=!1,Kn=!1,dt=un.getUniforms(),fn=Pe.uniforms;if(ue.useProgram(un.program)&&(Er=!0,Cn=!0,Kn=!0),te.id!==b&&(b=te.id,Cn=!0),Er||x!==B){dt.setValue(O,"projectionMatrix",B.projectionMatrix),dt.setValue(O,"viewMatrix",B.matrixWorldInverse);let nn=dt.map.cameraPosition;nn!==void 0&&nn.setValue(O,pe.setFromMatrixPosition(B.matrixWorld)),de.logarithmicDepthBuffer&&dt.setValue(O,"logDepthBufFC",2/(Math.log(B.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&dt.setValue(O,"isOrthographic",B.isOrthographicCamera===!0),x!==B&&(x=B,Cn=!0,Kn=!0)}if(j.isSkinnedMesh){dt.setOptional(O,j,"bindMatrix"),dt.setOptional(O,j,"bindMatrixInverse");let nn=j.skeleton;nn&&(de.floatVertexTextures?(nn.boneTexture===null&&nn.computeBoneTexture(),dt.setValue(O,"boneTexture",nn.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}j.isBatchedMesh&&(dt.setOptional(O,j,"batchingTexture"),dt.setValue(O,"batchingTexture",j._matricesTexture,w));let ii=Z.morphAttributes;if((ii.position!==void 0||ii.normal!==void 0||ii.color!==void 0&&de.isWebGL2===!0)&&ke.update(j,Z,un),(Cn||Pe.receiveShadow!==j.receiveShadow)&&(Pe.receiveShadow=j.receiveShadow,dt.setValue(O,"receiveShadow",j.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(fn.envMap.value=ye,fn.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),Cn&&(dt.setValue(O,"toneMappingExposure",_.toneMappingExposure),Pe.needsLights&&ne(fn,Kn),Me&&te.fog===!0&&_e.refreshFogUniforms(fn,Me),_e.refreshMaterialUniforms(fn,te,X,P,ee),Fs.upload(O,ht(Pe),fn,w)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Fs.upload(O,ht(Pe),fn,w),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&dt.setValue(O,"center",j.center),dt.setValue(O,"modelViewMatrix",j.modelViewMatrix),dt.setValue(O,"normalMatrix",j.normalMatrix),dt.setValue(O,"modelMatrix",j.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){let nn=te.uniformsGroups;for(let Mn=0,zc=nn.length;Mn<zc;Mn++)if(de.isWebGL2){let Sr=nn[Mn];Ge.update(Sr,un),Ge.bind(Sr,un)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return un}function ne(B,Y){B.ambientLightColor.needsUpdate=Y,B.lightProbe.needsUpdate=Y,B.directionalLights.needsUpdate=Y,B.directionalLightShadows.needsUpdate=Y,B.pointLights.needsUpdate=Y,B.pointLightShadows.needsUpdate=Y,B.spotLights.needsUpdate=Y,B.spotLightShadows.needsUpdate=Y,B.rectAreaLights.needsUpdate=Y,B.hemisphereLights.needsUpdate=Y}function Ce(B){return B.isMeshLambertMaterial||B.isMeshToonMaterial||B.isMeshPhongMaterial||B.isMeshStandardMaterial||B.isShadowMaterial||B.isShaderMaterial&&B.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(B,Y,Z){ae.get(B.texture).__webglTexture=Y,ae.get(B.depthTexture).__webglTexture=Z;let te=ae.get(B);te.__hasExternalTextures=!0,te.__hasExternalTextures&&(te.__autoAllocateDepthBuffer=Z===void 0,te.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(B,Y){let Z=ae.get(B);Z.__webglFramebuffer=Y,Z.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(B,Y=0,Z=0){E=B,S=Y,C=Z;let te=!0,j=null,Me=!1,Ue=!1;if(B){let ye=ae.get(B);ye.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(O.FRAMEBUFFER,null),te=!1):ye.__webglFramebuffer===void 0?w.setupRenderTarget(B):ye.__hasExternalTextures&&w.rebindTextures(B,ae.get(B.texture).__webglTexture,ae.get(B.depthTexture).__webglTexture);let Xe=B.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ue=!0);let qe=ae.get(B).__webglFramebuffer;B.isWebGLCubeRenderTarget?(Array.isArray(qe[Y])?j=qe[Y][Z]:j=qe[Y],Me=!0):de.isWebGL2&&B.samples>0&&w.useMultisampledRTT(B)===!1?j=ae.get(B).__webglMultisampledFramebuffer:Array.isArray(qe)?j=qe[Z]:j=qe,M.copy(B.viewport),N.copy(B.scissor),R=B.scissorTest}else M.copy(V).multiplyScalar(X).floor(),N.copy(D).multiplyScalar(X).floor(),R=H;if(ue.bindFramebuffer(O.FRAMEBUFFER,j)&&de.drawBuffers&&te&&ue.drawBuffers(B,j),ue.viewport(M),ue.scissor(N),ue.setScissorTest(R),Me){let ye=ae.get(B.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye.__webglTexture,Z)}else if(Ue){let ye=ae.get(B.texture),Xe=Y||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,ye.__webglTexture,Z||0,Xe)}b=-1},this.readRenderTargetPixels=function(B,Y,Z,te,j,Me,Ue){if(!(B&&B.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=ae.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&Ue!==void 0&&(ze=ze[Ue]),ze){ue.bindFramebuffer(O.FRAMEBUFFER,ze);try{let ye=B.texture,Xe=ye.format,qe=ye.type;if(Xe!==Nt&&Ae.convert(Xe)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let We=qe===on&&(xe.has("EXT_color_buffer_half_float")||de.isWebGL2&&xe.has("EXT_color_buffer_float"));if(qe!==Ot&&Ae.convert(qe)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(qe===mn&&(de.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=B.width-te&&Z>=0&&Z<=B.height-j&&O.readPixels(Y,Z,te,j,Ae.convert(Xe),Ae.convert(qe),Me)}finally{let ye=E!==null?ae.get(E).__webglFramebuffer:null;ue.bindFramebuffer(O.FRAMEBUFFER,ye)}}},this.copyFramebufferToTexture=function(B,Y,Z=0){let te=Math.pow(2,-Z),j=Math.floor(Y.image.width*te),Me=Math.floor(Y.image.height*te);w.setTexture2D(Y,0),O.copyTexSubImage2D(O.TEXTURE_2D,Z,0,0,B.x,B.y,j,Me),ue.unbindTexture()},this.copyTextureToTexture=function(B,Y,Z,te=0){let j=Y.image.width,Me=Y.image.height,Ue=Ae.convert(Z.format),ze=Ae.convert(Z.type);w.setTexture2D(Z,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,Z.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,Z.unpackAlignment),Y.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,te,B.x,B.y,j,Me,Ue,ze,Y.image.data):Y.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,te,B.x,B.y,Y.mipmaps[0].width,Y.mipmaps[0].height,Ue,Y.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,te,B.x,B.y,Ue,ze,Y.image),te===0&&Z.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),ue.unbindTexture()},this.copyTextureToTexture3D=function(B,Y,Z,te,j=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Me=B.max.x-B.min.x+1,Ue=B.max.y-B.min.y+1,ze=B.max.z-B.min.z+1,ye=Ae.convert(te.format),Xe=Ae.convert(te.type),qe;if(te.isData3DTexture)w.setTexture3D(te,0),qe=O.TEXTURE_3D;else if(te.isDataArrayTexture||te.isCompressedArrayTexture)w.setTexture2DArray(te,0),qe=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,te.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,te.unpackAlignment);let We=O.getParameter(O.UNPACK_ROW_LENGTH),rt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Qt=O.getParameter(O.UNPACK_SKIP_PIXELS),mt=O.getParameter(O.UNPACK_SKIP_ROWS),tn=O.getParameter(O.UNPACK_SKIP_IMAGES),lt=Z.isCompressedTexture?Z.mipmaps[j]:Z.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,lt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,lt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,B.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,B.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,B.min.z),Z.isDataTexture||Z.isData3DTexture?O.texSubImage3D(qe,j,Y.x,Y.y,Y.z,Me,Ue,ze,ye,Xe,lt.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(qe,j,Y.x,Y.y,Y.z,Me,Ue,ze,ye,lt.data)):O.texSubImage3D(qe,j,Y.x,Y.y,Y.z,Me,Ue,ze,ye,Xe,lt),O.pixelStorei(O.UNPACK_ROW_LENGTH,We),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,rt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Qt),O.pixelStorei(O.UNPACK_SKIP_ROWS,mt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,tn),j===0&&te.generateMipmaps&&O.generateMipmap(qe),ue.unbindTexture()},this.initTexture=function(B){B.isCubeTexture?w.setTextureCube(B,0):B.isData3DTexture?w.setTexture3D(B,0):B.isDataArrayTexture||B.isCompressedArrayTexture?w.setTexture2DArray(B,0):w.setTexture2D(B,0),ue.unbindTexture()},this.resetState=function(){S=0,C=0,E=null,ue.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===jo?"display-p3":"srgb",t.unpackColorSpace=st.workingColorSpace===Ws?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===at?Lr:Tp}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Lr?at:Ct}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Jh=class extends Go{};Jh.prototype.isWebGL1Renderer=!0;var Bl=class s{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Le(e),this.near=t,this.far=i}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Rl=class extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},zo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ph,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=hi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,r=this.stride;n<r;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},dn=new K,Ho=class s{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=fi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=fi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=fi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=fi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),n=ft(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),n=ft(n,this.array),r=ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return new ct(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var JA=new K,ZA=new ot,jA=new ot,e1=new K,$A=new Ze,el=new K,Ch=new vn,ep=new Ze,Mh=new Qs,Dl=class extends _t{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Gd,this.bindMatrix=new Ze,this.bindMatrixInverse=new Ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new _n),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,el),this.boundingBox.expandByPoint(el)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new vn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,el),this.boundingSphere.expandByPoint(el)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ch.copy(this.boundingSphere),Ch.applyMatrix4(n),e.ray.intersectsSphere(Ch)!==!1&&(ep.copy(n).invert(),Mh.copy(e.ray).applyMatrix4(ep),!(this.boundingBox!==null&&Mh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Mh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ot,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Gd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===D0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,n=this.geometry;ZA.fromBufferAttribute(n.attributes.skinIndex,e),jA.fromBufferAttribute(n.attributes.skinWeight,e),JA.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=jA.getComponent(r);if(o!==0){let a=ZA.getComponent(r);$A.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(e1.copy(JA).applyMatrix4($A),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},Vo=class extends It{constructor(){super(),this.isBone=!0,this.type="Bone"}},zs=class extends kt{constructor(e=null,t=1,i=1,n,r,o,a,l,c=zt,h=zt,u,f){super(null,o,a,l,c,h,n,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},tp=new Ze,t1=new Ze,Ll=class s{constructor(e=[],t=[]){this.uuid=hi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new Ze;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:t1;tp.multiplyMatrices(a,t[r]),tp.toArray(i,r*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new zs(t,e,e,Nt,mn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){let r=e.bones[i],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Vo),this.bones.push(o),this.boneInverses.push(new Ze().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let n=0,r=t.length;n<r;n++){let o=t[n];e.bones.push(o.uuid);let a=i[n];e.boneInverses.push(a.toArray())}return e}},Fi=class extends ct{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ws=new Ze,np=new Ze,tl=[],ip=new _n,n1=new Ze,Eo=new _t,So=new vn,Ul=class extends _t{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Fi(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,n1)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new _n),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ws),ip.copy(e.boundingBox).applyMatrix4(ws),this.boundingBox.union(ip)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new vn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ws),So.copy(e.boundingSphere).applyMatrix4(ws),this.boundingSphere.union(So)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let i=this.matrixWorld,n=this.count;if(Eo.geometry=this.geometry,Eo.material=this.material,Eo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),So.copy(this.boundingSphere),So.applyMatrix4(i),e.ray.intersectsSphere(So)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,ws),np.multiplyMatrices(i,ws),Eo.matrixWorld=np,Eo.raycast(e,tl);for(let o=0,a=tl.length;o<a;o++){let l=tl[o];l.instanceId=r,l.object=this,t.push(l)}tl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Fi(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Wo=class extends Gn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},rp=new K,sp=new K,op=new Ze,Th=new Qs,nl=new vn,Hs=class extends It{constructor(e=new bt,t=new Wo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let n=1,r=t.count;n<r;n++)rp.fromBufferAttribute(t,n-1),sp.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=rp.distanceTo(sp);e.setAttribute("lineDistance",new Dt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,n=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),nl.copy(i.boundingSphere),nl.applyMatrix4(n),nl.radius+=r,e.ray.intersectsSphere(nl)===!1)return;op.copy(n).invert(),Th.copy(e.ray).applyMatrix4(op);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new K,h=new K,u=new K,f=new K,d=this.isLineSegments?2:1,m=i.index,A=i.attributes.position;if(m!==null){let g=Math.max(0,o.start),v=Math.min(m.count,o.start+o.count);for(let _=g,y=v-1;_<y;_+=d){let S=m.getX(_),C=m.getX(_+1);if(c.fromBufferAttribute(A,S),h.fromBufferAttribute(A,C),Th.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);let b=e.ray.origin.distanceTo(f);b<e.near||b>e.far||t.push({distance:b,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{let g=Math.max(0,o.start),v=Math.min(A.count,o.start+o.count);for(let _=g,y=v-1;_<y;_+=d){if(c.fromBufferAttribute(A,_),h.fromBufferAttribute(A,_+1),Th.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);let C=e.ray.origin.distanceTo(f);C<e.near||C>e.far||t.push({distance:C,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},ap=new K,lp=new K,Fl=class extends Hs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let n=0,r=t.count;n<r;n+=2)ap.fromBufferAttribute(t,n),lp.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+ap.distanceTo(lp);e.setAttribute("lineDistance",new Dt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Pl=class extends Hs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ko=class extends Gn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},cp=new Ze,Zh=new Qs,il=new vn,rl=new K,Or=class extends It{constructor(e=new bt,t=new Ko){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,n=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),il.copy(i.boundingSphere),il.applyMatrix4(n),il.radius+=r,e.ray.intersectsSphere(il)===!1)return;cp.copy(n).invert(),Zh.copy(e.ray).applyMatrix4(cp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=f,p=d;m<p;m++){let A=c.getX(m);rl.fromBufferAttribute(u,A),hp(rl,A,l,n,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let m=f,p=d;m<p;m++)rl.fromBufferAttribute(u,m),hp(rl,m,l,n,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function hp(s,e,t,i,n,r,o){let a=Zh.distanceSqToPoint(s);if(a<t){let l=new K;Zh.closestPointToPoint(s,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}var kr=class extends kt{constructor(e,t,i,n,r,o,a,l,c,h,u,f){super(null,o,a,l,c,h,n,r,u,f),this.isCompressedTexture=!0,this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}},Nl=class extends kr{constructor(e,t,i,n,r,o){super(e,t,i,r,o),this.isCompressedArrayTexture=!0,this.image.depth=n,this.wrapR=wn}},Ol=class extends kr{constructor(e,t,i){super(void 0,e[0].width,e[0].height,t,i,Fr),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}},kl=class extends kt{constructor(e,t,i,n,r,o,a,l,c){super(e,t,i,n,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},jh=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(n),t.push(r),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),n=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(n=Math.floor(a+(l-a)/2),c=i[n]-o,c<0)a=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===o)return n/(r-1);let h=i[n],f=i[n+1]-h,d=(o-h)/f;return(n+d)/(r-1)}getTangent(e,t){let n=e-1e-4,r=e+1e-4;n<0&&(n=0),r>1&&(r=1);let o=this.getPoint(n),a=this.getPoint(r),l=t||(o.isVector2?new Qe:new K);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new K,n=[],r=[],o=[],a=new K,l=new Ze;for(let d=0;d<=e;d++){let m=d/e;n[d]=this.getTangentAt(m,new K)}r[0]=new K,o[0]=new K;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),u=Math.abs(n[0].y),f=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],a),o[0].crossVectors(n[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(n[d-1],n[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(qt(n[d-1].dot(n[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(n[d],r[d])}if(t===!0){let d=Math.acos(qt(r[0].dot(r[e]),-1,1));d/=e,n[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(n[m],d*m)),o[m].crossVectors(n[m],r[m])}return{tangents:n,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};function xu(){let s=0,e=0,t=0,i=0;function n(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){n(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,n(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+i*a}}}var sl=new K,Ih=new xu,bh=new xu,wh=new xu,Xo=class extends jh{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new K){let i=t,n=this.points,r=n.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=n[(a-1)%r]:(sl.subVectors(n[0],n[1]).add(n[0]),c=sl);let u=n[a%r],f=n[(a+1)%r];if(this.closed||a+2<r?h=n[(a+2)%r]:(sl.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=sl),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(f),d),A=Math.pow(f.distanceToSquared(h),d);p<1e-4&&(p=1),m<1e-4&&(m=p),A<1e-4&&(A=p),Ih.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,m,p,A),bh.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,m,p,A),wh.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,m,p,A)}else this.curveType==="catmullrom"&&(Ih.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),bh.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),wh.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(Ih.calc(l),bh.calc(l),wh.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new K().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};var $h=class s extends bt{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};let r=[],o=[];a(n),c(i),h(),this.setAttribute("position",new Dt(r,3)),this.setAttribute("normal",new Dt(r.slice(),3)),this.setAttribute("uv",new Dt(o,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let _=new K,y=new K,S=new K;for(let C=0;C<t.length;C+=3)d(t[C+0],_),d(t[C+1],y),d(t[C+2],S),l(_,y,S,v)}function l(v,_,y,S){let C=S+1,E=[];for(let b=0;b<=C;b++){E[b]=[];let x=v.clone().lerp(y,b/C),M=_.clone().lerp(y,b/C),N=C-b;for(let R=0;R<=N;R++)R===0&&b===C?E[b][R]=x:E[b][R]=x.clone().lerp(M,R/N)}for(let b=0;b<C;b++)for(let x=0;x<2*(C-b)-1;x++){let M=Math.floor(x/2);x%2===0?(f(E[b][M+1]),f(E[b+1][M]),f(E[b][M])):(f(E[b][M+1]),f(E[b+1][M+1]),f(E[b+1][M]))}}function c(v){let _=new K;for(let y=0;y<r.length;y+=3)_.x=r[y+0],_.y=r[y+1],_.z=r[y+2],_.normalize().multiplyScalar(v),r[y+0]=_.x,r[y+1]=_.y,r[y+2]=_.z}function h(){let v=new K;for(let _=0;_<r.length;_+=3){v.x=r[_+0],v.y=r[_+1],v.z=r[_+2];let y=A(v)/2/Math.PI+.5,S=g(v)/Math.PI+.5;o.push(y,1-S)}m(),u()}function u(){for(let v=0;v<o.length;v+=6){let _=o[v+0],y=o[v+2],S=o[v+4],C=Math.max(_,y,S),E=Math.min(_,y,S);C>.9&&E<.1&&(_<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),S<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function d(v,_){let y=v*3;_.x=e[y+0],_.y=e[y+1],_.z=e[y+2]}function m(){let v=new K,_=new K,y=new K,S=new K,C=new Qe,E=new Qe,b=new Qe;for(let x=0,M=0;x<r.length;x+=9,M+=6){v.set(r[x+0],r[x+1],r[x+2]),_.set(r[x+3],r[x+4],r[x+5]),y.set(r[x+6],r[x+7],r[x+8]),C.set(o[M+0],o[M+1]),E.set(o[M+2],o[M+3]),b.set(o[M+4],o[M+5]),S.copy(v).add(_).add(y).divideScalar(3);let N=A(S);p(C,M+0,v,N),p(E,M+2,_,N),p(b,M+4,y,N)}}function p(v,_,y,S){S<0&&v.x===1&&(o[_]=v.x-1),y.x===0&&y.z===0&&(o[_]=S/2/Math.PI+.5)}function A(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.details)}};var Ql=class s extends $h{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var Gl=class s extends bt{constructor(e=1,t=.4,i=12,n=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:r},i=Math.floor(i),n=Math.floor(n);let o=[],a=[],l=[],c=[],h=new K,u=new K,f=new K;for(let d=0;d<=i;d++)for(let m=0;m<=n;m++){let p=m/n*r,A=d/i*Math.PI*2;u.x=(e+t*Math.cos(A))*Math.cos(p),u.y=(e+t*Math.cos(A))*Math.sin(p),u.z=t*Math.sin(A),a.push(u.x,u.y,u.z),h.x=e*Math.cos(p),h.y=e*Math.sin(p),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(m/n),c.push(d/i)}for(let d=1;d<=i;d++)for(let m=1;m<=n;m++){let p=(n+1)*d+m-1,A=(n+1)*(d-1)+m-1,g=(n+1)*(d-1)+m,v=(n+1)*d+m;o.push(p,A,v),o.push(A,g,v)}this.setIndex(o),this.setAttribute("position",new Dt(a,3)),this.setAttribute("normal",new Dt(l,3)),this.setAttribute("uv",new Dt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var zl=class extends vt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Qr=class extends Gn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ip,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Yn=class extends Qr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Qe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function ol(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function i1(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function r1(s){function e(n,r){return s[n]-s[r]}let t=s.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function up(s,e,t){let i=s.length,n=new s.constructor(i);for(let r=0,o=0;o!==i;++r){let a=t[r]*e;for(let l=0;l!==e;++l)n[o++]=s[a+l]}return n}function Op(s,e,t,i){let n=1,r=s[0];for(;r!==void 0&&r[i]===void 0;)r=s[n++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[n++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[n++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=s[n++];while(r!==void 0)}var rr=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],r=t[i-1];e:{t:{let o;n:{i:if(!(e<n)){for(let a=i+2;;){if(n===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=n,n=t[++i],e<n)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=t[--i-1],e>=r)break t}o=i,i=0;break n}break e}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let o=0;o!==n;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},eu=class extends rr{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:aA,endingEnd:aA}}intervalChanged_(e,t,i){let n=this.parameterPositions,r=e-2,o=e+1,a=n[r],l=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case lA:r=e,a=2*t-i;break;case cA:r=n.length-2,a=t+n[r]-n[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case lA:o=e,l=2*i-t;break;case cA:o=1,l=i+n[1]-n[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(i-t)/(n-t),p=m*m,A=p*m,g=-f*A+2*f*p-f*m,v=(1+f)*A+(-1.5-2*f)*p+(-.5+f)*m+1,_=(-1-d)*A+(1.5+d)*p+.5*m,y=d*A-d*p;for(let S=0;S!==a;++S)r[S]=g*o[h+S]+v*o[c+S]+_*o[l+S]+y*o[u+S];return r}},tu=class extends rr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(n-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},nu=class extends rr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},Jn=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ol(t,this.TimeBufferType),this.values=ol(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ol(e.times,Array),values:ol(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new nu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new tu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new eu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Os:t=this.InterpolantFactoryMethodDiscrete;break;case Nr:t=this.InterpolantFactoryMethodLinear;break;case th:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Os;case this.InterpolantFactoryMethodLinear:return Nr;case this.InterpolantFactoryMethodSmooth:return th}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){let i=this.times,n=i.length,r=0,o=n-1;for(;r!==n&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==n){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(n!==void 0&&i1(n))for(let a=0,l=n.length;a!==l;++a){let c=n[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===th,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(n)l=!0;else{let u=a*i,f=u-i,d=u+i;for(let m=0;m!==i;++m){let p=t[u+m];if(p!==t[f+m]||p!==t[d+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};Jn.prototype.TimeBufferType=Float32Array;Jn.prototype.ValueBufferType=Float32Array;Jn.prototype.DefaultInterpolation=Nr;var sr=class extends Jn{};sr.prototype.ValueTypeName="bool";sr.prototype.ValueBufferType=Array;sr.prototype.DefaultInterpolation=Os;sr.prototype.InterpolantFactoryMethodLinear=void 0;sr.prototype.InterpolantFactoryMethodSmooth=void 0;var Hl=class extends Jn{};Hl.prototype.ValueTypeName="color";var Pi=class extends Jn{};Pi.prototype.ValueTypeName="number";var iu=class extends rr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(n-t),c=e*a;for(let h=c+a;c!==h;c+=4)ui.slerpFlat(r,0,o,c-a,o,c,l);return r}},mi=class extends Jn{InterpolantFactoryMethodLinear(e){return new iu(this.times,this.values,this.getValueSize(),e)}};mi.prototype.ValueTypeName="quaternion";mi.prototype.DefaultInterpolation=Nr;mi.prototype.InterpolantFactoryMethodSmooth=void 0;var or=class extends Jn{};or.prototype.ValueTypeName="string";or.prototype.ValueBufferType=Array;or.prototype.DefaultInterpolation=Os;or.prototype.InterpolantFactoryMethodLinear=void 0;or.prototype.InterpolantFactoryMethodSmooth=void 0;var Ni=class extends Jn{};Ni.prototype.ValueTypeName="vector";var Vl=class{constructor(e,t=-1,i,n=k0){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=hi(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,n=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(o1(i[o]).scale(n));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(Jn.toJSON(i[r]));return n}static CreateFromMorphTargetSequence(e,t,i,n){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=r1(l);l=up(l,1,h),c=up(c,1,h),!n&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Pi(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let n={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],f=n[u];f||(n[u]=f=[]),f.push(c)}}let o=[];for(let a in n)o.push(this.CreateFromMorphTargetSequence(a,n[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(u,f,d,m,p){if(d.length!==0){let A=[],g=[];Op(d,A,g,m),A.length!==0&&p.push(new u(f,A,g))}},n=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},m;for(m=0;m<f.length;m++)if(f[m].morphTargets)for(let p=0;p<f[m].morphTargets.length;p++)d[f[m].morphTargets[p]]=-1;for(let p in d){let A=[],g=[];for(let v=0;v!==f[m].morphTargets.length;++v){let _=f[m];A.push(_.time),g.push(_.morphTarget===p?1:0)}n.push(new Pi(".morphTargetInfluence["+p+"]",A,g))}l=d.length*o}else{let d=".bones["+t[u].name+"]";i(Ni,d+".position",f,"pos",n),i(mi,d+".quaternion",f,"rot",n),i(Ni,d+".scale",f,"scl",n)}}return n.length===0?null:new this(r,l,n,a)}resetDuration(){let e=this.tracks,t=0;for(let i=0,n=e.length;i!==n;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function s1(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Pi;case"vector":case"vector2":case"vector3":case"vector4":return Ni;case"color":return Hl;case"quaternion":return mi;case"bool":case"boolean":return sr;case"string":return or}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function o1(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=s1(s.type);if(s.times===void 0){let t=[],i=[];Op(s.keys,t,i,"value"),s.times=t,s.values=i}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var er={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},ru=class{constructor(e,t,i){let n=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&n.onStart!==void 0&&n.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,a),o===a&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],m=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null}}},a1=new ru,zn=class{constructor(e){this.manager=e!==void 0?e:a1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};zn.DEFAULT_MATERIAL_NAME="__DEFAULT";var Bi={},su=class extends Error{constructor(e,t){super(e),this.response=t}},Zn=class extends zn{constructor(e){super(e)}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=er.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Bi[e]!==void 0){Bi[e].push({onLoad:t,onProgress:i,onError:n});return}Bi[e]=[],Bi[e].push({onLoad:t,onProgress:i,onError:n});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Bi[e],u=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=f?parseInt(f):0,m=d!==0,p=0,A=new ReadableStream({start(g){v();function v(){u.read().then(({done:_,value:y})=>{if(_)g.close();else{p+=y.byteLength;let S=new ProgressEvent("progress",{lengthComputable:m,loaded:p,total:d});for(let C=0,E=h.length;C<E;C++){let b=h[C];b.onProgress&&b.onProgress(S)}g.enqueue(y),v()}})}}});return new Response(A)}else throw new su(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(m=>d.decode(m))}}}).then(c=>{er.add(e,c);let h=Bi[e];delete Bi[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{let h=Bi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Bi[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var ou=class extends zn{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=er.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Fo("img");function l(){h(),er.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),n&&n(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Wl=class extends zn{constructor(e){super(e)}load(e,t,i,n){let r=new kt,o=new ou(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,n),r}},qo=class extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};var Bh=new Ze,fp=new K,dp=new K,Yo=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qe(512,512),this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oo,this._frameExtents=new Qe(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;fp.setFromMatrixPosition(e.matrixWorld),t.position.copy(fp),dp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dp),t.updateMatrixWorld(),Bh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Bh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},au=class extends Yo{constructor(){super(new Ht(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=ks*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||n!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=n,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Kl=class extends qo{constructor(e,t,i=0,n=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.distance=i,this.angle=n,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new au}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ap=new Ze,Co=new K,Rh=new K,lu=class extends Yo{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Qe(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new K(1,0,0),new K(-1,0,0),new K(0,0,1),new K(0,0,-1),new K(0,1,0),new K(0,-1,0)],this._cubeUps=[new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,0,1),new K(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,n=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Co.setFromMatrixPosition(e.matrixWorld),i.position.copy(Co),Rh.copy(i.position),Rh.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Rh),i.updateMatrixWorld(),n.makeTranslation(-Co.x,-Co.y,-Co.z),Ap.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ap)}},Xl=class extends qo{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new lu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},cu=class extends Yo{constructor(){super(new ir(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ql=class extends qo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new cu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ar=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,n=e.length;i<n;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Yl=class extends bt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Jl=class extends zn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=er.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{n&&n(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return er.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){n&&n(c),er.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});er.add(e,l),r.manager.itemStart(e)}};var Vs=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=pp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=pp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function pp(){return(typeof performance>"u"?Date:performance).now()}var Eu="\\[\\]\\.:\\/",l1=new RegExp("["+Eu+"]","g"),Su="[^"+Eu+"]",c1="[^"+Eu.replace("\\.","")+"]",h1=/((?:WC+[\/:])*)/.source.replace("WC",Su),u1=/(WCOD+)?/.source.replace("WCOD",c1),f1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Su),d1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Su),A1=new RegExp("^"+h1+u1+f1+d1+"$"),p1=["material","materials","bones","map"],hu=class{constructor(e,t,i){let n=i||gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},gt=class s{constructor(e,t,i){this.path=t,this.parsedPath=i||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,i):new s(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(l1,"")}static parseTrackName(e){let t=A1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);p1.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[n];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};gt.Composite=hu;gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};gt.prototype.GetterByBindingType=[gt.prototype._getValue_direct,gt.prototype._getValue_array,gt.prototype._getValue_arrayElement,gt.prototype._getValue_toArray];gt.prototype.SetterByBindingTypeAndVersioning=[[gt.prototype._setValue_direct,gt.prototype._setValue_direct_setNeedsUpdate,gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_array,gt.prototype._setValue_array_setNeedsUpdate,gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_arrayElement,gt.prototype._setValue_arrayElement_setNeedsUpdate,gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_fromArray,gt.prototype._setValue_fromArray_setNeedsUpdate,gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var pM=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uu);var nc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Hn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},g1=new ir(-1,1,1,-1,0,1),Cu=class extends bt{constructor(){super(),this.setAttribute("position",new Dt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Dt([0,2,0,0,2,0],2))}},_1=new Cu,lr=class{constructor(e){this._mesh=new _t(_1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,g1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Xs=class extends Hn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof vt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=gi.clone(e.uniforms),this.material=new vt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new lr(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var $o=class extends Hn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let n=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}},ic=class extends Hn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var rc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new Qe);this._width=i.width,this._height=i.height,t=new gn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:on}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Xs(nc),this.copyPass.material.blending=di,this.clock=new Vs}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let n=0,r=this.passes.length;n<r;n++){let o=this.passes[n];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}$o!==void 0&&(o instanceof $o?i=!0:o instanceof ic&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Qe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var sc=class extends Hn{constructor(e,t,i=null,n=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Le}render(e,t,i){let n=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=n}};var kp={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Le(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var qs=class s extends Hn{constructor(e,t,i,n){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=n,this.resolution=e!==void 0?new Qe(e.x,e.y):new Qe(256,256),this.clearColor=new Le(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new gn(r,o,{type:on}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new gn(r,o,{type:on});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new gn(r,o,{type:on});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=kp;this.highPassUniforms=gi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new vt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Qe(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new K(1,1,1),new K(1,1,1),new K(1,1,1),new K(1,1,1),new K(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=nc;this.copyUniforms=gi.clone(h.uniforms),this.blendMaterial=new vt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Ur,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Le,this.oldClearAlpha=1,this.basic=new Rn,this.fsQuad=new lr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),n=Math.round(t/2);this.renderTargetBright.setSize(i,n);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,n),this.renderTargetsVertical[r].setSize(i,n),this.separableBlurMaterials[r].uniforms.invSize.value=new Qe(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(e,t,i,n,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new vt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Qe(.5,.5)},direction:{value:new Qe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new vt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};qs.BlurDirectionX=new Qe(1,0);qs.BlurDirectionY=new Qe(0,1);var Qp={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var oc=class extends Hn{constructor(){super();let e=Qp;this.uniforms=gi.clone(e.uniforms),this.material=new zl({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new lr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},st.getTransfer(this._outputColorSpace)===At&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===fu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===du?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Au?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Jo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===pu&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};function Mu(s,e){if(e===Mp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Zo||e===$l){let t=s.getIndex();if(t===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let i=t.count-2,n=[];if(e===Zo)for(let o=1;o<=i;o++)n.push(t.getX(0)),n.push(t.getX(o)),n.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(n.push(t.getX(o)),n.push(t.getX(o+1)),n.push(t.getX(o+2))):(n.push(t.getX(o+2)),n.push(t.getX(o+1)),n.push(t.getX(o)));n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(n),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var ac=class extends zn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Du(t)}),this.register(function(t){return new Gu(t)}),this.register(function(t){return new zu(t)}),this.register(function(t){return new Hu(t)}),this.register(function(t){return new Uu(t)}),this.register(function(t){return new Fu(t)}),this.register(function(t){return new Pu(t)}),this.register(function(t){return new Nu(t)}),this.register(function(t){return new Ru(t)}),this.register(function(t){return new Ou(t)}),this.register(function(t){return new Lu(t)}),this.register(function(t){return new Qu(t)}),this.register(function(t){return new ku(t)}),this.register(function(t){return new wu(t)}),this.register(function(t){return new Vu(t)}),this.register(function(t){return new Wu(t)})}load(e,t,i,n){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=ar.extractUrlBase(e);o=ar.resolveURL(c,this.path)}else o=ar.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){n?n(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Zn(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,n){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Wp){try{o[nt.KHR_BINARY_GLTF]=new Ku(e)}catch(u){n&&n(u);return}r=JSON.parse(o[nt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new $u(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case nt.KHR_MATERIALS_UNLIT:o[u]=new Bu;break;case nt.KHR_DRACO_MESH_COMPRESSION:o[u]=new Xu(r,this.dracoLoader);break;case nt.KHR_TEXTURE_TRANSFORM:o[u]=new qu;break;case nt.KHR_MESH_QUANTIZATION:o[u]=new Yu;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,n)}parseAsync(e,t){let i=this;return new Promise(function(n,r){i.parse(e,t,n,r)})}};function v1(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var nt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},wu=class{constructor(e){this.parser=e,this.name=nt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,n=t.length;i<n;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,n=t.cache.get(i);if(n)return n;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Le(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Ct);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ql(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Xl(h),c.distance=u;break;case"spot":c=new Kl(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,hr(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),n=Promise.resolve(c),t.cache.add(i,n),n}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}},Bu=class{constructor(){this.name=nt.KHR_MATERIALS_UNLIT}getMaterialType(){return Rn}extendParams(e,t,i){let n=[];e.color=new Le(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Ct),e.opacity=o[3]}r.baseColorTexture!==void 0&&n.push(i.assignTexture(e,"map",r.baseColorTexture,at))}return Promise.all(n)}},Ru=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let r=n.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Du=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){let i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let r=[],o=n.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Qe(a,a)}return Promise.all(r)}},Lu=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){let i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let r=[],o=n.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Uu=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SHEEN}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){let i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Le(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=n.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Ct)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,at)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Fu=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){let i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let r=[],o=n.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Pu=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_VOLUME}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){let i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let r=[],o=n.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Le().setRGB(a[0],a[1],a[2],Ct),Promise.all(r)}},Nu=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IOR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){let n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let r=n.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Ou=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){let i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let r=[],o=n.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Le().setRGB(a[0],a[1],a[2],Ct),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,at)),Promise.all(r)}},ku=class{constructor(e){this.parser=e,this.name=nt.EXT_MATERIALS_BUMP}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){let i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let r=[],o=n.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Qu=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){let i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let r=[],o=n.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Gu=class{constructor(e){this.parser=e,this.name=nt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,n=i.textures[e];if(!n.extensions||!n.extensions[this.name])return null;let r=n.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},zu=class{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=n.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Hu=class{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=n.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Vu=class{constructor(e){this.name=nt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let n=i.extensions[this.name],r=this.parser.getDependency("buffer",n.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=n.byteOffset||0,c=n.byteLength||0,h=n.count,u=n.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,n.mode,n.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,n.mode,n.filter),d})})}else return null}},Wu=class{constructor(e){this.name=nt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let n=t.meshes[i.mesh];for(let c of n.primitives)if(c.mode!==jn.TRIANGLES&&c.mode!==jn.TRIANGLE_STRIP&&c.mode!==jn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=i.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(let m of u){let p=new Ze,A=new K,g=new ui,v=new K(1,1,1),_=new Ul(m.geometry,m.material,f);for(let y=0;y<f;y++)l.TRANSLATION&&A.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,y),l.SCALE&&v.fromBufferAttribute(l.SCALE,y),_.setMatrixAt(y,p.compose(A,g,v));for(let y in l)if(y==="_COLOR_0"){let S=l[y];_.instanceColor=new Fi(S.array,S.itemSize,S.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&m.geometry.setAttribute(y,l[y]);It.prototype.copy.call(_,m),this.parser.assignFinalMaterial(_),d.push(_)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},Wp="glTF",ea=12,Gp={JSON:1313821514,BIN:5130562},Ku=class{constructor(e){this.name=nt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ea),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Wp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let n=this.header.length-ea,r=new DataView(e,ea),o=0;for(;o<n;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===Gp.JSON){let c=new Uint8Array(e,ea+o,a);this.content=i.decode(c)}else if(l===Gp.BIN){let c=ea+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Xu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=nt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,n=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=Zu[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Zu[h]||h.toLowerCase();if(o[h]!==void 0){let f=i.accessors[e.attributes[h]],d=Ys[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){n.decodeDracoFile(h,function(d){for(let m in d.attributes){let p=d.attributes[m],A=l[m];A!==void 0&&(p.normalized=A)}u(d)},a,c,Ct,f)})})}},qu=class{constructor(){this.name=nt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Yu=class{constructor(){this.name=nt.KHR_MESH_QUANTIZATION}},lc=class extends rr{constructor(e,t,i,n){super(e,t,i,n)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n*3+n;for(let o=0;o!==n;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=n-t,u=(i-t)/h,f=u*u,d=f*u,m=e*c,p=m-c,A=-2*d+3*f,g=d-f,v=1-A,_=g-f+u;for(let y=0;y!==a;y++){let S=o[p+y+a],C=o[p+y+l]*h,E=o[m+y+a],b=o[m+y]*h;r[y]=v*S+_*C+A*E+g*b}return r}},y1=new ui,Ju=class extends lc{interpolate_(e,t,i,n){let r=super.interpolate_(e,t,i,n);return y1.fromArray(r).normalize().toArray(r),r}},jn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ys={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},zp={9728:zt,9729:Et,9984:ll,9985:mu,9986:Mo,9987:pi},Hp={33071:wn,33648:Lo,10497:Pr},Tu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Zu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},cr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},x1={CUBICSPLINE:void 0,LINEAR:Nr,STEP:Os},Iu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function E1(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Qr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ai})),s.DefaultMaterial}function Hr(s,e,t){for(let i in t.extensions)s[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function hr(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function S1(s,e,t){let i=!1,n=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(n=!0),u.COLOR_0!==void 0&&(r=!0),i&&n&&r)break}if(!i&&!n&&!r)return Promise.resolve(s);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(i){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(f)}if(n){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],f=c[2];return i&&(s.morphAttributes.position=h),n&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function C1(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let i=0,n=t.length;i<n;i++)s.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function M1(s){let e,t=s.extensions&&s.extensions[nt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+bu(t.attributes):e=s.indices+":"+bu(s.attributes)+":"+s.mode,s.targets!==void 0)for(let i=0,n=s.targets.length;i<n;i++)e+=":"+bu(s.targets[i]);return e}function bu(s){let e="",t=Object.keys(s).sort();for(let i=0,n=t.length;i<n;i++)e+=t[i]+":"+s[t[i]]+";";return e}function ju(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function T1(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var I1=new Ze,$u=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new v1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=!1,r=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,n=navigator.userAgent.indexOf("Firefox")>-1,r=n?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||n&&r<98?this.textureLoader=new Wl(this.options.manager):this.textureLoader=new Jl(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Zn(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,n=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){let a={scene:o[0][n.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:n.asset,parser:i,userData:{}};return Hr(r,a,n),hr(a,n),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){let o=t[n].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let n=0,r=e.length;n<r;n++){let o=e[n];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let n=i.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(i,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let n=e(t[i]);if(n)return n}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let n=0;n<t.length;n++){let r=e(t[n]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,n=this.cache.get(i);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":n=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e);break}this.cache.add(i,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[nt.KHR_BINARY_GLTF].body);let n=this.options;return new Promise(function(r,o){i.load(ar.resolveURL(t.uri,n.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let n=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+n)})}loadAccessor(e){let t=this,i=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){let o=Tu[n.type],a=Ys[n.componentType],l=n.normalized===!0,c=new a(n.count*o);return Promise.resolve(new ct(c,o,l))}let r=[];return n.bufferView!==void 0?r.push(this.getDependency("bufferView",n.bufferView)):r.push(null),n.sparse!==void 0&&(r.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Tu[n.type],c=Ys[n.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=n.byteOffset||0,d=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,m=n.normalized===!0,p,A;if(d&&d!==u){let g=Math.floor(f/d),v="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+g+":"+n.count,_=t.cache.get(v);_||(p=new c(a,g*d,n.count*d/h),_=new zo(p,d/h),t.cache.add(v,_)),A=new Ho(_,l,f%d/h,m)}else a===null?p=new c(n.count*l):p=new c(a,f,n.count*l),A=new ct(p,l,m);if(n.sparse!==void 0){let g=Tu.SCALAR,v=Ys[n.sparse.indices.componentType],_=n.sparse.indices.byteOffset||0,y=n.sparse.values.byteOffset||0,S=new v(o[1],_,n.sparse.count*g),C=new c(o[2],y,n.sparse.count*l);a!==null&&(A=new ct(A.array.slice(),A.itemSize,A.normalized));for(let E=0,b=S.length;E<b;E++){let x=S[E];if(A.setX(x,C[E*l]),l>=2&&A.setY(x,C[E*l+1]),l>=3&&A.setZ(x,C[E*l+2]),l>=4&&A.setW(x,C[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return A})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){let n=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=zp[f.magFilter]||Et,h.minFilter=zp[f.minFilter]||pi,h.wrapS=Hp[f.wrapS]||Pr,h.wrapT=Hp[f.wrapT]||Pr,n.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let i=this,n=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=n.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(u){c=!0;let f=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(f,d){let m=f;t.isImageBitmapLoader===!0&&(m=function(p){let A=new kt(p);A.needsUpdate=!0,f(A)}),t.load(ar.resolveURL(u,r.path),m,void 0,d)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),u.userData.mimeType=o.mimeType||T1(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,n){let r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[nt.KHR_TEXTURE_TRANSFORM]){let a=i.extensions!==void 0?i.extensions[nt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[nt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return n!==void 0&&(o.colorSpace=n),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,i=e.material,n=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new Ko,Gn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){let a="LineBasicMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new Wo,Gn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(n||r||o){let a="ClonedMaterial:"+i.uuid+":";n&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),n&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Qr}loadMaterial(e){let t=this,i=this.json,n=this.extensions,r=i.materials[e],o,a={},l=r.extensions||{},c=[];if(l[nt.KHR_MATERIALS_UNLIT]){let u=n[nt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Le(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Ct),a.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,at)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=bn);let h=r.alphaMode||Iu.OPAQUE;if(h===Iu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Iu.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Rn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Qe(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Rn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Rn){let u=r.emissiveFactor;a.emissive=new Le().setRGB(u[0],u[1],u[2],Ct)}return r.emissiveTexture!==void 0&&o!==Rn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,at)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),hr(u,r),t.associations.set(u,{materials:e}),r.extensions&&Hr(n,u,r),u})}createUniqueName(e){let t=gt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,n=this.primitiveCache;function r(a){return i[nt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Vp(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=M1(c),u=n[h];if(u)o.push(u.promise);else{let f;c.extensions&&c.extensions[nt.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Vp(new bt,c,t),n[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,i=this.json,n=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?E1(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,m=h.length;d<m;d++){let p=h[d],A=o[d],g,v=c[d];if(A.mode===jn.TRIANGLES||A.mode===jn.TRIANGLE_STRIP||A.mode===jn.TRIANGLE_FAN||A.mode===void 0)g=r.isSkinnedMesh===!0?new Dl(p,v):new _t(p,v),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),A.mode===jn.TRIANGLE_STRIP?g.geometry=Mu(g.geometry,$l):A.mode===jn.TRIANGLE_FAN&&(g.geometry=Mu(g.geometry,Zo));else if(A.mode===jn.LINES)g=new Fl(p,v);else if(A.mode===jn.LINE_STRIP)g=new Hs(p,v);else if(A.mode===jn.LINE_LOOP)g=new Pl(p,v);else if(A.mode===jn.POINTS)g=new Or(p,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+A.mode);Object.keys(g.geometry.morphAttributes).length>0&&C1(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),hr(g,r),A.extensions&&Hr(n,g,A),t.assignFinalMaterial(g),u.push(g)}for(let d=0,m=u.length;d<m;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&Hr(n,u[0],r),u[0];let f=new qn;r.extensions&&Hr(n,f,r),t.associations.set(f,{meshes:e});for(let d=0,m=u.length;d<m;d++)f.add(u[d]);return f})}loadCamera(e){let t,i=this.json.cameras[e],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Ht(ec.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(t=new ir(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),hr(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let n=0,r=t.joints.length;n<r;n++)i.push(this._loadNodeShallow(t.joints[n]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){let r=n.pop(),o=n,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let f=new Ze;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ll(a,l)})}loadAnimation(e){let t=this.json,i=this,n=t.animations[e],r=n.name?n.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,f=n.channels.length;u<f;u++){let d=n.channels[u],m=n.samplers[d.sampler],p=d.target,A=p.node,g=n.parameters!==void 0?n.parameters[m.input]:m.input,v=n.parameters!==void 0?n.parameters[m.output]:m.output;p.node!==void 0&&(o.push(this.getDependency("node",A)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",v)),c.push(m),h.push(p))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],m=u[2],p=u[3],A=u[4],g=[];for(let v=0,_=f.length;v<_;v++){let y=f[v],S=d[v],C=m[v],E=p[v],b=A[v];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let x=i._createAnimationTracks(y,S,C,E,b);if(x)for(let M=0;M<x.length;M++)g.push(x[M])}return new Vl(r,void 0,g)})}createNodeMesh(e){let t=this.json,i=this,n=t.nodes[e];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(r){let o=i._getNodeRef(i.meshCache,n.mesh,r);return n.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=n.weights.length;l<c;l++)a.morphTargetInfluences[l]=n.weights[l]}),o})}loadNode(e){let t=this.json,i=this,n=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=n.children||[];for(let c=0,h=a.length;c<h;c++)o.push(i.getDependency("node",a[c]));let l=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,I1)});for(let d=0,m=u.length;d<m;d++)h.add(u[d]);return h})}_loadNodeShallow(e){let t=this.json,i=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?n.createUniqueName(r.name):"",a=[],l=n._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(n.getDependency("camera",r.camera).then(function(c){return n._getNodeRef(n.cameraCache,r.camera,c)})),n._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Vo:c.length>1?h=new qn:c.length===1?h=c[0]:h=new It,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),hr(h,r),r.extensions&&Hr(i,h,r),r.matrix!==void 0){let u=new Ze;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return n.associations.has(h)||n.associations.set(h,{}),n.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],n=this,r=new qn;i.name&&(r.name=n.createUniqueName(i.name)),hr(r,i),i.extensions&&Hr(t,r,i);let o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(n.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);let c=h=>{let u=new Map;for(let[f,d]of n.associations)(f instanceof Gn||f instanceof kt)&&u.set(f,d);return h.traverse(f=>{let d=n.associations.get(f);d!=null&&u.set(f,d)}),u};return n.associations=c(r),r})}_createAnimationTracks(e,t,i,n,r){let o=[],a=e.name?e.name:e.uuid,l=[];cr[r.path]===cr.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(cr[r.path]){case cr.weights:c=Pi;break;case cr.rotation:c=mi;break;case cr.position:case cr.scale:c=Ni;break;default:switch(i.itemSize){case 1:c=Pi;break;case 2:case 3:default:c=Ni;break}break}let h=n.interpolation!==void 0?x1[n.interpolation]:Nr,u=this._getArrayFromAccessor(i);for(let f=0,d=l.length;f<d;f++){let m=new c(l[f]+"."+cr[r.path],t.array,u,h);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=ju(t.constructor),n=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)n[r]=t[r]*i;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let n=this instanceof mi?Ju:lc;return new n(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function b1(s,e,t){let i=e.attributes,n=new _n;if(i.POSITION!==void 0){let a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(n.set(new K(l[0],l[1],l[2]),new K(c[0],c[1],c[2])),a.normalized){let h=ju(Ys[a.componentType]);n.min.multiplyScalar(h),n.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new K,l=new K;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,m=f.max;if(d!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),f.normalized){let p=ju(Ys[f.componentType]);l.multiplyScalar(p)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(a)}s.boundingBox=n;let o=new vn;n.getCenter(o.center),o.radius=n.min.distanceTo(n.max)/2,s.boundingSphere=o}function Vp(s,e,t){let i=e.attributes,n=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(let o in i){let a=Zu[o]||o.toLowerCase();a in s.attributes||n.push(r(i[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});n.push(o)}return st.workingColorSpace!==Ct&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${st.workingColorSpace}" not supported.`),hr(s,e),b1(s,e,t),Promise.all(n).then(function(){return e.targets!==void 0?S1(s,e.targets,t):s})}var ef=new WeakMap,cc=class extends zn{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,i,n){let r=new Zn(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,n)},i,n)}parse(e,t,i=()=>{}){this.decodeDracoFile(e,t,null,null,at).catch(i)}decodeDracoFile(e,t,i,n,r=Ct,o=()=>{}){let a={attributeIDs:i||this.defaultAttributeIDs,attributeTypes:n||this.defaultAttributeTypes,useUniqueIDs:!!i,vertexColorSpace:r};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){let i=JSON.stringify(t);if(ef.has(e)){let l=ef.get(e);if(l.key===i)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let n,r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(l=>(n=l,new Promise((c,h)=>{n._callbacks[r]={resolve:c,reject:h},n.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{n&&r&&this._releaseTask(n,r)}),ef.set(e,{key:i,promise:a}),a}_createGeometry(e){let t=new bt;e.index&&t.setIndex(new ct(e.index.array,1));for(let i=0;i<e.attributes.length;i++){let n=e.attributes[i],r=n.name,o=n.array,a=n.itemSize,l=new ct(o,a);r==="color"&&(this._assignVertexColorSpace(l,n.vertexColorSpace),l.normalized=!(o instanceof Float32Array)),t.setAttribute(r,l)}return t}_assignVertexColorSpace(e,t){if(t!==at)return;let i=new Le;for(let n=0,r=e.count;n<r;n++)i.fromBufferAttribute(e,n).convertSRGBToLinear(),e.setXYZ(n,i.r,i.g,i.b)}_loadLibrary(e,t){let i=new Zn(this.manager);return i.setPath(this.decoderPath),i.setResponseType(t),i.setWithCredentials(this.withCredentials),new Promise((n,r)=>{i.load(e,n,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;let e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(i=>{let n=i[0];e||(this.decoderConfig.wasmBinary=i[1]);let r=w1.toString(),o=["/* draco decoder */",n,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){let n=new Worker(this.workerSourceURL);n._callbacks={},n._taskCosts={},n._taskLoad=0,n.postMessage({type:"init",decoderConfig:this.decoderConfig}),n.onmessage=function(r){let o=r.data;switch(o.type){case"decode":n._callbacks[o.id].resolve(o);break;case"error":n._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(n)}else this.workerPool.sort(function(n,r){return n._taskLoad>r._taskLoad?-1:1});let i=this.workerPool[this.workerPool.length-1];return i._taskCosts[e]=t,i._taskLoad+=t,i})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}};function w1(){let s,e;onmessage=function(o){let a=o.data;switch(a.type){case"init":s=a.decoderConfig,e=new Promise(function(h){s.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(s)});break;case"decode":let l=a.buffer,c=a.taskConfig;e.then(h=>{let u=h.draco,f=new u.Decoder;try{let d=t(u,f,new Int8Array(l),c),m=d.attributes.map(p=>p.array.buffer);d.index&&m.push(d.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:d},m)}catch(d){console.error(d),self.postMessage({type:"error",id:a.id,error:d.message})}finally{u.destroy(f)}});break}};function t(o,a,l,c){let h=c.attributeIDs,u=c.attributeTypes,f,d,m=a.GetEncodedGeometryType(l);if(m===o.TRIANGULAR_MESH)f=new o.Mesh,d=a.DecodeArrayToMesh(l,l.byteLength,f);else if(m===o.POINT_CLOUD)f=new o.PointCloud,d=a.DecodeArrayToPointCloud(l,l.byteLength,f);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!d.ok()||f.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+d.error_msg());let p={index:null,attributes:[]};for(let A in h){let g=self[u[A]],v,_;if(c.useUniqueIDs)_=h[A],v=a.GetAttributeByUniqueId(f,_);else{if(_=a.GetAttributeId(f,o[h[A]]),_===-1)continue;v=a.GetAttribute(f,_)}let y=n(o,a,f,A,g,v);A==="color"&&(y.vertexColorSpace=c.vertexColorSpace),p.attributes.push(y)}return m===o.TRIANGULAR_MESH&&(p.index=i(o,a,f)),o.destroy(f),p}function i(o,a,l){let h=l.num_faces()*3,u=h*4,f=o._malloc(u);a.GetTrianglesUInt32Array(l,u,f);let d=new Uint32Array(o.HEAPF32.buffer,f,h).slice();return o._free(f),{array:d,itemSize:1}}function n(o,a,l,c,h,u){let f=u.num_components(),m=l.num_points()*f,p=m*h.BYTES_PER_ELEMENT,A=r(o,h),g=o._malloc(p);a.GetAttributeDataArrayForAllPoints(l,u,A,p,g);let v=new h(o.HEAPF32.buffer,g,m).slice();return o._free(g),{name:c,array:v,itemSize:f}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}var hc=class{constructor(e=4){this.pool=e,this.queue=[],this.workers=[],this.workersResolve=[],this.workerStatus=0}_initWorker(e){if(!this.workers[e]){let t=this.workerCreator();t.addEventListener("message",this._onMessage.bind(this,e)),this.workers[e]=t}}_getIdleWorker(){for(let e=0;e<this.pool;e++)if(!(this.workerStatus&1<<e))return e;return-1}_onMessage(e,t){let i=this.workersResolve[e];if(i&&i(t),this.queue.length){let{resolve:n,msg:r,transfer:o}=this.queue.shift();this.workersResolve[e]=n,this.workers[e].postMessage(r,o)}else this.workerStatus^=1<<e}setWorkerCreator(e){this.workerCreator=e}setWorkerLimit(e){this.pool=e}postMessage(e,t){return new Promise(i=>{let n=this._getIdleWorker();n!==-1?(this._initWorker(n),this.workerStatus|=1<<n,this.workersResolve[n]=i,this.workers[n].postMessage(e,t)):this.queue.push({resolve:i,msg:e,transfer:t})})}dispose(){this.workers.forEach(e=>e.terminate()),this.workersResolve.length=0,this.workers.length=0,this.queue.length=0,this.workerStatus=0}};var tf=class{constructor(){this.vkFormat=0,this.typeSize=1,this.pixelWidth=0,this.pixelHeight=0,this.pixelDepth=0,this.layerCount=0,this.faceCount=1,this.supercompressionScheme=0,this.levels=[],this.dataFormatDescriptor=[{vendorId:0,descriptorType:0,descriptorBlockSize:0,versionNumber:2,colorModel:0,colorPrimaries:1,transferFunction:2,flags:0,texelBlockDimension:[0,0,0,0],bytesPlane:[0,0,0,0,0,0,0,0],samples:[]}],this.keyValue={},this.globalData=null}},Vr=class{constructor(e,t,i,n){this._dataView=new DataView(e.buffer,e.byteOffset+t,i),this._littleEndian=n,this._offset=0}_nextUint8(){let e=this._dataView.getUint8(this._offset);return this._offset+=1,e}_nextUint16(){let e=this._dataView.getUint16(this._offset,this._littleEndian);return this._offset+=2,e}_nextUint32(){let e=this._dataView.getUint32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint64(){let e=this._dataView.getUint32(this._offset,this._littleEndian)+4294967296*this._dataView.getUint32(this._offset+4,this._littleEndian);return this._offset+=8,e}_nextInt32(){let e=this._dataView.getInt32(this._offset,this._littleEndian);return this._offset+=4,e}_skip(e){return this._offset+=e,this}_scan(e,t=0){let i=this._offset,n=0;for(;this._dataView.getUint8(this._offset)!==t&&n<e;)n++,this._offset++;return n<e&&this._offset++,new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+i,n)}},$M=new Uint8Array([0]),yn=[171,75,84,88,32,50,48,187,13,10,26,10];function Kp(s){return typeof TextDecoder<"u"?new TextDecoder().decode(s):Buffer.from(s).toString("utf8")}function Xp(s){let e=new Uint8Array(s.buffer,s.byteOffset,yn.length);if(e[0]!==yn[0]||e[1]!==yn[1]||e[2]!==yn[2]||e[3]!==yn[3]||e[4]!==yn[4]||e[5]!==yn[5]||e[6]!==yn[6]||e[7]!==yn[7]||e[8]!==yn[8]||e[9]!==yn[9]||e[10]!==yn[10]||e[11]!==yn[11])throw new Error("Missing KTX 2.0 identifier.");let t=new tf,i=17*Uint32Array.BYTES_PER_ELEMENT,n=new Vr(s,yn.length,i,!0);t.vkFormat=n._nextUint32(),t.typeSize=n._nextUint32(),t.pixelWidth=n._nextUint32(),t.pixelHeight=n._nextUint32(),t.pixelDepth=n._nextUint32(),t.layerCount=n._nextUint32(),t.faceCount=n._nextUint32();let r=n._nextUint32();t.supercompressionScheme=n._nextUint32();let o=n._nextUint32(),a=n._nextUint32(),l=n._nextUint32(),c=n._nextUint32(),h=n._nextUint64(),u=n._nextUint64(),f=new Vr(s,yn.length+i,3*r*8,!0);for(let X=0;X<r;X++)t.levels.push({levelData:new Uint8Array(s.buffer,s.byteOffset+f._nextUint64(),f._nextUint64()),uncompressedByteLength:f._nextUint64()});let d=new Vr(s,o,a,!0),m={vendorId:d._skip(4)._nextUint16(),descriptorType:d._nextUint16(),versionNumber:d._nextUint16(),descriptorBlockSize:d._nextUint16(),colorModel:d._nextUint8(),colorPrimaries:d._nextUint8(),transferFunction:d._nextUint8(),flags:d._nextUint8(),texelBlockDimension:[d._nextUint8(),d._nextUint8(),d._nextUint8(),d._nextUint8()],bytesPlane:[d._nextUint8(),d._nextUint8(),d._nextUint8(),d._nextUint8(),d._nextUint8(),d._nextUint8(),d._nextUint8(),d._nextUint8()],samples:[]},p=(m.descriptorBlockSize/4-6)/4;for(let X=0;X<p;X++){let q={bitOffset:d._nextUint16(),bitLength:d._nextUint8(),channelType:d._nextUint8(),samplePosition:[d._nextUint8(),d._nextUint8(),d._nextUint8(),d._nextUint8()],sampleLower:-1/0,sampleUpper:1/0};64&q.channelType?(q.sampleLower=d._nextInt32(),q.sampleUpper=d._nextInt32()):(q.sampleLower=d._nextUint32(),q.sampleUpper=d._nextUint32()),m.samples[X]=q}t.dataFormatDescriptor.length=0,t.dataFormatDescriptor.push(m);let A=new Vr(s,l,c,!0);for(;A._offset<c;){let X=A._nextUint32(),q=A._scan(X),Q=Kp(q),V=A._scan(X-q.byteLength);t.keyValue[Q]=Q.match(/^ktx/i)?Kp(V):V,A._offset%4&&A._skip(4-A._offset%4)}if(u<=0)return t;let g=new Vr(s,h,u,!0),v=g._nextUint16(),_=g._nextUint16(),y=g._nextUint32(),S=g._nextUint32(),C=g._nextUint32(),E=g._nextUint32(),b=[];for(let X=0;X<r;X++)b.push({imageFlags:g._nextUint32(),rgbSliceByteOffset:g._nextUint32(),rgbSliceByteLength:g._nextUint32(),alphaSliceByteOffset:g._nextUint32(),alphaSliceByteLength:g._nextUint32()});let x=h+g._offset,M=x+y,N=M+S,R=N+C,z=new Uint8Array(s.buffer,s.byteOffset+x,y),I=new Uint8Array(s.buffer,s.byteOffset+M,S),U=new Uint8Array(s.buffer,s.byteOffset+N,C),P=new Uint8Array(s.buffer,s.byteOffset+R,E);return t.globalData={endpointCount:v,selectorCount:_,imageDescs:b,endpointsData:z,selectorsData:I,tablesData:U,extendedData:P},t}var nf,Oi,sf,rf={env:{emscripten_notify_memory_growth:function(s){sf=new Uint8Array(Oi.exports.memory.buffer)}}},uc=class{init(){return nf||(nf=typeof fetch<"u"?fetch("data:application/wasm;base64,"+qp).then(e=>e.arrayBuffer()).then(e=>WebAssembly.instantiate(e,rf)).then(this._init):WebAssembly.instantiate(Buffer.from(qp,"base64"),rf).then(this._init),nf)}_init(e){Oi=e.instance,rf.env.emscripten_notify_memory_growth(0)}decode(e,t=0){if(!Oi)throw new Error("ZSTDDecoder: Await .init() before decoding.");let i=e.byteLength,n=Oi.exports.malloc(i);sf.set(e,n),t=t||Number(Oi.exports.ZSTD_findDecompressedSize(n,i));let r=Oi.exports.malloc(t),o=Oi.exports.ZSTD_decompress(r,t,n,i),a=sf.slice(r,r+o);return Oi.exports.free(n),Oi.exports.free(r),a}},qp="AGFzbQEAAAABpQEVYAF/AX9gAn9/AGADf39/AX9gBX9/f39/AX9gAX8AYAJ/fwF/YAR/f39/AX9gA39/fwBgBn9/f39/fwF/YAd/f39/f39/AX9gAn9/AX5gAn5+AX5gAABgBX9/f39/AGAGf39/f39/AGAIf39/f39/f38AYAl/f39/f39/f38AYAABf2AIf39/f39/f38Bf2ANf39/f39/f39/f39/fwF/YAF/AX4CJwEDZW52H2Vtc2NyaXB0ZW5fbm90aWZ5X21lbW9yeV9ncm93dGgABANpaAEFAAAFAgEFCwACAQABAgIFBQcAAwABDgsBAQcAEhMHAAUBDAQEAAANBwQCAgYCBAgDAwMDBgEACQkHBgICAAYGAgQUBwYGAwIGAAMCAQgBBwUGCgoEEQAEBAEIAwgDBQgDEA8IAAcABAUBcAECAgUEAQCAAgYJAX8BQaCgwAILB2AHBm1lbW9yeQIABm1hbGxvYwAoBGZyZWUAJgxaU1REX2lzRXJyb3IAaBlaU1REX2ZpbmREZWNvbXByZXNzZWRTaXplAFQPWlNURF9kZWNvbXByZXNzAEoGX3N0YXJ0ACQJBwEAQQELASQKussBaA8AIAAgACgCBCABajYCBAsZACAAKAIAIAAoAgRBH3F0QQAgAWtBH3F2CwgAIABBiH9LC34BBH9BAyEBIAAoAgQiA0EgTQRAIAAoAggiASAAKAIQTwRAIAAQDQ8LIAAoAgwiAiABRgRAQQFBAiADQSBJGw8LIAAgASABIAJrIANBA3YiBCABIARrIAJJIgEbIgJrIgQ2AgggACADIAJBA3RrNgIEIAAgBCgAADYCAAsgAQsUAQF/IAAgARACIQIgACABEAEgAgv3AQECfyACRQRAIABCADcCACAAQQA2AhAgAEIANwIIQbh/DwsgACABNgIMIAAgAUEEajYCECACQQRPBEAgACABIAJqIgFBfGoiAzYCCCAAIAMoAAA2AgAgAUF/ai0AACIBBEAgAEEIIAEQFGs2AgQgAg8LIABBADYCBEF/DwsgACABNgIIIAAgAS0AACIDNgIAIAJBfmoiBEEBTQRAIARBAWtFBEAgACABLQACQRB0IANyIgM2AgALIAAgAS0AAUEIdCADajYCAAsgASACakF/ai0AACIBRQRAIABBADYCBEFsDwsgAEEoIAEQFCACQQN0ams2AgQgAgsWACAAIAEpAAA3AAAgACABKQAINwAICy8BAX8gAUECdEGgHWooAgAgACgCAEEgIAEgACgCBGprQR9xdnEhAiAAIAEQASACCyEAIAFCz9bTvtLHq9lCfiAAfEIfiUKHla+vmLbem55/fgsdAQF/IAAoAgggACgCDEYEfyAAKAIEQSBGBUEACwuCBAEDfyACQYDAAE8EQCAAIAEgAhBnIAAPCyAAIAJqIQMCQCAAIAFzQQNxRQRAAkAgAkEBSARAIAAhAgwBCyAAQQNxRQRAIAAhAgwBCyAAIQIDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADTw0BIAJBA3ENAAsLAkAgA0F8cSIEQcAASQ0AIAIgBEFAaiIFSw0AA0AgAiABKAIANgIAIAIgASgCBDYCBCACIAEoAgg2AgggAiABKAIMNgIMIAIgASgCEDYCECACIAEoAhQ2AhQgAiABKAIYNgIYIAIgASgCHDYCHCACIAEoAiA2AiAgAiABKAIkNgIkIAIgASgCKDYCKCACIAEoAiw2AiwgAiABKAIwNgIwIAIgASgCNDYCNCACIAEoAjg2AjggAiABKAI8NgI8IAFBQGshASACQUBrIgIgBU0NAAsLIAIgBE8NAQNAIAIgASgCADYCACABQQRqIQEgAkEEaiICIARJDQALDAELIANBBEkEQCAAIQIMAQsgA0F8aiIEIABJBEAgACECDAELIAAhAgNAIAIgAS0AADoAACACIAEtAAE6AAEgAiABLQACOgACIAIgAS0AAzoAAyABQQRqIQEgAkEEaiICIARNDQALCyACIANJBEADQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADRw0ACwsgAAsMACAAIAEpAAA3AAALQQECfyAAKAIIIgEgACgCEEkEQEEDDwsgACAAKAIEIgJBB3E2AgQgACABIAJBA3ZrIgE2AgggACABKAAANgIAQQALDAAgACABKAIANgAAC/cCAQJ/AkAgACABRg0AAkAgASACaiAASwRAIAAgAmoiBCABSw0BCyAAIAEgAhALDwsgACABc0EDcSEDAkACQCAAIAFJBEAgAwRAIAAhAwwDCyAAQQNxRQRAIAAhAwwCCyAAIQMDQCACRQ0EIAMgAS0AADoAACABQQFqIQEgAkF/aiECIANBAWoiA0EDcQ0ACwwBCwJAIAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQhBSAGQQR2IQRBICAAdCIAQQFyIQkgASgCACEPQQAhAiADIQYCQANAIAlBAkggAiAPS3JFBEAgAiEHAkAgCARAA0AgBEH//wNxQf//A0YEQCAHQRhqIQcgBiAQSQR/IAZBAmoiBigAACAFdgUgBUEQaiEFIARBEHYLIQQMAQsLA0AgBEEDcSIIQQNGBEAgBUECaiEFIARBAnYhBCAHQQNqIQcMAQsLIAcgCGoiByAPSw0EIAVBAmohBQNAIAIgB0kEQCANIAJBAXRqQQA7AQAgAkEBaiECDAELCyAGIA5LQQAgBiAFQQN1aiIHIAxLG0UEQCAHKAAAIAVBB3EiBXYhBAwCCyAEQQJ2IQQLIAYhBwsCfyALQX9qIAQgAEF/anEiBiAAQQF0QX9qIgggCWsiEUkNABogBCAIcSIEQQAgESAEIABIG2shBiALCyEIIA0gAkEBdGogBkF/aiIEOwEAIAlBASAGayAEIAZBAUgbayEJA0AgCSAASARAIABBAXUhACALQX9qIQsMAQsLAn8gByAOS0EAIAcgBSAIaiIFQQN1aiIGIAxLG0UEQCAFQQdxDAELIAUgDCIGIAdrQQN0awshBSACQQFqIQIgBEUhCCAGKAAAIAVBH3F2IQQMAQsLQWwgCUEBRyAFQSBKcg0BGiABIAJBf2o2AgAgBiAFQQdqQQN1aiADawwBC0FQCyEAIApBEGokACAACwkAQQFBBSAAGwsMACAAIAEoAAA2AAALqgMBCn8jAEHwAGsiCiQAIAJBAWohDiAAQQhqIQtBgIAEIAVBf2p0QRB1IQxBACECQQEhBkEBIAV0IglBf2oiDyEIA0AgAiAORkUEQAJAIAEgAkEBdCINai8BACIHQf//A0YEQCALIAhBA3RqIAI2AgQgCEF/aiEIQQEhBwwBCyAGQQAgDCAHQRB0QRB1ShshBgsgCiANaiAHOwEAIAJBAWohAgwBCwsgACAFNgIEIAAgBjYCACAJQQN2IAlBAXZqQQNqIQxBACEAQQAhBkEAIQIDQCAGIA5GBEADQAJAIAAgCUYNACAKIAsgAEEDdGoiASgCBCIGQQF0aiICIAIvAQAiAkEBajsBACABIAUgAhAUayIIOgADIAEgAiAIQf8BcXQgCWs7AQAgASAEIAZBAnQiAmooAgA6AAIgASACIANqKAIANgIEIABBAWohAAwBCwsFIAEgBkEBdGouAQAhDUEAIQcDQCAHIA1ORQRAIAsgAkEDdGogBjYCBANAIAIgDGogD3EiAiAISw0ACyAHQQFqIQcMAQsLIAZBAWohBgwBCwsgCkHwAGokAAsjAEIAIAEQCSAAhUKHla+vmLbem55/fkLj3MqV/M7y9YV/fAsQACAAQn43AwggACABNgIACyQBAX8gAARAIAEoAgQiAgRAIAEoAgggACACEQEADwsgABAmCwsfACAAIAEgAi8BABAINgIAIAEQBBogACACQQRqNgIEC0oBAX9BoCAoAgAiASAAaiIAQX9MBEBBiCBBMDYCAEF/DwsCQCAAPwBBEHRNDQAgABBmDQBBiCBBMDYCAEF/DwtBoCAgADYCACABC9cBAQh/Qbp/IQoCQCACKAIEIgggAigCACIJaiIOIAEgAGtLDQBBbCEKIAkgBCADKAIAIgtrSw0AIAAgCWoiBCACKAIIIgxrIQ0gACABQWBqIg8gCyAJQQAQKSADIAkgC2o2AgACQAJAIAwgBCAFa00EQCANIQUMAQsgDCAEIAZrSw0CIAcgDSAFayIAaiIBIAhqIAdNBEAgBCABIAgQDxoMAgsgBCABQQAgAGsQDyEBIAIgACAIaiIINgIEIAEgAGshBAsgBCAPIAUgCEEBECkLIA4hCgsgCgubAgEBfyMAQYABayINJAAgDSADNgJ8AkAgAkEDSwRAQX8hCQwBCwJAAkACQAJAIAJBAWsOAwADAgELIAZFBEBBuH8hCQwEC0FsIQkgBS0AACICIANLDQMgACAHIAJBAnQiAmooAgAgAiAIaigCABA7IAEgADYCAEEBIQkMAwsgASAJNgIAQQAhCQwCCyAKRQRAQWwhCQwCC0EAIQkgC0UgDEEZSHINAUEIIAR0QQhqIQBBACECA0AgAiAATw0CIAJBQGshAgwAAAsAC0FsIQkgDSANQfwAaiANQfgAaiAFIAYQFSICEAMNACANKAJ4IgMgBEsNACAAIA0gDSgCfCAHIAggAxAYIAEgADYCACACIQkLIA1BgAFqJAAgCQsLACAAIAEgAhALGgsQACAALwAAIAAtAAJBEHRyCy8AAn9BuH8gAUEISQ0AGkFyIAAoAAQiAEF3Sw0AGkG4fyAAQQhqIgAgACABSxsLCwkAIAAgATsAAAsDAAELigYBBX8gACAAKAIAIgVBfnE2AgBBACAAIAVBAXZqQYQgKAIAIgQgAEYbIQECQAJAIAAoAgQiAkUNACACKAIAIgNBAXENACACQQhqIgUgA0EBdkF4aiIDQQggA0EISxtnQR9zQQJ0QYAfaiIDKAIARgRAIAMgAigCDDYCAAsgAigCCCIDBEAgAyACKAIMNgIECyACKAIMIgMEQCADIAIoAgg2AgALIAIgAigCACAAKAIAQX5xajYCAEGEICEAAkACQCABRQ0AIAEgAjYCBCABKAIAIgNBAXENASADQQF2QXhqIgNBCCADQQhLG2dBH3NBAnRBgB9qIgMoAgAgAUEIakYEQCADIAEoAgw2AgALIAEoAggiAwRAIAMgASgCDDYCBAsgASgCDCIDBEAgAyABKAIINgIAQYQgKAIAIQQLIAIgAigCACABKAIAQX5xajYCACABIARGDQAgASABKAIAQQF2akEEaiEACyAAIAI2AgALIAIoAgBBAXZBeGoiAEEIIABBCEsbZ0Efc0ECdEGAH2oiASgCACEAIAEgBTYCACACIAA2AgwgAkEANgIIIABFDQEgACAFNgIADwsCQCABRQ0AIAEoAgAiAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAigCACABQQhqRgRAIAIgASgCDDYCAAsgASgCCCICBEAgAiABKAIMNgIECyABKAIMIgIEQCACIAEoAgg2AgBBhCAoAgAhBAsgACAAKAIAIAEoAgBBfnFqIgI2AgACQCABIARHBEAgASABKAIAQQF2aiAANgIEIAAoAgAhAgwBC0GEICAANgIACyACQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgIoAgAhASACIABBCGoiAjYCACAAIAE2AgwgAEEANgIIIAFFDQEgASACNgIADwsgBUEBdkF4aiIBQQggAUEISxtnQR9zQQJ0QYAfaiICKAIAIQEgAiAAQQhqIgI2AgAgACABNgIMIABBADYCCCABRQ0AIAEgAjYCAAsLDgAgAARAIABBeGoQJQsLgAIBA38CQCAAQQ9qQXhxQYQgKAIAKAIAQQF2ayICEB1Bf0YNAAJAQYQgKAIAIgAoAgAiAUEBcQ0AIAFBAXZBeGoiAUEIIAFBCEsbZ0Efc0ECdEGAH2oiASgCACAAQQhqRgRAIAEgACgCDDYCAAsgACgCCCIBBEAgASAAKAIMNgIECyAAKAIMIgFFDQAgASAAKAIINgIAC0EBIQEgACAAKAIAIAJBAXRqIgI2AgAgAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAygCACECIAMgAEEIaiIDNgIAIAAgAjYCDCAAQQA2AgggAkUNACACIAM2AgALIAELtwIBA38CQAJAIABBASAAGyICEDgiAA0AAkACQEGEICgCACIARQ0AIAAoAgAiA0EBcQ0AIAAgA0EBcjYCACADQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgAgAEEIakYEQCABIAAoAgw2AgALIAAoAggiAQRAIAEgACgCDDYCBAsgACgCDCIBBEAgASAAKAIINgIACyACECchAkEAIQFBhCAoAgAhACACDQEgACAAKAIAQX5xNgIAQQAPCyACQQ9qQXhxIgMQHSICQX9GDQIgAkEHakF4cSIAIAJHBEAgACACaxAdQX9GDQMLAkBBhCAoAgAiAUUEQEGAICAANgIADAELIAAgATYCBAtBhCAgADYCACAAIANBAXRBAXI2AgAMAQsgAEUNAQsgAEEIaiEBCyABC7kDAQJ/IAAgA2ohBQJAIANBB0wEQANAIAAgBU8NAiAAIAItAAA6AAAgAEEBaiEAIAJBAWohAgwAAAsACyAEQQFGBEACQCAAIAJrIgZBB00EQCAAIAItAAA6AAAgACACLQABOgABIAAgAi0AAjoAAiAAIAItAAM6AAMgAEEEaiACIAZBAnQiBkHAHmooAgBqIgIQFyACIAZB4B5qKAIAayECDAELIAAgAhAMCyACQQhqIQIgAEEIaiEACwJAAkACQAJAIAUgAU0EQCAAIANqIQEgBEEBRyAAIAJrQQ9Kcg0BA0AgACACEAwgAkEIaiECIABBCGoiACABSQ0ACwwFCyAAIAFLBEAgACEBDAQLIARBAUcgACACa0EPSnINASAAIQMgAiEEA0AgAyAEEAwgBEEIaiEEIANBCGoiAyABSQ0ACwwCCwNAIAAgAhAHIAJBEGohAiAAQRBqIgAgAUkNAAsMAwsgACEDIAIhBANAIAMgBBAHIARBEGohBCADQRBqIgMgAUkNAAsLIAIgASAAa2ohAgsDQCABIAVPDQEgASACLQAAOgAAIAFBAWohASACQQFqIQIMAAALAAsLQQECfyAAIAAoArjgASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigCACACaiAAQQZ2IgFBAnRBsB5qKAIAaiAAQSBxIgBFaiABRSAAQQV2cWoFQbh/CwsdACAAKAKQ4gEQWiAAQQA2AqDiASAAQgA3A5DiAQu1AwEFfyMAQZACayIKJABBuH8hBgJAIAVFDQAgBCwAACIIQf8BcSEHAkAgCEF/TARAIAdBgn9qQQF2IgggBU8NAkFsIQYgB0GBf2oiBUGAAk8NAiAEQQFqIQdBACEGA0AgBiAFTwRAIAUhBiAIIQcMAwUgACAGaiAHIAZBAXZqIgQtAABBBHY6AAAgACAGQQFyaiAELQAAQQ9xOgAAIAZBAmohBgwBCwAACwALIAcgBU8NASAAIARBAWogByAKEFMiBhADDQELIAYhBEEAIQYgAUEAQTQQECEJQQAhBQNAIAQgBkcEQCAAIAZqIggtAAAiAUELSwRAQWwhBgwDBSAJIAFBAnRqIgEgASgCAEEBajYCACAGQQFqIQZBASAILQAAdEEBdSAFaiEFDAILAAsLQWwhBiAFRQ0AIAUQFEEBaiIBQQxLDQAgAyABNgIAQQFBASABdCAFayIDEBQiAXQgA0cNACAAIARqIAFBAWoiADoAACAJIABBAnRqIgAgACgCAEEBajYCACAJKAIEIgBBAkkgAEEBcXINACACIARBAWo2AgAgB0EBaiEGCyAKQZACaiQAIAYLxhEBDH8jAEHwAGsiBSQAQWwhCwJAIANBCkkNACACLwAAIQogAi8AAiEJIAIvAAQhByAFQQhqIAQQDgJAIAMgByAJIApqakEGaiIMSQ0AIAUtAAohCCAFQdgAaiACQQZqIgIgChAGIgsQAw0BIAVBQGsgAiAKaiICIAkQBiILEAMNASAFQShqIAIgCWoiAiAHEAYiCxADDQEgBUEQaiACIAdqIAMgDGsQBiILEAMNASAAIAFqIg9BfWohECAEQQRqIQZBASELIAAgAUEDakECdiIDaiIMIANqIgIgA2oiDiEDIAIhBCAMIQcDQCALIAMgEElxBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgCS0AAyELIAcgBiAFQUBrIAgQAkECdGoiCS8BADsAACAFQUBrIAktAAIQASAJLQADIQogBCAGIAVBKGogCBACQQJ0aiIJLwEAOwAAIAVBKGogCS0AAhABIAktAAMhCSADIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgDS0AAyENIAAgC2oiCyAGIAVB2ABqIAgQAkECdGoiAC8BADsAACAFQdgAaiAALQACEAEgAC0AAyEAIAcgCmoiCiAGIAVBQGsgCBACQQJ0aiIHLwEAOwAAIAVBQGsgBy0AAhABIActAAMhByAEIAlqIgkgBiAFQShqIAgQAkECdGoiBC8BADsAACAFQShqIAQtAAIQASAELQADIQQgAyANaiIDIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgACALaiEAIAcgCmohByAEIAlqIQQgAyANLQADaiEDIAVB2ABqEA0gBUFAaxANciAFQShqEA1yIAVBEGoQDXJFIQsMAQsLIAQgDksgByACS3INAEFsIQsgACAMSw0BIAxBfWohCQNAQQAgACAJSSAFQdgAahAEGwRAIAAgBiAFQdgAaiAIEAJBAnRqIgovAQA7AAAgBUHYAGogCi0AAhABIAAgCi0AA2oiACAGIAVB2ABqIAgQAkECdGoiCi8BADsAACAFQdgAaiAKLQACEAEgACAKLQADaiEADAEFIAxBfmohCgNAIAVB2ABqEAQgACAKS3JFBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgACAJLQADaiEADAELCwNAIAAgCk0EQCAAIAYgBUHYAGogCBACQQJ0aiIJLwEAOwAAIAVB2ABqIAktAAIQASAAIAktAANqIQAMAQsLAkAgACAMTw0AIAAgBiAFQdgAaiAIEAIiAEECdGoiDC0AADoAACAMLQADQQFGBEAgBUHYAGogDC0AAhABDAELIAUoAlxBH0sNACAFQdgAaiAGIABBAnRqLQACEAEgBSgCXEEhSQ0AIAVBIDYCXAsgAkF9aiEMA0BBACAHIAxJIAVBQGsQBBsEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiIAIAYgBUFAayAIEAJBAnRqIgcvAQA7AAAgBUFAayAHLQACEAEgACAHLQADaiEHDAEFIAJBfmohDANAIAVBQGsQBCAHIAxLckUEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwNAIAcgDE0EQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwJAIAcgAk8NACAHIAYgBUFAayAIEAIiAEECdGoiAi0AADoAACACLQADQQFGBEAgBUFAayACLQACEAEMAQsgBSgCREEfSw0AIAVBQGsgBiAAQQJ0ai0AAhABIAUoAkRBIUkNACAFQSA2AkQLIA5BfWohAgNAQQAgBCACSSAFQShqEAQbBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2oiACAGIAVBKGogCBACQQJ0aiIELwEAOwAAIAVBKGogBC0AAhABIAAgBC0AA2ohBAwBBSAOQX5qIQIDQCAFQShqEAQgBCACS3JFBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsDQCAEIAJNBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsCQCAEIA5PDQAgBCAGIAVBKGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBKGogAi0AAhABDAELIAUoAixBH0sNACAFQShqIAYgAEECdGotAAIQASAFKAIsQSFJDQAgBUEgNgIsCwNAQQAgAyAQSSAFQRBqEAQbBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2oiACAGIAVBEGogCBACQQJ0aiICLwEAOwAAIAVBEGogAi0AAhABIAAgAi0AA2ohAwwBBSAPQX5qIQIDQCAFQRBqEAQgAyACS3JFBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsDQCADIAJNBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsCQCADIA9PDQAgAyAGIAVBEGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBEGogAi0AAhABDAELIAUoAhRBH0sNACAFQRBqIAYgAEECdGotAAIQASAFKAIUQSFJDQAgBUEgNgIUCyABQWwgBUHYAGoQCiAFQUBrEApxIAVBKGoQCnEgBUEQahAKcRshCwwJCwAACwALAAALAAsAAAsACwAACwALQWwhCwsgBUHwAGokACALC7UEAQ5/IwBBEGsiBiQAIAZBBGogABAOQVQhBQJAIARB3AtJDQAgBi0ABCEHIANB8ARqQQBB7AAQECEIIAdBDEsNACADQdwJaiIJIAggBkEIaiAGQQxqIAEgAhAxIhAQA0UEQCAGKAIMIgQgB0sNASADQdwFaiEPIANBpAVqIREgAEEEaiESIANBqAVqIQEgBCEFA0AgBSICQX9qIQUgCCACQQJ0aigCAEUNAAsgAkEBaiEOQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgASALaiAKNgIAIAVBAWohBSAKIAxqIQoMAQsLIAEgCjYCAEEAIQUgBigCCCELA0AgBSALRkUEQCABIAUgCWotAAAiDEECdGoiDSANKAIAIg1BAWo2AgAgDyANQQF0aiINIAw6AAEgDSAFOgAAIAVBAWohBQwBCwtBACEBIANBADYCqAUgBEF/cyAHaiEJQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgAyALaiABNgIAIAwgBSAJanQgAWohASAFQQFqIQUMAQsLIAcgBEEBaiIBIAJrIgRrQQFqIQgDQEEBIQUgBCAIT0UEQANAIAUgDk9FBEAgBUECdCIJIAMgBEE0bGpqIAMgCWooAgAgBHY2AgAgBUEBaiEFDAELCyAEQQFqIQQMAQsLIBIgByAPIAogESADIAIgARBkIAZBAToABSAGIAc6AAYgACAGKAIENgIACyAQIQULIAZBEGokACAFC8ENAQt/IwBB8ABrIgUkAEFsIQkCQCADQQpJDQAgAi8AACEKIAIvAAIhDCACLwAEIQYgBUEIaiAEEA4CQCADIAYgCiAMampBBmoiDUkNACAFLQAKIQcgBUHYAGogAkEGaiICIAoQBiIJEAMNASAFQUBrIAIgCmoiAiAMEAYiCRADDQEgBUEoaiACIAxqIgIgBhAGIgkQAw0BIAVBEGogAiAGaiADIA1rEAYiCRADDQEgACABaiIOQX1qIQ8gBEEEaiEGQQEhCSAAIAFBA2pBAnYiAmoiCiACaiIMIAJqIg0hAyAMIQQgCiECA0AgCSADIA9JcQRAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAACAGIAVBQGsgBxACQQF0aiIILQAAIQsgBUFAayAILQABEAEgAiALOgAAIAYgBUEoaiAHEAJBAXRqIggtAAAhCyAFQShqIAgtAAEQASAEIAs6AAAgBiAFQRBqIAcQAkEBdGoiCC0AACELIAVBEGogCC0AARABIAMgCzoAACAGIAVB2ABqIAcQAkEBdGoiCC0AACELIAVB2ABqIAgtAAEQASAAIAs6AAEgBiAFQUBrIAcQAkEBdGoiCC0AACELIAVBQGsgCC0AARABIAIgCzoAASAGIAVBKGogBxACQQF0aiIILQAAIQsgBUEoaiAILQABEAEgBCALOgABIAYgBUEQaiAHEAJBAXRqIggtAAAhCyAFQRBqIAgtAAEQASADIAs6AAEgA0ECaiEDIARBAmohBCACQQJqIQIgAEECaiEAIAkgBUHYAGoQDUVxIAVBQGsQDUVxIAVBKGoQDUVxIAVBEGoQDUVxIQkMAQsLIAQgDUsgAiAMS3INAEFsIQkgACAKSw0BIApBfWohCQNAIAVB2ABqEAQgACAJT3JFBEAgBiAFQdgAaiAHEAJBAXRqIggtAAAhCyAFQdgAaiAILQABEAEgACALOgAAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAASAAQQJqIQAMAQsLA0AgBUHYAGoQBCAAIApPckUEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCwNAIAAgCkkEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCyAMQX1qIQADQCAFQUBrEAQgAiAAT3JFBEAgBiAFQUBrIAcQAkEBdGoiCi0AACEJIAVBQGsgCi0AARABIAIgCToAACAGIAVBQGsgBxACQQF0aiIKLQAAIQkgBUFAayAKLQABEAEgAiAJOgABIAJBAmohAgwBCwsDQCAFQUBrEAQgAiAMT3JFBEAgBiAFQUBrIAcQAkEBdGoiAC0AACEKIAVBQGsgAC0AARABIAIgCjoAACACQQFqIQIMAQsLA0AgAiAMSQRAIAYgBUFAayAHEAJBAXRqIgAtAAAhCiAFQUBrIAAtAAEQASACIAo6AAAgAkEBaiECDAELCyANQX1qIQADQCAFQShqEAQgBCAAT3JFBEAgBiAFQShqIAcQAkEBdGoiAi0AACEKIAVBKGogAi0AARABIAQgCjoAACAGIAVBKGogBxACQQF0aiICLQAAIQogBUEoaiACLQABEAEgBCAKOgABIARBAmohBAwBCwsDQCAFQShqEAQgBCANT3JFBEAgBiAFQShqIAcQAkEBdGoiAC0AACECIAVBKGogAC0AARABIAQgAjoAACAEQQFqIQQMAQsLA0AgBCANSQRAIAYgBUEoaiAHEAJBAXRqIgAtAAAhAiAFQShqIAAtAAEQASAEIAI6AAAgBEEBaiEEDAELCwNAIAVBEGoQBCADIA9PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIAYgBUEQaiAHEAJBAXRqIgAtAAAhAiAFQRBqIAAtAAEQASADIAI6AAEgA0ECaiEDDAELCwNAIAVBEGoQBCADIA5PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIANBAWohAwwBCwsDQCADIA5JBEAgBiAFQRBqIAcQAkEBdGoiAC0AACECIAVBEGogAC0AARABIAMgAjoAACADQQFqIQMMAQsLIAFBbCAFQdgAahAKIAVBQGsQCnEgBUEoahAKcSAFQRBqEApxGyEJDAELQWwhCQsgBUHwAGokACAJC8oCAQR/IwBBIGsiBSQAIAUgBBAOIAUtAAIhByAFQQhqIAIgAxAGIgIQA0UEQCAEQQRqIQIgACABaiIDQX1qIQQDQCAFQQhqEAQgACAET3JFBEAgAiAFQQhqIAcQAkEBdGoiBi0AACEIIAVBCGogBi0AARABIAAgCDoAACACIAVBCGogBxACQQF0aiIGLQAAIQggBUEIaiAGLQABEAEgACAIOgABIABBAmohAAwBCwsDQCAFQQhqEAQgACADT3JFBEAgAiAFQQhqIAcQAkEBdGoiBC0AACEGIAVBCGogBC0AARABIAAgBjoAACAAQQFqIQAMAQsLA0AgACADT0UEQCACIAVBCGogBxACQQF0aiIELQAAIQYgBUEIaiAELQABEAEgACAGOgAAIABBAWohAAwBCwsgAUFsIAVBCGoQChshAgsgBUEgaiQAIAILtgMBCX8jAEEQayIGJAAgBkEANgIMIAZBADYCCEFUIQQCQAJAIANBQGsiDCADIAZBCGogBkEMaiABIAIQMSICEAMNACAGQQRqIAAQDiAGKAIMIgcgBi0ABEEBaksNASAAQQRqIQogBkEAOgAFIAYgBzoABiAAIAYoAgQ2AgAgB0EBaiEJQQEhBANAIAQgCUkEQCADIARBAnRqIgEoAgAhACABIAU2AgAgACAEQX9qdCAFaiEFIARBAWohBAwBCwsgB0EBaiEHQQAhBSAGKAIIIQkDQCAFIAlGDQEgAyAFIAxqLQAAIgRBAnRqIgBBASAEdEEBdSILIAAoAgAiAWoiADYCACAHIARrIQhBACEEAkAgC0EDTQRAA0AgBCALRg0CIAogASAEakEBdGoiACAIOgABIAAgBToAACAEQQFqIQQMAAALAAsDQCABIABPDQEgCiABQQF0aiIEIAg6AAEgBCAFOgAAIAQgCDoAAyAEIAU6AAIgBCAIOgAFIAQgBToABCAEIAg6AAcgBCAFOgAGIAFBBGohAQwAAAsACyAFQQFqIQUMAAALAAsgAiEECyAGQRBqJAAgBAutAQECfwJAQYQgKAIAIABHIAAoAgBBAXYiAyABa0F4aiICQXhxQQhHcgR/IAIFIAMQJ0UNASACQQhqC0EQSQ0AIAAgACgCACICQQFxIAAgAWpBD2pBeHEiASAAa0EBdHI2AgAgASAANgIEIAEgASgCAEEBcSAAIAJBAXZqIAFrIgJBAXRyNgIAQYQgIAEgAkH/////B3FqQQRqQYQgKAIAIABGGyABNgIAIAEQJQsLygIBBX8CQAJAAkAgAEEIIABBCEsbZ0EfcyAAaUEBR2oiAUEESSAAIAF2cg0AIAFBAnRB/B5qKAIAIgJFDQADQCACQXhqIgMoAgBBAXZBeGoiBSAATwRAIAIgBUEIIAVBCEsbZ0Efc0ECdEGAH2oiASgCAEYEQCABIAIoAgQ2AgALDAMLIARBHksNASAEQQFqIQQgAigCBCICDQALC0EAIQMgAUEgTw0BA0AgAUECdEGAH2ooAgAiAkUEQCABQR5LIQIgAUEBaiEBIAJFDQEMAwsLIAIgAkF4aiIDKAIAQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgBGBEAgASACKAIENgIACwsgAigCACIBBEAgASACKAIENgIECyACKAIEIgEEQCABIAIoAgA2AgALIAMgAygCAEEBcjYCACADIAAQNwsgAwvhCwINfwV+IwBB8ABrIgckACAHIAAoAvDhASIINgJcIAEgAmohDSAIIAAoAoDiAWohDwJAAkAgBUUEQCABIQQMAQsgACgCxOABIRAgACgCwOABIREgACgCvOABIQ4gAEEBNgKM4QFBACEIA0AgCEEDRwRAIAcgCEECdCICaiAAIAJqQazQAWooAgA2AkQgCEEBaiEIDAELC0FsIQwgB0EYaiADIAQQBhADDQEgB0EsaiAHQRhqIAAoAgAQEyAHQTRqIAdBGGogACgCCBATIAdBPGogB0EYaiAAKAIEEBMgDUFgaiESIAEhBEEAIQwDQCAHKAIwIAcoAixBA3RqKQIAIhRCEIinQf8BcSEIIAcoAkAgBygCPEEDdGopAgAiFUIQiKdB/wFxIQsgBygCOCAHKAI0QQN0aikCACIWQiCIpyEJIBVCIIghFyAUQiCIpyECAkAgFkIQiKdB/wFxIgNBAk8EQAJAIAZFIANBGUlyRQRAIAkgB0EYaiADQSAgBygCHGsiCiAKIANLGyIKEAUgAyAKayIDdGohCSAHQRhqEAQaIANFDQEgB0EYaiADEAUgCWohCQwBCyAHQRhqIAMQBSAJaiEJIAdBGGoQBBoLIAcpAkQhGCAHIAk2AkQgByAYNwNIDAELAkAgA0UEQCACBEAgBygCRCEJDAMLIAcoAkghCQwBCwJAAkAgB0EYakEBEAUgCSACRWpqIgNBA0YEQCAHKAJEQX9qIgMgA0VqIQkMAQsgA0ECdCAHaigCRCIJIAlFaiEJIANBAUYNAQsgByAHKAJINgJMCwsgByAHKAJENgJIIAcgCTYCRAsgF6chAyALBEAgB0EYaiALEAUgA2ohAwsgCCALakEUTwRAIAdBGGoQBBoLIAgEQCAHQRhqIAgQBSACaiECCyAHQRhqEAQaIAcgB0EYaiAUQhiIp0H/AXEQCCAUp0H//wNxajYCLCAHIAdBGGogFUIYiKdB/wFxEAggFadB//8DcWo2AjwgB0EYahAEGiAHIAdBGGogFkIYiKdB/wFxEAggFqdB//8DcWo2AjQgByACNgJgIAcoAlwhCiAHIAk2AmggByADNgJkAkACQAJAIAQgAiADaiILaiASSw0AIAIgCmoiEyAPSw0AIA0gBGsgC0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdBKGogACgCBBATQQAhBCAHQeAAaiEMIAdB5ABqIQoDQCAHQShqEARBAksgBCAXTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEJIAcoAkggBygCREEDdGopAgAiH0IgiKchCCAeQiCIISAgHUIgiKchAgJAIB9CEIinQf8BcSIDQQJPBEACQCAGRSADQRlJckUEQCAIIAdBKGogA0EgIAcoAixrIg0gDSADSxsiDRAFIAMgDWsiA3RqIQggB0EoahAEGiADRQ0BIAdBKGogAxAFIAhqIQgMAQsgB0EoaiADEAUgCGohCCAHQShqEAQaCyAHKQJUISEgByAINgJUIAcgITcDWAwBCwJAIANFBEAgAgRAIAcoAlQhCAwDCyAHKAJYIQgMAQsCQAJAIAdBKGpBARAFIAggAkVqaiIDQQNGBEAgBygCVEF/aiIDIANFaiEIDAELIANBAnQgB2ooAlQiCCAIRWohCCADQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAg2AlQLICCnIQMgCQRAIAdBKGogCRAFIANqIQMLIAkgC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgAmohAgsgB0EoahAEGiAHIAcoAmggAmoiCSADajYCaCAKIAwgCCAJSxsoAgAhDSAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogB0EoaiAfQhiIp0H/AXEQCCEOIAdB8ABqIARBBHRqIgsgCSANaiAIazYCDCALIAg2AgggCyADNgIEIAsgAjYCACAHIA4gH6dB//8DcWo2AkQgBEEBaiEEDAELCyAEIBdIDQEgEkFgaiEYIAdB4ABqIRogB0HkAGohGyABIQMDQCAHQShqEARBAksgBCAFTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEIIAcoAkggBygCREEDdGopAgAiH0IgiKchCSAeQiCIISAgHUIgiKchDAJAIB9CEIinQf8BcSICQQJPBEACQCAGRSACQRlJckUEQCAJIAdBKGogAkEgIAcoAixrIgogCiACSxsiChAFIAIgCmsiAnRqIQkgB0EoahAEGiACRQ0BIAdBKGogAhAFIAlqIQkMAQsgB0EoaiACEAUgCWohCSAHQShqEAQaCyAHKQJUISEgByAJNgJUIAcgITcDWAwBCwJAIAJFBEAgDARAIAcoAlQhCQwDCyAHKAJYIQkMAQsCQAJAIAdBKGpBARAFIAkgDEVqaiICQQNGBEAgBygCVEF/aiICIAJFaiEJDAELIAJBAnQgB2ooAlQiCSAJRWohCSACQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAk2AlQLICCnIRQgCARAIAdBKGogCBAFIBRqIRQLIAggC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgDGohDAsgB0EoahAEGiAHIAcoAmggDGoiGSAUajYCaCAbIBogCSAZSxsoAgAhHCAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogByAHQShqIB9CGIinQf8BcRAIIB+nQf//A3FqNgJEIAcgB0HwAGogBEEDcUEEdGoiDSkDCCIdNwPIASAHIA0pAwAiHjcDwAECQAJAAkAgBygCvAEiDiAepyICaiIWIBNLDQAgAyAHKALEASIKIAJqIgtqIBhLDQAgEiADayALQSBqTw0BCyAHIAcpA8gBNwMQIAcgBykDwAE3AwggAyASIAdBCGogB0G8AWogEyAPIBUgERAeIQsMAQsgAiADaiEIIAMgDhAHIAJBEU8EQCADQRBqIQIDQCACIA5BEGoiDhAHIAJBEGoiAiAISQ0ACwsgCCAdpyIOayECIAcgFjYCvAEgDiAIIA9rSwRAIA4gCCAVa0sEQEFsIQsMAgsgESACIA9rIgJqIhYgCmogEU0EQCAIIBYgChAPGgwCCyAIIBZBACACaxAPIQggByACIApqIgo2AsQBIAggAmshCCAPIQILIA5BEE8EQCAIIApqIQoDQCAIIAIQByACQRBqIQIgCEEQaiIIIApJDQALDAELAkAgDkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgDkECdCIKQcAeaigCAGoiAhAXIAIgCkHgHmooAgBrIQIgBygCxAEhCgwBCyAIIAIQDAsgCkEJSQ0AIAggCmohCiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAKSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAKSQ0ACwsgCxADBEAgCyEQDAQFIA0gDDYCACANIBkgHGogCWs2AgwgDSAJNgIIIA0gFDYCBCAEQQFqIQQgAyALaiEDDAILAAsLIAQgBUgNASAEIBdrIQtBACEEA0AgCyAFSARAIAcgB0HwAGogC0EDcUEEdGoiAikDCCIdNwPIASAHIAIpAwAiHjcDwAECQAJAAkAgBygCvAEiDCAepyICaiIKIBNLDQAgAyAHKALEASIJIAJqIhBqIBhLDQAgEiADayAQQSBqTw0BCyAHIAcpA8gBNwMgIAcgBykDwAE3AxggAyASIAdBGGogB0G8AWogEyAPIBUgERAeIRAMAQsgAiADaiEIIAMgDBAHIAJBEU8EQCADQRBqIQIDQCACIAxBEGoiDBAHIAJBEGoiAiAISQ0ACwsgCCAdpyIGayECIAcgCjYCvAEgBiAIIA9rSwRAIAYgCCAVa0sEQEFsIRAMAgsgESACIA9rIgJqIgwgCWogEU0EQCAIIAwgCRAPGgwCCyAIIAxBACACaxAPIQggByACIAlqIgk2AsQBIAggAmshCCAPIQILIAZBEE8EQCAIIAlqIQYDQCAIIAIQByACQRBqIQIgCEEQaiIIIAZJDQALDAELAkAgBkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgBkECdCIGQcAeaigCAGoiAhAXIAIgBkHgHmooAgBrIQIgBygCxAEhCQwBCyAIIAIQDAsgCUEJSQ0AIAggCWohBiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAGSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAGSQ0ACwsgEBADDQMgC0EBaiELIAMgEGohAwwBCwsDQCAEQQNHBEAgACAEQQJ0IgJqQazQAWogAiAHaigCVDYCACAEQQFqIQQMAQsLIAcoArwBIQgLQbp/IRAgEyAIayIAIBIgA2tLDQAgAwR/IAMgCCAAEAsgAGoFQQALIAFrIRALIAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY0AAQMyIFEAMiBg0AIANBHzYCfCADIANB/ABqIANB+ABqIAQgBCAFaiAGGyIEIAEgAmoiAiAEaxAVIgUQAw0AIAMoAnwiBkEfSw0AIAMoAngiB0EJTw0AIABBiCBqIAMgBkGAC0GADCAHEBggA0E0NgJ8IAMgA0H8AGogA0H4AGogBCAFaiIEIAIgBGsQFSIFEAMNACADKAJ8IgZBNEsNACADKAJ4IgdBCk8NACAAQZAwaiADIAZBgA1B4A4gBxAYIANBIzYCfCADIANB/ABqIANB+ABqIAQgBWoiBCACIARrEBUiBRADDQAgAygCfCIGQSNLDQAgAygCeCIHQQpPDQAgACADIAZBwBBB0BEgBxAYIAQgBWoiBEEMaiIFIAJLDQAgAiAFayEFQQAhAgNAIAJBA0cEQCAEKAAAIgZBf2ogBU8NAiAAIAJBAnRqQZzQAWogBjYCACACQQFqIQIgBEEEaiEEDAELCyAEIAFrIQgLIANBgAFqJAAgCAtGAQN/IABBCGohAyAAKAIEIQJBACEAA0AgACACdkUEQCABIAMgAEEDdGotAAJBFktqIQEgAEEBaiEADAELCyABQQggAmt0C4YDAQV/Qbh/IQcCQCADRQ0AIAItAAAiBEUEQCABQQA2AgBBAUG4fyADQQFGGw8LAn8gAkEBaiIFIARBGHRBGHUiBkF/Sg0AGiAGQX9GBEAgA0EDSA0CIAUvAABBgP4BaiEEIAJBA2oMAQsgA0ECSA0BIAItAAEgBEEIdHJBgIB+aiEEIAJBAmoLIQUgASAENgIAIAVBAWoiASACIANqIgNLDQBBbCEHIABBEGogACAFLQAAIgVBBnZBI0EJIAEgAyABa0HAEEHQEUHwEiAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBmCBqIABBCGogBUEEdkEDcUEfQQggASABIAZqIAgbIgEgAyABa0GAC0GADEGAFyAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBoDBqIABBBGogBUECdkEDcUE0QQkgASABIAZqIAgbIgEgAyABa0GADUHgDkGQGSAAKAKM4QEgACgCnOIBIAQQHyIAEAMNACAAIAFqIAJrIQcLIAcLrQMBCn8jAEGABGsiCCQAAn9BUiACQf8BSw0AGkFUIANBDEsNABogAkEBaiELIABBBGohCUGAgAQgA0F/anRBEHUhCkEAIQJBASEEQQEgA3QiB0F/aiIMIQUDQCACIAtGRQRAAkAgASACQQF0Ig1qLwEAIgZB//8DRgRAIAkgBUECdGogAjoAAiAFQX9qIQVBASEGDAELIARBACAKIAZBEHRBEHVKGyEECyAIIA1qIAY7AQAgAkEBaiECDAELCyAAIAQ7AQIgACADOwEAIAdBA3YgB0EBdmpBA2ohBkEAIQRBACECA0AgBCALRkUEQCABIARBAXRqLgEAIQpBACEAA0AgACAKTkUEQCAJIAJBAnRqIAQ6AAIDQCACIAZqIAxxIgIgBUsNAAsgAEEBaiEADAELCyAEQQFqIQQMAQsLQX8gAg0AGkEAIQIDfyACIAdGBH9BAAUgCCAJIAJBAnRqIgAtAAJBAXRqIgEgAS8BACIBQQFqOwEAIAAgAyABEBRrIgU6AAMgACABIAVB/wFxdCAHazsBACACQQFqIQIMAQsLCyEFIAhBgARqJAAgBQvjBgEIf0FsIQcCQCACQQNJDQACQAJAAkACQCABLQAAIgNBA3EiCUEBaw4DAwEAAgsgACgCiOEBDQBBYg8LIAJBBUkNAkEDIQYgASgAACEFAn8CQAJAIANBAnZBA3EiCEF+aiIEQQFNBEAgBEEBaw0BDAILIAVBDnZB/wdxIQQgBUEEdkH/B3EhAyAIRQwCCyAFQRJ2IQRBBCEGIAVBBHZB//8AcSEDQQAMAQsgBUEEdkH//w9xIgNBgIAISw0DIAEtAARBCnQgBUEWdnIhBEEFIQZBAAshBSAEIAZqIgogAksNAgJAIANBgQZJDQAgACgCnOIBRQ0AQQAhAgNAIAJBg4ABSw0BIAJBQGshAgwAAAsACwJ/IAlBA0YEQCABIAZqIQEgAEHw4gFqIQIgACgCDCEGIAUEQCACIAMgASAEIAYQXwwCCyACIAMgASAEIAYQXQwBCyAAQbjQAWohAiABIAZqIQEgAEHw4gFqIQYgAEGo0ABqIQggBQRAIAggBiADIAEgBCACEF4MAQsgCCAGIAMgASAEIAIQXAsQAw0CIAAgAzYCgOIBIABBATYCiOEBIAAgAEHw4gFqNgLw4QEgCUECRgRAIAAgAEGo0ABqNgIMCyAAIANqIgBBiOMBakIANwAAIABBgOMBakIANwAAIABB+OIBakIANwAAIABB8OIBakIANwAAIAoPCwJ/AkACQAJAIANBAnZBA3FBf2oiBEECSw0AIARBAWsOAgACAQtBASEEIANBA3YMAgtBAiEEIAEvAABBBHYMAQtBAyEEIAEQIUEEdgsiAyAEaiIFQSBqIAJLBEAgBSACSw0CIABB8OIBaiABIARqIAMQCyEBIAAgAzYCgOIBIAAgATYC8OEBIAEgA2oiAEIANwAYIABCADcAECAAQgA3AAggAEIANwAAIAUPCyAAIAM2AoDiASAAIAEgBGo2AvDhASAFDwsCfwJAAkACQCADQQJ2QQNxQX9qIgRBAksNACAEQQFrDgIAAgELQQEhByADQQN2DAILQQIhByABLwAAQQR2DAELIAJBBEkgARAhIgJBj4CAAUtyDQFBAyEHIAJBBHYLIQIgAEHw4gFqIAEgB2otAAAgAkEgahAQIQEgACACNgKA4gEgACABNgLw4QEgB0EBaiEHCyAHC0sAIABC+erQ0OfJoeThADcDICAAQgA3AxggAELP1tO+0ser2UI3AxAgAELW64Lu6v2J9eAANwMIIABCADcDACAAQShqQQBBKBAQGgviAgICfwV+IABBKGoiASAAKAJIaiECAn4gACkDACIDQiBaBEAgACkDECIEQgeJIAApAwgiBUIBiXwgACkDGCIGQgyJfCAAKQMgIgdCEol8IAUQGSAEEBkgBhAZIAcQGQwBCyAAKQMYQsXP2bLx5brqJ3wLIAN8IQMDQCABQQhqIgAgAk0EQEIAIAEpAAAQCSADhUIbiUKHla+vmLbem55/fkLj3MqV/M7y9YV/fCEDIAAhAQwBCwsCQCABQQRqIgAgAksEQCABIQAMAQsgASgAAK1Ch5Wvr5i23puef34gA4VCF4lCz9bTvtLHq9lCfkL5893xmfaZqxZ8IQMLA0AgACACSQRAIAAxAABCxc/ZsvHluuonfiADhUILiUKHla+vmLbem55/fiEDIABBAWohAAwBCwsgA0IhiCADhULP1tO+0ser2UJ+IgNCHYggA4VC+fPd8Zn2masWfiIDQiCIIAOFC+8CAgJ/BH4gACAAKQMAIAKtfDcDAAJAAkAgACgCSCIDIAJqIgRBH00EQCABRQ0BIAAgA2pBKGogASACECAgACgCSCACaiEEDAELIAEgAmohAgJ/IAMEQCAAQShqIgQgA2ogAUEgIANrECAgACAAKQMIIAQpAAAQCTcDCCAAIAApAxAgACkAMBAJNwMQIAAgACkDGCAAKQA4EAk3AxggACAAKQMgIABBQGspAAAQCTcDICAAKAJIIQMgAEEANgJIIAEgA2tBIGohAQsgAUEgaiACTQsEQCACQWBqIQMgACkDICEFIAApAxghBiAAKQMQIQcgACkDCCEIA0AgCCABKQAAEAkhCCAHIAEpAAgQCSEHIAYgASkAEBAJIQYgBSABKQAYEAkhBSABQSBqIgEgA00NAAsgACAFNwMgIAAgBjcDGCAAIAc3AxAgACAINwMICyABIAJPDQEgAEEoaiABIAIgAWsiBBAgCyAAIAQ2AkgLCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQEBogAwVBun8LCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQCxogAwVBun8LC6gCAQZ/IwBBEGsiByQAIABB2OABaikDAEKAgIAQViEIQbh/IQUCQCAEQf//B0sNACAAIAMgBBBCIgUQAyIGDQAgACgCnOIBIQkgACAHQQxqIAMgAyAFaiAGGyIKIARBACAFIAYbayIGEEAiAxADBEAgAyEFDAELIAcoAgwhBCABRQRAQbp/IQUgBEEASg0BCyAGIANrIQUgAyAKaiEDAkAgCQRAIABBADYCnOIBDAELAkACQAJAIARBBUgNACAAQdjgAWopAwBCgICACFgNAAwBCyAAQQA2ApziAQwBCyAAKAIIED8hBiAAQQA2ApziASAGQRRPDQELIAAgASACIAMgBSAEIAgQOSEFDAELIAAgASACIAMgBSAEIAgQOiEFCyAHQRBqJAAgBQtnACAAQdDgAWogASACIAAoAuzhARAuIgEQAwRAIAEPC0G4fyECAkAgAQ0AIABB7OABaigCACIBBEBBYCECIAAoApjiASABRw0BC0EAIQIgAEHw4AFqKAIARQ0AIABBkOEBahBDCyACCycBAX8QVyIERQRAQUAPCyAEIAAgASACIAMgBBBLEE8hACAEEFYgAAs/AQF/AkACQAJAIAAoAqDiAUEBaiIBQQJLDQAgAUEBaw4CAAECCyAAEDBBAA8LIABBADYCoOIBCyAAKAKU4gELvAMCB38BfiMAQRBrIgkkAEG4fyEGAkAgBCgCACIIQQVBCSAAKALs4QEiBRtJDQAgAygCACIHQQFBBSAFGyAFEC8iBRADBEAgBSEGDAELIAggBUEDakkNACAAIAcgBRBJIgYQAw0AIAEgAmohCiAAQZDhAWohCyAIIAVrIQIgBSAHaiEHIAEhBQNAIAcgAiAJECwiBhADDQEgAkF9aiICIAZJBEBBuH8hBgwCCyAJKAIAIghBAksEQEFsIQYMAgsgB0EDaiEHAn8CQAJAAkAgCEEBaw4CAgABCyAAIAUgCiAFayAHIAYQSAwCCyAFIAogBWsgByAGEEcMAQsgBSAKIAVrIActAAAgCSgCCBBGCyIIEAMEQCAIIQYMAgsgACgC8OABBEAgCyAFIAgQRQsgAiAGayECIAYgB2ohByAFIAhqIQUgCSgCBEUNAAsgACkD0OABIgxCf1IEQEFsIQYgDCAFIAFrrFINAQsgACgC8OABBEBBaiEGIAJBBEkNASALEEQhDCAHKAAAIAynRw0BIAdBBGohByACQXxqIQILIAMgBzYCACAEIAI2AgAgBSABayEGCyAJQRBqJAAgBgsuACAAECsCf0EAQQAQAw0AGiABRSACRXJFBEBBYiAAIAEgAhA9EAMNARoLQQALCzcAIAEEQCAAIAAoAsTgASABKAIEIAEoAghqRzYCnOIBCyAAECtBABADIAFFckUEQCAAIAEQWwsL0QIBB38jAEEQayIGJAAgBiAENgIIIAYgAzYCDCAFBEAgBSgCBCEKIAUoAgghCQsgASEIAkACQANAIAAoAuzhARAWIQsCQANAIAQgC0kNASADKAAAQXBxQdDUtMIBRgRAIAMgBBAiIgcQAw0EIAQgB2shBCADIAdqIQMMAQsLIAYgAzYCDCAGIAQ2AggCQCAFBEAgACAFEE5BACEHQQAQA0UNAQwFCyAAIAogCRBNIgcQAw0ECyAAIAgQUCAMQQFHQQAgACAIIAIgBkEMaiAGQQhqEEwiByIDa0EAIAMQAxtBCkdyRQRAQbh/IQcMBAsgBxADDQMgAiAHayECIAcgCGohCEEBIQwgBigCDCEDIAYoAgghBAwBCwsgBiADNgIMIAYgBDYCCEG4fyEHIAQNASAIIAFrIQcMAQsgBiADNgIMIAYgBDYCCAsgBkEQaiQAIAcLRgECfyABIAAoArjgASICRwRAIAAgAjYCxOABIAAgATYCuOABIAAoArzgASEDIAAgATYCvOABIAAgASADIAJrajYCwOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEEdCAAbiECCyAAQQh2IgEgAkEYbCIAQYwIaigCAGwgAEGICGooAgBqIgJBA3YgAmogAEGACGooAgAgAEGECGooAgAgAWxqSQs3ACAAIAMgBCAFQYAQEDMiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQMgVBuH8LC78DAQN/IwBBIGsiBSQAIAVBCGogAiADEAYiAhADRQRAIAAgAWoiB0F9aiEGIAUgBBAOIARBBGohAiAFLQACIQMDQEEAIAAgBkkgBUEIahAEGwRAIAAgAiAFQQhqIAMQAkECdGoiBC8BADsAACAFQQhqIAQtAAIQASAAIAQtAANqIgQgAiAFQQhqIAMQAkECdGoiAC8BADsAACAFQQhqIAAtAAIQASAEIAAtAANqIQAMAQUgB0F+aiEEA0AgBUEIahAEIAAgBEtyRQRAIAAgAiAFQQhqIAMQAkECdGoiBi8BADsAACAFQQhqIAYtAAIQASAAIAYtAANqIQAMAQsLA0AgACAES0UEQCAAIAIgBUEIaiADEAJBAnRqIgYvAQA7AAAgBUEIaiAGLQACEAEgACAGLQADaiEADAELCwJAIAAgB08NACAAIAIgBUEIaiADEAIiA0ECdGoiAC0AADoAACAALQADQQFGBEAgBUEIaiAALQACEAEMAQsgBSgCDEEfSw0AIAVBCGogAiADQQJ0ai0AAhABIAUoAgxBIUkNACAFQSA2AgwLIAFBbCAFQQhqEAobIQILCwsgBUEgaiQAIAILkgIBBH8jAEFAaiIJJAAgCSADQTQQCyEDAkAgBEECSA0AIAMgBEECdGooAgAhCSADQTxqIAgQIyADQQE6AD8gAyACOgA+QQAhBCADKAI8IQoDQCAEIAlGDQEgACAEQQJ0aiAKNgEAIARBAWohBAwAAAsAC0EAIQkDQCAGIAlGRQRAIAMgBSAJQQF0aiIKLQABIgtBAnRqIgwoAgAhBCADQTxqIAotAABBCHQgCGpB//8DcRAjIANBAjoAPyADIAcgC2siCiACajoAPiAEQQEgASAKa3RqIQogAygCPCELA0AgACAEQQJ0aiALNgEAIARBAWoiBCAKSQ0ACyAMIAo2AgAgCUEBaiEJDAELCyADQUBrJAALowIBCX8jAEHQAGsiCSQAIAlBEGogBUE0EAsaIAcgBmshDyAHIAFrIRADQAJAIAMgCkcEQEEBIAEgByACIApBAXRqIgYtAAEiDGsiCGsiC3QhDSAGLQAAIQ4gCUEQaiAMQQJ0aiIMKAIAIQYgCyAPTwRAIAAgBkECdGogCyAIIAUgCEE0bGogCCAQaiIIQQEgCEEBShsiCCACIAQgCEECdGooAgAiCEEBdGogAyAIayAHIA4QYyAGIA1qIQgMAgsgCUEMaiAOECMgCUEBOgAPIAkgCDoADiAGIA1qIQggCSgCDCELA0AgBiAITw0CIAAgBkECdGogCzYBACAGQQFqIQYMAAALAAsgCUHQAGokAA8LIAwgCDYCACAKQQFqIQoMAAALAAs0ACAAIAMgBCAFEDYiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQNAVBuH8LCyMAIAA/AEEQdGtB//8DakEQdkAAQX9GBEBBAA8LQQAQAEEBCzsBAX8gAgRAA0AgACABIAJBgCAgAkGAIEkbIgMQCyEAIAFBgCBqIQEgAEGAIGohACACIANrIgINAAsLCwYAIAAQAwsLqBUJAEGICAsNAQAAAAEAAAACAAAAAgBBoAgLswYBAAAAAQAAAAIAAAACAAAAJgAAAIIAAAAhBQAASgAAAGcIAAAmAAAAwAEAAIAAAABJBQAASgAAAL4IAAApAAAALAIAAIAAAABJBQAASgAAAL4IAAAvAAAAygIAAIAAAACKBQAASgAAAIQJAAA1AAAAcwMAAIAAAACdBQAASgAAAKAJAAA9AAAAgQMAAIAAAADrBQAASwAAAD4KAABEAAAAngMAAIAAAABNBgAASwAAAKoKAABLAAAAswMAAIAAAADBBgAATQAAAB8NAABNAAAAUwQAAIAAAAAjCAAAUQAAAKYPAABUAAAAmQQAAIAAAABLCQAAVwAAALESAABYAAAA2gQAAIAAAABvCQAAXQAAACMUAABUAAAARQUAAIAAAABUCgAAagAAAIwUAABqAAAArwUAAIAAAAB2CQAAfAAAAE4QAAB8AAAA0gIAAIAAAABjBwAAkQAAAJAHAACSAAAAAAAAAAEAAAABAAAABQAAAA0AAAAdAAAAPQAAAH0AAAD9AAAA/QEAAP0DAAD9BwAA/Q8AAP0fAAD9PwAA/X8AAP3/AAD9/wEA/f8DAP3/BwD9/w8A/f8fAP3/PwD9/38A/f//AP3//wH9//8D/f//B/3//w/9//8f/f//P/3//38AAAAAAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABEAAAASAAAAEwAAABQAAAAVAAAAFgAAABcAAAAYAAAAGQAAABoAAAAbAAAAHAAAAB0AAAAeAAAAHwAAAAMAAAAEAAAABQAAAAYAAAAHAAAACAAAAAkAAAAKAAAACwAAAAwAAAANAAAADgAAAA8AAAAQAAAAEQAAABIAAAATAAAAFAAAABUAAAAWAAAAFwAAABgAAAAZAAAAGgAAABsAAAAcAAAAHQAAAB4AAAAfAAAAIAAAACEAAAAiAAAAIwAAACUAAAAnAAAAKQAAACsAAAAvAAAAMwAAADsAAABDAAAAUwAAAGMAAACDAAAAAwEAAAMCAAADBAAAAwgAAAMQAAADIAAAA0AAAAOAAAADAAEAQeAPC1EBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAEAAAABQAAAAcAAAAIAAAACQAAAAoAAAALAAAADAAAAA0AAAAOAAAADwAAABAAQcQQC4sBAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABIAAAAUAAAAFgAAABgAAAAcAAAAIAAAACgAAAAwAAAAQAAAAIAAAAAAAQAAAAIAAAAEAAAACAAAABAAAAAgAAAAQAAAAIAAAAAAAQBBkBIL5gQBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAAAEAAAAEAAAACAAAAAAAAAABAAEBBgAAAAAAAAQAAAAAEAAABAAAAAAgAAAFAQAAAAAAAAUDAAAAAAAABQQAAAAAAAAFBgAAAAAAAAUHAAAAAAAABQkAAAAAAAAFCgAAAAAAAAUMAAAAAAAABg4AAAAAAAEFEAAAAAAAAQUUAAAAAAABBRYAAAAAAAIFHAAAAAAAAwUgAAAAAAAEBTAAAAAgAAYFQAAAAAAABwWAAAAAAAAIBgABAAAAAAoGAAQAAAAADAYAEAAAIAAABAAAAAAAAAAEAQAAAAAAAAUCAAAAIAAABQQAAAAAAAAFBQAAACAAAAUHAAAAAAAABQgAAAAgAAAFCgAAAAAAAAULAAAAAAAABg0AAAAgAAEFEAAAAAAAAQUSAAAAIAABBRYAAAAAAAIFGAAAACAAAwUgAAAAAAADBSgAAAAAAAYEQAAAABAABgRAAAAAIAAHBYAAAAAAAAkGAAIAAAAACwYACAAAMAAABAAAAAAQAAAEAQAAACAAAAUCAAAAIAAABQMAAAAgAAAFBQAAACAAAAUGAAAAIAAABQgAAAAgAAAFCQAAACAAAAULAAAAIAAABQwAAAAAAAAGDwAAACAAAQUSAAAAIAABBRQAAAAgAAIFGAAAACAAAgUcAAAAIAADBSgAAAAgAAQFMAAAAAAAEAYAAAEAAAAPBgCAAAAAAA4GAEAAAAAADQYAIABBgBcLhwIBAAEBBQAAAAAAAAUAAAAAAAAGBD0AAAAAAAkF/QEAAAAADwX9fwAAAAAVBf3/HwAAAAMFBQAAAAAABwR9AAAAAAAMBf0PAAAAABIF/f8DAAAAFwX9/38AAAAFBR0AAAAAAAgE/QAAAAAADgX9PwAAAAAUBf3/DwAAAAIFAQAAABAABwR9AAAAAAALBf0HAAAAABEF/f8BAAAAFgX9/z8AAAAEBQ0AAAAQAAgE/QAAAAAADQX9HwAAAAATBf3/BwAAAAEFAQAAABAABgQ9AAAAAAAKBf0DAAAAABAF/f8AAAAAHAX9//8PAAAbBf3//wcAABoF/f//AwAAGQX9//8BAAAYBf3//wBBkBkLhgQBAAEBBgAAAAAAAAYDAAAAAAAABAQAAAAgAAAFBQAAAAAAAAUGAAAAAAAABQgAAAAAAAAFCQAAAAAAAAULAAAAAAAABg0AAAAAAAAGEAAAAAAAAAYTAAAAAAAABhYAAAAAAAAGGQAAAAAAAAYcAAAAAAAABh8AAAAAAAAGIgAAAAAAAQYlAAAAAAABBikAAAAAAAIGLwAAAAAAAwY7AAAAAAAEBlMAAAAAAAcGgwAAAAAACQYDAgAAEAAABAQAAAAAAAAEBQAAACAAAAUGAAAAAAAABQcAAAAgAAAFCQAAAAAAAAUKAAAAAAAABgwAAAAAAAAGDwAAAAAAAAYSAAAAAAAABhUAAAAAAAAGGAAAAAAAAAYbAAAAAAAABh4AAAAAAAAGIQAAAAAAAQYjAAAAAAABBicAAAAAAAIGKwAAAAAAAwYzAAAAAAAEBkMAAAAAAAUGYwAAAAAACAYDAQAAIAAABAQAAAAwAAAEBAAAABAAAAQFAAAAIAAABQcAAAAgAAAFCAAAACAAAAUKAAAAIAAABQsAAAAAAAAGDgAAAAAAAAYRAAAAAAAABhQAAAAAAAAGFwAAAAAAAAYaAAAAAAAABh0AAAAAAAAGIAAAAAAAEAYDAAEAAAAPBgOAAAAAAA4GA0AAAAAADQYDIAAAAAAMBgMQAAAAAAsGAwgAAAAACgYDBABBpB0L2QEBAAAAAwAAAAcAAAAPAAAAHwAAAD8AAAB/AAAA/wAAAP8BAAD/AwAA/wcAAP8PAAD/HwAA/z8AAP9/AAD//wAA//8BAP//AwD//wcA//8PAP//HwD//z8A//9/AP///wD///8B////A////wf///8P////H////z////9/AAAAAAEAAAACAAAABAAAAAAAAAACAAAABAAAAAgAAAAAAAAAAQAAAAIAAAABAAAABAAAAAQAAAAEAAAABAAAAAgAAAAIAAAACAAAAAcAAAAIAAAACQAAAAoAAAALAEGgIAsDwBBQ";var of=new WeakMap,af=0,lf,ur=class s extends zn{constructor(e){super(e),this.transcoderPath="",this.transcoderBinary=null,this.transcoderPending=null,this.workerPool=new hc,this.workerSourceURL="",this.workerConfig=null,typeof MSC_TRANSCODER<"u"&&console.warn('THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.')}setTranscoderPath(e){return this.transcoderPath=e,this}setWorkerLimit(e){return this.workerPool.setWorkerLimit(e),this}detectSupport(e){return e.isWebGPURenderer===!0?this.workerConfig={astcSupported:e.hasFeature("texture-compression-astc"),etc1Supported:!1,etc2Supported:e.hasFeature("texture-compression-etc2"),dxtSupported:e.hasFeature("texture-compression-bc"),bptcSupported:!1,pvrtcSupported:!1}:(this.workerConfig={astcSupported:e.extensions.has("WEBGL_compressed_texture_astc"),etc1Supported:e.extensions.has("WEBGL_compressed_texture_etc1"),etc2Supported:e.extensions.has("WEBGL_compressed_texture_etc"),dxtSupported:e.extensions.has("WEBGL_compressed_texture_s3tc"),bptcSupported:e.extensions.has("EXT_texture_compression_bptc"),pvrtcSupported:e.extensions.has("WEBGL_compressed_texture_pvrtc")||e.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")},e.capabilities.isWebGL2&&(this.workerConfig.etc1Supported=!1)),this}init(){if(!this.transcoderPending){let e=new Zn(this.manager);e.setPath(this.transcoderPath),e.setWithCredentials(this.withCredentials);let t=e.loadAsync("basis_transcoder.js"),i=new Zn(this.manager);i.setPath(this.transcoderPath),i.setResponseType("arraybuffer"),i.setWithCredentials(this.withCredentials);let n=i.loadAsync("basis_transcoder.wasm");this.transcoderPending=Promise.all([t,n]).then(([r,o])=>{let a=s.BasisWorker.toString(),l=["/* constants */","let _EngineFormat = "+JSON.stringify(s.EngineFormat),"let _TranscoderFormat = "+JSON.stringify(s.TranscoderFormat),"let _BasisFormat = "+JSON.stringify(s.BasisFormat),"/* basis_transcoder.js */",r,"/* worker */",a.substring(a.indexOf("{")+1,a.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([l])),this.transcoderBinary=o,this.workerPool.setWorkerCreator(()=>{let c=new Worker(this.workerSourceURL),h=this.transcoderBinary.slice(0);return c.postMessage({type:"init",config:this.workerConfig,transcoderBinary:h},[h]),c})}),af>0&&console.warn("THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."),af++}return this.transcoderPending}load(e,t,i,n){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");let r=new Zn(this.manager);r.setResponseType("arraybuffer"),r.setWithCredentials(this.withCredentials),r.load(e,o=>{if(of.has(o))return of.get(o).promise.then(t).catch(n);this._createTexture(o).then(a=>t?t(a):null).catch(n)},i,n)}_createTextureFrom(e,t){let{faces:i,width:n,height:r,format:o,type:a,error:l,dfdFlags:c}=e;if(a==="error")return Promise.reject(l);let h;if(t.faceCount===6)h=new Ol(i,o,Ot);else{let u=i[0].mipmaps;h=t.layerCount>1?new Nl(u,n,r,t.layerCount,o,Ot):new kr(u,n,r,o,Ot)}return h.minFilter=i[0].mipmaps.length===1?Et:pi,h.magFilter=Et,h.generateMipmaps=!1,h.needsUpdate=!0,h.colorSpace=um(t),h.premultiplyAlpha=!!(c&1),h}async _createTexture(e,t={}){let i=Xp(new Uint8Array(e));if(i.vkFormat!==0)return N1(i);let n=t,r=this.init().then(()=>this.workerPool.postMessage({type:"transcode",buffer:e,taskConfig:n},[e])).then(o=>this._createTextureFrom(o.data,i));return of.set(e,{promise:r}),r}dispose(){return this.workerPool.dispose(),this.workerSourceURL&&URL.revokeObjectURL(this.workerSourceURL),af--,this}};ur.BasisFormat={ETC1S:0,UASTC_4x4:1};ur.TranscoderFormat={ETC1:0,ETC2:1,BC1:2,BC3:3,BC4:4,BC5:5,BC7_M6_OPAQUE_ONLY:6,BC7_M5:7,PVRTC1_4_RGB:8,PVRTC1_4_RGBA:9,ASTC_4x4:10,ATC_RGB:11,ATC_RGBA_INTERPOLATED_ALPHA:12,RGBA32:13,RGB565:14,BGR565:15,RGBA4444:16};ur.EngineFormat={RGBAFormat:Nt,RGBA_ASTC_4x4_Format:dl,RGBA_BPTC_Format:bo,RGBA_ETC2_EAC_Format:fl,RGBA_PVRTC_4BPPV1_Format:hl,RGBA_S3TC_DXT5_Format:Io,RGB_ETC1_Format:jl,RGB_ETC2_Format:ul,RGB_PVRTC_4BPPV1_Format:cl,RGB_S3TC_DXT1_Format:To};ur.BasisWorker=function(){let s,e,t,i=_EngineFormat,n=_TranscoderFormat,r=_BasisFormat;self.addEventListener("message",function(m){let p=m.data;switch(p.type){case"init":s=p.config,o(p.transcoderBinary);break;case"transcode":e.then(()=>{try{let{faces:A,buffers:g,width:v,height:_,hasAlpha:y,format:S,dfdFlags:C}=a(p.buffer);self.postMessage({type:"transcode",id:p.id,faces:A,width:v,height:_,hasAlpha:y,format:S,dfdFlags:C},g)}catch(A){console.error(A),self.postMessage({type:"error",id:p.id,error:A.message})}});break}});function o(m){e=new Promise(p=>{t={wasmBinary:m,onRuntimeInitialized:p},BASIS(t)}).then(()=>{t.initializeBasis(),t.KTX2File===void 0&&console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.")})}function a(m){let p=new t.KTX2File(new Uint8Array(m));function A(){p.close(),p.delete()}if(!p.isValid())throw A(),new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");let g=p.isUASTC()?r.UASTC_4x4:r.ETC1S,v=p.getWidth(),_=p.getHeight(),y=p.getLayers()||1,S=p.getLevels(),C=p.getFaces(),E=p.getHasAlpha(),b=p.getDFDFlags(),{transcoderFormat:x,engineFormat:M}=u(g,v,_,E);if(!v||!_||!S)throw A(),new Error("THREE.KTX2Loader:	Invalid texture");if(!p.startTranscoding())throw A(),new Error("THREE.KTX2Loader: .startTranscoding failed");let N=[],R=[];for(let z=0;z<C;z++){let I=[];for(let U=0;U<S;U++){let P=[],X,q;for(let V=0;V<y;V++){let D=p.getImageLevelInfo(U,V,z);z===0&&U===0&&V===0&&(D.origWidth%4!==0||D.origHeight%4!==0)&&console.warn("THREE.KTX2Loader: ETC1S and UASTC textures should use multiple-of-four dimensions."),S>1?(X=D.origWidth,q=D.origHeight):(X=D.width,q=D.height);let H=new Uint8Array(p.getImageTranscodedSizeInBytes(U,V,0,x));if(!p.transcodeImage(H,U,V,z,x,0,-1,-1))throw A(),new Error("THREE.KTX2Loader: .transcodeImage failed.");P.push(H)}let Q=d(P);I.push({data:Q,width:X,height:q}),R.push(Q.buffer)}N.push({mipmaps:I,width:v,height:_,format:M})}return A(),{faces:N,buffers:R,width:v,height:_,hasAlpha:E,format:M,dfdFlags:b}}let l=[{if:"astcSupported",basisFormat:[r.UASTC_4x4],transcoderFormat:[n.ASTC_4x4,n.ASTC_4x4],engineFormat:[i.RGBA_ASTC_4x4_Format,i.RGBA_ASTC_4x4_Format],priorityETC1S:1/0,priorityUASTC:1,needsPowerOfTwo:!1},{if:"bptcSupported",basisFormat:[r.ETC1S,r.UASTC_4x4],transcoderFormat:[n.BC7_M5,n.BC7_M5],engineFormat:[i.RGBA_BPTC_Format,i.RGBA_BPTC_Format],priorityETC1S:3,priorityUASTC:2,needsPowerOfTwo:!1},{if:"dxtSupported",basisFormat:[r.ETC1S,r.UASTC_4x4],transcoderFormat:[n.BC1,n.BC3],engineFormat:[i.RGB_S3TC_DXT1_Format,i.RGBA_S3TC_DXT5_Format],priorityETC1S:4,priorityUASTC:5,needsPowerOfTwo:!1},{if:"etc2Supported",basisFormat:[r.ETC1S,r.UASTC_4x4],transcoderFormat:[n.ETC1,n.ETC2],engineFormat:[i.RGB_ETC2_Format,i.RGBA_ETC2_EAC_Format],priorityETC1S:1,priorityUASTC:3,needsPowerOfTwo:!1},{if:"etc1Supported",basisFormat:[r.ETC1S,r.UASTC_4x4],transcoderFormat:[n.ETC1],engineFormat:[i.RGB_ETC1_Format],priorityETC1S:2,priorityUASTC:4,needsPowerOfTwo:!1},{if:"pvrtcSupported",basisFormat:[r.ETC1S,r.UASTC_4x4],transcoderFormat:[n.PVRTC1_4_RGB,n.PVRTC1_4_RGBA],engineFormat:[i.RGB_PVRTC_4BPPV1_Format,i.RGBA_PVRTC_4BPPV1_Format],priorityETC1S:5,priorityUASTC:6,needsPowerOfTwo:!0}],c=l.sort(function(m,p){return m.priorityETC1S-p.priorityETC1S}),h=l.sort(function(m,p){return m.priorityUASTC-p.priorityUASTC});function u(m,p,A,g){let v,_,y=m===r.ETC1S?c:h;for(let S=0;S<y.length;S++){let C=y[S];if(s[C.if]&&C.basisFormat.includes(m)&&!(g&&C.transcoderFormat.length<2)&&!(C.needsPowerOfTwo&&!(f(p)&&f(A))))return v=C.transcoderFormat[g?1:0],_=C.engineFormat[g?1:0],{transcoderFormat:v,engineFormat:_}}return console.warn("THREE.KTX2Loader: No suitable compressed texture format found. Decoding to RGBA32."),v=n.RGBA32,_=i.RGBAFormat,{transcoderFormat:v,engineFormat:_}}function f(m){return m<=2?!0:(m&m-1)===0&&m!==0}function d(m){if(m.length===1)return m[0];let p=0;for(let v=0;v<m.length;v++){let _=m[v];p+=_.byteLength}let A=new Uint8Array(p),g=0;for(let v=0;v<m.length;v++){let _=m[v];A.set(_,g),g+=_.byteLength}return A}};var P1=new Set([Nt,zr,Gr]),cf={[109]:Nt,[97]:Nt,[37]:Nt,[43]:Nt,[103]:zr,[83]:zr,[16]:zr,[22]:zr,[100]:Gr,[76]:Gr,[15]:Gr,[9]:Gr,[166]:Uo,[165]:Uo},hf={[109]:mn,[97]:on,[37]:Ot,[43]:Ot,[103]:mn,[83]:on,[16]:Ot,[22]:Ot,[100]:mn,[76]:on,[15]:Ot,[9]:Ot,[166]:Ot,[165]:Ot};async function N1(s){let{vkFormat:e}=s;if(cf[e]===void 0)throw new Error("THREE.KTX2Loader: Unsupported vkFormat.");let t;s.supercompressionScheme===2&&(lf||(lf=new Promise(async r=>{let o=new uc;await o.init(),r(o)})),t=await lf);let i=[];for(let r=0;r<s.levels.length;r++){let o=Math.max(1,s.pixelWidth>>r),a=Math.max(1,s.pixelHeight>>r),l=s.pixelDepth?Math.max(1,s.pixelDepth>>r):0,c=s.levels[r],h;if(s.supercompressionScheme===0)h=c.levelData;else if(s.supercompressionScheme===2)h=t.decode(c.levelData,c.uncompressedByteLength);else throw new Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");let u;hf[e]===mn?u=new Float32Array(h.buffer,h.byteOffset,h.byteLength/Float32Array.BYTES_PER_ELEMENT):hf[e]===on?u=new Uint16Array(h.buffer,h.byteOffset,h.byteLength/Uint16Array.BYTES_PER_ELEMENT):u=h,i.push({data:u,width:o,height:a,depth:l})}let n;if(P1.has(cf[e]))n=s.pixelDepth===0?new zs(i[0].data,s.pixelWidth,s.pixelHeight):new Po(i[0].data,s.pixelWidth,s.pixelHeight,s.pixelDepth);else{if(s.pixelDepth>0)throw new Error("THREE.KTX2Loader: Unsupported pixelDepth.");n=new kr(i,s.pixelWidth,s.pixelHeight)}return n.mipmaps=i,n.type=hf[e],n.format=cf[e],n.colorSpace=um(s),n.needsUpdate=!0,Promise.resolve(n)}function um(s){let e=s.dataFormatDescriptor[0];return e.colorPrimaries===1?e.transferFunction===2?at:Ct:e.colorPrimaries===10?e.transferFunction===2?jo:Ws:e.colorPrimaries===0?pn:(console.warn(`THREE.KTX2Loader: Unsupported color primaries, "${e.colorPrimaries}"`),pn)}function O1(){var s=Object.create(null);function e(n,r){var o=n.id,a=n.name,l=n.dependencies;l===void 0&&(l=[]);var c=n.init;c===void 0&&(c=function(){});var h=n.getTransferables;if(h===void 0&&(h=null),!s[o])try{l=l.map(function(f){return f&&f.isWorkerModule&&(e(f,function(d){if(d instanceof Error)throw d}),f=s[f.id].value),f}),c=i("<"+a+">.init",c),h&&(h=i("<"+a+">.getTransferables",h));var u=null;typeof c=="function"?u=c.apply(void 0,l):console.error("worker module init function failed to rehydrate"),s[o]={id:o,value:u,getTransferables:h},r(u)}catch(f){f&&f.noLog||console.error(f),r(f)}}function t(n,r){var o,a=n.id,l=n.args;(!s[a]||typeof s[a].value!="function")&&r(new Error("Worker module "+a+": not found or its 'init' did not return a function"));try{var c=(o=s[a]).value.apply(o,l);c&&typeof c.then=="function"?c.then(h,function(u){return r(u instanceof Error?u:new Error(""+u))}):h(c)}catch(u){r(u)}function h(u){try{var f=s[a].getTransferables&&s[a].getTransferables(u);(!f||!Array.isArray(f)||!f.length)&&(f=void 0),r(u,f)}catch(d){console.error(d),r(d)}}}function i(n,r){var o=void 0;self.troikaDefine=function(l){return o=l};var a=URL.createObjectURL(new Blob(["/** "+n.replace(/\*/g,"")+` **/

troikaDefine(
`+r+`
)`],{type:"application/javascript"}));try{importScripts(a)}catch(l){console.error(l)}return URL.revokeObjectURL(a),delete self.troikaDefine,o}self.addEventListener("message",function(n){var r=n.data,o=r.messageId,a=r.action,l=r.data;try{a==="registerModule"&&e(l,function(c){c instanceof Error?postMessage({messageId:o,success:!1,error:c.message}):postMessage({messageId:o,success:!0,result:{isCallable:typeof c=="function"}})}),a==="callModule"&&t(l,function(c,h){c instanceof Error?postMessage({messageId:o,success:!1,error:c.message}):postMessage({messageId:o,success:!0,result:c},h||void 0)})}catch(c){postMessage({messageId:o,success:!1,error:c.stack})}})}function k1(s){var e=function(){for(var t=[],i=arguments.length;i--;)t[i]=arguments[i];return e._getInitResult().then(function(n){if(typeof n=="function")return n.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=s.dependencies,i=s.init;t=Array.isArray(t)?t.map(function(r){return r&&(r=r.onMainThread||r,r._getInitResult&&(r=r._getInitResult())),r}):[];var n=Promise.all(t).then(function(r){return i.apply(null,r)});return e._getInitResult=function(){return n},n},e}var dm=function(){var s=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),s=!0}catch(t){typeof process<"u",console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return dm=function(){return s},s},Q1=0,G1=0,uf=!1,ta=Object.create(null),na=Object.create(null),ff=Object.create(null);function Wr(s){if((!s||typeof s.init!="function")&&!uf)throw new Error("requires `options.init` function");var e=s.dependencies,t=s.init,i=s.getTransferables,n=s.workerId,r=k1(s);n==null&&(n="#default");var o="workerModule"+ ++Q1,a=s.name||o,l=null;e=e&&e.map(function(h){return typeof h=="function"&&!h.workerModuleData&&(uf=!0,h=Wr({workerId:n,name:"<"+a+"> function dependency: "+h.name,init:`function(){return (
`+fc(h)+`
)}`}),uf=!1),h&&h.workerModuleData&&(h=h.workerModuleData),h});function c(){for(var h=[],u=arguments.length;u--;)h[u]=arguments[u];if(!dm())return r.apply(void 0,h);if(!l){l=fm(n,"registerModule",c.workerModuleData);var f=function(){l=null,na[n].delete(f)};(na[n]||(na[n]=new Set)).add(f)}return l.then(function(d){var m=d.isCallable;if(m)return fm(n,"callModule",{id:o,args:h});throw new Error("Worker module function was called but `init` did not return a callable function")})}return c.workerModuleData={isWorkerModule:!0,id:o,name:a,dependencies:e,init:fc(t),getTransferables:i&&fc(i)},c.onMainThread=r,c}function Am(s){na[s]&&na[s].forEach(function(e){e()}),ta[s]&&(ta[s].terminate(),delete ta[s])}function fc(s){var e=s.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function z1(s){var e=ta[s];if(!e){var t=fc(O1);e=ta[s]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+s.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(i){var n=i.data,r=n.messageId,o=ff[r];if(!o)throw new Error("WorkerModule response with empty or unknown messageId");delete ff[r],o(n)}}return e}function fm(s,e,t){return new Promise(function(i,n){var r=++G1;ff[r]=function(o){o.success?i(o.result):n(new Error("Error in worker "+e+" call: "+o.error))},z1(s).postMessage({messageId:r,action:e,data:t})})}function df(){var s=function(e){function t(Q,V,D,H,L,k,W,ee){var J=1-W;ee.x=J*J*Q+2*J*W*D+W*W*L,ee.y=J*J*V+2*J*W*H+W*W*k}function i(Q,V,D,H,L,k,W,ee,J,re){var pe=1-J;re.x=pe*pe*pe*Q+3*pe*pe*J*D+3*pe*J*J*L+J*J*J*W,re.y=pe*pe*pe*V+3*pe*pe*J*H+3*pe*J*J*k+J*J*J*ee}function n(Q,V){for(var D=/([MLQCZ])([^MLQCZ]*)/g,H,L,k,W,ee;H=D.exec(Q);){var J=H[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(re){return parseFloat(re)});switch(H[1]){case"M":W=L=J[0],ee=k=J[1];break;case"L":(J[0]!==W||J[1]!==ee)&&V("L",W,ee,W=J[0],ee=J[1]);break;case"Q":{V("Q",W,ee,W=J[2],ee=J[3],J[0],J[1]);break}case"C":{V("C",W,ee,W=J[4],ee=J[5],J[0],J[1],J[2],J[3]);break}case"Z":(W!==L||ee!==k)&&V("L",W,ee,L,k);break}}}function r(Q,V,D){D===void 0&&(D=16);var H={x:0,y:0};n(Q,function(L,k,W,ee,J,re,pe,ge,fe){switch(L){case"L":V(k,W,ee,J);break;case"Q":{for(var O=k,Oe=W,xe=1;xe<D;xe++)t(k,W,re,pe,ee,J,xe/(D-1),H),V(O,Oe,H.x,H.y),O=H.x,Oe=H.y;break}case"C":{for(var de=k,ue=W,be=1;be<D;be++)i(k,W,re,pe,ge,fe,ee,J,be/(D-1),H),V(de,ue,H.x,H.y),de=H.x,ue=H.y;break}}})}var o="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",a="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",l=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function h(Q,V){var D=Q.getContext?Q.getContext("webgl",c):Q,H=l.get(D);if(!H){let pe=function(de){var ue=k[de];if(!ue&&(ue=k[de]=D.getExtension(de),!ue))throw new Error(de+" not supported");return ue},ge=function(de,ue){var be=D.createShader(ue);return D.shaderSource(be,de),D.compileShader(be),be},fe=function(de,ue,be,ae){if(!W[de]){var w={},T={},F=D.createProgram();D.attachShader(F,ge(ue,D.VERTEX_SHADER)),D.attachShader(F,ge(be,D.FRAGMENT_SHADER)),D.linkProgram(F),W[de]={program:F,transaction:function($){D.useProgram(F),$({setUniform:function(ce,_e){for(var he=[],me=arguments.length-2;me-- >0;)he[me]=arguments[me+2];var Ee=T[_e]||(T[_e]=D.getUniformLocation(F,_e));D["uniform"+ce].apply(D,[Ee].concat(he))},setAttribute:function(ce,_e,he,me,Ee){var oe=w[ce];oe||(oe=w[ce]={buf:D.createBuffer(),loc:D.getAttribLocation(F,ce),data:null}),D.bindBuffer(D.ARRAY_BUFFER,oe.buf),D.vertexAttribPointer(oe.loc,_e,D.FLOAT,!1,0,0),D.enableVertexAttribArray(oe.loc),L?D.vertexAttribDivisor(oe.loc,me):pe("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(oe.loc,me),Ee!==oe.data&&(D.bufferData(D.ARRAY_BUFFER,Ee,he),oe.data=Ee)}})}}}W[de].transaction(ae)},O=function(de,ue){J++;try{D.activeTexture(D.TEXTURE0+J);var be=ee[de];be||(be=ee[de]=D.createTexture(),D.bindTexture(D.TEXTURE_2D,be),D.texParameteri(D.TEXTURE_2D,D.TEXTURE_MIN_FILTER,D.NEAREST),D.texParameteri(D.TEXTURE_2D,D.TEXTURE_MAG_FILTER,D.NEAREST)),D.bindTexture(D.TEXTURE_2D,be),ue(be,J)}finally{J--}},Oe=function(de,ue,be){var ae=D.createFramebuffer();re.push(ae),D.bindFramebuffer(D.FRAMEBUFFER,ae),D.activeTexture(D.TEXTURE0+ue),D.bindTexture(D.TEXTURE_2D,de),D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,de,0);try{be(ae)}finally{D.deleteFramebuffer(ae),D.bindFramebuffer(D.FRAMEBUFFER,re[--re.length-1]||null)}},xe=function(){k={},W={},ee={},J=-1,re.length=0};var L=typeof WebGL2RenderingContext<"u"&&D instanceof WebGL2RenderingContext,k={},W={},ee={},J=-1,re=[];D.canvas.addEventListener("webglcontextlost",function(de){xe(),de.preventDefault()},!1),l.set(D,H={gl:D,isWebGL2:L,getExtension:pe,withProgram:fe,withTexture:O,withTextureFramebuffer:Oe,handleContextLoss:xe})}V(H)}function u(Q,V,D,H,L,k,W,ee){W===void 0&&(W=15),ee===void 0&&(ee=null),h(Q,function(J){var re=J.gl,pe=J.withProgram,ge=J.withTexture;ge("copy",function(fe,O){re.texImage2D(re.TEXTURE_2D,0,re.RGBA,L,k,0,re.RGBA,re.UNSIGNED_BYTE,V),pe("copy",o,a,function(Oe){var xe=Oe.setUniform,de=Oe.setAttribute;de("aUV",2,re.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),xe("1i","image",O),re.bindFramebuffer(re.FRAMEBUFFER,ee||null),re.disable(re.BLEND),re.colorMask(W&8,W&4,W&2,W&1),re.viewport(D,H,L,k),re.scissor(D,H,L,k),re.drawArrays(re.TRIANGLES,0,3)})})})}function f(Q,V,D){var H=Q.width,L=Q.height;h(Q,function(k){var W=k.gl,ee=new Uint8Array(H*L*4);W.readPixels(0,0,H,L,W.RGBA,W.UNSIGNED_BYTE,ee),Q.width=V,Q.height=D,u(W,ee,0,0,H,L)})}var d=Object.freeze({__proto__:null,withWebGLContext:h,renderImageData:u,resizeWebGLCanvasWithoutClearing:f});function m(Q,V,D,H,L,k){k===void 0&&(k=1);var W=new Uint8Array(Q*V),ee=H[2]-H[0],J=H[3]-H[1],re=[];r(D,function(de,ue,be,ae){re.push({x1:de,y1:ue,x2:be,y2:ae,minX:Math.min(de,be),minY:Math.min(ue,ae),maxX:Math.max(de,be),maxY:Math.max(ue,ae)})}),re.sort(function(de,ue){return de.maxX-ue.maxX});for(var pe=0;pe<Q;pe++)for(var ge=0;ge<V;ge++){var fe=Oe(H[0]+ee*(pe+.5)/Q,H[1]+J*(ge+.5)/V),O=Math.pow(1-Math.abs(fe)/L,k)/2;fe<0&&(O=1-O),O=Math.max(0,Math.min(255,Math.round(O*255))),W[ge*Q+pe]=O}return W;function Oe(de,ue){for(var be=1/0,ae=1/0,w=re.length;w--;){var T=re[w];if(T.maxX+ae<=de)break;if(de+ae>T.minX&&ue-ae<T.maxY&&ue+ae>T.minY){var F=g(de,ue,T.x1,T.y1,T.x2,T.y2);F<be&&(be=F,ae=Math.sqrt(be))}}return xe(de,ue)&&(ae=-ae),ae}function xe(de,ue){for(var be=0,ae=re.length;ae--;){var w=re[ae];if(w.maxX<=de)break;var T=w.y1>ue!=w.y2>ue&&de<(w.x2-w.x1)*(ue-w.y1)/(w.y2-w.y1)+w.x1;T&&(be+=w.y1<w.y2?1:-1)}return be!==0}}function p(Q,V,D,H,L,k,W,ee,J,re){k===void 0&&(k=1),ee===void 0&&(ee=0),J===void 0&&(J=0),re===void 0&&(re=0),A(Q,V,D,H,L,k,W,null,ee,J,re)}function A(Q,V,D,H,L,k,W,ee,J,re,pe){k===void 0&&(k=1),J===void 0&&(J=0),re===void 0&&(re=0),pe===void 0&&(pe=0);for(var ge=m(Q,V,D,H,L,k),fe=new Uint8Array(ge.length*4),O=0;O<ge.length;O++)fe[O*4+pe]=ge[O];u(W,fe,J,re,Q,V,1<<3-pe,ee)}function g(Q,V,D,H,L,k){var W=L-D,ee=k-H,J=W*W+ee*ee,re=J?Math.max(0,Math.min(1,((Q-D)*W+(V-H)*ee)/J)):0,pe=Q-(D+re*W),ge=V-(H+re*ee);return pe*pe+ge*ge}var v=Object.freeze({__proto__:null,generate:m,generateIntoCanvas:p,generateIntoFramebuffer:A}),_="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",y="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",S="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",C=new Float32Array([0,0,2,0,0,2]),E=null,b=!1,x={},M=new WeakMap;function N(Q){if(!b&&!U(Q))throw new Error("WebGL generation not supported")}function R(Q,V,D,H,L,k,W){if(k===void 0&&(k=1),W===void 0&&(W=null),!W&&(W=E,!W)){var ee=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!ee)throw new Error("OffscreenCanvas or DOM canvas not supported");W=E=ee.getContext("webgl",{depth:!1})}N(W);var J=new Uint8Array(Q*V*4);h(W,function(fe){var O=fe.gl,Oe=fe.withTexture,xe=fe.withTextureFramebuffer;Oe("readable",function(de,ue){O.texImage2D(O.TEXTURE_2D,0,O.RGBA,Q,V,0,O.RGBA,O.UNSIGNED_BYTE,null),xe(de,ue,function(be){I(Q,V,D,H,L,k,O,be,0,0,0),O.readPixels(0,0,Q,V,O.RGBA,O.UNSIGNED_BYTE,J)})})});for(var re=new Uint8Array(Q*V),pe=0,ge=0;pe<J.length;pe+=4)re[ge++]=J[pe];return re}function z(Q,V,D,H,L,k,W,ee,J,re){k===void 0&&(k=1),ee===void 0&&(ee=0),J===void 0&&(J=0),re===void 0&&(re=0),I(Q,V,D,H,L,k,W,null,ee,J,re)}function I(Q,V,D,H,L,k,W,ee,J,re,pe){k===void 0&&(k=1),J===void 0&&(J=0),re===void 0&&(re=0),pe===void 0&&(pe=0),N(W);var ge=[];r(D,function(fe,O,Oe,xe){ge.push(fe,O,Oe,xe)}),ge=new Float32Array(ge),h(W,function(fe){var O=fe.gl,Oe=fe.isWebGL2,xe=fe.getExtension,de=fe.withProgram,ue=fe.withTexture,be=fe.withTextureFramebuffer,ae=fe.handleContextLoss;if(ue("rawDistances",function(w,T){(Q!==w._lastWidth||V!==w._lastHeight)&&O.texImage2D(O.TEXTURE_2D,0,O.RGBA,w._lastWidth=Q,w._lastHeight=V,0,O.RGBA,O.UNSIGNED_BYTE,null),de("main",_,y,function(F){var se=F.setAttribute,$=F.setUniform,ie=!Oe&&xe("ANGLE_instanced_arrays"),ce=!Oe&&xe("EXT_blend_minmax");se("aUV",2,O.STATIC_DRAW,0,C),se("aLineSegment",4,O.DYNAMIC_DRAW,1,ge),$.apply(void 0,["4f","uGlyphBounds"].concat(H)),$("1f","uMaxDistance",L),$("1f","uExponent",k),be(w,T,function(_e){O.enable(O.BLEND),O.colorMask(!0,!0,!0,!0),O.viewport(0,0,Q,V),O.scissor(0,0,Q,V),O.blendFunc(O.ONE,O.ONE),O.blendEquationSeparate(O.FUNC_ADD,Oe?O.MAX:ce.MAX_EXT),O.clear(O.COLOR_BUFFER_BIT),Oe?O.drawArraysInstanced(O.TRIANGLES,0,3,ge.length/4):ie.drawArraysInstancedANGLE(O.TRIANGLES,0,3,ge.length/4)})}),de("post",o,S,function(F){F.setAttribute("aUV",2,O.STATIC_DRAW,0,C),F.setUniform("1i","tex",T),O.bindFramebuffer(O.FRAMEBUFFER,ee),O.disable(O.BLEND),O.colorMask(pe===0,pe===1,pe===2,pe===3),O.viewport(J,re,Q,V),O.scissor(J,re,Q,V),O.drawArrays(O.TRIANGLES,0,3)})}),O.isContextLost())throw ae(),new Error("webgl context lost")})}function U(Q){var V=!Q||Q===E?x:Q.canvas||Q,D=M.get(V);if(D===void 0){b=!0;var H=null;try{var L=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],k=R(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,Q);D=k&&L.length===k.length&&k.every(function(W,ee){return W===L[ee]}),D||(H="bad trial run results",console.info(L,k))}catch(W){D=!1,H=W.message}H&&console.warn("WebGL SDF generation not supported:",H),b=!1,M.set(V,D)}return D}var P=Object.freeze({__proto__:null,generate:R,generateIntoCanvas:z,generateIntoFramebuffer:I,isSupported:U});function X(Q,V,D,H,L,k){L===void 0&&(L=Math.max(H[2]-H[0],H[3]-H[1])/2),k===void 0&&(k=1);try{return R.apply(P,arguments)}catch(W){return console.info("WebGL SDF generation failed, falling back to JS",W),m.apply(v,arguments)}}function q(Q,V,D,H,L,k,W,ee,J,re){L===void 0&&(L=Math.max(H[2]-H[0],H[3]-H[1])/2),k===void 0&&(k=1),ee===void 0&&(ee=0),J===void 0&&(J=0),re===void 0&&(re=0);try{return z.apply(P,arguments)}catch(pe){return console.info("WebGL SDF generation failed, falling back to JS",pe),p.apply(v,arguments)}}return e.forEachPathCommand=n,e.generate=X,e.generateIntoCanvas=q,e.javascript=v,e.pathToLineSegments=r,e.webgl=P,e.webglUtils=d,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return s}function pm(){var s=function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},i={},n={};i.L=1,n[1]="L",Object.keys(t).forEach(function(ae,w){i[ae]=1<<w+1,n[i[ae]]=ae}),Object.freeze(i);var r=i.LRI|i.RLI|i.FSI,o=i.L|i.R|i.AL,a=i.B|i.S|i.WS|i.ON|i.FSI|i.LRI|i.RLI|i.PDI,l=i.BN|i.RLE|i.LRE|i.RLO|i.LRO|i.PDF,c=i.S|i.WS|i.B|r|i.PDI|l,h=null;function u(){if(!h){h=new Map;var ae=0;for(var w in t)if(t.hasOwnProperty(w))for(var T=t[w],F="",se=void 0,$=!1,ie=0,ce=0;ce<=T.length+1;ce+=1){var _e=T[ce];if(_e!==","&&ce!==T.length)_e==="+"?($=!0,ie=ae=ie+parseInt(F,36),F=""):F+=_e;else{$?se=ae+parseInt(F,36):(ie=ae=ie+parseInt(F,36),se=ae),$=!1,F="",ie=se;for(var he=ae;he<se+1;he+=1)h.set(he,i[w])}}}}function f(ae){return u(),h.get(ae.codePointAt(0))||i.L}function d(ae){return n[f(ae)]}var m={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function p(ae,w){var T=36,F=0,se=new Map,$=w&&new Map,ie;return ae.split(",").forEach(function ce(_e){if(_e.indexOf("+")!==-1)for(var he=+_e;he--;)ce(ie);else{ie=_e;var me=_e.split(">"),Ee=me[0],oe=me[1];Ee=String.fromCodePoint(F+=parseInt(Ee,T)),oe=String.fromCodePoint(F+=parseInt(oe,T)),se.set(Ee,oe),w&&$.set(oe,Ee)}}),{map:se,reverseMap:$}}var A,g,v;function _(){if(!A){var ae=p(m.pairs,!0),w=ae.map,T=ae.reverseMap;A=w,g=T,v=p(m.canonical,!1).map}}function y(ae){return _(),A.get(ae)||null}function S(ae){return _(),g.get(ae)||null}function C(ae){return _(),v.get(ae)||null}var E=i.L,b=i.R,x=i.EN,M=i.ES,N=i.ET,R=i.AN,z=i.CS,I=i.B,U=i.S,P=i.ON,X=i.BN,q=i.NSM,Q=i.AL,V=i.LRO,D=i.RLO,H=i.LRE,L=i.RLE,k=i.PDF,W=i.LRI,ee=i.RLI,J=i.FSI,re=i.PDI;function pe(ae,w){for(var T=125,F=new Uint32Array(ae.length),se=0;se<ae.length;se++)F[se]=f(ae[se]);var $=new Map;function ie(Tn,si){var In=F[Tn];F[Tn]=si,$.set(In,$.get(In)-1),In&a&&$.set(a,$.get(a)-1),$.set(si,($.get(si)||0)+1),si&a&&$.set(a,($.get(a)||0)+1)}for(var ce=new Uint8Array(ae.length),_e=new Map,he=[],me=null,Ee=0;Ee<ae.length;Ee++)me||he.push(me={start:Ee,end:ae.length-1,level:w==="rtl"?1:w==="ltr"?0:Ud(Ee,!1)}),F[Ee]&I&&(me.end=Ee,me=null);for(var oe=L|H|D|V|r|re|k|I,He=function(Tn){return Tn+(Tn&1?1:2)},ke=function(Tn){return Tn+(Tn&1?2:1)},we=0;we<he.length;we++){me=he[we];var Se=[{_level:me.level,_override:0,_isolate:0}],Ae=void 0,Ne=0,Ge=0,je=0;$.clear();for(var Fe=me.start;Fe<=me.end;Fe++){var le=F[Fe];if(Ae=Se[Se.length-1],$.set(le,($.get(le)||0)+1),le&a&&$.set(a,($.get(a)||0)+1),le&oe)if(le&(L|H)){ce[Fe]=Ae._level;var G=(le===L?ke:He)(Ae._level);G<=T&&!Ne&&!Ge?Se.push({_level:G,_override:0,_isolate:0}):Ne||Ge++}else if(le&(D|V)){ce[Fe]=Ae._level;var Te=(le===D?ke:He)(Ae._level);Te<=T&&!Ne&&!Ge?Se.push({_level:Te,_override:le&D?b:E,_isolate:0}):Ne||Ge++}else if(le&r){le&J&&(le=Ud(Fe+1,!0)===1?ee:W),ce[Fe]=Ae._level,Ae._override&&ie(Fe,Ae._override);var ve=(le===ee?ke:He)(Ae._level);ve<=T&&Ne===0&&Ge===0?(je++,Se.push({_level:ve,_override:0,_isolate:1,_isolInitIndex:Fe})):Ne++}else if(le&re){if(Ne>0)Ne--;else if(je>0){for(Ge=0;!Se[Se.length-1]._isolate;)Se.pop();var Ie=Se[Se.length-1]._isolInitIndex;Ie!=null&&(_e.set(Ie,Fe),_e.set(Fe,Ie)),Se.pop(),je--}Ae=Se[Se.length-1],ce[Fe]=Ae._level,Ae._override&&ie(Fe,Ae._override)}else le&k?(Ne===0&&(Ge>0?Ge--:!Ae._isolate&&Se.length>1&&(Se.pop(),Ae=Se[Se.length-1])),ce[Fe]=Ae._level):le&I&&(ce[Fe]=me.level);else ce[Fe]=Ae._level,Ae._override&&le!==X&&ie(Fe,Ae._override)}for(var Re=[],Ve=null,De=me.start;De<=me.end;De++){var Ye=F[De];if(!(Ye&l)){var tt=ce[De],Ke=Ye&r,et=Ye===re;Ve&&tt===Ve._level?(Ve._end=De,Ve._endsWithIsolInit=Ke):Re.push(Ve={_start:De,_end:De,_level:tt,_startsWithPDI:et,_endsWithIsolInit:Ke})}}for(var xt=[],Rt=0;Rt<Re.length;Rt++){var Sn=Re[Rt];if(!Sn._startsWithPDI||Sn._startsWithPDI&&!_e.has(Sn._start)){for(var hn=[Ve=Sn],Jt=void 0;Ve&&Ve._endsWithIsolInit&&(Jt=_e.get(Ve._end))!=null;)for(var Ft=Rt+1;Ft<Re.length;Ft++)if(Re[Ft]._start===Jt){hn.push(Ve=Re[Ft]);break}for(var ht=[],Nn=0;Nn<hn.length;Nn++)for(var hs=hn[Nn],ne=hs._start;ne<=hs._end;ne++)ht.push(ne);for(var Ce=ce[ht[0]],B=me.level,Y=ht[0]-1;Y>=0;Y--)if(!(F[Y]&l)){B=ce[Y];break}var Z=ht[ht.length-1],te=ce[Z],j=me.level;if(!(F[Z]&r)){for(var Me=Z+1;Me<=me.end;Me++)if(!(F[Me]&l)){j=ce[Me];break}}xt.push({_seqIndices:ht,_sosType:Math.max(B,Ce)%2?b:E,_eosType:Math.max(j,te)%2?b:E})}}for(var Ue=0;Ue<xt.length;Ue++){var ze=xt[Ue],ye=ze._seqIndices,Xe=ze._sosType,qe=ze._eosType,We=ce[ye[0]]&1?b:E;if($.get(q))for(var rt=0;rt<ye.length;rt++){var Qt=ye[rt];if(F[Qt]&q){for(var mt=Xe,tn=rt-1;tn>=0;tn--)if(!(F[ye[tn]]&l)){mt=F[ye[tn]];break}ie(Qt,mt&(r|re)?P:mt)}}if($.get(x))for(var lt=0;lt<ye.length;lt++){var Pe=ye[lt];if(F[Pe]&x)for(var Gt=lt-1;Gt>=-1;Gt--){var ut=Gt===-1?Xe:F[ye[Gt]];if(ut&o){ut===Q&&ie(Pe,R);break}}}if($.get(Q))for(var un=0;un<ye.length;un++){var Er=ye[un];F[Er]&Q&&ie(Er,b)}if($.get(M)||$.get(z))for(var Cn=1;Cn<ye.length-1;Cn++){var Kn=ye[Cn];if(F[Kn]&(M|z)){for(var dt=0,fn=0,ii=Cn-1;ii>=0&&(dt=F[ye[ii]],!!(dt&l));ii--);for(var nn=Cn+1;nn<ye.length&&(fn=F[ye[nn]],!!(fn&l));nn++);dt===fn&&(F[Kn]===M?dt===x:dt&(x|R))&&ie(Kn,dt)}}if($.get(x))for(var Mn=0;Mn<ye.length;Mn++){var zc=ye[Mn];if(F[zc]&x){for(var Sr=Mn-1;Sr>=0&&F[ye[Sr]]&(N|l);Sr--)ie(ye[Sr],x);for(Mn++;Mn<ye.length&&F[ye[Mn]]&(N|l|x);Mn++)F[ye[Mn]]!==x&&ie(ye[Mn],x)}}if($.get(N)||$.get(M)||$.get(z))for(var co=0;co<ye.length;co++){var xd=ye[co];if(F[xd]&(N|M|z)){ie(xd,P);for(var Ta=co-1;Ta>=0&&F[ye[Ta]]&l;Ta--)ie(ye[Ta],P);for(var Ia=co+1;Ia<ye.length&&F[ye[Ia]]&l;Ia++)ie(ye[Ia],P)}}if($.get(x))for(var Hc=0,Ed=Xe;Hc<ye.length;Hc++){var Sd=ye[Hc],Vc=F[Sd];Vc&x?Ed===E&&ie(Sd,E):Vc&o&&(Ed=Vc)}if($.get(a)){var ho=b|x|R,Cd=ho|E,ba=[];{for(var us=[],fs=0;fs<ye.length;fs++)if(F[ye[fs]]&a){var uo=ae[ye[fs]],Md=void 0;if(y(uo)!==null)if(us.length<63)us.push({char:uo,seqIndex:fs});else break;else if((Md=S(uo))!==null)for(var fo=us.length-1;fo>=0;fo--){var Wc=us[fo].char;if(Wc===Md||Wc===S(C(uo))||y(C(Wc))===uo){ba.push([us[fo].seqIndex,fs]),us.length=fo;break}}}ba.sort(function(Tn,si){return Tn[0]-si[0]})}for(var Kc=0;Kc<ba.length;Kc++){for(var Td=ba[Kc],wa=Td[0],Xc=Td[1],Id=!1,ri=0,qc=wa+1;qc<Xc;qc++){var bd=ye[qc];if(F[bd]&Cd){Id=!0;var wd=F[bd]&ho?b:E;if(wd===We){ri=wd;break}}}if(Id&&!ri){ri=Xe;for(var Yc=wa-1;Yc>=0;Yc--){var Bd=ye[Yc];if(F[Bd]&Cd){var Rd=F[Bd]&ho?b:E;Rd!==We?ri=Rd:ri=We;break}}}if(ri){if(F[ye[wa]]=F[ye[Xc]]=ri,ri!==We){for(var Ao=wa+1;Ao<ye.length;Ao++)if(!(F[ye[Ao]]&l)){f(ae[ye[Ao]])&q&&(F[ye[Ao]]=ri);break}}if(ri!==We){for(var po=Xc+1;po<ye.length;po++)if(!(F[ye[po]]&l)){f(ae[ye[po]])&q&&(F[ye[po]]=ri);break}}}}for(var Ki=0;Ki<ye.length;Ki++)if(F[ye[Ki]]&a){for(var Dd=Ki,Jc=Ki,Zc=Xe,mo=Ki-1;mo>=0;mo--)if(F[ye[mo]]&l)Dd=mo;else{Zc=F[ye[mo]]&ho?b:E;break}for(var Ld=qe,go=Ki+1;go<ye.length;go++)if(F[ye[go]]&(a|l))Jc=go;else{Ld=F[ye[go]]&ho?b:E;break}for(var jc=Dd;jc<=Jc;jc++)F[ye[jc]]=Zc===Ld?Zc:We;Ki=Jc}}}for(var On=me.start;On<=me.end;On++){var $g=ce[On],Ba=F[On];if($g&1?Ba&(E|x|R)&&ce[On]++:Ba&b?ce[On]++:Ba&(R|x)&&(ce[On]+=2),Ba&l&&(ce[On]=On===0?me.level:ce[On-1]),On===me.end||f(ae[On])&(U|I))for(var Ra=On;Ra>=0&&f(ae[Ra])&c;Ra--)ce[Ra]=me.level}}return{levels:ce,paragraphs:he};function Ud(Tn,si){for(var In=Tn;In<ae.length;In++){var Xi=F[In];if(Xi&(b|Q))return 1;if(Xi&(I|E)||si&&Xi===re)return 0;if(Xi&r){var Fd=e0(In);In=Fd===-1?ae.length:Fd}}return 0}function e0(Tn){for(var si=1,In=Tn+1;In<ae.length;In++){var Xi=F[In];if(Xi&I)break;if(Xi&re){if(--si===0)return In}else Xi&r&&si++}return-1}}var ge="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",fe;function O(){if(!fe){var ae=p(ge,!0),w=ae.map,T=ae.reverseMap;T.forEach(function(F,se){w.set(se,F)}),fe=w}}function Oe(ae){return O(),fe.get(ae)||null}function xe(ae,w,T,F){var se=ae.length;T=Math.max(0,T==null?0:+T),F=Math.min(se-1,F==null?se-1:+F);for(var $=new Map,ie=T;ie<=F;ie++)if(w[ie]&1){var ce=Oe(ae[ie]);ce!==null&&$.set(ie,ce)}return $}function de(ae,w,T,F){var se=ae.length;T=Math.max(0,T==null?0:+T),F=Math.min(se-1,F==null?se-1:+F);var $=[];return w.paragraphs.forEach(function(ie){var ce=Math.max(T,ie.start),_e=Math.min(F,ie.end);if(ce<_e){for(var he=w.levels.slice(ce,_e+1),me=_e;me>=ce&&f(ae[me])&c;me--)he[me]=ie.level;for(var Ee=ie.level,oe=1/0,He=0;He<he.length;He++){var ke=he[He];ke>Ee&&(Ee=ke),ke<oe&&(oe=ke|1)}for(var we=Ee;we>=oe;we--)for(var Se=0;Se<he.length;Se++)if(he[Se]>=we){for(var Ae=Se;Se+1<he.length&&he[Se+1]>=we;)Se++;Se>Ae&&$.push([Ae+ce,Se+ce])}}}),$}function ue(ae,w,T,F){var se=be(ae,w,T,F),$=[].concat(ae);return se.forEach(function(ie,ce){$[ce]=(w.levels[ie]&1?Oe(ae[ie]):null)||ae[ie]}),$.join("")}function be(ae,w,T,F){for(var se=de(ae,w,T,F),$=[],ie=0;ie<ae.length;ie++)$[ie]=ie;return se.forEach(function(ce){for(var _e=ce[0],he=ce[1],me=$.slice(_e,he+1),Ee=me.length;Ee--;)$[he-Ee]=me[Ee]}),$}return e.closingToOpeningBracket=S,e.getBidiCharType=f,e.getBidiCharTypeName=d,e.getCanonicalBracket=C,e.getEmbeddingLevels=pe,e.getMirroredCharacter=Oe,e.getMirroredCharactersMap=xe,e.getReorderSegments=de,e.getReorderedIndices=be,e.getReorderedString=ue,e.openingToClosingBracket=y,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return s}var pf=/\bvoid\s+main\s*\(\s*\)\s*{/g;function Af(s){let e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(i,n){let r=Je[n];return r?Af(r):i}return s.replace(e,t)}var Zt=[];for(let s=0;s<256;s++)Zt[s]=(s<16?"0":"")+s.toString(16);function H1(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[s&255]+Zt[s>>8&255]+Zt[s>>16&255]+Zt[s>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toUpperCase()}var Kr=Object.assign||function(){let s=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let i=arguments[e];if(i)for(let n in i)Object.prototype.hasOwnProperty.call(i,n)&&(s[n]=i[n])}return s},V1=Date.now(),mm=new WeakMap,gm=new Map,W1=1e10;function dc(s,e){let t=Y1(e),i=mm.get(s);if(i||mm.set(s,i=Object.create(null)),i[t])return new i[t];let n=`_onBeforeCompile${t}`,r=function(c,h){s.onBeforeCompile.call(this,c,h);let u=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader,f=gm[u];if(!f){let d=K1(this,c,e,t);f=gm[u]=d}c.vertexShader=f.vertexShader,c.fragmentShader=f.fragmentShader,Kr(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-V1}}),this[n]&&this[n](c)},o=function(){return a(e.chained?s:s.clone())},a=function(c){let h=Object.create(c,l);return Object.defineProperty(h,"baseMaterial",{value:s}),Object.defineProperty(h,"id",{value:W1++}),h.uuid=H1(),h.uniforms=Kr({},c.uniforms,e.uniforms),h.defines=Kr({},c.defines,e.defines),h.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",h.extensions=Kr({},c.extensions,e.extensions),h._listeners=void 0,h},l={constructor:{value:o},isDerivedMaterial:{value:!0},type:{get:()=>s.type,set:c=>{s.type=c}},isDerivedFrom:{writable:!0,configurable:!0,value:function(c){let h=this.baseMaterial;return c===h||h.isDerivedMaterial&&h.isDerivedFrom(c)||!1}},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return s.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return r},set(c){this[n]=c}},copy:{writable:!0,configurable:!0,value:function(c){return s.copy.call(this,c),!s.isShaderMaterial&&!s.isDerivedMaterial&&(Kr(this.extensions,c.extensions),Kr(this.defines,c.defines),Kr(this.uniforms,gi.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){let c=new s.constructor;return a(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=dc(s.isDerivedMaterial?s.getDepthMaterial():new ko({depthPacking:_u}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=dc(s.isDerivedMaterial?s.getDistanceMaterial():new Qo,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){let{_depthMaterial:c,_distanceMaterial:h}=this;c&&c.dispose(),h&&h.dispose(),s.dispose.call(this)}}};return i[t]=o,new o}function K1(s,{vertexShader:e,fragmentShader:t},i,n){let{vertexDefs:r,vertexMainIntro:o,vertexMainOutro:a,vertexTransform:l,fragmentDefs:c,fragmentMainIntro:h,fragmentMainOutro:u,fragmentColorTransform:f,customRewriter:d,timeUniform:m}=i;if(r=r||"",o=o||"",a=a||"",c=c||"",h=h||"",u=u||"",(l||d)&&(e=Af(e)),(f||d)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=Af(t)),d){let p=d({vertexShader:e,fragmentShader:t});e=p.vertexShader,t=p.fragmentShader}if(f){let p=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,A=>(p.push(A),"")),u=`${f}
${p.join(`
`)}
${u}`}if(m){let p=`
uniform float ${m};
`;r=p+r,c=p+c}return l&&(e=`vec3 troika_position_${n};
vec3 troika_normal_${n};
vec2 troika_uv_${n};
${e}
`,r=`${r}
void troikaVertexTransform${n}() {
  vec3 position = troika_position_${n};
  vec3 normal = troika_normal_${n};
  vec2 uv = troika_uv_${n};
  ${l}
  troika_position_${n} = position;
  troika_normal_${n} = normal;
  troika_uv_${n} = uv;
}
`,o=`
troika_position_${n} = vec3(position);
troika_normal_${n} = vec3(normal);
troika_uv_${n} = vec2(uv);
troikaVertexTransform${n}();
${o}
`,e=e.replace(/\b(position|normal|uv)\b/g,(p,A,g,v)=>/\battribute\s+vec[23]\s+$/.test(v.substr(0,g))?A:`troika_${A}_${n}`),s.map&&s.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${n}`))),e=_m(e,n,r,o,a),t=_m(t,n,c,h,u),{vertexShader:e,fragmentShader:t}}function _m(s,e,t,i,n){return(i||n||t)&&(s=s.replace(pf,`
${t}
void troikaOrigMain${e}() {`),s+=`
void main() {
  ${i}
  troikaOrigMain${e}();
  ${n}
}`),s}function X1(s,e){return s==="uniforms"?void 0:typeof e=="function"?e.toString():e}var q1=0,vm=new Map;function Y1(s){let e=JSON.stringify(s,X1),t=vm.get(e);return t==null&&vm.set(e,t=++q1),t}function J1(){return typeof window>"u"&&(self.window=self),function(s){var e={parse:function(n){var r=e._bin,o=new Uint8Array(n);if(r.readASCII(o,0,4)=="ttcf"){var a=4;r.readUshort(o,a),a+=2,r.readUshort(o,a),a+=2;var l=r.readUint(o,a);a+=4;for(var c=[],h=0;h<l;h++){var u=r.readUint(o,a);a+=4,c.push(e._readFont(o,u))}return c}return[e._readFont(o,0)]},_readFont:function(n,r){var o=e._bin,a=r;o.readFixed(n,r),r+=4;var l=o.readUshort(n,r);r+=2,o.readUshort(n,r),r+=2,o.readUshort(n,r),r+=2,o.readUshort(n,r),r+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],h={_data:n,_offset:a},u={},f=0;f<l;f++){var d=o.readASCII(n,r,4);r+=4,o.readUint(n,r),r+=4;var m=o.readUint(n,r);r+=4;var p=o.readUint(n,r);r+=4,u[d]={offset:m,length:p}}for(f=0;f<c.length;f++){var A=c[f];u[A]&&(h[A.trim()]=e[A.trim()].parse(n,u[A].offset,u[A].length,h))}return h},_tabOffset:function(n,r,o){for(var a=e._bin,l=a.readUshort(n,o+4),c=o+12,h=0;h<l;h++){var u=a.readASCII(n,c,4);c+=4,a.readUint(n,c),c+=4;var f=a.readUint(n,c);if(c+=4,a.readUint(n,c),c+=4,u==r)return f}return 0}};e._bin={readFixed:function(n,r){return(n[r]<<8|n[r+1])+(n[r+2]<<8|n[r+3])/65540},readF2dot14:function(n,r){return e._bin.readShort(n,r)/16384},readInt:function(n,r){return e._bin._view(n).getInt32(r)},readInt8:function(n,r){return e._bin._view(n).getInt8(r)},readShort:function(n,r){return e._bin._view(n).getInt16(r)},readUshort:function(n,r){return e._bin._view(n).getUint16(r)},readUshorts:function(n,r,o){for(var a=[],l=0;l<o;l++)a.push(e._bin.readUshort(n,r+2*l));return a},readUint:function(n,r){return e._bin._view(n).getUint32(r)},readUint64:function(n,r){return 4294967296*e._bin.readUint(n,r)+e._bin.readUint(n,r+4)},readASCII:function(n,r,o){for(var a="",l=0;l<o;l++)a+=String.fromCharCode(n[r+l]);return a},readUnicode:function(n,r,o){for(var a="",l=0;l<o;l++){var c=n[r++]<<8|n[r++];a+=String.fromCharCode(c)}return a},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(n,r,o){var a=e._bin._tdec;return a&&r==0&&o==n.length?a.decode(n):e._bin.readASCII(n,r,o)},readBytes:function(n,r,o){for(var a=[],l=0;l<o;l++)a.push(n[r+l]);return a},readASCIIArray:function(n,r,o){for(var a=[],l=0;l<o;l++)a.push(String.fromCharCode(n[r+l]));return a},_view:function(n){return n._dataView||(n._dataView=n.buffer?new DataView(n.buffer,n.byteOffset,n.byteLength):new DataView(new Uint8Array(n).buffer))}},e._lctf={},e._lctf.parse=function(n,r,o,a,l){var c=e._bin,h={},u=r;c.readFixed(n,r),r+=4;var f=c.readUshort(n,r);r+=2;var d=c.readUshort(n,r);r+=2;var m=c.readUshort(n,r);return r+=2,h.scriptList=e._lctf.readScriptList(n,u+f),h.featureList=e._lctf.readFeatureList(n,u+d),h.lookupList=e._lctf.readLookupList(n,u+m,l),h},e._lctf.readLookupList=function(n,r,o){var a=e._bin,l=r,c=[],h=a.readUshort(n,r);r+=2;for(var u=0;u<h;u++){var f=a.readUshort(n,r);r+=2;var d=e._lctf.readLookupTable(n,l+f,o);c.push(d)}return c},e._lctf.readLookupTable=function(n,r,o){var a=e._bin,l=r,c={tabs:[]};c.ltype=a.readUshort(n,r),r+=2,c.flag=a.readUshort(n,r),r+=2;var h=a.readUshort(n,r);r+=2;for(var u=c.ltype,f=0;f<h;f++){var d=a.readUshort(n,r);r+=2;var m=o(n,u,l+d,c);c.tabs.push(m)}return c},e._lctf.numOfOnes=function(n){for(var r=0,o=0;o<32;o++)n>>>o&1&&r++;return r},e._lctf.readClassDef=function(n,r){var o=e._bin,a=[],l=o.readUshort(n,r);if(r+=2,l==1){var c=o.readUshort(n,r);r+=2;var h=o.readUshort(n,r);r+=2;for(var u=0;u<h;u++)a.push(c+u),a.push(c+u),a.push(o.readUshort(n,r)),r+=2}if(l==2){var f=o.readUshort(n,r);for(r+=2,u=0;u<f;u++)a.push(o.readUshort(n,r)),r+=2,a.push(o.readUshort(n,r)),r+=2,a.push(o.readUshort(n,r)),r+=2}return a},e._lctf.getInterval=function(n,r){for(var o=0;o<n.length;o+=3){var a=n[o],l=n[o+1];if(n[o+2],a<=r&&r<=l)return o}return-1},e._lctf.readCoverage=function(n,r){var o=e._bin,a={};a.fmt=o.readUshort(n,r),r+=2;var l=o.readUshort(n,r);return r+=2,a.fmt==1&&(a.tab=o.readUshorts(n,r,l)),a.fmt==2&&(a.tab=o.readUshorts(n,r,3*l)),a},e._lctf.coverageIndex=function(n,r){var o=n.tab;if(n.fmt==1)return o.indexOf(r);if(n.fmt==2){var a=e._lctf.getInterval(o,r);if(a!=-1)return o[a+2]+(r-o[a])}return-1},e._lctf.readFeatureList=function(n,r){var o=e._bin,a=r,l=[],c=o.readUshort(n,r);r+=2;for(var h=0;h<c;h++){var u=o.readASCII(n,r,4);r+=4;var f=o.readUshort(n,r);r+=2;var d=e._lctf.readFeatureTable(n,a+f);d.tag=u.trim(),l.push(d)}return l},e._lctf.readFeatureTable=function(n,r){var o=e._bin,a=r,l={},c=o.readUshort(n,r);r+=2,c>0&&(l.featureParams=a+c);var h=o.readUshort(n,r);r+=2,l.tab=[];for(var u=0;u<h;u++)l.tab.push(o.readUshort(n,r+2*u));return l},e._lctf.readScriptList=function(n,r){var o=e._bin,a=r,l={},c=o.readUshort(n,r);r+=2;for(var h=0;h<c;h++){var u=o.readASCII(n,r,4);r+=4;var f=o.readUshort(n,r);r+=2,l[u.trim()]=e._lctf.readScriptTable(n,a+f)}return l},e._lctf.readScriptTable=function(n,r){var o=e._bin,a=r,l={},c=o.readUshort(n,r);r+=2,c>0&&(l.default=e._lctf.readLangSysTable(n,a+c));var h=o.readUshort(n,r);r+=2;for(var u=0;u<h;u++){var f=o.readASCII(n,r,4);r+=4;var d=o.readUshort(n,r);r+=2,l[f.trim()]=e._lctf.readLangSysTable(n,a+d)}return l},e._lctf.readLangSysTable=function(n,r){var o=e._bin,a={};o.readUshort(n,r),r+=2,a.reqFeature=o.readUshort(n,r),r+=2;var l=o.readUshort(n,r);return r+=2,a.features=o.readUshorts(n,r,l),a},e.CFF={},e.CFF.parse=function(n,r,o){var a=e._bin;(n=new Uint8Array(n.buffer,r,o))[r=0],n[++r],n[++r],n[++r],r++;var l=[];r=e.CFF.readIndex(n,r,l);for(var c=[],h=0;h<l.length-1;h++)c.push(a.readASCII(n,r+l[h],l[h+1]-l[h]));r+=l[l.length-1];var u=[];r=e.CFF.readIndex(n,r,u);var f=[];for(h=0;h<u.length-1;h++)f.push(e.CFF.readDict(n,r+u[h],r+u[h+1]));r+=u[u.length-1];var d=f[0],m=[];r=e.CFF.readIndex(n,r,m);var p=[];for(h=0;h<m.length-1;h++)p.push(a.readASCII(n,r+m[h],m[h+1]-m[h]));if(r+=m[m.length-1],e.CFF.readSubrs(n,r,d),d.CharStrings){r=d.CharStrings,m=[],r=e.CFF.readIndex(n,r,m);var A=[];for(h=0;h<m.length-1;h++)A.push(a.readBytes(n,r+m[h],m[h+1]-m[h]));d.CharStrings=A}if(d.ROS){r=d.FDArray;var g=[];for(r=e.CFF.readIndex(n,r,g),d.FDArray=[],h=0;h<g.length-1;h++){var v=e.CFF.readDict(n,r+g[h],r+g[h+1]);e.CFF._readFDict(n,v,p),d.FDArray.push(v)}r+=g[g.length-1],r=d.FDSelect,d.FDSelect=[];var _=n[r];if(r++,_!=3)throw _;var y=a.readUshort(n,r);for(r+=2,h=0;h<y+1;h++)d.FDSelect.push(a.readUshort(n,r),n[r+2]),r+=3}return d.Encoding&&(d.Encoding=e.CFF.readEncoding(n,d.Encoding,d.CharStrings.length)),d.charset&&(d.charset=e.CFF.readCharset(n,d.charset,d.CharStrings.length)),e.CFF._readFDict(n,d,p),d},e.CFF._readFDict=function(n,r,o){var a;for(var l in r.Private&&(a=r.Private[1],r.Private=e.CFF.readDict(n,a,a+r.Private[0]),r.Private.Subrs&&e.CFF.readSubrs(n,a+r.Private.Subrs,r.Private)),r)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(l)!=-1&&(r[l]=o[r[l]-426+35])},e.CFF.readSubrs=function(n,r,o){var a=e._bin,l=[];r=e.CFF.readIndex(n,r,l);var c,h=l.length;c=h<1240?107:h<33900?1131:32768,o.Bias=c,o.Subrs=[];for(var u=0;u<l.length-1;u++)o.Subrs.push(a.readBytes(n,r+l[u],l[u+1]-l[u]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(n,r){for(var o=0;o<n.charset.length;o++)if(n.charset[o]==r)return o;return-1},e.CFF.glyphBySE=function(n,r){return r<0||r>255?-1:e.CFF.glyphByUnicode(n,e.CFF.tableSE[r])},e.CFF.readEncoding=function(n,r,o){e._bin;var a=[".notdef"],l=n[r];if(r++,l!=0)throw"error: unknown encoding format: "+l;var c=n[r];r++;for(var h=0;h<c;h++)a.push(n[r+h]);return a},e.CFF.readCharset=function(n,r,o){var a=e._bin,l=[".notdef"],c=n[r];if(r++,c==0)for(var h=0;h<o;h++){var u=a.readUshort(n,r);r+=2,l.push(u)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;l.length<o;){u=a.readUshort(n,r),r+=2;var f=0;for(c==1?(f=n[r],r++):(f=a.readUshort(n,r),r+=2),h=0;h<=f;h++)l.push(u),u++}}return l},e.CFF.readIndex=function(n,r,o){var a=e._bin,l=a.readUshort(n,r)+1,c=n[r+=2];if(r++,c==1)for(var h=0;h<l;h++)o.push(n[r+h]);else if(c==2)for(h=0;h<l;h++)o.push(a.readUshort(n,r+2*h));else if(c==3)for(h=0;h<l;h++)o.push(16777215&a.readUint(n,r+3*h-1));else if(l!=1)throw"unsupported offset size: "+c+", count: "+l;return(r+=l*c)-1},e.CFF.getCharString=function(n,r,o){var a=e._bin,l=n[r],c=n[r+1];n[r+2],n[r+3],n[r+4];var h=1,u=null,f=null;l<=20&&(u=l,h=1),l==12&&(u=100*l+c,h=2),21<=l&&l<=27&&(u=l,h=1),l==28&&(f=a.readShort(n,r+1),h=3),29<=l&&l<=31&&(u=l,h=1),32<=l&&l<=246&&(f=l-139,h=1),247<=l&&l<=250&&(f=256*(l-247)+c+108,h=2),251<=l&&l<=254&&(f=256*-(l-251)-c-108,h=2),l==255&&(f=a.readInt(n,r+1)/65535,h=5),o.val=f??"o"+u,o.size=h},e.CFF.readCharString=function(n,r,o){for(var a=r+o,l=e._bin,c=[];r<a;){var h=n[r],u=n[r+1];n[r+2],n[r+3],n[r+4];var f=1,d=null,m=null;h<=20&&(d=h,f=1),h==12&&(d=100*h+u,f=2),h!=19&&h!=20||(d=h,f=2),21<=h&&h<=27&&(d=h,f=1),h==28&&(m=l.readShort(n,r+1),f=3),29<=h&&h<=31&&(d=h,f=1),32<=h&&h<=246&&(m=h-139,f=1),247<=h&&h<=250&&(m=256*(h-247)+u+108,f=2),251<=h&&h<=254&&(m=256*-(h-251)-u-108,f=2),h==255&&(m=l.readInt(n,r+1)/65535,f=5),c.push(m??"o"+d),r+=f}return c},e.CFF.readDict=function(n,r,o){for(var a=e._bin,l={},c=[];r<o;){var h=n[r],u=n[r+1];n[r+2],n[r+3],n[r+4];var f=1,d=null,m=null;if(h==28&&(m=a.readShort(n,r+1),f=3),h==29&&(m=a.readInt(n,r+1),f=5),32<=h&&h<=246&&(m=h-139,f=1),247<=h&&h<=250&&(m=256*(h-247)+u+108,f=2),251<=h&&h<=254&&(m=256*-(h-251)-u-108,f=2),h==255)throw m=a.readInt(n,r+1)/65535,f=5,"unknown number";if(h==30){var p=[];for(f=1;;){var A=n[r+f];f++;var g=A>>4,v=15&A;if(g!=15&&p.push(g),v!=15&&p.push(v),v==15)break}for(var _="",y=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],S=0;S<p.length;S++)_+=y[p[S]];m=parseFloat(_)}h<=21&&(d=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][h],f=1,h==12&&(d=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][u],f=2)),d!=null?(l[d]=c.length==1?c[0]:c,c=[]):c.push(m),r+=f}return l},e.cmap={},e.cmap.parse=function(n,r,o){n=new Uint8Array(n.buffer,r,o),r=0;var a=e._bin,l={};a.readUshort(n,r),r+=2;var c=a.readUshort(n,r);r+=2;var h=[];l.tables=[];for(var u=0;u<c;u++){var f=a.readUshort(n,r);r+=2;var d=a.readUshort(n,r);r+=2;var m=a.readUint(n,r);r+=4;var p="p"+f+"e"+d,A=h.indexOf(m);if(A==-1){var g;A=l.tables.length,h.push(m);var v=a.readUshort(n,m);v==0?g=e.cmap.parse0(n,m):v==4?g=e.cmap.parse4(n,m):v==6?g=e.cmap.parse6(n,m):v==12?g=e.cmap.parse12(n,m):console.debug("unknown format: "+v,f,d,m),l.tables.push(g)}if(l[p]!=null)throw"multiple tables for one platform+encoding";l[p]=A}return l},e.cmap.parse0=function(n,r){var o=e._bin,a={};a.format=o.readUshort(n,r),r+=2;var l=o.readUshort(n,r);r+=2,o.readUshort(n,r),r+=2,a.map=[];for(var c=0;c<l-6;c++)a.map.push(n[r+c]);return a},e.cmap.parse4=function(n,r){var o=e._bin,a=r,l={};l.format=o.readUshort(n,r),r+=2;var c=o.readUshort(n,r);r+=2,o.readUshort(n,r),r+=2;var h=o.readUshort(n,r);r+=2;var u=h/2;l.searchRange=o.readUshort(n,r),r+=2,l.entrySelector=o.readUshort(n,r),r+=2,l.rangeShift=o.readUshort(n,r),r+=2,l.endCount=o.readUshorts(n,r,u),r+=2*u,r+=2,l.startCount=o.readUshorts(n,r,u),r+=2*u,l.idDelta=[];for(var f=0;f<u;f++)l.idDelta.push(o.readShort(n,r)),r+=2;for(l.idRangeOffset=o.readUshorts(n,r,u),r+=2*u,l.glyphIdArray=[];r<a+c;)l.glyphIdArray.push(o.readUshort(n,r)),r+=2;return l},e.cmap.parse6=function(n,r){var o=e._bin,a={};a.format=o.readUshort(n,r),r+=2,o.readUshort(n,r),r+=2,o.readUshort(n,r),r+=2,a.firstCode=o.readUshort(n,r),r+=2;var l=o.readUshort(n,r);r+=2,a.glyphIdArray=[];for(var c=0;c<l;c++)a.glyphIdArray.push(o.readUshort(n,r)),r+=2;return a},e.cmap.parse12=function(n,r){var o=e._bin,a={};a.format=o.readUshort(n,r),r+=2,r+=2,o.readUint(n,r),r+=4,o.readUint(n,r),r+=4;var l=o.readUint(n,r);r+=4,a.groups=[];for(var c=0;c<l;c++){var h=r+12*c,u=o.readUint(n,h+0),f=o.readUint(n,h+4),d=o.readUint(n,h+8);a.groups.push([u,f,d])}return a},e.glyf={},e.glyf.parse=function(n,r,o,a){for(var l=[],c=0;c<a.maxp.numGlyphs;c++)l.push(null);return l},e.glyf._parseGlyf=function(n,r){var o=e._bin,a=n._data,l=e._tabOffset(a,"glyf",n._offset)+n.loca[r];if(n.loca[r]==n.loca[r+1])return null;var c={};if(c.noc=o.readShort(a,l),l+=2,c.xMin=o.readShort(a,l),l+=2,c.yMin=o.readShort(a,l),l+=2,c.xMax=o.readShort(a,l),l+=2,c.yMax=o.readShort(a,l),l+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var h=0;h<c.noc;h++)c.endPts.push(o.readUshort(a,l)),l+=2;var u=o.readUshort(a,l);if(l+=2,a.length-l<u)return null;c.instructions=o.readBytes(a,l,u),l+=u;var f=c.endPts[c.noc-1]+1;for(c.flags=[],h=0;h<f;h++){var d=a[l];if(l++,c.flags.push(d),(8&d)!=0){var m=a[l];l++;for(var p=0;p<m;p++)c.flags.push(d),h++}}for(c.xs=[],h=0;h<f;h++){var A=(2&c.flags[h])!=0,g=(16&c.flags[h])!=0;A?(c.xs.push(g?a[l]:-a[l]),l++):g?c.xs.push(0):(c.xs.push(o.readShort(a,l)),l+=2)}for(c.ys=[],h=0;h<f;h++)A=(4&c.flags[h])!=0,g=(32&c.flags[h])!=0,A?(c.ys.push(g?a[l]:-a[l]),l++):g?c.ys.push(0):(c.ys.push(o.readShort(a,l)),l+=2);var v=0,_=0;for(h=0;h<f;h++)v+=c.xs[h],_+=c.ys[h],c.xs[h]=v,c.ys[h]=_}else{var y;c.parts=[];do{y=o.readUshort(a,l),l+=2;var S={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(S),S.glyphIndex=o.readUshort(a,l),l+=2,1&y){var C=o.readShort(a,l);l+=2;var E=o.readShort(a,l);l+=2}else C=o.readInt8(a,l),l++,E=o.readInt8(a,l),l++;2&y?(S.m.tx=C,S.m.ty=E):(S.p1=C,S.p2=E),8&y?(S.m.a=S.m.d=o.readF2dot14(a,l),l+=2):64&y?(S.m.a=o.readF2dot14(a,l),l+=2,S.m.d=o.readF2dot14(a,l),l+=2):128&y&&(S.m.a=o.readF2dot14(a,l),l+=2,S.m.b=o.readF2dot14(a,l),l+=2,S.m.c=o.readF2dot14(a,l),l+=2,S.m.d=o.readF2dot14(a,l),l+=2)}while(32&y);if(256&y){var b=o.readUshort(a,l);for(l+=2,c.instr=[],h=0;h<b;h++)c.instr.push(a[l]),l++}}return c},e.GDEF={},e.GDEF.parse=function(n,r,o,a){var l=r;r+=4;var c=e._bin.readUshort(n,r);return{glyphClassDef:c===0?null:e._lctf.readClassDef(n,l+c)}},e.GPOS={},e.GPOS.parse=function(n,r,o,a){return e._lctf.parse(n,r,o,a,e.GPOS.subt)},e.GPOS.subt=function(n,r,o,a){var l=e._bin,c=o,h={};if(h.fmt=l.readUshort(n,o),o+=2,r==1||r==2||r==3||r==7||r==8&&h.fmt<=2){var u=l.readUshort(n,o);o+=2,h.coverage=e._lctf.readCoverage(n,u+c)}if(r==1&&h.fmt==1){var f=l.readUshort(n,o);o+=2,f!=0&&(h.pos=e.GPOS.readValueRecord(n,o,f))}else if(r==2&&h.fmt>=1&&h.fmt<=2){f=l.readUshort(n,o),o+=2;var d=l.readUshort(n,o);o+=2;var m=e._lctf.numOfOnes(f),p=e._lctf.numOfOnes(d);if(h.fmt==1){h.pairsets=[];var A=l.readUshort(n,o);o+=2;for(var g=0;g<A;g++){var v=c+l.readUshort(n,o);o+=2;var _=l.readUshort(n,v);v+=2;for(var y=[],S=0;S<_;S++){var C=l.readUshort(n,v);v+=2,f!=0&&(R=e.GPOS.readValueRecord(n,v,f),v+=2*m),d!=0&&(z=e.GPOS.readValueRecord(n,v,d),v+=2*p),y.push({gid2:C,val1:R,val2:z})}h.pairsets.push(y)}}if(h.fmt==2){var E=l.readUshort(n,o);o+=2;var b=l.readUshort(n,o);o+=2;var x=l.readUshort(n,o);o+=2;var M=l.readUshort(n,o);for(o+=2,h.classDef1=e._lctf.readClassDef(n,c+E),h.classDef2=e._lctf.readClassDef(n,c+b),h.matrix=[],g=0;g<x;g++){var N=[];for(S=0;S<M;S++){var R=null,z=null;f!=0&&(R=e.GPOS.readValueRecord(n,o,f),o+=2*m),d!=0&&(z=e.GPOS.readValueRecord(n,o,d),o+=2*p),N.push({val1:R,val2:z})}h.matrix.push(N)}}}else if(r==4&&h.fmt==1)h.markCoverage=e._lctf.readCoverage(n,l.readUshort(n,o)+c),h.baseCoverage=e._lctf.readCoverage(n,l.readUshort(n,o+2)+c),h.markClassCount=l.readUshort(n,o+4),h.markArray=e.GPOS.readMarkArray(n,l.readUshort(n,o+6)+c),h.baseArray=e.GPOS.readBaseArray(n,l.readUshort(n,o+8)+c,h.markClassCount);else if(r==6&&h.fmt==1)h.mark1Coverage=e._lctf.readCoverage(n,l.readUshort(n,o)+c),h.mark2Coverage=e._lctf.readCoverage(n,l.readUshort(n,o+2)+c),h.markClassCount=l.readUshort(n,o+4),h.mark1Array=e.GPOS.readMarkArray(n,l.readUshort(n,o+6)+c),h.mark2Array=e.GPOS.readBaseArray(n,l.readUshort(n,o+8)+c,h.markClassCount);else{if(r==9&&h.fmt==1){var I=l.readUshort(n,o);o+=2;var U=l.readUint(n,o);if(o+=4,a.ltype==9)a.ltype=I;else if(a.ltype!=I)throw"invalid extension substitution";return e.GPOS.subt(n,a.ltype,c+U)}console.debug("unsupported GPOS table LookupType",r,"format",h.fmt)}return h},e.GPOS.readValueRecord=function(n,r,o){var a=e._bin,l=[];return l.push(1&o?a.readShort(n,r):0),r+=1&o?2:0,l.push(2&o?a.readShort(n,r):0),r+=2&o?2:0,l.push(4&o?a.readShort(n,r):0),r+=4&o?2:0,l.push(8&o?a.readShort(n,r):0),r+=8&o?2:0,l},e.GPOS.readBaseArray=function(n,r,o){var a=e._bin,l=[],c=r,h=a.readUshort(n,r);r+=2;for(var u=0;u<h;u++){for(var f=[],d=0;d<o;d++)f.push(e.GPOS.readAnchorRecord(n,c+a.readUshort(n,r))),r+=2;l.push(f)}return l},e.GPOS.readMarkArray=function(n,r){var o=e._bin,a=[],l=r,c=o.readUshort(n,r);r+=2;for(var h=0;h<c;h++){var u=e.GPOS.readAnchorRecord(n,o.readUshort(n,r+2)+l);u.markClass=o.readUshort(n,r),a.push(u),r+=4}return a},e.GPOS.readAnchorRecord=function(n,r){var o=e._bin,a={};return a.fmt=o.readUshort(n,r),a.x=o.readShort(n,r+2),a.y=o.readShort(n,r+4),a},e.GSUB={},e.GSUB.parse=function(n,r,o,a){return e._lctf.parse(n,r,o,a,e.GSUB.subt)},e.GSUB.subt=function(n,r,o,a){var l=e._bin,c=o,h={};if(h.fmt=l.readUshort(n,o),o+=2,r!=1&&r!=2&&r!=4&&r!=5&&r!=6)return null;if(r==1||r==2||r==4||r==5&&h.fmt<=2||r==6&&h.fmt<=2){var u=l.readUshort(n,o);o+=2,h.coverage=e._lctf.readCoverage(n,c+u)}if(r==1&&h.fmt>=1&&h.fmt<=2){if(h.fmt==1)h.delta=l.readShort(n,o),o+=2;else if(h.fmt==2){var f=l.readUshort(n,o);o+=2,h.newg=l.readUshorts(n,o,f),o+=2*h.newg.length}}else if(r==2&&h.fmt==1){f=l.readUshort(n,o),o+=2,h.seqs=[];for(var d=0;d<f;d++){var m=l.readUshort(n,o)+c;o+=2;var p=l.readUshort(n,m);h.seqs.push(l.readUshorts(n,m+2,p))}}else if(r==4)for(h.vals=[],f=l.readUshort(n,o),o+=2,d=0;d<f;d++){var A=l.readUshort(n,o);o+=2,h.vals.push(e.GSUB.readLigatureSet(n,c+A))}else if(r==5&&h.fmt==2){if(h.fmt==2){var g=l.readUshort(n,o);o+=2,h.cDef=e._lctf.readClassDef(n,c+g),h.scset=[];var v=l.readUshort(n,o);for(o+=2,d=0;d<v;d++){var _=l.readUshort(n,o);o+=2,h.scset.push(_==0?null:e.GSUB.readSubClassSet(n,c+_))}}}else if(r==6&&h.fmt==3){if(h.fmt==3){for(d=0;d<3;d++){f=l.readUshort(n,o),o+=2;for(var y=[],S=0;S<f;S++)y.push(e._lctf.readCoverage(n,c+l.readUshort(n,o+2*S)));o+=2*f,d==0&&(h.backCvg=y),d==1&&(h.inptCvg=y),d==2&&(h.ahedCvg=y)}f=l.readUshort(n,o),o+=2,h.lookupRec=e.GSUB.readSubstLookupRecords(n,o,f)}}else{if(r==7&&h.fmt==1){var C=l.readUshort(n,o);o+=2;var E=l.readUint(n,o);if(o+=4,a.ltype==9)a.ltype=C;else if(a.ltype!=C)throw"invalid extension substitution";return e.GSUB.subt(n,a.ltype,c+E)}console.debug("unsupported GSUB table LookupType",r,"format",h.fmt)}return h},e.GSUB.readSubClassSet=function(n,r){var o=e._bin.readUshort,a=r,l=[],c=o(n,r);r+=2;for(var h=0;h<c;h++){var u=o(n,r);r+=2,l.push(e.GSUB.readSubClassRule(n,a+u))}return l},e.GSUB.readSubClassRule=function(n,r){var o=e._bin.readUshort,a={},l=o(n,r),c=o(n,r+=2);r+=2,a.input=[];for(var h=0;h<l-1;h++)a.input.push(o(n,r)),r+=2;return a.substLookupRecords=e.GSUB.readSubstLookupRecords(n,r,c),a},e.GSUB.readSubstLookupRecords=function(n,r,o){for(var a=e._bin.readUshort,l=[],c=0;c<o;c++)l.push(a(n,r),a(n,r+2)),r+=4;return l},e.GSUB.readChainSubClassSet=function(n,r){var o=e._bin,a=r,l=[],c=o.readUshort(n,r);r+=2;for(var h=0;h<c;h++){var u=o.readUshort(n,r);r+=2,l.push(e.GSUB.readChainSubClassRule(n,a+u))}return l},e.GSUB.readChainSubClassRule=function(n,r){for(var o=e._bin,a={},l=["backtrack","input","lookahead"],c=0;c<l.length;c++){var h=o.readUshort(n,r);r+=2,c==1&&h--,a[l[c]]=o.readUshorts(n,r,h),r+=2*a[l[c]].length}return h=o.readUshort(n,r),r+=2,a.subst=o.readUshorts(n,r,2*h),r+=2*a.subst.length,a},e.GSUB.readLigatureSet=function(n,r){var o=e._bin,a=r,l=[],c=o.readUshort(n,r);r+=2;for(var h=0;h<c;h++){var u=o.readUshort(n,r);r+=2,l.push(e.GSUB.readLigature(n,a+u))}return l},e.GSUB.readLigature=function(n,r){var o=e._bin,a={chain:[]};a.nglyph=o.readUshort(n,r),r+=2;var l=o.readUshort(n,r);r+=2;for(var c=0;c<l-1;c++)a.chain.push(o.readUshort(n,r)),r+=2;return a},e.head={},e.head.parse=function(n,r,o){var a=e._bin,l={};return a.readFixed(n,r),r+=4,l.fontRevision=a.readFixed(n,r),r+=4,a.readUint(n,r),r+=4,a.readUint(n,r),r+=4,l.flags=a.readUshort(n,r),r+=2,l.unitsPerEm=a.readUshort(n,r),r+=2,l.created=a.readUint64(n,r),r+=8,l.modified=a.readUint64(n,r),r+=8,l.xMin=a.readShort(n,r),r+=2,l.yMin=a.readShort(n,r),r+=2,l.xMax=a.readShort(n,r),r+=2,l.yMax=a.readShort(n,r),r+=2,l.macStyle=a.readUshort(n,r),r+=2,l.lowestRecPPEM=a.readUshort(n,r),r+=2,l.fontDirectionHint=a.readShort(n,r),r+=2,l.indexToLocFormat=a.readShort(n,r),r+=2,l.glyphDataFormat=a.readShort(n,r),r+=2,l},e.hhea={},e.hhea.parse=function(n,r,o){var a=e._bin,l={};return a.readFixed(n,r),r+=4,l.ascender=a.readShort(n,r),r+=2,l.descender=a.readShort(n,r),r+=2,l.lineGap=a.readShort(n,r),r+=2,l.advanceWidthMax=a.readUshort(n,r),r+=2,l.minLeftSideBearing=a.readShort(n,r),r+=2,l.minRightSideBearing=a.readShort(n,r),r+=2,l.xMaxExtent=a.readShort(n,r),r+=2,l.caretSlopeRise=a.readShort(n,r),r+=2,l.caretSlopeRun=a.readShort(n,r),r+=2,l.caretOffset=a.readShort(n,r),r+=2,r+=8,l.metricDataFormat=a.readShort(n,r),r+=2,l.numberOfHMetrics=a.readUshort(n,r),r+=2,l},e.hmtx={},e.hmtx.parse=function(n,r,o,a){for(var l=e._bin,c={aWidth:[],lsBearing:[]},h=0,u=0,f=0;f<a.maxp.numGlyphs;f++)f<a.hhea.numberOfHMetrics&&(h=l.readUshort(n,r),r+=2,u=l.readShort(n,r),r+=2),c.aWidth.push(h),c.lsBearing.push(u);return c},e.kern={},e.kern.parse=function(n,r,o,a){var l=e._bin,c=l.readUshort(n,r);if(r+=2,c==1)return e.kern.parseV1(n,r-2,o,a);var h=l.readUshort(n,r);r+=2;for(var u={glyph1:[],rval:[]},f=0;f<h;f++){r+=2,o=l.readUshort(n,r),r+=2;var d=l.readUshort(n,r);r+=2;var m=d>>>8;if((m&=15)!=0)throw"unknown kern table format: "+m;r=e.kern.readFormat0(n,r,u)}return u},e.kern.parseV1=function(n,r,o,a){var l=e._bin;l.readFixed(n,r),r+=4;var c=l.readUint(n,r);r+=4;for(var h={glyph1:[],rval:[]},u=0;u<c;u++){l.readUint(n,r),r+=4;var f=l.readUshort(n,r);r+=2,l.readUshort(n,r),r+=2;var d=f>>>8;if((d&=15)!=0)throw"unknown kern table format: "+d;r=e.kern.readFormat0(n,r,h)}return h},e.kern.readFormat0=function(n,r,o){var a=e._bin,l=-1,c=a.readUshort(n,r);r+=2,a.readUshort(n,r),r+=2,a.readUshort(n,r),r+=2,a.readUshort(n,r),r+=2;for(var h=0;h<c;h++){var u=a.readUshort(n,r);r+=2;var f=a.readUshort(n,r);r+=2;var d=a.readShort(n,r);r+=2,u!=l&&(o.glyph1.push(u),o.rval.push({glyph2:[],vals:[]}));var m=o.rval[o.rval.length-1];m.glyph2.push(f),m.vals.push(d),l=u}return r},e.loca={},e.loca.parse=function(n,r,o,a){var l=e._bin,c=[],h=a.head.indexToLocFormat,u=a.maxp.numGlyphs+1;if(h==0)for(var f=0;f<u;f++)c.push(l.readUshort(n,r+(f<<1))<<1);if(h==1)for(f=0;f<u;f++)c.push(l.readUint(n,r+(f<<2)));return c},e.maxp={},e.maxp.parse=function(n,r,o){var a=e._bin,l={},c=a.readUint(n,r);return r+=4,l.numGlyphs=a.readUshort(n,r),r+=2,c==65536&&(l.maxPoints=a.readUshort(n,r),r+=2,l.maxContours=a.readUshort(n,r),r+=2,l.maxCompositePoints=a.readUshort(n,r),r+=2,l.maxCompositeContours=a.readUshort(n,r),r+=2,l.maxZones=a.readUshort(n,r),r+=2,l.maxTwilightPoints=a.readUshort(n,r),r+=2,l.maxStorage=a.readUshort(n,r),r+=2,l.maxFunctionDefs=a.readUshort(n,r),r+=2,l.maxInstructionDefs=a.readUshort(n,r),r+=2,l.maxStackElements=a.readUshort(n,r),r+=2,l.maxSizeOfInstructions=a.readUshort(n,r),r+=2,l.maxComponentElements=a.readUshort(n,r),r+=2,l.maxComponentDepth=a.readUshort(n,r),r+=2),l},e.name={},e.name.parse=function(n,r,o){var a=e._bin,l={};a.readUshort(n,r),r+=2;var c=a.readUshort(n,r);r+=2,a.readUshort(n,r);for(var h,u=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],f=r+=2,d=0;d<c;d++){var m=a.readUshort(n,r);r+=2;var p=a.readUshort(n,r);r+=2;var A=a.readUshort(n,r);r+=2;var g=a.readUshort(n,r);r+=2;var v=a.readUshort(n,r);r+=2;var _=a.readUshort(n,r);r+=2;var y,S=u[g],C=f+12*c+_;if(m==0)y=a.readUnicode(n,C,v/2);else if(m==3&&p==0)y=a.readUnicode(n,C,v/2);else if(p==0)y=a.readASCII(n,C,v);else if(p==1)y=a.readUnicode(n,C,v/2);else if(p==3)y=a.readUnicode(n,C,v/2);else{if(m!=1)throw"unknown encoding "+p+", platformID: "+m;y=a.readASCII(n,C,v),console.debug("reading unknown MAC encoding "+p+" as ASCII")}var E="p"+m+","+A.toString(16);l[E]==null&&(l[E]={}),l[E][S!==void 0?S:g]=y,l[E]._lang=A}for(var b in l)if(l[b].postScriptName!=null&&l[b]._lang==1033)return l[b];for(var b in l)if(l[b].postScriptName!=null&&l[b]._lang==0)return l[b];for(var b in l)if(l[b].postScriptName!=null&&l[b]._lang==3084)return l[b];for(var b in l)if(l[b].postScriptName!=null)return l[b];for(var b in l){h=b;break}return console.debug("returning name table with languageID "+l[h]._lang),l[h]},e["OS/2"]={},e["OS/2"].parse=function(n,r,o){var a=e._bin.readUshort(n,r);r+=2;var l={};if(a==0)e["OS/2"].version0(n,r,l);else if(a==1)e["OS/2"].version1(n,r,l);else if(a==2||a==3||a==4)e["OS/2"].version2(n,r,l);else{if(a!=5)throw"unknown OS/2 table version: "+a;e["OS/2"].version5(n,r,l)}return l},e["OS/2"].version0=function(n,r,o){var a=e._bin;return o.xAvgCharWidth=a.readShort(n,r),r+=2,o.usWeightClass=a.readUshort(n,r),r+=2,o.usWidthClass=a.readUshort(n,r),r+=2,o.fsType=a.readUshort(n,r),r+=2,o.ySubscriptXSize=a.readShort(n,r),r+=2,o.ySubscriptYSize=a.readShort(n,r),r+=2,o.ySubscriptXOffset=a.readShort(n,r),r+=2,o.ySubscriptYOffset=a.readShort(n,r),r+=2,o.ySuperscriptXSize=a.readShort(n,r),r+=2,o.ySuperscriptYSize=a.readShort(n,r),r+=2,o.ySuperscriptXOffset=a.readShort(n,r),r+=2,o.ySuperscriptYOffset=a.readShort(n,r),r+=2,o.yStrikeoutSize=a.readShort(n,r),r+=2,o.yStrikeoutPosition=a.readShort(n,r),r+=2,o.sFamilyClass=a.readShort(n,r),r+=2,o.panose=a.readBytes(n,r,10),r+=10,o.ulUnicodeRange1=a.readUint(n,r),r+=4,o.ulUnicodeRange2=a.readUint(n,r),r+=4,o.ulUnicodeRange3=a.readUint(n,r),r+=4,o.ulUnicodeRange4=a.readUint(n,r),r+=4,o.achVendID=[a.readInt8(n,r),a.readInt8(n,r+1),a.readInt8(n,r+2),a.readInt8(n,r+3)],r+=4,o.fsSelection=a.readUshort(n,r),r+=2,o.usFirstCharIndex=a.readUshort(n,r),r+=2,o.usLastCharIndex=a.readUshort(n,r),r+=2,o.sTypoAscender=a.readShort(n,r),r+=2,o.sTypoDescender=a.readShort(n,r),r+=2,o.sTypoLineGap=a.readShort(n,r),r+=2,o.usWinAscent=a.readUshort(n,r),r+=2,o.usWinDescent=a.readUshort(n,r),r+=2},e["OS/2"].version1=function(n,r,o){var a=e._bin;return r=e["OS/2"].version0(n,r,o),o.ulCodePageRange1=a.readUint(n,r),r+=4,o.ulCodePageRange2=a.readUint(n,r),r+=4},e["OS/2"].version2=function(n,r,o){var a=e._bin;return r=e["OS/2"].version1(n,r,o),o.sxHeight=a.readShort(n,r),r+=2,o.sCapHeight=a.readShort(n,r),r+=2,o.usDefault=a.readUshort(n,r),r+=2,o.usBreak=a.readUshort(n,r),r+=2,o.usMaxContext=a.readUshort(n,r),r+=2},e["OS/2"].version5=function(n,r,o){var a=e._bin;return r=e["OS/2"].version2(n,r,o),o.usLowerOpticalPointSize=a.readUshort(n,r),r+=2,o.usUpperOpticalPointSize=a.readUshort(n,r),r+=2},e.post={},e.post.parse=function(n,r,o){var a=e._bin,l={};return l.version=a.readFixed(n,r),r+=4,l.italicAngle=a.readFixed(n,r),r+=4,l.underlinePosition=a.readShort(n,r),r+=2,l.underlineThickness=a.readShort(n,r),r+=2,l},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(n,r){var o=n.cmap,a=-1;if(o.p0e4!=null?a=o.p0e4:o.p3e1!=null?a=o.p3e1:o.p1e0!=null?a=o.p1e0:o.p0e3!=null&&(a=o.p0e3),a==-1)throw"no familiar platform and encoding!";var l=o.tables[a];if(l.format==0)return r>=l.map.length?0:l.map[r];if(l.format==4){for(var c=-1,h=0;h<l.endCount.length;h++)if(r<=l.endCount[h]){c=h;break}return c==-1||l.startCount[c]>r?0:65535&(l.idRangeOffset[c]!=0?l.glyphIdArray[r-l.startCount[c]+(l.idRangeOffset[c]>>1)-(l.idRangeOffset.length-c)]:r+l.idDelta[c])}if(l.format==12){if(r>l.groups[l.groups.length-1][1])return 0;for(h=0;h<l.groups.length;h++){var u=l.groups[h];if(u[0]<=r&&r<=u[1])return u[2]+(r-u[0])}return 0}throw"unknown cmap table format "+l.format},e.U.glyphToPath=function(n,r){var o={cmds:[],crds:[]};if(n.SVG&&n.SVG.entries[r]){var a=n.SVG.entries[r];return a==null?o:(typeof a=="string"&&(a=e.SVG.toPath(a),n.SVG.entries[r]=a),a)}if(n.CFF){var l={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:n.CFF.Private?n.CFF.Private.defaultWidthX:0,open:!1},c=n.CFF,h=n.CFF.Private;if(c.ROS){for(var u=0;c.FDSelect[u+2]<=r;)u+=2;h=c.FDArray[c.FDSelect[u+1]].Private}e.U._drawCFF(n.CFF.CharStrings[r],l,c,h,o)}else n.glyf&&e.U._drawGlyf(r,n,o);return o},e.U._drawGlyf=function(n,r,o){var a=r.glyf[n];a==null&&(a=r.glyf[n]=e.glyf._parseGlyf(r,n)),a!=null&&(a.noc>-1?e.U._simpleGlyph(a,o):e.U._compoGlyph(a,r,o))},e.U._simpleGlyph=function(n,r){for(var o=0;o<n.noc;o++){for(var a=o==0?0:n.endPts[o-1]+1,l=n.endPts[o],c=a;c<=l;c++){var h=c==a?l:c-1,u=c==l?a:c+1,f=1&n.flags[c],d=1&n.flags[h],m=1&n.flags[u],p=n.xs[c],A=n.ys[c];if(c==a)if(f){if(!d){e.U.P.moveTo(r,p,A);continue}e.U.P.moveTo(r,n.xs[h],n.ys[h])}else d?e.U.P.moveTo(r,n.xs[h],n.ys[h]):e.U.P.moveTo(r,(n.xs[h]+p)/2,(n.ys[h]+A)/2);f?d&&e.U.P.lineTo(r,p,A):m?e.U.P.qcurveTo(r,p,A,n.xs[u],n.ys[u]):e.U.P.qcurveTo(r,p,A,(p+n.xs[u])/2,(A+n.ys[u])/2)}e.U.P.closePath(r)}},e.U._compoGlyph=function(n,r,o){for(var a=0;a<n.parts.length;a++){var l={cmds:[],crds:[]},c=n.parts[a];e.U._drawGlyf(c.glyphIndex,r,l);for(var h=c.m,u=0;u<l.crds.length;u+=2){var f=l.crds[u],d=l.crds[u+1];o.crds.push(f*h.a+d*h.b+h.tx),o.crds.push(f*h.c+d*h.d+h.ty)}for(u=0;u<l.cmds.length;u++)o.cmds.push(l.cmds[u])}},e.U._getGlyphClass=function(n,r){var o=e._lctf.getInterval(r,n);return o==-1?0:r[o+2]},e.U._applySubs=function(n,r,o,a){for(var l=n.length-r-1,c=0;c<o.tabs.length;c++)if(o.tabs[c]!=null){var h,u=o.tabs[c];if(!u.coverage||(h=e._lctf.coverageIndex(u.coverage,n[r]))!=-1){if(o.ltype==1)n[r],u.fmt==1?n[r]=n[r]+u.delta:n[r]=u.newg[h];else if(o.ltype==4)for(var f=u.vals[h],d=0;d<f.length;d++){var m=f[d],p=m.chain.length;if(!(p>l)){for(var A=!0,g=0,v=0;v<p;v++){for(;n[r+g+(1+v)]==-1;)g++;m.chain[v]!=n[r+g+(1+v)]&&(A=!1)}if(A){for(n[r]=m.nglyph,v=0;v<p+g;v++)n[r+v+1]=-1;break}}}else if(o.ltype==5&&u.fmt==2)for(var _=e._lctf.getInterval(u.cDef,n[r]),y=u.cDef[_+2],S=u.scset[y],C=0;C<S.length;C++){var E=S[C],b=E.input;if(!(b.length>l)){for(A=!0,v=0;v<b.length;v++){var x=e._lctf.getInterval(u.cDef,n[r+1+v]);if(_==-1&&u.cDef[x+2]!=b[v]){A=!1;break}}if(A){var M=E.substLookupRecords;for(d=0;d<M.length;d+=2)M[d],M[d+1]}}}else if(o.ltype==6&&u.fmt==3){if(!e.U._glsCovered(n,u.backCvg,r-u.backCvg.length)||!e.U._glsCovered(n,u.inptCvg,r)||!e.U._glsCovered(n,u.ahedCvg,r+u.inptCvg.length))continue;var N=u.lookupRec;for(C=0;C<N.length;C+=2){_=N[C];var R=a[N[C+1]];e.U._applySubs(n,r+_,R,a)}}}}},e.U._glsCovered=function(n,r,o){for(var a=0;a<r.length;a++)if(e._lctf.coverageIndex(r[a],n[o+a])==-1)return!1;return!0},e.U.glyphsToPath=function(n,r,o){for(var a={cmds:[],crds:[]},l=0,c=0;c<r.length;c++){var h=r[c];if(h!=-1){for(var u=c<r.length-1&&r[c+1]!=-1?r[c+1]:0,f=e.U.glyphToPath(n,h),d=0;d<f.crds.length;d+=2)a.crds.push(f.crds[d]+l),a.crds.push(f.crds[d+1]);for(o&&a.cmds.push(o),d=0;d<f.cmds.length;d++)a.cmds.push(f.cmds[d]);o&&a.cmds.push("X"),l+=n.hmtx.aWidth[h],c<r.length-1&&(l+=e.U.getPairAdjustment(n,h,u))}}return a},e.U.P={},e.U.P.moveTo=function(n,r,o){n.cmds.push("M"),n.crds.push(r,o)},e.U.P.lineTo=function(n,r,o){n.cmds.push("L"),n.crds.push(r,o)},e.U.P.curveTo=function(n,r,o,a,l,c,h){n.cmds.push("C"),n.crds.push(r,o,a,l,c,h)},e.U.P.qcurveTo=function(n,r,o,a,l){n.cmds.push("Q"),n.crds.push(r,o,a,l)},e.U.P.closePath=function(n){n.cmds.push("Z")},e.U._drawCFF=function(n,r,o,a,l){for(var c=r.stack,h=r.nStems,u=r.haveWidth,f=r.width,d=r.open,m=0,p=r.x,A=r.y,g=0,v=0,_=0,y=0,S=0,C=0,E=0,b=0,x=0,M=0,N={val:0,size:0};m<n.length;){e.CFF.getCharString(n,m,N);var R=N.val;if(m+=N.size,R=="o1"||R=="o18")c.length%2!=0&&!u&&(f=c.shift()+a.nominalWidthX),h+=c.length>>1,c.length=0,u=!0;else if(R=="o3"||R=="o23")c.length%2!=0&&!u&&(f=c.shift()+a.nominalWidthX),h+=c.length>>1,c.length=0,u=!0;else if(R=="o4")c.length>1&&!u&&(f=c.shift()+a.nominalWidthX,u=!0),d&&e.U.P.closePath(l),A+=c.pop(),e.U.P.moveTo(l,p,A),d=!0;else if(R=="o5")for(;c.length>0;)p+=c.shift(),A+=c.shift(),e.U.P.lineTo(l,p,A);else if(R=="o6"||R=="o7")for(var z=c.length,I=R=="o6",U=0;U<z;U++){var P=c.shift();I?p+=P:A+=P,I=!I,e.U.P.lineTo(l,p,A)}else if(R=="o8"||R=="o24"){z=c.length;for(var X=0;X+6<=z;)g=p+c.shift(),v=A+c.shift(),_=g+c.shift(),y=v+c.shift(),p=_+c.shift(),A=y+c.shift(),e.U.P.curveTo(l,g,v,_,y,p,A),X+=6;R=="o24"&&(p+=c.shift(),A+=c.shift(),e.U.P.lineTo(l,p,A))}else{if(R=="o11")break;if(R=="o1234"||R=="o1235"||R=="o1236"||R=="o1237")R=="o1234"&&(v=A,_=(g=p+c.shift())+c.shift(),M=y=v+c.shift(),C=y,b=A,p=(E=(S=(x=_+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(l,g,v,_,y,x,M),e.U.P.curveTo(l,S,C,E,b,p,A)),R=="o1235"&&(g=p+c.shift(),v=A+c.shift(),_=g+c.shift(),y=v+c.shift(),x=_+c.shift(),M=y+c.shift(),S=x+c.shift(),C=M+c.shift(),E=S+c.shift(),b=C+c.shift(),p=E+c.shift(),A=b+c.shift(),c.shift(),e.U.P.curveTo(l,g,v,_,y,x,M),e.U.P.curveTo(l,S,C,E,b,p,A)),R=="o1236"&&(g=p+c.shift(),v=A+c.shift(),_=g+c.shift(),M=y=v+c.shift(),C=y,E=(S=(x=_+c.shift())+c.shift())+c.shift(),b=C+c.shift(),p=E+c.shift(),e.U.P.curveTo(l,g,v,_,y,x,M),e.U.P.curveTo(l,S,C,E,b,p,A)),R=="o1237"&&(g=p+c.shift(),v=A+c.shift(),_=g+c.shift(),y=v+c.shift(),x=_+c.shift(),M=y+c.shift(),S=x+c.shift(),C=M+c.shift(),E=S+c.shift(),b=C+c.shift(),Math.abs(E-p)>Math.abs(b-A)?p=E+c.shift():A=b+c.shift(),e.U.P.curveTo(l,g,v,_,y,x,M),e.U.P.curveTo(l,S,C,E,b,p,A));else if(R=="o14"){if(c.length>0&&!u&&(f=c.shift()+o.nominalWidthX,u=!0),c.length==4){var q=c.shift(),Q=c.shift(),V=c.shift(),D=c.shift(),H=e.CFF.glyphBySE(o,V),L=e.CFF.glyphBySE(o,D);e.U._drawCFF(o.CharStrings[H],r,o,a,l),r.x=q,r.y=Q,e.U._drawCFF(o.CharStrings[L],r,o,a,l)}d&&(e.U.P.closePath(l),d=!1)}else if(R=="o19"||R=="o20")c.length%2!=0&&!u&&(f=c.shift()+a.nominalWidthX),h+=c.length>>1,c.length=0,u=!0,m+=h+7>>3;else if(R=="o21")c.length>2&&!u&&(f=c.shift()+a.nominalWidthX,u=!0),A+=c.pop(),p+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,p,A),d=!0;else if(R=="o22")c.length>1&&!u&&(f=c.shift()+a.nominalWidthX,u=!0),p+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,p,A),d=!0;else if(R=="o25"){for(;c.length>6;)p+=c.shift(),A+=c.shift(),e.U.P.lineTo(l,p,A);g=p+c.shift(),v=A+c.shift(),_=g+c.shift(),y=v+c.shift(),p=_+c.shift(),A=y+c.shift(),e.U.P.curveTo(l,g,v,_,y,p,A)}else if(R=="o26")for(c.length%2&&(p+=c.shift());c.length>0;)g=p,v=A+c.shift(),p=_=g+c.shift(),A=(y=v+c.shift())+c.shift(),e.U.P.curveTo(l,g,v,_,y,p,A);else if(R=="o27")for(c.length%2&&(A+=c.shift());c.length>0;)v=A,_=(g=p+c.shift())+c.shift(),y=v+c.shift(),p=_+c.shift(),A=y,e.U.P.curveTo(l,g,v,_,y,p,A);else if(R=="o10"||R=="o29"){var k=R=="o10"?a:o;if(c.length==0)console.debug("error: empty stack");else{var W=c.pop(),ee=k.Subrs[W+k.Bias];r.x=p,r.y=A,r.nStems=h,r.haveWidth=u,r.width=f,r.open=d,e.U._drawCFF(ee,r,o,a,l),p=r.x,A=r.y,h=r.nStems,u=r.haveWidth,f=r.width,d=r.open}}else if(R=="o30"||R=="o31"){var J=c.length,re=(X=0,R=="o31");for(X+=J-(z=-3&J);X<z;)re?(v=A,_=(g=p+c.shift())+c.shift(),A=(y=v+c.shift())+c.shift(),z-X==5?(p=_+c.shift(),X++):p=_,re=!1):(g=p,v=A+c.shift(),_=g+c.shift(),y=v+c.shift(),p=_+c.shift(),z-X==5?(A=y+c.shift(),X++):A=y,re=!0),e.U.P.curveTo(l,g,v,_,y,p,A),X+=4}else{if((R+"").charAt(0)=="o")throw console.debug("Unknown operation: "+R,n),R;c.push(R)}}}r.x=p,r.y=A,r.nStems=h,r.haveWidth=u,r.width=f,r.open=d};var t=e,i={Typr:t};return s.Typr=t,s.default=i,Object.defineProperty(s,"__esModule",{value:!0}),s}({}).Typr}function Z1(){return function(s){var e=Uint8Array,t=Uint16Array,i=Uint32Array,n=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),r=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),o=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),a=function(R,z){for(var I=new t(31),U=0;U<31;++U)I[U]=z+=1<<R[U-1];var P=new i(I[30]);for(U=1;U<30;++U)for(var X=I[U];X<I[U+1];++X)P[X]=X-I[U]<<5|U;return[I,P]},l=a(n,2),c=l[0],h=l[1];c[28]=258,h[258]=28;for(var u=a(r,0)[0],f=new t(32768),d=0;d<32768;++d){var m=(43690&d)>>>1|(21845&d)<<1;m=(61680&(m=(52428&m)>>>2|(13107&m)<<2))>>>4|(3855&m)<<4,f[d]=((65280&m)>>>8|(255&m)<<8)>>>1}var p=function(R,z,I){for(var U=R.length,P=0,X=new t(z);P<U;++P)++X[R[P]-1];var q,Q=new t(z);for(P=0;P<z;++P)Q[P]=Q[P-1]+X[P-1]<<1;if(I){q=new t(1<<z);var V=15-z;for(P=0;P<U;++P)if(R[P])for(var D=P<<4|R[P],H=z-R[P],L=Q[R[P]-1]++<<H,k=L|(1<<H)-1;L<=k;++L)q[f[L]>>>V]=D}else for(q=new t(U),P=0;P<U;++P)R[P]&&(q[P]=f[Q[R[P]-1]++]>>>15-R[P]);return q},A=new e(288);for(d=0;d<144;++d)A[d]=8;for(d=144;d<256;++d)A[d]=9;for(d=256;d<280;++d)A[d]=7;for(d=280;d<288;++d)A[d]=8;var g=new e(32);for(d=0;d<32;++d)g[d]=5;var v=p(A,9,1),_=p(g,5,1),y=function(R){for(var z=R[0],I=1;I<R.length;++I)R[I]>z&&(z=R[I]);return z},S=function(R,z,I){var U=z/8|0;return(R[U]|R[U+1]<<8)>>(7&z)&I},C=function(R,z){var I=z/8|0;return(R[I]|R[I+1]<<8|R[I+2]<<16)>>(7&z)},E=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],b=function(R,z,I){var U=new Error(z||E[R]);if(U.code=R,Error.captureStackTrace&&Error.captureStackTrace(U,b),!I)throw U;return U},x=function(R,z,I){var U=R.length;if(!U||I&&!I.l&&U<5)return z||new e(0);var P=!z||I,X=!I||I.i;I||(I={}),z||(z=new e(3*U));var q,Q=function(Ae){var Ne=z.length;if(Ae>Ne){var Ge=new e(Math.max(2*Ne,Ae));Ge.set(z),z=Ge}},V=I.f||0,D=I.p||0,H=I.b||0,L=I.l,k=I.d,W=I.m,ee=I.n,J=8*U;do{if(!L){I.f=V=S(R,D,1);var re=S(R,D+1,3);if(D+=3,!re){var pe=R[(T=((q=D)/8|0)+(7&q&&1)+4)-4]|R[T-3]<<8,ge=T+pe;if(ge>U){X&&b(0);break}P&&Q(H+pe),z.set(R.subarray(T,ge),H),I.b=H+=pe,I.p=D=8*ge;continue}if(re==1)L=v,k=_,W=9,ee=5;else if(re==2){var fe=S(R,D,31)+257,O=S(R,D+10,15)+4,Oe=fe+S(R,D+5,31)+1;D+=14;for(var xe=new e(Oe),de=new e(19),ue=0;ue<O;++ue)de[o[ue]]=S(R,D+3*ue,7);D+=3*O;var be=y(de),ae=(1<<be)-1,w=p(de,be,1);for(ue=0;ue<Oe;){var T,F=w[S(R,D,ae)];if(D+=15&F,(T=F>>>4)<16)xe[ue++]=T;else{var se=0,$=0;for(T==16?($=3+S(R,D,3),D+=2,se=xe[ue-1]):T==17?($=3+S(R,D,7),D+=3):T==18&&($=11+S(R,D,127),D+=7);$--;)xe[ue++]=se}}var ie=xe.subarray(0,fe),ce=xe.subarray(fe);W=y(ie),ee=y(ce),L=p(ie,W,1),k=p(ce,ee,1)}else b(1);if(D>J){X&&b(0);break}}P&&Q(H+131072);for(var _e=(1<<W)-1,he=(1<<ee)-1,me=D;;me=D){var Ee=(se=L[C(R,D)&_e])>>>4;if((D+=15&se)>J){X&&b(0);break}if(se||b(2),Ee<256)z[H++]=Ee;else{if(Ee==256){me=D,L=null;break}var oe=Ee-254;if(Ee>264){var He=n[ue=Ee-257];oe=S(R,D,(1<<He)-1)+c[ue],D+=He}var ke=k[C(R,D)&he],we=ke>>>4;if(ke||b(3),D+=15&ke,ce=u[we],we>3&&(He=r[we],ce+=C(R,D)&(1<<He)-1,D+=He),D>J){X&&b(0);break}P&&Q(H+131072);for(var Se=H+oe;H<Se;H+=4)z[H]=z[H-ce],z[H+1]=z[H+1-ce],z[H+2]=z[H+2-ce],z[H+3]=z[H+3-ce];H=Se}}I.l=L,I.p=me,I.b=H,L&&(V=1,I.m=W,I.d=k,I.n=ee)}while(!V);return H==z.length?z:function(Ae,Ne,Ge){(Ne==null||Ne<0)&&(Ne=0),(Ge==null||Ge>Ae.length)&&(Ge=Ae.length);var je=new(Ae instanceof t?t:Ae instanceof i?i:e)(Ge-Ne);return je.set(Ae.subarray(Ne,Ge)),je}(z,0,H)},M=new e(0),N=typeof TextDecoder<"u"&&new TextDecoder;try{N.decode(M,{stream:!0})}catch{}return s.convert_streams=function(R){var z=new DataView(R),I=0;function U(){var fe=z.getUint16(I);return I+=2,fe}function P(){var fe=z.getUint32(I);return I+=4,fe}function X(fe){pe.setUint16(ge,fe),ge+=2}function q(fe){pe.setUint32(ge,fe),ge+=4}for(var Q={signature:P(),flavor:P(),length:P(),numTables:U(),reserved:U(),totalSfntSize:P(),majorVersion:U(),minorVersion:U(),metaOffset:P(),metaLength:P(),metaOrigLength:P(),privOffset:P(),privLength:P()},V=0;Math.pow(2,V)<=Q.numTables;)V++;V--;for(var D=16*Math.pow(2,V),H=16*Q.numTables-D,L=12,k=[],W=0;W<Q.numTables;W++)k.push({tag:P(),offset:P(),compLength:P(),origLength:P(),origChecksum:P()}),L+=16;var ee,J=new Uint8Array(12+16*k.length+k.reduce(function(fe,O){return fe+O.origLength+4},0)),re=J.buffer,pe=new DataView(re),ge=0;return q(Q.flavor),X(Q.numTables),X(D),X(V),X(H),k.forEach(function(fe){q(fe.tag),q(fe.origChecksum),q(L),q(fe.origLength),fe.outOffset=L,(L+=fe.origLength)%4!=0&&(L+=4-L%4)}),k.forEach(function(fe){var O,Oe=R.slice(fe.offset,fe.offset+fe.compLength);if(fe.compLength!=fe.origLength){var xe=new Uint8Array(fe.origLength);O=new Uint8Array(Oe,2),x(O,xe)}else xe=new Uint8Array(Oe);J.set(xe,fe.outOffset);var de=0;(L=fe.outOffset+fe.origLength)%4!=0&&(de=4-L%4),J.set(new Uint8Array(de).buffer,fe.outOffset+fe.origLength),ee=L+de}),re.slice(0,ee)},Object.defineProperty(s,"__esModule",{value:!0}),s}({}).convert_streams}function j1(s,e){let t={M:2,L:2,Q:4,C:6,Z:0},i={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},n=1,r=2,o=4,a=8,l=16,c=32,h;function u(E){if(!h){let b={R:r,L:n,D:o,C:l,U:c,T:a};h=new Map;for(let x in i){let M=0;i[x].split(",").forEach(N=>{let[R,z]=N.split("+");R=parseInt(R,36),z=z?parseInt(z,36):0,h.set(M+=R,b[x]);for(let I=z;I--;)h.set(++M,b[x])})}}return h.get(E)||c}let f=1,d=2,m=3,p=4,A=[null,"isol","init","fina","medi"];function g(E){let b=new Uint8Array(E.length),x=c,M=f,N=-1;for(let R=0;R<E.length;R++){let z=E.codePointAt(R),I=u(z)|0,U=f;I&a||(x&(n|o|l)?I&(r|o|l)?(U=m,(M===f||M===m)&&b[N]++):I&(n|c)&&(M===d||M===p)&&b[N]--:x&(r|c)&&(M===d||M===p)&&b[N]--,M=b[R]=U,x=I,N=R,z>65535&&R++)}return b}function v(E,b){let x=[];for(let N=0;N<b.length;N++){let R=b.codePointAt(N);R>65535&&N++,x.push(s.U.codeToGlyph(E,R))}let M=E.GSUB;if(M){let{lookupList:N,featureList:R}=M,z,I=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,U=[];R.forEach(P=>{if(I.test(P.tag))for(let X=0;X<P.tab.length;X++){if(U[P.tab[X]])continue;U[P.tab[X]]=!0;let q=N[P.tab[X]],Q=/^(isol|init|fina|medi)$/.test(P.tag);Q&&!z&&(z=g(b));for(let V=0;V<x.length;V++)(!z||!Q||A[z[V]]===P.tag)&&s.U._applySubs(x,V,q,N)}})}return x}function _(E,b){let x=new Int16Array(b.length*3),M=0;for(;M<b.length;M++){let I=b[M];if(I===-1)continue;x[M*3+2]=E.hmtx.aWidth[I];let U=E.GPOS;if(U){let P=U.lookupList;for(let X=0;X<P.length;X++){let q=P[X];for(let Q=0;Q<q.tabs.length;Q++){let V=q.tabs[Q];if(q.ltype===1){if(s._lctf.coverageIndex(V.coverage,I)!==-1&&V.pos){z(V.pos,M);break}}else if(q.ltype===2){let D=null,H=N();if(H!==-1){let L=s._lctf.coverageIndex(V.coverage,b[H]);if(L!==-1){if(V.fmt===1){let k=V.pairsets[L];for(let W=0;W<k.length;W++)k[W].gid2===I&&(D=k[W])}else if(V.fmt===2){let k=s.U._getGlyphClass(b[H],V.classDef1),W=s.U._getGlyphClass(I,V.classDef2);D=V.matrix[k][W]}if(D){D.val1&&z(D.val1,H),D.val2&&z(D.val2,M);break}}}}else if(q.ltype===4){let D=s._lctf.coverageIndex(V.markCoverage,I);if(D!==-1){let H=N(R),L=H===-1?-1:s._lctf.coverageIndex(V.baseCoverage,b[H]);if(L!==-1){let k=V.markArray[D],W=V.baseArray[L][k.markClass];x[M*3]=W.x-k.x+x[H*3]-x[H*3+2],x[M*3+1]=W.y-k.y+x[H*3+1];break}}}else if(q.ltype===6){let D=s._lctf.coverageIndex(V.mark1Coverage,I);if(D!==-1){let H=N();if(H!==-1){let L=b[H];if(y(E,L)===3){let k=s._lctf.coverageIndex(V.mark2Coverage,L);if(k!==-1){let W=V.mark1Array[D],ee=V.mark2Array[k][W.markClass];x[M*3]=ee.x-W.x+x[H*3]-x[H*3+2],x[M*3+1]=ee.y-W.y+x[H*3+1];break}}}}}}}}else if(E.kern&&!E.cff){let P=N();if(P!==-1){let X=E.kern.glyph1.indexOf(b[P]);if(X!==-1){let q=E.kern.rval[X].glyph2.indexOf(I);q!==-1&&(x[P*3+2]+=E.kern.rval[X].vals[q])}}}}return x;function N(I){for(let U=M-1;U>=0;U--)if(b[U]!==-1&&(!I||I(b[U])))return U;return-1}function R(I){return y(E,I)===1}function z(I,U){for(let P=0;P<3;P++)x[U*3+P]+=I[P]||0}}function y(E,b){let x=E.GDEF&&E.GDEF.glyphClassDef;return x?s.U._getGlyphClass(b,x):0}function S(...E){for(let b=0;b<E.length;b++)if(typeof E[b]=="number")return E[b]}function C(E){let b=Object.create(null),x=E["OS/2"],M=E.hhea,N=E.head.unitsPerEm,R=S(x&&x.sTypoAscender,M&&M.ascender,N),z={unitsPerEm:N,ascender:R,descender:S(x&&x.sTypoDescender,M&&M.descender,0),capHeight:S(x&&x.sCapHeight,R),xHeight:S(x&&x.sxHeight,R),lineGap:S(x&&x.sTypoLineGap,M&&M.lineGap),supportsCodePoint(I){return s.U.codeToGlyph(E,I)>0},forEachGlyph(I,U,P,X){let q=0,Q=1/z.unitsPerEm*U,V=v(E,I),D=0,H=_(E,V);return V.forEach((L,k)=>{if(L!==-1){let W=b[L];if(!W){let{cmds:ee,crds:J}=s.U.glyphToPath(E,L),re="",pe=0;for(let xe=0,de=ee.length;xe<de;xe++){let ue=t[ee[xe]];re+=ee[xe];for(let be=1;be<=ue;be++)re+=(be>1?",":"")+J[pe++]}let ge,fe,O,Oe;if(J.length){ge=fe=1/0,O=Oe=-1/0;for(let xe=0,de=J.length;xe<de;xe+=2){let ue=J[xe],be=J[xe+1];ue<ge&&(ge=ue),be<fe&&(fe=be),ue>O&&(O=ue),be>Oe&&(Oe=be)}}else ge=O=fe=Oe=0;W=b[L]={index:L,advanceWidth:E.hmtx.aWidth[L],xMin:ge,yMin:fe,xMax:O,yMax:Oe,path:re}}X.call(null,W,q+H[k*3]*Q,H[k*3+1]*Q,D),q+=H[k*3+2]*Q,P&&(q+=P*U)}D+=I.codePointAt(D)>65535?2:1}),q}};return z}return function(b){let x=new Uint8Array(b,0,4),M=s._bin.readASCII(x,0,4);if(M==="wOFF")b=e(b);else if(M==="wOF2")throw new Error("woff2 fonts not supported");return C(s.parse(b)[0])}}var $1=Wr({name:"Typr Font Parser",dependencies:[J1,Z1,j1],init(s,e,t){let i=s(),n=e();return t(i,n)}});function eS(){return function(s){var e=function(){this.buckets=new Map};e.prototype.add=function(_){var y=_>>5;this.buckets.set(y,(this.buckets.get(y)||0)|1<<(31&_))},e.prototype.has=function(_){var y=this.buckets.get(_>>5);return y!==void 0&&(y&1<<(31&_))!=0},e.prototype.serialize=function(){var _=[];return this.buckets.forEach(function(y,S){_.push((+S).toString(36)+":"+y.toString(36))}),_.join(",")},e.prototype.deserialize=function(_){var y=this;this.buckets.clear(),_.split(",").forEach(function(S){var C=S.split(":");y.buckets.set(parseInt(C[0],36),parseInt(C[1],36))})};var t=Math.pow(2,8),i=t-1,n=~i;function r(_){var y=function(C){return C&n}(_).toString(16),S=function(C){return(C&n)+t-1}(_).toString(16);return"codepoint-index/plane"+(_>>16)+"/"+y+"-"+S+".json"}function o(_,y){var S=_&i,C=y.codePointAt(S/6|0);return((C=(C||48)-48)&1<<S%6)!=0}function a(_,y){var S;(S=_,S.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map(function(C){return C.split("-").map(function(E){return parseInt(E.trim(),16)})})).forEach(function(C){var E=C[0],b=C[1];b===void 0&&(b=E),y(E,b)})}function l(_,y){a(_,function(S,C){for(var E=S;E<=C;E++)y(E)})}var c={},h={},u=new WeakMap,f="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";function d(_){var y=u.get(_);return y||(y=new e,l(_.ranges,function(S){return y.add(S)}),u.set(_,y)),y}var m,p=new Map;function A(_,y,S){return _[y]?y:_[S]?S:function(C){for(var E in C)return E}(_)}function g(_,y){var S=y;if(!_.includes(S)){S=1/0;for(var C=0;C<_.length;C++)Math.abs(_[C]-y)<Math.abs(S-y)&&(S=_[C])}return S}function v(_){return m||(m=new Set,l("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",function(y){m.add(y)})),m.has(_)}return s.CodePointSet=e,s.clearCache=function(){c={},h={}},s.getFontsForString=function(_,y){y===void 0&&(y={});var S,C=y.lang;C===void 0&&(C=/\p{Script=Hangul}/u.test(S=_)?"ko":/\p{Script=Hiragana}|\p{Script=Katakana}/u.test(S)?"ja":"en");var E=y.category;E===void 0&&(E="sans-serif");var b=y.style;b===void 0&&(b="normal");var x=y.weight;x===void 0&&(x=400);var M=(y.dataUrl||f).replace(/\/$/g,""),N=new Map,R=new Uint8Array(_.length),z={},I={},U=new Array(_.length),P=new Map,X=!1;function q(D){var H=p.get(D);return H||(H=fetch(M+"/"+D).then(function(L){if(!L.ok)throw new Error(L.statusText);return L.json().then(function(k){if(!Array.isArray(k)||k[0]!==1)throw new Error("Incorrect schema version; need 1, got "+k[0]);return k[1]})}).catch(function(L){if(M!==f)return X||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+M+'", trying default CDN. '+L.message),X=!0),M=f,p.delete(D),q(D);throw L}),p.set(D,H)),H}for(var Q=function(D){var H=_.codePointAt(D),L=r(H);U[D]=L,c[L]||P.has(L)||P.set(L,q(L).then(function(k){c[L]=k})),H>65535&&(D++,V=D)},V=0;V<_.length;V++)Q(V);return Promise.all(P.values()).then(function(){P.clear();for(var D=function(L){var k=_.codePointAt(L),W=null,ee=c[U[L]],J=void 0;for(var re in ee){var pe=I[re];if(pe===void 0&&(pe=I[re]=new RegExp(re).test(C||"en")),pe){for(var ge in J=re,ee[re])if(o(k,ee[re][ge])){W=ge;break}break}}if(!W){e:for(var fe in ee)if(fe!==J){for(var O in ee[fe])if(o(k,ee[fe][O])){W=O;break e}}}W||(console.debug("No font coverage for U+"+k.toString(16)),W="latin"),U[L]=W,h[W]||P.has(W)||P.set(W,q("font-meta/"+W+".json").then(function(Oe){h[W]=Oe})),k>65535&&(L++,H=L)},H=0;H<_.length;H++)D(H);return Promise.all(P.values())}).then(function(){for(var D,H=null,L=0;L<_.length;L++){var k=_.codePointAt(L);if(H&&(v(k)||d(H).has(k)))R[L]=R[L-1];else{H=h[U[L]];var W=z[H.id];if(!W){var ee=H.typeforms,J=A(ee,E,"sans-serif"),re=A(ee[J],b,"normal"),pe=g((D=ee[J])===null||D===void 0?void 0:D[re],x);W=z[H.id]=M+"/font-files/"+H.id+"/"+J+"."+re+"."+pe+".woff"}var ge=N.get(W);ge==null&&(ge=N.size,N.set(W,ge)),R[L]=ge}k>65535&&(L++,R[L]=R[L-1])}return{fontUrls:Array.from(N.keys()),chars:R}})},Object.defineProperty(s,"__esModule",{value:!0}),s}({})}function tS(s,e){let t=Object.create(null),i=Object.create(null);function n(o,a){let l=c=>{console.error(`Failure loading font ${o}`,c)};try{let c=new XMLHttpRequest;c.open("get",o,!0),c.responseType="arraybuffer",c.onload=function(){if(c.status>=400)l(new Error(c.statusText));else if(c.status>0)try{let h=s(c.response);h.src=o,a(h)}catch(h){l(h)}},c.onerror=l,c.send()}catch(c){l(c)}}function r(o,a){let l=t[o];l?a(l):i[o]?i[o].push(a):(i[o]=[a],n(o,c=>{c.src=o,t[o]=c,i[o].forEach(h=>h(c)),delete i[o]}))}return function(o,a,{lang:l,fonts:c=[],style:h="normal",weight:u="normal",unicodeFontsURL:f}={}){let d=new Uint8Array(o.length),m=[];o.length||v();let p=new Map,A=[];if(h!=="italic"&&(h="normal"),typeof u!="number"&&(u=u==="bold"?700:400),c&&!Array.isArray(c)&&(c=[c]),c=c.slice().filter(y=>!y.lang||y.lang.test(l)).reverse(),c.length){let E=0;(function b(x=0){for(let M=x,N=o.length;M<N;M++){let R=o.codePointAt(M);if(E===1&&m[d[M-1]].supportsCodePoint(R)||M>0&&/\s/.test(o[M]))d[M]=d[M-1],E===2&&(A[A.length-1][1]=M);else for(let z=d[M],I=c.length;z<=I;z++)if(z===I){let U=E===2?A[A.length-1]:A[A.length]=[M,M];U[1]=M,E=2}else{d[M]=z;let{src:U,unicodeRange:P}=c[z];if(!P||_(R,P)){let X=t[U];if(!X){r(U,()=>{b(M)});return}if(X.supportsCodePoint(R)){let q=p.get(X);typeof q!="number"&&(q=m.length,m.push(X),p.set(X,q)),d[M]=q,E=1;break}}}R>65535&&M+1<N&&(d[M+1]=d[M],M++,E===2&&(A[A.length-1][1]=M))}g()})()}else A.push([0,o.length-1]),g();function g(){if(A.length){let y=A.map(S=>o.substring(S[0],S[1]+1)).join(`
`);e.getFontsForString(y,{lang:l||void 0,style:h,weight:u,dataUrl:f}).then(({fontUrls:S,chars:C})=>{let E=m.length,b=0;A.forEach(M=>{for(let N=0,R=M[1]-M[0];N<=R;N++)d[M[0]+N]=C[b++]+E;b++});let x=0;S.forEach((M,N)=>{r(M,R=>{m[N+E]=R,++x===S.length&&v()})})})}else v()}function v(){a({chars:d,fonts:m})}function _(y,S){for(let C=0;C<S.length;C++){let[E,b=E]=S[C];if(E<=y&&y<=b)return!0}return!1}}}var nS=Wr({name:"FontResolver",dependencies:[tS,$1,eS],init(s,e,t){return s(e,t())}});function iS(s,e){let i=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,n="[^\\S\\u00A0]",r=new RegExp(`${n}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function o({text:m,lang:p,fonts:A,style:g,weight:v,preResolvedFonts:_,unicodeFontsURL:y},S){let C=({chars:E,fonts:b})=>{let x,M,N=[];for(let R=0;R<E.length;R++)E[R]!==M?(M=E[R],N.push(x={start:R,end:R,fontObj:b[E[R]]})):x.end=R;S(N)};_?C(_):s(m,C,{lang:p,fonts:A,style:g,weight:v,unicodeFontsURL:y})}function a({text:m="",font:p,lang:A,sdfGlyphSize:g=64,fontSize:v=400,fontWeight:_=1,fontStyle:y="normal",letterSpacing:S=0,lineHeight:C="normal",maxWidth:E=1/0,direction:b,textAlign:x="left",textIndent:M=0,whiteSpace:N="normal",overflowWrap:R="normal",anchorX:z=0,anchorY:I=0,metricsOnly:U=!1,unicodeFontsURL:P,preResolvedFonts:X=null,includeCaretPositions:q=!1,chunkedBoundsSize:Q=8192,colorRanges:V=null},D){let H=u(),L={fontLoad:0,typesetting:0};m.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),m=m.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),v=+v,S=+S,E=+E,C=C||"normal",M=+M,o({text:m,lang:A,style:y,weight:_,fonts:typeof p=="string"?[{src:p}]:p,unicodeFontsURL:P,preResolvedFonts:X},k=>{L.fontLoad=u()-H;let W=isFinite(E),ee=null,J=null,re=null,pe=null,ge=null,fe=null,O=null,Oe=null,xe=0,de=0,ue=N!=="nowrap",be=new Map,ae=u(),w=M,T=0,F=new f,se=[F];k.forEach(he=>{let{fontObj:me}=he,{ascender:Ee,descender:oe,unitsPerEm:He,lineGap:ke,capHeight:we,xHeight:Se}=me,Ae=be.get(me);if(!Ae){let le=v/He,G=C==="normal"?(Ee-oe+ke)*le:C*v,Te=(G-(Ee-oe)*le)/2,ve=Math.min(G,(Ee-oe)*le),Ie=(Ee+oe)/2*le+ve/2;Ae={index:be.size,src:me.src,fontObj:me,fontSizeMult:le,unitsPerEm:He,ascender:Ee*le,descender:oe*le,capHeight:we*le,xHeight:Se*le,lineHeight:G,baseline:-Te-Ee*le,caretTop:Ie,caretBottom:Ie-ve},be.set(me,Ae)}let{fontSizeMult:Ne}=Ae,Ge=m.slice(he.start,he.end+1),je,Fe;me.forEachGlyph(Ge,v,S,(le,G,Te,ve)=>{G+=T,ve+=he.start,je=G,Fe=le;let Ie=m.charAt(ve),Re=le.advanceWidth*Ne,Ve=F.count,De;if("isEmpty"in le||(le.isWhitespace=!!Ie&&new RegExp(n).test(Ie),le.canBreakAfter=!!Ie&&r.test(Ie),le.isEmpty=le.xMin===le.xMax||le.yMin===le.yMax||i.test(Ie)),!le.isWhitespace&&!le.isEmpty&&de++,ue&&W&&!le.isWhitespace&&G+Re+w>E&&Ve){if(F.glyphAt(Ve-1).glyphObj.canBreakAfter)De=new f,w=-G;else for(let tt=Ve;tt--;)if(tt===0&&R==="break-word"){De=new f,w=-G;break}else if(F.glyphAt(tt).glyphObj.canBreakAfter){De=F.splitAt(tt+1);let Ke=De.glyphAt(0).x;w-=Ke;for(let et=De.count;et--;)De.glyphAt(et).x-=Ke;break}De&&(F.isSoftWrapped=!0,F=De,se.push(F),xe=E)}let Ye=F.glyphAt(F.count);Ye.glyphObj=le,Ye.x=G+w,Ye.y=Te,Ye.width=Re,Ye.charIndex=ve,Ye.fontData=Ae,Ie===`
`&&(F=new f,se.push(F),w=-(G+Re+S*v)+M)}),T=je+Fe.advanceWidth*Ne+S*v});let $=0;se.forEach(he=>{let me=!0;for(let Ee=he.count;Ee--;){let oe=he.glyphAt(Ee);me&&!oe.glyphObj.isWhitespace&&(he.width=oe.x+oe.width,he.width>xe&&(xe=he.width),me=!1);let{lineHeight:He,capHeight:ke,xHeight:we,baseline:Se}=oe.fontData;He>he.lineHeight&&(he.lineHeight=He);let Ae=Se-he.baseline;Ae<0&&(he.baseline+=Ae,he.cap+=Ae,he.ex+=Ae),he.cap=Math.max(he.cap,he.baseline+ke),he.ex=Math.max(he.ex,he.baseline+we)}he.baseline-=$,he.cap-=$,he.ex-=$,$+=he.lineHeight});let ie=0,ce=0;if(z&&(typeof z=="number"?ie=-z:typeof z=="string"&&(ie=-xe*(z==="left"?0:z==="center"?.5:z==="right"?1:c(z)))),I&&(typeof I=="number"?ce=-I:typeof I=="string"&&(ce=I==="top"?0:I==="top-baseline"?-se[0].baseline:I==="top-cap"?-se[0].cap:I==="top-ex"?-se[0].ex:I==="middle"?$/2:I==="bottom"?$:I==="bottom-baseline"?-se[se.length-1].baseline:c(I)*$)),!U){let he=e.getEmbeddingLevels(m,b);ee=new Uint16Array(de),J=new Uint8Array(de),re=new Float32Array(de*2),pe={},O=[1/0,1/0,-1/0,-1/0],Oe=[],q&&(fe=new Float32Array(m.length*4)),V&&(ge=new Uint8Array(de*3));let me=0,Ee=-1,oe=-1,He,ke;if(se.forEach((we,Se)=>{let{count:Ae,width:Ne}=we;if(Ae>0){let Ge=0;for(let ve=Ae;ve--&&we.glyphAt(ve).glyphObj.isWhitespace;)Ge++;let je=0,Fe=0;if(x==="center")je=(xe-Ne)/2;else if(x==="right")je=xe-Ne;else if(x==="justify"&&we.isSoftWrapped){let ve=0;for(let Ie=Ae-Ge;Ie--;)we.glyphAt(Ie).glyphObj.isWhitespace&&ve++;Fe=(xe-Ne)/ve}if(Fe||je){let ve=0;for(let Ie=0;Ie<Ae;Ie++){let Re=we.glyphAt(Ie),Ve=Re.glyphObj;Re.x+=je+ve,Fe!==0&&Ve.isWhitespace&&Ie<Ae-Ge&&(ve+=Fe,Re.width+=Fe)}}let le=e.getReorderSegments(m,he,we.glyphAt(0).charIndex,we.glyphAt(we.count-1).charIndex);for(let ve=0;ve<le.length;ve++){let[Ie,Re]=le[ve],Ve=1/0,De=-1/0;for(let Ye=0;Ye<Ae;Ye++)if(we.glyphAt(Ye).charIndex>=Ie){let tt=Ye,Ke=Ye;for(;Ke<Ae;Ke++){let et=we.glyphAt(Ke);if(et.charIndex>Re)break;Ke<Ae-Ge&&(Ve=Math.min(Ve,et.x),De=Math.max(De,et.x+et.width))}for(let et=tt;et<Ke;et++){let xt=we.glyphAt(et);xt.x=De-(xt.x+xt.width-Ve)}break}}let G,Te=ve=>G=ve;for(let ve=0;ve<Ae;ve++){let Ie=we.glyphAt(ve);G=Ie.glyphObj;let Re=G.index,Ve=he.levels[Ie.charIndex]&1;if(Ve){let De=e.getMirroredCharacter(m[Ie.charIndex]);De&&Ie.fontData.fontObj.forEachGlyph(De,0,0,Te)}if(q){let{charIndex:De,fontData:Ye}=Ie,tt=Ie.x+ie,Ke=Ie.x+Ie.width+ie;fe[De*4]=Ve?Ke:tt,fe[De*4+1]=Ve?tt:Ke,fe[De*4+2]=we.baseline+Ye.caretBottom+ce,fe[De*4+3]=we.baseline+Ye.caretTop+ce;let et=De-Ee;et>1&&h(fe,Ee,et),Ee=De}if(V){let{charIndex:De}=Ie;for(;De>oe;)oe++,V.hasOwnProperty(oe)&&(ke=V[oe])}if(!G.isWhitespace&&!G.isEmpty){let De=me++,{fontSizeMult:Ye,src:tt,index:Ke}=Ie.fontData,et=pe[tt]||(pe[tt]={});et[Re]||(et[Re]={path:G.path,pathBounds:[G.xMin,G.yMin,G.xMax,G.yMax]});let xt=Ie.x+ie,Rt=Ie.y+we.baseline+ce;re[De*2]=xt,re[De*2+1]=Rt;let Sn=xt+G.xMin*Ye,hn=Rt+G.yMin*Ye,Jt=xt+G.xMax*Ye,Ft=Rt+G.yMax*Ye;Sn<O[0]&&(O[0]=Sn),hn<O[1]&&(O[1]=hn),Jt>O[2]&&(O[2]=Jt),Ft>O[3]&&(O[3]=Ft),De%Q===0&&(He={start:De,end:De,rect:[1/0,1/0,-1/0,-1/0]},Oe.push(He)),He.end++;let ht=He.rect;if(Sn<ht[0]&&(ht[0]=Sn),hn<ht[1]&&(ht[1]=hn),Jt>ht[2]&&(ht[2]=Jt),Ft>ht[3]&&(ht[3]=Ft),ee[De]=Re,J[De]=Ke,V){let Nn=De*3;ge[Nn]=ke>>16&255,ge[Nn+1]=ke>>8&255,ge[Nn+2]=ke&255}}}}}),fe){let we=m.length-Ee;we>1&&h(fe,Ee,we)}}let _e=[];be.forEach(({index:he,src:me,unitsPerEm:Ee,ascender:oe,descender:He,lineHeight:ke,capHeight:we,xHeight:Se})=>{_e[he]={src:me,unitsPerEm:Ee,ascender:oe,descender:He,lineHeight:ke,capHeight:we,xHeight:Se}}),L.typesetting=u()-ae,D({glyphIds:ee,glyphFontIndices:J,glyphPositions:re,glyphData:pe,fontData:_e,caretPositions:fe,glyphColors:ge,chunkedBounds:Oe,fontSize:v,topBaseline:ce+se[0].baseline,blockBounds:[ie,ce-$,ie+xe,ce],visibleBounds:O,timings:L})})}function l(m,p){a({...m,metricsOnly:!0},A=>{let[g,v,_,y]=A.blockBounds;p({width:_-g,height:y-v})})}function c(m){let p=m.match(/^([\d.]+)%$/),A=p?parseFloat(p[1]):NaN;return isNaN(A)?0:A/100}function h(m,p,A){let g=m[p*4],v=m[p*4+1],_=m[p*4+2],y=m[p*4+3],S=(v-g)/A;for(let C=0;C<A;C++){let E=(p+C)*4;m[E]=g+S*C,m[E+1]=g+S*(C+1),m[E+2]=_,m[E+3]=y}}function u(){return(self.performance||Date).now()}function f(){this.data=[]}let d=["glyphObj","x","y","width","charIndex","fontData"];return f.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/d.length)},glyphAt(m){let p=f.flyweight;return p.data=this.data,p.index=m,p},splitAt(m){let p=new f;return p.data=this.data.splice(m*d.length),p}},f.flyweight=d.reduce((m,p,A,g)=>(Object.defineProperty(m,p,{get(){return this.data[this.index*d.length+A]},set(v){this.data[this.index*d.length+A]=v}}),m),{data:null,index:0}),{typeset:a,measure:l}}var qr=()=>(self.performance||Date).now(),gc=df(),ym;function rS(s,e,t,i,n,r,o,a,l,c,h=!0){return h?oS(s,e,t,i,n,r,o,a,l,c).then(null,u=>(ym||(console.warn("WebGL SDF generation failed, falling back to JS",u),ym=!0),Em(s,e,t,i,n,r,o,a,l,c))):Em(s,e,t,i,n,r,o,a,l,c)}var mc=[],sS=5,_f=0;function Bm(){let s=qr();for(;mc.length&&qr()-s<sS;)mc.shift()();_f=mc.length?setTimeout(Bm,0):0}var oS=(...s)=>new Promise((e,t)=>{mc.push(()=>{let i=qr();try{gc.webgl.generateIntoCanvas(...s),e({timing:qr()-i})}catch(n){t(n)}}),_f||(_f=setTimeout(Bm,0))}),aS=4,lS=2e3,xm={},cS=0;function Em(s,e,t,i,n,r,o,a,l,c){let h="TroikaTextSDFGenerator_JS_"+cS++%aS,u=xm[h];return u||(u=xm[h]={workerModule:Wr({name:h,workerId:h,dependencies:[df,qr],init(f,d){let m=f().javascript.generate;return function(...p){let A=d();return{textureData:m(...p),timing:d()-A}}},getTransferables(f){return[f.textureData.buffer]}}),requests:0,idleTimer:null}),u.requests++,clearTimeout(u.idleTimer),u.workerModule(s,e,t,i,n,r).then(({textureData:f,timing:d})=>{let m=qr(),p=new Uint8Array(f.length*4);for(let A=0;A<f.length;A++)p[A*4+c]=f[A];return gc.webglUtils.renderImageData(o,p,a,l,s,e,1<<3-c),d+=qr()-m,--u.requests===0&&(u.idleTimer=setTimeout(()=>{Am(h)},lS)),{timing:d}})}function hS(s){s._warm||(gc.webgl.isSupported(s),s._warm=!0)}var uS=gc.webglUtils.resizeWebGLCanvasWithoutClearing,Xr={defaultFontURL:null,unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048,useWorker:!0},fS=new Le,dS=!1;function Js(){return(self.performance||Date).now()}var Sm=Object.create(null);function Rm(s,e){dS=!0,s=pS({},s);let t=Js(),{defaultFontURL:i}=Xr,n=[];if(i&&n.push({label:"default",src:Cm(i)}),s.font&&n.push({label:"user",src:Cm(s.font)}),s.font=n,s.text=""+s.text,s.sdfGlyphSize=s.sdfGlyphSize||Xr.sdfGlyphSize,s.unicodeFontsURL=s.unicodeFontsURL||Xr.unicodeFontsURL,s.colorRanges!=null){let d={};for(let m in s.colorRanges)if(s.colorRanges.hasOwnProperty(m)){let p=s.colorRanges[m];typeof p!="number"&&(p=fS.set(p).getHex()),d[m]=p}s.colorRanges=d}Object.freeze(s);let{textureWidth:r,sdfExponent:o}=Xr,{sdfGlyphSize:a}=s,l=r/a*4,c=Sm[a];if(!c){let d=document.createElement("canvas");d.width=r,d.height=a*256/l,c=Sm[a]={glyphCount:0,sdfGlyphSize:a,sdfCanvas:d,sdfTexture:new kt(d,void 0,void 0,void 0,Et,Et),contextLost:!1,glyphsByFont:new Map},c.sdfTexture.generateMipmaps=!1,AS(c)}let{sdfTexture:h,sdfCanvas:u}=c;(Xr.useWorker?Fm:gS)(s).then(d=>{let{glyphIds:m,glyphFontIndices:p,fontData:A,glyphPositions:g,fontSize:v,timings:_}=d,y=[],S=new Float32Array(m.length*4),C=0,E=0,b=Js(),x=A.map(I=>{let U=c.glyphsByFont.get(I.src);return U||c.glyphsByFont.set(I.src,U=new Map),U});m.forEach((I,U)=>{let P=p[U],{src:X,unitsPerEm:q}=A[P],Q=x[P].get(I);if(!Q){let{path:k,pathBounds:W}=d.glyphData[X][I],ee=Math.max(W[2]-W[0],W[3]-W[1])/a*(Xr.sdfMargin*a+.5),J=c.glyphCount++,re=[W[0]-ee,W[1]-ee,W[2]+ee,W[3]+ee];x[P].set(I,Q={path:k,atlasIndex:J,sdfViewBox:re}),y.push(Q)}let{sdfViewBox:V}=Q,D=g[E++],H=g[E++],L=v/q;S[C++]=D+V[0]*L,S[C++]=H+V[1]*L,S[C++]=D+V[2]*L,S[C++]=H+V[3]*L,m[U]=Q.atlasIndex}),_.quads=(_.quads||0)+(Js()-b);let M=Js();_.sdf={};let N=u.height,R=Math.ceil(c.glyphCount/l),z=Math.pow(2,Math.ceil(Math.log2(R*a)));z>N&&(console.info(`Increasing SDF texture size ${N}->${z}`),uS(u,r,z),h.dispose()),Promise.all(y.map(I=>Dm(I,c,s.gpuAccelerateSDF).then(({timing:U})=>{_.sdf[I.atlasIndex]=U}))).then(()=>{y.length&&!c.contextLost&&(Um(c),h.needsUpdate=!0),_.sdfTotal=Js()-M,_.total=Js()-t,e(Object.freeze({parameters:s,sdfTexture:h,sdfGlyphSize:a,sdfExponent:o,glyphBounds:S,glyphAtlasIndices:m,glyphColors:d.glyphColors,caretPositions:d.caretPositions,chunkedBounds:d.chunkedBounds,ascender:d.ascender,descender:d.descender,lineHeight:d.lineHeight,capHeight:d.capHeight,xHeight:d.xHeight,topBaseline:d.topBaseline,blockBounds:d.blockBounds,visibleBounds:d.visibleBounds,timings:d.timings}))})}),Promise.resolve().then(()=>{c.contextLost||hS(u)})}function Dm({path:s,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:i,sdfCanvas:n,contextLost:r},o){if(r)return Promise.resolve({timing:-1});let{textureWidth:a,sdfExponent:l}=Xr,c=Math.max(t[2]-t[0],t[3]-t[1]),h=Math.floor(e/4),u=h%(a/i)*i,f=Math.floor(h/(a/i))*i,d=e%4;return rS(i,i,s,t,c,l,n,u,f,d,o)}function AS(s){let e=s.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),s.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),s.contextLost=!1;let i=[];s.glyphsByFont.forEach(n=>{n.forEach(r=>{i.push(Dm(r,s,!0))})}),Promise.all(i).then(()=>{Um(s),s.sdfTexture.needsUpdate=!0})})}function Lm({font:s,characters:e,sdfGlyphSize:t},i){let n=Array.isArray(e)?e.join(`
`):""+e;Rm({font:s,sdfGlyphSize:t,text:n},i)}function pS(s,e){for(let t in e)e.hasOwnProperty(t)&&(s[t]=e[t]);return s}var Ac;function Cm(s){return Ac||(Ac=typeof document>"u"?{}:document.createElement("a")),Ac.href=s,Ac.href}function Um(s){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");let{sdfCanvas:e,sdfTexture:t}=s,{width:i,height:n}=e,r=s.sdfCanvas.getContext("webgl"),o=t.image.data;(!o||o.length!==i*n*4)&&(o=new Uint8Array(i*n*4),t.image={width:i,height:n,data:o},t.flipY=!1,t.isDataTexture=!0),r.readPixels(0,0,i,n,r.RGBA,r.UNSIGNED_BYTE,o)}}var mS=Wr({name:"Typesetter",dependencies:[iS,nS,pm],init(s,e,t){return s(e,t())}}),Fm=Wr({name:"Typesetter",dependencies:[mS],init(s){return function(e){return new Promise(t=>{s.typeset(e,t)})}},getTransferables(s){let e=[];for(let t in s)s[t]&&s[t].buffer&&e.push(s[t].buffer);return e}}),gS=Fm.onMainThread;var Mm={};function _S(s){let e=Mm[s];return e||(e=Mm[s]=new Ui(1,1,s,s).translate(.5,.5,0)),e}var vS="aTroikaGlyphBounds",Tm="aTroikaGlyphIndex",yS="aTroikaGlyphColor",vf=class extends Yl{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new vn,this.boundingBox=new _n}computeBoundingSphere(){}computeBoundingBox(){}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=_S(e);["position","normal","uv"].forEach(i=>{this.attributes[i]=t.attributes[i].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,i,n,r){this.updateAttributeData(vS,e,4),this.updateAttributeData(Tm,t,1),this.updateAttributeData(yS,r,3),this._blockBounds=i,this._chunkedBounds=n,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){let e=this._blockBounds;if(e){let{curveRadius:t,boundingBox:i}=this;if(t){let{PI:n,floor:r,min:o,max:a,sin:l,cos:c}=Math,h=n/2,u=n*2,f=Math.abs(t),d=e[0]/f,m=e[2]/f,p=r((d+h)/u)!==r((m+h)/u)?-f:o(l(d)*f,l(m)*f),A=r((d-h)/u)!==r((m-h)/u)?f:a(l(d)*f,l(m)*f),g=r((d+n)/u)!==r((m+n)/u)?f*2:a(f-c(d)*f,f-c(m)*f);i.min.set(p,e[1],t<0?-g:0),i.max.set(A,e[3],t<0?0:g)}else i.min.set(e[0],e[1],0),i.max.set(e[2],e[3],0);i.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(Tm).count,i=this._chunkedBounds;if(i)for(let n=i.length;n--;){t=i[n].end;let r=i[n].rect;if(r[1]<e.w&&r[3]>e.y&&r[0]<e.z&&r[2]>e.x)break}this.instanceCount=t}updateAttributeData(e,t,i){let n=this.getAttribute(e);t?n&&n.array.length===t.length?(n.array.set(t),n.needsUpdate=!0):(this.setAttribute(e,new Fi(t,i)),delete this._maxInstanceCount,this.dispose()):n&&this.deleteAttribute(e)}},xS=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaEdgeOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,ES=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaEdgeOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaEdgeOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,SS=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaEdgeOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,CS=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaEdgeOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function MS(s){let e=dc(s,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new Qe},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new ot(0,0,0,0)},uTroikaClipRect:{value:new ot(0,0,0,0)},uTroikaEdgeOffset:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new Qe},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new Le},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new $e},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:xS,vertexTransform:ES,fragmentDefs:SS,fragmentColorTransform:CS,customRewriter({vertexShader:t,fragmentShader:i}){let n=/\buniform\s+vec3\s+diffuse\b/;return n.test(i)&&(i=i.replace(n,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),n.test(t)||(t=t.replace(pf,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:i}}});return e.transparent=!0,e.forceSinglePass=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}var yf=new Rn({color:16777215,side:bn,transparent:!0}),Im=8421504,bm=new Ze,pc=new K,mf=new K,ia=[],TS=new K,gf="+x+y";function wm(s){return Array.isArray(s)?s[0]:s}var Pm=()=>{let s=new _t(new Ui(1,1),yf);return Pm=()=>s,s},Nm=()=>{let s=new _t(new Ui(1,1,32,1),yf);return Nm=()=>s,s},IS={type:"syncstart"},bS={type:"synccomplete"},Om=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],wS=Om.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail"),ra=class extends _t{constructor(){let e=new vf;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=Im,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=gf,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(IS),Rm({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);let i=this._queuedSyncs;i&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{i.forEach(n=>n&&n())})),this.dispatchEvent(bS),e&&e()})))}onBeforeRender(e,t,i,n,r,o){this.sync(),r.isTroikaTextMaterial&&this._prepareForRender(r)}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}createDerivedMaterial(e){return MS(e)}get material(){let e=this._derivedMaterial,t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=yf.clone());if((!e||!e.isDerivedFrom(t))&&(e=this._derivedMaterial=this.createDerivedMaterial(t),t.addEventListener("dispose",function i(){t.removeEventListener("dispose",i),e.dispose()})),this.hasOutline()){let i=e._outlineMtl;return i||(i=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),i.isTextOutlineMaterial=!0,i.depthWrite=!1,i.map=null,e.addEventListener("dispose",function n(){e.removeEventListener("dispose",n),i.dispose()})),[i,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}hasOutline(){return!!(this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY)}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return wm(this.material).getDepthMaterial()}set customDepthMaterial(e){}get customDistanceMaterial(){return wm(this.material).getDistanceMaterial()}set customDistanceMaterial(e){}_prepareForRender(e){let t=e.isTextOutlineMaterial,i=e.uniforms,n=this.textRenderInfo;if(n){let{sdfTexture:a,blockBounds:l}=n;i.uTroikaSDFTexture.value=a,i.uTroikaSDFTextureSize.value.set(a.image.width,a.image.height),i.uTroikaSDFGlyphSize.value=n.sdfGlyphSize,i.uTroikaSDFExponent.value=n.sdfExponent,i.uTroikaTotalBounds.value.fromArray(l),i.uTroikaUseGlyphColors.value=!t&&!!n.glyphColors;let c=0,h=0,u=0,f,d,m,p=0,A=0;if(t){let{outlineWidth:v,outlineOffsetX:_,outlineOffsetY:y,outlineBlur:S,outlineOpacity:C}=this;c=this._parsePercent(v)||0,h=Math.max(0,this._parsePercent(S)||0),f=C,p=this._parsePercent(_)||0,A=this._parsePercent(y)||0}else u=Math.max(0,this._parsePercent(this.strokeWidth)||0),u&&(m=this.strokeColor,i.uTroikaStrokeColor.value.set(m??Im),d=this.strokeOpacity,d==null&&(d=1)),f=this.fillOpacity;i.uTroikaEdgeOffset.value=c,i.uTroikaPositionOffset.value.set(p,A),i.uTroikaBlurRadius.value=h,i.uTroikaStrokeWidth.value=u,i.uTroikaStrokeOpacity.value=d,i.uTroikaFillOpacity.value=f??1,i.uTroikaCurveRadius.value=this.curveRadius||0;let g=this.clipRect;if(g&&Array.isArray(g)&&g.length===4)i.uTroikaClipRect.value.fromArray(g);else{let v=(this.fontSize||.1)*100;i.uTroikaClipRect.value.set(l[0]-v,l[1]-v,l[2]+v,l[3]+v)}this.geometry.applyClipRect(i.uTroikaClipRect.value)}i.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;let r=t?this.outlineColor||0:this.color;if(r==null)delete e.color;else{let a=e.hasOwnProperty("color")?e.color:e.color=new Le;(r!==a._input||typeof r=="object")&&a.set(a._input=r)}let o=this.orientation||gf;if(o!==e._orientation){let a=i.uTroikaOrient.value;o=o.replace(/[^-+xyz]/g,"");let l=o!==gf&&o.match(/^([-+])([xyz])([-+])([xyz])$/);if(l){let[,c,h,u,f]=l;pc.set(0,0,0)[h]=c==="-"?1:-1,mf.set(0,0,0)[f]=u==="-"?-1:1,bm.lookAt(TS,pc.cross(mf),mf),a.setFromMatrix4(bm)}else a.identity();e._orientation=o}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),i=t?parseFloat(t[1]):NaN;e=(isNaN(i)?0:i/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new Qe){t.copy(e);let i=this.curveRadius;return i&&(t.x=Math.atan2(e.x,Math.abs(i)-Math.abs(e.z))*Math.abs(i)),t}worldPositionToTextCoords(e,t=new Qe){return pc.copy(e),this.localPositionToTextCoords(this.worldToLocal(pc),t)}raycast(e,t){let{textRenderInfo:i,curveRadius:n}=this;if(i){let r=i.blockBounds,o=n?Nm():Pm(),a=o.geometry,{position:l,uv:c}=a.attributes;for(let h=0;h<c.count;h++){let u=r[0]+c.getX(h)*(r[2]-r[0]),f=r[1]+c.getY(h)*(r[3]-r[1]),d=0;n&&(d=n-Math.cos(u/n)*n,u=Math.sin(u/n)*n),l.setXYZ(h,u,f,d)}a.boundingSphere=this.geometry.boundingSphere,a.boundingBox=this.geometry.boundingBox,o.matrixWorld=this.matrixWorld,o.material.side=this.material.side,ia.length=0,o.raycast(e,ia);for(let h=0;h<ia.length;h++)ia[h].object=this,t.push(ia[h])}}copy(e){let t=this.geometry;return super.copy(e),this.geometry=t,wS.forEach(i=>{this[i]=e[i]}),this}clone(){return new this.constructor().copy(this)}};Om.forEach(s=>{let e="_private_"+s;Object.defineProperty(ra.prototype,s,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});var vT=new _n,yT=new Le;function Qm(s,e,t){return Math.max(s,Math.min(e,t))}var xf=class{advance(e){if(!this.isRunning)return;let t=!1;if(this.lerp)this.value=(i=this.value,n=this.to,r=60*this.lerp,o=e,function(a,l,c){return(1-c)*a+c*l}(i,n,1-Math.exp(-r*o))),Math.round(this.value)===this.to&&(this.value=this.to,t=!0);else{this.currentTime+=e;let a=Qm(0,this.currentTime/this.duration,1);t=a>=1;let l=t?1:this.easing(a);this.value=this.from+(this.to-this.from)*l}var i,n,r,o;this.onUpdate?.(this.value,t),t&&this.stop()}stop(){this.isRunning=!1}fromTo(e,t,{lerp:i=.1,duration:n=1,easing:r=l=>l,onStart:o,onUpdate:a}){this.from=this.value=e,this.to=t,this.lerp=i,this.duration=n,this.easing=r,this.currentTime=0,this.isRunning=!0,o?.(),this.onUpdate=a}},Ef=class{constructor({wrapper:e,content:t,autoResize:i=!0,debounce:n=250}={}){Ci(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Ci(this,"onWrapperResize",()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Ci(this,"onContentResize",()=>{this.wrapper===window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=e,this.content=t,i&&(this.debouncedResize=function(r,o){let a;return function(){let l=arguments,c=this;clearTimeout(a),a=setTimeout(function(){r.apply(c,l)},o)}}(this.resize,n),this.wrapper===window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},_c=class{constructor(){this.events={}}emit(e,...t){let i=this.events[e]||[];for(let n=0,r=i.length;n<r;n++)i[n](...t)}on(e,t){return this.events[e]?.push(t)||(this.events[e]=[t]),()=>{this.events[e]=this.events[e]?.filter(i=>t!==i)}}off(e,t){this.events[e]=this.events[e]?.filter(i=>t!==i)}destroy(){this.events={}}},km=100/6,Sf=class{constructor(e,{wheelMultiplier:t=1,touchMultiplier:i=1}){Ci(this,"onTouchStart",e=>{let{clientX:t,clientY:i}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=t,this.touchStart.y=i,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:e})});Ci(this,"onTouchMove",e=>{let{clientX:t,clientY:i}=e.targetTouches?e.targetTouches[0]:e,n=-(t-this.touchStart.x)*this.touchMultiplier,r=-(i-this.touchStart.y)*this.touchMultiplier;this.touchStart.x=t,this.touchStart.y=i,this.lastDelta={x:n,y:r},this.emitter.emit("scroll",{deltaX:n,deltaY:r,event:e})});Ci(this,"onTouchEnd",e=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})});Ci(this,"onWheel",e=>{let{deltaX:t,deltaY:i,deltaMode:n}=e;t*=n===1?km:n===2?this.windowWidth:1,i*=n===1?km:n===2?this.windowHeight:1,t*=this.wheelMultiplier,i*=this.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:i,event:e})});Ci(this,"onWindowResize",()=>{this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight});this.element=e,this.wheelMultiplier=t,this.touchMultiplier=i,this.touchStart={x:null,y:null},this.emitter=new _c,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1})}},vc=class{constructor({wrapper:e=window,content:t=document.documentElement,wheelEventsTarget:i=e,eventsTarget:n=i,smoothWheel:r=!0,syncTouch:o=!1,syncTouchLerp:a=.075,touchInertiaMultiplier:l=35,duration:c,easing:h=_=>Math.min(1,1.001-Math.pow(2,-10*_)),lerp:u=!c&&.1,infinite:f=!1,orientation:d="vertical",gestureOrientation:m="vertical",touchMultiplier:p=1,wheelMultiplier:A=1,autoResize:g=!0,__experimental__naiveDimensions:v=!1}={}){this.__isSmooth=!1,this.__isScrolling=!1,this.__isStopped=!1,this.__isLocked=!1,this.onVirtualScroll=({deltaX:_,deltaY:y,event:S})=>{if(S.ctrlKey)return;let C=S.type.includes("touch"),E=S.type.includes("wheel");if(this.options.syncTouch&&C&&S.type==="touchstart"&&!this.isStopped&&!this.isLocked)return void this.reset();let b=_===0&&y===0,x=this.options.gestureOrientation==="vertical"&&y===0||this.options.gestureOrientation==="horizontal"&&_===0;if(b||x)return;let M=S.composedPath();if(M=M.slice(0,M.indexOf(this.rootElement)),M.find(I=>{var U,P,X,q,Q;return((U=I.hasAttribute)===null||U===void 0?void 0:U.call(I,"data-lenis-prevent"))||C&&((P=I.hasAttribute)===null||P===void 0?void 0:P.call(I,"data-lenis-prevent-touch"))||E&&((X=I.hasAttribute)===null||X===void 0?void 0:X.call(I,"data-lenis-prevent-wheel"))||((q=I.classList)===null||q===void 0?void 0:q.contains("lenis"))&&!(!((Q=I.classList)===null||Q===void 0)&&Q.contains("lenis-stopped"))}))return;if(this.isStopped||this.isLocked)return void S.preventDefault();if(this.isSmooth=this.options.syncTouch&&C||this.options.smoothWheel&&E,!this.isSmooth)return this.isScrolling=!1,void this.animate.stop();S.preventDefault();let N=y;this.options.gestureOrientation==="both"?N=Math.abs(y)>Math.abs(_)?y:_:this.options.gestureOrientation==="horizontal"&&(N=_);let R=C&&this.options.syncTouch,z=C&&S.type==="touchend"&&Math.abs(N)>5;z&&(N=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+N,Object.assign({programmatic:!1},R?{lerp:z?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}))},this.onNativeScroll=()=>{if(!this.__preventNextScrollEvent&&!this.isScrolling){let _=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.direction=Math.sign(this.animatedScroll-_),this.emit()}},window.lenisVersion="1.0.42",e!==document.documentElement&&e!==document.body||(e=window),this.options={wrapper:e,content:t,wheelEventsTarget:i,eventsTarget:n,smoothWheel:r,syncTouch:o,syncTouchLerp:a,touchInertiaMultiplier:l,duration:c,easing:h,lerp:u,infinite:f,gestureOrientation:m,orientation:d,touchMultiplier:p,wheelMultiplier:A,autoResize:g,__experimental__naiveDimensions:v},this.animate=new xf,this.emitter=new _c,this.dimensions=new Ef({wrapper:e,content:t,autoResize:g}),this.toggleClassName("lenis",!0),this.velocity=0,this.isLocked=!1,this.isStopped=!1,this.isSmooth=o||r,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll=new Sf(n,{touchMultiplier:p,wheelMultiplier:A}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.toggleClassName("lenis",!1),this.toggleClassName("lenis-smooth",!1),this.toggleClassName("lenis-scrolling",!1),this.toggleClassName("lenis-stopped",!1),this.toggleClassName("lenis-locked",!1)}on(e,t){return this.emitter.on(e,t)}off(e,t){return this.emitter.off(e,t)}setScroll(e){this.isHorizontal?this.rootElement.scrollLeft=e:this.rootElement.scrollTop=e}resize(){this.dimensions.resize()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.isStopped=!1,this.reset())}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())}raf(e){let t=e-(this.time||e);this.time=e,this.animate.advance(.001*t)}scrollTo(e,{offset:t=0,immediate:i=!1,lock:n=!1,duration:r=this.options.duration,easing:o=this.options.easing,lerp:a=!r&&this.options.lerp,onComplete:l,force:c=!1,programmatic:h=!0}={}){if(!this.isStopped&&!this.isLocked||c){if(["top","left","start"].includes(e))e=0;else if(["bottom","right","end"].includes(e))e=this.limit;else{let u;if(typeof e=="string"?u=document.querySelector(e):e?.nodeType&&(u=e),u){if(this.options.wrapper!==window){let d=this.options.wrapper.getBoundingClientRect();t-=this.isHorizontal?d.left:d.top}let f=u.getBoundingClientRect();e=(this.isHorizontal?f.left:f.top)+this.animatedScroll}}if(typeof e=="number"){if(e+=t,e=Math.round(e),this.options.infinite?h&&(this.targetScroll=this.animatedScroll=this.scroll):e=Qm(0,e,this.limit),i)return this.animatedScroll=this.targetScroll=e,this.setScroll(this.scroll),this.reset(),void(l==null||l(this));if(!h){if(e===this.targetScroll)return;this.targetScroll=e}this.animate.fromTo(this.animatedScroll,e,{duration:r,easing:o,lerp:a,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling=!0},onUpdate:(u,f)=>{this.isScrolling=!0,this.velocity=u-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=u,this.setScroll(this.scroll),h&&(this.targetScroll=u),f||this.emit(),f&&(this.reset(),this.emit(),l?.(this),this.__preventNextScrollEvent=!0,requestAnimationFrame(()=>{delete this.__preventNextScrollEvent}))}})}}}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?(e=this.animatedScroll,t=this.limit,(e%t+t)%t):this.animatedScroll;var e,t}get progress(){return this.limit===0?1:this.scroll/this.limit}get isSmooth(){return this.__isSmooth}set isSmooth(e){this.__isSmooth!==e&&(this.__isSmooth=e,this.toggleClassName("lenis-smooth",e))}get isScrolling(){return this.__isScrolling}set isScrolling(e){this.__isScrolling!==e&&(this.__isScrolling=e,this.toggleClassName("lenis-scrolling",e))}get isStopped(){return this.__isStopped}set isStopped(e){this.__isStopped!==e&&(this.__isStopped=e,this.toggleClassName("lenis-stopped",e))}get isLocked(){return this.__isLocked}set isLocked(e){this.__isLocked!==e&&(this.__isLocked=e,this.toggleClassName("lenis-locked",e))}get className(){let e="lenis";return this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),this.isSmooth&&(e+=" lenis-smooth"),e}toggleClassName(e,t){this.rootElement.classList.toggle(e,t),this.emitter.emit("className change",this)}};function ki(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function qm(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}var Fn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},js={duration:.5,overwrite:!1,delay:0},zf,an,St,ei=1e8,yt=1/ei,Rf=Math.PI*2,BS=Rf/4,RS=0,Ym=Math.sqrt,DS=Math.cos,LS=Math.sin,Kt=function(e){return typeof e=="string"},wt=function(e){return typeof e=="function"},Gi=function(e){return typeof e=="number"},wc=function(e){return typeof e>"u"},yi=function(e){return typeof e=="object"},Un=function(e){return e!==!1},Hf=function(){return typeof window<"u"},yc=function(e){return wt(e)||Kt(e)},Jm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ln=Array.isArray,Df=/(?:-?\.?\d|\.)+/gi,Vf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,$r=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Cf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Wf=/[+-]=-?[.\d]+/,Zm=/[^,'"\[\]\s]+/gi,US=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Mt,_i,Lf,Kf,Wn={},Cc={},jm,$m=function(e){return(Cc=jr(e,Wn))&&cn},Bc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ha=function(e,t){return!t&&console.warn(e)},eg=function(e,t){return e&&(Wn[e]=t)&&Cc&&(Cc[e]=t)||Wn},ua=function(){return 0},FS={suppressEvents:!0,isStart:!0,kill:!1},xc={suppressEvents:!0,kill:!1},PS={suppressEvents:!0},Xf={},dr=[],Uf={},tg,Dn={},Mf={},Gm=30,Ec=[],qf="",Yf=function(e){var t=e[0],i,n;if(yi(t)||wt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(n=Ec.length;n--&&!Ec[n].targetTest(t););i=Ec[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new jf(e[n],i)))||e.splice(n,1);return e},Ar=function(e){return e._gsap||Yf(ti(e))[0]._gsap},Jf=function(e,t,i){return(i=e[t])&&wt(i)?e[t]():wc(i)&&e.getAttribute&&e.getAttribute(t)||i},xn=function(e,t){return(e=e.split(",")).forEach(t)||e},Bt=function(e){return Math.round(e*1e5)/1e5||0},Yt=function(e){return Math.round(e*1e7)/1e7||0},es=function(e,t){var i=t.charAt(0),n=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+n:i==="-"?e-n:i==="*"?e*n:e/n},NS=function(e,t){for(var i=t.length,n=0;e.indexOf(t[n])<0&&++n<i;);return n<i},Mc=function(){var e=dr.length,t=dr.slice(0),i,n;for(Uf={},dr.length=0,i=0;i<e;i++)n=t[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},ng=function(e,t,i,n){dr.length&&!an&&Mc(),e.render(t,i,n||an&&t<0&&(e._initted||e._startAt)),dr.length&&!an&&Mc()},ig=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Zm).length<2?t:Kt(e)?e.trim():e},rg=function(e){return e},ni=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},OS=function(e){return function(t,i){for(var n in i)n in t||n==="duration"&&e||n==="ease"||(t[n]=i[n])}},jr=function(e,t){for(var i in t)e[i]=t[i];return e},zm=function s(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=yi(t[i])?s(e[i]||(e[i]={}),t[i]):t[i]);return e},Tc=function(e,t){var i={},n;for(n in e)n in t||(i[n]=e[n]);return i},aa=function(e){var t=e.parent||Mt,i=e.keyframes?OS(ln(e.keyframes)):ni;if(Un(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},kS=function(e,t){for(var i=e.length,n=i===t.length;n&&i--&&e[i]===t[i];);return i<0},sg=function(e,t,i,n,r){i===void 0&&(i="_first"),n===void 0&&(n="_last");var o=e[n],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[n]=t,t._prev=o,t.parent=t._dp=e,t},Rc=function(e,t,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var r=t._prev,o=t._next;r?r._next=o:e[i]===t&&(e[i]=o),o?o._prev=r:e[n]===t&&(e[n]=r),t._next=t._prev=t.parent=null},pr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Yr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},QS=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Ff=function(e,t,i,n){return e._startAt&&(an?e._startAt.revert(xc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,n))},GS=function s(e){return!e||e._ts&&s(e.parent)},Hm=function(e){return e._repeat?$s(e._tTime,e=e.duration()+e._rDelay)*e:0},$s=function(e,t){var i=Math.floor(e/=t);return e&&i===e?i-1:i},Ic=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Dc=function(e){return e._end=Yt(e._start+(e._tDur/Math.abs(e._ts||e._rts||yt)||0))},Lc=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Yt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Dc(e),i._dirty||Yr(i,e)),e},og=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Ic(e.rawTime(),t),(!t._dur||Aa(0,t.totalDuration(),i)-t._tTime>yt)&&t.render(i,!0)),Yr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-yt}},vi=function(e,t,i,n){return t.parent&&pr(t),t._start=Yt((Gi(i)?i:i||e!==Mt?$n(e,i,t):e._time)+t._delay),t._end=Yt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),sg(e,t,"_first","_last",e._sort?"_start":0),Pf(t)||(e._recent=t),n||og(e,t),e._ts<0&&Lc(e,e._tTime),e},ag=function(e,t){return(Wn.ScrollTrigger||Bc("scrollTrigger",t))&&Wn.ScrollTrigger.create(t,e)},lg=function(e,t,i,n,r){if(td(e,t,r),!e._initted)return 1;if(!i&&e._pt&&!an&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&tg!==Ln.frame)return dr.push(e),e._lazy=[r,n],1},zS=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},Pf=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},HS=function(e,t,i,n){var r=e.ratio,o=t<0||!t&&(!e._start&&zS(e)&&!(!e._initted&&Pf(e))||(e._ts<0||e._dp._ts<0)&&!Pf(e))?0:1,a=e._rDelay,l=0,c,h,u;if(a&&e._repeat&&(l=Aa(0,e._tDur,t),h=$s(l,a),e._yoyo&&h&1&&(o=1-o),h!==$s(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||an||n||e._zTime===yt||!t&&e._zTime){if(!e._initted&&lg(e,t,n,i,l))return;for(u=e._zTime,e._zTime=t||(i?yt:0),i||(i=t&&!u),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Ff(e,t,i,!0),e._onUpdate&&!i&&Vn(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Vn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&pr(e,1),!i&&!an&&(Vn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},VS=function(e,t,i){var n;if(i>t)for(n=e._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>t)return n;n=n._next}else for(n=e._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<t)return n;n=n._prev}},eo=function(e,t,i,n){var r=e._repeat,o=Yt(t)||0,a=e._tTime/e._tDur;return a&&!n&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:Yt(o*(r+1)+e._rDelay*r):o,a>0&&!n&&Lc(e,e._tTime=e._tDur*a),e.parent&&Dc(e),i||Yr(e.parent,e),e},Vm=function(e){return e instanceof jt?Yr(e):eo(e,e._dur)},WS={_start:0,endTime:ua,totalDuration:ua},$n=function s(e,t,i){var n=e.labels,r=e._recent||WS,o=e.duration()>=ei?r.endTime(!1):e._dur,a,l,c;return Kt(t)&&(isNaN(t)||t in n)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?r:i).totalDuration()/100:1)):a<0?(t in n||(n[t]=o),n[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&i&&(l=l/100*(ln(i)?i[0]:i).totalDuration()),a>1?s(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},la=function(e,t,i){var n=Gi(t[1]),r=(n?2:1)+(e<2?0:1),o=t[r],a,l;if(n&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Un(l.vars.inherit)&&l.parent;o.immediateRender=Un(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new Lt(t[0],o,t[r+1])},mr=function(e,t){return e||e===0?t(e):t},Aa=function(e,t,i){return i<e?e:i>t?t:i},$t=function(e,t){return!Kt(e)||!(t=US.exec(e))?"":t[1]},KS=function(e,t,i){return mr(i,function(n){return Aa(e,t,n)})},Nf=[].slice,cg=function(e,t){return e&&yi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&yi(e[0]))&&!e.nodeType&&e!==_i},XS=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(n){var r;return Kt(n)&&!t||cg(n,1)?(r=i).push.apply(r,ti(n)):i.push(n)})||i},ti=function(e,t,i){return St&&!t&&St.selector?St.selector(e):Kt(e)&&!i&&(Lf||!to())?Nf.call((t||Kf).querySelectorAll(e),0):ln(e)?XS(e,i):cg(e)?Nf.call(e,0):e?[e]:[]},Of=function(e){return e=ti(e)[0]||ha("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return ti(t,i.querySelectorAll?i:i===e?ha("Invalid scope")||Kf.createElement("div"):e)}},hg=function(e){return e.sort(function(){return .5-Math.random()})},ug=function(e){if(wt(e))return e;var t=yi(e)?e:{each:e},i=Jr(t.ease),n=t.from||0,r=parseFloat(t.base)||0,o={},a=n>0&&n<1,l=isNaN(n)||a,c=t.axis,h=n,u=n;return Kt(n)?h=u={center:.5,edges:.5,end:1}[n]||0:!a&&l&&(h=n[0],u=n[1]),function(f,d,m){var p=(m||t).length,A=o[p],g,v,_,y,S,C,E,b,x;if(!A){if(x=t.grid==="auto"?0:(t.grid||[1,ei])[1],!x){for(E=-ei;E<(E=m[x++].getBoundingClientRect().left)&&x<p;);x<p&&x--}for(A=o[p]=[],g=l?Math.min(x,p)*h-.5:n%x,v=x===ei?0:l?p*u/x-.5:n/x|0,E=0,b=ei,C=0;C<p;C++)_=C%x-g,y=v-(C/x|0),A[C]=S=c?Math.abs(c==="y"?y:_):Ym(_*_+y*y),S>E&&(E=S),S<b&&(b=S);n==="random"&&hg(A),A.max=E-b,A.min=b,A.v=p=(parseFloat(t.amount)||parseFloat(t.each)*(x>p?p-1:c?c==="y"?p/x:x:Math.max(x,p/x))||0)*(n==="edges"?-1:1),A.b=p<0?r-p:r,A.u=$t(t.amount||t.each)||0,i=i&&p<0?yg(i):i}return p=(A[f]-A.min)/A.max||0,Yt(A.b+(i?i(p):p)*A.v)+A.u}},kf=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var n=Yt(Math.round(parseFloat(i)/e)*e*t);return(n-n%1)/t+(Gi(i)?0:$t(i))}},fg=function(e,t){var i=ln(e),n,r;return!i&&yi(e)&&(n=i=e.radius||ei,e.values?(e=ti(e.values),(r=!Gi(e[0]))&&(n*=n)):e=kf(e.increment)),mr(t,i?wt(e)?function(o){return r=e(o),Math.abs(r-o)<=n?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=ei,h=0,u=e.length,f,d;u--;)r?(f=e[u].x-a,d=e[u].y-l,f=f*f+d*d):f=Math.abs(e[u]-a),f<c&&(c=f,h=u);return h=!n||c<=n?e[h]:o,r||h===o||Gi(o)?h:h+$t(o)}:kf(e))},dg=function(e,t,i,n){return mr(ln(e)?!t:i===!0?!!(i=0):!n,function(){return ln(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*n)/n})},qS=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(n){return t.reduce(function(r,o){return o(r)},n)}},YS=function(e,t){return function(i){return e(parseFloat(i))+(t||$t(i))}},JS=function(e,t,i){return pg(e,t,0,1,i)},Ag=function(e,t,i){return mr(i,function(n){return e[~~t(n)]})},ZS=function s(e,t,i){var n=t-e;return ln(e)?Ag(e,s(0,e.length),t):mr(i,function(r){return(n+(r-e)%n)%n+e})},jS=function s(e,t,i){var n=t-e,r=n*2;return ln(e)?Ag(e,s(0,e.length-1),t):mr(i,function(o){return o=(r+(o-e)%r)%r||0,e+(o>n?r-o:o)})},no=function(e){for(var t=0,i="",n,r,o,a;~(n=e.indexOf("random(",t));)o=e.indexOf(")",n),a=e.charAt(n+7)==="[",r=e.substr(n+7,o-n-7).match(a?Zm:Df),i+=e.substr(t,n-t)+dg(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),t=o+1;return i+e.substr(t,e.length-t)},pg=function(e,t,i,n,r){var o=t-e,a=n-i;return mr(r,function(l){return i+((l-e)/o*a||0)})},$S=function s(e,t,i,n){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var o=Kt(e),a={},l,c,h,u,f;if(i===!0&&(n=1)&&(i=null),o)e={p:e},t={p:t};else if(ln(e)&&!ln(t)){for(h=[],u=e.length,f=u-2,c=1;c<u;c++)h.push(s(e[c-1],e[c]));u--,r=function(m){m*=u;var p=Math.min(f,~~m);return h[p](m-p)},i=t}else n||(e=jr(ln(e)?[]:{},e));if(!h){for(l in t)$f.call(a,e,l,"get",t[l]);r=function(m){return rd(m,a)||(o?e.p:e)}}}return mr(i,r)},Wm=function(e,t,i){var n=e.labels,r=ei,o,a,l;for(o in n)a=n[o]-t,a<0==!!i&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},Vn=function(e,t,i){var n=e.vars,r=n[t],o=St,a=e._ctx,l,c,h;if(r)return l=n[t+"Params"],c=n.callbackScope||e,i&&dr.length&&Mc(),a&&(St=a),h=l?r.apply(c,l):r.call(c),St=o,h},sa=function(e){return pr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!an),e.progress()<1&&Vn(e,"onInterrupt"),e},Zs,mg=[],gg=function(e){if(e)if(e=!e.name&&e.default||e,Hf()||e.headless){var t=e.name,i=wt(e),n=t&&!i&&e.init?function(){this._props=[]}:e,r={init:ua,render:rd,add:$f,kill:pC,modifier:AC,rawVars:0},o={targetTest:0,get:0,getSetter:Uc,aliases:{},register:0};if(to(),e!==n){if(Dn[t])return;ni(n,ni(Tc(e,r),o)),jr(n.prototype,jr(r,Tc(e,o))),Dn[n.prop=t]=n,e.targetTest&&(Ec.push(n),Xf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}eg(t,n),e.register&&e.register(cn,n,En)}else mg.push(e)},pt=255,oa={aqua:[0,pt,pt],lime:[0,pt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,pt],navy:[0,0,128],white:[pt,pt,pt],olive:[128,128,0],yellow:[pt,pt,0],orange:[pt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[pt,0,0],pink:[pt,192,203],cyan:[0,pt,pt],transparent:[pt,pt,pt,0]},Tf=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*pt+.5|0},_g=function(e,t,i){var n=e?Gi(e)?[e>>16,e>>8&pt,e&pt]:0:oa.black,r,o,a,l,c,h,u,f,d,m;if(!n){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),oa[e])n=oa[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return n=parseInt(e.substr(1,6),16),[n>>16,n>>8&pt,n&pt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),n=[e>>16,e>>8&pt,e&pt]}else if(e.substr(0,3)==="hsl"){if(n=m=e.match(Df),!t)l=+n[0]%360/360,c=+n[1]/100,h=+n[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,n.length>3&&(n[3]*=1),n[0]=Tf(l+1/3,r,o),n[1]=Tf(l,r,o),n[2]=Tf(l-1/3,r,o);else if(~e.indexOf("="))return n=e.match(Vf),i&&n.length<4&&(n[3]=1),n}else n=e.match(Df)||oa.transparent;n=n.map(Number)}return t&&!m&&(r=n[0]/pt,o=n[1]/pt,a=n[2]/pt,u=Math.max(r,o,a),f=Math.min(r,o,a),h=(u+f)/2,u===f?l=c=0:(d=u-f,c=h>.5?d/(2-u-f):d/(u+f),l=u===r?(o-a)/d+(o<a?6:0):u===o?(a-r)/d+2:(r-o)/d+4,l*=60),n[0]=~~(l+.5),n[1]=~~(c*100+.5),n[2]=~~(h*100+.5)),i&&n.length<4&&(n[3]=1),n},vg=function(e){var t=[],i=[],n=-1;return e.split(Qi).forEach(function(r){var o=r.match($r)||[];t.push.apply(t,o),i.push(n+=o.length+1)}),t.c=i,t},Km=function(e,t,i){var n="",r=(e+n).match(Qi),o=t?"hsla(":"rgba(",a=0,l,c,h,u;if(!r)return e;if(r=r.map(function(f){return(f=_g(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(h=vg(e),l=i.c,l.join(n)!==h.c.join(n)))for(c=e.replace(Qi,"1").split($r),u=c.length-1;a<u;a++)n+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:i).shift());if(!c)for(c=e.split(Qi),u=c.length-1;a<u;a++)n+=c[a]+r[a];return n+c[u]},Qi=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in oa)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),eC=/hsl[a]?\(/,Zf=function(e){var t=e.join(" "),i;if(Qi.lastIndex=0,Qi.test(t))return i=eC.test(t),e[1]=Km(e[1],i),e[0]=Km(e[0],i,vg(e[1])),!0},fa,Ln=function(){var s=Date.now,e=500,t=33,i=s(),n=i,r=1e3/240,o=r,a=[],l,c,h,u,f,d,m=function p(A){var g=s()-n,v=A===!0,_,y,S,C;if((g>e||g<0)&&(i+=g-t),n+=g,S=n-i,_=S-o,(_>0||v)&&(C=++u.frame,f=S-u.time*1e3,u.time=S=S/1e3,o+=_+(_>=r?4:r-_),y=1),v||(l=c(p)),y)for(d=0;d<a.length;d++)a[d](S,f,C,A)};return u={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(A){return f/(1e3/(A||60))},wake:function(){jm&&(!Lf&&Hf()&&(_i=Lf=window,Kf=_i.document||{},Wn.gsap=cn,(_i.gsapVersions||(_i.gsapVersions=[])).push(cn.version),$m(Cc||_i.GreenSockGlobals||!_i.gsap&&_i||{}),mg.forEach(gg)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(A){return setTimeout(A,o-u.time*1e3+1|0)},fa=1,m(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),fa=0,c=ua},lagSmoothing:function(A,g){e=A||1/0,t=Math.min(g||33,e)},fps:function(A){r=1e3/(A||240),o=u.time*1e3+r},add:function(A,g,v){var _=g?function(y,S,C,E){A(y,S,C,E),u.remove(_)}:A;return u.remove(A),a[v?"unshift":"push"](_),to(),_},remove:function(A,g){~(g=a.indexOf(A))&&a.splice(g,1)&&d>=g&&d--},_listeners:a},u}(),to=function(){return!fa&&Ln.wake()},it={},tC=/^[\d.\-M][\d.\-,\s]/,nC=/["']/g,iC=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),n=i[0],r=1,o=i.length,a,l,c;r<o;r++)l=i[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[n]=isNaN(c)?c.replace(nC,"").trim():+c,n=l.substr(a+1).trim();return t},rC=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),n=e.indexOf("(",t);return e.substring(t,~n&&n<i?e.indexOf(")",i+1):i)},sC=function(e){var t=(e+"").split("("),i=it[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[iC(t[1])]:rC(e).split(",").map(ig)):it._CE&&tC.test(e)?it._CE("",e):i},yg=function(e){return function(t){return 1-e(1-t)}},xg=function s(e,t){for(var i=e._first,n;i;)i instanceof jt?s(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?s(i.timeline,t):(n=i._ease,i._ease=i._yEase,i._yEase=n,i._yoyo=t)),i=i._next},Jr=function(e,t){return e&&(wt(e)?e:it[e]||sC(e))||t},ts=function(e,t,i,n){i===void 0&&(i=function(l){return 1-t(1-l)}),n===void 0&&(n=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:i,easeInOut:n},o;return xn(e,function(a){it[a]=Wn[a]=r,it[o=a.toLowerCase()]=i;for(var l in r)it[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=it[a+"."+l]=r[l]}),r},Eg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},If=function s(e,t,i){var n=t>=1?t:1,r=(i||(e?.3:.45))/(t<1?t:1),o=r/Rf*(Math.asin(1/n)||0),a=function(h){return h===1?1:n*Math.pow(2,-10*h)*LS((h-o)*r)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Eg(a);return r=Rf/r,l.config=function(c,h){return s(e,c,h)},l},bf=function s(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},n=e==="out"?i:e==="in"?function(r){return 1-i(1-r)}:Eg(i);return n.config=function(r){return s(e,r)},n};xn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;ts(s+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});it.Linear.easeNone=it.none=it.Linear.easeIn;ts("Elastic",If("in"),If("out"),If());(function(s,e){var t=1/e,i=2*t,n=2.5*t,r=function(a){return a<t?s*a*a:a<i?s*Math.pow(a-1.5/e,2)+.75:a<n?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};ts("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);ts("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});ts("Circ",function(s){return-(Ym(1-s*s)-1)});ts("Sine",function(s){return s===1?1:-DS(s*BS)+1});ts("Back",bf("in"),bf("out"),bf());it.SteppedEase=it.steps=Wn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,n=e+(t?0:1),r=t?1:0,o=1-yt;return function(a){return((n*Aa(0,o,a)|0)+r)*i}}};js.ease=it["quad.out"];xn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return qf+=s+","+s+"Params,"});var jf=function(e,t){this.id=RS++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Jf,this.set=t?t.getSetter:Uc},da=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,eo(this,+t.duration,1,1),this.data=t.data,St&&(this._ctx=St,St.data.push(this)),fa||Ln.wake()}var e=s.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,eo(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,n){if(to(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Lc(this,i),!r._dp||r.parent||og(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&vi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===yt||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),ng(this,i,n)),this},e.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Hm(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},e.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Hm(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,n){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*r,n):this._repeat?$s(this._tTime,r)+1:1},e.timeScale=function(i,n){if(!arguments.length)return this._rts===-yt?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?Ic(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-yt?0:this._rts,this.totalTime(Aa(-Math.abs(this._delay),this._tDur,r),n!==!1),Dc(this),QS(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(to(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==yt&&(this._tTime-=yt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&vi(n,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Un(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ic(n.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=PS);var n=an;return an=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),an=n,this},e.globalTime=function(i){for(var n=this,r=arguments.length?i:n.rawTime();n;)r=n._start+r/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):r},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Vm(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,Vm(this),n?this.time(n):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,n){return this.totalTime($n(this,i),Un(n))},e.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,Un(n))},e.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},e.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},e.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-yt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-yt,this},e.isActive=function(){var i=this.parent||this._dp,n=this._start,r;return!!(!i||this._ts&&this._initted&&i.isActive()&&(r=i.rawTime(!0))>=n&&r<this.endTime(!0)-yt)},e.eventCallback=function(i,n,r){var o=this.vars;return arguments.length>1?(n?(o[i]=n,r&&(o[i+"Params"]=r),i==="onUpdate"&&(this._onUpdate=n)):delete o[i],this):o[i]},e.then=function(i){var n=this;return new Promise(function(r){var o=wt(i)?i:rg,a=function(){var c=n.then;n.then=null,wt(o)&&(o=o(n))&&(o.then||o===n)&&(n.then=c),r(o),n.then=c};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?a():n._prom=a})},e.kill=function(){sa(this)},s}();ni(da.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-yt,_prom:0,_ps:!1,_rts:1});var jt=function(s){qm(e,s);function e(i,n){var r;return i===void 0&&(i={}),r=s.call(this,i)||this,r.labels={},r.smoothChildTiming=!!i.smoothChildTiming,r.autoRemoveChildren=!!i.autoRemoveChildren,r._sort=Un(i.sortChildren),Mt&&vi(i.parent||Mt,ki(r),n),i.reversed&&r.reverse(),i.paused&&r.paused(!0),i.scrollTrigger&&ag(ki(r),i.scrollTrigger),r}var t=e.prototype;return t.to=function(n,r,o){return la(0,arguments,this),this},t.from=function(n,r,o){return la(1,arguments,this),this},t.fromTo=function(n,r,o,a){return la(2,arguments,this),this},t.set=function(n,r,o){return r.duration=0,r.parent=this,aa(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Lt(n,r,$n(this,o),1),this},t.call=function(n,r,o){return vi(this,Lt.delayedCall(0,n,r),o)},t.staggerTo=function(n,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Lt(n,o,$n(this,l)),this},t.staggerFrom=function(n,r,o,a,l,c,h){return o.runBackwards=1,aa(o).immediateRender=Un(o.immediateRender),this.staggerTo(n,r,o,a,l,c,h)},t.staggerFromTo=function(n,r,o,a,l,c,h,u){return a.startAt=o,aa(a).immediateRender=Un(a.immediateRender),this.staggerTo(n,r,a,l,c,h,u)},t.render=function(n,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=n<=0?0:Yt(n),u=this._zTime<0!=n<0&&(this._initted||!c),f,d,m,p,A,g,v,_,y,S,C,E;if(this!==Mt&&h>l&&n>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,n+=this._time-a),f=h,y=this._start,_=this._ts,g=!_,u&&(c||(a=this._zTime),(n||!r)&&(this._zTime=n)),this._repeat){if(C=this._yoyo,A=c+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(A*100+n,r,o);if(f=Yt(h%A),h===l?(p=this._repeat,f=c):(p=~~(h/A),p&&p===h/A&&(f=c,p--),f>c&&(f=c)),S=$s(this._tTime,A),!a&&this._tTime&&S!==p&&this._tTime-S*A-this._dur<=0&&(S=p),C&&p&1&&(f=c-f,E=1),p!==S&&!this._lock){var b=C&&S&1,x=b===(C&&p&1);if(p<S&&(b=!b),a=b?0:h%c?c:h,this._lock=1,this.render(a||(E?0:Yt(p*A)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&Vn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,a=b?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;xg(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=VS(this,Yt(a),Yt(f)),v&&(h-=f-(f=v._start))),this._tTime=h,this._time=f,this._act=!_,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,a=0),!a&&f&&!r&&!p&&(Vn(this,"onStart"),this._tTime!==h))return this;if(f>=a&&n>=0)for(d=this._first;d;){if(m=d._next,(d._act||f>=d._start)&&d._ts&&v!==d){if(d.parent!==this)return this.render(n,r,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,o),f!==this._time||!this._ts&&!g){v=0,m&&(h+=this._zTime=-yt);break}}d=m}else{d=this._last;for(var M=n<0?n:f;d;){if(m=d._prev,(d._act||M<=d._end)&&d._ts&&v!==d){if(d.parent!==this)return this.render(n,r,o);if(d.render(d._ts>0?(M-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(M-d._start)*d._ts,r,o||an&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!g){v=0,m&&(h+=this._zTime=M?-yt:yt);break}}d=m}}if(v&&!r&&(this.pause(),v.render(f>=a?0:-yt)._zTime=f>=a?1:-1,this._ts))return this._start=y,Dc(this),this.render(n,r,o);this._onUpdate&&!r&&Vn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(y===this._start||Math.abs(_)!==Math.abs(this._ts))&&(this._lock||((n||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&pr(this,1),!r&&!(n<0&&!a)&&(h||a||!l)&&(Vn(this,h===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(n,r){var o=this;if(Gi(r)||(r=$n(this,r,n)),!(n instanceof da)){if(ln(n))return n.forEach(function(a){return o.add(a,r)}),this;if(Kt(n))return this.addLabel(n,r);if(wt(n))n=Lt.delayedCall(0,n);else return this}return this!==n?vi(this,n,r):this},t.getChildren=function(n,r,o,a){n===void 0&&(n=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-ei);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Lt?r&&l.push(c):(o&&l.push(c),n&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},t.getById=function(n){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===n)return r[o]},t.remove=function(n){return Kt(n)?this.removeLabel(n):wt(n)?this.killTweensOf(n):(Rc(this,n),n===this._recent&&(this._recent=this._last),Yr(this))},t.totalTime=function(n,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Yt(Ln.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),s.prototype.totalTime.call(this,n,r),this._forcing=0,this):this._tTime},t.addLabel=function(n,r){return this.labels[n]=$n(this,r),this},t.removeLabel=function(n){return delete this.labels[n],this},t.addPause=function(n,r,o){var a=Lt.delayedCall(0,r||ua,o);return a.data="isPause",this._hasPause=1,vi(this,a,$n(this,n))},t.removePause=function(n){var r=this._first;for(n=$n(this,n);r;)r._start===n&&r.data==="isPause"&&pr(r),r=r._next},t.killTweensOf=function(n,r,o){for(var a=this.getTweensOf(n,o),l=a.length;l--;)fr!==a[l]&&a[l].kill(n,r);return this},t.getTweensOf=function(n,r){for(var o=[],a=ti(n),l=this._first,c=Gi(r),h;l;)l instanceof Lt?NS(l._targets,a)&&(c?(!fr||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},t.tweenTo=function(n,r){r=r||{};var o=this,a=$n(o,n),l=r,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,d,m=Lt.to(o,ni({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||yt,onStart:function(){if(o.pause(),!d){var A=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());m._dur!==A&&eo(m,A,0,1).render(m._time,!0,!0),d=1}h&&h.apply(m,u||[])}},r));return f?m.render(0):m},t.tweenFromTo=function(n,r,o){return this.tweenTo(r,ni({startAt:{time:$n(this,n)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(n){return n===void 0&&(n=this._time),Wm(this,$n(this,n))},t.previousLabel=function(n){return n===void 0&&(n=this._time),Wm(this,$n(this,n),1)},t.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+yt)},t.shiftChildren=function(n,r,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=n,a._end+=n),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=n);return Yr(this)},t.invalidate=function(n){var r=this._first;for(this._lock=0;r;)r.invalidate(n),r=r._next;return s.prototype.invalidate.call(this,n)},t.clear=function(n){n===void 0&&(n=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),Yr(this)},t.totalDuration=function(n){var r=0,o=this,a=o._last,l=ei,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-n:n));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,vi(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;eo(o,o===Mt&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(n){if(Mt._ts&&(ng(Mt,Ic(n,Mt)),tg=Ln.frame),Ln.frame>=Gm){Gm+=Fn.autoSleep||120;var r=Mt._first;if((!r||!r._ts)&&Fn.autoSleep&&Ln._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Ln.sleep()}}},e}(da);ni(jt.prototype,{_lock:0,_hasPause:0,_forcing:0});var oC=function(e,t,i,n,r,o,a){var l=new En(this._pt,e,t,0,1,id,null,r),c=0,h=0,u,f,d,m,p,A,g,v;for(l.b=i,l.e=n,i+="",n+="",(g=~n.indexOf("random("))&&(n=no(n)),o&&(v=[i,n],o(v,e,t),i=v[0],n=v[1]),f=i.match(Cf)||[];u=Cf.exec(n);)m=u[0],p=n.substring(c,u.index),d?d=(d+1)%5:p.substr(-5)==="rgba("&&(d=1),m!==f[h++]&&(A=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:p||h===1?p:",",s:A,c:m.charAt(1)==="="?es(A,m)-A:parseFloat(m)-A,m:d&&d<4?Math.round:0},c=Cf.lastIndex);return l.c=c<n.length?n.substring(c,n.length):"",l.fp=a,(Wf.test(n)||g)&&(l.e=0),this._pt=l,l},$f=function(e,t,i,n,r,o,a,l,c,h){wt(n)&&(n=n(r||0,e,o));var u=e[t],f=i!=="get"?i:wt(u)?c?e[t.indexOf("set")||!wt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,d=wt(u)?c?uC:Mg:nd,m;if(Kt(n)&&(~n.indexOf("random(")&&(n=no(n)),n.charAt(1)==="="&&(m=es(f,n)+($t(f)||0),(m||m===0)&&(n=m))),!h||f!==n||Qf)return!isNaN(f*n)&&n!==""?(m=new En(this._pt,e,t,+f||0,n-(f||0),typeof u=="boolean"?dC:Tg,0,d),c&&(m.fp=c),a&&m.modifier(a,this,e),this._pt=m):(!u&&!(t in e)&&Bc(t,n),oC.call(this,e,t,f,n,d,l||Fn.stringFilter,c))},aC=function(e,t,i,n,r){if(wt(e)&&(e=ca(e,r,t,i,n)),!yi(e)||e.style&&e.nodeType||ln(e)||Jm(e))return Kt(e)?ca(e,r,t,i,n):e;var o={},a;for(a in e)o[a]=ca(e[a],r,t,i,n);return o},ed=function(e,t,i,n,r,o){var a,l,c,h;if(Dn[e]&&(a=new Dn[e]).init(r,a.rawVars?t[e]:aC(t[e],n,r,o,i),i,n,o)!==!1&&(i._pt=l=new En(i._pt,r,e,0,1,a.render,a,0,a.priority),i!==Zs))for(c=i._ptLookup[i._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},fr,Qf,td=function s(e,t,i){var n=e.vars,r=n.ease,o=n.startAt,a=n.immediateRender,l=n.lazy,c=n.onUpdate,h=n.runBackwards,u=n.yoyoEase,f=n.keyframes,d=n.autoRevert,m=e._dur,p=e._startAt,A=e._targets,g=e.parent,v=g&&g.data==="nested"?g.vars.targets:A,_=e._overwrite==="auto"&&!zf,y=e.timeline,S,C,E,b,x,M,N,R,z,I,U,P,X;if(y&&(!f||!r)&&(r="none"),e._ease=Jr(r,js.ease),e._yEase=u?yg(Jr(u===!0?r:u,js.ease)):0,u&&e._yoyo&&!e._repeat&&(u=e._yEase,e._yEase=e._ease,e._ease=u),e._from=!y&&!!n.runBackwards,!y||f&&!n.stagger){if(R=A[0]?Ar(A[0]).harness:0,P=R&&n[R.prop],S=Tc(n,Xf),p&&(p._zTime<0&&p.progress(1),t<0&&h&&a&&!d?p.render(-1,!0):p.revert(h&&m?xc:FS),p._lazy=0),o){if(pr(e._startAt=Lt.set(A,ni({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!p&&Un(l),startAt:null,delay:0,onUpdate:c&&function(){return Vn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(an||!a&&!d)&&e._startAt.revert(xc),a&&m&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(h&&m&&!p){if(t&&(a=!1),E=ni({overwrite:!1,data:"isFromStart",lazy:a&&!p&&Un(l),immediateRender:a,stagger:0,parent:g},S),P&&(E[R.prop]=P),pr(e._startAt=Lt.set(A,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(an?e._startAt.revert(xc):e._startAt.render(-1,!0)),e._zTime=t,!a)s(e._startAt,yt,yt);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&Un(l)||l&&!m,C=0;C<A.length;C++){if(x=A[C],N=x._gsap||Yf(A)[C]._gsap,e._ptLookup[C]=I={},Uf[N.id]&&dr.length&&Mc(),U=v===A?C:v.indexOf(x),R&&(z=new R).init(x,P||S,e,U,v)!==!1&&(e._pt=b=new En(e._pt,x,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(q){I[q]=b}),z.priority&&(M=1)),!R||P)for(E in S)Dn[E]&&(z=ed(E,S,e,U,x,v))?z.priority&&(M=1):I[E]=b=$f.call(e,x,E,"get",S[E],U,v,0,n.stringFilter);e._op&&e._op[C]&&e.kill(x,e._op[C]),_&&e._pt&&(fr=e,Mt.killTweensOf(x,I,e.globalTime(t)),X=!e.parent,fr=0),e._pt&&l&&(Uf[N.id]=1)}M&&sd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!X,f&&t<=0&&y.render(ei,!0,!0)},lC=function(e,t,i,n,r,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,u,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(h=f[d][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Qf=1,e.vars[t]="+=0",td(e,a),Qf=0,l?ha(t+" not eligible for reset"):1;c.push(h)}for(d=c.length;d--;)u=c[d],h=u._pt||u,h.s=(n||n===0)&&!r?n:h.s+(n||0)+o*h.c,h.c=i-h.s,u.e&&(u.e=Bt(i)+$t(u.e)),u.b&&(u.b=h.s+$t(u.b))},cC=function(e,t){var i=e[0]?Ar(e[0]).harness:0,n=i&&i.aliases,r,o,a,l;if(!n)return t;r=jr({},t);for(o in n)if(o in r)for(l=n[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},hC=function(e,t,i,n){var r=t.ease||n||"power1.inOut",o,a;if(ln(t))a=i[e]||(i[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:r})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},ca=function(e,t,i,n,r){return wt(e)?e.call(t,i,n,r):Kt(e)&&~e.indexOf("random(")?no(e):e},Sg=qf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Cg={};xn(Sg+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Cg[s]=1});var Lt=function(s){qm(e,s);function e(i,n,r,o){var a;typeof n=="number"&&(r.duration=n,n=r,r=null),a=s.call(this,o?n:aa(n))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,d=l.overwrite,m=l.keyframes,p=l.defaults,A=l.scrollTrigger,g=l.yoyoEase,v=n.parent||Mt,_=(ln(i)||Jm(i)?Gi(i[0]):"length"in n)?[i]:ti(i),y,S,C,E,b,x,M,N;if(a._targets=_.length?Yf(_):ha("GSAP target "+i+" not found. https://gsap.com",!Fn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,m||f||yc(c)||yc(h)){if(n=a.vars,y=a.timeline=new jt({data:"nested",defaults:p||{},targets:v&&v.data==="nested"?v.vars.targets:_}),y.kill(),y.parent=y._dp=ki(a),y._start=0,f||yc(c)||yc(h)){if(E=_.length,M=f&&ug(f),yi(f))for(b in f)~Sg.indexOf(b)&&(N||(N={}),N[b]=f[b]);for(S=0;S<E;S++)C=Tc(n,Cg),C.stagger=0,g&&(C.yoyoEase=g),N&&jr(C,N),x=_[S],C.duration=+ca(c,ki(a),S,x,_),C.delay=(+ca(h,ki(a),S,x,_)||0)-a._delay,!f&&E===1&&C.delay&&(a._delay=h=C.delay,a._start+=h,C.delay=0),y.to(x,C,M?M(S,x,_):0),y._ease=it.none;y.duration()?c=h=0:a.timeline=0}else if(m){aa(ni(y.vars.defaults,{ease:"none"})),y._ease=Jr(m.ease||n.ease||"none");var R=0,z,I,U;if(ln(m))m.forEach(function(P){return y.to(_,P,">")}),y.duration();else{C={};for(b in m)b==="ease"||b==="easeEach"||hC(b,m[b],C,m.easeEach);for(b in C)for(z=C[b].sort(function(P,X){return P.t-X.t}),R=0,S=0;S<z.length;S++)I=z[S],U={ease:I.e,duration:(I.t-(S?z[S-1].t:0))/100*c},U[b]=I.v,y.to(_,U,R),R+=U.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return d===!0&&!zf&&(fr=ki(a),Mt.killTweensOf(_),fr=0),vi(v,ki(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(u||!c&&!m&&a._start===Yt(v._time)&&Un(u)&&GS(ki(a))&&v.data!=="nested")&&(a._tTime=-yt,a.render(Math.max(0,-h)||0)),A&&ag(ki(a),A),a}var t=e.prototype;return t.render=function(n,r,o){var a=this._time,l=this._tDur,c=this._dur,h=n<0,u=n>l-yt&&!h?l:n<yt?0:n,f,d,m,p,A,g,v,_,y;if(!c)HS(this,n,r,o);else if(u!==this._tTime||!n||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(f=u,_=this.timeline,this._repeat){if(p=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(p*100+n,r,o);if(f=Yt(u%p),u===l?(m=this._repeat,f=c):(m=~~(u/p),m&&m===Yt(u/p)&&(f=c,m--),f>c&&(f=c)),g=this._yoyo&&m&1,g&&(y=this._yEase,f=c-f),A=$s(this._tTime,p),f===a&&!o&&this._initted&&m===A)return this._tTime=u,this;m!==A&&(_&&this._yEase&&xg(_,g),this.vars.repeatRefresh&&!g&&!this._lock&&this._time!==p&&this._initted&&(this._lock=o=1,this.render(Yt(p*m),!0).invalidate()._lock=0))}if(!this._initted){if(lg(this,h?n:f,o,r,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==A))return this;if(c!==this._dur)return this.render(n,r,o)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(y||this._ease)(f/c),this._from&&(this.ratio=v=1-v),f&&!a&&!r&&!m&&(Vn(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(v,d.d),d=d._next;_&&_.render(n<0?n:_._dur*_._ease(f/this._dur),r,o)||this._startAt&&(this._zTime=n),this._onUpdate&&!r&&(h&&Ff(this,n,r,o),Vn(this,"onUpdate")),this._repeat&&m!==A&&this.vars.onRepeat&&!r&&this.parent&&Vn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Ff(this,n,!0,!0),(n||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&pr(this,1),!r&&!(h&&!a)&&(u||a||g)&&(Vn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),s.prototype.invalidate.call(this,n)},t.resetTo=function(n,r,o,a,l){fa||Ln.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||td(this,c),h=this._ease(c/this._dur),lC(this,n,r,o,a,h,c,l)?this.resetTo(n,r,o,a,1):(Lc(this,0),this.parent||sg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(n,r){if(r===void 0&&(r="all"),!n&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?sa(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(n,r,fr&&fr.vars.overwrite!==!0)._first||sa(this),this.parent&&o!==this.timeline.totalDuration()&&eo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=n?ti(n):a,c=this._ptLookup,h=this._pt,u,f,d,m,p,A,g;if((!r||r==="all")&&kS(a,l))return r==="all"&&(this._pt=0),sa(this);for(u=this._op=this._op||[],r!=="all"&&(Kt(r)&&(p={},xn(r,function(v){return p[v]=1}),r=p),r=cC(a,r)),g=a.length;g--;)if(~l.indexOf(a[g])){f=c[g],r==="all"?(u[g]=r,m=f,d={}):(d=u[g]=u[g]||{},m=r);for(p in m)A=f&&f[p],A&&((!("kill"in A.d)||A.d.kill(p)===!0)&&Rc(this,A,"_pt"),delete f[p]),d!=="all"&&(d[p]=1)}return this._initted&&!this._pt&&h&&sa(this),this},e.to=function(n,r){return new e(n,r,arguments[2])},e.from=function(n,r){return la(1,arguments)},e.delayedCall=function(n,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(n,r,o){return la(2,arguments)},e.set=function(n,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(n,r)},e.killTweensOf=function(n,r,o){return Mt.killTweensOf(n,r,o)},e}(da);ni(Lt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});xn("staggerTo,staggerFrom,staggerFromTo",function(s){Lt[s]=function(){var e=new jt,t=Nf.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var nd=function(e,t,i){return e[t]=i},Mg=function(e,t,i){return e[t](i)},uC=function(e,t,i,n){return e[t](n.fp,i)},fC=function(e,t,i){return e.setAttribute(t,i)},Uc=function(e,t){return wt(e[t])?Mg:wc(e[t])&&e.setAttribute?fC:nd},Tg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},dC=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},id=function(e,t){var i=t._pt,n="";if(!e&&t.b)n=t.b;else if(e===1&&t.e)n=t.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+n,i=i._next;n+=t.c}t.set(t.t,t.p,n,t)},rd=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},AC=function(e,t,i,n){for(var r=this._pt,o;r;)o=r._next,r.p===n&&r.modifier(e,t,i),r=o},pC=function(e){for(var t=this._pt,i,n;t;)n=t._next,t.p===e&&!t.op||t.op===e?Rc(this,t,"_pt"):t.dep||(i=1),t=n;return!i},mC=function(e,t,i,n){n.mSet(e,t,n.m.call(n.tween,i,n.mt),n)},sd=function(e){for(var t=e._pt,i,n,r,o;t;){for(i=t._next,n=r;n&&n.pr>t.pr;)n=n._next;(t._prev=n?n._prev:o)?t._prev._next=t:r=t,(t._next=n)?n._prev=t:o=t,t=i}e._pt=r},En=function(){function s(t,i,n,r,o,a,l,c,h){this.t=i,this.s=r,this.c=o,this.p=n,this.r=a||Tg,this.d=l||this,this.set=c||nd,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(i,n,r){this.mSet=this.mSet||this.set,this.set=mC,this.m=i,this.mt=r,this.tween=n},s}();xn(qf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Xf[s]=1});Wn.TweenMax=Wn.TweenLite=Lt;Wn.TimelineLite=Wn.TimelineMax=jt;Mt=new jt({sortChildren:!1,defaults:js,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Fn.stringFilter=Zf;var Zr=[],Sc={},gC=[],Xm=0,_C=0,wf=function(e){return(Sc[e]||gC).map(function(t){return t()})},Gf=function(){var e=Date.now(),t=[];e-Xm>2&&(wf("matchMediaInit"),Zr.forEach(function(i){var n=i.queries,r=i.conditions,o,a,l,c;for(a in n)o=_i.matchMedia(n[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(i.revert(),l&&t.push(i))}),wf("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),Xm=e,wf("matchMedia"))},Ig=function(){function s(t,i){this.selector=i&&Of(i),this.data=[],this._r=[],this.isReverted=!1,this.id=_C++,t&&this.add(t)}var e=s.prototype;return e.add=function(i,n,r){wt(i)&&(r=n,n=i,i=wt);var o=this,a=function(){var c=St,h=o.selector,u;return c&&c!==o&&c.data.push(o),r&&(o.selector=Of(r)),St=o,u=n.apply(o,arguments),wt(u)&&o._r.push(u),St=c,o.selector=h,o.isReverted=!1,u};return o.last=a,i===wt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var n=St;St=null,i(this),St=n},e.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof s?i.push.apply(i,n.getTweens()):n instanceof Lt&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,n){var r=this;if(i?function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(i)}),l=r.data.length;l--;)c=r.data[l],c instanceof jt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Lt)&&c.revert&&c.revert(i);r._r.forEach(function(h){return h(i,r)}),r.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),n)for(var o=Zr.length;o--;)Zr[o].id===this.id&&Zr.splice(o,1)},e.revert=function(i){this.kill(i||{})},s}(),vC=function(){function s(t){this.contexts=[],this.scope=t,St&&St.data.push(this)}var e=s.prototype;return e.add=function(i,n,r){yi(i)||(i={matches:i});var o=new Ig(0,r||this.scope),a=o.conditions={},l,c,h;St&&!o.selector&&(o.selector=St.selector),this.contexts.push(o),n=o.add("onMatch",n),o.queries=i;for(c in i)c==="all"?h=1:(l=_i.matchMedia(i[c]),l&&(Zr.indexOf(o)<0&&Zr.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Gf):l.addEventListener("change",Gf)));return h&&n(o,function(u){return o.add(null,u)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},s}(),bc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(n){return gg(n)})},timeline:function(e){return new jt(e)},getTweensOf:function(e,t){return Mt.getTweensOf(e,t)},getProperty:function(e,t,i,n){Kt(e)&&(e=ti(e)[0]);var r=Ar(e||{}).get,o=i?rg:ig;return i==="native"&&(i=""),e&&(t?o((Dn[t]&&Dn[t].get||r)(e,t,i,n)):function(a,l,c){return o((Dn[a]&&Dn[a].get||r)(e,a,l,c))})},quickSetter:function(e,t,i){if(e=ti(e),e.length>1){var n=e.map(function(h){return cn.quickSetter(h,t,i)}),r=n.length;return function(h){for(var u=r;u--;)n[u](h)}}e=e[0]||{};var o=Dn[t],a=Ar(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(h){var u=new o;Zs._pt=0,u.init(e,i?h+i:h,Zs,0,[e]),u.render(1,u),Zs._pt&&rd(1,Zs)}:a.set(e,l);return o?c:function(h){return c(e,l,i?h+i:h,a,1)}},quickTo:function(e,t,i){var n,r=cn.to(e,jr((n={},n[t]="+=0.1",n.paused=!0,n),i||{})),o=function(l,c,h){return r.resetTo(t,l,c,h)};return o.tween=r,o},isTweening:function(e){return Mt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Jr(e.ease,js.ease)),zm(js,e||{})},config:function(e){return zm(Fn,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,n=e.plugins,r=e.defaults,o=e.extendTimeline;(n||"").split(",").forEach(function(a){return a&&!Dn[a]&&!Wn[a]&&ha(t+" effect requires "+a+" plugin.")}),Mf[t]=function(a,l,c){return i(ti(a),ni(l||{},r),c)},o&&(jt.prototype[t]=function(a,l,c){return this.add(Mf[t](a,yi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){it[e]=Jr(t)},parseEase:function(e,t){return arguments.length?Jr(e,t):it},getById:function(e){return Mt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new jt(e),n,r;for(i.smoothChildTiming=Un(e.smoothChildTiming),Mt.remove(i),i._dp=0,i._time=i._tTime=Mt._time,n=Mt._first;n;)r=n._next,(t||!(!n._dur&&n instanceof Lt&&n.vars.onComplete===n._targets[0]))&&vi(i,n,n._start-n._delay),n=r;return vi(Mt,i,0),i},context:function(e,t){return e?new Ig(e,t):St},matchMedia:function(e){return new vC(e)},matchMediaRefresh:function(){return Zr.forEach(function(e){var t=e.conditions,i,n;for(n in t)t[n]&&(t[n]=!1,i=1);i&&e.revert()})||Gf()},addEventListener:function(e,t){var i=Sc[e]||(Sc[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Sc[e],n=i&&i.indexOf(t);n>=0&&i.splice(n,1)},utils:{wrap:ZS,wrapYoyo:jS,distribute:ug,random:dg,snap:fg,normalize:JS,getUnit:$t,clamp:KS,splitColor:_g,toArray:ti,selector:Of,mapRange:pg,pipe:qS,unitize:YS,interpolate:$S,shuffle:hg},install:$m,effects:Mf,ticker:Ln,updateRoot:jt.updateRoot,plugins:Dn,globalTimeline:Mt,core:{PropTween:En,globals:eg,Tween:Lt,Timeline:jt,Animation:da,getCache:Ar,_removeLinkedListItem:Rc,reverting:function(){return an},context:function(e){return e&&St&&(St.data.push(e),e._ctx=St),St},suppressOverwrites:function(e){return zf=e}}};xn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return bc[s]=Lt[s]});Ln.add(jt.updateRoot);Zs=bc.to({},{duration:0});var yC=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},xC=function(e,t){var i=e._targets,n,r,o;for(n in t)for(r=i.length;r--;)o=e._ptLookup[r][n],o&&(o=o.d)&&(o._pt&&(o=yC(o,n)),o&&o.modifier&&o.modifier(t[n],e,i[r],n))},Bf=function(e,t){return{name:e,rawVars:1,init:function(n,r,o){o._onInit=function(a){var l,c;if(Kt(r)&&(l={},xn(r,function(h){return l[h]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}xC(a,r)}}}},cn=bc.registerPlugin({name:"attr",init:function(e,t,i,n,r){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],n,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)an?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Bf("roundProps",kf),Bf("modifiers"),Bf("snap",fg))||bc;Lt.version=jt.version=cn.version="3.12.5";jm=1;Hf()&&to();var EC=it.Power0,SC=it.Power1,CC=it.Power2,MC=it.Power3,TC=it.Power4,IC=it.Linear,bC=it.Quad,wC=it.Cubic,BC=it.Quart,RC=it.Quint,DC=it.Strong,LC=it.Elastic,UC=it.Back,FC=it.SteppedEase,PC=it.Bounce,NC=it.Sine,OC=it.Expo,kC=it.Circ;var bg,gr,ro,fd,ss,QC,wg,dd,GC=function(){return typeof window<"u"},Hi={},rs=180/Math.PI,so=Math.PI/180,io=Math.atan2,Bg=1e8,Ad=/([A-Z])/g,zC=/(left|right|width|margin|padding|x)/i,HC=/[\s,\(]\S/,xi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ld=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},VC=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},WC=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},KC=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Ng=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Og=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},XC=function(e,t,i){return e.style[t]=i},qC=function(e,t,i){return e.style.setProperty(t,i)},YC=function(e,t,i){return e._gsap[t]=i},JC=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},ZC=function(e,t,i,n,r){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(r,o)},jC=function(e,t,i,n,r){var o=e._gsap;o[t]=i,o.renderTransform(r,o)},Tt="transform",Pn=Tt+"Origin",$C=function s(e,t){var i=this,n=this.target,r=n.style,o=n._gsap;if(e in Hi&&r){if(this.tfm=this.tfm||{},e!=="transform")e=xi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=zi(n,a)}):this.tfm[e]=o.x?o[e]:zi(n,e),e===Pn&&(this.tfm.zOrigin=o.zOrigin);else return xi.transform.split(",").forEach(function(a){return s.call(i,a,t)});if(this.props.indexOf(Tt)>=0)return;o.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(Pn,t,"")),e=Tt}(r||t)&&this.props.push(e,t,r[e])},kg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},eM=function(){var e=this.props,t=this.target,i=t.style,n=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?i[e[r]]=e[r+2]:i.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Ad,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)n[o]=this.tfm[o];n.svg&&(n.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=dd(),(!r||!r.isStart)&&!i[Tt]&&(kg(i),n.zOrigin&&i[Pn]&&(i[Pn]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},Qg=function(e,t){var i={target:e,props:[],revert:eM,save:$C};return e._gsap||cn.core.getCache(e),t&&t.split(",").forEach(function(n){return i.save(n)}),i},Gg,cd=function(e,t){var i=gr.createElementNS?gr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):gr.createElement(e);return i&&i.style?i:gr.createElement(e)},Ei=function s(e,t,i){var n=getComputedStyle(e);return n[t]||n.getPropertyValue(t.replace(Ad,"-$1").toLowerCase())||n.getPropertyValue(t)||!i&&s(e,oo(t)||t,1)||""},Rg="O,Moz,ms,Ms,Webkit".split(","),oo=function(e,t,i){var n=t||ss,r=n.style,o=5;if(e in r&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Rg[o]+e in r););return o<0?null:(o===3?"ms":o>=0?Rg[o]:"")+e},hd=function(){GC()&&window.document&&(bg=window,gr=bg.document,ro=gr.documentElement,ss=cd("div")||{style:{}},QC=cd("div"),Tt=oo(Tt),Pn=Tt+"Origin",ss.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Gg=!!oo("perspective"),dd=cn.core.reverting,fd=1)},od=function s(e){var t=cd("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,n=this.nextSibling,r=this.style.cssText,o;if(ro.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(o=this._gsapBBox());return i&&(n?i.insertBefore(this,n):i.appendChild(this)),ro.removeChild(t),this.style.cssText=r,o},Dg=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},zg=function(e){var t;try{t=e.getBBox()}catch{t=od.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===od||(t=od.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Dg(e,["x","cx","x1"])||0,y:+Dg(e,["y","cy","y1"])||0,width:0,height:0}:t},Hg=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&zg(e))},os=function(e,t){if(t){var i=e.style,n;t in Hi&&t!==Pn&&(t=Tt),i.removeProperty?(n=t.substr(0,2),(n==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(n==="--"?t:t.replace(Ad,"-$1").toLowerCase())):i.removeAttribute(t)}},_r=function(e,t,i,n,r,o){var a=new En(e._pt,t,i,0,1,o?Og:Ng);return e._pt=a,a.b=n,a.e=r,e._props.push(i),a},Lg={deg:1,rad:1,turn:1},tM={grid:1,flex:1},vr=function s(e,t,i,n){var r=parseFloat(i)||0,o=(i+"").trim().substr((r+"").length)||"px",a=ss.style,l=zC.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=n==="px",d=n==="%",m,p,A,g;if(n===o||!r||Lg[n]||Lg[o])return r;if(o!=="px"&&!f&&(r=s(e,t,i,"px")),g=e.getCTM&&Hg(e),(d||o==="%")&&(Hi[t]||~t.indexOf("adius")))return m=g?e.getBBox()[l?"width":"height"]:e[h],Bt(d?r/m*u:r/100*m);if(a[l?"width":"height"]=u+(f?o:n),p=~t.indexOf("adius")||n==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(p=(e.ownerSVGElement||{}).parentNode),(!p||p===gr||!p.appendChild)&&(p=gr.body),A=p._gsap,A&&d&&A.width&&l&&A.time===Ln.time&&!A.uncache)return Bt(r/A.width*u);if(d&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=u+n,m=e[h],v?e.style[t]=v:os(e,t)}else(d||o==="%")&&!tM[Ei(p,"display")]&&(a.position=Ei(e,"position")),p===e&&(a.position="static"),p.appendChild(ss),m=ss[h],p.removeChild(ss),a.position="absolute";return l&&d&&(A=Ar(p),A.time=Ln.time,A.width=p[h]),Bt(f?m*r/u:m&&r?u/m*r:0)},zi=function(e,t,i,n){var r;return fd||hd(),t in xi&&t!=="transform"&&(t=xi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Hi[t]&&t!=="transform"?(r=ga(e,n),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Pc(Ei(e,Pn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||n||~(r+"").indexOf("calc("))&&(r=Fc[t]&&Fc[t](e,t,i)||Ei(e,t)||Jf(e,t)||(t==="opacity"?1:0))),i&&!~(r+"").trim().indexOf(" ")?vr(e,t,r,i)+i:r},nM=function(e,t,i,n){if(!i||i==="none"){var r=oo(t,e,1),o=r&&Ei(e,r,1);o&&o!==i?(t=r,i=o):t==="borderColor"&&(i=Ei(e,"borderTopColor"))}var a=new En(this._pt,e.style,t,0,1,id),l=0,c=0,h,u,f,d,m,p,A,g,v,_,y,S;if(a.b=i,a.e=n,i+="",n+="",n==="auto"&&(p=e.style[t],e.style[t]=n,n=Ei(e,t)||n,p?e.style[t]=p:os(e,t)),h=[i,n],Zf(h),i=h[0],n=h[1],f=i.match($r)||[],S=n.match($r)||[],S.length){for(;u=$r.exec(n);)A=u[0],v=n.substring(l,u.index),m?m=(m+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(m=1),A!==(p=f[c++]||"")&&(d=parseFloat(p)||0,y=p.substr((d+"").length),A.charAt(1)==="="&&(A=es(d,A)+y),g=parseFloat(A),_=A.substr((g+"").length),l=$r.lastIndex-_.length,_||(_=_||Fn.units[t]||y,l===n.length&&(n+=_,a.e+=_)),y!==_&&(d=vr(e,t,p,_)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:d,c:g-d,m:m&&m<4||t==="zIndex"?Math.round:0});a.c=l<n.length?n.substring(l,n.length):""}else a.r=t==="display"&&n==="none"?Og:Ng;return Wf.test(n)&&(a.e=0),this._pt=a,a},Ug={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},iM=function(e){var t=e.split(" "),i=t[0],n=t[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(e=i,i=n,n=e),t[0]=Ug[i]||i,t[1]=Ug[n]||n,t.join(" ")},rM=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,n=i.style,r=t.u,o=i._gsap,a,l,c;if(r==="all"||r===!0)n.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],Hi[a]&&(l=1,a=a==="transformOrigin"?Pn:Tt),os(i,a);l&&(os(i,Tt),o&&(o.svg&&i.removeAttribute("transform"),ga(i,1),o.uncache=1,kg(n)))}},Fc={clearProps:function(e,t,i,n,r){if(r.data!=="isFromStart"){var o=e._pt=new En(e._pt,t,i,0,0,rM);return o.u=n,o.pr=-10,o.tween=r,e._props.push(i),1}}},ma=[1,0,0,1,0,0],Vg={},Wg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Fg=function(e){var t=Ei(e,Tt);return Wg(t)?ma:t.substr(7).match(Vf).map(Bt)},pd=function(e,t){var i=e._gsap||Ar(e),n=e.style,r=Fg(e),o,a,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?ma:r):(r===ma&&!e.offsetParent&&e!==ro&&!i.svg&&(l=n.display,n.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,ro.appendChild(e)),r=Fg(e),l?n.display=l:os(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):ro.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},ud=function(e,t,i,n,r,o){var a=e._gsap,l=r||pd(e,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,f=a.yOffset||0,d=l[0],m=l[1],p=l[2],A=l[3],g=l[4],v=l[5],_=t.split(" "),y=parseFloat(_[0])||0,S=parseFloat(_[1])||0,C,E,b,x;i?l!==ma&&(E=d*A-m*p)&&(b=y*(A/E)+S*(-p/E)+(p*v-A*g)/E,x=y*(-m/E)+S*(d/E)-(d*v-m*g)/E,y=b,S=x):(C=zg(e),y=C.x+(~_[0].indexOf("%")?y/100*C.width:y),S=C.y+(~(_[1]||_[0]).indexOf("%")?S/100*C.height:S)),n||n!==!1&&a.smooth?(g=y-c,v=S-h,a.xOffset=u+(g*d+v*p)-g,a.yOffset=f+(g*m+v*A)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=S,a.smooth=!!n,a.origin=t,a.originIsAbsolute=!!i,e.style[Pn]="0px 0px",o&&(_r(o,a,"xOrigin",c,y),_r(o,a,"yOrigin",h,S),_r(o,a,"xOffset",u,a.xOffset),_r(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+S)},ga=function(e,t){var i=e._gsap||new jf(e);if("x"in i&&!t&&!i.uncache)return i;var n=e.style,r=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Ei(e,Pn)||"0",h,u,f,d,m,p,A,g,v,_,y,S,C,E,b,x,M,N,R,z,I,U,P,X,q,Q,V,D,H,L,k,W;return h=u=f=p=A=g=v=_=y=0,d=m=1,i.svg=!!(e.getCTM&&Hg(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[Tt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Tt]!=="none"?l[Tt]:"")),n.scale=n.rotate=n.translate="none"),E=pd(e,i.svg),i.svg&&(i.uncache?(q=e.getBBox(),c=i.xOrigin-q.x+"px "+(i.yOrigin-q.y)+"px",X=""):X=!t&&e.getAttribute("data-svg-origin"),ud(e,X||c,!!X||i.originIsAbsolute,i.smooth!==!1,E)),S=i.xOrigin||0,C=i.yOrigin||0,E!==ma&&(N=E[0],R=E[1],z=E[2],I=E[3],h=U=E[4],u=P=E[5],E.length===6?(d=Math.sqrt(N*N+R*R),m=Math.sqrt(I*I+z*z),p=N||R?io(R,N)*rs:0,v=z||I?io(z,I)*rs+p:0,v&&(m*=Math.abs(Math.cos(v*so))),i.svg&&(h-=S-(S*N+C*z),u-=C-(S*R+C*I))):(W=E[6],L=E[7],V=E[8],D=E[9],H=E[10],k=E[11],h=E[12],u=E[13],f=E[14],b=io(W,H),A=b*rs,b&&(x=Math.cos(-b),M=Math.sin(-b),X=U*x+V*M,q=P*x+D*M,Q=W*x+H*M,V=U*-M+V*x,D=P*-M+D*x,H=W*-M+H*x,k=L*-M+k*x,U=X,P=q,W=Q),b=io(-z,H),g=b*rs,b&&(x=Math.cos(-b),M=Math.sin(-b),X=N*x-V*M,q=R*x-D*M,Q=z*x-H*M,k=I*M+k*x,N=X,R=q,z=Q),b=io(R,N),p=b*rs,b&&(x=Math.cos(b),M=Math.sin(b),X=N*x+R*M,q=U*x+P*M,R=R*x-N*M,P=P*x-U*M,N=X,U=q),A&&Math.abs(A)+Math.abs(p)>359.9&&(A=p=0,g=180-g),d=Bt(Math.sqrt(N*N+R*R+z*z)),m=Bt(Math.sqrt(P*P+W*W)),b=io(U,P),v=Math.abs(b)>2e-4?b*rs:0,y=k?1/(k<0?-k:k):0),i.svg&&(X=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Wg(Ei(e,Tt)),X&&e.setAttribute("transform",X))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(d*=-1,v+=p<=0?180:-180,p+=p<=0?180:-180):(m*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=h-((i.xPercent=h&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=u-((i.yPercent=u&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=Bt(d),i.scaleY=Bt(m),i.rotation=Bt(p)+a,i.rotationX=Bt(A)+a,i.rotationY=Bt(g)+a,i.skewX=v+a,i.skewY=_+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(n[Pn]=Pc(c)),i.xOffset=i.yOffset=0,i.force3D=Fn.force3D,i.renderTransform=i.svg?oM:Gg?Kg:sM,i.uncache=0,i},Pc=function(e){return(e=e.split(" "))[0]+" "+e[1]},ad=function(e,t,i){var n=$t(t);return Bt(parseFloat(t)+parseFloat(vr(e,"x",i+"px",n)))+n},sM=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Kg(e,t)},ns="0deg",pa="0px",is=") ",Kg=function(e,t){var i=t||this,n=i.xPercent,r=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,h=i.rotationY,u=i.rotationX,f=i.skewX,d=i.skewY,m=i.scaleX,p=i.scaleY,A=i.transformPerspective,g=i.force3D,v=i.target,_=i.zOrigin,y="",S=g==="auto"&&e&&e!==1||g===!0;if(_&&(u!==ns||h!==ns)){var C=parseFloat(h)*so,E=Math.sin(C),b=Math.cos(C),x;C=parseFloat(u)*so,x=Math.cos(C),o=ad(v,o,E*x*-_),a=ad(v,a,-Math.sin(C)*-_),l=ad(v,l,b*x*-_+_)}A!==pa&&(y+="perspective("+A+is),(n||r)&&(y+="translate("+n+"%, "+r+"%) "),(S||o!==pa||a!==pa||l!==pa)&&(y+=l!==pa||S?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+is),c!==ns&&(y+="rotate("+c+is),h!==ns&&(y+="rotateY("+h+is),u!==ns&&(y+="rotateX("+u+is),(f!==ns||d!==ns)&&(y+="skew("+f+", "+d+is),(m!==1||p!==1)&&(y+="scale("+m+", "+p+is),v.style[Tt]=y||"translate(0, 0)"},oM=function(e,t){var i=t||this,n=i.xPercent,r=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,h=i.skewY,u=i.scaleX,f=i.scaleY,d=i.target,m=i.xOrigin,p=i.yOrigin,A=i.xOffset,g=i.yOffset,v=i.forceCSS,_=parseFloat(o),y=parseFloat(a),S,C,E,b,x;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=so,c*=so,S=Math.cos(l)*u,C=Math.sin(l)*u,E=Math.sin(l-c)*-f,b=Math.cos(l-c)*f,c&&(h*=so,x=Math.tan(c-h),x=Math.sqrt(1+x*x),E*=x,b*=x,h&&(x=Math.tan(h),x=Math.sqrt(1+x*x),S*=x,C*=x)),S=Bt(S),C=Bt(C),E=Bt(E),b=Bt(b)):(S=u,b=f,C=E=0),(_&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(_=vr(d,"x",o,"px"),y=vr(d,"y",a,"px")),(m||p||A||g)&&(_=Bt(_+m-(m*S+p*E)+A),y=Bt(y+p-(m*C+p*b)+g)),(n||r)&&(x=d.getBBox(),_=Bt(_+n/100*x.width),y=Bt(y+r/100*x.height)),x="matrix("+S+","+C+","+E+","+b+","+_+","+y+")",d.setAttribute("transform",x),v&&(d.style[Tt]=x)},aM=function(e,t,i,n,r){var o=360,a=Kt(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?rs:1),c=l-n,h=n+c+"deg",u,f;return a&&(u=r.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*Bg)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*Bg)%o-~~(c/o)*o)),e._pt=f=new En(e._pt,t,i,n,c,VC),f.e=h,f.u="deg",e._props.push(i),f},Pg=function(e,t){for(var i in t)e[i]=t[i];return e},lM=function(e,t,i){var n=Pg({},i._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,h,u,f,d,m;n.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[Tt]=t,a=ga(i,1),os(i,Tt),i.setAttribute("transform",c)):(c=getComputedStyle(i)[Tt],o[Tt]=t,a=ga(i,1),o[Tt]=c);for(l in Hi)c=n[l],h=a[l],c!==h&&r.indexOf(l)<0&&(d=$t(c),m=$t(h),u=d!==m?vr(i,l,c,m):parseFloat(c),f=parseFloat(h),e._pt=new En(e._pt,a,l,u,f-u,ld),e._pt.u=m||0,e._props.push(l));Pg(a,n)};xn("padding,margin,Width,Radius",function(s,e){var t="Top",i="Right",n="Bottom",r="Left",o=(e<3?[t,i,n,r]:[t+r,t+i,n+i,n+r]).map(function(a){return e<2?s+a:"border"+a+s});Fc[e>1?"border"+s:s]=function(a,l,c,h,u){var f,d;if(arguments.length<4)return f=o.map(function(m){return zi(a,m,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(h+"").split(" "),d={},o.forEach(function(m,p){return d[m]=f[p]=f[p]||f[(p-1)/2|0]}),a.init(l,d,u)}});var md={name:"css",register:hd,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,n,r){var o=this._props,a=e.style,l=i.vars.startAt,c,h,u,f,d,m,p,A,g,v,_,y,S,C,E,b;fd||hd(),this.styles=this.styles||Qg(e),b=this.styles.props,this.tween=i;for(p in t)if(p!=="autoRound"&&(h=t[p],!(Dn[p]&&ed(p,t,i,n,e,r)))){if(d=typeof h,m=Fc[p],d==="function"&&(h=h.call(i,n,e,r),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=no(h)),m)m(this,e,p,h,i)&&(E=1);else if(p.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(p)+"").trim(),h+="",Qi.lastIndex=0,Qi.test(c)||(A=$t(c),g=$t(h)),g?A!==g&&(c=vr(e,p,c,g)+g):A&&(h+=A),this.add(a,"setProperty",c,h,n,r,0,0,p),o.push(p),b.push(p,0,a[p]);else if(d!=="undefined"){if(l&&p in l?(c=typeof l[p]=="function"?l[p].call(i,n,e,r):l[p],Kt(c)&&~c.indexOf("random(")&&(c=no(c)),$t(c+"")||c==="auto"||(c+=Fn.units[p]||$t(zi(e,p))||""),(c+"").charAt(1)==="="&&(c=zi(e,p))):c=zi(e,p),f=parseFloat(c),v=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),u=parseFloat(h),p in xi&&(p==="autoAlpha"&&(f===1&&zi(e,"visibility")==="hidden"&&u&&(f=0),b.push("visibility",0,a.visibility),_r(this,a,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),p!=="scale"&&p!=="transform"&&(p=xi[p],~p.indexOf(",")&&(p=p.split(",")[0]))),_=p in Hi,_){if(this.styles.save(p),y||(S=e._gsap,S.renderTransform&&!t.parseTransform||ga(e,t.parseTransform),C=t.smoothOrigin!==!1&&S.smooth,y=this._pt=new En(this._pt,a,Tt,0,1,S.renderTransform,S,0,-1),y.dep=1),p==="scale")this._pt=new En(this._pt,S,"scaleY",S.scaleY,(v?es(S.scaleY,v+u):u)-S.scaleY||0,ld),this._pt.u=0,o.push("scaleY",p),p+="X";else if(p==="transformOrigin"){b.push(Pn,0,a[Pn]),h=iM(h),S.svg?ud(e,h,0,C,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==S.zOrigin&&_r(this,S,"zOrigin",S.zOrigin,g),_r(this,a,p,Pc(c),Pc(h)));continue}else if(p==="svgOrigin"){ud(e,h,1,C,0,this);continue}else if(p in Vg){aM(this,S,p,f,v?es(f,v+h):h);continue}else if(p==="smoothOrigin"){_r(this,S,"smooth",S.smooth,h);continue}else if(p==="force3D"){S[p]=h;continue}else if(p==="transform"){lM(this,h,e);continue}}else p in a||(p=oo(p)||p);if(_||(u||u===0)&&(f||f===0)&&!HC.test(h)&&p in a)A=(c+"").substr((f+"").length),u||(u=0),g=$t(h)||(p in Fn.units?Fn.units[p]:A),A!==g&&(f=vr(e,p,c,g)),this._pt=new En(this._pt,_?S:a,p,f,(v?es(f,v+u):u)-f,!_&&(g==="px"||p==="zIndex")&&t.autoRound!==!1?KC:ld),this._pt.u=g||0,A!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=WC);else if(p in a)nM.call(this,e,p,c,v?v+h:h);else if(p in e)this.add(e,p,c||e[p],v?v+h:h,n,r);else if(p!=="parseTransform"){Bc(p,h);continue}_||(p in a?b.push(p,0,a[p]):b.push(p,1,c||e[p])),o.push(p)}}E&&sd(this)},render:function(e,t){if(t.tween._time||!dd())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:zi,aliases:xi,getSetter:function(e,t,i){var n=xi[t];return n&&n.indexOf(",")<0&&(t=n),t in Hi&&t!==Pn&&(e._gsap.x||zi(e,"x"))?i&&wg===i?t==="scale"?JC:YC:(wg=i||{})&&(t==="scale"?ZC:jC):e.style&&!wc(e.style[t])?XC:~t.indexOf("-")?qC:Uc(e,t)},core:{_removeProperty:os,_getMatrix:pd}};cn.utils.checkPrefix=oo;cn.core.getStyleSaver=Qg;(function(s,e,t,i){var n=xn(s+","+e+","+t,function(r){Hi[r]=1});xn(e,function(r){Fn.units[r]="deg",Vg[r]=1}),xi[n[13]]=s+","+e,xn(i,function(r){var o=r.split(":");xi[o[1]]=n[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");xn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Fn.units[s]="px"});cn.registerPlugin(md);var Ut=cn.registerPlugin(md)||cn,RT=Ut.core.Tween;var en=matchMedia("(prefers-reduced-motion: reduce)").matches,ls=matchMedia("(hover: hover) and (pointer: fine)").matches,VT=[new Le(12123964),new Le(16732067),new Le(5227775)],Xg=["#A9C77F","#B8FF3C","#A79ED9","#FF4FA3","#4FC4FF","#A8C79E"],cM=performance.now(),Vi=s=>dispatchEvent(new CustomEvent("ab:boot",{detail:`${String(Math.round(performance.now()-cM)).padStart(4,"0")}MS \xB7 ${s}`})),qg=new WeakMap,Yg=(s,e)=>{if(!s)return;if(en||document.hidden){s.textContent=e;return}cancelAnimationFrame(qg.get(s)||0);let t="\u2014/\xB7<>#01",i=performance.now(),n=()=>{let r=Math.min(1,(performance.now()-i)/600),o=Math.floor(e.length*r),a=e.slice(0,o);for(let l=o;l<e.length;l++)a+=e[l]===" "?" ":t[Math.random()*t.length|0];s.textContent=a,r<1?qg.set(s,requestAnimationFrame(n)):s.textContent=e};n()};en||document.body.classList.add("ab-anim");var va=null,xr=0;if(!en){va=new vc({lerp:.085,wheelMultiplier:1}),va.on("scroll",e=>{xr=e.velocity||0});let s=e=>{va.raf(e),requestAnimationFrame(s)};requestAnimationFrame(s)}var Si=document.getElementById("abIntro"),Jg=()=>dispatchEvent(new CustomEvent("ab:hero")),Nc=()=>{!Si||Si.classList.contains("is-done")||(Si.classList.add("is-done"),document.body.classList.add("ab-in"),Jg(),setTimeout(()=>Si.remove(),1100))};if(Si){let s=document.getElementById("abIntroLog");if(s){let e=[];addEventListener("ab:boot",t=>{Si.classList.contains("is-done")||(e.push(t.detail),s.innerHTML=e.slice(-3).map(i=>`<span>${i}</span>`).join(""))})}if(en)Nc();else{let e=Si.querySelector(".ab-intro__word");if(e){let r=[...e.textContent].map(o=>`<i>${o===" "?"&nbsp;":o}</i>`).join("");e.innerHTML=r,Ut.fromTo(e.children,{yPercent:120},{yPercent:0,duration:.9,ease:"power4.out",stagger:.035,delay:.15})}let t=Si.querySelector(".ab-intro__pct"),i=Si.querySelector(".ab-intro__bar b"),n={v:0};Ut.to(n,{v:100,duration:1.55,ease:"power2.inOut",onUpdate:()=>{t&&(t.textContent=String(Math.round(n.v)).padStart(3,"0")),i&&(i.style.transform=`scaleX(${n.v/100})`)},onComplete:()=>setTimeout(Nc,180)}),Si.addEventListener("click",Nc),setTimeout(Nc,4e3)}}else document.body.classList.add("ab-in"),Jg();document.body.classList.add("fx-dom");var gd=[...document.querySelectorAll("[data-abreveal]")];if(en||!("IntersectionObserver"in window))gd.forEach(s=>s.classList.add("in"));else{let s=new Map;gd.forEach(t=>{let i=t.closest("section")||document.body;s.has(i)||s.set(i,0),t.style.transitionDelay=`${Math.min(s.get(i),6)*80}ms`,s.set(i,s.get(i)+1)});let e=new IntersectionObserver(t=>{for(let i of t)i.isIntersecting&&(i.target.classList.add("in"),e.unobserve(i.target))},{threshold:.12,rootMargin:"0px 0px -8% 0px"});gd.forEach(t=>e.observe(t))}var lo=document.querySelector(".ab-pulsesvg path");if(lo){let s=lo.getTotalLength();lo.style.strokeDasharray=String(s),lo.style.strokeDashoffset=en?"0":String(s)}en||(Ut.set(".ab-hero .ab-ln",{yPercent:112,rotate:3}),Ut.set(".ab-hero .ab-eyebrow, .ab-hero .ab-sub, .ab-hero .ab-cue",{opacity:0,y:20}));addEventListener("ab:hero",()=>{if(en)return;let s=Ut.timeline({delay:.05});s.to(".ab-hero .ab-ln",{yPercent:0,rotate:0,duration:1.2,ease:"power4.out",stagger:.12}).to(".ab-hero .ab-eyebrow, .ab-hero .ab-sub, .ab-hero .ab-cue",{opacity:1,y:0,duration:.9,ease:"power3.out",stagger:.1},"-=0.75"),lo&&s.to(lo,{strokeDashoffset:0,duration:1.1,ease:"power2.inOut"},"-=0.6")},{once:!0});var cs=[...document.querySelectorAll("[data-abchapter]")],kc=document.getElementById("abRail"),_d=document.getElementById("abReadout"),ya=document.getElementById("abPct"),xa=[],Ma=null;if(kc&&cs.length){let s=document.createElement("i");s.className="ab-rail__spine",s.innerHTML="<b></b>",kc.appendChild(s),Ma=s.firstElementChild,cs.forEach((e,t)=>{let i=document.createElement("button");i.type="button",i.className="ab-rail__dot",i.setAttribute("aria-label",e.dataset.abchapter||`Chapter ${t+1}`);let n=document.createElement("span");n.className="ab-rail__lbl",n.setAttribute("aria-hidden","true"),n.textContent=`${String(t+1).padStart(2,"0")} ${(e.dataset.abchapter||"").toUpperCase()}`,i.appendChild(n),i.addEventListener("click",()=>{let r=e.getBoundingClientRect().top+scrollY-60;va?va.scrollTo(r):scrollTo({top:r,behavior:"smooth"})}),kc.appendChild(i),xa.push(i)})}var hM=()=>{if(!kc||!xa.length)return;let s=Math.max(1,document.documentElement.scrollHeight-innerHeight);cs.forEach((e,t)=>{xa[t]&&(xa[t].style.top=`${Math.min(100,e.offsetTop/s*100)}%`)})},Ea=document.getElementById("abPlaque"),vd=["F0 \xB7 ECG WAVEFORM \u2014 THE STUDIO'S PULSE","F1 \xB7 CORE + ORBIT \u2014 ONE BUILDER, WHOLE STACK","F2 \xB7 THREE STRANDS \u2014 AXON \xB7 STACKIME \xB7 LOG","F3 \xB7 GLYPHS \u201C3:14\u201D \u2014 THE MINUTE IT STARTED","F4 \xB7 CUBIC LATTICE \u2014 STRUCTURE & GUARDRAILS","F5 \xB7 PULSE MARK \u2014 THE SIGNATURE"],Oc=document.querySelector(".ab-hud"),Qc=-1,as=0,Zg=()=>{let s=scrollY+innerHeight*.45,e=0;if(cs.forEach((i,n)=>{i.offsetTop<=s&&(e=n)}),e!==Qc){let i=Qc===-1;if(Qc=e,xa.forEach((n,r)=>n.classList.toggle("is-active",r===e)),_d){let n=`${String(e+1).padStart(2,"0")} / ${(cs[e].dataset.abchapter||"").toUpperCase()}`;i?_d.textContent=n:Yg(_d,n)}Ea&&document.body.classList.contains("fx-on")&&(i?Ea.textContent=vd[e]:Yg(Ea,vd[e])),document.documentElement.style.setProperty("--abAccent",Xg[e]||Xg[0]),Oc&&!i&&(Oc.classList.remove("is-flash"),Oc.offsetWidth,Oc.classList.add("is-flash")),i||dispatchEvent(new CustomEvent("ab:chapter",{detail:e}))}let t=Math.max(1,document.documentElement.scrollHeight-innerHeight);as=Math.min(100,scrollY/t*100),en&&(ya&&(ya.textContent=String(Math.round(as)).padStart(3,"0")),Gc&&(Gc.style.transform=`scaleX(${as/100})`),Ma&&Ma.style.setProperty("--abFill",as/100))},Sa=document.getElementById("abHair"),Gc=Sa?Sa.querySelector("b"):null,uM=()=>{if(!Sa)return;Sa.querySelectorAll("s").forEach(e=>e.remove());let s=Math.max(1,document.documentElement.scrollHeight-innerHeight);cs.forEach(e=>{let t=document.createElement("s");t.style.left=`${Math.min(100,e.offsetTop/s*100)}%`,Sa.appendChild(t)})};if(!en){let s=0;Ut.ticker.add(()=>{if(s+=(as-s)*.14,Math.abs(as-s)<.06&&(s=as),ya){let t=String(Math.round(s)).padStart(3,"0");ya.textContent!==t&&(ya.textContent=t)}let e=(s/100).toFixed(4);Gc&&(Gc.style.transform=`scaleX(${e})`),Ma&&Ma.style.setProperty("--abFill",e)})}addEventListener("scroll",Zg,{passive:!0});Zg();var Wi=[],yd=()=>{Wi=cs.map(s=>s.offsetTop),uM(),hM()};yd();addEventListener("resize",yd);addEventListener("load",yd);var fM=()=>{if(!Wi.length)return 0;let s=scrollY+innerHeight*.42;if(s<=Wi[0])return 0;for(let e=Wi.length-1;e>=0;e--)if(s>=Wi[e])return e===Wi.length-1?e:e+Math.min(1,(s-Wi[e])/Math.max(1,Wi[e+1]-Wi[e]));return 0},Ca=-1;document.querySelectorAll(".ab-row[data-ch]").forEach(s=>{let e=Number(s.dataset.ch);s.addEventListener("pointerenter",()=>{Ca=e}),s.addEventListener("pointerleave",()=>{Ca=-1})});var _a=document.getElementById("abMarquee");if(_a&&ls&&!en){_a.parentElement.classList.add("is-js");let s=0,e=0,t=()=>_a.scrollWidth/2||1;Ut.ticker.add(()=>{s-=.9+Math.min(7,Math.abs(xr))*.5,-s>=t()&&(s+=t()),e+=(Math.min(1,Math.abs(xr)*.055)-e)*.08,_a.style.transform=`translate3d(${s}px,0,0)`,_a.style.setProperty("--mink",e.toFixed(3))})}if(ls&&!en){let s=document.getElementById("main");if(s){s.style.willChange="transform";let e=Ut.quickTo(s,"skewY",{duration:.5,ease:"power2.out"});Ut.ticker.add(()=>{e(Ut.utils.clamp(-1.6,1.6,xr*.22)),xr*=.92})}}var ao=document.getElementById("abCursor");if(ao&&ls&&!en){document.body.classList.add("ab-cursor-on");let s=ao.querySelector(".ab-cursor__label"),e=document.getElementById("abCursorDot"),t=innerWidth/2,i=innerHeight/2,n=t,r=i,o=!1;addEventListener("pointermove",a=>{t=a.clientX,i=a.clientY,o=!0},{passive:!0}),Ut.ticker.add(()=>{o&&(n+=(t-n)*.16,r+=(i-r)*.16,ao.style.transform=`translate3d(${n}px,${r}px,0)`,e&&(e.style.transform=`translate3d(${t}px,${i}px,0)`))}),document.addEventListener("pointerover",a=>{let l=a.target.closest("[data-cursor]");ao.classList.toggle("is-hover",!!l),l&&s&&(s.textContent=l.dataset.cursor);let c=a.target.closest("[data-ch]");c?ao.style.setProperty("--curc",["#B8FF3C","#FF4FA3","#4FC4FF"][c.dataset.ch]||"#B8FF3C"):ao.style.removeProperty("--curc")})}ls&&!en&&document.querySelectorAll(".ab-cta__btn").forEach(s=>{let e=Ut.quickTo(s,"x",{duration:.4,ease:"power3.out"}),t=Ut.quickTo(s,"y",{duration:.4,ease:"power3.out"});s.addEventListener("pointermove",i=>{let n=s.getBoundingClientRect();e((i.clientX-n.left-n.width/2)*.3),t((i.clientY-n.top-n.height/2)*.45)}),s.addEventListener("pointerleave",()=>{e(0),t(0)})});var yr=document.getElementById("abSound");if(yr){let s=null,e=null,t=null,i=!1,n=null,r=[],o=()=>{if(s)return!0;try{s=new(window.AudioContext||window.webkitAudioContext),e=s.createGain(),e.gain.value=0,n=s.createAnalyser(),n.fftSize=64,n.smoothingTimeConstant=.75,e.connect(n),n.connect(s.destination),t=s.createBiquadFilter(),t.type="lowpass",t.frequency.value=240,t.Q.value=.6,t.connect(e),[[54,"sine",.16],[108.6,"sine",.1],[162.4,"triangle",.035]].forEach(([M,N,R])=>{let z=s.createOscillator(),I=s.createGain();z.type=N,z.frequency.value=M,I.gain.value=R,z.connect(I),I.connect(t),z.start(),r.push({o:z,f:M})});let v=s.createOscillator(),_=s.createGain();v.frequency.value=.06,_.gain.value=90,v.connect(_),_.connect(t.frequency),v.start();let y=s.sampleRate*2,S=s.createBuffer(1,y,s.sampleRate),C=S.getChannelData(0);for(let M=0;M<y;M++)C[M]=Math.random()*2-1;let E=s.createBufferSource();E.buffer=S,E.loop=!0;let b=s.createBiquadFilter();b.type="bandpass",b.frequency.value=1900,b.Q.value=1.4;let x=s.createGain();return x.gain.value=.012,E.connect(b),b.connect(x),x.connect(e),E.start(),!0}catch{return s=null,!1}},a=(v,_=.1,y=.1,S=0)=>{if(!s||!i)return;let C=s.createOscillator(),E=s.createGain();if(C.type="sine",C.frequency.value=v,E.gain.setValueAtTime(_,s.currentTime),E.gain.exponentialRampToValueAtTime(1e-4,s.currentTime+y),C.connect(E),S&&s.createStereoPanner){let b=s.createStereoPanner();b.pan.value=S,E.connect(b),b.connect(e)}else E.connect(e);C.start(),C.stop(s.currentTime+y+.02)},l=()=>{if(!s||!i)return;let v=s.sampleRate*.4,_=s.createBuffer(1,v,s.sampleRate),y=_.getChannelData(0);for(let b=0;b<v;b++)y[b]=(Math.random()*2-1)*(1-b/v);let S=s.createBufferSource();S.buffer=_;let C=s.createBiquadFilter();C.type="lowpass",C.Q.value=2.2,C.frequency.setValueAtTime(2400,s.currentTime),C.frequency.exponentialRampToValueAtTime(220,s.currentTime+.38);let E=s.createGain();E.gain.value=.07,S.connect(C),C.connect(E),E.connect(e),S.start()},c=[...yr.querySelectorAll(".ab-hud__eq i")],h=new Uint8Array(32),u=0,f=0,d=()=>{if(u=i?requestAnimationFrame(d):0,!(!i||!n||f++%3)){n.getByteFrequencyData(h);for(let v=0;v<c.length;v++){let _=h[1+v*4]/255;c[v].style.transform=`scaleY(${(.2+_*.8).toFixed(2)})`}}},m=(v,_=!0)=>{if(v&&o(),i=v,v&&s?.state==="suspended"&&s.resume().catch(()=>{}),yr.setAttribute("aria-pressed",String(!!v)),yr.classList.toggle("is-on",v),yr.classList.toggle("is-live",v&&!!n&&!en),v&&n&&!en&&!u&&d(),v||c.forEach(y=>y.style.transform=""),_)try{localStorage.setItem("ab-sound",v?"1":"0")}catch{}e&&e.gain.linearRampToValueAtTime(v?.9:0,(s?.currentTime||0)+.7)};yr.addEventListener("click",()=>m(!i));let p=null;try{p=localStorage.getItem("ab-sound")}catch{}p==="1"&&(yr.classList.add("is-armed"),addEventListener("pointerdown",function v(){removeEventListener("pointerdown",v),yr.classList.remove("is-armed"),m(!0,!1)},{once:!0}));let A=[587.33,739.99,880];document.querySelectorAll(".ab-row[data-ch]").forEach(v=>{let _=Number(v.dataset.ch);v.addEventListener("pointerenter",()=>a(A[_]||660,.09,.1,(_-1)*.45))}),document.querySelectorAll(".ab-rail__dot").forEach((v,_)=>{v.addEventListener("click",()=>a(392+_*49,.08,.14))}),document.querySelectorAll(".ab-cta__btn").forEach(v=>{v.addEventListener("pointerenter",()=>a(987.77,.06,.08))});let g=[1,1.0595,.8909,1.1892,.9439,1];addEventListener("ab:chapter",v=>{if(l(),s&&r.length){let _=g[v.detail]||1;r.forEach(({o:y,f:S})=>y.frequency.setTargetAtTime(S*_,s.currentTime,.8))}})}var jg=document.getElementById("aboutfx");if(!jg||en||innerWidth<680)document.body.classList.add("about-no3d");else{let s=()=>{Vi("TYPEFACES SETTLED \xB7 COMPILING WORLD");try{dM()}catch(e){console.warn("[aboutfx] 3D disabled:",e),document.body.classList.add("about-no3d")}};Promise.race([document.fonts?.ready,new Promise(e=>setTimeout(e,900))]).then(s,s)}function dM(){let s=innerWidth<1100||matchMedia("(pointer: coarse)").matches,e=Math.min(devicePixelRatio||1,s?1.25:1.5),t=s?26e3:62e3,i=innerWidth,n=innerHeight,r=new Go({canvas:jg,antialias:!1,alpha:!1,stencil:!1,powerPreference:"high-performance"});r.setPixelRatio(e),r.setSize(i,n),r.setClearColor(329227,1),r.outputColorSpace=at,r.toneMapping=Jo;try{let ne=r.getContext(),Ce=ne.getExtension("WEBGL_debug_renderer_info"),B=Ce?String(ne.getParameter(Ce.UNMASKED_RENDERER_WEBGL)):"";Vi(`GL CONTEXT \xB7 ${(B||"RENDERER READY").slice(0,44).toUpperCase()}`)}catch{Vi("GL CONTEXT READY")}let o=document.getElementById("abColN");o&&(o.textContent=t.toLocaleString("en-US"));let a=new Rl;a.fog=new Bl(329227,20,46);let l=new Ht(50,i/n,.1,90);l.position.set(0,.2,19.5);let c=new _t(new Ui(160,90),new vt({uniforms:{uTime:{value:0},uTint:{value:new Le(.42,.62,.32)},uShaftY:{value:.18},uBeat:{value:0}},depthWrite:!1,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
        uniform float uTime, uShaftY, uBeat;
        uniform vec3 uTint;
        varying vec2 vUv;
        void main() {
          vec3 deep = vec3(0.020, 0.024, 0.043);
          vec3 edge = vec3(0.008, 0.009, 0.016);
          float r = distance(vUv, vec2(0.5, 0.42));
          vec3 c = mix(deep, edge, smoothstep(0.12, 0.75, r));
          /* diagonal volumetric shaft \u2014 re-aims per chapter (uShaftY),
             takes the chapter tint, and swells on the heartbeat */
          float sh = smoothstep(0.30, 0.0, abs((vUv.y - uShaftY) - (vUv.x - 0.30) * 0.55));
          c += (vec3(0.030, 0.036, 0.052) + uTint * 0.024) * sh
             * (0.55 + 0.45 * sin(uTime * 0.10) + uBeat * 0.12);
          /* faint chapter-tinted floor bounce */
          c += uTint * 0.010 * smoothstep(0.45, 1.0, 1.0 - vUv.y);
          gl_FragColor = vec4(c, 1.0);
        }`}));c.position.z=-34,a.add(c);let h=()=>Math.random(),u=ne=>(h()-.5)*ne,f=(ne,Ce,B)=>Math.exp(-((ne-Ce)**2)/(2*B*B)),d=ne=>{let Ce=(ne%11+11)%11;return Math.sin(ne*.5)*.16+f(Ce,2.2,.45)*.5-f(Ce,4.35,.13)*.9+f(Ce,4.8,.17)*3.3-f(Ce,5.3,.15)*1.15+f(Ce,7.2,.62)*.72},m=(ne,Ce)=>{let Y=Ce/t*46-23+u(.15),Z=(h()+h()+h()-1.5)*.42;ne[Ce*4]=Y,ne[Ce*4+1]=d(Y)+Z,ne[Ce*4+2]=u(2.2),ne[Ce*4+3]=.06+Math.abs(d(Y))*.05},p=(ne,Ce)=>{if(Ce%8===0){let B=h()*Math.PI*2,Y=7.4+u(.25),Z=Math.cos(B)*Y,te=Math.sin(B)*Y*.62,j=Math.sin(B)*1.9+u(.18);ne[Ce*4]=Z,ne[Ce*4+1]=j,ne[Ce*4+2]=te,ne[Ce*4+3]=2}else{let Y=1-Ce/t*2,Z=Math.sqrt(Math.max(0,1-Y*Y)),te=Ce*2.39996,j=4.4*(.72+.28*Math.cbrt(h()));ne[Ce*4]=Math.cos(te)*Z*j,ne[Ce*4+1]=Y*j,ne[Ce*4+2]=Math.sin(te)*Z*j,ne[Ce*4+3]=0+h()*.12}},A=(ne,Ce)=>{let B=Ce%3,Z=Math.floor(Ce/3)/(t/3)*40-20+u(.1),te=B*2.094,j=(B-1)*3.1;ne[Ce*4]=Z,ne[Ce*4+1]=j+Math.sin(Z*.34+te)*1.25+(h()+h()-1)*.3,ne[Ce*4+2]=Math.cos(Z*.29+te)*1.25+(h()+h()-1)*.3,ne[Ce*4+3]=B},g=(ne,Ce,B)=>{let Y=document.createElement("canvas");Y.width=Ce,Y.height=B;let Z=Y.getContext("2d",{willReadFrequently:!0});ne(Z);let te=Z.getImageData(0,0,Ce,B).data,j=[];for(let Me=0;Me<B;Me+=1)for(let Ue=0;Ue<Ce;Ue+=1)te[(Me*Ce+Ue)*4+3]>110&&j.push([Ue/Ce-.5,.5-Me/B]);return j},v=g(ne=>{ne.font='700 118px "JetBrains Mono", ui-monospace, monospace',ne.textAlign="center",ne.textBaseline="middle",ne.fillStyle="#fff",ne.fillText("3:14",320,84)},640,160),_=(ne,Ce)=>{let B=v.length?v[Ce%v.length]:[u(.5),u(.2)];ne[Ce*4]=B[0]*17.5+u(.14),ne[Ce*4+1]=B[1]*4.4+u(.14),ne[Ce*4+2]=u(1.1),ne[Ce*4+3]=1+u(.1)},y=Math.floor(Math.cbrt(t)),S=(ne,Ce)=>{let B=Ce%(y*y*y),Y=B%y,Z=Math.floor(B/y)%y,te=Math.floor(B/(y*y)),j=11.4/y;ne[Ce*4]=(Y-y/2)*j+u(.03),ne[Ce*4+1]=(Z-y/2)*j+u(.03),ne[Ce*4+2]=(te-y/2)*j-1.5+u(.03),ne[Ce*4+3]=1.85+u(.15)},C=g(ne=>{ne.lineWidth=30,ne.lineJoin="round",ne.lineCap="round",ne.strokeStyle="#fff",ne.save(),ne.translate(60,60),ne.scale(18,18),ne.beginPath(),ne.moveTo(2,14),ne.lineTo(7,14),ne.lineTo(10,7),ne.lineTo(16,21),ne.lineTo(19,14),ne.lineTo(26,14),ne.stroke(),ne.restore()},640,400),x=[m,p,A,_,S,(ne,Ce)=>{let B=C.length?C[Ce%C.length]:[u(.5),u(.3)];ne[Ce*4]=B[0]*20+u(.13),ne[Ce*4+1]=B[1]*12.5+.4+u(.13),ne[Ce*4+2]=u(1.2),ne[Ce*4+3]=(B[0]+.5)*2}].map(ne=>{let Ce=new Float32Array(t*4);for(let B=0;B<t;B++)ne(Ce,B);return Ce});Vi(`${t.toLocaleString("en-US")} PTS \xB7 6 FORMATIONS PACKED`);let M=new bt,N=new Float32Array(t*3),R=new Float32Array(t),z=new Float32Array(t);for(let ne=0;ne<t;ne++)N[ne*3]=x[0][ne*4],N[ne*3+1]=x[0][ne*4+1],N[ne*3+2]=x[0][ne*4+2],R[ne]=x[0][ne*4+3],z[ne]=h();M.setAttribute("position",new ct(N,3)),M.setAttribute("aH0",new ct(R,1)),M.setAttribute("aSeed",new ct(z,1));for(let ne=1;ne<6;ne++)M.setAttribute(`aT${ne}`,new ct(x[ne],4));let I={uTime:{value:0},uPx:{value:e},uBoot:{value:0},uFa:{value:0},uFb:{value:0},uProg:{value:0},uKick:{value:0},uFocus:{value:17},uPtr:{value:new K(999,999,0)},uEx:{value:new K(0,0,0)},uBeat:{value:0},uWaveT:{value:9}},U=`
    attribute float aH0, aSeed;
    attribute vec4 aT1, aT2, aT3, aT4, aT5;
    uniform float uFa, uFb, uProg;
    vec4 pickTarget(float k) {
      if (k < 0.5) return vec4(position, aH0);
      if (k < 1.5) return aT1;
      if (k < 2.5) return aT2;
      if (k < 3.5) return aT3;
      if (k < 4.5) return aT4;
      return aT5;
    }`,P=new Or(M,new vt({uniforms:I,transparent:!0,depthWrite:!1,blending:Ur,vertexShader:U+`
      uniform float uTime, uPx, uBoot, uKick, uFocus, uBeat, uWaveT;
      uniform vec3 uPtr, uEx;
      varying float vA, vHue, vSeed, vLife;

      vec3 curl(vec3 p) {
        float t = uTime * 0.14;
        return vec3(
          sin(p.y * 0.42 + t) + cos(p.z * 0.36 - t * 1.3),
          sin(p.z * 0.39 - t * 0.8) + cos(p.x * 0.34 + t),
          sin(p.x * 0.41 + t * 1.1) + cos(p.y * 0.37 - t)
        );
      }

      /* SIGNAL LIFE \u2014 real packets travel every formation, so the field
         reads as a running instrument, not a sculpture. Evaluated on the
         clean target position (pre-turbulence) of formation k. */
      float life(float k, vec4 T) {
        vec3 q = T.xyz;
        if (k < 0.5) {                       /* ECG: pulse sweeps the trace */
          float px = mod(uTime * 9.2, 60.0) - 30.0;
          return smoothstep(3.4, 0.0, abs(q.x - px));
        } else if (k < 1.5) {                /* orbit packet + systole core */
          float onOrbit = step(6.8, length(q.xz));
          float a = atan(q.z, q.x);
          float s = uTime * 0.9;
          float d = abs(atan(sin(a - s), cos(a - s)));
          return onOrbit * smoothstep(0.9, 0.0, d) + (1.0 - onOrbit) * uBeat * 0.35;
        } else if (k < 2.5) {                /* strands: per-channel packet race */
          float px = mod(uTime * 11.0 + T.w * 17.0, 56.0) - 28.0;
          return smoothstep(2.6, 0.0, abs(q.x - px));
        } else if (k < 3.5) {                /* 3:14 \u2014 the colon blinks, a live clock */
          float colon = smoothstep(1.05, 0.35, abs(q.x + 0.97));
          return colon * step(0.5, fract(uTime * 0.5)) * 0.9;
        } else if (k < 4.5) {                /* lattice: calibration plane scan */
          float sy = mod(uTime * 2.2, 16.0) - 8.0;
          return smoothstep(1.1, 0.0, abs(q.y - sy));
        }
        float px = mod(uTime * 8.0, 46.0) - 23.0;   /* mark: signature pulse */
        return smoothstep(3.0, 0.0, abs(q.x - px));
      }

      void main() {
        vec4 A = pickTarget(uFa);
        vec4 B = pickTarget(uFb);

        /* per-particle staggered flight with mid-flight swarm */
        float d = 0.42;
        float e0 = clamp((uProg - aSeed * d) / (1.0 - d), 0.0, 1.0);
        float e = e0 * e0 * (3.0 - 2.0 * e0);
        float flight = sin(e * 3.14159);

        vec3 p = mix(A.xyz, B.xyz, e);
        float hue = mix(A.w, B.w, e);

        /* signal life blended across the hand-off (both formations, no flicker) */
        float lf = mix(life(uFa, A), life(uFb, B), e);

        /* turbulence: gentle idle, strong mid-flight, scroll kick,
           heartbeat swells the idle sway in sync with the whole room */
        p += curl(p * 0.16 + aSeed * 6.2831) * (0.30 + flight * 2.3 + uKick * 1.1 + uBeat * 0.16) * (0.6 + aSeed * 0.8);
        p.y += sin(uTime * (0.25 + aSeed * 0.35) + aSeed * 40.0) * 0.22;

        /* reformation shockwave \u2014 a radial energy front detonates from
           the world center on each chapter hand-off, then dies out */
        float wr = uWaveT * 9.0;
        float wband = smoothstep(2.6, 0.0, abs(length(p) - wr)) * exp(-uWaveT * 1.4);
        p += normalize(p + 1e-4) * wband * 0.85;

        /* pointer repulsion \u2014 swirl away from the cursor */
        vec3 dp = p - uPtr;
        float dist = length(dp.xy);
        float push = smoothstep(4.2, 0.0, dist);
        p.xy += normalize(dp.xy + 0.0001) * push * 2.4;
        p.z += push * 1.1;

        /* channel excitation (work-row hover) */
        float ex = uEx.x * smoothstep(0.5, 0.15, abs(hue - 0.0))
                 + uEx.y * smoothstep(0.5, 0.15, abs(hue - 1.0))
                 + uEx.z * smoothstep(0.5, 0.15, abs(hue - 2.0));

        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        float dep = -mv.z;

        /* depth-of-field: blur = distance from focal plane.
           alpha falls with coc\xB2 so defocus dims instead of glowing. */
        float coc = abs(dep - uFocus) / max(6.0, uFocus);
        float size = (0.9 + aSeed * 2.1) * (1.0 + coc * 2.0) * (1.0 + ex * 0.8 + push * 0.7);
        gl_PointSize = clamp(size * uPx * (17.0 / max(1.0, dep)) * 1.7, 1.0, 24.0);

        float tw = 0.5 + 0.5 * sin(uTime * (0.4 + aSeed) + aSeed * 30.0);
        vA = (0.05 + 0.24 * tw) * uBoot / (1.0 + coc * coc * 9.0)
           * (1.0 + ex * 1.6 + push * 1.2 + flight * 0.4 + lf * 1.9 + wband * 1.4);
        vHue = hue;
        vSeed = aSeed;
        vLife = lf;
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform vec3 uEx;
      varying float vA, vHue, vSeed, vLife;
      vec3 ramp(float h) {
        vec3 lime = vec3(0.722, 1.0, 0.235);
        vec3 mag  = vec3(1.0, 0.310, 0.639);
        vec3 cyan = vec3(0.310, 0.769, 1.0);
        return h < 1.0 ? mix(lime, mag, smoothstep(0.0, 1.0, h))
                       : mix(mag, cyan, smoothstep(1.0, 2.0, h));
      }
      void main() {
        float d = length(gl_PointCoord - 0.5);
        vec3 col = ramp(clamp(vHue, 0.0, 2.0));
        col = mix(col, vec3(0.82, 0.86, 0.92), 0.10);           /* premium desaturation */
        col = mix(col, vec3(1.0), smoothstep(0.20, 0.0, d) * 0.28); /* hot core */
        col = mix(col, vec3(1.0), vLife * 0.45);                /* packets run white-hot */
        gl_FragColor = vec4(col, smoothstep(0.5, 0.04, d) * vA);
      }`}));P.frustumCulled=!1,a.add(P);let X=s?260:460,q=new bt,Q=new Float32Array(X*3),V=new Float32Array(X);for(let ne=0;ne<X;ne++)Q[ne*3]=u(64),Q[ne*3+1]=u(36),Q[ne*3+2]=-14+h()*30,V[ne]=h();q.setAttribute("position",new ct(Q,3)),q.setAttribute("aSeed",new ct(V,1));let D={uTime:{value:0},uPx:{value:e},uFocus:{value:17},uBoot:{value:0}},H=new Or(q,new vt({uniforms:D,transparent:!0,depthWrite:!1,blending:Ur,vertexShader:`
      attribute float aSeed;
      uniform float uTime, uPx, uFocus, uBoot;
      varying float vA, vSeed;
      void main() {
        vec3 p = position;
        p.x += sin(uTime * 0.05 + aSeed * 20.0) * 2.4;
        p.y += cos(uTime * 0.04 + aSeed * 16.0) * 1.8;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        float dep = -mv.z;
        float coc = abs(dep - uFocus) / max(6.0, uFocus);
        gl_PointSize = clamp((3.0 + aSeed * 9.0) * (0.6 + coc * 2.6) * uPx * (17.0 / max(1.0, dep)) * 1.7, 2.0, 54.0);
        vA = (0.010 + aSeed * 0.028) / (1.0 + coc * coc * 2.4) * uBoot;
        vSeed = aSeed;
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      varying float vA, vSeed;
      void main() {
        float d = length(gl_PointCoord - 0.5);
        vec3 col = mix(vec3(0.55, 0.66, 0.9), vec3(0.75, 0.95, 0.7), step(0.6, vSeed));
        gl_FragColor = vec4(col, smoothstep(0.5, 0.18, d) * vA);
      }`}));H.frustumCulled=!1,a.add(H);let L={uTime:{value:0},uOp:{value:0},uBeat:{value:0}},k=new _t(new Gl(4.1,.1,26,220),new vt({uniforms:L,transparent:!0,depthWrite:!1,vertexShader:`
        varying vec3 vN, vV, vP;
        void main() {
          vN = normalMatrix * normal;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vV = -mv.xyz; vP = position;
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        uniform float uTime, uOp, uBeat;
        varying vec3 vN, vV, vP;
        vec3 pal(float t) { return 0.5 + 0.5 * cos(6.2831 * (t + vec3(0.00, 0.33, 0.67))); }
        void main() {
          float fr = pow(1.0 - abs(dot(normalize(vN), normalize(vV))), 1.6);
          vec3 irid = pal(fr * 0.85 + vP.x * 0.05 + vP.y * 0.04 + uTime * 0.03);
          vec3 col = mix(vec3(0.06, 0.07, 0.10), irid, 0.30 + fr * 0.7);
          /* engraved graduations \u2014 72 fine, 12 major (smoothstep, no moir\xE9) */
          float ang = atan(vP.y, vP.x);
          float tick = smoothstep(0.90, 0.995, cos(ang * 72.0));
          float major = smoothstep(0.975, 0.999, cos(ang * 12.0));
          col += irid * (tick * 0.22 + major * 0.30) * (0.25 + fr * 0.75);
          /* phosphor sweep circling the dial */
          float sw = smoothstep(0.55, 0.0, abs(atan(sin(ang - uTime * 0.45), cos(ang - uTime * 0.45))));
          col += irid * sw * 0.16;
          /* heartbeat rim-flash */
          col += irid * uBeat * 0.22;
          gl_FragColor = vec4(col, (0.16 + fr * 0.9 + uBeat * 0.06) * uOp);
        }`}));k.position.set(0,.3,-4.5),k.rotation.set(.5,0,-.35),a.add(k);let W={uTime:{value:0},uOp:{value:0},uHit:{value:0}},ee=new _t(new Ql(1.55,s?24:48),new vt({uniforms:W,transparent:!0,depthWrite:!1,vertexShader:`
        uniform float uTime, uHit;
        varying vec3 vN, vV; varying float vD;
        float n3(vec3 p) {
          return sin(p.x * 2.1 + uTime * 0.6) * sin(p.y * 2.4 - uTime * 0.5) * sin(p.z * 2.2 + uTime * 0.7);
        }
        void main() {
          vec3 p = position;
          float breathe = n3(normalize(position) * 2.0) * 0.14;
          float ripple = sin(length(position.xy) * 9.0 - uTime * 6.0) * uHit * 0.10;
          vD = breathe + ripple;
          p += normal * (breathe + ripple);
          vN = normalMatrix * normal;
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          vV = -mv.xyz;
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        uniform float uTime, uOp, uHit;
        varying vec3 vN, vV; varying float vD;
        vec3 pal(float t) { return 0.5 + 0.5 * cos(6.2831 * (t + vec3(0.00, 0.33, 0.67))); }
        void main() {
          float fr = pow(1.0 - abs(dot(normalize(vN), normalize(vV))), 2.0);
          /* thin-film: hue drifts with incidence + displacement + time */
          vec3 film = pal(fr * 0.9 + vD * 1.6 + uTime * 0.02);
          vec3 col = mix(vec3(0.04, 0.05, 0.08), film, 0.16 + fr * 0.84);
          col += film * uHit * 0.25;
          gl_FragColor = vec4(col, (0.05 + fr * 0.85) * uOp);
        }`}));ee.position.copy(k.position),a.add(ee);let J={group:null,gA:null,gB:null,blend:0},re={uTime:{value:0},uOp:{value:0},uBeat:{value:0},uMatcap:{value:null}};(async()=>{try{let ne=new cc().setDecoderPath("/assets/3d/draco/"),Ce=new ac().setDRACOLoader(ne),B=new ur().setTranscoderPath("/assets/3d/basis/").detectSupport(r),[Y,Z]=await Promise.all([Ce.loadAsync("/assets/3d/about-instrument.glb"),B.loadAsync("/assets/3d/about-matcap.ktx2")]);Z.colorSpace=at,re.uMatcap.value=Z;let te=new vt({uniforms:re,transparent:!0,depthWrite:!1,vertexShader:`
          varying vec3 vN, vV, vP;
          void main() {
            vN = normalize(normalMatrix * normal);
            vP = position;
            vec4 mv = modelViewMatrix * vec4(position, 1.0);
            vV = -mv.xyz;
            gl_Position = projectionMatrix * mv;
          }`,fragmentShader:`
          uniform sampler2D uMatcap;
          uniform float uTime, uOp, uBeat;
          varying vec3 vN, vV, vP;
          vec3 pal(float t) { return 0.5 + 0.5 * cos(6.2831 * (t + vec3(0.00, 0.33, 0.67))); }
          void main() {
            vec3 n = normalize(vN);
            vec3 v = normalize(vV);
            /* the whole studio light rig lives in this one baked texture */
            vec3 mc = texture2D(uMatcap, n.xy * 0.49 + 0.5).rgb;
            float fr = pow(1.0 - abs(dot(n, v)), 1.8);
            vec3 irid = pal(fr * 0.8 + vP.x * 0.04 + uTime * 0.03);
            vec3 col = mc * 1.30;
            col += irid * fr * 0.22;   /* thin-film whisper on grazing edges */
            /* phosphor riding the CUT groove of the bezel's outer face \u2014
               the light lives in machined geometry, not on it. r/z masks
               select the groove; zero on the gimbals (r < 2.8). */
            float r = length(vP.xy);
            float groove = smoothstep(4.16, 4.20, r) * smoothstep(0.034, 0.012, abs(vP.z));
            float ang = atan(vP.y, vP.x);
            float sw = smoothstep(0.7, 0.0, abs(atan(sin(ang - uTime * 0.45), cos(ang - uTime * 0.45))));
            col += vec3(0.72, 1.0, 0.42) * groove * (0.14 + sw * 0.9 + uBeat * 0.35);
            col += irid * uBeat * 0.10; /* heartbeat rim-flash, same bus as v4 */
            gl_FragColor = vec4(col, uOp);
          }`}),j=new qn,Me={};if(Y.scene.traverse(ze=>{ze.isMesh&&(ze.material=te,Me[ze.name]=ze)}),!Me.Bezel||!Me.GimbalA||!Me.GimbalB)throw new Error("instrument parts missing");Me.GimbalA.position.set(0,0,0),Me.GimbalB.position.set(0,0,0),j.add(Me.Bezel),j.add(Me.GimbalA),Me.GimbalA.add(Me.GimbalB),j.position.copy(k.position),j.rotation.copy(k.rotation),j.visible=!1,a.add(j),J.group=j,J.gA=Me.GimbalA,J.gB=Me.GimbalB,Vi("MACHINED ASSEMBLY DOCKED \xB7 DRACO + KTX2"),document.body.classList.add("ab-machined");let Ue=document.getElementById("abColMach");Ue&&(Ue.textContent="0 STOCK ASSETS \xB7 HERO MACHINED IN BLENDER"),Ut.to(J,{blend:1,duration:1.6,ease:"power2.inOut"})}catch(ne){console.warn("[aboutfx] machined hero unavailable, procedural ring stays:",ne)}})();let pe="/assets/fonts/ClashDisplay-700.woff",ge=[],fe=[{s:"01",at:1,p:[-4.6,3.1,-7.5],ry:.14,fs:6.2},{s:"02",at:2,p:[-7.6,3.3,-8.5],ry:.1,fs:6.8},{s:"03",at:3,p:[-6,-2.4,-6.5],ry:.16,fs:5.8},{s:"04",at:4,p:[-3.2,3.4,-9],ry:.1,fs:6.6},{s:"05",at:4.6,p:[-8.4,1.6,-10],ry:.12,fs:6.4}];try{Lm({font:pe,characters:"0123456789"},()=>{try{Vi("SDF GLYPH ATLAS READY"),fe.forEach(ne=>{let Ce=new ra;Ce.font=pe,Ce.text=ne.s,Ce.fontSize=ne.fs,Ce.anchorX="center",Ce.anchorY="middle",Ce.letterSpacing=-.03,Ce.color=13623534,Ce.fillOpacity=.03,Ce.strokeColor=14412280,Ce.strokeOpacity=.34,Ce.strokeWidth="0.55%",Ce.position.set(...ne.p),Ce.rotation.y=ne.ry,Ce.material.depthWrite=!1,Ce.fillOpacity=0,Ce.strokeOpacity=0,Ce.visible=!1;let B={obj:Ce,at:ne.at,base:ne.p.slice(),amp:.4+Math.random()*.5,k:0,ready:!1};ge.push(B),Ce.sync(()=>{B.ready=!0,document.body.classList.add("ab-type-on")}),a.add(Ce)})}catch(ne){console.warn("[aboutfx] in-world type disabled:",ne)}})}catch(ne){console.warn("[aboutfx] font preload failed:",ne)}let O=new qs(new Qe(i,n),.3,.62,.72),Oe=128,xe=document.createElement("canvas");xe.width=xe.height=Oe;let de=xe.getContext("2d");de.fillStyle="#000",de.fillRect(0,0,Oe,Oe);let ue=new kl(xe);ue.minFilter=Et,ue.magFilter=Et,ue.generateMipmaps=!1;let be={tDiffuse:{value:null},tTrail:{value:ue},uTime:{value:0},uResolution:{value:new Qe(i*e,n*e)},uAberration:{value:0},uWarp:{value:0},uVignette:{value:1},uGrain:{value:.085},uMouse:{value:new ot(.5,.5,0,0)},uContact:{value:0},uTint:{value:new Le(.42,.62,.32)}},ae=new Xs(new vt({uniforms:be,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
      precision highp float;
      uniform sampler2D tDiffuse;
      uniform sampler2D tTrail;
      uniform float uTime, uAberration, uWarp, uVignette, uGrain, uContact;
      uniform vec2 uResolution;
      uniform vec4 uMouse;
      uniform vec3 uTint;
      varying vec2 vUv;

      float hash(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
      /* AT-style flowing sine noise for the corner glow */
      float cnoise(vec2 v){
        float t = v.x * 0.3; v.y *= 0.8; float n = 0.0; float s = 0.5;
        n += (sin(v.x * 0.9 / s + t * 4.0) + sin(v.x * 2.4 / s) + sin(v.x * -3.5 / s + t * 2.0)) * 0.3;
        n += (sin(v.y * -0.3 / s + t * 3.0) + sin(v.y * 1.6 / s) + sin(v.y * 2.6 / s - t)) * 0.3;
        return n;
      }
      vec3 rgbSplit(vec2 uv, vec2 dir, float amt){
        return vec3(texture2D(tDiffuse, uv + dir * amt).r, texture2D(tDiffuse, uv).g, texture2D(tDiffuse, uv - dir * amt).b);
      }
      void main(){
        vec2 uv = vUv;
        vec2 c = uv - 0.5;
        float aspect = uResolution.x / uResolution.y;

        /* breathing zoom \u2014 the world inhales on scroll energy */
        uv = 0.5 + c * (1.0 - uContact * 0.035);

        /* fluid trail \u2014 warp along the gradient of the accumulated
           pointer wake, plus a tight ripple at the cursor itself. The
           trail is a plain byte texture, so it survives software GL. */
        float tr = texture2D(tTrail, vUv).r;
        float px = 1.0 / 128.0;
        vec2 tg = vec2(
          texture2D(tTrail, vUv + vec2(px, 0.0)).r - texture2D(tTrail, vUv - vec2(px, 0.0)).r,
          texture2D(tTrail, vUv + vec2(0.0, px)).r - texture2D(tTrail, vUv - vec2(0.0, px)).r);
        uv += tg * 0.022;
        vec2 md = (uv - uMouse.xy) * vec2(aspect, 1.0);
        float mdist = length(md);
        float mvel = length(uMouse.zw);
        float ripple = sin(mdist * 40.0 - uTime * 7.0) * exp(-mdist * 8.0) * mvel;
        uv += normalize((uv - uMouse.xy) + 1e-4) * ripple * 0.03;

        /* section-transition wave warp \u2014 scroll velocity + chapter hand-off */
        uv.x += sin(uv.y * 11.0 + uTime * 3.2) * 0.006 * uWarp;
        uv.y += cos(uv.x * 8.0 - uTime * 2.4) * 0.004 * uWarp;

        /* chromatic aberration \u2014 grows to the edges, kicked by motion
           and split harder inside the fluid wake */
        float edge = dot(c, c);
        float amt = uAberration * 0.0018 + edge * 0.0024 + uWarp * 0.005 + mvel * 0.03 + tr * 0.0035;
        vec2 dir = normalize(c + 1e-4);
        vec3 col = rgbSplit(uv, dir, amt);

        /* the wake itself faintly luminesces in the channel tint */
        col += uTint * tr * 0.045;

        /* corner hue-glow \u2014 cnoise-modulated, tinted to the active channel.
           This is what makes it read as a lit room instead of a black void. */
        float g = 0.5 + 0.5 * cnoise(c * 3.2 + uTime * 0.05);
        float corner = smoothstep(0.16, 0.95, length(c) * 1.32);
        col += uTint * pow(corner * g, 2.0) * 0.20;

        /* filmic split-tone + gentle contrast */
        float lum = dot(col, vec3(0.299, 0.587, 0.114));
        col = mix(col, col * vec3(0.90, 0.97, 1.14), (1.0 - lum) * 0.28); // cool shadows
        col = mix(col, col * vec3(1.07, 1.0, 0.90), lum * 0.20);          // warm highlights
        col = (col - 0.5) * 1.065 + 0.5;

        /* vignette */
        float vig = smoothstep(1.18, 0.32, length(c) * 1.3);
        col *= mix(1.0, vig, uVignette);

        /* film grain \u2014 overlay, animated */
        float grain = hash(uv * uResolution + fract(uTime) * 431.0);
        col = mix(col, col * (0.82 + grain * 0.36), uGrain);

        gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
      }`}));ae.renderToScreen=!0;let w=new rc(r);w.setPixelRatio(e),w.setSize(i,n),w.addPass(new sc(a,l)),w.addPass(O),w.addPass(new oc),w.addPass(ae),Vi("GRADE PASS COMPILED");let T=[new Le(.55,.72,.38),new Le(.72,1,.24),new Le(.62,.6,.85),new Le(1,.31,.64),new Le(.31,.77,1),new Le(.66,.78,.62)],F=[.46,.34,.3,.4,.32,.44],se=[.18,.3,.1,.44,.24,.34],$=new Le,ie=0,ce=0,_e=0,he=0,me=0,Ee=0,oe=0,He=!1,ke=document.getElementById("abTelem"),we=-1,Se=[{p:[0,.2,17.5],l:[0,0,0],f:50},{p:[3.2,-.4,15.2],l:[2.4,.1,0],f:50},{p:[0,-1.1,16.2],l:[0,-.3,0],f:52},{p:[-1.6,.4,16.4],l:[1.8,.3,0],f:47},{p:[1.5,1.5,17.2],l:[2.2,.4,0],f:50},{p:[0,.1,15.2],l:[0,.3,0],f:48}],Ae=new Xo(Se.map(ne=>new K(...ne.p)),!1,"centripetal",.4),Ne=new Xo(Se.map(ne=>new K(...ne.l)),!1,"centripetal",.4);Vi("CAMERA RIG ARMED \xB7 6 KEYFRAMES");let Ge=new K,je=new K,Fe=new K(...Se[0].p),le=new K(...Se[0].l),G=new K(999,999,0),Te=new Qe(.5,.5),ve=new Qe(.5,.5),Ie=0,Re=0;ls&&(addEventListener("pointermove",ne=>{Ie=ne.clientX/i*2-1,Re=-(ne.clientY/n)*2+1,ve.set(ne.clientX/i,1-ne.clientY/n);let Ce=Math.tan(ec.degToRad(l.fov/2))*l.position.length();G.set(Ie*Ce*l.aspect*.9,Re*Ce*.9,0)},{passive:!0}),document.documentElement.addEventListener("pointerleave",()=>G.set(999,999,0)));let Ve=!1;document.addEventListener("visibilitychange",()=>{Ve=document.hidden}),addEventListener("resize",()=>{i=innerWidth,n=innerHeight,l.aspect=i/n,l.updateProjectionMatrix(),r.setSize(i,n),w.setSize(i,n),be.uResolution.value.set(i*Rt,n*Rt)});let De={ring:0,core:0};addEventListener("ab:hero",()=>{Ut.to(I.uBoot,{value:1,duration:1.8,ease:"power2.out"}),Ut.to(D.uBoot,{value:1,duration:2.2,ease:"power2.out"}),Ut.to(De,{ring:1,duration:2,ease:"power2.out",delay:.2}),Ut.to(De,{core:1,duration:2.4,ease:"power2.out",delay:.45})},{once:!0}),document.body.classList.contains("ab-in")&&(I.uBoot.value=1,D.uBoot.value=1,De.ring=1,De.core=1);let Ye=s?[1.25,1,.8]:[1.5,1.15,.9],tt=0,Ke=16.7,et=120,xt=0,Rt=e,Sn=()=>{Rt=Math.min(devicePixelRatio||1,Ye[tt]),r.setPixelRatio(Rt),w.setPixelRatio(Rt),r.setSize(i,n),w.setSize(i,n),I.uPx.value=Rt,D.uPx.value=Rt,be.uResolution.value.set(i*Rt,n*Rt)},hn=ne=>{let Ce=Math.min(100,(ne-xt)*1e3);xt=ne,!(Ce<=0)&&(Ke+=(Ce-Ke)*.05,!(--et>0)&&(Ke>30&&tt<Ye.length-1?(tt++,Sn(),et=240):Ke<17&&tt>0&&(tt--,Sn(),et=420)))},Jt=-1,Ft=-1,ht=Se.length-1,Nn=new K,hs=new Vs;r.setAnimationLoop(()=>{if(Ve)return;let ne=hs.getElapsedTime(),Ce=Math.min(.1,Math.max(0,ne-oe));oe=ne,I.uTime.value=ne,D.uTime.value=ne,L.uTime.value=ne,W.uTime.value=ne,c.material.uniforms.uTime.value=ne,hn(ne),He||(He=!0,Vi("FIRST FRAME RENDERED"));let B=Math.max(0,d(ne*9.2))/3.3;Ee=Math.max(B,Ee-Ce*2.4),I.uBeat.value=Ee,L.uBeat.value=Ee,c.material.uniforms.uBeat.value=Ee,I.uWaveT.value=Math.min(9,I.uWaveT.value+Ce),ke&&ne-we>.5&&(we=ne,ke.textContent=`${t.toLocaleString("en-US")} PTS \xB7 ${Math.min(120,Math.round(1e3/Math.max(8.3,Ke)))} FPS \xB7 Q:${["HI","MID","LO"][tt]}`);let Y=Math.min(ht,Math.max(0,fM())),Z=Math.min(ht-0,Math.floor(Y)),te=Y-Z;I.uFa.value=Z,I.uFb.value=Math.min(ht,Z+1),I.uProg.value=te*te*(3-2*te),Ae.getPoint(Y/ht,Ge),Ne.getPoint(Y/ht,je),Ge.x+=Ie*.55+Math.sin(ne*.35)*.1,Ge.y+=Re*.35+Math.cos(ne*.28)*.07,Ge.z+=(1-I.uBoot.value)*2.6,Fe.lerp(Ge,.055),le.lerp(je,.055),l.position.copy(Fe),l.lookAt(le),_e+=(Ut.utils.clamp(-.05,.05,xr*.006)-_e)*.06,l.rotateZ(_e+Math.sin(ne*.18)*.006);let j=Se[Z].f+(Se[Math.min(ht,Z+1)].f-Se[Z].f)*te;Math.abs(l.fov-j)>.01&&(l.fov+=(j-l.fov)*.06,l.updateProjectionMatrix());let Me=Fe.length()+me*2.6;I.uFocus.value+=(Me-I.uFocus.value)*.05,D.uFocus.value=I.uFocus.value,I.uKick.value+=(Math.min(1.6,Math.abs(xr)*.08)-I.uKick.value)*.07,Nn.set(Ca===0?1:0,Ca===1?1:0,Ca===2?1:0),I.uEx.value.lerp(Nn,.08);let Ue=Math.min(1,Y);k.rotation.z=-.35+ne*.05,k.rotation.x=.5+Math.sin(ne*.22)*.06,k.position.y=.3+Ue*9;let ze=De.ring*(1-Ue);L.uOp.value=ze*(1-J.blend),k.visible=L.uOp.value>.005,J.group&&(J.group.position.copy(k.position),J.group.rotation.copy(k.rotation),J.gA.rotation.x=ne*.31+Ee*.2,J.gB.rotation.y=ne*.47,re.uTime.value=ne,re.uBeat.value=Ee,re.uOp.value=ze*J.blend,J.group.visible=re.uOp.value>.005),ee.position.set(k.position.x,k.position.y,k.position.z),ee.rotation.y=ne*.14,ee.rotation.x=Math.sin(ne*.1)*.2;let ye=Math.max(0,1-Ue*1.4);if(ee.visible=ye>.01,W.uOp.value=De.core*ye,ee.visible&&ls){let Pe=ee.position.clone().project(l),Gt=Math.hypot(Pe.x-Ie,Pe.y-Re);W.uHit.value+=(Math.max(0,1-Gt*2.6)-W.uHit.value)*.09}let Xe=Y-.42;for(let Pe of ge){if(!Pe.ready)continue;let Gt=Math.max(0,1-Math.abs(Xe-Pe.at)*2.6);Pe.k+=(Gt*Gt*Gt-Pe.k)*.09,Pe.obj.visible=Pe.k>.01,Pe.obj.visible&&(Pe.obj.fillOpacity=.03*Pe.k,Pe.obj.strokeOpacity=.34*Pe.k,Pe.obj.position.y=Pe.base[1]+Math.sin(ne*.3+Pe.at*2.1)*.22*Pe.amp,Pe.obj.position.x=Pe.base[0]+Ie*-.4,Pe.obj.rotation.y=Math.sin(ne*.12+Pe.at)*.04+.1)}let qe=ve.x-Te.x,We=ve.y-Te.y;Te.x+=qe*.18,Te.y+=We*.18;let rt=be.uMouse.value;if(rt.x=Te.x,rt.y=Te.y,rt.z=qe*.18,rt.w=We*.18,de.fillStyle="rgba(0,0,0,0.08)",de.fillRect(0,0,Oe,Oe),ls){let Pe=Te.x*Oe,Gt=(1-Te.y)*Oe,ut=Math.hypot(rt.z,rt.w);Jt<0&&(Jt=Pe,Ft=Gt);let un=Math.max(1,Math.ceil(Math.hypot(Pe-Jt,Gt-Ft)/3)),Er=Math.min(.55,.1+ut*26),Cn=7+Math.min(16,ut*320);for(let Kn=1;Kn<=un;Kn++){let dt=Jt+(Pe-Jt)*Kn/un,fn=Ft+(Gt-Ft)*Kn/un,ii=de.createRadialGradient(dt,fn,0,dt,fn,Cn);ii.addColorStop(0,`rgba(255,255,255,${Er})`),ii.addColorStop(1,"rgba(255,255,255,0)"),de.fillStyle=ii,de.beginPath(),de.arc(dt,fn,Cn,0,6.2832),de.fill()}Jt=Pe,Ft=Gt}ue.needsUpdate=!0,I.uPtr.value.lerp(G,.08);let Qt=Math.round(Y);Qt!==he&&(me=1,he=Qt,I.uWaveT.value=0),me*=.9;let mt=Math.min(1,Math.abs(xr)*.05);ie+=(Math.max(mt,me)-ie)*.12,ce+=(mt*.6+.15+me*.4-ce)*.05,be.uTime.value=ne,be.uWarp.value=ie,be.uContact.value=ce,be.uAberration.value=mt,$.copy(T[Z]).lerp(T[Math.min(ht,Z+1)],te),be.uTint.value.lerp($,.06),c.material.uniforms.uTint.value.lerp($,.05);let tn=se[Z]+(se[Math.min(ht,Z+1)]-se[Z])*te;c.material.uniforms.uShaftY.value+=(tn-c.material.uniforms.uShaftY.value)*.04;let lt=F[Z]+(F[Math.min(ht,Z+1)]-F[Z])*te+me*.5+Ee*.07;O.strength+=(lt-O.strength)*.08,l.position.z-=me*.6,w.render()}),document.body.classList.add("fx-on"),Ea&&(Ea.textContent=vd[Math.max(0,Qc)])}
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

troika-three-text/dist/troika-three-text.esm.js:
  (*!
  Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
  Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
  *)
  (*!
  Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
  (https://github.com/101arrowz/fflate) for use in Troika text rendering. 
  Original licenses apply: 
  - fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
  - woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
  *)
  (*!
  Custom bundle of @unicode-font-resolver/client v1.0.2 (https://github.com/lojjic/unicode-font-resolver)
  for use in Troika text rendering. 
  Original MIT license applies
  *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.12.5
   * https://gsap.com
   *
   * Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
