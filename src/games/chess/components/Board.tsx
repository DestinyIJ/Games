import { useRef } from "react"
import { Tile } from "."
import Pieces from "./pieces"

const VERTICAL_AXES = ["8", "7", "6", "5", "4", "3", "2", "1"]
const HORIZONTAL_AXES = ["a", "b", "c", "d", "e", "f", "g", "h"]

const Board = () => {
  const board: string[] = []
  VERTICAL_AXES.forEach((v) => {
    HORIZONTAL_AXES.forEach(h => board.push(`${h}${v}`))
  })

  const boardRef = useRef<HTMLDivElement | null>(null)

  

  return (
   <>
     <div ref={boardRef} className="bg-[#779556] w-[500px] h-[500px] aspect-square grid grid-cols-8 grid-rows-8">
      {
        board.map((square) => (
          <Tile square={square} key={square} />
        ))
      }
      </div>
      <Pieces />
      
   </>
  )
}

export default Board