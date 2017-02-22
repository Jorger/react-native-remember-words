//Cambiar la url de consumo del Backend...
const URL_SERVICE = "https://CAMBIAR_BACKEND_SERVICIO.com";

export function get(url) {
    return fetch(url).then((response) => response.json());
}

export function searchFor(service) {
    return  get(`${URL_SERVICE}/${service}`).then(res => res);
};

export function saveWord(word, meaning, callback) {
    fetch(`${URL_SERVICE}/saveword`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({word, meaning})
    })
    .then((response) => {
        callback(response.status);
    });
};