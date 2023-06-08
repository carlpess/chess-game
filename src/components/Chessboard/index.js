import './styles.css';

const vertical = ['1', '2', '3', '4', '5', '6', '7', '8'];
const horizontal = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function Chessboard() {
    let board = [];

    for (let y = (vertical.length - 1); y >= 0; y--) {
        for (let i = 0; i < horizontal.length; i++) {
            board.push({
                name: `|${horizontal[i]} ${vertical[y]}|`,
                number: (i + y + 2) % 2
            });
        }
    }

    return (
        <div className='container-board'>
            {board.map((coord) => (
                <div className={`${coord.number === 0
                    ? 'tile-black'
                    : 'tile-white'} 
                    tile`}>
                    {coord.name}
                </div>
            ))}
        </div>
    )
}

export default Chessboard;