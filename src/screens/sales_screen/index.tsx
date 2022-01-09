import React, { useEffect, useState } from 'react';

import styles from './sales_screen_style.module.scss'

import { Header, InfoCard } from '../../components/molecules';

import { Icons } from '../../theme/icons';

import { Pane, Tab, Tablist, Table, Spinner } from 'evergreen-ui';
import { getAllSales, Sale } from '../../services/sales_service';


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

  return (
    <>
      <InfoCard
        info="20191"
        description="ingressos vendidos neste mês"
      />
      <InfoCard
        info="661.000,00"
        description="reais faturados neste mês"
      />
      <InfoCard
        info="130"
        description="novos clientes"
      />
      <InfoCard
        info="Coraline"
        description="foi o filme mais assistido neste mês"
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
                    <Table.Row key={s.id} isSelectable onSelect={() => alert("profile.name")}>
                      <Table.TextCell>{s.id}</Table.TextCell>
                      <Table.TextCell>{s.formaPagamento}</Table.TextCell>
                      <Table.TextCell>{s.cliente?.nome}</Table.TextCell>
                      <Table.TextCell>{s.cpfCliente}</Table.TextCell>
                      <Table.TextCell>{s.funcionario?.nome}</Table.TextCell>
                      <Table.TextCell>{s.cpfFuncionario}</Table.TextCell>
                    </Table.Row>
                  )
                })
              }
            </Table.Body>
          </Table>
      }

    </>
  )
}

export default SalesScreen;