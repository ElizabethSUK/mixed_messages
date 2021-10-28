
// Random number generator that can be called by other functions
const randNumGen = (num: number) => {
   return Math.floor(Math.random() * num);
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
        "Fuzzy Wizards",
    ];
    return enemyArr[randNumGen(enemyArr.length)];
};

const enemyActionGen = () => {

    // list of descriptions for some actions
    const descriptorArr = [
        "Loudly",
        "Ominously",
        "Scarily",
        "Provacatively",
        "Aggresively",
        "Seductively",
        "Like an American",
    ];
    const randDescriptor = descriptorArr[randNumGen(descriptorArr.length)];
    const actionArr = [
        `Chanting ${randDescriptor}`,
        "Chucking spears",
        `Eating ${randDescriptor}`,
        "Insulting James",
        `Pillaging Towns ${randDescriptor}`,
    ];
    return actionArr[randNumGen(actionArr.length)];
};

const feelings = () => {
    const feelingArr = [
        "I'm scared",
        "I've called the police but they said go home",
        "It offends my religous freedoms",
        "I think this is a good thing",
        "I'm not sure how to feel about this",
    ];
    return feelingArr[randNumGen(feelingArr.length)];
};

const sentenceCreator = (enemies: string, action: string, feelings: string) => {
    const sentenceArr = [
        `Help ${enemies} are ${action} and ${feelings}`,
        `${feelings} because ${enemies} are ${action}`,
        `${action} with ${enemies} is great`,
    ];
    return sentenceArr[randNumGen(sentenceArr.length)];
};


console.log(sentenceCreator(enemyGen(), enemyActionGen(), feelings()));
// let i = 0;
// while (i < 5) {
//     console.log(sentenceCreator(enemyGen(), enemyActionGen(), feelings()));
//     i++
// }