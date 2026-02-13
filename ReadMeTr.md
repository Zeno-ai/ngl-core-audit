# 🕵️‍♂️ ngl-core-audit - Gelişmiş Sosyal Mühendislik ve Phishing Simülasyonu

> **YASAL UYARI:** Bu proje yalnızca **EĞİTİM ve GÜVENLİK DENETİMİ** amaçlıdır. Geliştirici, yazılımın kötüye kullanımından sorumlu değildir. Sadece kendi güvenliğinizi test etmek veya izni alınmış hedefler üzerinde kullanın.

**ngl-core-audit**, popüler anonim mesajlaşma uygulaması NGL'in birebir klonudur. Sosyal mühendislik (social engineering) tekniklerini, veri yakalama yöntemlerini ve konum takibi stratejilerini **eğitim amacıyla** göstermek için geliştirilmiştir.

---

## 🚀 Temel Özellikler

### 1. 🎣 Phishing Simülasyon Modları (Admin Panelinden Kontrol)

Hedefin güvenini kazanmak veya veri toplamak için üç farklı mod sunar:

- **Kullanıcı Adı Modu (`username`)**: Standart NGL akışını taklit eder. Sadece kullanıcı adını sorar. Şüphe uyandırmaz.
- **Sahte Giriş Modu (`ig_login`)**: Instagram giriş ekranının **pixel-perfect** (birebir aynı) kopyasını sunar. Kullanıcı adı ve şifreyi (credential harvesting) yakalar. Yüksek değerli veri toplar.
- **Direkt Mod (`none`)**: Hiçbir bilgi istemeden mesajlaşmaya izin verir. Hedefin güvenini inşa etmek için kullanılır.

### 2. 📍 Gelişmiş Konum Takibi (Geolocation Tracking)

Hedefin GPS konumunu (Enlem/Boylam) yakalamak için admin panelinden yönetilebilen iki strateji:

- **Strateji A: Giriş Entegreli (Sessiz)**
  - Sayfa yüklendiğinde veya kullanıcı bir alana odaklandığında **sessizce** konum izni ister.
  - **Kullanım:** Genellikle "Sahte Giriş Modu" ile birlikte kullanılır. Kullanıcı, güvenlik doğrulaması (2FA gibi) bir işlem yapıldığını sanarak izin verebilir.

- **Strateji B: "Yakınlardakileri Keşfet" (Sosyal Mühendislik)**
  - TÜM EKRANLARIN (Mesaj Yazma, Giriş Kapısı, Kullanıcı Adı İsteme) altına **"📍 Yakınlardaki Kişileri Keşfet (BETA)"** isimli dikkat çekici bir buton ekler.
  - **Tuzak (Hook):** Kullanıcı "Kim var?" merakıyla butona tıklar ve tarayıcının konum izni penceresi açılır.
  - **Anlık Kayıt (Immediate Save):** Kullanıcı "İzin Ver" dediği **milisaniye** içinde, henüz hiçbir veri girmemiş olsa bile konum bilgisi `Anonim (Konum Yakalandı)` etiketiyle veritabanına kaydedilir. Veri kaybı **sıfıra** indirilir.
  - **Yem (Bait):** İzin verildikten sonra "Konumunda 3 kişi bulundu!" şeklinde sahte bir başarı mesajı gösterilir ve kullanıcı Fake Instagram Giriş ekranına yönlendirilir.

### 3. 🛡️ Kapsamlı Admin Paneli

Simülasyonu yönetmek ve yakalanan verileri analiz etmek için güçlü, karanlık mod (dark mode) arayüzü:

- **📥 Gelen Kutusu (Inbox)**: Gönderilen tüm anonim mesajları listeler. IP adresi, tarih ve mesaj içeriğini gösterir.
- **🔑 Yakalanan Bilgiler (Credentials)**: Fake Login sayfasından ele geçirilen Instagram kullanıcı adı ve şifrelerini listeler.
  - **Şifre Göster/Gizle:** Güvenlik analizi için şifreleri açık metin olarak görebilirsiniz.
  - **IP Takibi:** Giriş yapılan cihazın IP adresini ve User Agent bilgisini saklar.
