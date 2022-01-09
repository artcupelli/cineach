import { Spinner, TagInput, TextInputField } from 'evergreen-ui';

import { Formik } from 'formik';

import React, { useEffect, useMemo, useState } from 'react';

import { editEmployee, Employee, postEmployee } from '../../../services/people_service';

import { Button, Detail } from '../../atoms';

import { Modal } from '../../molecules';

import ModalAddEmployeProps from './modal_add_employee_props';

import styles from './modal_add_employee_styles.module.scss';


const ModalAddEmployee: React.FC<ModalAddEmployeProps> = ({ isOpen, onClose = () => { }, employee = undefined, edit = false }) => {

    const values: Employee = useMemo(() => {
        return {
            nome: '',
            cargo: '',
            cpf: '',
            email: '',
            telefones: []
        }
    }, []);

    const [isLoading, setLoading] = useState<boolean>(true);
    const [phones, setPhones] = useState<string[]>(employee?.telefones || []);
    const [initialValues, setInitialValues] = useState<Employee>(employee || {} as Employee);

    useEffect(() => {
        setLoading(true);
        setPhones(employee?.telefones || []);
        setInitialValues(employee || values);
        setLoading(false);
    }, [employee, values]);


    return (
        <Modal isOpen={isOpen} title='Funcionário' close={onClose} >
            {
                isLoading ?
                    <Spinner />
                    :
                    <div className={styles['container']}>

                        <Formik
                            initialValues={initialValues}
                            onSubmit={async (values) => {
                                edit ? await editEmployee(values) : await postEmployee(values);
                                onClose();
                            }}
                            enableReinitialize

                        >
                            {({ values, handleSubmit, handleChange }) => (
                                <form onSubmit={handleSubmit} >

                                    <TextInputField
                                        label="Nome"
                                        placeholder='Nome'
                                        name="nome"
                                        required
                                        value={values.nome}
                                        onChange={handleChange}
                                    />
                                    <TextInputField
                                        label="Cargo"
                                        placeholder='Cargo'
                                        name="cargo"
                                        required
                                        value={values.cargo}
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

export default ModalAddEmployee;