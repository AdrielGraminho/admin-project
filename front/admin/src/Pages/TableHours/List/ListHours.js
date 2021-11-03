import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import Cookies from 'universal-cookie';

const ListHours = (props) =>  {
    const cookies = new Cookies();
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
                                    {
                                        cookies.get('nameRole') != "ADMIN" ?
                                            <button className="btn btn-primary"  onClick={() => handleEdit(worked)} >Editar</button>
                                        :null
                                    }
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
            state: { idUser: cookies.get('idUser') }
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
            <button className="btn btn-primary"  style={{"margin": "10px"}}  onClick={() => history.goBack()}>Voltar</button>
            {
                cookies.get('nameRole') != "ADMIN" ?
                <button  className="btn btn-primary" style={{"margin": "10px"}}  onClick={() => handleSave()} >Salvar Novo</button>
                    :null
            }
        </div>
    )
}

export default ListHours;