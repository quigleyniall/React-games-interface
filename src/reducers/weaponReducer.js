import {PRIM_CHOICE, SEC_CHOICE, PERK_1, PERK_2, PERK_3, DIVISION, SCORE_1, SCORE_2, SCORE_3, BACK, SHOW} from '../actions/weaponInfo'

export const WeaponReducer = (state={PRIMARY: 'AK-74U', SECONDARY: 'Glock',
                                      PERK_1: 'C4 x2', PERK_2: 'Stopping Power',
                                      PERK_3: 'Deep Impact', DIVISION: 'Airborne',
                                      SCORE_1: 'RC-XD', SCORE_2: 'Swarm', SCORE_3: 'K9 Unit',
                                      BACK: false, SHOW: true},action) => {
  switch(action.type) {
  case PRIM_CHOICE:
      return { ...state, PRIMARY: action.payload.primary };
  case SEC_CHOICE:
      return { ...state, SECONDARY: action.payload.secondary };
  case PERK_1:
      return { ...state, PERK_1: action.payload.perk1 }
  case PERK_2:
      return { ...state, PERK_2: action.payload.perk2 }
  case PERK_3:
      return { ...state, PERK_3: action.payload.perk3 }
  case DIVISION:
      return { ...state, DIVISION:action.payload.division}
  case SCORE_1:
      return { ...state, SCORE_1:action.payload.division}
  case SCORE_2:
      return { ...state, SCORE_2:action.payload.division}
  case SCORE_3:
      return { ...state, SCORE_3:action.payload.division}
  case BACK:
      return { ...state, BACK:action.payload.back}
  case SHOW:
      return { ...state, SHOW:action.payload.show}
  default:
      return state;
  }
}
