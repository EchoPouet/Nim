/* Generated by the Nim Compiler v1.9.1 */
var framePtr = null;
var excHandler = 0;
var lastJSError = null;
var NTI134217749 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI134217751 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI134217741 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI134217743 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33554435 = {size: 0,kind: 31,base: null,node: null,finalizer: null};
var NTI33555824 = {size: 0, kind: 18, base: null, node: null, finalizer: null};
var NTI33555171 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555179 = {size: 0, kind: 22, base: null, node: null, finalizer: null};
var NTI33554450 = {size: 0,kind: 29,base: null,node: null,finalizer: null};
var NTI33555178 = {size: 0, kind: 22, base: null, node: null, finalizer: null};
var NTI33555175 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555176 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI134217745 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33554449 = {size: 0,kind: 28,base: null,node: null,finalizer: null};
var NNI134217745 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI134217745.node = NNI134217745;
var NNI33555176 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555176.node = NNI33555176;
NTI33555178.base = NTI33555175;
NTI33555179.base = NTI33555175;
var NNI33555175 = {kind: 2, len: 5, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "parent", len: 0, typ: NTI33555178, name: "parent", sons: null}, 
{kind: 1, offset: "name", len: 0, typ: NTI33554450, name: "name", sons: null}, 
{kind: 1, offset: "message", len: 0, typ: NTI33554449, name: "msg", sons: null}, 
{kind: 1, offset: "trace", len: 0, typ: NTI33554449, name: "trace", sons: null}, 
{kind: 1, offset: "up", len: 0, typ: NTI33555179, name: "up", sons: null}]};
NTI33555175.node = NNI33555175;
var NNI33555171 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555171.node = NNI33555171;
NTI33555175.base = NTI33555171;
NTI33555176.base = NTI33555175;
NTI134217745.base = NTI33555176;
var NNI33555824 = {kind: 2, len: 3, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "Field0", len: 0, typ: NTI33554450, name: "Field0", sons: null}, 
{kind: 1, offset: "Field1", len: 0, typ: NTI33554435, name: "Field1", sons: null}, 
{kind: 1, offset: "Field2", len: 0, typ: NTI33554450, name: "Field2", sons: null}]};
NTI33555824.node = NNI33555824;
var NNI134217743 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI134217743.node = NNI134217743;
var NNI134217741 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI134217741.node = NNI134217741;
NTI134217741.base = NTI33555176;
NTI134217743.base = NTI134217741;
var NNI134217751 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI134217751.node = NNI134217751;
NTI134217751.base = NTI33555176;
var NNI134217749 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI134217749.node = NNI134217749;
NTI134217749.base = NTI33555176;

function setConstr() {
        var result = {};
    for (var i = 0; i < arguments.length; ++i) {
      var x = arguments[i];
      if (typeof(x) == "object") {
        for (var j = x[0]; j <= x[1]; ++j) {
          result[j] = true;
        }
      } else {
        result[x] = true;
      }
    }
    return result;
  

  
}
var ConstSet1 = setConstr(17, 16, 4, 18, 27, 19, 23, 22, 21);

