const plot = [
  {
    id: 0,
    image: "/images/cabin2.png",
    title: "Welcome to Camp Slaughter!",
    admin: "Intro",
    content:
      " You stand, speechless on the shore, watching hundreds of kids sink into oblivion, while two mysterious voices maniacally giggle. The sound dissipates into the forest in all directions, leaving you alone with the weight of the horrific crime you have now become an accomplice in. ",
    choices: [
      {
        text: "Get Your Cabin Assignment",
        target: 1,
      },
    ],
  },
  {
    id: 1,
    image: "/images/ignored_1.png",
    title: "Chapter 1",
    admin: "Chapter 1",
    content:
      " 'Hey...hey you,' a voice calls out. You snap out of the day dream you were having.Recently you've been having more of these nightmarish dreams that seem too lifelike. You take a breath, look around to see you made it to camp, and say, 'present.' \n\nClouds fill the sky on your first day of camp. Noticing other kids now staring, you gather yourself and walk over to the closest group and try to engage them in conversation. Per usual, you find yourself unable to connect with kids your own age, and you think to yourself, 'why is this so difficult for me to do?' \n\nYou arrive at the head cabin where everyone is checking in, but notice your name isn’t on any list. You try to talk to the camp leaders, but they’re busy and ignoring you - The other campers are making friends and pairing off for bunkmates, leaving you utterly alone with no one to room with. \n\nAs you meander to the cabin at the edge of camp, dragging your bags behind you, you find the first bunk in an empty cabin at the edge of camp. Lackadaisically, you toss your stuff on your bed and head out to the first activity. ",
    choices: [
      {
        text: "Head to First Activity",
        target: 2,
      },
    ],
  },
  {
    id: 2,
    image: "/images/field.png",
    title: "Chapter 2",
    admin: "Chapter 2",
    content:
      "As you arrive back at the main campground you see groups have formed up for a good old fashioned game of tug-of-war. You join the closest team and begin to pull with all your might. The rope leads onto the opposing team’s side and the team captain yells for everyone to pull. Snickering behind you are a couple of kids, who look your way and say, 'not like you’ll be any help!' \n\nDo You: ",
    choices: [
      {
        text: "Feel Empowered to Prove Them Wrong? ",
        target: 3,
      },
      {
        text: "Feel Dejected and Let Go of the Rope?",
        target: 4,
      },
    ],
  },
  {
    id: 3,
    image: "/images/field.png",
    title: "Chapter 2",
    admin: "Chapter 2 || Feel Empowered to Prove Them Wrong?",
    content:
      "As you muster up all your strength to show these kids what you’re made of...you pull on the rope and as you feel your feet dig into the earth all of a sudden the line goes slack and all the other kids let go as you fall on your ass into the nearest pile of mud. All the kids point and laugh at you. \n\n'Alright kids, time for lunch,' a counselor says, 'go hit the showers, clean yourself off, and join us when you're done!'",
    choices: [
      {
        text: "Head to Lunch",
        target: 5,
      },
    ],
  },
  {
    id: 4,
    image: "/images/field.png",
    title: "Chapter 2",
    admin: "Chapter 2 || Let Go of Rope",
    content:
      "As you let go of the rope feeling like the kids seem to not want you there, the other team pulls harder every second and before you know it they’ve won. Your team turns to you and scowls, 'thanks a lot!' one kid shouts. As the kids leave for lunch one of them pushes you down and you fall on your ass into the nearest pile of mud. All the kids point and laugh at you. \n\n'Alright kids, time for lunch. You, hit the showers, clean yourself off, and join us when you're done!'",
    choices: [
      {
        text: "Head to Lunch",
        target: 5,
      },
    ],
  },
  {
    id: 5,
    image: "/images/lunch.png",
    title: "Chapter 3",
    admin: "Chapter 3 - Lunch",
    content:
      "After returning from the showers and in a new set of clothes, you scan the room for a friend, just someone to have a connection with, but you then realize where you are. \n\nThis is Camp A Goni, where you’ve been harassed and bullied for the past few years and yet your parents still force you here because it's 'good for you to make friends.' A sinking feeling in your stomach returns and decides you should…",
    choices: [
      {
        text: "Take Your Parent's Advice and Sit with the Winning Team",
        target: 6,
      },
      {
        text: "Say, 'Screw It' and Sit Alone",
        target: 7,
      },
    ],
  },
  {
    id: 6,
    image: "/images/lunch.png",
    title: "Chapter 3",
    admin: "Chapter 3 || Sit With the Winning Team",
    content:
      "As you walk over to the table with the winning team, you hope that with your 'help' on their win, you’d be welcomed...you feel a tug on your shirt as you walk past a lone person and hear a voice say, 'you don’t want to go sit with them. Sit...join me, there’s no point in going where you’re not wanted. \n\nIt’s been a tough day and I could use a friend too.'The mysterious new kid introduces themself as Ezra and as you both chat and laugh you feel your anxiety melt away as time seems to slip away and before you know it, you hear someone shout, time for the swim! Everyone get your bathing suits and head to the lake! \n\nEzra turns to you and says, 'what do you want to do?'",
    choices: [
      {
        text: "Partake in the Next Activity",
        target: 8,
      },
      {
        text: "Skip it and Go for a Walk Instead",
        target: 11,
      },
    ],
  },
  {
    id: 7,
    image: "/images/lunch.png",
    title: "Chapter 3",
    admin: "Chapter 3 || Sit Alone",
    content:
      "As you walk over to the far side of the room...you feel a tug on your shirt as you walk past a lone person and hear a voice say, 'you don’t want to go sit with them. Sit...join me, there’s no point in going where you’re not wanted. It’s been a tough day and I could use a friend too.\n\n'The mysterious new kid introduces themself as Ezra. As you both chat, laugh, and lose track of time, you feel your anxiety melt away as time seems to slip away endlessly and before you know it, you hear someone shout, ‘time for the swim! Everyone get your bathing suits and head to the lake!\n\n’Ezra turns to you and says, 'what do you want to do?'",
    choices: [
      {
        text: "Partake in the Next Activity",
        target: 8,
      },
      {
        text: "Skip it and Go for a Walk Instead",
        target: 11,
      },
    ],
  },
  {
    id: 8,
    image: "/images/swimming.png",
    title: "Chapter 4",
    admin: "Chapter 4 - Swimming",
    content:
      "Upon arriving at the lake,the campers are swimming, so you and Ezra decide to jump into the lake and both swim out, away from the other kids. Ezra asks 'You know I noticed how the others treat you. Why do you let them pick on you like that? They clearly are bullies and you deserve some pay back wouldn’t you agree?'",
    choices: [
      {
        text: "Yes",
        target: 9,
      },
      {
        text: "No",
        target: 10,
      },
    ],
  },
  {
    id: 9,
    image: "/images/swimming.png",
    title: "Chapter 4",
    admin: "Chapter 4 || Yes ",
    content:
      "Ezra says, 'watch this!' Diving under the water, they disappear from sight and next thing you know kids from the middle of the lake start disappearing under the water one by one, each time, Ezra popping up screaming in a horrific high pitch noise. \n\nYou laugh as they all swim away and head towards shore. The counselor says 'not funny, Ezra!' Blowing a whistle calls everyone back to shore and cancels the activity.",
    choices: [
      {
        text: "Head to Campfire",
        target: 15,
      },
    ],
  },
  {
    id: 10,
    title: "Chapter 4",
    image: "/images/swimming.png",
    admin: "Chapter 4 || No ",
    content:
      "A large young man swims over to you as you both are talking and he introduces himself as Artie. He was the team captain on the opposing team from tug-of-war earlier. Artie says 'Hey, I’m really sorry about the actions of the kids earlier. \n\nThat’s no way to handle fellow campers and I wanted to apologize. Any team would be lucky to have someone like you on it!' He smiles, quickly turns around, and swims away back to the other kids who are playing 'shark in the water.' Ezra gives him a side eye glance and scoffs. In the distance you hear the sound of a whistle calling everyone back to shore and ending the activity.",
    choices: [
      {
        text: "Head to Campfire",
        target: 15,
      },
    ],
  },
  {
    id: 11,
    title: "Chapter 4",
    image: "/images/rocks.png",
    admin: "Chapter 4 || Walk ",
    content:
      "Ezra convinces you to skip the activity and go for a walk around the lake. As you are walking you notice a large boulder and Ezra hops up on top of it. Ezra turns, looks down at you and asks 'Why do you let those kids pick on you? They clearly are bullies and deserve some pay back don’t you think? And before you have a second to answer Ezra hops back down, and pushes the boulder down the hill. As it tumbles down the hill picking up speed you:",
    choices: [
      {
        text: "Scream to Have People Get Out of the Way",
        target: 12,
      },
      {
        text: "Watch, Frozen",
        target: 13,
      },
    ],
  },
  {
    id: 12,
    image: "/images/rocks.png",
    title: "Chapter 4",
    admin: "Chapter 4 || Scream",
    content:
      "You scream as loud as you can and all the kids down below in the lake look up at you and move out of the way as the boulder comes careening down the hill. 'Why’d you do that?!' Ezra angrily asks. You respond, 'You can’t hurt people just cause they hurt me.' \n\nYou then run down to the lake and a young man you know as Artie approaches, thanking you for watching out for him and his friends. He then adds, 'we should get to the campfire, you can sit with us.’ You feel eyes staring at you as Ezra glares at you from afar. Ezra looks at you and says, 'we should get to the campfire before we get into more trouble.'",
    choices: [
      {
        text: "Head to Campfire",
        target: 14,
      },
    ],
  },
  {
    id: 13,
    image: "/images/rocks.png",
    title: "Chapter 4",
    admin: "Chapter 4 || Frozen",
    content:
      "As you stand there you hear screams from the lake as Artie, the tug-of-war team captain, tells everyone to watch out! The boulder crashes into the lake with a loud crash and a wave pushes everyone to shore. Artie sees you standing there at the top of the hill and runs up to you both, screaming, 'What is wrong with you two? Why did you do anything to help us?!' He glares at you both and storms off in a huff. ",
    choices: [
      {
        text: "Head to Campfire",
        target: 14,
      },
    ],
  },
  {
    id: 14,
    image: "/images/fire_1.png",
    title: "Chapter 5",
    admin: "Chapter 5 - Campfire",
    content:
      "You and Ezra arrive at the bonfire after the other campers have already found spots close to the fire. You share a spot on a log on the edge of the group and decide to listen to the end of the last spooky story. '... and they never saw them again'  (faded in the distance). ",
    choices: [
      {
        text: "Nudge Ezra to Tell a Story",
        target: 15,
      },
      {
        text: "Get the Nerve to Tell a Story",
        target: 16,
      },
    ],
  },
  {
    id: 15,
    image: "/images/fire_1.png",
    title: "Chapter 5",
    admin: "Chapter 5 || Ezra Story",
    content:
      "You turn and nudge Ezra, 'you have to share a scary story now... I triple dog dare you...' Ezra stares back at, eyes wide. He shakes his head, shrugs, and clears his throat. \n\nEhem - ‘HEY GUYS’ Artie abruptly interrupts the ghosts stories and announces 'how about we take a break from this and sing campfire songs' Ezra turns to you and says 'Let’s go back to our cabin, I don’t want to be here anymore.'",
    choices: [
      {
        text: "Go Back to Cabin",
        target: 17,
      },
    ],
  },
  {
    id: 16,
    image: "/images/fire_1.png",
    title: "Chapter 5",
    admin: "Chapter 5 || Your Story",
    content:
      "You finally muster up the courage to tell a ghost story to the group, as you’ve wanted to impress Ezra. You stand up, knees shaking, heart beating out of your chest, and clear your throat to speak. \n\n'EHEM - ' ‘HEY GUYS’ Artie abruptly interrupts the ghost stories and announces 'it’s time for some campfire songs' Ezra pulls you back down, noticeably irritated that Artie interrupted you before you could even tell your story. Ezra turns to you and says 'Let’s go back to our cabin, I don’t want to be here anymore.'",
    choices: [
      {
        text: "Go Back to Cabin",
        target: 17,
      },
    ],
  },
  {
    id: 17,
    image: "/images/cabin.png",
    title: "Chapter 5",
    admin: "Chapter 5 || Cabin",
    content:
      "Once You and Ezra arrive back at your cabin, you notice there is another camper’s bags on the bunk next to yours. 'Hey, looks like we’re bunkmates now' Ezra says through a grin... 'My parents dropped me off late and this was the last bunk that was available for me. Guess you’re stuck with me for a few days'.",
    choices: [
      {
        text: "Next Day...",
        target: 18,
      },
    ],
  },
  {
    id: 18,
    image: "/images/field.png",
    title: "Chapter 6",
    admin: "Chapter 6 - First Activity",
    content:
      "The next day, you arrive at the soccer fields with the other campers for the next activity. The camp counselor has everyone stand in a circle and announces, 'There is no need to be alarmed, but our fellow camper, Artie, has gone missing. \n\nAfter the campfire last night, he went back to his bunk and hasn’t been seen since. So for everyone’s safety...today’s activity has been canceled while we go to look for him. You can grab some games from the Rec hall, but please stay in your cabins until you hear it’s safe to leave again.' Do You:",
    choices: [
      {
        text: "Rebel and Go Look for Artie",
        target: 19,
      },
      {
        text: "Go for a Walk Alone to Clear Your Head",
        target: 19,
      },
    ],
  },
  {
    id: 19,
    image: "/images/canoes.png",
    title: "Chapter 6",
    admin: "Chapter 6 || Look for Artie",
    content:
      "You head back to your cabin to grab some water and a blanket and plan out your next moves. You decide to go look by the river where you and Ezra went walking the day before. 'If I don’t find him, at least the sound of the water will help me clear my head,' you think to yourself. After walking alongside the river for a while, you notice a canoe on the shore. 'That wasn’t there yesterday,’ you think to yourself...You keep walking and finally, you see a young man, dripping water from every inch of him and realize...it’s Artie! \n\nYou stare, mouth agape, and shout ‘You’re soaking wet, let me dry you off!' You run over to him and attempt to throw your blanket around him to try to dry him off. As soon as the blanket touches him, it passes right through his non-corporeal form. You stare at him and back down at the ground at the blanket that passed right through his being. 'This can’t be happening…' you think to yourself, as you run over to pick up the blanket and try again. Once more, you frantically place your blanket on Artie’s shoulder as it drops to the ground. \n\nArtie turns to you confused, looking down at his hands. Shaking his head in confusion…. 'W-what's going on…' he stammers. 'Stay here, I will run for help!' you shout back as you throw your things down to run and find the nearest camp counselor. You take off running as someone grabs your hand to hold you back. It’s Ezra. 'Stop - you can’t go anywhere'.",
    choices: [
      {
        text: "Fight Him",
        target: 20,
      },
      {
        text: "Try to Run/Break Free",
        target: 21,
      },
    ],
  },
  {
    id: 20,
    image: "/images/canoes.png",
    title: "Chapter 6",
    admin: "Chapter 6 || Fight",
    content:
      "You fall to the ground and start wrestling with Ezra. You have to break free and tell the camp counselors what’s going on. You and Ezra wrestle for a few moments until everything goes black. ... When you come to, your hands are tied behind you, you are in a canoe that is rapidly filling with water. \n\nEzra is pushing the canoe under water with the paddle and slowly grins as he slowly submerges your body under the water. You take your last breath as your head falls under the water line and into the darkness forever.",
    choices: [
      {
        text: "Game Over",
        target: 0,
        // ******************* Need to add a target for ending Page? *******************
      },
    ],
  },
  {
    id: 21,
    image: "/images/canoes.png",
    title: "Chapter 6",
    admin: "Chapter 6 || Run/Break Free",
    content:
      "You turn around and try to pry your hand free from Ezra’s grip, but he’s too strong. 'LET ME EXPLAIN!! IT’S NOT WHAT YOU THINK!' Ezra proclaims, as you hurriedly yank yourself away from him - still trying to escape his tightening grip. 'I’M A MEDIUM - THIS PLACE IS HAUNTED… JUST STOP STRUGGLING AND LET ME EXPLAIN!!' He yells. 'Fine.' you say stubbornly, but you stay over there. You grab the nearest stick and point it at Ezra, as if to protect yourself. \n\nEzra goes on to explain, 'I’m a medium… and this camp is haunted. I know that sounds crazy, and you have every right to not believe me… but it’s true,’ he continues. ‘The problem is, whoever is my friend, ends up seeing the dead too. It’s a blessing and a curse. I found Artie, out on the dock, shaking, soaking wet, and scared. Once you’ve died in a gruesome way, you have no memories relating to your death. It’s my job to help them pass over. I tried to help him but he was too shaken up to speak. That’s when I heard you coming down the path - so I hid.'",
    choices: [
      {
        text: "Run Away",
        target: 22,
      },
    ],
  },
  {
    id: 22,
    image: "/images/cabin.png",
    title: "Chapter 7",
    admin: "Chapter 7 - Back at the Cabin",
    content:
      "You get back to your cabin, heart pounding out of your chest. You lay down on your bunk to try to wrap your mind around everything Ezra told you. 'This can’t be real… Can it?'.... as you drift off to sleep",
    choices: [
      {
        text: "Continue...",
        target: 23,
      },
    ],
  },
  {
    id: 23,
    image: "/images/drown.png",
    title: "Chapter 8",
    admin: "Chapter 8 - The Dream",
    content:
      "Waking in a haze you look around your cabin and it's filled with fog. You abruptly sit up in bed and rush to the door. As you reach for the handle you look down and you notice water spilling into the cabin. You open the door and you are standing at the lake. You see hundreds of empty canoes floating in the misty morning. \n\nAs you walk closer you begin to sink lower and until your eyes are level with the surface of the lake. You reach for the closest canoe and it flips over. You try to throw your body over it, and you feel tugging on your feet and you slowly sink under the surface. You gasp for air and water fills your lungs. You fade into darkness...",
    choices: [
      {
        text: "Wake up",
        target: 24,
      },
    ],
  },
  {
    id: 24,
    image: "/images/cabin.png",
    title: "Chapter 9",
    admin: "Chapter 9",
    content:
      "Waking up startled in your cabin, you sit up abruptly in bed, gasping, choking for air. Was that actually Artie? Was Ezra telling me the truth? You sit up and groggily wipe your eyes and see Artie and Ezra on the other side of the cabin playing chess. \n\nYou walk over to talk to Artie and Ezra. 'I need answers. Now' you demand, throwing the chess board to the floor. 'NONE of this makes any sense, ghosts aren’t real. You can’t just tell me someone’s a GHOST and expect me to be okay with it and carry on like nothing happened.' ",
    choices: [
      {
        text: "How Did You Become a Medium?",
        target: 25,
      },
      {
        text: "Continue on",
        target: 30,
      },
    ],
  },
  {
    id: 25,
    image: "/images/cabin.png",
    title: "Chapter 9",
    admin: "Chapter 9 || How did you become a medium?",
    content:
      "'Everyone is born with psychic abilities. We are familiar with our five senses: touch, taste, sight, hearing, smell. These all play a role in our psychic abilities, along with our sixth sense - intuition. These abilities can become stronger with practice, conditioning them like our muscles.'",
    choices: [
      {
        text: "Is It Hereditary?",
        target: 26,
      },
      {
        text: "Continue on",
        target: 30,
      },
    ],
  },
  {
    id: 26,
    image: "/images/cabin.png",
    title: "Chapter 9",
    admin: "Chapter 9 || Is It Hereditary?",
    content:
      "'Mediumship is often passed down through family trees, but it can sometimes manifest in someone who has experienced the loss of a loved one.'",
    choices: [
      {
        text: "Do I Stay a Medium Even If We’re Apart?",
        target: 27,
      },
      {
        text: "Continue on",
        target: 30,
      },
    ],
  },
  {
    id: 27,
    image: "/images/cabin.png",
    title: "Chapter 9",
    admin: "Chapter 9 || Do I Stay a Medium Even If We’re Apart?",
    content: "'Sure.'",
    choices: [
      {
        text: "How Did You Find Out You Were a Medium?",
        target: 28,
      },
      {
        text: "Continue on",
        target: 30,
      },
    ],
  },
  {
    id: 28,
    image: "/images/cabin.png",
    title: "Chapter 9",
    admin: "Chapter 9 || How Did You Find Out You Were a Medium?",
    content:
      "'Many mediums report contact with spirits starting when they were children. The mind of a child is more open to the energies of the universe and remnants of past lives may still linger. This allows spirits to bridge the veil and make contact.'",
    choices: [
      {
        text: "Can We Help Artie Figure Out Who Killed Him?",
        target: 29,
      },
      {
        text: "Continue on",
        target: 30,
      },
    ],
  },
  {
    id: 29,
    image: "/images/cabin.png",
    title: "Chapter 9",
    admin: "Chapter 9 || Can We Help Artie Figure Out Who Killed Him?",
    content:
      "'Mediums are not clairvoyants. Artie would have to know who killed him and communicate that with us.'",
    choices: [
      {
        text: "Continue on",
        target: 30,
      },
    ],
  },
  {
    id: 30,
    image: "/images/cabin.png",
    title: "Chapter 9",
    admin: "Chapter 9 || Ezra Shrugs",
    content:
      "Ezra stands up and shrugs, at a loss for words. He walks towards you and reaches for your hand as you dash out the cabin doors to head to the soccer field for the next activity.",
    choices: [
      {
        text: "Continue on",
        target: 31,
      },
    ],
  },
  {
    id: 31,
    image: "/images/field.png",
    title: "Chapter 10",
    admin: "Chapter 10 - Next Activity",
    content:
      "As you approach the soccer field, you notice a bunch of campers in separate groups, chatting with one another. Camp Counselor Heather makes an announcement over the megaphone: 'ATTENTION CAMPERS - PLEASE CIRCLE UP AND TAKE A SEAT, WE HAVE AN IMPORTANT ANNOUNCEMENT TO MAKE…' \n\nOnce the commotion subsides and everyone is seated, the head of camp, Barb starts to speak, hesitantly… 'Campers, we don’t want to alarm you, but another person has gone missing this week. Camp Counselor Dalonte has not been seen since last night’s game of Capture the Flag. Because of this, we think it would be best for all of you to go home early. We know it’s not ideal, but we don’t want to risk losing any more of you. We’ve contacted your families to come pick you up.’\n\nShe continues… ‘Back in 1974, when I was a camper, just like you, something like this began happening  where other campers went missing. First, one camper disappeared, then the numbers exponentially grew…until 13 campers and counselors seemed to vanish out of thin air. \n\nThey didn’t send us home, so we were stuck in our cabins every day, fearing we were next and  just praying we would be sent home. Police were called. Investigations were made. Pastors, rabbis, and any clergy folk  would try and cleanse the grounds. They all said the problem would never occur again after their “work,” so the camp remained open and the case of the missing persons became a mystery of the decade. I’ve gotten off track and I am not trying to scare you.\n\nYou all have 2 hours - head back to your cabins, pack up your things and meet at the main circle to load the buses.' The chatter and fear was palpable as everyone reluctantly stood up from their spots and quickly made their way back to their cabins to pack up their things.",
    choices: [
      {
        text: "Head Back to Cabin",
        target: 32,
      },
    ],
  },
  {
    id: 32,
    image: "/images/chess.png",
    title: "Chapter 10",
    admin: "Chapter 10 - At Cabin",
    content:
      "Once you get back to your cabin, you notice the chessboard is cleaned up, the cabin is tidy, and Artie and Ezra are nowhere to be found. 'Dammit,' you think to yourself 'now is not the time to go missing, Ezra'.",
    choices: [
      {
        text: "Search for Ezra and Artie",
        target: 33,
      },
    ],
  },
  {
    id: 33,
    image: "/images/cabin.png",
    title: "Chapter 10",
    admin: "Chapter 10 - The Search",
    content:
      "You head for the door to start looking for Artie and Ezra and stop. 'No, you know what - Ezra can deal with this on his own. I need to stay safe' You begin grabbing your things from the cabin and pack them into your duffle bag. From afar, you hear a horn blaring.",
    choices: [
      {
        text: "Go Investigate the Sound",
        target: 34,
      },
    ],
  },
  {
    id: 34,
    image: "/images/bus.png",
    title: "Chapter 11",
    admin: "Chapter 11 - The Bus",
    content:
      "As you follow the sound of the horn, you realize it’s coming from the bus at the main drop off area. You walk up to the bus and see that it’s running, but the driver doesn’t seem to be in it. The doors are wide open and there is a brick sitting on the steering wheel - firing the horn.",
    choices: [
      {
        text: "Go in the Bus",
        target: 35,
      },
    ],
  },
  {
    id: 35,
    image: "/images/insidebus.png",
    title: "Chapter 11",
    admin: "Chapter 11 || On The Bus",
    content:
      "You step inside the hauntingly empty bus. You crouch down to see if anyone is hiding under the seats. As you stand up and walk to the back of the bus you see bags packed on each of the seats and you feel a cold breeze run up your spine so you rush to the wheel to take the brick off the horn. \n\n'I didn’t think it’d be this easy'... you hear a familiar voice say from behind you.  You turn to find a familiar face standing in front of you and you brokenly say, 'EZR-' as you are struck over the head as you black out, you hear two voices giggling. ",
    choices: [
      {
        text: "Continue",
        target: 36,
      },
    ],
  },
  {
    id: 36,
    image: "/images/final_canoe.png",
    title: "Chapter 12",
    admin: "Chapter 12 - The final chapter",
    content:
      "You wake up, in a daze. Your head is pounding. You try to reach up to tend the wound on your forehead - blood is gushing from your forehead into your eye - as you try to wipe it away, you realize your hands are tied and there is no way for you to stop the bleeding. You look around and find yourself in a canoe floating on the Camp lake. You begin to breathe heavily as you try to squirm free. From the shore you see two hauntingly familiar figures that you identify as Artie and Ezra. \n\nEzra approaches the dock your canoe is tied to, slowly, kneels down, and looks you into the eyes. 'Hello. It’s time for you to make a decision. Whatever you choose will decide the fate of you and the other campers…'\n\nYou shake your head, petrified. ",
    choices: [
      {
        text: "'Why are you doing this, Ezra?' ",
        target: 37,
      },
    ],
  },
  {
    id: 37,
    image: "/images/final_canoe.png",
    title: "Chapter 12",
    admin: "Chapter 12 || Dialogue",
    content:
      "There’s no time for questions. Choose. Save yourself, or save the innocent lives of the other campers",
    choices: [
      {
        text: "...how?",
        target: 38,
      },
    ],
  },
  {
    id: 38,
    image: "/images/final_canoe.png",
    title: "Chapter 12",
    admin: "Chapter 12 || Dialogue",
    content:
      "The choice is easy, really. Doesn’t everyone wish for freedom? Don’t you crave control? Say you'll join me, take the lives of the other campers. And we will leave here tonight and be free of these wretched people. Or, I can free you from your pain and in your sacrifice, I will free the others.  Don’t you think it’s time people got what was coming to them? Your choice...'  ",
    choices: [
      {
        text: "Die",
        target: 40,
      },
      {
        text: "Kill Campers",
        target: 39,
      },
    ],
  },
  {
    id: 39,
    image: "/images/drown.png",
    title: "Chapter 13",
    admin: "Chapter 13 || Kill Campers",
    content:
      "One by one, you and Ezra take turns pushing each canoe out to the middle of the lake. Before you do, you place a few heavy stones in each one and make a small hole in the middle so each slowly sinks into eternity. The shrieks from each camper can be heard by only the helpless wildlife nearby as they gurgle and drown. \n\nYou see their souls leave their bodies…Are you finally happy being noticed? Is this what you craved all along? You are a monster and as you look at the blood on your hands, Ezra reaches his hand out to you and you both walk into the forest never to be seen again. ",
    choices: [
      {
        text: "Play Again",
        target: 0,
      },
    ],
  },
  {
    id: 40,
    image: "/images/drown.png",
    title: "Chapter 13",
    admin: "Chapter 13 || Die",
    content:
      "'Please Ezra! It doesn’t have to be this way!!' You plead, as Ezra slowly pulls the rope on your canoe that reveals a large hole. Your canoe starts to quickly fill with water. Ezra takes a paddle in his hands and slowly helps push your canoe down under the water as you sit - completely unable to break free from your ties. \n\nYou take one last breath as your eyes are surface level with the lake. The last thing you see is Ezra’s face - completely emotionless, watching you as everything goes black...",
    choices: [
      {
        text: "Play Again",
        target: 0,
      },
    ],
  },
  {
    id: 41,
    image: "/images/rocks.png",
    title: "Death",
    admin: "Death",
    content: "You are smashed over the head with a large rock. Game over",
    choices: [
      {
        text: "Start Over",
        target: 0,
      },
    ],
  },
];

export default plot;
