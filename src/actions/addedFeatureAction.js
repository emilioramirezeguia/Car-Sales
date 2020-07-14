export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const removeFeature = (featureID) => {
  return { type: REMOVE_FEATURE, payload: featureID };
};
