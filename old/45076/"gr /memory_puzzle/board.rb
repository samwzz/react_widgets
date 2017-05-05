require_relative("card")

class Board
  attr_reader :grid

  def initialize()
    @grid = Array.new(4){Array.new(4)}
  end

  VALUES = (["cat", "dog", "pig", "cow", "fish", "lion", "snake", "rat"] * 2)

  def populate
    new_values = VALUES.shuffle
    @grid = grid.map do |sub_array|
      sub_array.map do |ele|
        Card.new(new_values.pop)
      end
    end
    grid
  end

  def render
    @grid.each do |sub_array|
      sub_array.each do |card|
        print "#{card.display_info} "
      end
      print "\n"
    end
  end

  def won?
    @grid.flatten.all? { |card| card.showing == true}
  end

  def reveal(guessed_pos)
    unless self[guessed_pos].showing
      self[guessed_pos].reveal
      return self[guessed_pos].value
    end
  end

  def [](pos)
    row, col = pos
    @grid[row][col]
  end

  def []=(pos, value)
    row, col = pos
    @grid[row][col] = value
  end


end
