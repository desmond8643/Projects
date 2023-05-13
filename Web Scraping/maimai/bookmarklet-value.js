javascript:(function() {
  let elements = document.getElementsByClassName("music_master_score_back pointer w_450 m_15 p_3 f_0");
  let data = [];
  for (let i = 0; i < elements.length; i++) {
    let inputElement = elements[i].querySelector("input");
    if (inputElement) {
      let inputValue = inputElement.value.trim();
      data.push(inputValue);
    }
  }
  console.log(data);
})();
