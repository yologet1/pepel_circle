console.log('NSFWJS:', typeof nsfwjs);
if (typeof tf !== "undefined" && tf.setBackend) tf.setBackend('cpu');
/*! QRious v4.0.2 | (C) 2017 Alasdair Mercer | GPL v3 License
Based on jsqrencode | (C) 2010 tz@execpc.com | GPL v3 License
*/
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.QRious=e()}(this,function(){"use strict";function t(t,e){var n;return"function"==typeof Object.create?n=Object.create(t):(s.prototype=t,n=new s,s.prototype=null),e&&i(!0,n,e),n}function e(e,n,s,r){var o=this;return"string"!=typeof e&&(r=s,s=n,n=e,e=null),"function"!=typeof n&&(r=s,s=n,n=function(){return o.apply(this,arguments)}),i(!1,n,o,r),n.prototype=t(o.prototype,s),n.prototype.constructor=n,n.class_=e||o.class_,n.super_=o,n}function i(t,e,i){for(var n,s,a=0,h=(i=o.call(arguments,2)).length;a<h;a++){s=i[a];for(n in s)t&&!r.call(s,n)||(e[n]=s[n])}}function n(){}var s=function(){},r=Object.prototype.hasOwnProperty,o=Array.prototype.slice,a=e;n.class_="Nevis",n.super_=Object,n.extend=a;var h=n,f=h.extend(function(t,e,i){this.qrious=t,this.element=e,this.element.qrious=t,this.enabled=Boolean(i)},{draw:function(t){},getElement:function(){return this.enabled||(this.enabled=!0,this.render()),this.element},getModuleSize:function(t){var e=this.qrious,i=e.padding||0,n=Math.floor((e.size-2*i)/t.width);return Math.max(1,n)},getOffset:function(t){var e=this.qrious,i=e.padding;if(null!=i)return i;var n=this.getModuleSize(t),s=Math.floor((e.size-n*t.width)/2);return Math.max(0,s)},render:function(t){this.enabled&&(this.resize(),this.reset(),this.draw(t))},reset:function(){},resize:function(){}}),c=f.extend({draw:function(t){var e,i,n=this.qrious,s=this.getModuleSize(t),r=this.getOffset(t),o=this.element.getContext("2d");for(o.fillStyle=n.foreground,o.globalAlpha=n.foregroundAlpha,e=0;e<t.width;e++)for(i=0;i<t.width;i++)t.buffer[i*t.width+e]&&o.fillRect(s*e+r,s*i+r,s,s)},reset:function(){var t=this.qrious,e=this.element.getContext("2d"),i=t.size;e.lineWidth=1,e.clearRect(0,0,i,i),e.fillStyle=t.background,e.globalAlpha=t.backgroundAlpha,e.fillRect(0,0,i,i)},resize:function(){var t=this.element;t.width=t.height=this.qrious.size}}),u=h.extend(null,{BLOCK:[0,11,15,19,23,27,31,16,18,20,22,24,26,28,20,22,24,24,26,28,28,22,24,24,26,26,28,28,24,24,26,26,26,28,28,24,26,26,26,28,28]}),l=h.extend(null,{BLOCKS:[1,0,19,7,1,0,16,10,1,0,13,13,1,0,9,17,1,0,34,10,1,0,28,16,1,0,22,22,1,0,16,28,1,0,55,15,1,0,44,26,2,0,17,18,2,0,13,22,1,0,80,20,2,0,32,18,2,0,24,26,4,0,9,16,1,0,108,26,2,0,43,24,2,2,15,18,2,2,11,22,2,0,68,18,4,0,27,16,4,0,19,24,4,0,15,28,2,0,78,20,4,0,31,18,2,4,14,18,4,1,13,26,2,0,97,24,2,2,38,22,4,2,18,22,4,2,14,26,2,0,116,30,3,2,36,22,4,4,16,20,4,4,12,24,2,2,68,18,4,1,43,26,6,2,19,24,6,2,15,28,4,0,81,20,1,4,50,30,4,4,22,28,3,8,12,24,2,2,92,24,6,2,36,22,4,6,20,26,7,4,14,28,4,0,107,26,8,1,37,22,8,4,20,24,12,4,11,22,3,1,115,30,4,5,40,24,11,5,16,20,11,5,12,24,5,1,87,22,5,5,41,24,5,7,24,30,11,7,12,24,5,1,98,24,7,3,45,28,15,2,19,24,3,13,15,30,1,5,107,28,10,1,46,28,1,15,22,28,2,17,14,28,5,1,120,30,9,4,43,26,17,1,22,28,2,19,14,28,3,4,113,28,3,11,44,26,17,4,21,26,9,16,13,26,3,5,107,28,3,13,41,26,15,5,24,30,15,10,15,28,4,4,116,28,17,0,42,26,17,6,22,28,19,6,16,30,2,7,111,28,17,0,46,28,7,16,24,30,34,0,13,24,4,5,121,30,4,14,47,28,11,14,24,30,16,14,15,30,6,4,117,30,6,14,45,28,11,16,24,30,30,2,16,30,8,4,106,26,8,13,47,28,7,22,24,30,22,13,15,30,10,2,114,28,19,4,46,28,28,6,22,28,33,4,16,30,8,4,122,30,22,3,45,28,8,26,23,30,12,28,15,30,3,10,117,30,3,23,45,28,4,31,24,30,11,31,15,30,7,7,116,30,21,7,45,28,1,37,23,30,19,26,15,30,5,10,115,30,19,10,47,28,15,25,24,30,23,25,15,30,13,3,115,30,2,29,46,28,42,1,24,30,23,28,15,30,17,0,115,30,10,23,46,28,10,35,24,30,19,35,15,30,17,1,115,30,14,21,46,28,29,19,24,30,11,46,15,30,13,6,115,30,14,23,46,28,44,7,24,30,59,1,16,30,12,7,121,30,12,26,47,28,39,14,24,30,22,41,15,30,6,14,121,30,6,34,47,28,46,10,24,30,2,64,15,30,17,4,122,30,29,14,46,28,49,10,24,30,24,46,15,30,4,18,122,30,13,32,46,28,48,14,24,30,42,32,15,30,20,4,117,30,40,7,47,28,43,22,24,30,10,67,15,30,19,6,118,30,18,31,47,28,34,34,24,30,20,61,15,30],FINAL_FORMAT:[30660,29427,32170,30877,26159,25368,27713,26998,21522,20773,24188,23371,17913,16590,20375,19104,13663,12392,16177,14854,9396,8579,11994,11245,5769,5054,7399,6608,1890,597,3340,2107],LEVELS:{L:1,M:2,Q:3,H:4}}),_=h.extend(null,{EXPONENT:[1,2,4,8,16,32,64,128,29,58,116,232,205,135,19,38,76,152,45,90,180,117,234,201,143,3,6,12,24,48,96,192,157,39,78,156,37,74,148,53,106,212,181,119,238,193,159,35,70,140,5,10,20,40,80,160,93,186,105,210,185,111,222,161,95,190,97,194,153,47,94,188,101,202,137,15,30,60,120,240,253,231,211,187,107,214,177,127,254,225,223,163,91,182,113,226,217,175,67,134,17,34,68,136,13,26,52,104,208,189,103,206,129,31,62,124,248,237,199,147,59,118,236,197,151,51,102,204,133,23,46,92,184,109,218,169,79,158,33,66,132,21,42,84,168,77,154,41,82,164,85,170,73,146,57,114,228,213,183,115,230,209,191,99,198,145,63,126,252,229,215,179,123,246,241,255,227,219,171,75,150,49,98,196,149,55,110,220,165,87,174,65,130,25,50,100,200,141,7,14,28,56,112,224,221,167,83,166,81,162,89,178,121,242,249,239,195,155,43,86,172,69,138,9,18,36,72,144,61,122,244,245,247,243,251,235,203,139,11,22,44,88,176,125,250,233,207,131,27,54,108,216,173,71,142,0],LOG:[255,0,1,25,2,50,26,198,3,223,51,238,27,104,199,75,4,100,224,14,52,141,239,129,28,193,105,248,200,8,76,113,5,138,101,47,225,36,15,33,53,147,142,218,240,18,130,69,29,181,194,125,106,39,249,185,201,154,9,120,77,228,114,166,6,191,139,98,102,221,48,253,226,152,37,179,16,145,34,136,54,208,148,206,143,150,219,189,241,210,19,92,131,56,70,64,30,66,182,163,195,72,126,110,107,58,40,84,250,133,186,61,202,94,155,159,10,21,121,43,78,212,229,172,115,243,167,87,7,112,192,247,140,128,99,13,103,74,222,237,49,197,254,24,227,165,153,119,38,184,180,124,17,68,146,217,35,32,137,46,55,63,209,91,149,188,207,205,144,135,151,178,220,252,190,97,242,86,211,171,20,42,93,158,132,60,57,83,71,109,65,162,31,45,67,216,183,123,164,118,196,23,73,236,127,12,111,246,108,161,59,82,41,157,85,170,251,96,134,177,187,204,62,90,203,89,95,176,156,169,160,81,11,245,22,235,122,117,44,215,79,174,213,233,230,231,173,232,116,214,244,234,168,80,88,175]}),d=h.extend(null,{BLOCK:[3220,1468,2713,1235,3062,1890,2119,1549,2344,2936,1117,2583,1330,2470,1667,2249,2028,3780,481,4011,142,3098,831,3445,592,2517,1776,2234,1951,2827,1070,2660,1345,3177]}),v=h.extend(function(t){var e,i,n,s,r,o=t.value.length;for(this._badness=[],this._level=l.LEVELS[t.level],this._polynomial=[],this._value=t.value,this._version=0,this._stringBuffer=[];this._version<40&&(this._version++,n=4*(this._level-1)+16*(this._version-1),s=l.BLOCKS[n++],r=l.BLOCKS[n++],e=l.BLOCKS[n++],i=l.BLOCKS[n],n=e*(s+r)+r-3+(this._version<=9),!(o<=n)););this._dataBlock=e,this._eccBlock=i,this._neccBlock1=s,this._neccBlock2=r;var a=this.width=17+4*this._version;this.buffer=v._createArray(a*a),this._ecc=v._createArray(e+(e+i)*(s+r)+r),this._mask=v._createArray((a*(a+1)+1)/2),this._insertFinders(),this._insertAlignments(),this.buffer[8+a*(a-8)]=1,this._insertTimingGap(),this._reverseMask(),this._insertTimingRowAndColumn(),this._insertVersion(),this._syncMask(),this._convertBitStream(o),this._calculatePolynomial(),this._appendEccToData(),this._interleaveBlocks(),this._pack(),this._finish()},{_addAlignment:function(t,e){var i,n=this.buffer,s=this.width;for(n[t+s*e]=1,i=-2;i<2;i++)n[t+i+s*(e-2)]=1,n[t-2+s*(e+i+1)]=1,n[t+2+s*(e+i)]=1,n[t+i+1+s*(e+2)]=1;for(i=0;i<2;i++)this._setMask(t-1,e+i),this._setMask(t+1,e-i),this._setMask(t-i,e-1),this._setMask(t+i,e+1)},_appendData:function(t,e,i,n){var s,r,o,a=this._polynomial,h=this._stringBuffer;for(r=0;r<n;r++)h[i+r]=0;for(r=0;r<e;r++){if(255!==(s=_.LOG[h[t+r]^h[i]]))for(o=1;o<n;o++)h[i+o-1]=h[i+o]^_.EXPONENT[v._modN(s+a[n-o])];else for(o=i;o<i+n;o++)h[o]=h[o+1];h[i+n-1]=255===s?0:_.EXPONENT[v._modN(s+a[0])]}},_appendEccToData:function(){var t,e=0,i=this._dataBlock,n=this._calculateMaxLength(),s=this._eccBlock;for(t=0;t<this._neccBlock1;t++)this._appendData(e,i,n,s),e+=i,n+=s;for(t=0;t<this._neccBlock2;t++)this._appendData(e,i+1,n,s),e+=i+1,n+=s},_applyMask:function(t){var e,i,n,s,r=this.buffer,o=this.width;switch(t){case 0:for(s=0;s<o;s++)for(n=0;n<o;n++)n+s&1||this._isMasked(n,s)||(r[n+s*o]^=1);break;case 1:for(s=0;s<o;s++)for(n=0;n<o;n++)1&s||this._isMasked(n,s)||(r[n+s*o]^=1);break;case 2:for(s=0;s<o;s++)for(e=0,n=0;n<o;n++,e++)3===e&&(e=0),e||this._isMasked(n,s)||(r[n+s*o]^=1);break;case 3:for(i=0,s=0;s<o;s++,i++)for(3===i&&(i=0),e=i,n=0;n<o;n++,e++)3===e&&(e=0),e||this._isMasked(n,s)||(r[n+s*o]^=1);break;case 4:for(s=0;s<o;s++)for(e=0,i=s>>1&1,n=0;n<o;n++,e++)3===e&&(e=0,i=!i),i||this._isMasked(n,s)||(r[n+s*o]^=1);break;case 5:for(i=0,s=0;s<o;s++,i++)for(3===i&&(i=0),e=0,n=0;n<o;n++,e++)3===e&&(e=0),(n&s&1)+!(!e|!i)||this._isMasked(n,s)||(r[n+s*o]^=1);break;case 6:for(i=0,s=0;s<o;s++,i++)for(3===i&&(i=0),e=0,n=0;n<o;n++,e++)3===e&&(e=0),(n&s&1)+(e&&e===i)&1||this._isMasked(n,s)||(r[n+s*o]^=1);break;case 7:for(i=0,s=0;s<o;s++,i++)for(3===i&&(i=0),e=0,n=0;n<o;n++,e++)3===e&&(e=0),(e&&e===i)+(n+s&1)&1||this._isMasked(n,s)||(r[n+s*o]^=1)}},_calculateMaxLength:function(){return this._dataBlock*(this._neccBlock1+this._neccBlock2)+this._neccBlock2},_calculatePolynomial:function(){var t,e,i=this._eccBlock,n=this._polynomial;for(n[0]=1,t=0;t<i;t++){for(n[t+1]=1,e=t;e>0;e--)n[e]=n[e]?n[e-1]^_.EXPONENT[v._modN(_.LOG[n[e]]+t)]:n[e-1];n[0]=_.EXPONENT[v._modN(_.LOG[n[0]]+t)]}for(t=0;t<=i;t++)n[t]=_.LOG[n[t]]},_checkBadness:function(){var t,e,i,n,s,r=0,o=this._badness,a=this.buffer,h=this.width;for(s=0;s<h-1;s++)for(n=0;n<h-1;n++)(a[n+h*s]&&a[n+1+h*s]&&a[n+h*(s+1)]&&a[n+1+h*(s+1)]||!(a[n+h*s]||a[n+1+h*s]||a[n+h*(s+1)]||a[n+1+h*(s+1)]))&&(r+=v.N2);var f=0;for(s=0;s<h;s++){for(i=0,o[0]=0,t=0,n=0;n<h;n++)t===(e=a[n+h*s])?o[i]++:o[++i]=1,f+=(t=e)?1:-1;r+=this._getBadness(i)}f<0&&(f=-f);var c=0,u=f;for(u+=u<<2,u<<=1;u>h*h;)u-=h*h,c++;for(r+=c*v.N4,n=0;n<h;n++){for(i=0,o[0]=0,t=0,s=0;s<h;s++)t===(e=a[n+h*s])?o[i]++:o[++i]=1,t=e;r+=this._getBadness(i)}return r},_convertBitStream:function(t){var e,i,n=this._ecc,s=this._version;for(i=0;i<t;i++)n[i]=this._value.charCodeAt(i);var r=this._stringBuffer=n.slice(),o=this._calculateMaxLength();t>=o-2&&(t=o-2,s>9&&t--);var a=t;if(s>9){for(r[a+2]=0,r[a+3]=0;a--;)e=r[a],r[a+3]|=255&e<<4,r[a+2]=e>>4;r[2]|=255&t<<4,r[1]=t>>4,r[0]=64|t>>12}else{for(r[a+1]=0,r[a+2]=0;a--;)e=r[a],r[a+2]|=255&e<<4,r[a+1]=e>>4;r[1]|=255&t<<4,r[0]=64|t>>4}for(a=t+3-(s<10);a<o;)r[a++]=236,r[a++]=17},_getBadness:function(t){var e,i=0,n=this._badness;for(e=0;e<=t;e++)n[e]>=5&&(i+=v.N1+n[e]-5);for(e=3;e<t-1;e+=2)n[e-2]===n[e+2]&&n[e+2]===n[e-1]&&n[e-1]===n[e+1]&&3*n[e-1]===n[e]&&(0===n[e-3]||e+3>t||3*n[e-3]>=4*n[e]||3*n[e+3]>=4*n[e])&&(i+=v.N3);return i},_finish:function(){this._stringBuffer=this.buffer.slice();var t,e,i=0,n=3e4;for(e=0;e<8&&(this._applyMask(e),(t=this._checkBadness())<n&&(n=t,i=e),7!==i);e++)this.buffer=this._stringBuffer.slice();i!==e&&this._applyMask(i),n=l.FINAL_FORMAT[i+(this._level-1<<3)];var s=this.buffer,r=this.width;for(e=0;e<8;e++,n>>=1)1&n&&(s[r-1-e+8*r]=1,e<6?s[8+r*e]=1:s[8+r*(e+1)]=1);for(e=0;e<7;e++,n>>=1)1&n&&(s[8+r*(r-7+e)]=1,e?s[6-e+8*r]=1:s[7+8*r]=1)},_interleaveBlocks:function(){var t,e,i=this._dataBlock,n=this._ecc,s=this._eccBlock,r=0,o=this._calculateMaxLength(),a=this._neccBlock1,h=this._neccBlock2,f=this._stringBuffer;for(t=0;t<i;t++){for(e=0;e<a;e++)n[r++]=f[t+e*i];for(e=0;e<h;e++)n[r++]=f[a*i+t+e*(i+1)]}for(e=0;e<h;e++)n[r++]=f[a*i+t+e*(i+1)];for(t=0;t<s;t++)for(e=0;e<a+h;e++)n[r++]=f[o+t+e*s];this._stringBuffer=n},_insertAlignments:function(){var t,e,i,n=this._version,s=this.width;if(n>1)for(t=u.BLOCK[n],i=s-7;;){for(e=s-7;e>t-3&&(this._addAlignment(e,i),!(e<t));)e-=t;if(i<=t+9)break;i-=t,this._addAlignment(6,i),this._addAlignment(i,6)}},_insertFinders:function(){var t,e,i,n,s=this.buffer,r=this.width;for(t=0;t<3;t++){for(e=0,n=0,1===t&&(e=r-7),2===t&&(n=r-7),s[n+3+r*(e+3)]=1,i=0;i<6;i++)s[n+i+r*e]=1,s[n+r*(e+i+1)]=1,s[n+6+r*(e+i)]=1,s[n+i+1+r*(e+6)]=1;for(i=1;i<5;i++)this._setMask(n+i,e+1),this._setMask(n+1,e+i+1),this._setMask(n+5,e+i),this._setMask(n+i+1,e+5);for(i=2;i<4;i++)s[n+i+r*(e+2)]=1,s[n+2+r*(e+i+1)]=1,s[n+4+r*(e+i)]=1,s[n+i+1+r*(e+4)]=1}},_insertTimingGap:function(){var t,e,i=this.width;for(e=0;e<7;e++)this._setMask(7,e),this._setMask(i-8,e),this._setMask(7,e+i-7);for(t=0;t<8;t++)this._setMask(t,7),this._setMask(t+i-8,7),this._setMask(t,i-8)},_insertTimingRowAndColumn:function(){var t,e=this.buffer,i=this.width;for(t=0;t<i-14;t++)1&t?(this._setMask(8+t,6),this._setMask(6,8+t)):(e[8+t+6*i]=1,e[6+i*(8+t)]=1)},_insertVersion:function(){var t,e,i,n,s=this.buffer,r=this._version,o=this.width;if(r>6)for(t=d.BLOCK[r-7],e=17,i=0;i<6;i++)for(n=0;n<3;n++,e--)1&(e>11?r>>e-12:t>>e)?(s[5-i+o*(2-n+o-11)]=1,s[2-n+o-11+o*(5-i)]=1):(this._setMask(5-i,2-n+o-11),this._setMask(2-n+o-11,5-i))},_isMasked:function(t,e){var i=v._getMaskBit(t,e);return 1===this._mask[i]},_pack:function(){var t,e,i,n=1,s=1,r=this.width,o=r-1,a=r-1,h=(this._dataBlock+this._eccBlock)*(this._neccBlock1+this._neccBlock2)+this._neccBlock2;for(e=0;e<h;e++)for(t=this._stringBuffer[e],i=0;i<8;i++,t<<=1){128&t&&(this.buffer[o+r*a]=1);do{s?o--:(o++,n?0!==a?a--:(n=!n,6===(o-=2)&&(o--,a=9)):a!==r-1?a++:(n=!n,6===(o-=2)&&(o--,a-=8))),s=!s}while(this._isMasked(o,a))}},_reverseMask:function(){var t,e,i=this.width;for(t=0;t<9;t++)this._setMask(t,8);for(t=0;t<8;t++)this._setMask(t+i-8,8),this._setMask(8,t);for(e=0;e<7;e++)this._setMask(8,e+i-7)},_setMask:function(t,e){var i=v._getMaskBit(t,e);this._mask[i]=1},_syncMask:function(){var t,e,i=this.width;for(e=0;e<i;e++)for(t=0;t<=e;t++)this.buffer[t+i*e]&&this._setMask(t,e)}},{_createArray:function(t){var e,i=[];for(e=0;e<t;e++)i[e]=0;return i},_getMaskBit:function(t,e){var i;return t>e&&(i=t,t=e,e=i),i=e,i+=e*e,i>>=1,i+=t},_modN:function(t){for(;t>=255;)t=((t-=255)>>8)+(255&t);return t},N1:3,N2:3,N3:40,N4:10}),p=v,m=f.extend({draw:function(){this.element.src=this.qrious.toDataURL()},reset:function(){this.element.src=""},resize:function(){var t=this.element;t.width=t.height=this.qrious.size}}),g=h.extend(function(t,e,i,n){this.name=t,this.modifiable=Boolean(e),this.defaultValue=i,this._valueTransformer=n},{transform:function(t){var e=this._valueTransformer;return"function"==typeof e?e(t,this):t}}),k=h.extend(null,{abs:function(t){return null!=t?Math.abs(t):null},hasOwn:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},noop:function(){},toUpperCase:function(t){return null!=t?t.toUpperCase():null}}),w=h.extend(function(t){this.options={},t.forEach(function(t){this.options[t.name]=t},this)},{exists:function(t){return null!=this.options[t]},get:function(t,e){return w._get(this.options[t],e)},getAll:function(t){var e,i=this.options,n={};for(e in i)k.hasOwn(i,e)&&(n[e]=w._get(i[e],t));return n},init:function(t,e,i){"function"!=typeof i&&(i=k.noop);var n,s;for(n in this.options)k.hasOwn(this.options,n)&&(s=this.options[n],w._set(s,s.defaultValue,e),w._createAccessor(s,e,i));this._setAll(t,e,!0)},set:function(t,e,i){return this._set(t,e,i)},setAll:function(t,e){return this._setAll(t,e)},_set:function(t,e,i,n){var s=this.options[t];if(!s)throw new Error("Invalid option: "+t);if(!s.modifiable&&!n)throw new Error("Option cannot be modified: "+t);return w._set(s,e,i)},_setAll:function(t,e,i){if(!t)return!1;var n,s=!1;for(n in t)k.hasOwn(t,n)&&this._set(n,t[n],e,i)&&(s=!0);return s}},{_createAccessor:function(t,e,i){var n={get:function(){return w._get(t,e)}};t.modifiable&&(n.set=function(n){w._set(t,n,e)&&i(n,t)}),Object.defineProperty(e,t.name,n)},_get:function(t,e){return e["_"+t.name]},_set:function(t,e,i){var n="_"+t.name,s=i[n],r=t.transform(null!=e?e:t.defaultValue);return i[n]=r,r!==s}}),M=w,b=h.extend(function(){this._services={}},{getService:function(t){var e=this._services[t];if(!e)throw new Error("Service is not being managed with name: "+t);return e},setService:function(t,e){if(this._services[t])throw new Error("Service is already managed with name: "+t);e&&(this._services[t]=e)}}),B=new M([new g("background",!0,"white"),new g("backgroundAlpha",!0,1,k.abs),new g("element"),new g("foreground",!0,"black"),new g("foregroundAlpha",!0,1,k.abs),new g("level",!0,"L",k.toUpperCase),new g("mime",!0,"image/png"),new g("padding",!0,null,k.abs),new g("size",!0,100,k.abs),new g("value",!0,"")]),y=new b,O=h.extend(function(t){B.init(t,this,this.update.bind(this));var e=B.get("element",this),i=y.getService("element"),n=e&&i.isCanvas(e)?e:i.createCanvas(),s=e&&i.isImage(e)?e:i.createImage();this._canvasRenderer=new c(this,n,!0),this._imageRenderer=new m(this,s,s===e),this.update()},{get:function(){return B.getAll(this)},set:function(t){B.setAll(t,this)&&this.update()},toDataURL:function(t){return this.canvas.toDataURL(t||this.mime)},update:function(){var t=new p({level:this.level,value:this.value});this._canvasRenderer.render(t),this._imageRenderer.render(t)}},{use:function(t){y.setService(t.getName(),t)}});Object.defineProperties(O.prototype,{canvas:{get:function(){return this._canvasRenderer.getElement()}},image:{get:function(){return this._imageRenderer.getElement()}}});var A=O,L=h.extend({getName:function(){}}).extend({createCanvas:function(){},createImage:function(){},getName:function(){return"element"},isCanvas:function(t){},isImage:function(t){}}).extend({createCanvas:function(){return document.createElement("canvas")},createImage:function(){return document.createElement("img")},isCanvas:function(t){return t instanceof HTMLCanvasElement},isImage:function(t){return t instanceof HTMLImageElement}});return A.use(new L),A});

