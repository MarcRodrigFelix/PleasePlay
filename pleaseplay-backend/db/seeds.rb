# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


game_a = Game.create(title: "The Last of Us", image: 'https://upload.wikimedia.org/wikipedia/en/4/46/Video_Game_Cover_-_The_Last_of_Us.jpg', review: 'This game was amazing on all accounts of the word. I have never played a game that has connected me so well and emotionally to the video game characters. You go on a cross country dangerous adventure with a grown man watching over a small teenager. A meaningless trip soon becomes one of the the most meaningfull trips in the history of the world, as you head out to get the young girl to safety (for certain reasons I will not spoil). I ask that you PLEASE PLAY The Last of Us because I can confidently say that there is no other game out there that even comes close to making you feel, experience and go through what you do with this game. One of the most carefully crafted games I have ever encountered.' )
game_b = Game.create(title: "Furi", image: "https://assets2.ignimgs.com/2015/10/14/furi-buttonjpg-b6a7eb.jpg", review: "You want to talk about and underrated game of all time? Furi. Dont believe me? Please Play it! Its a game filled with beautiful art styles and wonderful uptempo music. You go around fighting bosses. Thats it. The entire game is based around defeating top level enemies with high scale difficulty. They all have tons of different patterns and power moves that keep you on your toes! Please please, do yourself a favor and play this masterful game. Quite rarely do you come around games with bosses now a days, and even less, a game FULL OF THEM so for that reason. PLEASE PLAY Furi!")


comment_a = Comment.create(content: "Yea I guess this game was pretty good. The combat could def have been improved on before release but all in all, I can happily agree to PLEASE PLAY.", commentator: "ThatONEGUYJoel", game: game_a )
comment_b = Comment.create(content: "While im not really a fan of that art style. I got to tell you, I do agree. This game immediatley won me over and easily sits as one of my top 5 games ever, and maybe moster underatted and not talked about games ever.", commentator: "RanduuuumDuuuude", game: game_b)