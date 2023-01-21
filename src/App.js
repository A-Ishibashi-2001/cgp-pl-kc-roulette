import {OperationRoulette, ActionsRoulette, EmotionsRoulette} from './roulette'
import './App.css';
import db from "./firebase";
import {useEffect, useState} from "react";
import {doc, getDoc} from "firebase/firestore";

function App() {
    // const [roulettes, setRoulettes] = useState([]);
    // let operationElementsArray = [];
    // let actionElementsArray = [];
    // let emotionElementsArray = [];
    // useEffect(() => {
    //     ( async () => {
    //         const operationElementsRef = doc(db, "Roulettes", "OperationRoulette")
    //         // const actionElementsRef = db.collection("Roulettes").doc("ActionsRoulette")
    //         // const emotionElementsRef = db.collection("Roulettes").doc("EmotionsRoulette")
    //         const operationElementsSnap = await getDoc(operationElementsRef)
    //         // const actionElementsDoc = await actionElementsRef.get()
    //         // const emotionElementsDoc = await emotionElementsRef.get()
    //         if (operationElementsSnap.exists) {
    //             // console.log(operationElementsSnap.id)
    //             // console.log(operationElementsSnap.data())
    //             console.log(operationElementsSnap.get("elements"))
    //             operationElementsArray = operationElementsSnap.get("elements")
    //         }
    //         // if (actionElementsDoc.exists) {
    //         //     // actionElementsArray = actionElementsDoc.get("elements")
    //         // }
    //         // if (emotionElementsDoc.exists) {
    //         //     // emotionElementsArray = emotionElementsDoc.get("elements")
    //         // }
    //     })()
    // }, []);

    return (
        <div className="App">
            <div>
                <h2>CGP Pl部門 ゲームにおける「気持ちいい」を考える</h2>
                <div className="wrapper">
                    <div className="element"><OperationRoulette></OperationRoulette></div>
                    <h1 className="element">×</h1>
                    <div className="element"><ActionsRoulette></ActionsRoulette></div>
                    <h1 className="element">=</h1>
                    <div className="element"><EmotionsRoulette></EmotionsRoulette></div>
                </div>
            </div>
        </div>
    );
}

export default App;
