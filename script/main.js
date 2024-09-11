const createTable = function createTable(DOMelement, datas){
    let element = DOMelement;
    const table = document.createElement('table')
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    table.appendChild(thead);
    table.appendChild(tbody);
    
    const thead_tr = document.createElement('tr');
    thead.appendChild(thead_tr);

    for(prop in datas.skills[0]){
        const th = document.createElement('th');
        th.innerText = prop;
        thead_tr.appendChild(tr);
    }
}