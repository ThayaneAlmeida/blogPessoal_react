import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './paginas/home/Home';
import Navbar from './components/estaticos/navbar/Navbar'
import Footer from './components/estaticos/footer/Footer'
import './App.css';
import Login from './paginas/login/Login'
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaTema from './components/temas/listatema/ListaTema'
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import CadastroPostagem from './components/postagens/cadastroPostagem/CadastroPostagem';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import { Provider } from 'react-redux';
import store from './store/Store';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <Provider store = {store}>
      <ToastContainer />
    <Router>
      <Navbar />
      <div style={{minHeight: '100vh'}}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastrar" element={<CadastroUsuario />} />
          <Route path="/temas" element={<ListaTema/>} />
          <Route path="/postagens" element={<ListaPostagem/>} />

          <Route path="/formularioPostagem" element={<CadastroPostagem/>} />
          <Route path="/formularioPostagem/:id" element={<CadastroPostagem/>} />
          <Route path="/formularioTema" element={<CadastroTema/>} />
          <Route path="/formularioTema/:id" element={<CadastroTema/>} />
          <Route path="/deletarPostagem/:id" element={<DeletarPostagem/>} />
          <Route path="/deletarTema/:id" element={<DeletarTema/>} />
        </Routes>
      </div>
      <Footer />
    </Router>
    </Provider>
   );
}

export default App
