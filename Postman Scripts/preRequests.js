//Gerador de CNPJ válido sem "/" e "."
function gera_random(n)
{
    var ranNum = Math.round(Math.random()*n);
    return ranNum;
}

function mod(dividendo,divisor)
{
    return Math.round(dividendo - (Math.floor(dividendo/divisor)*divisor));
}

function geradorCnpj()
{
    var n = 9;
    var n1  = gera_random(n);
    var n2  = gera_random(n);
    var n3  = gera_random(n);
    var n4  = gera_random(n);
    var n5  = gera_random(n);
    var n6  = gera_random(n);
    var n7  = gera_random(n);
    var n8  = gera_random(n);
    var n9  = 0;
    var n10 = 0;
    var n11 = 0;
    var n12 = 1;
    var d1 = n12*2+n11*3+n10*4+n9*5+n8*6+n7*7+n6*8+n5*9+n4*2+n3*3+n2*4+n1*5;
      d1 = 11 - ( mod(d1,11) );
      if (d1>=10) d1 = 0;
      var d2 = d1*2+n12*3+n11*4+n10*5+n9*6+n8*7+n7*8+n6*9+n5*2+n4*3+n3*4+n2*5+n1*6;
      d2 = 11 - ( mod(d2,11) );
      if (d2>=10) d2 = 0;
      return ''+n1+n2+n3+n4+n5+n6+n7+n8+n9+n10+n11+n12+d1+d2;
};
pm.environment.set("cnpjGerado", geradorCnpj());

//Gerador de CNPJ válido com "/" e "."
function gera_random(n)
{
    var ranNum = Math.round(Math.random()*n);
    return ranNum;
}

function mod(dividendo,divisor)
{
    return Math.round(dividendo - (Math.floor(dividendo/divisor)*divisor));
}

function geradorCnpj()
  {
      var n = 9;
      var n1  = gera_random(n);
      var n2  = gera_random(n);
      var n3  = gera_random(n);
      var n4  = gera_random(n);
      var n5  = gera_random(n);
      var n6  = gera_random(n);
      var n7  = gera_random(n);
      var n8  = gera_random(n);
      var n9  = 0;
      var n10 = 0;
      var n11 = 0;
      var n12 = 1;
      var d1 = n12*2+n11*3+n10*4+n9*5+n8*6+n7*7+n6*8+n5*9+n4*2+n3*3+n2*4+n1*5;
        d1 = 11 - ( mod(d1,11) );
        if (d1>=10) d1 = 0;
        var d2 = d1*2+n12*3+n11*4+n10*5+n9*6+n8*7+n7*8+n6*9+n5*2+n4*3+n3*4+n2*5+n1*6;
        d2 = 11 - ( mod(d2,11) );
        if (d2>=10) d2 = 0;
        return ''+n1+n2+'.'+n3+n4+n5+'.'+n6+n7+n8+'/'+n9+n10+n11+n12+'-'+d1+d2;
};
pm.environment.set("cnpjGerado", geradorCnpj());

//Gerador de CPF válido
function geradorCpf() {
    const rnd = (n) => Math.round(Math.random() * n);
    const mod = (base, div) => Math.round(base - Math.floor(base / div) * div)
    const n = Array(9).fill('').map(() => rnd(9));
  
    let dg1 = n.reduce((total, number, index) => (total + (number * (10 - index))), 0)
    dg1 = 11 - mod(dg1, 11);
    if (dg1 >= 10) dg1 = 0;
    
    let dg2 = (dg1 * 2) + n.reduce((total, number, index) => (total + (number * (11 - index))), 0)
    dg2 = 11 - mod(dg2, 11);
    if (dg2 >= 10) dg2 = 0;
  
    return `${n.join('')}${dg1}${dg2}`
  };  
 pm.environment.set("cpfGerado", geradorCpf());

 //Gerador de DDD
 const geradorDdd = getRandomDdd()
 function getRandomDdd(min, max) {
    min = Math.ceil(11);
    max = Math.floor(99);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
pm.environment.set("dddGerado", geradorDdd);

//Gerador de telefone
 const geradorTelefone = getRandomTelefone()
 function getRandomTelefone(min, max){
    min = Math.ceil(900000000);
    max = Math.floor(999999999);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
pm.environment.set("telefoneGerado", geradorTelefone);

//Gera data atual e data 30 dias posterior
const moment =require('moment');
pm.environment.set("dataPartida", moment().format("YYYY-MM-DD"));
pm.environment.set("dataRetorno", moment().add(30,'days').format("YYYY-MM-DD"));

//Gera cidade aleatória
let city =['Salvador', 'Candeias', 'Feira de Santana', 'Alagoinhas', 'Juazeiro', 'Porto Seguro', 'Catu', 'Pojuca']
let tamanho_array_city = city.length
let aleatory_city = Math.floor(Math.random( ) * tamanho_array_city)
let cidade_aleatoria = city[aleatory_city]
pm.environment.set("cidadeGerada", cidade_aleatoria);

