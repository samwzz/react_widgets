class Game

  def initialize
    @board = Board.new
    @previous_guess =
  end


  def play
    until @board.won?
      @board.render
      puts "Please guess a position."
      guess = gets.chomp

    end
  end

  private
  def make_guess(pos)

  end


end
