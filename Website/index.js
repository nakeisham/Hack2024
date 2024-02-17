arr = [];




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
