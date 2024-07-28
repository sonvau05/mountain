import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { toast } from 'react-toastify';
import { deleteMountain, showMountain } from '../../../services/api';
const ModalDelete = ({ show, handleClose, dataMountainDelete, setListMountain }) => {

    const confirmDelete = async () => {
        let res = await deleteMountain(dataMountainDelete.id);
        if (res) {
            toast.success("Delete success");
            handleClose();
            const response= await showMountain();
            setListMountain(response.data.ListMountain);
        } else {
            toast.error("Delete error");
        }
    }
    return (
        <>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Mountain</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='body-add-new'>
                        Are you sure to delete, this action can't be undone !
                        <br />
                        <b>name={dataMountainDelete.name}</b>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => confirmDelete()}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDelete;