var E0=Object.defineProperty;var T0=(s,e,t)=>e in s?E0(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Mi=(s,e,t)=>T0(s,typeof e!="symbol"?e+"":e,t);var Yh="160";var w0=0,Jd=1,A0=2;var Vp=1,Zh=2,Ri=3,kn=0,Ft=1,fn=2;var ci=0,yr=1,za=2,$d=3,jd=4,R0=5,As=100,C0=101,P0=102,Qd=103,ef=104,L0=200,I0=201,D0=202,N0=203,sh=204,rh=205,U0=206,O0=207,F0=208,B0=209,z0=210,H0=211,k0=212,V0=213,G0=214,W0=0,X0=1,q0=2,Ha=3,Y0=4,Z0=5,K0=6,J0=7,Gp=0,$0=1,j0=2,Ji=0,Kh=1,Jh=2,$h=3,Bo=4,Q0=5,jh=6,tf="attached",e_="detached",Wp=300,br=301,Er=302,Mo=303,oh=304,Sl=306,Pi=1e3,In=1001,So=1002,Ht=1003,ka=1004;var po=1005;var Kt=1006,Qh=1007;var Qi=1008;var $i=1009,t_=1010,n_=1011,eu=1012,Xp=1013,li=1014,ni=1015,pn=1016,qp=1017,Yp=1018,Cs=1020,i_=1021,xn=1023,s_=1024,r_=1025,Ps=1026,Tr=1027,o_=1028,Zp=1029,a_=1030,Kp=1031,Jp=1033,Sc=33776,bc=33777,Ec=33778,Tc=33779,nf=35840,sf=35841,rf=35842,of=35843,$p=36196,af=37492,lf=37496,cf=37808,hf=37809,uf=37810,df=37811,ff=37812,pf=37813,mf=37814,gf=37815,_f=37816,vf=37817,xf=37818,yf=37819,Mf=37820,Sf=37821,wc=36492,bf=36494,Ef=36495,l_=36283,Tf=36284,wf=36285,Af=36286;var wr=2300,Is=2301,Ac=2302,Rf=2400,Cf=2401,Pf=2402,c_=2500;var jp=0,bl=1,zo=2,Qp=3e3,Ls=3001,h_=3200,u_=3201,em=0,d_=1,zn="",ut="srgb",Et="srgb-linear",tu="display-p3",El="display-p3-linear",Va="linear",ft="srgb",Ga="rec709",Wa="p3";var er=7680;var Lf=519,f_=512,p_=513,m_=514,tm=515,g_=516,__=517,v_=518,x_=519,ah=35044,Tl=35048;var If="300 es",lh=1035,Ci=2e3,Xa=2001,es=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Df=1234567,mo=Math.PI/180,Ar=180/Math.PI;function Hn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[s&255]+sn[s>>8&255]+sn[s>>16&255]+sn[s>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function kt(s,e,t){return Math.max(e,Math.min(t,s))}function nu(s,e){return(s%e+e)%e}function y_(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function M_(s,e,t){return s!==e?(t-s)/(e-s):0}function go(s,e,t){return(1-t)*s+t*e}function S_(s,e,t,n){return go(s,e,1-Math.exp(-t*n))}function b_(s,e=1){return e-Math.abs(nu(s,e*2)-e)}function E_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function T_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function w_(s,e){return s+Math.floor(Math.random()*(e-s+1))}function A_(s,e){return s+Math.random()*(e-s)}function R_(s){return s*(.5-Math.random())}function C_(s){s!==void 0&&(Df=s);let e=Df+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function P_(s){return s*mo}function L_(s){return s*Ar}function ch(s){return(s&s-1)===0&&s!==0}function I_(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function qa(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function D_(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*_,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*_,a*c);break;case"ZYZ":s.set(l*_,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ai(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function dt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var je={DEG2RAD:mo,RAD2DEG:Ar,generateUUID:Hn,clamp:kt,euclideanModulo:nu,mapLinear:y_,inverseLerp:M_,lerp:go,damp:S_,pingpong:b_,smoothstep:E_,smootherstep:T_,randInt:w_,randFloat:A_,randFloatSpread:R_,seededRandom:C_,degToRad:P_,radToDeg:L_,isPowerOfTwo:ch,ceilPowerOfTwo:I_,floorPowerOfTwo:qa,setQuaternionFromProperEuler:D_,normalize:dt,denormalize:ai},re=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},tt=class s{constructor(e,t,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],_=n[8],g=i[0],p=i[3],m=i[6],x=i[1],v=i[4],y=i[7],b=i[2],S=i[5],T=i[8];return r[0]=o*g+a*x+l*b,r[3]=o*p+a*v+l*S,r[6]=o*m+a*y+l*T,r[1]=c*g+h*x+u*b,r[4]=c*p+h*v+u*S,r[7]=c*m+h*y+u*T,r[2]=d*g+f*x+_*b,r[5]=d*p+f*v+_*S,r[8]=d*m+f*y+_*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,_=t*u+n*d+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return e[0]=u*g,e[1]=(i*c-h*n)*g,e[2]=(a*n-i*o)*g,e[3]=d*g,e[4]=(h*t-i*l)*g,e[5]=(i*r-a*t)*g,e[6]=f*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Rc.makeScale(e,t)),this}rotate(e){return this.premultiply(Rc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Rc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Rc=new tt;function nm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function bo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function N_(){let s=bo("canvas");return s.style.display="block",s}var Nf={};function _o(s){s in Nf||(Nf[s]=!0,console.warn(s))}var Uf=new tt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Of=new tt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),la={[Et]:{transfer:Va,primaries:Ga,toReference:s=>s,fromReference:s=>s},[ut]:{transfer:ft,primaries:Ga,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[El]:{transfer:Va,primaries:Wa,toReference:s=>s.applyMatrix3(Of),fromReference:s=>s.applyMatrix3(Uf)},[tu]:{transfer:ft,primaries:Wa,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Of),fromReference:s=>s.applyMatrix3(Uf).convertLinearToSRGB()}},U_=new Set([Et,El]),lt={enabled:!0,_workingColorSpace:Et,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!U_.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let n=la[e].toReference,i=la[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return la[s].primaries},getTransfer:function(s){return s===zn?Va:la[s].transfer}};function Mr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Cc(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var tr,Ya=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{tr===void 0&&(tr=bo("canvas")),tr.width=e.width,tr.height=e.height;let n=tr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=tr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=bo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Mr(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Mr(t[n]/255)*255):t[n]=Mr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},O_=0,Za=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:O_++}),this.uuid=Hn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Pc(i[o].image)):r.push(Pc(i[o]))}else r=Pc(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Pc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ya.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var F_=0,on=class s extends es{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=In,i=In,r=Kt,o=Qi,a=xn,l=$i,c=s.DEFAULT_ANISOTROPY,h=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:F_++}),this.uuid=Hn(),this.name="",this.source=new Za(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(_o("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ls?ut:zn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pi:e.x=e.x-Math.floor(e.x);break;case In:e.x=e.x<0?0:1;break;case So:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pi:e.y=e.y-Math.floor(e.y);break;case In:e.y=e.y<0?0:1;break;case So:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return _o("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ut?Ls:Qp}set encoding(e){_o("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ls?ut:zn}};on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Wp;on.DEFAULT_ANISOTROPY=1;var ct=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,y=(f+1)/2,b=(m+1)/2,S=(h+d)/4,T=(u+g)/4,C=(_+p)/4;return v>y&&v>b?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=S/n,r=T/n):y>b?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=S/i,r=C/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=T/r,i=C/r),this.set(n,i,r,t),this}let x=Math.sqrt((p-_)*(p-_)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(p-_)/x,this.y=(u-g)/x,this.z=(d-h)/x,this.w=Math.acos((c+f+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},hh=class extends es{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);let i={width:e,height:t,depth:1};n.encoding!==void 0&&(_o("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ls?ut:zn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new on(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Za(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vt=class extends hh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ka=class extends on{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var uh=class extends on{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ii=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],f=r[o+1],_=r[o+2],g=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=_,e[t+3]=g;return}if(u!==g||l!==d||c!==f||h!==_){let p=1-a,m=l*d+c*f+h*_+u*g,x=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){let b=Math.sqrt(v),S=Math.atan2(b,m*x);p=Math.sin(p*S)/b,a=Math.sin(a*S)/b}let y=a*x;if(l=l*p+d*y,c=c*p+f*y,h=h*p+_*y,u=u*p+g*y,p===1-a){let b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],_=r[o+3];return e[t]=a*_+h*u+l*f-c*d,e[t+1]=l*_+h*d+c*u-a*f,e[t+2]=c*_+h*f+a*d-l*u,e[t+3]=h*_-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),_=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"YZX":this._x=d*h*u+c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u-d*f*_;break;case"XZY":this._x=d*h*u-c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ff.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ff.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Lc.copy(this).projectOnVector(e),this.sub(Lc)}reflect(e){return this.sub(Lc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Lc=new R,Ff=new ii,Vn=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,jn):jn.fromBufferAttribute(r,o),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ca.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ca.copy(n.boundingBox)),ca.applyMatrix4(e.matrixWorld),this.union(ca)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oo),ha.subVectors(this.max,oo),nr.subVectors(e.a,oo),ir.subVectors(e.b,oo),sr.subVectors(e.c,oo),Gi.subVectors(ir,nr),Wi.subVectors(sr,ir),Ss.subVectors(nr,sr);let t=[0,-Gi.z,Gi.y,0,-Wi.z,Wi.y,0,-Ss.z,Ss.y,Gi.z,0,-Gi.x,Wi.z,0,-Wi.x,Ss.z,0,-Ss.x,-Gi.y,Gi.x,0,-Wi.y,Wi.x,0,-Ss.y,Ss.x,0];return!Ic(t,nr,ir,sr,ha)||(t=[1,0,0,0,1,0,0,0,1],!Ic(t,nr,ir,sr,ha))?!1:(ua.crossVectors(Gi,Wi),t=[ua.x,ua.y,ua.z],Ic(t,nr,ir,sr,ha))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Si=[new R,new R,new R,new R,new R,new R,new R,new R],jn=new R,ca=new Vn,nr=new R,ir=new R,sr=new R,Gi=new R,Wi=new R,Ss=new R,oo=new R,ha=new R,ua=new R,bs=new R;function Ic(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){bs.fromArray(s,r);let a=i.x*Math.abs(bs.x)+i.y*Math.abs(bs.y)+i.z*Math.abs(bs.z),l=e.dot(bs),c=t.dot(bs),h=n.dot(bs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var B_=new Vn,ao=new R,Dc=new R,Jt=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):B_.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ao.subVectors(e,this.center);let t=ao.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ao,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ao.copy(e.center).add(Dc)),this.expandByPoint(ao.copy(e.center).sub(Dc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},bi=new R,Nc=new R,da=new R,Xi=new R,Uc=new R,fa=new R,Oc=new R,Li=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,t),bi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Nc.copy(e).add(t).multiplyScalar(.5),da.copy(t).sub(e).normalize(),Xi.copy(this.origin).sub(Nc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(da),a=Xi.dot(this.direction),l=-Xi.dot(da),c=Xi.lengthSq(),h=Math.abs(1-o*o),u,d,f,_;if(h>0)if(u=o*l-a,d=o*a-l,_=r*h,u>=0)if(d>=-_)if(d<=_){let g=1/h;u*=g,d*=g,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Nc).addScaledVector(da,d),f}intersectSphere(e,t){bi.subVectors(e.center,this.origin);let n=bi.dot(this.direction),i=bi.dot(bi)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,t,n,i,r){Uc.subVectors(t,e),fa.subVectors(n,e),Oc.crossVectors(Uc,fa);let o=this.direction.dot(Oc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xi.subVectors(this.origin,e);let l=a*this.direction.dot(fa.crossVectors(Xi,fa));if(l<0)return null;let c=a*this.direction.dot(Uc.cross(Xi));if(c<0||l+c>o)return null;let h=-a*Xi.dot(Oc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ye=class s{constructor(e,t,n,i,r,o,a,l,c,h,u,d,f,_,g,p){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,u,d,f,_,g,p)}set(e,t,n,i,r,o,a,l,c,h,u,d,f,_,g,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/rr.setFromMatrixColumn(e,0).length(),r=1/rr.setFromMatrixColumn(e,1).length(),o=1/rr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,_=a*h,g=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+_*c,t[5]=d-g*c,t[9]=-a*l,t[2]=g-d*c,t[6]=_+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,_=c*h,g=c*u;t[0]=d+g*a,t[4]=_*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-_,t[6]=g+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,_=c*h,g=c*u;t[0]=d-g*a,t[4]=-o*u,t[8]=_+f*a,t[1]=f+_*a,t[5]=o*h,t[9]=g-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,_=a*h,g=a*u;t[0]=l*h,t[4]=_*c-f,t[8]=d*c+g,t[1]=l*u,t[5]=g*c+d,t[9]=f*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,_=a*l,g=a*c;t[0]=l*h,t[4]=g-d*u,t[8]=_*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+_,t[10]=d-g*u}else if(e.order==="XZY"){let d=o*l,f=o*c,_=a*l,g=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+g,t[5]=o*h,t[9]=f*u-_,t[2]=_*u-f,t[6]=a*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(z_,e,H_)}lookAt(e,t,n){let i=this.elements;return Pn.subVectors(e,t),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),qi.crossVectors(n,Pn),qi.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),qi.crossVectors(n,Pn)),qi.normalize(),pa.crossVectors(Pn,qi),i[0]=qi.x,i[4]=pa.x,i[8]=Pn.x,i[1]=qi.y,i[5]=pa.y,i[9]=Pn.y,i[2]=qi.z,i[6]=pa.z,i[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],_=n[2],g=n[6],p=n[10],m=n[14],x=n[3],v=n[7],y=n[11],b=n[15],S=i[0],T=i[4],C=i[8],M=i[12],E=i[1],D=i[5],O=i[9],H=i[13],I=i[2],U=i[6],F=i[10],Y=i[14],J=i[3],X=i[7],le=i[11],ce=i[15];return r[0]=o*S+a*E+l*I+c*J,r[4]=o*T+a*D+l*U+c*X,r[8]=o*C+a*O+l*F+c*le,r[12]=o*M+a*H+l*Y+c*ce,r[1]=h*S+u*E+d*I+f*J,r[5]=h*T+u*D+d*U+f*X,r[9]=h*C+u*O+d*F+f*le,r[13]=h*M+u*H+d*Y+f*ce,r[2]=_*S+g*E+p*I+m*J,r[6]=_*T+g*D+p*U+m*X,r[10]=_*C+g*O+p*F+m*le,r[14]=_*M+g*H+p*Y+m*ce,r[3]=x*S+v*E+y*I+b*J,r[7]=x*T+v*D+y*U+b*X,r[11]=x*C+v*O+y*F+b*le,r[15]=x*M+v*H+y*Y+b*ce,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],_=e[3],g=e[7],p=e[11],m=e[15];return _*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*f-n*l*f)+g*(+t*l*f-t*c*d+r*o*d-i*o*f+i*c*h-r*l*h)+p*(+t*c*u-t*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+m*(-i*a*h-t*l*u+t*a*d+i*o*u-n*o*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],_=e[12],g=e[13],p=e[14],m=e[15],x=u*p*c-g*d*c+g*l*f-a*p*f-u*l*m+a*d*m,v=_*d*c-h*p*c-_*l*f+o*p*f+h*l*m-o*d*m,y=h*g*c-_*u*c+_*a*f-o*g*f-h*a*m+o*u*m,b=_*u*l-h*g*l-_*a*d+o*g*d+h*a*p-o*u*p,S=t*x+n*v+i*y+r*b;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/S;return e[0]=x*T,e[1]=(g*d*r-u*p*r-g*i*f+n*p*f+u*i*m-n*d*m)*T,e[2]=(a*p*r-g*l*r+g*i*c-n*p*c-a*i*m+n*l*m)*T,e[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*f-n*l*f)*T,e[4]=v*T,e[5]=(h*p*r-_*d*r+_*i*f-t*p*f-h*i*m+t*d*m)*T,e[6]=(_*l*r-o*p*r-_*i*c+t*p*c+o*i*m-t*l*m)*T,e[7]=(o*d*r-h*l*r+h*i*c-t*d*c-o*i*f+t*l*f)*T,e[8]=y*T,e[9]=(_*u*r-h*g*r-_*n*f+t*g*f+h*n*m-t*u*m)*T,e[10]=(o*g*r-_*a*r+_*n*c-t*g*c-o*n*m+t*a*m)*T,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*f-t*a*f)*T,e[12]=b*T,e[13]=(h*g*i-_*u*i+_*n*d-t*g*d-h*n*p+t*u*p)*T,e[14]=(_*a*i-o*g*i-_*n*l+t*g*l+o*n*p-t*a*p)*T,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*d+t*a*d)*T,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,_=r*u,g=o*h,p=o*u,m=a*u,x=l*c,v=l*h,y=l*u,b=n.x,S=n.y,T=n.z;return i[0]=(1-(g+m))*b,i[1]=(f+y)*b,i[2]=(_-v)*b,i[3]=0,i[4]=(f-y)*S,i[5]=(1-(d+m))*S,i[6]=(p+x)*S,i[7]=0,i[8]=(_+v)*T,i[9]=(p-x)*T,i[10]=(1-(d+g))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=rr.set(i[0],i[1],i[2]).length(),o=rr.set(i[4],i[5],i[6]).length(),a=rr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Qn.copy(this);let c=1/r,h=1/o,u=1/a;return Qn.elements[0]*=c,Qn.elements[1]*=c,Qn.elements[2]*=c,Qn.elements[4]*=h,Qn.elements[5]*=h,Qn.elements[6]*=h,Qn.elements[8]*=u,Qn.elements[9]*=u,Qn.elements[10]*=u,t.setFromRotationMatrix(Qn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Ci){let l=this.elements,c=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),f,_;if(a===Ci)f=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Xa)f=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Ci){let l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(o-r),d=(t+e)*c,f=(n+i)*h,_,g;if(a===Ci)_=(o+r)*u,g=-2*u;else if(a===Xa)_=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},rr=new R,Qn=new Ye,z_=new R(0,0,0),H_=new R(1,1,1),qi=new R,pa=new R,Pn=new R,Bf=new Ye,zf=new ii,Ja=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Bf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zf.setFromEuler(this),this.setFromQuaternion(zf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ja.DEFAULT_ORDER="XYZ";var Eo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},k_=0,Hf=new R,or=new ii,Ei=new Ye,ma=new R,lo=new R,V_=new R,G_=new ii,kf=new R(1,0,0),Vf=new R(0,1,0),Gf=new R(0,0,1),W_={type:"added"},X_={type:"removed"},ht=class s extends es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:k_++}),this.uuid=Hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new R,t=new Ja,n=new ii,i=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ye},normalMatrix:{value:new tt}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Eo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return or.setFromAxisAngle(e,t),this.quaternion.multiply(or),this}rotateOnWorldAxis(e,t){return or.setFromAxisAngle(e,t),this.quaternion.premultiply(or),this}rotateX(e){return this.rotateOnAxis(kf,e)}rotateY(e){return this.rotateOnAxis(Vf,e)}rotateZ(e){return this.rotateOnAxis(Gf,e)}translateOnAxis(e,t){return Hf.copy(e).applyQuaternion(this.quaternion),this.position.add(Hf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kf,e)}translateY(e){return this.translateOnAxis(Vf,e)}translateZ(e){return this.translateOnAxis(Gf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ma.copy(e):ma.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(lo,ma,this.up):Ei.lookAt(ma,lo,this.up),this.quaternion.setFromRotationMatrix(Ei),i&&(Ei.extractRotation(i.matrixWorld),or.setFromRotationMatrix(Ei),this.quaternion.premultiply(or.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(W_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(X_)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,e,V_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,G_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++){let a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};ht.DEFAULT_UP=new R(0,1,0);ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ei=new R,Ti=new R,Fc=new R,wi=new R,ar=new R,lr=new R,Wf=new R,Bc=new R,zc=new R,Hc=new R,ga=!1,Zi=class s{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ei.subVectors(e,t),i.cross(ei);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){ei.subVectors(i,t),Ti.subVectors(n,t),Fc.subVectors(e,t);let o=ei.dot(ei),a=ei.dot(Ti),l=ei.dot(Fc),c=Ti.dot(Ti),h=Ti.dot(Fc),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,_=(o*h-a*l)*d;return r.set(1-f-_,_,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getUV(e,t,n,i,r,o,a,l){return ga===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ga=!0),this.getInterpolation(e,t,n,i,r,o,a,l)}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wi.x),l.addScaledVector(o,wi.y),l.addScaledVector(a,wi.z),l)}static isFrontFacing(e,t,n,i){return ei.subVectors(n,t),Ti.subVectors(e,t),ei.cross(Ti).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),ei.cross(Ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return ga===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ga=!0),s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;ar.subVectors(i,n),lr.subVectors(r,n),Bc.subVectors(e,n);let l=ar.dot(Bc),c=lr.dot(Bc);if(l<=0&&c<=0)return t.copy(n);zc.subVectors(e,i);let h=ar.dot(zc),u=lr.dot(zc);if(h>=0&&u<=h)return t.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(ar,o);Hc.subVectors(e,r);let f=ar.dot(Hc),_=lr.dot(Hc);if(_>=0&&f<=_)return t.copy(r);let g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(lr,a);let p=h*_-f*u;if(p<=0&&u-h>=0&&f-_>=0)return Wf.subVectors(r,i),a=(u-h)/(u-h+(f-_)),t.copy(i).addScaledVector(Wf,a);let m=1/(p+g+d);return o=g*m,a=d*m,t.copy(n).addScaledVector(ar,o).addScaledVector(lr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},im={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},_a={h:0,s:0,l:0};function kc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ue=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=lt.workingColorSpace){if(e=nu(e,1),t=kt(t,0,1),n=kt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=kc(o,r,e+1/3),this.g=kc(o,r,e),this.b=kc(o,r,e-1/3)}return lt.toWorkingColorSpace(this,i),this}setStyle(e,t=ut){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ut){let n=im[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}copyLinearToSRGB(e){return this.r=Cc(e.r),this.g=Cc(e.g),this.b=Cc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ut){return lt.fromWorkingColorSpace(rn.copy(this),e),Math.round(kt(rn.r*255,0,255))*65536+Math.round(kt(rn.g*255,0,255))*256+Math.round(kt(rn.b*255,0,255))}getHexString(e=ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.fromWorkingColorSpace(rn.copy(this),t);let n=rn.r,i=rn.g,r=rn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=lt.workingColorSpace){return lt.fromWorkingColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=ut){lt.fromWorkingColorSpace(rn.copy(this),e);let t=rn.r,n=rn.g,i=rn.b;return e!==ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Yi),this.setHSL(Yi.h+e,Yi.s+t,Yi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yi),e.getHSL(_a);let n=go(Yi.h,_a.h,t),i=go(Yi.s,_a.s,t),r=go(Yi.l,_a.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new Ue;Ue.NAMES=im;var q_=0,Dn=class extends es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:q_++}),this.uuid=Hn(),this.name="",this.type="Material",this.blending=yr,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sh,this.blendDst=rh,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Ha,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=er,this.stencilZFail=er,this.stencilZPass=er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==yr&&(n.blending=this.blending),this.side!==kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==sh&&(n.blendSrc=this.blendSrc),this.blendDst!==rh&&(n.blendDst=this.blendDst),this.blendEquation!==As&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ha&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==er&&(n.stencilFail=this.stencilFail),this.stencilZFail!==er&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==er&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Gt=class extends Dn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Gp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ut=new R,va=new re,$e=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ah,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)va.fromBufferAttribute(this,t),va.applyMatrix3(e),this.setXY(t,va.x,va.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ai(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array),r=dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ah&&(e.usage=this.usage),e}};var $a=class extends $e{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ja=class extends $e{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ve=class extends $e{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Y_=0,Bn=new Ye,Vc=new ht,cr=new R,Ln=new Vn,co=new Vn,Zt=new R,st=class s extends es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Y_++}),this.uuid=Hn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nm(e)?ja:$a)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,t,n){return Bn.makeTranslation(e,t,n),this.applyMatrix4(Bn),this}scale(e,t,n){return Bn.makeScale(e,t,n),this.applyMatrix4(Bn),this}lookAt(e){return Vc.lookAt(e),Vc.updateMatrix(),this.applyMatrix4(Vc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cr).negate(),this.translate(cr.x,cr.y,cr.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ve(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){let n=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];co.setFromBufferAttribute(a),this.morphTargetsRelative?(Zt.addVectors(Ln.min,co.min),Ln.expandByPoint(Zt),Zt.addVectors(Ln.max,co.max),Ln.expandByPoint(Zt)):(Ln.expandByPoint(co.min),Ln.expandByPoint(co.max))}Ln.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Zt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Zt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Zt.fromBufferAttribute(a,c),l&&(cr.fromBufferAttribute(e,c),Zt.add(cr)),i=Math.max(i,n.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $e(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let E=0;E<a;E++)c[E]=new R,h[E]=new R;let u=new R,d=new R,f=new R,_=new re,g=new re,p=new re,m=new R,x=new R;function v(E,D,O){u.fromArray(i,E*3),d.fromArray(i,D*3),f.fromArray(i,O*3),_.fromArray(o,E*2),g.fromArray(o,D*2),p.fromArray(o,O*2),d.sub(u),f.sub(u),g.sub(_),p.sub(_);let H=1/(g.x*p.y-p.x*g.y);isFinite(H)&&(m.copy(d).multiplyScalar(p.y).addScaledVector(f,-g.y).multiplyScalar(H),x.copy(f).multiplyScalar(g.x).addScaledVector(d,-p.x).multiplyScalar(H),c[E].add(m),c[D].add(m),c[O].add(m),h[E].add(x),h[D].add(x),h[O].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let E=0,D=y.length;E<D;++E){let O=y[E],H=O.start,I=O.count;for(let U=H,F=H+I;U<F;U+=3)v(n[U+0],n[U+1],n[U+2])}let b=new R,S=new R,T=new R,C=new R;function M(E){T.fromArray(r,E*3),C.copy(T);let D=c[E];b.copy(D),b.sub(T.multiplyScalar(T.dot(D))).normalize(),S.crossVectors(C,D);let H=S.dot(h[E])<0?-1:1;l[E*4]=b.x,l[E*4+1]=b.y,l[E*4+2]=b.z,l[E*4+3]=H}for(let E=0,D=y.length;E<D;++E){let O=y[E],H=O.start,I=O.count;for(let U=H,F=H+I;U<F;U+=3)M(n[U+0]),M(n[U+1]),M(n[U+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $e(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new R,r=new R,o=new R,a=new R,l=new R,c=new R,h=new R,u=new R;if(e)for(let d=0,f=e.count;d<f;d+=3){let _=e.getX(d+0),g=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,_=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*h;for(let m=0;m<h;m++)d[_++]=c[f++]}return new $e(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xf=new Ye,Es=new Li,xa=new Jt,qf=new R,hr=new R,ur=new R,dr=new R,Gc=new R,ya=new R,Ma=new re,Sa=new re,ba=new re,Yf=new R,Zf=new R,Kf=new R,Ea=new R,Ta=new R,Oe=class extends ht{constructor(e=new st,t=new Gt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){ya.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Gc.fromBufferAttribute(u,e),o?ya.addScaledVector(Gc,h):ya.addScaledVector(Gc.sub(t),h))}t.add(ya)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xa.copy(n.boundingSphere),xa.applyMatrix4(r),Es.copy(e.ray).recast(e.near),!(xa.containsPoint(Es.origin)===!1&&(Es.intersectSphere(xa,qf)===null||Es.origin.distanceToSquared(qf)>(e.far-e.near)**2))&&(Xf.copy(r).invert(),Es.copy(e.ray).applyMatrix4(Xf),!(n.boundingBox!==null&&Es.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Es)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){let p=d[_],m=o[p.materialIndex],x=Math.max(p.start,f.start),v=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let y=x,b=v;y<b;y+=3){let S=a.getX(y),T=a.getX(y+1),C=a.getX(y+2);i=wa(this,m,e,n,c,h,u,S,T,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let _=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let p=_,m=g;p<m;p+=3){let x=a.getX(p),v=a.getX(p+1),y=a.getX(p+2);i=wa(this,o,e,n,c,h,u,x,v,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){let p=d[_],m=o[p.materialIndex],x=Math.max(p.start,f.start),v=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=x,b=v;y<b;y+=3){let S=y,T=y+1,C=y+2;i=wa(this,m,e,n,c,h,u,S,T,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let p=_,m=g;p<m;p+=3){let x=p,v=p+1,y=p+2;i=wa(this,o,e,n,c,h,u,x,v,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}};function Z_(s,e,t,n,i,r,o,a){let l;if(e.side===Ft?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===kn,a),l===null)return null;Ta.copy(a),Ta.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Ta);return c<t.near||c>t.far?null:{distance:c,point:Ta.clone(),object:s}}function wa(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,hr),s.getVertexPosition(l,ur),s.getVertexPosition(c,dr);let h=Z_(s,e,t,n,hr,ur,dr,Ea);if(h){i&&(Ma.fromBufferAttribute(i,a),Sa.fromBufferAttribute(i,l),ba.fromBufferAttribute(i,c),h.uv=Zi.getInterpolation(Ea,hr,ur,dr,Ma,Sa,ba,new re)),r&&(Ma.fromBufferAttribute(r,a),Sa.fromBufferAttribute(r,l),ba.fromBufferAttribute(r,c),h.uv1=Zi.getInterpolation(Ea,hr,ur,dr,Ma,Sa,ba,new re),h.uv2=h.uv1),o&&(Yf.fromBufferAttribute(o,a),Zf.fromBufferAttribute(o,l),Kf.fromBufferAttribute(o,c),h.normal=Zi.getInterpolation(Ea,hr,ur,dr,Yf,Zf,Kf,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new R,materialIndex:0};Zi.getNormal(hr,ur,dr,u.normal),h.face=u}return h}var jt=class s extends st{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ve(c,3)),this.setAttribute("normal",new Ve(h,3)),this.setAttribute("uv",new Ve(u,2));function _(g,p,m,x,v,y,b,S,T,C,M){let E=y/T,D=b/C,O=y/2,H=b/2,I=S/2,U=T+1,F=C+1,Y=0,J=0,X=new R;for(let le=0;le<F;le++){let ce=le*D-H;for(let he=0;he<U;he++){let K=he*E-O;X[g]=K*x,X[p]=ce*v,X[m]=I,c.push(X.x,X.y,X.z),X[g]=0,X[p]=0,X[m]=S>0?1:-1,h.push(X.x,X.y,X.z),u.push(he/T),u.push(1-le/C),Y+=1}}for(let le=0;le<C;le++)for(let ce=0;ce<T;ce++){let he=d+ce+U*le,K=d+ce+U*(le+1),oe=d+(ce+1)+U*(le+1),Se=d+(ce+1)+U*le;l.push(he,K,Se),l.push(K,oe,Se),J+=6}a.addGroup(f,J,M),f+=J,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Rr(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function dn(s){let e={};for(let t=0;t<s.length;t++){let n=Rr(s[t]);for(let i in n)e[i]=n[i]}return e}function K_(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function sm(s){return s.getRenderTarget()===null?s.outputColorSpace:lt.workingColorSpace}var Xn={clone:Rr,merge:dn},J_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,nt=class extends Dn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=J_,this.fragmentShader=$_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rr(e.uniforms),this.uniformsGroups=K_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Qa=class extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=Ci}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Dt=class extends Qa{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ar*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(mo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ar*2*Math.atan(Math.tan(mo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(mo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},fr=-90,pr=1,dh=class extends ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Dt(fr,pr,e,t);i.layers=this.layers,this.add(i);let r=new Dt(fr,pr,e,t);r.layers=this.layers,this.add(r);let o=new Dt(fr,pr,e,t);o.layers=this.layers,this.add(o);let a=new Dt(fr,pr,e,t);a.layers=this.layers,this.add(a);let l=new Dt(fr,pr,e,t);l.layers=this.layers,this.add(l);let c=new Dt(fr,pr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Ci)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},el=class extends on{constructor(e,t,n,i,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:br,super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},fh=class extends Vt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(_o("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ls?ut:zn),this.texture=new el(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new jt(5,5,5),r=new nt({name:"CubemapFromEquirect",uniforms:Rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ft,blending:ci});r.uniforms.tEquirect.value=t;let o=new Oe(i,r),a=t.minFilter;return t.minFilter===Qi&&(t.minFilter=Kt),new dh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},Wc=new R,j_=new R,Q_=new tt,ti=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Wc.subVectors(n,t).cross(j_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Wc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Q_.getNormalMatrix(e),i=this.coplanarPoint(Wc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ts=new Jt,Aa=new R,To=class{constructor(e=new ti,t=new ti,n=new ti,i=new ti,r=new ti,o=new ti){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ci){let n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],_=i[9],g=i[10],p=i[11],m=i[12],x=i[13],v=i[14],y=i[15];if(n[0].setComponents(l-r,d-c,p-f,y-m).normalize(),n[1].setComponents(l+r,d+c,p+f,y+m).normalize(),n[2].setComponents(l+o,d+h,p+_,y+x).normalize(),n[3].setComponents(l-o,d-h,p-_,y-x).normalize(),n[4].setComponents(l-a,d-u,p-g,y-v).normalize(),t===Ci)n[5].setComponents(l+a,d+u,p+g,y+v).normalize();else if(t===Xa)n[5].setComponents(a,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ts)}intersectsSprite(e){return Ts.center.set(0,0,0),Ts.radius=.7071067811865476,Ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ts)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Aa.x=i.normal.x>0?e.max.x:e.min.x,Aa.y=i.normal.y>0?e.max.y:e.min.y,Aa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Aa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function rm(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function ev(s,e){let t=e.isWebGL2,n=new WeakMap;function i(c,h){let u=c.array,d=c.usage,f=u.byteLength,_=s.createBuffer();s.bindBuffer(h,_),s.bufferData(h,u,d),c.onUploadCallback();let g;if(u instanceof Float32Array)g=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=s.SHORT;else if(u instanceof Uint32Array)g=s.UNSIGNED_INT;else if(u instanceof Int32Array)g=s.INT;else if(u instanceof Int8Array)g=s.BYTE;else if(u instanceof Uint8Array)g=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:_,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,h,u){let d=h.array,f=h._updateRange,_=h.updateRanges;if(s.bindBuffer(u,c),f.count===-1&&_.length===0&&s.bufferSubData(u,0,d),_.length!==0){for(let g=0,p=_.length;g<p;g++){let m=_[g];t?s.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):s.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}f.count!==-1&&(t?s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}var Ds=class s extends st{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,f=[],_=[],g=[],p=[];for(let m=0;m<h;m++){let x=m*d-o;for(let v=0;v<c;v++){let y=v*u-r;_.push(y,-x,0),g.push(0,0,1),p.push(v/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<a;x++){let v=x+c*m,y=x+c*(m+1),b=x+1+c*(m+1),S=x+1+c*m;f.push(v,y,S),f.push(y,b,S)}this.setIndex(f),this.setAttribute("position",new Ve(_,3)),this.setAttribute("normal",new Ve(g,3)),this.setAttribute("uv",new Ve(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},tv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nv=`#ifdef USE_ALPHAHASH
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
#endif`,iv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rv=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ov=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,av=`#ifdef USE_AOMAP
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
#endif`,lv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cv=`#ifdef USE_BATCHING
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
#endif`,hv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,uv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pv=`#ifdef USE_IRIDESCENCE
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
#endif`,mv=`#ifdef USE_BUMPMAP
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
#endif`,gv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_v=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,bv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ev=`#define PI 3.141592653589793
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
} // validated`,Tv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wv=`vec3 transformedNormal = objectNormal;
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
#endif`,Av=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Iv=`
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
}`,Dv=`#ifdef USE_ENVMAP
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
#endif`,Nv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Uv=`#ifdef USE_ENVMAP
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
#endif`,Ov=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fv=`#ifdef USE_ENVMAP
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
#endif`,Bv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vv=`#ifdef USE_GRADIENTMAP
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
}`,Gv=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Wv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yv=`uniform bool receiveShadow;
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
#endif`,Zv=`#ifdef USE_ENVMAP
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
#endif`,Kv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$v=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qv=`PhysicalMaterial material;
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
#endif`,ex=`struct PhysicalMaterial {
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
}`,tx=`
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
#endif`,nx=`#if defined( RE_IndirectDiffuse )
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
#endif`,ix=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ox=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ax=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,lx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ux=`#if defined( USE_POINTS_UV )
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
#endif`,dx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,px=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mx=`#ifdef USE_MORPHNORMALS
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
#endif`,gx=`#ifdef USE_MORPHTARGETS
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
#endif`,_x=`#ifdef USE_MORPHTARGETS
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
#endif`,vx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bx=`#ifdef USE_NORMALMAP
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
#endif`,Ex=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ax=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Px=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ix=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ux=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ox=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zx=`float getShadowMask() {
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
}`,Hx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kx=`#ifdef USE_SKINNING
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
#endif`,Vx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gx=`#ifdef USE_SKINNING
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
#endif`,Wx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zx=`#ifdef USE_TRANSMISSION
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
#endif`,Kx=`#ifdef USE_TRANSMISSION
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
#endif`,Jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$x=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ey=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ty=`uniform sampler2D t2D;
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
}`,ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ry=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oy=`#include <common>
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
}`,ay=`#if DEPTH_PACKING == 3200
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
}`,ly=`#define DISTANCE
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
}`,cy=`#define DISTANCE
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
}`,hy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dy=`uniform float scale;
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
}`,fy=`uniform vec3 diffuse;
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
}`,py=`#include <common>
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
}`,my=`uniform vec3 diffuse;
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
}`,gy=`#define LAMBERT
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
}`,_y=`#define LAMBERT
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
}`,vy=`#define MATCAP
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
}`,xy=`#define MATCAP
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
}`,yy=`#define NORMAL
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
}`,My=`#define NORMAL
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
}`,Sy=`#define PHONG
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
}`,by=`#define PHONG
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
}`,Ey=`#define STANDARD
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
}`,Ty=`#define STANDARD
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
}`,wy=`#define TOON
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
}`,Ay=`#define TOON
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
}`,Ry=`uniform float size;
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
}`,Cy=`uniform vec3 diffuse;
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
}`,Py=`#include <common>
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
}`,Ly=`uniform vec3 color;
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
}`,Iy=`uniform float rotation;
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
}`,Dy=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:tv,alphahash_pars_fragment:nv,alphamap_fragment:iv,alphamap_pars_fragment:sv,alphatest_fragment:rv,alphatest_pars_fragment:ov,aomap_fragment:av,aomap_pars_fragment:lv,batching_pars_vertex:cv,batching_vertex:hv,begin_vertex:uv,beginnormal_vertex:dv,bsdfs:fv,iridescence_fragment:pv,bumpmap_pars_fragment:mv,clipping_planes_fragment:gv,clipping_planes_pars_fragment:_v,clipping_planes_pars_vertex:vv,clipping_planes_vertex:xv,color_fragment:yv,color_pars_fragment:Mv,color_pars_vertex:Sv,color_vertex:bv,common:Ev,cube_uv_reflection_fragment:Tv,defaultnormal_vertex:wv,displacementmap_pars_vertex:Av,displacementmap_vertex:Rv,emissivemap_fragment:Cv,emissivemap_pars_fragment:Pv,colorspace_fragment:Lv,colorspace_pars_fragment:Iv,envmap_fragment:Dv,envmap_common_pars_fragment:Nv,envmap_pars_fragment:Uv,envmap_pars_vertex:Ov,envmap_physical_pars_fragment:Zv,envmap_vertex:Fv,fog_vertex:Bv,fog_pars_vertex:zv,fog_fragment:Hv,fog_pars_fragment:kv,gradientmap_pars_fragment:Vv,lightmap_fragment:Gv,lightmap_pars_fragment:Wv,lights_lambert_fragment:Xv,lights_lambert_pars_fragment:qv,lights_pars_begin:Yv,lights_toon_fragment:Kv,lights_toon_pars_fragment:Jv,lights_phong_fragment:$v,lights_phong_pars_fragment:jv,lights_physical_fragment:Qv,lights_physical_pars_fragment:ex,lights_fragment_begin:tx,lights_fragment_maps:nx,lights_fragment_end:ix,logdepthbuf_fragment:sx,logdepthbuf_pars_fragment:rx,logdepthbuf_pars_vertex:ox,logdepthbuf_vertex:ax,map_fragment:lx,map_pars_fragment:cx,map_particle_fragment:hx,map_particle_pars_fragment:ux,metalnessmap_fragment:dx,metalnessmap_pars_fragment:fx,morphcolor_vertex:px,morphnormal_vertex:mx,morphtarget_pars_vertex:gx,morphtarget_vertex:_x,normal_fragment_begin:vx,normal_fragment_maps:xx,normal_pars_fragment:yx,normal_pars_vertex:Mx,normal_vertex:Sx,normalmap_pars_fragment:bx,clearcoat_normal_fragment_begin:Ex,clearcoat_normal_fragment_maps:Tx,clearcoat_pars_fragment:wx,iridescence_pars_fragment:Ax,opaque_fragment:Rx,packing:Cx,premultiplied_alpha_fragment:Px,project_vertex:Lx,dithering_fragment:Ix,dithering_pars_fragment:Dx,roughnessmap_fragment:Nx,roughnessmap_pars_fragment:Ux,shadowmap_pars_fragment:Ox,shadowmap_pars_vertex:Fx,shadowmap_vertex:Bx,shadowmask_pars_fragment:zx,skinbase_vertex:Hx,skinning_pars_vertex:kx,skinning_vertex:Vx,skinnormal_vertex:Gx,specularmap_fragment:Wx,specularmap_pars_fragment:Xx,tonemapping_fragment:qx,tonemapping_pars_fragment:Yx,transmission_fragment:Zx,transmission_pars_fragment:Kx,uv_pars_fragment:Jx,uv_pars_vertex:$x,uv_vertex:jx,worldpos_vertex:Qx,background_vert:ey,background_frag:ty,backgroundCube_vert:ny,backgroundCube_frag:iy,cube_vert:sy,cube_frag:ry,depth_vert:oy,depth_frag:ay,distanceRGBA_vert:ly,distanceRGBA_frag:cy,equirect_vert:hy,equirect_frag:uy,linedashed_vert:dy,linedashed_frag:fy,meshbasic_vert:py,meshbasic_frag:my,meshlambert_vert:gy,meshlambert_frag:_y,meshmatcap_vert:vy,meshmatcap_frag:xy,meshnormal_vert:yy,meshnormal_frag:My,meshphong_vert:Sy,meshphong_frag:by,meshphysical_vert:Ey,meshphysical_frag:Ty,meshtoon_vert:wy,meshtoon_frag:Ay,points_vert:Ry,points_frag:Cy,shadow_vert:Py,shadow_frag:Ly,sprite_vert:Iy,sprite_frag:Dy},Pe={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},oi={basic:{uniforms:dn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:dn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Ue(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:dn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:dn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:dn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Ue(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:dn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:dn([Pe.points,Pe.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:dn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:dn([Pe.common,Pe.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:dn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:dn([Pe.sprite,Pe.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:dn([Pe.common,Pe.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:dn([Pe.lights,Pe.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};oi.physical={uniforms:dn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};var Ra={r:0,b:0,g:0};function Ny(s,e,t,n,i,r,o){let a=new Ue(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function _(p,m){let x=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v===null?g(a,l):v&&v.isColor&&(g(v,1),x=!0);let y=s.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Sl)?(h===void 0&&(h=new Oe(new jt(1,1,1),new nt({name:"BackgroundCubeMaterial",uniforms:Rr(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,S,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=lt.getTransfer(v.colorSpace)!==ft,(u!==v||d!==v.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=s.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Oe(new Ds(2,2),new nt({name:"BackgroundMaterial",uniforms:Rr(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=lt.getTransfer(v.colorSpace)!==ft,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,f=s.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,m){p.getRGB(Ra,sm(s)),n.buffers.color.setClear(Ra.r,Ra.g,Ra.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,g(a,l)},render:_}}function Uy(s,e,t,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=p(null),c=l,h=!1;function u(I,U,F,Y,J){let X=!1;if(o){let le=g(Y,F,U);c!==le&&(c=le,f(c.object)),X=m(I,Y,F,J),X&&x(I,Y,F,J)}else{let le=U.wireframe===!0;(c.geometry!==Y.id||c.program!==F.id||c.wireframe!==le)&&(c.geometry=Y.id,c.program=F.id,c.wireframe=le,X=!0)}J!==null&&t.update(J,s.ELEMENT_ARRAY_BUFFER),(X||h)&&(h=!1,C(I,U,F,Y),J!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(I){return n.isWebGL2?s.bindVertexArray(I):r.bindVertexArrayOES(I)}function _(I){return n.isWebGL2?s.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function g(I,U,F){let Y=F.wireframe===!0,J=a[I.id];J===void 0&&(J={},a[I.id]=J);let X=J[U.id];X===void 0&&(X={},J[U.id]=X);let le=X[Y];return le===void 0&&(le=p(d()),X[Y]=le),le}function p(I){let U=[],F=[],Y=[];for(let J=0;J<i;J++)U[J]=0,F[J]=0,Y[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:F,attributeDivisors:Y,object:I,attributes:{},index:null}}function m(I,U,F,Y){let J=c.attributes,X=U.attributes,le=0,ce=F.getAttributes();for(let he in ce)if(ce[he].location>=0){let oe=J[he],Se=X[he];if(Se===void 0&&(he==="instanceMatrix"&&I.instanceMatrix&&(Se=I.instanceMatrix),he==="instanceColor"&&I.instanceColor&&(Se=I.instanceColor)),oe===void 0||oe.attribute!==Se||Se&&oe.data!==Se.data)return!0;le++}return c.attributesNum!==le||c.index!==Y}function x(I,U,F,Y){let J={},X=U.attributes,le=0,ce=F.getAttributes();for(let he in ce)if(ce[he].location>=0){let oe=X[he];oe===void 0&&(he==="instanceMatrix"&&I.instanceMatrix&&(oe=I.instanceMatrix),he==="instanceColor"&&I.instanceColor&&(oe=I.instanceColor));let Se={};Se.attribute=oe,oe&&oe.data&&(Se.data=oe.data),J[he]=Se,le++}c.attributes=J,c.attributesNum=le,c.index=Y}function v(){let I=c.newAttributes;for(let U=0,F=I.length;U<F;U++)I[U]=0}function y(I){b(I,0)}function b(I,U){let F=c.newAttributes,Y=c.enabledAttributes,J=c.attributeDivisors;F[I]=1,Y[I]===0&&(s.enableVertexAttribArray(I),Y[I]=1),J[I]!==U&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,U),J[I]=U)}function S(){let I=c.newAttributes,U=c.enabledAttributes;for(let F=0,Y=U.length;F<Y;F++)U[F]!==I[F]&&(s.disableVertexAttribArray(F),U[F]=0)}function T(I,U,F,Y,J,X,le){le===!0?s.vertexAttribIPointer(I,U,F,J,X):s.vertexAttribPointer(I,U,F,Y,J,X)}function C(I,U,F,Y){if(n.isWebGL2===!1&&(I.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let J=Y.attributes,X=F.getAttributes(),le=U.defaultAttributeValues;for(let ce in X){let he=X[ce];if(he.location>=0){let K=J[ce];if(K===void 0&&(ce==="instanceMatrix"&&I.instanceMatrix&&(K=I.instanceMatrix),ce==="instanceColor"&&I.instanceColor&&(K=I.instanceColor)),K!==void 0){let oe=K.normalized,Se=K.itemSize,Ae=t.get(K);if(Ae===void 0)continue;let Le=Ae.buffer,Z=Ae.type,k=Ae.bytesPerElement,ne=n.isWebGL2===!0&&(Z===s.INT||Z===s.UNSIGNED_INT||K.gpuType===Xp);if(K.isInterleavedBufferAttribute){let _e=K.data,L=_e.stride,j=K.offset;if(_e.isInstancedInterleavedBuffer){for(let q=0;q<he.locationSize;q++)b(he.location+q,_e.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let q=0;q<he.locationSize;q++)y(he.location+q);s.bindBuffer(s.ARRAY_BUFFER,Le);for(let q=0;q<he.locationSize;q++)T(he.location+q,Se/he.locationSize,Z,oe,L*k,(j+Se/he.locationSize*q)*k,ne)}else{if(K.isInstancedBufferAttribute){for(let _e=0;_e<he.locationSize;_e++)b(he.location+_e,K.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let _e=0;_e<he.locationSize;_e++)y(he.location+_e);s.bindBuffer(s.ARRAY_BUFFER,Le);for(let _e=0;_e<he.locationSize;_e++)T(he.location+_e,Se/he.locationSize,Z,oe,Se*k,Se/he.locationSize*_e*k,ne)}}else if(le!==void 0){let oe=le[ce];if(oe!==void 0)switch(oe.length){case 2:s.vertexAttrib2fv(he.location,oe);break;case 3:s.vertexAttrib3fv(he.location,oe);break;case 4:s.vertexAttrib4fv(he.location,oe);break;default:s.vertexAttrib1fv(he.location,oe)}}}}S()}function M(){O();for(let I in a){let U=a[I];for(let F in U){let Y=U[F];for(let J in Y)_(Y[J].object),delete Y[J];delete U[F]}delete a[I]}}function E(I){if(a[I.id]===void 0)return;let U=a[I.id];for(let F in U){let Y=U[F];for(let J in Y)_(Y[J].object),delete Y[J];delete U[F]}delete a[I.id]}function D(I){for(let U in a){let F=a[U];if(F[I.id]===void 0)continue;let Y=F[I.id];for(let J in Y)_(Y[J].object),delete Y[J];delete F[I.id]}}function O(){H(),h=!0,c!==l&&(c=l,f(c.object))}function H(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:O,resetDefaultState:H,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfProgram:D,initAttributes:v,enableAttribute:y,disableUnusedAttributes:S}}function Oy(s,e,t,n){let i=n.isWebGL2,r;function o(h){r=h}function a(h,u){s.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,d){if(d===0)return;let f,_;if(i)f=s,_="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[_](r,h,u,d),t.update(u,r,d)}function c(h,u,d){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<d;_++)this.render(h[_],u[_]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let _=0;for(let g=0;g<d;g++)_+=u[g];t.update(_,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Fy(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),m=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,y=o||e.has("OES_texture_float"),b=v&&y,S=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:b,maxSamples:S}}function By(s){let e=this,t=null,n=0,i=!1,r=!1,o=new ti,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let _=u.clippingPlanes,g=u.clipIntersection,p=u.clipShadows,m=s.get(u);if(!i||_===null||_.length===0||r&&!p)r?h(null):c();else{let x=r?0:n,v=x*4,y=m.clippingState||null;l.value=y,y=h(_,d,v,f);for(let b=0;b!==v;++b)y[b]=t[b];m.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,_){let g=u!==null?u.length:0,p=null;if(g!==0){if(p=l.value,_!==!0||p===null){let m=f+g*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,y=f;v!==g;++v,y+=4)o.copy(u[v]).applyMatrix4(x,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function zy(s){let e=new WeakMap;function t(o,a){return a===Mo?o.mapping=br:a===oh&&(o.mapping=Er),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Mo||a===oh)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new fh(l.height/2);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var ts=class extends Qa{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},_r=4,Jf=[.125,.215,.35,.446,.526,.582],Rs=20,Xc=new ts,$f=new Ue,qc=null,Yc=0,Zc=0,ws=(1+Math.sqrt(5))/2,mr=1/ws,jf=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,ws,mr),new R(0,ws,-mr),new R(mr,0,ws),new R(-mr,0,ws),new R(ws,mr,0),new R(-ws,mr,0)],Cr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){qc=this._renderer.getRenderTarget(),Yc=this._renderer.getActiveCubeFace(),Zc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ep(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qc,Yc,Zc),e.scissorTest=!1,Ca(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===br||e.mapping===Er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qc=this._renderer.getRenderTarget(),Yc=this._renderer.getActiveCubeFace(),Zc=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:pn,format:xn,colorSpace:Et,depthBuffer:!1},i=Qf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qf(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hy(r)),this._blurMaterial=ky(r,e,t)}return i}_compileMaterial(e){let t=new Oe(this._lodPlanes[0],e);this._renderer.compile(t,Xc)}_sceneToCubeUV(e,t,n,i){let a=new Dt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor($f),h.toneMapping=Ji,h.autoClear=!1;let f=new Gt({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1}),_=new Oe(new jt,f),g=!1,p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,g=!0):(f.color.copy($f),g=!0);for(let m=0;m<6;m++){let x=m%3;x===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):x===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let v=this._cubeSize;Ca(i,x*v,m>2?v:0,v,v),h.setRenderTarget(i),g&&h.render(_,a),h.render(e,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===br||e.mapping===Er;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=tp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ep());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new Oe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Ca(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Xc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=jf[(i-1)%jf.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Oe(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Rs-1),g=r/_,p=isFinite(r)?1+Math.floor(h*g):Rs;p>Rs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Rs}`);let m=[],x=0;for(let T=0;T<Rs;++T){let C=T/g,M=Math.exp(-C*C/2);m.push(M),T===0?x+=M:T<p&&(x+=2*M)}for(let T=0;T<m.length;T++)m[T]=m[T]/x;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:v}=this;d.dTheta.value=_,d.mipInt.value=v-n;let y=this._sizeLods[i],b=3*y*(i>v-_r?i-v+_r:0),S=4*(this._cubeSize-y);Ca(t,b,S,3*y,2*y),l.setRenderTarget(t),l.render(u,Xc)}};function Hy(s){let e=[],t=[],n=[],i=s,r=s-_r+1+Jf.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);t.push(a);let l=1/a;o>s-_r?l=Jf[o-s+_r-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,_=6,g=3,p=2,m=1,x=new Float32Array(g*_*f),v=new Float32Array(p*_*f),y=new Float32Array(m*_*f);for(let S=0;S<f;S++){let T=S%3*2/3-1,C=S>2?0:-1,M=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];x.set(M,g*_*S),v.set(d,p*_*S);let E=[S,S,S,S,S,S];y.set(E,m*_*S)}let b=new st;b.setAttribute("position",new $e(x,g)),b.setAttribute("uv",new $e(v,p)),b.setAttribute("faceIndex",new $e(y,m)),e.push(b),i>_r&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Qf(s,e,t){let n=new Vt(s,e,t);return n.texture.mapping=Sl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ca(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function ky(s,e,t){let n=new Float32Array(Rs),i=new R(0,1,0);return new nt({name:"SphericalGaussianBlur",defines:{n:Rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:iu(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function ep(){return new nt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:iu(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function tp(){return new nt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function iu(){return`

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
	`}function Vy(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Mo||l===oh,h=l===br||l===Er;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Cr(s)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new Cr(s));let d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Gy(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Wy(s,e,t,n){let i={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let _ in d.attributes)e.remove(d.attributes[_]);for(let _ in d.morphAttributes){let g=d.morphAttributes[_];for(let p=0,m=g.length;p<m;p++)e.remove(g[p])}d.removeEventListener("dispose",o),delete i[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let _ in d)e.update(d[_],s.ARRAY_BUFFER);let f=u.morphAttributes;for(let _ in f){let g=f[_];for(let p=0,m=g.length;p<m;p++)e.update(g[p],s.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,_=u.attributes.position,g=0;if(f!==null){let x=f.array;g=f.version;for(let v=0,y=x.length;v<y;v+=3){let b=x[v+0],S=x[v+1],T=x[v+2];d.push(b,S,S,T,T,b)}}else if(_!==void 0){let x=_.array;g=_.version;for(let v=0,y=x.length/3-1;v<y;v+=3){let b=v+0,S=v+1,T=v+2;d.push(b,S,S,T,T,b)}}else return;let p=new(nm(d)?ja:$a)(d,1);p.version=g;let m=r.get(u);m&&e.remove(m),r.set(u,p)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Xy(s,e,t,n){let i=n.isWebGL2,r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function h(f,_){s.drawElements(r,_,a,f*l),t.update(_,r,1)}function u(f,_,g){if(g===0)return;let p,m;if(i)p=s,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](r,_,a,f*l,g),t.update(_,r,g)}function d(f,_,g){if(g===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<g;m++)this.render(f[m]/l,_[m]);else{p.multiDrawElementsWEBGL(r,_,0,a,f,0,g);let m=0;for(let x=0;x<g;x++)m+=_[x];t.update(m,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function qy(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Yy(s,e){return s[0]-e[0]}function Zy(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Ky(s,e,t){let n={},i=new Float32Array(8),r=new WeakMap,o=new ct,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(e.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=f!==void 0?f.length:0,g=r.get(h);if(g===void 0||g.count!==_){let I=function(){O.dispose(),r.delete(h),h.removeEventListener("dispose",I)};g!==void 0&&g.texture.dispose();let x=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,b=h.morphAttributes.position||[],S=h.morphAttributes.normal||[],T=h.morphAttributes.color||[],C=0;x===!0&&(C=1),v===!0&&(C=2),y===!0&&(C=3);let M=h.attributes.position.count*C,E=1;M>e.maxTextureSize&&(E=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let D=new Float32Array(M*E*4*_),O=new Ka(D,M,E,_);O.type=ni,O.needsUpdate=!0;let H=C*4;for(let U=0;U<_;U++){let F=b[U],Y=S[U],J=T[U],X=M*E*4*U;for(let le=0;le<F.count;le++){let ce=le*H;x===!0&&(o.fromBufferAttribute(F,le),D[X+ce+0]=o.x,D[X+ce+1]=o.y,D[X+ce+2]=o.z,D[X+ce+3]=0),v===!0&&(o.fromBufferAttribute(Y,le),D[X+ce+4]=o.x,D[X+ce+5]=o.y,D[X+ce+6]=o.z,D[X+ce+7]=0),y===!0&&(o.fromBufferAttribute(J,le),D[X+ce+8]=o.x,D[X+ce+9]=o.y,D[X+ce+10]=o.z,D[X+ce+11]=J.itemSize===4?o.w:1)}}g={count:_,texture:O,size:new re(M,E)},r.set(h,g),h.addEventListener("dispose",I)}let p=0;for(let x=0;x<d.length;x++)p+=d[x];let m=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",m),u.getUniforms().setValue(s,"morphTargetInfluences",d),u.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}else{let f=d===void 0?0:d.length,_=n[h.id];if(_===void 0||_.length!==f){_=[];for(let v=0;v<f;v++)_[v]=[v,0];n[h.id]=_}for(let v=0;v<f;v++){let y=_[v];y[0]=v,y[1]=d[v]}_.sort(Zy);for(let v=0;v<8;v++)v<f&&_[v][1]?(a[v][0]=_[v][0],a[v][1]=_[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(Yy);let g=h.morphAttributes.position,p=h.morphAttributes.normal,m=0;for(let v=0;v<8;v++){let y=a[v],b=y[0],S=y[1];b!==Number.MAX_SAFE_INTEGER&&S?(g&&h.getAttribute("morphTarget"+v)!==g[b]&&h.setAttribute("morphTarget"+v,g[b]),p&&h.getAttribute("morphNormal"+v)!==p[b]&&h.setAttribute("morphNormal"+v,p[b]),i[v]=S,m+=S):(g&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),p&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),i[v]=0)}let x=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(s,"morphTargetBaseInfluence",x),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Jy(s,e,t,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Pr=class extends on{constructor(e,t,n,i,r,o,a,l,c,h){if(h=h!==void 0?h:Ps,h!==Ps&&h!==Tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ps&&(n=li),n===void 0&&h===Tr&&(n=Cs),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ht,this.minFilter=l!==void 0?l:Ht,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},om=new on,am=new Pr(1,1);am.compareFunction=tm;var lm=new Ka,cm=new uh,hm=new el,np=[],ip=[],sp=new Float32Array(16),rp=new Float32Array(9),op=new Float32Array(4);function zr(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=np[i];if(r===void 0&&(r=new Float32Array(i),np[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Wt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Xt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function wl(s,e){let t=ip[e];t===void 0&&(t=new Int32Array(e),ip[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function $y(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function jy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;s.uniform2fv(this.addr,e),Xt(t,e)}}function Qy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;s.uniform3fv(this.addr,e),Xt(t,e)}}function eM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;s.uniform4fv(this.addr,e),Xt(t,e)}}function tM(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;op.set(n),s.uniformMatrix2fv(this.addr,!1,op),Xt(t,n)}}function nM(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;rp.set(n),s.uniformMatrix3fv(this.addr,!1,rp),Xt(t,n)}}function iM(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;sp.set(n),s.uniformMatrix4fv(this.addr,!1,sp),Xt(t,n)}}function sM(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function rM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;s.uniform2iv(this.addr,e),Xt(t,e)}}function oM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;s.uniform3iv(this.addr,e),Xt(t,e)}}function aM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;s.uniform4iv(this.addr,e),Xt(t,e)}}function lM(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function cM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;s.uniform2uiv(this.addr,e),Xt(t,e)}}function hM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;s.uniform3uiv(this.addr,e),Xt(t,e)}}function uM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;s.uniform4uiv(this.addr,e),Xt(t,e)}}function dM(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?am:om;t.setTexture2D(e||r,i)}function fM(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||cm,i)}function pM(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||hm,i)}function mM(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||lm,i)}function gM(s){switch(s){case 5126:return $y;case 35664:return jy;case 35665:return Qy;case 35666:return eM;case 35674:return tM;case 35675:return nM;case 35676:return iM;case 5124:case 35670:return sM;case 35667:case 35671:return rM;case 35668:case 35672:return oM;case 35669:case 35673:return aM;case 5125:return lM;case 36294:return cM;case 36295:return hM;case 36296:return uM;case 35678:case 36198:case 36298:case 36306:case 35682:return dM;case 35679:case 36299:case 36307:return fM;case 35680:case 36300:case 36308:case 36293:return pM;case 36289:case 36303:case 36311:case 36292:return mM}}function _M(s,e){s.uniform1fv(this.addr,e)}function vM(s,e){let t=zr(e,this.size,2);s.uniform2fv(this.addr,t)}function xM(s,e){let t=zr(e,this.size,3);s.uniform3fv(this.addr,t)}function yM(s,e){let t=zr(e,this.size,4);s.uniform4fv(this.addr,t)}function MM(s,e){let t=zr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function SM(s,e){let t=zr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function bM(s,e){let t=zr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function EM(s,e){s.uniform1iv(this.addr,e)}function TM(s,e){s.uniform2iv(this.addr,e)}function wM(s,e){s.uniform3iv(this.addr,e)}function AM(s,e){s.uniform4iv(this.addr,e)}function RM(s,e){s.uniform1uiv(this.addr,e)}function CM(s,e){s.uniform2uiv(this.addr,e)}function PM(s,e){s.uniform3uiv(this.addr,e)}function LM(s,e){s.uniform4uiv(this.addr,e)}function IM(s,e,t){let n=this.cache,i=e.length,r=wl(t,i);Wt(n,r)||(s.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||om,r[o])}function DM(s,e,t){let n=this.cache,i=e.length,r=wl(t,i);Wt(n,r)||(s.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||cm,r[o])}function NM(s,e,t){let n=this.cache,i=e.length,r=wl(t,i);Wt(n,r)||(s.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||hm,r[o])}function UM(s,e,t){let n=this.cache,i=e.length,r=wl(t,i);Wt(n,r)||(s.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||lm,r[o])}function OM(s){switch(s){case 5126:return _M;case 35664:return vM;case 35665:return xM;case 35666:return yM;case 35674:return MM;case 35675:return SM;case 35676:return bM;case 5124:case 35670:return EM;case 35667:case 35671:return TM;case 35668:case 35672:return wM;case 35669:case 35673:return AM;case 5125:return RM;case 36294:return CM;case 36295:return PM;case 36296:return LM;case 35678:case 36198:case 36298:case 36306:case 35682:return IM;case 35679:case 36299:case 36307:return DM;case 35680:case 36300:case 36308:case 36293:return NM;case 36289:case 36303:case 36311:case 36292:return UM}}var ph=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=gM(t.type)}},mh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=OM(t.type)}},gh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},Kc=/(\w+)(\])?(\[|\.)?/g;function ap(s,e){s.seq.push(e),s.map[e.id]=e}function FM(s,e,t){let n=s.name,i=n.length;for(Kc.lastIndex=0;;){let r=Kc.exec(n),o=Kc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){ap(t,c===void 0?new ph(a,s,e):new mh(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new gh(a),ap(t,u)),t=u}}}var Sr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);FM(r,o,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function lp(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var BM=37297,zM=0;function HM(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function kM(s){let e=lt.getPrimaries(lt.workingColorSpace),t=lt.getPrimaries(s),n;switch(e===t?n="":e===Wa&&t===Ga?n="LinearDisplayP3ToLinearSRGB":e===Ga&&t===Wa&&(n="LinearSRGBToLinearDisplayP3"),s){case Et:case El:return[n,"LinearTransferOETF"];case ut:case tu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function cp(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+HM(s.getShaderSource(e),o)}else return i}function VM(s,e){let t=kM(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function GM(s,e){let t;switch(e){case Kh:t="Linear";break;case Jh:t="Reinhard";break;case $h:t="OptimizedCineon";break;case Bo:t="ACESFilmic";break;case jh:t="AgX";break;case Q0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function WM(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(vr).join(`
`)}function XM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(vr).join(`
`)}function qM(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function YM(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function vr(s){return s!==""}function hp(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function up(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ZM=/^[ \t]*#include +<([\w\d./]+)>/gm;function _h(s){return s.replace(ZM,JM)}var KM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function JM(s,e){let t=qe[e];if(t===void 0){let n=KM.get(e);if(n!==void 0)t=qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return _h(t)}var $M=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dp(s){return s.replace($M,jM)}function jM(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function fp(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function QM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Vp?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Zh?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ri&&(e="SHADOWMAP_TYPE_VSM"),e}function eS(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case br:case Er:e="ENVMAP_TYPE_CUBE";break;case Sl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tS(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Er:e="ENVMAP_MODE_REFRACTION";break}return e}function nS(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Gp:e="ENVMAP_BLENDING_MULTIPLY";break;case $0:e="ENVMAP_BLENDING_MIX";break;case j0:e="ENVMAP_BLENDING_ADD";break}return e}function iS(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function sS(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=QM(t),c=eS(t),h=tS(t),u=nS(t),d=iS(t),f=t.isWebGL2?"":WM(t),_=XM(t),g=qM(r),p=i.createProgram(),m,x,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(vr).join(`
`),m.length>0&&(m+=`
`),x=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(vr).join(`
`),x.length>0&&(x+=`
`)):(m=[fp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vr).join(`
`),x=[f,fp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ji?"#define TONE_MAPPING":"",t.toneMapping!==Ji?qe.tonemapping_pars_fragment:"",t.toneMapping!==Ji?GM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,VM("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vr).join(`
`)),o=_h(o),o=hp(o,t),o=up(o,t),a=_h(a),a=hp(a,t),a=up(a,t),o=dp(o),a=dp(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===If?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===If?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let y=v+m+o,b=v+x+a,S=lp(i,i.VERTEX_SHADER,y),T=lp(i,i.FRAGMENT_SHADER,b);i.attachShader(p,S),i.attachShader(p,T),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function C(O){if(s.debug.checkShaderErrors){let H=i.getProgramInfoLog(p).trim(),I=i.getShaderInfoLog(S).trim(),U=i.getShaderInfoLog(T).trim(),F=!0,Y=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(F=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,S,T);else{let J=cp(i,S,"vertex"),X=cp(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Program Info Log: `+H+`
`+J+`
`+X)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(I===""||U==="")&&(Y=!1);Y&&(O.diagnostics={runnable:F,programLog:H,vertexShader:{log:I,prefix:m},fragmentShader:{log:U,prefix:x}})}i.deleteShader(S),i.deleteShader(T),M=new Sr(i,p),E=YM(i,p)}let M;this.getUniforms=function(){return M===void 0&&C(this),M};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(p,BM)),D},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zM++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=T,this}var rS=0,vh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new xh(e),t.set(e,n)),n}},xh=class{constructor(e){this.id=rS++,this.code=e,this.usedTimes=0}};function oS(s,e,t,n,i,r,o){let a=new Eo,l=new vh,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return M===0?"uv":`uv${M}`}function p(M,E,D,O,H){let I=O.fog,U=H.geometry,F=M.isMeshStandardMaterial?O.environment:null,Y=(M.isMeshStandardMaterial?t:e).get(M.envMap||F),J=Y&&Y.mapping===Sl?Y.image.height:null,X=_[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let le=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ce=le!==void 0?le.length:0,he=0;U.morphAttributes.position!==void 0&&(he=1),U.morphAttributes.normal!==void 0&&(he=2),U.morphAttributes.color!==void 0&&(he=3);let K,oe,Se,Ae;if(X){let We=oi[X];K=We.vertexShader,oe=We.fragmentShader}else K=M.vertexShader,oe=M.fragmentShader,l.update(M),Se=l.getVertexShaderID(M),Ae=l.getFragmentShaderID(M);let Le=s.getRenderTarget(),Z=H.isInstancedMesh===!0,k=H.isBatchedMesh===!0,ne=!!M.map,_e=!!M.matcap,L=!!Y,j=!!M.aoMap,q=!!M.lightMap,se=!!M.bumpMap,V=!!M.normalMap,ye=!!M.displacementMap,Me=!!M.emissiveMap,A=!!M.metalnessMap,w=!!M.roughnessMap,B=M.anisotropy>0,pe=M.clearcoat>0,me=M.iridescence>0,ae=M.sheen>0,Ie=M.transmission>0,G=B&&!!M.anisotropyMap,de=pe&&!!M.clearcoatMap,Ee=pe&&!!M.clearcoatNormalMap,ee=pe&&!!M.clearcoatRoughnessMap,z=me&&!!M.iridescenceMap,ve=me&&!!M.iridescenceThicknessMap,Re=ae&&!!M.sheenColorMap,be=ae&&!!M.sheenRoughnessMap,xe=!!M.specularMap,ge=!!M.specularColorMap,ue=!!M.specularIntensityMap,Fe=Ie&&!!M.transmissionMap,ot=Ie&&!!M.thicknessMap,Be=!!M.gradientMap,Te=!!M.alphaMap,N=M.alphaTest>0,we=!!M.alphaHash,te=!!M.extensions,Ce=!!U.attributes.uv1,De=!!U.attributes.uv2,Ke=!!U.attributes.uv3,fe=Ji;return M.toneMapped&&(Le===null||Le.isXRRenderTarget===!0)&&(fe=s.toneMapping),{isWebGL2:h,shaderID:X,shaderType:M.type,shaderName:M.name,vertexShader:K,fragmentShader:oe,defines:M.defines,customVertexShaderID:Se,customFragmentShaderID:Ae,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:k,instancing:Z,instancingColor:Z&&H.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Le===null?s.outputColorSpace:Le.isXRRenderTarget===!0?Le.texture.colorSpace:Et,map:ne,matcap:_e,envMap:L,envMapMode:L&&Y.mapping,envMapCubeUVHeight:J,aoMap:j,lightMap:q,bumpMap:se,normalMap:V,displacementMap:d&&ye,emissiveMap:Me,normalMapObjectSpace:V&&M.normalMapType===d_,normalMapTangentSpace:V&&M.normalMapType===em,metalnessMap:A,roughnessMap:w,anisotropy:B,anisotropyMap:G,clearcoat:pe,clearcoatMap:de,clearcoatNormalMap:Ee,clearcoatRoughnessMap:ee,iridescence:me,iridescenceMap:z,iridescenceThicknessMap:ve,sheen:ae,sheenColorMap:Re,sheenRoughnessMap:be,specularMap:xe,specularColorMap:ge,specularIntensityMap:ue,transmission:Ie,transmissionMap:Fe,thicknessMap:ot,gradientMap:Be,opaque:M.transparent===!1&&M.blending===yr,alphaMap:Te,alphaTest:N,alphaHash:we,combine:M.combine,mapUv:ne&&g(M.map.channel),aoMapUv:j&&g(M.aoMap.channel),lightMapUv:q&&g(M.lightMap.channel),bumpMapUv:se&&g(M.bumpMap.channel),normalMapUv:V&&g(M.normalMap.channel),displacementMapUv:ye&&g(M.displacementMap.channel),emissiveMapUv:Me&&g(M.emissiveMap.channel),metalnessMapUv:A&&g(M.metalnessMap.channel),roughnessMapUv:w&&g(M.roughnessMap.channel),anisotropyMapUv:G&&g(M.anisotropyMap.channel),clearcoatMapUv:de&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:z&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:be&&g(M.sheenRoughnessMap.channel),specularMapUv:xe&&g(M.specularMap.channel),specularColorMapUv:ge&&g(M.specularColorMap.channel),specularIntensityMapUv:ue&&g(M.specularIntensityMap.channel),transmissionMapUv:Fe&&g(M.transmissionMap.channel),thicknessMapUv:ot&&g(M.thicknessMap.channel),alphaMapUv:Te&&g(M.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(V||B),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Ce,vertexUv2s:De,vertexUv3s:Ke,pointsUvs:H.isPoints===!0&&!!U.attributes.uv&&(ne||Te),fog:!!I,useFog:M.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:H.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:he,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:fe,useLegacyLights:s._useLegacyLights,decodeVideoTexture:ne&&M.map.isVideoTexture===!0&&lt.getTransfer(M.map.colorSpace)===ft,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===fn,flipSided:M.side===Ft,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:te&&M.extensions.derivatives===!0,extensionFragDepth:te&&M.extensions.fragDepth===!0,extensionDrawBuffers:te&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:te&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:te&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function m(M){let E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(let D in M.defines)E.push(D),E.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(x(E,M),v(E,M),E.push(s.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function x(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function v(M,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function y(M){let E=_[M.type],D;if(E){let O=oi[E];D=Xn.clone(O.uniforms)}else D=M.uniforms;return D}function b(M,E){let D;for(let O=0,H=c.length;O<H;O++){let I=c[O];if(I.cacheKey===E){D=I,++D.usedTimes;break}}return D===void 0&&(D=new sS(s,E,M,r),c.push(D)),D}function S(M){if(--M.usedTimes===0){let E=c.indexOf(M);c[E]=c[c.length-1],c.pop(),M.destroy()}}function T(M){l.remove(M)}function C(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:y,acquireProgram:b,releaseProgram:S,releaseShaderCache:T,programs:c,dispose:C}}function aS(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function lS(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function pp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function mp(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,_,g,p){let m=s[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:_,renderOrder:u.renderOrder,z:g,group:p},s[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=_,m.renderOrder=u.renderOrder,m.z=g,m.group=p),e++,m}function a(u,d,f,_,g,p){let m=o(u,d,f,_,g,p);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):t.push(m)}function l(u,d,f,_,g,p){let m=o(u,d,f,_,g,p);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):t.unshift(m)}function c(u,d){t.length>1&&t.sort(u||lS),n.length>1&&n.sort(d||pp),i.length>1&&i.sort(d||pp)}function h(){for(let u=e,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function cS(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new mp,s.set(n,[o])):i>=r.length?(o=new mp,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function hS(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Ue};break;case"SpotLight":t={position:new R,direction:new R,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new R,halfWidth:new R,halfHeight:new R};break}return s[e.id]=t,t}}}function uS(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var dS=0;function fS(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function pS(s,e){let t=new hS,n=uS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new R);let r=new R,o=new Ye,a=new Ye;function l(h,u){let d=0,f=0,_=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let g=0,p=0,m=0,x=0,v=0,y=0,b=0,S=0,T=0,C=0,M=0;h.sort(fS);let E=u===!0?Math.PI:1;for(let O=0,H=h.length;O<H;O++){let I=h[O],U=I.color,F=I.intensity,Y=I.distance,J=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=U.r*F*E,f+=U.g*F*E,_+=U.b*F*E;else if(I.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(I.sh.coefficients[X],F);M++}else if(I.isDirectionalLight){let X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity*E),I.castShadow){let le=I.shadow,ce=n.get(I);ce.shadowBias=le.bias,ce.shadowNormalBias=le.normalBias,ce.shadowRadius=le.radius,ce.shadowMapSize=le.mapSize,i.directionalShadow[g]=ce,i.directionalShadowMap[g]=J,i.directionalShadowMatrix[g]=I.shadow.matrix,y++}i.directional[g]=X,g++}else if(I.isSpotLight){let X=t.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(U).multiplyScalar(F*E),X.distance=Y,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,i.spot[m]=X;let le=I.shadow;if(I.map&&(i.spotLightMap[T]=I.map,T++,le.updateMatrices(I),I.castShadow&&C++),i.spotLightMatrix[m]=le.matrix,I.castShadow){let ce=n.get(I);ce.shadowBias=le.bias,ce.shadowNormalBias=le.normalBias,ce.shadowRadius=le.radius,ce.shadowMapSize=le.mapSize,i.spotShadow[m]=ce,i.spotShadowMap[m]=J,S++}m++}else if(I.isRectAreaLight){let X=t.get(I);X.color.copy(U).multiplyScalar(F),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),i.rectArea[x]=X,x++}else if(I.isPointLight){let X=t.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity*E),X.distance=I.distance,X.decay=I.decay,I.castShadow){let le=I.shadow,ce=n.get(I);ce.shadowBias=le.bias,ce.shadowNormalBias=le.normalBias,ce.shadowRadius=le.radius,ce.shadowMapSize=le.mapSize,ce.shadowCameraNear=le.camera.near,ce.shadowCameraFar=le.camera.far,i.pointShadow[p]=ce,i.pointShadowMap[p]=J,i.pointShadowMatrix[p]=I.shadow.matrix,b++}i.point[p]=X,p++}else if(I.isHemisphereLight){let X=t.get(I);X.skyColor.copy(I.color).multiplyScalar(F*E),X.groundColor.copy(I.groundColor).multiplyScalar(F*E),i.hemi[v]=X,v++}}x>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pe.LTC_FLOAT_1,i.rectAreaLTC2=Pe.LTC_FLOAT_2):(i.rectAreaLTC1=Pe.LTC_HALF_1,i.rectAreaLTC2=Pe.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pe.LTC_FLOAT_1,i.rectAreaLTC2=Pe.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Pe.LTC_HALF_1,i.rectAreaLTC2=Pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=_;let D=i.hash;(D.directionalLength!==g||D.pointLength!==p||D.spotLength!==m||D.rectAreaLength!==x||D.hemiLength!==v||D.numDirectionalShadows!==y||D.numPointShadows!==b||D.numSpotShadows!==S||D.numSpotMaps!==T||D.numLightProbes!==M)&&(i.directional.length=g,i.spot.length=m,i.rectArea.length=x,i.point.length=p,i.hemi.length=v,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=S+T-C,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=M,D.directionalLength=g,D.pointLength=p,D.spotLength=m,D.rectAreaLength=x,D.hemiLength=v,D.numDirectionalShadows=y,D.numPointShadows=b,D.numSpotShadows=S,D.numSpotMaps=T,D.numLightProbes=M,i.version=dS++)}function c(h,u){let d=0,f=0,_=0,g=0,p=0,m=u.matrixWorldInverse;for(let x=0,v=h.length;x<v;x++){let y=h[x];if(y.isDirectionalLight){let b=i.directional[d];b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),d++}else if(y.isSpotLight){let b=i.spot[_];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),_++}else if(y.isRectAreaLight){let b=i.rectArea[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),a.identity(),o.copy(y.matrixWorld),o.premultiply(m),a.extractRotation(o),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){let b=i.point[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let b=i.hemi[p];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:i}}function gp(s,e){let t=new pS(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function mS(s,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),l;return a===void 0?(l=new gp(s,e),t.set(r,[l])):o>=a.length?(l=new gp(s,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}var yh=class extends Dn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=h_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Mh=class extends Dn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},gS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_S=`uniform sampler2D shadow_pass;
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
}`;function vS(s,e,t){let n=new To,i=new re,r=new re,o=new ct,a=new yh({depthPacking:u_}),l=new Mh,c={},h=t.maxTextureSize,u={[kn]:Ft,[Ft]:kn,[fn]:fn},d=new nt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:gS,fragmentShader:_S}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let _=new st;_.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Oe(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vp;let m=this.type;this.render=function(S,T,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;let M=s.getRenderTarget(),E=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),O=s.state;O.setBlending(ci),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let H=m!==Ri&&this.type===Ri,I=m===Ri&&this.type!==Ri;for(let U=0,F=S.length;U<F;U++){let Y=S[U],J=Y.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;i.copy(J.mapSize);let X=J.getFrameExtents();if(i.multiply(X),r.copy(J.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/X.x),i.x=r.x*X.x,J.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/X.y),i.y=r.y*X.y,J.mapSize.y=r.y)),J.map===null||H===!0||I===!0){let ce=this.type!==Ri?{minFilter:Ht,magFilter:Ht}:{};J.map!==null&&J.map.dispose(),J.map=new Vt(i.x,i.y,ce),J.map.texture.name=Y.name+".shadowMap",J.camera.updateProjectionMatrix()}s.setRenderTarget(J.map),s.clear();let le=J.getViewportCount();for(let ce=0;ce<le;ce++){let he=J.getViewport(ce);o.set(r.x*he.x,r.y*he.y,r.x*he.z,r.y*he.w),O.viewport(o),J.updateMatrices(Y,ce),n=J.getFrustum(),y(T,C,J.camera,Y,this.type)}J.isPointLightShadow!==!0&&this.type===Ri&&x(J,C),J.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(M,E,D)};function x(S,T){let C=e.update(g);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Vt(i.x,i.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(T,null,C,d,g,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(T,null,C,f,g,null)}function v(S,T,C,M){let E=null,D=C.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(D!==void 0)E=D;else if(E=C.isPointLight===!0?l:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let O=E.uuid,H=T.uuid,I=c[O];I===void 0&&(I={},c[O]=I);let U=I[H];U===void 0&&(U=E.clone(),I[H]=U,T.addEventListener("dispose",b)),E=U}if(E.visible=T.visible,E.wireframe=T.wireframe,M===Ri?E.side=T.shadowSide!==null?T.shadowSide:T.side:E.side=T.shadowSide!==null?T.shadowSide:u[T.side],E.alphaMap=T.alphaMap,E.alphaTest=T.alphaTest,E.map=T.map,E.clipShadows=T.clipShadows,E.clippingPlanes=T.clippingPlanes,E.clipIntersection=T.clipIntersection,E.displacementMap=T.displacementMap,E.displacementScale=T.displacementScale,E.displacementBias=T.displacementBias,E.wireframeLinewidth=T.wireframeLinewidth,E.linewidth=T.linewidth,C.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let O=s.properties.get(E);O.light=C}return E}function y(S,T,C,M,E){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&E===Ri)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,S.matrixWorld);let H=e.update(S),I=S.material;if(Array.isArray(I)){let U=H.groups;for(let F=0,Y=U.length;F<Y;F++){let J=U[F],X=I[J.materialIndex];if(X&&X.visible){let le=v(S,X,M,E);S.onBeforeShadow(s,S,T,C,H,le,J),s.renderBufferDirect(C,null,H,le,S,J),S.onAfterShadow(s,S,T,C,H,le,J)}}}else if(I.visible){let U=v(S,I,M,E);S.onBeforeShadow(s,S,T,C,H,U,null),s.renderBufferDirect(C,null,H,U,S,null),S.onAfterShadow(s,S,T,C,H,U,null)}}let O=S.children;for(let H=0,I=O.length;H<I;H++)y(O[H],T,C,M,E)}function b(S){S.target.removeEventListener("dispose",b);for(let C in c){let M=c[C],E=S.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}function xS(s,e,t){let n=t.isWebGL2;function i(){let N=!1,we=new ct,te=null,Ce=new ct(0,0,0,0);return{setMask:function(De){te!==De&&!N&&(s.colorMask(De,De,De,De),te=De)},setLocked:function(De){N=De},setClear:function(De,Ke,fe,ke,We){We===!0&&(De*=ke,Ke*=ke,fe*=ke),we.set(De,Ke,fe,ke),Ce.equals(we)===!1&&(s.clearColor(De,Ke,fe,ke),Ce.copy(we))},reset:function(){N=!1,te=null,Ce.set(-1,0,0,0)}}}function r(){let N=!1,we=null,te=null,Ce=null;return{setTest:function(De){De?k(s.DEPTH_TEST):ne(s.DEPTH_TEST)},setMask:function(De){we!==De&&!N&&(s.depthMask(De),we=De)},setFunc:function(De){if(te!==De){switch(De){case W0:s.depthFunc(s.NEVER);break;case X0:s.depthFunc(s.ALWAYS);break;case q0:s.depthFunc(s.LESS);break;case Ha:s.depthFunc(s.LEQUAL);break;case Y0:s.depthFunc(s.EQUAL);break;case Z0:s.depthFunc(s.GEQUAL);break;case K0:s.depthFunc(s.GREATER);break;case J0:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}te=De}},setLocked:function(De){N=De},setClear:function(De){Ce!==De&&(s.clearDepth(De),Ce=De)},reset:function(){N=!1,we=null,te=null,Ce=null}}}function o(){let N=!1,we=null,te=null,Ce=null,De=null,Ke=null,fe=null,ke=null,We=null;return{setTest:function(He){N||(He?k(s.STENCIL_TEST):ne(s.STENCIL_TEST))},setMask:function(He){we!==He&&!N&&(s.stencilMask(He),we=He)},setFunc:function(He,it,vt){(te!==He||Ce!==it||De!==vt)&&(s.stencilFunc(He,it,vt),te=He,Ce=it,De=vt)},setOp:function(He,it,vt){(Ke!==He||fe!==it||ke!==vt)&&(s.stencilOp(He,it,vt),Ke=He,fe=it,ke=vt)},setLocked:function(He){N=He},setClear:function(He){We!==He&&(s.clearStencil(He),We=He)},reset:function(){N=!1,we=null,te=null,Ce=null,De=null,Ke=null,fe=null,ke=null,We=null}}}let a=new i,l=new r,c=new o,h=new WeakMap,u=new WeakMap,d={},f={},_=new WeakMap,g=[],p=null,m=!1,x=null,v=null,y=null,b=null,S=null,T=null,C=null,M=new Ue(0,0,0),E=0,D=!1,O=null,H=null,I=null,U=null,F=null,Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,X=0,le=s.getParameter(s.VERSION);le.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(le)[1]),J=X>=1):le.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),J=X>=2);let ce=null,he={},K=s.getParameter(s.SCISSOR_BOX),oe=s.getParameter(s.VIEWPORT),Se=new ct().fromArray(K),Ae=new ct().fromArray(oe);function Le(N,we,te,Ce){let De=new Uint8Array(4),Ke=s.createTexture();s.bindTexture(N,Ke),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let fe=0;fe<te;fe++)n&&(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)?s.texImage3D(we,0,s.RGBA,1,1,Ce,0,s.RGBA,s.UNSIGNED_BYTE,De):s.texImage2D(we+fe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,De);return Ke}let Z={};Z[s.TEXTURE_2D]=Le(s.TEXTURE_2D,s.TEXTURE_2D,1),Z[s.TEXTURE_CUBE_MAP]=Le(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Z[s.TEXTURE_2D_ARRAY]=Le(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Z[s.TEXTURE_3D]=Le(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),k(s.DEPTH_TEST),l.setFunc(Ha),Me(!1),A(Jd),k(s.CULL_FACE),V(ci);function k(N){d[N]!==!0&&(s.enable(N),d[N]=!0)}function ne(N){d[N]!==!1&&(s.disable(N),d[N]=!1)}function _e(N,we){return f[N]!==we?(s.bindFramebuffer(N,we),f[N]=we,n&&(N===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=we),N===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=we)),!0):!1}function L(N,we){let te=g,Ce=!1;if(N)if(te=_.get(we),te===void 0&&(te=[],_.set(we,te)),N.isWebGLMultipleRenderTargets){let De=N.texture;if(te.length!==De.length||te[0]!==s.COLOR_ATTACHMENT0){for(let Ke=0,fe=De.length;Ke<fe;Ke++)te[Ke]=s.COLOR_ATTACHMENT0+Ke;te.length=De.length,Ce=!0}}else te[0]!==s.COLOR_ATTACHMENT0&&(te[0]=s.COLOR_ATTACHMENT0,Ce=!0);else te[0]!==s.BACK&&(te[0]=s.BACK,Ce=!0);Ce&&(t.isWebGL2?s.drawBuffers(te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te))}function j(N){return p!==N?(s.useProgram(N),p=N,!0):!1}let q={[As]:s.FUNC_ADD,[C0]:s.FUNC_SUBTRACT,[P0]:s.FUNC_REVERSE_SUBTRACT};if(n)q[Qd]=s.MIN,q[ef]=s.MAX;else{let N=e.get("EXT_blend_minmax");N!==null&&(q[Qd]=N.MIN_EXT,q[ef]=N.MAX_EXT)}let se={[L0]:s.ZERO,[I0]:s.ONE,[D0]:s.SRC_COLOR,[sh]:s.SRC_ALPHA,[z0]:s.SRC_ALPHA_SATURATE,[F0]:s.DST_COLOR,[U0]:s.DST_ALPHA,[N0]:s.ONE_MINUS_SRC_COLOR,[rh]:s.ONE_MINUS_SRC_ALPHA,[B0]:s.ONE_MINUS_DST_COLOR,[O0]:s.ONE_MINUS_DST_ALPHA,[H0]:s.CONSTANT_COLOR,[k0]:s.ONE_MINUS_CONSTANT_COLOR,[V0]:s.CONSTANT_ALPHA,[G0]:s.ONE_MINUS_CONSTANT_ALPHA};function V(N,we,te,Ce,De,Ke,fe,ke,We,He){if(N===ci){m===!0&&(ne(s.BLEND),m=!1);return}if(m===!1&&(k(s.BLEND),m=!0),N!==R0){if(N!==x||He!==D){if((v!==As||S!==As)&&(s.blendEquation(s.FUNC_ADD),v=As,S=As),He)switch(N){case yr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case za:s.blendFunc(s.ONE,s.ONE);break;case $d:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case jd:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case yr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case za:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case $d:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case jd:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}y=null,b=null,T=null,C=null,M.set(0,0,0),E=0,x=N,D=He}return}De=De||we,Ke=Ke||te,fe=fe||Ce,(we!==v||De!==S)&&(s.blendEquationSeparate(q[we],q[De]),v=we,S=De),(te!==y||Ce!==b||Ke!==T||fe!==C)&&(s.blendFuncSeparate(se[te],se[Ce],se[Ke],se[fe]),y=te,b=Ce,T=Ke,C=fe),(ke.equals(M)===!1||We!==E)&&(s.blendColor(ke.r,ke.g,ke.b,We),M.copy(ke),E=We),x=N,D=!1}function ye(N,we){N.side===fn?ne(s.CULL_FACE):k(s.CULL_FACE);let te=N.side===Ft;we&&(te=!te),Me(te),N.blending===yr&&N.transparent===!1?V(ci):V(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);let Ce=N.stencilWrite;c.setTest(Ce),Ce&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),B(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?k(s.SAMPLE_ALPHA_TO_COVERAGE):ne(s.SAMPLE_ALPHA_TO_COVERAGE)}function Me(N){O!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),O=N)}function A(N){N!==w0?(k(s.CULL_FACE),N!==H&&(N===Jd?s.cullFace(s.BACK):N===A0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ne(s.CULL_FACE),H=N}function w(N){N!==I&&(J&&s.lineWidth(N),I=N)}function B(N,we,te){N?(k(s.POLYGON_OFFSET_FILL),(U!==we||F!==te)&&(s.polygonOffset(we,te),U=we,F=te)):ne(s.POLYGON_OFFSET_FILL)}function pe(N){N?k(s.SCISSOR_TEST):ne(s.SCISSOR_TEST)}function me(N){N===void 0&&(N=s.TEXTURE0+Y-1),ce!==N&&(s.activeTexture(N),ce=N)}function ae(N,we,te){te===void 0&&(ce===null?te=s.TEXTURE0+Y-1:te=ce);let Ce=he[te];Ce===void 0&&(Ce={type:void 0,texture:void 0},he[te]=Ce),(Ce.type!==N||Ce.texture!==we)&&(ce!==te&&(s.activeTexture(te),ce=te),s.bindTexture(N,we||Z[N]),Ce.type=N,Ce.texture=we)}function Ie(){let N=he[ce];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function G(){try{s.compressedTexImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function de(){try{s.compressedTexImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ee(){try{s.texSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{s.texSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function z(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ve(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(){try{s.texStorage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function be(){try{s.texStorage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xe(){try{s.texImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ge(){try{s.texImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ue(N){Se.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),Se.copy(N))}function Fe(N){Ae.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),Ae.copy(N))}function ot(N,we){let te=u.get(we);te===void 0&&(te=new WeakMap,u.set(we,te));let Ce=te.get(N);Ce===void 0&&(Ce=s.getUniformBlockIndex(we,N.name),te.set(N,Ce))}function Be(N,we){let Ce=u.get(we).get(N);h.get(we)!==Ce&&(s.uniformBlockBinding(we,Ce,N.__bindingPointIndex),h.set(we,Ce))}function Te(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},ce=null,he={},f={},_=new WeakMap,g=[],p=null,m=!1,x=null,v=null,y=null,b=null,S=null,T=null,C=null,M=new Ue(0,0,0),E=0,D=!1,O=null,H=null,I=null,U=null,F=null,Se.set(0,0,s.canvas.width,s.canvas.height),Ae.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:k,disable:ne,bindFramebuffer:_e,drawBuffers:L,useProgram:j,setBlending:V,setMaterial:ye,setFlipSided:Me,setCullFace:A,setLineWidth:w,setPolygonOffset:B,setScissorTest:pe,activeTexture:me,bindTexture:ae,unbindTexture:Ie,compressedTexImage2D:G,compressedTexImage3D:de,texImage2D:xe,texImage3D:ge,updateUBOMapping:ot,uniformBlockBinding:Be,texStorage2D:Re,texStorage3D:be,texSubImage2D:Ee,texSubImage3D:ee,compressedTexSubImage2D:z,compressedTexSubImage3D:ve,scissor:ue,viewport:Fe,reset:Te}}function yS(s,e,t,n,i,r,o){let a=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,w){return f?new OffscreenCanvas(A,w):bo("canvas")}function g(A,w,B,pe){let me=1;if((A.width>pe||A.height>pe)&&(me=pe/Math.max(A.width,A.height)),me<1||w===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){let ae=w?qa:Math.floor,Ie=ae(me*A.width),G=ae(me*A.height);u===void 0&&(u=_(Ie,G));let de=B?_(Ie,G):u;return de.width=Ie,de.height=G,de.getContext("2d").drawImage(A,0,0,Ie,G),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Ie+"x"+G+")."),de}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function p(A){return ch(A.width)&&ch(A.height)}function m(A){return a?!1:A.wrapS!==In||A.wrapT!==In||A.minFilter!==Ht&&A.minFilter!==Kt}function x(A,w){return A.generateMipmaps&&w&&A.minFilter!==Ht&&A.minFilter!==Kt}function v(A){s.generateMipmap(A)}function y(A,w,B,pe,me=!1){if(a===!1)return w;if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ae=w;if(w===s.RED&&(B===s.FLOAT&&(ae=s.R32F),B===s.HALF_FLOAT&&(ae=s.R16F),B===s.UNSIGNED_BYTE&&(ae=s.R8)),w===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(ae=s.R8UI),B===s.UNSIGNED_SHORT&&(ae=s.R16UI),B===s.UNSIGNED_INT&&(ae=s.R32UI),B===s.BYTE&&(ae=s.R8I),B===s.SHORT&&(ae=s.R16I),B===s.INT&&(ae=s.R32I)),w===s.RG&&(B===s.FLOAT&&(ae=s.RG32F),B===s.HALF_FLOAT&&(ae=s.RG16F),B===s.UNSIGNED_BYTE&&(ae=s.RG8)),w===s.RGBA){let Ie=me?Va:lt.getTransfer(pe);B===s.FLOAT&&(ae=s.RGBA32F),B===s.HALF_FLOAT&&(ae=s.RGBA16F),B===s.UNSIGNED_BYTE&&(ae=Ie===ft?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(ae=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(ae=s.RGB5_A1)}return(ae===s.R16F||ae===s.R32F||ae===s.RG16F||ae===s.RG32F||ae===s.RGBA16F||ae===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function b(A,w,B){return x(A,B)===!0||A.isFramebufferTexture&&A.minFilter!==Ht&&A.minFilter!==Kt?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function S(A){return A===Ht||A===ka||A===po?s.NEAREST:s.LINEAR}function T(A){let w=A.target;w.removeEventListener("dispose",T),M(w),w.isVideoTexture&&h.delete(w)}function C(A){let w=A.target;w.removeEventListener("dispose",C),D(w)}function M(A){let w=n.get(A);if(w.__webglInit===void 0)return;let B=A.source,pe=d.get(B);if(pe){let me=pe[w.__cacheKey];me.usedTimes--,me.usedTimes===0&&E(A),Object.keys(pe).length===0&&d.delete(B)}n.remove(A)}function E(A){let w=n.get(A);s.deleteTexture(w.__webglTexture);let B=A.source,pe=d.get(B);delete pe[w.__cacheKey],o.memory.textures--}function D(A){let w=A.texture,B=n.get(A),pe=n.get(w);if(pe.__webglTexture!==void 0&&(s.deleteTexture(pe.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(B.__webglFramebuffer[me]))for(let ae=0;ae<B.__webglFramebuffer[me].length;ae++)s.deleteFramebuffer(B.__webglFramebuffer[me][ae]);else s.deleteFramebuffer(B.__webglFramebuffer[me]);B.__webglDepthbuffer&&s.deleteRenderbuffer(B.__webglDepthbuffer[me])}else{if(Array.isArray(B.__webglFramebuffer))for(let me=0;me<B.__webglFramebuffer.length;me++)s.deleteFramebuffer(B.__webglFramebuffer[me]);else s.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&s.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&s.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let me=0;me<B.__webglColorRenderbuffer.length;me++)B.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(B.__webglColorRenderbuffer[me]);B.__webglDepthRenderbuffer&&s.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let me=0,ae=w.length;me<ae;me++){let Ie=n.get(w[me]);Ie.__webglTexture&&(s.deleteTexture(Ie.__webglTexture),o.memory.textures--),n.remove(w[me])}n.remove(w),n.remove(A)}let O=0;function H(){O=0}function I(){let A=O;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),O+=1,A}function U(A){let w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.wrapR||0),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.colorSpace),w.join()}function F(A,w){let B=n.get(A);if(A.isVideoTexture&&ye(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){let pe=A.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Se(B,A,w);return}}t.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+w)}function Y(A,w){let B=n.get(A);if(A.version>0&&B.__version!==A.version){Se(B,A,w);return}t.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+w)}function J(A,w){let B=n.get(A);if(A.version>0&&B.__version!==A.version){Se(B,A,w);return}t.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+w)}function X(A,w){let B=n.get(A);if(A.version>0&&B.__version!==A.version){Ae(B,A,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+w)}let le={[Pi]:s.REPEAT,[In]:s.CLAMP_TO_EDGE,[So]:s.MIRRORED_REPEAT},ce={[Ht]:s.NEAREST,[ka]:s.NEAREST_MIPMAP_NEAREST,[po]:s.NEAREST_MIPMAP_LINEAR,[Kt]:s.LINEAR,[Qh]:s.LINEAR_MIPMAP_NEAREST,[Qi]:s.LINEAR_MIPMAP_LINEAR},he={[f_]:s.NEVER,[x_]:s.ALWAYS,[p_]:s.LESS,[tm]:s.LEQUAL,[m_]:s.EQUAL,[v_]:s.GEQUAL,[g_]:s.GREATER,[__]:s.NOTEQUAL};function K(A,w,B){if(B?(s.texParameteri(A,s.TEXTURE_WRAP_S,le[w.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,le[w.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,le[w.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,ce[w.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,ce[w.minFilter])):(s.texParameteri(A,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(A,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(w.wrapS!==In||w.wrapT!==In)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(A,s.TEXTURE_MAG_FILTER,S(w.magFilter)),s.texParameteri(A,s.TEXTURE_MIN_FILTER,S(w.minFilter)),w.minFilter!==Ht&&w.minFilter!==Kt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,he[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let pe=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Ht||w.minFilter!==po&&w.minFilter!==Qi||w.type===ni&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===pn&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(s.texParameterf(A,pe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function oe(A,w){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",T));let pe=w.source,me=d.get(pe);me===void 0&&(me={},d.set(pe,me));let ae=U(w);if(ae!==A.__cacheKey){me[ae]===void 0&&(me[ae]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,B=!0),me[ae].usedTimes++;let Ie=me[A.__cacheKey];Ie!==void 0&&(me[A.__cacheKey].usedTimes--,Ie.usedTimes===0&&E(w)),A.__cacheKey=ae,A.__webglTexture=me[ae].texture}return B}function Se(A,w,B){let pe=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(pe=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(pe=s.TEXTURE_3D);let me=oe(A,w),ae=w.source;t.bindTexture(pe,A.__webglTexture,s.TEXTURE0+B);let Ie=n.get(ae);if(ae.version!==Ie.__version||me===!0){t.activeTexture(s.TEXTURE0+B);let G=lt.getPrimaries(lt.workingColorSpace),de=w.colorSpace===zn?null:lt.getPrimaries(w.colorSpace),Ee=w.colorSpace===zn||G===de?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let ee=m(w)&&p(w.image)===!1,z=g(w.image,ee,!1,i.maxTextureSize);z=Me(w,z);let ve=p(z)||a,Re=r.convert(w.format,w.colorSpace),be=r.convert(w.type),xe=y(w.internalFormat,Re,be,w.colorSpace,w.isVideoTexture);K(pe,w,ve);let ge,ue=w.mipmaps,Fe=a&&w.isVideoTexture!==!0&&xe!==$p,ot=Ie.__version===void 0||me===!0,Be=b(w,z,ve);if(w.isDepthTexture)xe=s.DEPTH_COMPONENT,a?w.type===ni?xe=s.DEPTH_COMPONENT32F:w.type===li?xe=s.DEPTH_COMPONENT24:w.type===Cs?xe=s.DEPTH24_STENCIL8:xe=s.DEPTH_COMPONENT16:w.type===ni&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Ps&&xe===s.DEPTH_COMPONENT&&w.type!==eu&&w.type!==li&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=li,be=r.convert(w.type)),w.format===Tr&&xe===s.DEPTH_COMPONENT&&(xe=s.DEPTH_STENCIL,w.type!==Cs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Cs,be=r.convert(w.type))),ot&&(Fe?t.texStorage2D(s.TEXTURE_2D,1,xe,z.width,z.height):t.texImage2D(s.TEXTURE_2D,0,xe,z.width,z.height,0,Re,be,null));else if(w.isDataTexture)if(ue.length>0&&ve){Fe&&ot&&t.texStorage2D(s.TEXTURE_2D,Be,xe,ue[0].width,ue[0].height);for(let Te=0,N=ue.length;Te<N;Te++)ge=ue[Te],Fe?t.texSubImage2D(s.TEXTURE_2D,Te,0,0,ge.width,ge.height,Re,be,ge.data):t.texImage2D(s.TEXTURE_2D,Te,xe,ge.width,ge.height,0,Re,be,ge.data);w.generateMipmaps=!1}else Fe?(ot&&t.texStorage2D(s.TEXTURE_2D,Be,xe,z.width,z.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,z.width,z.height,Re,be,z.data)):t.texImage2D(s.TEXTURE_2D,0,xe,z.width,z.height,0,Re,be,z.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Fe&&ot&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Be,xe,ue[0].width,ue[0].height,z.depth);for(let Te=0,N=ue.length;Te<N;Te++)ge=ue[Te],w.format!==xn?Re!==null?Fe?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,0,ge.width,ge.height,z.depth,Re,ge.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Te,xe,ge.width,ge.height,z.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?t.texSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,0,ge.width,ge.height,z.depth,Re,be,ge.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Te,xe,ge.width,ge.height,z.depth,0,Re,be,ge.data)}else{Fe&&ot&&t.texStorage2D(s.TEXTURE_2D,Be,xe,ue[0].width,ue[0].height);for(let Te=0,N=ue.length;Te<N;Te++)ge=ue[Te],w.format!==xn?Re!==null?Fe?t.compressedTexSubImage2D(s.TEXTURE_2D,Te,0,0,ge.width,ge.height,Re,ge.data):t.compressedTexImage2D(s.TEXTURE_2D,Te,xe,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?t.texSubImage2D(s.TEXTURE_2D,Te,0,0,ge.width,ge.height,Re,be,ge.data):t.texImage2D(s.TEXTURE_2D,Te,xe,ge.width,ge.height,0,Re,be,ge.data)}else if(w.isDataArrayTexture)Fe?(ot&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Be,xe,z.width,z.height,z.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,z.width,z.height,z.depth,Re,be,z.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,xe,z.width,z.height,z.depth,0,Re,be,z.data);else if(w.isData3DTexture)Fe?(ot&&t.texStorage3D(s.TEXTURE_3D,Be,xe,z.width,z.height,z.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,z.width,z.height,z.depth,Re,be,z.data)):t.texImage3D(s.TEXTURE_3D,0,xe,z.width,z.height,z.depth,0,Re,be,z.data);else if(w.isFramebufferTexture){if(ot)if(Fe)t.texStorage2D(s.TEXTURE_2D,Be,xe,z.width,z.height);else{let Te=z.width,N=z.height;for(let we=0;we<Be;we++)t.texImage2D(s.TEXTURE_2D,we,xe,Te,N,0,Re,be,null),Te>>=1,N>>=1}}else if(ue.length>0&&ve){Fe&&ot&&t.texStorage2D(s.TEXTURE_2D,Be,xe,ue[0].width,ue[0].height);for(let Te=0,N=ue.length;Te<N;Te++)ge=ue[Te],Fe?t.texSubImage2D(s.TEXTURE_2D,Te,0,0,Re,be,ge):t.texImage2D(s.TEXTURE_2D,Te,xe,Re,be,ge);w.generateMipmaps=!1}else Fe?(ot&&t.texStorage2D(s.TEXTURE_2D,Be,xe,z.width,z.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Re,be,z)):t.texImage2D(s.TEXTURE_2D,0,xe,Re,be,z);x(w,ve)&&v(pe),Ie.__version=ae.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function Ae(A,w,B){if(w.image.length!==6)return;let pe=oe(A,w),me=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+B);let ae=n.get(me);if(me.version!==ae.__version||pe===!0){t.activeTexture(s.TEXTURE0+B);let Ie=lt.getPrimaries(lt.workingColorSpace),G=w.colorSpace===zn?null:lt.getPrimaries(w.colorSpace),de=w.colorSpace===zn||Ie===G?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let Ee=w.isCompressedTexture||w.image[0].isCompressedTexture,ee=w.image[0]&&w.image[0].isDataTexture,z=[];for(let Te=0;Te<6;Te++)!Ee&&!ee?z[Te]=g(w.image[Te],!1,!0,i.maxCubemapSize):z[Te]=ee?w.image[Te].image:w.image[Te],z[Te]=Me(w,z[Te]);let ve=z[0],Re=p(ve)||a,be=r.convert(w.format,w.colorSpace),xe=r.convert(w.type),ge=y(w.internalFormat,be,xe,w.colorSpace),ue=a&&w.isVideoTexture!==!0,Fe=ae.__version===void 0||pe===!0,ot=b(w,ve,Re);K(s.TEXTURE_CUBE_MAP,w,Re);let Be;if(Ee){ue&&Fe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ot,ge,ve.width,ve.height);for(let Te=0;Te<6;Te++){Be=z[Te].mipmaps;for(let N=0;N<Be.length;N++){let we=Be[N];w.format!==xn?be!==null?ue?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,N,0,0,we.width,we.height,be,we.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,N,ge,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ue?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,N,0,0,we.width,we.height,be,xe,we.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,N,ge,we.width,we.height,0,be,xe,we.data)}}}else{Be=w.mipmaps,ue&&Fe&&(Be.length>0&&ot++,t.texStorage2D(s.TEXTURE_CUBE_MAP,ot,ge,z[0].width,z[0].height));for(let Te=0;Te<6;Te++)if(ee){ue?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,z[Te].width,z[Te].height,be,xe,z[Te].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,ge,z[Te].width,z[Te].height,0,be,xe,z[Te].data);for(let N=0;N<Be.length;N++){let te=Be[N].image[Te].image;ue?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,N+1,0,0,te.width,te.height,be,xe,te.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,N+1,ge,te.width,te.height,0,be,xe,te.data)}}else{ue?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,be,xe,z[Te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,ge,be,xe,z[Te]);for(let N=0;N<Be.length;N++){let we=Be[N];ue?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,N+1,0,0,be,xe,we.image[Te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,N+1,ge,be,xe,we.image[Te])}}}x(w,Re)&&v(s.TEXTURE_CUBE_MAP),ae.__version=me.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function Le(A,w,B,pe,me,ae){let Ie=r.convert(B.format,B.colorSpace),G=r.convert(B.type),de=y(B.internalFormat,Ie,G,B.colorSpace);if(!n.get(w).__hasExternalTextures){let ee=Math.max(1,w.width>>ae),z=Math.max(1,w.height>>ae);me===s.TEXTURE_3D||me===s.TEXTURE_2D_ARRAY?t.texImage3D(me,ae,de,ee,z,w.depth,0,Ie,G,null):t.texImage2D(me,ae,de,ee,z,0,Ie,G,null)}t.bindFramebuffer(s.FRAMEBUFFER,A),V(w)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,me,n.get(B).__webglTexture,0,se(w)):(me===s.TEXTURE_2D||me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pe,me,n.get(B).__webglTexture,ae),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Z(A,w,B){if(s.bindRenderbuffer(s.RENDERBUFFER,A),w.depthBuffer&&!w.stencilBuffer){let pe=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(B||V(w)){let me=w.depthTexture;me&&me.isDepthTexture&&(me.type===ni?pe=s.DEPTH_COMPONENT32F:me.type===li&&(pe=s.DEPTH_COMPONENT24));let ae=se(w);V(w)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ae,pe,w.width,w.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ae,pe,w.width,w.height)}else s.renderbufferStorage(s.RENDERBUFFER,pe,w.width,w.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,A)}else if(w.depthBuffer&&w.stencilBuffer){let pe=se(w);B&&V(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,pe,s.DEPTH24_STENCIL8,w.width,w.height):V(w)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pe,s.DEPTH24_STENCIL8,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,A)}else{let pe=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let me=0;me<pe.length;me++){let ae=pe[me],Ie=r.convert(ae.format,ae.colorSpace),G=r.convert(ae.type),de=y(ae.internalFormat,Ie,G,ae.colorSpace),Ee=se(w);B&&V(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ee,de,w.width,w.height):V(w)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ee,de,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,de,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function k(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),F(w.depthTexture,0);let pe=n.get(w.depthTexture).__webglTexture,me=se(w);if(w.depthTexture.format===Ps)V(w)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pe,0,me):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pe,0);else if(w.depthTexture.format===Tr)V(w)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pe,0,me):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function ne(A){let w=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");k(w.__webglFramebuffer,A)}else if(B){w.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[pe]),w.__webglDepthbuffer[pe]=s.createRenderbuffer(),Z(w.__webglDepthbuffer[pe],A,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=s.createRenderbuffer(),Z(w.__webglDepthbuffer,A,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function _e(A,w,B){let pe=n.get(A);w!==void 0&&Le(pe.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&ne(A)}function L(A){let w=A.texture,B=n.get(A),pe=n.get(w);A.addEventListener("dispose",C),A.isWebGLMultipleRenderTargets!==!0&&(pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture()),pe.__version=w.version,o.memory.textures++);let me=A.isWebGLCubeRenderTarget===!0,ae=A.isWebGLMultipleRenderTargets===!0,Ie=p(A)||a;if(me){B.__webglFramebuffer=[];for(let G=0;G<6;G++)if(a&&w.mipmaps&&w.mipmaps.length>0){B.__webglFramebuffer[G]=[];for(let de=0;de<w.mipmaps.length;de++)B.__webglFramebuffer[G][de]=s.createFramebuffer()}else B.__webglFramebuffer[G]=s.createFramebuffer()}else{if(a&&w.mipmaps&&w.mipmaps.length>0){B.__webglFramebuffer=[];for(let G=0;G<w.mipmaps.length;G++)B.__webglFramebuffer[G]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(ae)if(i.drawBuffers){let G=A.texture;for(let de=0,Ee=G.length;de<Ee;de++){let ee=n.get(G[de]);ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&V(A)===!1){let G=ae?w:[w];B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let de=0;de<G.length;de++){let Ee=G[de];B.__webglColorRenderbuffer[de]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[de]);let ee=r.convert(Ee.format,Ee.colorSpace),z=r.convert(Ee.type),ve=y(Ee.internalFormat,ee,z,Ee.colorSpace,A.isXRRenderTarget===!0),Re=se(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Re,ve,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,B.__webglColorRenderbuffer[de])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),Z(B.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(me){t.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),K(s.TEXTURE_CUBE_MAP,w,Ie);for(let G=0;G<6;G++)if(a&&w.mipmaps&&w.mipmaps.length>0)for(let de=0;de<w.mipmaps.length;de++)Le(B.__webglFramebuffer[G][de],A,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+G,de);else Le(B.__webglFramebuffer[G],A,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+G,0);x(w,Ie)&&v(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){let G=A.texture;for(let de=0,Ee=G.length;de<Ee;de++){let ee=G[de],z=n.get(ee);t.bindTexture(s.TEXTURE_2D,z.__webglTexture),K(s.TEXTURE_2D,ee,Ie),Le(B.__webglFramebuffer,A,ee,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,0),x(ee,Ie)&&v(s.TEXTURE_2D)}t.unbindTexture()}else{let G=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?G=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(G,pe.__webglTexture),K(G,w,Ie),a&&w.mipmaps&&w.mipmaps.length>0)for(let de=0;de<w.mipmaps.length;de++)Le(B.__webglFramebuffer[de],A,w,s.COLOR_ATTACHMENT0,G,de);else Le(B.__webglFramebuffer,A,w,s.COLOR_ATTACHMENT0,G,0);x(w,Ie)&&v(G),t.unbindTexture()}A.depthBuffer&&ne(A)}function j(A){let w=p(A)||a,B=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let pe=0,me=B.length;pe<me;pe++){let ae=B[pe];if(x(ae,w)){let Ie=A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,G=n.get(ae).__webglTexture;t.bindTexture(Ie,G),v(Ie),t.unbindTexture()}}}function q(A){if(a&&A.samples>0&&V(A)===!1){let w=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],B=A.width,pe=A.height,me=s.COLOR_BUFFER_BIT,ae=[],Ie=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,G=n.get(A),de=A.isWebGLMultipleRenderTargets===!0;if(de)for(let Ee=0;Ee<w.length;Ee++)t.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,G.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,G.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,G.__webglFramebuffer);for(let Ee=0;Ee<w.length;Ee++){ae.push(s.COLOR_ATTACHMENT0+Ee),A.depthBuffer&&ae.push(Ie);let ee=G.__ignoreDepthValues!==void 0?G.__ignoreDepthValues:!1;if(ee===!1&&(A.depthBuffer&&(me|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&(me|=s.STENCIL_BUFFER_BIT)),de&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,G.__webglColorRenderbuffer[Ee]),ee===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Ie]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Ie])),de){let z=n.get(w[Ee]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,z,0)}s.blitFramebuffer(0,0,B,pe,0,0,B,pe,me,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ae)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),de)for(let Ee=0;Ee<w.length;Ee++){t.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,G.__webglColorRenderbuffer[Ee]);let ee=n.get(w[Ee]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,G.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,ee,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,G.__webglMultisampledFramebuffer)}}function se(A){return Math.min(i.maxSamples,A.samples)}function V(A){let w=n.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ye(A){let w=o.render.frame;h.get(A)!==w&&(h.set(A,w),A.update())}function Me(A,w){let B=A.colorSpace,pe=A.format,me=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===lh||B!==Et&&B!==zn&&(lt.getTransfer(B)===ft?a===!1?e.has("EXT_sRGB")===!0&&pe===xn?(A.format=lh,A.minFilter=Kt,A.generateMipmaps=!1):w=Ya.sRGBToLinear(w):(pe!==xn||me!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),w}this.allocateTextureUnit=I,this.resetTextureUnits=H,this.setTexture2D=F,this.setTexture2DArray=Y,this.setTexture3D=J,this.setTextureCube=X,this.rebindTextures=_e,this.setupRenderTarget=L,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=V}function MS(s,e,t){let n=t.isWebGL2;function i(r,o=zn){let a,l=lt.getTransfer(o);if(r===$i)return s.UNSIGNED_BYTE;if(r===qp)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Yp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===t_)return s.BYTE;if(r===n_)return s.SHORT;if(r===eu)return s.UNSIGNED_SHORT;if(r===Xp)return s.INT;if(r===li)return s.UNSIGNED_INT;if(r===ni)return s.FLOAT;if(r===pn)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===i_)return s.ALPHA;if(r===xn)return s.RGBA;if(r===s_)return s.LUMINANCE;if(r===r_)return s.LUMINANCE_ALPHA;if(r===Ps)return s.DEPTH_COMPONENT;if(r===Tr)return s.DEPTH_STENCIL;if(r===lh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===o_)return s.RED;if(r===Zp)return s.RED_INTEGER;if(r===a_)return s.RG;if(r===Kp)return s.RG_INTEGER;if(r===Jp)return s.RGBA_INTEGER;if(r===Sc||r===bc||r===Ec||r===Tc)if(l===ft)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Sc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===bc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ec)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Tc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Sc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===bc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ec)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Tc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===nf||r===sf||r===rf||r===of)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===nf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===sf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===rf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===of)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===$p)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===af||r===lf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===af)return l===ft?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===lf)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===cf||r===hf||r===uf||r===df||r===ff||r===pf||r===mf||r===gf||r===_f||r===vf||r===xf||r===yf||r===Mf||r===Sf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===cf)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===hf)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===uf)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===df)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ff)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===pf)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===mf)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===gf)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===_f)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===vf)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===xf)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===yf)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Mf)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Sf)return l===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===wc||r===bf||r===Ef)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===wc)return l===ft?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===bf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ef)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===l_||r===Tf||r===wf||r===Af)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===wc)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Tf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===wf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Af)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Cs?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var Sh=class extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ot=class extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}},SS={type:"move"},vo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ot,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ot,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ot,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let g of e.hand.values()){let p=t.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(SS)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ot;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},bh=class extends es{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,_=null,g=t.getContextAttributes(),p=null,m=null,x=[],v=[],y=new re,b=null,S=new Dt;S.layers.enable(1),S.viewport=new ct;let T=new Dt;T.layers.enable(2),T.viewport=new ct;let C=[S,T],M=new Sh;M.layers.enable(1),M.layers.enable(2);let E=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let oe=x[K];return oe===void 0&&(oe=new vo,x[K]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(K){let oe=x[K];return oe===void 0&&(oe=new vo,x[K]=oe),oe.getGripSpace()},this.getHand=function(K){let oe=x[K];return oe===void 0&&(oe=new vo,x[K]=oe),oe.getHandSpace()};function O(K){let oe=v.indexOf(K.inputSource);if(oe===-1)return;let Se=x[oe];Se!==void 0&&(Se.update(K.inputSource,K.frame,c||o),Se.dispatchEvent({type:K.type,data:K.inputSource}))}function H(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",I);for(let K=0;K<x.length;K++){let oe=v[K];oe!==null&&(v[K]=null,x[K].disconnect(oe))}E=null,D=null,e.setRenderTarget(p),f=null,d=null,u=null,i=null,m=null,he.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",H),i.addEventListener("inputsourceschange",I),g.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(y),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let oe={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,oe),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),m=new Vt(f.framebufferWidth,f.framebufferHeight,{format:xn,type:$i,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let oe=null,Se=null,Ae=null;g.depth&&(Ae=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=g.stencil?Tr:Ps,Se=g.stencil?Cs:li);let Le={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(Le),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),m=new Vt(d.textureWidth,d.textureHeight,{format:xn,type:$i,depthTexture:new Pr(d.textureWidth,d.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});let Z=e.properties.get(m);Z.__ignoreDepthValues=d.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),he.setContext(i),he.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function I(K){for(let oe=0;oe<K.removed.length;oe++){let Se=K.removed[oe],Ae=v.indexOf(Se);Ae>=0&&(v[Ae]=null,x[Ae].disconnect(Se))}for(let oe=0;oe<K.added.length;oe++){let Se=K.added[oe],Ae=v.indexOf(Se);if(Ae===-1){for(let Z=0;Z<x.length;Z++)if(Z>=v.length){v.push(Se),Ae=Z;break}else if(v[Z]===null){v[Z]=Se,Ae=Z;break}if(Ae===-1)break}let Le=x[Ae];Le&&Le.connect(Se)}}let U=new R,F=new R;function Y(K,oe,Se){U.setFromMatrixPosition(oe.matrixWorld),F.setFromMatrixPosition(Se.matrixWorld);let Ae=U.distanceTo(F),Le=oe.projectionMatrix.elements,Z=Se.projectionMatrix.elements,k=Le[14]/(Le[10]-1),ne=Le[14]/(Le[10]+1),_e=(Le[9]+1)/Le[5],L=(Le[9]-1)/Le[5],j=(Le[8]-1)/Le[0],q=(Z[8]+1)/Z[0],se=k*j,V=k*q,ye=Ae/(-j+q),Me=ye*-j;oe.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Me),K.translateZ(ye),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();let A=k+ye,w=ne+ye,B=se-Me,pe=V+(Ae-Me),me=_e*ne/w*A,ae=L*ne/w*A;K.projectionMatrix.makePerspective(B,pe,me,ae,A,w),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function J(K,oe){oe===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(oe.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;M.near=T.near=S.near=K.near,M.far=T.far=S.far=K.far,(E!==M.near||D!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),E=M.near,D=M.far);let oe=K.parent,Se=M.cameras;J(M,oe);for(let Ae=0;Ae<Se.length;Ae++)J(Se[Ae],oe);Se.length===2?Y(M,S,T):M.projectionMatrix.copy(S.projectionMatrix),X(K,M,oe)};function X(K,oe,Se){Se===null?K.matrix.copy(oe.matrixWorld):(K.matrix.copy(Se.matrixWorld),K.matrix.invert(),K.matrix.multiply(oe.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(oe.projectionMatrix),K.projectionMatrixInverse.copy(oe.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ar*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)};let le=null;function ce(K,oe){if(h=oe.getViewerPose(c||o),_=oe,h!==null){let Se=h.views;f!==null&&(e.setRenderTargetFramebuffer(m,f.framebuffer),e.setRenderTarget(m));let Ae=!1;Se.length!==M.cameras.length&&(M.cameras.length=0,Ae=!0);for(let Le=0;Le<Se.length;Le++){let Z=Se[Le],k=null;if(f!==null)k=f.getViewport(Z);else{let _e=u.getViewSubImage(d,Z);k=_e.viewport,Le===0&&(e.setRenderTargetTextures(m,_e.colorTexture,d.ignoreDepthValues?void 0:_e.depthStencilTexture),e.setRenderTarget(m))}let ne=C[Le];ne===void 0&&(ne=new Dt,ne.layers.enable(Le),ne.viewport=new ct,C[Le]=ne),ne.matrix.fromArray(Z.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(Z.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(k.x,k.y,k.width,k.height),Le===0&&(M.matrix.copy(ne.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Ae===!0&&M.cameras.push(ne)}}for(let Se=0;Se<x.length;Se++){let Ae=v[Se],Le=x[Se];Ae!==null&&Le!==void 0&&Le.update(Ae,oe,c||o)}le&&le(K,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),_=null}let he=new rm;he.setAnimationLoop(ce),this.setAnimationLoop=function(K){le=K},this.dispose=function(){}}};function bS(s,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,sm(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,x,v,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),_(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),g(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,x,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ft&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ft&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let x=e.get(m).envMap;if(x&&(p.envMap.value=x,p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;let v=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*v,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,x,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*x,p.scale.value=v*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,x){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ft&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){let x=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ES(s,e,t,n){let i={},r={},o=[],a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){let y=v.program;n.uniformBlockBinding(x,y)}function c(x,v){let y=i[x.id];y===void 0&&(_(x),y=h(x),i[x.id]=y,x.addEventListener("dispose",p));let b=v.program;n.updateUBOMapping(x,b);let S=e.render.frame;r[x.id]!==S&&(d(x),r[x.id]=S)}function h(x){let v=u();x.__bindingPointIndex=v;let y=s.createBuffer(),b=x.__size,S=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,b,S),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,y),y}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let v=i[x.id],y=x.uniforms,b=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let S=0,T=y.length;S<T;S++){let C=Array.isArray(y[S])?y[S]:[y[S]];for(let M=0,E=C.length;M<E;M++){let D=C[M];if(f(D,S,M,b)===!0){let O=D.__offset,H=Array.isArray(D.value)?D.value:[D.value],I=0;for(let U=0;U<H.length;U++){let F=H[U],Y=g(F);typeof F=="number"||typeof F=="boolean"?(D.__data[0]=F,s.bufferSubData(s.UNIFORM_BUFFER,O+I,D.__data)):F.isMatrix3?(D.__data[0]=F.elements[0],D.__data[1]=F.elements[1],D.__data[2]=F.elements[2],D.__data[3]=0,D.__data[4]=F.elements[3],D.__data[5]=F.elements[4],D.__data[6]=F.elements[5],D.__data[7]=0,D.__data[8]=F.elements[6],D.__data[9]=F.elements[7],D.__data[10]=F.elements[8],D.__data[11]=0):(F.toArray(D.__data,I),I+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,v,y,b){let S=x.value,T=v+"_"+y;if(b[T]===void 0)return typeof S=="number"||typeof S=="boolean"?b[T]=S:b[T]=S.clone(),!0;{let C=b[T];if(typeof S=="number"||typeof S=="boolean"){if(C!==S)return b[T]=S,!0}else if(C.equals(S)===!1)return C.copy(S),!0}return!1}function _(x){let v=x.uniforms,y=0,b=16;for(let T=0,C=v.length;T<C;T++){let M=Array.isArray(v[T])?v[T]:[v[T]];for(let E=0,D=M.length;E<D;E++){let O=M[E],H=Array.isArray(O.value)?O.value:[O.value];for(let I=0,U=H.length;I<U;I++){let F=H[I],Y=g(F),J=y%b;J!==0&&b-J<Y.boundary&&(y+=b-J),O.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=Y.storage}}}let S=y%b;return S>0&&(y+=b-S),x.__size=y,x.__cache={},this}function g(x){let v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function p(x){let v=x.target;v.removeEventListener("dispose",p);let y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function m(){for(let x in i)s.deleteBuffer(i[x]);o=[],i={},r={}}return{bind:l,update:c,dispose:m}}var wo=class{constructor(e={}){let{canvas:t=N_(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;let f=new Uint32Array(4),_=new Int32Array(4),g=null,p=null,m=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ut,this._useLegacyLights=!1,this.toneMapping=Ji,this.toneMappingExposure=1;let v=this,y=!1,b=0,S=0,T=null,C=-1,M=null,E=new ct,D=new ct,O=null,H=new Ue(0),I=0,U=t.width,F=t.height,Y=1,J=null,X=null,le=new ct(0,0,U,F),ce=new ct(0,0,U,F),he=!1,K=new To,oe=!1,Se=!1,Ae=null,Le=new Ye,Z=new re,k=new R,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function _e(){return T===null?Y:1}let L=n;function j(P,W){for(let Q=0;Q<P.length;Q++){let ie=P[Q],$=t.getContext(ie,W);if($!==null)return $}return null}try{let P={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yh}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",N,!1),t.addEventListener("webglcontextcreationerror",we,!1),L===null){let W=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&W.shift(),L=j(W,P),L===null)throw j(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&L instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let q,se,V,ye,Me,A,w,B,pe,me,ae,Ie,G,de,Ee,ee,z,ve,Re,be,xe,ge,ue,Fe;function ot(){q=new Gy(L),se=new Fy(L,q,e),q.init(se),ge=new MS(L,q,se),V=new xS(L,q,se),ye=new qy(L),Me=new aS,A=new yS(L,q,V,Me,se,ge,ye),w=new zy(v),B=new Vy(v),pe=new ev(L,se),ue=new Uy(L,q,pe,se),me=new Wy(L,pe,ye,ue),ae=new Jy(L,me,pe,ye),Re=new Ky(L,se,A),ee=new By(Me),Ie=new oS(v,w,B,q,se,ue,ee),G=new bS(v,Me),de=new cS,Ee=new mS(q,se),ve=new Ny(v,w,B,V,ae,d,l),z=new vS(v,ae,se),Fe=new ES(L,ye,se,V),be=new Oy(L,q,ye,se),xe=new Xy(L,q,ye,se),ye.programs=Ie.programs,v.capabilities=se,v.extensions=q,v.properties=Me,v.renderLists=de,v.shadowMap=z,v.state=V,v.info=ye}ot();let Be=new bh(v,L);this.xr=Be,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let P=q.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=q.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(P){P!==void 0&&(Y=P,this.setSize(U,F,!1))},this.getSize=function(P){return P.set(U,F)},this.setSize=function(P,W,Q=!0){if(Be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=P,F=W,t.width=Math.floor(P*Y),t.height=Math.floor(W*Y),Q===!0&&(t.style.width=P+"px",t.style.height=W+"px"),this.setViewport(0,0,P,W)},this.getDrawingBufferSize=function(P){return P.set(U*Y,F*Y).floor()},this.setDrawingBufferSize=function(P,W,Q){U=P,F=W,Y=Q,t.width=Math.floor(P*Q),t.height=Math.floor(W*Q),this.setViewport(0,0,P,W)},this.getCurrentViewport=function(P){return P.copy(E)},this.getViewport=function(P){return P.copy(le)},this.setViewport=function(P,W,Q,ie){P.isVector4?le.set(P.x,P.y,P.z,P.w):le.set(P,W,Q,ie),V.viewport(E.copy(le).multiplyScalar(Y).floor())},this.getScissor=function(P){return P.copy(ce)},this.setScissor=function(P,W,Q,ie){P.isVector4?ce.set(P.x,P.y,P.z,P.w):ce.set(P,W,Q,ie),V.scissor(D.copy(ce).multiplyScalar(Y).floor())},this.getScissorTest=function(){return he},this.setScissorTest=function(P){V.setScissorTest(he=P)},this.setOpaqueSort=function(P){J=P},this.setTransparentSort=function(P){X=P},this.getClearColor=function(P){return P.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor.apply(ve,arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha.apply(ve,arguments)},this.clear=function(P=!0,W=!0,Q=!0){let ie=0;if(P){let $=!1;if(T!==null){let Ne=T.texture.format;$=Ne===Jp||Ne===Kp||Ne===Zp}if($){let Ne=T.texture.type,ze=Ne===$i||Ne===li||Ne===eu||Ne===Cs||Ne===qp||Ne===Yp,Ge=ve.getClearColor(),Xe=ve.getClearAlpha(),Qe=Ge.r,Ze=Ge.g,Je=Ge.b;ze?(f[0]=Qe,f[1]=Ze,f[2]=Je,f[3]=Xe,L.clearBufferuiv(L.COLOR,0,f)):(_[0]=Qe,_[1]=Ze,_[2]=Je,_[3]=Xe,L.clearBufferiv(L.COLOR,0,_))}else ie|=L.COLOR_BUFFER_BIT}W&&(ie|=L.DEPTH_BUFFER_BIT),Q&&(ie|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",N,!1),t.removeEventListener("webglcontextcreationerror",we,!1),de.dispose(),Ee.dispose(),Me.dispose(),w.dispose(),B.dispose(),ae.dispose(),ue.dispose(),Fe.dispose(),Ie.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",We),Be.removeEventListener("sessionend",He),Ae&&(Ae.dispose(),Ae=null),it.stop()};function Te(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;let P=ye.autoReset,W=z.enabled,Q=z.autoUpdate,ie=z.needsUpdate,$=z.type;ot(),ye.autoReset=P,z.enabled=W,z.autoUpdate=Q,z.needsUpdate=ie,z.type=$}function we(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function te(P){let W=P.target;W.removeEventListener("dispose",te),Ce(W)}function Ce(P){De(P),Me.remove(P)}function De(P){let W=Me.get(P).programs;W!==void 0&&(W.forEach(function(Q){Ie.releaseProgram(Q)}),P.isShaderMaterial&&Ie.releaseShaderCache(P))}this.renderBufferDirect=function(P,W,Q,ie,$,Ne){W===null&&(W=ne);let ze=$.isMesh&&$.matrixWorld.determinant()<0,Ge=y0(P,W,Q,ie,$);V.setMaterial(ie,ze);let Xe=Q.index,Qe=1;if(ie.wireframe===!0){if(Xe=me.getWireframeAttribute(Q),Xe===void 0)return;Qe=2}let Ze=Q.drawRange,Je=Q.attributes.position,It=Ze.start*Qe,Cn=(Ze.start+Ze.count)*Qe;Ne!==null&&(It=Math.max(It,Ne.start*Qe),Cn=Math.min(Cn,(Ne.start+Ne.count)*Qe)),Xe!==null?(It=Math.max(It,0),Cn=Math.min(Cn,Xe.count)):Je!=null&&(It=Math.max(It,0),Cn=Math.min(Cn,Je.count));let Yt=Cn-It;if(Yt<0||Yt===1/0)return;ue.setup($,ie,Ge,Q,Xe);let yi,St=be;if(Xe!==null&&(yi=pe.get(Xe),St=xe,St.setIndex(yi)),$.isMesh)ie.wireframe===!0?(V.setLineWidth(ie.wireframeLinewidth*_e()),St.setMode(L.LINES)):St.setMode(L.TRIANGLES);else if($.isLine){let et=ie.linewidth;et===void 0&&(et=1),V.setLineWidth(et*_e()),$.isLineSegments?St.setMode(L.LINES):$.isLineLoop?St.setMode(L.LINE_LOOP):St.setMode(L.LINE_STRIP)}else $.isPoints?St.setMode(L.POINTS):$.isSprite&&St.setMode(L.TRIANGLES);if($.isBatchedMesh)St.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else if($.isInstancedMesh)St.renderInstances(It,Yt,$.count);else if(Q.isInstancedBufferGeometry){let et=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,vc=Math.min(Q.instanceCount,et);St.renderInstances(It,Yt,vc)}else St.render(It,Yt)};function Ke(P,W,Q){P.transparent===!0&&P.side===fn&&P.forceSinglePass===!1?(P.side=Ft,P.needsUpdate=!0,zt(P,W,Q),P.side=kn,P.needsUpdate=!0,zt(P,W,Q),P.side=fn):zt(P,W,Q)}this.compile=function(P,W,Q=null){Q===null&&(Q=P),p=Ee.get(Q),p.init(),x.push(p),Q.traverseVisible(function($){$.isLight&&$.layers.test(W.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),P!==Q&&P.traverseVisible(function($){$.isLight&&$.layers.test(W.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),p.setupLights(v._useLegacyLights);let ie=new Set;return P.traverse(function($){let Ne=$.material;if(Ne)if(Array.isArray(Ne))for(let ze=0;ze<Ne.length;ze++){let Ge=Ne[ze];Ke(Ge,Q,$),ie.add(Ge)}else Ke(Ne,Q,$),ie.add(Ne)}),x.pop(),p=null,ie},this.compileAsync=function(P,W,Q=null){let ie=this.compile(P,W,Q);return new Promise($=>{function Ne(){if(ie.forEach(function(ze){Me.get(ze).currentProgram.isReady()&&ie.delete(ze)}),ie.size===0){$(P);return}setTimeout(Ne,10)}q.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let fe=null;function ke(P){fe&&fe(P)}function We(){it.stop()}function He(){it.start()}let it=new rm;it.setAnimationLoop(ke),typeof self<"u"&&it.setContext(self),this.setAnimationLoop=function(P){fe=P,Be.setAnimationLoop(P),P===null?it.stop():it.start()},Be.addEventListener("sessionstart",We),Be.addEventListener("sessionend",He),this.render=function(P,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(W),W=Be.getCamera()),P.isScene===!0&&P.onBeforeRender(v,P,W,T),p=Ee.get(P,x.length),p.init(),x.push(p),Le.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),K.setFromProjectionMatrix(Le),Se=this.localClippingEnabled,oe=ee.init(this.clippingPlanes,Se),g=de.get(P,m.length),g.init(),m.push(g),vt(P,W,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(J,X),this.info.render.frame++,oe===!0&&ee.beginShadows();let Q=p.state.shadowsArray;if(z.render(Q,P,W),oe===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),ve.render(g,P),p.setupLights(v._useLegacyLights),W.isArrayCamera){let ie=W.cameras;for(let $=0,Ne=ie.length;$<Ne;$++){let ze=ie[$];An(g,P,ze,ze.viewport)}}else An(g,P,W);T!==null&&(A.updateMultisampleRenderTarget(T),A.updateRenderTargetMipmap(T)),P.isScene===!0&&P.onAfterRender(v,P,W),ue.resetDefaultState(),C=-1,M=null,x.pop(),x.length>0?p=x[x.length-1]:p=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function vt(P,W,Q,ie){if(P.visible===!1)return;if(P.layers.test(W.layers)){if(P.isGroup)Q=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(W);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||K.intersectsSprite(P)){ie&&k.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Le);let ze=ae.update(P),Ge=P.material;Ge.visible&&g.push(P,ze,Ge,Q,k.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||K.intersectsObject(P))){let ze=ae.update(P),Ge=P.material;if(ie&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),k.copy(P.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),k.copy(ze.boundingSphere.center)),k.applyMatrix4(P.matrixWorld).applyMatrix4(Le)),Array.isArray(Ge)){let Xe=ze.groups;for(let Qe=0,Ze=Xe.length;Qe<Ze;Qe++){let Je=Xe[Qe],It=Ge[Je.materialIndex];It&&It.visible&&g.push(P,ze,It,Q,k.z,Je)}}else Ge.visible&&g.push(P,ze,Ge,Q,k.z,null)}}let Ne=P.children;for(let ze=0,Ge=Ne.length;ze<Ge;ze++)vt(Ne[ze],W,Q,ie)}function An(P,W,Q,ie){let $=P.opaque,Ne=P.transmissive,ze=P.transparent;p.setupLightsView(Q),oe===!0&&ee.setGlobalState(v.clippingPlanes,Q),Ne.length>0&&On($,Ne,W,Q),ie&&V.viewport(E.copy(ie)),$.length>0&&Rn($,W,Q),Ne.length>0&&Rn(Ne,W,Q),ze.length>0&&Rn(ze,W,Q),V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function On(P,W,Q,ie){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;let Ne=se.isWebGL2;Ae===null&&(Ae=new Vt(1,1,{generateMipmaps:!0,type:q.has("EXT_color_buffer_half_float")?pn:$i,minFilter:Qi,samples:Ne?4:0})),v.getDrawingBufferSize(Z),Ne?Ae.setSize(Z.x,Z.y):Ae.setSize(qa(Z.x),qa(Z.y));let ze=v.getRenderTarget();v.setRenderTarget(Ae),v.getClearColor(H),I=v.getClearAlpha(),I<1&&v.setClearColor(16777215,.5),v.clear();let Ge=v.toneMapping;v.toneMapping=Ji,Rn(P,Q,ie),A.updateMultisampleRenderTarget(Ae),A.updateRenderTargetMipmap(Ae);let Xe=!1;for(let Qe=0,Ze=W.length;Qe<Ze;Qe++){let Je=W[Qe],It=Je.object,Cn=Je.geometry,Yt=Je.material,yi=Je.group;if(Yt.side===fn&&It.layers.test(ie.layers)){let St=Yt.side;Yt.side=Ft,Yt.needsUpdate=!0,Mt(It,Q,ie,Cn,Yt,yi),Yt.side=St,Yt.needsUpdate=!0,Xe=!0}}Xe===!0&&(A.updateMultisampleRenderTarget(Ae),A.updateRenderTargetMipmap(Ae)),v.setRenderTarget(ze),v.setClearColor(H,I),v.toneMapping=Ge}function Rn(P,W,Q){let ie=W.isScene===!0?W.overrideMaterial:null;for(let $=0,Ne=P.length;$<Ne;$++){let ze=P[$],Ge=ze.object,Xe=ze.geometry,Qe=ie===null?ze.material:ie,Ze=ze.group;Ge.layers.test(Q.layers)&&Mt(Ge,W,Q,Xe,Qe,Ze)}}function Mt(P,W,Q,ie,$,Ne){P.onBeforeRender(v,W,Q,ie,$,Ne),P.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),$.onBeforeRender(v,W,Q,ie,P,Ne),$.transparent===!0&&$.side===fn&&$.forceSinglePass===!1?($.side=Ft,$.needsUpdate=!0,v.renderBufferDirect(Q,W,ie,$,P,Ne),$.side=kn,$.needsUpdate=!0,v.renderBufferDirect(Q,W,ie,$,P,Ne),$.side=fn):v.renderBufferDirect(Q,W,ie,$,P,Ne),P.onAfterRender(v,W,Q,ie,$,Ne)}function zt(P,W,Q){W.isScene!==!0&&(W=ne);let ie=Me.get(P),$=p.state.lights,Ne=p.state.shadowsArray,ze=$.state.version,Ge=Ie.getParameters(P,$.state,Ne,W,Q),Xe=Ie.getProgramCacheKey(Ge),Qe=ie.programs;ie.environment=P.isMeshStandardMaterial?W.environment:null,ie.fog=W.fog,ie.envMap=(P.isMeshStandardMaterial?B:w).get(P.envMap||ie.environment),Qe===void 0&&(P.addEventListener("dispose",te),Qe=new Map,ie.programs=Qe);let Ze=Qe.get(Xe);if(Ze!==void 0){if(ie.currentProgram===Ze&&ie.lightsStateVersion===ze)return so(P,Ge),Ze}else Ge.uniforms=Ie.getUniforms(P),P.onBuild(Q,Ge,v),P.onBeforeCompile(Ge,v),Ze=Ie.acquireProgram(Ge,Xe),Qe.set(Xe,Ze),ie.uniforms=Ge.uniforms;let Je=ie.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Je.clippingPlanes=ee.uniform),so(P,Ge),ie.needsLights=S0(P),ie.lightsStateVersion=ze,ie.needsLights&&(Je.ambientLightColor.value=$.state.ambient,Je.lightProbe.value=$.state.probe,Je.directionalLights.value=$.state.directional,Je.directionalLightShadows.value=$.state.directionalShadow,Je.spotLights.value=$.state.spot,Je.spotLightShadows.value=$.state.spotShadow,Je.rectAreaLights.value=$.state.rectArea,Je.ltc_1.value=$.state.rectAreaLTC1,Je.ltc_2.value=$.state.rectAreaLTC2,Je.pointLights.value=$.state.point,Je.pointLightShadows.value=$.state.pointShadow,Je.hemisphereLights.value=$.state.hemi,Je.directionalShadowMap.value=$.state.directionalShadowMap,Je.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Je.spotShadowMap.value=$.state.spotShadowMap,Je.spotLightMatrix.value=$.state.spotLightMatrix,Je.spotLightMap.value=$.state.spotLightMap,Je.pointShadowMap.value=$.state.pointShadowMap,Je.pointShadowMatrix.value=$.state.pointShadowMatrix),ie.currentProgram=Ze,ie.uniformsList=null,Ze}function Qs(P){if(P.uniformsList===null){let W=P.currentProgram.getUniforms();P.uniformsList=Sr.seqWithValue(W.seq,P.uniforms)}return P.uniformsList}function so(P,W){let Q=Me.get(P);Q.outputColorSpace=W.outputColorSpace,Q.batching=W.batching,Q.instancing=W.instancing,Q.instancingColor=W.instancingColor,Q.skinning=W.skinning,Q.morphTargets=W.morphTargets,Q.morphNormals=W.morphNormals,Q.morphColors=W.morphColors,Q.morphTargetsCount=W.morphTargetsCount,Q.numClippingPlanes=W.numClippingPlanes,Q.numIntersection=W.numClipIntersection,Q.vertexAlphas=W.vertexAlphas,Q.vertexTangents=W.vertexTangents,Q.toneMapping=W.toneMapping}function y0(P,W,Q,ie,$){W.isScene!==!0&&(W=ne),A.resetTextureUnits();let Ne=W.fog,ze=ie.isMeshStandardMaterial?W.environment:null,Ge=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Et,Xe=(ie.isMeshStandardMaterial?B:w).get(ie.envMap||ze),Qe=ie.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Ze=!!Q.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Je=!!Q.morphAttributes.position,It=!!Q.morphAttributes.normal,Cn=!!Q.morphAttributes.color,Yt=Ji;ie.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Yt=v.toneMapping);let yi=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,St=yi!==void 0?yi.length:0,et=Me.get(ie),vc=p.state.lights;if(oe===!0&&(Se===!0||P!==M)){let Fn=P===M&&ie.id===C;ee.setState(ie,P,Fn)}let Ct=!1;ie.version===et.__version?(et.needsLights&&et.lightsStateVersion!==vc.state.version||et.outputColorSpace!==Ge||$.isBatchedMesh&&et.batching===!1||!$.isBatchedMesh&&et.batching===!0||$.isInstancedMesh&&et.instancing===!1||!$.isInstancedMesh&&et.instancing===!0||$.isSkinnedMesh&&et.skinning===!1||!$.isSkinnedMesh&&et.skinning===!0||$.isInstancedMesh&&et.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&et.instancingColor===!1&&$.instanceColor!==null||et.envMap!==Xe||ie.fog===!0&&et.fog!==Ne||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==ee.numPlanes||et.numIntersection!==ee.numIntersection)||et.vertexAlphas!==Qe||et.vertexTangents!==Ze||et.morphTargets!==Je||et.morphNormals!==It||et.morphColors!==Cn||et.toneMapping!==Yt||se.isWebGL2===!0&&et.morphTargetsCount!==St)&&(Ct=!0):(Ct=!0,et.__version=ie.version);let ys=et.currentProgram;Ct===!0&&(ys=zt(ie,W,$));let Zd=!1,ro=!1,xc=!1,nn=ys.getUniforms(),Ms=et.uniforms;if(V.useProgram(ys.program)&&(Zd=!0,ro=!0,xc=!0),ie.id!==C&&(C=ie.id,ro=!0),Zd||M!==P){nn.setValue(L,"projectionMatrix",P.projectionMatrix),nn.setValue(L,"viewMatrix",P.matrixWorldInverse);let Fn=nn.map.cameraPosition;Fn!==void 0&&Fn.setValue(L,k.setFromMatrixPosition(P.matrixWorld)),se.logarithmicDepthBuffer&&nn.setValue(L,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&nn.setValue(L,"isOrthographic",P.isOrthographicCamera===!0),M!==P&&(M=P,ro=!0,xc=!0)}if($.isSkinnedMesh){nn.setOptional(L,$,"bindMatrix"),nn.setOptional(L,$,"bindMatrixInverse");let Fn=$.skeleton;Fn&&(se.floatVertexTextures?(Fn.boneTexture===null&&Fn.computeBoneTexture(),nn.setValue(L,"boneTexture",Fn.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}$.isBatchedMesh&&(nn.setOptional(L,$,"batchingTexture"),nn.setValue(L,"batchingTexture",$._matricesTexture,A));let yc=Q.morphAttributes;if((yc.position!==void 0||yc.normal!==void 0||yc.color!==void 0&&se.isWebGL2===!0)&&Re.update($,Q,ys),(ro||et.receiveShadow!==$.receiveShadow)&&(et.receiveShadow=$.receiveShadow,nn.setValue(L,"receiveShadow",$.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(Ms.envMap.value=Xe,Ms.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),ro&&(nn.setValue(L,"toneMappingExposure",v.toneMappingExposure),et.needsLights&&M0(Ms,xc),Ne&&ie.fog===!0&&G.refreshFogUniforms(Ms,Ne),G.refreshMaterialUniforms(Ms,ie,Y,F,Ae),Sr.upload(L,Qs(et),Ms,A)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Sr.upload(L,Qs(et),Ms,A),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&nn.setValue(L,"center",$.center),nn.setValue(L,"modelViewMatrix",$.modelViewMatrix),nn.setValue(L,"normalMatrix",$.normalMatrix),nn.setValue(L,"modelMatrix",$.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){let Fn=ie.uniformsGroups;for(let Mc=0,b0=Fn.length;Mc<b0;Mc++)if(se.isWebGL2){let Kd=Fn[Mc];Fe.update(Kd,ys),Fe.bind(Kd,ys)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ys}function M0(P,W){P.ambientLightColor.needsUpdate=W,P.lightProbe.needsUpdate=W,P.directionalLights.needsUpdate=W,P.directionalLightShadows.needsUpdate=W,P.pointLights.needsUpdate=W,P.pointLightShadows.needsUpdate=W,P.spotLights.needsUpdate=W,P.spotLightShadows.needsUpdate=W,P.rectAreaLights.needsUpdate=W,P.hemisphereLights.needsUpdate=W}function S0(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(P,W,Q){Me.get(P.texture).__webglTexture=W,Me.get(P.depthTexture).__webglTexture=Q;let ie=Me.get(P);ie.__hasExternalTextures=!0,ie.__hasExternalTextures&&(ie.__autoAllocateDepthBuffer=Q===void 0,ie.__autoAllocateDepthBuffer||q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,W){let Q=Me.get(P);Q.__webglFramebuffer=W,Q.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(P,W=0,Q=0){T=P,b=W,S=Q;let ie=!0,$=null,Ne=!1,ze=!1;if(P){let Xe=Me.get(P);Xe.__useDefaultFramebuffer!==void 0?(V.bindFramebuffer(L.FRAMEBUFFER,null),ie=!1):Xe.__webglFramebuffer===void 0?A.setupRenderTarget(P):Xe.__hasExternalTextures&&A.rebindTextures(P,Me.get(P.texture).__webglTexture,Me.get(P.depthTexture).__webglTexture);let Qe=P.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(ze=!0);let Ze=Me.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Ze[W])?$=Ze[W][Q]:$=Ze[W],Ne=!0):se.isWebGL2&&P.samples>0&&A.useMultisampledRTT(P)===!1?$=Me.get(P).__webglMultisampledFramebuffer:Array.isArray(Ze)?$=Ze[Q]:$=Ze,E.copy(P.viewport),D.copy(P.scissor),O=P.scissorTest}else E.copy(le).multiplyScalar(Y).floor(),D.copy(ce).multiplyScalar(Y).floor(),O=he;if(V.bindFramebuffer(L.FRAMEBUFFER,$)&&se.drawBuffers&&ie&&V.drawBuffers(P,$),V.viewport(E),V.scissor(D),V.setScissorTest(O),Ne){let Xe=Me.get(P.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+W,Xe.__webglTexture,Q)}else if(ze){let Xe=Me.get(P.texture),Qe=W||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Xe.__webglTexture,Q||0,Qe)}C=-1},this.readRenderTargetPixels=function(P,W,Q,ie,$,Ne,ze){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=Me.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&ze!==void 0&&(Ge=Ge[ze]),Ge){V.bindFramebuffer(L.FRAMEBUFFER,Ge);try{let Xe=P.texture,Qe=Xe.format,Ze=Xe.type;if(Qe!==xn&&ge.convert(Qe)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Je=Ze===pn&&(q.has("EXT_color_buffer_half_float")||se.isWebGL2&&q.has("EXT_color_buffer_float"));if(Ze!==$i&&ge.convert(Ze)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ze===ni&&(se.isWebGL2||q.has("OES_texture_float")||q.has("WEBGL_color_buffer_float")))&&!Je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=P.width-ie&&Q>=0&&Q<=P.height-$&&L.readPixels(W,Q,ie,$,ge.convert(Qe),ge.convert(Ze),Ne)}finally{let Xe=T!==null?Me.get(T).__webglFramebuffer:null;V.bindFramebuffer(L.FRAMEBUFFER,Xe)}}},this.copyFramebufferToTexture=function(P,W,Q=0){let ie=Math.pow(2,-Q),$=Math.floor(W.image.width*ie),Ne=Math.floor(W.image.height*ie);A.setTexture2D(W,0),L.copyTexSubImage2D(L.TEXTURE_2D,Q,0,0,P.x,P.y,$,Ne),V.unbindTexture()},this.copyTextureToTexture=function(P,W,Q,ie=0){let $=W.image.width,Ne=W.image.height,ze=ge.convert(Q.format),Ge=ge.convert(Q.type);A.setTexture2D(Q,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,Q.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,Q.unpackAlignment),W.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ie,P.x,P.y,$,Ne,ze,Ge,W.image.data):W.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ie,P.x,P.y,W.mipmaps[0].width,W.mipmaps[0].height,ze,W.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,ie,P.x,P.y,ze,Ge,W.image),ie===0&&Q.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),V.unbindTexture()},this.copyTextureToTexture3D=function(P,W,Q,ie,$=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Ne=P.max.x-P.min.x+1,ze=P.max.y-P.min.y+1,Ge=P.max.z-P.min.z+1,Xe=ge.convert(ie.format),Qe=ge.convert(ie.type),Ze;if(ie.isData3DTexture)A.setTexture3D(ie,0),Ze=L.TEXTURE_3D;else if(ie.isDataArrayTexture||ie.isCompressedArrayTexture)A.setTexture2DArray(ie,0),Ze=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,ie.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,ie.unpackAlignment);let Je=L.getParameter(L.UNPACK_ROW_LENGTH),It=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Cn=L.getParameter(L.UNPACK_SKIP_PIXELS),Yt=L.getParameter(L.UNPACK_SKIP_ROWS),yi=L.getParameter(L.UNPACK_SKIP_IMAGES),St=Q.isCompressedTexture?Q.mipmaps[$]:Q.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,St.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,St.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,P.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,P.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,P.min.z),Q.isDataTexture||Q.isData3DTexture?L.texSubImage3D(Ze,$,W.x,W.y,W.z,Ne,ze,Ge,Xe,Qe,St.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(Ze,$,W.x,W.y,W.z,Ne,ze,Ge,Xe,St.data)):L.texSubImage3D(Ze,$,W.x,W.y,W.z,Ne,ze,Ge,Xe,Qe,St),L.pixelStorei(L.UNPACK_ROW_LENGTH,Je),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,It),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Cn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Yt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,yi),$===0&&ie.generateMipmaps&&L.generateMipmap(Ze),V.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?A.setTextureCube(P,0):P.isData3DTexture?A.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?A.setTexture2DArray(P,0):A.setTexture2D(P,0),V.unbindTexture()},this.resetState=function(){b=0,S=0,T=null,V.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===tu?"display-p3":"srgb",t.unpackColorSpace=lt.workingColorSpace===El?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ut?Ls:Qp}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ls?ut:Et}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Eh=class extends wo{};Eh.prototype.isWebGL1Renderer=!0;var tl=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ue(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Lr=class extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Ao=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ah,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Hn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},un=new R,Ro=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ai(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ai(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ai(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ai(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array),r=dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new $e(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var _p=new R,vp=new ct,xp=new ct,TS=new R,yp=new Ye,Pa=new R,Jc=new Jt,Mp=new Ye,$c=new Li,nl=class extends Oe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=tf,this.bindMatrix=new Ye,this.bindMatrixInverse=new Ye,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Vn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Pa),this.boundingBox.expandByPoint(Pa)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Jt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Pa),this.boundingSphere.expandByPoint(Pa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jc.copy(this.boundingSphere),Jc.applyMatrix4(i),e.ray.intersectsSphere(Jc)!==!1&&(Mp.copy(i).invert(),$c.copy(e.ray).applyMatrix4(Mp),!(this.boundingBox!==null&&$c.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,$c)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ct,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===tf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===e_?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;vp.fromBufferAttribute(i.attributes.skinIndex,e),xp.fromBufferAttribute(i.attributes.skinWeight,e),_p.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=xp.getComponent(r);if(o!==0){let a=vp.getComponent(r);yp.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(TS.copy(_p).applyMatrix4(yp),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},Co=class extends ht{constructor(){super(),this.isBone=!0,this.type="Bone"}},Po=class extends on{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Ht,h=Ht,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Sp=new Ye,wS=new Ye,il=class s{constructor(e=[],t=[]){this.uuid=Hn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ye)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ye;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:wS;Sp.multiplyMatrices(a,t[r]),Sp.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Po(t,e,e,xn,ni);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Co),this.bones.push(o),this.boneInverses.push(new Ye().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},an=class extends $e{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},gr=new Ye,bp=new Ye,La=[],Ep=new Vn,AS=new Ye,ho=new Oe,uo=new Jt,mn=class extends Oe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new an(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,AS)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Vn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gr),Ep.copy(e.boundingBox).applyMatrix4(gr),this.boundingBox.union(Ep)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Jt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gr),uo.copy(e.boundingSphere).applyMatrix4(gr),this.boundingSphere.union(uo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,i=this.count;if(ho.geometry=this.geometry,ho.material=this.material,ho.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),uo.copy(this.boundingSphere),uo.applyMatrix4(n),e.ray.intersectsSphere(uo)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,gr),bp.multiplyMatrices(n,gr),ho.matrixWorld=bp,ho.raycast(e,La);for(let o=0,a=La.length;o<a;o++){let l=La[o];l.instanceId=r,l.object=this,t.push(l)}La.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new an(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var hi=class extends Dn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Tp=new R,wp=new R,Ap=new Ye,jc=new Li,Ia=new Jt,Ir=class extends ht{constructor(e=new st,t=new hi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Tp.fromBufferAttribute(t,i-1),wp.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Tp.distanceTo(wp);e.setAttribute("lineDistance",new Ve(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ia.copy(n.boundingSphere),Ia.applyMatrix4(i),Ia.radius+=r,e.ray.intersectsSphere(Ia)===!1)return;Ap.copy(i).invert(),jc.copy(e.ray).applyMatrix4(Ap);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new R,h=new R,u=new R,d=new R,f=this.isLineSegments?2:1,_=n.index,p=n.attributes.position;if(_!==null){let m=Math.max(0,o.start),x=Math.min(_.count,o.start+o.count);for(let v=m,y=x-1;v<y;v+=f){let b=_.getX(v),S=_.getX(v+1);if(c.fromBufferAttribute(p,b),h.fromBufferAttribute(p,S),jc.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let C=e.ray.origin.distanceTo(d);C<e.near||C>e.far||t.push({distance:C,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let m=Math.max(0,o.start),x=Math.min(p.count,o.start+o.count);for(let v=m,y=x-1;v<y;v+=f){if(c.fromBufferAttribute(p,v),h.fromBufferAttribute(p,v+1),jc.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let S=e.ray.origin.distanceTo(d);S<e.near||S>e.far||t.push({distance:S,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},Rp=new R,Cp=new R,Ii=class extends Ir{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Rp.fromBufferAttribute(t,i),Cp.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Rp.distanceTo(Cp);e.setAttribute("lineDistance",new Ve(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},sl=class extends Ir{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Lo=class extends Dn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Pp=new Ye,Th=new Li,Da=new Jt,Na=new R,ns=class extends ht{constructor(e=new st,t=new Lo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere),Da.applyMatrix4(i),Da.radius+=r,e.ray.intersectsSphere(Da)===!1)return;Pp.copy(i).invert(),Th.copy(e.ray).applyMatrix4(Pp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let _=d,g=f;_<g;_++){let p=c.getX(_);Na.fromBufferAttribute(u,p),Lp(Na,p,l,i,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let _=d,g=f;_<g;_++)Na.fromBufferAttribute(u,_),Lp(Na,_,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Lp(s,e,t,n,i,r,o){let a=Th.distanceSqToPoint(s);if(a<t){let l=new R;Th.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}var Gn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new re:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new R,i=[],r=[],o=[],a=new R,l=new Ye;for(let f=0;f<=e;f++){let _=f/e;i[f]=this.getTangentAt(_,new R)}r[0]=new R,o[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let _=Math.acos(kt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,_))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(kt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(i[_],f*_)),o[_].crossVectors(i[_],r[_])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Io=class extends Gn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){let n=t||new re,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},wh=class extends Io{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function su(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var Ua=new R,Qc=new su,eh=new su,th=new su,Ah=class extends Gn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new R){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Ua.subVectors(i[0],i[1]).add(i[0]),c=Ua);let u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Ua.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Ua),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);g<1e-4&&(g=1),_<1e-4&&(_=g),p<1e-4&&(p=g),Qc.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,_,g,p),eh.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,_,g,p),th.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,_,g,p)}else this.curveType==="catmullrom"&&(Qc.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),eh.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),th.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Qc.calc(l),eh.calc(l),th.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new R().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ip(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function RS(s,e){let t=1-s;return t*t*e}function CS(s,e){return 2*(1-s)*s*e}function PS(s,e){return s*s*e}function xo(s,e,t,n){return RS(s,e)+CS(s,t)+PS(s,n)}function LS(s,e){let t=1-s;return t*t*t*e}function IS(s,e){let t=1-s;return 3*t*t*s*e}function DS(s,e){return 3*(1-s)*s*s*e}function NS(s,e){return s*s*s*e}function yo(s,e,t,n,i){return LS(s,e)+IS(s,t)+DS(s,n)+NS(s,i)}var rl=class extends Gn{constructor(e=new re,t=new re,n=new re,i=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new re){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(yo(e,i.x,r.x,o.x,a.x),yo(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Rh=class extends Gn{constructor(e=new R,t=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new R){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(yo(e,i.x,r.x,o.x,a.x),yo(e,i.y,r.y,o.y,a.y),yo(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ol=class extends Gn{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ch=class extends Gn{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},al=class extends Gn{constructor(e=new re,t=new re,n=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new re){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(xo(e,i.x,r.x,o.x),xo(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ph=class extends Gn{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(xo(e,i.x,r.x,o.x),xo(e,i.y,r.y,o.y),xo(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ll=class extends Gn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Ip(a,l.x,c.x,h.x,u.x),Ip(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new re().fromArray(i))}return this}},Lh=Object.freeze({__proto__:null,ArcCurve:wh,CatmullRomCurve3:Ah,CubicBezierCurve:rl,CubicBezierCurve3:Rh,EllipseCurve:Io,LineCurve:ol,LineCurve3:Ch,QuadraticBezierCurve:al,QuadraticBezierCurve3:Ph,SplineCurve:ll}),Ih=class extends Gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Lh[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Lh[i.type]().fromJSON(i))}return this}},cl=class extends Ih{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ol(this.currentPoint.clone(),new re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new al(this.currentPoint.clone(),new re(e,t),new re(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){let a=new rl(this.currentPoint.clone(),new re(e,t),new re(n,i),new re(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ll(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){let c=new Io(e,t,n,i,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},hl=class s extends st{constructor(e=[new re(0,-.5),new re(.5,0),new re(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=kt(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new R,d=new re,f=new R,_=new R,g=new R,p=0,m=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:p=e[x+1].x-e[x].x,m=e[x+1].y-e[x].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(g.x,g.y,g.z);break;default:p=e[x+1].x-e[x].x,m=e[x+1].y-e[x].y,f.x=m*1,f.y=-p,f.z=m*0,_.copy(f),f.x+=g.x,f.y+=g.y,f.z+=g.z,f.normalize(),l.push(f.x,f.y,f.z),g.copy(_)}for(let x=0;x<=t;x++){let v=n+x*h*i,y=Math.sin(v),b=Math.cos(v);for(let S=0;S<=e.length-1;S++){u.x=e[S].x*y,u.y=e[S].y,u.z=e[S].x*b,o.push(u.x,u.y,u.z),d.x=x/t,d.y=S/(e.length-1),a.push(d.x,d.y);let T=l[3*S+0]*y,C=l[3*S+1],M=l[3*S+0]*b;c.push(T,C,M)}}for(let x=0;x<t;x++)for(let v=0;v<e.length-1;v++){let y=v+x*e.length,b=y,S=y+e.length,T=y+e.length+1,C=y+1;r.push(b,S,C),r.push(T,C,S)}this.setIndex(r),this.setAttribute("position",new Ve(o,3)),this.setAttribute("uv",new Ve(a,2)),this.setAttribute("normal",new Ve(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}};var Dr=class s extends st{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new R,h=new re;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ve(o,3)),this.setAttribute("normal",new Ve(a,3)),this.setAttribute("uv",new Ve(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Di=class s extends st{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],_=0,g=[],p=n/2,m=0;x(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Ve(u,3)),this.setAttribute("normal",new Ve(d,3)),this.setAttribute("uv",new Ve(f,2));function x(){let y=new R,b=new R,S=0,T=(t-e)/n;for(let C=0;C<=r;C++){let M=[],E=C/r,D=E*(t-e)+e;for(let O=0;O<=i;O++){let H=O/i,I=H*l+a,U=Math.sin(I),F=Math.cos(I);b.x=D*U,b.y=-E*n+p,b.z=D*F,u.push(b.x,b.y,b.z),y.set(U,T,F).normalize(),d.push(y.x,y.y,y.z),f.push(H,1-E),M.push(_++)}g.push(M)}for(let C=0;C<i;C++)for(let M=0;M<r;M++){let E=g[M][C],D=g[M+1][C],O=g[M+1][C+1],H=g[M][C+1];h.push(E,D,H),h.push(D,O,H),S+=6}c.addGroup(m,S,0),m+=S}function v(y){let b=_,S=new re,T=new R,C=0,M=y===!0?e:t,E=y===!0?1:-1;for(let O=1;O<=i;O++)u.push(0,p*E,0),d.push(0,E,0),f.push(.5,.5),_++;let D=_;for(let O=0;O<=i;O++){let I=O/i*l+a,U=Math.cos(I),F=Math.sin(I);T.x=M*F,T.y=p*E,T.z=M*U,u.push(T.x,T.y,T.z),d.push(0,E,0),S.x=U*.5+.5,S.y=F*.5*E+.5,f.push(S.x,S.y),_++}for(let O=0;O<i;O++){let H=b+O,I=D+O;y===!0?h.push(I,I+1,H):h.push(I+1,I,H),C+=3}c.addGroup(m,C,y===!0?1:2),m+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Dh=class s extends st{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Ve(r,3)),this.setAttribute("normal",new Ve(r.slice(),3)),this.setAttribute("uv",new Ve(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(x){let v=new R,y=new R,b=new R;for(let S=0;S<t.length;S+=3)f(t[S+0],v),f(t[S+1],y),f(t[S+2],b),l(v,y,b,x)}function l(x,v,y,b){let S=b+1,T=[];for(let C=0;C<=S;C++){T[C]=[];let M=x.clone().lerp(y,C/S),E=v.clone().lerp(y,C/S),D=S-C;for(let O=0;O<=D;O++)O===0&&C===S?T[C][O]=M:T[C][O]=M.clone().lerp(E,O/D)}for(let C=0;C<S;C++)for(let M=0;M<2*(S-C)-1;M++){let E=Math.floor(M/2);M%2===0?(d(T[C][E+1]),d(T[C+1][E]),d(T[C][E])):(d(T[C][E+1]),d(T[C+1][E+1]),d(T[C+1][E]))}}function c(x){let v=new R;for(let y=0;y<r.length;y+=3)v.x=r[y+0],v.y=r[y+1],v.z=r[y+2],v.normalize().multiplyScalar(x),r[y+0]=v.x,r[y+1]=v.y,r[y+2]=v.z}function h(){let x=new R;for(let v=0;v<r.length;v+=3){x.x=r[v+0],x.y=r[v+1],x.z=r[v+2];let y=p(x)/2/Math.PI+.5,b=m(x)/Math.PI+.5;o.push(y,1-b)}_(),u()}function u(){for(let x=0;x<o.length;x+=6){let v=o[x+0],y=o[x+2],b=o[x+4],S=Math.max(v,y,b),T=Math.min(v,y,b);S>.9&&T<.1&&(v<.2&&(o[x+0]+=1),y<.2&&(o[x+2]+=1),b<.2&&(o[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,v){let y=x*3;v.x=e[y+0],v.y=e[y+1],v.z=e[y+2]}function _(){let x=new R,v=new R,y=new R,b=new R,S=new re,T=new re,C=new re;for(let M=0,E=0;M<r.length;M+=9,E+=6){x.set(r[M+0],r[M+1],r[M+2]),v.set(r[M+3],r[M+4],r[M+5]),y.set(r[M+6],r[M+7],r[M+8]),S.set(o[E+0],o[E+1]),T.set(o[E+2],o[E+3]),C.set(o[E+4],o[E+5]),b.copy(x).add(v).add(y).divideScalar(3);let D=p(b);g(S,E+0,x,D),g(T,E+2,v,D),g(C,E+4,y,D)}}function g(x,v,y,b){b<0&&x.x===1&&(o[v]=x.x-1),y.x===0&&y.z===0&&(o[v]=b/2/Math.PI+.5)}function p(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.details)}};var Ns=class extends cl{constructor(e){super(e),this.uuid=Hn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new cl().fromJSON(i))}return this}},US={triangulate:function(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=um(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,f;if(n&&(r=HS(s,e,r,t)),s.length>80*t){a=c=s[0],l=h=s[1];for(let _=t;_<i;_+=t)u=s[_],d=s[_+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return Do(r,o,t,a,l,f,0),o}};function um(s,e,t,n,i){let r,o;if(i===$S(s,e,t,n)>0)for(r=e;r<t;r+=n)o=Dp(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=Dp(r,s[r],s[r+1],o);return o&&Al(o,o.next)&&(Uo(o),o=o.next),o}function Us(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Al(t,t.next)||bt(t.prev,t,t.next)===0)){if(Uo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Do(s,e,t,n,i,r,o){if(!s)return;!o&&r&&XS(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?FS(s,n,i,r):OS(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),Uo(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=BS(Us(s),e,t),Do(s,e,t,n,i,r,2)):o===2&&zS(s,e,t,n,i,r):Do(Us(s),e,t,n,i,r,1);break}}}function OS(s){let e=s.prev,t=s,n=s.next;if(bt(e,t,n)>=0)return!1;let i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=i>r?i>o?i:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,_=n.next;for(;_!==e;){if(_.x>=h&&_.x<=d&&_.y>=u&&_.y<=f&&xr(i,a,r,l,o,c,_.x,_.y)&&bt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function FS(s,e,t,n){let i=s.prev,r=s,o=s.next;if(bt(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,_=h<u?h<d?h:d:u<d?u:d,g=a>l?a>c?a:c:l>c?l:c,p=h>u?h>d?h:d:u>d?u:d,m=Nh(f,_,e,t,n),x=Nh(g,p,e,t,n),v=s.prevZ,y=s.nextZ;for(;v&&v.z>=m&&y&&y.z<=x;){if(v.x>=f&&v.x<=g&&v.y>=_&&v.y<=p&&v!==i&&v!==o&&xr(a,h,l,u,c,d,v.x,v.y)&&bt(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=f&&y.x<=g&&y.y>=_&&y.y<=p&&y!==i&&y!==o&&xr(a,h,l,u,c,d,y.x,y.y)&&bt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=m;){if(v.x>=f&&v.x<=g&&v.y>=_&&v.y<=p&&v!==i&&v!==o&&xr(a,h,l,u,c,d,v.x,v.y)&&bt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=x;){if(y.x>=f&&y.x<=g&&y.y>=_&&y.y<=p&&y!==i&&y!==o&&xr(a,h,l,u,c,d,y.x,y.y)&&bt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function BS(s,e,t){let n=s;do{let i=n.prev,r=n.next.next;!Al(i,r)&&dm(i,n,n.next,r)&&No(i,r)&&No(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Uo(n),Uo(n.next),n=s=r),n=n.next}while(n!==s);return Us(n)}function zS(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ZS(o,a)){let l=fm(o,a);o=Us(o,o.next),l=Us(l,l.next),Do(o,e,t,n,i,r,0),Do(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function HS(s,e,t,n){let i=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=um(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(YS(c));for(i.sort(kS),r=0;r<i.length;r++)t=VS(i[r],t);return t}function kS(s,e){return s.x-e.x}function VS(s,e){let t=GS(s,e);if(!t)return e;let n=fm(t,s);return Us(n,n.next),Us(t,t.next)}function GS(s,e){let t=e,n=-1/0,i,r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===r))return i}t=t.next}while(t!==e);if(!i)return null;let a=i,l=i.x,c=i.y,h=1/0,u;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&xr(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),No(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&WS(i,t)))&&(i=t,h=u)),t=t.next;while(t!==a);return i}function WS(s,e){return bt(s.prev,s,e.prev)<0&&bt(e.next,s,s.next)<0}function XS(s,e,t,n){let i=s;do i.z===0&&(i.z=Nh(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,qS(i)}function qS(s){let e,t,n,i,r,o,a,l,c=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(o>1);return s}function Nh(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function YS(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function xr(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function ZS(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!KS(s,e)&&(No(s,e)&&No(e,s)&&JS(s,e)&&(bt(s.prev,s,e.prev)||bt(s,e.prev,e))||Al(s,e)&&bt(s.prev,s,s.next)>0&&bt(e.prev,e,e.next)>0)}function bt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Al(s,e){return s.x===e.x&&s.y===e.y}function dm(s,e,t,n){let i=Fa(bt(s,e,t)),r=Fa(bt(s,e,n)),o=Fa(bt(t,n,s)),a=Fa(bt(t,n,e));return!!(i!==r&&o!==a||i===0&&Oa(s,t,e)||r===0&&Oa(s,n,e)||o===0&&Oa(t,s,n)||a===0&&Oa(t,e,n))}function Oa(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Fa(s){return s>0?1:s<0?-1:0}function KS(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&dm(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function No(s,e){return bt(s.prev,s,s.next)<0?bt(s,e,s.next)>=0&&bt(s,s.prev,e)>=0:bt(s,e,s.prev)<0||bt(s,s.next,e)<0}function JS(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function fm(s,e){let t=new Uh(s.i,s.x,s.y),n=new Uh(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Dp(s,e,t,n){let i=new Uh(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Uo(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Uh(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function $S(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var ji=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];Np(e),Up(n,e);let o=e.length;t.forEach(Np);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Up(n,t[l]);let a=US.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Np(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Up(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var ul=class s extends st{constructor(e=new Ns([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Ve(i,3)),this.setAttribute("uv",new Ve(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:f-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:jS,v,y=!1,b,S,T,C;m&&(v=m.getSpacedPoints(h),y=!0,d=!1,b=m.computeFrenetFrames(h,!1),S=new R,T=new R,C=new R),d||(p=0,f=0,_=0,g=0);let M=a.extractPoints(c),E=M.shape,D=M.holes;if(!ji.isClockWise(E)){E=E.reverse();for(let L=0,j=D.length;L<j;L++){let q=D[L];ji.isClockWise(q)&&(D[L]=q.reverse())}}let H=ji.triangulateShape(E,D),I=E;for(let L=0,j=D.length;L<j;L++){let q=D[L];E=E.concat(q)}function U(L,j,q){return j||console.error("THREE.ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(j,q)}let F=E.length,Y=H.length;function J(L,j,q){let se,V,ye,Me=L.x-j.x,A=L.y-j.y,w=q.x-L.x,B=q.y-L.y,pe=Me*Me+A*A,me=Me*B-A*w;if(Math.abs(me)>Number.EPSILON){let ae=Math.sqrt(pe),Ie=Math.sqrt(w*w+B*B),G=j.x-A/ae,de=j.y+Me/ae,Ee=q.x-B/Ie,ee=q.y+w/Ie,z=((Ee-G)*B-(ee-de)*w)/(Me*B-A*w);se=G+Me*z-L.x,V=de+A*z-L.y;let ve=se*se+V*V;if(ve<=2)return new re(se,V);ye=Math.sqrt(ve/2)}else{let ae=!1;Me>Number.EPSILON?w>Number.EPSILON&&(ae=!0):Me<-Number.EPSILON?w<-Number.EPSILON&&(ae=!0):Math.sign(A)===Math.sign(B)&&(ae=!0),ae?(se=-A,V=Me,ye=Math.sqrt(pe)):(se=Me,V=A,ye=Math.sqrt(pe/2))}return new re(se/ye,V/ye)}let X=[];for(let L=0,j=I.length,q=j-1,se=L+1;L<j;L++,q++,se++)q===j&&(q=0),se===j&&(se=0),X[L]=J(I[L],I[q],I[se]);let le=[],ce,he=X.concat();for(let L=0,j=D.length;L<j;L++){let q=D[L];ce=[];for(let se=0,V=q.length,ye=V-1,Me=se+1;se<V;se++,ye++,Me++)ye===V&&(ye=0),Me===V&&(Me=0),ce[se]=J(q[se],q[ye],q[Me]);le.push(ce),he=he.concat(ce)}for(let L=0;L<p;L++){let j=L/p,q=f*Math.cos(j*Math.PI/2),se=_*Math.sin(j*Math.PI/2)+g;for(let V=0,ye=I.length;V<ye;V++){let Me=U(I[V],X[V],se);Le(Me.x,Me.y,-q)}for(let V=0,ye=D.length;V<ye;V++){let Me=D[V];ce=le[V];for(let A=0,w=Me.length;A<w;A++){let B=U(Me[A],ce[A],se);Le(B.x,B.y,-q)}}}let K=_+g;for(let L=0;L<F;L++){let j=d?U(E[L],he[L],K):E[L];y?(T.copy(b.normals[0]).multiplyScalar(j.x),S.copy(b.binormals[0]).multiplyScalar(j.y),C.copy(v[0]).add(T).add(S),Le(C.x,C.y,C.z)):Le(j.x,j.y,0)}for(let L=1;L<=h;L++)for(let j=0;j<F;j++){let q=d?U(E[j],he[j],K):E[j];y?(T.copy(b.normals[L]).multiplyScalar(q.x),S.copy(b.binormals[L]).multiplyScalar(q.y),C.copy(v[L]).add(T).add(S),Le(C.x,C.y,C.z)):Le(q.x,q.y,u/h*L)}for(let L=p-1;L>=0;L--){let j=L/p,q=f*Math.cos(j*Math.PI/2),se=_*Math.sin(j*Math.PI/2)+g;for(let V=0,ye=I.length;V<ye;V++){let Me=U(I[V],X[V],se);Le(Me.x,Me.y,u+q)}for(let V=0,ye=D.length;V<ye;V++){let Me=D[V];ce=le[V];for(let A=0,w=Me.length;A<w;A++){let B=U(Me[A],ce[A],se);y?Le(B.x,B.y+v[h-1].y,v[h-1].x+q):Le(B.x,B.y,u+q)}}}oe(),Se();function oe(){let L=i.length/3;if(d){let j=0,q=F*j;for(let se=0;se<Y;se++){let V=H[se];Z(V[2]+q,V[1]+q,V[0]+q)}j=h+p*2,q=F*j;for(let se=0;se<Y;se++){let V=H[se];Z(V[0]+q,V[1]+q,V[2]+q)}}else{for(let j=0;j<Y;j++){let q=H[j];Z(q[2],q[1],q[0])}for(let j=0;j<Y;j++){let q=H[j];Z(q[0]+F*h,q[1]+F*h,q[2]+F*h)}}n.addGroup(L,i.length/3-L,0)}function Se(){let L=i.length/3,j=0;Ae(I,j),j+=I.length;for(let q=0,se=D.length;q<se;q++){let V=D[q];Ae(V,j),j+=V.length}n.addGroup(L,i.length/3-L,1)}function Ae(L,j){let q=L.length;for(;--q>=0;){let se=q,V=q-1;V<0&&(V=L.length-1);for(let ye=0,Me=h+p*2;ye<Me;ye++){let A=F*ye,w=F*(ye+1),B=j+se+A,pe=j+V+A,me=j+V+w,ae=j+se+w;k(B,pe,me,ae)}}}function Le(L,j,q){l.push(L),l.push(j),l.push(q)}function Z(L,j,q){ne(L),ne(j),ne(q);let se=i.length/3,V=x.generateTopUV(n,i,se-3,se-2,se-1);_e(V[0]),_e(V[1]),_e(V[2])}function k(L,j,q,se){ne(L),ne(j),ne(se),ne(j),ne(q),ne(se);let V=i.length/3,ye=x.generateSideWallUV(n,i,V-6,V-3,V-2,V-1);_e(ye[0]),_e(ye[1]),_e(ye[3]),_e(ye[1]),_e(ye[2]),_e(ye[3])}function ne(L){i.push(l[L*3+0]),i.push(l[L*3+1]),i.push(l[L*3+2])}function _e(L){r.push(L.x),r.push(L.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return QS(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Lh[i.type]().fromJSON(i)),new s(n,e.options)}},jS={generateTopUV:function(s,e,t,n,i){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new re(r,o),new re(a,l),new re(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],_=e[i*3+2],g=e[r*3],p=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new re(o,1-l),new re(c,1-u),new re(d,1-_),new re(g,1-m)]:[new re(a,1-l),new re(h,1-u),new re(f,1-_),new re(p,1-m)]}};function QS(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Nr=class s extends Dh{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var dl=class s extends st{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],u=e,d=(t-e)/i,f=new R,_=new re;for(let g=0;g<=i;g++){for(let p=0;p<=n;p++){let m=r+p/n*o;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),_.x=(f.x/t+1)/2,_.y=(f.y/t+1)/2,h.push(_.x,_.y)}u+=d}for(let g=0;g<i;g++){let p=g*(n+1);for(let m=0;m<n;m++){let x=m+p,v=x,y=x+n+1,b=x+n+2,S=x+1;a.push(v,y,S),a.push(y,b,S)}}this.setIndex(a),this.setAttribute("position",new Ve(l,3)),this.setAttribute("normal",new Ve(c,3)),this.setAttribute("uv",new Ve(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},fl=class s extends st{constructor(e=new Ns([new re(0,.5),new re(-.5,-.5),new re(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ve(i,3)),this.setAttribute("normal",new Ve(r,3)),this.setAttribute("uv",new Ve(o,2));function c(h){let u=i.length/3,d=h.extractPoints(t),f=d.shape,_=d.holes;ji.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,m=_.length;p<m;p++){let x=_[p];ji.isClockWise(x)===!0&&(_[p]=x.reverse())}let g=ji.triangulateShape(f,_);for(let p=0,m=_.length;p<m;p++){let x=_[p];f=f.concat(x)}for(let p=0,m=f.length;p<m;p++){let x=f[p];i.push(x.x,x.y,0),r.push(0,0,1),o.push(x.x,x.y)}for(let p=0,m=g.length;p<m;p++){let x=g[p],v=x[0]+u,y=x[1]+u,b=x[2]+u;n.push(v,y,b),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return eb(t,e)}static fromJSON(e,t){let n=[];for(let i=0,r=e.shapes.length;i<r;i++){let o=t[e.shapes[i]];n.push(o)}return new s(n,e.curveSegments)}};function eb(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){let i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}var pl=class s extends st{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new R,d=new R,f=[],_=[],g=[],p=[];for(let m=0;m<=n;m++){let x=[],v=m/n,y=0;m===0&&o===0?y=.5/t:m===n&&l===Math.PI&&(y=-.5/t);for(let b=0;b<=t;b++){let S=b/t;u.x=-e*Math.cos(i+S*r)*Math.sin(o+v*a),u.y=e*Math.cos(o+v*a),u.z=e*Math.sin(i+S*r)*Math.sin(o+v*a),_.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),p.push(S+y,1-v),x.push(c++)}h.push(x)}for(let m=0;m<n;m++)for(let x=0;x<t;x++){let v=h[m][x+1],y=h[m][x],b=h[m+1][x],S=h[m+1][x+1];(m!==0||o>0)&&f.push(v,y,S),(m!==n-1||l<Math.PI)&&f.push(y,b,S)}this.setIndex(f),this.setAttribute("position",new Ve(_,3)),this.setAttribute("normal",new Ve(g,3)),this.setAttribute("uv",new Ve(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Os=class s extends st{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],h=new R,u=new R,d=new R;for(let f=0;f<=n;f++)for(let _=0;_<=i;_++){let g=_/i*r,p=f/n*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(g),u.y=(e+t*Math.cos(p))*Math.sin(g),u.z=t*Math.sin(p),a.push(u.x,u.y,u.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(_/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let _=1;_<=i;_++){let g=(i+1)*f+_-1,p=(i+1)*(f-1)+_-1,m=(i+1)*(f-1)+_,x=(i+1)*f+_;o.push(g,p,x),o.push(p,m,x)}this.setIndex(o),this.setAttribute("position",new Ve(a,3)),this.setAttribute("normal",new Ve(l,3)),this.setAttribute("uv",new Ve(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var ml=class extends nt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},xt=class extends Dn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=em,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Bt=class extends xt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Ba(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function tb(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function nb(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Op(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function pm(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var is=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Oh=class extends is{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rf,endingEnd:Rf}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Cf:r=e,a=2*t-n;break;case Pf:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Cf:o=e,l=2*n-t;break;case Pf:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,_=(n-t)/(i-t),g=_*_,p=g*_,m=-d*p+2*d*g-d*_,x=(1+d)*p+(-1.5-2*d)*g+(-.5+d)*_+1,v=(-1-f)*p+(1.5+f)*g+.5*_,y=f*p-f*g;for(let b=0;b!==a;++b)r[b]=m*o[h+b]+x*o[c+b]+v*o[l+b]+y*o[u+b];return r}},Fh=class extends is{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Bh=class extends is{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Wn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ba(t,this.TimeBufferType),this.values=Ba(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ba(e.times,Array),values:Ba(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Bh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Fh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Oh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case wr:t=this.InterpolantFactoryMethodDiscrete;break;case Is:t=this.InterpolantFactoryMethodLinear;break;case Ac:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wr;case this.InterpolantFactoryMethodLinear:return Is;case this.InterpolantFactoryMethodSmooth:return Ac}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&tb(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ac,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let _=0;_!==n;++_){let g=t[u+_];if(g!==t[d+_]||g!==t[f+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Wn.prototype.TimeBufferType=Float32Array;Wn.prototype.ValueBufferType=Float32Array;Wn.prototype.DefaultInterpolation=Is;var ss=class extends Wn{};ss.prototype.ValueTypeName="bool";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=wr;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var gl=class extends Wn{};gl.prototype.ValueTypeName="color";var Ni=class extends Wn{};Ni.prototype.ValueTypeName="number";var zh=class extends is{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let h=c+a;c!==h;c+=4)ii.slerpFlat(r,0,o,c-a,o,c,l);return r}},ui=class extends Wn{InterpolantFactoryMethodLinear(e){return new zh(this.times,this.values,this.getValueSize(),e)}};ui.prototype.ValueTypeName="quaternion";ui.prototype.DefaultInterpolation=Is;ui.prototype.InterpolantFactoryMethodSmooth=void 0;var rs=class extends Wn{};rs.prototype.ValueTypeName="string";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=wr;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ui=class extends Wn{};Ui.prototype.ValueTypeName="vector";var _l=class{constructor(e,t=-1,n,i=c_){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Hn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(sb(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Wn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=nb(l);l=Op(l,1,h),c=Op(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ni(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,_,g){if(f.length!==0){let p=[],m=[];pm(f,p,m,_),p.length!==0&&g.push(new u(d,p,m))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},_;for(_=0;_<d.length;_++)if(d[_].morphTargets)for(let g=0;g<d[_].morphTargets.length;g++)f[d[_].morphTargets[g]]=-1;for(let g in f){let p=[],m=[];for(let x=0;x!==d[_].morphTargets.length;++x){let v=d[_];p.push(v.time),m.push(v.morphTarget===g?1:0)}i.push(new Ni(".morphTargetInfluence["+g+"]",p,m))}l=f.length*o}else{let f=".bones["+t[u].name+"]";n(Ui,f+".position",d,"pos",i),n(ui,f+".quaternion",d,"rot",i),n(Ui,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function ib(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ni;case"vector":case"vector2":case"vector3":case"vector4":return Ui;case"color":return gl;case"quaternion":return ui;case"bool":case"boolean":return ss;case"string":return rs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function sb(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=ib(s.type);if(s.times===void 0){let t=[],n=[];pm(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var Ki={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Oo=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],_=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null}}},rb=new Oo,si=class{constructor(e){this.manager=e!==void 0?e:rb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};si.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ai={},Hh=class extends Error{constructor(e,t){super(e),this.response=t}},os=class extends si{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ki.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ai[e]!==void 0){Ai[e].push({onLoad:t,onProgress:n,onError:i});return}Ai[e]=[],Ai[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Ai[e],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,_=f!==0,g=0,p=new ReadableStream({start(m){x();function x(){u.read().then(({done:v,value:y})=>{if(v)m.close();else{g+=y.byteLength;let b=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:f});for(let S=0,T=h.length;S<T;S++){let C=h[S];C.onProgress&&C.onProgress(b)}m.enqueue(y),x()}})}}});return new Response(p)}else throw new Hh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(_=>f.decode(_))}}}).then(c=>{Ki.add(e,c);let h=Ai[e];delete Ai[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Ai[e];if(h===void 0)throw this.manager.itemError(e),c;delete Ai[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var kh=class extends si{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ki.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=bo("img");function l(){h(),Ki.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Ur=class extends si{constructor(e){super(e)}load(e,t,n,i){let r=new on,o=new kh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Or=class extends ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},vl=class extends Or{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},nh=new Ye,Fp=new R,Bp=new R,Fo=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new To,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Fp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fp),Bp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bp),t.updateMatrixWorld(),nh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(nh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Vh=class extends Fo{constructor(){super(new Dt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Ar*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},xl=class extends Or{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Vh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},zp=new Ye,fo=new R,ih=new R,Gh=class extends Fo{constructor(){super(new Dt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new re(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),fo.setFromMatrixPosition(e.matrixWorld),n.position.copy(fo),ih.copy(n.position),ih.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ih),n.updateMatrixWorld(),i.makeTranslation(-fo.x,-fo.y,-fo.z),zp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zp)}},as=class extends Or{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Gh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Wh=class extends Fo{constructor(){super(new ts(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Fr=class extends Or{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.shadow=new Wh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ls=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var yl=class extends si{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ki.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ki.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Ki.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Ki.add(e,l),r.manager.itemStart(e)}};var Ml=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Hp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Hp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Hp(){return(typeof performance>"u"?Date:performance).now()}var ru="\\[\\]\\.:\\/",ob=new RegExp("["+ru+"]","g"),ou="[^"+ru+"]",ab="[^"+ru.replace("\\.","")+"]",lb=/((?:WC+[\/:])*)/.source.replace("WC",ou),cb=/(WCOD+)?/.source.replace("WCOD",ab),hb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ou),ub=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ou),db=new RegExp("^"+lb+cb+hb+ub+"$"),fb=["material","materials","bones","map"],Xh=class{constructor(e,t,n){let i=n||mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},mt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ob,"")}static parseTrackName(e){let t=db.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);fb.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};mt.Composite=Xh;mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};mt.prototype.GetterByBindingType=[mt.prototype._getValue_direct,mt.prototype._getValue_array,mt.prototype._getValue_arrayElement,mt.prototype._getValue_toArray];mt.prototype.SetterByBindingTypeAndVersioning=[[mt.prototype._setValue_direct,mt.prototype._setValue_direct_setNeedsUpdate,mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_array,mt.prototype._setValue_array_setNeedsUpdate,mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_arrayElement,mt.prototype._setValue_arrayElement_setNeedsUpdate,mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_fromArray,mt.prototype._setValue_fromArray_setNeedsUpdate,mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var mE=new Float32Array(1);var Br=class{constructor(e,t,n=0,i=1/0){this.ray=new Li(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Eo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return qh(e,this,n,t),n.sort(kp),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)qh(e[i],this,n,t);return n.sort(kp),n}};function kp(s,e){return s.distance-e.distance}function qh(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){let i=s.children;for(let r=0,o=i.length;r<o;r++)qh(i[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yh);function Rl(s,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=s.getIndex(),i=s.getAttribute("position"),r=n?n.count:i.count,o=0,a=Object.keys(s.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let x=0,v=a.length;x<v;x++){let y=a[x],b=s.attributes[y];l[y]=new $e(new b.array.constructor(b.count*b.itemSize),b.itemSize,b.normalized);let S=s.morphAttributes[y];S&&(c[y]=new $e(new S.array.constructor(S.count*S.itemSize),S.itemSize,S.normalized))}let f=e*.5,_=Math.log10(1/e),g=Math.pow(10,_),p=f*g;for(let x=0;x<r;x++){let v=n?n.getX(x):x,y="";for(let b=0,S=a.length;b<S;b++){let T=a[b],C=s.getAttribute(T),M=C.itemSize;for(let E=0;E<M;E++)y+=`${~~(C[u[E]](v)*g+p)},`}if(y in t)h.push(t[y]);else{for(let b=0,S=a.length;b<S;b++){let T=a[b],C=s.getAttribute(T),M=s.morphAttributes[T],E=C.itemSize,D=l[T],O=c[T];for(let H=0;H<E;H++){let I=u[H],U=d[H];if(D[U](o,C[I](v)),M)for(let F=0,Y=M.length;F<Y;F++)O[F][U](o,M[F][I](v))}}t[y]=o,h.push(o),o++}}let m=s.clone();for(let x in s.attributes){let v=l[x];if(m.setAttribute(x,new $e(v.array.slice(0,o*v.itemSize),v.itemSize,v.normalized)),x in c)for(let y=0;y<c[x].length;y++){let b=c[x][y];m.morphAttributes[x][y]=new $e(b.array.slice(0,o*b.itemSize),b.itemSize,b.normalized)}}return m.setIndex(h),m}function au(s,e){if(e===jp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===zo||e===bl){let t=s.getIndex();if(t===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===zo)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var Cl=class extends si{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new pu(t)}),this.register(function(t){return new bu(t)}),this.register(function(t){return new Eu(t)}),this.register(function(t){return new Tu(t)}),this.register(function(t){return new gu(t)}),this.register(function(t){return new _u(t)}),this.register(function(t){return new vu(t)}),this.register(function(t){return new xu(t)}),this.register(function(t){return new fu(t)}),this.register(function(t){return new yu(t)}),this.register(function(t){return new mu(t)}),this.register(function(t){return new Su(t)}),this.register(function(t){return new Mu(t)}),this.register(function(t){return new uu(t)}),this.register(function(t){return new wu(t)}),this.register(function(t){return new Au(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=ls.extractUrlBase(e);o=ls.resolveURL(c,this.path)}else o=ls.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new os(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===xm){try{o[rt.KHR_BINARY_GLTF]=new Ru(e)}catch(u){i&&i(u);return}r=JSON.parse(o[rt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Uu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case rt.KHR_MATERIALS_UNLIT:o[u]=new du;break;case rt.KHR_DRACO_MESH_COMPRESSION:o[u]=new Cu(r,this.dracoLoader);break;case rt.KHR_TEXTURE_TRANSFORM:o[u]=new Pu;break;case rt.KHR_MESH_QUANTIZATION:o[u]=new Lu;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function pb(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var rt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},uu=class{constructor(e){this.parser=e,this.name=rt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Ue(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Et);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Fr(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new as(h),c.distance=u;break;case"spot":c=new xl(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,hs(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},du=class{constructor(){this.name=rt.KHR_MATERIALS_UNLIT}getMaterialType(){return Gt}extendParams(e,t,n){let i=[];e.color=new Ue(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Et),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,ut))}return Promise.all(i)}},fu=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},pu=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new re(a,a)}return Promise.all(r)}},mu=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},gu=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Ue(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Et)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,ut)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},_u=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},vu=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ue().setRGB(a[0],a[1],a[2],Et),Promise.all(r)}},xu=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bt}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},yu=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ue().setRGB(a[0],a[1],a[2],Et),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,ut)),Promise.all(r)}},Mu=class{constructor(e){this.parser=e,this.name=rt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Su=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Bt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},bu=class{constructor(e){this.parser=e,this.name=rt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Eu=class{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Tu=class{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},wu=class{constructor(e){this.name=rt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}},Au=class{constructor(e){this.name=rt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==qn.TRIANGLES&&c.mode!==qn.TRIANGLE_STRIP&&c.mode!==qn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let _ of u){let g=new Ye,p=new R,m=new ii,x=new R(1,1,1),v=new mn(_.geometry,_.material,d);for(let y=0;y<d;y++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,y),l.SCALE&&x.fromBufferAttribute(l.SCALE,y),v.setMatrixAt(y,g.compose(p,m,x));for(let y in l)if(y==="_COLOR_0"){let b=l[y];v.instanceColor=new an(b.array,b.itemSize,b.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&_.geometry.setAttribute(y,l[y]);ht.prototype.copy.call(v,_),this.parser.assignFinalMaterial(v),f.push(v)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},xm="glTF",Ho=12,mm={JSON:1313821514,BIN:5130562},Ru=class{constructor(e){this.name=rt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ho),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==xm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Ho,r=new DataView(e,Ho),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===mm.JSON){let c=new Uint8Array(e,Ho+o,a);this.content=n.decode(c)}else if(l===mm.BIN){let c=Ho+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Cu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=rt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=Du[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Du[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Hr[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(let _ in f.attributes){let g=f.attributes[_],p=l[_];p!==void 0&&(g.normalized=p)}u(f)},a,c,Et,d)})})}},Pu=class{constructor(){this.name=rt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Lu=class{constructor(){this.name=rt.KHR_MESH_QUANTIZATION}},Pl=class extends is{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,_=e*c,g=_-c,p=-2*f+3*d,m=f-d,x=1-p,v=m-d+u;for(let y=0;y!==a;y++){let b=o[g+y+a],S=o[g+y+l]*h,T=o[_+y+a],C=o[_+y]*h;r[y]=x*b+v*S+p*T+m*C}return r}},mb=new ii,Iu=class extends Pl{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return mb.fromArray(r).normalize().toArray(r),r}},qn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Hr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},gm={9728:Ht,9729:Kt,9984:ka,9985:Qh,9986:po,9987:Qi},_m={33071:In,33648:So,10497:Pi},lu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Du={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},cs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},gb={CUBICSPLINE:void 0,LINEAR:Is,STEP:wr},cu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function _b(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new xt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:kn})),s.DefaultMaterial}function Fs(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function hs(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function vb(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function xb(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function yb(s){let e,t=s.extensions&&s.extensions[rt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+hu(t.attributes):e=s.indices+":"+hu(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+hu(s.targets[n]);return e}function hu(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Nu(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Mb(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var Sb=new Ye,Uu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new pb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new Ur(this.options.manager):this.textureLoader=new yl(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new os(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Fs(r,a,i),hs(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[rt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(ls.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=lu[i.type],a=Hr[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new $e(c,o,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=lu[i.type],c=Hr[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0,g,p;if(f&&f!==u){let m=Math.floor(d/f),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count,v=t.cache.get(x);v||(g=new c(a,m*f,i.count*f/h),v=new Ao(g,f/h),t.cache.add(x,v)),p=new Ro(v,l,d%f/h,_)}else a===null?g=new c(i.count*l):g=new c(a,d,i.count*l),p=new $e(g,l,_);if(i.sparse!==void 0){let m=lu.SCALAR,x=Hr[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,b=new x(o[1],v,i.sparse.count*m),S=new c(o[2],y,i.sparse.count*l);a!==null&&(p=new $e(p.array.slice(),p.itemSize,p.normalized));for(let T=0,C=b.length;T<C;T++){let M=b[T];if(p.setX(M,S[T*l]),l>=2&&p.setY(M,S[T*l+1]),l>=3&&p.setZ(M,S[T*l+2]),l>=4&&p.setW(M,S[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=gm[d.magFilter]||Kt,h.minFilter=gm[d.minFilter]||Qi,h.wrapS=_m[d.wrapS]||Pi,h.wrapT=_m[d.wrapT]||Pi,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=i.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let _=d;t.isImageBitmapLoader===!0&&(_=function(g){let p=new on(g);p.needsUpdate=!0,d(p)}),t.load(ls.resolveURL(u,r.path),_,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),u.userData.mimeType=o.mimeType||Mb(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[rt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[rt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[rt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Lo,Dn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new hi,Dn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return xt}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[rt.KHR_MATERIALS_UNLIT]){let u=i[rt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Ue(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Et),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,ut)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=fn);let h=r.alphaMode||cu.OPAQUE;if(h===cu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===cu.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Gt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new re(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Gt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Gt){let u=r.emissiveFactor;a.emissive=new Ue().setRGB(u[0],u[1],u[2],Et)}return r.emissiveTexture!==void 0&&o!==Gt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,ut)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),hs(u,r),t.associations.set(u,{materials:e}),r.extensions&&Fs(i,u,r),u})}createUniqueName(e){let t=mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[rt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return vm(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=yb(c),u=i[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[rt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=vm(new st,c,t),i[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?_b(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,_=h.length;f<_;f++){let g=h[f],p=o[f],m,x=c[f];if(p.mode===qn.TRIANGLES||p.mode===qn.TRIANGLE_STRIP||p.mode===qn.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new nl(g,x):new Oe(g,x),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===qn.TRIANGLE_STRIP?m.geometry=au(m.geometry,bl):p.mode===qn.TRIANGLE_FAN&&(m.geometry=au(m.geometry,zo));else if(p.mode===qn.LINES)m=new Ii(g,x);else if(p.mode===qn.LINE_STRIP)m=new Ir(g,x);else if(p.mode===qn.LINE_LOOP)m=new sl(g,x);else if(p.mode===qn.POINTS)m=new ns(g,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&xb(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),hs(m,r),p.extensions&&Fs(i,m,p),t.assignFinalMaterial(m),u.push(m)}for(let f=0,_=u.length;f<_;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Fs(i,u[0],r),u[0];let d=new Ot;r.extensions&&Fs(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,_=u.length;f<_;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Dt(je.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ts(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),hs(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let d=new Ye;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new il(a,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let f=i.channels[u],_=i.samplers[f.sampler],g=f.target,p=g.node,m=i.parameters!==void 0?i.parameters[_.input]:_.input,x=i.parameters!==void 0?i.parameters[_.output]:_.output;g.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",x)),c.push(_),h.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],_=u[2],g=u[3],p=u[4],m=[];for(let x=0,v=d.length;x<v;x++){let y=d[x],b=f[x],S=_[x],T=g[x],C=p[x];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let M=n._createAnimationTracks(y,b,S,T,C);if(M)for(let E=0;E<M.length;E++)m.push(M[E])}return new _l(r,void 0,m)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Sb)});for(let f=0,_=u.length;f<_;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Co:c.length>1?h=new Ot:c.length===1?h=c[0]:h=new ht,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),hs(h,r),r.extensions&&Fs(n,h,r),r.matrix!==void 0){let u=new Ye;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new Ot;n.name&&(r.name=i.createUniqueName(n.name)),hs(r,n),n.extensions&&Fs(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);let c=h=>{let u=new Map;for(let[d,f]of i.associations)(d instanceof Dn||d instanceof on)&&u.set(d,f);return h.traverse(d=>{let f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,l=[];cs[r.path]===cs.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(cs[r.path]){case cs.weights:c=Ni;break;case cs.rotation:c=ui;break;case cs.position:case cs.scale:c=Ui;break;default:switch(n.itemSize){case 1:c=Ni;break;case 2:case 3:default:c=Ui;break}break}let h=i.interpolation!==void 0?gb[i.interpolation]:Is,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){let _=new c(l[d]+"."+cs[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Nu(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof ui?Iu:Pl;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function bb(s,e,t){let n=e.attributes,i=new Vn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new R(l[0],l[1],l[2]),new R(c[0],c[1],c[2])),a.normalized){let h=Nu(Hr[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new R,l=new R;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,_=d.max;if(f!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(_[2]))),d.normalized){let g=Nu(Hr[d.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new Jt;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function vm(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(let o in n){let a=Du[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return lt.workingColorSpace!==Et&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${lt.workingColorSpace}" not supported.`),hs(s,e),bb(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?vb(s,e.targets,t):s})}var Ou=new WeakMap,Ll=class extends si{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){let r=new os(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,ut).catch(n)}decodeDracoFile(e,t,n,i,r=Et,o=()=>{}){let a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){let n=JSON.stringify(t);if(Ou.has(e)){let l=Ou.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i,r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(l=>(i=l,new Promise((c,h)=>{i._callbacks[r]={resolve:c,reject:h},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),Ou.set(e,{key:n,promise:a}),a}_createGeometry(e){let t=new st;e.index&&t.setIndex(new $e(e.index.array,1));for(let n=0;n<e.attributes.length;n++){let i=e.attributes[n],r=i.name,o=i.array,a=i.itemSize,l=new $e(o,a);r==="color"&&(this._assignVertexColorSpace(l,i.vertexColorSpace),l.normalized=!(o instanceof Float32Array)),t.setAttribute(r,l)}return t}_assignVertexColorSpace(e,t){if(t!==ut)return;let n=new Ue;for(let i=0,r=e.count;i<r;i++)n.fromBufferAttribute(e,i).convertSRGBToLinear(),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){let n=new os(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;let e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{let i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);let r=Eb.toString(),o=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){let i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){let o=r.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});let n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}};function Eb(){let s,e;onmessage=function(o){let a=o.data;switch(a.type){case"init":s=a.decoderConfig,e=new Promise(function(h){s.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(s)});break;case"decode":let l=a.buffer,c=a.taskConfig;e.then(h=>{let u=h.draco,d=new u.Decoder;try{let f=t(u,d,new Int8Array(l),c),_=f.attributes.map(g=>g.array.buffer);f.index&&_.push(f.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:f},_)}catch(f){console.error(f),self.postMessage({type:"error",id:a.id,error:f.message})}finally{u.destroy(d)}});break}};function t(o,a,l,c){let h=c.attributeIDs,u=c.attributeTypes,d,f,_=a.GetEncodedGeometryType(l);if(_===o.TRIANGULAR_MESH)d=new o.Mesh,f=a.DecodeArrayToMesh(l,l.byteLength,d);else if(_===o.POINT_CLOUD)d=new o.PointCloud,f=a.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());let g={index:null,attributes:[]};for(let p in h){let m=self[u[p]],x,v;if(c.useUniqueIDs)v=h[p],x=a.GetAttributeByUniqueId(d,v);else{if(v=a.GetAttributeId(d,o[h[p]]),v===-1)continue;x=a.GetAttribute(d,v)}let y=i(o,a,d,p,m,x);p==="color"&&(y.vertexColorSpace=c.vertexColorSpace),g.attributes.push(y)}return _===o.TRIANGULAR_MESH&&(g.index=n(o,a,d)),o.destroy(d),g}function n(o,a,l){let h=l.num_faces()*3,u=h*4,d=o._malloc(u);a.GetTrianglesUInt32Array(l,u,d);let f=new Uint32Array(o.HEAPF32.buffer,d,h).slice();return o._free(d),{array:f,itemSize:1}}function i(o,a,l,c,h,u){let d=u.num_components(),_=l.num_points()*d,g=_*h.BYTES_PER_ELEMENT,p=r(o,h),m=o._malloc(g);a.GetAttributeDataArrayForAllPoints(l,u,p,g,m);let x=new h(o.HEAPF32.buffer,m,_).slice();return o._free(m),{name:c,array:x,itemSize:d}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}var Il={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var gn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Tb=new ts(-1,1,1,-1,0,1),Fu=class extends st{constructor(){super(),this.setAttribute("position",new Ve([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ve([0,2,0,0,2,0],2))}},wb=new Fu,di=class{constructor(e){this._mesh=new Oe(wb,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Tb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var kr=class extends gn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof nt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Xn.clone(e.uniforms),this.material=new nt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new di(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ko=class extends gn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},Dl=class extends gn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Nl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new re);this._width=n.width,this._height=n.height,t=new Vt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:pn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new kr(Il),this.copyPass.material.blending=ci,this.clock=new Ml}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ko!==void 0&&(o instanceof ko?n=!0:o instanceof Dl&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ul=class extends gn{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ue}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}};var ym={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ue(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Vr=class s extends gn{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new re(e.x,e.y):new re(256,256),this.clearColor=new Ue(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Vt(r,o,{type:pn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Vt(r,o,{type:pn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Vt(r,o,{type:pn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=ym;this.highPassUniforms=Xn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new nt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new re(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Il;this.copyUniforms=Xn.clone(h.uniforms),this.blendMaterial=new nt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:za,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ue,this.oldClearAlpha=1,this.basic=new Gt,this.fsQuad=new di(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new re(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new nt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new re(.5,.5)},direction:{value:new re(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new nt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Vr.BlurDirectionX=new re(1,0);Vr.BlurDirectionY=new re(0,1);var Mm={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Ol=class extends gn{constructor(){super();let e=Mm;this.uniforms=Xn.clone(e.uniforms),this.material=new ml({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new di(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},lt.getTransfer(this._outputColorSpace)===ft&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Kh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Jh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===$h?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Bo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===jh&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Sm={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new re(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		precision highp float;

		uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

		//----------------------------------------------------------------------------------
		// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
		// SDK Version: v3.00
		// Email:       gameworks@nvidia.com
		// Site:        http://developer.nvidia.com/
		//
		// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
		//
		// Redistribution and use in source and binary forms, with or without
		// modification, are permitted provided that the following conditions
		// are met:
		//  * Redistributions of source code must retain the above copyright
		//    notice, this list of conditions and the following disclaimer.
		//  * Redistributions in binary form must reproduce the above copyright
		//    notice, this list of conditions and the following disclaimer in the
		//    documentation and/or other materials provided with the distribution.
		//  * Neither the name of NVIDIA CORPORATION nor the names of its
		//    contributors may be used to endorse or promote products derived
		//    from this software without specific prior written permission.
		//
		// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
		// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
		// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
		// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
		// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
		// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
		// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
		// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
		// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
		// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
		// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
		//
		//----------------------------------------------------------------------------------

		#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
		#endif

		/*--------------------------------------------------------------------------*/
		#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
		#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
		/*--------------------------------------------------------------------------*/

		#define NUM_SAMPLES 5

		// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
		float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
		}

		/*============================================================================

									FXAA3 QUALITY - PC

		============================================================================*/

		/*--------------------------------------------------------------------------*/
		vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
		) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
				if(earlyExit) FxaaDiscard;
			#else
				if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
				// locate the edge
				vec2 dirToEdge;
				dirToEdge.x = contrastE > contrastW ? 1. : -1.;
				dirToEdge.y = contrastS > contrastN ? 1. : -1.;
				// . 2 .      . 1 .
				// 1 0 2  ~=  0 0 1
				// . 1 .      . 0 .

				// tap 2 pixels and see which ones are "outside" the edge, to
				// determine if the edge is vertical or horizontal

				vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongH = contrast( rgbaM, rgbaAlongH );
				// . 1 .
				// 0 0 1
				// . 0 H

				vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongV = contrast( rgbaM, rgbaAlongV );
				// V 1 .
				// 0 0 1
				// . 0 .

				relativeVContrast = matchAlongV - matchAlongH;
				relativeVContrast *= fxaaQualityinvEdgeThreshold;

				if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
					// 1 1 .
					// 0 0 1
					// . 0 1

					// do a simple blur
					return mix(
						rgbaM,
						(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
						.4
					);
				}

				horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsed = 0;
			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {
				iterationsUsed = i;

				float increment = float(i + 1);

				if(!doneN) {
					nDist += increment;
					posN = posM + offNP * nDist;
					vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
					doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
					iterationsUsedN = i;
				}

				if(!doneP) {
					pDist += increment;
					posP = posM - offNP * pDist;
					vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
					doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
					iterationsUsedP = i;
				}

				if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
				doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
				doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
				rgbaM,
				rgbaN,
				dist * .5
			);
		}

		void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
				vUv,
				tDiffuse,
				resolution,
				edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
				invEdgeDetectionQuality
			);

		}
	`};function bm({own:s,uniforms:e,environment:t}){let n=s(new Bt({color:8752277,roughness:.91,metalness:0,transmission:.018,thickness:.91,ior:1.31,attenuationColor:11123140,attenuationDistance:1.8,clearcoat:0,envMap:t,envMapIntensity:.62,depthWrite:!0,fog:!1}));return n.extensions={...n.extensions,derivatives:!0},n.onBeforeCompile=i=>{Object.assign(i.uniforms,e),i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
        attribute float aSeed,aEnergy;attribute vec3 aSurface;
        varying vec3 vMasonrySurface,vMasonryPosition,vMasonryChamber,vMasonryFace,vMasonryLocalNormal;
        varying float vMasonrySeed,vMasonryEnergy;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vMasonrySurface=aSurface;vMasonryPosition=position;vMasonryLocalNormal=normal;
        vMasonrySeed=aSeed;vMasonryEnergy=aEnergy;
        vec4 masonryPosition=vec4(position,1.);vec3 masonryNormal=normal;
        #ifdef USE_INSTANCING
          masonryPosition=instanceMatrix*masonryPosition;
          mat3 masonryInstance=mat3(instanceMatrix);
          vec3 masonryScale=vec3(length(masonryInstance[0]),length(masonryInstance[1]),length(masonryInstance[2]));
          vMasonryPosition=position*masonryScale;
          vMasonryLocalNormal=normal/masonryScale;
          masonryNormal/=masonryScale*masonryScale;
          masonryNormal=masonryInstance*masonryNormal;
        #endif
        vMasonryChamber=masonryPosition.xyz;vMasonryFace=normalize(masonryNormal);`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
        uniform sampler2D uSnowColor,uSnowNormal;
        uniform float uTime,uSplit,uFade,uEntranceLight;uniform vec3 uAir;
        varying vec3 vMasonrySurface,vMasonryPosition,vMasonryChamber,vMasonryFace,vMasonryLocalNormal;
        varying float vMasonrySeed,vMasonryEnergy;
        float masonryHash(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}
        float masonryNoise(vec2 p){
          vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
          return mix(mix(masonryHash(i),masonryHash(i+vec2(1,0)),f.x),
            mix(masonryHash(i+vec2(0,1)),masonryHash(i+vec2(1,1)),f.x),f.y);
        }
        float masonryFilteredNoise(vec2 p){
          float footprint=max(length(dFdx(p)),length(dFdy(p)));
          return mix(masonryNoise(p),.5,smoothstep(.30,1.1,footprint));
        }
        float masonrySnowAt(vec3 p,vec3 weights){
          return dot(vec3(texture2D(uSnowColor,p.yz).r,texture2D(uSnowColor,p.xz).r,
            texture2D(uSnowColor,p.xy).r),weights);
        }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
        vec3 masonryFace=normalize(vMasonryFace);
        // The carved geometry supplies metres, including each block's scale.
        // Keep that texture frame attached to the stone throughout its flight.
        vec3 masonryP=vMasonryPosition+vec3(vMasonrySeed*1.7,vMasonrySeed*.9,vMasonrySeed*1.3);
        vec3 masonryWeights=pow(abs(normalize(vMasonryLocalNormal)),vec3(6.));
        masonryWeights/=max(dot(masonryWeights,vec3(1.)),.001);
        // Triplanar snow follows every carved face without the stretched
        // stripes of one diagonal UV projection. Mipmaps filter the fine pits.
        float masonrySnow=mix(masonrySnowAt(masonryP*.48,masonryWeights),
          masonrySnowAt(masonryP*1.74+vec3(.23,.51,.79),masonryWeights),.32);
        vec2 masonryUv=masonryP.xy*.71+masonryP.zy*.43;
        float masonryCloud=masonryFilteredNoise(masonryUv*2.8+masonryNoise(masonryUv*.72)*1.1);
        vec3 masonryEdge=abs(vMasonrySurface)*2.;
        float masonryCorner=max(min(masonryEdge.x,masonryEdge.y),
          max(min(masonryEdge.x,masonryEdge.z),min(masonryEdge.y,masonryEdge.z)));
        float masonryRime=smoothstep(.78,1.03,masonryCorner+masonryFilteredNoise(masonryUv*12.)*.055);
        float masonryPowder=clamp(.12+masonrySnow*.38+max(masonryFace.y,0.)*.35
          +masonryRime*.15+masonryCloud*.12,0.,.95);
        float masonryThin=smoothstep(.85,1.,masonryCorner);
        float masonryGrain=masonryFilteredNoise(masonryUv*42.);
        roughnessFactor=clamp(.84+masonryPowder*.12+masonryCloud*.025+masonryGrain*.025,.84,.99);
        diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.49,.515,.548),masonryPowder*.66);
        diffuseColor.rgb*=.55+vMasonrySeed*.065+masonrySnow*.67+masonryCloud*.14;
        vec2 veinUv=masonryUv*2.6;
        float veinDistance=abs(masonryNoise(veinUv)-.5);
        float veinWidth=max(fwidth(veinDistance)*.8,.0018);
        float masonryVein=(1.-smoothstep(veinWidth,veinWidth*2.8,veinDistance))
          *smoothstep(.62,.84,masonryNoise(veinUv*.71+vMasonrySeed));
        diffuseColor.rgb*=1.-masonryVein*.065;`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
        vec3 masonryDx=dFdx(-vViewPosition),masonryDy=dFdy(-vViewPosition);
        // Read the photographed surface slopes instead of differentiating
        // the triplanar blend weights, which drew radial bands on the vault.
        vec3 snowX=mix(texture2D(uSnowNormal,masonryP.yz*.48).xyz,
          texture2D(uSnowNormal,masonryP.yz*1.74+vec2(.51,.79)).xyz,.34)*2.-1.;
        vec3 snowY=mix(texture2D(uSnowNormal,masonryP.xz*.48).xyz,
          texture2D(uSnowNormal,masonryP.xz*1.74+vec2(.23,.79)).xyz,.34)*2.-1.;
        vec3 snowZ=mix(texture2D(uSnowNormal,masonryP.xy*.48).xyz,
          texture2D(uSnowNormal,masonryP.xy*1.74+vec2(.23,.51)).xyz,.34)*2.-1.;
        vec3 masonrySlope=(vec3(0.,snowX.xy/max(snowX.z,.35))*masonryWeights.x
          +vec3(snowY.x,0.,snowY.y)/max(snowY.z,.35)*masonryWeights.y
          +vec3(snowZ.xy/max(snowZ.z,.35),0.)*masonryWeights.z)*.48;
        float masonryRelief=masonryFilteredNoise(masonryUv*7.8)*.024
          +masonryFilteredNoise(masonryUv*24.1)*.004;
        float reliefX=dot(masonrySlope,dFdx(vMasonryPosition))+dFdx(masonryRelief);
        float reliefY=dot(masonrySlope,dFdy(vMasonryPosition))+dFdy(masonryRelief);
        vec3 masonryRx=cross(masonryDy,normal),masonryRy=cross(normal,masonryDx);
        float masonryDet=dot(masonryDx,masonryRx);
        vec3 masonryGradient=sign(masonryDet)*(reliefX*masonryRx+reliefY*masonryRy);
        normal=normalize(max(abs(masonryDet),.000001)*normal-masonryGradient);`).replace("#include <aomap_fragment>",`#include <aomap_fragment>
        float masonryJoint=(1.-smoothstep(-.50,-.30,vMasonrySurface.y))
          *(1.-smoothstep(.015,.22,uSplit))*(1.-clamp(vMasonryEnergy,0.,1.)*.75);
        reflectedLight.indirectDiffuse*=1.-masonryJoint*.32;
        reflectedLight.indirectSpecular*=1.-masonryJoint*.20;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        vec3 chamberLight=vec3(0.,3.35,.4)-vMasonryChamber;
        float chamberDistance=dot(chamberLight,chamberLight);
        float throughIce=pow(max(dot(-masonryFace,normalize(chamberLight)),0.),1.6);
        float lamp=5./(2.+chamberDistance)*uEntranceLight;
        float scatter=throughIce*(.025+masonryThin*.34)*(1.-masonryPowder*.55)*lamp;
        totalEmissiveRadiance+=vec3(.58,.72,.87)*scatter;
        totalEmissiveRadiance+=vec3(.035,.060,.085)*vMasonryEnergy*(masonryRime*.38+masonryVein*.16);`).replace("#include <transmission_fragment>",qe.transmission_fragment.replace("material.transmission = transmission;","material.transmission=transmission*(1.-masonryPowder*.80);").replace("material.thickness = thickness;","material.thickness=thickness*(1.18-masonryThin*.72);")).replace("#include <opaque_fragment>",`
        outgoingLight=mix(outgoingLight,uAir,uFade);
        #include <opaque_fragment>`)},n.customProgramCacheKey=()=>"lab-glacial-masonry-v6",n}var Em=`
  #include <common>
  #include <shadowmap_pars_vertex>
`,Tm=`
  #include <common>
  #include <packing>
  #include <lights_pars_begin>
  #include <shadowmap_pars_fragment>
  #include <shadowmask_pars_fragment>
`,wm=s=>({...Xn.clone(Pe.lights),...s}),Fl=je.clamp,Bs=je.smoothstep,Bu=3.2;function Ab(s,e,t,n=!1){if(e<=.2)return 0;let i=n?1.24+t*.26:.1+e*.7+t*.12,r=n?1.6:1.72;return 1-je.smootherstep(s,i,i+r)}function Am({group:s,own:e,uniforms:t,noise:n,random:i,heightAt:r,environment:o,phone:a,mid:l}){let c=a?12:l?20:28,h=.76,u=.65,d=1.27,f=3,_=(u+d)/2,g=1.05,p=new R(0,3.35,0),m=ee=>3.66*Math.sqrt(Math.max(1e-4,1-((Math.max(2.1,ee)-2.1)/3.91)**2)),x=bm({own:e,uniforms:t,environment:o}),v=[[3.66,.4,12,.78,1,-.025],[3.62,1.25,12,.84,1,-.1],[3.43,2.18,10,.93,1.06,-.27],[2.98,3.2,8,1,1.13,-.46],[2.25,4.24,5,1.02,1.22,-.66]],y=v.length,b=v.length+1,S=v.length+2;function T(ee,z=c,ve=null,Re=!1){let be=new jt(1,1,1,z,z,z),xe=be.attributes.position,ge=new Float32Array(xe.count*3),ue=new R,Fe=new R,ot=new R,Be=.074+ee*.0021;for(let N=0;N<xe.count;N++){ue.fromBufferAttribute(xe,N),Fe.copy(ue).clampScalar(-.5+Be,.5-Be),ot.copy(ue).sub(Fe).normalize(),ue.copy(Fe).addScaledVector(ot,Be);let we=ee*7.17,te=ee*3.91,Ce=(n(ue.x*4.2+we,ue.y*3.8+ue.z*2.9+te)-.5)*.05,De=Math.pow(n(ue.x*13.7+ue.y*4.3+we,ue.z*12.1-ue.y*6.7+te),3)*.043,Ke=(n(ue.x*31+ue.z*11+we,ue.y*29+ue.z*16+te)-.5)*.004,fe=Bs(Math.max(Math.abs(ue.x),Math.abs(ue.z)),.26,.5);if(ue.addScaledVector(ot,Ce-De*fe+Ke),ue.x+=Math.sin(ue.y*3.4+ue.z*2.1+ee)*.003,ue.y+=Math.sin(ue.x*5.6+ue.z*4.1+ee*2)*.003,ge.set([ue.x,ue.y,ue.z],N*3),ve){let[ke,,We,He,it,vt]=ve,An=ue.y*He,On=ue.x*Math.PI*2/We*.965,Rn=ke+An*vt-(.5-ue.z)*it;ue.set(Math.sin(On)*Rn,An,Math.cos(On)*Rn-(ke-it/2))}else if(Re){let ke=ue.x*Math.PI/f*.975,We=_+ue.y*(d-u);ue.set(Math.sin(ke)*We,Math.cos(ke)*We-_,ue.z*1.7)}xe.setXYZ(N,ue.x,ue.y,ue.z)}be.deleteAttribute("normal"),be.deleteAttribute("uv"),be.setAttribute("aSurface",new $e(ge,3));let Te=Rl(be,1e-5);return be.dispose(),Te.computeVertexNormals(),Te.computeBoundingSphere(),e(Te)}let C=[];v.forEach(([ee,z,ve,,Re],be)=>{let xe=ee-Re/2;for(let ge=0;ge<ve;ge++){let ue=(ge+(be===3||be===4?.5:0))/ve*Math.PI*2+h,Fe=Math.abs(Math.atan2(Math.sin(ue-h),Math.cos(ue-h)));if(be<3&&Fe<.01)continue;let ot=i(),Be=be*.012+i()*(be<2?.006:.018);C.push({rest:new R(Math.sin(ue)*xe,1.12+z+Be,Math.cos(ue)*xe),angle:ue+(i()-.5)*.023,pitch:(i()-.5)*.031,roll:(i()-.5)*.039,scale:new R(.97+i()*.025,.975+i()*.025,1+(i()-.5)*.018),seed:ot,row:be,family:be,rowWeight:be/(v.length-1),hover:0,velocity:0,struckAt:-100,pickRadius:Math.max(.6,Math.PI*xe/ve),flight:new R(Math.sin(ue)*(5+i()*3),3+be*.65+i()*2,Math.cos(ue)*(5+i()*3))})}});for(let[ee,z,ve,Re,be,xe,ge]of[[-.55,6.24,.1,1.25,.98,1.72,.18],[.61,6.29,-.15,1.31,1.06,1.66,-.15]]){let ue=i();C.push({rest:new R(ee,z,ve),angle:h+ge,pitch:.025,roll:(ue-.5)*.07,scale:new R(Re,be,xe),seed:ue,row:v.length,crown:!0,family:y,rowWeight:1.12,hover:0,velocity:0,struckAt:-100,pickRadius:.78,flight:new R(ee*7,8+ue*2,ve*5-2)})}function M(ee,z,ve,Re,be,xe=1.7,ge=y){let Fe=i();C.push({rest:new R(ee*Math.cos(h)+3.7*Math.sin(h),1.12+z,-ee*Math.sin(h)+3.7*Math.cos(h)),angle:h,pitch:0,roll:ve,scale:new R(Re,be,xe),seed:Fe,row:z<.85?0:1,family:ge,rowWeight:.18,hover:0,velocity:0,struckAt:-100,pickRadius:.67,flight:new R(Math.sin(h)*6+ee,2.5+z,Math.cos(h)*6)})}for(let ee of[-_,_])M(ee,.26,0,d-u,.515),M(ee,.785,0,d-u,.52);for(let ee=0;ee<f;ee++){let z=(ee+.5)/f*Math.PI;M(Math.cos(z)*_,g+Math.sin(z)*_,z-Math.PI/2,1,1,1,b)}let E=new Ns;E.moveTo(-1.22,0),E.lineTo(-1.22,g),E.absarc(0,g,1.22,Math.PI,0,!0),E.lineTo(1.22,0),E.lineTo(u,0),E.lineTo(u,g),E.absarc(0,g,u,0,Math.PI,!1),E.lineTo(-u,0),E.closePath();let D=e(new xt({color:5331812,roughness:.95,metalness:0,normalMap:t.uSnowNormal.value,normalScale:new re(.13,.13),envMap:o,envMapIntensity:.22,emissive:5470348,emissiveIntensity:.008,transparent:!0,opacity:1})),O=new Oe(e(new ul(E,{depth:2.56,steps:1,curveSegments:a?12:24,bevelEnabled:!0,bevelSegments:2,bevelSize:.025,bevelThickness:.025})),D);O.name="Recessed ice entrance",O.rotation.y=h,O.position.set(Math.sin(h)*1.78,1.12,Math.cos(h)*1.78),O.castShadow=!0,O.receiveShadow=!0,s.add(O);let H=new Ns;H.moveTo(-u,0),H.lineTo(-u,g),H.absarc(0,g,u,Math.PI,0,!0),H.lineTo(u,0),H.closePath();let I=e(new xt({color:1384747,roughness:.98,normalMap:t.uSnowNormal.value,normalScale:new re(.1,.1),envMap:o,envMapIntensity:.09,transparent:!0})),U=new Oe(e(new fl(H,a?12:24)),I);U.name="Far wall inside the entrance",U.rotation.y=h,U.position.set(Math.sin(h)*1.76,1.12,Math.cos(h)*1.76),U.receiveShadow=!0,s.add(U);let F=e(new xt({color:8621719,roughness:.94,normalMap:t.uSnowNormal.value,normalScale:new re(.22,.22),envMap:o,envMapIntensity:.35})),Y=new Oe(e(new jt(u*2,.035,2.8)),F);Y.name="Ice threshold inside the entrance",Y.rotation.y=h,Y.position.set(Math.sin(h)*3.02,1.112,Math.cos(h)*3.02),Y.receiveShadow=!0,s.add(Y);let J=new as(13166330,29,11,2);J.position.set(0,3.35,.4),s.add(J),e(J.shadow);let X=new ht,le=[],ce=0;for(let ee=0;ee<S;ee++){let z=C.filter(ge=>ge.family===ee),ve=T(ee,c,ee<v.length?v[ee]:null,ee===b),Re=new Float32Array(z.length),be=new Float32Array(z.length),xe=new mn(ve,x,z.length);xe.name=`Sculpted frost course ${ee+1}`,xe.castShadow=!0,xe.receiveShadow=!0,xe.frustumCulled=!1,xe.instanceMatrix.setUsage(Tl),z.forEach((ge,ue)=>{Re[ue]=ge.seed}),ve.setAttribute("aSeed",new an(Re,1)),ve.setAttribute("aEnergy",new an(be,1).setUsage(Tl)),ce+=ve.index.count/3*z.length,s.add(xe),le.push({mesh:xe,members:z,energy:be})}let he=a?3:5,K=T(7,a?8:14),oe=new mn(K,x,he),Se=new Float32Array(he);for(let ee=0;ee<he;ee++){let z=(ee%2?1:-1)*(1.55+i()*.55),ve=6.8+i()*4.3,Re=Math.sin(z)*ve,be=Math.cos(z)*ve;X.scale.set(.22+i()*.6,.14+i()*.24,.26+i()*.48),X.position.set(Re,r(Re,be)+X.scale.y*.3,be),X.rotation.set(i()*.22,i()*6.28,i()*.16,"YXZ"),X.updateMatrix(),oe.setMatrixAt(ee,X.matrix),Se[ee]=i()}K.setAttribute("aSeed",new an(Se,1)),K.setAttribute("aEnergy",new an(new Float32Array(he),1)),oe.castShadow=!0,oe.receiveShadow=!0,oe.instanceMatrix.needsUpdate=!0,s.add(oe);let Ae=[new re(0,1.1)];for(let ee=0;ee<=32;ee++){let z=1.1+ee/32*4.66;Ae.push(new re(Math.max(.015,m(z)-.975),z))}Ae.push(new re(0,5.88));let Le=new Oe(e(new hl(Ae,a?48:80)),e(new nt({uniforms:t,depthWrite:!0,side:kn,vertexShader:"varying vec3 vNormal,vView,vLocal;void main(){vec4 mv=modelViewMatrix*vec4(position,1.);vLocal=position;vNormal=normalMatrix*normal;vView=-mv.xyz;gl_Position=projectionMatrix*mv;}",fragmentShader:`
      uniform float uSplit,uEntranceLight;varying vec3 vNormal,vView,vLocal;
      void main(){
        float fade=1.-smoothstep(.04,.20,uSplit);
        float grain=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233)))*43758.5453);
        if(grain>fade)discard;
        float facing=max(dot(normalize(vNormal),normalize(vView)),0.);
        float height=smoothstep(1.2,3.6,vLocal.y);
        float crown=1.-smoothstep(4.3,5.85,vLocal.y);
        vec3 light=vec3(.86,.94,1.06)*(.54+height*.30+facing*.10)
          *mix(.26,1.,crown)*uEntranceLight;
        // The mouth is a real opening into the recessed barrel. A dark
        // surface painted over the light would read as a flat door panel.
        vec2 direction=vec2(.688921,.724836);
        float across=dot(vLocal.xz,vec2(direction.y,-direction.x));
        float along=dot(vLocal.xz,direction),archY=vLocal.y-2.17;
        if(along>0. && abs(across)<.655 && (archY<0. || across*across+archY*archY<.429025))discard;
        gl_FragColor=vec4(light,1.);
      }`})));Le.name="Luminous ice chamber with a shaded entrance",s.add(Le);let Z=e(new st),k=new Float32Array(6*2*3);Z.setAttribute("position",new $e(k,3).setUsage(Tl));let ne=e(new hi({color:15267066,transparent:!0,opacity:0,depthWrite:!1})),_e=new Ii(Z,ne);_e.frustumCulled=!1,_e.renderOrder=3,s.add(_e);let L=new Br,j=new re,q=new R,se=new Jt(p,3.8),V=new Jt,ye=new R,Me=new R,A=new R,w=C.map(()=>new R),B=new Map(C.map((ee,z)=>[ee,z])),pe=0,me=0,ae=0,Ie=0,G=0,de=0,Ee=0;return{pick(ee,z){if(!ee)return null;j.set(ee.x,ee.y),L.setFromCamera(j,z);let ve=1/0,Re=null;for(let be=0;be<C.length;be++)if(V.center.copy(w[be]).add(s.position),V.radius=C[be].pickRadius,L.ray.intersectSphere(V,ye)){let xe=ye.distanceToSquared(z.position);xe<ve&&(ve=xe,Re={index:-1,point:ye.clone()})}return Re},strike(ee,z){Me.copy(ee).sub(s.position);for(let ve=0;ve<C.length;ve++)w[ve].distanceToSquared(Me)<3.2&&(C[ve].struckAt=z)},update({cp:ee,time:z,arrivalTime:ve=z,camera:Re,pointer:be,paused:xe}){let ge=xe?0:Fl(z-pe,0,.05);pe=z,Ie=Bs(ee,.14,.9),O.visible=ee<.7,U.visible=O.visible,Y.visible=ee<.62,Le.visible=Ie<.2,D.opacity=1-Bs(Ie,.12,.58),I.opacity=D.opacity;let ue=ee<.76,Fe=!1;be&&ue&&!xe&&(j.set(be.x,be.y),L.setFromCamera(j,Re),se.center.copy(p).add(s.position),Fe=!!L.ray.intersectSphere(se,q),Fe&&q.sub(s.position)),de=Fl(ve/Bu,0,1);let ot=1-Bs(ee,.04,.38);me=0,ae=0,Ee=0;let Be=0;for(let we of le)we.members.forEach((te,Ce)=>{let De=Fe?q.distanceToSquared(te.rest):1e3,Ke=Math.exp(-De*.63)*(te.row===0?0:1)*(1-Ie),fe=6.4,ke=Math.exp(-fe*ge),We=te.hover-Ke,He=(te.velocity+fe*We)*ge;te.hover=Ke+(We+He)*ke,te.velocity=(te.velocity-fe*He)*ke,te.hover>.045&&me++;let it=Fl((Ie-te.seed*.09-(1-te.rowWeight)*.1)/.81,0,1),vt=Bs(it,0,1),An=te.row<3?0:te.rowWeight*.024*(.5+.5*Math.sin(z*.42+te.seed*6.28)),On=Math.exp(-Math.max(0,z-te.struckAt)*3.6),Rn=te.hover*(.28+te.rowWeight*.6)+An+(te.row>0?On*.075:0),Mt=Ab(ve,te.row<2?0:te.rowWeight,te.seed,te.crown)*ot,zt=Fl((te.rowWeight-.2)/.8,0,1),Qs=Math.pow(zt,1.4)*(te.crown?1.7:1.12)*Mt,so=zt*.16*Mt;Ee=Math.max(Ee,Qs),ae=Math.max(ae,Rn+Qs),A.copy(te.rest).addScaledVector(te.flight,vt),A.x+=Math.sin(te.angle)*(te.hover*.23+so),A.z+=Math.cos(te.angle)*(te.hover*.23+so),A.y+=Rn+Qs,X.position.copy(A),X.rotation.set(te.pitch+te.hover*(te.seed-.5)*.48+vt*(te.seed-.5)*1.8+Mt*zt*(te.seed-.5)*.34,te.angle+te.hover*(te.seed-.5)*.36+vt*(te.seed-.5)*2.4+Mt*zt*(te.seed-.5)*.28,te.roll+te.hover*(te.seed-.5)*.42+vt*(te.seed-.5)*1.2+Mt*zt*(te.seed-.5)*.25,"YXZ"),X.scale.copy(te.scale),X.updateMatrix(),we.mesh.setMatrixAt(Ce,X.matrix),we.energy[Ce]=te.hover+On,Be=Math.max(Be,te.hover+On),w[B.get(te)].copy(A)}),we.mesh.instanceMatrix.needsUpdate=!0,we.mesh.geometry.attributes.aEnergy.needsUpdate=!0;t.uIceEnergy.value=Be;let Te=.76+Bs(ve,.45,2.65)*.24;t.uEntranceLight.value=(Te+Be*.2)*(1-Bs(Ie,.04,.55)),J.intensity=29*t.uEntranceLight.value;let N=Fe&&Ie<.2?1:0;if(xe||(G+=(N-G)*(1-Math.exp(-ge*8))),_e.visible=G>.01,ne.opacity=G*.22,_e.visible&&Fe){let we=C.map((Ce,De)=>({i:De,d:Ce.rest.distanceToSquared(q)})).sort((Ce,De)=>Ce.d-De.d).slice(0,4),te=0;for(let Ce=0;Ce<we.length;Ce++)for(let De=Ce+1;De<we.length;De++)for(let Ke of[we[Ce],we[De]]){let fe=w[Ke.i],ke=fe.clone().sub(p).normalize().multiplyScalar(.59).add(fe);k[te++]=ke.x,k[te++]=ke.y,k[te++]=ke.z}Z.attributes.position.needsUpdate=!0}},diagnostics:()=>({iceBlocks:C.length,iceTriangles:ce,blockVariants:S,blockDivisions:c,debris:he,courses:v.length,crownStones:2,archStones:f,hovered:me,maxLift:+ae.toFixed(3),split:+Ie.toFixed(3),arrival:+de.toFixed(3),arrivalLift:+Ee.toFixed(3)})}}var Rm=`
  varying vec2 vUv;
  void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}
`;function Cm({parent:s,own:e,uniforms:t,heightAt:n,random:i,phone:r,mid:o}){let a=r?420:o?820:1400,l=new Float32Array(a*3),c=new Float32Array(a);for(let f=0;f<a;f++){let _=i()*Math.PI*2,g=4+Math.pow(i(),.75)*12,p=Math.sin(_)*g,m=Math.cos(_)*g;l.set([p,n(p,m)+.035+i()*.24,m],f*3),c[f]=i()}let h=e(new st);h.setAttribute("position",new $e(l,3)),h.setAttribute("aSeed",new $e(c,1));let u=e(new nt({uniforms:t,transparent:!0,depthWrite:!1,vertexShader:`
      attribute float aSeed;uniform float uTime,uPx,uFade,uIceEnergy;uniform vec3 uSunDirection;
      varying float vAlpha,vLight;
      void main(){
        float phase=fract(aSeed+uTime*.047),life=sin(phase*3.14159265);
        vec3 p=position;
        p.x+=(phase-.5)*2.4;p.z-=(phase-.5)*.75;
        float nearDome=exp(-max(length(position.xz)-4.0,0.)*.6);
        p.y+=life*(.07+aSeed*.20+uIceEnergy*nearDome*.25);
        vec4 world=modelMatrix*vec4(p,1.),mv=viewMatrix*world;
        vec3 crystal=normalize(vec3(sin(aSeed*47.+uTime*.07),.4+pow(sin(aSeed*28.),2.),cos(aSeed*37.)));
        vec3 view=normalize(cameraPosition-world.xyz);
        float glint=pow(max(dot(reflect(-uSunDirection,crystal),view),0.),32.);
        vLight=.44+glint*2.6;
        vAlpha=life*life*(.18+aSeed*.25)*(1.-uFade);
        gl_PointSize=clamp((2.+aSeed*3.)*uPx/max(-mv.z*.12,.5),.7,5.5);
        gl_Position=projectionMatrix*mv;
      }`,fragmentShader:`
      varying float vAlpha,vLight;
      void main(){
        vec2 p=gl_PointCoord-.5;p=vec2(p.x+p.y*.18,p.y*2.7);
        float r=dot(p,p);if(r>.25)discard;
        float edge=1.-smoothstep(.025,.25,r);
        gl_FragColor=vec4(vec3(.74,.85,1.)*vLight,edge*vAlpha);
      }`})),d=new ns(h,u);return d.name="Wind lifting loose frost around the igloo",d.frustumCulled=!1,s.add(d),{count:a}}var Bl=class extends gn{constructor({camera:e,lighting:t,phone:n,mid:i}){super(),this.lighting=t,this.scale=n?.45:i?.4:.5,this.target=new Vt(1,1,{type:pn,minFilter:Kt,magFilter:Kt,depthBuffer:!1,stencilBuffer:!1}),this.uniforms={tDepth:{value:null},tShadow:{value:null},uProjectionInverse:{value:e.projectionMatrixInverse},uCameraWorld:{value:e.matrixWorld},uEye:{value:e.position},uLightMatrix:{value:t.sun.shadow.matrix},uLightTexel:{value:new re(1,1).divide(t.sun.shadow.mapSize)},uLightReady:{value:0},uLightDirection:{value:new R},uTime:t.clock,uEnergy:t.energy,uEntrance:t.entrance,uOpening:{value:1},uGroundY:{value:0}},this.fog=new nt({uniforms:this.uniforms,defines:{AIR_STEPS:n?8:i?12:16},depthTest:!1,depthWrite:!1,vertexShader:Rm,fragmentShader:`
        #include <packing>
        uniform sampler2D tDepth,tShadow;
        uniform mat4 uProjectionInverse,uCameraWorld,uLightMatrix;
        uniform vec3 uEye,uLightDirection;uniform vec2 uLightTexel;
        uniform float uTime,uEnergy,uOpening,uGroundY,uLightReady,uEntrance;
        varying vec2 vUv;
        float airHash(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}
        float airNoise(vec2 p){
          vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
          return mix(mix(airHash(i),airHash(i+vec2(1,0)),f.x),
            mix(airHash(i+vec2(0,1)),airHash(i+vec2(1,1)),f.x),f.y);
        }
        float airShadow(vec3 p){
          if(uLightReady<.5)return 1.;
          vec4 projected=uLightMatrix*vec4(p,1.);
          vec3 q=projected.xyz/projected.w;
          if(any(lessThan(q,vec3(0.)))||any(greaterThan(q,vec3(1.))))return 1.;
          float d=q.z-.001;
          float light=step(d,unpackRGBAToDepth(texture2D(tShadow,q.xy+uLightTexel*vec2(-.7,-.7))));
          light+=step(d,unpackRGBAToDepth(texture2D(tShadow,q.xy+uLightTexel*vec2(.7,-.7))));
          light+=step(d,unpackRGBAToDepth(texture2D(tShadow,q.xy+uLightTexel*vec2(-.7,.7))));
          light+=step(d,unpackRGBAToDepth(texture2D(tShadow,q.xy+uLightTexel*vec2(.7,.7))));
          return light*.25;
        }
        void main(){
          float depth=texture2D(tDepth,vUv).x;
          vec4 endpoint=uProjectionInverse*vec4(vUv*2.-1.,depth*2.-1.,1.);
          endpoint/=endpoint.w;
          vec3 world=(uCameraWorld*endpoint).xyz;
          vec3 ray=world-uEye;
          float distanceToSurface=length(ray);ray/=max(distanceToSurface,.001);
          float travel=min(distanceToSurface,64.);
          float stepLength=travel/float(AIR_STEPS);
          float jitter=.25+airHash(gl_FragCoord.xy)*.50;
          float forward=dot(ray,uLightDirection);
          float phase=.10*.6156/pow(max(.05,1.3844-1.24*forward),1.5);
          vec3 scattered=vec3(0.);float transmission=1.;
          vec3 doorDirection=vec3(.688921,0.,.724836);
          vec3 doorOrigin=doorDirection*3.95+vec3(0.,2.10+uGroundY,0.);
          for(int i=0;i<AIR_STEPS;i++){
            vec3 p=uEye+ray*(float(i)+jitter)*stepLength;
            float height=p.y-uGroundY-1.12;
            float ceiling=1.-smoothstep(3.5,6.4,height);
            float vaporDensity=airNoise(p.xz*.28+vec2(uTime*.026,-uTime*.009));
            vaporDensity=vaporDensity*.66+airNoise(p.xz*.73+vec2(-uTime*.012,uTime*.008))*.34;
            float density=(.007+pow(vaporDensity,1.8)*.025)*exp(-max(height,0.)*.77)*ceiling;
            density*=uOpening*smoothstep(-.7,.08,height);
            float light=airShadow(p);
            vec3 radiance=vec3(.22,.285,.37)+vec3(.57,.66,.77)*light*(.20+phase);
            vec3 fromDoor=p-doorOrigin;
            float along=dot(fromDoor,doorDirection);
            vec3 radial=fromDoor-doorDirection*along;
            float coneRadius=.37+max(along,0.)*.15;
            float beam=exp(-dot(radial,radial)/(coneRadius*coneRadius)*1.9)
              *smoothstep(0.,.35,along)*(1.-smoothstep(3.8,6.4,along))*exp(-max(along,0.)*.30);
            radiance+=vec3(.58,.81,1.08)*beam*.85*uEntrance;
            float opacity=1.-exp(-density*stepLength);
            scattered+=transmission*radiance*opacity;
            transmission*=1.-opacity;
          }
          gl_FragColor=vec4(scattered,transmission);
        }`}),this.composite=new nt({uniforms:{tDiffuse:{value:null},tFog:{value:this.target.texture},tDepth:{value:null},uFogTexel:{value:new re(1,1)},uNear:{value:e.near},uFar:{value:e.far}},depthTest:!1,depthWrite:!1,vertexShader:Rm,fragmentShader:`
        #include <packing>
        uniform sampler2D tDiffuse,tFog,tDepth;uniform vec2 uFogTexel;
        uniform float uNear,uFar;varying vec2 vUv;
        float linearDepth(vec2 uv){return -perspectiveDepthToViewZ(texture2D(tDepth,uv).x,uNear,uFar);}
        void main(){
          float centerDepth=linearDepth(vUv),weight=0.;vec4 fog=vec4(0.);
          for(int y=0;y<2;y++)for(int x=0;x<2;x++){
            vec2 uv=clamp(vUv+(vec2(float(x),float(y))-.5)*uFogTexel,vec2(.00001),vec2(.99999));
            float w=1./(.04+abs(centerDepth-linearDepth(uv)));
            fog+=texture2D(tFog,uv)*w;weight+=w;
          }
          fog/=weight;vec4 scene=texture2D(tDiffuse,vUv);
          gl_FragColor=vec4(scene.rgb*fog.a+fog.rgb,scene.a);
        }`}),this.quad=new di(this.fog)}update(e){this.uniforms.uOpening.value=1-je.smoothstep(e,.64,1.02),this.uniforms.uGroundY.value=this.lighting.ground.position.y,this.enabled=this.uniforms.uOpening.value>.001}setSize(e,t){let n=Math.max(1,Math.ceil(e*this.scale)),i=Math.max(1,Math.ceil(t*this.scale));this.target.setSize(n,i),this.composite.uniforms.uFogTexel.value.set(1/n,1/i)}render(e,t,n){let i=this.lighting.sun;this.uniforms.tDepth.value=n.depthTexture,this.uniforms.tShadow.value=i.shadow.map?.texture??null,this.uniforms.uLightReady.value=i.shadow.map?1:0,this.uniforms.uLightDirection.value.copy(i.position).sub(i.target.position).normalize(),this.composite.uniforms.tDepth.value=n.depthTexture,this.composite.uniforms.tDiffuse.value=n.texture,this.quad.material=this.fog,e.setRenderTarget(this.target),this.quad.render(e),this.quad.material=this.composite,e.setRenderTarget(this.renderToScreen?null:t),this.quad.render(e)}dispose(){this.target.dispose(),this.fog.dispose(),this.composite.dispose(),this.quad.dispose()}};var zu=`
  float hash21(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }
  float noise2(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    f = f*f*(3.0-2.0*f);
    return mix(mix(hash21(i),hash21(i+vec2(1,0)),f.x),
               mix(hash21(i+vec2(0,1)),hash21(i+vec2(1,1)),f.x),f.y);
  }
  float fbm(vec2 p) {
    float v = noise2(p)*.5;
    p = mat2(.8,-.6,.6,.8)*p*2.03;
    v += noise2(p)*.25;
    p = mat2(.8,-.6,.6,.8)*p*2.01;
    v += noise2(p)*.125;
    return v;
  }
`,yn=(s,e,t)=>je.smoothstep(s,e,t);function Pm({scene:s,snowColor:e,snowNormal:t,iceEnvironment:n,phone:i,mid:r}){let o=new Set,a=Z=>(o.add(Z),Z),l=new Ot;l.name="Frozen landscape",s.add(l);let c=73417,h=()=>(c=Math.imul(c,1664525)+1013904223>>>0,c/4294967296),u={uTime:{value:0},uSurface:{value:1},uSplit:{value:0},uCharge:{value:0},uPx:{value:1},uFade:{value:0},uGallery:{value:0},uIceEnergy:{value:0},uEntranceLight:{value:1},uSunDirection:{value:new R(15,13,6).normalize()},uSnowColor:{value:e},uSnowNormal:{value:t},uAir:{value:new Ue(.315,.334,.367)},uProbe:{value:new ct(0,0,0,0)}},d=new Oe(a(new pl(78,36,24)),a(new nt({uniforms:u,side:Ft,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vDirection; void main(){vDirection=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`
      ${zu}
      uniform float uTime, uSurface, uGallery;uniform vec3 uSunDirection;
      varying vec3 vDirection;
      void main(){
        vec3 d=normalize(vDirection);
        float horizon=1.0-smoothstep(-.08,.7,d.y);
        vec3 day=mix(vec3(.235,.260,.308),vec3(.438,.463,.495),horizon);
        float cloud=fbm(d.xz*3.4+vec2(uTime*.006,0.0));
        day+=vec3(.048,.047,.046)*smoothstep(.24,.66,cloud)*smoothstep(-.05,.4,d.y);
        float sun=pow(max(0.0,dot(d,uSunDirection)),7.0);
        day+=vec3(.15,.16,.18)*sun;
        float window=exp(-pow((d.x+.55)*1.8,2.)-pow((d.y-.40)*2.0,2.));
        float reflection=exp(-pow((d.y+.24)*10.,2.))*(.60+.40*noise2(d.xz*4.));
        vec3 gallery=vec3(.205,.228,.278)+vec3(.25,.255,.27)*window+vec3(.020,.025,.034)*reflection;
        float vapor=fbm(d.xz*4.6+vec2(uTime*.003,-uTime*.001));
        float bank=exp(-pow((d.y+.15+noise2(d.xz*1.8)*.24)*4.,2.));
        gallery+=vec3(.028,.032,.038)*smoothstep(.28,.64,vapor)*bank;
        day=mix(day,gallery,uGallery);
        vec3 night=mix(vec3(.005,.011,.019),vec3(.025,.037,.052),horizon);
        gl_FragColor=vec4(mix(night,day,uSurface),1.0);
      }`})));d.renderOrder=-20,s.add(d);let f=(Z,k)=>{let ne=Math.imul(Z,374761393)+Math.imul(k,668265263);return ne=Math.imul(ne^ne>>>13,1274126177),((ne^ne>>>16)>>>0)/4294967295},_=(Z,k)=>{let ne=Math.floor(Z),_e=Math.floor(k),L=Z-ne,j=k-_e;return L=L*L*(3-2*L),j=j*j*(3-2*j),je.lerp(je.lerp(f(ne,_e),f(ne+1,_e),L),je.lerp(f(ne,_e+1),f(ne+1,_e+1),L),j)},g=(Z,k)=>{let ne=Math.hypot(Z,k),_e=(ee,z,ve,Re,be)=>{let xe=(_(Z*.046+ee*.13,k*.039+z*.09)-.5)*.2;return be*Math.exp(-(Math.abs((Z-ee)/ve+xe)**1.62)-Math.abs((k-z)/Re)**1.88)},L=_(Z*.045,k*.045)*4,j=.34+_(Z*.08,k*.08)*1.2,q=_e(-21,-29,25,13,15)+_e(-39,-43,18,16,18)+_e(23,-42,25,17,20)+_e(47,-54,19,18,19)+_e(-61,-69,26,23,22)+_e(4,-93,31,24,26)+_e(69,-79,31,29,24),se=_(Z*.08+_(k*.04,Z*.07)*2,k*.041),V=Math.exp(-(((se-.5)*4.4)**2)),ye=_(Z*.135+L*.48,k*.16+L*.26);j+=q*(.97-V*.16+(_(Z*.072,k*.085)-.5)*.28+(ye-.5)*.13),j+=_e(-7.8,7,3.9,4.3,3.1)+_e(11.4,3,6.1,6.5,2.8),j+=_e(-6.5,10.2,3.5,5,2.05)+_e(10.2,10,4.9,6,1.6);let Me=_(Z*.085+L*.5,k*.11),A=4*Me*(1-Me);j+=A*A*(.34+yn(ne,10,35)*.7);let w=1-yn(ne,16,36),B=Z*.91-k*.41,pe=Z*.41+k*.91,me=Math.pow(yn(_(B*1.05+L,pe*.27),.24,.82),3),ae=yn(ne,4.1,7)*w;j+=me*.62*ae,j-=Math.pow(_(B*1.46+11,pe*.53+L),3)*.24*ae,j+=(_(Z*.7+L,k*.5)-.5)*.31*w,j+=(_(Z*1.8,k*1.4)-.5)*.025*w,j+=(_(Z*.24,k*.22)-.5)*(.15+yn(ne,8,30)*.38);let Ie=.16*Math.exp(-(((ne-3.87)/.78)**2))*(.45+_(Z*.85,k*.85)*.55),G=Z*Math.cos(.76)-k*Math.sin(.76),de=Z*Math.sin(.76)+k*Math.cos(.76),Ee=Math.exp(-((G/.86)**2))*yn(de,2.3,4);return je.lerp(1.12,j,yn(ne,3.8,7.4))+Ie*(1-Ee*.95)},p=a(new nt({uniforms:wm(u),lights:!0,fog:!1,extensions:{derivatives:!0},vertexShader:`
      ${Em}
      varying vec3 vWorld, vNormal;
      void main(){
        vec4 wp=modelMatrix*vec4(position,1.0);
        vWorld=wp.xyz; vNormal=normalize(mat3(modelMatrix)*normal);
        vec4 worldPosition=wp;
        vec3 transformedNormal=mat3(viewMatrix)*vNormal;
        #include <shadowmap_vertex>
        gl_Position=projectionMatrix*viewMatrix*wp;
      }`,fragmentShader:`
      ${Tm}
      ${zu}
      uniform vec3 uAir,uSunDirection;
      uniform sampler2D uSnowColor,uSnowNormal;
      uniform float uTime,uFade,uSplit,uIceEnergy,uEntranceLight;
      varying vec3 vWorld, vNormal;
      float filteredNoise(vec2 p) {
        float footprint=max(length(dFdx(p)),length(dFdy(p)));
        return mix(noise2(p),.5,smoothstep(.3,1.1,footprint));
      }
      float snowShadow(){
        #if NUM_DIR_LIGHT_SHADOWS > 0
          vec3 q=vDirectionalShadowCoord[0].xyz/vDirectionalShadowCoord[0].w;
          if(any(lessThan(q,vec3(0.)))||any(greaterThan(q,vec3(1.))))return 1.;
          float depth=q.z+directionalLightShadows[0].shadowBias;
          float blockers=0.,separation=0.;
          for(int i=0;i<8;i++){
            float angle=float(i)*2.399963;
            vec2 offset=vec2(cos(angle),sin(angle))*.0038;
            float d=unpackRGBAToDepth(texture2D(directionalShadowMap[0],q.xy+offset));
            float blocked=step(d,depth-.00008);
            blockers+=blocked;separation+=(depth-d)*blocked;
          }
          if(blockers<.5)return 1.;
          // Widen the penumbra with the distance below the blocker. Contact
          // stays close to the masonry; its shadow softens across the snow.
          float radius=clamp(.0014+separation/blockers*.16,.0014,.017);
          float shade=0.;
          for(int i=0;i<16;i++){
            float angle=float(i)*2.399963;
            vec2 offset=vec2(cos(angle),sin(angle))*sqrt((float(i)+.5)/16.)*radius;
            float d=unpackRGBAToDepth(texture2D(directionalShadowMap[0],q.xy+offset));
            shade+=smoothstep(depth-.00010,depth+.00004,d);
          }
          return shade/16.;
        #else
          return 1.;
        #endif
      }
      void main(){
        vec3 n=normalize(vNormal);
        float coarse=fbm(vWorld.xz*.34);
        vec2 snowUv=vWorld.xz*.46;
        // Two scales of the photographed snow map give the drifts a fine,
        // uneven crust without repeating a conspicuous patch across a hill.
        vec2 snowUv2=mat2(.8,-.6,.6,.8)*snowUv*2.27+vec2(.37,.61);
        vec3 mapNormal=mix(texture2D(uSnowNormal,snowUv).xyz,
          texture2D(uSnowNormal,snowUv2).xyz,.30)*2.-1.;
        vec3 tangent=normalize(vec3(n.y,-n.x,.00001));
        vec3 bitangent=normalize(cross(tangent,n));
        n=normalize(n*max(.85,mapNormal.z)+tangent*mapNormal.x*.92+bitangent*mapNormal.y*.92);
        vec2 windUv=mat2(.94,-.34,.34,.94)*vWorld.xz*vec2(.78,.28);
        float cut=filteredNoise(windUv*4.1+coarse*2.4);
        float relief=pow(cut,2.)*.027+filteredNoise(vWorld.xz*17.)*.0028;
        vec3 snowDx=dFdx(vWorld),snowDy=dFdy(vWorld);
        vec3 snowRx=cross(snowDy,n),snowRy=cross(n,snowDx);
        float snowDet=dot(snowDx,snowRx);
        n=normalize(max(abs(snowDet),.000001)*n-sign(snowDet)*(dFdx(relief)*snowRx+dFdy(relief)*snowRy));
        float albedo=dot(mix(texture2D(uSnowColor,snowUv).rgb,
          texture2D(uSnowColor,snowUv2).rgb,.30),vec3(.299,.587,.114));
        float grains=filteredNoise(vWorld.xz*64.0);
        float light=max(0.0,dot(n,uSunDirection));
        float snow=smoothstep(.49,.92,normalize(vNormal).y+coarse*.22);
        float strata=sin(vWorld.y*4.8+fbm(vWorld.xz*.35)*3.4);
        vec3 rock=vec3(.050,.071,.108)*(1.0+coarse*.18+strata*.075);
        vec3 frost=vec3(.35,.374,.405)*(.39+albedo*1.14);
        vec3 col=mix(rock,frost,snow)*(.30+light*.94*mix(.38,1.,snowShadow()));
        col*=.97+cut*.045;
        float wind=filteredNoise(windUv*2.1+coarse*2.4);
        col*=.96+.055*wind;
        // Thin exposed blue ice follows the packed wind channels.
        float glaze=pow(wind,9.)*smoothstep(.55,.90,n.y)*.055;
        col+=vec3(.28,.36,.45)*glaze*pow(1.-max(0.,dot(n,normalize(cameraPosition-vWorld))),3.);
        col+=pow(grains,23.0)*pow(light,6.0)*.040;
        float r=length(vWorld.xz);
        col*=1.-.27*exp(-pow(r/4.00,4.))*(1.-uSplit);
        col+=vec3(.25,.31,.42)*exp(-pow((r-3.2)*1.7,2.0))*.035;
        vec2 doorDirection=vec2(.688921,.724836),doorSide=vec2(doorDirection.y,-doorDirection.x);
        vec2 doorDelta=vWorld.xz-doorDirection*3.45;
        float doorAlong=dot(doorDelta,doorDirection),doorAcross=dot(doorDelta,doorSide);
        float doorWidth=.70+max(doorAlong,0.)*.22;
        float doorPool=exp(-pow(doorAcross/doorWidth,2.)*1.8)
          *smoothstep(-.6,.15,doorAlong)*(1.-smoothstep(3.6,6.,doorAlong))/(1.+max(doorAlong,0.)*.7);
        float caustic=1.-smoothstep(.018,.10,abs(noise2(vWorld.xz*3.5+vec2(uTime*.018,0.))-.48));
        col+=vec3(.72,.80,.93)*doorPool*(.40+caustic*.055)*max(n.y,0.)*uEntranceLight;
        float mist=1.0-exp(-pow(length(cameraPosition-vWorld)*.0084,1.5));
        col=mix(col,uAir,max(mist,uFade));
        gl_FragColor=vec4(col,1.0);
      }`})),m=i?112:r?186:256,x=i?224:r?320:512,v=.001,y=[],b=[],S=[];for(let Z=0;Z<m;Z++){let k=v+Math.pow(Z/(m-1),1.65)*(135-v);for(let ne=0;ne<x;ne++){let _e=ne/x*Math.PI*2,L=Math.cos(_e)*k,j=Math.sin(_e)*k;y.push(L,g(L,j),j);let q=.065+yn(k,18,80)*.14,se=g(L+q,j)-g(L-q,j),V=g(L,j+q)-g(L,j-q),ye=Math.hypot(se,2*q,V);b.push(-se/ye,2*q/ye,-V/ye)}}for(let Z=0;Z<m-1;Z++)for(let k=0;k<x;k++){let ne=Z*x+k,_e=Z*x+(k+1)%x,L=ne+x,j=_e+x;S.push(ne,_e,L,_e,j,L)}let T=a(new st);T.setAttribute("position",new Ve(y,3)),T.setAttribute("normal",new Ve(b,3)),T.setIndex(S);let C=S.length/3,M=new Oe(T,p);M.name="Continuous glacial basin",M.receiveShadow=!0,M.castShadow=!0,l.add(M);let E=new Fr(16053494,2.95);E.position.set(15,13,6),E.target.position.set(0,2,0),E.castShadow=!0,E.shadow.mapSize.setScalar(i?1024:2048),Object.assign(E.shadow.camera,{left:-11,right:11,top:11,bottom:-11,near:1,far:60}),E.shadow.bias=-16e-5,E.shadow.normalBias=.038,E.shadow.radius=2,E.shadow.camera.updateProjectionMatrix(),a(E.shadow),s.add(E,E.target);let D=Am({group:l,own:a,uniforms:u,noise:_,random:h,heightAt:g,environment:n,phone:i,mid:r}),O=Cm({parent:l,own:a,uniforms:u,heightAt:g,random:h,phone:i,mid:r}),H=a(new Nr(1,2)),I=H.attributes.position;for(let Z=0;Z<I.count;Z++){let k=I.getX(Z),ne=I.getY(Z),_e=I.getZ(Z),L=.84+_(k*3.4+17,_e*3.1+ne*.8)*.3;I.setXYZ(Z,k*L,ne*(.86+_(k*3+4,_e*4)*.22),_e*L)}H.computeVertexNormals();let U=new Float32Array(I.count*3),F=new Ue;for(let Z=0;Z<I.count;Z++){let k=H.attributes.normal.getY(Z),ne=yn(k,.05,.72);F.setRGB(.052+ne*.26,.068+ne*.27,.091+ne*.29),F.toArray(U,Z*3)}H.setAttribute("color",new $e(U,3));let Y=a(new xt({vertexColors:!0,roughness:.97,metalness:0,normalMap:t,normalScale:new re(.38,.38),envMap:n,envMapIntensity:.44,fog:!1}));Y.onBeforeCompile=Z=>{Z.uniforms.uFade=u.uFade,Z.uniforms.uAir=u.uAir,Z.fragmentShader=Z.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFade;uniform vec3 uAir;`).replace("#include <opaque_fragment>",`outgoingLight=mix(outgoingLight,uAir,uFade);
#include <opaque_fragment>`)},Y.customProgramCacheKey=()=>"lab-moraine-v1";let J=i?8:14,X=new mn(H,Y,J),le=new ht;X.name="Snow-capped glacial moraine";for(let Z=0;Z<J;Z++){let k=Z%2?-1:1,ne=k*(7.8+h()*5.6),_e=1.8+h()*10;le.scale.set(.48+h()*1.26,.2+h()*.54,.56+h()*1.2),le.position.set(ne,g(ne,_e)+le.scale.y*.1,_e),le.rotation.set((h()-.5)*.38,h()*Math.PI,(h()-.5)*.28),le.updateMatrix(),X.setMatrixAt(Z,le.matrix)}X.instanceMatrix.needsUpdate=!0,X.castShadow=!0,X.receiveShadow=!0,l.add(X);let ce=i?130:r?230:430,he=a(new st),K=new Float32Array(ce*3),oe=new Float32Array(ce);for(let Z=0;Z<ce;Z++)K.set([(h()-.5)*55,h()*22,(h()-.5)*55],Z*3),oe[Z]=h();he.setAttribute("position",new $e(K,3)),he.setAttribute("aSeed",new $e(oe,1));let Se=new ns(he,a(new nt({uniforms:u,transparent:!0,depthWrite:!1,vertexShader:`
      attribute float aSeed; uniform float uTime,uPx; varying float vAlpha;
      void main(){
        vec3 p=position;
        p.y=mod(p.y-uTime*(.12+aSeed*.19)+220.0,22.0);
        p.x+=sin(uTime*.13+aSeed*34.0)*.7;
        vec4 mv=modelViewMatrix*vec4(p,1.0);
        gl_PointSize=clamp((.7+aSeed*3.7)*uPx*13.0/max(2.0,-mv.z),.6,7.0);
        vAlpha=(.12+aSeed*.18)*(1.0-smoothstep(12.0,40.0,-mv.z));
        gl_Position=projectionMatrix*mv;
      }`,fragmentShader:"varying float vAlpha;void main(){float a=1.0-smoothstep(.05,.5,length(gl_PointCoord-.5));gl_FragColor=vec4(.88,.94,1.0,a*vAlpha);}"})));Se.frustumCulled=!1,s.add(Se);let Ae=a(new nt({uniforms:u,transparent:!0,depthWrite:!1,side:fn,vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`
      ${zu}
      uniform float uTime; uniform vec3 uAir; varying vec2 vUv;
      void main(){
        float n=fbm(vUv*vec2(7.0,3.5)+vec2(uTime*.015,0.0));
        float edge=smoothstep(0.0,.2,vUv.x)*(1.0-smoothstep(.8,1.0,vUv.x));
        edge*=sin(vUv.y*3.14159);
        gl_FragColor=vec4(uAir,smoothstep(.17,.7,n)*edge*.15);
      }`})),Le=a(new Ds(74,13));for(let Z=0;Z<3;Z++){let k=new Oe(Le,Ae);k.position.set((Z-1)*8,4+Z*2,-12-Z*11),l.add(k)}return{heightAt:g,lighting:{sun:E,ground:l,clock:u.uTime,energy:u.uIceEnergy,entrance:u.uEntranceLight},pick(Z,k){return l.visible?D.pick(Z,k):null},strike(Z,k){return D.strike(Z,k)},update({cp:Z,time:k,arrivalTime:ne=k,charge:_e,camera:L,dpr:j,pointer:q,paused:se}){u.uTime.value=k,u.uSurface.value=1,u.uCharge.value=_e,u.uPx.value=j,u.uSplit.value=yn(Z,.14,.9),u.uFade.value=yn(Z,.42,.96),u.uGallery.value=yn(Z,.56,1.1),d.position.copy(L.position),l.visible=Z<.985,l.position.y=-yn(Z,.28,.98)*7,l.visible&&D.update({cp:Z,time:k,arrivalTime:ne,camera:L,pointer:q,paused:se}),Se.position.set(L.position.x,Math.max(0,L.position.y-6),L.position.z-13);let V=yn(Z,.8,1.1);return E.position.set(je.lerp(15,L.position.x+12,V),je.lerp(13,22,V),je.lerp(6,-9,V)),E.target.position.set(Z<.8?0:L.position.x,Z<.8?2:10,0),E.intensity=je.lerp(2.95,2.8,V),u.uSunDirection.value.copy(E.position).sub(E.target.position).normalize(),1},diagnostics:()=>({...D.diagnostics(),terrainTriangles:C,snow:ce,spindrift:O.count,geology:!1,moraine:J,shadows:E.castShadow,surface:1,visible:l.visible,fade:+u.uFade.value.toFixed(3)}),dispose(){s.remove(l,d,Se,E,E.target);for(let Z of o)Z.dispose();o.clear()}}}var Tt=new Zi,zl=new R,Lm=new re,Im=new re,Dm=new re,Hl=class{constructor(e){this.geometry=e.geometry,this.randomFunction=Math.random,this.indexAttribute=this.geometry.index,this.positionAttribute=this.geometry.getAttribute("position"),this.normalAttribute=this.geometry.getAttribute("normal"),this.colorAttribute=this.geometry.getAttribute("color"),this.uvAttribute=this.geometry.getAttribute("uv"),this.weightAttribute=null,this.distribution=null}setWeightAttribute(e){return this.weightAttribute=e?this.geometry.getAttribute(e):null,this}build(){let e=this.indexAttribute,t=this.positionAttribute,n=this.weightAttribute,i=e?e.count/3:t.count/3,r=new Float32Array(i);for(let l=0;l<i;l++){let c=1,h=3*l,u=3*l+1,d=3*l+2;e&&(h=e.getX(h),u=e.getX(u),d=e.getX(d)),n&&(c=n.getX(h)+n.getX(u)+n.getX(d)),Tt.a.fromBufferAttribute(t,h),Tt.b.fromBufferAttribute(t,u),Tt.c.fromBufferAttribute(t,d),c*=Tt.getArea(),r[l]=c}let o=new Float32Array(i),a=0;for(let l=0;l<i;l++)a+=r[l],o[l]=a;return this.distribution=o,this}setRandomGenerator(e){return this.randomFunction=e,this}sample(e,t,n,i){let r=this.sampleFaceIndex();return this.sampleFace(r,e,t,n,i)}sampleFaceIndex(){let e=this.distribution[this.distribution.length-1];return this.binarySearch(this.randomFunction()*e)}binarySearch(e){let t=this.distribution,n=0,i=t.length-1,r=-1;for(;n<=i;){let o=Math.ceil((n+i)/2);if(o===0||t[o-1]<=e&&t[o]>e){r=o;break}else e<t[o]?i=o-1:n=o+1}return r}sampleFace(e,t,n,i,r){let o=this.randomFunction(),a=this.randomFunction();o+a>1&&(o=1-o,a=1-a);let l=this.indexAttribute,c=e*3,h=e*3+1,u=e*3+2;return l&&(c=l.getX(c),h=l.getX(h),u=l.getX(u)),Tt.a.fromBufferAttribute(this.positionAttribute,c),Tt.b.fromBufferAttribute(this.positionAttribute,h),Tt.c.fromBufferAttribute(this.positionAttribute,u),t.set(0,0,0).addScaledVector(Tt.a,o).addScaledVector(Tt.b,a).addScaledVector(Tt.c,1-(o+a)),n!==void 0&&(this.normalAttribute!==void 0?(Tt.a.fromBufferAttribute(this.normalAttribute,c),Tt.b.fromBufferAttribute(this.normalAttribute,h),Tt.c.fromBufferAttribute(this.normalAttribute,u),n.set(0,0,0).addScaledVector(Tt.a,o).addScaledVector(Tt.b,a).addScaledVector(Tt.c,1-(o+a)).normalize()):Tt.getNormal(n)),i!==void 0&&this.colorAttribute!==void 0&&(Tt.a.fromBufferAttribute(this.colorAttribute,c),Tt.b.fromBufferAttribute(this.colorAttribute,h),Tt.c.fromBufferAttribute(this.colorAttribute,u),zl.set(0,0,0).addScaledVector(Tt.a,o).addScaledVector(Tt.b,a).addScaledVector(Tt.c,1-(o+a)),i.r=zl.x,i.g=zl.y,i.b=zl.z),r!==void 0&&this.uvAttribute!==void 0&&(Lm.fromBufferAttribute(this.uvAttribute,c),Im.fromBufferAttribute(this.uvAttribute,h),Dm.fromBufferAttribute(this.uvAttribute,u),r.set(0,0).addScaledVector(Lm,o).addScaledVector(Im,a).addScaledVector(Dm,1-(o+a))),this}};var Vo=class s extends Oe{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.camera=new Dt;let n=this,i=t.color!==void 0?new Ue(t.color):new Ue(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||s.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,h=new ti,u=new R,d=new R,f=new R,_=new Ye,g=new R(0,0,-1),p=new ct,m=new R,x=new R,v=new ct,y=new Ye,b=this.camera,S=new Vt(r,o,{samples:c,type:pn}),T=new nt({name:l.name!==void 0?l.name:"unspecified",uniforms:Xn.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});T.uniforms.tDiffuse.value=S.texture,T.uniforms.color.value=i,T.uniforms.textureMatrix.value=y,this.material=T,this.onBeforeRender=function(C,M,E){if(d.setFromMatrixPosition(n.matrixWorld),f.setFromMatrixPosition(E.matrixWorld),_.extractRotation(n.matrixWorld),u.set(0,0,1),u.applyMatrix4(_),m.subVectors(d,f),m.dot(u)>0)return;m.reflect(u).negate(),m.add(d),_.extractRotation(E.matrixWorld),g.set(0,0,-1),g.applyMatrix4(_),g.add(f),x.subVectors(d,g),x.reflect(u).negate(),x.add(d),b.position.copy(m),b.up.set(0,1,0),b.up.applyMatrix4(_),b.up.reflect(u),b.lookAt(x),b.far=E.far,b.updateMatrixWorld(),b.projectionMatrix.copy(E.projectionMatrix),y.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),y.multiply(b.projectionMatrix),y.multiply(b.matrixWorldInverse),y.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(u,d),h.applyMatrix4(b.matrixWorldInverse),p.set(h.normal.x,h.normal.y,h.normal.z,h.constant);let D=b.projectionMatrix;v.x=(Math.sign(p.x)+D.elements[8])/D.elements[0],v.y=(Math.sign(p.y)+D.elements[9])/D.elements[5],v.z=-1,v.w=(1+D.elements[10])/D.elements[14],p.multiplyScalar(2/p.dot(v)),D.elements[2]=p.x,D.elements[6]=p.y,D.elements[10]=p.z+1-a,D.elements[14]=p.w,n.visible=!1;let O=C.getRenderTarget(),H=C.xr.enabled,I=C.shadowMap.autoUpdate;C.xr.enabled=!1,C.shadowMap.autoUpdate=!1,C.setRenderTarget(S),C.state.buffers.depth.setMask(!0),C.autoClear===!1&&C.clear(),C.render(M,b),C.xr.enabled=H,C.shadowMap.autoUpdate=I,C.setRenderTarget(O);let U=E.viewport;U!==void 0&&C.state.viewport(U),n.visible=!0},this.getRenderTarget=function(){return S},this.dispose=function(){S.dispose(),n.material.dispose()}}};Vo.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var _t=new R(2.75,3.05,2.45),us=je.smoothstep,kl=(s,e,t)=>{let n=Math.sin(s*127.1+e*311.7+t)*43758.5453;return n-Math.floor(n)};function Gr(s,e,t,n=!1){let i=Math.floor(s),r=Math.floor(e),o=s-i,a=e-r,l=kl(i,r,t),c=kl(i+1,r,t),h=kl(i,r+1,t),u=kl(i+1,r+1,t);return n?o+a<1?l+(c-l)*o+(h-l)*a:u+(h-u)*(1-o)+(c-u)*(1-a):(o=us(o,0,1),a=us(a,0,1),je.lerp(je.lerp(l,c,o),je.lerp(h,u,o),a))}function Hu({own:s,phone:e,mid:t,variant:n}){let i=e?36:t?50:72,r=new jt(_t.x*2,_t.y*2,_t.z*2,i,i,i),o=r.attributes.position,a=17+n*31.7,l=new R,c=new R,h=new R;for(let y=0;y<o.count;y++){let b=o.getX(y),S=o.getY(y),T=o.getZ(y),C=-1.27+(Gr(b*.62,T*.68,a)-.5)*.7,M=1-us(S,-_t.y,C),E=Gr(b*.68+S*.12,T*.71-S*.19,a),D=Gr(b*1.42+S*.65,T*1.38-S*.57,a+3,!0),O=Gr(b*3.8+S*.71,T*3.5-S*.43,a+9,!0),H=-3.24+Gr(b*1.15+.28,T*1.15,a+5,!0)*.96+Gr(b*3.2,T*3.2,a+7,!0)*.2,I=Math.max(Math.min(Math.abs(b/_t.x),Math.abs(S/_t.y)),Math.min(Math.abs(b/_t.x),Math.abs(T/_t.z)),Math.min(Math.abs(S/_t.y),Math.abs(T/_t.z))),U=.034+E*.022;l.set(b,S,T),c.set(je.clamp(b,-_t.x+U,_t.x-U),je.clamp(S,-_t.y+U,_t.y-U),je.clamp(T,-_t.z+U,_t.z-U)),h.copy(l).sub(c).normalize(),l.copy(c).addScaledVector(h,U);let F=us(I,.84,1)*(D*.065+O*.016);l.addScaledVector(h,(E-.5)*.014-F-M*(D*.52+O*.13)),l.x+=Math.sign(b)*M*(.1-D*.22),l.z+=Math.sign(T)*M*(.14-D*.24),l.y+=M*(H+_t.y)+us(S,1.8,_t.y)*(b*.014-T*.009),o.setXYZ(y,l.x,l.y,l.z)}r.deleteAttribute("normal"),r.deleteAttribute("uv");let u=Rl(r,1e-5);r.dispose(),u.computeVertexNormals();let d=s(u.toNonIndexed());u.dispose();let f=d.attributes.position,_=d.attributes.normal,g=new Float32Array(f.count),p=new R,m=new R,x=new R,v=new R;for(let y=0;y<f.count;y+=3){p.fromBufferAttribute(f,y),m.fromBufferAttribute(f,y+1),x.fromBufferAttribute(f,y+2);let b=1-us((p.y+m.y+x.y)/3,-2.48,-1.25);v.crossVectors(m.sub(p),x.sub(p)).normalize();for(let S=y;S<y+3;S++)h.fromBufferAttribute(_,S).lerp(v,b*.94).normalize(),_.setXYZ(S,h.x,h.y,h.z),g[S]=b}return d.setAttribute("aIceDamage",new $e(g,1)),d.computeBoundingBox(),d.computeBoundingSphere(),d}function Nm(s){let e=s?256:512,t=e/2,n=new Float32Array(e*t*4),i=new R,r=new R(-.63,.6,.49).normalize(),o=new R(.78,.25,-.57).normalize();for(let l=0;l<t;l++){let c=(l+.5)/t*Math.PI;for(let h=0;h<e;h++){let u=(h+.5)/e*Math.PI*2;i.set(-Math.sin(c)*Math.cos(u),Math.cos(c),Math.sin(c)*Math.sin(u));let d=us(i.y,-.72,.85),f=Math.pow(Math.max(0,i.dot(r)),12)*1.65,_=Math.pow(Math.max(0,i.dot(o)),46)*.62,g=Math.pow(Math.max(0,-i.z),4)*.07,p=(l*e+h)*4;n[p]=.15+d*.34+f+_*.87-g,n[p+1]=.176+d*.35+f*1.018+_*.94-g,n[p+2]=.22+d*.36+f*1.035+_-g,n[p+3]=1}}let a=new Po(n,e,t,xn,ni);return a.mapping=Mo,a.colorSpace=Et,a.needsUpdate=!0,a}function Um({parent:s,own:e,geometry:t,material:n,random:i}){let r=t.attributes.position,o=t.attributes.normal,a=t.attributes.aIceDamage,l=[];for(let[k,ne,_e,L,j,q]of[[2,1,0,1,3,3],[2,-1,0,1,3,2],[0,1,2,1,2,3],[0,-1,2,1,2,3],[1,1,0,2,2,2],[1,-1,0,2,2,2]])for(let se=0;se<q;se++)for(let V=0;V<j;V++){let ye=new R;ye.setComponent(k,_t.getComponent(k)*ne),ye.setComponent(_e,((V+.28+i()*.44)/j*2-1)*_t.getComponent(_e)),ye.setComponent(L,((se+.28+i()*.44)/q*2-1)*_t.getComponent(L)),l.push({point:ye,triangles:[],edges:new Map,pivot:new R,count:0})}let c=k=>`${Math.round(k.x*1e5)},${Math.round(k.y*1e5)},${Math.round(k.z*1e5)}`,h=[],u=new Map,d=new R;for(let k=0;k<r.count;k++){let ne=c(d.fromBufferAttribute(r,k));h.push(ne),u.has(ne)||u.set(ne,new R),u.get(ne).add(d.fromBufferAttribute(o,k))}for(let k of u.values())k.normalize();let f=[],_=[],g=[],p=[],m=new Map,x=new R,v=new R,y=new R,b=new R,S=k=>({p:new R().fromBufferAttribute(r,k),n:new R().fromBufferAttribute(o,k),inner:u.get(h[k]),damage:a.getX(k)}),T=(k,ne,_e)=>({p:k.p.clone().lerp(ne.p,_e),n:k.n.clone().lerp(ne.n,_e).normalize(),inner:k.inner.clone().lerp(ne.inner,_e).normalize(),damage:je.lerp(k.damage,ne.damage,_e)}),C=(k,ne,_e,L)=>{if(y.crossVectors(b.copy(_e.p).sub(ne.p),d.copy(L.p).sub(ne.p)).lengthSq()<1e-16)return;let j=p.length;for(let q of[ne,_e,L]){f.push(...q.p),_.push(...q.n),g.push(q.damage);let se=c(q.p);p.push(se),m.set(se,q.inner)}k.triangles.push(j),k.pivot.add(ne.p).add(_e.p).add(L.p),k.count+=3;for(let[q,se]of[[j,j+1],[j+1,j+2],[j+2,j]]){let V=p[q]<p[se]?`${p[q]}|${p[se]}`:`${p[se]}|${p[q]}`;k.edges.has(V)?k.edges.delete(V):k.edges.set(V,[q,se])}};for(let k=0;k<r.count;k+=3){let ne=[S(k),S(k+1),S(k+2)];x.copy(ne[0].p).add(ne[1].p).add(ne[2].p).multiplyScalar(1/3);let _e=Math.sqrt(Math.max(...ne.map(se=>se.p.distanceToSquared(x)))),L=Math.min(...l.map(se=>se.point.distanceToSquared(x))),j=(Math.sqrt(L)+_e*2)**2,q=l.filter(se=>se.point.distanceToSquared(x)<=j);for(let se of q){let V=ne;for(let ye of q){if(ye===se||V.length<3)continue;v.copy(ye.point).sub(se.point);let Me=(ye.point.lengthSq()-se.point.lengthSq())/2,A=[],w=V[V.length-1],B=v.dot(w.p)-Me;for(let pe of V){let me=v.dot(pe.p)-Me;me<=0!=B<=0&&A.push(T(w,pe,B/(B-me))),me<=0&&A.push(pe),w=pe,B=me}V=A}for(let ye=1;ye<V.length-1;ye++)C(se,V[0],V[ye],V[ye+1])}}let M=new Ve(f,3),E=new Ve(_,3),D=new Ve(g,1),O=l.filter(k=>k.count),H=O.reduce((k,ne)=>k+ne.triangles.length*6+ne.edges.size*6,0),I={position:new Float32Array(H*3),normal:new Float32Array(H*3),aIceDamage:new Float32Array(H),aShardPivot:new Float32Array(H*3),aShardVelocity:new Float32Array(H*3),aShardAxis:new Float32Array(H*3),aShardTurn:new Float32Array(H*2)},U=new R,F=new R,Y=new R,J=new R,X=new R,le=new R,ce=new R,he=new R,K=0;for(let k of O){k.pivot.multiplyScalar(1/k.count);let ne=k.pivot.clone().divide(_t).normalize().multiplyScalar(2.6+i()*2.5),_e=new R(i()-.5,i()-.5,i()-.5).normalize(),L=(i()>.5?1:-1)*(.34+i()*.7),j=(k.pivot.y/_t.y*.5+.5)*.1+i()*.024,q=.15+i()*.15,se=(V,ye,Me)=>{let A=K*3;V.toArray(I.position,A),ye.toArray(I.normal,A),k.pivot.toArray(I.aShardPivot,A),ne.toArray(I.aShardVelocity,A),_e.toArray(I.aShardAxis,A),I.aIceDamage[K]=Me,I.aShardTurn[K*2]=L,I.aShardTurn[K*2+1]=j,K++};for(let V of k.triangles){for(let ye=0;ye<3;ye++){let Me=V+ye;U.fromBufferAttribute(M,Me),F.fromBufferAttribute(E,Me),se(U,F,D.getX(Me))}for(let ye of[2,1,0]){let Me=V+ye;U.fromBufferAttribute(M,Me),F.copy(m.get(p[Me])),U.addScaledVector(F,-q),F.negate(),se(U,F,D.getX(Me)*.7)}}for(let[V,ye]of k.edges.values()){Y.fromBufferAttribute(M,V),J.fromBufferAttribute(M,ye),X.copy(Y).addScaledVector(m.get(p[V]),-q),le.copy(J).addScaledVector(m.get(p[ye]),-q),ce.crossVectors(U.copy(X).sub(Y),he.copy(J).sub(Y)).normalize();for(let Me of[Y,le,J,Y,X,le])se(Me,ce,.56)}}let oe=e(new st);for(let[k,ne]of Object.entries(I))oe.setAttribute(k,new $e(ne,k==="aIceDamage"?1:k==="aShardTurn"?2:3));oe.computeBoundingSphere();let Se={value:0},Ae=n.onBeforeCompile,Le=n.customProgramCacheKey();n.onBeforeCompile=k=>{Ae(k),k.uniforms.uIceBreak=Se,k.vertexShader=k.vertexShader.replace("#include <common>",`#include <common>
      attribute vec3 aShardPivot,aShardVelocity,aShardAxis;attribute vec2 aShardTurn;uniform float uIceBreak;
      float shardTravel(){return smoothstep(aShardTurn.y,.94,uIceBreak);}
      mat3 shardRotation(){
        float angle=shardTravel()*aShardTurn.x,s=sin(angle),c=cos(angle),t=1.-c;vec3 a=aShardAxis;
        return mat3(t*a.x*a.x+c,t*a.x*a.y+s*a.z,t*a.x*a.z-s*a.y,
          t*a.x*a.y-s*a.z,t*a.y*a.y+c,t*a.y*a.z+s*a.x,
          t*a.x*a.z+s*a.y,t*a.y*a.z-s*a.x,t*a.z*a.z+c);
      }`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
objectNormal=shardRotation()*objectNormal;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        float travel=shardTravel();
        transformed=shardRotation()*(position-aShardPivot)+aShardPivot+aShardVelocity*travel;
        transformed.y-=travel*travel*.80;`)},n.customProgramCacheKey=()=>`${Le}-fracture-cells`;let Z=new Oe(oe,n);return Z.name="The ice shell breaking along its own fractures",Z.frustumCulled=!1,Z.visible=!1,Z.renderOrder=2,s.add(Z),{count:O.length,update(k){Se.value=k,Z.visible=k>.001&&k<.998,n.opacity=1-us(k,.46,1)}}}function Vl(s,e={}){let t=e.energy||{value:0},n=e.seed||{value:0},i=e.solid||{value:1};return s.extensions={...s.extensions,derivatives:!0},s.onBeforeCompile=r=>{r.uniforms.uFrostEnergy=t,r.uniforms.uFrostSeed=n,r.uniforms.uIceSolid=i,r.uniforms.uIceHalf={value:_t},r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
      attribute float aIceDamage;
      varying vec3 vFrostPosition,vFrostNormal,vFrostView;varying float vFrostDamage;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vFrostPosition=position;vFrostNormal=normal;vFrostDamage=aIceDamage;
        vFrostView=inverseTransformDirection(cameraPosition-(modelMatrix*vec4(position,1.)).xyz,modelMatrix);`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
      uniform float uFrostEnergy,uFrostSeed,uIceSolid;uniform vec3 uIceHalf;
      varying vec3 vFrostPosition,vFrostNormal,vFrostView;varying float vFrostDamage;
      float frostHash(vec3 p){p=fract(p*.3183099+vec3(.1,.3,.7));p*=17.;return fract(p.x*p.y*p.z*(p.x+p.y+p.z));}
      float frostNoise(vec3 p){
        vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
        return mix(mix(mix(frostHash(i),frostHash(i+vec3(1,0,0)),f.x),mix(frostHash(i+vec3(0,1,0)),frostHash(i+vec3(1,1,0)),f.x),f.y),
          mix(mix(frostHash(i+vec3(0,0,1)),frostHash(i+vec3(1,0,1)),f.x),mix(frostHash(i+vec3(0,1,1)),frostHash(i+vec3(1,1,1)),f.x),f.y),f.z);
      }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
        vec3 iceP=vFrostPosition+vec3(uFrostSeed*2.1,uFrostSeed*.7,-uFrostSeed*.3);
        vec3 frostFace=abs(vFrostPosition/uIceHalf);
        float frostEdge=max(min(frostFace.x,frostFace.y),max(min(frostFace.x,frostFace.z),min(frostFace.y,frostFace.z)));
        vec3 warp=vec3(frostNoise(iceP*.65),frostNoise(iceP*.65+7.3),frostNoise(iceP*.65-4.1));
        float cloud=frostNoise(iceP*.84+warp*.75)*.64+frostNoise(iceP*2.7)*.36;
        float frostCloud=smoothstep(.39,.71,cloud);
        vec3 faceWeight=pow(abs(normalize(vFrostNormal)),vec3(8.));
        faceWeight/=max(dot(faceWeight,vec3(1.)),.001);
        float windowRadius=dot(faceWeight,vec3(length(frostFace.yz),length(frostFace.xz),length(frostFace.xy)));
        float window=1.-smoothstep(.24,.92,windowRadius);
        frostCloud*=1.-window*.68;
        float frostRime=smoothstep(.79,1.035,frostEdge+frostNoise(iceP*7.1)*.105);
        float grainFootprint=max(length(dFdx(iceP)),length(dFdy(iceP)))*64.;
        float grain=mix(frostNoise(iceP*64.),.48,smoothstep(.5,1.7,grainFootprint));
        grain=smoothstep(.22,.80,grain);
        float frostScatter=clamp(frostRime*(.24+grain*.45)+frostCloud*(.25+grain*.14)+vFrostDamage*(.38+grain*.34),0.,.93);
        roughnessFactor=clamp(roughnessFactor+frostScatter*.47+frostCloud*.055,.115,.72);
        diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.84,.87,.91),frostScatter*.43);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
        float detailFade=1.-smoothstep(.3,1.1,max(length(dFdx(iceP)),length(dFdy(iceP)))*23.);
        float relief=frostNoise(iceP*2.6)*.0036+frostNoise(iceP*23.)*detailFade*(.0004+frostRime*.0014+vFrostDamage*.0032);
        vec3 iceDx=dFdx(-vViewPosition),iceDy=dFdy(-vViewPosition);
        vec3 iceRx=cross(iceDy,normal),iceRy=cross(normal,iceDx);
        float iceDet=dot(iceDx,iceRx);
        vec3 iceGradient=sign(iceDet)*(dFdx(relief)*iceRx+dFdy(relief)*iceRy);
        normal=normalize(max(abs(iceDet),.000001)*normal-iceGradient);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        totalEmissiveRadiance+=vec3(.13,.22,.31)*uFrostEnergy*(.04+frostRime*.15+vFrostDamage*.12);`).replace("#include <transmission_fragment>",qe.transmission_fragment.replace("material.transmission = transmission;","material.transmission = transmission * (1. - frostScatter * .62);").replace("material.thickness = thickness;",`
          vec3 iceRay=refract(-normalize(vFrostView),normalize(vFrostNormal),1./1.31);
          vec3 raySign=mix(vec3(-1.),vec3(1.),step(vec3(0.),iceRay));
          vec3 exitDistance=(raySign*uIceHalf-vFrostPosition)/(raySign*max(abs(iceRay),vec3(.0001)));
          float icePath=clamp(min(exitDistance.x,min(exitDistance.y,exitDistance.z)),.25,9.);
          material.thickness=mix(thickness,icePath,uIceSolid);`))},s.customProgramCacheKey=()=>"lab-continuous-frost-volume-v7",s}function Om({parent:s,own:e,phone:t}){let n={uTime:{value:0},uReveal:{value:0},uCharge:{value:0}},i=new Oe(e(new Di(36,39,90,t?80:160,1,!0)),e(new nt({uniforms:n,side:Ft,transparent:!0,depthWrite:!1,vertexShader:"varying vec3 vLocal;void main(){vLocal=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`
      uniform float uTime,uReveal,uCharge;varying vec3 vLocal;
      void main(){
        float angle=atan(vLocal.z,vLocal.x),height=clamp((vLocal.y+43.)/38.,0.,1.);
        float panel=.5+.5*cos(angle*7.);
        float window=exp(-pow((angle+1.03)*2.3,2.))*smoothstep(.04,.95,height);
        float seam=pow(.5+.5*cos(angle*18.),90.);
        float foot=exp(-pow((height-.12)*13.,2.));
        vec3 color=mix(vec3(.061,.073,.099),vec3(.091,.106,.139),height);
        color+=vec3(.030,.038,.050)*panel*.28+vec3(.065,.076,.096)*window;
        color-=vec3(.010)*seam;
        color+=vec3(.025,.035,.050)*foot*(1.+uCharge*.4);
        float grain=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233)))*43758.5453);
        gl_FragColor=vec4(color+(grain-.5)*.0025,uReveal);
      }`})));i.position.y=42,i.renderOrder=-10,s.add(i);let r=new Oe(e(new Dr(39,t?96:192)),e(new xt({color:3687507,roughness:.49,metalness:.32,transparent:!0,opacity:0})));return r.rotation.x=-Math.PI/2,r.position.y=-.96,r.receiveShadow=!0,s.add(r),{update(o,a,l){n.uTime.value=o,n.uReveal.value=a,n.uCharge.value=l,i.visible=r.visible=a>.005,r.material.opacity=a}}}var yT=je.smoothstep;function Fm({own:s,random:e,phone:t,mid:n}){let i=[],r=[],o=[],a=(m,x,v)=>m.push(...x,...v),l=(m,x,v,y,b=0)=>{let S=m.clone(),T=b?6:15;for(let C=0;C<T;C++){let M=S.clone().addScaledVector(x,v/T);if(M.x+=(e()-.5)*.08,M.y+=(e()-.5)*.08,M.z+=(e()-.5)*.04,Math.abs(M.x)>2.48||Math.abs(M.y)>2.74||Math.abs(M.z)>2.04)break;if(a(b?r:i,S,M),!b&&C>1&&C%4===0){let D=new R(x.y*(e()>.5?1:-1),-x.x,.12).normalize();l(M,D,.18+e()*.4,y*.55,1)}let E=S.clone().add(new R(.018,-.008,y));o.push(...S,...M,...E),S=M}};for(let m=0;m<8;m++){let x=new R((e()-.5)*4.6,m<5?-2.3+e()*.9:.8+e()*1.8,(e()-.5)*3.7),v=e()*Math.PI*2;l(x,new R(Math.cos(v),Math.sin(v),(e()-.5)*.2),.55+e()*1.15,.025+e()*.045)}let c=m=>{let x=s(new st);return x.setAttribute("position",new Ve(m,3)),x},h=c(i),u=c(r),d=c(o);d.computeVertexNormals();let f=s(new Nr(1,1)),_=t?160:n?300:580,g=[],p=new ht;for(let m=0;m<_;m++){let x=m%5;p.position.set((e()-.5)*4.85,(e()-.5)*5.3,(x-2)*.82+(e()-.5)*.32);let v=.003+Math.pow(e(),3)*.01;p.scale.set(v,v*(1.1+e()*1.8),v*.65),p.rotation.set(e()*.3,e()*Math.PI,e()*.4-.2),p.updateMatrix(),g.push(p.matrix.clone())}return{bubbleCount:_,attach(m){let x=new Ot;x.name="Trapped air and internal fractures";let v=s(new hi({color:13097702,alphaHash:!0,opacity:.1,depthWrite:!1})),y=s(new hi({color:12637407,alphaHash:!0,opacity:.045,depthWrite:!1})),b=s(new Gt({color:13097444,alphaHash:!0,opacity:.055,depthWrite:!1,side:fn})),S=s(new Bt({color:13294821,roughness:.21,metalness:.05,clearcoat:.4,envMapIntensity:1.05,alphaHash:!0,opacity:.28,depthWrite:!1})),T=new mn(f,S,_);return g.forEach((C,M)=>T.setMatrixAt(M,C)),x.add(new Ii(h,v),new Ii(u,y),new Oe(d,b),T),m.add(x),{update(C,M){x.visible=C>.005,v.opacity=C*(.1+M*.1),y.opacity=C*(.045+M*.055),b.opacity=C*(.055+M*.035),S.opacity=C*.28}}}}}function Bm({parent:s,own:e,random:t,geometry:n,material:i,energy:r,seed:o}){let a=Vl(e(i.clone()),{energy:r,seed:o,solid:{value:0}});return a.thickness=.24,a.transparent=!0,Um({parent:s,own:e,random:t,geometry:n,material:a})}function zm({parent:s,own:e,phone:t,snowNormal:n}){let i=t?96:192,r=e(new xt({color:7373199,metalness:.72,roughness:.34,envMapIntensity:1.15})),o=e(new xt({color:11846606,metalness:.24,roughness:.58,normalMap:n,normalScale:new re(.12,.12)})),a=e(new Gt({color:new Ue(1.05,1.27,1.48),transparent:!0,opacity:.5,toneMapped:!1})),l=new mn(e(new jt(.024,.017,.19)),r,120),c=new ht;for(let g=0;g<l.count;g++){let p=g/l.count*Math.PI*2;c.position.set(Math.sin(p)*4.64,-.207,Math.cos(p)*4.64),c.rotation.set(0,p,0),c.scale.set(1,1,g%10===0?2:1),c.updateMatrix(),l.setMatrixAt(g,c.matrix)}l.name="Etched radial scale",s.add(l);for(let[g,p]of[[6.23,-.575],[5.02,-.56],[3.7,-.2],[2,.177]]){let m=new Oe(e(new Os(g,.018,6,i)),r);m.rotation.x=Math.PI/2,m.position.y=p,s.add(m)}let h=new Oe(e(new Di(1.65,1.65,.032,i)),o);h.position.y=.213,s.add(h);let u=new mn(e(new jt(.032,.19,.09)),r,t?96:160);for(let g=0;g<u.count;g++){let p=g/u.count*Math.PI*2;c.position.set(Math.sin(p)*6.31,-.77,Math.cos(p)*6.31),c.rotation.set(0,p,0),c.scale.set(1,1,1),c.updateMatrix(),u.setMatrixAt(g,c.matrix)}u.name="Display rim lamellae",s.add(u);let d=new Ot;d.position.y=.21,s.add(d);for(let g=0;g<3;g++){let p=new Oe(e(new Os(3.31,.015,6,i/3,Math.PI*.46)),a);p.rotation.set(Math.PI/2,0,g*Math.PI*2/3),d.add(p)}let f=new Oe(e(new Ds(6.5,6.5)),e(new nt({transparent:!0,depthWrite:!1,vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv;void main(){float r=length(vUv-.5)*2.;gl_FragColor=vec4(.10,.15,.19,exp(-r*r*7.)*.18*(1.-smoothstep(.65,1.,r)));}"})));f.rotation.x=-Math.PI/2,f.position.y=.248,s.add(f);let _=new Oe(e(new dl(1,1.014,i)),a);return _.rotation.x=-Math.PI/2,_.position.y=.26,s.add(_),{update(g,p,m){d.rotation.y=g*.035,a.opacity=.46+p*.42,_.visible=m>=0&&m<1.1,_.visible&&_.scale.setScalar(1.1+m*4.8)}}}var Mn=je.smoothstep,km=je.clamp,zs=11.4,ku=[0,11.6,23.2],Yn=[{at:0,p:[4.35,4.2,13.6],l:[-.1,3.48,0]},{at:.28,p:[6.1,5.1,16.8],l:[0,3.7,0]},{at:.72,p:[3.2,10,15.8],l:[0,8.8,0]},{at:1,p:[1.15,12.1,15.35],l:[0,zs,0]},{at:1.38,p:[.45,12,15.6],l:[0,zs,0]},{at:2,p:[12.75,12.1,15.35],l:[11.6,zs,0]},{at:2.17,p:[12.05,12,15.6],l:[11.6,zs,0]},{at:2.56,p:[24.35,12.1,15.35],l:[23.2,zs,0]},{at:2.82,p:[23.65,12,15.6],l:[23.2,11.35,0]},{at:3,p:[25,11.9,16.5],l:[23.2,10.25,0]},{at:3.45,p:[26.2,12.1,16.8],l:[23.2,10.1,0]},{at:4,p:[27.2,12,17.8],l:[22.8,9.95,0]}],Vm=s=>Yn.map((e,t)=>e[s].map((n,i)=>{let r=Yn[Math.max(0,t-1)],o=Yn[Math.min(Yn.length-1,t+1)],a=e.at-r.at,l=o.at-e.at,c=a?(n-r[s][i])/a:0,h=l?(o[s][i]-n)/l:0;if(!a)return h;if(!l)return c;if(c*h<=0)return 0;let u=2*l+a,d=l+2*a;return(u+d)/(u/c+d/h)})),Rb=Vm("p"),Cb=Vm("l");function Hm(s,e,t,n,i){let r=Yn[s],o=Yn[s+1],a=o.at-r.at,l=e*e,c=l*e;for(let h=0;h<3;h++)i.setComponent(h,(2*c-3*l+1)*r[t][h]+(c-2*l+e)*a*n[s][h]+(-2*c+3*l)*o[t][h]+(c-l)*a*n[s+1][h])}function Vu(s,e,t){let n=km(s,0,4),i=Yn.length-2;for(let c=0;c<Yn.length-1;c++)if(n<=Yn[c+1].at){i=c;break}let r=(n-Yn[i].at)/(Yn[i+1].at-Yn[i].at);Hm(i,r,"p",Rb,t.position),Hm(i,r,"l",Cb,t.target);let o=1-Mn(e,.58,1.05),a=Mn(n,.38,.95),l=1+o*je.lerp(.5,.64,a);return t.position.sub(t.target).multiplyScalar(l).add(t.target),t.target.y+=o*(a*.24-Mn(n,2.84,3)*1.18),t.fov=45+o*5,t}function Gm({scene:s,crystalScene:e,stoneScene:t,snowNormal:n,iceEnvironment:i,phone:r,mid:o}){let a=new Set,l=G=>(a.add(G),G),c=new Ot;c.name="Frozen exhibits",s.add(c);let h=91327,u=()=>(h=Math.imul(h,1664525)+1013904223>>>0,h/4294967296),d=new Map;for(let G of[e,t])G.updateMatrixWorld(!0),G.traverse(de=>{if(!de.isMesh)return;let Ee=l(de.geometry.clone());if(Ee.applyMatrix4(de.matrixWorld),Ee.center(),/^Shard[0-5]$/.test(de.name)){Ee.computeBoundingBox();let ee=Ee.boundingBox.getSize(new R);ee.z>ee.y&&ee.z>ee.x?Ee.rotateX(-Math.PI/2):ee.x>ee.y&&Ee.rotateZ(Math.PI/2)}if(Ee.computeVertexNormals(),Ee.computeBoundingBox(),!Ee.attributes.uv){let ee=Ee.attributes.position,z=Ee.attributes.normal,ve=new Float32Array(ee.count*2);for(let Re=0;Re<ee.count;Re++){let be=Math.abs(z.getX(Re)),xe=Math.abs(z.getY(Re)),ge=Math.abs(z.getZ(Re));ve[Re*2]=(be>xe&&be>ge?ee.getZ(Re):ee.getX(Re))*.24,ve[Re*2+1]=(xe>be&&xe>ge?ee.getZ(Re):ee.getY(Re))*.24}Ee.setAttribute("uv",new $e(ve,2))}d.set(de.name,Ee)});if(!d.has("Gem")||!d.has("Gate"))throw new Error("The Lab specimen archive is incomplete.");let f=l(new xt({color:4017243,roughness:.78,metalness:.02,normalMap:n,normalScale:new re(.43,.43),envMap:i,envMapIntensity:.8})),_=l(new Bt({color:2702923,roughness:.25,metalness:.02,clearcoat:.2,clearcoatRoughness:.23,envMap:i,envMapIntensity:1.05})),g=l(new xt({color:5267828,roughness:.36,metalness:.12,envMap:i,envMapIntensity:1.1,emissive:11259357,emissiveIntensity:0})),p=l(new Bt({color:14015713,roughness:.115,metalness:0,transmission:.97,thickness:4.4,ior:1.31,attenuationColor:12766935,attenuationDistance:9.5,clearcoat:.1,clearcoatRoughness:.24,envMap:i,envMapIntensity:1.05,transparent:!1,opacity:1,depthWrite:!0})),m=[],x=[],v=Fm({own:l,random:u,phone:r,mid:o});function y(G,de,Ee,ee,z=[0,0,0],ve=[0,0,0]){let Re=d.get(de);if(!Re)throw new Error(`Missing Lab artifact: ${de}`);let be=Re.boundingBox.getSize(new R),xe=new Oe(Re,Ee);return xe.name=`Preserved ${de}`,xe.scale.setScalar(ee/Math.max(be.x,be.y,be.z)),xe.position.set(...z),xe.rotation.set(...ve),xe.castShadow=!0,xe.receiveShadow=!0,G.add(xe),m.push(xe),xe}for(let G=0;G<3;G++){let de=new Ot;de.position.set(ku[G],zs,0),de.name=["Quartz in ice","Stone in ice","The frozen source"][G],c.add(de);let Ee=new Ot;de.add(Ee);let ee=Hu({own:l,phone:r,mid:o,variant:G}),z={value:0},ve={value:G*3.17},Re=Vl(l(p.clone()),{energy:z,seed:ve}),be=new Oe(ee,Re);be.name="Continuous ice with a fractured base",be.renderOrder=2,de.add(be),G===0?(y(Ee,"Shard4",_,4.25,[-.46,.05,.05],[0,0,-.2]),y(Ee,"Shard3",_,3.3,[.8,-.45,.2],[0,-.3,.42]),y(Ee,"Shard1",_,2.55,[-1.1,-.65,-.13],[.12,.35,-.55])):G===1&&(y(Ee,"Gate",f,4.4,[0,.22,0],[.04,-.12,-.1]),y(Ee,"Slab1",f,2.5,[.22,-1.83,.28],[.12,.2,.1]));let xe=v.attach(de);x.push({pivot:de,content:Ee,shell:be,detail:xe,energy:z,frostSeed:ve,clear:0,bounds:ee.boundingBox.clone().expandByScalar(.06),hover:0,velocity:0,energyAt:-100,index:G})}let b=x[2],S=Bm({parent:b.pivot,own:l,random:u,geometry:b.shell.geometry,material:b.shell.material,energy:b.energy,seed:b.frostSeed}),T=y(b.content,"Gem",g,4.25);T.rotation.set(.1,.18,-.08);let C=l(T.geometry.clone());C.scale(T.scale.x,T.scale.y,T.scale.z),C.rotateX(.1),C.rotateY(.18),C.rotateZ(-.08);let M=C.attributes.position;for(let G=0;G<M.count;G++){let de=M.getX(G),Ee=M.getY(G),ee=M.getZ(G),z=Math.atan2(ee,de),ve=Ee*.24,Re=.83+.17*Math.cos(z*3+Ee*.95);M.setXYZ(G,(de*Math.cos(ve)-ee*Math.sin(ve))*Re,Ee*1.29,(de*Math.sin(ve)+ee*Math.cos(ve))*Re)}C.computeVertexNormals(),C.computeBoundingSphere(),T.geometry=C,T.scale.setScalar(1),T.rotation.set(0,0,0);let E=new Hl(new Oe(C)).setRandomGenerator(u).build(),D=r?6400:o?14e3:24e3,O=l(new jt(.042,.042,.042)),H=new Float32Array(D),I=new Float32Array(D*3),U=new Float32Array(D*3),F=new R,Y=new R,J=new ht,X={uTime:{value:0},uCharge:{value:0},uAssemble:{value:1},uWave:{value:-100},uEnergy:{value:0}},le=l(new nt({uniforms:X,vertexShader:`
      attribute float aSeed;attribute vec3 aOrigin,aSurfaceNormal;uniform float uTime,uCharge,uAssemble,uWave;
      varying vec3 vNormal,vMacroNormal,vView;varying float vLight;
      void main(){
        vec3 origin=aOrigin;float age=uTime-uWave;
        float wave=step(0.,age)*exp(-pow((length(origin)-age*7.)*1.3,2.))*exp(-age*1.2);
        vec3 drift=normalize(origin+vec3(.001))*(1.-uAssemble)*(1.2+aSeed*3.);
        drift+=normalize(origin+vec3(.001))*(uCharge*.11+wave*.65);
        drift+=sin(vec3(aSeed*47.,aSeed*71.,aSeed*29.)+uTime*.8)*(.007+uCharge*.016);
        vec4 p=instanceMatrix*vec4(position,1.);p.xyz+=drift;
        vNormal=normalize(mat3(modelMatrix)*mat3(instanceMatrix)*normal);
        vMacroNormal=normalize(mat3(modelMatrix)*aSurfaceNormal);
        vView=cameraPosition-(modelMatrix*p).xyz;
        vLight=aSeed*.09+uCharge*.20+wave*.65;
        gl_Position=projectionMatrix*modelViewMatrix*p;
      }`,fragmentShader:`
      varying vec3 vNormal,vMacroNormal,vView;varying float vLight;
      void main(){
        vec3 key=normalize(vec3(.54,.71,-.45));
        float mass=pow(max(dot(normalize(vMacroNormal),key),0.),.75);
        float facet=.74+.26*max(dot(normalize(vNormal),key),0.);
        float rim=pow(1.-max(dot(normalize(vMacroNormal),normalize(vView)),0.),3.);
        vec3 color=mix(vec3(.030,.043,.073),vec3(.36,.43,.53),mass)*facet;
        color+=vec3(.035,.055,.085)*rim+vec3(.24,.36,.50)*vLight;
        gl_FragColor=vec4(color,1.);
      }`})),ce=new mn(O,le,D);ce.name="Source frost grains",ce.frustumCulled=!1;for(let G=0;G<D;G++)E.sample(F,Y),F.addScaledVector(Y,(u()-.2)*.1),H[G]=u(),I.set(F.toArray(),G*3),U.set(Y.toArray(),G*3),J.position.copy(F),J.rotation.set(u()*3,u()*3,u()*3),J.scale.setScalar(.65+u()*.85),J.updateMatrix(),ce.setMatrixAt(G,J.matrix);O.setAttribute("aSeed",new an(H,1)),O.setAttribute("aOrigin",new an(I,3)),O.setAttribute("aSurfaceNormal",new an(U,3)),b.content.add(ce);let he=new Ot;he.name="Circular source display",he.position.set(ku[2],6.8,0),c.add(he);let K=l(new xt({color:7899035,roughness:.4,metalness:.42,normalMap:n,normalScale:new re(.2,.2),envMapIntensity:1.25})),oe=l(new Gt({color:new Ue(1.1,1.25,1.4),transparent:!0,opacity:.65,toneMapped:!1})),Se=r?80:144;for(let[G,de,Ee]of[[6.3,.36,-.76],[4.95,.34,-.39],[3.62,.34,-.02]]){let ee=new Oe(l(new Di(G,G+.1,de,Se,1)),K);ee.position.y=Ee,ee.receiveShadow=!0,ee.castShadow=!0,he.add(ee);let z=new Oe(l(new Os(G-.04,.038,8,Se)),oe);z.rotation.x=Math.PI/2,z.position.y=Ee-de/2+.055,he.add(z)}let Ae=new Oe(l(new Di(1.9,1.94,.045,Se)),K);Ae.position.y=.175,he.add(Ae);let Le=l(new Dr(4.73,Se)),Z=new Vo(Le,{color:6846606,textureWidth:r?256:o?512:768,textureHeight:r?256:o?512:768,clipBias:.005,multisample:0});l(Z.getRenderTarget()),l(Z.material),Z.name="Polished frost reflection",Z.rotation.x=-Math.PI/2,Z.position.y=-.208,he.add(Z);let k=zm({parent:he,own:l,phone:r,snowNormal:n}),ne=Om({parent:he,own:l,phone:r}),_e=l(new Bt({color:11849950,roughness:.23,metalness:.2,emissive:7773100,emissiveIntensity:.4,clearcoat:1})),L=new Oe(d.get("Gem"),_e);L.name="Remembered fragment",L.scale.setScalar(.25),L.position.set(.25,.44,2.05),he.add(L);let j=new Br,q=new re,se=new Jt,V=new R,ye=new Li,Me=new Ye,A=0,w=0,B=-1,pe=-100,me=-100,ae=!1;function Ie(G,de){if(A<.64||!G)return null;q.set(G.x,G.y),j.setFromCamera(q,de);let Ee=null,ee=1/0;for(let z of x){if(!z.pivot.visible)continue;let ve;if(z.index===2&&A>2.98?(se.center.copy(z.pivot.position),se.radius=2.3,ve=j.ray.intersectSphere(se,V)):(Me.copy(z.pivot.matrixWorld).invert(),ve=ye.copy(j.ray).applyMatrix4(Me).intersectBox(z.bounds,V),ve&&V.applyMatrix4(z.pivot.matrixWorld)),ve){let Re=V.distanceToSquared(de.position);Re<ee&&(ee=Re,Ee={index:z.index,point:V.clone()})}}return Ee}return{pick:Ie,strike(G,de){x[G]&&(x[G].energyAt=de)},release(G){pe=G},remember(G,de=-100){ae=G,me=de},update({cp:G,time:de,dt:Ee,camera:ee,pointer:z,charge:ve,paused:Re}){A=G,w=de,B=(Re?null:Ie(z,ee))?.index??-1,c.visible=G>.44;for(let ge of x){let ue=ge.index;ge.pivot.visible=ue===2?G>2.2:ue===1?G>1.43&&G<2.76:G>.44&&G<2.02;let Fe=B===ue?1:0;if(!Re){let Ke=Math.exp(-7*Ee),fe=ge.hover-Fe,ke=(ge.velocity+7*fe)*Ee;ge.hover=Fe+(fe+ke)*Ke,ge.velocity=(ge.velocity-7*ke)*Ke}let ot=Mn(G,.48,.98),Be=ue===0?1:ue===1?Mn(G,1.43,1.93):Mn(G,2.2,2.56),Te=ue===0?Mn(G,1.48,1.96):ue===1?Mn(G,2.23,2.68):0;ge.pivot.position.x=ku[ue]+(1-Be)*5-Te*5.4,ge.pivot.position.y=zs+(ue===0?(1-ot)*5:0)+Math.sin(de*.23+ue*2)*.035,ue===2&&(ge.pivot.position.y-=Mn(G,2.82,3.2)*.62);let N=km(G-(ue===2?2.68:ue+1),-.8,1),we=ue===1?.3:ue===2?-.38:-.46,te=ue===1?.14:ue===2?-.18:-.21;ge.pivot.rotation.set(.065+N*.1+Math.sin(de*.12+ue)*.007-ge.hover*(z?.y||0)*.04,we+N*.62+Math.sin(de*.1+ue)*.012+ge.hover*(z?.x||0)*.06,te+N*.07+Math.sin(de*.11+ue)*.009);let Ce=Math.exp(-Math.max(0,de-ge.energyAt)*3.5);if(ge.pivot.scale.setScalar(1+ge.hover*.012+Ce*.018),ge.energy.value=Ce+ge.hover*.08,ge.detail.update(ue===2?1-Mn(G,2.84,3):1,Ce),ue===2){let De=Mn(G,2.84,3);ge.clear=De,S.update(De),ge.shell.visible=De<=.001,ce.visible=G>2.88,T.visible=!ce.visible,X.uAssemble.value=1}}he.visible=G>2.855,he.position.y=6.8-(1-Mn(G,2.855,3.02))*7,Z.visible=b.clear>=1,oe.opacity=.6+ve*.24,g.emissiveIntensity=ve*.23,k.update(de,ve,de-pe),ne.update(de,Mn(G,2.855,3.05),ve),X.uTime.value=de,X.uCharge.value=ve,X.uWave.value=pe,L.visible=ae;let xe=me<0?1:Mn(de-me,0,1.25);L.position.y=.44+(1-xe)*2.6,L.rotation.y=de*.13,c.updateMatrixWorld(!0)},diagnostics:()=>({specimens:3,bubbles:v.bubbleCount*3,detail:"continuous-fractured-ice-volumes",visible:x.filter(G=>G.pivot.visible&&c.visible).map(G=>G.index),hovered:B,particles:D,display:he.visible&&c.visible,keystone:L.visible&&he.visible&&c.visible,shell:+(1-b.clear).toFixed(3),fractureCells:S.count,waveAge:+(w-pe).toFixed(3)}),dispose(){s.remove(c);for(let G of a)G.dispose();a.clear()}}}var Gl=class extends Lr{constructor(e=null){super();let t=new jt;t.deleteAttribute("uv");let n=new xt({side:Ft}),i=new xt,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let o=new as(16777215,r,28,2);o.position.set(.418,16.199,.3),this.add(o);let a=new Oe(t,n);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let l=new Oe(t,i);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let c=new Oe(t,i);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let h=new Oe(t,i);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let u=new Oe(t,i);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);let d=new Oe(t,i);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);let f=new Oe(t,i);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);let _=new Oe(t,Wr(50));_.position.set(-16.116,14.37,8.208),_.scale.set(.1,2.428,2.739),this.add(_);let g=new Oe(t,Wr(50));g.position.set(-16.109,18.021,-8.207),g.scale.set(.1,2.425,2.751),this.add(g);let p=new Oe(t,Wr(17));p.position.set(14.904,12.198,-1.832),p.scale.set(.15,4.265,6.331),this.add(p);let m=new Oe(t,Wr(43));m.position.set(-.462,8.89,14.52),m.scale.set(4.38,5.441,.088),this.add(m);let x=new Oe(t,Wr(20));x.position.set(3.235,11.486,-12.541),x.scale.set(2.5,2,.1),this.add(x);let v=new Oe(t,Wr(100));v.position.set(0,20,0),v.scale.set(1,.1,1),this.add(v)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Wr(s){let e=new Gt;return e.color.setScalar(s),e}function Xm(s,e,t){return Math.max(s,Math.min(e,t))}var Gu=class{advance(e){if(!this.isRunning)return;let t=!1;if(this.lerp)this.value=(n=this.value,i=this.to,r=60*this.lerp,o=e,function(a,l,c){return(1-c)*a+c*l}(n,i,1-Math.exp(-r*o))),Math.round(this.value)===this.to&&(this.value=this.to,t=!0);else{this.currentTime+=e;let a=Xm(0,this.currentTime/this.duration,1);t=a>=1;let l=t?1:this.easing(a);this.value=this.from+(this.to-this.from)*l}var n,i,r,o;this.onUpdate?.(this.value,t),t&&this.stop()}stop(){this.isRunning=!1}fromTo(e,t,{lerp:n=.1,duration:i=1,easing:r=l=>l,onStart:o,onUpdate:a}){this.from=this.value=e,this.to=t,this.lerp=n,this.duration=i,this.easing=r,this.currentTime=0,this.isRunning=!0,o?.(),this.onUpdate=a}},Wu=class{constructor({wrapper:e,content:t,autoResize:n=!0,debounce:i=250}={}){Mi(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Mi(this,"onWrapperResize",()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Mi(this,"onContentResize",()=>{this.wrapper===window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=e,this.content=t,n&&(this.debouncedResize=function(r,o){let a;return function(){let l=arguments,c=this;clearTimeout(a),a=setTimeout(function(){r.apply(c,l)},o)}}(this.resize,i),this.wrapper===window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Wl=class{constructor(){this.events={}}emit(e,...t){let n=this.events[e]||[];for(let i=0,r=n.length;i<r;i++)n[i](...t)}on(e,t){return this.events[e]?.push(t)||(this.events[e]=[t]),()=>{this.events[e]=this.events[e]?.filter(n=>t!==n)}}off(e,t){this.events[e]=this.events[e]?.filter(n=>t!==n)}destroy(){this.events={}}},Wm=100/6,Xu=class{constructor(e,{wheelMultiplier:t=1,touchMultiplier:n=1}){Mi(this,"onTouchStart",e=>{let{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:e})});Mi(this,"onTouchMove",e=>{let{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e,i=-(t-this.touchStart.x)*this.touchMultiplier,r=-(n-this.touchStart.y)*this.touchMultiplier;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:i,y:r},this.emitter.emit("scroll",{deltaX:i,deltaY:r,event:e})});Mi(this,"onTouchEnd",e=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})});Mi(this,"onWheel",e=>{let{deltaX:t,deltaY:n,deltaMode:i}=e;t*=i===1?Wm:i===2?this.windowWidth:1,n*=i===1?Wm:i===2?this.windowHeight:1,t*=this.wheelMultiplier,n*=this.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:n,event:e})});Mi(this,"onWindowResize",()=>{this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight});this.element=e,this.wheelMultiplier=t,this.touchMultiplier=n,this.touchStart={x:null,y:null},this.emitter=new Wl,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1})}},Xl=class{constructor({wrapper:e=window,content:t=document.documentElement,wheelEventsTarget:n=e,eventsTarget:i=n,smoothWheel:r=!0,syncTouch:o=!1,syncTouchLerp:a=.075,touchInertiaMultiplier:l=35,duration:c,easing:h=v=>Math.min(1,1.001-Math.pow(2,-10*v)),lerp:u=!c&&.1,infinite:d=!1,orientation:f="vertical",gestureOrientation:_="vertical",touchMultiplier:g=1,wheelMultiplier:p=1,autoResize:m=!0,__experimental__naiveDimensions:x=!1}={}){this.__isSmooth=!1,this.__isScrolling=!1,this.__isStopped=!1,this.__isLocked=!1,this.onVirtualScroll=({deltaX:v,deltaY:y,event:b})=>{if(b.ctrlKey)return;let S=b.type.includes("touch"),T=b.type.includes("wheel");if(this.options.syncTouch&&S&&b.type==="touchstart"&&!this.isStopped&&!this.isLocked)return void this.reset();let C=v===0&&y===0,M=this.options.gestureOrientation==="vertical"&&y===0||this.options.gestureOrientation==="horizontal"&&v===0;if(C||M)return;let E=b.composedPath();if(E=E.slice(0,E.indexOf(this.rootElement)),E.find(I=>{var U,F,Y,J,X;return((U=I.hasAttribute)===null||U===void 0?void 0:U.call(I,"data-lenis-prevent"))||S&&((F=I.hasAttribute)===null||F===void 0?void 0:F.call(I,"data-lenis-prevent-touch"))||T&&((Y=I.hasAttribute)===null||Y===void 0?void 0:Y.call(I,"data-lenis-prevent-wheel"))||((J=I.classList)===null||J===void 0?void 0:J.contains("lenis"))&&!(!((X=I.classList)===null||X===void 0)&&X.contains("lenis-stopped"))}))return;if(this.isStopped||this.isLocked)return void b.preventDefault();if(this.isSmooth=this.options.syncTouch&&S||this.options.smoothWheel&&T,!this.isSmooth)return this.isScrolling=!1,void this.animate.stop();b.preventDefault();let D=y;this.options.gestureOrientation==="both"?D=Math.abs(y)>Math.abs(v)?y:v:this.options.gestureOrientation==="horizontal"&&(D=v);let O=S&&this.options.syncTouch,H=S&&b.type==="touchend"&&Math.abs(D)>5;H&&(D=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+D,Object.assign({programmatic:!1},O?{lerp:H?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}))},this.onNativeScroll=()=>{if(!this.__preventNextScrollEvent&&!this.isScrolling){let v=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.direction=Math.sign(this.animatedScroll-v),this.emit()}},window.lenisVersion="1.0.42",e!==document.documentElement&&e!==document.body||(e=window),this.options={wrapper:e,content:t,wheelEventsTarget:n,eventsTarget:i,smoothWheel:r,syncTouch:o,syncTouchLerp:a,touchInertiaMultiplier:l,duration:c,easing:h,lerp:u,infinite:d,gestureOrientation:_,orientation:f,touchMultiplier:g,wheelMultiplier:p,autoResize:m,__experimental__naiveDimensions:x},this.animate=new Gu,this.emitter=new Wl,this.dimensions=new Wu({wrapper:e,content:t,autoResize:m}),this.toggleClassName("lenis",!0),this.velocity=0,this.isLocked=!1,this.isStopped=!1,this.isSmooth=o||r,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll=new Xu(i,{touchMultiplier:g,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.toggleClassName("lenis",!1),this.toggleClassName("lenis-smooth",!1),this.toggleClassName("lenis-scrolling",!1),this.toggleClassName("lenis-stopped",!1),this.toggleClassName("lenis-locked",!1)}on(e,t){return this.emitter.on(e,t)}off(e,t){return this.emitter.off(e,t)}setScroll(e){this.isHorizontal?this.rootElement.scrollLeft=e:this.rootElement.scrollTop=e}resize(){this.dimensions.resize()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.isStopped=!1,this.reset())}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())}raf(e){let t=e-(this.time||e);this.time=e,this.animate.advance(.001*t)}scrollTo(e,{offset:t=0,immediate:n=!1,lock:i=!1,duration:r=this.options.duration,easing:o=this.options.easing,lerp:a=!r&&this.options.lerp,onComplete:l,force:c=!1,programmatic:h=!0}={}){if(!this.isStopped&&!this.isLocked||c){if(["top","left","start"].includes(e))e=0;else if(["bottom","right","end"].includes(e))e=this.limit;else{let u;if(typeof e=="string"?u=document.querySelector(e):e?.nodeType&&(u=e),u){if(this.options.wrapper!==window){let f=this.options.wrapper.getBoundingClientRect();t-=this.isHorizontal?f.left:f.top}let d=u.getBoundingClientRect();e=(this.isHorizontal?d.left:d.top)+this.animatedScroll}}if(typeof e=="number"){if(e+=t,e=Math.round(e),this.options.infinite?h&&(this.targetScroll=this.animatedScroll=this.scroll):e=Xm(0,e,this.limit),n)return this.animatedScroll=this.targetScroll=e,this.setScroll(this.scroll),this.reset(),void(l==null||l(this));if(!h){if(e===this.targetScroll)return;this.targetScroll=e}this.animate.fromTo(this.animatedScroll,e,{duration:r,easing:o,lerp:a,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling=!0},onUpdate:(u,d)=>{this.isScrolling=!0,this.velocity=u-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=u,this.setScroll(this.scroll),h&&(this.targetScroll=u),d||this.emit(),d&&(this.reset(),this.emit(),l?.(this),this.__preventNextScrollEvent=!0,requestAnimationFrame(()=>{delete this.__preventNextScrollEvent}))}})}}}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?(e=this.animatedScroll,t=this.limit,(e%t+t)%t):this.animatedScroll;var e,t}get progress(){return this.limit===0?1:this.scroll/this.limit}get isSmooth(){return this.__isSmooth}set isSmooth(e){this.__isSmooth!==e&&(this.__isSmooth=e,this.toggleClassName("lenis-smooth",e))}get isScrolling(){return this.__isScrolling}set isScrolling(e){this.__isScrolling!==e&&(this.__isScrolling=e,this.toggleClassName("lenis-scrolling",e))}get isStopped(){return this.__isStopped}set isStopped(e){this.__isStopped!==e&&(this.__isStopped=e,this.toggleClassName("lenis-stopped",e))}get isLocked(){return this.__isLocked}set isLocked(e){this.__isLocked!==e&&(this.__isLocked=e,this.toggleClassName("lenis-locked",e))}get className(){let e="lenis";return this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),this.isSmooth&&(e+=" lenis-smooth"),e}toggleClassName(e,t){this.rootElement.classList.toggle(e,t),this.emitter.emit("className change",this)}};function Fi(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Qm(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}var Tn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},qr={duration:.5,overwrite:!1,delay:0},hd,ln,yt,Kn=1e8,gt=1/Kn,Qu=Math.PI*2,Pb=Qu/4,Lb=0,eg=Math.sqrt,Ib=Math.cos,Db=Math.sin,qt=function(e){return typeof e=="string"},Pt=function(e){return typeof e=="function"},zi=function(e){return typeof e=="number"},tc=function(e){return typeof e>"u"},mi=function(e){return typeof e=="object"},En=function(e){return e!==!1},ud=function(){return typeof window<"u"},ql=function(e){return Pt(e)||qt(e)},tg=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},cn=Array.isArray,ed=/(?:-?\.?\d|\.)+/gi,dd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ws=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,qu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,fd=/[+-]=-?[.\d]+/,ng=/[^,'"\[\]\s]+/gi,Nb=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,wt,fi,td,pd,Un={},Jl={},ig,sg=function(e){return(Jl=Gs(e,Un))&&hn},nc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Zo=function(e,t){return!t&&console.warn(e)},rg=function(e,t){return e&&(Un[e]=t)&&Jl&&(Jl[e]=t)||Un},Ko=function(){return 0},Ub={suppressEvents:!0,isStart:!0,kill:!1},Yl={suppressEvents:!0,kill:!1},Ob={suppressEvents:!0},md={},fs=[],nd={},og,Sn={},Yu={},qm=30,Zl=[],gd="",_d=function(e){var t=e[0],n,i;if(mi(t)||Pt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Zl.length;i--&&!Zl[i].targetTest(t););n=Zl[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new yd(e[i],n)))||e.splice(i,1);return e},ps=function(e){return e._gsap||_d(Jn(e))[0]._gsap},vd=function(e,t,n){return(n=e[t])&&Pt(n)?e[t]():tc(n)&&e.getAttribute&&e.getAttribute(t)||n},_n=function(e,t){return(e=e.split(",")).forEach(t)||e},Lt=function(e){return Math.round(e*1e5)/1e5||0},$t=function(e){return Math.round(e*1e7)/1e7||0},Xs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Fb=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},$l=function(){var e=fs.length,t=fs.slice(0),n,i;for(nd={},fs.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},ag=function(e,t,n,i){fs.length&&!ln&&$l(),e.render(t,n,i||ln&&t<0&&(e._initted||e._startAt)),fs.length&&!ln&&$l()},lg=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(ng).length<2?t:qt(e)?e.trim():e},cg=function(e){return e},$n=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Bb=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Gs=function(e,t){for(var n in t)e[n]=t[n];return e},Ym=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=mi(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},jl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Xo=function(e){var t=e.parent||wt,n=e.keyframes?Bb(cn(e.keyframes)):$n;if(En(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},zb=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},hg=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},ic=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},ms=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Hs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Hb=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},id=function(e,t,n,i){return e._startAt&&(ln?e._startAt.revert(Yl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},kb=function s(e){return!e||e._ts&&s(e.parent)},Zm=function(e){return e._repeat?Yr(e._tTime,e=e.duration()+e._rDelay)*e:0},Yr=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Ql=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},sc=function(e){return e._end=$t(e._start+(e._tDur/Math.abs(e._ts||e._rts||gt)||0))},rc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=$t(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),sc(e),n._dirty||Hs(n,e)),e},ug=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Ql(e.rawTime(),t),(!t._dur||jo(0,t.totalDuration(),n)-t._tTime>gt)&&t.render(n,!0)),Hs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-gt}},pi=function(e,t,n,i){return t.parent&&ms(t),t._start=$t((zi(n)?n:n||e!==wt?Zn(e,n,t):e._time)+t._delay),t._end=$t(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),hg(e,t,"_first","_last",e._sort?"_start":0),sd(t)||(e._recent=t),i||ug(e,t),e._ts<0&&rc(e,e._tTime),e},dg=function(e,t){return(Un.ScrollTrigger||nc("scrollTrigger",t))&&Un.ScrollTrigger.create(t,e)},fg=function(e,t,n,i,r){if(bd(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!ln&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&og!==bn.frame)return fs.push(e),e._lazy=[r,i],1},Vb=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},sd=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Gb=function(e,t,n,i){var r=e.ratio,o=t<0||!t&&(!e._start&&Vb(e)&&!(!e._initted&&sd(e))||(e._ts<0||e._dp._ts<0)&&!sd(e))?0:1,a=e._rDelay,l=0,c,h,u;if(a&&e._repeat&&(l=jo(0,e._tDur,t),h=Yr(l,a),e._yoyo&&h&1&&(o=1-o),h!==Yr(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||ln||i||e._zTime===gt||!t&&e._zTime){if(!e._initted&&fg(e,t,i,n,l))return;for(u=e._zTime,e._zTime=t||(n?gt:0),n||(n=t&&!u),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&id(e,t,n,!0),e._onUpdate&&!n&&Nn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Nn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&ms(e,1),!n&&!ln&&(Nn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Wb=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Zr=function(e,t,n,i){var r=e._repeat,o=$t(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:$t(o*(r+1)+e._rDelay*r):o,a>0&&!i&&rc(e,e._tTime=e._tDur*a),e.parent&&sc(e),n||Hs(e.parent,e),e},Km=function(e){return e instanceof Qt?Hs(e):Zr(e,e._dur)},Xb={_start:0,endTime:Ko,totalDuration:Ko},Zn=function s(e,t,n){var i=e.labels,r=e._recent||Xb,o=e.duration()>=Kn?r.endTime(!1):e._dur,a,l,c;return qt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(cn(n)?n[0]:n).totalDuration()),a>1?s(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},qo=function(e,t,n){var i=zi(t[1]),r=(i?2:1)+(e<2?0:1),o=t[r],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=En(l.vars.inherit)&&l.parent;o.immediateRender=En(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new Nt(t[0],o,t[r+1])},gs=function(e,t){return e||e===0?t(e):t},jo=function(e,t,n){return n<e?e:n>t?t:n},en=function(e,t){return!qt(e)||!(t=Nb.exec(e))?"":t[1]},qb=function(e,t,n){return gs(n,function(i){return jo(e,t,i)})},rd=[].slice,pg=function(e,t){return e&&mi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&mi(e[0]))&&!e.nodeType&&e!==fi},Yb=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return qt(i)&&!t||pg(i,1)?(r=n).push.apply(r,Jn(i)):n.push(i)})||n},Jn=function(e,t,n){return yt&&!t&&yt.selector?yt.selector(e):qt(e)&&!n&&(td||!Kr())?rd.call((t||pd).querySelectorAll(e),0):cn(e)?Yb(e,n):pg(e)?rd.call(e,0):e?[e]:[]},od=function(e){return e=Jn(e)[0]||Zo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Jn(t,n.querySelectorAll?n:n===e?Zo("Invalid scope")||pd.createElement("div"):e)}},mg=function(e){return e.sort(function(){return .5-Math.random()})},gg=function(e){if(Pt(e))return e;var t=mi(e)?e:{each:e},n=ks(t.ease),i=t.from||0,r=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,h=i,u=i;return qt(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],u=i[1]),function(d,f,_){var g=(_||t).length,p=o[g],m,x,v,y,b,S,T,C,M;if(!p){if(M=t.grid==="auto"?0:(t.grid||[1,Kn])[1],!M){for(T=-Kn;T<(T=_[M++].getBoundingClientRect().left)&&M<g;);M<g&&M--}for(p=o[g]=[],m=l?Math.min(M,g)*h-.5:i%M,x=M===Kn?0:l?g*u/M-.5:i/M|0,T=0,C=Kn,S=0;S<g;S++)v=S%M-m,y=x-(S/M|0),p[S]=b=c?Math.abs(c==="y"?y:v):eg(v*v+y*y),b>T&&(T=b),b<C&&(C=b);i==="random"&&mg(p),p.max=T-C,p.min=C,p.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(M>g?g-1:c?c==="y"?g/M:M:Math.max(M,g/M))||0)*(i==="edges"?-1:1),p.b=g<0?r-g:r,p.u=en(t.amount||t.each)||0,n=n&&g<0?Tg(n):n}return g=(p[d]-p.min)/p.max||0,$t(p.b+(n?n(g):g)*p.v)+p.u}},ad=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=$t(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(zi(n)?0:en(n))}},_g=function(e,t){var n=cn(e),i,r;return!n&&mi(e)&&(i=n=e.radius||Kn,e.values?(e=Jn(e.values),(r=!zi(e[0]))&&(i*=i)):e=ad(e.increment)),gs(t,n?Pt(e)?function(o){return r=e(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=Kn,h=0,u=e.length,d,f;u--;)r?(d=e[u].x-a,f=e[u].y-l,d=d*d+f*f):d=Math.abs(e[u]-a),d<c&&(c=d,h=u);return h=!i||c<=i?e[h]:o,r||h===o||zi(o)?h:h+en(o)}:ad(e))},vg=function(e,t,n,i){return gs(cn(e)?!t:n===!0?!!(n=0):!i,function(){return cn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Zb=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,o){return o(r)},i)}},Kb=function(e,t){return function(n){return e(parseFloat(n))+(t||en(n))}},Jb=function(e,t,n){return yg(e,t,0,1,n)},xg=function(e,t,n){return gs(n,function(i){return e[~~t(i)]})},$b=function s(e,t,n){var i=t-e;return cn(e)?xg(e,s(0,e.length),t):gs(n,function(r){return(i+(r-e)%i)%i+e})},jb=function s(e,t,n){var i=t-e,r=i*2;return cn(e)?xg(e,s(0,e.length-1),t):gs(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>i?r-o:o)})},Jr=function(e){for(var t=0,n="",i,r,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",r=e.substr(i+7,o-i-7).match(a?ng:ed),n+=e.substr(t,i-t)+vg(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},yg=function(e,t,n,i,r){var o=t-e,a=i-n;return gs(r,function(l){return n+((l-e)/o*a||0)})},Qb=function s(e,t,n,i){var r=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!r){var o=qt(e),a={},l,c,h,u,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(cn(e)&&!cn(t)){for(h=[],u=e.length,d=u-2,c=1;c<u;c++)h.push(s(e[c-1],e[c]));u--,r=function(_){_*=u;var g=Math.min(d,~~_);return h[g](_-g)},n=t}else i||(e=Gs(cn(e)?[]:{},e));if(!h){for(l in t)Md.call(a,e,l,"get",t[l]);r=function(_){return wd(_,a)||(o?e.p:e)}}}return gs(n,r)},Jm=function(e,t,n){var i=e.labels,r=Kn,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},Nn=function(e,t,n){var i=e.vars,r=i[t],o=yt,a=e._ctx,l,c,h;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&fs.length&&$l(),a&&(yt=a),h=l?r.apply(c,l):r.call(c),yt=o,h},Go=function(e){return ms(e),e.scrollTrigger&&e.scrollTrigger.kill(!!ln),e.progress()<1&&Nn(e,"onInterrupt"),e},Xr,Mg=[],Sg=function(e){if(e)if(e=!e.name&&e.default||e,ud()||e.headless){var t=e.name,n=Pt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Ko,render:wd,add:Md,kill:m1,modifier:p1,rawVars:0},o={targetTest:0,get:0,getSetter:oc,aliases:{},register:0};if(Kr(),e!==i){if(Sn[t])return;$n(i,$n(jl(e,r),o)),Gs(i.prototype,Gs(r,jl(e,o))),Sn[i.prop=t]=i,e.targetTest&&(Zl.push(i),md[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}rg(t,i),e.register&&e.register(hn,i,vn)}else Mg.push(e)},pt=255,Wo={aqua:[0,pt,pt],lime:[0,pt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,pt],navy:[0,0,128],white:[pt,pt,pt],olive:[128,128,0],yellow:[pt,pt,0],orange:[pt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[pt,0,0],pink:[pt,192,203],cyan:[0,pt,pt],transparent:[pt,pt,pt,0]},Zu=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*pt+.5|0},bg=function(e,t,n){var i=e?zi(e)?[e>>16,e>>8&pt,e&pt]:0:Wo.black,r,o,a,l,c,h,u,d,f,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Wo[e])i=Wo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&pt,i&pt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&pt,e&pt]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(ed),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=Zu(l+1/3,r,o),i[1]=Zu(l,r,o),i[2]=Zu(l-1/3,r,o);else if(~e.indexOf("="))return i=e.match(dd),n&&i.length<4&&(i[3]=1),i}else i=e.match(ed)||Wo.transparent;i=i.map(Number)}return t&&!_&&(r=i[0]/pt,o=i[1]/pt,a=i[2]/pt,u=Math.max(r,o,a),d=Math.min(r,o,a),h=(u+d)/2,u===d?l=c=0:(f=u-d,c=h>.5?f/(2-u-d):f/(u+d),l=u===r?(o-a)/f+(o<a?6:0):u===o?(a-r)/f+2:(r-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Eg=function(e){var t=[],n=[],i=-1;return e.split(Bi).forEach(function(r){var o=r.match(Ws)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},$m=function(e,t,n){var i="",r=(e+i).match(Bi),o=t?"hsla(":"rgba(",a=0,l,c,h,u;if(!r)return e;if(r=r.map(function(d){return(d=bg(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=Eg(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(Bi,"1").split(Ws),u=c.length-1;a<u;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=e.split(Bi),u=c.length-1;a<u;a++)i+=c[a]+r[a];return i+c[u]},Bi=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Wo)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),e1=/hsl[a]?\(/,xd=function(e){var t=e.join(" "),n;if(Bi.lastIndex=0,Bi.test(t))return n=e1.test(t),e[1]=$m(e[1],n),e[0]=$m(e[0],n,Eg(e[1])),!0},Jo,bn=function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,h,u,d,f,_=function g(p){var m=s()-i,x=p===!0,v,y,b,S;if((m>e||m<0)&&(n+=m-t),i+=m,b=i-n,v=b-o,(v>0||x)&&(S=++u.frame,d=b-u.time*1e3,u.time=b=b/1e3,o+=v+(v>=r?4:r-v),y=1),x||(l=c(g)),y)for(f=0;f<a.length;f++)a[f](b,d,S,p)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){ig&&(!td&&ud()&&(fi=td=window,pd=fi.document||{},Un.gsap=hn,(fi.gsapVersions||(fi.gsapVersions=[])).push(hn.version),sg(Jl||fi.GreenSockGlobals||!fi.gsap&&fi||{}),Mg.forEach(Sg)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(p){return setTimeout(p,o-u.time*1e3+1|0)},Jo=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Jo=0,c=Ko},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){r=1e3/(p||240),o=u.time*1e3+r},add:function(p,m,x){var v=m?function(y,b,S,T){p(y,b,S,T),u.remove(v)}:p;return u.remove(p),a[x?"unshift":"push"](v),Kr(),v},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&f>=m&&f--},_listeners:a},u}(),Kr=function(){return!Jo&&bn.wake()},at={},t1=/^[\d.\-M][\d.\-,\s]/,n1=/["']/g,i1=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(n1,"").trim():+c,i=l.substr(a+1).trim();return t},s1=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},r1=function(e){var t=(e+"").split("("),n=at[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[i1(t[1])]:s1(e).split(",").map(lg)):at._CE&&t1.test(e)?at._CE("",e):n},Tg=function(e){return function(t){return 1-e(1-t)}},wg=function s(e,t){for(var n=e._first,i;n;)n instanceof Qt?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},ks=function(e,t){return e&&(Pt(e)?e:at[e]||r1(e))||t},qs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},o;return _n(e,function(a){at[a]=Un[a]=r,at[o=a.toLowerCase()]=n;for(var l in r)at[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=at[a+"."+l]=r[l]}),r},Ag=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ku=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/Qu*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*Db((h-o)*r)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Ag(a);return r=Qu/r,l.config=function(c,h){return s(e,c,h)},l},Ju=function s(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:Ag(n);return i.config=function(r){return s(e,r)},i};_n("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;qs(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});at.Linear.easeNone=at.none=at.Linear.easeIn;qs("Elastic",Ku("in"),Ku("out"),Ku());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(a){return a<t?s*a*a:a<n?s*Math.pow(a-1.5/e,2)+.75:a<i?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};qs("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);qs("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});qs("Circ",function(s){return-(eg(1-s*s)-1)});qs("Sine",function(s){return s===1?1:-Ib(s*Pb)+1});qs("Back",Ju("in"),Ju("out"),Ju());at.SteppedEase=at.steps=Un.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,o=1-gt;return function(a){return((i*jo(0,o,a)|0)+r)*n}}};qr.ease=at["quad.out"];_n("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return gd+=s+","+s+"Params,"});var yd=function(e,t){this.id=Lb++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:vd,this.set=t?t.getSetter:oc},$o=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Zr(this,+t.duration,1,1),this.data=t.data,yt&&(this._ctx=yt,yt.data.push(this)),Jo||bn.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Zr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Kr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(rc(this,n),!r._dp||r.parent||ug(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&pi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===gt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),ag(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Zm(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Zm(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Yr(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-gt?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Ql(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-gt?0:this._rts,this.totalTime(jo(-Math.abs(this._delay),this._tDur,r),i!==!1),sc(this),Hb(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Kr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==gt&&(this._tTime-=gt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&pi(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(En(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ql(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Ob);var i=ln;return ln=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),ln=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Km(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Km(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Zn(this,n),En(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,En(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-gt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-gt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-gt)},e.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(r){var o=Pt(n)?n:cg,a=function(){var c=i.then;i.then=null,Pt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),r(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){Go(this)},s}();$n($o.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-gt,_prom:0,_ps:!1,_rts:1});var Qt=function(s){Qm(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=En(n.sortChildren),wt&&pi(n.parent||wt,Fi(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&dg(Fi(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,o){return qo(0,arguments,this),this},t.from=function(i,r,o){return qo(1,arguments,this),this},t.fromTo=function(i,r,o,a){return qo(2,arguments,this),this},t.set=function(i,r,o){return r.duration=0,r.parent=this,Xo(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Nt(i,r,Zn(this,o),1),this},t.call=function(i,r,o){return pi(this,Nt.delayedCall(0,i,r),o)},t.staggerTo=function(i,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Nt(i,o,Zn(this,l)),this},t.staggerFrom=function(i,r,o,a,l,c,h){return o.runBackwards=1,Xo(o).immediateRender=En(o.immediateRender),this.staggerTo(i,r,o,a,l,c,h)},t.staggerFromTo=function(i,r,o,a,l,c,h,u){return a.startAt=o,Xo(a).immediateRender=En(a.immediateRender),this.staggerTo(i,r,a,l,c,h,u)},t.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:$t(i),u=this._zTime<0!=i<0&&(this._initted||!c),d,f,_,g,p,m,x,v,y,b,S,T;if(this!==wt&&h>l&&i>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),d=h,y=this._start,v=this._ts,m=!v,u&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(S=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,o);if(d=$t(h%p),h===l?(g=this._repeat,d=c):(g=~~(h/p),g&&g===h/p&&(d=c,g--),d>c&&(d=c)),b=Yr(this._tTime,p),!a&&this._tTime&&b!==g&&this._tTime-b*p-this._dur<=0&&(b=g),S&&g&1&&(d=c-d,T=1),g!==b&&!this._lock){var C=S&&b&1,M=C===(S&&g&1);if(g<b&&(C=!C),a=C?0:h%c?c:h,this._lock=1,this.render(a||(T?0:$t(g*p)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&Nn(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;wg(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=Wb(this,$t(a),$t(d)),x&&(h-=d-(d=x._start))),this._tTime=h,this._time=d,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&d&&!r&&!g&&(Nn(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&x!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,r,o),d!==this._time||!this._ts&&!m){x=0,_&&(h+=this._zTime=-gt);break}}f=_}else{f=this._last;for(var E=i<0?i:d;f;){if(_=f._prev,(f._act||E<=f._end)&&f._ts&&x!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(E-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(E-f._start)*f._ts,r,o||ln&&(f._initted||f._startAt)),d!==this._time||!this._ts&&!m){x=0,_&&(h+=this._zTime=E?-gt:gt);break}}f=_}}if(x&&!r&&(this.pause(),x.render(d>=a?0:-gt)._zTime=d>=a?1:-1,this._ts))return this._start=y,sc(this),this.render(i,r,o);this._onUpdate&&!r&&Nn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(y===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&ms(this,1),!r&&!(i<0&&!a)&&(h||a||!l)&&(Nn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var o=this;if(zi(r)||(r=Zn(this,r,i)),!(i instanceof $o)){if(cn(i))return i.forEach(function(a){return o.add(a,r)}),this;if(qt(i))return this.addLabel(i,r);if(Pt(i))i=Nt.delayedCall(0,i);else return this}return this!==i?pi(this,i,r):this},t.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-Kn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Nt?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},t.remove=function(i){return qt(i)?this.removeLabel(i):Pt(i)?this.killTweensOf(i):(ic(this,i),i===this._recent&&(this._recent=this._last),Hs(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=$t(bn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=Zn(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,o){var a=Nt.delayedCall(0,r||Ko,o);return a.data="isPause",this._hasPause=1,pi(this,a,Zn(this,i))},t.removePause=function(i){var r=this._first;for(i=Zn(this,i);r;)r._start===i&&r.data==="isPause"&&ms(r),r=r._next},t.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)ds!==a[l]&&a[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var o=[],a=Jn(i),l=this._first,c=zi(r),h;l;)l instanceof Nt?Fb(l._targets,a)&&(c?(!ds||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},t.tweenTo=function(i,r){r=r||{};var o=this,a=Zn(o,i),l=r,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,f,_=Nt.to(o,$n({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||gt,onStart:function(){if(o.pause(),!f){var p=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==p&&Zr(_,p,0,1).render(_._time,!0,!0),f=1}h&&h.apply(_,u||[])}},r));return d?_.render(0):_},t.tweenFromTo=function(i,r,o){return this.tweenTo(r,$n({startAt:{time:Zn(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Jm(this,Zn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Jm(this,Zn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+gt)},t.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return Hs(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Hs(this)},t.totalDuration=function(i){var r=0,o=this,a=o._last,l=Kn,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,pi(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;Zr(o,o===wt&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(wt._ts&&(ag(wt,Ql(i,wt)),og=bn.frame),bn.frame>=qm){qm+=Tn.autoSleep||120;var r=wt._first;if((!r||!r._ts)&&Tn.autoSleep&&bn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||bn.sleep()}}},e}($o);$n(Qt.prototype,{_lock:0,_hasPause:0,_forcing:0});var o1=function(e,t,n,i,r,o,a){var l=new vn(this._pt,e,t,0,1,Td,null,r),c=0,h=0,u,d,f,_,g,p,m,x;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Jr(i)),o&&(x=[n,i],o(x,e,t),n=x[0],i=x[1]),d=n.match(qu)||[];u=qu.exec(i);)_=u[0],g=i.substring(c,u.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==d[h++]&&(p=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:p,c:_.charAt(1)==="="?Xs(p,_)-p:parseFloat(_)-p,m:f&&f<4?Math.round:0},c=qu.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(fd.test(i)||m)&&(l.e=0),this._pt=l,l},Md=function(e,t,n,i,r,o,a,l,c,h){Pt(i)&&(i=i(r||0,e,o));var u=e[t],d=n!=="get"?n:Pt(u)?c?e[t.indexOf("set")||!Pt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,f=Pt(u)?c?u1:Pg:Ed,_;if(qt(i)&&(~i.indexOf("random(")&&(i=Jr(i)),i.charAt(1)==="="&&(_=Xs(d,i)+(en(d)||0),(_||_===0)&&(i=_))),!h||d!==i||ld)return!isNaN(d*i)&&i!==""?(_=new vn(this._pt,e,t,+d||0,i-(d||0),typeof u=="boolean"?f1:Lg,0,f),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!u&&!(t in e)&&nc(t,i),o1.call(this,e,t,d,i,f,l||Tn.stringFilter,c))},a1=function(e,t,n,i,r){if(Pt(e)&&(e=Yo(e,r,t,n,i)),!mi(e)||e.style&&e.nodeType||cn(e)||tg(e))return qt(e)?Yo(e,r,t,n,i):e;var o={},a;for(a in e)o[a]=Yo(e[a],r,t,n,i);return o},Sd=function(e,t,n,i,r,o){var a,l,c,h;if(Sn[e]&&(a=new Sn[e]).init(r,a.rawVars?t[e]:a1(t[e],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new vn(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==Xr))for(c=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},ds,ld,bd=function s(e,t,n){var i=e.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,d=i.keyframes,f=i.autoRevert,_=e._dur,g=e._startAt,p=e._targets,m=e.parent,x=m&&m.data==="nested"?m.vars.targets:p,v=e._overwrite==="auto"&&!hd,y=e.timeline,b,S,T,C,M,E,D,O,H,I,U,F,Y;if(y&&(!d||!r)&&(r="none"),e._ease=ks(r,qr.ease),e._yEase=u?Tg(ks(u===!0?r:u,qr.ease)):0,u&&e._yoyo&&!e._repeat&&(u=e._yEase,e._yEase=e._ease,e._ease=u),e._from=!y&&!!i.runBackwards,!y||d&&!i.stagger){if(O=p[0]?ps(p[0]).harness:0,F=O&&i[O.prop],b=jl(i,md),g&&(g._zTime<0&&g.progress(1),t<0&&h&&a&&!f?g.render(-1,!0):g.revert(h&&_?Yl:Ub),g._lazy=0),o){if(ms(e._startAt=Nt.set(p,$n({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&En(l),startAt:null,delay:0,onUpdate:c&&function(){return Nn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ln||!a&&!f)&&e._startAt.revert(Yl),a&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&_&&!g){if(t&&(a=!1),T=$n({overwrite:!1,data:"isFromStart",lazy:a&&!g&&En(l),immediateRender:a,stagger:0,parent:m},b),F&&(T[O.prop]=F),ms(e._startAt=Nt.set(p,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ln?e._startAt.revert(Yl):e._startAt.render(-1,!0)),e._zTime=t,!a)s(e._startAt,gt,gt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&En(l)||l&&!_,S=0;S<p.length;S++){if(M=p[S],D=M._gsap||_d(p)[S]._gsap,e._ptLookup[S]=I={},nd[D.id]&&fs.length&&$l(),U=x===p?S:x.indexOf(M),O&&(H=new O).init(M,F||b,e,U,x)!==!1&&(e._pt=C=new vn(e._pt,M,H.name,0,1,H.render,H,0,H.priority),H._props.forEach(function(J){I[J]=C}),H.priority&&(E=1)),!O||F)for(T in b)Sn[T]&&(H=Sd(T,b,e,U,M,x))?H.priority&&(E=1):I[T]=C=Md.call(e,M,T,"get",b[T],U,x,0,i.stringFilter);e._op&&e._op[S]&&e.kill(M,e._op[S]),v&&e._pt&&(ds=e,wt.killTweensOf(M,I,e.globalTime(t)),Y=!e.parent,ds=0),e._pt&&l&&(nd[D.id]=1)}E&&Ad(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Y,d&&t<=0&&y.render(Kn,!0,!0)},l1=function(e,t,n,i,r,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,u,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(h=d[f][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return ld=1,e.vars[t]="+=0",bd(e,a),ld=0,l?Zo(t+" not eligible for reset"):1;c.push(h)}for(f=c.length;f--;)u=c[f],h=u._pt||u,h.s=(i||i===0)&&!r?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=Lt(n)+en(u.e)),u.b&&(u.b=h.s+en(u.b))},c1=function(e,t){var n=e[0]?ps(e[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return t;r=Gs({},t);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},h1=function(e,t,n,i){var r=t.ease||i||"power1.inOut",o,a;if(cn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:r})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},Yo=function(e,t,n,i,r){return Pt(e)?e.call(t,n,i,r):qt(e)&&~e.indexOf("random(")?Jr(e):e},Rg=gd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Cg={};_n(Rg+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Cg[s]=1});var Nt=function(s){Qm(e,s);function e(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:Xo(i))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,f=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,x=i.parent||wt,v=(cn(n)||tg(n)?zi(n[0]):"length"in i)?[n]:Jn(n),y,b,S,T,C,M,E,D;if(a._targets=v.length?_d(v):Zo("GSAP target "+n+" not found. https://gsap.com",!Tn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,_||d||ql(c)||ql(h)){if(i=a.vars,y=a.timeline=new Qt({data:"nested",defaults:g||{},targets:x&&x.data==="nested"?x.vars.targets:v}),y.kill(),y.parent=y._dp=Fi(a),y._start=0,d||ql(c)||ql(h)){if(T=v.length,E=d&&gg(d),mi(d))for(C in d)~Rg.indexOf(C)&&(D||(D={}),D[C]=d[C]);for(b=0;b<T;b++)S=jl(i,Cg),S.stagger=0,m&&(S.yoyoEase=m),D&&Gs(S,D),M=v[b],S.duration=+Yo(c,Fi(a),b,M,v),S.delay=(+Yo(h,Fi(a),b,M,v)||0)-a._delay,!d&&T===1&&S.delay&&(a._delay=h=S.delay,a._start+=h,S.delay=0),y.to(M,S,E?E(b,M,v):0),y._ease=at.none;y.duration()?c=h=0:a.timeline=0}else if(_){Xo($n(y.vars.defaults,{ease:"none"})),y._ease=ks(_.ease||i.ease||"none");var O=0,H,I,U;if(cn(_))_.forEach(function(F){return y.to(v,F,">")}),y.duration();else{S={};for(C in _)C==="ease"||C==="easeEach"||h1(C,_[C],S,_.easeEach);for(C in S)for(H=S[C].sort(function(F,Y){return F.t-Y.t}),O=0,b=0;b<H.length;b++)I=H[b],U={ease:I.e,duration:(I.t-(b?H[b-1].t:0))/100*c},U[C]=I.v,y.to(v,U,O),O+=U.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return f===!0&&!hd&&(ds=Fi(a),wt.killTweensOf(v),ds=0),pi(x,Fi(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!c&&!_&&a._start===$t(x._time)&&En(u)&&kb(Fi(a))&&x.data!=="nested")&&(a._tTime=-gt,a.render(Math.max(0,-h)||0)),p&&dg(Fi(a),p),a}var t=e.prototype;return t.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-gt&&!h?l:i<gt?0:i,d,f,_,g,p,m,x,v,y;if(!c)Gb(this,i,r,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(d=u,v=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,r,o);if(d=$t(u%g),u===l?(_=this._repeat,d=c):(_=~~(u/g),_&&_===$t(u/g)&&(d=c,_--),d>c&&(d=c)),m=this._yoyo&&_&1,m&&(y=this._yEase,d=c-d),p=Yr(this._tTime,g),d===a&&!o&&this._initted&&_===p)return this._tTime=u,this;_!==p&&(v&&this._yEase&&wg(v,m),this.vars.repeatRefresh&&!m&&!this._lock&&this._time!==g&&this._initted&&(this._lock=o=1,this.render($t(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(fg(this,h?i:d,o,r,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(y||this._ease)(d/c),this._from&&(this.ratio=x=1-x),d&&!a&&!r&&!_&&(Nn(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(x,f.d),f=f._next;v&&v.render(i<0?i:v._dur*v._ease(d/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&id(this,i,r,o),Nn(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!r&&this.parent&&Nn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&id(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&ms(this,1),!r&&!(h&&!a)&&(u||a||m)&&(Nn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,o,a,l){Jo||bn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||bd(this,c),h=this._ease(c/this._dur),l1(this,i,r,o,a,h,c,l)?this.resetTo(i,r,o,a,1):(rc(this,0),this.parent||hg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Go(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,ds&&ds.vars.overwrite!==!0)._first||Go(this),this.parent&&o!==this.timeline.totalDuration()&&Zr(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Jn(i):a,c=this._ptLookup,h=this._pt,u,d,f,_,g,p,m;if((!r||r==="all")&&zb(a,l))return r==="all"&&(this._pt=0),Go(this);for(u=this._op=this._op||[],r!=="all"&&(qt(r)&&(g={},_n(r,function(x){return g[x]=1}),r=g),r=c1(a,r)),m=a.length;m--;)if(~l.indexOf(a[m])){d=c[m],r==="all"?(u[m]=r,_=d,f={}):(f=u[m]=u[m]||{},_=r);for(g in _)p=d&&d[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&ic(this,p,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&h&&Go(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return qo(1,arguments)},e.delayedCall=function(i,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,r,o){return qo(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,o){return wt.killTweensOf(i,r,o)},e}($o);$n(Nt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});_n("staggerTo,staggerFrom,staggerFromTo",function(s){Nt[s]=function(){var e=new Qt,t=rd.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var Ed=function(e,t,n){return e[t]=n},Pg=function(e,t,n){return e[t](n)},u1=function(e,t,n,i){return e[t](i.fp,n)},d1=function(e,t,n){return e.setAttribute(t,n)},oc=function(e,t){return Pt(e[t])?Pg:tc(e[t])&&e.setAttribute?d1:Ed},Lg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},f1=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Td=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},wd=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},p1=function(e,t,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(e,t,n),r=o},m1=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?ic(this,t,"_pt"):t.dep||(n=1),t=i;return!n},g1=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Ad=function(e){for(var t=e._pt,n,i,r,o;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=r},vn=function(){function s(t,n,i,r,o,a,l,c,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||Lg,this.d=l||this,this.set=c||Ed,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=g1,this.m=n,this.mt=r,this.tween=i},s}();_n(gd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return md[s]=1});Un.TweenMax=Un.TweenLite=Nt;Un.TimelineLite=Un.TimelineMax=Qt;wt=new Qt({sortChildren:!1,defaults:qr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Tn.stringFilter=xd;var Vs=[],Kl={},_1=[],jm=0,v1=0,$u=function(e){return(Kl[e]||_1).map(function(t){return t()})},cd=function(){var e=Date.now(),t=[];e-jm>2&&($u("matchMediaInit"),Vs.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=fi.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),$u("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),jm=e,$u("matchMedia"))},Ig=function(){function s(t,n){this.selector=n&&od(n),this.data=[],this._r=[],this.isReverted=!1,this.id=v1++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){Pt(n)&&(r=i,i=n,n=Pt);var o=this,a=function(){var c=yt,h=o.selector,u;return c&&c!==o&&c.data.push(o),r&&(o.selector=od(r)),yt=o,u=i.apply(o,arguments),Pt(u)&&o._r.push(u),yt=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===Pt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=yt;yt=null,n(this),yt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Nt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof Qt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Nt)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Vs.length;o--;)Vs[o].id===this.id&&Vs.splice(o,1)},e.revert=function(n){this.kill(n||{})},s}(),x1=function(){function s(t){this.contexts=[],this.scope=t,yt&&yt.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){mi(n)||(n={matches:n});var o=new Ig(0,r||this.scope),a=o.conditions={},l,c,h;yt&&!o.selector&&(o.selector=yt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=fi.matchMedia(n[c]),l&&(Vs.indexOf(o)<0&&Vs.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(cd):l.addEventListener("change",cd)));return h&&i(o,function(u){return o.add(null,u)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),ec={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Sg(i)})},timeline:function(e){return new Qt(e)},getTweensOf:function(e,t){return wt.getTweensOf(e,t)},getProperty:function(e,t,n,i){qt(e)&&(e=Jn(e)[0]);var r=ps(e||{}).get,o=n?cg:lg;return n==="native"&&(n=""),e&&(t?o((Sn[t]&&Sn[t].get||r)(e,t,n,i)):function(a,l,c){return o((Sn[a]&&Sn[a].get||r)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Jn(e),e.length>1){var i=e.map(function(h){return hn.quickSetter(h,t,n)}),r=i.length;return function(h){for(var u=r;u--;)i[u](h)}}e=e[0]||{};var o=Sn[t],a=ps(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(h){var u=new o;Xr._pt=0,u.init(e,n?h+n:h,Xr,0,[e]),u.render(1,u),Xr._pt&&wd(1,Xr)}:a.set(e,l);return o?c:function(h){return c(e,l,n?h+n:h,a,1)}},quickTo:function(e,t,n){var i,r=hn.to(e,Gs((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,h){return r.resetTo(t,l,c,h)};return o.tween=r,o},isTweening:function(e){return wt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ks(e.ease,qr.ease)),Ym(qr,e||{})},config:function(e){return Ym(Tn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Sn[a]&&!Un[a]&&Zo(t+" effect requires "+a+" plugin.")}),Yu[t]=function(a,l,c){return n(Jn(a),$n(l||{},r),c)},o&&(Qt.prototype[t]=function(a,l,c){return this.add(Yu[t](a,mi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){at[e]=ks(t)},parseEase:function(e,t){return arguments.length?ks(e,t):at},getById:function(e){return wt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Qt(e),i,r;for(n.smoothChildTiming=En(e.smoothChildTiming),wt.remove(n),n._dp=0,n._time=n._tTime=wt._time,i=wt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof Nt&&i.vars.onComplete===i._targets[0]))&&pi(n,i,i._start-i._delay),i=r;return pi(wt,n,0),n},context:function(e,t){return e?new Ig(e,t):yt},matchMedia:function(e){return new x1(e)},matchMediaRefresh:function(){return Vs.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||cd()},addEventListener:function(e,t){var n=Kl[e]||(Kl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Kl[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:$b,wrapYoyo:jb,distribute:gg,random:vg,snap:_g,normalize:Jb,getUnit:en,clamp:qb,splitColor:bg,toArray:Jn,selector:od,mapRange:yg,pipe:Zb,unitize:Kb,interpolate:Qb,shuffle:mg},install:sg,effects:Yu,ticker:bn,updateRoot:Qt.updateRoot,plugins:Sn,globalTimeline:wt,core:{PropTween:vn,globals:rg,Tween:Nt,Timeline:Qt,Animation:$o,getCache:ps,_removeLinkedListItem:ic,reverting:function(){return ln},context:function(e){return e&&yt&&(yt.data.push(e),e._ctx=yt),yt},suppressOverwrites:function(e){return hd=e}}};_n("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return ec[s]=Nt[s]});bn.add(Qt.updateRoot);Xr=ec.to({},{duration:0});var y1=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},M1=function(e,t){var n=e._targets,i,r,o;for(i in t)for(r=n.length;r--;)o=e._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=y1(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[r],i))},ju=function(e,t){return{name:e,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(qt(r)&&(l={},_n(r,function(h){return l[h]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}M1(a,r)}}}},hn=ec.registerPlugin({name:"attr",init:function(e,t,n,i,r){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)ln?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},ju("roundProps",ad),ju("modifiers"),ju("snap",_g))||ec;Nt.version=Qt.version=hn.version="3.12.5";ig=1;ud()&&Kr();var S1=at.Power0,b1=at.Power1,E1=at.Power2,T1=at.Power3,w1=at.Power4,A1=at.Linear,R1=at.Quad,C1=at.Cubic,P1=at.Quart,L1=at.Quint,I1=at.Strong,D1=at.Elastic,N1=at.Back,U1=at.SteppedEase,O1=at.Bounce,F1=at.Sine,B1=at.Expo,z1=at.Circ;var Dg,_s,jr,Nd,Js,H1,Ng,Ud,k1=function(){return typeof window<"u"},ki={},Ks=180/Math.PI,Qr=Math.PI/180,$r=Math.atan2,Ug=1e8,Od=/([A-Z])/g,V1=/(left|right|width|margin|padding|x)/i,G1=/[\s,\(]\S/,gi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Pd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},W1=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},X1=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},q1=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Vg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Gg=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Y1=function(e,t,n){return e.style[t]=n},Z1=function(e,t,n){return e.style.setProperty(t,n)},K1=function(e,t,n){return e._gsap[t]=n},J1=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},$1=function(e,t,n,i,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},j1=function(e,t,n,i,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},At="transform",wn=At+"Origin",Q1=function s(e,t){var n=this,i=this.target,r=i.style,o=i._gsap;if(e in ki&&r){if(this.tfm=this.tfm||{},e!=="transform")e=gi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Hi(i,a)}):this.tfm[e]=o.x?o[e]:Hi(i,e),e===wn&&(this.tfm.zOrigin=o.zOrigin);else return gi.transform.split(",").forEach(function(a){return s.call(n,a,t)});if(this.props.indexOf(At)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(wn,t,"")),e=At}(r||t)&&this.props.push(e,t,r[e])},Wg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},eE=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Od,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Ud(),(!r||!r.isStart)&&!n[At]&&(Wg(n),i.zOrigin&&n[wn]&&(n[wn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Xg=function(e,t){var n={target:e,props:[],revert:eE,save:Q1};return e._gsap||hn.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},qg,Ld=function(e,t){var n=_s.createElementNS?_s.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):_s.createElement(e);return n&&n.style?n:_s.createElement(e)},_i=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Od,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,eo(t)||t,1)||""},Og="O,Moz,ms,Ms,Webkit".split(","),eo=function(e,t,n){var i=t||Js,r=i.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Og[o]+e in r););return o<0?null:(o===3?"ms":o>=0?Og[o]:"")+e},Id=function(){k1()&&window.document&&(Dg=window,_s=Dg.document,jr=_s.documentElement,Js=Ld("div")||{style:{}},H1=Ld("div"),At=eo(At),wn=At+"Origin",Js.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",qg=!!eo("perspective"),Ud=hn.core.reverting,Nd=1)},Rd=function s(e){var t=Ld("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,o;if(jr.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),jr.removeChild(t),this.style.cssText=r,o},Fg=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Yg=function(e){var t;try{t=e.getBBox()}catch{t=Rd.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Rd||(t=Rd.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Fg(e,["x","cx","x1"])||0,y:+Fg(e,["y","cy","y1"])||0,width:0,height:0}:t},Zg=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Yg(e))},$s=function(e,t){if(t){var n=e.style,i;t in ki&&t!==wn&&(t=At),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Od,"-$1").toLowerCase())):n.removeAttribute(t)}},vs=function(e,t,n,i,r,o){var a=new vn(e._pt,t,n,0,1,o?Gg:Vg);return e._pt=a,a.b=i,a.e=r,e._props.push(n),a},Bg={deg:1,rad:1,turn:1},tE={grid:1,flex:1},xs=function s(e,t,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=Js.style,l=V1.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=i==="px",f=i==="%",_,g,p,m;if(i===o||!r||Bg[i]||Bg[o])return r;if(o!=="px"&&!d&&(r=s(e,t,n,"px")),m=e.getCTM&&Zg(e),(f||o==="%")&&(ki[t]||~t.indexOf("adius")))return _=m?e.getBBox()[l?"width":"height"]:e[h],Lt(f?r/_*u:r/100*_);if(a[l?"width":"height"]=u+(d?o:i),g=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===_s||!g.appendChild)&&(g=_s.body),p=g._gsap,p&&f&&p.width&&l&&p.time===bn.time&&!p.uncache)return Lt(r/p.width*u);if(f&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=u+i,_=e[h],x?e.style[t]=x:$s(e,t)}else(f||o==="%")&&!tE[_i(g,"display")]&&(a.position=_i(e,"position")),g===e&&(a.position="static"),g.appendChild(Js),_=Js[h],g.removeChild(Js),a.position="absolute";return l&&f&&(p=ps(g),p.time=bn.time,p.width=g[h]),Lt(d?_*r/u:_&&r?u/_*r:0)},Hi=function(e,t,n,i){var r;return Nd||Id(),t in gi&&t!=="transform"&&(t=gi[t],~t.indexOf(",")&&(t=t.split(",")[0])),ki[t]&&t!=="transform"?(r=ta(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:lc(_i(e,wn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=ac[t]&&ac[t](e,t,n)||_i(e,t)||vd(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?xs(e,t,r,n)+n:r},nE=function(e,t,n,i){if(!n||n==="none"){var r=eo(t,e,1),o=r&&_i(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=_i(e,"borderTopColor"))}var a=new vn(this._pt,e.style,t,0,1,Td),l=0,c=0,h,u,d,f,_,g,p,m,x,v,y,b;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(g=e.style[t],e.style[t]=i,i=_i(e,t)||i,g?e.style[t]=g:$s(e,t)),h=[n,i],xd(h),n=h[0],i=h[1],d=n.match(Ws)||[],b=i.match(Ws)||[],b.length){for(;u=Ws.exec(i);)p=u[0],x=i.substring(l,u.index),_?_=(_+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(_=1),p!==(g=d[c++]||"")&&(f=parseFloat(g)||0,y=g.substr((f+"").length),p.charAt(1)==="="&&(p=Xs(f,p)+y),m=parseFloat(p),v=p.substr((m+"").length),l=Ws.lastIndex-v.length,v||(v=v||Tn.units[t]||y,l===i.length&&(i+=v,a.e+=v)),y!==v&&(f=xs(e,t,g,v)||0),a._pt={_next:a._pt,p:x||c===1?x:",",s:f,c:m-f,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Gg:Vg;return fd.test(i)&&(a.e=0),this._pt=a,a},zg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},iE=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=zg[n]||n,t[1]=zg[i]||i,t.join(" ")},sE=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],ki[a]&&(l=1,a=a==="transformOrigin"?wn:At),$s(n,a);l&&($s(n,At),o&&(o.svg&&n.removeAttribute("transform"),ta(n,1),o.uncache=1,Wg(i)))}},ac={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var o=e._pt=new vn(e._pt,t,n,0,0,sE);return o.u=i,o.pr=-10,o.tween=r,e._props.push(n),1}}},ea=[1,0,0,1,0,0],Kg={},Jg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Hg=function(e){var t=_i(e,At);return Jg(t)?ea:t.substr(7).match(dd).map(Lt)},Fd=function(e,t){var n=e._gsap||ps(e),i=e.style,r=Hg(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?ea:r):(r===ea&&!e.offsetParent&&e!==jr&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,jr.appendChild(e)),r=Hg(e),l?i.display=l:$s(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):jr.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Dd=function(e,t,n,i,r,o){var a=e._gsap,l=r||Fd(e,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,d=a.yOffset||0,f=l[0],_=l[1],g=l[2],p=l[3],m=l[4],x=l[5],v=t.split(" "),y=parseFloat(v[0])||0,b=parseFloat(v[1])||0,S,T,C,M;n?l!==ea&&(T=f*p-_*g)&&(C=y*(p/T)+b*(-g/T)+(g*x-p*m)/T,M=y*(-_/T)+b*(f/T)-(f*x-_*m)/T,y=C,b=M):(S=Yg(e),y=S.x+(~v[0].indexOf("%")?y/100*S.width:y),b=S.y+(~(v[1]||v[0]).indexOf("%")?b/100*S.height:b)),i||i!==!1&&a.smooth?(m=y-c,x=b-h,a.xOffset=u+(m*f+x*g)-m,a.yOffset=d+(m*_+x*p)-x):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=b,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[wn]="0px 0px",o&&(vs(o,a,"xOrigin",c,y),vs(o,a,"yOrigin",h,b),vs(o,a,"xOffset",u,a.xOffset),vs(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+b)},ta=function(e,t){var n=e._gsap||new yd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=_i(e,wn)||"0",h,u,d,f,_,g,p,m,x,v,y,b,S,T,C,M,E,D,O,H,I,U,F,Y,J,X,le,ce,he,K,oe,Se;return h=u=d=g=p=m=x=v=y=0,f=_=1,n.svg=!!(e.getCTM&&Zg(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[At]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[At]!=="none"?l[At]:"")),i.scale=i.rotate=i.translate="none"),T=Fd(e,n.svg),n.svg&&(n.uncache?(J=e.getBBox(),c=n.xOrigin-J.x+"px "+(n.yOrigin-J.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),Dd(e,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,T)),b=n.xOrigin||0,S=n.yOrigin||0,T!==ea&&(D=T[0],O=T[1],H=T[2],I=T[3],h=U=T[4],u=F=T[5],T.length===6?(f=Math.sqrt(D*D+O*O),_=Math.sqrt(I*I+H*H),g=D||O?$r(O,D)*Ks:0,x=H||I?$r(H,I)*Ks+g:0,x&&(_*=Math.abs(Math.cos(x*Qr))),n.svg&&(h-=b-(b*D+S*H),u-=S-(b*O+S*I))):(Se=T[6],K=T[7],le=T[8],ce=T[9],he=T[10],oe=T[11],h=T[12],u=T[13],d=T[14],C=$r(Se,he),p=C*Ks,C&&(M=Math.cos(-C),E=Math.sin(-C),Y=U*M+le*E,J=F*M+ce*E,X=Se*M+he*E,le=U*-E+le*M,ce=F*-E+ce*M,he=Se*-E+he*M,oe=K*-E+oe*M,U=Y,F=J,Se=X),C=$r(-H,he),m=C*Ks,C&&(M=Math.cos(-C),E=Math.sin(-C),Y=D*M-le*E,J=O*M-ce*E,X=H*M-he*E,oe=I*E+oe*M,D=Y,O=J,H=X),C=$r(O,D),g=C*Ks,C&&(M=Math.cos(C),E=Math.sin(C),Y=D*M+O*E,J=U*M+F*E,O=O*M-D*E,F=F*M-U*E,D=Y,U=J),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),f=Lt(Math.sqrt(D*D+O*O+H*H)),_=Lt(Math.sqrt(F*F+Se*Se)),C=$r(U,F),x=Math.abs(C)>2e-4?C*Ks:0,y=oe?1/(oe<0?-oe:oe):0),n.svg&&(Y=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Jg(_i(e,At)),Y&&e.setAttribute("transform",Y))),Math.abs(x)>90&&Math.abs(x)<270&&(r?(f*=-1,x+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Lt(f),n.scaleY=Lt(_),n.rotation=Lt(g)+a,n.rotationX=Lt(p)+a,n.rotationY=Lt(m)+a,n.skewX=x+a,n.skewY=v+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[wn]=lc(c)),n.xOffset=n.yOffset=0,n.force3D=Tn.force3D,n.renderTransform=n.svg?oE:qg?$g:rE,n.uncache=0,n},lc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Cd=function(e,t,n){var i=en(t);return Lt(parseFloat(t)+parseFloat(xs(e,"x",n+"px",i)))+i},rE=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,$g(e,t)},Ys="0deg",Qo="0px",Zs=") ",$g=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,x=n.target,v=n.zOrigin,y="",b=m==="auto"&&e&&e!==1||m===!0;if(v&&(u!==Ys||h!==Ys)){var S=parseFloat(h)*Qr,T=Math.sin(S),C=Math.cos(S),M;S=parseFloat(u)*Qr,M=Math.cos(S),o=Cd(x,o,T*M*-v),a=Cd(x,a,-Math.sin(S)*-v),l=Cd(x,l,C*M*-v+v)}p!==Qo&&(y+="perspective("+p+Zs),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(b||o!==Qo||a!==Qo||l!==Qo)&&(y+=l!==Qo||b?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Zs),c!==Ys&&(y+="rotate("+c+Zs),h!==Ys&&(y+="rotateY("+h+Zs),u!==Ys&&(y+="rotateX("+u+Zs),(d!==Ys||f!==Ys)&&(y+="skew("+d+", "+f+Zs),(_!==1||g!==1)&&(y+="scale("+_+", "+g+Zs),x.style[At]=y||"translate(0, 0)"},oE=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,x=n.forceCSS,v=parseFloat(o),y=parseFloat(a),b,S,T,C,M;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Qr,c*=Qr,b=Math.cos(l)*u,S=Math.sin(l)*u,T=Math.sin(l-c)*-d,C=Math.cos(l-c)*d,c&&(h*=Qr,M=Math.tan(c-h),M=Math.sqrt(1+M*M),T*=M,C*=M,h&&(M=Math.tan(h),M=Math.sqrt(1+M*M),b*=M,S*=M)),b=Lt(b),S=Lt(S),T=Lt(T),C=Lt(C)):(b=u,C=d,S=T=0),(v&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(v=xs(f,"x",o,"px"),y=xs(f,"y",a,"px")),(_||g||p||m)&&(v=Lt(v+_-(_*b+g*T)+p),y=Lt(y+g-(_*S+g*C)+m)),(i||r)&&(M=f.getBBox(),v=Lt(v+i/100*M.width),y=Lt(y+r/100*M.height)),M="matrix("+b+","+S+","+T+","+C+","+v+","+y+")",f.setAttribute("transform",M),x&&(f.style[At]=M)},aE=function(e,t,n,i,r){var o=360,a=qt(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?Ks:1),c=l-i,h=i+c+"deg",u,d;return a&&(u=r.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*Ug)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*Ug)%o-~~(c/o)*o)),e._pt=d=new vn(e._pt,t,n,i,c,W1),d.e=h,d.u="deg",e._props.push(n),d},kg=function(e,t){for(var n in t)e[n]=t[n];return e},lE=function(e,t,n){var i=kg({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,d,f,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[At]=t,a=ta(n,1),$s(n,At),n.setAttribute("transform",c)):(c=getComputedStyle(n)[At],o[At]=t,a=ta(n,1),o[At]=c);for(l in ki)c=i[l],h=a[l],c!==h&&r.indexOf(l)<0&&(f=en(c),_=en(h),u=f!==_?xs(n,l,c,_):parseFloat(c),d=parseFloat(h),e._pt=new vn(e._pt,a,l,u,d-u,Pd),e._pt.u=_||0,e._props.push(l));kg(a,i)};_n("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",o=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(a){return e<2?s+a:"border"+a+s});ac[e>1?"border"+s:s]=function(a,l,c,h,u){var d,f;if(arguments.length<4)return d=o.map(function(_){return Hi(a,_,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},o.forEach(function(_,g){return f[_]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(l,f,u)}});var Bd={name:"css",register:Id,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var o=this._props,a=e.style,l=n.vars.startAt,c,h,u,d,f,_,g,p,m,x,v,y,b,S,T,C;Nd||Id(),this.styles=this.styles||Xg(e),C=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(h=t[g],!(Sn[g]&&Sd(g,t,n,i,e,r)))){if(f=typeof h,_=ac[g],f==="function"&&(h=h.call(n,i,e,r),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=Jr(h)),_)_(this,e,g,h,n)&&(T=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),h+="",Bi.lastIndex=0,Bi.test(c)||(p=en(c),m=en(h)),m?p!==m&&(c=xs(e,g,c,m)+m):p&&(h+=p),this.add(a,"setProperty",c,h,i,r,0,0,g),o.push(g),C.push(g,0,a[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,r):l[g],qt(c)&&~c.indexOf("random(")&&(c=Jr(c)),en(c+"")||c==="auto"||(c+=Tn.units[g]||en(Hi(e,g))||""),(c+"").charAt(1)==="="&&(c=Hi(e,g))):c=Hi(e,g),d=parseFloat(c),x=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),x&&(h=h.substr(2)),u=parseFloat(h),g in gi&&(g==="autoAlpha"&&(d===1&&Hi(e,"visibility")==="hidden"&&u&&(d=0),C.push("visibility",0,a.visibility),vs(this,a,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=gi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),v=g in ki,v){if(this.styles.save(g),y||(b=e._gsap,b.renderTransform&&!t.parseTransform||ta(e,t.parseTransform),S=t.smoothOrigin!==!1&&b.smooth,y=this._pt=new vn(this._pt,a,At,0,1,b.renderTransform,b,0,-1),y.dep=1),g==="scale")this._pt=new vn(this._pt,b,"scaleY",b.scaleY,(x?Xs(b.scaleY,x+u):u)-b.scaleY||0,Pd),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push(wn,0,a[wn]),h=iE(h),b.svg?Dd(e,h,0,S,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==b.zOrigin&&vs(this,b,"zOrigin",b.zOrigin,m),vs(this,a,g,lc(c),lc(h)));continue}else if(g==="svgOrigin"){Dd(e,h,1,S,0,this);continue}else if(g in Kg){aE(this,b,g,d,x?Xs(d,x+h):h);continue}else if(g==="smoothOrigin"){vs(this,b,"smooth",b.smooth,h);continue}else if(g==="force3D"){b[g]=h;continue}else if(g==="transform"){lE(this,h,e);continue}}else g in a||(g=eo(g)||g);if(v||(u||u===0)&&(d||d===0)&&!G1.test(h)&&g in a)p=(c+"").substr((d+"").length),u||(u=0),m=en(h)||(g in Tn.units?Tn.units[g]:p),p!==m&&(d=xs(e,g,c,m)),this._pt=new vn(this._pt,v?b:a,g,d,(x?Xs(d,x+u):u)-d,!v&&(m==="px"||g==="zIndex")&&t.autoRound!==!1?q1:Pd),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=X1);else if(g in a)nE.call(this,e,g,c,x?x+h:h);else if(g in e)this.add(e,g,c||e[g],x?x+h:h,i,r);else if(g!=="parseTransform"){nc(g,h);continue}v||(g in a?C.push(g,0,a[g]):C.push(g,1,c||e[g])),o.push(g)}}T&&Ad(this)},render:function(e,t){if(t.tween._time||!Ud())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Hi,aliases:gi,getSetter:function(e,t,n){var i=gi[t];return i&&i.indexOf(",")<0&&(t=i),t in ki&&t!==wn&&(e._gsap.x||Hi(e,"x"))?n&&Ng===n?t==="scale"?J1:K1:(Ng=n||{})&&(t==="scale"?$1:j1):e.style&&!tc(e.style[t])?Y1:~t.indexOf("-")?Z1:oc(e,t)},core:{_removeProperty:$s,_getMatrix:Fd}};hn.utils.checkPrefix=eo;hn.core.getStyleSaver=Xg;(function(s,e,t,n){var i=_n(s+","+e+","+t,function(r){ki[r]=1});_n(e,function(r){Tn.units[r]="deg",Kg[r]=1}),gi[i[13]]=s+","+e,_n(n,function(r){var o=r.split(":");gi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");_n("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Tn.units[s]="px"});hn.registerPlugin(Bd);var zd=hn.registerPlugin(Bd)||hn,BT=zd.core.Tween;var h0=matchMedia("(prefers-reduced-motion: reduce)"),no=h0.matches,Hd=!!navigator.connection?.saveData,kd=new URLSearchParams(location.search).get("view")==="reading",Rt=!1,hc=!0,ri=!1,Vd=!1,Gd=null,pc=null,vi=()=>{hc=!0},jg=s=>s.target instanceof Element&&!!s.target.closest("a,button,summary,nav,details,input,select,textarea");window.__labQ=()=>({rendered:!1,fallback:Gd,paused:Rt});var Qg=matchMedia("(hover: hover) and (pointer: fine)").matches,u0=["Surface","Quartz","Echo","Source","Your trace"],js=u0.length-1;document.body.classList.add("fx-dom");var xi=null,cE=0;if(!no&&!Hd&&!kd){xi=new Xl({lerp:.085,wheelMultiplier:.88}),xi.on("scroll",e=>{cE=e.velocity||0});let s=e=>{xi&&(xi.raf(e),requestAnimationFrame(s))};requestAnimationFrame(s),window.__labLenis=xi}var ia=()=>{let s=Math.max(1,document.documentElement.scrollHeight-innerHeight);return Math.min(js,Math.max(0,scrollY/s*js))},tn=document.getElementById("labIntro"),e0=tn?.querySelector(".lab-intro__pct"),t0=tn?.querySelector(".lab-intro__bar b"),io={v:0},sa=0,d0=()=>{e0&&(e0.textContent=String(Math.round(io.v)).padStart(3,"0")),t0&&(t0.style.transform=`scaleX(${io.v/100})`)},f0=()=>{io.v+=(sa*100-io.v)*.06,d0(),!(!tn||tn.classList.contains("is-done"))&&requestAnimationFrame(f0)};tn&&!no&&requestAnimationFrame(f0);var p0=performance.now(),n0=!1,mc=!tn,na=tn?.querySelector(".lab-intro__log"),m0=0,uc=s=>{if(!na||tn.classList.contains("is-done"))return;let e=document.createElement("span");for(e.textContent=`T+${((performance.now()-p0)/1e3).toFixed(3)} \xB7 ${s}`,na.appendChild(e),m0+=1;na.children.length>4;)na.removeChild(na.firstChild)};uc("RUNTIME ONLINE");var ra=()=>{if(n0)return;n0=!0;let s=()=>{mc&&tn||(mc=!0,tn?.remove(),document.body.classList.add("lab-in"),dispatchEvent(new CustomEvent("lab:hero")),vi())};if(!tn||no){s();return}let e=()=>{io.v=Math.max(io.v,sa*100),d0(),tn.classList.add("is-done"),tn.addEventListener("transitionend",n=>{n.target===tn&&n.propertyName==="clip-path"&&s()}),setTimeout(s,1e3)},t=Math.max(120,1100-(performance.now()-p0));setTimeout(e,t)};if(tn){let s=tn.querySelector(".lab-intro__word");s&&!no&&(s.innerHTML=[...s.textContent].map(e=>`<i>${e===" "?"&nbsp;":e}</i>`).join(""),zd.fromTo(s.children,{yPercent:120},{yPercent:0,duration:.9,ease:"power4.out",stagger:.04,delay:.15})),document.getElementById("labSkip")?.addEventListener("click",ra),tn.addEventListener("keydown",e=>{e.key==="Escape"&&ra()}),setTimeout(ra,9e3)}var i0=document.getElementById("labReadout"),s0=document.getElementById("labPct"),r0=document.getElementById("labCue"),oa=document.getElementById("labEnd"),hE=["#202B34","#202B34","#202B34","#202B34","#202B34"],uE=s=>{let e=hE[s],t=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),i=parseInt(e.slice(5,7),16);document.body.style.setProperty("--labAcc",e),document.body.style.setProperty("--labAccGlow",`rgba(${t},${n},${i},.55)`)},dc=-1,o0=-1,gc=[...document.querySelectorAll("[data-lab-chapter]")],dE=[...document.querySelectorAll(".lab-chapters [data-lab-goto]")],a0=document.getElementById("labProgress"),_c=()=>{if(!ri)return;let s=ia();if(s===o0)return;o0=s,vi();let e=Math.min(js,Math.round(s));if(document.body.dataset.climate=s>=2.9?"chamber":"surface",e!==dc){let t=dc===-1;dc=e,i0&&(i0.textContent=`${String(e+1).padStart(2,"0")} / ${u0[e]}`),uE(e),dE.forEach((n,i)=>{i===e?n.setAttribute("aria-current","step"):n.removeAttribute("aria-current")}),t||dispatchEvent(new CustomEvent("lab:chapter",{detail:e}))}s0&&(s0.textContent=Math.round(s/js*100)),gc.forEach((t,n)=>{let i=t.querySelector(".lab-chapter__copy"),r=[[0,0,.11,.34],[.66,.96,1.38,1.64],[1.68,1.96,2.2,2.44],[2.48,2.66,3.5,3.76],[3.62,3.88,4,4.1]],[o,a,l,c]=r[n],h=(n===0?1:je.smoothstep(s,o,a))*(1-je.smoothstep(s,l,c));i.style.setProperty("--chapter-opacity",h.toFixed(3)),i.style.setProperty("--chapter-shift",`${((1-h)*18).toFixed(1)}px`),i.classList.toggle("is-current",h>.015),i.setAttribute("aria-hidden",String(h<=.015))}),r0&&r0.classList.toggle("is-gone",s>.18),oa&&(oa.classList.toggle("is-live",s>3.76),oa.inert=s<=3.76),a0&&(a0.style.transform=`scaleX(${s/js})`)};addEventListener("scroll",_c,{passive:!0});addEventListener("resize",_c,{passive:!0});var cc=document.getElementById("labPause");cc?.addEventListener("click",()=>{ri&&(Rt=!Rt,document.body.classList.toggle("lab-is-paused",Rt),cc.setAttribute("aria-pressed",String(Rt)),cc.setAttribute("aria-label",Rt?"Resume motion":"Pause motion"),cc.querySelector("[data-pause-label]").textContent=Rt?"Resume":"Pause",vi(),dispatchEvent(new CustomEvent("lab:motion",{detail:Rt})))});var g0=(s,e=!1,t=!0)=>{let n=gc[s];if(!n||!ri)return;let i=(document.documentElement.scrollHeight-innerHeight)*s/js,r=()=>{_c(),t&&n.querySelector("h1,h2")?.focus({preventScroll:!0})};xi?xi.scrollTo(i,{immediate:e||Rt,duration:1.25,onComplete:r}):(scrollTo({top:i,behavior:"instant"}),r()),(e||Rt)&&r()};document.querySelectorAll("[data-lab-goto]").forEach(s=>s.addEventListener("click",e=>{if(!ri)return;e.preventDefault();let t=Number(s.dataset.labGoto);history.pushState(null,"",s.getAttribute("href")),g0(t)}));var Yd=()=>{let s=gc.findIndex(e=>`#${e.id}`===location.hash);s>=0&&g0(s,!0,!1)};addEventListener("hashchange",Yd);addEventListener("popstate",Yd);var to=document.getElementById("labMenu");document.addEventListener("keydown",s=>{s.key==="Escape"&&to?.open&&(to.open=!1,to.querySelector("summary").focus())});document.addEventListener("pointerdown",s=>{to?.open&&!to.contains(s.target)&&(to.open=!1)});var Wd=document.getElementById("labTx"),l0=["Move across the ice. Follow the light.","Turn the crystal in the light.","Old stone. A different voice.","Hold the source. Release a wave.","The journey leaves a trace."],c0=s=>{Wd&&(Wd.textContent=s)},Vi=document.getElementById("labSound"),Xd=null,_0=null,qd=null,v0=0,x0=null;if(Vi){let s=null,e=null,t=!1,n=()=>{if(s)return!0;try{s=new(window.AudioContext||window.webkitAudioContext),_0=s,e=s.createGain(),e.gain.value=0,e.connect(s.destination);let h=s.createBiquadFilter();h.type="lowpass",h.frequency.value=220,h.Q.value=.7,h.connect(e),Xd=h,[[48,"sine",.17],[96.5,"sine",.1],[144.8,"triangle",.03]].forEach(([v,y,b])=>{let S=s.createOscillator(),T=s.createGain();S.type=y,S.frequency.value=v,T.gain.value=b,S.connect(T),T.connect(h),S.start()});let u=s.createOscillator(),d=s.createGain();u.frequency.value=.05,d.gain.value=70,u.connect(d),d.connect(h.frequency),u.start();let f=s.sampleRate*2,_=s.createBuffer(1,f,s.sampleRate),g=_.getChannelData(0);for(let v=0;v<f;v++)g[v]=Math.random()*2-1;let p=s.createBufferSource();p.buffer=_,p.loop=!0;let m=s.createBiquadFilter();m.type="bandpass",m.frequency.value=1600,m.Q.value=1.6;let x=s.createGain();return x.gain.value=.011,p.connect(m),m.connect(x),x.connect(e),p.start(),!0}catch{return s=null,!1}},i=0,r=0;qd=(h,u,d,f=0)=>{if(!s||!t||r>=6)return;let _=s.currentTime;if(_-i<.11)return;i=_;let p=[0,3,5,7,10][Math.abs(Math.floor((Math.atan2(d,h)+Math.PI)/(Math.PI*2)*5))%5],m=Math.max(0,(u>-12?3:u>-30?2:1)-f),x=48*Math.pow(2,m+p/12),v=s.createGain();v.gain.setValueAtTime(0,_),v.gain.linearRampToValueAtTime(.055,_+.012),v.gain.exponentialRampToValueAtTime(4e-4,_+.95);let y=s.createBiquadFilter();y.type="lowpass",y.frequency.value=2600,y.Q.value=.9,v.connect(y);let b=y;if(s.createStereoPanner){let S=s.createStereoPanner();S.pan.value=Math.max(-.8,Math.min(.8,h/9)),y.connect(S),b=S}b.connect(e),[[x,1],[x*2.997,.22]].forEach(([S,T],C)=>{let M=s.createOscillator(),E=s.createGain();M.type="sine",M.frequency.value=S,E.gain.value=T,M.connect(E),E.connect(v),C===0&&(M.onended=()=>{try{b.disconnect()}catch{}}),M.start(_),M.stop(_+1)}),r++,v0++,setTimeout(()=>{r--},1e3)},x0=h=>{if(!s||!t)return;let u=s.currentTime,d=s.createGain();d.gain.setValueAtTime(.001,u),d.gain.exponentialRampToValueAtTime(Math.max(.002,.16*h),u+.02),d.gain.exponentialRampToValueAtTime(4e-4,u+.7),d.connect(e);let f=s.createOscillator();f.type="sine",f.frequency.setValueAtTime(46,u),f.frequency.exponentialRampToValueAtTime(30,u+.6),f.connect(d),f.onended=()=>{try{d.disconnect()}catch{}},f.start(u),f.stop(u+.75);let _=s.createBuffer(1,Math.floor(s.sampleRate*.1),s.sampleRate),g=_.getChannelData(0);for(let v=0;v<g.length;v++)g[v]=(Math.random()*2-1)*(1-v/g.length);let p=s.createBufferSource();p.buffer=_;let m=s.createBiquadFilter();m.type="bandpass",m.frequency.value=900,m.Q.value=.8;let x=s.createGain();x.gain.value=.05*h,p.connect(m),m.connect(x),x.connect(e),p.onended=()=>{try{x.disconnect()}catch{}},p.start(u)};let o=()=>{if(!s||!t)return;let h=s.sampleRate*.45,u=s.createBuffer(1,h,s.sampleRate),d=u.getChannelData(0);for(let p=0;p<h;p++)d[p]=(Math.random()*2-1)*(1-p/h);let f=s.createBufferSource();f.buffer=u;let _=s.createBiquadFilter();_.type="lowpass",_.Q.value=2.4,_.frequency.setValueAtTime(2100,s.currentTime),_.frequency.exponentialRampToValueAtTime(180,s.currentTime+.42);let g=s.createGain();g.gain.value=.08,f.connect(_),_.connect(g),g.connect(e),f.start()},a=(h,u=!0)=>{if(h&&!n()){Vi.querySelector("[data-sound-label]").textContent="Sound unavailable",Vi.disabled=!0;return}if(t=h,Vi.querySelector("[data-sound-label]").textContent=h?"Sound on":"Sound off",h&&s?.state==="suspended"&&s.resume().catch(()=>{}),Vi.setAttribute("aria-pressed",String(!!h)),Vi.classList.toggle("is-on",h),u)try{localStorage.setItem("lab-sound",h?"1":"0")}catch{}e&&e.gain.linearRampToValueAtTime(h?.9:0,(s?.currentTime||0)+.7)};Vi.addEventListener("click",()=>a(!t));let l=null;try{l=localStorage.getItem("lab-sound")}catch{}l==="1"&&(Vi.classList.add("is-armed"),addEventListener("pointerdown",function h(){removeEventListener("pointerdown",h),Vi.classList.remove("is-armed"),a(!0,!1)},{once:!0})),addEventListener("lab:chapter",o);let c=()=>{s&&(document.hidden||Rt||!ri?s.suspend().catch(()=>{}):t&&s.resume().catch(()=>{}))};addEventListener("lab:motion",c),document.addEventListener("visibilitychange",c),addEventListener("pagehide",h=>{h.persisted||s?.close().catch(()=>{})})}var fc=document.getElementById("labfx"),aa=(s="The landscape could not load. You can still read all five chapters.")=>{Vd=!0,ri=!1,Gd=s,pc?.(),pc=null,xi?.destroy(),xi=null,document.body.classList.remove("lab-crystalline","lab-pocket","lab-ruin","lab-transmission","fx-on","lab-type-on","lab-exhibits"),document.body.classList.add("lab-no3d"),document.body.dataset.climate="surface",gc.forEach(e=>e.querySelector(".lab-chapter__copy").removeAttribute("aria-hidden")),oa&&(oa.inert=!0),document.getElementById("labChargePanel").hidden=!0,document.getElementById("labReadingReason").textContent=s,window.__labQ=()=>({rendered:!1,fallback:Gd,paused:!0}),dispatchEvent(new CustomEvent("lab:motion",{detail:!0})),ra()};!fc||no||Hd||kd?aa(no?"The still edition. Your reduced-motion preference is on.":Hd?"The still edition. Your data-saving preference is on.":kd?"The still edition. Five chapters, at your own pace.":void 0):fE().catch(s=>{console.warn("[labfx] 3D disabled:",s),aa()});h0.addEventListener("change",s=>{s.matches&&aa("The still edition. Your reduced-motion preference is on.")});async function fE(){let s=innerWidth<680,e=s||innerWidth<1100||matchMedia("(pointer: coarse)").matches,t=s?[1.1,1,.85]:e?[1.25,1,.9]:[1.5,1.15,1],n=innerWidth,i=innerHeight,r=Math.min(devicePixelRatio||1,t[0]),o=new wo({canvas:fc,antialias:!1,alpha:!1,stencil:!1,powerPreference:"high-performance"}),a=new AbortController,l=(fe,ke,We,He={})=>fe.addEventListener(ke,We,{...He,signal:a.signal}),c,h,u,d,f,_,g=!1,p=[],m=new Oo,x=new Ll(m).setDecoderPath("/assets/3d/draco/"),v=()=>{let fe=new Set,ke=new Set;for(let We of p)We.isTexture?We.dispose():We.scene?.traverse(He=>{He.geometry&&fe.add(He.geometry),He.material&&(Array.isArray(He.material)?He.material:[He.material]).forEach(it=>ke.add(it))});fe.forEach(We=>We.dispose()),ke.forEach(We=>We.dispose()),p.length=0};pc=()=>{g||(g=!0,a.abort(),o.setAnimationLoop(null),u?.dispose(),d?.dispose(),c?.passes.forEach(fe=>fe.dispose?.()),c?.dispose(),f?.dispose(),_?.dispose(),v(),x.dispose(),o.dispose(),delete window.__labPoster)},o.setPixelRatio(r),o.setSize(n,i),o.outputColorSpace=ut,o.toneMapping=Bo,o.toneMappingExposure=1,o.shadowMap.enabled=!0,o.shadowMap.type=Zh,o.info.autoReset=!1,uc("GL CONTEXT ACQUIRED"),m.onProgress=(fe,ke,We)=>{sa=Math.max(sa,ke/Math.max(We,1))};let y=new Cl(m).setDRACOLoader(x),b=new Ur(m),S=await Promise.allSettled([y.loadAsync("/assets/3d/lab-crystals.glb"),y.loadAsync("/assets/3d/lab-setpieces.glb"),b.loadAsync("/assets/3d/lab-snow-color.webp"),b.loadAsync("/assets/3d/lab-snow-normal.webp")]);if(S.forEach(fe=>{fe.status==="fulfilled"&&p.push(fe.value)}),g||Vd){v();return}let T=S.find(fe=>fe.status==="rejected");if(T)throw T.reason;let[C,M,E,D]=S.map(fe=>fe.value);E.colorSpace=ut;for(let fe of[E,D])fe.wrapS=fe.wrapT=Pi,fe.anisotropy=Math.min(s?4:8,o.capabilities.getMaxAnisotropy());sa=1,uc("FROZEN ARCHIVE DECODED \xB7 4 ASSETS");let O=new Lr;O.fog=new tl(11187389,25,85);let H=new Dt(45,n/i,.1,180),I=new Gl,U=new Cr(o);f=U.fromScene(I,.035),I.dispose();let F=Nm(s);_=U.fromEquirectangular(F),F.dispose(),U.dispose(),O.environment=f.texture;let Y=new vl(15331317,6583687,.78);if(O.add(Y),u=Pm({scene:O,snowColor:E,snowNormal:D,iceEnvironment:_.texture,phone:s,mid:e}),d=Gm({scene:O,crystalScene:C.scene,stoneScene:M.scene,snowColor:E,snowNormal:D,iceEnvironment:_.texture,phone:s,mid:e}),c=new Nl(o),o.capabilities.isWebGL2){for(let fe of[c.renderTarget1,c.renderTarget2])fe.depthTexture=new Pr(fe.width,fe.height,li);h=new Bl({camera:H,lighting:u.lighting,phone:s,mid:e})}o.capabilities.isWebGL2&&!e&&(c.renderTarget1.samples=4,c.renderTarget2.samples=4);let J=new Vr(new re(n,i),.2,.38,1.04),X=new kr(Sm);X.enabled=e||!o.capabilities.isWebGL2,c.addPass(new Ul(O,H)),h&&c.addPass(h),c.addPass(J),c.addPass(new Ol),c.addPass(X);let le=fe=>{o.setPixelRatio(fe),c.setPixelRatio(fe),o.setSize(n,i),c.setSize(n,i),X.uniforms.resolution.value.set(1/(n*fe),1/(i*fe))};le(r);let ce="lab-memory",he={v:1,visits:0,charges:0,keystoneAt:0,lastISO:""},K=!1;try{let fe=JSON.parse(localStorage.getItem(ce)||"null");if(fe?.v===1){for(let ke of["visits","charges","keystoneAt"])Number.isFinite(fe[ke])&&(he[ke]=Math.max(0,Math.floor(fe[ke])));typeof fe.lastISO=="string"&&(he.lastISO=fe.lastISO)}}catch{}he.visits+=1;try{localStorage.setItem(ce,JSON.stringify(he)),K=!0}catch{}let oe=()=>{if(K)try{localStorage.setItem(ce,JSON.stringify(he))}catch{K=!1}},Se=()=>{let fe=document.getElementById("labMemory");fe&&(fe.textContent=he.charges>0?K?`Visit ${he.visits}. Your fragment is kept here.`:"Your fragment stays for this visit.":`Visit ${he.visits}. Leave a fragment at the source.`)};Se(),d.remember(he.charges>0);let Ae=0,Le=0,Z=0,k=!1,ne=null,_e=0,L=!1,j=!1,q=0,se=0,V=0,ye=new re,Me=[],A=-10,w=new R(1e3,1e3,1e3),B=fe=>{if(!ri||Rt||!L)return;let We=ia()<.7?u.pick(ye,H):d.pick(ye,H);if(!We)return;let He=We.point;if(!fe&&(Ae-A<.15||He.distanceToSquared(w)<.28))return;let it=fe||Ae-A>.65;w.copy(He),A=Ae;let vt=We.index===1?1:0;if(We.index===1&&V++,We.index<0?u.strike(He,Ae):d.strike(We.index,Ae),qd?.(He.x-H.position.x,He.y,He.z,vt),q++,document.body.classList.add("lab-resonant"),vi(),it)for(let[An,On]of[[.12,-.75],[.23,.75]])Me.push({at:Ae+An,index:We.index,point:He.clone().add(new R(On,.18,-.12)),octave:vt})},pe=fe=>{if(!Rt){if(jg(fe)){L=!1;return}ye.set(fe.clientX/n*2-1,1-fe.clientY/i*2),L=!0,vi()}};l(window,"pointerdown",fe=>{j=!jg(fe)&&fe.button===0,j&&(pe(fe),B(!0))},{passive:!0}),l(window,"pointermove",fe=>{(Qg||j)&&(pe(fe),B(!1))},{passive:!0});let me=()=>{j=!1,Qg||(L=!1)};l(window,"pointerup",me,{passive:!0}),l(window,"pointercancel",me,{passive:!0}),l(document,"pointerout",fe=>{fe.relatedTarget||(L=!1,j=!1)},{passive:!0});let ae=0,Ie=!1,G=!1,de=-100,Ee=0,ee=0,z=fe=>1-(1-ee)*Math.exp(-Math.max(0,fe-Ee)*2.8),ve=document.getElementById("labCharge"),Re=document.getElementById("labChargePanel"),be=document.getElementById("labChargeMeter"),xe=document.getElementById("labChargeValue"),ge=document.getElementById("labChargeStatus"),ue=-1,Fe=(fe=!1)=>{ve.classList.remove("is-hot"),Ie&&(fe||(ae=z(performance.now()/1e3)),Ie=!1,!(fe||ae<.22)&&(de=Ae,d.release(Ae),x0?.(ae),he.charges===0&&(he.keystoneAt=Date.now(),d.remember(!0,Ae)),he.charges++,oe(),Se(),ge.textContent=K?"Signal released. Your fragment is saved.":"Signal released. A fragment for this visit.",vi()))},ot=()=>{!ri||Rt||!G||Ie||(Ee=performance.now()/1e3,ee=ae,Ie=!0,ve.classList.add("is-hot"),ge.textContent="",vi())};l(ve,"pointerdown",fe=>{fe.button!==0||ve.disabled||(fe.preventDefault(),ve.setPointerCapture(fe.pointerId),ot())}),l(ve,"pointerup",()=>Fe()),l(ve,"pointercancel",()=>Fe(!0)),l(ve,"lostpointercapture",()=>Fe(!0)),l(ve,"keydown",fe=>{(fe.code==="Space"||fe.code==="Enter")&&(fe.preventDefault(),fe.repeat||ot())}),l(ve,"keyup",fe=>{(fe.code==="Space"||fe.code==="Enter")&&(fe.preventDefault(),Fe())}),l(ve,"blur",()=>Fe(!0)),l(window,"blur",()=>{Fe(!0),L=!1,j=!1}),l(window,"lab:motion",()=>Fe(!0)),l(window,"lab:chapter",fe=>{c0(l0[fe.detail]),fe.detail!==3&&Fe(!0)});let Be=document.hidden,Te=0,N=16.7,we=120,te=performance.now()/1e3,Ce={position:new R,target:new R,fov:45};Vu(0,n/i,Ce);let De=Ce.position.clone(),Ke=Ce.target.clone();l(document,"visibilitychange",()=>{Be=document.hidden,Be&&Fe(!0),vi()}),l(window,"resize",()=>{n=innerWidth,i=innerHeight,H.aspect=n/i,H.updateProjectionMatrix(),le(r),vi()}),l(fc,"webglcontextlost",fe=>{fe.preventDefault(),aa("The 3D connection was interrupted. The still edition is ready below.")}),l(window,"pagehide",fe=>{he.lastISO=new Date().toISOString(),oe(),fe.persisted||pc?.()}),window.__labQ=()=>({rendered:ri,frames:Le,paused:Rt,time:+Ae.toFixed(3),chapter:dc,progress:+ia().toFixed(3),sceneProgress:+Z.toFixed(3),cameraSettled:k,qIdx:Te,dpr:r,disp:0,rip:q,echo:se,stoneRip:V,chime:v0,charge:+ae.toFixed(3),charges:he.charges,chargeArmed:G,pocket:s,ruin:2,keystone:d.diagnostics().keystone,visits:he.visits,memoryPersists:K,tx:Wd?.textContent,bootLines:m0,emaMs:Math.round(N),camera:H.position.toArray(),drawCalls:o.info.render.calls,triangles:o.info.render.triangles,landscape:u.diagnostics(),exhibits:d.diagnostics(),journey:"frozen-exhibits",atmosphere:h?{enabled:h.enabled,steps:h.fog.defines.AIR_STEPS}:null,arrivalTime:+_e.toFixed(3),entranceReady:mc}),o.setAnimationLoop(fe=>{let ke=fe/1e3,We=Math.max(0,ke-te);if(Be||g||Vd||Rt&&!hc){te=ke;return}if(!hc&&We<1/(s?45:60))return;te=ke,hc=!1;let He=Rt?0:Math.min(.05,We),it=ia();if(!Rt){if(Ae+=He,N+=(Math.min(100,We*1e3)-N)*.05,--we<=0){let Mt=Te;N>30?Mt=Math.min(t.length-1,Te+1):N<17&&(Mt=Math.max(0,Te-1)),Mt!==Te&&(Te=Mt,r=Math.min(devicePixelRatio||1,t[Te]),le(r)),we=240}for(let Mt=Me.length-1;Mt>=0;Mt--){let zt=Me[Mt];zt.at>Ae||(zt.index<0?u.strike(zt.point,Ae):d.strike(zt.index,Ae),qd?.(zt.point.x-H.position.x,zt.point.y,zt.point.z,zt.octave),Me.splice(Mt,1),se++)}}G=it>2.98&&it<3.38,G||Fe(!0),Ie&&G?ae=z(ke):ae*=Math.exp(-He*7),Re.hidden=!G,ve.disabled=Rt,ve.querySelector("[data-charge-label]").textContent=Rt?"Resume to charge":"Hold to charge";let vt=Math.round(ae*100);vt!==ue&&(xe.textContent=`${vt}%`,be.value=ae,ue=vt),ne===null&&mc&&(ne=Ae),_e=ne===null?0:Math.max(0,Ae-ne),Vu(it,n/i,Ce);let An=(1-je.smootherstep(_e,0,Bu))*(1-je.smoothstep(it,.04,.38));if(Ce.position.sub(Ce.target).multiplyScalar(1+An*.1).add(Ce.target),Ce.position.x+=An*.36,Ce.position.y+=An*.2,Ce.position.x+=ye.x*.16,Ce.position.y+=ye.y*.08,Rt||!Le)De.copy(Ce.position),Ke.copy(Ce.target);else{let Mt=1-Math.exp(-He*8);De.lerp(Ce.position,Mt),Ke.lerp(Ce.target,Mt)}k=De.distanceToSquared(Ce.position)<9e-4&&Ke.distanceToSquared(Ce.target)<9e-4,H.position.copy(De),H.lookAt(Ke),H.fov=Ce.fov-ae*1.3,H.updateProjectionMatrix(),H.updateMatrixWorld(),Y.intensity=je.lerp(.78,.82,je.smoothstep(it,.8,1.1)),u.update({cp:it,time:Ae,arrivalTime:_e,charge:ae,camera:H,dpr:r,pointer:L?ye:null,paused:Rt}),d.update({cp:it,time:Ae,dt:He,charge:ae,camera:H,pointer:L?ye:null,paused:Rt}),h?.update(it);let On=Math.exp(-Math.max(0,Ae-de)*3.5),Rn=je.smoothstep(it,.72,1.12);J.strength=.25-Rn*.07+ae*.13+On*.32,J.threshold=.93+Rn*.11,Xd&&_0&&(Xd.frequency.value=230-Math.min(it,3)*20+ae*260),o.info.reset();try{c.render()}catch(Mt){console.warn("[labfx] Rendering stopped:",Mt),aa();return}Z=it,Le++,ri||(ri=!0,document.body.classList.remove("lab-no3d"),document.body.classList.add("fx-on","lab-crystalline","lab-transmission","lab-exhibits"),s&&document.body.classList.add("lab-pocket"),xi?.resize(),_c(),Yd(),c0(l0[Math.min(js,Math.round(ia()))]),uc("FROZEN WORLD READY"),ra())}),window.__labPoster=()=>{try{return le(1),o.info.reset(),c.render(),fc.toDataURL("image/webp",.94)}finally{le(r),vi()}}}
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
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
