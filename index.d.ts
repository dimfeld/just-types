declare module 'just-capitalize' {
  function capitalize(value: string): string;
  export = capitalize;
}

declare module 'just-clamp' {
  function clamp(min: number, value: number, max: number): number;
  export = clamp;
}

declare module 'just-clone' {
  /** Deeply clone an object */
  function clone<T extends object>(value: T): T;
  export = clone;
}

declare module 'just-compare' {
  /** Perform a deep equality comparison on two values. */
  function compare<T>(value1: T, value2: T): boolean;
  export = compare;
}

declare module 'just-debounce-it' {
  /**
   * @argument fn The function to debounce.
   * @argument delay How long to debounce, in milliseconds.
   * @argument triggerImmediately If true, the function is called immediately if not currently debouncing, and then further calls are debounced. If false or omitted, the delay always applies.
   */
  function debounce<T extends Function>(
    fn: T,
    delay: number,
    triggerImmediately?: boolean
  ): T;
  export = debounce;
}

declare module 'just-filter-object' {
  /** Filter out key/value pairs of an object, based on the given function. */
  function filter<T extends object>(
    obj: T,
    fn: (key: keyof T, value: T[typeof key]) => boolean
  ): Partial<T>;
  export = filter;
}

type RecursiveList<T> = (T | T[] | RecursiveList<T>)[];

declare module 'just-flatten-it' {
  function flatten<T>(list: RecursiveList<T>): T[];
  export = flatten;
}

declare module 'just-flush' {
  type NullKeys<T> = {
    [K in keyof T]-?: null extends T[K] ? K : never;
  }[keyof T];

  type NonNullKeys<T> = {
    [K in keyof T]-?: null extends T[K] ? never : K;
  }[keyof T];

  function flush<T>(value: T[]): Array<Exclude<T, null | undefined>>;
  function flush<T extends object>(
    value: T
  ): {
    [P in NullKeys<T>]?: Exclude<T[P], null>;
  } &
    { [P in NonNullKeys<T>]: T[P] };
  export = flush;
}

declare module 'just-group-by' {
  function group<T>(list: T[], fn: (val: T) => any): { [key: string]: T[] };
  export = group;
}

declare module 'just-index' {
  function index<T>(list: T[], key: string): Record<string, T>;
  export = index;
}

declare module 'just-is-empty' {
  function isEmpty(val: number | boolean | Symbol | null | undefined): true;
  function isEmpty(val: any): boolean;
  export = isEmpty;
}

declare module 'just-is-primitive' {
  type Primitive = number | string | boolean | null | undefined | Symbol;
  function isPrimitive(value: number): true;
  function isPrimitive(value: string): true;
  function isPrimitive(value: boolean): true;
  function isPrimitive(value: null): true;
  function isPrimitive(value: undefined): true;
  function isPrimitive(value: symbol): true;

  function isPrimitive(value: RegExp): false;
  function isPrimitive(value: Function): false;
  function isPrimitive(value: Date): false;
  function isPrimitive<T extends object>(value: T): false;
  function isPrimitive(value: (any | unknown)[]): false;

  function isPrimitive(value: any | unknown): value is Primitive;
  export = isPrimitive;
}

declare module 'just-map-values' {
  function mapValues<T, U>(
    input: Record<string, T>,
    fn: (val: T, key: string, obj: Record<string, T>) => U
  ): Record<string, U>;
  export = mapValues;
}

declare module 'just-omit' {
  function omit<T extends object, U extends keyof T>(
    value: T,
    keys: U[]
  ): Omit<T, U>;
  function omit<T extends object, U extends keyof T>(
    value: T,
    ...keys: U[]
  ): Omit<T, U>;
  export = omit;
}

declare module 'just-partition' {
  function partition<T>(list: T[], fn: (value: T) => boolean): [T[], T[]];
  export = partition;
}

declare module 'just-pick' {
  function pick<T extends object, U extends keyof T>(
    value: T,
    keys: U[]
  ): Pick<T, U>;
  function pick<T extends object, U extends keyof T>(
    value: T,
    ...keys: U[]
  ): Pick<T, U>;
  export = pick;
}

declare module 'just-reduce-object' {
  function reduce<ACC, T extends object>(
    value: T,
    fn: (
      acc: ACC,
      key: keyof T,
      value: T[typeof key],
      index: number,
      keys: string[]
    ) => ACC,
    initial: ACC
  ): ACC;
  export = reduce;
}

