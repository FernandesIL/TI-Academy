import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { api } from "../../../config";

export const EditarItemCompra = (props) => {

    // const [id, setId] = useState(props.match.params.id);
    const [CompraId, setCompraId] = useState(props.match.params.id);
    const [ProdutoId, setProdutoId] = useState(props.match.params.ProdutoId);
    const [quantidade, setQuantidade] = useState('');
    const [valor, setValor] = useState('');

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const EditarItemCompra = async e => {
        e.preventDefault();

        const headers = {
            'Content-Type': 'application/json'
        };

        await axios.put(api + "/compra/" + CompraId + "/editaritem/" + ProdutoId,
            { CompraId, ProdutoId, quantidade, valor }, { headers })
            .then((response) => {
                console.log(response.data.error);
                console.log(response.data.message);
                if (response.data.error) {
                    setStatus({
                        type: 'error',
                        message: response.data.message
                    })
                } else {
                    setStatus({
                        type: 'success',
                        message: response.data.message
                    })
                }
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Não foi possível conectar a API.'
                });
            });

    }
    
    return (
        <div>
            <Container>

                <div className="d-flex">
                    <div>
                        <h1> Editar Item-Compra</h1>
                    </div>
                    <div className="m-auto p-2">
                        <Link to={"/compra/" + CompraId}
                            className="btn btn-outline-dark btn-sm">Compra</Link>
                    </div>
                </div>
                <hr className="m-1" />
                {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ''}
                {status.type === 'success' ? <Alert color="success">{status.message}</Alert> : ''}

                <Form className="p-2" onSubmit={EditarItemCompra}>
                    <FormGroup className="p-2">
                        <Label>ID da Compra</Label>
                        <Input type="text" name="CompraId"
                            defaultValue={CompraId} disabled />

                    </FormGroup>

                    <FormGroup className="p-2">
                        <Label>ID do Produto</Label>
                        <Input type="text" name="ProdutoId"
                             defaultValue={ProdutoId} disabled />                       
                           
                    </FormGroup>

                    <FormGroup className="p-2">
                        <Label>Quantidade</Label>
                        <Input type="text" name="quantidade"
                            placeholder="Quantidade de Itens da Compra" defaultValue={quantidade}
                            onChange={e => setQuantidade(e.target.value)} />
                    </FormGroup>

                    <FormGroup className="p-2">
                        <Label>Valor</Label>
                        <Input type="text" name="valor"
                            placeholder="Valor Total do Item" defaultValue={valor}
                            onChange={e => setValor(e.target.value)} />
                    </FormGroup>

                    <div className="d-flex">

                        <div className="p-2"><Button type="submit" outline color="success">Salvar</Button></div>
                        

                    </div>

                </Form>
            </Container>

        </div>
    )
}