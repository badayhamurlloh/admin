const soalPG = [
    { q: "Apa bahan utama Ender Chest?", a: "Obsidian", o: ["Cobblestone", "Obsidian", "Dirt", "Diamond"] },
    { q: "Apa tindakan utama jika ada cheater?", a: "Ban", o: ["Dibiarkan", "Diajak bicara", "Ban", "Memberi item"] },
    { q: "Tingkat cahaya agar mob tidak muncul?", a: "8", o: ["0", "5", "8", "15"] },
    { q: "Sikap utama seorang admin?", a: "Netral", o: ["Sombong", "Pilih kasih", "Netral", "Cuek"] },
    { q: "Apa fungsi Redstone Repeater?", a: "Delay sinyal", o: ["Sumber listrik", "Delay sinyal", "Hiasan", "Pintu"] }
];

const soalIsian = [
    { q: "NBT tag item unbreakable?", a: "Unbreakable" }, { q: "Mob yang takut kucing?", a: "Creeper" },
    { q: "Nama bos di End?", a: "Ender Dragon" }, { q: "Simbol kimia emas?", a: "Au" },
    { q: "Planet terbesar?", a: "Jupiter" }, { q: "Rumus kimia air?", a: "H2O" },
    { q: "Ibu kota Indonesia?", a: "Jakarta" }, { q: "Admin dilarang melakukan?", a: "Abuse" },
    { q: "Boleh sebar IP server?", a: "Tidak" }, { q: "Sanksi jika rasis?", a: "Ban" },
    { q: "Tugas utama admin?", a: "Melayani" }, { q: "Tindakan jika ada bug?", a: "Lapor" },
    { q: "Mata uang negara Jepang?", a: "Yen" }, { q: "Warna bendera RI?", a: "Merah putih" },
    { q: "Hasil dari 10 x 10?", a: "100" }, { q: "Akar kuadrat dari 144?", a: "12" },
    { q: "Jumlah sisi persegi?", a: "4" }, { q: "Hasil dari 50 + 50?", a: "100" },
    { q: "Jumlah sisi segitiga?", a: "3" }, { q: "Siapa penemu lampu?", a: "Edison" },
    { q: "Bahan utama Obsidian?", a: "Lava" }, { q: "Bioma tempat Soul Sand?", a: "Nether" },
    { q: "Bahan dasar Diamond?", a: "Ore" }, { q: "Kegunaan Potion?", a: "Efek" },
    { q: "Apa sebutan untuk monster?", a: "Mob" }, { q: "Area aktif map?", a: "Chunk" },
    { q: "Mata uang game?", a: "Money" }, { q: "Sifat wajib admin?", a: "Sabar" },
    { q: "Boleh admin curang?", a: "Tidak" }, { q: "Bahasa Inggris Kucing?", a: "Cat" },
    { q: "Bahasa Inggris Anjing?", a: "Dog" }, { q: "Bahan utama Kayu?", a: "Tree" },
    { q: "Warna langit?", a: "Blue" }, { q: "Bentuk bumi?", a: "Bulat" },
    { q: "Matahari terbit dari?", a: "Timur" }
];

const container = document.getElementById('soal-container');

// Render semua soal ke halaman
soalPG.forEach((item, i) => {
    let opts = item.o.map(o => `<label><input type="radio" name="pg${i}" value="${o}"> ${o}</label><br>`).join('');
    container.innerHTML += `<div><p>${i+1}. ${item.q}</p>${opts}</div>`;
});

soalIsian.forEach((item, i) => {
    container.innerHTML += `<div><p>${i+6}. ${item.q}</p><input type="text" id="isian${i}" placeholder="Jawaban..."></div>`;
});

function hitungSkor() {
    let skor = 0;
    soalPG.forEach((item, i) => {
        const p = document.querySelector(`input[name="pg${i}"]:checked`);
        if(p && p.value === item.a) skor++;
    });
    soalIsian.forEach((item, i) => {
        if(document.getElementById('isian'+i).value.trim().toLowerCase() === item.a.toLowerCase()) skor++;
    });

    document.getElementById('skor').innerText = skor;
    document.getElementById('quiz-form').style.display = 'none';
    document.getElementById('hasil').style.display = 'block';

    const pesan = `Halo Admin, saya telah menyelesaikan ujian Baday Cerdas dengan skor ${skor}/40.`;
    document.getElementById('link-wa').href = `https://wa.me/628131431367?text=${encodeURIComponent(pesan)}`;
}