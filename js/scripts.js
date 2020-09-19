const data = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'

];

  

 var mes_atual = 0;

document.getElementById('date_previous').onclick = function () {

    if (mes_atual == 0) {
        var mes_anterio = data.length - 1;
    }else {
        var mes_anterio = mes_atual - 1;
    }

    document.getElementById('month').innerHTML = '<h2>' + data[mes_anterio] + '</h2>';
    mes_atual = mes_anterio;

} 

document.getElementById('date_next').onclick = function () {

    if (mes_atual == data.length - 1) {
        var mes_seguinte = 0;
    }else {
        var mes_seguinte = mes_atual + 1;
    }

    document.getElementById('month').innerHTML = '<h2>' + data[mes_seguinte] + '</h2>';
    mes_atual = mes_seguinte;

} 
   
