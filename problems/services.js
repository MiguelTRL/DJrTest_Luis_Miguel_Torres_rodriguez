

const functions = {}
function capitalizar(data){

    var newData = data.split("")

    return console.log( newData[0].toUpperCase() + newData.slice(1));

    
}

functions.capitalizar = capitalizar;

module.exports = functions

