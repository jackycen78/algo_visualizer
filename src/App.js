import './App.css';
import Header from './Components/Header';
import Grid from './Components/Grid'
import React from 'react';
import {BubbleSort, MergeSort} from './Algorithms/sorting';
import {NodesSlider} from './Components/Slider';
import {SpeedRadio, SortRadio} from './Components/Radio';
import {Randomize, BackButton, ForwardButton, Play, Pause, Sort} from './Components/Buttons'


function App() {

  const [history, setHistory] = React.useState([[0]])
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [numberOfNodes, setNumberOfNodes] = React.useState(30)
  const [isSorted, setIsSorted] = React.useState(false)
  const [speed, setSpeed] = React.useState(10)
  const [sortMethod, setSortMethod] = React.useState('Bubble Sort')

  React.useEffect(() => {
    let temp = []
      for (let i = 1; i <= numberOfNodes; i++){
        temp.push(i)
      }
    setHistory([temp])
    setCurrentIndex(0) 
  }, [numberOfNodes])


  function randomize() {
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

  function changeNodes(value) {
    console.log(value)
    setNumberOfNodes(value)
  }

  function changeSpeed(event) {
    console.log(event.target.value)
    setSpeed(event.target.value)
  }

  function changeSort(event) {
    console.log(event.target.value)
    setSortMethod(event.target.value)
  }

  function sort(){
    let newHist = ''
    if (sortMethod === 'Bubble Sort'){
      newHist = BubbleSort(history[0])
    }
    else if (sortMethod === 'Selection Sort') {
      newHist = MergeSort(history[0])
    }
    setHistory(newHist)
    setIsSorted(true)
    setCurrentIndex(0) 
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

  function changeHistory(event){
    setHistory(+event.target.value)
  }

  
  function play(){
    let i = currentIndex;
    
    let interval = setInterval( () => {
        forwardHistory();
        i++
        if (i >  history.length - 2){
          clearInterval(interval)
        }  
        }, speed)
      
    function stop(){
      clearInterval(interval)
    }

    const stopBtn = document.getElementById('pause')
    stopBtn.addEventListener('click', stop)   
  }
  

  const style = {width: '28px'}
  return (
    <div className="App">
      <Header />
      <Grid history={history} currentIndex={currentIndex} forwardHistory={forwardHistory}/>
      
      <Randomize randomize={randomize}/>

      <Sort sort={sort} />


      <SpeedRadio changeSpeed={changeSpeed}/>
      <SortRadio changeSort={changeSort}/>
      <NodesSlider changeNodes={changeNodes}/>

      <Play play={play}/>
      <Pause />
      
      <BackButton backHistory={backHistory} show={isSorted}/> 
      <ForwardButton forwardHistory={forwardHistory} show={isSorted}/> 

      <div>
        <input style={style} maxLength={4} value={currentIndex}/>  / {history.length}
      </div>

    </div>
  );
}

export default App;