//# sourceMappingURL=qrious.min.js.map
console.log('[Pepelon] Content.js loaded!');

// === NSFWJS (fallback, если вдруг пригодится) ===
let nsfwModel = null;
async function ensureNSFWLoaded(cb) {
  if (nsfwModel) return cb(nsfwModel);
  nsfwModel = await nsfwjs.load();
  cb(nsfwModel);
}
async function checkVideoNSFWByServer(videoUrl) {
  const resp = await fetch("https://pepelonmyown.ru/api/apicheck_video", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url: videoUrl })
  });
  if (!resp.ok) throw new Error("NSFW Video Server error: " + resp.statusText);
  return await resp.json(); // Ожидаем {nsfw: true/false, verdicts: [...], max_score: ...}
}

// === Блюр + подпись ===
function applyBlur(img) {
  img.style.filter = 'blur(22px)';     // блюр остаётся всегда
  img.style.transition = 'filter 0.23s';
  img.style.cursor = 'pointer';        // курсор можно оставить "pointer"
  img.setAttribute('data-blurred', '1');

  // Больше не снимаем блюр по клику на саму картинку:
  img.onclick = function(e) {
    // Ничего не делаем, блюр не убираем
    // Не вызываем preventDefault — пусть клик по <a> работает
    // Не меняем filter и не удаляем label
  };
}

