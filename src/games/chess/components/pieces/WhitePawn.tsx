import ChessPiece from '../ChessPiece'
import imgUrl from "../../../../assets/chess/pawn_white.png"


interface Piece {
  id: string,
  pos: string
}

const WhitePawn  = ({ id, pos }: Piece) => {
  return (
    <ChessPiece id={id} src={imgUrl} pos={pos} player='WHITE'  />
  )
}

export default WhitePawn