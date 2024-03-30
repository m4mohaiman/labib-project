import axios from "axios";

const BASE_URL = "http://localhost:6969/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTQ0MGExNmQ3YTdmMDcyZGE4YTU3MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxMDkyMjM0OCwiZXhwIjoxNzExMTgxNTQ4fQ.Wb_AJYPJ-vGahXIr3W7RqloeIOjZUtWMneo4KqGH8DI"

export const publicRequest = axios.create({
    baseURL:BASE_URL,
});

export const userRequest = axios.create({
    baseURL:BASE_URL,
    header: { token : `Bearer $(TOKEN)`}
})

