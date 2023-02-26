/* @author Jim Manton: jrman@risebroadband.net
* @since 2023-01-15
* log4js_tagline.js
*/

exports = module.exports = class log4js_tagline {
    constructor(props) {
        var t = this, fname = `log4js_tagline.constructor`
        try {
            props.colors.disable()    
            t.parent = props.parent
            t.exclude_logMsg = props.exclude_logMsg
            t.logger = props.logger   
            t.logMsg = t.logMsg.bind(t)
 
            return t
        } catch (e) {
            e.message = `${fname} error: ${e.message}`
            throw (e)
        }
    }

    logMsg(props = {}) {
        let t = this, fname = "log4js_tagline.logMsg", s, ss
        try {
            if (typeof props.msg == "undefined")
                throw new Error(`no msg property in (${JSON.stringify(props)}) `)
            if (typeof props.type == "undefined")
                throw new Error(`no type property in (${JSON.stringify(props)}) `)
            if (typeof t.exclude_logMsg != "undefined")
                if (t.exclude_logMsg.indexOf(props.type) > -1)
                    return
            s = props.msg
            try {
                // test to see if there's another json object
                ss = JSON.parse(props.msg)
                if (typeof ss.msg != "undefined")
                    s = ss.msg
            } catch (e) {
                // do nothing. the failure means it's not a json object
            }
            if (typeof s.msg != 'undefined') {
                s = s.msg
            }
            switch (props.type) {
                case "debug":
                    t.logger.debug(JSON.stringify(s)).tagline()
                    break
                case "info":
                    t.logger.info(JSON.stringify(s)).tagline()
                    break
                case "error":
                    t.logger.error(JSON.stringify(s)).tagline()
                    break
                case "success":
                    t.logger.info(JSON.stringify(s)).tagline()
                    break
                default:
                    t.logger.trace(JSON.stringify(s)).tagline()
            }
        } catch (e) {
            e.message = `${fname} error: ${e.message}`
            console.log(e.message)
            throw e
        }
    }
}