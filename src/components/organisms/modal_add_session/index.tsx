import { Combobox, FormField, Spinner, TextInputField } from 'evergreen-ui';

import { Formik } from 'formik';

import React, { useEffect, useState } from 'react';

import { Button } from '../../atoms';

import { Modal } from '../../molecules';

import ModalAddEmployeProps from './modal_add_session_props';

import styles from './modal_add_session_styles.module.scss';

import { Session } from '../../../services/sessions_service';

import { Film, getAllFilms } from '../../../services/films_service';

import { getAllRooms, Room } from '../../../services/room_service';


const ModalAddSession: React.FC<ModalAddEmployeProps> = ({ isOpen, onClose = () => { }, edit = false, session }) => {

    const values: Session = {
        anoFilme: 0,
        data: '',
        horarioInicio: '',
        numSala: 0,
        precoInteira: 0,
        quantidadeTotalIngressos: 0,
        tituloFilme: '',
        precoMeia: 0
    }


    const [isLoading, setLoading] = useState<boolean>(true);
    const [films, setfilms] = useState<Film[]>([]);
    const [rooms, setRooms] = useState<Room[]>([]);
    const [initialValues] = useState<Session>(values);

    // useEffect(() => {
    //     setLoading(true);
    //     setInitialValues(session || values);
    //     setLoading(false);

    // }, [session, values]);

    useEffect(() => {
        setLoading(true);
        const getFilms = async () => {
            setfilms(await getAllFilms() ?? []);
        }

        getFilms();

        const getRooms = async () => {
            setRooms(await getAllRooms() ?? []);
        }

        getRooms();
        setLoading(false);
    }, [])

    return (
        <Modal isOpen={isOpen} title='Sessão' close={onClose} >
            {
                isLoading ?
                    <Spinner />
                    :
                    <div className={styles['container']}>

                        <Formik
                            initialValues={initialValues}
                            onSubmit={async (values) => {
                                console.log(values);
                                // edit ? await editRoom(values) : await postRoom(values);
                                onClose();
                            }}
                            enableReinitialize

                        >
                            {({ values, handleSubmit, handleChange }) => (
                                <form onSubmit={handleSubmit} >


                                    <FormField label="Filme" width="100%" isRequired>
                                        <Combobox
                                            width="100%"
                                            items={films.map((f) => { return { value: { titulo: f.titulo, ano: f.anoDeLancamento }, label: f.titulo } })}
                                            onChange={selected => console.log(selected.value)}
                                            itemToString={item => item ? item.label : ''}
                                            placeholder="Escolha o filme..."
                                        />
                                    </FormField>

                                    <FormField label="Sala" width="100%" isRequired>
                                        <Combobox
                                            width="100%"
                                            items={rooms.map((f) => { return { value: f.numero, label: `Sala ${f.numero} - ${f.tipo}` } })}
                                            onChange={selected => console.log(selected.value)}
                                            itemToString={item => item ? item.label : ''}
                                            placeholder="Escolha a sala..."
                                        />
                                    </FormField>

                                    <TextInputField
                                        label="Data"
                                        placeholder='Digite a data da sessão... '
                                        name="data"
                                        required
                                        value={values.data}
                                        onChange={handleChange}
                                    />

                                    <TextInputField
                                        label="Horário"
                                        placeholder='Digite o horário da sessão... '
                                        name="horario"
                                        required
                                        value={values.horarioInicio}
                                        onChange={handleChange}
                                    />

                                    <TextInputField
                                        label="Quantidade total de ingressos"
                                        placeholder='Digite o horário da sessão... '
                                        name="quantidadeTotalIngressos"
                                        required
                                        type="number"
                                        value={values.quantidadeTotalIngressos}
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

export default ModalAddSession;