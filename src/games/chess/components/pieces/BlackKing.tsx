import ChessPiece from '../ChessPiece'
import imgUrl from "../../../../assets/chess/king_black.png"


interface Piece {
  id: string,
  pos: string
}

const BlackKing  = ({ id, pos }: Piece) => {
  return (
    <ChessPiece id={id} src={imgUrl} pos={pos} player='BLACK' />
  )
}

export default BlackKing