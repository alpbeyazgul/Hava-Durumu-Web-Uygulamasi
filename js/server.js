// Backend tarafında verileri sağlayan bir API oluşturabilirsiniz
// Örneğin Express.js kullanarak:
const express = require('express');
const app = express();

app.get('/hava-durumu', function(req, res) {
    // Hava durumu verilerini burada sağlayabilirsiniz
    res.json({
        sehir: 'Istanbul',
        durum: 'Güneşli',
        sicaklik: '25°C',
        resim: 'gunesli.png'
    });
});

app.listen(3000, function() {
    console.log('Server başlatıldı: http://localhost:3000');
});
