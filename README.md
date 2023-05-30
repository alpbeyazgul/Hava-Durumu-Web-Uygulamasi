# Hava Durumu Uygulaması

Bu uygulama, kullanıcılara hava durumu bilgilerini gösteren basit bir hava durumu uygulamasıdır. Uygulama, belirli bir şehir için hava durumu durumunu, sıcaklığını ve görsel temsilini göstermektedir.

## Özellikler

- Belirli bir şehir için hava durumu bilgilerini gösterir.
- Görsel temsil olarak hava durumu ikonlarını kullanır.
- Kullanıcı dostu arayüzü vardır.

## Kurulum

1. Bu GitHub deposunu bilgisayarınıza indirin veya klonlayın.
2. İndirdiğiniz klasöre gidin.
3. Gerekli dosyaları ve kodları düzenleyin veya özelleştirin (isteğe bağlı).
4. Sunucunuzda bir veritabanı oluşturun ve `database.sql` dosyasını çalıştırarak tablo yapısını oluşturun.
5. `server.js` dosyasındaki veritabanı bağlantı bilgilerini güncelleyin.
6. Proje klasöründe terminal açın ve aşağıdaki komutları sırasıyla çalıştırın:
    ```
    npm install
    node server.js
    ```
7. Tarayıcınızda `http://localhost:3000` adresini açarak uygulamayı görüntüleyin.

## Kullanım

- Ana sayfada, belirli bir şehir için hava durumu bilgilerini göreceksiniz.
- Arayüzdeki şehir seçeneklerini kullanarak farklı şehirlerin hava durumu bilgilerini görüntüleyebilirsiniz.

## Katkıda Bulunma

1. Bu GitHub deposunu fork edin.
2. Yeni bir branch oluşturun: `git checkout -b benim-branchim`
3. Değişikliklerinizi yapın ve bunları commit edin: `git commit -m 'Yeni özellik eklendi'`
4. Branch'inizi push edin: `git push origin benim-branchim`
5. Fork ettiğiniz deposunda bir Pull Request (PR) açın.

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Daha fazla bilgi için `LICENSE` dosyasını inceleyin.
