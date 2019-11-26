//const customers = {
//    'customer-id-1': {
//        name: 'William',
//        age: 54
//    },
//    'customer-id-2': {
//        name: 'Tom',
//        age: 17
//    },
//    ...
//};


const getCustomersList = obj => Object.entries(obj)
    .map(elem => ({ id: elem[0], ...obj[elem[0]] }))
    .sort((elem1, elem2) => elem1.age - elem2.age);


//  [
//      {
//          name: 'Tom',
//          age: 17,
//          id: 'customer-id-2'
//      },     
//{
//          name: 'William',
//          age: 54,
//          id: 'customer-id-1'
//      },
//      ...
//  ]