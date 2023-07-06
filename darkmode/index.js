console.log("Js file included");

let drkButton = document.getElementById("btn");
drkButton.addEventListener("click", drkMode);

function drkMode(){
    console.log("Turning lights off!");
    let drkMd = document.getElementById("dark");
    drkMd.classList.toggle("dark");
}

// let lgtButton = document.getElementById("button1");
// lgtButton.addEventListener("click", lgtMode);


// function drkMode() {
//   console.log("Turning Lights off!");
//   let temp = document.getElementById("lol");
  
  
//   temp.innerHTML = `
//     <style>
//     body{
//         animation-name: sample;
//         animation-duration: 0.85s;
//         animation-iteration-count: fixed;
//     }
//     @keyframes sample{
//         to{background-color: #121212; color: white;}
//     }
//     #drk {
//         color: white;
//     }
//     #navbar{
//         border: 1px solid white;
//     }
    
//     </style>
//     `

// }


// function lgtMode(){
//     console.log('Lights on!');
//     let temp1 = document.getElementById('lol');

//     temp1.innerHTML = `
    
//     `
// }
