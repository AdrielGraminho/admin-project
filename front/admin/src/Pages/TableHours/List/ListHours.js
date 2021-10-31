import React from "react";
import { useHistory } from "react-router-dom";

const ListHours = (props) =>  {

    const history = useHistory();

    const renderRow = () => {
        if(!!props.data)
            return(
                props?.data.map(data =>
                    <tr scope="row" key={data?.idWorked}>
                        <td>
                            {data?.user.name}
                        </td>
                        <td>
                            {data?.project.name}
                        </td>
                        <td>
                            {data?.date}
                        </td>
                        <td>
                            {data.user.name}
                        </td>
                    </tr>
                )
            )
    }


    return(
        <table class="table">
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
    )
}

export default ListHours;