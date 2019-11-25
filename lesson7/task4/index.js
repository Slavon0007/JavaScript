const getMessagesForBestStudents = (allStudents, fialedStudents) => {
    return allStudents.filter(name => !fialedStudents.includes(name))
        .map(name => 'Good job, ' + name);
}