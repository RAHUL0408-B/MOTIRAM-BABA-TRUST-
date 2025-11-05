export interface Member {
  id: string;
  joining_date: string;
  full_name: string;
  mobile: string;
  state?: string;
  district?: string;
  taluka?: string;
  village?: string;
  post?: string;
  pincode?: string;
  notes?: string;
  created_at?: string;
  updated_at?: string;
  added_by?: string;
}

export interface Program {
  id: string;
  title: string;
  date: string;
  location: string;
  description?: string;
  image_url?: string;
  created_by?: string;
  created_at?: string;
}


