import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, fetchItemsAsync, increment } from "./Redux/appSlice";
import { Container, Table } from "react-bootstrap";

function Dashboard(){
    const Data = useSelector((state)=>state.app.data)
    const count = useSelector((state)=>state.app.value);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchItemsAsync());
    })
    return(
        <>
           <Container>
            <h3>This is Dashboard</h3>
                <h5>{count}</h5>
                <button type="button" onClick={()=>dispatch(increment())}>Increment</button>
                <button type="button" onClick={()=>dispatch(decrement())}>decrement</button>
           </Container>
           <Container className="mt-5">
           <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Image Name</th>
                        <th>Image Path</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Data.map((item, index)=>(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.imgpath}</td>
                                </tr>
                        ))
                    }
                </tbody>
            </Table>
           </Container>
        </>
    )
}

export default Dashboard;