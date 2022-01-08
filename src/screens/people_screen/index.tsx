import { Tablist, Tab, Pane } from 'evergreen-ui';

import React, { useState } from 'react';

import { Header, PersonCard } from '../../components/molecules';

import { Icons } from '../../theme/icons';

import styles from './people_screen_style.module.scss';


const PeopleScreen: React.FC = () => {

  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [tabs] = React.useState(['FUNCIONÁRIOS', 'CLIENTES']);

  return (

    <div className={styles['container']}>
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
              <div className={styles['people_container']}>
                <PersonCard
                  name='Nicole Paige Brooks'
                  cpf='444.444.444-44'
                  email='nicole@gmail.com'
                  phone='(11) 96324-4510'
                  position='Administrador'
                />
                <PersonCard
                  name='Nicole Paige Brooks'
                  cpf='444.444.444-44'
                  email='nicole@gmail.com'
                  phone='(11) 96324-4510'
                />
                <PersonCard
                  name='Nicole Paige Brooks'
                  cpf='444.444.444-44'
                  email='nicole@gmail.com'
                  phone='(11) 96324-4510'
                />
                <PersonCard
                  name='Nicole Paige Brooks'
                  cpf='444.444.444-44'
                  email='nicole@gmail.com'
                  phone='(11) 96324-4510'
                />
                <PersonCard
                  name='Nicole Paige Brooks'
                  cpf='444.444.444-44'
                  email='nicole@gmail.com'
                  phone='(11) 96324-4510'
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

export default PeopleScreen;