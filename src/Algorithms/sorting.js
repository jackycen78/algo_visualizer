function BubbleSort(array){

    let tempHist = [[...array]]
    let temp = [...array]

    for (let i = 0; i < temp.length; i++){
        for (let j = 0; j < temp.length - i - 1; j++){
            if (temp[j] > temp[j+1]){
                [temp[j], temp[j+1]] = [temp[j+1],  temp[j]]
            }

            tempHist.push([...temp])
        }
    }
    return tempHist
}


export {BubbleSort}