// export type Dictionary<V> = {
//   [K: string]: V;
// }

export type Dictionary<V, K extends string = string> = {
  [K2 in K]: V;
}
