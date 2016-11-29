algoritmo teste;
variaveis
	x: inteiro;
fimvariaveis
inicio
	para x de 0 até 30 faça
    	imprima("numero: ", x, " quadrado: ", quadrado(x));
	fim-para
fim

função quadrado (n:inteiro) : inteiro
inicio
	retorne n*n;
fim

algoritmo teste;
variaveis
	x: inteiro;
fimvariaveis
inicio
	x:=leia();
    imprima("numero: "+ x + " quadrado: " + x*x);
fim