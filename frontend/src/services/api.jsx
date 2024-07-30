import axios from "./Axios";

const showMountain = () => {
    return axios.get('admin/mountain');
}

const addMountain = (name, description, latitude, longitude, altitude, country, region, img) => {
    return axios.post('admin/mountain/addnew', {
        name,
        description,
        latitude,
        longitude,
        altitude,
        country,
        region,
        img
    }, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
}

const deleteMountain = (id) => {
    return axios.delete(`admin/mountain/delete/${id}`)
}

const updateMountain = (id, name, description, latitude, longitude, altitude, country, region, image) => {
    let formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('latitude', latitude);
    formData.append('longitude', longitude);
    formData.append('altitude', altitude);
    formData.append('country', country);
    formData.append('region', region);
    if (image) {
        formData.append('image', image);
    }
    return axios.post(`/admin/mountain/update/${id}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

const Login = (username, password_hash) => {
    return axios.post('/login', {
        username,
        password_hash
    });
}

const Register = (username, password_hash, full_name, email) => {
    return axios.post('/register', {
        username,
        password_hash,
        full_name,
        email
    });
}

// New API functions for user profile
const getProfile = () => {
    return axios.get('/user/profile');
};

const updateProfile = (formData) => {
    return axios.post('/user/profile/update', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

const changePassword = (passwords) => {
    return axios.post('/user/change-password', passwords);
};

export { 
    showMountain, 
    addMountain, 
    deleteMountain, 
    updateMountain, 
    Login, 
    Register, 
    getProfile, 
    updateProfile, 
    changePassword 
};






















