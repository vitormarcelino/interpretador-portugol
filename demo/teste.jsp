algoritmo teste;
variaveis
    x, y:inteiro;
fimvariaveis
inicio
    x:=1;
    y:=1;
    para x de 1 ate 5 faca
    	para y de 1 ate 3 faca
    		se x = y entao
        		imprima(x + " = " + y);
        	fimse
            imprima ("y = "+y);

        fimpara
       	imprima ("x = "+x);
    fimpara
fim
