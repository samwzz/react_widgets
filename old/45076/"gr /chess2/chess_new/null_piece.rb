require_relative 'piece'
require 'singleton'

class NullPiece < Piece
  include Singleton

  def initialize
    # @color = color
    # @symbol = 🔸
  end

  def to_s
    "-"
  end
end
