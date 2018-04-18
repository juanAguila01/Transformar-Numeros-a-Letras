function transformar(){
    var numIngres= document.getElementById('numIngresado').value;
    var cantDigitos= numIngres.length;
    var cad='';
    /************************************************************
     * CODIGO PENSADO PARA TRABAJAR CON OBJETOS
    *************************************************************/
    let variableProcesada = ((variable)=>{
        let objGenerado = {
           grupo1 : null,
           grupo2 : null,
           grupo3 : null,
           grupo4 : null,
           grupo5 : null
        };
        let stringInvertido = ((cadena) => {
            let x = cadena.length;
            let cadenaInvertida = '';
            while (x >= 0) {
                cadenaInvertida = cadenaInvertida + cadena.charAt(x);
                x--;
            }
            return cadenaInvertida;
        })(variable);
    
       switch (cantDigitos) {
            case 1: case 2: case 3:
               objGenerado.grupo1 = variable;
               break;
            case 4: case 5: case 6:
               objGenerado.grupo2 = [stringInvertido[2],stringInvertido[1],stringInvertido[0]].join('');
               objGenerado.grupo1 = [stringInvertido[5],stringInvertido[4],stringInvertido[3]].join('');
               break;
            case 7: case 8: case 9:
            objGenerado.grupo3 = [stringInvertido[2],stringInvertido[1],stringInvertido[0]].join('');
            objGenerado.grupo2 = [stringInvertido[5],stringInvertido[4],stringInvertido[3]].join('');
            objGenerado.grupo1 = [stringInvertido[8],stringInvertido[7],stringInvertido[6]].join('');
               break;
            case 10: case 11: case 12:
            objGenerado.grupo4 = [stringInvertido[2],stringInvertido[1],stringInvertido[0]].join('');
            objGenerado.grupo3 = [stringInvertido[5],stringInvertido[4],stringInvertido[3]].join('');
            objGenerado.grupo2 = [stringInvertido[8],stringInvertido[7],stringInvertido[6]].join('');
            objGenerado.grupo1 = [stringInvertido[11],stringInvertido[10],stringInvertido[9]].join('');
               break;
            case 13: case 14: case 15:
            objGenerado.grupo5 = [stringInvertido[2],stringInvertido[1],stringInvertido[0]].join('');
            objGenerado.grupo4 = [stringInvertido[5],stringInvertido[4],stringInvertido[3]].join('');
            objGenerado.grupo3 = [stringInvertido[8],stringInvertido[7],stringInvertido[6]].join('');
            objGenerado.grupo2 = [stringInvertido[11],stringInvertido[10],stringInvertido[9]].join('');
            objGenerado.grupo1 = [stringInvertido[14],stringInvertido[13],stringInvertido[12]].join('');
               break;
       }
       return objGenerado;
    })(numIngres);

   console.log(variableProcesada);

    /****   PARTE DE TRES DIGITOS HASTA 15 DIGITOS   *****/
    if(cantDigitos<3){
        switch(cantDigitos){
            case 1:
                transDig09(numIngres);
            break;
            case 2:
                transDig10_99(numIngres,numIngres,cantDigitos);
            break;
        }
    }else{
        switch(parseInt(cantDigitos/3)){
            case 1:
                if((cantDigitos%3)==0){
                    /*
                    ********************************************
                    CODIGO PARA EL CASO DE QUE SEAN TRES DIGITOS
                    ********************************************
                    */
                    transDig100_999(numIngres,numIngres,cantDigitos);

                }else if((cantDigitos%3)==1){
                    /*
                    ********************************************
                    CODIGO PARA EL CASO DE QUE SEAN CUATRO DIGITOS
                    ********************************************
                    */
                    if(numIngres[0]==1){
                        cad='mil '+transDig100_999((numIngres[1]+numIngres[2]+numIngres[3]),numIngres,cantDigitos);
                    }else{
                        cad= transDig09(numIngres[0])+' mil '+transDig100_999((numIngres[1]+numIngres[2]+numIngres[3]),numIngres,cantDigitos)
                    }
                    document.getElementById('numTransform').value= cad;

                }else if((cantDigitos%3)==2){
                    /*
                    ********************************************
                    CODIGO PARA EL CASO DE QUE SEAN CINCO DIGITOS
                    ********************************************
                    */
                    
                    cad=  transDig10_99((numIngres[0]+numIngres[1]),numIngres,cantDigitos)+' mil '+transDig100_999((numIngres[2]+numIngres[3]+numIngres[4]),numIngres,cantDigitos)
                    document.getElementById('numTransform').value=cad;
                };
            break;

            case 2:
            if((cantDigitos%3)==0){
                    /*
                    ********************************************
                    CODIGO PARA EL CASO DE QUE SEAN SEIS DIGITOS
                    ********************************************
                    */
                    
                    
                }else if((cantDigitos%3)==1){
                    /*
                    *********************************************
                    CODIGO PARA EL CASO DE QUE SEAN SIETE DIGITOS
                    *********************************************
                    */
                    
                


                }else if((cantDigitos%3)==2){
                    /*
                    ********************************************
                    CODIGO PARA EL CASO DE QUE SEAN OCHO DIGITOS
                    ********************************************
                    */
                    
                };
            break;

            case 3:
            if((cantDigitos%3)==0){
                    /*
                    ********************************************
                    CODIGO PARA EL CASO DE QUE SEAN NUEVE DIGITOS
                    ********************************************
                    */
                    
                }else if((cantDigitos%3)==1){
                    /*
                    ********************************************
                    CODIGO PARA EL CASO DE QUE SEAN DIES DIGITOS
                    ********************************************
                    */
                    
                }else if((cantDigitos%3)==2){
                    /*
                    ********************************************
                    CODIGO PARA EL CASO DE QUE SEAN ONCE DIGITOS
                    ********************************************
                    */
                };
            break;

            case 4:
            if((cantDigitos%3)==0){
                    /*
                    ********************************************
                    CODIGO PARA EL CASO DE QUE SEAN DOCE DIGITOS
                    ********************************************
                    */
                }else if((cantDigitos%3)==1){
                    /*
                    ********************************************
                    CODIGO PARA EL CASO DE QUE SEAN TRECE DIGITOS
                    ********************************************
                    */
                }else if((cantDigitos%3)==2){
                    /*
                    ********************************************
                    CODIGO PARA EL CASO DE QUE SEAN CATORCE DIGITOS
                    ********************************************
                    */
                };
            break;

            case 5:
            if((cantDigitos%3)==0){
                    /*
                    ********************************************
                    CODIGO PARA EL CASO DE QUE SEAN QUINCE DIGITOS
                    ********************************************
                    */
                }else if((cantDigitos%3)==1){
                    /*
                    ********************************************
                    CODIGO PARA EL CASO DE QUE SEAN DIESISEIS DIGITOS
                    ********************************************
                    */
                }else if((cantDigitos%3)==2){
                    /*
                    ********************************************
                    CODIGO PARA EL CASO DE QUE SEAN DIESISIETE DIGITOS
                    ********************************************
                    */
                };
            break;
        }
    }
} 






