const ScorestreakData = [
  {
    name: "UAV",
    icon: "https://vignette.wikia.nocookie.net/callofduty/images/5/56/UAV_Menu_Icon_BOII.png/revision/latest/scale-to-width-down/150?cb=20121209082834",
    desc: "Shows enemies on the mini-map. Adds 10 points to the player's scorestreak for each kill their team gets while it is active (UAV Assists). Can be shot down.",
    score: "425"
  },
  {
    name: "RC-XD",
    icon: "https://vignette.wikia.nocookie.net/callofduty/images/4/4d/RC-XD_Menu_Icon_BOII.png/revision/latest/scale-to-width-down/150?cb=20121209082722",
    desc: "Remote-controlled car strapped with explosives that the player can boost and explode at will. Adds 25 points per kill (RC-XD Kill). Can be destroyed by enemy players.",
    score: "450"
  },
  {
    name: "Hunter Killer Drone",
    icon: "https://vignette.wikia.nocookie.net/callofduty/images/3/31/Hunter_Killer_Menu_Icon_BOII.png/revision/latest/scale-to-width-down/150?cb=20121209082905",
    desc: "Airborne drone that seeks out and destroys a nearby target.  Adds 25 points per kill. Will also take out enemy scorestreaks (only UAVs, counter UAVs and care package couriers) for the appropriate amount of points if thrown in the right general direction.",
    score: "525"
  },
  {
    name: "Care Package",
    icon: "https://vignette.wikia.nocookie.net/callofduty/images/0/0c/Care_Package_Menu_Icon_BOII.png/revision/latest/scale-to-width-down/150?cb=20121209082932",
    desc: "Air-drop a random Scorestreak reward. Ability to get another random scorestreak if the player discards the first scorestreak with the Engineer perk. Also available to hack with 'Black Hat'",
    score: "550"
  },
  {
    name: "Counter UAV",
    icon: "https://vignette.wikia.nocookie.net/callofduty/images/b/bd/Counter-UAV_Menu_Icon_BOII.png/revision/latest/scale-to-width-down/150?cb=20121209083006",
    desc: "Temporarily disables enemy radar. Adds 10 points to the player's scorestreak for each kill their team gets while it is active (Counter UAV Assists). Can also be shot down.",
    score: "600"
  },
  {
    name: "Guardian",
    icon: "https://vignette.wikia.nocookie.net/callofduty/images/9/9c/Guardian_Menu_Icon_BOII.png/revision/latest?cb=20121209083145",
    desc: "Projects a microwave field which stuns, impairs, and slowly damages enemies. As the Guardian damages enemies, the player will earn 10 points per two damage increments (Guardian Supress). Adds an additional 25 points to the player's scorestreak per kill (Guardian Kill).",
    score: "650"
  },
  {
    name: "Hellstorm Missile",
    icon: "https://vignette.wikia.nocookie.net/callofduty/images/0/05/Hellstorm_Missile_Menu_Icon_BOII.png/revision/latest/scale-to-width-down/150?cb=20121209083231",
    desc: "An air-to-surface missile which can be scattered into a cluster bomb while falling. Adds 25 points to the player's scorestreak per kill (Hellstorm Missile Kill). The missiles can be shot down by the enemy (only if the cluster is not yet deployed).",
    score: "700"
  },
  {
    name: "Lightening Strike",
    icon: "https://vignette.wikia.nocookie.net/callofduty/images/5/5a/Lightning_Strike_menu_icon_BOII.png/revision/latest/scale-to-width-down/150?cb=20121209083239",
    desc: "Launch a coordinated and rapid airstrike on three locations.  Adds 25 points to the player's scorestreak per kill (Lightning Strike Kill). As of 1.4, there is a .9 second delay between call-in and arrival.",
    score: "750"
  },
  {
    name: "Sentry Gun",
    icon: "https://vignette.wikia.nocookie.net/callofduty/images/c/c7/Sentry_Gun_menu_icon_BOII.png/revision/latest/scale-to-width-down/150?cb=20121209081829",
    desc: "An automatic sentry gun which can be remote-controlled or left to kill enemies. Adds 25 points to the player's scorestreak per kill (Sentry Gun Kill).",
    score: "800"
  },
  {
    name: "Death Machine",
    icon: "https://vignette.wikia.nocookie.net/callofduty/images/c/ca/Death_Machine_Menu_Icon_BOII.png/revision/latest/scale-to-width-down/150?cb=20121209083449",
    desc: "A handheld Minigun. Does not go away until all of its 200 ammo has been exhausted. Can be put away and brought out again. Adds 25 points to the player's scorestreak per kill.",
    score: "850"
  },
  {
    name: "War Machine",
    icon: "https://vignette.wikia.nocookie.net/callofduty/images/d/d1/War_Machine_Menu_Icon_BOII.png/revision/latest/scale-to-width-down/150?cb=20161109085349",
    desc: "Grenade launcher with rapid, semi-automatic firing. Does not go away until all its 12 ammo has been exhausted. Adds 25 points to the players scorestreak per kill.",
    score: "900"
  },
  {
    name: "Stealth Helicopter",
    icon: "https://vignette.wikia.nocookie.net/callofduty/images/c/c4/Stealth_Chopper_Menu_Icon_BOII.png/revision/latest/scale-to-width-down/150?cb=20121209083616",
    desc: "Call in a stealth helicopter which does not appear on the enemy's mini-map and is very distracting to enemies trying to take it down. Adds 25 points to the player's scorestreak per kill (Stealth Chopper Kill). Takes two shots to destroy.",
    score: "1100"
  },
  {
    name: "Warthog",
    icon: "https://vignette.wikia.nocookie.net/callofduty/images/1/15/Warthog_Menu_Icon_BOII.png/revision/latest/scale-to-width-down/150?cb=20121209083744",
    desc: "Fast jet aircraft that provides close air support via several strafe runs using its avenger cannon and rocket pods. Adds 25 points to the player's scorestreak per kill (Warthog Kill).",
    score: "1400"
  },
  {
    name: "K9 Unit",
    icon: "https://vignette.wikia.nocookie.net/callofduty/images/c/ce/K9_Unit_Menu_Icon_BOII.png/revision/latest/scale-to-width-down/150?cb=20121209083937",
    desc: "Spawns attack dogs that hunt down the enemy. Dogs will continue to spawn if one is killed. Adds 15 points to the player's scorestreak per kill (K9 Kill). Dogs can be shot.",
    score: "1700"
  },
  {
    name: "Swarm",
    icon: "https://vignette.wikia.nocookie.net/callofduty/images/5/5d/Swarm_Menu_Icon_BOII.png/revision/latest/scale-to-width-down/150?cb=20150307190500",
    desc: "Call in a swarm of lethal Hunter Killer drones that search and destroy enemies as well as enemy aircraft for the appropriate number of score. Adds 15 points to the player's scorestreak per kill (Swarm Kill). Lasts for 45 seconds, can be destroyed with EMP systems",
    score: "1900"
  }
]

export default ScorestreakData
