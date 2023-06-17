import ChessPiece from '../ChessPiece'
import imgUrl from "../../../../assets/chess/king_white.png"

interface Piece {
  id: string,
  pos: string
}

const WhiteKing  = ({ id, pos }: Piece) => {
  return (
    <ChessPiece id={id} src={imgUrl} pos={pos} player='WHITE'  />
  )
}

export default WhiteKing