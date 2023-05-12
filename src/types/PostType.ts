export namespace PostTypes {
  export enum Type {
    MEM = 'mem',
    IMAGE = 'image',
    INFOGRAPHIC = 'infographic',
    GIF = 'gif',
  }

  export enum MediaType {
    VIDEO = 'video',
    IMAGE = 'image',
  }

  export interface Media {
    created_at: number;
    created_at_iso: string;
    link: string;
    media_type: MediaType;
    thumbnail: string;
    // video settings
    autoplay?: boolean;
    loop?: boolean;
    firstframe?: string;
  }

  export interface Item {
    id: number;
    created_at: string;
    like_count: number;
    dislike_count: number;
    title: string;
    slug: string;
    source: string;
    type: Type;
    text: string;
    media: Media;
    additional_text?: string;
    comments?: unknown[];
  }
}
