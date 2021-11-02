import React from "react";
import { useHistory } from "react-router-dom";

 const List = (props) =>  {
     const history = useHistory();

     const renderRow = () => {
         if(!!props.data)
             return(
                 props?.data.map(data =>
                     <tr scope="row" key={data.idProject}>
                         <td>
                             {data.name}
                         </td>
                         <td >
                             <button type="button" className="btn btn-primary"  onClick={() => handleClick(data?.idProject) }
                             >Detalhes</button>
                         </td>
                     </tr>
                 )
             )
     }

     const handleClick = (idProject) => {
         history.push
         ({
             pathname: `/hours`,
             state: { idProject: idProject }
         })
     }

     return(
      <table class="table">
          <thead>
          <tr scope="row">
              {props.headers.map(key => <td> {key.label} </td>)}
          </tr>
          </thead>
          <tbody>
          {
            renderRow()
          }
          </tbody>
      </table>
    )
}

export default List;