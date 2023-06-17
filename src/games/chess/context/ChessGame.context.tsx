import React, { ReactNode, createContext, useState } from 'react';

// Create a new context for the chess game

interface handleMoveProps {
  pieceId: string,
  square: string,
}

type ChessGameContextType = {
  whiteTurn: boolean;
  handleMove: (props: handleMoveProps) => void;
  resetGame?: () => void;
};



const defaultChessGameContext = {
  whiteTurn: true,
  handleMove: () => { return null }
}
export const ChessGameContext = createContext<ChessGameContextType>(defaultChessGameContext);

interface handlePieceProps {
  squareFrom: string,
  squareTo: string
} 

const handlePawnMove = ({ squareFrom, squareTo } : handlePieceProps) => {
  console.log(squareFrom)
  console.log(squareTo)
}
const handleBishopMove = ({ squareFrom, squareTo } : handlePieceProps) => {
  console.log(squareFrom)
  console.log(squareTo)
}
const handleRookMove = ({ squareFrom, squareTo } : handlePieceProps) => {
  console.log(squareFrom)
  console.log(squareTo)
}
const handleKnightMove = ({ squareFrom, squareTo } : handlePieceProps) => {
  console.log(squareFrom)
  console.log(squareTo)
}

const handleKingMove = ({ squareFrom, squareTo } : handlePieceProps) => {
  console.log(squareFrom)
  console.log(squareTo)
}


const ChessGameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [whiteTurn, setWhiteTurn] = useState(true)

  const pieceCanMove = ({ piece, squareFrom, squareTo } : {
    piece: string,
    squareFrom: string,
    squareTo: string
  }) => {
    if(piece.includes("wp") || piece.includes("bp")) {
      console.log("This is a pawn")
      handlePawnMove({squareFrom, squareTo})
    } else if (piece.includes("wr") || piece.includes("br")) {
      console.log("This is a rook")
    } else if (piece.includes("wk") || piece.includes("bk")) {
      console.log("This is a king")
    } else if (piece.includes("wn") || piece.includes("bn")) {
      console.log("This is a knight")
    } else if (piece.includes("wb") || piece.includes("bb")) {
      console.log("This is a bishop")
    } else if (piece.includes("wq") || piece.includes("bq")) {
      console.log("This is a queen")
    }
  }

  const handleMove = ({pieceId, square:squareTo}:handleMoveProps) => {
    const piece = document.getElementById(pieceId)
    const tile = document.getElementById(squareTo)
    const squareFrom = piece?.getAttribute("data-position")

    if(piece && tile && squareFrom) {
      pieceCanMove({ piece: pieceId, squareFrom , squareTo })
      piece.setAttribute("data-position", squareTo)
      tile.replaceChildren(piece)
      setWhiteTurn(prev => !prev)
    }
  }


  

  // Expose the necessary values and functions to the child components
  const contextValue = {
    whiteTurn,
    handleMove,
  };

  return (
    <ChessGameContext.Provider value={contextValue}>
      {children}
    </ChessGameContext.Provider>
  );
};


export default ChessGameProvider;
