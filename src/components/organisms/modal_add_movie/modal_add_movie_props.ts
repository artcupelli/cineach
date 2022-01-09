import { Film } from "../../../services/films_service";
import ModalProps from "../../molecules/modal/modal_props";

export default interface ModalAddEmployeProps extends ModalProps{
    film?: Film,
    onClose?: Function,
    edit?: boolean
}