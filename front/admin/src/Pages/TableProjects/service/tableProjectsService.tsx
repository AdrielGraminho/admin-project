import React from "react";
import axios from "axios";

const getData = async (idUser: number, page: number) => {
    return await axios.get(`http://localhost:8080/project/${idUser}?page=${page || 0}`)
}

export default getData;