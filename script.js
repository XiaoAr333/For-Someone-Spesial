const kataIndah = [
  "Kamu itu seperti Bulan ku, selalu bersinar di langit Malamku.",
  "Kalau kamu jadi Riskaa, aku jadi Dukunmu... selalu pengen meramal deket kamu.",
  "Aku gak bisa berhenti mikirin kamu, beneran deh.",
  "Setiap detik bersamamu itu hadiah buat aku.",
];

const kataRomantis = [
  "Aku janji bakal jagain kamu baik-baik.",
  "Setiap saat aku cuma pengen lihat kamu bahagia.",
  "Kamu udah bikin hari-hariku lebih berwarna.",
  "Makasih udah nerima aku, kamu sangat cantik 🥰❤️",
];

let kataIndex = 0;
let romantisIndex = 0;
let waktuJadianText = "";

function mulai() {
  document.getElementById("pembuka").style.display = "none";
  document.getElementById("kataIndah").style.display = "block";
  nextKata();
}

function nextKata() {
  if (kataIndex < kataIndah.length) {
    const el = document.getElementById("kataTeks");
    el.classList.remove("fadeSlideUp");
    void el.offsetWidth;
    el.innerText = kataIndah[kataIndex];
    el.classList.add("fadeSlideUp");
    kataIndex++;
  } else {
    document.getElementById("kataIndah").style.display = "none";
    document.getElementById("nembak").style.display = "block";
  }
}

function hindar() {
  const btn = document.getElementById("tidakBtn");
  btn.style.position = "absolute";
  btn.style.top = `${Math.random() * 70 + 10}%`;
  btn.style.left = `${Math.random() * 70 + 10}%`;
}

function terima() {
  document.getElementById("nembak").style.display = "none";
  document.getElementById("selamat").style.display = "block";

  const now = new Date();
  const hari = now.toLocaleDateString("id-ID", { weekday: "long" });
  const tanggal = now.toLocaleDateString("id-ID");
  const jam = now.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  });

  waktuJadianText = `🎉 Yeay! Aku seneng banget! 😍\n💘 Kita resmi jadian hari ${hari}, ${tanggal} jam ${jam} 💘 Di catat ya!`;

  const el = document.getElementById("romantisTeks");
  el.classList.remove("fadeSlideUp");
  void el.offsetWidth;
  el.innerText = waktuJadianText;
  el.classList.add("fadeSlideUp");
}

function nextRomantis() {
  const el = document.getElementById("romantisTeks");

  if (romantisIndex < kataRomantis.length) {
    el.classList.remove("fadeSlideUp");
    void el.offsetWidth;
    el.innerText = kataRomantis[romantisIndex];
    el.classList.add("fadeSlideUp");
    romantisIndex++;
  } else {
    document.getElementById("selamat").style.display = "none";
    document.getElementById("ajakan").style.display = "block";
  }
}

function kirimWhatsapp() {
  const jawaban = document.getElementById("jawaban").value.trim();
  if (jawaban !== "") {
    const nomor = "6282398776223"; // Ganti dengan nomor Anda

    const teksPesan =
      "Hai! Aku seneng banget kita sekarang udah jadian 😍\n" +
      "Aku pengen kita jalan bareng: " +
      jawaban;

    const url =
      "https://api.whatsapp.com/send?phone=" +
      nomor +
      "&text=" +
      encodeURIComponent(teksPesan);

    window.open(url, "_blank");
  } else {
    alert("Isi dulu jawabannya ya 😅");
  }
}
