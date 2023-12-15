/// power modifiers for novice powers ...

/* NOTE: 
    The various "epic" power modifiers require the edge "Epic Mastery", 
      found in the SWADE Fantasy Companion, p.36
    They are restricted by the following selector_type ...
      { selector_type: "actor_has_edge", selector_value: "BRSW.EdgeName-Epic-Mastery" }
*/

// TODO ... some way to handle different Areas of Effect using the single button selector ???

/*
  format of power modifier elements ...
    name: "xxxxx", // text for line in damage roll details, currently NOT translated
    button_name: "BRSW.xxxxx", // button text in modal dialog, is translated
    { selector_type: "item_name", selector_value: "xxxxx" }           // "item_name"      is currently NOT translated
    { selector_type: "actor_has_edge", selector_value: "BRSW.xxxxx" } // "actor_has_edge" is translated
    group: "BRSW.xxxxx"

*/

export const POWER_MODIFIERS = [
  // ADDITIONALRECIPIENTS
  // NOTE: rather than have each power with the additional recipients have its own set of buttons, centralise it to this block
  {
    id: "POWERADDITIONALRECIPIENTS1",
    name: "Power",
    button_name: "BRSW.PowerModifiersGenericAdditionalRecipients1",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      {
        or_selector: [
          {
            selector_type: "item_name", selector_value: "Arcane Protection",
          },
          {
            selector_type: "item_name", selector_value: "Boost",
          },
          {
            selector_type: "item_name", selector_value: "Burrow",
          },
          {
            selector_type: "item_name", selector_value: "Darksight",
          },
          {
            selector_type: "item_name", selector_value: "Deflection",
          },
          {
            selector_type: "item_name", selector_value: "DetectConcealArcana",
          },
          {
            selector_type: "item_name", selector_value: "Disguise",
          },
          {
            selector_type: "item_name", selector_value: "Empathy",
          },
          {
            selector_type: "item_name", selector_value: "Environmental Protection",
          },
          {
            selector_type: "item_name", selector_value: "Farsight",
          },
          {
            selector_type: "item_name", selector_value: "Fly",
          },
          {
            selector_type: "item_name", selector_value: "Intangibility",
          },
          {
            selector_type: "item_name", selector_value: "Invisibility",
          },
          {
            selector_type: "item_name", selector_value: "MindLink",
          },
          {
            selector_type: "item_name", selector_value: "PlaneShift",
          },
          {
            selector_type: "item_name", selector_value: "Protection",
          },
          {
            selector_type: "item_name", selector_value: "Puppet",
          },
          {
            selector_type: "item_name", selector_value: "Relief",
          },
          {
            selector_type: "item_name", selector_value: "SlothSpeed",
          },
          {
            selector_type: "item_name", selector_value: "Smite",
          },
          {
            selector_type: "item_name", selector_value: "SpeakLanguages",
          },
          {
            selector_type: "item_name", selector_value: "Teleport",
          },
          {
            selector_type: "item_name", selector_value: "Wall Walker",
          },
          {
            selector_type: "item_name", selector_value: "WarriorsGift",
          }
        ],
      }
    ],
    group: "BRSW.PowerModifiersGenericAdditionalRecipients",
    group_single: true,
  },
  {
    id: "POWERADDITIONALRECIPIENTS2",
    name: "Power",
    button_name: "BRSW.PowerModifiersGenericAdditionalRecipients2",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      {
        or_selector: [
          {
            selector_type: "item_name", selector_value: "Arcane Protection",
          },
          {
            selector_type: "item_name", selector_value: "Boost",
          },
          {
            selector_type: "item_name", selector_value: "Burrow",
          },
          {
            selector_type: "item_name", selector_value: "Darksight",
          },
          {
            selector_type: "item_name", selector_value: "Deflection",
          },
          {
            selector_type: "item_name", selector_value: "DetectConcealArcana",
          },
          {
            selector_type: "item_name", selector_value: "Disguise",
          },
          {
            selector_type: "item_name", selector_value: "Empathy",
          },
          {
            selector_type: "item_name", selector_value: "Environmental Protection",
          },
          {
            selector_type: "item_name", selector_value: "Farsight",
          },
          {
            selector_type: "item_name", selector_value: "Fly",
          },
          {
            selector_type: "item_name", selector_value: "Intangibility",
          },
          {
            selector_type: "item_name", selector_value: "Invisibility",
          },
          {
            selector_type: "item_name", selector_value: "MindLink",
          },
          {
            selector_type: "item_name", selector_value: "PlaneShift",
          },
          {
            selector_type: "item_name", selector_value: "Protection",
          },
          {
            selector_type: "item_name", selector_value: "Puppet",
          },
          {
            selector_type: "item_name", selector_value: "Relief",
          },
          {
            selector_type: "item_name", selector_value: "SlothSpeed",
          },
          {
            selector_type: "item_name", selector_value: "Smite",
          },
          {
            selector_type: "item_name", selector_value: "SpeakLanguages",
          },
          {
            selector_type: "item_name", selector_value: "Teleport",
          },
          {
            selector_type: "item_name", selector_value: "Wall Walker",
          },
          {
            selector_type: "item_name", selector_value: "WarriorsGift",
          }
        ],
      }
    ],
    group: "BRSW.PowerModifiersGenericAdditionalRecipients",
    group_single: true,
  },
  {
    id: "POWERADDITIONALRECIPIENTS3",
    name: "Power",
    button_name: "BRSW.PowerModifiersGenericAdditionalRecipients3",
    shotsUsed: "+3",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      {
        or_selector: [
          {
            selector_type: "item_name", selector_value: "Arcane Protection",
          },
          {
            selector_type: "item_name", selector_value: "Boost",
          },
          {
            selector_type: "item_name", selector_value: "Burrow",
          },
          {
            selector_type: "item_name", selector_value: "Darksight",
          },
          {
            selector_type: "item_name", selector_value: "Deflection",
          },
          {
            selector_type: "item_name", selector_value: "DetectConcealArcana",
          },
          {
            selector_type: "item_name", selector_value: "Disguise",
          },
          {
            selector_type: "item_name", selector_value: "Empathy",
          },
          {
            selector_type: "item_name", selector_value: "Environmental Protection",
          },
          {
            selector_type: "item_name", selector_value: "Farsight",
          },
          {
            selector_type: "item_name", selector_value: "Fly",
          },
          {
            selector_type: "item_name", selector_value: "Intangibility",
          },
          {
            selector_type: "item_name", selector_value: "Invisibility",
          },
          {
            selector_type: "item_name", selector_value: "MindLink",
          },
          {
            selector_type: "item_name", selector_value: "PlaneShift",
          },
          {
            selector_type: "item_name", selector_value: "Protection",
          },
          {
            selector_type: "item_name", selector_value: "Puppet",
          },
          {
            selector_type: "item_name", selector_value: "Relief",
          },
          {
            selector_type: "item_name", selector_value: "SlothSpeed",
          },
          {
            selector_type: "item_name", selector_value: "Smite",
          },
          {
            selector_type: "item_name", selector_value: "SpeakLanguages",
          },
          {
            selector_type: "item_name", selector_value: "Teleport",
          },
          {
            selector_type: "item_name", selector_value: "Wall Walker",
          },
          {
            selector_type: "item_name", selector_value: "WarriorsGift",
          }
        ],
      }
    ],
    group: "BRSW.PowerModifiersGenericAdditionalRecipients",
    group_single: true,
  },
  {
    id: "POWERADDITIONALRECIPIENTS4",
    name: "Power",
    button_name: "BRSW.PowerModifiersGenericAdditionalRecipients4",
    shotsUsed: "+4",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      {
        or_selector: [
          {
            selector_type: "item_name", selector_value: "Arcane Protection",
          },
          {
            selector_type: "item_name", selector_value: "Boost",
          },
          {
            selector_type: "item_name", selector_value: "Burrow",
          },
          {
            selector_type: "item_name", selector_value: "Darksight",
          },
          {
            selector_type: "item_name", selector_value: "Deflection",
          },
          {
            selector_type: "item_name", selector_value: "DetectConcealArcana",
          },
          {
            selector_type: "item_name", selector_value: "Disguise",
          },
          {
            selector_type: "item_name", selector_value: "Empathy",
          },
          {
            selector_type: "item_name", selector_value: "Environmental Protection",
          },
          {
            selector_type: "item_name", selector_value: "Farsight",
          },
          {
            selector_type: "item_name", selector_value: "Fly",
          },
          {
            selector_type: "item_name", selector_value: "Intangibility",
          },
          {
            selector_type: "item_name", selector_value: "Invisibility",
          },
          {
            selector_type: "item_name", selector_value: "MindLink",
          },
          {
            selector_type: "item_name", selector_value: "PlaneShift",
          },
          {
            selector_type: "item_name", selector_value: "Protection",
          },
          {
            selector_type: "item_name", selector_value: "Puppet",
          },
          {
            selector_type: "item_name", selector_value: "Relief",
          },
          {
            selector_type: "item_name", selector_value: "SlothSpeed",
          },
          {
            selector_type: "item_name", selector_value: "Smite",
          },
          {
            selector_type: "item_name", selector_value: "SpeakLanguages",
          },
          {
            selector_type: "item_name", selector_value: "Teleport",
          },
          {
            selector_type: "item_name", selector_value: "Wall Walker",
          },
          {
            selector_type: "item_name", selector_value: "WarriorsGift",
          }
        ],
      }
    ],
    group: "BRSW.PowerModifiersGenericAdditionalRecipients",
    group_single: true,
  },
  {
    id: "POWERADDITIONALRECIPIENTS5",
    name: "Power",
    button_name: "BRSW.PowerModifiersGenericAdditionalRecipients5",
    shotsUsed: "+5",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      {
        or_selector: [
          {
            selector_type: "item_name", selector_value: "Arcane Protection",
          },
          {
            selector_type: "item_name", selector_value: "Boost",
          },
          {
            selector_type: "item_name", selector_value: "Burrow",
          },
          {
            selector_type: "item_name", selector_value: "Darksight",
          },
          {
            selector_type: "item_name", selector_value: "Deflection",
          },
          {
            selector_type: "item_name", selector_value: "DetectConcealArcana",
          },
          {
            selector_type: "item_name", selector_value: "Disguise",
          },
          {
            selector_type: "item_name", selector_value: "Empathy",
          },
          {
            selector_type: "item_name", selector_value: "Environmental Protection",
          },
          {
            selector_type: "item_name", selector_value: "Farsight",
          },
          {
            selector_type: "item_name", selector_value: "Fly",
          },
          {
            selector_type: "item_name", selector_value: "Intangibility",
          },
          {
            selector_type: "item_name", selector_value: "Invisibility",
          },
          {
            selector_type: "item_name", selector_value: "MindLink",
          },
          {
            selector_type: "item_name", selector_value: "PlaneShift",
          },
          {
            selector_type: "item_name", selector_value: "Protection",
          },
          {
            selector_type: "item_name", selector_value: "Puppet",
          },
          {
            selector_type: "item_name", selector_value: "Relief",
          },
          {
            selector_type: "item_name", selector_value: "SlothSpeed",
          },
          {
            selector_type: "item_name", selector_value: "Smite",
          },
          {
            selector_type: "item_name", selector_value: "SpeakLanguages",
          },
          {
            selector_type: "item_name", selector_value: "Teleport",
          },
          {
            selector_type: "item_name", selector_value: "Wall Walker",
          },
          {
            selector_type: "item_name", selector_value: "WarriorsGift",
          }
        ],
      }
    ],
    group: "BRSW.PowerModifiersGenericAdditionalRecipients",
    group_single: true,
  },

  // ARCANE PROTECTION
  // plus Additional Recipients, which is handled by the generic clause above
  {
    id: "POWERARCANEPROTECTIONGREATER",
    name: "Greater Arcane Protection",
    button_name: "BRSW.PowerModifiersArcaneProtectionGreater",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Arcane Protection" },
      { selector_type: "actor_has_edge", selector_value: "BRSW.EdgeName-Epic-Mastery" }
    ],
    group: "BRSW.PowerModifiersArcaneProtection"
  },

  // BANISH (V)

  // BARRIER (S)
  {
    id: "POWERBARRIERDAMAGEIMMATERIAL",
    name: "Damage (2d4) (Immaterial)",
    button_name: "BRSW.PowerModifiersBarrierDamageImmaterial",
    shotsUsed: "0",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Barrier" },
    ],
    group: "BRSW.PowerModifiersBarrier"
  },
  {
    id: "POWERBARRIERDAMAGE",
    name: "Damage (2d4)",
    button_name: "BRSW.PowerModifiersBarrierDamage",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Barrier" },
    ],
    group: "BRSW.PowerModifiersBarrier"
  },
  {
    id: "POWERBARRIERDEADLYIMMATERIAL",
    name: "☆ Deadly (2d6) (Immaterial)",
    button_name: "BRSW.PowerModifiersBarrierDeadlyImmaterial",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Barrier" },
      { selector_type: "actor_has_edge", selector_value: "BRSW.EdgeName-Epic-Mastery" }
    ],
    group: "BRSW.PowerModifiersBarrier"
  },
  {
    id: "POWERBARRIERDEADLY",
    name: "☆ Deadly (2d6)",
    button_name: "BRSW.PowerModifiersBarrierDeadly",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Barrier" },
      { selector_type: "actor_has_edge", selector_value: "BRSW.EdgeName-Epic-Mastery" }
    ],
    group: "BRSW.PowerModifiersBarrier"
  },
  {
    id: "POWERBARRIERHARDENED",
    name: "Hardened",
    button_name: "BRSW.PowerModifiersBarrierHardened",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Barrier" },
    ],
    group: "BRSW.PowerModifiersBarrier"
  },
  {
    id: "POWERBARRIERIMMATERIAL",
    name: "Immaterial",
    button_name: "BRSW.PowerModifiersBarrierImmaterial",
    shotsUsed: "0",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Barrier" },
    ],
    group: "BRSW.PowerModifiersBarrier"
  },
  {
    id: "POWERBARRIERSHAPED",
    name: "Shaped",
    button_name: "BRSW.PowerModifiersBarrierShaped",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Barrier" },
    ],
    group: "BRSW.PowerModifiersBarrier"
  },
  {
    id: "POWERBARRIERSIZE",
    name: "Size",
    button_name: "BRSW.PowerModifiersBarrierSize",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Barrier" },
    ],
    group: "BRSW.PowerModifiersBarrier"
  },

  // BEAST FRIEND
  {
    id: "POWERBEASTFRIENDMODBESTIARIUM",
    name: "☆ Beastarium",
    button_name: "BRSW.PowerModifiersBeastFriendBeastarium",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Beast Friend" },
      { selector_type: "actor_has_edge", selector_value: "BRSW.EdgeName-Epic-Mastery" }
    ],
    group: "BRSW.PowerModifiersBeastFriend"
  },
  {
    id: "POWERBEASTFRIENDMODDURATION",
    name: "Duration (+1)",
    button_name: "Duration (+1)",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Beast Friend" }
    ],
    group: "BRSW.PowerModifiersBeastFriend"
  },
  {
    id: "POWERBEASTFRIENDMODMINDRIDER",
    name: "Mind Rider (+1)",
    button_name: "Mind Rider (+1)",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Beast Friend" }
    ],
    group: "BRSW.PowerModifiersBeastFriend"
  },

  // BLAST (S)
  {
    id: "POWERBLASTMOD1DAMAGE",
    name: "Damage (+2d6)",
    button_name: "BRSW.PowerModifiersBlastDamage",
    shotsUsed: "+2",
    dmgMod: "+d6x",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Blast" }
    ],
    group: "BRSW.PowerModifiersBlast"
  },
  {
    id: "POWERBLASTMOD3GREATERBURST",
    name: "Greater Blast (+2d6)",
    button_name: "BRSW.PowerModifiersBlastGreaterBlast",
    shotsUsed: "+4",
    dmgMod: "+2d6x",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Blast" },
      { selector_type: "actor_has_edge", selector_value: "BRSW.EdgeName-Epic-Mastery" }
    ],
    group: "BRSW.PowerModifiersBlast"
  },
  {
    id: "POWERBLASTAREAEFFECTS1SMALL",
    name: "Small (SBT)",
    button_name: "BRSW.PowerModifiersBlastAreaEffectSBT",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Blast" }
    ],
    group: "BRSW.PowerModifiersBlast"
  },
  {
    id: "POWERBLASTAREAEFFECTS2MEDIUM",
    name: "Medium (MBT)",
    button_name: "BRSW.PowerModifiersBlastAreaEffectMBT",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Blast" }
    ],
    group: "BRSW.PowerModifiersBlast"
  },
  {
    id: "POWERBLASTAREAEFFECTS3LARGE",
    name: "Large (LBT)",
    button_name: "BRSW.PowerModifiersBlastAreaEffectLBT",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Blast" }
    ],
    group: "BRSW.PowerModifiersBlast"
  },

  // BLESSING (S)

  // BLIND
  {
    id: "POWERBLINDMOD3STRONG",
    name: "Strong",
    button_name: "BRSW.PowerModifiersBlindStrong",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Blind" }
    ],
    group: "BRSW.PowerModifiersBlind"
  },
  {
    id: "POWERBLINDMOD1MEDIUM",
    name: "Medium (LBT)",
    button_name: "BRSW.PowerModifiersBlindAreaEffect2MBT",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Blind" }
    ],
    group: "BRSW.PowerModifiersBlind"
  },
  {
    id: "POWERBLINDMOD2LARGE",
    name: "Large (+3)",
    button_name: "BRSW.PowerModifiersBlindAreaEffect3LBTStream",
    shotsUsed: "+3",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Blind" }
    ],
    group: "BRSW.PowerModifiersBlind"
  },

  // BOLT
  {
    id: "POWERBOLTMOD1DAMAGE",
    name: "Damage (+1d6)",
    button_name: "BRSW.PowerModifiersBoltDamage",
    shotsUsed: "+2",
    dmgMod: "+d6x",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Bolt" }
    ],
    group: "BRSW.PowerModifiersBolt"
  },
  {
    id: "POWERBOLTMOD3DISINTEGRATE",
    name: "Disintegrate",
    button_name: "BRSW.PowerModifiersBoltDisintegrate",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Bolt" },
      { selector_type: "actor_has_edge", selector_value: "BRSW.EdgeName-Epic-Mastery" }
    ],
    group: "BRSW.PowerModifiersBolt"
  },
  {
    id: "POWERBOLTMOD2GREATERBOLT",
    name: "Greater Bolt (+2d6)",
    button_name: "BRSW.PowerModifiersBoltGreaterBolt",
    shotsUsed: "+4",
    dmgMod: "+2d6x",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Bolt" },
      { selector_type: "actor_has_edge", selector_value: "BRSW.EdgeName-Epic-Mastery" }
    ],
    group: "BRSW.PowerModifiersBolt"
  },
  {
    id: "POWERBOLTMOD4RATEOFFIRE",
    name: "Rate of Fire",
    button_name: "BRSW.PowerModifiersBoltRateOfFire",
    shotsUsed: "+2",
    rof: "2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Bolt" },
      { selector_type: "actor_has_edge", selector_value: "BRSW.EdgeName-Epic-Mastery" }
    ],
    group: "BRSW.PowerModifiersBolt"
  },

  // BOOST/LOWER TRAIT
  // plus Additional Recipients, which is handled by the generic clause above
  {
    id: "POWERBOOSTLOWERTRAITMOGREATER",
    name: "Greater Boost/Lower Trait",
    button_name: "BRSW.PowerModifiersBoostLowerGreater",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Boost/Lower Trait" },
      { selector_type: "actor_has_edge", selector_value: "BRSW.EdgeName-Epic-Mastery" }
    ],
    group: "BRSW.PowerModifiersBoostLower"
  },
  {
    id: "POWERBOOSTLOWERTRAITMODSTRONG",
    name: "Strong (+1)",
    button_name: "BRSW.PowerModifiersBoostLowerStrong",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Boost/Lower Trait" }
    ],
    group: "BRSW.PowerModifiersBoostLower"
  },

  // BURROW
  // plus Additional Recipients, which is handled by the generic clause above
  {
    id: "POWERBURROWMODPOWER",
    name: "Power",
    button_name: "BRSW.PowerModifiersBurrowPower",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Burrow" }
    ],
    group: "BRSW.PowerModifiersBurrow"
  },

  // BURST
  {
    id: "POWERBURSTMOD1DAMAGE",
    name: "Damage (+2d6)",
    button_name: "BRSW.PowerModifiersBurstDamage",
    shotsUsed: "+2",
    dmgMod: "+d6x",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Burst" }
    ],
    group: "BRSW.PowerModifiersBurst"
  },
  {
    id: "POWERBURSTMOD3GREATERBURST",
    name: "Greater Burst (+2d6)",
    button_name: "BRSW.PowerModifiersBurstGreaterBurst",
    shotsUsed: "+4",
    dmgMod: "+2d6x",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Burst" },
      { selector_type: "actor_has_edge", selector_value: "BRSW.EdgeName-Epic-Mastery" }
    ],
    group: "BRSW.PowerModifiersBurst"
  },
  {
    id: "POWERBURSTMOD2PUSH",
    name: "Push (2d6 feet)",
    button_name: "BRSW.PowerModifiersBurstPush",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Burst" }
    ],
    group: "BRSW.PowerModifiersBurst"
  },

  // CONFUSION

  // CONJURE ITEM

  // CURSE

  // DAMAGE FIELD
  {
    id: "POWERDAMAGEFIELDAREAEFFECTS2MEDIUM",
    name: "Medium (MBT)",
    button_name: "BRSW.PowerModifiersDamageFieldAreaEffectMBT",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Damage Field" }
    ],
    group: "BRSW.PowerModifiersDamageField"
  },
  {
    id: "POWERDAMAGEFIELD1DAMAGE",
    name: "Damage (2d6)",
    button_name: "BRSW.PowerModifiersDamageFieldDamage",
    shotsUsed: "+2",
    dmgOverride: "2d6x",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Damage Field" }
    ],
    group: "BRSW.PowerModifiersDamageField"
  },
  {
    id: "POWERDAMAGEFIELD3GREATERBURST",
    name: "Greater Blast (3d6)",
    button_name: "BRSW.PowerModifiersDamageFieldGreaterDamageField",
    shotsUsed: "+4",
    dmgOverride: "3d6x",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Damage Field" },
      { selector_type: "actor_has_edge", selector_value: "BRSW.EdgeName-Epic-Mastery" }
    ],
    group: "BRSW.PowerModifiersDamageField"
  },
  {
    id: "POWERDAMAGEFIELDMOBILE",
    name: "Mobile",
    button_name: "BRSW.PowerModifiersDamageFieldMobile",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Damage Field" }
    ],
    group: "BRSW.PowerModifiersDamageField"
  },

  // DARKSIGHT

  // DEFLECTION
  // just Additional Recipients, which is handled by the generic clause above

  // DETECT/CONCEAL ARCANA

  // DISGUISE

  // DISPEL

  // DIVINATION

  // DRAIN POWER POINTS

  // ELEMENTAL MANIPULATION

  // EMPATHY

  // ENTANGLE
  {
    id: "POWERENTANGLEMOD1MEDIUM",
    name: "Medium (LBT)",
    button_name: "BRSW.PowerModifiersEntangleAreaEffectMBT",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Entangle" }
    ],
    group: "BRSW.PowerModifiersEntangle"
  },
  {
    id: "POWERENTANGLEMOD2LARGE",
    name: "Large or Stream (+3)",
    button_name: "BRSW.PowerModifiersEntangleAreaEffectLBTStream",
    shotsUsed: "+3",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Entangle" }
    ],
    group: "BRSW.PowerModifiersEntangle"
  },
  {
    id: "POWERENTANGLEMOD4DAMAGE",
    name: "Damage (+2)",
    button_name: "BRSW.PowerModifiersEntangleDamage",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Entangle" }
    ],
    group: "BRSW.PowerModifiersEntangle"
  },
  {
    id: "POWERENTANGLEMOD5DEADLY",
    name: "☆ Deadly (+4)",
    button_name: "BRSW.PowerModifiersEntangleDeadly",
    shotsUsed: "+4",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Entangle" },
      { selector_type: "actor_has_edge", selector_value: "BRSW.EdgeName-Epic-Mastery" }
    ],
    group: "BRSW.PowerModifiersEntangle"
  },
  {
    id: "POWERENTANGLEMOD3TOUGH",
    name: "Tough (+1)",
    button_name: "BRSW.PowerModifiersEntangleTough",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Entangle" }
    ],
    group: "BRSW.PowerModifiersEntangle"
  },

  // ENVIRONMENTAL PROTECTION
  {
    id: "POWERENVPROTECTIONMODRESISTANCE",
    name: "Environmental Resistance",
    button_name: "BRSW.PowerModifiersEnvironmentalProtectionEnvironmentalResistance",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Environmental Protection" }
    ],
    group: "BRSW.PowerModifiersEnvironmentalProtection"
  },

  // FARSIGHT

  // FEAR

  // GROWTH/SHRINK

  // HAVOC
  {
    id: "POWERHAVOCMODGREATER",
    name: "Greater Havoc (+2d6)",
    button_name: "BRSW.PowerModifiersHavocGreaterHavoc",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Havoc" },
      { selector_type: "actor_has_edge", selector_value: "BRSW.EdgeName-Epic-Mastery" }
    ],
    group: "BRSW.PowerModifiersHavoc"
  },
  {
    id: "POWERHAVOCMODAREA",
    name: "Area Effect (LBT)",
    button_name: "BRSW.PowerModifiersHavocAreaEffect",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Havoc" }
    ],
    group: "BRSW.PowerModifiersHavoc"
  },

  // HEALING
  {
    id: "POWERHEALINGMOD4GREATERHEALING",
    name: "Greater Healing",
    button_name: "BRSW.PowerModifiersHealingGreaterHealing",
    shotsUsed: "+10",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Healing" }
    ],
    group: "BRSW.PowerModifiersHealing"
  },
  {
    id: "POWERHEALINGMOD5CRIPPLINGINJURIES",
    name: "Crippling Injuries",
    button_name: "BRSW.PowerModifiersHealingCripplingInjuries",
    shotsUsed: "+20",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Healing" }
    ],
    group: "BRSW.PowerModifiersHealing"
  },
  {
    id: "POWERHEALINGMOD2MASSHEALINGMEDIUMBLAST",
    name: "Mass Healing - MBT",
    button_name: "BRSW.PowerModifiersHealingMassHealingMBT",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Healing" },
      { selector_type: "actor_has_edge", selector_value: "BRSW.EdgeName-Epic-Mastery" }
    ],
    group: "BRSW.PowerModifiersHealing"
  },
  {
    id: "POWERHEALINGMOD3MASSHEALINGLARGEBLAST",
    name: "Mass Healing - LBT",
    button_name: "BRSW.PowerModifiersHealingMassHealingLBT",
    shotsUsed: "+3",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Healing" },
      { selector_type: "actor_has_edge", selector_value: "BRSW.EdgeName-Epic-Mastery" }
    ],
    group: "BRSW.PowerModifiersHealing"
  },
  {
    id: "POWERHEALINGMOD1NEUTRALIZEPOISON",
    name: "Neutralize Poison or Disease",
    button_name: "BRSW.PowerModifiersHealingNeutralisePoisonOrDisease",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Healing" }
    ],
    group: "BRSW.PowerModifiersHealing"
  },

  // ILLUSION

  // INTANGIBILITY

  // INVISIBILITY

  // LIGHT/DARKNESS

  // LOCATE

  // LOCK/UNLOCK

  // MIND LINK

  // MIND READING

  // MIND WIPE

  // MYSTIC INTERVENTION

  // OBJECT READING

  // PLANAR BINDING

  // PLANE SHIFT

  // PROTECTION
  // just Additional Recipients, which is handled by the generic clause above

  // PUPPET

  // RELIEF
  // plus Additional Recipients, which is handled by the generic clause above
  {
    id: "POWERRELIEFMODRESTORATION",
    name: "Restoration",
    button_name: "BRSW.PowerModifiersReliefRestoration",
    shotsUsed: "+3",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Relief" }
    ],
    group: "BRSW.PowerModifiersRelief"
  },
  {
    id: "POWERRELIEFMODSTUNNED",
    name: "Stunned",
    button_name: "BRSW.PowerModifiersReliefStunned",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Relief" }
    ],
    group: "BRSW.PowerModifiersRelief"
  },

  // RESURRECTION

  // SANCTUARY
  {
    id: "POWERSANCTUARYMODSTRONG",
    name: "☆ Strong",
    button_name: "BRSW.PowerModifiersSanctuaryStrong",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Sanctuary" },
      { selector_type: "actor_has_edge", selector_value: "BRSW.EdgeName-Epic-Mastery" }
    ],
    group: "BRSW.PowerModifiersSanctuary"
  },
  {
    id: "POWERSANCTUARYMODMEDIUMBLAST",
    name: "Medium Blast",
    button_name: "BRSW.PowerModifiersSanctuaryAreaEffectMBT",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Sanctuary" }
    ],
    group: "BRSW.PowerModifiersSanctuary"
  },
  {
    id: "POWERSANCTUARYMODLARGEBLAST",
    name: "Large Blast",
    button_name: "BRSW.PowerModifiersSanctuaryAreaEffectLBT",
    shotsUsed: "+3",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Sanctuary" }
    ],
    group: "BRSW.PowerModifiersSanctuary"
  },

  // SCRYING

  // SHAPE CHANGE
  // plus Additional Recipients, which is handled by the generic clause above
  {
    id: "POWERSHAPECHANGEMODDURATION",
    name: "Duration",
    button_name: "BRSW.PowerModifiersShapeChangeDuration",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Shape Change" }
    ],
    group: "BRSW.PowerModifiersShapeChange"
  },
  {
    id: "POWERSHAPECHANGEMODTRANSFORMTOUCH",
    name: "☆ Transform (Touch)",
    button_name: "BRSW.PowerModifiersShapeChangeTransformTouch",
    shotsUsed: "+2",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Shape Change" },
      { selector_type: "actor_has_edge", selector_value: "BRSW.EdgeName-Epic-Mastery" }
    ],
    group: "BRSW.PowerModifiersShapeChange"
  },
  {
    id: "POWERSHAPECHANGEMODTRANSFORMRANGE",
    name: "☆ Transform (Range)",
    button_name: "BRSW.PowerModifiersShapeChangeTransformRange",
    shotsUsed: "+3",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Shape Change" },
      { selector_type: "actor_has_edge", selector_value: "BRSW.EdgeName-Epic-Mastery" }
    ],
    group: "BRSW.PowerModifiersShapeChange"
  },
  {
    id: "POWERSHAPECHANGEMODPOLYMORPH",
    name: "☆ Polymorph (+3)",
    button_name: "BRSW.PowerModifiersShapeChangePolymorph",
    shotsUsed: "+3",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Shape Change" },
      { selector_type: "actor_has_edge", selector_value: "BRSW.EdgeName-Epic-Mastery" }
    ],
    group: "BRSW.PowerModifiersShapeChange"
  },
  {
    id: "POWERSHAPECHANGEMOD1SIZE-4",
    name: "Size -4 to -1",
    button_name: "BRSW.PowerModifiersShapeChangeSize-4to-1",
    shotsUsed: "3",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Shape Change" }
    ],
    group: "BRSW.PowerModifiersShapeChangeSize",
    group_single: true,
    defaultChecked: "on"
  },
  {
    id: "POWERSHAPECHANGEMOD2SIZE0",
    name: "Size 0",
    button_name: "BRSW.PowerModifiersShapeChangeSize0",
    shotsUsed: "5",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Shape Change" },
      {
        or_selector: [
          {
            selector_type: "actor_value", selector_value: "system.advances.rank=Seasoned",
          },
          {
            selector_type: "actor_value", selector_value: "system.advances.rank=Veteran",
          },
          {
            selector_type: "actor_value", selector_value: "system.advances.rank=Heroic",
          },
          {
            selector_type: "actor_value", selector_value: "system.advances.rank=Legendary",
          }
        ],
      }
    ],
    group: "BRSW.PowerModifiersShapeChangeSize",
    group_single: true,
  },
  {
    id: "POWERSHAPECHANGEMOD3SIZE1",
    name: "Size 1 to 2",
    button_name: "BRSW.PowerModifiersShapeChangeSize1to2",
    shotsUsed: "8",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Shape Change" },
      {
        or_selector: [
          {
            selector_type: "actor_value", selector_value: "system.advances.rank=Veteran",
          },
          {
            selector_type: "actor_value", selector_value: "system.advances.rank=Heroic",
          },
          {
            selector_type: "actor_value", selector_value: "system.advances.rank=Legendary",
          }
        ],
      }

    ],
    group: "BRSW.PowerModifiersShapeChangeSize",
    group_single: true,
  },
  {
    id: "POWERSHAPECHANGEMOD4SIZE3",
    name: "Size 3 to 4",
    button_name: "BRSW.PowerModifiersShapeChangeSize3to4",
    shotsUsed: "11",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Shape Change" },
      {
        or_selector: [
          {
            selector_type: "actor_value", selector_value: "system.advances.rank=Heroic",
          },
          {
            selector_type: "actor_value", selector_value: "system.advances.rank=Legendary",
          }
        ],
      }

    ],
    group: "BRSW.PowerModifiersShapeChangeSize",
    group_single: true,
  },
  {
    id: "POWERSHAPECHANGEMOD5SIZE5",
    name: "Size 5 to 10",
    button_name: "BRSW.PowerModifiersShapeChangeSize5to10",
    shotsUsed: "15",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Shape Change" },
      {
        or_selector: [
          {
            selector_type: "actor_value", selector_value: "system.advances.rank=Legendary",
          }
        ],
      }
    ],
    group: "BRSW.PowerModifiersShapeChangeSize",
    group_single: true,
  },

  // SLOTH/SPEED

  // SLUMBER

  // SMITE

  // SOUND/SILENCE

  // SPEAK LANGUAGE

  // STUN

  // SUMMON ALLY
  {
    id: "POWERSUMMONALLYMOD1NOVICE",
    name: "Novice",
    button_name: "BRSW.PowerModifiersSummonAlly1Novice",
    shotsUsed: "1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Summon Ally" }
    ],
    group: "BRSW.PowerModifiersSummonAllyRank"
  },
  {
    id: "POWERSUMMONALLYMOD2SEASONED",
    name: "Seasoned",
    button_name: "BRSW.PowerModifiersSummonAlly2Seasoned",
    shotsUsed: "3",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Summon Ally" },
      {
        or_selector: [
          {
            selector_type: "actor_value", selector_value: "system.advances.rank=Seasoned",
          },
          {
            selector_type: "actor_value", selector_value: "system.advances.rank=Veteran",
          },
          {
            selector_type: "actor_value", selector_value: "system.advances.rank=Heroic",
          },
          {
            selector_type: "actor_value", selector_value: "system.advances.rank=Legendary",
          }
        ],
      }
    ],
    group: "BRSW.PowerModifiersSummonAllyRank"
  },
  {
    id: "POWERSUMMONALLYMOD3VETERAN",
    name: "Veteran",
    button_name: "BRSW.PowerModifiersSummonAlly3Veteran",
    shotsUsed: "5",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Summon Ally" },
      {
        or_selector: [
          {
            selector_type: "actor_value", selector_value: "system.advances.rank=Veteran",
          },
          {
            selector_type: "actor_value", selector_value: "system.advances.rank=Heroic",
          },
          {
            selector_type: "actor_value", selector_value: "system.advances.rank=Legendary",
          }
        ],
      }
    ],
    group: "BRSW.PowerModifiersSummonAllyRank"
  },
  {
    id: "POWERSUMMONALLYMOD4HEROIC",
    name: "Heroic",
    button_name: "BRSW.PowerModifiersSummonAlly4Heroic",
    shotsUsed: "7",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Summon Ally" },
      {
        or_selector: [
          {
            selector_type: "actor_value", selector_value: "system.advances.rank=Heroic",
          },
          {
            selector_type: "actor_value", selector_value: "system.advances.rank=Legendary",
          }
        ],
      }
    ],
    group: "BRSW.PowerModifiersSummonAllyRank"
  },
  {
    id: "POWERSUMMONALLYMODMINDRIDER",
    name: "Mind Rider",
    button_name: "BRSW.PowerModifiersSummonAllyMindRider",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Summon Ally" }
    ],
    group: "BRSW.PowerModifiersSummonAlly"
  },
  {
    id: "POWERSUMMONALLYMODFLIGHT",
    name: "Flight",
    button_name: "BRSW.PowerModifiersSummonAllyFlight",
    shotsUsed: "+1",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Summon Ally" }
    ],
    group: "BRSW.PowerModifiersSummonAlly"
  },
  {
    id: "POWERSUMMONALLYMODADDITIONALALLIES",
    name: "Additional Allies",
    button_name: "BRSW.PowerModifiersSummonAllyAdditionalAllies",
    shotsUsed: "+0",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Summon Ally" },
      { selector_type: "actor_has_edge", selector_value: "BRSW.EdgeName-Epic-Mastery" }
    ],
    group: "BRSW.PowerModifiersSummonAlly"
  },
  {
    id: "POWERSUMMONALLYMODCOMBATEDGE",
    name: "Combat Edge",
    button_name: "BRSW.PowerModifiersSummonAllyCombatEdge",
    shotsUsed: "+0",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Summon Ally" }
    ],
    group: "BRSW.PowerModifiersSummonAlly"
  },
  {
    id: "POWERSUMMONALLYMODINCREASEDTRAIT",
    name: "Increased Trait",
    button_name: "BRSW.PowerModifiersSummonAllyIncreasedTrait",
    shotsUsed: "+0",
    and_selector: [
      { selector_type: "item_type", selector_value: "power" },
      { selector_type: "item_name", selector_value: "Summon Ally" }
    ],
    group: "BRSW.PowerModifiersSummonAlly"
  },

  // SUMMON ANIMAL

  // SUMMON MONSTER

  // SUMMON UNDEAD

  // TELEKINESIS

  // TELEPORT

  // TIME STOP

  // WALL WALKER
  // just Additional Recipients, which is handled by the generic clause above

  // WISH

  // ZOMBIE

];
