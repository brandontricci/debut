class Option < ActiveRecord::Base
  belongs_to :question
  attr_accessor: :_delete
end
