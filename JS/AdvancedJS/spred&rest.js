const mhs = ["dodi", "jerik", "kona"];
const dosen = ["apung", "parji"];
console.log(...mhs, "jina", ...dosen);

console.log(dosen.concat(mhs));

// cara copy array harus menggunakan spread

const mhs2 = [...mhs];
mhs2[0] = "roki";
console.log(mhs2);

const Li = [...document.querySelectorAll("li")];
console.log(Li.map((m) => m.textContent));
const h1 = document.querySelector("h1");
const huruf = [...h1.textContent].map((h) => `<span>${h}</span>`).join("");
h1.innerHTML=huruf