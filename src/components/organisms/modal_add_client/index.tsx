import { Spinner, TagInput, TextInputField } from 'evergreen-ui';

import { Formik } from 'formik';

import React, { useEffect, useMemo, useState } from 'react';

import { Client, editClient, postClient } from '../../../services/people_service';

import { Button, Detail } from '../../atoms';

import { Modal } from '../../molecules';

import ModalAddEmployeProps from './modal_add_client_props';

import styles from './modal_add_client_styles.module.scss';


const ModalAddClient: React.FC<ModalAddEmployeProps> = ({ isOpen, close = () => { }, client, edit = false }) => {


    const values: Client = useMemo(() => {
        return {
            quantidadeIngressosGratisColetados: 0,
            nome: '',
            cpf: '',
            email: '',
            telefones: []
        }
    }, []);

    const [isLoading, setLoading] = useState<boolean>(true);
    const [phones, setPhones] = useState<string[]>(client?.telefones || []);
    const [initialValues, setInitialValues] = useState<Client>(client || {} as Client);

    useEffect(() => {
        setLoading(true);
        setPhones(client?.telefones || []);
        setInitialValues(client || values);
        setLoading(false);
    }, [client, values]);


    return (
        <Modal isOpen={isOpen} title='Cliente' close={close}>
            {
                isLoading ?
                    <Spinner />
                    :
                    <div className={styles['container']}>
                        <Formik
                            initialValues={initialValues}
                            onSubmit={async (values) => {
                                edit ?
                                    await editClient({ ...values, telefones: phones }) :
                                    await postClient({ ...values, telefones: phones });
                                setPhones([]);
                                close();
                            }}
                            enableReinitialize

                        >
                            {({ values, handleSubmit, handleChange }) => (
                                <form onSubmit={handleSubmit}>

                                    <TextInputField
                                        label="Nome"
                                        placeholder='Nome'
                                        name="nome"
                                        required
                                        value={values.nome}
                                        onChange={handleChange}
                                    />

                                    <TextInputField
                                        label="CPF"
                                        placeholder='CPF'
                                        hint="Sem pontuação"
                                        name="cpf"
                                        type="number"
                                        maxLength={11}
                                        required
                                        value={values.cpf}
                                        onChange={handleChange}
                                    />

                                    <TextInputField
                                        label="Email"
                                        placeholder='Email'
                                        name="email"
                                        required
                                        value={values.email}
                                        onChange={handleChange}
                                    />

                                    <TagInput
                                        inputProps={{ placeholder: 'Números de telefone' }}
                                        width="100%"
                                        values={phones}
                                        onChange={(values) => {
                                            setPhones(values)
                                        }}

                                    />
                                    <Detail>Adicione números de telefone sem pontuação</Detail>

                                    <div className={styles['button_container']}>
                                        <Button onClick={handleSubmit}>SALVAR</Button>
                                    </div>


                                </form>
                            )}

                        </Formik>

                    </div>
            }

        </Modal>
    );
}

export default ModalAddClient;