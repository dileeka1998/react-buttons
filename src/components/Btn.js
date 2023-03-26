function Btn() {
    return(
        <button onClick={function(){console.log('First Button')}}>
            This button created using a anonymous ES5 function event handler
        </button>
    );
}

export default Btn;