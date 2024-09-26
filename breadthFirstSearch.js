const graph = {};
graph["you"] = ["alice", "bob", "claire"];
// Primeiro grau
graph["bob"] = ["anuj", "peggy"];
graph["alice"] = ["peggy"];
graph["claire"] = ["thom", "jonny"];
// Segundo grau
graph["anuj"] = [];
graph["peggy"] = [];
graph["thom"] = [];
graph["jonny"] = [];

// Retorna positivo caso o último caractere da palavra seja 'm'
function personIsSeller(name) {
  return name[name.length - 1] === "m";
}

function search(name) {
  let search_queue = [];
  search_queue = search_queue.concat(graph[name]);
  console.log(search_queue);

  const searched = [];
  while (search_queue.length) {
    console.log(search_queue);
    // Remove o primeiro elemento do array
    // Método FIFO: First In, First Out
    // Primeiro a entrar, primeiro a sair
    let person = search_queue.shift();

    // So vai ser pesquisado se ele ainda não foi pesquisado
    if (searched.indexOf(person) === -1) {

      // Verifica se é o vendedor de mangas
      // Caso a última letra seja 'm'
      if (personIsSeller(person)) {
        console.log(person + " is a mango seller!");
        return true;
      }

      // Adiciona os vizinhos ao array caso ainda 
      // não tenha encontrado o vendedor de mangas
      search_queue = search_queue.concat(graph[person]);
      
      // Marca o vendedor como pesquisado
      searched.push(person);
    }
  }

  // Ninguém é vendedor de mangas
  return false;
}

search("you");