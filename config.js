// ===============================================
// «طيف» — إعدادات المحطة
// عدّلي هذا الملف فقط لتغيير العمل الفني ومعلوماته
// ===============================================
window.TAYF = {
  station: 1,

  artwork: {
    title: "عنوان العمل",
    titleEn: "Artwork Title",
    artist: "اسم الفنان",
    artistEn: "Artist Name",
    description:
      "نبذة قصيرة عن العمل الفني في سطرين أو ثلاثة. ما الفكرة، وما الذي يراه الزائر.",
  },

  // ملف صورة اللوحة بعد تحويلها في MindAR Compiler
  // (للتجربة: assets/card.mind ويطابق assets/card.png)
  targetSrc: "assets/card.mind",

  // ضعي مجسمك بصيغة GLB في assets/artwork.glb ثم غيّري إلى true
  // لو false: يظهر مجسم تجريبي مبني بالكود
  useModel: false,
  modelSrc: "assets/artwork.glb",

  // حجم وموضع العمل فوق اللوحة (عرض اللوحة = 1)
  modelScale: "0.6 0.6 0.6",
  modelPosition: "0 0 0.1",
  modelRotation: "0 0 0",

  // رابط قياس (اختياري). اتركيه فارغاً للتجربة
  analyticsEndpoint: "",
};

// تسجيل الأحداث: مسح، ظهور العمل، مدة المشاهدة
window.tayfTrack = function (event, data) {
  const payload = Object.assign(
    { event, station: window.TAYF.station, t: new Date().toISOString() },
    data || {}
  );
  console.log("[tayf]", payload);
  const url = window.TAYF.analyticsEndpoint;
  if (url && navigator.sendBeacon) {
    try {
      navigator.sendBeacon(url, JSON.stringify(payload));
    } catch (e) {}
  }
};
