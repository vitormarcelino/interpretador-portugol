//CSS
var css = require('./app.css');

//REQUIRE MODE PORTUGOL PARA CODEMIRROR
require('codemirror/mode/portugol/portugol');

//REQUIRE CODEMIRROR
var CodeMirror = require('codemirror/lib/codemirror');

var editor = CodeMirror.fromTextArea(document.getElementById('codigo'), {
    lineNumbers: false,
    readOnly: true,
    lineNumbers: true,
    theme: 'eclipse',
    mode: "portugol"
});
