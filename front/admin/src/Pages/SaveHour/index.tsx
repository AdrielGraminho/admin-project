import React, {useEffect, useState} from "react";
import ListSaveHour from "./List/ListSaveHour";
import {headers} from "../TableHours/constants/constants";

export function SaveHour (props : any) {

    return(
    <ListSaveHour>

        data={props.location.state.idUser}
        headers={headers()}
    </ListSaveHour>
    )
}