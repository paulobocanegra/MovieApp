import axios from 'axios'

export const fetchUsers = () => (
    axios.get(`/api/users`)
);

export const fetchUser = (userId) => (
    axios.get(`/api/users/${userId}`)
);

export const updateUser = (userId, data) => (
    axios.patch(`api/users/${userId}`, data)
);
