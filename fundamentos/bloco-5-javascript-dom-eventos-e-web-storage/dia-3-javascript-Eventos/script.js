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


const holidays = [24, 25, 31];
const friday = [4, 11, 18, 25];
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
// Escreva seu código abaixo.
function diasEspecias(holiday, diaItem, dia, classe) {
    for (let index = 0; index < holiday.length; index += 1) {
        const esseDiaPromete = holiday[index];
        if (dia === esseDiaPromete) {
            diaItem.classList.add(classe);
        }
    }
}

function diasDeDezembro(dias, feriados, sextas) {


    //cria os dias do mês
    const dezDays = document.querySelector("#days")
    // console.log(document.querySelector("#days"));
    for (let index = 0; index < dias.length; index += 1) {
        const dia = dias[index];
        const diaItem = document.createElement("li");
        diaItem.classList = "day";
        diaItem.innerText = dia;


        diasEspecias(feriados, diaItem, dia, "holiday")
        diasEspecias(sextas, diaItem, dia, "friday")

        dezDays.appendChild(diaItem);
    }
}
diasDeDezembro(dezDaysList, holidays, friday);



function clickEvent() { // cria a função clickEvent que sera o evento
    let holidaysColor = document.querySelectorAll(".holiday")

    for (i = 0; i < holidaysColor.length; i += 1) {
        if (holidaysColor[i].style.backgroundColor === "") {
            holidaysColor[i].style.backgroundColor = "yellow";
        } else if (holidaysColor[i].style.backgroundColor === "yellow") {
            holidaysColor[i].style.backgroundColor = "";
        }
    }
    // console.log("opaaa clicou!");
}
const paidoButton = document.getElementsByClassName("buttons-container")[0];
function criaButton(texto) {
    const button = document.createElement("button");
    button.innerText = texto;
    button.id = "btn-holiday";
    paidoButton.appendChild(button);
    // console.log(paidoButton);
    button.addEventListener("click", clickEvent)//cria o botão e chama a função clickEvent
}

criaButton('Feriado');

function btnFridayEvent() {
    let fridayChange = document.querySelectorAll('.friday');
    let originalText = document.getElementById('days').style.color;
    for (index = 0; index < fridayChange.length; index++) {

        if (fridayChange[index].style.color === originalText) {
            console.log('teste2');
            fridayChange[index].style.color = 'yellow';
        } else if (fridayChange[index].style.color === 'yellow') {
            fridayChange[index].style.color = originalText;
        }
    }
}

function creatBtn(string) {
    const btnSextaFeira = document.createElement('button');
    btnSextaFeira.innerText = string;
    btnSextaFeira.id = 'btn-friday';
    paidoButton.appendChild(btnSextaFeira);
    btnSextaFeira.addEventListener('click', btnFridayEvent);
}

creatBtn('Sexta-feira');

let xday = document.getElementsByTagName('li');
console.log(xday);
for (i of xday) {
    i.addEventListener('mouseover', mouseOver);
    i.addEventListener('mouseout', mouseOut);
}

function mouseOver() {
    console.log('mouse over!')
    for(i of xday){
        i.style.fontSize = '30px';
    }
}

function mouseOut() {
     console.log('mouse out!');
     for(i of xday){
        i.style.fontSize = '20px';
    }
}