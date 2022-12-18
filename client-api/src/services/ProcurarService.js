//HTTP request handler
import axios from "axios";

//database url
const url =  'http://localhost:4000/postagemReencontros/'

export async function fetchAllPost(){

    return axios.get(url).then(res => res.data)
}

export async function createPost(newRecord){

    return axios.post(url, newRecord).then(res => res.data)
}

export async function updatePost(id, updatedRecord){

    return axios.put(url + id, updatedRecord)
}

export async function removePost(id){

    return axios.delete(url + id)
}