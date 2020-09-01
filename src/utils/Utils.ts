export const ClassNameHelper = (...args: (string | {[key: string]: any} | undefined)[]):string => args.map(argument => {
    if(typeof argument === 'string'){
        return argument
    } else if(typeof argument === 'object'){
        return Object.keys(argument).map((className:string)=> argument[className] ? className : "").filter(value => !!value).join(' ')
    }
}).filter(value => !!value).join(' ')

/* Breakpoints */
export type Breakpoint = "xs" | "sm" | "md" | "lg"

// https://gomakethings.com/the-easy-way-to-manage-css-breakpoints-in-javascript/
export const GetBreakpoint = ():Breakpoint => getComputedStyle(document.body, ':before').content.replace(/\"/g, '') as Breakpoint

const breakpoint: {
    initial: Breakpoint, 
    current: Breakpoint, 
    listener: boolean, 
    callabacks: ((breakpoint: Breakpoint) => void)[],
    debounceDelay: number
} = {
    initial: GetBreakpoint(),
    current: GetBreakpoint(),
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