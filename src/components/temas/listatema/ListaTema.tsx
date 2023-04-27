import { Button, Card, CardActions, CardContent, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import {Box} from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import Tema from "../../../models/Tema";
import useLocalStorage from "react-use-localstorage";
import { busca } from "../../../services/Service";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/TokensReducer";
import { toast } from "react-toastify";

function ListaTema() {

    const [temas, setTemas] = useState<Tema[]>([])
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let history = useNavigate();

    useEffect(() => {
        if(token == '') {
            toast.info('Você precisa estar logado', {
                position:"top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme:"colored",
        
                });
            history('/login')
        }
    }, [token])

    async function getTema() {
        await busca('/temas', setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() =>{
    getTema()},
    [temas.length])

        return(
        <>
        {
            temas.map(tema =>
            <Box m={2}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Tema
                        </Typography>
                        <Typography variant="h5" component="h2">
                           {tema.descricao}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="center" mb={1.5}>
                            <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                                <Box mx={1}>
                                    <Button variant="contained" className="marginLeft" size="small" color="primary">
                                        Atualizar
                                    </Button>
                                </Box>
                            </Link>
                            <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                                <Box mx={1}>
                                    <Button variant="contained" className="marginLeft" size="small" color="secondary">
                                        Deletar
                                    </Button>
                                </Box>
                            </Link>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
            )}
        </>
    );
}

export default ListaTema;