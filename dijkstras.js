"use strict";

const graph = {};
graph["start"] = {};
graph["start"]["a"] = 6;
graph["start"]["b"] = 2;

graph["a"] = {};
graph["a"]["fin"] = 1;

graph["b"] = {};
graph["b"]["a"] = 3;
graph["b"]["fin"] = 5;

graph["fin"] = {};

// Cria um objeto para armazenar o custo estimado 
// de cada vértice a partir do vértice inicial.
const costs = {};
costs["a"] = 6;
costs["b"] = 2;
costs["fin"] = Infinity;

// Cria um objeto para armazenar o vértice anterior 
// no caminho mais curto encontrado até cada vértice.
const parents = {};
parents["a"] = "start";
parents["b"] = "start";
parents["fin"] = null;

// Cria um array para armazenar os vértices que já foram processados.
let processed = [];

function findLowestCostNode(costs) {
  // É inicializada com um valor infinito 
  // para garantir que qualquer custo encontrado será menor.
  let lowestCost = Infinity;
  // É inicializada como null para indicar 
  // que ainda não encontramos o nó com menor custo.
  let lowestCostNode = null;
  // Itera sobre todos os nós do grafo que ainda não foram processados.
  for (let node in costs) {
    const cost = costs[node];
    // Para cada nó, compara o custo atual armazenado em 
    // costs com o menor custo encontrado até o momento.
    // E que ainda não tenha sido processado.
    if (cost < lowestCost && processed.indexOf(node) === -1) {
      // Se o custo do nó atual for menor e o nó 
      // ainda não foi processado, atualiza lowestCost e lowestCostNode.
      lowestCost = cost;
      lowestCostNode = node;
    }
  }
  // Retorna o nó com o menor custo encontrado.
  return lowestCostNode;
}

let node = findLowestCostNode(costs);

while (node !== null) {
  // Atribui o custo estimado atual do vértice node à constante cost. 
  // Esse custo é o menor custo conhecido até agora 
  // para chegar ao vértice node a partir do vértice inicial.
  const cost = costs[node];
  // Obtém o objeto que representa os vizinhos do vértice node do grafo.
  const neighbors = graph[node];
  // Itera sobre as chaves (vértices vizinhos) do objeto neighbors.
  Object.keys(neighbors).forEach(function(n) {
    // Calcula um novo custo estimado para o vizinho n.
    // Esse novo custo é a soma do custo atual do vértice node (cost) 
    // com o peso da aresta que conecta node a n (obtido de neighbors[n]).
    const new_cost = cost + neighbors[n];
    // Verifica se o novo custo calculado (new_cost) 
    // é menor que o custo estimado atual do vizinho n armazenado em costs[n].
    if (costs[n] > new_cost) {
      // Atualiza o custo estimado do vizinho n 
      // com o novo custo mais baixo encontrado.
      costs[n] = new_cost;
      // Atualiza o registro de pais do vizinho n.
      parents[n] = node;
    }
  });

  // Marca o nó node como processado.
  processed = processed.concat(node);
  // Encontra o nó com o menor custo estimado que ainda não foi processado.
  node = findLowestCostNode(costs);
}

console.log(costs);