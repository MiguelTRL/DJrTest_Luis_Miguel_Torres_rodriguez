

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



function homework (data) {

    lower  =  data.toLowerCase();

    
    newData = lower.split("");

    var result = []
    newData.map(item=> {


        if(item != "a" && item && "e" && item && "i" && item!="o" && item!="u"){

            result.push(item);

        }
    })


    var respuesta = ""
    result.map(itemResult=>{

        
        respuesta = respuesta + itemResult + ", "
     
    })

   console.log("la respuesta es:",respuesta);
    

}
functions.capitalizar = capitalizar;
functions.homework = homework;
functions.chat = chat;


module.exports = functions

