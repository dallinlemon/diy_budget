
export const databasePath: string = '../data/';
export const databaseName: string = 'database.db';
export enum TableNames {
  USERS = 'users',
  BUDGETS = 'budgets',
  CATEGORIES = 'categories',
  ACCOUNTS = 'accounts',
  GROUPS = 'my_groups',
  RECORDS = 'records',
  RECORD_INDEX = 'record_index',
}
export enum UserColumns {
  ID = 'id',
  USERNAME = 'username',
  PASSWORD = 'password',
  EMAIL = 'email',
  FIRST_NAME = 'first_name',
  lAST_NAME = 'last_name',
  CREATED_AT = 'created_at'
}
export enum AccountsColumns {
  ID = 'id',
  BUDGET_ID = 'budget_id',
  NAME = 'name',
  NOTES = 'notes',
  ACTIVE = 'active',
  DESCRIPTION = 'description',
  CREATED_AT = 'created_at'
}
export enum BudgetsColumns {
  ID = 'id',
  USER_ID = 'user_id',
  NAME = 'name',
  NOTES = 'notes',
  CREATED_AT = 'created_at'
}

export enum GroupColumns {
  ID = 'id',
  BUDGET_ID = 'budget_id',
  NAME = 'name',
  NOTES = 'notes',
  CREATED_AT = 'created_at'
}
export enum CategoriesColumns {
  ID = 'id',
  GROUP_ID = 'group_id',
  NAME = 'name',
  NOTES = 'notes',
  CREATED_AT = 'created_at'
}
export enum RecordsColumns {
  ID = 'id',
  ACCOUNT_ID = 'account_id',
  DATE = 'date',
  PAYEE = 'payee',
  MEMO = 'memo',
  AMOUNT = 'amount',
  STATUS = 'status',
  CREATED_AT = 'created_at'
}
export enum RecordIndexColumns {
  RECORD_ID = 'record_id',
  CATEGORY_ID = 'category_id',
  NAME = 'name',
  AMOUNT = 'amount',
  NOTES = 'notes',
}
