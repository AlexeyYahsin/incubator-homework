type BodyPropsType = {
    titleForBody : string,
}
export const Body = (props : BodyPropsType) => {
    const { titleForBody } = props
    return (
        <>{titleForBody}</>
    )
}