import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import { saveData} from "../Service/hoursSaveService";
import getData from "../../TableProjects/service/tableProjectsService";

const ListSaveHour = (props) =>  {

    const [data, setData] = useState()
    const [date, setDate] = useState("")
    const [hours, setHours] = useState(0)
    const [editable, setEditable] = useState()
    const [options, setOptions] = useState()
    const [select, setSelect] = useState()
    const [selectOptions, setSelectOptions] = useState()
    const [idProject, setIdProject] = useState()
    const history = useHistory();

    const handleSave = () => {
        saveData(props.children[1], idProject, date, hours) //todo usar id do usuário logado
    }

    const getProject = () => {

        if(!!selectOptions)
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

    useEffect(() => {
        getData(props.children[1]).then((response) => { //todo usar id do usuário logado
            setSelectOptions(response.data.content)
        })
    }, []);

    const renderRow = () => {
            return(
                <tr scope="row" key={data?.idWorked}>
                    <td>
                        {/*todo usar nome do usuário logado*/}
                        teste
                    </td>
                    {
                        getProject()
                    }
                    <td>
                        <input type="date" value={date} onChange={(item => setDate(item.target.value))}/>
                    </td>
                    <td>
                        <input type="number" value={hours} onChange={(item => setHours(item.target.value))}/>
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
                        <tr>
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

export default ListSaveHour;