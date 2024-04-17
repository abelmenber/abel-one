var arr = ["tim", "joe", "bill"]

// for(var i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }


// for (var i = 0; i < arr.length; i++){
//     console.log(arr[i])
//     arr[i] = 5;
//     console.log(arr[i])
// }

// console.log(arr)

var mp = new Map()
str = "this is my new string hello"

// ["t", 3]

for(var letter of str){
    if (mp.has(letter)){
        mp.set(letter, mp.get(letter)+1)
    }else{
        mp.set(letter, 1)
    }
}

console.log(mp.get(""))