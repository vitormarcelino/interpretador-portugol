//CSS
var css = require('./app.css');


//REQUIRE NO JQUERY
global.jQuery = require('jquery');

//TERMINAL
global.terminal = null;
global.controle = 0;
global.valor = null;
require('jquery.terminal');
jQuery(function($) {
    global.terminal = $('#term_demo').terminal(function(command, term) {
        if (command == "js") {
            alert("ok");
        }
      //FUNÇÕES DO TERMINAL
      global.controle = 1;
      global.valor = command;
      alert(global.valor);
    }, {
        greetings: '',
        name: 'portugol',
        height: 200,
        prompt: '' 
    });
    global.terminal.freeze(false);
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

// DESCOMENTAR QUANDO FOR PASSAR PARA O MOODLE
//idportugol e idaluno do moodle
// var idportugol = document.getElementById("idportugol").getAttribute("value");
// var idaluno = document.getElementById("idaluno").getAttribute("value");

// jQuery.ajax({
//     type: "POST",
//     url: 'buscar.php',
//     data: { idportugol: idportugol, idaluno: idaluno}, 
//     success:function(data) {
//         editor.setValue(data);
//     }
// });

jQuery('body').append(editor);

var btn = jQuery('#exec').on('click', function() {
	//LIMPA O TERMINAL
	global.terminal.clear();
	var codigo = editor.getValue();
    jspt.execute(codigo, createContext());
});

var btnSalvar = jQuery('#salvar').on('click', function() {
    jQuery.ajax({
        type: "POST",
        url: 'salvar.php',
        data: { codigo: editor.getValue(), idportugol: idportugol, idaluno: idaluno }, 
        success:function(data) {
            alert(data); 
        }
    });
});

//FUNÇÃO CRIAR CONTEXTO PARA A EXECUÇÃO
function createContext() {
    return require('../node_modules/jspt/lib/jspt/modules/std').module;
}