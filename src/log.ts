export enum Module {
  Async = 'async',
  StreamingAsync = 'streamingAsync',
  Analytics = 'analytics',
}

export const info = (message: string, ...args: Array<string | number | undefined>) => {
  if (process.env.NODE_ENV !== 'production') {
    console.info(message, ...args);
  }
};

export const warn = (message: string, ...args: Array<string | number | undefined>) => {
  if (process.env.NODE_ENV !== 'production') {
    console.warn(message, ...args);
  }
};

export const error = (module: Module, message: string, ...args: Array<string | number | undefined>) => {
  if (process.env.NODE_ENV !== 'production') {
    console.warn(message, ...args);
  } else {
    ga('send', 'event', 'debug', module, message); // send to GA to avoid async loop (error -> error -> ∞)
  }
};
