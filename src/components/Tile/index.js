import './styles.css';

function Tile({ number }) {
    return (
        <div
            className={`${number === 0
                ? 'tile-black'
                : 'tile-white'} 
        tile`}>
        </div>
    )
}

export default Tile;