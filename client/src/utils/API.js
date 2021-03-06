import axios from "axios";

export default {
    createUser: (userData) => axios.post("/auth/register", userData),
    updateUser: (id,userData) => axios.put(`/api/user/${id}`, userData),
    loginUser: (userData) => axios.post("/auth/login", userData),
    logoutUser: ()=>axios.get("/auth/logout"),
    getUserInfo: ()=>axios.get("/auth/"),
    filterUser: (user)=>axios.post(
        "/api/user", user
    ),
    getPopulatedUserInfo: (id)=>axios.get(`/api/user/${id}/populated`),
    requestRoomie: (userId, requestedId)=>axios.put(`/api/user/${userId}/request`, {requestedId}),
    getSavedApartments: (id, arr) => axios.post(`/api/apartment/${id}/savedApartments`, arr),
    getAllApts:(arr) => axios.post(`/api/apartment/matchedApartments`, arr),
    sendText: (phone) => axios.post(`/api/text/sendText`, phone),

    checkDBForApt: (aptObj) => axios.post(`/api/apartment/search`, aptObj),

    saveAptToDatabase: (aptObj) => axios.post(`/api/apartment/create`, aptObj),

    cancelRoomie: (userId, dislikedId)=>axios.put(`/api/user/${userId}/cancel`, {dislikedId}),
    declineRoomie: (userId, declinedId)=>axios.put(`/api/user/${userId}/decline`, {declinedId})

}