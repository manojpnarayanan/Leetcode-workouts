/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let a=[];
    let b=[];
    let str=s.split("");
    for(let i=0;i<str.length;i++){
        if(str[i]==="#"){
            a.splice(-1);
        }else if(str[i] !== "#"){
            a.push(str[i])
        }
    }
    let st=t.split("");
    for(let i=0;i<st.length;i++){
        if(st[i]==="#"){
            b.splice(-1);
        }else if(st[i] !== "#"){
            b.push(st[i])
        }
    }
    if(a.join("")===b.join("")) return true
    else  return false  
};