// Utility functions that can be used out of the module
/* globals ChatMessage, game, Dialog */

export function getWhisperData() {
  let rollMode, whisper, blind;
  rollMode = game.settings.get("core", "rollMode");
  if (["gmroll", "blindroll"].includes(rollMode)) {
    whisper = ChatMessage.getWhisperRecipients("GM");
  }
  if (rollMode === "blindroll") {
    blind = true;
  } else if (rollMode === "selfroll") {
    whisper = [game.user._id];
  }
  return {
    rollMode: rollMode,
    whisper: whisper,
    blind: blind,
  };
}

export function makeExplotable(expression) {
  // Make all dice of a roll able to explode
  // Code from the SWADE system
  const reg_exp = /\d*d\d+[^kdrxc]/g;
  expression += " "; // Just because of my poor reg_exp foo
  let dice_strings = expression.match(reg_exp);
  let used = [];
  if (dice_strings) {
    dice_strings.forEach((match) => {
      if (used.indexOf(match.slice(0, -1)) === -1) {
        expression = expression.replace(
          new RegExp(match.slice(0, -1), "g"),
          match.slice(0, -1) + "x",
        );
        used.push(match.slice(0, -1));
      }
    });
  }
  return expression;
}

export async function spendMastersBenny() {
  // Expends one benny from the master stack
  // noinspection ES6MissingAwait
  for (let user of game.users) {
    if (user.isGM) {
      let value = user.getFlag("swade", "bennies");
      if (value > 0) {
        await user.setFlag("swade", "bennies", value - 1);
      }
    }
  }
}

export function broofa() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    let r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8; // jshint ignore:line
    return v.toString(16);
  });
}

/**
 * Show a simple form
 *
 * @param {string} title The form title
 * @param {[object]} fields Array of {id, label, default_value}, if there
 *  is no id it will use label as an id, beware of spaces
 * @param {function} callback A callback function to pass the data
 */
export function simple_form(title, fields, callback) {
  let content = "<form>";
  for (let field of fields) {
    const field_id = field.id || field.label;
    content += `<div class="form-group"><label>${field.label}</label>
            <input id='input_${field_id}' value='${field.default_value}'></div>`;
  }
  content += "</form>";
  new Dialog({
    title: title,
    content: content,
    buttons: {
      one: {
        label: "OK",
        callback: (html) => {
          let values = {};
          for (let field of fields) {
            const field_id = field.id || field.label;
            values[field_id] = html.find(`#input_${field_id}`).val();
          }
          callback(values);
        },
      },
      two: {
        label: "Cancel",
      },
    },
  }).render(true);
}

/**
 * Gets the first targeted token
 */
export function get_targeted_token() {
  /**
   * Sets the difficulty as the parry value of the targeted
   * or selected token
   */
  let targets = game.user.targets;
  let objective;
  if (targets.size) {
    objective = Array.from(targets)[0];
  }
  return objective;
}

/**
 * Sets or updates a condition
 * @param condition_id
 * @param actor
 */
export async function set_or_update_condition(condition_id, actor) {
  if (await game.succ.hasCondition(condition_id, actor)) {
    const condition = await game.succ.getConditionFrom(condition_id, actor);
    condition.update({
      "duration.startRound": game.combat ? game.combat.round : 0,
    });
  } else {
    await game.succ.addCondition(condition_id, actor);
  }
}
