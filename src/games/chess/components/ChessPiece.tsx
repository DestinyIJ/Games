import { useState, useRef, useEffect, useContext } from 'react'
import { ChessGameContext } from '../context/ChessGame.context'

interface ChessPiece {
    src: string,
    id: string,
    pos?: string,
    player: "WHITE" | "BLACK"
}
const ChessPiece = ({ src, id, pos, player }:ChessPiece) => {
  const { handleMove, whiteTurn } = useContext(ChessGameContext)
  const [isDragged, setIsDragged] = useState(false)
  const pieceRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if(!pieceRef.current) return
    const tileId = pieceRef?.current?.getAttribute("data-position")

    if(!tileId) return
    const tile = document.getElementById(tileId)

    tile?.appendChild(pieceRef.current)

  }, [])

  const isDraggable = () => {
    if ((player === "WHITE" && whiteTurn) || (player === "BLACK" && !whiteTurn)) {
      return true;
    } else {
      return false;
    }
  };

  const isDroppable = (piece:string) => {
    if(pieceRef.current?.id.charAt(0) === piece.charAt(0)){
      return false
    } else {
      return true
    }
  }

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>, id: string) => {
    if(isDraggable()) {
      event.dataTransfer.setData('text/plain', id);
      setIsDragged(true)
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    const pieceId = event.dataTransfer.getData('text/plain');
    if(!isDroppable(pieceId)) return
    event.preventDefault()
   
    const square = pieceRef?.current?.getAttribute("data-position")
  
    if (handleMove && square) {
      handleMove({ pieceId, square });
    }
  };

 

  return (
    <div id={id} 
      ref={pieceRef}
      data-position={pos}
      onDragStart={(event) => handleDragStart(event, id)} 
      onDragEnd={() => setIsDragged(false)}
      onDragOver={(event) => event.preventDefault()}
      onDrop={(event) => handleDrop(event)}
      className={`w-full h-full flex items-center justify-center ${isDragged && 'opacity-25'}`}
    >
        <img src={src}  />
    </div>
  )
}

export default ChessPiece