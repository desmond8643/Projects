javascript:(function() {
    var elements = document.querySelectorAll('.music_master_score_back pointer w_450 m_15 p_3 f_0);
    var data = '';
    for (var i = 0; i < elements.length; i++) {
        data += elements[i].textContent + '\n';
    }
    console.log(data);
})();
