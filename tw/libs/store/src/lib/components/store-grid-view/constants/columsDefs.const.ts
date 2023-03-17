import { ColDef } from 'ag-grid-community';

export const UserColumnDefs: ColDef[] = [
  { field: 'autoJoin' },

  { field: 'moderator' },

  { field: 'anyFlagUp' },

  { field: 'index' },

  { field: 'userName' },

  { field: 'userGuid' },

  { field: 'versionGUID' },

  { field: 'mandatory' },

  { field: 'guid' },

  { field: 'dailyReminder' },

  { field: 'userRole' },

  { field: 'email' },

  { field: 'status' },
];

export const ApiResponseColumnDefs: ColDef[] = [
  { field: 'code' },

  { field: 'type' },

  { field: 'message' },
];
