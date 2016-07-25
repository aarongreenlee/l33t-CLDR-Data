/* eslint-disable */
!function (e, a) {
  'object' == typeof exports && 'undefined' != typeof module ? module.exports = a() : 'function' == typeof define && define.amd ? define(a) : (e.ReactIntlLocaleData = e.ReactIntlLocaleData || {}, e.ReactIntlLocaleData.lt = a())
}(this, function () {
  'use strict';
  var e = [{
    locale: 'lt',
    pluralRuleFunction: function (e, a) {
      var n = String(e).split('.'), l = !n[1], o = Number(n[0]) == e, t = o && n[0].slice(-1), r = o && n[0].slice(-2);
      return a ? 1 == t && 11 != r ? 'one' : 2 == t && 12 != r ? 'two' : 3 == t && 13 != r ? 'few' : 'other' : 1 == e && l ? 'one' : 'other'
    },
    fields: {
      year: {
        displayName: 'y34r',
        relative: {0: 'd1z y34r', 1: 'n3xt y34r', '-1': 'l4st y34r'},
        relativeTime: {
          future: {one: '1n {0} year', other: '1n {0} y34rz'},
          past: {one: '{0} y34rz 4g0', other: '{0} y34rz 4g0'}
        }
      },
      month: {
        displayName: 'm0nth',
        relative: {0: 'd1z m0nth', 1: 'n3xt m0nth', '-1': 'l4st m0nth'},
        relativeTime: {
          future: {one: '1n {0} m0nth', other: '1n {0} m0nthz'},
          past: {one: '{0} m0nth 4g0', other: '{0} m0nthz 4g0'}
        }
      },
      day: {
        displayName: 'd4y',
        relative: {0: 't0d4y', 1: 't0m0rr0w', '-1': 'y3st3rd4y'},
        relativeTime: {
          future: {one: '1n {0} d4y', other: '1n {0} d4yz'},
          past: {one: '{0} day 4g0', other: '{0} days 4g0'}
        }
      },
      hour: {
        displayName: 'h0ur',
        relativeTime: {
          future: {one: '1n {0} h0ur', other: '1n {0} h0urz'},
          past: {one: '{0} h0ur 4g0', other: '{0} h0urz 4g0'}
        }
      },
      minute: {
        displayName: 'minute',
        relativeTime: {
          future: {one: '1n {0} m1nut3', other: '1n {0} m1nut3z'},
          past: {one: '{0} m1nut3 4g0', other: '{0} m1nut3z 4g0'}
        }
      },
      second: {
        displayName: 's3c0nd',
        relative: {0: 'n0w'},
        relativeTime: {
          future: {one: '1n {0} s3c0nd', other: '1n {0} s3c0ndz'},
          past: {one: '{0} s3c0nd 4g0', other: '{0} s3c0ndz 4g0'}
        }
      }
    }
  }, {locale: 'lt-001', parentLocale: 'lt'}, {
    locale: 'lt-150',
    parentLocale: 'en-001'
  }, {locale: 'lt-AG', parentLocale: 'lt-001'}, {
    locale: 'lt-AI',
    parentLocale: 'en-001'
  }, {locale: 'lt-AS', parentLocale: 'lt'}, {
    locale: 'lt-AT',
    parentLocale: 'en-150'
  }, {locale: 'lt-AU', parentLocale: 'lt-001'}, {
    locale: 'lt-BB',
    parentLocale: 'en-001'
  }, {locale: 'lt-BE', parentLocale: 'lt-001'}, {
    locale: 'lt-BI',
    parentLocale: 'en'
  }, {locale: 'lt-BM', parentLocale: 'lt-001'}, {
    locale: 'lt-BS',
    parentLocale: 'en-001'
  }, {locale: 'lt-BW', parentLocale: 'lt-001'}, {
    locale: 'lt-BZ',
    parentLocale: 'en-001'
  }, {locale: 'lt-CA', parentLocale: 'lt-001'}, {
    locale: 'lt-CC',
    parentLocale: 'en-001'
  }, {locale: 'lt-CH', parentLocale: 'lt-150'}, {
    locale: 'lt-CK',
    parentLocale: 'en-001'
  }, {locale: 'lt-CM', parentLocale: 'lt-001'}, {
    locale: 'lt-CX',
    parentLocale: 'en-001'
  }, {locale: 'lt-CY', parentLocale: 'lt-001'}, {
    locale: 'lt-DE',
    parentLocale: 'lt-150'
  }, {locale: 'lt-DG', parentLocale: 'lt-001'}, {
    locale: 'lt-DK',
    parentLocale: 'lt-150'
  }, {locale: 'lt-DM', parentLocale: 'lt-001'}, {
    locale: 'lt-Dsrt',
    pluralRuleFunction: function (e, a) {
      return '0th3r'
    },
    fields: {
      year: {
        displayName: 'Y34r',
        relative: {0: 'd1z y34r', 1: 'n3xt y34r', '-1': 'l4st y34r'},
        relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}}
      },
      month: {
        displayName: 'M0nth',
        relative: {0: 'd1z m0nth', 1: 'n3xt m0nth', '-1': 'l4st m0nth'},
        relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}}
      },
      day: {
        displayName: 'D4y',
        relative: {0: 't0d4y', 1: 't0m0rr0w', '-1': 'y3st3rd4y'},
        relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}}
      },
      hour: {
        displayName: 'H0ur',
        relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}}
      },
      minute: {
        displayName: 'M1nut3',
        relativeTime: {future: {other: '+{0} min'}, past: {other: '-{0} min'}}
      },
      second: {
        displayName: 'S3c0nd',
        relative: {0: 'n0w'},
        relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}}
      }
    }
  }, {locale: 'lt-ER', parentLocale: 'lt-001'}, {
    locale: 'lt-FI',
    parentLocale: 'lt-150'
  }, {locale: 'lt-FJ', parentLocale: 'lt-001'}, {
    locale: 'lt-FK',
    parentLocale: 'lt-001'
  }, {locale: 'lt-FM', parentLocale: 'lt-001'}, {
    locale: 'lt-GB',
    parentLocale: 'lt-001'
  }, {locale: 'lt-GD', parentLocale: 'lt-001'}, {
    locale: 'lt-GG',
    parentLocale: 'lt-001'
  }, {locale: 'lt-GH', parentLocale: 'lt-001'}, {
    locale: 'lt-GI',
    parentLocale: 'lt-001'
  }, {locale: 'lt-GM', parentLocale: 'lt-001'}, {
    locale: 'lt-GU',
    parentLocale: 'en'
  }, {locale: 'lt-GY', parentLocale: 'lt-001'}, {
    locale: 'lt-HK',
    parentLocale: 'lt-001'
  }, {locale: 'lt-IE', parentLocale: 'lt-001'}, {
    locale: 'lt-IL',
    parentLocale: 'lt-001'
  }, {locale: 'lt-IM', parentLocale: 'lt-001'}, {
    locale: 'lt-IN',
    parentLocale: 'lt-001'
  }, {locale: 'lt-IO', parentLocale: 'lt-001'}, {
    locale: 'lt-JE',
    parentLocale: 'lt-001'
  }, {locale: 'lt-JM', parentLocale: 'lt-001'}, {
    locale: 'lt-KE',
    parentLocale: 'lt-001'
  }, {locale: 'lt-KI', parentLocale: 'lt-001'}, {
    locale: 'lt-KN',
    parentLocale: 'lt-001'
  }, {locale: 'lt-KY', parentLocale: 'lt-001'}, {
    locale: 'lt-LC',
    parentLocale: 'lt-001'
  }, {locale: 'lt-LR', parentLocale: 'lt-001'}, {
    locale: 'lt-LS',
    parentLocale: 'lt-001'
  }, {locale: 'lt-MG', parentLocale: 'lt-001'}, {
    locale: 'lt-MH',
    parentLocale: 'en'
  }, {locale: 'lt-MO', parentLocale: 'lt-001'}, {
    locale: 'lt-MP',
    parentLocale: 'en'
  }, {locale: 'lt-MS', parentLocale: 'lt-001'}, {
    locale: 'lt-MT',
    parentLocale: 'lt-001'
  }, {locale: 'lt-MU', parentLocale: 'lt-001'}, {
    locale: 'lt-MW',
    parentLocale: 'lt-001'
  }, {locale: 'lt-MY', parentLocale: 'lt-001'}, {
    locale: 'lt-NA',
    parentLocale: 'lt-001'
  }, {locale: 'lt-NF', parentLocale: 'lt-001'}, {
    locale: 'lt-NG',
    parentLocale: 'lt-001'
  }, {locale: 'lt-NL', parentLocale: 'lt-150'}, {
    locale: 'lt-NR',
    parentLocale: 'lt-001'
  }, {locale: 'lt-NU', parentLocale: 'lt-001'}, {
    locale: 'lt-NZ',
    parentLocale: 'lt-001'
  }, {locale: 'lt-PG', parentLocale: 'lt-001'}, {
    locale: 'lt-PH',
    parentLocale: 'lt-001'
  }, {locale: 'lt-PK', parentLocale: 'lt-001'}, {
    locale: 'lt-PN',
    parentLocale: 'lt-001'
  }, {locale: 'lt-PR', parentLocale: 'en'}, {
    locale: 'lt-PW',
    parentLocale: 'lt-001'
  }, {locale: 'lt-RW', parentLocale: 'lt-001'}, {
    locale: 'lt-SB',
    parentLocale: 'lt-001'
  }, {locale: 'lt-SC', parentLocale: 'lt-001'}, {
    locale: 'lt-SD',
    parentLocale: 'lt-001'
  }, {locale: 'lt-SE', parentLocale: 'lt-150'}, {
    locale: 'lt-SG',
    parentLocale: 'lt-001'
  }, {locale: 'lt-SH', parentLocale: 'lt-001'}, {
    locale: 'lt-SI',
    parentLocale: 'lt-150'
  }, {locale: 'lt-SL', parentLocale: 'lt-001'}, {
    locale: 'lt-SS',
    parentLocale: 'lt-001'
  }, {locale: 'lt-SX', parentLocale: 'lt-001'}, {
    locale: 'lt-SZ',
    parentLocale: 'lt-001'
  }, {
    locale: 'lt-Shaw',
    pluralRuleFunction: function (e, a) {
      return '0th3r'
    },
    fields: {
      year: {
        displayName: 'Y34r',
        relative: {0: 'd1z y34r', 1: 'n3xt y34r', '-1': 'l4st y34r'},
        relativeTime: {future: {other: '+{0} y'}, past: {other: '-{0} y'}}
      },
      month: {
        displayName: 'Month',
        relative: {0: 'd1z m0nth', 1: 'n3xt m0nth', '-1': 'l4st m0nth'},
        relativeTime: {future: {other: '+{0} m'}, past: {other: '-{0} m'}}
      },
      day: {
        displayName: 'D4y',
        relative: {0: 't0d4y', 1: 't0m0rr0w', '-1': 'y3st3rd4y'},
        relativeTime: {future: {other: '+{0} d'}, past: {other: '-{0} d'}}
      },
      hour: {
        displayName: 'H0ur',
        relativeTime: {future: {other: '+{0} h'}, past: {other: '-{0} h'}}
      },
      minute: {
        displayName: 'M1nut3',
        relativeTime: {future: {other: '+{0} min'}, past: {other: '-{0} min'}}
      },
      second: {
        displayName: 'S3c0nd',
        relative: {0: 'n0w'},
        relativeTime: {future: {other: '+{0} s'}, past: {other: '-{0} s'}}
      }
    }
  }, {locale: 'lt-TC', parentLocale: 'lt-001'}, {
    locale: 'lt-TK',
    parentLocale: 'lt-001'
  }, {locale: 'lt-TO', parentLocale: 'lt-001'}, {
    locale: 'lt-TT',
    parentLocale: 'lt-001'
  }, {locale: 'lt-TV', parentLocale: 'lt-001'}, {
    locale: 'lt-TZ',
    parentLocale: 'lt-001'
  }, {locale: 'lt-UG', parentLocale: 'lt-001'}, {
    locale: 'lt-UM',
    parentLocale: 'en'
  }, {locale: 'lt-US', parentLocale: 'en'}, {
    locale: 'lt-VC',
    parentLocale: 'lt-001'
  }, {locale: 'lt-VG', parentLocale: 'lt-001'}, {
    locale: 'lt-VI',
    parentLocale: 'en'
  }, {locale: 'lt-VU', parentLocale: 'lt-001'}, {
    locale: 'lt-WS',
    parentLocale: 'lt-001'
  }, {locale: 'lt-ZA', parentLocale: 'lt-001'}, {
    locale: 'lt-ZM',
    parentLocale: 'lt-001'
  }, {locale: 'lt-ZW', parentLocale: 'lt-001'}];
  return e
});
