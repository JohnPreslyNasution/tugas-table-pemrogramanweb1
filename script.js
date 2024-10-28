function addData() {
    const nama_depan = document.getElementById("nama_depan").value;
    const nama_belakang = document.getElementById("nama_belakang").value;
    const nim = document.getElementById("nim").value;
    const kelas = document.getElementById("kelas").value;
    const jenis_kelamin = document.querySelector('input[name="jenis-kelamin"]:checked');


    if (nama_depan && nama_belakang && nim && kelas && jenis_kelamin) {
        const table = document.getElementById("data").getElementsByTagName("tbody")[0];
        const newRow = table.insertRow();

        const name_frontCell = newRow.insertCell(0);
        const name_backCell = newRow.insertCell(1);
        const nimCell = newRow.insertCell(2);
        const kelasCell = newRow.insertCell(3);
        const jenis_kelaminCell = newRow.insertCell(4);

        name_frontCell.textContent = nama_depan;
        name_backCell.textContent = nama_belakang;
        nimCell.textContent = nim;
        kelasCell.textContent = kelas;
        jenis_kelaminCell.textContent = jenis_kelamin.value;

        document.getElementById("formRegister").reset();
    } else {
        alert("Harap isi semua kolom.");
    }
}
