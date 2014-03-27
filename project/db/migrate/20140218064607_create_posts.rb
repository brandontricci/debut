class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title
      t.text :text
      t.date :date
      t.attachment :photo
      t.boolean :completed

      t.timestamps
    end
  end
end
