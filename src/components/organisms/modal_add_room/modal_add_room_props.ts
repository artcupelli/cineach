import { Room } from "../../../services/room_service";
import ModalProps from "../../molecules/modal/modal_props";

export default interface ModalAddEmployeProps extends ModalProps{
    room?: Room,
    onClose?: Function,
    edit?: boolean
}