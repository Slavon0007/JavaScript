// const favorites = ['id-2'];
// const tree = {
//     id: 'id-1',
//     name: 'Products',
//     nodes: [
//         {
//             id: 'id-2',
//             name: 'Food',
//             nodes: []
//         },
//     ],
// };
// const result = markFavorites(tree, favorites);
// result;  {
//     id: 'id-1',
//     name: 'Products',
//     isFavorite: false,
//     nodes: [
//         {
//             id: 'id-2',
//             isFavorite: true,
//             name: 'Food',
//             nodes: []
//         },
//     ],
// };


const markFavorites = (tree, favorites) => {
    const isFavorite = favorites.includes(tree.id);
    return {
        ...tree,
        isFavorite,
        nodes: tree.nodes.map(childNode => markFavorites(childNode, favorites)),
    };
};

// const favorites = ['id-6', 'id-17'];
// const result = markFavorites(tree,favorites);
// console.log(result);