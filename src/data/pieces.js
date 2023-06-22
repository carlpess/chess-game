import PawnB from '../assets/ChessPawnB.png';
import PawnW from '../assets/ChessPawnW.png';
import HookB from '../assets/ChessRookB.png';
import HookW from '../assets/ChessRookW.png';
import KnightB from '../assets/ChessKnightB.png';
import KnightW from '../assets/ChessKnightW.png';
import BishopB from '../assets/ChessBishopB.png';
import BishopW from '../assets/ChessBishopW.png';
import KingB from '../assets/ChessKingB.png';
import KingW from '../assets/ChessKingW.png';
import QueenB from '../assets/ChessQueenB.png';
import QueenW from '../assets/ChessQueenW.png';

const pieces = [];

for (let i = 0; i < 8; i++) {
    pieces.push({ image: PawnB, h: i, v: 6 });
}

for (let i = 0; i < 8; i++) {
    pieces.push({ image: PawnW, h: i, v: 1 });
}

pieces.push({ image: HookB, h: 0, v: 7 });
pieces.push({ image: HookB, h: 7, v: 7 });
pieces.push({ image: KnightB, h: 1, v: 7 });
pieces.push({ image: KnightB, h: 6, v: 7 });
pieces.push({ image: BishopB, h: 2, v: 7 });
pieces.push({ image: BishopB, h: 5, v: 7 });
pieces.push({ image: KingB, h: 4, v: 7 });
pieces.push({ image: QueenB, h: 3, v: 7 });

pieces.push({ image: HookW, h: 0, v: 0 });
pieces.push({ image: HookW, h: 7, v: 0 });
pieces.push({ image: KnightW, h: 1, v: 0 });
pieces.push({ image: KnightW, h: 6, v: 0 });
pieces.push({ image: BishopW, h: 2, v: 0 });
pieces.push({ image: BishopW, h: 5, v: 0 });
pieces.push({ image: KingW, h: 4, v: 0 });
pieces.push({ image: QueenW, h: 3, v: 0 });

export default pieces;