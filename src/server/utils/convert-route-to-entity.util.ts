const mapping: Record<string, string> = {
  companies: 'company',
  issues: 'issue',
  'time-entries': 'time_entry',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
