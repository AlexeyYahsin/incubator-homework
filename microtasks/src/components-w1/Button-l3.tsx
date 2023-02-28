type ButtonType = {
    title : string,
    callBack : () => void,
}

export const Button = (props : ButtonType) => {
const {title, callBack} = props
const onClickHandler = () => {
    callBack()
}

    return(
        <button onClick={onClickHandler}>{title}</button>
    )
}