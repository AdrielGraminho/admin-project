import React from "react";

 const List = (props) =>  {
     return(
      <table>
         <thead>
             <tr>
                 {props.headers.map(key =>
                             <td> {key.label} </td>
                    )
                 }
             </tr>
         </thead>
         <tbody>
                {props.data.map(key =>
                     <tr key={key.id}>
                         <td>
                             {key.name}
                         </td>
                         <td >
                             <button onClick={()=> {
                                 console.log(key.id)
                             }}></button>
                         </td>
                     </tr> )
                }
         </tbody>
      </table>
    )
}

export default List;