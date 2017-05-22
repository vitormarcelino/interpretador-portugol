//CSS
var css = require('./app.css');

//VARIAVEL GLOBAL QUE DEFINE SE A EXECUÇÃO É DE CORREÇÃO OU EXECUÇÃO
global.isCorrection = false;
global.correctionInput = [55, 65];
global.correctionOutput = ["x = 55"];


//REQUIRE DO JQUERY
global.jQuery = require('jquery');

//TERMINAL
global.terminal = null;
require('jquery.terminal');
jQuery(function($) {
    global.terminal = $('#terminal').terminal(function(command, term) {
        if (command == "js") {
            alert("ok");
        }
    }, {
        greetings: '',
        enabled: false,
        name: 'portugol',
        height: 200,
        prompt: ''
    });
    global.terminal.freeze(true);
});

//REQUIRE MODE PORTUGOL PARA CODEMIRROR
require('codemirror/mode/portugol/portugol');

//REQUIRE NO JSPT
var jspt = require('jspt');

//REQUIRE CODEMIRROR
var CodeMirror = require('codemirror/lib/codemirror');

var editor = CodeMirror.fromTextArea(document.getElementById('codigo'), {
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
  global.isCorrection = false;
  jspt.execute(codigo, createContext());
});

var btnCorrigir = jQuery('#corrigir').on('click', function() {
  //LIMPA O TERMINAL
  global.terminal.clear();
  var codigo = editor.getValue();
  global.isCorrection = true;
  global.correctionAtualInput = 0;
  jspt.execute(codigo, createContext());
});

// DESCOMENTAR QUANDO FOR PASSAR PARA O MOODLE - APENAS PARA MODULO DE ATIVIDADES
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

//APENAS PARA O MÓDULO DE ATIVIDADES
// var btnSalvar = jQuery('#salvar').on('click', function() {
//     jQuery.ajax({
//         type: "POST",
//         url: 'salvar.php',
//         data: { codigo: editor.getValue(), idportugol: idportugol, idaluno: idaluno },
//         success:function(data) {
//             alert(data);
//         }
//     });
// });

//FUNÇÃO CRIAR CONTEXTO PARA A EXECUÇÃO
function createContext() {
    return require('../node_modules/jspt/lib/jspt/modules/std').module;
}
