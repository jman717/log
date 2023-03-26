var llog = require("../app.js"),
  a = new llog({ parent: null }).init({appender: "http", hostname: "127.0.0.1", port: 3000})

a.logMsg({ msg: "this is a debug message".debug, type: "debug" })
a.logMsg({ msg: "this is some warning message", type: "warn" })
a.logMsg({ msg: "this is some error message", type: "error" })
a.logMsg({ msg: "this is a success message", type: "success" })
a.server()

