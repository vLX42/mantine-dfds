'use client';

import {
  Button,
  Group,
  useMantineColorScheme,
  TextInput,
  Grid,
  Container,
  Select,
} from '@mantine/core';
import { Calendar } from '@dfds-ui/icons/system';

export function ComponentsTest() {
  const { setColorScheme } = useMantineColorScheme();

  return (
    <>
      <Group justify="center" mt="xl">
        <Button color="primary-light" onClick={() => setColorScheme('light')}>
          Light
        </Button>
        <Button color="secondary-main" onClick={() => setColorScheme('dark')}>
          Dark
        </Button>
        <Button color="primary-main" onClick={() => setColorScheme('auto')}>
          Auto
        </Button>
      </Group>
      <Container>
        <Grid>
          <Grid.Col span={6}>
            <TextInput
              label="Input label"
              description="Input description"
              placeholder="Input placeholder"
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              label="Input label"
              description="Input description"
              placeholder="Input placeholder"
              withAsterisk
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              label="Input label"
              placeholder="Input placeholder"
              withAsterisk
              error="error"
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              label="Input label"
              description="Input description"
              placeholder="Input placeholder"
              withAsterisk
              leftSection={'Kg'}
              rightSection={<Calendar />}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Select
              label="Your favorite library"
              placeholder="Pick value"
              data={['React', 'Angular', 'Vue', 'Svelte']}
            />
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
}
