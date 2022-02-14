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
//ex1.
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
function createBtnHoliday() {
    let btnPlace = document.querySelector('.buttons-container');
    let btnHoliday = document.createElement('button');
    btnHoliday.innerHTML = 'Feriados';
    btnHoliday.id = 'btn-holiday';
    btnPlace.appendChild(btnHoliday);
}
createBtnHoliday();

//ex3.
function mostraFeriados() {
    let btnFeriado = document.querySelector('#btn-holiday');
    let feriados = document.querySelectorAll('.holiday')
    let corFundo = 'rgb(238,238,238)';
    let novaCorFundo = 'violet';

    btnFeriado.addEventListener('click', function () {
        for (let index = 0; index < feriados.length; index += 1) {
            if (feriados[index].style.backgroundColor === novaCorFundo) {
                feriados[index].style.backgroundColor = corFundo;
            }
            else {
                feriados[index].style.backgroundColor = novaCorFundo;
            }
        }
    })
};
mostraFeriados();

//ex4.
function createBtnFriday() {
    let btnPlace = document.querySelector('.buttons-container');
    let btnFriday = document.createElement('button');
    btnFriday.innerHTML = 'Sexta-feira';
    btnFriday.id = 'btn-friday';
    btnPlace.appendChild(btnFriday);
}
createBtnFriday();

//ex5.
function mostraSexta() {
    let btnSexta = document.querySelector('#btn-friday');
    let sextas = document.querySelectorAll('.friday')
    let corFundo = 'rgb(238,238,238)';
    let novaCorFundo = 'pink';

    btnSexta.addEventListener('click', function () {
        for (let index = 0; index < sextas.length; index += 1) {
            if (sextas[index].style.backgroundColor === novaCorFundo) {
                sextas[index].style.backgroundColor = corFundo;
            }
            else {
                sextas[index].style.backgroundColor = novaCorFundo;
            }
        }
    })
};
mostraSexta();

//ex6.
function zoom() {
    let zoomPlace = document.querySelectorAll('.day');

    for (let index = 0; index < zoomPlace.length; index += 1) {
        zoomPlace[index].addEventListener('mouseover', function () {
            zoomPlace[index].style.fontSize = '30px';
        })
    }
    for (let index = 0; index < zoomPlace.length; index += 1) {
        zoomPlace[index].addEventListener('mouseleave', function () {
            zoomPlace[index].style.fontSize = '20px';
        })
    }
};
zoom();

//ex7.

function tasks(tarefa){
    let tasksPlace = document.querySelector('.my-tasks');
    let tasks=document.createElement('span');
    tasks.innerHTML=tarefa;
    tasksPlace.appendChild(tasks);
}
tasks('Projeto: Batatinha');

//ex8.
function legenda(cor) {
    let legendaPlace = document.querySelector('.my-tasks');
    let legendaCor = document.createElement('div');
    legendaCor.classList.add('task');
    legendaCor.style.backgroundColor=cor;
    legendaPlace.appendChild(legendaCor);
}
legenda('red')