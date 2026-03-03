// let arr = ['MI','CSK','RR','KKR','DC','PBKS','LSG','RCB','SRH','GT']
let teams = [
    {                                                                                  //we have created here array of objects of ipl teams
        team: "MI",
        primary: "#004BA0",      // Blue
        secondary: "#D1AB3E"     // Gold
    },
    {
        team: "CSK",
        primary: "#F9CD05",      // Yellow
        secondary: "#1C1C1C"     // Dark Grey
    },
    {
        team: "RCB",
        primary: "#DA1818",      // Red
        secondary: "#000000"     // Black
    },
    {
        team: "KKR",
        primary: "#3A225D",      // Purple
        secondary: "#D4AF37"     // Gold
    },
    {
        team: "RR",
        primary: "#EA1A85",      // Pink
        secondary: "#004C93"     // Blue
    },
    {
        team: "DC",
        primary: "#17449B",      // Blue
        secondary: "#EF1B23"     // Red
    },
    {
        team: "PBKS",
        primary: "#ED1B24",      // Red
        secondary: "#A7A9AC"     // Silver
    },
    {
        team: "SRH",
        primary: "#F26522",      // Orange
        secondary: "#000000"     // Black
    },
    {
        team: "GT",
        primary: "#1C1C1C",      // Dark Navy
        secondary: "#A7854F"     // Gold
    },
    {
        team: "LSG",
        primary: "#00AEEF",      // Light Blue
        secondary: "#FFCC00"     // Yellow
    }
];

         //let num not here because if it is here, it will only run once when button clicked and the value remains same!

let h1 = document.querySelector('h1')
let btn = document.querySelector('button')

btn.addEventListener('click',function(){
    let num = Math.floor(Math.random()*teams.length) 
    let winner = teams[num]
    h1.innerHTML = winner.team                                  //we can write this directly - h1.innerHTML = arr[num],  but for readability we have done that!
    h1.style.backgroundColor = winner.primary
    h1.style.color = winner.secondary
})