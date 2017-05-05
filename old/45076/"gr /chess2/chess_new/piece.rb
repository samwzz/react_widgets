class Piece

  attr_reader :position, :board, :player

  def initialize(board, position, player)
    @position = position
    @board = board
    @player = player
  end

  def to_s
    "X"
  end

  # def moves(pos)
  # end


end
