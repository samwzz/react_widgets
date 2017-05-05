require_relative "tile.rb"
require "byebug"

class Board
  attr_reader :grid

  def self.from_file
    grid = []
    rows = File.readlines("./sudoku1.txt")
    rows.each do |line|
      inner_grid = []
      line.chomp.chars.map.with_index do |chr, i|
        inner_grid[i] = Tile.new(chr)
      end
      grid << inner_grid
    end
    Board.new(grid)
  end

  def initialize(grid)
    @grid = grid
  end

  def update_value(pos, value)
    self[pos].change_value(value)
  end

  def [](pos)
    row, col = pos
    @grid[row][col]
  end

  def []=(pos, value)
    row, col = pos
    @grid[row][col] = value
  end

  def render
    (@grid[0].length).times {print "--"}
    print "\n"
    @grid.each do |row|
      print "|"
      row.each do |tile|
        print "#{tile.to_s}"
      end
      print "\n"
      (row.length).times {print "--"}
      print "\n"
    end
    return
  end



  def boxes

  end

  def rows
    @grid.each do |row|
      return false unless row.length == row.uniq.length
    end
    true
  end

  def columns
    @grid.transpose.each do |col|
      return false unless col.length == col.uniq.length
    end
    true
  end




end
