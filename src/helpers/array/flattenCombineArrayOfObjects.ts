import { UnionToIntersection } from "@/helpers/type";

/**
 * Flattens and combines all objects inside an array into one single object.
 *
 * This function takes an array of objects and merges them into a single object.
 * If multiple objects have the same keys, the value from the last object in the array will overwrite the previous value.
 *
 * @template T - The type of the values in the objects (not used in implementation).
 * @param array - The array of objects to be combined.
 * @returns A single object containing all key-value pairs from the input array.
 *
 * @example
 * ```
 * const array = [
 *   { a: 1, b: 2 },
 *   { c: 3, d: 4 },
 *   { e: 5, f: 6 }
 * ];
 *
 * const combinedObject = flattenCombineArrayOfObjects(array);
 * console.log(combinedObject);
 * // Output: { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }
 * ```
 */
export const flattenCombineArrayOfObjects = <T extends object>(array: T[]) => {
  return array.reduce((acc, obj) => {
    return { ...acc, ...obj };
  }, {}) as UnionToIntersection<T>;
};
