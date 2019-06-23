import React from "react"
import { CircularProgress, Typography } from '@material-ui/core';
import MUIDataTable  from "mui-datatables"

const axios = require('axios')

const columns = [
    {name: "name", label: "Nome"},
    {name: "phone", label: "Telefone"},
    {name: "city", label: "Cidade"},
]

class CustomerList extends React.Component {

    state = {
        data: [["Carregando dados..."]],
        isLoading: false
    }

    componentDidMount() {
        this.setState({ isLoading: true })
        this.getData()
    }

    getData() {
        axios.get('http://localhost:3000/api/customer')
            .then(response => {
                this.setState({data: response.data, isLoading: false})
            })
    }

    render() {
        const { data, isLoading } = this.state;

        
        const options = {
            pagination: false,
            selectableRows: 'none'
        }

        return(

            <div>
            <MUIDataTable
                title={<Typography variant="title">
                Lista de Clientes
                {isLoading && <CircularProgress size={24} style={{marginLeft: 15, position: 'relative', top: 4}} />}
                </Typography>
                }
                data={data}
                columns={columns}
                options={options}
            />
            </div>
        )
    }
}

export default CustomerList
