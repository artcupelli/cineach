export default interface PersonCard {
    name: string
    cpf: string
    phone: string[]
    email: string
    position?: string,
    onEdit?: Function,
    onDelete?: Function   
}