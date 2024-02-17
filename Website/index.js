function games(num_games) {
    games = []   

    for (let i = 0; i < num_games; i++) {
        games.push("https://laytongb.github.io/hackathon-2024-proj/" + i );
    }
    return games;

}


console.log(games(5));



document.querySelector("#generateBtn").addEventListener("click",  () => {
  let qrInput = document.querySelector('#qrInput').value;
  generateQRCode(qrInput);

});


function generateQRCode(text) {
  let qrCodeContainer = document.getElementById('qrCodeContainer');
  qrCodeContainer.innerHTML = ''; // Clear the previous QR code
  if (text.trim() !== '') {
      const imgElement = document.createElement('img');
      imgElement.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + encodeURIComponent(text);
      qrCodeContainer.appendChild(imgElement);
  }
}
