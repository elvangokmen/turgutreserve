# Turgut Reserve — Premium Landing Page

Bu proje Vercel üzerinde çalışacak hazır Next.js sitesidir.

## Önemli düzenlemeler

### 1. WhatsApp numarası
`app/page.js` dosyasında şu satırı bulun:

`https://wa.me/905XXXXXXXXX`

Buraya ülke koduyla, boşluksuz gerçek numarayı yazın. Örnek:
`https://wa.me/905551112233`

### 2. Gerçek fotoğraflar
`public` klasöründeki SVG görseller geçici premium yer tutuculardır.
Drone ve arsa fotoğrafları hazır olduğunda bunların yerine:
- hero.jpg
- landscape.jpg
- coast.jpg
- forest.jpg
- bay.jpg

yüklenebilir ve CSS içindeki dosya adları değiştirilebilir.

### 3. Form
Form şu an demo uyarısı gösterir. Daha sonra Formspree, Resend veya özel e-posta bağlantısıyla çalıştırılabilir.

## Vercel kurulumu
1. Zip dosyasını açın.
2. GitHub > turgutreserve reposu > Add file > Upload files.
3. Bu klasörün içindeki TÜM dosya ve klasörleri yükleyin.
4. Commit changes seçin.
5. Vercel otomatik yeniden yayınlar.
