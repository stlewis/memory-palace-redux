export const ACTION_TYPES = {ADD_PALACE_NAME: 'ADD_PALACE_NAME'}

export function addPalace(palaceName){
  return({
    type: ACTION_TYPES.ADD_PALACE_NAME,
    payload: {palaceName: palaceName}
  });
}
