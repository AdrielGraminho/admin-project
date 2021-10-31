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
                                    <button  onClick={() => handleEdit(worked)} >Editar</button>
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

        </div>
    )
}

export default ListHours;