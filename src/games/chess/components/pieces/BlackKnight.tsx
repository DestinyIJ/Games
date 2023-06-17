import ChessPiece from '../ChessPiece'
import imgUrl from "../../../../assets/chess/knight_black.png"

interface Piece {
  id: string,
  pos: string
}

const BlackKnight  = ({ id, pos }: Piece) => {
  return (
    <ChessPiece id={id} src={imgUrl} pos={pos} player='BLACK' />
  )
}

export default BlackKnight