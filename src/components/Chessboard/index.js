import Tile from '../Tile';
import './styles.css';
import tempPieces from '../../data/pieces';
import { useState } from 'react';

const vertical = ['1', '2', '3', '4', '5', '6', '7', '8'];
const horizontal = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function Chessboard() {
    let board = [];
    const [pieces, setPieces] = useState([...tempPieces]);
    const [position, setPosition] = useState({});

    for (let y = (vertical.length - 1); y >= 0; y--) {
        for (let i = 0; i < horizontal.length; i++) {
            let image;
            pieces.forEach((p) => {
                if (p.h === i && p.v === y) {
                    image = p.image;
                }
            })

            board.push({
                id: `${y}-${i}`,
                name: `|${horizontal[i]} ${vertical[y]}|`,
                number: (i + y + 2) % 2,
                image,
                h: i,
                v: y
            });
        }
    }

    return (
        <div className='container-board'>
            {board.map((coord) => (
                <Tile
                    key={coord.id}
                    number={coord.number}
                    image={coord.image}
                    h={coord.h}
                    v={coord.v}
                    pieces={pieces}
                    setPieces={setPieces}
                    position={position}
                    setPosition={setPosition}
                />
            ))}
        </div>
    )
}

export default Chessboard;