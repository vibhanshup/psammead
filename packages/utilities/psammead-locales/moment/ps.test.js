/* eslint-disable */
const moment = require('moment');

require('./ps');

moment.locale('ps');
const assert = { equal: (val1, val2) => expect(val1).toEqual(val2) };

test('parse Gregorian months', function () {
    const testMonths = 'جنوري_فبروري_مارچ_اپریل_می_جون_جولاې_اګست_سپتمبر_اکتوبر_نومبر_ډیسمبر'.split('_');
    const shortMonths = 'جنوري_فبروري_مارچ_اپریل_می_جون_جولاې_اګست_سپتمبر_اکتوبر_نومبر_ډیسمبر'.split('_');

    function equalTest(input, mmm, i) {
        assert.equal(
            moment(input, mmm).month(),
            i,
            `${input} should be month ${i + 1}`,
        );
    }
    for (let i = 0; i < 12; i++) {
        equalTest(testMonths[i], 'MMM', i);
        equalTest(shortMonths[i], 'MMM', i);

        equalTest(testMonths[i], 'MMMM', i);
        equalTest(shortMonths[i], 'MMMM', i);

        equalTest(testMonths[i].toLocaleLowerCase(), 'MMMM', i);
        equalTest(shortMonths[i].toLocaleLowerCase(), 'MMMM', i);

        equalTest(testMonths[i].toLocaleUpperCase(), 'MMMM', i);
        equalTest(shortMonths[i].toLocaleUpperCase(), 'MMMM', i);
    }
});


test('format dates and times', function () {
    var dates = [
        ['LT', '<time datetime = \"2019-8-27\"> ۱۵:۲۵ </time> - <time> ۵ وږی ۱۳۹۸</time>'],
        ['LTS', '<time datetime = \"2019-8-27\"> ۱۵:۲۵:۵۰ </time> - <time> ۵ وږی ۱۳۹۸</time>'],
        ['L','<time datetime = \"2010-2-14\"> ۱٤/۰۲/۲۰۱۰ </time> - <time> ۲۵ سلواغه ۱۳۸۸</time>'],
        ['LL', '<time datetime = \"2010-2-14\"> ۱٤ فبروري ۲۰۱۰ </time> - <time> ۲۵ سلواغه ۱۳۸۸</time>'],
        ['LLL', '<time datetime = \"2010-2-14\"> ۱٤ فبروري ۲۰۱۰ ۱۵:۲۵ </time> - <time> ۲۵ سلواغه ۱۳۸۸</time>'],
        ['LLLL', '<time datetime = \"2010-2-14\"> اتوار، ۱٤ فبروري ۲۰۱۰ ۱۵:۲۵ </time> - <time> ۲۵ سلواغه ۱۳۸۸</time>']
    ]
    var gdate = moment(new Date(2010, 1, 14, 15, 25, 50, 125));

    for (var i = 0; i < dates.length; i++) {
        assert.equal(gdate.format(dates[i][0]), dates[i][1], dates[i][0] + ' ---> ' + dates[i][1]);
    }
});

