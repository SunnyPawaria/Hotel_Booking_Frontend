import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:9192"
})

// This function adds a new room to the databse
export async function addRoom(photo, roomType, roomPrice) {
    const formData = new FormData()
    formData.append("photo", photo)
    formData.append("roomType", roomType)
    formData.append("roomPrice", roomPrice)

    const response = await api.post("/rooms/add/new-room", formData)
    if (response.status === 201) {
        return true
    } else {
        return false
    }
}

// This function get all the room types from the database
export async function getRoomTypes() {
    try {
        const response = await api.get("/rooms/room/types")
        return response.data
    } catch (error) {
        throw new Error("Error featching in room types")

    }
}
// This fuction get all the rooms from the database
export async function getAllRooms(){
    try {
        const result = await api.get("/rooms/all-rooms")
        return result.data
    } catch (error) {
        throw new Error("Error featching all rooms")
    }
}

// This function deletes by room id
export async function deleteRoom(roomId){
    try {
        const result =await api.delete(`/rooms/delete/room/${roomId}`)
        return result.data
    } catch (error) {
        throw new Error(`Error deleting room ${error.message}`)
    }
}