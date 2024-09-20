import { BasicStrategy as Strategy } from 'passport-http';
declare const BasicStrategy_base: new (...args: any[]) => Strategy;
export declare class BasicStrategy extends BasicStrategy_base {
    constructor();
    validate: (req: any, username: any, password: any) => Promise<boolean>;
}
export {};
