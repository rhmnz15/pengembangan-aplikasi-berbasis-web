let lari = 60 / 5
let pushup = 200 / 30
let plank = 5
let waktulari = 6
let waktupushup = 6
let waktuplank = 6
let aktifitas = 'lari'
let aktifitas2 = 'pushup'
let aktifitas3 = 'plank'
let kaloridibakarlari
let kaloridibakarpushup
let kaloridibakarplank
let kaloriawal = 1000
let jumlahkalori1


if(aktifitas == 'lari'){
    kaloridibakarlari = lari * waktulari
    jumlahkalori1 = kaloriawal - kaloridibakarlari
}
if(aktifitas2 == 'pushup'){
    kaloridibakarpushup = pushup * waktupushup
}
if(aktifitas3 == 'plank'){
    kaloridibakarplank= plank * waktuplank
}
console.log(`Olahraga yang anda lakukan adalah olahraga ${aktifitas},${aktifitas2} dan ${aktifitas3}
serta total Jumlah kalori anda sekarang adalah ${jumlahkalori1 - kaloridibakarpushup - kaloridibakarplank}`);