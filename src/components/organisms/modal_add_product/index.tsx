import { Spinner, TextInputField } from 'evergreen-ui';

import { Formik } from 'formik';

import React, { useEffect, useMemo, useState } from 'react';

import { Button } from '../../atoms';

import { Modal } from '../../molecules';

import ModalAddEmployeProps from './modal_add_product_props';

import styles from './modal_add_product_styles.module.scss';

import { editProduct, postProduct, Product } from '../../../services/products_services';


const ModalAddProduct: React.FC<ModalAddEmployeProps> = ({ isOpen, onClose = () => { }, edit = false, product }) => {

    const values: Product = useMemo(() => {
        return {
            codigoBarras: 0,
            nome: '',
            precoUnidade: 0,
            quantidadeDisponivel: 0,
            tamanho: ''
        }
    }, []);


    const [isLoading, setLoading] = useState<boolean>(true);
    const [initialValues, setInitialValues] = useState<Product>(product || {} as Product);

    useEffect(() => {
        setLoading(true);
        setInitialValues(product || values);
        setLoading(false);
    }, [product, values]);


    return (
        <Modal isOpen={isOpen} title='Acompanhamento' close={onClose} >
            {
                isLoading ?
                    <Spinner />
                    :
                    <div className={styles['container']}>

                        <Formik
                            initialValues={initialValues}
                            onSubmit={async (values) => {
                                edit ? await editProduct(values) : await postProduct(values);
                                onClose();
                            }}
                            enableReinitialize

                        >
                            {({ values, handleSubmit, handleChange }) => (
                                <form onSubmit={handleSubmit} >

                                    <TextInputField
                                        label="Nome"
                                        placeholder='Digite o nome do acompanhamento (ex: Pipoca Doce)'
                                        name="nome"
                                        required
                                        value={values.nome}
                                        onChange={handleChange}
                                    />

                                    <TextInputField
                                        label="C??digo de Barras"
                                        placeholder='Digite o c??digo de barras do acompanhamento (ex: 10000001)'
                                        name="codigoBarras"
                                        required
                                        type="number"
                                        hint="8 caracteres num??ricos"
                                        value={values.codigoBarras}
                                        onChange={handleChange}
                                    />

                                    <TextInputField
                                        label="Pre??o Unidade"
                                        placeholder='Digite o pre??o do acompanhamento (ex: 12,50)'
                                        name="precoUnidade"
                                        required
                                        type="number"
                                        value={values.precoUnidade}
                                        onChange={handleChange}
                                    />

                                    <TextInputField
                                        label="Quantidade Dispon??vel (Estoque)"
                                        placeholder='Digite o estoque do acompanhamento (ex: 320)'
                                        name="quantidadeDisponivel"
                                        required
                                        type="number"
                                        value={values.quantidadeDisponivel}
                                        onChange={handleChange}
                                    />

                                    <TextInputField
                                        label="Tamanho"
                                        placeholder='Digite o tamanho do acompanhamento (ex: 50g)'
                                        name="tamanho"
                                        required
                                        value={values.tamanho}
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

export default ModalAddProduct;