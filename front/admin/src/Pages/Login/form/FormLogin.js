import React, {useState} from "react";
import {login} from "../Service/FormLoginService";
import {useHistory} from "react-router-dom";
import Cookies from 'universal-cookie';

export const FormLogin = () => {
    const cookies = new Cookies();
    const history = useHistory();

    const [userName, setUsername] = useState()
    const [userPassword, setUserPassword] = useState()

    const handleSubmit = () => {
        if(!!userName && !!userPassword){
            login(userName, userPassword).then(()  => {
                if (!!cookies.get('token')){
                    history.push("/projects")
                }
            })
        }
    }

    return(
        <form>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput">Nome</label>
                <input onChange={(item => setUsername(item.target.value))} type="text" className="form-control text-center" id="formGroupExampleInput" placeholder="Nome do Usuário"/>
            </div>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput2">Senha</label>
                <input onChange={(item => setUserPassword(item.target.value))} type="password" className="form-control text-center" id="formGroupExampleInput2" placeholder="Password"/>
            </div>
            <button type="button" className="btn btn-primary" onClick={() => handleSubmit()}>Login</button>
        </form>
    )
}

