export const PRIM_CHOICE = 'PRIM_CHOICE'
export const SEC_CHOICE = 'SEC_CHOICE'
export const PERK_1 = 'PERK_1'
export const PERK_2 = 'PERK_2'
export const PERK_3 = 'PERK_3'
export const DIVISION = 'DIVISION'
export const SCORE_1 = "SCORE_1"
export const SCORE_2 = "SCORE_2"
export const SCORE_3 = "SCORE_3"
export const BACK = "BACK"
export const SHOW = "SHOW"



export function updatePrimaryWeapon(primaryWeapon){
  return {
    type: PRIM_CHOICE,
    payload: {
      primary: primaryWeapon
    }
  }
}

export function updateSecondaryWeapon(secondaryWeapon){
  return {
    type: SEC_CHOICE,
    payload: {
      secondary: secondaryWeapon
    }
  }
}
export function updatePerk1(perk1){
  return {
    type: PERK_1,
    payload: {
      perk1: perk1
    }
  }
}
export function updatePerk2(perk2){
  return {
    type: PERK_2,
    payload: {
      perk2: perk2
    }
  }
}
export function updatePerk3(perk3){
  return {
    type: PERK_3,
    payload: {
      perk3: perk3
    }
  }
}

export function division(div) {
  return {
    type: DIVISION,
    payload: {
      division: div
    }
  }
}

export function score1(score) {
  return {
    type: SCORE_1,
    payload: {
      division: score
    }
  }
}

export function score2(score) {
  return {
    type: SCORE_2,
    payload: {
      division: score
    }
  }
}

export function score3(score) {
  return {
    type: SCORE_3,
    payload: {
      division: score
    }
  }
}

export function goback(load) {
  return {
    type: BACK,
    payload: {
      back: load
    }
  }
}
export function show(load) {
  return {
    type: SHOW,
    payload: {
      show: load
    }
  }
}
