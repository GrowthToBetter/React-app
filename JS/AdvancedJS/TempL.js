// multiline string

console.log(`
hello
world
multi line string untuk html fragment
`)
document.body.innerHTML=`<div class="container">
<h1>hello world</h1>
</div>`;

console.log(`interpolation ${((2*8)%2) ? 'ganjil':'genap'}`);