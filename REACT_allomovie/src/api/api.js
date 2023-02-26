import axios from "axios"

const apiMovie = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNWUyYjAwZjk4NzkyZjMxOThmN2E5ZTc5OTIzMzA0ZSIsInN1YiI6IjYwMmU2ZmVkZTg2MDE3MDAzZjAxMzJhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-rusDcNeJxsaOmFO1roHZuz9dA3hSRLf7sf5s_7xADo"

apiMovie.interceptors.request.use((request) => {
    request.headers['Authorization'] = `Bearer ${token}`
    return request
})

export default apiMovie