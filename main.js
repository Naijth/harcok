const array = [
    {
        war: "Harc megnevezése",
        side1: "Szembenálló felek",
        numbers1: "Haderő"
    },
    {
        war: "Rákóczi szabadságharc",
        side1: "Kuruc",
        numbers1: "70.000",
        side2: "Labanc",
        numbers2: "60.000"
    },
    {
        war: "48-as szabadságharc",
        side1: "Osztrák császárság (+ Orosz birodalom)",
        numbers1: "170.000 (+ 200.000)",
        side2: "Magyar királyság",
        numbers2: "170.000"
    },
    {
        war: "I. világháború",
        side1: "Antant",
        numbers1: "43 millió",
        side2: "Központi hatalmak",
        numbers2: "25 millió"
    },
    {
        war: "Bosworthi csata",
        side1: "Angolok (York + Lancester)",
        numbers1: "15.000"
    }
]

const table = document.createElement('table');
document.body.appendChild(table);
const thead = document.createElement('thead');
table.appendChild(thead);
const tbody = document.createElement('tbody');
table.appendChild(tbody);

renderTable(array, thead, tbody);