import { Strategy } from 'passport-firebase-jwt';
declare const FirebaseAuthStrategy_base: new (...args: any[]) => Strategy;
export declare class FirebaseAuthStrategy extends FirebaseAuthStrategy_base {
    constructor();
    validate(token: any): Promise<import("firebase-admin/auth").DecodedIdToken>;
}
export {};
