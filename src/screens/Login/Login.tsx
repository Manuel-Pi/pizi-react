import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { Button } from '../../components/Controls/Button/Button'
import { Switch } from '../../components/Controls/Switch/Switch'
import { TextInput } from '../../components/Inputs/TextInput/TextInput'
import { Heading } from '../../components/Typography/Heading/Heading'
import { Token } from '../../utils/Token'
import { Alerts, type AlertProps } from '../../components/Feedback/Alert/Alert'
import './login.less'
import { isBrowser } from 'pizi-utils/dom'

type LoginProps = {
    loginUrl: string,
    forgotPasswordUrl: string,
    user: any
}
 
export const Login = ({ loginUrl, forgotPasswordUrl, user }: LoginProps) => {
    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")
    const[stayConnected, setStayConnected] = useState(false)
    const[loginAnimation, setLoginAnimation] = useState(false)
    const[alerts, setAlerts] = useState<AlertProps[]>([])
    const[error, setError] = useState<boolean>()

    const urlParams = new URLSearchParams(isBrowser() ? window.location.search : {})
    const client_id             = urlParams.get('clientId')
    const response_type         = urlParams.get('responseType')
    const state                 = urlParams.get('state')
    const code_challenge_method = urlParams.get('codeChallengeMethod')
    const code_challenge        = urlParams.get('codeChallenge')

    useEffect(()=>{
        setAlerts([])
        setLoginAnimation(false)
    }, [username, password])

    const login = async () => {
        try{
            setLoginAnimation(false)
            if(user){
                await Token.clearToken()
                location.href = "/"
            } else {
                const response = await fetch(loginUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: new URLSearchParams({
                        response_type,
                        client_id,
                        username,
                        password,
                        state,
                        code_challenge_method,
                        code_challenge
                    } as any)
                })
                if(response.status === 200){
                    const { redirectUri, code } = await response.json()
                    const params = new URLSearchParams({
                        stayConnected,
                        state,
                        code
                    } as any)
                    if(redirectUri) location.href = `${redirectUri}?${params.toString()}`
                } else {
                    try{
                        const { message } = await response.json()
                        setAlerts([{content: message, color: 'error'}])
                    } catch(e){
                        setAlerts([{content: `an error occured, please try again later!`, color: 'error'}])
                    }
                    setLoginAnimation(true)
                }
            }
        } catch(e){
            setAlerts([{content: `an error occured, please try again later!`, color: 'error'}])
            console.log("error with login")
        }
    }

    return  <div className="pizi-container pizi-login">
                <Alerts alerts={alerts}/>
                <div className="pizi-container login-box">
                    <Heading tag="h2">Login</Heading>
                    {
                        user ? <>
                            <Button appearance="fill" onClick={login} color="error">sign out</Button>
                        </> : <>
                            <TextInput type="text" className="username" label="Username" onChange={setUsername} onKeyEnter={login} onError={ setError }/>
                            <TextInput type="password" className="password" label="Password" onChange={setPassword} onKeyEnter={login} onError={ setError }/>
                            <Link to={forgotPasswordUrl}>forgot your password ?</Link>
                            <Switch labelPosition='right' label="stay connected" onChange={setStayConnected}/>
                            <Button disabled={!!error} appearance="fill"onClick={login} className="login-button">sign in</Button>
                        </>
                    }
                </div>
            </div>
}