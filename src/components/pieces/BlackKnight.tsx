import ChessPiece from '../ChessPiece'
import imgUrl from "../../assets/knight_black.png"

interface Piece {
  id: string
}

const BlackKnight  = ({id}: Piece) => {
  return (
    <ChessPiece id={id} src={imgUrl} />
  )
}

export default BlackKnight