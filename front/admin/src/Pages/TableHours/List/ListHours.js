import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";

const ListHours = (props) =>  {

    const [data, setData] = useState()
    const history = useHistory();

    useEffect(() => {
        setData(props?.data)
        }, [props.data]);


    const renderRow = () => {
        if(!!data)
            return(
                data.map(worked =>
                            <tr scope="row" key={data?.idWorked}>
                                <td>
                                    {worked?.user.name}
                                </td>
                                <td>
                                    {worked?.project.name}
                                </td>
                                <td>
                                    {worked?.date}
                                </td>
                                <td>
                                    {worked.hours}
                                </td>
                                <td >
                                    <button className="btn btn-primary"  onClick={() => handleEdit(worked)} >Editar</button>
                                </td>
                            </tr>
                )
            )
    }

    const handleEdit = (worked) => {
        history.push
        ({
            pathname: `/editHours`,
            state: { worked: worked }
        })
    }

    const handleSave = () => {
        history.push
        ({
            pathname: `/saveHour`,
            state: { idUser: 3 } //todo trocar por id do usuário quando estiver autenticado
        })
    }

    return(
        <div>
            <table className="table">
                <thead>
                <tr scope="row">
                    {props.headers.map(key => <td> {key.label} </td>)}
                </tr>
                </thead>
                <tbody>
                {
                    renderRow()
                }
                </tbody>
            </table>
            <button  className="btn btn-primary" onClick={() => handleSave()} >Salvar Novo</button>
        </div>
    )
}

export default ListHours;