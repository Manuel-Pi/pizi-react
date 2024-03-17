import { IconDefinition, library, config } from '@fortawesome/fontawesome-svg-core'
import ReactDOM from 'react-dom/client'
import React from "react"

declare global {
    var SSR: boolean
    var ServerState: any
    var NoRender: Set<string>
}

// Disable fontawesome CSS head injection if SSR before calling any icons
if(isSSR()) config.autoAddCss = false

export const ClassNameHelper = (...args: (string | {[key: string]: any} | undefined)[]):string => args.map(argument => {
    if(typeof argument === 'string'){
        return argument
    } else if(typeof argument === 'object'){
        return Object.keys(argument).map((className:string)=> argument[className] ? className : "").filter(value => !!value).join(' ')
    }
}).filter(value => !!value).join(' ')

export function isBrowser(){
    return typeof window !== 'undefined'
}

export function isSSR(){
    return typeof SSR !== 'undefined'
}

/* Breakpoints */
export type Breakpoint = "xs" | "sm" | "md" | "lg"

// https://gomakethings.com/the-easy-way-to-manage-css-breakpoints-in-javascript/
export const GetBreakpoint = ():Breakpoint => getComputedStyle(document.body, ':before').content.replace(/\"/g, '') as Breakpoint

const initialBreakpoint =  isBrowser() ? GetBreakpoint(): "xs"

const breakpoint: {
    initial: Breakpoint, 
    current: Breakpoint, 
    listener: boolean, 
    callabacks: ((breakpoint: Breakpoint) => void)[],
    debounceDelay: number
} = {
    initial: initialBreakpoint,
    current: initialBreakpoint,
    listener: false,
    callabacks: [],
    debounceDelay: 100
}

export const onBreakpointChange = (callback: (breakpoint: Breakpoint) => void) => {
    if(!breakpoint.listener){
        window.addEventListener('resize', debounce(() => {
            const bp: Breakpoint = GetBreakpoint()
            if(bp !== breakpoint.current){
                breakpoint.current = bp
                breakpoint.callabacks.forEach(callback => callback(breakpoint.current))
            }
        }, breakpoint.debounceDelay))
    }
    breakpoint.callabacks.push(callback)
}

export const debounce = (callback: (...args : any[]) => void, delay: number): (...args : any[]) => void => {
    let timeout: NodeJS.Timeout
    return (...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => callback(...args), delay)
    }
}

export const throttle = (callback: (...args : any[]) => void, delay: number): (...args : any[]) => void => {
    let throttled: boolean = false
    return (...args) => {
        if(!throttled){
            throttled = true
            callback(...args)
            setTimeout(() => throttled = false, delay)
        }
    }
}

export const filterObject = (obj: any = {}, keys: string[] = []) => {
    const finalObject: any = {}
    keys.forEach(key => finalObject[key] = obj[key])
    return finalObject
}

export const autoHeight = (ref: React.MutableRefObject<null>) => {
    const htmlElement: any = ref.current
	const styles = getComputedStyle(htmlElement)
	htmlElement.style.height = `${htmlElement.scrollHeight + parseFloat(styles.borderWidth) * 2}px`
}

export function registerIcons(...icons: IconDefinition[]){
    library.add(...icons)
}

export function renderApp(rootComponent: React.ReactNode, container?: Element){
    if(isSSR()){
        ReactDOM.hydrateRoot(container || document, rootComponent)
    } else {
        const root = ReactDOM.createRoot(container || document.getElementsByTagName("app")[0])
        root.render(rootComponent)
    }
}

export function getServerState(){
    if(!isSSR() || typeof ServerState === 'undefined') return
    return JSON.parse(atob(ServerState))
}

export const REGEX = {
    url: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=:]{1,256}[.]?[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    phone: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
    uuid: /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/,
    id: /^[0-9a-fA-F]{8,}$/,
    date: /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)((-(\d{2}):(\d{2})|Z)?)/
}

export interface IAppContextData<ServerAPI>{
    browser: boolean
    ssr: boolean
    token?: string
    user?: any
    api?: ServerAPI
}

export type AppContext<ServerAPI> = {getContext?: any} & React.Context<IAppContextData<ServerAPI>>

export function createAppContext<ServerAPI>(partialContext: Partial<IAppContextData<ServerAPI>>): AppContext<ServerAPI>{
    const context: AppContext<ServerAPI> = React.createContext<IAppContextData<ServerAPI>>({ browser: isBrowser(), ssr: isSSR(), ...partialContext })
    context.getContext = (partialContext: Partial<IAppContextData<ServerAPI>>): IAppContextData<ServerAPI> => {
        return {
            browser:    isBrowser(),
            ssr:        isSSR(),
            ...partialContext
        }
    }
    return context 
}

export function setNoRenderOnClient(componentId: string){
    NoRender.add(componentId)
}

export function shouldNotRender(componentId: string){
    if(NoRender.has(componentId)){
        NoRender.delete(componentId)
        return true
    }
    return false
}


