export default interface PictureCardProps {
    title: string, 
    description: string,
    pictureUrl: string,
    animation?: boolean,
    onAdd?: Function,
    onEdit?: Function,
    onDelete?: Function,
}