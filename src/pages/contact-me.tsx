// @flow
import * as React from 'react';

import { ReactComponent as PointerSVG } from '../assets/Pointer.svg';
import { Action } from '../components/action/action.component';
import { Checkbox } from '../components/checkbox/checkbox.component';
import { Input } from '../components/input/input.component';
import { Marquee } from '../components/marquee/marguee.component';
import { Textarea } from '../components/textarea/textarea.component';
import { Title } from '../components/title/title.component';

export const ContactMe = () => {
  return (
    <>
      <div className="page row">
        <Title
          title="Let’s Work Together"
          subtitle="Looking to book a photoshoot or find out more information? Contact me or complete the contact form below. I’m looking forward to hearing from you!"
        />
        <section className="contact">
          <div className="contact-information">
            <img
              src="https://res.cloudinary.com/dufli3jum/image/upload/v1679542374/LaraPorfolio/Lara-Drummond/medium/CB-LD-Lara2_s68w6m.jpg"
              alt="Lara Drummond"
              width="400"
            />
            <PointerSVG />
            <div className="contact-information__group">
              <h6>Email</h6>
              <p>lara@drummondphotography.ca</p>
            </div>
            <div className="contact-information__group">
              <h6>Phone</h6>
              <Action as="link" styleType="link" to={'tel:+123456'}>
                +1 (123) 456 7890
              </Action>
            </div>
            <div className="contact-information__group">
              <h6>Address</h6>
              <p>2300 Ryan Road Courtenay BC V9N 8N6</p>
            </div>
            <div className="contact-information__group">
              <h6>Follow me</h6>
              <Action as="link" styleType="link" to={'#!'}>
                Instagram
              </Action>
              <Action as="link" styleType="link" to={'#!'}>
                Facebook
              </Action>
              <Action as="link" styleType="link" to={'#!'}>
                Pinterest
              </Action>
            </div>
          </div>
          <form className="contact-form">
            <h3>Fill Out Form Below:</h3>
            <p className="p--large--bold">
              After completing this form, I will reach out to you within 5 business days.{' '}
            </p>
            <div className="contact-form__group">
              <Input label="First Name" placeholder="First Name" />
              <Input label="Last Name" placeholder="Last Name" />
            </div>
            <div className="contact-form__group">
              <Input label="Business Name (if applicable)" placeholder="Business Name" />
            </div>
            <div className="contact-form__group">
              <Input label="Email Address" placeholder="example@email.com" />
            </div>
            <div className="contact-form__group">
              <Input label="Phone Number" placeholder="+1 (123) 456 7890" />
            </div>
            <div className="contact-form__group checkbox-group">
              <label htmlFor="photoType">Type of Photography</label>
              <Checkbox label="Editorial" />
              <Checkbox label="Fashion" />
              <Checkbox label="Food" />
              <Checkbox label="Product" />
              <Checkbox label="Other" />
            </div>
            <div className="contact-form__group">
              <Input label="Project Budget" placeholder="" />
            </div>
            <div className="contact-form__group">
              <Input label="Location" placeholder="" />
            </div>
            <div className="contact-form__group">
              <Input
                type="date"
                label="Ideal Project Date"
                placeholder="MM / DD / YYYY"
              />
            </div>
            <div className="contact-form__group">
              <Textarea
                placeholder="Enter message..."
                label="Tell me about your photography goals"
              />
            </div>
            <div className="contact-form__group checkbox-group">
              <label htmlFor="photoType">How did you hear about me?</label>
              <Checkbox label="Referral" />
              <Checkbox label="Social Media" />
              <Checkbox label="Internet" />
              <Checkbox label="Other" />
            </div>
            <Action as="button" styleType="secondary">
              let’s get started
            </Action>
          </form>
        </section>
      </div>
      <Marquee color="accent-1" />
    </>
  );
};
