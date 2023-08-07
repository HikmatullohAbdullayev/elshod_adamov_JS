
//Vazifa-2	A soni berilgan. Quyidagi gapni to’g’ri yoki notog’riligini isbotlang. “A soni musbat”

// let sonA = Number(prompt("A ga son kirting"))

    // if (sonA >= 0){
    //     document.write("<h1>0 dan katta son</h1>")
    // } else if (sonA < 0){document.write("<h1>son 0 dan kichik</h1>")}
    // else{
    //     document.write("son kirting")
    // }



//Vazifa-3	A soni berilgan. Quyidagi gapni to’g’ri yoki notog’riligini isbotlang. “A soni juft”

    // if(sonA % 2 == 0){
    //     document.write("<h1>son juft</h1>")
    // }else{
    //     document.write ("<h1>son toq</h1>")
    // }


//Vazifa-4	A soni berilgan. Quyidagi gapni to’g’ri yoki notog’riligini isbotlang. “A soni 5 ga karrali”
//!!!Biroz qo'shimcha qildim!!!//

    // if (sonA % 2 == 0) {
    //     document.write("<h1>2ga karrali</h1>")
        
    // } else if ( sonA % 3 == 0) {
    //     document.write("<h1>son 3ga karrali</h1>")
        
    // }  else if ( sonA % 5 == 0) {
    //     document.write("<h1>son 5ga karrali</h1>")
        
    // } else if ( sonA % 7 == 0) {12345

    //     document.write("<h1>son 7ga karrali</h1>")
        
    // } else{
    //     document.write("<h1>boshqa son kiriting</h1>")
    // }


//Vazifa-5.	A va B sonlar berilgan. Quyidagi gapni tekshiring: “A > 2 va B<=3”

//sonA tepada berilgan

    // let sonB = Number(prompt("B ga qiymat kititing"))

    // if (sonA > 2 && sonB <= 3) {
    //     document.write("<h1>son A 2dan katta va son B 3ga teng yoki kichik</h1>")
    // } else if (sonA > 2 ) {
    //     document.write("<h1>son A 2 dan katta ammo son B 3 dan katta</h1>")
    // }else{
    //     document.write("<h1>son A 2dan kichik ammo son B 3dan katta yoki teng</h1>") }


//Vazifa-6.	A, B va C sonlar berilgan. Quyidagi ifoda to’g’rilini isbotlang. A < B < C

// let sonC = Number(prompt("C ga son kiriting"))

    // if (sonA < sonB && sonB < sonC){
    //     document.write("<h1> A < B < C </h1>")
    // }else{
    //     document.write("<h1>rost emas</h1>")

    // }

//Vazifa-7.	A va B sonlar berilgan. Quyidagi ifodani tekshiring: “A va B lar biri toq”


    // if (sonA % 2 !== 0 && sonB % 2 !== 0) {
    //     document.write("<h1> sonlar toq </h1>")
    // }else if (sonA % 2 !== 0 ){
    //     document.write("<h1> A soni toq</h1>")
    // }else if (sonB % 2 !== 0) {
    //     document.write("<h1>B soni toq</h1>")
    // }else{
    // confirm("son kirting")
        
    // }


//Vazifa-8.	A soni berilgan. Agarda musbat bo’lsa qiymati birga oshirilsin, aks holda o’zgarishsiz qolsin. Natijani chop eting

    // if (sonA > 0){
    //     sonA++
    //     document.write(`<h1> ${sonA}</h1>`)
    // }else{
    //     document.write(`<h1>${sonA}</h1>`)
    // }



//Vazifa-9.	A soni berilgan. Agarda musbat bo’lsa qiymati birga oshirilsin, aks holda ikkiga kamaytirilsin. Natijani chop eting

    // if (sonA > 0){ 
    //     sonA++
    //         document.write(`<h1> ${sonA}</h1>`)
    //     }else{
    //         sonA -=2
    //         document.write(`<h1>${sonA}</h1>`)
    //     }


