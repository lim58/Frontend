function hasCola(str) {
  if (str.indexOf("콜라") > -1) {
    return console.log("콜라가 들어있는 문장입니다.");
  } else {
    return console.log("문장 넘김");
  }
}

hasCola("콜라");
hasCola("사이다");
