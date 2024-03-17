/// <reference types="react" />
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
declare global {
    var SSR: boolean;
    var ServerState: any;
}
export declare const ClassNameHelper: (...args: (string | {
    [key: string]: any;
} | undefined)[]) => string;
export declare function isBrowser(): boolean;
export declare function isSSR(): boolean;
export type Breakpoint = "xs" | "sm" | "md" | "lg";
export declare const GetBreakpoint: () => Breakpoint;
export declare const onBreakpointChange: (callback: (breakpoint: Breakpoint) => void) => void;
export declare const debounce: (callback: (...args: any[]) => void, delay: number) => (...args: any[]) => void;
export declare const throttle: (callback: (...args: any[]) => void, delay: number) => (...args: any[]) => void;
export declare const filterObject: (obj?: any, keys?: string[]) => any;
export declare const autoHeight: (ref: React.MutableRefObject<null>) => void;
export declare function registerIcons(...icons: IconDefinition[]): void;
export declare function renderApp(rootComponent: React.ReactNode, container?: Element): void;
export declare function getServerState(): any;
