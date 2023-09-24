import {useState} from 'react'

export default function BoxAlgorithm({cart, carType, boxType}){

    // const [productSize, setProductSize] = useState({sm: '', md: '', lg: ''})

    //small fits 5, med fits 10, lg fits 15
    // use small boxes only 
    // cartype sm boxtype sm

    // use large boxes only
    // cartype lg boxtype lg or no pref


    const totalItems = cart.reduce((acc, val) => acc = acc + val.qty, 0 );

    if (carType === "smCar" || boxType === "smBox"){
        const boxNum = 0
        totalItems % 5 === 0 ? (
            boxNum = totalItems / 5
        ): (
            boxNum = (totalItems / 5) + 1
        ) 
        console.log(boxNum)
    }

    return(
        <>
        </>
    )
}