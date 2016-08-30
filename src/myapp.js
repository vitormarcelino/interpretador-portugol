//REQUIRE NO JSPT
var jspt = require('jspt');

//REQUIRE NO JQUERY
var $ = require('jquery');

//REQUIRE CODEMIRROR

require('codemirror/mode/portugol/portugol');

var CodeMirror = require('codemirror/lib/codemirror');

var editor = CodeMirror.fromTextArea(document.getElementById("codigo"), {
  lineNumbers: false,
  readOnly: false,
  lineNumbers: true,
  theme: 'monokai',
  mode: "portugol"
});
//console.log('chegou1'); 

$('body').append(editor);


var btn = $('#exec').on('click', function() {
	//LIMPA O TERMINAL
	document.getElementById("painel").innerHTML = '';
	//var codigo = document.getElementById("codigo").value;
	var codigo = editor.getValue();
	console.log(codigo);
  	jspt.execute(codigo, createContext());
});

// ARVORE SINTATICA
//var ast = jspt.ast(codigo);
//console.log(ast); 

// EXECUTA O CODIGO
//var exec = jspt.execute(codigo, createContext());

//document.getElementById('painel').innerHTML = JSON.stringify(exec);

function createContext() {
    return require('../node_modules/jspt/lib/jspt/modules/std').module;
}