function insertLabel(img, text) {
  let label = document.createElement('div');
  label.className = 'pepelon-blur-label';
  label.style.cssText = "display:block;text-align:center;color:#fff;background:rgba(90,0,50,.78);border-radius:9px;padding:3px 8px;font-size:.97em;margin:-7px auto 7px auto;max-width:280px;";
  label.innerText = text || "18+ / кровь / жестокость / извращения — нажмите, чтобы раскрыть";
  img.after(label);
}

// === Pepelon ссылки, определение формата ===
function isPepelonShortOrDotLink(href) {
  if (/^https:\/\/pepelonmyown\.ru\/[a-z]+\.[a-z0-9]{6,32}$/i.test(href)) return 'dot';
  if (/^https:\/\/pepelonmyown\.ru\/[a-z0-9]{6,32}$/i.test(href)) return 'short';
  return false;
}

// === NSFW ключевые слова и безопасная сборка RegExp ===
// Эскейп для спецсимволов, чтобы корректно собрать один RegExp из массива
function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Базовый набор NSFW-триггеров (en + ru), расширен пенис/член и др.
const NSFW_KEYWORDS = [
  // Гениталии
  'penis','dick','cock','phallus','член','пенис','фаллос',
  'vagina','pussy','pussies','влагалище','киска',
  'genitals','genitalia','гениталии','яички','яйца','мошонка',
  'nipples','areola','соски','ареола','груди','грудь','breast','breasts',

  // Акты и явная сексуальность
  'sex','sexual','explicit','эротика','nude','nudity','обнажен','обнажён','обнажёнка','обнаженка',
  'porn','porno','порно','xxx','hentai','хентай','orgasm','оргазм','nipple',
  'blowjob','cum','creampie','минет','эякуляц','эрекция','masturbation','мастурбац',
  'anal','anus','анус','анал','assjob',

  // Насилие/кровь
  'blood','bloody','кровь','кровав','gore','жесть','насилие','violence','расчлен',

  // Возрастные маркеры
  '18\\+',

  // Общие маркеры
  'nsfw'
];

