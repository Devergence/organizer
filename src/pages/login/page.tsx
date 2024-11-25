import {useForm} from "@mantine/form";
import {Button, Container, Group, TextInput} from "@mantine/core";
import {submitEvent} from "./model.ts";

export const LoginPage = () => {
  const handleSubmit = (values: typeof form.values) => {
    console.log(values);
  };
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
      login page
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
          <Button type="submit" onClick={() => submitEvent()}>Войти</Button>
        </Group>
      </form>
    </Container>
  )
}