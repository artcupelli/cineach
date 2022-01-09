import React, { useEffect, useState } from 'react';

import { Header } from '../../components/molecules';

import styles from './products_screen_style.module.scss';

import { Icons } from '../../theme/icons';

import SubtileTextCard from '../../components/molecules/subtile_text_card';

import { getAllProducts, Product } from '../../services/products_services';

import { Spinner } from 'evergreen-ui';


const ProductsScreen: React.FC = () => {

  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function searchAll() {
      const response = await getAllProducts();
      setProducts(response || []);
      setLoading(false);
    }

    searchAll();
  }, []);


  return (
    <div className={styles['container']}>

      <Header
        title='Produtos'
        icon={Icons.product}
      />

      <div className={styles['products_container']}>
        <SubtileTextCard
          subtitle='Pipoca'
          text='500g'
          rightSubtitle='R$ 17.90'
        />

        {
          isLoading
            ?
            <Spinner />
            :
            products.map((p, index) => {
              return <SubtileTextCard
                subtitle={p.nome}
                text={p.tamanho}
                rightSubtitle={`R$ ${p.precoUnidade}`}
              />
            })
        }


      </div>
    </div>
  );
}

export default ProductsScreen;