// Один регекс, нечувствительный к регистру и с юникодом
const NSFW_REGEX = new RegExp('(?:' + NSFW_KEYWORDS.map(escapeRegex).join('|') + ')','iu'); // рекомендации по сборке паттерна из массива [web:160]

// === Основной обработчик ссылок ===
function processAllLinks() {
  document.querySelectorAll('a').forEach(link => {
    if (link.dataset.pepelonWrapped === "1") return;
    const type = isPepelonShortOrDotLink(link.href);
    if (!type) return;
    const id = (type === 'dot')
      ? link.href.split('.').pop()
      : link.href.split('/').pop();

    tryVideo(`https://pepelonmyown.ru/c/${id}.mp4`, link, () => {
      tryVideo(`https://pepelonmyown.ru/c/${id}.webm`, link, () => {
        checkImage(`c/${id}`, ["gif","png","jpg","jpeg"], link, () => {
          tryVideo(`https://pepelonmyown.ru/upload/${id}.mp4`, link, () => {
            tryVideo(`https://pepelonmyown.ru/upload/${id}.webm`, link, () => {
              checkImage(`upload/${id}`, ["gif","png","jpg","jpeg"], link, () => {
                if (type === 'dot') {
                  tryImage(link.href, link, null);
                }
              });
            });
          });
        });
      });
    });

    link.dataset.pepelonWrapped = "1";
    if (link.parentElement) link.parentElement.dataset.pepelonWrapped = "1";
  });
}

