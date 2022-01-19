import './App.css';
import Header from './Components/Header';
import Grid from './Components/Grid'
import React from 'react';
import {BubbleSort} from './Algorithms/sorting';
import {Random, BackButton, ForwardButton, Play, Pause} from './Components/Buttons'


function App() {

  const [history, setHistory] = React.useState([[0]])

  
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [numberOfNodes, setNumberOfNodes] = React.useState(35)
  const [isSorted, setIsSorted] = React.useState(false)

  React.useEffect(() => {
    let temp = []
      for (let i = 1; i <= numberOfNodes; i++){
        temp.push(i)
      }
    setHistory([temp])
    setCurrentIndex(0) 
  }, [numberOfNodes])


  function shuffle() {
    let temp = []
      for (let i = 1; i <= numberOfNodes; i++){
        temp.push(i)
      }
    for (let i = temp.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [temp[i], temp[j]] = [temp[j], temp[i]];
    }
    setCurrentIndex(0) 
    setIsSorted(false) 
    setHistory([temp])
  }

  function increase(){
    setNumberOfNodes(old => old + 1)
    setIsSorted(false)
  }

  function bubbleSort() {
    let newHist = BubbleSort(history[0])
    setHistory(newHist)
    setIsSorted(false)
  }

  function backHistory(){
    if (currentIndex > 0){
      setCurrentIndex(oldIndex => oldIndex - 1)
    }
  }

  function forwardHistory(){
    if (currentIndex < history.length - 1){
      setCurrentIndex(oldIndex => oldIndex + 1)
    }
  }

  function play(){
    var i = currentIndex;
    let interval = setInterval( () => {
        forwardHistory();
        i++
        if (i >  history.length - 2){
          clearInterval(interval)
        }  
        }, 100)
  }

  return (
    <div className="App">
      <Header />
      <Grid currentState={history[currentIndex]}/>
      
      <Random shuffle={shuffle}/>

      <button onClick={bubbleSort}>
              sort
      </button>

      <Play play={play}/>

      <BackButton backHistory={backHistory} show={isSorted}/> 
      <ForwardButton forwardHistory={forwardHistory} show={isSorted}/> 

      <button onClick={increase}>
              increase n
      </button>

      <div>
        {currentIndex + 1} / {history.length}
      </div>

    </div>
  );
}

export default App;
