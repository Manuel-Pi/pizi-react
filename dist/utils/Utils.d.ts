export declare const ClassNameHelper: (...args: (string | {
    [key: string]: any;
} | undefined)[]) => string;
export type Breakpoint = "xs" | "sm" | "md" | "lg";
export declare const GetBreakpoint: () => Breakpoint;
export declare const onBreakpointChange: (callback: (breakpoint: Breakpoint) => void) => void;
export declare const debounce: (callback: (...args: any[]) => void, delay: number) => (...args: any[]) => void;
export declare const throttle: (callback: (...args: any[]) => void, delay: number) => (...args: any[]) => void;
export declare const filterObject: (obj?: any, keys?: string[]) => any;
export declare const autoHeight: (ref: React.MutableRefObject<null>) => void;
