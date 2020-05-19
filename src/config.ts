const baseURL = process.env.NOMINL_HOST || 'https://instantdomainsearch.com/';

export default {
  appURL: 'https://app.instantdomainsearch.com/',

  // cleanup: verify that removing this will not break iOS
  searches: ['name', 'word', 'ngram', 'sound'],
  muxSearch: {
    URL: 'services/all/{0}?tldTags={1}&partTld={2}',
    web_URL: 'services/all/{0}?tldTags={1}&partTld={2}&country={3}&city={4}',
    ios_URL: 'services/all/{0}?tldTags={1}&partTld={2}&country={3}&city={4}',
  },

  baseURL,
  bulkURL: `${baseURL}services/bulk/`,
  expiringURL: `${baseURL}services/servec/expiring/`,
  generatorURL: `${baseURL}services/fix/`,
  isForSaleURL: `${baseURL}services/forsale/`,
  metaURL: `${baseURL}services/meta/meta.json`,
  nameURL: `${baseURL}services/name/`,
  rankedExtensionsURL: `${baseURL}services/servec/ranked_extensions/`,
  socialURL: `${baseURL}services/social/`,
  vectorURL: `${baseURL}services/servec/after/`,

  registrars: [
    {
      name: 'godaddy.com',
      href: 'https://www.godaddy.com/',
      label: 'GoDaddy',
      URL:
        'https://www.anrdoezrs.net/click-7384289-11751890?sid={2}&url=https%3A%2F%2Fwww.godaddy.com%2Fdomainsearch%2Ffind%3FcheckAvail%3D1%26tmskey%3D%26domainToCheck%3D{0}.{1}', // 7384289
      mobile_URL:
        'https://www.anrdoezrs.net/click-7709750-11751890?sid={2}&url=https%3A%2F%2Fwww.godaddy.com%2Fdomainsearch%2Ffind%3FcheckAvail%3D1%26tmskey%3D%26domainToCheck%3D{0}.{1}', // 7709750
      ios_URL:
        'https://www.anrdoezrs.net/click-7793939-11751890?sid={2}&url=https%3A%2F%2Fwww.godaddy.com%2Fdomainsearch%2Ffind%3FcheckAvail%3D1%26tmskey%3D%26domainToCheck%3D{0}.{1}', // 7793939
    },
  ],

  aftermarket: [
    {
      name: 'buydomains.com', // same as afternic.com
      URL:
        'https://www.anrdoezrs.net/click-7629305-11751890?sid={2}&url=https%3A%2F%2Fwww.godaddy.com%2Fdomainsearch%2Ffind%3FcheckAvail%3D1%26tmskey%3D%26domainToCheck%3D{0}.{1}',
      mobile_URL:
        'https://www.anrdoezrs.net/click-7709788-11751890?sid={2}&url=https%3A%2F%2Fwww.godaddy.com%2Fdomainsearch%2Ffind%3FcheckAvail%3D1%26tmskey%3D%26domainToCheck%3D{0}.{1}',
      ios_URL:
        'https://www.anrdoezrs.net/click-7793940-11751890?sid={2}&url=https%3A%2F%2Fwww.godaddy.com%2Fdomainsearch%2Ffind%3FcheckAvail%3D1%26tmskey%3D%26domainToCheck%3D{0}.{1}',
    },
    {
      name: 'hugedomains.com',
      URL:
        'https://www.anrdoezrs.net/click-7629305-11751890?sid={2}&url=https%3A%2F%2Fwww.godaddy.com%2Fdomainsearch%2Ffind%3FcheckAvail%3D1%26tmskey%3D%26domainToCheck%3D{0}.{1}',
      mobile_URL:
        'https://www.anrdoezrs.net/click-7709788-11751890?sid={2}&url=https%3A%2F%2Fwww.godaddy.com%2Fdomainsearch%2Ffind%3FcheckAvail%3D1%26tmskey%3D%26domainToCheck%3D{0}.{1}',
      ios_URL:
        'https://www.anrdoezrs.net/click-7793940-11751890?sid={2}&url=https%3A%2F%2Fwww.godaddy.com%2Fdomainsearch%2Ffind%3FcheckAvail%3D1%26tmskey%3D%26domainToCheck%3D{0}.{1}',
    },
    {
      name: 'sedoparking.com',
      URL:
        'https://www.anrdoezrs.net/click-7629305-11751890?sid={2}&url=https%3A%2F%2Fwww.godaddy.com%2Fdomainsearch%2Ffind%3FcheckAvail%3D1%26tmskey%3D%26domainToCheck%3D{0}.{1}',
      mobile_URL:
        'https://www.anrdoezrs.net/click-7709788-11751890?sid={2}&url=https%3A%2F%2Fwww.godaddy.com%2Fdomainsearch%2Ffind%3FcheckAvail%3D1%26tmskey%3D%26domainToCheck%3D{0}.{1}',
      ios_URL:
        'https://www.anrdoezrs.net/click-7793940-11751890?sid={2}&url=https%3A%2F%2Fwww.godaddy.com%2Fdomainsearch%2Ffind%3FcheckAvail%3D1%26tmskey%3D%26domainToCheck%3D{0}.{1}',
    },
    {
      name: 'sedo.com',
      URL:
        'https://www.anrdoezrs.net/click-7629305-11751890?sid={2}&url=https%3A%2F%2Fwww.godaddy.com%2Fdomainsearch%2Ffind%3FcheckAvail%3D1%26tmskey%3D%26domainToCheck%3D{0}.{1}',
      mobile_URL:
        'https://www.anrdoezrs.net/click-7709788-11751890?sid={2}&url=https%3A%2F%2Fwww.godaddy.com%2Fdomainsearch%2Ffind%3FcheckAvail%3D1%26tmskey%3D%26domainToCheck%3D{0}.{1}',
      ios_URL:
        'https://www.anrdoezrs.net/click-7793940-11751890?sid={2}&url=https%3A%2F%2Fwww.godaddy.com%2Fdomainsearch%2Ffind%3FcheckAvail%3D1%26tmskey%3D%26domainToCheck%3D{0}.{1}',
    },
    {
      name: 'afternic.com', // same as buydomains.com
      URL:
        'https://www.anrdoezrs.net/click-7629305-11751890?sid={2}&url=https%3A%2F%2Fwww.godaddy.com%2Fdomainsearch%2Ffind%3FcheckAvail%3D1%26tmskey%3D%26domainToCheck%3D{0}.{1}',
      mobile_URL:
        'https://www.anrdoezrs.net/click-7709788-11751890?sid={2}&url=https%3A%2F%2Fwww.godaddy.com%2Fdomainsearch%2Ffind%3FcheckAvail%3D1%26tmskey%3D%26domainToCheck%3D{0}.{1}',
      ios_URL:
        'https://www.anrdoezrs.net/click-7793940-11751890?sid={2}&url=https%3A%2F%2Fwww.godaddy.com%2Fdomainsearch%2Ffind%3FcheckAvail%3D1%26tmskey%3D%26domainToCheck%3D{0}.{1}',
    },
    {
      name: 'brandbucket.com',
      URL: 'https://www.brandbucket.com/names?search={0}.{1}&rfsn=1235997.157b2',
      mobile_URL: 'https://www.brandbucket.com/names?search={0}.{1}&rfsn=1235997.157b2',
      ios_URL: 'https://www.brandbucket.com/names?search={0}.{1}&rfsn=1235997.157b2',
    },
    {
      name: 'domainmarket.com',
      URL:
        'https://www.anrdoezrs.net/click-7629305-11751890?sid={2}&url=https%3A%2F%2Fwww.godaddy.com%2Fdomainsearch%2Ffind%3FcheckAvail%3D1%26tmskey%3D%26domainToCheck%3D{0}.{1}',
      mobile_URL:
        'https://www.anrdoezrs.net/click-7709788-11751890?sid={2}&url=https%3A%2F%2Fwww.godaddy.com%2Fdomainsearch%2Ffind%3FcheckAvail%3D1%26tmskey%3D%26domainToCheck%3D{0}.{1}',
      ios_URL:
        'https://www.anrdoezrs.net/click-7793940-11751890?sid={2}&url=https%3A%2F%2Fwww.godaddy.com%2Fdomainsearch%2Ffind%3FcheckAvail%3D1%26tmskey%3D%26domainToCheck%3D{0}.{1}',
    },
    {
      name: 'uniregistry.com',
      URL:
        'https://www.anrdoezrs.net/click-7629305-11751890?sid={2}&url=https%3A%2F%2Fwww.godaddy.com%2Fdomainsearch%2Ffind%3FcheckAvail%3D1%26tmskey%3D%26domainToCheck%3D{0}.{1}',
      mobile_URL:
        'https://www.anrdoezrs.net/click-7709788-11751890?sid={2}&url=https%3A%2F%2Fwww.godaddy.com%2Fdomainsearch%2Ffind%3FcheckAvail%3D1%26tmskey%3D%26domainToCheck%3D{0}.{1}',
      ios_URL:
        'https://www.anrdoezrs.net/click-7793940-11751890?sid={2}&url=https%3A%2F%2Fwww.godaddy.com%2Fdomainsearch%2Ffind%3FcheckAvail%3D1%26tmskey%3D%26domainToCheck%3D{0}.{1}',
    },
    {
      name: 'domainnamesales.com',
      URL:
        'https://www.anrdoezrs.net/click-7629305-11751890?sid={2}&url=https%3A%2F%2Fwww.godaddy.com%2Fdomainsearch%2Ffind%3FcheckAvail%3D1%26tmskey%3D%26domainToCheck%3D{0}.{1}',
      mobile_URL:
        'https://www.anrdoezrs.net/click-7709788-11751890?sid={2}&url=https%3A%2F%2Fwww.godaddy.com%2Fdomainsearch%2Ffind%3FcheckAvail%3D1%26tmskey%3D%26domainToCheck%3D{0}.{1}',
      ios_URL:
        'https://www.anrdoezrs.net/click-7793940-11751890?sid={2}&url=https%3A%2F%2Fwww.godaddy.com%2Fdomainsearch%2Ffind%3FcheckAvail%3D1%26tmskey%3D%26domainToCheck%3D{0}.{1}',
    },
    {
      name: 'godaddy.com',
      URL:
        'https://www.anrdoezrs.net/click-7629305-11751890?sid={2}&url=https%3A%2F%2Fwww.godaddy.com%2Fdomainsearch%2Ffind%3FcheckAvail%3D1%26tmskey%3D%26domainToCheck%3D{0}.{1}',
      mobile_URL:
        'https://www.anrdoezrs.net/click-7709788-11751890?sid={2}&url=https%3A%2F%2Fwww.godaddy.com%2Fdomainsearch%2Ffind%3FcheckAvail%3D1%26tmskey%3D%26domainToCheck%3D{0}.{1}',
      ios_URL:
        'https://www.anrdoezrs.net/click-7793940-11751890?sid={2}&url=https%3A%2F%2Fwww.godaddy.com%2Fdomainsearch%2Ffind%3FcheckAvail%3D1%26tmskey%3D%26domainToCheck%3D{0}.{1}',
    },
  ],

  expiring: [
    {
      name: 'godaddy.com',
      URL:
        'https://www.anrdoezrs.net/click-8766491-11751890?sid={2}&url=https%3A%2F%2Fwww.godaddy.com%2Fdomainsearch%2Ffind%3FcheckAvail%3D1%26tmskey%3D%26domainToCheck%3D{0}.{1}',
      mobile_URL:
        'https://www.anrdoezrs.net/click-8766492-11751890?sid={2}&url=https%3A%2F%2Fwww.godaddy.com%2Fdomainsearch%2Ffind%3FcheckAvail%3D1%26tmskey%3D%26domainToCheck%3D{0}.{1}',
    },
    {
      name: 'dynadot.com',
      URL: 'https://www.dynadot.com/market/backorder/{0}.{1}?rscbo=instantdomainsearch',
      mobile_URL: 'https://www.dynadot.com/market/backorder/{0}.{1}?rscbo=instantdomainsearch',
    },
    {
      name: 'snapnames.com',
      URL: 'https://www.snapnames.com/domain/{0}.{1}.action?ref=InstantDomainSearch',
      mobile_URL: 'https://www.snapnames.com/domain/{0}.{1}.action?ref=InstantDomainSearch',
    },
    {
      name: 'namejet.com',
      URL: 'https://www.namejet.com/Pages/Auctions/BackorderDetails.aspx?domainname={0}.{1}&ref=InstantDomainSearch',
      mobile_URL:
        'https://www.namejet.com/Pages/Auctions/BackorderDetails.aspx?domainname={0}.{1}&ref=InstantDomainSearch',
    },
    {
      name: 'pool.com',
      URL: 'https://www.pool.com/?ref=InstantDomainSearch',
      mobile_URL: 'https://www.pool.com/?ref=InstantDomainSearch',
    },
  ],

  whois: {
    URL:
      'https://www.anrdoezrs.net/click-7629304-11751890?sid={2}&url=https%3A%2F%2Fwww.godaddy.com%2Fwhois%2Fresults.aspx%3Fdomain%3D{0}.{1}',
    mobile_URL:
      'https://www.anrdoezrs.net/click-7709787-11751890?sid={2}&url=https%3A%2F%2Fwww.godaddy.com%2Fwhois%2Fresults.aspx%3Fdomain%3D{0}.{1}',
    ios_URL:
      'https://www.anrdoezrs.net/click-7794441-11751890?sid={2}&url=https%3A%2F%2Fwww.godaddy.com%2Fwhois%2Fresults.aspx%3Fdomain%3D{0}.{1}',
  },

  acquire: {
    URL:
      'https://www.anrdoezrs.net/click-8793954-11751890?sid={2}&url=https%3A%2F%2Fwww.godaddy.com%2Fdomainsearch%2Ffind%3FcheckAvail%3D1%26tmskey%3Ddpp_dbs%26domainToCheck%3D{0}.{1}',
    mobile_URL:
      'https://www.anrdoezrs.net/click-8793954-11751890?sid={2}&url=https%3A%2F%2Fwww.godaddy.com%2Fdomainsearch%2Ffind%3FcheckAvail%3D1%26tmskey%3Ddpp_dbs%26domainToCheck%3D{0}.{1}',
    ios_URL:
      'https://www.anrdoezrs.net/click-8793954-11751890?sid={2}&url=https%3A%2F%2Fwww.godaddy.com%2Fdomainsearch%2Ffind%3FcheckAvail%3D1%26tmskey%3Ddpp_dbs%26domainToCheck%3D{0}.{1}',
  },

  appraise: {
    URL:
      'https://www.anrdoezrs.net/click-8509542-11751890?sid={2}&url=https%3A%2F%2Fwww.godaddy.com%2Fdomain-value-appraisal%2Fappraisal%2F%3FdomainToCheck%3D{0}.{1}',
    mobile_URL:
      'https://www.anrdoezrs.net/click-8509542-11751890?sid={2}&url=https%3A%2F%2Fwww.godaddy.com%2Fdomain-value-appraisal%2Fappraisal%2F%3FdomainToCheck%3D{0}.{1}',
  },

  parameterSets: [],
};
