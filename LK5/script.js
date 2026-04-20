const form = document.getElementById("myForm");
const nama = document.getElementById("nama");
const email = document.getElementById("email");
const hp = document.getElementById("hp");
const pesan = document.getElementById("pesan");
const notif = document.getElementById("notif");

// Event input (validasi langsung)
nama.addEventListener("input", function () {
    if (nama.value.length < 3) {
        nama.style.border = "2px solid red";
    } else {
        nama.style.border = "2px solid green";
    }
});

// Event submit
form.addEventListener("submit", function (e) {
    e.preventDefault();

    let error = "";

    if (nama.value.length < 3) {
        error += "Nama minimal 3 karakter\n";
    }

    if (!email.value.includes("@")) {
        error += "Email tidak valid\n";
    }

    if (!/^[0-9]{10,}$/.test(hp.value)) {
        error += "No HP minimal 10 digit dan angka saja\n";
    }

    if (pesan.value.trim() === "") {
        error += "Pesan tidak boleh kosong\n";
    }

    if (error !== "") {
        notif.innerHTML = "<span style='color:red'>" + error + "</span>";
    } else {
        notif.innerHTML = "<span style='color:green'>Berhasil dikirim!</span>";

        // Manipulasi DOM: tambah ke daftar
        const list = document.getElementById("daftar");
        const item = document.createElement("li");
        item.textContent = nama.value + " - " + hp.value;
        list.appendChild(item);

        form.reset();
    }
});

// Toggle form
function toggleForm() {
    const box = document.getElementById("formBox");
    box.style.display = box.style.display === "none" ? "block" : "none";
}

