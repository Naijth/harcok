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

renderForm();

const table = document.createElement('table');
document.body.appendChild(table);
const thead = document.createElement('thead');
table.appendChild(thead);
const tbody = document.createElement('tbody');
table.appendChild(tbody);

renderTable(array, thead, tbody);

form.addEventListener('submit', function(e){
    e.preventDefault();

    let valid = true;

    const warElement = document.getElementById("harc_nev");
    const side1Element = document.getElementById("harcolo1");
    const numbers1Element = document.getElementById("hadero1");
    const side2Element = document.getElementById("harcolo2");
    const numbers2Element = document.getElementById("hadero2");

    const war = warElement.value;
    const side1 = side1Element.value;
    const numbers1 = numbers1Element.value;
    const side2 = side2Element.value;
    const numbers2 = numbers2Element.value;

    const valid1 = validateFormField(warElement, "Ezt a mezőt kötelező kitölteni!");
    const valid2 = validateFormField(side1Element, "Ezt a mezőt kötelező kitölteni!");
    const valid3 = validateFormField(numbers1Element, "Ezt a mezőt kötelező kitölteni!");
    const valid4 = validateTwoForces(side2Element, numbers2Element);

    if (!valid1 || !valid2 || !valid3 || !valid4)
        valid = false;

    const twoForces = validateTwoForces(side2Element, numbers2Element);

    if (valid && !twoForces) {
        const newElement = {
            war: war,
            side1: side1,
            numbers1: numbers1
        }
        array.push(newElement);
        tbody.innerHTML = '';
        renderTable(array, thead, tbody);
        form.reset();
    } else if (valid && twoForces) {
        const newElement = {
            war: war,
            side1: side1,
            numbers1: numbers1,
            side2: side2,
            numbers2: numbers2
        }
        array.push(newElement);
        tbody.innerHTML = '';
        renderTable(array, thead, tbody);
        form.reset();
    }
});