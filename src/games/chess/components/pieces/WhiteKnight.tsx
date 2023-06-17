import ChessPiece from '../ChessPiece'
import imgUrl from "../../../../assets/chess/knight_white.png"

interface Piece {
  id: string,
  pos: string
}

const WhiteKnight  = ({ id, pos }: Piece) => {
  return (
    <ChessPiece id={id} src={imgUrl} pos={pos} player='WHITE'  />
  )
}

export default WhiteKnight