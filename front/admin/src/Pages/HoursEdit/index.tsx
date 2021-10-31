import React from "react";
import ListEditHours from "./List/ListEditHours";
import {headers} from "../TableHours/constants/constants";

export function HoursEdit (props : any) {

    const worked = props.location.state.worked

    return(
    <ListEditHours>
        data={worked}
        headers={headers()}
    </ListEditHours>
    )
}