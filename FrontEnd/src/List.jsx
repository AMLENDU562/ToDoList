<<<<<<< HEAD
import React from 'react'
import axios from 'axios'
function List(props)
{
    function handleClick()
    {
        var deleteid=props.deleteId;
        
        axios.post("http://localhost:3000/Delete", { deleteid: deleteid })
        .then(result => console.log(result.data))
        .catch(e => console.log(e));
        props.delete(props.id);

    }

    return(
    <div className=' bg-blue-300 text-2xl w-full'>
        <li className=' border-4 border-white  border-solid rounded-xl list-none p-3' onClick={handleClick}>{props.text}</li>
      </div>
    );
}

=======
<<<<<<< HEAD
import React from 'react'
import axios from 'axios'
function List(props)
{
    function handleClick()
    {
        var deleteid=props.deleteId;
        
        axios.post("http://localhost:3000/Delete", { deleteid: deleteid })
        .then(result => console.log(result.data))
        .catch(e => console.log(e));
        props.delete(props.id);

    }

    return(
    <div className=' bg-blue-300 text-2xl w-full'>
        <li className=' border-4 border-white  border-solid rounded-xl list-none p-3' onClick={handleClick}>{props.text}</li>
      </div>
    );
}

=======
import React from 'react'
import axios from 'axios'
function List(props)
{
    function handleClick()
    {
        var deleteid=props.deleteId;
        
        axios.post("http://localhost:3000/Delete", { deleteid: deleteid })
        .then(result => console.log(result.data))
        .catch(e => console.log(e));
        props.delete(props.id);

    }

    return(
    <div className=' bg-blue-300 text-2xl w-full'>
        <li className=' border-4 border-white  border-solid rounded-xl list-none p-3' onClick={handleClick}>{props.text}</li>
      </div>
    );
}

>>>>>>> 609c4e8d42efe3e911b6ea9258fd16bb06137159
>>>>>>> 41b52bd9a9669270368e55a89cdc47bd25d2e136
export default List;