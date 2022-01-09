import { TagInput, TextInputField } from 'evergreen-ui';

import { useFormik } from 'formik';

import React, { useState } from 'react';

import { Employee, postEmployee } from '../../../services/people_service';

import { Button, Detail } from '../../atoms';

import { Modal } from '../../molecules';

import styles from './modal_add_employee_styles.module.scss';


const ModalAddEmployee: React.FC = () => {

    const [phones, setPhones] = useState<string[]>([]);
    const [isLoading, setLoading] = useState<boolean>(false);

    const initialValues: Employee = {
        nome: '',
        cargo: '',
        cpf: '',
        email: '',
        telefones: []
    }

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: async (values) => {
            const response = await postEmployee(values);
            console.log(response);
        }
    });

    return (
        <Modal isOpen title='Funcionário'>

            <div className={styles['container']}>
                <form onSubmit={formik.handleSubmit}>

                    <TextInputField
                        label="Nome"
                        placeholder='Nome'
                        name="nome"
                        required
                        value={formik.values.nome}
                        onChange={formik.handleChange}
                    />
                    <TextInputField
                        label="Cargo"
                        placeholder='Cargo'
                        name="cargo"
                        required
                        value={formik.values.cargo}
                        onChange={formik.handleChange}
                    />

                    <TextInputField
                        label="CPF"
                        placeholder='CPF'
                        hint="Sem pontuação"
                        name="cpf"
                        type="number"
                        maxLength={11}
                        required
                        value={formik.values.cpf}
                        onChange={formik.handleChange}
                    />

                    <TextInputField
                        label="Email"
                        placeholder='Email'
                        name="email"
                        required
                        value={formik.values.email}
                        onChange={formik.handleChange}
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
                        <Button onClick={formik.handleSubmit}>SALVAR</Button>
                    </div>

                </form>
            </div>

        </Modal>
    );
}

export default ModalAddEmployee;