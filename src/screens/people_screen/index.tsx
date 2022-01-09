import { Tablist, Tab, Pane, Spinner, CornerDialog } from 'evergreen-ui';

import React, { useEffect, useState } from 'react';

import { Header, PersonCard } from '../../components/molecules';

import { ModalAddClient, ModalAddEmployee } from '../../components/organisms';

import { Client, deleteClient, deleteEmployee, Employee, getAllClients, getAllEmployees } from '../../services/people_service';

import { Icons } from '../../theme/icons';

import styles from './people_screen_style.module.scss';


const PeopleScreen: React.FC = () => {

  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [tabs] = React.useState(['FUNCIONÁRIOS', 'CLIENTES']);

  const [openModalAddClient, setOpenModalAddClient] = useState<boolean>(false);
  const [openModalAddEmployee, setOpenModalAddEmployee] = useState<boolean>(false);

  const [added, setAdded] = useState<boolean>(false);

  const panels = [<Employees addedFunc={added} />, <Clients addedCli={added} />];


  return (

    <div className={styles['container']}>

      <Header
        title='Pessoas'
        date={false}
        icon={Icons.user}
        onAdd={() => { if (selectedIndex === 1) { setOpenModalAddClient(true); } else setOpenModalAddEmployee(true) }}
      />

      <ModalAddClient
        isOpen={openModalAddClient}
        close={() => { setOpenModalAddClient(false); setAdded(!added) }}
      />

      <ModalAddEmployee
        isOpen={openModalAddEmployee}
        onClose={() => { setOpenModalAddEmployee(false); setAdded(!added) }}
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

const Clients: React.FC<{ addedCli: boolean }> = ({ addedCli }) => {

  const [clients, setClients] = useState<Client[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [added, setAdded] = useState<boolean>(false);


  const [editClient, setEditClient] = useState<Client>({} as Client);

  const [selDeleteClient, setDeleteClient] = useState<Client>({} as Client);


  useEffect(() => {
    async function searchAllClients() {
      const response = await getAllClients();
      setClients(response || []);
      setLoading(false);
    }

    searchAllClients();
  }, [added, addedCli]);


  return (
    <div className={styles['people_container']}>

      <ModalAddClient
        isOpen={editClient?.cpf?.length > 0}
        client={editClient}
        close={()=>{ setEditClient({} as Client); setAdded(!added)}}
        edit={true}
      />

      <CornerDialog
        onCloseComplete={() => setDeleteClient({} as Client)}
        intent="danger"
        isShown={selDeleteClient?.cpf?.length > 0}
        confirmLabel='Excluir'
        title="Deseja mesmo excluir este cliente?"
        cancelLabel='Cancelar'
        onConfirm={async () => { await deleteClient(selDeleteClient.cpf); setDeleteClient({} as Client); setAdded(!added) }}
        onCancel={() => setDeleteClient({} as Client)}
      >
        Você deseja mesmo excluir {selDeleteClient.nome}? Cuidado! Esta ação não tem volta!
      </CornerDialog>

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
              onDelete={() => { setDeleteClient(c); }}
              onEdit={() => { setEditClient(c); }}
            />
          })
      }

    </div>
  );
};

const Employees: React.FC<{ addedFunc: boolean }> = ({ addedFunc }) => {

  const [employess, setEmployess] = useState<Employee[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [added, setAdded] = useState<boolean>(false);


  const [editEmployee, setEditEmployee] = useState<Employee>({} as Employee);
  const [selDeleteEmployee, setDeleteEmployee] = useState<Employee>({} as Employee);


  useEffect(() => {
    async function searchAllEmployees() {
      setLoading(true);
      const response = await getAllEmployees();
      setEmployess(response || []);
      setLoading(false);
    }

    searchAllEmployees();
  }, [added, addedFunc])

  return (
    <div className={styles['people_container']}>

      <ModalAddEmployee
        employee={editEmployee}
        isOpen={editEmployee?.cpf?.length > 0}
        onClose={()=>{ setEditEmployee({} as Employee); setAdded(!added)}}
        edit={true}
      />

      <CornerDialog
        onCloseComplete={() => setDeleteEmployee({} as Employee)}
        intent="danger"
        isShown={selDeleteEmployee?.cpf?.length > 0}
        confirmLabel='Excluir'
        title="Deseja mesmo excluir este funcionário?"
        cancelLabel='Cancelar'
        onConfirm={async () => { await deleteEmployee(selDeleteEmployee.cpf); setDeleteEmployee({} as Employee); setAdded(!added) }}
        onCancel={() => setDeleteEmployee({} as Employee)}
      >
        Você deseja mesmo excluir {selDeleteEmployee.nome}? Cuidado! Esta ação não tem volta!
      </CornerDialog>

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
              onDelete={() => { setDeleteEmployee(c); }}
              onEdit={() => { setEditEmployee(c); }}
            />
          })
      }

    </div>
  );
};

export default PeopleScreen;