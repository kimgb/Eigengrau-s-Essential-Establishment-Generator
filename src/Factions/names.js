setup.nameFaction = function (town, type) {
  // var generalNoun = ['Arcana', 'Beyond', 'Chalice', 'Chamber', 'Cloud', 'Cowl', 'Crown', 'Crystal', 'Darkness', 'Dawn', 'Day', 'Doctrine', 'Dominion', 'Energy', 'Enlightenment', 'Eye', 'Faith', 'Fane', 'Fire', 'Flame', 'Fountain', 'Gate', 'Glyph', 'Grail', 'Hand', 'Harmony', 'Heart', 'Helix', 'Influence', 'Insight', 'Key', 'Knowledge', 'Learning', 'Light', 'Lore', 'Mantle', 'Mastery', 'Mind', 'Moon', 'Mystery', 'Night', 'Orb', 'Path', 'Pentacle', 'Pillar', 'Pool', 'Portal', 'Power', 'Pyramid', 'Question', 'Radiance', 'Rainbow', 'Revelation', 'Robe', 'Rod', 'Sapience', 'Sceptre', 'Scroll', 'Secret', 'Shadow', 'Shrine', 'Sigil', 'Sign', 'Sky', 'Space', 'Sphere', 'Spring', 'Staff', 'Star', 'Stone', 'Sun', 'Symbol', 'Teaching', 'Temple', 'Throne', 'Time', 'Truth', 'Twilight', 'Veil', 'Verity', 'Void', 'Wand', 'Way', 'Wisdom', 'Word', 'World', 'Anchor', 'Bell', 'Cask', 'Castle', 'Crown', 'Cup', 'Harp', 'Oak', 'Plough', 'Rose', 'Sun', 'Vine', 'Ash Tree', 'Oak Tree', 'Broom', 'Bush', 'Hazel', 'Holly', 'Trefoil', 'Arrow', 'Axe', 'Bow', 'Crossbow', 'Dagger', 'Flail', 'Halberd', 'Hammer', 'Javelin', 'Morning Star', 'Boot', 'Cloak', 'Gauntlet', 'Glove', 'Helm', 'Mask', 'Ring', 'Robe', 'Star', 'Banner', 'Beacon', 'Daggers', 'Fist', 'Fists', 'Mace', 'Maces', 'Pike', 'Pikes', 'Shield', 'Shields', 'Angel', 'Basilisk', 'Demon', 'Devil', 'Griffin', 'Dragon', 'Hourglass', 'Scales', 'Mask', 'Blade', 'Sword', 'Swords', 'Hunt', 'Kill', 'Search', 'Coin', 'Copper Penny', 'Silver Dime', 'Gold Sovereign', 'Platinum Emperor'].seededrandom()
  // var generalAdjective = ['Ancient', 'Arcane', 'Astral', 'Blinding', 'Bright', 'Brilliant', 'Burning', 'Bygone', 'Cardinal', 'Celestial', 'Cloudy', 'Concealed', 'Cosmic', 'Dark', 'Deep', 'Dexter', 'Difficult', 'Dusky', 'Effulgent', 'Elder', 'Elemental', 'Esoteric', 'Eternal', 'Ethereal', 'Existential', 'Forgotten', 'Gloomy', 'Glorious', 'Glowing', 'Gnostic', 'Hidden', 'Ineffable', 'Inner', 'Lost', 'Luminous', 'Lunar', 'Magical', 'Maieutical', 'Mysterious', 'Mystic', 'Occult', 'Penumbral', 'Profound', 'Pure', 'Quintessential', 'Radiant', 'Recondite', 'Resplendent', 'Revealed', 'Sacred', 'Secret', 'Shadowed', 'Shining', 'Sidereal', 'Singing', 'Sinister', 'Solemn', 'Spiral', 'Spiritual', 'Starry', 'Solar', 'Sublime', 'Supernal', 'Timeless', 'Transcendent', 'True', 'Veiled', 'Zetetic', 'Amber', 'Amethyst', 'Aquamarine', 'Azure', 'Beryl', 'Black', 'Blue', 'Brazen', 'Bronze', 'Brown', 'Carmine', 'Cerulean', 'Copper', 'Crimson', 'Crystal', 'Ebony', 'Emerald', 'Golden', 'Green', 'Grey', 'Incarnadine', 'Indigo', 'Ivory', 'Jade', 'Jet', 'Malachite', 'Orange', 'Pearly', 'Purple', 'Rainbow', 'Red', 'Rosy', 'Ruby', 'Russet', 'Sable', 'Sapphire', 'Scarlet', 'Silver', 'Topaz', 'Turquoise', 'Umber', 'Vermilion', 'Violaceous', 'Violet', 'Viridian', 'White', 'Yellow', 'Angry', 'Bad', 'Barking', 'Big', 'Bitten', 'Blinding', 'Bonny', 'Brimming', 'Broken', 'Buxom', 'Capering', 'Cloven', 'Cosy', 'Crazy', 'Crooked', 'Crossed', 'Crying', 'Dancing', 'Dark', 'Dour', 'Drinking', 'Drunken', 'Falling', 'Fat', 'Feasting', 'Fiery', 'Fighting', 'Fishing', 'Flying', 'The Most Holy', 'The Most Noble', 'Impartial', 'Decisive', 'Dependable', 'Final', 'Faithful', 'Supreme', 'Utmost', 'Adamantine', 'Discerning', 'Flawless', 'Formidable', 'Valiant', 'Wonderful'].seededrandom()
  const factionData = setup.factionData.type[type]

  const name = [
    `The ${factionData.group.seededrandom()} of ${factionData.adjective.seededrandom()} ${factionData.main.seededrandom()}`,
    `The ${factionData.group.seededrandom()} of ${factionData.main.seededrandom()}`,
    `The ${factionData.adjective.seededrandom()} ${factionData.group.seededrandom()}`,
    `The ${factionData.main.seededrandom()} of ${town}`,
    `The ${town} ${factionData.main.seededrandom()}`,
    factionData.unique.seededrandom()
  ].seededrandom()
  console.log(`${name} loaded`)
  return name
}
