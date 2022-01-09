import { Tablist, Tab, Pane, Spinner } from 'evergreen-ui';

import React, { useEffect, useState } from 'react';

import { Header, Modal, PersonCard } from '../../components/molecules';

import { ModalAddEmployee } from '../../components/organisms';

import { Client, Employee, getAllClients, getAllEmployees } from '../../services/people_service';

import { Icons } from '../../theme/icons';

import styles from './people_screen_style.module.scss';


const PeopleScreen: React.FC = () => {

  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [tabs] = React.useState(['FUNCIONÁRIOS', 'CLIENTES']);
  const panels = [<Employees />, <Clients />];

  return (

    <div className={styles['container']}>
      <ModalAddEmployee

      />

      <Header
        title='Pessoas'
        date={false}
        icon={Icons.user}
      />

      <div className={styles['tab_list_container']}>
        <Tablist>
          {
            tabs.map((tab, index) => {
              return (
                <Tab
                  key={tab}
                  id={tab}
                  onSelect={() => setSelectedIndex(index)}
                  isSelected={index === selectedIndex}
                  aria-controls={`panel-${tab}`}
                  color="red"
                >{tab}</Tab>
              )
            })
          }
        </Tablist>
      </div>


      <div className={styles['tabs_container']}>
        {
          tabs.map((tab, index) => {
            return (<Pane
              key={tab}
              id={`panel-${tab}`}
              role="tabpanel"
              aria-labelledby={tab}
              aria-hidden={index !== selectedIndex}
              display={index === selectedIndex ? 'block' : 'none'}
            >
              {panels[index]}
            </Pane>
            )
          })
        }
      </div>


    </div>

  );
}

const Clients: React.FC = () => {

  const [clients, setClients] = useState<Client[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  async function searchAllClients() {
    const response = await getAllClients();
    setClients(response || []);
    setLoading(false);
  }

  useEffect(() => {
    searchAllClients();
  }, [])


  return (
    <div className={styles['people_container']}>
      {
        isLoading
          ?
          <Spinner color="red" />
          :
          clients?.map((c) => {
            return <PersonCard
              name={c.nome}
              cpf={c.cpf}
              email={c.email}
              phone={c.telefones ?? []}
            />
          })
      }

    </div>
  );
};

const Employees: React.FC = () => {

  const [employess, setEmployess] = useState<Employee[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  async function searchAllEmployees() {
    const response = await getAllEmployees();
    setEmployess(response || []);
    setLoading(false);
  }

  useEffect(() => {
    searchAllEmployees();
  }, [])


  return (
    <div className={styles['people_container']}>
      {
        isLoading
          ?
          <Spinner color="red" />
          :
          employess?.map((c) => {
            return <PersonCard
              name={c.nome}
              cpf={c.cpf}
              email={c.email}
              phone={c.telefones ?? []}
              position={c.cargo}
            />
          })
      }

    </div>
  );
};

export default PeopleScreen;