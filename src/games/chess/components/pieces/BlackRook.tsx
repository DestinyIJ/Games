import ChessPiece from '../ChessPiece'
import imgUrl from "../../../../assets/chess/rook_black.png"

interface Piece {
  id: string,
  pos: string
}

const BlackRook  = ({ id, pos }: Piece) => {
  return (
    <ChessPiece id={id} src={imgUrl} pos={pos} player='BLACK' />
  )
}

export default BlackRook