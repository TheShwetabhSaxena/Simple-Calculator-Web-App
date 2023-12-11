export default function Button(props){
    return(
        <button style = {props.style} onClick = {props.function}>{props.title}</button>
    )
}