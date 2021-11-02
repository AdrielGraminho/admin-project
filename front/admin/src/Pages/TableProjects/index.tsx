import React, { useState,  useEffect } from "react";

import List from "./List/List";
import getData from "./service/tableProjectsService";
import {headers} from "./constants/constants";
import Cookies from 'universal-cookie';

const TableProjects = (props : any) =>  {
    const cookies = new Cookies();

    const [data, setData] = useState()
    const [page, setPage] = useState(0)
    const [totalPage, setTotalPage] = useState(1)

    useEffect(() => {
        getData(cookies.get('idUser'), page).then((response : any ) => {
            setData(response.data?.content)
            setPage(response.data?.number)
        })}, [page]);
   // setPage(response.data?.content?.number)

    return(
        <div>
            <List
                data={data}
                headers={headers()}
            ></List>
            <div>
                {
                    totalPage ==0 ?
                    <div>
                        <button style={{"margin": "10px"}}  type="button" className="btn btn-primary "
                                onClick={() => {
                                    if(page > 0)
                                        setPage(page - 1)
                                }}>Anterior
                        </button>
                        <button type="button" className="btn btn-primary"
                                onClick={() => setPage(page + 1 )}>Próxima
                        </button>
                    </div> : null
                }
            </div>

        </div>
    )
}

export default TableProjects;