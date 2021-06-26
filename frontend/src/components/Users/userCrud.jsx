import React, { Component } from 'react'
import { render } from 'react-dom'
import Main from '../template/Main'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'cadastro de usuários: Incluir, Listar, Alterar e Excluir'
}

export default class userCrud extends Component {
    render() {
        return (
            <Main {...headerProps}>
                Cadastro de Usuário
            </Main>
        )
    }
}