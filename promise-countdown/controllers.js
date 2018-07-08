const { displayCountdown } = require("./views");

const timer = seconds => {
  return new Promise((resolve, reject) => {
    let countDown = setInterval(() => {
      if (seconds >= 0){
        resolve (displayCountdown(converter(seconds)))
        seconds --;
      } else {
        reject(clearInterval(countDown));
      }
    }, 1000);
  });
}
const converter = seconds => {
  let minute = (String(Math.floor(seconds / 60)));
  let second = (String(seconds % 60));
  if (minute < 10){
    if (second < 10){
      return `0${minute}:0${second}`    
    } else {
      return `0${minute}:${second}`    
    }
  } else {
    if (second < 10){
      return `${minute}:0${second}`    
    } else {
      return `${minute}:${second}`    
    }
  }
};


  

module.exports = {
  timer
};