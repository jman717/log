var assert = require('assert');

describe('app', function () {
    let app, application

    it('app.constructor should pass', function () {
        application = require('../app.js')
        assert(app = new application({ parent: null }))
    })
    
    it('app.logMsg is a function', function () {
        assert(typeof app.logMsg == 'function')
    })
        
    it('app.init is a function', function () {
        assert(typeof app.init == 'function')
    })
})

describe('require', function () {

    it('colors', function () {
        assert(require('colors'))
    })
})
