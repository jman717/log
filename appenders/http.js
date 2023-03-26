/* @author Jim Manton: jrman@risebroadband.net
* @since 2023-03-22
* http.js

look here: https://stackoverflow.com/questions/6084360/using-node-js-as-a-simple-web-server

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/

const { red } = require('colors');
const http = require('http');

exports = module.exports = class log_http {
    constructor(props) {
        var t = this, fname = `http.constructor`
        try {
            if (typeof props.hostname == "undefined")
                throw new Error(`hostname is not defined`)
            if (typeof props.port == "undefined")
                throw new Error(`port is not defined`)
            props.colors.disable()
            t.hostname = props.hostname
            t.port = props.port
            t.output = []
            t.res = null
            t.req = null

            t.logMsg = t.logMsg.bind(t)
            t.server = t.server.bind(t)

            return t
        } catch (e) {
            e.message = `${fname} error: ${e.message}`
            throw (e)
        }
    }

    logMsg(props = {}) {
        let t = this, fname = "http.logMsg"
        try {
            t.output.push(`${JSON.stringify(props)}`)
        } catch (e) {
            e.message = `${fname} error: ${e.message}`
            console.log(e.message)
            throw e
        }
    }

    server() {
        let t = this, fname = "http.server", colr, dat_js, bc

        t.server = http.createServer((req, res) => {
            t.res = res
            t.req = req
            t.res.statusCode = 200;
            t.res.setHeader('Content-Type', 'text/html');
            t.res.write('<div align=center style="width:30%;">Log Messages<br/>');
            t.res.write('<br>');
            t.output.map((dat, i) => {
                dat_js = JSON.parse(dat)
                colr = "black"
                bc = "#eee"
                switch (dat_js.type) {
                    case "error":
                        colr = "red"
                        bc = "yellow"
                        break
                    case "debug":
                        colr = "blue"
                        break
                    case "warn":
                        colr = "yellow"
                        bc = "silver"
                        break
                    case "success":
                        colr = "white"
                        bc = "green"
                        break
                }
                t.res.write(`<div style="background-color:${bc};color:${colr};">${dat_js.msg}</div>`);
            })
            t.res.end('<br/>End Log Messages</div>');
        });

        t.server.listen(t.port, t.hostname, () => {
            console.log(`Server running at http://${t.hostname}:${t.port}/`);
        });

    }
}