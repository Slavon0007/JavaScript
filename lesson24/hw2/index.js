const studentsBirthDays = students => {

    let [...studentArray] = students;
    return studentArray
        .sort((a, b) => a.birthDate > b.birthDate ? 1 : -1)
        .reduce((acc, elem) => {

            let arr = [];
            let strDate = new Date(elem.birthDate).toString().split(' ')[1];
            for (let i = 0; i < studentArray.length; i++) {

                if (strDate === new Date(studentArray[i].birthDate).toString().split(' ')[1]) {
                    arr.push(studentArray[i].name);

                }

            }
            acc[strDate] = arr;
            return acc;

        }, {});

};

export {
    studentsBirthDays
};