test('format ordinal', function () {

    //'۱', '۲', '۳', '٤', '۵'
    assert.equal(moment([2011, 0, 1]).format('DDDo'), '۱', '۱');
    assert.equal(moment([2011, 0, 2]).format('DDDo'), '۲', '۲');
    assert.equal(moment([2011, 0, 3]).format('DDDo'), '۳', '۳');
    assert.equal(moment([2011, 0, 4]).format('DDDo'), '٤', '٤');
    assert.equal(moment([2011, 0, 5]).format('DDDo'), '۵', '۵');


    //'۶', '۷', '۸', '۹', '۱۰'
    assert.equal(moment([2011, 0, 6]).format('DDDo'), '۶', '۶');
    assert.equal(moment([2011, 0, 7]).format('DDDo'), '۷', '۷');
    assert.equal(moment([2011, 0, 8]).format('DDDo'), '۸', '۸');
    assert.equal(moment([2011, 0, 9]).format('DDDo'), '۹', '۹');
    assert.equal(moment([2011, 0, 10]).format('DDDo'), '۱۰', '۱۰');

    //'۱۱', '۱۲', '۱۳', '۱٤','۱۵'
    assert.equal(moment([2011, 0, 11]).format('DDDo'), '۱۱', '۱۱');
    assert.equal(moment([2011, 0, 12]).format('DDDo'), '۱۲', '۱۲');
    assert.equal(moment([2011, 0, 13]).format('DDDo'), '۱۳', '۱۳');
    assert.equal(moment([2011, 0, 14]).format('DDDo'), '۱٤', '۱٤');
    assert.equal(moment([2011, 0, 15]).format('DDDo'), '۱۵', '۱۵');

    //'۱۶', '۱۷', '۱۸', '۱۹', '۲۰'
    assert.equal(moment([2011, 0, 16]).format('DDDo'), '۱۶', '۱۶');
    assert.equal(moment([2011, 0, 17]).format('DDDo'), '۱۷', '۱۷');
    assert.equal(moment([2011, 0, 18]).format('DDDo'), '۱۸', '۱۸');
    assert.equal(moment([2011, 0, 19]).format('DDDo'), '۱۹', '۱۹');
    assert.equal(moment([2011, 0, 20]).format('DDDo'), '۲۰', '۲۰');

    // '۲۱', '۲۲', '۲۳', '۲٤', '۲۵'
    assert.equal(moment([2011, 0, 21]).format('DDDo'), '۲۱', '۲۱');
    assert.equal(moment([2011, 0, 22]).format('DDDo'), '۲۲', '۲۲');
    assert.equal(moment([2011, 0, 23]).format('DDDo'), '۲۳', '۲۳');
    assert.equal(moment([2011, 0, 24]).format('DDDo'), '۲٤', '۲٤');
    assert.equal(moment([2011, 0, 25]).format('DDDo'), '۲۵', '۲۵');

    // '۲۶', '۲۷', '۲۸', '۲۹', '۳۰'
    assert.equal(moment([2011, 0, 26]).format('DDDo'), '۲۶', '۲۶');
    assert.equal(moment([2011, 0, 27]).format('DDDo'), '۲۷', '۲۷');
    assert.equal(moment([2011, 0, 28]).format('DDDo'), '۲۸', '۲۸');
    assert.equal(moment([2011, 0, 29]).format('DDDo'), '۲۹', '۲۹');
    assert.equal(moment([2011, 0, 30]).format('DDDo'), '۳۰', '۳۰');

    // '۳۱'
    assert.equal(moment([2011, 0, 31]).format('DDDo'), '۳۱', '۳۱');
});

test('format Gregorian month', function () {
    var expected = ['جنوري جنوري', 'فبروري فبروري', 'مارچ مارچ', 'اپریل اپریل', 'می می', 'جون جون', 'جولاې جولاې', 'اګست اګست', 'سپتمبر سپتمبر', 'اکتوبر اکتوبر', 'نومبر نومبر', 'ډیسمبر ډیسمبر'];
    for (var i = 0; i < expected.length; i++) {
        assert.equal(moment([2011, i, 1]).format('MMMM MMM'), expected[i], expected[i]);
    }
});


test('format week', function () {
    var expected = ['اتوار اتوار ا', 'ګول ګول ګ', 'نهه نهه ن', 'شورو شورو ش', 'زیارت زیارت ز', 'جمعه جمعه ج', 'خالي خالي  خ'];
    for (var i = 0; i < expected.length; i++) {
        assert.equal(moment([2011, 0, 2 + i]).format('dddd ddd dd'), expected[i], expected[i]);
    }
});

