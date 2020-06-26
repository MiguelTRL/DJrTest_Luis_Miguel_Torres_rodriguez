const _service = require("./services.js")


console.log("Escribe un mensaje");
var stdin = process.openStdin();

stdin.addListener("data", function(d) {
    
       data = d.toString().trim()

        _service.homework(data)
  });