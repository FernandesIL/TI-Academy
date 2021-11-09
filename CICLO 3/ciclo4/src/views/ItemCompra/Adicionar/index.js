import { Link } from "react-router-dom"
import { useState } from "react"
import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap"
import axios from "axios";
import { api } from "../../../config";

export const AdicionarItemCompra = (props) => {
    const [id, setId  ] = useState(props.match.params.id)

    const [itemcompra, setItemCompra] = useState({
        CompraId: id,
        ProdutoId: '',
        quantidade: '',
        valor: ''
    });

    const [status, setStatus] = useState({
        type: '',
        message: ''
    })

    const valorInput = e => setItemCompra({
        ...itemcompra, [e.target.name]: e.target.value
    });

    const cadItemCompra = async e => {
        e.preventDefault();
        
        const headers = {
            'Content-Type': 'application/json'
        }

        await axios.post(api + "/novoitemcompra", itemcompra, { headers })
            .then((response) => {
                // console.log(response.data.message);
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
                console.log("Não foi possível conectar a API")
            })
    }

    return (
        <Container>
            <div className="d-flex">
                <div className="p-2">
                    <h1>Adicionar Item-Compra </h1>
                </div>
                <div className="m-auto p-2">
                    <Link to={"/compra/" + id}
                        className="btn btn-outline-dark btn-sm">Compra</Link>
                </div>
            </div>

            <hr className="m-1" />
            {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ''}
            {status.type === 'success' ? <Alert color="success">{status.message}</Alert> : ''}

            <Form className="p-2" onSubmit={cadItemCompra}>
                <FormGroup className="p-2">
                    <Label for="ProdutoId">Produto ID</Label>
                    <Input
                        id="ProdutoId"
                        name="ProdutoId"
                        placeholder="Insira o ID do Produto"
                        type="text"
                        onChange={valorInput}
                        required
                    />
                </FormGroup>

                <FormGroup className="p-2">
                    <Label for="quantidade">Quantidade</Label>
                    <Input
                        id="quantidade"
                        name="quantidade"
                        placeholder="Quantidade adquirida por Cliente"
                        type="text"
                        onChange={valorInput}
                        required
                    />
                </FormGroup>

                <FormGroup className="p-2">
                    <Label for="valor">
                        Valor Total do Item
                    </Label>
                    <Input
                        id="valor"
                        name="valor"
                        placeholder="Valor Final"
                        type="text"
                        onChange={valorInput}
                        required
                        
                    />
                </FormGroup>

                <Button type="submit" outline color="success" className= "mx-2">
                    Adicionar
                </Button>

                <Button type="reset" outline color="danger">
                    Limpar
                </Button>

            </Form>
        </Container>
    )
}