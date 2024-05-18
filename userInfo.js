function createUserProfiles(arrayNames, arrayModifiedNames){
    if(arrayNames !== arrayModifiedNames){
        throw new Error('Your Array inputs must have the same length');
    }
    const userProfiles = [];
    let id = 1;
    for (let i = 0; i < arrayNames.length; i ++){
        const name = arrayNames[i];
        const modifiedName = arrayModifiedNames[i];
        const profile = {
            originalName: name, modifiedName: modifiedName, id: id++
        };
        userProfiles.push(profile);
    }
    return userProfiles;
}
const createUserProfiles = require('./arrayManipulation.js');
const arrayNames =['John', 'Kwame','Nina'];
const arrayModifiedNames = ['JOHN', 'kwame', 'NINA'];
const userProfiles = createUserProfiles(arrayNames, arrayModifiedNames);
console.log(userProfiles);