// API URL untuk mendapatkan harga BTC dan ETH
const apiURL = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=idr';

// Fungsi untuk mengambil data harga crypto
async function getCryptoPrices() {
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        
        // Menampilkan harga BTC dan ETH
        document.getElementById('btc-price').textContent = `Rp ${data.bitcoin.idr.toLocaleString()}`;
        document.getElementById('eth-price').textContent = `Rp ${data.ethereum.idr.toLocaleString()}`;
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('btc-price').textContent = 'Data tidak tersedia';
        document.getElementById('eth-price').textContent = 'Data tidak tersedia';
    }
}

// Menjalankan fungsi saat halaman dimuat
window.onload = getCryptoPrices;
