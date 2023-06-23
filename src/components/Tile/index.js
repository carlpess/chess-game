import './styles.css';

function Tile({ number, piece }) {
    return (
        <div
            className={`${number === 0
                ? 'tile-black'
                : 'tile-white'} 
        tile`}>
            {piece &&
                <div
                    style={{ backgroundImage: `url(${piece})` }}
                    className='tile_piece'
                ></div>
            }
        </div>
    )
}

export default Tile;