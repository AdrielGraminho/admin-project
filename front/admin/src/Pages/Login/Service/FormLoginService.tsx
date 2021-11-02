import React from "react";
import axios from "axios";
import Cookies from 'universal-cookie';

export const login = async (username : string, userPassword : string) => {
    const cookies = new Cookies();
    await axios({
        method: 'post',
        url: `http://localhost:7050/auth/signin`,
        data: {
            username: username,
            password: userPassword,
        }
    }).then((login : any) => {
        cookies.set('token', login.data.accessToken);
        cookies.set('userName', login.data.username);
        cookies.set('idUser', login.data.id);
        cookies.set('idRole', login.data.idRole);

          //console.log(cookies.get('token'));
    })
}