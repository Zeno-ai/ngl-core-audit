# NGL Profesyonel Denetim ve Anonim Soru-Cevap Platformu

![NGL Banner](https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000&auto=format&fit=crop)

NGL'den ilham alan, güvenlik denetimi ve özel veri toplama için tasarlanmış gelişmiş bir full-stack anonim mesajlaşma platformu. React/Vite frontend ve Node.js/Express backend ile oluşturulan bu proje; profesyonel bir admin paneli, veri kalıcılığı ve gelişmiş IP takibi özelliklerine sahiptir.

## ✨ Özellikler

### 📨 Kullanıcılar İçin

- **Anonim Mesajlaşma**: Rastgele ipuçları (zar özelliği) içeren sorunsuz mesaj gönderim arayüzü.
- **Instagram Doğrulaması**: Güven oluşturmak/veri toplamak için isteğe bağlı Instagram kullanıcı adı sorgusu.
- **Modern Kullanıcı Arayüzü**: Framer Motion kullanılarak hazırlanan canlı gradyanlar ve akıcı mikro animasyonlar.
- **Önce Gizlilik**: Kullanıcılar için açık gizlilik notları ve güvenlik garantileri.

### 🔐 Adminler İçin (Güvenli Panel)

- **Merkezi Gelen Kutusu**: IP takibi ve zaman damgaları ile arşivlenen mesajlar.
- **Gerçek Zamanlı Ayarlar**: Instagram doğrulama gereksinimini tüm oturumlarda anında açıp kapatabilme.
- **Medya Kütüphanesi**: `html2canvas` kullanarak paylaşmaya hazır Instagram Story kartları oluşturma ve indirme.
- **Kimlik Doğrulamalı Erişim**: Ortam değişkenleri (.env) ile korunan güvenli giriş.
- **Gelişmiş Kalıcılık**: Sunucu taraflı JSON depolama (`mes.json`) ile oturumlar arası veri senkronizasyonu.

### 🛡️ Güvenlik

- **Express Rate Limit**: Mesaj gönderim uç noktasında spam ve suistimali önler.
- **Helmet Middleware**: XSS ve veri enjeksiyonuna karşı yapılandırılabilir CSP politikaları.
- **IP Adli Takip**: Denetim amaçlı gönderici IP adreslerini yakalar ve saklar.
- **Atomik Dosya Yazma**: Yüksek trafikli durumlarda veri bozulmasını önler.

## 🛠️ Teknoloji Yığını

- **Frontend**: React 19, Vite, Framer Motion, Lucide React, html2canvas
- **Backend**: Node.js, Express
- **Depolama**: JSON Dosya Tabanlı Veritabanı (Atomik)
- **Güvenlik**: Helmet, Express Rate Limit, CORS

## 📦 Kurulum ve Kurulum

1. **Depoyu klonlayın:**

   ```bash
   git clone https://github.com/kullaniciadi/ngl-core-audit.git
   cd ngl-core-audit
   ```

2. **Bağımlılıkları yükleyin:**

   ```bash
   npm install
   ```

3. **Ortam Değişkenlerini Yapılandırın:**
   Kök dizinde bir `.env` dosyası oluşturun:

   ```env
   VITE_ADMIN_USERNAME=admin_kullanici_adiniz
   VITE_ADMIN_PASSWORD=guvenli_sifreniz
   PORT=5001
   ```

4. **Uygulamayı çalıştırın:**
   - **Full Stack Geliştirme**: `npm run dev:all` (Hem Vite'ı hem de Backend'i başlatır)
   - **Sadece Frontend**: `npm run dev`
   - **Sadece Backend**: `npm run server`

## 📂 Proje Yapısı

```text
├── src/
│   ├── pages/        # Gönderim sayfası, Giriş, Admin Paneli
│   ├── components/   # UI bileşenleri (StoryCanvas vb.)
│   └── main.jsx       # Giriş noktası
├── server.js         # Node.js Express Backend
├── mes.json          # Sunucu Taraflı Veri Kalıcılığı
├── vite.config.js    # Proxy ve derleme yapılandırması
└── .env              # Sırlar ve Yapılandırma
```

## 📜 Lisans

MIT Lisansı. Sadece eğitim ve güvenlik denetimi amaçlıdır.

---
⚡ **BugraAkdemir Developer** tarafından geliştirilmiştir.
