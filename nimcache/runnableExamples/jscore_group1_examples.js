/* Generated by the Nim Compiler v1.9.1 */
var framePtr = null;
var excHandler = 0;
var lastJSError = null;

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

function rawEcho() {
          var buf = "";
      for (var i = 0; i < arguments.length; ++i) {
        buf += toJSStr(arguments[i]);
      }
      console.log(buf);
    

  
}
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;

function newSeq_33556872(len_33556874) {
  var result_33556875 = [];

  var F = {procname: "newSeq.newSeq", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system.nim", line: 0};
  framePtr = F;
    F.line = 597;
    result_33556875 = new Array(len_33556874); for (var i = 0 ; i < len_33556874 ; ++i) { result_33556875[i] = null; }  framePtr = F.prev;

  return result_33556875;

}

function HEX3Aanonymous_654311426() {
  var F = {procname: "jscore_examples_3.:anonymous", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jscore_examples_3.nim", line: 0};
  framePtr = F;
    F.line = 139;
    rawEcho([77,105,99,114,111,116,97,115,107]);
  framePtr = F.prev;

  
}
var F = {procname: "module jscore_examples_3", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jscore_examples_3.nim", line: 0};
framePtr = F;
F.line = 139;
queueMicrotask(HEX3Aanonymous_654311426);
framePtr = F.prev;
var F = {procname: "module jscore_examples_3", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jscore_examples_3.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore_group1_examples", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jscore_group1_examples.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore_group1_examples", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jscore_group1_examples.nim", line: 0};
framePtr = F;
framePtr = F.prev;