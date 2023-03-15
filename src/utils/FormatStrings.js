export function trimString(string, maxChars) {
    return string.length <= maxChars ? string : `${string.slice(0, maxChars)}...`;
}