/**
 * @param {Array} array 
 * @param {HTMLElement} thead 
 * @param {HTMLElement} tbody 
 * Renders the table with the given parameters
 */
function renderTable(array, thead, tbody){
    for (let i = 0; i < array.length; i++) {
        if (i == 0) {
            thead.innerHTML = "";
            const trH = document.createElement('tr');
            thead.appendChild(trH);
            const th1 = document.createElement('th');
            trH.appendChild(th1);
            th1.innerHTML = array[i].war;
            const th2 = document.createElement('th');
            trH.appendChild(th2);
            th2.innerHTML = array[i].side1;
            const th3 = document.createElement('th');
            trH.appendChild(th3);
            th3.innerHTML = array[i].numbers1;
        } else {
            const tr1 = document.createElement('tr');
            tbody.appendChild(tr1);
            const td1 = document.createElement('td');
            tr1.appendChild(td1);
            td1.innerHTML = array[i].war;
            const td2 = document.createElement('td');
            tr1.appendChild(td2);
            td2.innerHTML = array[i].side1;
            const td3 = document.createElement('td');
            tr1.appendChild(td3);
            td3.innerHTML = array[i].numbers1;
            if (array[i].side2 != undefined){
                td1.rowSpan = 2;
                const tr2 = document.createElement('tr');
                tbody.appendChild(tr2);
                const td4 = document.createElement('td');
                tr2.appendChild(td4);
                td4.innerHTML = array[i].side2;
                const td5 = document.createElement('td');
                tr2.appendChild(td5);
                td5.innerHTML = array[i].numbers2;
            }
        }
    }
}

/**
 * @param {HTMLElement} inputElement 
 * @param {String} inputErrorMessage 
 * @returns false if the input's value is an empty string + writes in the error stuff. true if it aint an empty string in the input
 */
function validateFormField(inputElement, inputErrorMessage){
    if (inputElement.value == ''){
        const parentElement = inputElement.parentElement;
        const error = parentElement.querySelector('.error');
        if (error != undefined) {
            error.innerHTML = inputErrorMessage;
        }
        return false;
    } else {
        return true;
    }
}

/**
 * @param {HTMLElement} inputSideElement 
 * @param {HTMLElement} inputNumbersElement 
 * @returns if one's value is an empty string and the other isn't it returns false using the function above, otherwise true
 */
function validateTwoForces(inputSideElement, inputNumbersElement){
    if (inputSideElement.value != '' && inputNumbersElement.value == ''){
        return validateFormField(inputNumbersElement, "Mind két mezőt ki kell tölteni!");
    } else if (inputSideElement.value == '' && inputNumbersElement.value != '') {
        return validateFormField(inputSideElement, "Mind két mezőt ki kell tölteni!")
    }
    return true;
}

/**
 * renders the form using renderForm
 */
function renderForm() {
    const form = document.createElement('form');
    form.id = 'form';
    form.action = '';
    document.body.appendChild(form);

    formField(form, "text", "Származás:", "harc_nev")
    formField(form, "text", "1. Harcoló fél:", "harcolo1")
    formField(form, "text", "1. Haderő:", "hadero1")
    formField(form, "text", "2. Harcoló fél:", "harcolo2")
    formField(form, "text", "2. Haderő:", "hadero2")

    const button = document.createElement('button');
    button.innerHTML = "Hozzáadás";
    form.appendChild(button);
}

/**
 * @param {HTMLElement} form 
 * @param {String} type 
 * @param {String} labelText 
 * @param {String} id 
 * This is what renderForm uses to make each line of the form
 */
function formField(form, type, labelText, id){
    const mainDiv = document.createElement('div');
    form.appendChild(mainDiv);

    const label = document.createElement('label');
    label.for = id;
    label.innerHTML = labelText;
    mainDiv.appendChild(label);
    const br1 = document.createElement('br');
    mainDiv.appendChild(br1);

    const input = document.createElement('input');
    input.type = type;
    input.id = id;
    input.name = id;
    mainDiv.appendChild(input);
    const br2 = document.createElement('br');
    mainDiv.appendChild(br2);

    const errorDiv = document.createElement('div');
    errorDiv.setAttribute('class', 'error'); 
    mainDiv.appendChild(errorDiv);
    const br3 = document.createElement('br');
    mainDiv.appendChild(br3);
}