Logic - Shape of W

## Skor Total 40

Buat sebuah function bernama reorderingLetter, yang akan menerima 2 parameter : string dan angka (asumsi nama parameter : str dan totalLevel). Buat code di dalam function reorderingLetter yang akan mengurutkan huruf berdasarkan level nya. Saat ini, totalLevel maksimum 6, dan maksimum jumlah karakter string nya 100.

Driver code :

function reorderingLetter(str, totalLevel) {
  //your code here...
}


Contoh 1 :
reorderingLetter(“DARWINFOX”, 3)

//result yang diharapkan : DIXAWNORF

Ilustrasi :
D    	     I  	     X
    A	  W     N   O
      R		      F

Maka,
Level 1 : D, I, X
Level 2 : A, W, N, O
Level 3 : R, F


Contoh 2 :
reorderingLetter(“ABCDEFGHIJKLMNOPQ”, 5)

//result yang diharapkan : AIQBHJPCGKODFLNEM

Ilustrasi :
A                      I                     Q
   B               H    J                 P
      C         G          K           O
         D    F                L     N
            E                       M

Maka,
Level 1 : A, I, Q
Level 2 : B, H, J, P
Level 3 : C, G, K, O
Level 4 : D, F, L, N
Level 5 : E, M
