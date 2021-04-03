require "csv"

class Importer
  DATA_PATH = "./data/"

  def import
    CSV.read(DATA_PATH+@path).map do |row|
      @plan.new(*row)
    end
  end

end