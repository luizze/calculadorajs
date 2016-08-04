$(function() {
	$("#card").draggable();
	$("#resultados").draggable();
});

var obj = [];

function somar(argument) {
	var x = document.getElementById('x').value;
	var y = document.getElementById('y').value;

	if (x == "" || y == "")
	{
		alert("Os campos s\u00e3o o brigat\u00f3rios!");
	}
	else
	{
		var resultadoDaSoma = (parseInt(x) + parseInt(y));
		var objSoma = {numeroX: x, numeroY:y, resultado:resultadoDaSoma};
		obj.push(objSoma);
		
		$('#tabela').empty();
		
		for (var cont = 0; cont < obj.length; cont++) {
			var tr = document.createElement('tr');
			
			var tdx = document.createElement('td');
			var tdy = document.createElement('td');
			var tdr = document.createElement('td');
			
			var xx = document.createTextNode(obj[cont].numeroX);
			var yy = document.createTextNode(obj[cont].numeroY);
			var result = document.createTextNode(obj[cont].resultado);
			
			tr.appendChild(tdx);
			tr.appendChild(tdy);
			tr.appendChild(tdr);
			
			tdx.appendChild(xx);
			tdy.appendChild(yy);
			tdr.appendChild(result);
			
			document.getElementById('tabela').appendChild(tr);
		}
	}
}