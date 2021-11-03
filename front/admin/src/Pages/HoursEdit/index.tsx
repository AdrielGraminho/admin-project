import React, {useEffect, useState} from "react";
import ListEditHours from "./List/ListEditHours";
import {headers} from "../TableHours/constants/constants";

export function HoursEdit (props : any) {

    return(
    <ListEditHours>
        data={props}
        headers={headers()}
    </ListEditHours>
    )
}