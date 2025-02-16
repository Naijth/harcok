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