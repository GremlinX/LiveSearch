import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import arrayOfNames from './arrayOfNames';

function LiveSearch() {
    // Default list of fruits
    
    

    const [filterList, setFilterList] = useState(arrayOfNames);

    const handleSearch = (event) => {
        if (event.target.value === "") {
            setFilterList(arrayOfNames);
            return ;
        }
        const filteredValues = arrayOfNames.filter((query) =>
            // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf 
            // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
            query.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1
        );
        setFilterList(filteredValues);
    };
    return (
        <div className="app">
            <div>
            <td><Form.Control className='mb-3' name="text" type="text" onChange={handleSearch} placeholder='Search...'/></td>
            </div>
            {filterList && filterList.map((query, index) => (
                <div key={index}>{query}</div> // Display each query
            ))}
        </div>
    );
}

export default LiveSearch;