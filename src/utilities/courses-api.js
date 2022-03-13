import sendRequest from "./send-request";
const BASE_URL = '/api/courses';

export function getAll() {
    return sendRequest(BASE_URL);
}

export function add(courseData) {
    return sendRequest(BASE_URL, 'POST', courseData);
}

export function deleteCourse(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE')
}