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
        getData(page).then((response : any ) => {
            setData(response.data?.content)
            setPage(response.data?.number)
            setTotalPage(response.data.totalPages)
        })}, [page]);

    return(
        <div>
            <div>
                {
                    totalPage > 1 ?
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
            <List
                data={data}
                headers={headers()}
            ></List>
        </div>
    )
}

export default TableProjects;