export default interface SubtitleTextCardProps {
    subtitle: string
    text: string
    rightSubtitle: string
    price?: boolean
    onDelete?: Function
    onAdd?: Function
    onEdit?: Function
}