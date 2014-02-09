exports.bot = function(b){
var bot = ''
if(typeof b != "undefined")  bot = b
else  bot = {};

var botStuff = {
name: '~Scizbot'
jokes: {
0: 'The original title for Alien vs. Predator was Alien and Predator vs Chuck Norris. The film was canceled shortly after going into preproduction. No one would pay nine dollars to see a movie fourteen seconds long.',
1: 'There used to be a street named after Chuck Norris, but it was changed because nobody crosses Chuck Norris and lives.',
2: 'Some magicans can walk on water, Chuck Norris can swim through land.',
3: 'If you were somehow able to land a punch on Chuck Norris your entire arm would shatter upon impact. This is only in theory, since, come on, who in their right mind would try this?',
4: 'Chuck Norris can cut through a hot knife with butter',
5: 'Chuck Norris has never caught a cold. How do we know? Colds still exist.',
6: 'Yo\' Mama is so dumb, she left her car at a stop sign because it never changed to "go."',
7: 'Yo\' Mama is so fat, when she stepped on the scale it said "one at a time"',
8: 'Yo\' Mama so fat, when she sat on an iPhone, she turned it to an iPad',
9: 'Yo\' Mama so stupid, she brought a spoon to the Superbowl.',
10: 'Yo\' mama so ugly that not even goldfish crackers smile back',
11: 'How does a blonde kill a fish? She drowns it.',
12: 'How do you amuse a blonde for hours? Write \'Please turn over\' on both sides of a piece of paper',
13: 'Girl: Why are you so ugly? Boy: I\'m you from the future.',
14: '-Someone says something about you or boring -You, Say it to my butt because its the only thing that gives a crap.',
15: 'Me: *randomly walks up to Chinese person*. "Chow tang wong.". Chinese person: *nods, points to the bathroom*.',
16: 'Random Kid,"Haha you failed!" You, "So did your dads condom."',
17: 'Why did the redneck cross the road? He wanted to sleep in the ditch on the other side. ',
18: 'Why did the blind blonde cross the road? She was following her seeing-eye chicken.',
19: 'Why was there so much confusion with the Secret Service after George W. Bush took over the White House? Because President Bill Clinton\'s code name was also "Mr. Bush."',
20: 'Most wives whose husbands fool around have to worry about their husbands getting AIDS from sex. Hillary just has to worry about her husband getting sex from aides.'
},
getRandjoke: function(){
return bot.jokes[Math.floor[Math.random()*20]];
},
say: function(name,message){
  return room.add('|c| ' + name + '|' + message);
},
MOTD: undefined,
cmds: {
  motd: function(target, room, user) {
    if(this.can('hotpatch')) {
      if(!target){
        return this.add('|c|' + bot.name + 'Message of the Day: ' + bot.MOTD)
      }
      if(!this.canTalk(target)) return false;
      else{
        this.add('|c|' + bot.name +'The new Message of the Day is ' + target + '.');
        bot.MOTD = target;
      }
    }
    else{ 
      return false;
    }
  },
  
  motdoff: function(target, room, user) {
    if(this.can('hotpatch')) {
      return this.add('The MOTD function is now off');
      bot.MOTD = undefined;
  }
},

say: function(target, room, user){
  if(this.can('hotpatch')) {
    if(this.canTalk(target)) return false;
    this.logModCommand(user.name + 'used /say to say ' + target + '.');
    return bot.say(bot.name, target);
  }
  else {
    return false;
          }
},  

joke: function(target, room, user){
  if(this.can('hotpatch')) {
    return bot.say(bot.name, bot.getRandjoke);
  }
}
}
if(bot.MOTD){
global.Int =  setInterval(function(){Rooms.rooms.lobby.add('|c|' + bot.name + 'Message of the Day: ' + bot.MOTD)},300000);
global.IntOn = true;
}
if(!bot.MOTD && global.IntOn){
  clearInterval(Int);
}
}
