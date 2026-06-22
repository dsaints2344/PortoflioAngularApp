import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { Icon } from '../../shared/icons/icon';
import { PortfolioService } from '../../core/data/portfolio.service';
import { ContactService } from '../../core/data/contact.service';

type FieldName = 'email' | 'message';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact.html',
})
export class Contact {
  private readonly fb = inject(FormBuilder);
  private readonly portfolio = inject(PortfolioService);
  private readonly contactService = inject(ContactService);

  readonly socials = this.portfolio.socials;
  readonly blurb = this.portfolio.contactBlurb;
  readonly availability = this.portfolio.availability;

  readonly sent = signal(false);
  readonly submitting = signal(false);

  readonly form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    subject: [''],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  protected isInvalid(name: FieldName): boolean {
    const control = this.form.controls[name];
    return control.invalid && (control.touched || control.dirty);
  }

  protected errorFor(name: FieldName): string {
    const errors = this.form.controls[name].errors;
    if (!errors) {
      return '';
    }
    if (name === 'email') {
      if (errors['required']) return 'Email is required';
      if (errors['email']) return 'Enter a valid email address';
    } else {
      if (errors['required']) return 'Message is required';
      if (errors['minlength']) return 'A little more detail, please (10+ chars)';
    }
    return '';
  }

  protected async submit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.submitting.set(true);
    try {
      await this.contactService.send(this.form.getRawValue());
      this.sent.set(true);
    } finally {
      this.submitting.set(false);
    }
  }

  protected reset(): void {
    this.form.reset();
    this.sent.set(false);
  }
}
