const listBarang = [
    { kode: '001', nama: 'Barang A', harga: 10000 },
    { kode: '002', nama: 'Barang B', harga: 20000 },
    { kode: '003', nama: 'Barang C', harga: 30000 }
];

function data(kodeBarang) {
    const barang = listBarang.find(item => item.kode === kodeBarang);
    return barang ? barang.harga : 0;
}

function kirim() {
    const input_kode = document.getElementById("input_kode").value;
    const input_jumlah = document.getElementById("input_jumlah").value;

    const harga_barang = data(input_kode);
    const total_harga = parseInt(input_jumlah) * harga_barang;

    alert("Total Belanja: " + total_harga);

    const uang = prompt("Masukkan uang :");

    if (uang === null || uang === '') {
        alert("Input uang tidak valid atau dibatalkan.");
        return;
    }

    uang = parseInt(uang);

    if (isNaN(uang)) {
        alert("Input uang tidak valid.");
        return;
    }

    let kembalian = uang - total_harga;

    if (kembalian >= 0) {
        alert(
            "\nKembalian: " + kembalian
        );
    } else {
        alert("Uang yang diberikan kurang.");
    }
}

