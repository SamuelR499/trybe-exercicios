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