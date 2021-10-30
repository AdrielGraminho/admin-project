import React, { useState,  useEffect } from "react";

import List from "../../Components/List/List";
import getData from "./service/tableProjectsService";
import Constants from "./constants/constants";



const TableProjects = () =>  {

    const [data, setdata] = useState(getData)

    return(
        <div>
            <List
                data={data}
                page={0}
                totalpage={1}
                headers={Constants}
            ></List>
        </div>
    )


}

export default TableProjects;