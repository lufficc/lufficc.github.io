const BIBTEXS = {
    "dpnet": "@inproceedings{li2019data,\n" +
        "    author    = {Congcong Li and\n" +
        "    Dawei Du and\n" +
        "    Libo Zhang and\n" +
        "    Tiejian Luo and\n" +
        "    Yanjun Wu and\n" +
        "    Qi Tian and\n" +
        "    Longyin Wen and\n" +
        "    Siwei Lyu},\n" +
        "    title     = {Data Priming Network for Automatic Check-Out},\n" +
        "    booktitle = {Proceedings of the 27th {ACM} International Conference on Multimedia,\n" +
        "    {MM} 2019, Nice, France, October 21-25, 2019},\n" +
        "    year      = {2019}\n" +
        "}",
    "sapnet": "@misc{li2020sapnet,\n" +
        "Author = {Congcong Li and Dawei Du and Libo Zhang and Longyin Wen and Tiejian Luo and Yanjun Wu and Pengfei Zhu},\n" +
        "Title  = {Spatial Attention Pyramid Network for Unsupervised Domain Adaptation},\n" +
        "Year   = {2020},\n" +
        "Eprint = {arXiv:2003.12979}\n" +
        "}"
};

function selectElementContents(el) {
    if (window.getSelection && document.createRange) {
        let sel = window.getSelection();
        let range = document.createRange();
        range.selectNodeContents(el);
        sel.removeAllRanges();
        sel.addRange(range);
    } else if (document.selection && document.body.createTextRange) {
        let textRange = document.body.createTextRange();
        textRange.moveToElementText(el);
        textRange.select();
    }
}

let bibtexs = document.querySelectorAll('.bibtex');
for (let i = 0; i < bibtexs.length; ++i) {
    bibtex = bibtexs[i];
    bibtex.addEventListener('click', function () {
        let dialog_content = document.querySelector('#dialog-content');
        dialog_content.innerHTML = BIBTEXS[this.getAttribute('bibtex-id')];
        selectElementContents(dialog_content);
        MicroModal.show('bibtext-dialog');
    });

}