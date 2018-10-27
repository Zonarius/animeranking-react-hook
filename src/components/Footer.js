import React from 'react';
import { Footer as BFooter } from 'bloomer/lib/layout/Footer';
import { Container } from 'bloomer/lib/layout/Container';
import { Title } from 'bloomer/lib/elements/Title';
import { Field } from 'bloomer/lib/elements/Form/Field/Field';
import { Control } from 'bloomer/lib/elements/Form/Control';
import { Input } from 'bloomer/lib/elements/Form/Input';
import { Button } from 'bloomer/lib/elements/Button';
import './Footer.css'

function handleLogin(ev) {
  ev.preventDefault();
}

export default function Footer() {
  return (
    <BFooter>
      <Container>
        <Title tag="h2">Login</Title>
        <form className="login" onSubmit={handleLogin}>
          <Field>
            <Control>
              <Input type="text" placeholder="Username" />
            </Control>
          </Field>
          <Field>
            <Control>
              <Input type="password" placeholder="Password" />
            </Control>
          </Field>
          <Button type="submit" isColor="primary">Submit</Button>
        </form>
      </Container>
    </BFooter>
  )
}