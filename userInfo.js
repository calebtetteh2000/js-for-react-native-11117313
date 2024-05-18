function createUserProfiles(arrayNames, arrayModifiedNames){
    if(arrayNames.length !== arrayModifiedNames.length){
        throw new Error('Your Array inputs must have the same length');
    }
    let id = 1;
    return arrayNames.map((name, index) => {
        return {
            originalName: name,
            modifiedName: arrayModifiedNames[index],
            id: id++
        };
    });
}

const arrayNames =['John', 'Kwame','Nina'];
const arrayModifiedNames = ['JOHN', 'kwame', 'NINA'];
const userProfiles = createUserProfiles(arrayNames, arrayModifiedNames);
console.log(userProfiles);