// === Вставка видео-превью с автозапуском/автопаузой ===
function tryVideo(videoUrl, link, onerror) {
  const video = document.createElement("video");
  video.src = videoUrl;
  video.controls = true;
  video.autoplay = true;
  video.muted = true;
  video.loop = true;
  video.className = "pepelon-circle-video";

  video.onloadedmetadata = async () => {
    try {
      let verdict = await checkVideoNSFWByServer(videoUrl);

      // Всегда выводим полный ответ сервера
      console.log("[NSFW VIDEO RAW]", verdict);

      if (verdict && verdict.nsfw) {
        // Формируем подробную причину
        let blurReason = "";
        if (Array.isArray(verdict.verdicts) && verdict.verdicts.length) {
          blurReason = verdict.verdicts.map(
            v => `⏱${v.time}s – ${Math.round(100 * v.score)}%`
          ).join(", ");
        } else if (verdict.max_score) {
          blurReason = Math.round(100 * verdict.max_score) + "%";
        } else {
          blurReason = "NSFW";
        }

        // Выводим причину в консоль
        console.log("[NSFW VIDEO] Причина блюра:", blurReason);

        // Ставим блюр и подробную подпись
        video.style.filter = 'blur(22px)';
        insertLabel(video, "18+ NSFW: " + blurReason);
      } else {
        // Выводим причину почему не заблюрено (например, score < threshold)
        let safeInfo = (verdict && verdict.max_score !== undefined) ?
          `Макс. NSFW: ${Math.round(100 * verdict.max_score)}%` : "изображение безопасное";
        console.log("[NSFW VIDEO] Не заблюрено:", safeInfo);
      }
    } catch (e) {
      console.log("NSFW video: fetch error:", e);
    }
    wrapAndReplace(link, video);
  };

  video.onerror = () => { if (onerror) onerror(); };
}


// === Проверка NSFW через сервер ===
async function checkNSFWByServer(imageUrl) {
  const resp = await fetch("https://pepelonmyown.ru/api/check", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url: imageUrl })
  });
  if (!resp.ok) throw new Error("NSFW Server error: " + resp.statusText);
  const json = await resp.json();
  return json; // ожидается {verdict: "...", [zones:[{label,bbox}]], [processed_image:"..."]}
}

