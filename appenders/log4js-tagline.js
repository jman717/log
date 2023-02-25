/* @author Jim Manton: jrman@risebroadband.net
* @since 2023-01-15
* log4js_tagline.js
*/

exports = module.exports = class log4js_tagline {
    constructor(props) {
        var t = this, fname = `log4js_tagline.constructor`
        try {
            t.parent = props.parent
            t.logMsg = t.logMsg.bind(t)

            return t
        } catch (e) {
            e.message = `${fname} error: ${e.message}`
            throw (e)
        }
    }

    logMsg(props = {}) {
        let t = this, fname = "log4js_tagline.logMsg"
        try {
            if (typeof props.msg == "undefined")
                throw new Error(`no msg property in (${JSON.stringify(props)}) `)
            if (typeof props.type == "undefined")
                throw new Error(`no type property in (${JSON.stringify(props)}) `)
            if (typeof t.exclude_logMsg != "undefined")
                if (t.exclude_logMsg.indexOf(props.type) > -1)
                    return
            console.log(props.msg)
        } catch (e) {
            e.message = `${fname} error: ${e.message}`
            console.log(e.message)
            throw e
        }
    }
}