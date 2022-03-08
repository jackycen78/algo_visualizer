function Randomize(props){
    return (
      <button onClick={props.randomize}>
                Randomize
      </button>
    )
}

function BackButton(props){
    return (
        <div> 
            {props.show &&
                <button onClick={props.backHistory}>
                        Back
                </button>
            }
        </div>
    )
}

function ForwardButton(props){
    return (
        <div> 
            {props.show &&
                <button onClick={props.forwardHistory}>
                        Forward
                </button>
            }
        </div>
    )
}

function Play(props){
    return (
        <button onClick={props.play}>
                  Play
        </button>
      )
}

function Pause(props){
    return (
        <button id='pause'>
                  Pause
        </button>
      )
}

function Sort(props){
    return (
        <button id='sort'  onClick={props.sort}>
                  Sort
        </button>
      )
}


export {Randomize, BackButton, ForwardButton, Play, Pause, Sort}