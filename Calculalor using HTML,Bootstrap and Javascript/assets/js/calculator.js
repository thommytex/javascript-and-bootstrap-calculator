const display = document.querySelector('#display');
const whiteBtns = document.querySelectorAll('.btn-outline-secondary');
const clear = document.querySelector('#clear')
const back = document.querySelector('#delete') 
const equal = document.querySelector('#equal')
display.style.fontSize ="40px";

whiteBtns.forEach((btn)=>{
       btn.addEventListener('click',()=>{
           let value =btn.innerText;
        
           if (display.innerText =='0'  || display.innerText =="Exceeded No of values") {
            display.innerText = value; 
           }
        else if (display.innerText.length>25) {
            display.innerText = "Exceeded No of values"; 
        }
          else if (display.innerText.length>12) {
            display.style.fontSize = '20px'
            display.innerText += value; 
        }
           else{
            display.innerText += value; 
           }
        })
})

clear.addEventListener('click',()=>{
    display.innerText = "0";
})
back.addEventListener('click',()=>{
    display.innerText = display.innerText.slice(0,-1)
    if(display.innerText<1){
        display.innerText ="0";
        display.style.fontSize ="40px";
    }
});
equal.addEventListener('click',()=>{
  try {
      display.innerText = eval(display.innerText)
  } catch (error) {
      display.innerText = 'syntax error'
  }
  display.style.fontSize ="40px";
});
