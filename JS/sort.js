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