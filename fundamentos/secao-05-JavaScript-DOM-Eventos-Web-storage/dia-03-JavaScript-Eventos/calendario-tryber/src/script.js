/* 
  Desenvolva uma função que crie dinamicamente cada dia do calendário
 e os adicione dentro da tag <ul> com id "days".
 */

 let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

 const createDaysOfTheMonth = () => {
  let getDaysList = document.querySelector('#days');

  for (let index = 0; index < decemberDaysList.length; index += 1) {
    
    let day = decemberDaysList[index];
    let dayItem = document.createElement('li');
    dayItem.innerHTML = day;
    
    if (day === 24 || day === 31) {

      dayItem.className = 'day holiday';
      getDaysList.appendChild(dayItem);
    } else if (day === 4 || day === 11 || day === 18) {

      dayItem.className = 'day friday';
      getDaysList.appendChild(dayItem);
    } else if (day === 25) {

      dayItem.className = 'day holiday friday';
      getDaysList.appendChild(dayItem);
    } else {

      dayItem.className = 'day';
      getDaysList.appendChild(dayItem);
    }
  }
}

createDaysOfTheMonth();
/*
• Implemente uma função que crie dinamicamente um botão com o nome “Feriados”.
  • Sua função deve receber um parâmetro com a string 'Feriados'.
  • Adicione a este botão a ID "btn-holiday".
  • Adicione este botão como filho/filha da tag <div> com classe "buttons-container".
*/

const createHolidayButton = (buttonName) => {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonID = 'btn-holiday';

  newButton.innerHTML = buttonName;
  newButton.id = newButtonID;
  
  buttonContainer.appendChild(newButton);
}

createHolidayButton('Feriados');

/*

• Implemente uma função que muda a cor de fundo dos dias que possuem a classe
"holiday".

  • Adicione ao botão "Feriados" um evento de "click" que altere a cor de
fundo dos dias que possuem a classe "holiday".

  👀 É interessante que esse botão possua também a lógica inversa. Ao ser
clicado novamente, ele retorna à configuração inicial com a cor
“rgb(238,238,238)”.
*/

const displayHolidays = () => {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday')
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'white';

    getHolidayButton.addEventListener('click', () => {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === setNewColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  });
}

displayHolidays();

// -----------------

const createFridayButton = (buttonName) => {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonID = 'btn-friday';

  newButton.innerHTML = buttonName;
  newButton.id = newButtonID;
  buttonContainer.appendChild(newButton);
}

createFridayButton('Sexta-feira');

// -----------------

const displayFridays = (fridaysArray) => {
  let getFridayButton = document.querySelector('#btn-friday');
  let fridays = document.getElementsByClassName('friday');
  let newFridayText = 'SEXTOU o/';

  getFridayButton.addEventListener('click', () => {
  for (let index = 0; index < fridays.length; index += 1) {
    if (fridays[index].innerHTML !== newFridayText) {
        fridays[index].innerHTML = newFridayText;
    } else {
        fridays[index].innerHTML = fridaysArray[index];
      }
    }
  });
}

let decemberFridays = [ 4, 11, 18, 25 ];
displayFridays(decemberFridays);

// -----------------