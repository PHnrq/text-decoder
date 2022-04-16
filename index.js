function onEncrypt(){
  let userInput = document.getElementById("userInput").value;
  let encrypted = userInput.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/o/g, 'ober').replace(/u/g, 'ufat').replace(/a/g, 'ai');
  document.getElementById("showMessage").innerHTML = encrypted;
}

function onDecrypt(){
    let userInput = document.getElementById("userInput").value;
    let decrypted = userInput.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ober/g, 'o').replace(/ai/g, 'a').replace(/ufat/g, 'u');
    document.getElementById("showMessage").innerHTML = decrypted;
}