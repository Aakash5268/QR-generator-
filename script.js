let imagebox = document.getElementById('imagebox');
let qrimg = document.getElementById('qrimg');
let Qrtext = document.getElementById('Qrtext');
function generateQr(){
    if(Qrtext.value.length>0){
    qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + Qrtext.value;
}
  else {
    alert("Please enter some text");
 }
}

Qrtext.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        generateQr();
    }
});
