var css = require('./app.css');
console.log(css);
//REQUIRE NO JSPT
var jspt = require('jspt');

//REQUIRE NO JQUERY
var $ = require('jquery');

//REQUIRE MODE PORTUGOL PARA CODEMIRROR
require('codemirror/mode/portugol/portugol');

//REQUIRE CODEMIRROR

var CodeMirror = require('codemirror/lib/codemirror');

var editor = CodeMirror.fromTextArea(document.getElementById("codigo"), {
  lineNumbers: false,
  readOnly: false,
  lineNumbers: true,
  theme: 'eclipse',
  mode: "portugol"
}); 

$('body').append(editor);

var btn = $('#exec').on('click', function() {
	//LIMPA O TERMINAL
	document.getElementById("painel").innerHTML = '';
	var codigo = editor.getValue();
	console.log(codigo);
  	jspt.execute(codigo, createContext());
});

//FUNÇÃO CRIAR CONTEXTO PARA A EXECUÇÃO
function createContext() {
    return require('../node_modules/jspt/lib/jspt/modules/std').module;
}