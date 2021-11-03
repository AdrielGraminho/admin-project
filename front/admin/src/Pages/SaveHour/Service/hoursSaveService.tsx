import React from "react";
import axios from "axios";
import Cookies from "universal-cookie";

export const saveData = async ( idProject :number, date: string, hours: number) => {
    const cookies = new Cookies();

    const idUser = cookies.get('idUser')
    return axios({
        method: 'post',
        url: `http://localhost:8080/worked`,
        data: {
            userId: idUser,
            projectId: idProject,
            date: date,
            hours: hours
        }
    });}