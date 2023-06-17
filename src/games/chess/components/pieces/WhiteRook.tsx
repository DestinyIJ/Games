import ChessPiece from '../ChessPiece'
import imgUrl from "../../../../assets/chess/rook_white.png"


interface Piece {
  id: string,
  pos: string
}

const WhiteRook  = ({ id, pos }: Piece) => {
  return (
    <ChessPiece id={id} src={imgUrl} pos={pos} player='WHITE'  />
  )
}

export default WhiteRook