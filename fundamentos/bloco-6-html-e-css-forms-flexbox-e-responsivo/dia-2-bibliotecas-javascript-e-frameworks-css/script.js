// function prevent(event){
// event.preventDefault();
// }
// window.onload = function(){
//     let button = document.querySelector("#buttonSubmit")
// button.addEventListener('click',prevent);}

// function clearInfo(){
//     let infos = document.querySelectorAll('input');
//     let textArea = document.querySelector('textarea');
//     for (let index=0; index<infos.length;index+=1){
//         let inputs = infos[index];
//         inputs.value="";
//         inputs.checked = false;
//     }
//     textArea.value="";

// }
// window.onload = function () {
//     let button = document.querySelector('#buttonSubmit');
//     button.addEventListener('click', prevent);
//     let clearButton = document.querySelector('#clearButton');
//     clearButton.addEventListener('click', clearInfo);
//   };
window.addEventListener('DOMContentLoaded', function(){
    let myDatepicker = document.querySelector('input[name="demo"]');
    myDatepicker.DatePickerX.init({
        mondayFirst      : true,
        format           : 'yyyy/mm/dd',
        todayButtonLabel : 'Hoje',
        clearButtonLabel : 'Limpar'
    });
  });