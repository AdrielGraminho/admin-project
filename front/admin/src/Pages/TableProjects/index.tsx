import React, { useState,  useEffect } from "react";

import List from "./List/List";
import getData from "./service/tableProjectsService";
import Constants from "./constants/constants";

const TableProjects = (props : any) =>  {

    const [data, setdata] = useState()

    useEffect(() => {
        getData(3).then((response : any ) => {
            setdata(response.data.content)
        })}, []);

    return(
        <div>
            <List
                data={data}
                page={0}
                totalpage={0}
                headers={Constants}
            ></List>
        </div>
    )
}

export default TableProjects;