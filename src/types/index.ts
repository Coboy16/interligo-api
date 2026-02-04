// ============== USER ==============
export interface User {
  id: string;
  username: string;
  password: string;
  name: string;
  email: string;
}

// ============== AUTH ==============
export interface TokenPayload {
  userId: string;
  username: string;
}

export interface AuthTokens {
  access_token: string;
  refresh_token: string;
  token_type: string;
  expires_in: number;
}

export interface LoginRequest {
  username: string;
  password: string;
  grant_type: string;
  code_verifier?: string;
}

export interface RefreshRequest {
  refresh_token: string;
  grant_type: string;
}

// ============== ACCOUNT ==============
export interface Account {
  id: string;
  user_id: string;
  alias: string;
  account_number: string;
  currency: 'USD' | 'PEN' | 'EUR';
  available_balance: number;
  ledger_balance: number;
  type: 'SAVINGS' | 'CHECKING';
  status: 'ACTIVE' | 'INACTIVE';
}

// ============== TRANSACTION ==============
export interface Transaction {
  id: string;
  account_id: string;
  date: string;
  amount: number;
  description: string;
  type: 'CREDIT' | 'DEBIT';
  category: string;
  reference_number: string;
  status: 'COMPLETED' | 'PENDING' | 'FAILED';
}

export interface PaginatedTransactions {
  data: Transaction[];
  pagination: {
    current_page: number;
    total_pages: number;
    total_items: number;
    items_per_page: number;
    has_next: boolean;
    has_previous: boolean;
  };
}

// ============== BENEFICIARY ==============
export interface Beneficiary {
  id: string;
  user_id: string;
  name: string;
  account_number: string;
  bank_name: string;
  bank_code: string;
  alias: string;
  email?: string;
}

// ============== TRANSFER ==============
export interface Transfer {
  id: string;
  user_id: string;
  from_account_id: string;
  beneficiary_id: string;
  amount: number;
  currency: string;
  description: string;
  status: 'PENDING' | 'COMPLETED' | 'FAILED' | 'CANCELLED';
  created_at: string;
  confirmed_at?: string;
}

export interface CreateTransferRequest {
  from_account_id: string;
  beneficiary_id: string;
  amount: number;
  currency: string;
  description?: string;
}

// ============== CARD ==============
export interface Card {
  id: string;
  user_id: string;
  account_id: string;
  card_number_masked: string;
  card_holder_name: string;
  type: 'DEBIT' | 'CREDIT';
  brand: 'VISA' | 'MASTERCARD';
  status: 'ACTIVE' | 'FROZEN' | 'BLOCKED';
  expiry_date: string;
  cvv_masked: string;
}

export interface UpdateCardRequest {
  status: 'ACTIVE' | 'FROZEN';
}

// ============== API RESPONSE ==============
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
  };
  timestamp: string;
}

// ============== EXPRESS EXTENSION ==============
declare global {
  namespace Express {
    interface Request {
      userId?: string;
      username?: string;
    }
  }
}
