import ChessPiece from '../ChessPiece'
import imgUrl from "../../../../assets/chess/queen_white.png"

interface Piece {
  id: string,
  pos: string
}

const WhiteQueen  = ({ id, pos }: Piece) => {
  return (
    <ChessPiece id={id} src={imgUrl} pos={pos} player='WHITE'  />
  )
}

export default WhiteQueen