/*LottoArray with 7 places that place random numbers from 1-35 and downgrade through floor 
http://localhost:1337/ */

"use strict";
function lotto(){
    let lotto = [];
    for(let i=0; i < 7; i++) {
        lotto[i]=Math.floor(Math.random() * 35 + 1);
    }
    return lotto;
}
module.exports=lotto;