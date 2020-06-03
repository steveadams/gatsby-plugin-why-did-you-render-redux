// To edit all translations:
// cd client/content/_includes && subl en/app.json fr/app.json pt/app.json ru/app.json tr/app.json zh/app.json
interface Translation {
  allDomains: string;
  appraise: string;
  auction: string;
  backorder: string;
  buy: string;
  expired: string;
  forSale: string;
  makeOffer: string;
  mobileSearchPlaceholder: string;
  popularTlds: string;
  search: string;
  searchPlaceholder: string;
  subTitle: string;
  suggestions: string;
  whois: string;
}

type Language = 'english' | 'spanish' | 'french' | 'portuguese' | 'russian' | 'chinese';
type LanguageCode = 'en' | 'es' | 'fr' | 'pt' | 'ru' | 'zh';

interface Geography {
  City: string;
  Country: string;
}

type DomainInfo =
  | {
      label: string;
      rank: number;
      search: 'name';
      tld: string;
    }
  | {
      label: string;
      rank?: number;
      search: 'expiring';
      tld: string;
    }
  | {
      label: string;
      rank?: number;
      search: 'after';
      tld: string;
    }
  | {
      label: string;
      rank: number;
      search: 'fix';
      tld: string;
    };

type DomainAvailability =
  | {
      actuallyRegistered?: boolean;
      aftermarketProvider?: void;
      isBid?: never;
      isLoading?: never;
      isRegistered: false;
      price?: never;
    }
  | {
      actuallyRegistered?: boolean;
      aftermarketProvider?: never;
      isBid?: never;
      isLoading?: never;
      isRegistered: true;
      price?: never;
    }
  | {
      actuallyRegistered?: boolean;
      aftermarketProvider: string;
      isBid: false;
      isLoading?: never;
      isRegistered: true;
      price: number;
    }
  | {
      actuallyRegistered?: boolean;
      aftermarketProvider: string;
      isBid: true;
      isLoading?: never;
      isRegistered: true;
      price?: never;
    }
  | {
      actuallyRegistered?: boolean;
      aftermarketProvider?: never;
      isBid?: never;
      isLoading?: true;
      isRegistered?: never;
      price?: never;
    };

type Domain = DomainInfo & DomainAvailability;

type SearchStatus = {
  inProgress: boolean;
  requestError: boolean;
  responseError: boolean;
};

interface URLParams {
  campaign: string;
  search: string;
}

interface NameResponse {
  results: Domain[];
}

declare class ActiveXObject extends XMLHttpRequest {
  constructor(type: 'Microsoft.XMLHTTP');
}

interface Navigator {
  userLanguage?: string;
}

interface PageProps {
  location: {pathname: string; search: string; hash: string};
  pageContext: {
    lang: LanguageCode;
  };
}

declare module '*.jpg' {
  const value: string;
  export default value;
}
declare module '*.svg' {
  const value: string;
  export default value;
}
