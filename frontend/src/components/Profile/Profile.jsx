import React, { useState, useEffect } from 'react';
import { getProfile, updateProfile, changePassword } from '../../services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
  const [user, setUser] = useState({
    img: '',
    fullname: '',
    email: '',
    gender: '',
    address: '',
    dob: ''
  });
  const [editMode, setEditMode] = useState(false);
  const [passwords, setPasswords] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await getProfile();
      if (res && res.data) {
        setUser(res.data);
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handlePasswordChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const handleEditProfile = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('fullname', user.fullname);
    formData.append('email', user.email);
    formData.append('gender', user.gender);
    formData.append('address', user.address);
    formData.append('dob', user.dob);
    if (image) {
      formData.append('img', image);
    }
    const res = await updateProfile(formData);
    if (res && res.data) {
      setEditMode(false);
      toast.success('Profile updated successfully');
    } else {
      toast.error('Failed to update profile');
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (passwords.newPassword !== passwords.confirmPassword) {
      toast.error('New password and confirm password do not match');
      return;
    }
    const res = await changePassword({
      oldPassword: passwords.oldPassword,
      newPassword: passwords.newPassword
    });
    if (res && res.data) {
      toast.success('Password changed successfully');
      setShowChangePassword(false);
      setPasswords({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
    } else {
      toast.error('Failed to change password');
    }
  };

  const handleSignOut = () => {
    // Handle sign out logic here
    toast.success('Signed out successfully');
  };

  return (
    <div className="container my-5">
      <ToastContainer />
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src={user.img || 'https://via.placeholder.com/150'} className="card-img" alt="Profile" />
                {editMode && (
                  <div className="form-group mt-2">
                    <label htmlFor="img">Change Profile Image</label>
                    <input
                      type="file"
                      className="form-control"
                      id="img"
                      name="img"
                      onChange={handleImageChange}
                    />
                  </div>
                )}
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <form onSubmit={handleEditProfile}>
                    <div className="form-group">
                      <label htmlFor="fullname">Fullname</label>
                      <input
                        type="text"
                        className="form-control"
                        id="fullname"
                        name="fullname"
                        value={user.fullname}
                        onChange={handleChange}
                        readOnly={!editMode}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        readOnly={!editMode}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="gender">Gender</label>
                      <div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            id="male"
                            name="gender"
                            value="male"
                            checked={user.gender === 'male'}
                            onChange={handleChange}
                            disabled={!editMode}
                          />
                          <label className="form-check-label" htmlFor="male">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            id="female"
                            name="gender"
                            value="female"
                            checked={user.gender === 'female'}
                            onChange={handleChange}
                            disabled={!editMode}
                          />
                          <label className="form-check-label" htmlFor="female">Female</label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="address">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        name="address"
                        value={user.address}
                        onChange={handleChange}
                        readOnly={!editMode}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="dob">Date of Birth</label>
                      <input
                        type="date"
                        className="form-control"
                        id="dob"
                        name="dob"
                        value={user.dob}
                        onChange={handleChange}
                        readOnly={!editMode}
                      />
                    </div>
                    {editMode && (
                      <button type="submit" className="btn btn-primary btn-block">
                        Save Changes
                      </button>
                    )}
                  </form>
                  <div className="d-flex gap-2 mt-3">
                    {!editMode && (
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => setEditMode(true)}
                      >
                        Edit Profile
                      </button>
                    )}
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => setShowChangePassword(!showChangePassword)}
                    >
                      Change Password
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={handleSignOut}
                    >
                      Sign Out
                    </button>
                  </div>
                  {showChangePassword && (
                    <form onSubmit={handleChangePassword} className="mt-3">
                      <div className="form-group">
                        <label htmlFor="oldPassword">Current Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="oldPassword"
                          name="oldPassword"
                          value={passwords.oldPassword}
                          onChange={handlePasswordChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="newPassword">New Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="newPassword"
                          name="newPassword"
                          value={passwords.newPassword}
                          onChange={handlePasswordChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm New Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="confirmPassword"
                          name="confirmPassword"
                          value={passwords.confirmPassword}
                          onChange={handlePasswordChange}
                        />
                      </div>
                      <button type="submit" className="btn btn-primary btn-block">
                        Update Password
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;







