setup.createFriends = (town, npc) => {
  console.groupCollapsed(`${npc.name} is making some friends...`)
  let friendsNumber = Math.round((npc.roll.gregariousness / 3) + 1)
  if (setup.townData.professions[npc.profession].type === 'business') friendsNumber += 2
  const friendsTypes = {
    'drinking buddy': {
      relationship: 'drinking buddy',
      base: {
        gender: npc.gender,
        ageStage: npc.ageStage
      }
    },
    'old flame': {
      relationship: 'old flame',
      base: {
        gender: npc.partnerGenderProbability(npc),
        ageStage: npc.ageStage
      }
    },
    'ex': {
      relationship: 'ex',
      base: {
        gender: npc.partnerGenderProbability(npc),
        ageStage: npc.ageStage
      }
    },
    'secret crush': {
      relationship: 'secret crush',
      reciprocal: ['friend', 'friend', 'friend', 'just a friend', 'creepy stalker', 'secret crush'].random(),
      base: {
        gender: npc.partnerGenderProbability(npc),
        ageStage: npc.ageStage,
        socialClass: npc.socialClass
      }
    },
    'mentor': {
      relationship: 'mentor',
      reciprocal: 'student',
      base: {
        profession: npc.profession,
        ageStage: 'settled adult'
      }
    },
    'neighbour': {
      relationship: 'neighbour',
      base: {
        socialClass: npc.socialClass
      }
    },
    'dealer': {
      relationship: 'dealer',
      reciprocal: 'drug buyer',
      probability: 1,
      exclusions (town, npc) { if (town.roll.sin < 10) return false },
      base: {
        socialClass: npc.socialClass,
        profession: 'drug dealer'
      }
    },
    'friendly acquaintance': {
      relationship: 'acquaintance',
      base: {
        socialClass: npc.socialClass
      }
    },
    'pastor': {
      relationship: 'pastor',
      reciprocal: 'goes to church',
      probability: 2,
      exclusions (town, npc) { if (town.roll.religiosity < 20 || npc.roll.religiosity < 20 || npc.profession === 'pastor') return false },
      base: {
        socialClass: npc.socialClass,
        profession: 'pastor'
      }
    },
    'customer': {
      relationship: 'customer',
      reciprocal: npc.profession,
      probability: 20,
      exclusions (town, npc) { if (setup.townData.professions[npc.profession].type !== 'business') return false },
      base: {
        canBeCustom: true,
        isShallow: true
      }
    }
  }

  if (setup.townData.professions[npc.profession].type === 'profession' && setup.townData.professions[npc.profession].sector === 'arts') {
    const patron = {
      relationship: 'patron',
      reciprocal: npc.profession,
      probability: 20,
      base: {
        canBeCustom: true,
        socialClass: 'nobility',
        isShallow: true
      }
    }
    Object.assign(friendsTypes, patron)
  }

  if (setup.townData.professions[npc.profession].relationships) {
    console.log('Merging relationship sources! Before:')
    console.log(friendsTypes)
    const moreRelationships = setup.townData.professions[npc.profession].relationships(town, npc)
    Object.assign(friendsTypes, moreRelationships)
    console.log('After:')
    console.log(friendsTypes)
  }

  const createNewFriend = (town, npc) => {
    console.log('Creating a new friend!')
    const friendObj = setup.weightedRandomFetcher(town, friendsTypes, npc, null, 'object')
    const friend = setup.createNPC(town, friendObj.base)
    setup.createRelationship(town, npc, friend, friendObj.relationship, friendObj.reciprocal || friendObj.relationship)
  }

  for (let step = 0; step < friendsNumber; step++) {
    let friend
    if (random(100) < 50) {
      console.log('Finding an already existing NPC for a friend!')
      friend = Object.values(State.variables.npcs).find(({ socialClass, relationships }) => {
        return socialClass === npc.socialClass && !relationships[npc.key]
      })
      setup.createRelationship(town, npc, friend, 'friend', 'friend')
      if (friend === undefined) {
        console.log(`Nobody was in the same caste as ${npc.name}`)
        createNewFriend(town, npc)
      }
    } else {
      createNewFriend(town, npc)
    }
  }
  console.groupEnd()
}
