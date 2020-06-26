
const _service = require("./services.js")


console.log("Escribe un mensaje");
var stdin = process.openStdin();

stdin.addListener("data", function(d) {
    
       message = d.toString().trim()

        _service.chat(message)
  });