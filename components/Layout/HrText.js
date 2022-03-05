const HrText = (props) => {
    return (
        <div style={{width: "100%", height: "20px", marginBottom: "20px", borderBottom: "1px solid black", textAlign: "center"}}>
            <span style={{fontSize: "30px", backgroundColor: "white", padding: "0 10px", verticalAlign: "top"}}>
                {props.text}
            </span>
        </div>
    );
}

export default HrText;