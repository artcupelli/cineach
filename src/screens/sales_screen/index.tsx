import React, { useEffect, useState } from 'react';

import styles from './sales_screen_style.module.scss'

import { Header, InfoCard } from '../../components/molecules';

import { Icons } from '../../theme/icons';

import { Pane, Tab, Tablist, Table, Spinner, Alert } from 'evergreen-ui';

import { Dashboard, getAllSales, getDashboard, Sale } from '../../services/sales_service';


const SalesScreen: React.FC = () => {

  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [tabs] = React.useState(['RELATÓRIOS', 'TODAS']);
  const panel = [<Relatorio />, <Sales />];

  return (

    <div className={styles['container']}>
      <Header
        title='Vendas'
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
              <div className={styles['people_container']}>
                {
                  panel[index]
                }
              </div>
            </Pane>
            )
          })
        }
      </div>


    </div>
  );
}

const Relatorio: React.FC = () => {

  const [, setDashboard] = useState<Dashboard>();
  const [, setLoading] = useState<boolean>(true);

  useEffect(() => {

    setLoading(true);
    const getInfo = async () => {
      setDashboard(await getDashboard());
    }
    getInfo();
    
    setLoading(false);
  }, []);

  return (
    <>
      <InfoCard
        info="Jurassic World: Domínio"
        description="filme mais assistido"
      />
      <InfoCard
        info="Coraline"
        description="filme menos assistido"
      />
      <InfoCard
        info="2"
        description="ingressos vendidos no mês"
      />
      <InfoCard
        info="25"
        description="ingressos vendidos no total"
      />
      <InfoCard
        info="342,75"
        description="reais faturados com acompanhamentos"
      />
      <InfoCard
        info="3597"
        description="total de acompanhamentos disponíveis"
      />
      <InfoCard
        info="20"
        description="total de funcionários cadastrados"
      />
      <InfoCard
        info="20"
        description="total de clientes cadastrados"
      />
    </>
  );
};


const Sales: React.FC = () => {

  const [sales, setSales] = useState<Sale[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function searchAll() {
      const response = await getAllSales();
      setSales(response || []);
      setLoading(false);
    }

    setLoading(true);
    searchAll();
  }, []);

  return (
    <>
      {
        isLoading ?
          <Spinner />
          :
          <>
            <Alert intent="warning" width="100%">Caso demore para carregar os nomes, clique na aba 'Relatórios' e retorne para 'Todas'</Alert>
            <Table width="100%">
              <Table.Head>
                <Table.TextHeaderCell>ID</Table.TextHeaderCell>
                <Table.TextHeaderCell>Forma Pagamento</Table.TextHeaderCell>
                <Table.TextHeaderCell>Cliente</Table.TextHeaderCell>
                <Table.TextHeaderCell>CPF Cliente</Table.TextHeaderCell>
                <Table.TextHeaderCell>Funcionário</Table.TextHeaderCell>
                <Table.TextHeaderCell>CPF Funcionário</Table.TextHeaderCell>
              </Table.Head>
              <Table.Body>
                {
                  sales.map((s) => {
                    return (
                      <Table.Row key={s.id} isSelectable >
                        <Table.TextCell>{s.id}</Table.TextCell>
                        <Table.TextCell>{s.formaPagamento}</Table.TextCell>
                        <Table.TextCell>{s.cliente?.nome || "Carregando..."}</Table.TextCell>
                        <Table.TextCell>{s.cpfCliente}</Table.TextCell>
                        <Table.TextCell>{s.funcionario?.nome || "Carregando..."}</Table.TextCell>
                        <Table.TextCell>{s.cpfFuncionario}</Table.TextCell>
                      </Table.Row>
                    )
                  })
                }
              </Table.Body>
            </Table>
          </>
      }

    </>
  )
}

export default SalesScreen;