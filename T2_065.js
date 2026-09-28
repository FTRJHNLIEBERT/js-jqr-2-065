// Menunggu tombol diklik
document.getElementById('btnHitung').addEventListener('click', function() {
    const boxHasil = document.getElementById('boxHasil');
    const displayHasil = document.getElementById('hasil');
    
    let angkaOutput = [];

    // Perulangan dari 1 hingga 100
    for (let i = 1; i <= 100; i++) {
        
        // Kondisi 1: Kelipatan 3 DAN 5 (Kelipatan 15)
        if (i % 3 === 0 && i % 5 === 0) {
            angkaOutput.push("MI2A");
        } 
        // Kondisi 2: Hanya kelipatan 3
        else if (i % 3 === 0) {
            angkaOutput.push("MI");
        } 
        // Kondisi 3: Hanya kelipatan 5
        else if (i % 5 === 0) {
            angkaOutput.push("2A");
        } 
        // Jika tidak memenuhi semua syarat, tampilkan angkanya
        else {
            angkaOutput.push(i);
        }
    }

    // Tampilkan hasil ke dalam elemen p#hasil, dipisahkan dengan koma
    displayHasil.innerText = angkaOutput.join(", ");

    // Munculkan kotak hasil yang tadinya tersembunyi
    boxHasil.classList.remove('d-none');
});