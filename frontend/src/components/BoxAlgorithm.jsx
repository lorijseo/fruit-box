import {useState} from 'react';
import BoxIcon from '../images/box-icon.png';
import {Badge} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/BoxAlgorithm.css'
export default function BoxAlgorithm({cart, carType, boxType, handleBoxSelect}){

    // const [productSize, setProductSize] = useState({sm: '', md: '', lg: ''})

    //small fits 5, med fits 10, lg fits 15
    // use small boxes only 
    // cartype sm boxtype sm

    // use large boxes only
    // cartype lg boxtype lg or no pref
    // console.log(cart)
    // console.log(carType)
    console.log(boxType)

    const totalItems = cart.reduce((acc, val) => acc = acc + val.qty, 0 );
    console.log(totalItems)

    const boxSizes = {
        sm : 5,
        md : 7,
        lg : 10
    }

    function getSameBoxSize(size){
        if(totalItems <= size){
            return "1 small box"
        }
        else{
            let boxNum = 0
            totalItems % size === 0 ? (
                boxNum = totalItems / 5
            ): (
                boxNum = Math.ceil(totalItems / size) 
            ) 
            return `${boxNum} small boxes`
        }
    }
 
    function isSmall(){
        if (carType === "smCar" || boxType === "smBox"){
            return true
        }
        return false
    }

    function bestBoxFitOption(totalItems){
        let boxSizeArr = {
            sm : 0,
            md : 0,
            lg : 0
        }

        while (totalItems > boxSizes.lg){
            totalItems -= boxSizes.lg;
            let updatedBoxCount = boxSizeArr.lg + 1
            boxSizeArr.lg = updatedBoxCount
        }
        while (totalItems > boxSizes.md){
            totalItems -= boxSizes.md;
            let updatedBoxCount = boxSizeArr.md + 1
            boxSizeArr.md = updatedBoxCount
        }
        boxSizeArr.sm = Math.ceil(totalItems / boxSizes.sm);
        return displayBox(boxSizeArr)
    }

    function sameBoxSizeOption(totalItems, boxType){
        let boxSizeArr = {
            sm : 0,
            md : 0,
            lg : 0
        }

        boxSizeArr[boxType] = Math.ceil(totalItems / boxSizes[boxType]);
        return displayBox(boxSizeArr)
    }
    
    function bestCarFitOption(totalItems){
        let boxSizeArr = {
            sm : 0,
            md : 0,
            lg : 0
        }
        if (carType === 'lg'){
            while (totalItems > boxSizes.lg){
                totalItems -= boxSizes.lg;
                let updatedBoxCount = boxSizeArr.lg + 1
                boxSizeArr.lg = updatedBoxCount
            }
        }
        if (carType === 'lg' || carType === 'md'){
            while (totalItems > boxSizes.md){
                totalItems -= boxSizes.md;
                let updatedBoxCount = boxSizeArr.md + 1
                boxSizeArr.md = updatedBoxCount
            }
        }
        boxSizeArr.sm = Math.ceil(totalItems / boxSizes.sm);
        return displayBox(boxSizeArr)
    }

    //given boxSizeArr object, display with images

    function displayBox(boxSizeArr){
        return(
            <>
                {boxSizeArr.sm != 0 && displaySmBox(boxSizeArr)}
                {boxSizeArr.md != 0 && displayMdBox(boxSizeArr)}
                {boxSizeArr.lg != 0 && displayLgBox(boxSizeArr)}
            </>
        )
    }


    function displaySmBox(boxSizeArr){
        return (
            <div className="box">
                <div>
                    <img src={BoxIcon} width='100px'/>
                    <Badge bg="secondary">{boxSizeArr.sm}</Badge>
                </div>
                <div>
                    <p>Small</p>
                </div>
            </div>

        ) 
    }

    function displayMdBox(boxSizeArr){
        return (
            <div className="box">
                <div>
                    <img src={BoxIcon}/>
                    <Badge bg="secondary">{boxSizeArr.md}</Badge>
                </div>
                <div>
                    <p>Medium</p>
                </div>
            </div>
        )
    }

    function displayLgBox(boxSizeArr){
        return (
            <div className="box">
                <div>
                    <img src={BoxIcon} width='150px'/>
                    <Badge bg="secondary">{boxSizeArr.lg}</Badge>
                </div>
                <div>
                    <p>Large</p>
                </div>
            </div>
        )
    }

    

    return(
        <div className="BoxAlgorithm">
            {/* <p>
                {isSmall() && getSameBoxSize(5)}
            </p> */}
            <h4>Best Fit</h4>
            <div onClick={handleBoxSelect}>
                {bestBoxFitOption(totalItems)}
            </div>
            <h4>Based on your box choice</h4>
            <div onClick={handleBoxSelect}>
                {sameBoxSizeOption(totalItems, boxType)}
            </div>
            <h4>Best Fit for your car</h4>
            <div onClick={handleBoxSelect}>
                {bestCarFitOption(totalItems)}
            </div>
        </div>
    )
}