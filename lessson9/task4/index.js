const getPeople = obj => Object.velues(obj)
    .reduce((acc, elem) => acc.concat(elem), [])
    .map(elem => elem.name);

// const rooms = {
//     room1: [
//         { name: 'room1 name1' },
//         { name: 'room1 name2' },
//         { name: 'room1 name3' },
//         { name: 'room1 name4' },
//         { name: 'room1 name5' },
//         { name: 'room1 name6' },
//     ],
//     room2: [
//         { name: 'room2 name1' },
//         { name: 'room2 name2' },
//     ],
//     room3: [
//         { name: 'room3 name1' },
//         { name: 'room3 name2' },
//         { name: 'room3 name3' },
//         { name: 'room3 name4' },
//     ],
// };

// console.log(getPeople(rooms));
// console.log(getPeople({}));