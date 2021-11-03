import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {editData} from "../Service/hoursEditService";
import getData from "../../TableProjects/service/tableProjectsService";
import {toast} from "react-toastify";

const ListEditHours = (props) =>  {
    const [data, setData] = useState(props.children[1].location.state.worked)
    const [date, setDate] = useState(props.children[1].location.state.worked.date)
    const [hours, setHours] = useState(props.children[1].location.state.worked.hours)
    const [editable, setEditable] = useState(!props.children[1].location.state.worked.idWorked)
    const [selectOptions, setSelectOptions] = useState()
    const [idProject, setIdProject] = useState(props.children[1].location.state.worked.project.idProject)

    const history = useHistory();

    const handleSave = () => {
        editData(data?.idWorked, data.user.idUser, idProject, date, hours).then(response => {
            if(response.status == 200){
                toast.success("Salvo com sucesso")
            }else {
                toast.error("Algo deu errado")
            }
        })
    }

    const getProject = () => {
        if (!!editable) {
            return <td>{data?.project.name}</td>
        }else if(!!selectOptions){
        return (
                <select className={"form-select"} style={{marginTop: "12px"}}
                        onChange={(item) => setIdProject(item.target.value)}
                        value={idProject || null}>
                    {
                        selectOptions.map(option => {
                            return <option value={option?.idProject}>{option?.name}</option>
                        })
                    }
                </select>
        )
        }
    }

    useEffect(() => {
        getData().then((response) => {
            setSelectOptions(response.data.content)
        })
    }, []);
    const renderRow = () => {
        if (!!data)
            return(
                <tr scope="row" key={data?.idWorked}>
                    <td>
                        {data.user.name}
                    </td>
                        {
                            getProject()
                        }
                    <td>
                        <input type="date"   value={date} onChange={(item => setDate(item.target.value))}/>
                    </td>
                    <td>
                        <input type="number"  value={hours} onChange={(item => setHours(item.target.value))}/>
                    </td>
                    <td >
                        <button className="btn btn-primary"  onClick={() => handleSave()} >Salvar</button>
                    </td>
                </tr>
                )
    }

    return(
        <div>
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
            <button className="btn btn-primary"  style={{"margin": "10px"}}  onClick={() => history.goBack()}>Voltar</button>
        </div>
            )
}

export default ListEditHours;