function login() {
const username = document.getElementById('username').value;
if (username === "") {
alert("Silakan masukkan nama");
return;
}
document.getElementById('user').innerText = username;
document.getElementById('loginPage').style.display = 'none';
document.getElementById('mainPage').style.display = 'block';
}


function logout() {
document.getElementById('mainPage').style.display = 'none';
document.getElementById('loginPage').style.display = 'block';
}


function classify() {
const env = document.getElementById('environment').value;
let result = "";


if (env === "bersih") {
result = "AI mendeteksi lingkungan bersih 🌿 – Pertahankan kebiasaan baik!";
} else if (env === "tercemar") {
result = "AI mendeteksi pencemaran ⚠️ – Perlu aksi sosial dan kesadaran.";
} else if (env === "hijau") {
result = "AI mendeteksi area hijau 🌳 – Sangat baik untuk kesehatan.";
} else {
result = "Silakan pilih kondisi lingkungan.";
}


document.getElementById('result').innerText = result;
}
