import { CollectionConfig } from 'payload'

export const Registrations: CollectionConfig = {
  slug: 'registrations',
  access: {
    create: () => true,
  },
  admin: {
    useAsTitle: 'playerName',
  },
  fields: [
    {
      name: 'playerName',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'gameMode',
      type: 'select',
      options: [
        { label: 'Battle Royale', value: 'battle-royale' },
        { label: 'Team Deathmatch', value: 'team-deathmatch' },
        { label: 'Arena Combat', value: 'arena-combat' },
        { label: 'Mixed Modes', value: 'mixed-modes' },
      ],
      required: true,
    },
  ],
}
