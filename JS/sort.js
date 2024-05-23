// buble short
function bubleSort(arr){
    for(let i=0;i<arr.length;i++){
        if (arr[i]>arr[i+1]){
            let old=arr[i]
            arr[i]=arr[i+1]
            arr[i+1]=old
            console.log(arr)
        }
    }
    return arr
}
const listItem=[9,2,3,6,8]
bubleSort(listItem)
console.log(listItem)

// selection sort
console.log('=======selectionSort========')
function selectionSort(arr){
    let len=arr.length
    for (let i=0;i<len-1;i++){
        let smallestValue=i;
        for(let j=i+1;j<len;j++){ 
            if(arr[j]<arr[smallestValue]){
                smallestValue=j;
            }
        }
        if(smallestValue !==i){
            let temp = arr[i];
            arr[i] = arr[smallestValue];
            arr[smallestValue] = temp;
            console.log(arr)
        }
    }
    return arr
}

let selectionSortList=[4,9,5,10,12,7,8]
console.log(selectionSortList)
selectionSort(selectionSortList)
// quick sort



