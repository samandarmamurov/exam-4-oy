// function sumTo (n){
//     if (n <= 0){
//         return 0
//     }
//         return n+ sumTo (n-1)
// }
// // console.log(sumTo(5));
// console.log(sumTo(1));
// console.log(sumTo(0));
// console.log(sumTo(-10));





//========================================================================================================

// 2) isPrime(n) — tub son tekshirish
// Vazifa:
// isPrime(n) function yozing. U n sonini qabul qiladi va n tub son bo‘lsa true, aks holda
// false qaytarsin.
// Shartlar:
// ● Tub son: 1 dan katta va faqat 1 va o‘ziga bo‘linadigan son.
// ● n butun son bo‘ladi.
// ● n <= 1 bo‘lsa, false qaytaring.
// ● Juda katta tekshiruv qilmaslik uchun tekshiruvni i*i <= n usulida qiling (ixtiyoriy, lekin
// tavsiya).
// Misollar:
// ● isPrime(2) → true
// ● isPrime(3) → true
// ● isPrime(4) → false● isPrime(1) → false
// ● isPrime(17) → true





    // function isPrime (n){
    //     if  (n<= 1) {
    //         return false
            
    //     }
    //     for ( let i = 2; i*i <= n; i++ ){
    //         if ( n % i ===0 ){
    //             return false
    //         }
    //     }
    //     return true
    // }
    // console.log(isPrime(2));
    // console.log(isPrime(3));
    // console.log(isPrime(4));
    // console.log(isPrime(17));


    // =========================================================================================================


//     3) reverseStr(str) — stringni teskari qilish
// Vazifa:
// reverseStr(str) function yozing. U str (string) qabul qiladi va stringni teskari qilib
// qaytarsin.
// Shartlar:
// ● split(), reverse(), join() ishlatmang.
// ● Loop (for) yoki while ishlatib bajaring.
// ● Natijani return qiling.
// Misollar:
// ● reverseStr("salom") → "molas"
// ● reverseStr("abc") → "cba"
// ● reverseStr("") → ""

function reverseStr (str){
    let result=""
    for (let i = str.length - 1; i >= 0; )
        result+= str
}

console.log(reverseStr("salom"));
console.log( reverseStr("abc"));
console.log( reverseStr(""));


