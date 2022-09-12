export const Math = {
  sum: (n1: number, n2: number) => {
    return n1 + n2;
  },
  sub: (n1: number, n2: number) => {
    return n1 - n2;
  },
  div: (n1: number, n2: number) => {
    if (n1 === 0) {
      return 0;
    } else {
      return n1 / n2;
    }
  },
  mult: (n1: number, n2: number) => {
    return n1 * n2;
  },
}