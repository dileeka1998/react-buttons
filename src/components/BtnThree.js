function BtnThree() {
    function thirdButton() {
        console.log('Third Button');
    };
    return(
        <button onClick={thirdButton}>
            This button is created using a seperate function declaration
        </button>
    );
}

export default BtnThree;