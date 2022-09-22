

let resultado1=document.querySelector('#resultadoNum');
let resultado2= resultado1.innerHTML;
console.log(resultado2)

let btns = document.querySelectorAll('button');
let btn= btns.forEach(btn => {
    btn.addEventListener('click', (e)=>{
        console.log(btn.value);
        resultado1.innerHTML= btn.value;
        
    })
});


let ope = function operaciones(op, n1, n2) {
    
}


