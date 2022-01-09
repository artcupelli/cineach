import { SearchInput, toaster } from 'evergreen-ui';

import React, { Dispatch, useCallback, useState } from 'react';

import { useDispatch } from 'react-redux';

import { Client, Employee, getClient, getEmployee } from '../../../services/people_service';

import { addClient, addEmployee } from '../../../store/actions/cart_actions';

import { Button, Text } from '../../atoms';

import SearchClientProps from './search_client_forms_props';

import styles from './search_client_forms_style.module.scss';


const SearchClientForms: React.FC<SearchClientProps> = ({ closeModal = () => { }, funcionario = false }) => {

    const [cpf, setCPF] = useState<string>('');

    const dispatch: Dispatch<any> = useDispatch();

    const addClientToCart = useCallback(
        (client: Client) => dispatch(addClient(client)), [dispatch]
    );

    const searchClient = async () => {
        const response = await getClient(cpf);

        if (typeof (response?.nome) === "string") {
            addClientToCart(response);
            toaster.success(`${response?.nome} adicionado à compra`);
            closeModal();
        }
    };

    const addEmployeeToCart = useCallback(
        (e: Employee) => dispatch(addEmployee(e)), [dispatch]
    );

    const searchEmployee = async () => {
        const response = await getEmployee(cpf);

        if (typeof (response?.nome) === "string") {
            addEmployeeToCart(response);
            toaster.success(`${response?.nome} adicionado à compra`);
            closeModal();
        }
    };

    return (
        <div className={styles['container']}>
            <Text>Digite o CPF da pessoa que deseja buscar. (Somente números)</Text>

            <SearchInput
                placeholder='00000000000'
                value={cpf}
                onChange={(e: any) => setCPF(e.target.value)}
            />

            <div className={styles['button_container']}>

                <div className={styles['button']}>
                    <Button onClick={closeModal}>FECHAR</Button>
                </div>

                <div className={styles['button']}>
                    <Button onClick={() => funcionario ? searchEmployee() : searchClient()}>CONTINUAR</Button>
                </div>

            </div>

        </div >
    );
}

export default SearchClientForms;