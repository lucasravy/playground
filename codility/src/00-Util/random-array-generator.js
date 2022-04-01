const fs = require('fs')
const readline = require('readline')


let SIZE = 100
let MIN_NUMBER = 0
let MAX_NUMBER = 100
let FILENAME
let DEFAULT_FILENAME

function arrgen() {
    const arr = Array.from({ length: SIZE }, () => Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER) + MIN_NUMBER))
    const minText = MIN_NUMBER < 0 ? `Negative${Math.abs(MIN_NUMBER)}` : MIN_NUMBER
    const maxText = MAX_NUMBER < 0 ? `Negative${Math.abs(MAX_NUMBER)}` : MAX_NUMBER
    const content = `const arr${SIZE}min${minText}max${maxText} = [${arr}]`

    try {
        fs.writeFileSync(FILENAME || DEFAULT_FILENAME, content, err => {
            if (err) {
                console.log('#########################################################')
                console.log('##                                                     ##')
                console.log('##                 Disgracefully not done =(           ##')
                console.log('##                                                     ##')
                console.log('#########################################################')
                console.log(`## Error reported: ${JSON.stringify(err)}`)
            }
        })
        console.log('#########################################################')
        console.log('##                                                     ##')
        console.log('##                  Gracefully Done!                   ##')
        console.log('##                                                     ##')
        console.log('#########################################################')
    } catch (error) {
        console.log('#########################################################')
        console.log('##                                                     ##')
        console.log('##                 Disgracefully not done =(           ##')
        console.log('##                                                     ##')
        console.log('#########################################################')
        console.log(`## Error reported:  ${JSON.stringify(error)}`)
    }
}


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function start() {
    console.clear()
    console.log('#########################################################')
    console.log('### _______                   _______                 ###')
    console.log('###(_______)                 (_______)                ###')
    console.log('### _______    ____    ____   _   ___   _____   ____  ###')
    console.log('###|  ___  |  / ___)  / ___) | | (_  | | ___ | |  _ \\ ###')
    console.log('###| |   | | | |     | |     | |___) | | ____| | | | |###')
    console.log('###|_|   |_| |_|     |_|      \\_____/  |_____) |_| |_|###')
    console.log('###   ##       ##       ##         ##       ##       ####')
    console.log('##                                                     ##')
    console.log('############ W e l c o m e -t o- A r r G e n! ###########')
    console.log('##                                                     ##')
    console.log('##         Please enter the following values:          ##')
    console.log('##             (leave empty for default)               ##')
    console.log('##             Change your mind? ctrl + c              ##')
    console.log('##                                                     ##')
    console.log('#########################################################')
    questionSize()
}

function questionSize() {
    rl.question('#        Size: ', function (size) {
        if (!size || isNaN(size) || Number(size) <= 0) {
            console.log('#  --> Empty or Invalid.')
            console.log(`#      Default ${SIZE} was assumed.`)
        } else {
            SIZE = Number(size)
        }
        questionMinNumber()
    })
}

function questionMinNumber() {
    rl.question('#  Min number: ', function (minNumber) {
        if (!minNumber || isNaN(minNumber)) {
            console.log('#  --> Empty or Invalid.')
            console.log(`#      Default ${MIN_NUMBER} was assumed.`)
        } else {
            MIN_NUMBER = Number(minNumber)
        }
        questionMaxNumber()
    })
}

function questionMaxNumber() {
    rl.question('#  Max number: ', function (maxNumber) {
        if (!maxNumber || isNaN(maxNumber)) {
            console.log('#  --> Empty or Invalid.')
            console.log(`#      Default ${MAX_NUMBER} was assumed.`)
        } else {
            MAX_NUMBER = Number(maxNumber)
        }
        questionFileName()
    })
}

function questionFileName() {
    rl.question('#   File name: ', function (fileName) {
        if (!fileName) {
            console.log('#  --> Empty or Invalid.')
            DEFAULT_FILENAME = `random_arr${SIZE}_${MIN_NUMBER}To${MAX_NUMBER}.js`
            console.log(`#      Default ${DEFAULT_FILENAME} was assumed.`)
        } else {
            FILENAME = fileName
        }
        arrgen()
        rl.close()
    })
}

rl.on('close', function () {
    console.log()
    console.log('#########################################################')
    console.log('##                                                     ##')
    console.log('##                       See ya!                       ##')
    console.log('##                                                     ##')
    console.log('#########################################################')
    process.exit(0);
});

start()

