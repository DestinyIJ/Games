import ChessPiece from '../ChessPiece'
import imgUrl from "../../../../assets/chess/pawn_black.png"


interface Piece {
  id: string,
  pos: string
}

const BlackPawn  = ({ id, pos }: Piece) => {
  return (
    <ChessPiece id={id} src={imgUrl} pos={pos} player='BLACK' />
  )
}

export default BlackPawn