import ChessPiece from '../ChessPiece'
import imgUrl from "../../assets/king_black.png"


interface Piece {
  id: string
}

const BlackKing  = ({id}: Piece) => {
  return (
    <ChessPiece id={id} src={imgUrl} />
  )
}

export default BlackKing