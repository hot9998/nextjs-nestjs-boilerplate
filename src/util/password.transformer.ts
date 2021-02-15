import { HashUtil } from './hash.util.ts';
import { ValueTransformer } from 'typeorm';

export class PasswordTransformer implements ValueTransformer {
  to(value: string) {
    return HashUtil.make(value);
  }

  from(value: string) {
    return value;
  }
}
