const assert = require('assert'),
    jsonHasDifferences = require('diffler'),
    packagejson = require('../package.json')

const packageMock = {
  "author": {
    "name": "Jim Manton"
  },
  "version": "3.0.3",
  "bundleDependencies": [],
  "dependencies": {
    "@types/node": "^20.11.0",
    "chai": "^5.0.0",
    "colors": "^1.4.0",
    "diffler": "^2.0.4",
    "fs": "^0.0.1-security",
    "mocha": "^10.2.0",
    "valid-path": "^2.1.0"
  },
  "scripts": {
    "start": "node app.ts",
    "test": "mocha",
    "ditched": "ditched -a",
    "test_logs": "node ./tests/logs",
    "test_http": "node ./tests/http"
  },
  "keywords": [
    "log",
    "console",
    "log4js-tagline",
    "http",
    "base-queue",
    "appenders",
    "javascript",
    "mocha"
  ],
  "homepage": "https://github.com/jman717/log",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/jman717/log.git"
  },
  "deprecated": false,
  "description": "Logging to console with eventual log4js-tagline support.",
  "email": "jrman@risebroadband.net",
  "license": "MIT",
  "main": "app.js",
  "name": "log-queue",
  "start": "node app.js"
}

describe('package.json', function () {
    it('should pass', function () {
      const difference = jsonHasDifferences(packagejson, packageMock)
      assert(JSON.stringify(difference) == "{}")
    })

    it('should fail', function () {
        packageMock.version = '0'
        assert(jsonHasDifferences(packagejson, packageMock))
    })
})
