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

// function reverseStr(str) {
//     let result = "";

//     for (let i = str.length - 1; i >= 0; i--) {
//         result += str[i];
//     }

//     return result;
// }

// console.log(reverseStr("salom"));
// console.log(reverseStr("abc"));
// console.log(reverseStr(""));


// =================================================================================================

// 4) countVowels(str) — unlilar sonini topish
// Vazifa:
// countVowels(str) function yozing. U str qabul qiladi va string ichidagi unlilar (a, e, i,
// o, u) sonini qaytarsin.
// Shartlar:
// ● Katta-kichik harflarni bir xil hisoblang (A ham a).
// ● Unlilar faqat: a, e, i, o, u.
// ● return son qaytarsin.
// ● regex ishlatish mumkin, lekin ishlatmasangiz ham bo‘ladi.
// Misollar:
// ● countVowels("Salom") → 2 (a, o)
// ● countVowels("JAVA") → 2 (A, A)● countVowels("bbb") → 0

// function countVowels(str) {
//     const vowels = "aeiou";
//     let ozgaruvchi = 0;

//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i].toLowerCase())) {
//             ozgaruvchi++;
//         }
//     }

//     return ozgaruvchi;
// }

// console.log(countVowels("Salom"));
// console.log(countVowels("JAVA"));

// =========================================================================================================

// 5) findMax(arr) — eng katta sonni topish
// Vazifa:
// findMax(arr) function yozing. U arr (sonlardan iborat array) qabul qiladi va eng katta sonni
// qaytarsin.
// Shartlar:
// ● Math.max() ishlatmang.
// ● Array bo‘sh bo‘lsa null qaytaring.
// ● arr ichida kamida bitta son bo‘lishi mumkin.
// ● Loop bilan toping.
// Misollar:
// ● findMax([1, 5, 3]) → 5
// ● findMax([-10, -3, -7]) → -3
// ● findMax([]) → null

function findMax(arr) {
    if ()
}


