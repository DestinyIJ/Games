import ChessPiece from '../ChessPiece'
import imgUrl from "../../assets/knight_white.png"

interface Piece {
  id: string
}

const WhiteKnight  = ({id}: Piece) => {
  return (
    <ChessPiece id={id} src={imgUrl} />
  )
}

export default WhiteKnight