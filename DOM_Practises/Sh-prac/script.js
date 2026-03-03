
let flag = 0

function running(){
    if(flag == 1){
    console.log("Function running good....");}
    else {
        console.log("Function is not running....");
    }
}

let button = document.querySelector('button')
let button2 = document.querySelector('#card button')
let box = document.querySelector('.box')
let h5 = document.querySelector('h5')
let h2 = document.querySelector('h2')



button.addEventListener('click',function(){
    if(flag == 0){
    box.style.backgroundColor = 'orange'
    box.innerHTML = "Changed color"
    box.style.color = "#fff"
    box.style.display = "flex"         // 👈 flex to center
    box.style.alignItems = "center"    // vertical center
    box.style.justifyContent = "center"// horizontal center
    box.style.textAlign = "center" 
    running();
    flag = '1'
    }
    else{
    box.style.backgroundColor = '#fff'
    box.innerHTML = ""
    box.style.color = "#fff"
    running();
    flag = '0'
    }
})
 
button2.addEventListener('click', function(){
    if(flag == 0){
        h5.innerHTML = 'Friends'
        h5.style.color = "Green"
        h2.style.color = 'yellow'
        button2.innerHTML = 'Remove Friend'
        button2.style.margin = '5px 40px'
        flag = '1'
    }
    else{
        h5.innerHTML = 'Stranger'
        h5.style.color = "Red"
        h2.style.color = 'white'
        button2.innerHTML = 'Add Friend'
        button2.style.margin = '5px 50px'
        flag = '0'
    }
})
