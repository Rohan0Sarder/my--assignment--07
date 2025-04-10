import React, { useEffect, useState } from 'react';
import Table from './Table';


const Tables = ({handleHeart}) => {

    const [tables,setTables]=useState([])

    useEffect(()=>{
        fetch("api.json")
        .then(res => res.json())
        .then(data =>setTables(data))
    },[])
    // console.log(tables)

    return (
        <div>
         

           <div className="all-table">
            <Table tables={tables} handleHeart={handleHeart}></Table>
           </div>
        </div>
    );
};

export default Tables;