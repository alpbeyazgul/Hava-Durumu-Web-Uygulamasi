window.addEventListener('load', function() {
    // Hava durumu bilgisini getir ve göster
    var havaDurumu = {
        sehir: 'Istanbul',
        durum: 'Güneşli',
        sicaklik: '25°C',
        resim: 'gunesli.png'
    };

    var havaDurumuDiv = document.getElementById('hava-durumu');
    havaDurumuDiv.innerHTML = '<img src="' + havaDurumu.resim + '">' +
                              '<p>' + havaDurumu.sehir + '</p>' +
                              '<p>' + havaDurumu.durum + '</p>' +
                              '<p>' + havaDurumu.sicaklik + '</p>';
});
