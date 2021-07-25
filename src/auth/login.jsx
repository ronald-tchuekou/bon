import React, {useState} from 'react';
import Lang from "../utils/lang";

export default function Login () {

    const [lang, setLang] = useState('fr');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const sign_in = () => {
        window.location = "/admin";
    };

    return (
        <div className={"login-container"}>
            <div className="login_wrapper">
                <div className="login_img">
                    <img src={"/login_images/login.png"} alt="Analyzer login page"/>
                </div>
                <div className="login_form">
                    <div className="title">{Lang.login.title[lang]}</div>
                    <div className="app__form">
                        <div className="app_form-line">
                            <div className="app__form-group">
                                <label>{Lang.login.username[lang]} (Login)</label>
                                <input
                                    className="form-input"
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}/>
                            </div>
                        </div>
                        <div className="app_form-line">
                            <div className="app__form-group">
                                <label>{Lang.login.password[lang]}</label>
                                <input
                                    className="form-input"
                                    type="password"
                                    name="surname"
                                    id="surname"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={() => sign_in()}
                        style={{marginLeft: '11px'}}
                        className={"btn btn-primary"}>
                        {Lang.login.validate[lang]}
                    </button>
                </div>
            </div>
        </div>
    );
}
