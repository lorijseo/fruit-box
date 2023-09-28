
import BoxIcon from '../images/box-icon.png';
import {Badge} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/BoxAlgorithm.css'
export default function BoxAlgorithm({cart, carType, boxType, handleBoxSelect}){

    const totalItems = cart.reduce((acc, val) => acc = acc + val.qty, 0 );

    const boxSizes = {
        sm : 5,
        md : 7,
        lg : 10
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
            <h1>Select one of the packaging options</h1>
            <div className="option shadow p-3 bg-light rounded">
                <h4>Best Fit (recommended)</h4>
                <div onClick={handleBoxSelect} className="box-display">
                    {bestBoxFitOption(totalItems)}
                </div>
            </div>
            <div className="option shadow p-3 bg-light rounded">
                <h4>Based on your box preference</h4>
                <div onClick={handleBoxSelect} className="box-display">
                    {sameBoxSizeOption(totalItems, boxType)}
                </div>
            </div>
            <div className="option shadow p-3 bg-light rounded">
                <h4>Based on your car type</h4>
                <div onClick={handleBoxSelect} className="box-display">
                    {bestCarFitOption(totalItems)}
                </div>
            </div>




        </div>
    )
}