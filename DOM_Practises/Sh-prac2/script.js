
let btn = document.querySelector('button')
let card = document.querySelector('#card')

btn.addEventListener('click',function(){
    let c1 = Math.floor(Math.random()*256)    //max value can go up to 255 in rgb.
    let c2 = Math.floor(Math.random()*256)
    let c3 = Math.floor(Math.random()*256)  //these 3 will give random values of each 3 variables and because we use floor , it will give a proper number rather than decimal values.

    card.style.backgroundColor = `rgb(${c1},${c2},${c3})`   //rgb(0, 0, 0) this we are doing because we want random colors and used temporal literal to get values and we created those 3 variable to get random numbers and with that we will be creating each time different colors in card.
})

// remember the format of temperal literals `rgb(${value1},${value2},${value3})`. we use $ where we need/ask value?