import React from "react";
import axios from "axios";
import Cookies from 'universal-cookie';

const getData = async (page: number) => {
    const cookies = new Cookies();
    const idUser = cookies.get('idUser')
    return await axios.get(`http://localhost:8080/project/${idUser}?page=${page || 0}`)
}

export default getData;