//Vazifa-10.	A soni berilgan. Agarda musbat bo’lsa qiymati ikki barobar oshirilsin, aks holda 2 ga kamaytirilsin, agarda 0 ga teng bo’lsa, qiymatini 10 bilan almashtirilsin. Natijani chop eting


    // if ( sonA > 0   ){
    //     sonA += 2
    //     document.write(`<h1> ${sonA}</h1>`)
    // }else if ( sonA < 0){
    //     sonA -= 2
    //     document.write(`<h1>${sonA}</h1>`)
    // }else{
    //     sonA += 10
    //     document.write(`<h1>${sonA}</h1>`)
    // }


//Vazifa-11.	A va B sonlar berilgan. Ularning orasidan kattasini hisoblang


    // sonA > sonB ? document.write("sonA > sonB")
    //              : document.write("sonB > sonA")


//Vazifa-12. A, B va C sonlar berilgan. Ularning orasidan eng kichkinasi topilsin


    // if (sonA < sonB && sonA < sonC){
    //     document.write("A son kichkina")
    // } else if (sonB < sonA && sonB < sonC){
    //     document.write("B soni kichkina")
    // }else{
    //     document.write("C soni kichkina")
    // }


//Vazifa-13 rasm ekan

// let sonF = Number(prompt("F ga qiymat kirting"))

    // if ( sonF > 0){
    //     sonF =  2*Math.sin(sonF)
    //     document.write(sonF)
    // }else if (sonF < 0){
    //     sonF -= 6
    //     document.write(sonF)
    // }


//Vazifa-16 

// let sonN = Number(prompt("son kirting"))

    // if (sonN > 0 && sonN < 8) {
    //     if(sonN == 1){
    //         document.write("<h1>Dushanba</h1>")
    //     }else  if(sonN == 1){
    //         document.write("<h1>Dushanba</h1>")
    //     } else if(sonN == 2){
    //         document.write("<h1>Seshanba</h1>")
    //     } else  if(sonN == 3){
    //         document.write("<h1>Chorshanba</h1>")
    //     } else if(sonN == 4){
    //         document.write("<h1>Payshanba</h1>")
    //     } else if(sonN == 5){
    //         document.write("<h1>Juma</h1>")
    //     } else if(sonN == 6){
    //         document.write("<h1>Shanba</h1>")
    //     }else  if(sonN == 7){
    //         document.write("<h1>Yakshanba</h1>")
    //     }
    // }else{
    //     document.write("1 dan 7 gacha son kirting")
    // }
 

//Vazifa-17

        // if (sonN > 0 && sonN < 13){
        //     if (sonN == 1) {
        //         document.write("Yanvar")
                
        //     } else if (sonN == 2) {
        //         document.write("Fevral")
                
        //     }else if (sonN == 3) {
        //         document.write("Mart")
                
        //     }else if (sonN == 4) {
        //         document.write("Aprel")
                
        //     }else if (sonN == 5) {
        //         document.write("May")
                
        //     }else if (sonN == 6) {
        //         document.write("Iyun")
                
        //     }else if (sonN == 7) {
        //         document.write("Iyul")
                
        //     }else if (sonN == 8) {
        //         document.write("Avgust")
                
        //     } else if (sonN == 9) {
        //         document.write("Sentabr")
                
        //     }else if (sonN == 10) {
        //         document.write("Oktyabr")
                
        //     }else if (sonN == 11) {
        //         document.write("Noyabr")
                
        //     }else if (sonN == 12) {
        //         document.write("Dekabr")
                
        //     }
        // }else{
        //     document.write("1 dan 12 gacha bo'lgan son kirting")
        // }



//Vazifa-19	Bokschining vazni berilgan. Vazn qiymatiga qarab. Yengil vazn (60gacha), Birinchi o’rta vazn (64gacha), O’rta vazn (69gacha). Qaysi kategoriyaga to’g’ri kelishini aniqlang


    // let vazn = Number(prompt("Vazni kirting"))
    // if ( vazn > 0 && vazn < 100 ){
    //     if (vazn < 60 ) {
    //         alert("Yengil vazn")
    //     } else if (vazn <= 60 && vazn >= 64){
    //         alert("birinchi o'rta vazn")
    //     } else if (vazn > 64 && vazn <= 69) {
    //         alert("o'rta vazn")
            
    //     }else if (vazn >= 70 )
    // alert("og'ir vazn")

    // }else{
    //     document.write("<h1>vazn kirting 1 dan 100 gacha </h1>")
    // }



