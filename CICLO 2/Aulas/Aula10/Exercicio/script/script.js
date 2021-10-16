//criar um arrays
             // 0         1           2        3        4   
             let nomes = ["Suelem", "Marcelo", "Raphel", "José", "Marcos"];

             const coisaNomes = ( name, novoNome, index )=>{
             
                 console.log("Quantidade de elementos do array...: ", name.length);
                 console.log(`Você escolheu o indice ${index} que é o elemento ${name[index]}`);
                 console.log(`O nome ${novoNome} foi inserido no array`);
                 name.push(novoNome);
                 console.log("A quantidade de elementos atual do array é de..: ", name.length);
             }
             
              coisaNomes(nomes, "Marina", 4);
              coisaNomes(nomes, "Dulce", 2);
              coisaNomes(nomes, "Suelem", 3);