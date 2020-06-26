

const functions = {}
function capitalizar(data){

    var newData = data.split("")

    return console.log( newData[0].toUpperCase() + newData.slice(1));

    
}



function chat(message){


    newData = message.split("");
    var validate;
        newData.map(item=> {


            if(item == "h" || item =="H" ||
             item == "o" || item =="O" ||
             item == "l"|| item =="L" ||
             item == "a" || item =="a" ){

                validate = true;
                
             }else {

                validate = false;


             }

    })

    console.log("Message",validate);
}
functions.capitalizar = capitalizar;
functions.chat = chat;


module.exports = functions

