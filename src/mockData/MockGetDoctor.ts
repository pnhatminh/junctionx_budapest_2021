import { RoleType } from '../common/constants/role-type';

export const mockGetDoctor = {
    id: 1,
    firstName: 'Kert',
    lastName: 'Muller',
    email: 'junctionx@gmail.com',
    phone: '+36203500188',
    address: '1083 Bockay Janos 44, Budapest',
    role: RoleType.DOCTOR,
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
            questionnaires: [
                {
                    id: 1,
                    questions: [
                        {
                            question: 'How are you today?',
                            id: 1,
                            type: 'Psychological',
                            questionType: 'singleChoice',
                            options: ['Happy', 'Normal', 'Sad'],
                            answerFromDoctor: 'Happy',
                            answerFromPatient: 'Sad',
                        },
                        {
                            question: 'How often do you cough today?',
                            id: 2,
                            type: 'Serious',
                            questionType: 'singleChoice',
                            options: ['Always', 'Often', 'Hardly'],
                            answerFromDoctor: 'Hardly',
                            answerFromPatient: 'Often',
                        },
                        {
                            question: 'Do you smoke today?',
                            id: 5,
                            type: 'Serios',
                            questionType: 'boolean',
                            options: ['Yes, I do', 'No, I do not'],
                            answerFromDoctor: 'Yes, I do',
                            answerFromPatient: 'No, I do not',
                        },
                    ],
                    dueDate: '2021-10-12 12:00:00',
                    assignedBy: 'Dr. Virgil Van Dijk',
                },
                {
                    id: 2,
                    questions: [
                        {
                            question: 'How are you today?',
                            id: 1,
                            type: 'Psychological',
                            questionType: 'singleChoice',
                            options: ['Happy', 'Normal', 'Sad'],
                            answerFromDoctor: 'Happy',
                            answerFromPatient: 'Sad',
                        },
                        {
                            question: 'How often do you bleed today?',
                            id: 2,
                            type: 'Serious',
                            questionType: 'singleChoice',
                            options: ['Always', 'Often', 'Hardly'],
                            answerFromDoctor: 'Hardly',
                            answerFromPatient: 'Often',
                        },
                        {
                            question: 'Do you drink today today?',
                            id: 5,
                            type: 'Serios',
                            questionType: 'boolean',
                            options: ['Yes, I do', 'No, I do not'],
                            answerFromDoctor: 'Yes, I do',
                            answerFromPatient: 'No, I do not',
                        },
                    ],
                    dueDate: '2021-10-12 12:00:00',
                    assignedBy: 'Dr. Virgil Van Dijk',
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
    patients: [
        {
            name: 'Patient 1',
            id: 1,
            disease: [
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
            name: 'Patient 2',
            id: 1,
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
            patient: { name: 'Patient 1', id: 1 },
            place: '1077 Wesselenyi utca 43, Budapest',
            time: '2021-10-10 10:20:00',
        },
        {
            id: 2,
            patient: { name: 'Patient 2', id: 1 },
            place: '1117 Fehervari utca 15, Budapest',
            time: '2021-10-11 11:20:00',
        },
        {
            id: 3,
            doctor: { name: 'Patient 1', id: 1 },
            place: '1117 Fehervari utca 15, Budapest',
            time: '2021-11-11 11:20:00',
        },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
};
