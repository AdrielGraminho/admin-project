import React from "react";
import axios from "axios";
import Cookies from 'universal-cookie';

const getData = async (page: number) => {
    const cookies = new Cookies();
    const idUser = cookies.get('idUser')
    const token = cookies.get('token')
    return await axios.get(`http://localhost:7050/api/project/${idUser}?page=${page || 0}`,
        { headers: { Authorization: `Bearer ${token}` } })
}

export default getData;