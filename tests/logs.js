var llog = require("../app.js"),
  a = new llog({ parent: null }),
  b = new llog({ parent: null, exclude_logMsg: ["debug", "error"] })


a.logMsg({ msg: "hello world".debug, type: "debug" })
a.logMsg({ msg: "hello world".silly, type: "silly" })
a.logMsg({ msg: "hello world".error.italic.bold, type: "error" })

b.logMsg({ msg: "hello world another example".debug.italic.bold, type: "debug" })
b.logMsg({ msg: "hello world another example".silly.italic.bold, type: "silly" })
b.logMsg({ msg: "hello world another example".error.italic.bold, type: "error" })
