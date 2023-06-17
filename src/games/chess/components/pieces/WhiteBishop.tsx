import ChessPiece from '../ChessPiece'
import imgUrl from "../../../../assets/chess/bishop_white.png"


interface Piece {
  id: string,
  pos: string
}

const WhiteBishop  = ({ id, pos }: Piece) => {
  return (
    <ChessPiece id={id} src={imgUrl} pos={pos} player='WHITE' />
  )
}

export default WhiteBishop