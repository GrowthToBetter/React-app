
const fs=require('fs');
const { stringify } = require('querystring');

function simpanContact(contact){
    const dirPath="../Data"
    if(!fs.existsSync(dirPath)){
        fs.mkdirSync(dirPath)
    }
    const dataPath="../Data/contacts.json"
    if(!fs.existsSync(dataPath)){
        fs.writeFileSync(dataPath,'[]','utf-8')
    }
    const fileBuffer=fs.readFileSync(dataPath,'utf-8')
    const contacts= JSON.parse(fileBuffer)
    const duplicate=contacts.find((dummy)=>(dummy.nama,dummy.noHp)===(contact.nama,contact.noHp))
    if(duplicate){
        console.log('sudah terdaftar !')
        return;
    }

    contacts.push(contact)
    fs.writeFileSync(dataPath,JSON.stringify(contacts))
}

module.exports={simpanContact}
