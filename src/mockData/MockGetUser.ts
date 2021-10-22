import { RoleType } from '../common/constants/role-type';

export const mockGetUser = {
  id: 'c2969ebf-067c-47fa-9565-0e78a407f70d',
  firstName: 'Kert',
  lastName: 'Muller',
  email: 'junctionx@gmail.com',
  phone: '+36203500188',
  address: '1083 Bockay Janos 44, Budapest',
  role: RoleType.USER,
  diseases: [
    {
      name: 'Bone Cancer',
      id: 1,
      sideEffects: [
        {
          name: 'Cough',
          id: 1,
        },
        {
          name: 'Bleeding',
          id: 2,
        },
      ],
      questions: [
        {
          question: 'How are you today?',
          id: 1,
          type: 'Psychological',
          answersFromDoctor: ['Happy', 'Normal', 'Sad'],
          answersFromPatient: ['Happy'],
        },
        {
          question: 'How often do you cough today?',
          id: 2,
          type: 'Serious',
          answersFromDoctor: ['Always', 'Often', 'Hardly'],
          answersFromPatient: ['Often'],
        },
        {
          question: 'How often do you bleed today?',
          id: 3,
          type: 'Serious',
          answersFromDoctor: ['Always', 'Often', 'Hardly'],
          answersFromPatient: [],
        },
      ],
      articles: [
        {
          title: 'Treating bone cancer',
          id: 1,
          content: 'Lorem ipsum treating bone cancer',
        },
        {
          title: 'After bone cancer treatment',
          id: 2,
          content: 'Lorem ipsum after bone cancer treatment',
        },
      ],
    },
  ],
  doctors: [
    {
      name: 'Dr. Virgil Van Dijk',
      id: 'c2969ebf-067c-47fa-9565-0e78a407f70d',
      specialty: [
        {
          name: 'Bone Cancer',
          id: 1,
          yearOfExperience: 10,
        },
        {
          name: 'Heart cancer',
          id: 2,
          yearOfExperience: 12,
        },
      ],
      address: '1077 Wesselenyi utca 43, Budapest',
      phone: '+36209392384',
    },
    {
      name: 'Dr. Ronaldo',
      id: 'c2969ebf-067c-47fa-9565-0e78a407f70d',
      specialty: [
        {
          name: 'Bone Cancer',
          id: 1,
          yearOfExperience: 8,
        },
        {
          name: 'Brain cancer',
          id: 3,
          yearOfExperience: 15,
        },
      ],
      address: '1117 Fehervari utca 15, Budapest',
      phone: '+36702329328',
    },
  ],
  appointments: [
    {
      id: 1,
      doctor: { name: 'Dr. Virgil Van Dijk', id: '' },
      place: '1077 Wesselenyi utca 43, Budapest',
      time: '2021-10-10 10:20:00',
    },
    {
      id: 2,
      doctor: { name: 'Dr. Ronaldo', id: '' },
      place: '1117 Fehervari utca 15, Budapest',
      time: '2021-10-11 11:20:00',
    },
    {
      id: 3,
      doctor: { name: 'Dr. Ronaldo', id: '' },
      place: '1117 Fehervari utca 15, Budapest',
      time: '2021-11-11 11:20:00',
    },
  ],
  createdAt: new Date(),
  updatedAt: new Date(),
};
