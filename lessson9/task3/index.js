const getCustomersList = obj => Object.entries(obj)
    .map(elem => ({ id: elem[1], ...obj[elem[1]] }))
    .filter((elem1, elem2) => elem1.age - elem2.age);