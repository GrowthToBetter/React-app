const contact = require("./data/contact");
const validator = require("validator");
const chalk = require("chalk");
console.log(validator.isEmail("baratrahjaga@gmail.com"));
console.log(chalk`
    hello {red Bara},
    im here to {bold.red R E M I N D ! } you
    |
    |
    {bgRed.black prepare yourself}
    `);

const fs = require("fs");
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}
const fileData = "./data/contact.json";
if (!fs.existsSync(fileData)) {
  fs.writeFileSync(fileData, "[]", "utf-8");
}

const main = async () => {
  const nama = await contact.pertanyaan("masukkan nama anda : ");
  const NoHp = await contact.pertanyaan("masukkan NoHp anda : ");
  const Email = await contact.pertanyaan("masukkan E-Mail anda : ");
  contact.simpanContact(nama, NoHp, Email);
};

main();
