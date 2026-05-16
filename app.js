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

// function findMax(arr) {
//     if (arr.length === 0) return null;

//     let max = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }

//     return max;
// }

// console.log(findMax([1, 5, 3]));
// console.log(findMax([-10, -3, -7]));
// console.log(findMax([]));

// =================================================================================================================

// 6) To‘liq CRUD masala (bitta data bilan)
// “Student Manager” (DOMsiz CRUD)
// Sizda students degan array bor. Har bir student quyidagi ko‘rinishda bo‘ladi:
// {
// id: 1,
// name: "Ali",
// age: 16,
// score: 85
// } S
// iz students bilan ishlaydigan 4 ta asosiy CRUD function yozishingiz kerak

// let students = [];
// let nextId = 1;

// function addStudent(name, age, score) {
//   const student = {
//     id: nextId,
//     name: name,
//     age: age,
//     score: score
//   };
//   students.push(student);
//   nextId++;
//   return student;
// }

// function getStudents() {
//   return students;
// }

// function getStudentById(id) {
//   for (let i = 0; i < students.length; i++) {
//     if (students[i].id === id) {
//       return students[i];
//     }
//   }
//   return null;
// }

// function updateStudent(id, newData) {
//   for (let i = 0; i < students.length; i++) {
//     if (students[i].id === id) {
//       if (newData.name !== undefined)  students[i].name  = newData.name;
//       if (newData.age !== undefined)   students[i].age   = newData.age;
//       if (newData.score !== undefined) students[i].score = newData.score;
//       return students[i];
//     }
//   }
//   return null;
// }

// function deleteStudent(id) {
//   for (let i = 0; i < students.length; i++) {
//     if (students[i].id === id) {
//       students.splice(i, 1);
//       return true;
//     }
//   }
//   return false;
// }

// // CREATE
// addStudent("Ali", 16, 85);
// addStudent("Vali", 17, 90);
// addStudent("Sardor", 15, 78);

// // READ
// console.log(getStudents());

// console.log(getStudentById(2))

// updateStudent(1, { score: 95 });
// console.log(getStudentById(1));

// deleteStudent(2);
// console.log(getStudents());

// ===================================================================================================================

// 6.1) CREATE — createStudent(name, age, score)
// Vazifa:
// Yangi student qo‘shing.
// Shartlar:
// ● name bo‘sh bo‘lmasin (bo‘sh bo‘lsa "Invalid name" qaytaring).
// ● age 5 dan kichik bo‘lmasin (kichik bo‘lsa "Invalid age" qaytaring).
// // ● score 0..100 oralig‘ida bo‘lsin (aks holda "Invalid score" qaytaring).
// // ● id avtomatik berilsin:
// // ○ array bo‘sh bo‘lsa id = 1
// // ○ aks holda oxirgi element id + 1
// // ● yangi student objectni arrayga qo‘shing va o‘sha objectni return qiling.

// let students = [];

// function createStudent(name, age, score) {

//     if (name === "" || name === undefined) {
//         return "Invalid name";
//     }

//     if (age < 5) {
//         return "Invalid age";
//     }

//     if (score < 0 || score > 100) {
//         return "Invalid score";
//     }

//     const id =
//         students.length === 0
//             ? 1
//             : students[students.length - 1].id + 1;

//     const student = {
//         id: id,
//         name: name,
//         age: age,
//         score: score
//     };

//     students.push(student);

//     return student;
// }

// console.log(createStudent("Ali", 15, 90));
// console.log(createStudent("Vali", 14, 80));
// console.log(students);

// =======================================================================================================================

// 6.2) READ — getStudentById(id)
// Vazifa:
// id bo‘yicha studentni topib qaytaring.
// Shartlar:
// ● topilsa student objectni return qiling.
// ● topilmasa null qaytaring.

// function getStudentById (id){
//     for ( let i = 0; i> students.length; i++){
//         if (students[i].id === id){
//             return students[i]
//         }
//     }
//     return null
// }

// console.log(getStudentById(1));

// ===================================================================================================================

// 6.3) UPDATE — updateStudent(id, data)
// Vazifa:
// id bo‘yicha student toping va data ichidagi qiymatlar bilan yangilang.
// Shartlar:
// ● data ichida quyidagilar kelishi mumkin: name, age, score
// ● Faqat kelgan fieldlarni yangilang, qolganiga tegmang.
// ● Agar student topilmasa "Student not found" qaytaring.
// ● Yangilangan student objectni return qiling.
// ● Update paytida ham validatsiya bo‘lsin:○ name bo‘sh bo‘lsa "Invalid name"
// ○ age 5 dan kichik bo‘lsa "Invalid age"
// ○ score 0..100 oralig‘ida bo‘lmasa "Invalid score"

// let students = [
//     { id: 1, name: "Ali", age: 20, score: 85 },
//     { id: 2, name: "Vali", age: 18, score: 70 },
//     { id: 3, name: "Guli", age: 22, score: 60 }
// ];

// function updateStudent(id, data) {
//     for (let i = 0; i < students.length; i++) {
//         if (students[i].id === id) {

//             if (data.name !== undefined) {
//                 if (data.name === "") return "Invalid name";
//                 students[i].name = data.name;
//             }

//             if (data.age !== undefined) {
//                 if (data.age < 5) return "Invalid age";
//                 students[i].age = data.age;
//             }

//             if (data.score !== undefined) {
//                 if (data.score < 0 || data.score > 100) return "Invalid score";
//                 students[i].score = data.score;
//             }

//             return students[i];
//         }
//     }
//     return "Student not found";
// }

// console.log(updateStudent(1, { name: "Sardor" })); 
// console.log(updateStudent(2, { score: 95 }));     
// console.log(updateStudent(3, { age: 10 }));        


// ============================================================================================================================

// 6.4) DELETE — deleteStudent(id)
// Vazifa:
// id bo‘yicha studentni o‘chiring.
// Shartlar:
// ● agar topilsa, arraydan o‘chirib, o‘chirilgan studentni return qiling
// ● topilmasa null qaytaring


let students = [
    { id: 1, name: "Ali", age: 20, score: 85 },
    { id: 2, name: "Vali", age: 18, score: 70 },
    { id: 3, name: "Guli", age: 22, score: 60 }
];

function deleteStudent(id) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            let deleted = students[i];
            students.splice(i, 1);
            return deleted;
        }
    }
    return null;
}

console.log(deleteStudent(2));  
console.log(students);          
console.log(deleteStudent(99)); 


