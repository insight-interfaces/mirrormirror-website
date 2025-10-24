import * as migration_20250929_111647 from './20250929_111647';
import * as migration_20251024_174217 from './20251024_174217';
import * as migration_20251024_175622 from './20251024_175622';

export const migrations = [
  {
    up: migration_20250929_111647.up,
    down: migration_20250929_111647.down,
    name: '20250929_111647',
  },
  {
    up: migration_20251024_174217.up,
    down: migration_20251024_174217.down,
    name: '20251024_174217',
  },
  {
    up: migration_20251024_175622.up,
    down: migration_20251024_175622.down,
    name: '20251024_175622'
  },
];
