// for(var i = 0; i < 10; i++) {
//    console.log(i);
//  }
//j = 0
//while(j < 10) {
//    j++
//    console.log(j)
//  }
//var x = 100;
//do {
  //  console.info("всем привет");
// } while(x < 50);  // цикл сделает одну итерацию
// for(var i = 10; i <= 20; i += 2) {
//     if(i > 15)
//     break;
// console.log(i);
// }


for(var i = 10; i <= 20; i += 2) {
    if(i % 2 == 0)
    continue;

    console.log(i);
}