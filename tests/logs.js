var llog = require("../app.js"),
  a = new llog({ parent: null })

a.logMsg({ msg: "hello world".debug, type: "debug" })
a.logMsg({ msg: "hello world".silly, type: "silly" })
a.logMsg({ msg: "hello world".error, type: "error" })

