function BubbleSort(array){

    let tempHist = [[...array]]
    let temp = [...array]

    for (let i = 0; i < temp.length; i++){
        for (let j = 0; j < temp.length - i - 1; j++){

            temp[j] = temp[j].toString()
            temp[j + 1] = temp[j + 1].toString()
            tempHist.push([...temp])
            temp[j] = +temp[j]
            temp[j + 1] = +temp[j + 1]

            if (temp[j] > temp[j+1]){
                [temp[j], temp[j+1]] = [temp[j+1],  temp[j]]
            }
        }
    }
    return tempHist
}

function MergeSort(array){

    let tempHist = [[...array]]
    let temp = [...array]

    for (let i = 0 ; i < temp.length; i++){
        let cur_min = 100000
        for (let j = i; j < temp.length; j++){
            if (temp[j] < cur_min){
                temp[temp.indexOf(`${cur_min} `)] = +cur_min 
                cur_min  = temp[j]
                temp[j] = cur_min.toString() + ' '
                tempHist.push([...temp])
            } else {
                temp[j] = temp[j].toString()
                tempHist.push([...temp])
                temp[j] = +temp[j]
            }
        }

        temp.splice(temp.indexOf(`${cur_min} `), 1)
        let sorted = temp.slice(0, i)
        sorted.push(cur_min)
        let new_temp = sorted.concat(temp.slice(i))
        temp = new_temp
    }

    return tempHist
}

export {BubbleSort, MergeSort}