// === Обработка картинок ===
function tryImage(imgUrl, link, onerror) {
  const img = new Image();
  img.crossOrigin = "anonymous";
  img.src = imgUrl;
  img.style.maxWidth = "150px";
  img.style.display = "block";

  img.onload = async () => {
    console.log("NSFW проверка: imgUrl =", imgUrl);
    if (!imgUrl) {
      wrapAndReplace(link, img);
      return;
    }

    let isNsfw = false;
    let reasonText = "";

    try {
      let verdict = await checkNSFWByServer(imgUrl);

      // 1) Если сервер начал возвращать детальные зоны — можно блюрить точечно через canvas
      if (verdict && Array.isArray(verdict.zones) && verdict.zones.length) {
        // Здесь можно внедрить точечный блюр по bbox’ам (canvas),
        // см. подходы к блюру прямоугольников из практических гайдов [web:148]
        isNsfw = true;
        reasonText = verdict.verdict || "NSFW";
      }

      // 2) Текстовая проверка по ключевым словам (fallback)
      if (!isNsfw && verdict && typeof verdict.verdict === 'string' && NSFW_REGEX.test(verdict.verdict)) {
        isNsfw = true;
        reasonText = verdict.verdict;
        console.log("NSFW: найден NSFW-контент:", reasonText);
      } else if (!isNsfw) {
        console.log("NSFW: изображение безопасное:", verdict && verdict.verdict);
      }
    } catch (e) {
      console.log("NSFW: ошибка fetch/server:", e);
    }

    if (isNsfw) {
      // Пока сервер не отдает bbox — блюрим весь img
      applyBlur(img);
      insertLabel(img, "18+ — " + (reasonText || "контент") + " — нажмите, чтобы раскрыть");
    }
    wrapAndReplace(link, img);
  };

  img.onerror = () => { if (onerror) onerror(); };
}

// === Итерация форматов — .gif/.png/.jpg/... ===
function checkImage(base, extensions, link, onerror) {
  if (extensions.length === 0) {
    if (onerror) onerror();
    return;
  }
  const ext = extensions.shift();
  const imgUrl = `https://pepelonmyown.ru/${base}.${ext}`;
  tryImage(imgUrl, link, () => checkImage(base, extensions, link, onerror));
}

function wrapAndReplace(link, media) {
  const wrapper = document.createElement("a");
  wrapper.href = link.href;
  wrapper.target = "_blank";
  wrapper.dataset.pepelonWrapped = "1";
  wrapper.appendChild(media);
  link.replaceWith(wrapper);
}

// === Автопауза для видео-кружков ===
function enableAutoPauseForCircleVideos() {
  const observer = new window.IntersectionObserver((entries) => {
    for (let entry of entries) {
      if (!(entry.target instanceof HTMLVideoElement)) continue;
      if (entry.isIntersecting) {
        if (entry.target.paused) entry.target.play().catch(() => {});
      } else {
        entry.target.pause();
      }
    }
  }, { threshold: 0.15 });

  document.querySelectorAll('video.pepelon-circle-video').forEach(video => {
    observer.observe(video);
  });

  const mo = new MutationObserver(() => {
    document.querySelectorAll('video.pepelon-circle-video:not([data-autopause])').forEach(video => {
      observer.observe(video);
      video.dataset.autopause = "1";
    });
  });
  mo.observe(document.body, { childList: true, subtree: true });
}

// === Автообработка ссылок + автопауза видео ===
setInterval(processAllLinks, 3000);
enableAutoPauseForCircleVideos();



