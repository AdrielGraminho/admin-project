import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import { saveData} from "../Service/hoursSaveService";
import getData from "../../TableProjects/service/tableProjectsService";
import Cookies from 'universal-cookie';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

toast.configure()
const ListSaveHour = (props) =>  {
    const cookies = new Cookies();
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
        saveData(idProject, date, hours).then(response => {
            if(response.status == 200){
            toast.success("Salvo com sucesso")
            }else {
                toast.error("Algo deu errado")
            }
        })
    }

    const getProject = () => {

        if(!!selectOptions){
            return (
                <select className={"form-select"} style={{marginTop: "12px"}}
                        onChange={(item) => {
                            setIdProject(item.target.value)
                        }}
                        value={idProject}>
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
        getData().then((response) => { //todo usar id do usuário logado
            setSelectOptions(response.data.content)
            setIdProject(response.data.content[0]?.idProject)
        })
    }, []);

    const renderRow = () => {
            return(
                <tr scope="row" key={data?.idWorked}>
                    <td>
                        {cookies.get('userName')}
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
                        <button className="btn btn-primary" onClick={() => handleSave()} >Salvar</button>
                    </td>
                </tr>
            )
    }

    return(
        <div>
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
                <button className="btn btn-primary"  style={{"margin": "10px"}}  onClick={() => history.goBack()}>Voltar</button>
        </div>
)
}

export default ListSaveHour;