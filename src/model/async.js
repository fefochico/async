

function info(data){
    return new Promise(function (resolve, reject){
        setTimeout(()=> {
            var values=[];
            for(let i=0; i<Number(data.iter); i++){
                values.push({value: i})
            }
            resolve(values);
        }, 2000);
    })
}

module.exports={
    info: info,
}