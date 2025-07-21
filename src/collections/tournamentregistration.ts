import { CollectionConfig } from 'payload'

const TournamentRegistrations: CollectionConfig = {
  slug: 'tournamentRegistrations',
  access: { read: () => true, create: () => true },
  admin: { useAsTitle: 'playerName' },
  fields: [
    { name: 'tournament', type: 'number', required: true },
    { name: 'playerName', type: 'text', required: true },
    { name: 'email', type: 'email', required: true },
    { name: 'phone', type: 'text' },
    { name: 'dateOfBirth', type: 'date', required: true },
    { name: 'country', type: 'text', required: true },
    { name: 'experience', type: 'text' },
    { name: 'teamName', type: 'text' },
    { name: 'bio', type: 'textarea' },
    { name: 'emergencyContact', type: 'text' },
    { name: 'emergencyPhone', type: 'text' },
    { name: 'profileImage', type: 'upload', relationTo: 'media' },
    { name: 'teamLogo', type: 'upload', relationTo: 'media' },
  ],
  
}

export default TournamentRegistrations
