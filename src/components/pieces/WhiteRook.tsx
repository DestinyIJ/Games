import ChessPiece from '../ChessPiece'
import imgUrl from "../../assets/rook_white.png"


interface Piece {
  id: string
}

const WhiteRook  = ({id}: Piece) => {
  return (
    <ChessPiece id={id} src={imgUrl} />
  )
}

export default WhiteRook