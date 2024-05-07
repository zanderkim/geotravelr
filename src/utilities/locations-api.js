import sendRequest from "./send-request";
const BASE_URL = '/mylocations';

export async function getLocation() {
    return sendRequest(BASE_URL);
}

export function createLocation(locationId) {
    return sendRequest(`${BASE_URL}`, 'POST', locationId);
}

export async function updateLocation(locationId, formData) {
    return sendRequest(`${BASE_URL}/${locationId}/edit`, 'PUT', formData);
}

export async function deleteLocation(locationId) {
    return sendRequest(`${BASE_URL}/${locationId}`, 'DELETE');
}

