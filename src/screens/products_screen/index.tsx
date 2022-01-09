import React, { useEffect, useState } from 'react';

import { Header } from '../../components/molecules';

import styles from './products_screen_style.module.scss';

import { Icons } from '../../theme/icons';

import SubtileTextCard from '../../components/molecules/subtile_text_card';

import { deleteProduct, getAllProducts, Product } from '../../services/products_services';

import { CornerDialog, Spinner } from 'evergreen-ui';
import ModalAddProduct from '../../components/organisms/modal_add_product';


const ProductsScreen: React.FC = () => {

  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [added, setAdded] = useState<boolean>(false);
  const [editProduct, setEditProduct] = useState<Product>({} as Product);
  const [selDeleteProduct, setDelProduct] = useState<Product>({} as Product);


  useEffect(() => {
    async function searchAll() {
      const response = await getAllProducts();
      setProducts(response || []);
      setLoading(false);
    }

    searchAll();
  }, [added]);


  return (
    <div className={styles['container']}>

      <Header
        title='Acompanhamentos'
        icon={Icons.product}
        onAdd={() => { setEditProduct({} as Product); setModalOpen(true); }}
      />

      <CornerDialog
        onCloseComplete={() => setDelProduct({} as Product)}
        intent="danger"
        isShown={selDeleteProduct?.nome?.length > 0}
        confirmLabel='Excluir'
        title="Deseja mesmo excluir este acompanhamento?"
        cancelLabel='Cancelar'
        onConfirm={async () => {

          const response = await deleteProduct(selDeleteProduct.codigoBarras);
          setDelProduct({} as Product);
          setAdded(!added)

        }}
        onCancel={() => setDelProduct({} as Product)}
      >
        Você deseja mesmo excluir {selDeleteProduct.nome}? Cuidado! Esta ação não tem volta!
      </CornerDialog>

      <ModalAddProduct
        product={editProduct}
        isOpen={isModalOpen}
        edit={(Object.keys(editProduct).length !== 0)}
        onClose={() => { setModalOpen(false); setAdded(!added) }}
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
                onDelete={() => { setDelProduct(p) }}
                onEdit={() => { setEditProduct(p); setModalOpen(true) }}
              />
            })
        }


      </div>
    </div>
  );
}

export default ProductsScreen;