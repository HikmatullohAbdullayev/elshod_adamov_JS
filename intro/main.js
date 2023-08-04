// Dars vaqtidagi vazifalar

// o'zgaruvchi ochish 
// let 

        // let ism = "Anvar";
        // console.log( ism);

// o'zgaruvchi ochish
// const 

        // const son = 234;
        // console.log( son);


// object ochish 
// objectlar o'zida ma'lum bir xususiyat va qiymatlar ni oladigan toplam. Masalan: "user" degan object ochildi uning ichida xususiyatlari (name , age, active , email, password) nomli xususiyatlari bor va ularning ("joe",15 , true ,"anvar@gmail.com", "12345!@#$") qiymatlari bor 
// !!!objectdagi malumotlar tartibsiz bo'ladi!!!

        // let user = {
        //     name: 'joe',
        //     age: 15,
        //     active: true,
        //     email: "anvar@gmail.com",
        //     password: "12345!@#$" ,

        // }
        // console.log(user);

// object ichidan ma'lum bir xususiyatni (qiymatni) olish uchun ==objectNomi.xususiyatNomi== yuziladi

        //   let user1 = {
        //     name: 'joe',
        //     age: 15,
        //     active: true,
        //     email: "anvar@gmail.com",
        //     password: "12345!@#$" ,

        // }
        // console.log(user1.email);

// Tepadagi holatni chiroylik jo'rinishi

        //   let user2 = {
        //     name: 'joe',
        //     age: 15,
        //     active: true,
        //     email: "anvar@gmail.com",
        //     password: "12345!@#$" ,

        // }
        // console.log(`
        // ismi: ${user2.name}
        // yoshi: ${user2.age}
        // email: ${user2.email}
        // email codi: ${user2.password}
        // active: ${user2.active}
        // `);


// massiv ochish
// massivlar ham huddi objectlarga o'xshagan bo'lib farqi 
// !!!massivdagi malumotlar tartiblangan bo'ladi!!!
// !!!massivdagi qiymatlar index bilan tartiblanadi!!!
// !!!dasturlashda tartib 0 dan boshlanadi!!!

        // let person = [
        //     'anvar',
        //     "password",
        //     21
            

        // ]
        // console.log(person);

// !!! massiv ichida object yokida objectni ichida massiv ochsa bo'ladi!!!


// Arifmetik amallar



// + qo'shish

        // console.log(2+3);

// - ayirish

        // console.log(3-2);

// *ko'paytirish

        // console.log(2*2);

// / bo'lish

        // console.log(10/5);

// % qoldiqli bolish

        // console.log(40%3);


    // let a = 2;
    // let b = 5;


    // console.log(a,"salom",b);

// Interpolatsiya 
// turli type`dagi malumotlarni console`ga chiqazish
// bundaing ichida birir bir o'zgaruvchini yozish yoki qandaydur amal bajarish mumkin

        // let c = 2;
        // let d = 5;

        // console.log(`c = ${c}`);
        // console.log(`d = ${d}`);

        // console.log(`${c} + ${d} = ${c + d} bo'ladi`);
        // console.log(`${c} - ${d} = ${c - d} bo'ladi`);
        // console.log(`${c} * ${d} = ${c * d} bo'ladi`);
        // console.log(`${c} / ${d} = ${c / d} bo'ladi`);
        // console.log(`${c} % ${d} = ${c % d} qoldiq bo'ladi`);




// Foydalanuvchidan malumot olish -- "prompt( )" 

// "prompt()" dan kiritiladigon qiymatlar string typeda bo'ladi (1-misoldagidek) 

// uni number typega o'zgartirish uchun "+prompt()" holatida yozish kerak (2-misoldagidek)

// 1-misol 

        // let d = prompt("d ga qiymat bering 'string' ")

        // console.log(d + 3);

// 2-misol 

        // let s = +prompt("s ga qiymat bering 'number' ")

        // console.log(`s ning qiymati ${s}`);
        // console.log(s + 3);
        // console.log(s - 3);
        // console.log(s * 3);
        // console.log(s / 3);
        // console.log(s % 3);

//qiymatga 1ni qo'shadi "++"

        // console.log(s++ );

//qiymatdan 1ni ayiradi "--"

        // console.log(s-- );

//qiymatni darsjaga oshiradi "**"

        // console.log(s ** 4);


// Math objecti 
// Matematik amallar bajarish mumkin 
// Math ning ichida (property) xususiyatlar va metodlar bor Masalan
// PI ning qiymatini chiqazadi 3.141592653589793

        // console.log(Math.PI);

// Ildiz ostini olib beradi

        // console.log(Math.sqrt(9));

//Darajaga oshirish 

    // let x = Number(prompt('istalgan bir sonni kiriting' ))
    // let y = Number(prompt('kiritilgan son uchun daraja kiriting' ))
    
    // console.log(Math.pow( x ,y));

// =====#####=====//

    // let k = Number(prompt('istalgan bir sonni kiriting kvadratga oshirish uchun' ))
   
    // console.log(Math.pow( k ,2));

//berilgan "Minus" sonlarni "Plus"ga o'girib beradi

        // console.log(Math.abs(-9));

//Berilgan sonni yuqoriga qarab butun (yaxlidlab) qilib beradi.
// 3.1 => 4 || 4.3 => 5 || 6.5 => 7

        // console.log(Math.ceil(-5));

// Berilgan sonni standart (real holatdagi) yaxlidlash

// 4.1 => 4 || 4.6 => 5 || 3.7 => 4 || 5.5 => 5

        // console.log(Math.round(4.1));

//Berilgan sonni pastga qarab yaxlidlash 
// 4.1 => 4 || 4.9 => 4 || 5.5 => 5

        // console.log(Math.floor(4.9));

// 0 va 1 raqamlari orasida har gal tasodifiy sonlarni chiqazadi "Random" 

    //    console.log(Math.random());

// Buni biz istagan sonlar orasida ham qilsa bo'ladi buning uchun "Math.random" Metodini "Math.floor" yoki "Math.ceil" ichiga yozib qavslardan "( )" kegin "*son" kiritamiz 
// Masalan 100

        // console.log(Math.floor(Math.random()*100));      
        // console.log(Math.ceil(Math.random()*100));      

//Darajaga oshirish "Math.pow" 
// Buning uchun "Math.pow( qiymat , daraja)" yoziladi
// Masalan: "Math.pow(2,3)" => 8

        //console.log(Math.pow(2,3));

//Darajaga tushurish (yokida ildiz olish)  bu ham "Math.pow( )"ga oxshash lekin farqi darajadan daraja o'rniga "1/2" yoziladi

        // console.log(Math.pow(9,1/2));

// toFixed - so'ngi ko'radiganimiz bu obyekt bizda bir nechta raqamlardan iborat qoldiqli sonlar bo'lgan holatda,o'sha qoldiqlardan nechtasini tanlab,yaxlitlab olish imkonini beradi.
// Quyidagi misol orqali yaxshiroq bilib oling.

        // let usd = 127.132571021;
        // console.log(usd.toFixed(4));

        // Yokida

        // console.log(Math.PI.toFixed(2));

        




