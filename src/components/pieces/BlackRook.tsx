import ChessPiece from '../ChessPiece'
import imgUrl from "../../assets/rook_black.png"

interface Piece {
  id: string
}

const BlackRook  = ({id}: Piece) => {
  return (
    <ChessPiece id={id} src={imgUrl} />
  )
}

export default BlackRook