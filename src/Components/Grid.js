export default function Grid(props) {

    let numbers = props.history[props.currentIndex]
    let mapped = arrayToHTML(numbers)

    function arrayToHTML(array, show=true) {
        return (
            array.map(item => 
            <div key={item} style={{
                                    width: `${100 / numbers.length}%`,
                                    height: `${item * 3 * (100 / numbers.length) + 20}px`,
                                    outline: '1px solid black',
                                    marginTop: '1px',
                                    marginLeft: '1px',
                                    paddingTop: '10px',
                                    backgroundColor: `${typeof item === 'string' ? item.indexOf(' ') >= 0 ? 'blue' : 'red' : 'white' }`,
                                    display: `${show ? 'block' : 'none'}`
                                    }}> 
                {item} 
            </div>
        ))
    }

    return(
        <div className='Grid'>
            {mapped}        
        </div>
    )
}
