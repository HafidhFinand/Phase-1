function sleep (milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function clearScreen () {
  // Un-comment this line if you have trouble with console.clear();
  // return process.stdout.write('\033c');
  console.clear();
}

function raceSimulation (text) {
  let output = {}

  let indexStart = 0;
  let indexEnd = 0;
  let strArr = [];
  for (let i = 0; i < text.length; i++){
    if (text[i] === ','){
      indexEnd = Number(i);
      let input = text.slice(indexStart, indexEnd);
      strArr.push(input);
      indexStart = Number(i) + 1;
    }
    if (i === text.length - 1){
      let input = text.slice(indexStart);
      strArr.push(input);
    }
  }

  let name = strArr[0];
  let speed = strArr.slice(1);

  let totalSpeed = 0;
  for (let i = 1; i < strArr.length; i++){
    totalSpeed += Number(strArr[i]);
  }

  var timer = 1;
  output['Driver'] = name;
  output['Time'] = timer += 1;
  output['Top Speed'] = speed[strArr.length - 1];
  output['Current Speed'] = speed[strArr.length - 1]
  output['Avg Speed'] = (totalSpeed / (strArr.length - 1)).toFixed(2);

  return [name, speed]
}


function getData (arr){
  let name = arr[0]
  let speedArr = arr[1]
  let timer = 1

  let topSpd = {top: Number(speedArr[0])}
  let currentTotalArr = 1;
  let totalSpd = Number(speedArr[0]);

  for (let i = 0; i < speedArr.length; i++){
    console.log(`Driver : ${name}`)
    console.log(`Time : ${timer}s`)
    timer ++
    console.log(`Current Speed : ${speedArr[i]}`)
    console.log(`Top Speed : ${topSpd.top}`)
    if (Number(speedArr[i]) > topSpd.top){
      topSpd.top = Number(speedArr[i])
    }
    console.log(`Avg Speed : ${(totalSpd / currentTotalArr).toFixed(2)}`)
    currentTotalArr += 1
    totalSpd += Number(speedArr[i])
    if(i === speedArr.length - 1){
      console.log('\n FINISHED')  
    }
    sleep(100)
    console.clear()

    
    
  }
}


const text = 'Fujiwara Takumi,0,20,45,70,80,100,120,100,100,90,100,110,120,140,110,90,75,70,80,90,100,110,140,145,150,150,150,110,95,70,60,60,60,60,55,60,60,75,100,120,135,145,145,150,150,150,160,170,180,180,180,190,194,196,190,180,160,120,95,100,120,130,160,165,170,170,180,190,194,195,196';

getData(raceSimulation (text))
