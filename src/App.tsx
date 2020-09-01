import React, { Component } from "react";

type AppProps = {
    test?: string
}

type AppState = {
    foo: string
}

export class App extends Component<AppProps, AppState> {

    constructor(props: AppProps){
        super(props);
        this.state = {
            foo: ""
        };
    }

    componentDidMount(){
    
    }

    render(){
        return  <div>
                    <h1>Heading 1</h1>
                    <h2>Heading 2</h2>
                    <h3>Heading 3</h3>
                    <h4>Heading 4</h4>
                    <h5>Heading 5</h5>
                    <buton>Button 1</buton>
                </div>
    }
}