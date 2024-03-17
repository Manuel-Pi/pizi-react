import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { Button } from '../../components/Controls/Button/Button'
import { Switch } from '../../components/Controls/Switch/Switch'
import { TextInput } from '../../components/Inputs/TextInput/TextInput'
import { Heading } from '../../components/Typography/Heading/Heading'
import { Token } from '../../utils/Token'
import { Alerts, type AlertProps } from '../../components/Feedback/Alert/Alert'
import './login.less'

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
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username,
                        password
                    })
                })
                if(response.status === 200){
                    const { redirectUri } = await response.json()
                    if(redirectUri) location.href = redirectUri
                } else {
                    setAlerts([{content: `invalid credentials`, color: 'error'}])
                    setLoginAnimation(true)
                }
            }
        } catch(e){
            setAlerts([{content: `invalid credentials`, color: 'error'}])
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
                            <TextInput type="text" className="username" label="Username" onChange={setUsername} onKeyEnter={login} />
                            <TextInput type="password" className="password" label="Password" onChange={setPassword} onKeyEnter={login}/>
                            <Link to={forgotPasswordUrl}>forgot your password ?</Link>
                            <Switch labelPosition='right' label="stay connected" onChange={setStayConnected}/>
                            <Button disabled={!!alerts.length} appearance="fill"onClick={login} className="login-button">sign in</Button>
                        </>
                    }
                </div>
            </div>
}