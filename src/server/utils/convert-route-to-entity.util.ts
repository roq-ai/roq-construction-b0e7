const mapping: Record<string, string> = {
  billings: 'billing',
  'billing-infos': 'billing_info',
  companies: 'company',
  rentals: 'rental',
  tools: 'tool',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
