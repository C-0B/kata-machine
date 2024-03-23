export default function two_crystal_balls(breaks: boolean[]): number {
    const jmpAmount = Math.floor(Math.sqrt(breaks.length));

    let i = 0
    for (i = 0; i < breaks.length ; i += jmpAmount){
        if (breaks[i]){
            break;
        }
    }

    i -= jmpAmount;
    for (let j = 0; j < jmpAmount ; j++){
        if (breaks[i+j]){
            return i + j;
        }
    }

    return -1;
}