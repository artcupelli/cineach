import { SearchInput } from 'evergreen-ui';

import React from 'react';

import { Button, Text } from '../../atoms';

import SearchClientProps from './search_client_forms_props';

import styles from './search_client_forms_style.module.scss';


const SearchClientForms: React.FC<SearchClientProps> = ({ closeModal }) => {

    return (
        <div className={styles['container']}>
            <Text>Digite o CPF do cliente que deseja buscar.</Text>

            <SearchInput
                placeholder='000.000.000-00'
            />

            <div className={styles['button_container']}>

                <div className={styles['button']}>
                    <Button onClick={closeModal}>FECHAR</Button>
                </div>

                <div className={styles['button']}>
                    <Button inative>CONTINUAR</Button>
                </div>

            </div>

        </div>
    );
}

export default SearchClientForms;