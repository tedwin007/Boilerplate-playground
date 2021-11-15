import { ColDef } from 'ag-grid-community';

export const ProductColumnDefs: ColDef[] = [
  { field: 'product_id' },

  { field: 'description' },

  { field: 'display_name' },

  { field: 'capacity' },

  { field: 'image' },
];

export const PriceEstimateColumnDefs: ColDef[] = [
  { field: 'product_id' },

  { field: 'currency_code' },

  { field: 'display_name' },

  { field: 'estimate' },

  { field: 'low_estimate' },

  { field: 'high_estimate' },

  { field: 'surge_multiplier' },
];

export const ProfileColumnDefs: ColDef[] = [
  { field: 'first_name' },

  { field: 'last_name' },

  { field: 'email' },

  { field: 'picture' },

  { field: 'role' },
];

export const ActivityColumnDefs: ColDef[] = [{ field: 'uuid' }];

export const ActivitiesColumnDefs: ColDef[] = [
  { field: 'offset' },

  { field: 'limit' },

  { field: 'count' },

  { field: 'history' },
];

export const ErrorColumnDefs: ColDef[] = [
  { field: 'code' },

  { field: 'message' },

  { field: 'fields' },
];
