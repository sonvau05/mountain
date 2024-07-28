import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { addMountain, showMountain } from '../../../services/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ModalAddNew = ({ show, handleClose,setListMountain }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [altitude, setAltitude] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [image, setImage] = useState(null);

  const handleSave = async () => {
    let res = await addMountain(name, description, latitude, longitude, altitude, country, region, image);
    console.log("check ", res);
    if (res) {
      handleClose();
      setName('');
      setDescription('');
      setLatitude('');
      setLongitude('');
      setAltitude('');
      setCountry('');
      setRegion('');
      setImage(null);
      toast.success("Add new Mountain succsess");
      const response= await showMountain();
      setListMountain(response.data.ListMountain);
    } else {
      toast.error("Add new Mountain error");
    }
  }
  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add new Mountain</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label htmlFor="mountainName">Mountain name</label>
              <input type="text" className="form-control" id="mountainName" placeholder="Enter mountain name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea className="form-control" id="description" placeholder="Enter description" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="latitude">Latitude</label>
              <input type="text" className="form-control" id="latitude" placeholder="Enter latitude" value={latitude} onChange={(e) => setLatitude(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="longitude">Longitude</label>
              <input type="text" className="form-control" id="longitude" placeholder="Enter longitude" value={longitude} onChange={(e) => setLongitude(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="altitude">Altitude</label>
              <input type="number" className="form-control" id="altitude" placeholder="Enter altitude" step="any" value={altitude} onChange={(e) => setAltitude(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <input type="text" className="form-control" id="country" placeholder="Enter country" value={country} onChange={(e) => setCountry(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="region">Region</label>
              <input type="text" className="form-control" id="region" placeholder="Enter region" value={region} onChange={(e) => setRegion(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="imageFile">Upload Image</label>
              <div className="form-group">
                <input type="file" className="custom-file-input" id="imageFile" onChange={(e) => setImage(e.target.files[0])} />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSave()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalAddNew;