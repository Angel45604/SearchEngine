'use strict'

const debug = require('debug')('search-engine:api')
const chalk = require('chalk')
const fs = require('fs')

fs.readFile('package.json', 'utf8', (err, data) => {
    if (err)
        console.error(`${chalk.red('[fatal error]')} ${err}`)
    console.log(data)
})

