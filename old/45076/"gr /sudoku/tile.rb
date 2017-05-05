class Tile
  def initialize(value, given = true)
    @value = value
    @given = false if value == 0
  end

  def change_value(value)
    if !@given
      @value = value
    end
  end

  def to_s
    if @value.to_i != 0
      return "#{@value}|"
    else
      return " |"
    end
  end

end
