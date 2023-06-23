import './styles.css';

let move = 0
function Tile({ number, image, pieces, setPieces, h, v, position, setPosition }) {


    function movePiece({ target }) {
        const tempPieces = [...pieces]

        if (target.className === 'tile_piece' && move === 0) {
            const actualPosition = tempPieces.filter((piece) =>
                piece.h === h && piece.v === v
            )
            setPosition({
                image: actualPosition[0].image,
                h: actualPosition[0].h,
                v: actualPosition[0].v
            })
            move++
        } else if (move > 0) {
            const index = tempPieces.findIndex(piece =>
                piece.h === position.h && piece.v === position.v
            );
            console.log(index)
            const newPiece = { image: position.image, h, v }

            tempPieces.splice(index, 1, newPiece);

            setPieces([...tempPieces]);
            move = 0;
        }

    }

    return (
        <div
            className={`${number === 0
                ? 'tile-black'
                : 'tile-white'} 
        tile`}
            onClick={movePiece}
        >
            {image &&
                <div
                    style={{ backgroundImage: `url(${image})` }}
                    className='tile_piece'
                ></div>
            }
        </div>
    )
}

export default Tile;