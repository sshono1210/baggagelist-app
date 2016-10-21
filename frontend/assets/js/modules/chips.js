module.exports = function(){
    $('.chips').material_chip();
    $('.chips-initial').material_chip({
        data: [{
            tag: '海'
        }, {
            tag: '山'
        }, {
            tag: '川'
        }]
    });
    $('.chips-placeholder').material_chip({
        placeholder: 'タグ',
        secondaryPlaceholder: 'タグ'
    });
    var chip = {
        tag: 'chip content',
        image: '', //optional
        id: 1 //optional
};};
