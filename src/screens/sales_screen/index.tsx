import React, { useState } from 'react';

import styles from './sales_screen_style.module.scss'

import { Header, InfoCard } from '../../components/molecules';

import { Icons } from '../../theme/icons';

import { Pane, Tab, Tablist } from 'evergreen-ui';


const SalesScreen: React.FC = () => {

  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [tabs] = React.useState(['RELATÓRIOS', 'TODAS']);

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
              </div>
            </Pane>
            )
          })
        }
      </div>


    </div>
  );
}

export default SalesScreen;