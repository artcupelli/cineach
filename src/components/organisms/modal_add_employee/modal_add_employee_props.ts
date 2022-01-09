import { Employee } from "../../../services/people_service";
import ModalProps from "../../molecules/modal/modal_props";

export default interface ModalAddEmployeProps extends ModalProps{
    employee?: Employee,
    onClose?: Function,
    edit?: boolean
}