
// declaring enums
const enum icecreams {
    // by default the first options has value of '0', but we can change it
    // custom value for option
    chocolate = 'chocolate',
    // once a numberic value assigned to any option, rest of the options will also get numberic consecutive values
    vanilla = 1,
    strawberry,
}


const myflavour = icecreams.chocolate;

export {}