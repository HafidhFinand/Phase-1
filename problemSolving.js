/*
Pseudocode:
SET `firstOpen` with 7
SET `tanggal` with 7
SET `tono` with `firstOpen`
SET `anton` with `firstOpen`
SET `budi` with `firstOpen`

WHILE (tanggal <= 31)
  SET `schedule` with empty array
  IF (`tanggal` === `tono`)
    PUSH "Tono" to `schedule`
    SET `tono` equals to `tono` + 2
  END IF

  IF (`tanggal` === `anton`)
    PUSH "Anton" to `schedule`
    SET `anton` equals to `anton` + 4
  END IF

  IF (`tanggal` === `budi`)
    PUSH "Budi" to `schedule`
    SET `budi` equals to `budi` + 5
  END IF

  SET `result` with ""
  FOR each `i` in `schedule`
    IF (NUMBER(`i`) > 0)
      SET `result` with `result` + ", " + `schedule` index `i`
    ELSE IF (Number(`i`) equals to 0)
      SET `result` with `result` + `schedule` index `i`
    END IF
  END for

  IF (`tanggal` % 5 equals to 0)
    DISPLAY "Tanggal" + " " + `tanggal` + ": " + "Tempat Fitness Tutup"
  ELSE IF (length of `schedule` === 0)
    DISPLAY "Tanggal" + " " + `tanggal` + ": "
  ELSE IF (`tanggal` % 5 not equals to 0)
    DISPLAY "Tanggal" + " " + `tanggal` + ": " + `result`

  SET `tanggal` with `tanggal` + 1

END WHILE
*/

var firstOpen = 7;
var tanggal = 7
var tono = firstOpen;
var anton = firstOpen;
var budi = firstOpen;
var tutup = 'Tempat Fitness Tutup';


while (tanggal <= 31){
  var schedule = [];
  if (tanggal === tono){
    schedule.push('Tono')
    tono += 2
  }
  if (tanggal === anton){
    schedule.push('Anton')
    anton += 4
  }
  if (tanggal === budi){
    schedule.push('Budi')
    budi += 5
  }


  var result = ''
  for (var i in schedule){
    if (Number(i) > 0){
      result += ', ' + schedule[i]
    } else if (Number(i) === 0){
      result += schedule[i]
    }
  }


  if (tanggal % 5 === 0){
    console.log('Tanggal' + ' ' + tanggal + ': ' + 'Tempat Fitness Tutup')
  }
  else if (schedule.length === 0){
    console.log('Tanggal' + ' ' + tanggal + ': ')
  }
  else if (tanggal % 5 !== 0){
    console.log('Tanggal' + ' ' + tanggal + ': ' + result)
  }
  tanggal += 1
}
