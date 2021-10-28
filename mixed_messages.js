
// Random number generator that can be called by other functions
const randNumGen = (number) => {
   return Math.ceil(Math.random() * number);
}

// Arrays that contain the messages that will be used to generate the messages. - Probably be moved inside the message generating function
const randMessageStart = [
    "There is something after me",
    "How to solve problems",
    "What should I do about Bojo",
    "Jamie fell down a well",
    "How do we fix child poverty?"
];

const randMessageEnd = [
    "Grab the crowbar",
    "Wait till tomorrow",
    "Ask James not me",
    "Nuke it",
    "Pray to it"
];