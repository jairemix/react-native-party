import { Dictionary } from "./dictionary.type";

const startDict: Dictionary<number> = {};

export function timeStart(key: string) {
  startDict[key] = Date.now();
}

export function timeEnd(key: string) {
  const start = startDict[key];
  if (!start) {
    throw Error('time start not called for key: ' + key);
  }
  delete startDict[key]; // prevent memory leaks
  return Date.now() - start;
}

export function logTimeEnd(key: string) {
  console.log(key, timeEnd(key));
}

export function timeDecorator<
  F extends Function,
>(
  key: string,
  func: F,
): F {
  return function(...args: any[]) {
    timeStart(key);
    const retVal = func.apply(this, args); // ignore this
    logTimeEnd(key);
    return retVal;
  } as any;
}

export function timeDecoratorAsync<
  F extends (...args: any[]) => Promise<any>,
>(
  key: string,
  func: F,
): F {
  return async function(...args: any[]) {
    timeStart(key);
    const retVal = await func.apply(this, args); // ignore this
    logTimeEnd(key);
    return retVal;
  } as any;
}
