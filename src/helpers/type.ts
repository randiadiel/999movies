// WARNING: Disabled because vars used just for type checking and infer
/* eslint-disable @typescript-eslint/no-explicit-any */
export type UnionToIntersection<U> = (
  U extends any ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : U;
