import {useForm} from "@mantine/form";
import {Button, Container, Group, TextInput} from "@mantine/core";
import {RegisterData, registerEvent} from "./model.ts";

export const RegisterPage = () => {
  const handleSubmit = (values: RegisterData) => registerEvent(values);

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });
  return (

    <Container size="xs">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          key={form.key('email')}
          {...form.getInputProps('email')}
        />

        <TextInput
          withAsterisk
          label="Password"
          placeholder="password"
          key={form.key('password')}
          {...form.getInputProps('password')}
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit">Register</Button>
        </Group>
      </form>
    </Container>
  )
}
