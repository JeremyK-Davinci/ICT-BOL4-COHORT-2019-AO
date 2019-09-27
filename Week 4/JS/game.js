const textElement = document.getElementById("text")
const optionButtonsElement = document.getElementById("option-Buttons")

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement("button")
      button.innerText = option.text
      button.classList.add("btn")
      button.addEventListener("click", () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
    else  console.log("Forest Adventure")
})
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
    }
    else (console.log("Forest adventure"))
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: "You wake up in the middle of a strange forest and see a jar with a strange light in it. What do you do?",
    options: [
      {
        text: "Take the jar",
        setState: { FairyJar: true },
        nextText: 2
      },
      {
        text: "Leave the jar",
        nextText: 2
      },
      {
        text: "Open the jar",
        nextText: 10
      },
      {
        text: "Break the jar",
        nextText: 11
      }
    ]
  },
  {
    id: 2,
    text: "As you stand you see 2 diffrent paths. Will you go north or south",
    options: [
        {
            text: "Go north",
            nextText: 3
        },
        {
            text: "Go south",
            nextText: 12
        }
    ]
  },
  {
    id: 3,
    text: "You head north and stumble into a town, when you enter a merchant approaches you asking to trade. What do you do?",
    options: [
        {
            text: "Trade the jar for a sword",
            requiredState: (currentState) => currentState.FairyJar,
            setState: { FairyJar: false, sword: true },
            nextText: 4
          },
          {
            text: "Ignore the merchant",
            nextText: 4
          },
          {
              text: "Attempt to rob the merchant",
              nextText: 13
          },
          {
              text: "Run from the merchant yelling stranger danger",
              nextText: 14
          }
    ]
  },
  {
    id: 4,
    text: "You walk on and stumble upon a camp of sleeping ogres, you can try to attack but they will wake up. What will you do?",
    options: [
      {
        text: "Attack",
        nextText: 15
      },
      {
        text: "Sneak past",
        nextText: 5
      }
    ]
  },
  {
    id: 5,
    text: "After a long walk you find a dungeon, there might be some good loot inside. Do you enter?",
    options: [
      {
        text: "Enter",
        nextText: 6
      },
      {
        text: "find something else",
        nextText: 16
      }
    ]
  },
  {
    id: 6,
    text: "When you enter you see a dragon guarding the entrance. Will you attack or sneak past?",
    options: [
      {
        text: "Attack!",
        nextText: 17
      },
      {
        text: "Ninja approach",
        nextText: 7
      }
    ]
  },
  {
    id: 7,
    text: "Crossing the dragon you see a crossing with a sign, 1 path leads to gold and 1 to silver. Which path do you take?",
    options: [
      {
        text: "Gold",
        nextText: 8
      },
      {
        text: "Silver",
        nextText: 18
      }
    ]
  },
  {
    id: 8,
    text: "You enter a room filled with gold, but when you step in a giant skeleton appears. What now?",
    options: [
      {
        text: "Run back",
        nextText: 19
      },
      {
        text: "Attack!",
        requiredState: (currentState) => currentState.sword,
        setState: { sword: false},
        nextText: 20
      },
      {
        text: "Throw some gold at him",
        nextText: 21
      },
      {
        text: "Open the jar in its face",
        requiredState: (currentState) => currentState.FairyJar,
        setState: { FairyJar: false},
        nextText: 9
      }
    ]
  },
  {
    id: 9,
    text: "You open the jar and a blinding light appears. When your vision returns the skeleton is gone and there is a path outside.",
    options: [
      {
        text: "Congratulations you won. Play again?",
        nextText: -1
      }
    ]
  },
  {
    id: 10,
    text: "You open the jar and a blinding light appears. It blinds you before you feel a pearcing pain and die.",
    options: [
      {
        text: "Restart",
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text: "The jar shatters and you are blinded, as the light burns through your body a last breath escapes your mouth before the lights go out.",
    options: [
      {
        text: "Restart",
        nextText: -1
      }
    ]
  },
  {
    id: 12,
    text: "As you wander south, you are blindsided by 2 bears who are evidently quite hungry.",
    options: [
      {
        text: "Restart",
        nextText: -1
      }
    ]
  },
  {
    id: 13,
    text: "You try to rob the merchant with your bare fist. As he pulls out a sword, you realize robbing him without a weapon was a bad move.",
    options: [
      {
        text: "Restart",
        nextText: -1
      }
    ]
  },
  {
    id: 14,
    text: "You run screaming stranger danger as a grown man. The sheriff takes you away to mental hospital.",
    options: [
      {
        text: "Restart",
        nextText: -1
      }
    ]
  },
  {
    id: 15,
    text: "You try to stab 1 of the ogre's, Sadly they weren't all asleep. As you feel a club hit the back of your head, you prepare to be eaten.",
    options: [
      {
        text: "Restart",
        nextText: -1
      }
    ]
  },
  {
    id: 16,
    text: "You walk past to walk something else. After a year of finding nothing you return to see the dungeon has since been raided, you are forced to take a job as a farmer.",
    options: [
      {
        text: "Restart",
        nextText: -1
      }
    ]
  },
  {
    id: 17,
    text: "You run at the dragon screaming attack! The dragon sneezes a ball of fire your way and you burn alive.",
    options: [
      {
        text: "Restart",
        nextText: -1
      }
    ]
  },
  {
    id: 18,
    text: "You decide silver is worth enough. You walk the path and enter the room. Then the door shuts and you feel it will never open again.",
    options: [
      {
        text: "Restart",
        nextText: -1
      }
    ]
  },
  {
    id: 19,
    text: "You try to run back only to see the door has shut. As the skeleton picks you up you wish you weren't so greedy.",
    options: [
      {
        text: "Restart",
        nextText: -1
      }
    ]
  },
  {
    id: 20,
    text: "You attack the skeleton bringing down your sword on his arm, expecting it to shatter. It did shatter, just not the skeletons arm. Never trust a random merchant selling swords for jar's of light.",
    options: [
      {
        text: "Restart",
        nextText: -1
      }
    ]
  },
  {
    id: 21,
    text: "You throw some gold at it's face, it does not seem fazed as it grabs you and crushes you.",
    options: [
      {
        text: "Restart",
        nextText: -1
      }
    ]
  },
]

startGame()