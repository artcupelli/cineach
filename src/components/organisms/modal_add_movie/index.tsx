import { Spinner, TextInputField } from 'evergreen-ui';

import { Formik } from 'formik';

import React, { useEffect, useMemo, useState } from 'react';

import { Button } from '../../atoms';

import { Modal } from '../../molecules';

import ModalAddEmployeProps from './modal_add_movie_props';

import styles from './modal_add_movie_styles.module.scss';

import { editFilm, Film, postFilm } from '../../../services/films_service';


const ModalAddFilm: React.FC<ModalAddEmployeProps> = ({ isOpen, onClose = () => { }, edit = false, film }) => {

    const values: Film = useMemo(() => {
        return {
            titulo: '',
            diretor: '',
            anoDeLancamento: 0,
            duracao: 0,
            poster: ''
        }
    },
        []);

    const [isLoading, setLoading] = useState<boolean>(true);
    const [initialValues, setInitialValues] = useState<Film>(film || {} as Film);

    useEffect(() => {
        setLoading(true);
        setInitialValues(film || values);
        setLoading(false);
    }, [film, values]);


    console.log(film)

    return (
        <Modal isOpen={isOpen} title='Filme' close={onClose} >
            {
                isLoading ?
                    <Spinner />
                    :
                    <div className={styles['container']}>

                        <Formik
                            initialValues={initialValues}
                            onSubmit={async (values) => {
                                edit ? await editFilm(values) : await postFilm(values);
                                onClose();
                            }}
                            enableReinitialize

                        >
                            {({ values, handleSubmit, handleChange }) => (
                                <form onSubmit={handleSubmit} >

                                    <TextInputField
                                        label="Título"
                                        placeholder='Digite o título do filme'
                                        name="titulo"
                                        required
                                        value={values.titulo}
                                        onChange={handleChange}
                                    />
                                    <TextInputField
                                        label="Diretor"
                                        placeholder='Digite o diretor do filme'
                                        name="diretor"
                                        required
                                        value={values.diretor}
                                        onChange={handleChange}
                                    />

                                    <TextInputField
                                        label="Ano de lançamento"
                                        placeholder='Digite o ano de lançamento do filme'
                                        name="anoDeLancamento"
                                        type="number"
                                        required
                                        value={values.anoDeLancamento}
                                        onChange={handleChange}
                                    />

                                    <TextInputField
                                        label="Duração (minutos)"
                                        placeholder='Digite a duração do filme em minutos'
                                        name="duracao"
                                        type="number"
                                        required
                                        value={values.duracao}
                                        onChange={handleChange}
                                    />
                                    <TextInputField
                                        label="Poster (URL)"
                                        placeholder='Digite a URL do poster do filme'
                                        name="poster"
                                        required
                                        value={values.poster}
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

export default ModalAddFilm;