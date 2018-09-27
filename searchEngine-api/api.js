'use strict'

const debug = require('debug')('alquimestrio:api:routes')
const express = require('express')
const chalk = require('chalk')
const asyncify = require('express-asyncify')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const multer = require('multer')
const fs = require('fs')


const api = asyncify(express.Router())
const upload = multer({dest: 'assets/'})

api.use(morgan('dev'))

api.use(bodyParser.urlencoded({extended: true}))
api.use(bodyParser.json())

module.exports = api

api.get('/', async (req, res, next) => {
    let message = 'Api Online'
    res.send(message)
})

api.post('/archivo', upload.single('archivo'), async(req, res, next) =>{
    // req.file is the file('name')
    // req.body contains the text fields
    console.log(req.file)
    console.log(req.file.path)
    fs.readFile(req.file.path, 'utf8', (err, data) => {
        if (err)
            console.error(`${chalk.red('[Fatal Error]')} ${err}`)
        console.log(data)
        res.send(data)
    }) 
  });