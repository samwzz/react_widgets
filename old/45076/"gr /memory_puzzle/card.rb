class Card
  attr_reader :value, :showing

  def initialize(value)
    @value = value
    @showing = false
  end

  def display_info
    if !@showing
      "X"
    else
      "#{@value}"
    end
  end

  def reveal
    @showing = true
  end

  def hide
    @showing = false
  end

  def ==(other_card)
    self.value == other_card.value
  end

end
