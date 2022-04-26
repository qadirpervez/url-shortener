// this has no use other than creating the config file

const fs = require('fs')
const path = require('path')

const configExample = path.join(__dirname, '../config/config.example')
const configDestination = path.join(__dirname, '../config/config.js')

try {
    fs.copyFileSync(configExample,
        configDestination,
        fs.constants.COPYFILE_EXCL
    )
    console.log('Config Created...')
} catch (e) {
    console.log(e.message)
}