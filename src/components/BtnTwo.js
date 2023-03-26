function BtnTwo() {
    return(
        <button onClick={()=>{console.log('Second Button')}}>
            This button created using a anonymous ES6 function event handler
        </button>
    );
}

export default BtnTwo;