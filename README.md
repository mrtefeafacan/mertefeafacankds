# İtopya Bilgisayar - KDS ve Stok Takip Sistemi

Bu proje, bilgisayar parçaları ve hazır sistem satışı yapan bir işletme için geliştirilmiş; stok yönetimi, sipariş takibi ve karar destek süreçlerini içeren, **RESTful mimariye** ve **MVC (Model-View-Controller)** tasarım desenine tam uyumlu bir backend projesidir.

## 🎯 Projenin Amacı ve Senaryo

**Senaryo:**
İtopya Bilgisayar firması, binlerce çeşit bileşeni yönetmektedir. Yöneticilerin anlık stok durumuna göre karar vermelerini sağlamak ve hatalı siparişleri (stoksuz ürün satışı vb.) engellemek amacıyla bir sisteme ihtiyaç duyulmaktadır.

**Projenin Temel İşlevleri:**
* Ürünlerin kategorize edilerek (Ekran Kartı, İşlemci vb.) yönetilmesi.
* Dinamik stok takibi ve kritik stok uyarıları.
* Müşteri ve sipariş yönetimi.
* Yönetici için karar destek verilerinin sağlanması.

**Uygulanan İş Kuralları (Business Logic):**
Proje kapsamında sunucu tarafında veri tutarlılığını sağlamak için özel iş kuralları geliştirilmiştir:
1.  **Stok Kontrolü:** Bir sipariş oluşturulurken, ilgili ürünün stok adedi kontrol edilir. Eğer stok `0` veya istenen adetten az ise sistem `400 Bad Request` hatası dönerek siparişi engeller.
2.  **Fiyat Tutarlılığı:** Ürün ekleme veya güncelleme işlemlerinde negatif fiyat girişi engellenmiştir. Ayrıca kampanya dönemlerinde satış fiyatı, alış fiyatının altında belirlenemez (Admin onayı gerektirir senaryosu).

## 🛠 Kullanılan Teknolojiler

* **Dil:** Node.js (TypeScript)
* **Web Çatısı:** Express.js
* **Veritabanı & ORM:** PostgreSQL / Prisma ORM
* **Mimari:** MVC (Model - View - Controller)
* **Diğer:** Dotenv (Ortam değişkenleri), Cors

## 📂 Proje Klasör Yapısı (MVC)

Proje, sürdürülebilirlik ve modülerlik esas alınarak yapılandırılmıştır:
