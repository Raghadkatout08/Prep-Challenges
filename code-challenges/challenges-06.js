'use strict';

// -------------------------------------------------------------------------------------------------------
//  Challenge 01:
//  Required:
//
//  Write a function that takes an array and returns the maximum value in the provided array
//  without using build-in functions.
//  
// Input: [12, 32, 22, 45, 78, 12, 50]
// Output: 78
//  

const findMax = (arr)=>{
    let max = arr[0];

    for(let i=1;i<arr.length;i++)
    {
        if(arr[i] > max)
        {
            max=arr[i];
        }
    }
    return max;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 02:
//  Required:
//
//  Write a function that takes an arrays and returns the Sum of the numeric values
//  inside the array (there could be strings inside), without using built-in functions
//  
// Input: [20, '234', 'car', 41, 20, 'chair']
// Output: 81
//  

const sumNums = (arr)=>{
    let sum = 0;
    for (let i=0 ; i<arr.length ; i++)
    {
        if(typeof arr[i] === 'number')
        {
            sum+=arr[i];
        }

        // else if (typeof arr[i] == 'number')
        // {
        //     sum=sum+ parseInt(arr[i]);
        // }

    }
    return sum;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 03:
//  Required:
//
//  Write a function that takes an array and returns the array reversed
//  without using built-in functions
//  
// Input: ['C#', 'JS', 'Ruby','Python'] 
// Output: ['Python','Ruby','JS','C#']

const reverseArray = (arr)=>{
    let startArr = 0;
    let endArr = arr.length-1;

    while(startArr<=endArr)
    {
        let newArr = arr[startArr];
        arr[startArr] = arr[endArr];
        arr[endArr] = newArr;
        startArr++;
        endArr--;
    }

    return arr;

    // while(startArr < endArr)
    // {
    //     let newArr = startArr;
    //     arr[startArr]=arr[endArr];

    //     arr[endArr] = newArr ;

    //     startArr++;
    //     endArr--;
    // }
}
// -------------------------------------------------------------------------------------------------------

module.exports = {findMax , sumNums, reverseArray};