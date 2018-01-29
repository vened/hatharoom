class CreateAlbums < ActiveRecord::Migration[5.1]
  def change
    create_table :albums do |t|
      t.string :title
      t.text :description
      t.boolean :publish
      t.string :slug

      t.timestamps
    end
  end
end
