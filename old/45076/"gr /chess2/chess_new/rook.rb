class Rook < Piece
  attr_reader :symbol

  def initialize(board, position, player)
    @symbol = :r
    super(board, position, player)
  end

  def to_s
    "♜"
  end
end