function transDig09(numero){
    /*
    ***********************************
    TRANSFORMA LOS DIGITOS DEL 0 AL 9
    A PALABRAS.
    ***********************************
    */
    var cad09= '';
    switch(parseInt(numero)){
        case 1:
        cad09 +='uno';
        break;

        case 2:
        cad09 +='dos';
        break;

        case 3:
        cad09 +='tres';
        break;

        case 4:
        cad09 +='cuatro';
        break;

        case 5:
        cad09 +='cinco';
        break;

        case 6:
        cad09 +='seis';
        break;

        case 7:
        cad09 +='siete';
        break;

        case 8:
        cad09 +='ocho';
        break;

        case 9:
        cad09 +='nueve';
        break;

        
        
    }

 switch(numero.length){
    case 1:
    return document.getElementById('numTransform').value= cad09;
    break;
    default:
    return cad09;
 }
};

function transDig10_99(numero,cadTotal,cantDigitos){ 
    /*
    ************************************
    TRANSFORMA LOS DIGITOS DEL 10 AL 100
    A PALABRAS.
    ************************************
    */
    var cad10_99= '';
    
        switch(parseInt(numero)){
            case 10: cad10_99+='diez';
            break;

            case 11: cad10_99+='once';
            break;

            case 12: cad10_99+='doce';
            break;

            case 13: cad10_99+='trece';
            break;

            case 14: cad10_99+='catorce';
            break;

            case 15: cad10_99+='quince';
            break;

            case 20: cad10_99+='veinte';  
            break;

            case 30: cad10_99+='treinta';
            break;

            case 40: cad10_99+='cuarenta';
            break;

            case 50: cad10_99+='cincuenta';
            break;

            case 60: cad10_99+='sesenta';
            break;
            
            case 70: cad10_99+='setenta';
            break;

            case 80: cad10_99+='ochenta';
            break;

            case 90: cad10_99+='noventa';
            break;
/****
INVESTIGA ESTA PORCION DE CODIGO AQUI PROBABLEMENTE ESTE EL ERRO
*****/
            default:
            var numRedondos= [1,'dies y ',2,'veinti',3,'treinta y ',4,'cuarenta y ',5,'cincuenta y ',6,
            'sesenta y ',7,'setenta y ',8,'ochenta y ',9,'noventa y '];
            switch(cantDigitos){
                case 5://case 6: case 7: case 8: case 9: case 10: case 11: case 12: case 13: case 14: case 15:
                for(var i=0;i<numRedondos.length;i+=2){
                if((numero[1]==1/*EN ESTE IF SOLO ENTRAN LOS NUMEROS TERMINADOS EN 1*/)){
                    if(/*EN QUE CASOS NECESITO QUE ME LANZE UN 
                    'VEINTIUN' O UN 'VEINTIUNO'
                    Y ASI CON TODOS 31 41 51 61 ETC...*/true){
                        cad10_99=numRedondos[i+1]+'un';
                    }else{
                    cad10_99=numRedondos[i+1]+transDig09(numero[1]);
                    }
                }else if(numRedondos[i]==parseInt(numero[0])){
                    cad10_99=numRedondos[i+1]+transDig09(numero[1]);
                }
            }
                break;

            default:    
            
            for(var i=0;i<numRedondos.length;i+=2){
                if(numRedondos[i]==parseInt(numero[0])){
                    cad10_99=numRedondos[i+1]+transDig09(numero[1]);
                }
            }
            break;
            };
            break;
        }
    
    switch(numero.length){
    case 2:
    return document.getElementById('numTransform').value= cad10_99;
    break;
    default:
    return cad10_99;
 }
};

