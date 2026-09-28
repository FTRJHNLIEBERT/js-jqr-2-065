document.getElementById('btnHitung').addEventListener('click', function() {
    const inputRaw = document.getElementById('inputArray').value;
    const boxHasil = document.getElementById('boxHasil');
    const displayHasil = document.getElementById('hasil');

    // 1. Mengubah string input menjadi array angka
    // .split(',') memecah berdasarkan koma
    // .map(Number) mengubah string jadi angka
    // .filter membuang input yang bukan angka (jika ada koma di akhir)
    const angkaArray = inputRaw.split(',').map(item => item.trim()).filter(item => item !== "").map(Number);

    // Validasi jika input kosong atau bukan angka
    if (angkaArray.length === 0 || angkaArray.some(isNaN)) {
        alert("Harap masukkan angka-angka yang valid dipisahkan dengan koma!");
        return;
    }

    // 2. Fungsi Menghitung Nilai Minimum
    const nilaiMin = Math.min(...angkaArray);

    // 3. Fungsi Menghitung Nilai Maksimum
    const nilaiMax = Math.max(...angkaArray);

    // 4. Fungsi Menghitung Rata-rata
    const total = angkaArray.reduce((acc, curr) => acc + curr, 0);
    const rataRata = total / angkaArray.length;

    // 5. Menampilkan hasil ke HTML
    displayHasil.innerHTML = `
        <p class="mb-1">Nilai Minimum: <strong>${nilaiMin}</strong></p>
        <p class="mb-1">Nilai Maksimum: <strong>${nilaiMax}</strong></p>
        <p class="mb-0">Nilai Rata-rata: <strong>${rataRata}</strong></p>
    `;

    // Tampilkan box hasil
    boxHasil.classList.remove('d-none');
});