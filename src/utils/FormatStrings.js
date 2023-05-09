// This it's just to put some helper functions
// String.prototype.substring() can be used instead
export function trimString(string, maxChars) {
    return string.length <= maxChars ? string : `${string.slice(0, maxChars)}...`;
}