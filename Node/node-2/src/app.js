const yargs = require("yargs");
const fs = require("fs");
const construct = require("./construct");
const validator = require('validator')

yargs.command({
  command: "add",
  describe: "menambahkan contact",
  builder: {
    nama: {
      type: "string",
      demandOption: true,
      describe: "tulis nama anda",
    },
    noHp: {
      type: "string",
      demandOption: true,
      describe: "tulis no HP anda",
    },
    email: {
      type: "string",
      demandOption: false,
      describe: "tulis email anda",
    },
  },
  handler(argv) {
    if(!validator.isMobilePhone(argv.noHp,'id-ID')){
        console.log('noHp tidak valid !!')
        return;
    }
    if(argv.email){
        if(!validator.isEmail(argv.email)){
            console.log('email tidak valid')
            return;
        }
    }
    const contact = {
      nama: argv.nama,
      noHp: argv.noHp,
      email: argv.email,
    };
    construct.simpanContact(contact);
  },
});

yargs.command({
  command: "remove",
  describe: "remove contact",
  builder: {
    nama: {
      type: "string",
      demandOption: true,
      describe: "pilih user untuk dihapus",
    },
    noHp: {
      type: "string",
      demandOption: true,
      describe: "pilih nomor user untuk dihapus",
    },
  },
  handler(argv){
    if(!validator.isMobilePhone(argv.noHp,'id-ID')){
        console.log('noHp tidak valid !!')
        return;
    }
    const contacts=JSON.parse(fs.readFileSync('../Data/contacts.json','utf-8'))
    const analyze=contacts.find((dummy)=>(dummy.nama,dummy.noHp)===(argv.nama,argv.noHp))
    if(analyze){
        const data=contacts.filter((dummy)=>(dummy.nama,dummy.noHp)!==(argv.nama,argv.noHp))
        fs.writeFileSync('../Data/contacts.json',JSON.stringify(data))
    }
  }
});

yargs.command(
    {
        command:"list",
        describe:'show all list data',
        handler(){
            contacts=JSON.parse(fs.readFileSync('../Data/contacts.json','utf-8'))
            console.log(contacts)
        }
    }
)



yargs.parse();
