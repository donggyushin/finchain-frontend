import React from 'react';
import Presenter from './presenter';

class Container extends React.Component {
    state = {
        iconLoading: false,
        username: "",
        password1: "",
        password2: ""
    }
    render() {
        const { iconLoading, username, password1, password2 } = this.state;
        const { enterIconLoading, inputChange } = this;
        return <Presenter enterIconLoading={enterIconLoading} iconLoading={iconLoading}
            username={username}
            password1={password1}
            password2={password2}
            inputChange={inputChange}
        />
    }

    inputChange = e => {
        const name = e.target.name
        const value = e.target.value

        switch (name) {
            case "username":
                this.setState({
                    username: value
                })
                break;
            case "password1":
                this.setState({
                    password1: value
                })
                break;
            case "password2":
                this.setState({
                    password2: value
                })
                break;
            default:
                break;
        }
    }

    enterIconLoading = () => {
        this.setState({
            iconLoading: true
        })
    }
}

export default Container