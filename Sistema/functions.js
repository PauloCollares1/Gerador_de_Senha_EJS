const http = require('http');
const fs = require('fs');


let resultado = {
    nome:"",
    senha:""
}

let lista = [];


const alfabeto_pequeno = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"
,"r","s","t","u","v","w","x","y","z"];

const alfabeto_grande = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q"
,"R","S","T","U","V","W","X","Y","Z"];

const alfabeto_numeros = ['0','1','2','3','4','5','6','7','8','9'];

const alfabeto_simbolos = ['!','@','#','$','%','&','*'];





async function embaralha(nome, tamanho, minuscula, maiuscula, simbolo, numeros){

    let senha = [];

    if( minuscula && maiuscula && simbolo && numeros){

        for(let i = 1; i <= tamanho;){
                if(i > tamanho){break}
                let letra = await alfabeto_pequeno[Math.floor(Math.random() * alfabeto_pequeno.length)];
                senha.push(letra);
                i++;
                if(i > tamanho){break}
                letra = await alfabeto_grande[Math.floor(Math.random() * alfabeto_grande.length)];
                senha.push(letra);
                i++;
                if(i > tamanho){break}
                letra = await alfabeto_simbolos[Math.floor(Math.random() * alfabeto_simbolos.length)];
                senha.push(letra);
                i++;
                if(i > tamanho){break}
                letra = await alfabeto_numeros[Math.floor(Math.random() * alfabeto_numeros.length)];
                senha.push(letra);
                i++;
        }
    }else if(minuscula && maiuscula && simbolo){
        for(let i = 1; i <= tamanho;){

            if(i > tamanho){break}
            let letra = await alfabeto_pequeno[Math.floor(Math.random() * alfabeto_pequeno.length)];
            senha.push(letra);
            i++;
            if(i > tamanho){break}
            letra = await alfabeto_grande[Math.floor(Math.random() * alfabeto_grande.length)];
            senha.push(letra);
            i++;
            if(i > tamanho){break}
            letra = await alfabeto_simbolos[Math.floor(Math.random() * alfabeto_simbolos.length)];
            senha.push(letra);
            i++;
        }
    }else if(minuscula && maiuscula && numeros){
        for(let i = 1; i <= tamanho;){
            if(i > tamanho){break}
            let letra = await alfabeto_pequeno[Math.floor(Math.random() * alfabeto_pequeno.length)];
            senha.push(letra);
            i++;
            if(i > tamanho){break}
            letra = await alfabeto_grande[Math.floor(Math.random() * alfabeto_grande.length)];
            senha.push(letra);
            i++;
            if(i > tamanho){break}
            letra = await alfabeto_numeros[Math.floor(Math.random() * alfabeto_numeros.length)];
            senha.push(letra);
            i++;
        }
    }else if(minuscula && simbolo && numeros){
        for(let i = 1; i <= tamanho;){
            if(i > tamanho){break}
            let letra = await alfabeto_pequeno[Math.floor(Math.random() * alfabeto_pequeno.length)];
            senha.push(letra);
            i++;
            if(i > tamanho){break}
            letra = await alfabeto_simbolos[Math.floor(Math.random() * alfabeto_simbolos.length)];
            senha.push(letra);
            i++;
            if(i > tamanho){break}
            letra = await alfabeto_numeros[Math.floor(Math.random() * alfabeto_numeros.length)];
            senha.push(letra);
            i++;
        }
    }else if(maiuscula && simbolo && numeros){
        for(let i = 1; i <= tamanho;){
            if(i > tamanho){break}
            let letra = await alfabeto_grande[Math.floor(Math.random() * alfabeto_grande.length)];
            senha.push(letra);
            i++;
            if(i > tamanho){break}
            letra = await alfabeto_simbolos[Math.floor(Math.random() * alfabeto_simbolos.length)];
            senha.push(letra);
            i++;
            if(i > tamanho){break}
            letra = await alfabeto_numeros[Math.floor(Math.random() * alfabeto_numeros.length)];
            senha.push(letra);
            i++;
        }
    }else if(minuscula && maiuscula){
        for(let i = 1; i <= tamanho;){
            if(i > tamanho){break}
            let letra = await alfabeto_pequeno[Math.floor(Math.random() * alfabeto_pequeno.length)];
            senha.push(letra);
            i++;
            if(i > tamanho){break}
            letra = await alfabeto_grande[Math.floor(Math.random() * alfabeto_grande.length)];
            senha.push(letra);
            i++;
            if(i > tamanho){break}
        }
    }else if(minuscula && simbolo){
        for(let i = 1; i <= tamanho;){
            if(i > tamanho){break}
            let letra = await alfabeto_pequeno[Math.floor(Math.random() * alfabeto_pequeno.length)];
            senha.push(letra);
            i++;
            if(i > tamanho){break}
            letra = await alfabeto_simbolos[Math.floor(Math.random() * alfabeto_simbolos.length)];
            senha.push(letra);
            i++;
            if(i > tamanho){break}
        } 
    }else if(minuscula && numeros){
        for(let i = 1; i <= tamanho;){
            if(i > tamanho){break}
            let letra = await alfabeto_pequeno[Math.floor(Math.random() * alfabeto_pequeno.length)];
            senha.push(letra);
            i++;
            if(i > tamanho){break}
            letra = await alfabeto_numeros[Math.floor(Math.random() * alfabeto_numeros.length)];
            senha.push(letra);
            i++;
            if(i > tamanho){break}
        } 
    }else if(maiuscula && simbolo){
        for(let i = 1; i <= tamanho;){
            if(i > tamanho){break}
            let letra = await alfabeto_grande[Math.floor(Math.random() * alfabeto_grande.length)];
            senha.push(letra);
            i++;
            if(i > tamanho){break}
            letra = await alfabeto_simbolos[Math.floor(Math.random() * alfabeto_simbolos.length)];
            senha.push(letra);
            i++;
            if(i > tamanho){break}
        }
    }else if(maiuscula && numeros){
        for(let i = 1; i <= tamanho;){
            if(i > tamanho){break}
            let letra = await alfabeto_grande[Math.floor(Math.random() * alfabeto_grande.length)];
            senha.push(letra);
            i++;
            if(i > tamanho){break}
            letra = await alfabeto_numeros[Math.floor(Math.random() * alfabeto_numeros.length)];
            senha.push(letra);
            i++;
            if(i > tamanho){break}
        } 
    }else if(simbolo && numeros){
        for(let i = 1; i <= tamanho;){
            if(i > tamanho){break}
            let letra = await alfabeto_simbolos[Math.floor(Math.random() * alfabeto_simbolos.length)];
            senha.push(letra);
            i++;
            if(i > tamanho){break}
            letra = await alfabeto_numeros[Math.floor(Math.random() * alfabeto_numeros.length)];
            senha.push(letra);
            i++;
            if(i > tamanho){break}
        } 
    }else if(minuscula){
        for(let i = 1; i <= tamanho;){
            let letra = await alfabeto_pequeno[Math.floor(Math.random() * alfabeto_pequeno.length)];
            senha.push(letra);
            i++;
        }    
    }else if(maiuscula){
        for(let i = 1; i <= tamanho;){
            let letra = await alfabeto_grande[Math.floor(Math.random() * alfabeto_grande.length)];
            senha.push(letra);
            i++;
        } 
    }else if(simbolo){
        for(let i = 1; i <= tamanho;){
            let letra = await alfabeto_simbolos[Math.floor(Math.random() * alfabeto_simbolos.length)];
            senha.push(letra);
            i++;
        }
    }else if(numeros){
        for(let i = 1; i <= tamanho;){
            let letra = await alfabeto_numeros[Math.floor(Math.random() * alfabeto_numeros.length)];
            senha.push(letra);
            i++;
        }
    }else{
        console.log("A opção escolhida não é vlálida");
    }

  
    lista.pop();
    lista.push({nome:nome, senha:senha.join('')});


    if(senha === ""){
        resultado.senha = "Parabéns, você desmarcou todos os itens! impossivel gerar senha"
        return resultado;
    }
}


function zerar_lista(){
    return console.log(lista);
}



module.exports = {lista, embaralha, zerar_lista}