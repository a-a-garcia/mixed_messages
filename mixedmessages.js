let welcome = "Ready to find out which songs off of some of Charli XCX's critically acclaimed albums are YOU?"
console.log(welcome);
let thinking ="Now just give me one second while I figure out who the hell you ACTUALLY are..."
console.log(thinking);

let randomizerOne = Math.floor(Math.random() * 16);
let randomizerTwo = Math.floor(Math.random() * 11);
let randomizerThree = Math.floor(Math.random() * 5);

console.log(`For Charli, the self titled album, it looks like...`);

switch (randomizerOne) {
    case 1:
        randomizerOne = 1;
        console.log('You love to disassociate and drink and drive. You\'re Next Level Charli!');
        break;
    case 2:
        randomizerOne = 2;
        console.log('Why do you keep when the water runs? You love to fight the inevitable. You\'re Gone!');
        break;
    case 3:
        randomizerOne = 3;
        console.log('Do you love him or not? That is the question. You\'re Cross You Out.');
        break;
    case 4:
        randomizerOne = 4;
        console.log('You\'re a sucker for all things nostalgic. You\'re 1999!');
        break;
    case 5: 
        randomizerOne = 5;
        console.log('You\'ve got expensive taste. You get what you want like CLICK! You\'re Click.');
        break;
    case 6:
        randomizerOne = 6;
        console.log('You\'ve gotta tell me the reason why we can\'t fall in love! You\'re Warm.');
        break;
    case 7:
        randomizerOne = 7;
        console.log('You love a good blaring synth. And overthinking. You\'re Thoughts!');
        break;
    case 8:
        randomizerOne = 8;
        console.log('You love the emotional complexity of Track 10 but want it in a more radio-esque digestible fashion. Good thing you can have both! You\'re Blame It On Your Love!');
        break;
    case 9:
        randomizerOne = 9;
        console.log('You love sitting in cars that are on fire and suspended in mid air. Cars that eventually explode... You\'re White Mercedes!');
        break;
    case 10:
        randomizerOne = 10;
        console.log('You are appreciative of one of the greatest "hyperpop" tracks made in the history of the genre. And you know what it feels like to be a friend who cares! You\'re Silver Cross!');
        break;
    case 11:
        randomizerOne = 11;
        console.log('You appreciate the stripped back side of things. And have a deep understanding of longing. You\'re I Don\'t Wanna Know!');
        break;
    case 12:
        randomizerOne = 12;
        console.log('You know what it\'s like to fall in love. You\'re Official!');
        break;
    case 13:
        randomizerOne = 13;
        console.log('You love to PARTYYYYYYY. You\'re Shake It!');
        break;
    case 14:
        randomizerOne = 14;
        console.log('You are not so careless about the impact of your actions and you know when to say sorry when you\'ve done wrong. You\'re February 2017!');
        break;
    case 15:
        randomizerOne = 15;
        console.log('You\'re from the future. You\'re 2099.');
        break;
    default:
        console.log('Uh oh... something went wrong. Try again.');
        break;
}

console.log(`And for Pop 2, the hyperpop album before hyperpop, it looks like...`);

switch (randomizerTwo) {
    case 1:
        randomizerOne = 1;
        console.log('Sometimes, you just don\'t really know what you want, and that\'s okay. You\'re better off alone, all aloneee all aloneee all aloneee... You\'re Backseat!');
        break;
    case 2:
        randomizerOne = 2;
        console.log('You love to overthink about them, then try to cover it up by partying. You\'re Out Of My Head!');
        break;
    case 3:
        randomizerOne = 3;
        console.log('You envy your love, because maybe they have just a little too much power over you. You\'re Lucky!');
        break;
    case 4:
        randomizerOne = 4;
        console.log('You love a good screech. But in all seriousness, you might need some therapy. You\'re Tears!');
        break;
    case 5: 
        randomizerOne = 5;
        console.log('You\'re a certified slayaholic, and everybody wants to party with you. You literally "got it." You\'re I Got It!');
        break;
    case 6:
        randomizerOne = 6;
        console.log('You might actually be a robot. You get what you want, like it or not! You\'re a Femmebot!');
        break;
    case 7:
        randomizerOne = 7;
        console.log('You\'re kinda thirsty, but in the best way. And you really like your partner. You\'re so Delicious!');
        break;
    case 8:
        randomizerOne = 8;
        console.log('You\'re the fun bubblegum pop goodness that changed the landscape of pop music and what people thought it was capable of. You\'re Unlock It!');
        break;
    case 9:
        randomizerOne = 9;
        console.log('You\'ve been fantasizing about a Porsche. Need I say anymore? You\'re Porsche.');
        break;
    case 10:
        randomizerOne = 10;
        console.log('You are the alpha, and the omega. You are (one) of the magnum opuses of the pop sorceress Charli XCX. You\'re TRACK 10! Wow, I\m jealous.');
        break;
    default:
        console.log('Uh oh... something went wrong. Try again.');
        break;
}

console.log(`And for Vroom Vroom EP, (RIP SOPHIE!) it looks like...`);


switch (randomizerThree) {
    case 1:
        randomizerThree = 1;
        console.log('You changed the game. You\'ve got a certain kind of sleekness and sheen that people keep coming back to. You\'ve written history. You\'re Vroom Vroom!');
        break;
    case 2:
        randomizerThree = 2;
        console.log('You definitely have been to your fair share of underground raves. You know how to party AND be emotionally vulnerable, at the same time. You\'re Paradise!');
        break;
    case 3:
        randomizerThree = 3;
        console.log('You want that trophy! Need I say more? You\'re Trophy!');
        break;
    case 4:
        randomizerThree = 4;
        console.log('You\'re sexy. Like REALLY sexy. And a little risque. Just a little. You\'re Secret (Shh)!');
        break;
    default:
        console.log('Uh oh... something went wrong. Try again.');
        break;
}
