import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import Tema from "../../../models/Tema";
import { buscaId, deleteId } from "../../../services/Service";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/TokensReducer";


function DeletarTema() {
    let history = useNavigate();
    const { id } = useParams<{ id: string }>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    const [tema, setTema] = useState<Tema>()

    useEffect(() => {
        if (token == "") {
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "colored",

            });
            history('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
            history('/login')
        }
    }, [id])

    async function findById(id: string) {
        buscaId('/tema/${id}', setTema, {
            headers: {
                'Authorization': token
            }
        })

    }

    function sim() {
        history('/temas')
        deleteId('/temas${id}', {
            headers: {
                'Authorization': token
            }
        });
        toast.success('Tema deletado com sucesso', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "colored",

        });
    }

    function nao() {
        history('/temas')
    }


    return (
        <>
            <Box m={2}>
                <Card variant="outlined">
                    <CardContent>
                        <Box justifyContent="center">
                            <Typography color="textSecondary" gutterBottom>
                                Deseja deletar o Tema:
                            </Typography>
                            <Typography color="textSecondary">
                                {tema?.descricao}
                            </Typography>
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="start" ml={1.0} mb={2} >

                            <Button variant="contained" className="marginLeft" size='large' color="primary" onClick={sim} >Sim</Button>
                            <Button variant="contained" size='large' color="secondary" onCLick={nao}>Não</Button>
                        </Box>
                    </CardActions>
                </Card>
            </Box >
        </>
    );
}

export default DeletarTema;