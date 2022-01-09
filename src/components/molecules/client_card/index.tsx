import React, { useEffect, useState } from 'react';

import { LoggedUserCard, Modal } from '..';

import { Button, Detail } from '../../atoms';

import { Icons } from '../../../theme/icons';

import ClientCardProps from './client_card_props';

import styles from './client_card_style.module.scss';

import { Colors } from '../../../theme/colors';

import { SearchClientForms } from '../../organisms';


const ClientCard: React.FC<ClientCardProps> = ({ cpf = '', name = '', funcionario = false }) => {

  const [nameState, setName] = useState<string>(name);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  useEffect(() => {
    setName(name);
  },
    [name]);

  return (
    <div className={styles['container']}>
      {
        (nameState.length > 0) ?
          <LoggedUserCard
            photo={false}
            name={nameState}
            position={cpf || 'CPF não cadastrado'}
            icon={Icons.trash}
            funcionario={funcionario}
          />
          :
          <div className={styles['no_client_container']}>
            {
              funcionario ?
                <Detail color={Colors.gray} fontWeight={300}>
                  Nenhum funcionario selecionado...
                </Detail>
                :
                <Detail color={Colors.gray} fontWeight={300}>
                  Nenhum cliente selecionado...
                </Detail>
            }
            <Modal isOpen={modalVisible} close={() => { setModalVisible(false) }} title={`Buscar ${funcionario? 'funcionário' : 'cliente'}`} >
              <SearchClientForms closeModal={() => setModalVisible(false)} funcionario={funcionario} />
            </Modal>

            {
              funcionario ?
                <Button onClick={() => setModalVisible(true)}>SELECIONAR FUNCIONÁRIO</Button>
                :
                <Button onClick={() => setModalVisible(true)}>SELECIONAR CLIENTE</Button>
            }

          </div>
      }
    </div>
  );
}

export default ClientCard;