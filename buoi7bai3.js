let randomNumber = Math.floor(Math.random() * 10) + 1;

function guessNumber() {
  const userInput = document.getElementById("userInput").value.trim();
  const messageDiv = document.getElementById("message");

  const userNumber = parseInt(userInput);

  if (isNaN(userNumber) || userNumber < 1 || userNumber > 10) {
    messageDiv.innerHTML = "Vui lòng nhập số từ 1 đến 10.";
    return;
  }

  if (userNumber === randomNumber) {
    messageDiv.innerHTML = "Chúc mừng! Bạn đã đoán đúng!";
  } else {
    messageDiv.innerHTML = "Sai rồi! Hãy đoán lại!";
  }
}
