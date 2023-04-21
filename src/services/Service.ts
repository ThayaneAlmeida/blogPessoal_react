import axios from 'axios';


export const api = axios.create({
    baseURL: 'https://blogpessoal-eic7.onrender.com'
})

export const cadastroUsuario = async(url:string, dados:Object, setDado:Function) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data)
}

export const login = async(url:string, dados:Object, setDado:Function) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data)
}