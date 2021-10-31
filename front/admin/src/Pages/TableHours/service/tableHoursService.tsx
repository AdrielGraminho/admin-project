import React from "react";
import axios from "axios";

const getData = async (idProject: number) => {
    const idUser= 3 //todo após autenticar mudar esse valor para o usuário logado
    return await axios.get(`http://localhost:8080/worked/${idUser}/${idProject}`)
}

export default getData;