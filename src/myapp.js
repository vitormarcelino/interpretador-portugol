//CSS
var css = require('./app.css');

//REQUIRE NO JQUERY
global.jQuery = require('jquery');

//TERMINAL
global.terminal = null;
require('jquery.terminal');
jQuery(function($) {
    global.terminal = $('#term_demo').terminal(function(command, term) {
      //FUNÇÕES DO TERMINAL
    }, {
        greetings: '',
        name: 'portugol',
        height: 200,
        prompt: '$ ' 
    });
});

//REQUIRE MODE PORTUGOL PARA CODEMIRROR
require('codemirror/mode/portugol/portugol');

//REQUIRE NO JSPT
var jspt = require('jspt');

//REQUIRE CODEMIRROR

var CodeMirror = require('codemirror/lib/codemirror');

var editor = CodeMirror.fromTextArea(document.getElementById("codigo"), {
  lineNumbers: false,
  readOnly: false,
  lineNumbers: true,
  theme: 'eclipse',
  mode: "portugol"
}); 

jQuery('body').append(editor);

var btn = jQuery('#exec').on('click', function() {
	//LIMPA O TERMINAL
	global.terminal.clear();
	var codigo = editor.getValue();
  jspt.execute(codigo, createContext());
});

//FUNÇÃO CRIAR CONTEXTO PARA A EXECUÇÃO
function createContext() {
    return require('../node_modules/jspt/lib/jspt/modules/std').module;
}