// You can ignore the implementation of the helper function(s) in this file

/**
 * Returns one element at random from the given array.
 * @template T
 * @param {T[]} arr array to pick from. Must have at least one element in it.
 * @returns {T} one element of the array.
 */
export function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
