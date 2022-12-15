type Links = {
  self: string;
  html: string;
};

type User = {
  id: string;
  username: string;
  name: string;
  portfolio_url: string;
  bio: string;
  location: string;
  total_likes: number;
  total_photos: number;
  total_collections: number;
  profile_image: {
    small: string;
    medium: string;
    large: string;
  };
  links: Links & {
    photos: string;
    likes: string;
    portfolio: string;
  };
};

type Urls = {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
};

type CoverPhoto = {
  id: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  likes: number;
  liked_by_user: boolean;
  description: string;
  user: User;
  urls: Urls;
  links: Links & {
    download: string;
  };
};
export interface Collections {
  id: string;
  title: string;
  description: string;
  published_at: string;
  updated_at: string;
  last_collected_at: string;
  total_photos: number;
  private: boolean;
  share_key: string;
  cover_photo: CoverPhoto;
  user: User & {
    updated_at: string;
  };
  links: Links & {
    photos: string;
    related: string;
  };
}

export interface Topics {
  id: string;
  title: string;
  description: string;
  published_at: string;
  updated_at: string;
  total_photos: number;
  visibility: string;
  featured: boolean;
  slug: string;
  links: Links & {
    photos: string;
  };
  status: string;
  owners: User &
    {
      links: Links & {
        photos: string;
        likes: string;
        portfolio: string;
        following: string;
        followers: string;
      };
    }[];
  cover_photo: CoverPhoto & {
    alt_description: string;
    links: Links & {
      download: string;
      download_location: string;
    };
    user: User & {
      total_collections: number;
      total_likes: number;
      total_photos: number;
      accepted_tos: boolean;
    };
    preview_photos: {
      id: string;
      created_at: string;
      updated_at: string;
      urls: Urls;
    }[];
  };
}

export interface Photos {
  id: string;
  updated_at: string;
  description: string;
  alt_description:string;
  created_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  likes: number;
  liked_by_user: boolean;
  user: User;
  current_user_collections: // The *current user's* collections that this photo belongs to.
  {
    id: number;
    title: string;
    published_at: string;
    last_collected_at: string;
    updated_at: string;
    cover_photo: null | string;
    user: null | string;
  }[];
  urls: Urls;
  links: Links & {
    download: string;
    download_location: string;
  };
}

interface QueryResponse {
  total: number;
  total_pages: number;
}

export interface PhotosQuery extends QueryResponse {
  results: Photos[]
}


