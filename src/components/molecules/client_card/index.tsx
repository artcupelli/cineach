import React, { useEffect, useState } from 'react';

import { LoggedUserCard } from '..';

import { Button, Detail } from '../../atoms';

import { Icons } from '../../../theme/icons';

import ClientCardProps from './client_card_props';

import styles from './client_card_style.module.scss';

import { Colors } from '../../../theme/colors';


const ClientCard: React.FC<ClientCardProps> = ({ cpf = '', name = '', openModalSearchCliente }) => {

  const [nameState, setName] = useState<string>(name);

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
          />
          :
          <div className={styles['no_client_container']}>
            <Detail color={Colors.gray} fontWeight={300}>
              Nenhum cliente selecionado...
            </Detail>

            <Button onClick={openModalSearchCliente}>SELECIONAR CLIENTE</Button>


          </div>
      }
    </div>
  );
}

export default ClientCard;