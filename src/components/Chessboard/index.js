import Tile from '../Tile';
import './styles.css';
import PawnB from '../../assets/ChessPawnB.png';
import PawnW from '../../assets/ChessPawnW.png'

const vertical = ['1', '2', '3', '4', '5', '6', '7', '8'];
const horizontal = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

const pieces = [];

for (let i = 0; i < 8; i++) {
    pieces.push({ image: PawnB, h: i, v: 6 });
}

for (let i = 0; i < 8; i++) {
    pieces.push({ image: PawnW, h: i, v: 1 });
}

function Chessboard() {
    let board = [];
    let key = 0;

    for (let y = (vertical.length - 1); y >= 0; y--) {
        for (let i = 0; i < horizontal.length; i++) {
            let image;
            pieces.forEach((p) => {
                if (p.h === i && p.v === y) {
                    image = p.image;
                }
            })

            board.push({
                id: key,
                name: `|${horizontal[i]} ${vertical[y]}|`,
                number: (i + y + 2) % 2,
                image: image
            });
            key++
        }
    }

    return (
        <div className='container-board'>
            {board.map((coord) => (
                <Tile
                    key={coord.id}
                    number={coord.number}
                    piece={coord.image}
                />
            ))}
        </div>
    )
}

export default Chessboard;