// let btn = document.createElement('button')

// btn.innerHTML = "nma gap"

// const color = [
//     "red", "yellow", "black", "blue"
// ]
// const uzunligi = color.length

// btn.style.fontSize = "24px"
// btn.style.color = "red"
// btn.onclick = () => {
//    let sonColor= Math.abs(Math.ceil(Math.random()*uzunligi -1))
//    btn.style.backgroundColor = color[sonColor]
// }

// document.body.append(btn)



// let btn = document.createElement('button')

// btn.innerHTML = "nma gap"
// btn.style.fontSize = "24px"
// btn.style.color = "red"

// const color = [
//     "red", "yellow", "black", "blue"
// ]
// const uzunligi = color.length

// btn.addEventListener('click' , () => {
//        let sonColor= Math.abs(Math.ceil(Math.random()*uzunligi -1))
//        btn.style.backgroundColor = color[sonColor]
//     })
// // !!!YOKIDA!!!
// // btn.onclick = () => {
// //    let sonColor= Math.abs(Math.ceil(Math.random()*uzunligi -1))
// //    btn.style.backgroundColor = color[sonColor]
// // }

// document.body.append(btn)



















let inpIsm = document.getElementById ("Ism")
let inpFamilya = document.getElementById('Familya')

//inputga kiritilgan har bir harfni hisobga oladi
// inpFamilya.oninput = () => {
//     console.log(inpFamilya.value);
// }
// console.log(inpFamilya);

//inputga kirtilgan umumiy malumotni oladi
 let test = []
inpFamilya.onblur = () => { 

    test.push(inpFamilya.value)
}
inpIsm.onblur = () => {
    
    test.push(inpIsm.value)
}
console.log(test);


// console.log(inpFamilya);