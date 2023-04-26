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
    setDado(resposta.data.token)
}

export const busca= async(url:string, setDado:Function, header: any) => {
    const resposta = await api.get(url, header)
    setDado(resposta.data)
}

export const buscaId = async(url: string,setDado: Function, header: any) => { 
    const resposta = await api.get(url,header)
    setDado(resposta.data)
}

export const post= async(url:string, dados: any, setDado:Function, header: any) => {
    const resposta = await api.post(url,dados, header)
    setDado(resposta.data)
}

export const put= async(url:string, dados: any, setDado:Function, header: any) => {
    const resposta = await api.put(url,dados, header)
    setDado(resposta.data)
}

export const deleteId= async(url:string, header: any) => {
   await api.delete(url, header)
}