(function(){
  // QRious loader
  function ensureQRiousLoaded(cb) {
    if (window.QRious) return cb();
    let s = document.createElement('script');
    s.src = '/qrious.min.js';
    s.onload = cb;
    document.head.appendChild(s);
  }
  if (window.pepelonCircleWidgetLoaded) return;
  window.pepelonCircleWidgetLoaded = true;
  let widget = null, overlay = null, recorder = null, stream = null, chunks = [], blob = null, currentSlide = 0, pollingTimeout = null, myID = '';
  let chatBtn = null, qrIsActive = false;

  function hideAll() {
    if(widget) widget.remove();
    if(overlay) overlay.remove();
    widget = null; overlay = null; myID=''; qrIsActive=false; if(pollingTimeout) clearTimeout(pollingTimeout);
    if(stream) try { stream.getTracks().forEach(t=>t.stop()); } catch(e){}
    document.removeEventListener('mousedown', onDocMouseDown, true);
  }

  function onDocMouseDown(e) {
    if (widget && !widget.contains(e.target)) {
      hideAll();
    }
  }

  async function pollForLink(linkBox, qrStatus, qrCanvas, qrGif, qrBackBtn, showControls) {
    if (!myID) return;
    const resp = await fetch('https://pepelonmyown.ru/get_link.php?to=' + myID);
    const link = await resp.text();
    if (link && link.length > 5) {
      linkBox.value = link;
      qrStatus.textContent = "Кружок с телефона получен!";
      setTimeout(()=>{
        showControls();
        qrCanvas.style.display = "none";
        qrBackBtn.style.display = "none";
        qrGif.style.display = "block";
        qrStatus.textContent = "";
        myID = '';
        qrIsActive = false;
      }, 600);
      if (pollingTimeout) clearTimeout(pollingTimeout);
    } else {
      pollingTimeout = setTimeout(()=>pollForLink(linkBox, qrStatus, qrCanvas, qrGif, qrBackBtn, showControls), 1100);
    }
  }

  function showCarousel(slide=0){
    hideAll();
    // Стили
    if(!document.getElementById('qr-style-btn')) {
      let style = document.createElement('style');
      style.id = 'qr-style-btn';
      style.textContent = `
.pepelon-fabrow { width:97%;max-width:320px;display:flex;gap:8px;justify-content:center;margin:13px auto 1px auto;}
.pepelon-fabrow button { flex:1; background: linear-gradient(90deg,#816aff 0%,#b97aff 96%); color: #fff; font-size: 1.06em; font-family: inherit; border: none; border-radius: 13px; box-shadow: 0 1.7px 7px #ad97ff25,0 2px 11px #1d012044; padding: 7px 0 6px 0; cursor:pointer; transition: filter .14s, box-shadow .13s; font-weight: 500; letter-spacing: .01em;}
#slide0, #slide1 { min-height: 430px; }
.pepelon-fabrow button:disabled { background: #3a3050 !important; color: #bfb7da !important; opacity: .77; cursor: default; box-shadow: none; }
.carousel-dot { width: 13px; height: 13px; border-radius:50%; background: #ae8dff; border: 2px solid #fff; margin: 0 4px; cursor: pointer; opacity: 0.6; transition: opacity .18s; display:inline-block; }
.carousel-dot.active { opacity: 1; background: #c6afff; }
#carousel-bar { margin: 0 auto 10px auto; display:flex; justify-content:center; align-items:center; }
#qrTextlink { display: block; margin: 11px auto -1px auto; text-align: center; color: #cac6ff; font-size:1.02em; font-family: inherit; text-shadow: 0px 1px 8px #8a3fff22; letter-spacing:.01em; cursor:pointer; transition: color .13s; user-select: none;}
#qrTextlink:hover { color: #ad79ff; text-decoration: underline; }
#qrBackBtn { display: none; margin: 20px auto 0 auto; background: linear-gradient(90deg,#806cff 0%,#ab7cf7 100%); color: #fff; border: none; width: 120px; padding: 7px 0 6px 0; font-size: 1.01em; font-family: inherit; border-radius: 13px; box-shadow: 0 2.5px 13px #b8a4fe44, 0 1.5px 9px #0001; cursor: pointer; transition: box-shadow .13s, filter .14s; }
#circleMediaBox { position:relative;width:220px;height:220px;margin:5px auto 0px auto; }
#circleMediaBox img, #circleMediaBox video { width:220px; height:220px; position:absolute; left:0; top:0; object-fit:cover; border-radius:50%; background:#0a0515; z-index:1; display:block;}
#circleMediaBox video { z-index:2; }
#qrCanvas { display: none; position: absolute; left: 28px; top: 0; width: 164px; height: 164px; border-radius: 16px; box-shadow: 0 2px 14px #af9bff; background: #fff; margin-top: 40px; z-index: 3;}
#dropZone { width: 93%; max-width: 400px; min-height: 300px; margin: 8px auto 28px auto; background: #181034; color: #cab9ff; border-radius: 18px; border: 3px dashed #b3a2fa; display: flex; align-items: center; justify-content: center; cursor: pointer; font-size: 1.22em; font-family: inherit; font-weight: 500; letter-spacing: .01em; transition: background .18s, border-color .18s, color .13s; text-align:center; box-shadow: 0 2px 16px #836cff16; outline: none; word-break: break-word; line-height: 1.3;}
#dropZone.active { background: #21194d; color: #c1ffef; border-color: #efa0ff;}
      `;
      document.head.appendChild(style);
    }
    // overlay — только фон (без обработчика клика!)
    overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;z-index:2147483646;left:0;top:0;width:100vw;height:100vh;background:transparent;pointer-events:auto;';
    document.body.appendChild(overlay);

    widget = document.createElement('div');
    widget.style.cssText = `
      position:fixed;right:4px;bottom:95px;z-index:2147483647;min-width:300px;pointer-events:auto;
      background: rgba(25, 17, 32, 0.6);border-radius:20px;box-shadow:0 4px 24px #000b;
      padding:16px 12px 16px 12px;width:330px;text-align:center;border:2px solid #4831a8;font-family:inherit;`;
    widget.innerHTML = `
      <div id="widget-title" style="text-align:center;font-weight:bold;font-size:1.15em;color:#c5bafe;margin-bottom:7px;">
        PepeloN
      </div>
      <div id="carousel-bar">
        <button id="dot0" class="carousel-dot${!slide?' active':''}" aria-label="К шагу 1"></button>
        <button id="dot1" class="carousel-dot${slide?' active':''}" aria-label="К шагу 2"></button>
      </div>
      <div style="display:flex;justify-content:center;align-items:center;">
        <div id="slide0" style="display:${slide?'none':'block'};min-height:330px; height:330px; width:99%;">
          <div id="circleMediaBox">
            <img id="standbyGif" src="${chrome.runtime.getURL && chrome.runtime.getURL('standby.gif')}" alt="Ожидание">
            <video id="preview" autoplay muted playsinline style="display:none;"></video>
            <canvas id="qrCanvas" width="164" height="164"></canvas>
          </div>
          <button id="qrBackBtn">Назад</button>
          <div class="pepelon-fabrow" id="recControls">
             <button id="start">Записать</button>
             <button id="stop" disabled>Остановить</button>
             <button id="upload" disabled>Загрузить</button>
          </div>
          <span id="qrTextlink">QR-код для записи с телефона</span>
          <div id="progress" style="color:#bff;font-size:.97em;margin-top:11px;"></div>
          <div id="qrStatus" style="margin-top:7px;color:#80ffc6;font-size:.99em;min-height:14px;"></div>
        </div>
        <div id="slide1" style="display:${slide?'block':'none'};min-height:330px; height:330px; width:99%;">
          <div id="dropZone">Перетащи или выбери файл</div>
          <input type="file" id="uploadInput" style="display:none">
          <div id="uploadStatus" style="color:#bff;margin:0px 0 17px 0;min-height:26px;"></div>
        </div>
      </div>
      <input id="linkBox" style="width:96%;margin:1px auto 0 auto;background:#23213a;border-radius:11px;padding:8px 4px;font-size:1.04em;min-height:20px;color:#e1f4ff;text-align:center;border:1.5px solid #312a47;" readonly placeholder="Ссылка появится здесь">
    `;
    document.body.appendChild(widget);

    document.addEventListener('mousedown', onDocMouseDown, true);

    widget.querySelector('#dot0').onclick = e=>{e.stopPropagation();showCarousel(0);};
    widget.querySelector('#dot1').onclick = e=>{e.stopPropagation();showCarousel(1);};
    currentSlide = slide;
    if (slide === 1) {
        const dropZone = widget.querySelector('#dropZone');
        if (dropZone) setTimeout(() => dropZone.focus(), 30);
    }

    const standbyGif = widget.querySelector('#standbyGif');
    const qrCanvas = widget.querySelector('#qrCanvas');
    const qrTextlink = widget.querySelector('#qrTextlink');
    const qrBackBtn = widget.querySelector('#qrBackBtn');
    const qrStatus = widget.querySelector('#qrStatus');
    const linkBox = widget.querySelector('#linkBox');
    const startBtn = widget.querySelector('#start');
    const stopBtn = widget.querySelector('#stop');
    const uploadBtn = widget.querySelector('#upload');
    const recControls = widget.querySelector('#recControls');
    const progress = widget.querySelector('#progress');
    const preview = widget.querySelector('#preview');
    recorder = null; stream = null; chunks = []; blob = null;
    function setMediaView(target) {
      standbyGif.style.display = (target === "gif") ? "block" : "none";
      preview.style.display = (target === "video") ? "block" : "none";
      qrCanvas.style.display = (target === "qr") ? "block" : "none";
    }
    function showQR() {
      qrIsActive = true;
      recControls.style.display = "none";
      setMediaView("qr");
      qrTextlink.style.display = "none";
      qrBackBtn.style.display = "block";
      qrStatus.textContent = "Отсканируйте QR с телефона";
      progress.textContent = "";
    }
    function showControls() {
      qrIsActive = false;
      setMediaView("gif");
      qrBackBtn.style.display = "none";
      recControls.style.display = "flex";
      qrTextlink.style.display = "block";
      qrStatus.textContent = "";
      progress.textContent = "";
    }
    if(qrTextlink) qrTextlink.onclick = function(e) {
      e.stopPropagation();
      ensureQRiousLoaded(()=>{
        myID = "m" + Math.random().toString(36).slice(2,10);
        const qrurl = "https://pepelonmyown.ru/mobile_upload.html?to=" + myID;
        showQR();
        new QRious({ element: qrCanvas, value: qrurl, size:164 });
        pollForLink(linkBox, qrStatus, qrCanvas, standbyGif, qrBackBtn, showControls);
      });
    };
    if(qrBackBtn) qrBackBtn.onclick = function(e){
      e.stopPropagation();
      showControls();
      if (pollingTimeout) clearTimeout(pollingTimeout);
      myID='';
    };
    if(startBtn) startBtn.onclick = async function(e) {
      e.stopPropagation();
      startBtn.disabled = true;
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: { width: 480, height: 480 }, audio: true });
        setMediaView("video");
        preview.style.zIndex = 2;
        preview.srcObject = stream;
        chunks = [];
        recorder = new MediaRecorder(stream, { mimeType: 'video/webm; codecs=vp9' });
        recorder.ondataavailable = e => chunks.push(e.data);
        recorder.onstop = () => {
          stream.getTracks().forEach(t => t.stop());
          blob = new Blob(chunks, { type: 'video/webm' });
          uploadBtn.disabled = false;
          progress.textContent = "Готово! Нажмите 'Загрузить'.";
          preview.src = URL.createObjectURL(blob);
          preview.srcObject = null;
          preview.style.display = "block";
          preview.play();
        };
        recorder.start();
        stopBtn.disabled = false;
        uploadBtn.disabled = true;
        progress.textContent = "Запись...";
      } catch (e) {
        progress.textContent = "Нет доступа к камере! (" + e.name + ")";
        setMediaView("gif");
        startBtn.disabled = false;
      }
    };
    if(stopBtn) stopBtn.onclick = function(e){
      e.stopPropagation();
      if (recorder && recorder.state === "recording") {
        recorder.stop();
        startBtn.disabled = false;
        stopBtn.disabled = true;
        progress.textContent = "Обработка...";
      }
    };
    if(uploadBtn) uploadBtn.onclick = async function(e){
      e.stopPropagation();
      if (blob) {
        progress.textContent = "Загрузка файла...";
        const formData = new FormData();
        formData.append('file', blob, 'circle.webm');
        try {
          const resp = await fetch("https://pepelonmyown.ru/upload1.php", { method: "POST", body: formData });
          const data = await resp.json();
          if (data.link) {
            linkBox.value = data.link;
            progress.textContent = "Готово! Кружок доступен по ссылке!";
          } else {
            progress.textContent = data.error || "Ошибка загрузки.";
          }
        } catch (error) {
          progress.textContent = "Сетевая ошибка: " + error;
        } finally {
          startBtn.disabled = false;
          uploadBtn.disabled = true;
        }
      }
    };
    // --- Загрузка файлов, slide1 ---
    const dropZone = widget.querySelector('#dropZone');
    const uploadInput = widget.querySelector('#uploadInput');
    const uploadStatus = widget.querySelector('#uploadStatus');

    if (dropZone && uploadInput) {
        dropZone.setAttribute('tabindex', '0'); // теперь Ctrl+V и Paste работают когда зона в фокусе!
        dropZone.onclick = function(e) {
            e.stopPropagation();
            uploadInput.click();
        };
        dropZone.ondragover = e => {
            e.preventDefault();
            dropZone.classList.add('active');
        };
        dropZone.ondragleave = e => {
            e.preventDefault();
            dropZone.classList.remove('active');
        };
        dropZone.ondrop = function(e) {
            e.preventDefault();
            e.stopPropagation();
            dropZone.classList.remove('active');
            const file = e.dataTransfer?.files && e.dataTransfer.files[0];
            if (file) uploadFile(file);
        };
        dropZone.addEventListener('paste', function(e) {
            const items = (e.clipboardData || window.clipboardData).items;
            let fileFound = false;
            for (let i = 0; i < items.length; i++) {
                if (items[i].kind === 'file') {
                    const file = items[i].getAsFile();
                    if (file) {
                        uploadFile(file);
                        fileFound = true;
                        e.preventDefault();
                        break;
                    }
                }
            }
    // Можно добавить визуальный отклик "файл вставлен"
            if (fileFound) dropZone.classList.add('active');
            setTimeout(() => dropZone.classList.remove('active'), 600); // подсветка на мгновение
        });
        uploadInput.removeAttribute('accept');
        uploadInput.onchange = function(e) {
            e.stopPropagation();
            if (this.files && this.files[0]) uploadFile(this.files[0]);
        };
        function uploadFile(file) {
            if (!file) return;
            if (file.size > 100 * 1024 * 1024) {
                uploadStatus.textContent = "Файл слишком большой!";
                return;
            }
            uploadStatus.textContent = "Загрузка...";
            const formData = new FormData();
            formData.append('file', file, file.name);
            fetch("https://pepelonmyown.ru/upload2.php", { method: "POST", body: formData })
                .then(r => r.json()).then(data => {
                    if (data.link) {
                        linkBox.value = "https://pepelonmyown.ru" + data.link;
                        uploadStatus.innerHTML = `<span style="color:#bfffbc">Готово!</span>`;
                    } else {
                        uploadStatus.textContent = data.error || "Ошибка загрузки.";
                    }
                }).catch(() => uploadStatus.textContent = "Ошибка сети.");
            }
        }
        if (linkBox) linkBox.onclick = function() {
            if (linkBox.value && linkBox.value.length > 0) {
                linkBox.select();
                document.execCommand('copy');
            }
        };

    // overlay — больше НИКАКИХ обработчиков тут нет!
  }
  function chatBtnWatcher() {
    function updateBtnPlacement() {
      const placeholder = Array.from(document.querySelectorAll('div.chat-wysiwyg-input__placeholder'))
        .find(el => el.textContent && el.textContent.trim().includes('Отправить сообщение'));
      if (placeholder && !chatBtn) {
        chatBtn = document.createElement('button');
        chatBtn.style = `
            position: fixed; right: 85px; bottom: 62px; z-index: 2147483647;pointer-events:auto;
            width: 20px; height: 10px;
            background: transparent;
            color: #fff; font-size: 1.15em; border: 2px solid #fff; border-radius: 50%;
            padding: 0;
            box-shadow: 0 2px 8px #0005;
            cursor: pointer; font-family: inherit;
            display: flex; align-items: center; justify-content: center;
            transition: filter 0.13s;
        `;
        chatBtn.onclick = e=>{
          e.stopPropagation();
          showCarousel(0);
        };
        document.body.appendChild(chatBtn);
      }
      if (!placeholder && chatBtn) {
        chatBtn.remove();
        chatBtn = null;
      }
    }
    const observer = new MutationObserver(updateBtnPlacement);
    observer.observe(document.body, { childList: true, subtree: true });
    updateBtnPlacement();
  }
  chatBtnWatcher();
})();















