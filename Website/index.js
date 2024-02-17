// on window load
window.onload = function() {
  
  let randomGameLink = generateRandomGameLink();
  generateQRCode(randomGameLink);

  // Set a timer to redirect after 3 mintues
  setTimeout(function() {
      window.location.href = "invalid.html";
  }, 180000);

}


function games_getter(num_games) {
    games = [];
    for (let i = 0; i < num_games; i++) {
        games.push("https://laytongb.github.io/hackathon-2024-proj/" +  i);
    }
    return games;

}



function generateRandomGameLink() {
    let num_games = 2; 
    let gamesArray = games_getter(num_games);
    let randomIndex = Math.floor(Math.random() * num_games);

    return gamesArray[randomIndex];
}



function generateQRCode(text) {
  let qrCodeContainer = document.getElementById('qrCodeContainer');
  qrCodeContainer.innerHTML = ''; // Clear the previous QR code
  if (text.trim() !== '') {
      const imgElement = document.createElement('img');
      imgElement.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + encodeURIComponent(text);
      qrCodeContainer.appendChild(imgElement);
  }
}
