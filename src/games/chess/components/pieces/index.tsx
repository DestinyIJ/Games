import BlackBishop from './BlackBishop'
import BlackKing from './BlackKing'
import BlackKnight from './BlackKnight'
import BlackPawn from './BlackPawn'
import BlackQueen from './BlackQueen'
import BlackRook from './BlackRook'
import WhiteBishop from './WhiteBishop'
import WhiteKing from './WhiteKing'
import WhiteKnight from './WhiteKnight'
import WhitePawn from './WhitePawn'
import WhiteQueen from './WhiteQueen'
import WhiteRook from './WhiteRook'

const Pieces = () => {
  return (
    <div className='hidden'>
        {/* white pieces */}
        <WhiteRook id='wr1' pos='a1'  />
        <WhiteKnight id='wn1' pos='b1' />
        <WhiteBishop id='wb1' pos='c1' />
        <WhiteQueen id='wq' pos='d1' />
        <WhiteKing id='wk' pos='e1' />
        <WhiteBishop id='wb2' pos='f1' />
        <WhiteKnight id='wn2' pos='g1' />
        <WhiteRook id='wr2' pos='h1' />
        <WhitePawn id='wp8' pos='a2' />
        <WhitePawn id='wp1' pos='b2' />
        <WhitePawn id='wp2' pos='c2' />
        <WhitePawn id='wp3' pos='d2' />
        <WhitePawn id='wp4' pos='e2' />
        <WhitePawn id='wp5' pos='f2' />
        <WhitePawn id='wp6' pos='g2' />
        <WhitePawn id='wp7' pos='h2' />
      
        
        {/* black pieces */}
        <BlackRook id='br1' pos='a8' />
        <BlackKnight id='bn1' pos='b8' />
        <BlackBishop id='bb1' pos='c8' />  
        <BlackQueen id='bq' pos='d8' />
        <BlackKing id='bk' pos='e8' />
        <BlackBishop id='bb2' pos='f8' />
        <BlackKnight id='bn2' pos='g8'/>
        <BlackRook id='br2' pos='h8' />
        <BlackPawn id='bp1' pos='a7' />
        <BlackPawn id='bp2' pos='b7' />
        <BlackPawn id='bp3' pos='c7' />
        <BlackPawn id='bp4' pos='d7' />
        <BlackPawn id='bp5' pos='e7' />
        <BlackPawn id='bp6' pos='f7' />
        <BlackPawn id='bp7' pos='g7' />
        <BlackPawn id='bp8' pos='h7' />
        

    </div>
  )
}

export default Pieces