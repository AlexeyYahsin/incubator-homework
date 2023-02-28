type HeaderPropsType = {
    titleForHeader: string
}
export const Header = (props : HeaderPropsType) => {
    const { titleForHeader } = props 
    return(
        <div>{titleForHeader}</div>
    )
}