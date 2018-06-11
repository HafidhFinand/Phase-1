const { displayCountdown } = require("./views");

const timer = seconds => {
  let countDown = setInterval(function(){
    if (seconds >= 0){
      displayCountdown(converter(seconds));
      seconds --;
    } else {
      clearInterval(countDown);
    }
  }, 1000)
};

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
