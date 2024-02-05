import axios from "axios";

const axiosInstance = axios.create({
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

const axiosUpload = axios.create({
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'multipart/form-data', // Set the Content-Type for handling multipart form data
  },
});

export { axiosInstance, axiosUpload };