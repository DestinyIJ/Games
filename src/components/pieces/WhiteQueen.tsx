import ChessPiece from '../ChessPiece'
import imgUrl from "../../assets/queen_white.png"

interface Piece {
  id: string
}

const WhiteQueen  = ({id}: Piece) => {
  return (
    <ChessPiece id={id} src={imgUrl} />
  )
}

export default WhiteQueen