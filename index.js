//Função que adiciona os numeros no visor quando pressionado os botões
function calculaNumero(numero){
    if(typeof gvisor == 'undefined'){
        document.calcform.visor.value = '';
    }
    document.calcform.visor.value = document.calcform.visor.value + numero;
    gvisor = 1;
}
//Função que limpa o visor da Calculadora
function calcLimpar () {
    document.calcform.visor.value = '';
    delete gvalor;
    delete goper;
    delete gvisor;
}

//Funções Matemáticas
function calculaOperador (oper, valor1, valor2){
    if(oper == "somar"){
        var valor = parseFloat(valor1) + parseFloat(valor2);
    }else{
            if(oper == "subtrair"){
                var valor = valor1 - valor2;
            }else{
                if(oper == "multiplicar"){
                    var valor = valor1*valor2;
                }else{
                    if( oper == "dividir" && valor2 == 0){
                        var valor = document.calcform.visor.value = 'Math Error'; 
                    }else{
                        var valor = valor1 / valor2;
                    }

                }
            }
        }
        return(valor);
    }


//Função do algoritmo de transição das açoes do usuário

function calcParse(oper){
    var valor = document.calcform.visor.value;
    delete gvisor;

    if (typeof goper != 'undefined' && oper == 'resultado'){
        gvalor = calculaOperador(goper, gvalor, valor);
        goper = oper;
        document.calcform.visor.value = gvalor;
    }else{
        gvalor = valor;
        goper = oper;
    }
}

