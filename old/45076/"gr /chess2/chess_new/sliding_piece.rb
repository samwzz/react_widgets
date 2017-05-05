module SlidingPiece


  def moves

  end


  private



  def horizontal_dirs(pos)
    x, y = pos
    possible_positions = []
    i = 0
    while i < 8
      possible_positions << [x, i] unless i == y
      i += 1
    end
    possible_positions
  end

  def diagonal_dirs(pos)
    row, col = pos



    #row - 1, col - 1 until row == 0 || col == 0

    #row + 1, col - 1 until row == 7 || col == 0

    #row + 1, col + 1 until row == 7 || col == 7

    #row - 1, col + 1 until row == 0 || col == 7






  end

  def grow_unblocked_moves_in_dir(dx, dy)

  end
end
