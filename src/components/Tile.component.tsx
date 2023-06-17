import { ReactNode, useContext } from 'react';
import { ChessGameContext } from '../context/ChessGame.context';

interface TileProp {
  square: string,
  children?: ReactNode
}

const Tile = ({ square }: TileProp) => {
  const { board, handleMove } = useContext(ChessGameContext)

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
  

  const getSquarePiece = (square:string) => {
    if(board) {
      const row = parseInt(square[1]) -1
      const col = square[0]

      return board[col][row]
    }
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>, square: string) => {
    console.log("handling drop", handleMove)
    event.preventDefault()
    const pieceId = event.dataTransfer.getData('text/plain');

    if (handleMove) {
      handleMove({ pieceId, square });
    }
    
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>, square: string) => {
    event.preventDefault()
    console.log(square)
  };

  return (
    <div id={square} key={square} 
      onDragOver={(event) => handleDragOver(event, square)}
      onDrop={(event) => handleDrop(event, square)}
      className={`${colorSquare(square) ? "bg-white" : ""} flex items-center justify-center`}
    >
       {
        getSquarePiece(square)
       }
    </div>
  )
}

export default Tile