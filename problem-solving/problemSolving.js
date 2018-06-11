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

  SET `scheduleStr` with ""
  FOR each `i` in `schedule`
    IF (NUMBER(`i`) > 0)
      SET `scheduleStr` with `scheduleStr` + ", " + `schedule` index `i`
    ELSE IF (Number(`i`) equals to 0)
      SET `scheduleStr` with `scheduleStr` + `schedule` index `i`
    END IF
  END for

  IF (`tanggal` % 5 equals to 0)
    DISPLAY "Tanggal" + " " + `tanggal` + ": " + "Tempat Fitness Tutup"
  ELSE IF (length of `schedule` === 0)
    DISPLAY "Tanggal" + " " + `tanggal` + ": "
  ELSE IF (`tanggal` % 5 not equals to 0)
    DISPLAY "Tanggal" + " " + `tanggal` + ": " + `scheduleStr`

  SET `tanggal` with `tanggal` + 1

END WHILE
*/

function schedule(firstOpen, names, interval){
  var tanggal = firstOpen
  var namesObj = {}
  
  for (var i in names){
    namesObj[names[i]] = [firstOpen, interval[i]]
  }
  
  while (tanggal <= 31){
    var schedule = []
    for (var j in namesObj){
      if (tanggal === namesObj[j][0]){
        schedule.push(j)
        namesObj[j][0] += namesObj[j][1]
      }
    }

    var scheduleStr = ''
    for (var i in schedule){
      if (Number(i) > 0){
        scheduleStr += ', ' + schedule[i]
      } 
      else if (Number(i) === 0){
        scheduleStr += schedule[i]
      }
    }

    var templateStr = `Tanggal ${tanggal}: `
    if (tanggal % 5 === 0){
      console.log(templateStr + 'Tempat Fitness Tutup')
    }
    else if (schedule.length === 0){
      console.log(templateStr)
    }
    else if (tanggal % 5 !== 0){
      console.log(templateStr + scheduleStr)
    }
  
    tanggal++
  }

  return '-list finished-'
}


console.log(schedule(7, ['Tono', 'Budi', 'Anton'], [2,4,5]))