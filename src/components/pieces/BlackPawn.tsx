import ChessPiece from '../ChessPiece'
import imgUrl from "../../assets/pawn_black.png"


interface Piece {
  id: string
}

const BlackPawn  = ({id}: Piece) => {
  return (
    <ChessPiece id={id} src={imgUrl} />
  )
}

export default BlackPawn