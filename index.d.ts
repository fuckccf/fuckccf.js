type Cb = () => void;
declare var CCF: {
    fuck(..._: any): void;
    on: (ev: string, cb: Cb) => void;
};
export default CCF;
