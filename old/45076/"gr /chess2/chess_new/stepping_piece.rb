require 'byebug'

module SteppingPiece

  def moves
    possible_moves = []

    start_pos = self.position

    self.move_diffs.each do |diff|
      new_pos = [start_pos.first + diff.first, start_pos.last + diff.last]
      possible_moves << new_pos if valid_move?(new_pos)
    end

    possible_moves
  end

  def valid_move?(pos)
    self.board.in_bounds(pos) &&
      (self.board[pos].instance_of?(NullPiece) ||
      self.board[pos].player != self.player)
  end

end



    #access piece's position
    #we iterate thorough piece's MOVE_DIFFS and add each to position
    #if the new_pos is in_bounds && NullPiece || opposite player's piece
      #add to possible_moves

    #returns array of all valid possible moves
    #refer to move_diffs
