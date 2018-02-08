export const ACTION_TYPES = {
  ADD_PALACE_NAME: 'ADD_PALACE_NAME',
  UPDATE_LOCI: 'UPDATE_LOCI'
}

export function addPalace(palaceName){
  return({
    type: ACTION_TYPES.ADD_PALACE_NAME,
    payload: { palaceName: palaceName }
  });
}

export function updateLoci(loci){
  return({
    type: ACTION_TYPES.UPDATE_LOCI,
    payload: loci
  });
}
