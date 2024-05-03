import sendRequest from "./send-request";
const BASE_URL = '/mylocations';

export async function index() {
    return sendRequest(BASE_URL);
}

export function createLocation(locationId) {
    return sendRequest(`${BASE_URL}`, 'POST', locationId);
}

async function updateLocation(locationId) {
    return sendRequest(`${BASE_URL}`, 'POST', locationId);
}

async function deleteLocation(locationId) {
    return sendRequest(`${BASE_URL}`, 'POST', locationId)
}


// src folder is all frontend // utilities is frontend 

// not used -- example
// export async function getById(id) {
//     return sendRequest(`${BASE_URL}/${id}`);
//   }

