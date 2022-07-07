const desplegable1 = document.getElementById("primer_des");
const parrafo1 = document.getElementById("parrafo1");
const svg1 = document.getElementById("svg1");

desplegable1.addEventListener("click", () => {
    desplegable1.classList.toggle('activo');
    svg1.classList.toggle('svg_activo');
    
    if(parrafo1.className=='parra'){
        parrafo1.classList.remove('parra');
        parrafo1.classList.add('parra1');
    }
    else{
        parrafo1.classList.remove('parra1');
        parrafo1.classList.add('parra');
    }
    
    

   
})

const desplegable2 = document.getElementById("segundo_des");
const parrafo2 = document.getElementById("parrafo2");
const svg2 = document.getElementById("svg2");

desplegable2.addEventListener("click", () => {
    desplegable2.classList.toggle('activo');
    svg2.classList.toggle('svg_activo');
    
    if(parrafo2.className=='parra'){
        parrafo2.classList.remove('parra');
        parrafo2.classList.add('parra1');
    }
    else{
        parrafo2.classList.remove('parra1');
        parrafo2.classList.add('parra');
    }
    
    
})

const desplegable3 = document.getElementById("tercer_des");
const parrafo3 = document.getElementById("parrafo3");
const svg3 = document.getElementById("svg3");


desplegable3.addEventListener("click", () => {
    desplegable3.classList.toggle('activo');
    svg3.classList.toggle('svg_activo');
    
    if(parrafo3.className=='parra'){
        parrafo3.classList.remove('parra');
        parrafo3.classList.add('parra1');
    }
    else{
        parrafo3.classList.remove('parra1');
        parrafo3.classList.add('parra');
    }
    
    
})

const desplegable4 = document.getElementById("cuarto_des");
const parrafo4 = document.getElementById("parrafo4");
const svg4 = document.getElementById("svg4");

desplegable4.addEventListener("click", () => {
    desplegable4.classList.toggle('activo');
    svg4.classList.toggle('svg_activo');
    
    if(parrafo4.className=='parra'){
        parrafo4.classList.remove('parra');
        parrafo4.classList.add('parra1');
    }
    else{
        parrafo4.classList.remove('parra1');
        parrafo4.classList.add('parra');
    }
    
    
})

const desplegable5 = document.getElementById("quinto_des");
const parrafo5 = document.getElementById("parrafo5");
const svg5 = document.getElementById("svg5");

desplegable5.addEventListener("click", () => {
    desplegable5.classList.toggle('activo');
    svg5.classList.toggle('svg_activo');
    
    if(parrafo5.className=='parra'){
        parrafo5.classList.remove('parra');
        parrafo5.classList.add('parra1');
    }
    else{
        parrafo5.classList.remove('parra1');
        parrafo5.classList.add('parra');
    }
    
    
})