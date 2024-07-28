import React, { useEffect, useState } from "react";
import { showMountain } from "../../../services/api";
import ModalAddNew from "./ModalAddNew";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModalDelete from "./ModalDelete";

const TableGroup = () => {
    const [listMountain, setListMountain] = useState([]);
    const [showModalAddNew, setshowModalAddNew] = useState(false);

    const [showModalDelete, setshowModalDelete] = useState(false);
    const [dataMountainDelete, setDataMountainDelete] = useState({});

    useEffect(() => {
        getListMountain();
    }, [])

    const getListMountain = async () => {
        try {
            const response = await showMountain();
            setListMountain(response.data.ListMountain);
        } catch (error) {
            console.error(error);
        }
    }

    const handleShow = () => {
        setshowModalAddNew(true);
    }
    const handleShowDelete = (mountain) => {
        setshowModalDelete(true);
        setDataMountainDelete(mountain);
    }

    const handleClose = () => {
        setshowModalAddNew(false);
        setshowModalDelete(false);
    }
    return (
        <>

            <button className="btn btn-success mb-3" onClick={handleShow}>
                <i className="bi bi-plus-circle"></i> Add New
            </button>
            <table className="table table-striped table-bordered">
                <thead className="table-primary">
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Longtitude</th>
                        <th scope="col">Latitude</th>
                        <th scope="col">Latitude</th>
                        <th scope="col">Altitude</th>
                        <th scope="col">Country</th>
                        <th scope="col">Region</th>
                        <th scope="col">Img</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listMountain.map((item, index) => (
                        <tr key={index}>
                            <th scope="row" class="text-center align-middle">{index + 1}</th>
                            <td class="text-start align-middle">{item.name}</td>
                            <td class="text-start align-middle">{item.longitude}</td>
                            <td class="text-start align-middle">{item.latitude}</td>
                            <td class="text-start align-middle">{item.latitude}</td>
                            <td class="text-start align-middle">{item.altitude}</td>
                            <td class="text-start align-middle">{item.country}</td>
                            <td class="text-start align-middle">{item.region}</td>
                            <td class="text-start align-middle">
                                {item.img ? (
                                    <img
                                        src={`http://localhost:8000/storage/images/${item.img}`}
                                        alt={item.name}
                                        style={{ maxWidth: '100%', height: '20vh' }}
                                    />
                                ) : (
                                    <span>No Image</span>
                                )}
                            </td>
                            <td class="align-middle">
                                <div class="d-flex justify-content-evenly">
                                    <button class="btn btn-primary" >Update</button>
                                    <button class="btn btn-danger" onClick={()=>handleShowDelete(item)}>Delete</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ModalAddNew show={showModalAddNew} handleClose={handleClose} setListMountain={setListMountain} />
            <ModalDelete show={showModalDelete} handleClose={handleClose} dataMountainDelete={dataMountainDelete} setListMountain={setListMountain}/>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </>

    )
}

export default TableGroup;