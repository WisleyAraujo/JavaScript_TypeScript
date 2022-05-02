 const numeros = [1, 2, 3, 4, 5, 7, 6, 7]

 //CONTINUE, continua para a proxima iteração
 //BREAK, sai do laço
 for (let numero of numeros) {
     if (numero === 2) {
         console.log('jump');
         continue
     }

     console.log(numero);

     if (numero === 3) {
         console.log('achou, saindo... ');
         break
     }

 }