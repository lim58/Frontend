let num = 0;

function showTime() {
  console.log(`${num++}초가 지났습니다.`);
  if (num > 10) {
    clearInterval(tId);
  }
}

const tId = setInterval(showTime, 1000);
