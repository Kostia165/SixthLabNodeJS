const conn = require("../../database/connect_db");

function compare(a, b) {
    if (a['id'] < b['id']) return 1; // если первое значение больше второго
    if (a['id'] == b['id']) return 0; // если равны
    if (a['id'] > b['id']) return -1; // если первое значение меньше второго
}

function resToArr(res, am){
    res.sort(compare);
    if(res.length <= am)return res;
    var i = 0;
    var arr_ret = [];
    res.forEach(element => {
        i++;
        if(i >= am+1)return;
        arr_ret.push(element);
    });
    return arr_ret;
}

async function toGetRecords(amount){
    var c = conn();
    var s1 = await c[0].findAll({raw:true});
    c[1].close();
    console.log(s1);
    var s2 = resToArr(s1, amount);
    return s2;
}

async function toCreateRecord(obj){
    var c = conn();
    await c[0].create({
        date: obj[0],
        path: obj[1],
        user_agent: obj[2]
    }).then(res=>{
        
        //console.log(res)
    }).catch(err=>console.log(err));
    c[1].close();
}

async function toClearDatabase(){
    var c = conn();
    c[0].destroy({
        truncate: true
    }).then((res) => {
        //console.log(res);
        c[1].close();
    });
}

module.exports = {toCreateRecord, toGetRecords, toClearDatabase};