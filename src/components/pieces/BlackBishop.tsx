import ChessPiece from '../ChessPiece'
import imgUrl from "../../assets/bishop_black.png"


interface Piece {
  id: string
}

const BlackBishop  = ({id}: Piece) => {
  return (
    <ChessPiece id={id} src={imgUrl} />
  )
}

export default BlackBishop