const container = document.querySelector(".container");
const generateBtn = document.querySelector(".btn");
const qrInput = document.getElementById("inp");

generateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let qrValue = qrInput.value;
  if (!qrValue) return;
  const image = document.createElement("img");
  // image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
  document.querySelector(
    ".qr"
  ).children[0].innerHTML = `<img src=https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}/>`;

  // console.log(document.querySelector(".qr").children[0]);
});
