import React, { useState,  useEffect } from "react";
import getData from "./service/tableHoursService";
import ListHours from "./List/ListHours";
import {headers} from "./constants/constants";

export function TableHours  (props: any )  {
    const [data, setData] = useState()
    useEffect(() => {
        getData(props.location.state.idProject).then((response: any) => {
            setData(response.data.content)
        })
    }, []);
    return(
        <ListHours
            data={data}
            page={0}
            totalpage={0}
            headers={headers()}
        />
    )
}

