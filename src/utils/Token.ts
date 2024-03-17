import { createContext } from "react"
import { getServerState } from "./Utils"

const TOKEN_KEY = "token"
interface IToken {
    accessToken: string
    userId: string
    expires: number
} 

let TOKEN: IToken | null = (getServerState()?.token as IToken)

let baseUrl = ""
export function setTokenBaseUrl(url: string){
    baseUrl = url
}

async function checkTokenIsValid(baseUrl: string){
    const response = await fetch(`${baseUrl}/authenticate`, { headers: { Authorization: `Bearer ${TOKEN!.accessToken}` } })
    if(response.status !== 200) throw new Error('token not valid')
}

async function getTokenFromCookie(baseUrl: string){
    const response = await fetch(`${baseUrl}/token`, { credentials: 'include' })
    if(response.status !== 200) throw new Error('cannot get token from cookie')
    TOKEN = await response.json()
    sessionStorage.setItem(TOKEN_KEY, JSON.stringify(TOKEN))
}

export const Token ={ 
    hasToken(){ return !!TOKEN },
    async getToken(){
        try{
            if(!this.hasToken()){
                const tokenFromStorage = sessionStorage.getItem(TOKEN_KEY)
                if(tokenFromStorage) TOKEN = JSON.parse(tokenFromStorage)
            } 
            try{
                if(!this.hasToken()) throw new Error("token not found")
                if(TOKEN!.expires < Date.now()) throw new Error("token expired")
                await checkTokenIsValid(baseUrl) 
            } catch(e){
                await getTokenFromCookie(baseUrl)
            }
        } catch(e: any){
            await this.clearToken()
            console.error(`cannot get token: ${e.message}`)
        }
        return TOKEN
    },
    async clearToken(force = false){
        if(!force && !this.hasToken() && !sessionStorage.getItem(TOKEN_KEY)) return
        TOKEN = null
        sessionStorage.removeItem("token")
        await fetch(`${baseUrl}/logout`, { credentials: 'include' })
    }
}

export interface TokenContextType {
    token?: IToken
    user?: {
        id: string
        username: string
    } 
}

export const TokenContext = createContext<TokenContextType>({})