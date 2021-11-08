import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap";

import { api } from "../../../config";

export const VisualizarProduto = () => {

    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getProdutos = async () => {
        await axios.get(api + "/listarprodutos")
            .then((response) => {
                console.log(response.data.produto);
                setData(response.data.produto);
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: sem conexão com a API!'
                })
                // console.log("Erro: sem conexão com a API")
            })
    }
    const apagarProduto = async (idProduto) => {

        const headers = {
            'Content-type': 'application/json'
        }

        await axios.get(api + "/excluirproduto/" + idProduto,
            { headers })
            .then((response) => {
                console.log(response.data.error);
                getProdutos();
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Não foi possível conetar-se a API.'
                });
            });
    }

    useEffect(() => {
        getProdutos();
    }, []);


    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div>
                        <h1> Visualizar Informações dos Produtos</h1>
                    </div>
                    <div className="m-auto p-2">
                        <Link to="/cadastrarproduto"
                            className="btn btn-outline-dark btn-sm">Cadastrar Produto</Link>
                    </div>
                    {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}
                </div>

                <Table striped>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Descricao</th>
                            <th className="text-center">Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <th>{item.id}</th>
                                <td>{item.nome}</td>
                                <td>{item.descricao}</td>
                                <td className="text-center">
                                    <Link to={"/produto/" + item.id}
                                        className="btn btn-outline-primary btn-sm mx-2">
                                        Consultar
                                    </Link>
                                    <Link to={"/editar-produto/" + item.id}
                                        className="btn btn-outline-success btn-sm mx-2">
                                        Editar Produto
                                    </Link>
                                    <span className="btn btn-outline-danger btn-sm"
                                        onClick={() => apagarProduto(item.id)}>
                                        Excluir Produto
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};