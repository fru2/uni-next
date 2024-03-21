// Truncate string after second comma
export function truncateComma(inputString) {
    const secondIndex = inputString.indexOf(',', inputString.indexOf(',') + 1);
    if (secondIndex !== -1) {
        return inputString.slice(0, secondIndex);
    }
    return inputString;
}