# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



game_b = Game.create(title: "Furi", image: "https://assets2.ignimgs.com/2015/10/14/furi-buttonjpg-b6a7eb.jpg", review: "You want to talk about and underrated game of all time? Furi. Dont believe me? Please Play it! Its a game filled with beautiful art styles and wonderful uptempo music. You go around fighting bosses. Thats it. The entire game is based around defeating top level enemies with high scale difficulty. They all have tons of different patterns and power moves that keep you on your toes! Please please, do yourself a favor and play this masterful game. Quite rarely do you come around games with bosses now a days, and even less, a game FULL OF THEM so for that reason. PLEASE PLAY Furi!")

comment_b = Comment.create(content: "While im not really a fan of that art style. I got to tell you, I do agree. This game immediatley won me over and easily sits as one of my top 5 games ever, and maybe moster underatted and not talked about games ever.", commentator: "RanduuuumDuuuude", game: game_b)