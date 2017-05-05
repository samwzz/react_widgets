require_relative 'stepping_piece'

class King < Piece
  include SteppingPiece
  attr_reader :symbol

  def initialize(board, position, player)
    @symbol = :k
    super(board, position, player)
  end

  def to_s
    "♚"
  end
end
