import { Product } from "../../../services/products_services";
import ModalProps from "../../molecules/modal/modal_props";

export default interface ModalAddEmployeProps extends ModalProps{
    product?: Product,
    onClose?: Function,
    edit?: boolean
}