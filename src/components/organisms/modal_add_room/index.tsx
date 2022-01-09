import { Spinner, TextInputField } from 'evergreen-ui';

import { Formik } from 'formik';

import React, { useEffect, useMemo, useState } from 'react';

import { Button } from '../../atoms';

import { Modal } from '../../molecules';

import ModalAddEmployeProps from './modal_add_room_props';

import styles from './modal_add_room_styles.module.scss';

import { editRoom, postRoom, Room } from '../../../services/room_service';


const ModalAddSala: React.FC<ModalAddEmployeProps> = ({ isOpen, onClose = () => { }, edit = false, room }) => {

    const values: Room = useMemo(() => {
        return {
            numero: 0,
            capacidade: 0,
            tipo: ""
        }
    }, []);

    const [isLoading, setLoading] = useState<boolean>(true);
    const [initialValues, setInitialValues] = useState<Room>(room || {} as Room);

    useEffect(() => {
        setLoading(true);
        setInitialValues(room || values);
        setLoading(false);
    }, [room, values]);


    return (
        <Modal isOpen={isOpen} title='Sala' close={onClose} >
            {
                isLoading ?
                    <Spinner />
                    :
                    <div className={styles['container']}>

                        <Formik
                            initialValues={initialValues}
                            onSubmit={async (values) => {
                                edit ? await editRoom(values) : await postRoom(values);
                                onClose();
                            }}
                            enableReinitialize

                        >
                            {({ values, handleSubmit, handleChange }) => (
                                <form onSubmit={handleSubmit} >

                                    <TextInputField
                                        label="Número"
                                        placeholder='Digite o número da sala... (ex:65)'
                                        name="numero"
                                        required
                                        type="number"
                                        value={values.numero}
                                        onChange={handleChange}
                                        hint="Número único, maior do que 0."
                                    />

                                    <TextInputField
                                        label="Capacidade"
                                        placeholder='Digite a capacidade de pessoas da sala... (ex: 100)'
                                        name="capacidade"
                                        required
                                        type="number"
                                        value={values.capacidade}
                                        onChange={handleChange}
                                    />

                                    <TextInputField
                                        label="Tipo"
                                        placeholder='Digite o tipo da sala (ex: 3D MAX)'
                                        name="tipo"
                                        required
                                        value={values.tipo}
                                        onChange={handleChange}
                                    />

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

export default ModalAddSala;