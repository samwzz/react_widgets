class Bishop < Piece
  attr_reader :symbol

  def initialize(board, position, player)
    @symbol = :b
    super(board, position, player)
  end

  def to_s
    "♝"
  end
end
