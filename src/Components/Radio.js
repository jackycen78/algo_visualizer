function SpeedRadio(props) {
    return (
        <div onChange={props.changeSpeed} defaultValue={"10"}>
            <input type="radio" value="10" name="speed" defaultChecked/> 10ms
            <input type="radio" value="50" name="speed" /> 50ms
            <input type="radio" value="100" name="speed" /> 100ms
        </div>
    )
}

function SortRadio(props){
    return (
        <div onChange={props.changeSort} defaultValue={"Bubble Sort"}>
            <input type="radio" value="Bubble Sort" name="Sort" defaultChecked/> Bubble Sort
            <input type="radio" value="Selection Sort" name="Sort" /> Selection Sort
        </div>
     )
}

export {SpeedRadio, SortRadio}