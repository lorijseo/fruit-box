import '../styles/BoxingPage.css';

export default function BoxingPage(){
    return(
        <div className="BoxingPage">
            <h1>Box page</h1>
            <h3>What type of car do you have?</h3>
            <div id="car-container">
                <div>sedan/hatchback</div>
                <div>SUV</div>
                <div>pick up truck</div>
            </div>
            <h3>Do you have preference for box size?</h3>
            <div id="box-container">
                <div>small</div>
                <div>medium</div>
                <div>large</div>
            </div>

        </div>
    )
}