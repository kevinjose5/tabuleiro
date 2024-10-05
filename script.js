window.t;
window.p;



//funçoes para criar peças 
function torre(){
    var p=document.createElement("img");
    p.src="pecas/torre1.png";
    p.style.width="120px";
    p.style.height="120px";
    let numeroAleatorio = Math.random() * 100;
    p.id=numeroAleatorio;
    p.onclick = function() {
        set(numeroAleatorio); // Chama a função set quando clicado
    };
    t=p;
    
}
function piao(){
    var p=document.createElement("img");
    p.src="pecas/piao.png";
    p.style.width="120px";
    p.style.height="120px";
    let numeroAleatorio = Math.random() * 100;
    p.id=numeroAleatorio;
    p.onclick = function() {
        set(numeroAleatorio); // Chama a função set quando clicado
    };
    t=p;
    
}
function bispo(){
    var p=document.createElement("img");
    p.src="pecas/bispo.png";
    p.style.width="120px";
    p.style.height="120px";
    let numeroAleatorio = Math.random() * 100;
    p.id=numeroAleatorio;
    p.onclick = function() {
        set(numeroAleatorio); // Chama a função set quando clicado
    };
    t=p;
    
}
function cavalo(){
    var p=document.createElement("img");
    p.src="pecas/cavalo.png";
    p.style.width="120px";
    p.style.height="120px";
    let numeroAleatorio = Math.random() * 100;
    p.id=numeroAleatorio;
    p.onclick = function() {
        set(numeroAleatorio); // Chama a função set quando clicado
    };
    t=p;
    
}

function rainha(){
    var p=document.createElement("img");
    p.src="pecas/RAINHA.png";
    p.style.width="120px";
    p.style.height="120px";
    let numeroAleatorio = Math.random() * 100;
    p.id=numeroAleatorio;
    p.onclick = function() {
        set(numeroAleatorio); // Chama a função set quando clicado
    };
    t=p;
    
}
function rei(){
    var p=document.createElement("img");
    p.src="pecas/rei.png";
    p.style.width="120px";
    p.style.height="120px";
    let numeroAleatorio = Math.random() * 100;
    p.id=numeroAleatorio;
    p.onclick = function() {
        set(numeroAleatorio); // Chama a função set quando clicado
    };
    t=p;
    
}

function bruna(){
    var p=document.createElement("img");
    p.src="pecas/BRUNA.png";
    p.style.width="120px";
    p.style.height="120px";
    let numeroAleatorio = Math.random() * 100;
    p.id=numeroAleatorio;
    p.onclick = function() {
        set(numeroAleatorio); // Chama a função set quando clicado
    };
    t=p;
    
}




// função para apagar e mostrar a barra das peças
function esconderElemento() {
    const elementos = document.querySelector('.scroll-div');
 
        if (elementos.style.display === 'none') {
            elementos.style.display = 'block'; // Mostra novamente o elemento
        } else {
            elementos.style.display = 'none'; // Esconde o elemento
        }

}









//coleta a posição da peça 
function set(a){
    t=document.getElementById(a);
}

//esta função e para coletar a posição em que a peça vai ser movida e mover a peça 
function mostrarId(a) {
    p= document.getElementById(a);
    p.appendChild(t);

  }

// função para excluir o elemento 
function excluir(){
    p.children[0].remove();
    p=null;
    t=null
}

