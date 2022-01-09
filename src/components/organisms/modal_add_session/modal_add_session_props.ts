import { Session } from "inspector";

import ModalProps from "../../molecules/modal/modal_props";

export default interface ModalAddEmployeProps extends ModalProps{
    session?: Session,
    onClose?: Function,
    edit?: boolean
}