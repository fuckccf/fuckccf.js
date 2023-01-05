type Cb = () => void;
var cbs: Cb[] = [],
  CCF = {
    fuck(..._: any): void {
      cbs.forEach((cb) => {
        cb()
      });
    },
    on: (ev: string, cb: Cb) => {
      cbs.push(cb);
    },
  };
export default CCF;
