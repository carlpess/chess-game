import './styles.css';

function Tile({ number, piece }) {
    return (
        <div
            className={`${number === 0
                ? 'tile-black'
                : 'tile-white'} 
        tile`}>
            {piece &&
                <img src={piece} alt='piece' />
            }
        </div>
    )
}

export default Tile;