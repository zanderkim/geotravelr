import sendRequest from "./send-request";
const BASE_URL = '/myplaces';

export async function getPlace() {
    return sendRequest(BASE_URL);
}

export function createPlace(placeId) {
    return sendRequest(`${BASE_URL}`, 'POST', placeId);
}

export async function updatePlace(placeId, formData) {
    return sendRequest(`${BASE_URL}/${placeId}/edit`, 'PUT', formData);
}

export async function deletePlace(placeId) {
    return sendRequest(`${BASE_URL}/${placeId}`, 'DELETE');
}