test('from', function () {
    var start = moment([2007, 1, 28]);

    assert.equal(start.from(moment([2007, 1, 28]).add({ s: 44 }), true), 'څو ثاني', '44 seconds= few seconds');
    assert.equal(start.from(moment([2007, 1, 28]).add({ s: 45 }), true), 'يوه دقيقه', '44 seconds = one minute ');
    assert.equal(start.from(moment([2007, 1, 28]).add({ s: 89 }), true), 'يوه دقيقه', '89 seconds = one minute');
    assert.equal(start.from(moment([2007, 1, 28]).add({ s: 90 }), true), '۲ دقیقه', '90 seconds = two minutes');
    assert.equal(start.from(moment([2007, 1, 28]).add({ m: 44 }), true), '٤٤ دقیقه', '44 minutes = 44 minutes');

    assert.equal(start.from(moment([2007, 1, 28]).add({ m: 45 }), true), 'یو ساعت', '45 minutes = one hour');
    assert.equal(start.from(moment([2007, 1, 28]).add({ m: 89 }), true), 'یو ساعت', '89 minutes = an hour');
    assert.equal(start.from(moment([2007, 1, 28]).add({ m: 90 }), true), '۲ ساعت', '90 minutes = 2 hours');
    assert.equal(start.from(moment([2007, 1, 28]).add({ h: 5 }), true), '۵ ساعت', '5 hours = 5 hours');
    assert.equal(start.from(moment([2007, 1, 28]).add({ h: 21 }), true), '۲۱ ساعت', '21 hours = 21 hours');

    assert.equal(start.from(moment([2007, 1, 28]).add({ h: 22 }), true), 'یوه ورځ', '22 hours = a day');
    assert.equal(start.from(moment([2007, 1, 28]).add({ h: 35 }), true), 'یوه ورځ', '35 hours = a day');
    assert.equal(start.from(moment([2007, 1, 28]).add({ h: 36 }), true), '۲ ورځ', '36 hours = 2 days');
    assert.equal(start.from(moment([2007, 1, 28]).add({ d: 1 }), true), 'یوه ورځ', '1 day = a day');
    assert.equal(start.from(moment([2007, 1, 28]).add({ d: 5 }), true), '۵ ورځ', '5 days = 5 days');

    assert.equal(start.from(moment([2007, 1, 28]).add({ d: 25 }), true), '۲۵ ورځ', '25 days = 25 days');
    assert.equal(start.from(moment([2007, 1, 28]).add({ d: 26 }), true), 'يوه مياشت', '26 days = a month');
    assert.equal(start.from(moment([2007, 1, 28]).add({ d: 30 }), true), 'يوه مياشت', '30 days = a month');
    assert.equal(start.from(moment([2007, 1, 28]).add({ d: 43 }), true), 'يوه مياشت', '43 days = a month');
    assert.equal(start.from(moment([2007, 1, 28]).add({ d: 46 }), true), '۲ مياشت', '46 days = 2 months');

    assert.equal(start.from(moment([2007, 1, 28]).add({ d: 74 }), true), '۲ مياشت', '75 days = 2 months');
    assert.equal(start.from(moment([2007, 1, 28]).add({ d: 76 }), true), '۳ مياشت', '76 days = 3 months');
    assert.equal(start.from(moment([2007, 1, 28]).add({ M: 1 }), true), 'يوه مياشت', '1 month = a month');
    assert.equal(start.from(moment([2007, 1, 28]).add({ M: 5 }), true), '۵ مياشت', '5 months = 5 months');
    assert.equal(start.from(moment([2007, 1, 28]).add({ d: 345 }), true), 'یو کال', '345 days = a year');

    assert.equal(start.from(moment([2007, 1, 28]).add({ d: 548 }), true), '۲ کال', '548 days = 2 years');
    assert.equal(start.from(moment([2007, 1, 28]).add({ y: 1 }), true), 'یو کال', '1 year = a year');
    assert.equal(start.from(moment([2007, 1, 28]).add({ y: 5 }), true), '۵ کال', '5 years = 5 years');


});

test('suffix', function () {
    assert.equal(moment(30000).from(0), 'وروسته څو ثاني', 'prefix');
    assert.equal(moment(0).from(30000), 'څو ثاني مخکې', 'suffix');
});


test('now from now', function () {
    assert.equal(moment().fromNow(), 'څو ثاني مخکې', 'now from now should display as in the past');
});

