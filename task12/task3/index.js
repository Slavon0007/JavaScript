  const cleanTransactionsList = arr => {
      return arr.filter(i => !isNaN(i)).map(i => '$' + Number(i).toFixed(2));
  };