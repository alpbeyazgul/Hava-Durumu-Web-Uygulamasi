-- Veritabanı bağlantısı ve tablo yapısını içeren SQL dosyası
-- Tablo adı: hava_durumu
CREATE TABLE hava_durumu (
    id INT AUTO_INCREMENT PRIMARY KEY,
    sehir VARCHAR(255) NOT NULL,
    durum VARCHAR(255) NOT NULL,
    sicaklik VARCHAR(255) NOT NULL,
    resim VARCHAR(255) NOT NULL
);
