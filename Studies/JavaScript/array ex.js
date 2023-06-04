const box = ["과", "제", "하", "기", "싫", "음"];

box[0]; //결과 : 과
box[3]; //결과 : 기
box[10]; //결과 : underfined

box.includes("o"); //결과 : false
box.push("o"); //결과 : ["과","제","하","기","싫","음","o"]
box.pop(); // 결과 : ["과","제","하","기","싫","음"]

box.length; //결과 : 6
