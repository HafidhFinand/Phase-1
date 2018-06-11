function numberInWords(number) {
  const terbilang = [
    '',  // basically 0 & buat index sesuai numbernya
    'satu',
    'dua',
    'tiga',
    'empat',
    'lima',
    'enam',
    'tuju',
    'delapan',
    'sembilan',
    'sepuluh',
    'sebelas'
  ]

  var output = ''
  if (number === undefined) {
    return 'Input the number';
  }

  if (number < 12) {
    output += terbilang[number];
  }
  
  else if (number < 20) {
    output += terbilang[number - 10] + ' belas'
  }

  else if (number < 100) {
    let digitAwal = Math.floor(number / 10);
    let digitSisanya = number % 10;
    output += terbilang[digitAwal] + ' puluh ' + terbilang[digitSisanya];
  }
  
  else if (number < 200) {
    output += 'seratus ' + numberInWords(number - 100);
  }
  
  else if (number < 1000) {
    let digitAwal = Math.floor(number / 100);
    output += terbilang[digitAwal] + ' ratus ' + numberInWords(number % 100);
  }
  
  return output
}

// Driver code
console.log(numberInWords(11));
console.log(numberInWords(182));
console.log(numberInWords(456));
