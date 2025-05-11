let captchaValue = '';
let timerInterval;

function openPaymentModal() {
  captchaValue = Math.random().toString(36).substring(2, 8).toUpperCase();
  document.getElementById('captchaCode').innerText = captchaValue;
  document.getElementById('captchaInput').value = '';
  document.getElementById('paymentModal').style.display = 'block';
  document.getElementById('paymentSection').style.display = 'none';
}

function verifyCaptcha() {
  const input = document.getElementById('captchaInput').value.trim().toUpperCase();
  if (input === captchaValue) {
    startTimer(3 * 60); // 3 minutes
    document.getElementById('paymentSection').style.display = 'block';
  } else {
    alert('Incorrect CAPTCHA. Please try again.');
  }
}

function startTimer(duration) {
  let time = duration;
  timerInterval = setInterval(() => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    document.getElementById('timer').innerText =
      `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    if (--time < 0) {
      clearInterval(timerInterval);
      window.location.href = "https://colab.research.google.com/github/atharvaghayal/Advanced-Python-and-Aptitudes/blob/main/Python_Practice_AtoZ_py.ipynb#scrollTo=jCeDZ3AGDPqq"; // Or Google Colab link
    }
  }, 1000);
}