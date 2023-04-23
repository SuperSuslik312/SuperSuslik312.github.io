$.i18n.init({
    defaultLanguage: 'ru',
    ns: { namespaces: ['ns.special'], defaultNs: 'ns.special'},
    useLocalStorage: false,
    debug: false
}, function() {
    $('#title').text($.t('title'));
    $('#dossier').text($.t('dossier'));
    $('#system').text($.t('system'));
    $('#movies').text($.t('movies'));
    $('#pictures').text($.t('pictures'));
    $('#about').text($.t('about'));
    $('#about-system').text($.t('about-system'));
    $('#about-movies').text($.t('about-movies'));
    $('#nav_home').text($.t('nav_home'));
    $('#nav_about').text($.t('nav_about'));
    $('#not-found').text($.t('not-found'));
    $('#name').text($.t('name'));
    $('#name1').text($.t('name1'));
    $('#name2').text($.t('name2'));
    $('#name3').text($.t('name3'));
    $('#name4').text($.t('name4'));
    $('#name5').text($.t('name5'));
    $('#name6').text($.t('name6'));
    $('#name7').text($.t('name7'));
    $('#age1').text($.t('age1'));
    $('#age2').text($.t('age2'));
    $('#film1').attr("href", $.t('film1'));
    $('#film1img').attr("src", $.t('film1img'));
    $('#film2').attr("href", $.t('film2'));
    $('#film2img').attr("src", $.t('film2img'));
    $('#film3').attr("href", $.t('film3'));
    $('#film3img').attr("src", $.t('film3img'));
    $('#film4').attr("href", $.t('film4'));
    $('#film4img').attr("src", $.t('film4img'));
    $('#film5').attr("href", $.t('film5'));
    $('#film5img').attr("src", $.t('film5img'));
    $('#film6').attr("href", $.t('film6'));
    $('#film6img').attr("src", $.t('film6img'));
    $('#film7').attr("href", $.t('film7'));
    $('#film7img').attr("src", $.t('film7img'));
    $('#film8').attr("href", $.t('film8'));
    $('#film8img').attr("src", $.t('film8img'));
    $('#film9').attr("href", $.t('film9'));
    $('#film9img').attr("src", $.t('film9img'));
});