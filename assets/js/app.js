function selectElementContents(el) {
    if (window.getSelection && document.createRange) {
        var sel = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(el);
        sel.removeAllRanges();
        sel.addRange(range);
    } else if (document.selection && document.body.createTextRange) {
        var textRange = document.body.createTextRange();
        textRange.moveToElementText(el);
        textRange.select();
    }
}

var bibtexs = document.querySelectorAll('.bibtex');
for (var i = 0; i < bibtexs.length; ++i) {
    bibtex = bibtexs[i];
    bibtex.addEventListener('click', function() {
        var html = document.querySelector('#' + this.getAttribute('bibtex-id')).innerHTML
        var dialog_content = document.querySelector('#dialog-content');
        dialog_content.innerHTML = html;
        selectElementContents(dialog_content);
        MicroModal.show('bibtext-dialog');
    });

}