function nimCopy(dest_33557209, src_33557210, ti_33557211) {
  var result_33557220 = null;

    switch (ti_33557211.kind) {
    case 21:
    case 22:
    case 23:
    case 5:
      if (!(isFatPointer_33557200(ti_33557211))) {
      result_33557220 = src_33557210;
      }
      else {
        result_33557220 = [src_33557210[0], src_33557210[1]];
      }
      
      break;
    case 19:
            if (dest_33557209 === null || dest_33557209 === undefined) {
        dest_33557209 = {};
      }
      else {
        for (var key in dest_33557209) { delete dest_33557209[key]; }
      }
      for (var key in src_33557210) { dest_33557209[key] = src_33557210[key]; }
      result_33557220 = dest_33557209;
    
      break;
    case 18:
    case 17:
      if (!((ti_33557211.base == null))) {
      result_33557220 = nimCopy(dest_33557209, src_33557210, ti_33557211.base);
      }
      else {
      if ((ti_33557211.kind == 17)) {
      result_33557220 = (dest_33557209 === null || dest_33557209 === undefined) ? {m_type: ti_33557211} : dest_33557209;
      }
      else {
        result_33557220 = (dest_33557209 === null || dest_33557209 === undefined) ? {} : dest_33557209;
      }
      }
      nimCopyAux(result_33557220, src_33557210, ti_33557211.node);
      break;
    case 4:
    case 16:
            if(ArrayBuffer.isView(src_33557210)) { 
        if(dest_33557209 === null || dest_33557209 === undefined || dest_33557209.length != src_33557210.length) {
          dest_33557209 = new src_33557210.constructor(src_33557210);
        } else {
          dest_33557209.set(src_33557210, 0);
        }
        result_33557220 = dest_33557209;
      } else {
        if (src_33557210 === null) {
          result_33557220 = null;
        }
        else {
          if (dest_33557209 === null || dest_33557209 === undefined || dest_33557209.length != src_33557210.length) {
            dest_33557209 = new Array(src_33557210.length);
          }
          result_33557220 = dest_33557209;
          for (var i = 0; i < src_33557210.length; ++i) {
            result_33557220[i] = nimCopy(result_33557220[i], src_33557210[i], ti_33557211.base);
          }
        }
      }
    
      break;
    case 24:
    case 27:
            if (src_33557210 === null) {
        result_33557220 = null;
      }
      else {
        if (dest_33557209 === null || dest_33557209 === undefined || dest_33557209.length != src_33557210.length) {
          dest_33557209 = new Array(src_33557210.length);
        }
        result_33557220 = dest_33557209;
        for (var i = 0; i < src_33557210.length; ++i) {
          result_33557220[i] = nimCopy(result_33557220[i], src_33557210[i], ti_33557211.base);
        }
      }
    
      break;
    case 28:
            if (src_33557210 !== null) {
        result_33557220 = src_33557210.slice(0);
      }
    
      break;
    default: 
      result_33557220 = src_33557210;
      break;
    }

  return result_33557220;

}

function arrayConstr(len_33557252, value_33557253, typ_33557254) {
        var result = new Array(len_33557252);
    for (var i = 0; i < len_33557252; ++i) result[i] = nimCopy(null, value_33557253, typ_33557254);
    return result;
  

  
}

function mnewString(len_33556950) {
        return new Array(len_33556950);
  

  
}

function addInt(a_33556997, b_33556998) {
        var result = a_33556997 + b_33556998;
    checkOverflowInt(result);
    return result;
  

  
}

function chckRange(i_33557262, a_33557263, b_33557264) {
  var result_33557265 = 0;

  BeforeRet: {
    if (((a_33557263 <= i_33557262) && (i_33557262 <= b_33557264))) {
    result_33557265 = i_33557262;
    break BeforeRet;
    }
    else {
    raiseRangeError();
    }
    
  };

  return result_33557265;

}

function chckIndx(i_33557257, a_33557258, b_33557259) {
  var result_33557260 = 0;

  BeforeRet: {
    if (((a_33557258 <= i_33557257) && (i_33557257 <= b_33557259))) {
    result_33557260 = i_33557257;
    break BeforeRet;
    }
    else {
    raiseIndexError(i_33557257, a_33557258, b_33557259);
    }
    
  };

  return result_33557260;

}

function cstrToNimstr(c_33556851) {
      var ln = c_33556851.length;
  var result = new Array(ln);
  var r = 0;
  for (var i = 0; i < ln; ++i) {
    var ch = c_33556851.charCodeAt(i);

    if (ch < 128) {
      result[r] = ch;
    }
    else {
      if (ch < 2048) {
        result[r] = (ch >> 6) | 192;
      }
      else {
        if (ch < 55296 || ch >= 57344) {
          result[r] = (ch >> 12) | 224;
        }
        else {
            ++i;
            ch = 65536 + (((ch & 1023) << 10) | (c_33556851.charCodeAt(i) & 1023));
            result[r] = (ch >> 18) | 240;
            ++r;
            result[r] = ((ch >> 12) & 63) | 128;
        }
        ++r;
        result[r] = ((ch >> 6) & 63) | 128;
      }
      ++r;
      result[r] = (ch & 63) | 128;
    }
    ++r;
  }
  return result;
  

  
}

