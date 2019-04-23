export function showHideEvent(data) {
  // return {
  //   type: "show_hide_action",
  //   data: data
  // };

  return dispatch => {
    dispatch({
      type: "show_hide_action",
      data: data
    });
  };
}
