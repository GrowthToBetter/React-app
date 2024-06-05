const mhs=[{
    nama:'dodi',
    umur:'12',
    nrp:'002800288',
},
{
    nama:'jean',
    umur:'16',
    nrp:'002800288',
},
{
    nama:'santo',
    umur:'17',
    nrp:'002800288',
}]

document.body.innerHTML=`
<div>
    ${mhs.map(m=>
        `<ul>
        <li>${m.nama}</li>
        <li>${m.umur}</li>
        </ul>`
    ).join('')}
</div>
`