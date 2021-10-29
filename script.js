const fecha = new Date();

const renderCalendar = () => {

 fecha.setDate(1);

const diasMes = document.querySelector('.dias');

const ultimoDia = new Date(fecha.getFullYear(), fecha.getMonth() + 1, 0).getDate();
const prevultimoDia = new Date(fecha.getFullYear(), fecha.getMonth(), 0).getDate();

const primerDiaIndice = fecha.getDay();

const ultimoDiaIndice = new Date(fecha.getFullYear(), fecha.getMonth() + 1, 0).getDay();

const diasSiguientes = 6 - ultimoDiaIndice;


const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
]

document.querySelector('.fecha h1').innerHTML = fecha.getFullYear();
document.querySelector('.fecha h2').innerHTML = meses[fecha.getMonth()];
document.querySelector('.fecha p').innerHTML = new Date().toDateString();

let dias = "";

for (let x = primerDiaIndice; x > 0; x--) {
    dias += `<div class="prev-date">${prevultimoDia - x + 1}</div>`;
}

for(let i = 1; i <= ultimoDia; i++) {
    if(i === new Date().getDate() && fecha.getMonth() === new Date().getMonth()) {
        dias += `<div class="hoy">${i}</div>`;
    } else {
        dias += `<div>${i}</div>`;
    }
}

for(let j = 1; j <= diasSiguientes; j++) {
    dias += `<div class="diaSiguiente">${j}</div>`;
    diasMes.innerHTML = dias;
}
}



document.querySelector('.prev').addEventListener('click', () => {
    fecha.setMonth(fecha.getMonth() -1);
    renderCalendar();
})

document.querySelector('.next').addEventListener('click', () => {
    fecha.setMonth(fecha.getMonth() + 1);
    renderCalendar();
})

renderCalendar();
