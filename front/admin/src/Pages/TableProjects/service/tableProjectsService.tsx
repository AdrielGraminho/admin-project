import React from "react";
import axios from "axios";

const getData = async (idUser: number) => {
    return await axios.get(`http://localhost:8080/project/${idUser}`)
}

export default getData;