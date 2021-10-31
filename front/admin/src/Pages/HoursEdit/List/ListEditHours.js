import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";

const ListEditHours = (props) =>  {


    const data = props.children[1]
    const headers = props.children[3]


    return(
        <div>
            <table className="table">
                <thead>
                <tr scope="row">
                    {headers.map(key => <td> {key.label} </td>)}
                </tr>
                </thead>
                <tbody>

                </tbody>
            </table>

        </div>

    )
}

export default ListEditHours;