- **🌍 Konum Geçmişi (Location History)**: Tüm konum verilerini tek bir zaman çizelgesinde (timeline) birleştirir.
  - **Renk Kodlu Ayrıştırma:**
    - 🔵 **Mavi:** Mesaj gönderimi sırasında yakalanan konumlar.
    - 🔴 **Kırmızı:** Giriş işlemi sırasında yakalanan konumlar.
  - **Detaylı Analiz:** Hangi mesajın veya hangi kullanıcının hangi konumdan geldiğini ilişkilendirir.
  - **Harita Entegrasyonu:** Koordinatlara tıklayarak direkt **Google Maps** üzerinde açabilirsiniz.
- **🎨 Medya Kütüphanesi:** Gelen mesajları şık "Instagram Hikaye (Story)" görsellerine dönüştürür. `html2canvas` ile tarayıcı içinde resim üretir.
- **⚙️ Ayarlar (Settings)**: Yakalama Modunu ve Konum Stratejisini **anlık (real-time)** olarak değiştirebilirsiniz. Değişiklikler tüm kullanıcılara hemen yansır.

### 4. 🕵️ Arka Plan Veri Toplama

Kullanıcı fark etmeden aşağıdaki veriler sistem tarafından loglanır:

- **IP Adresi:** `ipify` servisi üzerinden her etkileşimde güncellenir.
- **User Agent:** Cihaz, işletim sistemi ve tarayıcı bilgisi.
- **Zaman Damgası (Timestamp):** Olayların gerçekleşme sırası.
- **Kısmi Veri Kaydı:** Kullanıcı işlemini yarıda bıraksa bile (örneğin sadece konum verip çıksa) sistem o ana kadar olan veriyi saklar.

---

## 🛠️ Teknoloji Yığını (Tech Stack)

- **Frontend:** React 18, Vite (Hızlı ve modern geliştirme).
- **Animasyonlar:** Framer Motion (Gerçekçi ve akıcı geçişler).
- **İkon Seti:** Lucide React (Modern ikonografi).
- **Backend / Veritabanı:** Firebase (Firestore NoSQL - Gerçek zamanlı veri senkronizasyonu).
- **Deployment:** Vercel (CD/CI uyumlu, modern host).

---

## 📦 Kurulum ve Çalıştırma

1. **Projeyi Klonlayın**

    ```bash
    git clone https://github.com/BugraAkdemir/ngl-core-audit.git
    cd ngl-core-audit
    ```

2. **Bağımlılıkları Yükleyin**

    ```bash
    npm install
    ```

3. **Firebase Yapılandırması**
    - [Firebase Console](https://console.firebase.google.com/) üzerinden yeni proje oluşturun.
    - **Firestore Database**'i etkinleştirin.
    - Hızlı test için kuralları (Rules) aşağıdaki gibi ayarlayın (Prodüksiyon için kısıtlayın!):

        ```javascript
        allow read, write: if true;
        ```

    - `.env.example` dosyasını `.env` olarak kopyalayın ve Firebase API anahtarlarınızı girin.

4. **Projeyi Başlatın**

    ```bash
    npm run dev
    ```

5. **Derleme (Build)**

    ```bash
    npm run build
    ```

---

## 📸 Ekran Görüntüleri ve İşleyiş

- **Sahte Giriş:** Instagram'ın orijinal renk paleti, fontları ve buton stilleri birebir kopyalanmıştır.
- **Yakınlardakileri Keşfet:** Buton, uygulamanın doğal bir parçası gibi görünür ve merak uyandırır.
- **Admin Paneli:** Profesyonel bir siber güvenlik aracı görünümündedir.

---

## ⚠️ Yasal ve Etik Sorumluluk Reddi

Bu yazılım **SADECE EĞİTİM AMAÇLIDIR.**

- İzin almadığınız kişi veya kurumlara karşı kullanmak **SUÇTUR.**
- Kötü niyetli kimlik avı (phishing) amacıyla kullanmayınız.
- Geliştirici, bu aracın kullanımından doğacak hiçbir zarardan sorumlu tutulamaz.

---

*Geliştirici: [BugraPC]*
