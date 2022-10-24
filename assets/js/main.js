var index, table = document.getElementById('table');
function check() {
    var isEmpty = false,
        fname = document.getElementById('fname').value,
        lname = document.getElementById('lname').value,
        age = document.getElementById('age').value;

    if (fname === '') {
        alert("Ad daxil edin");
        isEmpty = true;
    }
    else if (lname === '') {
        alert("Soyad daxil edin");
        isEmpty = true;
    }
    else if (age === '') {
        alert("Yas daxil edin");
        isEmpty = true;
    }
    return isEmpty;
}
function add() {
    if (!check()) {
        let newRow = table.insertRow(table.length),
            ad = newRow.insertCell(0),
            soyad = newRow.insertCell(1),
            yas = newRow.insertCell(2),
            fname = document.getElementById('fname').value,
            lname = document.getElementById('lname').value,
            age = document.getElementById('age').value;

            ad.innerHTML = fname;
            soyad.innerHTML = lname;
            yas.innerHTML = age;
        select();
    }
}
function select() {

    for (let i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function () {
            index = this.rowIndex;
            document.getElementById("fname").value = this.cells[0].innerHTML;
            document.getElementById("lname").value = this.cells[1].innerHTML;
            document.getElementById("age").value = this.cells[2].innerHTML;
        };
    }
}
select();
function edit() {
    var fname = document.getElementById('fname').value,
        lname = document.getElementById('lname').value,
        age = document.getElementById('age').value;
    if (!check()) {
        table.rows[index].cells[0].innerHTML = fname;
        table.rows[index].cells[1].innerHTML = lname;
        table.rows[index].cells[2].innerHTML = age;
    }
}
function remove() {
    table.deleteRow(index);
    document.getElementById('fname').value = '',
    document.getElementById('lname').value = '',
    document.getElementById('age').value = '';
}