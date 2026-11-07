# CLAUDE.md — loyiha qoidalari

## Loyiha
- Bintu Kamoldinning shaxsiy vizitka sayti: Alisher Navoiy nomidagi ToshDOʻTAU talabasi;
  qiziqishlari: mumtoz adabiyot, Qurʼon ilmlari, vibecoding.
- Jonli sayt: https://durdonabozorova571-lang.github.io/my-site/ (GitHub Pages, `main` ga
  push qilinganda `Durdona/` papkasi oʻzi chiqadi). Ombor: durdonabozorova571-lang/my-site.
- Asosiy fayllar: `Durdona/` papkasida (`index.html`, `style.css`, `script.js`,
  `images/photo.jpg`, `images/og.jpg` — Telegram kartasi rasmi, 1200×630).
- `Durdona-netlify/index.html` — Netlify uchun hamma narsa ichida boʻlgan bitta fayl.
  Har oʻzgarishdan keyin uni qayta yigʻib bering (bintukamoldin.netlify.app).
- Papka ildizidagi `index.html` va boshqa fayllar — boshqa odamning sayti.
  Soʻralmasa, ularga tegmang.

## Uslub
- Professional, minimalistik, taʼlim uslubida; ranglar iliq (krem, bordo, tilla).
- Yorugʻ va qorongʻi tema ikkalasi ham ishlashi shart.
- Matn oʻzbek tilida (lotin, ʻ va ʼ belgilari bilan). Ohang kamtar:
  "men", "-man" emas — "biz", "-miz" ("ishlayapmiz", "javob beramiz").
- Faqat haqiqiy maʼlumot: oʻylab topilgan raqam, sharh yoki yulduzcha qoʻymang.
- Telefon raqami saytda boʻlmasin. Aloqa faqat Telegram: @since1410.
- Yoʻlchivoylar guruhining taklif havolasini saytga qoʻymang (shaxsiy rasmlar bor);
  uning oʻrniga @since1410 ga "Bogʻlanish" havolasi.

## Texnik chegaralar
- Oddiy HTML + CSS + JS; freymvork, kutubxona va yigʻish vositalarisiz.
- Tashqaridan faqat Google Fonts. Telefon kengligida (≈390px) toʻgʻri koʻrinishi shart;
  telefonda bosiladigan tugmalar kamida 44px.
- Kurs raqami `script.js` dagi `STUDY` sozlamasi orqali avtomatik hisoblanadi; qoʻlda yozmang.
- Open Graph teglari (`og:*`, `twitter:*`) va `images/og.jpg` oʻchirilmasin.

## Sirlar (parol, token, kalit)
- Parol, kalit yoki token hech qachon fayllarga, commit izohiga yoki chatga yozilmaydi.
- Har commitdan oldin `git diff --cached` ni sirlarga tekshiring (token, parol, kalit,
  `.env`); topilsa — commit qilmang va foydalanuvchiga ayting.
- Maxfiy fayllar `.gitignore` da: `.env`, `*.key`, `*.pem`, `credentials*` va boshqalar.
  Ularni hech qachon `git add -f` bilan qoʻshmang.

## Ish tartibi
- Qurishdan oldin 2–3 qatorli reja koʻrsating va tasdiqni kuting.
- Kichik qadamlar bilan ishlang: bitta oʻzgarish → tekshirish → keyingisi.
- Har oʻzgarishdan keyin sahifani kompyuter va telefon oʻlchamida tekshiring.
- Nima oʻzgarganini qisqa va oddiy tilda ayting.
- Imkon boʻlsa ishni oʻzingiz bajaring (commit, push, tekshiruv). Foydalanuvchi oʻzi
  qilishi kerak boʻlgan ishni raqamlangan qadamlar, aniq papka yoʻli va nusxa olsa
  boʻladigan buyruqlar bilan bering — u faqat bajarishi qolsin.
- Skrinshotlarni foydalanuvchi oʻzi oladi. Uning brauzeri yoki akkauntlari orqali
  skrinshot olmang — faqat qanday olishni qadamma-qadam ayting.
- Har suhbat oxirida pastdagi "Ish tarixi" ga sana bilan 1–3 qator qoʻshing;
  takrorlangan xato boʻlsa — "Takrorlangan xatolar" ga yozing.

## Takrorlangan xatolar — qaytarmang
- Ikki maʼnoli soʻrovni keng talqin qilmang ("raqam va aloqa qismini ham" — faqat raqamni
  olib tashlash edi, butun boʻlimni emas). Shubha boʻlsa — eng kichik oʻzgarish yoki soʻrang.
- "Avvalgisi" kabi soʻzda qaysi versiya nazarda tutilganini aniqlang.
- Fayllarni oʻzgartirishdan oldin kompyuterdagi nusxani yangidan oling va solishtiring:
  ular boshqa suhbatda oʻzgargan boʻlishi mumkin.
- Commitdan oldin `Durdona/images/photo.jpg` borligini tekshiring (bir marta papka
  oʻchib ketgan). Rasm yoʻq boʻlsa, push qilmang.
- Netlify ga faqat `index.html` yuklansa dizayn chiqmaydi — doim `Durdona-netlify`
  papkasini yuklashni ayting.
- Bir faylga taalluqli buyruqlarni parallel emas, ketma-ket bajaring (eski nusxa
  yozilib qolgan holat boʻlgan).

## Ish tarixi
- 2026-11-05: Sayt yaratildi; hero, Faoliyat (3 ish), Loyihalar, FAQ, tema tugmasi.
  Ism "Bintu Kamoldin" ga, ohang "-miz" ga oʻzgartirildi; kurs raqami avtomatik.
- 2026-11-06: Telefon raqami olib tashlandi (aloqa — faqat Telegram). Telegram kartasi
  (Open Graph + og.jpg) qoʻshildi, telefonda tugmalar 44px. GitHub Pages ishga tushdi.
- 2026-11-07: Rasm asl sifatli fayl bilan almashtirildi ("Rasm almashdi").
  CLAUDE.md ga sirlar qoidasi, takrorlangan xatolar va ish tarixi qoʻshildi.
  Kompyuterdagi nusxa `git pull` bilan tenglashtirildi. Qoida: skrinshotni foydalanuvchi oʻzi oladi.
