import { fetchData } from "./api/index.js";

export async function handler(event, context){
    const echoUrl = 'https://postman-echo.com/post';
    const response = await fetchData(echoUrl, 'POST', { message: event.message });
    return response?.data?.message;
}

const message = 'This is a test message in a POST request!';
const event = {message};
const context = {};
console.log(await handler(event, message))
