import { mockGetDoctor } from './../../mockData/MockGetDoctor';
import { AnswerRepository } from './../questionnaire/answer.repository';
import { AssignmentRepository } from './../questionnaire/AssignmentRepository.repository';
import { Injectable } from '@nestjs/common';
import type { FindConditions } from 'typeorm';

import type { PageDto } from '../../common/dto/page.dto';
import { FileNotImageException } from '../../exceptions/file-not-image.exception';
import { UserNotFoundException } from '../../exceptions/user-not-found.exception';
import type { IFile } from '../../interfaces';
import { AwsS3Service } from '../../shared/services/aws-s3.service';
import { ValidatorService } from '../../shared/services/validator.service';
import type { Optional } from '../../types';
import { UserRegisterDto } from '../auth/dto/UserRegisterDto';
import { UserDto } from './dto/user-dto';
import { UsersPageOptionsDto } from './dto/users-page-options.dto';
import { UserEntity } from './user.entity';
import { UserRepository } from './user.repository';
import { RoleType } from '../../common/constants/role-type';
import { DiseaseRepository } from '../disease/disease.repository';

@Injectable()
export class UserService {
    constructor(
        public readonly userRepository: UserRepository,
        public readonly validatorService: ValidatorService,
        public readonly assignmentRepository: AssignmentRepository,
        public readonly answerRepository: AnswerRepository,
        public readonly diseaseRepository: DiseaseRepository,
        public readonly awsS3Service: AwsS3Service,
    ) { }

    /**
     * Find single user
     */
    findOne(findData: FindConditions<UserEntity>): Promise<Optional<UserEntity>> {
        return this.userRepository.findOne(findData);
    }

    async findByUsernameOrEmail(
        options: Partial<{ username: string; email: string }>,
    ): Promise<Optional<UserEntity>> {
        const queryBuilder = this.userRepository.createQueryBuilder('user');

        if (options.email) {
            queryBuilder.orWhere('user.email = :email', {
                email: options.email,
            });
        }

        if (options.username) {
            queryBuilder.orWhere('user.username = :username', {
                username: options.username,
            });
        }

        return queryBuilder.getOne();
    }

    async createUser(
        userRegisterDto: UserRegisterDto,
        file: IFile,
    ): Promise<UserEntity> {
        const user = this.userRepository.create(userRegisterDto);

        if (file && !this.validatorService.isImage(file.mimetype)) {
            throw new FileNotImageException();
        }

        if (file) {
            user.avatar = await this.awsS3Service.uploadImage(file);
        }

        return this.userRepository.save(user);
    }

    async getUsers(
        pageOptionsDto: UsersPageOptionsDto,
    ): Promise<PageDto<UserDto>> {
        const queryBuilder = this.userRepository.createQueryBuilder('user');
        const [items, pageMetaDto] = await queryBuilder.paginate(pageOptionsDto);

        return items.toPageDto(pageMetaDto);
    }

    async getUser(userId: number): Promise<UserDto | any> {
        const queryBuilder = this.userRepository.createQueryBuilder('user');

        queryBuilder.where('user.id = :userId', { userId });

        const userEntity = await queryBuilder.getOne();

        if (!userEntity) {
            throw new UserNotFoundException();
        }
        const userDto = userEntity.toDto()
        if (userEntity.role === RoleType.USER) {
            // const assignment = await this.assignmentRepository.findOne({ patient: userEntity })
            const assignment = await this.assignmentRepository.createQueryBuilder("assignment")
                .leftJoinAndSelect("assignment.patient", "users")
                .leftJoinAndSelect("assignment.questionnaire", "questionnaires")
                .leftJoinAndSelect("questionnaires.questions", "questions")
                .leftJoinAndSelect("questionnaires.disease", "diseases")
                .where("assignment.patient_id = :patient_id", { patient_id: userEntity.id })
                .getOne();
            userDto.diseases = []
            userDto.diseases.push({ ...assignment?.questionnaire?.disease! })
            if (userDto.diseases.length > 0) {
                userDto.diseases[0].questionnaires = []
                const questionnaire = {
                    id: assignment?.questionnaire.id!,
                    questions: [] as {
                        question: string;
                        id: number;
                        type: string;
                        questionType: string;
                        options: string[];
                        answerFromDoctor?: string;
                        answerFromPatient?: string;
                    }[]
                }
                for (let question of assignment?.questionnaire?.questions!) {
                    const answer = await this.answerRepository.createQueryBuilder("answer")
                        .leftJoinAndSelect("answer.question", "questions")
                        .leftJoinAndSelect("answer.assignment", "assignments")
                        .where("answer.assignment_id = :assignment_id", { assignment_id: assignment!.id })
                        .andWhere("answer.question_id = :question_id", { question_id: question.id })
                        .getOne();
                    questionnaire.questions.push({
                        question: question.question,
                        id: question.id,
                        type: question.type,
                        questionType: question.questionType,
                        options: question.options,
                        answerFromDoctor: question.answerFromDoctor,
                        answerFromPatient: answer?.answerFromPatient
                    })
                }
                userDto.diseases[0].questionnaires.push(questionnaire)
                userDto.diseases[0].sideEffects = [
                    {
                        name: 'Cough',
                        id: 1,
                    },
                    {
                        name: 'Bleeding',
                        id: 2,
                    },
                ]
                userDto.diseases[0].articles = [
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
                ]
            }
            userDto.appointments = [
                {
                    id: 1,
                    doctor: { name: 'Dr. Virgil Van Dijk', id: 2 },
                    place: '1077 Wesselenyi utca 43, Budapest',
                    time: '2021-10-10 10:20:00',
                },
                {
                    id: 2,
                    doctor: { name: 'Dr. Ronaldo', id: 2 },
                    place: '1117 Fehervari utca 15, Budapest',
                    time: '2021-10-11 11:20:00',
                },
                {
                    id: 3,
                    doctor: { name: 'Dr. Ronaldo', id: 2 },
                    place: '1117 Fehervari utca 15, Budapest',
                    time: '2021-11-11 11:20:00',
                },
            ]

            userDto.doctors = [
                {
                    name: 'Dr. Virgil Van Dijk',
                    id: 1,
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
            ]

            return userDto
        }
        else return mockGetDoctor


    }
}