function transDig100_999(numero,cadTotal,cantDigitos){
    var centenas=[1,'ciento ',2,'docientos ',3,'trecientos ',4,'cuatrocientos ',5,'quinientos ',
    6,'seiscientos ',7,'setecientos',8,'ochocientos ',9,'novecientos '];
    var cad100_999='';
    for(var i=0;i<centenas.length;i+=2){
        if((centenas[i]==1)&&(numero[1]==0)&&(numero[2]==0)){
            cad100_999= 'cien';
        }else{
            if((parseInt(numero[0])==0)&&(parseInt(numero[1])==0)&&(parseInt(numero[2])==0)){
                cad100_999='';
            }else if((parseInt(numero[0])==0)&&(parseInt(numero[1])==0)){
                cad100_999=transDig09(numero[2]);
            }else if(parseInt(numero[0])==0){
                cad100_999= transDig10_99((numero[1]+numero[2]),cadTotal,cantDigitos);
            }else if(centenas[i]==parseInt(numero[0])){
                switch(parseInt(numero[1])){
                    case 0:
                        if(parseInt(numero[2])==0){
                            cad100_999=centenas[i+1];
                        }else{
                            cad100_999=centenas[i+1]+transDig09(numero[2]);
                        }
                    break;

                    default:
                    cad100_999=centenas[i+1]+transDig10_99((numero[1]+numero[2]),cadTotal,cantDigitos);
                    break;
                }
            }
            
        }
    }
    switch(numero.length){
    case 3:
    return document.getElementById('numTransform').value= cad100_999;
    break;
    default:
    return cad100_999;
    }
};



   
