const form = document.querySelector('#form');
const qrcodeElement = document.querySelector('#qrcode');
const btnSave = document.querySelector('#btn-save');
const loadDiv = document.querySelector('#load');

form.addEventListener('submit', generateQRCode);
btnSave.addEventListener('click', () => {
  btnSave.href = qrcodeElement.querySelector('img').src;
  btnSave.download = "qrcode.png";
});

function generateQRCode(e) {
  e.preventDefault();
  const url = document.querySelector('#urlInput').value;
  const size = document.querySelector('#size').value;
  const clrDark = document.querySelector('#colorDarkInput').value;
  const clrLight = document.querySelector('#colorLightInput').value;

  if (!url.trim()) {
    alert('Please enter a valid URL.');
    return;
  }

  loadDiv.style.display = 'flex';

  setTimeout(() => {
    loadDiv.style.display = 'none';
    qrcodeElement.innerHTML = '';
    
    const qr = new QRCode(qrcodeElement, {
      text: url,
      width: size,
      height: size,
      colorDark: clrDark,
      colorLight: clrLight,
      correctLevel: QRCode.CorrectLevel.L // Adjust error correction level if needed
    });
  }, 1000);
}
