function sortDesc(array) {
    //   const result = [...array];
    //   return result.sort((a, b) => { return b - a });

    array.slice().sort((a, b) => b - a);
}