require_relative 'null_piece'
require_relative 'cursor'
require_relative 'piece'
require_relative 'player'
require_relative 'knight'
require_relative 'bishop'
require_relative 'pawn'
require_relative 'queen'
require_relative 'rook'
require_relative 'king'

class Board

  attr_accessor :grid, :empty_space

  def initialize
    @grid = Array.new(8) {Array.new(8)}
    @empty_space = NullPiece.instance
    @grid = populate_board
  end

  def populate_board
    @grid.map.with_index do |row, row_idx|

      if row_idx.between?(2, 5)
        row.map do |space|
          @empty_space
        end
      elsif row_idx == 0
        last_rows(0, "jules")
      elsif row_idx == 7
        last_rows(7, "yong")
      elsif row_idx == 1
        pawn_rows(1, "jules")
      elsif row_idx == 6
        pawn_rows(6, "yong")
      end

    end
  end

  def last_rows(row_idx, name)
    [
      Rook.new(self, [row_idx, 0], Player.new(name)),
      Knight.new(self, [row_idx, 1], Player.new(name)),
      Bishop.new(self, [row_idx, 2], Player.new(name)),
      Queen.new(self, [row_idx, 3], Player.new(name)),
      King.new(self, [row_idx, 4], Player.new(name)),
      Bishop.new(self, [row_idx, 5], Player.new(name)),
      Knight.new(self, [row_idx, 6], Player.new(name)),
      Rook.new(self, [row_idx, 7], Player.new(name))
    ]

  end

  def pawn_rows(row_idx, name)
    row_of_pawns = Array.new(8)
    row_of_pawns.map!.with_index do |square, col_idx|
      Pawn.new(self, [row_idx, col_idx], Player.new(name))
    end

    row_of_pawns
  end


  def [](pos)
    x, y = pos
    @grid[x][y]
  end

  def []=(pos, piece)
    x, y = pos
    @grid[x][y] = piece
  end

  def move_piece(from_pos, to_pos)

    if self[from_pos].instance_of?(NullPiece)
      raise "Invalid move"
    elsif self[from_pos].moves.include?(to_pos)
      self[to_pos] = self[from_pos]
      self[from_pos] = @empty_space
    else
      raise "Cannot move to that position!"
    end

      #access piece at from_pos and update its position to to_pos

    #raise error if to_pos is not included in piece's moves
  end

  def in_bounds(pos)
    x, y = pos
    return true if x.between?(0, 7) && y.between?(0, 7)
    false
  end

end