test('fromNow', function () {
    assert.equal(moment().add({ s: 30 }).fromNow(), 'وروسته څو ثاني', 'in a few seconds');
    assert.equal(moment().add({ d: 5 }).fromNow(), 'وروسته ۵ ورځ', 'in 5 days');
});


test('calendar day', function () {
    var a = moment().hours(12).minutes(0).seconds(0);

    assert.equal(moment(a).calendar(), 'نن ورځ ۱۲:۰۰', 'today at the same time');
    assert.equal(moment(a).add({ m: 25 }).calendar(), 'نن ورځ ۱۲:۲۵', 'Now plus 25 min');
    assert.equal(moment(a).add({ h: 1 }).calendar(), 'نن ورځ ۱۳:۰۰', 'Now plus 1 hour');
    assert.equal(moment(a).add({ d: 1 }).calendar(), 'سبا ۱۲:۰۰', 'tomorrow at the same time');
    assert.equal(moment(a).subtract({ h: 1 }).calendar(), 'نن ورځ ۱۱:۰۰', 'Now minus 1 hour');
    assert.equal(moment(a).subtract({ d: 1 }).calendar(), 'پرون ۱۲:۰۰', 'yesterday at the same time');
});

test('calendar next week', function () {
    var m;
    for (var i = 2; i < 7; i++) {
       
        m = moment().add({ d: i });
        assert.equal(m.calendar(), m.format('dddd [بله اونۍ] LT'), 'Today + ' + i + ' days current time');
      
        m.hours(0).minutes(0).seconds(0).milliseconds(0);
        assert.equal(m.calendar(), m.format('dddd [بله اونۍ] LT'), 'Today + ' + i + ' days beginning of day');
       
        m.hours(23).minutes(59).seconds(59).milliseconds(999);
        assert.equal(m.calendar(), m.format('dddd [بله اونۍ] LT'), 'Today + ' + i + ' days end of day');
    }
}); 

test('calendar last week', function () {
    var m;

    for (var i = 2; i < 7; i++) {
        m = moment().subtract({d: i});
        assert.equal(m.calendar(),       m.format('[تیره] [اونۍ]dddd LT'),  'Today - ' + i + ' days current time');
       
        m.hours(0).minutes(0).seconds(0).milliseconds(0);
        assert.equal(m.calendar(),       m.format('[تیره] [اونۍ]dddd LT'),  'Today - ' + i + ' days beginning of day');
        
        m.hours(23).minutes(59).seconds(59).milliseconds(999);
        assert.equal(m.calendar(),       m.format('[تیره] [اونۍ]dddd LT'),  'Today - ' + i + ' days end of day');
    }
});

test('calendar all else', function () {
    var weeksAgo = moment().subtract({w: 1})
    var  weeksFromNow = moment().add({w: 1});

    assert.equal(weeksAgo.calendar(),       weeksAgo.format('L'),  '1 week ago');
    assert.equal(weeksFromNow.calendar(),   weeksFromNow.format('L'),  'in 1 week');

    weeksAgo = moment().subtract({w: 2});
    weeksFromNow = moment().add({w: 2});

    assert.equal(weeksAgo.calendar(),       weeksAgo.format('L'),  '2 weeks ago');
    assert.equal(weeksFromNow.calendar(),   weeksFromNow.format('L'),  'in 2 weeks');
});

test('weeks year starting sunday formatted', function () {
    assert.equal(moment([2012, 0,  1]).format('w ww wo'), '۱ ۰۱ ۱', 'Jan  1 2012 should be week 52');
    
    assert.equal(moment([2012, 0,  2]).format('w ww wo'),   '۱ ۰۱ ۱', 'Jan  2 2012 should be week 1');
    assert.equal(moment([2012, 0,  8]).format('w ww wo'),   '۲ ۰۲ ۲', 'Jan  8 2012 should be week 1');
    
    assert.equal(moment([2012, 0,  9]).format('w ww wo'),   '۲ ۰۲ ۲', 'Jan  9 2012 should be week 2');
    assert.equal(moment([2012, 0, 15]).format('w ww wo'),   '۳ ۰۳ ۳', 'Jan 15 2012 should be week 2');
});
