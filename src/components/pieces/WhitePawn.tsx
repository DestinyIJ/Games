import ChessPiece from '../ChessPiece'
import imgUrl from "../../assets/pawn_white.png"


interface Piece {
  id: string
}

const WhitePawn  = ({id}: Piece) => {
  return (
    <ChessPiece id={id} src={imgUrl} />
  )
}

export default WhitePawn