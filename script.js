function showMessage() {
    document.getElementById('special-message').classList.toggle('hidden');
}

function blowCandles() {
    var candles = document.querySelector('.candles-img');
    candles.classList.add('candles-out');  // Fade out the candles
    document.getElementById('wishButton').innerHTML = "Candles Blown! 🎉";
}
