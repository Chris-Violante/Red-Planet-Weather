const BASE_URL = '/home'

export function getAll() {
    return fetch(BASE_URL)
    .then(res => {
        console.log('res', res)
        return res.json()
    });
}