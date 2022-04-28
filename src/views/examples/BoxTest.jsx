import React, { useEffect, useState } from "react";
import './BoxTest.css'
import styled from 'styled-components'
import useEventListener from "@use-it/event-listener";

const BoxTest = props => {

    //#region  Player
    const initialPosition = {
        x: 0,
        y: 0
    }

    const mapSize = {
        x: 10,
        y: 5
    }

    const [positionState, UpdatePositionState] = useState(initialPosition);

    useEffect(() => {
        console.log('player position x: ' + positionState.x + ' y: ' + positionState.y);
    }, [positionState])

    useEventListener('keyup', (event) => {
        if (event.key === 'w' && positionState.y < 0) {
            const newState = {
                x: positionState.x,
                y: positionState.y + 1
            }
            UpdatePositionState(newState);
        } else if (event.key === 's' && positionState.y > -mapSize.y) {
            const newState = {
                x: positionState.x,
                y: positionState.y - 1
            }
            UpdatePositionState(newState);
        } else if (event.key === 'd' && positionState.x < mapSize.x) {
            const newState = {
                x: positionState.x + 1,
                y: positionState.y
            }
            UpdatePositionState(newState);
        } else if (event.key === 'a' && positionState.x > 0) {
            const newState = {
                x: positionState.x - 1,
                y: positionState.y
            }
            UpdatePositionState(newState);
        }
    })

    const Player = styled.div`
        display: flex;
        position: relative;
        left: ${32 * positionState.x}px;
        bottom: ${32 * positionState.y}px;
        width: 32px;
        height: 32px;
        background-color: black;
    `;
    //#endregion

    //#region Map

    // const [MapState, UpdateMapState] = useState([]);

    // function generateMap(numero) {
    //     for (let y = 0; y < numero; y++) {
    //         for (let x = 0; x < numero; x++) {
    //             let Map = styled.div`
    //             display: flex;
    //             width: 32px;
    //             height: 32px;
    //             left: ${32 * x}px;
    //             bottom: ${32 * y}px;
    //             background-color: green;
    //             color: green;
    //         `;
    //             UpdateMapState(Map)
    //             console.log('x: ' + x + " y: " + y);
    //         }
    //     }
    // }


    //#endregion

    const Blocks = styled.div`
        display: flex;
        position: relative;
        left: ${32 * 0}px;
        bottom: ${32 * 0}px;
        width: 32px;
        height: 32px;
        background-color: green;
    `;

    return (
        <aside className="BoxTest">
            <Player className="player" />
        </aside>
    );
}

export default BoxTest;
