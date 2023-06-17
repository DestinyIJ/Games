import ChessPiece from '../ChessPiece'
import imgUrl from "../../assets/king_white.png"

interface Piece {
  id: string
}

const WhiteKing  = ({id}: Piece) => {
  return (
    <ChessPiece id={id} src={imgUrl} />
  )
}

export default WhiteKing