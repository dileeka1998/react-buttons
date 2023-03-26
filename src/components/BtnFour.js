function BtnFour() {
    const fourthButton = () => {
        console.log('Fourth Button')
    };
 return(
    <button onClick={fourthButton}>
        This buttion is created using a seperate function expression
    </button>
 );
};

export default BtnFour