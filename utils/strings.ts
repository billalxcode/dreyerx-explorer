/**
 * Shortens a string by taking the first 5 characters, adding ellipsis in the middle,
 * and then taking the last 5 characters.
 * @param str - The string to shorten.
 * @param amount - The amount of characters to take from the start and end.
 * @returns The shortened string with ellipsis in the middle.
 */
export function shortenString(str: string, amount: number): string {
    const startLength = amount;
    const endLength = amount;
    const ellipsis = '...';

    if (str.length <= startLength + endLength) {
        return str;
    }

    const start = str.substring(0, startLength);
    const end = str.substring(str.length - endLength);
    return start + ellipsis + end;
}
