import ChessPiece from '../ChessPiece'
import imgUrl from "../../assets/queen_black.png"

interface Piece {
  id: string
}

const BlackQueen  = ({id}: Piece) => {
  return (
    <ChessPiece id={id} src={imgUrl} />
  )
}

export default BlackQueen