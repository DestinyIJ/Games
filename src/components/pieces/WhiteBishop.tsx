import ChessPiece from '../ChessPiece'
import imgUrl from "../../assets/bishop_white.png"


interface Piece {
  id: string
}

const WhiteBishop  = ({id}: Piece) => {
  return (
    <ChessPiece id={id} src={imgUrl} />
  )
}

export default WhiteBishop