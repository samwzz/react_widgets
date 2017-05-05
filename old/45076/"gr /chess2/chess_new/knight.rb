require_relative 'stepping_piece'

class Knight < Piece
  include SteppingPiece

  attr_reader :symbol

  def initialize(board, position, player)
    @symbol = :n
    super(board, position, player)
  end

  def move_diffs
    [[-2, -1],
    [-2, 1],
    [-1, 2],
    [-1, -2],
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1]]
  end

  def to_s
    "♞"
  end

end
