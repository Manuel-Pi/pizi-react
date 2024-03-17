import { Token } from "./Token"

export async function get(collectionName: string, id: string, selector?: string) {
    let url = `/${collectionName}/${id}`
    if(selector) url += `/${selector}`
    return await getJSON(url)
}

export async function list(collectionName: string) {
    return await getJSON(collectionName)
}

export async function getJSON(url: string){
    const headers = await getHeaders({json: true})
    const response = await fetch(`/api/rest/${url}`, { headers })
    return await response.json()
}

async function getHeaders(options: {json?: boolean} = {}){
    const headers: any = {}
    if(options.json) headers['Content-Type'] = 'application/json' 
    const token = await Token.getToken()
    if(token) headers['Authorization'] = `Bearer ${token.accessToken}` 
    return headers
}
