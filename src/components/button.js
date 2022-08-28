export const Button = ({label , fn , value}) => {
    return (
        <button onClick={fn} value = {value} >{label}</button>
    );
}