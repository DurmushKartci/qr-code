var QRCode = require('qrcode')

QRCode.toDataURL('www.durmuskartci.com', function (err, url) {
  console.log(url)
})