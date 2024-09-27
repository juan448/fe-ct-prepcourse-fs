function sort(sortBy, list) {
    // Ordena la lista de objetos de forma DESCENDIENTE
    return list.sort((a, b) => b[sortBy] - a[sortBy]);
  }
  
  module.exports = sort;
  