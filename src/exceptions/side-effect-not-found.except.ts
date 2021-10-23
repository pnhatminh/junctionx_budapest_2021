import { NotFoundException } from '@nestjs/common';

export class SideEffectNotFoundException extends NotFoundException {
  constructor(error?: string) {
    super('error.side_effect_not_found', error);
  }
}
