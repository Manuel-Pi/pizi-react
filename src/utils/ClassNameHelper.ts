export const CreateClassName = (classNamesString:string = "", classNames:any = {}, ):string => {
    return (classNamesString ? classNamesString + " " : "") + Object.keys(classNames).map((className:string) => classNames[className] ? className : "").join(' ');
}