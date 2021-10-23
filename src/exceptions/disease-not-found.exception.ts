import { NotFoundException } from '@nestjs/common';

export class DiseaseNotFoundException extends NotFoundException {
  constructor(error?: string) {
    super('error.disease_not_found', error);
  }
}
