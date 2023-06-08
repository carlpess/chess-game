import './styles.css';

const vertical = ['1', '2', '3', '4', '5', '6', '7', '8'];
const horizontal = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function Chessboard() {
    let board = [];
    let key = 0;

    for (let y = (vertical.length - 1); y >= 0; y--) {
        for (let i = 0; i < horizontal.length; i++) {
            board.push({
                id: key,
                name: `|${horizontal[i]} ${vertical[y]}|`,
                number: (i + y + 2) % 2
            });
            key++
        }
    }

    return (
        <div className='container-board'>
            {board.map((coord) => (
                <div
                    key={coord.id}
                    className={`${coord.number === 0
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