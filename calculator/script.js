let displayvalue='';
function appendToDisplay(input){
    displayvalue += input;
   document.querySelector('.display').value = displayvalue;
}
function clearDisplay(){
    document.querySelector('.display').value = '';
    displayvalue = '';
  
}
function calculate(){
    try{
        document.querySelector('.display').value = eval(document.querySelector('.display').value);
        displayvalue = '';
        
    }
    catch(error){
        document.querySelector('.display').value = "Error";
        displayvalue = '';
    }
}
