const cbPrint = function(){
    console.log("Data is Added");
}

function node_Add(){
    const data = {name:"emp01"};
    db_Add(data, cbPrint);
}

function db_Add(data, cb){
    //Adds data
    cb();
}

node_Add();