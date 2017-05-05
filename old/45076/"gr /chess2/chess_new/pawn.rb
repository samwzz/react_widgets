class Pawn < Piece
  attr_reader :symbol

  def initialize(board, position, player)
    @symbol = :p
    super(board, position, player)
  end

  def to_s
    "♟"
  end
end
