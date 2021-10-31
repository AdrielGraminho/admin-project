import React from "react";
import axios from "axios";

const editData = async (workedId: number, userId: number, projectId: number, date: string, hours: number) => {
    const idUser = 3 //todo após autenticar mudar esse valor para o usuário logado
    return await axios({
        method: 'put',
        url: `http://localhost:8080/worked`,
        data: {
            workedId: workedId,
            userId: userId,
            projectId: projectId,
            date: date,
            hours: hours
        }
    });
}

export default editData;