import { ReactNode, useContext, useRef } from 'react';
import { ChessGameContext } from '../context/ChessGame.context';

interface TileProp {
  square: string,
  children?: ReactNode
}

const Tile = ({ square }: TileProp) => {
  const { handleMove } = useContext(ChessGameContext)

  const tileRef = useRef<HTMLDivElement | null>(null)
 
  const isEven = (number:number) => number % 2 === 0
  const isOdd = (number:number) => number % 2 !== 0

  const alternateA = ["a", "c", "e", "g"]
  const alternateB = ["b", "d", "f", "h"]

  const colorSquare = (square:string) => {
    if(alternateA.includes(square[0]) && isEven(parseInt(square[1]))) {
      return true
    } else if(alternateB.includes(square[0]) && isOdd(parseInt(square[1])) ) {
      return true
    } else {
      return false
    }
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>, square: string) => {
    event.preventDefault()
    const pieceId = event.dataTransfer.getData('text/plain');
    if (handleMove) {
      handleMove({ pieceId, square });
    }
  };

  

  return (
    <div id={square} key={square} ref={tileRef}
      onDragOver={(event) => event.preventDefault()}
      onDrop={(event) => handleDrop(event, square)}
      className={`${colorSquare(square) ? "bg-white" : ""} flex items-center justify-center z-[1000]`}
    >
    </div>
  )
}

export default Tile