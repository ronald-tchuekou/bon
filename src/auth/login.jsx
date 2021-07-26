import React, {useState} from 'react';
import Lang from "../utils/lang";
import { Button, TextInput } from '../base-components'

export default function Login () {

    const [lang, setLang] = useState('fr');
    const [username, setUsername] = useState({value: '', error: false, helperText: ''});
    const [password, setPassword] = useState({value: '', error: false, helperText: ''});

    const sign_in = () => {
        window.location = "/admin";
    };

    return (
        <div className={"login-container"}>
            <div className="app__card">
                <div className='card__body p-10 d-flex justify-content-between'>
                    <div className="login_img">
                        <img src={"/login_images/login.png"} alt="Analyzer login page"/>
                    </div>
                    <div className="p-10">
                        <h3 className="text-center">{Lang.login.title[lang]}</h3>
                        <TextInput
                            label={Lang.login.username[lang]}
                            value={username.value}
                            error={username.error}
                            helperText={username.helperText}
                            onValueChange={_val => setUsername({value: _val, error: false, helperText: ''})}
                        />
                        <TextInput
                            label={Lang.login.password[lang]}
                            value={password.value}
                            type={"password"}
                            error={password.error}
                            helperText={username.helperText}
                            onValueChange={_val => setPassword({value: _val, error: false, helperText: ''})}
                        />
                        <div className='card__footer p-0'>
                            <Button
                                color={"primary"}
                                onClick={() => sign_in()}
                                variante={"contained"}>
                                {Lang.login.validate[lang]}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
