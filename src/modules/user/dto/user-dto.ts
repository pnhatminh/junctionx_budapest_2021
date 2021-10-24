import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { RoleType } from '../../../common/constants/role-type';
import { AbstractDto } from '../../../common/dto/abstract.dto';
import type { UserEntity } from '../user.entity';

export class UserDto extends AbstractDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    firstName: string;

    @ApiProperty()
    lastName: string;

    @ApiPropertyOptional({ enum: RoleType })
    role: RoleType;

    @ApiPropertyOptional()
    email?: string;

    @ApiPropertyOptional()
    avatar?: string;

    @ApiPropertyOptional()
    phone?: string;

    @ApiPropertyOptional()
    diseases?: Array<{
        name: string;
        id: number;
        sideEffects?: Array<{
            name: string;
            id: number;
        }>;
        questionnaires?: Array<{
            id: number
            questions?: Array<{
                question: string;
                id: number;
                type: string;
                questionType: string;
                options: string[];
                answerFromDoctor?: string;
                answerFromPatient?: string;
            }>;
        }>;
        articles?: Array<{
            title: string;
            id: number;
            content: string;
        }>;
    }>;

    @ApiPropertyOptional()
    doctors?: Array<{
        name: string;
        id: number;
        specialty: Array<{
            name: string;
            id: number;
            yearOfExperience: number;
        }>;
        address: string;
        phone: string;
    }>;

    @ApiPropertyOptional()
    appointments?: Array<{
        id: number;
        doctor: { name: string; id: number };
        place: string;
        time: string;
    }>;

    constructor(user: UserEntity) {
        super(user);
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.role = user.role;
        this.email = user.email;
        this.avatar = user.avatar;
        this.phone = user.phone;
    }
}
