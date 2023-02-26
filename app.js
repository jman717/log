/* @author Jim Manton: jrman@risebroadband.net
* @since 2023-01-15
* Main processing app
*/

let colors = require('colors')

colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red',
    success: 'green'
});

exports = module.exports = class LogQueue {
    constructor(props) {
        var t = this, fname = `LogQueue.constructor`
        try {

            t.parent = props.parent
            t.exclude_logMsg = props.exclude_logMsg
            t.appender = null
            t.logObj = null

            t.init = t.init.bind(t)
            t.logMsg = t.logMsg.bind(t)

            return t
        } catch (e) {
            e.message = `${fname} error: ${e.message}`
            console.log(e.message)
            throw (e)
        }
    }

    init(props = {}) {
        var t = this, fname = `LogQueue.init`, a, req
        try {
            if (typeof props.appender != "undefined")
                t.appender = props.appender
            a = `./appenders/${t.appender}.js`
            req = require(a)

            props.parent = t
            props.exclude_logMsg = t.exclude_logMsg
            props.colors = colors   

            t.logObj = new req(props)

            return t
        } catch (e) {
            e.message = `${fname} error: ${e.message}`
            console.log(e.message)
            throw (e)
        }
    }

    logMsg(props = {}) {
        let t = this, fname = "LogQueue.logMsg"
        try {
            t.logObj.logMsg(props)
        } catch (e) {
            e.message = `${fname} error: ${e.message}`
            console.log(e.message)
            throw e
        }
    }
}