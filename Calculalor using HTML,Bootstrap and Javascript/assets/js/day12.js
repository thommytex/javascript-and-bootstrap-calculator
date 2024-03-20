const display = document.querySelector('#display');
const clear = document.querySelector('#clear')
const whiteBtns = document.querySelectorAll('.btn-outline-secondary');
const del = document.querySelector('#del')
const equal = document.querySelector('#equal')
whiteBtns.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        let value = btn.innerText;
        if(value=="."){
            display.innerText += value; 
        }
        else if(display.innerText=="0" || display.innerText =="Error"){
            display.innerText = value; 
        }
        else if(display.innerText.length > 90){
              display.style.fontSize ='80px';
              display.innerText = "Error"; 
        }
        else if(display.innerText.length>19){
            display.style.fontSize ='20px'
            display.innerText += value; 
          }
      else if(display.innerText.length>5){
        display.style.fontSize ='40px'
        display.innerText += value;
    }
        else{
            display.innerText += value;
        }
    })
})

clear.addEventListener('click',()=>{
    display.innerText = '0';
    display.style.fontSize = '80px';
});
del.addEventListener('click',()=>{
   display.innerText = display.innerText.slice(0,-1)
   if(display.innerText === ""){
       display.innerText = "0"
    }
       else if(display.innerText.length<5){
        display.style.fontSize ='40px'
        display.innerText += value;
        }
       else if(display.innerText.length<19){
        display.style.fontSize ='20px'
        display.innerText += value; 
      }
     else if(display.innerText.length < 90){
    display.style.fontSize ='20px';
    display.innerText = "Error"; 
}

});
equal.addEventListener('click',()=>{
    try {
        display.innerText = eval(display.innerText)
    } catch (error) {
        display.innerText="Error"
    }
})
console.log(whiteBtns);