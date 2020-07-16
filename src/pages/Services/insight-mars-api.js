export function getMarsData() {
    return fetch('https://api.nasa.gov/insight_weather/?api_key=56WHNLPWcfawqwbHSBN0ltUyf0Quaf5M2ZdlmxgG&feedtype=json&ver=1.0', {mode: 'cors'}).then(res => res.json())
}