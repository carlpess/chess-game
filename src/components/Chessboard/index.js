import Tile from '../Tile';
import './styles.css';
import pieces from '../../data/pieces';

const vertical = ['1', '2', '3', '4', '5', '6', '7', '8'];
const horizontal = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

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