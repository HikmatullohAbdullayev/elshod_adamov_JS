//Massiv 
// massiv bu malulotlarni tartib bilan joylashuvi
// massiv ochish uchun o'zgaruvchi nomi undan kegin  qavslar ( [...] ) ochiladi qavs ichiga qiymatlar beriladi 
// masalan
//         let massiv = [true, null,12,2.1,"bu massiv"]

// massivlar ichidagi malumotlar turi (type) turli xil bolishi mumkin (Number, String, Boolean, BigInt, undefined, null) va massivdagi malumotlar indexlar bilan tartiblanadi va tartiblash har doim 0 dan boshlanadi
// masalan
//          let massiv = [true, null,12,2.1,"bu massiv"]
//          let massiv = [  0,   1,  2, 3,    4]

// massiv ichidagi qaysidur malumotni olish uchun   console.log(o'zgaruvchi || massiv nomi [index raqami]);
// masalan:
        // let massiv = [true, null,12,2.1,"bu massiv"]
        // console.log(massiv[0]);
        // natija=> true

        // let massiv = [true, null,12,2.1,"bu massiv"]
        // console.log(massiv[3]);
        // natija=> 2.1

// Agar massivda nechta malumot borligi aniq bolmasa (.length) method dan foydalansa boladi 
// masalan 
        // let massiv = [true, null,12,2.1,"bu massiv"]
        // console.log(massiv.length);
        // natija =>> 5
        // massivda 5 ta malumot bor

        // let massiv = [true, null,12,2.1,"bu massiv",23,45]
        // console.log(massiv.length);
        // natija =>> 7
        // massivda 7 ta malumot bor


// massivdagi barcha malumotlarmi korish uchun forda aylantirish kerak 

//         let massiv = [true, null,12,2.1,"bu massiv",23,45]
//         console.log(massiv.length);
//         for (let i = 0;i<massiv.length;i++){
//              console.log(massiv[i]);
//         }

// natija:  7
//         true
//         null
//         12
//         2.1
//         bu massiv 
//         23
//         45



// masala-1: massivdagi raqamlar yigindisini chiqazib berish

    // let arr = [1,2,3,4]
    // let count = 0
    // for (let i = 0;i<arr.length;i++){
    //     count+= arr[i]
    // }
    // console.log(count);

// natija=> 10 (1+2+3+4=10)



//masala-2 massivdagi juft va toq sonlarni chiqazish va ularni yegindisini topish

    // let arr = [1,2,3,4,5,5,65,6,77,78]
    // let count = 0
    // let juft = 0
    // let toq = 0
    // for (let i =0; i<arr.length;i++){
    //     if (arr[i] % 2 == 0) {
        
    //         juft += arr[i]
            
    //     }else{
    
    //         toq += arr[i]
    //     }
    // }
    // console.log(`massivdagi juft sonlar yeg'indisi ${juft} ga teng
    // massivdagi toq sonlar yeg'indisi ${toq} ga teng`);




