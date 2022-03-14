import sendRequest from "./send-request";
const BASE_URL = '/api/reviews';

export function getForGolfer(golferId) {
    return sendRequest(`${BASE_URL}/${golferId}`);
}

export function add(reviewData, golferId) {
    return sendRequest(`${BASE_URL}/${golferId}`, 'POST', reviewData);
}

export function deleteReview(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE')
}