import { type IconDefinition, library, config } from '@fortawesome/fontawesome-svg-core'
import { hydrateRoot, createRoot } from 'react-dom/client'
import React from "react"
import { isBrowser } from "pizi-utils/dom"

declare global {
    var SSR: boolean
    var ServerState: any
    var NoRender: Set<string>
}

// Disable fontawesome CSS head injection if SSR before calling any icons
if(isSSR()) config.autoAddCss = false

export function isSSR(){
    return typeof SSR !== 'undefined'
}

/* Breakpoints */
export type Breakpoint = "xs" | "sm" | "md" | "lg"

export function registerIcons(...icons: IconDefinition[]){
    library.add(...icons)
}

export function renderApp(rootComponent: React.ReactNode, container?: Element){
    if(isSSR()){
        hydrateRoot(container || document, rootComponent)
    } else {
        const root = createRoot(container || document.getElementsByTagName("app")[0])
        root.render(rootComponent)
    }
}

export function getServerState(){
    if(!isSSR() || typeof ServerState === 'undefined') return
    return JSON.parse(atob(ServerState))
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


