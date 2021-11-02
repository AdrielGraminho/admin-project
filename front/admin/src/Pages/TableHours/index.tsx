import React, { useState,  useEffect } from "react";
import getData from "./service/tableHoursService";
import ListHours from "./List/ListHours";
import {headers} from "./constants/constants";

export function TableHours  (props: any )  {

    const [data, setData] = useState()
    const [page, setPage] = useState(0)
    const [totalPage, setTotalPage] = useState(1)

    useEffect(() => {
        getData(props.location.state.idProject, page).then((response: any) => {
            setData(response.data.content)
            setPage(response.data?.number)
            setTotalPage(response.data.totalPages)
        })
    }, [page]);
    return(
        <div>
            {
                totalPage > 1 ?
                    <div  style={{"marginTop": "2px"}} >
                        <button style={{"margin": "10px"}} type="button" className="btn btn-primary"
                                onClick={() => {
                                    if(page > 0)
                                        setPage(page - 1)
                                }}>Anterior
                        </button>
                        <button  type="button" className="btn btn-primary"
                                 onClick={() => setPage(page + 1 )}>Próxima
                        </button>
                    </div> : null
            }
            <ListHours
                data={data}
                headers={headers()}
            />

        </div>

    )
}

