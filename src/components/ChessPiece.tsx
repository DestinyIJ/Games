import { useState } from 'react'

interface ChessPiece {
    src: string,
    id: string
}
const ChessPiece = ({ src, id }:ChessPiece) => {
  const [isDragged, setIsDragged] = useState(false)

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>, id: string) => {
    event.dataTransfer.setData('text/plain', id);
    setIsDragged(true)
  };

  return (
    <div id={id} 
      onDragStart={(event) => handleDragStart(event, id)} draggable="true" 
      onDragEnd={() => setIsDragged(false)}
      className={`w-full h-full flex items-center justify-center ${isDragged && 'opacity-25'} z-50`}
    >
        <img src={src}  />
    </div>
  )
}

export default ChessPiece