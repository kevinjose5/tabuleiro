const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBhYWNkcnNjbXBqZ3B2ZWVzaXhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE4NjEwODcsImV4cCI6MjAzNzQzNzA4N30.Kl9fMAR5nTn3u6RThk2VJYGvT-wgDAp_mJr5QUUCCpM";

const url = "https://paacdrscmpjgpveesixa.supabase.co";

const database = supabase.createClient(url, key);


let posicao_casa = {1:"a1", 2:"a2", 3:"a3", 4:"a4", 5:"a5", 6:"a6", 7:"a7", 8:"a8", 9:"b1", 10:"b2", 11:"b3", 12:"b4", 13:"b5", 14:"b6", 15:"b7", 16:"b8", 17:"c1", 18:"c2", 19:"c3", 20:"c4", 21:"c5", 22:"c6", 23:"c7", 24:"c8", 25:"d1", 26:"d2", 27:"d3", 28:"d4", 29:"d5", 30:"d6", 31:"d7", 32:"d8", 33:"e1", 34:"e2", 35:"e3", 36:"e4", 37:"e5", 38:"e6", 39:"e7", 40:"e8", 41:"f1", 42:"f2", 43:"f3", 44:"f4", 45:"f5", 46:"f6", 47:"f7", 48:"f8", 49:"g1", 50:"g2", 51:"g3", 52:"g4", 53:"g5", 54:"g6", 55:"g7", 56:"g8", 57:"h1", 58:"h2", 59:"h3", 60:"h4", 61:"h5", 62:"h6", 63:"h7", 64:"h8"};

























window.t;
window.p;



//funçoes para criar peças 
function torre(){
    var p=document.createElement("img");
    p.src="pecas/torre1.png";
    p.style.width="120px";
    p.style.height="120px"; 
    p.classList.add("torre");
    p.classList.add("peca");
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
    p.classList.add("piao");
    p.classList.add("peca");
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
    p.classList.add("bispo");
    p.classList.add("peca");
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
 
    p.classList.add("cavalo");
       p.classList.add("peca");
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

    p.classList.add("rainha");
       p.classList.add("peca");
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

    p.classList.add("rei");
       p.classList.add("peca");
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

    p.classList.add("bruna");
       p.classList.add("peca");
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

//função selecionadora de funçoes para o cadastro das peças















let lista_de_funcoes = {
    "torre": torre,
    "piao": piao,
    "bispo": bispo,
    "cavalo": cavalo,
    "rainha": rainha,
    "rei": rei,
    "bruna": bruna,
    
    
};

























async function salvarpecas(){

    let element;
    let nome_classe;
    let nome_classe_reduzida;
    
    for(let i = 1;i<=64;i++){
        let casa_tabela =posicao_casa[i];
        let coluna_tabela= casa_tabela[0]; //funçoes que separam os 2 vetores das casas na lista posisao casa 
        let linha_tabela=casa_tabela[1];

    
    
    try{
        let casa21= document.getElementById(casa_tabela);
        element=casa21.children[0];
        nome_classe=element.className;
        nome_classe_reduzida=nome_classe.substring(0,nome_classe.length-5);
        console.log(nome_classe_reduzida);
      
    }catch{
        console.log("/n casa vazia ")
        nome_classe_reduzida="";
    }        

    try{
        const{error}= await database.from("tabuleiro").update({
            
            [coluna_tabela]: nome_classe_reduzida

            
        }).eq("id", linha_tabela);


        
        if(error){
            window.location.reload();
        }

        
    }catch(error){

    alert("error: "+error);
    }

    }
}


















async function restaurar(){//função que coleta as peças do banco de dados e coloca no tabuleiro 



    for(let i = 1;i<=64;i++){
        let casa_tabela =posicao_casa[i];

        let coluna_tabela= casa_tabela[0]; //funçoes que separam os 2 vetores das casas na lista posisao casa 
        let linha_tabela=casa_tabela[1];

         const res= await database.from("tabuleiro").select("*").eq("id",linha_tabela);// seleciona a linha


        if (res) {
            console.log("seleção deu certo");
            var ser=res.data[0][coluna_tabela]; //seleciona a casa 




            
            if(ser in lista_de_funcoes){
                lista_de_funcoes[ser]();
                 p= document.getElementById(casa_tabela);

                p.appendChild(t);
            }














            
        } else {
        alert("ouve um erro : "+res.error);
        }




    }

}


// try{
//     if("torre" in lista_de_funcoes){
//         selecionar_funcao("torre");
//         // p= document.getElementById(casa_tabela);
//         // p.appendChild(t);//adiciona a peça na casa p 
//         // //como os id das casa e igua a posição ficticia do tabuleiro table
//         // //ele pega o valor da casa_tabela lista para localizar a casa que recebera a peça 
//         console.log("if esta funcionando ");
//     }



// }catch{
//     console.log("erro com a função de coletar peças ");
// }
