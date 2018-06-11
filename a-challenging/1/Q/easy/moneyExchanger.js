
function moneyExchanger (yangDitukar, yangDiutamakan){
  var moneyArr = [
    {
      pecahan: 50000,
      jumlah: 2,
    },
    {
      pecahan: 20000,
      jumlah: 3,
    },
    {
      pecahan: 10000,
      jumlah: 5,
    },
    {
      pecahan: 5000,
      jumlah: 8,
    },
    {
      pecahan: 2000,
      jumlah: 6,
    },
    {
      pecahan: 1000,
      jumlah: 10,
    }
  ]

  var sisaMoney = yangDitukar;
  var output = [];

  if (yangDiutamakan === undefined){
    for (let i in moneyArr){
      while (sisaMoney >= moneyArr[i].pecahan){
        output.push(moneyArr[i].pecahan);
        sisaMoney -= moneyArr[i].pecahan;
      }
    }
    return output
  }
  else {
    let indexMulai;
    for (let i in moneyArr){
      if (yangDiutamakan === moneyArr[i].pecahan){
        indexMulai = +i;
      }
    }
    for (let i = indexMulai; i < moneyArr.length; i++){
      while (sisaMoney >= moneyArr[i].pecahan && moneyArr[i].jumlah > 0){
        output.push(moneyArr[i].pecahan);
        sisaMoney -= moneyArr[i].pecahan;
        moneyArr[i].jumlah --
      }
      if (i === moneyArr.length - 1 && sisaMoney > 0){
        return 'Uang pecahan tidak mencukupi'
      }
    }
    return output
  }

}

console.log(moneyExchanger(100000))   
//hasilnya : [ 50000, 50000 ]

console.log(moneyExchanger(100000, 20000))   
//hasilnya : [ 20000, 20000, 20000, 10000, 10000, 10000, 10000 ]

console.log(moneyExchanger(100000, 5000))   
//hasilnya : Uang pecahan tidak mencukupi