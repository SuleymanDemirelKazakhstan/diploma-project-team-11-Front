export interface CategoryInterface {
  data: CategoryDataInterface;
  status: CategoryStatusInterface;
}

export interface CategoryDataCoinsQuoteTypeInterface {
  price: number;
  volume_24h: number;
  percent_change_1h: number;
  percent_change_24h: number;
  percent_change_7d: number;
  market_cap: number;
  last_updated: string;
}

export interface CategoryDataCoinsQuoteInterface {
  [key: string]: CategoryDataCoinsQuoteTypeInterface;
}

export interface CategoryDataCoinsInterface {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  cmc_rank: number;
  num_market_pairs: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  last_updated: string;
  date_added: string;
  tags: string[];
  platform: null;
  quote: CategoryDataCoinsQuoteInterface;
}

export interface CategoryDataInterface {
  id: string;
  name: string;
  title: string;
  description: string;
  num_tokens: number;
  avg_price_change: number;
  market_cap: number;
  market_cap_change: number;
  volume: number;
  volume_change: number;
  coins: CategoryDataCoinsInterface[];
  last_updated: number;
}

export interface CategoryStatusInterface {
  timestamp: string;
  error_code: number;
  error_message: string;
  elapsed: number;
  credit_count: number;
}
