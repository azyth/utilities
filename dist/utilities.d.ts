declare const _default: "utilities";
export default _default;
export declare const recursiveCopyObject: (obj: any) => any;
export declare const checkNULL: (obj: any, objPath: string, altValue: any) => any;
export declare const setDeep: (obj: any, path: string, value: any) => void;
export declare const setDeepCopy: (obj: any, path: string, value: any) => any;
export declare const setNestedField: (obj: any, pathArray: string[], value: any) => any;
export declare const pathToArray: (path: string) => string[];
export declare const capitalize: (obj: any) => any;
export declare const changeKey: (obj: any, fn: (key: string) => string) => any;
export declare const isValue: (data: any) => boolean;
