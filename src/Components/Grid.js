export default function Grid(props) {

    let numbers = props.currentState

    let mapped = props.currentState.map(item => 
        <div key={item} style={{
                                width: `${100 / numbers.length}%`,
                                height: `${item * 3 * (100 / numbers.length) + 20}px`,
                                outline: '1px solid black',
                                marginTop: '1px',
                                marginLeft: '1px',
                                paddingTop: '10px',
                                }}> 
            {item} 
        </div>
    )
  
    return(
        <div className='Grid'>
            {mapped}
        </div>
    )
}