function addData() {
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let age = document.getElementById("age").value;

    if (name !== '' && surname !== '' && age !== '') {
        let table = document.getElementById("tableBody");
        let newRow = table.insertRow(table.rows.length);

        let xana1 = newRow.insertCell(0);
        let xana2 = newRow.insertCell(1);
        let xana3 = newRow.insertCell(2);

        xana1.innerHTML = name;
        xana2.innerHTML = surname;
        xana3.innerHTML = age;

        
        document.getElementById("name").value = '';
        document.getElementById("surname").value = '';
        document.getElementById("age").value = '';
    } else {
        alert("Zəhmət olmasa bütün xanaları doldurun!");
    }
}