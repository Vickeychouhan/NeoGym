import React, { useState,useEffect } from 'react'
import Header from './Header'

function User() {
    const [data,setData]=useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(json => {
                console.log(json)
                setData(json)
            })
            .catch(err => console.log(err))
    }, [])
  return (
   <>
   <Header/>
   <table className="table">
                <thead>
                    <tr>
                        <th >Sr No.</th>
                        <th >Name</th>
                        <th >Email</th>
                        <th >Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((v, i) =>
                            <tr key={i}>
                                <th>{i+1}</th>
                                <td >{v.name}</td>
                                <td>{v.email}</td>
                                <td>{v.phone}</td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
   </>
  )
}

export default User