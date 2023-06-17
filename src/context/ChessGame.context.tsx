import React, { ReactNode, createContext, useState } from 'react';
import { 
  BlackBishop, BlackKing, BlackKnight, BlackQueen, BlackRook, BlackPawn,
  WhiteBishop, WhiteKing, WhiteKnight, WhiteQueen, WhiteRook, WhitePawn } from '../components/pieces';

// Create a new context for the chess game
type ChessBoardType = {
  [key: string]: (ReactNode | string)[];
};

interface handleMoveProps {
  pieceId: string,
  square: string,
}

type ChessGameContextType = {
  board:  ChessBoardType;
  handleMove: (props: handleMoveProps) => void;
  resetGame?: () => void;
};

const initialBoard: ChessBoardType = {
  "a":[<WhiteRook id='wr2' />, <WhitePawn id='wp8' />, ' ', ' ', ' ', ' ', <BlackPawn id='bp8' />, <BlackRook id='br2' />],
  "b":[<WhiteKnight id='wn2' />, <WhitePawn id='wp7' />, ' ', ' ', ' ', ' ', <BlackPawn id='bp7' />, <BlackKnight id='bn2' />],
  "c":[<WhiteBishop id='wb2' />, <WhitePawn id='wp6' />, ' ', ' ', ' ', ' ', <BlackPawn id='bp6' />, <BlackBishop id='bb2' />],
  "d":[<WhiteQueen id='wq' />, <WhitePawn id='wp5' />, ' ', ' ', ' ', ' ', <BlackPawn id='bp5' />, <BlackQueen id='bq' />],
  "e":[<WhiteKing id='wk' />, <WhitePawn id='wp4' />, ' ', ' ', ' ', ' ', <BlackPawn id='bp4' />,  <BlackKing id='bk' />],
  "f":[<WhiteBishop id='wb1' />, <WhitePawn id='wp3' />, ' ', ' ', ' ', ' ', <BlackPawn id='bp3' />, <BlackBishop id='bb1' />],
  "g":[<WhiteKnight id='wn1' />, <WhitePawn id='wp2' />, ' ', ' ', ' ', ' ',<BlackPawn id='bp2' />, <BlackKnight id='bn1' />],
  "h":[<WhiteRook id='wr1' />, <WhitePawn id='wp1' />, ' ', ' ', ' ', ' ', <BlackPawn id='bp1' />, <BlackRook id='br1' />],
};

const defaultChessGameContext = {
  board: initialBoard,
  handleMove: () => { return null }
}
export const ChessGameContext = createContext<ChessGameContextType>(defaultChessGameContext);

const ChessGameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [board, setBoard] = useState(initialBoard);


  const [draggedPiece, setDraggedPiece] = useState({
    bp1: "", bp2: "", bp3: "", bp4: "", bp5: "", bp6: "", bp7: "", bp8: "",
    br1: "", br2: "", bn1: "", bn2: "",bb1: "",bb2: "",bq: "", bk: "",
  })

  const handleMove = ({pieceId, square}:handleMoveProps) => {
    const piece = document.getElementById(pieceId)
    const squareToDrop = document.getElementById(square)
    const row = parseInt(square[1]) -1
    const col = square[0]
    if(piece) {
      squareToDrop?.appendChild(piece)
      // setBoard(prev => ({
      //   ...prev,
      //   [col]: [
      //     ...prev[col].slice(0, row),
      //     piece,
      //     ...prev[col].slice(row + 1)
      //   ]
      // }));
      // // console.log(board)
    }
  }


  const resetGame = () => {
    setBoard(initialBoard)
  };

  // Expose the necessary values and functions to the child components
  const contextValue = {
    board,
    handleMove,
    resetGame,
  };

  return (
    <ChessGameContext.Provider value={contextValue}>
      {children}
    </ChessGameContext.Provider>
  );
};


export default ChessGameProvider;
