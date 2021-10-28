
// Random number generator that can be called by other functions
const randNumGen = (number) => {
   const num =  Math.floor(Math.random() * number);
   //console.log(num);
   return num;
}

// Arrays that contain the messages that will be used to generate the messages. - Probably be moved inside the message generating function - Dnd Related

const enemyGen = () => {
    const enemyArr = [
        "Goblins",
        "Dragons",
        "Karens",
        "Nuns",
        "Ogres",
        "Strange Spherical objects",
        "Anti-vaxxers",
        "Fuzzy Wizards"
    ];
    const randEnemy = enemyArr[randNumGen(enemyArr.length)];
    console.log(randEnemy);
    return randEnemy;
}

const enemyActionGen = () => {

    // list of descriptions for some actions
    const descriptorArr = [
        "Loudly",
        "Ominously",
        "Scarily",
        "Provacatively",
        "Aggresively",
        "Seductively",
        "Like an American"
    ];
    const randDescriptor = descriptorArr[randNumGen(descriptorArr.length)];
    const actionArr = [
        `Chanting ${randDescriptor}`,
        "Chucking spears",
        `Eating ${randDescriptor}`,
        "Insulting James",
        `Pillaging Towns ${randDescriptor}`
    ];
    const randAction = actionArr[randNumGen(actionArr.length)];
    return randAction;
}

// let i = 0;
// while (i < 20) {
//     console.log(enemyActionGen());
//     i++
// }