const BASE_URL = '/api/mars'

export function getAll() {
    return fetch(BASE_URL)
    .then(res => {
        return res.json()
    });
}