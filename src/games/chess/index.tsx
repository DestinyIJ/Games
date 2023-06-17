import { ChessBoard } from './components'
import ChessGameProvider from './context/ChessGame.context'

const ChessGame = () => {
  return (
    <>
        
        <ChessGameProvider>
            <div className="flex items-center justify-center h-screen bg-[#202020]">
                <ChessBoard />
            </div>
        </ChessGameProvider>
    </>
  )
}

export default ChessGame