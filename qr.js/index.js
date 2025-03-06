var QRCode = require('qrcode')


QRCode.toString("Hello World", function(err, url){
    console.log(url)
})
