import { ValueOf } from 'lib/types';

const TAG_SLUGS = {
  All: 'all',
  Tech: 'tech',
  Update: 'update',
  Thinking: 'thinking',
  Playlist: 'playlist',
  Link: 'link',
  Items: 'items',
  Notion: 'notion',
  Game: 'game',
} as const;

export type TagSlug = ValueOf<typeof TAG_SLUGS>;

type TagData = {
  slug: string;
  name: string;
  emoji: string;
};

const TAG_DATA: Record<TagSlug, TagData> = {
  [TAG_SLUGS.Tech]: {
    name: '技術',
    emoji: '💻',
    slug: TAG_SLUGS.Tech,
  },
  [TAG_SLUGS.Update]: {
    name: '近況報告',
    emoji: '📢',
    slug: TAG_SLUGS.Update,
  },
  [TAG_SLUGS.Playlist]: {
    name: 'プレイリスト',
    emoji: '🎧',
    slug: TAG_SLUGS.Playlist,
  },
  [TAG_SLUGS.Link]: {
    name: '外部リンク',
    emoji: '🔗',
    slug: TAG_SLUGS.Link,
  },
  [TAG_SLUGS.Thinking]: {
    name: '思考の断片',
    emoji: '💭',
    slug: TAG_SLUGS.Thinking,
  },

  [TAG_SLUGS.Items]: {
    name: 'アイテム',
    emoji: '✨',
    slug: TAG_SLUGS.Items,
  },
  [TAG_SLUGS.Notion]: {
    name: 'Notion',
    emoji: '📓',
    slug: TAG_SLUGS.Notion,
  },
  [TAG_SLUGS.Game]: {
    name: 'ゲーム',
    emoji: '🎮',
    slug: TAG_SLUGS.Game,
  },
  [TAG_SLUGS.All]: {
    name: 'All',
    emoji: '🌴',
    slug: TAG_SLUGS.All,
  },
} as const;

export const getTagDataBySlug = (slug: TagSlug): TagData => TAG_DATA[slug];
