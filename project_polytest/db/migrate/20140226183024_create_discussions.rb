class CreateDiscussions < ActiveRecord::Migration
  def change
    create_table :discussions do |t|
      t.references :project, index: true
      t.references :user, index: true
      t.string :title
      t.text :body

      t.timestamps
    end
  end
end
