function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
//   1. puxar o local onde ficará a elemento
//   2. criar a elemento
//   3. customizar a elemento
//   4. colocar a elemento no html
//ex1
function createDaysOfTheMonth() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const holidayList = [24, 25, 31];
    const fridayList = [4, 11, 18, 25];
    let daysPlace = document.querySelector('#days');
    for (index = 0; index < dezDaysList.length; index += 1) {
        let dayListLi = document.createElement('li');
        let daysCurrent = dezDaysList[index];
        dayListLi.innerHTML = daysCurrent;
        dayListLi.className = 'day';

        daysPlace.appendChild(dayListLi);

        for (index2 = 0; index2 < holidayList.length; index2 += 1) {
            if (daysCurrent === holidayList[index2]) {
                dayListLi.classList.add('holiday');
            }
        }
        for (index3 = 0; index3 < fridayList.length; index3 += 1) {
            if (daysCurrent === fridayList[index3]) {
                dayListLi.classList.add('friday');
            }
        }
    }
}
createDaysOfTheMonth();

//ex2.
function createBtn(holiday) {
    let btnHoliday = document.querySelector('.buttons-container');
    let btn = document.createElement('button');
    btn.innerHTML = holiday;
    btn.id = 'btn-'+holiday;
    btnHoliday.appendChild(btn);  
}
createBtn('Feriados')