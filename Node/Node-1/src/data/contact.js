const fs=require('fs')
const readline=require('readline')

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

const pertanyaan=(pertanyaan)=>{
    return new Promise((resolve, reject) => {
        rl.question(pertanyaan,(hasil)=>{
            resolve(hasil)
        })
    })
}

const simpanContact=(nama,NoHp,Email)=>{
    const contact={nama,NoHp,Email}; 
    const fileBuffer=fs.readFileSync('data/contact.json','utf-8');
    const contacts=JSON.parse(fileBuffer)

    contacts.push(contact)

    fs.writeFileSync('data/contact.json',JSON.stringify(contacts))
    rl.close()
}
module.exports={simpanContact,pertanyaan}