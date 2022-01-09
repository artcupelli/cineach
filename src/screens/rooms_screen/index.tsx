import React, { useEffect, useState } from 'react';

import { Header } from '../../components/molecules';

import styles from './rooms_screen_style.module.scss';

import { Icons } from '../../theme/icons';

import SubtileTextCard from '../../components/molecules/subtile_text_card';

import { CornerDialog, Spinner } from 'evergreen-ui';

import { deleteRoom, getAllRooms, Room } from '../../services/room_service';

import { ModalAddRoom } from '../../components/organisms';


const RoomsScreen: React.FC = () => {

  const [rooms, setRooms] = useState<Room[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [added, setAdded] = useState<boolean>(false);
  const [editRoom, setEditRoom] = useState<Room>({} as Room);
  const [selDeleteRoom, setDelRoom] = useState<Room>({} as Room);
  

  useEffect(() => {
    async function searchAll() {
      const response = await getAllRooms();
      setRooms(response || []);
      setLoading(false);
    }

    searchAll();
  }, [added]);


  return (
    <div className={styles['container']}>

      <Header
        title='Salas'
        icon={Icons.room}
        onAdd={() => { setEditRoom({} as Room); setModalOpen(true); }}
      />

      <CornerDialog
        onCloseComplete={() => setDelRoom({} as Room)}
        intent="danger"
        isShown={(Object.keys(selDeleteRoom).length !== 0)}
        confirmLabel='Excluir'
        title="Deseja mesmo excluir este acompanhamento?"
        cancelLabel='Cancelar'
        onConfirm={async () => {

          await deleteRoom(selDeleteRoom.numero);
          setDelRoom({} as Room);
          setAdded(!added)

        }}
        onCancel={() => setDelRoom({} as Room)}
      >
        Você deseja mesmo excluir a Sala {selDeleteRoom.numero}? Cuidado! Esta ação não tem volta!
      </CornerDialog>

      <ModalAddRoom
        room={editRoom}
        isOpen={isModalOpen}
        edit={(Object.keys(editRoom).length !== 0)}
        onClose={() => { setModalOpen(false); setAdded(!added) }}
      />

      <div className={styles['products_container']}>
        {
          isLoading
            ?
            <Spinner />
            :
            rooms.map((p, index) => {
              return <SubtileTextCard
                subtitle={`Sala ${p.numero} - ${p.tipo}`}
                text={`Capacidade máxima de ${p.capacidade} pessoas`}
                rightSubtitle=""
                onDelete={() => { setDelRoom(p) }}
                onEdit={() => { setEditRoom(p); setModalOpen(true) }}
              />
            })
        }


      </div>
    </div>
  );
}

export default RoomsScreen;