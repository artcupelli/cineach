import { Session } from "../../../services/sessions_service";

export default interface SessionCardProps {
    title: string,
    year: number,
    animation?: boolean,
    url: string,
    onEdit?: Function,
    onDelete?: Function
}