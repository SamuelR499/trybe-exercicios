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
function diasDeDezembro() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    const dezDays = document.querySelector("#days")
    console.log(document.querySelector("#days"));
    for (let index = 0; index < dezDaysList.length; index += 1) {
        const dia = dezDaysList[index];
        const diaItem = document.createElement("li");
        diaItem.classList = "day";
        diaItem.innerText = dia;

        const holidays = [24, 25, 31];
        for (let index = 0; index < holidays.length; index += 1) {
            const esseDiaPromete = holidays[index];
            if (dia === esseDiaPromete) {
                diaItem.classList.add("holiday");
            }

            const friday = [4, 11, 18, 25];
            for (let index = 0; index < friday.length; index += 1) {
                const sextou = friday[index];
                if (dia === sextou) {
                    diaItem.classList.add("friday");
                }
            }
         }
        dezDays.appendChild(diaItem);
    }
}

diasDeDezembro();