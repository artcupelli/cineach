import React from 'react';
import styles from './sales_screen_style.module.scss'
import { Header } from '../../components/molecules';
import { Icons } from '../../theme/icons';
import { Subtitle } from '../../components/atoms';
import { Text } from '../../components/atoms';
import { Colors } from '../../theme/colors';
const SalesScreen: React.FC = () => {
  return (
    <div className={styles['container']}>
      <Header
        title='Produtos'
        icon={Icons.sales}
      />
      <div className={styles['destaques']}>
        <div className={styles['ingressos_vendidos']}>
          <Subtitle color={Colors.red}>INGRESSOS VENDIDOS</Subtitle>
          <div className={styles['quant_ingressos']}>24.870</div>
          <Text color={Colors.red}>Mês</Text>
        </div>

        <div className={styles['total_vendas']}>
          <Subtitle color={Colors.white}>VALOR TOTAL DE VENDAS</Subtitle>
          <div className={styles['vendas_totais']}>
            <div className={styles['valor_vendas_mes']}>
              <div className={styles['valor_vendas']}>24.870</div>
              <Text color={Colors.white}>Semana</Text>
            </div>
            <div className={styles['separator']}/>
            <div  className={styles['valor_vendas_sem']}>
              <div className={styles['valor_vendas']}>24.870</div>
              <Text color={Colors.white}>Mês</Text>
            </div>
          </div>
        </div>

        

      </div>

      <div className={styles['filmes_mais']}>
          <Subtitle color={Colors.red}>FILMES MAIS VENDIDOS</Subtitle>
          
        </div>


    </div>
  );
}

export default SalesScreen;