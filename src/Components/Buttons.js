function Random(props){
    return (
      <button onClick={props.shuffle}>
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
        <button onClick={props.pause}>
                  Pause
        </button>
    )
}

export {Random, BackButton, ForwardButton, Play, Pause}