function toJSStr(s_33556854) {
  var result_33556855 = null;

    var res_33556893 = newSeq_33556872((s_33556854).length);
    var i_33556894 = 0;
    var j_33556895 = 0;
    Label1: {
        Label2: while (true) {
        if (!(i_33556894 < (s_33556854).length)) break Label2;
          var c_33556896 = s_33556854[i_33556894];
          if ((c_33556896 < 128)) {
          res_33556893[j_33556895] = String.fromCharCode(c_33556896);
          i_33556894 += 1;
          }
          else {
            var helper_33556909 = newSeq_33556872(0);
            Label3: {
                Label4: while (true) {
                if (!true) break Label4;
                  var code_33556910 = c_33556896.toString(16);
                  if ((((code_33556910) == null ? 0 : (code_33556910).length) == 1)) {
                  helper_33556909.push("%0");;
                  }
                  else {
                  helper_33556909.push("%");;
                  }
                  
                  helper_33556909.push(code_33556910);;
                  i_33556894 += 1;
                  if ((((s_33556854).length <= i_33556894) || (s_33556854[i_33556894] < 128))) {
                  break Label3;
                  }
                  
                  c_33556896 = s_33556854[i_33556894];
                }
            };
++excHandler;
            try {
            res_33556893[j_33556895] = decodeURIComponent(helper_33556909.join(""));
--excHandler;
} catch (EXCEPTION) {
 var prevJSError = lastJSError;
 lastJSError = EXCEPTION;
 --excHandler;
            res_33556893[j_33556895] = helper_33556909.join("");
            lastJSError = prevJSError;
            } finally {
            }
          }
          
          j_33556895 += 1;
        }
    };
    if (res_33556893.length < j_33556895) { for (var i = res_33556893.length ; i < j_33556895 ; ++i) res_33556893.push(null); }
               else { res_33556893.length = j_33556895; };
    result_33556855 = res_33556893.join("");

  return result_33556855;

}

function raiseException(e_33556642, ename_33556643) {
    e_33556642.name = ename_33556643;
    if ((excHandler == 0)) {
    unhandledException(e_33556642);
    }
    
    e_33556642.trace = nimCopy(null, rawWriteStackTrace_33556599(), NTI33554449);
    throw e_33556642;

  
}

