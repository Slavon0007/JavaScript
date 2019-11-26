const getPeople = obj => Object.values(obj)
    .reduce((acc, elem) => acc.concat(elem), [])
    .map(elem => elem.name);