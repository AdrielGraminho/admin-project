import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import editData from "../Service/hoursEditService";

const ListEditHours = (props) =>  {


    const [data, setData] = useState(props.children[1].location.state.worked)
    const [date, setDate] = useState(props.children[1].location.state.worked.date)
    const [hours, setHours] = useState(props.children[1].location.state.worked.hours)

    const history = useHistory();

    const handleSave = () => {
        editData(data?.idWorked, data.user.idUser, data.project.idProject, date, hours )
    }
    const renderRow = () => {
        if (!!data)
            return(
                <tr scope="row" key={data?.idWorked}>
                    <td>
                        {data.user.name}
                    </td>
                    <td>
                        {data?.project.name}
                    </td>
                    <td>
                        <input type="date"   value={date} onChange={(item => setDate(item.target.value))}/>
                    </td>
                    <td>
                        <input type="number"  value={hours} onChange={(item => setHours(item.target.value))}/>
                    </td>
                    <td >
                        <button  onClick={() => handleSave()} >Salvar</button>
                    </td>
                </tr>
                )



    }

    return(
                <table className="table">
                    <thead>
                    <tr scope="row">
                        {props.children[3].map(key => <td> {key.label} </td>)}
                    </tr>
                    </thead>
                    <tbody>
                    {
                        renderRow()
                    }
                    </tbody>
                </table>


    )
}

export default ListEditHours;