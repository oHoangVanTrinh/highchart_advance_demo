# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160829034821) do

  create_table "temperatures", force: :cascade do |t|
    t.string   "date",       limit: 255
    t.integer  "temp",       limit: 4
    t.string   "country",    limit: 255
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "name",                   limit: 255
    t.date     "birthday"
    t.integer  "math",                   limit: 4
    t.integer  "literary",               limit: 4
    t.integer  "chemistry",              limit: 4
    t.integer  "physical",               limit: 4
    t.integer  "biological",             limit: 4
    t.integer  "foreign_language",       limit: 4
    t.integer  "information_technology", limit: 4
    t.integer  "history",                limit: 4
    t.datetime "created_at",                         null: false
    t.datetime "updated_at",                         null: false
  end

end
