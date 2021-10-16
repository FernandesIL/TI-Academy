//Exercicio

palavra= 'Ingrid';

(function(){

    document.write(` ESTA PALAVRA TEM ${palavra.length} caracteres <br>`);
    document.write( ` ESTA PALAVRA ${palavra} ficou ${palavra.toUpperCase()} <br> `);
    document.write(` A LETRA '${palavra[3]}' é o 3º caracter <br>`);
    document.write(` ${palavra} ficou ${palavra.replace(palavra[3], 'X')}` );
}) (palavra)

