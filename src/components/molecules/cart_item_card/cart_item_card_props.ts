export default interface CartItemCardProps {
    subtitle: string
    text: string
    rightSubtitle: string
    price?: boolean,
    qntd?: number,
    add?: Function,
    remove?: Function
}