function makeNimstrLit(c_33556848) {
      var result = [];
  for (var i = 0; i < c_33556848.length; ++i) {
    result[i] = c_33556848.charCodeAt(i);
  }
  return result;
  

  
}
var F = {procname: "module jsbigints", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsbigints.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsbigints", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsbigints.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsutils", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/jsutils.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsutils", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/jsutils.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module macros", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/core/macros.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module macros", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/core/macros.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module hashes", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/pure/hashes.nim", line: 0};
framePtr = F;
F.line = 218;
var objectID_754974891 = [0];
framePtr = F.prev;
var F = {procname: "module hashes", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/pure/hashes.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module bitops_utils", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/bitops_utils.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module bitops_utils", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/bitops_utils.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module countbits_impl", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/countbits_impl.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module countbits_impl", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/countbits_impl.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module bitops", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/pure/bitops.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module bitops", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/pure/bitops.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module fenv", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/pure/fenv.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module fenv", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/pure/fenv.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module math", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/pure/math.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module math", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/pure/math.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module algorithm", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/pure/algorithm.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module algorithm", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/pure/algorithm.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module outparams", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/outparams.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module outparams", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/outparams.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module tables", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/pure/collections/tables.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module tables", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/pure/collections/tables.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsffi", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsffi.nim", line: 0};
framePtr = F;
F.line = 45;
F.line = 46;
framePtr = F.prev;
var F = {procname: "module jsffi", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsffi.nim", line: 0};
framePtr = F;
framePtr = F.prev;

function isFatPointer_33557200(ti_33557201) {
  var result_33557202 = false;

  BeforeRet: {
    result_33557202 = !((ConstSet1[ti_33557201.base.kind] != undefined));
    break BeforeRet;
  };

  return result_33557202;

}

function nimCopyAux(dest_33557213, src_33557214, n_33557215) {
    switch (n_33557215.kind) {
    case 0:
      break;
    case 1:
            dest_33557213[n_33557215.offset] = nimCopy(dest_33557213[n_33557215.offset], src_33557214[n_33557215.offset], n_33557215.typ);
    
      break;
    case 2:
          for (var i = 0; i < n_33557215.sons.length; i++) {
      nimCopyAux(dest_33557213, src_33557214, n_33557215.sons[i]);
    }
    
      break;
    case 3:
            dest_33557213[n_33557215.offset] = nimCopy(dest_33557213[n_33557215.offset], src_33557214[n_33557215.offset], n_33557215.typ);
      for (var i = 0; i < n_33557215.sons.length; ++i) {
        nimCopyAux(dest_33557213, src_33557214, n_33557215.sons[i][1]);
      }
    
      break;
    }

  
}

function add_33556386(x_33556387, x_33556387_Idx, y_33556388) {
          if (x_33556387[x_33556387_Idx] === null) { x_33556387[x_33556387_Idx] = []; }
      var off = x_33556387[x_33556387_Idx].length;
      x_33556387[x_33556387_Idx].length += y_33556388.length;
      for (var i = 0; i < y_33556388.length; ++i) {
        x_33556387[x_33556387_Idx][off+i] = y_33556388.charCodeAt(i);
      }
    

  
}

function raiseOverflow() {
    raiseException({message: [111,118,101,114,45,32,111,114,32,117,110,100,101,114,102,108,111,119], parent: null, m_type: NTI134217743, name: null, trace: [], up: null}, "OverflowDefect");

  
}

function checkOverflowInt(a_33556995) {
        if (a_33556995 > 2147483647 || a_33556995 < -2147483648) raiseOverflow();
  

  
}

function raiseRangeError() {
    raiseException({message: [118,97,108,117,101,32,111,117,116,32,111,102,32,114,97,110,103,101], parent: null, m_type: NTI134217751, name: null, trace: [], up: null}, "RangeDefect");

  
}

function raiseIndexError(i_33556777, a_33556778, b_33556779) {
    var Temporary1;

    if ((b_33556779 < a_33556778)) {
    Temporary1 = [105,110,100,101,120,32,111,117,116,32,111,102,32,98,111,117,110,100,115,44,32,116,104,101,32,99,111,110,116,97,105,110,101,114,32,105,115,32,101,109,112,116,121];
    }
    else {
    Temporary1 = ([105,110,100,101,120,32] || []).concat(HEX24_369098760(i_33556777) || [],[32,110,111,116,32,105,110,32] || [],HEX24_369098760(a_33556778) || [],[32,46,46,32] || [],HEX24_369098760(b_33556779) || []);
    }
    
    raiseException({message: nimCopy(null, Temporary1, NTI33554449), parent: null, m_type: NTI134217749, name: null, trace: [], up: null}, "IndexDefect");

  
}

function addChars_301990072(result_301990074, result_301990074_Idx, x_301990075, start_301990076, n_301990077) {
    var Temporary1;

  var F = {procname: "addChars.addChars", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/digitsutils.nim", line: 0};
  framePtr = F;
    F.line = 43;
    var old_301990078 = (result_301990074[result_301990074_Idx]).length;
    F.line = 44;
    if (result_301990074[result_301990074_Idx].length < (Temporary1 = chckRange(addInt(old_301990078, n_301990077), 0, 2147483647), Temporary1)) { for (var i = result_301990074[result_301990074_Idx].length; i < Temporary1; ++i) result_301990074[result_301990074_Idx].push(0); }
         else {result_301990074[result_301990074_Idx].length = Temporary1; };
    Label2: {
      F.line = 46;
      var iHEX60gensym4_301990092 = 0;
      F.line = 119;
      var i_654311484 = 0;
      Label3: {
        F.line = 120;
          Label4: while (true) {
          if (!(i_654311484 < n_301990077)) break Label4;
            F.line = 49;
            iHEX60gensym4_301990092 = i_654311484;
            F.line = 49;
            result_301990074[result_301990074_Idx][chckIndx(addInt(old_301990078, iHEX60gensym4_301990092), 0, (result_301990074[result_301990074_Idx]).length - 1)] = x_301990075.charCodeAt(chckIndx(addInt(start_301990076, iHEX60gensym4_301990092), 0, (x_301990075).length - 1));
            F.line = 122;
            i_654311484 = addInt(i_654311484, 1);
          }
      };
    };
  framePtr = F.prev;

  
}

function addChars_301990068(result_301990070, result_301990070_Idx, x_301990071) {
  var F = {procname: "addChars.addChars", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/digitsutils.nim", line: 0};
  framePtr = F;
    F.line = 55;
    addChars_301990072(result_301990070, result_301990070_Idx, x_301990071, 0, ((x_301990071) == null ? 0 : (x_301990071).length));
  framePtr = F.prev;

  
}

function addInt_301990093(result_301990094, result_301990094_Idx, x_301990095) {
  var F = {procname: "digitsutils.addInt", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/digitsutils.nim", line: 0};
  framePtr = F;
    F.line = 111;
    addChars_301990068(result_301990094, result_301990094_Idx, ((x_301990095) + ""));
  framePtr = F.prev;

  
}

function addInt_301990111(result_301990112, result_301990112_Idx, x_301990113) {
  var F = {procname: "digitsutils.addInt", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/digitsutils.nim", line: 0};
  framePtr = F;
    F.line = 115;
    addInt_301990093(result_301990112, result_301990112_Idx, x_301990113);
  framePtr = F.prev;

  
}

function HEX24_369098760(x_369098761) {
  var result_369098762 = [[]];

  var F = {procname: "dollars.$", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/dollars.nim", line: 0};
  framePtr = F;
    F.line = 18;
    addInt_301990111(result_369098762, 0, x_369098761);
  framePtr = F.prev;

  return result_369098762[0];

}

function auxWriteStackTrace_33556512(f_33556513) {
  var result_33556514 = [[]];

    var it_33556522 = f_33556513;
    var i_33556523 = 0;
    var total_33556524 = 0;
    var tempFrames_33556525 = arrayConstr(64, {Field0: null, Field1: 0, Field2: null}, NTI33555824);
    Label1: {
        Label2: while (true) {
        if (!(!((it_33556522 == null)) && (i_33556523 <= 63))) break Label2;
          tempFrames_33556525[i_33556523].Field0 = it_33556522.procname;
          tempFrames_33556525[i_33556523].Field1 = it_33556522.line;
          tempFrames_33556525[i_33556523].Field2 = it_33556522.filename;
          i_33556523 += 1;
          total_33556524 += 1;
          it_33556522 = it_33556522.prev;
        }
    };
    Label3: {
        Label4: while (true) {
        if (!!((it_33556522 == null))) break Label4;
          total_33556524 += 1;
          it_33556522 = it_33556522.prev;
        }
    };
    result_33556514[0] = nimCopy(null, [], NTI33554449);
    if (!((total_33556524 == i_33556523))) {
    result_33556514[0].push.apply(result_33556514[0], [40]);;
    result_33556514[0].push.apply(result_33556514[0], HEX24_369098760((total_33556524 - i_33556523)));;
    result_33556514[0].push.apply(result_33556514[0], [32,99,97,108,108,115,32,111,109,105,116,116,101,100,41,32,46,46,46,10]);;
    }
    
    Label5: {
      var j_33556558 = 0;
      var colontmp__654311476 = 0;
      colontmp__654311476 = (i_33556523 - 1);
      var res_654311478 = colontmp__654311476;
      Label6: {
          Label7: while (true) {
          if (!(0 <= res_654311478)) break Label7;
            j_33556558 = res_654311478;
            result_33556514[0].push.apply(result_33556514[0], cstrToNimstr(tempFrames_33556525[j_33556558].Field2));;
            if ((0 < tempFrames_33556525[j_33556558].Field1)) {
            result_33556514[0].push.apply(result_33556514[0], [40]);;
            addInt_301990111(result_33556514, 0, tempFrames_33556525[j_33556558].Field1);
            if (false) {
            result_33556514[0].push.apply(result_33556514[0], [44,32]);;
            addInt_301990111(result_33556514, 0, 0);
            }
            
            result_33556514[0].push.apply(result_33556514[0], [41]);;
            }
            
            result_33556514[0].push.apply(result_33556514[0], [32,97,116,32]);;
            add_33556386(result_33556514, 0, tempFrames_33556525[j_33556558].Field0);
            result_33556514[0].push.apply(result_33556514[0], [10]);;
            res_654311478 -= 1;
          }
      };
    };

  return result_33556514[0];

}

function rawWriteStackTrace_33556599() {
  var result_33556600 = [];

    if (!((framePtr == null))) {
    result_33556600 = nimCopy(null, ([84,114,97,99,101,98,97,99,107,32,40,109,111,115,116,32,114,101,99,101,110,116,32,99,97,108,108,32,108,97,115,116,41,10] || []).concat(auxWriteStackTrace_33556512(framePtr) || []), NTI33554449);
    }
    else {
      result_33556600 = nimCopy(null, [78,111,32,115,116,97,99,107,32,116,114,97,99,101,98,97,99,107,32,97,118,97,105,108,97,98,108,101,10], NTI33554449);
    }
    

  return result_33556600;

}

function newSeq_33556872(len_33556874) {
  var result_33556875 = [];

  var F = {procname: "newSeq.newSeq", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system.nim", line: 0};
  framePtr = F;
    F.line = 597;
    result_33556875 = new Array(len_33556874); for (var i = 0 ; i < len_33556874 ; ++i) { result_33556875[i] = null; }  framePtr = F.prev;

  return result_33556875;

}

function unhandledException(e_33556638) {
    var buf_33556639 = [[]];
    if (!(((e_33556638.message).length == 0))) {
    buf_33556639[0].push.apply(buf_33556639[0], [69,114,114,111,114,58,32,117,110,104,97,110,100,108,101,100,32,101,120,99,101,112,116,105,111,110,58,32]);;
    buf_33556639[0].push.apply(buf_33556639[0], e_33556638.message);;
    }
    else {
    buf_33556639[0].push.apply(buf_33556639[0], [69,114,114,111,114,58,32,117,110,104,97,110,100,108,101,100,32,101,120,99,101,112,116,105,111,110]);;
    }
    
    buf_33556639[0].push.apply(buf_33556639[0], [32,91]);;
    add_33556386(buf_33556639, 0, e_33556638.name);
    buf_33556639[0].push.apply(buf_33556639[0], [93,10]);;
    buf_33556639[0].push.apply(buf_33556639[0], rawWriteStackTrace_33556599());;
    var cbuf_33556640 = toJSStr(buf_33556639[0]);
    framePtr = null;
      if (typeof(Error) !== "undefined") {
    throw new Error(cbuf_33556640);
  }
  else {
    throw cbuf_33556640;
  }
  

  
}

function sysFatal_268435497(message_268435500) {
  var F = {procname: "sysFatal.sysFatal", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/fatal.nim", line: 0};
  framePtr = F;
    F.line = 51;
    raiseException({message: nimCopy(null, message_268435500, NTI33554449), m_type: NTI134217745, parent: null, name: null, trace: [], up: null}, "AssertionDefect");
  framePtr = F.prev;

  
}

function raiseAssert_268435495(msg_268435496) {
  var F = {procname: "assertions.raiseAssert", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/assertions.nim", line: 0};
  framePtr = F;
    F.line = 36;
    sysFatal_268435497(msg_268435496);
  framePtr = F.prev;

  
}

function failedAssertImpl_268435531(msg_268435532) {
  var F = {procname: "assertions.failedAssertImpl", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/assertions.nim", line: 0};
  framePtr = F;
    F.line = 46;
    raiseAssert_268435495(msg_268435532);
  framePtr = F.prev;

  
}
var F = {procname: "module jsutils_examples_1", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_1.nim", line: 0};
framePtr = F;
if (!((typeof((1)) == "number"))) {
F.line = 27;
failedAssertImpl_268435531(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_1.nim(9, 3) `jsTypeOf(1.toJs) == \"number\"` "));
}

if (!((typeof((false)) == "boolean"))) {
F.line = 27;
failedAssertImpl_268435531(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_1.nim(10, 3) `jsTypeOf(false.toJs) == \"boolean\"` "));
}

if (!((typeof((new Int32Array([1]))) == "object"))) {
F.line = 27;
failedAssertImpl_268435531(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_1.nim(11, 3) `[1].toJs.jsTypeOf == \"object\"` "));
}

if (!((typeof((BigInt("1"))) == "bigint"))) {
F.line = 27;
failedAssertImpl_268435531(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_1.nim(12, 3) `big\"1\".toJs.jsTypeOf == \"bigint\"` "));
}

framePtr = F.prev;
var F = {procname: "module jsutils_examples_1", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_1.nim", line: 0};
framePtr = F;
framePtr = F.prev;

function jsConstructorName_922746889(a_922746891) {
  var result_922746892 = null;

  var F = {procname: "jsConstructorName.jsConstructorName", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/jsutils.nim", line: 0};
  framePtr = F;
    F.line = 40;
    result_922746892 = a_922746891.constructor.name
  framePtr = F.prev;

  return result_922746892;

}

function jsConstructorName_922746901(a_922746903) {
  var result_922746904 = null;

  var F = {procname: "jsConstructorName.jsConstructorName", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/jsutils.nim", line: 0};
  framePtr = F;
    F.line = 40;
    result_922746904 = a_922746903.constructor.name
  framePtr = F.prev;

  return result_922746904;

}
var F = {procname: "module jsutils_examples_2", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_2.nim", line: 0};
framePtr = F;
F.line = 35;
var a_922746888 = new Float64Array(2);
if (!((jsConstructorName_922746889(a_922746888) == "Float64Array"))) {
F.line = 35;
failedAssertImpl_268435531(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_2.nim(10, 3) `jsConstructorName(a) == \"Float64Array\"` "));
}

if (!((jsConstructorName_922746901((a_922746888)) == "Float64Array"))) {
F.line = 35;
failedAssertImpl_268435531(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_2.nim(11, 3) `jsConstructorName(a.toJs) == \"Float64Array\"` "));
}

framePtr = F.prev;
var F = {procname: "module jsutils_examples_2", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_2.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsutils_examples_3", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_3.nim", line: 0};
framePtr = F;
if (!((Object.prototype.toString.call((1)) == "[object Number]"))) {
F.line = 49;
failedAssertImpl_268435531(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_3.nim(10, 3) `1.toJs.getProtoName == \"[object Number]\"` "));
}

if (!((Object.prototype.toString.call(("a")) == "[object String]"))) {
F.line = 49;
failedAssertImpl_268435531(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_3.nim(11, 3) `\"a\".toJs.getProtoName == \"[object String]\"` "));
}

if (!((Object.prototype.toString.call((BigInt("1"))) == "[object BigInt]"))) {
F.line = 49;
failedAssertImpl_268435531(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_3.nim(12, 3) `big\"1\".toJs.getProtoName == \"[object BigInt]\"` "));
}

if (!((Object.prototype.toString.call((false)) == "[object Boolean]"))) {
F.line = 49;
failedAssertImpl_268435531(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_3.nim(13, 3) `false.toJs.getProtoName == \"[object Boolean]\"` "));
}

if (!((Object.prototype.toString.call(({Field0: 1})) == "[object Object]"))) {
F.line = 49;
failedAssertImpl_268435531(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_3.nim(14, 3) `(a: 1).toJs.getProtoName == \"[object Object]\"` "));
}

if (!((Object.prototype.toString.call((null)) == "[object Null]"))) {
F.line = 49;
failedAssertImpl_268435531(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_3.nim(15, 3) `A.default.toJs.getProtoName == \"[object Null]\"` "));
}

if (!((Object.prototype.toString.call((new Int32Array([1]))) == "[object Int32Array]"))) {
F.line = 49;
failedAssertImpl_268435531(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_3.nim(16, 3) `[1].toJs.getProtoName == \"[object Int32Array]\"` "));
}

if (!((Object.prototype.toString.call(([1])) == "[object Array]"))) {
F.line = 49;
failedAssertImpl_268435531(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_3.nim(17, 3) `@[1].toJs.getProtoName == \"[object Array]\"` "));
}

framePtr = F.prev;
var F = {procname: "module jsutils_examples_3", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_3.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsutils_examples_4", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_4.nim", line: 0};
framePtr = F;
if (!((Number.MAX_SAFE_INTEGER == 9007199254740991))) {
F.line = 64;
failedAssertImpl_268435531(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_4.nim(9, 3) `a == maxSafeInteger` "));
}

framePtr = F.prev;
var F = {procname: "module jsutils_examples_4", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_4.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsutils_examples_5", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_5.nim", line: 0};
framePtr = F;
if (!(Number.isInteger(1))) {
F.line = 69;
failedAssertImpl_268435531(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_5.nim(9, 3) `1.isInteger` "));
}

if (!(!(Number.isInteger(1.5)))) {
F.line = 69;
failedAssertImpl_268435531(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_5.nim(10, 3) `not 1.5.isInteger` "));
}

if (!(Number.isInteger((1)))) {
F.line = 69;
failedAssertImpl_268435531(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_5.nim(11, 3) `1.toJs.isInteger` "));
}

if (!(!(Number.isInteger((1.5))))) {
F.line = 69;
failedAssertImpl_268435531(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_5.nim(12, 3) `not 1.5.toJs.isInteger` "));
}

framePtr = F.prev;
var F = {procname: "module jsutils_examples_5", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_5.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsutils_examples_6", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_6.nim", line: 0};
framePtr = F;
if (!(!(Number.isSafeInteger(("123"))))) {
F.line = 77;
failedAssertImpl_268435531(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_6.nim(9, 3) `not \"123\".toJs.isSafeInteger` "));
}

if (!(Number.isSafeInteger(123))) {
F.line = 77;
failedAssertImpl_268435531(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_6.nim(10, 3) `123.isSafeInteger` "));
}

if (!(Number.isSafeInteger((123)))) {
F.line = 77;
failedAssertImpl_268435531(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_6.nim(11, 3) `123.toJs.isSafeInteger` "));
}

if (!(Number.isSafeInteger((9007199254740991)))) {
F.line = 77;
failedAssertImpl_268435531(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_6.nim(12, 3) `9007199254740991\'i64.toJs.isSafeInteger` "));
}

if (!(!(Number.isSafeInteger((9007199254740992))))) {
F.line = 77;
failedAssertImpl_268435531(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_6.nim(13, 3) `not 9007199254740992\'i64.toJs.isSafeInteger` "));
}

framePtr = F.prev;
var F = {procname: "module jsutils_examples_6", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_examples_6.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsutils_group0_examples", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_group0_examples.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsutils_group0_examples", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsutils_group0_examples.nim", line: 0};
framePtr = F;
framePtr = F.prev;
