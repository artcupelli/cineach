import { Client } from "../../../services/people_service";
import ModalProps from "../../molecules/modal/modal_props";

export default interface ModalAddEmployeProps extends ModalProps{
    client?: Client,
    edit?: boolean,
    onClose?: Function
}