declare module 'just-safe-get' {
  function get<T extends object, U extends keyof T>(
    obj: T,
    path: U
  ): T[U] | undefined;
  function get<T extends object, U extends keyof T>(
    obj: T,
    path: U,
    defaultValue: T[typeof path]
  ): T[U];

  function get<T extends object, U extends keyof T>(
    obj: T,
    path: [U]
  ): T[U] | undefined;
  function get<T extends object, U extends keyof T>(
    obj: T,
    path: [U],
    defaultValue: T[U]
  ): T[U];

  function get<T extends object, K1 extends keyof T, K2 extends keyof T[K1]>(
    obj: T,
    path: [K1, K2]
  ): T[K1][K2] | undefined;
  function get<T extends object, K1 extends keyof T, K2 extends keyof T[K1]>(
    obj: T,
    path: [K1, K2],
    defaultValue: T[K1][K2]
  ): T[K1][K2];

  function get<
    T extends object,
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2]
  >(obj: T, path: [K1, K2, K3]): T[K1][K2][K3] | undefined;
  function get<
    T extends object,
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2]
  >(obj: T, path: [K1, K2, K3], defaultValue: T[K1][K2][K3]): T[K1][K2][K3];

  function get<
    T extends object,
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    K4 extends keyof T[K1][K2][K3]
  >(obj: T, path: [K1, K2, K3, K4]): T[K1][K2][K3][K4] | undefined;
  function get<
    T extends object,
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    K4 extends keyof T[K1][K2][K3]
  >(
    obj: T,
    path: [K1, K2, K3, K4],
    defaultValue: T[K1][K2][K3][K4]
  ): T[K1][K2][K3][K4];

  function get<
    T extends object,
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    K4 extends keyof T[K1][K2][K3],
    K5 extends keyof T[K1][K2][K3][K4]
  >(obj: T, path: [K1, K2, K3, K4, K5]): T[K1][K2][K3][K4][K5] | undefined;
  function get<
    T extends object,
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    K4 extends keyof T[K1][K2][K3],
    K5 extends keyof T[K1][K2][K3][K4]
  >(
    obj: T,
    path: [K1, K2, K3, K4, K5],
    defaultValue: T[K1][K2][K3][K4][K5]
  ): T[K1][K2][K3][K4][K5];

  function get<T extends object, U = unknown>(
    obj: T,
    path: (string | Symbol | number)[]
  ): U | undefined;
  function get<T extends object, U = unknown>(
    obj: T,
    path: (string | Symbol | number)[],
    defaultValue: U
  ): U;

  function get<T extends object, U = unknown>(
    obj: T,
    path: string | Symbol
  ): U | undefined;
  function get<T extends object, U = unknown>(
    obj: T,
    path: string | Symbol,
    defaultValue: U
  ): U;

  export = get;
}

declare module 'just-safe-set' {
  function set(
    obj: object,
    path: string | Symbol | number | (string | Symbol | number)[],
    value: any
  ): boolean;
  export = set;
}

declare module 'just-throttle' {
  /**
   * @argument fn The function to throttle.
   * @argument interval How long to wait, in milliseconds, between invocations.
   * @argument triggerImmediately If true, the function is called immediately if not currently throttled, and then further calls are throttled. If false or omitted, the delay always applies.
   * Throttle invokes the wrapped function with the arguments of the first
   * throttled call, meaning that you can not rely on it to call the function
   * with the most up-to-date arguments when the arguments are changing over
   * time. If this is unacceptable, lodash's throttle uses the most recently supplied
   * arguments when it invokes the function.
   */
  function throttle<T extends Function>(
    fn: T,
    interval: number,
    triggerImmediately?: boolean
  ): T;
  export = throttle;
}

declare module 'just-unique' {
  function uniq<T>(list: T[], sorted?: boolean, allStrings?: boolean): T[];
  export = uniq;
}

declare module 'just-range' {
  function range(start: number, end: number, step?: number): number[];
  function range(end: number, step?: number): number[];
  export = range;
}

declare module 'just-zip-it' {
  function zip<T, U>(v1: T[], v2: U[]): [T, U][];
  function zip<T, U, V>(v1: T[], v2: U[], v3: V[]): [T, U, V][];
  function zip<T, U, V, W>(v1: T[], v2: U[], v3: V[], v4: W[]): [T, U, V, W][];
  function zip<T, U, V, W, X>(
    v1: T[],
    v2: U[],
    v3: V[],
    v4: W[],
    v5: X[]
  ): [T, U, V, W, X][];
  function zip<T = any>(...values: T[][]): T[][];
  export = zip;
}
