class Queen < Piece
  attr_reader :symbol

  def initialize(board, position, player)
    @symbol = :q
    super(board, position, player)
  end

  def to_s
    "♛"
  end
end
