const converter = seconds => {
  let hour = Math.floor(seconds / 60);
  var minute = seconds % 60;
  return `${hour}:${minute}`
};

console.log(converter(166))
