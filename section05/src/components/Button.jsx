const Button = ({text,color,children})=>{
    // 이벤트 객체
    const onClickButton = (e)=>{
        console.log(e);
        console.log(text);
    };
    return <button 
    onClick ={onClickButton} // 함수의 이름만 전달할 것
    // onMouseEnter={onClickButton}
    style={{color : color}}>
        {text} - {color.toUpperCase()}
        {children}
        </button>
}

Button.defaultProps = {
    color : "black",
}
export default Button;